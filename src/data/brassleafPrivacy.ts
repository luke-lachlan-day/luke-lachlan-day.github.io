import { emailAddress } from './contact';
import { websitePrivacySection } from './site';
import type { PrivacyPolicy } from './types';

export const brassleafPrivacy = {
	title: 'Brassleaf Tactics Privacy Policy',
	description: 'Privacy information for the current development version of Brassleaf Tactics.',
	updatedDate: '2026-10-04',
	updatedLabel: '4 October 2026',
	introduction:
		'Brassleaf Tactics is developed by Luke Lachlan Day. This policy describes the current development version of the game.',
	sections: [
		{
			heading: 'Game data',
			content: [
				'Brassleaf Tactics does not currently collect or transmit personal information to the developer through gameplay. The game does not currently use player analytics or advertising tracking.',
			],
		},
		{
			heading: 'Steam and other services',
			content: [
				'If you access the game through Steam, Valve handles information associated with its platform under the ',
				{ label: 'Steam Privacy Policy', href: 'https://store.steampowered.com/privacy_agreement/' },
				'.',
			],
		},
		{
			heading: 'Contact',
			content: [
				'If you email ',
				{ label: emailAddress, href: `mailto:${emailAddress}` },
				', your email address and the information you provide are used to respond to your inquiry.',
			],
		},
		websitePrivacySection,
		{
			heading: 'Updates',
			content: ['This policy will be updated if the game’s privacy practices change.'],
		},
	],
} satisfies PrivacyPolicy;
