## Patent Reference and Design Identification

**Patent:** US 4,773,745\
**Application Number:** US 07/092,259\
**Priority:** September 2, 1986 (DE 36 29 773)\
**Filed:** September 2, 1987\
**Granted:** September 27, 1988\
**Inventor:** Hiltrud Schitthof\
**Assignee:** Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG\
**Title:** Compact Wide-Angle Objective\
**Embodiment analyzed:** First numerical example, reproduced in claim 3 and associated with Fig. 2

US 4,773,745 discloses an all-spherical wide-angle objective containing eight glass lenses arranged in six air-spaced groups. The first numerical example is normalized to a stated focal length of 100 units. It is the closest published prescription for the Schneider-Kreuznach Super-Symmar HM 120 mm f/5.6, but the numerical residuals show that it should be treated as a design-family embodiment rather than asserted to be the unchanged factory prescription.

The identification rests on convergent evidence:

1. The patent and Schneider's technical data sheet both specify eight lenses in six groups.
2. Both specify a maximum relative aperture of 1:5.6 and a compact large-format wide-angle application.
3. The patent drawing and Schneider's production section show the same distinctive sequence: front negative meniscus; positive cemented doublet; small pre-diaphragm meniscus; very thick positive cemented doublet; rear positive meniscus; final biconcave negative lens.
4. The patent is assigned to Schneider-Kreuznach.
5. Uniformly scaling the independently traced first example to Schneider's published effective focal length of 121.6 mm places it in the production 120 mm focal-length class.
6. Schneider's published 73° field at full aperture corresponds to a 179.96 mm rectilinear image circle at 121.6 mm EFL, matching its stated 180 mm. Its 82° field at f/22 corresponds to 211.41 mm, matching its stated 211 mm to normal catalog precision.

The remaining differences prevent a stronger prescription-level identification. At the scale required for 121.6 mm EFL, the patent model has a paraxial back focal distance of 99.619 mm, whereas Schneider publishes 102.3 mm. The model's principal-plane separation is 19.928 mm, whereas Schneider publishes $HH' = 17.9$ mm. The patent gives 70° at f/5.6 and 80° at f/11; Schneider gives 73° wide open and 82° at f/22. These are consistent with a production optimization or a related unpublished embodiment, not simple rounding alone.

The data file therefore preserves every relative radius and axial distance from the first patent example and applies one uniform scale factor:

$$
S = \frac{121.6}{100.02655975} = 1.21567711919.
$$

The denominator is the independently traced EFL of the rounded patent table, not the patent's nominal statement of 100 units. No individual curvature or spacing is altered to force agreement with the production BFD or principal-plane separation.

## Optical Architecture

The prescription is an asymmetric wide-angle objective with eight glass lenses in six groups. Its group-power sequence is:

**negative – positive – weak positive – strong positive – positive – negative**.

The first and last groups are low-index negative lenses. The six interior lenses use substantially higher refractive indices. The patent describes this as a geometrically asymmetric system with a broadly symmetric refractive-index sequence. It is not a symmetric Plasmat merely because the production name contains “Symmar.”

The principal architectural feature is L4, the fourth group: a very thick positive cemented doublet adjacent to the diaphragm region. At production scale its combined center thickness is 25.893 mm and its standalone cemented-group focal length in air is +53.225 mm. It supplies the largest concentration of converging power while permitting short air gaps elsewhere. The patent associates this arrangement with reduced diameter and weight and with correction of field curvature, coma, chromatic error, and chromatic coma at shorter object distances.

The scaled glass-to-glass vertex track is 75.973 mm, or 0.625 times the 121.6 mm EFL. Its infinity BFD is 99.619 mm, giving BFD/EFL = 0.819. Schneider's production values give 102.3/121.6 = 0.841. Neither exceeds unity; the design is therefore not retrofocus.

The patent does not give an aperture-stop coordinate and Fig. 1 does not draw a labeled diaphragm surface. It establishes only that the diaphragm region is in the $d_7$ air space between L3 and L4. Schneider's production section likewise places the iris between the front and rear cells but does not provide an optical vertex coordinate. The data file therefore splits $d_7$ equally as a neutral reconstruction. The midpoint is a modeling choice, not a patent dimension. The stored stop semi-diameter, 10.29 mm, is selected so the reconstructed entrance pupil corresponds to f/5.6 at 121.6 mm EFL.

