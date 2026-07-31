## Patent Reference and Design Identification

**Patent:** JP 2026-121744 A
**Application number:** JP 2025-004694
**Filed:** January 14, 2025
**Published:** July 27, 2026
**Inventor:** 三島 豊
**Applicant:** Cosina Co., Ltd.
**Title:** Optical Lens System (光学レンズ系)
**Embodiment analyzed:** Example 1 / First Embodiment

The prescription represents the first embodiment of Cosina's compact interchangeable-lens optical system. The patent
publishes a design focal length of 35.66 mm, an f-number of 3.61, and a 30.86° half field, corresponding to a 61.72°
full field (¶0021). The final data model preserves the source scale and computes a Gaussian focal length of
35.663874742 mm from the transcribed surfaces; no focal-length scaling has been applied.

The selected embodiment is correlated with the production **VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical VM** by
several convergent features:

1. Both have six elements in four air-separated groups.
2. The patent's 35.66 mm, f/3.61 design closely matches the marketed 35 mm, f/3.5 specification.
3. The patent's 61.72° full field closely matches Cosina's published 61.6° angle of view.
4. Both use a double-sided aspherical final element.
5. Cosina describes three anomalous-partial-dispersion glass elements, while the patent publishes element-level
   $\Delta P_{gF}$ values and imposes partial-dispersion conditions on the rear optical system.
6. The production lens is a full-frame VM-mount lens, consistent with the patent's stated interchangeable-camera-lens
   application and its 35 mm-class image field.

This is a production correlation rather than a statement that Cosina has publicly identified the patent as the product's
prescription. The production lens was released on March 27, 2025. Its marketed 35 mm focal length, f/3.5 aperture,
61.6° angle of view, 0.7 m minimum focus, and 14 mm mechanical length remain separate from the patent model's exact
optical quantities and reference planes.

## Optical Architecture

The lens is a compact, stop-centered wide-angle prime rather than a retrofocus or telephoto construction. Its four
physical groups form the sequence

$$
\text{positive cemented doublet} \; | \; \mathrm{STO} \; | \;
\text{negative cemented doublet} \; | \; \text{positive singlet} \; | \; \text{negative aspherical meniscus}.
$$

The patent describes the same system hierarchically as positive group G1, the aperture stop, and group G2; G2 is divided
into negative subgroup G2a and positive subgroup G2b (¶0022–¶0026). G2b contains the positive L3 singlet and negative
L4 meniscus, but their combined paraxial power remains positive.

Independent thick-lens calculation gives the following net focal lengths:

| Optical unit | Computed focal length |
|---|---:|
| Cemented G1 (L1f + L1r) | +40.472275965 mm |
| Cemented G2a (L2f + L2r) | −54.992797118 mm |
| G2b (L3 + L4 in situ) | +43.777889632 mm |
| Complete lens | +35.663874742 mm |

These are system or subgroup powers, not sums of the standalone element focal lengths. The positive G1 doublet collects
the entering bundle before the stop. The negative G2a doublet then changes the ray slopes and chromatic balance ahead of
the strong positive L3. The final negative meniscus reduces the net power of G2b while contributing substantial
field-dependent surface shaping through its two aspheres. The patent specifically attributes the rear aspherical negative
lens to correction of coma and astigmatism in the compact wide-angle system (¶0026).

The fixed S1-to-S11 vertex track is 24.92 mm. With the 15.11 mm infinity image gap, the modeled optical total is
40.03 mm. This optical length is not comparable directly with Cosina's 14 mm mechanical length from the mount surface,
because the two quantities use different endpoints and include different portions of the product.

The stop location is published between G1 and G2. Its clear semi-diameter is not published; the data model uses an
inferred 3.858166062 mm stop semi-diameter, solved from the computed focal length and the modeled f/3.61 entrance pupil.
Most lens-surface semi-diameters are inferred rather than patent-tabulated. Surface 10A is the exception: the patent's
$Sag_{2b}=3.29$ mm value and the corrected asphere polynomial give a physical pre-reversal root of 8.296654461 mm, stored
as 8.30 mm at source-appropriate precision. Surface 11A uses an inferred 9.50 mm clear semi-diameter to contain the
published full-field chief ray. The remaining values were constrained by the optical section, ray envelopes, edge
thickness, actual aspherical rim slope, and inter-element clearance.

No sensor cover glass, optical filter, dummy plane, flare cutter, or mechanical part is included. Cosina supplies a thin
protective filter with the production lens, but it is an external accessory and is not part of Example 1's optical
prescription.

## Element-by-Element Analysis

### L1f — Biconvex Positive Front Member

