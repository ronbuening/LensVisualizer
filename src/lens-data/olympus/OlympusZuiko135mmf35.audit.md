# Audit Log — OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5

Patent: US 3,838,911, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US3838911.pdf`.
- The prescription confirms L2 at nd = 1.48749, νd = 69.8.

### Glass disposition

| Element | Before | After | Disposition |
|---|---|---|---|
| L2 | `FK / FSL low-dispersion crown class (≈487698...)` | `487698 — FK/FSL low-dispersion crown class...` | No exact modern coefficient-backed match found; kept unresolved with an unbroken code. |

### Catalog-search disposition

- Public FK/FSL equivalents around FC5, N-FK5, and S-FSL5 sit near code `487704`, not the patent's `487698`.
- Updated the data and analysis label to avoid forcing a modern catalog name while preserving the six-digit code for future backfill.

## 2026-08-21 — S-FSL5 catalog-equivalent recovery

- Visually rechecked local `patents/US3838911.pdf`, PDF page 4. Example 1 prints L2 at `nd = 1.48749`, `νd = 69.8`.
- The current OHARA S-FSL5 coefficient row evaluates to `1.487490 / 70.236`, within `Δnd = 0.000000` and `Δνd = +0.436` of the patent row.
- Relabeled L2 as an S-FSL5 catalog-equivalent curve while retaining code `487698` and leaving the production supplier unspecified. Geometry and APD metadata are unchanged.
