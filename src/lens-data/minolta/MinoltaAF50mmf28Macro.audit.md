# Source and numerical audit

- Whole JP S59-228220 A Embodiment 3; probable family, not factory-exact.
- Literal prescription and frozen infinity plane retained; computed finite conjugates explicitly labeled where present.
- Stop/SD hypotheses selected before MTF; rejected shapes and all clipping/raw failures retained.
- Normal scalar native convergence is not independent phase/factory certification.
- Self-contained source/rebuild/report provenance and final integration receipts accompany private package.
- Model SHA256 `a819b2a57c43c68c09c154fe0beb8baca1bfe3e0d152505b5f4de0b43598ae01`.

## 2026-11-03 — Deployment validation and cleanup

Source re-read from the JP S59-228220 A scan (p. 5 table at 400 dpi, Figs. 3 and 6). Checked 13 radii, 12 spacings, 7 nd/νd
pairs, both variable gaps at both states and L.B./L.B.′. No mismatches; Σd = 54.200 as printed; every length is exactly ×0.5.
Embodiments 1 and 2 were read for comparison.

First order (50 mm scale): EFL 50.0006 vs 50.0; back focus 39.031 vs L.B./2 = 39.029; TL 66.131. Near state at β = −0.997:
object 78.38 mm from the front vertex, 199.9 mm object to image, back focus 44.704 vs L.B.′/2 = 44.682. L.B.′ − L.B. reproduces
the printed m3/m2, m1/m2 and m3/m1 in all three embodiments, so L.B./L.B.′ are the back focus, not an undefined datum. The
printed f3/f (−13.33) is about 3% above the thick-lens −12.94; the same offset appears in Embodiments 1 and 2. Real-ray
spherical aberration, field curves and distortion follow Fig. 6 at both endpoints. At the near state the rims set the axial
beam (S9 first): traced working f/5.77 against the Fig. 6 near "effective F 5.93"; the iris alone would give f/5.22.

Maker comparison: the collector-hosted section matches 7/6, the element shapes and an iris in d6. Its vertex spacing fits
Embodiments 1 and 3 equally (rms 0.42 at f = 100; Embodiment 2 0.60). The MFD favours Embodiment 3 (199.9 mm vs 194 and 188).
The section's rear-element curvature leans toward Embodiment 1, and the third-party 60–106 mm barrel length toward
Embodiment 2's 45.6 mm front-group travel. Embodiment 3 is kept.

Fields changed in this pass. Data step: S3/S4 sd 8.4 → 8.6, S5/S6 8 → 8.2, S7–S9 7.5 → 7.8 (`audit:aperture --raise`; the
f/2.8 axial beam now passes, axis illumination 93.7 → 100%, corner 38.8 → 39.3%); `focus.description` corrected on L.B.
Wording step: header comment, `subtitle`, `specs`, element `role` text, `indexReferenceNote` removed (the table names Nd/νd),
`focus.description` and the conjugate `source` rewritten, and the analysis rewritten in plain terms. Glass labels (catalog
equivalents) and the file/key rename were set in a separate step of this pass.

Open: Embodiment choice rests on the evidence above; no factory prescription is known.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: JP S59-228220 A scan, p. 6, Fig. 3 (Embodiment 3, D = ∞), measured on the native 347 dpi page raster; Fig. 6
(p. 7) for the plotted apertures. The axis runs from row 1077.5 to 1076.0 across the figure (0.15° skew), so every height
is read from the local axis and averaged over the upper and lower halves.

Scale. Vertex crossings sit at columns 1678.5 (S1) to 2123.5 (S13): 445 px for 27.100 mm, 16.42 px/mm (60.9 µm/px);
S6→S7 (94.5 px for 5.760 mm) and S1→S11 (408 px for 24.867 mm) give 16.41. Arc fits of S6 (R 17.42), S13 (R 43.81),
S4 and S7 against their radii give 60–64 µm/px vertically, mean about 62.5, so the drawing may be up to 2.5% taller per
pixel than it is long; rims below are quoted at both scales. No iris is drawn.

| Element (faces) | Stored sd | Fig. 3 edge, px | mm at 60.9 / 62.5 µm/px | Stored ÷ figure (62.5) | Floor | Result |
| --------------- | --------: | --------------: | ----------------------: | ---------------------: | ----- | ------ |
| L1 (S1, S2) | 9.8 | 153.5 | 9.35 / 9.59 | 1.02 | — | kept |
| L2 (S3, S4) | 8.6 | 132.8 | 8.09 / 8.30 | 1.04 | f/2.8 axial 8.62 at S3 | kept |
| L3 (S5, S6) | 8.2 | 126.0 | 7.67 / 7.88 | 1.04 | f/2.8 axial 8.20 at S5 | kept; S6 land |
| L4 (S7, S8) | 7.8 | 115.5 | 7.03 / 7.22 | 1.08 | square-rim floor from S9 | kept; S7 land |
| L5 (S8, S9) | 7.8 | 121.0 | 7.37 / 7.56 | 1.03 | f/2.8 axial 7.81 at S9 | kept |
| L6 (S10, S11) | 8.4 | 132.5 | 8.07 / 8.28 | 1.01 | — | kept |
| L7 (S12, S13) | 12.3 | 190.7 | 11.61 / 11.92 | 1.03 | near-state corner chief 12.29 at S13 | kept |

