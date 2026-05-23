# smc PENTAX-FA645 120mm F4 Macro — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,154,324  
**Title:** Macro Lens System  
**Application Number:** US 09/205,716  
**Filed:** December 4, 1998  
**Granted:** November 28, 2000  
**Priority:** December 4, 1997 (JP 9-334419)  
**Inventors:** Masayuki Murata; Takayuki Ito  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha, Tokyo, Japan  
**Embodiment analyzed:** First embodiment, Example 1 / Table 1

US 6,154,324 describes a medium-format autofocus macro lens in which a positive first lens group, a movable aperture stop, and a negative second lens group all move independently during focusing. The numerical prescription transcribed here is the patent's first embodiment, Table 1.

The production smc PENTAX-FA645 120mm F4 Macro is identified with this patent through convergent evidence rather than through a patent statement naming the commercial lens.

1. The patent prescription is a 9-element, 7-air-group, all-spherical macro lens. The official Ricoh specification for the smc PENTAX-FA645 120mm F4 Macro gives 9 elements in 7 groups.
2. The patent architecture is a positive front group, movable aperture stop, and negative rear group, with all three components independently driven during focusing. The official product description identifies the production lens as using floating and independently moving aperture mechanisms.
3. The patent's close-focus condition is life-size reproduction, $M=-1.000$. The production lens is specified as 1.00× maximum magnification.
4. The computed object-to-image distance at the patent close-focus setting is 394.23 mm, matching the production minimum focusing distance of 0.395 m within rounding.
5. The patent's infinity focal length is 123.09 mm, which is consistent with the marketed 120 mm designation. The computed full-field angle on the nominal 645 frame is approximately 31.6°, close to Ricoh's 32.5° value for 645 film.
6. The filing and priority dates precede the lens introduction period, and the assignee is Asahi Kogaku Kogyo Kabushiki Kaisha, the Pentax corporate predecessor.

The main production-to-patent discrepancy is the maximum aperture. Example 1 is tabulated as F/3.8 at infinity and F/6.3 at 1:1, while the production lens is marketed as F4. The data file therefore preserves the patent stop size for optical reconstruction (`apertureDesign: 3.8`) while recording the manufacturer-published marketed aperture (`nominalFno: 4`, `apertureMarketing: 4`). Example 3 of the same patent is tabulated at F/4.0, but Example 1 was retained because its numerical design is the one used in the supplied prior analysis and because its computed close-focus distance and architecture align cleanly with the production lens.

## Optical Architecture

The design is a two-group floating macro lens with a positive first lens group, an independently moving aperture stop, and a negative second lens group. The group-level power layout is positive–negative, but the system is not a true telephoto layout by track ratio: the infinity total track from the first surface to the image plane is 160.43 mm, and the computed infinity focal length is 123.09 mm, giving $TL/f \approx 1.30$.

Group 1 contains six elements in four air-separated units: L1, the L2/L3 cemented doublet, L4, and the L5/L6 cemented doublet. Its computed paraxial focal length is +82.80 mm. It supplies the dominant positive power and carries most of the chromatic-correction burden through two cemented doublets and a low-dispersion positive element.

Group 2 contains three singlets: negative L7, negative L8, and positive L9. Its computed focal length is −377.91 mm. This is a weak negative rear group rather than a simple telephoto compressor. In the full system it increases the effective focal length relative to the front group alone and provides a large negative Petzval contribution. The surface-by-surface Petzval reciprocal sum is +0.001156 mm⁻¹ overall, corresponding to a Petzval radius magnitude of about 865 mm. Group 1 alone contributes +0.004284 mm⁻¹; Group 2 contributes −0.003127 mm⁻¹, reducing the field curvature that would otherwise be produced by the positive front group.

The design is entirely spherical. No aspherical coefficients, conic constants, or non-spherical surface descriptions appear in the patent prescription. The correction strategy is conventional but highly mobile: glass choice, cemented achromats, and differential floating motion replace aspherical-surface correction.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.78590$, $\nu_d = 44.2$. Glass: S-LAH51 (OHARA). $f = +131.9$ mm.

L1 is the first collector and the first positive-power element. Both radii are positive ($R_1=+64.350$ mm, $R_2=+163.546$ mm), making it a positive meniscus convex to the object. The high refractive index allows useful front-group power without requiring excessively steep surface curvature at the front of the large 645-format beam.

The Abbe number places this glass in dense lanthanum-flint territory rather than in a conventional crown class. Its use at the front is acceptable because the element is followed by two chromatic-correction doublets and by the low-dispersion L4 element.

