## Patent Reference and Design Identification

**Patent:** [US 2,231,699](https://patents.google.com/patent/US2231699A/en)  
**Filed:** October 28, 1939  
**Granted:** February 11, 1941  
**Inventor:** Harold F. Bennett  
**Assignee:** Eastman Kodak Company  
**Title:** Telephoto objective  
**Example details:** The Figure 1 drawing sheet and matching specification table, normalized to 100 mm at f/3.8.

This model reproduces the first of the patent's two numerical examples (Figure 1), filed in October 1939 and granted in February 1941. No production lens, mount, film format or factory prescription identity has been established. It is included for the unusually simple four-element telephoto and its stated distortion-reduction objective, not as proof that the claimed aberration correction has been achieved by this reconstruction.

## Optical Architecture

Two cemented doublets are separated by a literal 39.5 mm air gap. The front component is positive; the rear is negative. The rear cemented interface is convex toward the front component and separates glasses with a large index difference. All six source radii, four center thicknesses, the group separation and nD/V values are transcribed unchanged. Figure 2 is a different example and supplies none of this file's values.

The source does not specify an iris plane. A stop at the midpoint of the inter-group air gap is an explicit modeling choice, not a recovered factory location. Front clear semi-diameters of 13.5 mm and rear semi-diameters of 10 mm are heuristic and not source dimensions. The physical iris radius is calculated by the native paraxial f-number rule. No glass or surface was bent to improve performance.

## Elements and Glass

| Element | Form | nD | V | Group |
| --- | --- | ---: | ---: | --- |
| L1 | Positive biconvex | 1.498 | 67.0 | Front doublet |
| L2 | Negative concave–plane | 1.664 | 35.9 | Front doublet |
| L3 | Negative biconcave | 1.516 | 64.1 | Rear doublet |
| L4 | Positive biconvex | 1.639 | 55.5 | Rear doublet |

Historical sodium-D references are explicit. V values are printed, but actual C/F/g indices and manufacturer glass identities are not. The engine's native Abbe dispersion model is an approximation, not a measured Sellmeier fit or proof of secondary-spectrum correction. No public glass name is asserted.

## Focus and Aperture

Infinity only. Independent first-order calculation gives EFL 100.058344 mm and last-vertex BFD 33.452187 mm at sodium D; the 0.058% EFL difference from the printed 100 mm is retained, not rescaled away. An independent exact near-axis spherical trace reproduces the BFD. The image plane uses that computed paraxial focus, not a tuned wide-open best-focus plane.

The estimated midpoint iris has radius 8.236727 mm under the native f/3.8 rule; entrance-pupil semi-diameter is 13.165572 mm. The extreme nominal axial pupil-edge rays clip at the iris; the central 90% meridional pupil samples pass. This is not a demonstrated fully transmitted f/3.8 beam. The default viewer half-field of about 12.55° is a software estimate, not patent coverage. Strong clipping appears in the sampled outer fields; no source field angle or factory image circle is inferred from those samples.

## Aspherical Surfaces

None. All refracting surfaces are spherical or flat.

## Validation and Limits

Every radius, thickness, spacing, index and Abbe number was checked against both printed tables, the one on drawing sheet 1 and the one in the specification; they agree with each other and with this model. The computed focal length is 100.06 mm against the printed 100 mm (+0.06 %). The back focus is 33.45 mm and the length from the front vertex to the image is 90.75 mm, a telephoto ratio of about 0.91. The front component computes to +72.16 mm and the rear component to −145.58 mm.

The patent's stated proportions hold for this example. The rear component's outer radii are 0.16 F and 0.34 F (close to the "about 1/6 F" and "about 1/3 F" of the text), its cemented face is 0.525 F, and the components are 0.395 F apart. Across that cemented face the index rises by 0.123 and the Abbe number falls by 8.6, inside the claimed limits of at least 0.07 and at most 15.

The model has limits that come from its estimates, not from the patent. The 10 mm rear clear radius is smaller than the rear doublet drawn in Figure 1, so toward the edge of the default field the rear doublet cuts away much of the oblique beam. The patent states no field angle; the default half-field of about 12.6° is the viewer's own setting. The front crown's Abbe number of 67 lies where glasses with unusual partial dispersion occur, and the patent gives no partial-dispersion data, so the MTF view shows the reference wavelength only. No claim is made about how well the distortion correction stated in the patent is reproduced.

## Sources

1. [Original patent scan](https://patentimages.storage.googleapis.com/08/a7/d6/22ad8eeb84b291/US2231699.pdf), drawing sheets 1–2, specification table and certificate of correction. The certificate corrects the prose index difference from 1 to .1; it does not change the transcribed Figure 1 table.
2. [Patent record](https://patents.google.com/patent/US2231699A/en), filing/grant dates and attribution.
