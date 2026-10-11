# Lens Patent — Leica Summicron-SL 50 f/2 ASPH. — 4 Audit

## Job and reference versions

The unmodified card selects JP2022182997A, Numerical Example 1, exact stem `LeicaSummicronSl50mmF2Asph`.

Controlling LensVisualizer main was freshly rechecked at 23:08 UTC on 10 October 2026. All supplied reference bytes were checked against their recorded SHA-256 values. The current data/analysis specifications, type declarations, template, defaults, taxonomy, authoring/handoff guidance, patent-audit and figure-audit policies govern this dossier. In particular, current `rearPlates` handling supersedes the older prompt's blanket camera-plate omission language. Current `runtimeLens.ts` was fetched read-only to establish the exact-ray iris policy, not executed.

The author candidate was the unchanged nine-file Stage 3 archive, 393,050 bytes. Its extracted members, original sources, and Stage 1/2/3 manifest inventories were checked. The original Stage 2 approval is historical, not silently transferred to the corrected data. Stage 2 and 3 checks were reopened and rerun for this revision.

## Independent Pass A, exposure and freeze

Before candidate access, the reviewer manually re-entered rendered original Tables 1A–1G, Table 6, equation 1 and the Figure 1 architecture/mechanism. Original pages 27–29 established the numbers and conic convention; pages 8–9, 19, 22–23, 38–39 settled material, motion and condition definitions. The title page was inspected in Pass A; its continuation was checked in Pass B for complete attribution. `baseline_inputs.json`, `baseline_calc.py` and `baseline_results.json` preserve this fresh path.

Actual exposure before the freeze comprised the assignment's lens/patent/example, candidate filename/size/hash, current project commit and rear-plate-policy warning. Names and hashes of card-folder sibling files were incidentally listed, but their research contents were not opened. A sibling-figure page was incidentally displayed; no sibling numerical prescription was used. No candidate data, analysis, author extraction, author results, author audit or prior lens research was opened before the freeze. This is source and method independence relative to the author, not a claim of absolute blindness.

`baseline_freeze.json` describes the compact sorted-key JSON canonicalization and every retained byte hash. Additional frozen texts are retained exactly in `evidence.independentPass.frozenTextFiles`, so the portable verifier checks the whole fingerprint without an external file dependency. A digest records what was frozen; it cannot prove independence. The baseline checkpoint was reported before reconciliation.

Pass B code in `audit_optics.py` is a separately identified extension after author-code exposure. It replaces neither the frozen inputs nor their historical results. Correction-validation independence is therefore numerical-path independence with disclosed reconciliation exposure, not a second blind review.

## Extraction and conventions

- Native millimetres; optical axis from object to image. Positive R places the center of curvature imageward.
- The patent expressly gives d-line `nd`/`νd`; no measured C/F/g indices or partial-dispersion data are supplied.
- Source κ equals model K in `h²/R / [1 + sqrt(1 − (1+K)(h/R)²)] + Σ Aₙhⁿ`. All six aspheres and A4–A10 signs/exponents are retained. A12/A14 are zero; no odd or diffractive terms are invented.
- No marketed 50 mm rescaling is applied. Plane surfaces are represented as large-radius planes, not zero-radius surfaces.
- Surface 9 is a published stop location. Stop diameter and all lens clear radii are inferred.
- The 0.01000 mm `nd=1.56732, νd=42.8` bond is source-backed. Paragraph 0029 identifies the L3–L4 cemented assembly; the ten model entries comprise nine glass lenses plus this explicit material interval. Cemented junctions carry the downstream medium's `elemId`.
- Source surfaces 20–21 are a physical camera-side cover plate. `rearPlates` keeps 2.1 mm thickness, `nd=1.5168`, `νd=64.2`, the 12.9 mm pre-gap and the 1.0 mm post-gap. It is not counted among the nine lenses or drawn assemblies.
- Focus is PUBLISHED at two endpoints. Only L7/G2 translates imageward by 4.8163 mm; the d15 change differs by 0.0001 mm from d13 through printed rounding. Literal values are retained. Seven interior samples are linear modeled interpolation, not source-published focus law or certified finite-conjugate stations.

