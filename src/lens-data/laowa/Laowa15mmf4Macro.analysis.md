# Venus Laowa 15mm f/4 Wide Angle 1:1 Macro — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** CN 205427291 U (Chinese Utility Model), "超广角微距镜头" (Ultra Wide-Angle Macro Lens).
**Applicant:** 安徽长庚光学科技有限公司 (Anhui ChangGeng Optical Technology Co., Ltd.) — the parent company of the Venus Optics / Laowa brand.
**Inventor:** 张小华 (Zhang Xiaohua).
**Filed:** 2015-04-08. **Granted:** 2016-08-03.

The patent presents three numerical embodiments. **Example 2** (第二实施例, ¶0053–0065) is the embodiment analyzed here, identified as the basis for the production Laowa 15mm f/4 Wide Angle 1:1 Macro by the following convergent evidence:

1. **Element and group count.** Example 2 has 12 elements in 9 groups, matching the production specification exactly.
2. **Focal length and aperture.** The patent states $f = 16.00$ mm and $F/4.1$. The production lens is marketed at 15 mm and $f/4$, implying a modest scale factor of $15/16 = 0.9375$ and a slight aperture rounding — both within normal patent-to-production tolerances.
3. **Half-field angle.** $\omega = 55.199°$, yielding a full field of $110.4°$ — consistent with the marketed $110°$ angle of view.
4. **Focus mechanism.** Example 2 employs two moving positive groups (SF and MF) achieving a maximum magnification of $0.7836\times$ at closest focus (¶0065). The production lens extends this to $1{:}1$ magnification through greater mechanical focus travel. The patent's dual-group floating focus architecture matches the production description of "internal focusing."
5. **Patent timing.** Filed April 2015, with the production lens announced in mid-2015 and shipping from late 2015 — consistent with the utility model patent being filed during the pre-production engineering phase.
6. **Special glass count.** Example 2 uses three distinct high-refractive-index glass types (904313-class LaF, H-ZLAF2, H-ZF52) and one low-dispersion crown type (H-QK3L), matching the production marketing claim of "three High Refractive elements and one Extra-low Dispersion element" when counted by distinct glass type.

## Optical Architecture

The Laowa 15mm f/4 is a **retrofocus wide-angle macro** design comprising 12 elements arranged in 9 air-separated groups, divided into two major optical assemblies:

- **SF (Auxiliary Focus group):** Elements L1–L6 (surfaces 1–13), with net weakly positive power ($f_{SF} \approx +213$ mm). This front assembly contains a strongly negative retrofocus sub-group (L1–L3, $f \approx -11.2$ mm) that establishes the long back focal distance required for SLR compatibility, followed by a cemented doublet (L4), a thick high-index biconvex element (L5), and a strong positive ED collector (L6). The SF group moves $2.71$ mm toward the object during macro focusing.

- **MF (Main Focus group):** The aperture stop plus elements L7–L9 (surfaces 14–22), with net positive power ($f_{MF} \approx +47.4$ mm, $FF/F = 2.961$ per ¶0079). The MF group contains two cemented doublets (L7, L9) flanking a biconvex singlet (L8) and functions as a positive relay that projects the intermediate image formed by the SF group onto the sensor. The MF group moves $12.41$ mm toward the object during macro focusing — the primary focus mechanism.

The combined system focal length is $f = 16.00$ mm with a total optical track of $108.8$ mm at infinity focus. The retrofocus ratio (BFD/EFL) is $38.9/16.0 = 2.43$, providing ample clearance for a reflex mirror. The Petzval sum is $+0.00231$ mm$^{-1}$, corresponding to a Petzval radius of $+433$ mm ($\approx 27 \times f$) — relatively flat for a retrofocus wide-angle, though the field curvature becomes noticeable at close focus distances, consistent with reviewer observations of a curved focus field.

The design is **entirely spherical** — none of the 22 optical surfaces carry aspherical coefficients. This is a notable design choice for an ultra-wide macro lens, where aspherical surfaces are commonly employed by competing designs to control distortion and coma. The lack of aspherical correction is reflected in the production lens's significant barrel distortion (measured at $-4.85\%$ by ePHOTOzine), which Venus Optics did not attempt to correct — the 15mm f/4 Macro was never branded as part of Laowa's "Zero-D" (zero-distortion) line.

