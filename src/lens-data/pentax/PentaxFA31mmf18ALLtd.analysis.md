# SMC Pentax-FA 31mm F1.8 AL Limited — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,560,042 B2 — *Wide-Angle Lens System and a Focusing Method Thereof*
**Applicant:** Pentax Corporation, Tokyo (JP)
**Inventors:** Masayuki Murata; Takayuki Ito
**Filed:** August 28, 2001 (priority: JP 2000-265256, September 1, 2000)
**Granted:** May 6, 2003
**Embodiment used:** Numerical Example 3 (Table 3, Figs. 9–12)

The production lens is identified as the SMC Pentax-FA 31mm F1.8 AL Limited (later re-released with HD coating as the HD Pentax-FA 31mm F1.8 Limited) by convergence of the following evidence:

1. **Element and group count.** The patent's Example 3 has 9 elements in 7 groups with one glass-molded aspherical surface. The production lens is specified by Ricoh Imaging at 9 elements in 7 groups with a glass-molded aspherical element — an exact match.
2. **Focal length.** Example 3 gives $f = 31.80$ mm; the production lens is marketed at 31 mm.
3. **Aperture.** $F_\text{NO} = 1.8$ in the patent; the production lens is f/1.8.
4. **Half-angle of view.** $\omega = 34.8°$ in the patent, yielding a full diagonal angle of 69.6°; the production lens is specified at 70°.
5. **Minimum focus distance.** The patent's closest object distance is $u = 0.30$ m; the production MFD is 0.3 m (0.98 ft).
6. **Maximum magnification.** $m = -0.155$ in the patent, corresponding to a magnification of approximately 0.16×; the production lens is rated at 0.16× maximum magnification.
7. **Inventor match.** The named inventors — Takayuki Ito and Masayuki Murata — are documented in multiple independent sources as the designers who took over the FA 31mm project from Jun Hirakawa (who had originally prototyped a slower f/2.4 design), redesigning it to f/1.8.
8. **Patent timing.** Japanese priority date September 2000 aligns with the lens's market introduction in 2001.

Example 3 matches all published production specifications precisely and is the closest of the patent's three embodiments to the production lens (Example 3 gives $f = 31.80$ mm vs. Examples 1 and 2 at $f = 30.90$ mm; the wider half-angle of view in Examples 1 and 2 ($\omega = 35.3°$) and higher back focal distance deviate further from production values).

## Optical Architecture

The design is a retrofocus (inverted telephoto) wide-angle lens, consisting of a negative first lens group and a positive second lens group, in the order from the object. The retrofocus arrangement ensures a back focal distance ($f_B = 36.90$ mm at infinity) considerably longer than the focal length ($f = 31.80$ mm), providing clearance for the SLR mirror mechanism.

The lens comprises 9 elements in 7 groups, organized as follows:

- **Group 10** (negative front group, 3 elements): One positive element (L1) followed by two negative menisci (L2, L3), all convex to the object. This is the diverging front group of the retrofocus arrangement.
- **Sub-group 20F** (positive, 1 element): A single biconvex positive element (L4) that serves as the bridge between the front diverging group and the rear converging group.
- **Sub-group 20R** (positive, 5 elements): Two cemented doublets (L5–L6 and L7–L8) flanking the aperture stop, followed by a single positive element (L9). This rear sub-group carries the converging power and contains the aspherical surface.

The power distribution is therefore negative–positive–positive across the three major sub-assemblies (Group 10 / Sub-group 20F / Sub-group 20R), with the overall second lens group (20F + 20R combined) having a focal length of $f_{20} \approx 32.1$ mm — nearly equal to the system focal length. The negative front group ($f_{10} \approx -33.0$ mm) provides the retrofocus offset.

## Element-by-Element Analysis

### L1 — Biconvex Positive (Element 1, Group 10)

$n_d = 1.72916$, $\nu_d = 54.7$. Glass: TAC8 (HOYA) — lanthanum crown. Schott equivalent: N-LAK34. $f = +129.0$ mm.

L1 is a weakly positive biconvex element with a nearly plano rear surface ($R_2 = -5402.5$ mm). Its front surface ($R_1 = +95.70$ mm) faces the object. With a relatively long focal length, L1 acts as a gentle positive collector at the front of the system, gathering off-axis light bundles and directing them into the diverging elements behind it. In a retrofocus design the positive front element serves to reduce the angle of incidence on the subsequent negative menisci, controlling off-axis aberrations — particularly distortion and lateral color.

