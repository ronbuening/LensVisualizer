# SIGMA 50mm f/1.2 DG DN | Art

## Patent Reference and Design Identification

**Patent:** JP 2025-124346 A  
**Application Number:** JP 2024-020335  
**Filed:** 2024-02-14  
**Published:** 2025-08-26  
**Inventor:** Yuki Ueda  
**Applicant:** Sigma Corporation  
**Title:** Optical System  
**Embodiment analyzed:** Numerical Example 1

The prescription is a construction correlation with the Sigma 50mm F1.2 DG DN | Art,
not manufacturer confirmation of the exact production prescription. Numerical Example 1,
its tables, and Figure 1 govern the optical model. Numerical Example 2 from the same
publication is a different design and is not included. [1]

The following evidence supports the correlation:

1. Both the selected example and the production specification have 17 elements in
   12 air-separated groups and four aspherical elements. The example has six
   aspherical surfaces, a distinct count from the number of aspherical elements.
2. The source uses two independently moving focus groups. Sigma describes a floating
   focus system with separate HLA drives for its two focus groups. The numerical
   group movements are established by the patent, not inferred from the motor type.
3. The native infinity design is 48.27 mm at F/1.24, close to the marketed 50 mm
   maximum-aperture F/1.2. Neither native value has been rescaled to the marketing name.
4. The published image semi-height is 21.63 mm. Sigma specifies a full-frame mirrorless
   product in L-Mount and Sony E-mount versions. The native full field is 47.90°,
   whereas the production specification gives 46.8°. No undocumented digital correction
   is assumed to explain that difference.
5. The application was filed shortly before the product announcement on 26 March 2024;
   Sigma announced release on 18 April 2024. Timing is supporting context, not proof
   that the tabulated radii or glass melts were used in production. [2,3]

**Model qualification.** This is a limited model with a fixed physical iris inferred
from infinity F/1.24. The near F/1.38 remains unreproduced. The inferred S21 clear
radius is 19.0 mm; other source radii, thicknesses, media and aspheres are unchanged.
The normal display fan has no first clipping in a cemented interface, but wider
physical-pupil samples still first clip at S14. Consequently, full-pupil performance is not certified.
These qualifications also limit finite-focus and off-axis performance interpretations.

## Optical Architecture

The source defines five functional groups, distinct from the 12 air-separated
components used for the physical construction count. G1, G2, G3 and G4 are positive
in the published grouping, while G5 is negative. G3 is almost afocal in net power;
its small positive residual does not imply that its individual elements are weak.
The aperture stop is surface 12, within G3. [1, ¶0051–0056]

| Functional group | Source surfaces | Elements | Computed standalone group EFL | Motion |
|---|---|---|---:|---|
| G1 | 1–4 | L1–L2 | +462.797588 mm | Fixed |
| G2 | 5A–7 | L3–L4 | +143.090579 mm | Objectward focus movement |
| G3 | 8–20, including STO | L5–L11 | +107776.270379 mm | Fixed |
| G4 | 21–25 | L12–L14 | +39.034015 mm | Objectward focus movement |
| G5 | 26–30A | L15–L17 | −57.371023 mm | Fixed |

The combination of a weak front group, a weak positive first focus group, substantial
positive and negative elements around the stop, a stronger positive second focus group,
and a negative final group is more informative than assigning a historical family
name without documentary support. The source attributes reduced focus breathing to
movement of the aspheric G2 group and distributes focusing between G2 and G4. [1, ¶0022–0023]

The independent paraxial calculation gives EFL 48.269732 mm at infinity and
44.690252 mm at the published near state. The first-vertex-to-image track is
123.3816 mm in both states. The source lists 123.38 mm; its optical track must not
be equated with the marketed barrel length measured from the mount. [1, pp.14–15; 2]

