# Source and numerical audit

- Whole US4610514 E3/Table3; probable family, not unique factory identity.
- Source ZIP SHA256 `f8c05bb01f3350e7edaad215d9179d3e07636954b1989e32f63e67d51ccd75c3`;28CRC entries/27payload hashes pass.
- Printed Nd/nu-d and infinity prescription; source unsigned beta1/10 motion retained as context only.
- Uniform1.35× hypothesis; derived plane128.0861233236873mm fixed before traces.
- Fig7 bevel-aware caps and stop.91gap hypothesis frozen before rays; all clipping retained.
- Initial CSV-adapter and canonical-mount metadata rejections preserved; no numerical source edits.
- Four final geometry passes and one+5%SD rejection;24nominal/9control MTF fields converge without applied refocus.
- Zero raw pupil failures/unaimed rays; complete209sample bundles retained.
- Model SHA256 `1db76eca71ddc91525b4ee2d57037b9e2652883644c3f88477694d918d119212`.
- Current compiled viewer/rebuild/corpus/custody receipts accompany private package.

## 2026-11-03 — Deployment validation and cleanup

**Patent re-read.** US 4,610,514 has no text layer; the pages were read from images. All 39 printed values of Table 3
(12 R, 11 d including variable d7 and d10, 7 Nd, 7 νd, and the β = 1/10 values d7 = 19.79 and d10 = 19.23) agree
with the data file at ×1.35; there are no mismatches and no aspheres. The front page (number, Sep. 9 1986 date, Oct. 6
1983 filing, inventor Akiyoshi Nakamura, Minolta Camera K.K., JP priorities 57-176702/3) agrees with `source`. The
Certificate of Correction amends prose, condition labels and Table 5, not Table 3.

**Patent vs model, first order.**

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL | f = 100 (135 at ×1.35) | 100.038 at patent scale, 135.05 mm |
| F-number, half-field | 2.8, 9° | 2.80, 9° |
| Back focus | not printed | 31.709 at patent scale, 42.81 mm |
| f(I+II), l1/l2, D/Σd, νa − νb | 1.79f, 0.582, 0.275, 24.2 | 1.794f, 0.582, 0.275, 24.2 |
| β = 1/10 state | d7 19.79, d10 19.23 | β −0.1006 on the fixed plane, 1.525 m object to image |

LSA is −0.049 at patent scale at 0.7 of the pupil and +0.004 at full aperture, matching Fig. 8A; distortion is +0.61%
at 9° against about +0.8% plotted. Embodiments 1, 2 and 5 have the same 7/5 layout, F2.8, 18° and moving group
(scaled TL 127.95, 128.18 and 130.07 mm against 128.09 mm); Embodiment 5 falls outside condition (1). Embodiments 4
(F2.5, 24°) and 6 (F4, 7/6) do not fit.

**Maker comparison.** mhohner.de, Photo Jottings and KEH give 7 elements / 5 groups, internal focus with no length
change, 1.0 m, 1:6.25, f/32, 55 mm filter and a 1985 release; the package cites the 9000AF brochure (page 39) for the
same construction. The brochure PDF and the collector-hosted section
(minolta.eazypix.de/AF/135_2,8_cross.jpg) were not viewed. No corpus file models this patent or lens.

