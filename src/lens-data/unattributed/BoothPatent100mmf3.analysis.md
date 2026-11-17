## Patent Reference and Design Identification

**Patent:** [US 1,421,156 A](https://patents.google.com/patent/US1421156A/en)  
**Filed:** November 9, 1920  
**Published:** June 27, 1922  
**Inventor:** Lionel Barton Booth  
**Assignee:** No organization identified in the selected publication.  
**Title:** Objective for Photographic and Like Purposes  
**Example details:** Sole unnumbered numerical example, specification page 1 (PDF page 2); all source lengths multiplied by 16, normalizing the printed F = 6¼ to nominal 100 mm.

This is a **hidden, patent-only monochromatic reconstruction**, not an identified production lens. No Dallmeyer, Pentac or factory-manufacture association is asserted. The descriptive BOOTH name identifies its inventor, and `maker: null` deliberately avoids an unsupported manufacturer claim.

The scanned table is the source of the radii, lens thicknesses, separations and element diameters. Its f/3 designation and clear aperture 2.08 are retained as the nominal system aperture, not treated as a stop diameter. The literal prescription calculates to 100.427741 mm EFL after the ×16 normalization, approximately 0.428% above nominal; radii are not adjusted to force agreement.

## Optical Architecture

Five spherical elements form three air-separated groups: positive cemented front doublet, negative central singlet and positive cemented rear doublet. The two positive-power cemented interfaces are central to Booth's stated design principle. All eight distinct optical surfaces and both cemented junctions are retained. There are no aspheres, cover plates or fabricated mechanical details.

## Element-by-Element Analysis

### L1 — Front crown, biconvex positive

nD = 1.6109; nG′ = 1.62411. Conventional Abbe number and factory glass identity are unknown. Scaled thickness 7.84 mm, source diameter 34.88 mm. L1 is cemented to L2.

### L2 — Front flint, negative meniscus

nD = 1.5485; nG′ = 1.56424. Thickness 1.60 mm, diameter 34.88 mm. Its nearly planar rear surface retains the literal R = −1505.6 mm.

### L3 — Central biconcave negative

Same published flint indices as L2. Thickness 1.60 mm, diameter 30.40 mm. Separated from the front doublet by 8.32 mm and from the rear doublet by 8.48 mm. The stop subdivides the second gap without changing that total.

### L4 — Rear flint, negative meniscus

Same published flint indices as L2. Thickness 1.60 mm, diameter 31.20 mm. Cemented to L5; literal front radius +838.4 mm.

### L5 — Rear crown, biconvex positive

Same published crown indices as L1. Thickness 7.84 mm, diameter 31.20 mm. The rear element has equal-magnitude opposite-sign radii, ±39.216 mm.

## Glass Identification and Spectral Limitations

The patent supplies **sodium nD and nG′ only**. Its G′ index is not silently copied into the engine's mercury `ng` field, nor converted into an invented F–C Abbe number. Only native `indexReference: "D"` and literal nD are authored; the supported engine fallback is constant index. Thus this file is valid only for its **D-line monochromatic diagnostic scope**. Color overlays cannot establish chromatic correction, and native spectral MTF correctly reports `a glass has no Abbe number`.

Independent first-order calculations using the second set of literal nG′ indices give EFL 100.371945 mm and BFD 83.692127 mm, versus D-line EFL 100.427741 mm and Gaussian BFD 83.724027 mm. This limited two-anchor check is not a continuous dispersion model or achromatism certificate.

## Focus and Stop Placement

The patent expressly permits a diaphragm in either airspace, without an exact station. Both gap midpoints were compared without altering optical surfaces or diameters. The **rear-gap midpoint** is selected as a modeling assumption: it improved sampled off-axis D-line spots relative to the front-gap midpoint, with greater clipping at the largest tested field. Stop z is 23.60 mm from the first vertex; native wide-open stop radius is 13.287008 mm.

The Gaussian D-line BFD is **83.724027 mm**. The delivered flat image plane instead uses **83.236667 mm**, a computed on-axis f/3 RMS best-focus BFD from a 709-point sampled circular entrance pupil. This is a modeled image-plane adjustment, not a source dimension or a change to the lens prescription. On-axis sampled geometric RMS radius is 28.84 µm there, compared with 65.08 µm at the Gaussian plane. These are geometric spot metrics, not diffraction MTF or measured retail performance.

Focus is fixed at infinity. The large `closeFocusM` sentinel and absence of variable gaps do not imply a real close-focus specification. The 20° full diagnostic field is a test/display choice, not a claimed image circle or camera-format coverage.

## Numerical Validation and Qualifications

Pinned current-main baseline: `3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2`.

- Native V2 ingest and canonical source/geometry validator pass with no error and no geometry override.
- All literal source diameters are retained. Independent dense shared-aperture sag sampling finds positive separation throughout every element and air gap.
- Native and independent paraxial EFL agree, and ten independent exact Snell-law axial rays agree with native image intercepts within 10⁻⁸ mm.
- Native aperture audit passes its 3% threshold; the nominal f/3 axial beam is not rim-limited.
- With the rear stop, the 709-point sampled entrance pupil passes 709 rays at 0°, 2.5° and 5°; 708 at 7.5° and 685 at 10°. The last value is 96.6% sample acceptance, not measured illumination. Do not infer unvignetted 20° coverage.
- Full application/browser QA, aggregate regression and future integration checks are **not completed**. No finished polychromatic production model is claimed.

## Sources

- [Original patent scan](https://patentimages.storage.googleapis.com/dd/35/57/fcb99a86cce34b/US1421156.pdf), three PDF pages; prescription on PDF page 2.
- [Patent bibliographic record](https://patents.google.com/patent/US1421156A/en).
