import { error } from '@sveltejs/kit';
import { developerLogEntries } from '$lib/content/developer-log';
import { productsBySlug } from '$lib/content/products';
import type { ProductSlug } from '$lib/content/schema';
import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
	const product = productsBySlug.get(params.slug as ProductSlug);
	if (!product) throw error(404, 'Product not found');

	return {
		product,
		relatedEntries: developerLogEntries.filter((entry) => entry.products?.includes(product.slug))
	};
}) satisfies PageServerLoad;
