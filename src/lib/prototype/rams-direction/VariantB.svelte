<script lang="ts">
	const products = ['One16', 'Ditches', 'Devote'];
</script>

<div class="direction-b">
	<header>
		<a class="wordmark" href="/">Code Carton</a>
		<nav><a href="#work">Work</a><a href="#notes">Notes</a></nav>
		<div class="status"><i></i> Jordan is making</div>
	</header>

	<main>
		<section class="hero" id="work">
			<div class="hero-copy">
				<p class="kicker">Featured object / 01</p>
				<h1>Swiftpkg</h1>
				<p>A focused macOS tool for understanding and maintaining Swift package dependencies.</p>
				<a href="/">Explore Swiftpkg <span>→</span></a>
			</div>
			<div class="object-stage">
				<div class="package">
					<span class="top">CODE CARTON / SWIFTPKG</span>
					<b>S</b>
					<span class="bottom">UTILITY № 01</span>
				</div>
				<p class="annotation a1">01<br />Native macOS</p>
				<p class="annotation a2">02<br />Open source</p>
				<p class="annotation a3">03<br />Made in Swift</p>
			</div>
		</section>

		<section class="bench">
			<div class="bench-heading"><p>On the workbench</p><h2>Software should explain itself.</h2></div>
			<div class="bench-products">
				{#each products as product, index}
					<a href="/"><span>0{index + 2}</span><b>{product}</b><span>Inspect →</span></a>
				{/each}
			</div>
		</section>

		<section id="notes" class="notes">
			<div class="notes-intro"><p>Developer Log</p><h2>Notes from the bench.</h2><a href="/change-log">Browse all notes →</a></div>
			<div class="note-grid">
				<article><time>18 / 06</time><span>Field note</span><h3>A better release process for small Swift packages</h3><p>What changed after treating release notes as part of the product.</p></article>
				<article><time>29 / 05</time><span>Release</span><h3>One16 2.2 is ready</h3><p>A quieter interface and a faster path to the controls you use.</p></article>
			</div>
		</section>
	</main>

	<footer><b>Code Carton</b><p>Useful software by Jordan Calhoun.</p><a href="mailto:hello@codecarton.com">Start a conversation →</a></footer>
</div>

<style>
	:global(body) { margin: 0; }
	.direction-b { min-height: 100vh; background: #f7f4ec; color: #292722; font-family: 'Helvetica Neue', Arial, sans-serif; }
	header { display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; padding: 22px 4vw; border-bottom: 1px solid #c9c4b7; }
	header a { color: inherit; text-decoration: none; }
	.wordmark { font-size: 21px; font-weight: 650; letter-spacing: -.04em; }
	header nav { display: flex; justify-content: center; gap: 32px; font-size: 13px; }
	.status { justify-self: end; font: 11px/1.2 monospace; text-transform: uppercase; letter-spacing: .08em; }
	.status i { display: inline-block; width: 7px; height: 7px; margin-right: 7px; border-radius: 50%; background: #ed4c22; }
	.hero { display: grid; grid-template-columns: 38% 62%; min-height: 760px; border-bottom: 1px solid #c9c4b7; }
	.hero-copy { display: flex; flex-direction: column; justify-content: flex-end; padding: 5vw 4vw; }
	.kicker, .bench-heading > p, .notes-intro > p { margin: 0 0 auto; font: 10px/1.2 monospace; text-transform: uppercase; letter-spacing: .13em; }
	h1 { margin: 0 0 18px; font-size: clamp(72px, 9vw, 142px); font-weight: 400; line-height: .82; letter-spacing: -.08em; }
	.hero-copy > p:not(.kicker) { max-width: 440px; margin: 0 0 34px; font-size: 20px; line-height: 1.25; }
	.hero-copy > a { display: flex; justify-content: space-between; width: 250px; padding: 15px 17px; background: #ed4c22; color: white; font-size: 13px; text-decoration: none; }
	.object-stage { position: relative; display: grid; place-items: center; overflow: hidden; background: #dfddd5; }
	.object-stage::before { content: ''; position: absolute; inset: 0; opacity: .3; background-image: linear-gradient(#aaa 1px, transparent 1px), linear-gradient(90deg, #aaa 1px, transparent 1px); background-size: 8.333% 12.5%; }
	.package { z-index: 1; display: flex; flex-direction: column; justify-content: space-between; width: min(42vw, 500px); aspect-ratio: 1.18; padding: 24px; transform: rotate(-4deg); border-radius: 8px; background: #ed4c22; box-shadow: 25px 30px 60px rgb(45 38 31 / 18%); color: white; }
	.package b { align-self: center; font-size: clamp(150px, 20vw, 300px); font-weight: 700; line-height: .7; letter-spacing: -.12em; }
	.package span { font: 10px/1 monospace; letter-spacing: .08em; }
	.package .bottom { align-self: flex-end; }
	.annotation { position: absolute; z-index: 2; margin: 0; font: 9px/1.4 monospace; text-transform: uppercase; }
	.annotation::before { content: ''; display: inline-block; width: 40px; margin-right: 8px; border-top: 1px solid; vertical-align: middle; }
	.a1 { top: 16%; left: 5%; } .a2 { top: 25%; right: 4%; } .a3 { right: 7%; bottom: 10%; }
	.bench { display: grid; grid-template-columns: 1fr 1fr; padding: 110px 4vw; }
	.bench-heading { display: flex; flex-direction: column; justify-content: space-between; min-height: 340px; padding-right: 5vw; }
	.bench h2, .notes h2 { max-width: 520px; margin: 0; font-size: clamp(45px, 5.5vw, 82px); font-weight: 400; line-height: .95; letter-spacing: -.06em; }
	.bench-products { border-top: 1px solid #292722; }
	.bench-products a { display: grid; grid-template-columns: 50px 1fr auto; align-items: center; padding: 28px 0; border-bottom: 1px solid #aaa69c; color: inherit; text-decoration: none; }
	.bench-products span { font: 10px/1 monospace; text-transform: uppercase; }
	.bench-products b { font-size: 28px; font-weight: 400; letter-spacing: -.04em; }
	.notes { display: grid; grid-template-columns: 1fr 2fr; gap: 5vw; padding: 110px 4vw; background: #292722; color: #f7f4ec; }
	.notes-intro { display: flex; flex-direction: column; min-height: 420px; }
	.notes-intro a { margin-top: auto; color: inherit; font-size: 12px; }
	.note-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #77736b; }
	.note-grid article { display: flex; flex-direction: column; padding: 28px; background: #34322d; }
	.note-grid time, .note-grid span { font: 10px/1 monospace; text-transform: uppercase; letter-spacing: .1em; }
	.note-grid span { margin: 60px 0 20px; color: #ed7657; }
	.note-grid h3 { margin: 0; font-size: 31px; font-weight: 400; line-height: 1; letter-spacing: -.04em; }
	.note-grid p { margin: auto 0 0; color: #c7c1b5; font-size: 14px; line-height: 1.4; }
	footer { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 35px 4vw 110px; border-top: 1px solid #c9c4b7; font-size: 13px; }
	footer p { margin: 0; } footer a { justify-self: end; color: inherit; }
	@media (max-width: 760px) {
		header { grid-template-columns: 1fr 1fr; } header nav { display: none; }
		.hero { grid-template-columns: 1fr; } .hero-copy { min-height: 580px; } .object-stage { min-height: 520px; }
		.package { width: 70vw; }
		.bench, .notes { grid-template-columns: 1fr; gap: 60px; } .bench-heading { min-height: 300px; }
		.note-grid { grid-template-columns: 1fr; } .note-grid article { min-height: 360px; }
		footer { grid-template-columns: 1fr 1fr; } footer p { display: none; }
	}
</style>
