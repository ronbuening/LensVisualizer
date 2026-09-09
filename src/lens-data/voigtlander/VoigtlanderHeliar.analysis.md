# Original Symmetric Heliar

## Patent Reference and Design Identification

**Patent:** US 716,035
**Filed:** February 4, 1901
**Granted:** December 16, 1902
**Inventor:** Carl August Hans Harting
**Assignee:** Voigtländer & Sohn Aktien Gesellschaft
**Title:** Lens
**Embodiment analyzed:** Sole numerical example, symmetric five-element design

The diagram represents the patent example, scaled so that its normalized focal
length of 100 is interpreted as 100 mm. The patent also states an opening of 25
and a usable picture diameter of 80, giving f/4 and a derived rectilinear full
field of approximately 43.6°. These are example specifications, not evidence
that every production lens sold as a Heliar used this prescription.

The original three-page patent is the source for this review. The drawing is on
PDF page 1; the numerical description runs from page 2 into page 3. No production
glass supplier, minimum focusing distance, or focus travel is specified.

## Optical Architecture

Five spherical elements form three separated groups: a front cemented positive
doublet, a central negative singlet, and a rear positive doublet that mirrors the
front one. The radii and internal axial dimensions are symmetric. The shutter
lies immediately behind the central element, so its placement is not at the
symmetry plane.

The drawing identifies d3 across the front air space and d4 across the central
glass. Thus d3 = 8.1 and d4 = 1.6 are supported directly by the drawing. They do
not need to be inferred from a focal-length fit. The rear air space is also 8.1
by symmetry. The modeled stop divides it into 1.6 and 6.5; that precise division
is an estimate, because the patent does not dimension the stop clearance.

The four published radii, +41, +25.76, −583.8 and −44.76, generate the rear half
by reflection. The first-to-last vertex distance is 28.2 units. A paraxial trace
using the modeled reference indices gives approximately 100.12 mm focal length
and 85.52 mm back focal distance. Both are calculated values; the latter is not
a published patent dimension.

## Element-by-Element Analysis

### La — Front Negative Meniscus

Modeled nd = 1.5638, estimated νd = 42. Glass: unmatched Glass I, supplier unknown.
The isolated element focal length is approximately −122.9 mm.

The meniscus is cemented to Lb. Its negative dispersive power participates in
the chromatic balance of the positive outer group. The patent calls the outer
components a flint glass, but does not identify their composition or supplier.

### Lb — Front Biconvex Element

Modeled nd = 1.6080, estimated νd = 57. Glass: unmatched Glass II, supplier unknown.
The isolated element focal length is approximately +40.6 mm.

This is the main positive component of the front doublet. Its medium has the
higher index and smaller published D-to-G′ dispersion of the two glasses.
The cemented interface and the rear glass-air surface both contribute power;
the isolated focal length is not the in-situ contribution of this component.

### Lc — Central Biconcave Element

Modeled nd = 1.5638, estimated νd = 42. Glass: unmatched Glass I, supplier unknown.
The isolated element focal length is approximately −39.7 mm.

Its negative power balances the two positive groups and contributes to Petzval
and chromatic balance. Lack of a cemented interface does not remove its chromatic
contribution. Its symmetric radii are −44.76 and +44.76.

### Lb′ and La′ — Rear Cemented Doublet

The rear elements mirror Lb and La, retaining the same modeled indices and
estimated Abbe numbers. Their isolated focal lengths are approximately +40.6
and −122.9 mm respectively. The outer group's combined power is positive.

## Glass Identification and Source Limits

| Medium | Modeled elements | Patent nD | Patent nG′ | Estimated νd used |
|---|---|---|---|---|
| Glass I | La, Lc, La′ | 1.5638 | 1.5811 | 42 |
| Glass II | Lb, Lb′ | 1.6080 | 1.6217 | 57 |

The patent gives two spectral indices, not modern νd values. The existing Abbe
estimates of 42 and 57 remain approximations for chromatic visualization. They
are not measurements transcribed from the patent. Source nD is used as an
approximation to the engine's modern nd reference; the source G′ index is not
silently entered as modern g-line data. Chromatic results therefore depend on
the dispersion approximation and should not be read as exact source predictions.

The numerical prose has inconsistent element letters, and its description calls
the central component crown glass while pairing it numerically with the outer
medium. The modeled assignment follows the first pair's explicit a/c reference
and the description that b has higher index and lower dispersion. This caveat
remains visible rather than being explained away as a proven historical naming
convention.

Neither index proximity nor an estimated Abbe number establishes a historical
Schott identity. Previous N-SK2 and discontinued-Schott claims have been removed.
No anomalous partial dispersion or specific chemical composition is established
by this source.

## Focus Mechanism

The patent publishes no finite-distance configuration. The interactive focus
slider therefore demonstrates an inferred rigid unit extension at the 100 mm
scale. All three groups and the stop move toward the object together, while the
image plane remains fixed. Internal air spaces do not change; there is no zoom.

| State | Last surface to image | Assembly travel toward object |
|---|---|---|
| Infinity | 85.52 mm | 0 mm |
| Modeled 1 m object-to-image distance | 98.2377245 mm | 12.7177245 mm |

The close endpoint is solved by propagating a paraxial ray through the complete
prescription, including the finite object leg and 28.2 mm assembly. The former
11.14 mm extension used a thin-lens distance convention inconsistent with the
slider's object-to-image label. Intermediate travel remains interpolated and
intermediate distance labels remain approximate. The stop-down range is a
visualization setting, not a published shutter or iris specification.

## Diagram Dimensions

The patent drawing was reviewed at 600 dpi. Scaling its approximately 1,245-pixel
first-to-last vertex span by 28.2 units puts its roughly 515-pixel half-height
near 11.7 units. The source drawing is illustrative rather than a toleranced
rim specification. The model retains central rims of 11.5 and modest outer
ray/edge allowances of 12.5–13.5. These values are inferred; they are not a
published clear-aperture table. The stop's operational opening is calculated
from f/4, rather than taken from the shutter's drawn outer edge. The wide-open EP readout
uses local pupil magnification and is an estimate (25.61 mm here), whereas the
nominal example opening is 25 units; these are distinct calculations.

## Sources

- [US 716,035 on Google Patents](https://patents.google.com/patent/US716035A/en).
- [Original patent PDF](https://patentimages.storage.googleapis.com/c4/e7/9e/d0bcd0e74bf9a3/US716035.pdf),
  locally retained as `patents/US716035.pdf`: drawing page 1, numerical prose pages 2–3.
