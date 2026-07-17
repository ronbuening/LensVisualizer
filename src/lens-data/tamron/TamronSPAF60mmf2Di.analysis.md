## Patent Reference and Design Identification

**Patent:** US 2011/0286116 A1  
**Application Number:** 13/147,270; PCT/JP2010/051698  
**Priority:** February 5, 2009 (JP 2009-025033)  
**Filed:** February 5, 2010  
**Published:** November 24, 2011  
**Inventors:** Kaori Shimizu; Hisayuki Yamanaka  
**Applicant / Assignee:** Tamron Co., Ltd.  
**Title:** Macro Lens  
**Classification:** G02B 9/34  
**Embodiment analyzed:** Embodiment 1 (¶0046)  
**Worked examples:** Three

Embodiment 1 is a strong design-family match for the Tamron SP AF 60mm F/2 Di II LD [IF] MACRO 1:1, Model G005, but it should not be represented as a proven factory production prescription.

The association rests on several independent points:

1. **Optical count.** The patent example contains 14 elements in 10 air-separated groups. Tamron specifies the production lens as 14 elements in 10 groups.
2. **Focal length and aperture.** The patent gives $f = 61.500$ mm and FNo. = 2.06; the product is marketed as 60 mm f/2.
3. **Format and field.** The patent uses image height $Y = 14.5$ mm and full field $2\omega = 26.6^\circ$, consistent with an APS-C lens. Tamron identifies the product as Di II and currently publishes a diagonal field of $26^\circ 11'$.
4. **Macro range.** The prescription includes infinity, 5:1, and 1:1 focus states. A finite-conjugate paraxial solution gives a sensor-plane-to-object distance of 230.068 mm at the 1:1 state, independently matching Tamron's 0.23 m minimum object distance.
5. **Focus architecture.** In the patent, the first and fourth groups remain fixed, the second group moves imageward, and the third group moves objectward. Tamron identifies the product as internally focusing and states that the lens does not change overall length during focusing.
6. **Low-dispersion count.** Embodiment 1 contains two elements with $n_d = 1.49700$, $\nu_d = 81.6$, while Tamron specifies two LD elements.
7. **Timing.** The February 2009 Japanese priority filing immediately precedes the March 2009 product literature and June 2009 Canon-mount release.

There is, however, a material conflict. Tamron's official production construction diagram shades the **second and fourth physical elements from the object side** as LD. Embodiment 1 assigns its two $\nu_d = 81.6$ glasses to the **third and fifth elements**, both positive members. The general architecture and hard specifications remain closely aligned, but the LD positions do not. The numerical example is therefore treated here as a patent-derived production proxy within the G005 design family, not as an exact production master.

Embodiment 1 remains the least-assumptive example for the data file. Its third group moves as a unit, whereas Embodiment 3 introduces the separately variable D(20) spacing associated with the optional L3A/L3B floating-subset arrangement. No public Tamron specification establishes that additional internal motion for Model G005.

## Optical Architecture

The prescription is a four-group, positive-negative-positive-negative inner-focusing macro lens:

- **G1, surfaces 1–9:** positive, fixed, 5 elements in 4 groups
- **G2, surfaces 10–14:** negative, moves imageward, 3 elements in 2 groups
- **STO, surface 15:** fixed aperture stop
- **G3, surfaces 16–22:** positive, moves objectward, 4 elements in 3 groups
- **G4, surfaces 23–25:** negative, fixed, 2 elements in 1 group

The complete prescription contains 14 elements in 10 groups. All refracting surfaces are spherical.

Independent paraxial group focal lengths at infinity are:

| Group | Surfaces | Focal length | Power |
|---|---:|---:|---|
| G1 | 1–9 | +40.131 mm | Positive |
| G2 | 10–14 | −24.352 mm | Negative |
| G3 | 16–22 | +31.592 mm | Positive |
| G4 | 23–25 | −84.172 mm | Negative |

