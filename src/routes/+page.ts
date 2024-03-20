// import { fetchMarkdownPosts } from '$lib/utils/fetchPosts';
// import type { PageLoad } from './$types';

// export const load: PageLoad = async () => {
// 	const posts = await fetchMarkdownPosts({ limit: 4 });

// 	return {
// 		posts
// 	};
// };

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	throw redirect(302, '/one16');
	return {};
}) satisfies PageServerLoad;
