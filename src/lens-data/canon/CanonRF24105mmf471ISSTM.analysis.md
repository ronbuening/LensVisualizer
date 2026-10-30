# CANON RF 24-105mm f/4-7.1 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2021/0003831 A1\
**Application Number:** US 16/915,088\
**Priority:** July 3, 2019 — JP 2019-124849\
**Filed:** June 29, 2020\
**Published:** January 7, 2021\
**Inventor:** Yasuaki Hagiwara\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** Zoom Lens and Image Pickup Apparatus\
**Example details:** Numerical Example 1

The prescription is the user-selected production correlation for the **CANON RF 24-105mm f/4-7.1 IS STM**. The patent itself does not name that commercial product, so the identification is a correlation based on convergent optical and chronological evidence rather than a manufacturer statement linking the product to this patent.

1. Numerical Example 1 contains 13 active photographic elements in 11 air-separated groups, while Canon specifies the production lens as 13 elements in 11 groups.
2. The patent publishes 24.72, 66.67, and 101.85 mm infinity-focus zoom states with maximum f-numbers of 4.11, 6.18, and 7.31. Canon markets the production lens as 24–105 mm f/4–7.1. The data file keeps the marketed and design quantities separate.
3. Numerical Example 1 uses one lens with two aspherical surfaces. Canon specifies one aspherical lens in the production construction.
4. The patent assigns image stabilization to the positive B3B subunit and axial focusing to the negative fourth lens unit B4. Canon specifies optical IS and a lead-screw STM focus drive for the production lens.
5. The patent priority date precedes Canon's February 12, 2020 product announcement, while the US publication followed in January 2021.

Canon's production specifications also establish the RF mount, full-frame EOS R system, seven-blade diaphragm, 67 mm filter size, and the product's close-focus ranges. Those are product facts rather than prescription values and are not used to overwrite the patent's exact design data.

## Optical Architecture

Example 1 is a six-lens-unit zoom with the principal power sequence **positive B1 — negative B2 — positive B3 — negative B4 — negative B5 — positive B6**. The positive third unit is itself divided into three positive subunits, B3A, B3B, and B3C. The aperture stop lies between B3A and B3B. In the data model this corresponds to 13 glass elements in 11 air-separated groups, while the patent's six “lens units” describe the moving zoom architecture rather than the physical group count.

The patent states that all six lens units move during zooming and that the distances between adjacent units change. B3B moves substantially orthogonal to the optical axis for image stabilization, while B4 moves axially for focusing. The centered data file models the three published infinity-focus zoom states; it does not invent a finite-focus state or a decentered IS state.

The independently recomputed Gaussian focal lengths from the final arrays are **24.721164 mm**, **66.700334 mm**, and **101.867735 mm**, giving a zoom ratio of **4.120669**. The corresponding authored wide-open design f-numbers are the patent values **f/4.11**, **f/6.18**, and **f/7.31**. These design quantities are distinct from the marketed 24–105 mm f/4–7.1 designation.

The architecture is not labeled “telephoto” or “retrofocus” under the project definitions. At each published state the total optical track divided by EFL remains at least one, and the back focal distance remains shorter than the EFL.

The patent's rear `GB` block is not treated as a photographic lens element. Paragraph ¶0026 identifies `GB` as an optical block corresponding to a filter, face plate, low-pass filter, infrared-cutting filter, or similar plate. The data model therefore keeps patent surfaces 26–27 out of the drawn lens and models them in `rearPlates`: the 1.50 mm GB block (nd 1.51633, νd 64.1, S-BSL7 class) followed by the 1.12 mm d27 gap to the image. It is traced by every analysis but not drawn. Surface 25 stores the patent d25 gap to GB, **11.12 mm**, **34.65 mm**, and **35.56 mm** at wide, middle, and telephoto. Paraxially this equals the air-equivalent surface-25-to-image distances d25 + 1.50/1.51633 + 1.12 = **13.229231 mm**, **36.759231 mm**, and **37.669231 mm**; the physical track includes the block and is 1.50 × (1 − 1/1.51633) = 0.511 mm longer than that air-equivalent sum.

Example 1 does not publish clear apertures. The surface semi-diameters in the data file are therefore modeling inferences, constrained by native Figure 1 optical rims, positive edge thickness, actual rim slope and shared-gap clearance. Earlier ray-derived floors remain dated in the audit; the current measurement changes are recorded below, independently of the marketed filter size. They should not be read as patent-listed mechanical dimensions.

