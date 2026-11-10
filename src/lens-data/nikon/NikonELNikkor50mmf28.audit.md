# Audit — NIKON EL-NIKKOR 50mm f/2.8

## 2026-11-03 — Whole-source hypothetical reconstruction

Source transport, complete originals, CRC/member sets and payload hashes were independently checked by the consuming worker before construction. Primary table/figure pixels were inspected locally. All literal radii, total intervals and glass coordinates remain unchanged; source-native scale, wavelength convention, computed image plane, inferred stop/caps and diagnostic field assumptions were frozen before MTF. (Closed 2026-11-06: the native scale is replaced by the 0.5× production scale, the stop moves to the figure position and every rim is re-measured from the figure; see below.)

Normal geometry rejects and initial proposals are retained. No tolerance override, optical retuning or performance-based cap selection. The admitted branch has zero hidden render trim and positive full-operating-disk clearance. The numerical model preserves clipping and the full saved raw failure/aim-status overlap.

The nominal18 sampled source/diagnostic-angle MTF cases converge by normal0.01 criteria at the unchanged design plane. Six frequencies only, scalar sheared-pupil estimation, no independent physical-OPL/continuum/factory claim. Every refinement and raw pupil archive is retained; saved-array reconciliation is separate from the native estimator. (Closed 2026-11-06: these native-scale results do not describe the scaled model and are removed from the analysis.)

No numerical finite source state or continuous motion law is authored. Retail association and source-native dimensions remain distinct. No source field/format/enlarger ratio exists. The−5% cap sensitivity retains its clipped nominal-edge chief hold; off-center transmitted samples do not replace that field. (Closed 2026-11-06: the model is scaled to 50 mm and carries the production mount and format; it remains infinity only.)

Compiled viewer, mobile/comparison, corpus tests, build and final custody require their own terminal receipts. Historical source nomination/pending statuses do not declare model completion. Original source and prior archives remain unchanged. (Closed 2026-11-06: superseded by the deployment fix below.)

## 2026-11-06 — Deployment fix and wording pass

The lens was held back from deployment for three reasons: it sat at the patent's f = 100 scale under a production
name, its inferred rims clipped its own F/2.5 axial beam, and it had no mount or image format.

### Source re-read

US 2,906,174, all three PDF pages rendered at 110–300 dpi and every number read from the page images (the text layer
is poor OCR). The description table (col. 2) and the claim table (col. 3) agree, and all ten radii, six thicknesses,
three air spaces, six nd and six νd match the file as delivered; r1 = +59.35, r4 = −889.55 and r6 = −70.74 are
confirmed. Headline f = 100.0, F/2.5. No back focus, stop position, clear aperture or field angle is printed. Front
page: Zenji Wakimoto, assignor to Nippon Kogaku K.K.; application 31 July 1957, serial 675,357; granted 29 September
1959. Two slips in the source, left as printed: the col. 1 prose calls component III's single lens "L3" (table and
claim make it L4), and the table's component brace puts L2 under I and L3 alone under II, where the claim and the
figure make II the cemented L2–L3 doublet.

### Changes

- Scale: every length × 0.5 (LENS_DATA_SPEC item 9): R, d, sd and the computed back focus. No aspheres. The header
  comment records the factor.
- Identity: `key` nikon-el-nikkor-50mm-f28-wakimoto-native-f100 → nikon-el-nikkor-50mm-f28 (no other file uses it);
  `name` "NIKON EL-NIKKOR 50mm f/2.8 (Wakimoto)" → "NIKON EL-NIKKOR 50mm f/2.8"; subtitle → "US 2,906,174 — f = 100
  design scaled 0.5×; probable first-version EL-Nikkor 50mm f/2.8"; specs → 6 ELEMENTS / 4 GROUPS, DESIGN f = 100 mm
  (SCALED 0.5× TO 50 mm), DESIGN F/2.5, ALL SPHERICAL.
- Catalog: `lensMounts` ["enlarging-lens"], `imageFormat` "135-full-frame"; `focalLengthMm` {design 100} →
  {marketing 50, design 50}; `fNumber` {design 2.5} → {marketing 2.8, design 2.5}. `aperture.nominalFNumber` stays at
  the patent's 2.5.
