# Sonnar f/1.5 Patent Example

## Patent Reference and Design Identification

**Patent:** US 1,975,678
**Inventor:** Ludwig Bertele
**Assignee:** Zeiss Ikon AG
**Filed:** July 3, 1933
**Priority:** July 8, 1932, Germany
**Granted:** October 2, 1934
**Title:** Objective
**Embodiment analyzed:** Sole numerical example, Fig. 1, dimensions scaled by 0.5

The numerical example specifies f = 100, f/1.5 and a picture angle of about 42°.
The viewer halves its linear dimensions to the approximately 50 mm scale. The
seven-element, three-group architecture supports the Sonnar association, but
the patent does not identify the prescription of every production 50mm f/1.5
lens. The Contax mount and 35 mm format are application metadata. The modeled
field is the patent's 42°, rather than the larger diagonal angle derived from
the full 35 mm frame at 50 mm.

The original PDF's drawing is on page 1 and numerical table/prose on page 2.
The table was inspected at 600 dpi. In particular, it really prints 1.4075 for
L3 and a positive sign for r8. Neither value is replaced by a more plausible
glass index or a focal-length fit.

## Optical Architecture

A front positive singlet precedes two cemented triplets. The diaphragm is in
the air space between the triplets. The source groups L1–L4 into a front
assembly and L5–L7 into a rear assembly; these are the movement-chart groups,
while the three optical groups count air-separated components.

The source's principal correction is a strongly curved collecting cemented
surface in the rear member, directed toward the film. Figure 2 compares
spherical-aberration curves with and without this contribution. It does not
publish a focus movement schedule.

The table gives finite radii for r2 and r7 despite calling them plane in the
prose. The model follows the numerical example: +208.385 and +952 mm after
scaling. This is a source discrepancy, not evidence for a general historical
practice of calling curved surfaces plane.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.6375, ν = 56.1. Glass: unmatched patent medium, supplier unspecified.
The authored isolated focal length is approximately +59.7 mm.

This front collector has a strongly convex front and weakly curved rear face.
The source describes high refractive index but supplies no mechanical-hardness
or durability evidence.

### L2 — Positive Meniscus, Front Triplet

nd = 1.6727, ν = 47.3. Glass: unmatched patent medium, supplier unspecified.
The authored isolated focal length is approximately +40.3 mm.

Its strongly curved front contributes positive power. The cemented transition
to low-index L3 has different power from its isolated rear surface in air.

### L3 — Low-Index Biconvex Element

nd = 1.4075, ν = 65.7. Glass: unmatched source medium.
The authored isolated focal length is approximately +90.6 mm.

The unusual index is printed in the original table. No practical catalog glass
identity is established. The reference-index changes at its boundaries are
−0.2652 and +0.2815. The source value is retained rather than silently substituting
an FK-type glass. Chromatic behavior uses an Abbe-based approximation.

### L4 — Biconcave Negative, Front Triplet Exit

nd = 1.6890, ν = 31.0. Glass: N-SF8 catalog comparison, supplier unspecified.
The authored isolated focal length is approximately −14.7 mm.

The steep rear radius is +11.07 mm at this scale. It supplies substantial
negative power. Its optical rim must be distinguished from the beveled shoulder
in the patent drawing.

### L5 — Weakly Curved Negative Meniscus

nd = 1.5481, ν = 45.9. Glass: unmatched patent medium, supplier unspecified.
The authored isolated focal length is approximately −56.4 mm.

This is the front of the rear triplet. Its nearly planar front has a finite
radius in the numerical example. It is cemented to positive L6.

### L6 — Biconvex Positive, Rear Triplet

nd = 1.6578, ν = 51.2. Glass: unmatched patent medium.
The authored isolated focal length is approximately +13.7 mm.

This thick positive element supplies the strongly curved rear cemented surface
emphasized in the patent. Its rear radius is −11.03 mm. A nearby catalog glass
coordinate does not establish the historical material or manufacturer.

### L7 — Negative Meniscus, Rear Triplet Exit

nd = 1.5488, ν = 63.0. Glass: unmatched patent medium, supplier unspecified.
The authored isolated focal length is approximately −28.0 mm.

L7 completes the rear triplet and contributes to spherical, coma, field and
chromatic balance. High Abbe number does not mean zero chromatic contribution.

## Glass Identification and Dispersion

The numerical example publishes reference index and Abbe number for each
medium, but no exact partial-dispersion ratios or spectral-line table. Catalog
comparisons are modeling aids and do not establish historical suppliers.
Copied N-SF8 nC/nF/ng values were removed so catalog-derived numbers do not appear
to be patent measurements or override the catalog curve. Other unresolved media
use Abbe-based dispersion. No patent-backed APD identification is present.

## Focus Mechanism

The patent gives no finite-focus prescription. The interactive demonstration
uses inferred rigid unit focus. All elements and the stop move together toward
the object; internal spacing remains fixed and there is no zoom.

| State | Last surface to image | Unit extension |
|---|---|---|
| Infinity | 22.0384761 mm | 0 mm |
| Modeled 0.90 m object-to-image distance | 25.1859559 mm | 3.1474798 mm |

Independent paraxial propagation through the 40.15 mm assembly gives a focal
length of 50.1626558 mm and the infinity gap above. The former 35.2 mm image
plane was inconsistent with the prescription: the live rays crossed before it.
The corrected finite endpoint includes the full object leg and image-plane
reference. Intermediate travel is interpolated; distance labels are approximate.

The stop is placed 6.3 mm behind the L4 rear vertex, splitting the source's
6.95 mm inter-triplet air gap into 6.3 and 0.65 mm. This location is inferred:
it clears the curved L4 exit rim (about 6.12 mm sag at the 9.9 mm rim). The
former 1 mm placement put the stop plane inside the curved glass and made
intermediate-height rays fail to intersect a forward stop plane. The patent
does not dimension the diaphragm location. Stop-down settings beyond f/1.5
are visualization controls. The largest entrance rays can still be clipped by
the figure-derived front triplet rims; nominal f/1.5 is not a guarantee that
every sampled pupil ray is transmitted.

## Diagram Dimensions

At 600 dpi the first-to-last vertex span is approximately 1,310 pixels for
40.15 mm. The triplet's large optical rims are around 460 pixels from the axis,
its exit around 320, the rear entrance around 330 and the final rim around 400.
These correspond approximately to 14.1, 9.8, 10.1 and 12.3 mm. Revised model
rims are 14 mm on S3–S5, 9.9 on S6, 10 on S7–S8 and 12.3 on S10. The steep
cemented S9 stays at 9.5; front rims retain 18/17 mm ray allowances.

The values are inferred from an illustrative figure and constrained by feasible
surface geometry. They are not a source clear-aperture table. All powered
surfaces are spherical.

## Sources

- [US 1,975,678](https://patents.google.com/patent/US1975678A/en), original PDF
  retained as `patents/US1975678.pdf`: Fig. 1 and Fig. 2 on page 1;
  numerical example and explanatory prose on page 2.
