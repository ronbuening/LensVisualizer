# Laowa 105 mm f/2 STF — consolidated audit

## Job and reference versions

- Controlling source: original CN104991330B, Example 1, ¶0033–0046, Figure 1. Stem: Laowa105mmf2STF.
- Current owner authorization: ClearedWork.csv, 49 rows, SHA256 0cfaad94254fb1470bbfe8f7c63c6822212336daffbe3a667f6a810247cdd2d2; selected row READY. Original card retained unchanged, including its historical approval-pending wording.
- Full CHAT-1.0 ten-file protocol kit verified: manifest SHA256 96d2396f3bf91c84ed90e999324aa5ff333e96290b40dca00625927609b96e7d, all nine payload hashes and combined-stage equivalence pass.
- Fresh read of main on 2026-10-07: cb944bb436fe091c4dad3df64119f0b61636f5fe. Recovered immutable 242-file source/specification set checked against individual SHA256 and Git blob identifiers. The protocol's historical reference hashes do not supersede current specs.
- Read current full data and analysis specs, template, defaults, taxonomy, adding-a-lens and integration guide. Current rearPlates rules supersede generic older omissions; no such plate is present here.
- Cloud scratch only. No user computer, repository, index, CSV, Git or Library mutation.

## Extraction and conventions

Read original raster pages directly. Local Poppler text extraction returned no text, despite the card's description of an available text-layer table. The preserved PDF is complete and hash-matched; image reading is the extraction authority.

Transcribed all 22 prescription rows from PDF pages 5–6. All dimensions are millimetres, source Nd/Vd are d-line values, and the APD relation specifically names 587.56 nm. Blank index rows are air intervals. The source's coincident S4/S5, both R=400.1135 with D4=0, remain separate interfaces, including the zero-thickness air transition. They are not deleted, cement-normalized or displaced.

ST1 at S12 is the light-blocking stop; ST2 at S18 is the aperture stop. No numeric stop diameters, lens clear apertures, sensor plate or separate image row are given. D22 is the source's image distance from the final S22 vertex. No aspheric marks, coefficients, conic or sag law appear in either numerical example; this job retains the selected spherical Example 1.

## Model transformations

Stage 1 makes no source-value changes. Planned plane-radius notation is inf → 1e15 for application input. The requested lens is not rescaled from 102.2630 to the marketed 105 mm.

The source's scalar d-line intensity relation T=A^(D/2), A=0.5 at 2 mm, maps to alpha=ln(2)/2 mm^-1. Figure 3 is an axial-thickness radial table; exact ray attenuation instead uses actual path length through L8. The app's coefficient is broadband, so its spectral extrapolation must be identified as a limitation. No T-stop, coating, melt or spectral curve will be inferred.

The published infinity and 0.15x states change D11 and D22. Intermediate app interpolation, if used, is not a source-published cam law. Production 0.9 m MFD is kept separate from the native close-state conjugate.

S12 can be a fixed clear-aperture plane while S18 is the one controlled STO. This is a patent-state representation; it does not implement two independently adjustable production diaphragms. Both actual source positions and optical encounters must be retained and independently reviewed. Neither stop has a source-published numerical radius, so any later value must be labeled inferred and justified.

## Glass review

Searched ten distinct source coordinates over the complete recovered primary catalog sets: HOYA 435 rows, OHARA 433, Schott 366, HIKARI 392, Sumita 433, CDGM 308. CDGM starred labels, including H-K9L*, are preserved. Catalog bytes were originally retrieved 2026-10-06, not freshly downloaded from vendors in this job. Relevant candidate rows and residuals are retained in evidence for offline replay. No manufacturer is inferred from the Laowa brand. Coordinate compatibility is not proof of supplier or melt identity. The neutral-gray APD glass remains unmatched.

## Numerical results

Scalar reduced-angle tracing and independently assembled ABCD products agree at both endpoints to <1e-12. Determinants reproduce unity. A separate thin-lens analytic case gives its exact 50 mm reference.

