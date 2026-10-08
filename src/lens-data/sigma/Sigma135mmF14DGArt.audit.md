# Sigma 135mm F1.4 DG | Art: independent audit

## Job and reference versions

The original card fixes US20260086332A1, Numerical Example 1, and output stem Sigma135mmF14DGArt. The original patent and card are retained byte-for-byte. The controlling Lens Patent Chat Protocol and Dossier Contract are CHAT-1.0, dated September 11, 2026.

The current LensVisualizer reference was independently rechecked on October 5, 2026 at 17:09 UTC: commit `3f00f21094afdbee2e1b8551b96d2734b7f0d0f1`. All 151 source-reference hashes matched manifest SHA-256 `248fb6bfb3fad7f19beaca5486513cafe7a718bd6c97f7c13219378fbf40b705`. Current data/analysis specifications, template, defaults, taxonomy and optical-engine rules govern this audit. The current asphere-cap root-selection implementation is included in the native checks.

## Extraction and conventions

Fresh visual extraction used the supplied 84-page image-only US publication: attribution on PDF page 1; Figure 1 on page 2; prescription, all three focus states and all four asphere columns on pages 66–67; condition definitions on pages 60–65 and values on page 77. No author prescription, calculations, glass labels, audit, analysis or previous independent baseline was opened before the new baseline was frozen.

There are 17 physical elements, 13 air-separated components and four functional groups with positive, negative, negative and positive net powers. Thirty glass interfaces, one iris and one neutral image-plane datum make 32 numbered source planes. The implementation omits only datum 32 and preserves the physical 28.4437 mm distance from surface 31 to the image. The source BF of zero is referenced to datum 32 and is not an optical back focal distance.

Lengths are millimeters; the optical axis increases imageward; a positive radius has its curvature center imageward. Refractive indices and Abbe numbers are d-line values. The source supplies absolute PgF, but does not uniquely specify absolute nC, nF and ng from those coordinates alone.

The US equation in paragraph 0205 literally prints `(y/z)^2` inside its radicand. Independently inspected primary Japanese equation pixels from JP2026-056718A paragraph 0097 print `(y/r)^2` and `1+K`. The official family record identifies JP2024-163217, matching the US priority application, applicant and inventor. This supports the explicitly disclosed equation correction. All US numerical coefficients remain unchanged; K is used directly and each A_p has units mm^(1-p).

## Model transformations

The 131.00 mm/F1.46 prescription is unscaled. Marketing values 135 mm/F1.4 remain separate. The published finite first-vertex object distances are 2254.5496 and 951.4780 mm. Adding the unchanged track gives 2407.0992 and 1104.0276 mm object-to-image. All three source gap columns are preserved; normalized intermediate focus is 0.4586547991042496. Between-state linear interpolation is illustrative, not a published cam law.

The physical iris radius 22.41183100978485 mm is inferred by exact tracing of the nominal infinity entrance-pupil radius, not independently published or measured. The paraxial radius for the same nominal calibration would be 20.902853476244 mm; pupil aberration explains why those quantities differ. Agreement with the chosen F-number is calibration evidence only.

All lens semi-diameters are inferred. Prior construction candidates failed actual gap or downstream-entry checks: L16 changed from 18.5 to 16.4 mm, L17 from 18.5 to 17.0 mm, and D4 surfaces 25–27 from 19.5 to 19.0 mm. These changes are disclosed aperture-model choices; radii, axial spacings, indices, polynomial coefficients and geometry thresholds were not altered. Figure 1 gives coarse silhouette support rather than published clear apertures. The final silhouette was inspected at equal axial/transverse scale and is consistent with the source architecture.

## Glass review

The reviewer independently searched fresh source coordinates in the current shared OHARA, HOYA, Schott, HIKARI, CDGM and Sumita entries before candidate exposure. Supplemental primary-source checks used the official OHARA S-FPL53 and S-NBH59 pages, official HOYA FDS20-W sheet, HOYA cross-reference/download pages and HIKARI catalog.

