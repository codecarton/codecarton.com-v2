import { developerLogTopics, developerLogTypes, isPublished, productSlugs } from './schema';
import type {
	DeveloperLogMetadata,
	DeveloperLogTopic,
	DeveloperLogType,
	ProductSlug
} from './schema';
import { render } from 'svelte/server';

export interface DeveloperLogModule {
	metadata: DeveloperLogMetadata;
	default: unknown;
	content?: string;
}

export interface DeveloperLogEntry extends DeveloperLogMetadata {
	content: string;
}

export interface DeveloperLogFilters {
	type?: DeveloperLogType;
	product?: ProductSlug;
	topic?: DeveloperLogTopic;
}

const isValidDate = (value: string) =>
	/^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));

function validateMetadata(metadata: DeveloperLogMetadata, source: string): void {
	if (!metadata.title || !metadata.slug || !metadata.summary || !metadata.publishedAt) {
		throw new Error(`Developer Log entry ${source} is missing required metadata.`);
	}
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) {
		throw new Error(`Developer Log entry ${source} has a malformed slug.`);
	}
	if (
		!isValidDate(metadata.publishedAt) ||
		(metadata.updatedAt && !isValidDate(metadata.updatedAt))
	) {
		throw new Error(`Developer Log entry ${source} has a malformed date.`);
	}
	if (!developerLogTypes.includes(metadata.type)) {
		throw new Error(`Developer Log entry ${source} has an unknown type.`);
	}
	if (metadata.author !== 'Jordan Calhoun') {
		throw new Error(`Developer Log entry ${source} must be credited to Jordan Calhoun.`);
	}
	for (const product of metadata.products ?? []) {
		if (!productSlugs.includes(product))
			throw new Error(`Developer Log entry ${source} has an unknown Product.`);
	}
	for (const topic of metadata.topics ?? []) {
		if (!developerLogTopics.includes(topic))
			throw new Error(`Developer Log entry ${source} has an unknown topic.`);
	}
}

export function parseDeveloperLogEntries(
	modules: Record<string, DeveloperLogModule>,
	now = new Date()
): DeveloperLogEntry[] {
	return Object.entries(modules)
		.map(([source, module]) => {
			validateMetadata(module.metadata, source);
			const content = module.content ?? render(module.default as never, { props: {} }).body;
			return { ...module.metadata, content };
		})
		.filter((entry) => isPublished(entry, now))
		.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function filterDeveloperLogEntries(
	entries: DeveloperLogEntry[],
	filters: DeveloperLogFilters
): DeveloperLogEntry[] {
	return entries.filter(
		(entry) =>
			(!filters.type || entry.type === filters.type) &&
			(!filters.product || entry.products?.includes(filters.product)) &&
			(!filters.topic || entry.topics?.includes(filters.topic))
	);
}

export const developerLogEntries = parseDeveloperLogEntries(
	import.meta.glob<DeveloperLogModule>('/src/lib/developer-log/*.md', { eager: true })
);

export function developerLogEntry(slug: string): DeveloperLogEntry | undefined {
	return developerLogEntries.find((entry) => entry.slug === slug);
}
