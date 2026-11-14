# Audit Log — PENTAX DA 14mm f/2.8 ED [IF]

## 2026-11-03 — Source recovery and qualified native reconstruction

All34supplied text parts, decoded segments and three complete ZIPs were consumer-verified. CRC, exact113members and all110payload hashes passed. Source figures/tables and manufacturer sections were viewed locally; exact filenames and hashes are in source-review receipts. Current main80a828cb map matches the independently screened complete1056lens+14TC snapshot and36delivered bodies. No same-source local authored model existed at construction.

Whole selected sourceR/d/n/V and printed image gap remain literal. The source provides infinity and a shortest-distance geometry: d8 changes4.43→2.16mm; BF36.98→39.25mm. G1 is fixed, while G2/G3 and the stop move together2.27mm objectward, maintaining image coordinate111.91mm. The near table gives f14.80, m−0.137 and F3.0; Figs12A/B print F3.7. That aperture contradiction is unresolved. No fixed near iris, finite aperture/performance certification, source object distance, retail0.17m/0.19× substitution or continuous cam is invented. Literal near geometry and pure first-order diagnostics are retained separately.

Inferred caps/stop and valid/rejected sensitivity branches were frozen before native geometry, pupil or MTF. Defaultgeometry checks remain; no gap-sag override, engine modification, image-plane tuning, contrast-driven geometry selection or factory-identity claim. Source residuals, the initial native geometry/harness failures and metadata descendants are retained additively.

Normal source-angle diffraction and raw16cellpupils are retained in full. All9source-angle fields converge through sampled50lp/mm with zero unknown flux. Clipping persists.234raw failures across the trio have separate exactsphere-branch witnesses certifying misses of inferred finite caps; no factory-rim inference.

The supported infinity-only catalog state is used (superseded 2026-11-04: the printed near state is now modelled; see below). Available sourcefinite geometry is saved, while its unresolved datum/aperture prevents certification. Source-native dimensions/frequencies are distinguished from retail product figures, nativeformat corners and defaultUIbestfocus. Finalcompiled/integration/rebuild/custody receipts are separate and must be read at their actual scope.

## 2026-11-04 — Wording, glass and metadata pass

Source re-read: Table 4 (23 surfaces, no aspheres) matches the data row for row; the stop is 2.0 mm behind S17 (printed d17 6.35 = 2.0 + 4.35). Table 4 prints a near state, D8 4.43 → 2.16 and fB 36.98 → 39.25, with f 14.38 → 14.80 and F 2.9 → 3.0; the patent prints m = −0.137 but no object distance. Figs. 12A–B are labelled F3.7. Ricoh's construction diagram matches Fig. 10 element by element (12/11, ED at L11, high-index low-dispersion glass at L2, G1 fixed and G2 + G3 moving); the maker lists 0.17 m / 0.19× minimum focus.

Focus: surface 8 and surface 23 now take their thickness from `gaps` (D8 [4.43, 2.16], BF [36.98, 39.25]); `focus.closeFocusM` 1e15 → 0.2 and `focus.published` [1]. Traced paraxially, the near state focuses at 200.13 mm object to image (88.22 mm ahead of S1) with EFL 14.797 mm and m −0.1372, against the printed 14.80 and −0.137. No `focus.conjugates` entry was added, because the object distance is derived from the printed magnification rather than printed.

Infinity engine values are unchanged: EFL 14.3849 mm, F/2.900, half field 45.1°, stop radius 5.5149 mm, paraxial BFD 36.9777 mm against the authored 36.98 mm, total track 111.91 mm. The close keyframe changed from a copy of infinity to the printed near state above.

Fields changed: header comment rewritten in plain terms (same facts: scale none, printed values, image plane, focus, stop, the S1/S4/S6 rim reasoning); `subtitle` "US 7,116,499 B2 Embodiment 4 — probable-family infinity reconstruction" → "US 7,116,499 B2, Embodiment 4 — probable production correlation"; `specs` four process strings → "12 ELEMENTS / 11 GROUPS", "DESIGN f = 14.38 mm", "DESIGN F/2.9", "ALL SPHERICAL"; `catalog.closeFocusM.marketing` 0.17 added; `focus.description` rewritten with the PUBLISHED keyword, the patent's near state against the marketed 0.17 m, and the F/3.0 versus F3.7 caveat; all 12 element roles rewritten; L11 tagged `apd: "inferred"` with an `apdNote` (ED position on the maker's diagram; nd 1.497 / νd 81.6 is consistent with a fluorophosphate ED crown). L2 is high-index, low-dispersion and stays untagged; its role says so.

