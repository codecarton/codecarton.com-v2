import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const sourceRoot = join(root, 'src');
const routeRoot = join(sourceRoot, 'routes');
const scannedExtensions = new Set(['.svelte', '.md']);
const files = [];

function walk(directory) {
	for (const entry of readdirSync(directory)) {
		const path = join(directory, entry);
		if (statSync(path).isDirectory()) walk(path);
		else if (scannedExtensions.has(path.slice(path.lastIndexOf('.')))) files.push(path);
	}
}

function routeExists(pathname) {
	const segments = pathname.split('/').filter(Boolean);
	const route = join(routeRoot, ...segments);
	return existsSync(join(route, '+page.svelte')) || existsSync(join(route, '+server.ts'));
}

walk(sourceRoot);

const missing = [];
for (const file of files) {
	const source = readFileSync(file, 'utf8');
	const links = source.matchAll(/href=["'](\/[^"'#?]*)["']/g);
	for (const match of links) {
		const pathname = match[1];
		if (!routeExists(pathname) && !existsSync(join(root, 'static', pathname))) {
			missing.push(`${relative(root, file)} → ${pathname}`);
		}
	}
}

const seoRoutes = [
	'+page.svelte',
	'products/+page.svelte',
	'products/[slug]/+page.svelte',
	'developer-log/+page.svelte',
	'developer-log/[slug]/+page.svelte',
	'ditches/+page.svelte',
	'one16/+page.svelte',
	'devote/privacy/+page.svelte',
	'devote/terms/+page.svelte',
	'ditches/privacy/+page.svelte',
	'ditches/terms/+page.svelte',
	'one16/privacy/+page.svelte',
	'one16/terms/+page.svelte'
];

for (const route of seoRoutes) {
	const source = readFileSync(join(routeRoot, route), 'utf8');
	if (!source.includes('$lib/components/Seo.svelte') || !source.includes('<Seo')) {
		missing.push(`Missing shared SEO metadata: src/routes/${route}`);
	}
}

if (missing.length) {
	throw new Error(`Broken internal links or metadata:\n${missing.join('\n')}`);
}

console.log(`Validated internal links in ${files.length} content files.`);
