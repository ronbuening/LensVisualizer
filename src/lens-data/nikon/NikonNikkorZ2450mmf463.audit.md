# Audit Log - Nikon NIKKOR Z 24-50mm f/4-6.3

Patent: JP 2021-189377 A, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2c / 11 | `glass` | `NBFD12 (HOYA)` | `BAFD7 (HOYA) / S-BAH27 / NBFD12 class` | Example 1 publishes `nd = 1.70154`, `vd = 41.15`; BAFD7/S-BAH27 are resolver-backed catalog equivalents for this barium-flint class, while NBFD12 remains the historical class reference. |
| L2a / 7 | `apd` | `false` | `"inferred"` | FCD1/S-FPL51 is an ED fluorophosphate class, but the patent gives no partial-dispersion table. |
| L2b / 9 | `apd` | `false` | `"inferred"` | Same ED-class glass and same source limitation as L2a. |

- Retained L1a `Unmatched barium crown (patent nd=1.69680, vd=55.46...)` because the prior S-BSM10 label did not match and no exact coefficient-backed current public catalog entry was verified.
- Retained `M-BACD12 (HOYA)` as an Abbe-only property-class label. The nearest resolver-backed Hikari Q-SK52S shares the same rounded six-digit class, but its `nd` does not match the patent row closely enough to replace the label.
- Retained COP resin and UV-cure adhesive rows as non-catalog material rows.

### Phase 2 - Geometry and SD review

- Rechecked the Example 1 radii, thicknesses, variable gaps, and aspherical coefficients against the local patent text.
- Retained the existing errata notes for the surface 14 `A6` coefficient, surface 20 `A8` exponent, and the shifted L3b asphere surface numbers.
- The patent does not publish clear apertures. Retained the existing SDs as ray-envelope estimates; their small stop, compact internal groups, and larger rear image-side clearances remain plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives `nd`/`vd`, aspherical coefficients, and variable gaps, but no line-index table or partial-dispersion table.
- APD status for the two ED elements is therefore recorded as inferred from the glass class rather than patent-measured partial dispersion.

### Phase 4 - Analysis sync

- Updated `NikonNikkorZ2450mmf463.analysis.md` to describe the BAFD7/S-BAH27/NBFD12 relabel, the M-BACD12 property-class limitation, and the inferred APD status of the two ED elements.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L1c from modern `S-NPH2` to historical OHARA `PBH21`, the exact 923209 coordinate.

## 2026-09-23 — First-added diagram audit, lens 80

Source: local `patents/JP2021189377A.pdf` (JP 2021-189377 A). Page 1 (bibliography and Fig. 1), pp. 15–16 (Numerical Example 1 text layer, checked against the rendered pages), p. 22 (Tables 1–2), p. 24 (Fig. 1, 150 ppi raster) and p. 25 (Figs. 6A–6C). The JPO text layer is native (not OCR). Google Patents was used only to romanize the inventor names. Nikon's product page was used for production specifications.

### Re-verified and retained

