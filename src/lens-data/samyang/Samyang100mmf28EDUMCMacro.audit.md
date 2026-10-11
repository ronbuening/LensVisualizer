# Samyang 100mm F2.8 ED UMC Macro: source audit

## Job and frozen references

The fixed source is KR20170073883A, Example 1, Table 1, Figure 1. The original sixteen-page PDF and original job card are preserved unchanged. The output stem is Samyang100mmf28EDUMCMacro.

Current main was verified on 2026-10-08. All 248 restored reference files matched that commit. The controlling specifications, template, authoring guide, patent-audit guide, glass references, taxonomy and configuration are identified in evidence.json.

The clearance CSV of that date contained 67 rows and was read only. Its scoped approval is an authorization record, not source-internal evidence.

## Gate disposition

The final pair passed the independent technical review as the owner-approved infinity/d-line limited model. The package manifest marked the data/analysis pair, original inputs, source evidence, executable verifiers and clean-extraction checks ready for batch integration; repository integration was pending at that point. Closed 2026-10-11: the lens is integrated under `src/lens-data/samyang/`, and the approved rim set was superseded the same day (see the semi-diameter section below).

The initial Stage 1 hold and original frozen source baseline are preserved in private supporting evidence. Explicit owner approval resolved authorization for the stated limited model; it did not turn the remaining source contradictions into proved corrections. Stages 2 and 3 were executed in order, and their affected checks were rerun after the two non-optical Stage 4 review corrections.

## Extraction and conventions

All 28 numbered rows and OBJ were directly extracted and visually checked from PDF pages 10–11. Figure 1 on page 12 has fifteen spherical elements in twelve components. Cemented interfaces are rows 8, 11 and 14; the distinctive high-index E3 and low-dispersion E4 correspond to the manufacturer's HR and ED positions.

Positive radius means its center of curvature lies imageward. Native Nd/Vd are d-line by paragraph 0120. No scale or index conversion is applied. All original labels, radii, thicknesses, C values and material names are retained. Row 19(STO) is a powered glass entrance; row 18 is planar. Row 28 prints Dn=1.002 with no image row. No asphere equation or coefficient table applies.

Interpreting C as a radius has two different source-internal supports: the exact aperture is approximately f/2.904, consistent with printed f/2.9, and physical diameters 2C satisfy claim 1. This supports a uniform column convention, not an independently proved stop relocation. The source's visible-wavelength values printed with “mm” are retained literally; the figures label wavelengths NM. No spectral discrepancy is silently repaired.

## Calculated source quantities

- EFL: 98.043026198331 mm; printed 98.04 is reproduced at its displayed precision.
- Derived in-air BFD: 40.641334957119 mm from rear vertex 28; printed Bf=41.375 differs by 0.733665 mm.
- Literal D28=1.002 differs from the derived focus by 39.639335 mm. It is not accepted as a complete image distance.
- First-to-last vertex distance: 123.498002 mm. First vertex to derived image: 164.139336957119 mm.
- Principal planes: H1 is +52.621459609186 mm from the first vertex; H2 is −57.401691241212 mm from the last.
- Functional group EFLs: G1 −752.448606880491 mm; G2 +51.213201905747 mm; G3 −88.286183965629 mm.
- Petzval sum: +0.001053505836275079 mm⁻¹, calculated surface by surface, including cemented interfaces.
- Fifteen elements form twelve components. Standalone element powers and cemented net powers are calculated separately.

The printed f1/f2 summaries remain failed comparisons. No telephoto-ratio claim is made: total track/EFL is 1.674156. BFD is below EFL, so the design is not called retrofocus under that criterion.

Equation 8 (claim 3)'s literal T1/T2 is 0.362756543 and fails the stated range 2–3. Its reciprocal, 2.756669779, is a diagnostic observation, not a correction. Compound-group Nd/Vd aggregation is undefined; no effective group index is invented. A summation hypothesis is separately identified in the independent baseline.

## Aperture: correction to the clearance premise

At row 18, C=11.92834 interpreted as a radius gives paraxial f/2.802621859. Exact spherical Snell tracing instead gives an entrance radius of 16.879827035 mm and f/2.904147833. The exact result agrees with the patent's printed f/2.9.

The literal curved face 19 at C=10.7 gives almost the same exact f/2.904327. Aperture agreement therefore does not distinguish the stop planes and cannot prove moving STO from 19 to 18.

Imposing every raw C rim limits the axial entrance radius to 16.860875033 mm, or effective f/2.907412160, at row 9. Rays filling the full row-18 iris slightly exceed C at rows 8, 9, 10, 11 and 19. These source-limit observations are retained. The full nominal iris bundle does not pass every raw rim.

## Approved limited model, to be authored in Stage 2

The owner explicitly approved these exact choices on 2026-10-08:

1. Place the planar stop at row 18 while retaining the literal 19(STO) source conflict.
2. Use the exact iris-derived model aperture, approximately f/2.904148. Keep printed f/2.9 and marketed f/2.8 separately.
3. Use the derived all-air image gap of 40.641334957 mm. Preserve D28=1.002 and Bf=41.375 as unresolved source references; do not invent a cover glass.
4. Reduce exactly three modeled clear semi-diameters: S7 from 15.570 to 15.555 mm, S10 from 13.030 to 12.950 mm, and S26 from 13.230 to 12.720 mm. Leave all other C values and the physical stop radius unchanged. Retain the default 90% gap-sag allowance.

The raw 26→27 intrusion is 97.571414%, above the 97% ceiling, and raw 9→10 is 91.115151%. The specified reductions provide the required margin. They are modeled clear apertures, not corrected source values. The maximum proposed intrusion is 89.90726014%; no gap-sag override is necessary.

Status 2026-10-11: items 1–3 stand as the file's modelling choices. Item 4 was superseded on 2026-10-11 by the printed apertures with `gapSagFrac` 0.92: surface 7 is the printed 15.57, surface 10 is 13.05 and only surface 26 remains at 12.72 (see the semi-diameter section below).

A hypothetical plate at assumed n=1.5168 would require about 2.1533 mm thickness to explain the BFD difference. Its material, dimensions and position are neither prescribed nor uniquely determined. It is not modeled or asserted to exist.

## Bounded diagnostic checks and tradeoff

The template calls for rays to first clip at exterior element edges or air gaps, rather than inside cemented groups. This is a modeling and containment rule, not proof that the patent's physical optics are impossible.

