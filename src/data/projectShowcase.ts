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

const getCompanyById = (companies: readonly Company[]) => new Map(companies.map((company) => [company.id, company]));

const sortProjectsForShowcase = (projects: readonly Project[]) =>
	[...projects].sort((projectA, projectB) => {
		const releaseStageRank =
			projectShowcaseReleaseStageRank[projectA.releaseStage] - projectShowcaseReleaseStageRank[projectB.releaseStage];

		return releaseStageRank || projectB.sortDate.localeCompare(projectA.sortDate);
	});

const getLatestExperienceByCompanyId = (experienceItems: readonly ExperienceItem[]) => {
	const experienceByCompanyId = new Map<string, ExperienceItem>();

	for (const item of [...experienceItems].sort((itemA, itemB) => itemB.sortDate.localeCompare(itemA.sortDate))) {
		if (item.companyId && !experienceByCompanyId.has(item.companyId)) {
			experienceByCompanyId.set(item.companyId, item);
		}
	}

	return experienceByCompanyId;
};

export const getProjectShowcaseItems = ({ projects, companies, experienceItems }: ProjectShowcaseInput): ProjectShowcaseItem[] => {
	const companyById = getCompanyById(companies);
	const experienceByCompanyId = getLatestExperienceByCompanyId(experienceItems);
	const projectItems = sortProjectsForShowcase(projects);

	return projectItems.map((project) => {
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
