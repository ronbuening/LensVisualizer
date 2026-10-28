# Audit Log — OLYMPUS ZUIKO DIGITAL ED 7-14mm f/4.0

Patent: US 7,280,284 B2, Example 3 (Atsujiro Ishii / Olympus Corporation; filed 2005-09-07, granted 2007-10-09;
priority JP 2004-259416). Family prints: US 2006/0050406 A1, JP 4632724 B2.

## 2026-10-28 — Deployment validation and wording pass

### Source re-read

The Example 3 table (US B2 p.16, columns 11–12) was re-read from 300 dpi page images. All 31 surfaces were checked
(R, d, nd, νd, the stop at r19 and the six cemented interfaces), along with the 4 aspheres × 6 values (K, A4–A12) and
the 5 variable gaps × 3 zoom states × 2 focus states. There were no mismatches. The JP 4632724 B2 text layer gives the
same table and spacing rows. The certificate of correction (US B2 p.19, 2008-07-08) changes only columns 13–16 (the
claims). The front page matches `patentNumber`, `patentYear`, `authors` and `assignees`.

Asphere equation: the US B2, the USPTO copy, the A1 (p.15) and the JP B2 (p.8) all print
`x = (y²/r)/[1+{1−(K+1)(y/r)²}^1/2] A4y⁴ + A6y⁶ + …` with no operator before A4y⁴; in the JP text the break falls at a
line wrap. With the usual "+", LSA at full pupil is −0.090 / −0.103 / −0.037 mm (wide / middle / tele), with a
+0.055 mm zone at tele. This matches the Figure 7 SA curves on their ±0.20 mm scale. Subtracting A4 on S27/S28 gives
−7.4 / −13.1 / −27.8 mm, and subtracting it on S3/S4 does not build. The omission is a typesetting gap and not a
self-contradiction of the source, so the earlier `unresolved` errata entry was removed; the reading is explained in
the header.

### First-order check (patent vs model)

| Quantity | Patent | Model |
|---|---|---|
| EFL (mm) | 7.1 / 9.6 / 13.7 | 7.127 / 9.586 / 13.742 |
| F-number | 4 / 4 / 4 | 4 at every station |
| d31 vs paraxial BFD (mm) | 33.6 / 40.4 / 51.8 | 33.531 / 40.343 / 51.854 |
| Total track (mm) | — | 154.4 / 151.5 / 154.4 (front group returns, as the text states) |
| Condition (1)/(2), fR/\|fF\| | 2.77 | 27.32 / 9.86 = 2.77 |
| Condition (3), d8/d2 | 0.02 | 0.2 / 8.3 = 0.024 |
| 2ω at FIY 10.59 / 11.45 / 11.45 (°) | 114.7 / 97.9 / 78.2 | 112.2 / 99.4 / 78.4 |
| Close state, IO (mm) | 250 / 250 / 250 | 249.5 / 246.6 / 249.6 (image plane at the infinity offset) |
| Close magnification | — | −0.055 / −0.074 / −0.107 (Olympus: 0.11×) |

The printed 2ω at wide and middle does not follow from the patent's own FIY and distortion plots, so it is treated
as nominal. Zoom path: the printed stations are byte-identical to the source. No gap reverses across the 33 stations.
The front group reverses once (the concave path the text requires) and the stop moves steadily toward the object.
Interpolating between neighbouring stations adds at most 0.0067 mm of defocus.

### Maker-diagram comparison

Olympus specifies 18 elements in 12 groups, two double-sided glass-molded aspheres (the large concave L2 and an ED
rear element), 2 Super ED + 2 ED elements, inner focus, 0.25 m minimum focus and 0.11× magnification. The September
2010 catalog drawing marks the following positions:
- L2: pink (aspherical) large negative meniscus.
- L4 and L6: purple (Super ED).
- L14: cyan (ED).
- L16: red (ED glass-molded aspherical).

These are exactly the patent's aspheric elements (S3/S4, S27/S28) and its four nd 1.497 / νd 81.54 elements with
θgF 0.54. Example 1 (9.5–18.3 mm) and Example 2 (17 elements / 11 groups) fit the product less well. The patent prints
one glass for all four low-dispersion positions, so the Super ED/ED split is not in the source.

### Fields changed in this pass

