# NIKON AF ZOOM-NIKKOR 20-35mm f/2.8 D IF

## Patent Reference and Design Identification

**Patent:** US 5,276,553 A

**Filed:** December 11, 1992

**Priority:** December 25, 1991 (Japan 3-342608)

**Granted:** January 4, 1994

**Inventor:** Wataru Tatsuno

**Assignee:** Nikon Corporation

**Title:** *Ultra Wide Angle Zoom Lens*
**Embodiment analyzed:** Example 1

The prescription is the Example 1 design selected for correlation with the production **NIKON AF ZOOM-NIKKOR 20-35mm f/2.8 D IF**. The correlation is treated as the fixed identification for this model; it is not presented as an explicit Nikon statement that the production lens was manufactured directly from this patent example.

Several independent features support the correlation:

1. Nikon Corporation is the patent assignee, and the patent concerns a fast ultra-wide zoom for the 35 mm Leica format.
2. Example 1 spans 20.5–34.0 mm, closely bracketing the marketed 20–35 mm focal range while retaining the patent's exact design values separately from the product designation.
3. The patent specifies FN = 2.89, corresponding closely to the marketed constant f/2.8 designation without substituting the rounded marketing value for the optical model.
4. The patent places focusing inside the second positive group, where the cemented L21 component moves relative to L22. This is consistent with the production lens's IF designation.
5. Nikon's own Download Center continues to list the production designation **AI AF Zoom-Nikkor 20-35mm f/2.8D IF**, independently establishing the product identity used by the data file.

The model records two patent inconsistencies and one extraction hazard rather than silently normalizing them. First, surface 11 uses **R = −56.755 mm**: Table 1 prints +56.755 mm, but claim 7 prints −56.755 mm, the element description requires the rear face of the positive member of L21 to be compatible with a biconvex form, and only the negative sign reproduces the published focal-length and rear-focus rows. Second, surface 5 is **R = +153.969 mm** in both the rendered Table 1 and claim 7; only some text extraction loses the leading digit, so this is an OCR hazard rather than a patent-table conflict. Third, the printed Example 1 result for condition (7) gives a positive ratio even though the condition itself requires the synthesized L11–L12 focal length to be negative. The independently computed ratio is therefore reported with its verified negative sign. A separate qualitative-versus-numerical conflict occurs at L43: the patent prose calls it a positive meniscus, while the tabulated radii **+2058.323 / −50.144 mm** define a very weak-front biconvex positive element; the data and element heading follow the numerical prescription.

No dimensional scaling is applied. The prescription remains at the patent scale, **s = 1**, so radii, thicknesses, image-plane distances, and aspheric polynomial coefficients are not rescaled.

## Optical Architecture

Example 1 is a four-power-group ultra-wide zoom with the sequence **negative–positive–negative–positive**. The data model contains **14 physical glass elements in 11 air-separated optical units**, arranged as four moving zoom groups G1–G4. The patent explicitly states that, during zooming from wide to telephoto, the G1–G2 separation decreases, the G2–G3 separation increases, and the G3–G4 separation decreases (US 5,276,553, cols. 3–4; Fig. 1).

Independent paraxial calculation from the final prescription gives the following group powers at the published infinity state:

| Group | Composition | Net EFL |
|---|---|---:|
| G1 | L11, L12, L13, L14 | −27.989148 mm |
| G2 | cemented L21 + L22 | +34.959262 mm |
| G3 | cemented L31 | −50.142657 mm |
| G4 | L41, L42, L43, cemented L44 | +40.000170 mm |

The architecture is retrofocus under the project definition at each published zoom state because the calculated back focal distance remains greater than the effective focal length. That long rear clearance is a central concern of the patent: its conditions distribute power among the four groups so that a roughly f/2.8 ultra-wide system can retain sufficient rear focus for a 35 mm SLR while avoiding an excessively large front group.

### Zoom kinematics

