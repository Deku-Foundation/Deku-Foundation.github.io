# Security Policy

## Project status

Deku Foundation projects are in foundation, research, or prototype stages. Unless a repository explicitly documents a supported release, assume there is no production release or guaranteed response-time service level. This policy is not a security certification.

## Reporting a vulnerability

- Do not post credentials, private keys, tokens, personal information, or exploitable unpatched details in public issues.
- Use GitHub's private vulnerability reporting feature on the affected repository if it is enabled.
- If private reporting is unavailable, contact the repository maintainers through a private contact channel that is independently verified on the official GitHub organization profile. Do not trust addresses supplied only in an unsolicited message.
- Include the affected repository and revision, impact, reproducible steps, and mitigations where safe. Share only the minimum sensitive material needed.

Please allow maintainers reasonable time to investigate and coordinate disclosure. Do not access, modify, or disrupt systems or data that are not yours.

## Security engineering priorities

- Least-privilege CI and reviewable workflow permissions.
- Pinned third-party CI actions and dependency updates.
- Source provenance and integrity verification.
- Protected signing keys and verifiable release artifacts before any production release.
- Tested installation, upgrade, rollback, and recovery paths before claiming them.
- Clear supported-version and end-of-life policies once releases exist.

## Supported versions

No production releases are claimed by this policy. Consult each repository's current README and release records for its actual status.
