<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let variants: string[];
	export let current: string;
	export let labels: Record<string, string>;

	function cycle(offset: number) {
		const index = variants.indexOf(current);
		const next = variants[(index + offset + variants.length) % variants.length];
		const url = new URL($page.url);
		url.searchParams.set('variant', next);
		goto(`${url.pathname}${url.search}`);
	}

	onMount(() => {
		const handleKey = (event: KeyboardEvent) => {
			const target = event.target as HTMLElement;
			if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return;
			if (event.key === 'ArrowLeft') cycle(-1);
			if (event.key === 'ArrowRight') cycle(1);
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});
</script>

{#if dev}
	<nav class="prototype-switcher" aria-label="Prototype variants">
		<button on:click={() => cycle(-1)} aria-label="Previous direction">←</button>
		<div><b>{current}</b><span>{labels[current]}</span></div>
		<button on:click={() => cycle(1)} aria-label="Next direction">→</button>
	</nav>
{/if}

<style>
	.prototype-switcher {
		position: fixed;
		z-index: 100;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%);
		display: grid;
		grid-template-columns: 44px minmax(180px, auto) 44px;
		align-items: center;
		padding: 6px;
		border: 1px solid #333;
		border-radius: 999px;
		background: #191919;
		box-shadow: 0 8px 30px rgb(0 0 0 / 24%);
		color: white;
		font: 13px/1.2 Arial, sans-serif;
	}
	button {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border: 0;
		border-radius: 50%;
		background: transparent;
		color: inherit;
		font-size: 19px;
		cursor: pointer;
	}
	button:hover,
	button:focus-visible { background: #353535; outline: none; }
	div { display: flex; justify-content: center; gap: 8px; text-align: center; }
	b { color: #ff4d00; }
	span { color: #ddd; }
</style>
