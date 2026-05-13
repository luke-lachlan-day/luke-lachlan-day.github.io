type LeafLayerName = 'back' | 'mid' | 'front';
type NumberRange = readonly [number, number];

type LeafLayerSettings = {
	name: LeafLayerName;
	share: number;
	minSize: number;
	maxSize: number;
	fallSpeed: NumberRange;
	swayAmplitude: NumberRange;
	swayRate: NumberRange;
	scrollDepth: number;
	windDepth: number;
};

type LeafLayerState = LeafLayerSettings & {
	element: HTMLElement | null;
	count: number;
};

type LeafProfile = {
	count: number;
	shares: Record<LeafLayerName, number>;
};

type Viewport = {
	width: number;
	height: number;
};

type LeafState = {
	element: HTMLElement;
	layer: LeafLayerState;
	size: number;
	fallSpeed: number;
	swayAmplitude: number;
	swayRate: number;
	phase: number;
	spinRate: number;
	startRotation: number;
	tilt: number;
	bornAt: number;
	startX: number;
	startY: number;
};

const layerSettings: LeafLayerSettings[] = [
	{
		name: 'back',
		share: 0.36,
		minSize: 28,
		maxSize: 40,
		fallSpeed: [18, 28],
		swayAmplitude: [16, 32],
		swayRate: [0.42, 0.66],
		scrollDepth: 0.1,
		windDepth: 0.35,
	},
	{
		name: 'mid',
		share: 0.42,
		minSize: 40,
		maxSize: 56,
		fallSpeed: [26, 40],
		swayAmplitude: [26, 48],
		swayRate: [0.5, 0.78],
		scrollDepth: 0.25,
		windDepth: 0.68,
	},
	{
		name: 'front',
		share: 0.22,
		minSize: 58,
		maxSize: 82,
		fallSpeed: [34, 52],
		swayAmplitude: [38, 70],
		swayRate: [0.58, 0.88],
		scrollDepth: 0.45,
		windDepth: 1,
	},
];

const windSpeed = 10;
const random = (min: number, max: number) => min + Math.random() * (max - min);
const getViewport = (): Viewport => ({
	width: window.innerWidth || document.documentElement.clientWidth || 1,
	height: window.innerHeight || document.documentElement.clientHeight || 1,
});
const getLeafProfileKey = (profile: LeafProfile) =>
	[profile.count, profile.shares.back, profile.shares.mid, profile.shares.front].join(':');

const createLeafState = (element: HTMLElement, layer: LeafLayerState): LeafState => ({
	element,
	layer,
	size: 0,
	fallSpeed: 0,
	swayAmplitude: 0,
	swayRate: 0,
	phase: 0,
	spinRate: 0,
	startRotation: 0,
	tilt: 0,
	bornAt: 0,
	startX: 0,
	startY: 0,
});

const afterInitialPaint = (callback: () => void) => {
	window.requestAnimationFrame(() => {
		window.requestAnimationFrame(() => {
			if ('requestIdleCallback' in window) {
				window.requestIdleCallback(callback, { timeout: 1200 });
				return;
			}

			setTimeout(callback, 0);
		});
	});
};

