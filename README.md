# Seed Skill

`seed` is a standalone skill for turning early, fuzzy ideas into a clear written
spec. Use it when you want to brainstorm, clarify requirements, compare options,
or shape a feature before implementation.

Seed writes the final spec to:

```text
docs/seed/YYYY-MM-DD-<topic>-design.md
```

Then it stops. It does not call planning skills, write implementation code, or
automatically continue into an implementation phase.

Seed does not require the full Superpowers workflow.

## What It Is For

- Brainstorming and requirement clarification
- Exploring product or technical options
- Turning a vague request into a reviewed spec
- Stopping at the spec boundary before coding starts

## How to Use

After installing the plugin/skill, ask your agent to use `seed` before coding:

```text
Use seed to clarify this feature idea and turn it into a spec.
```

```text
Let's use seed to compare a few approaches before implementation.
```

## Install

This repository is structured as a cross-agent skill/plugin package. The shared
skill lives in `skills/seed/`; each agent gets a small native entrypoint.

| Agent | Entrypoint |
| --- | --- |
| Codex | `.codex-plugin/plugin.json` |
| Claude Code | `.claude-plugin/plugin.json` |
| Cursor | `.cursor-plugin/plugin.json` |
| Gemini CLI | `gemini-extension.json` + `GEMINI.md` |
| OpenCode | `package.json` + `.opencode/plugins/seed.js` |

Gemini CLI:

```bash
gemini extensions install https://github.com/gaoguobin/seed-skills
```

OpenCode:

```json
{
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git"]
}
```

For Codex, Claude Code, and Cursor, install this repository through the
corresponding plugin flow or marketplace source.

## Visual Companion

Seed includes an optional browser-based visual companion for mockups, diagrams,
and visual comparisons. It is only used when seeing options is clearer than
discussing them in text.

- macOS, Linux, WSL, and Git Bash use `skills/seed/scripts/start-server.sh`
- Native Windows PowerShell uses `skills/seed/scripts/start-server.ps1`

Session files are written under `.seed/visual/` when a project directory is
provided.

## Development

Before tagging a release, run the validation workflow or follow
[docs/release-checklist.md](./docs/release-checklist.md).

The current release process checks JSON manifests, skill frontmatter, Node
syntax, shell launchers, PowerShell parser validity, and legacy-chain residue.

## Provenance

`seed` is extracted from the `brainstorming` skill in
[`obra/superpowers`](https://github.com/obra/superpowers), which is MIT
licensed. This standalone version removes the full Superpowers chain and stops
after delivering the spec.

## License

MIT. See [LICENSE](./LICENSE).
