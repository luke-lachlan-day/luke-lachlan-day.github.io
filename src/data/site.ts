import type { FallingLeavesEffect } from './types';

export const name = 'Luke Lachlan Day';

export const location = 'Adelaide, Australia';

export const effects = {
	fallingLeaves: {
		enabled: true,
		goalAmount: 28,
	} satisfies FallingLeavesEffect,
};

export const footer = {
	message: 'Thanks for stopping by!',
	linkLabels: ['Email', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram', 'Discord'],
};