## Element-by-Element Analysis

The focal lengths below are production-scaled standalone thick-lens focal lengths in air. For components of cemented groups, these isolated values describe the component's curvature and glass contribution; they are not identical to its in-situ behavior when one surface is bounded by another glass.

### L1 — Negative Meniscus, Convex to Object

**nd = 1.46450, νd = 65.77. Glass: FK3 class (SCHOTT optical-position match). f = −114.269 mm.**

L1 is the front low-index negative meniscus. Both radii are positive in the patent sign convention and $r_1 > r_2$, so the object-side face is convex and the image-side surface has the stronger curvature. Its negative power expands the entering bundle before the inner positive groups.

The patent assigns the front negative meniscus to correction of field curvature and illumination and treats the outer-negative/index sequence as important for coma, distortion, transverse color, and Petzval control. SCHOTT FK3 reproduces the patent's $n_d$ and $ν_d$ exactly and is therefore the strongest public optical-position match. The patent does not name the glass vendor or melt, so “FK3 class” is more precise than asserting that production necessarily used catalog FK3.

The data file includes SCHOTT FK3 line-index and partial-dispersion data as an explicitly inferred catalog-equivalent model: $n_C = 1.46232$, $n_F = 1.46939$, $n_g = 1.47315$, and $\Delta P_{g,F} = -0.0003$. These values are not printed in the patent and do not by themselves establish apochromatic correction for the complete lens.

### L2 — Positive Cemented Doublet

**L2a: nd = 1.75500, νd = 52.30. Glass: N-LAK33B class (SCHOTT optical-position match). f = +68.774 mm.**\
**L2b: nd = 1.62540, νd = 35.56. Glass: 625/356 flint; CDGM H-F6 is the closest public match. f = −91.904 mm.**

L2a and L2b form the front positive cemented group. Their standalone cemented-group focal length in air is +177.536 mm. L2a is a high-index positive crown meniscus. L2b is a lower-Abbe flint meniscus that is negative when isolated in air. The group therefore has a positive-crown/negative-flint power split for primary chromatic correction while retaining net positive power.

The patent's prose calls both cemented members positive refracting lenses. That statement conflicts with the numerical prescription when L2b is evaluated as a standalone thick lens in air. The numerical table controls the transcription. In situ, L2b is bounded by L2a glass at its front interface and air at its rear, so its contribution should not be reduced to the isolated-air focal length alone.

N-LAK33B reproduces 1.75500/52.30 exactly. For L2b, CDGM H-F6 is 1.62495/35.59, a residual of $\Delta n_d=-0.00045$ and $\Delta ν_d=+0.03$. The patent does not identify the manufacturer, so the data file retains the generic 625/356 optical position rather than assigning CDGM as the historical supplier.

### L3 — Weak Positive Meniscus, Convex to Object

**nd = 1.77250, νd = 49.60. Glass: N-LAF34 class (SCHOTT rounded match). f = +495.615 mm.**

L3 is a thin, weak positive meniscus immediately before the diaphragm region. Its isolated focal length is more than four times the system EFL, so it is not a principal power element. Its location makes it useful for conditioning oblique bundles and balancing aberrations before the thick central group.

SCHOTT N-LAF34 is 1.77250/49.62, differing only by $\Delta ν_d=+0.02$ from the rounded patent value. Because $ν_d<50$, it lies on the flint side of the traditional crown/flint boundary despite its moderate dispersion.

### L4 — Thick Positive Cemented Doublet

**L4a: nd = 1.62040, νd = 60.33. Glass: N-SK16 class (SCHOTT rounded match). f = +35.949 mm.**\
**L4b: nd = 1.66680, νd = 33.01. Glass: 667/331 dense flint; CDGM H-ZF39 is the closest public match. f = −118.589 mm.**

L4 is the dominant positive group. Its standalone cemented-group focal length in air is +53.225 mm, and its 25.893 mm combined center thickness is the largest in the system. L4a is a strong biconvex crown lens. L4b is a negative, high-dispersion meniscus cemented to its rear surface.

The pair provides a large positive contribution while opposing longitudinal color within the same group. The patent treats the concentration of thickness near the diaphragm as a defining feature: only one inner group must be exceptionally thick, permitting short outer spaces and a compact assembly.

