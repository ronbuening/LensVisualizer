# Audit Log — CANON EF-M 55-200mm f/4.5-6.3 IS STM

The source is JP 2017-161933 A, published 2017-09-14, application 2017-99432. It is a divisional of application
2013-99925, which was published as JP 2014-219616 A on 2014-11-20. Both publications name Canon Inc. as applicant and
萩原 泰明 (Yasuaki Hagiwara) as inventor. The data file models the first numerical table of JP 2017-161933 A, which
the publication associates with Figure 1. The parent prints the same table as 実施例1 (¶0067–0068): every radius,
thickness, index, Abbe number and aspheric coefficient matches. Its Figure 1 on page 21 draws the same lens. Neither
publication tabulates clear apertures, so every semi-diameter is an estimate from the drawing.

## 2026-10-28 — Semi-diameter pass against the patent figure

The pass measured two drawings: parent JP 2014-219616 A Figure 1 (page 21) and JP 2017-161933 A Figure 1 (page 20).
Both are the wide-angle, infinity state with the optical axis horizontal and the object on the left. The parent's
drawing is a 199 ppi raster, the cleaner of the two, and governs. It was rendered at 400 dpi, with the axis on row
878. The divisional's drawing is a 150 ppi raster with dropouts. It was rendered at 300 dpi and used as the check.

Scale, parent: the S1 vertex is at x = 570.5 px and the S29 vertex at x = 1602.5 px. That is 1032 px for the 85.68 mm
first-to-last vertex span at the wide-angle infinity spacing, or 0.0830 mm/px. Two check spans agree:

- S1–S11 is 400 px for 33.16 mm, 0.0829 mm/px.
- S11–S29 is 632 px for 52.52 mm, 0.0831 mm/px.

All 28 drawn vertex crossings fall within about 1.5 px of their prescription positions. The first face of the
camera-side plate sits 15.0 mm behind S29, which is the printed wide-angle d29.

Scale, divisional: S1 to S29 is 599 px, or 0.1430 mm/px; S1 to S11 checks at 33.18 mm.

Rims were read on both sides of the axis, inside the group brackets. Each value is the distance from the axis centre
to the stroke centre. The two sides agree to the pixel throughout, and the two drawings agree to about 0.15 mm.

| Surface | Before | Parent Fig. 1 | JP 2017 Fig. 1 | After | Evidence |
|---|---|---|---|---|---|
| 1, 2 (L1) | 15.5 | 15.27 | 15.23 | 15.5 | −1.5 %, kept |
| 3, 4 (L2, junction) | 15.25 | 14.94 | 14.94 | 15.25 | −2 %, kept |
| 5 (L3 rear) | 15.25 | 14.44 | 14.37 | 15.25 | −5 %, inside noise, kept |
| 6, 7 (L4, junction) | 9.0 | 8.88 | 8.94 | 9.0 | kept |
| 8 (L5 rear) | 9.0 | 8.39 | 8.4–8.6 | **8.4** | drawn cemented step; L5 no longer towers over L6 |
| 9, 10 (L6) | 8.2 | 8.55 | 8.4–8.6 | 8.2 | +4 %, square rim, kept (see below) |
| 11, 12 (L7) | 9.5 | 9.22 | 9.22 | 9.5 | −3 %, kept |
| 13, 14 (L8, junction) | 8.5 | 8.38 | 8.37 | 8.5 | kept |
| 15 (L9 rear) | 8.5 | 7.72 | 7.79 | **7.7** | −9 %, drawn cemented step |
| 17A, 18A (L10) | 6.25 | 6.23 | 6.08 | 6.25 | kept; asphere rims unchanged |
| 19–21 (L11/L12) | 5.5 | 5.35 | 5.2–5.4 | 5.5 | −3 %, kept |
| 22, 23 (L13) | 5.75 | 5.73 | 5.51 | 5.75 | kept |
| 24–26 (L14/L15) | 5.75 | 5.56 | 5.51 | 5.75 | −3.5 %, kept |
| 27 (L16 front) | 9.5 | 8.72 | 8.65 | **8.7** | −8 %, drawn cemented step |
| 28, 29 (L17, junction) | 9.5 | 9.38 | 9.51 | 9.5 | kept |

