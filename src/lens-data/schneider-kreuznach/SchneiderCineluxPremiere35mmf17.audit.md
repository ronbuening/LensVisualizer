# Reconstruction audit

US 7,057,830 B2, Exemplary Embodiment 1, screen left and film right. Both grants print C42 = +0.018939 mm^-1 in Table 2, conflicting with Table 1's R42 = -52.802 mm. The earlier radius calculation has been superseded by direct use of the printed R42 = -52.802 mm; all polynomial terms are retained. Source free diameters are unchanged. The mixed 588/(480,643.8) dispersion definition supplies calculated conventional Vd values and line indices. Flat 22 x 16 mm cinema film is assumed; source 0.1-0.15 mm film bow is not modeled. The printed 31.898 mm back focus is retained. Finite projection focusing is not modeled. Production association is probable; the factory prescription is unconfirmed.
Full source free diameters are retained. At nominal f/1.7 the surface 42 aperture limits traced speed to approximately f/1.7694. Infinity full-field MTF is available at f/1.7, 2.8 and 4 with reference, five-line photopic and C/d/F spectra. The earlier 45 field/spectrum/aperture calculations converged through at least 50 lp/mm, with nonuniform convergence through 100 lp/mm. The earlier image-plane residual was 6.630 µm; after adopting the printed radius it is about 7.2 µm, without a best-focus refit.

The model distinguishes the printed patent prescription from calculated material curves and the inferred iris radius. Printed free diameters are retained; no finite-focus motion is supplied. Physical aperture clipping and numerical convergence limits remain part of the model's scope.

## 2026-10-26 — Deployment validation and wording pass

The independent re-read of both grants checked 14 refracting surfaces plus the stop, 15 spacings, 14 free diameters, seven index/dispersion pairs, K and four polynomial coefficients, with zero variable gaps. The sole radius mismatch was surface 42: the earlier calculated value differed from the printed -52.802 mm. The coordinator corrected that value before this wording pass. Table 2 still prints positive C42 = +0.018939 mm^-1; the model uses Table 1's negative radius directly. K = 0 and A4/A6/A8/A10 match the printed coefficients.

Patent versus current model: EFL 35 / 34.9688110493316 mm; back focus 31.898 / 31.9052 mm; glass span 90.647 / 90.647 mm; stored total track 122.545 / 122.545 mm. Nominal f/1.7 is unchanged; the paraxial stop gives f/1.672 and independent rim tracing gives approximately f/1.7694. The current built half-field is 29.31155652581124 degrees and the inferred stop radius is 14.337594980646266 mm. The patent does not print a half-field or finite-focus table. Film-side pupil distance is 119.87 mm in the patent versus 119.9332 mm in the model.

Schneider's cinema-lens catalogue and Cinelux Première data sheet, article 10730, list 35 mm, f/1.7-4, seven elements, 31.9 mm back focal distance and a 70.65 mm barrel. Patent Figure 2 agrees with the model's seven air-separated elements: two menisci, then biconvex, biconcave, biconcave, biconvex and biconvex, with one asphere on L2's rear surface. The maker's generic and 75 mm diagrams do not establish the exact 35 mm aspheric count or glass positions; production correspondence remains probable.

The header and analysis now describe the printed R42 directly. The subtitle identifies the patent, exemplary embodiment and assignee; five catalog specs state the element/group count, design focal length, design aperture, asphere count and projection use. All seven element roles now describe shape and position. Focus wording explains the infinity-only model, absence of modeled focusing motion, unpublished minimum projection distance and the lens's FOCUS screw. The analysis retains its metadata and source citations, adds the maker catalogue citation, and replaces process vocabulary, repeated element boilerplate and the verification heading with technical scope statements. Historical calculation counts remain only in this log. The analysis's calculated L2 focal length is updated to 115.35060 mm for the printed radius; no optical data fields were changed in this wording pass.

Before/after built summaries and paraxial probes are identical in full, including EFL, nominal aperture, half-field, stop radius, pupil positions and both default focus samples at t = 0 and 1. Both samples retain EFL 34.9688 mm and BFD 31.9052 mm; the probe reports last gaps 31.8980 and 31.9052 mm respectively, with its infinity image-plane offset applied to the second sample. There are no variable gaps or physical focusing movements. The surface audit reports OK with no validation errors. A structured comparison confirms that only the subtitle, catalog specs, element roles and focus description changed; all optical numbers and other structured fields are identical.

