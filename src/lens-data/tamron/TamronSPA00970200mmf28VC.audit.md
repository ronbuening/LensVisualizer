# Audit Log — Tamron SP 70-200mm f/2.8 Di VC USD (A009)

Patent: US 8,867,144 B2, Example 1, Figure 1

## 2026-08-17 — Patent-figure, display-name, movement, and glass review

### Semi-diameters

- Figure 1's wide, middle, and telephoto rows were rendered from the local patent at 300 dpi and checked directly.
- The modeled group envelopes track the source drawing across the three zoom states. No SD change was justified, and the image-circle audit is clean.

### Display name and glass

- Verified the displayed name against Tamron's official `SP 70-200mm F/2.8 Di VC USD` product designation.
- Added first-party Hoya formula-3 rows for PCD4, TAFD5G, and BAC4. All 23 physical glasses now have strict coordinate-compatible Sellmeier coverage.
- L2 now carries the construction drawing's single XLD classification, and L3, L4, L15, and L17 carry its four LD classifications, all as inferred diagram tags.

### Movement and diagram labels

- Recomputed every published infinity and close-focus state. LG3 alone moves objectward for closer focus; LG2, LG3, and LG4 retain their imageward wide-to-tele travel relative to fixed LG1 and LG5.
- Replaced long power/focus descriptions with the patent's concise `LG1`-`LG5` labels.

## 2026-10-08 — Square rims kept square and cross-gap limit raised (surfaces 15 and 27 raised; none squared)

Rule (maintainer, 2026-10-08, "A clipped stated beam" in `agent_docs/patent-figure-sd-audit-procedure.md`). Point 1:
a surface that clips the stated on-axis ray rises only to the height that ray reaches there at the station that needs
most, rounded up at the file's 0.1 mm precision, and every other surface keeps its value. Point 3: where the
validator's cross-gap limit refuses such a value although the surfaces do not cross and the figure draws the elements
meeting at the rim, `gapSagFrac` takes the smallest two-decimal value that admits it. Point 2 (square rims stay square)
was checked and has no element to act on here; the figure remains a check only (point 4).

Starting point. The file before any rim was raised is the one at commit `c3fc5a2d`. The proposal listing
(`audit:aperture` with `--raise`) on it prints 15: 16.5 → 17.1 and 27: 14 → 14.9, with "none" in its square-rim column:
no element with a clipping face had one value on both faces (L9 carried 20.0 / 16.5 mm on surfaces 14 / 15, L15
carried 18.6 / 14.0 mm on surfaces 26 / 27). Neither raise passed the validator at the default 0.90.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 15 `sd` (L9 rear) | 16.5 mm | 17.1 mm | Stated f/2.90 ray reaches 17.023 mm at 194.5 mm, infinity focus (13.761 mm at 118 mm, 11.749 mm at 71.8 mm) |
| Surface 27 `sd` (L15 rear) | 14.0 mm | 14.9 mm | Stated f/2.90 ray reaches 14.846 mm at 194.5 mm, infinity focus (14.810 mm at 118 mm, 14.842 mm at 71.8 mm) |
| `gapSagFrac` | 0.90 (default, not set) | 1.00 | Smallest two-decimal value that admits surface 27 at 14.9 mm against surface 28 (L15 / L16); also covers surfaces 15 / 16 (L9 / L10), which need 0.94 |

No other surface changed. `STO` is untouched and no semi-diameter was lowered.

### How Figure 1 draws each rim

Read from pixel runs of a 600 dpi render of Sheet 1 (PDF p. 2). Axial scale 10.446 px/mm, from the first vertex
(x = 1308.5) to the image plane (x = 3749) of the wide row over the 233.6216 mm track; fitting the drawn arcs of
surfaces 10, 14, 20, 24 and 29 gives a vertical scale of 10.16-10.68 px/mm, so the drawing is isotropic to about 3 %.
The page image in the PDF is a 300 dpi bilevel scan, so one source pixel is 0.19 mm and the half-heights below are
good to about 0.2 mm.

| Element | Rim as drawn | Drawn half-height, front face / rear face | Model, front face / rear face |
|---|---|---:|---:|
| L9, in D3 (surfaces 14-15) | Square-cut, one common rim with L8 | 18.6 mm / 18.6 mm | 20.0 mm / 17.1 mm |
| L15 (surfaces 26-27) | Square-cut | 17.2 mm / 17.2 mm | 18.6 mm / 14.9 mm |

