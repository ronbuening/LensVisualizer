# Audit Log - Nikon AI-S Zoom-Nikkor 35-70mm f/3.5

Patent: US 4,266,860, Second Embodiment / Claim 8

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked the Second Embodiment and Claim 8 against the current data file. No data changes were made in this pass.
- Retained unresolved/class-only rows:
  - `603/425 barium flint; Sumita K-BaSF5-equivalent`.
  - `Unmatched 595/356 light flint class`.
  - `Unmatched 511/509 light crown class`.
  - `648/338 dense flint; SF12 / FD12 class`.
- Retained the existing catalog/class labels for the remaining rows: `S-LAL12`, `S-LAL8`, `S-BSM16 / SK16`, `S-TIH6 / SF6`, and `N-BK7 / BK7-type`.

### Phase 2 - Geometry and SD review

- Confirmed the wide/tele back focal distances and variable gaps match the patent model used by the data file.
- The patent does not identify an aperture-stop surface or publish a clear-aperture table. The existing synthetic stop split in the patent `d15` gap remains documented and appropriate for rendering.
- Retained the existing SDs. They are renderer-safe estimates, not mechanical apertures, and they remain rational for the front positive group, moving zoom groups, and narrowed stop area.
- Retained the documented close-focus model: `D6` uses patent close-correction data and `D8` is paraxial-derived because the patent does not tabulate those values directly.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

## 2026-07-30 - SUMITA KF8 coefficient recovery

- SUMITA's discontinued-inclusive all-glass catalog publishes KF8 at code `511509`, nd = 1.51118, νd = 50.9.
- Relabeled L7 from an explicit unmatched light-crown annotation to an exact KF8 catalog equivalent; the production supplier remains unspecified.
- The other unresolved rows and all prescription geometry remain unchanged.

## 2026-08-18 — Element 4 FF5 coefficient assignment

- Visually rechecked `patents/US4266860.pdf`, PDF page 9, Example 1. Element 4 remains patent code `595356`, `nd = 1.594633`, `νd = 35.75`.
- SUMITA FF5 is within the runtime catalog-equivalent window (`Δnd = -0.002367`, `Δνd = -0.15`).
- Relabeled element 4 as an FF5 optical equivalent while leaving the production supplier unspecified. No prescription or zoom geometry changed.

## 2026-10-27 — Synthetic stop plane behind r₁₅'s clear cap

The patent identifies no stop surface, so the flat stop in the fixed d₁₅ gap (3.9 mm, constant through zoom and focus) is synthetic. Centred, it sat 1.95 mm behind r₁₅, inside r₁₅'s cap: r₁₅ (R 27.99 mm, rim 13.2 mm) sags 3.308 mm. At the tele station the 10.7 mm f/3.5 iris reached past where the cap crosses that plane, and the stated beam could not reach the stop (`audit:aperture`: `trace`, 68.79 mm: f/3.50 traces f/3.62, `STO (noBracket)`).

| Field | Before | After | Basis |
|---|---:|---:|---|
| Surface 15 `d` | 1.95 mm | 3.4 mm | r₁₅ sag 3.308 mm at its 13.2 mm rim, rounded up to 0.1 mm |
| `STO` `d` | 1.95 mm | 0.5 mm | Preserves d₁₅ = 3.9 mm |

This is the construction used for the Vivitar Series 1 zoom (#774): the plane sits at the preceding surface's sag at its retained clear radius, rounded up to the next 0.1 mm, and the vertex-to-vertex air gap is preserved. Splitting a neutral air transfer leaves EFL, BFD and every power unchanged. The plane is a sequential-model choice, not a measured blade position. r₁₆ (R −370.855 mm) sags 0.169 mm at 11.2 mm, so its cap stays 0.33 mm behind the plane.

Result: both stations now trace f/3.50, iris-limited (`audit:aperture`). Derived irises are 6.810 mm at 36.02 mm (was 7.212) and 10.171 mm at 68.79 mm (was 10.705); half fields are 30.14° and 17.36° (were 30.81° and 17.36°). No rim changed.
