# Audit Log — NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR

Patent: JP WO 2020/012638 A1, Example 8

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/JPWO2020012638A1.pdf`.
- Example 8 confirms the relevant rows:
  - S1 / L11 body: nd = 1.834810, νd = 42.73
  - S6 / L21: nd = 1.834410, νd = 37.28
  - S7 / L22: nd = 1.755000, νd = 52.34
  - S13 / L25: nd = 1.795256, νd = 45.25
  - S15 / L31: nd = 1.801390, νd = 45.46

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 body | `Dense lanthanum flint (835/427)` | `S-LAH55 (OHARA, 835427)` | Existing coefficient-backed catalog entry. |
| L21 | `Dense lanthanum flint (834/373)` | `834373 — dense lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L22 | `Lanthanum crown (755/523)` | `J-LASKH2 (Hikari, 755523)` | Existing coefficient-backed Hikari catalog entry. |
| L25 | `Dense lanthanum flint (795/452)` | `Q-LASFPH3S (Hikari, 795453)` | Added coefficient-backed Hikari catalog entry. |
| L31 | `Dense lanthanum flint (801/455)` | `801455 — dense lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |

### Catalog-search disposition

- Added Hikari Q-LASFPH3S using Hikari 2023 formula-3 power-series coefficients.
- Searched Hikari, CDGM, OHARA/HOYA/SCHOTT/Sumita cross references, and refractiveindex.info-derived catalogs for `834373` and `801455`; no defensible coefficient-backed exact match was found.
- Updated analysis notes and the glass-selection table for the resolved and unresolved rows.

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/JPWO2020012638A1.pdf`, Example 8 / Table 8.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L23 / S10 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Table 8 row 10 gives nd=1.953750 and vd=32.33. S-LAH98 round-trips this pair in the current catalog; S-LAH79 resolves to nd=2.00330. |
| L41 / S17 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Table 8 row 17 repeats nd=1.953750 and vd=32.33. Same catalog-corrected 954323 disposition as L23. |

Figure / SD check:

- Rendered Figure 15 from the local PDF, page 41.
- The patent does not publish semi-diameters. The stored SD profile visually matches the compact DX zoom figure: broad front hybrid element, tighter G2 stop/VR region, narrow focusing element, and larger rear field-flattener. No SD edits were made.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L12 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-07-30 - M-NBFD10 catalog-equivalent recovery

- Rechecked WO 2020/012638 A1 Example 8, Table 8 on rendered patent page 34. Surface 6 remains
  `R=14.5813`, `d=0.90`, `nd=1.834410`, `νd=37.28`, and `ng=1.863100`.
- Relabeled L21 from unresolved code `834373` to `M-NBFD10 (HOYA catalog equivalent; production supplier
  unspecified)`. HOYA's coefficient-backed row reproduces the patent coordinate exactly and carries code
  `834373`.
- Updated the L21 narrative and glass-selection table. No prescription geometry or supplier attribution changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 8 (¶0168, pp. 34–35) prints Ymax = 14.20 mm at W, M and T (2ω = 84.69° / 42.54° / 31.81°), so the design
covers the APS-C corner (14.175 mm) at every station. The estimated rims, sized for a 60% field, clipped the real
chief ray (solved through the stop centre) early: surface 1 at wide (from 37.7°, 84% of the corner) and L41 at 35 mm
and tele (71% and 64%). The traced corner chief ray needs surface 1 ≥ 11.58 mm (wide, 42.91°), surface 17 ≥ 12.75 mm
and surface 18 ≥ 13.17 mm (both tele, 15.88°). FIG. 15 (p. 41, wide position) was rendered at 300 dpi and is drawn to
scale: surface 1 to the image plane measures 12.64 px/mm against TL = 71.75 mm, and the L41, L12, D5 and back-focus
spacings agree within 1%. L41's rear dome runs straight to its side edge at 14.5 mm semi-height (the drawn dome sag
and ~1.0 mm edge match the prescription at that height, no flange); L11's nearly flat front face is drawn as its
R 164 arc out to the 13.2 mm outer edge, while its concave rear ends at ≈11.1 mm in a flat flange step. Both figure
values exceed the traced floors and were used. The 2026-05-31 note that the stored SD profile "visually matches"
FIG. 15 was wrong on scale: at the figure's own scale the old L41 rims (8.0/8.6 mm) were about 0.57× the drawn
element and the old L11 front (10.0 mm) about 0.76×. The L11 rear (≈11.1 mm drawn vs 9.8/9.5 stored) is within the
~15% noise band, does not clip, and was left alone.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 10.0 | 13.2 | wide corner chief ray 11.58 mm; FIG. 15 front face 13.2 mm. Surfaces 2 (cemented resin junction) and 3A do not clip and stay 9.8 / 9.5 |
| 17 | 8.0 | 14.5 | tele corner chief ray 12.75 mm; FIG. 15 L41 edge 14.5 mm |
| 18 | 8.6 | 14.5 | tele corner chief ray 13.17 mm; FIG. 15 L41 edge 14.5 mm |