- D3 (L8 + L9): one flat cap joins the front face of L8 to the rear face of L9 (wide row, x = 1904-1955: strokes at
  y = 2719-2723 and 3106-3111 about the axis at y = 2916.5, 18.7 and 18.4 mm; tele row 18.8 and 18.7 mm). The cemented
  surface runs into the same cap just ahead of the rear corner, so L9 is drawn with both faces ending at one height.
  The rear face of L9 and the front face of L10 are separate strokes up to 15.5 mm and one merged stroke from 16 mm
  to the rim (wide row; the middle and tele rows show the same closing air space); L10 itself is drawn square at
  18.9 mm and L7 at 18.6 mm.
- L15: a short flat cap joins its two faces (x = 2733-2748: 17.0 and 17.1 mm in the wide row, 16.9 and 17.2 mm in the
  middle row, 17.2 and 17.3 mm in the tele row). Below the cap the rear face of L15 and the front face of L16 are one
  merged stroke from 16 mm down to 12 mm and separate strokes inside 11.5 mm, and D5 (L16 + L17) is drawn square 1 mm
  lower, at 16.0-16.3 mm.

Both elements are drawn square, and neither can be made square under the rule. Point 2 applies only to an element
whose two faces carried one value, and the two rear faces cannot reach the front-face values in this prescription:
surfaces 27 and 28 meet at 14.902 mm while the stated ray needs 15.823 mm on the front face of L15 (surface 26), and
surfaces 15 and 16 meet at 17.697 mm while surfaces 13 and 14 carry 20.1 and 20.0 mm. The figure's square rims at
17.2 and 18.6 mm lie above both closing heights, so the drawing is schematic at these two rims. Both elements were
raised face by face. Against the figure the two rear faces moved the right way: surface 15 is 8 % below the drawn rim
(11 % before) and surface 27 is 13 % below it (19 % before).

### Cross-gap pairs under `gapSagFrac` 1.00

| Pair | Air gap | Shared band | Combined sag | Share of gap | Rim clearance | Surfaces meet at | Smallest value that admits it |
|---|---:|---:|---:|---:|---:|---:|---:|
| 27 / 28 (L15 rear / L16 front) | 1.8091 mm | 14.9 mm | 1.8087 mm | 99.98 % | 0.0004 mm | 14.902 mm | 1.00 |
| 15 / 16 (L9 rear / L10 front) | 3.1602 mm | 17.1 mm | 2.9477 mm | 93.3 % | 0.213 mm | 17.697 mm | 0.94 |

- At 0.99 the build is refused: `Air gap "27"→"28": combined surface sag (1.81 mm) exceeds allowed gap intrusion
  (1.791 mm of 1.809 mm) at sd=14.9 — elements will overlap in rendering`, once for the fixed check and once per zoom
  position. The exact ray height of 14.846 mm already uses 99.25 % of the gap, so no rounding of surface 27 would
  admit a value below 1.00.
- Pair 15 / 16 alone is refused at 0.93 (2.95 mm against 2.939 mm of 3.160 mm at sd=17.1) and passes at 0.94.
- Neither pair crosses, both gaps are fixed through zoom and focus, and Figure 1 draws both pairs meeting at the rim.
- The next largest share is 86.8 % (surfaces 33 / 34), unchanged.

### Result

Traced at infinity focus, wide open (`audit:aperture` census):

| Station | Before | Limiter before | After | Limiter after |
|---|---|---|---|---|
| 71.8 mm | f/2.90 → f/3.07 (+5.9 %) | rim of surface 27 | f/2.90 → f/2.90 (-0.0 %) | iris (`STO`) |
| 118 mm | f/2.90 → f/3.07 (+5.7 %) | rim of surface 27 | f/2.90 → f/2.89 (-0.2 %) | iris (`STO`) |
| 194.5 mm | f/2.90 → f/3.07 (+5.9 %) | rim of surface 27 | f/2.90 → f/2.90 (+0.0 %) | iris (`STO`) |

- The file builds and validates, and the `--raise` listing prints no surface.
- Field coverage is 100 % at all three stations (21.65 mm of 21.65 mm), as before, and the image-circle audit lists
  no undersized surface.
