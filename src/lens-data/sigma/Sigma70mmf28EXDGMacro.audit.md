# Audit — SIGMA MACRO 70mm f/2.8 EX DG

Patent: JP 2008-020656 A, Numerical Example 1. Date: 2026-10-04.

## Job and reference versions

The original card and original ten-page PDF are retained unchanged. The PAJ wrapper on PDF page 1 establishes the English inventor spellings, KAMIMURA YUTAKA and HOSHINA AI; the normalized data and analysis names are Yutaka Kamimura and Ai Hoshina. The Japanese publication begins on PDF page 2. Example 1 is on PDF pages 7–8, Table 1 on page 9 and Figures 1/7 on page 10.

Current controlling specifications and source references are pinned to main commit `53470da5a5cbda1807d1e523fbc71963e5a1adc7`. Their hashes are recorded in evidence and manifest. The current data schema, analysis specification, template, defaults, taxonomy, spherical/aspheric rules, dispersion normal line and ordinary-stop construction were inspected. These reference reads are not application execution.

The candidate archive was verified against SHA-256 `30b8a021444596b54302d63c3d063d35f9b10b77536d191744358cf20b50eb23`; its manifest was `e5d9fbd4e74a83fe211f82ea4234c877801cd7d576039e08c914aedfcae5a8e5`. Every payload hash matched before reconciliation.

## Extraction and conventions

The immutable independent source-first extraction retains every published Example 1 radius, thickness, index, Abbe number, all three states, Table 1 values and the partial-dispersion equation. It was re-entered from rendered originals before candidate inspection. No source repair was made.

- Distances and radii are native millimetres; scale is 1. Positive radius has its centre imageward.
- Nd/Vd are native d-line coordinates. No e-to-d conversion or marketing normalization occurs.
- The source zero-radius rows are planes. S9 is the stop, supported by Figure 1; S17 is a real plane refracting into L9. It is not an omitted plate.
- The two 1000.0000 mm radii remain finite. All surfaces are spherical or plane; aspheric/diffractive terms and rear plates are absent.
- Ten physical elements form nine air-separated groups. S11 is the shared cemented interface, owned by downstream L6.
- D0 is object-to-first-vertex distance. BF is last-vertex-to-image distance and equals collimated BFD only at the infinity configuration.
- The three mechanical stations are PUBLISHED. Piecewise-linear interpolation between them is a model approximation, not a source cam law or a certified intermediate conjugate.

## Model transformations and construction history

The transformation ledger preserves plane normalization, native scale, all published focus keyframes, spectral normal-line conversion and inferred semi-diameters. No surface or plate was omitted or added. Before the construction checkpoint, the initial paraxial iris estimate 10.384267246 mm was superseded by the source-independent current-main exact nominal-pupil construction, 10.496829817 mm. This was a modeling-convention correction, not a patent correction. Its dependencies were rechecked before the candidate was delivered.

Stage 4 found no justified optical-data or scientific-analysis change. The final data and analysis remain byte-identical to the reviewed candidate:

- Data SHA-256: `b2ab2032e3c2c8ce3bdd8749457bd58b519dff136085e901cbb1073e8b741c16`
- Analysis SHA-256: `cbd584c5aed439bbb2b1ea27c977d09a7c8cea86fec41e1a9f68f40d0907d132`

The verification dossier was extended with the frozen independent baseline, new independently implemented 3D geometry checks, complete final-byte reconciliation and a precise qualified-model disposition. The approval record now includes the explicit response “Great, run with it.” No other exception was added.

## Glass and spectral review

The construction evidence records bounded searches of current/historical OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs. Independent source-first research separately checked relevant primary records from all six manufacturers and searched all 435 records of HOYA's official 20260707 catalog including obsolete glass. This confirms coordinate compatibility and the conservatism of class-level labels, not the actual production supplier or melt. It does not claim that every vendor's entire catalog was independently rechecked during Stage 4.

The 1.56045/71.6 material in L6/L7 remains unmatched. Nearby publicly named candidates do not justify a specific identity. Other coordinates have multiple plausible catalog alternatives; the data does not turn those alternatives into manufacturer-confirmed glass names. OHARA family prefixes remain distinct.

Patent DeltaPgF uses the normal line 0.6575−0.002Vd. The application baseline is 0.6438−0.001682Vd. Fresh conversion gives:

| Elements | Patent deviation | Absolute PgF | Stored application dPgF |
|---|---:|---:|---:|
| L6, L7 | 0.0285 | 0.5428 | 0.0194312 |
| L8 | 0.0443 | 0.5386 | 0.0320512 |

These fields are stored directly on the elements. The original deviations remain the quantities used in the patent conditions. The coordinates and relative partial dispersion do not uniquely determine individual nC/nF/ng. Catalog line indices are not presented as source-measured production data. No independent full-lens APO or chromatic-image-quality certification is claimed.