| Field | Before | After | Reason |
|---|---|---|---|
| `gaps["4"]`, `gaps["15"]` close column | 11.6, 6.8 (infinity repeated) | 17.3, 1.1 at every station | Printed IO 250 mm rows; identical at the three printed stations, so interpolation gives the same values between them |
| `zoom.stations[0, 16, 32].publishedFocus` | absent | `[1]` | Printed close states |
| `focus.conjugates` | absent | stations 0/16/32, keyframe 1, 250 mm, `image-plane` | Printed IO row (object to image) |
| `focus.description` | infinity-only text | `PUBLISHED` close-focus description | — |
| S2 `sd` | 23.7 | 24.2 | Chief ray needs 23.9 mm for the 10.59 mm FIY and 24.12 mm for the 10.82 mm corner. Fig. 3(a) (USPTO scan at about 8.9 px/mm) draws r2 to about 24.5–25 mm |
| `checks.maxRimAngleDeg` | default ≈ 64.2 | 67 | S2 slope at 24.2 mm is 66.5° |
| `source.errata` | one `unresolved` entry | removed | See the asphere-equation note above |
| L4, L6, L14, L16 `apd` / `apdNote` | none / process text | `"patent"` / condition (4) and maker-drawing note | the patent names the nd 1.497 / νd 81.54 glass as satisfying its anomalous-dispersion condition (4) |
| `name` | `… f/4` | `… f/4.0` | Corpus form |
| `subtitle`, `specs`, header comment, `role` ×18, station and gap labels | process vocabulary | plain wording | — |
| `glass` ×18 | `Unmatched (literal patent …; melt unproven)` | `Unmatched (patent nd=…, νd=…; supplier unconfirmed)` | Resolution unchanged (none resolves before or after) |
| Derived floats | up to 17 decimals | at most 6 decimals | Printed values unchanged; engine numbers agree to 5e-7 |

The analysis file was updated to describe the close-focus state, the S2 aperture and the asphere-equation reading. The
pipeline and process text was removed.

After the changes, the surface validator reports no errors at infinity and with the close spacings. Field coverage
reaches the 10.82 mm corner at 33 of 33 stations (before: 31 of 33, with the wide end clipped at S2 at 10.38 mm). The
image-circle check reports 0 undersized.

Open: with the close spacings and infinity-launched chief rays, the wide end reaches 94–98% of the corner (limit at
S4, 16.2 mm). This is not a finite-object test. Recheck S4 against Fig. 3(a) if a finite-object coverage check is
added.

Closed: the patent's condition (4) text and its table of right-hand terms for nd 1.497 / νd 81.54 identify that
glass as anomalous-dispersion material, so L4/L6/L14/L16 carry `apd: "patent"`.

Open: L18 (νd 70.23) has no printed partial dispersion, so colour MTF stays at the reference wavelength.

## 2026-10-28 — Semi-diameter pass against the patent figure

### Source and scale

Figure: US 7,280,284 B2 sheet 3 (PDF page 4), Fig. 3(a), the wide-end infinity panel of Example 3, measured on the
native 300 dpi scan. The US 2006/0050406 A1 sheet 3 is the same drawing; the JP 4632724 B2 figure is smaller. The
lower half of the panel is free of leaders and labels; the upper half was used where it was clean, and the two sides
were averaged (the upper side reads 2–3 px higher; the axis tilts about 4 px across the panel and was taken locally).

Vertex crossings beside the axis: r1 at x = 628 px, r31 at 1691.5 px, image plane I at 1998.5 px. r1 to I is
1370.5 px for 154.4 mm (8.88 px/mm) and r7 to r18 is 302 px for 33.9 mm (8.91 px/mm); 8.89 px/mm is used. The drawing
is not uniform: the L1–L2 spacings are drawn about 5 % long and the rear group about 5 % short (r20 to r31 is 217.5 px
for 25.9 mm, 8.40 px/mm), so rear-group readings are also given at 8.45 px/mm in brackets. Heights are line centres.
The "floor" column is the larger of the F/4 axial marginal ray and the 10.82 mm corner chief ray, maximum over the 33
stations at infinity. The chief ray was solved by the engine (the solve that the field-coverage audit uses) and
traced surface by surface, because the scratch clear-aperture tracer cannot aim chief rays past about 45° here.

### Rim table

