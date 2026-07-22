import { expect, test, type Locator, type Page } from '@playwright/test';

const entryPath = '/developer-log/one16-version-2-released';

async function horizontalBounds(locator: Locator) {
	const box = await locator.boundingBox();
	expect(box).not.toBeNull();
	return { left: box!.x, right: box!.x + box!.width, width: box!.width };
}

async function expectNoHorizontalOverflow(page: Page) {
	const dimensions = await page.evaluate(() => ({
		viewport: document.documentElement.clientWidth,
		content: document.documentElement.scrollWidth
	}));
	expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
}

test.describe('Quiet catalogue editorial presentation', () => {
	for (const viewport of [
		{ name: 'wide desktop', width: 1440, height: 1100, maximumTitleSize: 77 },
		{ name: 'tablet', width: 768, height: 1024, maximumTitleSize: 56 },
		{ name: 'narrow mobile', width: 390, height: 844, maximumTitleSize: 40 }
	]) {
		test(`keeps a Developer Log entry coherent at ${viewport.name}`, async ({ page }) => {
			await page.setViewportSize(viewport);
			await page.goto(entryPath);

			const entry = page.getByRole('article');
			const heading = page.getByRole('heading', { level: 1 });
			const cover = entry.getByRole('figure');
			const coverImage = cover.getByRole('img');
			const bodyParagraph = entry.getByText(/Woodworking is fun\. Math isn.t\./);

			await expect(heading).toHaveText('One16 Version 2 Released');
			await expect(coverImage).toHaveAttribute('alt', 'One16 Version 2 release banner');

			const [entryBounds, coverImageBounds, bodyBounds] = await Promise.all([
				horizontalBounds(entry),
				horizontalBounds(coverImage),
				horizontalBounds(bodyParagraph)
			]);
			expect(Math.abs(coverImageBounds.left - bodyBounds.left)).toBeLessThanOrEqual(1);
			expect(Math.abs(coverImageBounds.right - bodyBounds.right)).toBeLessThanOrEqual(1);

			const presentation = await heading.evaluate((element) => {
				const style = getComputedStyle(element);
				return {
					direction: style.direction,
					fontSize: Number.parseFloat(style.fontSize),
					textAlign: style.textAlign
				};
			});
			expect(presentation.fontSize).toBeLessThanOrEqual(viewport.maximumTitleSize);
			expect(presentation.direction).toBe('ltr');
			expect(['left', 'start']).toContain(presentation.textAlign);

			if (viewport.name === 'wide desktop') {
				const shell = await horizontalBounds(page.locator('.site-shell'));
				const shellCenter = shell.left + shell.width / 2;
				const entryCenter = entryBounds.left + entryBounds.width / 2;
				expect(Math.abs(entryCenter - shellCenter)).toBeLessThanOrEqual(1);
				expect(entryBounds.width).toBeLessThanOrEqual(704);
			}

			await expectNoHorizontalOverflow(page);
		});
	}

	test('keeps shared editorial titles readable and interaction preferences intact', async ({
		browser
	}) => {
		const context = await browser.newContext({
			viewport: { width: 1440, height: 1100 },
			reducedMotion: 'reduce'
		});
		const page = await context.newPage();
		await page.goto('/products');

		const heading = page.getByRole('heading', { level: 1 });
		await expect(heading).toHaveText('Focused software, made with care.');
		const headingSize = await heading.evaluate((element) =>
			Number.parseFloat(getComputedStyle(element).fontSize)
		);
		expect(headingSize).toBeLessThanOrEqual(77);

		await page.keyboard.press('Tab');
		const focusPresentation = await page.locator(':focus-visible').evaluate((element) => {
			const style = getComputedStyle(element);
			return {
				outlineStyle: style.outlineStyle,
				outlineWidth: Number.parseFloat(style.outlineWidth)
			};
		});
		expect(focusPresentation.outlineStyle).toBe('solid');
		expect(focusPresentation.outlineWidth).toBeGreaterThanOrEqual(2);

		const reducedMotion = await page.evaluate(() => ({
			scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
			maximumTransitionDuration: Math.max(
				...Array.from(document.querySelectorAll('*')).flatMap((element) =>
					getComputedStyle(element)
						.transitionDuration.split(',')
						.map((duration) => Number.parseFloat(duration) || 0)
				)
			)
		}));
		expect(reducedMotion.scrollBehavior).toBe('auto');
		expect(reducedMotion.maximumTransitionDuration).toBeLessThanOrEqual(0.00001);
		await expectNoHorizontalOverflow(page);
		await context.close();
	});
});
