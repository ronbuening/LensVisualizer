# Sony Planar T* 50mm F1.4 ZA SSM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2014/0071331 A1, "Imaging Lens and Imaging Apparatus."
**Applicant:** Sony Corporation, Tokyo, Japan.
**Inventors:** Kouji Katou, Yumiko Uehara, Motoyuki Otake.
**Priority:** JP 2012-196889, filed 7 September 2012.
**Published:** 13 March 2014.
**Embodiment analyzed:** Numerical Example 4 (Table 10, aspheric Table 11, specs Table 12; cross-section FIG. 7; aberrations FIG. 8).

The prescription is identified with the production **Sony Planar T* 50mm F1.4 ZA SSM** (model SAL50F14Z) on the basis of converging evidence:

1. **Element and group count.** The patent's eight-element, five-group configuration matches Sony's published specification of 8 elements in 5 groups.
2. **Aspherical element count.** Two aspherical surfaces on two separate elements matches the marketed "two aspherical elements."
3. **Focal length and aperture.** The patent states $f = 51.5$ mm, $F_{\rm no} = 1.45$; the production lens is marketed as 50 mm f/1.4.
4. **Back focal distance.** BF = 36.098 mm; the patent prescription excludes cover glass. The 8.4 mm difference between BF and the 44.5 mm A-mount flange distance accommodates the sensor's cover glass stack and mechanical mount spacers.
5. **Half-field angle.** $\omega = 23.39°$ yields a full angle of view of $2\omega \approx 46.8°$, consistent with Sony's specified 47°.
6. **Minimum focus distance.** 0.45 m matches Sony's published MFD.
7. **Maximum magnification.** Paraxial ray trace at 0.45 m MFD yields $|m| = 0.142$, matching Sony's specified 0.14×.
8. **Focus type.** The patent describes rear focus with G2 + aperture stop moving as a unit; Sony's marketing confirms "rear-focus system that maintains the same lens body length during AF."
9. **Autofocus drive.** SSM (Super Sonic wave Motor), consistent with the lightweight rear focus group enabling fast AF.
10. **Patent timing.** Priority date September 2012 aligns with the lens's commercial introduction alongside the Sony α99 in late 2012.

All seven numerical examples in the patent share the same architectural topology; Example 4 is selected here as the design whose glass palette best aligns with the production lens's reported use of glass-molded aspherical elements.

## Optical Architecture

The design is a modified double-Gauss (Planar-type) with rear-focus capability. In the classical double-Gauss lineage, a roughly symmetric arrangement of positive and negative groups around a central stop provides excellent correction of coma, astigmatism, and lateral colour. This design departs from the classical template by splitting the front half into two sub-groups of opposite sign and relocating the rear half into a movable focusing group, producing a two-group, five-sub-group power layout:

**First lens group G1** ($f_{\rm G1} = +154.7$ mm, positive): Fixed during focus. Subdivided into:

- **G1F** (object-side sub-group, $f_{\rm G1F} = -522.8$ mm, weakly negative): L1 (biconvex positive) + L2 (biconcave negative), air-separated. L1 collects the incoming beam with strong positive power, while L2's negative power slightly overcorrects, giving the pair a very weakly negative net power that extends the back focal distance toward the A-mount flange clearance.
- **G1R** (image-side sub-group, $f_{\rm G1R} = +109.7$ mm, positive): L3 + L4 cemented doublet (positive biconvex / negative biconcave). The main positive collector ahead of the stop; the cemented interface provides chromatic correction.

The largest air gap within G1 lies between G1F and G1R (surface 4 rear to surface 5A front, $d = 3.000$ mm at infinity), as required by the patent's architectural constraint (¶0059, ¶0097). This gap is the maximum air space within G1, consistent with the patent's design rule that the G1F–G1R separation be the widest internal spacing in the first group.

**Aperture stop S**: Positioned between G1 and G2. Moves integrally with G2 during focus (¶0084–0085), preserving the illumination cone geometry across the focus range.

