import type { DeveloperLogEntry } from './developer-log';

export function createDeveloperLogSitemap(entries: DeveloperLogEntry[], siteUrl: string): string {
	const origin = siteUrl.replace(/\/$/, '');
	const urls = [
		'/',
		'/products',
		'/developer-log',
		...entries.map((entry) => `/developer-log/${entry.slug}`)
	];
	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((path) => `  <url><loc>${origin}${path}</loc></url>`)
		.join('\n')}\n</urlset>`;
}