No uniform scaling is applied. Radii, thicknesses, image-space distances, and the aspherical coefficients remain at the native Numerical Example 1 scale.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air unless a cemented or functional-unit value is explicitly identified. They are useful descriptors of each element's isolated sign and strength, but they are not additive contributions to the assembled zoom's EFL. In the actual zoom, ray height and reduced angle at each unit vary with zoom spacing, so the in-situ action of a unit is conjugate- and state-dependent.

### L1 — Positive Meniscus, B1

**nd = 1.60311, νd = 60.6. Qualified coordinate comparison: 603606 SK14-class (vendor unresolved). f = +108.480453 mm.**

L1 is the only element in the first positive zoom unit B1. Its standalone focal length therefore also describes the air-bounded B1 unit to source precision. B1 is one of the six units that move during zooming.

The glass label is a coordinate-class description rather than a production-vendor attribution. Multiple public catalogs contain close or exact equivalents at this `nd`/`νd` coordinate.

### L2 — Negative Meniscus, B2

**nd = 1.90366, νd = 31.3. Qualified coordinate comparison: 904313 class (vendor unresolved). f = −20.029324 mm.**

L2 supplies strong negative power at the front of B2. Its high refractive index and comparatively low Abbe number are source prescription facts; the data file does not assert a particular catalog melt.

### L3 — Biconcave Negative, B2

**nd = 1.60311, νd = 60.6. Qualified coordinate comparison: 603606 SK14-class (vendor unresolved). f = −37.156145 mm.**

L3 adds a second negative component inside B2. Its use of the higher-Abbe 603606 coordinate contrasts with the lower-Abbe L2 and L4 materials, but the patent provides no partial-dispersion data from which a secondary-spectrum claim could be made.

### L4 — Positive Meniscus, B2

**nd = 1.84666, νd = 23.9. Qualified coordinate comparison: 847239 class (vendor unresolved). f = +34.151341 mm.**

L4 is the positive rear element of the otherwise negative second unit. The complete B2 assembly has a verified air-bounded focal length of **−21.324965 mm**. That net value is not the arithmetic sum of the three standalone element powers; surface separations and refractive transitions matter.

The negative B2 unit is the strong diverging section immediately behind the positive B1 front unit, providing the principal magnification-changing counter-power in the front half of the zoom.

### L5 — Plano-Convex Positive, B3A

**nd = 1.90366, νd = 31.3. Qualified coordinate comparison: 904313 class (vendor unresolved). f = +28.275015 mm.**

L5 is the leading positive element of B3A. The patent places B3A on the object side of the diaphragm and describes strong positive power in this subunit as a means of keeping the following image-stabilizing B3B subunit relatively small (¶0031).

### L6 — Biconvex Positive, B3A Cemented Pair

**nd = 1.60311, νd = 60.6. Qualified coordinate comparison: 603606 SK14-class (vendor unresolved). f = +20.158387 mm.**

L6 is the positive component of cemented pair `B3A-D1`. Its rear surface is the cemented interface to L7; the interface therefore carries the downstream L7 material in the prescription.

### L7 — Biconcave Negative, B3A Cemented Pair

**nd = 1.90366, νd = 31.3. Qualified coordinate comparison: 904313 class (vendor unresolved). f = −11.913397 mm.**

L7 is the negative component of `B3A-D1`. Although L6 is individually positive and L7 individually negative, the **cemented L6+L7 pair is net negative, f = −40.504393 mm** when treated as an isolated cemented assembly in air. With the preceding L5 and the actual internal spacings, the complete B3A subunit is net positive at **+49.846294 mm**.

This distinction is important: standalone element power, cemented-pair net power, and the in-situ contribution of B3A to the moving zoom are three different quantities.

### L8 — Negative Meniscus, B3B Image-Stabilizing Doublet

**nd = 1.91082, νd = 35.3. Qualified coordinate comparison: 911353 class (vendor unresolved). f = −38.055897 mm.**

L8 is the negative component of the cemented B3B image-stabilizing subunit. The patent requires B3B to contain at least one negative and one positive lens and states that this arrangement assists chromatic correction while the subunit is displaced for stabilization (¶0032).

### L9 — Biconvex Positive, B3B Image-Stabilizing Doublet

