# Audit Log — VILTROX AF 85mm f/1.4 PRO Z

Patent: CN 120686438 A, Example 1, Figure 1; Tables 1–4 (publication pp. 11–13).

## 2026-10-19 — Deployment validation and wording pass

Source re-read: the publication has no text layer, so Tables 1–4 were read from 200 dpi page renders. All 27 surface rows (R, d, nd, νd), the stop at row 12, the four cemented pairs and the infinity variable gaps D1 = 17.456 mm and D2 = 3.501 mm match the data file. There are no transcription mismatches.

Departures from the literal example:

- All eight S16/S17 A4–A10 terms are fitted replacements, with K = 0 kept. The printed values are unusable: S16 A10 = 2.818e-2 gives a sag of order 10¹⁰ mm at h = 16 mm. The original filing CN 202410294011.9 (p. 13) prints the same values, and the S17 table is headed "Example 3". The fitted terms lie within 2–22% of Example 3's printed S16/S17 coefficients.
- The rear-plate material is moved from the 1 mm S29 row to the 2.5 mm S28 row, as Examples 2 and 3 print it. The paraxial focus residual is 0.011 mm with the shift and 0.52 mm with the literal row.
- The near-focus gaps (D1 = 5.96 mm, D2 = 14.994 mm) are not modelled.
- `nominalFNumber` is 1.4702, which keeps the entrance pupil implied by 86.5 mm at F/1.47.

Patent vs model: EFL 86.5 vs 86.510 mm; F/1.47 vs 1.4702; half-field 14.02° vs 13.94° at 21.65 mm. The printed near gaps give a paraxial EFL of 78.79 mm (patent 78.8 mm), an object about 802 mm from the image and a magnification of 0.127×. The group ratios are F1/F 2.28, F2/F 0.76 and F3/F −5.20, all inside the patent's conditions. `audit:surface` reports OK, `audit:image-circle` reports 0 undersized surfaces, and field coverage is 100%. Real-ray clearance shows no axial clipping or chief-ray blocking.

Maker comparison: Viltrox lists 15/11 with "3 ED, 9 HR, 1 UA", 0.79 m and 0.13×. Example 1 has three elements with νd ≥ 68 (L2–L4), nine with nd ≥ 1.80 and one double-sided asphere. Example 3 has 12 groups. No public cross-section diagram was found, so the ED positions are not tagged.

Fields changed in this pass: header comment, `subtitle`, `specs`, all element `role`s, the focus description and the G2 group label. The analysis was rewritten to remove production-process material, and the focus, asphere, rear-plate and scope sections were restated in plain terms. The key, `visible` and the file names were set before this pass.

Open: close focus stays disabled until the fitted aspheres or an authoritative corrected coefficient table reproduce the patent's close-focus curves. `lensMounts` lists only Nikon Z, although the Sony E version shares the optics.