The old values set each cemented pair square at its larger member's rim. Both drawings step D2, D3 and D6 instead.
L5 sits 0.5 mm inside L4. L9 sits 0.66 mm inside L8. L16 sits 0.66 mm inside L17. The three smaller faces now take
the drawn heights. Junction surfaces S7, S14 and S28 keep the larger partner's rim. The renderer draws each smaller
member's edge as a chamfer between its two faces, the nearest it can come to the drawn step. D1's step is 0.5 mm, or
5 %, and stays square. The STO is not authored. The engine still derives it from the stop rule, at 6.40–6.54 mm across
the zoom range.

L6 needed a decision. In the drawing, L6 (8.55 mm) stands slightly taller than L5's rear face (8.39 mm), and the two
nearly touch across the 2.01 mm S8–S9 gap. At 8.4 mm only 0.12 mm of air remains between the faces. The stored
8.2 mm is 4 % under the drawing, which is inside noise. The engine-relevant floor also clears it. Tracing the real
axial ray through the engine's paraxial iris rim gives, as a maximum over the 33 stations:

- At infinity focus, 7.98 mm at S8, 7.98 mm at S9 and 8.18 mm at S10. All three peak at 195 mm.
- At the 1 m close focus, 7.67, 7.68 and 7.88 mm.

The scratch real-ray tool launches the axial ray at the full paraxial entrance-pupil height, EFL/2N. That ray crosses
the stop at 6.64–6.76 mm, 3.4–3.7 % above the engine iris, because of the front groups' spherical aberration. On that
basis it reports 8.23/8.44 mm at S9/S10. The engine uses the paraxial stop rule: `audit:aperture` finds every station
iris-limited, with the traced f-number equal to the stated one from f/4.50 to f/6.45, and needs no raise. L6
therefore stays at 8.2/8.2. A square 8.5/8.5 mm L6, matching the drawing and that tool, would need `checks.gapSagFrac`
0.94: the S8–S9 intrusion at 8.4 mm is 0.9385 of the gap, the faces do not cross and 0.124 mm of air remains. With S8
left at 9.0 mm it would need 0.97. Neither setting was applied.

Clearance and engine state after the edit:

- The surface validator passes. The largest air-gap sag fraction is still 0.894, at S8–S9, checked at 8.2 mm.
- The image-circle floor reports no undersized surface.
- Traced field coverage reaches the full 13.66 mm at all 33 stations: 13.8° at 56.6 mm and 3.9° at 195 mm.
- The engine build is identical before and after: half-field 14.51°, f/4.5 at wide, a 6.405 mm stop radius at wide,
  and identical entrance and exit pupils.
- New rims against their engine axial floors: S8 8.4 against 7.98, S15 7.7 against 6.92 and S27 8.7 against 3.12. S15
  also clears the full unvignetted corner bundle (7.53 mm). S27 clears the corner chief ray (7.48 mm).
- The engine's geometric vignetting curve is unchanged at every sampled field. Wide open at infinity: 56.0 % at 13.8°
  (56.6 mm), 52.1 % at 5.7° (134 mm) and 47.9 % at 3.9° (195 mm). S29 already limits the rear-group rim rays that
  S27's reduction would otherwise cut.

Live render, compared at 56.6 mm and 195 mm, at infinity and at 1 m: D2, D3 and D6 now step down to their smaller
members as drawn. L5's rear rim no longer overhangs L6 by 0.8 mm. No elements overlap.

Canon's construction diagram shows the same 17 elements in 11 groups and the same sequence of singlets and cemented
pairs. It marks UD glass at L8, the front member of the third cemented pair. It marks the aspherical element at L10,
the first element after the stop, and the IS group at the L11/L12 doublet. The diagram is schematic and draws the
cemented pairs nearly square, so the patent figure governs the rims.

Limitations: the rims come from patent drawings at about 12 px per millimetre. Production clear apertures may differ.
The `.analysis.md` ray counts were recorded before the three reductions. They were not re-run.