**nd = 1.60311, νd = 60.6. Qualified coordinate comparison: 603606 SK14-class (vendor unresolved). f = +18.706681 mm.**

L9 is the positive partner cemented to L8. The complete L8+L9 doublet is **net positive at +36.878297 mm**, despite the negative sign of L8's standalone power. The patent additionally notes that cementing the negative and positive components can suppress axial misalignment during assembly (¶0053).

B3B is the only subunit assigned the transverse image-stabilization motion. Its optical role therefore cannot be inferred from either standalone focal length alone; the positive cemented-unit power is the relevant first-order descriptor of the movable subunit.

### L10 — Plano-Convex Positive, B3C

**nd = 1.60311, νd = 60.6. Qualified coordinate comparison: 603606 SK14-class (vendor unresolved). f = +51.123344 mm.**

L10 is the single element forming B3C. The patent describes B3C as a positive subunit used to adjust the power required of B3B (¶0031), and later notes that a single-lens B3C is advantageous because this region lies between mechanisms associated with stabilization and focusing (¶0056).

The verified B3C focal length agrees with the patent Table 1 value to less than 0.00002 mm at the rounded prescription precision.

### L11 — Negative Meniscus, B4 Focus Unit

**nd = 1.91082, νd = 35.3. Qualified coordinate comparison: 911353 class (vendor unresolved). f = −31.637406 mm.**

L11 is the entire fourth lens unit B4 and is the axial focus unit identified in Example 1 (¶0065). The patent's broader design discussion places a small negative focusing lens on the image side of B3C, where the off-axis ray height is relatively low, to reduce the size of the focus lens and its drive mechanism (¶0047).

The data file preserves this mechanism identification but does not reconstruct any finite-focus position.

### L12 — Negative Meniscus with Two Aspherical Surfaces, B5

**nd = 1.53110, νd = 55.9. Qualified coordinate comparison: Unmatched (1.53110/55.9; no exact public catalog match). f = −103.732250 mm.**

L12 is the single negative fifth unit B5 and carries both modeled aspherical surfaces, `22A` and `23A`. It is the second lens counted from the image side, matching the patent's discussion of placing an aspherical lens in this location to correct field curvature (¶0054–¶0055).

No public catalog glass was adopted for the 1.53110/55.9 coordinate. Consequently the data file does not attach vendor Sellmeier data or inferred line indices to L12.

### L13 — Biconvex Positive, B6

**nd = 1.84666, νd = 23.9. Qualified coordinate comparison: 847239 class (vendor unresolved). f = +76.673936 mm.**

L13 is the single positive rear unit B6. The patent discusses a positive lens unit nearest the image as a means of making off-axis light incident on an electronic image sensor closer to normal incidence (¶0049–¶0051). Example 1 follows that arrangement.

B6 precedes the rear image-space interval that holds the patent's `GB` plate, modeled in `rearPlates`. The positive rear unit's standalone focal length is distinct from the final image-space back focus of the complete zoom.

## Glass Identification and Selection

The patent provides d-line refractive index and Abbe number but no glass-maker names. The data file therefore uses coordinate-class labels where public catalogs contain multiple plausible equivalents and an explicit `Unmatched` label where no exact public catalog identity is defensible.

| Data-file glass label                                   |      nd |   νd | Elements            | Identification status                                                                   |
| ------------------------------------------------------- | ------: | ---: | ------------------- | --------------------------------------------------------------------------------------- |
| 603606 SK14-class (vendor unresolved)                   | 1.60311 | 60.6 | L1, L3, L6, L9, L10 | Cross-vendor SK14-class coordinate; production vendor not established                   |
| 904313 class (vendor unresolved)                        | 1.90366 | 31.3 | L2, L5, L7          | Multiple close/exact high-index catalog equivalents; vendor unresolved                  |
| 847239 class (vendor unresolved)                        | 1.84666 | 23.9 | L4, L13             | Dense-flint coordinate with several cross-vendor equivalents; vendor unresolved         |
| 911353 class (vendor unresolved)                        | 1.91082 | 35.3 | L8, L11             | Exact/near public equivalents exist, but the patent does not identify the melt supplier |
| Unmatched (1.53110/55.9; no exact public catalog match) | 1.53110 | 55.9 | L12                 | No exact public-catalog identity adopted                                                |