- Stop: the midpoint split of l2 (6.445 / 6.445 patent units) → the figure position. Page 1 draws the diaphragm at
  x ≈ 1117 px (300 dpi) between the r5 vertex at 1048 px and the r6 vertex at 1155 px, 0.65 of the gap; the scaled
  l2 = 6.445 mm is split 4.19 + 2.255 mm. The derived stop radius is 6.663 mm; the drawn iris edge sits 113 px from
  the axis, 7.1 mm at this scale. The Nikon section draws its stop at about 0.7 of the same gap.
- Focus: `closeFocusM` 1e15 → 0.055, following the Rogonar-S 50mm f/2.8 enlarging-lens convention; no gap varies, so
  it moves nothing. Description rewritten in plain terms.
- Text: header comment, element roles, focus description and the whole analysis rewritten to the analysis spec;
  native-scale hypotheses, MTF grid results and production-process wording removed.

### Rims against the patent figure

Page 1 at 300 dpi: axis at y = 1648 px, r1 vertex at 860 px, r10 vertex at 1397.5 px, 7.954 px per patent unit. The
eight intermediate vertices fall within 0.35 units of the table. Isotropy check: the computed sags of r3, r5, r6 and
r7 at the measured rim heights land on the drawn corners within 1–2 px. Values in patent units, then scaled:

| Surface | As delivered (patent units) | Figure (patent units) | New sd (mm) | Notes |
| --- | ---: | ---: | ---: | --- |
| 1, 2 | 22.0 | 27.0 | 13.5 | Pointed meniscus edge, 1.4 mm thick |
| 3, 4 | 17.6 | 22.4 | 11.2 | r3 meets the flat rim; r4 runs to it |
| 5 | 12.8 | 14.0 | 7.0 | Curve ends at a flat land (to 17.9), then a bevel to 22.4; F/2.5 ray 6.82 mm |
| 6, 7 | 12.3 | 15.4 | 7.7 | Square rim; F/2.5 ray 6.45 / 6.50 mm |
| 8 | 14.5 | 14.1–15.0 | 7.25 | Kept: agrees with the figure; land and bevel beyond it |
| 9 | 17.8 | 22.2 | 11.1 | Interface runs to the flat rim |
| 10 | 16.3 | 21.5–22.4 | 11.1 | Curve meets the flat rim |

Before the change the aperture audit reported f/2.50 → f/2.70 (rim +7.9 %), needing S3 18.7, S5 13.8, S6 13.0 and
S7 13.1 patent units. Every figure value is at or above those floors, so no rim needed a clearance-only raise. The
r7/r8 air space narrows from 1.165 mm on the axis to 0.29 mm at the 7.25 mm shared rim, within the default gap-sag
limit.

Maker section: the Nital reproduction of the Nippon Kogaku sheet (EL-NIKKOR 5cm F2.8; 322 × 433 px, viewed in the
browser, not downloaded) draws six elements in four groups in the patent's order. Its semi-diameters, in patent units
from its axial length, are about 27.3 (L1), 21.4 (front doublet), 13.6 (L3 rear curve), 14.7 (L4) and 21.1 (rear
doublet), within about 5 % of the patent figure at that image's resolution.

### First-order values

| Quantity | Patent | As delivered (f = 100 scale) | Now (mm) |
| --- | --- | ---: | ---: |
| EFL | f = 100.0 | 99.9948 | 49.9974 |
| F-number wide open | F/2.5 | 2.500 | 2.500 |
| Back focus (paraxial) | not printed | 64.3254 | 32.1627 |
| Total track | — | 131.7754 | 65.8877 |
| Stop radius | not printed | 13.529 (midpoint) | 6.663 (figure position) |
| Petzval sum | — | 0.001813 | 0.003626 mm⁻¹ |
| Engine half-field | — | 21.58° | 29.99° |

Aperture audit: within 3 % of the stated f-number, no rim limit. Surface audit: OK, no validation errors. Image
circle: no undersized surface. Field coverage: the 23.4° chief ray reaches 21.65 mm, the 24 × 36 mm corner, clear.
Wide-open geometric transmission at infinity, before: 85.4 % on axis (the F/2.5 beam was clipped) and 56.2 % at
12.2°; now: 100 % on axis, 90.4 % at 11.7°, 78.1 % at 17.5°, 68.1 % at 20.5° and 55.5 % at 23.4°.