SCHOTT N-SK16 is 1.62041/60.32, giving $\Delta n_d=+0.00001$ and $\Delta ν_d=-0.01$. For L4b, CDGM H-ZF39 is 1.66680/33.05, an exact $n_d$ match and $\Delta ν_d=+0.04$; it is closer than SCHOTT N-SF19 at 1.66679/33.12. The generic 667/331 designation therefore remains preferable to asserting a vendor.

As with L2b, the patent's general description of both L4 members as positive does not agree with an isolated-air calculation for L4b. The cemented group is strongly positive; its second component is not.

### L5 — Positive Meniscus, Concave to Object

**nd = 1.62040, νd = 60.33. Glass: N-SK16 class (SCHOTT rounded match). f = +137.927 mm.**

L5 is a positive meniscus only 0.411 mm behind L4 at production scale. Both radii are negative; the rear surface is more strongly curved, so the element retains positive power while presenting a concave face toward the object.

Its position redistributes the steep convergence leaving L4 before the final negative element. The repeated 1.62040/60.33 optical position continues the high-index interior sequence. It does not prove that the production lens used the same named catalog glass or melt in both locations.

### L6 — Biconcave Negative

**nd = 1.47870, νd = 58.70. Glass: Unmatched 479/587 low-index crown; vendor unspecified. f = −59.138 mm.**

L6 is the rear low-index negative lens. It is biconcave, with $r_{13}<0$ and $r_{14}>0$. The image-side radius has the larger magnitude: $|r_{14}|=131.465$ patent units versus $|r_{13}|=28.475$.

The patent associates this relation with coma correction across aperture, color correction, and color-coma correction while keeping the preceding air space short. Together with L1, L6 limits the Petzval contribution of the outer negative lenses relative to higher-index alternatives.

No sufficiently close exact match was found in the checked SCHOTT, CDGM, HIKARI, or OHARA public catalog material. The data file therefore retains the 479/587 optical code and marks the glass as unresolved.

## Glass Identification and Selection

The patent publishes $n_d$ and $ν_d$ only. It does not name manufacturers or catalog designations. The table therefore reports optical-position matches, not proven production melts.

| Element | Patent nd | Patent νd | Best public catalog comparison      | Residual / status                         | Optical class         |
| ------- | --------: | --------: | ----------------------------------- | ----------------------------------------- | --------------------- |
| L1      |   1.46450 |     65.77 | SCHOTT FK3                          | Exact optical-position match              | Fluorophosphate crown |
| L2a     |   1.75500 |     52.30 | SCHOTT N-LAK33B                     | Exact optical-position match              | Lanthanum crown       |
| L2b     |   1.62540 |     35.56 | CDGM H-F6, 1.62495/35.59            | $\Delta n_d=-0.00045$, $\Delta ν_d=+0.03$ | Flint                 |
| L3      |   1.77250 |     49.60 | SCHOTT N-LAF34, 1.77250/49.62       | $\Delta ν_d=+0.02$                        | Lanthanum flint       |
| L4a     |   1.62040 |     60.33 | SCHOTT N-SK16, 1.62041/60.32        | $\Delta n_d=+0.00001$, $\Delta ν_d=-0.01$ | Dense crown           |
| L4b     |   1.66680 |     33.01 | CDGM H-ZF39, 1.66680/33.05          | $\Delta ν_d=+0.04$                        | Dense flint           |
| L5      |   1.62040 |     60.33 | SCHOTT N-SK16, 1.62041/60.32        | Same optical position as L4a              | Dense crown           |
| L6      |   1.47870 |     58.70 | No sufficiently close checked match | Unresolved 479/587 position               | Low-index crown       |

The glass strategy follows the patent's explicit index conditions. L1 and L6 both satisfy $n_d<1.55$, while the six interior lenses average $n_d=1.67675$. Each cemented doublet combines a crown-like positive component with a lower-Abbe negative component. This supplies primary achromatization in both halves while the low-index outer negatives moderate the Petzval sum.

Schneider describes the production Super-Symmar HM as apochromatically corrected. That is a manufacturer performance claim. The patent's $n_d/ν_d$ table alone cannot prove three-wavelength correction or secondary-spectrum suppression; relative partial dispersion or complete line-index data are needed. Because several glasses remain class matches or unresolved, the production lens's full spectral behavior cannot be reconstructed defensibly from this patent alone.

