## Patent Reference and Design Identification

**Patent:** JP H05-164961 (特開平5-164961)
**Application Number:** 特願平3-350777
**Filed:** 1991-12-12
**Published:** 1993-06-29
**Inventor:** Shimazaki Yoshio (島崎 喜雄)
**Applicant:** Konica Corporation (コニカ株式会社)
**Title:** 写真レンズ (Photographic Lens)
**Embodiment analyzed:** Example 1 (実施例1)

The patent discloses a modified Xenotar-type photographic lens for leaf-shutter cameras (¶0001). Example 1 is the worked prescription used here. The patent states $f = 1$, F-number = 2.0, and full field angle = 63°, followed by a 13-surface, 6-group, 7-element numerical prescription (¶0016). The published Konica Hexar AF specification gives a 24 × 36 mm lens-shutter camera with a Konica Hexar 35 mm f/2 lens, 6 groups / 7 elements, f/22 minimum aperture, and a 0.6 m to infinity shooting range. The element/group count, focal length, aperture, field angle, and leaf-shutter clearance requirement therefore all point to the Hexar AF fixed lens rather than to a later interchangeable M-Hexanon rangefinder lens.

The production data file scales the normalized patent prescription by 35.0. Because the patent table is rounded, the scaled paraxial effective focal length is 34.99 mm rather than exactly 35.00 mm. This is a rounding-level difference, not a different optical design.

## Optical Architecture

The design is a modified Xenotar: six air-spaced groups and seven elements arranged approximately symmetrically around a wide central shutter cavity. The patent identifies the type as 変形クセノタール型 and explains that conventional Xenotar-type lenses produce large sagittal coma at the surfaces adjacent to the stop (¶0001-¶0003). The invention widens the middle spacing enough for a lens-shutter unit while using a controlled negative air lens between L2 and L3 to restrain the added sagittal coma and field degradation (¶0004-¶0005, ¶0009).

The front section, L1-L3, is positive-positive-negative. L1 and L2 are positive menisci convex to the object; L3 is a negative meniscus also convex to the object. The rear section, L4-L7, is negative-positive-positive-negative. L4 is a negative meniscus convex to the image, L5 is a positive meniscus convex to the image, and G6 is a cemented positive doublet composed of L6 positive and L7 negative. This matches the patent claim and summary construction (claim 1, ¶0005).

The power distribution is not close to a strict symmetric double-Gauss. A paraxial in-air trace gives the front three-element section a weak positive focal length of +110.03 mm, while the rear four-element section has a much shorter focal length of +30.08 mm. That rear-weighted convergence is consistent with the deliberately enlarged shutter space between surfaces 6 and 7.

The data file inserts an aperture stop halfway through the patent's $d_6$ gap. The patent specifies the gap and the required shutter-space condition but does not give a separate stop vertex. The midpoint stop is therefore an implementation estimate for visualization and f-number control, not an additional patent surface. Figure 1 places the stop/shutter assembly within the same central cavity.

## Element-by-Element Analysis

### L1 - Positive Meniscus, convex to object (G1)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA) - lanthanum flint. f = +46.01 mm.

L1 is the front collecting element. Its high refractive index allows useful positive power without excessively short radii at the first surface. Its Abbe number is just below the usual crown/flint boundary, so it is best described as a high-index lanthanum flint rather than a crown. In this design it is paired materially with L6 in the rear cemented group.

The front surface is moderately curved and accepts the full field bundle. The rear surface is much weaker, leaving L1 as a positive meniscus rather than a biconvex collector.

### L2 - Positive Meniscus, convex to object (G2)

nd = 1.74100, νd = 52.7. Glass: S-LAL61 (OHARA) - lanthanum crown. f = +51.25 mm.

L2 continues the positive front-group convergence. Its rear surface, R4, forms the first boundary of the patent's negative air lens. This air lens is the central correction device in conditions (1) and (2).

L2 uses the same glass as L5. This material pairing is one of the remaining quasi-symmetric features of the design, even though the power distribution itself is rear-heavy.

### L3 - Negative Meniscus, convex to object (G3)

nd = 1.71736, νd = 29.5. Glass: S-TIH1 (OHARA) - dense flint. f = -22.77 mm.

L3 is the strongest individual element by absolute focal power. Its front surface, R5, is the second boundary of the negative air lens between L2 and L3; its rear surface, R6, faces the shutter cavity. The strongly dispersive dense flint gives the front group an achromatizing partner for the higher-Abbe lanthanum glasses in L1 and L2.

The element remains a negative meniscus even though both radii are positive in the patent sign convention. The power comes from the relative curvature of the two positive radii and the high-index flint medium between them.

### L4 - Negative Meniscus, convex to image (G4)

