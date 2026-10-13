# Audit Log — Canon RF 24-105mm f/4 L IS USM

Patent: US 2019/0278068 A1, Numerical Example 2 (Hatada / Canon), published 2019-09-12
Catalog version: bb70259

## 2026-05-10 — Patent glass relabel + analysis sync

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1, L6 / 10 | `glass` | `S-TIH6 (OHARA)` | `S-NPH1 (OHARA)` | Patent row [0097] lists nd=1.80810, vd=22.8; S-NPH1 round-trips code 808228, while S-TIH6 is nd=1.80518, vd=25.43. |
| L2 / 2, L3 / 4, L16 / 27 | `glass` | `S-BAL14 (OHARA)` | `S-LAL18 (OHARA)` | Patent row [0097] lists nd=1.72916, vd=54.7; S-LAL18 round-trips code 729547, while S-BAL14 is nd=1.56883. |
| L4 / 6, L9 / 16 | `glass` | `S-NPH2 (OHARA)` | `S-LAH98 (OHARA)` | Patent row [0097] lists nd=1.95375, vd=32.3; S-LAH98 round-trips code 954323, while S-NPH2 is nd=1.92286. |
| L5 / 8A, L15 / 25A | `glass` | `L-BAL35 (OHARA)` | `L-BAL42 (OHARA PGM)` | Patent row [0097] lists nd=1.58313, vd=59.4; L-BAL42 aliases to S-BAL42 and round-trips code 583594. |
| L8 / 14 | `glass` | `S-LAH55V (OHARA)` | `911353 — lanthanum (nd=1.91082, νd=35.3)` | Patent row [0097] lists nd=1.91082, vd=35.3. No current catalog entry round-trips this pair, so the six-digit code preserves a future upgrade path. |
| L10 / 17 | `glass` | `MC-7 (HOYA)` | `S-FPM2 (OHARA) / MC-7 (HOYA)` | Patent row [0097] lists nd=1.59522, vd=67.7; S-FPM2 round-trips code 595677 while retaining the existing MC-7 equivalence in the label. |
| L11 / 19 | `glass` | `S-TIM27 (OHARA)` | `S-NBH51 (OHARA)` | Patent row [0097] lists nd=1.74951, vd=35.3; S-NBH51 round-trips within patent precision, while S-TIM27 is nd=1.63980. |
| L12 / 20 | `glass` | `S-LAH79 (OHARA)` | `TAFD40 (HOYA)` | Patent row [0097] lists nd=2.00069, vd=25.5; TAFD40 round-trips code 001255, while S-LAH79 is nd=2.00330, vd=28.27. |
| L13 / 22 | `glass` | `S-TIH53 (OHARA)` | `S-TIH11 (OHARA)` | Patent row [0097] lists nd=1.78472, vd=25.7; S-TIH11 round-trips code 785257, while S-TIH53 is nd=1.84666. |
| L17 / 29A | `glass` | `L-LAM69 (OHARA)` | `Unmatched 764491 — PGM lanthanum crown (nd=1.76450, νd=49.1; not catalog L-LAM69)` | Patent row [0097] lists nd=1.76450, vd=49.1. Public L-LAM69 is a different 731405 glass, so the explicit unmatched six-digit code is retained. |

### Phase 2 — Retained-information audit

- Rechecked the surface prescription against patent [0097], Numerical Example 2. All retained `R`, fixed `d`, `nd`, and element assignments match the patent table; post-stop data labels are offset by one because the data file stores `STO` as its own row.
- Rechecked variable spacings `d5`, `d13`, `d27`, `d29`, `d31`, and `d33` against the patent wide/intermediate/telephoto table. Each first pair value in `var` matches the infinity-focus patent value.
- Rechecked aspherical surfaces 8, 9, 26, 27, 30, and 31: all K and A4-A12 coefficients match the patent table. The data labels are 8A, 9A, 25A, 26A, 29A, and 30A because of the explicit stop row.
- Effective diameters were reviewed against the patent table. Existing `sd` values remain render-tuned as documented in the file header and were not changed.

### Phase 3 — Spectral / metadata enrichment