Every element sits within 1–5% of the median ratio (1.03), so the proportions already follow the drawing and no `sd`
moved. L1, L6 and L7 lie inside the measurement noise; L2, L3 and L5 are a few percent above the drawn heights because
the f/2.8 axial beam needs them, which fits Fig. 6 being plotted at F2.88. Each element is drawn square-cut and keeps one
height. One drawn step is not modeled: Fig. 3 draws L4 about 5 px (0.3 mm) lower than L5, with the step at the cemented
junction; a junction carries one `sd` and L4 is held at 7.8 by the f/2.8 floor, so the pair stays flush.

Lands. Fig. 3 ends the two concave faces beside the iris short of their element's edge with a short chamfer, L3's rear
(S6) and L4's front (S7); the collector-hosted section draws the same lands. Both are modeled as `rimCutDepthMm` lands
at the cap end, the nearest shape the format draws.

| Face | Cap end / edge, px (upper; lower) | q | q × sd | Beam reach + 0.05 | Depth | Cut radius | Land |
| ---- | --------------------------------: | ----: | -----: | ----------------: | ----: | ---------: | ---: |
| S6 (R 17.422, sd 8.2) | 110.4 / 124.9; 109.6 / 125.1 | 0.880 ± 0.015 | 7.22 | 7.237 | 1.58 | 7.250 | 0.95 |
| S7 (R −17.3265, sd 7.8) | 105.2 / 114.7; 105.3 / 114.3 | 0.919 ± 0.017 | 7.17 | 6.986 | 1.55 | 7.163 | 0.64 |

The S6 cut at q × sd would fall inside the beam margin, so its depth was rounded to 1.58 mm (q 0.884, the upper-half
reading). The rim-cut probe finds the wide-open beams reaching 7.187 mm at S6 (near state, 5.8° field) and 6.936 mm at
S7 (infinity), with nothing clipped and nothing inside the margin. Cap-to-stop clearance at infinity rises from 0.83 to
1.30 mm (S6) and from 1.03 to 1.33 mm (S7).

Near state (β = −0.997). With the iris at its infinity radius (7.00 mm) the axial beam would cross S8–S11 at 8.18,
8.62, 8.71 and 8.74 mm, above the 7.8 and 8.4 mm rims, so at 1:1 the rims, S9 first, set the beam: traced working
f-number 5.77, against 5.22 for the iris alone and the patent's "effective F 5.93" in Fig. 6. The iris on Group I or
Group II gives 5.02 or 5.41 alone and the same 5.77 with the rims. Passing the iris-filled beam would need L5 at 8.6 mm
or more, above L6 in a figure that draws L5 smaller, and would move the near working f-number away from the patent's,
so these rims stay. Every other near-state axial height is inside its rim (largest 7.55 mm at S2/S3). The near-state
corner chief ray to 21.63 mm passes every rim, closest at S12/S13 (12.20 and 12.29 mm against 12.3); to the patent's
Y′ = 21.0 mm it reaches 11.92 mm.

Clearance and light. The repo validator, the rim-cut beam check and the aperture census pass (traced f-number within
3% of 2.8, no rim limiter). Engine half-field 23.5°, f/2.8 and the 7.00 mm stop are unchanged, and traced field coverage
stays at 100% (23.4° to the 21.65 mm corner). Geometric transmission is identical before and after the lands: at
infinity 100, 95.6, 89.8, 83.8, 77.9, 70.6, 61.2, 50.7 and 39.3% at 0–23.4°; at the near state 93.9, 92.4, 85.9, 78.3,
70.4, 62.1 and 30.4% at 0–12.6°.

Maker comparison. The collector-hosted section (object at the top, not to scale) shows 7/6 in the same order, the iris
blades in d6 and the lands on L3's rear and L4's front. Its proportions differ from Fig. 3 in three places: L3 drawn a
little wider than L2 (edge half-widths 260 and 248 px; Fig. 3 draws L3 5% narrower), L4 and L5 flush, and L7 relatively
narrower (1.18 × L1 against 1.24). Fig. 3 governs.
