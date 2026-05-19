# Audit Log — Nikon AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR

Patent: US 2021/0026133 A1, Example 4 (Table 4)  
Catalog version: local working tree, 2026-05-19

## 2026-05-19 — Six-digit glass-code backfill review

### Patent evidence

Reviewed `patents/US20210026133A1.pdf`, Example 4 / Table 4. The relevant glass rows are:

| Element / surface | Patent nd | Patent νd | Patent PgF / θgF | Disposition |
|---|---:|---:|---:|---|
| L11 / S1 | 1.51680 | 63.88 | 0.536 | No exact public coefficient-backed match; retained `517639` code. |
| L12 / S3 | 1.61155 | 31.26 | 0.618 | No exact public coefficient-backed match; retained `612313` code and patent θgF. |
| L13 / S4 | 1.51742 | 52.20 | 0.558 | Relabeled to HOYA E-CF6 / `517522`. |
| L21 / S6 | 1.69680 | 55.52 | 0.543 | Relabeled to OHARA S-LAL14 / `697555`. |
| L22 / S7 | 1.80809 | 22.74 | 0.629 | Added Hikari J-SFH1 / `808227`. |
| L23 / S9 and L42 / S14 | 1.85026 | 32.35 | 0.595 | Added Hikari J-LASF021 / `850324`. |
| L31 / S11 | 1.58913 | 61.22 | 0.540 | Relabeled to OHARA S-BAL35 / `589612`. |
| L41 / S13 | 1.49700 | 81.73 | 0.537 | Added Hikari J-FK01A / `497817`. |
| L43 / S16 | 1.48749 | 70.31 | 0.529 | Added Hikari J-FK5 / `487703`. |
| L44 / S19 | 1.80100 | 34.92 | 0.585 | Added Hikari J-LAF016 / `801349`. |
| L45 / S20 | 1.70000 | 48.11 | 0.560 | Added Hikari J-LAF01 / `700481`. |
| L46 / S22 | 1.60342 | 38.03 | 0.583 | Relabeled to Schott F5 / `603380`. |
| L47 / S24 | 1.77250 | 49.62 | 0.552 | Relabeled to OHARA S-LAH66 / `773496`. |

### Catalog-search disposition

- Searched the Nikon/Hikari 2023 optical glass catalog, Hikari individual datasheets, public OHARA/SCHOTT/HOYA catalog data, and refractiveindex.info-backed entries.
- Added coefficient-backed Hikari entries for J-FK5, J-FK01A, J-SFH1, J-LAF01, J-LAF016, and J-LASF021 in `glassCatalogData.ts`.
- L11 / `517639` and L12 / `612313` remain unresolved after public catalog search. Their labels now preserve unbroken six-digit codes for future auto-upgrade.

### Changes made

- Updated all catalog-backed glass labels in `NikonAFPDX70300mmf4563G.data.ts`.
- Updated `NikonAFPDX70300mmf4563G.analysis.md` so the element narratives and glass budget reflect the new catalog identifications.
