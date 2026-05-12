import { getProjectActionLinks, type ProjectActionLink } from './projectActions';
import { getProjectTagRenderGroups, type ProjectTagRenderGroup } from './projectTags';
import type { Company, ExperienceItem, ImageAsset, Project } from './types';

export type ProjectReleaseStageLabel = 'In Dev' | 'Released' | 'Shelved' | 'Contributed';

export type ProjectShowcaseItem = {
	project: Project;
	company: Company | undefined;
	companyExperienceHref: string | undefined;
	primaryPicture: ImageAsset | undefined;
	releaseStageLabel: ProjectReleaseStageLabel;
	actionLinks: ProjectActionLink[];
	tagGroups: ProjectTagRenderGroup[];
};

type ProjectShowcaseInput = {
	featuredProjectIds: readonly string[];
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

const getCompanyById = (companies: readonly Company[]) => new Map(companies.map((company) => [company.id, company]));

const getLatestExperienceByCompanyId = (experienceItems: readonly ExperienceItem[]) => {
	const experienceByCompanyId = new Map<string, ExperienceItem>();

	for (const item of [...experienceItems].sort((itemA, itemB) => itemB.sortDate.localeCompare(itemA.sortDate))) {
		if (item.companyId && !experienceByCompanyId.has(item.companyId)) {
			experienceByCompanyId.set(item.companyId, item);
		}
	}

	return experienceByCompanyId;
};

export const getProjectShowcaseItems = ({
	featuredProjectIds,
	projects,
	companies,
	experienceItems,
}: ProjectShowcaseInput): ProjectShowcaseItem[] => {
	const companyById = getCompanyById(companies);
	const experienceByCompanyId = getLatestExperienceByCompanyId(experienceItems);
	const boostedProjectIds = new Set<string>(featuredProjectIds);
	const projectItems = [...projects];
	const boostedProjects = featuredProjectIds
		.map((projectId) => projectItems.find((project) => project.id === projectId))
		.filter((project): project is Project => Boolean(project));
	const remainingProjects = projectItems
		.filter((project) => !boostedProjectIds.has(project.id))
		.sort((projectA, projectB) => projectB.sortDate.localeCompare(projectA.sortDate));

	return [...boostedProjects, ...remainingProjects].map((project) => {
		const company = companyById.get(project.companyId);
		const companyExperience = experienceByCompanyId.get(project.companyId);

		return {
			project,
			company,
			companyExperienceHref: companyExperience ? `/experience/#${encodeURIComponent(companyExperience.id)}` : undefined,
			primaryPicture: project.pictures[0],
			releaseStageLabel: projectReleaseStageLabels[project.releaseStage],
			actionLinks: getProjectActionLinks(project.actions),
			tagGroups: getProjectTagRenderGroups(project.projectTags),
		};
	});
};
