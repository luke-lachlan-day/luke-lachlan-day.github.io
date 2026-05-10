# Agent Notes

## Purpose

This file is the repo-level source of truth for future agent work on this Astro portfolio site. Follow it before making code, content, asset, styling, or workflow changes. Use justified exceptions only when the surrounding code clearly requires them, and explain the exception in your handoff.

## Project Shape

- Astro 6 site.
- Node.js `>=22.12.0`.
- Source code lives under `src/`.
- Static assets live under `public/assets/`.
- Shared data types live in `src/data/types.ts`.
- Portfolio data lives in focused source-of-truth modules: `src/data/site.ts`, `src/data/home.ts`, `src/data/contact.ts`, `src/data/companies.ts`, `src/data/projects.ts`, and `src/data/experience.ts`.
- Project rendering helpers live in `src/data/projectActions.ts` and `src/data/projectTags.ts`.
- `src/data/profile.ts` is a small aggregate convenience export. Do not put canonical project, experience, company, contact, home, or site content there.
- Global styles are composed through `src/styles/global.css`.

## Commands and Validation

- `npm run dev` starts the development server.
- `npm run check` runs Astro's type and content validation.
- `npm run build` builds the site.
- `npm run check:assets` verifies tracked image dimensions and project tag style coverage.
- `npm run format` formats the repository with Prettier.
- `npm run format:check` checks Prettier formatting without writing changes.
- `npm run preview` previews the production build.

After code, data, tooling, or documentation changes, run the smallest relevant command-line validation available. Default to `npm run check`, `npm run build`, and `npm run format:check` unless the user explicitly asks not to. Use `npm run format` only when intentionally applying formatting changes. Report any commands that were not run.

Do not run Playwright checks, browser validation, dev servers, previews, or other visual validation commands unless the user explicitly asks for them. For visual or UI changes, describe the recommended review at phone, tablet, and desktop/PC widths instead.

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
- Prefer simple, explicit code over clever abstractions.
- Do not introduce a shared abstraction until it removes real duplication or names a clear domain concept.
- Prefer deleting, tightening, or renaming code before adding new systems.
- Keep page files focused on composition: gather data, choose components, and render the page.
- Keep components focused: one component should have one clear rendering responsibility.
- Keep business and content data in typed data modules, not scattered through page markup.
- Do not add new hard-coded content, colors, spacing scales, asset paths, or repeated constants when a typed data object, CSS custom property, or shared helper is appropriate.
- Route new colors through the existing CSS variable palette in `:root`, `:root[data-theme="light"]`, and `:root[data-theme="dark"]`; both themes must remain intentional.
- Preserve the current visual direction: pixel-art assets, playful portfolio styling, responsive layouts, light/dark theme support, and consistent card, button, and section treatment.

## Refactor Rules

- Refactors must be behavior-preserving unless the user explicitly asks for behavior or design changes.
- Do not mix structural refactors with visual redesigns.
- Do not mix content rewrites with code refactors unless fixing an obvious typo.
- Prefer small commits by concern, such as tooling, data splits, component extraction, script simplification, CSS organization, or cleanup/removal.
- For quality cleanup passes, work in this order: baseline validation, confirmed dead/duplicated code removal, repeated markup extraction, typed helper extraction, then final validation.
- Before extracting a component or helper, confirm it removes real duplication or names an existing domain concept.

## Frontend Acceptance Checks

For every relevant change, verify the affected phase against these checks before finishing:

- Every meaningful image has useful alt text.
- Decorative images use `alt=""` or are hidden appropriately.
- Buttons that behave like buttons remain `<button>`.
- Links that navigate remain `<a>`.
- Keyboard navigation works for wheel cards, gallery arrows, gallery dots, the theme toggle, and the leaves toggle.
- Reduced-motion users do not get forced autoplay or animation; respect `prefers-reduced-motion`.
- External links use safe external-link attributes through `getExternalLinkAttrs`.
- Image dimensions are present where possible to reduce layout shift.
- Only critical assets are preloaded.
- Resource hints are not asset references; removing a preload must not remove the underlying asset from the UI.
- Mobile, tablet, and desktop/PC layouts remain usable with no text overflow or incoherent overlap.
- Prefer native HTML semantics before ARIA; use ARIA only when native HTML cannot express the required semantics, state, or accessible name.
- Do not put `aria-hidden="true"` on focusable elements.
- Preserve visible labels where possible; use `.visually-hidden` text before relying on `aria-label`.
- Reserve CSS masks for decorative one-color icons, texture/shape effects, or cases where inheriting `currentColor` is the core requirement.
- Prefer inline SVG with `currentColor` for simple monochrome UI icons when practical.

