const themeStorageKey = 'luke-lachlan-day.theme';
const leavesStorageKey = 'luke-lachlan-day.fallingLeaves';
const fallbackThemeColors = {
	light: '#fff9f0',
	dark: '#06111f',
} as const;

type Theme = 'light' | 'dark';
type LeavesState = 'on' | 'off';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';
const isLeavesState = (value: string | null): value is LeavesState => value === 'on' || value === 'off';

const getSavedTheme = () => {
	try {
		const saved = localStorage.getItem(themeStorageKey);
		return isTheme(saved) ? saved : null;
	} catch {
		return null;
	}
};

const getSavedLeaves = () => {
	try {
		const saved = localStorage.getItem(leavesStorageKey);
		return isLeavesState(saved) ? saved : null;
	} catch {
		return null;
	}
};

export const setupSitePreferences = () => {
	const root = document.documentElement;

	if (root.dataset.sitePreferencesReady === 'true') {
		return;
	}

	root.dataset.sitePreferencesReady = 'true';

	const themeToggle = document.querySelector<HTMLElement>('[data-theme-toggle]');
	const leavesToggle = document.querySelector<HTMLElement>('[data-leaves-toggle]');
	const themeToggleLabel = document.querySelector<HTMLElement>('[data-theme-toggle-label]');
	const leavesToggleLabel = document.querySelector<HTMLElement>('[data-leaves-toggle-label]');
	const currentPageLinks = document.querySelectorAll<HTMLAnchorElement>('[data-current-page-link]');
	const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"][data-theme-color]');
	const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

	const systemTheme = (): Theme => (systemQuery.matches ? 'dark' : 'light');
	const updateThemeColor = (theme: Theme) => {
		if (!themeColor) {
			return;
		}
		themeColor.content =
			theme === 'dark'
				? (themeColor.dataset.darkColor ?? fallbackThemeColors.dark)
				: (themeColor.dataset.lightColor ?? fallbackThemeColors.light);
	};
	const isCurrentUrl = (url: URL) =>
		url.origin === window.location.origin &&
		url.pathname === window.location.pathname &&
		url.search === window.location.search &&
		url.hash === window.location.hash;
	const setTheme = (theme: Theme, persist: boolean) => {
		root.dataset.theme = theme;
		updateThemeColor(theme);
		themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
		if (themeToggleLabel) {
			themeToggleLabel.textContent = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
		}
		if (persist) {
			try {
				localStorage.setItem(themeStorageKey, theme);
			} catch {
				// Keep the live theme change even if browser storage is unavailable.
			}
		}
	};
	const setLeaves = (state: LeavesState | string | undefined, persist: boolean) => {
		const leavesState: LeavesState = state === 'off' ? 'off' : 'on';
		root.dataset.leaves = leavesState;
		leavesToggle?.setAttribute('aria-pressed', String(leavesState === 'on'));
		if (leavesToggleLabel) {
			leavesToggleLabel.textContent = leavesState === 'on' ? 'Turn leaves off' : 'Turn leaves on';
		}
		if (persist) {
			try {
				localStorage.setItem(leavesStorageKey, leavesState);
			} catch {
				// Keep the live leaves change even if browser storage is unavailable.
			}
		}
	};
	const enableThemeTransitions = () => {
		root.dataset.themeReady = 'true';
	};
	const enableTransitionsAfterInitialPaint = () => {
		if (!('requestAnimationFrame' in window)) {
			setTimeout(enableThemeTransitions, 0);
			return;
		}
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(enableThemeTransitions);
		});
	};

	setTheme(getSavedTheme() ?? systemTheme(), false);
	setLeaves(getSavedLeaves() ?? root.dataset.leaves, false);
	enableTransitionsAfterInitialPaint();

	currentPageLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			if (
				event.defaultPrevented ||
				event.button !== 0 ||
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey ||
				event.altKey ||
				link.hasAttribute('target') ||
				link.hasAttribute('download')
			) {
				return;
			}

			const url = new URL(link.href, window.location.href);
			if (isCurrentUrl(url)) {
				event.preventDefault();
			}
		});
	});

	themeToggle?.addEventListener('click', () => {
		enableThemeTransitions();
		setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
	});

	leavesToggle?.addEventListener('click', () => {
		enableThemeTransitions();
		setLeaves(root.dataset.leaves === 'off' ? 'on' : 'off', true);
	});

	systemQuery.addEventListener('change', () => {
		if (!getSavedTheme()) {
			enableThemeTransitions();
			setTheme(systemTheme(), false);
		}
	});
};
