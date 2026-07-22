<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { developerLogEntries } from '$lib/content/developer-log';
	import { products } from '$lib/content/products';

	const featuredProduct = products.find((product) => product.slug === 'swiftpkg');
	const recentEntries = developerLogEntries.slice(0, 3);
	const organizationJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Code Carton',
		url: 'https://codecarton.com',
		logo: 'https://codecarton.com/favicon/favicon.svg'
	};
</script>

<Seo
	title="Code Carton"
	description="Code Carton makes focused products and shares the thinking that shapes them."
	jsonLd={organizationJsonLd}
/>

<section class="page-frame home-introduction" aria-labelledby="home-heading">
	<span class="section-label">Code Carton</span>
	<h1 id="home-heading" class="editorial-heading">
		Small software for people who care about the details.
	</h1>
	<p class="lede">Code Carton makes focused Products and shares the thinking that shapes them.</p>
</section>

{#if featuredProduct}
	<section class="page-frame ruled-section featured-product" aria-labelledby="featured-heading">
		<span class="section-label">01 / Featured Product</span>
		<div class="product-grid">
			<div>
				<h2 id="featured-heading">{featuredProduct.name}</h2>
				<p class="product-summary">{featuredProduct.summary}</p>
				<p>{featuredProduct.story}</p>
				<a class="primary-action" href={`/products/${featuredProduct.slug}`}>Explore Swiftpkg →</a>
			</div>
			{#if featuredProduct.visual.kind === 'placeholder'}
				<div class="product-evidence" role="img" aria-label={featuredProduct.visual.label}>
					<span>{featuredProduct.visual.label}</span>
					<p>{featuredProduct.visual.detail}</p>
				</div>
			{/if}
		</div>
	</section>
{/if}

<section class="page-frame ruled-section product-catalogue" aria-labelledby="catalogue-heading">
	<span class="section-label">02 / Product Catalogue</span>
	<h2 id="catalogue-heading">Tools made for the details that matter.</h2>
	<div class="product-list">
		{#each products as product, index}
			<a
				class:featured={product.slug === 'swiftpkg'}
				class="product-row"
				href={`/products/${product.slug}`}
			>
				<span class="section-label">{String(index + 1).padStart(2, '0')}</span>
				<span>{product.name}</span>
				<span>{product.summary}</span>
				<span aria-hidden="true">→</span>
			</a>
		{/each}
	</div>
	<a class="quiet-link catalogue-link" href="/products">Browse all Products</a>
</section>

<section class="developer-log-callout" aria-labelledby="recent-heading">
	<div class="page-frame">
		<span class="section-label">03 / Developer Log</span>
		<h2 id="recent-heading">Notes from the work behind the work.</h2>
		<div class="recent-entries">
			{#each recentEntries as entry}
				<article>
					<span>{entry.type} / {entry.publishedAt}</span>
					<h3><a href={`/developer-log/${entry.slug}`}>{entry.title}</a></h3>
					<p>{entry.summary}</p>
				</article>
			{/each}
		</div>
		<a class="callout-link" href="/developer-log">Read the Developer Log →</a>
	</div>
</section>

<style>
	.home-introduction {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: clamp(96px, 14vw, 192px);
	}

	.featured-product,
	.product-catalogue {
		padding-top: 24px;
		padding-bottom: 96px;
	}

	h2 {
		max-width: 18ch;
		margin: 24px 0 32px;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1;
	}

	p {
		line-height: 1.6;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 24px;
	}

	.product-grid > :first-child {
		grid-column: span 7;
	}
	.product-evidence {
		display: grid;
		min-height: 280px;
		grid-column: span 5;
		place-content: center;
		padding: 32px;
		border: 1px solid #b4b1a8;
		background: #efede6;
		text-align: center;
	}
	.product-evidence span,
	.recent-entries article > span {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.product-summary {
		font-size: 1.25rem;
	}
	.primary-action,
	.callout-link {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		margin-top: 24px;
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
	.product-list {
		border-top: 1px solid #d9d6cd;
	}
	.product-row {
		display: grid;
		grid-template-columns: 1fr 3fr 6fr auto;
		gap: 24px;
		align-items: baseline;
		padding: 20px 0;
		border-bottom: 1px solid #d9d6cd;
		text-decoration: none;
		transition:
			background-color 180ms ease,
			padding 180ms ease;
	}
	.product-row:hover {
		padding-inline: 12px;
		background: #efede6;
	}
	.product-row > :nth-child(2) {
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 1.75rem;
	}
	.product-row.featured > :nth-child(2),
	.product-row.featured > :last-child {
		color: #e84b1b;
	}
	.catalogue-link {
		display: inline-block;
		margin-top: 32px;
	}
	.developer-log-callout {
		padding: 72px 0 96px;
		background: #20201d;
		color: #f9f8f3;
	}
	.developer-log-callout .section-label {
		color: #e5e2da;
	}
	.recent-entries {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
	}
	.recent-entries article {
		padding-top: 20px;
		border-top: 1px solid #5d5c56;
	}
	.recent-entries h3 {
		margin: 16px 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 1.75rem;
		font-weight: 400;
		line-height: 1;
	}
	.recent-entries h3 a {
		text-decoration: none;
	}
	.callout-link {
		background: #f9f8f3;
		color: #20201d;
	}
	@media (max-width: 767px) {
		.featured-product,
		.product-catalogue {
			padding-bottom: 72px;
		}
		.product-grid,
		.recent-entries {
			grid-template-columns: 1fr;
		}
		.product-grid > :first-child,
		.product-evidence {
			grid-column: auto;
		}
		.product-row {
			grid-template-columns: auto 1fr auto;
			gap: 16px;
		}
		.product-row > :nth-child(3) {
			grid-column: 2;
		}
	}
</style>