The choice of a lanthanum crown ($n_d = 1.729$, $\nu_d = 54.7$) provides high refractive index for reducing surface curvatures while maintaining relatively low dispersion — a combination that qualifies as "high-refraction, low-dispersion" in the sense used by Ricoh Imaging's product literature. The OHARA catalog does not list a current glass at this code (729/547); the cross-reference tables identify HOYA TAC8 and Schott N-LAK34 as the matches, consistent with Pentax's known use of HOYA glasses.

### L2 — Negative Meniscus, convex to object (Element 2, Group 10)

$n_d = 1.76182$, $\nu_d = 26.5$. Glass: S-TIH14 (OHARA) — dense titanium flint. $f = -53.1$ mm.

L2 is the first of two strongly negative menisci in the front group. Its concave rear surface ($R_2 = +33.4$ mm, center of curvature toward image) has much stronger curvature than the front ($R_1 = +195.2$ mm), producing strong negative power. The high-dispersion titanium flint glass ($\nu_d = 26.5$) is deliberately paired against the low-dispersion positive elements to achromatize the front group. The large refractive index ($n_d = 1.762$) allows the required negative power to be achieved with gentler surface curvatures than a lower-index glass would demand, helping control higher-order aberrations at the wide f/1.8 aperture.

### L3 — Negative Meniscus, convex to object (Element 3, Group 10)

$n_d = 1.61800$, $\nu_d = 63.4$. Glass: S-PHM52 (OHARA) — phosphate crown. $f = -51.1$ mm.

L3 completes the negative front group. Its shape mirrors L2 (meniscus, convex to object) but uses a dramatically different glass: a low-dispersion phosphate crown ($\nu_d = 63.4$) instead of a high-dispersion flint. This is a notable design choice. S-PHM52 has the lowest dispersion of any glass in the prescription ($\nu_d = 63.4$) and a small positive anomalous partial dispersion ($\Delta P_{gF} = +0.005$), though it does not qualify as ED glass in the strict sense (true ED glasses such as S-FPL51 have $\nu_d > 80$ and $\Delta P_{gF} > +0.04$). At this position in a retrofocus wide-angle, a low-dispersion negative element helps control lateral chromatic aberration across the wide field angle ($\omega = 34.8°$), because the chief ray is at a large height relative to the axis in the front group. The patent text's condition (2), $n_\text{PAV} > 1.7$, applies to positive elements in the second group, but the choice of a low-dispersion glass in the negative front group is equally consequential for chromatic performance.

The air gap following L3 ($d_6 = 12.29$ mm) is the largest internal spacing in the lens, physically separating the negative front group from the positive rear assembly. This large air space is characteristic of retrofocus designs, where the separation between the diverging and converging groups governs the back focal distance.

### L4 — Biconvex Positive (Element 4, Sub-group 20F)

$n_d = 1.80100$, $\nu_d = 35.0$. Glass: TAFD30 (HOYA) — lanthanum–titanium flint, or equivalent 801/350 class. $f = +37.5$ mm.

L4 is a strong biconvex positive element forming the single-element sub-group 20F. With a focal length of +37.5 mm — close to the system focal length — L4 is one of the most powerful individual elements. Its high refractive index ($n_d = 1.801$) limits surface curvatures despite the strong power, which is critical at f/1.8 where spherical aberration from strongly curved surfaces would otherwise be severe.

L4 is part of the "Fa" focusing group: during focusing, L4 moves integrally with the entire front group (Group 10). The air gap behind L4 ($d_8 = 5.46$ mm at infinity) is the primary variable spacing within the lens, decreasing to 3.87 mm at the closest focus distance of 0.30 m.

The $n_d/\nu_d$ pair (1.80100/35.0) matches HOYA TAFD30 exactly. This is consistent with Pentax's known use of both OHARA and HOYA glass catalogs.

### L5 — Biconcave Negative (Element 5, Sub-group 20R, cemented with L6)

$n_d = 1.51742$, $\nu_d = 52.4$. Glass: S-NSL3 (OHARA) — normal special low crown. $f = -24.3$ mm.

L5 is the negative element of the first cemented doublet (D1) in sub-group 20R. Its biconcave shape ($R_1 = -43.1$ mm, $R_2 = +18.0$ mm) produces strong negative power. The relatively low refractive index ($n_d = 1.517$) and moderate Abbe number ($\nu_d = 52.4$) contrast sharply with its cemented partner L6. This combination — a low-index negative element cemented to a high-index positive element — is a classic achromatic configuration. In the doublet, L5 overcorrects chromatic aberration to balance L6's undercorrection, while the cemented interface ($R = +18.044$ mm) controls coma and spherical aberration.

