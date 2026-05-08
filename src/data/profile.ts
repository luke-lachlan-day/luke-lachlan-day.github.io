export type Link = {
	label: string;
	href: string;
	display: string;
	icon: string;
};

export type ExperienceItem = {
	date: string;
	title: string;
	copy: string;
};

export type HeroContent = {
	title: string;
	lead: string;
};

export type ContactHeroContent = {
	title: string;
	subtitle: string;
	summary: string[];
};

export type ImageAsset = {
	src: string;
	alt: string;
};

export type ThemeImageAssets = {
	light: ImageAsset;
	dark: ImageAsset;
};

export type CompanyId = 'daytime-devs' | 'catalyst-games' | 'solo';

export type Company = {
	id: CompanyId;
	name: string;
	icon: ImageAsset;
};

export type Project = {
	id: string;
	companyId: Company['id'];
	product: string;
	pictures: ImageAsset[];
	description: string;
	tools: string[];
};

export type FallingLeavesEffect = {
	enabled: boolean;
	goalAmount: number;
};

export const profile = {
	name: 'Luke Lachlan Day',
	location: 'Adelaide, Australia',
	effects: {
		fallingLeaves: {
			enabled: true,
			goalAmount: 28,
		} satisfies FallingLeavesEffect,
	},
	home: {
		title: 'Luke Lachlan Day | Home',
		description: 'Portfolio home page for Luke Lachlan Day, indie developer and programmer.',
		role: 'Indie Developer / Programmer',
		summary: [
			"I'm an indie developer who loves science, technology, learning, teaching, and creative problem-solving.",
			'I build playful games, creative tools, and interactive experiences that help people explore, learn, and grow.',
		],
		heroImages: {
			light: {
				src: '/assets/images/hero-light.webp',
				alt: 'Pixel art traveler looking across a bright mountain valley from a grassy cliff.',
			},
			dark: {
				src: '/assets/images/hero-dark.webp',
				alt: 'Pixel art traveler looking across a moonlit mountain valley from a grassy cliff.',
			},
		},
		actions: [
			{ label: 'View Projects', href: '/projects/', icon: '/assets/icons/gamepad.svg' },
			{ label: 'Get In Touch', href: '/contact/', icon: '/assets/icons/email.svg' },
		],
		featuredProjectIds: ['petes-place', 'coop-climbing', 'awbw-opening-analyzer'],
	},
	companies: [
		{
			id: 'daytime-devs',
			name: 'Daytime Devs',
			icon: {
				src: '/assets/images/company-daytime-devs.webp',
				alt: 'Pixel art sun and code mark for Daytime Devs.',
			},
		},
		{
			id: 'catalyst-games',
			name: 'Catalyst Games',
			icon: {
				src: '/assets/images/company-catalyst-games.webp',
				alt: 'Pixel art purple spark and game controller mark for Catalyst Games.',
			},
		},
		{
			id: 'solo',
			name: 'Solo',
			icon: {
				src: '/assets/images/company-solo-back.webp',
				alt: 'Pixel art solo developer avatar icon.',
			},
		},
	] satisfies Company[],
	projects: {
		title: 'Projects | Luke Lachlan Day',
		description: 'Featured projects, prototypes, games, and tools by Luke Lachlan Day.',
		hero: {
			title: 'Projects and prototypes',
			lead: 'A data-backed collection of games, tools, and experiments.',
		} satisfies HeroContent,
		eyebrow: 'Featured Projects',
		listTitle: 'Featured work',
		copy: 'A data-backed collection of games, tools, and experiments. Add or edit entries here and the cards update across the site.',
		href: '/projects/',
		items: [
			{
				id: 'petes-place',
				companyId: 'solo',
				product: "Pete's Place",
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: "Pixel art cozy forest shop scene for Pete's Place.",
					},
				],
				description:
					'A cozy life sim about running a little shop, making friends, and helping a town full of quirky characters.',
				tools: ['Life Sim', 'Cozy', 'Management'],
			},
			{
				id: 'coop-climbing',
				companyId: 'catalyst-games',
				product: 'Co-op Climbing Prototype',
				pictures: [
					{
						src: '/assets/images/project-climbing.webp',
						alt: 'Pixel art co-op climbers roped together on a sunny cliff face.',
					},
				],
				description:
					'A co-op climbing game built around communication, trust, and smart movement.',
				tools: ['Prototype', 'Co-op', 'Physics'],
			},
			{
				id: 'awbw-opening-analyzer',
				companyId: 'daytime-devs',
				product: 'AWBW Opening Analyzer',
				pictures: [
					{
						src: '/assets/images/project-awbw.webp',
						alt: 'Pixel art turn-based strategy grid with blue and red units.',
					},
				],
				description:
					'Analyze Advance Wars By Web openings with win rates, data views, and strategy insights.',
				tools: ['Tool', 'Data', 'Strategy'],
			},
		] satisfies Project[],
	},
	experience: {
		title: 'Experience | Luke Lachlan Day',
		description: 'Work history, places worked, project milestones, and selected life events for Luke Lachlan Day.',
		hero: {
			title: 'Places, work, and life notes.',
			lead: 'A lightweight chronology for places I have worked, projects that shaped me, and selected life events.',
		} satisfies HeroContent,
		history: {
			eyebrow: 'Experience',
			title: 'Work, places, and milestones',
		},
		items: [
			{
				date: 'Now',
				title: 'Pixel portfolio refresh',
				copy: 'Turning the site into a themed portfolio with data-backed projects, companies, and visual assets.',
			},
			{
				date: 'Recent',
				title: 'Prototype and systems work',
				copy: 'Gameplay prototypes, technical experiments, and tooling improvements across Unity and web projects.',
			},
			{
				date: 'Past',
				title: 'Learning and shipped pieces',
				copy: 'Previous projects, collaboration, production milestones, and practical development notes.',
			},
			{
				date: 'Archive',
				title: 'Early experiments',
				copy: 'A future home for smaller builds, notes, and experiments worth keeping visible.',
			},
		] satisfies ExperienceItem[],
	},
	feed: {
		title: 'Feed | Luke Lachlan Day',
		description: 'Latest updates and activity feed for Luke Lachlan Day.',
	},
	contact: {
		title: 'Contact | Luke Lachlan Day',
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
				display: 'luke@lukelachlanday.dev',
				icon: '/assets/icons/email.svg',
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/luke-day-b400771b5/',
				display: 'https://www.linkedin.com/in/luke-day-b400771b5/',
				icon: '/assets/icons/linkedin.svg',
			},
			{
				label: 'GitHub',
				href: 'https://github.com/luke-lachlan-day',
				display: 'https://github.com/luke-lachlan-day',
				icon: '/assets/icons/github.svg',
			},
			{
				label: 'YouTube',
				href: '#',
				display: '#',
				icon: '/assets/icons/youtube.svg',
			},
			{
				label: 'Instagram',
				href: '#',
				display: '#',
				icon: '/assets/icons/instagram.svg',
			},
			{
				label: 'Discord',
				href: 'https://discord.com/invite/R79ShQzvBX',
				display: 'https://discord.com/invite/R79ShQzvBX',
				icon: '/assets/icons/discord.svg',
			},
		] satisfies Link[],
	},
	footer: {
		message: 'Thanks for stopping by!',
		linkLabels: ['Email', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram', 'Discord'],
	},
} as const;