An earlier two-rim proposal preserved all raw-admitted axial rays and passed a 215,209-ray grid, but a denser independent grid found two first clips at cemented row 11 near 0.778° field. Its exact witness is inside an admitted axial-boundary ray at every preceding surface. A centered upstream rim reduction cannot remove that witness while preserving the entire raw-admitted axial bundle. The witness and rejected variant remain in evidence; no claim of continuum-wide absence is made.

The final bounded diagnostic therefore uses the conservative three-rim default-90% option above. Exact on-axis admission changes from entrance radius 16.860875033171 to 16.757622823560 mm. The corresponding admitted-aperture f-number changes from 2.907412160 to 2.925326200, a 1.221004992% geometric axial pupil-area reduction. The physical iris remains 11.92834 mm and its iris-derived nominal aperture remains f/2.904147833. The smaller admitted bundle must not be conflated with that iris setting or with marketed f/2.8.

Author sampling covers 215,209 exact d-line rays at infinity, 41 fields to the 36×24 mm diagonal at 12.443000°, 83 radial stations including dense rim annuli, and 64 azimuths except on axis. Independent sampling covers 1,679,697 rays on a different denser grid. Neither finds a first clip at a cemented interface for this fixed proposal. These finite grids cannot establish absence for all possible rays or fields.

On the independent grid, no previously admitted sample is lost at the default 0.6 field. The full diagonal loses 153 of 5,304 previously admitted samples. Added clipping occurs near the axis through 0.4 field at S7/S10 and from 0.9125 field to the edge at S26. Counts from a nonuniform grid are not flux percentages. Only the separate exact circular on-axis pupil calculation supports the 1.2210% area figure.

Actual frozen buildLens, validateLensData and production-path render diagnostics were rerun independently for the in-memory proposed transform. They pass, with zero hidden trim. This is not an authored candidate or an integration gate. No finite-focus or polychromatic validation is claimed. No additional rim exploration is planned before the owner decision. (Closed: decided 2026-10-08; the rims were revised on 2026-10-11, below.)

## Glass audit

Thirteen distinct native coordinates were compared with freshly retrieved authoritative HOYA, OHARA, Schott, Hikari, Sumita and CDGM catalogs. The named HOYA families are coordinate-compatible within 4×10⁻⁶ in nd and 0.01 in Vd. Modern hyphenated catalog names are kept separately from the patent's literal names. Catalog matches do not establish production supplier or melt identity.

Relevant catalog rows, coefficients, residuals, retrieval URLs and hashes are preserved in evidence.json. No final spectra or glass annotations are authored yet. The independent reviewer has not yet performed the candidate's external-catalog review. (Closed: both were done in the Stage 2 and final-review records below.)

## Product correlation and focus

The fresh official product page, section and 2022 catalogue support the 15/12 construction, HR E3, ED E4, full-frame 100 mm f/2.8 identity, 67 mm filter and nine documented mount variants. The webpage rounds MFD to 0.30 m; the original card's 0.307 m remains a distinct source claim. Official launch on 2015-04-02 precedes patent filing on 2015-12-21. This chronology is recorded, not treated as identity proof or a legal conclusion. No production-exact prescription is asserted.

No focus motion is reconstructed. Only infinity is tabulated. Paragraphs 0051 and 0065 identify fixed G1 and objectward movement of E3–E15, but publish no relative travel or near-state gaps. Production 1:1 magnification and MFD do not supply a near prescription.

## Independent review and replay

The source-first baseline was frozen before the candidate was written.

The reviewer separately transcribed Table 1 and wrote ABCD, angle-sequential and exact spherical code before candidate exposure. Original-card and assignment clues were disclosed. Its three programs replay byte-identically in a clean directory. The unchanged input text, original code, output texts, hashes and full review report are embedded in evidence.independentPass. The portable verifier reconstructs these into a temporary directory and reruns them without reading author results as inputs.

Both source passes conclude that stop relocation and terminal-plane replacement lack the required two eligible internal evidence categories. Figure 1 is structural, not an aberration figure. Owner approval could authorize a disclosed limited model; it would not transform these choices into proved source corrections. Any later diagnostic review is recorded separately from the frozen baseline.

## Quantitative claim map

- First-order quantities, group and element powers, Petzval and conditions: results.sourceModel, recomputed from evidence.rawPrescription.
- Exact iris aperture and raw geometry: results.sourceExactAndGeometry.
- Independent source computations: evidence.independentPass and executed results.independentBaseline.
- Proposed rim and ray diagnostics: evidence.modelingDecisions.MD05 and the supporting authoring archive.
- Product facts: evidence.productCorrelation and the primary-source URLs and hashes.
- No analysis-file claim map applies because Stage 3 has not begun. (Closed: Stage 3 is recorded below.)

## Pending integration

Closed 2026-10-11: the lens is integrated under `src/lens-data/samyang/`. As recorded on 2026-10-08, integration was pending: final-candidate typechecking, corpus checks, metadata generation and build/prerender had not been run, and no Git write, PR, push or deployment had been performed. Targeted in-memory diagnostics are separate from integration. The queue CSV, index, shared engine and specifications remain unchanged.

## Stage 2 construction record, 2026-10-08

The exact owner-approved bounded changes are implemented in the actual data file. No other source radius, glass thickness, air gap before S28, index or Abbe number changes. Every other C value is retained. The final TypeScript object is read back by a strict literal parser and checked against the transformation ledger; independent TypeScript AST parsing rejects duplicate keys, expressions, spreads and computed properties. Wrong-sign and collapsed-gap mutation tests fail as intended.

Exact spherical shared-band extrema give a maximum rim angle of 37.442196916°, minimum glass thickness of 2.000000 mm, maximum air-gap intrusion of 89.907260135%, and minimum air clearance of 0.100000 mm. The extrema check is analytic for these spherical surfaces, not only a sampled rim test. There are no conic-polynomial departures or aspheric domains to audit.

Parsed-file independent ray checks and the actual project exact tracer each cover 49,200 d-line rays at infinity: twelve fields and four aperture scales. All raw project results remain in the record. The engine reports 1,042 noBracket terminations before the first surface for rays outside the finite spherical clear cap. Its separate analytic cap-miss classifier proves all of these to be blocked aperture misses; there are zero unproven tracing failures. These are not hidden or relabeled as successful rays. No sampled first clip is at a cemented interface.