The $n_d/\nu_d$ pair (1.51742/52.4) matches OHARA S-NSL3 exactly. This glass sits in the low-index crown region of the glass map, consistent with its role as the dispersive-balancing partner to the high-index lanthanum crown L6.

### L6 — Biconvex Positive (Element 6, Sub-group 20R, cemented with L5)

$n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65 (OHARA) — lanthanum crown. $f = +18.8$ mm.

L6 is the strongest individual positive element in the entire system ($f = +18.8$ mm). Its biconvex shape and high-index lanthanum glass ($n_d = 1.804$) make it the primary converging element. The cemented doublet L5–L6 acts as the main collecting group in the rear assembly, bending axial light rays sharply toward the axis. The air gap following this doublet ($d_{11} = 1.20$ mm) leads directly to the aperture stop.

The $n_d/\nu_d$ pair matches OHARA S-LAH65 exactly. This glass satisfies the patent's condition (2) — the averaged refractive index of positive elements in the second lens group must exceed 1.7. The four positive elements (L4, L6, L8, L9) average $n_\text{PAV} = 1.7763$, matching the patent's Table 4 value precisely.

### Aperture Stop (Diaphragm)

The diaphragm is located in the air space between the two cemented doublets within sub-group 20R, at a distance of 1.20 mm behind L6 and 6.86 mm before L7. The production lens uses a 9-blade rounded diaphragm (round from f/1.8 to f/3.5). The stop position between the two doublets is typical of double-Gauss–derived designs and provides good symmetry for controlling odd aberrations (coma, distortion, lateral color) across the field.

### L7 — Biconcave Negative (Element 7, Sub-group 20R, cemented with L8)

$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA) — extra-dense titanium flint. $f = -15.3$ mm.

L7 is the most strongly negative element in the system and uses the highest-index, highest-dispersion glass in the prescription. Its biconcave shape ($R_1 = -20.4$ mm, $R_2 = +36.7$ mm) and extreme index/dispersion combination serve two purposes: first, the strong negative power after the stop contributes to field flattening (controlling Petzval curvature); second, the very high dispersion ($\nu_d = 23.8$) enables efficient chromatic correction when paired with L8's moderate-dispersion positive glass.

The Petzval sum of the entire system is $\Sigma = 0.00319$ mm$^{-1}$, yielding a Petzval radius of approximately 314 mm — a well-corrected value for a 31 mm f/1.8 lens, indicating that the field is reasonably flat across the 35mm frame. L7's strong negative contribution is critical to achieving this.

### L8 — Biconvex Positive, 1× Asph (Element 8, Sub-group 20R, cemented with L7)

$n_d = 1.72750$, $\nu_d = 40.3$. Glass: lanthanum flint, 728/403 code (vendor uncertain). $f = +29.4$ mm.

L8 is the positive partner in the second cemented doublet (D2) and carries the lens's only aspherical surface on its rear face (surface 14, labeled "14*" in the patent). The biconvex shape ($R_1 = +36.7$ mm, $R_2 = -48.5$ mm) is gently curved relative to L7's stronger surfaces. The glass code 728/403 falls in the lanthanum flint region; no exact match was found in current OHARA, HOYA, Schott, or Sumita catalogs, suggesting it may be a legacy or proprietary melt. The nearest catalog candidate is HOYA NBFD13 ($n_d = 1.72440$, $\nu_d = 40.8$), but with $\Delta n_d = 0.003$ this exceeds the threshold for a confident match. The $n_d/\nu_d$ pair is internally consistent across all three patent embodiments (Tables 1–3 all list $n_d = 1.72750$, $\nu_d = 40.3$ at this position).

The aspherical surface on L8's rear face is the defining "AL" feature of the lens name ("AL" = aspherical lens). The patent describes this as a glass-molded aspherical surface, which Ricoh Imaging's product literature confirms. Because the aspherical surface is at the cemented doublet's rear — behind the stop and in converging light — it acts primarily as a distortion and field-curvature corrector. The patent's condition (6) specifically governs this surface's contribution to the distortion coefficient (see §Aspherical Surfaces below).

### L9 — Biconvex Positive (Element 9, Sub-group 20R)

$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA) — lanthanum crown. $f = +32.5$ mm.

