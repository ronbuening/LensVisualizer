# NikonAFSDXNikkor1024mmf3545GED — patent, aperture, and glass audit

## 2026-09-26 (UTC)

Source: local `patents/US8169718.pdf`, Example 4; Fig. 10, PDF p. 8; prescription pp. 18–19. Exact source pages and 600-dpi optical rims were inspected, excluding leaders, brackets, and mechanical outlines.

### Semi-diameters

All SDs retained after rejecting trial changes.

At about 32.8 µm/px, Fig. 10 supports the stepped front and compact rear silhouette. Automated L2/L2c readings include the large front rim and focus bracket; they are not 22-mm optical apertures. A smaller G3 rim and larger rear group passed simple geometry but did not restore the source wide field. Those trial changes were reverted. S1A retains the source effective-aperture radius 23.2 mm.

### Glass classification

Coefficient-backed catalog coverage: **14/16 → 14/16 material entries**. Source coordinates are retained. Catalog names designate supplier-neutral spectral proxies, not production suppliers or melt identities. No measured line indices or `dPgF` were invented, and no APD claim was added from branding alone.

| Element | Authored nd / vd | Catalog curve / disposition |
| ------- | ---------------: | --------------------------- |
| L1      |  1.74330 / 49.22 | NBF1                        |
| L2      |   1.88300 / 40.8 | TAFD30                      |
| L2c     |  1.53610 / 41.21 | Unmatched                   |
| L3      |  1.69895 / 30.05 | E-FD15                      |
| L4      |  1.68893 / 31.16 | M-FD80                      |
| L5      |   1.88300 / 40.8 | TAFD30                      |
| L6      |  1.58913 / 61.25 | M-BACD5N                    |
| L7      |  1.80610 / 33.27 | NBFD15                      |
| L8      |  1.77250 / 49.62 | N-LAF34                     |
| L9      |  1.84666 / 23.78 | H-ZF52                      |
| L10     |  1.49700 / 81.61 | FCD1                        |
| L11     |  1.90366 / 31.31 | TAFD25                      |
| L12     |  1.49700 / 81.61 | FCD1                        |
| L13     |  1.90366 / 31.31 | TAFD25                      |
| L14c    |  1.51460 / 49.96 | Unmatched                   |
| L14     |  1.58144 / 40.89 | E-FL5                       |

### Source and modeling limits

The production field audit reaches only about 12.00 mm image height (85% of the APS-C half-diagonal) at wide, stopping near 49.9°. Formula (14) gives Ymax/Fw=1.254, or about 12.91 mm, itself below the 14.18-mm format corner. The existing wide-field modeling limitation remains unresolved; the image-circle floor check passing is not full-field success. The thin 536412 and 515500 media have no sourced catalog dispersion and remain unmatched.

Surface geometry and image-circle floors pass with no undersized or skipped entries. The runtime renderer produces zero trim across sampled zoom/focus states, and the live optical silhouettes were compared with the figures. These checks do not remove the source/model limitations above.

### Second live-diagram review — G3 rims, physical labels, and ED inference

Fig. 10's directly measured G3 half-height is approximately 8 mm at 32.77 µm/px, consistent with the 7.80–8.06-mm RIM readings. The initial live diagram made G3 nearly as tall as G4, unlike the source. S15/S16/S17 change from 11.8/10.3/10.3 to 8.2/8.2/8.2 mm. Unlike the earlier combined trial, this change only corrects G3 and does not attempt to cure the existing wide-field limitation. The wide 12.00-mm image-height limit and middle/tele format-corner coverage are unchanged.

Diagram labels now use physical L1–L14 names with L2c/L14c for the two extra modeled layers, avoiding misleading sequential numbering up to 16. L10/L12 gain `apd: "inferred"` from the compatible FCD1 curve (catalog dPgF approximately +0.0312); no patent APD designation, measured spectral values, or production supplier is asserted.

Zoom runs 10.295 → 15.598 → 23.393 mm. Relative to the image plane, G1 first moves imageward 1.971 mm then objectward 7.267 mm; G2/G3/G4 move objectward throughout. Focus remains disabled: Fig. 10 establishes objectward Gr1B travel, but Example 4 gives no numerical near-focus station.

