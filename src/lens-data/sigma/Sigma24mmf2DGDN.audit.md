# Audit — Sigma 24mm F2 DG DN | Contemporary

## Job, references and version lineage

The fixed source is JP2022073433A, Numerical Example 1, output stem Sigma24mmf2DGDN. The original four-field card and 30-page PDF remain unchanged. The first PDF page is PAJ front matter; printed patent page n is PDF page n+1. CHAT-1.0 (2026-09-11) governs the dossier and independent review. Current project references are pinned to main 53470da5a5cbda1807d1e523fbc71963e5a1adc7 and identified by content hash in the manifest. Current schema takes precedence over historical prompt-era boilerplate.

The incoming Stage 3 archive SHA-256 was a264eca855e5706dacddd940db50501db7074f4f36242f0dee6f343ad714f880; manifest df918e939b780201a4fde1a4c46eb788dad6761acabc14e89e3070626b43e70d; data 70382347509f92e1b3c38df8222c614d31a181308efbde4fb98b4d2a6971ebda. Its refreshed Stage 2 parent archive was 40279677c557a2773ab4248d2387a2388b29f7990d82a3ec772468de42c98352; parent manifest cf618531f9498d6922fc38c95cf1820c89c8ac7a4426a40a17192baa0fa14352. Both original archives were freshly extracted, all seven/eight non-manifest payload hashes checked, and their sourceModel, implementedModel, comparisons and checks reproduced exactly. Data, evidence and verifier were byte-identical across those refreshed checkpoints. Verifier SHA-256 at both checkpoints was e1ca9f9f453adb84137c184c52946796531957da1404188fa564899ee6c8a077. The review therefore binds to the refreshed checkpoint rather than transferring an earlier verifier approval.

## Source extraction and conventions

The selected prescription is directly supported by rendered PDF pp. 10–12, ¶0057–0070. The five condition definitions are in ¶0020, ¶0028, ¶0034, ¶0039 and ¶0043; their Example 1 results are on PDF pp. 19–20. Figure 1 is on PDF p. 20. All 25 numbered planes are retained, including the source stop at 15; there are 24 refracting interfaces, 13 glass elements and 11 air-separated optical components. G1 consists of surfaces 1–14, G2 of 16–19, G3 of 20–25. Cemented junctions 6 and 13 carry the following glass medium and element identifier.

Native indices are nd at 587.56 nm with νd. The selected example does not publish nC/nF/ng or partial-dispersion values. The source equation explicitly contains 1+K; all four K values are zero. Surfaces 10, 11, 20 and 21 carry the independently re-entered even terms A4–A14, with their original signs, exponents and zero A14 values. Lengths are mm; A_p has units mm^(1-p). Positive axial displacement and radius centers are imageward. d0 is object-to-first-vertex distance; BF is final-vertex-to-image distance.

No scale change, radius repair, plate replacement, inactive-plane removal or synthetic cement is involved. The source has no rear plate. Source asterisks become A labels and surface 15 becomes STO under the current schema.

## Independent source-first baseline and exposure

Pass A was completed before opening candidate data, analysis, author evidence or earlier selected-lens calculations. The original card contained only the four selection fields. Rendered source values were manually re-entered; scalar reduced-angle tracing, generic ABCD multiplication and a meridional exact Snell path were written before candidate inspection. Shared patent pages exposed portions of other examples during navigation and condition-table review; only Example 1 supplied numerical inputs. One unsolicited web search result showed another lens's glass annotation at nd=1.59349; it was not used as evidence or a label seed. Controlling specifications and raw aperture/dispersion reference code were available. Complete blindness is not claimed.

The frozen baseline fingerprint is 281c84b390bc0c15401b1dcd69b320edef45be71801cdd29747c63a7c6fdef27; original baseline manifest SHA-256 062e68f9c48df45b2e554c9a3a0520f2169de3ee44072a076901b7221612dd5b; baseline archive SHA-256 f40be67d777ea77f97376abe2ef54e7c7c8791a51af6f4d490d0749f5998e127. The fingerprint definition and original file inventory are preserved in evidence.independentPass. The frozen package was not rewritten. The portable exposure paragraph is condensed; its numerical prescription, job and conventions are unchanged. Replay recomputes and compares a canonical hash of the frozen stable numerical result sections.

