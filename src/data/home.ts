export const home = {
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
		{ label: 'Get in Touch', href: '/contact/', icon: '/assets/icons/email.svg' },
	],
	featuredProjectIds: ['petes-place', 'coop-climbing', 'super-bawk-bawk-chicken'],
} as const;
