import { test } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { profile } from '../src/data/profile';

type Theme = 'light' | 'dark';

type ViewportPreset = {
	name: 'pc' | 'tablet' | 'mobile';
	width: number;
	height: number;
};

type AuditFinding = {
	severity: 'Critical' | 'High' | 'Medium' | 'Low';
	type: string;
	url: string;
	viewport: string;
	theme: Theme;
	screenshot: string;
	description: string;
	suggestedFix: string;
};

type AuditResult = {
	url: string;
	viewport: string;
	theme: Theme;
	screenshot: string;
};

type PageDiagnostics = {
	horizontalOverflow: {
		scrollWidth: number;
		clientWidth: number;
	};
	textOverflow: Array<{
		tag: string;
		text: string;
		scrollWidth: number;
		clientWidth: number;
	}>;
	sequentialFocusRisks: Array<{
		tag: string;
		label: string;
	}>;
	missingImages: Array<{
		src: string;
		alt: string;
	}>;
	blankImages: Array<{
		src: string;
		alt: string;
		width: number;
		height: number;
	}>;
};

const artifactRoot = path.join(process.cwd(), 'Temp', 'site-audit');
const screenshotRoot = path.join(artifactRoot, 'screenshots');
const reportPath = path.join(artifactRoot, 'report.md');
const themeStorageKey = 'luke-lachlan-day.theme';
const themes: readonly Theme[] = ['light', 'dark'];
const viewportPresets: readonly ViewportPreset[] = [
	{ name: 'pc', width: 1440, height: 900 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', width: 390, height: 844 },
];

const auditRoutes = [
	'/',
	profile.projects.href,
	...profile.projects.items.map((project) => `/projects/${encodeURIComponent(project.id)}/`),
	'/experience/',
	...profile.experience.items.map((item) => `/experience/${encodeURIComponent(item.id)}/`),
	'/contact/',
] as const;

const findings: AuditFinding[] = [];
const results: AuditResult[] = [];
const commandsUsed = ['npm run audit:site'];

const toRouteSlug = (route: string) => {
	if (route === '/') {
		return 'home';
	}

	return route.replace(/^\/|\/$/g, '').replace(/[^\w-]+/g, '__');
};

const toMarkdownTableCell = (value: string | number) =>
	String(value).replace(/\|/g, '\\|').replace(/\n/g, '<br>');

const getCommitHash = () => {
	try {
		return execFileSync('git', ['rev-parse', '--short', 'HEAD'], {
			cwd: process.cwd(),
			encoding: 'utf8',
		}).trim();
	} catch {
		return 'unknown';
	}
};

const addFinding = (finding: AuditFinding) => {
	findings.push(finding);
};

const formatScreenshotPath = (screenshotPath: string) =>
	path.relative(artifactRoot, screenshotPath).replace(/\\/g, '/');

const writeAuditReport = async () => {
	const issueRows =
		findings.length > 0
			? findings
					.map(
						(finding) =>
							`| ${toMarkdownTableCell(finding.severity)} | ${toMarkdownTableCell(finding.type)} | ${toMarkdownTableCell(finding.url)} | ${toMarkdownTableCell(finding.viewport)} | ${toMarkdownTableCell(finding.theme)} | ${toMarkdownTableCell(finding.screenshot)} | ${toMarkdownTableCell(finding.description)} | ${toMarkdownTableCell(finding.suggestedFix)} |`
					)
					.join('\n')
			: '| - | - | - | - | - | - | No issues found in automated audit. | - |';

	const statesWithFindings = new Set(
		findings.map((finding) => `${finding.url}|${finding.viewport}|${finding.theme}`)
	);
	const passedStateCount = results.length - statesWithFindings.size;
	const report = `# Cross-Viewport Theme Audit Report

## Summary

- Audit date: ${new Date().toISOString()}
- Commit: ${getCommitHash()}
- Routes tested: ${auditRoutes.length}
- Viewports tested: ${viewportPresets.map((viewport) => `${viewport.name} (${viewport.width}x${viewport.height})`).join(', ')}
- Themes tested: ${themes.join(', ')}
- Matrix states captured: ${results.length}
- Findings: ${findings.length}

## Commands Used

${commandsUsed.map((command) => `- \`${command}\``).join('\n')}

## Pass/Fail Summary

- Expected states: ${auditRoutes.length * viewportPresets.length * themes.length}
- Captured states: ${results.length}
- Automated states without findings: ${passedStateCount}
- Automated findings: ${findings.length}
${findings.length === 0 ? '- No issues found in automated audit.' : ''}

