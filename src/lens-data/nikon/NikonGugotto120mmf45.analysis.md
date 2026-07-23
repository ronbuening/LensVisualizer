# Nikon Gugutto Macro 120mm f/4.5 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 5,764,425
**Filed:** June 14, 1996
**Granted:** June 9, 1998
**Priority date:** August 17, 1995 (JP 7-23950)
**Inventor:** Kouichi Ohshita
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Telephoto Lens
**Embodiment analyzed:** Fourth Embodiment / Example 4, Table 4 and FIG. 7

US 5,764,425 discloses a compact two-group, three-element telephoto lens. From the object side, the optical system consists of a positive cemented component L12 made from a biconvex L1 and biconcave L2, followed by a single negative meniscus component L3 with its convex side facing the image. The fourth embodiment is the best match to the production Nikon Gugutto Macro 120mm f/4.5.

The identification rests on several converging points. Table 4 gives $f = 100.000$, $FNO = 4.60$, $2\omega = 20.2^\circ$, $Bf = 40.657$, and $TL = 0.918$. Scaling this normalized prescription by $\times 1.2$ gives the production focal length class of 120 mm, an infinity back focus of 48.79 mm, and a total track of 110.19 mm. Nikon's own *NIKKOR — The Thousand and One Nights* account identifies the production lens as a 120 mm f/4.5 three-element/two-group telephoto macro using a cemented doublet and a weak negative rear group. Nikon's manual and leaflet identify the same lens as Macro 120mm F4.5 / Soft 90mm F4.8, with the Gugutto Macro state using 2 groups / 3 elements, an angle of about 20°, a Nikon F mount, a 52 mm attachment thread, and a minimum focusing distance of approximately 0.64 m in the standard macro configuration.

The design file transcribes the Gugutto Macro state only. The Fuwatto Soft reconfiguration is discussed below for context, but it is not included as a second optical state in the `.data.ts` file.

## Optical Architecture

The Gugutto Macro is a classical positive-negative telephoto layout reduced to the minimum practical element count. The front group is the positive cemented doublet L12; the rear group is a single weak negative meniscus L3. This is the usual telephoto power distribution: a strong positive group forms the main image, while a separated negative rear group shortens the physical track relative to focal length.

At the patent scale, the total track from the first surface vertex to the image plane is 91.8228 mm for a computed effective focal length of 100.0018 mm, giving $TL/EFL = 0.9182$. At the production scale, the same ratio gives a 110.187 mm track for an approximately 120 mm lens. This satisfies the strict telephoto criterion because the mechanical optical length is less than the effective focal length.

The aperture stop S and a separate fixed stop FS lie in the air gap between the cemented doublet and the rear meniscus. The patent describes the fixed stop as a light-limiting baffle that suppresses harmful upper-side flare from central to peripheral field angles. That detail matters in a three-element lens: the design has too few powered surfaces to correct edge-field aberrations without accepting some vignetting and mechanical light control.

The design is entirely spherical. There are no aspherical surfaces, no ED elements, no floating elements, and no internal focusing groups. The mechanical concept is as important as the optical one: a cemented front group plus one rear element can be assembled as two robust subassemblies, avoiding the alignment sensitivity of a triplet with three separated elements.

## Element-by-Element Analysis

### L1 — Biconvex positive element, front element of cemented doublet

$n_d = 1.58913$, $\nu_d = 61.09$. Glass: 589/611 crown, Q-SK55S / L-BAL35 class; exact 1995 melt uncertain. $f = +41.63$ mm production scale, or $+34.69$ mm at the patent's $f = 100$ scale.

L1 is the principal positive power element. Its front surface is strongly convex, while the cemented rear surface is weaker and negative in radius. The element therefore supplies most of the front group's converging power while leaving part of the spherical-aberration and color correction to the cemented interface with L2.

The patent's first condition, $0.23 < r_1/f < 0.33$, is directed at the tradeoff between zonal spherical aberration and astigmatism. Example 4 gives $r_1/f = 0.269147$, near the middle of the allowed range. If the first surface is made too weak, the center-field zonal spherical residual grows; if it is made too strong in the other direction, astigmatism becomes difficult to control at the edge of the 20° field.

