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
  relabeling would change the chromatic results and the glass reports, so it is left for a glass pass.
- Open: `closeFocusM` 0.055 follows the Rogonar-S value (negative-side conjugate at 10×), not the spec's
  object-to-image definition (about 0.6 m at 10×). With no variable gap it has no optical effect.
- Open: the patent states no design conjugate; the model is infinity only, and enlarging magnifications are not
  modeled.
