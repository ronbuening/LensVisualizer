# Audit Log — SONY 70-300mm f/4.5-5.6 G SSM

Patent: JP 2009-168934 A (Tamron), Example 3 (pp. 10–11), Fig. 3.

## 2026-10-19 — Deployment validation

Source re-read from 250 dpi renders: all 28 rows (R, d, nd, νd), the stop at row 11, the four cemented groups and all
30 variable-gap values (d5, d10, d15, d23, BF at wide / middle / tele, infinity and 1.6 m) match the data file. No
aspheres. The printed indices are nd (1.48749 / 70.44, 1.49700 / 81.61, 1.84666 / 23.78), matching the d-line reference.

Patent vs model: EFL 71.7730 / 140.0942 / 291.9632 vs 71.7730 / 140.0943 / 291.9633; BF 52.592 / 77.133 / 98.397 (defocus
under 0.0004 mm); total length 175.925 / 206.840 / 235.878 exact; ω 16.41 / 8.53 / 4.12° reproduced at Y 21.633; group
focal lengths exact; conditions (1) 3.84 and (3) 7.81 reproduced. The 1.6 m object distances 1424.07 / 1393.16 / 1364.12
come out as 1424.00 / 1393.16 / 1364.13. `audit:surface` OK, image circle OK, field coverage 41/41 at 100 %.

Departures from the literal example: 38 of 41 stations are a calculated cam (G1, G3, G5 and total length linear; G2 and
G4 solved for linear EFL and zero defocus — plain gap interpolation defocuses by up to 13.3 mm mid-to-tele); intermediate
G5 focus positions reconstructed with d23 + BF constant; F-number linear between printed stations; rims and glass
names estimated.

Product: Sony lists 16 elements / 11 groups, one ED element, 1.2 m, 0.25×, 62 mm filter, on sale 28 March 2008 (the
Tamron filing is January 2008). Sony's diagram (`sony.jp/products/picture/SAL70300G_002.jpg`) matches the patent group
by group, with the ED element third in G1 (1.497 / 81.61). Examples 1, 2, 4, 5 and 6 are 72–390 mm designs.

