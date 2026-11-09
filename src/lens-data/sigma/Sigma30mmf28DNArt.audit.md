# Source and geometry audit

**Patent:** JP 2012-234169 A
**Filed:** April 18, 2012
**Published:** November 29, 2012
**Inventor:** Noriyuki Ogasawara
**Assignee:** Sigma Corporation
**Title:** Imaging optical system with anti-vibration mechanism
**Example details:** Physical PDF pages 21–22; Figure 1 and aberration Figure 2 on page 32.

The DN Art product association is qualified. The PhotonsToPhotos index maps Example 1 to this lens, while Sigma lists seven elements in five groups and a field near 50.7°, consistent with the 50.49° example. However, the patent explicitly includes stabilization and the marketed DN Art lacks OS. The model is the centered patent design, not a certified factory prescription, and is not the unrelated DP2 Merrill 30mm design already in the catalog.

The stop is at printed S4; its radius is derived from f/2.89. All lens semi-diameters are illustrative figure-proportion estimates: S1–3 8.0, S5–7 7.5, S8–9 8.5, S10–11 9.5, S12–13 11.0 mm. None are patent-listed clear apertures.

Default geometry checks pass without gap-sag overrides, rim cuts or hidden rendering trims. Eleven focus states have zero trim. Literal radii, axial distances, glass constants and aspheric coefficients round-trip to the source packet. Normalized radius/index fingerprints find no duplicate among the other 1,096 catalog prescriptions.

At infinity, full-pupil 64×64 sampling gives center/mid/edge transmitted fractions 1.000, 1.000, 0.656, with zero unaimed/failed samples. Edge angle is 25.180°. These are model-dependent pupil fractions, not measured illumination. The APS-C format corner falls slightly inside the printed 25.245° half-field.

Reference-line diffraction MTF was calculated at center, mid field and edge at the literal image plane, with a maximum grid of 128. All fields report converged. A separate best-axial-focus diagnostic shifts the plane -0.073494 mm; that shift is not baked into the model. Source-plane paraxial offset is 0.000250 mm. No agreement with empirical review charts is asserted. Near/intermediate MTF is not certified.

No browser UI pass is claimed. Focused corpus tests and build results are reported in the archive, not represented as a full aggregate-suite pass.


Source pixels inspected locally before modeling. Original PDF, source rows, diagnostics and reproducibility scripts are included in the delivery archive. No commit, push, PR, merge, publication or deployment.