The patent coordinates were compared against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog data. For example, the 1.60311/60.6 coordinate is reproduced by several SK14-family glasses, while the 1.90366/31.3 and 1.84666/23.9 coordinates likewise have multiple plausible cross-vendor equivalents. These equivalences support coordinate-compatible spectral proxies; they do not establish historical chemistry, supplier or melt.

No element in the final data carries `nC`, `nF`, `ng`, or `dPgF`, and every element is explicitly non-APD in the authored model. The patent's `nd`/`νd` data are therefore insufficient to support an apochromatic or anomalous-partial-dispersion claim. Chromatic statements in this analysis are limited to what the patent explicitly says about the negative/positive B3B pair during stabilization.

## Focus Mechanism

The patent identifies B4/L11 as a single negative internal focus unit. Example 1 states that focusing is performed by moving the fourth negative lens unit along the optical axis (¶0065). At the three published infinity-focus zoom states, the air gaps immediately before and after B4 are:

| Zoom state | D19 before B4 (mm) | D21 after B4 (mm) | D19 + D21 (mm) |
| ---------- | -----------------: | ----------------: | -------------: |
| Wide       |               2.50 |             15.04 |          17.54 |
| Middle     |               3.87 |             13.66 |          17.53 |
| Telephoto  |               4.03 |             13.50 |          17.53 |

The near conservation of the adjacent-gap sum is consistent with a translating B4 unit inside a nearly fixed local envelope. It does not determine the close-focus displacement, because the patent publishes no finite-object spacing row, object distance, focus travel, or close-focus magnification for Numerical Example 1.

The data status is therefore **NO_INTERNAL_RECONSTRUCTION**. Every authored infinity/close pair is identical, so the LensVisualizer focus state does not invent internal motion that the patent does not publish.

Canon's production specification gives a minimum focusing distance of 0.20–0.34 m during autofocus and 0.13–0.34 m during manual focus, with 0.5× maximum magnification at 24 mm in Center Focus Macro. The data file retains **0.13 m** only because `closeFocusM` is required product metadata. It is not used to solve a patent close-focus prescription. Canon also specifies a lead-screw STM drive, but the patent does not identify that commercial actuator.

## Aspherical Surfaces

L12/B5 is the only aspherical element, with both its front and rear surfaces aspherical (`22A` and `23A`). This agrees with Canon's production specification of one aspherical lens while preserving the patent's two-surface description.

The patent defines the sag using the standard conic form