G1 supplies the principal positive power and contains the patent example's two low-dispersion positive elements. G2 is the negative imageward-moving focus group. The fixed stop separates G2 from G3. G3 is a positive objectward-moving group that restores convergence after G2, while G4 is a weak fixed negative cemented group behind it.

The four variable air spaces conserve the lens's axial length to the precision of the patent table:

| Focus state | D(9) + D(14) + D(15) + D(22) |
|---|---:|
| Infinity | 33.9105 mm |
| 5:1 | 33.9106 mm |
| 1:1 | 33.9106 mm |

The 0.0001 mm difference is table rounding. With the computed infinity back focal distance included, the first-surface-to-image-plane track is 123.2288 mm and remains constant to the same rounding tolerance.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-element values in air. For members of cemented assemblies, they describe the isolated element shape and glass, not the member's exact in-situ power after the adjoining medium replaces air at the cemented interface.

### L1 — Biconvex Positive

$n_d = 1.80610$, $\nu_d = 33.3$. Glass: NBFD15, legacy HOYA match. Standalone $f = +150.168$ mm.

L1 has a weakly curved front surface and a more strongly curved rear surface. It is the weakest positive element in G1 and begins the gradual collection of the incoming bundle. Its high index permits the required positive power with comparatively mild curvature.

### L2 — Biconvex Positive

$n_d = 1.80610$, $\nu_d = 40.9$. Glass: S-LAH53 (OHARA). Standalone $f = +103.947$ mm.

L2 adds positive power ahead of the first cemented pair. Although its index is nominally the same as L1's, its higher Abbe number gives it a different chromatic contribution. The first three patent elements are positive, implementing the arrangement emphasized in ¶0014 and ¶0018 for restraining close-focus spherical-aberration variation.

### L3 + L4 — Cemented Positive/Negative Pair D1

**L3:** $n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA). Standalone $f = +58.696$ mm.  
**L4:** $n_d = 1.75520$, $\nu_d = 27.5$. Glass: S-TIH4 (OHARA). Standalone $f = -41.996$ mm.

L3 is biconvex and L4 is biconcave. Their large Abbe-number separation, $|\nu_{d1}-\nu_{d2}| = 54.1$, supplies strong primary chromatic balancing. Their refractive-index separation, $|n_{d2}-n_{d1}| = 0.25820$, also satisfies the patent's cemented-interface condition for spherical and chromatic correction (§0025–0026).

The cemented pair's net in-situ focal length is $-174.153$ mm. The pair is therefore weakly negative as an assembly despite L3's strong standalone positive power. Its role is not simply additive convergence; it redistributes power and color correction within G1.

### L5 — Biconvex Positive

$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA). Standalone $f = +64.788$ mm.

L5 is the final element of fixed group G1. Its rear radius is very weak, so most of its refraction occurs at the strongly convex front surface. Together with L3, it provides the two low-dispersion elements in the numerical example.

The S-FPL51 identification supports a low-dispersion interpretation, but it does not remove the production-match caveat: Tamron's construction diagram marks different physical slots as LD.

### L6 — Biconcave Negative

$n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA). Standalone $f = -25.569$ mm.

L6 is the strongest negative singlet in the prescription and the leading element of G2. G2 moves toward the image plane during focusing. L6's power dominates that group's negative focal length and changes the vergence presented to the fixed stop and positive G3.

With $\nu_d = 46.6$, S-LAH65V is a dense lanthanum flint by dispersion behavior, not a crown.

### L7 + L8 — Cemented Negative/Positive Pair D2

**L7:** $n_d = 1.51680$, $\nu_d = 64.2$. Glass: BSC7 (HOYA). Standalone $f = -36.400$ mm.  
**L8:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA). Standalone $f = +38.733$ mm.

L7 is biconcave. L8 is a positive meniscus convex toward the object. Their standalone powers nearly cancel, and the cemented assembly has a net in-situ focal length of $-600.927$ mm. D2 is consequently only weakly negative as a unit, but the large dispersion difference gives G2 an internal chromatic-correction degree of freedom.

