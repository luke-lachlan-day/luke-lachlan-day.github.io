import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	use: {
		baseURL: 'http://127.0.0.1:4321',
		trace: 'on-first-retry',
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
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
