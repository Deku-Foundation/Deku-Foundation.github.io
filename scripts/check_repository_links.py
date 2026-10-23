#!/usr/bin/env python3
"""Prevent links to obsolete or nonexistent organization repositories."""
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
STALE = "github.com/Deku-Foundation/" + "project"
errors = []
checked = 0
for path in sorted(ROOT.rglob("*")):
    if not path.is_file() or ".git" in path.parts:
        continue
    if path.suffix.lower() not in {".html", ".md", ".xml", ".txt"}:
        continue
    try:
        content = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        errors.append(f"{path.relative_to(ROOT)}: not valid UTF-8")
        continue
    checked += 1
    if STALE in content:
        errors.append(f"{path.relative_to(ROOT)}: contains obsolete repository URL {STALE}")
if errors:
    print("\n".join(errors), file=sys.stderr)
    raise SystemExit(1)
print(f"Checked {checked} text files for obsolete repository links.")