### Open

- Open: all six printed glass pairs coincide with catalog types (SSK1 class: Hoya BACED1 / Sumita K-SSK1; N-SK10 /
  S-BSM10; Hoya F9; N-SK16 / S-BSM16; Sumita LLF7; Sumita K-SK18 / S-BSM18). The file keeps them "Unmatched";
  relabeling would change the chromatic results and the glass reports, so it is left for a glass pass. (Closed
  2026-11-06: all six now carry these catalog equivalents, each within 0.09 in νd of its catalog entry.)
- Open: `closeFocusM` 0.055 follows the Rogonar-S value (negative-side conjugate at 10×), not the spec's
  object-to-image definition (about 0.6 m at 10×). With no variable gap it has no optical effect.
- Open: the patent states no design conjugate; the model is infinity only, and enlarging magnifications are not
  modeled.

## 2026-11-06 — Semi-diameter pass against the patent figure

### Figure and scale

US 2,906,174 page 1, the sole figure of the sole example: a 300 dpi CCITT scan with no usable text layer, read at its
native resolution through column and row ink profiles and 600–900 dpi zooms. Heights are line centres, and every
surface was read above and below the axis.

The dash-dot axis is not level: it falls from y = 1650.5 px at x = 825 to y = 1644.5 px at x = 1430 (slope −0.0099,
the sheet is turned 0.57°), so each height is taken from the local axis and the two sides are averaged. Vertex
crossings at 300 dpi: r1 860.5, r2 918.5, r3 927, r4 1022, r5 1048, r6 1155.5, r7 1247, r8 1265.5, r9 1283.5, r10
1398 px. The r1–r10 span, 537.5 px for 67.45 patent units, gives 7.97 px per patent unit (15.94 px per model mm);
the sub-spans r1–r5, r1–r6 and r6–r10 give 7.90, 8.05 and 7.87. Arc fits of the drawn r1, r5 and r10 outlines to the
printed radii give a vertical scale of 8.25, 8.1–8.2 and 7.75 px per unit, so the figure is isotropic within about
3 % and heights use 7.97.

### Rims

| Surface | Stored sd (mm) | Figure, top / bottom (px) | Figure (mm) | Ratio | Result |
| --- | ---: | ---: | ---: | ---: | --- |
| 1, 2 | 13.5 | 214.5 / 218.5 | 13.58 | 1.01 | Kept; pointed edge with a short cap |
| 3, 4 | 11.2 | 176.5 / 177.5 | 11.10 | 0.99 | Kept; r3 meets the flat edge |
| 5 (cap end) | 7.0 | 116 / 115 | 7.25 | 1.04 | Kept; the land's axial position gives 7.15–7.28 |
| 5 (land top) | — | 141 / 138 | 8.75 | — | `rimExtensionSd` 8.8 added |
| 6, 7 | 7.7 | 119 / 121.9 | 7.56 | 0.98 | Kept; square rim |
| 8 (cap end) | 7.25 | 124 / 120.5 | 7.67 | 1.06 | Kept; see below |
| 8 (land top) | — | 143 / 143 | 8.97 | — | `rimExtensionSd` 9.0 added |
| 9, 10 | 11.1 | 174.6 / 175.5 | 10.98 | 0.99 | Kept; r10 meets the flat edge |

Every stored rim agrees with the figure within 6 %, so no `sd` changes. Beyond the r5 and r8 curves the figure draws,
on both sides of the axis, a short stroke square to the axis and then a 45° bevel to the doublet's flat edge; the
maker's section draws flat shoulders in the same two places. Those strokes are now `rimExtensionSd` lands at 8.8 mm
(r5) and 9.0 mm (r8), with `sd` unchanged. The section joins each land to the element edge with one straight
chamfer, which stands in for the figure's bevel and short flat.

The r8 cap end is the one uncertain reading. Its height above the axis is 7.67 mm, at a rounded corner good to about
0.1 mm, but the land's axial position (41.6 px ahead of the drawn r8 vertex) puts the end of the r8 sphere at
7.07–7.28 mm, depending on whether the drawn or the scaled-table vertex is used. The figure draws that corner level
with the L4 rim (+0.1 ± 0.2 mm), where the model has it 0.45 mm lower; the maker's section draws it below the L4 rim
(about 13 against 16.5 source px from the axis), as the model does. Raising r8 to 7.7 mm would add 4.4 points of
corner light (55.5 % to 59.9 % at 23.4°) on a reading inside the noise band that the second drawing contradicts, so
r8 stays at 7.25 mm.

