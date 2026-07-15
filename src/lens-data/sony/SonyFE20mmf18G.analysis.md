## Patent Reference and Design Identification

**Patent:** WO 2020/213337 A1  
**Application number:** PCT/JP2020/012065  
**Priority:** JP 2019-078654, filed 2019-04-17  
**Filed:** 2020-03-18  
**Published:** 2020-10-22  
**Inventors:** Kota Omiya; Tetsuichiro Okumura  
**Applicant:** Sony Corporation  
**Title:** *Optical System and Imaging Device*  
**Embodiment analyzed:** Numerical Example 2, Configuration 2 (Fig. 4; Tables 5-8)

Numerical Example 2 is a high-confidence match to the Sony FE 20mm f/1.8 G (SEL20F18G), although the patent does not identify a commercial product. The association rests on convergent evidence:

1. The prescription contains 14 elements in 12 air-separated groups, matching Sony's published 12-group/14-element construction.
2. Four aspherical surfaces occur on two elements, L13 and L27. Sony publishes a count of two AA elements. Assigning those commercial AA designations to L13 and L27 is a strong inference, not a manufacturer-published element map.
3. L12, L21, and L23 have ED-class glass data (νd = 75.5, 81.6, and 81.6), matching Sony's published count of three ED elements. The element-number mapping remains inferred from the patent prescription.
4. Independent reduced-angle ABCD tracing gives an effective focal length of 19.506932 mm. The companion prescription scales the geometry by 1.025276534097 to exactly 20.000 mm; the patent's Fno = 1.85 likewise corresponds to the marketed f/1.8 aperture.
5. The patent image height Y = 21.63 mm gives a 43.26 mm image-circle diameter, effectively the diagonal of the 35 mm full-frame format. Sony publishes a 94° full-frame angle of view.
6. GR2 moves as a rigid inner-focus group while GR1 and GR3 remain fixed (¶0020, ¶0088-¶0091; Table 8). Sony specifies a two-XD-linear-motor focus drive and no optical SteadyShot unit in the production lens.
7. Among the six worked examples, Example 2 alone combines the relevant focal length, aperture, full-frame image height, 14-element/12-group count, and fixed rear GR3 element.

The match is sufficiently strong for a production-lens catalog entry, but the prescription remains a patent embodiment associated with the SEL20F18G rather than a disclosed production drawing.

## Optical Architecture

The prescription has three net-positive lens groups in the order GR1-GR2-GR3, with the aperture stop between GR1 and GR2. Independently traced focal lengths are GR1 = +171.733950 mm, GR2 = +50.479631 mm, and GR3 = +267.049724 mm.

The patent calls the arrangement a “retrofocus type” (¶0025). Under the stricter reversed-telephoto criterion, however, its paraxial back focal distance is not longer than its focal length: BFD/EFL = 14.334152/19.506932 = 0.734823. It is therefore most accurately described as a patent-designated retrofocus-type, strongly asymmetric wide-angle system while noting that it does not satisfy the strict BFD > EFL criterion. The patent provides no mechanical mount-plane datum, so the prescription cannot establish the position of L31 relative to the E-mount flange.

GR1 (S1-S12; L11-L16) is weakly positive overall. Three front negative menisci, L11-L13, expand the off-axis bundle. L14 and L16 then provide positive power around the intervening negative L15. L13 is double-aspherical and supplies the principal non-spherical correction in the front section.

GR2 (S14-S25; L21-L27) is the moving focus group. The patent divides it into positive front subgroup GR2a and negative rear subgroup GR2b. Their verified focal lengths are +23.581180 mm and -26.723722 mm, agreeing with Table 26 to the published precision. GR2a contains two cemented pairs followed by the strong positive L25. GR2b consists of negative elements L26 and L27, with the strongly shaped air lens bounded by S23 and S24. The patent specifically requires the negative power of L27 to increase toward the periphery (¶0048, ¶0090).

GR3 (S26-S27; L31) is a weak fixed positive element. Paragraph 0053 states that adding this fixed rear group can improve dust resistance. The patent does not identify it as a field flattener, and its optical role should not be overstated.