- The patent provides no line-index or dPgF table, so no per-element `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Glass relabels upgrade most elements from mismatched or unresolved annotations to catalog-backed Sellmeier dispersion. L8 (`911353`) and L17 (`764491`) remain Abbe-based code fallbacks.
- Top-level metadata already included maker, patent year, design focal length/aperture, element/group count, mount, format, and focus description; no metadata additions were needed.

### Phase 4 — Analysis sync

- Updated `CanonRF24105mmf4L.analysis.md` throughout to match the audited glass labels and the code-fallback decisions.
- Corrected the close-focus note: the patent lacks close-focus spacing tables, but the data file estimates D27/D29 close-focus travel from Canon's 0.45 m MFD rather than coding all variable gaps as identical zoom-only pairs.
- Updated the glass summary table and removed the outdated claim that all 12 glass families were exact named catalog matches.

### Report status

- Generated mismatch reports: this lens no longer appears in `catalog-mismatches.generated.md` or `glass-relabel-candidates.generated.md`.
- `unresolved-glass.generated.md` still lists L8 (`911353`) and L17 (`764491`) as expected code-based fallbacks.

## 2026-08-07 — L-LAH91 catalog recovery

- Visually rechecked Numerical Example 2 in local `patents/US20190278068A1.pdf`; L17 remains `1.76450 / 49.1`.
- OHARA's 2026-07-01 catalog publishes low-softening L-LAH91 at `1.764500 / 49.096913` with vendor Sellmeier coefficients.
- Relabeled L17 as an L-LAH91 catalog equivalent while leaving Canon's production supplier unspecified. No patent constants or geometry changed.

## 2026-09-23 — First-added diagram audit, lens 89

Source: local `patents/US20190278068A1.pdf` (300 dpi scan with text layer; numbers read from the rendered page images).
Front page p. 1, Example 2 text [0066]–[0071] p. 18, Numerical Example 2 [0097] p. 21, Fig. 3 p. 4 (sheet 3/11),
Table 1 p. 24.

### Retained after re-reading the source

- Example 2 is the stored embodiment and matches the production lens: f = 24.72–101.84 mm, F/4.12 constant,
  18 elements / 14 groups, one νd 81.5 element, 2ω 82.4°–24.0°. Example 1 (24.72–131 mm) and Example 3 (F/2.88) do not fit.
- Patent identity, inventor (Takahiro Hatada), assignee, year and subtitle agree with the front page.
- All 33 rows of R, d, nd and νd, the stop position (patent surface 14), and all six aspheres match [0097]. The
  patent's K is the conic constant in the standard sag form and is 0 on every surface. The coefficients were
  re-read term by term. The three-station variable table (d5, d13, d27, d29, d31, d33) matches exactly. Only these
  three stations exist, with no interpolated or blended rows.
- Paraxial EFL 24.722 / 50.923 / 101.826 mm against 24.72 / 50.92 / 101.84. Infinity defocus (stored d33 − BFD)
  is +0.005 / +0.001 / +0.011 mm. The patent lists no filter or cover-glass block (BF = d33), so the stored last gap is the
  physical back focus.
- Unit focal lengths 88.25 / −18.38 / 24.16 / −40.84 / −68.35 / 72.42 match the lens-unit table. All element `fl`
  values equal the thick-lens values to the stored precision, and element `type` names agree with the R signs.
- Group motion: measured from the image plane, all six units move toward the object at each step (L1 front
  125.33 → 142.49 → 169.33 mm, stop 69.92 → 84.47 → 99.44 mm, L6 front 22.38 → 24.25 → 35.46 mm), matching the Fig. 3 arrows.
  d27 and d29 are non-monotonic with a constant sum (13.39 mm), so L3 and L5 travel together while L4 floats. The prose in
  [0068] ("L3–L4 interval increased, L4–L5 interval reduced") contradicts the table. The table is used, and the
  conflict is recorded in the header and in analysis §2.1.
- Focus unit L4 moving toward the image [0069] is retained. The IS subunit (L11 + L12) and Gfp (L13 + L14)
  are confirmed by the Fig. 3 brackets. Table 1's Example 2 column matches analysis §6.
- Glass: every stored nd/νd equals the patent row, and all labels resolve OK-compatible. L14 `apd: "inferred"` is
  retained because the patent does not call it anomalous-dispersion.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| All `sd` | "render-tuned" values (e.g. 1: 30.8, 6: 16.6, 20–25: 10.7–11.8, 15/16: 9.2/9.4) | patent effective diameter ÷ 2 (1: 31.5 … 6: 15.685, 20–25: 8.295–8.85, 15/16: 9.97/9.965, 32/33: 17.55/18.0) | [0097] publishes effective diameters for every surface. The old post-stop rims 15/16 (9.2/9.4) clipped the tele f/4.12 axial beam (9.97 mm needed). The old L3 doublet rims were 25–40 % oversize. An exact trace reproduces the patent values: post-stop EDs equal the tele axial marginal height, and every chief ray to Y = 21.64 passes. |
| Surface labels after the stop | 14 … 32 (patent number − 1); aspheres 25A/26A/29A/30A | 15 … 33; aspheres 26A/27A/30A/31A | Repo convention: labels carry the patent's surface numbers, and the stop row is `STO` (patent 14). `asph`, `var`, `groups` and `doublets` keys were renamed to match. |
| `varLabels` last gap | `"BF"` | `"D33"` | The patent names the gap d33 (BF is listed separately with the same value). |
| `var` close-focus d27 / d29 | 2.34 / 11.05, 4.75 / 8.64, 4.96 / 8.43 (travel 0.54 / 1.38 / 3.56) | 2.53 / 10.86, 5.29 / 8.10, 6.53 / 6.86 (travel 0.73 / 1.92 / 5.13) | Old gaps focused at 571 / 590 / 616 mm object-to-image (≈ 0.45 m from the front vertex, not from the image plane), but they were labelled 0.45 m. Re-solved paraxially for 450 mm object-to-image: β −0.070 / −0.138 / −0.249. The tele value matches the production 0.24× maximum magnification. Calculated, not patent data. |
| `nominalFno`, `fstopSeries`, `maxFstop` | 4; series from 4; max 16 (default) | 4.12; series from 4.12 to 22; max 22 | Patent FNO is 4.12 at all stations, so f/4 was unreachable. The production minimum aperture is f/22. |
| `zoomApertureModel` | absent (fixed iris 6.74 mm, giving about f/5.8 at tele) | `"from-nominal-fno"` | FNO is constant while the stop rides in L3. Only one stop ED (19.35 mm) is published, and it equals the traced tele iris (9.674 mm radius). Inferred radii are 6.543 / 8.363 / 9.674 mm. STO `sd` is 9.675 (patent ED/2). |
| L8 `glass` | `911353 — lanthanum (…)` | `TAFD35 (HOYA catalog equivalent)` | Row 15, 1.91082 / 35.3; catalog TAFD35 is 1.91082 / 35.25. |
| L10 `glass` | `S-FPM2 (OHARA) / MC-7 (HOYA)` | `S-FPM2 (OHARA catalog equivalent)` | "MC-7" is not a catalog glass. S-FPM2 is 1.59522 / 67.74. |
| `specs` | "3 GMo ELEMENTS" | "3 ELEMENTS" | The patent does not say glass-molded. That is an inference from the low-Tg glasses and stays in the analysis prose only. |
| Header comment | render-tuned SD note, "reversing groups", close focus "estimated" | Rewritten: patent-ED rims, label convention, [0068] conflict, BF convention, calculated close focus, inferred iris | — |
| Analysis | Assignee wording, the "piecewise-linear cam" claim, MC-7 / 911353 wording, 8* "~1 µm", L17 "−1.56 / −1.67 mm at estimated semi-diameters", "largest in any Canon" superlatives, the 11-of-12 catalog sentence | Synced: Canon Inc.; group-motion paragraph from the gap table; new §2.3 on the aperture stop (IS is now §2.4); close-focus note with the calculated travel; 8* ≈ 10 µm peak (0.6 µm at rim); L17 −1.55 mm at 12.09 mm and −1.66 mm at 13.57 mm; superlatives softened | Numbers from the surface-scan tool at the patent effective radii. |

### Checks on the result

- The surface validator reports no errors. The image-circle floor check passes.
- Exact trace to Y = 21.64 mm: ω = 42.22° / 22.41° / 11.65° (patent paraxial ω 41.19° / 23.02° / 11.99°). No
  axial clipping and no blocked chief ray at any station, at infinity or at close focus. Corner-bundle vignetting is
  about 60–73 % per side in L1 at wide.
- Close focus (image plane held at the infinity BFD): object-to-image 448.0 / 450.8 / 449.7 mm after rounding the
  gaps to 0.01 mm.
- Asphere departures at the patent radii: 8A +0.6 µm (peak ≈ 10 µm near h = 9.2 mm), 9A −199 µm, 26A −191 µm, 27A
  +124 µm, 30A −1,549 µm, 31A −1,656 µm. There is no turnover, and the rim slopes are at most 40°.
- The engine's paraxial half-field is 35.4° / 23.0° (limit 33) / 12.4° (limit 33). At wide the paraxial estimate is limited by
  surface 7 (patent rim 11.715 mm; the old render-tuned 12.3 mm gave 36.7°). The real chief ray at 42.2° passes surface 7 at 11.11 mm.
- Live (headless): production baseline at wide shows the old header ("3 GMo"), f/4.0 and the BF label. Local wide/intermediate/tele
  infinity and tele 0.45 m render cleanly with D33 and f/4.12–f/22. The stop diameter reads 13.09 / 16.73 / 19.35 mm, and the
  tele close state shows EFL 85.55 mm. The zoom movement overlay shows all six units moving toward the object. The off-axis
  toggle was not checked.

### Open limitations

- Close-focus spacings and the wide/intermediate iris diameters are calculated, not published.
- The viewer's paraxial wide half-field (35.4°) is below the patent's 41.19°. The real rays reach the full image
  height, so this is an estimator limitation and not a rim defect.
- No θgF or line indices are published, so L14's anomalous dispersion stays inferred.
