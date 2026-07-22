<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.entry.title} — Developer Log — Code Carton</title>
	<meta name="description" content={data.entry.summary} />
	<link rel="canonical" href={`/developer-log/${data.entry.slug}`} />
</svelte:head>

<article class="page-frame entry" aria-labelledby="entry-heading">
	<div class="metadata">
		<span>{data.entry.type}</span><time datetime={data.entry.publishedAt}
			>{data.entry.publishedAt}</time
		><span>By {data.entry.author}</span>
	</div>
	<h1 id="entry-heading" class="editorial-heading">{data.entry.title}</h1>
	<p class="lede">{data.entry.summary}</p>
	{#if data.entry.cover}<figure>
			<img
				src={data.entry.cover.src}
				alt={data.entry.cover.alt}
			/>{#if data.entry.cover.caption}<figcaption>{data.entry.cover.caption}</figcaption>{/if}
		</figure>{/if}
	<div class="content">{@html data.entry.content}</div>
</article>

{#if data.products.length}
	<section class="page-frame ruled-section related" aria-labelledby="related-heading">
		<span class="section-label">Related Products</span>
		<h2 id="related-heading">Made with the product in mind.</h2>
		<nav aria-label="Related Products">
			{#each data.products as product}<a class="quiet-link" href={`/products/${product.slug}`}
					>{product.name}</a
				>{/each}
		</nav>
	</section>
{/if}

<style>
	.entry {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: 96px;
	}
	.metadata {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 16px;
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	figure {
		margin: 48px 0;
		padding: 24px;
		background: #efede6;
	}
	img {
		display: block;
		max-width: 100%;
		margin-inline: auto;
	}
	figcaption {
		margin-top: 16px;
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.content {
		max-width: 44rem;
		font-size: 1.125rem;
		line-height: 1.7;
	}
	.content :global(h2) {
		margin-top: 2em;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 2rem;
		font-weight: 400;
		line-height: 1.1;
	}
	.content :global(a) {
		text-decoration-color: #b4b1a8;
		text-underline-offset: 0.2em;
	}
	.related {
		padding: 24px 0 96px;
	}
	h2 {
		max-width: 16ch;
		margin: 20px 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1;
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 16px 24px;
		margin-top: 32px;
	}
	@media (max-width: 767px) {
		.entry,
		.related {
			padding-bottom: 72px;
		}
	}
</style>
