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

export type ProjectReleaseStage = 'dev' | 'released' | 'shelved' | 'contributed';

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
	yearLabel: string;
	releaseStage: ProjectReleaseStage;
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
				yearLabel: '2026–Present',
				releaseStage: 'dev',
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
				yearLabel: '2026',
				releaseStage: 'dev',
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
				yearLabel: '2025',
				releaseStage: 'released',
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
				yearLabel: '2026–Present',
				releaseStage: 'dev',
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
				yearLabel: '2026–Present',
				releaseStage: 'dev',
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
				yearLabel: '2025–Present',
				releaseStage: 'dev',
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
				yearLabel: '2025',
				releaseStage: 'released',
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
				yearLabel: '2025',
				releaseStage: 'dev',
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
				yearLabel: '2025',
				releaseStage: 'released',
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
				yearLabel: '2024–2025',
				releaseStage: 'shelved',
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
				yearLabel: '2024',
				releaseStage: 'contributed',
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
				yearLabel: '2024–2025',
				releaseStage: 'shelved',
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
				yearLabel: '2024',
				releaseStage: 'dev',
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
				id: 'self-employed-unity-developer',
				role: 'Unity Developer',
				company: 'Self Employed',
				companyId: 'solo',
				dateLabel: 'Jun 2024 - Oct 2024',
				sortDate: '2024-10-01',
				context: 'Contract vertical slice',
				summary:
					'Worked with Coastal Derrieres Pty Ltd to turn the Beach Bums design document into a playable vertical slice for funding opportunities.',
				highlights: [
					'Provided senior Unity development support inside a small multidisciplinary team of four.',
					'Translated the design into a practical production plan and helped keep the scope achievable.',
					'Integrated FMOD into Unity to support the project audio requirements.',
					'Helped adapt art assets for game use and built an intuitive level editor for the design workflow.',
				],
				tools: ['Unity', 'C#', 'FMOD', 'Level Editor', 'Vertical Slice', 'Production Planning'],
			},
			{
				id: 'maths-tutor',
				role: 'Maths Tutor',
				company: 'Self Employed',
				companyId: 'solo',
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
				id: 'power-net-it-solutions',
				role: 'Customer Service Function Consultant (IT)',
				company: 'Power-Net IT Solutions',
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
				company: 'Australian Army',
				dateLabel: 'Jul 2016 - Jul 2021',
				sortDate: '2021-07-01',
				context: 'Army Reserve communications',
				summary:
					'Served as an Information Systems Technician across 144 Signal Squadron in South Australia and 108 Signal Squadron in Victoria.',
				highlights: [
					'Worked across unit parades, exercises, online and local courses, network administration, and equipment operation.',
					'Built technical discipline through communications systems work and operational training.',
					'Handled weapons training and worked within structured team environments.',
					'Deployed on Bushfire Assist at Kangaroo Island and Covid-19 Assist.',
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
