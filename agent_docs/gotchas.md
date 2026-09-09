# Gotchas — LensVisualizer

Non-obvious constraints and failure modes: one trap per bullet, with the full rule in the linked doc.

- Trace-path, folded/mirror (`opticalPath`, `surfaceOrder`, `imagePlane.normal`, `interaction.normal`, `mirrorKind`,
  `innerSd`), and field-launch (`projectionLaunchSlopeForField`, `solveChiefRay`) conventions are defined in
  `agent_docs/architecture/optics-engine.md`; lens-file authoring rules are in `src/lens-data/LENS_DATA_SPEC.md`. Do not
  reintroduce a legacy trace selector, per-lens rollout state, or a `traceMode` option.
- `solveChiefRay` is memoized per `RuntimeLens` in a `WeakMap` keyed on `(focusT, zoomT, aberrationT, fieldAngleDeg,
  launchSurface)`. Invalidation relies on every `buildLens()` call returning a fresh object — never mutate `L` in place.
- Runtime trace adapters cache prepared state by `RuntimeLens` + `focusT` + `zoomT` + `aberrationT`, and cache shifted
  diagram `zPos` states by array identity. A new state-dependent optical input must join the cache key, or the focused
  test must bypass the cache.
- `solveChiefRay` skips iteration below 1° field angle, yet retrofocus designs can show pupil aberration at 2–3°. Above
  1° it uses bounded bisection/scanning and returns a typed status plus `vectorLaunch` when applicable.
- Centrally obstructed reflex lenses need annular stop/field reasoning through the shared `stopInnerBlockedSemiDiameter()`
  helper. Never treat the blocked central chief ray as a valid off-axis field solve; on the Nikon Reflex-Nikkor 1000mm
  f/11 that collapses field geometry to zero.
- Sign conventions: field-curvature shift is positive aft (toward the sensor) and negative fore; the Petzval shift is
  negated relative to geometric sag so it matches the T/S direction for converging systems; coma spot diagrams put
  sagittal on the horizontal axis and tangential on the vertical.
- Cardinal overlays stay behind `ENABLE_CARDINAL_ELEMENTS`. Render H/N and H′/N′ as explicitly coincident for same-index
  systems, and never describe nodal points as no-parallax or panoramic rotation points.
- SD validation is slope-based (`sagSlopeRaw`, rim threshold ~64.2°), not the old `sd/|R| ≤ 0.90` proxy — aspheres with
  K near −1 legitimately exceed 0.9. Front/rear SD ratio ≤ 3.0; cross-gap sag intrusion ≤ `gapSagFrac × gap` (default
  0.90); production tests fail if `computeElementRenderDiagnostics()` would hide more than 0.25 mm of a surface.
- `nominalFno` may be an array only on zoom lenses, with one entry per `zoomPositions` element; an array on a prime fails
  validation.
- Some zoom patents publish only infinity-focus spacing tables; copying them unchanged into the close-focus slot leaves
  the focus slider visually static. Infer close-focus pairs only for the true focusing gaps, preserve the mechanism
  constraint (a single rigid translator keeps the adjacent-gap sum constant), and document the approximation in the
  file header and `focusDescription`.
- The `import.meta.glob` patterns in `src/utils/catalog/lensCatalog.ts` are relative to that file (`../../lens-data/`),
  and analysis files match by relative stem path — naming and placement matter for auto-registration.
- `scripts/prerender.mjs` validates that every route pattern in `src/routes/routeManifest.tsx` is covered by
  `src/generated/build-metadata.json`; a new pattern without a `scripts/generate-build-metadata.mjs` update fails the
  build. Client-only patterns (e.g. `/compare/:slugA/:slugB`) are exempt via `CLIENT_ONLY_PATTERNS`.
- `vite.config.js` sets `base: '/'`; Cloudflare Pages serves production from the domain root.
- `tsconfig.json` is `strict: true` with `allowJs: false`; `.data.ts` lens files are type-checked through the `"src"`
  include. Test files are `.ts`, and Vitest resolves `.js` import specifiers to `.ts` sources automatically.
- Several scan suites under `__tests__/src/optics/` rewrite `agent_docs/generated/*.generated.md` on every run
  (`npm run generate:glass-reports` is just a vitest filter). The six-digit and glass-coverage-opportunities scans skip
  the rewrite when the untracked local `patents/` inventory is empty, so `npm run test` in a fresh worktree or CI leaves
  the checked-in reports unchanged — regenerate from a checkout with `patents/` populated.
- `.git-blame-ignore-revs` lists the initial Prettier commit. GitHub honors it automatically; locally run
  `git config blame.ignoreRevsFile .git-blame-ignore-revs`.
- Keep `react`, `react-dom`, `@types/react`, and `@types/react-dom` on the same React 19 line. `react-helmet-async` 3
  delegates metadata to React 19's native hoisting, so its old SSR context is intentionally empty; prerender metadata
  must continue through the boundary/extraction path in `src/entry-server.tsx`. See
  `agent_docs/records/react-types-downgrade-2026-07-07.md` for the resolved React 18-era mismatch.
- `analysisDrawerOpen` is NOT persisted to localStorage (the drawer always starts closed); `analysisDrawerTab` IS
  persisted so the last-used tab is remembered. The drawer also closes on `SET_LENS_A` and `ENTER_COMPARE` so stale
  analysis never shows for a new lens.
- `AsphericComparisonOverlay` is an `OverlayModal` opened from `ElementInspector`, not a drawer tab; its open state in
  `useOverlayState.ts` is the only overlay outside the URL-shareable `panels` slice
  (`agent_docs/architecture/viewer-and-diagram.md`).
- New analysis tabs: `agent_docs/adding_an_analysis_tab.md`. New URL-shareable fields: `agent_docs/adding_url_state.md`.
