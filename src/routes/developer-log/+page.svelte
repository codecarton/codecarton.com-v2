<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { productsBySlug } from '$lib/content/products';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Seo
	title="Developer Log — Code Carton"
	description="Notes from the work behind the work at Code Carton."
/>

<section class="page-frame developer-log-introduction" aria-labelledby="developer-log-heading">
	<span class="section-label">Developer Log</span>
	<h1 id="developer-log-heading" class="editorial-heading">Notes from the work behind the work.</h1>
	<p class="lede">Releases, field notes, and practical findings from Code Carton.</p>
</section>

<section class="page-frame ruled-section log-section" aria-labelledby="entries-heading">
	<div class="log-section-heading">
		<span class="section-label">Published entries</span>
		<h2 id="entries-heading">From the work in progress.</h2>
		<a class="quiet-link rss-link" href="/developer-log/rss.xml">RSS</a>
	</div>

	<form class="filters" method="GET" aria-label="Filter Developer Log entries">
		<label>
			<span>Type</span>
			<select name="type" value={data.filters.type ?? ''}>
				<option value="">All types</option>
				{#each data.types as type}<option value={type}>{type}</option>{/each}
			</select>
		</label>
		<label>
			<span>Product</span>
			<select name="product" value={data.filters.product ?? ''}>
				<option value="">All Products</option>
				{#each data.products as product}<option value={product}
						>{productsBySlug.get(product)?.name}</option
					>{/each}
			</select>
		</label>
		<label>
			<span>Topic</span>
			<select name="topic" value={data.filters.topic ?? ''}>
				<option value="">All topics</option>
				{#each data.topics as topic}<option value={topic}>{topic}</option>{/each}
			</select>
		</label>
		<button type="submit">Apply filters</button>
		<a class="quiet-link" href="/developer-log">Clear</a>
	</form>

	{#if data.entries.length}
		<div class="entries">
			{#each data.entries as entry, index}
				<article class:featured={index === 0}>
					<div class="entry-meta">
						<span>{entry.type}</span><time datetime={entry.publishedAt}>{entry.publishedAt}</time>
					</div>
					<h3><a href={`/developer-log/${entry.slug}`}>{entry.title}</a></h3>
					<p>{entry.summary}</p>
					{#if entry.products?.length}
						<p class="relations">
							{#each entry.products as product, i}<a
									class="quiet-link"
									href={`/products/${product}`}>{productsBySlug.get(product)?.name}</a
								>{#if i < entry.products.length - 1}<span> · </span>{/if}{/each}
						</p>
					{/if}
				</article>
			{/each}
		</div>
	{:else}
		<p class="empty-state">No published entries match these filters.</p>
	{/if}
</section>

<section class="page-frame ruled-section subscription" aria-labelledby="subscription-heading">
	<span class="section-label">Keep up</span>
	<h2 id="subscription-heading">Keep up with the work.</h2>
	<p>Occasional notes from Code Carton—releases, field notes, and practical findings.</p>
	<form action="https://codecarton.ck.page/1f27309e3d" method="post">
		<label for="email">Email address</label>
		<input id="email" name="email_address" type="email" autocomplete="email" required />
		<button type="submit">Subscribe</button>
	</form>
</section>

<style>
	.developer-log-introduction {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: clamp(96px, 14vw, 192px);
	}

	.log-section,
	.subscription {
		padding-top: 24px;
		padding-bottom: 96px;
	}
	.log-section-heading {
		position: relative;
	}
	h2,
	h3 {
		font-family: Georgia, 'Times New Roman', serif;
		font-weight: 400;
		letter-spacing: -0.035em;
	}
	h2 {
		max-width: 16ch;
		margin: 20px 0 0;
		font-size: var(--editorial-section-size);
		line-height: 1;
	}
	.rss-link {
		position: absolute;
		top: 0;
		right: 0;
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		gap: 16px;
		padding: 32px 0;
		border-bottom: 1px solid #d9d6cd;
	}
	.filters label {
		display: grid;
		gap: 8px;
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	select,
	input {
		min-height: 44px;
		border: 1px solid #b4b1a8;
		border-radius: 0;
		background: #f9f8f3;
		padding: 8px 12px;
		color: #20201d;
		font: inherit;
	}
	button {
		min-height: 44px;
		border: 0;
		padding: 8px 14px;
		background: #20201d;
		color: #f9f8f3;
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		cursor: pointer;
	}
	.entries article {
		padding: 32px 0;
		border-bottom: 1px solid #d9d6cd;
	}
	.entries article.featured {
		padding-top: 56px;
	}
	.entry-meta,
	.relations {
		font-family: ui-monospace, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.entry-meta {
		display: flex;
		gap: 16px;
	}
	h3 {
		max-width: 18ch;
		margin: 16px 0 0;
		font-size: var(--editorial-list-size);
		line-height: 1;
	}
	h3 a {
		text-decoration: none;
	}
	h3 a:hover {
		text-decoration: underline;
		text-decoration-color: #e84b1b;
		text-underline-offset: 0.15em;
	}
	.entries article > p:not(.relations),
	.subscription > p {
		max-width: 40rem;
		line-height: 1.6;
	}
	.relations {
		margin: 20px 0 0;
	}
	.empty-state {
		padding: 48px 0;
	}
	.subscription form {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 24px;
	}
	.subscription label {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}
	.subscription input {
		width: min(100%, 24rem);
	}
	@media (max-width: 767px) {
		.log-section,
		.subscription {
			padding-bottom: 72px;
		}
		.filters {
			align-items: stretch;
		}
		.filters label {
			width: 100%;
		}
		.filters select {
			width: 100%;
		}
	}
</style>