Pass B parses the exact final TypeScript literal, recomputes candidate values through the independently written paths, and compares raw patent, independent baseline, implemented data and analysis. Pass B extensions and correction checks were made after candidate inspection; they are not represented as a second blind review.

## Numerical findings

The source-only scalar and ABCD matrices agree to approximately 3.6e-15. Standalone thick-element powers agree with the closed-form lensmaker equation. Exact small-ray tracing agrees with the paraxial limit.

- Infinity: EFL 24.001372024 mm, Gaussian BFD 17.180527989 mm, source image gap 17.1800 mm, first-vertex-to-image track 90.0001 mm.
- Native 255 mm object-to-image state: EFL 23.362732734 mm, d0 165.0000 mm, best image distance 17.180649809 mm, fixed-plane residual +0.000649809 mm, magnification -0.137541421.
- G1/G2/G3 EFLs: +25.004484325, -74.466760355, +59.891030235 mm. The L13/L14 and L17/L18 cemented assemblies have EFL +78.349900697 and +57.228023537 mm, distinct from their constituent standalone powers.
- Conditions 1–5: -3.102604313, 0.600451928, 2.495316942, 1.230687472 and 0.107989150. All strict inequalities and printed rounded values are reproduced.
- Per-surface Petzval sum: +0.002135134334 mm^-1, using phi/(n*nPrime) for every refracting interface. This does not establish tangential/sagittal field flatness.
- Whole-system infinity TL/EFL 3.7497898 and BFD/EFL 0.7158144 do not satisfy telephoto or retrofocus tests. G1 alone has BFD 40.018475158 mm > EFL, consistent with the patent's front-group description.

All radii, thicknesses, indices, variable endpoints, conics and coefficients match the frozen independent input. Source rounding is preserved: d15 increases 5.3816 mm and d19 decreases 5.3817 mm. The -0.0001 mm sum difference is not silently repaired. Independent tolerances preserve each observed residual and propagate source half-last-digit precision where applicable; no tolerance was enlarged to conceal a contradiction.

## Aperture and geometry review

No source numerical clear-aperture or physical-iris diameter exists. The inferred SDs are labeled in the data and analysis. Figure 1 includes mechanical rim features: the front element's back arc is smaller than its outer blank, and the L32 optical extent is an inferred conservative interpretation. An independently drawn native-scale portable silhouette was compared with Figure 1: element order, powers, cementing, stop and group proportions agree. It is not a production render or a dimensional measurement of the drawing.

Current raw runtimeLens.ts computes the ordinary physical iris by exact axial tracing from EFL/(2*nominalFno), then sets the reported entrance-pupil radius to that nominal value. The independently reproduced stop radius is 9.303667364 mm; the stored 9.3036673645 mm is its rounding. The separate paraxial F/2.07 inference is 9.000285724 mm. Neither constitutes an independent source diameter. This review reproduces the equation and does not claim actual buildLens execution.

At the modeled iris, independent exact image-space working f-numbers are 2.071741952 at infinity and 2.175910931 at the native near endpoint, within printed half-unit precision. The near EFL/entrance-pupil-diameter ratio is a different quantity and is not substituted for the finite working f-number.

Geometry was recomputed independently at five focus states with a 1,001-point slope scan and derivative-root searches for thickness and shared-band gap extrema. All 13 glass elements retain positive thickness, minimum 0.900 mm. Maximum surface slope is 58.847700° at surface 2, below the default approximately 64.16°. No asphere slope turnover was found within the modeled apertures. Conic domains and the 3:1 SD sanity bound pass. Worst air-gap intrusion fraction is 0.896640395 at surfaces 23→24 and shared radius 12.7 mm, below 0.90. The stop-spanning gap is included. No geometry-policy override, custom aperture exception or layout concealment is used.

Asphere departures at the stored SDs are -200.650/+146.768 µm for 10A/11A at 11.9 mm and -218.551/+45.149 µm for 20A/21A at 13.1 mm. These are computed modeled-rim departures, not source dimensions or manufacturing tolerances.

## Exact field coverage and classification

The independently aimed infinity chief at 45.04° reaches image height 21.631118335 mm. At the native finite configuration, a chief reaching 21.63 mm recovers full incoming field 83.267736305°. These checks validate the native field values without invoking digital correction.

Author vector 3D polar sampling covers five focus positions, three fields and 33 iris samples per field. Independent meridional sampling covers 17 focus positions, three fields and nine signed pupil positions. The full axial iris and central quarter-radius field samples pass in both paths. The 117 mutually resolved meridional rays at common states agree in image height to 1.45e-9 mm and agree on transmitted versus physically clipped classification.

