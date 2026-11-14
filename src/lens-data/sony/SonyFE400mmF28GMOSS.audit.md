# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

JP2025063175A.pdf, p. 63, Figure 5, Example 2. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

Retained all semi-diameters. The front singlet, GR1 separated elements, focus doublet and rear cemented stacks agree with the optical silhouette. Automated rear-envelope measurements include callouts on both sides of the axis and are invalid evidence for enlargement. Existing geometry-limited rims remain.

### Metadata and glass

Retained FE 400mm f/2.8 GM OSS and its research-correlation limitation. Removed catalog-derived authored nC/nF/ng so catalog compatibility and patent-derived dPgF control runtime dispersion. The patent-published partial dispersion remains unchanged. Enabled patent APD display classification for the seven elements whose material conditions supply those deviations (L12–L16, L40, L43).

Final trusted catalog coverage: **22/22 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 5, PDF p. 63 of JP2025063175A.pdf; Tables 4–6, pp. 19–20.

Retained SDs after comparing the large collector, separated fluorite stack, cemented focus doublet and stepped rear groups on the local site.

The live near endpoint moves only GR2 objectward by 19.70 mm, matching d14 51.13→31.43 and d17 9.69→29.39 mm.

Corrected a normal-line convention error: the source uses 0.648262 − 0.001801νd, while the engine expects 0.6438 − 0.001682νd. Runtime dPgF is now 0.05507686 (L12/L14/L16), 0.01011360 (L13/L15), 0.01573566 (L40), and 0.01670072 (L43), recovering the published θgF ratios. Conditions (10)–(11) constrain L13/L15 dispersion but do not call them anomalous; removed their patent APD tags. Kept patent APD for L12/L14/L16/L40/L43 and added qualified inferred APD for FCD1-compatible L34. All 22 elements retain trusted spectral coverage.

## 2026-11-14 — Published finite conjugates

Patent: JP 2025-063175 A, Example 2.

| Zoom/keyframe | Before | Added object distance / reference | Source locator | Paraxial offset (mm / diffraction depths) | Other-reference offset (mm / depths) |
|---|---|---|---|---|---|
| 0/1 | No conjugate | 2700 mm / `image-plane` | PDF p. 20, printed p. 20; Table 6, close focus finite column, 被写体距離 row; `被写体距離 2.7m` | 0.17763584 / 17.794274 | -7.4226489 / -915.14331 |

The retained rows are `consistent` under the 25-diffraction-depth criterion. Existing gaps, image plane and published flags are retained.

- State 0/1: D14 (before GR2)=31.43 mm; D17 (after GR2)=29.39 mm.

The distance reference is audit-resolved: the patent gives no explicit reference definition, and only the retained reference is consistent. The conjugate source string records that qualification.

The patent prints subject distance without an explicit reference definition; the discriminating audit identifies image-plane.
