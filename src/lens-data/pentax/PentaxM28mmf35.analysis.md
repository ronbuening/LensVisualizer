## Patent Reference and Design Identification

**Patent:** US 3,955,883
**Filed:** February 6, 1975
**Granted:** May 11, 1976
**Inventor:** Takahiro Sugiyama
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.
**Title:** Wide Angle Photographic Lens
**Example details:** Table II on physical page 5 and Claim 2 on physical page 6; Figure 3 and aberration plots Figure 4a–d on physical page 3. Native F = 100 prescription uniformly scaled by 0.28.

Photons to Photos identifies this example as the Ricoh smc Pentax-M 28mm F3.5 in its Optical Bench hub and prescription title. This is an explicit secondary product association, not a factory-certified production prescription. The six-element/six-group spherical construction, aperture and scaled focal length are consistent with that association. No claim of exact production glass, coating, tolerance or mechanical construction is made.

The patent prose gives a 75° full field; its plots label 37.6° half-field. The model uses the plot boundary, 75.2° full field, retaining that rounding distinction. Every radius and axial distance comes from the primary table and matching claim, not the rounded secondary transcription. The primary printed BFD of 130.113 becomes 36.43164 mm and remains the modeled source plane.

## Optical Architecture

Six air-spaced spherical elements form a retrofocus wide-angle system. L1 and L2 together form the negative front section (the patent gives its native focal length as −101.729). The strong positive third element and the rear negative-positive-positive section balance the front group's divergence while extending back focus beyond the 28 mm design focal length. The topology is positive, negative, positive, negative, positive, positive.

The source does not tabulate the diaphragm position or lens diameters. The model uses the secondary stop immediately following surface 6 and the secondary clear-aperture scaffold, explicitly as assumptions. Its iris size is computed from f/3.5 rather than copying the secondary diameter.

## Element-by-Element Analysis

### L1: Positive Meniscus

nd = 1.62280, νd = 57.0. Glass: unmatched patent coordinates. f = +130.603 mm (isolated thick-element calculation).

A weak positive meniscus convex to the object, preceding the stronger negative second element. Its crown-like dispersion participates in the front-section chromatic balance.

### L2: Negative Meniscus

nd = 1.62041, νd = 60.3. Glass: unmatched patent coordinates. f = -22.297 mm (isolated thick-element calculation).

A negative meniscus convex to the object. Together with L1 it produces the negative front-section power required by the retrofocus layout.

### L3: Biconvex Positive

nd = 1.72000, νd = 43.7. Glass: unmatched patent coordinates. f = +19.553 mm (isolated thick-element calculation).

A thick biconvex positive element that supplies much of the converging power following the long front air space.

### L4: Biconcave Negative

nd = 1.74077, νd = 27.8. Glass: unmatched patent coordinates. f = -15.860 mm (isolated thick-element calculation).

A biconcave negative element behind the assumed diaphragm. Its relatively low Abbe number gives a dispersive counterweight to the positive rear elements.

### L5: Positive Meniscus

nd = 1.62280, νd = 57.0. Glass: unmatched patent coordinates. f = +32.527 mm (isolated thick-element calculation).

A positive meniscus convex to the image, part of the rear converging section. Its index and Abbe number match L1 in the source.

### L6: Positive Meniscus

nd = 1.62041, νd = 60.3. Glass: unmatched patent coordinates. f = +43.851 mm (isolated thick-element calculation).

A positive meniscus convex to the image. Its weak front face and stronger rear face complete the rear section; its index and Abbe number match L2.

## Glass Identification and Selection

Four distinct nd/νd pairs are retained literally: 1.62280/57.0 (L1 and L5), 1.62041/60.3 (L2 and L6), 1.72000/43.7 (L3), and 1.74077/27.8 (L4). No vendor names are asserted. The high-dispersion negative L4 complements the lower-dispersion positive rear pair, but nd and νd alone do not identify secondary spectrum or anomalous dispersion. Calculated multicolor results are therefore approximations, not measured production performance.

## Focus Mechanism

Only the fixed infinity prescription is sourced. No close-focus translation, interpolation law, minimum focusing distance or drive mechanism is asserted. All surface positions and the printed image plane remain fixed throughout the model controls. The schema's required closeFocusM entry is an inactive compatibility placeholder; the engine reports no modeled close-focus distance for this fixed geometry.

## Verification Summary

The engine calculates EFL 27.99508703455 mm. An independent paraxial calculation gives BFD 36.42881824742 mm, 0.00282175258 mm before the preserved printed BFD plane. This diagnostic must not replace the printed plane. All six element outlines pass geometry and rim checks with zero hidden renderer trim, using the default gap-sag allowance. No override or reduced aperture is used.

At f/3.5, a 64-across full-pupil sampling grid transmits 100% at 0°, 100% at 18.8°, and 63.38% at 37.6°. Each grid has 3,228 disk samples and no aiming or trace failures. Edge throughput is aperture-dependent modeled geometric vignetting, not measured relative illumination. Source-plane and separate best-axial-focus reference-wavelength diffraction MTF calculations converge at all three fields (128 grid limit); the latter is diagnostic only. Exact axial aperture tracing passes the stated beam without a non-iris limiter. These results depend on the inferred rims and stop location.

## Sources

- [USPTO primary PDF](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/3955883): direct inspection of cover, Table II, Claim 2, Figures 3 and 4.
- [Photons to Photos prescription](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/Data/US003955883_Example02P.txt): secondary product label, stop placement and diameter scaffold only.
- [Photons to Photos Optical Bench Hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm): secondary product mapping.
