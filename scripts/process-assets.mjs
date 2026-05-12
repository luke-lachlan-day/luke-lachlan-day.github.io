import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const magickPath = path.join(repoRoot, '.tools', 'ImageMagick', 'magick.exe');
const sourceDir = path.join(repoRoot, 'assets-source', 'images');
const defaultOutputDir = path.join(repoRoot, 'public', 'assets', 'images');

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
	{
		source: '465783317_10212414278908696_5489246177427786077_n.jpg',
		output: 'experience-daytime-devs-sasa-team.webp',
		maxSize: 760,
	},
	{
		source: '558241285_10214105146859338_719203090482694637_n.jpg',
		output: 'experience-daytime-devs-convention.webp',
		maxSize: 760,
		crop: '960x540+0+148',
	},
	{
		source: 'experience-state-level-athlete-track.jpg',
		output: 'experience-state-level-athlete-track.webp',
		maxSize: 760,
	},
	{
		source: 'experience-state-level-athlete-harbour.jpg',
		output: 'experience-state-level-athlete-harbour.webp',
		maxSize: 760,
	},
	{
		source: 'experience-state-level-athlete-gold-medal.jpg',
		output: 'experience-state-level-athlete-gold-medal.webp',
		maxSize: 760,
	},
	{
		source: 'experience-state-level-athlete-silver-medal.jpg',
		output: 'experience-state-level-athlete-silver-medal.webp',
		maxSize: 760,
	},
	{
		source: 'company-avcon.gif',
		sourceFrame: 0,
		output: 'company-avcon.webp',
		maxSize: 256,
		quality: 90,
	},
	{
		source: 'company-athletics-south-australia.jpg',
		output: 'company-athletics-south-australia.webp',
		maxSize: 256,
		quality: 90,
		transparentWhiteBackground: true,
		transparentWhiteRegion: {
			geometry: '225x105+0+120',
			fuzz: '38%',
		},
	},
	{
		source: 'company-athletics-south-australia.jpg',
		output: 'athletics-south-australia.webp',
		outputDir: path.join(repoRoot, 'public', 'assets', 'emblems'),
		maxSize: 256,
		quality: 90,
		transparentWhiteBackground: true,
		crop: '176x86+34+44',
		trim: true,
	},
];

if (!existsSync(magickPath)) {
	throw new Error(`ImageMagick was not found at ${path.relative(repoRoot, magickPath)}.`);
}

mkdirSync(defaultOutputDir, { recursive: true });

for (const asset of assets) {
	const sourcePath = path.join(sourceDir, asset.source);
	const outputDir = asset.outputDir ?? defaultOutputDir;
	const outputPath = path.join(outputDir, asset.output);

	if (!existsSync(sourcePath)) {
		throw new Error(`Missing source asset: ${path.relative(repoRoot, sourcePath)}`);
	}

	mkdirSync(outputDir, { recursive: true });

	const sourceInput = asset.sourceFrame === undefined ? sourcePath : `${sourcePath}[${asset.sourceFrame}]`;
	const args = [sourceInput, '-auto-orient'];

	if (asset.transparentWhiteBackground) {
		args.push(
			'-alpha',
			'set',
			'-bordercolor',
			'white',
			'-border',
			'1',
			'-fuzz',
			'20%',
			'-fill',
			'none',
			'-draw',
			'color 0,0 floodfill',
			'-shave',
			'1x1'
		);
	}

	if (asset.transparentWhiteRegion) {
		args.push(
			'-region',
			asset.transparentWhiteRegion.geometry,
			'-fuzz',
			asset.transparentWhiteRegion.fuzz,
			'-transparent',
			'white',
			'+region'
		);
	}

	if (asset.crop) {
		args.push('-crop', asset.crop, '+repage');
	}

	if (asset.trim) {
		args.push('-trim', '+repage');
	}

	args.push('-resize', `${asset.maxSize}x${asset.maxSize}>`, '-strip', '-quality', String(asset.quality ?? 82), outputPath);

	execFileSync(magickPath, args);

	console.log(`Processed ${path.relative(repoRoot, sourcePath)} -> ${path.relative(repoRoot, outputPath)}`);
}