A retained raw HOYA July 7, 2026 AGF, SHA-256 `4b4c9aaf5c87b1abb233992891fdba42b9568157c13d0bd56e10eeac77c4727d`, was independently rescanned and its dispersion coefficients recalculated. These were reused source bytes, not a fresh download. This separates TAFD37A from the less compatible TAFD37, supports TAC8P at 1.72916/54.54, and supports TAFD40-W rather than TAFD40L-W using PgF as an additional coordinate. M-/MP-/MC-BACD12 and several dense-flint names remain coordinate-ambiguous; no supplier or melt identity is asserted.

The author's retained six-catalog source rows and selected dispersion calculations were then inspected and rerun. All 14 distinct selected coordinate/dispersion comparisons pass their stated tolerances. OHARA S- and L-series remain distinct. Fifteen element labels resolve in the current engine; TAC6 and TAC8P retain the explicit source dPgF-corrected Abbe fallback. No new absolute spectral indices or APO-performance claims are invented.

The patent normal line is 0.64833−0.00180νd; the runtime normal line is 0.6438−0.001682νd. For L1 these give deviations +0.031206 and +0.03337364 respectively. The implementation correctly stores the runtime deviation while condition 11 uses the patent definition.

## Independent numerical and geometry results

Fresh source-first matrix and reduced-angle computations agree to floating-point precision. The separately authored exact Snell path and the later portable independent adaptation agree with the final parsed TypeScript.

| Quantity | Infinity | Published 2407 mm state | Published 1104 mm state |
|---|---:|---:|---:|
| EFL (mm) | 131.001861 | 127.098179 | 118.920978 |
| Collimated BFD from surface 31 (mm) | 28.444780 | 20.886651 | 11.177598 |
| Physical track to unchanged image (mm) | 152.549600 | 152.549600 | 152.549600 |
| Fixed-iris exact image-cone F-number | 1.459785 | 1.552044 | 1.678115 |
| Finite transverse magnification | — | -0.059458 | -0.145190 |

At infinity the four functional-group EFLs are +93.785380, −53.348088, −243.219687 and +55.416077 mm. The d-line Petzval sum is +0.000892776967 mm⁻¹, computed at every actual glass interface. Principal planes and pupils retain explicit first/last-vertex reference planes. Optical track/EFL is 1.164484, so the source is not a strict TL/EFL<1 telephoto layout; BFD/EFL is 0.217133, so it is not retrofocus either.

All standalone element powers, cemented-component net powers, group magnifications, 16 source conditions and primed conditions were checked. Focus motion is +11.2249 mm for GrFC1 and −2.1182 mm for GrFC2 from infinity to close focus. Total track stays constant; no reversal appears among the published states.

Independent geometry used 2001 radial samples per material or shared boundary at each published state. Minimum sampled element thickness is 0.385549 mm, maximum actual rim angle is 51.018864°, and maximum shared-band intrusion is 0.872227 of the axial gap, below the unmodified 0.90 rule. Complete asphere profiles have real conic domains. Full-rim departures in the analysis reproduce at their actual stored semi-diameters.

Independent exact stop-centered chiefs reach image height 21.63 mm at all three published states, with incoming half-angles 9.080779°, 8.447795° and 7.673806°. Chiefs at zero, 60% and 100% image height remain within all authored apertures. These are solved ray directions, not an undocumented interpretation of finite field labels.

Actual current `buildLens` and `validateLensData` pass. A separately invoked native render loop covers 102 focus positions, including every hundredth of the interval and the published intermediate keyframe; maximum hidden material trim is zero. The packaged 12-state native ray/glass/render record was independently reproduced exactly. All default rays either transmit or clip at an air-entry edge; some outer off-axis rays vignette. Exact on-axis finite-object rays reach 0.999999 of the calibrated iris. Corner chiefs reach the declared image semi-height at every native state. Outer full-field stress probes preserve physical misses and unresolved aims. They do not certify full-cone transmission or photometric vignetting. Finite sampling is not a continuum proof.

