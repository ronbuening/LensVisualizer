# Nikon AF-I NIKKOR 600mm f/4D IF-ED Patent Audit

Patent: JP H04-238311 A, Example 5

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04238311_A.pdf`; Figure 9 on PDF page 10 is the controlling optical section.
- The authored front-group diameter, narrowing focus group, rear group, stop, and filter spacing follow the schematic proportions. No SD change was justified; the roughly 79mm front semi-diameter is also consistent with the f/4.11 entrance-pupil requirement.
- Retained all patent prescription and glass-coordinate values. HIKARI `E-LAF11` now supplies a compatible curve for L13 at `1.75692 / 31.7` without asserting a production melt.
- Romanized the inventor metadata from `佐藤 進` to `Susumu Sato`, retaining the Japanese form in the analysis. This resolves the metadata test failure and matches the same inventor's romanization in JP H04-294310 A.
- Normalized the display name to `NIKON AF-I NIKKOR 600mm f/4D IF-ED`.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied site screenshot directly with Figure 9. The front collector, compact focus group, and single rear element remain a close silhouette match; no additional SD edit was justified.
- Confirmed the constrained production-distance order: G2 moves `+11.2563mm` imageward while G1 and G3 remain fixed.
- Added the missing `FOCUS` role to the G2 diagram label and marked L11/L12/L31 as the three inferred ED positions.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 5 on PDF page 6 (printed p. 58) at 250 dpi: surface 18 d = 65.20 to the filter; surfaces 19–20 are the
  fixed filter F, 2.00 mm, nd 1.51680, νd 64.1; the constant table prints 20 → image 135.31, and the file keeps the
  corrected focus-table d20 = 135.3069 mm as `gapAfterMm`. STO (inferred 22.3 mm after surface 18) now stores the
  physical 42.9 mm to F; the front protective plate (surfaces 1–2) stays omitted.
- Glass label J-BK7A (HIKARI, matching the file's other catalog equivalents; `resolveCompatibleGlass` accepts it at
  1.51680 / 64.1).
- Paraxial check against the previous folded data: EFL identical, defocus unchanged at both focus keyframes
  (`42.9 + 2/1.5168 + 135.3069` equals the old 179.5254654 mm exactly). Physical track grows by 0.681 mm to 428.026 mm.
