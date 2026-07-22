import { developerLogEntries } from '$lib/content/developer-log';
import { createDeveloperLogSitemap } from '$lib/content/developer-log-sitemap';
import { siteUrl } from '$lib/content/site';
import type { RequestHandler } from './$types';

export const GET = (() =>
	new Response(createDeveloperLogSitemap(developerLogEntries, siteUrl), {
		headers: { 'content-type': 'application/xml; charset=utf-8' }
	})) satisfies RequestHandler;
