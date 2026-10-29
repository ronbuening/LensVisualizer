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
