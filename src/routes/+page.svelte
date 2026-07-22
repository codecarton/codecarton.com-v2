<svelte:head>
	<title>Code Carton</title>
	<meta
		name="description"
		content="Code Carton makes focused products and shares the thinking that shapes them."
	/>
</svelte:head>

<section class="page-frame home-introduction" aria-labelledby="home-heading">
	<span class="section-label">Code Carton</span>
	<h1 id="home-heading" class="editorial-heading">
		Small software for people who care about the details.
	</h1>
	<p class="lede">Code Carton makes focused Products and shares the thinking that shapes them.</p>
</section>

<section class="page-frame ruled-section home-next" aria-labelledby="explore-heading">
	<span class="section-label">01 / Explore</span>
	<h2 id="explore-heading">The product portfolio and Developer Log are taking shape.</h2>
	<p>
		<a class="quiet-link" href="/products">Browse Products</a>
		and
		<a class="quiet-link" href="/developer-log">read the Developer Log</a>.
	</p>
</section>

<style>
	.home-introduction {
		padding-top: clamp(96px, 16vw, 224px);
		padding-bottom: clamp(96px, 14vw, 192px);
	}

	.home-next {
		padding-top: 24px;
		padding-bottom: 96px;
	}

	h2 {
		max-width: 18ch;
		margin: 24px 0;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		letter-spacing: -0.035em;
		line-height: 1;
	}

	p {
		line-height: 1.6;
	}
</style>