| Surface | Stored sd | Fig. 3(a) | Ratio | Floor | Decision |
|---|---|---|---|---|---|
| 1 | 33.5 | 33.5 | 1.00 | 31.54 | keep |
| 2 | 24.2 | 25.0 (r2 meets L1's flat rear face) | 1.03 | 24.12 | keep; 66.5° rim slope, `maxRimAngleDeg` 67 |
| 3 | 24.8 | 24.5 (r3 meets L2's edge) | 0.99 | 22.41 | keep |
| 4 | 16.2 | 18.3 | 1.13 | 16.15 | figure value 18.2; held, see below |
| 5 | 17.2 | 17.1 | 0.99 | 15.49 | keep |
| 6 | 14.7 | 14.2 (lower side) | 0.97 | 13.37 | keep |
| 7, 8 | 15.1 | 14.8 (lower side) | 0.98 | 12.82 | keep |
| 9, 10 | 15.1 | 15.0 (lower side) | 0.99 | 12.78 | keep |
| 11, 12 | 12.8 | 12.7 | 0.99 | 10.83 | keep |
| 13 | 11.0 | 11.2 | 1.02 | 9.63 | keep |
| 14, 15 | 11.0 | 10.5 | 0.95 | 8.42 | keep; the figure steps L8 about 0.6 mm under L7, inside the noise |
| 16–18 | 8.6 | 8.5 | 0.99 | 6.69 | keep |
| 20–23 | 7.5 | 7.2 [7.6] | 0.96 [1.01] | 7.33 | keep |
| 24–26 | 7.5 | 6.9 [7.25] | 0.92 [0.97] | 6.89 | keep |
| 27, 28 | 7.5 | 7.3 [7.7] | 0.97 [1.03] | 6.84 | keep |
| 29, 30 | 7.8 | 7.5 [7.9] (lower side) | 0.96 [1.01] | 6.55 | keep |
| 31 | 7.8 | 7.9 [8.3] (lower side) | 1.01 [1.06] | 6.74 | keep |

The stop was not touched. No surface fails a floor: the closest are S2 (24.2 against 24.12), S4 (16.2 against 16.15)
and S20 (7.5 against the 7.33 mm axial ray).

### S4

Both sides of Fig. 3(a) put the end of r4, where it meets L2's flat rear face, at 162–164 px (18.2–18.4 mm). The drawn
sag at that rim, 144 px (16.2 mm) behind the r4 vertex, matches the prescription's sag of 15.8 mm at 18.3 mm, so the
figure follows the printed asphere out there. The scan to 20 mm shows no turnover; the slope peaks at 57.2° near
18 mm. The figure draws L3's front corner touching r4 and nested under L2's flange. Olympus's catalogue drawing also
carries L2's rear face well out toward the front rim.

The validator refuses any S4 above about 16.5 mm. Once S4 passes S5's 17.2 mm, the S4→S5 check runs at 17.2 mm and
reports a combined sag of 11.53 mm against the 10.44 mm allowed of the 11.6 mm D4 (`gapSagFrac` 0.9). D4 is the same
at every station at infinity. The faces do not cross: they are 0.07 mm apart at 17.2 mm. The smallest `gapSagFrac`
that admits S4 = 18.2 mm is 1.00 with S5 at 17.2 mm, 0.99 with S5 at 17.1 mm (the figure mean) and 0.98 with S5 at
17.0 mm. This pass does not change `checks`, so S4 stays at 16.2 mm and the choice is left open. With S4 = 18.2 mm,
S5 = 17.1 mm and `gapSagFrac` 0.99 tried in memory, the lens builds without validation errors. L2's edge is 13.3 mm
thick at 18.2 mm. The corner chief ray still clears every rim at all 33 infinity stations. The close-focus S4 rows
below disappear.

### Clearance and engine results

These results are for the file as left. The surface validator reports no errors. The image-circle check reports 0
undersized. Field coverage reaches the 10.82 mm corner at 33 of 33 stations (corner field 56.7° at wide, 48.1° at
middle, 37.6° at tele). The engine gives EFL 7.127 mm, F/4 at every station and a 4.876 mm stop radius at wide, all
unchanged. With the close-focus spacings, infinity-launched chief rays still miss the corner at stations 0–1. They
cross S2 at 24.27 mm (station 2) and S4 at 16.43 mm (stations 2–3). This is not a finite-object test.

### Live check and maker drawing

Wide, middle and tele were rendered at infinity and at 250 mm. The section matches Fig. 3(a) in proportion, with one
exception: L2's rear rim. The render ends r4 at 16.2 mm, ahead of and below L3's front corner. The figure carries r4 out
to 18.3 mm, over that corner, to a flat rear face. No element overlaps in any state.

The September 2010 Olympus drawing has 18 elements in 12 groups, like the figure. It marks L2 (aspherical, both
sides), L4 and L6 (Super ED), L14 (ED) and L16 (ED glass-molded aspherical), the patent's S3/S4 and S27/S28 aspheres
and its four nd 1.497 elements. Its rear group is drawn proportionally larger than the patent's; the patent figure
governs.

Closed the same day: S4 = 18.2 mm and S5 = 17.1 mm applied with `checks.gapSagFrac` 0.99, the smallest two-decimal value
that admits the pair (faces about 0.19 mm apart at the rim at infinity, not crossing); both the patent figure and the
Olympus drawing carry L2's rear face that far out.

## 2026-10-28 — Second review: diagram, labels and movement

### What was compared

The local page was shot at the wide, middle and tele stations, at infinity and at the 250 mm state, with both movement
overlays (zoom, also at tele; focus at both ends) and the inspector open on L2, L4, L7, L14, L16 and L18. It was set
beside Fig. 3(a) (US B2 sheet 3, PDF page 4, native 300 dpi; axis at row 985) and the Olympus catalogue drawing. The
example text (US B2 cols. 7–8), claims 5–8 and the Example 3 table (p.16) were re-read for labels and movement.

### Silhouette

Re-measured on the lower half of Fig. 3(a) (outer ink, 8.89 px/mm; rear group also at its own 8.45 px/mm in
brackets): L1 33.2, L2 edge 24.4, L3 17.0, L4 14.6, L5 14.9, L6 12.6, L7 11.0, L8 10.5, L9/L10 8.6, triplet 7.2–7.3
[7.6], L14/L15 7.0 [7.3], L16 7.3 [7.7], L17/L18 7.5–8.1 [7.9–8.5] mm. All stored rims agree within about 5 %, so no
`sd` changed. The visible differences are of shape, not height:

- L1, L2 and L3 are drawn with flat rear lands: L1's from about 23.7 to 33.2 mm, L2's from r4's end at 18.1 mm to
  its 24.4 mm edge (behind L3), and L3's from r6's end at 13.6–14.1 mm to 17.0 mm. The site joins the unequal
  front/rear rims of these three with slanted bevels. Raising the rear `sd` to the edge would carry the curved face
  past the drawn land (r6 would wrap over L4's front corner; r4 turns over at about 21.8 mm; r2's R = 26.39 mm is
  below L1's 33.5 mm edge), so the curve-end values stay.
- The figure steps L8 about 0.5 mm under L7, and L14/L15 about 0.3 mm under the triplet and L16; both are inside
  measurement noise and are left equal.

A rim cut would draw the L2 and L3 lands without changing any traced ray. `rimCutDepthMm` is outside this pass's
edit list, so it was tried on a scratch copy only:

| Surface | `sd` now → trial | `rimCutDepthMm` | Cut radius | Beam reach |
|---|---|---|---|---|
| 4A | 18.2 → 24.0 | 15.65 | 18.21 (old `sd`) | 16.62 at 52.9°, close focus |
| 6 | 14.7 → 17.1 (= S5) | 5.35 | 14.70 (old `sd`) | 13.87 at 54.8°, infinity |

On that copy the surface validator, including its beam-clearance check, reports no errors. The aperture audit gives the
same 33/33 rows within 3 % of F/4, field coverage reaches the corner at 33 of 33 stations, and the vignetting
curve is identical (98.9 / 94.7 / 46.2 % at 50.7° / 53.7° / 56.7° at wide). The cap of S4 stays deeper than the cut
out to 24.0 mm (sag 15.76 mm), so 24.0 mm is the largest 0.1 mm step that passes. No cut is proposed for S2. The
Olympus drawing also carries L2's rear face out to its edge.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Aspheric surface labels | 3, 4, 27, 28 | 3A, 4A, 27A, 28A (gap key "4" → "4A"; gap label stays D4) | p.16 marks r3, r4, r27, r28 "(Aspheric)" and lists those four coefficient sets |
| `doublets` and element `cemented` | D1, D2, T1, D3, D4 | C1, C2, C3 (triplet), C4, C5 | the bracket "D4" read as the D4 air gap shown beside the focus slider |
| `groups` | FG (-) S1–S18, RG (+) | FG1 (-) S1–S4A, FG2 FOCUS S5–S15, FG3 (-) S16–S18, RG (+) | claims 5–6 split the negative group into first, second (focusing) and third lens units; the example text moves L3–L8 for focus. With one FG bracket the focus overlay showed 0.00 mm of travel; it now shows FG2 moving 5.70 mm toward the image and the other three fixed |
| L7–L18 `role` | D1/D2/T1/D3/D4 wording | C1–C5 wording | follows the renamed brackets |

The analysis file follows: C1–C5 in the element notes and the focus section, the 3A/4A/27A/28A asphere table, and one
paragraph in the architecture section on the brackets. The unit powers are FG1 −20.9 mm, FG2 +671 mm and
FG3 −51.4 mm; the claims allow either sign for FG2.

### Checked and found correct

- Element types agree with the signs of R for all 18 elements, and with the patent's own descriptions (L4 meniscus
  concave to the object, L8 convex to the image, L10 convex to the object, L13 biconvex with r23 = −813.03). L2 and
  L16 are the only aspheric elements, as the specs line states.
- The stop is r19, between L10 and L11. At the wide end Fig. 3(a) draws S about 3.9 mm ahead of r20, against
  D19 = 3.2 mm.
- `apd: "patent"` on L4, L6, L14 and L16. The patent tabulates the right-hand term of its anomalous-dispersion
  condition (4) for the nd 1.497 / νd 81.54 glass (0.52 against the printed θgF 0.54, cols. 13–14), and p.16
  prints that glass at these four positions. L18 (νd 70.23) carries no tag and no printed θgF. The Olympus drawing
  colours the same four as Super ED (L4, L6), ED (L14) and ED aspherical (L16), and L2 as aspherical.
- The inspector shows the type, glass, focal length, aspheric terms, tag note and role for each element opened. No
  element is missing `focalLengthMm`, and no cement layer is an element.
- Zoom: the 33 stations ascend from 7.1 to 13.7 mm, and the printed rows sit at stations 0, 16 and 32. D18 falls
  linearly 16.7 → 8.6 → 1.1 mm and D19 3.2 → 1.6 → 0.6 mm, while BF rises 33.6 → 40.4 → 51.8 mm. None of them
  reverses inside a segment. The front group (first vertex to image: 154.40 → 151.47 at station 18 → 154.40 mm) has
  one reversal and ends where it started, which is the concave locus that the Example 3 text describes. The stop and RG
  move monotonically toward the object, RG by 18.2 mm, while the stop-to-RG gap narrows, as the text states. The zoom
  overlay at tele shows the same.
- Focus: index 0 is infinity and index 1 is the printed 250 mm IO state. D4 goes 11.6 → 17.3 mm and D15 6.8 → 1.1 mm,
  so L3–L8 moves 5.7 mm toward the image at every station. The slider reads ∞ to 25 cm.
- Glass: L7 (1.55715/40.9), L9 (1.71628/54.33) and L10 (1.87753/35.66) stay Unmatched. Like the JP B2, the table on
  p.16 prints only nd and νd for them, with θgF for the 81.54 glass alone, so the source gives nothing further.

Engine results are unchanged by this pass: EFL 7.127 mm, F/4 at every station, a 4.876 mm stop radius and a
35.43° engine half-field at wide (44.70° at tele). The surface validator reports no errors, the image-circle check
reports 0 undersized, field coverage reaches the 10.82 mm corner at 33 of 33 stations, and the clear-aperture trace
flags no axial or chief-ray clip.

Open: the L2 and L3 land cuts tabled above wait on the coordinator.

Coordinator follow-up, same day: L3's rear land is applied as an inferred rim cut (S6 `sd` 14.7 → 17.1,
`rimCutDepthMm` 5.35, land at the former 14.7 mm rim; beams reach 13.87 mm there). The proposed S4A land (sd 24.0,
cut 15.65) is declined: `audit:surface --scan 4A` shows the asphere turning over near 22 mm, and an asphere's `sd`
must not go past its turnover. The surface validator, including its rim-cut beam check, reports no errors.
