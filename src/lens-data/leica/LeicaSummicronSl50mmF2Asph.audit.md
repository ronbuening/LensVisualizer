# Lens Patent — Leica Summicron-SL 50 f/2 ASPH. — 4 Audit

## Job and reference versions

The unmodified card selects JP2022182997A, Numerical Example 1, exact stem `LeicaSummicronSl50mmF2Asph`. Original card SHA-256: `e4ef0915aac63492a186c345234b77b883d31806a42e51617c1f676d0262c1a7`; original patent SHA-256: `59963bab075d4ee8ed2919b8ac54bfdaf6dcd414dc2c38641945c09f8847a7f6`.

Controlling LensVisualizer main was freshly rechecked at 23:08 UTC on 10 October 2026: `79899f4d8c703bd3e4a2cd0b8bd4f04428700664`. All supplied reference bytes were checked against their recorded SHA-256 values. The current data/analysis specifications, type declarations, template, defaults, taxonomy, authoring/handoff guidance, patent-audit and figure-audit policies govern this dossier. In particular, current `rearPlates` handling supersedes the older prompt's blanket camera-plate omission language. Current `runtimeLens.ts` was fetched read-only to establish the exact-ray iris policy, not executed.

The author candidate was the unchanged nine-file Stage 3 archive, 393,050 bytes, SHA-256 `9817249a2d6d865837cc263806ae19b5fe3d05833d3880c4bbe4690421c19cce`. Its extracted members, original sources, and Stage 1/2/3 manifest inventories were checked. The original Stage 2 data hash was `172578b491529b8839f605f629894f74088648020f3672dd127b1035c9af2a85`; that approval is historical, not silently transferred to the corrected data. Stage 2 and 3 checks were reopened and rerun for this revision.

## Independent Pass A, exposure and freeze

Before candidate access, the reviewer manually re-entered rendered original Tables 1A–1G, Table 6, equation 1 and the Figure 1 architecture/mechanism. Original pages 27–29 established the numbers and conic convention; pages 8–9, 19, 22–23, 38–39 settled material, motion and condition definitions. The title page was inspected in Pass A; its continuation was checked in Pass B for complete attribution. `baseline_inputs.json`, `baseline_calc.py` and `baseline_results.json` preserve this fresh path.

Actual exposure before the freeze comprised the assignment's lens/patent/example, candidate filename/size/hash, current project commit and rear-plate-policy warning. Names and hashes of card-folder sibling files were incidentally listed, but their research contents were not opened. A sibling-figure page was incidentally displayed; no sibling numerical prescription was used. No candidate data, analysis, author extraction, author results, author audit or prior lens research was opened before the freeze. This is source and method independence relative to the author, not a claim of absolute blindness.

The frozen fingerprint is `cb85173f46c2fd4b4630ae80d04ab3d59d45dbc6880937ac939afe711e5f2ec4`. `baseline_freeze.json` describes the compact sorted-key JSON canonicalization and every retained byte hash. Additional frozen texts are retained exactly in `evidence.independentPass.frozenTextFiles`, so the portable verifier checks the whole fingerprint without an external file dependency. A digest records what was frozen; it cannot prove independence. The baseline checkpoint was reported before reconciliation.

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

### S4-C01: inferred iris and aperture verification

The author stored and tested a 13.803340390 mm iris obtained by paraxial pupil mapping. The exact axial beam through that iris is approximately f/1.94845 at infinity, so it is too small to verify the printed f/1.86017 beam. Current `runtimeLens.ts` lines 615–638 derives a non-embedded stop by tracing the printed EFL/(2 Fno) launch height through the front group.

The final inferred STO SD is therefore **14.525024382474049 mm**, traced from entrance launch radius **12.970250215617522 mm**. This 5.228329% iris increase changes no patent R, thickness, refractive index, asphere, published focus gap or inferred glass rim. It is a correction to an unpublished modeling choice, not a patent erratum. The stop location remains the source's surface 9.

The exact image-cone diagnostics `1/(2 sin U)` are 1.862290206 and 1.912269883. They are distinct from the nominal calibration and the source's printed 1.86017/1.91036. The frozen paraxial source-reference iris remains preserved solely for source-summary reproduction. The final result file explicitly distinguishes those quantities from paraxial continuation of the corrected physical iris; it does not describe a paraxial cone as the exact wide-open beam.

### S4-C02: L4 curvature prose

“Stronger rear curvature” was changed to **weaker absolute rear curvature**: |Rrear|=56.6176 mm, |Rfront|=27.1566 mm, so |1/Rrear| is smaller. This follows literal Table 1A surfaces 7–8. Numerical prescription and element power are unchanged.

### S4-C03: robust exact-intersection verification

With the corrected iris, the old Newton-only intersection/aiming path missed one mandatory infinity 0.6-field ray. The independent extension uses an analytic spherical intersection with vertex-hemisphere selection and safeguarded aspheric intersection, plus two-dimensional homotopy aiming. It resolves that ray without enlarging any glass aperture. The frozen Pass A implementation is untouched. The historical old-solver failure and its input are retained in the separate audit evidence.

### S4-C04: adhesive material wording

“Thin Resin Bond” and “published resin adhesive” were narrowed to **Thin Adhesive Bond**, with resin chemistry and supplier unconfirmed. Paragraph 0029 gives UV-curing resin as an example of adhesive, not an identification of this material. The source interval, refractive indices and thickness are unchanged.

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

The final Stage 4 gate is conferred only by the matching final manifest after portable checks, inventory/hash checks and clean-extraction replay succeed. Approval binds to that exact data/evidence/verifier/analysis revision. The original Stage 3 archive is unchanged.

`READY_FOR_BATCH` means completed source-first CHAT_PREFLIGHT review and portable package validation, not application acceptance. `integrationStatus` remains **INTEGRATION_PENDING**. Real TypeScript/Prettier, `buildLens()`, `validateLensData()`, production exact trace/render-trim diagnostics, runtime glass resolution, catalog-policy tests, metadata integration and production build were **NOT_RUN**. No Mac, Codex/IDE task, Git write, merge, publication, deployment, full-corpus sweep or batch build was used.
