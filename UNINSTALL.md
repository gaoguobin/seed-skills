# Uninstalling Seed

Uninstall the `seed` Agent Skill. Use the section matching how Seed was
installed.

## Codex-Compatible Native Skill Discovery

Remove the skill link:

```bash
rm ~/.agents/skills/seed
```

Optionally delete the clone:

```bash
rm -rf ~/.codex/seed-skills
```

**Windows (PowerShell):**

```powershell
cmd /c rmdir "$env:USERPROFILE\.agents\skills\seed"
```

Optionally delete the clone:

```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.codex\seed-skills"
```

Restart the agent or open a new session.

## Claude Code

```text
/plugin uninstall seed@seed-skills
/reload-plugins
```

Optionally remove the marketplace:

```text
/plugin marketplace remove seed-skills
```

## Gemini CLI

```bash
gemini extensions uninstall seed
```

## OpenCode

Remove Seed from the `plugin` array in `opencode.json`, then restart OpenCode:

```json
{
  "plugin": []
}
```

If `opencode.json` contains other plugins, remove only the Seed entry:

```json
"seed@git+https://github.com/gaoguobin/seed-skills.git"
```

Also remove any pinned Seed entry such as:

```json
"seed@git+https://github.com/gaoguobin/seed-skills.git#v0.1.1"
```

## Advanced CLI Uninstall

For installs managed by the community `skills` CLI:

```bash
npx skills remove seed
```

## Verify

Confirm that `seed` no longer appears in the agent's skill list. If it is still
visible, restart the agent or clear its plugin/skill cache.
