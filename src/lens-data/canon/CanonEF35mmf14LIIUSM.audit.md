# Audit Log — Canon EF 35 mm f/1.4 L II USM

## 2026-10-30 — Original shape and all-media review

### Exact source and native evidence

Fresh source inspection used `patents/US20150098138A1.pdf`, US 2015/0098138 A1, Numerical Example 2. Figure 3
on PDF page 4/sheet 3 of 9 is explicitly mapped to Example 2 by ¶¶0013/0024. The complete prescription, both
aspheres, f = 35.42 mm, f/1.45, half-angle 31.42°, image height 21.64 mm and BF 39.00 mm are in ¶0069 on PDF
page 16/printed page 6, right column. The numerical definition ¶0067 on PDF page 15/printed page 5 explicitly
identifies index and Abbe number at the d line. Every table row was checked against native page/crops.

The PDF contains native 2560 × 3300 page images at 300 dpi. The native 1150 × 800 Figure 3 optical crop was inspected
without upsampling; whole-page views only locate the region. The previous September 11 integration note's 600 dpi
view was upsampling, not native detail. That historical date and partial-integration record remain in the analysis.
The new review is a fresh all-element/all-media inspection, not reuse of that partial note as fresh evidence.

Figure 3's first/last axis vertices span about 940 pixels over the printed 100.79 mm optical track; local scale is
roughly 9.4–9.8 native px/mm and schematic. Two-pixel reading uncertainty is about ±0.2 mm before scale/line-width
uncertainty. Retained/adopted blank heights carry roughly ±0.5–1 mm schematic uncertainty. Optical caps and rims are
separated from the axis, rays, focus arrows, SP leader and unit brackets; no mechanical flange is measured as glass.

### All elements, concave ends and bonded interfaces

| Element | Source faces | Clear front / rear radius (mm) | Drawn front / rear radius (mm) |
| ------- | ------------ | -----------------------------: | -----------------------------: |
| E1      | 1–2A         |                      26 / 20.6 |                        26 / 26 |
| E2      | 3–4          |                      20.6 / 20 |                      20.6 / 20 |
| E3      | 5–6          |                        20 / 20 |                        20 / 20 |
| E4      | 7–8          |                    19.8 / 19.8 |                    19.8 / 19.8 |
| E5      | 9–10         |                    19.6 / 19.8 |                    19.6 / 19.8 |
| E6      | 10–11        |                    19.8 / 19.8 |                    19.8 / 19.8 |
| E7      | 12–13        |                    19.2 / 19.2 |                    19.2 / 19.2 |
| E8      | 14–15        |                    18.7 / 18.7 |                    18.7 / 18.7 |
| E9      | 16–17        |                    17.4 / 17.4 |                    17.4 / 17.4 |
| E10     | 17–18        |                    17.4 / 17.4 |                    17.4 / 17.4 |
| E11     | 20–21        |                    15.6 / 15.6 |                    15.6 / 15.6 |
| E12     | 21–22        |                    15.6 / 15.6 |                    15.6 / 15.6 |
| E13     | 23–24        |                    16.3 / 16.3 |                    16.3 / 16.3 |
| E14     | 25A–26       |                    17.8 / 17.8 |                    17.8 / 17.8 |

The native E1 rear asphere terminates below the outer shoulder: cap/outer half-heights are approximately 206/252 px,
a ratio near 0.82 (reading ±0.02, additional schematic variation). The retained 20.6 mm clear cap plus 26 mm outer
shoulder has ratio 0.792 and follows this resolved outline without extending the optical polynomial. S2A gains
`rimExtensionSd: 26`; S1 remains 26. A 26 mm clear-cap trial fails the unchanged slope guard, and lies beyond the
25.389 mm K=0 base-conic domain; the trial also cannot retain an equal 26 mm extension. No source radius or
asphere coefficient is altered to make that invalid cap fit.