- The render diagnostic reports no trimmed surface at 71.8, 118 or 194.5 mm.
- Geometry figures that depend on the two rows: L9 edge thickness at the 17.1 mm shared height 1.672 mm (1.901 mm at
  16.5 mm), L15 at 14.9 mm 2.743 mm (2.968 mm at 14.0 mm); rim angles 4.8° on surface 15 and 5.2° on surface 27. The
  smallest edge thickness (0.423867 mm, L4) and the largest rim angle (37.430°, surface 29) are unchanged.

### Render against Figure 1

Screenshots at 194.5 mm and 71.8 mm, set beside the tele and wide rows of Figure 1.

- Element order and grouping match in both states: D1, L3, L4 / D2 / L7, D3, L10 / L11, D4 / stop / L14, L15, D5 / D6,
  L20 / L21, L22, L23, with LG2-LG4 displaced as the rows show.
- Proportions hold within the 15 % band. Drawn against modeled half-heights in the wide row: D2 23.1 against 24.0 mm,
  L7 18.6 against 19.4 mm, L10 18.9 against 19.3 mm, L11 19.5 against 20.4 mm, D4 19.6 against 21.3 mm, L14 19.5
  against 20.3 mm, D5 16.1 against 16.4 mm, L21 15.2 against 15.7 mm, L23 17.3 against 17.6 mm.
- D3 reads as square with L10 touching it at the rim, as drawn: the edge of L9 runs from 20.0 mm on the cemented
  surface to 17.1 mm on its rear face over 0.15 mm of axial distance, so it is nearly a straight cut.
- L15 does not read as the figure draws it. The render shows a pointed rim, the front face running up to 18.6 mm and
  a straight edge falling back to the rear rim at 14.9 mm, where it touches the front face of L16; the figure shows a
  short square cap at 17.2 mm. The shape was the same before this pass with the rear rim at 14.0 mm.
- The straight edge the renderer draws for L9 passes through the front corner of L10: above 18.1 mm the front face
  of L10 (rim at 19.2 mm) lies inside that edge, by 0.27 mm at the corner (0.25 mm before this pass). It is under one
  pixel at normal size and the render diagnostic does not report it. No other pair of drawn outlines overlaps at any
  of the three zoom stations, at infinity or at the 1.3 m focus state; L15 and L16 touch at the 14.9 mm rim only.

### Left open

- L15 and D3 are drawn square in Figure 1 and stepped in the model. Squaring either would mean lowering a front face
  or raising a rear face past the height where it meets the next element; neither is inside the rule.
- The 27 / 28 rims are 0.0004 mm apart at 14.9 mm. The on-axis f/2.90 beam fills that air gap to within 0.056 mm of
  the height where the two surfaces meet, so the stated aperture leaves no room for a rim margin at this pair.
- The L10 front corner sits inside the drawn edge of L9 as described above; it predates this pass.
- Surface 33 (D6 rear, 11.8 mm) is 15 % below the 13.9 mm the figure draws for D6. It clears the stated ray by
  0.505 mm and was not changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Read local `patents/US8867144.pdf` (US 8,867,144 B2, cover on PDF page 1). The patent has no formula for a
  partial-dispersion deviation and no normal line. Its conditions (1)-(5) are f2/ft, f3/ft, f5B/f5, νd ≤ 30 and 2ω
  (stated in column 4, PDF page 31; discussed in columns 6-8, PDF pages 32-33). The abbreviation key in column 10
  (PDF page 34) lists f, bf, FNo., ω, r, d, nd and νd only.
- The Embodiment 1 table (columns 10-11, PDF pages 34-35) prints r, d, nd and νd. It has no PgF / θgF column and no
  deviation for any glass, so no stored value can be checked against a patent figure.
- All 23 elements author `nC`, `nF` and `ng`, so the trace reads those indices and ignores `dPgF`; the field is an
  annotation. The stored values were HOYA's catalog ΔPgF for the catalog-equivalent glasses, copied straight into the
  field. They fit the line 0.64833 − 0.0018·νd, not the engine's 0.6438 − 0.001682·νd: on that line the repo's HOYA
  curves land within 0.0001 of twelve of the fourteen figures, eight of them exactly at four decimals. The two that do
  not check are FCD1 (the repo curve gives +0.0363 against the stored +0.0374) and TAF1 (the label resolves to an
  Ohara curve in the repo). The two lines differ by 0.00453 − 0.000118·νd.
