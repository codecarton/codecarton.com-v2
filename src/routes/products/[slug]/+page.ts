import { error } from '@sveltejs/kit';
import { productsBySlug } from '$lib/content/products';
import type { ProductSlug } from '$lib/content/schema';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const product = productsBySlug.get(params.slug as ProductSlug);

	if (!product) {
		throw error(404, 'Product not found');
	}

	return { product };
}) satisfies PageLoad;
