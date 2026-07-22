import { error } from '@sveltejs/kit';
import { developerLogEntry } from '$lib/content/developer-log';
import { productsBySlug } from '$lib/content/products';
import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
	const entry = developerLogEntry(params.slug);
	if (!entry) throw error(404, 'Developer Log entry not found');

	return {
		entry,
		products: (entry.products ?? []).flatMap((slug) => {
			const product = productsBySlug.get(slug);
			return product ? [product] : [];
		})
	};
}) satisfies PageServerLoad;
