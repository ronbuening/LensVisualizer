# Audit Log — Nikon AI AF Zoom-Nikkor 20-35mm f/2.8D IF

Patent: US 5,276,553 A, Example 1 / Figure 1.

## 2026-08-08 — Patent-figure SD, diagram-label, name, and glass audit

- Compared the wide-state site section directly with Figure 1 on patent page 2. The dominant L11 front diameter,
  L12–L14 taper, three cemented components, and rising L41–L44 rear envelope agree with the drawing within the
  figure-measurement tolerance. No additional semi-diameter change was supported.
- Replaced runtime element numbers with the patent's L11–L44 source identifiers, retaining `a` / `b` suffixes only
  where the optical model must distinguish the two glasses in a source-labeled cemented component.
- Corrected the product display name to Nikon's `AI AF Zoom-Nikkor 20-35mm f/2.8D IF` designation.
- Rechecked every authored `nd` / `νd` pair and on-diagram rounded `νd` badge. Twelve of fourteen elements resolve to
  coefficient-backed catalog equivalents. L31a (`1.74810 / 52.3`) and L44b (`1.86074 / 23.0`) remain explicitly
  unmatched because no reviewed public catalog row safely reproduces both coordinates.

## 2026-08-11 - J-SFH2 catalog recovery

- Rendered local `patents/US5276553.pdf` page 8 and visually confirmed Example 1 surface 24 at
  `nd = 1.86074`, `vd = 23.0` (patent code 861230).
- The recovered Hikari J-SFH2 row is `1.86074 / 23.08`, code 861231, matching the patent coordinate within its printed
  Abbe precision.
- Relabeled L44b as a J-SFH2 catalog equivalent. Thirteen of fourteen elements now have trusted curves; L31a remains
  unmatched. No prescription, zoom, focus, or semi-diameter values changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Hikari's official 2022-07-01 catalog supplies discontinued E-LAKH1 at code `748523`,
  `nd = 1.748099`, `νd = 52.304982`, exactly reproducing L31a's patent coordinate within printed precision.
- Relabeled L31a as a supplier-neutral E-LAKH1 catalog equivalent and synchronized the analysis. All fourteen
  elements now have trusted curves; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 5,276,553 Table 1 (PDF p. 8) prints f = 20.5~34.0, FN = 2.89 and 2ω = 93.1°~64.6°; the paraxial wide field
(ω = 46.55°) reaches 20.5·tan 46.55° = 21.63 mm, the FX corner. The estimated front rims clipped the real chief ray
(solved through the stop centre) at the wide end from 43.74°, leaving the analysis field at 87% of the 21.65 mm
corner; the 28 mm and 34 mm stations were already at 100%. The traced wide corner chief ray (47.68°, past the
paraxial 46.55° because of the design's barrel distortion) needs surface 1A ≥ 20.65, 3 ≥ 13.74, 4 ≥ 12.60,
5 ≥ 12.46, 6 ≥ 12.14 and 7 ≥ 11.49 mm. Values are floor + ~0.5 mm rounded up. Surface 2, the deep rear of L11,
carries that chief ray at 15.93 mm under its 16.0 mm rim, so it is scaled with surface 1A (16.5 mm, under the 64.2°
rim-slope limit at 17.47 mm); surface 8 is scaled with surface 7. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 20.5 | 21.2 | wide corner chief ray 20.65 mm + clearance; slope rises monotonically to 25.4 mm (no turnover) |
| 2 | 16.0 | 16.5 | L11 scaled with surface 1A (×1.034); corner chief ray 15.93 mm |
| 3 | 12.5 | 14.3 | wide corner chief ray 13.74 mm + clearance |
| 4 | 11.5 | 13.2 | wide corner chief ray 12.60 mm + clearance |
| 5 | 11.3 | 13.0 | wide corner chief ray 12.46 mm + clearance |
| 6 | 10.8 | 12.7 | wide corner chief ray 12.14 mm + clearance |
| 7 | 11.0 | 12.0 | wide corner chief ray 11.49 mm + clearance |
| 8 | 11.0 | 12.0 | L14 scaled with surface 7 (×1.091); corner chief ray 10.71 mm |

The validator accepts the new values, the traced edge reaches 21.65 mm at every station (Wide 47.68°, 28 mm 37.89°,
Tele 32.38°; 100%), and the image-circle floor still reports nothing undersized. In the analysis, the surface-1A rim
departure is now +1.283515 mm at 21.2 mm (was +1.097743 mm at 20.5 mm) and the largest rim-slope angle is 58.2248°
(surface 2; was 55.5236°); the minimum edge thickness (1.138544 mm) and largest cross-gap intrusion (0.884388) are
unchanged. Its former smallest tested ray-to-rim clearance (0.517496 mm) could not be reproduced from the stated ray
set, so it was replaced by traced values: the corner chief ray clears every rim by at least 0.513 mm (surface 7,
wide) and the default on-axis and 0.6-field rays by at least 0.796 mm.
