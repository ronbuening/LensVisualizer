# Audit Log - CANON RF 20mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250389929-A1.pdf`. The Numerical Example 2 table publishes only surface number, radius, thickness, refractive index, and Abbe number; it does not include clear apertures or effective diameters.
- Fig. 3 shows the corresponding fast wide-angle section: a large three-negative front portion within L1, a stop near the middle of L1, a moving positive L2 focus group, and a smaller negative rear L3 group.
- Stored SDs follow that envelope: L1 stays broad at roughly 13.4-15.5 mm before the stop, the stop is 13 mm, L2 re-expands through 15-18 mm, and the final L3 doublet remains in the 16.8-18.4 mm range.
- No SD values changed. Current values remain renderer-conservative inferred apertures constrained by sd/|R|, aspherical slope, element SD ratio, edge thickness, and signed cross-gap sag intrusion.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-30 - Unsafe named-token cleanup

- Rechecked Numerical Example 2 G4 at nd=1.75500 and νd=52.3. The patent does not name a supplier.
- Replaced the unresolved `H-LaK53A (CDGM)` attribution with Schott `N-LAK33B`, the coefficient-backed catalog equivalent that exactly reproduces the 755523 coordinate.
- Synchronized the analysis and source list; no prescription geometry or semi-diameter changed.

## 2026-07-30 - H-ZBaF4 compatibility rejection

- Added CDGM H-ZBaF4 to the project catalog from CDGM's June 2022 official datasheet: code `664355`, `nd = 1.664260`, `νd = 35.48`, `PgF = 0.5895`, and `ΔPgF = +0.0042`.
- Rechecked G10's patent Table 2 row at `nd = 1.66565`, `νd = 35.6`, `θgF = 0.5824`, and `ΔθgF ≈ -0.0026`. Although H-ZBaF4 is close in the d-line coordinate, its partial dispersion has the opposite sign and is not a safe spectral substitute.
- Marked G10 and the repeated-coordinate G16 row explicitly unmatched so the resolver preserves the patent Abbe/partial-dispersion fallback instead of applying H-ZBaF4's incompatible Sellmeier curve.
- No prescription geometry or semi-diameter changed.
