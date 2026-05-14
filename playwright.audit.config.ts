import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './audit',
	timeout: 900_000,
	expect: {
		timeout: 10_000,
	},
	use: {
		baseURL: 'http://127.0.0.1:4321',
		trace: 'on-first-retry',
		...devices['Desktop Chrome'],
	},
	webServer: {
		command: 'npm run dev -- --host 127.0.0.1 --port 4321',
		url: 'http://127.0.0.1:4321',
		reuseExistingServer: true,
		stdout: 'pipe',
		stderr: 'pipe',
	},
	projects: [
		{
			name: 'site-audit',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