The same immutable infinity geometry is verified at focus-slider coordinates 0, 0.25, 0.5, 0.75 and 1. No finite-focus optical state or travel is claimed. All fifteen selected source-named glass families resolve in the actual runtime. Their explicitly stored C/F/g anchors are recalculated from authoritative HOYA coefficients; this algebraic spectral check is not a chromatic-performance certificate.

The real LensDataInput type compiles under TypeScript 5.9.3 without lifecycle hooks. Prettier 3.8.1 uses the frozen project configuration. Actual buildLens, validateLensData and production-path renderer checks pass with zero hidden trim.

### Separate current-main compatibility check

Main advanced via PR 772. The original 2026-10-08 baseline is preserved. Changed relevant files were fetched at the new commit and checked against their Git blob identities; unchanged loaded files remain identified by the base snapshot and complete commit comparison.

The data specification now clarifies native e-line C′/e/F′ channels. This patent explicitly supplies d-line coordinates, so that change requires no conversion. A separate current-main run reproduces identical EFL, iris, all spectral indices, glass resolution, geometry, renderer and 49,200-ray results. No shared engine, catalog or specification was modified. This targeted compatibility check is not full repository integration.

## Stage 3 analysis record, 2026-10-08

The analysis was written only after the Stage 2 checkpoint passed clean replay. The data file was unchanged while the analysis was written. The analysis follows the required identification, architecture, element, glass and focus sections; an asphere section is correctly omitted for an all-spherical example.

The claim map in evidence.analysisClaimMap ties the optical prose to actual parsed-file calculations, the patent, manufacturer sources and primary catalog coefficients. The author manually checked each element's sign, shape and cemented role, the negative/positive/negative group architecture, the explicit source conflicts, and the difference between iris aperture and admitted beam. No aberration correction, APO status, production-exact match or 1:1-state performance is inferred from the prescription.

The analysis distinguishes the manufacturer's 0.30 m specification-table rounding from its 0.307 m prose, and makes clear that no near-focus travel is modeled. Patent diagrams, optional filters, source spectra and modern catalog approximations are not conflated. The modest axial loss and additional off-axis clipping are disclosed together with the finite, monochromatic infinity-state validation scope.

Paraxial pupil calculations were additionally recorded from the actual data: entrance position +91.516361480 mm from the first vertex with radius 17.491304773 mm; exit position −29.554228257 mm from the last vertex with radius 12.523195555 mm. These Gaussian pupil radii differ from the exact iris-derived axial launch radius and are not substituted for the operational aperture calculation.

Stage 3 structure and metadata preflight passes. Independent semantic review and final package replay remain the Stage 4 gate; full integration had not been run. (Closed: the Stage 4 review is recorded below and integration was completed on 2026-10-11.)

## Stage 4 review corrections

R01: “Claim 8” was imprecise shorthand. The source has seven claims; equation 8 appears in claim 3 (PDF p. 4). The current data sourceErrata note, analysis and audit now identify equation 8 (claim 3). The frozen independent source baseline is unchanged, with this later annotation explaining its same shorthand. A recursive parsed-value comparison proves the only data-object change is the text of sourceErrata[3].note. All optical and layout values remain identical.

R02: The analysis now includes a complete table of all eight numbered conditions. Conditions 3–5 remain underdetermined because compound-group nd/νd aggregation is undefined. Condition 6 distinguishes the formal lower bound 0 from paragraph 0032's inconsistent 1, and separately reports printed-Bf versus derived-air evaluations. Condition 7 explicitly identifies the computed G2 denominator; its passing ratio does not correct the printed f2 summary. No source prescription or computed optics changed.

TypeScript AST, focused typechecking and both frozen/current-main runtime checks were rerun against the citation-corrected bytes. All prior geometry, iris, spectral and ray values remain unchanged. Dependent Stage 2/3 verification is rerun below before final approval.

## Final independent review and reproduction

The sole reviewer approved the exact corrected data/analysis pair under the lens-specific authorization. The original source-first baseline remains unchanged. The later candidate-aware report is preserved verbatim in evidence.independentCandidateReview, separately from that baseline.

The reviewer independently retrieved the primary HOYA catalog, manufacturer section, catalogue page and launch notice. Its portable reviewer_verify.py reads the actual TypeScript with Node 24+, independent source inputs and thirteen relevant catalog excerpts; 231 assertions pass. Stored calculated answers are not used as computation inputs. Exact original PDF/card hashes and the frozen source-input fingerprint are checked. The main verifier also reruns all three unchanged independent baseline programs in a temporary directory.

Both independent portable review and the main source/model verifier reproduce their stable JSON in separate extraction directories. The twelve-file final dossier contains the canonical nine artifacts plus reviewer_verify.py, reviewer_inputs.json and reviewer_results.json. Python standard library and Node 24+ are declared replay dependencies. The recorded compiler and real-project renderer/tracer checks are not falsely described as rerun by Python alone.

The package digests recorded here applied to the 2026-10-08 files; both files have since been edited (sections dated 2026-10-11 below).

Final archive digests, clean extraction/member verification, independent sealed-package review and fresh Drive readback are reported in external verification receipts to avoid circular self-hashes. The originals, source mismatch observations and rejected two-rim counterexample remain available. No public repository, shared engine/specification, queue CSV or index change was made.

## 2026-10-11 — Semi-diameter pass against the patent figure

Source: `patents/KR20170073883A.pdf`. Table 1 (PDF pages 10–11) prints a clear-aperture column C for every surface, so `sd` is source data here, not an estimate; Figure 1 (도면1, PDF page 12) is the cross-section of the same, only example at infinity and serves as a check. Clearance was checked at infinity (the only tabulated state) for the 21.63 mm full-frame corner. This section supersedes the three-rim list above for S7 and records four further 0.01–0.02 mm changes.

Why the package departed from C at three surfaces:

