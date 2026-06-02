# Installing Seed

Install the `seed` Agent Skill from
`https://github.com/gaoguobin/seed-skills`.

Installation differs by agent. If the user uses more than one agent, install
Seed separately for each one. Do not start an implementation task while
installing this skill.

## Codex-Compatible Native Skill Discovery

Use this path when the active agent discovers skills from `$CODEX_HOME/skills`
or `~/.codex/skills`. Clone the repository and link the skill.

## Prerequisites

- Git

## Installation

1. **Clone or update the Seed repository:**
   ```bash
   codex_home="${CODEX_HOME:-$HOME/.codex}"
   if [ -d "$codex_home/seed-skills/.git" ]; then
     git -C "$codex_home/seed-skills" pull
   else
     git clone https://github.com/gaoguobin/seed-skills.git "$codex_home/seed-skills"
   fi
   ```

2. **Create the skill symlink:**
   ```bash
   codex_home="${CODEX_HOME:-$HOME/.codex}"
   mkdir -p "$codex_home/skills"
   [ -e "$codex_home/skills/seed" ] || ln -s "$codex_home/seed-skills/skills/seed" "$codex_home/skills/seed"
   [ ! -e "$HOME/.agents/skills/seed" ] || rm -f "$HOME/.agents/skills/seed"
   ```

   **Windows (PowerShell):**
   ```powershell
   $codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE ".codex" }
   $repoDir = Join-Path $codexHome "seed-skills"
   $skillsDir = Join-Path $codexHome "skills"
   $linkPath = Join-Path $skillsDir "seed"
   $targetPath = Join-Path $repoDir "skills\seed"

   if (Test-Path -LiteralPath (Join-Path $repoDir ".git")) {
     git -C $repoDir pull
   } else {
     git clone https://github.com/gaoguobin/seed-skills.git $repoDir
   }

   New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
   if (-not (Test-Path -LiteralPath $linkPath)) {
     cmd /c mklink /J "$linkPath" "$targetPath"
   }

   $legacyLink = Join-Path $env:USERPROFILE ".agents\skills\seed"
   if (Test-Path -LiteralPath $legacyLink) {
     cmd /c rmdir "$legacyLink"
   }
   ```

3. **Restart the agent** or open a new session so it discovers the skill.

## Claude Code

Register this repository as a Claude Code marketplace:

```text
/plugin marketplace add gaoguobin/seed-skills
```

Then install the plugin:

```text
/plugin install seed@seed-skills
```

These are Claude Code slash commands. The agent cannot run them from a shell;
the user must run them in Claude Code. Run `/reload-plugins` or restart Claude
Code after installation.

## Gemini CLI

```bash
gemini extensions install https://github.com/gaoguobin/seed-skills
```

Restart Gemini CLI if the current session does not pick up the extension.

## OpenCode

Ask OpenCode to follow its dedicated install document:

```text
Fetch and follow instructions from https://raw.githubusercontent.com/gaoguobin/seed-skills/main/.opencode/INSTALL.md
```

## Advanced CLI Install

For users who prefer the community `skills` CLI:

```bash
npx skills add gaoguobin/seed-skills --skill seed
```

Preview first:

```bash
npx skills add gaoguobin/seed-skills --list
```

## Verify

For native skill discovery:

```bash
ls -la "${CODEX_HOME:-$HOME/.codex}/skills/seed"
```

On Windows:

```powershell
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE ".codex" }
Get-Item (Join-Path $codexHome "skills\seed")
```

Then ask the active agent:

```text
Use seed to clarify this feature idea and turn it into a spec.
```

Expected behavior:

- Ask clarifying questions one at a time
- Compare options and tradeoffs when useful
- Write the final spec to `docs/seed/YYYY-MM-DD-<topic>-design.md`
- Stop after reporting the spec path

If the agent has a skill-listing command, use it to confirm that `seed` is
available.
