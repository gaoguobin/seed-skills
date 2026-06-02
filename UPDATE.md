# Updating Seed

Update the `seed` Agent Skill from
`https://github.com/gaoguobin/seed-skills`. Use the section matching how Seed
was installed.

## Codex-Compatible Native Skill Discovery

```bash
cd ~/.codex/seed-skills && git pull
```

Skills update through the symlink. Restart the agent or open a new session if
the current session does not pick up changed skill files.

**Windows (PowerShell):**

```powershell
git -C "$env:USERPROFILE\.codex\seed-skills" pull
```

## Claude Code

```text
/plugin marketplace update seed-skills
/plugin update seed@seed-skills
/reload-plugins
```

## Gemini CLI

```bash
gemini extensions update seed
```

## OpenCode

OpenCode installs Seed through a git-backed package spec. Restart OpenCode after
updating. If updates do not appear, clear OpenCode's package cache or reinstall
the plugin.

If the user pinned a release tag in `opencode.json`, update that tag manually:

```json
{
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git#v0.1.1"]
}
```

## Advanced CLI Update

For installs managed by the community `skills` CLI:

```bash
npx skills update seed
```

## Verify

Confirm that `seed` is still available and that it still stops after reporting
the spec path.
