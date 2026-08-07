# Spherical Aberration Article Series (branch ronbuening/SphericalAberrationArticle)

## Summary

- Publish the three-part spherical aberration series (landing page, concise photographer guide, full
  technical treatment) and build its nine themed figures.

## Changes

- `src/content/spherical-aberration/` — three new articles sharing `series: spherical-aberration`:
  `spherical-aberration` (seriesOrder 0), `spherical-aberration-essentials` (1),
  `spherical-aberration-technical` (2). Draft mojibake was normalized to straight quotes plus real
  em/en dashes to match house style; the draft's `FIGURE ASSET TODO` comments were dropped because
  the figures now exist.
- `src/components/diagram/sphericalAberration/` — nine `isDark`-themed figure components plus
  `saDiagramShared.ts` (shared palette, monospace font constant, curve-sampling helper). Palette
  matches the pupil-geometry diagram colors.
- `src/components/markdown/ThemedMarkdown.tsx` — table-driven substitution of the nine
  `/diagrams/spherical-aberration/*.svg` paths with the inline themed components.
- `public/diagrams/spherical-aberration/*.svg` — static fallbacks generated from the React
  components by `__tests__/src/components/diagram/sphericalAberrationStaticSvgs.test.tsx`
  (`npm run generate:sa-figure-svgs`, also runs with the normal test suite). Each file embeds the
  dark and light renders and switches with `prefers-color-scheme`, so it cannot drift from the
  inline diagrams.
- `src/utils/content/changelogData.ts` — one `article` entry for the series launch.

## Review-response changes (2026-08-07)

- Mobile legibility: all figure fonts bumped one step (min 10.5 units) and the ThemedMarkdown
  substitution wraps SA figures in an `overflowX: auto` container with `minWidth: 560`.
- Contrast: shared `muted` colors raised to 5.8:1 (dark) / 5.5:1 (light) against the figure
  backgrounds; both were previously below 4.5:1.
- Static-SVG sync is enforced: the generator test now *compares* generated markup against the
  committed `public/` files by default and fails with a regenerate hint; only
  `npm run generate:sa-figure-svgs` (which sets `SA_FIGURE_SVGS_WRITE=1`) rewrites them.
  `__tests__/node-builtins.d.ts` gained a `node:process` shim for the env read.
- Figure 9 adjustable-range panel now compares consistent defocused background disks
  (center-weighted under, uniform sharp, ringed over) instead of mixing in-focus PSFs with a
  defocused disk, matching Cosina's Portrait Heliar description.
- Figure 8 was rebuilt earlier in review to ray-traced panels sharing one paraxial focus with
  bracketed LSA spreads; figure 1's marginal rays were re-laid so all rays pass through the glass.
- Dead Leica Thambar product URL replaced with the current official technical data sheet PDF
  (verified HTTP 200).

## Link audit

- Lens links resolve to existing keys: `nikon-z-135f18-plena`, `varisoft-rokkor-85f28`,
  `nikon-af-dc-nikkor-135mm-f2`, `nikon-fuwatto-soft-90mm-f48`, `voigtlander-portrait-heliar-75f18`.
- DC-Nikkor state links use the stable `focus` / `aberration` URL params from
  `src/utils/state/lensViewUrlState.ts` (aberration clamps to [-1, 1]).
- Article links resolve to existing slugs: `achromat-apochromat`, `heliar-history`, `about-site`.

## Verification

- See PR: `npm run typecheck && npm run format:check && npm run lint && npm run test`, plus
  `npm run build` for route/sitemap/prerender confirmation of the three new `/articles/…` routes.

## Follow-ups

- None planned; the series handoff's redirect note does not apply because the technical article was
  never published under `/articles/spherical-aberration/`.
