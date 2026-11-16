## Patent Reference and Design Identification

**Patent:** FR 1,214,945, *Objectif photographique du type grand-angulaire*.
**Application Number:** P. V. 776.240.
**Filed:** 9 October 1958.
**Granted:** 16 November 1959.
**Published:** 12 April 1960.
**Inventor:** Pierre Angénieux.
**Example details:** Sole numerical table on PDF page 2; optical section on PDF page 3. All source lengths are scaled by 0.24 for this representative 24 mm model.

This is a qualified architectural reconstruction of the R61 lineage, not an unchanged patent transcription or a proven factory prescription. The patent itself supplies a normalized design with stated focal length 100. It does not name a 24 mm product, an ALPA mount or R61. Its page-1 prose describes an aperture of the order of 1:3.5 and refers to an earlier application filed 23 September 1957 [1].

The period Pignons ALPA Reflex supplement identifies an Angénieux 24 mm f/3.5, code **exretrof**, with eight air-spaced elements and 83° diagonal coverage of a 24 × 36 mm frame [2, PDF p. 3]. Its section is drawn in the opposite direction to the patent section. Reversing the product drawing into object-to-image order gives the following convergent evidence:

1. Eight separate elements, with two weak positive members between the front negative menisci.
2. Four front elements and four rear elements separated by a long air space.
3. The same ordered rear shapes and the diaphragm between elements 6 and 7.
4. A biconvex final element in both original drawings.

This supports a representative product-lineage association. The Pignons document does not print R61, numerical radii, glass identities or a patent number in the reviewed section. It cannot establish exact retail identity or prove the numerical value of a replacement radius.

### Explicit R15 reconstruction assumption

The literal table prints **R15 = −289.16** and **R16 = −67.745**. Those signs make the last element a positive meniscus. Independent tracing of that literal prescription gives normalized EFL **253.89824** and BFD **400.35502**, against the patent's stated **100** and **153.3**. The unchanged PDF and a separate literal transcription remain the source of record.

Only this reconstruction applies **R15 = +289.16**, retaining R16 = −67.745 and every other tabulated radius, spacing, index and Abbe number. It then gives EFL **100.11723**, BFD **153.42840**, and a biconvex final element. This is a specifically authorized sign-error hypothesis, not an independently established numerical erratum. The source uncertainty is disclosed in `source.errata`, the data header, the inline surface comment and the audit. The structured erratum remains `unresolved` because no second qualifying numerical or aberration source was recovered; it must not be read as a claim that an original publication prints the positive value.

## Optical Architecture

The design contains **eight spherical elements in eight air-spaced groups**. Component I consists of a negative meniscus, two very weak positive lenses and a second negative meniscus. Component II consists of a biconvex positive lens, a positive meniscus, a biconcave negative lens and the reconstructed biconvex final positive lens [1, pp. 1–3].

The independently computed isolated-component focal lengths are −137.86357 and +109.61011 source units, or −33.08726 and +26.30643 mm at 0.24×. The patent prints −137.80 and +109.67. The negative front component and positive rear component yield a long back focus: the modeled BFD/EFL ratio is **1.53249**. The system is retrofocus under the project's back-focus criterion.

### Scale, apertures and reference planes

The scale is **24 / 100 = 0.24**, using the patent's nominal focal length. It is not adjusted to make the traced EFL exactly 24 mm. The actual modeled EFL is **24.02813583 mm**, the glass track is **55.77168 mm**, and the computed paraxial last-vertex-to-image distance is **36.82281562 mm**. The first vertex therefore lies **92.59449562 mm** ahead of the image plane. The patent's printed 153.3-unit BFD would instead scale to 36.792 mm; this 0.03082 mm difference is retained as a source discrepancy.

The final image spacing uses the computed paraxial BFD. It is a derived infinity plane, not an additional tabulated distance. All radii and all fifteen tabulated intervals use the same scale. There are no aspheric coefficients to transform, and neither source supplies a numerical sensor cover plate or filter prescription.

The section locates the stop between L6 and L7, but does not dimension its axial coordinate or radius. The model splits the 9.38-unit gap equally: **1.1256 mm before and after STO**, placing it at **z = 49.38288 mm**. The engine derives a **5.37416420 mm** iris radius from f/3.5 and the entrance-pupil geometry. The entrance-pupil radius is **3.43259083 mm**. Both the gap split and aperture are modeling inferences.