**Second lens group G2** ($f_{\rm G2} = +45.9$ mm, positive): The focusing group; moves from the image side toward the object side as the subject distance changes from infinity to close focus. Contains two cemented doublets:

- **First cemented lens (Da):** L5 (biconcave negative) + L6 (biconvex positive). A high-index achromatic pair with strong net positive power; both glasses are technically flints, but their Abbe-number differential ($\Delta\nu_d = 7.0$) provides the dispersion contrast needed for chromatic correction.
- **Second cemented lens (Db):** L7 (negative meniscus, concave to image) + L8 (biconvex positive). The meniscus-plus-biconvex pair provides both positive power and field-flattening correction; the rear surface of L8 is aspherical.

Overall power distribution: positive (G1) – stop – positive (G2), with the negative sub-group G1F providing retro-telephoto-like back-focus extension within G1. The overall optical length from first surface to image plane is approximately $96.1$ mm, or $1.87\times$ the focal length — a consequence of the fast f/1.4 aperture requiring large element diameters and generous air spaces for aberration correction.

## Element-by-Element Analysis

### L1 — Biconvex Positive (G1F)

$n_d = 1.834805$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA) — high-index lanthanum glass. $f = +57.0$ mm.

L1 is the front collector. Its strong positive power refracts the entering beam inward, reducing the required clear aperture of downstream elements. The high refractive index ($n_d = 1.835$) permits strong curvatures with relatively low surface angles, keeping Fresnel losses and higher-order aberration contributions manageable. The biconvex shape distributes the positive power across both surfaces, though asymmetrically: the front surface ($R_1 = +60.4$ mm) carries roughly 78% of the element's power, while the weaker rear surface ($R_2 = -214.6$ mm) carries the remainder.

This asymmetric biconvex form directs the exit beam gently toward L2, keeping the air space sensitivity between L1 and L2 low (¶0079).

### L2 — Biconcave Negative (G1F)

$n_d = 1.592703$, $\nu_d = 35.5$. Glass: S-FTM16 (OHARA) — light flint, 593/355. $f = -48.1$ mm.

L2 provides the negative power that gives G1F its diverging character. The low refractive index paired with a flint-range Abbe number ($\nu_d = 35.5$) creates a dispersion differential with L1 ($\nu_d = 42.7$) that partially achromatizes the front group. The biconcave shape ensures the negative power is divided across two surfaces, reducing higher-order spherical aberration.

The G1F sub-group (L1 + L2 combined) has $f_{\rm G1F} = -522.8$ mm — very weakly negative. The design intent is not to provide strong divergence, but to extend the back focal distance beyond what a purely positive front group would achieve, ensuring clearance for the A-mount mirror box ($\sim$44.5 mm flange distance), while simultaneously pre-correcting the beam entering G1R. The weak power keeps aberration sensitivity in the L1–L2 air gap low (¶0031, ¶0079).

### L3 — Biconvex Positive, Aspherical Front Surface (G1R, cemented with L4)

$n_d = 1.851348$, $\nu_d = 40.1$. Glass: E-LASFH13 (HIKARI) — high-index lanthanum dense flint. $f = +31.9$ mm.

L3 is the strongest positive element in the front group (G1) and the second-strongest positive element in the entire system (after L6 in G2). Its front surface ($R_5 = +28.547$ mm, aspherical) has the third-highest curvature among all surfaces in the prescription, behind L5's front ($|R_9| = 21.8$ mm) and L4's rear ($|R_7| = 25.0$ mm). This surface is the primary contributor to G1's positive power. The aspherical figure on this surface (K = 0, polynomial-only departure) is specifically tasked with controlling the spherical aberration introduced by the fast f/1.4 beam. At the full aperture semi-diameter, the aspherical departure reaches approximately $-94$ μm relative to the base sphere — the surface is *flatter* at the periphery than the underlying sphere, progressively reducing the refraction angle of marginal rays and thereby correcting the undercorrected spherical aberration that a pure sphere would introduce.