## Focus Mechanism

The Super-Symmar HM is a shutter-mounted large-format lens with no internal focus group. Focusing is performed by translating the complete optical assembly relative to the film plane with the camera bellows. All internal thicknesses and air spaces remain fixed; only the image-side conjugate distance changes.

Schneider does not publish a fixed minimum focusing distance because the limit depends on the camera's bellows and mechanical configuration. The data file uses 1.0 m as a viewer endpoint, not as a product specification. The paraxial object distance is measured from the first optical vertex.

| State                | Back focal distance in the scaled patent model | Paraxial magnification | Bellows extension from infinity |
| -------------------- | ---------------------------------------------: | ---------------------: | ------------------------------: |
| Infinity             |                                      99.619 mm |                      0 |                            0 mm |
| 1.0 m model endpoint |                                     115.824 mm |                −0.1333 |                       16.205 mm |

Schneider's published infinity BFD is 102.3 mm. The data file retains 99.619 mm because that is the conjugate at which the scaled patent prescription actually focuses at infinity. Substituting 102.3 mm without changing the prescription would displace the image plane from paraxial focus.

## Conditional Expressions

The first example satisfies all six conditions stated in the patent. Conditions 1–4 are scale-independent; conditions 5–6 are shown in normalized patent units.

| No. | Patent condition                                |    Computed value | Result    |
| --: | ----------------------------------------------- | ----------------: | --------- |
|   1 | $r_1>r_2$                                       |   $39.152>20.221$ | Satisfied |
|   2 | $r_{13}<r_{14}$                                 | $-28.475<131.465$ | Satisfied |
|   3 | $n_1<1.55$ and $n_8<1.55$                       | 1.4645 and 1.4787 | Satisfied |
|   4 | $(n_2+n_3+n_4+n_5+n_6+n_7)/6>1.62$              |           1.67675 | Satisfied |
|   5 | $(d_2+d_{12})<(d_8+d_9)/2$                      |   $6.093<10.6495$ | Satisfied |
|   6 | $d_7+d_8+d_9+d_{10}+d_{11}+d_{12}+d_{13}>0.48D$ | $35.890>29.99712$ | Satisfied |

Condition 2 is written as a signed inequality. The accompanying prose also describes the image-side radius as the larger radius; the example satisfies that magnitude statement as well because $|r_{14}|=131.465>|r_{13}|=28.475$.

The patent assigns these conditions to three linked goals: low-index outer negatives for Petzval and color balancing; compact outer air spaces relative to the thick central group; and broadly similar axial allocation to the front and rear portions of the objective.

## Patent Text and Prescription Priority

Several passages in the English patent contain wording or index inconsistencies. They do not alter the numerical transcription:

- The summary states that L1 is convex toward the image side, while the detailed discussion states that it is convex toward the object side. Fig. 1 and the positive radii $r_1$ and $r_2$ support the object-side description.
- The detailed description calls both members of L2 and both members of L4 positive. Standalone in-air calculations from the numerical table show L2b and L4b to be negative, while each cemented group remains net positive.
- The discussion of condition 5 refers at different points to small “air spaces” $d_2$ and $d_{13}$, and later $d_2$ and $d_3$. In the prescription, $d_{13}$ is the thickness of L6 and $d_3$ is the thickness of L2a. The formal condition and claims use the actual outer air spaces $d_2$ and $d_{12}$.
- The claim text contains isolated element-label slips, including an L6a reference within the L4 description. The surface sequence and numerical tables are internally consistent and take precedence.

## Verification Summary

The full first-example prescription was re-entered directly from the patent table and evaluated with an independent paraxial $[y,nu]$ matrix trace. A separate basis-ray trace reproduced the same system matrix to better than $10^{-12}$ per matrix term. The final rounded TypeScript prescription was then parsed separately and re-traced.

| Quantity                             | Patent or manufacturer value | Independently computed value |   Difference |
| ------------------------------------ | ---------------------------: | ---------------------------: | -----------: |
| Patent example EFL                   |            100 nominal units |             100.026560 units |    +0.026560 |
| Patent image distance / BFD          |                   81.9 units |              81.945374 units |    +0.045374 |
| Sum of patent $d_1$ through $d_{13}$ |                 62.494 units |                 62.494 units |            0 |
| Scaled model EFL                     |              121.6 mm target |                121.600001 mm | <0.000002 mm |
| Production BFD comparison            |                     102.3 mm |           99.619120 mm model | −2.680880 mm |
| Production $HH'$ comparison          |                      17.9 mm |           19.928085 mm model | +2.028085 mm |