The patent-scale prescription has a printed total front-vertex-to-image track of 100.66 mm. From the rounded prescription, the exact paraxial back focal distance is 14.334152 mm rather than the table's 14.32 mm, giving an exact-focus track of 100.674152 mm. The data file uses that exact-focus geometry and scales every radius and spacing by 1.025276534097, yielding a 103.218846 mm track and 14.696470 mm final gap at exactly 20.000 mm EFL. Unless stated otherwise, the analytical dimensions below remain at patent scale; dimensionless results are unchanged. No sensor cover glass is included.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air. They are not the in-situ powers of the elements within the complete system, particularly at cemented interfaces.

### L11 — Negative Meniscus, convex toward the object

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA representative equivalent). f = -51.1 mm.

L11 is the strongest of the three front negative menisci. Its rear surface is substantially steeper than its front surface, producing negative power while retaining a meniscus form. S-LAL18 reproduces the patent's rounded optical constants; the patent does not disclose the procurement vendor.

### L12 — Negative Meniscus, convex toward the object (ED class)

nd = 1.55032, νd = 75.5. Glass: FCD705 (HOYA). f = -95.0 mm.

L12 continues the front-section divergence with markedly lower dispersion than L11. FCD705 is an exact catalog match to the published nd/νd pair. Together with L21 and L23, it is one of the three elements most plausibly corresponding to Sony's three ED elements.

### L13 — Negative Meniscus, convex toward the object (two aspherical surfaces)

nd = 1.58313, νd = 59.5. Glass: M-BACD12 (HOYA). f = -70.0 mm.

Both S5 and S6 are aspherical. L13 lies before the 5.00 mm air space to L14, allowing its departures to alter peripheral ray height and slope before the stronger reconvergence in the rear of GR1. M-BACD12 matches the patent's rounded optical constants.

### L14 — Positive Meniscus

nd = 1.85896, νd = 22.7. Glass: S-NPH5 (OHARA representative equivalent). f = +72.5 mm.

L14 is the first positive element in GR1. Its high index permits useful positive power with moderate surface curvature. Its low Abbe number places it in dense-flint territory rather than among crown glasses.

### L15 — Negative Meniscus, concave toward the object

nd = 1.74077, νd = 27.8. Glass: S-TIH13 (OHARA representative equivalent). f = -56.1 mm.

L15 interrupts the convergence introduced by L14. The 0.83 mm air gap to L16 makes the L14-L15-L16 sequence a tightly coupled power transition rather than three weakly interacting elements.

### L16 — Biconvex Positive

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA representative equivalent). f = +30.9 mm.

L16 is the strongest positive element in GR1. Its rear surface supplies most of its positive power. With νd below 50, the glass is properly classified as a dense lanthanum flint, not a crown.

### L21 + L22 — Cemented Doublet D1

**L21:** nd = 1.49700, νd = 81.6. Glass: ED fluorophosphate 497/816 class (FCD1 / S-FPL51 / J-FK01A; vendor undetermined). Standalone f = +26.7 mm.  
**L22:** nd = 1.75520, νd = 27.5. Glass: S-TIH4 (OHARA representative equivalent). Standalone f = -62.7 mm.

The cemented pair has an in-situ focal length of +43.967686 mm. L21 supplies high-Abbe positive power, while L22 provides the negative, higher-dispersion partner. The 1.49700/81.6 pair maps to several authoritative Japanese catalog equivalents; the patent does not provide enough information to select one vendor's partial-dispersion curve.

### L23 + L24 — Cemented Doublet D2

**L23:** nd = 1.49700, νd = 81.6. Glass: ED fluorophosphate 497/816 class (FCD1 / S-FPL51 / J-FK01A; vendor undetermined). Standalone f = +34.2 mm.  
**L24:** nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA). Standalone f = -23.9 mm.

Unlike D1, D2 is net negative, with an in-situ focal length of -91.527601 mm. It therefore functions as a negative chromatic-correction pair within the otherwise positive GR2a rather than as a conventional net-positive achromat.

### L25 — Biconvex Positive

nd = 1.94595, νd = 18.0. Glass: FDS18 (HOYA). f = +26.1 mm.