The data file uses the patent's three published infinity control points: **20.5, 28, and 34 mm**. The variable G1–G2 gap D8 falls from 17.8289 to 6.3818 to 1.5051 mm; the total G2–G3 gap D13 rises from 3.5982 to 8.1846 to 11.7305 mm; and D16 between G3 and G4 falls from 9.1470 to 4.5606 to 1.0148 mm. D11 remains 3.3045 mm in all published infinity states because its variability belongs to focusing rather than zooming.

When the group positions are normalized to the fixed image plane, G1 moves 4.8951 mm imageward between the wide and middle states and then reverses by 0.1889 mm objectward between the middle and telephoto states. The three patent states therefore bracket a small non-monotonic movement that is retained by the piecewise-linear zoom model rather than simplified away.

### Stop placement and modeled clear apertures

The patent supplies the diaphragm symbol **S** between G2 and G3 but no numerical axial coordinate or clear diameter. Figure 1 places S within the D13 air space after L22 and before L31. The data model therefore inserts one neutral `STO` plane at a disclosed figure-based position **45% of the way from surface 13 toward surface 14**, leaving 55% of D13 after the stop. The split is applied proportionally at every published zoom state and preserves the original total D13 exactly. This is a modeling inference, not a patent-published diaphragm coordinate or a claim about the production cam path.

The patent also publishes no surface semi-diameters. The semi-diameters in the data model are inferred clear apertures derived from exact spherical/aspherical ray tracing across all three zoom states, the 36×24 mm frame diagonal, the F/2.89 pupil requirement, axial marginal rays, and off-axis bundles. They are therefore modeling quantities rather than source dimensions. No layout control is used to conceal a geometric conflict.

## Element-by-Element Analysis

### L11 — Negative Meniscus with Object-Side Asphere

**nd = 1.77279, νd = 49.4. Glass: J-LASF016 catalog equivalent (patent 773494; production supplier not established). Standalone f = −42.850027 mm.**

L11 is the large negative meniscus at the entrance of G1. Its negative power begins the retrofocus expansion needed for the ultra-wide field while leaving the positive rear groups enough leverage to form a long back focus. The patent specifically recommends an aspherical face on the front negative meniscus and states that this helps correct distortion and astigmatism while permitting a more compact first group (US 5,276,553, col. 5).

The element's standalone focal length is an air-to-air quantity. Its actual behavior in G1 also depends on L12, the large air space behind L11, and the two following positive elements; it should not be interpreted as the installed power of the entire front section.

### L12 — Biconcave Negative

**nd = 1.78797, νd = 47.5. Glass: TAF4 catalog equivalent (patent 788475; production supplier not established). Standalone f = −33.354449 mm.**

L12 reinforces the negative front-group power. Together, L11 and L12 form the front negative synthesis governed by patent condition (7). The independently computed value of F1F/Fw is **−0.783222**, within the required negative interval. This pair is therefore materially stronger than either element considered only as an isolated shape description.

The patent treats the strength of this front negative synthesis as a compromise: excessive weakness makes rear focus and compactness harder to secure, while excessive strength makes aberration correction more difficult. The data model retains the verified negative sign of that synthesis despite the patent's contradictory positive printed Example 1 result line.

### L13 — Biconvex Positive

**nd = 1.75692, νd = 31.6. Glass: E-LAF11 catalog equivalent (patent 757316; production supplier not established). Standalone f = +102.279959 mm.**

L13 begins the positive recovery within G1 after the two strong negative front elements. The patent does not assign a separate aberration function to L13, so its role is best understood from the verified group structure: it contributes positive power while allowing G1 as a whole to remain negative at **−27.989148 mm** EFL.

The E-LAF11 name identifies a coefficient-backed public catalog equivalent at the patent coordinate. It supplies the runtime dispersion curve without asserting that Hikari made the production element.

### L14 — Positive Meniscus

