## Patent Reference and Design Identification

**Patent:** US 2,645,156 A<br>
**Application serial:** 184,455<br>
**Priority:** 17 October 1949 (Switzerland)<br>
**Filed:** 12 September 1950<br>
**Granted:** 14 July 1953<br>
**Inventor:** Albrecht Wilhelm Tronnier<br>
**Assignee:** Voigtländer & Sohn Aktiengesellschaft<br>
**Title:** *Five-Lens Photographic Objective Comprising Three Members Separated by Air Spaces*<br>
**Embodiment analyzed:** Example 1

The prescription is the patent's sole worked numerical example, designated Example 1 in the project job card. The
patent normalizes the equivalent focal length to $F=1.0000$ and states that a 200 mm focal length was assumed for its
drawing. The prescribed radii, thicknesses, air spaces, and diaphragm coordinates are scaled to the 105 mm
normalization; this is equivalent to applying $s=105/200=0.525$ to the illustrated 200 mm dimensions. Refractive
indices and Abbe numbers are unchanged. The image-plane spacing is recomputed from the scaled prescription, and the
semi-diameters are independent modeling values because the patent publishes none. The example is entirely spherical,
so no aspheric coefficient transformation is required.

The fixed correlation to the Voigtländer Color-Heliar 105mm f/3.5 rests on four convergent points:

1. The patent is assigned to Voigtländer and names Albrecht Wilhelm Tronnier as inventor.
2. Example 1 is a five-element, three-group Heliar-type objective with two cemented outer members, a central negative
   singlet, and a published relative aperture of f/3.5.
3. Uniform scaling of the example to the marketed 105 mm focal length gives a computed design EFL of
   104.999455 mm without changing the optical proportions.
4. Period Voigtländer literature identifies the Bessa II as a 6×9 camera offered with a Color-Heliar 105mm f/3.5.

The period manufacturer literature establishes the production lens identity, format, focal length, aperture, and
camera association. It does not identify US 2,645,156 A or Example 1. The patent-to-production relationship is therefore
the fixed correlation selected for this model, not a claim of explicit manufacturer confirmation.

The marketed focal length remains 105 mm and the marketed aperture remains f/3.5. The exact modeled values are kept
separate: EFL 104.999455 mm and f/3.500000 from the authored prescription and stop.

## Optical Architecture

The design is a Heliar-type five-element objective arranged as three air-separated members:

- a positive cemented front doublet, D1;
- an air-spaced biconcave negative singlet, L3;
- a positive cemented rear doublet, D2, with the diaphragm in the air space immediately ahead of it.

The power sequence is positive–negative–positive by member. Both outer members contain a strong positive element and
a weaker negative cemented partner. Their cemented contact surfaces have converging effect, as required by the patent.
The central singlet supplies substantial negative standalone power, but it is placed behind the front positive member
so that the front-member-plus-central-member combination is only weakly negative in situ.

Independent first-order calculation gives cemented-member focal lengths of +50.69545 mm for D1,
−34.02993 mm for the central L3 member, and +64.25028 mm for D2. These are member values, not the standalone focal
lengths of the individual glasses. When D1, its following air space, and L3 are treated as the actual in-situ block, the
combined focal length is −295.52987 mm. This verifies the patent's description of a front-plus-central combination with
only low negative power despite the strong standalone power of L3.

The diaphragm position is not inferred from the drawing. The worked table divides the R5-to-R6 air space into
$b_1=0.04625F$ before the stop and $b_2=0.02554F$ after it. At the 105 mm scale, these become 4.85625 mm and
2.68170 mm. The modeled physical stop semi-diameter is 12.058083 mm, derived to reproduce the exact modeled f/3.5.

The lens is neither telephoto nor retrofocus under the project definitions. The first-surface-to-image distance is
118.907294 mm, greater than the 104.999455 mm EFL, while the 86.126294 mm back focal distance is shorter than the EFL.
Under the stated height/reduced-angle convention, the first principal plane lies 11.423715 mm to the image side of the
first surface, and the second principal plane lies 18.873161 mm to the object side of surface 8.

## Element-by-Element Analysis

### Front Cemented Member D1

#### L1 — Biconvex Positive

**nd = 1.65110, νd = 58.6. Glass:** `N-LAK7` (Schott catalog equivalent; production supplier unspecified).
**Standalone f = +37.90282 mm.**

L1 is the principal collecting component of the front member. Its relatively high index and crown-like dispersion
provide strong positive power while leaving the cemented interface available for chromatic correction. The patent
specifically requires the front converging lens to have a yellow-light refractive index distinctly above 1.63; the
published 1.65110 coordinate satisfies that condition.

The front surface is strongly curved and carries the largest authored semi-diameter in the model. Its inferred
18.65 mm semi-diameter is limited by positive edge thickness rather than by the obsolete radius-ratio rule. The
resulting L1 edge thickness is 0.297422 mm, and its maximum spherical rim-slope angle is 35.2059°.

