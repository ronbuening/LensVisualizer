# TAYLOR 180mm f/4.9 (US 2,582,362 Design)

## Patent and Design Identification

**Patent:** US 2,582,362 A, _Photographic Triplet Objective_

**Inventors:** Philip H. Taylor

**Assignee:** Northrop Aircraft, Inc.

**Filed:** 3 July 1950

**Published:** 15 January 1952

**Example details:** Sole numerical example; prescription on PDF p. 2, repeated in claims 1 and 2 on PDF p. 3.

The patent describes a photographic triplet at f/4.9, with a nominal seven-inch focal length and a 10.0° field. All dimensional values are converted from inches to millimetres by a factor of 25.4. The table's focal length is 7.0691 inches, or 179.555 mm; the model computes to 179.553 mm.

No production lens or camera is documented for this prescription. Northrop Aircraft, Inc. is the patent assignee; the patent does not establish a lens manufacturer or product name.

## Optical Architecture

Three air-spaced singlets form three groups in a positive–negative–positive arrangement. The patent drawing labels them 1, 2 and 3 from front to rear. The first and third lenses are biconvex collectors, and the middle lens is a biconcave dispersive element. All six optical surfaces are spherical.

The aperture stop lies between the first and second elements, as both the drawing and the numerical description specify. The patent attributes correction of spherical aberration, astigmatism, field curvature, coma, distortion and the sine condition to this arrangement (PDF p. 2). Its statements describe the design's intended correction rather than measured performance of a production lens.

## Element-by-Element Analysis

### Element 1 — Biconvex Positive

nD = 1.517, νD = 64.5. Glass: BSC-2, borosilicate crown, unmatched to an exact catalog row. Standalone focal length: +104.33 mm.

The front crown starts convergence toward the image. Its strongly curved front face and much weaker rear face place most of its refractive power at the first surface. The patent prints nC = 1.51462 and nF = 1.52264.

### Element 2 — Biconcave Negative

nD = 1.617, νD = 36.6. Glass: F4 (Sumita), spectral proxy for the patent's DF-2 dense flint. Standalone focal length: −43.88 mm.

The middle element provides negative power and greater dispersion than either crown, balancing their positive power and chromatic contributions. It sits behind the stop. The patent prints nC = 1.61216 and nF = 1.62901.

### Element 3 — Biconvex Positive

nD = 1.5725, νD = 57.8. Glass: LBC-2, light barium crown; catalog coordinate match S-BAL11 (Ohara). Standalone focal length: +69.82 mm.

The rear crown completes image formation, with most of its power at the more strongly curved rear face. The patent prints nC = 1.5696 and nF = 1.5795. The catalog match does not establish the supplier of the historical glass.

## Glass Identification and Spectral Data

The patent explicitly defines ND as the sodium D line at 5893 Å, NF as the hydrogen F line at 4861 Å, and NC as the hydrogen C line at 6563 Å. Each element retains the printed D-line index, Abbe number, and C/F indices. The D-line reference applies throughout, without substituting helium d.

L1's BSC-2 has no catalog row within the site's spectral-proxy tolerance of 0.002 in index and 0.25 in Abbe number at sodium D. The DF-2 label for L2 identifies F4 (Sumita) as a spectral proxy, with catalog-minus-printed differences ΔnD = −0.00056 and ΔνD = +0.01 at sodium D.

L3's LBC-2 matches S-BAL11 (Ohara) within the site's exact-match tolerance. At sodium D, the catalog row gives approximately nD = 1.57241 and νD = 57.73, differing from the printed values by −0.00009 and −0.07. The historical suppliers and melts are unknown.

The model traces all three glasses using the printed C/D/F indices. It estimates each g-line index from the C–F span and interpolates between these lines. The patent supplies no g-line indices or anomalous-dispersion designations.

Using those printed indices, the calculated C-line EFL/BFD are 179.69/143.83 mm, and the F-line values are 179.43/143.39 mm. These are paraxial wavelength comparisons, not measured image-quality results.

## Focus Mechanism

The model is focused at infinity. The patent gives no close-focus distance, movement law or finite-conjugate prescription. The image plane is the computed paraxial infinity plane, 143.637 mm behind surface 6, compared with the printed back focal length of 143.634 mm. The difference is approximately 0.003 mm.

## Aperture, Field and Clear Rims

The printed distance from the pole of surface 2 to the stop reads 0.7028 inch: 17.851 mm behind surface 2 and 11.240 mm before surface 3. The total air gap is 29.091 mm. The drawing places the stop closer to the front element than this numerical distance does; the numerical description determines the modeled position.

The printed stop diameter is 1.170 inch, or 29.718 mm. At the stated position it gives paraxial f/4.82 and real-ray f/4.87. The printed overall clear diameter is 1.452 inch, or 36.881 mm, giving f′/D = 4.87. These figures are consistent with the patent's rounded f/4.9 designation. At the model's f/4.9 setting, the computed stop diameter is 29.250 mm.

The patent's 10.0° field is interpreted as a full field, with a 5.0° half-field. The real chief ray at 5.0° reaches an image height of approximately 15.72 mm, giving an image-circle diameter of 31.44 mm. The chief ray clears every surface and the axial beam passes, while some off-axis pupil clipping remains. Chief-ray coverage does not establish complete corner illumination.

The patent gives a single clear diameter, not individual surface rims. The model assigns its half-diameter, 18.4404 mm, to all six faces, consistent with the drawing's nearly equal, square-cut rims. The schematic drawing does not establish individual effective diameters. The minimum glass edge thickness is approximately 1.84 mm, and the two minimum inter-element air gaps are 26.21 and 13.63 mm. The axial beam admitted by the f/4.9 iris clears every glass rim by at least 0.30 mm, and the 5.0° chief ray clears them by at least 14.14 mm. Wide-open geometric transmission is approximately 98.8% at 1.7°, 96.6% at 3.3° and 93.4% at 5.0°; this is the fraction of the pupil passing the clear apertures, without coating, absorption or natural falloff losses.

## First-Order Properties and Limits

| Quantity               |     Patent |      Model |
| ---------------------- | ---------: | ---------: |
| Effective focal length | 179.555 mm | 179.553 mm |
| Back focal length      | 143.634 mm | 143.637 mm |
| Design aperture        |      f/4.9 |      f/4.9 |
| Full field             |      10.0° |      10.0° |

The first-to-last optical surface span is 60.40 mm, and the first surface to image distance is 204.04 mm. The model retains the printed radii, glass thicknesses and total air spaces. The computed image plane differs slightly from the printed back focus; neither is a plane selected to minimize a spot size. The surfaces stay clear of each other, and no glass rim intersects the stop plane.

## Sources

1. Philip H. Taylor, [US 2,582,362 A, _Photographic Triplet Objective_](https://patents.google.com/patent/US2582362A/en), assigned to Northrop Aircraft, Inc., published 15 January 1952. PDF p. 1: drawing; p. 2: bibliographic information, numerical prescription, glass definitions, stop dimensions, field and aberration table; p. 3: claims and repeated prescription.
2. Sumita, [Optical glass catalog](https://www.sumita-opt.co.jp/en/download/), F4 dispersion data.
3. Ohara, [Optical glass catalog](https://www.ohara-inc.co.jp/en/product/catalog/), S-BAL11 dispersion data.
