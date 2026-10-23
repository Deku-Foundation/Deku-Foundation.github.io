#!/usr/bin/env python3
"""Guard a small set of website text-contrast and microtype design tokens.

This is a regression check for known text pairs, not a complete WCAG audit.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_PATH = ROOT / "assets" / "styles.css"
MIN_CONTRAST = 4.5
MIN_MICROTYPE_PX = 10.0


def relative_luminance(hex_color: str) -> float:
    value = hex_color.lstrip("#")
    if len(value) != 6:
        raise ValueError(f"expected a six-digit hex colour, got {hex_color!r}")
    channels = [int(value[i : i + 2], 16) / 255 for i in (0, 2, 4)]
    linear = [
        channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4
        for channel in channels
    ]
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]


def contrast(foreground: str, background: str) -> float:
    high, low = sorted(
        (relative_luminance(foreground), relative_luminance(background)),
        reverse=True,
    )
    return (high + 0.05) / (low + 0.05)


def declarations(css: str, selector: str) -> list[str]:
    blocks = []
    for match in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        selectors = {item.strip() for item in match.group(1).strip().split(",")}
        if selector in selectors:
            blocks.append(match.group(2))
    return blocks


def property_value(block: str, name: str) -> str | None:
    match = re.search(rf"(?:^|;)\s*{re.escape(name)}\s*:\s*([^;]+)", block)
    return match.group(1).strip() if match else None


def resolve_color(value: str, root_vars: dict[str, str]) -> str | None:
    value = value.strip().lower()
    variable = re.fullmatch(r"var\((--[a-z0-9-]+)\)", value)
    if variable:
        return root_vars.get(variable.group(1))
    return value if re.fullmatch(r"#[0-9a-f]{6}", value) else None


def main() -> int:
    try:
        css = CSS_PATH.read_text(encoding="utf-8")
    except OSError as exc:
        print(f"Cannot read {CSS_PATH}: {exc}", file=sys.stderr)
        return 1

    root_blocks = declarations(css, ":root")
    if not root_blocks:
        print("Missing :root design tokens.", file=sys.stderr)
        return 1
    root_vars = dict(re.findall(r"(--[a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{6})", root_blocks[0]))
    errors: list[str] = []
    contrast_pairs = [
        ("body text", resolve_color("var(--ink)", root_vars), resolve_color("var(--paper)", root_vars)),
        ("muted text", resolve_color("var(--muted)", root_vars), resolve_color("var(--paper)", root_vars)),
        ("primary text link", resolve_color("var(--green-strong)", root_vars), resolve_color("var(--surface)", root_vars)),
    ]

    for selector, label in ((".status-research", "research badge"), (".status-prototype", "prototype badge"), (".proof-label", "proof label")):
        blocks = declarations(css, selector)
        if not blocks:
            errors.append(f"Missing CSS rule for {selector}.")
            continue
        foreground = property_value(blocks[0], "color")
        background = property_value(blocks[0], "background")
        if selector == ".proof-label":
            background = "var(--paper)"
        if foreground and background:
            contrast_pairs.append((label, resolve_color(foreground, root_vars), resolve_color(background, root_vars)))
        else:
            errors.append(f"Cannot read foreground/background tokens for {selector}.")

    for label, foreground, background in contrast_pairs:
        if not foreground or not background:
            errors.append(f"{label}: unsupported colour token.")
            continue
        ratio = contrast(foreground, background)
        print(f"{label}: {ratio:.2f}:1")
        if ratio < MIN_CONTRAST:
            errors.append(f"{label}: {ratio:.2f}:1 is below {MIN_CONTRAST}:1.")

    microtype_selectors = [
        ".brand-wordmark small",
        ".art-heading",
        ".art-footer",
        ".art-core>small",
        ".layer-number",
        ".art-layer small",
        ".hero-bottom",
        ".proof-label",
        ".platform-row-number",
        ".status",
        ".compat-tag",
        ".step-state",
        ".community-links small",
        ".repo-actions",
        ".content-nav",
        ".prose",
        ".resource-link span",
        ".site-notice",
        ".language-switch a",
        ".footer-bottom",
    ]
    for selector in microtype_selectors:
        blocks = declarations(css, selector)
        if not blocks:
            errors.append(f"Missing microtype rule for {selector}.")
            continue
        for block in blocks:
            for name in ("font-size", "font"):
                value = property_value(block, name)
                if not value:
                    continue
                match = re.search(r"(?<![\w.])([0-9]+(?:\.[0-9]+)?)px", value)
                if not match:
                    continue
                size = float(match.group(1))
                if size < MIN_MICROTYPE_PX:
                    errors.append(f"{selector}: {name} uses {size:g}px; minimum is {MIN_MICROTYPE_PX:g}px.")
                break

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Design-token checks passed. This is a targeted regression check, not a complete accessibility audit.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