The glass should not be identified as OHARA S-BAL14. The patent value is a 589/611 crown. Current OHARA data places S-BAL14 at 569/563, while the 589/611 class corresponds instead to the S-BAL35 / L-BAL35 / Q-SK55S / M-BACD5N neighborhood. Because the patent gives only numerical $n_d$ and $\nu_d$ values, the responsible identification is a glass-class match rather than a claimed vendor melt.

### L2 — Biconcave negative element, rear element of cemented doublet

$n_d = 1.80384$, $\nu_d = 33.89$. Glass: 804339 dense flint; exact public catalog match not identified. $f = -72.95$ mm production scale, or $-60.79$ mm at the patent scale.

L2 is the high-index, high-dispersion negative partner in the cemented achromat. Its Abbe number is much lower than L1's, so it provides the flint-side dispersion needed to cancel the chromatic error produced by the positive crown. The index difference is also substantial: $n_2 - n_1 = 0.21471$. The patent explicitly uses that index difference as a manufacturing and aberration-control parameter, because a higher negative-element index allows the cemented interface to carry useful power without becoming excessively steep.

The element is biconcave in the patent sign convention: surface 2 has a negative radius and surface 3 has a positive radius. Its rear surface radius, $r_3 = 129.1860$ at the patent scale, enters condition (6), $1.8 < r_3 / \{ f (n_2 - n_1)^{1/2} \} < 3.5$. Example 4 gives 2.788, a value consistent with the patent's stated astigmatism control range.

No current public OHARA, Nikon Q-series, HOYA, or cross-reference table match was found close enough to assign a specific catalog name confidently to $n_d = 1.80384$, $\nu_d = 33.89$. It is therefore stored as a future-upgrade code label, `804339`, rather than forced into a near but incorrect catalog identity.

### L3 — Negative meniscus rear group, convex to image

$n_d = 1.58913$, $\nu_d = 61.09$. Glass: same 589/611 crown class as L1. $f = -283.62$ mm production scale, or $-236.35$ mm at the patent scale.

L3 is a weak negative meniscus separated from the cemented front component by the stop region. Both surfaces have negative radius values, so in this sign convention the element is concave toward the object and convex toward the image. That image-convex meniscus is not incidental; it is central to the patent's claimed geometry.

The rear group performs two jobs. First, it provides the negative power needed to shorten the total track and make the system telephoto. Second, it contributes a negative Petzval term that partially offsets the positive field curvature of the front group. The patent describes L3 as a field flattener for curvature remaining from the front group.

The high Abbe number of L3 matters because rear-group lateral color would be difficult to correct elsewhere in a three-element system. The patent's eighth condition requires $\nu_3 > 50$; Example 4 gives $\nu_3 = 61.09$. The design also reuses the same 589/611 crown class in L1 and L3, reducing the glass palette to two patent glasses.

## Glass Identification and Selection

| Element | Patent $n_d$ | Patent $\nu_d$ | Responsible identification | Role |
|---|---:|---:|---|---|
| L1 | 1.58913 | 61.09 | Q-SK55S / L-BAL35 / S-BAL35 class, exact 1995 melt uncertain | Positive crown element |
| L2 | 1.80384 | 33.89 | 804339 dense flint, unresolved | Achromatizing negative element |
| L3 | 1.58913 | 61.09 | Q-SK55S / L-BAL35 / S-BAL35 class, exact 1995 melt uncertain | Weak negative field flattener / telephoto rear group |

The glass strategy is simple but deliberate. L1 and L3 use the same low-dispersion crown class, while L2 uses a much higher-index, higher-dispersion flint. This lets the cemented front group act as a compact achromat while keeping the rear group chromatically mild. It is also consistent with the production objective: a very low-cost lens with the fewest possible glass types.

The 589/611 glass deserves special caution. A six-digit code of 589611 means $n_d \approx 1.589$ and $\nu_d \approx 61.1$. Nikon's current Q-series catalog lists Q-SK55S at 589611 with $n_d = 1.588870$ and $\nu_d = 61.14$. OHARA's comparative tables place this neighborhood around S-BAL35 / L-BAL35, not S-BAL14. Current OHARA S-BAL14 is 569563 with $n_d = 1.56883$ and $\nu_d = 56.36$, which is too far from the patent value to use as a valid glass label.

