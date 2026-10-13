# Audit Log - Canon RF 28-70mm f/2L USM

Patent: JP 2020-118807 A, Example A

## 2026-05-19 - Glass relabel + catalog additions

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / S6A | `glass` | `S-LAM54 (OHARA)` | `769493 - MC-TAF101-100 (HOYA)` | Patent nd/vd is 1.76902 / 49.3; refractiveindex.info/HOYA gives exact code 769493. |
| L8 / S12 | `glass` | `S-LAH60 (OHARA)` | `TAFD30 (HOYA)` | Patent nd/vd is 1.88300 / 40.8; TAFD30 is exact. |
| L11 / S19 | `glass` | `S-NBH8 (OHARA)` | `S-NBH53V (OHARA)` | Patent nd/vd is 1.73800 / 32.3; S-NBH53V is catalog-consistent. |
| L16 / S27 | `glass` | `S-NBH56 (OHARA)` | `NBFD15 (HOYA)` | Patent nd/vd is 1.80610 / 33.3; refractiveindex.info/HOYA gives exact code 806333. |
| L17 / S29A | `glass` | `S-LAH66 (OHARA)` | `L-LAH85V (OHARA)` | Patent nd/vd is 1.85400 / 40.4; Ohara L-LAH85V is exact via refractiveindex.info. |
| L19 / S32 | `glass` | `S-NPH2 (OHARA)` | `TAFD55 (HOYA)` | Patent nd/vd is 2.00100 / 29.1; TAFD55 is exact. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example A; stored nd/vd values match the patent table.
- No radius, spacing, zoom, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added `MC-TAF101-100`, `NBFD15`, and `L-LAH85V` catalog entries so patent-code rows resolve via catalog data.

### Phase 4 - Analysis sync

- Updated the companion analysis glass table, asphere notes, and element narratives for the relabeled elements.

## 2026-05-31 — M-TAFD305 catalog side-effect cleanup

### Context

- The Sigma patent audit added coefficient-backed HOYA `M-TAFD305` to the glass catalog.
- This Canon L5 row is 764/485 and resolves exactly to OHARA `S-LAH96`; it is not the modern HOYA 851/401 `M-TAFD305` row.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L5 / S8 | `M-TAFD305 (HOYA)` | `S-LAH96 (OHARA, 764485)` | Exact catalog match for nd = 1.76385, vd = 48.5. |

### Analysis sync

- Updated the glass summary, D2 discussion, and correction note to use `S-LAH96`.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2020-118807 A Example A surface 9: `R=26.487`, `d=8.15`, `nd=1.85478`, and `νd=24.8` match the data file.
- Relabeled L6 from `S-NPH5` to OHARA `S-NBH56`, the exact 855248 row. Removed the former unsupported phosphate/APD wording because the patent publishes no partial-dispersion value for this element.
- Synchronized the glass table and D2 narrative. No prescription geometry changed.

## 2026-09-23 — First-added diagram audit, lens 72

### Source and scope

- Local PDF `patents/JP2020118807A.pdf` (JP 2020-118807 A, Canon Inc., inventor 木村 公平 / Kohei Kimura, filed
  2019-01-22, published 2020-08-06). Pages used: 1 (front page), 16 (asphere formula, start of Example A), 17–18
  (Example A surface, asphere, general and zoom-group data), 29 (Fig. 1 wide-angle section with movement arrows; Fig. 2
  aberrations). Text layer is the clean JPO layer; every row was confirmed on the rendered pages.
- Example A of the main optical system is stored. It matches the production RF 28-70mm F2 L USM: 19 elements / 13
  groups, 4 aspherical elements with 5 aspherical surfaces (S6, S13, S18, S30, S31), one νd 94.7 and two νd 81.5
  elements, f = 28.90–67.90 mm, FNO 2.06 constant, Y = 21.64 mm.

### Re-verified and retained

- All 34 surface rows (R, d, nd, νd), the stop at S14, the AP flare-cut plane S22 (d = −2.59 mm, folded into d21), and
  all five asphere coefficient sets match the patent. The printed formula uses the standard (1 + K) conic with an A2
  term; every K = 0 and no A2 is listed, so there is no K/κ ambiguity and the surfaces are spherical-base polynomials.