S12/S13 increase 19.1→19.2 mm: the source seventh-element outline permits it, while the exact infinity axial ray
requires 19.179128 mm at S13. S23/S24 increase 15.9→16.3 mm: the unchanged inferred finite cam needs 16.100827 and
16.289604 mm at these faces. The adopted height lies within native schematic uncertainty. All remaining concave
ends retain their existing caps; the source does not resolve additional optical shoulders. Bonded S10/S17/S21 remain
continuous interfaces, without opaque lands, disconnected resin wings or fabricated equal-height blocks. No cut,
`rimCutDepthSource`, rear plate or invented BR layer is authored. Every R/d, K/A coefficient, stop coordinate and
existing control gap is preserved.

### Every modeled medium

| Element | Printed nd / νd | Qualified compatible curve |
| ------- | --------------- | -------------------------- |
| E1      | 1.58313 / 59.4  | S-BAL42                    |
| E2      | 1.48749 / 70.2  | S-FSL5                     |
| E3      | 1.91082 / 35.3  | H-ZLaF4LA                  |
| E4      | 1.53172 / 48.8  | S-TIL6                     |
| E5      | 1.49700 / 81.5  | S-FPL51                    |
| E6      | 1.80518 / 25.4  | S-TIH6                     |
| E7      | 1.72916 / 54.7  | S-LAL18                    |
| E8      | 1.91082 / 35.3  | H-ZLaF4LA                  |
| E9      | 1.49700 / 81.5  | S-FPL51                    |
| E10     | 1.65412 / 39.7  | S-NBH5                     |
| E11     | 1.80518 / 25.4  | S-TIH6                     |
| E12     | 1.72916 / 54.7  | S-LAL18                    |
| E13     | 1.59522 / 67.7  | S-FPM2                     |
| E14     | 1.85400 / 40.4  | L-LAH85V                   |

All 14 modeled media exactly match the original d-line table. Each now explicitly declares `indexReference: "d"`.
The source publishes no element C/F/g line indices, partial-dispersion ratio, measured APD value, named supplier,
indexed cement, source filter or camera-side plate. No unsupported per-lens spectral override was present to remove.
All 14 existing compatible catalog curves remain qualified proxies; their compatibility does not establish historical
supplier, melt or chemistry. Misleading encoded/class labels are replaced by the actual qualified curve names.
E5/E9 S-FPL51 and E13 S-FPM2 retain catalog-inferred APD flags with explicit source limitations. Source media are
not identified as Canon's production BR or UD construction. No unprinted resin layer is inserted at any bond.

### Actual SVGs, focus sampling and retained limits

Actual generated SVGs at infinity, half focus and inferred close focus were compared with the native Figure 3.
The shoulder reproduces the resolved front outline; the remaining progression retains the source's schematic class.
At all 21 uniformly sampled focus states, 14 element paths are finite, closed and connected; hidden renderer trim is
zero. The source publishes infinity only; all finite layouts remain the existing rigid-L2 reconstruction with 7.624269 mm
travel, gap 13 + BF = 46.69 mm. Half focus gives 454.478322 mm/|m|0.103252 and close gives 281.749511 mm/|m|0.21.
No zoom or tilt/shift/special control exists. Widest iris is the limiting aperture; smaller authored stops lie within it.

Full-open 49-point pupil samples at axial/0.6-format/corner fields give 3087 aimed launches, 1029 clear axial samples
and 63 clear chiefs. Infinity counts are 49/34/15, half-focus 49/34/22, close 49/39/27. Off-axis clipping can begin at
bonded S21; no interface land hides it and full-field pupil transmission is not asserted. The narrow surface,
image-circle, strict stated-aperture and runtime-format-corner checks pass with unchanged tolerances. No inferred
cut requires a beam exemption. These sampled checks are not a claim of complete production performance.

The original 31.42° source half-angle gives image height 21.324493 mm, 98.6% of its 21.64 mm summary. The independently
solved runtime format corner is about 31.8° and clear. Printed BF 39.00 mm retains the computed 0.001733 mm closure
residual. Rounded total track 139.80 versus summed 139.79 mm, D1 50.72 versus 50.71 mm, and f2 55.50 versus 55.516102 mm
remain explicit rounding-level discrepancies, with no source tuning. The separate production BR disclosure and
unpublished finite focus cam remain limitations of product correlation, independent of original shape/glass fidelity.
