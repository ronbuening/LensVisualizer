## Patent Reference and Design Identification

**Patent:** JP 2010-217838 A  
**Title:** Zoom lens having vibration-proof function  
**Inventor:** Tomoki Kono  
**Assignee:** Sigma Corporation  
**Filed:** 19 March 2009  
**Published:** 30 September 2010  
**Example:** 1

The probable production pairing is the Sigma 70-300mm f/4-5.6 DG OS introduced in 2009. The distributor's announcement gives 16 elements in 11 groups, 1.5 m minimum focus across the range, and optical stabilization. The prescription has the matching 16/11 construction and focal lengths of 70.33, 147.08 and 290.50 mm. The printed full fields (2ω) are 34.94°, 16.40° and 8.30°, respectively. Sigma's construction drawing shows the same element sequence, but the pairing remains a patent-to-production association, not a recovered factory prescription.

## Optical Construction

The four optical units have positive, negative, positive and positive power. Group 1 is the focusing unit; group 2 supplies the stabilization motion described by the patent. This model traces the centered optical system. It does not simulate lateral stabilization displacement.

All 28 rows, including the stop at row 11, keep the printed radii, thicknesses and nd/νd values, as do the three printed infinity states and three finite-object states. Published finite object distances 2945.70, 5998.33 and 11779.36 mm are measured from the first optical surface, as stated in the patent. They are not image-plane focusing distances.

## Glass and Dispersion

| Element | Shape | nd | νd | Catalog equivalent |
|---|---|---:|---:|---|
| L1 | Positive Meniscus | 1.48749 | 70.44 | H-QK3L (CDGM equivalent) |
| L2 | Negative Meniscus | 1.80611 | 40.73 | NBFD13 (Hoya equivalent) |
| L3 | Positive Meniscus | 1.497 | 81.6 | FCD1 (Hoya equivalent) |
| L4 | Biconcave Negative | 1.713 | 53.94 | LAC8 (Hoya equivalent) |
| L5 | Positive Meniscus | 1.84666 | 23.78 | FDS90 (Hoya equivalent) |
| L6 | Biconcave Negative | 1.7725 | 49.62 | N-LAF34 (Schott equivalent) |
| L7 | Biconvex Positive | 1.60342 | 38.01 | E-F5 (Hoya equivalent) |
| L8 | Biconvex Positive | 1.5168 | 64.19 | H-K9L (CDGM equivalent) |
| L9 | Biconcave Negative | 1.8061 | 33.27 | NBFD15 (Hoya equivalent) |
| L10 | Positive Meniscus | 1.51742 | 52.15 | E-CF6 (Hoya equivalent) |
| L11 | Biconvex Positive | 1.48749 | 70.44 | H-QK3L (CDGM equivalent) |
| L12 | Biconvex Positive | 1.48749 | 70.44 | H-QK3L (CDGM equivalent) |
| L13 | Biconcave Negative | 1.7495 | 35.04 | E-LAF7 (Hoya equivalent) |
| L14 | Biconvex Positive | 1.71736 | 29.5 | E-FD1L (Hoya equivalent) |
| L15 | Positive Meniscus | 1.84666 | 23.78 | FDS90 (Hoya equivalent) |
| L16 | Negative Meniscus | 1.7725 | 49.62 | N-LAF34 (Schott equivalent) |

L3 (nd 1.497, νd 81.6, FCD1-class fluorophosphate, f ≈ +96 mm) is the lens's one SLD element, the position Sigma's construction drawing shades. It is the positive half of the front cemented doublet, cemented to the high-index L2.

The printed nd/νd pairs are authoritative. Named glasses are nearby catalog equivalents for dispersion modeling, not claims of the original factory supplier or melt. No source glass value has been substituted with its equivalent's catalog value.

## Zoom and Focus Reconstruction

The three printed infinity zoom states keep D5, D10, D16 and back focus exactly. Eighty-one zoom stations are used. Between native stations, internal air gaps interpolate linearly and the back focus is solved from the Gaussian image condition. This compensation differs from linear back-focus interpolation by up to 5.798362 mm. Intermediate cam motion is derived, not published.

Closer focus moves group 1 objectward, increasing D5. Nineteen focus positions are sampled, including the three published finite states. At each native finite station, D5 is exactly 13.9067, 41.2722 or 60.2419 mm, respectively. The tiny printed finite/infinity back-focus differences are retained, rather than silently rounded away. Other finite states are paraxial solutions to the image-plane distance mapping, down to 1.5 m. Maximum derived group-1 travel is 16.563603 mm. Continuous interpolation has a sampled maximum paraxial image-plane residual of 0.019114 mm.

## Aspherical Surfaces

All source surfaces are spherical or plane. No asphere is introduced.

## Clear Apertures and Model Limitations

Clear radii are estimated because the source does not tabulate them. They were read from the wide-end section drawing (Fig. 1) and checked by real-ray trace at every zoom position and at 1.5 m: first singlet 29 mm, front doublet 27 mm; group 2 12.9 mm for the cemented doublet, 11.3 mm where the doublet's rear faces the following negative singlet, and 12.6 mm on that singlet's rear; group 3 14 mm; group 4 13.8, 13.1 and 13 mm for its first three units, 11.7 mm for the biconvex singlet and 10.5 mm on the front face of the rear cemented doublet, widening to 12.8 mm at its junction and rear. The two facing group-2 surfaces nearly meet at the rim: 11.3 mm is the height the f/5.84 on-axis beam needs there at the long end, and leaves about 0.16 mm between them. These are not measured production clear apertures.

The full-frame corner traces at every zoom position. The model does not simulate the stabilizing shift of group 2, uses derived rather than factory zoom and focus cams, and is not compared with Sigma's MTF data.

## Sources

- [JP 2010-217838 A](https://patents.google.com/patent/JP2010217838A/en), Example 1, its finite-object table and Fig. 1.
- [Gentec's Sigma 70-300mm DG OS announcement](https://www.gentec-intl.com/blogs/news/gentec-introduces-the-sigma-70-300mm-f4-5-6-dg-os-telephoto-zoom-lens-with-optical-stabilizer), product construction and minimum focusing distance.
- Sigma's construction drawing for the lens (sigma-global.com), element layout and SLD position.
