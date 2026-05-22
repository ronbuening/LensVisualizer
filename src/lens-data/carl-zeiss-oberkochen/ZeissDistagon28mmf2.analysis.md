# Carl Zeiss Distagon T* 28mm f/2 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** DE 2359156 A1  
**Application Number:** P 23 59 156.2-51  
**Filed:** 28 November 1973  
**Published:** 12 June 1975  
**Inventor:** Dr. Erhard Glatzel, Heidenheim  
**Applicant:** Fa. Carl Zeiss, 7920 Heidenheim  
**Title:** Lichtstarkes photographisches Objektiv mit großem Bildwinkel  
**Embodiment analyzed:** Beispiel 12 (Example 12), Figure 7

DE 2359156 A1 discloses a family of high-speed wide-angle photographic objectives using a relaxed negative-positive front construction, a central aperture-stop region, and a strong negative member behind the stop. Example 12 is the relevant numerical prescription for the early 9-element Distagon T* 28mm f/2 design. The patent table gives:

- $F = 1.0000$ as the normalized equivalent focal length.
- $f/2.1$ as the design relative aperture.
- $2\omega_0 = 74.5^\circ$ as the full field angle.
- $s'_\infty = +1.2687F$ as the back focal distance.

The production match is based on convergence rather than on an explicit product name in the patent. Example 12 has 9 glass elements in 8 air-spaced groups, all spherical surfaces, a 74.5° patent field angle, and an f/2.1 design aperture that is consistent with a marketed f/2 wide-angle. Historical Contax/Yashica Carl Zeiss literature lists the Distagon T* f/2 28 mm as a 9-element / 8-group lens with a 74° angular field, 0.24 m minimum focus, f/2-f/22 aperture range, 55 mm filter thread, and close-range floating correction. A separate Carl Zeiss data sheet for the Contax/Yashica version lists the actual focal length as 28.8 mm. The data file therefore scales the normalized patent prescription by 28.8 mm while retaining 28 mm as the marketed focal length.

This file describes the early 9-element Contax/Yashica-type optical formula. It does not describe the later ZE/ZF/ZK/ZF.2 "Classic" Distagon T* 2/28, whose Zeiss industrial-era data sheet lists 10 elements in 8 groups and therefore represents a revised formula. Claims that the same optical prescription was used unchanged in other manufacturers' 28 mm f/2 lenses are not supported by DE 2359156 A1 and are not used as identification evidence here.

## Optical Architecture

Example 12 is a retrofocus wide-angle objective. Its back focal distance is longer than its equivalent focal length: the verified normalized value is $s'_\infty = 1.26872F$, which becomes 36.54 mm after scaling to the 28.8 mm design focal length. This long rear clearance is the defining mechanical reason for the Distagon/retrofocus architecture in a 35 mm SLR lens.

The lens has 9 glass elements in 8 air-spaced groups:

1. **Group B:** L1 + L2, a weakly diverging object-side group. L1 is the negative meniscus $N_B$ and L2 is a thick weak positive collector. The large L1-L2 air space is $\beta$.
2. **Air lens x:** the very thin air space between L2 and L3. In the patent notation this is the collecting air lens between Groups B and A.
3. **Group A:** L3 + L4a/L4b + L4c. L3 is the negative meniscus $N_A$; L4a-L4b form a cemented doublet; L4c is an air-spaced positive singlet immediately before the central stop space.
4. **Central stop space CS:** the axial region between L4c and L5. Example 12 gives $CS = 0.061110F$, or 1.760 mm at the 28.8 mm scale.
5. **Group N:** L5, the strong post-stop negative dense-flint element.
6. **Rear group:** L6 and L7, two positive menisci separated by a near-contact air space.

The patent Figure 7 cross-section confirms this layout: a front B group, a second A group with a cemented L4a/L4b doublet plus air-spaced L4c, the central stop space, the strong negative L5, and the final L6-L7 rear pair. The figure also labels the characteristic air spaces $\alpha$, $\beta$, $x$, $\gamma$, and $CS$ used in the patent conditions.

Independent paraxial verification of the corrected Example 12 prescription gives $EFL = 0.9999968F$ and $BFD = 1.2687217F$. At the 28.8 mm scale, this is $EFL = 28.7999$ mm and $BFD = 36.5392$ mm. The front-vertex to last-surface length is 78.398 mm, giving a front-vertex to image-plane track of 114.94 mm. These calculations use a surface-by-surface y-nu paraxial trace, not a thin-lens approximation.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex toward object (Group I / $N_B$)

