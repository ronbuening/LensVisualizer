# Workflow — LensVisualizer

## Commit Style

- **Small, focused commits** — one logical change per commit (add a type, fix a bug, update a component, add a test)
- **Commit and push frequently** — after each working stage, not only at the end
- **Break larger tasks into stages** — commit at the end of each stage before moving to the next
- **The PR description is the record** — do not write per-branch notes under `agent_docs/records/`; see
  `agent_docs/documentation-policy.md`

Typical stage breakdown:
1. Types / interfaces → commit
2. Optics/utils logic + tests → commit
3. UI components → commit
4. Final typecheck + lint + format pass → commit

## Commands

`CLAUDE.md` lists the day-to-day subset. This is the full script inventory; `__tests__/docDrift.test.ts` fails when
`package.json` and this fence disagree.

```bash
npm install
npm run dev                # Generate metadata, then start Vite on http://localhost:5173
npm run build              # Organize lens data, generate metadata + folder readmes, build, prerender, sitemap, RSS feeds
npm run generate:metadata  # Organize lens data, refresh src/generated/build-metadata.json, rewrite src/**/readme.md
npm run generate:readmes   # Rewrite the src/**/readme.md folder docs alone (also runs inside generate:metadata)
npm run generate:feeds     # Rebuild dist/feeds/ RSS from metadata, lens summaries, changelog
npm run organize:lens-data # Move stray root-level lens files into maker folders
npm run preview
npm run test
npm run test:coverage
npm run generate:glass-reports
npm run generate:mirror-reports
npm run generate:mount-svgs
npm run generate:sa-figure-svgs     # Regenerate static spherical-aberration article figures from their components
npm run generate:holiday-branding   # Recolor the base marks into public/branding/holiday/
npm run audit:dependencies          # Fail on non-allowlisted high/critical npm advisories
npm run audit:image-circle          # semi-diameters that cannot cover their own image circle
npm run audit:patent-figure         # measure a patent cross-section against a lens data file
npm run audit:surface               # aspheric domain scan + validator with trial semi-diameters
npm run benchmark:optics-rendering  # On-demand optics/render benchmark (not part of build or test)
npm run typecheck
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run seo:audit
```

## Pre-Commit Checks

Before every commit and before opening a PR, all of the following must pass:

```bash
npm run typecheck     # Zero TypeScript errors
npm run format:check  # Prettier formatting passes (run npm run format to fix)
npm run lint          # ESLint passes (run npm run lint:fix to auto-fix)
npm run test          # All tests pass
```

CI enforces the same checks via `.github/workflows/quality.yml` — failing them blocks deploy.

## Deployment

The site deploys to two targets from the same `npm run build` output. Cloudflare Pages is canonical production;
GitHub Pages is an active mirror/backup.

- **Cloudflare Pages (canonical production, surfaceandstop.com):** builds with `npm run build` and serves `dist/`
  from the connected production branch after a successful build.
- **GitHub Pages (mirror/backup):** `.github/workflows/deploy.yml` runs after Quality Checks pass on `main` (or on
  manual dispatch), rebuilds, and publishes the same `dist/`. `public/CNAME` exists for this target.
- **Cloudflare-only artifacts:** `public/_headers` and `public/_redirects` are read by Cloudflare Pages only. The
  security headers they set (CSP, COOP/CORP, Permissions-Policy, Referrer-Policy, `X-Content-Type-Options`,
  `X-Frame-Options`) and the SPA `200` rewrites therefore do **not** apply on the GitHub Pages mirror. Canonical URLs
  point at surfaceandstop.com, which mitigates duplicate-content SEO from the mirror.
- Builds use the normal pipeline and deploy the generated `dist/` output.
- Base path set to `/` in `vite.config.js` because Cloudflare Pages serves the production site from the domain root
- Quality checks run on PRs via `.github/workflows/quality.yml` (lint, format, typecheck, test, npm audit, build)
- Build pipeline: `generate-build-metadata.mjs` (routes + metadata) → `vite build` → `prerender.mjs` (SSR static HTML +
  manifest validation) → `generate-sitemap.mjs` → `generate-rss-feeds.mjs` (writes both static RSS feeds from generated
  metadata)