Physical clipping is assigned only where a solved ray crosses a modeled rim; the first such surface is now explicitly recorded. Unresolved aiming/intersection attempts remain unresolved and are not claimed to be physical vignetting. The old result key unresolvedOutsideAperture has been replaced with unresolvedAimOrIntersection. Central-quarter acceptance now requires every expected central sample to transmit, so an unresolved central sample cannot be ignored by a minimum-margin calculation. No such central failure occurred on this model.

Outer-field vignetting and unresolved outer attempts are disclosed model limits. They do not contradict the demonstrated source image-height chief and nonzero central bundle, and the source supplies no required unvignetted aperture. No illumination, transmission fraction or factory-vignetting claim is made. Finite sampling is not continuum coverage; production trace and renderer diagnostics remain pending.

## Focus interpolation disposition

The two source endpoints remain PUBLISHED; only the 255 mm endpoint is entered as a finite-conjugate certificate. The application-control gaps interpolate linearly between them. Inverse-distance UI labels do not establish a measured continuous cam law.

The original five-position check found maximum sampled defocus 0.355900 mm. A denser check of focusT=i/1000 for i=1..1000 finds magnitude 0.358192967 mm at focusT=0.540. This is now disclosed. The source endpoints still reproduce within source precision, the image plane was not moved, no intermediate finite-conjugate certificate was invented, and no motion extrapolation to marketed 245 mm MFD is introduced. This is an explicit interpolation limitation permitted by the current endpoint model, not a repaired or claimed production focus law. It requires no geometry waiver.

## Glass and manufacturer evidence

The source-only review freshly searched six primary catalog sources: HOYA 435 entries, OHARA 433, SCHOTT 366, SUMITA 433, HIKARI 155 and CDGM 267. Exact edition identities, hashes, relevant rows, nearest candidates and coefficient/line-index excerpts are retained in glass_inputs.json. Searches cover those editions, not all historical melts. OHARA S-/L- prefixes are distinct.

Each implemented HOYA label is supported as a coordinate equivalent. FDS16-W remains 1.98612 in the catalog versus 1.98613 in the patent. PCD51 also has an exact rounded counterpart HIKARI J-PSKH4. Other source pairs have multiple alternatives, including H-ZF1/ZF1, SF2/N-SF2, P-LAK35 and distinct S-/L-LAL13 variants. All tested coordinate-compatible coefficient nd round trips meet 1e-4. No coefficient-derived spectrum is represented as a measured patent spectrum, no supplier identity is inferred, and no unsupported APO claim remains. Actual project resolver acceptance remains NOT_RUN.

Sigma's official original C021 product page confirms construction, full-frame mounts, two molded aspheric elements, FLD/SLD counts and marketed figures. The official 9 September 2021 Japanese announcement confirms 24 September 2021 release. These support the construction correlation but do not prove an exact production prescription. Native 90.08° versus marketed 84.1°, source 255 mm versus marketed 245 mm, and source versus mechanical reference-plane differences remain explicit. The suggested digital-correction explanation is unverified.

## Correction register and dependent rechecks

| Item | Before | After | Effect |
|---|---|---|---|
| Interpolation coverage | Five-state 0.356 mm sampled disclosure | Original result retained plus 1,000-position 0.358193 mm disclosure | Expanded quantified limitation; no motion change |
| Unresolved-ray key | unresolvedOutsideAperture | unresolvedAimOrIntersection | Removes unsupported physical classification |
| Central-quarter predicate | Minimum margin among successful samples | All expected central samples must transmit, plus margin check | Strengthens failure handling; this model still passes |
| Clip provenance | Maximum-deficit surface only | First physical rim clip also recorded | Makes obstruction classification inspectable |
| Glass-review coverage | Two quantitatively searched catalogs | Six identified primary sources and supported alternatives | No implemented glass-label change |
| Data header | Several missing spaces | Readable comments | Parsed optical object unchanged |
| Independent provenance | Source-only frozen record separate | Frozen fingerprint, original hashes and recomputable numerical content retained in dossier | No retrospective baseline rewriting |

