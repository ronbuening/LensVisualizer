# Nikon 1 NIKKOR 32mm f/1.2 Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/WO2014061226A1.pdf`, Example 1 / Table 1 and paragraph 0079.

### Prescription, Focus, And Coating

- The data file remains aligned to Example 1: `f = 32.4 mm`, `FNO = 1.24`, `Y = 8.19 mm`, and the nine-element / seven-group all-spherical prescription.
- The patent's plane filter/sensor-cover stack remains excluded per corpus convention, with its effect folded into the air-equivalent back focus after surface 17.
- The floating-focus translation remains patent-derived: G1 and G2 move objectward with the published `d14`, `d17`, and `Bf` changes through the close `β = -0.07` state.
- The surface-13 anti-reflection coating discussion remains analysis-only context; it does not imply a geometric prescription change.

### Glass And APD

- Relabeled L13 from a soft HOYA TAF2-class note to coefficient-backed `J-LASF017 (Hikari, 795453)`. The patent row is `nd=1.79500`, `νd=45.31`, matching the local Hikari catalog entry exactly.
- No APD row is introduced. The lens has no ED/fluorite-like glass claim, and the patent gives no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` table for Example 1.
- The remaining glass labels continue to be ordinary catalog or close class matches. High-index status is descriptive for the lanthanum/dense-flint rows, not a special material flag.

### Semi-Diameters

- WO 2014/061226 A1 does not publish per-surface clear apertures or effective diameters for Example 1.
- Current SDs remain renderer clear-aperture estimates. They make rational sense against the patent figure: large f/1.24 front positives, a constricted stop at `sd = 7.41 mm`, and a rear re-expansion through the powered G2 doublet while maintaining edge thickness and sag clearance.

## 2026-09-23 — Rear plates modeled as `rearPlates`

- Read Table 1 and Table 2 (PDF pp. 16–17, paragraphs 0079–0081; image-only PDF, digits read from 150 dpi renders):
  filter group FL is three plane plates, surfaces 18–19 / 20–21 / 22–23, t = 0.50 / 1.59 / 0.70 mm, nd 1.5168,
  νd 63.88, with 1.11 / 0.30 / 0.70 mm air after each; d17 = 10.20 / 10.43 / 11.97 and Bf = 15.10 / 15.33 / 16.87
  (physical, d17 + 4.90). All three plates are `rearPlates` entries labeled J-BK7 (Hikari 1.51680 / 63.88, exact).
- The legacy BF 14.15109 was the independently traced paraxial focus, not the printed stack (printed air-equivalent
  14.14940). To keep that image plane, d17 = 14.15109 − Σt/n (1.83940) − 2.11 = 10.20169 / 10.43169 / 11.97169, 0.0017 mm
  over the printed d17.
- Paraxial check against the previous data: EFL identical; defocus unchanged (max |Δ| 1.3e-6 mm at all three focus
  keyframes). Physical track grows by Σt(1 − 1/n) = 0.951 mm and now matches the patent's TL = 52.60 mm to 0.0017 mm.
