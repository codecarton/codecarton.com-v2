import type { DeveloperLogEntry } from './developer-log';

export function createDeveloperLogSitemap(entries: DeveloperLogEntry[], siteUrl: string): string {
	const origin = siteUrl.replace(/\/$/, '');
	const urls = [
		'/',
		'/products',
		'/products/swiftpkg',
		'/products/one16',
		'/products/ditches',
		'/products/devote',
		'/developer-log',
		'/devote/privacy',
		'/devote/terms',
		'/ditches/privacy',
		'/ditches/terms',
		'/one16/privacy',
		'/one16/terms',
		...entries.map((entry) => `/developer-log/${entry.slug}`)
	];
	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((path) => `  <url><loc>${origin}${path}</loc></url>`)
		.join('\n')}\n</urlset>`;
}
