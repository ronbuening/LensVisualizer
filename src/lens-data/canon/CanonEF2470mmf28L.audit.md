# Audit Log - Canon EF 24-70mm f/2.8L USM

Patent: JP 2014-41222 A, Numerical Example 1

## 2026-06-10 - Patent prescription and zoom-direction audit

### Phase 1 - Glass corrections

| Element / surface | Field                    | Before       | After     | Justification                                                                                                            |
| ----------------- | ------------------------ | ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| All elements      | `nd`, `vd`, line indices | Current data | No change | Patent table in paragraph 0065 matches the stored d-line indices, Abbe numbers, and published `nC` / `nF` / `ng` values. |

### Phase 2 - Retained-information audit

- Confirmed against `patents/JP2014041222A.pdf`, Numerical Example 1.
- Surface radii, thicknesses, and element refractive indices match the patent surface table for surfaces 1-31. The data uses `SSP` for patent surface 14 and `STO` for patent surface 20 by local convention.
- Aspherical coefficients for surfaces 1 and 31 match the patent table, with standard conic constant `K = 0`.
- Infinity zoom positions are correctly ordered as wide / middle / tele: 24.90 mm, 35.13 mm, and 68.14 mm.
- Infinity variable gaps match the patent table:

| Gap |  Wide | Middle |  Tele |
| --- | ----: | -----: | ----: |
| D6  | 55.36 |  31.61 |  3.78 |
| D13 |  2.90 |   6.51 | 20.41 |
| D20 | 19.24 |  15.64 |  1.73 |
| D25 |  1.19 |   3.58 | 10.91 |
| D29 |  3.99 |   9.73 | 13.28 |

- Zoom behavior is not reversed. The patent labels the columns `広角 / 中間 / 望遠`, and paragraph 0033 describes the same wide-to-tele motion stored here: G1 moves imageward; G2, G3, G4, and G5 move objectward; G6 remains fixed.
- The modeled close-focus state is consistent with paragraph 0058: the fifth group moves imageward from infinity to close focus. In data terms, D25 increases and D29 decreases while conserving D25 + D29 at each zoom position.

## 2026-10-30 — Original-PDF shape and glass review

Confirmed `patents/JP2014041222A.pdf` as JP 2014-041222 A, published March 6, 2014, inventor Hiroshi Endo, Canon applicant. Selected Numerical Example 1 is ¶0065: surface rows on PDF pages 9–10, asphere and three-station zoom tables on page 10, continued gaps/group data and all sixteen d/g/C/F rows on page 11. Paragraph 0062 on page 9 explicitly defines the d-line reference. Conditional Table 1 is PDF page 13; its condition (2) supplies the special glass's νd 25.9. The matching wide-infinity section is Figure 1 on PDF page 14; corresponding wide/tele aberration Figures 2/3 are on PDF page 15.

Figure 1 is an embedded native 1072 × 512 JPEG at about 200 ppi. About 772 native pixels over the 160.66 mm first-to-last-vertex span gives 4.80 px/mm. Semi-height uncertainty is about ±0.5 mm from ±1–2 native-pixel stroke/JPEG ambiguity. Enlarged details are magnification only; the source tables themselves are vector text rendered at 300 ppi for numerical inspection. Leaders, zoom arrows, brackets and the long SSP/SP blade/callout strokes were excluded. No numerical clear diameters are published.

| Surface(s)    | Prior clear `sd` | Adopted clear `sd` | Outer shoulder / reason                                            |
| ------------- | ---------------: | -----------------: | ------------------------------------------------------------------ |
| S1A           |          30.0 mm |            29.2 mm | Source curved front-asphere height                                 |
| S2            |          27.0 mm |            24.0 mm | Resolved rear shoulder extends to `rimExtensionSd: 29.2`           |
| S4            |          22.5 mm |            22.5 mm | Resolved rear shoulder extends to `rimExtensionSd: 23.8`           |
| S6            |          22.0 mm |            22.5 mm | Complete curved rear rim of front positive meniscus                |
| S7–S13        |     19.8–20.8 mm |            18.8 mm | Second-group outlines; all three singlets/doublet caps inspected   |
| S15 / S17–S19 |     11.8–12.2 mm |            13.0 mm | Source third-group curved rims; S16 constrained separately         |
| S21–S25       |     13.6–14.0 mm |            13.4 mm | Fourth-group curved rims, within source stroke uncertainty         |
| S26–S29       |          14.0 mm |            12.6 mm | Source focus-group outlines                                        |
| S30 / S31A    |   15.0 / 15.2 mm |     18.5 / 18.5 mm | Source final positive/aspherical element                           |
| SSP           |          12.4 mm |            12.5 mm | Beam-inferred flare-stop clearance, not a blade-length measurement |

All sixteen elements, every concave end, both glass aspheres and the three cemented interfaces (S8, S18 and S22) were inspected. No resin/hybrid layer, distinct cement medium, filter or camera-side plate is tabulated. Two external air-facing shoulders and no inferred concave cut are authored. Native residuals within the practical measurement uncertainty remain qualified rather than treated as exact mechanical dimensions.

A literal source-height trial at S3=23.8 mm fails S2→S3 intrusion 11.45 mm against 10.818 mm allowed; S16=13.0 mm fails S16→S17 intrusion 2.61 mm against 2.205 mm allowed. Existing curved caps 23.0/11.8 mm are retained, with their residual source/model difference explicit. No speculative S16 shoulder, opaque bonded-interface land, R/d adjustment or tolerance relaxation is used to hide it. The SSP radius remains inferred because the original gives no diameter: the existing 12.4 mm cap produced a tiny tele-infinity f/2.92706 census result versus scalar 2.92 (+0.242%). The read-only marginal-beam minimum rounds up to 12.5 mm, removing that unintended clip. SSP's source position and independent STO authority are unchanged. Source f-numbers 2.92/2.92/2.91 remain separately stated; scalar 2.92 and all aperture/focus/zoom controls are retained, with a 0.34% tele approximation explicit.

