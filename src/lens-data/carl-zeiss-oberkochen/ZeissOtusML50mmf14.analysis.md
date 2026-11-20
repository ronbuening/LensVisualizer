## Patent Reference and Design Identification

**Patent:** JP 2026-105585 A, 光学レンズ系 (optical lens system)
**Inventor:** Tatsuya Moriyama (森山 達也; transliteration)
**Applicant:** Cosina Co., Ltd. (株式会社コシナ)
**Filed:** December 16, 2024
**Published:** June 26, 2026
**Example details:** Example 1, printed page 9 Table 2; page 10 Tables 3 and 4

This is the explicitly authorized **Table 4 reconstruction hypothesis**. Table 2 prints S26 radius −2000.000 mm, whereas Table 4 explicitly gives an INFINITY base while retaining its aspheric polynomial. This model uses that plane base and all Table 4 coefficients literally. It does not assert an official correction. Examples 2 and 3 consistently use −2000 in their separate tables; they establish no general plane-base convention.

The user-supplied original JP_2026105585_A.pdf is 529,881 bytes, SHA-256 `2d06c012d8c6b6a4e492d615ef680e4169352f90ef5c893bba51ce47f0c280ab`. The parent/source specialist inspected these original pages twice. This executor used that verified transcription and independently checked optics; it has not materialized or visually inspected those PDF bytes. The original remains in the user's Library. Bibliographic corroboration is the [J-GLOBAL record](https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202603007546980750).

