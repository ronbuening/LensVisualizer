# Source and geometry audit

Literal source rows, stop and three physical focus states retained. Rear plate is explicit. Source image plane unchanged. All semi-diameters are preliminary estimates from the inspected patent figure, not printed dimensions; no tracing or performance claim has yet been made. Source plot pupil radius 11.1999 mm sets derived f/1.45702, independently of marketing f/1.4. Printed surface 11 is absent but no physical surface is missing. Full field 46.8 degrees is provisional APS-C coverage inference, not a patent quote.

## Initial native geometry check and authorized inferred-rim refinement

Initial figure estimates failed native geometry checks before aperture tracing. Refinement initially remained blocked through two denied attempts, neither executed; explicit user approval subsequently allowed the local refinement. No primary optical values were repaired. The preliminary rims were reduced at the unchanged default gap and edge rules while retaining equal-height connected glass contours. These remain modeling assumptions, not factory dimensions; clipping and vignetting depend on them. Native revalidation is pending.

Surface | Initial inferred sd (mm) | Refined inferred sd (mm)
--- | ---: | ---:
3 | 15.5 | 14.926
4 | 15.5 | 14.926
5 | 16.5 | 14.926
6 | 16.5 | 14.926
7 | 16.5 | 14.926

## Native optical results

Geometry passes and zero hidden render trim at INF, X20 and MOD. Source pupil 11.1999 mm gives iris-limited f/1.457011934. Infinity diffraction center/half/95%-field converges at wide open and f/4; geometric wide-open95%-field remains unconverged at all three states (grid64), explicitly retained. Finite diffraction not run. Source image remains z95 mm; independent paraxial residual shifts are+0.061687,+0.096270,+0.141078 mm. Full evidence: local-validation/validation33.json and validate33.mjs.

## 2026-11-09 — Deployment validation

Independent check against CN 220137479 U (PDF pp. 6–7): 21 surfaces, the stop, the rear plate, 11 nd/νd pairs, both
variable gaps at three states and both object distances agree; all spherical. Engine EFL 32.637 (printed 32.620),
TL 95.000, magnification 0.0965 at 0.40 m; all four conditional expressions reproduce. Front page: 深圳市永诺电器有限公司,
inventors Zhuang Ying, Ye Yuanhua, Zhuang Yongsheng, Zhuang Yongxiao. Attribution strong: Yongnuo's 2026 catalog
lists E and Z mounts, APS-C, 11 elements / 9 groups, 0.4 m, 0.1×, and low-dispersion plus high-index glass, which
the example's two nd 1.593 and four high-index elements match.

Deployment change: `projection.fullFieldDeg` → 48.74, the printed 2ω (para. 0051); `focalLengthMm.design` → 32.62
(Table 2); `catalog.lensMounts` ["sony-fe", "nikon-z"] from the maker catalog.

Open: the analysis text still calls 46.8° unprinted; wording.