BSC7 is the preferred identification because the patent's exact $1.51680/64.2$ pair matches the legacy HOYA specification; current OHARA S-BSL7 is centered near $n_d = 1.51633$. The $1.84666/23.8$ member is an exact S-TIH53 code match.

### L9 — Biconvex Positive

$n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA). Standalone $f = +59.524$ mm.

L9 is the first element after the stop and the leading member of G3. Its positive power begins reconverging the bundle leaving negative G2. This implements the arrangement described in ¶0032, where a positive leading element in G3 restrains the diameter growth of G3 and the trailing set.

### L10 + L11 — Cemented Positive/Negative Pair D3

**L10:** $n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66N (OHARA). Standalone $f = +34.086$ mm.  
**L11:** $n_d = 1.72825$, $\nu_d = 28.5$. Glass: S-TIH10 (OHARA). Standalone $f = -27.009$ mm.

L10 is biconvex and L11 is biconcave. The cemented pair has net in-situ focal length $-170.148$ mm. As with D1, the net assembly is weakly negative despite the strong isolated positive member. D3 primarily redistributes power and chromatic correction inside otherwise positive G3.

The current OHARA catalog designation for the $1.77250/49.6$ pair is S-LAH66N.

### L12 — Biconvex Positive

$n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA). Standalone $f = +43.597$ mm.

L12 is the strongest positive singlet within G3 and completes that group's net $+31.592$ mm power. Its motion with the rest of G3 changes both D(15), ahead of G3, and D(22), behind it.

### L13 + L14 — Cemented Negative/Positive Pair D4

**L13:** $n_d = 1.54072$, $\nu_d = 47.2$. Glass: S-TIL2 (OHARA). Standalone $f = -46.016$ mm.  
**L14:** $n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA). Standalone $f = +99.465$ mm.

L13 is biconcave and L14 is a positive meniscus convex toward the object. Because no air space separates them, D4 is both the cemented-pair focal length and the complete G4 focal length: $-84.172$ mm.

G4 remains fixed during focusing (§0028). Its negative surface-by-surface Petzval contribution partially offsets the positive contributions of G1 and G3, but the patent does not assign G4 a single exclusive aberration-correction function.

## Glass Identification

The prescription uses 11 distinct glass identities across 14 elements. Identifications are based on exact or near-exact manufacturer catalog codes formed from the patent's $n_d/\nu_d$ pairs. The patent itself does not name glass vendors.

| Elements | Patent $n_d$ | Patent $\nu_d$ | Catalog identification | Match note |
|---|---:|---:|---|---|
| L1 | 1.80610 | 33.3 | NBFD15 (HOYA, legacy) | Exact legacy pair |
| L2 | 1.80610 | 40.9 | S-LAH53 (OHARA) | Exact code 806409 |
| L3, L5 | 1.49700 | 81.6 | S-FPL51 (OHARA) | Exact code 497816 |
| L4 | 1.75520 | 27.5 | S-TIH4 (OHARA) | Exact code 755275 |
| L6 | 1.80400 | 46.6 | S-LAH65V (OHARA) | Exact code 804466 |
| L7 | 1.51680 | 64.2 | BSC7 (HOYA) | Exact legacy pair |
| L8, L14 | 1.84666 | 23.8 | S-TIH53 (OHARA) | Exact code 847238 |
| L9, L12 | 1.69680 | 55.5 | S-LAL14 (OHARA) | Exact code 697555 |
| L10 | 1.77250 | 49.6 | S-LAH66N (OHARA) | Exact code 773496 |
| L11 | 1.72825 | 28.5 | S-TIH10 (OHARA) | Exact code 728285 |
| L13 | 1.54072 | 47.2 | S-TIL2 (OHARA) | Exact code 541472 |

The data file includes catalog-derived C-, F-, and g-line indices for spectral tracing. Those line indices and the resulting $\Delta P_{g,F}$ values are catalog supplements; they were not published in the patent. Consequently, claims about anomalous partial dispersion are identified as catalog-derived rather than patent-measured.