The five cemented pairs are L3/L4, L7/L8, L10/L11, L12/L13 and L15/L16.
Their computed net focal lengths are respectively +143.090579, +1943.448880,
−98.889686, +119.819099 and −89.957928 mm. These are composite powers in air,
not sums of the standalone focal lengths and not isolated in-situ aberration budgets.

## Element-by-Element Analysis

The focal lengths below are computed for each element alone in air using its two
vertex radii, center thickness and source d-line index. Cemented-interface refraction
in the complete lens is different because the adjoining medium is another glass.
Catalog labels denote coordinate equivalents; actual supplier and melt identities
are not established. Element types describe the vertex-form geometry, including
aspheric departures where present.

### L1 — Biconcave Negative

nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA equivalent). f = -75.791 mm.

L1 is the front negative member of G1. Its biconcave form is followed by the
positive L2 rather than forming a cemented pair. The patent explicitly identifies
this negative-positive construction. Their combined group is weakly positive even
though each element has appreciable standalone power. No individual aberration
correction is assigned to L1 solely from its negative power. [1, ¶0052]

### L2 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA equivalent). f = +67.815 mm.

L2 completes the fixed G1 pair. Its high source index permits positive power
with the listed curvatures, but the table does not identify a production glass supplier.
The long net focal length of G1 follows from the two elements and their separation;
it cannot be inferred from L2 alone. The TAFD55-W annotation is a catalog-coordinate
equivalent and resolves to the compatible TAFD55 curve in the current model. [1, ¶0052; 4]

### L3 — Biconvex Positive (1× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA equivalent). f = +76.308 mm.

L3 is the patent's G2asp element. Its object-side surface 5A is aspherical,
and its rear surface is cemented to L4 at surface 6. The source describes a peripheral
weakening of convex power for this aspheric element and connects its moving chief-ray
height to focus-breathing control. The calculated surface departure supports discussion
of the profile, but does not independently isolate its full-system aberration contribution.
[1, ¶0022–0023, ¶0040–0042, ¶0053]

### L4 — Biconcave Negative

nd = 1.59270, νd = 35.45. Glass: FF5 (HOYA equivalent). f = -158.898 mm.

L4 is the biconcave negative partner of L3. Together they form the positive
G2 focus group, which moves as one source-defined component. The disparate Abbe numbers
provide a chromatic degree of freedom, but neither the glass pairing nor its signs alone
prove an achromat or apochromat. The actual interface uses the source medium transition
from L3 to L4 rather than an intervening artificial air or cement layer. [1, ¶0053]

### L5 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA equivalent). f = +124.404 mm.

L5 is a positive meniscus with its concave side facing the object, at the
front of the fixed central group. It precedes the separate negative L6 and the stop.
Its source index matches that of L2, while the different radii and thickness give a
different standalone power. Equal glass coordinates do not imply equal optical roles.
[1, ¶0054]

### L6 — Biconcave Negative

nd = 1.59270, νd = 35.45. Glass: FF5 (HOYA equivalent). f = -51.958 mm.

L6 is the negative singlet immediately before the aperture region. Its strong
negative standalone power participates in the near cancellation of G3's net power.
The finite source geometry leaves this element and the stop fixed; it is not treated
as a floating or moving correction element. Its FF5 catalog equivalent does not identify
the manufacturer of the actual element. [1, ¶0054]

### L7 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA equivalent). f = -32.600 mm.

L7 is the negative front member of the first post-stop cemented pair.
Its rear surface 14 is the actual shared interface with L8. The pair's net positive
power is small compared with either member's standalone power. Wider physical-pupil
stress rays can first clip at this shared surface in the inferred-aperture model;
that limitation is retained and is not disguised as successful full-pupil transmission.
[1, ¶0054]

### L8 — Biconvex Positive

nd = 1.75500, νd = 52.32. Glass: TAC6L (HOYA equivalent). f = +34.467 mm.

