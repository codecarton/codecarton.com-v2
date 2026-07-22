import { developerLogEntries } from '$lib/content/developer-log';
import type { PageServerLoad } from './$types';

export const load = (() => ({
	recentEntries: developerLogEntries.slice(0, 3).map(({ content: _content, ...entry }) => entry)
})) satisfies PageServerLoad;