- S7 (15.57 printed, 15.555 in the package): no geometric need. The validator accepts 15.57 and the stated axial ray reaches 15.567 mm there. The reduction shadowed the cemented S8 so that no ray would first clip inside the L4/L5 doublet.
- S10 (13.03 printed, 12.95): the cross-gap rule on the 9→10 pair. At the printed 13.04 / 13.03 mm the L5 rear and L6 front faces use 91.12% of their 1.676098 mm gap (0.149 mm of rim air); 12.95 mm is the largest two-decimal value under the default 90% (89.89%). It also shadowed the cemented S11.
- S26 (13.23 printed, 12.72): the cross-gap rule on the 26→27 pair and nothing else. At the printed 13.23 mm on both faces the L14 rear and L15 front use 97.57% of their 2.514227 mm gap (0.061 mm of rim air); 12.72 mm brings that to 89.91%. Edge thickness is not involved (L14 is 3.56 mm thick at a 13.13 / 13.23 mm rim), and no axial or chief ray comes near it (7.80 and 8.42 mm).

Scale. The sheet is a 1340 × 583 px JPEG placed at 300.45 × 268.56 ppi, so the page stretches it 1.119 across the axis. It was measured on a 300 dpi rendering, which is one native pixel per pixel along the axis. Axis at rows 2189–2190. Vertex crossings at columns 346.5 (surface 1), 368, 377, 415.5, 731.5 (surface 5), 771 (6 and 7), 824.5, 840.5, 852.5, 907.5, 923, 936.5, 951.5, 994.5 (15 and 16), 1029.5 (17), 1054 (19), 1070.5, 1130.5, 1146.5, 1185, 1228.5 (24 and 25), 1245.5, 1263.5 and 1279.5 (surface 28). Surface 1 to 28 is 123.498 mm over 933 px, 0.13237 mm/px; surface 5 to 28 (72.683 mm over 548 px) gives 0.13263; surface 1 to 17 (90.422 mm over 683 px) gives 0.13239. Used 0.1324 mm/px along the axis; every vertex falls within 2 px of its prescription position. Across the axis the scale is 0.1324 / 1.1188 = 0.1183 mm/px, checked through the sag: the surface 1 arc meets the L1 block edge 4.83 mm behind its vertex, a height of 24.7 mm on R = 65.34 against 24.8 mm read directly; surface 5 gives 18.1 mm against 18.4 and surface 15 gives 14.9 mm against 15.2. One pixel is about 1% of a G2 rim. The repository's automatic figure screen assumes one scale for both directions and reads the clean elements 1.17–1.27 times the data for that reason; the hand reading is used.

Figure 1 draws every element as a square-cut block and ends each concave face at a flat annulus. Heights in mm:

| Element | Surfaces | C, Table 1 | Figure 1 block edge | Figure 1 arc end | `sd` before | `sd` after | Evidence |
|---|---|---:|---:|---:|---:|---:|---|
| L1 (L10) | 1 / 2 | 23.9 / 22.3 | 24.8 | surface 2: 22.0 | 23.9 / 22.3 | 23.9 / 22.3 | C; figure agrees |
| L2 (L11) | 3 / 4 | 22.3 / 21.5 | 23.8 | surface 4: 21.5 | 22.3 / 21.5 | 22.3 / 21.5 | C; figure agrees |
| L3 (L20) | 5 / 6 | 17.1 / 16.75 | 18.4 | — | 17.1 / 16.75 | 17.1 / 16.75 | C |
| L4 (L21) | 7 | 15.57 | 16.8 | — | 15.555 | 15.57 | C restored; validator accepts it |
| L5 (L22) | 8 / 9 | 14.57 / 13.04 | 15.7 | surface 9: 13.0–13.4 | 14.57 / 13.04 | 14.58 / 13.06 | stated axial ray at 14.578 / 13.054 |
| L6 (L23) | 10 | 13.03 | 13.8–14.1 | — | 12.95 | 12.95 | held by the cross-gap limit; see below |
| L7 (L24) | 11 / 12 | 12.64 / 12.78 | 13.8–14.1 | — | 12.64 / 12.78 | 12.66 / 12.78 | stated axial ray at 12.655 on 11; 12 clears it |
| L8 (L25) | 13 | 12.78 | 14.7 | surface 13: 12.1 | 12.78 | 12.78 | C; arc end 5% under, inside the noise |
| L9 (L26) | 14 / 15 | 13.53 / 13.95 | 15.2 | — | 13.53 / 13.95 | 13.53 / 13.95 | C |
| L10 (L27) | 16 / 17 | 13.74 / 13.5 | 15.0 | — | 13.74 / 13.5 | 13.74 / 13.5 | C |
| Stop | 18 | 11.92834 | ticks from 12.1, drawn on plane 18 | — | 11.92834 | 11.92834 | not touched |
| L11 (L30) | 19 / 20 | 10.7 / 9.91 | 11.8 | surface 20: 9.9 | 10.7 / 9.91 | 10.71 / 9.91 | stated axial ray at 10.7007 on 19 |
| L12 (L31) | 21 / 22 | 9.7 / 10.4 | 11.5 | not separable | 9.7 / 10.4 | 9.7 / 10.4 | C |
| L13 (L32) | 23 / 24 | 13 / 13.23 | 14.4 | — | 13 / 13.23 | 13 / 13.23 | C |
| L14 (L33) | 25 / 26 | 13.13 / 13.23 | 14.4 | surface 25: 12.9 | 13.13 / 12.72 | 13.13 / 12.72 | 26 held by the cross-gap limit; see below |
| L15 (L34) | 27 / 28 | 13.23 / 13.85 | 15.2 | surface 27: 13.0 | 13.23 / 13.85 | 13.23 / 13.85 | C; figure agrees |

The block edges stand 0.9–1.5 mm (4–11%, mean 1.2 mm) outside the larger C of each element, a uniform mechanical margin, and the seven concave faces whose arc end can be read stop at 0.95–1.00 of C. Figure 1 therefore confirms the C column as the optical extents and sets no value; the printed table governs. Relative heights agree with the table throughout: the front menisci are the tallest, the L6/L7 doublet is the smallest member of G2, and L11 and L12 are the smallest elements.

Changed: five surfaces. Surface 7 returns to the printed 15.57. Surfaces 8, 9, 11 and 19 rise 0.01, 0.02, 0.02 and 0.01 mm above the printed C, to the height the stated on-axis ray reaches, rounded up at two decimals. The stated beam is the iris itself (11.92834 mm on plane 18, entrance radius 16.8798 mm, f/2.9041); in the printed, rounded prescription that ray stands 0.008, 0.014, 0.012, 0.015 and 0.0007 mm above the printed C at surfaces 8, 9, 10, 11 and 19, which is why the unaltered column traces f/2.9074 on surface 9. No element carries one value on both faces, so each face moved alone. Surface 12 (12.78 against a 12.655 mm ray) and every surface not listed did not clip and did not move.

