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
					src: '/assets/images/experience-daytime-devs-sasa-team.webp',
					alt: 'Daytime Devs team members at the South Australian Screen Awards media wall.',
				},
				{
					src: '/assets/images/experience-daytime-devs-convention.webp',
					alt: 'Daytime Devs team members in Super BAWK BAWK Chicken shirts at a convention booth.',
				},
			],
			dateLabel: 'Mar 2022 - Present',
			cardDateLabel: '2022 - Present',
			sortDate: '2026-05-01',
			context: 'Independent studio',
			summary: 'Co-founded Daytime Devs and helped self-publish Super BAWK BAWK Chicken across PC and mobile.',
			recognition: [
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
			highlights: [
				'Released Super BAWK BAWK Chicken on Steam, Google Play, and the App Store.',
				'Helped grow the game to 25,500+ Google Play downloads and deliver 15 updates since the 2023 demo launch.',
				'Worked across design, C# gameplay and tools, shaders, debugging, mobile porting, store publishing, marketing, conventions, and interviews.',
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
					src: '/assets/images/experience-catalyst-games-sagta-award-group.webp',
					alt: 'Catalyst Games team members posing with a SAGTA South Australian Game Industry Award.',
				},
				{
					src: '/assets/images/catalyst-think-digital-vr-cattle-vr.webp',
					alt: 'Catalyst and Think Digital VR team members filming a cattle VR training experience.',
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
			id: 'global-game-jam-super-raccoon',
			role: 'Game Jam Participant',
			company: 'Global Game Jam',
			companyId: 'global-game-jam',
			pictures: [
				{
					src: '/assets/images/project-super-raccoon.webp',
					alt: 'Super Raccoon cover art with the mascot in a red cape.',
				},
			],
			dateLabel: 'Jan 2026',
			cardDateLabel: '2026',
			sortDate: '2026-01-31',
			context: 'Super Raccoon team project',
			summary:
				'Joined a Global Game Jam team as a programmer on Super Raccoon, a released Unity puzzle game about helping office worker Ricky Raccoon escape without being spotted.',
			highlights: [
				'Credited as a programmer on the released Super Raccoon game jam project.',
				'Built gameplay in Unity as part of a small team working to a short jam timeline.',
				'Helped deliver an HTML5 browser build and downloadable PC build for the itch.io release.',
				'Worked within a shared codebase that was published publicly on GitHub.',
			],
			tools: ['Unity', 'C#', 'Game Jam', 'Puzzle Game', 'HTML5', 'PC'],
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
			],
			dateLabel: '2021 - Present',
			cardDateLabel: '2021 - Present',
			sortDate: '2026-05-10',
			context: 'Independent games, tools, and web projects',
			summary:
				'Built independent games, prototypes, tools, and web projects across solo development cycles, carrying ideas from early concept through practical delivery.',
			highlights: [
				'Created both handcrafted and AI-assisted games, prototypes, tools, and web projects as part of a long-running independent software practice.',
				'Built software as a lifelong hobby from primary school before beginning professional software development work in 2021.',
				'Released my first game title in 2023, gaining practical experience across publishing, iteration, and post-release support.',
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
			id: 'japanese-language-student',
			role: 'Language Student',
			company: 'WEA / Japaneasy',
			dateLabel: '2014 - 2016, 2022',
			cardDateLabel: '2014 - 2022',
			sortDate: '2022-01-01',
			context: 'Japanese language study',
			summary: 'Completed Japanese language courses through WEA and Japaneasy, continuing a long-running interest in language learning.',
			highlights: [
				'Completed WEA Japanese study from 2014 to 2016 with my brother.',
				'Completed Japaneasy Japanese study in 2022 with my family, including my brother, sister-in-law, and partner.',
			],
			tools: ['Japanese', 'Language Learning', 'Study', 'Communication'],
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
		{
			id: 'avcon-invader',
			role: 'AVCon Invader',
			company: 'AVCon',
			companyId: 'avcon',
			dateLabel: '2014 - 2018',
			cardDateLabel: '2014 - 2018',
			sortDate: '2018-07-01',
			context: 'Volunteer festival operations',
			summary:
				'Volunteered for five years at AVCon, supporting Adelaide’s volunteer-run anime, gaming, and pop culture festival through event operations and attendee-facing support.',
			highlights: [
				'Supported festival operations across busy public event environments as part of the AVCon volunteer team.',
				'Helped attendees navigate the event experience through clear communication and practical on-the-day support.',
				'Worked within a coordinated volunteer team to keep event areas running smoothly across festival weekends.',
				'Contributed time and energy to a not-for-profit community event built around anime, gaming, pop culture, and local fan communities.',
			],
			tools: ['Volunteering', 'Event Operations', 'Attendee Support', 'Teamwork', 'Communication', 'Community Events'],
		},
		{
			id: 'state-level-athlete',
			role: 'State-Level Athlete',
			company: 'Athletics South Australia',
			companyId: 'athletics-south-australia',
			pictures: [
				{
					src: '/assets/images/experience-state-level-athlete-track.webp',
					alt: 'Athletics South Australia runner standing beside an outdoor athletics track.',
				},
				{
					src: '/assets/images/experience-state-level-athlete-harbour.webp',
					alt: 'Athletics South Australia runner standing near Sydney Harbour Bridge.',
				},
				{
					src: '/assets/images/experience-state-level-athlete-gold-medal.webp',
					alt: 'Gold Athletics South Australia State Championships medal.',
				},
				{
					src: '/assets/images/experience-state-level-athlete-silver-medal.webp',
					alt: 'Silver Athletics South Australia medal for the Under 18 100 metres event.',
				},
			],
			dateLabel: '2011 - 2012',
			cardDateLabel: '2011 - 2012',
			sortDate: '2012-03-18',
			context: 'Under 18 sprinting and Junior Athletics Championships',
			summary:
				'It would not be right to build a portfolio without reliving my Under 18 sprinting glory, mostly because my partner has already heard about it enough times that the website may as well share the burden.',
			recognition: [
				{
					name: 'First Place, 200 metres',
					awardedFrom: 'Athletics South Australia State Championships',
					detail: 'Under 18, 22.79 seconds',
					year: '2011',
					emblem: {
						src: '/assets/emblems/athletics-south-australia.webp',
						alt: 'Athletics South Australia bird emblem.',
					},
				},
				{
					name: 'Second Place, 100 metres',
					awardedFrom: 'Athletics South Australia State Championships',
					detail: 'Under 18, 11.39 seconds',
					year: '2011',
					emblem: {
						src: '/assets/emblems/athletics-south-australia.webp',
						alt: 'Athletics South Australia bird emblem.',
					},
				},
			],
			highlights: ['Went to Sydney to represent South Australia at the 2012 Junior Athletics Championships.'],
			tools: ['Athletics', 'Sprinting', '200 metres', '100 metres', 'State Championships', 'Personal Bests'],
		},
	] satisfies ExperienceItem[],
} as const;
