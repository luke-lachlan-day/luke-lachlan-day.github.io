export type Link = {
	label: string;
	href: string;
	display: string;
	icon: string;
	contactIcon?: string;
	description?: string;
};

export type ExperienceItem = {
	id: string;
	role: string;
	company: string;
	companyId?: Company['id'];
	dateLabel: string;
	sortDate: string;
	context: string;
	summary: string;
	highlights: string[];
	tools: string[];
};

export type ExperienceCredential = {
	label: string;
	value: string;
};

export type HeroContent = {
	title: string;
	lead?: string;
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
			title: 'Projects',
		},
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
		description: 'Work history and selected experience for Luke Lachlan Day.',
		hero: {
			title: 'Experience',
		} satisfies HeroContent,
		history: {
			eyebrow: 'Experience',
			title: 'Work history',
		},
		items: [
			{
				id: 'daytime-devs',
				role: 'Co-Founder / Programmer',
				company: 'Daytime Devs Pty Ltd',
				companyId: 'daytime-devs',
				dateLabel: 'Mar 2022 - Present',
				sortDate: '2026-05-01',
				context: 'Independent studio',
				summary:
					'Co-founded an independent game studio and led programming and design work on Super BAWK BAWK Chicken across PC and mobile releases.',
				highlights: [
					'Released Super BAWK BAWK Chicken on Steam, then brought it to Android and iOS.',
					'Helped grow the title to 25,500+ Google Play downloads and delivered 15+ post-launch updates.',
					'Built gameplay features, internal tools, reusable C# libraries, shaders, release pipelines, store builds, and demo materials.',
					'Worked across design, art feedback, QA, conventions, and interviews with a player-first production mindset.',
				],
				tools: ['Unity', 'C#', 'Steam', 'Google Play', 'App Store', 'Shaders', 'Tooling'],
			},
			{
				id: 'catalyst-games',
				role: 'Programmer / Technical Director',
				company: 'Catalyst Games',
				companyId: 'catalyst-games',
				dateLabel: 'Jan 2025 - Mar 2026',
				sortDate: '2026-03-01',
				context: 'Client and studio projects',
				summary:
					'Built production systems, mobile app features, and VR training experiences while helping scope, quote, and guide projects from concept to release.',
				highlights: [
					'Built a vertical slice within the first month while quickly understanding and extending existing project systems.',
					'Introduced scene management, asynchronous loading, Addressables, a UI framework, and a decoration system.',
					'Delivered a Firebase-authenticated mobile app and multiple VR training experiences for clients.',
					'Promoted to Technical Director, supporting delivery planning, opportunity pitching, project scoping, and quoting.',
				],
				tools: ['Unity', 'C#', 'Addressables', 'Firebase', 'VR', 'UI Frameworks', 'Async Loading'],
			},
			{
				id: 'coastal-derrieres',
				role: 'Unity Developer',
				company: 'Coastal Derrieres Pty Ltd / Self-Employed',
				dateLabel: 'Jun 2024 - Oct 2024',
				sortDate: '2024-10-01',
				context: 'Contract vertical slice',
				summary:
					'Translated a design document into a playable Beach Bums vertical slice and helped shape a practical production approach for funding opportunities.',
				highlights: [
					'Built a playable vertical slice from design documentation and production constraints.',
					'Integrated FMOD and collaborated with an artist to prepare assets for game use.',
					'Created a robust level editor to support the design workflow.',
					'Helped a small multidisciplinary team prioritise practical tasks and maintain momentum.',
				],
				tools: ['Unity', 'C#', 'FMOD', 'Level Editor', 'Vertical Slice', 'Production Planning'],
			},
			{
				id: 'earlier-technical',
				role: 'Earlier Technical Experience',
				company: 'Power-Net IT Solutions / Australian Army',
				dateLabel: 'Jul 2016 - Mar 2022',
				sortDate: '2022-03-01',
				context: 'IT support and systems technician roles',
				summary:
					'Developed troubleshooting, customer support, communication, and technical discipline through IT service and Information Systems Technician roles.',
				highlights: [
					'Built confidence supporting users, managing technical systems, and communicating clearly with different audiences.',
					'Worked under pressure in operational technical environments.',
					'Developed practical troubleshooting habits that carry into software development work.',
					'Strengthened the communication and delivery discipline needed for collaborative technical teams.',
				],
				tools: ['Troubleshooting', 'IT Support', 'Technical Systems', 'Communication', 'User Support'],
			},
		] satisfies ExperienceItem[],
		credentials: [
			{
				label: 'Selected Achievement',
				value: 'South Australian Screen Awards 2024 - Best Game for Super BAWK BAWK Chicken.',
			},
			{
				label: 'Shipped Platforms',
				value: 'Steam for Windows and Mac, Google Play, and the Apple App Store.',
			},
			{
				label: 'Education',
				value: 'Bachelor of Science, University of Adelaide - Genetics, Microbiology and Immunology.',
			},
			{
				label: 'Team Fit',
				value: 'Comfortable with programmers, artists, designers, clients, demos, teaching, and stakeholder communication.',
			},
		] satisfies ExperienceCredential[],
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
