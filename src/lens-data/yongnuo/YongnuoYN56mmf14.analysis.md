## Patent Reference and Design Identification

**Patent:** [CN 220171327 U](https://patents.google.com/patent/CN220171327U/en)
**Filed:** 2023-06-08
**Published:** 2023-12-12
**Inventors:** Ying Zhuang, Yuanhua Ye, Yongsheng Zhuang, Yongxiao Zhuang
**Assignee:** Shenzhen Yongnuo Electric Appliance Co., Ltd. (深圳市永诺电器有限公司)
**Title:** A medium-telephoto internal-focusing imaging lens
**Example details:** Tables 1–2, Figures 1–3, printed pages 5–9. Unscaled millimetres.

This is a qualified patent-associated model of the YONGNUO YN 56mm f/1.4 S DA DSM WL PRO, not a certified production prescription. The maker association, 56 mm f/1.4 specification, 10-element/9-group construction, inner-focus topology and timing converge. The patent does not name a retail SKU. The [manufacturer page](https://th.hkyongnuo.com/products/56mmf14) is product evidence rather than proof that every numerical surface matches production.

There is a material source contradiction: the header says 56 mm f/1.4, Table 2 says 58.066 mm at infinity, and Figure 2 labels entrance-pupil radius 19.4398 mm. The literal rounded table computes 58.095754 mm, implying f/1.494248 with that pupil. The modeled stop diameter is therefore 22.991204 mm, **derived** from the figure pupil and front-group paraxial magnification, not a printed mechanical iris dimension. It is not enlarged to force f/1.4. The source's 25.52° full field is declared explicitly; the slightly larger generic APS-C corner lies outside that source field.

## Optical Architecture

Ten spherical elements form nine air-separated groups, with one L4/L5 cemented doublet. Three mechanical groups carry positive net power: front GR1 (L1–L5), moving GR2 (L6–L7), and fixed rear GR3 (L8–L10). The stop is explicitly source S10 between GR1 and GR2. The source skips S11; no extra surface has been invented. The two-millimetre camera-side plate S22–S23 is preserved through rearPlates with its original 11.5 mm preceding gap and 1 mm gap to the image.

## Element-by-Element Analysis

### L1 — Positive Meniscus
nd = 1.847, νd = 23.79. Glass: unidentified patent glass. The first positive element collects the large entrance bundle; its high dispersion contributes to the chromatic balance of GR1.

### L2 — Biconcave Negative
nd = 1.603, νd = 38.00. Glass: unidentified patent glass. The weakly concave front and strongly concave rear supply negative power ahead of the main positive collector.

### L3 — Positive Meniscus
nd = 1.883, νd = 39.23. Glass: unidentified patent glass. Strong front curvature and nearly planar rear curvature provide positive power at high index.

### L4/L5 — Cemented Positive/Negative Doublet
L4: nd = 1.569, νd = 71.31. L5: nd = 1.847, νd = 23.79. Glasses: unidentified patent values. The positive, lower-dispersion element and negative, higher-dispersion partner share S8. Their chromatic opposition supports correction of the fast front group. No catalog identity or anomalous partial dispersion is claimed.

### L6 — Negative Meniscus
nd = 1.438, νd = 94.58. Glass: unidentified very-low-dispersion patent glass. This is the negative member of the translating focus pair. Its unusual rounded constants are retained without substitution.

### L7 — Biconvex Positive
nd = 1.883, νd = 40.79. Glass: unidentified patent glass. Symmetric radii of ±65.85 mm provide the positive member of GR2, which moves as one unit with L6.

### L8 — Biconvex Positive
nd = 1.835, νd = 42.73. Glass: unidentified patent glass. The near-flat front and curved rear add positive power in the stationary rear group.

### L9 — Biconcave Negative
nd = 1.620, νd = 36.33. Glass: unidentified patent glass. This thin negative element redistributes rear-group power and contributes field correction; this functional interpretation is not a measured manufacturing specification.

### L10 — Biconvex Positive
nd = 1.883, νd = 39.23. Glass: unidentified patent glass. The final positive element balances L9 and delivers the beam to the sensor-side plate.

## Glass Identification and Selection

Only rounded d-line indices (three decimals) and Abbe numbers are published. No named catalog glass, melt data, measured C/F/g indices or Sellmeier coefficients are available. The model intentionally retains these rounded constants. Any multicolour engine result relies on estimated dispersion and cannot establish real secondary spectrum or colour-fringe magnitude. The plate likewise uses the printed 1.517 / 64.2, not an asserted exact BK7 catalog match.

## Focus Mechanism

GR2 translates 6.785 mm objectward, while GR1, GR3 and the sensor remain stationary. D10/D15 are 12.688/2.500 mm at infinity, 9.460/5.728 mm at X20 and 5.903/9.285 mm at MOD. Their sum remains 15.188 mm. Table 2 prints object distances 1127.602 and 505 mm. These are interpreted as object-to-first-surface distances under the sequential prescription convention; the approximate MOD object-to-image distance is 600 mm. Intermediate slider positions interpolate mechanical travel and are not additional source-certified conjugates.

The source EFL drops from 58.066 to 54.687 mm, about 5.8%, across the focus range. This is a focal-length-change indicator, not a complete measured video breathing specification. Literal rounded-index paraxial focus is 0.032832 mm behind the authored infinity image plane; that plane is preserved rather than optimized silently.

## Apertures, Validation and Practical Qualification

Surface semi-diameters are **inferred**, not tabulated: front pairs 20/20 mm, L3 19 mm, L4/L5 16 mm, L6 12.5 mm, L7/L8 13 mm, L9 12.5 mm and L10 14 mm. Figure 1 provides approximate relative sizes, while source-pupil and exact-ray checks provide physical tests. Default geometry limits are retained, including 90% gap-sag allowance. No radius, thickness, index, focus gap or image plane is changed to improve a score. Inferred apertures make off-axis throughput model-dependent.

Independent [practical testing by Dustin Abbott](https://dustinabbott.net/2025/03/yongnuo-yn-56mm-f1-4s-da-dsm-wl-pro-review/) reports useful wide-open performance and excellent stopped-down sharpness, qualified by conspicuous high-contrast/axial fringing, low magnification and visible focus breathing. Those observations concern the commercial product. They are not validation of this patent model, and computed MTF at the literal image plane must not be presented as measured factory performance.
