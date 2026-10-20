## Patent Reference and Design Identification

**Patent:** CN 209606699 U  
**Application Number:** 201920611862.6  
**Filed:** 2019-04-28  
**Published:** 2019-11-08  
**Inventors:** Liu Ruijun (刘瑞军); Chen Baofeng (陈宝锋)  
**Applicant:** Shenzhen Leiying Photoelectric Technology Co., Ltd. (深圳市雷影光电科技有限公司)  
**Title:** 数码相机超广角大光圈全画幅镜头 (Ultra-wide-angle, large-aperture full-frame lens for digital cameras)  
**Embodiment analyzed:** Example 1, §0090 and the aspherical table §0092.

The modeled prescription is correlated with the VILTROX MF 20mm f/1.8 (Sony E and Nikon Z mounts).
The correlation is convergent and not manufacturer-confirmed. The manufacturer
product page and the patent agree on the following architectural features:

1. Twelve elements in nine air-separated groups.
2. One element with two aspherical surfaces.
3. Four low-dispersion elements, corresponding to the patent's repeated Nd/Vd pair.
4. A large-aperture full-frame wide-angle design, with an F1.8 capability.

The selected product is the manual-focus Sony E version. The manufacturer's page
also describes a Nikon Z version; mechanical dimensions and its generic flange-distance
entry must not be treated as the optical back focal distance of the Sony E prescription.
The patent filing date establishes documentary timing, not the product's release date.
No independently verified release date is assigned here.

The source has an unresolved numerical inconsistency. Section 0074 explicitly cements
L13 and L14, but §0090 gives the joined radii as −70.25 and −70.15 mm.
A single spherical interface cannot have both curvatures. The model retains −70.25 mm
as a disclosed approximate shared interface and preserves −70.15 mm as the comparison
case. This is not a uniquely established correction to the patent. The same-title
parallel invention grant CN110045484B repeats both numbers in §0090.
Neither the schematic figure nor the printed system inequalities distinguishes them.
The approximation is intended for a bounded geometric model, not a manufacturing drawing.

## Optical Architecture

The prescription has three functional groups: negative G1, positive G2 and positive G3.
These functional groups differ from the nine air-separated groups used in the
physical construction count. G1 comprises L11–L14, including one cemented pair;
G2 comprises L21 and L22; G3 comprises L31–L36, including a cemented triplet.
The aperture stop lies between G2 and G3. [1, §§0070–0077; Fig.1]

Using the rounded native d-line indices and the approximate shared interface,
the standalone group focal lengths are G1 = -27.400 mm,
G2 = 45.845 mm and G3 = 42.816 mm.
Their combined system focal length is not their arithmetic sum.
The computed system EFL is 20.313457 mm, compared with the marketed 20 mm.
The paraxial infinity BFD is 17.787945 mm from the final glass vertex;
first-to-last glass-vertex spacing is 97.47 mm and
first-vertex-to-image track is 115.257945 mm.
The latter satisfies the embodiment's 116 mm upper bound. The image position is
computed; an exact rear image spacing is not printed in the source.

The negative front group by itself does not establish a retrofocus classification.
Here the computed BFD is smaller than EFL. The front principal plane is
39.036105 mm imageward of the first vertex, and the rear
principal plane is 2.525513 mm objectward of the final vertex.
The surface-by-surface Petzval sum is 0.002272891 mm⁻¹,
using φ/(n n′) at every refracting boundary. This paraxial sum is not a certificate
of flat sagittal or tangential image surfaces, nor a substitute for an aberration analysis.

## Element-by-Element Analysis

Focal lengths below are thick-element values in air, calculated from each element's
implemented bounding surfaces. They are not an allocation of the system's in-situ power
or a measurement of each element's aberration contribution. The source Nd/Vd precision
is preserved; extra decimal places in the first-line format do not imply extra accuracy.

### L11 — Negative Meniscus

nd = 1.75000, νd = 52.3. Glass: Unmatched (high-index crown; rounded patent coordinates). f = -87.70 mm.

L11 is the first negative meniscus, with both curvature centres imageward.
Its negative power begins the divergent front group described by the patent.
Section 0078 gives an effective-diameter lower bound rather than two surface SDs;
the modeled front aperture is consequently distinguished from a measured clear aperture.
The high-index crown class is descriptive, with no supplier identification. [1, §0078]

### L12 — Negative Meniscus

nd = 1.85000, νd = 23.8. Glass: Unmatched (dense flint; rounded patent coordinates). f = -61.90 mm.

L12 is a second negative meniscus, separated from L11 by M1.
Its lower Abbe value distinguishes it from the first element, but those two coordinates
alone do not establish its exact dispersion curve or a unique chromatic role.
The substantial off-axis surface-height changes make clear-aperture geometry important
when interpreting the schematic front group. [1, §§0074,0079]

