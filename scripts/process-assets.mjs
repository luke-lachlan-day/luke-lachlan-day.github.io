import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const magickPath = path.join(repoRoot, '.tools', 'ImageMagick', 'magick.exe');
const iconSourceDir = path.join(repoRoot, 'assets-source', 'icons');
const sourceDir = path.join(repoRoot, 'assets-source', 'images');
const defaultOutputDir = path.join(repoRoot, 'public', 'assets', 'images');

const assets = [
	{
		source: 'project-agricultural-vr-training-cattle-simulation.jpg',
		output: 'project-agricultural-vr-training-cattle-simulation.webp',
		maxSize: 1640,
		crop: '1893x1065+0+107',
	},
	{
		source: 'project-disney-game-night-toy-story-menu.jpg',
		output: 'project-disney-game-night-toy-story-menu.webp',
		maxSize: 1672,
	},
	{
		source: 'project-disney-game-night-game-list.png',
		output: 'project-disney-game-night-game-list.webp',
		maxSize: 1440,
	},
	{
		source: 'project-disney-game-night-moana-icon.png',
		output: 'project-disney-game-night-moana-icon.webp',
		maxSize: 548,
		quality: 90,
	},
	{
		source: 'project-unreleased-treasures.png',
		output: 'project-unreleased-treasures.webp',
		maxSize: 1672,
	},
	{
		source: 'project-dungeons-and-dining-tables-capsule.jpg',
		output: 'project-dungeons-and-dining-tables.webp',
		maxSize: 608,
		crop: '608x342+4+5',
	},
	{
		source: 'project-dungeons-and-dining-tables-dungeon-combat.jpg',
		output: 'project-dungeons-and-dining-tables-dungeon-combat.webp',
		maxSize: 1672,
	},
	{
		source: 'project-dungeons-and-dining-tables-furniture-menu.jpg',
		output: 'project-dungeons-and-dining-tables-furniture-menu.webp',
		maxSize: 1672,
	},
	{
		source: 'project-dungeons-and-dining-tables-cavern-boss.jpg',
		output: 'project-dungeons-and-dining-tables-cavern-boss.webp',
		maxSize: 1672,
	},
	{
		source: 'project-beach-bums-beachgoers-before-wave.jpg',
		output: 'project-beach-bums-beachgoers-before-wave.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-event-cover.png',
		output: 'project-super-bawk-bawk-chicken.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-cannon-pass.jpg',
		output: 'project-super-bawk-bawk-chicken-cannon-pass.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-waterfall-run.jpg',
		output: 'project-super-bawk-bawk-chicken-waterfall-run.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-item-shop.jpg',
		output: 'project-super-bawk-bawk-chicken-item-shop.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-close-call.jpg',
		output: 'project-super-bawk-bawk-chicken-close-call.webp',
		maxSize: 1672,
	},
	{
		source: 'project-super-bawk-bawk-chicken-lava-cavern.jpg',
		output: 'project-super-bawk-bawk-chicken-lava-cavern.webp',
		maxSize: 1672,
	},
	{
		source: 'project-beach-bums-beach-search.jpg',
		output: 'project-beach-bums-beach-search.webp',
		maxSize: 1672,
	},
	{
		source: 'project-beach-bums-tidal-wave.jpg',
		output: 'project-beach-bums-tidal-wave.webp',
		maxSize: 1672,
	},
	{
		source: 'experience-catalyst-games-sagta-award-group.jpg',
		output: 'experience-catalyst-games-sagta-award-group.webp',
		maxSize: 760,
		crop: '750x422+0+21',
	},
	{
		source: 'catalyst-agricultural-vr-training-filming.jpg',
		output: 'experience-catalyst-games-agricultural-vr-training-filming.webp',
		maxSize: 760,
		crop: '1280x720+0+523',
	},
	{
		source: 'experience-catalyst-games-studio-event-group.jpg',
		output: 'experience-catalyst-games-studio-event-group.webp',
		maxSize: 760,
		crop: '2048x1152+0+106',
	},
	{
		source: 'daytime-devs-sasa-team-source.jpg',
		output: 'experience-daytime-devs-sasa-team.webp',
		maxSize: 760,
	},
	{
		source: 'experience-daytime-devs-convention-source.jpg',
		output: 'experience-daytime-devs-convention.webp',
		maxSize: 760,
		crop: '960x540+0+148',
	},
	{
		source: 'experience-australian-army-wallaby.jpg',
		output: 'experience-australian-army-wallaby.webp',
		maxSize: 760,
	},
	{
		source: 'experience-australian-army-equipment-display.jpg',
		output: 'experience-australian-army-equipment-display.webp',
		maxSize: 760,
	},
	{
		source: 'experience-australian-army-field-vehicles.jpg',
		output: 'experience-australian-army-field-vehicles.webp',
		maxSize: 760,
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
		source: 'company-avcon-logo-white-tagline.webp',
		sourceDir: iconSourceDir,
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
	const sourcePath = path.join(asset.sourceDir ?? sourceDir, asset.source);
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

	args.push(
		'-resize',
		`${asset.maxSize}x${asset.maxSize}>`,
		'-strip',
		'-quality',
		String(asset.quality ?? 82),
		outputPath
	);

	execFileSync(magickPath, args);

	console.log(`Processed ${path.relative(repoRoot, sourcePath)} -> ${path.relative(repoRoot, outputPath)}`);
}
