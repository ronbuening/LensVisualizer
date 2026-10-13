# Audit Log - CANON RF 20mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250389929-A1.pdf`. The Numerical Example 2 table publishes only surface number, radius, thickness, refractive index, and Abbe number; it does not include clear apertures or effective diameters.
- Fig. 3 shows the corresponding fast wide-angle section: a large three-negative front portion within L1, a stop near the middle of L1, a moving positive L2 focus group, and a smaller negative rear L3 group.
- Stored SDs follow that envelope: L1 stays broad at roughly 13.4-15.5 mm before the stop, the stop is 13 mm, L2 re-expands through 15-18 mm, and the final L3 doublet remains in the 16.8-18.4 mm range.
- No SD values changed. Current values remain renderer-conservative inferred apertures constrained by sd/|R|, aspherical slope, element SD ratio, edge thickness, and signed cross-gap sag intrusion.

## 2026-07-30 - Unsafe named-token cleanup

- Rechecked Numerical Example 2 G4 at nd=1.75500 and νd=52.3. The patent does not name a supplier.
- Replaced the unresolved `H-LaK53A (CDGM)` attribution with Schott `N-LAK33B`, the coefficient-backed catalog equivalent that exactly reproduces the 755523 coordinate.
- Synchronized the analysis and source list; no prescription geometry or semi-diameter changed.

## 2026-07-30 - H-ZBaF4 compatibility rejection

- Added CDGM H-ZBaF4 to the project catalog from CDGM's June 2022 official datasheet: code `664355`, `nd = 1.664260`, `νd = 35.48`, `PgF = 0.5895`, and `ΔPgF = +0.0042`.
- Rechecked G10's patent Table 2 row at `nd = 1.66565`, `νd = 35.6`, `θgF = 0.5824`, and `ΔθgF ≈ -0.0026`. Although H-ZBaF4 is close in the d-line coordinate, its partial dispersion has the opposite sign and is not a safe spectral substitute.
- Marked G10 and the repeated-coordinate G16 row explicitly unmatched so the resolver preserves the patent Abbe/partial-dispersion fallback instead of applying H-ZBaF4's incompatible Sellmeier curve.
- No prescription geometry or semi-diameter changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 2's data (PDF p. 29) print f = 20.60 mm, ω = 42.54° and Y = 18.90 mm (87% of the 21.65 mm full-frame corner);
the angle is the paraxial atan(Y/f), and FIG. 4A (PDF p. 5) plots to ω = 46.4°, where the traced chief ray reaches
18.90 mm. The estimated front rims clipped the real chief ray (solved through the stop centre) at surface 1 from 40.9°,
leaving the field at 16.15 mm (75% of the corner). Passing Y needs surface 1 ≥ 17.76 and surface 2 ≥ 14.42 mm; the corner
(51.6°) needs surface 1 ≥ 19.91, surface 2 ≥ 15.59 and surface 3 ≥ 14.74 mm, and every other rim already clears it
(surface 27 at 16.45 of 16.8 is the closest). The rims were sized to the corner because FIG. 3 (PDF p. 4), scaled on the
117.5 mm surface 1-to-image track, clearly draws them larger: surface 1 ≈ 21.7, surface 2 ≈ 16.9, surface 3 ≈ 16.9 and
surface 4A ≈ 14.9 mm. That measurement supersedes the 2026-07-04 review's reading of a 13.4–15.5 mm L1 envelope. G1 and
G2 are strong menisci, so partners were not scaled; surface 2 was set 0.4 mm above its 16.1 mm floor-plus-clearance
value, still under the figure, to keep G1's front/rear ratio within the 1.25 the analysis note cites.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 15.5 | 20.5 | corner chief ray 19.91 mm + clearance (FIG. 3 ≈ 21.7) |
| 2 | 13.4 | 16.5 | corner chief ray 15.59 mm + clearance, G1 ratio kept ≤ 1.25 (FIG. 3 ≈ 16.9) |
| 3 | 13.8 | 15.3 | corner chief ray 14.74 mm + clearance (FIG. 3 ≈ 16.9); surface 4A (chief ray 12.84 mm) unchanged |

The validator accepts the new values, the traced field now reaches the corner with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed, and the analysis note quotes none of
these semi-diameters, so it is unchanged.
