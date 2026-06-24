# Nikon AI Nikkor 28mm f/3.5 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,099,850  
**Filed:** February 4, 1977  
**Granted:** July 11, 1978  
**Priority:** Japan 51-11566, February 5, 1976  
**Inventor:** Sei Matsui  
**Assignee:** Nippon Kogaku K.K.  
**Title:** Wide Angle Photographic Lens  
**Embodiment analyzed:** Example 5

US 4,099,850 discloses a six-component, six-group retrofocus wide-angle photographic lens with an aperture ratio of 1:3.5 and a nominal angle of view of 74.2°. The numerical examples are normalized to a total focal length of $f = 100.0$. Example 5 is the embodiment transcribed for the accompanying data file.

The production identification is an evidence match rather than an explicit statement in the patent. The supporting points are the six-element/six-group formula, the all-spherical construction, the f/3.5 aperture, the 74° class angle of view for 135 format, the 1976–1978 patent timing, and the natural scale factor of $0.28$ from the patent normalization to a 28 mm production focal length. At this scale, the computed effective focal length is 28.000 mm and the computed infinity back focal distance is 38.458 mm.

The patent was later corrected by a Certificate of Correction. The corrected form of condition (3) is:

$$0.1 < \frac{d_1 + d_2 + d_3}{d_4} < 0.35.$$

This corrected expression is the form used below and in the verification calculations.

## Optical Architecture

The design is a compact six-element retrofocus wide-angle lens. In front-to-rear order the power sequence is:

$$L1(+) \quad L2(-) \quad L3(+) \quad [STO] \quad L4(-) \quad L5(+) \quad L6(+).$$

The front pair, L1 and L2, forms the negative front section required by a reversed-telephoto wide-angle lens. Its computed combined focal length is $f_{12} = -156.699$ in the patent normalization, or $-43.876$ mm at the production scale. This divergent front group increases the image-side back focal distance to $1.374f$, allowing a 28 mm lens to work on an SLR with a mirror box.

L3 is the main positive collector ahead of the stop. Behind the stop, L4 is the strongest negative element in the system and supplies much of the off-axis correction. L5 and L6 complete the rear relay, restore convergence, and tune the final image position. The rear sequence of negative-positive-positive elements belongs to the Wakimoto-derived Nikon retrofocus lineage, in which the post-stop biconcave element is placed early in the rear group to improve coma and field correction compared with older rear-group orders.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.62374$, $\nu_d = 47.0$. Glass: E-BAF8 (Hikari) / J-BAF8 class. $f = +191.29$ mm.

L1 is a weak positive meniscus with a strongly curved front surface and a very weak rear surface. Its standalone focal length is long relative to the system focal length, so it is not a primary power element. Its role is to moderate the front-end ray bending and to help control the distortion introduced by the negative retrofocus front group.

The patent-side normalized radii are $R_1 = +356.822$ and $R_2 = +2169.231$. Both centers of curvature lie image-side of their surfaces, so the element is a meniscus with its convex side facing the object. At production scale, the element remains mechanically large compared with the stop and rear relay, as expected for a 74° retrofocus lens.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.62041$, $\nu_d = 60.3$. Glass: N-SK16 / S-BSM16 / J-SK16 class. $f = -35.02$ mm.

L2 is the dominant component in the front divergent group. Its rear surface, patent $r_4 = +55.245$, carries the strong negative curvature that sets the retrofocus separation and is explicitly constrained by patent condition (4). If this surface becomes too steep, the patent warns of field bending and coma; if it becomes too weak, the back focal distance falls below the intended retrofocus value.

The use of a relatively low-dispersion crown-type glass for this negative component keeps the chromatic contribution of the strongly curved rear surface under control. Because a negative element contributes a negative Petzval term, the comparatively high index for a crown glass also helps keep the Petzval sum from becoming excessively negative.

### L3 — Biconvex Positive Collector

$n_d = 1.70154$, $\nu_d = 41.1$. Glass: BAFD7 (HOYA) / S-BAH27 / J-BASF7 class. $f = +23.68$ mm.

L3 is the strongest positive element in the design and is the principal collector before the aperture stop. It receives the divergent output from L1-L2 and bends the beam toward the post-stop rear group. Its front surface is more strongly curved than its rear surface, consistent with the patent description of a biconvex element whose more convex surface faces the object.

The high index of the BAFD7 / S-BAH27 / J-BASF7 class glass allows this strong positive power without using still steeper curvatures. Its intermediate dispersion contributes to the ordinary achromatization of the system, but the design does not rely on ED or anomalous-partial-dispersion glass.

