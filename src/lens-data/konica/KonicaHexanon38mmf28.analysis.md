## Patent Reference and Design Identification

**Patent:** US 3,615,126
**Title:** Photographic Objective with a Rear Stop
**Filed:** November 24, 1969
**Granted:** October 26, 1971
**Priority:** Japan, November 27, 1968, Application 43/86,351
**Inventor:** Tadashi Kojima, Tokyo, Japan
**Assignee:** Konishiroku Photo Industry Co., Ltd., Chuo-ku, Tokyo, Japan
**Classification:** Int. Cl. G02B 9/20; U.S. Cl. 350-227
**Claims:** 4
**Worked examples:** 3
**Embodiment analyzed:** Embodiment I / Claim 2

US 3,615,126 describes a compact photographic objective with the aperture stop placed behind the final refractive surface. The lens is a rear-stop Tessar derivative: a positive meniscus first group, a biconcave second group, and a cemented rear doublet. The patent explicitly frames the design problem as a compact-camera requirement, where the shutter and diaphragm are easier to package behind the objective.

Embodiment I is a strong match for the Konica Hexanon 38mm f/2.8 used in the Konica C35 family. The identification is not made from one dimension alone; it rests on several converging facts. The patent example is a 4-element, 3-group, F/2.8 rear-stop objective with a half-field angle near 30°. The Konica C35 manual specifies a Hexanon 38mm f/2.8 lens with 4 elements in 3 groups and whole-lens helicoid focusing. The patent priority date of November 1968 also aligns with the first C35 generation.

The patent prescription is normalized to $f = 1.0$. The data file applies a scale factor of 38.0 to represent the production nominal focal length. Because the rounded prescription computes to an effective focal length of 1.00849 rather than exactly 1.00000, the scaled data file traces to $f = 38.32$ mm. The 38mm production focal length remains the marketed value.

## Optical Architecture

The design is a modified Tessar in a 1-1-2 configuration. The group power distribution is positive-negative-positive:

| Group | Elements | Type | Standalone focal length |
|---|---:|---|---:|
| G1 | L1 | Positive meniscus, convex to object | $+0.589f$ / +22.4 mm |
| G2 | L2 | Biconcave negative singlet | $-0.364f$ / -13.8 mm |
| G3 | L3 + L4 | Cemented positive doublet | $+0.569f$ / +21.6 mm |

The stop is placed $0.058f$ behind surface r7, in the image-side air space. At the 38.0 scale factor, this is 2.204 mm behind the last glass surface. The patent states a back focal length of $f_B = 0.7658f$ for Embodiment I, but a direct paraxial trace of the rounded prescription gives $f_B = 0.79030f$. The data file therefore uses the computed value for the final air gap so that the transcribed rounded prescription is focused in the renderer. The patent value is retained in this analysis as the stated source value.

The key architectural departure from a classical Tessar is not the element count, but the axial distribution. The air gaps between groups are very small: $d_2 = 0.027f$ and $d_4 = 0.042f$. The first element and rear doublet are comparatively thick: $d_1 = 0.100f$ and $d_5 + d_6 = 0.125f$. The patent uses this thickness distribution to reduce back focal length while preserving sufficient stopped-down ray clearance at the rear stop.

All surfaces are spherical. No aspherical, ED, fluorite, or anomalous-partial-dispersion material is present in the patent prescription.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.80420$, $\nu_d = 46.6$. Glass: S-LAH65V / TAF3 class equivalent. $f = +22.4$ mm.

L1 is a high-index positive meniscus defined by r1 = $+0.3308f$ and r2 = $+0.9499f$. Both radii are positive, but the front radius is much steeper, giving strong positive power while keeping the rear surface comparatively gentle.

The element is thick for such a compact lens: $d_1 = 0.100f$, or 3.80 mm after scaling. The patent treats this thickness as a central part of the design solution. A very small following air gap lets the first element be thickened without forcing the rear stop to vignette stopped-down oblique rays excessively.

The stored index/Abbe pair is very close to OHARA S-LAH65V ($n_d = 1.80400$, $\nu_d = 46.58$), and the six-digit code is 804/466. The glass is better described as high-index lanthanum flint than as crown glass; $\nu_d = 46.6$ lies below the usual crown/flint dividing region.

### L2 — Biconcave Negative Singlet

$n_d = 1.75690$, $\nu_d = 31.7$. Glass: Hikari E-LAF11 nearest modern catalog equivalent to patent code 757/317. $f = -13.8$ mm.

L2 is a biconcave diverging element. Surface r3 = $-2.8539f$ is weak and concave toward the object; surface r4 = $+0.3074f$ is much stronger and concave toward the image side. The weak front surface is deliberate. The patent identifies the low curvature of the third refractive surface as a mechanism for reducing comatic flare and overcorrected higher-order spherical aberration.

