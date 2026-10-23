# Project Governance

## Current stage

Deku Foundation is an independent open-source engineering effort, not a claim of a legally incorporated foundation or a staffed institution. Projects may be at different stages: research, prototype, validation, or supported release. Repository documentation and test evidence define current status.

## Decision making

- Routine, reversible implementation choices may be made in a focused pull request.
- Cross-repository, security-sensitive, compatibility-affecting, or difficult-to-reverse choices should be documented in an issue or Architecture Decision Record before implementation.
- Decisions should explain context, alternatives, consequences, evidence, and unresolved risks.
- Maintainers should seek public technical discussion when practical and record the final outcome.
- No project page should imply community consensus, institutional endorsement, certification, or a production commitment without evidence.

## Repository responsibilities

Each repository's README identifies its purpose, boundaries, and status. Shared components should remain separate only when that separation has a clear maintenance or security benefit. Prefer upstream collaboration and avoid creating repositories for transient experiments.

## Branch and promotion policy

- `main`: reviewed baseline for published content and release-facing automation.
- `dev`: shared integration and validation branch.
- Work is validated in `dev`, then promoted through a pull request to `main` after checks pass.
- Keep only these two long-lived branches. Temporary branches are retained only while an open pull request or documented exception requires them.
- Never bypass failed checks merely to make a merge green. If a check is flaky or irrelevant, fix it or document a narrow, reviewed exception.

## Transparency

Document known limitations, incomplete infrastructure, and unsupported claims. Do not describe a planned service, signing system, installer, ISO, or release as available until it exists and has verifiable evidence.
