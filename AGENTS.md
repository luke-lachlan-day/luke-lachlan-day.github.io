# Agent Notes

## Purpose

This file is the repo-level source of truth for future agent work on this Astro portfolio site. Follow it before making code, content, asset, styling, or workflow changes. Use justified exceptions only when the surrounding code clearly requires them, and explain the exception in your handoff.

## Project Shape

- Astro 6 site.
- Node.js `>=22.12.0`.
- Source code lives under `src/`.
- Static assets live under `public/assets/`.
- Shared portfolio content lives primarily in `src/data/profile.ts`.
- Global styling lives in `src/styles/global.css`.

## Commands

- `npm run dev` starts the development server.
- `npm run build` builds the site.
- `npm run preview` previews the production build.

Do not run tests, builds, Playwright checks, browser validation, dev servers, previews, or other validation commands unless the user explicitly asks for them. When validation would normally be appropriate, tell the user which command or visual check is recommended and leave execution to them unless requested.

For visual or UI changes, describe the recommended review at phone, tablet, and desktop/PC widths, but do not start a dev server, open a browser, or run Playwright/browser review unless the user explicitly asks.

## Playwright

Playwright is available through the repo's `@playwright/test` dev dependency. Use it via `npm exec playwright -- ...`.

Common commands:

- `npm exec playwright -- --version`
- `npm exec playwright -- test`
- `npm exec playwright -- test --ui`
- `npm exec playwright -- codegen http://localhost:4321`

The repo currently does not define a dedicated Playwright npm script or committed test suite, so use `npm exec playwright -- ...` unless scripts are added later. Treat these commands as reference only and do not run them unless the user explicitly asks.

## Engineering Standards

- Keep changes scoped. Do not perform unrelated refactors, dependency churn, broad restyling, or metadata cleanup while making content or feature edits.
- Do not add new hard-coded content, colors, spacing scales, asset paths, or repeated constants when a typed data object, CSS custom property, or shared helper is appropriate.
- Add new portfolio data through typed data modules, primarily `src/data/profile.ts`, so pages render from data rather than page-specific one-offs.
- Route new colors through the existing CSS variable palette in `:root`, `:root[data-theme="light"]`, and `:root[data-theme="dark"]`; both themes must remain intentional.
- Prefer modular, reusable Astro components when markup repeats or represents a reusable concept such as project cards, contact cards, page heroes, or section headings.
- Preserve the current visual direction: pixel-art assets, playful portfolio styling, responsive layouts, light/dark theme support, and consistent card, button, and section treatment.
- Treat accessibility and shipping quality as mandatory: semantic HTML, useful alt text, keyboard-operable controls, no broken links or placeholders in shipped content unless explicitly intentional, responsive/adaptive layouts that display well on phone, tablet, and desktop/PC screens, and no text overflow or incoherent overlap.

## Semantic Frontend Guardrails

- Prefer native HTML semantics before adding ARIA. Use ARIA only when native HTML cannot express the required semantics, state, or accessible name.
- Prefer visible text or `.visually-hidden` text before `aria-label` when a control or link can reasonably contain text.
- Use `<img>` with useful `alt` text for meaningful images, logos, screenshots, badges, and content-bearing assets. Use `alt=""` only for decorative images.
- Reserve CSS masks for decorative one-color icons, texture/shape effects, or cases where inheriting `currentColor` is the core requirement.
- Prefer inline SVG with `currentColor` for simple monochrome UI icons when practical.
- Avoid unused CSS custom properties, broad manually maintained selector lists, and layout nudges via `transform` unless the transform is explicitly for animation or optical adjustment.
- Keep `src/styles/global.css` focused on tokens, reset/base elements, shared layout primitives, and truly shared components. Avoid growing it with page-specific styling when scoped component or page styles would be clearer.

## Asset Optimization

- Optimize web-facing raster assets before shipping.
- Prefer WebP for photos, illustrations, decorative images, and alpha-capable raster assets unless PNG is required for exact lossless output.
- Use the repo-local ImageMagick executable under `.tools/` for conversions.
- Do not reference oversized source PNGs from pages or CSS when an optimized WebP is suitable.
- After asset changes, recommend `npm run build` and visual verification of affected pages, but do not run them unless the user explicitly asks.

### Pixel-Art Cutout Cleanup

When cleaning pixel-art cutouts with transparent backgrounds:

- Prefer surgical pixel edits over full regeneration when the asset quality is already good.
- Work from the current shipped asset first if the user wants to preserve visual quality.
- For matte/fringe cleanup, target opaque pixels that touch transparent pixels.
- Recolor stray light, grey, or neutral border pixels to nearby dark outline colors instead of deleting them, unless the user specifically asks for transparency.
- Preserve intentional interior whites and shading such as logo marks, highlights, letters, and brand shapes.
- For embedded one-off artifacts, patch exact coordinates or tiny local regions rather than broadening global cleanup rules.
- Keep filenames, dimensions, alpha channels, and consuming data/CSS unchanged unless the user asks otherwise.
- Use high-zoom previews composited on dark and light backgrounds, because dark mode exposes matte artifacts most clearly.

The contact icon cleanup used `sharp` for pixel-level RGBA inspection/editing and the repo-local ImageMagick executable for dark-background composites, zoom crops, dimension checks, and alpha checks. A safe workflow is: write patched candidates to `Temp/`, inspect zoom previews, then move approved WebPs over the existing assets.

After raster asset changes, recommend `npm run build` and visual review at phone, tablet, and desktop/PC widths, but do not run those checks unless the user explicitly asks.

## ImageMagick

ImageMagick is available as a portable repo-local install:

```powershell
.\.tools\ImageMagick\magick.exe
```

In PowerShell, invoke it explicitly with `&`:

```powershell
& '.\.tools\ImageMagick\magick.exe' -version
```

The install lives under `.tools/`, which is ignored by git. Do not assume `magick` is available on the system `PATH`; use the repo-local executable path unless a system-wide install is added later.