L8 is the positive partner of L7. Its lower index and higher Abbe number contrast
with the denser negative partner, while the common curved interface is represented once.
The pair is one air-separated component, not two. The model's normal display-ray scope
and its wider physical-pupil stress scope are different; success of the former does
not resolve the latter's S14 clipping. [1, ¶0054]

### L9 — Biconvex Positive (2× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA equivalent). f = +58.219 mm.

L9 is the double-sided aspherical positive singlet at surfaces 16A and 17A.
It remains in fixed G3 and is distinct from the similarly indexed moving L3.
Both polynomial surfaces are retained through the published fourteenth order,
including explicit zero high-order coefficients. A coordinate-compatible low-softening
glass does not, by itself, establish the factory's asphere manufacturing process.
[1, ¶0054, numerical example 1]

### L10 — Positive Meniscus

nd = 1.98612, νd = 16.48. Glass: FDS16-W (HOYA equivalent). f = +58.937 mm.

L10 is the positive meniscus identified as Lp in the patent. It carries the
published partial dispersion PgF = 0.6656, and the source's conditions jointly govern
its anomalous partial dispersion and standalone focal-length/Abbe combination.
This is a high-index, low-Abbe material; it should not be relabeled as a low-dispersion
ED crown merely because it has positive anomalous partial dispersion. The patent's
stated chromatic rationale is distinguished from a demonstrated full-lens APO result.
[1, ¶0024–0029, ¶0054]

### L11 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA equivalent). f = -36.986 mm.

L11 is the biconcave negative partner cemented to L10. The two-element
component has negative net power, even though L10 is a positive lens meeting the Lp
conditions. That distinction is important: the source condition uses Lp alone,
not the focal length of the cemented pair. The shared interface remains a single
surface with the following glass's refractive index. [1, ¶0024, ¶0054]

### L12 — Biconvex Positive

nd = 1.75500, νd = 52.32. Glass: TAC6L (HOYA equivalent). f = +38.074 mm.

L12 begins G4, the second positive focus group. It is cemented to negative L13
and followed closely by aspheric L14. The inferred clear radius at its front surface
S21 is 19.0 mm, an inferred modeling dimension rather than a tabulated value.
That inferred radius clears the tested normal axial fan at the near positions;
it is not a patent-published dimension or evidence of unrestricted pupil clearance.
[1, ¶0055]

### L13 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA equivalent). f = -52.709 mm.

L13 is the negative partner of L12. The computed pair is positive, and adding
L14 makes G4 more strongly converging. The patent requires both positive and negative
power within this moving group and discusses the effect on focus-dependent chromatic
variation. The analysis retains that source rationale without assigning an independently
measured chromatic correction to L13 alone. [1, ¶0023, ¶0030–0035, ¶0055]

### L14 — Biconvex Positive (1× Asph)

nd = 1.80610, νd = 40.73. Glass: NBFD13 (HOYA equivalent). f = +53.567 mm.

L14 is the positive aspheric singlet at the rear of G4. Its object-side surface
24A has the published negative A4 and additional A6/A8 terms; higher tabulated terms
are explicitly zero. It travels with L12 and L13 in the published focus states.
No separate motion, stabilization displacement or focus-iris coupling is inferred
from this element's position. [1, ¶0055]

### L15 — Biconvex Positive

nd = 2.00069, νd = 25.46. Glass: TAFD40L-W (HOYA equivalent). f = +53.976 mm.

L15 is the positive front member of the final cemented pair. It is followed
by negative L16, so the component's net power is negative despite the front member's
high index and positive standalone power. This pair belongs to fixed G5, downstream
of both moving focus groups. The catalog-equivalent glass supplies a dispersion proxy,
not confirmed melt information. [1, ¶0056]

### L16 — Biconcave Negative

nd = 1.61396, νd = 44.29. Glass: LAF45 (HOYA equivalent). f = -32.818 mm.