Open: the inferred iris and printed free diameters clip nominal f/1.7 rays at surfaces 42 and 44; the independent effective speed is approximately f/1.7694. The factory prescription, exact 35 mm special-element positions and minimum projection distance remain unconfirmed. L2's stored element focalLengthMm remains 115.34732047821298 mm, while the current surfaces calculate 115.35060197958333 mm; this descriptive number was left unchanged under the optical-number freeze.

## 2026-10-26 — Semi-diameter pass against the patent figure

Source: `patents/US7057830B2.pdf`, Table 1 (PDF pages 15–16, columns 8–9) and FIG. 2 (drawing sheet 2 of 10, PDF
page 3), the section of Exemplary Embodiment 1. Family check: `patents/EP1536263B1.pdf`, Tab. 1 (PDF pages 8–9).
Both grants are 1-bit rasters; the US sheets were read at their native 2560 × 3300 px resolution.

Table check: Table 1 prints a free diameter for every refracting surface. Read at native resolution in the US grant
and again in the EP grant, all 14 printed values agree between the grants, and every stored `sd` equals the printed
free diameter halved (36.100 → 18.05 through 33.000 → 16.5). These are source data, so no value was changed.

Scale: FIG. 2 draws the axis vertically with the screen at the bottom. The vertex crossings beside the axis put
surface 36 at row 2406 and surface 62 at row 1157, so 1249 px spans the 90.647 mm glass length (13.78 px/mm,
72.6 µm/px). Check spans give 14.01 px/mm from 36 to 44 and 13.51 px/mm from 44 to 62. The sheet is therefore only
roughly to scale along the axis (±2 % about the mean), and every intermediate vertex lies within 12 px (0.9 mm) of
its prescription position. The scanned axis drifts about 12 px across the figure, so rims were measured as half the
edge-to-edge width rather than from the axis.

| Surface | Stored sd = printed φ/2 | FIG. 2 half-height | Figure ÷ stored | ÷ median 1.269 | Reading |
|---|---|---|---|---|---|
| 36 (L1) | 18.05 | 22.13 | 1.226 | 0.97 | front curve meets the square-cut blank corner |
| 38 (L1) | 13.40 | 15.60 | 1.164 | 0.92 | concave curve ends at the flat rear annulus |
| 40 (L2) | 12.25 | 16.84 | 1.374 | 1.08 | square-cut blank, one height for both faces |
| 42 (L2) | 13.30 | 16.84 | 1.266 | 1.00 | as 40 |
| 44 (L3) | 14.50 | 18.18 | 1.254 | 0.99 | square-cut blank, one height for both faces |
| 46 (L3) | 13.60 | 18.18 | 1.337 | 1.05 | as 44 |
| 48 (L4) | 12.40 | 15.78 | 1.273 | 1.00 | square-cut blank |
| 50 (L4) | 12.40 | 15.78 | 1.273 | 1.00 | as 48 |
| 52 (L5) | 12.40 | 16.58 | 1.337 | 1.05 | thin square-cut blank |
| 54 (L5) | 13.20 | 16.58 | 1.256 | 0.99 | as 52 |
| 56 (L6) | 13.75 | 18.14 | 1.319 | 1.04 | knife edge |
| 58 (L6) | 14.25 | 18.14 | 1.273 | 1.00 | as 56 |
| 60 (L7) | 16.40 | 20.61 | 1.257 | 0.99 | knife edge |
| 62 (L7) | 16.50 | 20.61 | 1.249 | 0.98 | as 60 |

