# KMZ Zenitar 50mm f/0.95 — audit log

## 2026-11-06 — Package history

The lens arrived in an outside lens package as a hidden literal model of RU 2726264 C1, sole example, under the key
`zenitar-095-ru2726264-literal-research`. The package's own notes record:

- Radii, spacings, indices, Abbe numbers and the printed row diameters were transcribed from Table 1 without change
  and without rescaling the native 52 mm to the marketed 50 mm.
- First-order results: calculated EFL 52.0315 mm; the printed final spacing of 23.7 mm was kept unchanged. An iris of
  46.2934 mm diameter gives f/0.95 in the engine; the printed 46.2 mm stop corresponds to about f/0.952.
- Reference-wavelength traces over eleven fields across the 43 mm image circle converged through 50 lp/mm with no
  failed rays, and three-field polychromatic traces did likewise using estimated dispersion. Stopped-down traces at
  f/2.8, f/5.6 and f/11 were also run.
- The repository test suite, type check, production build, formatting check and lint passed on the package's own
  integration copy. The browser view was not checked.
- Decisions: infinity focus only with a far `closeFocusM` placeholder; every glass labelled Unmatched because the
  table names no spectral line; lens kept hidden.
- Open at delivery: finite-focus schedule, exact factory prescription and version, the table's reference line, and a
  browser view check.

## 2026-11-08 — Deployment validation and production cleanup

### Source re-read

Patent pages 7–8 (Table 1) were rendered at 200 dpi and read row by row: 17 radii, 18 spacings including the stop row
АД, 9 n/ν pairs and 18 diameters. Every value equals the model; there are no aspheres and no variable spacings. The
model labels 8–18 carry the patent's R7–R17 because the stop takes row 7. The front page gives application 2019143982,
filed 26 December 2019, registered and published 10 July 2020 (Bulletin No. 19), inventors Bogdankov V. A. and
Levin I. A., and holder PAO "Krasnogorskij zavod im. S.A. Zvereva" (PAO KMZ). Every element satisfies the claim 2
index and dispersion ranges. The text gives f′ = 52 mm, 1:0.95 and 2y′ = 43 mm, and says the image forms in the plane
of best setting.

### Patent vs model first-order values

| Quantity | Patent | Model |
| --- | --- | --- |
| Focal length | f′ = 52 mm | EFL 52.0315 mm |
| Aperture | 1:0.95 | f/0.95 (stop derived) |
| Stop diameter | 46.2 mm (paraxial f/0.952) | 46.29 mm (radius 23.147 mm) |
| Back focus | d18 = 23.7 mm | paraxial 23.722 mm; printed 23.7 kept |
| First vertex to image | not printed | 128.0 mm |
| Image field | 2y′ = 43 mm | real chief ray at y′ = 21.5 mm leaves at 21.88° |

Longitudinal spherical aberration is −0.023 to −0.037 mm across 0.5–1.0 of the paraxial pupil, so no sign misprint is
indicated, and real rays at zones 0.5–0.85 cross 23.685–23.699 mm behind the last surface, which agrees with the
printed 23.7 mm. Component focal lengths are +113.1 (I), +114.9 (II) and +229.0 mm (III), all positive as claimed; the
L4–L5 doublet is −213.15 mm, the negative cemented meniscus of the claims.

Clear apertures: with the iris at the engine radius, the real axial ray that fills the stop meets surfaces 1–9 within
0.05 mm of the printed D/2 and surfaces 10–15 within 0.2 mm, so the printed diameters are real-ray apertures. Surface 8
trims about 0.05 mm from the axial beam edge. The aperture audit reports one station within 3 % of the stated f-number
and no rim limit, so no rim was changed.

### Maker-diagram comparison

No maker optical section was found. The patent's Fig. 1 agrees with the model in its proportions: L5 and L6 are drawn
about 1.12 times the height of the front group, against 59.0 / 53.2 = 1.11 in the printed diameters, and the stop is
drawn just ahead of L4.

### Product correlation

The maker and the announcement reports give nine elements in eight groups, f/0.95–16, 14 blades, 0.7 m minimum focus,
a 72 mm filter, Sony E full frame only, and sales from 20 March 2019. Sony Alpha Rumors credits the optical scheme to
V. A. Bogdankov. The filing date is nine months after launch, so the example may be a revision. The maker booklet
URL is cited but its contents were not read.