Every clear radius is inferred. The final surface-radius pairs, in millimetres, are L1 **24.2/24.2**, L2 **18.5/18.5**, L3 **18.5/18.5**, L4 **14.0/13.8**, L5 **7.0/7.0**, L6 **6.8/6.8**, L7 **6.5/5.8**, and L8 **5.8/5.8**. The primary sections constrain the broad front-to-rear proportions, while exact ray envelopes and native geometry constrain the apertures. These are not measurements recovered from the drawings. A first estimate of 24.0 mm at L1 missed one edge-pupil target at each signed 41.5° field; 24.2 mm admits those rays without changing source optics or validation limits.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.6203, νd = 60.20. Glass: unmatched source coordinate; supplier unspecified. Standalone f = −103.9540 mm.**

The broad front meniscus begins the negative component. Its rear surface is more strongly curved than its front surface. Together with L4 it supplies the diverging action described by the patent; its physical aperture is the largest in the reconstruction.

### L2 — Weak Biconvex Positive

**nd = 1.6751, νd = 32.30. Glass: unmatched source coordinate; supplier unspecified. Standalone f = +225.0163 mm.**

L2 is the first weak positive member between the negative menisci. The patent specifically makes both internal front-component lenses convergent with focal lengths greater than five times the system focal length. Its computed native focal length is 937.5677 units, consistent with the printed 937.60 [1, pp. 1–2].

### L3 — Weak Biconvex Positive

**nd = 1.6751, νd = 32.30. Glass: unmatched source coordinate; supplier unspecified. Standalone f = +225.1925 mm.**

L3 is a second separate positive element, not a cemented part of L2. Its computed native focal length is 938.3022 units, against the printed 938.33. Splitting the weak positive correction between two air-spaced lenses is a distinguishing structural feature of this example.

### L4 — Negative Meniscus

**nd = 1.6203, νd = 60.20. Glass: unmatched source coordinate; supplier unspecified. Standalone f = −36.1111 mm.**

L4 completes component I and provides its strongest negative isolated-element power. The steep rear face precedes the 96.752-unit principal component gap. The source gives no clear radius for this steep surface; its inferred 13.8 mm radius remains inside the native rim-slope limit.

### L5 — Biconvex Positive

**nd = 1.6203, νd = 60.20. Glass: unmatched source coordinate; supplier unspecified. Standalone f = +45.4539 mm.**

L5 begins component II and restores convergence after the front diverging section. It is followed by a short, positive 0.1224 mm axial air gap. The source spacing is retained rather than merged into a cemented group.

### L6 — Positive Meniscus

**nd = 1.6203, νd = 60.20. Glass: unmatched source coordinate; supplier unspecified. Standalone f = +39.0778 mm.**

The positive meniscus is the last element ahead of the diaphragm. Its concave image-side surface shapes the pupil space. The detailed allocation of coma and spherical correction among it and its neighbors is an optical interpretation, not a separate patent claim.

### L7 — Biconcave Negative

**nd = 1.6498, νd = 33.70. Glass: unmatched source coordinate; supplier unspecified. Standalone f = −17.0206 mm.**

L7 is the strong negative corrector immediately behind the stop. Its lower Abbe number distinguishes it from the higher-Abbe positive lenses around it. The unequal inferred clear radii preserve the short following air gap without rim cuts or a relaxed gap-sag allowance.

### L8 — Reconstructed Biconvex Positive

**nd = 1.6203, νd = 60.20. Glass: unmatched source coordinate; supplier unspecified. Standalone f = +21.4926 mm.**

L8 closes the positive rear component. Its biconvex form depends explicitly on the positive-R15 assumption. The literal two-negative-radius form remains separately preserved and must not be described as the same reconstructed surface shape.

## Glass Identification and Selection

The patent supplies three index/Abbe coordinates and no glass names, supplier assignments, line-index table or anomalous partial-dispersion data. It refers to the spectrum's **D** line and labels the numerical column `nd`, without a numerical wavelength or chemical identification. The model uses the engine's helium-d convention as a disclosed assumption; an explicit sodium-D identification has not been established.

