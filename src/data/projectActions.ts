import type { ProjectAction, ProjectActionType } from './profile';

export type ProjectActionMeta = {
	label: string;
	icon: string;
};

export type ProjectActionLink = ProjectActionMeta & {
	href: string;
};

export const projectActionMeta = {
	website: {
		label: 'Website',
		icon: '/assets/icons/web.svg',
	},
	webApp: {
		label: 'Open Web App',
		icon: '/assets/icons/web.svg',
	},
	browserExtension: {
		label: 'Extension Page',
		icon: '/assets/icons/web.svg',
	},
	steam: {
		label: 'Steam Page',
		icon: '/assets/icons/steam.svg',
	},
	appStore: {
		label: 'App Store',
		icon: '/assets/icons/app-store.svg',
	},
	playStore: {
		label: 'Google Play',
		icon: '/assets/icons/play-store.svg',
	},
	youtube: {
		label: 'Watch Video',
		icon: '/assets/icons/youtube.svg',
	},
	source: {
		label: 'Source Code',
		icon: '/assets/icons/github.svg',
	},
} satisfies Record<ProjectActionType, ProjectActionMeta>;

export const getProjectActionLink = (action: ProjectAction): ProjectActionLink => {
	const meta = projectActionMeta[action.type];

	return {
		href: action.href,
		label: action.label ?? meta.label,
		icon: meta.icon,
	};
};

export const getProjectActionLinks = (actions: ProjectAction[] = []) => actions.map(getProjectActionLink);
