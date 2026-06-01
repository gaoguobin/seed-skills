/**
 * Seed plugin for OpenCode.ai
 *
 * Registers the bundled skills directory and injects a compact reminder that
 * the seed skill is available for idea shaping before implementation.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const readSeedDescription = (skillPath) => {
  if (!fs.existsSync(skillPath)) return null;
  const content = fs.readFileSync(skillPath, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  for (const line of match[1].split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex <= 0) continue;
    const key = line.slice(0, colonIndex).trim();
    if (key !== 'description') continue;
    return line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
  }

  return null;
};

let cachedBootstrap;

export const SeedPlugin = async () => {
  const skillsDir = path.resolve(__dirname, '../../skills');
  const skillPath = path.join(skillsDir, 'seed', 'SKILL.md');

  const getBootstrap = () => {
    if (cachedBootstrap !== undefined) return cachedBootstrap;

    const description = readSeedDescription(skillPath);
    if (!description) {
      cachedBootstrap = null;
      return cachedBootstrap;
    }

    cachedBootstrap = `<SEED_SKILL_AVAILABLE>
The seed skill is installed. Use OpenCode's native skill tool to load "seed" when this applies:
${description}

Seed ends after delivering a reviewed spec path. Do not continue into implementation planning or code unless the user starts a separate follow-up.
</SEED_SKILL_AVAILABLE>`;
    return cachedBootstrap;
  };

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }
    },

    'experimental.chat.messages.transform': async (_input, output) => {
      const bootstrap = getBootstrap();
      if (!bootstrap || !output.messages.length) return;

      const firstUser = output.messages.find((message) => message.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) return;

      const alreadyInjected = firstUser.parts.some(
        (part) => part.type === 'text' && part.text.includes('SEED_SKILL_AVAILABLE')
      );
      if (alreadyInjected) return;

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: bootstrap });
    }
  };
};