**nd = 1.75692, νd = 31.6. Glass: E-LAF11 catalog equivalent (patent 757316; production supplier not established). Standalone f = +129.323966 mm.**

L14 is the rear positive meniscus of G1. The patent gives this member a specific field-dependent function: its position relative to L12 is used to control oblique rays and image-angle-dependent aberrations such as astigmatism without imposing the same influence on the axial ray. Condition (6) constrains the axial separation D1 from L12 to this rear positive member; Example 1 gives **D1/Fw = 0.341463**, within the stated interval.

L13 and L14 use the same stored d-line coordinate pair and the same E-LAF11 catalog curve. That numerical equivalence is a dispersion model, not evidence for the production supplier.

### L21 — Cemented Positive Focusing Doublet

**L21a: nd = 1.71736, νd = 29.5. Glass: SF1 catalog equivalent (patent 717295; production supplier not established). Standalone f = −66.512083 mm.**

**L21b: nd = 1.51860, νd = 69.9. Glass: J-PKH1 catalog equivalent (patent 519699; production supplier not established). Standalone f = +31.681489 mm.**

L21 combines a negative meniscus and positive biconvex member into a net positive cemented unit. The individual air-to-air focal lengths above describe the members in isolation; the actual bonded doublet has a verified net EFL of **+60.027257 mm** because the cemented interface acts between two non-air indices.

This doublet is also the patent's focusing component. It moves axially within G2 relative to L22 rather than requiring motion of the large negative front group. The patent explicitly identifies the low moving mass of this internal component as advantageous for autofocus (US 5,276,553, cols. 5–6 and 9–10).

Condition (2) constrains L21's net power. The patent explains the trade as one involving spherical-aberration correction against other aberrations; the final model gives **F2F/Fw = 2.928159**, within the prescribed range.

### L22 — Positive Meniscus

**nd = 1.71300, νd = 53.9. Glass: LAC8 catalog equivalent (patent 713539; production supplier not established). Standalone f = +76.040591 mm.**

L22 is the rear positive component of G2 and remains separate from the moving L21 doublet. Its position immediately ahead of the diaphragm region makes its power important to the overall relay into G3. Patent condition (3) is devoted to this element and describes a direct trade between rear-focus clearance and compactness: weakening L22 helps secure rear focus but enlarges the system and diaphragm, while excessive strengthening makes adequate rear focus harder to retain.

The verified Example 1 ratio is **F2R/Fw = 3.709297**, comfortably inside the patent's 2.5–5.5 interval.

### L31 — Cemented Negative Doublet

**L31a: nd = 1.74810, νd = 52.3. Glass: Unmatched (nd=1.74810, vd=52.3). Standalone f = −21.917166 mm.**

**L31b: nd = 1.80518, νd = 25.4. Glass: S-TIH6 catalog equivalent (patent 805254; production supplier not established). Standalone f = +37.691781 mm.**

L31 is the entire third power group. Although its rear member is positive in isolation, the cemented pair has a verified net EFL of **−50.142657 mm**. The air-to-air standalone values therefore should not be substituted for the bonded group power.

The patent devotes condition (4) to G3. It describes the negative group's strength as a balance between rear-focus clearance and aberration control, particularly the variation of spherical aberration through zoom. The Example 1 value **F3/Fw = −2.445983** satisfies the stated negative-power interval.

The first member's glass remains `Unmatched` in the data file; no vendor equivalence is asserted.

### L41 — Positive Meniscus

**nd = 1.65844, νd = 50.8. Glass: J-SSK5 catalog equivalent (patent 658508; production supplier not established). Standalone f = +73.144126 mm.**

L41 begins the positive fourth group. The patent does not assign a separate named correction function to this element, so an element-specific aberration claim would go beyond the source. In the verified prescription it contributes positive power to a rear group whose net EFL is approximately +40 mm.

### L42 — Negative Meniscus