nd = 1.63854, νd = 55.38. Glass: SK18A / N-SK18 class (Schott, catalog-near equivalent). f = -47.63 mm.

L1 is the object-side negative meniscus of Group B. It has both centers of curvature to the image side, with the rear surface much more strongly curved than the front. Its standalone in-air focal length is moderately negative, but within the complete system it is deliberately relaxed compared with the strong post-stop negative element.

The patent's design argument is that the long-conjugate-side negative menisci $N_B$ and $N_A$ should be weakly refracting and mechanically relaxed. L1 therefore contributes the initial retrofocus divergence without carrying the full aberration burden of the wide-angle conversion. The high-index crown-class glass gives adequate bending at moderate curvature.

### L2 — Positive Meniscus, concave toward object (Group II / B)

nd = 1.66446, νd = 35.84. Glass: BASF2 / N-BASF2 class (Schott, catalog-near equivalent). f = +189.54 mm.

L2 is a thick, weak positive meniscus. Its normalized standalone power is very small; its main function is not simple image formation but relaxation of the front-group ray geometry. Together, L1 and L2 form a weakly diverging front group with a verified combined focal length of -80.81 mm at the 28.8 mm scale.

The large air gap $\beta$ between L1 and L2 is part of the patent's power-distribution strategy. In Example 12, $\beta = 0.383671F$, or 11.050 mm after scaling.

### L3 — Negative Meniscus, convex toward object (Group III / $N_A$)

nd = 1.74400, νd = 44.77. Glass: LAF2 / N-LAF2 class (Schott, catalog-near equivalent). f = -102.63 mm.

L3 is the second negative meniscus named by the patent, $N_A$. It sits just before the strong positive pre-stop assembly. It is weaker than L1 in standalone focal length, but it operates at a different ray height and angle, so its role is mainly to condition the oblique bundles before they encounter the L4a/L4b/L4c positive group.

The air gap $\alpha$ between L3 and L4a is $0.246869F$, or 7.110 mm at scale. Together with $\beta$, this gap determines the separation between the two relaxed negative menisci and the collecting air lens $x$.

### L4a — Biconvex Positive, front element of the cemented doublet

nd = 1.74400, νd = 44.77. Glass: LAF2 / N-LAF2 class (Schott, catalog-near equivalent). f = +18.71 mm.

L4a is the strongest positive element in the system when considered as a standalone in-air element. It is the front member of the cemented doublet in Group A and supplies the main positive power before the aperture stop.

The corrected patent reading for its front radius is $R_{4a} = +1.10591F$, not the visually similar but incorrect +1.09591. This value is important: using the misread value breaks the patent's stated focal length and back-focus agreement.

### L4b — Biconcave Negative, rear element of the cemented doublet

nd = 1.60562, νd = 43.92. Glass: BAF4 / N-BAF4 class (Schott, catalog-near equivalent). f = -31.25 mm.

L4b is cemented to L4a at the shared surface $R_{4a}' = R_{4b} = -0.75526F$. It reduces the excessive power that L4a would otherwise contribute, while helping control Petzval curvature and chromatic balance inside the pre-stop positive group.

The doublet L4a/L4b has a verified in-situ group focal length of +38.24 mm when isolated as the cemented doublet at the 28.8 mm scale. The rear surface of L4b is $R_{4b}' = +5.66375F$ in the patent table.

### L4c — Biconvex Positive, air-spaced singlet in Group A

nd = 1.72000, νd = 50.42. Glass: LAK10 / N-LAK10 class (Schott, catalog-near equivalent). f = +45.29 mm.

L4c is an air-spaced positive collector behind the cemented doublet. Its front surface is relatively weak and its rear surface is more strongly curved, placing useful positive power immediately before the central stop space.

The combined L4a/L4b/L4c positive assembly has a verified group focal length of +26.04 mm. Including L3, the full Group A has a verified focal length of +29.66 mm. This makes Group A the principal positive section that counterbalances the negative front and post-stop components.

### L5 — Biconcave Negative, post-stop dense-flint element (Group V / N)

nd = 1.80518, νd = 25.43. Glass: SF6 (Schott legacy). f = -19.99 mm.

