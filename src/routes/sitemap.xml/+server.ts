import { developerLogEntries } from '$lib/content/developer-log';
import { createDeveloperLogSitemap } from '$lib/content/developer-log-sitemap';
import type { RequestHandler } from './$types';

export const GET = (({ url }) =>
	new Response(createDeveloperLogSitemap(developerLogEntries, url.origin), {
		headers: { 'content-type': 'application/xml; charset=utf-8' }
	})) satisfies RequestHandler;
