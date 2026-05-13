import { getCompanyById } from './companies';
import { getProjectActionLinks, type ProjectActionLink } from './projectActions';
import type { Company, ExperienceItem, ImageAsset, ProjectAction } from './types';

export type ExperienceShowcaseItem = {
	item: ExperienceItem;
	company: Company | undefined;
	icon: ImageAsset | undefined;
	pictures: ImageAsset[];
	media: ImageAsset | undefined;
	fallbackLabel: string;
	hasHighlights: boolean;
	companyActionLinks: ProjectActionLink[];
};

type ExperienceShowcaseInput = {
	items: readonly ExperienceItem[];
	companies: readonly Company[];
};

export const getExperienceShowcaseItems = ({
	items,
	companies,
}: ExperienceShowcaseInput): ExperienceShowcaseItem[] => {
	const companyById = getCompanyById(companies);

	return [...items]
		.sort((itemA, itemB) => itemB.sortDate.localeCompare(itemA.sortDate))
		.map((item) => {
			const company = item.companyId ? companyById.get(item.companyId) : undefined;
			const icon = item.icon ?? company?.icon;
			const pictures = item.pictures ?? [];
			const companyActions: ProjectAction[] = [
				...(company?.website ? [{ type: 'website' as const, href: company.website }] : []),
				...(company?.actions ?? []),
			];

			return {
				item,
				company,
				icon,
				pictures,
				media: pictures[0] ?? icon,
				fallbackLabel: item.company.slice(0, 1),
				hasHighlights: item.highlights.length > 0,
				companyActionLinks: getProjectActionLinks(companyActions),
			};
		});
};
