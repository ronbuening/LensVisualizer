# NikonAFSDXNikkor1024mmf3545GED — patent, aperture, and glass audit

## 2026-09-26 (UTC)

Source: local `patents/US8169718.pdf`, Example 4; Fig. 10, PDF p. 8; prescription pp. 18–19. Exact source pages and 600-dpi optical rims were inspected, excluding leaders, brackets, and mechanical outlines.

### Semi-diameters

All SDs retained after rejecting trial changes.

At about 32.8 µm/px, Fig. 10 supports the stepped front and compact rear silhouette. Automated L2/L2c readings include the large front rim and focus bracket; they are not 22-mm optical apertures. A smaller G3 rim and larger rear group passed simple geometry but did not restore the source wide field. Those trial changes were reverted. S1A retains the source effective-aperture radius 23.2 mm.

### Glass classification

Coefficient-backed catalog coverage: **14/16 → 14/16 material entries**. Source coordinates are retained. Catalog names designate supplier-neutral spectral proxies, not production suppliers or melt identities. No measured line indices or `dPgF` were invented, and no APD claim was added from branding alone.

| Element | Authored nd / vd | Catalog curve / disposition |
|---|---:|---|
| L1 | 1.74330 / 49.22 | NBF1 |
| L2 | 1.88300 / 40.8 | TAFD30 |
| L2c | 1.53610 / 41.21 | Unmatched |
| L3 | 1.69895 / 30.05 | E-FD15 |
| L4 | 1.68893 / 31.16 | M-FD80 |
| L5 | 1.88300 / 40.8 | TAFD30 |
| L6 | 1.58913 / 61.25 | M-BACD5N |
| L7 | 1.80610 / 33.27 | NBFD15 |
| L8 | 1.77250 / 49.62 | N-LAF34 |
| L9 | 1.84666 / 23.78 | H-ZF52 |
| L10 | 1.49700 / 81.61 | FCD1 |
| L11 | 1.90366 / 31.31 | TAFD25 |
| L12 | 1.49700 / 81.61 | FCD1 |
| L13 | 1.90366 / 31.31 | TAFD25 |
| L14c | 1.51460 / 49.96 | Unmatched |
| L14 | 1.58144 / 40.89 | E-FL5 |

### Source and modeling limits

The production field audit reaches only about 12.00 mm image height (85% of the APS-C half-diagonal) at wide, stopping near 49.9°. Formula (14) gives Ymax/Fw=1.254, or about 12.91 mm, itself below the 14.18-mm format corner. The existing wide-field modeling limitation remains unresolved; the image-circle floor check passing is not full-field success. The thin 536412 and 515500 media have no sourced catalog dispersion and remain unmatched.

Surface geometry and image-circle floors pass with no undersized or skipped entries. The runtime renderer produces zero trim across sampled zoom/focus states, and the live optical silhouettes were compared with the figures. These checks do not remove the source/model limitations above.

### Second live-diagram review — G3 rims, physical labels, and ED inference

Fig. 10's directly measured G3 half-height is approximately 8 mm at 32.77 µm/px, consistent with the 7.80–8.06-mm RIM readings. The initial live diagram made G3 nearly as tall as G4, unlike the source. S15/S16/S17 change from 11.8/10.3/10.3 to 8.2/8.2/8.2 mm. Unlike the earlier combined trial, this change only corrects G3 and does not attempt to cure the existing wide-field limitation. The wide 12.00-mm image-height limit and middle/tele format-corner coverage are unchanged.

Diagram labels now use physical L1–L14 names with L2c/L14c for the two extra modeled layers, avoiding misleading sequential numbering up to 16. L10/L12 gain `apd: "inferred"` from the compatible FCD1 curve (catalog dPgF approximately +0.0312); no patent APD designation, measured spectral values, or production supplier is asserted.

Zoom runs 10.295 → 15.598 → 23.393 mm. Relative to the image plane, G1 first moves imageward 1.971 mm then objectward 7.267 mm; G2/G3/G4 move objectward throughout. Focus remains disabled: Fig. 10 establishes objectward Gr1B travel, but Example 4 gives no numerical near-focus station.

Coverage remains 14/16. The unmatched layers remain unsupported: KF8 misses the L14c index guard (Δn=0.00342), and E-CF6 misses its Abbe guard (Δν=2.19); L2c's nearest FTM8 also misses both guards. No tolerance is relaxed or glass curve substituted for an unidentified composite layer. The patent cover confirms both Tamron Co., Ltd. and Nikon Corporation; these are already canonical distinct nodes, and co-assignment does not prove manufacturing.

The hybrid layer/substrate pairs retain their H-group diagram brackets and explicit layer descriptions, but omit the glass-doublet inspector tag. A bonded aspheric layer is part of one physical lens; displaying “DOUBLET” solely because it has two modeled media was misleading. Actual glass doublet/triplet tags are retained. Catalog labels were shortened to “supplier-neutral catalog proxy” to keep the qualification readable in the inspector.
