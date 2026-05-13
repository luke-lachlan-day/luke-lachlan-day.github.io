import type { Project } from './types';

export const projects = {
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
			description: 'A personal portfolio site for sharing projects, experience and contact links.',
			tools: ['Astro', 'TypeScript', 'Portfolio'],
			projectTags: {
				format: ['Website'],
				platform: ['Web'],
				specialty: ['Portfolio'],
				tech: ['Astro', 'TypeScript', "HTML", "CSS", "JavaScript"],
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
		},
		/*
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
		*/
		{
			id: 'unreleased-treasures',
			companyId: 'solo',
			product: 'Unreleased Treasures',
			pictures: [
				{
					src: '/assets/images/project-unreleased-treasures.webp',
					alt: 'Pixel art treasure room filled with unreleased games, cards, and glowing keepsakes for Unreleased Treasures.',
				},
			],
			description:
				'In memory of the unreleased game prototypes, card games, and recurring Quizmas experiments. For now these titles rest only in the hearts of friends and family.',
			detailSections: [
				{
					title: 'Game prototypes',
					items: [
						'Trusty Battles',
						'Rogue Hands',
						'Float Goat',
						'Ponder',
						'Efficensea',
						'Hexagrow',
						'Christmas Game',
						'Amazing Maze Game',
						'Pon',
						'Creature Feature',
						'Norse Quiz',
						'Hot Potato',
						'Flash Sniper Game',
						'Hex Puzzle',
						'Hex Floor Drop',
						'Food Wars',
						'Chase the Cheese',
						'Many more',
					],
				},
				{
					title: 'Card games',
					items: ['Heart Attack', 'Bountiful Booty', 'Mercenary Madness'],
				},
				{
					title: 'Quizmas',
					items: ['Zookeepers Scramble', 'Arnold Quiz', 'Ikea Quiz', 'Many more'],
				},
			],
			tools: ['Game Prototypes', 'Card Games', 'Quizmas'],
			projectTags: {
				format: [],
				platform: [],
				specialty: [],
			},
			sortDate: '',
			dateLabel: '',
			yearLabel: '',
			releaseStage: 'shelved',
			awards: [],
		},
		{
			id: 'x-men-video',
			companyId: 'solo',
			product: 'X-Men',
			pictures: [
				{
					src: '/assets/images/project-x-men.webp',
					alt: 'YouTube thumbnail for the X-Men video.',
				},
			],
			description: "A video project in Flash that I made in primary school and released on my brother's YouTube.",
			tools: ['Video', 'YouTube', 'Solo'],
			projectTags: {
				format: ['Video'],
				platform: ['YouTube'],
				specialty: ['Animation'],
				tech: ['Flash'],
			},
			sortDate: '2008-06-01',
			dateLabel: 'Jun 2008',
			yearLabel: '2008',
			releaseStage: 'released',
			awards: [],
			actions: [{ type: 'youtube', href: 'https://www.youtube.com/watch?v=C39TrymUclw' }],
		},
		{
			id: 'days-siege',
			companyId: 'solo',
			product: 'Days Siege',
			pictures: [
				{
					src: '/assets/images/project-days-siege-easy.webp',
					alt: 'Days Siege Easy title art over an Age of Mythology fort.',
				},
				{
					src: '/assets/images/project-days-siege-beta.webp',
					alt: 'Days Siege Beta title art with Age of Mythology units and gods.',
				},
			],
			description:
				'A released Age of Mythology: The Titans custom map series combining BETA, EASY, and HARD versions of a shop-and-siege scenario.',
			tools: ['Age of Mythology', 'Scenario Editor', 'Custom Map'],
			projectTags: {
				format: ['Game', 'Map'],
				platform: ['PC'],
				specialty: ['Strategy', 'Age of Mythology'],
				tech: ['Scenario Editor'],
			},
			sortDate: '2010-04-26',
			dateLabel: 'Apr 2010',
			yearLabel: '2010',
			releaseStage: 'released',
			awards: [],
			actions: [{ type: 'website', label: 'Download Map', href: 'https://aom.heavengames.com/downloads/showfile.php?fileid=9475' }],
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
					src: '/assets/images/project-petes-place-battle-result.webp',
					alt: "Pete's Place battle result screen with animal cards after a player win.",
				},
				{
					src: '/assets/images/project-petes-place-eastern-banjo-frog.webp',
					alt: "Pete's Place Eastern Banjo Frog card detail screen with stats and ability text.",
				},
			],
			description:
				'A strategy auto-battler set in and around Uncle Pete’s wildlife sanctuary. Collect, merge, and battle with real native animals, complete wildlife missions at real locations, and learn about each species’ habitats, diets, and unique traits.',
			tools: ['Strategy', 'Autobattler', 'Card Game'],
			projectTags: {
				format: ['Game'],
				platform: ['PC'],
				specialty: ['Strategy', 'Autobattler', 'Card Game'],
			},
			sortDate: '2026-04-01',
			dateLabel: 'In Dev',
			yearLabel: 'In Dev',
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
					alt: 'Steam capsule art for Dungeons and Dining Tables with the title, axolotl hero, and fantasy enemy.',
				},
				{
					src: '/assets/images/project-dungeons-and-dining-tables-dungeon-combat.webp',
					alt: 'Dungeons and Dining Tables gameplay showing an axolotl battling enemies in a colorful dungeon.',
				},
				{
					src: '/assets/images/project-dungeons-and-dining-tables-furniture-menu.webp',
					alt: 'Dungeons and Dining Tables furniture placement menu inside the player home.',
				},
				{
					src: '/assets/images/project-dungeons-and-dining-tables-cavern-boss.webp',
					alt: 'Dungeons and Dining Tables cavern scene with a large enemy and glowing furniture.',
				},
			],
			description:
				'Delve dungeons to collect rare furniture, take that furniture back to your home to decorate and the cosier your house is, the higher your stats! Go forth and drive the grumpiness from the land: your perfect home is just a dungeon away! Oh, and you play as an axolotl',
			tools: ['Adventure', 'Management', 'Cozy'],
			projectTags: {
				format: ['Game'],
				platform: ['PC', 'Steam'],
				specialty: ['Adventure', 'Management', 'Cozy'],
			},
			sortDate: '2025-01-01',
			dateLabel: 'Jan 2025 - Mar 2026',
			yearLabel: '2025 - 2026',
			releaseStage: 'contributed',
			awards: [],
			actions: [
				{ type: 'website', href: 'https://dndt.link/' },
				{ type: 'steam', href: 'https://store.steampowered.com/app/2941630/Dungeons_and_Dining_Tables/' },
			],
		},
		{
			id: 'beach-bums',
			companyId: 'coastal-derrieres',
			product: 'Beach Bums',
			pictures: [
				{
					src: '/assets/images/project-beach-bums-capsule.webp',
					alt: 'Beach Bums title art.',
				},
				{
					src: '/assets/images/project-beach-bums-beachgoers-before-wave.webp',
					alt: 'Beach Bums beach scene with characters and scattered seaside objects before the wave arrives.',
				},
				{
					src: '/assets/images/project-beach-bums-beach-search.webp',
					alt: 'Beach Bums hidden object scene with a beach hut, palm trees, and objects to search.',
				},
				{
					src: '/assets/images/project-beach-bums-tidal-wave.webp',
					alt: 'Beach Bums scene showing a large tidal wave about to wash across the beach.',
				},
			],
			description:
				'Beach Bums is a cheeky 2D hidden object memory game in which the player must reunite beachgoers with their swimsuits after a tidal wave washes them away.',
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
		},
		{
			id: 'think-digital-vr-work',
			companyId: 'catalyst-games',
			product: 'Think Digital Work',
			pictures: [
				{
					src: '/assets/images/project-think-digital-vr-work-cattle-vr-simulation.webp',
					alt: 'CattleVR training simulation showing a cow in a virtual cattle crush.',
				},
			],
			description:
				'A Catalyst Games contribution to Think Digital client work, supporting VR interactive training experiences, a web puzzle and practical project delivery.',
			tools: ['VR', 'Client Work', 'Unity'],
			projectTags: {
				format: ['Client Work'],
				platform: ['VR', "Web"],
				specialty: ['Training', 'Interactive Experience'],
				tech: ['Unity', 'C#'],
			},
			sortDate: '2026-02-01',
			dateLabel: '2025 - 2026',
			yearLabel: '2025 - 2026',
			releaseStage: 'contributed',
			awards: [],
		},
		{
			id: 'disney-game-night',
			companyId: 'catalyst-games',
			product: 'Disney Game Night',
			pictures: [
				{
					src: '/assets/images/project-disney-game-night-moana-icon.webp',
					alt: 'Disney Game Night Moana character artwork icon.',
				},
				{
					src: '/assets/images/project-disney-game-night-game-list.webp',
					alt: 'Disney Game Night mobile app game list showing Bingo, Friendly Feud, and Out Doo.',
				},
				{
					src: '/assets/images/project-disney-game-night-toy-story-menu.webp',
					alt: 'Disney Pixar Toy Story game screen with Woody, Buzz Lightyear, and a play button.',
				},
			],
			description:
				'A Catalyst Games contribution to the released Disney Game Night companion app, supporting digital party games for the board game experience.',
			tools: ['Unity', 'Mobile App', 'Party Game'],
			projectTags: {
				format: ['Game', 'Client Work'],
				platform: ['Mobile'],
				specialty: ['Party Game', 'Group Play'],
				tech: ['Unity', 'C#'],
			},
			sortDate: '2026-01-01',
			dateLabel: '2025 - 2026',
			yearLabel: '2025 - 2026',
			releaseStage: 'contributed',
			awards: [],
			actions: [
				{ type: 'website', href: 'https://disneygamenight.com/au-disney-game-night/bingo/app/app-downloader.php' },
				{ type: 'appStore', href: 'https://apps.apple.com/au/app/disney-game-night/id6754215412' },
				{ type: 'playStore', href: 'https://play.google.com/store/apps/details?id=com.CatalystGames.DisneyGameNight' },
			],
		},
		{
			id: 'super-raccoon',
			companyId: 'global-game-jam',
			product: 'Super Raccoon',
			pictures: [
				{
					src: '/assets/images/project-super-raccoon.webp',
					alt: 'Super Raccoon cover art with Ricky Raccoon wearing a red cape.',
				},
			],
			description:
				'You play as a Ricky Raccoon, an office worker with a secret identity. Escape the office in your super outfit to go save the day, but don’t get spotted, you’re too cute and famous for your own good.',
			tools: ['Unity', 'C#', 'Puzzle', 'Game Jam'],
			projectTags: {
				format: ['Game'],
				platform: ['Web', 'PC'],
				specialty: ['Puzzle'],
				tech: ['Unity', 'C#'],
			},
			sortDate: '2026-01-31',
			dateLabel: 'Jan 2026',
			yearLabel: '2026',
			releaseStage: 'contributed',
			awards: [],
			actions: [{ type: 'website', label: 'Play on itch.io', href: 'https://logan-baker.itch.io/super-raccoon' }],
		},
		/*
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
			],
			description: 'A co-op climbing game built around communication, trust, and smart movement.',
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
			description: 'Analyze Advance Wars By Web openings with win rates, data views, and strategy insights.',
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
		*/
		{
			id: '7-days-to-die-mods',
			companyId: 'daytime-devs',
			product: '7 Days to Die Mods',
			pictures: [
				{
					src: '/assets/images/project-7-days-to-die-mods.webp',
					alt: '7 Days to Die key art with survivors and zombies in a dark forest.',
				},
			],
			description:
				'A released collection of 7 Days to Die mods shared through GitHub for players who want to customize their survival experience.',
			tools: ['Modding', 'XML', 'Survival', 'GitHub'],
			projectTags: {
				format: ['Mod Collection'],
				platform: ['PC'],
				specialty: ['Modding', 'Survival'],
				tech: ['XML'],
			},
			sortDate: '2022-04-01',
			dateLabel: 'Apr 2022',
			yearLabel: '2022',
			releaseStage: 'released',
			awards: [],
			actions: [{ type: 'source', href: 'https://github.com/Daylight-V/DayMods-7D2D' }],
		},
		{
			id: 'super-bawk-bawk-chicken',
			companyId: 'daytime-devs',
			product: 'Super BAWK BAWK Chicken',
			pictures: [
				{
					src: '/assets/images/project-super-bawk-bawk-chicken.webp',
					alt: 'Super BAWK BAWK Chicken cover art showing Clucky beside the game logo.',
				},
				{
					src: '/assets/images/project-super-bawk-bawk-chicken-cannon-pass.webp',
					alt: 'Super BAWK BAWK Chicken shop screen showing Cannon Pass for sale from Wesley Wares.',
				},
				{
					src: '/assets/images/project-super-bawk-bawk-chicken-waterfall-run.webp',
					alt: 'Super BAWK BAWK Chicken gameplay with Clucky flying down a blue waterfall course.',
				},
				{
					src: '/assets/images/project-super-bawk-bawk-chicken-item-shop.webp',
					alt: 'Super BAWK BAWK Chicken item shop showing unlockable hats, bags, and boots.',
				},
				{
					src: '/assets/images/project-super-bawk-bawk-chicken-close-call.webp',
					alt: 'Super BAWK BAWK Chicken gameplay with Clucky running past rascals on a grassy hill.',
				},
				{
					src: '/assets/images/project-super-bawk-bawk-chicken-lava-cavern.webp',
					alt: 'Super BAWK BAWK Chicken gameplay with Clucky flying through a lava cavern.',
				},
			],
			description:
				'Run, jump, dash, and BAWK through a quirky infinite runner as Clucky, collecting whacky items, catching rowdy rascals, and chasing new high scores.',
			tools: ['Infinite Runner', 'Unity', 'Steam'],
			projectTags: {
				format: ['Game'],
				platform: ['PC', 'Steam', 'Mobile'],
				specialty: ['Arcade', 'Action'],
				tech: ['Unity', 'C#'],
			},
			sortDate: '2023-7-18',
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
		},
	] satisfies Project[],
} as const;