L16 is the negative rear member of that pair. Its source coordinate matches
HOYA LAF45 in the primary catalog, and the application's catalog resolves that name
to the vendor LAF45 curve (nd 1.61396, νd 44.29), so its chromatic treatment uses
catalog Sellmeier data. The source coordinate is preserved unchanged. Its rear surface 28 forms one boundary of the patent's air lens.
The inferred clear radius of surface 28 is 14.7 mm, the height at which the drawn
concave bowl ends in Figure 1; the flat annulus drawn outside it is not modeled.
[1, ¶0036–0039, ¶0056, Figure 1; 4]

### L17 — Biconcave Negative (2× Asph)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA equivalent). f = -165.838 mm.

L17 is the final negative, double-sided aspherical element at 29A and 30A.
Together with the preceding air gap it participates in the rear-group arrangement
that the patent associates with field-curvature and distortion correction.
The clear radii are inferred as 15.7 mm. Over the 14.7 mm band shared with S28, the
S28–S29A sag intrusion is 4.851 mm, inside the unchanged model policy's 5.634 mm
allowance for the 6.26 mm gap. The asphere profile and source radii remain exact;
no aperture estimate is presented as a factory tolerance. [1, ¶0049, ¶0056]

## Glass Identification and Selection

The 11 distinct source coordinates were compared against complete primary HOYA and
OHARA catalog files. The following labels are coordinate equivalents, not identified
factory suppliers. Retaining OHARA's L-LAH91 prefix is important: an S-prefixed family
member cannot be substituted simply because part of the name resembles it. [4,5]

| Source nd | Source νd | Catalog-coordinate equivalent | Elements |
|---:|---:|---|---|
| 1.51742 | 52.15 | E-CF6 (HOYA equivalent) | L1 |
| 1.59270 | 35.45 | FF5 (HOYA equivalent) | L4, L6 |
| 1.61396 | 44.29 | LAF45 (HOYA equivalent) | L16 |
| 1.75500 | 52.32 | TAC6L (HOYA equivalent) | L8, L12 |
| 1.76450 | 49.09 | L-LAH91 (OHARA equivalent) | L3, L9 |
| 1.80610 | 40.73 | NBFD13 (HOYA equivalent) | L14 |
| 1.85135 | 40.10 | M-TAFD305 (HOYA equivalent) | L17 |
| 1.85451 | 25.15 | NBFD25 (HOYA equivalent) | L7, L11, L13 |
| 1.98612 | 16.48 | FDS16-W (HOYA equivalent) | L10 |
| 2.00069 | 25.46 | TAFD40L-W (HOYA equivalent) | L15 |
| 2.00100 | 29.13 | TAFD55-W (HOYA equivalent) | L2, L5 |

Most selected coordinates coincide with the catalog entries at the stated precision.
L-LAH91 has catalog νd 49.096913 versus source 49.09; that residual is retained rather
than silently replacing the source Abbe number. Relevant coefficients are evaluated
at the catalog spectral wavelengths as a separate dispersion round-trip check.

Sigma's specification lists four aspherical elements and no SLD or FLD element. The
example agrees: its highest Abbe number is 52.32 (L8 and L12), no element has a
fluorophosphate or other extra-low-dispersion coordinate, and the only material the
patent treats as anomalous is the dense flint of L10. The patent states the contrast
itself, naming HOYA FCD1 as the usual low-dispersion choice for a positive lens and
its low index as the reason a high-index Lp material is used instead. The partial
dispersion ratio is printed for L10 alone; no other element carries a published PgF.
[1, ¶0027; 2]

The source defines anomalous partial dispersion with a different normal line from
the model's chromatic implementation. For L10:

- Source PgF = 0.6656, source νd = 16.48
- Patent deviation: PgF − 0.64833 + 0.00180νd = 0.046934
- Model deviation: PgF − 0.6438 + 0.001682νd = 0.04951936

