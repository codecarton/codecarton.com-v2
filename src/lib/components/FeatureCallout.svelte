<script lang="ts">
	export let imageSrc: string | null = null;
	export let title: string;
	export let description: string;
	export let imageAlt: string | null = null;
</script>

<div class="max-w-md mx-auto overflow-hidden md:max-w-5xl my-32 md:flex px-10">
	{#if imageAlt}
		<div class="md:shrink-0 hidden md:block">
			<img src={imageSrc} alt={imageAlt} class="inline-block max-w-sm" />
		</div>
	{/if}

	<div class="md:pl-8 py-10 md:py-0 my-auto {imageSrc ? 'md:text-left' : ''} text-center">
		<h2 class="mb-7 text-slate-700 text-5xl font-semibold">{title}</h2>
		<p class="text-slate-400 text-xl leading-9 m-auto">
			{description}
		</p>
	</div>

	{#if imageAlt}
		<div class="md:shrink-0 md:hidden mx-auto text-center">
			<img src={imageSrc} alt={imageAlt} class="inline-block max-w-sm px-10" />
		</div>
	{/if}
</div>
