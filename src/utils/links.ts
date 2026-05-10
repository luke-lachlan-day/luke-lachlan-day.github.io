export type LinkAttrs = {
	target?: '_blank';
	rel?: string;
};

export const isExternalHref = (href: string) => href.startsWith('http://') || href.startsWith('https://');

export const getExternalLinkAttrs = (href: string): LinkAttrs =>
	isExternalHref(href)
		? {
				target: '_blank',
				rel: 'noopener noreferrer',
			}
		: {};
