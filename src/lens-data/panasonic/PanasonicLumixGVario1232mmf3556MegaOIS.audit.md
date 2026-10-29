# Audit Log — Panasonic Lumix G Vario 12-32mm f/3.5-5.6 ASPH. MEGA O.I.S.

Patent: US 2015/0097989 A1, Numerical Example 2

## Source and identity

Selected source is original US20150097989A1 Numerical Example2, PDFp16 Tables4–6, equation/index definitionsp14, motionp11, arrangement/aberrationsp4–5. JP6355076B2 original corroborates the numerical table. 2013 Panasonic VQT5D06 H-FS12032 manual anchors the generation; the manufacturer construction is corroborative, not exact material/curvature evidence. Prior E1/E2 factory-selection hold remains (closed 2026-10-29: Example 2 kept as a qualified production correlation, see the last section).

Independent source review: `independent_source_review/20261026T120400Z/review.json`. All17 surfaces, six aspheres, source native gaps/FNO/field/BF, stop/contact/plate convention independently inspected. An initial low-resolution JP group-table concern was resolved by a fresh250dpi render; **no JP group-table erratum exists**.

## Source discrepancies and interpretive limits

- The source's generic geometric-mean middle convention would give19.5802349322mm; E2 Table6 says19.5303mm. The table label and native prescription remain literal.
- Fixed-G4 prose versus BF14.19915/14.19920/14.19922mm is unresolved;0.00007mm span is not explained by the BF column's standalone rounding interval. Native BF remains unchanged.
- Native image planes are0.000676/0.001082/0.001780mm before the independently reconstructed paraxial plane. A conditional local full-parameter printed-precision sensitivity envelope contains them, but does not prove the source's rounding intent or justify plane correction.
- The source describes G3 as an object-side-convex locus, not simply as monotoneobjectward. The inferred cam's d15 late retreat0.5885908566mm is compatible with the broad bowed-locus description but remains unresolved against a stronger throughout-increasing reading of the following gap sentence. Independent additive note `independent_source_review/20261026T122100Z_motion/motion_interpretation_note.md` is not a waiver or source certification.

## Literal construction

Eight powered bodies/seven components. S7 is the diaphragm,1mm beforeS8. S11/S12 are separate curved boundaries of0.010mm adhesive nd1.56732,νd42.8. Current nd-only undrawn media preserve d-line propagation and necessarily block C/d/F/photopic MTF. No fictitious ninth drawn body, no omitted adhesive, no invented camera plates, no best-focus plane substitution, no decentered OIS or finite-focus travel.

## Rims and geometry

No numerical clear apertures are published. Fig3(a) optical extent gives the initial/final inference `[10,8,8,8,8,8,STOP,5,5,4.6,4.6,4.6,4.6,6,6,10.2,10.2]`mm. Approximate10px/mm figure scale is cross-checked against source totaltrack and rear-lens thickness. L1 rear8mm excludes the mechanical flange; a10mm sphere on R9.322 would be non-real. See retained original figure crop and `notes/figure_rim_inference_v001.md`.

The same rims survive native and finalfullrange geometry/ray checks: no raise, no source distortion, no gap-sag override. The1935-state geometry audit finds0hidden trim,0.539697mm minimum air clearance and0.895204maximum non-stop intrusion under0.90. The0.010mm minimum optical-medium thickness is the adhesive, not a missing powered-body thickness.

## Zoom/focus controls

Literal3-anchor interpolation adds1.66588mm axial error. Retained bounded trials explore source-relative alternatives; G1/G3 curvature, unwanted reversals and solution-branch jumps are not erased. The selected `source_cam_study_v008_track_quadraticf.json` uses source-anchor quadratic totaltrack/EFL, solvesd6/d13 to the interpolated native residual, and retains all native constants. The first tested passing density is33(3/5/9/17 fail the same scalar reference scale). Only0/16/32are source-published. Dense6401-state errors: added0.008755764mm,total0.006997788mm,actualEFLreadout0.005825664mm. G1 has one reversal,G2 is objectward; the G3return remains explicitly inferred/ambiguous. The chosen zoom parameter also gives two negative G3 second differences (minimum approximately −0.0034933mm); an overall bowed locus is not strict local convexity everywhere. No factory cam claim.

