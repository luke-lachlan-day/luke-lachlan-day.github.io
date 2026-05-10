import type { ContactHeroContent, Link, ThemeImageAssets } from './types';

export const contact = {
	title: 'Luke Lachlan Day | Contact',
	description: 'Contact links for Luke Lachlan Day.',
	hero: {
		title: 'Get in Touch',
		subtitle: 'Simple ways to reach me',
		summary: [
			"I'm always happy to connect, collaborate,",
			'or chat about interesting ideas.',
			'Choose your preferred way to get in touch!',
		],
	} satisfies ContactHeroContent,
	heroImages: {
		light: {
			src: '/assets/images/contact-mailbox-light.webp',
			alt: 'Pixel art traveler reading a letter beside a mailbox under a leafy tree.',
		},
		dark: {
			src: '/assets/images/contact-mailbox-dark.webp',
			alt: 'Pixel art traveler reading a letter by lantern light beside a mailbox under a leafy tree.',
		},
	} satisfies ThemeImageAssets,
	links: [
		{
			label: 'Email',
			href: 'mailto:luke@lukelachlanday.dev',
			display: 'Email me',
			icon: '/assets/icons/email.svg',
			contactIcon: '/assets/icons/contact-email.webp',
			description: 'The best way to reach me for projects or freelance inquiries.',
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/luke-day-b400771b5/',
			display: 'View profile',
			icon: '/assets/icons/linkedin.svg',
			contactIcon: '/assets/icons/contact-linkedin.webp',
			description: "Let's connect professionally and share ideas or opportunities.",
		},
		{
			label: 'GitHub',
			href: 'https://github.com/luke-lachlan-day',
			display: 'View GitHub',
			icon: '/assets/icons/github.svg',
			contactIcon: '/assets/icons/contact-github.webp',
			description: 'Check out my code, projects, and open-source contributions.',
		},
		{
			label: 'YouTube',
			href: '#',
			display: 'Visit channel',
			icon: '/assets/icons/youtube.svg',
			contactIcon: '/assets/icons/contact-youtube.webp',
			description: 'Watch devlogs, tutorials, and behind-the-scenes videos.',
		},
		{
			label: 'Instagram',
			href: '#',
			display: 'View profile',
			icon: '/assets/icons/instagram.svg',
			contactIcon: '/assets/icons/contact-instagram.webp',
			description: 'Behind the scenes, updates, and creative snapshots.',
		},
		{
			label: 'Discord',
			href: 'https://discord.com/invite/R79ShQzvBX',
			display: 'Join Discord',
			icon: '/assets/icons/discord.svg',
			contactIcon: '/assets/icons/contact-discord.webp',
			description: 'Great for quick chats, community, or gaming convos.',
		},
	] satisfies Link[],
} as const;
