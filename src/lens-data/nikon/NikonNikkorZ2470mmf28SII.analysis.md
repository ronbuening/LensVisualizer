## Patent Reference and Design Identification

**Patent:** WO 2024/214585 A1  
**Application Number:** PCT/JP2024/013456  
**Filed:** 2024-04-01  
**Published:** 2024-10-17  
**Priority:** JP 2023-065718, 2023-04-13  
**Inventor:** Fumiaki Ohtake  
**Applicant:** Nikon Corporation  
**Title:** Variable magnification optical system, optical device, and method for manufacturing variable magnification optical system  
**Embodiment analyzed:** Example 2, Table 2, Figure 3

This model transcribes the native numerical example in the original Japanese international publication.
It is associated with the NIKKOR Z 24-70mm f/2.8 S II by convergent construction evidence.
The association does not establish that the patent gives the exact manufactured prescription.
Neither Nikon's production glass suppliers nor the manufacturing processes of the individual elements are identified.

The principal evidence is as follows:

1. Example 2 contains fourteen physical elements in ten air-separated optical components.
   Nikon publishes fourteen elements in ten groups for the S II.
   The patent's seven functional groups are motion groups and must not replace that construction count.
2. The four cemented pairs are L2/L3, L4/L5, L7/L8 and L11/L12.
   The front singlet and doublet, the separate pre-stop L6, the two post-stop singlets,
   the rear doublet and the final two menisci agree with Nikon's construction drawing.
3. The five aspheric surfaces occupy three elements: L1, L13 and L14.
   Those three positions agree with the manufacturer's aspheric-element markings.
4. The source is a full-format standard zoom with printed endpoint focal lengths of 24.70 and 67.87 mm,
   endpoint f-number 2.91, and maximum image height 21.70 mm.
   These are design quantities. The product is marketed as 24-70mm f/2.8.
5. The source has two independently moving rear positive focusing groups.
   Nikon describes the product as a multi-focus, internal-focus design.

The example selection is also discriminating among the patent's six embodiments.
Examples 1, 4 and 6 have thirteen elements; Example 3 has a different cemented topology.
Example 5 has fourteen elements in ten components but adds a final positive lens that is absent from the production drawing.
The selected Example 2 has the matching separate pre-stop singlet and rear negative meniscus termination.
These comparisons qualify the association; they do not convert a patent example into a production certificate.

Nikon lists two ED lenses in the production construction, at positions corresponding to L8 and L11.
The source numeric media are retained independently of that marketing classification.
The 142 mm production mount-to-front length and the patent's 154.46 mm optical track have different endpoints.
They are not a discrepancy to be removed by rescaling the prescription.
The manufacturer's minimum-focus distances vary from 0.24 to 0.33 m; they are separate from the patent's near-state label.

## Optical Architecture

The functional power sequence is negative-positive-positive-negative-positive-positive-negative.
G1 is fixed relative to the image during zooming; G2 through G7 move toward the object from wide to tele.
G5 and G6 provide the two-group focusing motion (¶0174-0176).
The numerical model retains every native surface, including the stop at source surface 14.
It has twenty-four refracting surfaces and one stop plane.
No unprescribed sensor-cover plate, inactive plane, synthetic cement or mechanical component is added.

| Functional group | Elements | Calculated focal length in air (mm) | Source role |
|---|---|---:|---|
| G1 | L1-L3 | -47.927 | Fixed negative front group |
| G2 | L4-L5 | +146.660 | Positive zoom group |
| G3 | L6-L8 | +56.680 | Positive zoom group |
| G4 | Stop, L9-L10 | -223.523 | Stop-bearing negative group |
| G5 | L11-L12 | +82.731 | First positive focusing group |
| G6 | L13 | +124.599 | Second positive focusing group |
| G7 | L14 | -57.500 | Rear negative zoom group |

The focal lengths above are isolated group powers with air on both sides.
They are not additive focal-length contributions to the complete system.
The negative G4 is made from a strong negative singlet followed by a positive singlet.
The patent links the powers of G1 and G4 and the motion of G4 and G7 through its conditional expressions.
The moving rear assemblies redistribute power and conjugates while the front group remains fixed.

