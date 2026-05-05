type Link = {
	label: string;
	href: string;
	display: string;
	copy: string;
};

type Card = {
	kicker?: string;
	title: string;
	copy: string;
};

type StatusRow = {
	label: string;
	value: string;
};

type TimelineItem = {
	date: string;
	title: string;
	copy: string;
};

type Project = {
	title: string;
	copy: string;
};

type HeroContent = {
	eyebrow: string;
	title: string;
	lead: string;
};

export const profile = {
	name: 'Luke Lachlan Day',
	home: {
		title: 'Luke Lachlan Day | Home',
		description: 'Home and about page for Luke Lachlan Day.',
		eyebrow: 'Home / About',
		role: 'Game developer and technical creative placeholder',
		summary:
			'A compact personal site for work, experiments, and project notes. This first version keeps the content light while establishing a clear structure for a portfolio and development log.',
		statusRows: [
			{ label: 'status', value: 'building' },
			{ label: 'stack', value: 'Astro / HTML / CSS' },
			{ label: 'focus', value: 'interactive systems' },
		] satisfies StatusRow[],
		highlights: {
			eyebrow: 'Highlights',
			title: 'A quick snapshot',
			items: [
				{
					kicker: '01',
					title: 'Technical craft',
					copy: 'Interested in readable systems, practical tools, and code that supports fast iteration.',
				},
				{
					kicker: '02',
					title: 'Game feel',
					copy: 'Exploring mechanics, feedback loops, and small details that make interactive work feel responsive.',
				},
				{
					kicker: '03',
					title: 'Project notes',
					copy: 'A place for current experiments, timeline entries, and links as the site grows.',
				},
			] satisfies Card[],
		},
		currentFocus: {
			eyebrow: 'Current focus',
			title: 'Building a foundation',
			items: [
				'Shape the site into a clean personal portfolio with room for detail.',
				'Add real project summaries, screenshots, and repository links over time.',
				'Keep the first version static, fast, and easy to maintain.',
			],
		},
	},
	timeline: {
		title: 'Timeline | Luke Lachlan Day',
		description: 'Project and work timeline for Luke Lachlan Day.',
		hero: {
			eyebrow: 'Timeline',
			title: 'Work in progress, logged clearly.',
			lead: 'A lightweight timeline for past work, current projects, and experiments. Entries are placeholders for now and can be replaced with real milestones.',
		} satisfies HeroContent,
		history: {
			eyebrow: 'History',
			title: 'Past work and project notes',
		},
		items: [
			{
				date: 'Now',
				title: 'Personal site foundation',
				copy: 'Setting up a static Astro site to collect project history, current work, and contact links.',
			},
			{
				date: 'Recent',
				title: 'Prototype and systems work',
				copy: 'Placeholder entry for gameplay prototypes, technical experiments, and tooling improvements.',
			},
			{
				date: 'Past',
				title: 'Learning and shipped pieces',
				copy: 'Placeholder entry for previous projects, coursework, collaboration, or production milestones.',
			},
			{
				date: 'Archive',
				title: 'Early experiments',
				copy: 'A future home for smaller builds, notes, and experiments worth keeping visible.',
			},
		] satisfies TimelineItem[],
	},
	projects: {
		eyebrow: 'Current Projects',
		title: 'Active placeholders',
		copy: 'Five compact cards for project summaries, prototypes, or public build notes.',
		items: [
			{
				title: 'Project Slot 01',
				copy: 'Short project description placeholder with room for status, links, and notes.',
			},
			{
				title: 'Project Slot 02',
				copy: 'Short project description placeholder with room for status, links, and notes.',
			},
			{
				title: 'Project Slot 03',
				copy: 'Short project description placeholder with room for status, links, and notes.',
			},
			{
				title: 'Project Slot 04',
				copy: 'Short project description placeholder with room for status, links, and notes.',
			},
			{
				title: 'Project Slot 05',
				copy: 'Short project description placeholder with room for status, links, and notes.',
			},
		] satisfies Project[],
	},
	contact: {
		title: 'Contact | Luke Lachlan Day',
		description: 'Contact links and social placeholders for Luke Lachlan Day.',
		hero: {
			eyebrow: 'Contact',
			title: 'Links and ways to connect.',
			lead: 'Placeholder contact details for the first static version. Replace each link with the preferred public destination when ready.',
		} satisfies HeroContent,
		channels: {
			eyebrow: 'Channels',
			title: 'Contact placeholders',
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
} as const;