Glass relabels from `Unmatched (...)` (Δ = catalog − printed; nd printed to 4 or 5 decimals and every row rounds to it): L1 S-LAL14 (OHARA) Δnd −0.000003, Δνd +0.03; L2 S-LAL18 (OHARA) −0.000003, −0.02; L3 S-LAH51 (OHARA) −0.000004, +0.003; L4 FDS90 (HOYA) 0.000000, −0.02; L5, L9 and L12 S-FSL5 (OHARA) 0.000000, +0.04; L6 S-LAL9 (OHARA) +0.000002, +0.02; L7 S-LAH65V (OHARA) −0.000001, −0.02; L8 S-TIH6 (OHARA) +0.000001, +0.03; L10 S-TIH11 (OHARA) +0.000003, −0.02; L11 FCD1 (HOYA) 0.000000, +0.01. Where Hikari or Sumita rows matched equally at the printed precision (L1, L4, L6, L7, L8), the closest OHARA or HOYA row was used; for L11, S-FPL51 (νd 81.55) rounds to 81.5 and was not used. The patent prints no partial dispersion, so there is no PgF comparison. Every label resolves through `resolveCompatibleGlass`.

Analysis: the MTF and pupil failed-ray tables and their process paragraphs were removed; the identification, element, glass, focus and stop sections were rewritten as plain prose; the glass table and the infinity/near spacing table were added; the private-package source line was replaced by the patent and Ricoh diagram citations. The vignetting figures it now quotes come from the engine curve wide open at infinity (100 % to 15°, 97.6 % at 21°, 96.0 % at 24°, 39.7 % at 45°).

Checks after the edits: surface audit OK; image circle 0 undersized; field coverage 100 % (45.0° → 14.17 of 14.18 mm); aperture within 3 % of F/2.9; clear-aperture check at Y = 14.18 mm shows no axial clipping or chief-ray block, with the corner beam vignetted on S18–S23 as before.

Open: `aperture.blades` was not added (no maker figure in hand). The `source.errata` note keeps its run-together wording ("Table4", "Figs12A/B"); that field was outside this pass and is not shown on the site. The near-state F/3.0 versus F3.7 difference remains unresolved.

## 2026-11-04 — Final diagram, rim and label review

Compared: the local page at infinity, at the close state (`focus=1`) and with the focus-movement overlay, against Fig. 10 (page 6, native 300 dpi raster) and Ricoh's construction diagram. Fig. 10 is the infinity state: its S1 and S23 vertex crossings sit at x = 664 and 1712 px, so 1048 px span 74.93 mm, 13.99 px/mm; S4 to S21 (916.6 px for 65.52 mm) gives the same scale, and D8 measures 62 px (4.43 mm). Ricoh's diagram is drawn to the same axial proportions: its S1 to S23 crossings span 287 px (3.83 px/mm), and S1 to S17 measures 209 px against 210.5 px predicted.

Heights read on both sides of the axis (mm):

| Element | File | Fig. 10 | Ricoh |
| ------- | ---: | ------: | ----: |
| L1 | 30 | 28.2 (395 px) | 29.5 |
| L2 front / cap end | 22.8 / 17.0 | 21.3 / 16.4 | 22.7 / 16.6 |
| L3 front / cap end | 17.0 / 13.95 | 16.4 / 13.6 | 18.5 / 14.5 |
| L4 front / rear | 13.95 / 14.7 | 13.9 / 13.9 | 15.7 / 15.7 |
| L5–L6 | 12 | 11.5 | 12.3 |
| L7 rim / cap end | 7.8 / 7.8 | 7.54 / 5.86 | 8.5 / 6.9 |
| L8, L9 | 6.3, 6.0 | 6.0, 5.65 | 8.5, 8.5 |
| L10, L11, L12 | 6.9, 8.1, 8.4 | 6.4, 7.55, 8.86 | 8.5, 8.5, 9.4 |

The file sits mostly 4–7 % above Fig. 10 and near Ricoh's heights, with the drawn height order kept. The visible differences on the page were the shapes of L2, L3, L4 and L7. Both drawings show L2 and L3 as square-edged blocks whose concave rear faces end in a flat land square to the axis, but the page joined each front rim to the lower rear rim with a slanted edge, which made both elements look pointed. L4 is drawn square, but the page showed a bevel from 13.95 to 14.7 mm. The deep rear face of L7 ends in a land in both drawings, but on the page its rim reached back over the front of L8. The doublet also had no bracket, and its elements carried a CD-series name.

