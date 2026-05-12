import type { Company, ExperienceItem, ImageAsset } from './types';

export type ExperienceShowcaseItem = {
	item: ExperienceItem;
	company: Company | undefined;
	icon: ImageAsset | undefined;
	pictures: ImageAsset[];
	media: ImageAsset | undefined;
	fallbackLabel: string;
};

type ExperienceShowcaseInput = {
	items: readonly ExperienceItem[];
	companies: readonly Company[];
};

const getCompanyById = (companies: readonly Company[]) => new Map(companies.map((company) => [company.id, company]));

export const getExperienceShowcaseItems = ({ items, companies }: ExperienceShowcaseInput): ExperienceShowcaseItem[] => {
	const companyById = getCompanyById(companies);

	return [...items]
		.sort((itemA, itemB) => itemB.sortDate.localeCompare(itemA.sortDate))
		.map((item) => {
			const company = item.companyId ? companyById.get(item.companyId) : undefined;
			const icon = item.icon ?? company?.icon;
			const pictures = item.pictures ?? [];

			return {
				item,
				company,
				icon,
				pictures,
				media: pictures[0] ?? icon,
				fallbackLabel: item.company.slice(0, 1),
			};
		});
};
