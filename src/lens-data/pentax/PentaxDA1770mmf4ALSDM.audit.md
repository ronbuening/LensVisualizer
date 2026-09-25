# Audit Log - Pentax SMC DA 17-70mm f/4 AL [IF] SDM

Patent: US 7,804,652 B2, Embodiment 4

## 2026-07-28 - Integration, semi-diameter, and glass audit

### Patent evidence

- Reviewed the ignored local source `patents/US7804652.pdf`.
- Compared the prescription with Figure 13 on PDF page 8.
- The patent does not publish clear-aperture values, glass names, line indices, or partial-dispersion data.

### Identity correction

- Normalized the display name from `PENTAX SMC PENTAX-DA ...` to the repository form
  `PENTAX SMC DA 17-70mm f/4 AL [IF] SDM`.

### Semi-diameter corrections

| Surface set | Before | After | Justification |
|---|---|---|---|
| 4 / 5 (isolated L3) | 21.0 / 19.6 mm | 15.0 / 14.0 mm | Restores the distinctly smaller third front element shown in Figure 13. |
| 26 / 27 / 28A / 29 / 30 / 31 (rear G5) | 9.4 / 9.6 / 9.6 / 9.6 / 9.7 / 9.9 mm | 11.0 / 11.2 / 11.2 / 11.2 / 11.3 / 11.5 mm | Restores the fuller rear-group outline shown in Figure 13. |

The revised values retain the authored axial and 0.60-field rendered rays at wide, middle, and tele states and pass
the surface-geometry and image-circle gates.

### Glass disposition

| Element | Patent coordinate | Result |
|---|---|---|
| L2 | 1.71300 / 53.9 (`713539`) | Added HOYA LAC8 as an exact code-equivalent formula-3 catalog source; this also represents the S-LAL8 class without asserting the patent vendor. |
| L4r / L16r | Resin rows | Remain Abbe-modeled; neither is an optical-glass catalog identity. |

The lens improves to 17/19 coefficient-backed material layers. The two remaining Abbe rows are the bonded resin
layers.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 4 (PDF p. 16) prints half-angles W = 40.3° / 21.8° / 11.6° and no image height; at those angles the traced chief
ray lands just beyond the APS-C corner (14.23 / 14.27 / 14.18 mm), so the design covers it. The 2026-07-28 entry cut
surfaces 4/5 from 21.0/19.6 to 15.0/14.0 mm to restore "the distinctly smaller third front element shown in Figure
13", and that rim then clipped the real chief ray (solved through the stop centre) at every station: 33.9° at wide
(11.33 mm, 80% of the corner), 16.5° at middle (74%) and 8.9° at tele (75%). Figure 13 (PDF p. 8, rendered at 600 dpi;
r1 to r31 94.97 mm = 2124 px, 0.0447 mm/px) shows that entry shrank the wrong element. L3 (surfaces 4/5, the second
tall meniscus) is drawn as tall as the front cemented pair, both faces meeting a flat edge about 545 px ≈ 24.4 mm from
the axis (the pair measures ≈ 25.5 mm); the distinctly smaller element is L4 (6A–8, ≈ 13.1 mm, matching its stored
13.2 mm). At the patent angles the chief ray needs surface 4 ≥ 20.00 and surface 5 ≥ 18.70 mm (middle station).
Restoring 21.0/19.6 would clear every station, but L3 takes the drawn 24.4 mm on both faces, the larger of figure and
floor.

| Surface | Before | After | Justification |
|---|---|---|---|
| 4 | 15.0 | 24.4 | Fig. 13 L3 rim ≈ 24.4 mm; the middle chief ray at the patent's 21.8° needs 20.00 mm |
| 5 | 14.0 | 24.4 | Fig. 13 L3 rim ≈ 24.4 mm; the middle chief ray at the patent's 21.8° needs 18.70 mm |

The validator accepts the values (L3 edge thickness 1.90 mm at 24.4 mm), the image-circle floor still reports nothing
undersized, and all three stations now reach the corner (40.2° / 21.7° / 11.6°, 100%) with every rim clear. The
2026-07-28 rear-G5 changes are unaffected. No aspheric surface changed, and the analysis file quotes no L3
semi-diameter.
