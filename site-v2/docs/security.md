---
id: security
title: Security model
sidebar_label: Security
description: Existing prototype safeguards and the trust controls still required for a release.
---

# Security model

The security strategy is to make input boundaries explicit and reduce privilege. Prototype tests are useful but do not substitute for a complete supply-chain or system audit.

## Current prototype safeguards

Across the public repositories, validation code uses bounded input sizes, rejects duplicate JSON keys and unknown fields where applicable, constrains source URLs and output paths, pins upstream revisions and checks selected artifact bytes against recorded SHA-256 digests.

Each safeguard applies only to the code path and input contract covered by its tests.

## Not implemented as production services

- Publisher-authenticated package repositories and production signing-key management.
- Isolated build workers that run untrusted package build instructions.
- Artifact publication, mirrors and a supported package catalog.
- Host package installation and transactional rollback.
- A production installer that writes partition tables, filesystems or bootloader state.
- An end-to-end bootable image and release verification pipeline.

## Reporting a security issue

Do not post credentials, private keys, exploit details affecting users or sensitive data in a public issue. Follow the reporting guidance in the project's [security page](https://deku-foundation.github.io/security/) and repository-level disclosure instructions.

## Release principle

Claims about provenance, isolation, signatures and recoverability must be supported by repeatable tests and observable artifacts. A passing input-validation suite does not certify the operating system as a whole.