## AI-Code Smell Checklist

Before finishing a change, check for:

- Overly generic names such as `data`, `item`, `config`, `handler`, or `manager` where a domain name would be clearer.
- Large inline literal tables inside components.
- Duplicated markup that differs only by data.
- Speculative abstractions used only once.
- Comments that restate the code instead of explaining intent.
- Unused props, unused CSS variables, unused selectors, and dead helper functions.
- Broad `Record<string, unknown>` or `[key: string]: unknown` props where explicit props would be clearer.
- Magic numbers that should be named constants or CSS tokens.
- ARIA used where native HTML would be better.
- Reusable selectors defined in more than one stylesheet.
- Inline scripts large enough to hide state, timers, event listeners, or DOM mutation logic that belongs in `src/scripts/`.
- Component extraction that makes call sites harder to read or introduces unused variants.

## CSS Ownership

- `src/styles/tokens.css` is for design tokens only.
- `src/styles/base.css` is for reset and base element styling.
- `src/styles/global.css` is the shared style import entrypoint.
- `src/styles/components/` is for reusable component classes.
- `src/styles/pages/` is for page-specific rules.
- `src/styles/showcase/` is for wheel, detail, and gallery systems shared by Projects and Experience.
- Avoid adding new rules to large CSS files when a focused file already exists.
- Remove unused selectors and custom properties when confidently unused.
- Each reusable selector should have one owning stylesheet. Search with `rg` before adding or deleting selectors, and do not duplicate the same selector block across component and showcase CSS.
- When changing project tags, run `npm run check:assets` so missing tag style selectors are caught. Unused tag style warnings should be reviewed, not automatically deleted.

## Script Ownership

- Keep Astro component markup focused on structure and data.
- Put non-trivial browser behavior in typed modules under `src/scripts/`, especially behavior with timers, event listeners, media queries, observers, or DOM mutation.
- Keep inline scripts only for critical pre-paint setup or very small isolated behavior.

## Data Ownership

- Shared data types live in `src/data/types.ts`.
- Site-wide identity, footer, and effect settings live in `src/data/site.ts`.
- Home page data lives in `src/data/home.ts`.
- Contact page data lives in `src/data/contact.ts`.
- Project data lives in `src/data/projects.ts`.
- Experience data lives in `src/data/experience.ts`.
- Company data lives in `src/data/companies.ts`.
- Project action and tag rendering helpers live in `src/data/projectActions.ts` and `src/data/projectTags.ts`.
- `src/data/profile.ts` aggregates focused data exports for convenience only.
- Do not duplicate the same project, experience, company, contact, home, or site data across multiple modules.
- Do not hard-code portfolio content in page components when it belongs in typed data.

## Performance and Assets

- Optimize web-facing raster assets before shipping.
- Prefer WebP for photos, illustrations, decorative images, and alpha-capable raster assets unless PNG is required for exact lossless output.
- Use the repo-local ImageMagick executable under `.tools/` for conversions.
- Do not reference oversized source PNGs from pages or CSS when an optimized WebP is suitable.
- Lazy-load non-critical images.
- Include image width and height where possible.
- Preload only assets needed for the first meaningful view.
- After adding, replacing, or resizing shipped image assets, update `src/utils/images.ts` and run `npm run check:assets`.
- Avoid large inline scripts or SVG registries inside Astro components unless there is a clear reason. Shared inline SVG icon registries should stay in focused TypeScript modules such as `src/components/icons/iconSvgBySrc.ts`.
- Avoid shipping unused CSS or JavaScript.
- After asset changes, recommend `npm run build` and visual review at phone, tablet, and desktop/PC widths, but do not run those checks unless the user explicitly asks.

## Pixel-Art Cutout Cleanup

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
