# Source and geometry audit

**Patent:** US 3,844,640
**Filed:** November 22, 1972
**Granted:** October 29, 1974
**Inventor:** Jihei Nakagawa
**Assignee:** Olympus Optical Co., Ltd.
**Title:** Large-aperture wide-angle photographic lens system
**Example details:** Physical PDF page 4, body and Claim 1; Figure 1 on page 2. Native focal length 1 scaled ×35.

The H.ZUIKO 35mm f/2 association is secondary, not a factory-certified prescription. The indexed PhotonsToPhotos record identifies this product, and the eight-element/seven-group architecture, scaled 35 mm focal length and f/2 aperture are consistent. The primary body and high-resolution claim crop both confirm R5 = 81.3104. The primary body and claim both print R7 = 0.7053, or 24.6855 mm; the secondary 24.6225 mm is not adopted.

Stop location follows the secondary scaffold: 1.6745 mm after S9, leaving 3.0400 mm before S10. Its radius is derived from f/2, not copied as patent data. Secondary SDs required corrections: S4 10.235 → 10.000 mm for the default rim slope, and S11–13 11.055 → 10.400 mm to clear the rear air gap. All other secondary radii remain unchanged.

Default geometry checks pass without gap-sag overrides, rim cuts or hidden rendering trims. Eleven focus states have zero trim. Literal radii, axial distances, glass constants and aspheric coefficients round-trip to the source packet. Normalized radius/index fingerprints find no duplicate among the other 1,096 catalog prescriptions.

At infinity, full-pupil 64×64 sampling gives center/mid/edge transmitted fractions 1.000, 0.901, 0.243, with zero unaimed/failed samples. Edge angle is 32.000°. These are model-dependent pupil fractions, not measured illumination. The severe modeled edge vignetting is a conspicuous limitation of the assumed apertures, not evidence of factory performance.

Reference-line diffraction MTF was calculated at center, mid field and edge at the literal image plane, with a maximum grid of 128. All fields report converged. A separate best-axial-focus diagnostic shifts the plane -0.119751 mm; that shift is not baked into the model. Source-plane paraxial offset is 0.001560 mm. No agreement with empirical review charts is asserted. Near/intermediate MTF is not certified.

No browser UI pass is claimed. Focused corpus tests and build results are reported in the archive, not represented as a full aggregate-suite pass.


Source pixels inspected locally before modeling. Original PDF, source rows, diagnostics and reproducibility scripts are included in the delivery archive. No commit, push, PR, merge, publication or deployment.