The last value is stored as dPgF so that the model preserves the published PgF.
Using the patent deviation directly in the model would change the implied g-line
partial dispersion. No separately measured nC, nF or ng is claimed. Catalog curves
are proxies for coordinate-equivalent glasses. The partial-dispersion
condition and the patent's chromatic design discussion do not establish complete
apochromatic performance for the modeled aperture and all focus states. [1, ¶0019–0029]

## Focus Mechanism

The patent's two moving groups are G2, surfaces 5A–7, and G4, surfaces 21–25.
Both move toward the object, by different amounts. G1, G3, G5 and the image plane
remain fixed in the two published configurations. Sigma's dual-HLA floating-focus
statement supports the broad mechanical correlation, but does not establish that
its production controller follows an interpolated version of these two tables. [1, ¶0051; 2]

| Variable interval | Infinity | Published near state | Change |
|---|---:|---:|---:|
| d4 | 9.3500 mm | 2.7500 mm | −6.6000 mm |
| d7 | 4.3100 mm | 10.9100 mm | +6.6000 mm |
| d20 | 6.6900 mm | 2.5600 mm | −4.1300 mm |
| d25 | 2.1500 mm | 6.2800 mm | +4.1300 mm |
| BF | 17.4116 mm | 17.4116 mm | 0.0000 mm |

The equal-and-opposite changes preserve each surrounding fixed group and the total
track. The finite first-vertex object distance is 271.3770 mm. The corresponding
object-to-image sum is 394.7586 mm, represented by the rounded source label “395 mm.”
The source EFL falls from 48.269732 mm to 44.690252 mm while the printed full field
changes from 47.90° to 45.39°. A smaller focal length at finite conjugates does not
by itself determine the observed field because the object and pupil geometry also change.

Both published states are retained. Intermediate slider states use linear interpolation
of the four gaps and are modeling approximations, not published mechanical states.
The finite-conjugate record certifies only the source near station for selection by
finite-distance analysis; it does not certify a result of finite MTF computation.
The marketed minimum distance of 0.4 m is not used to rewrite the source d0.

The fixed physical iris is inferred from infinity F/1.24 and remains fixed with focus.
The near F/1.38 remains unreproduced; no focus-dependent iris schedule is invented.
The detailed differences between an iris-target diagnostic, a transmitted marginal
ray and a runtime effective-f-number estimate are described below.

## Aspherical Surfaces

The source equation is

z(h) = (h²/R) / [1 + √(1 − (1 + K)(h/R)²)] + Σ Ap hᵖ,

with p = 4, 6, 8, 10, 12, 14. Lengths are millimetres, so Ap has units mm^(1−p).
All six source conic constants K are zero, with no alternate conic conversion.
The coefficients below retain the publication's signs and precision. [1, printed pp.14–15]

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 5A | L3 | 0.00000 | -2.17740E-06 | -8.59080E-10 | -3.99910E-13 | 4.24190E-16 | 0.00000E+00 | 0.00000E+00 |
| 16A | L9 | 0.00000 | -6.48260E-07 | 7.12940E-10 | -6.61370E-13 | 4.59670E-16 | 0.00000E+00 | 0.00000E+00 |
| 17A | L9 | 0.00000 | -4.35970E-07 | 3.04410E-10 | -7.50130E-13 | 5.39280E-16 | 0.00000E+00 | 0.00000E+00 |
| 24A | L14 | 0.00000 | -2.75230E-06 | -8.33840E-10 | 3.37100E-13 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |
| 29A | L17 | 0.00000 | 4.09140E-06 | -2.83210E-08 | 1.79340E-10 | -7.13360E-13 | 1.30860E-15 | -8.76200E-19 |
| 30A | L17 | 0.00000 | 1.05910E-05 | -2.73950E-08 | 2.21150E-10 | -8.81720E-13 | 1.85370E-15 | -1.57580E-18 |