The architecture should not be labeled telephoto merely because the zoom has a tele end.
At infinity the optical track exceeds the effective focal length at every tabulated station.
Nor does the source meet the strict back-focus-greater-than-EFL criterion for a retrofocus description.
The negative-front layout alone does not establish either ratio-based classification.

The model is unscaled.
The native final glass-to-image gap remains 11.855, 22.479 or 29.495 mm according to zoom station.
The printed track is nearly constant; sub-0.01 mm table-rounding differences are retained.

## Element-by-Element Analysis

All focal lengths in the first lines below are calculated standalone thick-element values in air.
For elements in cemented pairs, they are deliberately distinct from the component's net power and in-situ action.
Glass names are catalog-compatible inferences from the published nd/νd pairs, not chemical analyses or supplier identifications.
Source indices and Abbe numbers remain those of Table 2.

### L1 — Negative Meniscus, convex to object

nd = 1.69343, νd = 53.30. Glass: Q-LAK53S (catalog-compatible inference; patent supplier unspecified). f = -52.722 mm.

Both bounding surfaces are aspherical. The source identifies L1 as the object-facing negative meniscus of G1 (¶0166).
Its negative power forms part of the fixed front group, while the two surfaces supply independent higher-order shape terms.
The front group remains fixed relative to the image during zoom; no independent movement is assigned to L1.
The exceptionally steep rear profile is evaluated using its native conic and polynomial, rather than a spherical substitute.

### L2 — Biconcave Negative

nd = 1.59349, νd = 67.00. Glass: J-PSKH4 (catalog-compatible inference; patent supplier unspecified). f = -66.062 mm.

The source describes L2 as biconcave and cements it to L3 (¶0166).
Its comparatively low dispersion is paired with the higher-index, more dispersive positive L3.
That pairing is consistent with chromatic power balancing, but the prescription alone does not isolate each element's aberration contribution.
The common surface 4 is a glass-to-glass refraction, not an air gap.

### L3 — Positive Meniscus, convex to object

nd = 1.85451, νd = 25.15. Glass: NBFD25 (catalog-compatible inference; patent supplier unspecified). f = +70.994 mm.

L3 completes the net-negative G1 cemented component.
The source describes a positive meniscus with the convex side toward the object (¶0166).
Its positive isolated power partially offsets L2 within the cemented assembly.
The model retains the source's nd and νd; the NBFD25 label is a coordinate-exact catalog equivalent used for dispersion, not a supplier claim.

### L4 — Biconvex Positive

nd = 1.80610, νd = 40.97. Glass: J-LASF03 (catalog-compatible inference; patent supplier unspecified). f = +51.452 mm.

L4 is the positive member of G2's cemented doublet (¶0167).
The group moves objectward during the native wide-to-tele transition.
The positive and negative member powers combine into a much weaker positive component than either standalone magnitude suggests.
No distinct focusing movement is assigned to this group.

### L5 — Biconcave Negative

nd = 1.84666, νd = 23.80. Glass: J-SF03 (catalog-compatible inference; patent supplier unspecified). f = -75.872 mm.

The biconcave L5 is cemented to L4 at source surface 7.
Its lower Abbe number provides a dispersive partner to L4.
The net-positive group role is established by the calculated doublet power, not inferred from L4 alone.
The common interface uses L5's medium and element ownership in the surface table.

### L6 — Positive Meniscus, convex to object

nd = 1.59349, νd = 67.00. Glass: J-PSKH4 (catalog-compatible inference; patent supplier unspecified). f = +131.903 mm.

The source explicitly includes this separate positive meniscus ahead of the L7/L8 doublet (¶0168).
Its presence distinguishes Example 2 from the closely related Example 3 topology.
L6 belongs to G3 and shares its zoom translation; it is not an independent focusing element.
The same nd/νd pair also appears at L2 and L11, without establishing common manufacturing stock.

### L7 — Negative Meniscus, convex to object

nd = 1.85451, νd = 25.15. Glass: NBFD25 (catalog-compatible inference; patent supplier unspecified). f = -96.841 mm.

