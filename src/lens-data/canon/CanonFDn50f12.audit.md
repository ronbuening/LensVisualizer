# Audit Log - Canon New FD 50mm f/1.2

Patent: US 4,364,643, Embodiment 3

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US4364643.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The six-digit legacy code labels remain the most useful future-upgrade annotations.
- High-index status remains important to the design and is already documented for the positive-element strategy, especially L4 and L6.

### Phase 2 - Retained-information audit

- The patent is normalized at f=1 and does not publish clear apertures. Existing SDs remain estimates from f/1.2 marginal rays, mechanical clearance, and the R6 rim cap.
- Retained the inferred stop location centered in the D6 air gap from Fig. 3.

## 2026-08-18 - Embodiment 3 L6 coefficient backfill

- Visually rechecked Embodiment 3 on rendered pages 7–8 of `patents/US4364643.pdf`; L6 is confirmed at
  `1.863 / 41.5` (`863415`).
- Replaced the unresolved LASF07 attribution with the existing LASFN13 curve, which matches the patent coordinate
  within printed precision. This is an optical equivalent; Canon's production supplier remains unspecified.
- No prescription or geometry value changed.

## 2026-09-21 — First-added diagram audit, lens 44

Source: local `patents/US4364643.pdf` (8 pages, 300 dpi scans). Page 1 front page, page 2 FIG. 1–3 (FIG. 3 is
Embodiment 3), page 7 column 4 and page 8 column 5 for the Embodiment 3 table and its aberration coefficients, page 8
column 6 for claim 4 (the same table repeated).

### Re-verified and retained

- Front page: US 4,364,643, inventor Kikuo Momiyama, assignee Canon Kabushiki Kaisha (canonical "Canon Inc."), filed
  May 28 1980, granted Dec 21 1982, priority JP 54-67047. The patent prints no kind code. Structured fields unchanged.
- Embodiment: all three examples are 7 elements / 6 components, all spherical, F.No. 1:1.2, 2ω = 46°, with no
  aspheric or floating-focus data anywhere in the patent. Nothing in the patent separates them as the production
  design; the Embodiment 3 choice stays on the secondary-source attribution recorded in the analysis. The file does not
  describe the 8-element aspherical floating FD 50mm f/1.2 L.
- Prescription: every R, d, nd and νd row of Embodiment 3 was read from the rendered table and matches claim 4.
  The f = 1 rows trace to EFL 1.000022 and BFD 0.707699. Stored values equal patent × 49.9989 (= 50 / 1.000022) on all
  13 radii and 12 spacings to 0.001 mm. Stored EFL 50.0004 mm, BFD 35.387 mm, stored last gap 35.384 mm.
- Element focal lengths match thick-lens values (60.02, 86.01, −34.12, −22.89, 38.66, 50.29, 102.93 mm; cemented
  pair −81.74 mm).
- Stop: the patent gives no stop spacing. In FIG. 3 the diaphragm line crosses the axis at x ≈ 1231 px between the R6
  vertex (1148.5 px) and the R7 vertex (1317 px), i.e. 0.49 of D6. The even split of D6 is retained. Drawn iris
  half-opening ≈ 13.3 mm; exact f/1.2 marginal ray at the stop 13.82 mm; paraxial iris radius 14.16 mm; stored 14.1.
- Focus: the patent publishes no finite-distance state and no moving sub-group. Unit focus retained.
- Aberration coefficients quoted in the analysis match the printed table (Σ I 0.1092, II 0.0295, III −0.0431,
  P 0.1779, V 0.2831 and the per-surface values cited).
- Semi-diameters of surfaces 1, 2, 3, 6, 7: FIG. 3 (0.0908 mm/px from the 518 px R1–R13 vertex span, top and bottom
  averaged, 0.2 mm line half-width removed) gives L1 21.5, L2 18.6, R6 curve end 14.1, R7 curve end 14.0 mm against
  stored 22.5 / 21.5, 19.0, 14.2, 14.2. All within 5 %; retained.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 8 `sd` | 15.0 | 17.0 | Exact f/1.2 axial marginal ray needs 16.77 mm; FIG. 3 L4 outer flat 16.8 mm, junction line drawn to 17.7 mm. |
