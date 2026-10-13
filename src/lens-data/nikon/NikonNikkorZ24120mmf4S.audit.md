# Audit Log - Nikon NIKKOR Z 24-120mm f/4 S

Patent: WO 2022/259649 A1, Example 5 / Table 5

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD25 from HOYA's first-party optical-glass PDF (`NBFD25`, code 855-252, nd=1.85451, vd=25.15, PgF=0.6103, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L5 / S8 from code-only `855252` to `NBFD25 (HOYA, 855252)`.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/WO2022259649A1.pdf`.
- The local PDF is image-based; Example 5 / Table 5 was checked by rendering the local pages.
- Rows confirmed:
  - S6 / L4: nd = 1.83400, vd = 37.18.
  - S8 / L5: nd = 1.85451, vd = 25.15.
  - S19 / L10: nd = 1.90043, vd = 37.38.
  - S22 / L12: nd = 1.78472, vd = 25.64.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S6 | `S-LAH66 (OHARA)` | `S-LAH60 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S8 | `S-TIM35 (OHARA) or K-VC89 (Sumita)` | `855252 - high-index flint...` | Kept as patent code; no defensible exact public catalog match. |
| L10 / S19 | `S-LAH58 (OHARA)` | `TAFD37A (HOYA)` | Exact nd/vd catalog match. |
| L12 / S22 | `S-TIM25 (OHARA)` | `S-TIH11 (OHARA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- `855252` was unresolved in this May pass; the 2026-06-04 source pass resolved it as HOYA NBFD25 from first-party coefficient data.
- No new catalog entries were required.

### Analysis sync

- Updated the affected glass-selection rows and L12 narrative.

## 2026-05-31 — M-TAFD305 catalog side-effect cleanup

### Context

- The Sigma patent audit added coefficient-backed HOYA `M-TAFD305` to the glass catalog.
- L3's prior prose included `M-TAFD305` as a nearest-neighbor hint, but that token now resolves to a different 851/401 catalog row and fails the nd safety net for this 775/473 patent glass.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S4A | `Moldable lanthanum crown (no exact catalog match; nearest HOYA M-TAFD305 1.77377/47.17)` | `Unmatched moldable lanthanum crown (775473; no exact public Sellmeier match)` | Keeps the row intentionally Abbe-based until a coefficient-backed exact catalog source is found. |

### Analysis sync

- Updated the glass-identification table to remove the stale M-TAFD305 nearest-neighbor wording.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L16 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-08-18 — Aspherical mold-glass coefficient assignments

- Visually rechecked `patents/WO2022259649A1.pdf`, PDF page 51, Example 5. L3/L15 share `1.77503 / 47.31`; L7 remains `1.59306 / 66.97`.
- HOYA M-TAF401 is within the runtime window for L3/L15 (`Δnd = -0.001264`, `Δνd = -0.14`); Hikari J-PSKH4 closely reproduces L7 (`Δnd = +0.000430`, `Δνd = +0.031`).
- Relabeled all three as catalog equivalents while leaving their production suppliers unspecified. No prescription, asphere, focus, or zoom geometry changed.

## 2026-09-23 — First-added diagram audit, lens 71

Source: local `patents/WO2022259649A1.pdf` (image-only scan, 300 dpi CCITT pages). Front page p. 1; formula (a)
¶0186–¶0187 p. 34; Example 5 text ¶0244–¶0256 pp. 49–50; Table 5 pp. 50–53; Fig. 9 p. 109 (sheet 17/46, axis
vertical, object at the bottom); Figs. 10A–10C pp. 110–112. All numbers were read off the rendered pages.

### Retained after re-reading the source

- Example 5 is the production match: f = 24.70–116.50, Fnow 4.00 / Fnot 4.12, 16 elements in 13 air-separated
  groups, four aspherical surfaces on L3/L7/L14/L15, three νd 82.57 elements plus one aspherical νd 71.67 element.
  Front-page inventors (Ono, Machida, Makida, Tsubonoya), applicant, publication number and year are correct.
- All 30 rows of `R`, `d`, `nd`, `νd`, the stop row (12, 0.880 before L7), the four asphere rows (A4–A14), the seven
  group focal lengths and the W/T variable gaps match Table 5. Paraxial EFL is 24.6997 / 116.4998 mm and BFD
  13.554 / 45.145 mm against Bf 13.555 / 45.147. No cover glass or filter is listed.
- Conic convention kept at K = 0, now with evidence. Formula (a) prints √(1 − K·y²/r²), which would make the tabulated
  K = 0.0000 a paraboloid. With K = 0, f/4 axial marginal rays land 0.044 / 0.052 mm from the image plane at W / T;
  reading K as κ (K = −1) gives 0.88 / 23.3 mm. The exact chief ray at the Figs. 10A/10C half-fields (43.38°, 9.97°)
  lands at Y = 21.71 mm at both ends.
- Element types match the R signs and ¶0246–¶0252. `groups`, `doublets` and `cemented` ranges are correct.
- Group motion (Fig. 9 arrows and the table, positions calculated from the image plane): every group moves toward the
  object from W to T. G1 +55.00, G2 +9.82 (curved arrow), G3 with stop +31.59, G4 +39.20, G5 +27.44, G6 +24.26,
  G7 +31.59 mm. No group is fixed.
- Focus (¶0254): G5 and G6 both move toward the object. Table 5 gives infinity spacings only. The stored W/T close
  pairs are retained as calculated values: they focus 350.2 / 350.0 mm object-to-image, β = −0.097 / −0.381 (production
  0.35 m, 0.39×). Travel is G5/G6 0.99/2.23 mm (W) and 7.47/12.14 mm (T). The G5/G6 split is a minimum-norm modelling
  choice.
- L3/L15 `M-TAF401 catalog equivalent` (Δnd −1.3e-3) and L7 `J-PSKH4` (Δnd +4.3e-4) are kept per the 2026-08-18
  decision; no exact catalog coordinate exists. L2/L8, L4, L5, L10, L12, L13, L14 and L16 labels are exact.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| `zoomPositions`, `var` | six stations 24.7/35/50/70/85/116.5; 35–85 were linear gap interpolations | two stations 24.7/116.5 (Table 5) | The interpolated stations computed EFL 28.28/34.91/47.60/61.69 mm, not their labels. Their images sat 1.9–6.0 mm ahead of the image plane. Their close pairs were solved on that wrong geometry. The patent tabulates W and T only (Fig. 10B middle state has no gap table). |
| `nominalFno`, `zoomApertureModel` | 4 (scalar), fixed iris | [4.0, 4.12], `"from-nominal-fno"` | Table 5 Fnow/Fnot. The stop moves with G3; the fixed 6.3 mm iris gave f/3.99 at W and f/7.69 at T. Inferred iris radii are 6.30 / 11.93 mm. |
| STO `sd` | 6.3 | 11.9 | Records the inferred tele iris radius. The Fig. 9 stop ticks (22 mm) are a drawing symbol. |
| 1 / 2 / 3 `sd` | 33.0 / 27.0 / 27.0 | 27.7 / 25.6 / 25.6 | Fig. 9 scale 0.06743 mm/px (117.401 mm S1–S30 vertex span = 1741 px). The S1 curve meets L1's edge at 411 px, and the row matches the S1 sag at 27.7 mm. The junction meets L1's rear flange at 379 px (row matches the S2 sag at 25.6 mm). L2 rear is 379 px. The old 33 mm was a 77 mm filter-thread cap. The chief ray needs 25.17 / 23.11 / 21.04 mm. |
| 4A / 5 `sd` | 13.0 / 12.8 | 20.1 / 16.2 | Chief ray at 43.36° needs 17.73 / 13.72 mm, so the old rims blocked it (`BLOCKS-CHIEF`). Fig. 9: *4 curve reaches L3's edge at 298 px. The concave S5 curve ends where L3's flat flange starts (≈ 237 px; the flange row matches the S5 sag at 16.2–16.3 mm). No turnover at 20.1 mm (slope 12.4°). |
| 19 / 20 / 21 `sd` | 15.2 / 13.4 / 13.4 | 12.7 / 12.0 / 12.0 | Fig. 9 L10 188 px, L11 177 px (S19 was +20 % over the figure). Tele f/4.12 axial beam is 11.83 / 11.01 / 10.72 mm. |
| 26 / 27A `sd` | 13.0 / 12.8 | 15.0 / 15.0 | Fig. 9 L14 edge 222 px; the *27 curve meets the edge where its sag equals the drawn offset. Corner vignetting at L14 falls from 79–97 % to 11–16 % per side. No turnover. |
| 28A / 29 / 30 `sd` | 12.3 / 12.3 / 12.0 | 16.9 / 16.6 / 17.0 | Chief ray needs 13.61 / 14.93 / 15.21 mm, so the old rims blocked it. Fig. 9 G7 edge 251–253 px; the *28 and S30 curve ends match their sags at 16.9 / 17.0 mm. |
| `specs` 2ω | 82.4° – 21.0° | 86.8° – 19.9° | Figs. 10A/10C: A = 43.38° / 9.97°. |
| L1 `glass` | `S-LAH95 (OHARA)` (Δνd 0.07) | J-LASFH13 (HIKARI catalog equivalent) | 1.90366 / 31.27 exact. |
| L6, L9, L11 `glass` | `S-FPL51 (OHARA)` (1.49700 / 81.55) | J-FKH1 (HIKARI catalog equivalent) | 1.49782 / 82.57 exact. Roles called them "S-FPL53" (1.43875 / 94.9) — removed. |
| L6, L9, L11, L14 `apd` | `"patent"` | `"inferred"` | The patent gives only Abbe conditions (24) νdN > 60 and (25) νdP2 > 60. The ED attribution comes from glass class and Nikon's 3 ED + 1 aspherical ED count. |
| All `fl` | e.g. L1 −166.4, L8 256.9, L16 74.7 | thick-lens values (L1 −174.9, L8 249.1, L16 71.9 …) | Recomputed from the prescription. |
| L3 role | "corrector plate … ~4 mm at rim" | departure +0.95 mm at the 20.1 mm rim | Asphere scan: +936 µm at 20.1 mm. The 4 mm figure was evaluated at 25 mm, outside the drawn element. |
| Header, `focusDescription`, var comment | "linear interpolations preserve the patent's infinity behavior exactly"; SD method from 60 % field + filter cap | Rewritten | Records the findings above. The two-station interpolation limitation is now stated. |
| Analysis | inventor order; ω 41.2°/10.5°; "G2 travels ≈ 45 mm"; S-FPL53, S-LAH79, S-LAH58, S-LAM66; "identical infinity/close values"; fixed-iris f/4 explanation; asphere departures at old rims; SD method | Rewritten | G2 moves 9.82 mm; the group-travel table was added. Glass names match the data. Departures at stored rims: *4 +936 µm @ 20.1, *13 −242 µm @ 13.5, *27 +766 µm @ 15.0, *28 +30 µm peak / −76 µm @ 16.9. |

Retained rims inside 15 % of Fig. 9: L4 14.8 (stored 14.0/14.2), L5 13.9 (13.8/12.5), L6 12.9 (13.5/14.7), L7/L8
13.6–13.9 (13.5–14.2), L9 13.9 (15.5), L12 12.9 (13.2/13.4), L13 14.3 (13.4/13.6).

### Checks on the result

- Surface validator and image-circle check pass. At Y = 21.7 mm the exact trace needs ω = 43.36° / 9.97° (source
  43.38° / 9.97°). No surface clips the axial beam or blocks the chief ray at infinity or at the calculated close
  focus at either station. Corner-bundle clipping at wide is heaviest at G1 (68–77 % per side), consistent with the
  drawn front diameter.
- Engine: zoom EFLs 24.700 / 116.500, FOPEN 4.00 / 4.12, iris radii 6.30 / 11.93 mm. The paraxial wide half-field
  estimate is 40.0°, limited by S5. The exact trace passes at 43.36°.
- Live (headless render of the local dev server): wide infinity shows the large L1 and L3 and the G7 doublet larger
  than G6, as in Fig. 9. The tele close-focus view shows G5/G6 advanced. The zoom-movement overlay shows all seven
  groups moving toward the object, with 55.00 mm maximum travel. Off-axis toggle not exercised (needs a click).

### Open limitations

- Only W and T are tabulated. Between them the viewer interpolates gaps linearly. At mid-slider this gives a paraxial
  f ≈ 48.1 mm (readout ≈ 70.6 mm), with the image about 6 mm ahead of the image plane. The Fig. 10B middle state
  (f = 69.98) is not reproducible without its gaps.
- Close-focus G5/G6 positions and the iris schedule are calculated or inferred, not published. Rims other than those
  measured from Fig. 9 remain estimates. No effective diameters are published.
- The engine's paraxial wide half-field (40.0°) is below the patent's 43.38°.
