import type { ProductLink, ProductMetadata, ProductSlug } from './schema';

export interface Product extends ProductMetadata {
	story: string;
	capabilities: string[];
	visual:
		| { kind: 'image'; src: string; alt: string; caption: string }
		| { kind: 'placeholder'; label: string; detail: string };
	gallery?: { src: string; alt: string; caption: string }[];
	installation?: { heading: string; detail: string };
	utilityLinks: ProductLink[];
}

export const products: Product[] = [
	{
		name: 'Swiftpkg',
		slug: 'swiftpkg',
		summary: 'Build better macOS installer packages.',
		primaryAction: { label: 'Get Swiftpkg →', href: '#installation' },
		availability: 'Open source',
		platform: 'macOS',
		story:
			'Create, maintain, sign, and notarize portable installer-package projects from version-control-friendly directories—using the CLI or the native Swiftpkgr app.',
		capabilities: [
			'Directory-based package projects',
			'Signing and notarization',
			'CLI and native macOS workflows'
		],
		visual: {
			kind: 'placeholder',
			label: 'Swiftpkgr workspace',
			detail: 'Replace with a truthful workspace screenshot and CLI build-output detail.'
		},
		installation: {
			heading: 'Get Swiftpkg when you are ready to build.',
			detail:
				'The installation instructions will arrive with the public Swiftpkg release. Until then, this is intentionally a placeholder—not a download link.'
		},
		utilityLinks: [{ label: 'Source on GitHub', href: 'https://github.com/codecarton/swiftpkg' }]
	},
	{
		name: 'One16',
		slug: 'one16',
		summary: 'Fraction calculations made for the shop.',
		primaryAction: {
			label: 'Get app →',
			href: 'https://apps.apple.com/us/app/one16-woodworking-calculator/id1672160610'
		},
		availability: 'Free',
		availabilityNote: 'Offers in-app purchases',
		platform: 'iPhone and iPad',
		story: 'A woodworking calculator for faster measurements, rounding, and everyday project math.',
		capabilities: [
			'Fraction and decimal calculations',
			'Custom calculation actions',
			'Rounding and glanceable widgets'
		],
		visual: {
			kind: 'image',
			src: '/one16/iPhone-Hero.webp',
			alt: 'One16 fraction calculator on an iPhone',
			caption: 'One16 on iPhone.'
		},
		gallery: [
			{
				src: '/one16/screenshots/actions.webp',
				alt: 'One16 Actions screen showing saved woodworking calculations',
				caption: 'Actions for repeatable calculations.'
			},
			{
				src: '/one16/screenshots/widgets.webp',
				alt: 'One16 widgets displaying measurements',
				caption: 'Measurements at a glance.'
			},
			{
				src: '/one16/screenshots/rounding.webp',
				alt: 'One16 rounding controls',
				caption: 'Practical rounding controls.'
			}
		],
		utilityLinks: [
			{ label: 'Privacy', href: '/one16/privacy' },
			{ label: 'Terms', href: '/one16/terms' }
		]
	},
	{
		name: 'Ditches',
		slug: 'ditches',
		summary: 'Change habits with more clarity.',
		primaryAction: {
			label: 'Get app →',
			href: 'https://apps.apple.com/us/app/ditches-habit-tracker/id6482422925'
		},
		availability: 'Free',
		platform: 'iPhone and iPad',
		story:
			'Notice craving patterns, keep steady reminders, and build practical support for the changes you want to make.',
		capabilities: [
			'Craving-pattern insights',
			'Steady reminders',
			'Widgets and practical blueprints'
		],
		visual: {
			kind: 'image',
			src: '/ditches/ditches-app.webp',
			alt: 'Ditches habit tracker on an iPhone',
			caption: 'Ditches on iPhone.'
		},
		gallery: [
			{
				src: '/ditches/screenshots/insights.webp',
				alt: 'Ditches insights screen showing craving patterns',
				caption: 'Insights for noticing patterns.'
			},
			{
				src: '/ditches/screenshots/widgets.webp',
				alt: 'Ditches widgets showing current progress',
				caption: 'Progress at a glance.'
			},
			{
				src: '/ditches/screenshots/blueprints.webp',
				alt: 'Ditches blueprints screen with practical support plans',
				caption: 'Practical support blueprints.'
			}
		],
		utilityLinks: [
			{ label: 'Privacy', href: '/ditches/privacy' },
			{ label: 'Terms', href: '/ditches/terms' }
		]
	},
	{
		name: 'Devote',
		slug: 'devote',
		summary: 'Personal devotions, made personal.',
		primaryAction: {
			label: 'Get app →',
			href: 'https://apps.apple.com/us/app/personal-devotions/id6757678652'
		},
		availability: 'Free',
		platform: 'iPhone and iPad',
		story:
			'Create a Bible devotion around what’s on your mind. It’s ready immediately, with space to reflect for five to ten minutes.',
		capabilities: [
			'Immediate personal devotions',
			'Five-to-ten-minute reflections',
			'Space for what is on your mind'
		],
		visual: {
			kind: 'placeholder',
			label: 'Devote product imagery',
			detail: 'Replace with an icon tile and three to four portrait device frames.'
		},
		utilityLinks: [
			{ label: 'Privacy', href: '/devote/privacy' },
			{ label: 'Terms', href: '/devote/terms' }
		]
	}
];

export const productsBySlug = new Map<ProductSlug, Product>(
	products.map((product) => [product.slug, product])
);
