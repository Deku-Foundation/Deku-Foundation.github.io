---
id: architecture
title: Architecture
sidebar_label: Architecture
description: System boundaries, upstream choices and evidence-led design decisions.
---

# Architecture and system boundaries

Deku Linux's initial desktop direction is KDE Plasma. GNOME is a possible later profile, not a supported edition today. The architecture should reuse mature upstream components where their contracts fit and introduce native code only when there is a clear reason.

## Responsibilities

- **Recipes** declare reviewed source inputs, licenses, dependencies and review notes.
- **Build tooling** validates bounded plans. Isolated execution and artifact production remain unimplemented.
- **Package planning** validates package metadata, verifies supplied bytes against recorded digests and computes deterministic dependency order. It does not install packages on the host.
- **System composition** validates manifests, but does not assemble a root filesystem, initramfs or ISO.
- **Installer planning** validates a non-destructive plan; it does not discover disks or write partitions.

## Reuse before replacement

Before building a subsystem, document:

1. The user-facing requirement and the required guarantees.
2. Mature upstream options and their licenses.
3. What can be reused unchanged, what needs integration and what cannot be safely reused.
4. The security and maintenance cost of a native implementation.
5. Tests that would show whether the choice works.

## Immutable system and recovery

An immutable or image-based system remains a research direction, not a shipped property. The design must first establish a verified image pipeline, system configuration, update semantics, boot validation and a tested recovery path. A theme or a package metadata planner cannot prove these system-level properties.

## Current architecture gate

The first end-to-end gate is a reproducible, reviewable bootable image whose source pins, package artifacts, signatures, configuration and build environment can be inspected. Until then, architecture proposals must remain clearly separated from implemented behaviour.
