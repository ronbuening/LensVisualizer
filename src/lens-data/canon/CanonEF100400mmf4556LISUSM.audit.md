# Audit Log — Canon EF 100-400mm f/4.5-5.6 L IS USM

## 2026-10-30 — Original-patent heights, concave ends and glass

Original: supplied `patents/JP_2000047107_A.pdf`, JP 2000-47107 A, Numerical Example 2. The publication, inventor Hiroshi Endo, Canon applicant and 2000-02-18 publication date are legible on p.1. Prescription begins at the foot of p.6 and continues on p.7; corresponding wide/infinity section is Fig. 6 on p.13 (caption mapping on p.10). Table 2 on p.9 gives the wide/tele 4 m focus motions. The scan is readable but has no text layer, so values and figures were read from extracted native page images rather than treating empty text extraction as an absent source.

### Shape decisions

The original pages are 1656×2339 px at 200 ppi. Fig. 6 was inspected at native resolution; a 600-dpi page render only upsamples those pixels. The first/last refracting-vertex span is approximately 926 px for the model's 158.28 mm wide/infinity glass-vertex length, giving approximately 5.85 native px/mm (0.17 mm/px before schematic uncertainty). Brackets labeled L1–L6, zoom arrows and the SP leader are excluded. Every element, concave end, direct doublet interface and both triplet interfaces was inspected; no hybrid resin or separately modeled cement is published.

| Element / surfaces | Before | After / retained decision | Evidence |
|---|---|---|---|
| E1, surfaces 1/2 | `sd: 36` / 36 mm | Retained | Fig. 6 front collector; front/rear caps reach their outer edges without a resolved separate land. |
| E2, surface 4 | `sd: 36` mm, no cut | `sd: 36` retained; inferred `rimCutDepthMm: 9.48` | Upper cap/outer heights approximately 185/193 native px: q≈0.959 with ±(1+q)/193≈0.010 one-pixel endpoint uncertainty. Adopted spherical cap radius 34.4945 mm gives q = 0.9582 and a 1.5055 mm land. The source does not dimension the depth, so rimCutDepthSource is absent. |
| E3, surfaces 5/6 | `sd: 34.5` / 34.5 mm | Retained | The neighboring near-flat rear face and front-group relative heights agree with the existing inferred apertures within schematic precision. |
| E4–E6, surfaces 8–12 | `sd: 13.85–14.1` mm | Retained | G2 relative height is within approximately 12% of the existing model ratio to G1. Source doublet surface 11 stays a transparent shared interface. |
| E7–E9, surfaces 13–18 | `sd: 15.6` mm | Retained | G3 relative height is within approximately 8% of the model ratio. The horizontal stroke beneath the group is its bracket, not an equal-height glass block or rim extension. |
| E10, surfaces 20/21 | `sd: 15.3` mm | Retained | G4 concave front and rear cap reach the drawn edges; the existing relative height matches the figure. |
| E11–E14, surfaces 22–29 | `sd: 15.6` mm | Retained | All four G5 elements and close air gaps inspected. Group bracket and zoom arrow rejected as rim evidence. |
| E15–E17, surfaces 30–33 | `sd: 14.8` mm | Retained | Rear triplet outlines connect and its two bonded interfaces remain transparent; no opaque junction lands are added. |

No R/d or stop correction is indicated by the table check. The omitted source surface 7 remains an inactive air/air plane; its 2.00 mm spacing remains folded into the preceding air space. The existing `gapSagFrac: 0.96` policy is retained without relaxation; source stations and the qualified 1.8 m focus reconstruction are unchanged. Table 2's published 4 m movements remain separate from that reconstruction.

The inferred surface 4 cut clears the full standard zoom/focus beam guard. An independent dense beam probe over 21 zoom × 21 focus positions reaches 33.8161 mm against cut radius 34.4945 mm, with required margin 0.1035 mm, no clipped beam ray and no unlaunchable field. Extra finite launches at the three existing 1.8 m reconstructed states also clear the guard; separate source-configuration checks use Table 2's 4 m G4 shifts −1.000 mm and G6 shifts +0.754/+5.610 mm at wide/tele. Those diagnostic finite configurations are not written as certified conjugates in the catalog. These are sampled runtime findings, not proof of continuous 3D/skew-ray clearance. Actual SVG comparisons cover wide/middle/tele and three focus-control positions, with 17 finite connected element paths and zero hidden trimming per view. IS decentering is unmodeled.

