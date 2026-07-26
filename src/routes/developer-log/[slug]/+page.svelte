<script lang="ts">
	import Figure from '$lib/developer-log/Figure.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Seo
	title={`${data.entry.title} — Developer Log — Code Carton`}
	description={data.entry.summary}
	type="article"
	socialImage={data.entry.cover?.src}
/>

<article class="page-frame entry" aria-labelledby="entry-heading">
	<div class="metadata">
		<span>{data.entry.type}</span><time datetime={data.entry.publishedAt}
			>{data.entry.publishedAt}</time
		><span>By {data.entry.author}</span>
		{#if data.entry.updatedAt}<time datetime={data.entry.updatedAt}
				>Updated {data.entry.updatedAt}</time
			>{/if}
	</div>
	<h1 id="entry-heading" class="editorial-heading">{data.entry.title}</h1>
	<p class="lede">{data.entry.summary}</p>
	{#if data.entry.cover}<Figure
			src={data.entry.cover.src}
			alt={data.entry.cover.alt}
			caption={data.entry.cover.caption}
		/>{/if}
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
		padding-top: clamp(96px, 16vw, 48px);
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
	.content {
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
	.content :global(pre) {
		max-width: 100%;
		margin: 1.75em 0;
		padding: 1.125rem 1.25rem;
		overflow-x: auto;
		border: 1px solid #d9d6cd;
		background: #f2f0e9;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.875rem;
		line-height: 1.65;
		tab-size: 2;
	}
	.content :global(pre code) {
		display: block;
		width: max-content;
		min-width: 100%;
	}
	.content :global(pre code .token.comment),
	.content :global(pre code .token.prolog),
	.content :global(pre code .token.doctype),
	.content :global(pre code .token.cdata) {
		color: #6a737d;
	}
	.content :global(pre code .token.punctuation),
	.content :global(pre code .token.operator) {
		color: #383a42;
	}
	.content :global(pre code .token.property),
	.content :global(pre code .token.tag),
	.content :global(pre code .token.constant),
	.content :global(pre code .token.symbol),
	.content :global(pre code .token.deleted),
	.content :global(pre code .token.number),
	.content :global(pre code .token.boolean) {
		color: #986801;
	}
	.content :global(pre code .token.selector),
	.content :global(pre code .token.attr-name),
	.content :global(pre code .token.string),
	.content :global(pre code .token.char),
	.content :global(pre code .token.builtin),
	.content :global(pre code .token.inserted) {
		color: #50a14f;
	}
	.content :global(pre code .token.atrule),
	.content :global(pre code .token.attr-value),
	.content :global(pre code .token.keyword) {
		color: #a626a4;
	}
	.content :global(pre code .token.function),
	.content :global(pre code .token.class-name) {
		color: #4078f2;
	}
	.content :global(:not(pre) > code) {
		padding: 0.12em 0.3em;
		border-radius: 0.2em;
		background: #ece9e1;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.85em;
	}
	.related {
		padding: 24px 0 96px;
	}
	h2 {
		max-width: 16ch;
		margin: 20px 0 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: var(--editorial-section-size);
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
