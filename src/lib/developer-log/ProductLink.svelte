<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style>
	a {
		text-decoration-color: #b4b1a8;
		text-underline-offset: 0.2em;
	}
	a:hover {
		color: #e84b1b;
		text-decoration-color: currentColor;
	}
</style>
