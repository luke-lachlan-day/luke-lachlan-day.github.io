export type Link = {
	label: string;
	href: string;
	display: string;
	copy: string;
};

export type Card = {
	icon: string;
	title: string;
	copy: string;
};

export type TimelineItem = {
	date: string;
	title: string;
	copy: string;
};

export type HeroContent = {
	eyebrow: string;
	title: string;
	lead: string;
};

export type ImageAsset = {
	src: string;
	alt: string;
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

export const profile = {
	name: 'Luke Lachlan Day',
	location: 'Adelaide, Australia',
	home: {
		title: 'Luke Lachlan Day | Home',
		description: 'Portfolio home page for Luke Lachlan Day, Unity and C# game developer.',
		eyebrow: 'Indie game developer',
		role: 'Unity / C# Game Developer',
		summary:
			'I build systems, tools, and playful games with a focus on iteration, feel, and memorable player experiences.',
		heroImages: {
			light: {
				src: '/assets/hero-light.png',
				alt: 'Pixel art traveler looking across a bright mountain valley from a grassy cliff.',
			},
			dark: {
				src: '/assets/hero-dark.png',
				alt: 'Pixel art traveler looking across a moonlit mountain valley from a grassy cliff.',
			},
		},
		actions: [
			{ label: 'View Projects', href: '/timeline/' },
			{ label: 'Read Devlog', href: '/timeline/' },
		],
		highlights: {
			eyebrow: 'Who I Am',
			items: [
				{
					icon: '</>',
					title: 'Unity & C#',
					copy: 'Deep experience building systems, tools, and gameplay with clean, maintainable code and scalable architecture.',
				},
				{
					icon: 'pad',
					title: 'Gameplay-Focused',
					copy: 'I love tight systems, juicy interactions, and mechanics that feel great to play.',
				},
				{
					icon: 'heart',
					title: 'Indie Mindset',
					copy: 'Small teams, big ideas. Ship often, learn always, and make games that matter.',
				},
			] satisfies Card[],
		},
		featuredProjectIds: ['petes-place', 'coop-climbing', 'awbw-opening-analyzer'],
	},
	companies: [
		{
			id: 'daytime-devs',
			name: 'Daytime Devs',
			icon: {
				src: '/assets/company-daytime-devs.webp',
				alt: 'Pixel art sun and code mark for Daytime Devs.',
			},
		},
		{
			id: 'catalyst-games',
			name: 'Catalyst Games',
			icon: {
				src: '/assets/company-catalyst-games.webp',
				alt: 'Pixel art purple spark and game controller mark for Catalyst Games.',
			},
		},
		{
			id: 'solo',
			name: 'Solo',
			icon: {
				src: '/assets/company-solo.webp',
				alt: 'Pixel art solo developer avatar icon.',
			},
		},
	] satisfies Company[],
	projects: {
		eyebrow: 'Featured Projects',
		title: 'Projects and prototypes',
		copy: 'A data-backed collection of games, tools, and experiments. Add or edit entries here and the cards update across the site.',
		items: [
			{
				id: 'petes-place',
				companyId: 'solo',
				product: "Pete's Place",
				pictures: [
					{
						src: '/assets/project-petes-place.webp',
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
						src: '/assets/project-climbing.webp',
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
						src: '/assets/project-awbw.webp',
						alt: 'Pixel art turn-based strategy grid with blue and red units.',
					},
				],
				description:
					'Analyze Advance Wars By Web openings with win rates, data views, and strategy insights.',
				tools: ['Tool', 'Data', 'Strategy'],
			},
		] satisfies Project[],
	},
	timeline: {
		title: 'Timeline | Luke Lachlan Day',
		description: 'Project and work timeline for Luke Lachlan Day.',
		hero: {
			eyebrow: 'Timeline',
			title: 'Work in progress, logged clearly.',
			lead: 'A lightweight chronology for past work, current projects, and experiments.',
		} satisfies HeroContent,
		history: {
			eyebrow: 'History',
			title: 'Past work and project notes',
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
		] satisfies TimelineItem[],
	},
	contact: {
		title: 'Contact | Luke Lachlan Day',
		description: 'Contact links for Luke Lachlan Day.',
		hero: {
			eyebrow: 'Contact',
			title: 'Links and ways to connect.',
			lead: 'Reach out about projects, prototypes, tools, or game-development work.',
		} satisfies HeroContent,
		channels: {
			eyebrow: 'Channels',
			title: 'Contact',
		},
		links: [
			{
				label: 'Email',
				href: 'mailto:hello@example.com',
				display: 'hello@example.com',
				copy: 'Placeholder email for direct contact.',
			},
			{
				label: 'GitHub',
				href: '#',
				display: 'github.com/placeholder',
				copy: 'Future home for public repositories and project source.',
			},
			{
				label: 'LinkedIn',
				href: '#',
				display: 'linkedin.com/in/placeholder',
				copy: 'Placeholder professional profile link.',
			},
			{
				label: 'Projects / Social',
				href: '#',
				display: 'project-link-placeholder',
				copy: 'Space for a project hub, social profile, or community link.',
			},
		] satisfies Link[],
	},
	footer: {
		message: 'Thanks for stopping by!',
		linkLabels: ['Email', 'GitHub', 'LinkedIn', 'Projects / Social'],
	},
} as const;
