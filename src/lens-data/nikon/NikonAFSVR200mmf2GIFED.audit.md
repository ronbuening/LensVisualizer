# Nikon AF-S VR 200mm f/2 G — construction audit

The first aperture estimate was rejected at S9 before any ray tracing. The correction changed only four inferred semi-diameters and left every printed optical and image-plane value unchanged. The package's numerical records are not in this repository. S1 was changed again on 2026-11-02, below.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. Table 3 (PDF p. 24) was read from the page image: 23 surfaces, 13 nd/νd/ng sets and the printed d1, d2 and B.f. at both states, with no mismatches. There are no aspheres. The front page agrees with the file: US 7,411,745 B2, Aug. 12, 2008, Mitsuaki Wada, Nikon Corporation.

First-order values, patent against model: f 195.000 / 195.002 mm; FNO 1.84 / 1.840; half-field 6.31° / 6.31°; B.f. 59.4575 mm printed and kept, paraxial 59.461 mm. Group values: f1 122.00 mm, f2 −41.92 mm, f1/(−f2) 2.91 against the printed 2.91. Longitudinal spherical aberration stays within ±0.014 mm, consistent with Fig. 8A. Close state: β −0.1257 against the printed −0.1258, object to image 1896.81 mm, 0.17% below Nikon's 1.9 m.

Public diagram comparison. Nikon's drawing, https://nij.nikon.com/cms/products/nikkor/fmount/af-s_vr_nikkor_200mm_f2g_if-ed/img/02.gif, was viewed in the coordinating review: ED on the first two positive elements and the rear element of the second doublet, Super ED on the meniscus, which are L1, L2, L6 and L4. Nikon lists 9 groups, 13 elements, 3 ED, 1 Super ED and 1 protective glass. Example 3 is the only example with 13/9 and three νd 82.6 plus one νd 91.0 elements. The association is family-level; Nikon's 1:8.1 sits closer to Example 6's β of −0.1235 than to Example 3's 1:7.95.

Figure scale. Arc fits of S1 and S3 give radial/axial ratios of 0.993 and 1.008, so Figure 7 is not anamorphic. L11 is drawn square-cut at 561–565 px × 0.0951 mm/px, 53.4–53.7 mm.

Fields changed. Data: S1 `sd` 57.5 → 53.5 and S2 `sd` 55 → 53.5; corner illumination at 6.3° 49.7% → 46.8%, worst loss 2.9 points (53.4 mm would cost 3.1). `gaps` for D10, D16 and BF from the printed rows; `closeFocusM` 1e15 → 1.9; `published: [1]`. Cleanup: header, subtitle, specs, `focus.description`, element roles, `apd: "inferred"` on L1, L2, L4 and L6, `cemented` tags D1–D4 → C1–C4, and new `groups` and `doublets`. The cleanup changed no optical value.

Open: no `focus.conjugates` entry, because the patent prints β and no object distance. Open: L4's νd 91.0 glass has no public catalog row.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source. `patents/US7411745B2.pdf`, PDF p. 8, Sheet 7, Fig. 7 (Example 3), native raster 2560 × 3300 px, read at 72 dpi; coma fans from Fig. 8A (p. 9, infinity) and Fig. 9A (p. 10, closest distance). The front page reads US 7,411,745 B2, Aug. 12, 2008, Mitsuaki Wada, Nikon Corporation, filed May 3, 2005, priority May 7, 2004 (JP 2004-139123). The figure draws the infinity state: D10 reads 5.4 mm against the printed 5.50 mm and D16 to the stop ticks 15.4 mm against 15.52 mm.

Scale. A least-squares fit of 21 vertex crossings against the prescription gives 10.482 px/mm, 0.0954 mm/px, with vertex residuals of 0.39 mm or less. S1 to S23 alone, 1660 px for 157.914 mm, gives 0.0951 mm/px. Arc fits with the radial scale free, on the six arcs with sag above 6 mm, give radial/axial ratios of 0.992 (S1), 1.012 (S3), 0.970 (S5), 0.982 (S6), 0.976 (S8) and 1.002 (S9), mean 0.989, so the figure is not anamorphic beyond about 1%. No stretch correction is applied. The sheet carries a shear of about 0.005 between the axis line and the element chords; heights below are half the distance between the left and right strokes, so it cancels. The stop ticks' inner ends are 183.5 px from the centre, 17.5 mm against the 18.207 mm F/1.84 radius, and were not used as a scale.

Rim table. Figure values are stroke centres for edges, and for cap ends the point where the arc, fitted to its stroke, meets the land.

