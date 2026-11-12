# YONGNUO YN 40mm f/2.8N: patent design and production association

## Patent Reference and Design Identification

**Patent:** CN 207216120 U  
**Application Number:** 201721346680.8  
**Filed:** 2017-10-16  
**Granted:** 2018-04-10  
**Inventor:** Yongxiao Zhuang (庄永肖; romanized here)  
**Applicant:** Shenzhen Yongnuo Photographic Equipment Co., Ltd. (深圳市永诺摄影器材股份有限公司)  
**Title:** Imaging Lens and Imaging Device (成像镜头及成像装置)  
**Example details:** Embodiment 2 (实施例2), ¶0072 onward, Tables 1/2 on PDF page 8, Fig. 2 on PDF page 10. No scale conversion.

The patent states 40 mm f/2.8 and six taking elements. The 2017 launch specifications give six elements in four groups, an aspherical element, Nikon F mount, f/2.8–22 and a minimum focus distance of about 0.3 m. A secondary review reproduces a section attributed to Yongnuo; its ordered structure agrees with Fig. 2, including two cemented pairs and a final element with two aspherical faces. Together with the OpticalBench bibliography, this supports a probable production association without establishing the factory glass or exact prescription. Embodiment 2 is the patent's sole numerical embodiment; the secondary bibliography's different numbering does not change that identification. The 2017 product introduction predates the 2018 patent publication.

## Optical Architecture

Two positive optical groups flank the iris. Their published focal lengths are 104 mm and 47 mm; the prescription gives 105.002 mm and 47.858 mm. The six taking elements form four physical groups. Camera-side plane plate 90 is represented separately and excluded from the taking-element count. The calculated EFL is 40.2604108 mm, 0.651% above the stated 40 mm.

The printed spacings place the image 61.76 mm behind the first vertex, with a 38.75 mm distance from the last taking surface. Paraxial infinity focus lies 0.821424 mm farther back. The model retains the taking prescription and 2 mm plate but changes the printed 1 mm plate-to-image gap to a derived 1.8214 mm, giving a total track of 62.5814 mm and 39.5714 mm behind the last taking surface. No single prescription misprint has been established.

## Element-by-Element Analysis

### L1: Positive biconvex front member, cemented to L2

nd = 1.80099, νd = 34.97. Glass: S-LAM66 (Ohara catalog equivalent). Isolated-in-air thick-lens focal length = +33.052 mm, derived, not the in-system power of a cemented member.

The positive front member shares its rear surface with L2 in cemented doublet C1.

### L2: Negative biconcave rear member of front doublet

nd = 1.603423, νd = 38.01. Glass: E-F5 (Hoya catalog equivalent). Isolated-in-air thick-lens focal length = -20.847 mm, derived, not the in-system power of a cemented member.

The negative rear member completes C1; its concave rear face borders the short air gap to L3.

### L3: Positive meniscus between front doublet and iris

nd = 1.883004, νd = 40.81. Glass: TAFD30 (Hoya catalog equivalent). Isolated-in-air thick-lens focal length = +37.699 mm, derived, not the in-system power of a cemented member.

This high-index positive meniscus lies between C1 and the iris and completes the positive front optical group.

### L4: Negative biconcave front member of rear doublet

nd = 1.755, νd = 27.53. Glass: E-FD4 (Hoya catalog equivalent at the printed index precision). Isolated-in-air thick-lens focal length = -12.960 mm, derived, not the in-system power of a cemented member.

The negative member directly behind the iris shares its rear surface with L5 in cemented doublet C2.

### L5: Positive biconvex rear member of rear doublet

nd = 1.835, νd = 42.74. Glass: S-LAH55VS (Ohara catalog equivalent at the printed index precision). Isolated-in-air thick-lens focal length = +18.641 mm, derived, not the in-system power of a cemented member.

The positive member completes C2 and is followed by a 0.12 mm air gap to L6.

### L6: Positive meniscus with two aspheric faces