L9 is the final element, a strongly asymmetric biconvex with a nearly flat front surface ($R_{15} = +1937.5$ mm) and a strongly curved rear ($R_{16} = -25.4$ mm). Its focal length (+32.5 mm) is close to the system focal length, making it the rear field-flattening and power-distribution element. The nearly flat front surface minimizes refraction at the entry of the last element, while the strongly curved rear surface bends converging rays to their final image-forming angles.

S-LAH66 ($n_d = 1.773$, $\nu_d = 49.6$) is a high-index lanthanum crown with moderate dispersion. Positioned as the last element before the long back focal distance, L9 also contributes to controlling the exit pupil position — important for SLR compatibility where telecentric behavior at the image plane reduces vignetting and color-shading on digital sensors.

## Glass Selection

The prescription uses a palette of seven distinct glasses across nine elements, spanning Abbe numbers from 23.8 to 63.4 and refractive indices from 1.517 to 1.847. The dominant theme is high-index lanthanum glasses for positive elements paired with titanium flint glasses for negative elements.

| Element | $n_d$ | $\nu_d$ | Glass / Catalog | Vendor | Role |
|---------|-------|---------|-----------------|--------|------|
| L1 | 1.72916 | 54.7 | TAC8 | HOYA | Lanthanum crown; front positive collector |
| L2 | 1.76182 | 26.5 | S-TIH14 | OHARA | Dense titanium flint; front group achromatizer |
| L3 | 1.61800 | 63.4 | S-PHM52 | OHARA | Phosphate crown; lateral color control |
| L4 | 1.80100 | 35.0 | TAFD30 | HOYA | Lanthanum–titanium flint; main front positive |
| L5 | 1.51742 | 52.4 | S-NSL3 | OHARA | Normal special low crown; D1 negative partner |
| L6 | 1.80400 | 46.6 | S-LAH65 | OHARA | Lanthanum crown; D1 positive, strongest element |
| L7 | 1.84666 | 23.8 | S-TIH53 | OHARA | Extra-dense titanium flint; Petzval corrector |
| L8 | 1.72750 | 40.3 | 728/403 (uncertain) | — | Lanthanum flint; D2 positive, carries asphere |
| L9 | 1.77250 | 49.6 | S-LAH66 | OHARA | Lanthanum crown; rear field element |

The chromatic correction strategy pairs high-dispersion elements (L2 at $\nu_d = 26.5$, L7 at $\nu_d = 23.8$) against low-dispersion positives. L3's phosphate crown ($\nu_d = 63.4$) in the negative front group is the highest-Abbe-number glass in the prescription and controls lateral color across the wide field — a correction that would normally require the glass to be in a positive element but which, in the diverging front group of a retrofocus design, can be achieved through a negative element at a position where chief-ray heights are large. S-PHM52 has a small positive anomalous partial dispersion ($\Delta P_{gF} = +0.005$), well below the threshold for ED classification but useful at the margin for secondary-spectrum control.

The Ricoh Imaging product description references "high-refraction, low-dispersion glass elements" as a distinguishing feature. This designation applies to the three lanthanum-class positive elements: L1 (TAC8, $n_d = 1.729$, $\nu_d = 54.7$), L6 (S-LAH65, $n_d = 1.804$, $\nu_d = 46.6$), and L9 (S-LAH66, $n_d = 1.773$, $\nu_d = 49.6$). All three have refractive indices above 1.7 with relatively low dispersion for their index — the defining characteristic of lanthanum crown glasses. These glasses enable the strong positive powers needed at f/1.8 without the surface curvatures (and resulting higher-order aberrations) that lower-index materials would demand.

The patent's condition (2) requires $n_\text{PAV} > 1.7$, where $n_\text{PAV}$ is the average refractive index of positive elements in the second lens group. The computed value is 1.7763, satisfying the condition. This ensures that positive surface curvatures remain moderate enough to suppress higher-order aberrations at the wide f/1.8 aperture.

## Focus Mechanism

The lens uses a **floating-element inner focus** (or more precisely, a two-group differential-advance focus) with non-linear cam motion. The patent defines two focusing sub-assemblies:

- **Fa group** (first focusing group): Comprising the entire front group (Group 10, elements L1–L3) plus sub-group 20F (element L4). These elements move integrally toward the object during focusing.
- **Fb group** (second focusing group): Comprising sub-group 20R (elements L5–L9, plus the aperture stop). This group also moves toward the object, but by a greater distance than Fa, thereby closing the air gap between the two groups.

