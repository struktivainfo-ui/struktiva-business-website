import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const configPath = join(root, 'vercel.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

function routesIn(directory, prefix = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory() || entry.name === 'assets') return [];
    const route = `${prefix}/${entry.name}`;
    return [route, ...routesIn(join(directory, entry.name), route)];
  });
}

const routes = routesIn(join(root, 'wix-preview'));
const preserved = (config.rewrites ?? []).filter((rule) =>
  !routes.includes(rule.source) && !rule.source.startsWith('/((?!api/'));
const fallback = (config.rewrites ?? []).filter((rule) => rule.source.startsWith('/((?!api/'));
config.rewrites = [
  ...routes.map((route) => ({ source: route, destination: `${route}/index.html` })),
  ...preserved,
  ...fallback,
];
writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Vercel-Routen für ${routes.length} Unterseiten aktualisiert.`);
