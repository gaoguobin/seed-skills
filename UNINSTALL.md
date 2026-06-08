# Uninstalling Seed

Uninstall the `seed` Agent Skill. Use the section matching how Seed was
installed.

## Codex-Compatible Native Skill Discovery

Remove the skill link:

```bash
rm -f "$HOME/.agents/skills/seed"
```

Optionally delete the clone:

```bash
rm -rf "${CODEX_HOME:-$HOME/.codex}/seed-skills"
```

If you installed Seed from v0.1.3, also remove the legacy Codex link if it
exists:

```bash
codex_home="${CODEX_HOME:-$HOME/.codex}"
[ ! -L "$codex_home/skills/seed" ] || rm -f "$codex_home/skills/seed"
```

**Windows (PowerShell):**

```powershell
$linkPath = Join-Path $env:USERPROFILE ".agents\skills\seed"
if (Test-Path -LiteralPath $linkPath) {
  cmd /c rmdir "$linkPath"
}
```

Optionally delete the clone:

```powershell
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE ".codex" }
Remove-Item -Recurse -Force (Join-Path $codexHome "seed-skills")
```

If you installed Seed from v0.1.3, also remove the legacy Codex link if it
exists:

```powershell
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE ".codex" }
$legacyCodexLink = Join-Path $codexHome "skills\seed"
if (Test-Path -LiteralPath $legacyCodexLink) {
  $legacyItem = Get-Item -LiteralPath $legacyCodexLink -Force
  if ($legacyItem.LinkType -eq "Junction" -or $legacyItem.LinkType -eq "SymbolicLink") {
    cmd /c rmdir "$legacyCodexLink"
  }
}
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
"seed@git+https://github.com/gaoguobin/seed-skills.git#v0.1.4"
```

## Advanced CLI Uninstall

For installs managed by the community `skills` CLI:

```bash
npx skills remove seed
```

## Verify

Confirm that `seed` no longer appears in the agent's skill list. If it is still
visible, restart the agent or clear its plugin/skill cache.