### Fields changed

| Field | Old → new |
| --- | --- |
| `key` | `zenitar-095-ru2726264-literal-research` → `kmz-zenitar-50mm-f095` |
| `name` | `Zenitar 50mm f/0.95 candidate — literal 52mm patent` → `KMZ ZENITAR 50mm f/0.95` |
| `subtitle` | `RU2726264 source; factory identity unconfirmed` → `RU 2726264 C1, sole example — probable Zenitar 50mm f/0.95 production correlation` |
| `visible` | `false` → `true` |
| `catalog.specs` | three process lines → `9 ELEMENTS / 8 GROUPS`, `DESIGN f = 52 mm`, `DESIGN F/0.95`, `ALL SPHERICAL` |
| `catalog` | added `lensMounts: ["sony-fe"]`, `focalLengthMm.marketing: 50`, `fNumber.marketing: 0.95`, `closeFocusM.marketing: 0.7` |
| `source.authors` | `Vladimir Bogdankov` → `Vladimir Aleksandrovich Bogdankov`, `Ilya Anatolevich Levin` (the patent names two inventors) |
| `source.assignees` | unchanged, `Krasnogorsk Mechanical Plant`, matching the RU 2771147 C1 sibling |
| Element `label` / `type` | `Literal source glass` / `Spherical source element` → `Element 1`–`Element 9`; Plano-Concave, Biconvex Positive, Positive Meniscus, Negative Meniscus, Positive Meniscus, Plano-Convex, Plano-Convex, Positive Meniscus, Plano-Concave, checked against the R signs and the patent's own descriptions |
| Element `role`, `focalLengthMm` | added; focal lengths are thick-lens values in air from the printed data |
| Element `glass` | all `Unmatched; reference spectral line unconfirmed` → L1 `QF3 (CDGM coordinate equivalent; supplier unconfirmed)`, L4 `H-ZF6 (CDGM …)`, L9 `L-TIM28 (OHARA …)`; the other six `Unmatched (patent nd=…, νd=…; no catalog row at these coordinates)` |
| Element `indexReference` | added `"d"` on all nine |
| `focus.description` | `Static infinity sentinel, not physical MFD` → plain statement that only the infinity prescription is modeled and the production lens focuses to 0.7 m |
| `aperture.blades` | added, 14 |
| `groups` | added the patent's components I (1–6), II (8–12) and III (13–18) |
| `gaps` | empty object removed |
| `layout` | moved to the end of the object; value unchanged |
| Header comment | added: source, scale, glass basis, stop, semi-diameters, image plane, focus and the filing-date caveat |
| Strings | `\u` escapes replaced by literal characters; quoted keys kept |

The analysis was rewritten from the package's process report to the LENS_ANALYSIS_SPEC skeleton. This audit replaces
the package's process log.

Glass: the six distinct printed pairs were checked against the catalog at the d and e lines. QF3 (Δnd 2.6e-5, Δνd
0.01), H-ZF6 (Δnd 4e-7, Δνd 0.01) and L-TIM28 (Δnd −2.1e-5, Δνd −0.11) match to the printed precision; no pair matches
any glass at the e line. S-TIH4, E-FD4 and SF4 also fit 1.7552 / 27.52; H-ZF6 was chosen to share QF3's vendor and the
sibling file's label. E-FD80, the earlier suggestion for 1.6895 / 31.13, was not used: its nd of 1.68960 rounds to
1.6896, not the printed 1.6895. The three remaining pairs match no catalog row; 1.6131 / 60.61 fits the Russian TK14
grade, which the catalog does not carry.

Before and after the edits the engine summary is identical: EFL 52.0315 mm, f/0.95, half-field 22.29°, stop radius
23.147 mm, paraxial BFD 23.7219 mm, total track 128.0 mm. The element probe differs only in now finding the stored
focal lengths. The surface audit reports no validation errors. The image-circle audit checked 1,088 lenses with 17
undersized, none of them this lens. The field-coverage audit over all lenses does not list it below full coverage.

