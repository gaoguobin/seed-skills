# Installing Seed for OpenCode

## Installation

Add Seed to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git"]
}
```

Restart OpenCode. The plugin registers the `skills/` directory and adds a short
session hint so OpenCode can load the `seed` skill when the conversation is
about clarifying an idea before implementation.

## Usage

Use OpenCode's native `skill` tool:

```text
use skill tool to load seed
```

## Updating

OpenCode installs git-backed plugins through its package manager. If updates do
not appear after restart, clear OpenCode's package cache or reinstall the
plugin.

To pin a specific release:

```json
{
  "plugin": ["seed@git+https://github.com/gaoguobin/seed-skills.git#v0.1.3"]
}
```