## Numerical results and reference planes

Independent scalar reduced-angle tracing and separately composed ordinary-angle matrices agree with the final TypeScript values. Analytic singlet/translation checks, a plane-parallel Snell test and the small-ray exact/paraxial limit provide additional implementation checks.

| Quantity | Infinity | Intermediate | Near |
|---|---:|---:|---:|
| EFL (mm) | 68.906147854 | 64.603461241 | 61.064564266 |
| Collimated BFD at this configuration (mm) | 55.815747546 | 33.704742980 | 15.518764259 |
| Image distance for source conjugate (mm) | 55.815747546 | 65.702807120 | 77.540910502 |
| Printed BF (mm) | 55.8157 | 65.7028 | 77.5409 |
| Magnification | — | −0.495299532 | −1.015681467 |
| First-vertex-to-image track (mm) | 124.8557 | 150.0428 | 176.0809 |
| Object-to-image distance (mm) | ∞ | 300.0428 | 255.0809 |
| Focus coordinate | 0 | 0.8501483788 | 1 |

The reference-plane-normalized source comparisons pass at published precision. Front-block objectward travel is 25.1871/51.2252 mm at the finite stations; rear-block travel is 9.8871/21.7252 mm. Their difference is exactly the D16 increase. Neither sampled nor piecewise-linear authored motion reverses.

Standalone element focal lengths in millimetres are −71.590330, +45.215389, +80.719761, −38.576952, −36.614433, +47.340327, +90.222707, +105.729177, −82.531250 and +121.404589. The cemented pair is −217.690789 mm; its partners' isolated powers must not be confused with in-situ powers. The first functional block is +55.500687 mm and the second −285.211555 mm. G1/G2 are −71.590330/+49.741896 mm, L1 +56.160005 mm and L3 +49.037258 mm.

The per-interface d-line Petzval sum is +0.00147366678228 mm⁻¹. Both whole-system tests fail to establish the corresponding label: TL/EFL>1 and collimated BFD/EFL<1 at the published configurations. A negative front subgroup does not alone establish whole-system retrofocus.

Condition (1) evaluates to 0.805453338 and condition (2) to 1.841610374. Condition (5) is met by L3A and condition (6) by L3B. All applicable inequalities pass with the native source convention and at-least-one semantics preserved. Spectral source assertions are not mislabeled as independent measurements.

## Aperture discrepancy and expressly limited scope

The patent publishes F=2.8823/3.8824/5.0151 but supplies no physical iris diameter or precise finite-F convention. The accepted model preserves the source geometry and that table, infers one fixed iris at infinity and leaves finite-F reproduction uncertified. The failed numerical comparisons remain in results.

The exact approved proposal was:

> I recommend finishing a qualified model: preserve the source geometry and f-number table, calibrate an inferred iris at infinity, and explicitly mark close-focus f-number reproduction as unverified. The failed comparisons would stay in the dossier.

The explicit response was:

> Great, run with it.

This permits only the stated limitation. It does not make a source-F mismatch a PASS, authorize a source correction or waive geometry, structure, glass or other calculations.

The nominal infinity incoming pupil radius is 11.953326832 mm. Exact tracing to S9 yields the adopted 10.496829817 mm physical stop radius, matching the independently inspected current-main construction convention. Infinity nominal F agreement is calibration, not evidence of the actual diaphragm diameter. The exact emergent marginal-ray 1/(2NA) sequence is 2.880771/3.891509/4.967105. The paraxial working-F sequence at the authored image planes is 2.851390/3.859563/4.930468. Neither is substituted for the printed F row. The separately preserved source-only baseline contains additional paraxial and exact-NA calibrations that also failed to reproduce the finite row. No focus-linked iris schedule is introduced.

The original baseline's `finite-source-aperture-resolution` failure remains unchanged. Final acceptance of the limited scope is a separate check; the scientific discrepancy is not claimed resolved.

## Independent geometry and containment

A new Stage 4 3D exact-Snell implementation used forward normals, near-cap sphere intersections and a separately written stop-aiming solver. It did not call the candidate's exact-trace or geometry functions. It sampled 22 focus positions: 0 to 1 at 0.05 increments, plus the exact published intermediate keyframe. This includes all three source stations. It tested 1,122 rays, comprising a full on-axis pupil, off-axis skew bundles through 75% pupil radius at 60% of the paraxial format-corner field, and format-corner chief rays.

All sampled rays passed. Minimum non-stop ray clearance was 1.688761898 mm; minimum glass thickness over sampled shared bands was 0.545400847 mm; maximum spherical rim angle was 37.999546°; minimum shared-band physical gap clearance was 0.15 mm. Sphere domains, the 3:1 aperture-ratio bound and the 90% shared-band gap-intrusion policy passed. The glass SDs agree with the original figure proportions within the documented inference tolerance. Exact measured production diameters are not claimed.

