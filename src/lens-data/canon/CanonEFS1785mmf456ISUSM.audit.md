# Audit Log — CANON EF-S 17-85mm f/4-5.6 IS USM

Patent: US 2006/0023317 A1, Numerical Embodiment 1, Figure 1

## 2026-08-25 — Patent-figure SD and glass-coverage audit

### Semi-diameters

| Element / surfaces |       Before |          After | Justification                                                                                                                                                                                                     |
| ------------------ | -----------: | -------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E5 / 8–9           | 8.0 / 8.5 mm | 11.8 / 12.5 mm | The 600 dpi Figure 1 optical rim measured about 12.5 mm; the earlier silhouette was roughly one-third too short after normalizing the whole-lens scale. Both surfaces were scaled together and rounded to 0.1 mm. |

- The visibly larger final G5b cemented-pair outline was retained at surfaces 28–30. Enlarging the pair to the apparent figure rim makes surfaces 28/29 cross and drives surface 29 past the valid rim-slope limit; the drawing includes a non-optical outer step at that location.
- All other figure/data differences were within normal patent-drawing noise or contaminated by group brackets, leader lines, and motion arrows.

### Glass classification

- Replaced free-text `nd/vd` descriptions with the patent-derived vendor-neutral six-digit coordinate classes for all 17 elements.
- Existing verified catalog curves resolve all 17 classes within the coordinate guard. No production supplier or melt is asserted, and no catalog tolerance was changed.

## 2026-08-25 — Screenshot and movement follow-up

- Rechecked Figure 1 at 600 dpi against the supplied site render. The current E5 correction remains source-faithful. The front rim's rectangular step is a mechanical blank rather than a larger optical aperture, and the movement arrows, group brackets, and G5b leader lines make the remaining automated overreads unsuitable for SD changes.
- Retained all current SDs. The image-circle floor and surface validator pass, and the earlier attempted G5b enlargement still fails valid edge/rim geometry.
- Confirmed wide-to-tele movement from the authored numerical gaps: L1, L3, L4, and L5 move objectward while L2 moves 1.086648 mm imageward. The constrained close-focus solution moves L2 objectward by 1.101222 mm at wide and 4.868005 mm at tele; this preserves the documented conflict with the patent prose instead of reversing the numerical solution.
- Confirmed the existing group labels, display name, IS assignment to L4a, and 17/17 strict glass coverage.

## 2026-10-30 — Scoped native-shape reopening and current-runtime qualification

Exact original: `patents/US20060023317A1.pdf`, SHA-256 `73b5ac4852a0b76a9375de72a89114907fc4e2e6d63f5b45051c6bc0c6380211`. Rendered cover confirms US 2006/0023317 A1, published 2006-02-02, Makoto Fujimoto / Canon Kabushiki Kaisha (canonical metadata Canon Inc.). Numerical Embodiment 1 is on PDF pages 16–17 / printed pages 4–5. Paragraph 0078 on page 16 explicitly defines the d-line index/Abbe coordinates and aspheric equation; page 17 continues the prescription through R30, five source zoom gaps and both asphere coefficient tables. Figure 1 is PDF page 2 / sheet 1; Figures 2A–2C are page 3 / sheet 2, printing Fno. 4.11 / 4.45 / 5.77 and Y = 13.65 mm. The rounded wide 4.0 in the numerical header remains qualified, not substituted for Figure 2's aperture target.

The existing complete shape/glass work keeps its actual 2026-08-25 date. Unchanged source R/d, both aspheres, all seventeen glass conclusions and unrelated cap constraints are reused. The current entry reopens the reproducible E4/E5 outline assignment error and omitted air shoulders, plus current iris/runtime/source qualifications. It is one reviewed entry, without another reused lens count. No previous inspection is redated as fresh work.

### Changed native evidence and shape disposition

The source embeds 2560 × 3300 one-bit pages at native 300 ppi. Earlier 600 dpi viewing was upsampling. The wide section is about 11.2 native px/mm against the modeled first-to-Gaussian-image track, with practical ±0.6 mm rim uncertainty from broad ink and modest anisotropy. Relative outline/cap anchors are more reliable than mechanical dimensions. Unit brackets, Q/F arrows, surface leaders, image-plane line and axis are excluded.

The clean L2 native crop resolves its four elements using the printed weak/strong curvatures. The first tall rectangle is E4 (R6/R7): weak R6 front, strong R7 rear with an outer vertical continuation. The following smaller biconcave outline is E5 (R8/R9). The 2026-08-25 height measurement was attached to the wrong element; its 11.8/12.5 cap enlargement is superseded here.

| Surface | Previous sd, mm | Adopted sd, mm | Reason                               |
| ------- | --------------: | -------------: | ------------------------------------ |
| S6      |            11.0 |           12.5 | Actual tall E4 front curved endpoint |
| S8      |            11.8 |            8.5 | Smaller E5 biconcave front endpoint  |
| S9      |            12.5 |            8.5 | Smaller E5 biconcave rear endpoint   |

These remain inferred drawing caps because no clear-aperture column is printed. Three resolved air-facing vertical strokes use `rimExtensionSd` while preserving clear aperture:

| Surface | Clear sd, mm | Outer sd, mm | Retained constraint                                                                       |
| ------- | -----------: | -----------: | ----------------------------------------------------------------------------------------- |
| S7      |         8.15 |         12.5 | Strong R7 cap stays within its geometry limit; outer height follows E4 front/native blank |
| S11     |         6.85 |          8.5 | R11/R12 near-contact clear caps retained; own-front cap/native outline anchors shoulder   |
| S12     |         6.85 |         7.75 | Same near-contact clear cap; own-rear cap/native outline anchors shoulder                 |

The strokes are connected element boundaries, not leaders, flanges or separate opaque members. No cemented-interface land, inferred cut or hybrid/resin layer is added. Other element caps and all five cemented interfaces retain the dated review constraints. The front plain blank does not establish a separate opaque flat-face land; contaminated G5b leaders do not authorize another clear aperture or rear land. Paragraph 0069's optional filter/weak-power unit is outside this numerical prescription and remains absent.

Rejected trial S11 = 8.5 / S12 = 7.75 clear caps gives 0.054664 mm shared sag, exceeding the unchanged permitted 0.045 mm intrusion in the source 0.050 mm air gap, at every source zoom station. Keep 6.85 optical caps and represent only the resolved outer strokes. All R/d, both aspheres, source zoom rows, stop authority and numerical close-focus cams are unchanged. No tolerance, source prescription or trajectory is tuned to fit a drawing or ray result.

### Glass reuse and direct source qualification

All 17 rounded source index/Abbe pairs were checked against the current original table. Paragraph 0078 explicitly supplies d-line reference; d/g aberration plots are contextual rather than the sole reference evidence. The 2026-08-25 seventeen coordinate-class dispositions remain, with all 17 compatible curves qualified as spectral proxies. There are no source material C/F/g indices, partial-dispersion or APD measurements and no per-lens spectral override to remove. Existing false APD flags remain false. Generic GFK70 wording in paragraph 0064 is an illustrative option, not a specific identification of a Numerical Embodiment 1 medium.

The current resolver supplies S-NPH53 (E1/E12/E17), N-SK14 (E2/E14), S-LAL59 (E3), J-LASF016 (E4), S-LAH58 (E5), SF6 (E6), H-ZLaF50D (E7), S-LAL10 (E8), S-FSL5 (E9/E10/E16), S-TIM28 (E11), S-LAM55 (E13) and L-BAL42 (E15). These are current compatible proxies, not new source glass identities. Historical supplier, melt, chemistry, cement, coating and manufacturing process remain unresolved. Catalog consistency and 17/17 resolution were checked. The source's two aspheric faces do not establish a manufacturing process; the retained production glass-molded correlation remains separate.

### Source/model qualifications and current runtime

The current file has derived iris authority and no authored `STO.sd = 5.42`. Correct stale public prose to source-station active radii 4.606743 / 5.409613 / 4.844751 mm. The retained 4.11 / 4.45 / 5.77 Figure 2 targets reproduce in the paraxial-reference aperture census. Independent real iris-rim working values are 4.130558 / 4.502434 / 5.808035 under 1/(2 n′ sin θ′). Neither proves an unpublished physical schedule; no stop change is made.

The unchanged source/model issues now have structured unresolved entries, with no numeric correction: paragraph 0054 L4 imageward motion versus the computed fixed-Gaussian-image-plane kinematics; paragraph 0056 imageward near-focus L2 motion versus the retained objectward constrained 0.35 m reconstruction; and Table 1 (PDF page 18 / printed page 6) headings φ5/φ5b over numbers 34.07 / −79.65 that reproduce focal lengths rather than powers. Its reciprocal-power ratio gives printed 0.43. The source supplies no final image gap or near-focus rows, so these are qualified reconstruction/source discrepancies, not proof of a radius or gap misprint. Old conclusions retain their dates.

Surface validation passes; image-circle audit reports zero undersized lenses. The three source EFLs compute as 17.552678 / 34.986440 / 82.482175 mm. Final image gaps remain computed Gaussian BFD 38.083640 / 45.269362 / 50.866993, not source rows; infinity residual is below 4 × 10⁻¹² mm by construction.

A geometry-identical 65-position clone matches actual z/sd at all sampled zooms and focus 0/0.5/1 (maximum difference zero). All 65 infinity aperture stations are within the unchanged 3% criterion; infinity field coverage is at least 99% throughout. Worst sampled infinity defocus is +1.087070 mm at zoom 0.828125, with EFL 60.054892 versus displayed 66.158750. The 65 zoom × 21 focus first-order check gives worst finite residual +1.469221 mm at tele/focus 0.4 (displayed 0.875 m), and worst intermediate close residual −1.139519 mm. Source-zoom reconstructed 0.35 m endpoints are below 10⁻¹² mm by construction. Retain source data and cams; interpolation is illustrative, not source-certified or continuously focused.

At 21 zoom × 21 focus × eight presets, 3432/3528 real working calls trace, with 96 `object-inside-lens` unavailable results at twelve early-focus/intermediate-zoom combinations. Baseline and candidate classifications agree. Those states are runtime conjugate limits and are not reported as passing clearance. The separate 193-point current-iris pupil at 65 zoom × five focus × four fields gives 1300 field states, every axial pupil 193/193. Source infinity corner counts improve from 103 / 147 / 163 to 109 / 147 / 163; source-zoom close counts from 74 / 123 / 113 to 113 / 123 / 113. Off-axis clipping remains; the five-focus pupil grid does not sample the unavailable early-focus positions and does not certify production illumination.

At 65 zoom × 21 focus states, actual SVGs have 23,205 finite, closed, connected paths and zero hidden front/rear renderer trim. Wide/middle/tele diagrams were compared with the native wide section, showing the corrected E4/E5 assignment and connected shoulders. At a reconstructed finite state, queried runtime APS-C corner height can fall to 13.998032 versus 14.175 mm; source Figure 2 covers Y = 13.65 mm. This limit is distinct from the passing infinity field census and does not authorize cap inflation. No source tele section or calibrated moved-IS configuration is claimed. Source fidelity, sampled centered runtime, spectral proxies and production correlation remain separate. No original-source blocker remains; coordinator owns metadata/reports and full gates.