The validator accepts the new values, every station now reaches 100% of the corner (42.91° / 21.24° / 15.88°) with
every rim clear, and the image-circle floor still reports nothing undersized. The tightest remaining rims are at the
wide corner: 3A (chief ray 9.37 mm, sd 9.5) and 2 (9.45 mm, sd 9.8). No aspheric surface changed.

## 2026-10-27 — Rim-cut figure review

FIG. 15 (PDF p. 41, first raster: 1004 × 1334 px, 300 ppi, wide end at infinity; rotated so the object is on the left,
12.64 px/mm) was read element by element, on both halves, for flat lands square to the axis at the rims of concave
faces, the shape `rimCutDepthMm` draws. No cut was authored; the data file is unchanged.

| Surface | Figure rim | q (cap end ÷ edge) | sd | Largest stated axial ray | Disposition |
|---|---|---|---|---|---|
| 3A (L11 resin rear, R 11.576 asph) | The L11 glass body ends its concave rear (junction 2) at 10.7–10.8 mm in a flange land square to the axis out to the 13.16 mm body edge; the resin rear runs past that land plane to its own edge at 11.3 mm, with no land of its own | 0.81–0.82 (junction cap ÷ body edge) | 9.5 | 3.84 mm | Not authored: the drawn land belongs to cemented junction 2, which opens into the resin, not air, so it cannot carry a cut; 3A itself shows no land, and drawing the flange would need surfaces 2 and 3A raised toward 13.2 mm, at or past junction 2's \|R\| = 13.201 |
| 5 (L12 rear) | Follows the R 34.90 arc to the edge; the last rows sit ≤ 1.5 px off at the corner | — | 9.5 | 5.23 mm | No land |
| 8 (L22 rear) | Near-straight to the edge (0.32 mm drawn sag, as prescribed) | — | 5.2 | 5.33 mm | No land |
| 14 (L25 rear) | Follows the arc to the edge | — | 4.9 | 3.72 mm | No land |
| 15A (L31 front) | Top half follows the aspheric profile to the edge within 0.5 px; the bottom corner's last five rows sit 1.5 px off, one staircase step of a slope-0.2 curve | — | 5.5 | 2.14 mm | No resolvable land |
| 16A (L31 rear) | Follows the profile to the edge | — | 5.6 | 2.06 mm | No land |
| 17 (L41 front) | Near-flat R −345 face runs to the edge | — | 14.5 | 1.68 mm | No land |

- The steps between L21/L22 and L23/L24 at their rims are cemented-junction edge steps, not lands.
- No cap reaches the stop plane at any zoom or focus state: surface 8 clears it by 1.34 mm, and surface 10 behind the
  stop is convex to the object, so its rim bends away from the stop.
- Aperture and vignetting are unchanged: all three stations still trace within 3 % of the stated f-number with no
  `rim`, `trace`, `iris` or `failed` rows.
- The diagram draws the L11 body's rim as a slant from the 13.2 mm front edge to junction 2's 9.8 mm rim; the figure's
  square flange would need a land on a cemented face, which `rimCutDepthMm` does not cover.

## 2026-10-29 — Surface-height and concave-rim reinspection

Reopened `patents/JPWO2020012638A1.pdf`, Numerical Example 8, Figure 15 (PDF p. 41, upper-left panel), and inspected every element at 600 dpi. The source S1-to-image span gives 12.64 native px/mm. No air-side cap shows a resolved flat land. The long front-element square flange belongs to cemented resin junction 2: the air-side resin face 3A continues past that plane to its own curved edge. Neither `rimExtensionSd` nor a concave rim cut applies to that junction. The remaining small steps belong to cemented interfaces, and the other curves run continuously to their rims.

No geometry changed. `audit:surface` passes; `audit:image-circle` reports 0 undersized and 0 skipped. The existing optical apertures and the front composite-element limitation are retained.
