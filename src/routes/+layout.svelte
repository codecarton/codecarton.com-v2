<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="site-shell">
	<Header />
	<main id="main-content" class="site-main" tabindex="-1">
		<slot />
	</main>
	<Footer />
</div>
