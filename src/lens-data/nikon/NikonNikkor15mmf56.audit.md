# Nikon Nikkor-QD·C Auto 15mm f/5.6 — technical dossier

## Job and reference versions
Original four-field card and PDF are unchanged. The card's “Example 2” means the second numerical table only by the user's explicit clarification “Yes, the spherical table.” The patent does not number that table Example 2. Its heading is 球面光学系（参考資料）, spherical optical system (reference material), PDF p3/printed165, continued p4/printed166. The separate aspheric embodiment and its coefficients are excluded.

Project references are freshly pinned to commit 3d44a1be91db853725ac841b65a9e228f2c544ef. The manifest identifies all controlling reference bytes. Protocol/dossier and combined launchers retain CHAT-1.0; current schema governs actual application fields. No Git write, full build, metadata generation, integration or publication was performed.

## Extraction and conventions
The PDF is image-only: pdftotext returned only page breaks. All five pages were rendered; the selected numerical table was reread at high resolution. Native literal values, including infinity symbols, missing last spacing and filter's nonnumeric Abbe entry, are preserved in evidence. Positive radii have centres to image side. Lengths are mm, scale is unity. The native n/ν wavelength is not explicitly specified. Approximate d-line tracing convention is disclosed and no historical material identity is asserted.

The card names a production correlation target. Nikon's historical French manufacturer catalogue, PDF p12/printed10, confirms marketed 15mm f/5.6, 110° field, floating close correction, 0.3m MFD and built-in filters including neutral glass. This does not identify the patent as the production prescription. Nikon's history dates the product to 1973.

## Model transformations
Retain source in-lens plate S11–12 (1.20mm, n1.51743) in the neutral-filter reference state. Current specification explicitly includes required in-lens filters. The manufacturer describes a built-in filter system including neutral glass, not an optional accessory plate. Its operational necessity is an inference from that built-in provision, not a quoted 'must insert' instruction. The plate is excluded from elementCount/groupCount, which describe 14 lens elements in 12 lens groups; the optical model includes one additional plate entry. No gaps or vertices are altered for a filter omission.

No length scaling. Published last-vertex image distance38.77mm remains authored; computed best paraxial focus is separate. Stage2 will insert an optically neutral stop at the midpoint of source1.60mm gap after S20, explicitly inferred rather than dimensioned. Stop SD and lens SDs are unpublished.

Focus is NO_INTERNAL_RECONSTRUCTION. One reference configuration only. Manufacturer floating-focus/MFD data does not determine a motion law. Current DiagramControls source inspection confirms no modeled focus travel disables the focus slider and displays 'Not modeled'. Static closeFocusM1e15 sentinel is not a physical focus distance.

## Glass review
Every distinct native lens coordinate was compared against 435 vendor HOYA AGF rows and130 direct OHARA table rows. Relevant candidate rows and residuals are portable evidence. OHARA S-/L- distinctions are retained. Hikari J-SFH2 was directly checked at PDF p109 of its2023 catalogue. Pinned project shards provide a separate secondary comparison across six requested manufacturers; they are not misrepresented as six freshly inspected primary catalogs. Schott/Sumita primary pages failed retrieval, and CDGM numerical data was unavailable despite accessible landing page. Unknown native wavelength plus historical melt uncertainty precludes definitive labels; Unmatched labels preserve source values. No catalog nC/nF/ng/ΔPgF is transferred to the unknown historical lens materials.

## Numerical and geometry results
Executed sequential height/reduced-angle and independent ABCD multiplication agree. Source EFL15.309003680876264mm; BFD38.792875302029664mm, measured from last vertex. Published15.3mm and38.77mm remain separate comparisons. Tolerances derive from source half-last-place perturbations, not a tolerance enlarged after a desired result. Vertex track81.4mm. H1 is46.55099189313926mm from first vertex; H2 is23.483871621153398mm imageward of last vertex. Surface-by-surface Petzval and individual-in-air/air-separated-group powers are in results. Optical plate power is zero.

The source thickness ratio26.4/15.3=1.7254901960784315 is below1.9, as expected for the explicitly spherical comparison: the claimed aspheric invention's inequality must not be claimed satisfied by this table. This is an intentional comparator distinction, not a construction defect. Geometry and exact stop calibration are Stage2 tasks.