| Source coordinate | Elements | Modeled dispersion |
|---|---|---|
| 1.6203 / 60.20 | L1, L4, L5, L6, L8 | Abbe estimate; no identified production curve |
| 1.6751 / 32.30 | L2, L3 | Abbe estimate; no identified production curve |
| 1.6498 / 33.70 | L7 | Abbe estimate; no identified production curve |

The `Unmatched` annotations prevent a speculative modern glass assignment. The higher-Abbe negative front lenses with lower-Abbe positive internal members, and the lower-Abbe negative rear corrector with higher-Abbe positive neighbors, are consistent with ordinary chromatic balancing. These data do not justify an APO claim, a secondary-spectrum result or a historical supplier identity. Numerical results below are monochromatic reference-index geometry; predicted color and MTF remain conditional on the glass assumptions.

## Focus Mechanism

The source provides one optical prescription and no finite-focus spacing law. The model therefore uses **NO_INTERNAL_RECONSTRUCTION**, no variable gaps, and the supported **1e9 m infinity sentinel** for `focus.closeFocusM`. Both focus endpoints have identical optical geometry; the sentinel is not a physical minimum focus distance.

Pignons lists infinity to **16 inches**, or **0.4064 m**, for the production 24 mm lens [2]. That value is stored separately as marketing metadata. It does not create a close-focus model or establish which elements move. The period 60 mm mechanical length is likewise not the modeled glass track or first-vertex-to-image distance.

## Numerical Verification and Field Coverage

Independent reduced-angle matrices and a separately implemented sequential paraxial trace agree on both the literal and reconstructed prescriptions. The native builder agrees with the scaled reconstruction to floating-point precision. The aperture audit gives **f/3.499999997**, limited by STO.

Native geometry retains the default validation bounds. The minimum sampled material thickness is **1.2072 mm**, the minimum shared-gap clearance **0.1224 mm**, the largest shared-gap intrusion **83.83%**, and the maximum rim angle **64.0692°**. The iris remains in air through its f/3.5–f/22 stroke. Native render diagnostics hide **0 mm** on every element.

The declared period field is **83° full angle**, or **±41.5°**. Its exact chief ray reaches **21.33907105 mm** image height, **98.5638%** of the project's 21.65 mm full-frame corner reference. An additional diagnostic finds a clear chief ray at the corner at **41.86737°**, outside the declared field. The model retains 83° and does not claim that the period number certifies the full format corner. At 30° the chief image height is 13.71403 mm; at 37° it is 17.96394 mm.

An exact diagnostic targets a uniform 317-point disk in the physical stop plane at fields 0°, 10°, 20°, 30°, 37° and ±41.5°, at f/3.5 and f/8. All **4,438** final rays are aimed and transmitted, with no unresolved targets, clipped hits or backward flight segments. This samples the inferred clear apertures; it is not a radiometric illumination calculation or a proof of an entire continuous pupil.

| Half-field | RMS spot radius at the fixed paraxial image plane, f/3.5 | f/8 |
|---|---:|---:|
| 0° | 10.649 µm | 2.819 µm |
| 20° | 53.390 µm | 23.431 µm |
| 30° | 79.466 µm | 43.670 µm |
| 37° | 91.079 µm | 48.668 µm |
| 41.5° | 193.116 µm | 31.081 µm |

These are centroid-relative geometric radii under uniform stop-plane sampling, without diffraction, coatings, production tolerances or verified spectral curves. The large full-aperture edge spot is retained as a numerical limitation of the reconstruction. It is not evidence of production performance. No measured manufacturer MTF or source-provided acceptance threshold was recovered.

## Sources

1. Pierre Angénieux, FR 1,214,945, *Objectif photographique du type grand-angulaire*, original three-page scan; numerical table p. 2 and section p. 3. The unchanged private source copy is preserved with its literal transcription and reconstruction audit.
2. Pignons S.A., *ALPA Reflex 35 mm Supplement*, imprint PSA 2E 261, PDF p. 3, [period product specification and optical section](https://www.cameramanuals.org/alpa/alpa_reflex_supplement.pdf#page=3). The imprint is retained without assigning an exact issue date.
