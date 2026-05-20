# Audit Log — Nikon NIKKOR 28mm f/2.8 (28Ti)

Patent: US 5,528,428, Embodiment 3 / Table 3  
Catalog version: local working tree, 2026-05-19

## 2026-05-19 — Six-digit glass-code backfill review

### Patent evidence

Reviewed `patents/US5528428.pdf`, Embodiment 3 / Table 3. The relevant six-digit/code-only row is:

| Element / surface | Patent nd | Patent νd | Disposition |
|---|---:|---:|---|
| L4 / S9 | 1.79668 | 45.4 | No exact public coefficient-backed catalog match found; retained as `797454`. |

### Catalog-search disposition

- Searched public OHARA, HOYA, SCHOTT, Nikon/Hikari, and refractiveindex.info-backed catalog data for `797454` and the nd/νd pair 1.79668 / 45.4.
- Nearby modern lanthanum glasses such as OHARA S-LAH64, S-LAH59, and HOYA TAF-family entries do not round-trip the patent row closely enough to be a defensible relabel.
- The label now uses an unbroken six-digit code for future generated-report matching.

### Changes made

- Updated `Nikon28Ti28mmf28.data.ts` from `797/454` to `797454 — discontinued lanthanum glass`.
- Updated `Nikon28Ti28mmf28.analysis.md` to use the unbroken code and document that Hikari/Nikon was also checked.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Re-opened `patents/US5528428.pdf` and checked the working data against Embodiment 3 / Table 3.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `S-NSL3 (OHARA)` | `S-TIL6 (OHARA)` | Stored nd/vd matches the OHARA S-TIL6 catalog row. |
| L2 / S3 | `TAFD25 (HOYA)` | `840433 - lanthanum flint...` | Patent nd=1.84042, vd=43.30 has no exact public coefficient-backed catalog match; retained as an unbroken six-digit code for future upgrade. |
| L3 / S5 | `E-FD4 (HOYA)` | `E-FD2 (HOYA)` | Stored nd/vd matches HOYA E-FD2 rather than E-FD4. |

### Remaining disposition

- L2 and L4 remain code-backed unresolved rows after public catalog search.