### L13 — Biconvex Positive

nd = 1.90000, νd = 31.4. Glass: Unmatched (high-index flint; rounded patent coordinates). f = +37.89 mm.

L13 is the positive element of the front cemented pair.
Its rear face is the adopted approximate boundary shared with L14.
The positive standalone element power must not be confused with the net power of
the cemented pair or the complete negative G1 group. [1, §§0074,0080,0090]

### L14 — Biconcave Negative

nd = 1.50000, νd = 81.6. Glass: Unmatched (low-dispersion crown; rounded patent coordinates). f = -30.66 mm.

L14 is the negative, low-dispersion member of the front cemented pair.
Its model front radius uses the common approximate boundary; its source front radius
remains separately recorded. Therefore its implemented standalone focal length differs
slightly from a calculation that uses its own unmodified source radius in isolation.
The doublet's net focal length is -265.826 mm in air. [1, §§0074,0081,0090]

### L21 — Positive Meniscus

nd = 1.90000, νd = 31.4. Glass: Unmatched (high-index flint; rounded patent coordinates). f = +65.08 mm.

L21 is a positive meniscus at the start of G2.
Both of its curvature centres lie imageward; positive power follows from the actual
curvatures, thickness and index rather than the direction of its bending alone.
It uses the same native index/Abbe pair as L13 and L34 without establishing a common
supplier or melt. [1, §§0075,0082]

### L22 — Positive Meniscus

nd = 1.50000, νd = 81.6. Glass: Unmatched (low-dispersion crown; rounded patent coordinates). f = +120.91 mm.

L22 is a positive meniscus bent toward the image side.
It is the second member of G2 and the final glass element before the physical stop.
Its low-dispersion coordinate is also used elsewhere in the design, but no anomalous
partial-dispersion properties are inferred from the Abbe value alone. [1, §§0075,0083]

### L31 — Biconvex Positive

nd = 1.50000, νd = 81.6. Glass: Unmatched (low-dispersion crown; rounded patent coordinates). f = +24.77 mm.

L31 is the leading positive component of the rear cemented triplet.
Its rear boundary is shared with the negative L32 element and uses the printed
matching radius on both sides. The inferred aperture is restricted by actual
positive edge thickness; increasing it solely to enlarge a drawn silhouette would
invalidate the geometry. [1, §§0076,0084]

### L32 — Biconcave Negative

nd = 1.65000, νd = 33.8. Glass: Unmatched (dense flint; rounded patent coordinates). f = -14.36 mm.

L32 is the biconcave negative middle component of the triplet.
It joins both neighbouring positive low-dispersion elements without an intervening
air gap. This topology supplies index changes at the shared surfaces; adding a
synthetic cement layer would introduce unsupported optical parameters. [1, §§0076,0085]

### L33 — Biconvex Positive

nd = 1.50000, νd = 81.6. Glass: Unmatched (low-dispersion crown; rounded patent coordinates). f = +31.84 mm.

L33 is the trailing positive member of the triplet.
Its standalone focal length is distinct from the triplet's combined focal length of
141.659 mm in air. The weak net positive triplet power results
from the full cemented surface sequence, rather than a sum of reciprocal standalone
values. The following air space separates it from L34. [1, §§0076,0086]

### L34 — Biconvex Positive

nd = 1.90000, νd = 31.4. Glass: Unmatched (high-index flint; rounded patent coordinates). f = +23.89 mm.

L34 is an air-separated biconvex positive element in G3.
Its high-index/low-Abbe coordinate matches the source values of L13 and L21.
A strong positive standalone power does not alone identify its share of spherical
aberration or coma correction; those contributions require a defined aberration
calculation and a fully supported spectral/aperture model. [1, §0087]

### L35 — Biconcave Negative

nd = 1.72000, νd = 29.5. Glass: Unmatched (dense flint; rounded patent coordinates). f = -42.16 mm.

L35 is an air-separated biconcave negative element.
Its two spherical faces precede the final double-sided asphere.
The shared radial band of the following air gap constrains the modeled rear
aperture because the adjoining sag profiles reduce off-axis clearance. The gap
is checked explicitly instead of being hidden by rendering trims. [1, §§0076,0088]

### L36 — Biconcave Negative (Asph)

nd = 1.52000, νd = 63.5. Glass: Unmatched (crown; rounded patent coordinates). f = -137.18 mm.

L36 is the final negative element and carries both aspherical faces.
Its quoted focal length is the paraxial value determined by the base curvatures;
the higher-order polynomial terms modify finite-height rays without changing that
vertex power. No manufacturing process or glass supplier is inferred from the
presence of the aspherical surfaces. [1, §§0089–0098]