### Shift Mechanism

The production lens includes a $\pm 6$ mm vertical shift mechanism for perspective control on APS-C format cameras. This shift is a mechanical feature of the lens barrel, not an optical one — the entire optical assembly translates perpendicular to the optical axis. At full-frame coverage, the shift produces visible vignetting and is not recommended.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.77250$, $\nu_d = 49.62$. Glass: H-LAK7 (CDGM) — lanthanum crown. $f = +177.6$ mm.

L1 is a thick ($ct = 3.92$ mm) lanthanum crown meniscus with moderate positive power. As the first element in a retrofocus design, it collects the incoming wide-angle beam ($2\omega = 110°$) and begins the gradual convergence process. The meniscus shape (both radii positive, $R_1 = +51.18$, $R_2 = +78.92$) minimizes surface reflection losses at steep incidence angles and controls coma contribution at the extreme field angles. The relatively high index of 1.77 allows the element to maintain a compact diameter despite the wide field coverage. The 77 mm filter thread of the production lens constrains the maximum semi-diameter of this element.

### L2 — Negative Meniscus, Convex to Object (HR)

$n_d = 1.91082$, $\nu_d = 35.25$. Glass: H-ZLAF2 (CDGM) — heavy lanthanum flint, high-refractive. $f = -29.1$ mm.

L2 is the first of the strongly negative elements that establish the retrofocus character of the design. With both radii positive ($R_3 = +24.95$, $R_4 = +12.53$) but $|R_{front}| > |R_{rear}|$, the element diverges incident rays. The high refractive index ($n_d = 1.911$) is essential: a strong negative meniscus at this position must contribute substantial diverging power without introducing excessive higher-order aberrations, and high-index glass reduces the surface curvatures required for a given power. The relatively low Abbe number ($\nu_d = 35.25$) compounds the chromatic impact: as a negative element, L2 contributes overcorrecting longitudinal chromatic aberration ($\phi/\nu < 0$), and the low Abbe number amplifies this contribution per unit of optical power. Together with L3, these two negative meniscus elements produce the dominant overcorrecting chromatic contribution in the front group, which is counterbalanced downstream by the positive ED elements and the inverted L4 doublet.

### L3 — Negative Meniscus, Convex to Object (HR)

$n_d = 1.90366$, $\nu_d = 31.31$. Glass: S-LAH95 / TAFD25 class (904313) — heavy lanthanum flint, high-refractive. $f = -17.9$ mm.

L3 is the strongest single negative element in the design. Its power distribution continues the divergence begun by L2, and together L1–L3 form a sub-group with a combined focal length of approximately $-11.2$ mm. This strong negative front sub-group is the hallmark of a retrofocus architecture: it displaces the rear principal plane far behind the physical lens, yielding a back focal distance ($38.9$ mm) much larger than the system focal length ($16.0$ mm). The meniscus shape ($R_5 = +28.23$, $R_6 = +10.06$) places the element's strong surface (S6) deep inside the converging beam from L1, where it also contributes to controlling oblique spherical aberration. The 904313-class glass appears three times in this design (L3, L5, L9a), making it the most-used high-index type.

### L4 — Cemented Doublet (Negative)

**L4a:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: H-ZF52 (CDGM) — dense flint (SF57 equivalent, Schott). $f = +23.4$ mm.
**L4b:** $n_d = 1.72916$, $\nu_d = 54.67$. Glass: H-LAK5A (CDGM) — lanthanum crown. $f = -15.4$ mm.
**Combined doublet:** $f \approx -48.3$ mm.

This cemented doublet is unusual in its glass pairing: the flint element (L4a, $\nu_d = 23.78$) is the positive-power component, while the crown (L4b, $\nu_d = 54.67$) is the negative-power component. This is the reverse of a classical achromatic doublet. In a conventional negative element, the chromatic contribution would be overcorrecting ($\phi/\nu < 0$). Here, the inverted glass assignment flips the chromatic sign: the low-$\nu$ flint-positive component contributes far more undercorrecting chromatic aberration per unit of power than the crown-negative component overcorrects, so the doublet produces a net *undercorrecting* chromatic contribution despite having net negative optical power ($f = -48.3$ mm). This acts as a deliberate counterbalance to the strong overcorrection introduced by the negative meniscus elements L2 and L3 upstream. The nearly flat front surface of L4a ($R_7 = +213.0$) accepts light from the large air gap after L3 with minimal surface deviation, while the strongly curved cemented junction ($R_8 = -21.64$) and L4b's rear surface ($R_9 = +23.90$) provide the optical power.