## Numerical results and reference planes

| Quantity | Infinity | Published near spacings |
|---|---:|---:|
| Independent EFL, mm | 48.253740687 | 43.613209570 |
| First vertex to authored image, mm | 101.000000 | 100.999900 |
| Front principal plane from first vertex, mm | 30.469847848 | 27.751493796 |
| Rear principal plane from first vertex, with plate, mm | 52.754555079 | 51.719105148 |
| Entrance pupil from first vertex, mm | 29.462568566 | 29.462568566 |
| Exit pupil relative to authored image, mm | -49.274199071 | -47.634316289 |
| Paraxial focus shift from authored image, mm | +0.008295766 | +0.042091868 |
| Exact chief image at printed half-field, mm | 21.361422469 | 21.630861636 |

Scalar reduced-angle recurrence and independently formed matrix multiplication agree within floating-point replay tolerance. Printed EFL residuals are +0.000240687/+0.000209570 mm, inside the source-precision-aware 0.001 mm check. Element, cemented and group powers are separately computed. The cemented L3–bond–L4 assembly is -62.964770 mm in air; G1/G2/G3 are +34.755170/-67.785796/+318.803317 mm. The per-interface Petzval sum, including the bond interfaces, is 0.002071987870 mm^-1. It is not a complete field-curvature or aberration decomposition.

The collimated BFD after the last powered lens without the plate is 15.292789437 mm at infinity spacing; including the plate's optical displacement gives a physical paraxial image 16.008295766 mm after that lens. The authored physical distance is 16.000000 mm. Near-state collimated BFD is a cardinal property of the changed spacing, not the near finite-conjugate image distance. The near source object is 349 mm before the first vertex; its paraxial magnification is -0.130916234. TL/EFL is above one and BFD/EFL below one: neither telephoto nor retrofocus classification is justified.

## Material corrections and reruns