All sixteen source media were checked, including the spectral rows for S5/S21 where the surface table leaves the special-glass coordinate blank. Exact nd=1.84265 is published on page 11 and νd=25.9 in conditional Table 1 on page 13; the printed C/F indices reproduce its rounded Abbe number. All forty-eight genuine `nC/nF/ng` values are preserved. The three APD/partial-dispersion entries remain calculations supported by those published indices, rather than vendor-derived overrides. Thirteen compatible catalog curves remain qualified spectral proxies; the two unidentified coordinate classes occupy three media (L13/L41 and L43), whose source line indices remain usable without a catalog identity. Labels, per-element prose and the glass table now qualify supplier/melt/chemistry uncertainty; the ED coordinate is not claimed to establish fluorophosphate chemistry. No source numerical index, Abbe value, spectral point or derived partial value is changed.

Source R/d and both asphere coefficient sets are unchanged. At the adopted caps, polynomial departures are +0.89495 mm for S1A at 29.2 mm and −0.04662 mm for S31A at 18.5 mm; the analysis is synchronized. The prescription remains the later material-invention architecture correlated to a first-generation lens class, not verified release-era production documentation.

The final surface and image-circle checks accept the revised geometry. A 65-position scratch clone matches the actual piecewise interpolation exactly, including stops and three sampled focus positions. All sixty-five infinity aperture and full-frame corner-field checks pass their census thresholds. Real working marginal rays across twenty-one zoom positions, three focus positions and seven aperture settings trace in all 441 cases; the baseline had three wide-open SSP/S19 clips. Actual wide/middle/tele SVGs were compared with Figure 1; sixty-three zoom/focus states yield 1008 finite, singly connected, closed paths with zero renderer trimming.

A separate aimed circular-pupil check samples 193 coordinates at axial, half-field and corner fields across those sixty-three zoom/focus states. All candidate axial samples pass. Off-axis vignetting remains: at infinity the corner passing counts change 108→93 wide, 93→129 middle and 83→119 tele. The height corrections improve source fidelity and redistribute sampled vignetting; they are not a claim that every off-axis pupil ray clears or that production illumination has been reproduced.

Intermediate zoom remains illustrative rather than focus-preserving. The worst sampled infinity first-order state at normalized zoom 0.796875 has EFL 48.68070 mm versus displayed 54.72969 mm, and BF 29.56846 mm against the retained 38.47 mm image gap (−8.90154 mm defocus). Source-station back focuses are 38.46387/38.45092/38.45450 mm. The source supplies neither an intermediate cam nor a finite-focus table; existing product-MFD close focus and all source spacing/control semantics remain intact. Source fidelity, sampled runtime clearance and production correlation are separate conclusions.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 180 positive-real-object geometries, 540/540 target chiefs converge: 540 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 91,621 passed, 12,583 clipped, 16 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ ?` (16). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.380000000 |           0.380000 | 193 / 188 / 100                   | clear / clear / clear |
|          0.5 |                  0 |                  0.380000000 |           0.380000 | 193 / 185 / 131                   | clear / clear / clear |
|            1 |                  0 |                  0.380000000 |           0.380000 | 193 / 170 / 137                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 94.916571% at zoom 0.75, focus 0.05, aberration control 0: Gaussian 0.386340607 m versus label 7.600000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

## 2026-10-31 — Scoped positive catalog-source follow-up

This glass-only follow-up preserves the 2026-10-30 original shape review and all prescription/control values. Numerical Example 1, JP2014041222A PDF pages 9–10 and the full spectral table on page 11, confirms L43/id13 (source S24) nd 1.52542/νd 64.5 and C/F/g 1.52291/1.53105/1.53541. ¶0062 on page 9 explicitly defines d. The source page 11 vector table was rendered and read directly; enlargement is not additional native raster evidence. All sixteen material rows and all 48 genuine C/F/g values remain intact. No catalog-derived per-lens override is added.

PC3's existing HOYA polynomial is compatible. At the engine reference lines its nd/νd residuals are +0.00000005/+0.119542; its C/F/g errors against the printed L43 row are +0.00001073/+0.00000171/−0.00001074. Catalog PgF 0.53468967 versus printed-line 0.53562654 gives −0.00093687. Thus this is a qualified approximate proxy, not an exact material identity. Complete measured source line indices bypass catalog selection, preserving the modeled source spectrum.

Positive evidence is the existing catalog row's documented [HOYA source](https://www.hoya-opticalworld.com/english/datadownload/) and direct full-source spectral comparison. The present portal, `HOYA20260707_include_obsolete.agf` and PC3 PDF requests timed out; no fresh manufacturer-coefficient download or inaccessible family source is claimed. Current downloaded OHARA/Nikon-Hikari/SUMITA searches did not supply a closer source-backed full-line replacement. No new shared row is required.

The only data changes are L43's qualified PC3 label and explicit source-reference annotations. Both unmatched 1.84265/25.9 special-glass entries and their published lines remain unresolved by catalog identity. Current catalog coverage is fourteen of sixteen media; the Oct 30 thirteen-curve/three-unmatched statements above describe the earlier disposition. Geometry, rims, stops, zoom/focus controls, source pairs, genuine partial data and APD evidence are unchanged.