Source/model, structure, parser-mutation, geometry, finite-ray, glass and analysis checks were rerun on the final evidence/data/verifier/analysis. Deliberately malformed literal fixtures reject duplicate keys, expressions, nonfinite/overflowing numbers and trailing code. An altered first radius is detected. The independent baseline checks expose mixed examples, changed signs/exponents, conic/index substitutions or focus endpoints through exact fresh-source comparison.

## Quantitative claim map and manual interpretation

| Analysis claim family | Executed evidence | Governing inputs |
|---|---|---|
| Metadata, source selection, counts and conventions | Original card/PDF; stage4 source/metadata checks | Original source and final parsed object |
| EFL/BFD, principal planes, group/element/cemented powers | sourceModel; implementedModel.fullNumericalModel; independentBaseline and independentCandidateReview | Final surfaces and source-independent scalar/ABCD paths |
| Native field and working f-number | endpointComparisons; nativeFieldChief; exact method reconciliation | Exact Snell paths and unchanged source states |
| Five conditions and Petzval | Both complete numerical paths and per-surface terms | Defined source planes and final media/radii |
| Focus movement and finite magnification | First-order state records | Final var and finiteConjugates |
| Expanded interpolation limit | independentCandidateReview.denseFocusScan | Linear gaps and explicitly approximate UI distances |
| Asphere coefficients and departures | Source comparison and both geometry implementations | Final asph and SDs |
| Aperture/containment/vignetting | Geometry, polar ray states, independent meridional ray states | Final inferred apertures; unresolved classifications retained |
| Glass equivalent labels and limitations | Primary excerpts, residuals and independent glassResults | Nine native coordinate pairs and identified catalogs |
| Manufacturer correspondence | Official C021 product and release pages | Product facts kept separate from patent numerics |

Manual prose/citation review confirms third-person technical treatment, correct standalone-versus-in-situ distinctions, no global retrofocus misclassification, no invented supplier, no source-level aperture assertion, no digital-correction claim and no unsupported quantitative aberration allocation or production-performance claim. All principal numerical statements have executed support. Primary source URLs and paragraph/page locators are retained in the analysis.

## Final gate and pending integration

READY_FOR_BATCH applies only to the exact final bytes recorded in the final manifest after clean extraction and portable replay. It means source-traceable pre-integration readiness, not production application acceptance. The documented aperture, interpolation, supplier and product-correlation limitations remain attached to the model. No special waiver or unresolved mandatory chat failure is hidden by this disposition.

Actual buildLens, validateLensData, real TypeScript checking, project formatting, runtime glass resolution, production renderer diagnostics, catalog policy tests and production build are NOT_RUN, requiredAt integration. A portable plot is not a production-render test. integrationStatus remains INTEGRATION_PENDING.

## 2026-10-06 — Semi-diameter pass against the patent figure

Source: the local JP2022073433A PDF, page 20, 【図1】 (Figure 1, Numerical Example 1 at infinity). The sheet is a clean 1-bit line drawing (embedded raster 1665 × 824 px at 300 ppi) with the optical axis horizontal, no ray bundles, group brackets above the glass and a focus bracket below G2. It was measured on a 600 dpi render.

Scale: the vertex crossings of surface 1 (x = 797.5 px) and surface 25 (x = 3204.5 px) span 72.8201 mm, giving 33.054 px/mm (0.03025 mm/px). The spans 1→14 (42.5299 mm over 1405 px, 33.04 px/mm) and 16→25 (25.8902 mm over 856 px, 33.06 px/mm) agree to 0.1 %, and all 22 intermediate vertex crossings fall within 1.5 px (0.05 mm) of the prescription. The figure is therefore drawn to the prescription's own scale. The axis is the 4 px line at y = 2986–2989; readings above and below it differ by 0.07–0.14 mm and are averaged.

Method: horizontal ink runs give the height of each element's drawn edge; vertical ink runs locate the flat lands, whose inner end is where a concave surface's curve stops. Each land was cross-checked by converting its axial position into a height through the surface sag. The automatic figure screen agrees on every element (median figure/data 1.011) except L21, where it reads the focus bracket at 12.2 mm.