### L4 — Biconcave Negative Post-Stop Corrector

$n_d = 1.75520$, $\nu_d = 27.5$. Glass: E-FD4 (HOYA) / H-ZF6 / J-SF4 class. $f = -16.67$ mm.

L4 is the most powerful negative element in the lens. It sits immediately after the aperture stop and therefore works at relatively modest marginal-ray height while still seeing substantial off-axis ray separation. This makes it an efficient element for coma, astigmatism, field curvature, and Petzval correction.

The glass is a dense flint. Its high index reduces the magnitude of the negative Petzval contribution that would otherwise be produced by such a strong negative element, while its high dispersion supplies a chromatic counterweight to the crown-type positive elements around it. In the verified surface-by-surface Petzval sum, L4 and its neighboring interfaces provide the largest negative terms in the lens.

### L5 — Positive Meniscus, Convex to Image

$n_d = 1.62041$, $\nu_d = 60.3$. Glass: N-SK16 / S-BSM16 / J-SK16 class. $f = +35.20$ mm.

L5 is a positive meniscus behind L4, with its convex surface facing the image. It helps recover convergence after the strong negative L4 and contributes to rear-group field correction. Its low-dispersion crown-type glass also pairs chromatically with the dense flint L4.

The reuse of the same glass as L2 is optically plausible and production-efficient. In this lens, the matching of low-dispersion glass before and after the stop also helps restrain lateral color in an otherwise asymmetric retrofocus system.

### L6 — Final Biconvex Positive Relay

$n_d = 1.58913$, $\nu_d = 61.2$. Glass: N-SK5 / S-BAL35 / J-SK5 class. $f = +51.85$ mm.

L6 is the final positive relay element. Its role is not to supply the primary positive power of the lens, but to set the final convergence and back focal distance after the L4-L5 correction pair. It uses the lowest-index and lowest-dispersion glass in the system, appropriate for a final relay element that should not add excessive chromatic error near the film plane.

At production scale, the rear surface-to-image distance is 38.458 mm at infinity focus. That value is computed from the full paraxial matrix rather than copied directly from the rounded patent BFD.

## Glass Identification and Selection

The patent gives refractive indices and Abbe numbers, but it does not name glass vendors. The accompanying data file uses resolver-friendly catalog equivalents that preserve the Hikari/Nikon class where useful while pointing the renderer at available Sellmeier data.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog-equivalent label | Catalog class | Role |
|---|---:|---:|---|---|---|
| L1 | 1.62374 | 47.0 | E-BAF8 / J-BAF8 class | Barium flint class | Weak front positive / distortion moderation |
| L2 | 1.62041 | 60.3 | N-SK16 / S-BSM16 / J-SK16 class | Crown class | Strong negative front diverger |
| L3 | 1.70154 | 41.1 | BAFD7 / S-BAH27 / J-BASF7 class | Dense barium flint/crown boundary class | Main positive collector |
| L4 | 1.75520 | 27.5 | E-FD4 / H-ZF6 / J-SF4 class | Dense flint | Post-stop negative corrector |
| L5 | 1.62041 | 60.3 | N-SK16 / S-BSM16 / J-SK16 class | Crown class | Positive rear relay / chromatic balance |
| L6 | 1.58913 | 61.2 | N-SK5 / S-BAL35 / J-SK5 class | Crown class | Final positive relay |

Several older cross-reference labels are close but not exact catalog matches. In particular, the prior identification of L1 as an OHARA BAH32-class glass is not retained because OHARA S-BAH32 does not match the patent's $n_d = 1.62374$, $\nu_d = 47.0$ pair. L3 is represented as a BAFD7 / S-BAH27 / J-BASF7 class glass because those catalog entries match the patent's high-index barium-flint pair closely enough to supply useful dispersion data while preserving the patent's published $n_d$ and $\nu_d$.

The chromatic correction is classical rather than apochromatic. The lens balances three crown-type low-dispersion elements, one dense flint post-stop element, and two intermediate glasses. No aspherical, ED, fluorite, or anomalous-partial-dispersion element is present in the patent prescription.

Using the surface-by-surface Petzval formula

$$P = \sum_i \frac{n'_i - n_i}{R_i n_i n'_i},$$

the verified Petzval sum is $P = 0.0019556$ in patent units. The corresponding Petzval radius is approximately 511.36 patent units, or 143.18 mm at the production scale. This is a moderately long field curvature radius relative to the 43.3 mm diagonal of 135 format, but it is not a flat-field design.