S-FPL51 is the clearest low-dispersion material in Embodiment 1. Its catalog-derived $\Delta P_{g,F}$ is approximately $+0.03194$. This supports secondary-spectrum reduction in the patent example, but it does not prove that production Model G005 places S-FPL51 in the same physical slots.

## Focus Mechanism

Embodiment 1 uses two internal moving groups:

- **G1:** fixed
- **G2:** moves toward the image plane
- **Aperture stop:** fixed
- **G3:** moves toward the object
- **G4:** fixed

The patent's three focus states are:

| Quantity | Infinity | 5:1 | 1:1 |
|---|---:|---:|---:|
| System EFL | 61.5000 mm | 65.1885 mm | 52.3578 mm |
| Patent FNo. | 2.06 | 2.46 | 4.10 |
| D(9) | 1.5848 mm | 4.6948 mm | 17.4252 mm |
| D(14) | 17.2873 mm | 14.1774 mm | 1.4470 mm |
| D(15) | 13.2179 mm | 10.5905 mm | 1.5000 mm |
| D(22) | 1.8205 mm | 4.4479 mm | 13.5384 mm |

From infinity to 1:1:

- G2 moves 15.8404 mm imageward.
- G3 moves 11.7179 mm objectward.
- The stop and G4 remain fixed.
- The first-to-last-surface optical length remains constant.

The 5:1 state confirms that neither moving group follows a simple linear interpolation with magnification. The project data format for a prime supports only infinity and close-focus endpoints, so the `.data.ts` file stores the infinity and 1:1 spacings. The published 5:1 state remains documented here for audit purposes.

The patent's optional discussion of an L3A/L3B differential trajectory (§0021–0022) does not apply to Embodiment 1's tabulated prescription: there is no variable internal spacing within G3. That behavior is explicit in Embodiment 3 through D(20), not in Embodiment 1.

Tamron specifies 1:1 maximum magnification, 0.23 m minimum object distance, and 100 mm minimum working distance. The production lens maintains fixed exterior length through internal focusing. Tamron specifically documents a built-in AF motor for the Nikon F version; that statement should not be generalized to every mount variant.

## Chromatic Correction Strategy

The patent concentrates its explicit chromatic condition in cemented pair D1. The low-index, very-high-Abbe positive member L3 is paired with the high-index, low-Abbe negative member L4. Their differences are:

$$
|n_{d2}-n_{d1}| = |1.75520-1.49700| = 0.25820
$$

$$
|\nu_{d1}-\nu_{d2}| = |81.6-27.5| = 54.1
$$

The large Abbe separation provides primary axial-color balancing, while the large index discontinuity at the cemented surface contributes a strong refractive degree of freedom without adding an air-glass interface.

Additional positive/negative cemented pairs in G2, G3, and G4 distribute color correction through the moving and fixed rear sections. The four cemented assemblies have independently computed net focal lengths:

| Assembly | Elements | Net in-situ focal length |
|---|---|---:|
| D1 | L3 + L4 | −174.153 mm |
| D2 | L7 + L8 | −600.927 mm |
| D3 | L10 + L11 | −170.148 mm |
| D4 | L13 + L14 | −84.172 mm |

These values demonstrate why the individual standalone focal lengths must not be treated as additive thin lenses.

## Conditional Expressions

Embodiment 1 satisfies all four patent conditions.

### Formula (1)

$$
0.5 \leq \frac{f_1}{f} \leq 0.8
$$

Using independently traced values:

$$
\frac{f_1}{f} = \frac{40.1313}{61.4996} = 0.65255
$$

The patent correspondence table rounds this to 0.65.

### Formula (2)

$$
|N_{d2}-N_{d1}| \geq 0.2
$$

From the numerical prescription:

$$
|1.75520-1.49700| = 0.25820
$$

The patent's correspondence table prints 0.276. That value is arithmetically inconsistent with the same table's refractive indices and is treated as a patent typographical error. Both 0.25820 and 0.276 satisfy the condition, so the error does not change compliance.