#### L2 — Biconcave Negative

**nd = 1.60266, νd = 38.4. Glass:** `603384` flint class, legacy F5-family coordinates, vendor unresolved.
**Standalone f = −134.75641 mm.**

L2 is the negative cemented partner of L1. Its lower Abbe number supplies the principal achromatizing contrast at the
front cemented junction. L2 is weak in standalone power compared with L1, but its index and dispersion materially alter
the doublet's net power and chromatic balance.

The two elements together form D1 with a computed cemented focal length of +50.69545 mm. That net value must not be
confused with either standalone element focal length: cemented-interface refraction and the finite element thicknesses
are included in the D1 result.

### Central Member L3 — Biconcave Negative

**nd = 1.64282, νd = 47.9. Glass:** `643479` barium-flint class, legacy BAF9-family coordinates, vendor unresolved.
**Standalone f = −34.02993 mm.**

L3 is the strongest negative standalone element in the prescription. The patent requires a highly refractive
barium-flint with an Abbe number above 42 and deliberately unequal surface curvatures. The stored 1.64282 / 47.9 pair
meets those source conditions.

Its front radius is much weaker than its rear radius in magnitude. Using curvature magnitudes, the ratio
$|R_4/R_5|$ is 2.844694. This power distribution matches the patent's prescribed unequal-curvature condition and the
weakly divergent ray course it describes before the rear positive member.

L3 should not be described only by its −34.03 mm standalone focal length. After the positive D1 member and the
3.69705 mm intervening air space are included, the D1–L3 block has an in-situ focal length of −295.53 mm. The ray bundle
therefore reaches the rear positive member only weakly divergent rather than carrying the full isolated negative power
of L3.

### Rear Cemented Member D2

#### L4 — Plano-Concave Negative

**nd = 1.58241, νd = 40.6. Glass:** `LF5` (Schott catalog equivalent; production supplier unspecified).
**Standalone f = −58.04287 mm.**

L4 is the negative front component of the rear cemented member. Its front face is plane and lies immediately behind the
published diaphragm space. The element's lower index and lower Abbe number make it the dispersive partner for the much
stronger positive L5.

The patent imposes an index-selection condition in which L4 is lower in index than the arithmetic mean of L2 and L3.
The model gives 1.58241 for L4 versus 1.62274 for that mean, so the condition is satisfied.

#### L5 — Biconvex Positive

**nd = 1.69347, νd = 53.5. Glass:** `S-LAL13` (Ohara catalog equivalent; production supplier unspecified).
**Standalone f = +31.42210 mm.**

L5 is the strongest positive standalone element and supplies the final convergence toward the image plane. Its
refractive index exceeds both the patent's 1.675 threshold and the front positive element's index. The rear member's
cemented contact surface is converging and convex toward the diaphragm, matching the source description.

L4 and L5 form D2 with a computed cemented focal length of +64.25028 mm. As with D1, the net cemented value includes the
shared interface and element thicknesses; it is not the arithmetic sum of the standalone powers.

## Glass Identification and Selection

The patent supplies historical yellow-light refractive indices and Abbe numbers but does not identify a glass
manufacturer or modern catalog designation. Where the coordinates provide a close class-compatible match, the data
uses a catalog glass as a dispersion equivalent while retaining the patent's `nd` and `νd`. These labels do not identify
the production supplier or exact historical melt. Elements without a sufficiently close catalog match retain their
coordinate codes.

| Element | nd | νd | Stored identification | Source-described role |
|---|---:|---:|---|---|
| L1 | 1.65110 | 58.6 | `N-LAK7`, Schott catalog equivalent | High-index positive front component |
| L2 | 1.60266 | 38.4 | `603384`, flint class | Negative front-doublet partner |
| L3 | 1.64282 | 47.9 | `643479`, barium-flint class | High-index central negative element |
| L4 | 1.58241 | 40.6 | `LF5`, Schott catalog equivalent | Negative rear-doublet partner |
| L5 | 1.69347 | 53.5 | `S-LAL13`, Ohara catalog equivalent | Strong positive rear component |

The patent attributes improved lateral chromatic correction to the coordinated use of barium-crown and barium-flint
glasses and states that some embodiments can approach half-apochromatic or apochromatic correction. That is a patent
claim, not an independent classification of this model. Catalog-equivalent Sellmeier curves support modeled spectral
tracing for L1, L4, and L5, but do not establish the original melts; L2 and L3 remain coordinate-only. The data sets no
anomalous-partial-dispersion flag and does not label the design APO.

