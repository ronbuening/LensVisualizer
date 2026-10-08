# Audit Log — CANON EF-M 18-55mm f/3.5-5.6 IS STM

Patent: US 2013/0335830 A1, Numerical Embodiment 1, Figure 1

## 2026-08-25 — Screenshot, SD, movement, and glass audit

### Semi-diameters and diagram metadata

- Compared the supplied site render directly with Figure 1 at 600 dpi. Numerical Embodiment 1 publishes effective diameters for the optical surfaces; the data stores their half-values, so the exact table controls where the schematic and its movement arrows distort photogrammetry.
- Retained every SD. The surface-domain and image-circle audits pass, and no effective-diameter transcription error was found.
- Normalized all seven diagram unit labels to the same signed-parenthesis convention while retaining the patent roles: negative L4 focuses and negative LRb is the lateral IS subunit.

### Movement and glass

- Confirmed that all groups move objectward from wide to tele in the fixed-image-plane model. Endpoint shifts are 26.57 mm for L1, 6.97 mm for L2, 19.31 mm for L3/LRa/LRb/LRc, and 17.85 mm for L4.
- Confirmed that only L4 focuses, moving 1.155133 mm objectward at wide and 2.408447 mm objectward at tele in the constrained 0.25 m reconstruction.
- Twelve of 13 elements remain strict Sellmeier-covered. The patent-only `1.52996 / 55.8` LRc1 coordinate has no local catalog candidate within the Δn/Δν guard and remains explicitly unmatched rather than receiving a speculative glass identity.

## 2026-10-07 — Patent-audit queue: printed stop diameter

| Field | Before | After | Source |
|---|---|---|---|
| `STO` sd | 4.72 | 4.93 | Numerical Embodiment 1 surface data, row "17 (stop)": effective diameter 9.86 mm (patent p. 7, PDF p. 43) |
| `nominalFno` | 3.604671 / 4.264978 / 5.693923 | 3.60 / 4.27 / 5.69 | Numerical Embodiment 1 various data, F-number row, wide-angle / middle / telephoto (patent p. 7, PDF p. 43) |

- Read both rows on a 300 dpi render of PDF p. 43: `17 (stop)  ∞  2.00  9.86`, and F-number 3.60 / 4.27 / 5.69. The former 4.72 was the paraxial marginal-ray height at the stop (the printed F-numbers need 4.7261 / 4.7144 / 4.7233 mm paraxially), not the printed half-diameter, and the former station values were the paraxial F-numbers of that height. The header, aperture comment and analysis note said the printed 9.86 mm fails the patent's F-number data; that holds only paraxially and those passages are rewritten.
- By real marginal ray the printed f/3.60 needs a 4.9280 mm iris radius (print-rounding interval 4.9212–4.9349 mm), a 9.856 mm diameter, so the printed 9.86 mm agrees with the printed wide F-number. The engine's fixed iris is that 4.9280 mm; the authored `STO` sd does not size it.
- `zoomApertureModel: "fixed-iris"` is kept. With the fixed iris and the patent's clear apertures the stations trace f/3.6003 (limited by the rim of surface 14), f/4.2709 (rim of surface 13) and f/5.6856 (rim of surface 13): +0.01 %, +0.02 % and −0.08 % from the stated values, each rounding to the print. The patent prints one stop diameter and names zoom-dependent aperture control only as a possible modification (¶0093, patent p. 6, PDF p. 42).
- The match at the middle and telephoto stations rests on surface 13's printed 9.67 mm clear diameter (sd 4.835), not on the iris. Iris alone, the three printed F-numbers need 4.9280 / 4.9013 / 4.8923 mm (spread 0.73 %; no single radius lies inside all three rounding intervals, gap 0.50 %), and the fixed iris by itself passes f/3.600 / f/4.249 / f/5.652 by direct trace with the rims ignored. At the wide station the stated marginal ray meets surface 14 at 5.4756 mm against its 5.475 mm rim, which is why that rim is named as the limiter.
- Confirmed unchanged against the page: radius and effective diameter of all 25 surface rows (file sd = diameter / 2 on every row), the stop spacing (0.80 mm after surface 16, 2.00 mm before surface 18), and the variable gaps d3, d9, d11, d13, d19, d21. Computed EFL is 18.5707 / 27.8230 / 53.3485 mm against the printed 18.58 / 27.82 / 53.36.
- Left open: patent surfaces 26–29 (block G) remain folded into d25 as a 2.7277 mm air equivalent rather than authored as `rearPlates`; outside this row.
