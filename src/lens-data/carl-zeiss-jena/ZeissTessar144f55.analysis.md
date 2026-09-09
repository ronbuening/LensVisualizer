# Original Tessar Patent Example

## Patent Reference and Design Identification

**Patent:** US 721,240
**Inventor:** Paul Rudolph
**Assignee:** Carl-Zeiss-Stiftung (catalog canonical entity; source says the firm of Carl Zeiss)
**Filed:** July 15, 1902
**Granted:** February 24, 1903
**Title:** Photographic Objective
**Embodiment analyzed:** Sole worked example, dimensions multiplied by 144 mm

The patent specifies four elements, an aperture of f/5.5 and approximately 60°
of anastigmatically flat field. It normalizes dimensions to the focal length.
The viewer uses a 144 mm scale; this is a scaled patent example, not proof of
the prescription in a particular production Tessar. The large-format board and
4×5 format are application metadata, not a mount or format stated in the patent.

The original PDF supplies the drawing on page 1, explanatory prose on page 2,
and the numerical table on page 3. The table visibly gives d1 = 0.033 and L1
nD = 1.61132. Earlier transcriptions of 0.038 and 1.6132 were incorrect. The
third radius is −0.742, also corrected in these notes.

## Optical Architecture

The four elements form three optical groups: two separated singlets before the
stop and a cemented doublet behind it. The patent also describes two assemblies
separated by the diaphragm, which is the grouping used in the movement chart.
Both assemblies move together in the inferred unit-focus demonstration.

Rudolph explicitly compares the design with US 444,714 and US 660,202. His stated
principle combines a negative pair of facing air-spaced surfaces with a positive
cemented interface. This describes the signs of the interface powers, rather
than establishing the chemistry or supplier of the glasses.

The stop has equal source-defined gaps of 0.030 on either side: 4.32 mm at the
chosen scale. Unlike the focus travel and lens rim heights, these two distances
are published numerical data.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive

Modeled nd = 1.61132, estimated νd = 58. Glass: unmatched patent medium,
supplier unspecified. Isolated focal length is approximately +50.64 mm.

The curved face points toward the object and the rear face is planar. Its
center thickness is 4.752 mm. This element supplies strong positive power;
its isolated focal length does not equal its contribution in the complete lens.

### L2 — Biconcave Negative

Modeled nd = 1.60457, estimated νd = 38. Glass: unmatched patent medium,
supplier unspecified. Isolated focal length is approximately −38.7 mm.

The rear concave surface is more strongly curved than the front. The facing
surfaces of L1 and L2 form the negative pair discussed in the patent. The
negative element balances the positive components and participates in chromatic
and field correction.

### L3 — Biconcave Negative, Rear Doublet

Modeled nd = 1.52110, estimated νd = 51. Glass: unmatched patent medium,
supplier unspecified. Isolated focal length is approximately −56.8 mm.

The front is weakly concave. The positive-radius rear interface is cemented to
the higher-index L4, so its in-situ surface power is positive despite L3's
negative isolated power. The reference-index step is 0.09022.

### L4 — Biconvex Positive, Rear Doublet

Modeled nd = 1.61132, estimated νd = 57. Glass: unmatched patent medium,
supplier unspecified. Isolated focal length is approximately +35.2 mm.

This element completes the positive rear doublet. Cementing L3 to L4 leaves six
air-glass surfaces in the four-element lens. The optical role does not establish
a particular barium crown or flint composition.

## Glass Identification and Spectral Limits

| Element | Source nD | Source nF | Source nG′ | Estimated νd used |
|---|---|---|---|---|
| L1 | 1.61132 | 1.61870 | 1.62462 | 58 |
| L2 | 1.60457 | 1.61486 | 1.62252 | 38 |
| L3 | 1.52110 | 1.52820 | 1.53397 | 51 |
| L4 | 1.61132 | 1.61895 | 1.62514 | 57 |

The source defines D and F solar-spectrum lines and the hydrogen Hγ line G′.
It does not give nC, so modern Abbe numbers cannot be calculated directly.
The current νd values remain modeling estimates. They are not patent measurements
or verified historical catalog matches. Source sodium nD is approximated by the
engine's modern nd reference; hydrogen G′ is not entered as the modern g line.
Exact source spectral behavior therefore remains outside this approximation.

The previous Schott O.381/O.163/O.332/O.382 identifications were not supported
by the patent and have been removed. Correcting L1's nD also removes the basis
for the previous claim of a suspiciously anomalous dispersion ratio. Its source
ratio (nG′−nF)/(nF−nD) is approximately 0.802, not 1.076. No printing error needs
to be assumed to explain that earlier result.

## Focus Mechanism

The source does not publish focus travel or a minimum object distance. The
slider demonstrates rigid unit focus at a modeled 2 m object-to-image endpoint.
All elements and the stop translate toward the object, with fixed internal
spacings. No front-element focusing or zoom is modeled or established by this
patent example. Intermediate distance labels are approximate.

| State | Last surface to image | Unit extension |
|---|---|---|
| Infinity | 130.5003914 mm | 0 mm |
| Modeled 2 m | 142.4900817 mm | 11.9896903 mm |

These distances are calculated by paraxial propagation through the corrected
prescription, including the 23.616 mm assembly and the finite object leg. They
replace an inconsistent earlier combination of a thin-lens extension estimate
and an incorrect infinity back focus.

## Verification and Diagram Limits

The corrected paraxial effective focal length is 142.8028234 mm at the 144 mm
scale, approximately 0.83% below the patent's nominal normalization. This
remaining difference is reported directly; it is not explained as a difference
between thick-lens and Gaussian EFL, which are not separate competing focal
length definitions here.

The 600 dpi drawing gives an approximately 538-pixel first-to-last vertex span
and optical half-heights around 300–315 pixels. Scaling by 23.616 mm suggests
rims around 13.2–13.8 mm. The model uses 14.5 mm front rims with ray allowance,
13.6/13.1 mm on L2 and 13.1 mm on the rear doublet. A 13.5 mm rear-doublet trial
made its positive element's surfaces cross and was rejected. The drawing is
illustrative; these are inferred feasible rims, not a published aperture table.

All powered surfaces are spherical. Aperture stopping beyond the published
f/5.5 opening is a visualization control, not a sourced iris specification.

## Sources

- [US 721,240](https://patents.google.com/patent/US721240A/en), original PDF
  retained locally as `patents/US721240.pdf`: drawing page 1, prose page 2,
  numerical table page 3.