- Infinity EFL: 102.270950000351 mm; BFD: 39.647903051293 mm from S22.
- Native image gap: 39.6422 mm; residual against computed BFD: -0.005703051293 mm.
- First vertex to last vertex: 85.4684 mm; first vertex to prescribed image: 125.1106 mm. This is not a verified telephoto construction by the specified TL/EFL test.
- Native near EFL: 98.953260205255 mm; magnification: -0.149980850494.
- Native near derived object distance: 720.809451014839 mm from first vertex, or 855.255251014839 mm object to source image plane. This is a calculated conjugate, not a published distance or production MFD.
- Fixed-image displacements: Gr1 -9.3352 mm and Gr2 -15.9074 mm. Both move toward the object; D11 decreases 6.5722 mm.
- Standalone APD focal length: -59.523809523810 mm. The cemented APD/positive pair instead has +179.340028694404 mm net focal length.
- Source conditions: |F/FA|=1.718151960006, |F1/F2|=3.128117067109, A=0.5. All native inequalities pass and printed three-decimal ratios are reproduced.
- All 15 Figure 3 radial thickness/transmission samples reproduce the literal displayed precision. Alpha=0.346573590280 mm^-1 and axial 1 mm intensity transmission is 0.707106781187.

Per-element and cemented-group standalone powers, principal planes, both stop-pupil conjugates, and per-surface Petzval terms are in results. Pupil locations do not imply unpublished pupil diameters. The f/2.05-derived S18 radius is calibration, not independent evidence of a physical diaphragm dimension.

## Correction and discrepancy register