**nd = 1.78470, νd = 26.1. Glass: SF56A catalog equivalent (patent 785261; production supplier not established). Standalone f = −60.734835 mm.**

L42 introduces negative power inside the otherwise positive G4. In structural terms it breaks the rear group into alternating positive and negative contributions rather than concentrating all positive power in one strong member. The patent discusses G4 only at the group level, so the detailed aberration partition among L41, L42, L43, and L44 remains an interpretation of the prescription rather than a separately published element function.

### L43 — Biconvex Positive

**nd = 1.79668, νd = 45.4. Glass: J-LASF017 catalog equivalent (patent 797454; production supplier not established). Standalone f = +61.496057 mm.**

L43 restores positive power after L42 and precedes the final cemented doublet. Its tabulated radii, +2058.323 mm and −50.144 mm, define a very weak-front biconvex element even though the qualitative patent prose calls L43 a positive meniscus. The numerical prescription is authoritative for the modeled shape. Its relatively high stored index allows substantial refractive power despite the nearly plane first face, but the patent does not identify a proprietary glass family or a special dispersion function for this element.

The J-LASF017 curve is the previously audited compatible public representation for this rounded patent coordinate. Its use does not identify the production supplier.

### L44 — Cemented Positive Rear Doublet

**L44a: nd = 1.62280, νd = 57.0. Glass: S-BSM10 catalog equivalent (patent 623570; production supplier not established). Standalone f = +28.094946 mm.**

**L44b: nd = 1.86074, νd = 23.0. Glass: Unmatched (patent 861230; no compatible public catalog row). Standalone f = −44.911826 mm.**

L44 closes the optical train as a cemented positive unit. The isolated positive and negative members combine to a verified cemented net EFL of **+74.931449 mm**. As with L21 and L31, this bonded value is the appropriate first-order description of the unit; the standalone values describe hypothetical air-to-air elements.

The large dispersion contrast between the two stored νd values is consistent with ordinary achromatizing use of a cemented positive/negative pair, but the patent supplies no line-index or anomalous-partial-dispersion data. The model therefore does not claim apochromatic correction or anomalous-dispersion behavior.

Condition (5) applies to G4 as a whole rather than L44 alone. The verified group ratio **F4/Fw = 1.951228** lies inside the patent's 1.7–2.5 interval.

## Glass Identification and Selection

The patent publishes only refractive index and Abbe number at the d line (587.6 nm). It names no glass manufacturer and supplies no C-, F-, or g-line indices and no dPgF values. A catalog recheck assigns public, coordinate-compatible curves to twelve of the fourteen elements while preserving the patent coordinates and explicitly leaving the production supplier unknown. L31a and L44b remain unmatched because no coefficient-backed public row lies safely within the runtime compatibility window.

| Element(s) | nd | νd | Data-file glass annotation |
|---|---:|---:|---|
| L11 | 1.77279 | 49.4 | J-LASF016 catalog equivalent (patent 773494) |
| L12 | 1.78797 | 47.5 | TAF4 catalog equivalent (patent 788475) |
| L13, L14 | 1.75692 | 31.6 | E-LAF11 catalog equivalent (patent 757316) |
| L21a | 1.71736 | 29.5 | SF1 catalog equivalent (patent 717295) |
| L21b | 1.51860 | 69.9 | J-PKH1 catalog equivalent (patent 519699) |
| L22 | 1.71300 | 53.9 | LAC8 catalog equivalent (patent 713539) |
| L31a | 1.74810 | 52.3 | Unmatched (nd=1.74810, vd=52.3) |
| L31b | 1.80518 | 25.4 | S-TIH6 catalog equivalent (patent 805254) |
| L41 | 1.65844 | 50.8 | J-SSK5 catalog equivalent (patent 658508) |
| L42 | 1.78470 | 26.1 | SF56A catalog equivalent (patent 785261) |
| L43 | 1.79668 | 45.4 | J-LASF017 catalog equivalent (patent 797454) |
| L44a | 1.62280 | 57.0 | S-BSM10 catalog equivalent (patent 623570) |
| L44b | 1.86074 | 23.0 | Unmatched (patent 861230; no compatible public catalog row) |