The glass is a high-index, high-dispersion flint. A catalog recheck finds Hikari E-LAF11 at $n_d = 1.75692$, $\nu_d = 31.59$, code 757/316. That is within normal tolerance for the rounded patent value and explains the one-unit Abbe-code difference. The data file therefore uses E-LAF11 as a nearest modern catalog equivalent rather than leaving this element as unmatched.

The extremely small $d_2 = 0.027f$ air gap before L2 is one of the patent's governing choices. Increasing this gap would help back focal length, but the patent states that it would cause severe vignetting at the rear stop.

### L3 — Negative Meniscus in the Rear Cemented Doublet

$n_d = 1.72825$, $\nu_d = 28.3$. Glass: S-TIH10 / E-FD10 / N-SF10 class. $f = -24.1$ mm.

L3 is the negative member of the rear cemented doublet. Its surfaces are r5 = $+1.2015f$ and r6 = $+0.3308f$, so it is a meniscus convex toward the object. In standalone power it is negative because the steeper cemented interface dominates.

The stored glass is a close match to the classic SF10 family. OHARA S-TIH10 gives $n_d = 1.72825$ and $\nu_d = 28.46$, while the patent rounds the Abbe number to 28.3. Hoya E-FD10 and Schott N-SF10 are equivalent-class identifications.

The r6 cemented interface is one of the major correction surfaces in the design. The patent constrains $0.20f < r_6 < 0.45f$ and $0.04 < n_4 - n_3 < 0.19$ to control comatic flare at intermediate field angles.

### L4 — Biconvex Positive Rear Element

$n_d = 1.83060$, $\nu_d = 26.5$. Glass: unmatched high-index dense flint, code 831/265. $f = +11.6$ mm.

L4 is the positive element of the rear cemented doublet. It is bounded by r6 = $+0.3308f$ and r7 = $-0.9269f$, making it biconvex. Its high index lets the doublet provide strong positive power with a relatively compact rear group.

The patent's Embodiment I table and Claim 2 table both give $\nu_4 = 26.5$. This is a high-dispersion dense flint value, not a lanthanum crown or ordinary lanthanum flint value. It should not be identified as OHARA S-LAH60; S-LAH60 is near $\nu_d = 37.16$ and does not match the patent's L4 Abbe number.

The rear doublet is therefore not a conventional wide-Abbe-split achromat. Its two members are both high-dispersion flints, with $\Delta\nu_d \approx -1.8$ from L3 to L4. The doublet's primary role in this patent is not a simple achromat pairing, but a compact positive rear group whose high-index cemented interface contributes to coma and Petzval control.

## Glass Identification

| Element | $n_d$ | $\nu_d$ | Code | Identification | Role |
|---|---:|---:|---:|---|---|
| L1 | 1.80420 | 46.6 | 804/466 | S-LAH65V / TAF3 class equivalent | High-index positive meniscus |
| L2 | 1.75690 | 31.7 | 757/317 | E-LAF11 (Hikari nearest equivalent; catalog 757/316) | Negative singlet / coma control |
| L3 | 1.72825 | 28.3 | 728/283 | S-TIH10 / E-FD10 / N-SF10 class | Negative member of rear doublet |
| L4 | 1.83060 | 26.5 | 831/265 | Unmatched high-index dense flint | Strong positive rear doublet member |

All four elements use high-index glasses. The patent explicitly requires $1.70 < n_1 < 1.85$ and $1.70 < n_4 < 1.85$ to reduce Petzval sum and to permit the selected curvature values. No element can support an apochromatic or anomalous-dispersion claim from the patent data.

The glass assignments are intentionally conservative. L1, L2, and L3 have close modern catalog equivalents. L4 remains unmatched because no current catalog match was found that simultaneously preserves the patent's $n_d$ and $\nu_d$ values within a normal confident tolerance.

## Focus Mechanism

The production Konica C35 uses unit focusing: all glass groups rotate/translate together in a helicoid. The patent itself gives only the infinity prescription and no close-focus variable-spacing table.

The data file models this as a single variable back-focus gap from the rear stop to the image plane. At infinity, the computed stop-to-image distance is 27.8273 mm. At the production close-focus distance of approximately 1.0 m, the independently solved thick-lens conjugate gives 29.4259 mm. The corresponding magnification is approximately $\beta = -0.0417$.

| State | Stop-to-image gap | Note |
|---|---:|---|
| Infinity | 27.8273 mm | Uses computed BFD from rounded prescription |
| 1.0 m | 29.4259 mm | Unit-focus extension, solved by finite-conjugate paraxial trace |

