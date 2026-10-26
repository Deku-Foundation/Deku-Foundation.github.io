# Engineering Workflow

This repository follows a low-overhead, two-branch workflow suitable for a small project.

## Branch responsibilities

| Branch | Purpose | Promotion rule |
| --- | --- | --- |
| `dev` | Integration, experiments, and automated validation | Changes are reviewed and tested here first |
| `main` | Reviewed baseline and public deployment source | Promote from `dev` only after required checks pass |

## Routine change

1. Inspect the relevant source, issue, and existing tests.
2. Make a focused change on `dev`; avoid unrelated refactors.
3. Run the repository's automated checks and inspect the complete diff.
4. Once the required checks pass, fast-forward `main` directly to the exact `dev` commit that was checked; maintainers do not open a pull request to promote `dev` to `main`.
5. Confirm that `main` and `dev` point to the same commit, then inspect post-promotion workflows and deployment status.
6. Start the next task only after the post-promotion checks have been reviewed.

## Branch cleanup

The branch-hygiene workflow deletes non-standard branches after a push to `main`, but preserves any branch that has an open pull request. This reduces abandoned branches without destroying active review work. It does not replace repository permissions or branch-protection settings.

## CI and release integrity

- Pin third-party GitHub Actions to reviewed commit SHAs.
- Grant each workflow only the permissions it needs.
- Keep validation workflows separate from deployment and publication privileges where practical.
- Treat successful checks as evidence only for the checks that actually ran.
- Scorecard findings and CI success do not establish that a prototype is production-ready.
- Keep credentials, signing keys, and secrets out of source control and logs.

## Release claims

A green test suite validates the tested code paths; it does not prove hardware compatibility, reproducible images, safe disk installation, or production operations unless those tests exist and pass.

## Documentation style

Write for the reader's task. State what is implemented, what has been tested and what remains planned; preserve limitations and keep translations aligned. Follow the [Deku Foundation technical writing standard](https://github.com/Deku-Foundation/.github/blob/main/EDITORIAL_STYLE.md).
