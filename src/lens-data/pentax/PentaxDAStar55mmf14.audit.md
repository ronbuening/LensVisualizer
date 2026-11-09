# PENTAX SMC DA* 55mm f/1.4 SDM — audit log

## 2026-11-09 — Deployment validation

Independent check of US 2010/0073777 A1 Embodiment 1, Table 1 (p. 12, 300 dpi render): all 19 rows (R, d, nd, νd), the
stop 7.49 mm behind S6 (¶0061), the cemented L5/L6 interface, the S18–S19 cover glass (thickness printed, material not;
1.5168/64.2 assumed) and d15 1.00 → 13.27 agree; no aspheres; native scale. Engine EFL 56.357 (56.36), f/1.4,
half-field 14.3°, total length 93.2; close state −0.173× at 0.450 m, matching the patent's M and Ricoh's 0.45 m / 0.173×.
Attribution strong: Ricoh lists 9/8, 28.6°, one anomalous-dispersion element, and its drawing marks L8 (1.5924/68.3).

Deployment change (inferred rims only): the package's rims cut the f/1.4 axial beam at L4 and L6–L8 (`audit:aperture`
f/1.40 → f/1.50). L4's flat rear face meets the deep concave front of L5 (R −19.31, 5.49 mm gap) at h ≈ 13.49 mm, so
the tool's 13.6–13.7 mm is not reachable; L4 goes to 13.45 mm on both faces (square, as both drawings show it) with
`checks.gapSagFrac: 1`. The other raises are the `audit:aperture --raise` values: S1/S2 20.5 → 20.6, S10/S11 17 → 17.4,
S12/S13 16.8 → 17.4, S14/S15 16.5 → 16.8. After: `audit:surface` OK, aperture within 3 % of f/1.4, no axial clip at
infinity. The analysis paragraph that described the f/1.50 clip was rewritten.
Open: package wording (subtitle, repeated per-element sentence, MTF grid prose) and the name's ★ / missing "SDM" against
catalog peers ("DA* … SDM") remain for the cleanup pass. (Closed: name fixed by the coordinator; wording in the pass
below.)

## 2026-11-09 — Cleanup and wording pass

Data file: header comment rewritten as plain technical English with every fact kept (patent, embodiment, native scale,
stop split, assumed cover-glass index, focus states, inferred rims and why L4 stops at 13.45 mm). Subtitle "Qualified
patent reconstruction; assumed clear apertures and approximate dispersion" → "US 2010/0073777 A1, Example 1 — strong
match to the 2008 production lens". Added `catalog.specs` (9/8, design f = 56.36 mm, F/1.4, all spherical, one
anomalous-dispersion element) and `catalog.closeFocusM.marketing` 0.45 (Ricoh). Focus description now states the
printed d15 states, the 12.27 mm travel of L1–L8 with L9 fixed, and that the close spacing focuses at 0.45 m and
−0.173×, matching the patent's M and Ricoh's 0.45 m / 0.173×; the "catalog approximation" wording is gone. Gap label
"Front-group focus separation" → "D15". `aperture.blades` 9 (Ricoh: nine-blade round diaphragm). L5/L6 tagged
`cemented: "D1"` with a `doublets` entry over S9–S11 so the pair is badged. Every element gets a `role`; the
`indexReferenceNote` boilerplate is removed.