| Surface 9 `sd` | 16.5 | 17.7 | Axial ray needs 17.35 mm; FIG. 3 L5 rim 17.7 mm. |
| Surface 10 `sd` | 16.5 | 18.7 | Axial ray needs 18.32 mm; FIG. 3 L6 rim 18.6 ± 0.3 mm. |
| Surface 11 `sd` | 17.0 | 18.7 | Axial ray needs 18.44 mm; FIG. 3 L6 rim 18.6 ± 0.3 mm. L6 edge thickness at 18.7 mm is 0.69 mm. |
| Surface 12 `sd` | 17.0 | 17.2 | FIG. 3 L7 rim 17.1 mm; axial ray needs 16.78 mm. |
| Surface 13 `sd` | 16.5 | 17.2 | Stored value equalled the axial ray height (16.50 mm) with no margin; FIG. 3 L7 rim 17.1 mm. |
| Surfaces 4, 5 `sd` | 16.5, 16.0 | 16.6, 16.6 | The published R4, R5, D4 close the L2–L3 air space at h = 16.86 mm; 16.6 mm keeps 0.06 mm rim clearance. On-axis beam limit moves from about f/1.30 to about f/1.25. |
| `gapSagFrac` | default 0.90 | 0.97 | Needed for the 16.6 mm pair (intrusion 1.715 mm = 96.7 % of D4 = 1.773 mm). Render diagnostics report zero trim on every surface at both focus ends. |
| `var["13"]` close gap | 41.584 | 41.538 | Calculated. The old 6.2 mm extension focused at a 497.0 mm object-to-image distance; 6.154 mm gives 500.0 mm, magnification −0.1231. |
| L1, L2 `glass` | "… — OHARA LASF014" | S-LAH64, OHARA catalog equivalent | Patent names no glass. Old label resolved to HIKARI J-LASF014 while saying OHARA. S-LAH64 is 1.78800 / 47.37. |
| L3 `glass` | H-ZF39 (CDGM) | S-TIM39, OHARA catalog equivalent | Same coordinate (1.66680 / 33.05) from Canon's usual supplier family. |
| L4 `glass` | "… — OHARA SF6" | SF6, SCHOTT catalog equivalent | Label resolves to Schott SF6 (1.80518 / 25.43); wording now says so. |
| L5, L7 `glass` | "… — OHARA LASF016" | S-LAH66, OHARA catalog equivalent | Same resolved glass as before (1.77250 / 49.60); wording changed from identity to equivalent. |
| Header comment | "marginal ray + 8 % clearance" | scaling, stop and semi-diameter notes | The old statement was untrue for surfaces 4–5 and 8–11, which sat below the f/1.2 marginal ray. |

Analysis sync: inventor and assignee lines now match the structured fields; exact scale factor stated; new paragraphs
on the diaphragm position, the semi-diameter basis and the L2–L3 contact limit; glass tables reworded as catalog
equivalents with Cavina's names kept as attribution; wrong HOYA cross-references removed (NBFD13 is 1.80610 / 40.7 and
NBFD10 is 1.83400 / 37.3 in the repo catalog; the matching HOYA coordinates are TAF4 and FD60); note that the
patent's coefficient legend swaps the coma and astigmatism labels (the printed numbers satisfy III = II² / I);
close-focus extension 6.2 → 6.15 mm and labelled as calculated.

### Checks on the result

- Surface validator: no errors. Image-circle floor: 0 undersized.
- Exact meridional trace at f/1.2, Y = 21.6 mm: chief ray reaches Y at ω = 23.78° (patent ω = 23°, about −2 %
  distortion); no surface blocks the chief ray; surfaces 8–13 now clear the axial marginal ray by 0.2–0.7 mm.
  Surfaces 4 and 5 still sit 0.75–0.83 mm below it (see open limitations).
- Engine build: EFL 50.0004 mm, wide-open f/1.2, stop radius 14.155 mm, half-field 26.07°.
- Glass labels: all seven resolve to catalog glasses compatible with the patent nd / νd (largest Δνd 0.09).
- Live page (local dev build): element heights in the SVG equal 2 × sd × scale for the new values; on-axis rays all
  reach the image point; at the 15.6° off-axis field three of five rays pass and the outer two are vignetted at L2
  front and L7 front, as expected for an f/1.2 Gauss; the 50 cm focus state shifts the whole lens by 6.15 mm.

### Open limitations

- The Embodiment 3 prescription cannot pass a full f/1.2 axial beam: the L2–L3 air space closes at 0.337 f while the
  f/1.2 marginal ray needs 0.347 f. Surfaces 4 and 5 therefore remain below the f/1.2 marginal height by necessity;
  the modelled on-axis limit is about f/1.25 (geometric limit about f/1.24).
- FIG. 3 draws the L2 and L3 rims at about 18.6 and 17.8 mm, which the published R4 / R5 / D4 do not permit; the
  drawing is not dimensionally exact in that region.
- Semi-diameters remain figure-derived estimates; the patent publishes none.
- The production-design attribution to Embodiment 3 rests on a secondary source; Canon has not confirmed it.
