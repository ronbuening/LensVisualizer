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

## 2026-07-30 — `797454` catalog-equivalent review

- Rechecked L4 at `nd = 1.79668`, `vd = 45.37`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.06`).
- Relabeled L4 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no prescription, focus, aperture, or semi-diameter values changed.

## 2026-08-10 — Patent-author romanization canonicalization

- The Japanese family filing [JPH05-134175 A](https://patents.google.com/patent/JPH05134175A/ja) identifies the second inventor as `元壽 毛利` while transliterating the name as Motohisa Mori.
- The Nikonos RS fisheye family filing [JPH07-084180 A](https://patents.google.com/patent/JPH0784180A/ja) identifies its inventor with the same `元壽 毛利` characters. US 5,579,169 and [Nikon's own designer history](https://imaging.nikon.com/imaging/information/story/0088/) use the Motohisa Mouri romanization.
- Canonicalized `patentAuthors` from `Motohisa Mori` to `Motohisa Mouri`, merging two records for the same Nikon designer. The subtitle and analysis use the canonical form while the source banner preserves the US patent's spelling.
- No optical prescription, focus, aperture, semi-diameter, glass, or movement data changed.

### Verification

- `npm run generate:metadata` — passed; the combined inventor-identity pass reduced the generated catalog from 391 to 389 author records.
- `npm run typecheck && npm run format:check && npm run lint && npm run test` — passed (249 files, 2,962 tests).
- `npm run build` — passed; 1,070 routes prerendered and sitemap and RSS feeds generated.
