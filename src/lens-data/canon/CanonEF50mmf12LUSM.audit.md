# Canon EF 50mm f/1.2L USM — patent audit

## 2026-09-25 — MTF image-plane census

Source: local `patents/JP_2007333790_A.pdf`, Numerical Example 1, PDF p.10 and E=0 continuation on p.11. Visually checked all R1–R15 radii, all D1–D15 spacings, all eight nd/νd pairs, and the S14 asphere. Source A=0 (quadratic term), B=-1.44531e-6, C=2.50160e-10, D=-1.46123e-13, E=0 map to K=0 and A4/A6/A8/A10 without scaling. The stop is S7. No plate is listed. All authored values match the native-scale infinity source; the declared finite-focus reconstruction is not used for this comparison.

**Cause: source image-distance contradiction.** Independent EFL 51.695042273 mm agrees with printed 51.70, but Gaussian BFL 38.333791112 mm differs from printed D15=38.88. No single supported misprint explains that gap while preserving the matching prescription. The source does not establish that this is a designer best-focus offset; removed the earlier analysis assertion that it is known not to be a source error. Keep published values without tuning. Runtime offset **-0.546209 → -0.546209 mm**. Section E row deleted; no numerical change or changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-10-30 — Original shape and all-media review

### Source identity and native inspection

Fresh inspection used `patents/JP_2007333790_A.pdf`, JP 2007-333790 A, Numerical Example 1. The complete R1–R15,
D1–D15, eight media and S14 coefficients are on PDF page 10/printed 10, ¶0097, with E=0 continuation at page 11.
The index definition ¶0092 on page 10 explicitly says d-line index and Abbe number. Matching Figure 1/2 are page 16.
Figure 2 gives f = 51.70 mm, Fno 1.25 and half-angle 22.71°, while the table rounds full field to 45.4°.

The image-only PDF contains native 1656 × 2339 rasters at 200 dpi. Native table and optical crops were inspected;
600 dpi is upsampling, not native evidence. First/last vertices span roughly 460 px over 57.72 mm (about 8 px/mm).
Two-pixel uncertainty is ±0.25 mm before line width/schematic uncertainty; adopted heights retain ±0.5–1 mm.
Leaders, labels, brackets, stop mechanics and image-plane strokes are excluded. The earlier actual September 25
source-plane audit is retained verbatim as historical evidence; it is not counted as a fresh shape/glass review.

### Every element and adopted optical cap

| Element | Faces  | Clear front / rear radius (mm) | Drawn front / rear radius (mm) |
| ------- | ------ | -----------------------------: | -----------------------------: |
| L1      | 1–2    |                        22 / 22 |                        22 / 22 |
| L2      | 3–4    |                        20 / 20 |                        20 / 20 |
| L3      | 5–6    |                   17.95 / 15.2 |                  17.95 / 17.95 |
| L4      | 8–9    |                   14.7 / 16.75 |                  16.75 / 16.75 |
| L5      | 9–10   |                  16.75 / 16.75 |                  16.75 / 16.75 |
| L6      | 11–12  |                   16.75 / 18.9 |                    18.9 / 18.9 |
| L7      | 12–13  |                    18.9 / 18.9 |                    18.9 / 18.9 |
| L8      | 14A–15 |                      19 / 18.9 |                      19 / 18.9 |

The source resolves short vertical shoulders on concave S6/S8/S11. Approximate native cap/outer ratios are
0.84/0.86/0.87 (reading ±0.02 plus schematic uncertainty); adopted 15.2/17.95,14.7/16.75 and 16.75/18.9 give
0.847/0.878/0.886. All three use `rimExtensionSd`, preserving the optical caps as the traced apertures. A 16.5 mm
S11 trial falls below the source infinity axial requirement 16.690807 mm, so 16.75 is retained. Other small final-
element edge strokes do not independently establish another optical cap; the original 19/18.9 mm outline stays.
No flat cut or `rimCutDepthSource` is authored. Bonded S9/S12 have no opaque land, no layer is detached, and no
unsupported equal-height block is added. Every source R/d, S14 coefficient, stop and control value is preserved.

The original permits generic resin manufacture but Numerical Example 1 supplies only one medium on the aspherical
last element, without a separately prescribed hybrid layer. No resin index, thickness or wing is invented.

### All media and spectral qualification

| Element | Original nd / νd | Qualified compatible curve |
| ------- | ---------------- | -------------------------- |
| L1      | 1.772499 / 49.6  | S-LAH66                    |
| L2      | 1.834807 / 42.7  | TAFD5G                     |
| L3      | 1.639799 / 34.5  | S-TIM27                    |
| L4      | 1.728250 / 28.5  | S-TIH10                    |
| L5      | 1.882997 / 40.8  | S-LAH58                    |
| L6      | 1.698947 / 30.1  | S-TIM35                    |
| L7      | 1.834807 / 42.7  | TAFD5G                     |
| L8      | 1.804000 / 46.6  | H-ZLaF50D                  |

All eight pairs match the native original, and each now explicitly declares d reference. All eight existing compatible
curves remain qualified spectral proxies with synchronized labels/prose; compatibility does not identify a historical
supplier, melt or chemistry. The source supplies no C/F/g element indices, partial dispersion or named APD evidence.
No per-lens spectral override was present to remove. Optional default APD flags are not measurements of normality.
No source filter, camera-side plate, indexed cement or other modeled medium is missing from the source table.

### Actual SVGs and full focus/aperture samples

Actual generated SVGs at infinity/half/close focus were compared with Figure 1, including all three shoulders and
both bonded pairs. All 21 uniformly sampled focus states have eight finite, closed, connected paths and zero hidden
renderer trim. All 3087 full-iris launches are aimed and 63 chiefs clear. Source infinity counts are 49/31/15 of 49 for
axial/0.6-format/corner; half focus 45/31/17 and close 45/32/17. Source infinity aperture, surface, image-circle and
runtime-format-corner checks pass. No inferred cut requires an exemption.

The 20 sampled finite states retain 45/49 axial rays, 949/1029 axial samples passing in total. The first boundary clip
is S10 at longer distances and bonded S9 near close; peripheral samples can also first clip bonded S12. This limitation
already exists in the inferred cam and is not hidden with interface lands. A full-clearance trial raised D1 faces to
17.3 and rear faces to 19.7 mm, but fails S10–S11 intrusion 0.42 mm against 0.405 allowed over 0.450 mm. The trial
is rejected without gap/radius/tolerance tuning. At the next authored f/1.4 stop, all 49 axial rays clear at every one
of 21 states; 3087 launches are aimed and 63 chiefs clear. Published f/1.25 remains the source target.

The original publishes infinity only. The unchanged finite cam gives 750.481728 mm at half focus and 450.000016 mm
at close, with source whole-unit movement retained. The table's half-angle 22.7° gives 21.337279 mm image height;
Figure 2's 22.71° gives 21.347615 mm (98.6–98.7% of modeled 135-format radius). The independently solved runtime
corner is about 23.0° and clear. No zoom, stabilization or other special control is authored.

Printed D15=38.88 remains 0.546209 mm imageward of Gaussian BFL 38.333791112 despite EFL 51.695042273 agreeing
with printed 51.70. Native table continuation/section show no plate, filter or supported correction explaining it.
Structured source.errata stays unresolved; best-focus intent is unproven. The September 25 historical audit date is
preserved. Original source fidelity, sampled runtime clearance and production correlation remain separate conclusions.
