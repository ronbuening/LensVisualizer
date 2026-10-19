# Audit Log — VILTROX AF 85mm f/1.4 PRO (FE and Z)

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

Open: close focus stays disabled until the fitted aspheres or an authoritative corrected coefficient table reproduce the patent's close-focus curves. The mount gap is closed: `lensMounts` now lists Sony E and Nikon Z (see the mount and glass update below).

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/CN120686438A.pdf`, publication p. 21, Figure 1 (Example 1, infinity focus). The page is a 300 dpi bilevel scan; all readings were taken at 300 dpi. Front page: CN 120686438 A, published 2025-09-23; application 202410294011.9 filed 2024-03-14; applicant Shenzhen Viltrox Technology Co., Ltd.; inventors Liu Ruijun and Chen Baofeng. Figure 1 labels L01–L15 in 11 groups, as the data file has them.

Scale: the axis lies at row 919.5. All 26 near-axis vertex crossings fall within 2 px of their prescription positions. S1 → S27 spans 1432 px for 104.512 mm, so the scale is 0.07298 mm/px. S1 → stop and stop → S27 give 0.07298 and 0.07299 mm/px. Figure 1 is not anamorphic. Fits of the S1 (R 88.615) and S11 (R 28.856) arcs at four heights give a vertical scale of 0.0727–0.0733 mm/px. Rim heights are half the distance between the centres of the top and bottom edge lines.

| Surface | Stored sd | Figure 1 | Ratio | Decision |
|---|---|---|---|---|
| 1 / 2 (L01) | 29.80 | 29.67 | 1.00 | kept |
| 3 / 4 (L02) | 28.51 | 28.25 | 0.99 | kept |
| 5 / 6 (L03) | 27.05 | 26.81 | 0.99 | kept |
| 7 / 8 (L04+L05) | 23.49 | 23.29 | 0.99 | kept |
| 9 (L05 rear) | 23.49 | curve ends at 20.1, then a flat annulus to 23.3 | 0.86 | **20.4** |
| 10 (L06 front) | 20.39 | 20.18 | 0.99 | kept (axial marginal ray 20.19) |
| 11 (L06 rear) | 20.39 | curve ends at 18.0–18.2, then a chamfer and a flat annulus to 20.2 | 0.89 | **18.2** |
| 13–15 (L07+L08) | 16.72 | 16.50, square | 0.99 | kept |
| 16 / 17 (L09) | 16.28 | 16.04 | 0.99 | kept (axial marginal ray 16.08 at S16) |
| 18–20 (L10+L11) | 15.74 | 15.75, square | 1.00 | kept |
| 21 / 22 (L12) | 17.27 | 17.37 | 1.01 | kept |
| 23 (L13 front) | 17.27 | 17.36 | 1.01 | kept |
| 24 (L13/L14 junction) | 16.84 | 17.36 | 0.97 | kept; noise band |
| 25 / 26 (L14 rear, L15 front) | 16.08 | faces meet at about 17.3 | 0.93 | kept; validator limit, see below |
| 27 (L15 rear) | 16.84 | 17.36 | 0.97 | kept; noise band |

S9 and S11: the procedure sets `sd` at the optical extent, not at the outer rectangle. In Figure 1 the S9 curve meets a vertical flat face at z ≈ 31.5 mm, flush with the L06 front rim. The S11 curve, checked against its sag at 14.6 and 17.5 mm, stops at z ≈ 36.5 mm. The old values drew L05's rim about 1.4 mm behind that plane, over L06's front edge, and carried S11 to within 0.15 mm of the stop plane. The figure readings (20.1 and 18.0–18.2 mm) are at or below the F/1.47 axial marginal ray (20.35 and 18.16 mm), so each value is the ray height rounded up to 0.1 mm. The renderer joins unequal front and rear rims with a straight bevel, so L05 and L06 now show bevelled rims where Figure 1 draws a flat step.

L14/L15: Figure 1 draws L13, L14 and L15 under one flat top edge at about 17.36 mm, with S25 and S26 meeting at the rim. In the prescription these two faces cross at h ≈ 16.93 mm. At the default `gapSagFrac` of 0.90, the validator caps both faces at 16.08 mm. Setting S25 = S26 = 16.8 mm would need `gapSagFrac` 0.99, since the intrusion is 0.985 of the 5.453 mm gap. No ray needs this: the corner chief ray reaches 15.76 mm at S25 and 15.85 mm at S26. The mismatch is inside the noise band, so no change was made.

Asphere check: neither S16 nor S17 turns over below 17 mm, so both 16.28 mm values are inside the fitted range. Neither value changed, and the analysis quotes no rim departures.

Results after the edit: the validator reports no errors, the image-circle check finds no undersized surface, and traced field coverage is 100% (13.9° to the 21.65 mm corner). The real-ray trace at F/1.47 shows no axial clipping and no chief-ray blocking. The tightest margins are 0.05 mm at S9 and 0.04 mm at S11. The aperture census traces the lens within 3% of F/1.47. Engine values before and after: EFL 86.510 mm, F/1.4702, half-field 13.94°, stop radius 17.84 mm. The geometric transmission curve is unchanged: 66.1% at 9.3° and 31.8% at 13.93°.

Live check: the local page at infinity renders the new L05 and L06 rims with no other change. Close focus is not modelled, so `focus=1` gives the same render. A model-outline overlay on Figure 1 at the same scale matches every element to within a few pixels, apart from the bevel and L14/L15 differences described above.

Maker comparison: the deployment pass found no public Viltrox cross-section diagram, so no maker drawing was compared here. The construction-level correlation it records stands: 15/11, "3 ED, 9 HR, 1 UA". Example 1 has three elements with νd ≥ 68 (L2–L4), nine with nd ≥ 1.80 and one double-sided asphere (L9).

## 2026-10-19 — Mount coverage and glass proxies

Viltrox sells this optical design as the AF 85mm F1.4 Pro FE for Sony E (June 2025) and the AF 85mm F1.4 Pro Z for Nikon Z (November 2025). Both product pages list 15/11 with "3 ED, 9 HR, 1 UA", 0.79 m and 0.13×. Multi-mount Viltrox lenses in the corpus use one entry, so this one now covers both. The name is "VILTROX AF 85mm f/1.4 PRO", the key is `viltrox-af-85mm-f14-pro`, `lensMounts` lists Sony E and Nikon Z, and the files were renamed to match. The optics are unchanged.

Each element now names the nearest catalog glass as a catalog-equivalent spectral proxy with the supplier unresolved. The proxies are L1 FDS18, L2 K-GFK70, L3 H-ZPK5, L4 H-FK61, L5/L6 NBFD25, L7 E-F2, L8/L13 H-ZLaF68C, L9 M-TAF105, L10 H-ZLaF50E, L11 S-TIH3, L12 H-ZF88, L14 H-ZF52 and L15 H-ZLaF76. They match the printed nd within 0.0001 and νd within 0.05. The SUMITA K-GFK70 row (1.56907/71.30) was added to the glass catalog from the SUMITA AGF data for L2. The printed nd/νd are kept, the trace now uses each proxy's catalog dispersion curve, and no ΔPgF is authored. ED positions stay untagged because Viltrox gives only the count. The analysis title, product correlation, sources and glass section, and the data-file header, were updated to match. Neither file quotes any chromatic aberration values.