## 2026-10-28 — Deployment validation and wording pass

This section supersedes the source statement at the top of the log: the file now cites the parent JP 2014-219616 A
(application 2013-99925, filed 2013-05-10, published 2014-11-20), Example 1. That is the table's own heading there
(［実施例１］, ¶0067–0068, pp. 12–13) and the narrative's Example 1 (Fig. 1, ¶0015). The divisional JP 2017-161933 A
(published 2017-09-14) reprints the table as its first numerical example and assigns it to Reference Example 1. The
parent was published four months after the July 2014 launch and is the earliest publication of the design.

Source re-read. Every row was read from the page images of both publications: 29 surfaces plus the stop and the
camera-side plate (R, d, nd, νd), the 10 printed aspheric values (S17 K and A4–A12, S18 K and A4–A8), the four
variable gaps at the three printed states, and the fixed D26 = 12.62 mm. The two publications print identical values
and the data file matches them; no mismatch was found. The asphere equation (parent ¶0065) uses (1 + K), and K = 0.

First order, patent against model:

- EFL 56.60/134.00/195.00 mm against 56.615/133.998/195.005 mm.
- Air-equivalent BF 17.70/28.38/40.78 mm against 17.72/28.38/40.80 mm; paraxial defocus 0.021/0.005/0.017 mm.
- Air-equivalent TL 103.39/130.12/144.77 mm against 103.38/130.11/144.75 mm; 103.91/130.64/145.28 mm physical.
- f/4.50/5.70/6.45 by the stop rule. Group focal lengths 93.52/−21.90/26.02/−33.93/−4057.03 mm against
  93.52/−21.90/26.02/−33.93/−4056.20 mm. Conditions (1)–(9) of the divisional's Table 1 reproduce to three decimals.
- The printed half-angles 13.57/5.82/4.01° equal atan(Y/f); the traced chief ray reaches 13.66 mm at 13.78/5.71/3.93°.

Zoom and focus path: D5, D10 and D29 are monotonic, D26 is constant at infinity, and D23 has the one reversal the
printed rows require, peaking at the printed middle station. Every unit moves objectward, and B4a and B4b move
together (¶0027–0028). Infinity defocus at the calculated stations is below 0.0001 mm. With the model's image plane
the closest focus position is 1.000 m object to image at every station, for 0.061×/0.141×/0.205× at the printed
stations (Canon: 0.21×). B4a travels 1.18–7.29 mm, and D23 + D26 stays constant to 1e−9 mm.

Maker diagram: the Canon Camera Museum section has the same 17 elements in 11 groups, with UD glass at L8
(νd 81.5), the aspherical element at L10 and the IS unit at L11/L12. Examples 2 and 5 share the element count and
glass types and cannot be separated from Example 1 by the diagram; Examples 3 and 4 have three νd 81.5 elements and
do not fit.

Validators after this pass: the surface validator passes; the image-circle floor reports no undersized surface;
field coverage reaches 13.66 mm at all 33 stations. The full-pupil real-ray clearance tool reports no blocked chief
ray and flags S9/S10 (needing 8.23/8.44 mm against 8.20 mm) only under its full entrance-pupil launch, as explained in
the semi-diameter section above.

Changes in this pass:

- `source.patentNumber` "JP 2017-161933 A" → "JP 2014-219616 A" and `patentYear` 2017 → 2014; `source.example`
  stays Example 1, and authors and assignees are unchanged. The header, the analysis and its Sources cite the parent
  and note the divisional reprint.
- `subtitle` → "JP 2014-219616 A, Example 1 — strong production correlation". `specs` → "17 ELEMENTS / 11 GROUPS",
  "DESIGN f = 56.60–195.00 mm", "DESIGN F/4.50–6.45", "2 ASPHERICAL SURFACES / 1 ELEMENT", "1 UD ELEMENT (MAKER)".