The geometry checks preserve the finite sample limits. They do not certify continuum coverage, full-field edge-pupil transmission, image quality or the production renderer's hidden-trim diagnostics. Source-mandated asphere quantities are not applicable because this example is all-spherical.

## Independent review and immutable baseline

The baseline was frozen before candidate access with fingerprint:

`f72f15b3478c7add834db1daf6923e47e71600a30583712cbe92fafea9f489b7`

The fingerprint is a deterministic hash of the recorded non-manifest payload inventory, not cryptographic proof of reviewer blindness. Exact original baseline text payloads are preserved under evidence.independentPass; the exact source-only verifier is embedded as FROZEN_BASELINE_VERIFIER in the complete final verify.py. The original PDF/card are reused without byte changes. The final verifier reconstructs the original baseline in a temporary sibling directory, verifies all frozen payload hashes and re-executes it. Its original incomplete-baseline exit 2 and all numerical failures are preserved and checked, rather than edited retrospectively.

Exposure included the selected original source/card, shared controlling references and raw current-main dispersion/aperture code. Names of prior author/preparation files and sibling inputs were visible in an inventory, but their contents were not consulted before freeze. Adjacent Example 2 text and shared figures in the same original PDF were visible but not numerical inputs. A request to complete aperture checking supplied no candidate numerical conclusion. After freeze, the exact candidate and limited-model approval were inspected. This is genuine source/method independence within that disclosed context, not an assertion of absolute contextual blindness.

The final calculation replays the construction checks and separately recomputes the final TypeScript through the independent scalar/matrix methods. All source values, stored element powers, spectral conversion, native conditions, focus conventions and the expanded 3D containment checks agree. Interpretation, citations and source attribution were reviewed manually in addition to token/rounding checks.

## Quantitative-claim map

| Analysis claim | Supporting result/evidence |
|---|---|
| Patent metadata, inventor order and source identity | Original PAJ/Japanese pages; original hash checks |
| Product specifications, July 2006 release, SLD positions, floating/helicoid description | Primary Sigma product/archive/diagram/release; named-designer interview; productCorrelation |
| Counts, planes, cement, native source preservation | Four-view source equality; pairing-and-native-dispersion; documented-structure |
| EFL, BFD, track, conjugates and principal planes | sourceModel/implementedModel.states; independentReconciliation.states |
| Element powers and roles | F04; independentReconciliation.standaloneElements; patent paragraphs cited in analysis |
| Functional/cemented powers | F05; frozen sourceModel.functionalGroupsInAir; parsed-model group checks |
| Petzval and telephoto/retrofocus tests | Per-interface Petzval and normalized first-order results |
| Glass alternatives and residuals | glassEvidence; catalog coefficient replay; independent baseline primary catalog records |
| PgF/dPgF conversion | F06; independent-native-spectral-conversion |
| Published motion and interpolated-state limitation | Native spacing tables; focus-keyframes; movement and geometry state records |
| Inferred iris and retained finite-F discrepancies | stop-calibration; raw comparisons; approved-aperture-scope-only |
| Sampled ray/geometry containment | independentReconciliation.geometry; independent-geometry-containment |
| Patent condition inequalities | implemented-conditions; analysis-condition-logic; frozen independent condition records |

## Final gate and pending integration

All applicable mandatory CHAT_PREFLIGHT checks pass for the expressly qualified fixed-iris model, with raw F comparison failures retained. Original source bytes, final TypeScript and final analysis are hash-bound. The canonical dossier contains nine files with one complete runnable verifier. Clean-extraction replay is required before delivery and is recorded with final package hashes.

READY_FOR_BATCH applies only to the stated limited pre-integration scope. Integration status remains INTEGRATION_PENDING. Actual project type checking, Prettier, buildLens/validateLensData, runtime glass resolution, production render-trim diagnostics, corpus policy and build acceptance are NOT_RUN at integration scope. Portable substitutes are not described as those application checks.

## 2026-10-09 — Semi-diameter pass against the patent figure

Source: `patents/JP2008020656A.pdf`, PDF page 10, Fig. 1 (Numerical Example 1), panel (A) infinity and panel (B) life-size. Both panels are clean line drawings without ray bundles; the native raster is about 400 dpi and was measured at 400 dpi. No maker construction diagram was supplied for this pass, so the patent figure is the only drawing evidence.

Scale. Vertex crossings in panel (A) against the infinity prescription give 404 px for S1→S20 (69.04 mm, 5.852 px/mm), 278.5 px for S1→S10 (47.64 mm, 5.846 px/mm) and 269.5 px for S3→S16 (46.14 mm, 5.841 px/mm); 5.85 px/mm (0.171 mm/px) was used. Panel (B) is drawn at the same scale: S1→S16 is 360 px, and the S16→S17 gap is 181 px (30.9 mm against the published 31.0 mm). Heights were read on both sides of the axis in panel (B), which agree to 1 px, and cross-checked on the label-free side of panel (A), which agrees to 1–2 px (about 0.3 mm).

