<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { products } from '$lib/content/products';
</script>

<Seo title="Products — Code Carton" description="Focused software products by Code Carton." />

<section class="page-frame products-introduction" aria-labelledby="products-heading">
	<span class="section-label">Products</span>
	<h1 id="products-heading" class="editorial-heading">Focused software, made with care.</h1>
	<p class="lede">Tools for the details that deserve your attention.</p>
</section>

<section class="page-frame ruled-section product-list" aria-label="Code Carton products">
	{#each products as product, index}
		<a
			class:featured={product.slug === 'swiftpkg'}
			class="product-row"
			href={`/products/${product.slug}`}
		>
			<span class="section-label">{String(index + 1).padStart(2, '0')}</span>
			<div>
				<h2>{product.name}</h2>
				<p>{product.summary}</p>
			</div>
			<div class="product-meta">
				<span>{product.availability}</span>
				{#if product.availabilityNote}<span>{product.availabilityNote}</span>{/if}
				<span>{product.platform}</span>
			</div>
			<div class="product-visual">
				{#if product.visual.kind === 'image'}
					<img src={product.visual.src} alt="" />
				{:else}
					<span>{product.visual.label}</span>
				{/if}
			</div>
			<span class="arrow" aria-hidden="true">→</span>
		</a>
	{/each}
</section>

<style>
	.products-introduction {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: clamp(96px, 14vw, 192px);
	}

	.product-list {
		padding-bottom: 96px;
	}

	.product-row {
		display: grid;
		grid-template-columns: 1fr minmax(0, 6fr) minmax(120px, 2fr) minmax(72px, 1fr) auto;
		gap: 24px;
		align-items: baseline;
		padding: 24px 0;
		border-bottom: 1px solid #d9d6cd;
		text-decoration: none;
		transition:
			background-color 180ms ease,
			padding 180ms ease;
	}

	.product-row:hover {
		padding-right: 12px;
		padding-left: 12px;
		background: #efede6;
	}

	.product-row.featured h2,
	.product-row.featured .arrow {
		color: #e84b1b;
	}

	h2 {
		margin: 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	p {
		max-width: 34rem;
		margin: 12px 0 0;
		font-size: 1.0625rem;
		line-height: 1.5;
	}

	.product-meta {
		display: grid;
		gap: 4px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.arrow {
		font-size: 1.5rem;
	}

	.product-visual {
		display: grid;
		min-height: 72px;
		place-items: center;
		border: 1px solid #d9d6cd;
		background: #efede6;
		overflow: hidden;
	}

	.product-visual img {
		width: 100%;
		height: 72px;
		object-fit: contain;
	}

	.product-visual span {
		padding: 8px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.5625rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		line-height: 1.25;
		text-align: center;
		text-transform: uppercase;
	}

	@media (max-width: 767px) {
		.product-row {
			grid-template-columns: auto 1fr auto;
			gap: 16px;
			align-items: start;
		}

		.product-meta {
			grid-column: 2;
			grid-row: 2;
		}

		.product-visual {
			display: none;
		}
	}
</style>