### Clearance and light

Surface audit: OK, no validation errors. Image circle: no undersized surface. Field coverage: the 23.4° chief ray
reaches the 21.65 mm corner, clear. Aperture audit: within 3 % of F/2.5, no rim limit; the rim-cut probe finds no
inferred cut. The real-ray trace at Y = 21.63 mm (ω = 23.36°) shows no axial clip and no blocked chief ray; the F/2.5
marginal ray reaches 10.00 mm at r1, 6.82 mm at r5, 6.45 and 6.50 mm at r6 and r7 and 6.32 mm at r8. Engine
half-field 29.99° and F/2.500, unchanged. Wide-open geometric transmission at infinity, unchanged by the lands: 100,
98.8, 95.6, 90.4, 84.8, 78.1, 68.1 and 55.5 % at 0, 5.8, 8.8, 11.7, 14.6, 17.5, 20.5 and 23.4°; against the starting
rims the lands cost 0.0 points at every field. No gap varies, so the closest-focus render matches infinity; the
local page shows both lands at both states.

### Maker section

The Nital reproduction of the Nippon Kogaku sheet (322 × 433 px; viewed in the browser and its pixels read through a
canvas, nothing saved) draws six elements in four groups in the patent's order and marks no special glass or
aspherical surface. With the front doublet's half-width (24 source px) as reference, L4 reads 0.69 of it (patent
figure 0.68), the r5 cap end about 0.51 (0.65) and the r8 cap end about 0.54 (0.69): the maker draws both concave
caps shorter and their shoulders wider than the patent figure does. The patent figure governs.

## 2026-11-06 — Second review: diagram, labels and movement

### What was compared

The local page at infinity, at the far end of the focus slider and with each element's inspector open, against the
sole figure of US 2,906,174 (page 1, the 300 dpi CCITT scan) and the Nippon Kogaku section reproduced by Nital
(322 × 433 px, viewed, nothing kept). Every rim below was re-read independently from the page raster: line centres
from row and column ink runs, each height taken from the local dash-dot axis (y = 1650.5 px at x = 830, 1644 px at
x = 1430, so the sheet is turned 0.62°) on both sides of the axis. Vertex crossings r1 860, r4 1022, r5 1048, r6 1156,
r7 1247, r8 1265, r10 1398 px; r1 to r10 is 537.5 px for 33.725 mm, 15.94 px per mm.

### Rims and lands

| Surface | Stored (mm) | Figure, top / bottom (px) | Figure (mm) | Ratio | Result |
| --- | ---: | ---: | ---: | ---: | --- |
| 1, 2 | 13.5 | 215.5 / 216.5 | 13.55 | 1.00 | Kept |
| 3, 4 | 11.2 | 176.6 / 176.9 | 11.09 | 0.99 | Kept |
| 5, cap end | 7.0 | 113.7 / 115.3 | 7.18 | 1.03 | Kept; the land 40.5 px behind the r5 vertex gives 7.18 as well |
| 5, land top (`rimExtensionSd`) | 8.8 | 142.7 / 139.3 | 8.85 | 1.01 | Kept |
| 6, 7 | 7.7 | 118.6 / 122.4 | 7.56 | 0.98 | Kept; square rim |
| 8, cap end | 7.25 | 123.3 / 121.8 | 7.69 | 0.94 | Kept; see below |
| 8, land top (`rimExtensionSd`) | 9.0 | 144.3 / 143.8 | 9.04 | 1.00 | Kept |
| 9, 10 | 11.1 | 174.5 / 176.5 | 11.01 | 0.99 | Kept; r10 meets the flat edge at a corner |

No `sd` is below its value in the baseline file, so there is no cut to judge. The two lands cost no light: restoring
either to its baseline (no land) wins back 0.0 points at every field, and the whole lens loses 0.0 points against the
baseline rims at 0 to 23.4°. Both lands stay as the figure draws them.

