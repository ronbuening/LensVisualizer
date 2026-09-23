# Patent and glass audit

## 2026-09-23

Source: local `patents/US2397565.pdf`, PDF p. 1 (Fig. 1 cross-section and Fig. 2 table for Example 1), a 300 dpi
CCITT scan. Every radius, thickness and N/V row of Fig. 2 was re-read against the data: all eleven radii and ten
spacings reproduce the ×0.52 scale exactly (the s3 = 10.9 split 4.420/1.248 mm around the stop), and all seven
index/dispersion pairs match. Computed EFL 52.021 mm and BFD 26.386 mm with zero stored defocus. Element focal
lengths agree with thick-lens values.

Figure scale: the R1 vertex (page x ≈ 659 px) to R11 vertex (≈ 1521 px) span of 862 px corresponds to 40.924 mm of
scaled axial length, giving 0.0475 mm/px. The upper side was measured (the lower side carries the R-number leaders);
label leaders above II/III were excluded by comparing both sides by eye.

### Semi-diameters

The floor for every surface is the engine's wide-open axial marginal ray: the paraxial entrance-pupil radius 17.340 mm
traced exactly gives heights of 17.34, 16.70, 15.61, 13.37, 12.69, 12.51, 10.94, 10.955 (stop), 10.99, 10.85, 9.85 and
9.42 mm at surfaces 1–11. Fig. 1 draws the front components smaller than that floor allows, so surfaces 1–3 were
brought down to just above it rather than to the drawn rim.

| Surface | Before | After | Fig. 1 | Evidence / reason |
|---|---:|---:|---:|---|
| 1 | 18.3 | 17.6 | 16.3–16.7 | Figure draws I at about 16.5 mm; floor 17.34 |
| 2 | 17.6 | 17.0 | 16.3–16.7 | Kept coherent with surface 1; floor 16.70 |
| 3 | 16.5 | 15.9 | 14.8–15.1 | Flat rim of II; floor 15.61 |
| 4 | 14.15 | 14.15 | 13.3–13.4 | Within ~6 %; retained |
| 5 | 12.7 | 12.9 | 13.3–13.4 | Air-lens edge; raised to the gap-sag limit (2.035 of 2.059 mm), previous value cleared the marginal ray by only 0.01 mm |
| 6, 7 | 13, 12 | 13, 12 | 12.8–12.9, 11.5–11.8 | Within ~5 %; retained |
| STO | 10.5126 | 10.96 | 10.7–10.9 | Records the real-ray stop radius the engine derives for f/1.5 (10.955 mm); the old value was the paraxial calibration |
| 8 | 12 | 11.4 | 11.2–11.3 | Cylindrical rim of V; floor 10.99 |
| 9 | 12.8 | 11.4 | 11.2–11.3 | R9 ends at V's rim, VI steps out beyond it; floor 10.85 |
| 10, 11 | 14, 14 | 14, 14 | 13.5–13.8 | Within ~4 %; retained |

Checks on the result: surface geometry validator clean; minimum edge thickness 0.45 mm (VII, unchanged); maximum rim
angle 63.9° (surface 4). With the stop at 10.955 mm the exact axial marginal ray clears every surface. For an assumed
24×36 field (Y = 21.6 mm, ω = 22.7°) the chief ray clears every surface; the oblique bundle is vignetted at the front and
rear rims, which is ordinary. The engine still derives FOPEN 1.5 and a physical stop of 10.955 mm; the image-circle check
is skipped because `imageFormat` is unset.

### Glass

| Element | N / V | Before | After | Match |
|---|---|---|---|---|
| I, III | 1.638 / 55.5 | SK18/BSM18-class, unresolved | K-SK18 catalog proxy | SUMITA K-SK18 1.63854 / 55.50 |
| V | 1.670 / 47.2 | BAF10-class, unresolved | S-BAH10 catalog proxy | OHARA S-BAH10 1.67003 / 47.23 |
| VI | 1.541 / 47.5 | Unmatched (541472 family) | S-TIL2 catalog proxy | OHARA S-TIL2 1.54072 / 47.23 (Δνd 0.27) |
| II | 1.617 / 38.5 | Unmatched | unchanged | Nearest F9 (HOYA) 1.62045 / 38.09 is too far |
| IV, VII | — | SF5 class, TAC4 class | unchanged | Already resolve to SF5 and TAC4 |

### Display name

"KODAK EKTAR 52mm f/1.5" is retained. The only product evidence is secondary: a collector specimen page describes a
Kodak Ektar 52 mm f/1.5 credited to Schade and US 2,397,565, adapted to Leica screw mount, with no internal iris and a
possible X-ray/fluorographic origin. No Kodak catalog or engraving record was found that would support a different
name, so the name and the unset mount/format are left as they were.

Open limitations: stop position and all semi-diameters are figure/ray-derived, not published; the D-line N/V values are
stored as d-line; no focus data exists; the product correlation remains unconfirmed by a Kodak primary source. The live
browser check could not be run in this pass because the browser pane was unavailable.
