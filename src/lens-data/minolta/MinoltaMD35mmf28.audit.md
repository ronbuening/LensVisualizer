# MINOLTA MD 35mm f/2.8 — source audit

2026-11-01. Package prepared against e1414bf50b190e20541b65b16ec278c120841f70.

Package input SHA256 `772210498a59d8e9d22401062c6b628e46661fa01171f12ce43e1590e702a2f8`. The package kept the Table I surfaces, indices and Abbe numbers, its figure-informed clear apertures, a midpoint stop and the infinity image plane from the printed 37.1 mm back focus. It used closeFocusM = 1e15 to disable finite focus, and its rim vector replaced an earlier rejected set of proportions. Closed 2026-11-02: the rims, stop and closeFocusM were replaced; see the section below.

The package's optical-path reference studies were excluded, and its diffraction results were treated as estimates. Its earlier and rejected attempts stayed outside the catalog. No per-lens test was added.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read: Table I against the page image and claim 2, 30 cells (10 r, 10 d including s', 5 N, 5 v), no mismatches; every R and d is exactly ×35. No aspheres or variable gaps. Figure 1 shows five air-spaced singlets with the shapes in the file. Table II reproduces from Table I within 0.0016 across all 50 surface cells, so no slip search was needed. Figures 2b and 2c agree as read by eye: distortion −1.40 % against about −1.3 %, meridional focus −0.0135 against about −0.013 at 32°.

Patent against model: f 35 / 35.0046 mm; F/2.8 / 2.8; s' 37.1 mm printed and kept, 37.106 mm computed; total 79.107 / 79.107 mm; half-field 32° / 32°.

Rims: Figure 1 vertices fit the table within 4 px of 21.52 px/mm, about 0.2 mm, and the package rims ran 0.85–0.88 of the drawing at that scale, clipping the axial beam at S5, S6 and S8. The S1–S10 values are now 14.4, 11.8, 10.3, 10.3, 6.8, 7.5, 8.0, 8.0, 10.0, 10.0 mm. S6 would need gapSagFrac 0.93 for the drawn 7.6 mm, and that was not added. audit:aperture moved from f/2.93 to f/2.80, and rimcost corner light at 32° from 21.4 % to 54.0 %.

Stop: Figure 1 and Table I give none. Table II fits 0.1639–0.1640 f behind r4 (rms 0.0003, against 0.0173 at the midpoint), so z = 29.463 mm, with d4 split 5.7365 + 5.4005 mm.

Spectral line: Table I names none. By the LENS_DATA_SPEC.md coordinate test, 4 of 5 pairs reproduce a catalog nd/νd (L2 misses on νd) and 0 of 5 a catalog ne/νe across 709 catalog rows, so the table is d-line. The indexReferenceNote entries were removed as that section directs.

Public comparison: no Minolta section drawing was found. Minolta's specification table (pacificrimcamera.com/rl/00052/00052.pdf p. 12) lists the 35mm f/2.8 MD as 5 elements / 5 groups, 63°, 1 ft, f/22, 49 mm. The HG versions are 7/6 and no 35/2.8 SG was found.

Fields changed in this cleanup: header comment, subtitle, catalog.specs, element roles, indexReferenceNote removed; analysis rewritten where stale. The rim, stop and closeFocusM changes landed just before it.

Open: production version not established (1977 55 mm MD W.Rokkor, 1978 49 mm, later MD); no factory prescription or section drawing to confirm the pairing.