L7 is the negative meniscus member of G3's cemented positive component (¶0168).
Its front and cemented radii are both positive, but the curvature difference makes the standalone element negative.
The relatively low Abbe number contrasts with the low-dispersion positive L8.
No generic bonding layer is inserted at source surface 12.

### L8 — Biconvex Positive

nd = 1.49782, νd = 82.57. Glass: J-FKH1 (catalog-compatible inference; patent supplier unspecified). f = +48.237 mm.

The low-index, high-Abbe positive L8 completes the G3 cemented component.
Its source pair matches the public coordinates of Hikari J-FKH1, and the model uses that catalog curve for dispersion.
Compatibility is not proof of an actual glass identity; the stored nd and νd remain the patent's.
Nikon's production drawing marks the corresponding position as ED; the patent's numeric medium remains the governing input.
L8 therefore carries an inferred anomalous-dispersion display tag, not a patent designation.

### L9 — Biconcave Negative

nd = 1.85883, νd = 30.00. Glass: NBFD30 (catalog-compatible inference; patent supplier unspecified). f = -28.533 mm.

L9 is the strong negative singlet immediately behind the stop in G4 (¶0169).
The stop has a separate source plane and a 3.970 mm spacing to L9's front surface.
The following positive L10 reduces the net negative group power.
The source does not tabulate the physical iris diameter or L9's clear aperture.

### L10 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (catalog-compatible inference; patent supplier unspecified). f = +34.947 mm.

L10 is the positive singlet of the stop-bearing negative group.
Paragraph 0176 identifies it as the positive lens used in both partial-dispersion conditions (3-1) and (3-2).
Unlike the other media, it therefore carries a source-derived partial-dispersion constraint in addition to nd and νd.
The mapped dPgF value is discussed below; it does not establish the complete system's secondary-spectrum performance.

### L11 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: J-PSKH4 (catalog-compatible inference; patent supplier unspecified). f = +28.127 mm.

L11 is the positive member of the first focusing group G5 (¶0170).
Together with L12 it translates toward the object when changing from infinity to the published near state.
The production drawing marks this position as ED, although the same patent nd/νd pair is used in other positions.
An ED marketing label cannot by itself determine the source material's supplier or partial dispersion.
L11 carries an inferred display tag for its position; L2 and L6, which share the pair, do not.

### L12 — Negative Meniscus, concave to object

nd = 1.77047, νd = 29.74. Glass: NBFD29 (catalog-compatible inference; patent supplier unspecified). f = -41.695 mm.

The negative, object-concave meniscus L12 is cemented to L11.
It reduces the stronger positive standalone power of L11 to the net positive power of G5.
The group moves as one component; its internal thickness and common interface are unchanged in every native state.
Its NBFD29 label follows from the patent's nd/νd pair alone; the third-party CODE V assignment was not imported.

### L13 — Positive Meniscus, concave to object

nd = 1.62291, νd = 58.30. Glass: Q-SK15S (catalog-compatible inference; patent supplier unspecified). f = +124.599 mm.

L13 is a separate positive meniscus with both surfaces aspherical (¶0171).
It forms G6, the second positive focusing group, and moves independently of the G5 doublet.
The two aspheres are particularly relevant to keeping the authored shape distinct from a spherical meniscus.
The exact mechanical trajectory between the two published focus endpoints is not supplied.

### L14 — Negative Meniscus, concave to object

nd = 1.51680, νd = 64.13. Glass: J-BK7A (catalog-compatible inference; patent supplier unspecified). f = -57.500 mm.

L14 is the rear negative meniscus and forms G7 (¶0172).
Its exit surface 25 is aspherical; the following native D25 is the complete final glass-to-image gap.
G7 translates during zoom and is stationary between infinity and the published near row to the source table's rounding precision at a fixed zoom station.
No third-party rear plate is attached to this element in the source-first model.

The calculated cemented-component focal lengths are distinct from the individual numbers above.
The diagram brackets the four cemented components as D1 to D4, front to rear; the patent does not name them.

| Cemented component | Diagram bracket | Net focal length in air (mm) |
|---|---|---:|
| L2/L3 | D1 | -789.174 |
| L4/L5 | D2 | +146.660 |
| L7/L8 | D3 | +95.074 |
| L11/L12 | D4 | +82.731 |

