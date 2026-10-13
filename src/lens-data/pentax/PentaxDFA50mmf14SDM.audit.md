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

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read FIG. 31 (Example 1, PDF page 17, sheet 16) at 160 dpi: surfaces 26–27 are a plane plate, 2.000 mm, nd 1.51633,
  νd 64.1; Various Data prints D25 = 37.310 / 46.706 (infinity / short distance) and BF = 1.00 at both. ¶0060 names the
  plate CG. Printed 37.310 + 2.000/1.51633 + 1.00 reproduces the legacy 39.628974 exactly.
- Surface 25A and its `var` row now store the physical D25; `rearPlates` holds CG as S-BSL7 (catalog-compatible with
  1.51633 / 64.1) with gapAfter 1.00 mm. Paraxial check against the previous data: EFL identical, defocus unchanged at
  both focus states (worst difference 1e-7 mm). Physical track grows by 0.681 mm to 149.237 mm, matching the patent's
  printed total lens length of 149.24 mm.
