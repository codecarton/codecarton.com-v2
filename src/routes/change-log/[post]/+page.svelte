<script lang="ts">
	import CoverPhotoCredit from './CoverPhotoCredit.svelte';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import SignupCta from '$lib/components/SignupCTA.svelte';
	import { generateFriendlyDate } from '$lib/utils/date';
	import type { PageData } from './$types';

	export let data: PageData;

	const {
		title,
		date,
		updated,
		categories,
		coverImage,
		coverWidth,
		coverHeight,
		excerpt,
		coverPhotoCredited
	} = data.meta;

	const { coverAuthor, coverAuthorSource, coverSource } = data.meta;

	const friendlyDate = generateFriendlyDate(date);
	const friendlyUpdate = updated && generateFriendlyDate(updated);
</script>

<svelte:head>
	<title>{title} - Code Carton</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:image" content="https://codecarton.com/change-log/{coverImage}" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@codecarton" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	<meta
		name="twitter:image"
		content="https://codecarton.com/change-log/{coverImage}"
	/>
	<meta property="og:twitter:width" content={coverWidth} />
	<meta property="og:twitter:height" content={coverHeight} />
</svelte:head>

<!-- TODO: Implement Share Actions -->
<article class="mx-auto max-w-4xl md:my-10 md:px-10 prose prose-neutral">
	<img
		src="/change-log/{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		class="
      shadow-md
      md:hidden
      mb-0
    "
	/>
	<div class="md:hidden mb-5 pl-1">
		{#if coverPhotoCredited}
			<CoverPhotoCredit
				author={coverAuthor}
				authorSource={coverAuthorSource}
				source={coverSource}
			/>
		{/if}
	</div>

	<h1 class="text-center text-neutral-800 font-semibold text-4xl mb-5 p-2">{title}</h1>
	<p class="text-center">
		<span class="text-sm text-neutral-400">Posted: {friendlyDate}</span>
		{#if friendlyUpdate}
			<span class="text-sm text-neutral-400"> - Last updated: {friendlyUpdate}</span>
		{/if}
		{#each categories as category}
			<a
				href="/change-log/category/{category}"
				class="
              px-2
              py-1
              mx-2
              bg-neutral-100
              rounded
              text-neutral-500
              no-underline
              text-xs
              font-bold
              hover:bg-neutral-300
              hover:text-neutral-700"
			>
				{category.toUpperCase()}
			</a>
		{/each}
	</p>
	<img
		src="/change-log/{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		class="
      mt-9
      md:rounded-lg
      shadow-md
      hidden
      md:block
      border
      border-neutral-100
      mb-0
    "
	/>
	<div class="hidden md:block">
		{#if coverPhotoCredited}
			<CoverPhotoCredit
				author={coverAuthor}
				authorSource={coverAuthorSource}
				source={coverSource}
			/>
		{/if}
	</div>

	<div
		class="
    px-7
    md:px-0
    prose-img:rounded-lg
    first-letter:text-7xl
    first-letter:font-bold
    first-letter:mr-3
    first-letter:float-left"
	>
		{@html data.PostContent}
	</div>
	<!-- <SignupCta /> -->
	<!-- <SignupCta /> -->
	<hr />
	<div class="mx-auto px-10">
		<script
			async
			data-uid="1f27309e3d"
			src="https://codecarton.ck.page/1f27309e3d/index.js"
		></script>
	</div>
</article>