## Correction and discrepancy register
High-resolution rereading corrected provisional transcription S7:29.01→22.90, S13:+449.32→−449.32, S25:−19.05→−190.05 before any gate. No patent value was 'fixed'. The source's unusually low n1.44772 remains unchanged, without forcing a catalog match. User clarification resolved the initial selection ambiguity; original card bytes remain fixed.

## Gate disposition
Stage1: READY_FOR_DATA, subject to the explicit Stage2 stop/SD work. This is source construction verification, not Stage4 independent review. Manifest and results enumerate executed coverage.

## Quantitative claim map
Extraction/numerical paragraph -> sourceModel EFL, BFD, vertexTrack, H1FromFirst, H2FromLast, petzvalSurfaces, powers. Thickness comparison -> sourceModel.conditionRatio and rawPrescription.conditions. Marketing claims -> nikon-catalog source, not numerical verification of production performance. Native source fields -> rawPrescription rows and locators.

## Pending integration
Actual LensDataInput typecheck, Prettier execution, buildLens/validateLensData, project exact tracing, production render-trim, runtime glass policy and batch integration have not run. They remain NOT_RUN at integration, not substitute PASS labels. No independent audit has yet occurred.

## Stage2 construction checkpoint
Actual data literal parsed with the strict portable lexer/parser; comments and trailing commas accepted, duplicate keys, expressions, spreads, calls and trailing content rejected. A deliberately altered first radius fails source-model equality. No aspheres or variable motion. The original source plate is retained;15 model entries represent14 lens elements plus filter. Patent element labels describe compound groups whereas data L1–L14 number physical lens components; F denotes the filter.

Exactly one midpoint STO splits1.60mm into0.80+0.80mm, conserving every source vertex. Exact on-axis calibration gives stop SD3.326993599339mm at F5.6. The separately computed paraxial F-number is5.496338805; it must not be substituted for the exact calibrated value or reported as independent iris evidence. The distinction is deliberate. Entrance-pupil axial location (paraxial) is35.166439145mm from first vertex.

Modeled SDs derive from exact meridional bundles at0,10,20,33degrees, full stop fractions[-1,-.75,0,.75,1],10%+0.05mm clearance; common maximum SD spans each cemented block. Independent verification includes mirrored−33degree fields. All25 tested rays clear, minimum non-stop clearance0.403155311mm. Sphere domains, actual rim angles, edge thickness, element SD ratios and shared-band cross-gap intrusion all pass.500 radial intervals per shared band are evaluated. These are a modeled representative field subset, not full110degree production coverage, skew-ray clearance or production-render verification.

Functional subgroup isolated EFLs(mm): {'front': -21.397461165634404, 'preStop': 61.078892638937226, 'postStop': 34.51913996207682}. These are standalone subassembly quantities, distinct from in-situ marginal-ray behavior and single-element powers. Petzval sum0.009174209014permm is surfacewise phi/(n*nPrime); it is not a sagittal/tangential field-curvature prediction.

Stage2 gate: READY_FOR_ANALYSIS. All mandatory portable checks pass; exact revisions are bound in manifest.stage2Checkpoint. Current application checks remain integration-only NOT_RUN. No production integration occurred.

## Stage3 claim and citation review
The174-line analysis was authored only after the complete Stage2 checkpoint passed and was reopened from the verified bytes. The data file is unchanged throughout Stage3. Before analysis, the portable verifier was extended to recompute all preserved primary catalogue candidate residuals; this check passed and the Stage2 checkpoint was regenerated before authoring. No data prescription change resulted.