- Zoom gaps d5 / d13 / d21 match the patent table at all three stations (d21 stored as patent − 2.59).
- Computed EFL 28.898 / 50.009 / 67.921 mm against the patent's 28.90 / 50.00 / 67.90 mm. Group focal lengths agree with
  the published +104.99 / −19.17 / +47.05 / +44.67 mm.
- Patent metadata (number, kind code, author, assignee, year), element count, group count, mount and format ids are
  correct. All 19 glass labels resolve to exact catalog matches for the patent nd/νd pairs.
- Element `type` strings agree with the R signs except L17 (below).

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Rear gap (var "34", was "33") | 19.71 / 28.93 / 34.37 (physical CG + d36 added) | 19.04 / 28.26 / 33.70 | Repo convention folds the CG as t/n: d34 + 1.96/1.51633 + 2.75. Paraxial defocus drops from +0.66 mm to −0.01 / −0.02 / −0.03 mm; lens length now 157.50 / 170.59 / 179.04 against the patent's 157.51 / 170.61 / 179.07. |
| Surface labels after the AP | "22"–"33", "29A", "30A" (patent − 1) | "23"–"34", "30A", "31A" | Patent numbering; the analysis already cited S30/S31 for L17. `var`, `varLabels`, `groups`, `doublets` and `asph` keys follow. |
| `nominalFno` | 2.0 | 2.06 | Patent FNO 2.06 at all stations. |
| Aperture model | fixed iris | `zoomApertureModel: "from-nominal-fno"` | The stop moves with G3 and FNO is constant, so the iris must change; no iris diameters are published. Inferred iris radii 13.55 / 15.55 / 16.91 mm. |
| `fstopSeries` / `maxFstop` | [2, …, 22] / default 16 | [2.06, 2.8, …, 22] / 22 | Series starts at the reachable nominal f-number; production minimum aperture f/22. |
| STO sd | 16.0 | 17.0 | Tele f/2.06 real-ray iris radius is 16.9 mm; 16.0 was undersized. |
| S15 / S16 sd | 17.0 / 18.0 | 18.9 / 18.9 | Were CLIPS-AXIAL (tele axial beam 18.16 / 18.26 mm); Fig. 1 shows L9 at 18.9 mm. |
| S1 / S2 sd | 44.5 / 44.0 | 39.3 / 36.1 | Fig. 1: front doublet rim 39.2 mm, cemented junction 36.1 mm (S2 was 22 % over the figure; S1 moved with it for a coherent L1). Wide chief ray at S1 is 35.5–36.2 mm. |
| S7 sd | 18.5 | 16.0 | Fig. 1 reads 15.1 mm (stored was 23 % over). Set 0.9 mm above the figure so the engine's paraxial wide half-field stays at 37.1° (15.1 would cut it to 35.5°, below the patent's 36.82°). |
| S20 sd | 19.2 | 15.9 | Fig. 1 D4 junction 15.9 mm (−17 %); tele axial beam is 15.68 mm. |
| L13 S23 / S24 sd | 19.2 / 20.0 | 16.9 / 16.9 | Fig. 1 rim 16.9 mm (−14 % / −18 %). |
| L14 S25 / S26 sd | 20.0 / 18.45 | 16.5 / 16.5 | Fig. 1 rim 16.5 mm (−21 % / −12 %). |
| D5 S27 / S28 / S29 sd | 18.6 / 17.8 / 17.2 | 15.5 / 15.5 / 13.8 | Fig. 1 outer rim 15.5 mm, S29 edge 13.8 mm (−20 % / −15 % / −25 %). |
| D6 S32 / S33 / S34 sd | 18.6 / 19.8 / 20.8 | 15.4 / 18.4 / 18.4 | Fig. 1: S32 edge 14.8 mm (−26 %), L19 rim 18.4 mm. S32 set 0.6 mm above the figure to keep the paraxial half-field above 36.82°. |
| Element `fl` | thin-lens values (e.g. L3 121.5, L7 71.5, L10 35.8) | thick-lens values from the prescription (L3 117.3, L7 66.1, L10 37.0; all 19 updated) | Paraxial thick-lens trace of each element. |
| L17 `type` | Neg. Meniscus (2× Asph) | Biconcave Neg. (2× Asph) | R1 = −1000, R2 = +119.129: both surfaces concave. |
| `apd` L12 / L13 / L15 | "patent" | "inferred" | The patent never labels any element UD or anomalous; the class is inferred from the catalog glass. |
| `apd` L19 | "inferred" ("heavy phosphate flint") | false | TAFD55 is a lanthanum dense flint; catalog θgF 0.5986 sits only ≈ +0.004 above the normal line. |
| Focus description / G3 naming | "Inner focusing via Group 3 (probable)" | Focusing group not identified in the patent | Claim 16 and ¶0039 mention the main system's focusing lens only generically; the former "paragraph 16" citation was claim 16 and did not identify G3. |
| Header / analysis group motion | "G1 fixed; all groups move rearward" | G1 +21.6 mm, G2 ≈ −4 mm (slight reversal), G3 +9.6 mm, G4 +14.7 mm toward the object | Derived from the gap table with the image fixed; matches the Fig. 1 arrows (L1, L3, L4 toward the object, L2 toward the image). |

