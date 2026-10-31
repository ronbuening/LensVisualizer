# Audit Log - Canon EF 11-24mm f/4L USM

Patent: US 2015/0146085 A1, Numerical Example 1

## 2026-07-30 - Compatible catalog-equivalent recovery

### Patent evidence

- Rendered local `patents/US20150146085A1.pdf`, PDF page 12.
- Paragraph 0060 defines `ndi` and `νdi` as refractive index and Abbe constant at the d line.
- Numerical Example 1 confirms E2 / S3 at nd = 1.58443, νd = 59.4 and E3 / S5 at nd = 1.85000, νd = 40.3. Stored radii, thicknesses, and effective diameters match the same rows.

### Glass corrections

| Element / surface | Before                               | After                                 | Justification                                                                   |
| ----------------- | ------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------- |
| E2 / S3           | `Unmatched 584/594 crown`            | `S-BAL42 (OHARA catalog equivalent)`  | S-BAL42 is within the d-line safety window at Δnd = -0.00130 and Δνd = -0.03.   |
| E3 / S5           | `Unmatched 850/403 high-index flint` | `M-TAFD305 (HOYA catalog equivalent)` | M-TAFD305 is within the d-line safety window at Δnd = +0.00135 and Δνd = -0.20. |

Both annotations leave the production supplier unspecified. No prescription, asphere, zoom, or semi-diameter values changed.

### Analysis sync

- Updated the E2/E3 element descriptions, glass table, and chromatic-data qualification.

## 2026-10-30 — Original-PDF shoulders, concave ends and source-qualified glass

### Exact source and native resolution

Fresh inspection used the exact original 'patents/US20150146085A1.pdf', the May 28, 2015 A1 publication by Takahiro
Hatada for Canon. Numerical Example 1 is ¶0062 on PDF page 12 (printed page 5): all surface radii, thicknesses,
effective diameters, glass pairs and four asphere tables. Its zoom/BF table continues on PDF page 13 (printed page 6).
Paragraph 0060 defines nd/νd on the d line and the standard conic equation. Fig. 1 is PDF page 2, drawing sheet 1,
showing the wide section and movement arrows. No other publication or numerical example is substituted.

The original sheets are 2560 × 3300-pixel 300-dpi scans. Fig. 1's front and rear native crops and the complete surface
and asphere table were inspected at 300 dpi; larger renders would only upsample that source. The R1–R30 axial span
is approximately 1135 native pixels for 131.51 mm (171.39 summed track minus 39.88 BF), about 8.6 px/mm. Two native
pixels represent roughly ±0.23 mm before drawing/scale uncertainty. Effective diameters are printed dimensions and
remain the optical authority. g1/g2 leaders, unit brackets, motion arrows, FP1/FP2/SP marks and IP are not glass edges.

### Supported outer shoulders, with published optical caps retained

| Surface | Before: clear sd / drawn outer (mm) | After: clear sd / drawn outer (mm) | Native figure cap/edge reading and disposition                   |
| ------- | ----------------------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| S2      | 31.05 / 31.05                       | 31.05 / 41.995                     | About 271/374 px, q = 0.725 ±0.005; resolved long rear shoulder. |
| S4A     | 24.805 / 24.805                     | 24.805 / 29.835                    | About 203/263 px, q = 0.772 ±0.007; resolved rear shoulder.      |
| S6A     | 18.19 / 18.19                       | 18.19 / 23.045                     | About 160/203 px, q = 0.788 ±0.009; resolved rear shoulder.      |
| S8      | 15.475 / 15.475                     | 15.475 / 17.92                     | About 139/160 px, q = 0.869 ±0.012; resolved rear shoulder.      |

The uncertainties above use one native pixel at the cap end and outer edge, ±(1+q)/edge-pixels. These are schematic
ratios: especially S4 does not justify replacing the explicitly published cap by a pixel-derived one. Each adopted
outer height follows its opposite face's published clear radius, consistent with the source's connected blank edge.
All four use 'rimExtensionSd', preserving the cap, clear aperture and asphere validity domain. S2's 31.05 mm spherical
cap retains its steep source-supported slope; its 41.995 mm shoulder does not extend the sphere past |R| = 32.787 mm.