Clearance, exact trace at infinity. Before: the stated axial ray was clipped at surfaces 7 (by 0.012 mm), 8 (0.008), 9 (0.014), 10 (0.092), 11 (0.015) and 19 (0.0007); the admitted entrance radius was 16.7576 mm, f/2.9253, limited at surface 10. After: surface 10 alone clips it (0.092 mm) and the admitted beam is unchanged at f/2.9253, because surface 10 could not move. The corner chief ray (ω 12.38° to 21.63 mm) clears every surface; its closest approach is surface 2, 18.44 mm against 22.3. The full-field bundle is cut one-sidedly by 11% at surface 19 rising to 42% at surface 26, as before. The validator reports no error, the image-circle check 0 undersized, corner coverage 100% (21.65 of 21.65 mm at 12.4°), and no element needs render trim. Engine values are identical before and after: EFL 98.0430 mm, wide-open f/2.9041 on the iris, stop radius 11.92834 mm, half-field estimate 14.16° set by surfaces 2 and 3.

Vignetting is unchanged. On a 0.25 mm grid of the rays that fill the iris (about 14,300 per field), the share reaching the image is 98.38% on axis, 93.90% at 2°, 85.93% at 5°, 78.21% at 7.43°, 72.13% at 10° and 70.89% at 12.38°, the same counts before and after. A separate scan of the pupil rim (61 fields from 0° to 3°, 120 azimuths, 0.02 mm radial steps, 468,307 iris-filling rays) finds no ray that first clips at a cemented junction, before or after; with the unaltered printed column 195 of those rays end first on surface 8 and 24 on surface 11.

Surfaces 10 and 26, not changed in this pass. Both sit below the printed column only because of the default 90% cross-gap allowance; neither pair of faces crosses, and Figure 1 draws both pairs meeting at the rim (the surface 10 arc runs into the corner where the surface 9 arc meets its annulus at about 13 mm, and the L14 rear face and the L15 front annulus share one pixel column). The stated axial ray needs 13.05 mm on surface 10 (13.0421 mm). A copy in memory, nothing written, with surface 10 at 13.05, surface 26 at the printed 13.23 and `gapSagFrac` 0.98 passed the validator with no render trim; the 9→10 pair then uses 91.42% of its gap (0.144 mm of rim air) and the 26→27 pair 97.57% (0.061 mm). On that copy the axial beam is limited by the iris at f/2.9041 with no surface clipping it, the on-axis share of iris-filling rays goes from 98.38% to 100%, the corner share from 70.89% to 74.83%, the fields from 2° to 10° change by 0.1 point or less, and the rim scan again finds no first clip at a cemented junction. 0.98 is the smallest two-decimal allowance for both pairs (0.97 refuses 26→27); for surface 10 alone, leaving surface 26 at 12.72, 0.92 is the smallest (0.91 refuses 9→10). That field lies outside a semi-diameter-only pass and is left to the integrator. Until it is set, the raises on surfaces 8, 9, 11 and 19 change nothing on axis: the surface 10 rim admits a ray that reaches only 14.461, 12.964, 12.557 and 10.621 mm there. If the allowance is not raised, those four can return to the printed C.

Applied 2026-10-11, after this pass: surface 10 is 13.05 mm and `gapSagFrac` is 0.92, with surface 26 left at 12.72 mm (printed 13.23). The 9→10 pair uses 91.42% of its gap (0.144 mm of rim air) and the 26→27 pair 89.91% (0.254 mm). The validator reports no error, no surface clips the stated axial ray, and the axial beam is limited by the iris at f/2.9041; the half-field estimate of 14.16° and the 100% corner coverage are unchanged. The raises on surfaces 8, 9, 11 and 19 therefore stand.

Live check. The local page was shot at infinity and at the close end of the focus control; the two are identical because no focus motion is modeled. The render shows the drawing's sequence and proportions: two separated front menisci, the long air space, the plano-convex L3, three cemented pairs with the middle one smallest, L10, the stop on plane 18, the two small negative elements L11 and L12, and three rear elements of about L10's height. It differs where the figure draws mechanical blocks: each rendered element tapers between its two clear apertures (most visibly L5, 14.58 to 13.06 mm) where the figure draws a rectangle about 1.2 mm taller, and a small notch shows between L14 and L15 because surface 26 is held at 12.72 mm.

Maker diagram. No maker image was supplied to this pass. The log above records the official section as fifteen elements in twelve groups with the HR mark on E3 and the ED mark on E4. Coordinator-viewed: Samyang's own section shows 15 elements in 12 groups, two separated front menisci, a long air space, a high-index (HR) plano-convex third element followed by the ED fourth element, three cemented pairs in the central group and five rear singlets, in agreement with Figure 1. No aspherical element is marked or modeled.

Open limitations. The render cannot show the square blocks and flat annuli of Figure 1. The on-axis beam stays at f/2.9253 on the surface 10 rim until the allowance above is decided (closed by the applied change above: f/2.9041 on the iris). Only infinity is checked; no near state exists in the source. The rim scan and the grid are finite samples.

Noticed outside a semi-diameter pass, not changed here: the header's owner-approval list, `sourceErrata[2].note` and `focusDescription` still describe the three-rim set with surface 7 at 15.555; this section and the header's semi-diameter note carry the current values (closed 2026-10-11 by the wording pass below). Figure 1 draws a filter plate (reference 20, front face about 38.5 mm behind surface 28) ahead of the image plane (reference 30), and its image plane sits 41.3 mm behind surface 28, the printed Bf of 41.375 rather than the modeled all-air 40.641 mm; Table 1 gives the plate no row.

## 2026-10-11 — Deployment validation and wording pass

Source re-read. `patents/KR20170073883A.pdf`, Example 1, the only numerical example. All 28 rows of Table 1 (PDF pages 10–11) were read from the page images for R, D, Nd, Vd and C and compared with the data file; the PDF text layer agrees with the images. The example has no aspheric coefficients and no variable gaps. R, D1–D27, Nd and Vd match on every row. Three things differ from the print, all stated in the file: the stop is on plane 18 where the table prints "19(STO)"; d28 is 40.6413 mm where the table prints 1.002 and no image row; and `sd` differs from C on six surfaces (8, 9, 10, 11 and 19 raised 0.01–0.02 mm, 26 at 12.72 against 13.23). The printed indices equal the HOYA catalog d-line values of the thirteen named glasses, not their e-line values, so no index conversion applies.

