<footer class="site-footer">
	<div class="page-frame footer-inner">
		<p>© {new Date().getFullYear()} Code Carton</p>
		<nav aria-label="Utility navigation">
			<a href="mailto:hello@codecarton.com">Email</a>
			<a href="https://github.com/codecarton">GitHub</a>
		</nav>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid #d9d6cd;
	}

	.footer-inner {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		padding-top: 24px;
		padding-bottom: 24px;
		color: #5d5c56;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	p {
		margin: 0;
	}

	nav {
		display: flex;
		gap: 20px;
	}

	a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		text-decoration: none;
	}

	a:hover {
		color: #e84b1b;
	}

	@media (max-width: 767px) {
		.footer-inner {
			flex-direction: column;
		}
	}
</style>