## Issues

| Severity | Type | URL | Viewport | Theme | Screenshot | Description | Suggested fix |
| --- | --- | --- | --- | --- | --- | --- | --- |
${issueRows}

## Residual Risks

- Screenshot review still needs human judgement for subjective polish, such as awkward spacing, asset taste, and minor theme mood differences.
- Automated text-overflow checks can miss canvas/background-image composition issues and may not catch every overlap between decorative and content layers.
- The audit uses Chromium through Playwright; final visual QA should still sample real phone, tablet, and desktop/PC browsers before a release.
`;

	await writeFile(reportPath, report, 'utf8');
};

test.beforeAll(async () => {
	await rm(artifactRoot, { recursive: true, force: true });
	await mkdir(screenshotRoot, { recursive: true });
});

test.afterAll(async () => {
	await writeAuditReport();
});

test('captures every page at each viewport and theme', async ({ browser }) => {
	for (const viewport of viewportPresets) {
		for (const theme of themes) {
			const context = await browser.newContext({
				viewport: { width: viewport.width, height: viewport.height },
				colorScheme: theme,
			});

			await context.addInitScript(
				({ storageKey, selectedTheme }) => {
					window.localStorage.setItem(storageKey, selectedTheme);
				},
				{ storageKey: themeStorageKey, selectedTheme: theme }
			);

			for (const route of auditRoutes) {
				const routeSlug = toRouteSlug(route);
				const screenshotDirectory = path.join(screenshotRoot, viewport.name, theme);
				const screenshotPath = path.join(screenshotDirectory, `${routeSlug}.png`);
				const relativeScreenshotPath = formatScreenshotPath(screenshotPath);
				const page = await context.newPage();
				const consoleErrors: string[] = [];
				const pageErrors: string[] = [];
				const failedRequests: string[] = [];

				page.on('console', (message) => {
					if (message.type() === 'error') {
						consoleErrors.push(message.text());
					}
				});
				page.on('pageerror', (error) => {
					pageErrors.push(error.message);
				});
				page.on('requestfailed', (request) => {
					const failure = request.failure();
					failedRequests.push(`${request.url()}${failure ? ` (${failure.errorText})` : ''}`);
				});

				await page.goto(route, { waitUntil: 'networkidle' });
				await page.waitForLoadState('domcontentloaded');
				await page.locator('body').waitFor({ state: 'visible' });
				await page.waitForTimeout(300);

				const diagnostics = await page.evaluate<PageDiagnostics>(() => {
					const viewportWidth = document.documentElement.clientWidth;
					const horizontalOverflow = {
						scrollWidth: document.documentElement.scrollWidth,
						clientWidth: viewportWidth,
					};
					const textOverflow = Array.from(
						document.querySelectorAll<HTMLElement>('h1,h2,h3,h4,p,li,a,button,span')
					)
						.filter((element) => {
							if (element.closest('.visually-hidden, [hidden], [inert]')) {
								return false;
							}

							// Status ribbons/pills can produce false scrollWidth readings; screenshot review covers them.
							if (element.closest('[data-status]')) {
								return false;
							}

							// Wheel media frames inherit text from child status ribbons while using transformed image layout.
							if (element.matches('.project-wheel-media') && element.querySelector('[data-status]')) {
								return false;
							}

							const style = window.getComputedStyle(element);
							const rect = element.getBoundingClientRect();

							return (
								style.display !== 'none' &&
								style.visibility !== 'hidden' &&
								rect.width > 0 &&
								rect.height > 0 &&
								element.scrollWidth > element.clientWidth + 1 &&
								element.textContent?.trim()
							);
						})
						.slice(0, 8)
						.map((element) => ({
							tag: element.tagName.toLowerCase(),
							text: (element.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 120),
							scrollWidth: element.scrollWidth,
							clientWidth: element.clientWidth,
						}));
					const sequentialFocusRisks = Array.from(
						document.querySelectorAll<HTMLElement>('a[href],button,input,select,textarea,[tabindex]')
					)
						.filter((element) => {
							if (
								element.tabIndex < 0 ||
								element.closest('[hidden], [inert]') ||
								('disabled' in element && Boolean(element.disabled))
							) {
								return false;
							}

							const style = window.getComputedStyle(element);
							const rect = element.getBoundingClientRect();
							const hasVisibleBox = rect.width > 0 && rect.height > 0;
							const isAriaHidden =
								element.getAttribute('aria-hidden') === 'true' ||
								Boolean(element.closest('[aria-hidden="true"]'));

							return (
								!hasVisibleBox ||
								isAriaHidden ||
								style.display === 'none' ||
								style.visibility === 'hidden' ||
								style.opacity === '0'
							);
						})
						.slice(0, 8)
						.map((element) => ({
							tag: element.tagName.toLowerCase(),
							label:
								element.getAttribute('aria-label') ??
								element.textContent?.trim().replace(/\s+/g, ' ').slice(0, 120) ??
								'',
						}));
					const images = Array.from(document.images);
					const missingImages = images
						.filter((image) => image.complete && image.naturalWidth === 0)
						.map((image) => ({
							src: image.currentSrc || image.src,
							alt: image.alt,
						}));
					const blankImages = images
						.filter((image) => {
							const rect = image.getBoundingClientRect();

							return image.complete && image.naturalWidth > 0 && (rect.width < 1 || rect.height < 1);
						})
						.map((image) => {
							const rect = image.getBoundingClientRect();

							return {
								src: image.currentSrc || image.src,
								alt: image.alt,
								width: Math.round(rect.width),
								height: Math.round(rect.height),
							};
						});

					return {
						horizontalOverflow,
						textOverflow,
						sequentialFocusRisks,
						missingImages,
						blankImages,
					};
				});

				await mkdir(screenshotDirectory, { recursive: true });
				await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
				results.push({
					url: route,
					viewport: `${viewport.name} (${viewport.width}x${viewport.height})`,
					theme,
					screenshot: relativeScreenshotPath,
				});

				if (pageErrors.length > 0) {
					addFinding({
						severity: 'High',
						type: 'Page error',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: pageErrors.join('; '),
						suggestedFix: 'Inspect the thrown client-side error and fix the failing script path.',
					});
				}

				if (consoleErrors.length > 0) {
					addFinding({
						severity: 'Medium',
						type: 'Console error',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: consoleErrors.join('; '),
						suggestedFix: 'Resolve the console error or intentionally suppress noisy non-actionable logging.',
					});
				}

				if (failedRequests.length > 0) {
					addFinding({
						severity: 'High',
						type: 'Failed request',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: failedRequests.join('; '),
						suggestedFix: 'Correct the asset or route URL, or remove the request if it is no longer used.',
					});
				}

				if (diagnostics.horizontalOverflow.scrollWidth > diagnostics.horizontalOverflow.clientWidth + 1) {
					addFinding({
						severity: 'Medium',
						type: 'Horizontal overflow',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: `Document width is ${diagnostics.horizontalOverflow.scrollWidth}px but viewport content width is ${diagnostics.horizontalOverflow.clientWidth}px.`,
						suggestedFix:
							'Find the widest child at this breakpoint and constrain its width, wrapping, or transform bounds.',
					});
				}

				if (diagnostics.textOverflow.length > 0) {
					addFinding({
						severity: 'Medium',
						type: 'Text overflow',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: diagnostics.textOverflow
							.map((item) => `${item.tag} "${item.text}" (${item.scrollWidth}px > ${item.clientWidth}px)`)
							.join('; '),
						suggestedFix:
							'Adjust responsive font sizing, wrapping, or container constraints for the listed text.',
					});
				}

				if (diagnostics.sequentialFocusRisks.length > 0) {
					addFinding({
						severity: 'High',
						type: 'Sequential keyboard focus risk',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: diagnostics.sequentialFocusRisks
							.map((item) => `${item.tag} "${item.label}"`)
							.join('; '),
						suggestedFix:
							'Remove hidden controls from sequential keyboard focus or make their visible/focus state clear.',
					});
				}

				if (diagnostics.missingImages.length > 0) {
					addFinding({
						severity: 'High',
						type: 'Missing image',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: diagnostics.missingImages
							.map((image) => `${image.src} alt="${image.alt}"`)
							.join('; '),
						suggestedFix:
							'Fix the image path, ensure the asset exists under public assets, or remove the broken reference.',
					});
				}

				if (diagnostics.blankImages.length > 0) {
					addFinding({
						severity: 'Low',
						type: 'Zero-size rendered image',
						url: route,
						viewport: viewport.name,
						theme,
						screenshot: relativeScreenshotPath,
						description: diagnostics.blankImages
							.map((image) => `${image.src} alt="${image.alt}" rendered ${image.width}x${image.height}`)
							.join('; '),
						suggestedFix: 'Confirm the image is intentionally hidden or give it stable rendered dimensions.',
					});
				}

				await page.close();
			}

			await context.close();
		}
	}
});
