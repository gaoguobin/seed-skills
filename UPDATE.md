# Updating Seed

Update the `seed` Agent Skill from
`https://github.com/gaoguobin/seed-skills`. Use the section matching how Seed
was installed.

## Codex-Compatible Native Skill Discovery

```bash
codex_home="${CODEX_HOME:-$HOME/.codex}"
git -C "$codex_home/seed-skills" pull
mkdir -p "$codex_home/skills"
[ -e "$codex_home/skills/seed" ] || ln -s "$codex_home/seed-skills/skills/seed" "$codex_home/skills/seed"
[ ! -e "$HOME/.agents/skills/seed" ] || rm -f "$HOME/.agents/skills/seed"
```

Skills update through the symlink. Restart the agent or open a new session if
the current session does not pick up changed skill files.

**Windows (PowerShell):**

```powershell
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE ".codex" }
$repoDir = Join-Path $codexHome "seed-skills"
$skillsDir = Join-Path $codexHome "skills"
$linkPath = Join-Path $skillsDir "seed"
$targetPath = Join-Path $repoDir "skills\seed"

git -C $repoDir pull
New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
if (-not (Test-Path -LiteralPath $linkPath)) {
  cmd /c mklink /J "$linkPath" "$targetPath"
}

$legacyLink = Join-Path $env:USERPROFILE ".agents\skills\seed"
if (Test-Path -LiteralPath $legacyLink) {
  cmd /c rmdir "$legacyLink"
}
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
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git#v0.1.3"]
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