Stop. Plane 18 with C = 11.92834 mm traces by exact ray to an entrance radius of 16.8798 mm, f/2.9041. The same ray meets surface 19 at 10.7007 mm, the printed C of 10.7, so the F-number does not separate the two rows (a stop on surface 19 gives f/2.9043). Plane 18 is supported by Figure 1 (a separate diaphragm between L27 and L30), paragraph 0064, the unrounded value on row 18 and the summary's fR = 3, which equals D18.

First-order values, patent against model: F 98.04 against 98.0430 mm; Fno 2.9 against f/2.9041 (paraxial f/2.803 from the stop radius); Bf 41.375 against 40.6413 mm in air; total length not stated against 164.139 mm; image height 21.63 mm on the aberration figures against 100% corner coverage at 21.65 mm. The 0.734 mm back-focus difference equals a plate of 2.15 mm at n = 1.5168 or 2.20 mm at n = 1.5. Within the patent, T2 = 91.07 stands against 90.624 mm from surface 1 to plane 18, and the printed f1 = 53.1259 and f2 = −88.477 against computed G1 −752.45, G2 +51.21 and G3 −88.29 mm. The in-air back focus puts the rear vertex 3.4 mm behind a 44 mm Canon EF flange and 5.9 mm behind a 46.5 mm Nikon F flange, and the 164.1 mm model length compares with 167.1 mm for the product length plus flange distance on the EF, F and E mounts.

Maker comparison. Samyang's product page (lksamyang.com, product 331) lists 15 elements in 12 groups with HR and ED elements, F2.8–32, a minimum focus distance of 0.307 m in its text and 0.30 m in its table, 1:1 magnification, nine blades and the nine mounts carried in the file. Its optical section shows two separated front menisci, a long air space, the HR mark on the third element and the ED mark on the fourth, three cemented pairs and five rear singlets, as Figure 1 does. The patent's Figures 2–5 are labelled "EFL=100 MACRO 1:1".

Changed in this pass, text and tags only. Data file: header comment, the four `sourceErrata` notes, `subtitle`, `specs`, `focusDescription`, every element `role`, `apd: "inferred"` with an `apdNote` on L4 (FCD1; the stored catalog lines give P_g,F 0.5389, 0.032 above the normal line), and the inline comments on the surface 26 `sd` and the surface 28 `d`. Analysis: title, metadata block (patent number, romanized inventors), identification list, the L3, L4, L6, L11, L14 and L15 paragraphs, the glass and focus sections, the stop, image-plane and aperture section (renamed and brought to the applied rims), the wording of the conditions section, and "Verification and Limits" replaced by "Model Scope and Limitations". This log: package hashes and status tokens removed and stale pending lines closed in place. Engine values are identical before and after: EFL 98.0430 mm, f/2.9041, stop radius 11.92834 mm, half-field estimate 14.16°, back focus 40.6413 mm, and the validator reports no error.

Closed 2026-10-11: surface 26 at the printed 13.23 mm with surface 27 also at 13.23 mm would need `gapSagFrac` 0.98 (97.6% of the gap, 0.061 mm of rim air). The last section below puts surface 26 at the printed value and holds surface 27 at 12.72 mm instead, at the unchanged 0.92.

Open: Figure 1 draws a filter plate ahead of the image plane that Table 1 does not list; the model is in air and 0.734 mm shorter than the printed Bf.

Open: the source has no near-focus state, so the focus control does not move the model.

## 2026-10-11 — Four Thirds mount

Samyang's launch release of 2015-04-02 lists ten mounts: Canon EOS, Nikon AE, Pentax K, Sony A, Canon M, Fujifilm X, Samsung NX, Sony E, Four Thirds and Micro Four Thirds (reproduced at https://www.photographyblog.com/news/samyang_100mm_f2.8_ed_umc_macro and https://photorumors.com/2015/04/02/samyangrokinon-100mm-f2-8-and-100mm-t3-1-vdslr-ed-umc-macro-lenses-officially-announced/). The current product page lists nine, without Four Thirds, and the file carried those nine. `lensMounts` now includes `four-thirds`. No optical value changed.

## 2026-10-11 — Second review: diagram, labels and movement

Compared: the local page (infinity, the close end of the focus control, the group-movement overlay, and the inspector for elements 1, 2, 3, 4, 5, 10, 11, 14 and 15) against Figure 1 (도면1, PDF page 12), the reference-sign list of paragraph 0142, paragraphs 0051–0065, the claims and Table 1 of `patents/KR20170073883A.pdf`. Table 1 was read again from the page images: R, D1–D27, Nd, Vd and the glass names match the file on all 28 rows, and `sd` differs from C only on the six surfaces already recorded. No semi-diameter, radius, gap or index changed in this review; the changes are names, bracket text and prose.

Names. Sections above this one use L1–L15 for the first to fifteenth lens. From here on, and in the data file and analysis, elements carry the patent's reference signs.

| Field | Before | After | Evidence |
|---|---|---|---|
| element `name`, 15 entries | L1 … L15, with the patent signs only in `diagramLabel` | L10, L11, L20–L27, L30–L34, equal to `diagramLabel`; `label` stays "Element 1" … "Element 15" | Paragraphs 0055–0059 and 0142 and Figure 1 name the lenses L10, L11, L20–L27 and L30–L34. On the page the section labelled the first two elements L10 and L11 while the inspector, the Abbe diagram and the element table gave "L10" and "L11" to the tenth and eleventh elements (drawn as L27 and L30). After the change the inspector reads "Element 10 L27", "Element 1 L10", "Element 4 L21". |
| `groups` text | FIXED G1 / G2 / G3 | G1 (−) FIXED / G2 (+) / G3 (−) | Claim 1 and paragraph 0054: negative first group, positive second group, stop, negative third group; computed −752.4, +51.2 and −88.3 mm. Paragraph 0051: first group fixed. Surface ranges unchanged. |
| `focusDescription` | "a fixed first group with elements 3–15 moving toward the object" | "rear focusing with the first group fixed and the second and third groups (L20–L34, elements 3–15) moving toward the object" | Paragraph 0051 (rear focus, group 1 fixed, focusing by groups 2 and 3) and paragraph 0065 (third to fifteenth lens move from the image side toward the object). |
| data-file header | — | a note on element and group names, and a note that the corner vignetting belongs to the printed column | this section |
| analysis | L1–L15 in headings and prose; corner bundle described as cut on one side only | patent signs throughout, headings as "L21 (element 4)"; corner vignetting described from both ends with the numbers below | this section |

