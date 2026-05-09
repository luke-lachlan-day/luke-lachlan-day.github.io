export type Link = {
	label: string;
	href: string;
	display: string;
	icon: string;
	contactIcon?: string;
	description?: string;
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

export type ProjectReleaseStage = 'released' | 'early-access' | 'beta' | 'alpha';

export type ProjectAward = {
	name: string;
	awardedFrom: string;
	emblem: ImageAsset;
};

export type Project = {
	id: string;
	companyId: Company['id'];
	product: string;
	pictures: ImageAsset[];
	description: string;
	tools: string[];
	sortDate: string;
	dateLabel: string;
	releaseStage: ProjectReleaseStage;
	inDevelopment: boolean;
	awards: ProjectAward[];
	projectUrl?: string;
	sourceUrl?: string;
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
		copy: 'A rotating collection of games, tools, and experiments, with featured and newest work brought forward.',
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
				sortDate: '2026-04-01',
				dateLabel: 'Apr 2026',
				releaseStage: 'alpha',
				inDevelopment: true,
				awards: [
					{
						name: 'Best Cozy Prototype',
						awardedFrom: 'Mock Indie Showcase',
						emblem: {
							src: '/assets/icons/sun.svg',
							alt: 'Sun emblem.',
						},
					},
				],
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
				sortDate: '2026-03-01',
				dateLabel: 'Mar 2026',
				releaseStage: 'beta',
				inDevelopment: true,
				awards: [
					{
						name: 'Best Multiplayer Feel',
						awardedFrom: 'Mock Game Jam Awards',
						emblem: {
							src: '/assets/icons/gamepad.svg',
							alt: 'Gamepad emblem.',
						},
					},
				],
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
				sortDate: '2025-11-01',
				dateLabel: 'Nov 2025',
				releaseStage: 'released',
				inDevelopment: true,
				awards: [
					{
						name: 'Strategy Tool Pick',
						awardedFrom: 'Mock Tactics Lab',
						emblem: {
							src: '/assets/icons/leaf.svg',
							alt: 'Leaf emblem.',
						},
					},
				],
			},
			{
				id: 'skybound-isles',
				companyId: 'solo',
				product: 'Skybound Isles',
				pictures: [
					{
						src: '/assets/images/project-climbing.webp',
						alt: 'Pixel art floating islands and cliffs used as mock project art.',
					},
				],
				description:
					'A mock exploration game about charting floating islands, repairing gliders, and finding wind routes.',
				tools: ['Adventure', 'Exploration', 'Mock'],
				sortDate: '2026-02-01',
				dateLabel: 'Feb 2026',
				releaseStage: 'early-access',
				inDevelopment: true,
				awards: [
					{
						name: 'Audience Favorite',
						awardedFrom: 'Mock Sky Fair',
						emblem: {
							src: '/assets/icons/sun.svg',
							alt: 'Sun emblem.',
						},
					},
				],
			},
			{
				id: 'rogue-camp',
				companyId: 'solo',
				product: 'Rogue Camp',
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: 'Pixel art forest building scene used as mock camp project art.',
					},
				],
				description:
					'A mock roguelite camp manager where each run expands the base, unlocks supplies, and changes the forest.',
				tools: ['Roguelite', 'Systems', 'Mock'],
				sortDate: '2026-01-01',
				dateLabel: 'Jan 2026',
				releaseStage: 'alpha',
				inDevelopment: true,
				awards: [],
			},
			{
				id: 'indie-toolkit',
				companyId: 'daytime-devs',
				product: 'Indie Toolkit',
				pictures: [
					{
						src: '/assets/images/project-awbw.webp',
						alt: 'Pixel art strategy grid used as mock toolkit project art.',
					},
				],
				description:
					'A mock dashboard of reusable production helpers for task tracking, build notes, and release checklists.',
				tools: ['Tool', 'Productivity', 'Mock'],
				sortDate: '2025-09-01',
				dateLabel: 'Sep 2025',
				releaseStage: 'beta',
				inDevelopment: true,
				awards: [
					{
						name: 'Developer Utility Mention',
						awardedFrom: 'Mock Tools Expo',
						emblem: {
							src: '/assets/icons/github.svg',
							alt: 'Code hosting emblem.',
						},
					},
				],
			},
			{
				id: 'garden-quest',
				companyId: 'catalyst-games',
				product: 'Garden Quest',
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: 'Pixel art garden shop scene used as mock garden project art.',
					},
				],
				description:
					'A mock puzzle adventure about restoring gardens, trading seeds, and learning local folklore.',
				tools: ['Puzzle', 'Narrative', 'Mock'],
				sortDate: '2025-07-01',
				dateLabel: 'Jul 2025',
				releaseStage: 'released',
				inDevelopment: false,
				awards: [
					{
						name: 'Wholesome Design Award',
						awardedFrom: 'Mock Garden Jam',
						emblem: {
							src: '/assets/icons/leaf.svg',
							alt: 'Leaf emblem.',
						},
					},
				],
			},
			{
				id: 'stellar-shepherds',
				companyId: 'solo',
				product: 'Stellar Shepherds',
				pictures: [
					{
						src: '/assets/images/project-climbing.webp',
						alt: 'Pixel art mountain sky scene used as mock space project art.',
					},
				],
				description:
					'A mock tactics prototype about guiding small fleets through storms, hazards, and strange constellations.',
				tools: ['Tactics', 'Space', 'Mock'],
				sortDate: '2025-05-01',
				dateLabel: 'May 2025',
				releaseStage: 'beta',
				inDevelopment: false,
				awards: [],
			},
			{
				id: 'dungeon-desk',
				companyId: 'daytime-devs',
				product: 'Dungeon Desk',
				pictures: [
					{
						src: '/assets/images/project-awbw.webp',
						alt: 'Pixel art grid scene used as mock dungeon desk project art.',
					},
				],
				description:
					'A mock encounter builder that turns small design notes into printable rooms, tables, and balance sheets.',
				tools: ['Editor', 'Design', 'Mock'],
				sortDate: '2025-03-01',
				dateLabel: 'Mar 2025',
				releaseStage: 'released',
				inDevelopment: true,
				awards: [
					{
						name: 'Best Tabletop Helper',
						awardedFrom: 'Mock Creator Con',
						emblem: {
							src: '/assets/icons/gamepad.svg',
							alt: 'Gamepad emblem.',
						},
					},
				],
			},
			{
				id: 'atlas-of-autumn',
				companyId: 'solo',
				product: 'Atlas of Autumn',
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: 'Pixel art woodland scene used as mock autumn atlas project art.',
					},
				],
				description:
					'A mock map-making toy for building tiny seasonal worlds with paths, landmarks, and hidden notes.',
				tools: ['Toy', 'Creative', 'Mock'],
				sortDate: '2024-11-01',
				dateLabel: 'Nov 2024',
				releaseStage: 'alpha',
				inDevelopment: false,
				awards: [],
			},
			{
				id: 'melody-forge',
				companyId: 'catalyst-games',
				product: 'Melody Forge',
				pictures: [
					{
						src: '/assets/images/project-climbing.webp',
						alt: 'Pixel art cliff scene used as mock music project art.',
					},
				],
				description:
					'A mock music toy where players assemble short loops, moods, and reactive sound cues for prototypes.',
				tools: ['Audio', 'Tool', 'Mock'],
				sortDate: '2024-09-01',
				dateLabel: 'Sep 2024',
				releaseStage: 'early-access',
				inDevelopment: false,
				awards: [
					{
						name: 'Creative Tech Pick',
						awardedFrom: 'Mock Audio Arcade',
						emblem: {
							src: '/assets/icons/sun.svg',
							alt: 'Sun emblem.',
						},
					},
				],
			},
			{
				id: 'tiny-trains',
				companyId: 'solo',
				product: 'Tiny Trains',
				pictures: [
					{
						src: '/assets/images/project-awbw.webp',
						alt: 'Pixel art grid scene used as mock tiny trains project art.',
					},
				],
				description:
					'A mock logistics puzzle about drawing compact rail lines, moving parcels, and keeping stations happy.',
				tools: ['Puzzle', 'Logistics', 'Mock'],
				sortDate: '2024-06-01',
				dateLabel: 'Jun 2024',
				releaseStage: 'released',
				inDevelopment: false,
				awards: [
					{
						name: 'Best Short Puzzle',
						awardedFrom: 'Mock Micro Jam',
						emblem: {
							src: '/assets/icons/leaf.svg',
							alt: 'Leaf emblem.',
						},
					},
				],
			},
			{
				id: 'sprite-smith',
				companyId: 'daytime-devs',
				product: 'Sprite Smith',
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: 'Pixel art shop scene used as mock sprite editor project art.',
					},
				],
				description:
					'A mock pixel-art helper for creating tiny characters, exporting sheets, and testing animation loops.',
				tools: ['Pixel Art', 'Editor', 'Mock'],
				sortDate: '2024-03-01',
				dateLabel: 'Mar 2024',
				releaseStage: 'beta',
				inDevelopment: false,
				awards: [],
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
	},
	footer: {
		message: 'Thanks for stopping by!',
		linkLabels: ['Email', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram', 'Discord'],
	},
} as const;
