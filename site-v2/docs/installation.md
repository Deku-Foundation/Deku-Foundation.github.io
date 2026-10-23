---
id: installation
title: Installation and release status
sidebar_label: Installation status
description: What the installer prototype can validate today and what is needed for an installable release.
---

# Installation and release status

There is currently no official Deku Linux ISO or supported installable release.

The installer repository contains a non-destructive plan validator. It does not discover physical disks, write partitions, format filesystems, mount a target root, install a bootloader or install the operating system.

## Before a release can be announced

- A verified system-image build pipeline must produce a reproducible bootable image.
- Installation must be tested on supported virtual-machine configurations.
- Storage actions must have explicit plans, preflight checks, cancellation behaviour and recovery tests.
- First boot, user creation, network setup and system updates must be validated.
- Download artifacts and release metadata must be checksummed, signed and published through a documented trust path.
- Security reporting and release support expectations must be published.

Until these gates pass, users should treat the repositories as engineering prototypes and not attempt to install them on production hardware.
