# PANASONIC LUMIX S PRO 16-35mm f/4 Audit

## 2026-07-31 — Patent-figure SD, glass, and identity pass

**Source:** JP 2021-076829 A, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state section with the clean rims in Figure 1 at 600 dpi and checked the full-frame image-circle
  floor.
- Retained the submitted SDs. Clean figure/data measurements stay within the audit tolerance; the apparent L3 and
  L9-L10 outliers are under-read or crossed by patent leader and group lines.

### Glass

- Added SUMITA K-LaSFn23 from the manufacturer's coefficient-backed datasheet and assigned it as L12's catalog
  equivalent. The patent index remains `1.91082`, versus the catalog nominal `1.91100`, and the production supplier is
  left unspecified.
- Retained the other class-level and explicit unmatched annotations because the patent supplies only nd/vd coordinates
  and does not uniquely identify catalog glasses.

### Identity

- Confirmed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 16-35mm f/4` is correct and was retained.
- Romanized the inventor name and normalized the assignee to the existing
  `Panasonic Intellectual Property Management Co., Ltd.` catalog identity.

## 2026-08-21 — HOYA BAC6 legacy-curve recovery

- Visually rechecked local `patents/JP2021076829A.pdf`, PDF page 16, Numerical Example 1 Table 1. Surface 10 prints L5 at `nd = 1.57469`, `νd = 56.0`; the patent names no glass supplier and publishes no partial-dispersion row.
- Added HOYA BAC6 from the first-party 2026-07-07 obsolete-inclusive OpticStudio catalog. Its polynomial evaluates to `1.574441 / 56.357`, within `Δnd = -0.000249` and `Δνd = +0.357` of the patent coordinates.
- Relabeled L5 as a BAC6 legacy catalog equivalent while retaining code `575560` and leaving Panasonic's production supplier unspecified. Geometry and APD metadata are unchanged.

## 2026-10-27 — Rimmer localization audit (asphere data)

**Source:** Local `patents/JP2021076829A.pdf`, Embodiment 1 / Numerical Example 1: PDF page 16, ¶0118-0119
(sag equation) and Table 1 rows 1-10; page 17, Table 1 rows 11-23, Table 2 and Table 3A; page 25, Figures 1-2.
Tables were read from 220 dpi images and the coefficient/figure details from 400 dpi crops, not OCR digits.

| Surface / document | Field | Before | After | Evidence / reason |
|---|---|---|---|---|
| 10A | `sd` | 10.9 mm | 9.9 mm | Figure 1 draws a square L5 rim, so the other face takes the 11A cap; axial-ray maximum 9.292541 mm. |
| 11A | `sd` | 10.2 mm | 9.9 mm | Printed coefficients turn over at 9.946327 mm; round down at authored precision. Maximum stated axial-ray height is 9.068221 mm across zoom. |
| 10A / analysis | Same-R-sphere and conic-base rim departures | +0.060761 mm | -0.030648 mm | Recomputed at the new paired 9.9 mm rim. |
| 11A / analysis | Same-R-sphere and conic-base rim departures | +0.341401 mm | +0.276400 mm | Recomputed at 9.9 mm with the exact printed polynomial; rim slope is approximately -0.4°. |
| Data header | SD note | General inferred-rim qualification | Names the paired 10A/11A cap and the 16A axial-beam exception | Makes the retained limitation explicit. |
| Analysis | Geometry / containment qualification | Broad geometry-and-ray-check wording | Distinguishes axial aperture and chief-ray containment from unresolved peripheral localization | Current vignetting probes contradict an unrestricted containment implication. |

### Source-table findings

Every `K`, `A4`, `A6`, `A8`, `A10`, `A12` and `A14` on 5A, 10A, 11A, 16A and 17A matches Table 2, including
signs, mantissas, exponents and zeros. The equation uses `1 + κ`, so `κ = K`; only even powers are printed and no
normalization or rescaling applies. All radii, fixed spacings, nd/vd assignments and the published infinity gaps match
Table 1 and Table 3A. No prescription coefficient was changed.

The first slope reversals are 18.358933 mm (5A), 9.946327 mm (11A) and 6.267099 mm (16A), refined by bisection of
the same sag derivative used by the probe. Coarse triage samples report approximately 18.37, 9.98 and 6.29 mm.
5A's -5.431363 mm departure at 14.2 mm is the printed conic plus polynomial, below its reversal; it is retained.
10A and 17A have no reversal within the triage scan range. Figure 1 publishes no effective diameters. The 600 dpi L5 detail confirms a square-cut rim, so the 11A cap also sets 10A to 9.9 mm.
The scratch before/after silhouette was compared with Figure 1; L5 now retains its square rim.

16A cannot be capped under the axial-beam rule. The stated beam needs up to 7.922720 mm at 16A and 8.127630 mm at
17A, above a proposed square 6.2 mm rim. An isolated scratch copy with both faces capped gives tele approximately
f/5.21 against the printed f/4.12028. The 10.3 mm rims therefore remain. This is an unresolved inferred-aperture /
peripheral-model limitation, not proof that the printed coefficients are wrong.

### Source-plot comparison

Figure 2 uses SA and AST ticks of -0.5 / 0 / +0.5 mm and DIS ticks of -5 / 0 / +5%; its wide distortion curve extends
left of the -5% tick. Source-boundary traces give chief heights 20.001 / 20.993 / 21.638 mm versus Table 3A's
20 / 21 / 21.633 mm; distortion -10.811 / -4.516 / -2.360%; and T/S shifts -0.325/-0.146, -0.241/-0.093,
+0.068/-0.029 mm at wide/middle/tele. These are consistent with the plotted scales and trends. On-axis LSA at pupil
fractions 1 / 0.85 / 0.7 / 0.5 remains -0.050/-0.023/-0.010/-0.014 mm (wide),
-0.050/-0.053/-0.010/+0.004 mm (middle), and +0.004/+0.040/+0.020/+0.081 mm (tele).
The EFL/BFD/track values already documented in the analysis reproduce Table 3A. There is no isolated source misprint
meeting the correction standard, so the printed prescription is retained without a new `source.errata` assertion.

### Outcomes and follow-up

The direct surface validator reports no errors after the paired cap; the stated axial aperture remains within tolerance
throughout infinity zoom and the image-circle check reports no undersized rims. Field coverage retains the wide
format-corner shortfall at surface 2; Table 3A only specifies a 20 mm wide-state image height. The source-field chief
ray is covered, so no unrelated front-rim enlargement is justified.

`vprobe.mjs` gives identical per-field RI, maximum deviation and reasons before/after at zoomT 0, 0.5 and 1.
Wide RI is still refused at 49.971972° (`cosine-map-folds`, maxDev 0.039843) and 52.911500°
(`rays-not-localized`, maxDev 0.052971). Middle RI is refused at 40.408472° (`cosine-map-folds`, maxDev 0.0256)
and 43.294791° (`rays-not-localized`, maxDev 0.060409). Tele has no RI refusal, with peak maxDev 0.010524.
At 52.911500°, meridional pupil y=-0.95 crosses 16A at 9.89 mm and reaches the image 3.976 mm from the chief;
at 49.971972°, y=-0.98 crosses 16A at 9.55 mm and misses by 1.812 mm. Both are below the 11A cap.
The tab's wide endpoint (55.85°) exceeds the source's 53.5677°, but both failed wide fields are within it.

Coordinator follow-up: retain the localization issue as open; investigate source-supported effective apertures or the
peripheral trace/aiming model before claiming RI. Do not apply a static 16A/17A turnover cap that loses the stated
aperture. Full gates and any shared-engine or queue changes remain coordinator work under this assignment's scope.
