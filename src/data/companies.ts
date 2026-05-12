import type { Company } from './types';

export const companies = [
	{
		id: 'daytime-devs',
		name: 'Daytime Devs',
		website: 'https://www.daytimedevs.com/',
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
		id: 'global-game-jam',
		name: 'Global Game Jam',
		icon: {
			src: '/assets/images/company-global-game-jam.webp',
			alt: 'Global Game Jam round logo.',
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
		id: 'avcon',
		name: 'AVCon',
		icon: {
			src: '/assets/images/company-avcon.webp',
			alt: 'AVCon Anime and Gaming Festival logo.',
			logoTone: {
				light: 'dark',
				dark: 'light',
			},
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
		id: 'athletics-south-australia',
		name: 'Athletics South Australia',
		icon: {
			src: '/assets/images/company-athletics-south-australia.webp',
			alt: 'Athletics South Australia bird logo.',
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
] satisfies Company[];