Figure re-measured independently, on the embedded raster itself (1340 × 583 px, extracted unscaled) instead of a page rendering. Axis on rows 258–259. Vertex crossings at columns 79.5 (surface 1), 100, 110, 146.5, 464.5 (surface 5), 503.5 (6 and 7), 557, 571, 585, 641.5, 655.5, 669.5, 683.5, 728 (15 and 16), 762.5 (17), 786.5 (19), 802.5, 863, 879, 915.5, 960.5 (24 and 25), 977.5, 996 and 1012 (surface 28). Surface 1 to 28 is 932.5 px for 123.498 mm, 0.13244 mm/px; surface 5 to 28 gives 0.13275 and surface 1 to 17 gives 0.13239. The raster has square pixels: through the sag, the surface 2 arc end gives 0.1325 mm/px across the axis, the cemented surface 11 at its block edge 0.1322, surface 20 at its arc end 0.1327 and surface 1 at its block edge 0.1315. The first pass's 0.1183 mm/px across the axis belongs to the 300 dpi page, which stretches the raster 1.117 times in that direction, and is the same scale. Used 0.1324 mm/px both ways. Heights in mm, read on the lower half, line centres:

| Element | Surfaces | C, Table 1 | Block edge, this review | Block edge, first pass | Arc end of the concave face, this review | First pass |
|---|---|---:|---:|---:|---:|---:|
| L10 | 1 / 2 | 23.9 / 22.3 | 24.7 | 24.8 | surface 2: 21.9–22.0 | 22.0 |
| L11 | 3 / 4 | 22.3 / 21.5 | 23.7–24.0 | 23.8 | surface 4: 21.4–21.5 | 21.5 |
| L20 | 5 / 6 | 17.1 / 16.75 | 18.3 | 18.4 | — | — |
| L21 | 7 | 15.57 | 16.7 | 16.8 | — | — |
| L22 | 8 / 9 | 14.57 / 13.04 | 15.7 | 15.7 | surface 9: 12.8–13.6 | 13.0–13.4 |
| L23 / L24 | 10 / 11 / 12 | 13.03 / 12.64 / 12.78 | 13.8 | 13.8–14.1 | — | — |
| L25 | 13 | 12.78 | 14.6 | 14.7 | surface 13: 12.1–12.4 | 12.1 |
| L26 | 14 / 15 | 13.53 / 13.95 | 15.2 | 15.2 | — | — |
| L27 | 16 / 17 | 13.74 / 13.5 | 14.9 | 15.0 | — | — |
| Stop | 18 | 11.92834 | ticks from 12.1 to 14.0, 90.7 mm behind surface 1 | ticks from 12.1 | — | — |
| L30 | 19 / 20 | 10.7 / 9.91 | 11.6 | 11.8 | surface 20: 9.7 | 9.9 |
| L31 | 21 / 22 | 9.7 / 10.4 | 11.45 | 11.5 | not separable | not separable |
| L32 | 23 / 24 | 13 / 13.23 | 14.4 | 14.4 | — | — |
| L33 | 25 / 26 | 13.13 / 13.23 | 14.4 | 14.4 | surface 25: 13.0–13.5 | 12.9 |
| L34 | 27 / 28 | 13.23 / 13.85 | 15.2 | 15.2 | surface 27: 12.5–12.9 | 13.0 |

The two readings agree within 0.2 mm on every block and within 0.5 mm on every arc end. Blocks stand 0.8–1.5 mm (mean 1.1 mm) outside the larger C of each element, and the concave arcs end at 0.95–1.00 of C. The first pass's conclusion holds: the drawing confirms column C as the optical extents and gives no reason to move a rim, so no `sd` changed. The stop ticks sit 90.7 mm behind surface 1, on plane 18 (90.62 mm) and not on surface 19 (93.62 mm).

Where the rendered section differs from Figure 1, all following from the printed column and left as they are: every element is a square block with flat lands in the drawing and a taper between two clear apertures on the page (most visibly L22, 14.58 to 13.06 mm; L10; L30; L31; L34); the L23/L24 pair shows a 0.4 mm waist at its cemented surface (13.05 / 12.66 / 12.78) where the drawing has one rectangle; the L33 rear face stops at 12.72 mm below the L34 front face at 13.23; and the filter plate of the drawing is absent. The order of heights between neighbours is the drawing's throughout: L10 over L11, L20 over L21 over L22, L23/L24 the smallest of the second group, L25 below L26, L27 just under L26, L30 and L31 the smallest elements, L34 the tallest of the last three.

Corner vignetting belongs to column C. An independent exact meridional trace of the unaltered printed column at 12.38° (chief ray at 21.64 mm) finds one bounding ray at 23.882, 22.253, 22.247 and 21.499 mm on surfaces 1–4 against C of 23.9, 22.3, 22.3 and 21.5, and the other at 10.399, 12.986, 13.213, 13.121, 13.226, 13.228 and 13.845 mm on surfaces 22–28 against 10.4, 13, 13.23, 13.13, 13.23, 13.23 and 13.85. Those eleven printed values are therefore the heights of the two rays that bound the designer's corner bundle, 43.9% of the iris diameter in the meridional section; this also supports reading C as a semi-diameter. In the model as filed the passing rays cross the iris from −3.149 to +6.507 mm of ±11.928 (40.5%), limited by surface 4 on one side and surface 26 on the other. The meridional fractions at 2°, 5°, 7.43° and 10° are 94.7%, 85.0%, 75.6% and 59.7% (limits: surfaces 5 and 20, 5 and 21, 5 and 21, 4 and 21). The engine's wide-open geometric transmission at infinity is 100.0, 94.8, 88.5, 81.3, 72.4, 59.4 and 42.2% at 0, 2.1, 4.1, 6.2, 8.3, 10.3 and 12.4°, the same before and after this review. With surface 26 at the printed 13.23 mm (which needs `gapSagFrac` 0.98) only the last figure changes, to 45.8%.

