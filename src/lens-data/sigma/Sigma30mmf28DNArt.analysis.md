## Patent Reference and Design Identification

**Patent:** JP 2012-234169 A
**Filed:** April 18, 2012
**Published:** November 29, 2012
**Inventor:** Noriyuki Ogasawara
**Assignee:** Sigma Corporation
**Title:** Imaging optical system with anti-vibration mechanism
**Example details:** Physical PDF pages 21–22; Figure 1 and aberration Figure 2 on page 32.

The DN Art product association is qualified. The PhotonsToPhotos index maps Example 1 to this lens, while Sigma lists seven elements in five groups and a field near 50.7°, consistent with the 50.49° example. However, the patent explicitly includes stabilization and the marketed DN Art lacks OS. The model is the centered patent design, not a certified factory prescription, and is not the unrelated DP2 Merrill 30mm design already in the catalog.

## Optical Architecture

Seven elements form five components. The pre-stop L1/L2 cemented pair is positive overall. Post-stop L3/L4 and L5 form the translating positive focus group. The rear negative L6 and positive L7 form the final group. L1/L2 share S2 and L3/L4 share S6. The patent permits lateral motion within the rear group for stabilization, but no decentered state is modeled.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.883, νd = 40.8. Glass: unmatched patent optical constants. f = 19.80 mm (isolated thick-element estimate).

This element shares a cemented boundary with its partner; the isolated focal length is descriptive, not the power of the assembled doublet.

### L2 — Biconcave Negative

nd = 1.58144, νd = 40.89. Glass: unmatched patent optical constants. f = -22.02 mm (isolated thick-element estimate).

This element shares a cemented boundary with its partner; the isolated focal length is descriptive, not the power of the assembled doublet.

### L3 — Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: unmatched patent optical constants. f = -12.20 mm (isolated thick-element estimate).

This element shares a cemented boundary with its partner; the isolated focal length is descriptive, not the power of the assembled doublet.

### L4 — Biconvex Positive

nd = 1.8042, νd = 46.5. Glass: unmatched patent optical constants. f = 15.79 mm (isolated thick-element estimate).

This element shares a cemented boundary with its partner; the isolated focal length is descriptive, not the power of the assembled doublet.

### L5 — Biconvex Positive

nd = 1.7725, νd = 49.62. Glass: unmatched patent optical constants. f = 23.03 mm (isolated thick-element estimate).

Its signed isolated power describes its contribution to the sequential system; no unverified catalog glass or fabrication method is assigned.

### L6 — Biconcave Negative

nd = 1.56732, νd = 42.84. Glass: unmatched patent optical constants. f = -34.00 mm (isolated thick-element estimate).

Its signed isolated power describes its contribution to the sequential system; no unverified catalog glass or fabrication method is assigned.

### L7 — Biconvex Positive

nd = 1.7725, νd = 49.62. Glass: unmatched patent optical constants. f = 49.91 mm (isolated thick-element estimate).

Its signed isolated power describes its contribution to the sequential system; no unverified catalog glass or fabrication method is assigned.

## Glass Identification and Selection

The source specifies nd and νd, not material catalog identities. These are retained directly. Dispersion away from the reference line is an approximation from those two constants; no measured secondary-spectrum agreement, coating transmission, or production glass equivalence is claimed.

## Focus Mechanism

The printed 500 mm state changes d4 from 6.9859 to 5.6552 mm and d9 from 1.5000 to 2.8307 mm. Only S5–9 move, by 1.3307 mm toward the object. The image and all other surfaces stay fixed. The rounded prescription computes 0.5001262 m object-to-image distance. Intermediate slider states are interpolation, not published configurations. The table does not explicitly define the distance reference, so no finite MTF conjugate is certified.

## Aspherical Surfaces

S9 and S13 use the standard conic-base sag plus A4, A6, A8 and A10 polynomial. **Both conic constants are unprinted. K = 0 is an explicit modeling assumption at both surfaces**, not a recovered source value.

| Surface | Assumed K | A4 | A6 | A8 | A10 |
| --- | --- | --- | --- | --- | --- |
| 9 | 0 | 1.688300e-05 | -6.944680e-09 | 2.503420e-11 | 0.000000e+00 |
| 13 | 0 | 9.508400e-08 | -5.479770e-09 | 2.455670e-11 | 0.000000e+00 |

No asphere manufacturing process is inferred.

## Verification Summary and Modeling Limits

The stop is at printed S4; its radius is derived from f/2.89. All lens semi-diameters are illustrative figure-proportion estimates: S1–3 8.0, S5–7 7.5, S8–9 8.5, S10–11 9.5, S12–13 11.0 mm. None are patent-listed clear apertures.

Default geometry checks pass without gap-sag overrides, rim cuts or hidden rendering trims. Eleven focus states have zero trim. Literal radii, axial distances, glass constants and aspheric coefficients round-trip to the source packet. Normalized radius/index fingerprints find no duplicate among the other 1,096 catalog prescriptions.

At infinity, full-pupil 64×64 sampling gives center/mid/edge transmitted fractions 1.000, 1.000, 0.656, with zero unaimed/failed samples. Edge angle is 25.180°. These are model-dependent pupil fractions, not measured illumination. The APS-C format corner falls slightly inside the printed 25.245° half-field. A separate exact printed-edge pupil check transmits 65.30% at infinity, 71.00% at mid focus and 76.58% at the near state, again with zero unaimed or failed samples.

Reference-line diffraction MTF was calculated at center, mid field and edge at the literal image plane, with a maximum grid of 128. All fields report converged. A separate best-axial-focus diagnostic shifts the plane -0.073494 mm; that shift is not baked into the model. Source-plane paraxial offset is 0.000250 mm. No agreement with empirical review charts is asserted. Near/intermediate MTF is not certified.

No browser UI pass is claimed. Focused corpus tests and build results are reported in the archive, not represented as a full aggregate-suite pass.

## Sources

- https://patents.google.com/patent/JP2012234169A/en
- https://patentimages.storage.googleapis.com/f5/a6/bb/4c873c52b42cd3/JP2012234169A.pdf
- https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm
- https://www.sigma-global.com/en/lenses/a_30_28/
- https://www.dpreview.com/articles/4606181052/field-test-sigma-dn-lenses/
- https://admiringlight.com/blog/review-sigma-30mm-f2-8-dn-art-sony-e-mount/3/