Surface 5A has a negative leading fourth-order term. Over its modeled aperture the
polynomial lowers the sag relative to its positive-radius sphere, consistent with
the source's description of weakened peripheral convex power in G2asp. Both 16A
and 17A have negative net polynomial departures at their modeled rims, although
their curvature signs differ. Surface 24A similarly has a negative net departure
on its positive-radius front face. Positive leading A4 values on 29A and 30A do
not make the complete L17 positive; its paraxial element power remains negative.
The full polynomial, not the sign of a single coefficient, determines the outer profile.

| Surface | Modeled semi-diameter | Polynomial departure from base sphere at that radius |
|---|---:|---:|
| 5A | 21.0 mm | -505.193 µm |
| 16A | 21.3 mm | -86.041 µm |
| 17A | 21.3 mm | -82.726 µm |
| 24A | 18.4 mm | -343.406 µm |
| 29A | 15.7 mm | +82.437 µm |
| 30A | 15.7 mm | +575.931 µm |

These departures are calculated at inferred clear apertures, not at published physical
lens diameters. They are geometric sag differences, not direct wavefront errors or
manufacturing tolerances. All published coefficient orders are retained without refitting.
The patent and supplier-equivalent coordinates do not establish a specific factory
molding or polishing process for each of the four aspherical elements.

## Conditional Expressions

The following values use the selected source prescription and the patent's definitions.
G2 and G4 powers are computed as complete groups; Lp is L10 considered alone in air.
The final-group magnification is an in-situ paraxial ratio and is not the group's
standalone focal length. [1, ¶0024, ¶0030, ¶0036, ¶0040; condition table, printed p.22]

| Condition | Source expression and required range | Recomputed | Printed |
|---|---|---:|---:|
| 1 | 1.10 < βG5 < 1.60 | 1.355052894 | 1.36 |
| 2 | 0.021 < Lp ΔPgF < 0.055 | 0.046934000 | 0.047 |
| 3 | 1/(Lp f × Lp νd) < 0.0020 | 0.001029563 | 0.0010 |
| 4 | 1.0 < f2/f4 < 6.0 | 3.665792012 | 3.7 |
| 5 | (f4/νd,G4-positive-average)/f < 0.050 | 0.017381288 | 0.017 |
| 6 | −1.00 < (R2air+R1air)/(R2air−R1air) < 1.00 | 0.840773125 | 0.84 |
| 7 | 0.005 < abs((HG2asp,near−HG2asp,inf)/f2) < 0.050 | 0.023271526 | 0.023 |

All seven inequalities hold, and the recomputed condition values fall inside the
printed rounding intervals. For condition 7, the chief rays are solved through the
stop center at the source fields; their heights at 5A are computed independently
of the condition's expected value. This is distinct from calibrating an iris diameter
to a target f-number.

Conditions 2 and 3 describe the selected high-index positive Lp's chromatic contribution
as framed by the patent. Conditions 4 and 5 distribute focusing power and constrain
the positive glasses within G4. The model reproduces the numerical relationships,
but that alone does not reproduce the source's complete aberration plots.

### Rear air lens

The air gap between S28 and S29A is the patent's AL. Its object-side radius is
+25.9500 mm and its image-side radius is −300.0000 mm. The resulting shape factor
is +0.840773125. The patent associates this biconvex air region's negative refractive
action with Petzval and distortion management. [1, ¶0036–0039, ¶0056]

The complete source surface-by-surface Petzval sum is +0.001808785 mm⁻¹.
That first-order sum does not describe the entire finite-field focal surface:
astigmatism, aspheres, pupil location and higher-order effects also matter.
No field-flatness performance claim is inferred from the sum alone.

## Model Limits and Verification

### Rounded source values

The selected infinity paraxial BF is 17.412419 mm rather than the printed 17.4116 mm.
The near conjugate leaves approximately +0.000936 mm paraxial image defocus.
Those raw strict comparisons remain unreproduced, and the source image plane stays fixed.
Their scale is consistent with aggregate prescription rounding; the source is not edited.

