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

## 2026-11-02 — Second review: diagram, labels and movement

Compared: the local page at infinity and at `focus=1`, the movement overlay and inspectors for all six elements, against Fig. 1 at native pixels, the patent text, Tables 1 to 3, Figs. 2 and 3, and Pentax's lens table. No maker section was in hand. The Asahi catalogue among the supplied scans has no 6×7 section and is not the Pacific Rim item, so that `Open:` line stays. Table 1 was checked by hand against the file: all 11 radii and 10 spacings equal the printed values × 6, and the six glass pairs are as printed.

Rims were re-read from top to bottom stroke centres, on both sides of the axis. The readings agree with the first pass within 0.5 pixel, which is under the ±1 pixel error. No rim changed. There are no lands.

| Surfaces | Fig. 1 height (px) | At 0.85 mm/px | Baseline | Final | Verdict | Points a restore wins |
| --- | --- | --- | --- | --- | --- | --- |
| 1, 2 (L1) | 91.0 | 77.4 | 82.5 | 76.9 | Keep: slight | 0.0 |
| 3, 4 (L2) | 87.5, slanting 84.5 to 89.5 | 74.4 | 78.03 | 74.5 | Keep: slight | 0.3 |
| 5, 6 (L3) | 85.0 | 72.3 | 78.38 | 72.7 | Keep: slight | 0.0 |
| 7, 8 (L4) | 52.25 | 44.4 | 45.97 | 45.97 | Not a cut; 3.5 % above the reading, inside noise | n/a |
| 9, 10, 11 (L5, L6) | 32.0 | 27.2 | 29.7 | 29.7 | Not a cut; 9 % above the reading, held by light | n/a |

Final worst loss from the rim-cost tool: 1.7 points at 4.2°. The corner at 4.2° is 88.4 % on baseline rims and 86.7 % on the final ones, and 3.5° is 94.7 % and 94.1 %. A separate exact skew-ray trace, typed from Table 1 with no repo code, gives 89.0 % and 87.7 % at 4.2°, a loss of 1.3 points, so the budget holds on either count. That trace also reproduces every F/4 ray height to 0.01 mm (75.00, 74.17, 73.30, 72.74, 72.07, 71.12, 43.65, 42.13, 23.00, 22.51, 21.93).

Test of the vertical-scale argument. The first pass's lower bound stands, and it is stronger than it was stated, because the F/4 ray height at each element does not depend on the inferred stop plane. At these readings the rims run 1.213, 1.194, 1.180 and 1.197 pixels per mm of ray at L1 to L4, and 1.39 at the rear pair. L3 is tightest and sets 0.848 mm per pixel, so 0.85 clears it. The 12 % stretch is against the whole-lens axial fit; L1 to L3 alone are drawn at 0.79 mm per pixel, which makes it 7 %.

Two new checks bound the scale from above. L1's drawn rim is 8 to 11 pixels thick between stroke centres, or 6.1 to 8.7 mm on the axial scale. With the true radii that thickness occurs at a rim height of 70 to 77.3 mm: 76.9 mm gives 6.24 mm and 82.5 mm gives 3.93 mm, well under the drawn thinnest. This assumes the rim thickness is drawn to the proven axial scale, which is a judgement, though r1 is among the figure's truer curves. L3's drawn rim, 10 to 11 pixels, points below the F/4 ray altogether, so it too argues for the floor and not above it. L2's drawn rim argues upward, but r3 and r4 are visibly overdrawn. The barrel agrees: Pentax's 170 mm diameter over a 150 mm entrance pupil, a ratio of 1.13, is the leanest of its long lenses (800 mm f/4 1.18, 300 mm f/4 1.24, 400 mm f/4 1.33). The 76.9 mm rim leaves 8.1 mm a side for cell, tube and hood; 82.5 mm leaves 2.5 mm.

So L1 lies between 75.0 and about 77.3 mm, and the second review cannot improve on 76.9, 74.5 and 72.7 mm. One scale of 0.91 mm per pixel would fit the rear pair within 3 %, but it brings back the thin L1 rim and the barrel problem, so no single scale fits both ends. The rear pair's excess is not worth a new cut: the budget allows 29.3 mm at most (85.6 % at the corner; 29.2 mm gives 85.2 %, past 3 points), a 0.4 mm move under the reading error. L4 at its 44.4 mm reading would cost nothing, but 1.6 mm is inside the same noise and the playbook says not to repaint it.

