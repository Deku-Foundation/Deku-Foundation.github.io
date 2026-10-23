# Foundation engineering operating model

**Applies to:** all Deku Foundation repositories  
**Effective from:** 2026-10-23  
**Purpose:** keep stable work on `main`, test integration on `dev`, and avoid unnecessary repositories and short-lived branches.

## Branch policy

Each active repository uses exactly two long-lived branches:

- `main` — reviewed, stable, publishable state.
- `dev` — integration and testing state; changes may be incomplete here.

Do not create a new branch for routine work. Make a focused, atomic commit to `dev`, or use a temporary branch only when parallel work, an external contribution or a risky isolated experiment genuinely requires it. Remove temporary branches after their work is merged. Do not create a new repository to hold a feature that belongs in an existing repository.

Release flow:

1. Make a small change on `dev` with a clear commit message.
2. Run the repository's automated tests and inspect the actual results.
3. Review the diff, security implications, documentation and status claims.
4. Open one pull request from `dev` to `main` when the complete change is ready.
5. Merge only when required checks pass and any required review is complete.
6. Synchronize `dev` to the resulting `main` commit after merge, then verify that both branches have the same tree.
7. Publish only from the approved `main` state. A successful CI run is not, by itself, proof that an OS image boots or is safe to install.

Protect `main` against force pushes and accidental deletion; require pull requests and the relevant CI checks where GitHub repository settings support it. Do not silently bypass failing checks. If the organization cannot enforce a rule with its current plan or permissions, document the limitation rather than claiming enforcement.

## Repository boundaries

Keep each repository responsible for one coherent component. Prefer improving an existing project over splitting work into a new repository. Create a new repository only when the component has a distinct lifecycle, interface, maintainer responsibility or release boundary.

The current Linux prototype repositories have separate roles:

- `deku-recipes`: reviewed package recipe metadata.
- `deku-build`: build-plan validation and future isolated build execution.
- `deku-pkg`: package metadata, dependency planning and future client-side package operations.
- `deku-system`: composition manifests and future system-image assembly.
- `deku-installer`: installation-plan validation and future installation UI/operations.
- `deku-infra`: infrastructure design and future deployment configuration.
- `deku-linux`: distribution overview, architecture and project integration.

These are current repository responsibilities, not claims that the future services already exist. Keep the website in `Deku-Foundation.github.io`.

## Reuse before implementation

Before implementing a substantial subsystem, write a short comparison of maintained upstream options and the minimum custom alternative. Compare security boundaries, supported use cases, licensing, upstream health, update burden, testability, accessibility, portability and exit cost. Prototype the leading candidate in a disposable environment before committing to an architecture.

Do not fork a project solely to rename it. Keep custom code focused on Deku-specific integration and policy where mature upstream tools already solve the general problem. Track upstream versions, patches, licenses and provenance for reused components.

## Required quality gates

Each change should have the smallest useful set of checks:

- Tests for changed behavior, including negative and malformed-input cases.
- Formatting, linting and static checks appropriate to the language.
- Input bounds and fail-closed behavior for parsers and manifests.
- No credentials, signing keys or release secrets in source or pull-request builds.
- Minimal GitHub Actions permissions and third-party actions pinned to reviewed full commit SHAs where practical.
- Updated documentation and explicit limitations.
- Review of local links, metadata and keyboard/accessibility behavior for website changes.

Use disposable VMs for OS-image, boot, installer and update experiments. Never test a first image pipeline on a real disk. Keep build execution, artifact signing and release publication in separate trust domains.

## Status vocabulary

Use these terms consistently:

- **Proposal:** written direction without an implementation.
- **Prototype:** limited implementation with explicit boundaries.
- **Experimental:** working feature not supported for general use.
- **Release candidate:** complete candidate undergoing release validation.
- **Supported release:** published artifact with tested installation, update, recovery, security response and documented support scope.

Do not infer production readiness from a passing schema test, successful compilation or a single VM boot. Publish release claims only when the corresponding evidence is available.

## Current priority order

1. Keep the existing website and repository map accurate and accessible.
2. Establish repeatable tests and a stable two-branch release flow.
3. Evaluate upstream system-image and installer technology before writing those layers from scratch.
4. Complete the smallest end-to-end prototype: pinned inputs → isolated build → verifiable artifact → VM boot → update/recovery test.
5. Define a separate, staged research plan for the Arabic-first programming language; do not imply a compiler or self-hosting implementation exists until it does.