- With no patent figure to use, each value is now the PgF of the element's own line indices,
  (ng − nF)/(nF − nC), minus the engine's line at the stored νd, written to six decimals.

| Element | Label | νd | Source figure: PgF of stored nC/nF/ng | Stored before (HOYA catalog deviation) | Stored after (engine line) |
|---|---|---:|---:|---:|---:|
| L1 | NBFD15-W | 33.27 | 0.588770 | 0 | +0.000930 |
| L2 | FCD100 | 95.10 | 0.532609 | +0.0564 | +0.048767 |
| L3 | FCD1 | 81.61 | 0.538588 | +0.0374 | +0.032056 |
| L4 | FCD1 | 81.61 | 0.538588 | +0.0374 | +0.032056 |
| L5 | TAFD25 | 31.31 | 0.594595 | +0.0028 | +0.003458 |
| L6 | LAC14 | 55.46 | 0.542994 | −0.006 | −0.007523 |
| L7 | PCD4 | 63.39 | 0.539487 | +0.0059 | +0.002309 |
| L8 | FC5 | 70.44 | 0.530347 | +0.009 | +0.005027 |
| L9 | FD60 | 25.46 | 0.615555 | +0.0132 | +0.014579 |
| L10 | TAFD5G | 42.72 | 0.564995 | −0.0067 | −0.0067 (unchanged) |
| L11 | TAF1 | 49.62 | 0.550771 | −0.0086 | −0.009568 |
| L12 | FC5 | 70.44 | 0.530347 | +0.009 | +0.005027 |
| L13 | TAFD5G | 42.72 | 0.564995 | −0.0067 | −0.0067 (unchanged) |
| L14 | TAC8 | 54.67 | 0.544978 | −0.0046 | −0.006868 |
| L15 | FCD1 | 81.61 | 0.538588 | +0.0374 | +0.032056 |
| L16 | NBFD15-W | 33.27 | 0.588770 | 0 | +0.000930 |
| L17 | FCD1 | 81.61 | 0.538588 | +0.0374 | +0.032056 |
| L18 | FD60 | 25.46 | 0.615555 | +0.0132 | +0.014579 |
| L19 | BAC4 | 56.04 | 0.548768 | +0.001 | −0.000772 |
| L20 | E-F5 | 38.01 | 0.582494 | +0.0029 | +0.0029 (unchanged) |
| L21 | LAC14 | 55.46 | 0.542994 | −0.006 | −0.007523 |
| L22 | TAFD25 | 31.31 | 0.594595 | +0.0028 | +0.003458 |
| L23 | FDS90 | 23.78 | 0.619101 | +0.0137 | +0.015299 |

- Left unchanged: L10 and L13 (TAFD5G; the indices give −0.006950, 0.000250 from the stored −0.0067) and L20 (E-F5;
  the indices give +0.002627, 0.000273 from the stored +0.0029). All three were already within 0.0003 of the
  engine-line value and keep their four-decimal figures. No element is e-line referenced.
- Precision of the source figure: the line indices are five-decimal catalog values, so PgF from them is good to about
  ±0.001 on the low-dispersion glasses (nF − nC is 0.00460 for FCD100). The repo's HOYA curves give +0.049777 for
  FCD100 and +0.031200 for FCD1 on the engine's line, against +0.048767 and +0.032056 here. The stored indices were
  used because they are what the trace reproduces.
- `nC`, `nF`, `ng`, nd, νd, glass labels, `apd` tags and surfaces are untouched. The five existing `apdNote` strings
  (L2, L3, L4, L15, L17) now quote the PgF of the stored indices, the runtime value and the HOYA catalog deviation
  that was stored before; no `apdNote` was added. The header box of the data file gained a "NOTE ON PARTIAL DISPERSION".
- `TamronSPA00970200mmf28VC.analysis.md`: the statements about what the file stores were corrected (the L2 and L23
  paragraphs, the glass-selection paragraph and its table, the chromatic-strategy sentence and source 5). The note
  evaluates no partial-dispersion condition, because the patent has none.
- The file builds and validates after the edit.
