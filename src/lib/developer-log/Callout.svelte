<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<aside class="callout">
	{#if title}<strong>{title}</strong>{/if}
	<slot />
</aside>

<style>
	.callout {
		margin: 2rem 0;
		padding: 1rem 1.25rem;
		border-left: 3px solid #e84b1b;
		background: #efede6;
	}
	strong {
		display: block;
		margin-bottom: 0.5rem;
		font-family: ui-monospace, monospace;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
</style>