Quantitative claim map:
- Analysis identification: source system15.3mm/F5.6/110deg -> rawPrescription.systemValues, patent p3; marketed15mm/F5.6/110deg/0.3m -> manufacturer catalogue p12, explicitly source assertions. Publication/filing metadata -> patent p1.
- Architecture EFL/BFD/track/principal planes -> implementedModel.EFL/BFD/vertexTrack/H1FromFirst/H2FromLast.
- Architecture front/pre-stop/post-stop EFLs -> implementedModel.functionalGroups.
- Stop SD and paraxial F-number -> implementedModel.pupils; F5.6 agreement dependent calibration.
- Counts14/12 plus filter -> source15 indexed media, minus designated filter, two cemented joins; parsed data structure check.
- L1–L14 first-line n/nu -> parsed facts.elements plus source-model-equality; individual focal lengths -> implementedModel.powers.elements. Each first-line power string is checked against final parsed data and recomputed values.
- Filter zero standalone power -> plane radii plus implementedModel.powers.elements; missing nu preserved.
- Glass table -> parsed facts.elements native coordinates; candidate differences -> sourceModel.glassAudit. No candidate label substitutes a source glass.
- Focus0.3m -> manufacturer only; static sentinel/no reconstruction -> focus evidence plus static-focus check. No travel number is asserted.
- Condition26.4/15.3, rounded1.726, lower bound1.9 -> sourceModel.conditionRatio and source condition table.
- Petzval coefficient -> implementedModel.petzvalSum with individual surface terms in petzvalSurfaces.
- Aperture-envelope sampling/allowance -> evidence sd-inference ledger plus exact-off-axis/geometry checks. These are model construction settings, not source dimensions.

Manual interpretive review: each element's curvature type and sign were compared to the final radius pair and standalone power. The front/post-stop roles are supported by executed block powers. No unquantified individual aberration allocation, apochromatism, historic supplier attribution, finite-focus performance, or production patent identity is asserted. Citation locators were visually checked against the supplied scan and manufacturer PDF. A portable cross-section was rendered and visually inspected for the static shape; it is not a project renderer test and is not included as an unnecessary package member.

Stage3: READY_FOR_AUDIT. The data hash remains the Stage2 hash; the Stage3 manifest preserves the exact preceding checkpoint and current file hashes. Independent Stage4 review has not been performed in this authoring context.


## Stage 4 source-first independent review

PASS A was completed and frozen before candidate access. Its fingerprint is 3730981afabf1554c05cff357d983e55efdaf5751eaad001d845c2262256d101. The full exposure declaration, source transcription, conventions, fresh-code identity, fresh numerical results and catalog comparisons are retained in evidence.independentPass. No candidate/author computation was used to seed the baseline. The baseline was not rewritten during reconciliation. The independent reviewer initially misread r19 as +12.50; a high-resolution source crop corrected it to the printed −12.50 before freezing, independent of the author.

The exact Stage 3 candidate manifest and all eight non-manifest file hashes were verified before edits. Its parent ZIP SHA256 is 7f4fae16b318034835160bb7230febe8ee5d0af25b9eaf1c4af184ea2b5d7032. Original-source, independently entered, candidate and prose values were compared separately. All 28 source planes, index pairs, thicknesses, radius signs, flat faces and cemented interfaces agree. The source's physical filter remains present, and midpoint stop insertion conserves its gap. The data file remains byte-identical to Stage 3.

The independent reduced-angle and matrix implementation is retained under ip_* functions in the final portable verifier. It runs on frozen inputs and on actual parsed TypeScript surfaces. It verifies EFL, BFD, vertex track and Petzval against both author calculations and source baseline. Standalone element powers are independently recomputed with the thick-lens formula; pre/post-stop pupil conjugation is separately checked. The functional-group signs and element shapes were manually compared with the prescription, and the element-by-element claims remain appropriately limited.

A fresh post-exposure ray implementation uses Newton intersections with spherical sag and angular Snell refraction, independently of the author's quadratic intersections and vector Snell method. It validates 49 meridional rays at fields 0°, ±10°, ±20°, ±33°, and seven iris fractions. Minimum non-stop clearance is 0.403155311 mm. This independent path validates the disclosed field subset only; it does not certify full 55° half-field, skew rays, continuous field transmission or production rendering. The author's spherical domain/rim-angle/edge/gap tests were inspected and rerun: for two concentric-axis spherical sag graphs, their nonzero-radius derivative difference cannot change sign unless radii are equal, so the sampled shared-band endpoints include the relevant extrema. The stop-split gap is also checked between the real bounding surfaces.

Primary manufacturer catalogue bytes with SHA256 b74b701c33e97cf16db4a302b7a293c24613a87c097fd815f5e659e75a05acc7 were obtained after a separate download returned corrupt bytes, then rendered and visually checked at PDF pages 3 and 12. They confirm 24×36 format, Nikon/Nikkormat system, 110° field, floating correction, 0.3 m production MFD and three built-in filters plus neutral N. The source's selected plate/neutral state is retained; no optional accessory is introduced, and no literal manufacturer must-insert statement is fabricated. These product facts do not prove the reference table's production identity or supply a focus-motion law.

