---
id: index
title: Project overview
slug: /
sidebar_label: Overview
---

# Deku Linux

Deku Linux is an independent, free and open-source Linux distribution in its foundation and prototype stage. It prioritizes maintainable engineering, explicit supply-chain trust boundaries and a coherent desktop experience.

:::caution Current status
There is no public ISO, supported release, production package repository, production installer or reproducible system-image pipeline. Public repositories contain prototypes and proposals; they do not yet form an installable distribution.
:::

## Start here

- **[Architecture](/docs/architecture/)** — component boundaries, upstream choices and open design decisions.
- **[Package and build model](/docs/package-and-build/)** — what package metadata, recipe validation and build planning currently do.
- **[Security model](/docs/security/)** — current controls, unimplemented boundaries and safe defaults.
- **[Installation status](/docs/installation/)** — what the installer planner validates and what it cannot do.
- **[Contributing](/docs/contributing/)** — how to propose small changes that are easy to review and test.
- **[Roadmap](/docs/roadmap/)** — evidence-based release gates.

## Repository map

| Repository | Current documented scope |
| --- | --- |
| [deku-linux](https://github.com/Deku-Foundation/deku-linux) | Project scope, principles and repository map |
| [deku-recipes](https://github.com/Deku-Foundation/deku-recipes) | Recipe metadata validation |
| [deku-build](https://github.com/Deku-Foundation/deku-build) | Build-plan validation |
| [deku-pkg](https://github.com/Deku-Foundation/deku-pkg) | Metadata, digests and dependency planning |
| [deku-system](https://github.com/Deku-Foundation/deku-system) | System composition manifest validation |
| [deku-installer](https://github.com/Deku-Foundation/deku-installer) | Non-destructive installation-plan validation |
| [deku-infra](https://github.com/Deku-Foundation/deku-infra) | Infrastructure and release-boundary documentation |

Passing unit tests demonstrates the tested prototype contract. It does not establish that an installer, signed package repository, bootable image or production build service exists.