Open: the table's spectral line rests on three of six pairs, below the 80 % numerical threshold of the data spec,
with no e-line match; exact factory prescription and revision; production glass types; the close-focus movement; a
maker optical section; the booklet's contents. (Closed 2026-11-08: the spectral line, since all six pairs are d-line
GOST glasses, and the booklet's contents; the design glasses are identified but not the production melts. See the
third review below.)

## 2026-11-08 — Second review: diagram, labels and movement

### What was compared

Fig. 1 of the sole example (the raster on page 2, read at 301 dpi; page 10 repeats it) was set beside the local page at
infinity. The drawing's optical axis tilts 0.30° on the page and was followed. Thirteen vertex crossings from the
first vertex to the image line (128.0 mm) give 13.742 px/mm along the axis; every crossing falls within 0.15 mm of
the prescription. Across the axis, arc fits to R7 (−32.21), R9 (−44.98) and R17 (25.41) and the image line give
13.45–13.8 px/mm; 13.6 px/mm (±1 %) is used. The stop tick is drawn 37.55 mm behind the first vertex (model 37.4 mm),
its inner end at 22.7 mm. With these scales the model's faces lie on the figure's curves.

| Element | Faces | Fig. 1 reading (mm) | Model `sd` | Fig. 1 shape |
| --- | --- | --- | --- | --- |
| L1 | 1 / 2 | 26.5 / 26.5 | 26.6 / 26.6 | square; edge on the marginal ray |
| L2 | 3 / 4 | 26.7 / 26.8 | 27.1 / 27.15 | rims on the marginal ray |
| L3 | 5 / 6 | 26.8 / 26.6 | 26.85 / 26.25 | rims on the marginal ray |
| L4 | 8 / 9 | cap end 22.8, edge 26.3 | 22.65 / 26.5 | flat front land, square edge |
| L5 | 9 / 10 | front face and edge 29.45 | 26.5 / 29.5 | square block taller than L4 |
| L6 | 11 / 12 | 29.2 | 29.5 / 29.5 | square |
| L7 | 13 / 14 | 25.4 / 25.4 | 25.55 / 24.5 | square; plane rear face out to the edge |
| L8 | 15 / 16 | 19.5 / 19.5 | 19.6 / 18.75 | square; rear face meets the edge |
| L9 | 17 / 18 | 18.2 / cap end 15.9, land to 18.2 | 18.25 / 16.2 | square; flat rear land |

Where a curved cap ends, every reading is within 2 % of the printed D/2, so no `sd` moved and the printed diameters
stay as the clear apertures. The other readings are edges drawn outside those apertures, and they were the visible
differences: the page drew L4, L7, L8 and L9 bevelled where the figure draws square blocks. Lands at the cap-edge sag
square them; L4's land sits 39.39 mm behind the first vertex (figure 39.22 mm) and L9's 110.13 mm
(figure 110.06 mm).

### Cuts and lands

No face ends below its baseline `sd`. The four lands are new; `rimcost.mjs` against the baseline rims finds 0.0 points
lost at every field from 0° to 22.0°, and each land alone wins back 0.0 points when removed.

| Face | Kind | Fig. 1 reading (mm) | Baseline | Final | Points lost | Verdict |
| --- | --- | --- | --- | --- | ---: | --- |
| 8 (L4 front) | land | cap 22.8, land to 26.3 | `sd` 22.65 | `sd` 22.65, `rimExtensionSd` 26.5 | 0.0 | keep: slight (figure-drawn) |
| 14 (L7 rear) | land | plane face to 25.4 | `sd` 24.5 | `sd` 24.5, `rimExtensionSd` 25.55 | 0.0 | keep: slight (figure-drawn) |
| 16 (L8 rear) | land | face to 19.5 | `sd` 18.75 | `sd` 18.75, `rimExtensionSd` 19.6 | 0.0 | keep: slight (figure-drawn) |
| 18 (L9 rear) | land | cap 15.9, land to 18.2 | `sd` 16.2 | `sd` 16.2, `rimExtensionSd` 18.25 | 0.0 | keep: slight (figure-drawn) |