No finite numerical anchors exist. Focus rows duplicate endpoints, no finite conjugates are certified. Ninety runtime hashes confirm geometry invariance;80nonzero-focus MTF requests reject. The pre-existing rawfocusURL Summary label may still be finite despite fixedinfinity geometry; actual viewer test remains owed (closed 2026-10-29: page viewed in the local viewer; focus panel reads "Not modeled"). Equivalent infinity-plane conjugate diagnostics are nonpositive in884/6401states, not valid finite states.

## Rays and MTF

Final exact-iris targets:10065requested,9917transmitted,147physicalclips,1unlaunched,0launchedfailures. All55chiefs and sampled on-axis pupil targets pass. Clips occur at1,8A,10; the one unlaunched wide-corner outer target remains separate. SourceY10.815mm and canonical10.82mm remain distinct.

Reference MTF: 165 field cases converge across 11 zoom samples: 110 design-plane fields and 55 best-axial diagnostic fields. The latter are not extra source-plane passes. Forty-four CDF/photopic requests are guarded, not optical passes. Native source-edgeMTF40 S/T:.611/.331,.349/.418,.704/.546. No claim beyond sampled settings or source certainty. See complete raw receipts and hash bindings rather than replacing weak values by convergence labels.

## Independent final model review and source-only rebuild

The independent model review independently reconstructs all 33 selected gap controls within 5.8e−14 mm and repeats the 6,401-state scalar screen. Its separate source-only reconstruction reproduces the literal table, selected study, controls, model JSON and final TypeScript byte-exactly. Fresh runtime checks cover 129 full-open zoom states with 129 radial samples per adjacency, 48 raw-focus geometry states, 42 finite guards, 12 spectral guards, six native source/canonical chiefs and five physical-stop axial marginals. Two fresh reference design-plane MTF edge fields reproduce the stored arrays exactly. The complete worker ray/MTF matrices were independently reduced, **not rerun in full**.

The worker's source-only rebuild additionally reproduces both prose files from explicit preserved author templates and the additive source-audit queue row. The proof is `validation/source_only_rebuild_receipt.json`; templates are not claimed to derive analysis prose automatically from the patent.

## Remaining gates

The combined catalog suite, actual browser viewer and final delivery remain separate pending items (closed 2026-10-29: the lens is integrated in the repository; the deployment validation and the page view are recorded in the next section). This audit is not a finished-package declaration. No engine/UI/schema feature, dependency install, security change, public repository push or production deployment is part of the work.

## 2026-10-29 — Deployment validation and wording pass

Renamed before this pass from the package's "Related Example 2" key, file name and lens name to the production
lens's. The independent check re-read US 2015/0097989 A1 Numerical Example 2 (PDF p. 16, Tables 4–6): all 17 surface
rows (R, d, nd, νd, including the diaphragm S7 1.000 mm ahead of L4 and the 0.010 mm adhesive S11, nd 1.56732,
νd 42.8, which ¶0086 prints), the 26 non-zero coefficients on the six aspheric surfaces 3, 4, 8, 9, 14 and 15
(patent κ = K) and the 12 variable-gap values (d6, d13, d15, BF at three positions) match the data file with no
mismatch. JP 6355076 B2 agrees. In this pass the Table 6 values quoted in the analysis (half view angles, image height,
BF, d15, group and element focal lengths) and ¶0073, ¶0085–¶0091 and ¶0100–¶0102 were re-read from the PDF text.

Patent versus model at wide / middle / tele: EFL 12.4800 / 19.5303 / 30.7200 mm printed, 12.4803 / 19.5307 /
30.7208 mm traced; total length 65.3658 / 63.3359 / 63.6079 mm printed and reproduced; F/3.62286 / 4.70493 / 5.83562
printed, F/3.623 / 4.705 / 5.836 from the per-station stop (radius 4.3139 / 4.0630 / 4.0465 mm); printed BF 14.19915 /
14.19920 / 14.19922 mm against a paraxial back focus 0.0007 / 0.0011 / 0.0018 mm longer, with the printed BF kept.
All eight element focal lengths match Table 6. Condition (1) recomputes to 0.2524 (printed 0.252) and condition (2)
to 8.33 / 22.30 = 0.374 (printed 0.374); the independent check also confirmed condition (6), 4.334e-4. The 30
interpolated stations (published: false) follow quadratics in total length and focal length through the printed
positions; linear interpolation of the printed rows would defocus the intermediate positions by up to 1.66 mm. In the
model G1 moves on a path convex to the image, G2 moves monotonically toward the object, and G3 moves toward the object
and returns 0.59 mm (d15 peaks at 8.914 mm near 24.6 mm), matching the paths ¶0090 describes.