Glass labels, exact matches only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each confirmed to resolve to that row): L1 S-LAH66,
L2/L7 S-LAH53, L3 S-TIM35, L4 S-TIL25, L5 S-TIH14, L6 S-LAH60, L9 S-FSL5 (OHARA catalog equivalents), L8 K-GFK68
(SUMITA catalog equivalent, the only exact row). OHARA rows were used throughout where available for one consistent set;
HOYA has exact rows for L1, L3, L5 and L6 only. Every lens element now traces on catalog Sellmeier data instead of the
Abbe estimate, which lifts the C/d/F MTF block on the νd 68.3 / 70.2 elements; only the cover plate (νd 64.2) stays on
the Abbe tier. L8 gets `apd: "inferred"`: Ricoh's drawing marks it as anomalous low-dispersion glass and K-GFK68's
θgF 0.546 is about +0.017 above the normal line (same tag as the FA* 28-70mm's νd 68.3 elements).

Analysis: removed the repeated per-element boilerplate sentence, the MTF grid and convergence prose, the "probable, not
factory-certified" and review-rating lines; renamed "Aperture, Geometry and Validation" to "Aperture and Model Scope".
Added the full bibliographic block (application, filing, priority, title), the numbered product evidence (SDM, the
September 22, 2008 announcement, HOYA as assignee and owner of Pentax), the Embodiment 1 versus 3 and 2 comparison, the
patent's rationale for L4 and the fixed L9 with paragraph citations, condition (1) = 0.22 and (2) = 68.3, a glass table,
and a focus table.

Engine before/after (identical): EFL 56.357185, FOPEN 1.4, half-field 14.3°, stop radius 13.875903, BFD 0.0018,
close keyframe 449.96 mm object to image at −0.1732×. Surface audit OK; aperture audit within 3 % of f/1.4, no rim
limit.
Open: Embodiment 3 cannot be excluded from the published specifications. The rear plate's label "CG (assumed material)"
and its source string keep package wording (rear plates are outside this pass). A `focus.conjugates` entry for the
close state was not added: the patent prints M, not an object distance.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US20100073777A1.pdf`, sheet 1 (PDF page 2), Fig. 1 (Embodiment 1, infinity), a 300 dpi CCITT scan
measured at 400 dpi. The sheet is rotated about 0.45° (axis line from y 1617.5 at x 900 to y 1625.5 at x 1920), so
heights are read from the local axis and averaged above and below it. Axial scale 17.81 px/mm from the S1–S17 vertex
crossings (958 px for 53.79 mm, checked on S7, S9, S11, S13 and S15 to ±2 px). The figure is anamorphic: arc fits to
S1, S4, S5, S6, S9, S10, S11 and S13 give 0.88–0.91 of the axial scale across the axis (15.7–16.2 px/mm), and the stop
opening (212.6 px) equals the f/1.4 real-ray stop radius of 13.625 mm at 15.60 px/mm. Ricoh's construction drawing was
viewed as a second check on order and proportions.

Element heights at 15.6 px/mm, figure → file: L1 20.2 → 20.6, L2 18.2 → 19.0, L3 16.2 → 16.8, L4 13.5 → 13.45,
L5–L6 16.9 → 17.4, L7 16.9 → 17.4, L8 16.3 → 16.8, L9 16.5 → 16.5. Every ratio is 1.00–1.04, inside measurement
noise, and L1, L4 and L6–L8 sit at their f/1.4 floors, so no element height changed.

Changes, both drawn in Fig. 1 and in Ricoh's drawing:
- S6 (L3 rear, R 19.203): `rimCutDepthMm` 6.13. The cap ends at q = 0.837 of L3's edge (cap end 213.5 px, edge 255 px,
  one native pixel ±0.010), so the cut radius is 0.837 × 16.8 = 14.07 mm. Without it L3's rim reached 2.4 mm past
  the stop plane (cap sag 9.90 mm against 7.49 mm); the land now sits 1.36 mm ahead of it.
- S9 (L5 front, R −19.310): `sd` 17 → 17.4, so the cemented pair is square-cut at one height as drawn, and
  `rimCutDepthMm` 5.45. The cap ends at q = 0.772 of the doublet edge (204 px against 264 px, ±0.009), which gives
  13.43 mm; the traced beams reach 13.392 mm there, so the cut moved out to 13.445 mm (depth 5.45) to clear them by
  0.05 mm. Without it L5's rim reached forward past L4 and the stop plane (sag 10.15 mm at 17 mm against 9.68 mm to
  the stop). The land sits 0.04 mm behind L4's flat rear face, where Ricoh's drawing has L4 resting on L5's rim.
  `gapSagFrac` stays 1.

The rim-cut probe (21 focus states, 41-point grid, 0.5° field step) clips no ray at either cut: margins 0.147 mm at S6
and 0.053 mm at S9. Corner light against the starting rims is unchanged at every field: 95.9 % on axis and 56.9 % at
14.2° at infinity, 95.9 % and 64.3 % at 12.5° at the close state. EFL 56.357 mm, f/1.4, half-field 14.3° and stop
radius 13.876 mm are unchanged; surface audit OK, aperture audit within 3 % of f/1.4 with no rim limit, image circle
and corner coverage clear. Both focus states were checked on the local page.
Open: the figure draws L2 and L3 about 4 % smaller than the file; left as noise. The ray to the iris rim at infinity
needs 13.69 mm at S7 and 13.58 mm at S8, which L4 cannot reach because its flat rear face meets L5 at 13.49 mm; L4
costs about 2 points of the on-axis transmission (98.1 % with it out of the way), while the traced f-number stays
within 3 % of f/1.4. This follows from the prescription and is not a rim choice.

## 2026-11-09 — Glass coverage pass

The CG cover plate keeps its assumed 1.5168 / 64.2 and is labelled HOYA BSC7, the catalog row at exactly that pair, so
it traces on a catalog dispersion curve instead of the Abbe estimate; the patent still names no material. Every element
and the plate now resolve to catalog rows.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page (infinity, close state, focus overlay, inspectors for L4, L5, L6 and L8) with Fig. 1 on sheet 1,
re-measured at 400 dpi, with Ricoh's construction drawing, with Table 1 and ¶0058–0061, and with the colour plots of
Figs. 2B and 2C.

Scale, measured afresh: the axis line runs y = 1617.9 + 0.00815 (x − 900), a 0.47° rotation. The S1 and S17 vertex
crossings (931.5 and 1889 px) give 17.80 px/mm along the axis, and S7, S9, S11 and S15 fall within 2 px of it. Across
the axis, sag fits to S1, S3, S6, S9 and S11 give 15.6–16.0 px/mm; the S6 land drawn 5.5–5.8 mm behind its vertex
(a 13.6 mm radius on R 19.203) at 213.5 px gives 15.7. The drawing sits about 2 px low against its axis line, so
heights are the mean of both sides.

Heights at 15.8 px/mm, figure against file: L1 19.9 / 20.6, L2 18.0 / 19.0, L3 16.0 / 16.8, L4 13.3 / 13.45, L5–L6
16.7 / 17.4, L7 16.7 / 17.4, L8 16.1 / 16.8, L9 16.3 / 16.5. Every ratio is 1.01–1.06, so no rim changes. Fig. 1
draws L9 0.1–0.2 mm taller than L8 (3 px above the axis, 1 px below, at the reading limit), while Ricoh's drawing
draws L9 clearly shorter than L8. The file's L8 at its f/1.4 floor of 16.8 mm over L9 at 16.5 mm lies between the
two and reads as nearly level on the page, so L9 stays. The doublet's top edge runs level from the S9 land to S11
in Fig. 1, as rendered. The S6 cap ends at q = 0.846 of L3's drawn rim, against 0.837 in the file. The S9 cap ends
at q = 0.772, and the drawn land sits 0.4–0.7 mm behind L4's rear face, against 0.04 mm in the file. The figure's
12.9 mm cut radius lies inside the traced beams (13.39 mm), so 13.445 mm stands.

Lands and cuts: every verdict stands. No face sits below its baseline `sd`. The S6 land is kept because it is drawn
and costs nothing. The S9 land is kept because it is drawn, costs nothing, and is needed for spacing: at S9 = 17.4
without it the rim-slope check refuses (2.08 against 2.06). `rimcost.mjs` against `base1114sd` gives 0.0 points at
every field, 95.9 % on axis and 56.9 % at 14.2°. The engine's close-state curve, from 95.9 % to 64.3 % at 12.5°,
equals the baseline. With a real object 344.5 mm in front of S1 (−0.173×), file and baseline rims both transmit
89.6 % on axis and 63.1 % at the 14.24 mm corner. Those beams reach 13.92 mm at S6 (cut 14.07) and 13.38 mm at S9
(cut 13.445). Worst loss 0.0 points.

Change: the doublet bracket and the `cemented` name of L5 and L6 go from D1 to C1, because the variable spacing is
labelled D15 and the patent's d-numbers name spacings. The page now shows a C1 bracket and "DOUBLET C1" badges.

Labels checked and found correct: L1–L9 follow the patent's reference numerals 11–19 in order. The patent names no
groups and Fig. 1 draws no group brackets, so none are added. Every `type` agrees with the signs of R. The roles are
true. There are no aspheres and no A suffixes. The stop sits 7.49 mm behind S6; the figure's stop ticks fall 22.4 mm
behind S1, against 22.32 mm in the file. L8's `apd: "inferred"` matches Ricoh's marking of the second element from
the rear as anomalous low-dispersion glass; the patent text (¶0046–0047) only requires νd > 60, so "patent" would not
be warranted. Inspector focal lengths are L4 −257.98, L5 −20.15, L6 +26.09 and L8 +115.52 mm, and L8 shows K-GFK68.

Movement: keyframe 0 is infinity (d15 1.00) and keyframe 1 is the close state (d15 13.27). L1–L8 and the iris move
12.27 mm toward the object and L9 stays fixed (¶0060). The overlay shows groups G1–G7 travelling 12.27 mm and G8
still. The slider's far end reads 45 cm, and the close state focuses at 449.96 mm object to image at −0.1732×.

Colour on axis (Fig. 2B, 420 px/mm): C − d is 0.064 paraxial and 0.063–0.070 toward the rim in the patent, against
0.066 and 0.064–0.068 in the model. g − d agrees at 0.048 / 0.049 paraxial and 0.094 / 0.097 at 0.7 of the pupil.
Above 0.85 of the pupil the model's g grows faster: 0.135 against 0.125 at 0.85, 0.182 against 0.161 at 0.95 and
0.217 against 0.181 at the rim, with a reading error of about 0.005. Lateral colour at 14.24 mm (Fig. 2C) is C +0.0037
against +0.0031 and g −0.0028 against −0.0030, with the g minimum −0.0054 against −0.0055 near 0.65 of the field. No
single relabel fixes the g excess. L5 on HOYA FD140 shifts the whole g curve 0.014 mm lower and spoils the paraxial
match. L6 on S-LAH60V cuts the excess to 0.013 at 0.95 but moves paraxial g − d to 0.044. No relabel is proposed.
Open: the model's g-line spherical aberration exceeds Fig. 2B by 0.01–0.02 mm above 0.85 of the pupil (0.036 mm at
the rim) while C and the paraxial g focus agree; the patent prints no line indices to settle it.