The glass selection is notable: $n_d = 1.851$, $\nu_d = 40.1$ falls in the dense lanthanum flint region. Despite being classified as a "flint" by dispersion, the high index permits a steeply curved surface with smaller angular incidence, which is beneficial for controlling monochromatic aberrations at f/1.4. This glass is identified as HIKARI E-LASFH13, which appears in Examples 1, 4, 5, 6, and 7 of the patent (Examples 2 and 3 use a different glass, $n_d = 1.882$, at this position) — it is clearly a key material in the design family.

### L4 — Biconcave Negative (G1R, cemented with L3)

$n_d = 1.612930$, $\nu_d = 37.0$. Glass: E-FD7 class (HOYA/HIKARI) — moderate flint. $f = -38.8$ mm.

L4 forms the rear half of the G1R cemented doublet. Its junction surface with L3 ($R_6 = -503.4$ mm) is nearly flat, meaning the chromatic correction of the L3–L4 pair arises primarily from the refractive-index step ($\Delta n_d = 1.851 - 1.613 = 0.238$) rather than from surface curvature at the junction. The rear surface of L4 ($R_7 = +25.007$ mm) is steeply curved and faces the large G1–G2 air gap.

The L3–L4 doublet has a combined focal length equal to the G1R group focal length of $+109.7$ mm. The Petzval contribution of this cemented pair is significant: the strong positive L3 pushes the Petzval sum toward inward field curvature, while L4's negative power partially compensates. The net G1R contribution to the Petzval sum is moderately positive.

### Aperture Stop (S)

The aperture stop is located in the air gap between G1 and G2, at 14.509 mm behind L4's rear surface at infinity focus. The production lens uses a nine-blade circular diaphragm. The stop moves integrally with G2 during focusing (¶0084–0085, ¶0103), which preserves the relative illumination across the field as focus shifts — a significant advantage over designs where the stop is fixed and only the rear group moves, which can cause peripheral light loss at close focus distances.

### L5 — Biconcave Negative (G2, cemented with L6)

$n_d = 1.647690$, $\nu_d = 33.8$. Glass: S-TIF4 (OHARA) / SF2 (Schott) equivalent — dense flint. $f = -19.3$ mm.

L5 is the first element of the rear focus group and the strongest negative element in the entire system. Its short focal length ($-19.3$ mm) provides the strong negative power needed at this position. In the double-Gauss lineage, this element occupies the classic "inner negative" position immediately behind the stop, where it encounters the most divergent off-axis ray bundles. Its role is threefold: to provide the negative power that the rear group's overall positive-power balance requires, to create the high-order spherical aberration contributions that cancel against L6, and to introduce lateral colour that the cemented interface with L6 corrects.

The $\nu_d = 33.8$ Abbe number identifies this as a dense flint, providing the dispersion differential needed for chromatic correction at the cemented interface.

### L6 — Biconvex Positive (G2, cemented with L5)

$n_d = 1.883000$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA) — high-index lanthanum glass. $f = +22.2$ mm.

L6 is one of the most optically demanding elements in the design. With $n_d = 1.883$ — the highest refractive index in the system — and an Abbe number of 40.8, this glass falls in the lanthanum flint region by traditional classification ($\nu_d < 50$). However, relative to its doublet partner L5 ($\nu_d = 33.8$), L6 functions as the lower-dispersion element — analogous to a crown's role in a classical achromatic pair, despite both glasses being technically flints. The very high index permits strong curvatures while maintaining relatively low surface angles, which is critical for controlling spherical aberration at f/1.4.