Production comparison: Panasonic's manual (VQT5D06) and product page list 8 elements / 7 groups, 3 aspherical elements
and 1 ED element, 12–32 mm f/3.5–5.6, 84–37°, 70 g, MEGA O.I.S.; the maker's construction drawing places the aspheres
at L2, L4 and L7 and the ED element at L6, cemented to L5, as in Examples 1 and 2. Imaging Resource describes the 4th and
5th groups (L4 and L5/L6, the patent's G2) as the stabilizing unit. Example 3 has four aspherical elements (L8 too) and a
34.38 mm tele end. Example 2's 30.72 mm tele end (4 % short of 32 mm) fits the gap of Panasonic's other zoom patents in
the catalog (12–60 mm: 57.78 mm; 100–300 mm: 290.31 mm) better than Example 1's 28.80 mm (10 % short). The priority
date, 2013-10-07, is ten days before the lens was announced with the GM1. Association: qualified production correlation.
The drawing comparison is the independent check's; it was not re-viewed in this pass. The check also found corner
vignetting of about 31 % at S17 at the wide end from the Fig. 3 rims, kept as drawn.

Source errata: the three `source.errata` entries were removed, since none records an inconsistency inside the printed
prescription. (1) ¶0073 defines the middle position as √(fW·fT) = 19.58 mm while Table 6 prints 19.5303 mm; the table
is self-consistent (the prescription traces to 19.5307 mm) and the paragraph is a nominal definition. (2) G4 is fixed
(¶0090) while the printed BF varies by 0.00007 mm; that is printing-level noise and the values are kept as printed.
(3) The third entry described this file's own interpolated zoom path (the late d15 return), not the patent, and that
path agrees with ¶0090. Items (1) and (2) are noted in the data-file header.

Fields changed in this pass. Data file: header comment rewritten in plain terms with the same facts; `subtitle`
→ "US 2015/0097989 A1, Example 2 — qualified production correlation"; `catalog.specs` → 8 ELEMENTS / 7 GROUPS,
DESIGN f = 12.48–30.72 mm, DESIGN F/3.62–5.84, 6 ASPHERICAL SURFACES / 3 ELEMENTS, 1 ED ELEMENT; `source.errata`
removed; element `role` text for L1–L8 (was the bare group name); the adhesive medium `name`; `focus.description`;
doublet text "L5+L6". Analysis: identification rewritten around the Example 2 rationale; glass lines now give the
catalog-equivalent names; the zoom-interpolation and quantitative-check sections replaced by a short "Zoom Path and
Model Limitations" section; process detail (sample counts, guard counts, review gates) removed. Optics unchanged:
EFL, F-number, half field, stop radius, back focus and focus keyframes from the engine are identical before and after.

Open: none.

## 2026-10-29 — Semi-diameter pass against the patent figure

Source: US 2015/0097989 A1, PDF page 4 (Sheet 3 of 7), Fig. 3, which ¶0065 names as the infinity-focus arrangement
of Embodiment 2 (Numerical Example 2); panel (a) is the wide end, (b) the middle, (c) the tele end. Fig. 1 (Example 1)
was not used. The page is a 300 dpi bitonal scan and was measured at 300 dpi.

Scale. In panel (a) the vertex crossings fall at x = 712 px (S1), 1655.5 px (S17) and 1917.5 px (image plane S).
S1 to the image plane is 1205.5 px for the printed 65.3658 mm overall length, 18.44 px/mm (54.2 µm/px); S1 to S17
gives 943.5 px for 51.167 mm (18.44 px/mm) and S3 to S16 763 px for 41.347 mm (18.45 px/mm). Every other vertex
crossing lands within 1–2 px of its prescription position. Panels (b) and (c) are drawn at the same scale (S1 to
image 1169 px for 63.3359 mm and 1173 px for 63.6079 mm, 18.46 and 18.44 px/mm). Rims do not change with zoom, and
panels (b) and (c) carry no label or asterisk leader lines, so rims were read on both sides of the axis in those two
panels and cross-checked on the top side of (a). The automatic figure screen on panel (a) found 54.14 µm/px, a median
figure/data ratio of 1.018 and shape ratios of 0.96–1.01 (its L2 envelope reads high on the asterisk leaders; its rim
reading is 7.85 mm).

| Surfaces | Element | Stored sd (mm) | Fig. 3 rim, px from axis | Fig. 3 rim (mm) | Figure / stored | Decision |
|---|---|---|---|---|---|---|
| 1 | L1 front | 10 | 182–183 | 9.9 | 0.99 | kept |
| 2 | L1 rear | 8 | 146–147 (foot of the flange step) | 7.9–8.0 | 0.99 | kept |
| 3A, 4A | L2 | 8 | 143–145 | 7.8 | 0.97 | kept |
| 5, 6 | L3 | 8 | 141–143 | 7.7 | 0.96 | kept |
| 8A, 9A | L4 | 5 | 93–95 | 5.1 | 1.02 | kept |
| 10, 11, 12, 13 | L5 + L6 | 4.6 | 82–86 | 4.5–4.7 | 0.98 | kept |
| 14A, 15A | L7 | 6 | 110–113 | 6.0–6.1 | 1.01 | kept |
| 16, 17 | L8 | 10.2 | 186–190 | 10.1–10.3 | 1.00 | kept |

L1 is drawn with a rectangular flange: the flat top runs at 182–183 px from the front rim back to x ≈ 850 px, where a
vertical step drops to 146–147 px and meets the R 9.322 rear surface. The rear optical rim is the foot of that step,
7.9–8.0 mm, which confirms the authored 8 mm. L2 and L7 are drawn flat-topped from the front-surface rim to the
rear-surface rim, so both faces keep one value; the cemented L5 + L6 is drawn as one flat top at 82–86 px. Every
rim is within 4 % of the stored value, inside measurement noise, so no `sd` was changed. The STO is engine-sized and
was not touched; the short stop bars Fig. 3 draws at about 5.5 mm are the diaphragm marker, not an opening.

Clearance, unchanged by this pass. The image-circle check reports no undersized surface and the surface validator
reports no error. The traced corner chief ray reaches 10.82 mm at all 33 zoom stations (44.9° at wide, 19.2° at
tele). The exact meridional trace at the printed 10.815 mm image height, over all 33 stations, finds no clipped axial
marginal and no blocked chief ray; the largest axial marginal heights against the rim are 4.54 mm at 8A (rim 5) and
3.92 mm at S10 (rim 4.6), and the largest chief-ray heights are 9.19 mm at S17 (rim 10.2), 8.79 mm at S1 (rim 10)
and 7.14 mm at S2 (rim 8). Full-field bundle vignetting at the worst station is 7 % at 8A/9A, 20–22 % at L5 + L6,
25 % at 15A, 21 % at S16 and 31 % at S17; it is kept, because those rims match the drawing. The engine's wide-open
transmission at the wide end is 100 % to 21°, 93 % at 38.9° and 74 % at 44.9°.

Aspheric turnover. The scan of 3A shows a slope sign change between about 6.0 and 6.8 mm where the slope stays
within 0.1° of zero (sag −0.0625 mm): a shallow sag extremum, not divergence. The full-field chief ray to the printed
image height crosses 3A at 6.60–6.63 mm and the full-field bundle reaches 7.06 mm, and Fig. 3 draws L2 out to
7.8 mm, so the 8 mm rim stays. 4A, 8A, 9A, 14A and 15A show no slope sign change within their rims. No aspheric rim
changed, so the analysis prose needed no recomputed departures.

Engine readouts are identical before and after: half-field 38.40° at the wide end, F/3.62286, stop radius 4.3139 mm.
That half-field is the engine's paraxial estimate, limited by S2; the real chief ray at the printed 44.92° crosses S2
at 7.12 mm, inside the 8 mm rim, and the traced field reaches the corner, so the estimate is no reason to widen S2
past the drawing.

The local page was viewed at 12.48 mm (infinity, and at the focus-slider end, which is the same infinity-only
geometry), 19.53 mm, 24.6 mm and 30.72 mm. The proportions match panels (a)–(c): L1 and L8 the largest, L2 and L3
about 0.78 of L1, L4 and L5 + L6 the smallest, L7 about 0.6 of L1. The renderer draws L1's 10 mm to 8 mm change as a
slanted rim edge where the figure draws a rectangular flange step. No maker construction image was viewed in this
pass; the comparison with Panasonic's drawing is the one recorded in the deployment-validation section above.

Changed: the data-file header's semi-diameter note only. Open: none.

## 2026-10-29 — Second review: diagram, labels and movement

Compared: the local page at 12.48, 19.53, 24.6 and 30.72 mm (infinity, and the focus-slider end), the group-movement
overlay at the wide and tele ends, the focus overlay, and the element inspector for L1, L2, L4, L6 and L7, against
US 2015/0097989 A1 Fig. 3 (PDF p. 4, panels (a)–(c)), Tables 4–6 (PDF p. 16) and ¶0073–¶0074, ¶0085–¶0091 and
¶0099–¶0102. No maker image was viewed; the deployment-validation section above records Panasonic's drawing as
8 elements in 7 groups with aspheres on L2, L4 and L7 and the ED element L6 cemented to L5, which is Fig. 3's layout.

Silhouette, re-measured independently. Panel (b) was profiled on both sides of the axis (row 2096 px at 300 dpi) and
panel (c) on its lower side (row 2538 px); neither carries leader lines. Scale from panel (b): S1 vertex at x = 751 px,
image line at x = 1921 px, 1170 px for the 63.3359 mm middle-position overall length, 18.47 px/mm.

| Element | Stored sd (mm) | Fig. 3 rim, px | Fig. 3 rim (mm) | Figure / stored |
|---|---|---|---|---|
| L1 front | 10 | 180–183 | 9.8–9.9 | 0.99 |
| L1 rear (foot of the flange step) | 8 | 146–148 | 7.9–8.0 | 0.99 |
| L2 | 8 | 143–145 | 7.7–7.9 | 0.97 |
| L3 | 8 | 141–142 | 7.6–7.7 | 0.96 |
| L4 | 5 | 94 | 5.1 | 1.02 |
| L5 + L6 | 4.6 | 83–86 | 4.5–4.7 | 0.99 |
| L7 | 6 | 110–113 | 6.0–6.1 | 1.01 |
| L8 | 10.2 | 186–189 | 10.1–10.2 | 0.99 |

Every rim is within 4 % of the stored value and the drawn order of heights holds (L8 ≥ L1 front > L1 rear ≈ L2 ≈ L3
> L7 > L4 > L5 + L6). L2 is drawn 1–2 px taller than L3 while both store 8 mm; that is inside the noise and was not
changed. L2, L4, L5 + L6 and L7 render as flat-topped blocks with equal face heights, as drawn. No `sd` changed.

The one visible difference is L1. Fig. 3 draws its front face to 9.9 mm, a flat edge back to the plane of the rear
rim, and a step square to the axis down to 7.9–8.0 mm, where the R 9.322 rear face begins (in panel (b) the step is
the vertical run at x = 850 px from 147 to 183 px; in panel (c) 146 to 182 px). The site joins the 10 mm front rim to
the 8 mm rear rim with one slanted edge. A semi-diameter alone cannot draw the step: S2 cannot exceed |R| =
9.322 mm, a bare S2 rim above 8 mm carries the cap toward L2 (its sag is 8.68 mm at 9.3 mm, against the 5.15 mm
gap), and squaring L1 by lowering S1 would take the front at least 0.6 mm below the drawn 9.9 mm. The step is a
rim-cut land (LENS_DATA_SPEC.md, Rim cuts), which this review may not author. A trial on a scratch copy with S2 at
`sd: 9.3` and `rimCutDepthMm: 4.54` (the rear face's sag at 8.000 mm is 4.5366 mm, rounded up, so the cut radius is
8.002 mm and the traced rim is unchanged) gave: surface validator OK, including the inferred-cut beam check; the
aperture audit unchanged at 33 of 33 stations within 3 % with no rim, trace or iris rows; image circle and traced
corner coverage unchanged; engine half-field 38.397° → 38.404° at the wide end; wide-open transmission identical
(74.2 % at 44.9°). It would draw the land from 8.0 to 9.3 mm and leave only a 0.7 mm slope along the edge from the
10 mm front rim. It was handed to the coordinator and is not applied here.

Labels, markers and tags.

| Field | Before | After | Evidence |
|---|---|---|---|
| L2 `type` | Biconcave Negative | Biconcave Negative (2× Asph) | both faces aspherical (¶0085; Table 5 surfaces 3 and 4) |
| L4 `type` | Positive Meniscus | Positive Meniscus (2× Asph) | both faces aspherical (¶0086; surfaces 8 and 9) |
| L7 `type` | Biconcave Negative | Biconcave Negative (2× Asph) | both faces aspherical (¶0088; surfaces 14 and 15) |

Found correct. Element names L1–L8 are Fig. 3's. Every type agrees with the signs of R and with ¶0085–¶0089
(negative meniscus convex to the object, biconcave, positive meniscus convex to the object; positive meniscus convex
to the object, negative meniscus convex to the object, biconvex; biconcave; biconvex). The `A` suffix and an
`asphere` entry sit on surfaces 3, 4, 8, 9, 14 and 15 only, the faces Fig. 3 marks with asterisks. The stop sits
between S6 and S8, 1.000 mm ahead of L4 as Table 4's diaphragm S7, and is drawn there. Group brackets G1 (S1–S6), G2
(STO–S13), G3 (S14–S15) and G4 (S16–S17) match Fig. 3's G1(−) to G4(+); Fig. 3's G2 bracket starts at the diaphragm.
The cemented bracket L5+L6 spans S10–S13, so it covers both elements and the undrawn 0.010 mm adhesive S11. L6's
inferred ED tag is right: the patent names no anomalous-dispersion or special glass (condition (6) uses νd only), and
Panasonic marks L6 as its ED element. The role texts agree with ¶0087, ¶0090, ¶0091, ¶0100 and ¶0101. The gap labels
d6, d13, d15 and BF are Table 6's. The inspector shows the new type strings for L2, L4 and L7.

Zoom movement, from the 33 stations (group vertex distances from the image, mm; G4 fixed at 18.069):

| Group | Wide 12.48 | Middle 19.53 | Tele 30.72 | Model path | Patent |
|---|---|---|---|---|---|
| G1 (S1) | 65.366 | 63.336 | 63.608 | toward the image to 63.168 at 23.24 mm, then back 0.44 mm | convex to the image (¶0090); Fig. 3 arrow right, then nearly vertical |
| G2 (STO) | 37.793 | 45.093 | 52.534 | toward the object at every station, 14.74 mm | toward the object |
| G3 (S14) | 23.495 | 27.145 | 27.195 | toward the object to 27.784 at 24.6 mm, then back 0.59 mm | convex to the object; Fig. 3 arrow left, then nearly vertical |

The three printed rows reproduce Table 6. `zoomPositions` ascend from 12.48 to 30.72 mm and every gap array lists
its stations in the same order (published at indices 0, 16 and 32); the slider ends read 12.48 and 30.72 mm. The
movement overlay shows G1 moving about 1.8 mm toward the image, G2 14.7 mm and G3 3.7 mm toward the object, and G4
still, matching the arrows in Fig. 3 (G1 about 18 px, G2 130 px and G3 33 px at 150 dpi). Focus: Fig. 3's arrow under
G3 points to the image, as ¶0091 states. No close-focus spacings are printed, both entries of every gap pair repeat
the infinity value, the focus overlay offers no focus travel, and the focus slider reads "Not modeled". The focus
description says so.

Engine readouts before and after are identical: half-field 38.40° at the wide end, F/3.62286, stop radius 4.3139 mm.
The exact trace at the printed 10.815 mm image height over all 33 stations clips no axial marginal ray and blocks no
chief ray, the image-circle check finds no undersized surface, and the traced corner reaches 10.82 mm at every
station.

Open: the L1 land above (coordinator). G3's 0.59 mm return between 24.6 mm and the tele end comes from the
interpolation; Fig. 3 joins its three positions with straight lines (¶0073) and cannot confirm or rule it out. The
patent identifies no glass for L2, L4 or L7: Table 4 prints only nd and νd, and ¶0102 calls G3 resin only in
Embodiments 1 and 3.

Coordinator follow-up (same day): S2 now carries the land Fig. 3 draws behind L1's rear face: `sd` 9.3 mm with
`rimCutDepthMm` 4.54, which puts the cut radius at 8.002 mm, the old 8 mm optical rim, so tracing is unchanged
(engine half-field 38.397° → 38.404°, F/3.62286, vignetting identical). The figure draws the cap ending near
7.9–8.0 mm on a 9.9 mm edge (panel (b), 18.47 px/mm), q ≈ 0.80–0.81; the land is 1.3 mm. The surface validator,
including the inferred-cut beam check, and the aperture, image-circle and field-coverage audits pass.
