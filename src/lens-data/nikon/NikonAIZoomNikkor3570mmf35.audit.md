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

## 2026-10-28 — Stop plane checked on the paraxial stop rule: it stays centred

The patent identifies no stop surface, so the flat stop centred in the fixed d₁₅ gap (3.9 mm, constant through zoom and focus) is synthetic. r₁₅ (R 27.99 mm, rim 13.2 mm) sags 3.308 mm at its rim, so its cap crosses that plane. Under the earlier stop rule the derived tele iris (10.705 mm) reached past that crossing, and the stated beam could not reach the stop (`STO (noBracket)`). Moving the plane behind r₁₅'s cap was considered and not kept, because on the stops sized by paraxial EPD = F/N (#933) the iris stays in air there.

| Station | Wide-open iris | Smallest iris | Clearance to r₁₅'s cap | Clearance to r₁₆ |
|---|---:|---:|---:|---:|
| 36.02 mm | 6.912 mm | 1.100 mm | 1.08 mm | 1.89 mm |
| 68.79 mm | 9.675 mm | 1.539 mm | 0.22 mm | 1.82 mm |

The clearances are the least over the iris stroke, from the smallest radius the aperture control reaches to the wide-open one, so `__tests__/src/lens-data/irisInAir.test.ts` passes this file. `audit:aperture` traces f/3.50 at both stations, iris-limited. Moving the plane behind the cap (surface 15 `d` 3.4 mm, `STO` `d` 0.5 mm) would shrink the derived irises to 6.539 and 9.250 mm: F/N fixes the paraxial entrance pupil, and the paraxial marginal ray is lower 1.45 mm further into the converging beam. It would also cut the wide station's analysis half field from 30.81° to 30.14°.

Rim margins against the on-axis ray to the iris rim (`audit:aperture --raise`), the least at each station:

| Station | Ray to the iris rim, launch height | Least margin | All rims |
|---|---:|---|---|
| 36.02 mm | 4.948 mm | 61.4 % (surface 11, 14.5 against 8.99 mm) | 61–368 % |
| 68.79 mm | 9.050 mm | 22.7 % (surface 12, 14.5 against 11.82 mm) | 23–155 % |

`audit:image-circle` reports nothing undersized. `audit:field-coverage`: at 36.02 mm the analysis half field is 30.81°, reaching 97.9 % of the 21.65 mm corner, where surface 1's rim (sd 22.5 mm) clips the chief ray; at 68.79 mm it is 17.36°, reaching the corner. No value in this file changed.
