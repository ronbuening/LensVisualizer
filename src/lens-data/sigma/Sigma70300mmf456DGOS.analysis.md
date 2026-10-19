## Patent Reference and Design Identification

**Patent:** JP 2010-217838 A  
**Title:** Zoom lens having vibration-proof function  
**Inventor:** Tomoki Kono  
**Assignee:** Sigma Corporation  
**Filed:** 19 March 2009  
**Published:** 30 September 2010  
**Example:** 1

The probable production pairing is the Sigma 70–300 mm F4–5.6 DG OS introduced in 2009. The manufacturer distributor announcement establishes 16 elements in 11 groups, 1.5 m minimum focus across the range, and optical stabilization. The prescription has the matching 16/11 construction and native 70.33/147.08/290.50 mm focal lengths. The printed full fields (2ω) are 34.94°, 16.40° and 8.30°, respectively; these source angles are distinct from the separate full-frame corner stress test. This remains a patent-to-production association, not a recovered factory drawing.

## Optical Construction

The four optical units have positive, negative, positive and positive power. Group 1 is the focusing unit; group 2 supplies the stabilization motion described by the patent. This model traces the centered optical system. It does not simulate lateral stabilization displacement.

All 28 source rows, including stop 11, retain the printed radii, thicknesses and nd/νd values. The model retains three native infinity states and three native finite-conjugate states. Published finite object distances 2945.70, 5998.33 and 11779.36 mm are measured from the first optical surface, as stated in the patent. They are not image-plane focusing distances.

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

The native nd/νd pairs are authoritative. Named glasses are nearby catalog equivalents for dispersion modeling, not claims of the original factory supplier or melt. No source glass value has been substituted with its equivalent's catalog value.

## Zoom and Focus Reconstruction

The three source infinity zoom configurations retain D5, D10, D16 and back focus exactly. Eighty-one zoom stations are used. Between native stations, internal air gaps interpolate linearly and the back focus is solved from the Gaussian image condition. This compensation differs from linear back-focus interpolation by up to 5.798362 mm. Intermediate cam motion is derived, not published.

Closer focus moves group 1 objectward, increasing D5. Nineteen shared focus keyframes include the three published finite-conjugate coordinates as well as regular intermediate samples. At each native finite station, D5 is exactly 13.9067, 41.2722 or 60.2419 mm, respectively. The tiny printed finite/infinity back-focus differences are retained, rather than silently rounded away. Other finite states are paraxial solutions to the image-plane distance mapping, down to 1.5 m. Maximum derived group-1 travel is 16.563603 mm. Continuous interpolation has a sampled maximum paraxial image-plane residual of 0.019114 mm.

## Aspherical Surfaces

All source surfaces are spherical or plane. No asphere is introduced.

## Clear Apertures and Validation Limits

Clear radii are inferred because the source does not tabulate them: first singlet 29 mm, front doublet 27 mm, group 2 11 mm, group 3 14 mm, and group 4 sections 15/13/10.5 mm. They respect retained spherical edge geometry; no gap-sag override or hidden geometry trim is used. They are not measured production clear apertures.

The runtime sample covers 1,449 zoom/focus combinations and 47,817 rays. Of these, 45,665 complete. The 2,152 rejected rays comprise 1,746 direct semi-diameter clips and 406 noBracket events classified as proven aperture misses by the pinned engine's independent analytic cap test. Raw events and classification replay are retained; no unresolved event remains in that sampled set. All 15 sampled full-frame corner chief rays converge and trace successfully. This does not establish complete-pupil illumination or agreement with manufacturer MTF.

Full repository CI and browser integration have not been certified. Source roundtrip, targeted type/lint checks, corpus tests and metadata outcomes are recorded separately in the validation report; unfinished checks are not passes.

## Sources

- [JP2010217838A](https://patents.google.com/patent/JP2010217838A/en), complete original preserved, Example 1 and finite-conjugate table.
- [Gentec's Sigma 70–300 DG OS announcement](https://www.gentec-intl.com/blogs/news/gentec-introduces-the-sigma-70-300mm-f4-5-6-dg-os-telephoto-zoom-lens-with-optical-stabilizer), product construction and minimum focusing distance; complete HTML preserved.
