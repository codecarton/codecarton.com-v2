<script lang="ts">
	import GithubIcon from './icons/GithubIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';

	const socialLinks: socialLink[] = [
		{
			name: 'Github',
			href: 'https://github.com/codecarton',
			icon: GithubIcon
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/codecarton',
			icon: TwitterIcon
		}
	];
</script>

<div class="bg-slate-50 my-5 mx-5 lg:mx-0">
	<div class="max-w-7xl mx-auto p-7 md:p-20 text-center">
		<h2 class="text-3xl font-bold text-slate-700">Get Early Access to New Products</h2>
		<p class="text-slate-500 mb-5">
			Sign up to get emails to new product releases and early access to products in beta.
		</p>

		<div class="mt-10 inline-flex">
			{#each socialLinks as link}
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href={link.href} rel="me" class="mx-3" target="_blank">
					<svelte:component this={link.icon} class="text-slate-400 hover:text-purple-500" />
				</a>
			{/each}
		</div>
	</div>
</div>