Coverage remains 14/16. The unmatched layers remain unsupported: KF8 misses the L14c index guard (Δn=0.00342), and E-CF6 misses its Abbe guard (Δν=2.19); L2c's nearest FTM8 also misses both guards. No tolerance is relaxed or glass curve substituted for an unidentified composite layer. The patent cover confirms both Tamron Co., Ltd. and Nikon Corporation; these are already canonical distinct nodes, and co-assignment does not prove manufacturing.

The hybrid layer/substrate pairs retain their H-group diagram brackets and explicit layer descriptions, but omit the glass-doublet inspector tag. A bonded aspheric layer is part of one physical lens; displaying “DOUBLET” solely because it has two modeled media was misleading. Actual glass doublet/triplet tags are retained. Catalog labels were shortened to “supplier-neutral catalog proxy” to keep the qualification readable in the inspector.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US8169718.pdf`: Figure 10 on PDF page 8 at 600 dpi; the complete Embodiment 4 prescription, d-line Nd/ABV definition, zoom spacings and all four asphere blocks on page 19; and the normal-angle/source-condition tables on page 20. Page 18 is principally Embodiment 3 and is not the controlling glass table. The source image is 300 ppi (`pdfimages -list`).

All sixteen prescription media, with the existing two composite-layer interpretations, and every cemented/aspheric boundary were inspected. S2A’s concave rear face has an explicit vertical land. The first-to-last span gives about 15.2 native px/mm (94.6 mm); cap/edge radial picks are about 246/387, q = 0.636 ±0.0042 for a one-native-pixel band, and the source-scaled cap is near 16.1 mm. Adopt `rimExtensionSd:23.2` while preserving the existing 17.1 mm clear cap; this gives adopted q = 0.737 rather than claiming the figure ratio exactly. The common outer height matches the unchanged, source-verified 23.2 mm front cap.

Additional optical-trim trials were checked instead of silently shrinking the cap. The raw q × 23.2 trial is about 14.75 mm / depth 10.09 mm: the inferred-cut rule rejects it because the beam reaches 15.2645 mm at wide, field 53.47°, requiring radius 15.3145 mm. An absolute-scale 16.1 mm trial / depth 12.54 mm clears the complete beam sweep with its old 17.1 mm drawn rim. Giving that numerical cut the needed 23.2 mm outer rim, however, fails actual profile geometry: the rear polynomial bends back into glass, produces edge thickness −4420.223 mm and rim slope 4205.34 at 23.2 mm (limit 2.06). The cap is therefore retained at 17.1 with an optical-preserving extension, rather than reducing it through an extension to bypass the cut guard. No source flag or tolerance is changed.

Every other face reaches its edge or a connecting bevel without a resolved short vertical land. No flat face is invented across either interpreted composite layer or G4’s beveled triplet outline. Full rendered outlines remain connected; no resin wing is added. All four asphere clear caps and hence their current departure/slope evaluations remain unchanged.

All sixteen source nd/νd rows are freshly confirmed and retained. Fourteen compatible spectral curves remain: NBF1, TAFD30 (twice), E-FD15, M-FD80, M-BACD5N, NBFD15, N-LAF34, H-ZF52, FCD1 (twice), TAFD25 (twice), E-FL5. The 1.53610/41.21 and 1.51460/49.96 thin media remain unresolved with material/supplier interpretation qualified. No partial-dispersion or individual line data are printed. Existing inferred FCD1 APD tags remain, but the stale approximate catalog deviation +0.0312 is corrected to +0.0323: direct current C/F/g evaluation gives +0.03231985 against 0.6438 − 0.001682νd at stored νd81.61. This is a runtime-catalog explanation, not source partial dispersion.

The current exact field audit reaches the 14.175 mm format corner at W/M/T (half-fields 54.9958°/42.1113°/30.8581°, no corner rim clip), including the original-cap baseline. This supersedes the historical 12 mm/85% wide-field limitation. Source Formula (14), Ymax/Fw1.254, remains quoted separately and is not rewritten to match runtime coverage. Public current prose is synchronized.

Focused surface and image-circle checks pass. The nominal-aperture audit proposes no height raises. Actual SVG paths at all nine focus/zoom combinations (0, 0.5, 1) are finite with zero hidden trimming, and the rendered compound outlines were inspected. A temporary source/resolver check covers all 48 modeled media in this triad: 44 compatible catalog curves and four explicit unresolved media. All source nd/νd values and every runtime C/d/F/g channel remain unchanged; `assertCatalogConsistent` passes. Source R/d, aspheric coefficients, stop, focus and zoom controls are unchanged.