- Element labels → "Element 1"–"Element 17"; roles rewritten per element; glass strings → catalog name plus
  "(catalog equivalent; supplier unconfirmed)", with identical catalog resolution for all 17 elements; L8 tagged
  `apd: "inferred"` with a note, since Canon marks it UD and the patent names no glass.
- The focus description and the rear-plate source string are rewritten in plain terms.
- 878 numeric literals with more than six decimals are rounded to six (largest change 5e−7 mm). The engine build is
  identical; the paraxial probe changes only in its last printed digit, by at most 0.03 mm in multi-metre object
  distances. The 30 calculated station labels are rounded to two decimals.
- Analysis: process vocabulary and the ray and MTF count paragraphs are removed, the "Verification Limits" heading is
  renamed "Model Limitations", missing spaces before numbers are restored, and the glass table is relabelled.

Open:

- `aperture.fStops` lists the printed station f-numbers 5.7 and 6.45 as click stops; f-number fields were outside this
  pass.
- L6 stays at 8.20 mm; a full-pupil real ray would need 8.44 mm at S10 (see the semi-diameter section).

## 2026-10-28 — Second review: diagram, labels and movement

This independent review compared the local lens page with parent JP 2014-219616 A Figure 1 (page 21, wide angle,
infinity), its text (¶0013–0028, ¶0058–0068) and Canon's construction diagram. The figure was re-measured with the
silhouette profiler at 400 dpi on both sides of the axis (axis row 878, 0.0830 mm/px). Every rim agrees with the first
pass to 0.02 mm: L1 15.27, L2 14.94, L3 rear 14.44, L4 8.88, L5 rear 8.39, L6 8.55, L7 9.21, L8 8.38, L9 rear 7.72,
L10 6.23, L11/L12 5.39, L13 5.73, L14/L15 5.56, L16 front 8.72 and L17 9.38 mm.

Silhouette differences seen on the page before this review:

- L6 rendered 0.2 mm shorter than L5's rear rim, the reverse of the figure, where the square-cut L6 stands 0.16 mm
  taller than L5's rear face. It also stood 0.8 mm below L4 against 0.33 mm drawn. Canon's diagram draws L6 as tall as
  L4.
- The cemented steps of C2, C3 and C6 render as bevels, since the renderer joins a member's two rims with a straight
  edge. That is the nearest it can come to the drawn steps; no change.
- C1 renders square at 15.25 mm, while the figure steps L3's rear face 0.5 mm in. At 5 % this is within the
  measurement noise, and the first pass kept it; no change.

| Surface | Before | After | Figure | Evidence |
|---|---|---|---|---|
| 8 (L5 rear) | 8.4 | **8.2** | 8.39 | −2 % from the drawing, still under L6 as drawn |
| 9, 10 (L6) | 8.2 / 8.2 | **8.5 / 8.5** | 8.55 | square at the drawn height; drawn order L4 > L6 > L5 rear restored |

With L6 at 8.5 mm, S8 at the drawn 8.4 mm closes 1.89 mm of the 2.01 mm S8–S9 gap, or 0.939 of it, and the surface
validator refuses it at the default 0.90. S8 = 8.2 mm is the largest value it admits (0.894); 8.25 mm fails. The faces
do not cross at 8.4 mm: 0.12 mm of air remains. The exact drawn set, S8 8.4 and S9/S10 8.5, passes the validator with
`checks.gapSagFrac` 0.94 and then leaves no full-pupil clearance flag. That setting is outside this review's edit list
and was not applied.

Clearance after the edit:

- Engine axial ray through the iris rim, maximum over 33 stations: 7.98 mm at S8 and 8.18 mm at S10, both at 195 mm
  and infinity focus; 7.67 and 7.88 mm at the 1 m close focus.
- The full-pupil real-ray tool now flags only S8, needing 8.23 mm against 8.2 mm. Before, it flagged S9 and S10 at
  8.23 and 8.44 mm against 8.2 mm. Its launch ray crosses the stop 3.7 % above the engine iris (6.64 against 6.40 mm at
  56.6 mm), as the semi-diameter section explains. No chief ray is blocked.
- The surface validator passes; the image-circle floor reports no undersized surface; field coverage reaches 13.66 mm
  at all 33 stations.