### L5 — Thick Biconvex (HR)

$n_d = 1.90366$, $\nu_d = 31.31$. Glass: S-LAH95 / TAFD25 class (904313) — heavy lanthanum flint, high-refractive. $f = +124.7$ mm.

L5 is the thickest element in the design ($ct = 8.0$ mm) and one of the most unusual. Both surfaces are nearly flat ($R_{10} = +230.1$, $R_{11} = -217.2$), giving it very weak positive power despite the high refractive index. An element of this form serves several roles in a complex retrofocus design. First, its 8 mm of high-index glass ($n_d = 1.904$) shifts the principal planes of the SF group rearward, which adjusts the relative ray heights at all downstream surfaces — an effective tool for controlling higher-order aberrations without adding strong refractive surfaces. Second, as a positive element it contributes a positive Petzval term that partially counteracts the strong negative Petzval contributions from L2 and L3, aiding field flattening. Third, as a weakly positive element with low Abbe number ($\nu_d = 31.31$), it contributes a small undercorrecting chromatic term that participates in the overall chromatic balance of the front group. Its exact aberration role is best understood as an optimizer's tool: the thick high-index body gives the design program a parameter (center thickness and weak curvatures) to fine-tune multiple aberrations simultaneously without disrupting the primary power distribution.

### L6 — Biconvex Positive (ED)

$n_d = 1.48749$, $\nu_d = 70.44$. Glass: H-QK3L (CDGM) — low-dispersion crown. $f = +25.1$ mm.

L6 is the strongest positive singlet in the front group and serves as the main collector/converging element of the SF assembly. Its high Abbe number ($\nu_d = 70.44$) makes it the primary chromatic corrector for the front section: as a positive element with low dispersion, it contributes converging power with minimal chromatic spread, helping to offset the strong overcorrecting chromatic contributions from the negative elements L2 and L3. The biconvex shape ($R_{12} = +60.20$, $R_{13} = -14.88$) places the stronger surface ($R_{13}$) facing the aperture stop, which is advantageous for controlling coma. The large center thickness ($ct = 6.04$ mm) and the asymmetric radii indicate that this element also contributes meaningfully to spherical aberration correction.

L6 is the last element of the SF group. The variable air gap D(13) immediately follows its rear surface.

### Aperture Stop

The aperture stop is located in the air space between the SF and MF groups, at surface 14 ($R = \infty$, $d = 1.3985$ mm). At full aperture the stop semi-diameter produces $F/4.1$ (patent) or approximately $F/4$ (production). The production lens uses a 14-blade aperture diaphragm producing a nearly circular opening at all stop sizes, with a manual aperture ring covering $f/4$ to $f/32$ in a smooth, clickless rotation.

### L7 — Cemented Doublet (Negative)

**L7a:** $n_d = 1.51680$, $\nu_d = 64.20$. Glass: H-K9L (CDGM) — borosilicate crown (N-BK7 equivalent, Schott). $f = +15.9$ mm.
**L7b:** $n_d = 1.80420$, $\nu_d = 46.50$. Glass: H-LAF3 (CDGM) — lanthanum flint (LaF3 equivalent, Schott). $f = -9.6$ mm.
**Combined doublet:** $f \approx -34.7$ mm.

L7 is a classic achromatic doublet in the negative sense: a positive crown (L7a) cemented to a stronger negative flint (L7b), yielding net negative power with chromatically corrected dispersion. The biconvex crown (L7a, $R_{15} = +24.19$, cemented at $R_{16} = -11.42$) and the biconcave flint (L7b, cemented at $R_{16}$, rear $R_{17} = +27.17$) produce an achromatized negative group that controls the ray bundle immediately after the aperture stop. This position is critical for controlling chromatic coma and lateral color across the wide field. The L7a glass (H-K9L, the BK7 equivalent) is the lowest-index and most common optical glass in the design — its use here reflects the doublet's role as a precision chromatic corrector rather than a power element.

### L8 — Biconvex Positive

