<script lang="ts">
	const products = [
		{ name: 'Swiftpkg', detail: 'Swift package maintenance', meta: 'macOS · Open source', featured: true },
		{ name: 'One16', detail: 'Musical tempo utility', meta: 'iOS · App Store', featured: false },
		{ name: 'Ditches', detail: 'Decision-making utility', meta: 'iOS · App Store', featured: false },
		{ name: 'Devote', detail: 'A calmer focus timer', meta: 'iOS · In development', featured: false }
	];
</script>

<div class="direction-c">
	<div class="shell">
		<header>
			<a class="monogram" href="/">CC</a>
			<nav><a href="#products">Products</a><a href="#journal">Log</a><a href="#about">About</a></nav>
			<button aria-label="Open menu"><span></span><span></span></button>
		</header>

		<main>
			<section class="manifesto">
				<p class="index">01 / STUDIO</p>
				<h1>Making useful software is an act of editing.</h1>
				<div class="manifesto-foot"><p>Code Carton is Jordan Calhoun's independent maker studio.</p><p>Fewer features.<br />Better considered.</p></div>
			</section>

			<section id="products" class="product-list">
				<div class="section-title"><span>02 / PRODUCTS</span><span>Four active</span></div>
				{#each products as product, index}
					<a class:featured={product.featured} href="/">
						<span class="number">0{index + 1}</span>
						<div><h2>{product.name}</h2><p>{product.detail}</p></div>
						<span class="meta">{product.meta}</span>
						<span class="arrow">↗</span>
					</a>
				{/each}
			</section>

			<section id="journal" class="journal">
				<div class="section-title"><span>03 / DEVELOPER LOG</span><a href="/change-log">View index ↗</a></div>
				<div class="journal-layout">
					<article class="lead-note"><span>FIELD NOTE · 8 MIN</span><h2>Small software can still have a point of view.</h2><p>A working philosophy for deciding what belongs in a product—and what can be left out.</p><a href="/change-log">Read note →</a></article>
					<div class="short-notes"><a href="/change-log"><time>29.05.26</time><b>One16 2.2 is available</b><span>Release</span></a><a href="/change-log"><time>07.04.26</time><b>A more honest App Store screenshot</b><span>Finding</span></a></div>
				</div>
			</section>

			<section id="about" class="about"><span>04 / AUTHOR</span><p>Code Carton is made by <a href="mailto:hello@codecarton.com">Jordan Calhoun</a>, a software designer and developer in Raleigh, North Carolina.</p></section>
		</main>

		<footer><span>Code Carton®</span><span>Raleigh / 35.7796° N</span><a href="mailto:hello@codecarton.com">hello@codecarton.com</a></footer>
	</div>
</div>

<style>
	:global(body) { margin: 0; }
	.direction-c { min-height: 100vh; padding: 20px; background: #e5e2da; color: #20201d; font-family: Arial, Helvetica, sans-serif; }
	.shell { max-width: 1460px; margin: 0 auto; background: #f9f8f3; box-shadow: 0 2px 20px rgb(36 32 23 / 7%); }
	header { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; min-height: 78px; padding: 0 34px; border-bottom: 1px solid #d9d6cd; }
	.monogram { display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid; border-radius: 50%; color: inherit; font-size: 10px; font-weight: 700; text-decoration: none; }
	header nav { display: flex; gap: 34px; }
	header nav a { color: inherit; font-size: 12px; text-decoration: none; }
	header button { justify-self: end; display: none; width: 32px; border: 0; background: none; }
	header button span { display: block; margin: 5px 0; border-top: 1px solid; }
	main { padding: 0 34px; }
	.manifesto { display: grid; grid-template-columns: 1fr 7fr; min-height: 760px; padding: 42px 0 60px; border-bottom: 1px solid #20201d; }
	.index, .section-title, .about > span { margin: 0; font: 9px/1.2 monospace; text-transform: uppercase; letter-spacing: .15em; }
	.manifesto h1 { grid-column: 2; align-self: center; max-width: 1000px; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(65px, 8.3vw, 128px); font-weight: 400; line-height: .92; letter-spacing: -.065em; }
	.manifesto-foot { grid-column: 2; display: flex; justify-content: space-between; align-self: end; }
	.manifesto-foot p { max-width: 300px; margin: 0; font-size: 14px; line-height: 1.4; }
	.section-title { display: flex; justify-content: space-between; padding: 16px 0; }
	.section-title a { color: inherit; text-decoration: none; }
	.product-list { padding: 55px 0 150px; }
	.product-list > a { display: grid; grid-template-columns: 70px 1fr 230px 30px; align-items: center; min-height: 140px; border-top: 1px solid #b4b1a8; color: inherit; text-decoration: none; transition: padding .2s ease, background .2s ease; }
	.product-list > a:last-child { border-bottom: 1px solid #b4b1a8; }
	.product-list > a:hover { padding: 0 18px; background: #eeece5; }
	.product-list > a.featured .arrow { display: grid; place-items: center; width: 30px; height: 30px; background: #e84b1b; color: white; }
	.number, .meta { font: 9px/1.3 monospace; text-transform: uppercase; letter-spacing: .1em; }
	.product-list h2 { margin: 0; font-family: Georgia, serif; font-size: clamp(40px, 5vw, 72px); font-weight: 400; line-height: 1; letter-spacing: -.045em; }
	.product-list p { margin: 6px 0 0; font-size: 12px; }
	.arrow { justify-self: end; }
	.journal { padding: 55px 0 140px; border-top: 1px solid #20201d; }
	.journal-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 8vw; padding-top: 100px; }
	.lead-note span { font: 9px/1.2 monospace; color: #b13b18; letter-spacing: .12em; }
	.lead-note h2 { max-width: 740px; margin: 25px 0; font-family: Georgia, serif; font-size: clamp(48px, 6vw, 84px); font-weight: 400; line-height: .95; letter-spacing: -.055em; }
	.lead-note p { max-width: 490px; font-size: 17px; line-height: 1.4; }
	.lead-note a { display: inline-block; margin-top: 55px; padding-bottom: 5px; border-bottom: 1px solid; color: inherit; font-size: 12px; text-decoration: none; }
	.short-notes { align-self: end; border-top: 1px solid; }
	.short-notes a { display: grid; grid-template-columns: 85px 1fr; gap: 14px; padding: 20px 0; border-bottom: 1px solid #b4b1a8; color: inherit; text-decoration: none; }
	.short-notes time, .short-notes span { font: 9px/1.2 monospace; text-transform: uppercase; }
	.short-notes b { font-size: 16px; font-weight: 400; }
	.short-notes span { grid-column: 2; color: #77736b; }
	.about { display: grid; grid-template-columns: 1fr 4fr; gap: 30px; padding: 120px 0; border-top: 1px solid #20201d; }
	.about p { max-width: 1000px; margin: 0; font-family: Georgia, serif; font-size: clamp(40px, 5.5vw, 78px); line-height: 1.05; letter-spacing: -.05em; }
	.about a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 7px; }
	footer { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 24px 34px 100px; border-top: 1px solid #d9d6cd; font: 9px/1.2 monospace; text-transform: uppercase; letter-spacing: .12em; }
	footer a { justify-self: end; color: inherit; }
	@media (max-width: 760px) {
		.direction-c { padding: 0; } .shell { box-shadow: none; } header { padding: 0 20px; } header nav { display: none; } header button { display: block; }
		main { padding: 0 20px; } .manifesto { grid-template-columns: 1fr; min-height: 670px; } .manifesto h1, .manifesto-foot { grid-column: 1; } .manifesto h1 { font-size: 58px; }
		.manifesto-foot p:last-child { display: none; } .product-list > a { grid-template-columns: 40px 1fr 30px; min-height: 115px; } .product-list .meta { display: none; }
		.product-list h2 { font-size: 41px; } .journal-layout { grid-template-columns: 1fr; } .lead-note h2 { font-size: 50px; } .short-notes { margin-top: 60px; }
		.about { grid-template-columns: 1fr; } .about p { font-size: 43px; } footer { grid-template-columns: 1fr 1fr; padding: 24px 20px 100px; } footer span:nth-child(2) { display: none; }
	}
</style>
