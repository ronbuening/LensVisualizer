# SAMSUNG 12-24mm f/4-5.6 ED — Audit Log

## Source Prescription

US 2013/0235465 A1, Example 5, Figure 9 and Tables 13–15 supplies the 19-surface, ten-element prescription at its printed millimetre scale. Three infinity zoom states are printed. The other 98 stations, per-station iris radii, image distances, clear radii and 28 mm image circle are calculated or inferred. The model includes infinity focus only.

## 2026-11-20 — Deployment validation and cleanup

An independent validator re-read the 300 dpi page images on pages 27–28: all 19 radii and axial spacings, ten nd/νd pairs, S10 and its 2.5 mm following airspace, two cemented interfaces, all 15 asphere values and all three printed D1/D2/D3 rows matched without transcription errors. Equation 8 uses the standard (K + 1) convention, so K = 0 remains correct. The verdict was valid with notes concerning rims, the index line, glass labels and wording. Figure 9's wide view and enlarged G3/G4 view were also inspected during this review.

The patent-family association with Samsung's NX 12-24mm is strong: ten elements/eight groups, one ED and two aspherical elements, 0.24 m and 0.14× agree with the product references. Choosing Example 5 over Examples 2 and 3 remains uncertain; all three match those specifications, while Example 5 has the shorter wide-end track, approximately 95.9 versus 99.0 mm. Sources are [LensTip](https://www.lenstip.com/1086-Samsung_NX_12-24_mm_f_4.0-5.6_ED-lens_specifications.html), [Imaging Resource](https://www.imaging-resource.com/lenses/samsung/12-24mm-f4-5.6-ed-nx/specifications/) and [DPReview](https://www.dpreview.com/products/samsung/lenses/samsung_12-24_4-5p6/). The analysis now mentions the granted family member, US 9,341,825 B2.

Changes to identity, structure and public text:

- Import: `../main/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; constant/export: `data` → `LENS_DATA`. Added one header identifying printed and inferred quantities.
- Key: `samsung-arimoto-us20130235465-example5-reference` → `samsung-nx-12-24mm-f4-56-ed`; name: `ARIMOTO US20130235465 — EXAMPLE 5 ZOOM REFERENCE` → `SAMSUNG 12-24mm f/4-5.6 ED`. Maker remains Samsung. Visibility: implicit → explicit `true`.
- Subtitle: `Patent-only infinity / D-line reference · modeled 28 mm circle · estimated apertures and solved cam` → `US 2013/0235465 A1, Example 5 — Samsung NX 12-24mm production correlation`.
- Specs: eight lines describing preparation and testing → `10 ELEMENTS / 8 GROUPS`, `DESIGN F/4.1–5.8`, `1 ED ELEMENT`, `2 ASPHERICAL ELEMENTS`.
- Catalog mount/format: absent → `samsung-nx` / `aps-c`; marketed focal length: absent → `[12, 24]` mm; marketed f-number: absent → `4`; marketed minimum focus: absent → `0.24` m. These come from the cited product references. The f-number marketing field accepts a scalar, so the tele-end f/5.6 is retained in the name and analysis. Existing element/group counts remain 10/8 and design values remain 12.36–23.40 mm, f/4.1 at wide.
- Element labels: `L1`…`L10` → `Element 1`…`Element 10`; added plain optical roles and in-air focal lengths −25.12, −19.26, +43.47, −48.58, +24.53, +30.06, +25.28, −9.55, +16.41 and −75.01 mm. Existing shape types agree with the radius signs and remain unchanged.
- Cemented annotations: absent → C1 on L4/L5, spanning S7–S9, and C2 on L8/L9, spanning S15–S17; both pairs have matching group annotations.
- Index reference: `D` plus explanatory notes → omitted, using the default helium d line, on all ten elements. Printed nd and νd remain unchanged.
- L6 ED designation: absent → `apd: "inferred"`, with a note explaining the FCD1 coordinate match and inferred product position.
- Focus description: wording about preparation, separate checks and unsupported retail identity → plain infinity-only description with the Table 15 near-state limitation. `focus.closeFocusM` remains 1e15. All 101 stations, including their labels, apertures and every gap value, remain numerically unchanged; the 0.002 zoom step remains.
- `source.sdSource`: `heuristic` → removed because the rims now combine ray estimates and figure bounds.

Glass labels changed from the common `Unmatched (literal patent Nd/Vd; no exact catalog glass identity asserted)` text to the following Hoya equivalents, in the neighbouring files' `NAME (HOYA catalog equivalent; production supplier unspecified)` form. Each of the ten labels was checked with `trylabel.mjs` and resolved to Hoya. Differences below are catalog minus printed values.

| Element | New glass | Δnd |   Δνd |
| ------- | --------- | --: | ----: |
| L1      | TAFD5F    |   0 |     0 |
| L2      | TAF1      |   0 | +0.01 |
| L3      | FDS90     |   0 |     0 |
| L4      | FDS90     |   0 |     0 |
| L5      | E-F5      |   0 |     0 |
| L6      | FCD1      |   0 |     0 |
| L7      | FC5       |   0 | +0.01 |
| L8      | TAFD30    |   0 |     0 |
| L9      | FC5       |   0 | +0.01 |
| L10     | TAF1      |   0 | +0.01 |

No catalog-copied nC/nF/ng values were present. These coordinate matches supply spectral curves without identifying the production melt.

Clear semi-diameters changed only upward, within the Figure 9 readings. S1 uses 17.7 mm, below the approximately 18.1 mm figure bound, covering a traced wide-field front height of approximately 17.65 mm. G3 uses a rounded envelope around the approximately 8.1 mm front ray height, with smaller downstream radii following that bundle. L6–L10 remain bounded by the figure readings, retaining clipping where the full iris bundle exceeds them.

| Surface | Old sd (mm) | New sd (mm) |
| ------- | ----------: | ----------: |
| S1      |        15.8 |        17.7 |
| S7      |         5.7 |         8.2 |
| S8      |         5.4 |         7.8 |
| S9      |         4.9 |         7.4 |
| S11     |         5.3 |         5.9 |
| S12     |         5.1 |         5.9 |
| S13     |         4.6 |         5.7 |
| S14     |         4.4 |         5.7 |
| S15     |         4.0 |         5.7 |
| S16     |         3.8 |         5.7 |
| S17     |         5.1 |         6.8 |
| S18     |         5.4 |         7.2 |
| S19     |         5.9 |         7.4 |

S2 keeps its 11.2 mm optical cap and gains a 17.7 mm opaque rim extension, following Figure 9's vertical rear land. This addition changes the outline without opening or cutting the optical cap. S2–S6 clear radii remain unchanged. No curvature, thickness, asphere, stop position or zoom gap changed, and no geometry override was added.

Before and after `built.mjs` values are identical for all first-order quantities: wide / middle / tele EFL = 12.3637 / 18.0055 / 23.4008 mm; nominal f-number = 4.10 / 4.73 / 5.80; stop radius = 4.5957 / 4.7832 / 4.5249 mm. `probe.mjs` gives BFD = 21.6314 / 29.4076 / 36.8514 mm and total track = 95.9134 / 89.7236 / 90.0364 mm, also unchanged. All 202 zoom/focus summary rows are identical. The probe's aperture column uses the wide-state iris radius at every station, so the station f-numbers above come from the built zoom aperture table. The independent interpolation check reported maximum defocus 0.00037 mm over 2,001 slider positions.

Checks after the changes: surface audit OK, including the variable-gap geometry; aperture audit 101/101 stations within 3% of nominal, with zero rim, trace, iris or failed limits; image-circle audit one checked, zero undersized and zero skipped; field-coverage audit 101/101 stations reach the 14 mm corner, approximately 100% coverage, zero unsolved or skipped. At the same 28 mm-circle corner fields of 50.9538° wide and 31.3106° tele, the engine's full-pupil geometric transmission changes from 6.7534% → 48.8228% and 61.7720% → 99.4424%, respectively. These figures describe the adopted model apertures, without production transmission claims.

The analysis was rewritten with the exact lens-name H1, the four required bibliographic rows and sections on identification, architecture, each element or cemented pair, glass, focusing/zoom, aspheres, apertures/field and sources. It distinguishes printed and inferred data, the patent-family association and uncertain example choice, and the marketed aperture from the design aperture. Broken spacing, preparation history, sampling counts and sodium-D MTF values were removed; those old numerical MTF values do not apply after the index-line and dispersion corrections. This audit log replaces the previously absent log.

Open: Table 15's finite states remain uninstalled. They correspond to 240 mm object-to-image and 0.076 / 0.107 / 0.140× magnification; a two-state focus interpolation would miss focus by about 0.09 / 0.16 / 0.27 mm at mid-travel, requiring intermediate focus positions. The 28 mm image circle remains an estimate, compared with approximately 28.7 mm implied by the source fields. A later rim review should compare the unchanged S2–S6 caps and remaining wide-field clipping with Figure 9, and determine whether larger G3 rims closer to its outer outline are warranted. The adopted G3 radii admit the reported approximately 8.1 mm front height; complete agreement with every drawn pupil ray is not established. The production choice among Examples 2, 3 and 5, exact glass melts, physical iris diameter, baffles and sensor stack remain unresolved. Formatting checks pass for all three files; the analysis has 16 sections and the four required bibliographic rows, and the data contains no // comments. The requested page screenshot produced no image after Chromium reported power-notification and DNS-watch errors, so the visual page check could not be completed. No command or edit was refused; no commits, downloads, generated-file tasks, server starts or full test/build commands were used.
