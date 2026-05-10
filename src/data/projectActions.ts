import type { ProjectAction, ProjectActionType } from './types';

export type ProjectActionMeta = {
	label: string;
	icon: string;
};

export type ProjectActionVariant = 'primary' | 'secondary';

export type ProjectActionLink = ProjectActionMeta & {
	type: ProjectActionType;
	href: string;
	variant: ProjectActionVariant;
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

const projectActionPrimaryPriority = [
	'youtube',
	'website',
	'webApp',
	'steam',
	'browserExtension',
	'source',
	'appStore',
	'playStore',
] satisfies ProjectActionType[];

const getPrimaryActionIndex = (actions: ProjectAction[]) => {
	for (const actionType of projectActionPrimaryPriority) {
		const actionIndex = actions.findIndex((action) => action.type === actionType);

		if (actionIndex >= 0) {
			return actionIndex;
		}
	}

	return actions.length > 0 ? 0 : -1;
};

export const getProjectActionLink = (action: ProjectAction, variant: ProjectActionVariant = 'secondary'): ProjectActionLink => {
	const meta = projectActionMeta[action.type];

	return {
		type: action.type,
		href: action.href,
		label: action.label ?? meta.label,
		icon: meta.icon,
		variant,
	};
};

export const getProjectActionLinks = (actions: ProjectAction[] = []) => {
	const primaryActionIndex = getPrimaryActionIndex(actions);

	return actions.map((action, actionIndex) => getProjectActionLink(action, actionIndex === primaryActionIndex ? 'primary' : 'secondary'));
};
