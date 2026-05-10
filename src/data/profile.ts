export type Link = {
	label: string;
	href: string;
	display: string;
	icon: string;
	contactIcon?: string;
	description?: string;
};

export type ExperienceRecognition = {
	name: string;
	awardedFrom: string;
	detail?: string;
	year: string;
	emblem: ImageAsset;
};

export type ExperienceItem = {
	id: string;
	role: string;
	cardRole?: string;
	company: string;
	companyId?: Company['id'];
	picture?: ImageAsset;
	dateLabel: string;
	dateHeading?: string;
	sortDate: string;
	context: string;
	summary: string;
	recognition?: ExperienceRecognition[];
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

export type CompanyId =
	| 'daytime-devs'
	| 'catalyst-games'
	| 'coastal-derrieres'
	| 'sciworld'
	| 'solo'
	| 'australian-army'
	| 'power-net-it-solutions'
	| 'university-of-adelaide';

export type Company = {
	id: CompanyId;
	name: string;
	icon: ImageAsset;
};

export type ProjectReleaseStage = 'dev' | 'released' | 'shelved' | 'contributed';

export type ProjectAward = {
	name: string;
	awardedFrom: string;
	year: string;
	emblem: ImageAsset;
};

export type ProjectTags = {
	format: string[];
	platform: string[];
	specialty: string[];
	tech?: string[];
};

export type ProjectActionType =
	| 'website'
	| 'webApp'
	| 'browserExtension'
	| 'steam'
	| 'appStore'
	| 'playStore'
	| 'youtube'
	| 'source';

export type ProjectAction = {
	type: ProjectActionType;
	href: string;
	label?: string;
};

export type Project = {
	id: string;
	companyId: Company['id'];
	product: string;
	pictures: ImageAsset[];
	description: string;
	tools: string[];
	projectTags: ProjectTags;
	sortDate: string;
	dateLabel: string;
	yearLabel: string;
	releaseStage: ProjectReleaseStage;
	awards: ProjectAward[];
	actions?: ProjectAction[];
	projectUrl?: string;
	projectUrlLabel?: string;
	projectUrlIcon?: string;
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
			id: 'coastal-derrieres',
			name: 'Coastal Derrieres',
			icon: {
				src: '/assets/images/company-coastal-derrieres.webp',
				alt: 'Beach Bums app icon associated with Coastal Derrieres.',
			},
		},
		{
			id: 'sciworld',
			name: 'SciWorld',
			icon: {
				src: '/assets/images/company-sciworld.webp',
				alt: 'SciWorld logo.',
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
		{
			id: 'australian-army',
			name: 'Australian Army',
			icon: {
				src: '/assets/images/company-australian-army.webp',
				alt: 'Australian Army rising sun badge.',
			},
		},
		{
			id: 'power-net-it-solutions',
			name: 'Power-Net IT Solutions',
			icon: {
				src: '/assets/images/company-power-net-it-solutions.webp',
				alt: 'Power-Net IT Solutions circular logo.',
			},
		},
		{
			id: 'university-of-adelaide',
			name: 'University of Adelaide',
			icon: {
				src: '/assets/images/company-university-of-adelaide.webp',
				alt: 'University of Adelaide crest.',
			},
		},
	] satisfies Company[],
	projects: {
		title: 'Luke Lachlan Day | Projects',
		description: 'Featured projects, prototypes, games, and tools by Luke Lachlan Day.',
		hero: {
			title: 'Projects',
		},
		href: '/projects/',
		items: [
			{
				id: 'luke-lachlan-day-website',
				companyId: 'solo',
				product: 'Luke Lachlan Day Website',
				pictures: [
					{
						src: '/assets/images/project-luke-lachlan-day-website.webp',
						alt: 'Pixel art traveler overlooking a bright mountain valley for the Luke Lachlan Day website.',
					},
				],
				description:
					'A personal Astro portfolio site for sharing projects, experience, contact links, and playful pixel-art presentation.',
				tools: ['Astro', 'TypeScript', 'Portfolio'],
				projectTags: {
					format: ['Website'],
					platform: ['Web'],
					specialty: ['Portfolio'],
					tech: ['Astro', 'TypeScript'],
				},
				sortDate: '2026-05-09',
				dateLabel: 'May 2026',
				yearLabel: '2026',
				releaseStage: 'released',
				awards: [],
				actions: [
					{ type: 'website', href: 'https://luke-lachlan-day.github.io/' },
					{ type: 'source', href: 'https://github.com/luke-lachlan-day/luke-lachlan-day.github.io' },
				],
				projectUrl: 'https://luke-lachlan-day.github.io/',
				sourceUrl: 'https://github.com/luke-lachlan-day/luke-lachlan-day.github.io',
			},
			{
				id: 'three-hearted-octopus',
				companyId: 'solo',
				product: 'Three Hearted Octopus',
				pictures: [
					{
						src: '/assets/images/project-three-hearted-octopus.webp',
						alt: 'Pixel art octopus underwater with three floating hearts for Three Hearted Octopus.',
					},
					{
						src: '/assets/images/project-x-men.webp',
						alt: 'YouTube thumbnail artwork reused as a second gallery test image.',
					},
				],
				description:
					'An educational science video explaining why octopuses have three hearts and how their oxygen transport differs from humans.',
				tools: ['Educational Video', 'Science Communication', 'Biology'],
				projectTags: {
					format: ['Video'],
					platform: ['YouTube'],
					specialty: ['Educational', 'Science Communication', 'Biology'],
				},
				sortDate: '2026-05-09',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'float-goat',
				companyId: 'solo',
				product: 'Float Goat',
				pictures: [
					{
						src: '/assets/images/project-float-goat.webp',
						alt: 'Pixel art goat floating over water for Float Goat.',
					},
				],
				description:
					'A solo game prototype built around buoyant movement, light physics, and playful traversal challenges.',
				tools: ['Game Prototype', 'Physics', 'Solo'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Physics', 'Traversal'],
				},
				sortDate: '2026-05-06',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'ponder',
				companyId: 'solo',
				product: 'Ponder',
				pictures: [
					{
						src: '/assets/images/project-ponder.webp',
						alt: 'Pixel art thinking block with candlelight for Ponder.',
					},
				],
				description:
					'A solo prototype exploring quiet puzzle ideas, reflective pacing, and small moments of discovery.',
				tools: ['Puzzle', 'Prototype', 'Solo'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Puzzle', 'Reflective'],
				},
				sortDate: '2026-05-06',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'quizmas-quizes-and-games',
				companyId: 'solo',
				product: 'Quizmas Quizes & Games',
				pictures: [
					{
						src: '/assets/images/project-quizmas-quizes-and-games.webp',
						alt: 'Pixel art festive quiz board with wrapped gifts for Quizmas Quizes & Games.',
					},
				],
				description:
					'A festive quiz and games project for quick questions, party rounds, and light group play.',
				tools: ['Quiz', 'Party Game', 'Solo'],
				projectTags: {
					format: ['Quiz', 'Party Game'],
					platform: ['Web'],
					specialty: ['Group Play', 'Festive'],
				},
				sortDate: '2026-05-06',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'x-men-video',
				companyId: 'solo',
				product: 'X men',
				pictures: [
					{
						src: '/assets/images/project-x-men.webp',
						alt: 'YouTube thumbnail for the X men video.',
					},
				],
				description: "A video project in flash that I made in primary school and released on my brother's YouTube.",
				tools: ['Video', 'YouTube', 'Solo'],
				projectTags: {
					format: ['Video'],
					platform: ['YouTube'],
					specialty: ['Animation'],
					tech: ['Flash'],
				},
				sortDate: '2008-06-01',
				dateLabel: 'June 2008',
				yearLabel: '2008',
				releaseStage: 'released',
				awards: [],
				actions: [
					{ type: 'youtube', href: 'https://www.youtube.com/watch?v=C39TrymUclw' },
				],
				projectUrl: 'https://www.youtube.com/watch?v=C39TrymUclw',
				projectUrlLabel: 'Watch Video',
				projectUrlIcon: '/assets/icons/youtube.svg',
			},
			{
				id: 'trusty-battles',
				companyId: 'solo',
				product: 'Trusty Battles',
				pictures: [
					{
						src: '/assets/images/project-trusty-battles.webp',
						alt: 'Pixel art crossed weapons over a battle arena for Trusty Battles.',
					},
				],
				description:
					'A prototype focused on readable fights, quick decisions, and satisfying moment-to-moment combat.',
				tools: ['Action', 'Combat', 'Prototype'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Action', 'Combat'],
				},
				sortDate: '2026-05-08',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'shelved',
				awards: [],
			},
			{
				id: 'rogue-hands',
				companyId: 'solo',
				product: 'Rogue Hands',
				pictures: [
					{
						src: '/assets/images/project-rogue-hands.webp',
						alt: 'Pixel art rogue hands reaching toward a glowing gem for Rogue Hands.',
					},
				],
				description:
					'A prototype exploring roguelike combat ideas, short runs, and expressive player choices.',
				tools: ['Roguelike', 'Combat', 'Prototype'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Roguelike', 'Combat'],
				},
				sortDate: '2026-05-07',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'shelved',
				awards: [],
			},
			{
				id: 'pon',
				companyId: 'solo',
				product: 'Pon',
				pictures: [
					{
						src: '/assets/images/project-pon.webp',
						alt: 'Pixel art paddle-and-ball arcade scene for Pon.',
					},
				],
				description:
					'A solo arcade prototype inspired by paddle-and-ball play, clean controls, and fast scoring loops.',
				tools: ['Arcade', 'Prototype', 'Game Feel'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Arcade', 'Game Feel'],
				},
				sortDate: '2026-05-05',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'shelved',
				awards: [],
			},
			{
				id: 'creature-sim',
				companyId: 'solo',
				product: 'Creature Sim',
				pictures: [
					{
						src: '/assets/images/project-creature-sim.webp',
						alt: 'Pixel art creature in a small habitat for Creature Sim.',
					},
				],
				description:
					'A solo simulation prototype about observing creatures, tuning behaviours, and experimenting with systemic interactions.',
				tools: ['Simulation', 'Systems', 'Prototype'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Simulation', 'Systems'],
				},
				sortDate: '2026-05-04',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'shelved',
				awards: [],
			},
			{
				id: 'norse-quiz',
				companyId: 'solo',
				product: 'Norse Quiz',
				pictures: [
					{
						src: '/assets/images/project-norse-quiz.webp',
						alt: 'Pixel art rune stone and snowy mountains for Norse Quiz.',
					},
				],
				description:
					'A solo quiz project built around Norse mythology questions, learning, and fast answer feedback.',
				tools: ['Quiz', 'Education', 'Mythology'],
				projectTags: {
					format: ['Quiz'],
					platform: ['Web'],
					specialty: ['Educational', 'Mythology'],
				},
				sortDate: '2026-05-03',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'hot-potato',
				companyId: 'solo',
				product: 'Hot Potato',
				pictures: [
					{
						src: '/assets/images/project-quizmas-quizes-and-games.webp',
						alt: 'Pixel art festive quiz board reused for Hot Potato.',
					},
				],
				description:
					'A shelved solo party-game prototype built around quick reactions, passing pressure, and light group chaos.',
				tools: ['Party Game', 'Prototype', 'Solo'],
				projectTags: {
					format: ['Party Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Group Play', 'Quick Reactions'],
				},
				sortDate: '2026-05-02',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'shelved',
				awards: [],
			},
			{
				id: 'petes-place',
				companyId: 'solo',
				product: "Pete's Place",
				pictures: [
					{
						src: '/assets/images/project-petes-place.webp',
						alt: "Pixel art cozy forest shop scene for Pete's Place.",
					},
					{
						src: '/assets/images/project-dungeons-and-dining-tables.webp',
						alt: 'Steam header art reused as a second gallery test image.',
					},
					{
						src: '/assets/images/project-creature-sim.webp',
						alt: 'Pixel art creature habitat reused as a third gallery test image.',
					},
				],
				description:
					'A cozy life sim about running a little shop, making friends, and helping a town full of quirky characters.',
				tools: ['Life Sim', 'Cozy', 'Management'],
				projectTags: {
					format: ['Game'],
					platform: ['PC'],
					specialty: ['Life Sim', 'Cozy', 'Management'],
				},
				sortDate: '2026-04-01',
				dateLabel: 'Apr 2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'dungeons-and-dining-tables',
				companyId: 'catalyst-games',
				product: 'Dungeons and Dining Tables',
				pictures: [
					{
						src: '/assets/images/project-dungeons-and-dining-tables.webp',
						alt: 'Steam header art for Dungeons and Dining Tables.',
					},
				],
				description:
					'A cozy fantasy adventure about running a tavern, feeding heroes, and managing the chaos between dungeon runs.',
				tools: ['Adventure', 'Management', 'Cozy'],
				projectTags: {
					format: ['Game'],
					platform: ['PC', 'Steam'],
					specialty: ['Adventure', 'Management', 'Cozy'],
				},
				sortDate: '2025-01-01',
				dateLabel: '2025-2026',
				yearLabel: '2025-2026',
				releaseStage: 'contributed',
				awards: [],
				actions: [
					{ type: 'steam', href: 'https://store.steampowered.com/app/2941630/Dungeons_and_Dining_Tables/' },
				],
				projectUrl: 'https://store.steampowered.com/app/2941630/Dungeons_and_Dining_Tables/',
			},
			{
				id: 'beach-bums',
				companyId: 'coastal-derrieres',
				product: 'Beach Bums',
				pictures: [
					{
						src: '/assets/images/project-beach-bums.webp',
						alt: 'Steam header art for Beach Bums.',
					},
					{
						src: '/assets/images/project-beach-bums-capsule.webp',
						alt: 'Steam capsule art for Beach Bums.',
					},
				],
				description:
					'A 2D hidden object memory game about finding misplaced swimsuits and restoring order after a tidal wave disrupts a beach scene.',
				tools: ['Unity', 'C#', 'FMOD', 'Hidden Object', 'Level Editor'],
				projectTags: {
					format: ['Game', 'Client Work'],
					platform: ['PC', 'Steam'],
					specialty: ['Hidden Object', 'Memory Game'],
					tech: ['Unity', 'C#', 'FMOD'],
				},
				sortDate: '2024-10-01',
				dateLabel: 'Jun 2024 - Oct 2024',
				yearLabel: '2024',
				releaseStage: 'contributed',
				awards: [],
				actions: [
					{ type: 'website', href: 'https://www.coastalderrieres.com/' },
					{ type: 'steam', href: 'https://store.steampowered.com/app/2858760/Beach_Bums/' },
				],
				projectUrl: 'https://www.coastalderrieres.com/',
			},
			{
				id: 'think-digital-vr-work',
				companyId: 'catalyst-games',
				product: 'Think Digital VR Work',
				pictures: [
					{
						src: '/assets/images/project-dungeons-and-dining-tables.webp',
						alt: 'Steam header art reused for Think Digital VR Work.',
					},
				],
				description:
					'A Catalyst Games contribution to VR client work, supporting interactive training experiences and practical project delivery.',
				tools: ['VR', 'Client Work', 'Unity'],
				projectTags: {
					format: ['Client Work'],
					platform: ['VR'],
					specialty: ['Training', 'Interactive Experience'],
					tech: ['Unity'],
				},
				sortDate: '2026-02-01',
				dateLabel: '2025-2026',
				yearLabel: '2025-2026',
				releaseStage: 'contributed',
				awards: [],
			},
			{
				id: 'disney-game-night',
				companyId: 'catalyst-games',
				product: 'Disney Game Night',
				pictures: [
					{
						src: '/assets/images/project-quizmas-quizes-and-games.webp',
						alt: 'Pixel art festive quiz board reused for Disney Game Night.',
					},
				],
				description:
					'A Catalyst Games contribution to a themed game-night experience, supporting playful group activities and event-ready presentation.',
				tools: ['Event Game', 'Group Play', 'Unity'],
				projectTags: {
					format: ['Event Game', 'Client Work'],
					platform: ['PC'],
					specialty: ['Group Play', 'Presentation'],
					tech: ['Unity'],
				},
				sortDate: '2026-01-01',
				dateLabel: '2025-2026',
				yearLabel: '2025-2026',
				releaseStage: 'contributed',
				awards: [],
			},
			{
				id: 'coop-climbing',
				companyId: 'daytime-devs',
				product: 'Co-op Cat Temple Escape',
				pictures: [
					{
						src: '/assets/images/project-coop-cat-temple-escape.webp',
						alt: 'Pixel art cats fleeing a collapsing Egyptian temple corridor.',
					},
					{
						src: '/assets/images/project-climbing.webp',
						alt: 'Pixel art climbing scene reused as a second gallery test image.',
					},
					{
						src: '/assets/images/project-trusty-battles.webp',
						alt: 'Pixel art battle arena reused as a third gallery test image.',
					},
					{
						src: '/assets/images/project-rogue-hands.webp',
						alt: 'Pixel art hands reaching toward a glowing gem reused as a fourth gallery test image.',
					},
				],
				description:
					'A co-op climbing game built around communication, trust, and smart movement.',
				tools: ['Prototype', 'Co-op', 'Physics'],
				projectTags: {
					format: ['Game', 'Prototype'],
					platform: ['PC'],
					specialty: ['Co-op', 'Physics', 'Communication'],
				},
				sortDate: '2026-03-01',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'awbw-opening-analyzer',
				companyId: 'solo',
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
				projectTags: {
					format: ['Browser Extension'],
					platform: ['Web'],
					specialty: ['Strategy', 'Data Analysis'],
					tech: ['TypeScript'],
				},
				sortDate: '2026-04-01',
				dateLabel: '2026',
				yearLabel: '2026',
				releaseStage: 'dev',
				awards: [],
			},
			{
				id: 'super-bawk-bawk-chicken',
				companyId: 'daytime-devs',
				product: 'Super BAWK BAWK Chicken',
				pictures: [
					{
						src: '/assets/images/project-super-bawk-bawk-chicken.webp',
						alt: 'Steam header art for Super BAWK BAWK Chicken.',
					},
				],
				description:
					'A precision platformer about a chicken racing through dangerous levels, dodging traps, and chasing fast clears.',
				tools: ['Platformer', 'Unity', 'Steam'],
				projectTags: {
					format: ['Game'],
					platform: ['PC', 'Steam', 'Mobile'],
					specialty: ['Platformer', 'Precision'],
					tech: ['Unity', 'C#'],
				},
				sortDate: '2023-07-17',
				dateLabel: 'Jul 2023',
				yearLabel: '2023',
				releaseStage: 'released',
				awards: [
					{
						name: 'Best Game',
						awardedFrom: "The Mercury's South Australian Screen Awards",
						year: '2024',
						emblem: {
							src: '/assets/emblems/daytime-devs.webp',
							alt: 'Daytime Devs award emblem.',
						},
					},
				],
				actions: [
					{ type: 'website', href: 'https://superbawkbawkchicken.com/' },
					{ type: 'steam', href: 'https://store.steampowered.com/app/2054850/Super_BAWK_BAWK_Chicken/' },
					{ type: 'appStore', href: 'https://apps.apple.com/au/app/super-bawk-bawk-chicken/id6464066197' },
					{ type: 'playStore', href: 'https://play.google.com/store/apps/details?id=com.DaytimeDevs.BawkBawk' },
				],
				projectUrl: 'https://superbawkbawkchicken.com/',
			},
		] satisfies Project[],
	},
	experience: {
		title: 'Luke Lachlan Day | Experience',
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
				role: 'Co-Founder',
				company: 'Daytime Devs Pty Ltd',
				companyId: 'daytime-devs',
				dateLabel: 'Mar 2022 - Present',
				sortDate: '2026-05-01',
				context: 'Independent studio',
				summary:
					'Co-founded an independent game studio with my brothers and helped self-publish Super BAWK BAWK Chicken across PC and mobile platforms.',
				highlights: [
					'Self-published Super BAWK BAWK Chicken on Steam for Windows and Mac in 2023, followed by Google Play and App Store releases in 2024.',
					'Helped grow the title to 25,500+ Google Play downloads and deliver 15 updates since the 2023 demo launch.',
					'Worked across design documentation, prototyping, C# tools and libraries, shaders, debugging, release management, and mobile porting.',
					'Supported store publishing, marketing, conventions, and interviews while representing the studio publicly.',
				],
				tools: ['Unity', 'C#', 'Steam', 'Google Play', 'App Store', 'Shaders', 'Tooling'],
			},
			{
				id: 'catalyst-games',
				role: 'Programmer & Technical Director',
				company: 'Catalyst Games',
				companyId: 'catalyst-games',
				dateLabel: 'Jan 2025 - Mar 2026',
				sortDate: '2026-03-01',
				context: 'Client and studio projects',
				summary:
					'Delivered production systems, client applications, and VR training experiences before moving into a Technical Director role supporting project delivery.',
				highlights: [
					'Developed a SAGE vertical slice within my first month as the studio transitioned to a new project.',
					'Introduced scene management, asynchronous loading, Addressables, a UI framework, and a decoration system.',
					'Delivered a Firebase-authenticated mobile app and multiple VR training experiences for clients.',
					'Quoted and oversaw client projects, pitched opportunities to publishers, taught game development in schools, and presented in weekly show-and-tell sessions.',
				],
				tools: ['Unity', 'C#', 'Addressables', 'Firebase', 'VR', 'Teaching', 'Technical Direction'],
			},
			{
				id: 'sciworld-presenter',
				role: 'Presenter',
				company: 'SciWorld',
				companyId: 'sciworld',
				dateLabel: '2026',
				sortDate: '2026-01-01',
				context: 'Science outreach and STEM education',
				summary:
					'Presented interactive science programs for SciWorld, supporting STEM outreach for schools, parties, and public events across South Australia.',
				highlights: [
					'Presented science demonstrations and interactive explanations for school, party, and public event audiences.',
					'Supported mobile outreach delivery through program setup, pack-down, and venue-ready preparation.',
					'Adapted audience-facing explanations to help science concepts feel clear, engaging, and hands-on.',
					'Followed safe presentation practices while supporting demonstrations, workshops, and science communication activities.',
				],
				tools: ['Science Communication', 'STEM Education', 'Presenting', 'Audience Engagement', 'Safety', 'Workshop Support'],
			},
			{
				id: 'self-employed-unity-developer',
				role: 'Unity Developer',
				company: 'Coastal Derrieres',
				companyId: 'coastal-derrieres',
				dateLabel: 'Jun 2024 - Oct 2024',
				sortDate: '2024-10-01',
				context: 'Contract vertical slice',
				summary:
					'Worked with Coastal Derrieres to turn the Beach Bums design document into a playable vertical slice for funding opportunities.',
				highlights: [
					'Provided senior Unity development support inside a small multidisciplinary team of four.',
					'Translated the design into a practical production plan and helped keep the scope achievable.',
					'Integrated FMOD into Unity to support the project audio requirements.',
					'Helped adapt art assets for game use and built an intuitive level editor for the design workflow.',
				],
				tools: ['Unity', 'C#', 'FMOD', 'Level Editor', 'Vertical Slice', 'Production Planning'],
			},
			{
				id: 'solo-dev',
				role: 'Solo Dev',
				company: 'Self Employed',
				companyId: 'solo',
				picture: {
					src: '/assets/images/experience-solo-dev.webp',
					alt: 'Pixel art solo developer overlooking a bright mountain valley.',
				},
				dateLabel: 'Nov 2023 - Present',
				sortDate: '2026-05-10',
				context: 'Independent games, tools, and web projects',
				summary:
					'Built independent games, prototypes, creative tools, and web projects across solo development cycles from idea through playable delivery.',
				highlights: [
					'Developed and maintained solo game prototypes across cozy, puzzle, physics, arcade, action, simulation, quiz, and party-game ideas.',
					'Built web-facing projects and tooling with attention to responsive presentation, accessible content, and clear project documentation.',
					'Used solo development workflows to strengthen scope control, technical problem-solving, iteration, and production follow-through.',
					'Connected game development, teaching, science communication, and portfolio work into a practical independent development practice.',
				],
				tools: ['Unity', 'C#', 'Astro', 'TypeScript', 'Game Prototyping', 'Web Tools'],
			},
			{
				id: 'maths-tutor',
				role: 'Maths Tutor',
				company: 'Self Employed',
				companyId: 'solo',
				picture: {
					src: '/assets/images/experience-solo-dev.webp',
					alt: 'Pixel art solo developer overlooking a bright mountain valley.',
				},
				dateLabel: 'Feb 2014 - Nov 2023',
				sortDate: '2023-11-01',
				context: 'Mathematics tutoring',
				summary:
					'Taught mathematics to high school students from years 8 to 12, adapting explanations to different confidence levels and learning styles.',
				highlights: [
					'Supported students across year 8 to year 12 mathematics.',
					'Built clear communication habits by breaking complex topics into approachable steps.',
					'Adapted lessons to each student\'s goals, pace, and curriculum needs.',
					'Developed mentoring skills that continue to support teaching, teamwork, and client communication.',
				],
				tools: ['Tutoring', 'Mathematics', 'Teaching', 'Mentoring', 'Communication'],
			},
			{
				id: 'uni-student',
				role: 'Graduate',
				company: 'University of Adelaide',
				companyId: 'university-of-adelaide',
				picture: {
					src: '/assets/images/experience-university-of-adelaide.webp',
					alt: 'Aerial view of the University of Adelaide North Terrace campus.',
				},
				dateLabel: 'Bachelor of Science',
				dateHeading: 'Degree',
				sortDate: '2013-01-01',
				context: 'Genetics, Microbiology and Immunology',
				summary:
					'Studied a Bachelor of Science at the University of Adelaide, focusing on genetics, microbiology, and immunology.',
				highlights: [
					'Built a broad scientific foundation across genetics, microbiology, and immunology.',
					'Developed research, analysis, and evidence-based reasoning skills through university science study.',
					'Strengthened the learning habits and curiosity that continue to support technical problem-solving.',
					'Connected a long-running interest in science with later work in teaching, STEM outreach, and software development.',
				],
				tools: ['Science', 'Genetics', 'Microbiology', 'Immunology', 'Research', 'Analysis'],
			},
			{
				id: 'power-net-it-solutions',
				role: 'Customer Service Function Consultant (IT)',
				cardRole: 'IT Service Consultant',
				company: 'Power-Net IT Solutions',
				companyId: 'power-net-it-solutions',
				picture: {
					src: '/assets/images/experience-power-net-it-solutions.webp',
					alt: 'Power-Net IT Solutions office frontage.',
				},
				dateLabel: 'Mar 2021 - Mar 2022',
				sortDate: '2022-03-01',
				context: 'IT customer service',
				summary:
					'Maintained high levels of customer service for high profile clients during urgent IT support situations.',
				highlights: [
					'Supported urgent client-facing technical situations with calm, clear communication.',
					'Balanced customer service expectations with practical troubleshooting and escalation.',
					'Worked with high profile clients where responsiveness and professionalism were essential.',
					'Strengthened the service mindset and communication discipline I bring to software teams.',
				],
				tools: ['IT Support', 'Customer Service', 'Troubleshooting', 'Client Support', 'Communication'],
			},
			{
				id: 'australian-army',
				role: 'Information Systems Technician',
				company: 'Australian Army Reserve',
				companyId: 'australian-army',
				picture: {
					src: '/assets/images/experience-australian-army.webp',
					alt: 'Royal Australian Corps of Signals Jimmy emblem.',
				},
				dateLabel: 'Jul 2016 - Jul 2021',
				sortDate: '2021-07-01',
				context: 'Army Reserve communications',
				summary:
					'Served as an Information Systems Technician in the Australian Army Reserve across 144 Signal Squadron in South Australia and 108 Signal Squadron in Victoria.',
				recognition: [
					{
						name: 'National Emergency Medal',
						awardedFrom: 'Operation Bushfire Assist',
						detail: 'Bushfires 19-20 clasp',
						year: '2019-20',
						emblem: {
							src: '/assets/emblems/army-bushfire-assist.webp',
							alt: 'Neutral medal-style emblem with wattle and flame cues for National Emergency Medal recognition.',
						},
					},
				],
				highlights: [
					'Worked across unit parades, exercises, online and local courses, network administration, and equipment operation.',
					'Built technical discipline through communications systems work and operational training.',
					'Handled weapons training and worked within structured team environments.',
					'Awarded the National Emergency Medal for Operation Bushfire Assist service at Kangaroo Island.',
					'Served in Operation COVID-19 Assist.',
				],
				tools: ['Network Administration', 'Technical Systems', 'Equipment Operation', 'Training', 'Teamwork'],
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
	contact: {
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
	},
	footer: {
		message: 'Thanks for stopping by!',
		linkLabels: ['Email', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram', 'Discord'],
	},
} as const;