### L2/L3 — Cemented Doublet, Net Negative Corrector

L2: $n_d = 1.61800$, $\nu_d = 63.4$. Glass: S-PHM52 (OHARA). $f_{standalone}=+96.6$ mm.  
L3: $n_d = 1.54072$, $\nu_d = 47.2$. Glass: S-TIL2 (OHARA). $f_{standalone}=-56.4$ mm.  
Cemented doublet net: $f=-175.7$ mm.

The L2/L3 doublet is the first chromatic corrector. L2 is a positive low-dispersion member; L3 is a negative light-flint member. The doublet is net negative because the negative power of L3 outweighs the positive contribution of L2. This doublet therefore does not act as a primary converging group. Its role is to correct the chromatic and spherical balance established by L1 while moderating the front group's total power.

The prior glass identification of L3 as S-TIL25 was not correct. The patent value $n_d=1.54072$, $\nu_d\approx47.2$ matches OHARA S-TIL2, whereas S-TIL25 is a substantially higher-index, lower-Abbe glass and does not match the prescription.

### L4 — Positive Meniscus, Concave to Object; Probable ED Element

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA). $f = +92.1$ mm.

L4 is a low-index, low-dispersion positive meniscus. Its first surface is almost plano at $R_6=-6450.000$ mm, while the rear surface is strongly concave to the object at $R_7=-44.590$ mm. The element therefore supplies positive power mainly at the rear surface while adding relatively little high-order aberration at its weak front surface.

The production lens is described by Ricoh as containing ED glass. The patent does not label individual glasses as ED, but L4 is the only Example 1 glass with $\nu_d\approx70$ and is the natural candidate for the production ED element. This identification is therefore marked as inferred rather than explicitly stated by the patent.

### L5/L6 — Cemented Doublet, Weak Positive Corrector

L5: $n_d = 1.64769$, $\nu_d = 33.8$. Glass: S-TIM22 (OHARA). $f_{standalone}=-37.6$ mm.  
L6: $n_d = 1.73400$, $\nu_d = 51.5$. Glass: S-LAL59 (OHARA). $f_{standalone}=+39.0$ mm.  
Cemented doublet net: $f=+250.3$ mm.

This doublet sits immediately in front of the stop and is a chromatic and field corrector more than a strong power group. The individual element powers are large and opposite in sign, but their combined power is weakly positive. The doublet's placement near the stop makes it influential for spherical aberration, coma balance, and chromatic correction at the transition between the positive front group and the rear relay.

The earlier analysis misidentified both glasses. The L5 value $n_d=1.64769$, $\nu_d\approx33.8$ matches OHARA S-TIM22, not S-TIH14. The L6 value $n_d=1.73400$, $\nu_d\approx51.5$ matches OHARA S-LAL59, not S-LAL14. These corrections matter because the old labels implied the wrong dispersion class and would mislead any chromatic ray trace that resolves glass names to catalog dispersion data.

### Aperture Stop S — Independently Moving Diaphragm

The aperture stop is positioned between the positive first lens group and the negative second lens group. At infinity the patent gives 1.50 mm from surface 10 to the stop and 2.50 mm from the stop to surface 11. At the 1:1 close-focus condition these spacings grow to 18.98 mm and 32.27 mm, respectively.

The stop is not fixed to either optical group. The patent describes a driving mechanism that moves the first group, aperture, and second group independently toward the object side as focus approaches minimum distance. The stop movement is intermediate: less than Group 1 movement and greater than Group 2 movement. This is the central mechanism by which the patent controls the increase in effective F-number at close focus.

For the patent Example 1 F/3.8 infinity aperture, the paraxial entrance-pupil radius is 16.196 mm. The first-group matrix maps that to a physical stop semi-diameter of 11.932 mm, which is the stop semi-diameter used in the data file. The production lens is marketed as F4, so the viewer-level nominal aperture is recorded as F4 while the patent stop geometry is preserved.

### L7 — Negative Meniscus, Convex to Object

$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA). $f = -98.1$ mm.

L7 is the first element of Group 2 and the strongest negative element in that group. Both surfaces have positive radii ($R_{11}=+242.198$ mm, $R_{12}=+57.500$ mm), giving a negative meniscus convex to the object.

Its position immediately behind the stop gives it strong leverage over axial aberrations and over the rear group's negative power. The earlier identification as S-LAH55 was not supported by the prescription. The patent value matches OHARA S-LAH66 exactly at the tabulated precision.

### L8 — Negative Meniscus, Convex to Object

$n_d = 1.67790$, $\nu_d = 55.3$. Glass: S-LAL12 (OHARA). $f = -213.3$ mm.