- Bibliography: the applicants are Konica Minolta (first) and Nikon. The inventors are 廣瀬卓万, 山田恵子, 山本康 and 山本浩史 (Takakazu Hirose, Keiko Yamada, Yasushi Yamamoto, Hiroshi Yamamoto). The application was filed 2020-06-03 and published 2021-12-13. The data file fields were already correct. The analysis inventor line ("Hirose Takumo", surname-first) was wrong and has been fixed.
- Embodiment: Example 1 has 11 elements in 10 groups, 2 ED (497/81.6 ×2) and 3 aspherical elements (L1b and L3b in COP, L2d in PGM glass). This matches Nikon's 11/10, 2 ED, 3 aspherical. Example 2 has the same construction, so the choice of example is an inference; the analysis now says so.
- Prescription: every R, d, nd and νd of Example 1 matches the patent. All K = 0 and the conic form is 1+K, so there is no convention issue. The three errata are retained after re-reading the printed page: S14 A6 is printed E-01 (should be E-07), S20 A8 is printed E-01 (should be E-07), and the S20/S21 asphere blocks are printed as "21"/"22".
- Paraxial trace: EFL 24.7265 / 34.7117 / 48.5036 mm against the patent's 24.726 / 34.711 / 48.503. BFD 11.4385 / 11.3813 / 11.3030 mm against the BF column 11.438 / 11.381 / 11.301. Defocus is ≤ 0.002 mm. Thick-lens element focal lengths match every stored `fl`. The cemented L2b+L2c pair is −1930 mm, although the patent text calls it positive.
- Zoom stations: the patent tabulates only three stations (Wide / Middle / Tele), and the data holds exactly those three. No interpolated stations exist.
- Group motion: G4 is fixed (¶0045). Measured from the first vertex to the last, the lens is 75.802 / 73.411 / 75.434 mm, so G1 moves 2.39 mm toward the image and then 2.02 mm back toward the object. G2 and G3 move monotonically toward the object by 16.4 mm and 13.2 mm. The app's movement overlay agrees (max travel 16.30 mm with the per-station BF). The analysis prose now gives these numbers.
- Focus: G3 moves toward the image (¶0046). The patent publishes infinity gaps only. The stored close gaps focus 349.96 / 350.03 / 349.91 mm object-to-image, which is the 0.35 m production MFD at every zoom position, so a scalar `closeFocusM` is correct. The calculated magnifications are −0.089 / −0.125 / −0.179, consistent with Nikon's 0.17× at 50 mm. The header, var comments, focusDescription and analysis now label these gaps as calculated.
- Back focus: the stored last gap is the patent BF column. The printed d23 = 9.90 is constant, and the printed TL = vertex track + 9.90 at all three stations. No plate is tabulated, and a plate would make the physical distance longer than its air equivalent, so the 1.54 mm offset is unresolved. The earlier "likely includes a cover glass" explanation was physically backwards and has been replaced in the header and analysis §2.4.
- Metadata: `elementCount` 11 and `groupCount` 10 are correct. Element types and meniscus orientations match the R signs and ¶0048–0051. The patent's "L4a convex to the object" is a prose error that the analysis already notes. Group/doublet ranges and variable-gap labels are correct. Condition values match Table 2.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| S18 / S19 sd (L3a) | 6.0 / 6.0 | 9.2 / 9.2 | Full-field chief ray 6.58 / 7.15 mm, so the old rims blocked the chief ray. Fig. 1 wide-panel rim is 64–65 px ≈ 9.1–9.2 mm at 0.1417 mm/px (scale from the S1→S23 vertex span, 535 px = 75.80 mm). |
| S20A / S21A sd (L3b) | 5.5 / 5.5 | 10.4 / 10.4 | Chief ray 8.08 / 8.90 mm (blocked before). Fig. 1 rim 75 px ≈ 10.6 mm. Held at 10.4 because the S20 polynomial turns over between 10.35 and 10.93 mm. |
| S22 / S23 sd (L4a) | 17.0 / 18.5 | 18.6 / 18.6 | S22 chief ray 17.09 mm (blocked before). Fig. 1 flat rim 131 px ≈ 18.6 mm. Edge thickness about 1.2 mm. |
| Aperture model | fixed iris | `zoomApertureModel: "from-nominal-fno"` | FNO 4.080 / 5.115 / 6.337 with the stop moving with G2. No iris diameters are published. The fixed 5.6 mm iris gave f/4.08 / 4.96 / 6.14. Inferred radii are 5.78 / 5.60 / 5.60 mm. |
| `fstopSeries` / `maxFstop` | [4 … 22] / default 16 | [4.08 … 36] / 36 | The series now starts at the reachable nominal f/4.08. Production minimum aperture is f/22–36. |
| L1a glass | "Unmatched barium crown …" | LAC14 (HOYA) | Exact 1.69680 / 55.46. |
| L2c glass | BAFD7 / S-BAH27 / NBFD12 class | S-BAH27 (OHARA) | Exact 1.70154 / 41.24. BAFD7 is νd 41.15, which the 2026-06-24 log had misquoted as the patent value. |
| L2e, L4a glass | S-TIM22 (OHARA) | E-FD2 (HOYA) | Exact 1.64769 / 33.84. S-TIM22 is νd 33.79. |
| L3a glass | S-LAH55V (OHARA) | TAFD5G (HOYA) | Exact 1.83481 / 42.72. |
| Header / analysis | — | Rewritten notes. The analysis corrects the inventors, example-choice caveat, group travel, calculated close focus, BF note, aperture schedule, glass table (missing L2e row added; L2c is a barium flint, not a lanthanum flint), material count, and aberration readings. | Figs. 6A–6C show distortion of about −6.5 % at wide (21.2 mm), about +0.5 % at the middle station and about +1.8 % at tele. The old text said −3.5 % and +4 %. Spherical aberration and astigmatism were also restated. |

Retained unchanged: G1 and G2 rims. The Fig. 1 G1 rims are 16.0 / 12.3 / 11.6 mm against the stored 15.5 / 12.7–13.0 / 12.5–12.0 mm, all within 8 %. Fig. 1 draws G2 slightly smaller (L2a ≈ 7.2, L2b ≈ 6.7, L2d ≈ 6.1, L2e ≈ 6.0 mm) than the traced full-field bundle (7.3–7.5 mm). The stored values sit between the two, so there is no proof for a change. The L1c label PBH21 is an exact match (HOYA E-FDS1 is also exact). FCD1 for the ED pair is 0.02 off in νd. The ED `apd: "inferred"` values are unchanged.

### Checks on the result

The surface validator reports no errors, and the image-circle check shows 0 undersized. The real-ray trace at the patent ω (41.27 / 32.01 / 24.10°) and FNO shows no clipped axial marginal and no blocked chief ray. Ordinary partial vignetting of the full-field bundle is 10–17 % at S16/S17, 8 % at S21A and 1 % at S19. All 12 glass labels resolve compatibly except the non-catalog COP resin and cement. The builder derives zoom stop radii of 5.78 / 5.60 / 5.60 mm. The engine's paraxial half-field estimate at wide is 38.4°, limited by S2, against the patent's 41.27°. With about −6.4 % barrel distortion, the real chief ray clears S2 at 10.9 mm, so this is a paraxial-estimate limitation and not a rim defect. Headless live renders (local, wide / tele infinity, middle at 0.35 m, zoom-movement overlay) show G3 and L4a proportioned like Fig. 1. The production baseline showed the undersized G3.

### Open limitations

- The printed d23 = 9.90 mm and the paraxial BF (11.44 mm) remain unexplained.
- The close-focus gaps and the per-station iris are calculated, not published.
- The production-example identification (Example 1 over Example 2) is inferred.
- Off-axis ray views were not inspected interactively.