$n_d = 1.64769$, $\nu_d = 33.84$. Glass: H-ZF1 (CDGM) — flint glass (SF2 equivalent, Schott). $f = +16.6$ mm.

L8 is the primary positive power element of the MF group and the element most responsible for converging the ray bundle toward the image plane. The biconvex shape ($R_{18} = +21.68$, $R_{19} = -19.79$) distributes the refractive bending across both surfaces, minimizing spherical aberration at each. The choice of a flint glass ($\nu_d = 33.84$) for a strong positive element is unconventional — in most designs, positive elements use crowns to minimize chromatic contribution. Here, the flint is selected deliberately: the strong positive power at this position produces significant undercorrecting chromatic aberration, which is needed to balance the overcorrecting tendency of the L7 and L9 achromatic doublets that bracket it. The medium refractive index ($n_d = 1.648$) keeps the surface curvatures moderate, limiting higher-order aberration contributions.

### L9 — Cemented Doublet (Weakly Negative)

**L9a:** $n_d = 1.90366$, $\nu_d = 31.31$. Glass: S-LAH95 / TAFD25 class (904313) — heavy lanthanum flint, high-refractive. $f = -14.7$ mm.
**L9b:** $n_d = 1.48749$, $\nu_d = 70.44$. Glass: H-QK3L (CDGM) — low-dispersion crown. $f = +17.7$ mm.
**Combined doublet:** $f \approx -161$ mm.

L9 is the final optical element before the image plane and forms the last achromatic correcting group. The glass pairing is a high-index heavy flint (L9a, 904313 class) cemented to a low-index crown (L9b, H-QK3L) — a classic flint-ahead achromatic doublet producing weakly negative net power. The nearly flat front surface of L9a ($R_{20} = +597.6$) accepts the converging beam from L8 with minimal aberration introduction, while the strongly curved cemented junction ($R_{21} = +12.94$) and the biconvex L9b rear surface ($R_{22} = -22.17$) perform the chromatic splitting and recombination. The combined doublet's weak negative power ($f = -161$ mm) means it functions primarily as a chromatic and field corrector rather than a power element. Its proximity to the image plane gives it strong leverage over lateral chromatic aberration, astigmatism, and field curvature — the same role that a field-flattening group plays in many macro lens designs.

The variable air gap D(22) follows L9b's rear surface and constitutes the back focal distance. At infinity focus, $D(22) = 38.90$ mm.

## Glass Selection

The design uses 7 distinct glass types drawn from the CDGM (成都光明, Chengdu Guangming) optical glass catalog, consistent with a Chinese-manufactured lens. All identifications are exact matches to within catalog publication precision.

| Element(s) | Glass | nd | νd | Category | Cross-reference |
|:---:|:---:|:---:|:---:|:---|:---|
| L1 | H-LAK7 | 1.77250 | 49.62 | Lanthanum crown | N-LAK33B (Schott) |
| L2 | H-ZLAF2 | 1.91082 | 35.25 | Heavy La flint (HR) | — |
| L3, L5, L9a | S-LAH95 / TAFD25 class | 1.90366 | 31.31 | Heavy La flint (HR) | 904313 catalog-backed class |
| L4a | H-ZF52 | 1.84666 | 23.78 | Dense flint (HR) | SF57 (Schott) |
| L4b | H-LAK5A | 1.72916 | 54.67 | Lanthanum crown | ~S-LAL54 (OHARA) |
| L6, L9b | H-QK3L | 1.48749 | 70.44 | Low-dispersion crown | CDGM catalog match |
| L7a | H-K9L | 1.51680 | 64.20 | Borosilicate crown | N-BK7 (Schott) |
| L7b | H-LAF3 | 1.80420 | 46.50 | Lanthanum flint | LaF3 (Schott) |
| L8 | H-ZF1 | 1.64769 | 33.84 | Flint | SF2 (Schott) |

**High-refractive (HR) glasses:** Three distinct types with $n_d > 1.84$ are used across five elements: 904313-class glass ($n_d = 1.904$) in L3, L5, and L9a; H-ZLAF2 ($n_d = 1.911$) in L2; and H-ZF52 ($n_d = 1.847$) in L4a. The production lens marketing refers to "three High Refractive elements," likely counting the three distinct HR glass types. These high-index glasses enable the strong negative meniscus elements (L2, L3) to achieve the required diverging power with physically compact curvatures, and provide the thick dispersive element (L5) and the rear corrector (L9a) with their characteristic high optical-path contributions.