L8 is a weaker negative meniscus in the rear group. It follows L7 after a short air gap and precedes the final positive element after a long 16.03 mm air space. This position gives it greater influence over field-dependent aberrations than L7, especially astigmatism and field curvature.

The glass is a lanthanum crown with moderate dispersion. It is not a high-dispersion chromatic corrector by itself; its main role is the weak negative rear-group relay contribution and field-shaping in combination with L9.

### L9 — Biconvex Positive Rear Element

$n_d = 1.78590$, $\nu_d = 44.2$. Glass: S-LAH51 (OHARA). $f = +102.9$ mm.

L9 is the final glass element and has positive power, with $R_{15}=+94.754$ mm and $R_{16}=-540.000$ mm. It moderates the negative power of L7 and L8 so that Group 2 remains a weak negative group rather than an excessively divergent rear assembly.

Its high-index glass matches L1. In Group 2, the element helps control image-side ray angles and contributes to the rear group's net Petzval balance. The rear surface is weak compared with the front surface, so most of the element's power is concentrated at the front interface after the long air space from L8.

## Glass Identification and Selection

The patent gives refractive index and Abbe number but not vendor glass names. The table below uses OHARA catalog matches because the patent is Japanese and because all eight distinct glass coordinates match OHARA catalog types at the stated precision.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Corrected catalog identification | Role |
|---|---:|---:|---|---|
| L1, L9 | 1.78590 | 44.2 | S-LAH51 (OHARA) | High-index dense lanthanum flint for positive collector/rear positive element |
| L2 | 1.61800 | 63.4 | S-PHM52 (OHARA) | Low-dispersion positive member of D1 |
| L3 | 1.54072 | 47.2 | S-TIL2 (OHARA) | Light-flint negative member of D1 |
| L4 | 1.48749 | 70.2 | S-FSL5 (OHARA) | Low-dispersion positive element; probable ED element |
| L5 | 1.64769 | 33.8 | S-TIM22 (OHARA) | High-dispersion negative member of D2 |
| L6 | 1.73400 | 51.5 | S-LAL59 (OHARA) | High-index positive member of D2 |
| L7 | 1.77250 | 49.6 | S-LAH66 (OHARA) | Strong rear-group negative element |
| L8 | 1.67790 | 55.3 | S-LAL12 (OHARA) | Weak rear-group negative field corrector |

The chromatic correction is distributed rather than concentrated in a single exotic element. The L2/L3 and L5/L6 cemented doublets provide the main achromatizing pairs. L4 contributes positive power with relatively low dispersion and is the likely ED element referenced in the production specification. The rear group uses high-index lanthanum glasses to shape field curvature and image-side ray geometry while preserving a compact 645 SLR back focus.

## Focus Mechanism

The patent's focus mechanism is a three-component floating system. Group 1, the aperture stop, and Group 2 all move toward the object side from infinity to 1:1, but they move by different amounts. This produces three variable air spaces in the optical prescription: surface 10 to stop, stop to surface 11, and final-surface image distance.

| Parameter | Infinity | Close focus / 1:1 | Change or note |
|---|---:|---:|---:|
| Surface 10 to stop | 1.50 mm | 18.98 mm | +17.48 mm |
| Stop to surface 11 | 2.50 mm | 32.27 mm | +29.77 mm |
| Surface 16 to image plane | 76.00 mm | 91.75 mm | +15.75 mm image-side distance |
| Group 1 movement $X_1$ | — | — | 63.00 mm |
| Aperture movement $X_S$ | — | — | 45.52 mm |
| Group 2 movement $X_2$ | — | — | 15.75 mm |
| Effective focal length | 123.09 mm | 103.80 mm | paraxial EFL of the spacing state |
| Effective F-number | F/3.8 | F/6.3 | patent full-open values |
| Object-to-image distance | — | 394.23 mm | computed for $M\approx-1$ |

A point of terminology is important. The patent's close-focus `fB = 91.75 mm` is the final-surface-to-image distance for the finite-conjugate 1:1 configuration. It is not the Gaussian back focal length for collimated input through the close-focus spacing. If the close-focus spacing is traced at infinite conjugate, the rear focal point lies on the object side of the final surface; that value is not the patent's finite-conjugate `fB` and should not be used to describe the working close-focus condition.

The computed close-focus object distance in front of surface 1 is 170.80 mm. Adding the 223.43 mm optical track from surface 1 to the image plane gives 394.23 mm, which confirms the production 0.395 m minimum focusing distance at the level of rounding expected from mechanical datum differences.