The independent glass review freshly compared OHARA's May 2023 pocket table, HOYA's 2026-07-07 AGF including obsolete entries and the official HIKARI PDF. Relevant rows, residuals and exact source hashes are preserved. Other vendor checks are explicitly limited, not a claimed exhaustive six-vendor historical search. The unknown source wavelength and lack of supplied spectral data support every Unmatched/indexReferenceNote disposition; no catalog spectrum or APD conclusion is imported.

### Stage 4 corrections and discrepancy disposition

1. Analysis identification now explicitly records Nikon's production-designer attribution to Ikuo Mori versus patent inventor Tomowaki Takahashi. Primary Nikon Tales 9 and 86 support the former; the rendered front page supports the latter. This strengthens the existing qualified correlation and changes no optical model values.
2. Analysis previously said the source “rounds” 26.4/15.3 to 1.726. Direct division gives 1.725490196, which does not round to 1.726 at three decimals. It now says the source prints 1.726 and preserves the −0.000509804 residual. The aspheric invention condition is NOT_APPLICABLE to the spherical comparator, with its unsatisfied inequality retained as a numerical observation. An applicability check passes only the separation of these roles.
3. Raw BFD comparison is now explicitly FAIL against the printed BFD's own 0.005 mm display-rounding interval. The +0.022875302 mm residual remains visible. A separate mandatory discrepancy-resolution check passes because two independently written paths reproduce the table and the discrepancy lies within independently estimated propagation of source rounding. This is consistency with rounded source inputs, not proof of the hidden unrounded values or a claim of exact reproduction. No patent value, source table or modeled final gap was changed.
4. Independent input/result/code/fingerprint and a second exact-ray path are incorporated into the canonical verifier/evidence. These are intentional verification records, not another editable application model.

### Final claim map and gate

Existing Stage 3 claim map remains applicable to unchanged data. Stage 4 adds: designer distinction → rendered patent front page + Nikon Tales 9/86; ratio residual → raw condition table + direct arithmetic; BFD source discrepancy → comparisons with separate published-BFD-resolution; independent source/code agreement → independentBaseline + independent-source-table/four-view-reconciliation; expanded sampled ray clearance → implementedModel.independentExactRays; independent material dispositions → independent-glass-disposition.

Manual citation/prose review found no unsupported production prescription assertion, supplier identity, source wavelength, APO claim, asphere carry-over, focus reconstruction or full-field clearance statement. The aspheric embodiment's figures/conditions are not claimed to describe spherical performance. Physical 14/12 lens counts remain distinct from the additional plate model entry.

Final disposition: READY_FOR_BATCH after recorded final hash/clean-extraction/replay checks. IntegrationStatus: INTEGRATION_PENDING. Actual project type checking, buildLens/validateLensData, runtime glass behavior, render trim and full integration remain NOT_RUN at integration scope. No Git writes, full build, metadata generation, corpus sweep or publication occurred.

## 2026-10-05 — Semi-diameter figure pass

Source: `patents/JP_S4871634_A.pdf`, PDF p. 4 (printed 166), Fig. 1, measured on the native 352 dpi scan and a 704 dpi enlargement. The patent has a single cross-section. It draws the aspheric embodiment (PDF p. 3 table), not the spherical reference table modeled here. The two tables share r1, r3, r5 and the same element order; the front group L1–L5 and the filter differ only in a few radii and gaps, while doublet D1 (d13 4.09 vs 0.80 mm) and L11 (d21 8.88 vs 6.10 mm) differ markedly. Fig. 1 was therefore used directly for surfaces 1–12 and only as a proportion guide behind the filter.

Scale: first to last vertex of the aspheric embodiment is 93.48 mm (sum d1–d27) and spans 710 px at 352 dpi, giving 0.1317 mm/px (0.0658 mm/px at 704 dpi). Cross-checks on the same figure: d1 = 3.10 mm → 47 px measured at 704 dpi (expected 47); d1+d2 = 15.08 mm → L2 front vertex within 4 px; the L1 front rim at 38.5 mm sits at the sag predicted by R = 48.15 mm within 3 px. The figure is drawn to scale in the front group. It is tilted about 1°, so rims were taken as half of top-to-bottom extents where both sides are clean.

