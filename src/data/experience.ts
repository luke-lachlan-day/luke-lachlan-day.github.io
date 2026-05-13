import type { ExperienceItem, HeroContent } from './types';
import { mediaOwnershipNotice } from './site';

export const experience = {
	title: 'Luke Lachlan Day | Experience',
	description: 'Work history and selected experience for Luke Lachlan Day.',
	hero: {
		title: 'Experience',
	} satisfies HeroContent,
	items: [
		{
			id: 'solo-dev',
			role: 'Solo Developer',
			company: 'Self-Employed',
			companyId: 'solo',
			pictures: [
				{
					src: '/assets/images/experience-solo-dev.webp',
					alt: 'Pixel art solo developer overlooking a bright mountain valley.',
				},
			],
			dateLabel: 'Present',
			cardDateLabel: 'Present',
			sortDate: '2026-05-10',
			summary:
				'Created handcrafted and AI-assisted prototypes, mods, tools, videos, and web projects across solo development cycles, carrying ideas into playable prototypes or released works.',
			highlights: [
				'Published Luke Lachlan Day website in 2026.',
				'Many, many prototypes enjoyed by friends and family.',
			],
		},
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
				{
					src: '/assets/images/experience-daytime-devs-pax-aus-team.webp',
					alt: 'Daytime Devs team members at PAX Aus in front of Super BAWK BAWK Chicken banners.',
				},
				{
					src: '/assets/images/experience-daytime-devs-booth-team.webp',
					alt: 'Daytime Devs team members standing behind a Super BAWK BAWK Chicken convention booth.',
				},
				{
					src: '/assets/images/experience-daytime-devs-avcon-costumes.webp',
					alt: 'Daytime Devs team members wearing chicken costumes at a convention.',
				},
			],
			dateLabel: 'Mar 2022 - Present',
			cardDateLabel: '2022 - Present',
			sortDate: '2026-05-01',
			summary:
				'Co-founded Daytime Devs with my two brothers and self-published our first title Super BAWK BAWK Chicken across Steam, Google Play, and the App Store.',
			recognition: [
				{
					name: 'Best Game - Super BAWK BAWK Chicken',
					awardedFrom: "The Mercury's South Australian Screen Awards",
					year: '2024',
					emblem: {
						src: '/assets/emblems/daytime-devs.webp',
						alt: 'Daytime Devs award emblem.',
					},
				},
			],
			highlights: [
				'Grew our first title to 25,500+ Google Play downloads and delivered 15 updates since the 2023 demo launch.',
				'Experienced Chris Norton’s game music performed live by the Woodville Concert Band at Music With Motion: Down Under, directed by Dr Nathan Cummins.',
			],
		},
		{
			id: 'sciworld-presenter',
			role: 'Presenter',
			company: 'SciWorld',
			companyId: 'sciworld',
			pictures: [
				{
					src: '/assets/images/experience-sciworld-starlab.webp',
					alt: 'SciWorld Starlab inflatable planetarium set up inside a room.',
				},
			],
			dateLabel: 'Apr 2026 - Present',
			cardDateLabel: '2026 - Present',
			sortDate: '2026-04-01',
			summary:
				'Recently joined the team at SciWorld, supporting STEM outreach for schools, parties, and public events across South Australia.',
			mediaNotice: mediaOwnershipNotice,
			highlights: [],
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
					src: '/assets/images/experience-catalyst-games-think-digital-vr-cattle-vr.webp',
					alt: 'Catalyst and Think Digital VR team members filming a cattle VR training experience.',
				},
				{
					src: '/assets/images/experience-catalyst-games-studio-event-group.webp',
					alt: 'Large Catalyst Games studio event group photo on a staircase.',
				},
			],
			dateLabel: 'Jan 2025 - Mar 2026',
			cardDateLabel: '2025 - 2026',
			sortDate: '2026-03-01',
			summary:
				'Worked across original IP including Dungeons and Dining Tables, client projects such as Think Digital VR training experiences, and the Firebase-authenticated Disney Game Night mobile app. Contributed beyond development through publisher pitching, school-based game development teaching, and team training sessions.',
			mediaNotice: mediaOwnershipNotice,
			recognition: [
				{
					name: 'Most Impactful Studio of 2025',
					awardedFrom: 'SA Game Industry Awards (SAGIA)',
					detail: 'South Australian Game Industry Awards',
					year: '2025',
					emblem: {
						src: '/assets/images/company-catalyst-games.webp',
						alt: 'Catalyst Games award emblem.',
					},
				},
			],
			highlights: [
				'Dungeons and Dining Tables released as a playable demo on Steam.',
				'Disney Game Night App released on mobile.',
			],
		},
		{
			id: 'global-game-jam-super-raccoon',
			role: 'Programmer',
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
			summary: 'Joined a Global Game Jam team as a programmer to release Super Raccoon, a Unity puzzle game.',
			mediaNotice: mediaOwnershipNotice,
			highlights: [],
		},
		{
			id: 'self-employed-unity-developer',
			role: 'Unity Developer',
			company: 'Coastal Derrieres',
			companyId: 'coastal-derrieres',
			pictures: [
				{
					src: '/assets/images/project-beach-bums-capsule.webp',
					alt: 'Beach Bums title art.',
				},
			],
			dateLabel: 'Jun 2024 - Oct 2024',
			cardDateLabel: '2024',
			sortDate: '2024-10-01',
			summary:
				'Worked with Coastal Derrieres in a small team of four to turn the Beach Bums design document into a playable vertical slice for funding opportunities.',
			mediaNotice: mediaOwnershipNotice,
			highlights: ['Vertical slice exhibited at events such as SAGE and AVCon.'],
		},
		{
			id: 'maths-tutor',
			role: 'Maths Tutor',
			company: 'Self-Employed',
			companyId: 'solo',
			pictures: [
				{
					src: '/assets/images/experience-maths-tutoring.webp',
					alt: 'Pixel art maths tutor teaching geometry and algebra outdoors beside a mountain lake.',
				},
			],
			dateLabel: 'Feb 2014 - Nov 2023',
			cardDateLabel: '2014 - 2023',
			sortDate: '2023-11-01',
			summary:
				'Taught mathematics to high school students from years 8 to 12, adapting explanations to different confidence levels and learning styles.',
			highlights: [],
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
			summary:
				'Maintained high levels of customer service for high-profile clients during urgent IT support situations.',
			mediaNotice: mediaOwnershipNotice,
			highlights: [],
		},
		{
			id: 'australian-army',
			role: 'Information Systems Technician',
			company: 'Australian Army Reserve',
			companyId: 'australian-army',
			pictures: [
				{
					src: '/assets/images/experience-australian-army-field-vehicles.webp',
					alt: 'Australian Army Reserve team with field vehicles and antennas overlooking the coast.',
				},
				{
					src: '/assets/images/experience-australian-army-wallaby.webp',
					alt: 'Australian Army Reserve soldier feeding a wallaby during a field activity.',
				},
				{
					src: '/assets/images/experience-australian-army-equipment-display.webp',
					alt: 'Australian Army Reserve team standing in front of communications equipment at an indoor display.',
				},
				{
					src: '/assets/images/experience-australian-army.webp',
					alt: 'Royal Australian Corps of Signals Jimmy emblem.',
				},
			],
			dateLabel: 'Jul 2016 - Jul 2021',
			cardDateLabel: '2016 - 2021',
			sortDate: '2021-07-01',
			summary:
				'Served as an Information Systems Technician in the Australian Army Reserve across 144 Signal Squadron in South Australia and 108 Signal Squadron in Victoria.',
			mediaNotice: mediaOwnershipNotice,
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
			highlights: [],
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
			sortDate: '2019-01-01',
			summary:
				'Studied a Bachelor of Science at the University of Adelaide, majoring in Genetics, Microbiology, and Immunology.',
			mediaNotice: mediaOwnershipNotice,
			highlights: [],
		},
		{
			id: 'avcon-invader',
			role: 'AVCon Invader',
			company: 'AVCon',
			companyId: 'avcon',
			pictures: [
				{
					src: '/assets/images/experience-avcon-invader.webp',
					alt: 'AVCon Invader volunteer watching a game station at the festival.',
				},
			],
			dateLabel: '2014 - 2018',
			cardDateLabel: '2014 - 2018',
			sortDate: '2018-07-01',
			summary:
				"Volunteered for five years at AVCon, supporting Adelaide's volunteer-run anime, gaming, and pop culture festival through event operations and attendee-facing support.",
			mediaNotice: mediaOwnershipNotice,
			highlights: [],
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
			],
			dateLabel: '2011 - 2012',
			cardDateLabel: '2011 - 2012',
			sortDate: '2012-03-18',
			summary:
				'It would not be right to build a portfolio without reliving my Under 18 sprinting glory, mostly because my partner has already heard about it enough times that the website may as well share the burden.',
			mediaNotice: mediaOwnershipNotice,
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
			highlights: [
				'Went to Sydney to represent South Australia at the 2012 Junior Athletics Championships.',
				'Coached by the legendary Debbie Meich at Western Athletics Club.',
			],
		},
	] satisfies ExperienceItem[],
} as const;
