<script lang="ts">
	import { page } from '$app/stores';

	const navLinks = [
		{ name: 'Products', href: '/products' },
		{ name: 'Developer Log', href: '/developer-log' }
	];

	let mobileMenuOpen = false;

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="site-header">
	<div class="page-frame header-inner">
		<a class="wordmark" href="/" aria-label="Code Carton home" on:click={closeMenu}>
			Code Carton
		</a>

		<button
			class="menu-toggle"
			type="button"
			aria-expanded={mobileMenuOpen}
			aria-controls="site-navigation"
			on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
		>
			Menu
		</button>

		<nav id="site-navigation" class:open={mobileMenuOpen} aria-label="Primary navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					aria-current={$page.url.pathname.startsWith(link.href) ? 'page' : undefined}
					on:click={closeMenu}>{link.name}</a
				>
			{/each}
		</nav>
	</div>
</header>

<style>
	.site-header {
		border-bottom: 1px solid #d9d6cd;
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 76px;
	}

	.wordmark {
		display: inline-flex;
		color: #20201d;
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 1.375rem;
		letter-spacing: -0.04em;
		line-height: 1;
		text-decoration: none;
	}

	nav {
		display: flex;
		gap: 28px;
	}

	nav a,
	.menu-toggle {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		line-height: 1;
		text-decoration: none;
		text-transform: uppercase;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 10px 0;
		border-bottom: 1px solid transparent;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		border-color: #e84b1b;
	}

	.menu-toggle {
		display: none;
		min-width: 44px;
		min-height: 44px;
		border: 0;
		background: transparent;
		color: inherit;
		cursor: pointer;
	}

	@media (max-width: 767px) {
		.header-inner {
			min-height: 68px;
		}

		.menu-toggle {
			display: block;
		}

		nav {
			display: none;
			position: absolute;
			top: 68px;
			left: 0;
			right: 0;
			z-index: 10;
			flex-direction: column;
			gap: 0;
			padding: 12px 20px 20px;
			border-bottom: 1px solid #b4b1a8;
			background: #f9f8f3;
		}

		nav.open {
			display: flex;
		}

		nav a {
			padding: 14px 0;
			border-bottom-color: #d9d6cd;
		}
	}
</style>