nd = 1.59270, νd = 35.3. Glass: S-FTM16 (OHARA) - light flint. f = -52.92 mm.

L4 is the first element behind the shutter space. Both radii are negative, giving a meniscus whose convex side faces the image. Its weak negative power helps shape the ray bundle entering L5 without carrying the main chromatic correction burden.

The low index relative to the other glasses is significant. It keeps this rear negative meniscus from adding excessive Petzval and chromatic burden while preserving the geometric opening around the shutter cavity.

### L5 - Positive Meniscus, convex to image (G5)

nd = 1.74100, νd = 52.7. Glass: S-LAL61 (OHARA) - lanthanum crown. f = +27.91 mm.

L5 is the principal positive singlet of the rear group. It carries much of the convergence needed after the enlarged shutter gap and shares S-LAL61 with L2. The concave object-side surface and convex image-side surface give a meniscus form that works with L4 and the rear doublet to control oblique aberrations.

Its rear surface, R10, is strongly curved and sits close to the front of the cemented doublet. The patent does not define this as the principal air lens; the explicitly governed air lens is the L2/L3 space.

### G6 - Cemented Doublet: L6 positive + L7 negative (G6)

**L6:** nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA) - lanthanum flint. f = +29.99 mm.  
**L7:** nd = 1.72825, νd = 28.5. Glass: S-TIH10 (OHARA) - dense flint. f = -44.75 mm.  
**G6 net:** f = +89.19 mm.

The rear cemented doublet closes the system with net positive power. L6 is biconvex, and L7 is a negative meniscus with a weak final surface. The cemented interface at R12 carries important chromatic and coma-correction work because it joins a higher-index, higher-Abbe positive element to a lower-Abbe negative element.

Condition (4) requires the refractive index of the negative element in the sixth group to be lower than that of the positive element (¶0014). The prescription satisfies this: $N_6(N) = 1.72825 < N_6(P) = 1.77250$. The patent states that this preserves the positive convex action at the cemented surface and contributes to sagittal coma reduction.

## Glass Identification and Selection

The patent gives only nd and νd values. The glass names below are catalog matches against current OHARA data, using the original Japanese maker context and direct nd/νd agreement. The data file also carries catalog C, F, and g-line indices for chromatic tracing.

| Element(s) | Patent nd / νd | OHARA catalog match | Catalog nd / νd | Role |
|---|---:|---|---:|---|
| L1, L6 | 1.77250 / 49.6 | S-LAH66 | 1.77250 / 49.60 | High-index lanthanum flint for positive power |
| L2, L5 | 1.74100 / 52.7 | S-LAL61 | 1.74100 / 52.64 | Lanthanum crown positive elements |
| L3 | 1.71736 / 29.5 | S-TIH1 | 1.71736 / 29.52 | Dense flint negative front-group corrector |
| L4 | 1.59270 / 35.3 | S-FTM16 | 1.59270 / 35.31 | Light-flint rear negative meniscus |
| L7 | 1.72825 / 28.5 | S-TIH10 | 1.72825 / 28.46 | Dense flint negative element of rear doublet |

No anomalous-partial-dispersion glass is required by the patent text or implied by the catalog matches. The design uses ordinary achromatic pairings: lanthanum positive glasses against dense flints, especially at L3 and at the L6/L7 cemented interface. L1/L6 fall on the flint side of the usual νd = 50 boundary despite their lanthanum family name.

## Focus Mechanism

The patent example itself is an infinity-focus prescription and does not publish a focus-mechanism description or separate close-focus spacing tables. For the data file, close focus is therefore represented as a unit-focus model: the lens cell stays rigid and only the final back focal distance is increased. This should be read as the LensVisualizer focusing model, not as a patent-published moving-group table.

| Parameter | Infinity | 0.6 m close focus |
|---|---:|---:|
| BFD | 22.205 mm | 24.504 mm |
| Focus extension | - | 2.298 mm |
| Total first-surface-to-image distance | 51.310 mm | 53.608 mm |

The close-focus value assumes the published 0.6 m shooting distance is measured conventionally from the film plane. Under that convention, a finite-conjugate paraxial trace gives the 2.298 mm extension shown above and a magnification of approximately -0.0657, or about 1:15.2. If the distance were instead measured from the front vertex, the required extension would be about 2.09 mm; the document and data file use the film-plane convention because camera focus distances are normally specified that way.

## Conditional Expressions

The patent gives four conditions: the L2/L3 air-lens power, the air-lens shaping factor, the shutter-unit clearance, and the sixth-group cemented index relationship (claims 2-3; ¶0006-¶0014). Example 1 satisfies all of them.

**Condition (1) - air-lens power between L2 and L3**