The L5–L6 cemented doublet has a net positive focal length, with the strong positive power of L6 ($+22.2$ mm) substantially exceeding the negative power of L5 ($-19.3$ mm). This pair is the primary powerhouse of G2 and provides the bulk of the rear group's convergence. The cemented interface between L5 and L6 ($R_{10} = +30.673$ mm) is where the chromatic correction occurs: the large refractive-index step ($\Delta n_d = 1.883 - 1.648 = 0.235$) and the dispersion differential ($\Delta \nu_d = 40.8 - 33.8 = 7.0$) jointly correct both axial and lateral colour contributed by this pair.

S-LAH58 is used at this position across all seven patent examples, confirming its essential role in the design.

### L7 — Negative Meniscus, Concave to Image (G2, cemented with L8)

$n_d = 1.698950$, $\nu_d = 30.1$. Glass: E-FD15 (HIKARI) / SF15 (Schott) equivalent — dense flint. $f = -65.9$ mm.

L7 is a weakly negative meniscus with its concave surface facing the image side ($R_{12} = +247.3$ mm front, $R_{13} = +38.7$ mm rear). This shape is characteristic of a field-flattening element in the double-Gauss tradition. Its relatively weak power ($-65.9$ mm) means it contributes little to the system's overall convergence but has a disproportionate effect on field curvature and astigmatism. The low Abbe number ($\nu_d = 30.1$) provides the dispersion needed for chromatic correction at the cemented interface with L8.

### L8 — Biconvex Positive, Aspherical Rear Surface (G2, cemented with L7)

$n_d = 1.768015$, $\nu_d = 49.2$. Glass: E-LASKH2 (HIKARI) — lanthanum crown. $f = +29.5$ mm.

L8 is the final optical element before the image plane. Its rear surface ($R_{14} = -50.305$ mm) carries the second aspherical figure in the design, with a hyperboloidal base ($K = -1.6554$) and polynomial correction terms. This is the more aggressively aspherized of the two aspheric surfaces: the departure from the base sphere reaches approximately $+280$ μm at the estimated rim. Of this, the hyperboloidal conic base contributes approximately $+63$ μm, while the polynomial terms contribute the remaining $+217$ μm — the polynomial correction is the dominant contributor, refining the coarse conic profile to achieve the required higher-order aberration balance.

The hyperboloidal base flattens the surface more rapidly than a sphere at increasing aperture heights. The positive A4 coefficient ($+5.10 \times 10^{-6}$) counteracts this flattening at intermediate zones, while higher-order terms (A6 through A10) provide fine balancing of the residual higher-order spherical aberration and off-axis coma. As the last refracting surface before the image, this asphere has the most direct leverage over field performance — particularly off-axis coma and astigmatism — making it the single most critical surface for image quality across the field.

The glass selection for L8 is significant: $n_d = 1.768$, $\nu_d = 49.2$ places it in the lanthanum crown region with relatively low dispersion for its index. The Abbe number of 49.2 makes L8 the lowest-dispersion element in the rear group, which is deliberate — the L7–L8 pairing uses the high-dispersion L7 ($\nu_d = 30.1$) against the low-dispersion L8 ($\nu_d = 49.2$) across a strongly curved cemented interface ($R_{13} = +38.7$ mm) to correct the residual lateral and axial chromatic aberration of G2. This glass is identified as HIKARI E-LASKH2 based on the nd/νd match.

Sony's marketing materials refer to "Glass-Molded Aspherical Lens Elements" for this lens, indicating that both aspherical surfaces (L3 front and L8 rear) are produced by precision glass molding (PGM) rather than polishing or hybrid resin-on-glass processes. PGM is appropriate given the moderate aspherical departures involved (under 300 μm peak).

## Glass Selection

