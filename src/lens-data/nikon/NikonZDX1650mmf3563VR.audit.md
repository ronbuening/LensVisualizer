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
