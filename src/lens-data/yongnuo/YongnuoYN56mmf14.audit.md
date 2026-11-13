# CN220171327U literal model audit

Printed pp5–9 were inspected as pixels, including every prescription value, focus table, source pupil radius and field limit. Table 1 is transcribed without rescaling. S10 maps to STO, source S11 does not exist, and S22–S23 map to rearPlates rather than drawn lens elements. Source nd/vd values remain literal; named-glass assignments are deliberately absent (superseded 2026-11-09: catalog labels added where a row matches exactly; nd/νd unchanged).

Semi-diameters are inferred from relative Fig.1 heights using the approximately 95 mm physical track as an axial scale, rounded to conservative half-millimetre/integer dimensions. Fig.1 is a schematic, not metrology. The front pair uses 20 mm, L3 19 mm, L4/L5 16 mm, L6 12.5 mm, L7/L8 13 mm, L9 12.5 mm and L10 14 mm. These are assumptions validated for geometric viability and source-pupil transmission, not source-certified apertures. No override of default 90% gap-sag allowance; no rim cuts, extensions or disabled checks.

Validation:
- buildLens source/schema/edge-thickness/rim/gap checks pass.
- All 20 drawn-source rows match the literal radius/thickness/index table; two moving gaps match all three published stations. Plate remains 2 mm, nd 1.517, vd 64.2, physical image gap 1 mm.
- All three states have a constant image station 94.998 mm and zero renderer material trim.
- Axial aperture audit: traced f/1.494247716 versus derived nominal f/1.494247718; limiter STO, no rim clipping.
- Chief ray clears the full printed 12.76° half field. Generic APS-C corner is deliberately outside the declared source field (source-field image height 13.652836 mm versus generic corner 14.175 mm, 96.316%); the unconstrained corner chief also clears the modeled apertures.
- Source-field stop-sampled throughput has zero failed or unaimed rays at INF/X20/MOD and f/1.494 or f/4. Wide-open edge stop sampling is heavily clipped; at f/4 all sampled bundles transmit. Throughput is geometric sample transmission, not radiometric transmission or measured shading.
- Reference geometric MTF at all 18 combinations of state/aperture/field is available. Two 64-grid edge cases required 128-grid refinement; both converged unchanged. Infinity f/4 reference diffraction MTF converged at three fields. C/d/F MTF unavailable because low-dispersion glass lacks partial-dispersion data. Do not bypass that guard.
- Literal paraxial plane offsets are +0.032832/+0.096943/+0.169641 mm for INF/X20/MOD. No plane relocation or best-focus substitution. Large finite-focus loss remains a qualification.
- Normalized signed-radii and ordered-index duplicate screen covers 1,095 baseline entries, 24 with matching element/surface topology; no matches. It is not a proof against differently represented equivalent designs.

## 2026-11-09 — Deployment validation

Independent check of CN 220171327 U from the embedded table images: 20 rows, stop at S10, the S22–S23 plate and the
variable gaps at all three states agree; all surfaces spherical. Engine EFL 58.096 (printed 58.066), close state
0.600 m at 0.11×, matching Yongnuo's 0.6 m / 0.11×. Attribution strong: Yongnuo's Optical Structure panel matches the
figure with HRI on L3/L7/L10, LD on L4 and ED on L6; 10/9, APS-C.

Deployment changes: `source.assignees` → "Shenzhen Yongnuo Electric Appliance Co., Ltd." (front page
深圳市永诺电器有限公司; the package had a different company name), and `key` `yongnuo-yn56f14-cn220171327u` →
`yongnuo-yn-56mm-f14s-da-dsm-wl-pro` so the URL carries the product, not the patent number.
Open: `lensMounts` lists only Sony E though Yongnuo also sells Z and RF versions; package wording remains. (Closed
2026-11-09: the entry names the Sony E version and keeps `sony-fe`, with the Z and RF versions described in the
analysis; wording replaced in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment was rewritten in plain terms with every fact kept (patent, sole example, no scaling,
missing row 11, rear plate, stop from the Fig. 2 pupil, image gap, inferred semi-diameters). `subtitle` "CN 220171327
U — associated patent model, not factory-certified" → "CN 220171327 U, Sole Example — strong production
correlation". `specs` → 10 ELEMENTS / 9 GROUPS, DESIGN f = 58.066 mm, DESIGN F/1.49, ALL SPHERICAL, INNER FOCUS;
0.11× MAX. `catalog.focalLengthMm.design` 58.0958 (computed) → 58.066 (Table 2). Added `catalog.closeFocusM.marketing`
0.6, and `aperture.maxFNumber` 16 and `blades` 9, from Yongnuo's specification sheet. `fNumber.design` and
`aperture.nominalFNumber` stay 1.4942 (the Fig. 2 pupil). The focus description and conjugate source notes were
reworded; the printed states are unchanged. The errata note was reworded with the same content. Every element gained
a `role`.

Glass labels: the patent prints nd to three decimals. A catalog row was accepted only within |Δnd| ≤ 0.0001 and
|Δνd| ≤ 0.15, and each label was confirmed to resolve to that row. L3 and L10 → H-ZLaF68N (CDGM, 1.88300/39.22). L4 →
K-GFK70 (Sumita, 1.56907/71.30). L7 → H-ZLaF68C (CDGM, 1.88300/40.85; TAFD30 and S-LAH58 also pass, and CDGM was
chosen to match L3/L10). L9 → E-F2 (Hoya, 1.62004/36.30). L1/L5 (nearest S-TIH53 class, Δnd 0.00034), L2 (F5 class,
Δnd 0.00042), L6 (nearest S-FPL55 1.43875/94.66, Δnd 0.00075) and L8 (S-LAH55V class 1.83481/42.73, Δnd 0.00019)
became `Unmatched (patent nd …, νd …)`. `apd: "inferred"` was set on L4 (LD) and L6 (ED), as marked on Yongnuo's
Optical Structure drawing.

Analysis: removed the process wording ("qualified patent-associated model", "Practical Qualification", gap-sag and
score remarks). Added the product versions and dates, the numbered attribution evidence with its caveats, the
maker-drawing comparison, group focal lengths, a glass table, a focus table, the patent's conditional expressions
with the example's computed values, model limits (inferred rims, wide-open edge vignetting, comparison with Figs. 2–3)
and sources.

Engine before and after (identical): EFL 58.0958, FOPEN 1.4942, half-field 12.76°, stop radius 11.4956, BFD 1.0328
at infinity; close-state EFLs 56.4281 / 54.7129. audit:surface OK; audit:aperture shows no rim limit.

Open: L8 (S-LAH55V class) and L1/L5 (S-TIH53 class) miss the exact window only because nd is printed to three
decimals; a looser rule for three-decimal patents would label them. `rearPlates[0].source` still reads "literal
physical plate and image spacing" (rear plates were outside this pass). (Closed 2026-11-09: the glass coverage pass
labelled L1/L5, L2 and L8 as nearest rows, and the plate source now cites Table 1 S22–S23.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: CN 220171327 U, Fig. 1 (page 8), an embedded 909 × 406 px raster at 150 ppi, measured at 300 dpi (two
render px per native px). Fig. 1 draws the infinity state to scale. Along the axis, the vertex crossings give
16.44 px/mm from S1 to the image plane (94.998 mm), and the same within 0.2% over S1–S5, S1–S8, S1–S12, S1–S16 and
S1–S21; the S9–S12 span reads 19.65 mm against 19.688 mm at infinity. Across the axis, circle fits to the drawn arcs
of S1, S5, S9, S12, S13, S18 and S19 give 16.2–16.9 px/mm (mean 16.54), and the stop ticks end at 188.5 px, 11.47 mm
at 16.44 px/mm against the 11.50 mm stop. Heights below use 16.44 px/mm and the centre of the 4 px outline, averaged
over the top and bottom rims.

| Element | Stored sd | Fig. 1 | Ratio | Decision |
| --- | --- | --- | --- | --- |
| L1 (S1/S2) | 20 / 20 | 19.6 | 0.98 | kept |
| L2 (S3/S4) | 20 / 20 | 19.3 | 0.96 | kept |
| L3 (S5/S6) | 19 / 19 | 19.0 | 1.00 | kept |
| L4 (S7/S8) | 16 / 16 | 15.9 | 0.99 | kept; the wide-open axial beam reaches 15.86 at S7 |
| L5 (S8/S9) | 16 / 16 | rim 14.9, cap end 11.7 | 0.93 | S9 16 → 14.9 with `rimCutDepthMm` 4.47; S8 shared with L4 |
| L6 (S12/S13) | 12.5 / 12.5 | 12.2 | 0.97 | kept |
| L7 (S14/S15) | 13 / 13 | 12.4 | 0.96 | kept |
| L8 (S16/S17) | 13 / 13 | 12.6 | 0.97 | kept |
| L9 (S18/S19) | 12.5 / 12.5 | 12.2 | 0.97 | kept |
| L10 (S20/S21) | 14 / 14 | 13.2 | 0.95 | kept |

L5 is the one element whose drawn shape differs: Fig. 1 draws it shorter than L4, with a flat top at 14.9 mm and a
vertical land at 4.47 mm behind the S9 vertex (73.5 px), where the concave S9 curve ends at 192 px, q = 0.78 ± 0.014
of the rim (one native pixel). The stored S9 cap ran to 16 mm, where its sag (9.6 mm) reached 2.6 mm past the stop
plane. S9 now has sd 14.9 and an inferred cut 4.47 mm deep (cut radius 11.92 mm). The figure's q × sd is 11.7 mm, but
the wide-open beams reach 11.86 mm at S9 near the axis, so the cut was moved out to clear them by 0.05 mm;
its depth then equals the drawn land position. The land is 2.98 mm long and sits 2.53 mm ahead of the stop plane.
Yongnuo's Optical Structure drawing also ends L5's rear curve in a land short of the rim.

The other nine elements agree with the figure within 6% and keep their values. Order is right everywhere: L1 ≥ L2 >
L3 > L4 > L5, and L6 < L7 ≤ L8 > L9 < L10. L10 reads 13.2 mm against 14, which is inside the noise band; a 13.2 mm rim
would cost no light, while L7 at the figure's 12.4 mm would cost 3.8 corner points and L8 at 12.6 mm 1.3 points.
Yongnuo's drawing agrees on element order and grouping. It is not to scale and draws L5's mounting step taller than
L4.

Clearance and light: audit:surface OK; the rim-cut beam check clears S9 at all 22 focus states with no ray inside the
margin; audit:aperture shows no rim limit; audit:image-circle has no undersized surface; field coverage stays at 96%
of the APS-C corner, limited by the declared 25.52° field. Engine EFL 58.0958, f/1.4942, half-field 12.76° and stop
radius 11.4956 are unchanged. Wide-open transmission at infinity (0 / 2.1 / 4.3 / 6.4 / 8.5 / 10.6 / 12.8°) is
100 / 96.9 / 92.1 / 81.8 / 68.8 / 54.2 / 38.8% before and after. The real-ray clearance rows are identical at
infinity, X20 and MOD, and the cut clears every beam at all three states, so close-focus transmission is unchanged.
Page renders at the three printed focus states show L5's land ahead of the stop, with no contact with L6 at MOD.

## 2026-11-09 — Glass coverage pass

The patent prints nd to three decimals, so the five elements the cleanup pass left `Unmatched` (L1, L5 1.847 / 23.79;
L2 1.603 / 38.00; L6 1.438 / 94.58; L8 1.835 / 42.73) and the GL plate (1.517 / 64.2) match catalog rows to the printed
precision: OHARA S-TIH53, HOYA E-F5, OHARA S-FPL55, OHARA S-LAH55V and CDGM H-K9L (Δnd ≤ 0.00075, Δνd ≤ 0.08). Their
labels name each as the nearest catalog row to the printed pair; every element and the plate now trace on catalog
dispersion curves. L6, the element Yongnuo marks ED, takes S-FPL55 (νd 94.66) rather than S-FPL53 (94.95) because it
is the closer row.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page at infinity, X20 and MOD, the focus-movement overlay and the inspector (G4, G5, G6) with
Fig. 1 (page 8, native 909 × 406 px at 150 ppi, read at 300 dpi), Table 2, Figs. 2–3 and the claim and ¶0031–¶0033
text. Scale, proved again: vertex crossings give 16.42 px/mm along the axis (S1 to image 1560.5 px for 94.998 mm;
S1–S12, S1–S21 and S5–S17 16.41–16.42); arc fits of S5, S9, S12, S13, S18 and S19 give 16.20–16.74 px/mm across
(mean 16.54); the stop ticks end at 188.5 px, 11.48 mm against the 11.50 mm stop, and sit 38.40 mm behind S1
(STO 38.47). Overlay: model rims in red over the figure, baseline G5 in blue.

Rims re-measured at the outline centre, top and bottom averaged: G1 19.6, G2 19.25, G3 19.0, G4 15.9, G5 14.9 (cap
end 11.6 mm, land 4.38 mm behind the S9 vertex), G6 12.15, G7 12.4, G8 12.6, G9 12.2, G10 13.2 mm. Every stored rim
is within 6% (G10 14 is the largest gap) and no step is reversed; G1 = G2 and G7 = G8 in the model where the figure
has 0.35 and 0.2 mm steps, inside the reading error. No rim changed. The figure draws G5 square at 14.9 mm with G4
1 mm taller at the cemented face; with the shared S8 at 16 the page shows G5's top edge falling from 16 to the land.
S8 at 14.9 would move that bevel onto G4 (1.1 mm over its 1.7 mm edge), so S8 stays at 16.

| Item | Baseline | Final | Fig. 1 | Light | Verdict |
| --- | --- | --- | --- | --- | --- |
| S9 `sd` (cut) | 16 | 14.9 | 14.9 | 0.0 points | keep (slight) |
| S9 `rimCutDepthMm` (land) | none | 4.47, cut radius 11.92 | land 4.38, cap end 11.6 | 0.0 points | keep (drawn; slight) |

Final `rimcost.mjs` worst loss 0.0 points (restoring S9 to 16 wins 0.0; the validator accepts it). The app curve at
INF, X20 and MOD is identical for the baseline rims, the file and the file without its cut (38.8, 45.2 and 51.7% at
the 12.8° edge). A finite-object lattice trace from the Table 2 object points gives the same corner before and
after: X20 41.0% at 13.65 mm and 38.1% at the 14.18 mm APS-C corner, MOD 50.0% and 47.5%. Engine EFL 58.0958,
f/1.4942, half-field 12.76° and stop radius 11.4956 are unchanged.

Labels: elements L1–L10 → G1–G10, the patent's names (claim 1, ¶0031–¶0033); the doublet bracket L4/L5 → G4/G5;
G2's role, the focus description, the header and the analysis prose remapped by element id. Groups GR1–GR3 and the
diagram's numerals 1–10 already match the patent and Fig. 1's reference numerals; the stop sits between G5 and G6.
The inspector showed "FL = —"; every element now carries `focalLengthMm` (thick lens at nd): 85.8, −64, 40.5,
38.5, −18.2, −202.2, 37.8, 54.7, −23.1, 43.5 mm. Types agree with the signs of R; no aspheres. The patent names no
special glass, so G4 (LD) and G6 (ED) stay `inferred` from Yongnuo's drawing; G6's `apdNote` now names S-FPL55 as
the nearest row. The analysis glass paragraph no longer says G6 lacks partial-dispersion data, and the plate row
names H-K9L.

Movement: Table 2 D10 12.688 → 9.460 → 5.903 and D15 2.500 → 5.728 → 9.285 (sum 15.188) are in the file in that
order; keyframe 0 is infinity and the last is MOD. GR2 alone moves 6.785 mm toward the object, as claim 1 and the
Fig. 1 arrow state; GR1, the stop and GR3 stay fixed (the overlay shows 6.78 mm on GR2 only). The far label reads
61 cm beside "marketed 60 cm": the MOD state's paraxial focus lies 0.17 mm behind the printed plane, so it is in
paraxial focus at about 0.61 m.

Colour against Fig. 2 (C, d, g): the curve that starts at zero is d (the model's d curve follows it within 0.003 mm
to 0.7 of the pupil and 0.007 mm at the rim); Fig. 2's C and d labels sit beside each other's curves. C: +41.2 µm
paraxial against +42.5, within 0.002 mm to 0.8 of the pupil. g: +20.5 µm against +15.4, and 5–7 µm high to 0.7
of the pupil, beyond the 1 µm reading error. Label trials: G5 → FDS90 (HOYA) gives 14.8 / 26.7 / 59.9 / 102.3 µm
at 0 / 0.5 / 0.7 / 0.9 against the plot's 15.4 / 26.5 / 59.3 / 100.6; G2 → F5 (SCHOTT) 15.6 / 27.7 / 61.1 / 103.9;
G1 and G5 both → FDS90 17.7 at 0; G6 → S-FPL53 or FCD100 moves g by 0.5 µm or less.

Fig. 3 fits the model on a field axis ending near 13.2° (2ω ≈ 26.4°, the APS-C corner and Yongnuo's angle of view):
sagittal within 0.002 mm, tangential within 0.008 mm, distortion within 0.06 points (+4.26% against about +4.2% at
the edge). On the header's 12.76° axis the model's distortion falls 10–15% short of the plot at every height.

The glass coverage pass above gives Δnd ≤ 0.00042 for every relabel; G6's S-FPL55 is 0.00075 off (1.43875 does
not round to 1.438). It still resolves inside the resolver window.

Open: the g line sits 5–7 µm behind Fig. 2; one dense-flint row change (G5 → FDS90, or G2 → F5) closes it, but G1
shares G5's printed pair. Left to the coordinator.

Open: `projection.fullFieldDeg` is the header's 25.52°, while Fig. 3 is plotted to about 26.4°, which would reach
the APS-C corner (96% now). Outside this review's edits.

Coordinator follow-up, same day: `projection.fullFieldDeg` 25.52 → 26.4, so the page traces to the APS-C corner
(half-field 13.2°), the field Fig. 3's axis and Yongnuo's angle of view use; the field-value `Open:` line above is
closed by this. The glass coverage pass's "Δnd ≤ 0.00042" is corrected in place to 0.00075 (S-FPL55 on G6).
Engine EFL and f-number unchanged; `audit:surface` OK; field coverage reaches the corner.
