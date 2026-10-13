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

## 2026-10-04 — Patent filter left out as optional

- Patent check (US 3,524,697, first embodiment): r8 and r9 are both flat (element L5), d8 = 1.9, nd 1.51743, νd 58.5,
  with 3.2 before and 6.4 after in patent units, just ahead of the stop. Fig. 1 draws it.
- The patent says "L5 is an optional filter". Filters the source calls optional are not modeled, so the file is
  unchanged: no plate, and the r7-to-r10 gap keeps the plate's air-equivalent thickness (t/n), which preserves the
  published first-order values. A literally empty slot would be 0.39 mm longer at the file's scale.
- The header now gives that reason in place of "built-in filter excluded per project data rules".