| Surface | Before | Figure (mm) | After | Decision |
|---|---:|---|---:|---|
| 1 | 18.2 | 18.40 edge (18.33 / 18.47) | 18.2 | Agrees to 1 %; retained |
| 2 | 13.1 | curve ends 13.04; land out to 18.40 | 13.1 | Agrees; retained |
| 3 | 13.8 | 13.89 edge | 13.8 | Retained |
| 4 | 13.8 | curve ends 12.63; land to 13.89 | 13.8 | 8.5 % short land, below the change threshold; edge agrees; retained |
| 5 | 12.5 | curve ends about 11.8; land to 12.52 | 12.5 | 6 %; retained |
| 6, 7 | 12.5 | 12.52 edge | 12.5 | Retained |
| 8 | 11.2 | curve ends 10.27; land to 11.23 | 11.2 | 8 %, below the change threshold; retained |
| 9 | 11.2 | 11.23 edge | 11.2 | Retained |
| 10A, 11A | 11.9 | 11.92 edge | 11.9 | Retained; no aspheric semi-diameter changed |
| 12, 14 | 11.5 | 11.63 edge | 11.5 | Retained |
| 13 | 11.5 | L17 side ends 9.99 at a land; L18 side runs to 11.63 | 11.5 | One value serves both cemented elements, and 10.0 would clip the 10.06 mm axial marginal ray; retained |
| STO | 9.3037 | tick inner ends 9.33 | 9.3037 | Not edited; the drawn iris agrees to 0.3 % |
| 16 | 9.6 | 9.32 edge | 9.6 | 3 %; retained |
| 17 | 9.6 | curve ends 8.17 (8.12 / 8.21; 8.20 from the land position); land to 9.32 | 8.2 | 15 % over-size; changed. Floor is the 8.08 mm axial marginal ray |
| 18 | 10.1 | 9.92 edge | 10.1 | 2 %; retained |
| 19 | 10.1 | curve ends 8.80 (8.73 / 8.88; 8.93 from the land position); land to 9.92 | 8.8 | 13 % over-size; changed. Floors are 7.81 mm axial and 6.37 mm near-state chief |
| 20A, 21A | 13.1 | 13.13 edge | 13.1 | Retained |
| 22 | 12.7 | 13.89 edge (13.86 / 13.93) | 13.9 | 9 % under-size and visibly short beside L33; changed |
| 23 | 12.7 | curve ends 12.90; land to 13.89 | 12.7 | The validator rejects 12.8 (gap 23→24 combined sag 4.96 mm against 4.898 mm allowed); retained |
| 24, 25 | 14.2 | 14.28 edge | 14.2 | Retained |

Three surfaces changed: 17 (9.6 → 8.2), 19 (10.1 → 8.8) and 22 (12.7 → 13.9). The flat lands are read as the drawing's own clear apertures rather than mounting flanges, because the land on the L17 side of surface 13 starts at the 10.06 mm axial marginal height, the one on surface 17 starts 0.1 mm outside the 8.08 mm marginal ray, and the drawn iris ticks sit at the calibrated 9.30 mm stop radius. They remain drawing measurements, not published values.

Clearance after the change, by exact meridional real-ray trace. Infinity: the 45.04° chief reaches 21.630 mm, axial working f-number 2.072; axial marginal / corner chief heights are 8.08 / 2.07 mm at surface 17, 7.81 / 3.57 mm at 19 and 6.01 / 10.61 mm at 22. Native 255 mm state (object 165 mm ahead of surface 1): working f-number 2.176, the 21.63 mm chief enters at 41.63°, heights 7.14 / 4.74 mm at 17, 6.86 / 6.37 mm at 19 and 5.73 / 10.00 mm at 22. Across 17 interpolated focus positions no surface clips the axial bundle or blocks the corner chief, and the central quarter-radius bundle passes at axis, half field and full field.

Engine comparison before → after: wide-open f-number 2.07 → 2.07, half-field 45.04° → 45.04°, traced corner coverage 21.63 mm of 21.63 mm in both, paraxial tracing half-field 36.68° → 36.68° (set by surface 2, unchanged). Geometric transmission at infinity moves 94 → 90 % at 22.5°, 91 → 86 % at 31.0°, 89 → 82 % at 36.6°, 70 → 74 % at 42.2° and 54 → 58 % at 45.0°; at the 255 mm state 91 → 80 % at 29.7°, 83 → 71 % at 35.7° and 70 → 58 % at 41.6°. The mid-field loss comes from surfaces 17 and 19; the corner gain comes from surface 22. The surface validator reports no errors, and the worst gap intrusion is still 23→24 at 12.7 mm. The asphere departure table is unchanged.

Rendered comparison with Figure 1 at infinity and at the near endpoint: L32 now stands almost level with L33 as drawn. The renderer joins unequal front and rear rims with a straight edge, so L21, L22 and L32 show a bevel where the drawing shows a squared land, as L11 already did.

