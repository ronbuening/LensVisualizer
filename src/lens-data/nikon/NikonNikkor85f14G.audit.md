# Audit Log - Nikon AF-S NIKKOR 85mm f/1.4G

Patent: US 8,767,319 B2

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US8767319.pdf`; local text confirms the queued rows.
- Updated L13 to `NBFD15 (HOYA)`, L22 to `S-TIM35 (OHARA)`, and L32 to `S-TIM22 (OHARA)`.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-09-08 — First-hosted audit, lens 22

- Original local `patents/US8767319.pdf`: title p.1, Figure1 p.3 at600dpi, Example1 numerical data and air-equivalent BF convention p.17. All20 radii/thicknesses and all ten glass coordinates agree; all surfaces spherical. Source group focal lengths and individual focal lengths independently reproduced.
- Source FNO1.450 replaces marketing1.4 in numerical iris, shortcut and spec; full field corrected28.6→28.666°. Marketing fields retained. Near endpoint uses published719.0mm object leg +126.370mm track =0.845370m. Matrix reproduces84.99993mm infinity EFL, −0.117538 near magnification and718.946mm object leg; retain published rounded719.0mm.
- Gr2 and stop move9.600mm objectward; both outer groups fixed. Source gaps and all geometry retained. BF41.050mm already air-equivalent; no cover/filter added or second conversion applied.
- **Follow-up:** Figure1 calibrated against85.320mm glass span implies front optical radius27.92mm, below29.31mm pupil radius required by85/1.45. Existing inferred working semi-diameters retained; do not claim exact source rims. Automated L21 result26.53mm is contaminated by a label leader and rejected. Rear drawn radius approximately15.1mm versus stored18.5mm remains part of this unresolved aperture/figure discrepancy.
- All ten named catalog counterparts resolve compatibly and are explicitly inferred. Corrected analysis L24 S-LAL14→S-LAL18 and removed unestablished production-identity, coating/bokeh and absence-of-APD claims. Existing isolated focal lengths agree at stored precision.
- Live production and corrected local infinity/near/half-focus/f16 inspected: f1.45, near85cm/EFL82.06mm, half1.69m with D6/D15 12.51/6.50mm; f16 stop3.08mm. Fixed rear group and moving stop visually agree with source.
- Three regressions pass, including source conjugates, rigid motion and compatible glass/untrimmed rims. Surface and image-circle audits pass. Full21–30 batch gates/commit pending.

## 2026-10-30 — Fresh source concave ends and complete glass review

- Directly inspected original `patents/US8767319.pdf`: Example 1 Figure 1 on PDF p. 3 at 600 dpi and all ten media/definitions on p. 17. The source explicitly defines d = 587.56 nm and air-equivalent BF. All ten source pairs, R/d, f/1.450 aperture, focus controls, inferred working optical caps and the already-air-equivalent 41.050 mm rear gap remain unchanged. No cover plate is added or converted twice.
- Reviewed every air-facing and cemented face. Source L12/L13 rear concave ends have distinct straight lands. S4 retains its existing 25.0 mm optical cap with `rimExtensionSd: 30`; S6 retains 22.0 with `rimExtensionSd: 23`. Those outer rims use the unchanged working front rims; no additional optical clipping is introduced. Source q is approximately 0.900±0.008 for S4 (native half-edge about 236 px) and 0.859±0.009 for S6 (about 202 px), at approximately 10.5 native px/mm, 300 ppi scan. Adopted q = 0.833333/0.956522 and lands 5.0/1.0 mm retain the prior optical endpoints rather than claiming their numerical correspondence to the drawing.
- The existing absolute figure/aperture discrepancy remains: figure front ≈27.9 mm is below the ≈29.31 mm source entrance-pupil radius. Therefore the new land outline is qualified on the retained working scale, not claimed as exact source mechanical apertures. Other faces retain their prior caps with no further resolved usable land; leader-line contamination of L21 remains rejected.
- All ten source d-line pairs retain compatible current coefficient curves and qualified counterpart labels. No source C/F/g or numerical partial dispersion is published; no supplier/melt/APD identity or catalog-only spectral override is inferred. Absence of numeric APD evidence is not a measurement of zero anomaly.
- Focused surface, image-circle, stated-aperture and field checks pass; catalog consistency passes. Nine actual SVG focus-grid views were inspected with connected compound outlines and no automatic rim trimming. Zoom columns repeat this fixed-focal-length lens.