## Conditional Expressions

The patent's constructional constraints are all satisfied by Embodiment I. Values are normalized to $f = 1.0$.

| Condition | Embodiment I value | Range | Result |
|---|---:|---:|---|
| $0.075f < d_1 < 0.125f$ | 0.100 | 0.075-0.125 | Satisfied |
| $0.020f < d_2 < 0.045f$ | 0.027 | 0.020-0.045 | Satisfied |
| $0.020f < d_3 < 0.050f$ | 0.045 | 0.020-0.050 | Satisfied |
| $0.025f < d_4 < 0.060f$ | 0.042 | 0.025-0.060 | Satisfied |
| $0.14f < d_2 + d_5 + d_6 < 0.22f$ | 0.152 | 0.14-0.22 | Satisfied |
| $0.29f < r_1 < 0.35f$ | 0.3308 | 0.29-0.35 | Satisfied |
| $-3.3f < r_3 < -1.8f$ | -2.8539 | -3.3 to -1.8 | Satisfied |
| $0.26f < r_4 < 0.32f$ | 0.3074 | 0.26-0.32 | Satisfied |
| $0.20f < r_6 < 0.45f$ | 0.3308 | 0.20-0.45 | Satisfied |
| $1.70 < n_1 < 1.85$ | 1.80420 | 1.70-1.85 | Satisfied |
| $1.70 < n_4 < 1.85$ | 1.83060 | 1.70-1.85 | Satisfied |
| $0.04 < n_4 - n_3 < 0.19$ | 0.10235 | 0.04-0.19 | Satisfied |

The most important conditions are the small inter-group air gaps and the high refractive indices in L1 and L4. The dimensional conditions reduce back focal length and manage stopped-down rear-stop vignetting; the index and curvature conditions keep Petzval sum, coma, and higher-order field curvature under control.

## Verification Summary

The prescription was re-entered from the patent and checked with an independent paraxial y-$n u$ ray trace and an ABCD matrix trace. The Petzval sum was calculated surface by surface using $\Phi/(n n')$.

| Quantity | Patent value | Computed from rounded prescription | Difference |
|---|---:|---:|---:|
| Effective focal length | 1.0000 | 1.00849 | +0.849% |
| Back focal length from r7 | 0.7658 | 0.79030 | +3.20% |
| Petzval sum | 0.2637 | 0.263790 | +0.00009 |

The BFD discrepancy is specific to Embodiment I. Re-entering Embodiments II and III with the same code gives BFD agreement within approximately 0.03%, so the trace convention is not the source of the error. The most likely cause is rounding or a table-setting error in Embodiment I's normalized prescription. The Petzval sum is a strong internal check: it depends on radii and refractive indices but not on thicknesses, and it matches the patent's Seidel P total to the displayed precision.

Semi-diameters are not listed in the patent. The inferred data-file values were checked against the on-axis f/2.8 marginal ray, element edge thickness, element semi-diameter ratios, the spherical rim limit, and cross-gap sag intrusion. The binding mechanical constraint is the small $d_4$ gap between L2 and L3; it limits the clear aperture around surfaces r4/r5 and implies ordinary wide-open off-axis vignetting for this compact rear-stop design.

## Design Heritage and Context

This objective belongs to the rear-stop Tessar family. A classical Tessar normally places the stop between the negative second element and the cemented rear doublet. Here, the stop is moved completely behind the refractive system to suit a lens-shutter compact camera. The design problem is therefore different from a normal interchangeable-camera Tessar: the rear stop and shutter must sit close to the film plane, but the lens still has to cover a half-field angle near 30° at f/2.8.

The patent cites the applicant's earlier Japanese Registered Utility Model No. 849,127 as prior art, along with US 2,720,814, US 2,764,063, and GB 672,822. Its contribution is a compact rear-stop Tessar derivative with thickened first and third groups, minimized inter-group air spacing, and high-index glass in the first and fourth elements.

## Sources

- US Patent 3,615,126, Tadashi Kojima, "Photographic Objective with a Rear Stop," granted October 26, 1971.
- Konica C35 Automatic instruction manual, major specifications: Hexanon 38mm f/2.8, 3 groups / 4 elements, whole-lens helicoid focus, closest taking distance 3.3 feet.
- OHARA Corporation, S-LAH65V catalog page: $n_d = 1.80400$, $\nu_d = 46.58$.
- OHARA Corporation, S-TIH10 catalog page: $n_d = 1.72825$, $\nu_d = 28.46$.
- Hikari E-LAF11 catalog row: $n_d = 1.75692$, $\nu_d = 31.59$, code 757/316.
- Hoya Optical Glass catalog, designation and six-digit optical-glass code conventions.