The surface-by-surface Petzval sum is

$$
P=\sum_i\frac{(n'_i-n_i)/R_i}{n_i n'_i}
 = +0.000714249\ \mathrm{mm^{-1}}
$$

at production scale, with reciprocal magnitude 1400.071 mm. This is a prescription diagnostic, not the final tangential or sagittal field curvature; astigmatism and finite-conjugate effects also determine the image surfaces.

Every final TypeScript radius and axial distance was divided by the scale factor and compared with the patent table. The reconstructed split around `STO` sums to the patent's original $d_7$ within rounding, and no other patent spacing was divided or redistributed.

The inferred semi-diameters are not patent data. Their revised progression follows the relative rim heights in the patent section, including the small L3, broad central L4 doublet, and outward-expanding rear groups. They satisfy the project geometry checks:

- maximum $sd/|R|=0.752577$, below the 0.90 spherical limit;
- maximum front/rear semi-diameter ratio within one element = 1.162162;
- minimum calculated edge thickness = 2.329561 mm;
- maximum signed cross-gap sag intrusion = 76.8248% of the associated air gap;
- the on-axis bundle and the 19.27° chief ray clear, while the display field retains a well-populated pupil interval with expected edge vignetting.

The production lens's 41° half-field is retained as authoritative projection metadata. The visible first-order ray fan is limited to 47% of that half-field because a paraxial tangent launch at 41° is not a valid model of the patent's high-angle finite-aperture ray geometry and would force nonphysical clear apertures through the steep front meniscus. The stored semi-diameters should therefore be read as rendering-safe inferred apertures, not factory drawing dimensions.

## Design Heritage and Context

The patent presents the design as an alternative to earlier large, approximately symmetric Bertele-type wide-angle objectives. Its intended distinction is wide coverage at f/5.6 with smaller outer diameters and a shorter optical assembly. It pursues that result through geometric asymmetry, low-index negative outer lenses, higher-index interior glasses, and one unusually thick positive cemented doublet near the diaphragm.

Schneider's technical data sheet lists the 120 mm lens with an effective focal length of 121.6 mm, 73° coverage and a 180 mm image circle at full aperture, and 82° coverage with a 211 mm image circle at f/22. It recommends 90 × 120 mm and 4 × 5 inch formats. The same sheet gives BFD 102.3 mm, $HH'=17.9$ mm, an M67 × 0.75 front thread, shutter size 0, a minimum aperture of f/64, and 370 g for the Compur 0 or Copal 0 versions. These manufacturer-published specifications take precedence over patent-derived or secondary values for the production lens.

## Sources

- Hiltrud Schitthof, [US Patent 4,773,745, “Compact Wide-Angle Objective”](https://patents.google.com/patent/US4773745A/en), granted September 27, 1988. First numerical example and conditions: cols. 2–8; the first table corresponds to Fig. 2.
- Schneider-Kreuznach, [Super-Symmar HM technical data sheet](https://www.hyam.net/blog/wp-content/uploads/2019/08/super_symmar_hm.pdf), archival manufacturer scan. Page 1: 8 lenses / 6 groups and apochromatic-correction claim; page 2: production section and mechanical dimensions; page 3: EFL, BFD, $HH'$, coverage, image circles, formats, shutter, thread, aperture, and weight.
- SCHOTT, _Optical Glass Datasheets of Inquiry Glasses_: FK3 and N-SF19 optical data.
- CDGM, [H-F6 optical-glass datasheet](https://www.cdgmgd.com/webapp/pdf/H-F6.pdf): d-line code and Sellmeier coefficients for the 625/356 comparison used for L2b.
- SCHOTT, _Optical Glass Datasheets_: N-LAK33B, N-LAF34, and N-SK16 optical data.
- CDGM, _Colourless Optical Glass Catalog_, 2026 edition: H-F6 and H-ZF39 comparison data.
- HIKARI, _Optical Glass Catalog_, 2023 edition, and OHARA, _Special Order Glass Types_, March 12, 2025: independent checks of unresolved optical positions.