The drawing shows each element's blank at a common scale about 1.27 times the printed free diameters, and each surface
lies within 9 % of that common ratio. The size order is the same in both: L1 > L7 > L3 ≈ L6 > L2 ≈ L5 > L4. A free
diameter is the optical clear aperture, so a uniformly larger drawn blank is expected and is not evidence for wider
rims. FIG. 2 draws one height for both faces of L2, L3 and L5, but Table 1 prints different free diameters for them
(12.25 / 13.3, 14.5 / 13.6 and 12.4 / 13.2 mm). The render therefore shows those elements with slightly stepped
faces, and the printed values were kept. Two crops of the automatic figure screen were contaminated by the ray bundle
and leader lines. The glass-span warning persisted and L3–L6 read one clipped value, so that screen was set aside.
Its L1 (22.0–22.2 mm) and L2 (17.0–17.1 mm) readings at the first crop agree with the hand measurement.

Clearance (real-ray trace, flat 22 × 16 mm film, Y = 13.6 mm, ω = 21.62°): at f/1.7 the axial marginal ray reaches
13.84 mm at surface 42 against the printed 13.30 mm and 15.08 mm at surface 44 against 14.50 mm. These two clips are
a property of the printed design and were not widened. At f/1.768 surface 44 clears (14.42 mm) while 42 still clips
(13.31 mm), and at f/1.770 both clear, so surface 42 sets the traced speed of about f/1.769. The full-field chief
ray clears every rim, with its largest height of 11.02 mm at surface 62. Field coverage traces the corner to 13.60 of
13.60 mm (100 %, 21.6° clear). The image-circle floor finds no undersized surface, and the surface validator reports
no errors. The engine values are unchanged, since no `sd` moved: EFL 34.969 mm, nominal f/1.7, stop radius 14.338 mm
and half-field 29.31°. The engine's geometric transmission wide open at infinity is 100 % on axis, 90.2 % at 13.5°,
82.1 % at 18.9° and 75.5 % at 21.6°.

Live render: the local lens page at infinity and at `focus=1` (identical, since the model is infinity-only) draws the
same element order and proportions as FIG. 2. It also shows the stepped L2/L3/L5 faces described above. A render
overlay at matched axial scale was kept outside the repository. No maker construction diagram was viewed in this
pass. The element and group count (7 / 7) and the single asphere on L2's rear surface 42 rest on the deployment
validation above and the patent.

Changes: none to any `sd`. The data-file header's semi-diameter sentence now records the table origin and this
figure check. The analysis prose already states that the full source free diameters are retained, and no aspheric
rim moved, so it was not changed.

Open: Table 1 in both grants labels the 1.80809 element "32" (the row between surfaces 52 and 54), while FIG. 2 and
the text call it element 28. This reference-numeral misprint does not affect any modeled value.

Glass follow-up, same day: the coordinator replaced the Cauchy-reconstructed Abbe numbers and line indices with
the printed Table 1 values used as ordinary νd (64.14 / 54.65 / 60.15 / 35.30 / 22.75 / 60.15 / 52.30). The
"Unmatched" labels became catalog equivalents: N-BK7, S-LAL18, N-LAK21, S-FTM16, S-NPH1, N-LAK21 and S-LAH97.
Through the repo catalog all seven resolve as compatible, with Δnd ≤ 5.2 × 10⁻⁶ and Δνd 0.01–0.05. Evaluated with
the text's (nd−1)/(n480−n643.8) definition, the same glasses give 0.42–0.50 less than the printed column, which
supports reading it as conventional νd. The data-file header and the analysis (element lines and Glass
Identification) now say this, and the calculated spectral anchors were removed. No lateral colour, longitudinal
colour or secondary-spectrum figure is quoted in either file, so none needed recomputing. The MTF sampling-convergence
statement predates the glass change and was not re-run. EFL, f/1.7, stop radius, half-field and the surface
validator are unchanged.

## 2026-10-26 — Second review: diagram, labels and movement

Independently compared the live local page with `patents/US7057830B2.pdf`, first exemplary embodiment: FIG. 2 on
PDF page 3, the element/stop/asphere description on page 14 (column 6), and Tables 1–2 on pages 15–16 (columns
8–9). The EP family tables on PDF pages 8–9 independently confirm the free diameters, element-row misprint and
curvature-sign conflict. Screen is left and film is right; the figure was rotated into that orientation.

