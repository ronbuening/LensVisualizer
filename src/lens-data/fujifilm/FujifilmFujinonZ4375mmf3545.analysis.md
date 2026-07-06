## Patent Reference and Design Identification

**Patent:** US 4,195,912
**Application Number:** US 850,453
**Filed:** November 10, 1977
**Granted:** April 1, 1980
**Priority:** November 11, 1976 (JP 51-135546)
**Inventors:** Yoshikazu Doi; Yutaka Sakai; Kazunori Ohono
**Assignee:** Fuji Photo Optical Co., Ltd., Omiya, Japan
**Title:** Zoom Lens System
**Embodiment analyzed:** Example 2 (Table II, FIG. 4, Claim 4)

The prescription is identified with the Fujinon-Z 43-75mm f/3.5-4.5 standard zoom. Example 2 is the relevant embodiment: it is the first 7-element embodiment in the patent and matches the production lens' 7 elements in 7 air-spaced groups, variable f/3.5-4.5 aperture, and approximately 53° to 32° full field across the zoom range.

The production X-Fujinon-Z 43-75mm f/3.5-4.5 DM is documented as a Fujica X-mount lens introduced with the Fujica X system in 1979, with 7 elements in 7 groups, 49 mm filter thread, six aperture blades, f/3.5-4.5 maximum aperture, and 121 cm measured minimum focusing distance. The M42 Fujinon-Z version is an earlier or parallel variant of the same optical class. The data file uses the patent prescription scaled by 43.0x from the normalized wide focal length rather than forcing the telephoto endpoint to the marketed 75 mm value.

The patent's Table II gives $f_W = 1.0$, $f_T = 1.663$, $l'_W = 1.0785$, $l'_T = 1.4191$, $FN_W = 3.5$, $FN_T = 4.5$, $2\omega_W = 52°$, and $2\omega_T = 33°$. Independent paraxial tracing of the transcribed prescription gives 42.985 mm and 71.474 mm after scaling by 43.0x. The marketed 43-75 mm label is therefore a production designation, not an exact scale target for the patent's telephoto state.

## Optical Architecture

The design is a two-group mechanically compensated SLR standard zoom. The front group A has negative power and the rear group B has positive power. The wide-angle side is retrofocus in the practical SLR sense: the scaled wide back focal distance is about 46.35 mm, slightly longer than the 42.985 mm computed wide EFL. The telephoto state is not a telephoto construction by the usual total-length-to-EFL criterion.

Group A consists of three air-spaced elements: a negative meniscus L1 convex to the object, a weak negative meniscus L2 convex to the object, and a positive L3 whose more strongly curved face is toward the object. Its computed focal length is $f_A = -2.0956$ normalized, or -90.11 mm after scaling.

Group B consists of four air-spaced elements: two positive meniscus elements L4 and L5, a negative meniscus L6 whose stronger surface is the rear face, and a symmetric biconvex positive L7. Its computed focal length is $f_B = +1.0763$ normalized, or +46.28 mm after scaling.

During zooming from wide to tele, the inter-group separation $d_6$ decreases from 0.92311 to 0.02373 normalized. The relative group separation therefore collapses by 0.89938 normalized, or 38.67 mm after scaling. Since the patent back focal distance increases by 0.34060 normalized, a fixed-image-plane decomposition corresponds to about 24.03 mm imageward travel of group A and 14.65 mm objectward travel of group B. The front-to-image optical track shortens from 123.57 mm to 99.54 mm at the same scale.

The patent does not publish an aperture-stop coordinate. The data file inserts a rendering stop in the variable inter-group gap and divides $d_6$ equally on each side of the stop at both zoom positions. This preserves the patent's total inter-group separation but should not be read as a patent-stated iris location.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

$nd = 1.68893$, $\nu_d = 31.1$. Glass: S-TIM28 / 689311 dense-flint equivalent (OHARA current catalog match; vendor not patent-disclosed). $f = -46.89$ mm.

L1 supplies the first strong negative power in the retrofocus front group. Its rear surface $r_2 = 0.58955$ is the controlled concave surface in condition (2), which the patent ties to coma and astigmatism correction at the wide-angle end. The front surface is much weaker than the rear surface, so the element behaves as a steep negative meniscus rather than as a balanced biconcave element.

The Abbe number is low for a first negative element. In this front group the usual achromatizing relation is inverted: the positive L3 is also low-Abbe glass, because the group as a whole has negative power and must be independently achromatized.

### L2 - Weak Negative Meniscus, convex to object

$nd = 1.62299$, $\nu_d = 58.1$. Glass: BACD15 / 623581 barium-crown equivalent (HOYA catalog match; vendor not patent-disclosed). $f = -75.42$ mm.

