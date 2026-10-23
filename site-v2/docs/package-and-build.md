---
id: package-and-build
title: Package and build model
sidebar_label: Packages and builds
description: The present scope of recipe metadata, build planning and package planning.
---

# Package and build model

Deku keeps source review, build planning, artifact production, repository publication and installation as separate trust boundaries. At present, those components mostly validate metadata and plans.

## Recipes

The recipe prototype validates package identifiers, version tokens, HTTPS source URLs, immutable source revisions, expected SHA-256 digests, license metadata, architectures and dependency declarations. It does not fetch sources, execute build instructions or publish a supported package catalog.

## Build plan

The build validator requires pinned source revisions, canonical digests, supported architecture, unprivileged execution intent and network-disabled build intent. It bounds input size and declared output paths. It does not yet run builds, create artifacts or supply isolated workers.

## Package planner

The package prototype validates a bounded catalog, checks artifact bytes against a provided digest and plans dependencies deterministically. It does not authenticate repository publishers, download or unpack artifacts, execute package scripts, modify the host or provide transactional rollback.

A digest match shows that the bytes match the stated digest. It does not by itself prove who published the artifact or whether the repository metadata is trusted.

## Required end-to-end work

1. Reviewed recipes and immutable source inputs.
2. Unprivileged, network-restricted build workers.
3. Artifact provenance and reproducible-build checks.
4. Signed repository metadata and key-rotation/revocation procedures.
5. Safe download, unpack and installation semantics.
6. Transaction recovery, rollback and integration tests on virtual machines.

Do not advertise these planned stages as available services before the artifacts and tests exist.