Two statements of the first pass are corrected by this. Its shares of iris-filling rays at 10° and 12.38° (72.13% and 70.89%) are not reproduced; the engine and the meridional trace give about 59% and 41%. And the corner bundle is not cut on one side only: the clearance tool reports "LOWER no-ray-found" because the lower rim ray misses the front spheres, so it shows the rear cut (11% at surface 19 rising to 42% at surface 26) and not the larger front cut at surfaces 1–4.

Surfaces 10 and 26, measured and not changed (owner's decision). Surface 10: the drawing runs the surface 10 arc into the corner where the surface 9 arc meets the L22 edge at 12.8–13.2 mm, as recorded. Surface 26: the drawing shows the reverse of the model. The L33 rear face runs straight to its block edge at 14.4 mm, and it is the concave surface 27 arc that stops, at 12.5–12.9 mm, where it meets a flat land lying on the surface 26 line. A copy in memory with surface 26 at the printed 13.23 mm and surface 27 at 12.72 mm passes the validator at the present `gapSagFrac` 0.92 (the pair is evaluated at the smaller of the two heights, 89.9% of the gap either way), clips neither the axial nor the chief ray, and gives the identical transmission curve (42.2% at 12.4°). It would render L33 as the square block the drawing shows (13.13 / 13.23) and put the short face on L34. Left for the owner.

Checked and found correct.

- Group brackets: the drawing's 제1렌즈군, 제2렌즈군 and 제3렌즈군 brackets span L10–L11, L20–L27 and L30–L34, with the stop between the second and third; `groups` brackets surfaces 1–4, 5–17 and 19–28.
- Cemented brackets: D1 on surfaces 7–9 (L21/L22), D2 on 10–12 (L23/L24), D3 on 13–15 (L25/L26), matching paragraph 0057 and the `cemented` fields.
- Element types against the signs of R and paragraphs 0055–0059: L10 negative meniscus convex to the object (65.34 / 36.74), L11 positive meniscus convex to the object (36.68 / 49.84), L20 plano-convex (49.84 / plane), L21 biconvex, L22 biconcave (−125.84 / 30.00), L23 biconvex, L24 negative meniscus convex to the image (−27.51 / −112.49), L25 biconcave (−37.42 / 556.29), L26 biconvex, L27 biconvex (±138.12), L30 negative meniscus convex to the object (80.36 / 26.24), L31 biconcave (∓76.9), L32 biconvex, L33 and L34 negative menisci convex to the image. All fifteen `type` strings and `role` texts agree.
- No aspheric surface: the patent has no aspheric data, `asph` is empty and no label carries an aspheric mark.
- Tags: the patent text names no low-dispersion, anomalous-dispersion or high-index glass, so `apd: "inferred"` on L21 (FCD1, νd 81.61, ΔPgF +0.032 from the stored catalog lines) is the right tag and "patent" would be wrong. L20 (E-FDS1, the position Samyang marks HR) carries no dispersion tag and is drawn as high-index glass only.
- Glass: all fifteen labels are the HOYA names printed in Table 1 and all resolve in the catalog within 3×10⁻⁶ in nd and 0.02 in νd; none is unmatched.
- Focus: `var` is empty. The focus control shows "Not modeled", the section is pixel-identical at both ends of it, and the group-movement overlay reports no modeled movement. The patent gives the moving lenses and the direction (paragraphs 0051 and 0065, claim 4) and no amount, so nothing can be ordered or signed beyond what `focusDescription` says.
- Engine values, unchanged: EFL 98.0430 mm, f/2.9041 on the iris, stop radius 11.92834 mm, half-field estimate 14.16° (set by surfaces 2 and 3), 100% corner coverage (21.65 of 21.65 mm at 12.4°), no validator error, no surface clipping the axial or the chief ray.

Filter plate. Figure 1 draws plate 20 with its front face 38.4 mm behind surface 28, 2.6–2.7 mm thick and 34.6 mm tall, its rear face about 0.3 mm ahead of the image plane, and the image plane 41.3 mm behind surface 28 with a half-length of 21.65 mm (the printed Bf is 41.375 and the image height of Figure 3 is 21.63). Table 1 gives the plate no row and paragraph 0061 calls the filters optional, so there is no source thickness, index or gap to enter, and none is modeled.

Maker diagram. No maker image was viewed in this review. The record above stands: Samyang's section shows 15 elements in 12 groups, two separated front menisci, a long air space, the HR mark on the third element and the ED mark on the fourth, three cemented pairs and five rear singlets, with no aspherical element marked.

Open limitations. The page cannot draw the square blocks, flat lands and plate of Figure 1. Surface 26 stays 0.51 mm inside the printed column. No near-focus state exists in the source. Figure 3 carries two aberration panels that are both labelled "EFL=100 MACRO 1:1, POSITION 1" and show different curves; the text describes one set, and the second panel is not identified.

## 2026-10-11 — Surfaces 26 and 27 exchanged

The second review above found that Figure 1 draws the 26→27 pair the other way round from the model: the rear face of L33 (surface 26, R = −619.72 mm) runs to the edge of its block, and the concave front face of L34 (surface 27, R = −35.03 mm) stops at 12.5–12.9 mm on a flat land. The model held surface 26 at 12.72 mm and left surface 27 at the printed 13.23 mm.

| Surface | Printed C (mm) | Was (mm) | Now (mm) | Figure 1 |
|---|---:|---:|---:|---|
| 26 | 13.23 | 12.72 | 13.23 | face drawn to the block edge |
| 27 | 13.23 | 13.23 | 12.72 | arc ends at 12.5–12.9 mm |

The cross-gap rule tests the pair at the smaller of the two heights, so the fill is 89.9% of the 2.514227 mm gap either way and `gapSagFrac` stays 0.92. The surface validator reports no errors; neither the f/2.904 axial ray nor the corner chief ray is clipped. The wide-open vignetting curve at infinity is the same at every field sample before and after: 100, 94.8, 88.5, 81.3, 72.4, 59.4 and 42.2% at 0, 2.1, 4.1, 6.2, 8.3, 10.3 and 12.4°. L33 now has the printed aperture on both faces (13.13 / 13.23 mm) and renders as the block the drawing shows.

This replaces a rim value the owner approved on 2026-10-08 (surface 26 at 12.72 mm) with the printed one and moves the same 0.51 mm reduction to the neighbouring face. The number of surfaces below the printed column is still one.
