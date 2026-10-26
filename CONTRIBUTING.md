# Contributing to Deku Foundation

Deku Foundation hosts several early-stage open-source engineering projects. Contributions should be small, reviewable, tested, and honest about what is implemented.

## Before changing code

1. Read the relevant repository README, roadmap, and existing architecture decisions.
2. Search existing issues and pull requests before opening a duplicate.
3. For broad or irreversible changes, open an issue or decision record first.
4. Never commit credentials, access tokens, private keys, personal data, or proprietary material.

## The two-branch workflow

- `main` is the reviewed, publishable baseline. Website deployment and scheduled release-facing automation run from this branch.
- `dev` is the shared integration branch. Implement and validate work here first.
- Maintainers work directly on `dev`. Run the relevant checks and review the diff; when required checks pass, fast-forward `main` to the exact verified `dev` commit. Do not use a pull request to promote `dev` to `main`.
- Keep `main` and `dev` as the only persistent repository branches. Do not create in-repository feature branches for routine maintainer work.
- External contributors should use a fork and submit changes for review into `dev`. Confirm the site deployment and post-promotion checks after `main` changes.

## Pull request checklist

- Explain the problem, chosen approach, and meaningful trade-offs.
- Link related issues or decisions.
- List commands/checks actually run and their results.
- Update documentation and all affected translations.
- Preserve backward compatibility where practical; call out breaking changes.
- Do not claim release readiness, security certification, reproducibility, or compatibility without evidence.

## Quality and licensing

Prefer maintained upstream components over unnecessary forks. Keep changes focused and tests deterministic. Contributors must have the right to submit their work; preserve third-party copyright and license notices. Check each repository's license before copying or reusing code.

## Conduct and security

Follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Do not disclose exploitable vulnerability details in public issues; follow [SECURITY.md](SECURITY.md).

## Documentation style

Write for the reader's task. State what is implemented, what has been tested and what remains planned; keep important limitations and translations aligned. Follow the [Deku Foundation technical writing standard](https://github.com/Deku-Foundation/.github/blob/main/EDITORIAL_STYLE.md).
