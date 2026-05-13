import { getCompanyById } from './companies';
import { getProjectActionLinks, type ProjectActionLink } from './projectActions';
import { getProjectTagRenderGroups, type ProjectTagRenderGroup } from './projectTags';
import type { Company, ExperienceItem, ImageAsset, Project } from './types';

export type ProjectReleaseStageLabel = 'In Dev' | 'Released' | 'Shelved' | 'Contributed';

export type ProjectDetailSectionView = {
	id: string;
	title: string;
	items: string[];
};

export type ProjectShowcaseItem = {
	project: Project;
	company: Company | undefined;
	companyExperienceHref: string | undefined;
	primaryPicture: ImageAsset | undefined;
	fallbackLabel: string;
	releaseStageLabel: ProjectReleaseStageLabel;
	actionLinks: ProjectActionLink[];
	tagGroups: ProjectTagRenderGroup[];
	detailSections: ProjectDetailSectionView[];
};

type ProjectShowcaseInput = {
	projects: readonly Project[];
	companies: readonly Company[];
	experienceItems: readonly ExperienceItem[];
};

export const projectReleaseStageLabels = {
	dev: 'In Dev',
	released: 'Released',
	shelved: 'Shelved',
	contributed: 'Contributed',
} satisfies Record<Project['releaseStage'], ProjectReleaseStageLabel>;

const projectShowcaseReleaseStageRank = {
	released: 0,
	contributed: 0,
	shelved: 1,
	dev: 2,
} satisfies Record<Project['releaseStage'], number>;

const defaultShowcasePriority = Number.POSITIVE_INFINITY;

const compareOptionalSortDatesDescending = (sortDateA: string | undefined, sortDateB: string | undefined) => {
	if (sortDateA && sortDateB) {
		return sortDateB.localeCompare(sortDateA);
	}

	if (sortDateA) {
		return -1;
	}

	if (sortDateB) {
		return 1;
	}

	return 0;
};

const sortProjectsForShowcase = (projects: readonly Project[]) =>
	[...projects].sort((projectA, projectB) => {
		const showcasePriority =
			(projectA.showcasePriority ?? defaultShowcasePriority) -
			(projectB.showcasePriority ?? defaultShowcasePriority);
		const releaseStageRank =
			projectShowcaseReleaseStageRank[projectA.releaseStage] -
			projectShowcaseReleaseStageRank[projectB.releaseStage];
		const sortDate = compareOptionalSortDatesDescending(projectA.sortDate, projectB.sortDate);

		return (
			showcasePriority || releaseStageRank || sortDate || projectA.product.localeCompare(projectB.product)
		);
	});

const getProjectDetailSectionId = (projectId: string, sectionTitle: string) =>
	`project-detail-${projectId}-${sectionTitle
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')}`;

const getProjectDetailSections = (project: Project): ProjectDetailSectionView[] =>
	(project.detailSections ?? []).map((section) => ({
		id: getProjectDetailSectionId(project.id, section.title),
		title: section.title,
		items: section.items,
	}));

const getLatestExperienceByCompanyId = (experienceItems: readonly ExperienceItem[]) => {
	const experienceByCompanyId = new Map<string, ExperienceItem>();

	for (const item of [...experienceItems].sort((itemA, itemB) =>
		itemB.sortDate.localeCompare(itemA.sortDate)
	)) {
		if (item.companyId && !experienceByCompanyId.has(item.companyId)) {
			experienceByCompanyId.set(item.companyId, item);
		}
	}

	return experienceByCompanyId;
};

export const getProjectShowcaseItems = ({
	projects,
	companies,
	experienceItems,
}: ProjectShowcaseInput): ProjectShowcaseItem[] => {
	const companyById = getCompanyById(companies);
	const experienceByCompanyId = getLatestExperienceByCompanyId(experienceItems);
	const projectItems = sortProjectsForShowcase(projects);

	return projectItems.map((project) => {
		const company = companyById.get(project.companyId);
		const companyExperience = experienceByCompanyId.get(project.companyId);

		return {
			project,
			company,
			companyExperienceHref: companyExperience
				? `/experience/#${encodeURIComponent(companyExperience.id)}`
				: undefined,
			primaryPicture: project.pictures[0],
			fallbackLabel: project.product.slice(0, 1),
			releaseStageLabel: projectReleaseStageLabels[project.releaseStage],
			actionLinks: getProjectActionLinks(project.actions),
			tagGroups: getProjectTagRenderGroups(project.projectTags),
			detailSections: getProjectDetailSections(project),
		};
	});
};