The nearly afocal central group particularly amplifies small power changes when expressed
as a focal length. Its computed +107776.270379 mm does not reproduce the printed
+103398.14 mm. The power difference is approximately −3.928736×10⁻⁷ mm⁻¹,
within a parameter half-last-digit sensitivity estimate of 1.136844×10⁻⁶ mm⁻¹.
This is a supported rounding explanation, not knowledge of the unrounded prescription.
The smaller G1 printed-EFL discrepancy is retained on the same basis.

### Aperture, transmission and the near f-number

At infinity, a 19.463602 mm parallel launch radius, derived from EFL/(2×1.24),
traces to an inferred physical iris radius of 18.031829 mm. Agreement at this
calibrated state is not independent evidence of a measured diaphragm diameter.

At the near state, the ray aimed at that iris rim first clips at S16A after passing
the stop. A diagnostic continuation would yield a cone equivalent F/1.270855;
that post-clip continuation is not a transmitted working aperture. With the final
inferred clear apertures, the transmitted axial boundary is instead limited by S21
and gives an NA-equivalent F/1.300560. Both quantities depend on inferred apertures.

The runtime effective-f-number estimate is F/1.366801. It applies an approximate
magnification correction with the infinity pupil ratio, so it is not the exact
finite-source image cone. It also does not round to the source F/1.38. A solved
16.520378 mm iris radius would meet that exact cone target, but no such iris setting
or focus-dependent law is published or implemented. The near F/1.38 remains unreproduced.

### Normal fan versus wider physical pupil

The current normal display-ray calculation uses a focus-dependent entrance pupil and
focus tracking. Its pupil radius at the open setting is approximately 19.834635 mm
at infinity and 21.057578 mm near; these differ from the exact calibration launch radius.
The inferred S21 radius of 19.0 mm clears the tested axial normal fan at the near positions.

Across 21 focus positions and all nine aperture choices, the default tracking calculation
contains 2,079 rays. There are 62 externally clipped off-axis rays, no axial clips and
no first clips at a cemented interface. A separate parallel-control calculation has
44 external clips and likewise no axial or first-cement clips. The normal off-axis
fan was explicitly enabled; this does not describe every possible viewing state.

Separate physical-source endpoint sampling uses 81 iris targets at five field fractions,
or 405 rays per endpoint. Wider pupil samples retain 7 first-cement clips at S14 at
infinity and 10 at the near state. These failures are not relabeled as successful
transmission because the normal fan passes. Thus full-pupil performance is not certified,
and there is no claim covering every sagittal direction, pupil point or intermediate state.

The model's surfaces pass the current geometry rules and sampled render diagnostics
without hidden trim. A module-level diagnostic is distinct from a complete rendered
application or an independent measurement of factory vignetting. The limitations above
bound any use of this prescription for finite-focus, chromatic or off-axis interpretation.

## Sources

1. Japan Patent Office, **JP 2025-124346 A**, “Optical System,” 26 August 2025.
   Numerical Example 1: printed pp.14–15 (PDF pp.15–16); condition table printed p.22
   (PDF p.23); Figure 1 printed p.23 (PDF p.24). Definitions and design discussion:
   ¶0019–0049; selected construction: ¶0051–0056. Unchanged publication with PAJ
   abstract: https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025124346A
2. Sigma Corporation, **50mm F1.2 DG DN | Art**, product specification and features,
   accessed 4 October 2026: https://www.sigma-global.com/en/lenses/a024_50_12/
3. Sigma Corporation, **50mm F1.2 DG DN | Art announcement and release date**,
   26 March 2024: https://www.sigma-global.com/jp/news/2024/03/26/010310/
4. HOYA, **Optical Glass Catalog, 7 July 2026, including obsolete glasses**,
   primary AGF and supplier dispersion coefficients:
   https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf
5. OHARA, **All-products optical glass catalog, 1 July 2026**, primary AGF,
   including L-LAH91: https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip
