<script lang="ts">
	import { PopoverPanel, PopoverButton } from '@rgossiaux/svelte-headlessui';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { XMark } from 'svelte-heros-v2';
	import GithubIcon from '../components/icons/GithubIcon.svelte';
	import TwitterIcon from '../components/icons/TwitterIcon.svelte';
	import CodeCartonLogo from '$lib/components/icons/CodeCartonLogo.svelte';

	export let navLinks: navLink[];

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

<PopoverPanel
	let:close
	class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
>
	<div
		class="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5"
		transition:slide={{ delay: 100, duration: 300, easing: quintOut }}
	>
		<div class="px-6 pt-4 pb-5">
			<div class="flex items-center justify-between">
				<a href="/">
					<span class="font-bold text-md text-gray-400"><CodeCartonLogo /></span>
				</a>
				<div class="-mr-2">
					<PopoverButton
						class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<span class="sr-only">Close menu</span>
						<XMark class="h-6 w-6" aria-hidden="true" />
					</PopoverButton>
				</div>
			</div>

			<ul class="font-bold text-xls text-gray-900 py-5">
				{#each navLinks as link}
					<a
						href={link.href}
						class="hover:text-purple-500 bg-slate-100"
						on:click={() => {
							close(null);
						}}
					>
						<li class="p-2 rounded my-1 text-2xl hover:bg-gray-50">{link.name}</li>
					</a>
				{/each}
			</ul>
			<div class="border-t-2 border-t-gray-200 pt-5">
				<ul>
					{#each socialLinks as link}
						<a href={link.href} rel="me" class="w-auto h-auto inline-block p-3" target="_blank">
							<svelte:component this={link.icon} class="text-gray-800 hover:text-purple-500" />
						</a>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</PopoverPanel>
