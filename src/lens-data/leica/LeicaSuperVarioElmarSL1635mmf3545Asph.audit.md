# Patent and glass audit

## 2026-09-23

Source: local `patents/JP2018087903A.pdf`. Example 1 prescription, aspheric data and zoom/focus spacings on printed
pp. 15–16 (¶¶0066–0069); bibliographic front page p. 1; Fig. 1 (EX1, W/M/T panels) on p. 25, measured on the wide
panel at 300 dpi (native 300 ppi CCITT scan). Axial scale: the S1 to S31 vertex span is 681 px for 129.539 mm, so
0.190 mm/px. Rims were read on both sides of the axis. The upper side was used for Gr1 and the lower side for Gr2–Gr4,
avoiding the Gr2a/Gr2b brackets, the mF arrow and the ST leader.

Quick sanity check, retained: every R, d, nd and νd row, the four K = 0 aspheres (A4–A10), the W/M/T spacings and the
0.35 m Gr2a focus rows match the table. The paraxial EFL is 16.399 / 23.697 / 34.194 mm against the patent's
16.400 / 23.700 / 34.200 mm. Defocus at the stored last gap is at most 0.009 mm. Stored element focal lengths equal the
thick-lens values. The sole inventor (相馬 祥人; romanization revised to Yoshihito Souma in the live diagram review below), the assignee (Konica Minolta), the year 2018 and the display name
follow the sibling Leica SL naming convention.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
| --- | --- | --- | --- |
| 1 / 2 (L1) | 16.7 / 14.2 | 26.6 / 17.9 | Fig. 1 outer rim is 140 px (26.6 mm). The flat rear annulus begins where S2 ends, at 96 px (18.4 mm). S2 is capped at 17.9 by the S2→S3A intrusion limit. |
| 3A / 4A (L2) | 12.6 / 11.5 | 19.8 / 16.0 | Drawn rim 104 px (19.8 mm) and rear ≈ 89 px (16.9 mm). 4A is capped at 16.0 by the 4A→S5 intrusion limit. No asphere turnover (slope rises monotonically to 39.8°). |
| 5 / 6 / 7 (D1) | 11.4 / 11.1 / 10.9 | 16.5 / 16.0 / 13.6 | L3 tip 87 px, L4 flange 84 px, L4 rear shoulder ≈ 71 px |
| 8 / 9 (L5) | 11.4 / 11.3 | 15.0 / 15.0 | Drawn rim 77–79 px |
| 27 / 28 / 29 (D6) | 9.5 / 9.4 / 9.2 | 11.8 / 11.5 / 11.5 | Drawn rim 61–64 px (11.7–12.1 mm). S28 (R −13.295) is kept at 11.5 for L16 edge thickness and rim slope. |
| 30 / 31 (L18) | 8.9 / 9.2 | 10.9 / 12.8 | Drawn rim 69–70 px (13.2 mm). Before the change S31 was below the tele chief ray (9.62 mm, BLOCKS-CHIEF). S30 is capped at 10.9 by the S29→S30 intrusion limit. |

Retained: L6–L15 (S10–S26). The figure reads 10.2–11.8 mm there against stored 10.1–12.7 mm, which is within about
15 %. STO sd 8.057096 is the f/3.55 calibration and was not changed.

Checks on the result: surface validation has no errors at all three zoom stations. The image-circle floor passes. With
the nominal f-number schedule 3.55 / 4.1 / 4.6, no surface clips the axial marginal ray at infinity or at the 0.35 m
state. At M and T the chief ray to Y = 21.6 mm clears every rim. At W the scratch real-ray tracer loses convergence
near S2 beyond about ω = 49.3° (image height 17.7 mm), so the full patent ω = 52.83° could not be checked there. Up to
that angle nothing blocks. The engine's paraxial half-field estimate rose from 35.7° to 42.1° and is still limited by S2.
Aspheric departures in the analysis were recomputed at the new rims: 3A is +0.2751 mm at 19.8 mm and 4A is −2.2190 mm
at 16.0 mm.

Glass: L2 and L11 (1.58313/59.39) changed from `Unmatched` to OHARA L-BAL42, an exact catalog-coordinate equivalent
(moldable low-Tg glass). The label and analysis state that the supplier is unspecified; HIKARI J-SK12 (59.42) and HOYA
M-BACD12 (59.46) are close alternatives. All 18 elements now resolve to catalog glasses. L16 keeps its patent
ΔPgF = +0.028.

Open limitations: semi-diameters are figure-derived or ray-envelope estimates, not published values. The 0.25 m
production MFD and Leica's single-element AF description remain unreconciled with the patent's cemented Gr2a focus
group. The live localhost view was not checked in this pass because the browser pane was unavailable.

## 2026-09-23 — Live diagram review