$$P_2 = \frac{N_0 - N_2}{R_4} + \frac{N_3 - N_0}{R_5}$$

Required range: $-0.6/f < P_2 < -0.23/f$.  
Computed from Example 1: $P_2 = -0.3893/f$.  
Patent tabulation: $P_2 = -0.39/f$.

This is the negative air-lens power that the patent uses to counter sagittal coma generated by the widened stop/shutter region (¶0009-¶0011).

**Condition (2) - air-lens shaping factor**

$$SF_2 = \frac{R_5 + R_4}{R_5 - R_4}$$

Required: $SF_2 < 8.4$.  
Computed from Example 1: $SF_2 = 8.266$.  
Patent tabulation: $SF_2 = 8.27$.

**Condition (3) - shutter-unit clearance**

The patent defines $L$ as the optical-axis distance between the points where the open-F-number marginal ray intersects R6 and R7 (¶0007, ¶0013). It is therefore a finite-ray clearance, not merely the vertex spacing $d_6$.

Required range: $0.13f < L < 0.19f$.  
Patent tabulation: $L = 0.162f$.  
Independent finite spherical ray trace at the f/2 marginal ray gives approximately $L = 0.160f$ from the rounded prescription. The small difference is consistent with rounding and the finite-ray nature of the definition. The condition is satisfied either way.

**Condition (4) - sixth-group cemented index relationship**

$$N_6(N) < N_6(P)$$

Computed from Example 1: $1.72825 < 1.77250$. The condition is satisfied; the patent states that this preserves the convex-positive action at the sixth-group cemented surface and further reduces sagittal coma (¶0014).

## Air Lenses

The relevant air lens is the narrow space between L2 and L3, bounded by R4 and R5. Both radii are positive, but the index steps produce a net negative air-lens power. The computed $P_2 = -0.3893/f$ is close to the patent's rounded value of $-0.39/f$.

The purpose of this air lens is not simply to add divergence. In the patent's explanation, widening the central gap for a shutter unit worsens field curvature and astigmatism; correcting those aberrations would normally require smaller stop-adjacent radii, which would increase sagittal coma (¶0008-¶0012). The negative L2/L3 air lens gives the designer another degree of freedom before the stop, allowing the shutter clearance to remain large while keeping sagittal coma under control.

## Verification Summary

Independent verification was performed from the patent table using two paraxial methods: a reduced-angle $y$-$n u$ trace and an ABCD matrix trace. The results agree to the shown precision.

| Quantity | Computed, normalized | Computed, ×35 scale | Patent / source value |
|---|---:|---:|---:|
| EFL | 0.999663 | 34.988 mm | f = 1; production 35 mm nominal |
| BFD | 0.634431 | 22.205 mm | Not separately stated |
| Front focal distance | 0.394074 | 13.793 mm | Not separately stated |
| First surface to image | 1.465991 | 51.310 mm | Not separately stated |
| Petzval sum | 0.208376 | 0.0059536 mm^-1 | Not separately stated |
| Petzval radius | - | 167.97 mm | Not separately stated |
| Front section L1-L3 focal length | 3.14368 | 110.03 mm | Not separately stated |
| Rear section L4-L7 focal length | 0.859385 | 30.08 mm | Not separately stated |
| $P_2$ | -0.3893/f | - | -0.39/f |
| $SF_2$ | 8.266 | - | 8.27 |
| $L$ | about 0.160f | about 5.60 mm | 0.162f |

The Petzval sum here uses the surface-by-surface expression $\sum \phi/(n n')$, not a thin-element approximation. This is important in a design with close air lenses and a cemented rear group.

## Design Heritage and Context

The patent cites earlier modified Xenotar-type photographic lenses, including JP S34-379 and JP S37-13039, as the baseline. Those earlier examples were intended for cameras that did not need a large central shutter-unit space. JP H05-164961 adapts the type to a lens-shutter camera by creating more clearance between the front and rear sections and then correcting the aberration penalties introduced by that clearance.

The Hexar AF context is therefore not incidental. A focal-plane-shutter camera would not need the same middle spacing, while published Hexar AF specifications describe a lens-shutter 24 × 36 mm camera with a 35 mm f/2, 7-element / 6-group lens and 0.6 m minimum shooting distance.

## Sources

- JP H05-164961 (特開平5-164961), Konica Corporation, published 1993-06-29; Example 1 prescription and conditions.
- Konica Hexar instruction manual, specifications page: 35 mm lens-shutter camera, 24 × 36 mm frame, Konica Hexar 35 mm f/2, 6 groups / 7 elements, f/22 minimum aperture, 0.6 m to infinity shooting range.
- OHARA Corporation glass data pages and datasheets for S-LAH66, S-LAL61, S-TIH1, S-FTM16, and S-TIH10.
