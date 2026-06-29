## Patent Reference and Design Identification

**Patent:** US 2,959,100  
**Application Number:** US Ser. No. 638,296  
**Filed:** February 5, 1957  
**Priority:** February 13, 1956 (Germany)  
**Granted:** November 8, 1960  
**Inventor:** Hans Lautenbacher  
**Assignee:** Enna Werk Optische Anstalt Dr. Appelt K.G., Munich, Germany  
**Title:** Wide Angle Photographic Objective  
**Embodiment analyzed:** Example 1, Table I

US 2,959,100 discloses a three-part retrofocus wide-angle objective for single-lens-reflex cameras. The patent frames the design problem as a field greater than 70° combined with a back focal length of at least 1.2× the system focal length. Example 1 is prescribed at normalized $f = 100.0$, relative aperture 1:3.5, 75° field coverage, and stated back focal length $s' = 125.842$.

Example 1 is the production-linked embodiment used here for the Enna München Ultra-Lithagon 28 mm f/3.5. The evidence is convergent rather than a manufacturer-published production prescription: the assignee is Enna Werk, the designer is Hans Lautenbacher, the example is a six-element/six-group f/3.5 retrofocus wide-angle layout, and the 75° field agrees with a 28 mm rectilinear lens on the 135 format. The data file therefore represents the patent Example 1 prescription scaled to the 28 mm production class, not a factory service prescription.

Example 2 is not used. It is a separate f/2.5 example covering 65° with stated $s' = 102.209$, giving a near-unity back-focal ratio rather than the stronger SLR retrofocus clearance of Example 1.

## Optical Architecture

The objective is an all-spherical three-part retrofocus design with negative-positive-positive group distribution. Part F is a single negative front meniscus. Part S is a weakly collective median element inserted between the negative front group and the rear main part. Part H is a four-element positive rear assembly resembling a modified triplet: a close positive-positive front pair, a stop space, a strong negative flint element, and a rear positive element.

The patent's distinctive feature is the median collective part S. The text states that the focal length of S should be between 2× and 20× the absolute focal length of the negative front part F, and that the S-H spacing should be 0.1× to 1.0× the total system focal length. The stated purpose is broader correction of monochromatic and color aberrations, reduced vignetting, and substantial stretching of both astigmatic field curves.

The data file scales the normalized patent prescription by 0.28, giving computed $f = 28.00055$ mm. The aperture stop is not listed as a separate patent surface; it is inserted at the midpoint of the $l_4$ air space between L4 and L5 according to the drawing. The resulting stop semi-diameter is set from the paraxial entrance pupil required by f/3.5. The semi-diameters are inferred ray-clearance values, not patent-published clear apertures.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$nd = 1.62280$, $νd = 56.9$. Glass: S-BSM10 equivalent / legacy SK10-class, not patent-named. $f = -42.0$ mm.

L1 is the whole front part F. Its weakly convex front surface and much stronger convex rear surface form the negative meniscus that expands the chief-ray bundle before the rear positive system. This element gives the lens its retrofocus character: the computed back focal length is about 1.258× the effective focal length.

The patent gives only $nd$ and $νd$, not a glass name. The pair is close to OHARA S-BSM10 and to historical SK10-class barium crown data, but the original Enna/Schott melt name is not proven by the patent.

### L2 — Positive Meniscus, concave to object

$nd = 1.62536$, $νd = 35.6$. Glass: unmatched legacy flint, 625/356 code. $f = +280.4$ mm.

L2 is part S, the weak median collective lens. Its focal length is more than six times the absolute focal length of L1, so it contributes little direct paraxial power compared with the front and rear systems. Its importance is positional: it sits in the large space between F and H, where it can influence astigmatism and vignetting before the ray bundles enter the rear main group.

Both radii are negative, so the element is a positive meniscus concave toward the object. Its low Abbe number makes it a flint-class element, but the exact historical catalog type is unresolved.

### L3 — Biconvex Positive

$nd = 1.61272$, $νd = 58.6$. Glass: N-SK4 (SCHOTT). $f = +30.5$ mm.

L3 is the first element of part H and the strongest positive element in the rear assembly. It begins the converging rear system after the large F-S and S-H separations. Its biconvex form distributes refraction between two surfaces and reduces the burden that would otherwise fall on a single strongly curved positive surface.

The $nd/νd$ pair matches SCHOTT N-SK4 within the precision of the patent table.

### L4 — Positive Meniscus, convex to object

$nd = 1.62536$, $νd = 35.6$. Glass: unmatched legacy flint, 625/356 code. $f = +56.6$ mm.

L4 follows L3 across only 0.14 mm at the 28 mm scale. The close spacing makes the L3-L4 pair behave as a split positive front component of the rear main group, but the air gap means it is not a cemented achromat. L4 adds positive power with a much lower Abbe number than L3, giving the designer another chromatic degree of freedom without a cemented interface.

The patent table and the claim table both support $R_8 = +105.562$ in the normalized prescription. That sign is necessary for the positive-meniscus form and for the paraxial EFL/BFL match.

### L5 — Biconcave Negative

$nd = 1.75520$, $νd = 27.5$. Glass: SF4 (SCHOTT). $f = -14.4$ mm.

L5 is the strongest individual element in the system by absolute focal length. It sits just behind the stop and supplies the main negative correction within the rear assembly. Its high index allows substantial negative power without excessively small radii, while its high dispersion supplies the principal flint counterweight to the positive crown-class elements.

The $nd/νd$ pair matches SCHOTT SF4 at patent-table precision.

### L6 — Plano-Convex Positive

$nd = 1.61720$, $νd = 54.0$. Glass: J-SSK1 equivalent / legacy SSK1-class, not patent-named. $f = +23.7$ mm.

