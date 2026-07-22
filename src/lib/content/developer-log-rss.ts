import type { DeveloperLogEntry } from './developer-log';

const escapeXml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function createDeveloperLogRss(entries: DeveloperLogEntry[], siteUrl: string): string {
	const normalizedSiteUrl = siteUrl.replace(/\/$/, '');
	const items = entries
		.map(
			(entry) => `<item>
<title>${escapeXml(entry.title)}</title>
<link>${normalizedSiteUrl}/developer-log/${entry.slug}</link>
<guid isPermaLink="true">${normalizedSiteUrl}/developer-log/${entry.slug}</guid>
<pubDate>${new Date(`${entry.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
<description>${escapeXml(entry.summary)}</description>
<author>jordan@codecarton.com (Jordan Calhoun)</author>
<content:encoded><![CDATA[${entry.content}]]></content:encoded>
</item>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>Developer Log — Code Carton</title>
<link>${normalizedSiteUrl}/developer-log</link>
<description>Notes from the work behind the work at Code Carton.</description>
${items}
</channel>
</rss>`;
}
