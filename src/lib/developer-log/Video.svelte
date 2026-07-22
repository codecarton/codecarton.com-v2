<script lang="ts">
	export let src: string;
	export let title: string;
</script>

<div class="video"><iframe {src} {title} allowfullscreen></iframe></div>

<style>
	.video {
		position: relative;
		aspect-ratio: 16 / 9;
		margin: 2rem 0;
	}
	iframe {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