Figure method: Fig. 1 (axis vertical, object at the bottom) profiled at 400 dpi (native raster); scale 8.70 px/mm from
the S1–S34 wide-angle vertex spacing (138.46 mm = 1205 px), confirmed by the drawn axial beam at SP (13.8 mm against a
13.5 mm traced iris) and by the vertex crossings of every surface. Rims were read on the left side, inside the group
brackets; S6, S8–S13, S17–S19, S21, S30–S31 and S3–S5 lie within ~15 % of the figure and were kept.

Analysis sync: rewrote §2.2 (zoom motion with derived group travel), §2.3 (focus group unknown), §8.2–8.5 (air-equivalent
cover glass, figure-based semi-diameters, inferred iris schedule, focus limitation); corrected L3's glass (S-LAH66, not
S-LAH55V), S-FSL5 described as a fluor crown, every element/doublet focal length, L17's shape, L17 rim departures,
the AP position ("near the primary image plane" was wrong), and the last-surface-to-sensor distance (≈20–34 mm).

### Checks on the result

- Surface validator: no validation errors. Image-circle floor: 0 undersized.
- Real-ray trace at f/2.06: no CLIPS-AXIAL or BLOCKS-CHIEF at any station; the 21.64 mm image height is reached at
  ω = 37.37° / 23.03° / 17.28° (patent paraxial ω 36.82° / 23.40° / 17.67°; the differences are the −1.3 % wide and
  +3 % tele distortion). Corner bundles at wide are strongly vignetted at G1 and G4, consistent with the patent figure.
- Engine: FOPEN 2.06 at every station, iris radii 13.55 / 15.55 / 16.91 mm, wide half-field 37.07°.
- Glass check: 19 / 19 exact catalog matches.
- Live local page: wide, mid and tele diagrams render with the front doublet in proportion to the rear groups, as in
  Fig. 1; the zoom-motion overlay shows G1 advancing 21.5 mm, G2 retreating slightly and G3/G4 advancing. The
  off-axis ray toggle was not exercised (headless screenshots cannot click).

### Open limitations

- No close-focus data in the patent; the focus slider stays disabled and the focusing group is unknown.
- Semi-diameters are figure measurements (about ±0.3 mm) or earlier ray-trace estimates; the patent lists none.
- The iris schedule is inferred from the nominal f-number, not published.

## 2026-09-23 — Cover glass modeled as `rearPlates`

- Replaced the air-equivalent fold with the patent's physical rear stack: D34 = 15.00 / 24.22 / 29.66 mm (Example A
  table), then `rearPlates` CG 1.96 mm, nd 1.51633, νd 64.1 (S-BSL7 class), and d36 = 2.75 mm. The plate is traced by
  every analysis and hidden from the diagram and element lists.
- Paraxial check against the previous data: EFL identical; defocus changes by +0.0026 mm at every station, which is the
  rounding in the old stored 19.04 / 28.26 / 33.70 mm (exact fold 19.0426 / 28.2626 / 33.7026 mm). Physical track grows
  by 1.96 × (1 − 1/1.51633) = 0.667 mm plus that rounding.