The front page identifies inventor Hildegard Ebbesmeier, assignee Jos. Schneider Optische Werke GmbH, and grant
US 7,057,830 B2 dated June 6, 2006. These agree with the model. No maker drawing was obtained or viewed. The
existing deployment record states: “The maker's generic and 75 mm diagrams do not establish the exact 35 mm
aspheric count or glass positions; production correspondence remains probable.” Its seven-element/seven-group
record agrees with the patent's seven air-separated elements, with the only asphere on the second element's rear
surface. There is no source basis here for an ED/APD position or a specific production glass supplier.

### Changes and designation evidence

Each element's `name`, inspector `label` and `diagramLabel` now use the patent reference numeral. Runtime ids and
surface-medium references remain 1–7. The analysis headings and mapping paragraph now distinguish source numerals
from ordinal L1–L7. No optical number, rim, glass, tag, shape, role or movement field changed.

| Runtime id / position | Before: name; inspector label; diagram text | After: name; inspector label; diagram text | Evidence |
|---|---|---|---|
| 1 / L1 | L1; Element 1; 1 | 20; Element 20; 20 | FIG. 2 and page 14, column 6: first negative meniscus 20 |
| 2 / L2 | L2; Element 2; 2 | 22; Element 22; 22 | Same: second positive meniscus 22, aspheric rear surface 42 |
| 3 / L3 | L3; Element 3; 3 | 24; Element 24; 24 | Same: third positive biconvex 24 |
| 4 / L4 | L4; Element 4; 4 | 26; Element 26; 26 | Same: fourth negative biconcave 26 |
| 5 / L5 | L5; Element 5; 5 | 28; Element 28; 28 | FIG. 2 and text both say 28; Table 1's 1.80809 row incorrectly says 32 |
| 6 / L6 | L6; Element 6; 6 | 30; Element 30; 30 | Same: sixth positive biconvex 30 |
| 7 / L7 | L7; Element 7; 7 | 32; Element 32; 32 | Same: seventh positive biconvex 32 |

### Independent silhouette check

Re-read the native 2560 × 3300 raster rather than reuse the first pass's measurements. Off-axis vertex strips put
36 at approximately row 2406, 44 at 1724 and 62 at 1158: 1248 px spans 90.647 mm, or 13.77 px/mm. Independent
36–44 and 44–62 spans give 14.01 and 13.49 px/mm. The approximately 2% axial nonuniformity, drifting scanned axis,
stroke width and crowded leaders limit figure precision; half-widths were measured edge-to-edge, excluding leaders
and rays. The rear annulus of element 20 ends at approximately x = 936 and 1363, yielding an optical half-width
of about 15.5 mm; its larger square blank is not substituted for that curve end.

| Element | Surfaces | Stored sd before = after, mm | Independently read FIG. 2 half-width, mm | Figure / stored, approximately |
|---|---|---|---|---|
| 20 / L1 | 36 / 38 | 18.05 / 13.40 | 22.1 / 15.5, curve ends; rear annulus excluded | 1.22 / 1.16 |
| 22 / L2 | 40 / 42 | 12.25 / 13.30 | 16.8 / 16.8, square outline | 1.37 / 1.26 |
| 24 / L3 | 44 / 46 | 14.50 / 13.60 | 18.3 / 18.3, square outline | 1.26 / 1.35 |
| 26 / L4 | 48 / 50 | 12.40 / 12.40 | 15.8 / 15.8, square outline | 1.27 / 1.27 |
| 28 / L5 | 52 / 54 | 12.40 / 13.20 | 16.6 / 16.6, thin square outline | 1.34 / 1.26 |
| 30 / L6 | 56 / 58 | 13.75 / 14.25 | about 18.1, common outer extent | 1.32 / 1.27 |
| 32 / L7 | 60 / 62 | 16.40 / 16.50 | about 20.4, common outer extent | 1.24 / 1.24 |

These are approximate drawing dimensions, not replacement clear apertures. Table 1 gives every free diameter;
all 14 stored rims equal those values divided by two in both grants, so all are retained under the batch ruling.
The overall drawing-to-clear-aperture ratio is approximately 1.27, consistent with a larger drawn blank. The
relative height order remains 20 > 32 > 24 ≈ 30 > 22 ≈ 28 > 26.

