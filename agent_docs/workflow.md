# Workflow — LensVisualizer

## Commit Style

- **Small, focused commits** — one logical change per commit (add a type, fix a bug, update a component, add a test)
- **Commit and push frequently** — after each working stage, not only at the end
- **Break larger tasks into stages** — commit at the end of each stage before moving to the next

Typical stage breakdown:
1. Types / interfaces → commit
2. Optics/utils logic + tests → commit
3. UI components → commit
4. Final typecheck + lint + format pass → commit

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

- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main` or manual dispatch
- Builds with `npm ci && npm run build`, deploys `dist/` to Pages
- Base path set to `/` in `vite.config.js` — GitHub Actions deploy handles the Pages base path
- Quality checks run on PRs via `.github/workflows/quality.yml` (lint, format, typecheck, test, npm audit, build)
- Deploy is conditional — only runs after quality checks pass (or manual dispatch)
- Build pipeline: `vite build` → `prerender.mjs` (SSR static HTML) → `generate-sitemap.mjs`
