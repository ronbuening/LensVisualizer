# Audit Log — Nikon Fisheye-Nikkor 6mm f/5.6

Patent: US 3,524,697, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L8 / S11 | `glass` | `Unmatched (lanthanum flint, 768/465 patent melt)` | `768465 — lanthanum flint patent melt (nd=1.76764, νd=46.5; no exact public catalog match)` | Local patent `patents/US3524697.pdf`, Example 1 row for r13 lists nd=1.76764 and νd=46.5. The stored values match. |

### Catalog-search disposition

- Searched public manufacturer/refractiveindex.info-style sources for `768465` and the exact 1.76764 / 46.5 pair.
- No defensible coefficient-backed catalog match was found; prior NBFD3-style interpretation remains rejected because it belongs to a different code family.

### Analysis sync

- Updated the L8 text and table from `768/465` to `768465`, preserving the unresolved disposition.

## 2026-08-21 — Hikari J-LASFH2 catalog-equivalent recovery

- Visually rechecked local `patents/US3524697.pdf`, PDF page 4. Example 1 prints L8 at `nd = 1.76764`, `νd = 46.5`.
- Hikari J-LASFH2, added to the project after the earlier review, evaluates to `1.766840 / 46.780` (`Δnd = -0.000800`, `Δνd = +0.280`).
- Relabeled L8 as a qualified J-LASFH2 spectral proxy while retaining patent code `768465` and leaving Nikon's production melt unspecified. The rejected NBFD3 identification remains rejected; geometry and APD metadata are unchanged.
