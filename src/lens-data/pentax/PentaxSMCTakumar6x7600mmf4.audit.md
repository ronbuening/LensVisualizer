# Audit Log — Pentax SMC Takumar 6x7 600mm f/4

Patent f100/F4 is uniformly scaled x6 as a modeled interpretation of the 600mm family. The printed L 74.2 defines the image plane; its source rounding and paraxial residual remain. Maker 12 m MOD and patent 7f near plot do not supply finite spacings.

Optical input source: Sole specific numerical example, Table 1, Figs. 1–3; printed L 74.2. All lengths x6; indices and Abbe numbers unchanged. Earlier secondary 3502292 identification is unrelated.

The builder visually inspected the selected primary table and optical figure and the supplied maker pages.

Initial/rejected hypotheses, source residuals, exact native clearances, all stop variants, pupil receipts, native diffraction snapshots and subsequent integration/viewer evidence are retained externally. The current data uses only the midpoint iris and its frozen inferred SD vector. No R/d/nd/vd/image-plane optimization occurred.

Final optical data are static infinity only. Native default auto-MTF focus behavior is distinct from design-plane research, particularly the rounded L plane of the 600mm source. No mandatory production UI patch is required.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read from the page images of US 3,502,393 (Table 1 and the table in claim 1): 11 radii, 10 axial spacings, 6 nd, 6 νd and L, each compared as printed value × 6. No mismatches. All five Table 2 columns reproduce from Table 1 to 0.0012 per surface, with exact sums (−0.313, 0.122, 0.480, −0.453, −2.894), but only with the pupil at r1. The midpoint iris misses columns II and III by more than 2, so the table confirms the prescription and does not locate an iris.

Patent vs model: printed 1:4.0, f = 100 mm, L = 74.2, half field 4.1°. At × 6 that is 600 mm, F/4, 445.2 mm; the model gives EFL 599.973 mm, F/4.00, 445.2 mm (authored). The scale is inferred from the marketed focal length, not printed. Paraxial back focus is 173.797 mm against the 174.0 mm last gap, a difference of 0.203 mm. Table 1 computes to L = 74.166, which prints as 74.2, so the difference is rounding. A single-slip search over 1,131 candidates found one that reached f and L (d5 1.2 to 1.3); it fails Table 2 (ΔI 0.010), so none survive. The format corner is 4.23° at 44.8 mm; the patent's field ends at 43.0 mm.

Maker comparison: Pentax's lens table (`pentax_6x7_lenses.pdf` p. 30) prints 5-6, 8.5°, 12.0 m, f/45, 170 × 370 mm, 6,000 g. The 445.2 mm image distance less the 84.95 mm flange leaves 360 mm against the 370 mm length. The count comes from that table and the layout from the patent figure. A designer list credits Kazamaki and Matsumoto with the Takumar 600mm f/4 and links this patent, though its text misprints the number.

Fields changed: `closeFocusM` to 12 and `focus.description`, in the data fix. In this cleanup: header comment, `subtitle`, `catalog.specs`, element `role`, `focalLengthMm` added, `doublets` entry C1 added. The analysis lost its package-run diffraction and pupil-count sections, stray text about another lens and the 8°15′ field figure. It gained the Conditional Expressions section. The same stray text left this log. No R, d, nd, νd or `sd` changed.

Open: the earlier analysis cited a construction drawing in a Pentax dealer notebook (Pacific Rim Camera item 01236, PDF p. 13). That page was not in hand for this review, so the claim and the citation were removed. Viewing it would settle the L4 singlet and rear-doublet layout.

Open: L5 is a near but not exact catalog row (Δνd −0.35). L3 has no catalog row. L4 now resolves on SUMITA LLF8, added to the catalog on 2026-11-02, which equals the printed pair.

Closed: the front rim of 165 mm left little room inside the 170 mm barrel with its slide-out hood. The semi-diameter pass below takes it to 153.8 mm, on the figure and the F/4 ray; the barrel stays an outer bound only.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: US 3,502,393, page 1 of the PDF, Fig. 1, the only section drawing and the sole example. The page is a 1-bit scan, 2320 × 3408 pixels, and the figure is a hand sketch 360 native pixels long. All readings are native pixels; rim strokes are 4 to 5 pixels thick and heights are read to the stroke centre, so one reading is good to about ±1 pixel, or ±0.85 mm. No maker section drawing was available, so the figure stands alone. Its layout of 6 elements with L5 and L6 cemented matches the 5 groups / 6 elements in Pentax's table.

