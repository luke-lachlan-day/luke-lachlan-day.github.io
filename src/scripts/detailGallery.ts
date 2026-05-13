const galleryTiming = {
	idleMs: 10000,
	intervalMs: 4000,
	transitionMs: 900,
};

type DetailGalleryElements = {
	detail: HTMLElement | null;
	images: HTMLElement[];
	controls: HTMLElement[];
	dots: HTMLElement[];
};

type DetailGalleryTimers = {
	idle: number;
	interval: number;
	transition: number;
};

type DetailGalleryPauseState = {
	isHovered: boolean;
	hasFocus: boolean;
	prefersReducedMotion: boolean;
	isDetailHidden: boolean;
};

type DetailGalleryOptions = {
	gallerySelector: string;
	detailItemSelector: string;
	detailChangeEvent: string;
};

const getNumberAttr = (element: Element, name: string) => Number(element.getAttribute(name)) || 0;
const getGalleryIndex = (gallery: HTMLElement) => Number(gallery.getAttribute('data-gallery-index')) || 0;
const isElementHidden = (element: HTMLElement | null) => Boolean(element?.hidden);
const wrapIndex = (index: number, total: number) => ((index % total) + total) % total;

const getDetailGalleryElements = (
	gallery: HTMLElement,
	detailItemSelector: string
): DetailGalleryElements => ({
	detail: gallery.closest<HTMLElement>(detailItemSelector),
	images: Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-image]')),
	controls: Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-step]')),
	dots: Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-dot]')),
});

const clearAutoplayTimers = (timers: DetailGalleryTimers) => {
	window.clearTimeout(timers.idle);
	window.clearInterval(timers.interval);
	timers.idle = 0;
	timers.interval = 0;
};

const clearExitingImageStates = (images: HTMLElement[]) => {
	images.forEach((image) => {
		if (image.getAttribute('data-gallery-state') === 'exiting') {
			image.removeAttribute('data-gallery-state');
		}
	});
};

const setImageState = (
	image: HTMLElement,
	activeIndex: number,
	previousIndex: number,
	prefersReducedMotion: boolean
) => {
	const imageIndex = getNumberAttr(image, 'data-gallery-image-index');
	const isActive = imageIndex === activeIndex;
	const isExiting = !prefersReducedMotion && previousIndex !== activeIndex && imageIndex === previousIndex;

	if (isActive) {
		image.setAttribute('data-gallery-state', 'active');
	} else if (isExiting) {
		image.setAttribute('data-gallery-state', 'exiting');
	} else {
		image.removeAttribute('data-gallery-state');
	}

	image.setAttribute('aria-hidden', String(!isActive));
};

const setDotState = (dot: HTMLElement, activeIndex: number) => {
	const dotIndex = getNumberAttr(dot, 'data-gallery-dot-index');

	if (dotIndex === activeIndex) {
		dot.setAttribute('aria-current', 'true');
		return;
	}

	dot.removeAttribute('aria-current');
};

const isAutoplayPaused = (state: DetailGalleryPauseState) =>
	state.isHovered || state.hasFocus || state.prefersReducedMotion || state.isDetailHidden;

const setupDetailGallery = (
	gallery: HTMLElement,
	options: DetailGalleryOptions,
	reducedMotionQuery: MediaQueryList
) => {
	if (gallery.dataset.detailGalleryReady === 'true') {
		return;
	}

	const { detail, images, controls, dots } = getDetailGalleryElements(gallery, options.detailItemSelector);

	if (images.length <= 1) {
		return;
	}

	gallery.dataset.detailGalleryReady = 'true';
	gallery.style.setProperty('--project-gallery-transition-ms', `${galleryTiming.transitionMs}ms`);

	const timers: DetailGalleryTimers = {
		idle: 0,
		interval: 0,
		transition: 0,
	};
	const pauseState: DetailGalleryPauseState = {
		isHovered: false,
		hasFocus: gallery.contains(document.activeElement),
		prefersReducedMotion: reducedMotionQuery.matches,
		isDetailHidden: isElementHidden(detail),
	};

	const setGalleryIndex = (nextIndex: number) => {
		const previousIndex = getGalleryIndex(gallery);
		const activeIndex = wrapIndex(nextIndex, images.length);

		gallery.setAttribute('data-gallery-index', String(activeIndex));
		window.clearTimeout(timers.transition);

		images.forEach((image) => {
			setImageState(image, activeIndex, previousIndex, pauseState.prefersReducedMotion);
		});
		dots.forEach((dot) => setDotState(dot, activeIndex));

		if (!pauseState.prefersReducedMotion && previousIndex !== activeIndex) {
			timers.transition = window.setTimeout(() => {
				clearExitingImageStates(images);
			}, galleryTiming.transitionMs);
		}
	};

	const startInterval = () => {
		clearAutoplayTimers(timers);

		if (isAutoplayPaused(pauseState)) {
			return;
		}

		timers.interval = window.setInterval(() => {
			setGalleryIndex(getGalleryIndex(gallery) + 1);
		}, galleryTiming.intervalMs);
	};

	const scheduleIdleAdvance = () => {
		clearAutoplayTimers(timers);

		if (isAutoplayPaused(pauseState)) {
			return;
		}

		timers.idle = window.setTimeout(() => {
			setGalleryIndex(getGalleryIndex(gallery) + 1);
			startInterval();
		}, galleryTiming.idleMs);
	};

	const resetAutoplay = () => {
		clearAutoplayTimers(timers);
		scheduleIdleAdvance();
	};

	const navigateManually = (nextIndex: number) => {
		setGalleryIndex(nextIndex);
		resetAutoplay();
	};

	controls.forEach((control) => {
		control.addEventListener('click', () => {
			const step = getNumberAttr(control, 'data-gallery-step');
			navigateManually(getGalleryIndex(gallery) + step);
		});
	});

	dots.forEach((dot) => {
		dot.addEventListener('click', () => {
			navigateManually(getNumberAttr(dot, 'data-gallery-dot-index'));
		});
	});

	gallery.addEventListener('mouseenter', () => {
		pauseState.isHovered = true;
		clearAutoplayTimers(timers);
	});

	gallery.addEventListener('mouseleave', () => {
		pauseState.isHovered = false;
		resetAutoplay();
	});

	gallery.addEventListener('focusin', () => {
		pauseState.hasFocus = true;
		clearAutoplayTimers(timers);
	});

	gallery.addEventListener('focusout', () => {
		window.setTimeout(() => {
			pauseState.hasFocus = gallery.contains(document.activeElement);

			if (!pauseState.hasFocus) {
				resetAutoplay();
			}
		}, 0);
	});

	reducedMotionQuery.addEventListener('change', () => {
		pauseState.prefersReducedMotion = reducedMotionQuery.matches;
		setGalleryIndex(getGalleryIndex(gallery));
		resetAutoplay();
	});

	window.addEventListener(options.detailChangeEvent, () => {
		pauseState.isDetailHidden = isElementHidden(detail);
		resetAutoplay();
	});

	setGalleryIndex(0);
	scheduleIdleAdvance();
};

export const setupDetailGalleries = (options: DetailGalleryOptions) => {
	const galleries = Array.from(document.querySelectorAll<HTMLElement>(options.gallerySelector));
	const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

	galleries.forEach((gallery) => {
		setupDetailGallery(gallery, options, reducedMotionQuery);
	});
};
