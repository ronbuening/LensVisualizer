# Pentax-M 120mm f/2.8 reconstruction audit

## Source and identity

Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11. Whole US4134645A Example 1, not E2/E3. Product association is probable, not factory-confirmed. Primary source pixels and manufacturer page are retained under evidence/pentax-m120/source.

Archive: PentaxM120_SourceReady_20261109.zip, 8,142,262 bytes, SHA256 c0207340b2069f2c5f5c0194b5f73808e0b65d2f0e9f286deaf8fee6a6e361a6. CRC and all nine manifest payload hashes verified.

## Authored assumptions frozen before performance analysis

- Uniform scale 1.2 for every radius and axial distance, including final gap.
- Literal final gap 42.624 mm; image z106.776 mm. No source residual correction.
- All spherical, five separated elements. Inferred d-reference; unmatched glass labels.
- Clear radii: front three elements 22 mm, rear two 11.5 mm. Figure-derived estimates, not source manufacturing values.
- Stop 5 mm after surface 6. Shared paraxial F/N-derived radius, no authored radius override.
- f/2.8 and source 10.2° half-field retained; static infinity-only.
- No checks overrides, engine edits, threshold changes, or focus retuning.

## Planned qualification

1. Native buildLens and production render geometry diagnostics; inspect caps, edge thickness, inter-element clearances and hidden trim.
2. Preserve source numbers and total image distance, including split gap around the stop; verify static focus endpoints.
3. Freeze baseline geometry, trace representative axial and off-axis rays, and quantify pupil/iris consistency and declared-field throughput.
4. Independently evaluate stop offsets 3, 5 and 7 mm after surface 6 and clear-radius variations ±5%, subject to geometry validity. Report failures as failures; do not choose values to improve MTF.
5. Evaluate diffraction MTF at the literal design plane and separately labeled best-axial plane, at reference wavelength and approximate C/d/F spectrum. Report convergence and spectral-data limitations.
6. Run focused corpus validation, formatting, typecheck, lint and production build only after the shared heavy slot is released. Verify Pentax maker profile, generated catalog, route, analysis pairing and source provenance together.

## Native qualification results

The one-worker, 1536 MiB bounded run is reproducible with:

`node --max-old-space-size=1536 --import ./scripts/ts-js-specifier-hook-register.mjs evidence/pentax-m120/native-validate.mjs`

- Baseline geometry passes unchanged checks; all front/rear hidden trims are zero.
- EFL 119.08145357952596 mm; authored image z106.77600000000001 mm; f/2.8 pupil consistency; static focus endpoints.
- Iris SD17.187914546473376 mm; EPD42.529090564116416 mm.
- Throughput at source field0/5.1/7.65/10.2°:1/0.97044335/0.85221675/0.70935961; no failed or unaimed samples.
- Nine independent inference sensitivity cases recorded. Six pass; three +5% cap variants fail the default90% gap-sag rule. No overrides, prescription changes or performance-driven cap tuning.
- Reference source-plane MTF full-field40lp/mm remains unconverged at64-grid cap (maximum delta0.01109834); edge converges through20lp/mm. All other evaluated source-plane fields/spectra converge through40lp/mm.
- Literal source-plane paraxial offset−0.37468540 mm remains. Separate best-axial diagnostic shifts−0.45642558 mm/reference and−0.45589343 mm/CdF do not modify source plane or prescription.
- Raw geometry, rays, spectral limitations, nine sensitivity cases and four MTF configurations retained under evidence/pentax-m120/native-*.json.

## Current status

Native bounded diagnostics completed; full integration remains unfinished. Whole-tree tests, lint, typecheck and build have not run. Subsequent aperture-sweep.mjs evaluates all eight f-stops at center/half/edge with no failed or unaimed rays. Shared audit-aperture.mjs finds f/2.799999998 and STO as limiter. The subsequent 128-cell reference-edge MTF converges through40lp/mm (delta0.00200883); original64-cell output is preserved. All five materials use estimated nd/Vd-based dispersion, including modeled normal-line C/F allocation, not verified catalog glass or partial-dispersion identity. Existing delivered models remain untouched. No commit, push, PR, merge, publication or deployment.

## Final integration gate record

The subsequent exclusive integration run passed metadata generation, whole-tree typecheck, whole-tree format check, whole-tree lint recheck, 13 focused corpus/profile/assignee/route suites (389 tests), production build (1875 prerendered routes), and SEO audit (zero errors and warnings). This is focused test coverage, not the entire repository test suite. Initial lint found only Node globals/unused destructuring in standalone evidence scripts; those were corrected without changing optics or validation limits, and lint passed. Both logs are retained.

Built lens and Pentax maker pages were read back, along with the lazy-loaded analysis asset. Identity, source-plane and dispersion qualifications, refined convergence history and maker linkage were verified. Analysis text is in its JS asset, not embedded in prerendered HTML. No maker profile change was needed. The analysis retains its pre-gate status sentence so delivered rendered input remains byte-identical to the successful build input; this final audit and package README supersede that sentence.

No prescription, aperture inference, source plane, engine, threshold, or test change was made after optical evaluation. Existing models are untouched; only the new model triplet and generated README count differ from baseline.