Second, display-focused pass. Sources: local `patents/JP2018087903A.pdf` front page p. 1 (inventor 相馬 祥人), printed
p. 16 (¶¶0066–0069: aspheric data, W/M/T spacings and the 撮影距離350mm rows) and Fig. 1 (EX1, W panel) on p. 25.

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| `patentAuthors`, analysis inventor line | Yoshito Soma | Yoshihito Souma (相馬 祥人) | Romanization printed on the family member EP 3 327 480 B1 and on US 8,767,319 B2; the repository already credits the same inventor as Yoshihito Souma on the Nikon AF-S 85mm f/1.4G and the Leica Summilux-SL 50mm f/1.4 ASPH., so the author page stays consolidated. Kanji confirmed on the JP front page. |
| L1, L3–L10, L12–L18 glass labels | Six-digit code/class labels such as `835427 — TAFD5G-coordinate class (supplier unproven)`; several resolved to non-exact catalog rows (N-FK5 νd 70.41, S-LAH66 49.60, J-SF14 26.58) | Named catalog equivalents with "supplier unspecified": TAFD5G, E-FD2, TAC8, E-FD13, FC5, FD140, TAFD35, E-FDS1 (HOYA); N-LAF34 for the HOYA TAF1 coordinate and N-BK7 for the HOYA BSC7 coordinate (SCHOTT, because the repository catalog has no exact row for those two HOYA glasses) | Each label now resolves to a catalog glass with the exact patent nd/νd (N-BK7 νd 64.17 vs 64.20). Nine of the eleven distinct coordinates are current HOYA catalog rows and L7 is the historical HOYA TAF1 row, so HOYA is plausible but not asserted. |
| L2, L11 glass label | `L-BAL42 (OHARA catalog equivalent; exact 1.58313/59.39 coordinate; production supplier unspecified)` | `L-BAL42 (OHARA catalog equivalent; supplier unspecified)` | Shortened for the hover card; same resolution. |
| `varLabels` | `D9 / Gr2a front`, `D12 / Gr2a rear`, `D18 / G2-G3`, `D26 / G3-G4`, `BF / normalized rear gap` | `D9 / Gr1–Gr2a`, `D12 / Gr2a–STO`, `D18 / Gr2–Gr3`, `D26 / Gr3–Gr4`, `BF (air-equivalent)` | Group names now match the `groups` labels (Gr1–Gr4) and name both sides of each gap. |

Analysis prose synced: the per-element glass lines, the glass table and its introduction, the L1/L5/L7/L8 glass
paragraphs, the note that the COLOR trace uses catalog-equivalent dispersion as a proxy, and the stale sentence that
said runtime glass resolution and `buildLens()` validation were outside the record.

Re-checked and retained. Focus and zoom ordering: every `var` entry is [infinity, 0.35 m] per station and the stations
are W/M/T with ascending `zoomPositions` 16.4 / 23.7 / 34.2. D9 grows by 2.306 / 2.526 / 2.810 mm while D12 shrinks by
2.305 / 2.525 / 2.809 mm, so Gr2a moves toward the image for close focus, as the abstract and ¶0050 state. D9 and D18
shrink and D26 grows from W to T, matching the claimed group-spacing changes. The close rows focus at 194.95 / 200.65 /
198.19 mm from S1 against the patent's d0 of 195.000 / 200.726 / 198.279 mm. Element `type` strings agree with every R
sign (L6 and L9 image-side-convex positive menisci, L10 near-plano negative meniscus with R2 −540.5, L18 plano-concave).
Doublets D1–D6 and groups Gr1–Gr4 match the patent's cemented pairs and group starts (surfaces 1, 10, 19, 27, with the
stop inside Gr2 ahead of L8). The four aspheric markers sit on 3A, 4A, 19A and 20A. L16 keeps its patent ΔPgF +0.028
and `apd: "patent"`; no other element gets an APD tag. Semi-diameters were compared with Fig. 1 again: the first pass's
Gr1/Gr4 rims and ray-block fix at S31 stand, and L6–L15 read within about 10 % of the drawing (largest gap L11, stored
12.5/12.7 mm against about 11.6 mm drawn), so nothing was changed.

Checks on the result: surface validation reports no errors; the image-circle floor passes; paraxial EFL 16.399 / 23.697 /
34.194 mm with defocus at most 0.009 mm; all 18 labels resolve to catalog glasses with Sellmeier data (no mismatches).

Live view (localhost, own tab): the Browser pane was hidden, so screenshots failed, and the diagram was read through the
page's DOM instead. The header shows the new inventor name. Hover cards for L1, L7, L15 and L16 show the new labels,
Sellmeier dispersion from the named catalog glass, and the APD (PATENT) tag on L16 only. Loading the wide end with
focus at the closest setting moves only the L6+L7 outline, by 9.3 SVG px (2.31 mm) toward the image. Zoom-station changes
from the URL did not redraw element positions in the hidden page. A second zoom lens (Nikon Z 14-24) behaved the same way,
so this looks like a hidden-pane rendering artifact rather than a data problem, but the tele-end silhouette and the
OFF-AXIS/COLOR toggles could not be inspected visually.

Open limitations: unchanged from the first pass (figure/ray-envelope semi-diameters, 0.25 m production MFD and Leica's
single-element AF description unreconciled with the cemented Gr2a focus group). The visual live check of zoom endpoints
is still outstanding.