Visible differences: element 20's rendered meniscus has slanted rim joins instead of the drawing's rectangular
blank and rear annulus; 22, 24 and 28 have bevelled/stepped joins because their faces have unequal printed free
diameters while FIG. 2 draws square outlines. The final positive pair 30/32 also retain slightly unequal face
extents, and the drawn blank tips are larger than the clear-aperture model. No new overlap, wrapped neighbour,
reversed height ordering or misplaced stop was seen. No square-rim or policy trial was warranted because the
printed diameters are binding; `gapSagFrac = 0.9` and all other validation policy values remain untouched.

### Diagram semantics, tags and glass

The signs of all paired radii agree with the seven stored shape strings and power signs: negative meniscus,
positive meniscus with one rear asphere, positive biconvex, two negative biconcaves, and two positive biconvexes.
All roles describe those positions correctly. The current element focal lengths agree with the isolated-element
probe, including element 22 at +115.35060198 mm; the earlier deployment-log focal-length discrepancy is no longer
present in the current file.

The patent supplies no named multi-element group notation and all seven components are air-separated, so absent
`groups`, `doublets` and `cemented` fields are appropriate. Stop 64 is correctly represented by the canonical STO
between surfaces 42 and 44: 5.000 mm after 42 and 6.089 mm before 44, between elements 22 and 24. Only surface
42 has aspheric coefficients, matching page 14 and Table 1's asterisk on page 16. The live pink A marker and the
ASPH inspector badge are correct. One convention defect remains report-only: the surface's stored label is `42`,
not `42A`. Surface labels are outside this pass's permitted edit fields; a coordinator can rename that label
without changing its coefficients or rim. STO is the required engine label for patent stop 64, not a misplaced
or missing physical stop.

All seven `apd` values are false. The first-embodiment description and tables name no anomalous-dispersion glass,
ED designation or supplier, and the recorded maker comparison does not establish such positions. No tag change
is supported. The catalog resolver independently reports:

| Patent element | Current glass label's catalog row | Resolution | Catalog minus source nd / νd |
|---|---|---|---|
| 20 | N-BK7 (Schott) | compatible | +3.5e-8 / +0.03 |
| 22 | S-LAL18 (OHARA) | compatible | -3.1e-6 / +0.03 |
| 24 | N-LAK21 (Schott) | compatible | -5.2e-6 / -0.05 |
| 26 | S-FTM16 (OHARA) | compatible | +8.5e-7 / +0.01 |
| 28 | S-NPH1 (OHARA) | compatible | +4.7e-6 / +0.01 |
| 30 | N-LAK21 (Schott) | compatible | -5.2e-6 / -0.05 |
| 32 | S-LAH97 (OHARA) | compatible | +3.4e-7 / +0.02 |

Each full label retains “catalog equivalent; production supplier unspecified.” None is Unmatched or unresolved;
no wrong glass label was identified. Tables 1–2 (pages 15–16) provide nd/dispersion coordinates and asphere
coefficients, not a glass trade name, extra measured spectral-line indices or partial-dispersion datum. Page 14's
480/643.8/588 nm dispersion definition is a wavelength convention, not further material identification; its
disagreement with ordinary catalog νd remains qualified in the existing header and analysis.

### Fixed-group and order checks

There are no zoom stations, variable gaps or finite-focus keyframes to reorder. This is the 35 mm prime, not the
separate 47.5 mm second embodiment. The first-embodiment text describes imaging to infinity (page 15, column 7)
and supplies only static Table 1 spacings. FIG. 2's Sumd and S′F′ arrows are dimensions, not group-motion arrows.

| Air-separated group / element | First vertex from surface 36, mm | Zoom displacement | Focus t = 0 → 1 displacement |
|---|---|---|---|
| 20 | 0.000 | none; prime | 0.000 mm |
| 22 | 23.875 | none; prime | 0.000 mm |
| 24 | 48.675 | none; prime | 0.000 mm |
| 26 | 69.497 | none; prime | 0.000 mm |
| 28 | 75.297 | none; prime | 0.000 mm |
| 30 | 78.747 | none; prime | 0.000 mm |
| 32 | 83.647 | none; prime | 0.000 mm |