| Parameter | Infinity | Close (MFD) |
|-----------|----------|-------------|
| Object distance $u$ | $\infty$ | 0.30 m |
| Magnification $m$ | 0.000 | −0.155 |
| Gap d8 (Fa–Fb spacing) | 5.46 mm | 3.87 mm |
| Back focal distance $f_B$ | 36.90 mm | 41.88 mm |

The gap d8 decreases by 1.59 mm from infinity to close focus, while the back focal distance increases by 4.98 mm. This means the Fb group advances forward (toward the object) by a greater amount than the Fa group. The ratio of travel distances is $X_{an}/X_{bn} = 0.68$ (patent Table 4), satisfying condition (3): $0.5 < X_{an}/X_{bn} < 1.0$.

The patent further specifies that the focus cam follows a non-linear (quadratic) path rather than a simple linear advance. The non-linearity coefficient is $\beta = -0.005$ (condition 5: $-0.1 < \beta < 0$), a very mild departure from linearity. This non-linear cam profile allows the designers to maintain balanced aberration correction at intermediate focus distances, not just at infinity and MFD. The patent notes that both linear and non-linear cam profiles are supported (¶0045), but the non-linear path is preferred and is used in all three numerical examples.

The combined focal length of the Fa group is $f_\text{Fa} = +144.0$ mm, a weak positive power. Condition (7), $|f/f_\text{Fa}| < 0.25$, is satisfied at 0.221 (Table 4). This constraint ensures that aberration variations during focus travel remain small — a weak Fa group means that shifting it forward produces only modest changes in the overall optical state.

Multiple sources describe the production lens as having a "floating element" design. This is consistent with the patent's differential-advance mechanism, where the gap between Fa and Fb changes during focus, which is the optical definition of a floating-element focus system.

## Aspherical Surfaces

The lens has a single aspherical surface: surface 14 (rear face of element L8), labeled "14*" in the patent. This is a glass-molded aspherical surface, as confirmed by the production lens's "AL" (Aspherical Lens) designation and Ricoh Imaging's description of "glass-molded, aspherical elements."

### Aspheric Equation and Convention

The patent uses the standard rotationally symmetric aspheric sag equation (¶0070):

$$Z(y) = \frac{c \, y^2}{1 + \sqrt{1 - (1+K)\,c^2\,y^2}} + A_4\,y^4 + A_6\,y^6 + A_8\,y^8 + A_{10}\,y^{10}$$

where $c = 1/R$ is the vertex curvature, $K$ is the conic constant, and $A_4$ through $A_{10}$ are the polynomial deformation coefficients. The patent uses $K$ directly as the standard conic constant ($K = 0$ for a sphere, $K = -1$ for a paraboloid). In this prescription $K = 0$, so the base curve is spherical and all aspherical departure comes from the polynomial terms.

### Coefficients for Surface 14 (Example 3)

| Parameter | Value |
|-----------|-------|
| $R$ | −48.519 mm |
| $K$ | 0.00 |
| $A_4$ | $+0.1983 \times 10^{-4}$ |
| $A_6$ | $+0.2547 \times 10^{-7}$ |
| $A_8$ | $+0.9113 \times 10^{-12}$ |
| $A_{10}$ | 0 (not listed) |

All three non-zero coefficients are positive. Since surface 14 is on a biconvex element ($R_{14} = -48.5$ mm, concave toward the image), positive $A_4$ and $A_6$ coefficients flatten the surface at the periphery relative to the spherical base curve. This reduces the negative departure of the marginal zone, making the surface less steeply curved at the edges.

### Correction Role

The patent dedicates considerable discussion (¶0046–0069) to the relationship between aspherical coefficients and third-order aberration coefficients. The key result is condition (6): $-0.2 < \Delta V < 0$, where $\Delta V$ is the aspherical-surface contribution to the distortion coefficient. For Example 3, $\Delta V = -0.103$ (Table 4), well within the specified range.

The aspherical surface's position — on the rear of a cemented doublet, behind the aperture stop, in converging light — makes it primarily a distortion and field-curvature corrector. In a retrofocus wide-angle, residual barrel distortion from the negative front group is a persistent challenge; the aspherical surface on L8 provides a degree of freedom that allows the designers to reduce distortion without compromising other aberrations. The aberration plots for Example 3 (Figs. 10C, 10D) show well-controlled astigmatism ($S$ and $M$ curves remaining close) and distortion under ±1% across the full field — a strong result for a 31 mm f/1.8 retrofocus design.

## Conditional Expressions

The patent specifies seven conditional expressions that govern the design space. Example 3's values, reproduced from Table 4:

| Condition | Expression | Purpose | Example 3 Value |
|-----------|-----------|---------|-----------------|
| (1) | $0.5 < H_1/H_{2R} < 0.9$ | Retrofocus ray height ratio | 0.701 |
| (2) | $1.7 < n_\text{PAV}$ | Average $n_d$ of positive elements in Group 20 | 1.7763 |
| (3) | $0.5 < X_{an}/X_{bn} < 1.0$ | Linear focus travel ratio | 0.68 |
| (4) | $0.5 < X_{an}/X_{bn} < \Delta X_{ai}/\Delta X_{bi} < 1.0$ | Non-linear focus travel ratio | $\alpha = 0.70$ |
| (5) | $-0.1 < \beta < 0$ | Non-linear cam coefficient | −0.005 |
| (6) | $-0.2 < \Delta V < 0$ | Asphere distortion coefficient | −0.103 |
| (7) | $|f/f_\text{Fa}| < 0.25$ | Fa group power constraint | 0.221 |

All seven conditions are satisfied. Condition (1) confirms the retrofocus configuration: the marginal ray height at the front of the lens ($H_1$) is 70.1% of the height at the front of sub-group 20R ($H_{2R}$), indicating that the beam first contracts through the negative front group before expanding again into the positive rear group. Condition (7) constrains the Fa group to be weakly powered, ensuring small aberration shifts during focus.

## Design Heritage and Context

The FA 31mm f/1.8 AL Limited was the last of the "Three Amigos" — the trio of FA Limited primes (31mm, 43mm, 77mm) that define Pentax's premium prime lens philosophy. The 43mm f/1.9 and 77mm f/1.8 were designed by Jun Hirakawa; the 31mm project was originally conceived by Hirakawa as a 31mm f/2.4 design based on the optical formula of the earlier SMC Pentax-M 30mm f/2.8, but Pentax management requested a faster aperture. The redesign to f/1.8 was undertaken by Takayuki Ito and Masayuki Murata, resulting in a substantially different and more complex optical formula.

The production lens was introduced in 2001 and remained in production for over two decades, receiving only cosmetic and coating updates (the HD coating revision around 2021, plus a switch from lead-containing to lead-free glass after approximately 2006 for RoHS compliance). The optical prescription itself has not been publicly reported as changed. The lens uses a body-driven screw-type autofocus mechanism (no internal motor) and features a machined aluminum barrel with shippō (cloisonné) mount indicator — details that reflect the "Limited" series philosophy of prioritizing craftsmanship and rendering character over specification-sheet metrics.

## Paraxial Verification Summary

The following values were independently verified via paraxial $y$-$\bar{n}u$ ray trace and ABCD transfer-matrix analysis of the patent prescription:

| Parameter | Patent value | Computed value |
|-----------|-------------|----------------|
| System EFL | 31.80 mm | 31.799 mm |
| Back focal distance ($\infty$) | 36.90 mm | 36.904 mm |
| $n_\text{PAV}$ (condition 2) | 1.7763 | 1.77625 |
| $\|f/f_\text{Fa}\|$ (condition 7) | 0.221 | 0.2208 |
| Group 10 focal length | — | −33.0 mm |
| Group 20F focal length | — | +37.5 mm |
| Group 20R focal length | — | +48.7 mm |
| Group 20 (combined) focal length | — | +32.1 mm |
| Fa group focal length | — | +144.0 mm |
| Petzval sum | — | 0.00319 mm$^{-1}$ |
| Petzval radius | — | 314 mm |

All patent-published values are confirmed within rounding tolerance.

Semi-diameters were estimated by combined marginal + chief ray trace at 60% field fraction with 8% mechanical clearance, then iteratively constrained against the production lens's 58 mm filter thread, sd/|R| < 0.90, positive edge thickness, cross-gap sag intrusion < 90%, and front/rear SD ratio ≤ 1.25. The patent does not publish semi-diameters.

## Sources

1. US 6,560,042 B2, "Wide-angle lens system and a focusing method thereof," Murata et al., granted May 6, 2003.
2. Ricoh Imaging, "HD PENTAX-FA 31mm F1.8 Limited" product page, us.ricoh-imaging.com.
3. Douglas, "Known and Unknown Pentax lens designers and their lenses," douglasviewfinder.blogspot.com — designer attribution for Ito and Murata.
4. Wikipedia, "Pentax FA 31mm Limited lens" — design history, Hirakawa's f/2.4 prototype, and lead-glass transition.
