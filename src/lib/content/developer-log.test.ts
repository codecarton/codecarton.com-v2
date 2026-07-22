import { describe, expect, it } from 'vitest';
import {
	filterDeveloperLogEntries,
	parseDeveloperLogEntries,
	type DeveloperLogModule
} from './developer-log';
import { createDeveloperLogRss } from './developer-log-rss';
import { createDeveloperLogSitemap } from './developer-log-sitemap';

const modules: Record<string, DeveloperLogModule> = {
	'/src/lib/developer-log/release.md': {
		metadata: {
			title: 'A release',
			slug: 'a-release',
			publishedAt: '2024-07-11',
			summary: 'A published release.',
			type: 'Release',
			author: 'Jordan Calhoun',
			products: ['one16'],
			topics: ['Engineering']
		},
		default: {},
		content: '<p>A release.</p>'
	},
	'/src/lib/developer-log/draft.md': {
		metadata: {
			title: 'A draft',
			slug: 'a-draft',
			publishedAt: '2024-07-12',
			summary: 'A draft.',
			type: 'Finding',
			author: 'Jordan Calhoun',
			draft: true
		},
		default: {},
		content: '<p>A draft.</p>'
	},
	'/src/lib/developer-log/future.md': {
		metadata: {
			title: 'A future entry',
			slug: 'a-future-entry',
			publishedAt: '2030-01-01',
			summary: 'A future entry.',
			type: 'Announcement',
			author: 'Jordan Calhoun'
		},
		default: {},
		content: '<p>A future entry.</p>'
	}
};

describe('Developer Log content seam', () => {
	it('exposes only published entries in reverse chronological order', () => {
		const entries = parseDeveloperLogEntries(modules, new Date('2024-08-01'));

		expect(entries.map((entry) => entry.slug)).toEqual(['a-release']);
	});

	it('filters published entries by combined type, Product, and topic', () => {
		const entries = parseDeveloperLogEntries(modules, new Date('2024-08-01'));

		expect(
			filterDeveloperLogEntries(entries, {
				type: 'Release',
				product: 'one16',
				topic: 'Engineering'
			})
		).toEqual(entries);
	});

	it('rejects metadata with unknown Product references', () => {
		const invalidModules = {
			...modules,
			'/src/lib/developer-log/invalid.md': {
				metadata: {
					title: 'Invalid',
					slug: 'invalid',
					publishedAt: '2024-01-01',
					summary: 'Invalid.',
					type: 'Release',
					author: 'Jordan Calhoun',
					products: ['unknown-product']
				},
				default: {},
				content: '<p>Invalid.</p>'
			}
		} as unknown as Record<string, DeveloperLogModule>;

		expect(() => parseDeveloperLogEntries(invalidModules, new Date('2024-08-01'))).toThrow(
			'unknown Product'
		);
	});

	it('creates RSS with canonical entry links and full content', () => {
		const entries = parseDeveloperLogEntries(modules, new Date('2024-08-01'));
		const rss = createDeveloperLogRss(entries, 'https://codecarton.com');

		expect(rss).toContain('https://codecarton.com/developer-log/a-release');
		expect(rss).toContain('<content:encoded><![CDATA[<p>A release.</p>]]></content:encoded>');
	});

	it('uses only published entries in the sitemap', () => {
		const entries = parseDeveloperLogEntries(modules, new Date('2024-08-01'));
		const sitemap = createDeveloperLogSitemap(entries, 'https://codecarton.com');

		expect(sitemap).toContain('https://codecarton.com/developer-log/a-release');
		expect(sitemap).not.toContain('a-draft');
		expect(sitemap).not.toContain('a-future-entry');
	});
});