| Element | $n_d$    | $\nu_d$ | Glass (probable)       | Vendor  | Class         | Role |
|---------|----------|---------|------------------------|---------|---------------|------|
| L1      | 1.834805 | 42.7    | S-LAH55V               | OHARA   | La high-index glass | Front collector; high-$n$ reduces surface angles |
| L2      | 1.592703 | 35.5    | S-FTM16                | OHARA | Light flint | G1F diverging partner; achromatizes with L1 |
| L3      | 1.851348 | 40.1    | E-LASFH13              | HIKARI  | La dense flint | Main positive element; asph front surface |
| L4      | 1.612930 | 37.0    | E-FD7 class            | HOYA/HIKARI | Moderate flint | G1R corrector; cemented with L3 |
| L5      | 1.647690 | 33.8    | S-TIF4 / SF2           | OHARA/Schott | Dense flint | Inner negative; strong flint for chromatic correction |
| L6      | 1.883000 | 40.8    | S-LAH58                | OHARA   | La high-index glass | G2 powerhouse; highest $n_d$ in system |
| L7      | 1.698950 | 30.1    | E-FD15 / SF15          | HIKARI/Schott | Dense flint | Field flattener; lowest $\nu_d$ in system |
| L8      | 1.768015 | 49.2    | E-LASKH2               | HIKARI  | La crown      | Final positive; asph rear; highest $\nu_d$ in G2 |

The glass palette divides into two families: lanthanum-based high-index glasses for the positive elements (L1, L3, L6, L8) and conventional to moderately dense flints for the negative elements (L2, L4, L5, L7). This partition is driven by the f/1.4 aperture requirement — the positive elements need high indices to maintain manageable surface angles at the large beam diameter, while the negative elements need sufficient dispersion to achromatize their positive partners.

The chromatic correction strategy is based on three cemented interfaces:

1. **L3–L4 (G1R):** High-index lanthanum flint (L3, $\nu_d = 40.1$) against moderate flint (L4, $\nu_d = 37.0$). The dispersion differential is modest ($\Delta\nu_d = 3.1$), but the large index step ($\Delta n_d = 0.238$) and the long junction radius provide adequate achromatization for this group.
2. **L5–L6 (G2, first doublet):** Dense flint (L5, $\nu_d = 33.8$) against high-index lanthanum glass (L6, $\nu_d = 40.8$). The dispersion differential ($\Delta\nu_d = 7.0$) and the strongly curved junction handle the chromatic load in G2.
3. **L7–L8 (G2, second doublet):** Dense flint (L7, $\nu_d = 30.1$) against lanthanum crown (L8, $\nu_d = 49.2$). The largest dispersion differential in the system ($\Delta\nu_d = 19.1$) makes this the primary chromatic corrector for the rear group, compensating both the residual axial colour from the L5–L6 pair and the lateral colour across the field.

Some third-party retailer descriptions of the SAL50F14Z mention "ED (Extra-low Dispersion) Glass." However, Sony's own official specification pages do not list ED glass as a feature of this lens, and none of the eight glasses in the patent prescription have Abbe numbers exceeding 50 — well below the conventional ED threshold ($\nu_d > 60$). The ED glass references may stem from confusion with the later Sony FE 50mm f/1.4 ZA (SEL50F14Z), which is a different 12-element design that does use ED glass. Within the SAL50F14Z's prescription, L8 ($\nu_d = 49.2$) has the highest Abbe number and the most crown-like dispersion characteristics, but it does not qualify as ED by standard catalog definitions.

## Focus Mechanism

The lens uses a rear-focus system in which G1 is fixed in the optical axis direction and G2 moves integrally with the aperture stop from the image side toward the object side as focus shifts from infinity to close focus (¶0060, ¶0084).

### Focus Travel

Paraxial ray-trace computation for MFD = 0.45 m yields a focus travel of approximately **7.72 mm**:

| Parameter | Infinity | Close (0.45 m) |
|-----------|----------|----------------|
| d7 (G1 rear → stop) | 14.509 mm | 6.785 mm |
| BFL (last surface → image) | 36.099 mm | 43.823 mm |
| Magnification | 0 | −0.142 |