The published front and rear cemented-interface Abbe differences are 20.2 and 12.9. Their sum is 33.1, and the front-to-
rear ratio is 1.56589. These values satisfy the patent's dispersion-difference conditions while remaining insufficient,
by themselves, to determine higher-order partial-dispersion behavior.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`.

US 2,645,156 A publishes one infinity prescription. It provides no close-focus table, object-distance row, magnification
row, variable air spacing, moving-group statement, or reference-plane definition from which a focus state could be
solved. The data consequently contains no `var` entries and makes no claim that the patent prescription focuses by unit
movement, inner movement, or a floating mechanism.

The German Voigtländer Bessa II instruction booklet shows the meter scale extending to 1.0 m. The data retains
`closeFocusM: 1.0` as product metadata only. The 1.0 m value does not generate a modeled optical state and is not used
to infer internal spacing or lens extension.

## Conditional Expressions

The numerical example satisfies the patent conditions that apply to its power distribution and glass selection.

| Patent condition | Verified result | Status |
|---|---:|---|
| Front member focal length, 0.40F–0.60F | +0.482814F | Pass |
| Central member focal length, −0.44F–−0.22F | −0.324095F | Pass |
| Rear member focal length, 0.45F–0.75F | +0.611907F | Pass |
| Central curvature ratio, 2.38–3.43 | $|R_4/R_5|=2.844694$ | Pass |
| Curvature factor, 8.33–12.00 at f/3.5 | 9.956428 | Pass |
| Sum of cemented-interface ν differences > 27.5 | 33.1 | Pass |
| Front/rear ν-difference ratio, 1.05–2.05 | 1.565891 | Pass |
| L5 index > 1.675 | 1.69347 | Pass |
| L4 index < mean of L2 and L3 | 1.58241 < 1.62274 | Pass |
| Mean of L3 and L5 indices > L1 index | 1.668145 > 1.65110 | Pass |
| Rear L3-to-L5 axial distance > front L1-to-L3 distance | 0.09028F > 0.05370F | Pass |

One printed expression requires explicit source correction. The patent writes
$8.33 < (R_4/R_5)Z < 12.00$, but Example 1 tabulates $R_4<0$ and $R_5>0$. The literal signed quotient is therefore
negative and cannot satisfy the printed inequality. The surrounding prose and the patent's own reduction to a positive
2.38–3.43 curvature quotient require the magnitude $|R_4/R_5|$, equivalently $-R_4/R_5$ for this example. The data
preserves the published signed radii; only the condition check uses the necessary magnitude interpretation.

## Modeling Disclosures and Verification

The image plane is placed at the independently traced infinity back focal distance of 86.126294 mm from surface 8. The
patent's rounded scaled value is 86.1315 mm. Using the computed BFD keeps the final surface array internally consistent
with its 104.999455 mm EFL. A sequential height/reduced-angle trace and an independently assembled ABCD matrix agree
to machine precision for the paraxial system.

Surface semi-diameters are modeling values because the patent publishes none. They were derived from the exact f/3.5
stop and meridional ray envelopes over the canonical 6×9 format, then adjusted against the 600 dpi Figure 2 section.
The central member now uses 15.3 mm rims and the rear doublet 15.5 mm rims, better matching the drawing's compact rear
silhouette. Edge thickness, spherical rim slope, shared-gap sag clearance, and cemented-interface containment were
rechecked after the adjustment.

The 6×9 model uses the canonical 84 × 56 mm frame. Its 50.477718 mm half diagonal corresponds to a paraxial full field
of 51.3512°, within the patent's qualitative statement that the example covers an image field approaching 60°. The
model does not treat the patent's wording as an exact image-height specification.

The computed Petzval sum is +0.002584253 mm⁻¹. This is stored as a signed surface-by-surface sum of
$\phi/(n n')$; no field-curvature-radius sign is asserted beyond that convention.

No filter, sensor cover plate, dummy plane, flare-cutter plane, blocker, folded path, or mechanical component appears in
the worked example. None was added, and no omitted plate required an air-equivalent rear-spacing correction. The model
contains exactly one aperture-stop plane and no aspherical or diffractive surfaces.

## Sources

1. Albrecht Wilhelm Tronnier, *Five-Lens Photographic Objective Comprising Three Members Separated by Air Spaces*,
   US 2,645,156 A, filed 12 September 1950 and granted 14 July 1953; Figure 2 and the worked Example 1 table.
2. Period Voigtländer Bessa II catalog literature identifying the 6×9 camera and Color-Heliar 105mm f/3.5 option,
   reproduced in the Butkus camera-manual archive.
3. Period Voigtländer Bessa II instruction booklet describing the coupled rangefinder and 1.0 m native distance scale,
   reproduced in the Butkus camera-manual archive.
4. Hikari Glass Co., Ltd., *Optical Glass* catalog, 1 June 2025, and SCHOTT, *Optical Glass Datasheet Collection*,
   consulted only for legacy family-coordinate comparisons; neither source identifies the historical production melts.