The L2 glass is left unmatched. Several modern dense flints and lanthanum flints have similar index or dispersion, but none matched the patent's $1.80384 / 33.89$ pair closely enough to justify a named catalog assignment. The data file therefore stores the patent's numerical $n_d$ and $\nu_d$ values and labels the glass by its code and class.

## Focus Mechanism

The Gugutto Macro uses unit focusing. The entire three-element optical assembly moves forward as a single unit, and no internal air space changes. The `.data.ts` file models this by varying only the final back-focus gap.

At infinity, the scaled patent back focus is 48.7884 mm. Solving the finite-conjugate paraxial imaging condition for Nikon's approximately 0.64 m minimum focusing distance gives a close-focus back-focus gap of 88.5565 mm. The corresponding paraxial magnification is $|m| = 0.3314$, effectively the 1/3× value Nikon gives for the standard Gugutto Macro configuration.

| State | Object distance basis | Final BFD in model | Computed paraxial magnification |
|---|---:|---:|---:|
| Infinity | patent Table 4, scaled ×1.2 | 48.7884 mm | 0 |
| Standard close focus | 0.64 m from image plane | 88.5565 mm | 0.331× |

The Sarani Gugutto Macro configuration described by Nikon is a mechanical reassembly that places the optical unit at the front of the barrel and uses the barrel as additional extension. Nikon gives a maximum reproduction ratio of approximately 1/1.4× for that state. It is not represented as a second focus endpoint in this data file because the patent prescription describes the optical formula, not that alternate mechanical placement.

## Aspherical Surfaces

There are no aspherical surfaces in the Example 4 prescription. All five refractive surfaces are spherical. The stop and fixed stop are flat air surfaces and are not powered optical surfaces.

This all-spherical choice is consistent with the cost and assembly constraints described by Nikon. A molded or polished asphere would have contradicted the design premise: minimum element count, simple disassembly/reassembly, and a very low retail price target.

## Conditional Expressions

US 5,764,425 gives eight conditional expressions. Example 4 satisfies all of them. In condition (4), $d_3$ is the full air gap between the cemented component L12 and the rear meniscus L3, including the sub-spaces occupied by the aperture stop and fixed stop: $16.6667 + 12.5000 + 10.0000 = 39.1667$ at the patent scale.

| Condition | Formula | Required range | Example 4 value |
|---|---|---:|---:|
| (1) | $r_1/f$ | $0.23 < \cdot < 0.33$ | 0.269147 |
| (2) | $r_4/f$ | $-0.13 < \cdot < -0.09$ | -0.108276 |
| (3) | $(r_4-r_5)/d_4$ | $0.51 < \cdot < 0.70$ | 0.563125 |
| (4) | $d_3/f$ | $0.32 < \cdot < 0.45$ | 0.391667 |
| (5) | $n_2-n_1$ | $> 0.05$ | 0.214710 |
| (6) | $r_3 / \{f(n_2-n_1)^{1/2}\}$ | $1.8 < \cdot < 3.5$ | 2.787978 |
| (7) | $n_2 - 23/\nu_2 - n_1 + 40/\nu_1$ | $0.145 < \cdot < 0.27$ | 0.190815 |
| (8) | $\nu_3$ | $> 50$ | 61.09 |

These conditions show the patent's priorities. Conditions (1) through (4) control curvature and spacing for spherical aberration, astigmatism, distortion, field curvature, and focus-distance-dependent image-plane variation. Conditions (5) through (8) control the glass pair and rear-group dispersion so that color correction remains acceptable in a system with only three glass elements.

## Fuwatto Soft Configuration

Nikon's production lens is mechanically convertible into the Fuwatto Soft 90mm f/4.8 state. The conversion removes the rear meniscus and reverses the cemented doublet so that the concave side faces the object. This is not disclosed as part of the transcribed telephoto prescription in US 5,764,425; it is production context documented by Nikon's article and manual, and it is treated separately from the Gugutto Macro data file.