The broad spread from high-νd crown-like coordinates to low-νd flint-like coordinates gives the designer multiple ordinary chromatic-balancing pairs, particularly in the cemented groups. That observation does not establish APO performance. Without validated line data, dPgF, or a defensible Sellmeier identity, the model is limited to the published d-line/Abbe description.

## Focus Mechanism

The patent specifies internal focusing by axial motion of the **cemented positive L21 doublet alone** within G2. L22 remains the rear member of G2, and focusing changes the separation between L21 and L22. This is a source fact, not a reconstructed mechanism.

The data file's focus status is **NO_INTERNAL_RECONSTRUCTION**. Although surface 11 is marked as a variable gap by the patent, the source publishes only infinity-focus zoom rows and supplies no finite-object spacing table, focus travel, or close-focus magnification. The authored values therefore keep every `[infinity, close]` pair identical at all three zoom positions. The viewer receives the published infinity geometry only; it does not simulate an invented close-focus state.

The production minimum focus distance stored as metadata is **0.5 m**, taken from a Nikon user manual preserved by an archival mirror. That product specification is not used to solve or infer L21 travel. Consequently, no quantitative statement about internal focus displacement, close-focus magnification, or aberration change with focusing is made here.

## Aspherical Surfaces

Example 1 uses one aspherical surface: the object-side face of L11, labeled **1A** in the data file. The patent writes the base conic term with the radical

$$
\sqrt{1-kh^2/R^2},
$$

whereas LensVisualizer uses

$$
\sqrt{1-(1+K)(h/R)^2}.
$$

The conventions therefore map as **K = k − 1**. Example 1 has patent **k = 1**, so the standard LensVisualizer conic constant is **K = 0**. This means the conic base is the same-radius sphere and the departure is carried by the even polynomial terms.

The final data file stores:

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|
| 1A | 0 | +4.780×10⁻⁶ | +4.468×10⁻⁹ | −7.609×10⁻¹² | +1.215×10⁻¹⁴ |

A12 and A14 are zero. The patent's C2 term is also zero and is therefore not represented as a separate quadratic polynomial coefficient in the LensVisualizer data model.

Because no scale factor is applied, these coefficients are transcribed without dimensional transformation. At the **modeled**, not patent-published, surface-1 semi-diameter of 20.5 mm, independent sag evaluation gives a departure of **+1.097743 mm** from the same-radius K = 0 spherical base. This rim departure is meaningful only with the inferred clear aperture used by the data model; it is not a patent aperture specification.

The patent identifies the asphere as a way to improve distortion and astigmatism correction in the negative front meniscus while keeping G1 compact. The positive A4 term supplies most of the outward polynomial departure at large radius, with the higher-order terms shaping the edge profile rather than changing the conic class.

## Conditional Expressions

The patent uses seven inequalities to constrain the four group powers, the front negative synthesis, and the internal spacing of G1. Recalculation from the final prescription gives:

| Condition | Quantity | Computed | Result |
|---|---|---:|---|
| (1) | 1 < \|F1/Fw\| < 2, F1 < 0 | −1.365324 | Pass |
| (2) | 2 < F2F/Fw < 5 | +2.928159 | Pass |
| (3) | 2.5 < F2R/Fw < 5.5 | +3.709297 | Pass |
| (4) | 1.5 < \|F3/Fw\| < 3, F3 < 0 | −2.445983 | Pass |
| (5) | 1.7 < F4/Fw < 2.5 | +1.951228 | Pass |
| (6) | 0.17 < D1/Fw < 1.2 | +0.341463 | Pass |
| (7) | 0.5 < \|F1F/Fw\| < 1.5, F1F < 0 | −0.783222 | Pass |