**nd = 1.90043, νd = 37.37. Glass: TAFD37A-class (HOYA code 900374; vendor not specified by patent). Standalone f =
+14.482304821 mm. $\Delta P_{gF}=-0.004$.**

L1f carries strong positive standalone power and forms the front member of cemented doublet L1. Its high refractive index
allows the front group to obtain substantial power in a short axial space. The patent requires at least one positive
lens in G1 or G2 to have $n_d>1.88$ and identifies high index as useful in balancing spherical aberration, coma, and the
Petzval sum (¶0012, ¶0039). L1f satisfies that condition with $n_d=1.90043$.

Its standalone focal length describes the isolated two-surface element in its actual incident and emergent media. Once
cemented to L1r, the doublet's net focal length is a much weaker +40.472275965 mm; the cemented result, rather than the
standalone +14.48 mm value, governs G1's system behavior.

### L1r — Biconcave Negative Rear Member of L1

**nd = 1.80518, νd = 25.45. Glass: S-TIH6-class (OHARA code 805254; patent νd = 25.45). Standalone f =
−19.949512755 mm. $\Delta P_{gF}=+0.013$.**

L1r is cemented directly to L1f and opposes part of its strong positive power. The large dispersion contrast between
L1f and L1r, together with L1r's positive partial-dispersion deviation, gives the front doublet a means of controlling
longitudinal color without introducing another air-spaced group. The exact distribution of higher-order chromatic
correction is an inference from the prescription; the patent publishes the glass parameters but does not assign a
separate aberration contribution to each front member.

The S-TIH6-class identification is a catalog equivalence, not a patent-specified vendor. OHARA's current catalog gives
the same index and a νd value of 25.42, 0.03 below the patent's rounded 25.45.

### L2f — Biconcave Negative Front Member of G2a

**nd = 1.61340, νd = 44.27. Glass: S-NBM51-class (OHARA code 613443; vendor not specified by patent). Standalone f =
−26.611184710 mm. $\Delta P_{gF}=-0.005$.**

L2f begins the negative G2a cemented subgroup immediately behind the stop. It supplies most of the pair's negative
standalone power. The patent makes this element's material properties explicit conditions: $n_d<1.62$ and
$\Delta P_{gF}\leq-0.005$ (claim 5; ¶0037). The Example 1 values meet both boundaries.

The six-digit pair 613443 resolves exactly to the OHARA S-NBM51 catalog class in $n_d$ and νd. Because the patent does
not name a vendor, the data retains a class designation rather than asserting that the production element is made from
OHARA S-NBM51.

### L2r — Biconvex Positive Rear Member of G2a

**nd = 1.87070, νd = 40.73. Glass: TAFD32-class (HOYA code 871407; vendor not specified by patent). Standalone f =
+42.875834998 mm. $\Delta P_{gF}=-0.007$.**

L2r is cemented to L2f. Its positive power moderates the negative front member, leaving the complete G2a doublet with a
computed focal length of −54.992797118 mm. The cemented pair therefore remains negative even though its rear member is
positive.

The high index keeps the positive correction compact, while its negative partial-dispersion deviation complements the
strong positive deviation of L3 farther to the rear. That complement is a prescription-level chromatic strategy; it is
not evidence by itself that the complete lens is apochromatic.

### L3 — Biconvex Positive Singlet

**nd = 1.55032, νd = 75.50. Glass: FCD705-class (HOYA code 550755; vendor not specified by patent). Standalone f =
+29.059720752 mm. $\Delta P_{gF}=+0.028$.**

L3 is the strongest positive element in G2b and the shortest-focal-length positive lens used in the patent's subgroup
power condition. Its low dispersion and comparatively large positive $\Delta P_{gF}$ distinguish it from the dense,
lower-Abbe glasses used in the cemented doublets.

The patent requires a G2b positive lens to satisfy $\Delta P_{gF}>+0.015$ (claim 6; ¶0038). L3 exceeds that threshold at
+0.028. Its computed +29.059720752 mm standalone focal length, combined with G2a's −54.992797118 mm focal length, gives
$f_{2a}/f_{2bp}=-1.892406248$.

### L4 — Double-Sided Aspherical Negative Meniscus

**nd = 1.58313, νd = 59.46. Glass: M-BACD12-class (HOYA code 583595; vendor not specified by patent). Standalone f =
−65.995539517 mm. $\Delta P_{gF}=-0.001$.**

L4 is the final element and is a negative meniscus concave toward the object. Both surfaces, 10A and 11A, are aspherical.
The element's standalone negative power reduces L3's positive power, but the combined G2b subgroup remains positive at
+43.777889632 mm.

