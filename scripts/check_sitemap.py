#!/usr/bin/env python3
"""Validate the public sitemap and its language alternates without third-party packages."""
from __future__ import annotations

import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://deku-foundation.github.io"
NS = {
    "sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
    "xhtml": "http://www.w3.org/1999/xhtml",
}
SUPPORTED = {"en", "fr", "ar"}


def fail(errors: list[str]) -> int:
    print("\n".join(errors), file=sys.stderr)
    return 1


def local_file(url: str) -> Path | None:
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.netloc != "deku-foundation.github.io":
        return None
    path = unquote(parsed.path).lstrip("/")
    target = (ROOT / path).resolve() if path else ROOT
    if ROOT not in target.parents and target != ROOT:
        return None
    if target.is_dir():
        target = target / "index.html"
    return target


def main() -> int:
    sitemap_path = ROOT / "sitemap.xml"
    try:
        tree = ET.parse(sitemap_path)
    except (ET.ParseError, OSError) as exc:
        return fail([f"sitemap.xml: invalid XML: {exc}"])

    errors: list[str] = []
    url_nodes = tree.findall("sm:url", NS)
    if not url_nodes:
        errors.append("sitemap.xml: no URL entries found")

    loc_to_node: dict[str, ET.Element] = {}
    for node in url_nodes:
        loc_node = node.find("sm:loc", NS)
        if loc_node is None or not (loc_node.text or "").strip():
            errors.append("sitemap.xml: URL entry is missing loc")
            continue
        loc = loc_node.text.strip()
        if loc in loc_to_node:
            errors.append(f"sitemap.xml: duplicate URL {loc}")
            continue
        loc_to_node[loc] = node
        target = local_file(loc)
        if target is None:
            errors.append(f"sitemap.xml: URL is outside the canonical HTTPS site: {loc}")
        elif not target.is_file():
            errors.append(f"sitemap.xml: URL has no local page: {loc}")

    for loc, node in loc_to_node.items():
        alternates = node.findall("xhtml:link", NS)
        if not alternates:
            continue
        seen: set[str] = set()
        languages: set[str] = set()
        for alternate in alternates:
            rel = alternate.attrib.get("rel")
            lang = alternate.attrib.get("hreflang", "").lower()
            href = alternate.attrib.get("href", "")
            if rel != "alternate" or not lang or not href:
                errors.append(f"sitemap.xml: malformed alternate on {loc}")
                continue
            if lang in seen:
                errors.append(f"sitemap.xml: duplicate hreflang {lang!r} on {loc}")
            seen.add(lang)
            if lang in SUPPORTED:
                languages.add(lang)
            if href not in loc_to_node:
                errors.append(f"sitemap.xml: alternate {lang!r} on {loc} points to URL not listed in sitemap: {href}")
            target = local_file(href)
            if target is None or not target.is_file():
                errors.append(f"sitemap.xml: alternate {lang!r} on {loc} has no local page: {href}")
                continue
            try:
                root = ET.parse(target).getroot()
            except ET.ParseError as exc:
                errors.append(f"{target.relative_to(ROOT)}: invalid HTML/XML structure: {exc}")
                continue
            html_lang = root.attrib.get("lang", "").lower()
            if html_lang != lang and lang in SUPPORTED:
                errors.append(f"sitemap.xml: alternate {lang!r} points to {target.relative_to(ROOT)} with lang={html_lang!r}")
        if languages and languages != SUPPORTED:
            errors.append(f"sitemap.xml: {loc} must list all supported language alternates {sorted(SUPPORTED)}; found {sorted(languages)}")

    if errors:
        return fail(errors)
    print(f"Validated {len(loc_to_node)} sitemap URLs and language alternates.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