L25 is the most image-side positive lens in GR2 and, as stated in ¶0089, the strongest positive lens among GR2's positive elements. Its very high refractive index provides substantial power in a compact element, while the adjacent high-Abbe cemented components help manage its strong dispersion.

### L26 — Biconcave Negative

nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA). f = -34.6 mm.

L26 begins the negative subgroup GR2b. Most of its negative power is concentrated at the steep rear surface S23. That surface also forms the object-side boundary of the air lens specified by conditional expression (2).

### L27 — Biconcave Negative (two aspherical surfaces)

nd = 1.85135, νd = 40.1. Glass: M-TAFD305 (HOYA). f = -130.0 mm.

L27 is the final element of GR2 and carries aspherical surfaces S24 and S25. Its central spherical-base power is relatively weak, but the non-spherical profile is designed so that negative power increases toward the periphery. This is the patent's principal mechanism for controlling image curvature and off-axis aberration near the image side without adding further moving elements.

### L31 — Biconvex Positive, fixed GR3 element

nd = 1.51680, νd = 64.2. Glass: BSC7 (HOYA representative equivalent). f = +267.0 mm.

L31 is fixed relative to the image plane. The patent identifies improved dust resistance as the reason for adding GR3 behind the moving group (¶0053). Its optical power is weak but nonzero.

## Glass Identification and Selection

The names below are authoritative catalog matches or representative equivalents for the patent's nd/νd pairs. The patent supplies optical constants but not melt-vendor names; therefore, a catalog name identifies an equivalent glass, not proven production procurement. L21 and L23 are left vendor-neutral because the plausible 497/816 equivalents differ enough in partial dispersion that selecting one would introduce unwarranted spectral precision.

| Element(s) | Catalog identification | Patent nd | Patent νd | Catalog ΔPgF | Status / role |
|---|---|---:|---:|---:|---|
| L11 | S-LAL18 (OHARA representative) | 1.72916 | 54.7 | -0.0086 | Exact optical-constant match; front lanthanum crown |
| L12 | FCD705 (HOYA) | 1.55032 | 75.5 | +0.0276 | Exact; ED fluorophosphate |
| L13 | M-BACD12 (HOYA) | 1.58313 | 59.5 | -0.0008 | Exact; moldable barium crown |
| L14 | S-NPH5 (OHARA representative) | 1.85896 | 22.7 | +0.0237 | Exact; dense high-index flint |
| L15 | S-TIH13 (OHARA representative) | 1.74077 | 27.8 | +0.0130 | Exact; titanium flint |
| L16 | S-LAH58 (OHARA representative) | 1.88300 | 40.8 | -0.0088 | Exact; dense lanthanum flint |
| L21, L23 | 497/816 ED class: FCD1 (HOYA), S-FPL51 (OHARA), or J-FK01A (HIKARI) | 1.49700 | 81.6 | Not assigned | Vendor and spectral curve underdetermined |
| L22 | S-TIH4 (OHARA representative) | 1.75520 | 27.5 | +0.0133 | Exact; cemented flint partner |
| L24, L26 | S-NBH56 (OHARA) | 1.85478 | 24.8 | +0.0109 | Exact; high-index flint |
| L25 | FDS18 (HOYA) | 1.94595 | 18.0 | +0.0386 | Exact to patent rounding; very dense flint |
| L27 | M-TAFD305 (HOYA) | 1.85135 | 40.1 | -0.0067 | Exact; moldable dense flint |
| L31 | BSC7 (HOYA representative) | 1.51680 | 64.2 | +0.0015 | Exact; borosilicate crown |

The chromatic strategy is distributed across both major groups. L12 supplies low dispersion in the divergent front section. L21 and L23 place high-Abbe positive components in GR2a, paired with the much lower-Abbe L22 and L24. L25 then contributes strong positive power with very high dispersion. The data file includes catalog nC, nF, ng, and ΔPgF values for uniquely or representatively resolved glasses. L21 and L23 deliberately retain only the patent's nd/νd values.

Sony publishes counts of two AA elements and three ED elements but does not assign those designations to patent element numbers. The L13/L27 AA mapping and L12/L21/L23 ED mapping are therefore inferences.