Its position near the image side gives its surface departures strong leverage over oblique bundles. The patent identifies
this rear aspherical negative meniscus as the principal structural measure for correcting coma and astigmatism while
retaining compactness and a wide field (¶0006, ¶0009, ¶0026). The data does not infer a manufacturing process; the
M-BACD12 label is a catalog class, not evidence that the element is a particular molded-glass product.

## Glass Identification and Selection

The patent publishes $n_d$, νd, and $\Delta P_{gF}$ for each element but does not name glass manufacturers. The stored
glass names are therefore catalog classes or equivalents. HOYA's cross-reference table notes that matching six-digit
codes do not guarantee identical glass composition across vendors, so these labels should not be read as patent-specified
materials.

| Element | Stored class | nd | νd | ΔPgF | Catalog status |
|---|---|---:|---:|---:|---|
| L1f | TAFD37A-class | 1.90043 | 37.37 | −0.004 | Exact HOYA code pair 900374 |
| L1r | S-TIH6-class | 1.80518 | 25.45 | +0.013 | Exact nd; catalog νd = 25.42 |
| L2f | S-NBM51-class | 1.61340 | 44.27 | −0.005 | Exact OHARA code pair 613443 |
| L2r | TAFD32-class | 1.87070 | 40.73 | −0.007 | Exact HOYA code pair 871407 |
| L3 | FCD705-class | 1.55032 | 75.50 | +0.028 | Exact HOYA code pair 550755 |
| L4 | M-BACD12-class | 1.58313 | 59.46 | −0.001 | Exact HOYA code pair 583595 |

The palette separates two dense positive/negative cemented pairs from a low-dispersion positive singlet and a moderate-
index rear meniscus. L3 supplies the highest νd and largest positive $\Delta P_{gF}$, while L1r and L2r carry substantial
opposite or complementary deviations. Cosina markets three anomalous-partial-dispersion glass elements, but it does not
map that count to patent element labels. The analysis therefore preserves all six published $\Delta P_{gF}$ values and
does not designate a particular trio as manufacturer-confirmed.

No APO designation is inferred. The published partial-dispersion data supports discussion of deliberate secondary-
spectrum control, but neither the patent nor the production source characterizes the lens as apochromatic.

## Focus Mechanism

The patent specifies whole-lens unit focusing for near objects (¶0019 and claim 8). Example 1 publishes two axial states:

| State | Object distance D0 | Rear image gap D11 |
|---|---:|---:|
| Infinity | Infinity | 15.11 mm |
| Patent close state | 450.00 mm | 18.19 mm |

Because the complete optical assembly translates as a unit, the LensVisualizer model keeps the internal prescription
fixed and varies only the final air gap from 15.11 to 18.19 mm. The resulting modeled travel is 3.08 mm. This is a
**PUBLISHED** focus state, not a constrained reconstruction.

The production lens is specified for a 0.7 m minimum focus and rangefinder coupling from infinity to 0.7 m. The patent's
0.45 m row is retained as an optical-source endpoint; it is not presented as the production rangefinder-coupled limit.
The source's rounded 450 mm / 18.19 mm pair leaves a 0.161142604 mm first-order conjugate-matrix residual. The values are
nevertheless transcribed rather than adjusted, because the patent state is the numerical authority.

## Aspherical Surfaces

L4 carries aspheres on surfaces 10A and 11A. The patent uses the standard rotationally symmetric conic-polynomial form

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}
+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
\qquad c=\frac{1}{R}.
$$

Both surfaces have $K=0$, so the base conic is spherical and no conic-convention conversion is required. The
coefficients are unscaled source values in millimetre-based units:

| Coefficient | 10A | 11A |
|---|---:|---:|
| R | −33.247 mm | −250.000 mm |
| K | 0 | 0 |
| A4 | -5.3761e-4 | -4.1065e-4 |
| A6 | +1.7189e-6 | +2.4139e-6 |
| A8 | -5.7399e-8 | -2.4264e-8 |
| A10 | +7.9869e-10 | +2.4208e-10 |
| A12 | -1.8531e-12 | -7.3037e-13 |

The final model uses 8.30 mm on 10A and 9.50 mm on 11A. At 8.30 mm, 10A has a sag of −3.293748508 mm,
matching the patent's printed $Sag_{2b}=3.29$ mm within source precision. It departs from its base sphere by
−2.241049386 mm and reaches an actual rim-slope angle of 48.253027°. Surface 11A departs from its base sphere by
−2.125295350 mm at 9.50 mm and has a 33.185646° rim angle. These departures are quoted only at the stored,
geometry-validated semi-diameters.

The corrected 10A polynomial has two roots for an absolute sag of 3.29 mm. The 8.296654461 mm root occurs before the
profile's slope reversal and remains below the validator's rim-slope limit. The second root, 11.317748444 mm, occurs
after the reversal and has a 72.487370° rim angle, so it is rejected as a physical clear-aperture interpretation.