The overall length from the first surface to the image plane remains constant at $\approx$96.1 mm regardless of focus position, confirming the patent's claim that the lens body length is maintained during autofocus (¶0060). The focus group (G2 + stop) comprises four elements with a combined track of approximately 26.4 mm and a modest mass, enabling the SSM motor to achieve rapid autofocus response.

### Focus Group Design Rationale

The patent explains (¶0060–0066) that the f1F/f2 ratio governs the balance between back-focus adequacy and focus-travel compactness. For Example 4, $f_{\rm G1F}/f_{\rm G2} = -11.39$, which lies within the specified range $-13.0 < f_{\rm 1F}/f_2 < -4.0$ (Condition Expression 1). If the ratio exceeded the upper bound ($> -4.0$), G2's refractive power would be too weak and the focus travel would increase, enlarging the lens. If the ratio fell below the lower bound ($< -13.0$), G1F's refractive power would be too weak to ensure sufficient back focus for the A-mount mirror box.

The $f_1/f$ ratio of 3.00 (Condition Expression 2, range 1.8–4.5) ensures that G1 is not too powerful (which would shorten back focus and worsen spherical aberration) nor too weak (which would lengthen the system and require a stronger G2, increasing manufacturing sensitivity).

## Aspherical Surfaces

The design uses two aspherical surfaces, one in each lens group. The patent's aspheric sag equation (Equation 1, ¶0093) follows the standard form:

$$Z(h) = \frac{h^2 \cdot c}{1 + \sqrt{1 - (1+K) \cdot h^2 \cdot c^2}} + \sum A_i \cdot h^i$$

where $c = 1/R$ is the base curvature, $K$ is the conic constant, and $A_i$ are the polynomial coefficients. The patent uses the symbol $k$ (lowercase) for the conic constant, equivalent to $K$ in the standard convention.

### Surface 5A — L3 Front (G1, object-side surface of G1R doublet)

| Parameter | Value |
|-----------|-------|
| R | +28.547 mm |
| K | 0.0000 (sphere) |
| A4 | $-1.05 \times 10^{-6}$ |
| A6 | $-6.57 \times 10^{-10}$ |
| A8 | $-1.73 \times 10^{-12}$ |
| A10 | $+4.21 \times 10^{-15}$ |

This is a pure polynomial asphere on a spherical base (K = 0). All significant polynomial terms (A4, A6, A8) are negative, meaning the surface is progressively flatter at the periphery than the base sphere. At the estimated clear aperture of ~16.5 mm semi-diameter, the departure reaches approximately −94 μm — the surface sags less than the sphere by nearly a tenth of a millimeter at the rim.

The correction profile is straightforward: by reducing the convergence of marginal rays entering L3, this asphere directly controls the undercorrected spherical aberration that the fast f/1.4 beam would otherwise produce. The monotonically increasing negative departure means the correction is dominated by the fourth-order term, with sixth and eighth orders refining the profile for higher-order spherical aberration balance.

### Surface 14A — L8 Rear (G2, last optical surface)

| Parameter | Value |
|-----------|-------|
| R | −50.305 mm |
| K | −1.6554 (hyperboloid) |
| A4 | $+5.10 \times 10^{-6}$ |
| A6 | $-9.77 \times 10^{-10}$ |
| A8 | $+2.06 \times 10^{-11}$ |
| A10 | $-8.11 \times 10^{-15}$ |

This surface employs a hyperboloidal base ($K = -1.6554$, i.e., $K < -1$). A hyperboloid on a concave surface (negative R) means the surface curves less steeply than a sphere at increasing heights — it diverges from the sphere in the positive-Z direction (less deeply concave). At the rim, the conic departure alone contributes approximately +63 μm; the polynomial terms add a further +217 μm of positive departure, for a total of approximately +280 μm. The alternating signs of the polynomial coefficients (A4 positive, A6 negative, A8 positive, A10 negative) produce an oscillating correction profile that balances multiple orders of aberration simultaneously.