Defect found: the previous semi-diameters were ray envelopes for fields up to 33° only. The field-coverage audit reported 55% (chief ray clipped at surface 1, 24.80 > 24.77 mm), although the table is specified for 2ω = 110°. An independent exact meridional trace of the table (scratch script, closed-form sphere intersections) shows that the prescription itself passes a chief ray to 21.43 mm at ω = 55° and to 21.65 mm at ω = 55.3°; only the modeled apertures were too small.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 1 | 24.77 | 39.0 | Fig. 1 optical rim 38.5 mm (outer edge 39.2); corner chief ray 38.39 |
| 2 | 21.97 | 30.9 | Corner chief ray 30.78; Fig. 1 draws the L1 rear arc to about 0.93 R |
| 3 | 18.48 | 31.0 | Fig. 1 rim 31.1; corner chief ray 30.50 |
| 4 | 15.09 | 30.6 | Fig. 1 rim about 30.5; corner chief ray 29.47 |
| 5 | 13.28 | 19.0 | Fig. 1 rim 18.8; corner chief ray 18.85 |
| 6 | 11.86 | 15.2 | Fig. 1 rim 14.8; corner chief ray 15.04 |
| 7 | 10.27 | 14.3 | Fig. 1 rim 13.2 (different radius in the figure's table); corner chief ray 14.20 |
| 8 | 9.30 | 11.9 | Fig. 1 rim about 11; corner chief ray 11.73 |
| 9 | 8.46 | 11.2 | Fig. 1 rim 10; corner chief ray 11.08 |
| 10 | 7.81 | 9.8 | Fig. 1 rim 8.2 (r10 is 10.88 in the figure's table, 12.87 here); corner chief ray 9.63 |
| 11, 12 | 6.71, 6.50 | 9.7 | Fig. 1 filter half-height 9.7–9.9 |
| 13, 14, 15 | 6.33 | 8.0 | Fig. 1 draws 9.5 (front member) and 7.4 (rear member) for a doublet of different thicknesses; one common rim between them; corner chief ray 7.3 at surface 13 |
| 16, 17 | 5.00, 4.64 | 5.0, 4.6 | Rounded only. Fig. 1 draws about 4.1, kept ray-based (off-axis bundle) |
| 18, 19, 20 | 4.51 | 4.5 | Rounded only. Fig. 1 draws about 3.0, which is smaller than the 3.31 mm F/5.6 axial beam, so the figure cannot be followed |
| STO | 3.3270 | unchanged | Calibrated to F/5.6; not touched |
| 21 | 3.94 | 4.3 | Fig. 1 rim 4.3 |
| 22 | 4.85 | 4.8 | Rounded only (Fig. 1 4.3 would cut the 33° bundle) |
| 23, 24 | 4.87, 5.41 | 4.9, 5.4 | Rounded only |
| 25, 26 | 5.52, 5.94 | 5.5, 5.9 | Rounded only; Fig. 1 5.7 |
| 27, 28 | 6.35, 7.13 | 7.6, 7.8 | Fig. 1 rim 7.8; corner chief ray 5.5 / 7.1 |

Geometry limits: surface 2 at 30.9 mm has a 70.4° rim slope (sd/R = 0.942) and the L1–L2 air gap closes to 0.34 mm at that height (sag intrusion 96.7% of the 10.3 mm gap). Both exceed the validator defaults (64.2°, 90%). Holding the defaults caps surface 2 at 29.5 mm and the traced field near 52.7° (about 91% of the corner), short of the patent's stated 55°. Because the table is specified for 110° and Fig. 1 shows the same deep L1 rear surface, the data file sets `maxRimAngleDeg: 71` and `gapSagFrac: 0.97` and documents them in the header.

Results after the change: the surface validator reports no errors; the image-circle audit reports the lens as not undersized; the field-coverage audit reports 100% (modeled 55.3° → 21.65 mm of 21.65 mm, corner clear) against 55% before. EFL 15.3090 mm, BFD 38.7929 mm and the paraxial f-number of the stored stop (5.496) are identical before and after. The independent meridional fan (41 rays across the stop) passes completely at 0°, 20° and 33°, 36 of 41 at 45°, 29 of 41 at 50°, 9 of 41 at 55° and 7 of 41 at 55.3°; no surface clips the axial beam and none blocks the chief ray up to the corner. The scratch clear-aperture tool could not solve the chief ray beyond about 42° for this lens (its launch-height scan does not bracket the tiny entrance pupil at steep angles), so the full-field numbers come from the repo field-coverage audit and the independent trace. The local render at infinity was compared with Fig. 1: L1 and L2 now tower over L3–L5 as drawn, and the rear group proportions are unchanged apart from the larger D1 and L14.

Open limitations: Fig. 1 belongs to the aspheric embodiment, so no rim of this table is a direct measurement. Skew rays are not checked. Corner illumination of the model (about 20% of the meridional stop width) reflects ray-fitted front rims, not a published vignetting figure. L8 and D2 are drawn larger than in Fig. 1.

## 2026-10-05 — Glass labels, display name and presentation

Glass labels: the stored n / ν values are unchanged patent values, and the patent still does not state the spectral line. Under the d-line assumption nine lens elements now carry coordinate-compatible catalog class labels, confirmed through the repo glass resolver: L1 LaSF014 class (resolves to TAF4, Δnd +0.00036), L2 LaK8 class (J-LAK8, −0.00041), L3 and L4 LaK13 class (S-LAL13, +0.00030), L5 and L8 LaK14 class (J-LAK14, −0.00004), L7 LLF1 class (J-LLF1, +0.00014), L10 SK13/BaCD13 class (BACD13, +0.00021, Δνd +0.11), L14 BK1 class (BK1 Sumita, +0.00033). The filter, L6, L9, L11, L12 and L13 stay Unmatched; L12 is deliberately not mapped to the modern J-SFH2. Labels name a dispersion curve, not a supplier. Coverage: 9 of 14 lens elements (9 of 15 entries including the filter) resolve to catalog dispersion.

Display name: `name` is now NIKON NIKKOR-QD·C AUTO 15mm f/5.6, the 1973 production lens whose 14-element / 12-group construction the table is correlated with. The correlation remains unconfirmed by Nikon and is stated as such in the subtitle, data-file header and analysis. File names and `key` are unchanged.

Presentation: the data file was converted from JSON style to house style (boxed header with note blocks, unquoted keys, one surface per line). All R, d, nd, vd, fl values, the stop semi-diameter and `closeFocusM` are numerically identical; only the semi-diameters above, glass labels, element roles, `name`, `subtitle`, `specs`, `focusDescription` and the two geometry limits changed. Workflow wording was removed from user-facing strings and from the analysis.

## 2026-10-05 — Second review (site diagram, labels, travel, glass, metadata)

Independent second pass on the local site render against `patents/JP_S4871634_A.pdf` (PDF pp. 3–4 rendered at 400–700 dpi).

Table reread: all 28 radii, 27 thicknesses and 15 n / ν pairs of the spherical reference table agree with the stored prescription. The patent prints "フィルター" in the ν6 column, so the plate has no dispersion value anywhere in the document. No other focus state is tabulated, so the infinity-only model with the `closeFocusM` sentinel stays.

Geometry overrides: a scan of the surface 2 semi-diameter against the field-coverage audit gave 91% at 29.5 mm (the largest value the default limits allow), 94% at 30.0, 96% at 30.3, 98% at 30.5, 99% at 30.7 (corner chief ray clipped, 30.77 > 30.7) and 100% at 30.8 mm. The overrides are therefore needed, but the first pass's 30.9 mm was one step larger than required. Surface 2 is now 30.8 mm, which lowers the rim slope from 70.4° to 69.9° and widens the L1–L2 rim clearance from 0.34 to 0.53 mm.

| Field | Before | After | Smallest passing value |
|---|---:|---:|---|
| Surface 2 `sd` | 30.9 | 30.8 | 30.8 (corner chief ray 30.77) |
| `maxRimAngleDeg` | 71 | 70 | 69.8 fails (69.9° rim slope) |
| `gapSagFrac` | 0.97 | 0.95 | 0.94 fails (sag 9.77 mm of 10.30 mm gap) |

After the change the surface validator reports no errors, the image-circle audit reports the lens as not undersized, and field coverage is 100% (55.3° → 21.65 mm, corner clear). EFL 15.3090 mm, BFD 38.7929 mm and the stop semi-diameter are unchanged.

Site render vs Fig. 1 (3× screenshot): the rear rim of L1 and the front rim of L2 do not cross; L2's front rim (31.0 mm) sits about 0.8 mm behind L1's edge line with a visible gap. Element order, cemented interfaces, stop position between the two flat faces r20 / r21, and the image-plane distance match the figure. Rear-group rims measured on the 700 dpi figure (0.0662 mm/px) against the stored values: D1 9.5 / 7.6 (stored common 8.0), L8 4.3 (5.0 / 4.6), D2 3.1 (4.5), L11 4.4 (4.3 / 4.8), L12 4.6 (4.9 / 5.4), L13 5.9 (5.5 / 5.9), L14 7.9 (7.6 / 7.8). The figure belongs to the aspheric embodiment, whose D2 has r19 = −4.60 instead of −12.50 and whose drawn D2 rim is below the 3.31 mm axial beam of this table, so L8 and D2 stay ray-based; everything else is within about 0.5 mm. Element types, `fl` signs, group and doublet ranges, legend tags (no APD, no aspheres) and the aperture readout were checked and left as they were.

Glass: L12 now carries the J-SFH2 (HIKARI) curve (catalog 1.86074 / 23.08, Δnd −0.0007), stated as a modern coordinate-compatible curve and not a period glass. L9 and L11 (1.59483 and 1.59508 / 35.6) now carry the nearest catalog flint FF5 (HOYA, 1.59270 / 35.45, Δnd −0.0021 and −0.0024, Δνd −0.15), which is inside the resolver tolerance; the labels state the offset and make no period identification. Stored n / ν are unchanged, so paraxial quantities are unchanged. Twelve of fourteen lens elements now resolve to a catalog dispersion curve. L6 (1.84131 / 43.3), L13 (1.44772 / 67.2) and the filter remain Unmatched: the nearest entries in the repo catalog and in the HOYA (including obsolete) and SUMITA vendor files are TAFD5 1.83500 / 42.98 and TAFD6 1.84750 / 43.03 for L6, and FC3 / FK3 1.46450 / 65.77 and FC1 1.47079 / 66.71 for L13, all outside tolerance. KF6 / E-CF6 (1.51742) matches the filter index to five digits, but no Abbe number is published and none was invented.

Misprint test for the unusual indices: each printed value appears identically in both of the patent's tables. Substituting plausible alternatives in the stored prescription moves the computed back focus away from the printed 38.77 mm (model 38.793 mm): L6 as 1.83500 gives 38.55 mm and as 1.80411 gives 37.35 mm; L13 as 1.46450 gives 36.66 mm (EFL 14.56 mm) and as 1.47069 gives 35.93 mm; L9 as 1.59270 gives 39.23 mm; L12 as 1.84666 gives 36.93 mm. The printed indices are therefore the values the design was computed with, not transcription or typesetting slips.

Name: Nikon's own history (NIKKOR — The Thousand and One Nights, Tale 86) refers to the lens as the "Nikkor Auto 15mm f/5.6", released 1973 and designed by Ikuo Mori; Tale 9 (13mm f/5.6) credits the same designer. The lens itself is engraved "NIKKOR-QD·C Auto 1:5.6 f=15mm" (QD = fourteen elements, ·C = multicoating; 14 elements / 12 groups, f/5.6–22, 0.3 m, built-in filters). The stored `NIKON NIKKOR-QD·C AUTO 15mm f/5.6` follows the house form of the corpus (`NIKON NIKKOR-N AUTO 28mm f/2`, `NIKON REFLEX-NIKKOR·C 500mm f/8`) and is kept. The patent's inventor is Tomowaki Takahashi, so the correlation caveat stays in the subtitle, header and analysis.

Metadata: `focalLengthDesign` is trimmed from 15.30900368087626 to 15.309, and `apertureDesign: 5.6` is added (the stop is calibrated to the patent's F/5.6). `maxFstop` 22, mount `nikon-f`, format `135-full-frame`, counts 14 / 12, assignee and year were confirmed. `apertureBlades` is not set: a seven-blade iris is reported by a collector reference only, not by a Nikon page read in this pass. `acceptsTeleconverters` is not set.

Open limits: no rim of this table is directly drawn in the patent; skew rays are not checked; the FF5 and J-SFH2 curves are stand-ins at the stated index offsets.
