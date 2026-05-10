import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const magickPath = path.join(repoRoot, '.tools', 'ImageMagick', 'magick.exe');

const readRepoFile = (relativePath) => readFileSync(path.join(repoRoot, relativePath), 'utf8');
const toAssetPath = (src) => path.join(repoRoot, 'public', src.replace(/^\//, ''));
const getProjectTagStyleKey = (tag) =>
	tag
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '') || 'default';

const parseImageDimensions = () => {
	const imagesSource = readRepoFile('src/utils/images.ts');
	const dimensions = new Map();
	const dimensionPattern = /'([^']+)':\s*\{\s*width:\s*(\d+),\s*height:\s*(\d+)\s*\}/g;
	let match;

	while ((match = dimensionPattern.exec(imagesSource))) {
		dimensions.set(match[1], {
			width: Number(match[2]),
			height: Number(match[3]),
		});
	}

	return dimensions;
};

const getActualDimensions = (assetPath) => {
	const output = execFileSync(magickPath, ['identify', '-format', '%w %h', assetPath], { encoding: 'utf8' }).trim();
	const [width, height] = output.split(/\s+/).map(Number);

	return { width, height };
};

const checkImageDimensions = () => {
	const issues = [];

	if (!existsSync(magickPath)) {
		return [`ImageMagick was not found at ${path.relative(repoRoot, magickPath)}.`];
	}

	for (const [src, expected] of parseImageDimensions()) {
		const assetPath = toAssetPath(src);

		if (!existsSync(assetPath)) {
			issues.push(`${src} is listed in imageDimensionsBySrc but the file does not exist.`);
			continue;
		}

		const actual = getActualDimensions(assetPath);
		if (actual.width !== expected.width || actual.height !== expected.height) {
			issues.push(`${src} is ${actual.width}x${actual.height}, expected ${expected.width}x${expected.height}.`);
		}
	}

	return issues;
};

const parseProjectTagStyleKeys = () => {
	const projectsSource = readRepoFile('src/data/projects.ts');
	const tagLabels = new Set();
	const projectTagsPattern = /projectTags:\s*\{([\s\S]*?)\n\t\t\t\}/g;
	const tagGroupPattern = /\b(?:format|platform|specialty|tech):\s*\[([\s\S]*?)\]/g;
	const stringPattern = /'((?:\\'|[^'])*)'/g;
	let projectTagsMatch;

	while ((projectTagsMatch = projectTagsPattern.exec(projectsSource))) {
		let tagGroupMatch;

		while ((tagGroupMatch = tagGroupPattern.exec(projectTagsMatch[1]))) {
			let stringMatch;

			while ((stringMatch = stringPattern.exec(tagGroupMatch[1]))) {
				tagLabels.add(stringMatch[1]);
			}
		}
	}

	return new Set(Array.from(tagLabels).map(getProjectTagStyleKey));
};

const parseCssTagStyleKeys = () => {
	const tagStylesSource = readRepoFile('src/styles/components/project-tags.css');
	const styles = new Set();
	const selectorPattern = /data-tag-style='([^']+)'/g;
	let match;

	while ((match = selectorPattern.exec(tagStylesSource))) {
		styles.add(match[1]);
	}

	return styles;
};

const checkProjectTagStyles = () => {
	const usedTagStyles = parseProjectTagStyleKeys();
	const cssTagStyles = parseCssTagStyleKeys();
	const missing = Array.from(usedTagStyles)
		.filter((styleKey) => styleKey !== 'default' && !cssTagStyles.has(styleKey))
		.sort();
	const unused = Array.from(cssTagStyles)
		.filter((styleKey) => !usedTagStyles.has(styleKey))
		.sort();

	return {
		issues: missing.map((styleKey) => `Project tag style "${styleKey}" is used in project data but has no CSS selector.`),
		warnings: unused.map((styleKey) => `Project tag style "${styleKey}" has a CSS selector but is not used by current project data.`),
	};
};

const imageIssues = checkImageDimensions();
const tagStyleResult = checkProjectTagStyles();
const issues = [...imageIssues, ...tagStyleResult.issues];

if (tagStyleResult.warnings.length > 0) {
	console.warn('Asset audit warnings:');
	for (const warning of tagStyleResult.warnings) {
		console.warn(`- ${warning}`);
	}
}

if (issues.length > 0) {
	console.error('Asset audit failed:');
	for (const issue of issues) {
		console.error(`- ${issue}`);
	}
	process.exit(1);
}

console.log('Asset dimensions and project tag style coverage are valid.');
