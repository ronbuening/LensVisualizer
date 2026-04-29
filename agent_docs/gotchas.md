# Gotchas — LensVisualizer

- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` calls `validateLensData()` internally; malformed data throws descriptive errors with all issues listed
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- `vite.config.js` sets `base: '/'` — GitHub Actions deploy workflow handles the Pages base path
- Lens data globs scan recursively for `**/*.data.ts`; analysis globs scan recursively for `**/*.analysis.md` and match by relative stem path — naming convention matters for auto-registration
- `src/lens-data/defaults.ts` values are merged under each lens — per-lens values in `.data.ts` take precedence
- Glob paths in `lensCatalog.ts` are relative to the file's location (`../lens-data/`)
- Lens data files are TypeScript (`.data.ts`) with `satisfies LensDataInput` for compile-time type checking — also validated at runtime by `validateLensData()`
- Test files are `.ts` — both Vitest and tsc process them; Vitest resolves `.js` import extensions to `.ts` sources automatically
- `tsconfig.json` uses `strict: true` with `allowJs: false`; lens data `.data.ts` files are included in tsc via the `"src"` include
- `.git-blame-ignore-revs` lists the initial Prettier commit — GitHub respects it automatically; for local blame run `git config blame.ignoreRevsFile .git-blame-ignore-revs`
- `nominalFno` can be a single number or an array (one per zoom position) for variable-aperture zooms — array length must match `zoomPositions.length`; using an array on a non-zoom lens will fail validation
- Some zoom patents only publish infinity-focus spacing tables. If you copy those values into the close-focus slot unchanged, the focus slider will stay visually static for the moving group. Infer close-focus pairs only for the true focusing gaps, preserve the mechanism constraint (for a single rigid translator, the adjacent-gap sum stays constant), and document the approximation in the header plus `focusDescription`
- `prerender.mjs` validates that every route pattern in `routeManifest.tsx` is covered by routes in `build-metadata.json` — adding a new route pattern without updating `generate-build-metadata.mjs` will fail the build. Client-only patterns (e.g. `/compare/:slugA/:slugB`) are exempt via `CLIENT_ONLY_PATTERNS`
- `analysisDrawerOpen` is NOT persisted to localStorage (always starts closed); `analysisDrawerTab` IS persisted so the user's last-used tab is remembered
- Analysis drawer closes automatically when switching lenses (SET_LENS_A) or entering comparison mode (ENTER_COMPARE) to prevent stale data display
- Perspective-control movement is opt-in via `perspectiveControl`. Do not add SHIFT/TILT controls to ordinary lenses.
  The v1 movement layer is a 2D meridional visualization against a fixed IMG plane; analysis tabs remain centered-lens
  diagnostics and show a notice when movement is active
- Ray density is a persisted preference (`normal`, `dense`, `diagnostic`), not a URL field. `normal` must preserve the
  lens-authored `rayFractions` / `offAxisFractions` exactly; denser modes should go through `src/optics/raySampling.ts`
  so symmetry and chief rays stay predictable
- Chromatic mode replaces the monochrome ray layers. When COLOR is on, ON-AXIS controls axial chromatic rays and
  OFF-AXIS controls off-axis chromatic rays; do not render normal rays underneath the chromatic fan
- Cardinal element overlays are state-aware first-order diagnostics. Keep the CARDINALS / DIMENSIONS controls
  feature-flagged by `ENABLE_CARDINAL_ELEMENTS`; the overlay must render H/N and H′/N′ as explicitly coincident for
  same-index systems and must not describe nodal points as no-parallax or panoramic rotation points
- New analysis tabs require: (1) adding to `ANALYSIS_TABS` in `src/components/layout/lensDiagram/analysisTabs.ts`, (2) creating a tab content component in `src/components/display/`, (3) adding a conditional render in `AnalysisDrawerContent.tsx`
- The aspheric deviation inspector (`AsphericComparisonOverlay`) is **not** an analysis drawer tab — it is a standalone `OverlayModal` opened via the "Compare to sphere →" link in `ElementInspector`. Its open/close state lives in `useOverlayState.ts` (`asphCompareElementId`, `openAsphCompare`, `closeAsphCompare`) and resets automatically when switching lenses. This is the only diagram overlay still in `useOverlayState`; all the others (Abbe/glass-map, LCA, Petzval, bokeh, analysis drawer) live in the URL-shareable `panels` slice of the reducer. The callback flows: `useOverlayState` → `LensDiagramLoadedState` → `DiagramControlPanel` → `ElementInspector`
- Adding a new shareable view-state field requires three coordinated edits: (1) the `[key, default]` entry in `VIEW_STATE_FIELDS` in `src/utils/lensViewUrlState.ts`, (2) the matching `URLState` and `PanelsSlice` (and `PanelField` union) entries in `src/types/state.ts`, and (3) the URL key + parse/build branch in `parseLensViewQuery` / `buildLensViewQuery` if the field needs a non-trivial encoding. The reducer's `APPLY_URL_VIEW_STATE` branch and `createInitialState` use the table directly, so they pick up new fields automatically once steps 1-2 are in place
- Field curvature sign convention: positive shift = aft (toward sensor), negative = fore (toward lens). Petzval shift is negated relative to the geometric sag so it matches T/S direction for converging systems. Coma spot diagrams use industry-standard axes: sagittal on horizontal, tangential on vertical
- Distortion computation uses the same state-aware solved-chief-ray convention as `useOffAxisRays.ts`; keep visible off-axis rays, distortion, vignetting, pupil aberration, coma, and bokeh aligned if the convention changes
- Maker prefixes have one source of truth in `scripts/maker-prefixes.mjs`; `generate-build-metadata.mjs` writes `src/generated/maker-prefixes.json` for runtime metadata helpers
- SD validation uses slope-based rim check (`sagSlopeRaw`, threshold ~64.2°) not the old `sd/|R| ≤ 0.90` spherical proxy — aspherical surfaces (K near −1) can have sd/|R| well above 0.9. Element front/rear SD ratio limit is 3.0 (sanity check). Cross-gap validation checks the two boundary surfaces that face each other and requires combined sag intrusion ≤ `gapSagFrac × gap`; the default is 0.90, leaving visible clearance instead of accepting mathematical rim contact. Rendering shares this rim and gap policy; production tests fail if `computeElementRenderDiagnostics()` would hide more than 0.25 mm of a surface
- Chief ray solver (`solveChiefRayLaunchHeight`) skips iteration below 1° field angle — retrofocus designs can have pupil aberration even at 2-3°. Above 1° it uses 30-iteration bisection. The vignetting analysis uses the same solver for physically correct pupil-sweep centering
- SVG element outlines use 96 subdivisions per surface — sufficient for strong aspherics. Element shapes render each surface to its diagnostic render SD, with straight connecting edges where front/rear SDs differ (trapezoidal barrel cuts), so hidden clipping cannot create artificial edge "wings"
- Vignetting field samples are adaptive (~3° spacing, min 7 samples) — ultra-wide lenses get denser sampling automatically. Pupil sweep uses 192 rays per field angle
- Distortion analysis uses 17-sample pupil correction table and adaptive 1°-per-segment bracket search in `solveFieldAngleForImageHeight` — both scale with half-field angle for ultra-wide accuracy
- Cross-gap overlap is often the binding constraint when increasing SDs on extreme wide-angle lenses — thin air gaps between strongly curved boundary surfaces set the practical SD limit
- Layout tuning (`scFill`, `yScFill`, `maxAspectRatio`, `lensShiftFrac`) is a final visual calibration pass after the prescription and SDs already validate. Use it to better match published optical sections, not to paper over bad geometry
