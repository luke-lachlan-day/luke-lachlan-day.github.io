import type { ImageAsset, LogoTone } from '../data/types';

const toneClassByValue = {
	light: 'light',
	dark: 'dark',
} satisfies Record<LogoTone, string>;

export const getCompanyLogoToneClass = (icon: ImageAsset): string | undefined => {
	const { logoTone } = icon;

	if (!logoTone) {
		return undefined;
	}

	return [
		'company-logo-tone',
		`company-logo-tone-light-${toneClassByValue[logoTone.light]}`,
		`company-logo-tone-dark-${toneClassByValue[logoTone.dark]}`,
	].join(' ');
};

export const getCompanyLogoClass = (baseClass: string | undefined, icon: ImageAsset): string | undefined => {
	const className = [baseClass, getCompanyLogoToneClass(icon)].filter(Boolean).join(' ');

	return className || undefined;
};
