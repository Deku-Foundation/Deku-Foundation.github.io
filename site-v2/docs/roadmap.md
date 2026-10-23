---
id: roadmap
title: Roadmap and release gates
sidebar_label: Roadmap
description: Engineering milestones tied to verifiable completion criteria.
---

# Roadmap and release gates

Deku Linux does not promise a release date ahead of the engineering work. A milestone is complete only when its exit conditions can be tested and the relevant artifacts are available for review.

## 1. Establish trusted inputs

- Validate recipes, licenses, source revisions and digests.
- Keep dependency planning deterministic and bounded.
- Test invalid inputs, duplicate fields, malformed URLs and path traversal.

## 2. Build reproducible artifacts

- Implement unprivileged, isolated build workers.
- Keep build execution network-restricted by default.
- Record provenance and compare independent builds where feasible.
- Publish and verify signed repository metadata.

## 3. Add safe transactions and recovery

- Install only verified artifacts into a controlled target.
- Detect file conflicts and interrupted operations.
- Test rollback, recovery and repeated update scenarios.

## 4. Compose and boot a system image

- Assemble a root filesystem and initramfs from reviewed inputs.
- Generate signed release metadata.
- Test installation and first boot in virtual machines.
- Verify updates, recovery and release checks before an ISO announcement.

The current package, build and installer components are prototypes; milestones 2–4 are not completed end-to-end capabilities.