### Formula (3)

$$
|\nu_{d1}-\nu_{d2}| \geq 35
$$

$$
|81.6-27.5| = 54.1
$$

This agrees with the patent correspondence table.

### Formula (4)

$$
-0.5 \leq \frac{f_2}{f} \leq -0.3
$$

$$
\frac{f_2}{f} = \frac{-24.3522}{61.4996} = -0.39597
$$

The patent correspondence table rounds this to −0.40.

## Verification Summary

All prescription-derived quantities were independently calculated from the numerical table.

| Quantity | Patent / manufacturer value | Independent result |
|---|---:|---:|
| EFL, infinity | 61.5000 mm | 61.499596 mm |
| EFL, 5:1 | 65.1885 mm | 65.188280 mm |
| EFL, 1:1 | 52.3578 mm | 52.357833 mm |
| Back focal distance, infinity | Not tabulated | 41.772359 mm |
| First surface to image plane | Not tabulated | 123.228759 mm |
| G1 focal length | Implied by $f_1/f=0.65$ | +40.131265 mm |
| G2 focal length | Implied by $f_2/f=-0.40$ | −24.352194 mm |
| G3 focal length | Not tabulated | +31.591637 mm |
| G4 focal length | Not tabulated | −84.171726 mm |
| 1:1 sensor-plane object distance | Tamron 0.23 m | 230.068282 mm |
| 1:1 lateral magnification | 1:1 | −0.996790 |
| Petzval sum | Not tabulated | +0.002233072 mm⁻¹ |
| Petzval radius, $R_P=-1/P$ convention | Not tabulated | −447.813546 mm |

The Petzval result uses the surface-by-surface expression

$$
P = \sum_i \frac{\phi_i}{n_i n'_i},
\qquad
\phi_i = \frac{n'_i-n_i}{R_i},
$$

not a thin-element approximation.

The inferred surface semi-diameters in the data file are not patent values. They were guided by the official construction drawing and paraxial ray envelopes, then constrained by the 55 mm filter envelope, element edge thickness, rim slope, and cross-gap surface clearance. Because the patent gives no clear apertures and the numerical example is not demonstrably the production master, the semi-diameters should be interpreted as renderer-safe visualization estimates rather than manufacturing dimensions.

## Design Heritage and Context

The patent addresses the principal difficulty of a fast inner-focusing macro lens: close-focus motion changes the convergence presented to the first and moving groups, producing larger spherical-aberration variation than a front-focusing design (§0002–0018). Its solution is not an asphere-led architecture. Instead, it distributes positive power across at least four elements in G1, includes a negative correcting member in that group, uses a high-index/high-Abbe-contrast cemented pair, and floats negative G2 against positive G3.

For Embodiment 1, this produces a 61.5 mm, f/2.06, 1:1 design using only spherical surfaces. The absence of aspheres is a property of this numerical example. It should not be expanded into an unsupported claim about every possible production revision within the G005 family.

## Sources

- Shimizu, Kaori; Yamanaka, Hisayuki. **US 2011/0286116 A1, “Macro Lens.”** Published November 24, 2011. Embodiment 1, ¶0046.
- Tamron Co., Ltd. **SP AF 60mm F/2 Di II LD [IF] MACRO 1:1 (Model G005), Specifications.** https://www.tamron.com/global/consumer/lenses/g005/spec.html
- Tamron Co., Ltd. **SP AF 60mm F/2 Di II LD [IF] MACRO 1:1, Product Overview.** https://www.tamron.com/global/consumer/lenses/g005/
- Tamron Co., Ltd. **G005 Optical Construction Diagram.** https://www.tamron.com/product/pc_file/file/g005_lens-construction_en.svg
- OHARA Inc. **Optical Glass Lineup and individual glass data sheets.** https://www.ohara-inc.co.jp/product/01001/
- HOYA Corporation. **Optical Glass Catalog / nd–νd Map and legacy catalog data.** https://www.hoya-opticalworld.com/