$$
X(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

Accordingly, the patent's tabulated `k` is used directly as LensVisualizer's standard conic constant `K`; no `K = k - 1` conversion is made. Both surfaces have `K = 0`, so the conic base is spherical and the departure comes from the even polynomial terms.

| Surface |   K |          A4 |          A6 |          A8 |          A10 |          A12 |
| ------- | --: | ----------: | ----------: | ----------: | -----------: | -----------: |
| 22A     |   0 | −1.57463e−4 | +1.04871e−6 | −1.26019e−9 | −4.88195e−11 | +2.09933e−13 |
| 23A     |   0 | −1.45140e−4 | +1.09597e−6 | −5.39275e−9 | +6.43335e−12 | +1.24146e−14 |

The data file retains explicit zero A14 placeholders on both surfaces; the patent's printed series ends at A12.

Because no scaling is applied, these coefficients remain at their native patent scale. No coefficient transformation is required.

The patent does not publish the clear aperture of the aspherical element. The asphere departures are therefore evaluated only at the verified authored semi-diameters. At **h = 11.9 mm** on `22A`, the modeled sag is **−1.773518 mm** more negative than the spherical base. At **h = 12.8 mm** on `23A`, the departure is **−1.962182 mm**. These are model departures at inferred, geometry-validated semi-diameters, not patent-listed edge departures.

The patent states that an aspherical second lens from the image side is effective for field-curvature correction (¶0054). It does not establish whether the production asphere is molded glass, polished glass, resin-composite, or another manufacturing form, so no manufacturing method is assigned here.

## Image Stabilization

B3B is the positive cemented L8/L9 subunit immediately behind the aperture stop. The patent specifies that B3B moves in a direction having a component orthogonal to the optical axis during image stabilization (¶0030), and Example 1's lateral-aberration diagrams show the design with an image-stabilization tilt equivalent of about **0.3°** (¶0065; Figures 3A–3C).

The optical composition of B3B is significant. L8 is individually negative (**−38.055897 mm**) and L9 individually positive (**+18.706681 mm**), but the cemented assembly is net positive (**+36.878297 mm**). The patent explains that the negative-plus-positive construction helps control chromatic aberration when the stabilizing subunit is displaced (¶0032), while cementing the pair reduces sensitivity to axial assembly misalignment (¶0053).

B3A ahead of the stop is also strongly positive, and the patent explicitly links that positive power to keeping the following stabilizing group compact (¶0031). B3C behind B3B is another positive single-lens subunit used to adjust the power demanded of B3B.

The current data file represents the centered nominal prescription only. It records B3B's IS identity in the element and group annotations but does not author a decentered image-stabilization state or a 0.3° off-axis mechanism control. The 0.3° value is therefore a patent analysis condition, not a modeled slider state.

## Conditional Expressions

US 2021/0003831 A1 gives nine design conditions and Table 1 reports their values for Numerical Example 1. Recalculation from the final prescription reproduces eight of the nine rows to source precision. Condition (3) is internally contradictory in the patent and is left unresolved rather than silently repaired.

| Condition | Printed expression        | Recomputed Example 1 |      Table 1 | Result               |
| --------: | ------------------------- | -------------------: | -----------: | -------------------- |
|       (1) | $f_3/\lvert f_2\rvert$    |             1.025569 |     1.025564 | Reproduced           |
|       (2) | $f_3/f_w$                 |             0.884676 |     0.884682 | Reproduced           |
|       (3) | $f_{3A}/\lvert f_2\rvert$ |         **2.337462** | **0.975073** | Source contradiction |
|       (4) | $f_{3B}/f_{3C}$           |             0.721359 |     0.721330 | Reproduced           |
|       (5) | $f_{3B}/\lvert f_2\rvert$ |             1.729349 |     1.729340 | Reproduced           |
|       (6) | $f_1/f_t$                 |             1.064915 |     1.065086 | Reproduced           |
|       (7) | $f_1/\lvert f_2\rvert$    |             5.087017 |     5.087157 | Reproduced           |
|       (8) | $f_f/f_2$                 |             1.483585 |     1.483695 | Reproduced           |
|       (9) | $f_1/f_r$                 |             1.414828 |     1.414816 | Reproduced           |

For condition (3), the verified B3A and B2 focal lengths give `49.846294 / 21.324965 = 2.337462`, not 0.975073. The Table 1 number instead closely matches $\lvert f_2\rvert/f_3$; for Example 1 that ratio is approximately **0.975069**. The same pattern was found in the Table 1 columns for Numerical Examples 2 and 3. The patent does not establish whether the printed equation/prose or the tabulated calculation is the intended condition, so the data file preserves the prescription and records the conflict without choosing a correction.

A smaller prose error occurs around condition (4): ¶0039 repeats `f3C` when describing the numerator variable, although the printed formula, Table 1, and the numerical result are consistent with `f3B/f3C`. This does not require a prescription change.

## Verification Summary

The final data arrays were independently checked with sequential height/reduced-angle tracing and an ABCD matrix calculation. The two paraxial methods agree to numerical roundoff at all three published zoom states.

| State     | EFL from final arrays (mm) | Patent focal length (mm) | Paraxial BFD, air-equivalent (mm) | Patent BF (mm) |
| --------- | -------------------------: | -----------------------: | --------------------------------: | -------------: |
| Wide      |                  24.721164 |                    24.72 |                         13.231203 |          13.24 |
| Middle    |                  66.700334 |                    66.67 |                         36.805019 |          36.77 |
| Telephoto |                 101.867735 |                   101.85 |                         37.710250 |          37.68 |

The small residuals are consistent with the patent's rounded radii, spacings, and refractive indices. The independently computed field heights from `EFL × tan(half-angle)` are within about 0.007 mm of the published image heights at all three states.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives **0.000945859774 mm⁻¹** for the active prescription. The value is invariant with zoom because the refracting surfaces and glass indices do not change; only the inter-unit spacings change.

The geometry checks use the current semi-diameter policy rather than the obsolete universal radius-ratio rule. Across the three authored zoom states the minimum element thickness remains positive, the maximum actual modeled rim angle is **51.979965°** (surface 4), all conic domains are valid, shared-gap surfaces retain positive clearance, and current sampled pupil transmission is quantified below, including retained clipping. These results validate the authored visualization geometry but do not convert the inferred semi-diameters into patent facts.

## Sources

- **Primary prescription source:** Yasuaki Hagiwara, _Zoom Lens and Image Pickup Apparatus_, US 2021/0003831 A1, published January 7, 2021. Numerical Example 1, Table 1, and especially ¶¶0025–0033, ¶¶0047–0057, ¶¶0062–0065, and ¶¶0078–0083.
- **Canon product specifications:** Canon U.S.A., “RF24-105mm F4-7.1 IS STM,” product/support technical specifications. https://www.usa.canon.com/support/p/rf24-105mm-f4-7-1-is-stm
- **Canon product announcement:** Canon U.S.A., “Adding to your Lens Arsenal: Canon Introduces its New RF 24-105mm STM Standard Zoom Lens,” February 12, 2020. https://www.usa.canon.com/newsroom/2020/20200212-lens
- **OHARA optical-glass data:** https://oharacorp.com/
- **HOYA optical-glass data:** https://www.hoya-opticalworld.com/english/datadownload/index.html
- **SCHOTT Advanced Optics glass data:** https://www.us.schott.com/shop/advanced-optics/en/search/
- **HIKARI / Nikon optical-glass catalogs:** https://www.nikon.com/business/components/lineup/materials/optical-glass/
- **CDGM optical-glass database:** https://www.cdgmgd.com/database/
- **SUMITA optical-glass data:** https://www.sumita-opt.co.jp/en/download/

## 2026-10-30 — Original figure, complete media and runtime review

The actual **2026-09-23** physical rear-plate correction and **2026-09-24** ray-floor audit remain dated in the audit log. Their unchanged R/d, rear-plate and clear-cap conclusions are reused where consistent with the new native-figure comparison. Today's review independently identifies the same A1 original and checks Numerical Example 1, all thirteen active media plus GB, both aspheres, every optical rim/concave end and the two cemented interfaces. No previous note is treated as a new PDF inspection.

US 2021/0003831 A1's front page confirms Hagiwara / Canon, publication January 7, 2021. The complete selected prescription, both aspheres, Various data and zoom gaps are on **PDF page 22 / printed 6**, with its last unit row continuing in the upper right. Paragraphs 0079–0081 on **PDF page 21 / printed 5** define d 587.6 nm, F 486.1 nm and C 656.3 nm, the d-line Abbe formula, air-equivalent BF and standard (1+k) conic. Figure 1 is PDF page 2 / sheet 1; Figures 2A/B on page 3 and 2C on page 4 show f/4.11, f/6.18 and f/7.31. Paragraphs 0062–0065 on PDF page 20 / printed 4 associate the selected section, three infinity studies and 0.3° IS studies; the current model continues to expose centered IS and disabled finite focus only.

The native Figure 1 bitmap is 2560×3300, one bit at 300 ppi. A 600 ppi rendering would be 2× upsampling. The literal physical first-vertex-to-image track is about 107.83 mm, giving about **17.2 pixels/mm** in both directions. Adopted drawing uncertainty is **±0.8 mm**, including undimensioned outline/scale uncertainty. Only optical curves and their resolved outer strokes are measured; the GB bracket, unit labels, motion arrows and stop strokes are excluded. The drawing gives front-element clear caps about 23.9 mm, E2's outer blank about 16.6 with its concave cap about 12.6, and E12's blank about 13.1 with its front curved cap about 11.6.

| Surface | Previous clear sd | Current clear sd | Current outer rim | Disposition                                                                    |
| ------- | ----------------: | ---------------: | ----------------: | ------------------------------------------------------------------------------ |
| 1       |              21.3 |             24.0 |                 — | Restore the native front curve endpoint                                        |
| 2       |              20.7 |             24.0 |                 — | Restore the native rear curve endpoint                                         |
| 4       |              12.6 |             12.6 |              16.2 | Resolved straight shoulder, conservatively anchored to E2's retained front cap |
| 22A     |              11.9 |             11.9 |              12.8 | Resolved front shoulder, anchored to E12's retained rear cap                   |

The two shoulders use `rimExtensionSd` and preserve `sd` as clear aperture. The retained 12.6/11.9 caps agree with the native curve endpoints within uncertainty. Increasing S4 clear sd to 16.2 fails the unchanged 64.2° slope guard (90.0°); increasing S22A clear to 12.8 passes geometry but extends its asphere into the resolved straight outer stroke, so that trial is rejected on source shape. Retaining the old S1/S2 caps misses the native curve height by 2.6/3.2 mm, beyond measurement uncertainty. Other caps remain within that uncertainty or their retained gap/edge constraints; unequal bonded caps are not replaced by equal-height blocks. No cut, bonded-interface land, resin wing or new hybrid layer is added. Every source R/d, both full aspheres, source zoom row, GB thickness/gap, stop model and control is unchanged.

All **14 modeled media** agree with the original printed nd/νd pairs. Twelve active media and GB retain thirteen compatible catalog curves; L12's 1.53110/55.9 medium remains **Unmatched**. The source discusses resin and glass conditionally in paragraph 0054; it does not identify this selected medium's chemistry or manufacturing process. There are no per-lens spectral overrides, printed line-index numbers, partial-dispersion measurements or source APD designations to add or remove. The data labels now explicitly qualify compatible curves as proxies, with supplier, melt and chemistry unresolved. GB's S-BSL7 curve is a compatible proxy for source 1.51633/64.1, not a named source glass.

| Modeled medium      | Source nd / νd | Qualified curve                           |
| ------------------- | -------------- | ----------------------------------------- |
| L1, L3, L6, L9, L10 | 1.60311 / 60.6 | N-SK14                                    |
| L2, L5, L7          | 1.90366 / 31.3 | J-LASFH13                                 |
| L4, L13             | 1.84666 / 23.9 | S-NPH53                                   |
| L8, L11             | 1.91082 / 35.3 | H-ZLaF4LA                                 |
| L12                 | 1.53110 / 55.9 | Unmatched; no inferred catalog dispersion |
| GB rear plate       | 1.51633 / 64.1 | S-BSL7                                    |

Catalog design endpoints now quote the printed **24.72/101.85 mm**, with computed EFLs retained separately above. The example label is normalized to Numerical Example 1. The existing condition-(3) conflict now has a structured unresolved source note: Table 1 on PDF page 23 / printed 7 gives 0.975073 for f3A/|f2|, while its unit values and retained prescription give 2.337462. Claim 3 on PDF page 24 / printed 8 repeats that expression and its range. No unique correction is established; no optical value is fitted to the conditional row.

A diagnostic clone reproduces actual runtime z/sd/current iris at 65 zoom positions exactly. Surface and image-circle checks pass. All **65 aperture-census states** remain within 3% under the existing derived/paraxial iris criterion. The distinct exact aimed-rim metric traces at all 65 states and differs from stated f-number by at most +1.684312%; source-station values are 4.162517/6.284091/7.403576 versus printed 4.11/6.18/7.31. All 650 exact-working calls over 65 positions×10 presets trace, before and after. Current source-station iris radii remain 5.292078/5.551134/5.571398 mm; no unpublished physical schedule is invented.

Format-corner chiefs reach ≥99% at **63/65** positions. The two widest reach 95.157254% / 97.690100%, limited by retained source-shaped S3 and S23A caps; the source wide design Y=19.90 mm remains below the full-frame 21.65 mm corner. At the printed paraxial half-fields 38.84°/17.98°/11.99°, independent bounding-sphere vector launches reach image heights 18.096413/21.563698/21.780284 mm without clipping; paraxial source field labels are distinct from exact distorted chief heights. No source field, asphere or projection is altered to remove that difference.

At each current iris, 193-point pupil bundles cover 65 zooms and four field states. Every sampled axial bundle passes 193/193. At fixed baseline field angles, source-station edge counts change from 24/131/80 to **34/136/110**. Across all fixed-angle field samples, 65 counts improve, 166 are unchanged and 29 decrease by at most five rays as the resolved physical shoulders intercept peripheral paths. The runtime's adaptive edge field also expands at wide: its separately sampled current edge count is 9/193, so it is not an equal-angle before/after comparison. These are sampled geometric transmission results, not production illumination.

Source-station image-plane residuals after the physical GB are +0.001973/+0.045788/+0.041019 mm. Sparse linear zoom interpolation is illustrative: at zoom 0.296875 the calculated EFL is **41.284103 mm** versus displayed 49.627813 mm, with image residual **−4.885587 mm**. Preserve source gaps; no continuous source cam or finite-focus prescription is supplied. Across 65 available states, all **845** SVG element paths are finite, closed and connected, with zero hidden renderer trimming. The rear plate remains traced and hidden from the optical section. Source fidelity, sampled runtime clearance and product correlation remain separate.