**Fields changed.** Data step: S5 `sd` 22.5 → 21.1 (to the cemented joint; corner light unchanged at every field, 67.4%
at 9°); `closeFocusM` 1e15 → 1.5248 with `published: [1]`; `gaps` STO (D7b) 1.74474 → 9.07524 and 10 (D10) 33.291 →
25.9605, the stop fixed with Unit I; `groups` I, II, III added. Wording step: header, `subtitle`, `specs`, element
`name` L1–L7 → E1–E7 (the patent's L1–L5 label components), every `role`, `focus.description`, the
`indexReferenceNote` boilerplate removed; the analysis was reworded and its test-run and package-history text removed.

Open: whether the stop moves with Unit II, and the spacings for the production 1.0 m focus, are not printed.

## 2026-11-03 — Semi-diameter pass against the patent figure

**Source and scale.** `patents/US4610514.pdf` page 4 (Sheet 3 of 6), Fig. 7, the Embodiment 3 section at infinity. The
page is a 1-bit scan, 2320 × 3408 px at 72 ppi, measured at that native resolution. The S1 and S12 vertex crossings sit
807 px apart for 85.28 mm (S1 to S12 at ×1.35), 0.1057 mm/px or 9.46 px/mm. S1 to S7 (221 px for 23.44 mm) and S1 to
S11 (749.5 px for 79.23 mm) give 0.1060 and 0.1057; Unit II is drawn about 0.6 mm behind its printed place. Across the
axis the scale is the same: an arc fit of r7 (R 22.167 mm) gives 0.1056 mm/px above the axis and 0.1073 below at 0.3 px
rms, E3's drawn thin edge reads 21.3 mm where r5 and r6 cross at 21.2 mm, and the drawn rim corners of r1–r4 and
r11–r12 fall within 1–3 px of the prescription sags at the drawn heights. The axis line tilts 3 px across the figure,
so each rim is half its top-to-bottom span. Fig. 8 prints longitudinal plots only, so no ray-fan ends are available.

| Surface | Before | Fig. 7 | Fig./before | After | Evidence and reason |
| --- | ---: | ---: | ---: | ---: | --- |
| 1, 2 (E1) | 26.5 | 24.9 | 0.94 | 26.5 | Square rim, 6% above the drawing; 24.9 costs 3.9–5.8 points from 3° to 9° |
| 3, 4 (E2) | 25.2 | 23.7 | 0.94 | 25.2 | Square rim, inside the noise band; 23.7 costs up to 2.8 points |
| 5 (E3 front) | 21.1 | 21.3 | 1.01 | 21.1 | Thin edge with S6; 0.10 mm edge at 21.1 |
| 6 (cemented) | 21.1 | 21.3 (E3) / 19.9 (E4) | — | 21.1 | One rim for both faces; E3 sets it |
| 7 (E4 rear) | 17.3 | cap 16.5, edge 19.9 | — | 19.9, cut 7.39 | Fig. 7 ends the cap at 16.5 and bevels out to E4's 19.9 edge |
| 8, 9, 10 (Unit II) | 13.7 | 12.9 | 0.94 | 13.7 | Square rim, inside the noise band; no light cost either way |
| 11, 12 (E7) | 18.4 | 17.3 | 0.94 | 18.4 | Square rim, 6% above the drawing; 17.3 costs 4.5 points at 7.5° and 8.5 at 9° |

**E4 land.** The drawn E4 is a flat-topped rim at 19.9 mm (188.25 px) with a bevel down to the end of the concave r7
cap at 16.5 mm (156.25 px); the starting rims drew it as one diagonal from the 21.1 mm cemented edge to 17.3 mm. The cap
end is q = 0.830 of the edge, ±0.010 for one native pixel at either end, so the cut radius is 0.830 × 19.9 = 16.52 mm
and the depth is the r7 sag there, 7.39 mm. The land is square to the axis where the figure draws a bevel, and it sits
10.25 mm ahead of the stop plane at both focus states. The dense rim-cut probe (grid 41, 21 focus states, 211,341 rays)
puts the furthest wide-open ray at 16.42 mm, at infinity and 2.8°, 0.10 mm inside the cut against a 0.05 mm margin,
with no ray clipped. The validator accepts the set.

**Clearance and light.** The f/2.8 axial marginal ray reaches 24.12 mm at S1, 22.92 at S3, 19.71 at S5, 15.90 at S7
(cut radius 16.52), 12.40 at S8 and 8.38 at S11, every one inside its rim. The traced corner chief ray reaches 21.52 of
21.65 mm at 9.0°, unclipped. Engine half-field 9.00°, f/2.8 and stop radius 12.593 mm are the same before and after.
Wide-open transmission at infinity is 100.0, 100.0, 99.8, 96.4, 92.1, 86.7 and 67.4% at 0, 1.5, 3, 4.5, 6, 7.5 and 9°
before and after; at the β = 1/10 state it is 100.0, 100.0, 100.0, 97.4, 93.6, 89.2 and 84.3% at 0 to 8.2°, also
unchanged. Every Fig. 7 rim together would leave 53.1% at 9°.

**Rendered section and maker drawing.** At infinity and at the β = 1/10 state the page now draws E4 with a near-flat top
and a square rear land in place of the pointed wedge, and the other elements as before. The collector-hosted
Minolta-style barrel section (object at the top, not to scale) shows seven elements in five groups in the same order:
two singlets, the cemented E3–E4, a small Unit II doublet in its own carrier behind the iris, and a rear singlet. It draws
E4's rim as a cylindrical edge with a bevel to the concave rear face, as Fig. 7 does. Radii relative to E1 are 0.51 for
Unit II and 0.67 for E7 there, against 0.52 and 0.69 in Fig. 7; it draws E3 much thicker relative to E4 than the
prescription. It marks no aspherical surface.

**Limitations.** The model cannot draw Fig. 7's bevel or the step where E4's 19.9 mm top meets r6 below E3's edge: the
cemented face carries one rim, so E4's top runs from 21.1 mm to the land.
