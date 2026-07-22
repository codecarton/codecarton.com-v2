<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: product = data.product;
</script>

<Seo
	title={`${product.name} — Code Carton`}
	description={product.summary}
	socialImage={product.visual.kind === 'image' ? product.visual.src : undefined}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: product.name,
		description: product.summary,
		operatingSystem: product.platform,
		applicationCategory: 'UtilitiesApplication',
		...(product.availability === 'Free'
			? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }
			: {})
	}}
/>

<section class="page-frame product-header" aria-labelledby="product-heading">
	<span class="section-label">Product</span>
	<h1 id="product-heading" class="editorial-heading">{product.name}</h1>
	<p class="lede">{product.summary}</p>
	<div class="product-facts">
		<span>{product.availability}</span>
		{#if product.availabilityNote}<span>{product.availabilityNote}</span>{/if}
		<span>{product.platform}</span>
		{#if product.status}<span>{product.status}</span>{/if}
	</div>
	<a class="primary-action" href={product.primaryAction.href}>{product.primaryAction.label}</a>
</section>

<section class="page-frame layout-grid ruled-section story-section" aria-labelledby="story-heading">
	<div>
		<span class="section-label">01 / Story</span>
	</div>
	<div class="story-copy">
		<h2 id="story-heading">Made for the work in front of you.</h2>
		<p>{product.story}</p>
	</div>
</section>

<section
	class="page-frame layout-grid ruled-section capabilities-section"
	aria-labelledby="capabilities-heading"
>
	<div>
		<span class="section-label">02 / Capabilities</span>
	</div>
	<div class="capabilities">
		<h2 id="capabilities-heading">A few useful details.</h2>
		<ul>
			{#each product.capabilities as capability}
				<li>{capability}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-frame ruled-section visual-section" aria-labelledby="visual-heading">
	<span class="section-label">03 / Product evidence</span>
	<h2 id="visual-heading">A closer look.</h2>
	{#if product.visual.kind === 'image'}
		<figure>
			<img src={product.visual.src} alt={product.visual.alt} />
			<figcaption>{product.visual.caption}</figcaption>
		</figure>
	{:else}
		<div class="visual-placeholder" role="img" aria-label={product.visual.label}>
			<span>{product.visual.label}</span>
			<p>{product.visual.detail}</p>
		</div>
	{/if}
	{#if product.gallery?.length}
		<div class="gallery" aria-label={`${product.name} screenshots`}>
			{#each product.gallery as image}
				<figure>
					<img src={image.src} alt={image.alt} />
					<figcaption>{image.caption}</figcaption>
				</figure>
			{/each}
		</div>
	{/if}
</section>

{#if product.installation}
	<section
		id="installation"
		class="page-frame ruled-section installation-section"
		aria-labelledby="installation-heading"
	>
		<span class="section-label">04 / Installation</span>
		<h2 id="installation-heading">{product.installation.heading}</h2>
		<p>{product.installation.detail}</p>
	</section>
{/if}

<section class="page-frame ruled-section utility-section" aria-labelledby="utility-heading">
	<span class="section-label">{product.installation ? '05' : '04'} / More</span>
	<h2 id="utility-heading">From the work behind the work.</h2>
	<p>
		<a class="quiet-link" href="/developer-log">Browse the Developer Log.</a>
	</p>
	{#if data.relatedEntries.length}
		<ul class="related-entries">
			{#each data.relatedEntries as entry}
				<li><a class="quiet-link" href={`/developer-log/${entry.slug}`}>{entry.title}</a></li>
			{/each}
		</ul>
	{/if}
	{#if product.utilityLinks.length}
		<nav aria-label={`${product.name} utility links`}>
			{#each product.utilityLinks as link}
				<a class="quiet-link" href={link.href}>{link.label}</a>
			{/each}
		</nav>
	{/if}
</section>

<style>
	.product-header {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: clamp(72px, 10vw, 128px);
	}

	.product-facts {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 20px;
		margin-top: 32px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.primary-action {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		margin-top: 32px;
		padding: 12px 16px;
		background: #e84b1b;
		color: #f9f8f3;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.layout-grid {
		padding-top: 24px;
		padding-bottom: 72px;
	}

	.story-copy,
	.capabilities {
		--grid-column-start: 4;
		--grid-column-span: 7;
	}

	h2 {
		margin: 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.story-copy p,
	.installation-section p,
	.utility-section p {
		max-width: 42rem;
		font-size: 1.125rem;
		line-height: 1.6;
	}

	ul {
		padding: 0;
		margin: 32px 0 0;
		list-style: none;
	}

	li {
		padding: 16px 0;
		border-top: 1px solid #d9d6cd;
		font-size: 1.125rem;
	}

	.visual-section,
	.installation-section,
	.utility-section {
		padding-top: 24px;
		padding-bottom: 96px;
	}

	.visual-section h2,
	.installation-section h2,
	.utility-section h2 {
		margin-top: 24px;
	}

	figure {
		margin: 48px 0 0;
		padding: 24px;
		background: #efede6;
	}

	img {
		display: block;
		max-width: min(100%, 560px);
		max-height: 720px;
		margin-inline: auto;
	}

	figcaption,
	.visual-placeholder > span {
		display: block;
		margin-top: 16px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.visual-placeholder {
		display: grid;
		min-height: min(56vw, 640px);
		place-content: center;
		padding: 24px;
		margin-top: 48px;
		border: 1px solid #b4b1a8;
		background: #efede6;
		text-align: center;
	}

	.visual-placeholder p {
		max-width: 32rem;
		margin: 16px 0 0;
		line-height: 1.5;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
		margin-top: 16px;
	}

	.gallery figure {
		margin: 0;
	}

	.gallery img {
		max-height: 480px;
	}

	.gallery figcaption {
		font-size: 0.5625rem;
	}

	.utility-section nav {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 24px;
		margin-top: 24px;
	}

	.related-entries {
		margin: 24px 0 0;
	}

	@media (max-width: 767px) {
		.product-header,
		.visual-section,
		.installation-section,
		.utility-section {
			padding-bottom: 72px;
		}

		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