Axial scale: all eleven vertices fit at 0.758 mm per pixel. Spans give 0.752 first to last vertex, 0.751 across the l3 air gap, 0.781 across l4 and 0.794 across L1 to L3. The largest vertex residual is 3.4 mm, at the thin rear pair.

Vertical scale: arc fits prove nothing here. The figure's curvatures are schematic: fitted to the true radii, the eleven surfaces imply anywhere from 0.12 to 2.47 mm per pixel (r1 0.71, r3 0.95, r5 0.63, r10 0.90), and r2 and r4 are drawn about five times too curved. There is no stop tick, because the figure draws no iris. At the axial scale the drawn rims of L1 to L4 are 68.6, 66.5, 64.8 and 39.6 mm, which is 8.5 to 10.1 % inside the exact F/4 ray, so the heights cannot be read at that scale. They run a constant 1.19 to 1.21 pixels per mm of F/4 ray height at those four elements, so the taper is sound and the absolute height is not. The ray at L3 sets the lower bound, 0.843 mm per pixel; the heights are read at 0.85, which is 12 % more than the axial scale and is inferred, not measured. The old rims needed about 0.91 mm per pixel, a 20 % stretch, with proportions within 3 %, which is why only the absolute height and one step were wrong.

| Surfaces | Before | After | Fig. 1 height (px) | At 0.85 mm/px | Exact F/4 ray (mm) | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1, 2 (L1) | 82.5 | 76.9 | 90.5 | 76.9 | 75.00, 74.17 | Figure, above the ray; both faces meet at one height |
| 3, 4 (L2) | 78.03 | 74.5 | 87.7 | 74.5 | 73.30, 72.74 | Figure, drawn square, so one height; top edge slants 85 to 93 px |
| 5, 6 (L3) | 78.38 | 72.7 | 85.5 | 72.7 | 72.06, 71.11 | Figure; sets the scale bound |
| 7, 8 (L4) | 45.97 | 45.97 | 52.25 | 44.4 | 43.64, 42.12 | Kept: 3.5 % above the reading, inside noise, no light either way |
| 9, 10, 11 (L5, L6) | 29.7 | 29.7 | 31.75 | 27.0 | 23.00, 22.51, 21.93 | Kept for corner light: square block, about 10 % above the reading |

STO is untouched. No `rimCutDepthMm`, `rimExtensionSd` or `gapSagFrac` was needed: the figure draws no land.

Why the changes stand: at the proven axial scale L1 to L3 depart from the stored rims by 15 to 17 %, past the 10 % bar, and the F/4 ray stops them, so the ray-limited reading is used. The drawn step order L1 > L2 > L3, by 2.8 and 2.2 pixels, now holds in the model; before, L2 sat 0.35 mm below L3 and L1 stood 4.5 mm above L2. L1 and L3 had near-knife rims, 3.93 and 2.80 mm thick, where the figure draws blunt rims about 7.6 mm thick at the axial scale; they are now 6.24 and 5.24 mm. L2's edge goes from 14.86 to 14.07 mm against about 19 mm drawn, which follows from its overdrawn rear curve and is not a reason to raise it.

Light, from the app's full-pupil curve at wide open: against the package rims the corner at 4.2° falls from 88.4 % to 86.7 %, 3.5° from 94.7 % to 94.1 %, and 2.8° and inward are unchanged. The worst loss is 1.7 points, inside the 3-point allowance. Restoring any one element wins back at most 0.3 points, because the front rims share one side of the pupil. Taking the rear pair to its drawn 27.0 mm would cost a further 8.8 points, leaving 77.9 % at the corner, so it stays at 29.7 mm and its 29 % side vignetting stays too.

Clearances after the change: no `CLIPS-AXIAL` or `BLOCKS-CHIEF`, the validator passes, the image-circle check prints no rows, the corner chief ray reaches 44.80 mm at 4.23° with the field 100 % covered, and the f-number check is within 3 %. Engine half-field 8.87°, F/4.00, EFL 599.97 mm and stop radius 54.54 mm are all unchanged, and the rear pair still sets the half-field. On-axis spherical aberration is −0.04 mm at full pupil, so no rim is covering a misprint. The render at infinity shows the drawn taper; focus 1 is the same section, because the model is static.

Open: the vertical scale is bounded by the F/4 ray, not measured. A maker section could raise the three front rims together; the old values stood 5 to 8 % higher. The rear pair remains above its reading on light alone.

Open: the exact F/4 ray crosses the stop plane at 57.75 mm against the 54.54 mm paraxial stop radius, 3.2 mm outside the drawn blade. That comes from the sag of the fast front faces, the engine sizes the stop paraxially, and the f-number check still passes, so nothing here depends on it.