1. Printed EFL 102.2630 versus computed 102.270950000351 mm: retained visible FAIL at half the displayed summary unit. The cause is not established. Linear source-rounding sensitivity estimates about 0.00707 mm worst-case half-range, slightly less than this residual, so rounding alone is not claimed proven.
2. Printed D22 39.6422 versus computed BFD 39.647903051293 mm: retained visible FAIL. Source image plane is not adjusted to improve focus.
3. Faithful-table acceptance is distinct from reproduction of the summary. Original rows are visually verified and two computations agree; the numerical model is well-defined with these disclosed residuals. A later independent review must confirm them.
4. Official 2021 catalogue PDF page 11 / printed page 19 labels the blue element “Glass Aspherical”; the patent supplies an all-spherical prescription. The conflict is unresolved. No claim is made that the catalogue is erroneous or the model is production-exact. (Closed 2026-10-10: the swatch falls on L2, the maker's high-refractive element; see the 2026-10-10 section below.)
5. The original card's corrected utility application 201520519096.2 is retained. It is not merged into invention application 201510417065.0.
6. Provisional capability probes are preserved privately, including an initially invalid S6/S7 shared-band aperture attempt. No gap-margin override or optical prescription edit was used. These probes are not candidate approval.

## Independent review

Not yet performed. Stage 1 is author extraction with separate computational methods; this is not the Stage 4 independent review. (Closed: see the Stage 4 section and the 2026-10-10 section below.)

## Quantitative claim map

- Source prescription, metadata and published values → evidence.rawPrescription and source citations.
- First-order, principal planes, element and group powers, Petzval → results.sourceModel.
- Conditions → results.conditions and literal source pp3,7–8.
- Focus movement → results.focusMovements and source p6.
- APD law and radial table → results.apodization and source pp4,11.
- Product correlation/limits → evidence.productCorrelation and official catalogue p11/printed19.
- No analysis file exists at Stage 1; there is no final pair to reconcile yet.

## Gate disposition and pending integration

Stage 1: READY_FOR_DATA for a faithful literal-source model with explicitly preserved summary residuals and product conflict. Stage 2 must infer defensible clear apertures, validate geometry, verify the two stop roles, and test APD intensity without claiming production control/spectral behavior. No final data/analysis has been authored at this checkpoint. (Closed: the later sections record this work.)

All aggregate repository typecheck/lint/corpus/build and full browser UI checks remain integration work. Targeted native probes do not substitute for those gates. INTEGRATION_PENDING. (Closed 2026-10-10: the three files are in `src/lens-data/laowa/`; corpus-level checks belong to the repository's own suite.)

## Stage 2 construction checkpoint

The root-level literal-only data file now preserves all 22 rows and both source focus endpoints. S12 is ST1; S18 is STO. Native traces hit both unchanged coincident S4/S5 coordinates. No source radius, thickness, index, Abbe value or focus spacing was optimized. Defaults retain gapSagFrac=0.90, normal rim slope, and clipMargin=1; no optical-margin override was introduced.

Apertures are inferred. Figure 1's nondimensional section supplies approximate silhouette proportions; source f/2.05 supplies a paraxial S18 calibration of 11.923394366833 mm. Exact rays constrain the other openings. S7 requires at least 20.379039 mm for the nominal on-axis marginal launch, while the default shared-band S6/S7 gap rule limits it to 20.530336 mm; 20.5 mm was selected. Thus generic 8–12% clearance cannot be added there without violating source geometry. The stored S12 radius 14.5 mm exceeds the same launch's 14.146298 mm height; its source diagram is only schematic and appears roughly 13–14 mm at axial scale. That estimate is not a published or measured iris diameter. The independent reviewer must assess this explicitly.

Actual unchanged-main buildLens and validateLensData pass. Real render diagnostics at focusT=0,0.25,0.5,0.75,1 require zero hidden material trim. A native computeElementShapes SVG was inspected against the patent for order, curvature signs, APD pair orientation and both stop positions. This is not full browser UI acceptance.

The actual native 3D ray grid has 3,075 cases across those five focus samples, f/2.05,4,8, five field domains, six pupil radii and eight azimuths on each noncentral ring. Outcomes: 1,893 native ok, 935 clipped, 247 failed. Every failed case occurs before entering the first surface; separate analytic ray/sphere-cap intersection shows that it misses the authored27 mm front aperture. Native failed statuses are preserved, not renamed transmitted. Among traced nonclipped glass segments, 51 points per segment produced no side-boundary violations. This finite sample is not a continuous proof or a claim of unvignetted field. No first clipping occurs at a cemented interior boundary.

At infinity, the raw geometry half-field is 14.506003 degrees, the image-format analysis half-field 11.925960 degrees, and the actual default UI helper gives 8.703602 degrees. The patent's 11.92 degrees is separately retained. No field/projection override was added. Near-state and interpolation geometry are sampled separately; no source-published intermediate cam law is asserted.

Public trace tests return 0.7071067811865475 through the axial 1 mm APD path and 0.6289630659835624 through a 1.3379055866842373 mm oblique path. Both equal exp(-alpha*distance) with alpha=ln(2)/2. Removing authored absorption returns 1 in both controls. This is d-line geometric/intensity verification; it does not verify wavelength dependence, pupil-integrated T-stop, diffraction, coatings or manufactured transmission.

Glass proxy labels are FC5, E-FDS1, TAF3, SF11 and E-F2 where primary vendor coordinates support equivalents; six elements resolve to these five runtime names. Five elements remain explicitly unmatched, including the APD. The current runtime lacks FD110/N-SF11 names, so those provisional choices were replaced before the checkpoint with the available primary-source-compatible SF11 proxy (Abbe residual +0.04). No source optical value or vendor catalog was changed. Primary retained coefficients independently reproduce each chosen catalog's own index/Abbe coordinates within the stated checks.

A bounded lexer/parser loads the actual final .data.ts, rejects duplicate keys, functions, spreads, expressions, computed keys, NaN and trailing content, and detects an intentional radius mutation. Its source equality, optics, element powers, focus endpoints, APD coefficient and five-state geometry checks pass. Real TypeScript 5.9.3 strict/noEmit checks the one candidate with unchanged project types; Prettier 3.8.1 checks current formatting. Full repository scripts and lifecycle hooks were not invoked.

Stage 2: READY_FOR_ANALYSIS, bound to the actual data/evidence/verifier/results hashes in the checkpoint manifest. No analysis existed when this checkpoint was earned. Earlier source summary FAIL comparisons remain visible. Independent Stage 4 review remains mandatory. (Closed: see the Stage 4 section.)

## Stage 3 analysis and claim reconciliation

The analysis was written only after the sealed Stage 2 checkpoint. Data SHA256 remains e2658a33dc8ab3c4e8fe0f88a0bb43fe4876f594b4f25a311cd68f10f03a24fe; no model value changed during analysis. The verifier was extended for computed aperture bounds and cross-file checks, and all inherited Stage 1/2 checks were rerun before the Stage 3 gate. The original Stage 2 checkpoint remains preserved; the current manifest separately identifies revalidated bytes.

The complete third-person analysis follows the required metadata, identification, architecture, element, glass and focus sequence, then conditional APD/stop, patent conditions, verification and source sections. It does not present production-exact manufacture, supplier identity, an invented asphere, a published cam law, a second production diaphragm control or measured spectral transmission. Manual source/citation and interpretive-prose review was completed after numeric matching; individual aberration contributions are not asserted solely from shape or power sign.

Quantitative claim map for the final candidate analysis:

- Identification metadata, 11/8 structure, source f/2.05/11.92 degrees, published focus gaps and production 105/f2/23 degrees/0.9 m: evidence.rawPrescription/productCorrelation and original source pages.
- Architecture EFL/BFD/TL ratios, Gr1/Gr2 powers, element first lines and D1/D2/D3 powers: results.implementedModel.infinity; field/native comparison uses nativeSummary and bound native report.
- Every element nd/Abbe/glass/fl line: parsed data comparison; six-decimal fl rounding checked.
- Glass table and coefficient tolerances: evidence.glassEvidence plus results.catalogCurveRoundtrip; all five catalog names are tested, distinct from native-source media.
- Focus travel, near EFL, signed magnification and both distance reference planes: results.focusMovements and implementedModel.publishedNear015x.
- APD alpha/axial profile and all radial sample numerics: results.apodization; 3D oblique/public/control values: nativeSummary.apdTests.
- Three source inequalities: results.conditions and source pp3,7–8.
- Principal planes/Petzval/source mismatches: implementedModel.infinity plus results.comparisons.
- Inferred S7 floor/ceiling and stop calibration: results.apertureInference; figure-scale uncertainty remains in evidence.M06.
- Native 3,075-ray count/status, trim and containment: hash-bound nativeSummary; failures are explicitly preserved and source/format/raw/UI field domains remain distinct.

Stage 3: READY_FOR_AUDIT. A fresh source-first independent audit is still required; no final batch readiness or integration is claimed. (Closed: see the Stage 4 section and the 2026-10-10 section below.)

## Independent-review reconciliation corrections

The reviewer first froze a fresh source extraction, independent physical-angle scalar and reduced-angle ABCD implementations, results, and six-catalog pass before opening the author dossier. Baseline fingerprint: 0256e37fdcff19aefe582503aca6d380087777de3f72d90ef1b694493f311b3b. The baseline's five original files remain unchanged. Complete review and final byte approval are recorded separately at consolidation.

R01: Analysis L7 changed from “weakly asymmetric biconvex positive lens” to “asymmetric biconvex positive lens.” The source's +90.8315 and -881.1564 mm radii are strongly unequal. This corrects interpretive wording only.

R02: The data header and analysis now explicitly state that only controlled S18/STO has the app's standard aperture glyph/control. S12/ST1 is an optically active fixed clipping plane without a second standard stop glyph. Fresh immutable-main reads of DiagramOverlayLayer.tsx, DiagramSVG.tsx and ApertureStop.tsx establish that display limitation. The helper's glass contours were native computeElementShapes output, but its two stop markers were author-added lines using stored stop positions; they were not evidence of two native app stop glyphs. Earlier visual-inspection wording is limited accordingly. No app/engine file was changed.

Evidence open issues now state the final inferred-aperture, single-control and single-glyph limitations rather than pending Stage 2 tasks. The original pending wording remains in preserved Stage 1/2/3 checkpoints. Five full-repository/browser checks are now explicit NOT_RUN records with requiredAt: integration, separate from actually executed targeted checks.

Both corrections preserve the entire parsed application payload. Before/after parsed-value equality passed; native build/trace/render/APD, real targeted type/format, portable source/model/analysis and clean-package checks are rerun against the new exact bytes. No source prescription, aperture, focus state, absorption coefficient or margin was changed.

## Stage 4 consolidated independent audit

The reviewer approved the final corrected pair for consolidation after original-source extraction, frozen numerical/catalog baseline, independent TypeScript loading, separate spherical Snell and aperture-bound calculations, source/model/prose reconciliation, full twelve-member safe extraction, and fresh portable/native replay. The preserved receipt binds the exact final pair and baseline fingerprint. Final clean-archive integrity/replay is additionally verified externally; no approval is inferred merely from the author writing this section.

Reviewer exposure was limited to the task, original card's source summaries/concerns, shared sources/specs and filenames before the first pass. No author calculations/package were opened before the freeze. The claim is source/method independence with that disclosure, not total conceptual blindness. The five frozen artifacts are embedded verbatim in independentPass. The untouched numerical implementation is rerun by the portable verifier and compared with the actual final TypeScript at both endpoints. Frozen catalog code/results retain their source dependencies and are not presented as freshly downloaded vendor verification during replay.

Independent checks confirm the literal source rows, both states, per-surface Petzval, cardinals, element/doublet/group powers, source conditions, d-line intensity law, all Figure 3 samples, two stop roles, coincidence, and focused exact-ray aperture bounds. The native replay used 137 hash-matched shared modules from the immutable main reference set. ST1 actively clipped 26 sampled rays, establishing that it is not an inactive dummy. The first-entry analytic miss disposition and finite nonclipped segment scope were independently reviewed.

The original printed EFL and image-gap mismatches, uncertain source diameters, tight S7 clearance, fixed-ST1/single-control/single-glyph model, catalogue asphere conflict, proxy/unmatched glasses and absent absorption spectrum remain limitations. Nothing is optimized or silently corrected. The final grammar correction uses “an asymmetric biconvex positive lens” for L7. No optical payload changed during review.

A post-freeze catalogue annotation preserves the independent CDGM parser coverage: 304 parsed rows versus the author’s 308. The missing starred H-K9L* and three nd>2 rows were checked directly afterward and do not change any glass disposition. The frozen baseline was not retroactively rewritten.

Full repository typecheck, lint, corpus sweeps, build and browser UI are explicit NOT_RUN / requiredAt integration records. The target remains a source-traceable pre-integration research package. INTEGRATION_PENDING. (Closed 2026-10-10: see the section below.)

## 2026-10-10 — Deployment validation and wording pass

Source re-read. CN 104991330 B was read again from page images of the 13-page PDF, which has no text layer: pp. 5–6 for Example 1, pp. 3–4 and 8 for the conditions and the transmission law, pp. 9–11 for Figures 1–4. Checked: 22 surface rows (22 R, 20 fixed d, 11 nd, 11 νd), both stop rows, and D11 / D22 at infinity and 0.15×. Mismatches: none. The patent has no aspheric equation, conic or coefficient for either example. It tabulates only the infinity and 0.15× states and prints no total length, object distance or clear aperture.

First-order values, patent against model. f 102.2630 / 102.2710 mm. Fno 2.05 / 2.05. D22 39.6422 mm against a paraxial back focus of 39.6479 mm. Half-field 11.92°; the field axes of Figure 2 end at 21.63 mm, the 135-format corner. Derived, not printed: first-vertex-to-image 125.1106 mm. At the 0.15× spacings: magnification −0.1500, EFL 98.953 mm, object-to-image 855.26 mm. Conditions |F/FA| 1.718, |F1/F2| 3.128 and A 0.5 are reproduced as printed. Apodization: α = ln 2 / 2 = 0.346574 mm⁻¹ reproduces every Figure 3 sample, and an axial ray transmits 0.7071. The on-axis pupil-mean bulk transmission at F/2.05 is 0.449, equivalent to T/3.06 before surface losses, against the marketed T/3.2; a rough estimate for Example 2 (A = 0.3) gives about T/3.6. Surface audit clean; image circle not undersized; corner coverage 100 % at 21.63 mm; no axial clipping or blocked chief ray at either focus state (tightest: S7, 20.38 mm ray height against 20.5 mm).

Maker diagram. The 2021 Laowa catalogue (PDF p. 11) lists 11 elements in 8 groups, 105 mm, f/2–22, 23°, full frame, 0.9 m, 9 F-stop and 14 T-stop blades, and EF / F / A / FE / K mounts. Its section, measured from the vector drawing, has the patent's element sequence and three contacting pairs, with the apodization element ahead of its positive partner as in Figure 1 (reversed in Figure 4) and radii that track Example 1 rather than Example 2. It draws the apodization element concave-front with a biconvex partner where Example 1 has plane outer faces, so production reads as a refinement of Example 1. The catalogue legend marks elements 4, 5 and 9 Low Dispersion, element 8 Apodization Filter and element 2 “Glass Aspherical”. Venus Optics' launch press release gives one high-refractive, three low-dispersion and one apodization element and no asphere; its launch diagram (read separately during integration, not re-measured here) marks element 2 Extra Refractive Index. Element 2 is L2 (1.92286 / 20.88).

Fields changed in this pass. No R, d, nd, νd, semi-diameter or variable-gap value changed. `name` now reads "LAOWA 105mm f/2 Smooth Trans Focus (STF)". `subtitle`, `specs`, the header comment, `focusDescription` and the L8 `role` were reworded in plain terms. `patentAuthors` and `patentAssignees` use the corpus spellings "Xiaohua Zhang" and "Anhui Changgeng Optics Technology Co., Ltd.". L5 gained `apd: "inferred"` with an `apdNote`. `maxFstop` is 22 and `fstopSeries` ends at 22, the production minimum aperture. EFL, f-number, stop radius, back focus and both focus keyframes are unchanged. The analysis lost its process wording; item 2 of its identification list and its asphere paragraph were corrected as described above; its "Verification Summary" became "Model Scope and Limitations"; the launch material was added as source 5.

Open: L4 (1.80420 / 46.50, matching TAF3) and L9 (1.67128 / 56.37, lanthanum-crown region) are marked Low Dispersion by the maker but are ordinary lanthanum glasses and carry no tag. L5 (1.55102 / 66.41) matches no catalogue glass; its tag rests on the maker's label and on its position in the phosphate-crown region. The production differences from Example 1 at the apodization pair are not modeled. `closeFocusM` is the 0.855 m of the patent's 0.15× state, short of the marketed 0.9 m. Only L8 carries a `role`.

## 2026-10-10 — Semi-diameter pass against the patent figure

Source and scale. CN 104991330 B, PDF p. 9, Figure 1 (Example 1, infinity state), read at the scan's native 300 dpi. The dash-dot axis lies at y = 744.5 px. Vertex crossings were read in a strip beside the axis: first vertex at x = 563.5 px and last vertex at x = 1574 px, so the 85.4684 mm span S1–S22 is 1010.5 px, 11.823 px/mm or 0.0846 mm/px. Three other spans agree within 1 %: S1–S11, 35.4046 mm over 419.5 px (11.85 px/mm); S13–S22, 35.4916 mm over 417.5 px (11.76 px/mm); S11–S13, 14.5722 mm over 173.5 px (11.91 px/mm). The figure is therefore drawn to axial scale at the infinity spacing. Rims were read on the upper side for Gr1 (the lower side runs into the "Gr1" label) and on the lower side for Gr2 (the upper side carries the ST1, A and ST2 leaders); where both sides are clean they agree within 3 px (0.25 mm). Outline strokes are about 3 px wide. Curve ends on the three concave faces drawn with a flat annulus were read twice: from the inner end of the annulus, and from the axial depth of the annulus plane on the prescription sphere.

| Surface | Stored before | Figure 1 | After | Evidence |
|---|---:|---|---:|---|
| 1, 2 (L1) | 27 / 27 | rim 316.5 px, 26.8 mm | 27 / 27 | Retained, ratio 0.99. The rear curve ends at a short flat annulus whose plane lies 4.5 mm behind vertex 2; the R = 69.66 sphere reaches that plane at 24.7 mm, 8 % under the stored value and inside the noise band. The annulus inner end reads 23.7 mm, below the 24.34 mm axial ray. |
| 3, 4 (L2) | 25.2 | rim 302–305 px, 25.5–25.8 mm | 25.2 | Retained, ratio 1.02. |
| 5 (L3 front) | 25.2 | rim 297.5 px, 25.2 mm | 25.2 | Retained, ratio 1.00. |
| 6 (L3 rear) | 25.2 | curve end 20.6–20.7 mm; flat annulus out to the 25.2 mm rim | 20.7 | Changed. The annulus plane is 90–91 px (7.61–7.70 mm) behind vertex 6, where the R = 31.7755 sphere stands at 20.63–20.73 mm. The annulus inner end reads 232.5–234.5 px (19.7–19.8 mm), below the 20.39 mm axial ray, so the depth reading is used. At 25.2 mm the concave face ran 12.42 mm behind its vertex, 4.7 mm past the drawn annulus, and the element enclosed L4. |
| 7, 8 (L4) | 20.5 / 21.5 | rim 256.5 px, 21.7 mm | 20.5 / 21.5 | Retained, ratios 1.06 and 1.01. Surface 7 is still capped at 20.53 mm by the default gap rule against surface 6. Surface 8 ends at a short annulus whose plane depth gives 20.1 mm, 6.5 % under the stored value. |
| 9, 10 (L5 and junction) | 20 / 20 | rim 237 px, 20.0 mm | 20 / 20 | Retained, ratio 1.00. |
| 11 (L6 rear) | 20 | curve end 15.6 mm; flat annulus out to the 20 mm rim | 15.6 | Changed. The annulus plane is 56–56.5 px (4.74–4.78 mm) behind vertex 11, where the R = 27.9354 sphere stands at 15.56–15.63 mm. The annulus inner end reads 175.5–178 px (14.9–15.1 mm), at or below the 15.14 mm axial ray. At 20 mm the face ran 8.43 mm behind its vertex, 3.7 mm past the drawn annulus; at the 0.15× spacing (D11 = 7.0 mm) that rim lay 1.4 mm behind the ST1 plane. At 15.6 mm it stays 2.2 mm ahead of it. |
| ST1 | 14.5 | tick inner end 153.5–157.5 px, 13.0–13.3 mm; outer end 15.6–16.0 mm | 14.5 | Retained. The drawn opening is smaller than the 14.15 mm the F/2.05 axial ray reaches at ST1, so following the figure would clip the stated aperture. |
| 13, 14 (L7) | 14.6 | rim 174.5 px, 14.8 mm | 14.6 | Retained, ratio 1.01. |
| 15, 16, 17 (L8, L9) | 14 | rim 166.5 px, 14.1 mm | 14 | Retained, ratio 1.01. Square block; the S16 curve meets the rim 1.1 mm ahead of S17, against 1.19 mm modeled. |
| STO | 11.923 | tick inner end 138 px, 11.7 mm | 11.923 | Not a figure value; calibrated to F/2.05. |
| 19, 20 (L10) | 12 | rim 143 px, 12.1 mm | 12 | Retained, ratio 1.01. |
| 21, 22 (L11) | 16.5 | rim 194 px, 16.4 mm | 16.5 | Retained, ratio 0.99. Edge thickness 5.7 mm drawn, 5.53 mm modeled. |

Two of 22 surfaces changed. The header note in the data file and the semi-diameter paragraph of the analysis's "Model Scope and Limitations" were updated to match. The prescription has no aspheric surface, and the L8 / L9 rims are unchanged, so the analysis's 0.2126 transmission at h = 14 mm stands.

Clearance after the change. Surface validator: no errors. Image-circle floor: none undersized. Traced corner coverage: 100 %, 21.65 mm at 11.9°. Axial F/2.05 ray against rim at infinity: 20.39 / 20.7 mm on surface 6, 20.38 / 20.5 on surface 7, 15.14 / 15.6 on surface 11, 14.15 / 14.5 on ST1; no surface clips it. At the 0.15× state the axial ray reaches 17.99 mm on surface 6, 13.66 mm on surface 11 and 13.50 mm on ST1. The corner chief ray (11.92°, Y = 21.63 mm) passes surface 6 at 15.57 mm and surface 11 at 8.78 mm. Engine values are the same before and after: EFL 102.271 mm, F/2.05, stop radius 11.950 mm, geometric half-field 14.506°, analysis half-field 11.926° at infinity and 10.173° at 0.15×. Surface 1 still sets the geometric field limit at 14.5°; surface 6 is now second at 14.7° (surface 3 was second at 15.0°).

Vignetting is unchanged. The meridional pass band, as a share of the stop diameter at image heights 0, 5.41, 10.81, 16.22 and 21.63 mm, is 100.0, 91.8, 83.0, 71.1 and 53.1 % at infinity and 99.9, 99.9, 94.5, 86.2 and 74.2 % at 0.15×, with the same figures before and after; the limiting rims are surfaces 7, 3, 20 and 22, not 6 or 11. A skew-ray pupil grid at 0.2 mm pitch over nine field angles to 11.92° gave identical pass counts before and after at both focus states (44.4 % of the on-axis count at the infinity corner).

Live comparison. The local page was viewed at infinity and at the 0.15× end of the focus range. L3 now ends at L4's rim instead of wrapping behind it, L4's rim shows behind L3 as in Figure 1, and L6 no longer reaches back toward ST1 and L7 at close focus. Element order, relative heights and the three contacting pairs match the figure.

Maker diagram. No maker image was viewed in this pass. The record in the section above stands: Laowa's 2021 catalogue section has 11 elements in 8 groups in the patent's sequence with three contacting pairs, draws the apodization element concave-front with a biconvex partner where Example 1 has plane outer faces, and marks elements 4, 5 and 9 Low Dispersion, element 8 Apodization Filter and element 2 "Glass Aspherical" (high-refractive in the press material).

Open limitations. The renderer joins unequal front and rear rims with a straight edge, so L3 and L6 taper toward the rear where Figure 1 draws square blocks with a flat annulus. The short annuli on surfaces 2 and 8 are not modeled. Figure 1 draws L4 square-cut at 21.7 mm; the stored 20.5 / 21.5 mm is within 6 % and was kept. The default gap rule would admit 21.6 mm on both faces of L4 only with surface 6 at 20.5 mm. ST1 is not drawn by the viewer, and its radius remains a clearance value rather than the figure's. The patent prints no effective diameters, so every value remains an estimate from a schematic figure.

## 2026-10-10 — Second review: diagram, labels and movement

What was compared. The local page at infinity, at the 0.15× end and with the focus-movement overlay open, against CN 104991330 B Figure 1 (PDF p. 9) read again at 300 dpi. Patent ¶0034 (PDF p. 4) and the D(11) / D(22) table under ¶0046 (PDF p. 6) were read from page images. The review ran under a time limit, so each rim was profiled once on its clean side.

Silhouette. Independent scale: vertex 1 at x = 563.5 px, vertex 22 at x = 1574 px, 11.823 px/mm; the spans 1–11 (419.5 px) and 13–22 (417.5 px) agree within 1 %. Upper-side rims: L1 316 px (26.7 mm, stored 27), L2 302–305 px (25.5–25.8 mm, stored 25.2), L3 block 297 px (25.1 mm, stored 25.2 on surface 5), L4 255–256 px (21.6 mm, stored 20.5 / 21.5), L5 / L6 block 236–237 px (20.0 mm, stored 20). Lower-side rims: L7 175 px (14.8 mm, stored 14.6), L8 / L9 167 px (14.1 mm, stored 14), L10 143 px (12.1 mm, stored 12), L11 195 px (16.5 mm, stored 16.5). The L3 block top ends at x ≈ 839.5 px, 7.65 mm behind vertex 6, where the R = 31.7755 sphere stands at 20.7 mm; the L6 block ends at x ≈ 1039 px, 4.74 mm behind vertex 11, where the R = 27.9354 sphere stands at 15.6 mm. Both first-pass values are confirmed and no semi-diameter was changed.

Squared blocks. Figure 1 draws L3 and L6 square-cut; the site shows a slanted edge on each. Equal heights were considered and rejected for both. Surface 6 at 25.2 mm runs 12.4 mm behind its vertex and encloses L4, whose rear rim lies 10.2 mm behind that vertex; the spheres of surfaces 6 and 7 cross near 21.3 mm, so no value above the present 20.7 mm keeps L3 clear of L4. Surface 11 at 20 mm runs 8.43 mm behind its vertex, 3.7 mm past the drawn annulus, and at the 0.15× spacing (D11 = 7.0 mm) the glass between 18.5 and 20 mm would lie behind the ST1 plane. The slanted edges therefore stay as an open difference from the figure: the renderer has no flat-annulus rim.

| Field | Before | After | Evidence |
|---|---|---|---|
| L8 `label` | Element 8 | Element 8 (A) | Figure 1 marks the shaded apodization element "A" and ¶0034 calls it the neutral negative lens A; it is the only element the patent designates. The inspector now reads "Element 8 (A)". |

Checked and found correct. Group brackets Gr1 (surfaces 1–11) and Gr2 (13–22) match the figure's brackets. D1 (3–6), D2 (9–11) and D3 (15–17) cover the three contacting pairs. Element types agree with the signs of R for all eleven elements; there is no aspheric surface and none is marked. The stop symbol is drawn at surface 18 between L9 and L10, the figure's ST2; ST1 at surface 12 is not drawn. ST1 stays at 14.5 mm: the F/2.05 axial ray reaches 14.15 mm there, above the 13.0–13.3 mm the figure draws. The L8 inspector shows Plano-Concave, nd 1.504, νd 63, f −59.52 mm, bulk absorption 0.347 mm⁻¹ and the role text; 0.71 and 0.21 match 0.7071 and 0.2126.

Movement. `var` index 0 is the infinity row (D11 13.5722, D22 39.6422) and index 1 the 0.15× row (7.0000, 55.5496). The overlay shows Gr1 moving 9.34 mm and Gr2 15.91 mm, both toward the object, as the two arrows of Figure 1 indicate; the far end of the slider reads 86 cm with D11 7.00, D22 55.55 and EFL 98.95 mm.

Engine values are unchanged: EFL 102.271 mm, F/2.05, geometric half-field 14.506°. Surface validator: no errors. Image-circle floor: none undersized. Corner coverage 100 %. No axial clip or blocked chief ray at either state.

Open limitations. The viewer does not shade L8 or mark it as absorbing on the section; it is coloured as an ordinary low-index element. Laowa's Low Dispersion marks on L4 and L9 remain untagged, as recorded above; the L5 inspector shows the inferred tag with its note. ¶0034 places ST1 at the object-side end of Gr2, while the Gr2 bracket starts at surface 13 as the figure's bracket does; ST1 travels with Gr2 in the model because D11 precedes it. The patent table gives only Nd and Abbe numbers, with no glass names, further line indices or partial dispersions, for the five unmatched glasses.