| Surface | Stored | Figure | Now | Evidence |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 53.5 | 53.6 | 53.5 | 562 px; stroke edges 53.3–53.9; kept, see fans |
| 3 (L2 front) | 50.0 | 48.15 | 48.1 | L2 edge 504.75 px |
| 4 (L2/L3 joint) | 46.0 | 47.1 | 47.1 | L3 edge 493.75 px, the smaller partner; L2's edge stands 1.0 mm above it |
| 5 (L3 rear) | 44.5 | 42.2 | 42.2 + land 47.1 | arc meets land at 442 px on both sides |
| 6 (L4 front) | 39.0 | 37.3 | 37.3 | L4 edge 391.25 px |
| 7 (L4 rear) | 36.5 | 35.4–36.0 | 35.8 + land 37.3 | floor 35.66 at closest distance |
| 8 (L5 front) | 36.0 | 34.4 | 34.4 | L5 edge 360.25 px |
| 9 (L5/L6 joint) | 30.0 | 29.4 | 29.4 | L6 edge 308.25 px |
| 10 (L6 rear) | 28.5 | 28.1–28.4 | 28.5 + land 29.4 | cap within noise, kept |
| 11 (L7 front) | 26.0 | 25.5 | 25.5 | L7 edge 267.5 px |
| 12 (L7/L8 joint) | 24.5 | 24.9 | 24.9 | L8 edge 261 px, the smaller partner |
| 13 (L8 rear) | 23.5 | 20.2–20.9 | 20.8 + land 24.9 | floor 20.61 at infinity |
| 14 (L9 front) | 21.0 | 21.2 | 21.0 | L9 edge 222.25 px; within noise, kept |
| 15 (L9/L10 joint) | 20.5 | 20.9 | 20.9 | L10 edge 219.5 px, the smaller partner |
| 16 (L10 rear) | 20.5 | 19.0 | 19.0 + land 20.9 | floor 18.32 at infinity |
| 18, 19 (L11) | 20.5, 20.0 | 19.5 | 19.5, 19.5 | L11 edge 204 px, square |
| 20 (L12 front) | 19.0 | 19.3 | 19.3 | L12 edge 202.25 px, square |
| 21 (L12 rear) | 19.5 | 19.3 | 19.5 | kept: 19.3 costs 0.8 points at 5.3° and 0.5 at 6.3° |
| 22, 23 (L13) | 21.5 | 20.4 | 21.5 | L13 edge 214 px; kept for light, below |

The lands use `rimExtensionSd` because the figure draws each cap ending at a flat stroke. L5's rear land sits outside the cemented S9 and cannot carry a land, so the render joins 34.4 mm to 29.4 mm with a straight edge where the figure has a rim and a flat. L2's rear beyond the S4 joint has the same limit: the render chamfers L2's edge by 1.0 mm where the figure steps it.

Ray fans. Pupil ends read from the coma plots, normalized to the printed full pupil. Fig. 8A: left ends −0.171, −0.426, −0.583, −0.800 at Y 21.6, 15.1, 10.8, 5.4 mm; right ends +0.770, +0.902, +0.932 at the first three. Fig. 9A: left ends −0.239, −0.486, −0.62, −0.81; right ends +0.864 and +0.964 at the first two. Figure 9A prints NA = 0.25 where the full stop at the closest state would give 0.270, so the fan's unit pupil there is the NA 0.25 ray, 53.15 mm at S1.

- Left ends trace to S1 at 53.48, 53.12, 52.61, 53.18 mm at infinity and 52.17, 53.11, 52.38, 52.73 mm at the closest distance. S3 repeats at 45.2 to 46.8 mm, but that is under its own on-axis height of 46.94 mm, so it cannot be the limit. Figure and fans agree on L1, so S1 is a fan-traced radius.
- Right ends trace to L13: S22 at 18.58, 18.99, 18.44 and 18.42, 18.44 mm, mean 18.5 mm; S23 at 18.85, 19.13, 18.51 and 18.70, 18.59 mm, mean 18.8 mm. Figure 7 draws L13 to 20.4 mm with no cap end near 18.7 mm, so the figure does not support that radius and it stays out of the file. It does show the patent's corner is darker than the model's: with L13 at 18.7 mm the corner would be 37.1%.

Clearance. Infinity real-ray on-axis heights at F/1.84 and closest-distance heights at the printed NA 0.25 both clear every rim; the tightest are S7 35.66 against 35.8, S13 20.61 against 20.8 and S1 53.15 against 53.5. The earlier S4 of 46.0 clipped the closest-state ray at 46.26 mm, and the raise to 47.1 fixes it. The fixed full-stop ray at the closest state would reach S1 at 57.5 mm, NA 0.270, but the patent's NA 0.25 sits on the S1 rim, so that ray is not a design beam. No `CLIPS-AXIAL` or `BLOCKS-CHIEF` flag, the image-circle check prints no undersized surface, field coverage is 100% at 21.60 mm, the validator passes with `gapSagFrac` unchanged at 0.9, and longitudinal spherical aberration stays within ±0.014 mm.

Corner light, full-pupil lattice at infinity, field by field from 0° to 6.3°: package rims 100.0, 94.4, 86.8, 79.0, 70.8, 61.2, 49.7%; previous file 100.0, 93.4, 85.3, 77.0, 68.2, 58.4, 46.8%; this rim set 100.0, 93.4, 85.3, 77.0, 68.2, 58.4, 46.8%. Worst loss against the package is 2.9 points at 6.3°, all of it from S1 and S2; a one-at-a-time restore of every other element wins back 0.0 points. Engine half-field 6.31° and F/1.84 are unchanged. The engine's tracing limit moves from 7.55° to 7.54°, outside the printed field.

L13 stays at 21.5 mm because a cut costs light: 21.4 mm gives 46.7%, 21.0 mm 45.2%, 20.6 mm 43.9% and the drawn 20.4 mm 43.2%, and S1 and S2 already spend 2.9 of the 3 points. The step order to L12 is right. L13 stands 1.1 mm above Fig. 7 and above L10's 20.9 mm, where the figure has it below.

Rendered comparison. The local page was checked at infinity and at the closest distance, and the outline overlaid on the figure at matched scale. Curves and edges agree to about a stroke width except L13's rim, L5's rear land and S20: the arc drawn for S20 reads about R −60 mm against the printed −49.128 mm. First-order and spherical checks hold with the printed value, so the table stands.

Maker drawing, for order and proportions only. It agrees on 13 elements in 9 groups and adds the front protective plate and the drop-in filter. ED sits on elements 1, 2 and 6 and Super ED on element 4. Its rear group shows L13 slightly above L11 and L12, as Fig. 7 does.

Open: L5's rear land and L2's step outside the cemented joints cannot be drawn. Open: L13's 18.7 mm fan limit has no support in Fig. 7. If S1 is treated as outside the 3-point allowance as a fan-traced radius, L13 could fall to 20.6 mm at 43.9%.
