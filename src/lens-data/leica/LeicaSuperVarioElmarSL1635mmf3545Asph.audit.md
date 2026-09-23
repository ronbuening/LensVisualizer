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
thick-lens values. The sole inventor (Yoshito Soma, 相馬 祥人; romanization per Google Patents and EP 3,327,480 family), the assignee (Konica Minolta), the year 2018 and the display name
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
