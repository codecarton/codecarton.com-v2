<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string | undefined = undefined;
</script>

<figure>
	<img {src} {alt} />{#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>

<style>
	figure {
		margin: 2rem 0;
		padding: 0 0 1rem;
		background: #efede6;
	}
	img {
		display: block;
		width: 100%;
	}
	figcaption {
		margin: 1rem 1rem 0;
		font-family: ui-monospace, monospace;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
</style>
