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
- `npm run build` builds the site and is required before UI or content changes are considered shippable.
- `npm run preview` previews the production build.

Run `npm run build` as the baseline validation step for implementation work governed by this file. For visual or UI changes, also review the result in a browser at phone, tablet, and desktop/PC widths.

## Playwright

Playwright is available through the repo's `@playwright/test` dev dependency. Use it via `npm exec playwright -- ...`.

Common commands:

- `npm exec playwright -- --version`
- `npm exec playwright -- test`
- `npm exec playwright -- test --ui`
- `npm exec playwright -- codegen http://localhost:4321`

For visual or UI review, start the Astro dev server first with `npm run dev`, then use Playwright against the local URL. The repo currently does not define a dedicated Playwright npm script or committed test suite, so use `npm exec playwright -- ...` unless scripts are added later.

## Engineering Standards

- Keep changes scoped. Do not perform unrelated refactors, dependency churn, broad restyling, or metadata cleanup while making content or feature edits.
- Do not add new hard-coded content, colors, spacing scales, asset paths, or repeated constants when a typed data object, CSS custom property, or shared helper is appropriate.
- Add new portfolio data through typed data modules, primarily `src/data/profile.ts`, so pages render from data rather than page-specific one-offs.
- Route new colors through the existing CSS variable palette in `:root`, `:root[data-theme="light"]`, and `:root[data-theme="dark"]`; both themes must remain intentional.
- Prefer modular, reusable Astro components when markup repeats or represents a reusable concept such as project cards, contact cards, page heroes, or section headings.
- Preserve the current visual direction: pixel-art assets, playful portfolio styling, responsive layouts, light/dark theme support, and consistent card, button, and section treatment.
- Treat accessibility and shipping quality as mandatory: semantic HTML, useful alt text, keyboard-operable controls, no broken links or placeholders in shipped content unless explicitly intentional, responsive/adaptive layouts that display well on phone, tablet, and desktop/PC screens, and no text overflow or incoherent overlap.

## Asset Optimization

- Optimize web-facing raster assets before shipping.
- Prefer WebP for photos, illustrations, decorative images, and alpha-capable raster assets unless PNG is required for exact lossless output.
- Use the repo-local ImageMagick executable under `.tools/` for conversions.
- Do not reference oversized source PNGs from pages or CSS when an optimized WebP is suitable.
- After asset changes, run `npm run build` and visually verify affected pages.

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