Open limitations: flat lands cannot be drawn, so the lands on surfaces 4, 5 and 8 are left as slightly thick squared edges; surface 23 is 0.2 mm under the drawing because of the gap rule; surface 17 leaves only 0.12 mm over the infinity axial marginal ray; and the paraxial tracing half-field stays below the native 45.04° because surface 2 (R = 15.3074 mm) cannot be enlarged.

## 2026-10-06 — Metadata and display tags

- Patent number written with the six-digit serial used across the catalog: `JP 2022-073433 A` (was
  `JP 2022-73433 A`) in `patentNumber`, `subtitle`, the focus-position source string and the analysis.
- `specs` restated in the catalog's usual form: design focal length 24.00 mm, design F/2.07, 2ω = 90.08°, four
  aspherical surfaces on two elements, and the inferred special-glass count.
- `apd: "inferred"` added to L13 (FCD100 class, νd 95.10, catalog ΔPgF +0.050 against the engine normal line) and to
  L12 and L18 (FCD705 class, νd 75.50, catalog ΔPgF +0.023). These are the three low-dispersion positions that
  correspond to Sigma's one FLD and two SLD elements; the patent designates none of them, and no `dPgF` is authored.
- Glass labels were re-checked against the project catalog: all thirteen resolve to the named HOYA rows with nd
  within 5×10⁻⁶ and νd within 0.01 of the patent pairs. No label changed.
- Display name, mounts (L-Mount, Sony E) and format follow the catalog convention for Sigma's DG DN lenses and the
  product facts cited in the analysis; left as authored.

## 2026-10-06 — Second review: diagram, labels and movement

Compared: the local lens page at infinity and at the 255 mm state, with the focus-movement overlay, against 【図1】
(PDF p. 20) and ¶0066–0069 of JP 2022-073433 A.

| Item | Before | After | Evidence |
|---|---|---|---|
| `sd` of surface 17 (L21 rear) | 8.2 | 9.6 | Figure 1 draws L21 as a squared block with its edge at 9.36 mm; the first pass had cut the rear face to its curve end, which rendered a bevel the drawing does not show. |
| `sd` of surface 19 (L22 rear) | 8.8 | 10.1 | Same for L22, drawn edge 9.97 mm. Both values equal the front faces of their elements (surfaces 16 and 18). |
| `label` of L21 / L22 | L21 / L22 | L21 (Ln) / L22 (Lp) | ¶0068 names L21 as the negative lens Ln and L22 as the positive lens Lp of the conditional expressions; Figure 1 prints both tags. |
| Element `role` strings | "Standalone … power; see source group context." on all 13 | Shape, group and cemented partner of each element | ¶0067–0069: G1 = L11, L12, cemented L13+L14, L15, L16 (both faces aspheric), cemented L17+L18; G2 = L21 (Ln), L22 (Lp); G3 = L31 (both faces aspheric), L32, L33. |

Rims after the change. The surface validator reports no errors, the image-circle floor nothing undersized, and
traced corner coverage is complete. An exact meridional trace shows no clipped axial bundle and no blocked chief ray
at infinity or the 255 mm state; the F/2.07 axial marginal ray is 8.08 mm high at surface 17, now 1.5 mm inside the
rim instead of 0.12 mm. The engine values are unchanged: F/2.07, half-field 45.04°. L11 and L32 keep bevelled rims:
surface 2 at the drawn 13.7 mm fails the 2→3 gap check and surface 23 at 12.8 mm fails the 23→24 gap check. Every
other rim agrees with the figure within 3%.

Checked and found correct: element designations L11–L33, element types against the signs of R, aspheric surfaces
10, 11, 20 and 21, the stop between L18 and L21, cemented brackets D1 (surfaces 5–7) and D2 (12–14), the group
bracket ranges and the D15 / D19 gap labels. The patent designates no anomalous-dispersion glass, so the three
low-dispersion tags stay `inferred`.

Focus movement. Index 0 of each variable gap is infinity (D15 3.2000, D19 8.2253) and index 1 the 255 mm state
(8.5816, 2.8436): G2 moves 5.3816 mm toward the image while G1, the stop and G3 stay fixed, as ¶0066 states and the
figure's focus arrow shows. The movement overlay on the page shows the same 5.38 mm imageward travel.
