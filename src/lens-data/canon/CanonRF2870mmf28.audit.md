# Audit Log - Canon RF 28-70mm F2.8 IS STM

Patent: US 2024/0329367 A1

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L8 / S15 from code-only `770297` to `NBFD29 (HOYA, 770297)`.
- `npm test -- dispersion` and `npm run generate:glass-reports` passed; this lens is now fully Sellmeier-covered.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20240329367A1.pdf`; local text confirms the queued rows.
- Updated surface 8 to `S-LAH89 (OHARA)` for nd=1.85150, vd=40.80.
- Updated surface 26 to `S-LAM2 (OHARA)` for nd=1.74400, vd=44.80.
- Converted surface 15 to a code-only `770297` annotation in this May pass; the 2026-06-04 source pass later resolved it as HOYA NBFD29.