As the last refracting surface, Surface 14A has unique leverage over the final image. Off-axis ray bundles pass through this surface at heights and angles that differ substantially from on-axis rays, giving the asphere direct control over field-dependent aberrations — particularly sagittal coma and oblique spherical aberration. The hyperboloidal base provides the coarse correction, while the polynomial terms handle the fine higher-order residuals. This placement strategy — putting the stronger, more complex asphere at the rear of the system rather than at the front — is characteristic of rear-focus double-Gauss designs where the last surface "sees" the full field geometry and can apply field-dependent corrections that front elements cannot.

Both aspherical surfaces are identified as glass-molded (GMo/PGM) based on Sony's published feature descriptions for the SAL50F14Z.

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum is:

$$\sum \frac{n' - n}{n \cdot n' \cdot R} = +0.00287 \;\text{mm}^{-1}$$

This corresponds to a Petzval radius of approximately **348 mm** (inward-curving field). For a full-frame 35mm sensor with a half-diagonal of 21.63 mm, the Petzval field curvature contributes a longitudinal focus shift of approximately 0.67 mm at the corner — a moderate value for an f/1.4 standard lens. The cemented doublets and the meniscus element L7 are the primary mechanisms for controlling this curvature; the negative elements' contributions to the Petzval sum partially offset the positive elements' contributions, resulting in a reasonably flat field despite the high aperture.

## Conditional Expressions

The patent defines two conditional expressions that govern the design's aberration-correction and dimensional balance. Example 4 satisfies both:

| Expression | Formula | Range | Example 4 Value |
|------------|---------|-------|-----------------|
| (1) | $f_{\rm 1F} / f_2$ | $-13.0 < \cdot < -4.0$ | −11.39 |
| (2) | $f_1 / f$ | $1.8 < \cdot < 4.5$ | 3.00 |

The tighter preferred ranges given in the patent text (Expressions (1)' and (2)'') are also satisfied: $-12.0 < -11.39 < -5.0$ and $2.4 < 3.00 < 3.6$.

## Design Heritage and Context

The "Planar" designation traces back to Paul Rudolph's 1896 design for Carl Zeiss Jena — a symmetric double-Gauss configuration that became the dominant architecture for high-speed standard lenses throughout the 20th century. The SAL50F14Z represents a contemporary reinterpretation: the classical symmetric arrangement is broken by the rear-focus requirement, which forces the post-stop group (G2) to carry more power than the pre-stop group (G1) and introduces asymmetry into the aberration balance. The use of aspherical surfaces — unavailable to Rudolph — compensates for the loss of symmetry-based aberration cancellation that the classical Planar relied upon.

Within Sony's A-mount Zeiss lineup, the SAL50F14Z was announced alongside the Sony α99 (the company's first full-frame SLT camera with phase-detect AF via translucent mirror) and joined the existing Distagon T* 24mm f/2, Planar T* 85mm f/1.4, and Sonnar T* 135mm f/1.8 ZA. It represented the first 50mm f/1.4 in the Sony/Zeiss partnership and was designed from the outset for electronic autofocus with SSM, unlike earlier manual-focus Zeiss Planar 50mm designs (ZE/ZF.2) which used all-spherical optics and unit focusing.

## Sources

1. US 2014/0071331 A1, "Imaging Lens and Imaging Apparatus," Katou et al., Sony Corporation, published 13 March 2014. Primary source for all optical prescription data, element descriptions, conditional expressions, and focus mechanism details.
2. Sony SAL50F14Z product specifications, sony-asia.com: mount, focal length, groups/elements, aperture blades, MFD, filter diameter, magnification, dimensions, weight.
3. Sony SAL50F14Z feature descriptions (B&H Photo, Imaging Resource, ePHOTOzine): "two aspherical elements," "Glass-Molded Aspherical Lens Elements," "SSM (Super Sonic wave Motor)," "rear-focus system," "9-blade circular aperture."
