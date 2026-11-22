import { emailAddress } from './contact';
import { name, websitePrivacySection } from './site';
import type { PrivacyPolicy } from './types';

export const eleventhBellPrivacy = {
	title: 'The Eleventh Bell Privacy Policy',
	description: 'How The Eleventh Bell handles game saves, platform achievements and support inquiries.',
	updatedDate: '2026-11-22',
	updatedLabel: '22 November 2026',
	introduction: `The Eleventh Bell is developed by ${name}. This policy covers the game and this website.`,
	sections: [
		{
			heading: 'Data on your device',
			content: [
				'The game stores your settings, saves, run history, unlocks and gameplay statistics on your device so you can resume play and keep your progress. You can play without creating a developer account. The game runs without ads or developer-operated player analytics.',
			],
		},
		{
			heading: 'Platform achievements',
			content: [
				'Full-game builds with platform achievements enabled can submit completed achievements to Steam, Google Play Games or Apple Game Center when you are signed in. The game keeps your platform player ID with the local profile so achievements sync to the correct account. Each platform handles sign-in and synced achievements under its own privacy policy.',
			],
		},
		{
			heading: 'Platform privacy policies',
			content: [
				'Google Play Games Services also collects analytics and diagnostics for its software. For details about the services, see the ',
				{ label: 'Steam Privacy Policy', href: 'https://store.steampowered.com/privacy_agreement/' },
				', ',
				{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
				', ',
				{
					label: 'Play Games Services data disclosure',
					href: 'https://developer.android.com/games/pgs/data-collection',
				},
				' and ',
				{
					label: 'Game Center & Privacy',
					href: 'https://www.apple.com/legal/privacy/data/en/game-center/',
				},
				'.',
			],
		},
		{
			heading: 'Keeping and deleting data',
			content: [
				'Local game data stays on your device until you remove it. You can delete the game’s local files or clear the app’s data where your device provides that option. For data held by a platform, use its privacy settings or contact its support team.',
			],
		},
		{
			heading: 'Contact',
			content: [
				'For privacy questions or requests about information you have shared with me, email ',
				{ label: emailAddress, href: `mailto:${emailAddress}` },
				'. I use your address and message to respond and keep correspondence as needed to handle your inquiry or meet legal obligations.',
			],
		},
		websitePrivacySection,
		{
			heading: 'Updates',
			content: ['This page will be updated if the game’s privacy practices change.'],
		},
	],
} satisfies PrivacyPolicy;
