import { expect, test } from '@playwright/test';

test('home page loads', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { name: 'Luke Lachlan Day' })).toBeVisible();
	await expect(page.getByText('Indie Developer / Programmer')).toBeVisible();
});

test('navigation works', async ({ page }) => {
	await page.goto('/');

	const primaryNavigation = page.getByRole('navigation', { name: 'Primary navigation' });

	await primaryNavigation.getByRole('link', { name: 'Projects', exact: true }).click();
	await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Select Dungeons and Dining Tables' })).toBeVisible();

	await primaryNavigation.getByRole('link', { name: 'Experience', exact: true }).click();
	await expect(page.getByRole('heading', { name: 'Experience', exact: true })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Select Co-Founder at Daytime Devs Pty Ltd' })).toBeVisible();
});

test('theme toggle does not crash', async ({ page }) => {
	await page.goto('/');

	const root = page.locator('html');
	const initialTheme = await root.getAttribute('data-theme');
	await page.getByRole('button', { name: /theme/i }).click();

	await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
	await expect.poll(() => root.getAttribute('data-theme')).not.toBe(initialTheme);

	const nextTheme = await root.getAttribute('data-theme');
	const savedTheme = await page.evaluate(() => localStorage.getItem('luke-lachlan-day.theme'));

	expect(nextTheme).toMatch(/^(light|dark)$/);
	expect(savedTheme).toBe(nextTheme);
});

test('projects interaction works', async ({ page }) => {
	await page.goto('/projects/');

	const initialDetail = page.locator('#project-detail-luke-lachlan-day-website');
	const nextDetail = page.locator('#project-detail-dungeons-and-dining-tables');

	await expect(page.getByRole('button', { name: 'Select Luke Lachlan Day Website' })).toBeVisible();
	await expect(initialDetail).toBeVisible();

	await page.getByRole('button', { name: 'Select Dungeons and Dining Tables' }).click();

	await expect(nextDetail).toBeVisible();
	await expect(nextDetail.getByRole('heading', { name: 'Dungeons and Dining Tables' })).toBeVisible();
	await expect(page).toHaveURL(/#dungeons-and-dining-tables$/);
});

test('project gallery controls work when present', async ({ page }) => {
	await page.goto('/projects/');

	await page.getByRole('button', { name: 'Select Dungeons and Dining Tables' }).click();

	const gallery = page.getByRole('group', { name: 'Dungeons and Dining Tables images' });
	await expect(gallery).toBeVisible();
	await expect(gallery).toHaveAttribute('data-gallery-index', '0');

	await page.getByRole('button', { name: 'Next Dungeons and Dining Tables image' }).click();

	await expect(gallery).toBeVisible();
	await expect(gallery).toHaveAttribute('data-gallery-index', '1');
	await expect(page.locator('#project-detail-dungeons-and-dining-tables')).toBeVisible();
});
