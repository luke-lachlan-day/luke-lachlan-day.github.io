export type Link = {
	label: string;
	href: string;
	display: string;
	icon: string;
	contactIcon?: string;
	description?: string;
};

export type ExperienceRecognition = {
	name: string;
	awardedFrom: string;
	detail?: string;
	year: string;
	emblem: ImageAsset;
};

export type ExperienceItem = {
	id: string;
	role: string;
	cardRole?: string;
	company: string;
	companyId?: Company['id'];
	icon?: ImageAsset;
	pictures?: ImageAsset[];
	mediaNotice?: string;
	dateLabel: string;
	cardDateLabel: string;
	sortDate: string;
	summary: string;
	recognition?: ExperienceRecognition[];
	highlights: string[];
};

export type HeroContent = {
	title: string;
	lead?: string;
};

export type ContactHeroContent = {
	title: string;
	subtitle: string;
	summary: string[];
};

export type LogoTone = 'light' | 'dark';

export type ThemeLogoTone = {
	light: LogoTone;
	dark: LogoTone;
};

export type ImageAsset = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	decoding?: 'async' | 'auto' | 'sync';
	logoTone?: ThemeLogoTone;
};

export type ThemeImageAssets = {
	light: ImageAsset;
	dark: ImageAsset;
};

export type CompanyId =
	| 'daytime-devs'
	| 'catalyst-games'
	| 'coastal-derrieres'
	| 'global-game-jam'
	| 'sciworld'
	| 'avcon'
	| 'solo'
	| 'athletics-south-australia'
	| 'australian-army'
	| 'power-net-it-solutions'
	| 'university-of-adelaide';

export type Company = {
	id: CompanyId;
	name: string;
	icon: ImageAsset;
	website?: string;
	actions?: ProjectAction[];
};

export type ProjectReleaseStage = 'dev' | 'released' | 'shelved' | 'contributed';

export type ProjectAward = {
	name: string;
	awardedFrom: string;
	year: string;
	emblem: ImageAsset;
};

export type ProjectTags = {
	format: string[];
	platform: string[];
	specialty: string[];
	tech?: string[];
};

export type ProjectActionType =
	| 'website'
	| 'steam'
	| 'appStore'
	| 'playStore'
	| 'youtube'
	| 'source'
	| 'discord';

export type ProjectAction = {
	type: ProjectActionType;
	href: string;
	label?: string;
};

export type ProjectDetailSection = {
	title: string;
	items: string[];
};

export type Project = {
	id: string;
	companyId: Company['id'];
	product: string;
	pictures: ImageAsset[];
	description: string;
	mediaNotice?: string;
	detailSections?: ProjectDetailSection[];
	projectTags: ProjectTags;
	sortDate?: string;
	dateLabel: string;
	yearLabel: string;
	releaseStage: ProjectReleaseStage;
	showcasePriority?: number;
	awards: ProjectAward[];
	actions?: ProjectAction[];
};

export type FallingLeavesEffect = {
	enabled: boolean;
	goalAmount: number;
};
