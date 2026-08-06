# Code Health Plan — Stage 4 (engine foundations and report generators)

## Summary

- Executes Stage 4 of `agent_docs/code-health-improvement-plan.md` in the documented order:
  G1 → N5, G2 → G3 → G4 → G5 → G6 → G7, G8 → G9, G10 → G11, D5.
- One commit per item; the full gate
  (`npm run typecheck && npm run format:check && npm run lint && npm run test`) runs before each commit,
  plus the per-item generator/byte-diff checks the plan names.
- Stage 3 record: `agent_docs/records/code-health-stage-3-2026-08-05.md`.

## Changes

### G1 — centralized normalizeRuntimeLens cache

- The identity-keyed `WeakMap<RuntimeLens, EngineLens>` now lives inside
  `prescription/normalizeLensData.ts`; `normalizeRuntimeLens` checks it first and populates it on miss
  (the compiled body moved to a private `normalizeRuntimeLensUncached`).
- Deleted the five private call-site WeakMaps (`compat.ts`, `trace/rayAdapters.ts`,
  `chromatic/indexResolver.ts`, `chromatic/dispersionQuality.ts`, `diagram/runtimeDiagramAdapter.ts`) —
  each call site now calls the function directly; `engineLensFromRuntime` is a one-line delegate. The
  eight previously uncached hot call sites (chiefRay ×7, cardinals, focusBreathing — amplified per field
  angle by distortion/pupil analysis) now share the cache automatically, no call-site change needed.
- No API change. Safety argument is the documented WeakMap-keyed-on-RuntimeLens pattern
  (`agent_docs/gotchas.md`): RuntimeLens objects are rebuilt on data change, never mutated in place.

Verification: gate passed (234 files / 2787 tests) including the spec's named suites
(`exactTraceGoldenValues`, `chiefRaySolver`, `opticsEngineModelState`);
`grep -rn ENGINE_LENS_BY_RUNTIME src` shows only the single cache in `normalizeLensData.ts`.

### N5 — single-source aspheric coefficient schema

- New `src/types/asphericSchema.ts`: one ordered descriptor list (`K` + A3–A20; key, kind, power, parity,
  required) with the accumulation-order warning documented. `AsphericCoefficients` is now DERIVED from the
  list (`Extract` on required/optional membership) and re-exported from `types/optics.ts`, so all existing
  imports keep working.
- `validateLensData.ts`: required/optional/known-key lists derive from the schema; no validator-local
  coefficient array remains. New descriptor-driven validator loop asserts required-missing and
  optional-non-finite errors for every schema entry.
- `internal/surfaceMath.ts`: `conicPolySag`/`sagSlopeRaw` evaluate polynomial terms from schema-derived
  term plans, keeping the separate even/odd accumulation order and the untouched conic-K clamp handling.
- **Benchmark forced the plan's documented fallback.** The naive descriptor loop (string-keyed coefficient
  lookups per evaluation) regressed rays median 1.072 → 1.325 ms (+23.6%) and layout +24.3%. Per step 5's
  contingency, coefficients are now compiled once per asphere object into `Float64Array` vectors (WeakMap
  keyed by identity — asphere objects are immutable) with exponent tables hoisted to module scope; the
  schema stays the single source of truth.
- New `__tests__/src/optics/internal/asphericSchemaMath.test.ts`: schema-shape guards (K + A3..A20 exactly
  once; parity matches power), per-descriptor term isolation against the analytic monomial (sag and
  derivative — a dropped term reads 0 and fails its own case), conic-K closed-form check, combined-term
  central-difference sweep inside the valid conic domain (adaptive step, abs+rel tolerance), and a
  separate finite-clamp test that never differences across the domain boundary.
- Golden trace values unchanged (last-ulp association changes in two terms are far inside the suite's
  1e-6/1e-8 pins).
- Final benchmark vs pre-N5 baseline: build −4.9%, layout +3.3%, rays +1.7%, analysis −4.0%,
  svgRender +4.2% — mixed signs within run-to-run noise. Both run records are committed
  (2026-08-05T19-03-39Z baseline, 2026-08-05T19-19-31Z final); the intermediate naive-loop run was
  deleted since its code never shipped.

Verification: gate passed (235 files / 2811 tests); golden suite green; benchmark within noise.