L2 is absent from Example 1 and appears in Examples 2 through 5. It adds weak negative power between L1 and L3 while maintaining a relatively high Abbe number. The front surface $r_3 = 12.6753$ is nearly flat in this normalized system, while $r_4 = 1.00509$ carries most of the element's power.

The element's main role is best read as front-group balancing rather than as a primary power element. It reduces the burden on L1 while allowing the group's chromatic condition to be met with the low-Abbe positive L3.

### L3 - Positive Lens, stronger curvature to object

$nd = 1.68893$, $\nu_d = 31.1$. Glass: S-TIM28 / 689311 dense-flint equivalent (OHARA current catalog match; vendor not patent-disclosed). $f = +45.24$ mm.

L3 is the positive element that achromatizes the negative front group. The patent explicitly requires $\nu_3 < 40$ because group A has negative net power and must be achromatic independently. This is the opposite of the common crown-positive/flint-negative achromat pattern in a positive lens group.

Table II gives the front surface as $r_5 = 0.73126$. This surface satisfies condition (3), which the patent links to spherical-aberration correction at the long focal-length side. The rear surface $r_6 = -76.0507$ is extremely weak, so the element is close to plano-convex in power distribution.

### L4 - Positive Meniscus, convex to object

$nd = 1.6968$, $\nu_d = 55.6$. Glass: S-LAL14 / 697556 lanthanum-crown equivalent (vendor not patent-disclosed). $f = +44.92$ mm.

L4 begins the positive rear group. It is a high-index, moderate-dispersion positive meniscus whose strongly curved front surface supplies most of the element power. The weak positive rear surface moderates spherical contribution and helps maintain a compact rear group without resorting to cemented components.

### L5 - Positive Meniscus, convex to object

$nd = 1.6779$, $\nu_d = 55.5$. Glass: 678555 lanthanum-crown equivalent, LAK12/LAC12 class (vendor not patent-disclosed). $f = +54.77$ mm.

L5 continues the positive power of group B and is governed by condition (4), $0.4 < r_9 < 0.6$. The patent states that rays are farthest from the optical axis at this face, making $r_9$ important for spherical-aberration balance.

The element is weaker than L4, but it works at a high ray height and therefore has disproportionate leverage over aberration correction. Its crown-like Abbe number also counterbalances the lower-Abbe negative L6 and positive L7 later in the rear group.

### L6 - Negative Meniscus, convex to object

$nd = 1.80518$, $\nu_d = 25.5$. Glass: FD60 / SF6-class 805255 dense flint equivalent (HOYA/SCHOTT-class match; vendor not patent-disclosed). $f = -20.23$ mm.

L6 is the strongest individual element in the system by standalone focal length. Its front surface is very weak, while its rear surface $r_{12} = 0.36622$ is strongly curved. The patent's condition (5), $0.3 < r_{12} < 0.55$, bounds this rear-surface divergence to balance astigmatism and coma.

The very low Abbe number supplies the rear group's main chromatic counterweight to the two lanthanum-crown positive menisci. Because L6 is air-spaced from both L5 and L7, its aberration contribution remains separately adjustable through the adjacent air gaps.

### L7 - Symmetric Biconvex Positive

$nd = 1.6668$, $\nu_d = 33.1$. Glass: H-ZF39 / 667331 dense-flint equivalent (CDGM catalog-equivalent; vendor uncertain). $f = +46.91$ mm.

L7 closes the system as a symmetric biconvex positive element with $r_{13} = +1.43044$ and $r_{14} = -1.43044$. Its shape minimizes odd aberration contribution relative to a strongly bent final element, while its moderate flint dispersion continues the rear group's chromatic balance.

The catalog identification is limited to the six-digit 667331 glass-code class. Modern CDGM H-ZF39 matches the class and now provides coefficient-backed dispersion, but it does not prove the original Fuji production melt.

## Glass Identification and Selection

The patent provides only $nd$ and $\nu_d$, not commercial glass names. The following table therefore gives catalog equivalents or glass-code classes, not asserted historical melt identities.

| Element | $nd$ | $\nu_d$ | Catalog-equivalent identification | Role |
|---|---:|---:|---|---|
| L1, L3 | 1.68893 | 31.1 | S-TIM28 / 689311 dense flint equivalent | Low-Abbe front-group pair; L3 required by condition (6) |
| L2 | 1.62299 | 58.1 | BACD15 / 623581 barium-crown equivalent | Weak high-Abbe negative corrector in group A |
| L4 | 1.6968 | 55.6 | S-LAL14 / 697556 lanthanum-crown equivalent | First positive collector in group B |
| L5 | 1.6779 | 55.5 | 678555 lanthanum-crown equivalent, LAK12/LAC12 class | High-ray-height positive corrector in group B |
| L6 | 1.80518 | 25.5 | FD60 / SF6-class 805255 dense flint equivalent | Strong negative chromatic counterweight in group B |
| L7 | 1.6668 | 33.1 | H-ZF39 / 667331 dense-flint equivalent | Final positive element and additional rear-group flint |