export const setupFallingLeaves = () => {
	const root = document.querySelector<HTMLElement>('[data-falling-leaves]');
	if (!root) return;

	const pageRoot = document.documentElement;
	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	let animationFrame = 0;
	let isRunning = false;

	if (motionQuery.matches) {
		root.setAttribute('hidden', '');
		return;
	}

	const maxLeafCount = Number.parseInt(root.dataset.leafCount ?? '0', 10);
	const layers: LeafLayerState[] = layerSettings.map((settings) => ({
		...settings,
		element: root.querySelector<HTMLElement>(`[data-leaf-layer="${settings.name}"]`),
		count: 0,
	}));

	let leaves: LeafState[] = [];
	let scrollY = window.scrollY;
	let viewport = getViewport();
	let activeLeafProfileKey = '';
	let hasCreatedLeaves = false;

	const getResponsiveLeafProfile = (): LeafProfile => {
		if (viewport.width <= 560) {
			return {
				count: Math.min(maxLeafCount, 12),
				shares: {
					back: 0.5,
					mid: 0.34,
					front: 0.16,
				},
			};
		}

		if (viewport.width <= 820) {
			return {
				count: Math.min(maxLeafCount, 20),
				shares: {
					back: 0.42,
					mid: 0.4,
					front: 0.18,
				},
			};
		}

		return {
			count: maxLeafCount,
			shares: {
				back: 0.36,
				mid: 0.42,
				front: 0.22,
			},
		};
	};

	const getLeafPosition = (leaf: LeafState, age: number) => {
		// Depth increases from back to front: screenY = worldY - scrollY * scrollDepth.
		const x =
			leaf.startX +
			Math.sin(age * leaf.swayRate + leaf.phase) * leaf.swayAmplitude +
			age * windSpeed * leaf.layer.windDepth;
		const worldY = leaf.startY + age * leaf.fallSpeed;
		const screenY = worldY - scrollY * leaf.layer.scrollDepth;

		return { x, screenY };
	};

	const resetLeaf = (leaf: LeafState, now: number, seedOnscreen = false) => {
		const viewportScale = Math.min(1, Math.max(0.72, viewport.width / 720));
		const size = random(leaf.layer.minSize, leaf.layer.maxSize) * viewportScale;
		const fallSpeed = random(leaf.layer.fallSpeed[0], leaf.layer.fallSpeed[1]);
		const swayAmplitude = random(leaf.layer.swayAmplitude[0], leaf.layer.swayAmplitude[1]);
		const swayRate = random(leaf.layer.swayRate[0], leaf.layer.swayRate[1]);
		const phase = random(0, Math.PI * 2);
		const spinRate = random(-26, 38);
		const startRotation = random(0, 360);
		const tilt = random(-12, 12);
		const age = seedOnscreen ? random(0, Math.max(8, viewport.height / fallSpeed)) : 0;
		const targetY = seedOnscreen
			? random(-size, viewport.height + size)
			: random(-viewport.height * 0.24 - size, -size);
		const targetX = seedOnscreen
			? random(-size * 0.5, viewport.width - size * 0.2)
			: random(-viewport.width * 0.18 - size, viewport.width * 0.9);

		Object.assign(leaf, {
			size,
			fallSpeed,
			swayAmplitude,
			swayRate,
			phase,
			spinRate,
			startRotation,
			tilt,
			bornAt: now - age * 1000,
			startX:
				targetX - Math.sin(age * swayRate + phase) * swayAmplitude - age * windSpeed * leaf.layer.windDepth,
			startY: targetY + scrollY * leaf.layer.scrollDepth - age * fallSpeed,
		});

		leaf.element.style.setProperty('--leaf-size', `${size.toFixed(2)}px`);
	};

	const assignLayerCounts = () => {
		const profile = getResponsiveLeafProfile();
		let assignedCount = 0;

		layers.forEach((layer, index) => {
			if (index === layers.length - 1) {
				layer.count = 0;
				return;
			}

			layer.count = Math.round(profile.count * (profile.shares[layer.name] ?? layer.share));
			assignedCount += layer.count;
		});

		layers[layers.length - 1].count = Math.max(0, profile.count - assignedCount);
		return getLeafProfileKey(profile);
	};

	const createLeaves = (now: number) => {
		layers.forEach((layer) => {
			layer.element?.replaceChildren();
		});
		leaves = [];
		activeLeafProfileKey = assignLayerCounts();

		layers.forEach((layer) => {
			if (!layer.element) return;

			for (let index = 0; index < layer.count; index += 1) {
				const leaf = document.createElement('span');
				leaf.className = 'falling-leaf';
				layer.element.append(leaf);

				const leafState = createLeafState(leaf, layer);
				resetLeaf(leafState, now, true);
				leaves.push(leafState);
			}
		});
	};

	const render = (now: number) => {
		leaves.forEach((leaf) => {
			const age = Math.max(0, (now - leaf.bornAt) / 1000);
			let { x, screenY } = getLeafPosition(leaf, age);

			if (screenY > viewport.height + leaf.size || x > viewport.width + leaf.size) {
				resetLeaf(leaf, now);
				({ x, screenY } = getLeafPosition(leaf, 0));
			}

			const rotation = leaf.startRotation + age * leaf.spinRate;
			const tilt = Math.sin(age * leaf.swayRate + leaf.phase) * leaf.tilt;
			leaf.element.style.transform = `translate3d(${x.toFixed(2)}px, ${screenY.toFixed(
				2
			)}px, 0) rotate(${rotation.toFixed(2)}deg) skewX(${tilt.toFixed(2)}deg)`;
		});

		animationFrame = window.requestAnimationFrame(render);
	};
	const stop = () => {
		if (!isRunning) return;
		window.cancelAnimationFrame(animationFrame);
		animationFrame = 0;
		isRunning = false;
	};
	const start = () => {
		if (isRunning || motionQuery.matches || pageRoot.dataset.leaves === 'off') return;
		if (!hasCreatedLeaves) {
			createLeaves(performance.now());
			hasCreatedLeaves = true;
		}
		root.removeAttribute('hidden');
		scrollY = window.scrollY;
		viewport = getViewport();
		isRunning = true;
		animationFrame = window.requestAnimationFrame(render);
	};
	const syncLeavesState = () => {
		if (motionQuery.matches || pageRoot.dataset.leaves === 'off') {
			root.setAttribute('hidden', '');
			stop();
			return;
		}

		start();
	};

	window.addEventListener(
		'scroll',
		() => {
			scrollY = window.scrollY;
		},
		{ passive: true }
	);

	window.addEventListener(
		'resize',
		() => {
			viewport = getViewport();
			scrollY = window.scrollY;
			if (hasCreatedLeaves && getLeafProfileKey(getResponsiveLeafProfile()) !== activeLeafProfileKey) {
				createLeaves(performance.now());
			}
		},
		{ passive: true }
	);

	const handleMotionChange = () => {
		syncLeavesState();
	};

	motionQuery.addEventListener('change', handleMotionChange);
	const leavesObserver = new MutationObserver(syncLeavesState);
	leavesObserver.observe(pageRoot, {
		attributes: true,
		attributeFilter: ['data-leaves'],
	});

	afterInitialPaint(syncLeavesState);
};