### G2 — shared refract-or-fail interaction

- New `interactRefractiveSurface(direction, normal, point, n, nn, surface, wavelengthNm, refractKernel?)`
  in `trace/interactions.ts` returning `{ direction } | { failure: { failureReason, clipReason } }`; the
  four duplicated blocks (`sequentialTrace`, `generalizedTrace`, and both `exactSurfaceTrace` loops) now
  call it, keeping only their own hit/clip-event bookkeeping.
- The `refractKernel` parameter (defaulting to the trace stack's `refractedDirection`) is how the internal
  exact stack keeps its own Snell implementation bit-for-bit: the two stacks' plain-refraction kernels
  differ in input normalization, and G2 explicitly does not unify tracer stacks. `refractDirection`'s
  parameters widened to `Readonly<Vector3>` so it satisfies the kernel type; the diffractive branch was
  already shared via `diffractiveRefractedDirection`.
- The pre-existing drift (two sites bypassing `phaseRefractedDirection`) is resolved — the phase-aware
  branch now exists exactly once.

Verification: gate passed (235 files / 2811 tests); golden suite, Nikon PF parity, folded-diffractive
fixture, mirror suites all green.

### G3 — unified paraxial engines

- `math/paraxial.ts` is now the single first-order implementation. Its surface parameter widened to a
  structural `ParaxialSurface` (R, nd, optional `interaction`, optional authored-or-compiled
  `diffractive`) with the type gap closed by `surface.interaction?.type ?? "refract"` — exactly the
  adaptation the spec called for. Both authored surfaces (runtime-lens construction) and prepared
  engine surfaces satisfy it.
- `internal/traceSurfaces.ts` is reduced to thin aliased re-exports
  (`transferParaxialRay2 as transferParaxialRay`, etc., mirroring the `constants.ts` style) plus the two
  real-ray option/result interfaces its consumers still import. The line-for-line twin — previously kept
  in lockstep by double-edit, including the July diffractive additions — is gone.
- Golden values bit-identical (the shared body is byte-equivalent math to both twins).

Verification: gate passed (235 files / 2811 tests); golden + catalog trace suites green; benchmark
within noise.

### G4 — deduplicated chromatic fallback math

- `normalLinePgF(vd, dPgF = 0)` is now exported from `dispersion.ts` (the previously private
  `partialDispersionPgF`, with the dPgF asymmetry documented at the single implementation: only the
  dispersion cascade has per-element ΔP_g,F; the fallbacks fire without element context and use the
  normal line via the default). `chromatic/indexResolver.ts` and `PVDiagram.tsx` now import it; the
  scan-local copies wait for G8's shared lib as the spec sequences it.
- Deleted `rayTrace.ts`'s verbatim `wavelengthNd` and its line-identical `computeChromaticRayFanSpread`
  (+ private `MarginalRayData`/`spanOf` helpers); both are aliased re-exports of the chromatic-module
  implementations, mirroring the `optics.ts` alias pattern, so direct `rayTrace.js` imports (tests)
  keep working.

Verification: gate passed (235 files / 2811 tests); chromaticRayFanScaling, dispersion, golden, and
skewRay suites green; `npm run generate:glass-reports` byte-identical.

### G5 — precomputed Sellmeier channel indices

- `makeSurfaceDispersion`'s Sellmeier tier now evaluates the four channel wavelengths once at build time
  and returns the same constant-lookup shape as the lineIndices tier, instead of re-running the Sellmeier
  series on every refraction event. Bit-identical outputs (same function, same wavelengths, evaluated
  once instead of repeatedly).

Verification: gate passed (235 files / 2811 tests); dispersion + golden suites green.

### G6 — hoisted vendor/alias work in the glass resolver

- Module-level `ALIAS_PATTERNS: ReadonlyMap<string, RegExp>` (42 alias boundary regexes previously
  compiled per resolution call in `glassTokens`) and `CATALOG_VENDORS` (distinct vendor names with
  precomputed uppercase, previously re-derived by scanning all 464 catalog entries per
  `candidateMatches` call), next to the existing precomputed `CATALOG`/`CODE6_INDEX` as the spec's
  pattern to mimic. Behavior-identical.
- Glass-report regeneration wall time after: 3.4 s (vitest had reported ~3.8 s for the same 8 scan files
  before the change — modest, as expected for hoisting constant-factor work).

Verification: gate passed (235 files / 2811 tests); `npm run generate:glass-reports` byte-identical.

### G7 — resolveGlass over the shared match pool + UNRESOLVED_MARKER

- Step 1: `UNRESOLVED_MARKER` exported from `glassCatalog.ts` and consumed by both runtime guards and
  the four scans that had written the regex locally.
- Step 2: `resolveGlass` is now a ranking (token-rank → source-rank → legacy-code-preference →
  canonical name) over the shared tokenize/trim/lookup implementation; the hand-maintained first-hit
  loop is deleted.
- **The spec's exact proposal diverged and was corrected rather than forced.** Ranking the per-entry
  deduped `candidateMatches` view fails on strings like `"517642 — N-BK7 (Schott)"`: dedup keeps each
  entry's best match by SOURCE rank, so N-BK7's token-0 code match was discarded in favor of its token-1
  name match, letting duplicate-code sibling H-K9L (token 0) win. The fix splits the implementation
  into `rawCandidateMatches` (every match, encounter order) and the existing deduped `candidateMatches`
  built over it; `resolveGlass` ranks the raw pool. This is documented at the call site.
- Equivalence proof: the full `resolveGlass` describe block and `glassAmbiguityScan`'s explain-≡-runtime
  assertion pass, and all eight regenerated glass reports are byte-identical across the 513-lens corpus.

Verification: gate passed (235 files / 2811 tests); reports byte-identical.

### G8 — shared glass scan library (9 commits: lib + 8 conversions)

- New `__tests__/src/optics/glassScanLib.ts`: `walkLensSurfaces` (the 513-module build-and-visit walk),
  `toRepoRelativeLensPath`, `extractPatentNumber`, the patent-PDF inventory matcher
  (`patentSearchTokens`/`patentInventory`/`findLocalPatent` + `PatentMatch`), `extractSixDigitCodes`/
  `hasActualGlassTypeToken`/`isCodeOnlyGlassAnnotation`, `isExplicitlyUnmatched`, `PGF_TOLERANCE`, and
  one canonical `findCandidates` (the three copies' filter/sort semantics were identical; only their
  returned field sets differed — the lib returns the superset `GlassScanCandidate`). Engine primitives
  (`decodeCode6`, `UNRESOLVED_MARKER`, `normalLinePgF`) imported, per the X10/G7/G4 dependency chain.
- Converted one scan per commit: unresolvedGlassScan, catalogMismatchScan, glassAmbiguityScan,
  sellmeierCoverageScan, glassRelabelCandidatesScan, glassRelabelByLensScan, sixDigitGlassCodeScan,
  glassCoverageOpportunitiesScan. Net ~−450 lines of duplicated harness.
- Seven conversions regenerated byte-identical reports. The eighth surfaced one real pre-existing
  drift: `glassCoverageOpportunitiesScan`'s local `findLocalPatent` said "No patent number parsed from
  lens metadata/reference" where the canonical (sixDigit) copy says "…from lens metadata". Unifying on
  the canonical wording changes exactly one status cell in
  `glass-coverage-opportunities.generated.md` — reviewed and committed as the drift-elimination G8
  exists for.
- Both patent-inventory scans regenerated with the local `patents/` inventory populated (508 PDFs), per
  `agent_docs/gotchas.md`.

Verification: full gate passed after the final conversion (235 files / 2811 tests).

### G9 — type/dead-code cleanup

- Renamed the engine-side `SurfaceDispersion` (`optics/types.ts`, the `{surfaceIndex, quality,
  indexAt(), glassEntry}` shape) to `CompiledSurfaceDispersion` across its consumers
  (`chromatic/dispersionAdapter.ts`, `prescription/dispersion.ts`); `dispersion.ts`'s legacy
  `{fn, quality, glassEntry?}` shape keeps the original name, ending the two-types-one-name collision.
- Deleted the dead `dispersion.indexAt` export (zero importers; its fallback semantics differed from
  the live resolver path — the X12-adjacent trap class).
- Migrated the five deprecated-trio accesses (`compatibility.catalogNd`/`.ndDiff`/`.vdDiff` in
  catalogMismatchScan ×3 and glassRelabelByLensScan ×2) to `catalogIndex`/`indexDiff`/`abbeDiff` and
  dropped the trio from `CatalogGlassCompatibility`. (The audit's "5 scan usages" include row fields
  named `catalogNd`/`ndDiff` in sixDigitGlassCodeScan that are scan-local computed values, not the
  deprecated compatibility fields — left as-is.)

Verification: gate passed (235 files / 2811 tests); glass reports byte-identical.

### G10 — readability pass on the generalized-trace loops

- In each file (no cross-stack moves): the three near-identical passive-clip stanzas (inactive-side
  block, block surface, semi-diameter) collapsed into a file-local `passiveClipReason` classifier plus a
  `recordClippedHit` helper (one clip event + one clipped hit row); break/continue control flow stays in
  the loop. `generalizedTrace.ts` keeps its compiled-interaction semantics, `exactSurfaceTrace.ts` keeps
  its authored-interaction default (`inactiveSide ?? (reflect ? block : ignore)`).
- The fourth block (intersection-failure fallback) differs structurally (fallback hit, failure reason)
  and stays inline in each loop.

Verification: gate passed (235 files / 2811 tests); mirrorOptics, exactSurfaceTrace, folded fixture,
golden, and catalog trace suites green; `npm run generate:mirror-reports` byte-identical.

### G11 — hardened audit scripts

- `audit:image-circle` and `audit:patent-figure` package.json entries now carry
  `--import ./scripts/ts-js-specifier-hook-register.mjs` (matching `audit:surface`), so adding a value
  import to `surfaceMath.ts` can no longer break them with a far-from-cause `ERR_MODULE_NOT_FOUND`.
- All three scripts use `resolve()` instead of `join(process.cwd(), …)` (absolute paths no longer
  mangled); verified with one lens via both a relative and an absolute path.
- Arg validation: patent-figure requires an integer page ≥ 1, four crop fractions in [0,1], and a
  positive `--dpi`; surface-probe rejects non-finite/non-positive `--sd` overrides — each with a
  usage-style message instead of NaN geometry and a misleading "no element edges found".
- New `__tests__/scripts/auditImageCircle.test.ts`: runs the real command line against a known lens
  (locks the loader contract) and asserts the `--sd` rejection.

Verification: gate passed (236 files / 2813 tests).

### D5 — slimmed generated reports (2 commits, one per report)

- Of the audit's four targets, only two still exceeded the 300 KiB floor in the current checkout
  (`sellmeier-coverage` at 220 KB and the six-digit scans at ≤195 KB were already under it; the audit's
  MB figures were cumulative git-history blobs).
- `lens-mount-svg-specifications.md` 2.17 MB → 228 KB: inline per-view SVG markup (already committed as
  standalone `generated/mounts/*.svg`) replaced with element/layer counts + an FNV-1a content hash; the
  per-mount machine-readable JSON blocks (emitted by construction from `src/mounts/*.mount.ts`) replaced
  with byte counts + hashes. Coverage matrix and all dimensional/geometry/coupling/source tables intact.
- `glass-ambiguities.generated.md` 796 KB → 305 KB: per-element rows (1367) collapsed to one rollup row
  per distinct (annotation, stored coordinates) ambiguity (1033) with occurrence count and one example
  locator; runner-up candidates listed by name/vendor/evidence (per-candidate Δn/Δν residuals dropped —
  the deciding residual stays in the reason, full numbers via `explainCompatibleGlassResolution`);
  index-residual reasons compressed to two-significant-digit magnitudes. Note: 305 KB sits close under
  the 300 KiB (307,200 B) floor — if catalog growth pushes it over, the next lever is plain-text example
  locators instead of markdown links.
- Consumer check before each change: no doc cites the inline SVG markup or the JSON blocks; the
  relabel-followup/buildout docs cite "selected row + tie-break explanation + candidates in resolver
  order," all preserved. `agent_docs/README.md`'s generated-report index describes both new shapes.
- Deterministic-skip preserved: with `patents/` hidden, both patent-inventory scans pass without
  rewriting their reports (verified directly).

Verification: gate passed (236 files / 2813 tests);
`find agent_docs/generated -type f -size +300k` returns nothing. **Stage 4 complete.**
