<script lang="ts">
	import { page } from '$app/stores';
	import PrototypeSwitcher from '$lib/prototype/rams-direction/PrototypeSwitcher.svelte';
	import VariantA from '$lib/prototype/rams-direction/VariantA.svelte';
	import VariantB from '$lib/prototype/rams-direction/VariantB.svelte';
	import VariantC from '$lib/prototype/rams-direction/VariantC.svelte';

	// PROTOTYPE — Three Rams-inspired homepage directions, switchable via ?variant=, on `/`.
	$: variant = ['A', 'B', 'C'].includes($page.url.searchParams.get('variant') ?? '')
		? ($page.url.searchParams.get('variant') as 'A' | 'B' | 'C')
		: 'A';

	const labels = {
		A: 'Systematic index',
		B: 'Object-led workshop',
		C: 'Quiet catalogue'
	};
</script>

<svelte:head>
	<title>Code Carton — Visual direction prototype</title>
</svelte:head>

{#if variant === 'A'}
	<VariantA />
{:else if variant === 'B'}
	<VariantB />
{:else}
	<VariantC />
{/if}

<PrototypeSwitcher variants={['A', 'B', 'C']} current={variant} {labels} />