The final worst loss against the baseline rims is 0.0 points. Before and after: EFL 52.0315 mm, f/0.95, half-field
22.29°, stop radius 23.147 mm, transmission 99.5 % on axis and 15.4 % at 22.0°. The surface audit reports no
validation errors, the aperture audit no rim limit, the image-circle audit does not list the lens, and the
field-coverage audit gives 100 %.

### Labels, tags and movement

- Names L1–L9 follow the figure's numerals 1–9 and the text's lenses 1–9. Types agree with the signs of R, every
  element carries a focal length, and the inspector shows them (L4 −47.13 mm, L5 +81.88 mm, L9 −36.85 mm) with
  their glass lines. Roles agree with the text on page 7; L9's field-flattening role is inferred from the prescription.
- Group brackets I (1–6), II (8–12) and III (13–18) are the patent's components; D1 (8–10) is the only cemented
  pair, and the lens has no gap labels for it to collide with. Table 1 has no aspheres and the model labels none. No
  element carries `apd`: the patent names no special glass and the deployment validation found no maker claim.
- The stop sits between L3 and L4, as Table 1 and Fig. 1 place it.
- Movement: the patent prints the infinity state only. The focus description says so, the movement overlay reports
  no modeled group movement, and the slider reads ∞ to "Not modeled".
- Colour: the patent prints no longitudinal, astigmatism or distortion curves; Fig. 2 (page 10) is a polychromatic
  MTF with no stated wavelengths or weights. Its plots cannot separate a d-line from an e-line reading of Table 1,
  so the reference-line item above stays open.
- Glass: the patent prints no glass names, further line indices or partial dispersions (pages 5–9). 1.6595 / 57.35
  recurs in the sibling RU 2771147 C1 (Zenitar 35mm f/1), so it is a real glass. 1.7441 / 50.42 (L2, L6, L7, as
  claim 2 requires) and 1.6131 / 60.61 (L5) occur only in this example.

Open: Fig. 1 carries L5's front face out to 29.45 mm, above L4's 26.3 mm edge; a cemented interface takes one
semi-diameter, so the diagram stops L5's front at the 26.5 mm junction and draws its edge as a slope. (Closed
2026-11-08: kept as drawn; see the third review below.)

## 2026-11-08 — Glass backfill

The printed lanthanum-crown pairs without an exact catalog row now borrow the dispersion curve of the nearest catalog
row while the trace keeps the printed nd: 1.6595 / 57.35 takes K-LaK11 (SUMITA, 1.65830 / 57.30) and, on the 35mm,
1.6920 / 55.05 takes J-LAK9 (Hikari, 1.69100 / 54.93). Both differ from the printed νd by 0.12 or less. The patent
prints no chromatic aberration curves to check them against, so the labels say "nearest catalog row" and name no
supplier. Pairs further than 0.25 from any row in νd stay Unmatched.

## 2026-11-08 — Third review: diagram, labels and movement

Fig. 1 (the native page 2 raster, 301 ppi) was compared with the local page and with the model outline drawn over it.
The scale was measured again: the first vertex to the image line gives 13.72 px/mm along the axis, with every vertex
crossing within 0.15 mm; arc fits to R7, R9 and R17 give 13.50–13.56 px/mm across it, and the ±21.5 mm image line
agrees. Every rim, land and the stop tick (37.35 mm behind the first vertex, inner end 23.0 mm) read within 2 % of the
file, so no rim changed. Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points. Each land
alone (faces 8, 14, 16 and 18) also costs 0.0 points, and Fig. 1 draws all four.

L5's front face stays as drawn. Raising the cemented face 9 to 29.5 mm would square L5, but it would also slope L4 from
its 26.5 mm land up to 29.5 mm and put the junction 3 mm above the printed D9 = 53.0 mm, which Fig. 1 draws as L4's
own edge. A cemented face takes one height and cannot carry a land, so one of the two elements must slope.

Labels, types, focal lengths and roles agree with the signs of R and the text on pages 5–7. The inspector lines of L1–L5
and L9 show the stored glass and focal length. Brackets I, II, III and D1 span the right faces without collisions, and
the stop sits between L3 and L4. The lens has no aspheres, tags or movement, and the focus slider reads ∞ to
"Not modeled". The engine is unchanged: EFL 52.0315 mm, f/0.95, half-field 22.29°, 15.4 % transmission at 22.0°.