## Correction and discrepancy register

1. **Source equation:** US `(y/z)^2` is retained as the literal printing; primary JP `(y/r)^2` supplies the supported physical convention. This correction predates the candidate, was independently reconfirmed, and changes no source coefficient.
2. **Condition-table formatting:** unescaped absolute-value bars split Markdown table cells. The bars are now escaped; no wording, formula or optical value changed.
3. **Strict front-group rounding:** computed 93.785380 mm differs from printed 93.78 mm by +0.005380 mm. A new strict half-quantum 0.005 mm comparison is retained as FAIL. Separate input-precision sensitivity gives approximately ±0.003514 mm from published R/d/nd rounding, supporting the source-precision resolution without changing the prescription or the existing tolerance.
4. **Nominal source comparisons:** conditions 6 and 6′ differ by +0.000654612, condition 13 by −0.000678834, and the fixed-iris near-state image-cone F-number differs from 1.67 by +0.008115397. These comparisons remain FAIL. Independent exact calculation over the predetermined 1.455–1.465 input-F-number rounding interval finds simultaneous printed-rounding compatibility. No sweep point is selected as a fitted iris; the central 1.46 calibration is retained.
5. **Source-rounded conjugates:** the unchanged image plane retains approximately +0.001080 mm infinity residual and +0.001137/+0.001221 mm finite best-focus shifts. No image plane was optimized to remove them.

The raw failed observations and their evidence-supported resolutions are separate records. None is relabeled as exact numerical reproduction.

## Independence and replay

The fresh Stage 4 source/code/result fingerprint was frozen before candidate exposure: `0dc638f2a1e0433722bac3006c1ebab3d0fb3fcfb4991fb25089349389132c6e`. The candidate archive fingerprint was `ee35ad634d13a2e08b6455c8b2d376e0b30d15dbe0fa539cd0feccccb5613db4`. Original candidate hashes, fresh source inputs, original numerical baseline and exposure disclosure are retained under `independentPass.stage4`; the older construction review is explicitly separate.

The frozen path originally used NumPy and SciPy. Its consolidated portable section uses explicit scalar ABCD operations and a residual-checked local chief-ray solve, while retaining separate independently authored Snell/sag logic. That adaptation occurred after candidate exposure and is not mislabeled as pre-exposure code. The original fingerprint is evidence of what was frozen, not cryptographic proof of psychological independence.

Portable replay reads the actual final TypeScript with a strict literal parser and rejects malformed/duplicate/unsupported syntax. Both source and independently extracted branches remain distinct. The clean-extraction replay compares stable numerical output separately from run timestamps. Native replay additionally requires Node 24 and the identified current project sources; Python replay does not substitute for that execution.

## Quantitative claim map and manual review

- Identity, counts, marketing and metadata: original card/patent, primary Sigma specifications and model metadata checks.
- Architecture, cardinal values and telephoto/retrofocus tests: `implementedModel.states` and `independentBaseline.states.cardinal`.
- Individual and cemented-component powers: `facts.modelElements`, implemented element/cemented EFLs and independent element-power checks.
- Material coordinates and dPgF: `sourceModel.glassCalculated`, final elements and independent fresh-material checks.
- Focus distances, motions and conservation: source gap columns, `facts.focusMotionMm`, independent finite-conjugate and gap checks.
- Complete asphere coefficients, rim sags and departures: final `asph`, `facts.asphereRims` and independent geometry records.
- Conditions and rounding limitations: raw `comparisons`, independent conditions and independent aperture sweep.
- Aperture/trace/render claims: packaged native record, its successful exact replay, expanded native summary and independent ray/geometry checks.

All analysis sections, numerical statements, figure interpretation, patent citations, equivalence caveats and third-person technical prose were manually reviewed. Glass identities, physical apertures and production-to-patent correlation remain appropriately qualified.

## Gate disposition and pending technical checks

