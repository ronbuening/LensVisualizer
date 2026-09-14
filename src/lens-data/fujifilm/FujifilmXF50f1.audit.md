# Audit Log — Fujifilm Fujinon XF 50mm f/1.0 R WR

Patent: US 2021/0231927 A1, Example 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20210231927A1.pdf`.
- Example 3 row confirmed L1d / surface 7 nd = 1.95906, vd = 17.47.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1d / S7 | `S-NPH53 (Ohara)` | `S-NPH3 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L1d glass identification and verified-glass note.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L1a from `S-FPM3 (OHARA)` to `S-TIL2 (OHARA)`. S-TIL2 exactly matches the patent's 1.54072 / 47.23 coordinate; S-FPM3 has νd = 74.70.
- Synchronized the element analysis and verified-glass note.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked US 2021/0231927 A1's glass table and assigned J-PSKH1 to the two `593686` ED elements and S-NPH4
  to the NPH element as supplier-neutral spectral proxies.
- Retained the patent-authored partial dispersion on both ED elements. Five other multi-candidate families remain
  unresolved rather than being forced to a supplier.

## 2026-09-08 — Oldest-first live diagram audit, lens 2 of 200

Exact source: `patents/US20210231927A1.pdf`, Figure 7 (PDF p.8), Tables 9–12 (p.80), §§0212–0213 (p.79). Inspected original table and figure renders; high-resolution rim crop at 600 dpi. All lens radii, glass indices/Abbe numbers, physical thicknesses, and the two full odd/even asphere coefficient sets were retained.

| Field | Before | After | Evidence |
|---|---|---|---|
| Nominal aperture | f/1.0 | f/1.03 | Table 10; f/1.0 remains marketed designation |
| Rear image gap | 18.251 / 22.692 mm | 17.279955696 / 21.720955696 mm | Tables 9/11, omitted plate 2.850 mm at nd=1.51680: use thickness/nd, not thickness |
| Close reference distance | 0.700 m | 0.699028956 m in the air-equivalent model | §0213 gives physical object-to-image distance; subtract the same 0.971044304 mm plate-reference shift |
| Surface 15A/16A rims | 10.7 / 9.9 mm | 13 / 13 mm, estimated | Fig.7 rear asphere optical outline relative to doublets; conservative estimate excluding mounting flats |
| Focus annotation | `moves →` | `moves ←` | §0212 and Fig.7: G2 moves toward object |
| Gap labels | G1–G2 / BF | Stop–G2 / BF (air equiv.) | Distinguish actual stop gap from group gap and optical image reference |
| Partial dispersion | Three rounded differences; nine omitted | All 12 Table 9 θgF ratios preserved via runtime-normal-line conversion | ΔPgF = θgF − (0.6438 − 0.001682νd) |
| Glass/APD descriptions | S-TIL2/S-NPH3 supplier assertions; inferred ED badges | Compatible models with supplier unspecified; patent dispersion badges for LB/LC | Numeric compatibility does not prove supplier; Table 9 publishes dispersion |
| Shared focus endpoint | Unrounded floating-point metres | Existing `formatDist` presentation | Local browser exposed 0.6990289556962025 m string |

Figure screening: page 8, `--rot90 --dpi=600`, crop `0.18,0.35,0.70,0.76`. Automatic rear ENV/RIM estimates were contaminated by ray/leader lines and inaccurate row mapping; they were not copied. Manual rear optical outline inspection supports the conservative 13 mm asphere. Other rims retained; modest figure differences and mounting steps do not support copying outer ink. Surface-domain, edge/gap, and hidden-render-trim checks pass at infinity, midpoint and close focus. Updated the existing asphere departure regression and companion analysis: at 13 mm, departures are +3264.713 µm and +2106.477 µm.

Source physical track is 111.268 mm; lens-only air-equivalent track is 110.296955696 mm. The plate conversion is paraxial: the omitted plate's nonparaxial/chromatic aberrations are not reproduced. G1/stop remain fixed, G2 moves −4.441 mm, and summed variable-gap change remains zero. No zoom exists. Intermediate focus is interpolated, not a published cam law.

Production and local browser views inspected. Corrected local midpoint gaps show 9.25 / 19.50 mm and close gaps 7.03 / 21.72 mm; motion chart shows stationary G1 and 4.44 mm objectward G2. The close control displays 70 cm while the description explains the air-equivalent reference. The aspheric silhouette is now closer to Fig.7. Full gates are tracked in the batch record.
