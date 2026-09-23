# Audit Log - Canon RF 28-70mm F2.8 IS STM

Patent: US 2024/0329367 A1

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L8 / S15 from code-only `770297` to `NBFD29 (HOYA, 770297)`.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20240329367A1.pdf`; local text confirms the queued rows.
- Updated surface 8 to `S-LAH89 (OHARA)` for nd=1.85150, vd=40.80.
- Updated surface 26 to `S-LAM2 (OHARA)` for nd=1.74400, vd=44.80.
- Converted surface 15 to a code-only `770297` annotation in this May pass; the 2026-06-04 source pass later resolved it as HOYA NBFD29.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L15 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-09-23 — First-added diagram audit, lens 73

Source: local `patents/US20240329367A1.pdf` (image-only 300 dpi scan, no text layer). Front page p. 1; FIG. 1
(Example 1 section, wide end, axis vertical, object at the bottom) p. 2; FIG. 2A–2C aberration plots p. 3; description
¶0019–0082 pp. 13–18; First Numerical Example ¶0083 pp. 18–19. Examples 2–5 (pp. 19–22) were checked only to confirm
that Example 1 is the 15-element / 12-group embodiment matching the production lens.

### Retained after re-reading the source

- Patent number, inventor (Yasuaki Hagiwara), assignee (Canon), 2024, and "Example 1" subtitle.
- All 28 optical rows (R, d, nd, νd), stop at surface 10, R4 = 22.455, and the four aspheres. The printed formula
  uses (1 + K) and every K is 0, so the conic convention is moot. Coefficients A4–A12 match sign and exponent.
- Zoom gaps d2, d9, d16, d19, d23, d25 at 28.80 / 49.00 / 67.90 mm. Paraxial EFL 28.804 / 49.007 / 67.900. Thick-lens
  unit focal lengths reproduce the published B1–B7 values. Every stored element `fl` agrees with the thick-lens
  value to the stored precision.
- Focus: ¶0042 and ¶0065 put focusing in B6 (L13), which moves toward the image for close focus. No close-focus
  spacings are published, so the gaps stay zoom-only and no travel was invented. `closeFocusM` 0.27 is a production
  figure, not patent data.
- Element / group count 15 / 12: three cemented doublets and no resin layers.
- Rims within about 15 % of FIG. 1 were kept: L1 29.5 / 29.0 (figure 26.3, +12 %), L3 front 15.4, L7 12.4, L8 11.6,
  L11 14.8 (figure 13.0), L12 16.0 / 15.5 (figure 13.9), and L13 13.0 / 12.6. S4 stays at 15.3 because 15.6 fails
  the S4→S5 gap-intrusion check.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Last gap (`28`, `var["28"]`) | 16.09 / 27.02 / 35.57 (physical CG + air) | 15.385 / 26.315 / 34.865 | Repo convention folds the 2.00 mm GB plate as t/n: d28 + 2.00/1.544 + 1.09. Old values left a +0.69 mm defocus at every station. Now −0.01 mm, which matches the patent bf of 15.39 / 26.31 / 34.87. |
| `zoomApertureModel` | absent (fixed 9.04 mm iris) | `"from-nominal-fno"` | The stop rides with B3 and FNO is 2.88 / 2.88 / 2.92, with no published iris. A fixed iris gave about f/3.9 at tele. Inferred radii are 9.04 / 10.68 / 11.94 mm. |
| STO `sd` | 11.7 | 12.0 | Records the largest inferred iris radius (11.94). |
| `fstopSeries`, `maxFstop` | starts 2.8; max 16 | starts 2.88; max 22 | f/2.8 is not reachable at design f/2.88. The production minimum aperture is f/22. |
| S9 / S8 `sd` | 10.8 / 11.2 | 11.3 / 11.3 | S9 clipped the tele axial beam (11.09 mm). FIG. 1 L5 rim 147 px = 11.1 mm. |
| S11 / S12 `sd` | 11.0 / 11.4 | 12.6 / 12.6 | Both clipped the tele axial beam (12.52 / 12.46 mm). FIG. 1 L6 rim 167 px = 12.6 mm. |
| S17 / S18 / S19 `sd` | 14.6 / 14.6 / 14.3 | 12.2 / 12.2 / 12.2 | FIG. 1 D2 rim 154–158 px = 11.6–11.9 mm (the old values were 23–26 % larger). The tele axial beam needs 11.93 mm. |
| S3 `sd` | 17.2 | 18.0 | FIG. 1 L2 flange 245 px = 18.5 mm. Clears the chief ray to the 21.64 mm raw corner (17.94 mm), which the old rim blocked. |
| S6 / S7 `sd` | 16.2 / 15.8 | 15.4 / 13.6 | FIG. 1 D1: L3 and the L4 front 196 px = 14.8 mm, L4 rear 176 px = 13.3 mm (the old S7 was 19 % larger). The junction now equals the S5 front rim. |
| S26 / S27 / S28 `sd` | 17.2 / 18.4 / 18.4 | 15.8 / 15.8 / 15.8 | FIG. 1 D3 is flat-rimmed at 205–208 px = 15.5–15.7 mm (the old S27/S28 were 18 % larger). |
| L6 `type` | Plano-Convex Positive | Biconvex Positive | R12 = −750.000, not plane. |
| L2, L3, L4, L6, L9, L12, L13 `glass` | "S-LAH66 / S-BSL7 / S-LAH58 / S-NPH4 / S-TIH53W / S-BSM14 / S-BAH11 family" | S-LAH92 / S-BSM14 / S-LAH95 / S-LAH99 / S-NBH56 / S-FPM2 / S-NBM51 (OHARA catalog equivalents) | The old family names had different nd/νd; the new ones are exact-coordinate OHARA matches. |
| Header, `focusDescription`, analysis | "Internal zoom", "no reversing groups", physical-thickness BFD, ">10 % distortion", "S-LAH65V / S-TIH18 / S-LAL14", 13A rim "~13.5 mm" | Corrected | Abstract and ¶0028–0029: every unit moves, B1 and B3–B7 go toward the object, and B2 follows a convex-to-image path. The derived B2 front vertex runs 123.23 → 120.26 → 123.98 mm from the image. FIG. 2A distortion reads about −7 % at ω = 34.8°. |

Scale for FIG. 1: vertex crossings from S1 (y 2506.5) to S28 (y 977.5) span 1529 px for the 115.39 mm wide-end
track, giving 13.25 px/mm. The axis is at x 1252.5, and both sides read the same within 1 px.

### Checks on the result

- The surface validator reports no errors, and the image-circle check has no undersized rims. Paraxial defocus is
  −0.011 / −0.012 / −0.008 mm.
- Exact real-ray trace: no surface clips the axial f/2.88–2.92 beam at any station, and no rim blocks the chief ray
  to Y = 21.64 mm. At the patent's field angles (34.93 / 23.82 / 17.67°), full-bundle vignetting is 8–13 % per side
  at D3 and up to 58 % per side in B5–B6 at the wide end.
- The wide-end chief ray at 34.93° lands at 18.78 mm (about −6.6 % against f·tan ω), and Y = 21.64 mm needs about
  39.0°. The engine's paraxial half-field is 33.7° at wide, limited by S4, and rises to 25.2° and 20.0° at the
  intermediate and telephoto stations.
- All 15 glass labels resolve OK-compatible.
- Live check (headless screenshots): production wide-end baseline, then local wide and tele at infinity. BF reads
  15.38 / 34.87, and the slider runs f/2.88–f/22 (f/2.92 at tele). The zoom-movement overlay shows B1 and B3–B7
  advancing and B2 reversing near the intermediate position. Off-axis rays were not checked (needs a click).

### Open limitations

- The patent does not explain the 0.90 mm Total Lens Length offset from the tabulated sum.
- Iris radii are inferred from the nominal f-number, not published.
- Close-focus travel of B6 is not modelled; no spacings are published.
- L1, L11, and L12 rims remain 12–15 % above the FIG. 1 silhouette, and no effective diameters are published.
- The engine half-field at wide (33.7°) stays below the patent's 34.93° because S4 is capped by its sag against S5.
