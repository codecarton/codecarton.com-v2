<script lang="ts">
	import HorizontalBlogCard from '$lib/components/blog/HorizontalBlogCard.svelte';
	import VerticalBlogCard from '$lib/components/blog/VerticalBlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const featuredPosts = data.posts.slice(0, 2);
	const posts = data.posts.slice(2);
</script>

<svelte:head>
	<title>Code Carton - Change Log</title>
</svelte:head>

<div class="hidden md:block md:max-w-4xl lg:max-w-6xl mx-auto px-10">
	{#each featuredPosts as post}
		<HorizontalBlogCard {post} />
	{/each}
</div>

<div class="m-7 md:hidden">
	{#each featuredPosts as post}
		<VerticalBlogCard {post} />
	{/each}
</div>

<div
	class="
    mx-auto
    md:max-w-5xl
    lg:max-w-7xl
    mt-12 grid
    lg:grid-cols-3
    md:grid-cols-2
    p-5
    justify-items-center"
>
	{#each posts as post}
		<VerticalBlogCard {post} />
	{/each}
</div>
