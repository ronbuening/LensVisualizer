# Audit Log — NIKON NIKKOR Z 70-200mm f/2.8 VR S

Patent: WO2020/105104 A1, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier source check

### Phase 1 — Glass corrections

No data-file changes were made in this pass.

### Patent-source disposition

- The referenced patent `WO2020/105104 A1` was not present in `patents/`.
- The only nearby local file was `patents/JPWO2020105107A1.pdf`, whose extracted Table 1 prescription does not match this data file, so it was not used as evidence.
- Per the queue instruction, this lens was documented and left for a future pass with the correct local patent file.

### Catalog-search note

- Public Hikari catalog sources do list coefficient-backed `J-LASF021` for `850324` and `J-LAF016` for `801349`, and the project catalog already contains both entries.
- Relabeling L61/L64 still needs confirmation against the actual `WO2020/105104 A1` local patent table before editing the data file.

## 2026-06-04 — Sweep 3 local patent dPgF backfill and catalog relabel

Local patent source: `patents/WO_2020105104_A1.pdf` (untracked local file).

- `pdftotext -layout` produced page breaks only, so pages 22-23 of the local image-only PDF were rendered with `pdftoppm` and checked visually against Example 1.
- L23 / surface 10 matches the data file (`nd = 1.66382`, `νd = 27.35`) and the patent table lists `θgF = 0.6319`. Added `dPgF: 0.0341`, computed as `0.6319 - (0.6438 - 0.001682 * 27.35)`.
- L61 / surface 24 is confirmed as `nd = 1.85026`, `νd = 32.35`; relabeled to coefficient-backed Hikari `J-LASF021 (850324)`.
- L64 / surface 29 is confirmed as `nd = 1.80100`, `νd = 34.92`; relabeled to coefficient-backed Hikari `J-LAF016 (801349)`.
- No `nC`, `nF`, or `ng` rows were found in the Example 1 prescription pages reviewed.