The final portable audit has 409 PASS checks, zero mandatory FAIL checks and three integration-scope NOT_RUN entries. Five raw source-comparison FAIL observations remain visible with separate supported resolutions. The data prescription is unchanged from the audited candidate; the analysis receives only the table-format correction.

READY_FOR_BATCH. INTEGRATION_PENDING. Static TypeScript compilation, Prettier execution, complete corpus/policy sweeps and the full production build remain NOT_RUN. Targeted native construction, glass resolution, exact rays and element-render diagnostics were executed against the identified current reference.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of US 2026/0086332 A1 Example 1 from page images: 31 surface rows, 17 glass pairs, 9 variable gaps and 40 asphere terms agree; engine f 131.0019 mm and total length 152.5496 mm against the printed 131.00 and 152.55. The rendered section matches Sigma's construction diagram element for element, including FLD at L2, L3, L4 and L6 and aspheres on L8 and L17. Priority date 20 September 2024 precedes the 9 September 2025 announcement.

Changed at deployment: display name set to the catalog form `SIGMA 135mm f/1.4 DG | Art`.

Open: measured on Sigma's diagram L4 is about 9.9 mm thick and L6 about 12.7 mm against 11.10 and 11.00 in Example 1, so production is a tuned variant; L16 sd 16.4 mm reads small against about 18.5 mm.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/US20260086332A1.pdf`, PDF page 2 (Sheet 1 of 56), FIG. 1, the section of Example 1 at infinity. The sheet is a 300 dpi bilevel raster with the optical axis vertical (page column 1278.5) and the object at the bottom. PDF page 67 prints Y = 21.63 mm, F/1.46 and 2ω = 18.16° for the same example. The patent prints no clear apertures, so every value is an estimate from the drawing, floor-checked by real-ray trace.

Axial scale. Surface 1 crosses the axis at row 2551.5 and the image plane at row 728: 1823.5 px for 152.5496 mm, 11.953 px/mm (0.08366 mm/px). All 29 other glass vertices fall within about 1 px of their prescription positions, so the figure is a plot of Example 1 at infinity.

Transverse scale. The figure is not drawn at one scale: it is compressed across the axis. Least-squares fits of the prescription curves to the drawn lines on the ten most strongly curved surfaces (1, 3, 5, 6, 7, 9, 13, 14A, 18, 20) give a transverse-to-axial ratio between 0.9125 and 0.930, mean 0.920. The drawn stop opening gives the same answer independently: its ticks end 246 px from the axis on both sides, and the calibrated stop radius is 22.41 mm, a ratio of 0.918. Heights therefore use 10.997 px/mm (0.0909 mm/px). With that ratio every modeled curve lies on the drawn ink to about a line width over the whole section. Read at the axial scale instead, every rim comes out 8 % low (L1 at 43.5 mm, below the 44.86 mm the F/1.46 axial ray needs there), which is how the ratio was first noticed.

Rim heights are the outermost ink on the leader-free side less half a line width (2 px); the other side agrees within 2 px wherever no bracket or leader interferes. Curve ends on flanged elements were read twice, from the lateral position of the inner end of the flat annulus and from the axial depth of the annulus on the prescription sphere. The maker column is Sigma's construction diagram (3000 px file) scaled from its 1859 px first-to-last vertex span, 14.98 px/mm.

