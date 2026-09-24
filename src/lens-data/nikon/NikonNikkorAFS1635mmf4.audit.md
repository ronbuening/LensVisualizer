# Audit Log - Nikon AF-S NIKKOR 16-35mm f/4G ED VR

Patent: US 2010/0238560 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20100238560A1.pdf`; local text confirms the queued rows.
- Updated surface 1A to `Q-LASFPH2S (Nikon)` for nd=1.76690, vd=46.85.
- Updated surface 16 to `S-BAH27 (OHARA)` for nd=1.70154, vd=41.17.
- Remaining incomplete Sellmeier coverage is the existing UV-cure resin layer.

## 2026-09-23 — First-added diagram audit, lens 66

Source: local `patents/US20100238560A1.pdf` (300 dpi CCITT scan with an OCR text layer). Front page p. 1, FIG. 1
p. 2 (sheet 1/18; axis vertical, object at the bottom, drawn at the wide state), ¶0037–¶0038 and ¶0053–¶0065
pp. 22–24, Table 1 p. 25. All numbers were read from the rendered page image, not the text layer.

### Retained after re-reading the source

- Front page: inventor Makoto Fujimoto, assignee Nikon Corporation, published 2010-09-23. Subtitle names Example 1.
- All 30 Table 1 rows (`R`, `d`, `nd`, `νd`, stop at surface 15 with a fixed 3.26 mm gap), the four aspheres
  (κ → K = κ − 1 per expression (a); odd terms zero) and the W/M/T rows for d9, d14, d22 and Bf match the data file.
  Paraxial EFL is 16.476 / 23.992 / 33.929 mm against 16.48 / 23.99 / 33.94. The back-focus residual is at most
  0.016 mm. Group focal lengths are −21.304 / +34.141 / −46.903 / +50.014 against −21.30 / 34.14 / −46.90 / 50.02.
  Stored element `fl` values match thick-lens values.
- Group motion: FIG. 1 shows all four groups moving. G1 follows a curved path, and G2, G3 and G4 move toward the
  object. The tabulated gaps give a G1 vertex 168.50 → 160.04 → 164.56 mm from the image, G2 111.08 → 119.65 →
  134.02 mm, stop 94.02 → 99.85 → 111.72 mm and Bf 38.60 → 50.93 → 67.55 mm, which is consistent with FIG. 1.
  `zoomPositions` [16.48, 24.0, 33.94] and the "Wide"/"Tele" slider labels are retained. The middle station is
  f = 24.00 in [Specifications] and 23.99 in [Variable Distances].
- Focus: ¶0060 names CL21 as the focusing lens. No close-focus distance or gaps are published, so gaps stay
  zoom-only and the viewer shows focus as not modeled. `closeFocusM` 0.29 m is Nikon's published MFD.
- Wide-field launch: an exact trace reaches IH = 21.64 mm at ω = 54.17° / 41.78° / 32.01°, against the patent's
  2ω = 108° / 84° / 63°.
- Source conflict: Table 1 prints TL = 169.18 / 160.72 / 165.24 mm. The tabulated distances sum to 168.50 /
  160.04 / 164.56 mm, 0.68 mm less at every station, while still reproducing f and Bf. The tabulated values are
  retained and the conflict is stated in analysis §3.
- νd-only catalog offsets are retained where nd is exact: L31 S-BAH27 (+0.07), L45 S-FSL5 (−0.17) and L46 S-LAH53
  (+0.16).

### Changes

| Field / surface | Before | After | Evidence |
|---|---|---|---|
| Header / analysis R30 "erratum" | "Patent lists −724.48 (decimal error)" | Printed value −72.448 is used as-is; the OCR text layer mis-reads it | Table 1 p. 25 image row 30 reads −72.448. |
| `groupCount`, `specs` | 12 groups | 11 groups (+ resin layer) | Table 1 has 11 air-separated components. Nikon's published 12 groups is noted in the analysis as a production difference. |
| `specs` ED line | "2 ED GLASS ELEMENTS (S-FPL51)" | "2 ED-CLASS ELEMENTS (νd 82.5)" | The patent gives only nd/νd. |
| L11 `glass` | `Q-LASFPH2S (Nikon)` (catalog 1.76544 / 46.75) | `J-LASFH2 (HIKARI nearest catalog equivalent…)` (1.76684 / 46.78) | Row 1 is 1.76690 / 46.85. Δnd is −6.0e-5, where it had been −1.5e-3. There is no exact catalog match. |
| L41, L43 `glass`, `dPgF`, `apdNote` | `S-FPL51 (OHARA) — ED` (1.49700 / 81.55), `dPgF` 0.033 | `J-FKH1 (HIKARI catalog equivalent…)` (1.49782 / 82.57). The non-patent `dPgF` is removed; `apd` stays `"inferred"` | Rows 23 and 25 are 1.49782 / 82.51. The patent lists no θgF and does not call the glass anomalous. |
| 1A `sd` | 20.0 | 24.0 | FIG. 1 L11 rim 292 px × 0.0822 mm/px (scale from the 1581 px / 129.90 mm S1–S30 span). The chief ray needs 21.67 mm, so the old rim blocked it. |
| 2A `sd` | 14.0 | 16.0 | FIG. 1 curve ends on a flat annulus at 192 px (15.8 mm). The chief ray needs 15.68 mm and was blocked. Slope at the rim is 44.9°. |
| 3, 4 `sd` | 20.0 / 15.4 | 17.3 / 17.3 | FIG. 1 L12 rim is 211 px, drawn as a rectangle. |
| 5 `sd` | 17.0 | 15.0 | FIG. 1 S5 curve ends at 15.0 mm on L13's flat (rim 17.1 mm). With 4 = 17.3 it clears the 4→5 gap-intrusion limit. Chief ray 13.14 mm. |
| 8, 9 `sd` | 18.0 / 17.5 | 15.3 / 15.3 | FIG. 1 L14 rim is 186 px with a visible edge. The old pair gave a zero edge thickness. |
| 10–14 `sd` | 15.0 / 12.0 / 12.0 / 14.0 / 14.0 | 10.6 each | FIG. 1 CL21 and L23 rims are 128 px (10.5 mm). The f/4.1 tele axial beam needs up to 10.08 mm. |
| 18, 19 `sd` | 8.5 / 8.5 | 8.58 / 8.7 | Both clipped the tele f/4.1 axial beam (8.56 / 8.62 mm needed). The biconvex air lens closes at about 9.0 mm (the surfaces meet in FIG. 1). 8.58 mm is the validator's gap-intrusion limit. |
| 21, 22 `sd` | 13.0 / 14.0 | 10.3 / 10.3 | FIG. 1 L34 rim is 125 px. Axial beam 9.75 mm. |
| 25, 26 `sd` | 18.0 / 18.0 | 16.0 / 16.0 | FIG. 1 CL41 is one block with a 184 px rim. Set equal to the retained 23/24 values; the drawn edge length fits 16 mm. |
| 30A `sd` | 19.5 | 15.8 | FIG. 1 CL42 rim is 191 px (15.7 mm). The asphere slope reverses at about 16.15 mm, so the old rim was past turnover. |
| STO `sd` | 8.5 | 9.0 | Now records the largest inferred iris (tele 8.98 mm). The engine derives the station radii. |
| `zoomApertureModel` | absent | `"from-nominal-fno"` | FNO 4.1 at W/M/T with the stop moving in G3. A fixed iris had given about f/5.6 at tele. Inferred radii are 6.42 / 7.36 / 8.98 mm. |
| `fstopSeries`, `maxFstop` | starts 4; max 16 (default) | starts 4.1; max 22 | f/4 is not reachable at the source f/4.1. The production minimum aperture is f/22. |
| Analysis | several | synced | Element/group counts, glass names (L11, L31, L41/L43), R30 note, group-motion table, 0.29 m attribution, focus prose, asphere rim departures, and the SD/aperture/field-of-view notes in §9. |

G1 surfaces 6/7A (17.0 / 14.0; FIG. 1 resin extent 15.3 mm), CL31/L33 16/17/20 (10.5; FIG. 1 9.5 mm), CL41 23/24
(16.0; FIG. 1 15.1–16 mm) and CL42 27–29 (16.5 / 16 / 16; FIG. 1 15.7 mm) are within about 11 % of the drawing
and are retained.

### Checks on the result

- The surface validator passes. The image-circle floor reports no undersized surfaces.
- The exact chief ray at IH = 21.64 mm passes every rim at all three stations, and no surface clips the f/4.1 axial
  beam. Corner-bundle clipping per side is largest at 2A (83 %), 7A (69 %), 5, 8, 9 and 10 (46–51 %).
- Engine wide-end half-field is 40.8° → 44.6°, still limited by 2A's paraxial estimate. `zoomFOPENs` is
  4.1 / 4.1 / 4.1.
- Asphere rim values: 1A −698 µm at 24.0 mm; 2A sag 8.25 mm and slope 44.9° at 16.0 mm, beyond its 14.63 mm vertex
  radius; 7A +831 µm at 14.0 mm (unchanged rim); 30A +678 µm at 15.8 mm.
- Live check: the production baseline showed a small front group. On the local page (pane hidden, so this was an
  inspection of the rendered SVG), rendered element heights scale as 24.0 / 17.3 / 17.0 / 15.3 / 10.6 / 10.5 /
  16.0 mm, matching FIG. 1's proportions. Specs show 11 groups, the aperture control runs f/4.1–f/22, and focus
  reads "Not modeled". The coordinator then rendered both zoom stations fresh in headless Chromium: at 16.48 mm D9
  reads 28.97 and at 33.94 mm 2.10, G1 sits slightly image-side of its wide position, G2–G4 advance toward the object as
  one train, and the aperture reads f/4.1 at both ends.

### Open limitations

- The viewer's half-field estimate stops at about 44.6° at the wide end (source ω 54.2°). A rectilinear
  `projection` override is single-valued and unsuitable for a zoom.
- Iris radii are inferred from the nominal f-number, not published. No close-focus data exist, so focus travel
  is not modeled.
- The TL offset of 0.68 mm and the one-group difference from Nikon's published 12 groups are unresolved.
- G3 and G4 rims remain estimates within about 15 % of the drawing. L11 has no exact catalog glass match.
