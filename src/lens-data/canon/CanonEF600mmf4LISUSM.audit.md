# Audit Log - CANON EF 600mm f/4 L IS USM

Patent: US 6,115,188 A, Numerical Example 22 / Figure 85

## Historical audits prior to 2026-11-03

Condensed from the 2026-08-20, 2026-08-21, 2026-09-25 and 2026-10-04 sessions; the 2026-10-30 and 2026-10-31
entries below are kept in full.

- 2026-08-20, patent figure: `patents/US6115188.pdf` PDF p. 56, Figure 85, read at 600 dpi (rotated axis; audit:patent-figure
  with rows 0.15,0.39,0.69,0.76, `--rot90 --axis=0.578`). Reliable rims agreed with the model (L1b ≈ 57.3 vs 60.5–63.8 mm,
  L2 31.3 vs 33.0 mm, L3a 19.4 vs 20.0 mm); L1a ENV/RIM readings (72.9/65.6 vs 77.0 mm) disagreed and did not support a
  change; rear rows were label-contaminated and within ~18%. All semi-diameters retained. Example 22 prints d-line
  index/Abbe coordinates without suppliers; vendor-neutral labels kept. Display name checked; assignee normalized to
  `Canon Inc.`.
- 2026-08-21, follow-up: Figure 85 rims stayed within reading uncertainty; element tags became L1a/L1b/L1c/L2/L3a/L3b/L3c;
  inferred special-dispersion tags added at the two UD-correlated positions and the fluorite-coordinate position, with
  no invented dPgF. L2 then moved 18.829163964 mm imageward to the modeled 5.5 m state; L1/L3 fixed.
- 2026-09-25, MTF image-plane census: Numerical Example 22 (PDF pp. 78–79, cols. 32–33) checked R3–R29, all 15 powered
  Abbe values, infinity D12 = 45.86 / D15 = 98.91 and stop R16; all matched, no scaling or aspheres; the certificate does
  not amend Example 22. FL restored as a 2.00 mm, nd 1.516330, νd 64.4 plate with D29 = 12.00 and trailing
  D31+D32 = 64.77 + 39.01 = 103.78 mm across inactive FC. Independent EFL 585.327789123 mm (printed 585.20), air BFL
  116.605717247 mm, physical BFL 117.286743145 mm against the printed 117.78 mm: offset −0.493257 mm, no single misprint.
- 2026-10-04, FL drawn: FL moved from `rearPlates` to drawn surfaces 30–31 (element 16, `Plane-Parallel Plate`) with
  unchanged thickness, index and gaps, since a teleconverter mounts behind it. Its sd 17.5 mm is a ray-trace estimate
  (16.30 mm maximum height plus 5%, rounded up), not figure-audited. EFL, pupil, stop, image plane, half-fields and traced
  bundles unchanged; field coverage stayed 100% of the corner. Filter labelled S-BSL7 by index; Example 22 prints νd 64.4
  where Examples 1, 24 and 25 print 64.1, and the printed value is kept.

## 2026-10-30 — Scoped HG/FL configuration, source-reference and shoulder follow-up

### Coverage reused and source scope

- Reuse unchanged active-15 prescription/cap conclusions dated **2026-08-20/21** and the physical-filter/image-plane
  source audit dated **2026-09-25**. Preserve the **2026-10-04** drawn-FL addition date; it explicitly left FL shape
  unreviewed. This is one scoped reviewed lens entry for the current 17-medium configuration, with no extra reused-entry count.
- Reopen the integral HG restoration and changed FL configuration, a missing native air shoulder, source-reference/chemistry qualifications and
  current all-focus limitations. No fresh review claim for unchanged powered prescriptions is substituted for the earlier completed work.
- Original `patents/US6115188.pdf`: first page confirms US 6,115,188, September 5, 2000; Akihiro Nishio, Hideki Ogawa,
  Makoto Misaka; Canon. Numerical Example 22 spans PDF pages 78–79 / columns 32–33. Figure 85 is PDF page 56 /
  sheet 54; corresponding aberration Figures 89A–89D are PDF page 60 / sheet 58. The two-page certificate dated May 29, 2001 is PDF
  pages 82–83; it does not amend Example 22 or define a spectral reference.
- Native embedded pages are 2320 × 3408 one-bit at 300 ppi. Prior 600 dpi renders were upsampling. Current Figure 85
  uses a native 90° rotation only. First active vertex to R29 gives an axial scale about 5.1 px/mm. Vertical sizing
  is approximately 8% compressed relative to that axial scale; relative shoulder readings use retained cap anchors,
  with practical uncertainty ±0.8 mm plus independent schematic uncertainty. The powered-track calibration excludes HG; its plate height is checked separately. Labels, brackets, stop marks
  and inactive FC are excluded from optical-rim measurements.

### Restore integral tabulated HG

- Direct source R1/R2: 6.00 mm flat HG, N1 = 1.516330, ν1 = 64.1, followed by D2 = 1.50 mm air. Clause c-7
  describes protection/thermal-focus purposes and alternative integral front constructions; it does not describe the
  selected, explicitly tabulated HG as an optional, removable or accessory filter. The legacy omission is corrected.