| Surface | Before | Figure (mm) | After | Evidence |
|---|---:|---:|---:|---|
| 1 | 20 | 19.7 | 20 | retained, 1.5 % |
| 2 | 20 | 18.4 | 20 | retained; the figure chamfers the rear corner of G1 (concave face ends about 8 % lower), inside measurement noise, and lowering it reduced the engine half-field estimate from 27.6° to 26.4° |
| 3, 4 | 18 | 18.0 | 18 | retained, square-cut rim |
| 5, 6 | 16.5 | 15.5–15.6 | 15.6 | both panels; square-cut rim, both faces one height |
| 7 | 14 | 13.1 | 13.1 | flat front face of L4 ends at 76.5 px |
| 8 | 14 | 12.1 | 12.1 | figure chamfers the rear corner; concave face ends at 70.5 px, 25 px behind the S7 vertex, which matches the R = 22.74 sag at 12.1 mm |
| 10 | 14.5 | 11.7 | 11.7 | front edge of L2A at 68.5 px, 15 px ahead of its vertex (sag of R = −27.01 at 11.7 mm is 2.67 mm); a chamfer then rises to the common rim |
| 11, 12 | 14.5 | 13.25 (B), 13.5 (A) | 13.4 | common rim of the cemented pair; flat top ends where the R = −35.28 sag predicts |
| 13, 14 | 14.5 | 13.8–14.0 | 14.5 | retained, 4–5 % |
| 15, 16 | 14.5 | 14.1–14.2 | 14.5 | retained, 2–3 % |
| 17, 18 | 15 | 14.4–14.5 | 15 | retained, 3–4 %; the 0.5 mm rear chamfer is not modeled |
| 19, 20 | 15 | 15.0 | 15 | retained |

The stop surface is unchanged. The figure's stop arrows end about 11.7 mm from the axis, which is schematic and was not used.

Clearance after the change, traced with real meridional rays at image height 21.63 mm for the three published focus states: no surface clips the axial marginal ray at F/2.8823 and none blocks the corner chief ray. The tightest axial margins are S10 at 11.7 mm against a 10.42 mm marginal ray, S8 at 12.1 mm against 10.82 mm, and S7 at 13.1 mm against 11.62 mm; these ray heights are identical at all three states because the front block moves as a unit. Chief-ray heights on the changed surfaces are at most 8.52 mm. The repo surface validator reports no errors, the image-circle check reports 0 undersized, and traced corner coverage stays at 100 % (17.3°, 21.65 mm). The engine half-field estimate (first limiter S1 at 27.6°) and the stop radius 10.4968 mm, hence the f-number, are unchanged.

Vignetting. The lower L4 rear rim increases the modeled one-sided cut of the unvignetted full-field bundle at S8 from 7 % to 25 % at infinity (23 % at 0.5×, 4 % at 1.0×); S5/S6 move from 41/44 % to 48/49 % and S7 from 36 % to 42 % at infinity. These follow the drawn rims and are left as real off-axis vignetting. The front elements S3/S4 already cut 65–67 % of that bundle.

Live render at infinity, at the published intermediate station and at life size was compared with Fig. 1: the L4 and L2A corner steps, the L1-subgroup staircase and the two-element rear block now follow the drawing.

Limitations. Fig. 1 is a schematic patent drawing, not a dimensioned one; values are estimates with roughly 0.2–0.3 mm reading uncertainty. Chamfers are represented only as a difference between the two face heights of an element. L7 remains about 0.6 mm taller than drawn relative to the cemented pair.

## 2026-10-09 — Integration: glass labels and metadata

- Glass: eight elements relabelled from class descriptions to the coordinate-equal HOYA rows already listed in the analysis (E-FEL2, TAF1, LAC14, E-F5, E-FL5, FCD1, LACL60, TAFD5G; catalog-minus-source Δnd 0, |Δνd| ≤ 0.04), so they trace on catalog dispersion curves instead of the Abbe fallback. TAF1 resolves through the shared 773/496 class to the S-LAH66 curve. The names are coordinate equivalents, not supplier identifications.
- L6 and L7 (1.56045/71.6) stay Unmatched: no row within source precision in the local HOYA, OHARA, Sumita or Hikari catalog files or the application catalog. Their violet channel keeps the patent-derived dPgF.
- Metadata: patent number written with the six-digit serial (JP 2008-020656 A); `specs` and subtitle put in catalog form. Display name unchanged (Sigma's "MACRO 70mm F2.8 EX DG").
