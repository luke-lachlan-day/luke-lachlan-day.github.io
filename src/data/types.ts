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
	pictures?: ImageAsset[];
	dateLabel: string;
	cardDateLabel: string;
	dateHeading?: string;
	sortDate: string;
	context: string;
	summary: string;
	recognition?: ExperienceRecognition[];
	highlights: string[];
	tools: string[];
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

export type ImageAsset = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	decoding?: 'async' | 'auto' | 'sync';
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
	| 'solo'
	| 'athletics-south-australia'
	| 'australian-army'
	| 'power-net-it-solutions'
	| 'university-of-adelaide';

export type Company = {
	id: CompanyId;
	name: string;
	icon: ImageAsset;
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

export type ProjectActionType = 'website' | 'webApp' | 'browserExtension' | 'steam' | 'appStore' | 'playStore' | 'youtube' | 'source';

export type ProjectAction = {
	type: ProjectActionType;
	href: string;
	label?: string;
};

export type Project = {
	id: string;
	companyId: Company['id'];
	product: string;
	pictures: ImageAsset[];
	description: string;
	tools: string[];
	projectTags: ProjectTags;
	sortDate: string;
	dateLabel: string;
	yearLabel: string;
	releaseStage: ProjectReleaseStage;
	awards: ProjectAward[];
	actions?: ProjectAction[];
};

export type FallingLeavesEffect = {
	enabled: boolean;
	goalAmount: number;
};