## Aspherical Surfaces

The design contains no aspherical surfaces. All 16 refracting glass surfaces in Example 1 are spherical, and the patent gives no aspherical coefficient table. The data file therefore uses `asph: {}`.

## Conditional Expressions

The patent states four focus-mechanism conditions. Example 1 satisfies all four.

**Condition (1):**

$$0.5 < \frac{F_e}{F(1-M_c)} < 0.9$$

For Example 1:

$$\frac{6.3}{3.8(1-(-1.0))}=\frac{6.3}{7.6}=0.829$$

The moving stop therefore keeps the close-focus effective F-number to 82.9% of the value expected from a fixed-stop F/3.8 macro lens at 1:1.

**Condition (2):**

$$F_e < 7$$

Example 1 gives $F_e=6.3$, satisfying the patent's autofocus-light condition.

**Condition (3):**

$$0.5 < X_S/X_1 < 1.0$$

For Example 1:

$$X_S/X_1 = 45.52/63.00 = 0.723$$

The aperture movement is smaller than the front-group movement but large enough to prevent the close-focus marginal-ray geometry described by the patent as undesirable.

**Condition (4):**

$$0 < X_2/X_1 < 0.5$$

For Example 1:

$$X_2/X_1 = 15.75/63.00 = 0.250$$

The rear group moves in the same direction as Group 1 but by only one quarter of the front-group travel.

## Verification Summary

The prescription was independently re-entered and checked with a Python paraxial ray trace using surface refraction and transfer matrices. The Petzval calculation used the surface-by-surface expression $\phi/(n n')$.

| Quantity | Patent / expected value | Computed value | Result |
|---|---:|---:|---|
| EFL at infinity | 123.09 mm | 123.0877 mm | matches |
| Infinity back focal distance | 76.00 mm | 76.0037 mm | matches |
| EFL of close-focus spacing | 103.80 mm | 103.7962 mm | matches |
| Close-focus lateral magnification using patent image distance | −1.000 | −0.99998 | matches |
| Object-to-image distance at close focus | 0.395 m production spec | 394.23 mm | matches |
| Group 1 focal length | — | +82.8018 mm | verified |
| Group 2 focal length | — | −377.9131 mm | verified |
| L2/L3 doublet focal length | — | −175.7130 mm | verified |
| L5/L6 doublet focal length | — | +250.2810 mm | verified |
| Stop semi-diameter for patent F/3.8 | — | 11.9324 mm | used in data file |
| Petzval reciprocal sum | — | +0.00115647 mm⁻¹ | verified |
| Petzval radius magnitude | — | 864.70 mm | verified |
| $F_e/[F(1-M_c)]$ | 0.829 | 0.829 | matches |
| $X_S/X_1$ | 0.72 | 0.723 | matches |
| $X_2/X_1$ | 0.25 | 0.250 | matches |

The semi-diameters in the data file are not patent-published values. They are conservative ray-envelope estimates constrained by edge thickness, same-element surface-size ratio, rim slope, and cross-gap sag intrusion. The closest constraints occur around the L4/L5 air gap and the L2/L3 doublet, so the data file intentionally keeps those clear apertures below the marginal-ray-only envelope.

## Sources

1. US Patent 6,154,324, “Macro Lens System,” Masayuki Murata and Takayuki Ito, granted November 28, 2000. Primary source for the optical prescription, moving-group layout, conditional expressions, and numerical embodiment data.
2. Ricoh Imaging Americas, “smc PENTAX-FA645 120mm F4 Macro,” official product page, https://us.ricoh-imaging.com/product/smc-pentax-fa645-120mm-f4-macro/ . Source for production specifications including 120 mm marketed focal length, F4 maximum aperture, 0.395 m minimum focusing distance, 1.00× maximum magnification, 9 elements in 7 groups, ED glass, floating / independently moving aperture description, 67 mm filter, 8 diaphragm blades, and 735 g mass.
3. Ricoh Imaging global lens archive, “smc PENTAX-FA645 120mm F4 Macro,” official product page, https://www.ricoh-imaging.co.jp/english/products/645/lens/standard/smcpentax-fa645macro120/ . Cross-check for production specifications.
4. OHARA INC / OHARA Corporation optical glass data sheets for S-LAH51, S-PHM52, S-TIL2, S-FSL5, S-TIM22, S-LAL59, S-LAH66, and S-LAL12. These catalog entries were used to verify the glass identifications against the patent's $n_d$ and $\nu_d$ values; S-TIM22 is retained from the OHARA legacy data sheet matching the 648/338 glass code.
