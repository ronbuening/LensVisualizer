# Audit Log — Nikon AI Nikkor 135mm f/2

Patent: US 4,062,630, Example V

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4062630.pdf`.
- Example V row confirmed L1 / surface 1 nd = 1.71700, vd = 48.1.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `HOYA NBFD3 (717/481)` | `S-LAM3 (OHARA)` | Public OHARA catalog row is the closest coefficient-backed match. |

### Analysis sync

- Updated the L1 glass identification and summary table.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 4,062,630 Example V surface 3: `R=38.148`, `d=2.74`, `nd=1.62606`, and `νd=39.1` agree with the data.
- Replaced false `HOYA FD60` wording with code-first `626391` barium flint. Public CDGM H-BaF8 is a coefficient-backed code equivalent, but the patent does not identify its supplier.
- Synchronized the analysis identification and code table. No geometry changed.

## 2026-08-07 — Legacy FD3 correction

- Visually rechecked US 4,062,630 Example V: L4 remains `nd=1.740`, `νd=28.2`, code 740282.
- HOYA's obsolete catalog identifies this exact coordinate as FD3 (`1.739999 / 28.245048`). The old FD110 label
  was incorrect: FD110 is code 785257.
- Relabeled L4 as an FD3 catalog equivalent with the production supplier unspecified. Strict and trusted catalog
  coverage are now complete at `6/6`; no geometry changed.

## 2026-09-21 — First-added diagram audit, lens 46

Source: local `patents/US4062630.pdf` (7 pages, 300 dpi CCITT scan with an OCR text layer). Front page and Fig. 1
(p. 1 large copy, p. 2 sheet 1/3), Example V table (p. 6, column 4), T.L. table (p. 6), Claim 8 (p. 7, column 6).

### Retained after re-reading the source

- Front page: US 4,062,630, Sei Matsui (sole inventor), Nippon Kogaku K.K., granted 13 Dec 1977. Subtitle Example V.
- Example V and Claim 8 agree with each other and with the data on all ten radii, nine spacings, six nd and six νd
  (printed r3 = 38.148 in both places; only the OCR layer drops a digit). General data f = 100, F = 2.0, 2W = 18°,
  ΣD 71.26, B.f. 29.22, T.L. 100.48, telephoto ratio 1.005. No aspheres, no conics, no focus data, no glass names.
- Glass labels: all six resolve to catalog rows compatible with the patent pairs (S-LAM3, H-BaF8 by code 626391,
  S-BAL35, FD3, SF1 ×2). No patent statement on anomalous dispersion. Unchanged.
- Example choice: the patent does not identify a production example. At × 1.35 all five examples return round
  millimetre radii and thicknesses, so the pattern fixes the scale but not the example. Example V retained with the
  existing caveat in the analysis.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| Scale of `R`, `d`, `sd`, `var` | patent scale f = 100 (header promised × 1.35 but did not apply it) | every value × 1.35; R to 0.001 mm, d exact products; ΣD 96.201, B.f. 39.447, T.L. 135.648 | Repo scaling convention for normalized patents. Paraxial EFL 134.995 mm, BFD 39.440 mm. Round production values (420 / 51.5 / 30.5 / 270 / −47 mm; 11.1 / 0.5 / 3.7 / 17.9 / 3.5 / 12.0 / 1.6 / 33.9 / 12.0 mm) support s = 1.35. |
| `focalLengthDesign`, element `fl` | 100; 98.1 / −94.9 / 42.1 / 47.0 / −19.0 / 98.2 | 135; 132.5 / −128.2 / 56.8 / 63.5 / −25.7 / 132.5 | Thick-lens values at the stored scale: 132.47 / −128.18 / 56.79 / 63.51 / −25.70 / 132.52. |
| STO position | in d5, 2.09 + 0.50 mm (patent scale), header "inferred from Fig. 1" | in d8, 11.2 mm behind r8 + 22.6985 mm to r9 | The stop is drawn only, never tabulated or described. Fig. 1 shows the two diaphragm bars in d8 (page x = 1418–1431 px; r8 vertex line centred 1291, r9 1694.5 → 16.07 px/mm → 8.28 mm behind r8 at patent scale). Nothing is drawn in d5. |
| STO `sd` | 16.2 (patent scale, d5 plane) | 15.7 | Exact f/2 marginal ray height at the new stop plane 15.70 mm; drawn half-opening 196.5 px = 12.2 mm patent = 16.5 mm production. |
| 7 `sd` | 14.1 (19.0 at production scale) | 25.8 | The old rim clipped the axial f/2 beam (needs 15.34 patent / 20.70 mm production). Fig. 1: r7 runs to the common L4/L5 rim, 307.5 px = 19.1 mm patent. |
| 6 `sd` | 17.2 (23.2) | 25.8 | Same ground cylinder as surface 7 in Fig. 1; the old value left 0.07 mm over the axial beam (23.13 mm). |
| 9, 10 `sd` | 9.3 / 8.8 (12.6 / 11.9) | 17.5 / 17.5 | Fig. 1 L6 rim 209 px = 13.0 mm patent; the old rims were 29–32 % short of it. With the old stop plane they also blocked the corner chief ray (9.43 / 10.30 mm needed at patent scale). |
| 1, 2, 3, 4, 5, 8 `sd` | 25.9 / 25.0 / 25.0 / 20.3 / 18.7 / 13.7 | 35.0 / 33.8 / 33.8 / 27.4 / 25.2 / 18.5 | × 1.35 only. Fig. 1 reads 35.5 (L1), 31.8 (L2), 29.1 (L3), 18.0 mm (r8 curve end; flat annulus outside): all within about 15 %. Surface 4 is capped by sd/|R| ≤ 0.9 (27.45 mm). |
| `projection` | absent (engine half-field estimate 7.8°, then 13.6° after the rim fixes) | rectilinear, `fullFieldDeg: 18`, `maxTraceFieldDeg: 9` | Patent 2W = 18°; exact chief ray to Y = 21.6 mm leaves at 8.97°. |
| `var["10"]` | [29.22, 42.62] | [39.447, 57.54] | Calculated unit-focus extension 18.09 mm for the production 1.3 m; not a patent value. |
| `fstopSeries`, `maxFstop` | ends at 16; max 32 | ends at 22; max 22 | Production aperture ring f/2–f/22 (JAPB Ai 135/2 data sheet). |
| `specs`, header, `focusDescription` | patent-scale wording; stop "between Groups II and III" | production-scale wording; scaling, stop and semi-diameter notes; close state labelled calculated | Follows the rows above. |

Analysis synced: §1 scale paragraph and minimum-aperture row, §3 table caption, r3 OCR note and stop paragraph,
§4 L6 role, §5 stop remark, §11 close-focus BFD, semi-diameter method and the example-choice note.

### Checks on the result

- Paraxial EFL 134.995 mm, BFD 39.440 mm against the stored 39.447 (defocus 0.007 mm); 135 / 1.35 = 100.00 and
  39.447 / 1.35 = 29.22 reproduce the patent. Authored stop radius gives paraxial f/1.95; the engine's derived f/2
  iris is 15.70 mm.
- Exact axial f/2 marginal heights on surfaces 1–10: 33.75 / 32.83 / 30.28 / 26.34 / 24.71 / 23.13 / 20.70 / 16.72 /
  11.89 / 10.17 mm — all inside the stored rims. Full-field chief ray (8.97°): 17.54 / 15.77 / 15.03 / 13.62 / 9.18 /
  7.57 / 4.53 / 3.99 / 8.42 / 10.26 mm. Corner bundle (linear estimate from rim-ray heights): the lower half is cut first at the L1 rear rim (about 53 %
  passes) and the upper half at the L6 rear rim (about 70 %).
- Close state: paraxial object-to-image distance 1299.98 mm, magnification 0.134 (production specification 1:7.5).
- Surface validator reports no errors; image-circle floor reports 0 undersized; six of six glass labels compatible.
- Live: production baseline showed the stop between L3 and L4, a tapered L5 and a small L6. The local page's SVG was
  inspected through the DOM (screenshots were unavailable because the shared browser pane was hidden): element
  heights 35.0 / 33.8 / 27.4 / 25.8 / 25.8 / 17.5 mm at 4.378 px/mm, stop stubs between L5 and L6, all six axial
  rays reach the image point, four of five 5.4° rays pass with one ghosted at L1, and focus = 1 moves the whole
  lens 18.09 mm forward.

### Open limitations

- The stop's axial position is a measurement of a generic drawing shared by five examples, good to perhaps ±1.5 mm
  at production scale. No iris diameter, clear aperture or focus travel is published.
- The shared scratch clear-aperture probe fails its axial trace at surface 4 (its Newton start point on the vertex
  plane lies outside the steep R = 30.5 mm sphere); axial heights above come from a closed-form spherical trace.
- Surface 4 cannot reach the drawn L3 rim (29.1 mm) under the renderer's 0.9 rim-slope cap.
- Which of the five examples Nikon manufactured remains unconfirmed.