Live silhouette against Fig. 1: step order L1 > L2 > L3 > L4 > rear pair matches; L2, L4 and the rear pair are square as drawn; L1 and L3 end in short blunt rims as drawn. Remaining differences are the figure's: the section is 12 % taller for its length, because the F/4 ray forces it; L2's rim is 14.07 mm against about 20 mm drawn; L3's front face reaches 7 to 9 mm further back at the rim than the drawn r5, which is too shallow.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| L5, L6 `cemented` | D1 | C1 | The inspector read DOUBLET D1 beside a C1 bracket, and the patent's d1 is a thickness |
| `focus.description` | No statement on the focusing group | Adds that the patent names no focusing group | Patent text and figures |
| Header comment, analysis | No note on numbering | Records the patent's numbering, its l and L, and that it names no group | Patent cols. 2 and 3 |

Checked and found correct: `type` for all six against the signs of R; `focalLengthMm` against the paraxial trace; `role` text against cols. 2 and 3; F123 = 58.82 and F1234 = 45.45. The patent calls its elements lenses 1 to 6, and the diagram's numerals are those numbers. L1 to L6 is the file's short form, since lowercase l is a spacing and capital L the whole length. The patent names no front or rear group, so no `groups` entry is right; its conditions F123 and F1234 are resultants, not groups. The bracket C1 covers surfaces 9 to 11, and the one cemented pair makes 5 groups and 6 elements, which Pentax's table prints as 5-6. No `A` label, no `apd` tag: the patent has no asphere and names no special glass. The abstract also misprints condition (3) as f/19 for f/1.9.

Stop: Fig. 1 draws no iris, and the midpoint of l3 remains an inference. An independent Seidel sum reproduces Table 2 exactly (−0.313, 0.122, 0.480, −0.453, −2.894) with the pupil at r1, as the earlier section found. The plots do not fix it either. Distortion at 4.1° stays between +0.76 % and +0.84 % for any plane from r1 to r9, and Fig. 2b's curve ends at +0.075 on an axis labelled ±0.1, the same sign and shape but a factor of 10 if that axis is per cent. Tangential field at 4.1° moves from −0.23 mm at r1 to −0.18 mm at the model's plane and +0.10 mm behind L4 (f = 100), but Fig. 2c is too small and too loosely drawn to separate those. Sagittal is near zero in both through mid-field. Fig. 2a shows the same reversed curve as the model, crossing zero near full aperture, though it peaks at +0.15 at 0.7 of the aperture where the model and Table 3 give +0.09 at 0.8. The STO `sd` is untouched.

Movement: no zoom and no modeled focus, so there are no gap tables, the movement overlay reports none, and `focus=1` draws the same section with the far end labelled "Not modeled". The patent names no group and no direction. Its only close-range statement is that Fig. 3, for an object "spaced 7f from the lens system", worsens very little, with no spacings. Pentax's 12.0 m and rear focusing knobs are as cited.

Colour: there is nothing to compare with. Figs. 2 and 3 plot only spherical aberration, sine condition, distortion and astigmatism, and the text never mentions colour. The model gives C−d +0.818, F−d −0.469 and g−d +0.546 mm. Glass sensitivity is high: L2 on FD140 (νd 26.61) would give g−d +0.389 mm, so S-TIH14 at 26.52 is the right row for the printed 26.5. L4 on Ohara FTM8 moves g−d by 13 µm. L5 as `Unmatched` on its printed νd, instead of FF5's 35.45, moves C−d by 5 µm, F−d by 26 µm and g−d by 73 µm, most of the last from the normal-line PgF that label takes. Period check: S-TIH14 is a modern lead-free row and only a coordinate equivalent, with the older FD140 close in PgF (0.6136 and 0.6123); Sumita's LLF8 is a discontinued legacy row and equals the printed pair.

Glass: Table 1 and the claim's table give only nd and νd for L3, with no name, extra line or partial dispersion. L3 and L4 alone print νd to two decimals, which suggests a different source from the other four. L3 has no row in the Hoya, Ohara or Sumita catalog files; K7 and NSL7 are the nearest, at Δnd −0.0016 and Δνd +0.7. Its model PgF of 0.5433 is the normal-line estimate.

On the page after the edits: bracket and inspector both read C1, and the focus note shows the new text. Half-field 8.87°, F/4.00, EFL 599.97 mm and stop radius 54.54 mm are unchanged. The validator passes, the image-circle and field-coverage checks are clean, and there is no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. The first pass's `Open:` lines on the vertical scale, the maker drawing and the stop-plane ray all stay open.
