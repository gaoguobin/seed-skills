# Release Checklist

Use this before tagging or publishing a Seed release.

## Local Validation

- [ ] `jq empty .claude-plugin/plugin.json .codex-plugin/plugin.json .cursor-plugin/plugin.json gemini-extension.json package.json`
- [ ] `python3` frontmatter check confirms `skills/seed/SKILL.md` only has `name` and `description`
- [ ] `node --check .opencode/plugins/seed.js`
- [ ] `node --check skills/seed/scripts/server.cjs`
- [ ] `node --check skills/seed/scripts/helper.js`
- [ ] `bash -n skills/seed/scripts/start-server.sh`
- [ ] `bash -n skills/seed/scripts/stop-server.sh`
- [ ] PowerShell parser check passes for `skills/seed/scripts/start-server.ps1` and `skills/seed/scripts/stop-server.ps1`
- [ ] GitHub Actions Windows smoke starts and stops `start-server.ps1`
- [ ] legacy-chain residue search is clean
- [ ] byte-level legacy-name scan is clean, with only README provenance allowed

## Harness Smoke Tests

- [ ] Codex discovers `seed` from `.codex-plugin/plugin.json`
- [ ] Claude Code discovers `seed` from `.claude-plugin/plugin.json`
- [ ] Cursor discovers `seed` from `.cursor-plugin/plugin.json`
- [ ] Gemini CLI loads `GEMINI.md` and can use `seed`
- [ ] OpenCode loads `.opencode/plugins/seed.js` and can use its native skill tool to load `seed`

## Release

- [ ] Version is consistent in all manifests
- [ ] README install notes match the release target
- [ ] `LICENSE` attribution is current
- [ ] Create and push a signed-off release tag, for example `v0.1.1`