- The engine build is identical before and after: half-field 14.51°, f/4.5 at 56.6 mm, stop radius 6.405 mm.
- Wide-open transmission at infinity, before and after: 73.6 % and 73.7 % at 11.5° (56.6 mm), and 94.2 % and 94.3 % at
  2.9° (134 mm). Every other sampled field is unchanged: 56.0 % at 13.8°, 52.1 % at 5.7° and 47.9 % at 3.9°.

Labels:

- Cemented brackets and the `cemented` names change from D1–D6 to C1–C6. The bracket "D5" over the B4a focusing pair
  read the same as the variable gap D5 (B1–B2) shown beside the zoom slider. C4 now reads "C4 IS", which marks the
  B3b stabilizing doublet on the diagram. The inspector now shows "DOUBLET C1" to "DOUBLET C6".
- Group brackets stay B1, B2, B3, "B4a Focus" and B4b. The figure also brackets B3a, B3b and B3c inside B3 and B4
  above B4a/B4b. A trial split of B3 into B3a, B3b and B3c ran the B3b and B3c labels together and pushed
  "B4a Focus" to a second row at 56.6 mm, so B3 stays one bracket and C4 carries the IS label.
- Element names L1–L17 are sequential; the patent names only the groups (B1–B4, B3a–B3c, B4a/B4b, LR, SP, GB). Every
  `type` matches the signs of its radii. L10 is the only aspheric element, with S17A and S18A as printed (17*, 18*).
  The stop sits between S15 and S17A, as SP does in the figure. Every element has a focal length. No cement layer is
  tagged.
- L8 keeps `apd: "inferred"`. The patent text names no glass type, and Canon's diagram colours L8 as its one UD
  element.
- The inspector for L6, L8, L10, L11 and L14 shows the expected type, glass, focal length and role; L10 shows both
  aspheric surfaces.

Movement, from the printed rows and ¶0027–0028 (all distances from the image plane, wide → tele):

- Zoom: B1 103.91 → 130.64 → 145.28 mm, B2 92.61 → 94.65 → 101.24 mm, B3 70.75 → 83.97 → 93.93 mm and B4a
  37.75 → 48.43 → 60.83 mm. B4b moves 22.53 → 33.21 → 45.61 mm. Every group moves objectward, monotonically through
  all 33 stations, as ¶0027 and ¶0058 describe and as the figure's arrows show.
- D5 rises 1.40 → 34.14 mm and D10 falls 15.35 → 0.80 mm, D29 rises 15.00 → 38.08 mm, and D26 holds 12.62 mm at
  infinity, so B4a and B4b share one path (¶0028, loci 4a1 = 4b). D23 rises 2.00 → 4.54 mm to the printed middle
  station and falls to 2.10 mm, with no other reversal.
- Focus: keyframe 0 is infinity and keyframe 8 is the 1 m minimum. Only B4a moves, imageward (arrow 4c, ¶0028), by
  1.18 mm at 56.6 mm and 7.29 mm at 195 mm; D23 + D26 stays constant. At close focus B4a still moves objectward with
  zoom, as the dotted locus 4a2 shows. Both movement overlays show this, and the focus slider ends at 1.00 m.

Live page after the edits, at 56.6, 134 and 195 mm, at infinity and 1 m, and at all 33 stations at 1 m: L6 stands
above L5's rear rim and below L4, as drawn, and no elements overlap. At some close-focus states between about 140
and 170 mm, "B4a Focus" and "B4b" sit on one row with almost no space between them. The label packer's margin
causes this; the labels do not overlap.

Open: `checks.gapSagFrac` 0.94 with S8 back at 8.4 mm would reproduce the drawn L5/L6 rims exactly. This review
supersedes the open L6 item of the wording pass above.

Coordinator follow-up, same day: S8 is restored to its drawn 8.4 mm with `checks.gapSagFrac` 0.94, the smallest
two-decimal value that admits it beside L6's 8.5 mm (0.9385 of the 2.01 mm gap; the faces do not cross). The
surface validator reports no errors.
