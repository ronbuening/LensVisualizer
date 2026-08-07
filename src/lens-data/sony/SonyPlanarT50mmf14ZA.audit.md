# Audit Log — Sony Planar T* 50mm F1.4 ZA SSM

Patent: US 2014/0071331 A1, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20140071331A1.pdf`.
- Example 4 row confirmed L2 / surface 3 nd = 1.592703, vd = 35.5.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `E-FD5 class (HOYA/HIKARI equivalent, 593/355)` | `S-FTM16 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L2 element paragraph and glass table.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/US20140071331A1.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index/catalog labels, APD metadata, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-08-07 - Near-complete glass opportunity

- Visually rechecked Example 4, Table 10 in local `patents/US20140071331A1.pdf`.
- Replaced unsupported HIKARI names on L3 (`1.851348 / 40.1`, code 851401) and L8 (`1.768015 / 49.2`, code 768492) with the exact coefficient-backed HOYA coordinate equivalents M-TAFD305 and M-TAF101.
- The patent names no glass supplier, so both annotations explicitly describe catalog spectral models rather than Sony's production melts.
- Synchronized the analysis. No geometry or authored patent constants changed.
