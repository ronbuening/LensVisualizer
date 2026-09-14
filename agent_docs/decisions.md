# Decisions

Standing "do not" knowledge that used to live inside closed plans: things verified healthy, approaches measured and
rejected, and lens-data items checked and excluded. Check the matching section before "fixing" or rebuilding something.
One dated bullet per decision with a source pointer; delete a bullet only when the code it protects is gone.

## Verified healthy — do not "fix"

### Optics engine

- 2026-08-04 — Reference-safe glass matching is enforced once, by the filter in `src/optics/glassCatalog.ts` plus `assessCatalogGlassCompatibility`; every scan already passes `element.indexReference`. Do not add a second layer. (code-health plan)
- 2026-08-04 — `GLASS_ND_TOLERANCE` / `GLASS_VD_TOLERANCE` are single-sourced from `src/optics/glassCatalog.ts`; never redeclare them locally. (code-health plan)
- 2026-08-04 — Live chromatic paths (`src/optics/rayTrace.ts`, `src/optics/trace/rayAdapters.ts`) set both `indexAtSurface` and `wavelengthNm` with the channel in the cache key; copy that pattern, it is not a bug. (code-health plan X12)
- 2026-08-04 — Lens-data validation is centralized in `src/optics/validateLensData.ts` and runs on every visible and hidden lens through `buildLens` at test time; do not add per-lens validation shims. (code-health plan)
- 2026-08-04 — The audit scripts (`audit-patent-figure`, `audit-surface-probe`, `audit-image-circle`) reuse engine math (`conicPolySag`, `sagSlopeRaw`, `validateLensData`); never reimplement sag/slope math in a script. (code-health plan G11)
- 2026-07-06 — Dispersion index resolution is centralized in `src/optics/chromatic/indexResolver.ts`; all exports of `src/optics/math/numerics.ts` are used. (efficiency plan E6)
- 2026-07-06 — `prepareState()` caches by `lens.key:focusT:zoomT:aberrationT` with frozen arrays, and `buildLens()` memoization in `src/components/hooks/useLensComputation.ts` is keyed correctly; no further caching layer is needed. (efficiency plan P7)
- 2026-07-06 — The three ray hooks (`useOnAxisRays`, `useOffAxisRays`, `useChromaticRays`) are intentionally separate; ray-count allocations are bounded by density and already memoized. (efficiency plan P7)
- 2026-05-20 — `TRACING_SAFETY_FACTOR` (0.9) applies to fisheyes only; rectilinear lenses keep `tracingHalfField === halfField` so their off-axis rendering is unchanged. Do not apply the margin universally. (trace plan PR 8)
- 2026-05-20 — Fisheye chief rays dispatch to the bounding-sphere arm at every field angle, and that arm keeps a vector launch at the best entrance-pupil crossing instead of returning `paraxial-fallback`; rectilinear lenses stay on the slope arm below the cap. Do not re-narrow fisheye dispatch. (trace plan PR 8)
- 2026-05-20 — Keep the z-projected `maxT` as the primary intersection bound with `launchBoundT` (2 × launch radius) only as the fallback when `direction.z` is not safely positive; grazing rays seed Newton at the bracket midpoint and validate the converged radius against the surface SD. (trace plan PR 8)
- 2026-05-21 — Only non-rectilinear `projection.kind` values activate projection-aware paths, and diagram off-axis rays promote to vector launch only when the declared fisheye field exceeds `tracingHalfField`; rectilinear diagram rendering must stay visually unchanged. (trace plan, PR #506)

### UI and analysis components

- 2026-07-06 — `formatSignedUm` exists in both `src/components/display/analysis/aberrations/format.ts` and `src/components/display/analysis/chromaticChartUtils.ts` on purpose (different suffix and thresholds); `formatUmMagnitude` is not a duplicate of `formatSpreadUmFromMm`; the six local formatters in `OpticalSummaryTab.tsx` stay local. (efficiency plan E3–E6)
- 2026-07-06 — `AnalysisMetricRow` in `src/components/display/analysis/analysisUi.tsx` is deliberately distinct from `AberrationValueDisplay`; the coma OUTER TAIL, spherical FRONT/REAR BLUR, BEST-FOCUS SPREAD, and LSA rows are intentional variants left unconverted. (efficiency plan E5)
- 2026-07-06 — The analysis drawer renders only the active tab (`ANALYSIS_TAB_RENDERERS[activeTab]`) and slider deferral already shipped; do not re-add lazy-tab or deferral machinery. (efficiency plan P7)
- 2026-07-06 — `sx`/`sy`/`clampedRayEnd` are memoized at their source in `useLensComputation.ts`, so "function props are always unstable" is false in the diagram tree; verify per prop before adding `memo`. The inline per-element closures in `src/components/diagram/DiagramElementLayer.tsx` are required. (efficiency plan P2/P4/P7)
- 2026-07-07 — The `src/components/diagram/` memoization pass deferred nothing; standalone article diagrams are unwrapped because they are outside the hot path. (efficiency plan P2)
- 2026-08-04 — The relationship-map layout engine `src/components/relationshipMap/layout.ts` is pure, deterministic, and directly tested; do not spend branches on it. (code-health plan)
- 2026-08-04 — Every route has `RouteErrorBoundary` with a deduped, sanitized beacon; synchronous catalog reads need no loading states; unknown slugs redirect. Do not add loading spinners to catalog pages. (code-health plan)

### Catalog, metadata, and build

- 2026-08-04 — CI git-history protection (`assertFullGitHistory`, `assertFreshnessDiversity` in `scripts/build-metadata-lib.mjs`, `fetch-depth: 0` in both workflows) is complete; leave it alone. (code-health plan)
- 2026-07-06 — `scripts/` has no copy-pasted helpers: `deriveMakerSlug` lives once in `lens-data-lib.mjs` and `build-metadata-lib.mjs` consumes the precomputed `makerSlug`. (efficiency plan E6/P7)
- 2026-07-07 — Vendor chunk groups in `vite.config.js` apply to the client build only; the SSR build keeps default chunking on purpose. Prerendered lens pages never contained the analysis markdown body, so lazy-loading `*.analysis.md` does not change SSR output. (efficiency plan B1)
- 2026-07-06 — `src/benchmarks/opticsRenderingBenchmark.tsx` must keep compiling real `RaySegment`s; do not fork the type for the benchmark. (efficiency plan P3)

## Rejected approaches

- 2026-09-09 — Gitignoring `agent_docs/generated/` reports or `agent_docs/benchmarks/runs/*.json`, and rewriting git history to shrink them, are rejected (reaffirmed in the documentation rationalization); nothing reads them back, but they stay committed. Slim payloads instead. (code-health plan D5/D6; 2026-09-09 review)
- 2026-09-09 — Replacing `AGENTS.md` with a symlink to `CLAUDE.md` is rejected (Windows checkouts, some loaders); it stays a byte copy guarded by `__tests__/docDrift.test.ts`. (2026-09-09 review)
- 2026-09-09 — Tier subfolders under `agent_docs/` (`queues/`, `workflow/`) are rejected; CONTRIBUTING, README, and hundreds of `*.audit.md` sidecars link the flat recipe paths, so tags in `agent_docs/README.md` carry the tier. (2026-09-09 review)
- 2026-08-04 — Wiring `scripts/generate-src-readmes.mjs` into `pretest`/`pretypecheck` is rejected: a test run must not rewrite source files. Freshness is enforced by the `--check` call in `__tests__/docDrift.test.ts`. (code-health plan D11/D12)
- 2026-08-04 — Splitting `src/utils/content/changelogData.ts` into per-quarter files is rejected without new evidence such as merge-conflict frequency. (code-health plan)
- 2026-08-04 — Merging script and runtime site-name/URL constants is rejected: the runtime SEO helpers under `src/utils/seo/` pull JSON and `.js`-to-`.ts` dependencies unsafe for plain-Node scripts; reconsider only around an import-free `siteIdentity.ts`. (code-health plan C8)
- 2026-08-04 — Caching git freshness metadata keyed on `HEAD` + `git status --porcelain` is rejected because the key ignores dirty-file contents. (code-health plan G13)
- 2026-08-04 — Centralizing page scrolling in `src/main.tsx`'s pathname-only analytics subscription is rejected; `/updates#entry` handling stays in `src/pages/UpdatesPage.tsx`, and site-wide scroll restoration needs a router-level design first. (code-health plan X2)
- 2026-08-04 — Adding `configurationKey` to `VIEW_STATE_FIELDS` in `src/utils/state/lensViewUrlState.ts` is rejected (the table is applied wholesale to `PanelsSlice`); a single `cfg` query for both compare panels is rejected in favor of `/compare/<variant-key>/<variant-key>` route identity. (code-health plan U7)
- 2026-08-04 — Unifying the two tracer stacks (`src/optics/trace/generalizedTrace.ts`, `src/optics/internal/exactSurfaceTrace.ts`) is out of scope; shared physics goes through `src/optics/trace/interactions.ts` only. (code-health plan G2/G10)
- 2026-08-04 — Deleting `GLASS_CATALOG_SOURCE_ORDER` in `src/optics/glassCatalogData.ts` was declined because it changes generated-report iteration order; removal is a separate decision. (code-health plan N7)
- 2026-08-05 — Rejecting every folded+diffractive prescription in `validateLensData.ts` is rejected: it refuses `diffractive` on reflect/block surfaces while permitting a refracting phase surface inside a folded `opticalPath`, and a hidden fixture under `src/lens-data/reference/` validates that combination. (code-health plan G12)
- 2026-07-06 — Generic wrappers for the coma section components and a universal "precision formatter" are rejected as over-abstraction. (efficiency plan E6)
- 2026-07-06 — Lazy-wrapping `ThemedMarkdown`'s inner renderer is acceptable only if the prerendered article body survives in `dist/`; losing prerendered content is never an acceptable trade for bundle size. (efficiency plan P5)
- 2026-08-10 — Further vitest pool/isolation changes and deps-optimizer prebundling were measured and rejected: wall time is bound by the slowest single files and by module evaluation of the lens-data glob. (test-rationalization branch, Phase 8)
- 2026-05-20 — Do not reintroduce the 80°/89° slope-domain clamp on fisheye `halfField`: it is the declared `projection.maxTraceFieldDeg` capped by `ABSOLUTE_HALF_FIELD_CEILING`; slope-safe callers use `RuntimeLens.tracingHalfField`, wider callers use `solveChiefRay` and `solve.vectorLaunch`. (trace plan)
- 2026-05-20 — Do not add an "interactive" sampling multiplier to `src/optics/raySampling.ts`: analysis tabs already hold last-settled values during drags via `useDeferredValue`; the knob is settled-compute density on heavy lenses (`isHeavyLensForRayWork`). (trace plan)
- 2026-05-20 — Do not "consolidate" chief-ray solvers as a cure for repeated solves; the gap was per-frame memoization, fixed by the per-`RuntimeLens` `WeakMap` cache. Do not plan a structural rewrite of the exact tracer for vector support; it is vector-native internally. (trace plan)
- 2026-06-22 — Do not reintroduce `fallbackSurfacePoint`-style post-miss ghost geometry into the diagram path; prepared-state traces terminate on a missed surface and the display draws clipped ghost rays from the last solid point. The internal helper in `src/optics/internal/exactSurfaceTrace.ts` is for low-level callers only. (PR #557)

## Standing maintainer decisions

- 2026-09-09 — The PR description is the branch record; per-branch notes under `agent_docs/records/` are no longer written, and 47 unreferenced records were deleted (recoverable via `git log --diff-filter=D -- agent_docs/records`). (2026-09-09 review)
- 2026-08-04 — Cloudflare Pages is production and `.github/workflows/deploy.yml` (GitHub Pages) is a mirror; `public/_headers` security headers apply only on Cloudflare, and docs must describe the dual setup. (code-health plan D3)
- 2026-08-04 — Keep every committed file under `agent_docs/generated/` below ~300 KB by slimming payloads (`find agent_docs/generated -type f -size +300k` should be empty). (code-health plan D5)
- 2026-08-04 — The patent/author subsystem consolidates onto shared seams (`aggregatePatentRecords`, `groupByNamedParty`, `LensEntryLink`, `PatentPartyList`) rather than per-page copies. (code-health plan C1–C3/U3)
- 2026-08-04 — Behavior-preserving engine refactors are gated by `__tests__/src/optics/exactTraceGoldenValues.test.ts`, the full test run, and byte-diffs of the generated glass/mirror reports; run `npm run benchmark:optics-rendering` before and after whenever trace numerics change. (code-health plan G-series)
- 2026-08-04 — Badge tints use `withAlpha()` from `src/utils/style/styles.ts`; `CHANGELOG_TYPE_COLORS` / `TAG_COLORS` literals stay 6-digit hex. (code-health plan X1)
- 2026-08-04 — Publication dates are UTC everywhere: `parseGitLogDates` in `scripts/build-metadata-lib.mjs` derives `publishedOn` from the UTC instant. (code-health plan X8)
- 2026-08-04 — Teleconverter/optical configuration is lens identity, not panel state: `selectedConfigurationKey` lives in `LensSlice`, serializes as the `cfg` v1 query field, and is validated against `opticalConfigurationOptionsForKey(lensKey)` at the lens-aware init/popstate boundary. (code-health plan U7)
- 2026-08-04 — Shipped changelog summaries are append-only: `changelogEntryId` hashes `date|type|summary`, so edits break `/updates#` anchors and RSS GUIDs. (code-health plan X2)
- 2026-08-04 — Catalog and page sorting use the pinned `catalogCollator` from `src/utils/catalog/collation.ts`, never bare `.localeCompare`, to avoid hydration mismatches. (code-health plan X7)
- 2026-08-04 — Public URL contracts are byte-pinned: `src/pages/lensIndex/groupAnchors.ts` ids and `scripts/author-metadata.mjs` slugs / `stableHash` have exact-string tests, including the legacy `"inventor"` anchor prefix. Slug transliteration and FNV-1a `stableHash` live once in `src/utils/catalog/slugText.ts`. (code-health plan N3/C2/C4/C7)
- 2026-08-04 — Per-patent inventor display order stays lens-file source order (`patentAuthors`); only identity-level directories sort. (code-health plan U3/C1)
- 2026-08-04 — The aspheric coefficient set (`K`, A3–A20) is single-sourced from the ordered descriptor list under `src/types/`; `conicPolySag` / `sagSlopeRaw` keep the conic-domain clamp separate from polynomial evaluation, and tests must not take finite differences across the clamp boundary. (code-health plan N5)
- 2026-08-05 — Nikon 180-400 TC-IN/TC-OUT parity holds only for surfaces 1–45; the surface-45 `d` collapse and close-focus gap differences are correct, and `__tests__/src/lens-data/opticalConfigurationParity.test.ts` requires a contract entry per `opticalConfiguration` group. (code-health plan N4)
- 2026-08-04 — The `lens:${key}` patent-identity fallback in `src/utils/catalog/authorCatalog.ts` is unreachable with current data; its generator half is covered synthetically in `__tests__/scripts/authorMetadata.test.ts`. (code-health plan N1)
- 2026-08-04 — Single homes, do not re-fork: `normalizeRuntimeLens` owns its `WeakMap` cache (`src/optics/prescription/normalizeLensData.ts`); phase-aware refract-or-fail lives in `interactRefractiveSurface` (`src/optics/trace/interactions.ts`); `src/optics/internal/traceSurfaces.ts` wraps `src/optics/math/paraxial.ts`; `normalLinePgF` in `src/optics/dispersion.ts` is the only PgF normal-line implementation; `decodeCode6` is the one six-digit code decoder; `useMediaQuery` in `src/utils/useMediaQuery.ts` is the only media-query hook. (code-health plan G1–G4/X10/U1)
- 2026-08-04 — `resolveGlass` is implemented over `candidateMatches`; if a glass-report byte-diff ever disagrees with `explainCompatibleGlassResolution`, stop and document the divergence rather than force equivalence. (code-health plan G7)
- 2026-08-04 — Glass report scans share `__tests__/src/optics/glassScanLib.ts` and skip their rewrite when the untracked `patents/` inventory is empty; regenerate from a checkout with `patents/` populated. (code-health plan G8/X10)
- 2026-08-05 — `RuntimeLens.EFL` is `focalLengthDesign ?? focalLengthMarketing ?? axialExtent`, never derived; assertions about phase power must measure `diffractiveParaxialPower` or the traced ray. The monochrome tracer applies diffractive phase at `LINE_NM.d` = 587.5618 nm; `validateLensData` rejects `diffractionOrder: 0`; under an explicit `surfaceOrder` the generalized tracer rejects reverse-order rays with `failureReason: "noBracket"`. (code-health plan G12)
- 2026-08-04 — Any chromatic trace entry point must set `wavelengthNm` beside per-channel glass indices (pattern in `src/optics/trace/rayAdapters.ts`). (code-health plan X12)
- 2026-08-04 — `src/components/layout/StaticPageShell.tsx` renders `<main>`; page migrations onto it are visual-parity only, and `HomePage` / `LensIndexPage` are skipped rather than forced. (code-health plan U2)
- 2026-08-04 — New feature ideas go to `FEATURE_ADDITION_PLAN.md` and new performance findings to `EFFICIENCY_IMPROVEMENT_PLAN.md`; there is no successor code-health backlog. (code-health plan)

## Checked and excluded (lens data)

- 2026-07 — Odd-order asphere backfill needed nothing for `SigmaDGDNA35mmf14` and `NikonNikkorAFS1635mmf4` (odd coefficients all zero in the cited example), `NikonAFS28f14E` and `VoigtlanderNokton50f1` ("odd-order" refers to aberration symmetry, not coefficients), or `CanonEF2880mmf3556II` (the refit mention is unrelated). The odd-asphere queue closed in July 2026. (odd-asphere-backfill.md, deleted 2026-09-09)

## Corrections to earlier framing

- 2026-07-07 — "Do not convert the route manifest to `React.lazy` because `renderToString` is synchronous" is superseded: route-level splitting shipped with dynamic-import loaders in `src/routes/routeManifest.tsx`, and `src/entry-server.tsx` awaits every page module at module scope, so `render()` stays synchronous and prerendered output is unchanged. (efficiency plan P5/B1)
- 2026-05-20 — `MAX_FIELD_LAUNCH_DEG = 89` in `src/optics/field/projection.ts` means the largest field the object-plane slope-launch path can trace, not the engine ceiling (the bounding-sphere path reaches ~175°); the proposed rename to `MAX_OBJECT_PLANE_FIELD_DEG` was never done. (trace plan PR 8)
- 2026-09-09 — The trace plan's claim that a `SurfaceTraceMode` escape hatch survives is stale: no rollout machinery remains in `src/`; exact tracing is the only path. The "no lens declares equisolid" follow-up is also done (five catalog lenses declare `fisheye-equisolid`). (trace plan status)
