const quickListSelector = '[data-showcase-quick-list]';
const toggleSelector = '[data-showcase-quick-toggle]';
const panelSelector = '[data-showcase-quick-panel]';
const linkSelector = '[data-showcase-quick-link]';
const initializedAttr = 'data-showcase-quick-list-ready';
const openAttr = 'data-showcase-quick-list-open';
const indexAttr = 'data-showcase-index';

type ShowcaseChangeEvent = CustomEvent<{ activeIndex: number }>;

const getHashId = (hash: string) => {
	const hashValue = hash.slice(1);

	if (!hashValue) {
		return '';
	}

	try {
		return decodeURIComponent(hashValue);
	} catch {
		return hashValue;
	}
};

const setCurrentLink = (links: HTMLAnchorElement[], activeIndex: number) => {
	links.forEach((link) => {
		const linkIndex = Number(link.getAttribute(indexAttr));

		if (linkIndex === activeIndex) {
			link.setAttribute('aria-current', 'true');
		} else {
			link.removeAttribute('aria-current');
		}
	});
};

const syncCurrentLinkFromHash = (links: HTMLAnchorElement[]) => {
	const activeHashId = getHashId(window.location.hash);

	if (!activeHashId) {
		return;
	}

	const activeLink = links.find((link) => getHashId(link.hash) === activeHashId);

	if (!activeLink) {
		return;
	}

	setCurrentLink(links, Number(activeLink.getAttribute(indexAttr)));
};

const setupShowcaseQuickList = (quickList: HTMLElement) => {
	if (quickList.hasAttribute(initializedAttr)) {
		return;
	}

	const toggle = quickList.querySelector<HTMLButtonElement>(toggleSelector);
	const panel = quickList.querySelector<HTMLElement>(panelSelector);
	const links = Array.from(quickList.querySelectorAll<HTMLAnchorElement>(linkSelector));

	if (!toggle || !panel || links.length === 0) {
		return;
	}

	quickList.setAttribute(initializedAttr, 'true');

	const setOpen = (isOpen: boolean) => {
		panel.hidden = !isOpen;
		toggle.setAttribute('aria-expanded', String(isOpen));
		quickList.toggleAttribute(openAttr, isOpen);
	};

	toggle.addEventListener('click', () => {
		setOpen(panel.hasAttribute('hidden'));
	});

	links.forEach((link) => {
		link.addEventListener('click', () => {
			setOpen(false);
		});
	});

	quickList.addEventListener('keydown', (event) => {
		if (event.key !== 'Escape' || panel.hasAttribute('hidden')) {
			return;
		}

		event.preventDefault();
		setOpen(false);
		toggle.focus();
	});

	document.addEventListener('click', (event) => {
		if (panel.hasAttribute('hidden') || quickList.contains(event.target as Node)) {
			return;
		}

		setOpen(false);
	});

	const changeEvent = quickList.dataset.showcaseChangeEvent;
	if (changeEvent) {
		window.addEventListener(changeEvent, (event) => {
			const activeIndex = (event as ShowcaseChangeEvent).detail?.activeIndex;

			if (typeof activeIndex === 'number') {
				setCurrentLink(links, activeIndex);
			}
		});
	}

	syncCurrentLinkFromHash(links);
};

export const setupShowcaseQuickLists = () => {
	document.querySelectorAll<HTMLElement>(quickListSelector).forEach(setupShowcaseQuickList);
};
