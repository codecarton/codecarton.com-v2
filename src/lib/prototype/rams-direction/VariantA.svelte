<script lang="ts">
	const products = [
		{ no: '01', name: 'Swiftpkg', kind: 'Developer tool', action: 'View on GitHub', featured: true },
		{ no: '02', name: 'One16', kind: 'Music utility', action: 'View Product', featured: false },
		{ no: '03', name: 'Ditches', kind: 'iPhone utility', action: 'View Product', featured: false },
		{ no: '04', name: 'Devote', kind: 'Focus timer', action: 'View Product', featured: false }
	];
</script>

<div class="direction-a">
	<header>
		<a class="brand" href="/">CODE<br />CARTON<span>.</span></a>
		<p>Useful software,<br />made with care.</p>
		<nav><a href="#products">Products</a><a href="#log">Developer Log</a><a href="mailto:hello@codecarton.com">Contact</a></nav>
	</header>

	<main>
		<section class="intro">
			<p class="eyebrow">Maker studio / Raleigh, NC</p>
			<h1>Small tools.<br />Clear purpose.</h1>
			<p class="summary">Code Carton is Jordan Calhoun's maker studio for focused software that respects the people using it.</p>
		</section>

		<section id="products" class="products">
			<div class="section-label"><span>Products</span><span>04 active</span></div>
			<div class="product-grid">
				{#each products as product}
					<article class:featured={product.featured}>
						<div class="product-meta"><span>{product.no}</span><span>{product.kind}</span></div>
						{#if product.featured}
							<div class="swift-mark"><span>S</span><i></i></div>
						{:else if product.no === '02'}
							<img src="/one16/iPhone-Hero.webp" alt="One16 app interface" />
						{:else if product.no === '03'}
							<img src="/ditches/ditches-app.webp" alt="Ditches app interface" />
						{:else}
							<div class="devote-mark">25<span>min</span></div>
						{/if}
						<div class="product-footer"><h2>{product.name}</h2><a class:primary={product.featured} href="/">{product.action} <span>↗</span></a></div>
					</article>
				{/each}
			</div>
		</section>

		<section id="log" class="log">
			<div class="section-label"><span>Developer Log</span><a href="/change-log">All entries →</a></div>
			<a href="/change-log"><time>06.18.26</time><b>Why Swift packages deserve better release notes</b><span>Field note</span></a>
			<a href="/change-log"><time>05.29.26</time><b>One16 2.2 is available</b><span>Release</span></a>
			<a href="/change-log"><time>04.07.26</time><b>Building a calmer focus timer</b><span>Behind the scenes</span></a>
		</section>
	</main>

	<footer><span>© 2026 Code Carton</span><span>Made by Jordan Calhoun</span><a href="https://github.com/codecarton">GitHub ↗</a></footer>
</div>

<style>
	:global(body) { margin: 0; }
	.direction-a { min-height: 100vh; background: #f2f0e9; color: #181816; font-family: Arial, Helvetica, sans-serif; }
	header { display: grid; grid-template-columns: 2fr 2fr 5fr; gap: 24px; padding: 30px 3vw; border-bottom: 1px solid #181816; }
	.brand { font-size: 20px; font-weight: 800; line-height: .83; letter-spacing: -.06em; text-decoration: none; color: inherit; }
	.brand span { color: #f04a16; }
	header p { margin: 0; font-size: 13px; line-height: 1.25; }
	header nav { display: flex; justify-content: flex-end; gap: 32px; align-items: flex-start; }
	header nav a, .section-label a { color: inherit; font-size: 13px; text-decoration: none; border-bottom: 1px solid transparent; }
	header nav a:hover, header nav a:focus-visible, .section-label a:hover { border-color: currentColor; }
	main { padding: 0 3vw; }
	.intro { display: grid; grid-template-columns: 2fr 4fr 3fr; gap: 24px; min-height: 55vh; padding: 42px 0 70px; align-items: end; }
	.eyebrow { align-self: start; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: .1em; }
	h1 { grid-column: 2; margin: 0; font-size: clamp(60px, 8vw, 132px); font-weight: 500; line-height: .85; letter-spacing: -.075em; }
	.summary { margin: 0; max-width: 360px; font-size: clamp(18px, 2vw, 27px); line-height: 1.15; letter-spacing: -.025em; }
	.section-label { display: flex; justify-content: space-between; padding: 12px 0; border-top: 1px solid; font-size: 11px; text-transform: uppercase; letter-spacing: .11em; }
	.product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #181816; border: 1px solid #181816; }
	article { display: flex; flex-direction: column; min-height: 450px; padding: 14px; overflow: hidden; background: #dedbd1; }
	article.featured { background: #d8d5ca; }
	.product-meta { display: flex; justify-content: space-between; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; }
	article img { width: 100%; height: 290px; object-fit: contain; margin: auto; filter: saturate(.75); }
	.swift-mark { position: relative; display: grid; place-items: center; width: 72%; aspect-ratio: 1; margin: auto; border-radius: 18%; background: #f04a16; color: #fff; font-size: clamp(80px, 11vw, 150px); font-weight: 700; letter-spacing: -.1em; }
	.swift-mark i { position: absolute; right: -18%; bottom: 11%; width: 32%; height: 3px; background: #181816; }
	.devote-mark { display: flex; align-items: baseline; margin: auto; font-size: 96px; font-weight: 300; letter-spacing: -.08em; }
	.devote-mark span { font-size: 12px; letter-spacing: .1em; }
	.product-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }
	h2 { margin: 0; font-size: 27px; font-weight: 500; letter-spacing: -.04em; }
	.product-footer a { color: inherit; font-size: 11px; text-decoration: none; }
	.product-footer a.primary { padding: 11px 12px; background: #f04a16; color: #fff; }
	.log { padding: 100px 0 120px; }
	.log > a { display: grid; grid-template-columns: 2fr 6fr 1fr; gap: 24px; padding: 20px 0; border-top: 1px solid #aaa79e; color: inherit; text-decoration: none; }
	.log time, .log span { font-size: 11px; text-transform: uppercase; letter-spacing: .07em; }
	.log b { font-size: 21px; font-weight: 400; }
	footer { display: grid; grid-template-columns: 2fr 6fr 1fr; gap: 24px; padding: 20px 3vw 90px; border-top: 1px solid; font-size: 11px; }
	footer a { color: inherit; text-decoration: none; }
	@media (max-width: 760px) {
		header { grid-template-columns: 1fr 1fr; } header p { display: none; } header nav { gap: 14px; }
		.intro { grid-template-columns: 1fr; min-height: 60vh; } h1 { grid-column: 1; } .summary { font-size: 20px; }
		.product-grid { grid-template-columns: 1fr; } article { min-height: 420px; }
		.log > a { grid-template-columns: 1fr; gap: 7px; } .log > a span { display: none; }
		footer { grid-template-columns: 1fr 1fr; } footer span:nth-child(2) { display: none; }
	}
</style>
