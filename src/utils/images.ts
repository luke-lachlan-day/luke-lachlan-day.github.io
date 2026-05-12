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
	'/assets/images/catalyst-think-digital-vr-cattle-vr.webp': { width: 960, height: 1280 },
	'/assets/images/company-athletics-south-australia.webp': { width: 225, height: 225 },
	'/assets/images/company-australian-army.webp': { width: 256, height: 184 },
	'/assets/images/company-catalyst-games.webp': { width: 182, height: 217 },
	'/assets/images/company-coastal-derrieres.webp': { width: 128, height: 128 },
	'/assets/images/company-daytime-devs.webp': { width: 224, height: 382 },
	'/assets/images/company-global-game-jam.webp': { width: 256, height: 256 },
	'/assets/images/company-power-net-it-solutions.webp': { width: 232, height: 256 },
	'/assets/images/company-sciworld.webp': { width: 246, height: 238 },
	'/assets/images/company-solo-back.webp': { width: 256, height: 256 },
	'/assets/images/company-solo-clear.webp': { width: 217, height: 250 },
	'/assets/images/company-university-of-adelaide.webp': { width: 250, height: 266 },
	'/assets/images/contact-mailbox-dark.webp': { width: 1390, height: 1132 },
	'/assets/images/contact-mailbox-light.webp': { width: 1390, height: 1132 },
	'/assets/images/experience-australian-army.webp': { width: 760, height: 478 },
	'/assets/images/experience-book.webp': { width: 760, height: 478 },
	'/assets/images/experience-catalyst-games-sagta-award-group.webp': { width: 750, height: 507 },
	'/assets/images/experience-catalyst-games-sagta-award-media-wall.webp': { width: 760, height: 507 },
	'/assets/images/experience-catalyst-games-studio-event-audience.webp': { width: 760, height: 507 },
	'/assets/images/experience-catalyst-games-studio-event-group.webp': { width: 760, height: 507 },
	'/assets/images/experience-power-net-it-solutions.webp': { width: 760, height: 478 },
	'/assets/images/experience-solo-dev.webp': { width: 760, height: 478 },
	'/assets/images/experience-state-level-athlete-gold-medal.webp': { width: 760, height: 507 },
	'/assets/images/experience-state-level-athlete-harbour.webp': { width: 760, height: 570 },
	'/assets/images/experience-state-level-athlete-silver-medal.webp': { width: 760, height: 507 },
	'/assets/images/experience-state-level-athlete-track.webp': { width: 570, height: 760 },
	'/assets/images/experience-university-of-adelaide.webp': { width: 760, height: 478 },
	'/assets/images/footer-frame-dark.webp': { width: 1983, height: 793 },
	'/assets/images/footer-frame-light.webp': { width: 1983, height: 793 },
	'/assets/images/footer-heart-dark.webp': { width: 136, height: 112 },
	'/assets/images/footer-heart-light.webp': { width: 136, height: 112 },
	'/assets/images/hero-dark.webp': { width: 1254, height: 1254 },
	'/assets/images/hero-light.webp': { width: 1254, height: 1254 },
	'/assets/images/project-7-days-to-die-mods.webp': { width: 616, height: 353 },
	'/assets/images/project-awbw.webp': { width: 1672, height: 941 },
	'/assets/images/project-beach-bums-capsule.webp': { width: 616, height: 353 },
	'/assets/images/project-beach-bums.webp': { width: 460, height: 215 },
	'/assets/images/project-chest.webp': { width: 672, height: 602 },
	'/assets/images/project-climbing.webp': { width: 1672, height: 941 },
	'/assets/images/project-coop-cat-temple-escape.webp': { width: 1672, height: 941 },
	'/assets/images/project-creature-sim.webp': { width: 960, height: 540 },
	'/assets/images/project-dungeons-and-dining-tables.webp': { width: 1672, height: 941 },
	'/assets/images/project-float-goat.webp': { width: 960, height: 540 },
	'/assets/images/project-luke-lachlan-day-website.webp': { width: 1672, height: 941 },
	'/assets/images/project-norse-quiz.webp': { width: 960, height: 540 },
	'/assets/images/project-petes-place.webp': { width: 1672, height: 941 },
	'/assets/images/project-pon.webp': { width: 960, height: 540 },
	'/assets/images/project-ponder.webp': { width: 960, height: 540 },
	'/assets/images/project-quizmas-quizes-and-games.webp': { width: 960, height: 540 },
	'/assets/images/project-rogue-hands.webp': { width: 960, height: 540 },
	'/assets/images/project-super-bawk-bawk-chicken.webp': { width: 1672, height: 941 },
	'/assets/images/project-super-raccoon.webp': { width: 630, height: 500 },
	'/assets/images/project-think-digital-vr-work-banner.webp': { width: 1672, height: 669 },
	'/assets/images/project-three-hearted-octopus.webp': { width: 1672, height: 941 },
	'/assets/images/project-trusty-battles.webp': { width: 960, height: 540 },
	'/assets/images/project-x-men.webp': { width: 480, height: 360 },
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

const getSrc = (assetOrSrc: Pick<ImageAsset, 'src'> | string) => (typeof assetOrSrc === 'string' ? assetOrSrc : assetOrSrc.src);

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
			assetOrSrc.width && assetOrSrc.height ? { width: assetOrSrc.width, height: assetOrSrc.height } : getImageDimensions(assetOrSrc);

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