The r8 cap end is the one reading the figure cannot settle. Its drawn height is 7.69 mm (7.74 above, 7.64 below), level
with the drawn L4 rim. Its drawn axial position, 43.5 px ahead of the drawn r8 vertex (40.9 px ahead of the vertex the
table places), gives 7.23 to 7.42 mm on the printed radius. The drawn r8 arc explains the conflict: sampled from the
vertex to the land and corrected for the sheet's turn, it fits a radius of 198 to 200 px against the printed 182.6 px
(11.455 mm), so it is drawn about 9 % flatter than the prescription, where the r5 arc fits 178 to 180 px against
182.1 px. The gap between the L4 corner and the r8 land, 0.16 mm above and 0.38 mm below, would put the cap end at 7.5
to 7.7 mm. The spread straddles the stored 7.25 mm within the noise band, and the maker's section is too coarse to
decide it (0.45 mm is under one source pixel there), so 7.25 stays. The drawn r10 arc is likewise flatter near its rim
than R = 16.61 mm, so its drawn height, which meets the flat edge, governs r10 rather than its axial position.

### Shoulders the section cannot draw

Both cemented components carry a flat cylindrical edge, a 45° bevel and a short land in the figure. Behind the front
doublet the edge runs 2.0 mm past the interface at 11.09 mm, the bevel falls 2.14 mm over 2.29 mm to the land top at
8.85 mm, and the land meets the r5 cap 2.54 mm behind its vertex. In front of the rear doublet the land rises to
9.04 mm, the bevel rises 1.95 mm over 1.66 mm, and the flat edge runs 3.4 mm to the interface. The maker's section
draws the same: long edges, a rounded shoulder behind the front doublet and 45° bevels in front of the rear one. The
renderer joins each land top to the cemented interface's rim with one straight chamfer (4.3 mm long on L3, 5.1 mm on
L5), so on the site L3 and L5 show long sloping shoulders where both drawings show mostly flat edge. No `sd` or land
height reproduces a flat-plus-bevel edge; raising a land toward the edge height trades the drawn land and bevel
corner for a tall land, so the lands stay at the drawn land tops.

### Labels, tags and movement

- Elements L1 to L6 use the patent's own lens designations; the components are I to IV. `type` agrees with the signs of
  R for all six (L1 and L4 menisci, L2 and L6 biconvex, L3 and L5 biconcave), every element carries a focal length, and
  the roles match the patent text, including component III's separate shifting of the sagittal and meridional fields.
- Group brackets "Front I–II" (surfaces 1–5) and "Rear III–IV" (6–10) follow the patent's front Gauss-type pair and rear
  wide-angle-type pair; cemented brackets CD1 (3–5) and CD2 (8–10) cover components II and IV. No bracket collides with
  another label on the page.
- The stop sits between L3 and L4. The drawn iris is 0.64 of the way from the r5 vertex to the r6 vertex (the file
  uses 0.65), and its inner edge is 7.1 mm from the axis.
- No surface is aspheric and none is marked; no element carries an `apd` tag, and neither the patent, which states that
  no special glass is needed, nor the maker's section marks one.
- The inspector shows, for L3, "Biconcave Negative", nd 1.62045, νd 38, FL −17.93 mm, F9 (HOYA); for L5, "Biconcave
  Negative", nd 1.54869, νd 45.4, FL −17.16 mm, LLF7 (SUMITA). The six labels lie within 0.09 in νd and 0.00002 in nd
  of their catalog entries, which answers the glass `Open:` line above. The patent prints only nd and νd and no
  aberration curves, so no colour, astigmatism or distortion plot is available for comparison.
- Movement: no gap varies. The focus description says the lens focuses as a unit in the enlarger; the slider reads ∞
  at both ends with "Not modeled" at the far end, and the movement overlay reports no modeled focus or zoom movement.
  There is no near state to trace with a finite object.

### Clearance and light

Surface audit: OK, no validation errors. Image circle: no undersized surface. Field coverage: the 23.4° chief ray
reaches the 21.65 mm corner, clear. The real-ray trace at Y = 21.63 mm (ω = 23.36°) shows no axial clip and no blocked
chief ray. Engine half-field 29.99° and F/2.500, wide-open transmission 100, 98.8, 95.6, 90.4, 84.8, 78.1, 68.1 and
55.5 % at 0, 5.8, 8.8, 11.7, 14.6, 17.5, 20.5 and 23.4°: all unchanged, as no value in the data file changed.
