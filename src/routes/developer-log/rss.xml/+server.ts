import { createDeveloperLogRss } from '$lib/content/developer-log-rss';
import { developerLogEntries } from '$lib/content/developer-log';
import type { RequestHandler } from './$types';

export const GET = (({ url }) =>
	new Response(createDeveloperLogRss(developerLogEntries, url.origin), {
		headers: { 'content-type': 'application/rss+xml; charset=utf-8' }
	})) satisfies RequestHandler;