The [Cosina Otus ML 1.4/50 specification and optical section](https://www.cosina.co.jp/zeiss/otus-ml/otus-ml-1-4-50/) strongly support association: 14 elements/11 groups, two aspheric elements, approximately 50 mm f/1.4, and 0.50 m near focus. The patent prints 50.15 mm, f/1.435 and 46.24° full field; retail specifies 45.65° and 1:7.3. Similarity is not an exact factory prescription or independently verified production-example identity. This recovers the existing November 2 unbuilt held research card, not a new discovery.

## Reconstruction Status

All radii, thicknesses, indices, Abbe numbers, stop station, and three complete aspheric polynomials are literal, with the disclosed Table 4 S26 choice. There are no added plates, lenses or baffles. Two source focus states are preserved exactly: D10/D26 = 7.56/18.69 mm at infinity and 0.70/25.55 mm at object-to-first-vertex distance 394.90 mm. G1 S1–10 is fixed; G2 S11–26, including the iris, translates 6.86 mm toward the object. The detector remains z = 104.64 mm.

Clear semidiameters are **modeled estimates**, not drawing dimensions or factory readings: S1–S26 = [29,29,27.5,27.5,27,27,26.5,26.5,24,23,19,19,18,18,15,derived iris,15,15.5,15.5,16.5,16.5,15.8,15.8,13.5,13.5,15] mm. The initial unconstrained optical survey exceeded physical glass-edge bounds. Its first authoring trial failed three edge-thickness checks and the rear gap check; a second trial still crossed L12 by 0.012 mm. Those trials are retained. Only the estimated apertures were reduced to positive-edge, default-gap-sag bounds. No source shape, spacing, coefficient, material or check limit was altered. Peripheral clipping remains in results instead of widening apertures to rescue rays.

## Optical Architecture

Fourteen elements occupy eleven cemented/air-spaced components, with cemented interfaces S14, S18 and S23. The fixed front group has five elements. The moving rear group contains the iris and nine elements. S11 is one aspheric element face; S25/S26 form the double-sided rear aspheric element. All use K = 0 and conventional conic sag plus A4 through A20. S26 remains aspheric despite its flat base curvature.

## Element-by-Element Analysis

| Element | Faces | Source nd | Source νd |
|---|---|---:|---:|
| L1 | S1–S2 | 1.72047 | 34.71 |
| L2 | S3–S4 | 1.80809 | 22.76 |
| L3 | S5–S6 | 1.76385 | 48.49 |
| L4 | S7–S8 | 1.62846 | 59.17 |
| L5 | S9–S10 | 1.55298 | 55.07 |
| L6 | S11–S12 | 1.85135 | 40.10 |
| L7 | S13–S14 | 1.49700 | 81.61 |
| L8 | S14–S15 | 1.77047 | 29.74 |
| L9 | S17–S18 | 1.77047 | 29.74 |
| L10 | S18–S19 | 1.76385 | 48.49 |
| L11 | S20–S21 | 2.00100 | 29.13 |
| L12 | S22–S23 | 1.95375 | 32.32 |
| L13 | S23–S24 | 1.77047 | 29.74 |
| L14 | S25–S26 | 1.80835 | 40.55 |

No exact supplier or measured dispersion curve is assigned. Optical claims here are reference d-line only (native 587.5618 nm); other runtime channels inferred from Abbe numbers are estimates. No calibrated chromatic or polychromatic claim follows.

## Focus and Aperture

Independent first-order calculation gives infinity EFL 50.136533870 mm and BFD 18.691854447 mm, versus printed 50.15/18.69. At the published near geometry, the 394.90 mm first-vertex object has computed image gap 25.547365667 mm versus printed 25.55. The actual source image gap remains unchanged. The native conjugate audit reports −0.002634333 mm defocus (−0.793 diffraction depths), consistent at the declared first-surface reference; treating 394.90 mm as object-to-image instead gives +2.63277 mm and fails. Source object-to-image distance is 394.90 + 79.09 + 25.55 = 499.54 mm, consistent with the approximately 0.50 m retail boundary without equating vertex distance to barrel working distance.

Between the two source rows the application interpolates the **group displacement**, keeping the fixed detector. At focus coordinates .25/.50/.75 the calculated conjugate distances before S1 are approximately 1537.40/774.38/520.93 mm. These are derived positions, not published focus rows, measured cams or certified finite MTF states. The app leaves finite MTF unavailable at undeclared intermediate states. Ordinary diagram rays can be shown collimated or with focus tracking; collimated rays at the near geometry must not be described as source finite image quality.

The source nominal f/1.435 is retained. The app's ordinary-prime pupil convention derives physical iris diameter 27.473421944 mm. Native finite acceptance reaches entrance radius 16.624827742 mm, equivalent to f/1.507881304; it clips at the iris. This is not asserted to be factory aperture. Independently launching the source nominal paraxial pupil radius gives iris radius 14.513191848 mm and an axial crossing −0.070560778 mm relative to the published image plane, consistent with the upstream approximately −0.071 mm Figure 2 spherical trend. That ray is outside the saved app-derived iris: the trend comparison is an independent source diagnostic, not a claim that native nominal-aperture plots use the identical physical pupil. Iris diameter ±2% is documented as sensitivity, not saved prescription edits.

## Validation, Field and MTF

Default geometry passes with **no overrides or hidden trim**. Baseline minimum glass edge is approximately 0.06791 mm; the largest sampled cross-gap intrusion fraction is 0.87710, below default 0.90. Both 0.10 mm center gaps retain positive real clearance. Sixty-three geometry cases cover 21 focus positions and clear-radius estimates ±0.05 mm; all retain physical clearance, fixed detector and zero trim. This verifies mathematical geometry, not manufacturing tolerances or retainer clearances.

Two physical 3D ray passes cover five focus geometries including the exact near object, with field and pupil azimuth sampling. Their 18,077 combined samples yield 13,292 detector arrivals, 4,180 explicit clips and 605 raw native `noBracket` misses. Every raw miss is classified **blocked by the existing native aperture-exclusion proof**, not silently discarded or asserted to be a completed ray; no unresolved ray remains. All sampled chief rays complete. Independent analytic-sag/vector-Snell and native completed surface hits agree within 2.7e−11 mm. Physical input-disc counts are not throughput estimates. Near physical surveys use object-side angles, which are not the same as a fixed image diagonal.

Quantitative reference-line **geometric MTF** targets the modeled 43.3 mm image circle at center, half-height and corner. The source infinity and near states have zero unknown flux and converge using maximum lattice caps 64/128/256: the infinity corner needs 256; near corner converges at 128. Saved evidence retains lower-resolution unconverged results and the final converged results. These values include the estimated aperture geometry and native iris convention; no source MTF curve, retail comparison, diffraction-OTF qualification or calibrated spectral comparison is asserted. The source comparison available here is spherical trend, not measured MTF. Builder/browser analysis-panel rendering is a separate UI-health check.

## Design Heritage and Remaining Scope

Bounded dedup re-pins current main and all 19 open PR heads, checks all 2,366 retained actual source bodies and 2,438 historical numerical profiles, and verifies 26 readable archive byte hashes. No identifier or normalized uniform-scale/reversed signed 25-boundary match is found. This is not exhaustive inaccessible private history. The old November 2 card is acknowledged, not rebuilt as a second discovery.

This private hidden file is an app-ready **Table 4 patent reconstruction hypothesis** for bundle review. No catalog registration, branch publication, production identity, finite focus beyond the two source endpoints, factory clear apertures, throughput, flare/baffle model, mechanical tolerance or delivery credit is implied. Original Table 2 evidence is retained read-only; no alternate −2000 mm native model is built.
