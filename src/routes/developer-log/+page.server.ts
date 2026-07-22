import { developerLogEntries, filterDeveloperLogEntries } from '$lib/content/developer-log';
import { developerLogTopics, developerLogTypes, productSlugs } from '$lib/content/schema';
import type { DeveloperLogFilters } from '$lib/content/developer-log';
import type { PageServerLoad } from './$types';

const singleValue = (value: string | null, choices: readonly string[]) =>
	value && choices.includes(value) ? value : undefined;

export const load = (({ url }) => {
	const filters: DeveloperLogFilters = {
		type: singleValue(
			url.searchParams.get('type'),
			developerLogTypes
		) as DeveloperLogFilters['type'],
		product: singleValue(
			url.searchParams.get('product'),
			productSlugs
		) as DeveloperLogFilters['product'],
		topic: singleValue(
			url.searchParams.get('topic'),
			developerLogTopics
		) as DeveloperLogFilters['topic']
	};

	return {
		entries: filterDeveloperLogEntries(developerLogEntries, filters),
		filters,
		types: developerLogTypes,
		products: productSlugs,
		topics: developerLogTopics
	};
}) satisfies PageServerLoad;
