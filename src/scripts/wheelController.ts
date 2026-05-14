import { getShortestWheelOffset } from '../utils/wheelSlots';

const desktopQueryText = '(min-width: 821px)';
const phoneQueryText = '(max-width: 560px)';

type WheelSlotRanges = {
	interactive: number;
	transition: number;
};

type WheelElements = {
	cards: HTMLElement[];
	details: HTMLElement[];
	previousButton: HTMLElement | null;
	nextButton: HTMLElement | null;
};

export type WheelControllerOptions = {
	wheelSelector: string;
	cardSelector: string;
	detailSelector: string;
	indexAttr: string;
	changeEvent: string;
	hrefAttr?: string;
	detailRootSelector?: string;
};

const defaultHrefAttr = 'data-showcase-href';
const getAttr = (element: Element, name: string) => element.getAttribute(name) ?? '';
const getNumberAttr = (element: Element, name: string) => Number(getAttr(element, name)) || 0;
const wrapIndex = (index: number, total: number) => ((index % total) + total) % total;

const enableTransitionsAfterPaint = (wheel: HTMLElement) => {
	const enableWheelTransitions = () => {
		wheel.removeAttribute('data-wheel-initializing');
	};

	if (!('requestAnimationFrame' in window)) {
		setTimeout(enableWheelTransitions, 0);
		return;
	}

	window.requestAnimationFrame(() => {
		window.requestAnimationFrame(enableWheelTransitions);
	});
};

const getSlotRanges = (desktopQuery: MediaQueryList, phoneQuery: MediaQueryList): WheelSlotRanges => {
	if (phoneQuery.matches) {
		return {
			interactive: 0,
			transition: 1,
		};
	}

	return desktopQuery.matches
		? {
				interactive: 2,
				transition: 3,
			}
		: {
				interactive: 1,
				transition: 2,
			};
};

const getDetailRoot = (wheel: HTMLElement, detailRootSelector?: string) => {
	if (!detailRootSelector) {
		return wheel.parentElement;
	}

	return wheel.closest<HTMLElement>(detailRootSelector);
};

const getWheelElements = (wheel: HTMLElement, options: WheelControllerOptions): WheelElements => {
	const detailRoot = getDetailRoot(wheel, options.detailRootSelector);

	return {
		cards: Array.from(wheel.querySelectorAll<HTMLElement>(options.cardSelector)),
		details: detailRoot ? Array.from(detailRoot.querySelectorAll<HTMLElement>(options.detailSelector)) : [],
		previousButton: wheel.querySelector<HTMLElement>('[data-wheel-prev]'),
		nextButton: wheel.querySelector<HTMLElement>('[data-wheel-next]'),
	};
};

const updateCardState = (
	card: HTMLElement,
	activeIndex: number,
	total: number,
	slotRanges: WheelSlotRanges,
	indexAttr: string
) => {
	const itemIndex = getNumberAttr(card, indexAttr);
	const slot = getShortestWheelOffset(itemIndex, activeIndex, total);
	const slotDistance = Math.abs(slot);
	const transitionSlot = slotDistance <= slotRanges.transition ? String(slot) : '';
	const isInteractive = slotDistance <= slotRanges.interactive;
	const isActive = itemIndex === activeIndex;

	if (transitionSlot) {
		card.setAttribute('data-slot', transitionSlot);
	} else {
		card.removeAttribute('data-slot');
	}

	card.setAttribute('aria-pressed', String(isActive));
	card.setAttribute('aria-hidden', String(!isInteractive));
	card.inert = !isInteractive;
	card.tabIndex = isInteractive ? 0 : -1;
};

const updateDetailVisibility = (details: HTMLElement[], activeIndex: number, indexAttr: string) => {
	details.forEach((detail) => {
		detail.hidden = getNumberAttr(detail, indexAttr) !== activeIndex;
	});
};

const dispatchWheelChange = (changeEvent: string, activeIndex: number) => {
	if (!changeEvent) {
		return;
	}

	window.dispatchEvent(new CustomEvent(changeEvent, { detail: { activeIndex } }));
};

const writeActiveRoute = (cards: HTMLElement[], activeIndex: number, hrefAttr: string) => {
	const activeCard = cards[activeIndex];
	const itemHref = activeCard ? getAttr(activeCard, hrefAttr) : '';

	if (!itemHref) {
		return;
	}

	const nextUrl = new URL(itemHref, window.location.origin);
	const nextPath = `${nextUrl.pathname}${nextUrl.search}`;
	const currentPath = `${window.location.pathname}${window.location.search}`;

	if (currentPath !== nextPath || window.location.hash) {
		window.history.replaceState(null, '', nextPath);
	}
};

export const setupWheelController = (wheel: HTMLElement, options: WheelControllerOptions) => {
	if (wheel.dataset.wheelControllerReady === 'true') {
		return;
	}

	const { cards, details, previousButton, nextButton } = getWheelElements(wheel, options);

	if (cards.length === 0) {
		return;
	}

	wheel.dataset.wheelControllerReady = 'true';

	const total = cards.length;
	const desktopQuery = window.matchMedia(desktopQueryText);
	const phoneQuery = window.matchMedia(phoneQueryText);
	const hrefAttr = options.hrefAttr ?? defaultHrefAttr;
	let activeIndex = Number(wheel.getAttribute('data-active-index')) || 0;

	const updateWheel = () => {
		const slotRanges = getSlotRanges(desktopQuery, phoneQuery);

		wheel.setAttribute('data-active-index', String(activeIndex));
		cards.forEach((card) => updateCardState(card, activeIndex, total, slotRanges, options.indexAttr));
		updateDetailVisibility(details, activeIndex, options.indexAttr);
		dispatchWheelChange(options.changeEvent, activeIndex);
	};

	const setActiveIndex = (index: number, shouldUpdateRoute = false) => {
		const nextIndex = wrapIndex(index, total);

		if (nextIndex === activeIndex) {
			if (shouldUpdateRoute) {
				writeActiveRoute(cards, activeIndex, hrefAttr);
			}
			return;
		}

		activeIndex = nextIndex;
		updateWheel();

		if (shouldUpdateRoute) {
			writeActiveRoute(cards, activeIndex, hrefAttr);
		}
	};

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			setActiveIndex(getNumberAttr(card, options.indexAttr), true);
		});

		card.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				setActiveIndex(activeIndex - 1, true);
			}

			if (event.key === 'ArrowRight') {
				event.preventDefault();
				setActiveIndex(activeIndex + 1, true);
			}
		});
	});

	previousButton?.addEventListener('click', () => setActiveIndex(activeIndex - 1, true));
	nextButton?.addEventListener('click', () => setActiveIndex(activeIndex + 1, true));
	desktopQuery.addEventListener('change', updateWheel);
	phoneQuery.addEventListener('change', updateWheel);
	window.addEventListener(options.changeEvent, (event) => {
		const requestedIndex = (event as CustomEvent<{ activeIndex?: number }>).detail?.activeIndex;

		if (typeof requestedIndex === 'number') {
			setActiveIndex(requestedIndex);
		}
	});

	updateWheel();
	enableTransitionsAfterPaint(wheel);
};

export const setupWheelControllers = (options: WheelControllerOptions) => {
	document.querySelectorAll<HTMLElement>(options.wheelSelector).forEach((wheel) => {
		setupWheelController(wheel, options);
	});
};