The paraxial calculation explains the marketed 90 mm focal length. The cemented doublet L12 alone has an effective focal length of 73.207 mm at the patent scale. Scaled by $\times 1.2$, this becomes 87.849 mm, close to the marketed 90 mm soft-focus specification. Reversing the doublet does not materially change the paraxial focal length, but it does change the spherical-aberration balance, producing the soft-focus rendering Nikon describes.

## Verification Summary

All prescription values in the data file were checked by an independent paraxial ray trace using reduced-angle ABCD matrices. The trace reproduces the patent's Table 4 values within rounding error.

| Parameter | Patent Table 4 | Computed at patent scale | Scaled production model |
|---|---:|---:|---:|
| Effective focal length | 100.000 mm | 100.0018 mm | 120.0021 mm |
| Back focal distance | 40.657 mm | 40.6572 mm | 48.7887 mm |
| Total track | 91.8228 mm | 91.8228 mm | 110.1874 mm |
| Tele-ratio | 0.918 | 0.9182 | 0.9182 |
| Design f-number | 4.60 | 4.60 | 4.60 |
| Full field angle | 20.2° | 20.2° basis retained | 20.2° basis retained |

The front cemented component has a computed focal length of 73.207 mm at the patent scale, or 87.849 mm after scaling. The rear meniscus has a standalone in-air focal length of -236.347 mm at the patent scale, or -283.616 mm after scaling. The surface-by-surface Petzval sum is +0.00158263 mm⁻¹ at the patent scale, or $f \cdot P = +0.15826$ in normalized form.

Semi-diameters were not published in the patent. The data file therefore uses conservative inferred values. The front doublet clear aperture is limited by edge-thickness feasibility rather than by the full unvignetted off-axis paraxial bundle, which is consistent with the patent's use of a fixed stop and Nikon's own comments about edge-field flare and reduced distant-scene edge performance.

## Design Heritage and Context

The patent explicitly positions this lens against more conventional Ernostar and Gauss telephoto forms. Those designs correct aberrations more comfortably but require more glass elements. The Gugutto Macro instead uses a much older telephoto principle — positive front group, negative rear group — and pushes it to a wider 20° field and approximately f/4.5 speed by tightly constraining the rear meniscus bend, the front/rear group spacing, and the glass pair in the cemented doublet.

The result should not be read as a conventional high-performance macro lens. Nikon's account is clear that the design was cost-driven, mechanically simple, and optimized for close-up use rather than flat-field distant reproduction. The optical interest lies in how much usable performance Ohshita extracted from only three spherical elements, two groups, two glass classes, one fixed aperture, and a reconfigurable barrel.

## Sources

1. US Patent 5,764,425, Kouichi Ohshita, "Telephoto Lens," Nikon Corporation, filed June 14, 1996, granted June 9, 1998. Primary prescription source: Example 4 / Table 4 / FIG. 7.
2. Kouichi Ohshita, "Nikon Fun Fun LensSet, Part 1 (Gugutto Macro/Fuwatto Soft)," *NIKKOR — The Thousand and One Nights*, Tale No. 52, Nikon Corporation. https://imaging.nikon.com/imaging/information/story/0052/
3. Kouichi Ohshita, "Nikon Fun Fun LensSet, Part 2 (Gyogyotto 20, Dodotto 400)," *NIKKOR — The Thousand and One Nights*, Tale No. 54, Nikon Corporation. https://imaging.nikon.com/imaging/information/story/0054/
4. Nikon Inc., *Nikon Amusing Lenses* manual, October 1995. https://www.nikon-image.com/enjoy/life/historynikkor/0054/download/manual.pdf
5. Nikon Corporation, "Optical Glass for Molded Lenses (Q-series)," Q-SK55S entry. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog-mold/
6. HOYA GROUP Optics Division, "Glass Cross Reference Index." https://www.hoya-opticalworld.com/english/products/crossreference.html
7. OHARA INC., "Comparative Table of Recommended Glasses." https://www.ohara-inc.co.jp/en/product/01002/
8. OHARA Corporation, *Optical Glass Pocket Catalog*, May 2023. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