L5 is the strong negative element immediately behind the stop region. It is the most powerful negative singlet in the lens and is central to both the retrofocus throw and the field-curvature balance.

Its glass is a dense flint with high dispersion. In a fast retrofocus wide-angle, this position gives a negative, highly dispersive element substantial leverage over longitudinal color, lateral color, and the Petzval sum generated by the strong positive pre-stop elements.

### L6 — Positive Meniscus, first rear collector (Group VI)

nd = 1.71300, νd = 53.85. Glass: LAK8 / N-LAK8 class (Schott, catalog-near equivalent). f = +57.38 mm.

L6 is the first element of the rear positive pair. It is a positive meniscus concave toward the object. Its position after L5 allows it to help reconverge the beam while controlling astigmatism and field curvature in the rear part of the system.

In the later aspherical examples of the same patent family, the corresponding front surface $R_6$ is selected as the aspherical surface. Example 12 leaves it spherical.

### L7 — Positive Meniscus, final element (Group VII)

nd = 1.78831, νd = 47.37. Glass: LAF21 / N-LAF21 class (Schott, catalog-near equivalent). f = +48.31 mm.

L7 is the final positive meniscus. Its front surface is very weak and its rear surface supplies most of the element power. The L6-L7 rear pair has a verified combined focal length of +26.56 mm at the production scale.

The patent table gives the final rear radius as $R_7' = -1.25886F$. This value is another high-leverage transcription point; using -1.25686 instead produces a measurable mismatch in the paraxial verification.

## Glass Identification and Selection

The patent gives refractive index and Abbe number values but does not print Schott glass names. Because the patent is a Carl Zeiss German filing and the values correspond closely to Schott legacy or later N-series glass families, the data file uses Schott class labels while preserving the exact patent nd and νd values. These labels should be read as catalog-near identifications, not as explicit names printed in the patent.

| Element | Patent nd | Patent νd | Catalog-near glass label | Optical use |
|---|---:|---:|---|---|
| L1 | 1.63854 | 55.38 | SK18A / N-SK18 class | relaxed front negative meniscus |
| L2 | 1.66446 | 35.84 | BASF2 / N-BASF2 class | weak thick front collector |
| L3, L4a | 1.74400 | 44.77 | LAF2 / N-LAF2 class | negative meniscus plus strong positive doublet member |
| L4b | 1.60562 | 43.92 | BAF4 / N-BAF4 class | negative cemented partner |
| L4c | 1.72000 | 50.42 | LAK10 / N-LAK10 class | pre-stop positive collector |
| L5 | 1.80518 | 25.43 | SF6 legacy | strong dense-flint post-stop negative |
| L6 | 1.71300 | 53.85 | LAK8 / N-LAK8 class | rear positive meniscus |
| L7 | 1.78831 | 47.37 | LAF21 / N-LAF21 class | final positive meniscus |

The chromatic correction is distributed. The strongest dispersive contribution is the SF6 element L5, while the positive power is spread across multiple lanthanum and barium glass elements. The L4a/L4b cemented pair is not a simple classical achromat: the Abbe-number separation between LAF2-class and BAF4-class glasses is too small for that interpretation. Its role is better understood as a combined monochromatic, Petzval, and partial chromatic balancing element within the larger system.

## Focus Mechanism

DE 2359156 A1 Example 12 publishes only the infinity-focus prescription. It does not provide a close-focus table, variable-spacing schedule, magnification table, or floating-group displacement data. The data file therefore models the infinity state only and keeps the back focal distance fixed.

Historical Contax/Yashica Carl Zeiss literature states that the production Distagon T* f/2 28 mm uses correction of aberration at close range with a floating element and lists a 0.24 m minimum focus distance. That production fact is recorded in the metadata, but the moving group is not reconstructed because the patent provides no numerical travel data for Example 12.

The likely reason for floating correction is straightforward: at 0.24 m object distance, a 28 mm retrofocus lens sees a large enough conjugate-ratio change that field curvature, astigmatism, and distortion balance shift substantially from infinity. The exact floating group cannot be assigned from this patent alone.

## Aspherical Surfaces

Example 12 is all-spherical. No aspherical coefficients are used in the data file.

The patent does disclose aspherical variants in later examples. For Examples 15 through 21, the selected aspherical surface is the surface with radius $R_6$, the front surface of the first positive rear meniscus. The patent expresses the surface sag as

