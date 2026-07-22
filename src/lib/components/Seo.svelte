<script lang="ts">
	import { page } from '$app/stores';
	import { siteUrl } from '$lib/content/site';

	export let title: string;
	export let description: string;
	export let type: 'website' | 'article' = 'website';
	export let socialImage: string | undefined = undefined;
	export let canonicalPath: string | undefined = undefined;
	export let noIndex = false;

	$: canonicalUrl = `${siteUrl}${canonicalPath ?? $page.url.pathname}`;
	$: imageUrl = `${siteUrl}/social-card.svg?${new URLSearchParams({ title, description, ...(socialImage ? { image: socialImage } : {}) })}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta name="robots" content={noIndex ? 'noindex, follow' : 'index, follow'} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Code Carton" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
