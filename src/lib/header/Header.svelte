<script lang="ts">
	import { Popover, PopoverButton } from '@rgossiaux/svelte-headlessui';
	import { Bars3 } from 'svelte-heros-v2';
	import NavPopoverPanel from './NavPopoverPanel.svelte';
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';
	import CodeCartonLogo from '$lib/components/icons/CodeCartonLogo.svelte';

	const navLinks: navLink[] = [
		{
			name: 'One16',
			href: '/one16'
		},
		{
			name: 'Change Log',
			href: '/change-log'
		},
		{
			name: 'Blog',
			href: 'https://mortiseandcode.com'
		}
	];

	let path: string;
	$: path = $page.url.pathname;
</script>

<Popover class="relative bg-white border-2 border-slate-100">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
			<!-- Logo Div -->
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span
						class="text-slate-400 font-bold text-3xl block pt-1 hover:text-purple-500 dark:text-slate-100"
					>
						<CodeCartonLogo /></span
					>
				</a>
			</div>

			<!-- Mobile navigation toggle-->
			<div class="md:hidden">
				<PopoverButton
					class="
                      inline-flex
                      items-center
                      justify-end
                      rounded-sm
                      bg-slate-600
                      p-2
                      text-white
                      hover:bg-slate-700
                      hover:text-slate-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-slate-500
                  "
				>
					<span class="sr-only">Open menu</span>
					<Bars3 class="h-6 w-6" aria-hidden="true" />
				</PopoverButton>
			</div>

			<!-- Mobile Navigation Popover -->
			<NavPopoverPanel {navLinks} />

			<!-- Desktop Navigation -->
			<div class="md:flex hidden font-lg">
				{#each navLinks as link}
					<NavLink currentPath={path} href={link.href} linkText={link.name} />
				{/each}
			</div>
		</div>
	</div>
</Popover>