## Focus Mechanism

GR2 moves as a rigid body toward the object for close focus, while GR1 and GR3 remain fixed. The equal and opposite changes in D13 and D25 prove pure translation of the seven-element GR2 assembly.

| Variable gap | Infinity | Patent close state | Change |
|---|---:|---:|---:|
| D13, STO to S14 | 8.73 mm | 3.33 mm | -5.40 mm |
| D25, S25 to S26 | 4.50 mm | 9.90 mm | +5.40 mm |

Independent finite-conjugate paraxial tracing of the patent close state, retaining the printed 14.32 mm final image gap, gives an object distance of 68.944 mm in front of the first vertex, a transverse magnification of -0.24644, and an object-plane-to-image-plane distance of 0.16960 m. These are derived paraxial values; the patent does not print object distance or magnification for the close state.

Sony publishes minimum focus distances of 0.19 m in AF and 0.18 m in MF, with corresponding maximum magnifications of 0.20× and 0.22×. The data file preserves the patent's focus-gap movement but uses the manufacturer-published 0.18 m value for `closeFocusM`. Sony also states that two XD linear motors drive the production lens; the patent specifies the optical movement but not that commercial actuator implementation.

## Aspherical Surfaces

Example 2 has four aspherical surfaces: S5 and S6 on L13, and S24 and S25 on L27.

Paragraph 0068 defines vertex curvature as $c=1/R$ and prints the numerator of the conic term as $y^2c^2$. That numerator is dimensionless and cannot produce sag in millimeters; it is a typographical error in the patent equation. The prescription must use the dimensionally consistent standard form

