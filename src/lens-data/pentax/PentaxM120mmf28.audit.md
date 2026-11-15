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
puts it 20.6 mm behind S6 rather than 5 mm); relabel L1 to BSL22 once that catalog row reaches this branch (closed below). The f/2.8
real marginal ray meets the inferred stop at 19.08 mm against the 17.19 mm paraxial stop radius (the front group is
strongly over-corrected), so the real-ray on-axis aperture at that stop is about f/3.05; this follows the shared
paraxial F/N stop rule and was not changed.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: US 4,134,645, page 2 (sheet 1), Fig. 1, the section of Example 1, read at its native 300 dpi raster. The
dash-dot axis is skewed by about 0.9° (row 1395.5 at x 730 falling to 1383.5 at x 1515), so each rim is taken as half
of the element's drawn top-to-bottom extent rather than measured from the axis line.

Scale: vertex crossings read beside the axis at r1 853, r2 895.5, r3 935, r4 and r5 950, r6 1019, r7 1348, r8 1376,
r9 1430.5 and r10 1447.5 px. r1 to r10 is 594.5 px for 53.46 patent units, 11.12 px per unit; a least-squares fit
over all ten crossings gives 11.26 (residuals under 4.5 px except 9.1 px at r1). The spans r1 to r6 (10.63) and r6 to
r10 (11.32) show the front group drawn slightly compressed. At the file's ×1.2 this is 0.1079 mm/px (0.1065 by the
fit).

| Element | Drawn half-height (px) | Figure sd (mm) | Stored sd (mm) | Figure / stored |
|---|---|---|---|---|
| L1 (S1, S2) | 202.9 | 21.9 (21.6) | 22 | 1.00 (0.98) |
| L2 (S3, S4) | 203.2 | 21.9 (21.6) | 22 | 1.00 (0.98) |
| L3 (S5, S6) | 201.3 | 21.7 (21.4) | 22 | 0.99 (0.97) |
| L4 (S7, S8) | 105.5 | 11.4 (11.2) | 11.5 | 0.99 (0.98) |
| L5 (S9, S10) | 106.0 | 11.4 (11.3) | 11.5 | 0.99 (0.98) |

Fig. 1 draws every element with a flat cap at one height for both faces, as the file has. The two directions agree at
the rims: at the stored values the edge thicknesses are 4.78 mm (L2) and 2.64 mm (L4) against about 4.7 and 2.7 mm
across the drawn caps net of line width, and the rim gaps L1 to L2 (0.64 mm) and L4 to L5 (1.96 mm) against about 0.8
and 2.1 mm. The figure draws the strongly curved faces R1 and R5 flatter than the printed radii, a schematic
simplification that does not move the rim heights. An overlay of the model outline on Fig. 1 at the fitted scale
matches all five silhouettes.

Decision: every rim is within 3 % of the figure, inside measurement noise, so no value changed; the stop was outside
this pass. Clearance with the unchanged rims: the surface validator passes; the aperture audit finds f/2.8 with no rim
limit; the image-circle floor reports nothing undersized; the traced corner chief ray reaches 21.65 mm at 10.2°; the
real-ray trace at 21.6 mm image height shows no axial clip or chief-ray block, with the smallest axial margins 0.74 mm
at S1 (21.26 of 22 mm) and 1.29 mm at S7. Corner illumination at f/2.8 is 97.0 % at 5.1°, 89.8 % at 6.8°, 81.3 % at
8.5° and 71.1 % at 10.2°, identical to the starting rims. Engine half-field 10.2° and f/2.8, unchanged.

Maker drawing: none exists (see the deployment validation above); the LX manual lists five elements in five groups and
Pentax publishes no aspherical or special-dispersion element for this lens. The page at infinity, the only state the
patent prints, shows the three tall front elements and the half-height rear pair as Fig. 1 does.

## 2026-11-09 — Glass coverage

