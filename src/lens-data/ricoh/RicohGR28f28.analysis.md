# RICOH GR LENS 28mm f/2.8 — Patent Model

## Patent Reference and Design Identification

**Patent:** US 5,760,973

**Inventor:** Atsushi Kawamura

**Assignee:** Ricoh Company, Ltd.

**Filed:** 1996-12-20

**Priority:** 1995-12-26

**Granted:** 1998-06-02

**Embodiment analyzed:** Example 1; Figure 1 shared with Examples 2–3

The diagram follows **Example 1 of US 5,760,973**, *Compact Wide-Angle
Lens System*, by Atsushi Kawamura, assigned to Ricoh Company, Ltd.
The application was filed 1996-12-20, claims Japanese priority 1995-12-26,
and was granted 1998-06-02.

The seven-element, four-component, compact 28 mm design is associated here
with the Ricoh GR1. The patent's example is the numerical authority for the
diagram; that association does not prove identical production glasses or
finite-focus mechanics. Figure 1 is shared by Examples 1–3, rather than
being a dimensioned drawing of Example 1 alone.

| Source quantity | Example 1 |
|---|---|
| Focal length | 28.1 mm |
| F-number | 2.86 |
| Half field | 37.2° |
| Elements / air-separated components | 7 / 4 |
| Aspheric surfaces | 1 and 11 |

The local patent's numerical table and aspheric coefficients are on PDF p16,
the sag equation is on p15, and Figure 1 is on p2. All stored radii,
inter-surface gaps, indices and Abbe numbers were checked against that table.
The f/2.86 slider and wide-open shortcut follow the numerical example; the
f/2.8 product designation remains separate.

## Optical Architecture

The component powers follow a negative–positive–positive–negative sequence.
A front negative singlet precedes a positive cemented doublet. The stop is
between that doublet and a positive cemented triplet. A final negative
meniscus carries the second asphere.

The patent explicitly gives the stop's position: d5 = 0.80 mm before it
and d6 = 2.41 mm after it. This differs from a lens whose diaphragm position
must be inferred. The four movement-chart labels refer to the patent's
components, not four independently driven mechanisms.

## Element-by-Element Analysis

| Element | Patent designation | Shape / optical role |
|---|---|---|
| L1 | L(1,1) | Biconcave base with aspheric front; front negative component |
| L2 | L(2,1) | Biconvex positive member of front doublet |
| L3 | L(2,2) | Negative meniscus; dispersive partner of L2 |
| L4 | L(3,1) | Biconcave, low-index member of rear triplet |
| L5 | L(3,2) | High-index positive core of rear triplet |
| L6 | L(3,3) | Negative meniscus; dispersive rear member of triplet |
| L7 | L(4,1) | Negative meniscus with aspheric front; final component |

The index increase at surface 8 is 1.83500 − 1.48749 = 0.34751.
Its paraxial surface power is approximately 0.0100 mm⁻¹, about 28% of
the whole-system paraxial power. That ratio describes one refracting
surface; it does not allocate 28% of image quality to a single element.
The cemented interfaces distribute convergence and chromatic correction
while limiting the number of air/glass boundaries.

## Glass Identification and Dispersion

The patent supplies nd and νd, not named commercial glass products.
The following catalog counterparts provide dispersion models without
asserting Ricoh's production supplier.

| Element | Patent nd / νd | Catalog counterpart |
|---|---|---|
| L1 | 1.64769 / 33.8 | SF2 |
| L2 | 1.75700 / 47.7 | S-LAM54 |
| L3 | 1.68893 / 31.2 | E-FD8 |
| L4 | 1.48749 / 70.4 | FK5 |
| L5 | 1.83500 / 43.0 | S-LAH55 |
| L6 | 1.74077 / 27.8 | E-FD13 |
| L7 | 1.60342 / 38.0 | F5 |

All seven names resolve within the catalog compatibility rules. Their
spectral curves are numerical counterparts, not additional patent data.
No element is marked as patent-listed APD. The source's glass indices,
Abbe values and cemented pairings remain unchanged.

## Focus Mechanism and Image Plane

The patent does not publish a finite-focus station or a movement schedule
for Example 1. The viewer therefore uses an **inferred rigid unit-focus**
model: all seven elements and the stop translate together toward the object,
with only the final air gap changing.

Independent paraxial propagation gives:

| Quantity | Modeled value |
|---|---|
| First-to-last surface distance | 18.240 mm |
| Infinity focal length | 28.105742 mm |
| Infinity back focal gap | 17.218034 mm |
| Back focal gap at 0.350 m object-to-image distance | 19.980324 mm |
| Unit-focus travel | 2.762290 mm |

The former 2.45 mm extension did not image the labeled 0.35 m conjugate
in the full prescription. The revised endpoint includes the distance from
the object to the first surface, the lens thicknesses and the final image
gap. Intermediate gaps are interpolated, and intermediate distance labels
are approximate. This calculated schedule is not presented as a recovered
production focusing mechanism.

## Aspherical Surfaces

The source uses the standard conic convention:

$$
X(Y)=\frac{Y^2/R}{1+\sqrt{1-(1+K)(Y/R)^2}}
+AY^4+BY^6+CY^8+DY^{10}.
$$

The stored K values and all four polynomial coefficients match the table.
No κ-to-K conversion is needed for this patent.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---|---|---|---|---|
| 1 | −0.0665 | −2.7200e−5 | −1.4150e−6 | 4.4660e−8 | −6.1390e−10 |
| 11 | 0.5327 | −8.3178e−5 | 2.8840e−6 | −1.0011e−7 | 1.0731e−9 |

Both aspheres are negative-component front surfaces. Their peripheral
shape helps distribute off-axis correction across the front and rear of
the lens. Example 1 is the direct-asphere configuration; the patent's
other resin-layer embodiments are not substituted into this model.

## Diagram Dimensions and Limits

No clear semi-diameters are tabulated. The shared Figure 1 was inspected
at 600 dpi. Its component proportions show a modest front singlet and a
larger rear negative component, while the old display made the front rim
larger than the final element.

The revised front rims are 6.5/6.2 mm, the front doublet remains 6.2 mm,
and the rear triplet uses 6.3 mm with a 6.5 mm exit. The final component
uses 6.9/8.0 mm rims. These are constrained drawing estimates. A 7.2 mm
front rim on the final asphere exceeded the slope guard, and a 6.8 mm
preceding exit infringed the inter-element clearance allowance; those
trial values were rejected. The accepted geometry passes surface validation
and renders without hidden rim trimming at all three checked focus states.

Because Figure 1 serves three numerical examples, pixel proportions alone
cannot establish exact apertures for Example 1. The numerical surface
profiles and clearance constraints take priority over forcing a tracing
model through every stroke of the shared illustration.

## Source

[US 5,760,973](https://patents.google.com/patent/US5760973A/en), local original
PDF: Figure 1 p2, conic equation p15, Example 1 p16.