| Element | Surfaces | Before | FIG. 1 | Maker | After | Basis |
|---|---|---:|---:|---:|---:|---|
| L1 | 1, 2 | 48 | 47.1 | 45.9 | 48 | retained, 2 % over |
| L2 | 3, 4 | 45 | 45.9 | 44.5 | 45 | retained, 2 % under |
| L3 | 5, 6 | 42 | 42.7 | 41.3 | 42 | retained, 2 % under |
| L4 | 7, 8 | 38 | 38.8 | 37.9 | 38 | retained |
| L5 rear | 9 | 38 | blank 37.6; curve ends 32.2–32.7 | blank 37.9; curve ends 32.8 | 32.7 | 16 % past the curve end; axial ray 32.51 |
| L6 | 10, 11 | 33.8 | 33.6 | 32.5 | 33.8 | retained |
| L7 front | 12 | 30 | 29.7 | 29.6 curve end, 30.7 blank | 30 | retained |
| L7 rear | 13 | 30 | curve ends 25.1–25.4 | curve ends 25.6 | 25.5 | 18 % past the curve end; axial ray 25.30 |
| L8 | 14A, 15A | 26.8 | 26.3 | 25.6 | 26.8 | retained, 2 % over |
| L9 front | 17 | 22.5 | 21.8 | 21.6 | 22.5 | retained, 3 % over |
| L9 rear | 18 | 22.5 | curve ends 18.4–18.6 | curve ends 19.3 | 19.0 | 17–22 % past the curve end; axial ray 18.78 governs the lower bound |
| L10 + L11 | 19, 20, 21 | 20.5 | 19.1 | 19.3 / 18.2 | 20.5 | retained, 7 % over, inside the noise band |
| L12 + L13 | 22, 23, 24 | 20.5 | 19.5 | 19.1 / 20.1 | 20.5 | retained, 5 % over |
| L14 + L15 | 25, 26, 27 | 19.0 | 19.0 / 18.5; 27 curve ends 16.5–17.0 | 18.2 / 18.5; 27 curve ends 16.8 | 19.0 | retained as a square block (below) |
| L16 | 28, 29 | 16.4 | 17.8 | 18.0 | 16.4 | retained, validator-bound (below) |
| L17 | 30A, 31A | 17.0 | 17.8 | 17.9 | 17.0 | retained, 5 % under |

Changed: three surfaces, 9 (38 → 32.7 mm), 13 (30 → 25.5 mm) and 18 (22.5 → 19.0 mm). L5, L7 and L9 are negative menisci whose concave rear face the patent figure ends at a flat annulus and whose blank continues outward as a flange; Sigma's diagram draws the same three rear corners as steps and a chamfer falling to the same curve ends. The stored values carried the blank height onto the concave face, so the sphere ran on past the annulus: the rims drew 10.0, 9.2 and 8.2 mm long against about 6.5, 4.8 and 5.6 mm in the figure, and L7's ran past the rim of L8 to within 1.7 mm of the stop plane. At the new values the three faces end at 46.33, 59.80 and 75.81 mm from the first vertex, where the figure puts the annuli (46.3, 59.7 and 75.7 mm, each read to about 0.1 mm). The front faces keep the blank height, so each of the three elements now draws a straight bevel from the front rim to the rear curve end. Each new value sits between the two drawings' curve ends and 0.19–0.22 mm above the axial ray.

Retained. Every other rim is within 7 % of FIG. 1 except L16. L15's rear face also ends at an annulus 12–13 % inside the stored 19.0 mm in both drawings, but there the sphere overruns the annulus by only 0.8 mm, a bevel would slope the whole 7 mm rim of a doublet both drawings show as a rectangle, and the two errors are about equal in area, so the block keeps one height. L16 is drawn at 17.8 mm, level with L17 and meeting it at the rim. The validator stops it at 16.6 mm against surface 27 (combined sag 1.76 mm of the 1.752 mm allowed at 16.7 mm) and at 16.9 mm against 30A (1.18 of 1.169 mm at 17.0 mm). Reaching the drawn 17.8 mm for L16 and L17 would need surface 27 cut back to its 17.0 mm curve end and a gap allowance of about 0.97 for the 27→28 (0.94) and 29→30A (0.97) pairs; that is a `gapSagFrac` decision outside this pass. The surfaces do not cross in either pair. The rear group therefore tapers from 20.5 to 16.4 mm where the figure runs from 19.5 to 17.8 mm.