**Extra-low-dispersion glass:** H-QK3L ($n_d = 1.487$, $\nu_d = 70.44$) is used in L6 and L9b — the two principal positive corrector elements. The marketing refers to "one Extra-low Dispersion element," counting the single low-dispersion glass type. These crown elements are placed at optically strategic locations: L6 at the rear of the front group (where it provides the main positive collecting power with minimal chromatic spread) and L9b at the final element (where it corrects lateral color and field curvature close to the image plane).

**Chromatic strategy:** The design achieves chromatic balance through a deliberate interplay of high-dispersion negative elements and low-dispersion positive elements. The strongly negative meniscus elements L2 and L3 produce the dominant overcorrecting chromatic contributions in the front group (negative power, low Abbe numbers). The positive ED elements (L6, L9b) and the conventional positive elements (L1, L8) produce undercorrecting contributions that counterbalance this overcorrection. The most unusual chromatic feature is the L4 doublet's inverted glass assignment (flint-positive, crown-negative), which produces net undercorrecting chromatic aberration despite having net negative optical power — flipping the expected chromatic sign and providing additional counterbalance to L2 and L3. The three cemented doublets (L4, L7, L9) each pair glasses with substantially different Abbe numbers, but only L4 departs from the classical achromatic configuration: L7 and L9 both use the standard crown-positive / flint-negative pairing, while L4 inverts it.

## Focus Mechanism

The lens employs a **dual-group floating focus** mechanism. Both the SF (front) and MF (rear) groups move toward the object when focusing from infinity to close distance, but at different rates:

| Parameter | Infinity | Close (0.78×) | Change |
|:---|:---:|:---:|:---:|
| D(13) — SF rear to stop | 10.796 mm | 1.102 mm | −9.695 mm |
| D(22) — BFD | 38.897 mm | 51.302 mm | +12.406 mm |
| SF travel (toward object) | — | — | 2.711 mm |
| MF travel (toward object) | — | — | 12.406 mm |
| Total track | 108.785 mm | 111.496 mm | +2.711 mm |

The MF group provides the primary focus extension ($12.41$ mm travel), while the SF group contributes a supplementary forward movement of $2.71$ mm. The combined travel of $SF + MF = 15.12$ mm satisfies the patent's Conditional Expression (1): $(SF + MF)/F = 0.945$, within the required range $0.6 \leq x \leq 1.2$ (¶0007). The floating arrangement — with both groups moving at different rates — allows the designer to maintain aberration correction across a very wide conjugate range (infinity to near-macro), because the relative positions of the lens groups can be tuned to compensate for the aberration changes that occur as the object distance decreases.

The total optical track increases by $2.71$ mm during focusing, corresponding to a physical extension of the lens barrel. Reviewers have noted approximately $\sim 10$ mm of barrel extension at closest focus.

The patent states a maximum magnification of $0.7836\times$ for Example 2 (¶0065). The production lens extends the focus travel beyond the patent values to achieve true $1{:}1$ magnification at a minimum focus distance of $0.122$ m ($4.7''$) with a working distance of approximately $5$ mm ($0.2''$) at $1{:}1$. This additional travel is a mechanical extension of the same optical principle, with expected degradation in off-axis performance at the extreme close end — consistent with reviewer observations that the lens is optimized for close-focus rather than infinity performance.

### Conditional Expressions

The patent specifies four conditional inequalities (¶0007–0026) that govern the balance between magnification range, compactness, and optical performance. Example 2 satisfies all four:

| Condition | Formula | Required Range | Example 2 Value |
|:---:|:---|:---:|:---:|
| (1) | $(SF + MF) / F$ | $0.6 \leq x \leq 1.2$ | 0.945 |
| (2) | $L / (SF + MF)$ | $5 \leq x \leq 15$ | 7.196 |
| (3) | $FF / F$ | $1.5 \leq x \leq 5$ | 2.961 |
| (4) | $(\tan\omega \times MF) / F$ | $0.5 \leq x \leq 1.5$ | 1.117 |