L6 is the rear positive element. Its front surface is plane and its rear surface carries the refractive power, providing the final convergence toward the image plane. Because this surface is close to the image side of the optical train, it has strong leverage over the final spherical and field-curvature balance.

The $nd/νd$ pair matches HIKARI J-SSK1 and other SSK1-class data closely, but the patent does not name the vendor or the historical melt. The data file therefore uses an equivalent-class label rather than a confirmed Schott SSK1 identity.

## Glass Identification / Selection

The patent gives refractive indices and Abbe numbers only. It does not list glass names. The analysis therefore separates direct catalog matches from equivalents and unresolved historical glasses.

| Element | Patent $nd$ | Patent $νd$ | Glass annotation | Confidence |
|---|---:|---:|---|---|
| L1 | 1.62280 | 56.9 | S-BSM10 equivalent / legacy SK10-class | Good equivalent; exact historical vendor unproven |
| L2 | 1.62536 | 35.6 | Unmatched legacy flint, 625/356 | Exact catalog type unresolved |
| L3 | 1.61272 | 58.6 | N-SK4 (SCHOTT) | Direct catalog match |
| L4 | 1.62536 | 35.6 | Unmatched legacy flint, 625/356 | Exact catalog type unresolved |
| L5 | 1.75520 | 27.5 | SF4 (SCHOTT) | Direct catalog match |
| L6 | 1.61720 | 54.0 | J-SSK1 equivalent / legacy SSK1-class | Good equivalent; exact historical vendor unproven |

The palette uses ordinary crown and flint glasses. No ED, fluorite, anomalous-partial-dispersion, or aspherical material behavior is implied by the patent data. L2 and L4 share the same 625/356 flint-class glass, but no exact current manufacturer catalog match has been established from the checked catalogs.

## Focus Mechanism

The patent prescription is infinity-only and does not publish a focusing table. The data file models the production-class lens with unit focusing, which is the mechanically plausible arrangement for a 1950s manual-focus all-spherical wide-angle lens.

At 28 mm scale, the infinity back focal distance from the last optical surface to the paraxial image plane is 35.227689 mm. For a 0.30 m object-to-image distance, the unit-focus model increases that rear spacing to 38.836352 mm. In lens coordinates, unit focus moves the whole optical cell forward and increases the rear air space to the fixed film plane.

| State | Object-to-image distance | BF in data file | Change from infinity |
|---|---:|---:|---:|
| Infinity | Infinity | 35.227689 mm | 0.000000 mm |
| Close focus model | 0.30 m | 38.836352 mm | +3.608663 mm |

The close-focus value is a production-context working value for the data file. It is not a patent-published focusing prescription and does not imply a separate floating group.

## Conditional Expressions

The three explicit patent conditions are satisfied by Example 1.

First, the focal length of median part S must be from 2× to 20× the absolute focal length of front part F:

$$2.0 \leq \frac{f_S}{|f_F|} \leq 20.0$$

The computed standalone values are $f_S = +1001.57$ and $f_F = -150.04$ in normalized patent units, giving $f_S/|f_F| = 6.676$.

Second, the air space from S to H must be 0.1× to 1.0× the total focal length:

$$0.1 \leq \frac{l_2}{f} \leq 1.0$$

For Example 1, $l_2/f = 38.5/100 = 0.385$.

Third, the air space from S to H must be from 0.3× to 1.5× the air space from F to S:

$$0.3 \leq \frac{l_2}{l_1} \leq 1.5$$

For Example 1, $l_2/l_1 = 38.5/58.0 = 0.664$.

## Verification Summary

The prescription was re-entered directly from Table I and traced with a surface-by-surface paraxial matrix calculation using the $[y, n u]$ ray vector. The numbers below are for the normalized patent prescription unless a 28 mm scaled value is stated.

| Quantity | Patent | Computed | Scaled to 28 mm |
|---|---:|---:|---:|
| Effective focal length | 100.000 | 100.001949 | 28.000546 mm |
| Back focal length | 125.842 | 125.813177 | 35.227689 mm |
| Back-focus ratio | 1.25842 | 1.25811 | 1.25811 |
| ABCD determinant | — | 1.000000 | — |
| Petzval sum $\Sigma \phi/(nn')$ | — | +0.00151313 | — |
| Petzval radius | — | -660.88 | -185.05 mm |

The small BFL residual is consistent with rounded patent-table radii and glass indices. The computed BFL remains within 0.023% of the patent statement and does not indicate a transcription error.

## Design Heritage and Context

The layout is representative of the first generation of 35 mm SLR retrofocus wide-angle objectives. Its front group is simpler than the compound negative front groups used in some contemporary retrofocus designs. The patent's specific contribution is not merely a long back focal distance, but the introduction of a weak positive median component between the negative front meniscus and the rear main objective to control astigmatism, vignetting, and color correction while preserving SLR clearance.

The design should therefore be described as a patent-grounded Enna three-part retrofocus construction rather than as a generic inverted telephoto formula. Its computed back focal length is greater than its focal length, so the retrofocus designation is justified.

## Sources

1. US Patent 2,959,100, Hans Lautenbacher, "Wide Angle Photographic Objective," granted November 8, 1960. Example 1, Table I, is the transcribed prescription source.
2. SCHOTT, Optical Glass Datasheet N-SK4, used to verify the L3 $nd/νd$ match.
3. SCHOTT, Optical Glass Datasheet SF4, used to verify the L5 $nd/νd$ match.
4. OHARA, S-BSM10 catalog entry, used as the closest documented equivalent for L1.
5. HIKARI, J-SSK1 catalog sheet, used as the closest documented equivalent for L6.