A larger spherical cap or a cut that shrank the published clear aperture was rejected. No 'rimCutDepthMm' is added;
there is no source depth to assert with 'rimCutDepthSource'. All other concave ends were inspected, including the rear
triplet and doublets. Their small rim differences do not resolve extra lands, and no opaque feature is added at a
cemented interface or to an imaginary resin layer. The four source aspheres, all R/d values, published effective
diameters, stop, flare stops and zoom/focus controls are retained. Existing 72° rim-angle and 0.96 cross-gap policies
are unchanged; no tolerance is relaxed for this review.

### Every modeled medium

| Element / source faces | Retained clear sd front / rear (mm) | Confirmed source nd / νd | Qualified catalog annotation |
| ---------------------- | ----------------------------------- | ------------------------ | ---------------------------- |
| E1, S1A–S2             | 41.995 / 31.05                      | 1.77250 / 49.6           | S-LAH66                      |
| E2, S3–S4A             | 29.835 / 24.805                     | 1.58443 / 59.4           | S-BAL42                      |
| E3, S5–S6A             | 23.045 / 18.19                      | 1.85000 / 40.3           | M-TAFD305                    |
| E4, S7–S8              | 17.92 / 15.475                      | 1.59522 / 67.7           | S-FPM2                       |
| E5, S9–S10             | 15.42 / 15.23                       | 1.43875 / 94.9           | S-FPL53                      |
| E6, S11–S12            | 15.335 / 14.985                     | 1.72047 / 34.7           | S-NBH8                       |
| E7, S15–S16            | 10.055 / 9.69                       | 2.00100 / 29.1           | S-LAH99                      |
| E8, S16–S17            | 9.69 / 9.565                        | 1.57501 / 41.5           | S-TIL27                      |
| E9, S18–S19            | 9.12 / 9.285                        | 1.91082 / 35.3           | TAFD35                       |
| E10, S19–S20           | 9.285 / 9.36                        | 1.80518 / 25.4           | S-TIH6                       |
| E11, S22–S23           | 9.535 / 9.15                        | 1.88300 / 40.8           | S-LAH58                      |
| E12, S23–S24           | 9.15 / 9.2                          | 1.51742 / 52.4           | S-NSL36                      |
| E13, S24–S25           | 9.2 / 9.26                          | 1.83481 / 42.7           | S-LAH55V                     |
| E14, S26–S27           | 9.53 / 9.82                         | 1.49700 / 81.5           | S-FPL51                      |
| E15, S28–S29           | 9.795 / 9.86                        | 1.88300 / 40.8           | S-LAH58                      |
| E16, S29–S30A          | 9.86 / 10.445                       | 1.58313 / 59.4           | S-BAL42                      |

All 16 source pairs and all four aspheric coefficient blocks match the original rows. There is no source-indexed
hybrid/adhesive layer, filter or rear plate in this selected prescription. The published reference is d-line (587.6 nm);
no per-element C/F/g indices, partial-dispersion measurements or selected-glass APD numbers are provided. Existing
compatible catalog curves resolve all 16 elements and remain proxies rather than historical glass identifications.
The two low-dispersion classifications remain inferred; neither the patent nor this review identifies supplier, melt,
chemistry or production procurement.

Removed 56 unsupported per-lens catalog copies: nC, nF, ng and dPgF on E1 and E4–E16. The removed values, in C/F/g
order followed by dPgF, were E1: 1.7678/1.78337/1.79197; -0.0092; E4: 1.59255/1.60134/1.60612; 0.0123; E5: 1.43733/1.44195/1.44442; 0.0461; E6: 1.71437/1.73512/1.74723; -0.0019; E7: 1.99105/2.0254/2.046; 0.0054; E8: 1.5709/1.58476/1.59275; 0.0024; E9: 1.90323/1.92907/1.94412; -0.0027; E10: 1.79611/1.82777/1.84729; 0.0158; E11: 1.87656/1.89822/1.9105; -0.0088; E12: 1.51444/1.52431/1.5298; -0.0002; E13: 1.82898/1.84852/1.85956; -0.0075; E14: 1.49514/1.50123/1.50451; 0.028; E15: 1.87656/1.89822/1.9105; -0.0088; E16: 1.58014/1.58996/1.5953; -0.002. These were catalog-derived copies, not published selected-example measurements;
no genuine source spectral value is removed. The shared coefficient curves now supply the qualified spectral model.
The E5/E14 APD notes and roles no longer present those copied values as selected-material evidence. The public table
and E7 description are synchronized to the data's S-LAH99 proxy, replacing stale TAFD55 wording.

