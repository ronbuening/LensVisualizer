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

## 2026-11-03 — Second review: diagram, labels and movement

**Compared.** The local page at infinity, at the β = 1/10 state, with the focus-movement overlay and with the element
inspector open on E3, E4 and E6, against Fig. 7 (PDF page 4, Sheet 3 of 6) at its native 72 ppi and against the
collector-hosted Minolta section. Re-measured from the native scan: S1 and S12 vertices at columns 841 and 1647.5 give
0.10574 mm/px for 85.28 mm; S1 to S7 (220.5 px) and S1 to S11 (748.5 px) give 0.1063 and 0.1059. Half top-to-bottom
spans: E1 235.75 px (24.9 mm), E2 224 px (23.7), E3's tip about 21.3 after line width, E4's flat top 188.5 px (19.9),
the r7 cap end 155.75 px (16.5, q = 0.826 ± 0.010 of the edge), Unit II 122.25 px (12.9), E7 163.5 px (17.3). These
agree with the semi-diameter pass within a pixel. Fig. 7 draws E3's tip standing about 1.4 mm above a flat-topped E4;
the page drew E4's top as a slope from E3's tip at 21.1 mm down to the land, because the cemented face S6 carried E3's
rim.

| Surface | Kind | Baseline | Fig. 7 | Final | Light against baseline | Verdict |
| --- | --- | ---: | --- | ---: | --- | --- |
| 6 (cemented E3–E4) | cut | 21.1 | 19.9, E4's top and the end of the joint | 19.9 | 0.8 points at 3° at infinity; 0.7 at 2.7° at β = 1/10; 0.6 at 10.8 mm image height with a real object | keep: slight |
| 7 (E4 rear) | land, `rimCutDepthMm` 7.39, cut radius 16.52 | 17.3, no land | cap end 16.5, edge 19.9 | 19.9 | 0.0 at every field, at infinity and with a real object at β = 1/10 | keep: costs nothing, drawn by the figure |

With S6 at 19.9 both faces of E4 sit at its drawn 19.9 mm edge, so E4 renders square-topped below E3's 21.1 mm thin
edge, as Fig. 7 and the collector section draw it; the validator accepts the set, and the f/2.8 axial marginal ray
reaches 19.14 mm there. The furthest wide-open ray at S7 stays between 16.3 and 16.52 mm at both states, so the land
is unchanged. Final `rimcost.mjs` worst loss against the baseline rims: 0.8 points at 3.0°.

**Kept above the figure.** E1, E2, Unit II and E7 stay about 6% above Fig. 7, as baseline. Drawn heights would cost
5.9 points at 7.5° (E1), 2.9 at 4.5° (E2, whose ratio to E1 would fall from the drawn 0.95 to 0.89) and 8.6 at 9° (E7). Unit II at 12.9 costs
nothing, but at the drawn height it would fall to 0.49 of E1 and 0.70 of E7, against 0.52 and 0.75 in Fig. 7 and
about 0.51–0.53 of E1 in the collector section; at 13.7 it keeps both ratios.

**Light and clearance.** Wide-open transmission at infinity at 0, 1.5, 3, 4.5, 6, 7.5 and 9° is 100.0, 100.0, 98.9,
96.0, 91.9, 86.7 and 67.4% (baseline 100.0, 100.0, 99.8, 96.4, 92.1, 86.7, 67.4). At β = 1/10 the engine's curve at
0 to 8.2° is 100.0, 100.0, 99.3, 97.1, 93.5, 89.1 and 84.3% (baseline 100.0, 100.0, 100.0, 97.4, 93.6, 89.2, 84.3).
A real-object trace at 1.525 m object to image puts 81.2% through at the 21.52 mm corner before and 81.1% after
(80.5% at 21.63 mm both). No axial clip or blocked chief ray; the corner chief ray reaches 21.52 of 21.65 mm at 9°.
Engine half-field 9.00°, f/2.8 and stop radius 12.593 mm are unchanged; field coverage reads 99%.

**Labels, tags and stop.** Groups I (S1–S7), II (S8–S10) and III (S11–S12) are the patent's units and bracket the
right surfaces; CD1 (S5–S7) and CD2 (S8–S10) mark the two cemented components and do not collide with the D7b and D10
gap labels. Elements are E1–E7 because the patent's L1–L5 name components. Every `type` agrees with the signs of R,
every role is true, and each element shows its focal length in the inspector. All surfaces are spherical, as Table 3
prints. The stop sits between E4 and E5, where Fig. 7 draws the iris. No element carries an `apd` tag; Table 3 (PDF
page 11) prints Nd and νd only, and the collector section marks no special glass.

**Movement.** Table 3 gives d7 14.36 → 19.79 and d10 24.66 → 19.23 at β = 1/10; at ×1.35 the file's D7b runs
1.745 → 9.075 and D10 33.291 → 25.961, so Unit II moves 7.33 mm toward the image while Units I and III stay fixed,
as the arrow over II in Fig. 7 and the text (col. 2) say. Keyframe 0 is infinity and keyframe 1 the β = 1/10 state;
the overlay shows only II moving, 7.33 mm toward the focus plane, and the slider's far end reads 1.52 m.

**Aberration plots.** Figs. 8A and 9A print one spherical-aberration curve and no C, F or g line, so there is no
colour comparison. Fig. 8C reads about +0.85% at 9°; the model gives +0.61%, and moving the stop within d7 changes
that by under 0.01%. At β = 1/10, Fig. 9C reads about +1.56% and the model +1.65% at 9° in object space. Fig. 8B puts
s and m near −0.025 at mid-field and near zero at 9°; the model gives −0.026 and −0.027 at 6° and +0.005 (s) and
+0.026 (m) at 9°, at patent scale.

**Limitations.** Fig. 7's bevel from E4's top to the cap end is drawn as a square land. The earlier limitation, E4's
top running from 21.1 mm to the land, no longer applies.

## 2026-11-04 — E3 glass label

E3's printed 1.6710/51.7 has no exact catalog row. CDGM H-LaK67 (1.6700/51.7) is 0.001 lower in nd with the same νd, inside the 0.25 νd limit for a nearest-row proxy, so E3 now takes its dispersion curve; the trace keeps the printed nd. The patent prints no colour curves to check it against.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “When focusing to a magnification β = 1/10, d7 = 19.79 and d10 = 19.23” → `"1/10"` | US 4,610,514, Embodiment 3 (PDF p. 11) | 1404.27 mm, first-surface | in focus 0.10059; at the declared distance 0.10000; −6.98 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
