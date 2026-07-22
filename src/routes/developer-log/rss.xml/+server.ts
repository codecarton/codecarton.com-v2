import { createDeveloperLogRss } from '$lib/content/developer-log-rss';
import { developerLogEntries } from '$lib/content/developer-log';
import { siteUrl } from '$lib/content/site';
import type { RequestHandler } from './$types';

export const GET = (() =>
	new Response(createDeveloperLogRss(developerLogEntries, siteUrl), {
		headers: { 'content-type': 'application/rss+xml; charset=utf-8' }
	})) satisfies RequestHandler;