### Geometry and retained limitations

Fresh actual SVGs at wide/middle/tele match the four source shoulders and retain connected cemented outlines. All
441 zoom/focus combinations on a 0.05 control grid have 16 finite closed element paths and zero hidden renderer trim;
focus states repeat infinity because the source gives no finite-focus trajectory. Source clear caps still pass the
stated axial beams and full-frame corner chief rays at all three published zoom stations, including the ultra-wide
field through the existing prepared vector-launch path. There is no inferred cut for the full cut-beam guard to
exempt or skip. The existing source-precision track and conditional-expression rounding differences are retained.
The outline review and sampled runtime clearance do not establish full skew-ray clearance, a production prescription
or a historical material identity.

## 2026-10-30 — Runtime interpolation completeness follow-up

Runtime-only follow-up on 2026-10-30 sampled 65 equally spaced zoom positions (step 1/64), including the three
published stations at z = 0, 0.5 and 1. Source-review dates, all source R/d/materials and every control remain unchanged.
The 62 intermediate positions interpolate the drawing; the patent supplies no continuous zoom cam or guarantee of
focus/aperture preservation there. Focus endpoints have identical geometry at every sampled zoom position.

The greatest sampled aperture difference is 0.0000% at z = 0.03125
(limiter STO); 0/65 positions exceed the ordinary 3% aperture gate. The greatest absolute
paraxial defocus is -1.354518 mm at z = 0.28125, measured from the current printed/
previously reconstructed image plane. The largest difference between actual first-order EFL and the interpolated
station EFL is -4.3537% at z = 0.25. No source spacing, aperture, image plane or
optical surface is tuned to remove an illustrative interval's mismatch.

| Published station z | Axial aperture difference | Paraxial defocus (mm) |
| ------------------- | ------------------------: | --------------------: |
| 0                   |                 0.000000% |             -0.011941 |
| 0.5                 |                 0.000000% |              0.002756 |
| 1                   |                 0.000000% |              0.000925 |

All 65 sampled modeled corner chiefs clear, with minimum reached height 100.077% of the
format half-diagonal. Every generated element path is finite and closed with zero hidden renderer trim. These
geometry and sampled-field results do not certify focus, complete pupil transmission, continuous unsampled cam
positions or production performance. The original discrete stations remain the source-supported quantitative states.

## 2026-10-30 — Current-state iris runtime follow-up

This is a runtime-only correction using the unchanged prescription and controls. It does not repeat the original-PDF shape/glass inspection or change its date. The earlier full-pupil helper used the base wide-state `lens.stop.physicalSemiDiameter`. The corrected helper uses the current prepared state's STO semi-diameter, so variable-iris zooms receive their actual aperture. The separate 65-position aperture/chief/first-order census already used the actual state iris and is unchanged. Prior full-pupil counts are superseded here.

All 66,885/66,885 axial samples and all 4,095 sampled chiefs clear with the actual state iris. Peripheral counts in the table remain partial transmission rather than a full-beam guarantee. Focus geometry is unchanged at all slider positions; these are infinity geometries, not newly reconstructed finite-focus states.

| Zoom z | Focus state                | Axial / 0.6-field / corner survivors (of 49) |
| ------ | -------------------------- | -------------------------------------------- |
| 0      | Infinity / unchanged focus | 49 / 49 / 17                                 |
| 0.5    | Infinity / unchanged focus | 49 / 46 / 31                                 |
| 1      | Infinity / unchanged focus | 49 / 38 / 31                                 |

The 65-zoom × 21-focus census evaluates 1,365 states and 200,655 pupil launches. Every sample is aimed and all 4,095 chiefs clear. Element paths remain finite, closed and connected, with zero hidden renderer trimming. Source-station shapes, inferred cuts (none), material evidence, all source R/d, image planes, aperture schedule, controls and existing guards are unchanged. These are sampled runtime results, separate from source fidelity and production correlation.
