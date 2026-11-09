# Pentax-M 120mm f/2.8 reconstruction audit

## Source and identity

Whole US4134645A Example 1, not E2/E3. Product association is probable, not factory-confirmed.

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
6. Run focused corpus validation, formatting, typecheck, lint and production build only after the shared heavy slot is released. Verify Pentax maker profile, generated catalog, route, analysis pairing and source provenance together. (Closed: done in the final integration run below.)

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

Native bounded diagnostics completed; full integration remains unfinished (closed: see the final integration gate record below). Whole-tree tests, lint, typecheck and build have not run. Subsequent aperture-sweep.mjs evaluates all eight f-stops at center/half/edge with no failed or unaimed rays. Shared audit-aperture.mjs finds f/2.799999998 and STO as limiter. The subsequent 128-cell reference-edge MTF converges through40lp/mm (delta0.00200883); original64-cell output is preserved. All five materials use estimated nd/Vd-based dispersion, including modeled normal-line C/F allocation, not verified catalog glass or partial-dispersion identity. Existing delivered models remain untouched.

## Final integration gate record

The subsequent exclusive integration run passed metadata generation, whole-tree typecheck, whole-tree format check, whole-tree lint recheck, 13 focused corpus/profile/assignee/route suites (389 tests), production build (1875 prerendered routes), and SEO audit (zero errors and warnings). This is focused test coverage, not the entire repository test suite. Initial lint found only Node globals/unused destructuring in standalone evidence scripts; those were corrected without changing optics or validation limits, and lint passed. Both logs are retained.

Built lens and Pentax maker pages were read back, along with the lazy-loaded analysis asset. Identity, source-plane and dispersion qualifications, refined convergence history and maker linkage were verified. Analysis text is in its JS asset, not embedded in prerendered HTML. No maker profile change was needed. The analysis retains its pre-gate status sentence so delivered rendered input remains byte-identical to the successful build input; this final audit and package README supersede that sentence. (Closed 2026-11-09: the cleanup pass removed that status section from the analysis.)

No prescription, aperture inference, source plane, engine, threshold, or test change was made after optical evaluation. Existing models are untouched; only the new model triplet and generated README count differ from baseline.

## 2026-11-09 — Deployment validation

Independent check against US 4,134,645 (page 6 table and the claim 1 copy): 10 R, 9 d, 5 n/ν and the back focus
equal the patent ×1.2 exactly. The printed table traces to f = 99.23 and back focus 35.21 at F = 100 against the
stated 100 and 35.52; F1.2.3 reproduces (77.97) but F1.2.3.4 does not (52.54 vs 52.73). A search of single-digit
and transposition changes isolates r8 = 53.39 for the printed 53.93, which reproduces f, back focus and F1.2.3.4;
Examples 2 and 3 reproduce their own stated values. The claims, GB 1584416, DE 2738365 and the Japanese original
JP S53-27421 A (J-PlatPat; its 1979 amendment changes only the claims) all print 53.93, so the evidence is one
kind and the value stays as printed under an `unresolved` erratum. Front page: Asahi Kogaku Kogyo, inventors
Sugiyama, Kubota, Adachi. Attribution: the LX manual lists the M 120mm f/2.8 as 5 elements / 5 groups, 21°, 1.2 m;
Examples 2 and 3 scale to the M 135mm and M 150mm. No maker section drawing exists.

Deployment change: `source.errata` (unresolved) and header note added; `focalLengthMm.design` → 120, the stated
design focal length at the file's scale.

Open: wording (closed by the cleanup pass below); the stop position is inferred.

## 2026-11-09 — Cleanup and wording pass

Data file: header rewritten in plain technical English with every fact kept (source pages, scale, printed versus
traced values, erratum, image plane, stop, rims, glass reading, focus). Subtitle → "US 4,134,645 A, Example 1 —
probable match to the 1977 production lens", the form of the Example 2 and 3 siblings. Specs → 5 ELEMENTS / 5
GROUPS, DESIGN f = 120 mm, DESIGN F/2.8, ALL SPHERICAL, PATENT f = 100 SCALED × 1.2 (was a reconstruction tag).
`catalog.closeFocusM.marketing` 1.2 added from the Pentax LX manual lens table; `focus.closeFocusM` 1.2 → 1e15 with
a plain description, since the patent prints the infinity state only and names no focusing group. `aperture.blades`
8 added (Cine Lens Wiki and a retail listing). Group labels Front / Rear. The erratum note now states the traced
F1.2.3.4 (52.54) beside f and back focus; status unchanged (`unresolved`).

Glass: four of the five n/ν rows equal catalog d-line rows within |Δn| ≤ 6e-5, |Δν| ≤ 0.15 and none equals an e-line
row, so the table is read as d-line and the five `indexReferenceNote` entries were removed. Relabels (exact rows,
checked with trylabel): L2 and L4 Unmatched → S-TIH6 (OHARA, 1.805181 / 25.425); L3 Unmatched → S-BAL50 (OHARA,
1.559625 / 61.173); L5 Unmatched → S-LAH53 (OHARA, 1.806098 / 40.926). L1 (1.51821 / 65.0) stays Unmatched: its exact
match, OHARA BSL22, is not in this branch's glass catalog (it is added on ronbuening/AddLens261113 with the M 135mm),
and HOYA PC2 misses by Δν 0.16. Roles written for all five elements. No `apd`: Pentax publishes no special-dispersion
element for this lens.

Analysis: metadata block completed (application, filing, priority, title); product paragraph (1977, LX manual
specifications, eight blades, K-series predecessor at five elements in four groups); attribution list including
Examples 2 and 3 as the M 135mm f/3.5 and M 150mm f/3.5; the seven conditions with Example 1's values; element
sections rewritten from the patent text; glass table; the erratum explained plainly with the r8 = 53.39 search and
why the printed value is kept; stop and rim table; first-order table. Removed: package hashes, sensitivity runs, MTF
grid and convergence counts, gate and test status, and the stale "pending" status section.

Engine numbers before and after (identical): EFL 119.0815 mm, FOPEN 2.800, half-field 10.2°, stop radius 17.1879 mm,
paraxial back focus 42.2493 mm, final gap 42.624 mm; only `closeFocusM` changed (1.2 → 1e15). Vignetting at f/2.8:
97.0 % at 5.1°, 71.1 % at 10.2°; edge 85.2 % at f/4, 97.6 % at f/5.6, 100 % from f/8.

Open: the r8 erratum (a correction would need a second evidence kind); the stop position is inferred (PhotonsToPhotos
puts it 20.6 mm behind S6 rather than 5 mm); relabel L1 to BSL22 once that catalog row reaches this branch. The f/2.8
real marginal ray meets the inferred stop at 19.08 mm against the 17.19 mm paraxial stop radius (the front group is
strongly over-corrected), so the real-ray on-axis aperture at that stop is about f/3.05; this follows the shared
paraxial F/N stop rule and was not changed.
