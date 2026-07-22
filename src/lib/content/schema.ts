export const productSlugs = ['swiftpkg', 'one16', 'ditches', 'devote'] as const;
export type ProductSlug = (typeof productSlugs)[number];

export const developerLogTypes = ['Release', 'Finding', 'Announcement', 'Field Note'] as const;
export type DeveloperLogType = (typeof developerLogTypes)[number];

export const developerLogTopics = ['Apple development', 'Product design', 'Engineering'] as const;
export type DeveloperLogTopic = (typeof developerLogTopics)[number];

export type ProductAvailability = 'Free' | 'One-time purchase' | 'Subscription' | 'Open source';
export type ProductStatus = 'In development' | 'Beta' | 'Maintenance' | 'Archived';

export interface ProductLink {
	label: string;
	href: string;
}

export interface ProductMetadata {
	name: string;
	slug: ProductSlug;
	summary: string;
	primaryAction: ProductLink;
	availability: ProductAvailability;
	availabilityNote?: string;
	platform: string;
	status?: ProductStatus;
}

export interface DeveloperLogMetadata {
	title: string;
	slug: string;
	publishedAt: string;
	summary: string;
	type: DeveloperLogType;
	author: 'Jordan Calhoun';
	updatedAt?: string;
	products?: ProductSlug[];
	topics?: DeveloperLogTopic[];
	cover?: {
		src: string;
		alt: string;
		caption?: string;
	};
	draft?: boolean;
}

export function isPublished(entry: DeveloperLogMetadata, now = new Date()): boolean {
	return !entry.draft && new Date(entry.publishedAt) <= now;
}