| Field | Before | After | Evidence |
| ----- | ------ | ----- | -------- |
| S4 `rimExtensionSd` | none | 22.8 | Fig. 10 land stroke at x = 858–860 runs from 228/231 to 298/300 px, q = 0.769 ± 0.006; Ricoh q = 0.73. The S4 cap stays at 17.0 mm (gap rule and the 21.25 mm radius), and the land runs out to the S3 rim, so L2 is square-edged. |
| S6 `rimExtensionSd` | none | 17.0 | Land stroke at x = 938–940 from 188/191 to 228/231 px, q = 0.828 ± 0.008; Ricoh q ≈ 0.78. The cap stays at 13.95 mm; the land runs out to the S5 rim. |
| S8 `sd` | 14.7 | 13.95 | Fig. 10 draws L4 square at 194 px (13.9 mm) on both sides. Raising S7 to 14.7 mm instead was refused: with the S6 land, the S6/S7 sags would intrude 7.13 mm into the 7.9 mm gap, above the 7.110 mm allowed. |
| S13 `rimCutDepthMm` | none | 2.5 | Land stroke at x = 1266–1268 from 82 to 105/106 px, q = 0.777 ± 0.017 (Ricoh 0.815). A cut at q × sd (6.06 mm, depth 2.07 mm) was refused: the wide-open beams reach 6.510 mm at focus 0.65 and 41.36°. A depth of 2.5 mm puts the cut radius at 6.575 mm (q 0.84, land 1.23 mm long), the closest that clears them; the axial maximum at S13 is 4.03 mm. The land sits 2.5 mm behind the S13 vertex, ahead of the L8 vertex, as Fig. 10 draws it (2.2 mm). |
| L5, L6 `cemented` | "CD5" | "D1" | Corpus doublet naming. |
| `doublets` | none | D1, surfaces 9–11 | The L5–L6 cemented pair, the only cemented component in Fig. 10. |

Light, wide open, against the package baseline: the final file loses 0.0 points at every field from 0 to 45° at infinity (39.7 % at 45° before and after). Restoring each land or cut one at a time gains 0.0 points. The close state (47.2 % at 42.7°) and focus 0.65 (45.8 % at 43.4°) are also unchanged. Neither the extensions nor the S13 cut, which clears every traced beam, changes the traced aperture. Engine values are unchanged: EFL 14.3849 mm, F/2.900, half field 45.1°, stop radius 5.5149 mm, maximum semi-diameter 30 mm. Surface audit OK; image circle 0 undersized; field coverage 45.0° → 14.17 of 14.18 mm; aperture within 3 % of F/2.9; the clear-aperture trace at Y = 14.18 mm shows no axial clipping or chief-ray block. No policy field is set or needed; the defaults are a gap-sag fraction of 0.9 and a rim sine of 0.9.

Trials not adopted. Setting S1/S2 to the 28.2 mm of Fig. 10 would cost 1.36 points at 45°. Ricoh draws L1 at 29.5 mm, and the file's L1:L2 ratio (1.316) already matches both drawings (1.32 and 1.30). Lowering L1 alone would break that ratio, and moving L2 to 21.4 mm as well would cost 2.97 points in all. The 30 mm cap stays. L10 and L11 (6.9 and 8.1 mm, against 6.4 and 7.55 in Fig. 10) set the corner vignetting and follow the same 4–7 % pattern. L12 (8.4 against 8.86 mm) is 5 % low, so its step above L11 is smaller than drawn. All three are left as they are.

Found correct: elements L1–L12 are numbered sequentially, since the patent names none. G1, G2 and G3 correspond to the patent's groups 10, 20 and 30 and bracket surfaces 1–8, 9–13 and 14–23, as the Fig. 10 braces do. Every element `type` matches the signs of R (L1, L8 positive menisci convex to the object; L4, L9 convex to the image; L2, L3, L7 negative menisci convex to the object; L6 concave to the object; L5, L11, L12 biconvex; L10 biconcave). The roles are true; there is no aspheric marker; the stop is drawn 2.0 mm behind S17, between L9 and L10. Only L11 carries `apd` ("inferred", Ricoh's ED position); the patent designates no anomalous dispersion, and L2 (high-index, low-dispersion) stays untagged. All twelve glass labels resolve to the named catalog rows.

Movement: the patent says focusing moves groups 20 and 30 together while group 10 can stay stationary, and Table 4 prints D8 4.43 → 2.16 mm and fB 36.98 → 39.25 mm. On the page, index 0 is infinity and index 1 is the close state (slider "∞ … 20 cm", marketed 17 cm). The overlay shows G1 fixed about 100 mm ahead of the focus plane, and G2 and G3 moving 2.27 mm toward the object (open circle at infinity on the image side, filled at close focus). The image line is fixed: S1 to the image is 111.91 mm in both states, and the engine's last gap of 39.2477 mm carries the 0.0023 mm infinity best-focus offset. The close-state readouts are D8 2.16, BF 39.25 and EFL 14.80 mm. Probe gives EFL 14.3849 → 14.7970 mm and m −0.1372.

Open: the rims stay inferred. The near-state F-number difference is unchanged in the file. Every embodiment's close-focus plots carry a larger F-number than its table: F4.3 on Figs. 3A and 6A against 3.6 in Tables 1 and 2, F3.7 on Figs. 9A and 12A against 3.0 in Tables 3 and 4. That suggests a plotting convention rather than a misprint particular to Embodiment 4.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “m = 0.000—−0.137” → `"0.137"` | US 7,116,499 B2, Embodiment 4 (PDF p. 11) | 88.1 mm, first-surface | in focus 0.13736; at the declared distance 0.13736; −0.00 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
