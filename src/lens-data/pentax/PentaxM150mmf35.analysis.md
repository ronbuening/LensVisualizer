## Patent Reference and Design Identification

**Patent:** US 4,134,645 A  
**Filed:** August 25, 1977  
**Granted:** January 16, 1979  
**Inventors:** Takahiro Sugiyama; Toshifumi Kubota; Rensuke Adachi  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd. (printed as Asahi Kogaku Kogyo Kabushiki Kaisha)  
**Title:** Miniaturized Telephoto Camera Lens  
**Example details:** Physical page 6, Figures 5 and 6; repeated in Claim 3. All lengths scaled 1.5× from the normalized 100 mm table.

This is a qualified reconstruction associated with the smc Pentax-M 150mm f/3.5. The PhotonsToPhotos OpticalBenchHub identifies Example 03P with that product. The patent itself does not name a retail product, so this is not factory-certified production geometry.

The association rests on the following evidence:

1. An explicit third-party mapping of this particular numerical example, not merely the patent family.
2. A five-element, five-group all-spherical telephoto architecture and f/3.5 design aperture.
3. A uniform dimensional scale giving 149.997705 mm effective focal length; glass coordinates remain unchanged.

The two examples are independent designs. Every radius differs, as do several glasses and separations. Neither model is a focal-length-scaled duplicate of the other.

## Optical Architecture

The power sequence is positive, negative, positive, positive, negative. Three closely spaced front elements form the principal positive group. A long air interval separates them from a compact rear positive-negative meniscus pair. All five elements are air-separated and all ten glass boundaries are spherical.

The front positive crown and negative flint provide opposing chromatic powers. The third positive meniscus further bends the beam before the long gap. The rear pair supplies telephoto power redistribution and field correction. These roles are interpretations of the prescription and patent discussion, not individual measured performance claims.

No cover glass, detachable filter, coating or mechanical barrel has been invented. Source-listed physical spacings remain unchanged, except that the long air interval is split by a zero-thickness modeled iris.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51112, νd = 60.5. Glass: unmatched patent coordinates; supplier unknown. f = +107.396 mm.

The front positive meniscus collects the incident beam. Its low-dispersion crown coordinates contrast with the negative second element.

### L2 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: unmatched patent coordinates; supplier unknown. f = -121.609 mm.

The biconcave negative element supplies strong opposing power and higher dispersion. Its role is consistent with achromatizing the positive front elements.

### L3 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: unmatched patent coordinates; supplier unknown. f = +104.114 mm.

The third positive meniscus has the stronger object-side curvature described by the patent. Its position completes the closely spaced front group.

### L4 — Positive Meniscus

nd = 1.72825, νd = 28.5. Glass: unmatched patent coordinates; supplier unknown. f = +110.084 mm.

The rear positive meniscus is isolated from the front group by the long air interval. Its low Abbe number is an explicit part of the patent’s rear-group correction strategy.

### L5 — Negative Meniscus

nd = 1.65160, νd = 58.6. Glass: unmatched patent coordinates; supplier unknown. f = -48.145 mm.

The final negative meniscus completes the telephoto rear pair. The patent discusses higher refractive index in this element as a means of reducing the Petzval sum.

## Glass Identification and Spectral Qualification

Only refractive-index and Abbe-number pairs are transcribed. No trade name, supplier, melt data or measured C/F/g line indices is known. The patent plots d-line and g-line aberrations; this reconstruction uses its tabulated n/ν as approximate d-line coordinates, with an explicit index-reference qualification on every element.

All glasses are deliberately labeled Unmatched. The model uses synthetic Abbe-based dispersion, not verified catalog Sellmeier curves. Polychromatic MTF and chromatic aberration plots are illustrative approximations. No apochromatic or anomalous-partial-dispersion performance is claimed.

## Focus Mechanism

Only the static infinity prescription is supplied. The patent publishes no near-focus travel or moving-group schedule. No focus gaps are authored, and changing the focus slider leaves all physical vertex positions unchanged. The required closeFocusM field is an inactive 10 m schema placeholder, not a product MFD or a modeled finite conjugate.

The image plane preserves the printed back focus rather than silently optimizing it:

- Printed normalized back focus: 40.40000 mm.
- Authored scaled image distance after r10: 60.600000 mm.
- Independently computed paraxial infinity back focus: 60.568760171 mm.
- Paraxial minus printed plane: -0.031239829 mm.

This small rounding-level residual is reported as a separate evaluation-plane diagnostic. Best-axial MTF also reports its own shift from the printed plane; neither diagnostic changes the literal prescription.

## Stop and Clear-Aperture Reconstruction

The patent construction drawing does not label an iris or numerical clear semi-diameters. The modeled iris is an engineering inference, placed four normalized millimetres after r6, within the long air interval. Its physical opening is derived by the engine from f/3.5. It is not a traced factory iris position.

The derived full-open iris radius is 17.318544 mm, with entrance-pupil radius 21.428244 mm. The front-to-rear element clear radii are 22.500, 22.500, 21.900, 11.250, 11.250 mm.

Clear apertures are engineering estimates guided by the source section’s large front group and smaller rear pair, then constrained by exact-ray passage and geometry. They are not measured from a production sample. Both faces of each element share one radius. No rim cuts, rim extensions, negative thickness, or geometry-check overrides are used.

## Verification Summary

The engine computes EFL 149.997705 mm. The full-open axial beam passes at f/3.5 and is iris-limited. Every element has zero hidden render trim. At the tested fields no ray was unaimed or failed; rays lost off-axis were blocked by physical clear apertures.

| Field angle | Geometric transmitted stop fraction |
| --- | --- |
| 0.0000° | 100.00% |
| 4.0666° | 99.75% |
| 6.0999° | 91.87% |
| 8.1332° | 79.80% |

Throughput is a geometric pupil sample fraction on a 32×32 stop lattice, not coating transmission or a measured relative-illumination curve. Field-dependent values depend on the inferred iris and clear apertures.

Reference-line and synthetic C/d/F diffraction MTF were evaluated at 0, 0.5 and 1.0 image-height fractions, at 10, 20 and 40 lp/mm, on both the printed and best-axial planes. The evidence JSON retains convergence status and exact focus shifts for every run. These are simulated results, not manufacturer charts or camera measurements.

## Sources

- [Original US patent](https://patents.google.com/patent/US4134645A/en).
- [Original patent PDF](https://patentimages.storage.googleapis.com/0b/ec/f7/991950b334847e/US4134645.pdf).
- [PhotonsToPhotos OpticalBenchHub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), explicit product-example mapping supplied with the source packet.

The original PDF and rendered numerical/construction pages accompany the local evidence package. PDF SHA-256: 388f11db7b041e0d8c68124ebe67d2af43c7877cda34e2e275c6acdf10715e4b.