## Glass Identification and Selection

The fourteen elements use eleven distinct published nd/νd pairs.
The source does not name catalog glasses or suppliers.
Every element carries the name of a catalog glass whose coordinates equal the patent pair.
Those names are catalog-compatible inferences and evidence of compatibility only, not supplier identifications.
L1, L4 and L13 use the HIKARI rows Q-LAK53S, J-LASF03 and Q-SK15S, which list exactly those three coordinates.
The candidate list is illustrative rather than an exhaustive claim about historical melts.
The approximate HOYA/OHARA alternatives for L1, L4 and L13 remain compatible comparisons, not adopted media.

| Source nd / νd | Elements | Model label | Compatible primary-catalog example | Difference: catalog minus source |
|---|---|---|---|---|
| 1.69343 / 53.30 | L1 | Q-LAK53S | Q-LAK53S (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.59349 / 67.00 | L2, L6, L11 | J-PSKH4 | J-PSKH4 (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.85451 / 25.15 | L3, L7 | NBFD25 | NBFD25 (HOYA) | Δn +0.000000; Δν +0.000 |
| 1.80610 / 40.97 | L4 | J-LASF03 | J-LASF03 (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.84666 / 23.80 | L5 | J-SF03 | J-SF03 (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.49782 / 82.57 | L8 | J-FKH1 | J-FKH1 (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.85883 / 30.00 | L9 | NBFD30 | NBFD30 (HOYA) | Δn +0.000000; Δν +0.000 |
| 1.92286 / 20.88 | L10 | E-FDS1 | E-FDS1 (HOYA); N-SF66 (Schott) shares the pair | Δn +0.000000; Δν +0.000 |
| 1.77047 / 29.74 | L12 | NBFD29 | NBFD29 (HOYA) | Δn +0.000000; Δν +0.000 |
| 1.62291 / 58.30 | L13 | Q-SK15S | Q-SK15S (Hikari) | Δn +0.000000; Δν +0.000 |
| 1.51680 / 64.13 | L14 | J-BK7A | J-BK7A (Hikari) | Δn +0.000000; Δν +0.010 |

Direct checks included HOYA's July 2026 catalog, OHARA's July 2026 catalog and SUMITA's August 2026 catalog,
with named Nikon/Hikari, SCHOTT and CDGM material comparisons.
OHARA S-LAL13 and L-LAL13, and S-LAH53 and L-LAH53, remain different entries.
A low-softening-temperature L-prefix glass is not silently substituted for an S-prefix glass with similar coordinates.
The patent does not establish whether its aspheric elements were molded, polished or made by another process.

The numerical model resolves all fourteen labels to catalog dispersion curves in the project glass catalog.
Each curve reproduces the patent nd to within 5×10⁻⁶ and νd to within 0.01; the stored nd and νd remain the patent's.
A catalog curve is a dispersion proxy for a coordinate-equal glass, not a production-glass claim.
Q-LAK53S and Q-SK15S are HIKARI's precision-molding grades; using their curves does not assert how L1 or L13 was made.
Consequently, simulated chromatic behavior remains an approximation to the source media.

For L10, the source conditional table gives the rounded quantity
PgF − 0.64435 + 0.00168νd = 0.030.
At νd = 20.88 this implies PgF = 0.6392716 by arithmetic.
The application's normal line is 0.6438 − 0.001682νd, giving dPgF = 0.03059176.
The extra digits are computational digits: the source's three-decimal condition supports only about ±0.00051 accuracy.
With the E-FDS1 label resolved, the model takes L10's C, d and F indices from the catalog curve and rebuilds the g-line index from this stored dPgF.
The catalog E-FDS1 curve by itself evaluates the patent expression at 0.0297, consistent with the tabulated 0.030.
This transformation supplies a limited partial-dispersion constraint, not measured nC, nF or ng.
The remaining media have no analogous source spectral data in this example.
No claim of system-level apochromatism follows from these inputs.

## Focus and Zoom Mechanism

The native focus status is published: all three infinity rows and all three near rows are retained.
G5 and G6 move independently toward the object (¶0175).
The table labels the near state as “near-distance (165 mm)” but does not explicitly identify its distance reference.
Independent first-order conjugate calculations at all three zoom stations place the object about 165 mm ahead of the first vertex.
This is a numerical reference-plane inference, not an explicit phrase added to the patent.

| Zoom station | G5 near-minus-infinity position (mm) | G6 near-minus-infinity position (mm) | Calculated object-to-image endpoint (m) |
|---|---:|---:|---:|
| Wide | -2.657 | -2.391 | 0.319450 |
| Middle | -7.545 | -6.414 | 0.319465 |
| Tele | -10.795 | -10.579 | 0.319448 |

Negative displacement is toward the object, using the first vertex as the axial origin.
All other groups keep their native focus-state positions to the source table's rounding precision.
The approximately 0.31946 m object-to-image endpoint is used for the model's focus label.
The marketed product's 0.24-0.33 m minimum-focus range is not substituted for this patent state.

During zoom, the source keeps G1 fixed and moves G2-G7 toward the object.
Every variable gap is transcribed from the three native stations; no generated CODE V cam has been imported.
The application linearly interpolates its authored stations for schematic movement.
Such interpolation does not prove that intermediate states follow Nikon's cam or maintain exact focus.
The source's middle focal length is unprinted; its calculated infinity EFL of 49.9991579434 mm serves only as the required numeric control coordinate.
The endpoints retain the source's 24.70 and 67.87 mm design labels.

The source prints f/2.91 at the wide and tele endpoints but omits the middle F-number.
A constant middle f/2.91 is an explicit modeling assumption.
The physical iris radii are calculated by tracing the nominal entrance-pupil marginal ray to the stop:
8.452817, 11.124640 and 12.390638 mm at wide, middle and tele.
Agreement with f/2.91 is therefore a calibration result, not independent measurement of the diaphragm.
The native stop position is preserved, and the inferred station iris is held through focus.

Physical clear apertures are also unprinted.
The model's SDs are estimates from Figure 3, checked against ray geometry, material thickness and gap clearance.
They must not be read as primary-source effective diameters or measured vignetting.
The rear surface of L1 (2A) is given 24.0 mm, the figure's optical extent before L1's flat mounting annulus; traced full-field rays reach at most 23.1 mm there.
L1's front surface keeps the figure's 30 mm element rim.
The entry SD at surface 3 is 23.1 mm against about 23.7 mm in the figure, which clears the wide/near full-field chief ray at 21.12 mm.
Surfaces 19 and 21 are 12.9 mm, within the figure's 12.2–12.9 mm range for G5, which clears the tele/near on-axis marginal ray at 12.77 and 12.60 mm.
The concave front surface of L14 (24) is given 16.0 mm, where Figure 3 ends its curve and continues a flat annulus to the 18 mm rim that surface 25A keeps; the highest ray the other modeled rims pass reaches 15.39 mm there.
The shared-junction SDs at surfaces 7 and 20, 18.0 and 13.0 mm, are ray-envelope refinements beyond the schematic figure estimate.
With surfaces 3 and 4 both at 23.1 mm, outer tele full-field rays can meet their first aperture limit at the L2/L3 cemented junction.
Entry and exit rims remain separate estimates; these refinements do not identify manufactured lens diameters.
No finiteConjugates certification is supplied for finite-distance MTF because the distance reference is inferred rather than explicitly specified.

## Aspherical Surfaces

The aspheres are source surfaces 1 and 2 on L1, 22 and 23 on L13, and 25 on L14.
The application labels these 1A, 2A, 22A, 23A and 25A.
All coefficients and radii retain native millimetre units and no uniform scaling is applied.

The patent defines the conic base with a radical sqrt(1 − K y²/r²) (¶0157).
The application's form uses sqrt(1 − (1+k)y²/r²), so k = K − 1.
A2 is explicitly zero.
The source polynomial extends through A12; blank trailing cells remain blank evidence and are implemented as absent zero terms.
The required but unlisted application A14 terms are zero.

| Surface | Native K | Application k | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) | A12 (mm⁻¹¹) |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2.0000 | 1.0000 | -3.346E-10 | -1.631E-09 | 8.861E-13 | -3.347E-16 | blank |
| 2 | 0.0000 | -1.0000 | 5.692E-06 | 1.259E-09 | -3.304E-12 | 7.355E-15 | -9.172E-18 |
| 22 | 0.7938 | -0.2062 | -2.319E-05 | -3.004E-08 | 1.183E-09 | -2.355E-12 | blank |
| 23 | 0.2725 | -0.7275 | -9.524E-06 | -4.572E-08 | 1.082E-09 | -1.851E-12 | blank |
| 25 | 1.0000 | 0.0000 | -1.431E-05 | 2.423E-08 | -1.539E-10 | 5.368E-13 | -6.402E-16 |

The complete conic-plus-polynomial profile governs shape; the sign of A4 alone does not describe an asphere's net correction.
At the stored modeled SDs, departures from a sphere with the same vertex radius are:

| Surface | Modeled SD (mm) | Full sag (mm) | Departure from vertex-radius sphere (mm) |
|---|---:|---:|---:|
| 1A | 30.0 | +5.146142 | -0.571651 |
| 2A | 24.0 | +13.450576 | -4.742328 |
| 22A | 14.0 | -2.425619 | -0.037821 |
| 23A | 14.0 | -3.200934 | +0.539175 |
| 25A | 18.0 | -2.148477 | -1.198039 |

At 2A the 24.0 mm modeled height is 96% of the 24.9268 mm vertex radius, so the reference sphere is nearly a hemisphere there and the paraboloidal-base asphere is 4.74 mm shallower.
Beyond 24.9268 mm the sphere comparison would be undefined, although the asphere itself remains real.
These are computed shape differences at estimated model apertures, not patent-published asphere departures.
No manufacturing method is inferred from the coefficient table alone.

## Conditional Expressions and Numerical Boundaries

The important source inequalities couple group power, movement, shape and spectral behavior.
The following values are recomputed from the unaltered prescription, using isolated subsystem powers and source endpoint movements.

| Condition | Expression | Source permitted interval | Calculated value |
|---|---|---|---:|
| 1-1 | fA/fCalpha | 0 < value < 0.3 | 0.214416 |
| 1-2 | fA/fCbeta | 0 < value < 0.3 | 0.214416 |
| 2-1 | MVGCalpha/MVGE | 0.9 < value < 1.5 | 1.134925 |
| 2-2 | MVGCbeta/MVGE | 0.9 < value < 1.5 | 1.134925 |
| 4-1 | fw/(-fCalpha) | 0.045 < value < 0.14 | 0.110501 |
| 4-2 | fw/(-fCbeta) | 0.045 < value < 0.14 | 0.110501 |
| 5 | STLw/TLw | 0.3 < value < 0.5 | 0.414202 |
| 6 | fB1/fB2 | 1.4 < value < 3 | 2.587499 |
| 7 | -fA/fARw | 1 < value < 1.6 | 1.275122 |
| 8 | fA/fE | 0.5 < value < 1.2 | 0.833506 |
| 9 | fF1/fF2 | 0.4 < value < 1.2 | 0.663982 |
| 10 | MVF1w/MVF2w | 0.6 < value < 1.7 | 1.111251 |
| 11 | MVG0/MVGE | 0.4 < value < 0.8 | 0.483893 |
| 12 | Bfw/fw | 0.4 < value < 0.6 | 0.479920 |
| 13 | (L1R2+L1R1)/(L1R2-L1R1) | -3 < value < -1 | -1.880280 |
| 14 | (LLR2+LLR1)/(LLR2-LLR1) | 0 < value < 2 | 1.346657 |

There is a source naming inconsistency relevant to condition (6).
Paragraph 0176 calls G5/G6 the first/second positive groups, whereas the general condition-(6) definition
and ¶0254 identify the first two positive groups encountered behind G1, namely G2/G3.
G2/G3 = 2.587499 agrees with the source's rounded condition-(6) value 2.588;
G5/G6 = 0.663982 instead reproduces the focusing-power ratio in condition (9).
The calculation follows the condition definition and table, while retaining the contradictory prose explicitly.
No numerical prescription or source group label has been altered.

Conditions (3-1) and (3-2) require the source partial-dispersion expression to exceed 0.020;
the rounded tabulated value is 0.030 for L10.
This datum is used as an input, not presented as independently measured spectral verification.
The remaining source-input bounds are 68° < 2ωW for condition (15), 2ωT < 40° for (16),
and 2 < FnoT < 4 for (17).
The printed values 85.5°, 34.0° and 2.91 satisfy these bounds.
These are source-input checks, not independent measurement of field coverage or diaphragm size; the iris remains calibrated.

The rounded prescription computes infinity EFLs 24.699630, 49.999158 and 67.879045 mm.
The tele result is 0.009045 mm above the printed 67.87 mm overview value.
Likewise, the tele table sums to 154.469 mm versus the overview's 154.46 mm track.
Those small discrepancies remain visible; no spacing, radius or index was adjusted to force the printed summaries.
Sensitivity calculations using half-last-digit perturbations of the printed inputs explain their scale.

The surface Petzval sum is 0.00208078017 mm⁻¹, computed with each actual air/glass or glass/glass interface.
It is an invariant paraxial curvature contribution, not a prediction of the complete sagittal and tangential image shells.
Cemented boundaries and the distinction between group and standalone powers are retained in that calculation.

## Model Scope and Limitations

The optical model preserves the selected patent prescription, native source states and authored image plane.
Its product association is construction-based, its glass names are catalog-compatible inferences from numeric source media, and its apertures are inferred.
The patent's optional general mention of rear optical components does not supply a numerical sensor-cover prescription.
The third-party model's added plate, glass assignments, altered gaps, continuous cam, refocusing and vignetting were not adopted; the glass names here follow from the patent's nd/νd pairs alone.

Exact meridional preflight covers the six native states and representative intermediate controls.
The current geometry passes edge-thickness, actual-slope, conic-domain and shared-band gap checks.
The source-informed apertures admit the full-field chief ray to the 21.70 mm image height at all six native states while allowing peripheral vignetting.
At native tele/near the on-axis full-iris marginal ray reaches surface 19 at 12.770 mm and surface 21 at 12.596 mm; the 12.9 mm SDs there pass it without clipping.
That check holds the infinity-calibrated iris through focus, because the source prints no near-state f-number.
No throughput, MTF, production-performance or full two-dimensional pupil claim is made from the sampled checks.
The authored image plane has not been fitted to improve numerical results.

## Sources

1. [WO2024214585A1, original Japanese publication](https://patents.google.com/patent/WO2024214585A1/en):
   title page; ¶0153-0158 and equation (a); ¶0164-0180; Table 2; Figure 3;
   definitions ¶0253-0257 and conditional-value table ¶0258.
   One-based PDF pages 29, 32-36, 54-56 and 69 are the principal extraction locations.
2. [Nikon NIKKOR Z 24-70mm f/2.8 S II specifications and construction](https://nij.nikon.com/products/lineup/nikkor/zmount/nikkor_z_24-70mm_f28_s_2/spec.html).
3. [HOYA optical-glass data download](https://www.hoya-opticalworld.com/english/datadownload/):
   HOYA20260707_include_obsolete.agf, including numeric catalog comparisons.
4. [OHARA July 2026 catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip):
   distinct L- and S-family entries retained.
5. [Nikon/Hikari optical-glass catalog 2023](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf):
   J-FKH1, J-PSKH4, J-SF03 and J-BK7A data pages.
6. [SCHOTT optical glass](https://www.schott.com/en-gb/products/optical-glass-p1000267):
   N-SF66 data, compared only as a coordinate-compatible candidate.
7. [SUMITA optical-glass catalog](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf):
   vendor catalog header dated 2026-08-21; comparison coverage and alternatives.
8. [CDGM H-ZPK5 data sheet](https://www.cdgmgd.com/webapp/pdf/H-ZPK5.pdf):
   comparison candidate, not an adopted prescription medium.

9. [HIKARI current optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf):
   Q-LAK53S, J-LASF03 and Q-SK15S primary coordinate comparisons; exact nd/νd does not establish source supplier identity.
