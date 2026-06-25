# Audit Log — Pentax D FA* 50mm f/1.4 SDM AW

Patent: US 2019/0250367 A1, Example 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US20190250367A1.pdf`.
- Reviewed the first drawing sheet; it confirms the front G1/G2 modified-Gauss layout, stop placement, final asphere, and cover-glass treatment represented in the data file.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L12 / S3, L14 / S5 | `Short-flint / KZFS-class glass` | `S-NBM51 / N-KZFS4 class (613443)` | Catalog-backed code match for nd = 1.61340, vd = 44.3. |
| L13 / S4 | `High-index tantalum/lanthanum dense flint class` | `TAFD35 (HOYA, 911353; patent rounds vd to 35.2)` | HOYA catalog row matches the high-index patent coordinate within rounding. |
| L22 / S10 | `Anomalous partial-dispersion phosphate crown class` | `S-PHM52 (OHARA, 618634)` | Public catalog match also supplies the mild positive partial-dispersion estimate. |
| L23 / S12 | `Lanthanum dense crown/flint class` | `S-LAH55 / TAFD5F class (835427)` | Catalog-backed high-index lanthanum class. |
| L43 / S21 | `High-index lanthanum dense flint class` | `S-LAH58 / TAFD30 class (883408)` | Catalog-backed high-index lanthanum class. |
| L51 / S24 | `Moldable lanthanum crown class` | `773495 - moldable lanthanum crown class` | No exact public Sellmeier row; retained code-backed future-upgrade label. |

### APD and SD review

- L22 `dPgF` was updated from 0.003 to 0.0052 from the S-PHM52 catalog match.
- L32 and L42 retain `apd: "patent"` with `dPgF: 0.0144`; the patent explicitly tabulates the partial-dispersion condition for the G2b ED positive.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged after drawing review.
