# Seed Skill

Turn rough ideas into reviewed specs, then stop.

`seed` is a standalone Agent Skill for brainstorming, requirement
clarification, option comparison, and feature shaping before implementation. It
writes the final spec to `docs/seed/YYYY-MM-DD-<topic>-design.md` and stops
there: no planning skills, no implementation code.

Seed does not require the full Superpowers workflow.

## Install

Paste this into a coding agent that can fetch and follow remote instructions:

```text
Fetch and follow instructions from https://raw.githubusercontent.com/gaoguobin/seed-skills/main/INSTALL.md
```

The installer covers Codex-compatible native skill discovery, Claude Code,
Gemini CLI, OpenCode, and advanced CLI installs. This repository also includes
manifests for Codex, Claude Code, Cursor, Gemini CLI, and OpenCode.

## Update

```text
Fetch and follow instructions from https://raw.githubusercontent.com/gaoguobin/seed-skills/main/UPDATE.md
```

## Uninstall

```text
Fetch and follow instructions from https://raw.githubusercontent.com/gaoguobin/seed-skills/main/UNINSTALL.md
```

## Use It

After installing, ask your agent:

```text
Use seed to clarify this feature idea and turn it into a spec.
```

```text
Let's use seed to compare a few approaches before implementation.
```

Seed is for:

- Brainstorming and requirement clarification
- Product or technical option comparison
- Turning a vague request into a reviewed spec
- Stopping at the spec boundary before coding starts

## Visual Companion

Seed includes an optional browser-based visual companion for mockups, diagrams,
and visual comparisons. It is only used when visuals make the discussion
clearer than text alone.

- macOS, Linux, WSL, and Git Bash use `skills/seed/scripts/start-server.sh`
- Native Windows PowerShell uses `skills/seed/scripts/start-server.ps1`

Session files are written under `.seed/visual/` when a project directory is
provided.

## Development

Before tagging a release, run the validation workflow or follow
[docs/release-checklist.md](./docs/release-checklist.md).

## Provenance

`seed` is extracted from the `brainstorming` skill in
[`obra/superpowers`](https://github.com/obra/superpowers), which is MIT
licensed. This standalone version removes the full Superpowers chain and stops
after delivering the spec.

## License

MIT. See [LICENSE](./LICENSE).