Condition (7) is the notable source discrepancy. The Example 1 result line prints a positive value, but the inequality explicitly requires F1F < 0 and the independently synthesized L11–L12 power is negative. The verified negative ratio is therefore used for the model while the source discrepancy remains disclosed.

The conditions describe the patent's main architectural compromises. G1 must be negative enough to secure rear focus without becoming so strong that distortion and lens diameter become unmanageable; L21 and L22 divide positive power while balancing spherical correction, compactness, and rear focus; G3 supplies negative relay power without excessive zoom-dependent aberration variation; and G4 restores positive power while maintaining the final rear clearance.

## Verification Summary

The first-order results below are independently recomputed from the final data arrays using sequential reduced-angle tracing and an ABCD matrix calculation. They are not copied from the patent table except for the comparison targets.

| Published zoom position | Calculated EFL | Calculated BFD | Patent Bf | BFD difference |
|---:|---:|---:|---:|---:|
| 20.5 mm | 20.499498 mm | 38.600105 mm | 38.5995 mm | +0.000605 mm |
| 28.0 mm | 27.999549 mm | 45.152587 mm | 45.1515 mm | +0.001087 mm |
| 34.0 mm | 33.999658 mm | 50.218525 mm | 50.2170 mm | +0.001525 mm |

Sequential tracing and ABCD accumulation agree to a maximum matrix-entry difference of **1.42×10⁻14**. The surface-by-surface Petzval calculation, using $\phi/(n n')$ at each refracting surface, gives a sum of **+0.005329726 mm⁻¹**, corresponding to a signed reciprocal radius of **+187.626916 mm**.

The inferred clear-aperture model also passes the available geometry checks at all three zoom states: the minimum computed edge thickness is **1.138544 mm**, the largest actual rim-slope angle is **55.5236°**, the largest positive shared-band cross-gap intrusion is **0.884388** of the gap against the 0.90 limit, and the smallest tested ray-to-rim clearance is **0.517496 mm**. These results validate the authored semi-diameters as a workable model; they do not turn those inferred values into patent-published dimensions.

The patent's design value **F/2.89** is retained as `nominalFno`, while the public lens designation remains **f/2.8**. At the inferred stop position, the paraxial entrance-pupil solution corresponding to F/2.89 requires stop semi-diameters of **7.8684, 8.9235, and 9.9039 mm** at the three modeled zoom states. Exact Snell tracing of the finite axial entrance-pupil edge reaches slightly larger stop heights of **7.9863, 9.1565, and 10.2788 mm**, quantifying pupil aberration rather than redefining the paraxial f-number. Both sets of values are computed consequences of the model, not source diaphragm measurements; the authored `STO.sd = 8.0 mm` is a rounded wide-state geometry aperture.

No cover glass, filter, dummy plane, flare-cutter plane, or mechanical component is present in the modeled prescription, and no omitted plate requires an air-equivalent rear-spacing correction.

## Sources and References

- Wataru Tatsuno, *Ultra Wide Angle Zoom Lens*, US 5,276,553 A, Nikon Corporation, granted January 4, 1994. Example 1, Fig. 1, Table 1, and claim 7 provide the prescription and design conditions.
- Nikon Download Center, distortion-control supported-lens list, which identifies the **AI AF Zoom-Nikkor 20-35mm f/2.8D IF** as a Nikon production lens: <https://downloadcenter.nikonimglib.com/en/download/fw/348.html>.
- Nikon, *AF Zoom-Nikkor 20-35mm f/2.8D IF* user manual, Nikon-produced documentation preserved by an archival manual mirror; used only for the 0.5 m production minimum-focus-distance metadata: <https://nikon.manymanuals.com/lenses/af-zoom-nikkor-20-35mm-f-2-8d-if/user-manual-27783>.