## Glass Identification

The patent publishes seven distinct d-line coordinate pairs but no supplier names.
The model therefore uses generic Unmatched glass-class annotations and retains the
rounded source indices. The following primary catalog coordinates are comparison
candidates, not production identities or replacements for the source data.

| Source nd / νd | Primary comparison candidate          | Catalog nd / νd  | Δnd / Δνd (catalog − source) |
| -------------- | ------------------------------------- | ---------------- | ---------------------------- |
| 1.75 / 52.3    | No primary-verified identity assigned | —                | —                            |
| 1.85 / 23.8    | H-ZF52 (CDGM)                         | 1.846660 / 23.78 | -0.003340 / -0.02            |
| 1.90 / 31.4    | H-ZLaF75B (CDGM)                      | 1.903660 / 31.42 | +0.003660 / +0.02            |
| 1.50 / 81.6    | FCD1 (HOYA)                           | 1.497000 / 81.61 | -0.003000 / +0.01            |
| 1.65 / 33.8    | S-TIM22 (OHARA)                       | 1.647690 / 33.79 | -0.002310 / -0.01            |
| 1.72 / 29.5    | SF1 (SCHOTT)                          | 1.717360 / 29.51 | -0.002640 / +0.01            |
| 1.52 / 63.5    | D-K59 (CDGM)                          | 1.517600 / 63.50 | -0.002400 / +0.00            |

HOYA, OHARA, Schott and CDGM primary publisher coordinate text supports the listed
candidates. Catalog coverage is partial. HIKARI’s 2025 catalog records E-LAKH1 as discontinued in September 2009; its historical
numerical row was not independently recovered. Sumita’s primary preform table provides
K-PBK40 at nd = 1.51760, νd = 63.5, another coordinate candidate for L36
(Δnd = −0.00240, Δνd = 0.0), without identifying the source glass. [8,9] OHARA's S- and L-prefixed families are not
interchangeable merely because their names resemble one another.

The very coarse source indices allow more than one coordinate-compatible interpretation.
No candidate's extra precision or spectral line indices are transferred to the elements.
In particular, a high Abbe number is insufficient to establish anomalous partial
dispersion, secondary-spectrum correction or apochromatic performance. The manufacturer's
phrase “fluorite glass” for its ED elements does not establish crystalline fluorite.

## Focus Mechanism

The patent describes G1 and G2 as fixed and G3 as the moving focus group.
It does not publish finite-conjugate spacing rows, travel, or a complete motion law.
The model consequently uses NO_INTERNAL_RECONSTRUCTION and retains a single static
infinity configuration. It does not replace the described rear-group mechanism with
an invented unit-focus movement. [1, §0070]

The manufacturer's manual-focus designation and 0.25 m minimum shooting distance are
production metadata. They do not locate a finite-focus group position in this model,
certify a near-focus conjugate or provide a basis for breathing or magnification claims.

## Aspherical Surfaces

Both faces of L36 are aspherical, corresponding to model surfaces 21A and 22A.
The source equation is

z(y) = (y²/r) / (1 + √(1 − (1 + K)(y/r)²)) + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹².

Here y is radial height and z is axial sag in millimetres. The source uses the
standard (1+K) convention, so K is unchanged. Each A_p has units mm^(1−p).
No uniform scaling is applied. The source polynomial includes order 10 in both
the table and equation, despite omitting that order from the short prose list.
The unused A14 field in the implementation is zero. [1, §§0091–0098]

| Model surface / source face |       K |         A4 |        A6 |         A8 |        A10 |       A12 |
| --------------------------- | ------: | ---------: | --------: | ---------: | ---------: | --------: |
| 21A / L361                  | -20.195 | -4.508E-05 | 6.657E-08 | -4.035E-10 |  2.981E-13 | 1.456E-15 |
| 22A / L362                  |  59.615 |  1.128E-05 | 1.027E-07 | -1.833E-10 | -3.193E-13 | 8.724E-16 |

The front asphere has a negative fourth-order term and the rear a positive one;
these signs describe polynomial contributions, not the sign of their total ray
aberration correction. Each full sag and slope is checked with all retained terms.
The semi-diameters are inferred, so no departure at a patent-published rim is claimed.

## Conditional Expressions

The source defines FL12 as the combined G1+G2 focal length, S as the first-vertex-to-stop
distance and BFL as the final-glass-vertex-to-image distance at infinity.
For the approximate model, FL12 = 164.628722 mm and S = 56.79 mm.
The calculated first expression is

(|FL12| + S) / BFL = 12.447684,