- Prepend physical HG, shift element/medium IDs into source order 1–17 and count HG/FL in 17 elements / 13 groups,
  matching the established product-count correlation. All powered R/d, old caps, internal gaps/cams, stop and numeric
  controls remain. HG caps 77.0 mm are a native relative-outline estimate from the matching first powered blank;
  no numerical source aperture or opaque flat-face land is invented.
- Physical HG-to-IP track becomes 476.20 mm while first-powered-R3-to-IP stays 468.70 mm. The unchanged close cam
  now independently gives 5.500000 m physical conjugate (residual −1.53×10⁻⁹ mm), EFL 497.919055 mm and magnification
  magnitude 0.117790×. Existing closeFocusM is already 5.5 m; neither scalar nor cam is retuned. This coordinate
  consequence supports the retained reconstruction without claiming a source finite table.

### Shape, physical FL and retained aperture estimate

- Native R12 rear face has a short vertical outer stroke before its concave cap begins. Keep clear sd 45.0 mm and
  add outer rimExtensionSd 47.5 mm, conservatively anchored to its own S11 front cap. The source's compressed drawing
  supports the shoulder as a relative contour; no precise mechanical dimension or expanded clear aperture is claimed.
- Reuse other active-element, cemented-interface and concave-end constraints. Do not square bonded blocks, invent
  opaque interface lands, add resin wings or change the near-contact R6–R7 source gap. All prior powered R/d, caps, aspheres,
  stop/focus/aperture/group controls and existing gapSagFrac 0.96 remain numerically unchanged. No inferred cuts.
- Direct native FL table check: R30/R31 flat, D30 physical thickness 2.00 mm, N17 1.516330 and ν17 64.4. D29 is
  12.00 mm and D31+D32 is 64.77 + 39.01 = 103.78 mm after the filter with inactive FC omitted. All physical values remain;
  no t/n replacement of the plate is made. The source supplies no aperture column or FL clear radius.
- Retain FL sd 17.5 mm as an inferred cap. New 193-sample pupils across 21 focus positions and four fields (axis,
  half-format, corner and actual configured diagram field) reach a maximum passing FL radius 16.194553 mm. Its
  5% margin is 17.004281 mm, rounded up to the next 0.5 mm gives 17.5 mm. No otherwise passing sampled ray clips FL.
- Native FL is a plain taller rectangle, about 22 mm outer half-height at the axial scale. It does not resolve a
  separate optical cap or opaque flat-face land. Reject promoting that undimensioned blank to a clear aperture or
  adding a speculative opaque extension merely to force the silhouette. This drawing limitation remains explicit.

### Glass, source wavelength and historical identity

- Column 32 / PDF 78 defines Ni and νi as refractive index and Abbe number, without a wavelength. Other numerical
  definitions and the included certificate add no explicit prescription reference. Aberration d-line labels are
  contextual evidence, not a coordinate definition. Retain the current d tracing convention as explicitly approximate;
  this does not assert that conventional d inference is wrong.
- Preserve all 17 numeric source pairs, including literal FL 1.516330/64.4. All 17 media now have indexReferenceNote,
  Unmatched labels and no active catalog curves. Prior code/class names remain only as conditional comparisons,
  including the index-based S-BSL7 filter comparison with catalog ν 64.14. Do not substitute 64.14 for source 64.4.
- No per-lens C/F/g, relative partial or APD values are published or removed. Three existing special-material tags
  remain production-inferred positions, with their actual 2026-08-21 date and explicit lack of source APD/reference
  evidence. They do not establish source chemistry or active spectral curves. All historical suppliers, melts,
  chemistry, cement, coatings and manufacturing identities remain unresolved.
- Synchronize all 17 element glass labels, analysis first lines/table and spectral narrative. The source supports
  numeric index/dispersion contrasts, not categorical lanthanum/dense-flint chemistry. Production fluorite/UD
  correlation and source identification remain separate conclusions.

### Existing source discrepancy and current runtime

- Formalize the retained **2026-09-25** image-distance discrepancy as unresolved source.errata. Printed physical
  R29-to-IP distance is 117.78 mm; literal arrays give paraxial physical BFL 117.286743145 mm, a retained defocus
  of −0.493256855 mm. No single supported source misprint is isolated; preserve every printed number. This is a
  structured qualification, not a numeric source correction.
- Surface/image-circle checks pass, zero undersized; infinity aperture census and full-frame corner check pass.
  Derived iris radius 20.046531 mm remains. Real iris-rim working f-number at infinity 4.183113 is a separate metric
  from the paraxial design 4.12. Across 21 focus × seven presets, 129 calls trace and 18 vignette at retained S6;
  wide-open clipping starts focus 0.15. Baseline/candidate working statuses remain identical; largest traced-value difference 5.68×10⁻⁸ follows the restored front-coordinate propagation, with no iris/cam retune.
