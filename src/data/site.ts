import type { FallingLeavesEffect, PrivacyPolicy } from './types';

export const name = 'Luke Lachlan Day';

export const location = 'Adelaide, Australia';

export const mediaOwnershipNotice =
	'Project visuals and brand assets remain property of their respective owners.';

export const websitePrivacySection = {
	heading: 'This website',
	content: [
		'This website stores your theme and animation preferences in your browser. ',
		{
			label: 'GitHub Pages',
			href: 'https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages',
		},
		', which hosts this page, logs visitors’ IP addresses for security purposes.',
	],
} satisfies PrivacyPolicy['sections'][number];

export const effects = {
	fallingLeaves: {
		enabled: true,
		goalAmount: 28,
	} satisfies FallingLeavesEffect,
};

export const footer = {
	message: 'Thanks for stopping by!',
	mediaDisclaimer:
		'Project names, company names, logos, screenshots, videos, artwork, and other media may be trademarks or copyrighted material of their respective owners. They are shown here only to describe my professional experience and project contributions.',
	linkLabels: ['Email', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram', 'Discord'],
};