which lies within the published 10.6–12.5 interval. [1, §§0071–0073]
The second expression divides that result by tanω and is bounded by 9.9–11.6.
At the 47° half-field boundary it is
11.607654.
The source states a full field greater than 94° rather than a precise angle;
therefore this boundary calculation is not a verification of an exact full field.
The computed feasible half-field interval is retained in the numerical record.
Both possible shared-interface radii satisfy the broad system bounds, so those
conditions do not independently identify a corrected radius.

## Model Geometry and Approximation Limits

The stop position is published; its semi-diameter is not (see below).
The clear apertures of the refracting surfaces are also inferred: they are read from the
to-scale structure drawings (FIGs. 1, 2 and 4) and held above the F1.8 axial marginal ray and
the corner chief ray. The figures draw L31's faces stopping at about 11 mm inside a 13.1 mm
edge land; the model keeps 12.8 mm for both faces of L31 and the drawn land height for the
rest of the triplet.
The modeled front diameter is 56 mm; the source provides only a lower bound of 54 mm.
The modeled shapes keep positive edge thickness, stay inside each asphere's conic
domain and do not intrude into neighbouring air gaps. They do not establish production
aperture sizes.

Using −70.15 mm instead of −70.25 mm for the shared L13/L14 interface changes EFL by
0.000465 mm and BFD by −0.005452 mm. With the stop radius and image plane held fixed,
exact-ray image intercepts at 0°, 14.1° and 28.2° and F1.8 to F16 move by at most
0.003271 mm, below the 0.01 mm least digit of the printed lengths. The approximation
is therefore negligible at the model's geometric scale; it is not shown to be
equivalent at diffraction resolution. No modeled clear aperture or paraxial result
should be mistaken for a manufacturer measurement or a complete optical prescription.

### Iris size and vignetting

The model sets the iris from an exact on-axis marginal ray at F1.8, giving a stop
semi-diameter of 11.11 mm rather than the paraxial value of 10.72 mm.
Neither value measures the production iris.

With this iris, rays at 0°, 12.4° and 24.7° pass every modeled aperture at F1.8 to F16
with either interface radius, with at least 0.13 mm clearance (the outer F1.8 ray at
24.7°, at surface 16); image intercepts for the two radii differ by at most 0.003 mm.

At 28.2° and F1.8, the outer meridional ray reaches surface 13 at 12.91 mm, just
beyond its modeled 12.8 mm aperture, and is clipped there with either interface
radius. At the same field the triplet's rear rim (surface 16, 13.5 mm) also stops two
outer F1.8 rays sampled 30° either side of the meridian. The chief ray itself reaches the 21.63 mm full-frame corner at a half-field
of about 47.1° (2ω ≈ 94.2°, against the patent's "greater than 94°").

The model is a static geometric approximation; it does not establish full-field
transmission, diffraction-level equivalence or production performance.

## Sources

[1] CN 209606699 U, Chinese utility-model publication, published 2019-11-08.
PDF p1: attribution and dates; pp10–11: §§0070–0085 and spacings;
p12: Example 1 §0090 and indices; p13: §§0092–0098 asphere table/equation;
p14: §0108 capability claims; p15: Fig. 1.

[2] Viltrox, [MF 20mm F1.8 Full-Frame Lens for Sony E-Mount](https://viltrox.com/products/viltrox-20mm-f-1-8-wide-angle-full-frame-manual-focus-prime-lens-for-sony-e-mount),
Product Information and 12 Elements in 9 Groups sections, accessed 2026-10-02.

[3] CN110045484B, [parallel invention grant](https://patentimages.storage.googleapis.com/c7/ea/b1/ac0f4c98c08a89/CN110045484B.pdf),
p12 §0090, published 2024-03-19; used only to check the shared-radius discrepancy.

[4] HOYA, [Designation of Glass Types](https://www.hoya-opticalworld.com/english/technical/001.html), FCD1 example.

[5] OHARA, [S-TIM22 datasheet](https://oharacorp.com/wp-content/uploads/2023/06/estim22.pdf).

[6] CDGM, [H-ZF52 database row](https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=22&url=database),
[H-ZLaF75B datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZLaF75B.pdf), and
[D-K59 datasheet](https://www.cdgmgd.com/webapp/pdf/D-K59.pdf).

[7] Schott, Optical Glass collection datasheets, March 2018, SF1 row.
All catalog candidate coordinates above were checked against primary publisher text
retrieved 2026-10-02; they are not confirmed suppliers for this lens.

[8] HIKARI, [Optical Glass Catalog, 2025-06-01](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), PDF p30 revision history.

[9] Sumita, [Preform Material for Precision Molding](https://www.sumita-opt.co.jp/en/products/preform.html), K-PBK40 row.