$$
x(y)=\frac{c y^2}{1+\sqrt{1-(1+K)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12}.
$$

The denominator confirms that the patent's tabulated $k$ maps directly to the standard conic constant $K$; no $K=k-1$ conversion is required.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| S5 | 0 | +3.201563E-05 | -2.052107E-07 | +6.627072E-10 | -1.113243E-12 | 0 |
| S6 | -5.767229E-01 | +4.052845E-05 | -2.775909E-07 | +9.527079E-10 | -2.305643E-12 | 0 |
| S24 | 0 | -4.643247E-05 | +1.033816E-07 | -1.262662E-09 | +7.029240E-12 | -2.869344E-14 |
| S25 | 0 | +5.092772E-07 | +1.976421E-07 | -8.543724E-10 | +6.232804E-12 | -2.187840E-14 |

These are the patent-scale coefficients. The companion data transforms each polynomial term as $A_{p,scaled}=A_{p,patent}/s^{p-1}$ for $s=1.025276534097$ while leaving $K$ unchanged.

The departures below were evaluated from the complete conic-plus-polynomial equation at the verified semi-diameters. Positive departure is imageward relative to the same-radius sphere; negative departure is objectward.

| Surface | Verified semi-diameter | Aspheric departure from sphere |
|---|---:|---:|
| S5 | 15.2000 mm | +0.351966 mm |
| S6 | 13.9000 mm | -1.016328 mm |
| S24 | 11.5856 mm | -0.782558 mm |
| S25 | 12.7134 mm | +0.512141 mm |

Higher-order terms and the sign of the base curvature materially affect the result, so the evaluated departures are more reliable than interpretation from A4 alone.

## Conditional Expressions

All six patent conditions, including the progressively tighter preferred ranges, are satisfied when the definitions are applied to the actual prescription.

| Condition | Independently computed | Base range | Tighter preferred range | Tightest stated range | Result |
|---|---:|---|---|---|---|
| (1) $R_{2f}/R_{2r}$ | 0.08402 | $(0,1)$ | $(0.05,0.95)$ | $(0.08,0.95)$ | Pass |
| (2) $SH_{air}$ | -0.68733 | $[-1,1]$ | $[-0.97,0.92]$ | $[-0.97,0.20]$ | Pass |
| (3) $f_{2a}/f_{2b}$ | -0.88241 | $(-2,0)$ | $(-1.2,-0.5)$ | $(-0.95,-0.6)$ | Pass |
| (4) $n_{d2ap}$ | 1.94595 | $>1.72$ | $>1.8$ | $>1.9$ | Pass |
| (5) $ν_p$ | 81.6 | $>60$ | $>70$ | $>80$ | Pass |
| (6) $R_{2f}/f$ | 1.29216 | $(0,10)$ | $(0.5,6)$ | $(0.8,5.7)$ | Pass |

Table 25 prints $n_{d2ap}=1.85478$ for Example 2. That index belongs to L24 and L26, both negative lenses. The definition in ¶0039 and the sequence in ¶0089 identify L25 as the most image-side positive lens, making 1.94595 the correct value. The Table 25 entry is a patent typographical error.

Condition (6) independently checks focal length. Table 25 gives 1.292, and $25.206/1.292=19.509$ mm, agreeing with the ABCD result of 19.506932 mm rather than the 19.05 mm printed in Table 7.

## Verification Summary

| Quantity | Patent table | Independent result / treatment in data |
|---|---:|---:|
| Effective focal length | 19.05 mm (Table 7) | 19.506932 mm from the patent prescription; scaled to 20.000000 mm in data |
| Back focal distance | 14.32 mm (Table 5) | Exact 14.334152 mm patent-scale value; scaled to 14.696470 mm in data |
| Image height | 21.63 mm | Implied paraxial half-field 47.954° |
| Patent half-angle $ω$ | 30.12° | Incompatible with both Y and EFL; Sony publishes 94° full field |
| GR1 focal length | — | +171.733950 mm |
| GR2 focal length | — | +50.479631 mm |
| GR2a focal length | 23.581 mm (Table 26) | +23.581180 mm |
| GR2b focal length | -26.723 mm (Table 26) | -26.723722 mm |
| GR3 focal length | — | +267.049724 mm |
| D1 cemented focal length | — | +43.967686 mm |
| D2 cemented focal length | — | -91.527601 mm |
| Printed total track | 100.66 mm | Superseded by the exact-focus track before scaling |
| Exact-focus total track | — | 100.674152 mm patent scale; 103.218846 mm in data |
| Petzval sum | — | +0.003509381 mm⁻¹ patent scale; +0.003422863 mm⁻¹ in data |
| Petzval-radius magnitude | — | 284.951 mm patent scale; 292.154 mm in data |

The focal-length and field-angle entries in Table 7 are internally inconsistent with the prescription. The ABCD result is validated by the exact reproduction of Table 26's GR2a and GR2b focal lengths and by condition (6). The printed $ω=30.12°$ would imply an image height of only about 11.1 mm at f = 19.05 mm, not 21.63 mm. Conversely, Y = 21.63 mm implies 48.63° at 19.05 mm or 47.95° at the traced EFL, consistent with Sony's published 94° full field. The simplest reading is that Table 7 contains typographical errors in both f and $ω$.

The Petzval sum was calculated surface by surface as $\sum \phi/(n n')$, including every cemented interface. It was not approximated from thin-element focal lengths.

After the patent-outline tuning, semi-diameter validation gives maximum $sd/|R|=0.861614$, maximum front/rear semi-diameter ratio 1.209596, minimum edge thickness 0.314644 mm at L25, maximum rim angle 59.50°, and minimum cross-gap clearance 10.533% at the S23-S24 air lens. The infinity and close-focus render checks require no surface trimming.

## Sources

- WO 2020/213337 A1, Sony Corporation, *Optical System and Imaging Device*, especially Fig. 4; Tables 5-8 and 25-26; ¶0018-¶0053, ¶0067-¶0068, and ¶0085-¶0097.
- Sony, official SEL20F18G product features and specifications: 20 mm, f/1.8, 12 groups/14 elements, 94° full-frame field, two AA elements, three ED elements, two XD linear motors, 0.18-0.19 m minimum focus distance, nine aperture blades, and no lens-based optical stabilization.
- OHARA, official optical-glass catalog data: S-LAL18, S-NPH5, S-TIH13, S-LAH58, S-FPL51, S-TIH4, and S-NBH56.
- HOYA, official optical-glass catalog data: FCD705, FCD1, M-BACD12, FDS18, M-TAFD305, and BSC7.
- HIKARI, official optical-glass catalog data for J-FK01A.