## Focus Mechanism

The patent publishes only an infinity-focus prescription. No floating-element or close-range-correction spacing table is provided. The production model represented here is therefore modeled as unit focus: the optical prescription is translated as a rigid group and the image-side distance changes.

For a 0.30 m minimum object distance measured from the image plane, the verified paraxial unit-focus solution increases the final image-side gap from 38.458 mm to 42.108 mm. This corresponds to approximately 3.650 mm of extension. The same paraxial calculation gives a close-focus magnification of approximately $0.130\times$, or about 1:7.7.

This correction is important. A simple thin-lens estimate understates the focus extension for this retrofocus lens because the principal planes are displaced by the asymmetric front-negative/rear-positive architecture.

## Aspherical Surfaces

The design is entirely spherical. US 4,099,850 gives no aspherical coefficients, and all five numerical embodiments are ordinary spherical prescriptions. The companion data file therefore uses `asph: {}`.

## Patent Conditions

The four patent conditions are front-group constraints. Example 5 satisfies all of them under independent paraxial verification:

| Condition | Expression | Verified Example 5 value | Result |
|---|---|---:|---|
| (1) | $1.5f < |f_{12}| < 1.75f$ | $|f_{12}|/f = 1.567$ | Pass |
| (2) | $5.0 < f_1/|f_2| < 8.0$ | $5.463$ | Pass |
| (3) | $0.1 < (d_1+d_2+d_3)/d_4 < 0.35$ | $0.172$ | Pass |
| (4) | $0.5f < r_4 < 0.6f$ | $r_4/f = 0.552$ | Pass |

Condition (1) prevents the front divergent group from becoming either too weak, which would enlarge the front aperture, or too strong, which would push the Petzval sum negative and force a heavier front group. Condition (2) controls how the positive and negative powers are distributed between L1 and L2. Condition (3) controls the compactness of the front pair relative to the long L2-L3 air space. Condition (4) directly limits the rear surface of L2, the surface most sensitive to field bending and coma in the patent's discussion.

## Verification Summary

The prescription was re-entered from Example 5 and traced independently using an $y, n u$ paraxial matrix model. The principal verification values are:

| Parameter | Patent / expected value | Verified value |
|---|---:|---:|
| Normalized EFL | 100.0 | 100.00024 |
| Production-scale EFL | 28.0 mm | 28.00007 mm |
| Normalized BFD | 137.350 | 137.35164 |
| Production-scale infinity BFD | 38.458 mm | 38.45846 mm |
| Front pair focal length $f_{12}$ | approximately -156.6 | -156.69948 |
| Petzval sum | independent calculation | 0.0019556 |
| Petzval radius, scaled | independent calculation | 143.18 mm |
| Unit-focus extension to 0.30 m | independent calculation | 3.650 mm |
| Paraxial magnification at 0.30 m | independent calculation | 0.130×, about 1:7.7 |

The semi-diameters in the data file are not patent values. They are conservative rendering apertures chosen after checking signed sag clearance, element edge thickness, and the project renderer's spherical rim constraint. The tightest semi-diameter constraint is the rear surface of L2, whose scaled radius is only 15.469 mm; the selected 13.5 mm semi-diameter keeps $sd/|R| = 0.873$.

## Design Heritage and Context

Nikon's earlier NIKKOR-H Auto 2.8cm f/3.5 established the company's six-element retrofocus 28 mm lineage. Nikon's own historical account credits Zenji Wakimoto's rear-group rearrangement with improving coma correction in SLR wide-angle lenses. Matsui's later patent keeps the same broad architectural logic but refines the front-group constraints for a more compact and better-corrected f/3.5 wide-angle design.

The result is not a modern flat-field, close-range-corrected 28 mm. It is a compact all-spherical SLR retrofocus lens whose design priority is a usable 74° field with a long back focus and a reduced front element aperture.

## Sources

1. US Patent 4,099,850, Sei Matsui, "Wide Angle Photographic Lens," assigned to Nippon Kogaku K.K., granted July 11, 1978; Certificate of Correction issued March 27, 1979.
2. Public Zemax/refractiveindex.info catalog entries for E-BAF8, N-SK16, S-BSM16, BAFD7, S-BAH27, E-FD4, H-ZF6, N-SK5, and S-BAL35; used as catalog equivalents for the patent's unnamed glass rows.
3. Kouichi Ohshita, Nikon Corporation, *NIKKOR — The Thousand and One Nights No. 12: NIKKOR-H Auto 2.8cm F3.5*.