Glass. The patent prints no glass names, line indices or partial dispersions. The six printed pairs are the d-line
values of Russian GOST glasses as GOST 13659-78 tabulates them (read from an OCR copy; STK19's C and g and LF5's C
indices are partly illegible):

| Printed n / ν | Glass | nd | νd | ne / νe (GOST 3514-94) | PgF |
| --- | --- | --- | --- | --- | --- |
| 1.5750 / 41.29 | LF5 | 1.575022 | about 41.3 | 1.5783 / 41.04 | 0.574 |
| 1.7441 / 50.42 | STK19 | 1.744132 | 50.42 | 1.7476 / 50.21 | about 0.549 |
| 1.6595 / 57.35 | STK3 | 1.659502 | 57.35 | 1.6622 / 57.09 | 0.5446 |
| 1.7552 / 27.52 | TF5 | 1.755234 | 27.53 | 1.7617 / 27.32 | 0.6048 |
| 1.6131 / 60.61 | TK14 | 1.61309 | 60.58 | 1.6155 / 60.34 | 0.5421 |
| 1.6895 / 31.13 | TF8 | 1.689492 | 31.13 | 1.6947 / 30.89 | 0.5943 |

All six nd agree to the printed four decimals, so the table is d-line. Relative to nd, the C, F and g indices of the
current curves lie within 5e-6 of LF5 (QF3) and 1e-5 of STK3 (K-LaK11); H-ZF6 sits 1.5e-4 above TF5 at g and L-TIM28
2.1e-4 above TF8 at g, where OHARA PBM28 comes within 1.4e-5. Tracing every element with the GOST indices moves the
paraxial C, F and g foci by 5 µm or less. The maker booklet gives 9 elements in 8 groups, 44°, f/0.95–16, 14 blades,
0.7 m and a 72 mm filter, and has no optical section.

The glass labels now name the GOST glass each pair matches. L9 takes PBM28 (OHARA, 1.68893 / 31.08) in place of
L-TIM28, whose νd misses the printed 31.13 by 0.11 and whose g index sits 2.1e-4 above TF8. L-TIM28 is also a
low-softening moulding glass, unlikely for a ground spherical element.

Open: exact factory prescription and revision; the production melts; the close-focus movement; a maker optical
section.

Assignee: `source.assignees` now reads "PJSC Krasnogorsky Zavod named after S. A. Zverev", the conventional English form
of the patent holder printed on the front page (PAO "Krasnogorskij zavod im. S.A. Zvereva", PAO KMZ). The earlier
"Krasnogorsk Mechanical Plant" is the plant's Soviet-era name (1941–1993), a different historical entity under
LENS_DATA_SPEC's assignee rule. Both KMZ files carry the same spelling.

## 2026-11-12 — LZOS glass rows

The glass catalog gained an LZOS shard (TK14, TK21, STK3), each a formula-3 fit to the LZOS clear-glass catalogue's
index table over 365–1014 nm (max index error under 1e-5). L3 and L8 change from the K-LaK11 spectral proxy to
`STK3 (LZOS)` (nd 1.659502 / νd 57.35 against the printed 1.6595 / 57.35), and L5 from `Unmatched` to `TK14 (LZOS)`
(nd 1.613091 / νd 60.58 against 1.6131 / 60.61). STK19 has no LZOS row in the source table and stays Unmatched.

## 2026-11-12 — LZOS TF5 row

The glass catalog gained an LZOS TF5 row (formula-3 fit to the LZOS index table, max index error 5.9e-6), added for the
KMZ New Petzval 85mm f/2.2. L4 changes from the H-ZF6 (CDGM) d-line equivalent to `TF5 (LZOS)`: nd 1.755234 / νd 27.53
against the printed 1.7552 / 27.52, the GOST 13659-78 values. PgF moves from 0.6099 (H-ZF6) to 0.6045, against 0.6048
for GOST TF5 in the table above, which removes the 1.5e-4 g-line excess. QF3 (LF5) and PBM28 (TF8) are unchanged;
STK19 stays Unmatched.