$$
P = c_1H^2 + c_2H^4 + c_3H^6 + c_4H^8 + c_5H^{10},
$$

with $c_1 = (2R_6)^{-1}$. This is a total sag representation using the local vertex radius, not the standard conic-plus-even-asphere form used in the LensVisualizer data file. Since Example 12 is spherical, no conversion is required.

The later examples list negative $c_2$ coefficients, with Example 21 also listing a positive $c_3$ term. Those coefficients are relevant to the patent family but not to the transcribed Example 12 design.

## Conditional Expressions

The patent defines two front-group power-distribution conditions. In the patent notation,

$$
0.708 \le -Q_a < 1.713
$$

and

$$
1.533 < -Q_b < 3.123.
$$

The terms are based on surface-power sums: $\phi_x$ is the power of the collecting air lens $x$ between Groups B and A; $\phi_{S-}$ is the sum of the surface powers of the two negative menisci $N_B$ and $N_A$; and $\phi_{N,B}$ is the surface-power sum of the object-side negative meniscus. Recomputing from the corrected Example 12 values gives:

| Quantity | Normalized value |
|---|---:|
| $\phi_{N,B}$ | -0.611566 |
| $\phi_{N,A}$ | -0.313706 |
| $\phi_{S-}$ | -0.925272 |
| $\phi_x$ | +1.123750 |
| $-Q_a = -\phi_x / \phi_{S-}$ | 1.214507 |
| $-Q_b = -\phi_x / \phi_{N,B}$ | 1.837495 |

Both values satisfy the patent inequalities. The air-space constraints are also satisfied: $\alpha = 0.246869F$, $\beta = 0.383671F$, and $\alpha + \beta = 0.630540F$, which lies inside the patent's stated range for the combined spacing.

## Verification Summary

The prescription was re-read directly from the patent image for Example 12 and then checked by independent paraxial tracing. The values that materially affect the focal-length check are:

- $R_{4a} = +1.10591F$.
- $R_{4b}' = +5.66375F$.
- $R_7' = -1.25886F$.

With those values, the unrounded normalized prescription returns $EFL = 0.9999968F$ and $BFD = 1.2687217F$. The BFD agrees with the patent's $s'_\infty = +1.2687F$ to about $2.2 \times 10^{-5}F$. A trace using the visually plausible but incorrect readings $R_{4a}=+1.09591F$, $R_{4b}'=+5.66775F$, and $R_7'=-1.25686F$ returns $EFL \approx 0.99467F$ and $BFD \approx 1.25083F$, so those readings are rejected.

The Petzval sum was calculated surface by surface using $\phi/(n n')$, not by adding thin-element powers. The normalized Petzval sum is +0.138996, corresponding to +0.004826 mm^-1 at the 28.8 mm scale. The sign convention gives a Petzval radius of approximately -207 mm.

Because the patent does not publish clear apertures, the semi-diameters in the data file are inferred. They satisfy the renderer constraints used for this corpus: no semi-diameter exceeds 0.715 of its corresponding absolute radius, element front/rear clear-aperture ratios remain within 1.25, edge thickness remains positive with at least roughly 1.17 mm clearance in the limiting inferred elements, and all checked cross-gap sag intrusions remain below 90% of the air gap. These clear apertures should be treated as visualization-safe inferred apertures, not as measured production mechanical apertures.

## Sources

- DE 2359156 A1, "Lichtstarkes photographisches Objektiv mit großem Bildwinkel," Erhard Glatzel / Carl Zeiss, filed 28 November 1973, published 12 June 1975. Primary source for the prescription, figures, conditional expressions, and aspherical-family discussion.
- Carl Zeiss, "Distagon T* f/2 - 28 mm," Contax/Yashica data sheet, Cat. No. 10 48 43. Source for production focal length, image format, angular field, and 9-element / 8-group production data.
- Yashica / Carl Zeiss, "Interchangeable Carl Zeiss T* Lenses," historical Contax/Yashica lens literature. Source for the production 9-element / 8-group listing, close-range floating correction, 74° angular field, 0.24 m minimum focus, f/2-f/22 aperture range, 55 mm filter thread, dimensions, and weight.
- SCHOTT optical glass catalog data for N-SK18, N-BASF2, N-LAF2, N-BAF4, N-LAK10, SF6, N-LAK8, and N-LAF21 families. Used only as catalog-near glass identification support; patent nd and νd values remain authoritative in the data file.