## Chromatic Correction Strategy

The design uses cemented positive/negative pairs on both sides of the stop and a low-dispersion positive singlet in the
rear positive subgroup. The front L1 doublet combines a high-index positive member with a strongly dispersive negative
member. G2a combines a negative S-NBM51-class member with a high-index positive TAFD32-class member, but remains net
negative. L3 then supplies positive power with νd = 75.50 and $\Delta P_{gF}=+0.028$.

The patent's conditions deliberately constrain both the negative G2a material and the positive G2b material. In first-
order terms, the sign contrast between L2f/L2r and L3 partial-dispersion deviations provides degrees of freedom beyond a
simple Abbe-number achromat. The data supports that limited statement; it does not establish apochromatic correction or
quantify residual secondary spectrum at the image plane.

## Conditional Expressions

The patent defines nine principal conditions. The following table distinguishes the patent's own tabulated values from
the sequential prescription where the source combines incompatible states or reference planes.

| Condition | Evaluated value | Result and interpretation |
|---|---:|---|
| (1) $BF/TL_o>0.8$ | 18.19 / 21.84 = 0.832875458 | Passes using the patent table's mixed close-state BF and tabulated $TL_o$. The sequential close ratio is 18.19 / 24.92 = 0.729935795 and does not pass. |
| (2) $TL/f\leq1.15$ | 40.03 / 35.66 = 1.122546270 | Passes. |
| (3) $\omega>30.5^\circ$ | 30.86° | Passes. |
| (4) $f_{2a}/f_{2bp}\geq-2.4$ | −54.992797118 / 29.059720752 = −1.892406248 | Passes from the final arrays. |
| (5) $Sag_{2b}/TL\geq0.08$ | 3.29 / 40.03 = 0.082188359 | Passes. |
| (6) $n_{d,2am}<1.62$ | 1.61340 | Passes. |
| (7) $\Delta P_{gF,2am}\leq-0.005$ | −0.005 | Passes at equality. |
| (8) $\Delta P_{gF,2bp}>+0.015$ | +0.028 | Passes. |
| (9) $n_{d,h}>1.88$ | 1.90043 | Passes through L1f. |

Condition (1) contains a source-level reference-state contradiction: Table 1 combines the close-state BF with a
$TL_o$ value obtained by subtracting it from the infinity-state total length. Condition (5) passes once the Table 1
value is read correctly as $Sag_{2b}=3.29$ mm. The sequential model preserves the printed surface table and does not
alter radii or spacings to force a condition.

## Verification Summary

Independent reduced-angle tracing and an ABCD calculation agree on the final prescription's first-order properties:

| Quantity | Computed result |
|---|---:|
| Gaussian focal length | 35.663874742 mm |
| Back focal length from 11A | 15.121084285 mm |
| Modeled f-number | 3.610000000 |
| Entrance-pupil semi-diameter | 4.939594840 mm |
| Physical stop semi-diameter | 3.858166062 mm |
| S1-to-S11 vertex track | 24.920000000 mm |
| Infinity optical total | 40.030000000 mm |
| $TL/EFL$ | 1.122424310 |
| $BFD/EFL$ | 0.423678025 |
| Petzval sum $\sum \phi/(n n')$ | +0.005270846491 mm⁻¹ |

Under the project definitions, the lens is not telephoto because $TL/EFL>1$, and it is not retrofocus because
$BFD/EFL<1$. The computed focal length differs from the patent's rounded 35.66 mm by 0.003875 mm, and the computed BFL
differs from the printed infinity D11 by 0.011084 mm.

The validated geometry has a minimum element edge thickness of 1.398579426 mm and a maximum actual rim angle of
48.253027° at 10A. Exact ray-envelope checks were performed on axis and at ±18.516° at infinity, on axis at the
published 0.45 m state, and for the chief ray at the published ±30.86° half field. The 28 tested rays remain within the
authored semi-diameters. This is not a claim of complete full-field aberration performance.

## Sources

- Cosina Co., Ltd., **JP 2026-121744 A**, “Optical Lens System,” published July 27, 2026, Example 1 / First Embodiment.
- Cosina, [COLOR-SKOPAR 35mm F3.5 Aspherical — official product page](https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-35mm-f3-5-aspherical/).
- Cosina, [COLOR-SKOPAR 35mm F3.5 Aspherical VM release-date notice](https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCcolor-skopar-35mm-f3-5-aspherical-vm-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/).
- HOYA Optics, [Glass Cross Reference Index](https://www.hoyaoptics.eu/glass-cross-reference-index).
- OHARA Inc., [Glass Type catalog](https://www.ohara-inc.co.jp/en/product/01000/).