The OHARA BSL22 row (the same row ronbuening/AddLens261113 adds for the M 135mm) is now in this branch's catalog, so L1
is relabelled `BSL22 (OHARA catalog equivalent; production supplier unspecified)`, confirmed with trylabel (catalog
1.518206 / 65.04). All five elements now trace on OHARA catalog dispersion.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page (infinity, the focus slider's far end, the focus-movement overlay, the L1 and L5 inspectors)
with Fig. 1 and the Fig. 2 plots, at the scale proved in the semi-diameter pass (11.12 px per patent unit from the
vertex crossings, confirmed vertically by the drawn edge thicknesses of L2 and L4). The model outline over Fig. 1
matches all five silhouettes in the drawn order: three equal front elements, the rear pair about half as tall, every
element square-cut. No rim changed. There are no lands and no face is below its baseline; the worst loss against the
baseline rims is 0.0 points (corner 71.1 % at 10.2°). Engine half-field 10.2° and f/2.8, unchanged.

Labels: L1 to L5 are the patent's own designations (claim 1); the types agree with the signs of R; the roles are true.
There are no doublets, aspheres or `apd` tags (neither the patent nor Pentax names a special glass). The patent names
no groups; Front (S1 to S6) and Rear (S7 to S10) bracket its closely spaced first three lenses and the remote fourth
and fifth. The stop sits in d6 between L3 and L4. Movement: static infinity model; the focus overlay reports no group
movement and the slider's far end changes nothing. After today's L1 relabel, the header and analysis now say all five
n/ν pairs equal catalog d-line rows, and the analysis limitation about L1's printed pair is replaced by the g-line
comparison below.

Colour (Fig. 2, d and g lines at 600 dpi, read against the drawn reference line; the scan is rotated about 0.9°): the
g-line paraxial focus is plotted at +0.159 to +0.161 at F = 100 against the model's +0.156, and the g-line zonal
values agree within about 0.006 from 0.12 to 0.99 of the pupil (+0.115 against +0.120 at full aperture). The d-line
spherical aberration is plotted up to about 0.02 more negative than the model traces (−0.075, −0.094 and −0.086 at
0.99, 0.71 and 0.52 of the pupil against −0.054, −0.080 and −0.066). The r8 = 53.39 reading traces −0.068, −0.086
and −0.071 there, closer in d, but puts the g line 0.012 to 0.018 too far out, so the plots do not settle the
erratum. Every glass label resolves (Δnd ≤ 5e-6, Δνd ≤ 0.04); no relabel proposed.

Distortion: Fig. 2 plots +0.92 % at 10.1° and about +0.44 % at 7.4°; the model traces +0.87 % at 10.2° and +0.52 %
at 7.65°, and the edge value hardly depends on the stop position (0.85 to 0.90 % for stops 4 to 24 units behind r6).

Astigmatism: Fig. 2 plots ΔS −0.198 and ΔM −0.146 at 10.2°, about −0.13 to −0.145 for both at 7.65° and −0.066 at
5.1° (F = 100). A Coddington trace along the real chief ray with the modeled stop (4.17 units, 5 mm, behind r6) gives
ΔS −0.167 but ΔM +0.301 at 10.2°: the meridional field turns back at the edge, unlike the patent. With the stop 16 to
18 units behind r6 the trace follows the plot within about 0.02 at every field; at 17.17 units (20.608 mm, the
PhotonsToPhotos position) it gives ΔM −0.066, −0.117, −0.152 and ΔS −0.068, −0.140, −0.214 at 5.1°, 7.65° and 10.2°.
A scratch copy with the stop there passes the surface validator, clips no beam at the 21.6 mm corner, has a 13.64 mm
stop radius and transmits 72.8 % at 10.2° (71.1 % now). The stop position was outside this pass.

Assignees: "Asahi Kogaku Kogyo Co., Ltd." matches the front page (Asahi Kogaku Kogyo Kabushiki Kaisha) and the
catalog's other 32 uses; no variant.

Open: move the stop to about 20.6 mm behind S6 (d6 split 20.608 + 14.000), on the evidence of the patent's own
astigmatism plot; owner decision. (Closed: applied the same day on the coordinator's decision, below.)

Stop moved: S6 `d` 5 → 20.608 and STO `d` 29.608 → 14.000 (d6 stays 34.608 mm, so the image plane stays at
106.776 mm); nothing else changed and the stop radius follows the F/N rule. Coddington trace, model against Fig. 2 at
F = 100: ΔS −0.068, −0.140, −0.214 against about −0.066, −0.145, −0.198 plotted, and ΔM −0.066, −0.117, −0.152
against about −0.066, −0.13, −0.146, at 5.1°, 7.65° and 10.2° (at the old stop: ΔS −0.086, −0.156, −0.167 and ΔM
−0.105, −0.081, +0.301). Engine before and after: EFL 119.0815 mm, paraxial back focus 42.2493 mm, half-field 10.2°
and f/2.8 unchanged; stop radius 17.188 → 13.641 mm; engine entrance-pupil offset from the stop −1.19 → +13.30 mm.
The real f/2.8 marginal ray now passes the paraxial stop radius at an entrance height of 20.04 mm, a real on-axis
f-number of about f/2.97 (f/3.05 at the old stop). Surface validator OK; aperture audit f/2.8 with no rim limit;
image circle 0 undersized; corner coverage 100 % (10.2° reaches 21.65 mm); the real-ray trace at 21.6 mm shows no
axial clip or chief-ray block. Corner transmission at f/2.8: 97.8 % at 5.1°, 91.4 % at 6.8°, 83.0 % at 8.5° and
72.8 % at 10.2° (97.0, 89.8, 81.3 and 71.1 % at the old stop), 99.6 % at the edge at f/4; rims unchanged, worst loss
against the baseline rims 0.0 points.