### Glass decisions

Every indexed medium was checked against the original numerical table, including both cemented units. ¶0047 on p.5 defines nᵢ/νᵢ without specifying a wavelength; the source reference line remains unknown. Full original-prose review found no numerical-table wavelength definition; p.10 identifies d/g aberration-curve labels, which do not explicitly anchor the nᵢ/νᵢ table. All 17 media therefore change from coordinate-derived labels to Unmatched with indexReferenceNote; approximate d-line tracing retains the numeric pairs while all catalog curves are disabled. No C/F/g indices, PgF/dPgF or element-specific APD evidence is supplied. No per-lens numerical spectral override is authored, and no source numerical cement, resin, filter or rear plate is omitted.

| Source element | Source n / ν | Former label or class | Disabled former curve |
|---|---|---|---|
| E1 / E11 | 1.48749 / 70.2 | 487702 |S-FSL5 |
| E2 | 1.74950 / 35.0 | 750350 |H-LaF4 |
| E3 | 1.43387 / 95.1 |CaF2 correlation |CaF2 |
| E4 | 1.71300 / 53.9 | 713539 |LAC8 |
| E5 | 1.62299 / 58.2 | 623582 |S-BSM15 |
| E6 | 1.84666 / 23.8 | 847238 |J-SF03 |
| E7 | 1.43875 / 95.0 | 439950 / Super UD correlation |S-FPL53 |
| E8 | 1.70154 / 41.2 | 702412 |BAFD7 |
| E9 | 1.62012 / 49.5 |K-SSK9 qualified proxy |K-SSK9 |
| E10 | 1.60311 / 60.6 | 603606 |N-SK14 |
| E12 | 1.80518 / 25.4 | 805254 |N-SF6 |
| E13 | 1.51633 / 64.1 | 516641 |S-BSL7 |
| E14 | 1.66672 / 48.3 | 667483 |BAF11 |
| E15 | 1.83481 / 42.7 | 835427 |S-LAH55V |
| E16 | 1.72825 / 28.5 | 728285 |S-TIH10 |
| E17 | 1.77250 / 49.6 | 773496 |J-LASF016 |

All 17 media are unresolved in this review (0/17 active catalog curves). Their numerical index/Abbe pairs are unchanged; each indexReferenceNote states that the source spectral line is unspecified and the d-line convention is approximate. The discarded coordinate-derived curves above are historical audit evidence, not current material assignments. K-SSK9's catalog Abbe 49.8 cannot establish the source's 49.5 reference, and production fluorite/Super UD descriptions cannot identify the source medium or wavelength. Analysis element labels, glass table, roles and source qualifications agree with the Unmatched data. No new supplier, melt, chemistry or APD claim is made.


## 2026-10-30 — Runtime interpolation follow-up; source coverage reused

This follow-up reuses the completed original-PDF shape/glass coverage and its actual 2026-10-30 date; no new original
inspection or fresh-review count is claimed. R/d, caps, the surface-4 inferred cut, unmatched media and controls remain
unchanged. A 65-position diagnostic copy matches runtime positions and stop diameters at focus controls 0/0.5/1
exactly, with maximum geometry difference zero.

All 65 full-frame chiefs converge and clear. Forty-eight aperture samples stay within 3% of their nominal value;
14 interpolated positions are limited at surface 17 and three at 12. Worst: f/5.949586497 versus 5.5375 (+7.441743%),
near displayed 303.82 mm. These limits are independent of the previously cleared surface-4 cut.

Worst infinity defocus is 21.492391071 mm at t = 0.8125: BF 127.324891071 versus image gap 105.8325 mm,
actual EFL 309.426408480 versus displayed 303.8175 mm. The three source-anchor BF residuals are
+0.006000803/+0.010194756/−0.013072788 mm. The source does not supply a continuous cam, so interpolated controls
remain illustrative rather than focus-preserving. The approximate d-line tracing convention for the unknown source
index reference remains explicit; these numerical matches do not resolve it. The analysis now separates quantitative
source anchors, sampled runtime limits and production correlation. No prescription or tolerance is changed.
