import type { ProjectTags } from './types';

export const projectTagGroupOrder = ['format', 'platform', 'specialty', 'tech'] as const;

export type ProjectTagGroup = (typeof projectTagGroupOrder)[number];

export type ProjectTagRenderGroup = {
	group: ProjectTagGroup;
	tags: {
		label: string;
		styleKey: string;
	}[];
};

export const getProjectTagStyleKey = (tag: string) =>
	tag
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '') || 'default';

export const getProjectTagRenderGroups = (projectTags: ProjectTags): ProjectTagRenderGroup[] =>
	projectTagGroupOrder
		.map((group) => ({
			group,
			tags: (projectTags[group] ?? []).map((label) => ({
				label,
				styleKey: getProjectTagStyleKey(label),
			})),
		}))
		.filter((group) => group.tags.length > 0);
