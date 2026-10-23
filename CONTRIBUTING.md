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
- Run the repository's checks on `dev`, review the diff, then open a pull request from `dev` to `main`.
- Merge only when required checks pass and the change is understood. Confirm deployment or post-merge checks after promotion.
- Keep the branch set to `main` and `dev`. Temporary branches are exceptions for an open pull request or a documented need; do not create a new permanent branch for every task.
- Contributors who cannot safely share the integration branch should use a fork and submit a pull request.

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
