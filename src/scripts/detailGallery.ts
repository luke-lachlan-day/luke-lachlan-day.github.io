const galleryTiming = {
	idleMs: 10000,
	intervalMs: 4000,
	transitionMs: 900,
};

type DetailGalleryOptions = {
	gallerySelector: string;
	detailChangeEvent: string;
};

export const setupDetailGalleries = ({ gallerySelector, detailChangeEvent }: DetailGalleryOptions) => {
	const galleries = Array.from(document.querySelectorAll<HTMLElement>(gallerySelector));
	const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

	galleries.forEach((gallery) => {
		if (gallery.dataset.detailGalleryReady === 'true') {
			return;
		}

		const detail = gallery.closest<HTMLElement>('[data-project-detail-item], [data-experience-detail-item]');
		const images = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-image]'));
		const controls = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-step]'));
		const dots = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-dot]'));

		if (images.length <= 1) {
			return;
		}

		gallery.dataset.detailGalleryReady = 'true';
		gallery.style.setProperty('--project-gallery-transition-ms', `${galleryTiming.transitionMs}ms`);

		let idleTimer = 0;
		let intervalTimer = 0;
		let transitionTimer = 0;
		let isHovered = false;
		let hasFocus = gallery.contains(document.activeElement);
		let prefersReducedMotion = reducedMotionQuery.matches;
		let isDetailHidden = detail?.hidden ?? false;

		const wrapIndex = (index: number) => ((index % images.length) + images.length) % images.length;
		const setGalleryIndex = (nextIndex: number) => {
			const previousIndex = Number(gallery.getAttribute('data-gallery-index')) || 0;
			const activeIndex = wrapIndex(nextIndex);
			gallery.setAttribute('data-gallery-index', String(activeIndex));
			window.clearTimeout(transitionTimer);

			images.forEach((image) => {
				const imageIndex = Number(image.getAttribute('data-gallery-image-index'));
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
			});

			dots.forEach((dot) => {
				const dotIndex = Number(dot.getAttribute('data-gallery-dot-index'));
				const isActive = dotIndex === activeIndex;

				if (isActive) {
					dot.setAttribute('aria-current', 'true');
				} else {
					dot.removeAttribute('aria-current');
				}
			});

			if (!prefersReducedMotion && previousIndex !== activeIndex) {
				transitionTimer = window.setTimeout(() => {
					images.forEach((image) => {
						if (image.getAttribute('data-gallery-state') === 'exiting') {
							image.removeAttribute('data-gallery-state');
						}
					});
				}, galleryTiming.transitionMs);
			}
		};
		const clearTimers = () => {
			window.clearTimeout(idleTimer);
			window.clearInterval(intervalTimer);
			idleTimer = 0;
			intervalTimer = 0;
		};
		const isPaused = () => isHovered || hasFocus || prefersReducedMotion || isDetailHidden;
		const startInterval = () => {
			clearTimers();

			if (isPaused()) {
				return;
			}

			intervalTimer = window.setInterval(() => {
				const currentIndex = Number(gallery.getAttribute('data-gallery-index')) || 0;
				setGalleryIndex(currentIndex + 1);
			}, galleryTiming.intervalMs);
		};
		const scheduleIdleAdvance = () => {
			clearTimers();

			if (isPaused()) {
				return;
			}

			idleTimer = window.setTimeout(() => {
				const currentIndex = Number(gallery.getAttribute('data-gallery-index')) || 0;
				setGalleryIndex(currentIndex + 1);
				startInterval();
			}, galleryTiming.idleMs);
		};
		const resetAutoplay = () => {
			clearTimers();
			scheduleIdleAdvance();
		};
		const navigateManually = (nextIndex: number) => {
			setGalleryIndex(nextIndex);
			resetAutoplay();
		};

		controls.forEach((control) => {
			control.addEventListener('click', () => {
				const currentIndex = Number(gallery.getAttribute('data-gallery-index')) || 0;
				const step = Number(control.getAttribute('data-gallery-step')) || 0;
				navigateManually(currentIndex + step);
			});
		});

		dots.forEach((dot) => {
			dot.addEventListener('click', () => {
				navigateManually(Number(dot.getAttribute('data-gallery-dot-index')) || 0);
			});
		});

		gallery.addEventListener('mouseenter', () => {
			isHovered = true;
			clearTimers();
		});

		gallery.addEventListener('mouseleave', () => {
			isHovered = false;
			resetAutoplay();
		});

		gallery.addEventListener('focusin', () => {
			hasFocus = true;
			clearTimers();
		});

		gallery.addEventListener('focusout', () => {
			window.setTimeout(() => {
				hasFocus = gallery.contains(document.activeElement);

				if (!hasFocus) {
					resetAutoplay();
				}
			}, 0);
		});

		reducedMotionQuery.addEventListener('change', () => {
			prefersReducedMotion = reducedMotionQuery.matches;
			setGalleryIndex(Number(gallery.getAttribute('data-gallery-index')) || 0);
			resetAutoplay();
		});

		window.addEventListener(detailChangeEvent, () => {
			isDetailHidden = detail?.hidden ?? false;
			resetAutoplay();
		});

		setGalleryIndex(0);
		scheduleIdleAdvance();
	});
};
