import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
	throw redirect(308, '/products/one16');
}) satisfies PageLoad;
