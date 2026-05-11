import type { ExperienceItem, HeroContent } from './types';

export const experience = {
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
			pictures: [
				{
					src: '/assets/images/project-super-bawk-bawk-chicken.webp',
					alt: 'Steam header art for Super BAWK BAWK Chicken.',
				},
				{
					src: '/assets/images/project-coop-cat-temple-escape.webp',
					alt: 'Pixel art cats fleeing a collapsing Egyptian temple corridor reused as a Daytime Devs gallery test image.',
				},
			],
			dateLabel: 'Mar 2022 - Present',
			cardDateLabel: '2022 - Present',
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
			pictures: [
				{
					src: '/assets/images/catalyst-think-digital-vr-cattle-vr.webp',
					alt: 'Catalyst and Think Digital VR team members filming a cattle VR training experience.',
				},
				{
					src: '/assets/images/experience-catalyst-games-sagta-award-group.webp',
					alt: 'Catalyst Games team members posing with a SAGTA South Australian Game Industry Award.',
				},
				{
					src: '/assets/images/experience-catalyst-games-sagta-award-media-wall.webp',
					alt: 'Catalyst Games team members at the SAGTA awards media wall holding an award.',
				},
				{
					src: '/assets/images/experience-catalyst-games-studio-event-audience.webp',
					alt: 'Catalyst Games studio event guests watching a presentation.',
				},
				{
					src: '/assets/images/experience-catalyst-games-studio-event-group.webp',
					alt: 'Large Catalyst Games studio event group photo on a staircase.',
				},
			],
			dateLabel: 'Jan 2025 - Mar 2026',
			cardDateLabel: '2025 - 2026',
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
			cardDateLabel: '2026',
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
			dateLabel: 'Jun 2024 - Oct 2024',
			cardDateLabel: '2024',
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
			company: 'Self-Employed',
			companyId: 'solo',
			pictures: [
				{
					src: '/assets/images/experience-solo-dev.webp',
					alt: 'Pixel art solo developer overlooking a bright mountain valley.',
				},
				{
					src: '/assets/images/project-luke-lachlan-day-website.webp',
					alt: 'Pixel art traveler overlooking a bright mountain valley reused as a Solo Dev gallery test image.',
				},
				{
					src: '/assets/images/project-petes-place.webp',
					alt: 'Pixel art cozy forest shop scene reused as a Solo Dev gallery test image.',
				},
			],
			dateLabel: 'Nov 2023 - Present',
			cardDateLabel: '2023 - Present',
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
			company: 'Self-Employed',
			companyId: 'solo',
			pictures: [
				{
					src: '/assets/images/experience-solo-dev.webp',
					alt: 'Pixel art solo developer overlooking a bright mountain valley.',
				},
			],
			dateLabel: 'Feb 2014 - Nov 2023',
			cardDateLabel: '2014 - 2023',
			sortDate: '2023-11-01',
			context: 'Mathematics tutoring',
			summary:
				'Taught mathematics to high school students from years 8 to 12, adapting explanations to different confidence levels and learning styles.',
			highlights: [
				'Supported students across year 8 to year 12 mathematics.',
				'Built clear communication habits by breaking complex topics into approachable steps.',
				"Adapted lessons to each student's goals, pace, and curriculum needs.",
				'Developed mentoring skills that continue to support teaching, teamwork, and client communication.',
			],
			tools: ['Tutoring', 'Mathematics', 'Teaching', 'Mentoring', 'Communication'],
		},
		{
			id: 'uni-student',
			role: 'Graduate',
			company: 'University of Adelaide',
			companyId: 'university-of-adelaide',
			pictures: [
				{
					src: '/assets/images/experience-university-of-adelaide.webp',
					alt: 'Aerial view of the University of Adelaide North Terrace campus.',
				},
			],
			dateLabel: '2019',
			cardDateLabel: '2019',
			dateHeading: 'Degree',
			sortDate: '2013-01-01',
			context: 'Genetics, Microbiology and Immunology',
			summary: 'Studied a Bachelor of Science at the University of Adelaide, focusing on genetics, microbiology, and immunology.',
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
			pictures: [
				{
					src: '/assets/images/experience-power-net-it-solutions.webp',
					alt: 'Power-Net IT Solutions office frontage.',
				},
			],
			dateLabel: 'Mar 2021 - Mar 2022',
			cardDateLabel: '2021 - 2022',
			sortDate: '2022-03-01',
			context: 'IT customer service',
			summary: 'Maintained high levels of customer service for high-profile clients during urgent IT support situations.',
			highlights: [
				'Supported urgent client-facing technical situations with calm, clear communication.',
				'Balanced customer service expectations with practical troubleshooting and escalation.',
				'Worked with high-profile clients where responsiveness and professionalism were essential.',
				'Strengthened the service mindset and communication discipline I bring to software teams.',
			],
			tools: ['IT Support', 'Customer Service', 'Troubleshooting', 'Client Support', 'Communication'],
		},
		{
			id: 'australian-army',
			role: 'Information Systems Technician',
			company: 'Australian Army Reserve',
			companyId: 'australian-army',
			pictures: [
				{
					src: '/assets/images/experience-australian-army.webp',
					alt: 'Royal Australian Corps of Signals Jimmy emblem.',
				},
			],
			dateLabel: 'Jul 2016 - Jul 2021',
			cardDateLabel: '2016 - 2021',
			sortDate: '2021-07-01',
			context: 'Army Reserve communications',
			summary:
				'Served as an Information Systems Technician in the Australian Army Reserve across 144 Signal Squadron in South Australia and 108 Signal Squadron in Victoria.',
			recognition: [
				{
					name: 'National Emergency Medal',
					awardedFrom: 'Operation Bushfire Assist',
					detail: 'Bushfires 2019-2020 clasp',
					year: '2019-2020',
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
} as const;