Closed 2026-10-11: the four items below (S4-C01 to S4-C04, the package author's own correction labels) are all applied in the data and analysis files as integrated.

### S4-C01: inferred iris and aperture verification

The author stored and tested a 13.803340390 mm iris obtained by paraxial pupil mapping. The exact axial beam through that iris is approximately f/1.94845 at infinity, so it is too small to verify the printed f/1.86017 beam. Current `runtimeLens.ts` lines 615–638 derives a non-embedded stop by tracing the printed EFL/(2 Fno) launch height through the front group.

The final inferred STO SD is therefore **14.525024382474049 mm**, traced from entrance launch radius **12.970250215617522 mm**. This 5.228329% iris increase changes no patent R, thickness, refractive index, asphere, published focus gap or inferred glass rim. It is a correction to an unpublished modeling choice, not a patent erratum. The stop location remains the source's surface 9.

The exact image-cone diagnostics `1/(2 sin U)` are 1.862290206 and 1.912269883. They are distinct from the nominal calibration and the source's printed 1.86017/1.91036. The frozen paraxial source-reference iris remains preserved solely for source-summary reproduction. The final result file explicitly distinguishes those quantities from paraxial continuation of the corrected physical iris; it does not describe a paraxial cone as the exact wide-open beam.

### S4-C02: L4 curvature prose

“Stronger rear curvature” was changed to **weaker absolute rear curvature**: |Rrear|=56.6176 mm, |Rfront|=27.1566 mm, so |1/Rrear| is smaller. This follows literal Table 1A surfaces 7–8. Numerical prescription and element power are unchanged.

### S4-C03: robust exact-intersection verification

With the corrected iris, the old Newton-only intersection/aiming path missed one mandatory infinity 0.6-field ray. The independent extension uses an analytic spherical intersection with vertex-hemisphere selection and safeguarded aspheric intersection, plus two-dimensional homotopy aiming. It resolves that ray without enlarging any glass aperture. The frozen Pass A implementation is untouched. The historical old-solver failure and its input are retained in the separate audit evidence.

### S4-C04: adhesive material wording

“Thin Resin Bond” and “published resin adhesive” were narrowed to **Thin Adhesive Bond**, with resin chemistry and supplier unconfirmed. Paragraph 0029 gives UV-curing resin as an example of adhesive, not an identification of this material. The source interval, refractive indices and thickness are unchanged. (Superseded 2026-10-11: the entry is now labelled `Cement Layer`; see the wording pass below.)

All affected Stage 2 source mapping, structure, aperture, geometry, containment and Stage 3 quantitative/prose checks were rerun against the corrected final TypeScript. The portable literal parser fails closed on calls, expressions, spread, duplicate keys, unrecognized literals, nonfinite numerical literals and trailing tokens. Its radius-mutation test changes the computed EFL and is rejected by source mapping. No arbitrary eval, blanket syntax rewriting or fake application type stub is used.

## Geometry and containment

The default `gapSagFrac=0.90` is retained. A valid alternative already avoids any override: the unchanged 15.5 mm L2 rear rim passes the corrected beam. No override or prescription force-fit was needed.

- Surface 4–5 is the limiting shared-band gap: 13.820204612 mm intrusion into a 15.5101 mm gap, fraction 0.891045487; remaining clearance 1.689895388 mm.
- Largest mandatory sampled height at surface 4 is 14.537212060 mm, leaving 0.962787940 mm to its 15.5 mm rim.
- Maximum actual rim angle is 60.410661° at surface 18, below the default approximately 64.158°.
- Minimum glass shared-band thickness is 0.509067743 mm at L4. The separately modeled adhesive remains 0.010000 mm. All element SD ratios are below 3:1.
- Conic domains are valid. No aspheric slope turnover was found within the stored rims. Polynomial departures at exact stored SDs are recomputed and unchanged in the final analysis.
- Geometry uses exact conic/polynomial profiles, analytic rim derivatives, 2,048 radial slope samples and 4,096 derivative brackets with bisection refinement of shared-band extrema. Since variable gap lengths are linear and surface sags fixed, their endpoint minimum bounds all interpolated gap states. Ray sampling remains finite; it is not a proof over a continuum.

The fresh three-dimensional trace checks **2,025 rays across nine focus samples**: 1,809 mandatory rays and 216 optional full-field/wide-open rays. Mandatory coverage comprises the complete sampled on-axis and 0.6-half-field bundles, all field-edge chiefs, and half/quarter-aperture edge bundles. All mandatory rays resolve; none first clips inside the cemented assembly. No on-axis beam or field-edge chief is clipped. Off-axis clipping at an external lens rim is retained as vignetting, not removed by enlarging rims.

An additional nine-chief diagnostic reaches the 36 × 24 mm format corner (21.633307653 mm semi-diagonal) without clipping at every sample. At infinity this requires 24.443232° instead of the source 24.1432° field, because the source image height is only 21.3629 mm. This additional result is not full-aperture corner-throughput evidence.

All sampled pupil targets are resolved. Thirty-eight optional full-field/wide-open exterior continuations fail only after an already-recorded external rim clip; the physical ray has already been rejected. These continuation records are retained with their actual failure and prior clip. They are not reclassified as successful transmitted rays, and no mandatory failure is moved to integration scope. Continuous throughput, complete vignetting and production renderer behavior are not claimed. The maximum successful intersection residual is below 1e-11 mm.

A portable equal-scale plot of both source endpoints was visually checked against original Figure 1 and Leica's lens cut. The front menisci, cemented pair, fixed stop, L7 imageward travel and fixed rear geometry are coherent. This plot is evidence for the audit only, not a LensVisualizer production-render or hidden-trim test.

## Glass review and primary-source identity

Pass A freshly searched six authoritative catalogs without the author's glass labels: OHARA 433 rows, HOYA 435, SCHOTT 366, HIKARI 155, CDGM 268 and SUMITA 433. Downloads, original bytes, exact candidate rows and residuals are preserved. CDGM's current public link returned file-not-found, so the independently retrieved official 2021 data book was used. SUMITA's public catalog form succeeded after its required category parameter was supplied. No user credentials or data were transmitted.

Final FCD1/N-PK52A, FCD515/FCD505 and N-BK7/BSC7 labels are tight coordinate-class candidates, not supplier/melt identities. Their catalog dispersion coefficients were separately replayed. OHARA S- and L-prefix distinctions are retained. Broad runtime compatibility alone does not justify naming the other source media; Unmatched labels remain. The resin's coordinate coincidence with bulk flint glass is explicitly not a resin identification. The actual lens has no published C/F/g measurements or dPgF, so no invented lens spectral fields or APO performance claim is supplied.

The supplied manufacturer PDF was visually checked at pages 1–2: 9 lenses/8 assemblies, 6 aspherical surfaces, full-frame L-Mount, marketed 50 mm f/2, 0.45 m minimum focus and 1:7.4 reproduction ratio. A fresh direct download returned HTTP 502; no fresh remote-byte identity is claimed. The unchanged supplied original is retained in the audit evidence. Production correlation remains selected research, not manufacturer confirmation or proof that counts uniquely identify Example 1. The patent's original Japanese title page controls attribution; current bibliographic romanizations agree with the final names.

## Source discrepancy register

1. Table 6 condition (6) prints 10.42; paragraph 0184 and Table 1A give 6.2658/1.2 = 5.2215. The printed value duplicates the air-gap ratio in condition (3). The failed printed comparison remains visible.
2. Table 6 condition (11) prints 2.92; paragraph 0227 gives 52.9889/48.253740687 = 1.098130409. Cause not isolated. The failed printed comparison remains visible.
3. Table 6 condition (12) label is G1/G1B, inverse to paragraph 0234 and the printed 0.77. The paragraph-defined G1B/G1 is 0.774791427. Neither table nor prescription is silently rewritten.
4. Table 1G subgroup lengths differ from literal sums by -0.00002/+0.00007 mm; near gap-sum and track differ by 0.0001 mm. These are retained at source precision.
5. The source's 1.000 mm post-plate image gap is retained despite paraxial best-focus offsets. No best-focus adjustment is imposed. The precise cause of the offsets is not asserted to be rounding alone.
6. Stop diameter, glass clear radii, intermediate focus law and source material suppliers remain unpublished. Inferences and finite validation scope are explicitly labeled.

All broad paragraph condition bounds hold. Supported treatment is preservation of the mutually corroborated source prescription, source-consistent cardinals and exact chief fields, with subsidiary summary contradictions disclosed. The acceptance check evaluates this treatment; it never changes the failed printed comparisons to matches or widens their tolerance.

## Quantitative-claim and prose review map

| Final analysis claim | Executed support / authority |
|---|---|
| Patent, authors, applicant, dates and example | Original PDF p.1/43 and selected card; structured metadata checks |
| Production 9/8, six aspheres, mount/format, MFD and reproduction ratio | Supplied Leica technical sheet pp.1–2; correlation limits retained |
| EFL, track, principal planes, group and cemented powers | `implementedModel`, `finalModelIndependentCardinals`, frozen independent source replay |
| Each element's nd/νd, glass class, isolated focal length and shape | Actual final TypeScript; Table 1A/1D; independent element-power and catalog checks |
| L4 curvature interpretation | Table 1A R7/R8; S4-C02 |
| Bond and physical rear plate | Source mapping through every material interval and current `rearPlates` schema |
| Petzval sum and limits of its interpretation | Per-interface `phi/(n*nPrime)` in both paths |
| Published focus gaps/travel, near conjugate and magnification | Exact parsed `var`/finiteConjugates; Table 1C; no invented focus law |
| Iris and exact image-cone f-number | `exactAperture`; S4-C01; no circular diameter-evidence claim |
| Every asphere coefficient and modeled-rim departure | Raw rendered Table 1B; actual parsed `asph`/SD and profile evaluation |
| Condition ratios and failed summary comparisons | Paragraph definitions, Table 6, independent source recomputation |
| Geometry, ray count, coverage, vignetting and diagnostic limits | `independentGeometry`, `rayChecks` and retained post-clip records |

Interpretive prose was reviewed manually, not approved by string matching alone. The final text distinguishes standalone power, source design rationale and computed behavior. It makes no uncomputed isolated aberration contribution, manufacturing-process, measured MTF, production-match or APO claim. Sources use conventional URLs and original page/paragraph locators.

## Gate disposition and pending integration

Closed 2026-10-11: this section records the package's status before integration. The file has since been integrated, and `buildLens()`, the surface validator and the image-circle and field-coverage audits have run on it in the repository; results are in the dated sections below.

The final Stage 4 gate is conferred only by the matching final manifest after portable checks, inventory/hash checks and clean-extraction replay succeed. Approval binds to that exact data/evidence/verifier/analysis revision. The original Stage 3 archive is unchanged.

`READY_FOR_BATCH` means completed source-first CHAT_PREFLIGHT review and portable package validation, not application acceptance. `integrationStatus` remains **INTEGRATION_PENDING**. Real TypeScript/Prettier, `buildLens()`, `validateLensData()`, production exact trace/render-trim diagnostics, runtime glass resolution, catalog-policy tests, metadata integration and production build were **NOT_RUN**. No Mac, Codex/IDE task, Git write, merge, publication, deployment, full-corpus sweep or batch build was used. (Closed 2026-10-11: `READY_FOR_BATCH`, **INTEGRATION_PENDING** and **NOT_RUN** describe the package before integration and no longer apply.)

## 2026-10-11 — Semi-diameter pass against the patent figure

**Source.** `patents/JP2022182997A.pdf`, PDF page 39, 図1(a): Embodiment 1 / Numerical Example 1 at infinity focus (the drawing list on page 6 names the example; page 7 states that panel (a) is the infinity-focus state). The embedded raster is about 819 ppi; it was measured at 600 dpi. Only `sd` values and prose changed in this pass. No `R`, `d`, index, asphere, focus gap or the stop `sd` was touched.

**Scale.** The optical axis is the dash-dot line at row 2686. Vertex crossings read just above the axis put surface 1 at x = 988 and surface 19 at x = 1952: 964 px for 85.0000 mm, so 11.341 px/mm (0.0882 mm/px). A second span, surface 1 to the image line S at x = 2134, gives 1146 px for 101.0 mm, 11.347 px/mm. Every interior vertex lands within 2 px of its predicted position (surface 5 at 1242.5 against 1243.5, 10 at 1382 against 1383.6, 16A at 1725.5 against 1725.5, 18 at 1937.5 against 1938.4), and the cover-glass faces sit at 2099 and 2122 against 2098.3 and 2122.1. The drawing is therefore to scale at the infinity state. The height scale agrees with the axial one: the flat annuli that end the concave faces of surfaces 4, 5 and 18 sit at the x positions the sags predict for the heights read (83.7, 38.8 and 75.4 px), and the inner ends of the stop marks read 14.6–14.7 mm against the exact-ray iris of 14.525 mm. The line width is 5 px (0.44 mm), so a single reading is good to about ±0.25 mm.

**Measurement.** Rims were read from ink rows on both sides of the axis, taking line centres and skipping the label leaders above and the asphere markers below. Concave faces that end at a flat mounting annulus were read where the curve ends, not at the outer cylinder.

| Surface | Before | Figure (px, mm) | Before ÷ figure | After | Evidence |
|---|---:|---:|---:|---:|---|
| 1, 2 (L1) | 21 | 223, 19.66 | 1.07 | 21 | Tip rows 2461–2465 and 2907–2911; inside the noise band |
| 3 (L2 front) | 18 | 196, 17.28 | 1.04 | 18 | Flat top and bottom of the L2 flange |
| 4 (L2 rear) | 15.5 | 166, 14.64 | 1.06 | 15.5 | Curve ends at the annulus at x 1149–1153 |
| 5 (L3 front) | 15.5 | 146, 12.85 | 1.21 | 12.9 | Curve ends at the annulus at x 1200–1205, rows 2524–2539 and 2834–2846 |
| 6, 7 (junction) | 15.5 | 163, 14.37 | 1.08 | 14.4 | Junction runs to the flat top of L3; its rim x of 1304 matches the sag at 14.4 mm |
| 8 (L4 rear) | 15.5 | 167.5, 14.77 | 1.05 | 14.8 | Top of L4 at row 2518; drawn edge 15 px against 1.27 mm predicted |
| STO | 14.525 | 166–167, 14.6–14.7 | 0.99 | 14.525 | Not changed; read only as a scale check |
| 10, 11 (L5) | 17.5 | 192, 16.93 | 1.03 | 17.5 | Flat top and bottom |
| 12A, 13A (L6) | 16.5 | 186.5, 16.44 | 1.00 | 16.5 | Top row 2498–2501; the bottom carries asphere markers |
| 14A (L7 front) | 15 | 160, 14.11 | 1.06 | 15 | Flat top and bottom |
| 15A (L7 rear) | 15 | 155–160, 13.7–14.1 | 1.06–1.10 | 15 | Curve follows the predicted profile to within 0.4 mm of the flat top; drawn square-cut |
| 16A, 17A (L8) | 16 | 175.5, 15.47 | 1.03 | 16 | Top row 2508–2511 |
| 18 (L9 front) | 17.5 | 169.5, 14.95 | 1.17 | 15.0 | Curve ends at the annulus at x 1860–1865, rows 2498–2516 and 2855–2873 |
| 19 (L9 rear) | 17.5 | 189, 16.67 | 1.05 | 16.7 | Flat top and bottom of the L9 flange |

**Changed.** Six surfaces in two assemblies. Surfaces 5 and 18 departed clearly from the drawing: both are concave faces that the figure stops at a flat annulus well inside the element's outer diameter, while the file ran them to the full rim, which rendered L3 and L9 with long pointed wings. The cemented partners of surface 5 (junction 6/7 and surface 8) and the rear of L9 (surface 19) were set from the same reading so each assembly keeps the proportions the figure draws. The automatic figure screen run afterwards reads a median figure-to-data ratio of 0.999 with every element between 0.94 and 1.03.

**Retained.** L1, L2, L5, L6, L7 and L8 are 0–7% above the drawing, inside the 5–8% band this pass treats as noise, and were left alone. L1 is the largest of these (21 mm stored, 19.66 mm drawn). L7 is drawn square-cut at 14.1 mm with its rear curve reaching to within 0.4 mm of the top, so both faces keep one value.

**Clearance.** Exact meridional trace with the cover plate, iris 14.525 mm. On-axis marginal heights at F/1.86017 and infinity on the changed surfaces 5, 6, 7, 8, 18, 19: 11.66, 13.28, 13.29, 13.88, 4.53, 4.31 mm. At the published 349 mm conjugate: 11.43, 13.14, 13.14, 13.81, 4.41, 4.19 mm. The smallest on-axis margin is 0.92 mm, on surface 8. The format-corner chief ray (21.633 mm, 24.443° at infinity) passes the same surfaces at 2.55, 2.20, 2.20, 0.32, 12.91, 14.37 mm; at 349 mm (object height 161.58 mm) at 2.40, 2.07, 2.07, 0.30, 12.45, 13.88 mm. The chief margins on L9 are 2.09 and 2.33 mm. No on-axis clip and no blocked chief ray at either endpoint. The trace reproduces the exact image-cone values 1.8623 and 1.9123 recorded above.

**Validator and render.** The repository surface validator accepts the edited file at the default `gapSagFrac` 0.90 with no override, the image-circle floor check reports nothing undersized, no render trim is active, and no asphere turns over inside its rim (no aspheric `sd` changed, so the departures quoted in the analysis stand). Geometry figures in the earlier section that depended on the old rims now read: surface 4→5 gap intrusion 8.81 mm of 15.5101 mm (fraction 0.568) at the 12.9 mm shared band; L4 thickness 1.54 mm at 14.4 mm; surface 18 rim angle 48.19°, leaving surface 4 as the steepest spherical rim at 58.33°.

**Engine values, before → after.** EFL 48.2537 mm and wide-open f-number 1.86017 unchanged; stop radius unchanged. Traced corner coverage 100% both times (24.5° reaching 21.65 mm of 21.65 mm). The engine's paraxial half-field estimate falls from 27.74° to 24.94°: its limiting surface moves from surface 19 at 17.5 mm to surface 18 at 15.0 mm. That estimate overstates the chief height on surface 18 (the real corner chief is at 12.91 mm), and 24.94° is still 0.49° beyond the 24.44° format corner. The default off-axis display field follows it from 16.64° to 14.96°, and the drawn stop housing radius goes from 15.5 to 14.8 mm.

**Vignetting, before → after.** A skew-ray bundle check counts the share of stop-filling rays that pass every rim. Infinity: 100% → 100% on axis and at 7.33°; 96.5 → 95.0% at 14.67°; 92.5 → 90.1% at 18°; 82.1 → 81.2% at 21°; 66.1 → 65.9% at 24.145°; 64.1 → 64.0% at 24.443°. At 349 mm, object heights 96.9, 129.3 and 161.58 mm: 96.6 → 96.1%, 93.1 → 90.7%, 82.1 → 81.3%. The loss is the front rim of L3 trimming the lower edge of mid-field bundles (up to 2.5% of stop-filling rays near 18°); surface 18 takes 0.1% at the near-focus corner. No ray is first clipped at the cemented junction, before or after.

**Live comparison.** The local page was captured at infinity and at closest focus and compared with 図1(a). L3 and L9 now show the stepped fronts of the drawing, and L7 clears L8 at closest focus.

**Manufacturer section.** No maker image was supplied to or downloaded in this pass. The coordinator-viewed Leica section shows 9 elements in 8 groups: L1 positive meniscus, L2 negative meniscus, L3+L4 cemented, L5 biconvex, three aspherical elements L6, L7 and L8, and a final negative L9. That agrees with 図1 in count and grouping. The patent figure governs proportions.

**Open limitations.**

- The renderer joins unequal front and rear rims with a straight edge, so the square flange steps of L2, L3 and L9 appear as chamfers.
- The package's 2,025-ray sample described above was run with the earlier rims and was not rerun; the checks in this section replace it for the six changed surfaces.
- Intermediate focus positions were not traced separately. All six changed surfaces are in fixed groups.
- The figure is a small patent drawing. Readings carry about ±0.25 mm, and the flat annuli are taken as the end of the optical surface without a published effective-diameter table to confirm them.

## 2026-10-11 — Deployment validation and wording pass

**Source re-read.** `patents/JP2022182997A.pdf`, Numerical Example 1 (PDF pages 27–29), read from the text layer and spot-checked against page renders. Checked against the data file: 19 lens surfaces and the two cover-plate rows (R, d, nd, νd), the six aspheric surfaces (K and A4–A10, 30 values), both variable gaps at both tabulated states, and d0. Mismatches: none. The patent's aspheric equation carries (1 + κ), so κ is the file's `K`. Table 1A rows 6–7 print the adhesive layer (R 27.15660 twice, d 0.01000, nd 1.56732, νd 42.8) and ¶0029 describes L3 and L4 as bonded with adhesive, so the layer comes from the patent. Figure 1 agrees with the file in element count, the single cemented pair, element shapes, stop position and the six asphere marks on L6–L8.

**Patent against model.** Focal length 48.2535 / 48.2537 mm; F-number 1.86017 / 1.86017; total length 101.0000 / 101.0000 mm; chief-ray image height at the patent half-field of 24.1432°, 21.3629 / 21.361 mm; paraxial image 1.0083 mm behind the cover plate against the printed 1.000 mm. Near state: focal length 43.6130 / 43.6132 mm; d13 6.6163 and d15 8.0795 mm as printed; object 349 mm ahead of surface 1, 450.0 mm object to image; image height 21.6300 / 21.631 mm; paraxial magnification −0.1309. Group focal lengths G1/G2/G3 34.75504 / −67.78580 / 318.80580 against 34.7552 / −67.7858 / 318.803 mm; the nine element focal lengths of Table 1D agree within 0.0005 mm; entrance pupil 29.4626 mm behind surface 1 in both. Table 6 conditions (6) and (11) and the heading of (12) disagree with the patent's own definitions; they stay in `sourceErrata`.

**Front page.** JP 2022-182997 A, published 8 December 2022, filed 24 March 2022, priority 28 May 2021; applicant パナソニックＩＰマネジメント株式会社; inventors 鈴木靖人, 栗岡善昭, 吉永俊一郎. The file's patent fields agree.

**Product association.** Leica's published data for the Summicron-SL 50 f/2 ASPH. (announced 8 February 2023: 9 lenses in 8 assemblies, 6 aspherical surfaces, 0.45 m, 1:7.4, L-Mount) agree with Example 1 (9 elements in 8 groups, six aspherical surfaces on L6–L8, 450 mm object to image, 1:7.6). The applicant is Panasonic, and the priority date falls three days after Panasonic announced the Lumix S 50mm F1.8 on 25 May 2021. That lens is published with the same construction (9 elements in 8 groups, 3 aspherical, 1 ED and 1 UHR element, 0.45 m, 0.14×), and its F1.8 fits the design F/1.86 directly; L2 (1.497 / 81.6) fits the single ED element and L1 (nd 1.860) the single UHR element. Example 2 is the only other 9-element, 8-group example; it has two high-index elements (nd 1.999 and 1.851) and an entrance pupil 15.95 mm behind surface 1. No manufacturer statement links the patent to either product. The attribution stays with the Leica lens, and the analysis now states the Panasonic link.

**Maker diagram.** No maker image was viewed in this pass. The coordinator-viewed Leica section recorded in the semi-diameter pass above agrees with 図1 in count, grouping and element sequence. Panasonic's construction diagram for the Lumix S 50mm F1.8 was located on Panasonic's Japanese product page and in the lenstip.com review but not viewed.

**Changed in this pass.** Wording and metadata only. Data file: header comment; `subtitle`; `specs`; `focusDescription`; `sourceErrata` notes (the combined Table 6 note split into three, the image-gap note reworded); `role` of L1–L9; and `name`, `label`, `type` and `role` of the adhesive entry, from `Adhesive` / `Thin Adhesive Bond` to `C1` / `Cement Layer`, following the cement-layer entries of the Nikon files. Analysis: the identification section restated (Panasonic applicant, Lumix S 50mm F1.8, design F/1.86 against the marketed f/2); package-process wording removed; the statement that L3, adhesive and L4 share one clear radius removed, since the semi-diameter pass made it false; the 2,025-ray description replaced by figures for the current rims; source 9 added. No `R`, `d`, `nd`, `νd`, asphere coefficient, `sd`, `var` value or `glass` string changed. Engine values are identical before and after: EFL 48.25374 mm, wide-open f-number 1.86017, half-field estimate 24.94°, stop radius 14.525 mm, focus keyframes 48.2537 and 43.6132 mm; the surface validator reports no errors.

**Current-rim figures quoted in the analysis.** Skew-ray bundle check at infinity: 100% of stop-filling rays pass every rim on axis and at 7.33°, 90.3% at 18° and 64.0% at the 24.443° format corner. Surface 5 is the first rim to clip 1.3% at 14.67°, 2.4% at 18°, 0.9% at 21° and 0.1–0.2% at the field edge. No ray is first clipped at surfaces 6–7, at infinity or at the 349 mm conjugate. Meridional heights are as in the semi-diameter pass.

**Open items.**

- Open: the design fits the Panasonic Lumix S 50mm F1.8 directly (applicant, priority date, F-number). The link to the Leica lens rests on matching construction and on unconfirmed reports that the two lenses share optics, and the model opens to F/1.86 where the Leica is marketed at f/2.
- Open: entrance pupil. The model puts it 29.46 mm behind surface 1, which is 51.5 mm ahead of the L-Mount flange (101.0 mm track, 20.0 mm flange distance). Leica's data sheet gives 53.0 mm ahead of the bayonet; that figure was read from a search excerpt of the German sheet, because the PDF returned HTTP 502. The 1.5 mm difference is unexplained.
- Open: the adhesive entry keeps `diagramLabel` "C" and its `Unmatched (…)` glass string, which this pass was not scoped to change.
- Open: the fourth `sourceErrata` note (1.000 mm image gap against the paraxial focus, and the 0.0001 mm total-length rounding) records printed-precision effects more than a contradiction and could be dropped.
