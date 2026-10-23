---
id: contributing
title: Contributing
sidebar_label: Contributing
description: A low-friction, evidence-led contribution process.
---

# Contributing

Deku Linux is developed in the open. The goal is to make changes easy to understand, review, test and maintain.

## Development flow

1. Read the repository README and its status section.
2. Open an issue for work that changes architecture, trust boundaries or public behaviour.
3. Work on the shared `dev` branch and run that repository's validation workflows.
4. Keep changes focused; avoid mixing unrelated design, code and documentation changes.
5. Submit `dev` to `main) through a pull request only after the relevant checks pass.
6. Explain what was tested and what remains untested.

## Useful contributions

- Reproducible test fixtures and adversarial input cases.
- Clear interfaces between recipes, build plans, package metadata and system composition.
- Documentation that distinguishes implemented behaviour from proposals.
- Accessibility, translation quality and broken-link fixes.
- Upstream research that identifies maintenance and licensing costs.

## Keep status accurate

Do not describe prototypes as completed services, announce release dates without evidence, or add download buttons until an official artifact exists. Tests should report what they exercise rather than make broad claims about the whole system.

Read the project's [contribution policy](https://github.com/Deku-Foundation/deku-linux/blob/main/CONTRIBUTING.md) and open a focused issue or pull request when the next step is unclear.
