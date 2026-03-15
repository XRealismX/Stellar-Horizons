# Contributing to Stellar Horizons

Thank you for your interest in contributing to **Stellar Horizons**! This document outlines the rules and expectations for contributors. Please read everything carefully before opening an issue or submitting a pull request.

---

## Table of Contents

- [Who Can Contribute](#who-can-contribute)
- [What Contributors Can Work On](#what-contributors-can-work-on)
- [What Is Off-Limits](#what-is-off-limits)
- [Branching Rules](#branching-rules)
- [How to Contribute](#how-to-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Issue Reporting](#issue-reporting)
- [Code of Conduct](#code-of-conduct)
- [Questions](#questions)

---

## Who Can Contribute

Stellar Horizons is a carefully designed modpack with a deeply intentional progression system. The repository owner maintains full creative control over all design decisions, mod additions, recipe changes, and progression logic.

**Community contributors are welcome**, but contributions are intentionally scoped to keep the modpack's vision intact. If you are unsure whether something is in scope, DM the repository owner on Discord before doing any work.

---

## What Contributors Can Work On

Unless the repository owner has explicitly assigned or approved a feature task to you, contributions are limited to the following:

### Bug & Glitch Fixes
- Fixing broken quests (missing dependencies, incorrect reward entries, softlocks)
- Correcting misconfigured loot tables, recipes, or stage triggers that cause unintended behavior
- Resolving crashes or errors tied to misconfigured files (e.g., malformed JSON/TOML)
- Fixing broken advancement or progression stage logic

### Quest Text & Language File Updates
- Correcting grammar, spelling, or punctuation errors in quest descriptions and titles
- Improving unclear or confusing quest instructions for readability
- Updating or adding entries to language files (`.lang` / `.json` under `resources/`)
- Fixing placeholder text or missing translations

### Quest Layout & Visual Improvements
- Adding or updating images within quest pages to better illustrate objectives or rewards
- Improving the visual layout and formatting of quest entries for readability and polish
- Organizing quest page content to make the overall FTB Quests book feel more cohesive and presentable

### Performance Fixes
- Identifying and resolving configuration issues that cause excessive lag or poor performance
- Optimizing config files for mods that are known to be resource-heavy when misconfigured
- Fixing memory leaks or tick rate issues tied to specific mod settings
- Reporting and resolving chunk loading or world generation performance problems

### Feature Work (Owner-Assigned Only)
If the repository owner reaches out to you directly or tags you on an issue with a **`contributor-approved`** label, you may work on that specific feature. Feature contributions without prior owner approval will **not** be merged.

---

## What Is Off-Limits

The following are **not open for community contribution** unless explicitly directed by the repository owner:

- Adding, removing, or swapping mods in the pack
- Modifying progression stage gates, unlock conditions, or the storage progression chain
- Changes to pack configs that affect balance, difficulty, or intended gameplay flow
- Restructuring the quest tree or adding new quest chapters
- Any changes to `stages.toml`, `triggers.toml`, or related ProgressiveStages configuration files
- EMI visibility rules or AE2/Sophisticated Storage unlock logic
- Anything that affects the core modpack experience or progression philosophy

These areas require a full understanding of Stellar Horizons' design goals. Changes here will be closed without review if submitted without owner approval.

---

## Branching Rules

> **Contributors must only fork and work from the `main` branch.**

The repository may contain additional branches. These are reserved for the following purposes and are **not available for contributor use**:

- **Testing branches** — Used internally for experimental changes and pack testing
- **Owner development branches** — Used for in-progress features being developed by the repository owner

Pull requests targeting any branch other than `main` from a community contributor will be closed.

---

## How to Contribute

1. **Check existing issues first.** Make sure your bug or suggestion hasn't already been reported or addressed.
2. **Message the repository owner on Discord before starting work** (for anything beyond what is listed in the [What Contributors Can Work On](#what-contributors-can-work-on) section). This lets the owner confirm the fix is valid and in scope before you spend time on it.
3. **Fork the repository** from the `main` branch.
4. **Create a descriptive branch** in your fork (e.g., `fix/quest-typo-chapter2`, `fix/broken-stage-trigger`).
5. **Make your changes**, keeping them focused and minimal. Do not bundle unrelated changes into one pull request.
6. **Check your changes on an updated Stellar Horizons modpack instance** before submitting.
7. **Submit a pull request** targeting the `main` branch of this repository.

---

## Pull Request Guidelines

- PR titles should clearly describe what was changed (e.g., `Fix: Chapter 3 quest reward not triggering correctly`)
- Include a brief description of the problem and what your fix does
- Reference any related issue numbers (e.g., `Closes #42`)
- Keep PRs small and focused — one fix or change per PR is preferred
- Do not include unrelated file changes, reformatting, or editor artifacts
- PRs that modify files outside the allowed scope will be closed

---

## Issue Reporting

When reporting a bug or issue, please include:

- A clear title and description of the problem
- Steps to reproduce it
- What you expected to happen vs. what actually happened
- Any relevant error logs, screenshots, or crash reports
- The version of Stellar Horizons you are using

Feature suggestions are welcome as discussions, but keep in mind the owner has final say on all pack direction decisions.

---

## Code of Conduct

Be respectful. This is a personal project maintained by one person. Feedback and contributions are appreciated, but entitlement, pressure, or hostility toward the repository owner will result in removal from the project.

---

## Questions

If you have any questions about whether something is in scope, or you want to flag something before putting work into it, open a **Discussion** or comment on the relevant issue. The owner will let you know if it is something contributors can tackle.

---

*Stellar Horizons is designed with a specific vision. Every contribution that lands in this repo should make the pack more polished without changing what it is. Thanks for respecting that.*
