import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const magickPath = path.join(repoRoot, '.tools', 'ImageMagick', 'magick.exe');
const sourceDir = path.join(repoRoot, 'assets-source', 'images');
const outputDir = path.join(repoRoot, 'public', 'assets', 'images');

const assets = [
	{
		source: 'catalyst-think-digital-vr-cattle-vr.jpg',
		output: 'catalyst-think-digital-vr-cattle-vr.webp',
		maxSize: 1280,
	},
	{
		source: 'project-think-digital-vr-work-banner.jpg',
		output: 'project-think-digital-vr-work-banner.webp',
		maxSize: 1672,
	},
	{
		source: 'experience-catalyst-games-sagta-award-group.jpg',
		output: 'experience-catalyst-games-sagta-award-group.webp',
		maxSize: 760,
	},
	{
		source: 'experience-catalyst-games-sagta-award-media-wall.jpg',
		output: 'experience-catalyst-games-sagta-award-media-wall.webp',
		maxSize: 760,
	},
	{
		source: 'experience-catalyst-games-studio-event-audience.jpg',
		output: 'experience-catalyst-games-studio-event-audience.webp',
		maxSize: 760,
	},
	{
		source: 'experience-catalyst-games-studio-event-group.jpg',
		output: 'experience-catalyst-games-studio-event-group.webp',
		maxSize: 760,
	},
];

if (!existsSync(magickPath)) {
	throw new Error(`ImageMagick was not found at ${path.relative(repoRoot, magickPath)}.`);
}

mkdirSync(outputDir, { recursive: true });

for (const asset of assets) {
	const sourcePath = path.join(sourceDir, asset.source);
	const outputPath = path.join(outputDir, asset.output);

	if (!existsSync(sourcePath)) {
		throw new Error(`Missing source asset: ${path.relative(repoRoot, sourcePath)}`);
	}

	execFileSync(magickPath, [
		sourcePath,
		'-auto-orient',
		'-resize',
		`${asset.maxSize}x${asset.maxSize}>`,
		'-strip',
		'-quality',
		'82',
		outputPath,
	]);

	console.log(`Processed ${path.relative(repoRoot, sourcePath)} -> ${path.relative(repoRoot, outputPath)}`);
}