Open: `offAxisFieldFrac` is 0.3
instead of the default 0.6, which hides corner vignetting. The model stops at the patent's 1.6 m against the marketed
1.2 m. The SAL70300G2 (2015) is also 16/11 with one ED element and 1.2 m and probably shares the optics; not confirmed.
Wording items (missing spaces, subtitle and analysis jargon such as "correlation" and "certified"): closed by the
wording pass below.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/JP2009168934A.pdf`, PDF page 22 (sheet 21), Fig. 3 — the third-embodiment section (brief description
of drawings, sheet 19), wide-end panel (広角端), object at the bottom of the page. The embedded raster is 400 ppi; it was
measured at 400 and 800 dpi. Scale: the 25 axial crossings line up with the wide/infinity prescription. Surface 1 to 28
is 630 px for 123.333 mm, so 0.1958 mm/px at 400 dpi. Part spans give 0.191–0.197 (G1 15.38 mm, G3 8.03 mm, G4
16.71 mm, G5 7.72 mm), and the variable gaps d10 and d15 give 0.196 and 0.198. Rims are each element's vertical edge,
averaged across both sides of the axis, which cancels an axis offset of about 1 px. Two further checks support the
reading. The drawn edge thicknesses of the last G4 element (1.8 mm) and the first (1.9 mm) equal the prescription
values at 12.4 mm. A red overlay of the model outline on the figure agrees at every element.

| Surfaces | Element | Before | Figure | After | Evidence |
|---|---|---|---|---|---|
| 1–2 | L1 | 29 | 25.9 | 25.9 | Edge at ±264.5 px at 800 dpi; the drawn edge (2.2 mm including line width) fits the 1.6 mm edge thickness |
| 3–5 | D1 | 26 | 25.0 (s5 corner 24.4) | 25.0 | Inside the noise band; lowered so L1 stays about 0.9 mm larger, as drawn |
| 6–7 | L4 | 12 | flange 13.9; s7 curve ends at 11.1–11.5 | 12 (kept) | The drawn rectangle is a mounting flange. s7 at 13.9 would cross s8 |
| 8–10 | D2 | 12 | 12.9 | 12 (kept) | 7 %, inside the noise band; the step order (L4 flange outside D2) is not inverted |
| 12–15 | L7, L8 | 11.5 | 12.2, one shared rim | 11.6 | Axial clip fix (s12 needs 11.58). L8 follows so that the shared rim the figure draws stays square |
| 16–17 | L9 | 15 | 12.4 | 12.4 | 0.83 of the stored value; the edge thickness matches |
| 18–21 | T1 | 13 | 12.4 outer, 12.0 middle | 12.4 | Brought flush with L9 and L13 as drawn; otherwise T1 would stand 0.6 mm proud |
| 22–23 | L13 | 14 | 12.4 | 12.4 | 0.89 of the stored value; the edge thickness matches |
| 24 | L14 front | 10.5 | 11.5 | 11.5 | G5 is drawn as one flush rectangle |
| 25 | L14 rear | 10.5 | curve meets the rim (it crosses s26 at about 11.2 mm) | 10.6 | Highest value the 0.90 gap-sag limit allows against s26; the remainder is a flat flange |
| 26–28 | D3 | 10.5 | 11.5 | 11.5 | Flush with the L14 front, as drawn |

The stop is unchanged. No aspheres. No `gapSagFrac` change is needed. s25 cannot follow the rest of G5 to 11.5 mm
because the s25 and s26 curves cross near 11.2 mm (11.0 mm alone would need a fraction near 0.96), so a flange step is
the correct model.

Clearance after the edit, at infinity and at 1.6 m over all 41 stations: no axial clip, no blocked chief ray. The
smallest axial margins are s12 0.02 mm, s3 0.48 mm, s17 0.55 mm, s6 0.66 mm and s1 0.69 mm (tele). The validator,
the image-circle floor and field coverage (41/41 at 100 % to the 21.6 mm corner) all pass. The engine half-field
rose at wide (18.10° to 19.63°) and fell slightly at tele (7.04° to 6.70°, now limited by s3; the patent's ω is
4.12°). The f-number is unchanged. Wide-open geometric transmission at the patent corner field is 44.8 % at wide (was 39.6 %), 81.9 % at
8.5° mid (was 79.7 %) and 64.9 % at tele (was 64.3 %). The G1 cut adds a little mid-field vignetting at wide (95.3 %
at 5.5°, was 97.9 %).

The figure's G1 surface labels (r1–r6) and image-side numbering up to r32 do not follow the table's 28 rows. The
drawing is used for shape only.

## 2026-10-19 — Deployment validation and wording pass

The source re-read, the patent-versus-model first-order values and the comparison with the maker's diagram are in the
deployment validation section above; nothing in them changed. The maker's diagram shows 16 elements in 11 groups with
one ED element, third in G1, and that is now tagged on element 3 as an inferred APD.

Data file: the subtitle, specs and element 3 APD tag were set by the coordinator. This pass rewrote the header comment
(spacing in "1.6 m" and "1.2 m", "row 11", "13.3 mm"; the pipeline words "correlation", "certified" and
"reconstruction" replaced). It rewrote `focus.description` to say plainly that the infinity and 1.6 m states are
printed, that G5 moves 0.73 / 1.62 / 4.82 mm toward the image at wide / middle / tele, that intermediate positions
are calculated, and that Sony's marketed minimum focus is 1.2 m. The three conjugate `source` strings now read
"JP 2009-168934 A, Example 3, Table 3-1 d0". Built and probe output, before against after: identical. The surface
validator passes.

Analysis: spacing fixed ("row 11", "surface 28", "d23 + BF"). The paragraph repeated in all 16 element entries about
the in-air focal length is now one sentence under Optical Architecture. Process wording was removed or plainly
restated: "validation evidence", the gap-sag remark and "certify". The heading "Aperture, Clear Apertures and
Validation" became "Aperture and Clear Apertures". The glass section now credits L3's ED status to Sony's diagram,
which matches the new APD tag.

Interpolation defocus, closed: a paraxial trace with all printed gaps interpolated linearly between the printed
stations gives a maximum of 13.30 mm, at 59 % of the way from the middle to the tele station. The wide-to-middle
segment is smaller. The residuals at the printed stations are 0.0004 mm or less. The deployment validation section's
"about 12.8 mm" now reads 13.3 mm, matching the header and analysis. Still open from above: `offAxisFieldFrac` 0.3, the 1.2 m
marketed minimum focus that is not modeled, and the SAL70300G2 identity.

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the local page (wide, middle and tele at infinity, tele at 1.6 m, both group-movement overlays, the element
inspector for elements 3, 11 and 14) against Fig. 3 of `patents/JP2009168934A.pdf` (PDF page 22, wide panel, re-read
at 400 and 800 dpi), Tables 3 and 3-1 (PDF pages 11–12), paragraphs 0028–0029 and the reference-sign list (0040),
and the aberration plots of Figs. 19 and 23 (PDF pages 26–27).

Naming convention, changed. Fig. 3 gives every element a reference sign, L11 to L53, whose tens digit is the group,
and the figure brackets and paragraph 0040 call the groups L1 to L5 (第1レンズ群 to 第5レンズ群). The figure's surface
signs r1–r32 count both faces of every element, so cemented interfaces are counted twice and the stop is not numbered;
that is why they do not follow the table's 28 rows, and why the table's image plane is row 34 (32 faces, the stop,
then the image). The surface labels stay on the table rows, because the prescription is the table. The element and
group names now follow the figure, the same practice as the Samyang AF 14 file: `name` and `diagramLabel` both carry
the sign, so the diagram, inspector and analysis agree. With two-digit element signs, the group names L1–L5 clash with
nothing.

| Field | Before | After | Evidence |
|---|---|---|---|
| element `name` 1–16 | L1 … L16 | L11 L12 L13 / L21 L22 L23 / L31 L32 / L41 … L45 / L51 L52 L53 | Fig. 3 leader labels, wide panel |
| element `diagramLabel` 1–16 | none (ids shown) | same as `name` | as above |
| `groups` text | G1 … G5 | L1 … L5 | Fig. 3 brackets; paragraph 0040; Table 3-1 group starts 1, 6, 11, 16, 24 |
| element 3 `apdNote` | "third in G1" | "third in group L1" | follows the group rename |
| `focus.description` | "rear group G5" | "rear group L5 (L51-L53)" | follows the rename; the numbers were already right |
| header comment | G-names | L-names, plus the naming and r1–r32 note | — |

The analysis was brought into line: the 16 element headings, the group counts, the cam and focus paragraphs and the
clear-aperture paragraph now use L-names, and the identification section states the convention once. Earlier sections
of this log use the sequential names: element "L1" there is L11, "L3" is L13, "L4" is L21, "L14" is L51, "D1" is
L12 + L13, and G1–G5 are L1–L5.

Silhouette, no change. Re-measured at 800 dpi (0.098 mm/px), half the full rim span: L11 25.9 mm, L12–L13 25.3 mm,
L21 13.9 mm (a squared flange; its concave rear ends near 11.3 mm), L22–L23 13.1 mm, L31–L32 12.3 mm, L41 12.6 mm,
the triplet 12.5 mm, L45 12.5 mm, L51 11.6 mm, L52–L53 11.5 mm. The stored rims agree within 3 % except three, and
each has a reason to stay. L22–L23 (12 mm, figure 13.1 mm) passes the validator at 13 mm, but L21 cannot rise above
about 12.1 mm before its rear face meets s8, so raising the doublet would draw it taller than L21, the reverse of the
figure; both stay at 12. L3 (11.6 mm, figure 12.3 mm, 6 %, inside the noise band) is drawn with L31 and L32 meeting at
the rim: the s13→s14 gap-sag check fails from 11.8 mm (1.81 of 2.00 mm at tele) and 12.3 mm would need a gap-sag
fraction of 0.99, so the faces would touch. The rear of L51 (s25, 10.6 mm) still cannot follow the flush 11.5 mm
front, because s25 and s26 cross near 11.2 mm; the site shows a small bevel where the figure draws a flange. Element
heights keep the drawn order: L11 above L12–L13, L4 above L3, L5 slightly lower than L4. The stop is drawn 2 mm ahead
of L31, where Fig. 3 puts S.

Checked and found correct. All 16 `type` strings agree with the signs of R (L11, L13, L23, L45 positive menisci convex
to the object; L41 and L52 positive menisci concave to the object; L12, L21, L42, L51 negative menisci convex to the
object; L32 and L44 negative menisci concave to the object; L31 and L43 biconvex; L22 and L53 biconcave). No aspheres
in the patent and none in the file. The cemented brackets D1 (3–5), D2 (8–10), T1 (18–21) and D3 (26–28) span the
four cemented components, have no cement-layer entries, and none equals a gap label (D5, D10, D15, D23, BF). The
inspector shows element 3 as "Element 3 L13", inferred APD, doublet D1, positive meniscus, 1.497 / 81.61, f = +96.13 mm,
FCD1; element 11 as L43, triplet T1, biconvex, f = +25.85 mm, FC5; element 14 as L51, negative meniscus, f = −58.37 mm,
BACD16. The patent text designates no special glass, so the single `"inferred"` tag on L13 stands on Sony's diagram as
recorded in the deployment validation above.

Movement, correct. Stations ascend 71.773 → 291.963 mm. Every gap moves monotonically in the direction paragraph 0028
gives (d5 1.65 → 65.75 rising; d10, d15, d23 falling; BF rising), and the printed values are exact at all three
stations. Group travel from wide to tele, toward the object: L1 59.95 mm, L3 21.14 mm, L4 33.67 mm, L5 45.81 mm, all
monotonic. L2 is the only group the patent does not say moves toward the object: printed, it moves 2.15 mm toward the
object to the middle station and then 6.29 mm toward the image. The calculated cam adds a dip of 2.06 mm toward the
image near 96 mm before the printed middle position; this is the solve, not patent data, and the analysis now says so.
Focus: only L5 moves, toward the image (Fig. 3's フォーカス arrow), by 0.728, 1.623 and 4.820 mm at wide, middle and
tele, matching Table 3-1 (d23 + BF constant) and the statement that travel grows with focal length; keyframe 0 is
infinity, keyframe 8 is 1.6 m, and the steps are monotonic. The slider's far end reads 1.60 m. The overlays show the
same directions.

Aberrations against the patent plots (scratch d-line trace). Wide, f/4.59: longitudinal spherical −0.17 mm at 0.85
pupil and −0.23 mm at the rim against about −0.20 mm read from Fig. 19; ΔM / ΔS at 16.4° −0.26 / −0.22 mm against
about −0.25 / −0.20 mm; distortion +2.3 % against about +2.3 %. Tele, f/5.79: the d-line curve has the same S shape,
−0.21 mm at 0.6 pupil and −0.11 mm at 0.9 against about −0.23 and −0.14 mm on Fig. 23, though the plot turns more
sharply at the rim; ΔM / ΔS at 4.1° −0.35 / −0.28 mm against about −0.35 / −0.29 mm; distortion +2.8 % against about
+2.7 %. The model reproduces the example.

Glass. Every printed pair matches a catalog row at the printed nd to within 0.005 in νd, which is the rounding of the
two-decimal Abbe numbers, so no row is pinned more exactly than the Hoya labels. Rows that land marginally closer
(CDGM H-QK3L for 1.48749 / 70.44; Schott N-LAF34 and Hikari J-LASF016 for 1.7725 / 49.62; Ohara S-TIH53 for
1.84666 / 23.78) are within the same rounding. Two pairs have only a Hoya match, NBFD11 (1.7859 / 43.93) and NBFD15
(1.8061 / 33.27), and the patent's other examples separate the vendors: Example 2 prints Ohara values (1.48749 / 70.21,
1.78590 / 44.19) where Examples 1, 3, 4, 5 and 6 print the Hoya 70.44. That supports the Hoya labels. The pairs
1.48749 / 70.44, 1.49700 / 81.61, 1.80610 / 33.27 and 1.84666 / 23.78 recur in five or six examples; 1.7725 / 49.62
also appears in Example 1; the rest occur only in Example 3 but are exact catalog glasses. No element is Unmatched,
and no label's catalog νd differs from the printed value by more than 0.01.

Validation after the edits: built and probe output are identical to before; the surface validator, image-circle
floor and field coverage (41 of 41 stations at 100 %) pass; clearance and the vignetting curve are unchanged. The
engine half-field stays 19.63° at wide and the f-number stays f/4.59; the clear-aperture trace still gives ω 16.41°,
8.53° and 4.12° at 21.633 mm, as printed. Open: the L22–L23, L3 and s25 compromises above; `offAxisFieldFrac` 0.3;
the marketed 1.2 m close focus.

Follow-up the same day: intermediate zoom cam re-solved. The calculated cam above moved L2 2.06 mm toward the image
between the wide and middle stations, against the patent's direction, and carried it 0.58 mm past its tele position
before returning. The coordinator's two suggested constructions were tried first and neither is monotone. With L2 on
PCHIP in focal length, L1 and L5 linear and L3 + L4 solved, L3 overshoots its printed positions by 6.8 mm and 17.5 mm.
With L3 linear and L4 + L5 solved, L4 overshoots by 6.0 mm and L5 by 3.3 mm. No monotone L2 shape exists with L5
kept linear: the best leaves 1.1 mm of reversal. With L3 linear the best leaves 0.05 mm.

The adopted cam keeps L1, and with it the total track, linear in focal length as before. L2 and L3 follow cubic
Bernstein fractions between their printed positions, which are monotone by construction. L4 and L5 are solved for the
station focal length and zero paraxial defocus. The control points were chosen by a grid search that requires
one-way motion for every group and for the four gaps the patent names in paragraph 0028 (d5 rising; d10, d15 and d23
falling), then the least roughness. Wide to middle, L2 uses (0, 1), so it arrives at the middle station with zero
slope, and L3 uses (0.55, 0.9). Middle to tele, L2 uses (0.95, 1) and L3 (0.6, 1). L2 cannot also leave the middle
station flat: every such shape reverses L3 or L4.

The L5 focus travel at the 38 intermediate stations was re-solved for the existing keyframe distances (object to
image 1600 mm ÷ t, d23 + BF constant). The printed stations 0, 20 and 40 are byte-identical in every keyframe, and
every value outside the `"gaps"` block is unchanged apart from the rim below.

| Measure | Before | After |
|---|---|---|
| L2 reversal, wide → middle | 2.06 mm toward the image, 7 reversed steps | none |
| L2 overshoot past the tele position | 0.58 mm, 5 reversed steps | none |
| Other groups and the four gaps | one-way | one-way |
| Largest infinity defocus | 0.0004 mm (printed stations) | 0.0004 mm (printed stations); intermediate below 1e-9 mm |
| Station focal lengths | ascending | ascending, equal to `focalLengthMm` |
| L2 position at 100 mm, from wide | 2.0 mm toward the image | 0.8 mm toward the object |

Rim consequence: with the new cam the axial marginal ray at s12 reaches 11.67 mm at intermediate stations, which
clipped the 11.6 mm rim. L3 (s12–s15) is raised to 11.7 mm, the least change that clears it. The validator still
passes, and 11.8 mm would fail the s13→s14 gap-sag check. Clearance afterwards, at infinity and 1.6 m over all 41
stations: no axial clip and no blocked chief ray. The surface validator, the image-circle floor and field coverage
(41/41 at 100 %) pass. The engine half-field (19.63°) and f/4.59 are unchanged, and so is the wide-open curve at the
wide end (44.8 % at 16.4°). The group-movement overlays show L1, L3, L4 and L5 travelling toward the object and L2
first toward the object, then toward the image. Focus at 200 mm moves only L5, 2.77 mm toward the image.