No ED, fluorite, or anomalous-partial-dispersion glass is indicated by the patent. The correction strategy is ordinary achromatization within each independently moving group. The unusual feature is not exotic glass but the use of a low-Abbe positive L3 to achromatize a negative front group.

## Focus Mechanism

The patent gives only the infinity zoom prescription. It does not publish close-focus spacings, magnification curves, or a separate focusing-group prescription.

Production information indicates a manual one-ring push-pull zoom and twist-focus mechanism, with the front section rotating during focus and a measured minimum focusing distance of about 1.21 m. The data file records the production close-focus distance as metadata but does not synthesize an unverified close-focus optical state; its variable spacings model zoom only.

## Conditional Expressions

The patent states six normalized conditions. Example 2 satisfies all of them.

| Condition | Expression | Verified Example 2 value | Status |
|---|---|---:|---|
| (1) | $-2.3 < f_A < -1.5$ | -2.0956 | Satisfied |
| (2) | $0.45 < r_2 < 0.65$ | 0.58955 | Satisfied |
| (3) | $0.5 < r_5 < 1.0$ | 0.73126 | Satisfied |
| (4) | $0.4 < r_9 < 0.6$ | 0.47139 | Satisfied |
| (5) | $0.3 < r_{12} < 0.55$ | 0.36622 | Satisfied |
| (6) | $\nu_3 < 40$ | 31.1 | Satisfied |

## Verification Summary

Independent paraxial tracing was re-run from the patent prescription, using the exact Table II surface sequence and the corrected $r_5 = 0.73126$ value. The trace used spherical refraction at each surface and translation through each listed axial distance.

| Quantity | Computed normalized | Patent normalized | Scaled by 43.0x |
|---|---:|---:|---:|
| EFL, wide | 0.99965 | 1.00000 | 42.985 mm |
| EFL, tele | 1.66219 | 1.66300 | 71.474 mm |
| Back focal distance, wide | 1.07801 | 1.07850 | 46.354 mm computed / 46.376 mm patent table |
| Back focal distance, tele | 1.41830 | 1.41910 | 60.987 mm computed / 61.021 mm patent table |
| Zoom ratio | 1.66277 | 1.66300 | - |
| Group A focal length | -2.09560 | condition only | -90.111 mm |
| Group B focal length | +1.07635 | not tabulated | +46.283 mm |

The Petzval sum was recomputed surface-by-surface as $\sum \varphi_i/(n_i n'_i)$, giving +0.051397 normalized. Scaled to $f_W = 43$ mm, this corresponds to a Petzval radius magnitude of about 836.6 mm. This value should be interpreted as a paraxial field-curvature indicator, not as a full off-axis performance prediction.

Semi-diameters in the data file are inferred rather than patent-published. They were constrained by the 49 mm filter class, element edge thickness, front/rear surface diameter ratio, spherical rim slope, cross-gap sag intrusion, and Fig. 4 silhouette. The front group now keeps L1 visibly taller than the thinner L2/L3 pair, while the rear group steps down through L4-L6 before the taller final L7. The narrow L1-L2 air gap and the L6-L7 air gap are the binding constraints; the data file therefore represents the usable clear apertures conservatively rather than attempting to pass a full unvignetted f/3.5 diagonal ray bundle.

## Design Heritage and Context

US 4,195,912 describes a compact two-group standard zoom for still cameras, with a zoom ratio of roughly 1.67 to 1.85 and a wide-side field near 53°. Later standard-zoom patents cite this design as part of the established negative-positive two-group SLR zoom lineage.

The Fujinon-Z 43-75mm f/3.5-4.5 is historically significant as an early kit zoom associated with the Fujica AZ-1 period, when normal fixed-focal-length kit lenses were still the common default. That historical identification is external to the optical prescription; the optical file itself is grounded in Example 2 of US 4,195,912.

## Sources

- US 4,195,912, Doi/Sakai/Ohono, "Zoom Lens System," Fuji Photo Optical Co., Ltd. Primary source for the prescription, conditions, zoom states, and optical description.
- JAPB, "Data sheet: X-Fujinon 43-75 mm f/3.5-4.5 DM." Production metadata for the Fujica X DM variant.
- KameraStore, "Fuji 43-75mm f3.5-4.5 Fujinon-Z." Production metadata for the M42 variant.
- OHARA, S-TIM28 and S-LAL14 optical-glass catalog pages.
- HOYA optical-glass data as reproduced from the HOYA Zemax catalog in RefractiveIndex.INFO for BACD15 and FD60.
- CDGM H-ZF39 datasheet and cross-catalog glass-code references for the 667331 class.