nd = 1.829, νd = 37.1. Glass: Unmatched (printed d-line index and Abbe number). Isolated-in-air thick-lens focal length = +31.239 mm, derived, not the in-system power of a cemented member.

The rear positive meniscus carries both aspherical surfaces. Detailed aberration contributions of individual elements are not established by the prescription alone.

## Glass Identification and Selection

The source explicitly gives the helium d-line reference at 587.6 nm (¶0078). All six nd/νd pairs and the plate's 1.5168/64.2 are retained. Five taking glasses have matching catalog equivalents; L4 and L5 match at the patent's three-decimal index precision. The rear plate matches H-K9L (CDGM). L6 remains unmatched and uses Abbe-based dispersion. Catalog equivalents supply spectral curves without identifying the production supplier or melt. No maker-published special-dispersion positions support anomalous-dispersion tags. The last taking surface's 35.75 mm gap precedes the plate and is not the total back focus.

## Focus Mechanism

Only infinity focus is modeled, with the derived image-plane spacing described above. The 2017 launch specifications state DC-motor autofocus, manual focus and a minimum focus distance of about 0.3 m. The patent supplies no close-focus prescription or focusing-group travel, so the model does not reproduce finite-distance focusing.

## Aspherical Surfaces

Both faces of L6 are aspherical. The patent uses the standard conic constant K and even polynomial coefficients (mm units):

| Surface | K | A4 | A6 | A8 | A10 |
| --- | --- | --- | --- | --- | --- |
| S10 | -21.3807 | -2.231688e-5 | 1.1154082e-7 | -1.6802243e-9 | 1.1278013e-11 |
| S11 | 0.70151 | 1.530636e-5 | 1.8595495e-7 | -1.8656923e-9 | 1.3794272e-11 |

The patent's prose reverses the radial and sag variable names relative to its displayed equation; the coefficients and conic convention follow that equation. The manufacturing method is not independently established.

## Apertures and Source Geometry

Clear semi-diameters are read from Fig. 2. They are schematic estimates with approximately ±0.3 mm observational uncertainty, not factory tolerances. S3 has a 7.45 mm curved-face radius and an 8.83 mm outer rim; S7 has a 6.60 mm face radius and a 7.87 mm outer rim. The straight extensions beyond those curved faces are treated as opaque, an assumption not specified by the patent.

The f/2.8–22 aperture range follows the 2017 launch specifications. The iris radius derived from f/2.8 is 6.37510 mm, consistent with the drawing estimate of 6.3654 ± 0.3 mm. The drawing does not publish a dimensional stop schedule. The rear plate's clear diameter is unspecified and its aperture is assumed nonclipping.

## Model Scope and Limitations

The 30° half-field is an assumed projection limit; the patent prints no field angle. The inferred 36 × 24 mm format corner reaches about 29.34°, and its chief ray clears the modeled rims. Peripheral pupil clipping remains and is not an area-weighted illumination measurement. The derived image-plane correction resolves paraxial infinity defocus but does not establish the source of the printed-spacing discrepancy or exact production image quality.

## Sources

- [Original CN 207216120 U PDF](https://patentimages.storage.googleapis.com/8f/80/cc/231dd010a52b21/CN207216120U.pdf).
- [Patent record](https://patents.google.com/patent/CN207216120U/zh).
- [OpticalBench bibliography](https://photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), secondary association.
- [Named retail review](https://www.smzdm.com/zy/detail/avdjz3g/) and [reproduced section](https://am.zdmimg.com/201709/10/59b5157a57c1d3786.jpg_e600.jpg), secondary and not verified maker-hosted.
- [2017 launch specifications and product features](https://nikonrumors.com/2017/08/01/new-yongnuo-yn-40mm-f2-8n-and-100mm-f2n-full-frame-dslr-lenses-for-nikon-f-mount.aspx/), including the reproduced Yongnuo specifications for Nikon F mount, f/2.8–22, autofocus and about 0.3 m minimum focus.