Clearance. The stop-filling axial ray is highest at infinity on every surface: 32.51, 25.30 and 18.78 mm on surfaces 9, 13 and 18, against 31.91, 25.11 and 17.28 mm at 2.407 m and 31.14, 24.86 and 15.33 mm at 1.104 m (finite states traced from the published object distances). The corner chief ray for Y = 21.63 mm (ω = 9.08°, 8.45° and 7.67°) needs at most 16.39 mm in the front group and 14.28 mm at 31A and is clear in all three states. The validator reports no errors, the image-circle check lists no undersized surface, traced field coverage stays 100 % (9.1°, 21.63 of 21.63 mm), and the aperture census stays within 3 % of F/1.46. Engine half-field 10.448°, F/1.46, EFL 131.0019 mm and stop radius 22.4118 mm are identical before and after. Render trim is zero at 101 focus samples. The steepest rim is now 43.8° at surface 20; the 51.0° quoted in the geometry section above was surface 13 at 30 mm and describes the as-authored rim set. The 0.386 mm minimum edge (L11) is unchanged.

Vignetting. A meridional fan census through the open stop is unchanged at half field and beyond: 88.9, 73.4, 60.7 and 51.5 % of the fan passes at 0.50, 0.70, 0.85 and 1.00 of the image height at infinity, before and after. Near the axis the shorter concave faces take a sliver: 100 → 99.5 % at 0.10 and 98.4 → 97.4 % at 0.25 at infinity, 100 → 99.4 % at 0.25 at 2.407 m, and 99.6 → 99.0 % at 0.50 at 1.104 m. At larger fields the rays surface 18 now stops were already stopped at surface 19. No rim was sized to these numbers.

Analysis file. No aspheric rim changed, so the departure table stands. The sentence on how rims were derived now names the 0.92 figure ratio and the three curve-end faces.

Maker diagram. Sigma's construction diagram shows 17 elements in 13 groups with L4+L5, L10+L11, L12+L13 and L14+L15 cemented, as modeled. It fills elements 2, 3, 4 and 6 as special low-dispersion glass and outlines elements 8 and 17 as aspherical. Its stop opening reads 22.36 mm against the calibrated 22.41 mm, so the diagram is to scale. Its rim order matches FIG. 1 and the render: L1 tallest, a steady fall to L8, L9 standing 2 mm above a nearly level rear group. Differences, with the patent figure governing: Sigma draws L1–L3 1.2–1.4 mm lower, L11 1.1 mm below L10 and L13 1.0 mm above L12 where FIG. 1 draws each pair level, and its L4 and L6 are 9.81 and 12.68 mm thick against 11.10 and 11.00 mm, the tuned-variant difference already recorded. Both drawings put L16 and L17 level at 17.8–18.0 mm.

Open limitations. The renderer has no flange: L5, L7 and L9 draw a bevel where FIG. 1 draws a square flanged block, and L15 keeps a 0.8 mm overrun on surface 27. L16 is 8 % under both drawings and L10+L11 7 % over. FIG. 1 is a schematic section with no effective-diameter table, so every value remains an estimate.

## 2026-10-08 — Integration: glass labels and metadata

- Glass. L9 (TAC6, 1.75500 / 52.32) and L11 (TAC8P, 1.72916 / 54.54) named HOYA glasses the site catalog did not hold, so they traced on the dPgF-corrected Abbe estimate. Both rows were added from the HOYA 2026-07-07 catalog file (TAC6 without its 755-523 product code, which stays with TAC6L). All seventeen elements now trace on catalog curves, which supersedes the fifteen-of-seventeen count in the review section above; the g-line index still follows each element's source θgF.
- `apd: "inferred"` added to L2, L3, L4 and L6, the four elements Sigma's diagram fills as FLD glass.
- `specs` restated in the catalog form (design f = 131.00 mm, design F/1.46, 2ω = 18.16°, four aspherical surfaces on two elements); subtitle reworded. Display name, mounts (L-Mount, Sony FE), format and the thirteen-blade count reviewed and left as authored.
- Left open: L16 reads 17.8 mm on FIG. 1 and 18.0 mm on Sigma's diagram against 16.4 mm stored. Raising it needs surface 27 at 17.0 mm and a per-lens cross-gap limit near 0.97; the 8% difference is at the edge of the measurement band and was not forced.
