# Luke Lachlan Day Portfolio

Personal portfolio site for Luke Lachlan Day, built to share games, tools, work experience, and contact links with a playful pixel-art presentation.

Live site: [lukelachlanday.dev](https://lukelachlanday.dev/)

## Technical Highlights

- Astro 6 static-first build for a small, fast portfolio that deploys cleanly to GitHub Pages.
- TypeScript data modules keep project, experience, contact, company, and site content typed and centralized.
- Reusable layouts, components, scripts, and style modules keep page files focused on composition.
- Design tokens support the pixel-art visual direction across light and dark themes.
- Accessibility work includes semantic controls, keyboard-friendly interactive surfaces, visible labels, and reduced-motion handling.
- CI runs the same validation path as local development: Astro checks, build, formatting, asset checks, and Playwright smoke tests.
- Source assets stay separate from optimized deployable assets so provenance and shipped file size stay clear.

## Architecture Notes

Astro fits this site because the core content is static, while targeted TypeScript browser modules handle the interactive parts that need runtime behavior. Portfolio content lives in focused modules under `src/data/`, then Astro pages compose that data through reusable layouts and components.

The custom project wheel is an intentional portfolio feature, not incidental complexity. It gives the Projects and Experience pages a memorable interaction while detail panels and galleries keep the underlying content readable, linkable, and keyboard reachable. Non-trivial interaction code lives in `src/scripts/`, shared styling is split through `src/styles/`, and optimized public assets are tracked separately from source files.

The main trade-off is personality over a purely conventional list layout. The implementation keeps that personality while using static rendering, typed data, reduced-motion support, and smoke tests to keep the experience maintainable.

## Local Setup

This project requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev
```

Useful commands:

| Command                | Action                                                         |
| :--------------------- | :------------------------------------------------------------- |
| `npm run dev`          | Start the local development server                             |
| `npm run check`        | Run Astro type and content validation                          |
| `npm run build`        | Build the production site to `./dist/`                         |
| `npm run format`       | Format the repository with Prettier                            |
| `npm run format:check` | Check repository formatting without writing changes            |
| `npm run check:assets` | Verify tracked image dimensions and project tag style coverage |
| `npm run test:e2e`     | Run the Playwright smoke tests                                 |
| `npm run validate`     | Run the full local and CI validation path                      |
| `npm run preview`      | Preview the production build locally                           |

## Review Checklist

Use this checklist for manual review after visual, interaction, or asset changes. It complements the custom wheel and detail display; it is not a reason to remove the site's interactive character.

- Keyboard-only navigation reaches the header links, theme toggle, project/experience wheel cards, detail panel controls, gallery arrows/dots, and leaves toggle.
- Phone/mobile layout remains usable with no text overflow, clipped controls, or incoherent overlap.
- Reduced-motion preference avoids forced autoplay or unnecessary movement while preserving access to content.
- Slow network or cache-disabled loading still leaves meaningful text, alt text, and layout stability while assets load.
- Dark and light themes both preserve contrast, artwork legibility, and the pixel-art direction.
- Project wheel cards are selectable, readable, and clearly connected to the active detail panel.
- Project detail panels and galleries remain usable with pointer, keyboard, and direct route URLs.

## License

Source code in this repository is licensed under the MIT License. See `LICENSE`.

Artwork, images, screenshots, branding, logos, text content, project descriptions, visual designs, and other non-code assets are copyright 2026 Luke Lachlan Day unless otherwise stated. All rights reserved. See `ASSET-LICENSE.md`.

## Third-Party Notices

SVG, font, logo, brand asset, and other third-party asset notes are documented in `THIRD-PARTY-NOTICES.md`.
