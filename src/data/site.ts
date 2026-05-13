import type { FallingLeavesEffect } from './types';

export const name = 'Luke Lachlan Day';

export const location = 'Adelaide, Australia';

export const mediaOwnershipNotice = 'Project visuals and brand assets remain property of their respective owners.';

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
