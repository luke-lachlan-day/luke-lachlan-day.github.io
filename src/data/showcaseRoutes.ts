type ShowcaseItemWithId = {
	id: string;
};

const formatShowcaseHref = (basePath: string, itemId: string) => `${basePath}${encodeURIComponent(itemId)}/`;

export const getProjectHref = (projectId: string) => formatShowcaseHref('/projects/', projectId);

export const getExperienceHref = (experienceId: string) => formatShowcaseHref('/experience/', experienceId);

export const getSelectedShowcaseIndex = <Item extends ShowcaseItemWithId>(
	items: readonly Item[],
	selectedId: string | undefined
) => {
	if (!selectedId) {
		return 0;
	}

	const selectedIndex = items.findIndex((item) => item.id === selectedId);

	return selectedIndex >= 0 ? selectedIndex : 0;
};