- The 193-sample pupil census over 84 focus/field states has valid aimed chiefs throughout. Axial endpoints 193/193 at infinity
  and 145/193 close; format-corner endpoints 113/193 at infinity and 109/193 close. Baseline/candidate counts are identical. Filter
  clearance does not certify complete upstream aperture clearance or production illumination.
- Restored HG gives the unchanged 5.5 m endpoint near-zero conjugate residual, as recorded above. Linear L2 motion
  gives sampled intermediate defocus −2.783002 mm at focus 0.5 / display 11 m. No finite source table, compensator cam or
  production transverse-IS displacement is invented. Existing numeric focus/IS controls remain.
- Actual generated SVG versus native Figure 85 checks all 17 media, physical FL and cemented connections. Across 21
  focus states, 357 finite connected closed paths have zero hidden renderer trim. No slope/gap/cap guard changes.
- Source fidelity, sampled runtime clearance and production correlation remain separate. Full repository gates are
  coordinated in the three-review batch; no per-lens tests or tolerance changes are introduced.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 8,700 passed, 2,880 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 169/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  5.500000000 |           5.500000 | 169 / 150 / 111                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 22.999789% at zoom 0, focus 0.05, aberration control 0: Gaussian 84.700232540 m versus label 110.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 16 of 17 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

16 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Front source plate HG | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| L1a front positive | 1.496999 / 81.5 | S-FPL51 | +0.000000 | +0.046 |
| L1b positive | 1.496999 / 81.5 | S-FPL51 | +0.000000 | +0.046 |
| L1b negative | 1.834807 / 42.7 | TAFD5G | -0.000000 | +0.021 |
| L1c positive (fluorite correlation) | 1.43387 / 95.1 | CaF2 | -0.000021 | -0.104 |
| L1c negative meniscus | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| L2 positive | 1.805181 / 25.4 | S-TIH6 | -0.000000 | +0.025 |
| L2 negative | 1.834807 / 42.7 | TAFD5G | -0.000000 | +0.021 |
| L3a negative | 1.846658 / 23.9 | PBH53 | -0.000000 | -0.014 |
| L3a positive | 1.603112 / 60.6 | N-SK14 | -0.000002 | -0.003 |
| L3b positive | 1.846658 / 23.9 | PBH53 | -0.000000 | -0.014 |
| L3b cemented negative | 1.603112 / 60.6 | N-SK14 | -0.000002 | -0.003 |
| L3b negative singlet | 1.804 / 46.6 | H-ZLaF50D | -0.000000 | -0.025 |
| L3c positive singlet | 1.72 / 43.7 | S-LAM52 | -0.000000 | -0.010 |
| L3c cemented positive | 1.7495 / 35 | H-LaF4 | +0.000000 | -0.011 |
| L3c cemented negative | 1.846658 / 23.9 | PBH53 | -0.000000 | -0.014 |

The other medium has no exact catalog match and stays `Unmatched`: Drop-in filter FL (1.51633 / 64.4).

## 2026-11-03 — Image-plane consistency (re-solve)

Back focus first, per LENS_DATA_SPEC Image-Plane Consistency: the fixed final gap is solved at infinity, the
reconstructed close row carries it, then L2 is re-solved for that row's 5.5 m target.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S31 d (FL rear → image; printed D31+D32) | 103.78 mm | 103.286743 mm | Paraxial infinity focus |
| D12 close row (L2 front gap) | 64.689164 mm | 64.829647 mm | Reconstructed row re-solved for 5.5 m object to image |
| D15 close row (L2 rear gap) | 80.080836 mm | 79.940353 mm | Same; D12+D15 stays 144.77 mm |
| Infinity D12 / D15 | 45.86 / 98.91 mm | unchanged | Published source row |
| `source.errata` unresolved image-distance entry | present | removed | Its only subject was this residual |

- Residual: −0.493257 mm (24.7 depths at f/4.12) before, 0 after. EFL 585.327789 mm unchanged (printed f 585.20 mm).
  L2 travel 18.829164 → 18.969647 mm. HG-to-image track 476.20 → 475.706743 mm. `closeFocusM` stays 5.5 m (close row
  5.500000 m object to image); close-state EFL 497.919055 → 497.356647 mm; magnification −0.117790 → −0.117628.
- Evidence: Numerical Example 22 as audited 2026-09-25 (`patents/US6115188.pdf`, PDF pp. 78–79). Real-ray axial best
  focus sat 0.464 mm ahead of the printed plane, so that plane was not a best-focus plane. No single-value misprint is
  isolated: an L2-only re-solve would move EFL to 586.02 mm (further from 585.20), a final-gap solve keeps 585.33 mm,
  and a 0.63 mm shorter D15 gives 585.10 mm. Sibling Example 25 focuses within 0.017 mm, so this is example-specific.
- Linear L2 motion at focus 0.5 now images 10.24 m (10.18 m before). Aperture, image-circle, field-coverage and
  surface-probe audits are unchanged.

Follow-ups: none.