Condition (1) balances focus travel against mechanical complexity (¶0028): too large and the mechanism becomes impractical, too small and high magnification cannot be achieved. Condition (2) constrains the ratio of total track to focus travel (¶0029), ensuring compactness. Condition (3) requires the MF group focal length ($FF = f_{MF} = 47.4$ mm) to be between $1.5\times$ and $5\times$ the system focal length (¶0030), preventing either excessive or insufficient power in the main focus group. Condition (4) couples the field angle, MF travel, and focal length (¶0031) to ensure the wide-angle coverage and macro magnification are simultaneously achievable.

## Design Heritage and Context

The Laowa 15mm f/4 Wide Angle 1:1 Macro was announced in mid-2015 as the first production lens to combine ultra-wide-angle coverage ($110°$) with true $1{:}1$ macro magnification on full-frame 35 mm format. The patent's background section (¶0002–0003) explicitly references two prior Japanese patents — JP 2007-292978 (a three-group retrofocus macro with fixed rear group) and JP 2009-193052 (a three-group design with two moving focus groups) — and identifies their common limitation: insufficient magnification, attributed to both inadequate focus-group travel and unfavorable power distribution among the lens groups (¶0002–0003). The present design addresses this by distributing focusing across both the SF and MF groups in a manner governed by the conditional expressions, enabling magnification above $0.5\times$ while maintaining a field angle exceeding $100°$.

The all-spherical optical design is noteworthy for its era. By 2015, several competing ultra-wide-angle lenses — including the Canon EF 14mm f/2.8L II USM and the Samyang 14mm f/2.8 — employed multiple aspherical surfaces for distortion and coma control. The Laowa design avoids aspherical elements entirely, relying instead on the 12-element complexity, high-index glasses, and three cemented doublets to achieve its aberration targets. This reduces manufacturing cost — glass-molded aspheres or precision-polished aspheres would substantially increase the price of a lens in this market segment — but at the expense of distortion correction. The resulting $-4.85\%$ barrel distortion and wavy distortion pattern are consistent with an all-spherical ultra-wide design that has not been optimized for rectilinear projection. Venus Optics subsequently developed the Laowa 15mm f/2.0 "Zero-D" (a distortion-corrected ultra-wide, distinct from this macro design) and more recently the Laowa 15mm f/4.5 Macro (16 elements in 11 groups, including aspherical surfaces), which appears to be a successor design that trades maximum magnification ($0.5\times$ vs $1{:}1$) for improved distortion and infinity performance.

## Verification Summary

The following computed values were independently verified against the patent's stated parameters via ABCD-matrix paraxial ray trace:

| Parameter | Patent Stated | Computed | Discrepancy |
|:---|:---:|:---:|:---:|
| System EFL | 16.00 mm | 16.005 mm | +0.005 mm |
| Back focal distance | 38.897 mm | 38.897 mm | < 0.001 mm |
| MF group focal length ($FF$) | $FF/F = 2.961$ | $FF = 47.38$ mm ($FF/F = 2.961$) | exact |
| Condition (1) | 0.945 | 0.945 | exact |
| Condition (2) | 7.196 | 7.197 | +0.001 |
| Condition (4) | 1.117 | 1.116 | −0.001 |
| Petzval sum | — | $+0.00231$ mm$^{-1}$ | — |
| Petzval radius | — | $+433$ mm | — |

All values agree to within rounding precision of the patent's tabulated data. The marginal ray height at the image plane after tracing through all 22 surfaces with the published BFD is $y_{image} = 0.000002$ mm — effectively zero, confirming the internal consistency of the prescription.

## Sources

1. CN 205427291 U, "超广角微距镜头," Anhui ChangGeng Optical Technology Co., Ltd., granted 2016-08-03.
2. Venus Optics official product page, "Laowa 15mm f/4 Wide Angle Macro," https://www.venuslens.net/product/laowa-15mm-f4-wide-angle-macro/.
3. DPReview, "From another planet: Venus LAOWA 15mm F4 Wide Angle Macro quick review," 2016-03-13.
4. ePHOTOzine, "Laowa 15mm f/4 1:1 Macro Lens Review" (distortion measurement of $-4.85\%$).
5. Phillip Reeve, "Review: Laowa 15mm 4.0 Macro Fullframe," phillipreeve.net, 2019-06-25.
6. Tobias Hayashi, "Review: Venus Optics Laowa 15mm f4 Macro Lens," tobiashayashi.com, 2017-09-18.
