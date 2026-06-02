# seed-skills

Standalone skill repository. This repository currently ships one skill:

## `seed`

`seed` turns a vague idea into a reviewed spec document, then stops. It is for
early discussion, requirement clarification, option comparison, and shaping a
clear written spec before any implementation work starts.

The skill writes specs to:

```text
docs/seed/YYYY-MM-DD-<topic>-design.md
```

It does not call another skill, generate implementation code, or automatically
continue into implementation planning. Once the user approves the written spec,
it reports the spec path and stops.

## Agent Compatibility

Seed follows the same broad compatibility shape as Superpowers: one shared
`skills/` directory plus small harness-specific entrypoints.

### Codex

Codex metadata lives in `.codex-plugin/plugin.json` and points at `./skills/`.
Install it through a Codex plugin marketplace entry that references this
repository. The plugin root is this repository root.

### Claude Code

Claude Code metadata lives in `.claude-plugin/plugin.json`. The skill itself
remains in `skills/seed/`.
Install it through Claude Code's plugin flow once this repository is added to a
marketplace or local plugin source.

### Cursor

Cursor metadata lives in `.cursor-plugin/plugin.json` and points at `./skills/`.
Install it through Cursor's plugin flow once this repository is available as a
plugin source.

### Gemini CLI

Gemini metadata lives in `gemini-extension.json`, which loads `GEMINI.md`.
`GEMINI.md` includes the seed skill directly.

```bash
gemini extensions install https://github.com/gaoguobin/seed-skills
```

### OpenCode

OpenCode uses `package.json` with `.opencode/plugins/seed.js` as the plugin
entrypoint. The plugin registers `skills/` and injects a short session hint so
OpenCode can load `seed` through its native skill tool.

See `.opencode/INSTALL.md` for OpenCode installation details.

```json
{
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git"]
}
```

## Release Validation

Run the GitHub Actions workflow or follow [docs/release-checklist.md](./docs/release-checklist.md)
before tagging a release.

## Files

```text
.claude-plugin/plugin.json
.codex-plugin/plugin.json
.cursor-plugin/plugin.json
.opencode/INSTALL.md
.opencode/plugins/seed.js
GEMINI.md
gemini-extension.json
package.json
skills/seed/SKILL.md
skills/seed/visual-companion.md
skills/seed/spec-document-reviewer-prompt.md
skills/seed/scripts/server.cjs
skills/seed/scripts/start-server.sh
skills/seed/scripts/start-server.ps1
skills/seed/scripts/stop-server.sh
skills/seed/scripts/stop-server.ps1
skills/seed/scripts/helper.js
skills/seed/scripts/frame-template.html
```

The visual companion is retained for discussions that benefit from mockups,
diagrams, or visual comparisons. Its project-local session files live under
`.seed/visual/`. POSIX shells use `start-server.sh` / `stop-server.sh`;
native Windows PowerShell uses `start-server.ps1` / `stop-server.ps1`.

## Provenance

`seed` is extracted from the `brainstorming` skill in
[`obra/superpowers`](https://github.com/obra/superpowers), which is MIT
licensed. This standalone version removes the full Superpowers chain and stops
after delivering the spec.

## License

MIT. See [LICENSE](./LICENSE).
