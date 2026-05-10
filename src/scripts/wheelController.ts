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
	idAttr: string;
	changeEvent: string;
	detailRootSelector?: string;
	hashPrefix?: string;
	syncHash?: boolean;
};

const getAttr = (element: Element, name: string) => element.getAttribute(name) ?? '';
const getNumberAttr = (element: Element, name: string) => Number(getAttr(element, name)) || 0;
const wrapIndex = (index: number, total: number) => ((index % total) + total) % total;

const getHashId = (hashPrefix: string) => {
	const hash = window.location.hash.slice(hashPrefix.length);

	if (!hash) {
		return '';
	}

	try {
		return decodeURIComponent(hash);
	} catch {
		return hash;
	}
};

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

const updateCardState = (card: HTMLElement, activeIndex: number, total: number, slotRanges: WheelSlotRanges, indexAttr: string) => {
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

const writeActiveHash = (cards: HTMLElement[], activeIndex: number, idAttr: string, hashPrefix: string) => {
	const activeCard = cards[activeIndex];
	const itemId = activeCard ? getAttr(activeCard, idAttr) : '';

	if (!itemId) {
		return;
	}

	const nextHash = `${hashPrefix}${encodeURIComponent(itemId)}`;
	if (window.location.hash !== nextHash) {
		window.history.replaceState(null, '', nextHash);
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
	const hashPrefix = options.hashPrefix ?? '#';
	const syncHash = options.syncHash ?? true;
	let activeIndex = Number(wheel.getAttribute('data-active-index')) || 0;

	const updateWheel = () => {
		const slotRanges = getSlotRanges(desktopQuery, phoneQuery);

		wheel.setAttribute('data-active-index', String(activeIndex));
		cards.forEach((card) => updateCardState(card, activeIndex, total, slotRanges, options.indexAttr));
		updateDetailVisibility(details, activeIndex, options.indexAttr);
		dispatchWheelChange(options.changeEvent, activeIndex);
	};

	const setActiveIndex = (index: number, shouldUpdateHash = false) => {
		activeIndex = wrapIndex(index, total);
		updateWheel();

		if (syncHash && shouldUpdateHash) {
			writeActiveHash(cards, activeIndex, options.idAttr, hashPrefix);
		}
	};

	const setActiveItemFromHash = () => {
		if (!syncHash) {
			return;
		}

		const itemId = getHashId(hashPrefix);

		if (!itemId) {
			return;
		}

		const matchingCard = cards.find((card) => getAttr(card, options.idAttr) === itemId);

		if (!matchingCard) {
			return;
		}

		setActiveIndex(getNumberAttr(matchingCard, options.indexAttr));
	};

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			setActiveIndex(getNumberAttr(card, options.indexAttr), true);
		});

		card.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				setActiveIndex(activeIndex - 1);
			}

			if (event.key === 'ArrowRight') {
				event.preventDefault();
				setActiveIndex(activeIndex + 1);
			}
		});
	});

	previousButton?.addEventListener('click', () => setActiveIndex(activeIndex - 1));
	nextButton?.addEventListener('click', () => setActiveIndex(activeIndex + 1));
	desktopQuery.addEventListener('change', updateWheel);
	phoneQuery.addEventListener('change', updateWheel);
	window.addEventListener('hashchange', setActiveItemFromHash);

	setActiveItemFromHash();
	updateWheel();
	enableTransitionsAfterPaint(wheel);
};

export const setupWheelControllers = (options: WheelControllerOptions) => {
	document.querySelectorAll<HTMLElement>(options.wheelSelector).forEach((wheel) => {
		setupWheelController(wheel, options);
	});
};
