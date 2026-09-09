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
