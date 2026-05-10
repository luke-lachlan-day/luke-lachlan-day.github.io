const desktopQueryText = '(min-width: 821px)';
const phoneQueryText = '(max-width: 460px)';

const getAttr = (element: Element, name: string) => element.getAttribute(name) ?? '';
const getNumberAttr = (element: Element, name: string) => Number(getAttr(element, name)) || 0;
const wrapIndex = (index: number, total: number) => ((index % total) + total) % total;

const shortestOffset = (index: number, active: number, total: number) => {
	const rawOffset = index - active;
	const forwardOffset = rawOffset + total;
	const backwardOffset = rawOffset - total;

	return [rawOffset, forwardOffset, backwardOffset].reduce((best, offset) =>
		Math.abs(offset) < Math.abs(best) ? offset : best
	);
};

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
		window.setTimeout(enableWheelTransitions, 0);
		return;
	}

	window.requestAnimationFrame(() => {
		window.requestAnimationFrame(enableWheelTransitions);
	});
};

export const setupWheelController = (wheel: HTMLElement) => {
	if (wheel.dataset.wheelControllerReady === 'true') {
		return;
	}

	const cardSelector = wheel.dataset.wheelCardSelector ?? '[data-wheel-card]';
	const detailSelector = wheel.dataset.wheelDetailSelector ?? '';
	const indexAttr = wheel.dataset.wheelIndexAttr ?? 'data-wheel-index';
	const idAttr = wheel.dataset.wheelIdAttr ?? 'data-wheel-id';
	const changeEvent = wheel.dataset.wheelChangeEvent ?? '';
	const hashPrefix = wheel.dataset.wheelHashPrefix ?? '#';
	const syncHash = wheel.dataset.wheelHash !== 'false';
	const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelector));
	const details = detailSelector
		? Array.from(document.querySelectorAll<HTMLElement>(detailSelector))
		: [];
	const previousButton = wheel.querySelector<HTMLElement>('[data-wheel-prev]');
	const nextButton = wheel.querySelector<HTMLElement>('[data-wheel-next]');

	if (cards.length === 0) {
		return;
	}

	wheel.dataset.wheelControllerReady = 'true';

	const total = cards.length;
	let activeIndex = Number(wheel.getAttribute('data-active-index')) || 0;
	const desktopQuery = window.matchMedia(desktopQueryText);
	const phoneQuery = window.matchMedia(phoneQueryText);

	const getSlotRanges = () => {
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

	const updateWheel = () => {
		const { interactive, transition } = getSlotRanges();

		wheel.setAttribute('data-active-index', String(activeIndex));

		cards.forEach((card) => {
			const itemIndex = getNumberAttr(card, indexAttr);
			const slot = shortestOffset(itemIndex, activeIndex, total);
			const slotDistance = Math.abs(slot);
			const transitionSlot = slotDistance <= transition ? String(slot) : '';
			const isInteractive = slotDistance <= interactive;
			const isActive = itemIndex === activeIndex;

			if (transitionSlot) {
				card.setAttribute('data-slot', transitionSlot);
			} else {
				card.removeAttribute('data-slot');
			}

			card.setAttribute('aria-pressed', String(isActive));
			card.setAttribute('aria-hidden', String(!isInteractive));
			card.tabIndex = isInteractive ? 0 : -1;
		});

		details.forEach((detail) => {
			detail.hidden = getNumberAttr(detail, indexAttr) !== activeIndex;
		});

		if (changeEvent) {
			window.dispatchEvent(new CustomEvent(changeEvent, { detail: { activeIndex } }));
		}
	};

	const setActiveIndex = (index: number, updateHash = false) => {
		activeIndex = wrapIndex(index, total);
		updateWheel();

		if (!syncHash || !updateHash) {
			return;
		}

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

	const setActiveItemFromHash = () => {
		if (!syncHash) {
			return;
		}

		const itemId = getHashId(hashPrefix);

		if (!itemId) {
			return;
		}

		const matchingCard = cards.find((card) => getAttr(card, idAttr) === itemId);

		if (!matchingCard) {
			return;
		}

		setActiveIndex(getNumberAttr(matchingCard, indexAttr));
	};

	cards.forEach((card) => {
		card.addEventListener('click', () => {
			setActiveIndex(getNumberAttr(card, indexAttr), true);
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

export const setupWheelControllers = () => {
	document.querySelectorAll<HTMLElement>('[data-wheel-controller]').forEach(setupWheelController);
};
