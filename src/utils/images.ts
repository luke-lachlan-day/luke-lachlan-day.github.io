import type { ImageAsset } from '../data/types';

export type ImageDecoding = 'async' | 'auto' | 'sync';

export type ImageDimensions = {
	width: number;
	height: number;
};

export type ImageAttrs = Partial<ImageDimensions> & {
	decoding?: ImageDecoding;
};

export const imageDimensionsBySrc = {
	'/assets/images/company-athletics-south-australia.webp': { width: 225, height: 225 },
	'/assets/images/company-australian-army.webp': { width: 256, height: 184 },
	'/assets/images/company-catalyst-games.webp': { width: 182, height: 217 },
	'/assets/images/company-coastal-derrieres.webp': { width: 128, height: 128 },
	'/assets/images/company-daytime-devs.webp': { width: 224, height: 382 },
	'/assets/images/company-avcon.webp': { width: 256, height: 82 },
	'/assets/images/company-global-game-jam.webp': { width: 256, height: 256 },
	'/assets/images/company-power-net-it-solutions.webp': { width: 232, height: 256 },
	'/assets/images/company-sciworld.webp': { width: 246, height: 238 },
	'/assets/images/company-solo-back.webp': { width: 256, height: 256 },
	'/assets/images/company-solo-clear.webp': { width: 217, height: 250 },
	'/assets/images/company-university-of-adelaide.webp': { width: 250, height: 266 },
	'/assets/images/contact-mailbox-dark.webp': { width: 1390, height: 1132 },
	'/assets/images/contact-mailbox-light.webp': { width: 1390, height: 1132 },
	'/assets/images/experience-australian-army.webp': { width: 760, height: 478 },
	'/assets/images/experience-australian-army-equipment-display.webp': { width: 760, height: 570 },
	'/assets/images/experience-australian-army-field-vehicles.webp': { width: 760, height: 428 },
	'/assets/images/experience-australian-army-wallaby.webp': { width: 565, height: 760 },
	'/assets/images/experience-avcon-invader.webp': { width: 275, height: 183 },
	'/assets/images/experience-book.webp': { width: 760, height: 478 },
	'/assets/images/experience-catalyst-games-sagta-award-group.webp': { width: 750, height: 422 },
	'/assets/images/experience-catalyst-games-studio-event-group.webp': { width: 760, height: 428 },
	'/assets/images/experience-catalyst-games-agricultural-vr-training-filming.webp': {
		width: 760,
		height: 428,
	},
	'/assets/images/experience-daytime-devs-avcon-costumes.webp': { width: 760, height: 428 },
	'/assets/images/experience-daytime-devs-booth-team.webp': { width: 760, height: 428 },
	'/assets/images/experience-daytime-devs-convention.webp': { width: 760, height: 428 },
	'/assets/images/experience-daytime-devs-pax-aus-team.webp': { width: 760, height: 428 },
	'/assets/images/experience-daytime-devs-sasa-team.webp': { width: 760, height: 428 },
	'/assets/images/experience-maths-tutoring.webp': { width: 760, height: 428 },
	'/assets/images/experience-power-net-it-solutions.webp': { width: 760, height: 478 },
	'/assets/images/experience-sciworld-starlab.webp': { width: 300, height: 169 },
	'/assets/images/experience-solo-dev.webp': { width: 760, height: 428 },
	'/assets/images/experience-state-level-athlete-harbour.webp': { width: 760, height: 428 },
	'/assets/images/experience-state-level-athlete-track.webp': { width: 760, height: 428 },
	'/assets/images/experience-university-of-adelaide.webp': { width: 760, height: 428 },
	'/assets/images/footer-frame-dark.webp': { width: 1983, height: 793 },
	'/assets/images/footer-frame-light.webp': { width: 1983, height: 793 },
	'/assets/images/footer-heart-dark.webp': { width: 136, height: 112 },
	'/assets/images/footer-heart-light.webp': { width: 136, height: 112 },
	'/assets/images/hero-dark.webp': { width: 1254, height: 1254 },
	'/assets/images/hero-light.webp': { width: 1254, height: 1254 },
	'/assets/images/project-7-days-to-die-mods.webp': { width: 608, height: 342 },
	'/assets/images/project-beach-bums-beach-search.webp': { width: 1672, height: 941 },
	'/assets/images/project-beach-bums-beachgoers-before-wave.webp': { width: 1672, height: 941 },
	'/assets/images/project-beach-bums-capsule.webp': { width: 616, height: 346 },
	'/assets/images/project-beach-bums-tidal-wave.webp': { width: 1672, height: 941 },
	'/assets/images/project-chest.webp': { width: 672, height: 602 },
	'/assets/images/project-days-siege-beta.webp': { width: 350, height: 350 },
	'/assets/images/project-days-siege-easy.webp': { width: 350, height: 350 },
	'/assets/images/project-disney-game-night-game-list.webp': { width: 646, height: 1440 },
	'/assets/images/project-disney-game-night-moana-icon.webp': { width: 506, height: 506 },
	'/assets/images/project-disney-game-night-toy-story-menu.webp': { width: 1672, height: 773 },
	'/assets/images/project-dungeons-and-dining-tables-cavern-boss.webp': { width: 1672, height: 940 },
	'/assets/images/project-dungeons-and-dining-tables-dungeon-combat.webp': { width: 1672, height: 939 },
	'/assets/images/project-dungeons-and-dining-tables-furniture-menu.webp': { width: 1672, height: 935 },
	'/assets/images/project-dungeons-and-dining-tables.webp': { width: 608, height: 342 },
	'/assets/images/project-luke-lachlan-day-website.webp': { width: 1672, height: 941 },
	'/assets/images/project-petes-place-battle-result.webp': { width: 610, height: 1079 },
	'/assets/images/project-petes-place-eastern-banjo-frog.webp': { width: 1080, height: 2400 },
	'/assets/images/project-petes-place.webp': { width: 1232, height: 693 },
	'/assets/images/project-super-bawk-bawk-chicken-cannon-pass.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-bawk-bawk-chicken-close-call.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-bawk-bawk-chicken-item-shop.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-bawk-bawk-chicken-lava-cavern.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-bawk-bawk-chicken-waterfall-run.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-bawk-bawk-chicken.webp': { width: 1672, height: 940 },
	'/assets/images/project-super-raccoon.webp': { width: 630, height: 500 },
	'/assets/images/project-agricultural-vr-training-cattle-simulation.webp': { width: 1640, height: 923 },
	'/assets/images/project-unreleased-treasures.webp': { width: 1672, height: 941 },
	'/assets/images/project-x-men.webp': { width: 480, height: 348 },
	'/assets/emblems/athletics-south-australia.webp': { width: 157, height: 77 },
	'/assets/emblems/army-bushfire-assist.webp': { width: 256, height: 256 },
	'/assets/emblems/award-medal-base.webp': { width: 288, height: 512 },
	'/assets/emblems/daytime-devs.webp': { width: 486, height: 308 },
	'/assets/icons/contact-discord.webp': { width: 290, height: 222 },
	'/assets/icons/contact-email.webp': { width: 280, height: 255 },
	'/assets/icons/contact-github.webp': { width: 292, height: 283 },
	'/assets/icons/contact-instagram.webp': { width: 279, height: 284 },
	'/assets/icons/contact-linkedin.webp': { width: 289, height: 294 },
	'/assets/icons/contact-youtube.webp': { width: 292, height: 198 },
} satisfies Record<string, ImageDimensions>;

const getSrc = (assetOrSrc: Pick<ImageAsset, 'src'> | string) =>
	typeof assetOrSrc === 'string' ? assetOrSrc : assetOrSrc.src;

export const getImageDimensions = (assetOrSrc: Pick<ImageAsset, 'src'> | string) => {
	const src = getSrc(assetOrSrc);
	return imageDimensionsBySrc[src as keyof typeof imageDimensionsBySrc];
};

export const getImageAttrs = (
	assetOrSrc: Pick<ImageAsset, 'src' | 'width' | 'height' | 'decoding'> | string,
	decoding: ImageDecoding = 'async'
): ImageAttrs => {
	if (typeof assetOrSrc !== 'string') {
		const dimensions =
			assetOrSrc.width && assetOrSrc.height
				? { width: assetOrSrc.width, height: assetOrSrc.height }
				: getImageDimensions(assetOrSrc);

		return {
			...dimensions,
			decoding: assetOrSrc.decoding ?? decoding,
		};
	}

	return {
		...getImageDimensions(assetOrSrc),
		decoding,
	};
};