Order is correct in both directions of inspection. No focus/zoom direction or ordering correction is needed.
The focus control shows ∞ and “Not modeled”; its disabled endpoint is sensible for the retained infinity-only
description. Both movement views say “This lens has no modeled focus or zoom group movement.” The probe's t = 1
last-gap readout changes from 31.8980 to 31.9052 mm only because that scratch tool applies its documented infinity
best-focus image-plane offset (about 7.2 µm); it is not a physical lens-group displacement or a changed source gap.

### Numerical checks and live result

Before and after the label-only edit, the surface audit prints “OK — no validation errors”; the image-circle
audit reports 1 checked, 0 undersized, 0 skipped; and traced field coverage reaches 13.60/13.60 mm (100%) at 21.6°.
The built tool completes without throwing. EFL remains 34.9688110493316 mm, engine half-field remains
29.31155652581124°, nominal FOPEN remains 1.700, stop radius remains 14.337594980646266 mm, and the paraxial
stop-based probe remains f/1.672. The engine half-field estimate is distinct from the traced 13.6 mm corner
angle of 21.62°.

The before and after wide-open infinity vignetting runs give identical engine transmission percentages:

| Field, degrees | Before, % | After, % |
|---|---|---|
| 0.0 | 100.0 | 100.0 |
| 2.7 | 98.4 | 98.4 |
| 5.4 | 96.2 | 96.2 |
| 8.1 | 95.1 | 95.1 |
| 10.8 | 92.9 | 92.9 |
| 13.5 | 90.2 | 90.2 |
| 16.2 | 87.5 | 87.5 |
| 18.9 | 82.1 | 82.1 |
| 21.6 | 75.5 | 75.5 |

Independent clear-aperture tracing at Y = 13.6 mm solves ω = 21.62°. No surface blocks the chief ray; the maximum
chief height is 11.02 mm at surface 62. At nominal f/1.7 it still prints `CLIPS-AXIAL` at 42 (13.84 mm ray versus
13.30 mm rim) and 44 (15.08 versus 14.50 mm). At the diagnostic f/1.770 trial neither axial nor chief flags remain
(42 reaches 13.30 mm; 44 reaches 14.40 mm). This supports the existing approximately f/1.7694 effective-speed
limitation. Printed apertures were not enlarged. The engine's 100% on-axis geometric transmission readout does
not independently establish an unclipped f/1.7 axial beam.

Re-rendered and viewed the local default/infinity page, `focus=1`, `mv=focus`, `mv=focus&focus=1` and `mv=zoom`.
There are no additional zoom stations. The seven corrected patent labels are legible, the sole A marker is on
22's rear surface, the stop sits in the correct gap, and the same silhouette persists at both focus endpoints.
Inspectors were read for elements 20, 22 and 28 (runtime `el=1`, `el=2`, `el=5`): respectively -61.92, +115.35 and
-55.59 mm; negative meniscus, aspheric positive meniscus and negative biconcave; qualified N-BK7, S-LAL18 and
S-NPH1 labels; and accurate positional roles. There are no APD-tagged elements requiring another inspector.

The matched-axial-scale side-by-side image is saved outside the repository at
`/private/tmp/claude-501/-Users-ronbuening-Programming-Code-LensVisualizer-LensVisualizer/1168ee07-3a95-429a-8228-c96717740b52/scratchpad/r2/schneider/comparison.png`.
The render queue PNGs and numerical outputs are in that same tag folder.

Open source limitations: Table 1's fifth-element numeral 32 is a source misprint (FIG. 2 and text establish 28);
Table 2's C42 = +0.018939 mm⁻¹ conflicts with R42 = -52.802 mm in Table 1 (page 16); and f/1.7 text versus f/1.8
graph-caption wording remains inconsistent (pages 14–15). No frozen radius, curvature, aperture or glass field was
changed. The exact production prescription, finite projection focusing and maker-specific 35 mm special-glass
positions remain unconfirmed. The sole outstanding diagram-label convention change is 42 → 42A, as described above.

Coordinator follow-up (same day): the aspheric surface label is now 42A, following the corpus convention that aspheric surfaces carry the A suffix. No numeric value changed.
