# Installing Seed

Install the `seed` Agent Skill from
`https://github.com/gaoguobin/seed-skills`.

Installation differs by agent. If the user uses more than one agent, install
Seed separately for each one. Do not start an implementation task while
installing this skill.

## Codex-Compatible Native Skill Discovery

Use this path when the active agent discovers skills from `~/.agents/skills`.
Clone the repository and link the skill.

## Prerequisites

- Git

## Installation

1. **Clone the Seed repository:**
   ```bash
   git clone https://github.com/gaoguobin/seed-skills.git ~/.codex/seed-skills
   ```

2. **Create the skill symlink:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.codex/seed-skills/skills/seed ~/.agents/skills/seed
   ```

   **Windows (PowerShell):**
   ```powershell
   git clone https://github.com/gaoguobin/seed-skills.git "$env:USERPROFILE\.codex\seed-skills"
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\seed" "$env:USERPROFILE\.codex\seed-skills\skills\seed"
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

Run `/reload-plugins` or restart Claude Code after installation.

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
ls -la ~/.agents/skills/seed
```

On Windows:

```powershell
Get-Item "$env:USERPROFILE\.agents\skills\seed"
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
