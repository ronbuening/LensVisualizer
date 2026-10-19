## Patent Reference and Design Identification

**Patent:** JP 2011-186095 A  
**Title:** Telephoto zoom lens  
**Filed:** 8 March 2010  
**Published:** 22 September 2011  
**Inventors:** Noriyuki Ogasawara; Takehisa Koyama  
**Assignee:** Sigma Corporation  
**Embodiment analyzed:** Example 2, numerical tables on PDF pages 11–12, Figure 8.

Example 2 is probably the design of the original OLYMPUS M.ZUIKO DIGITAL ED 75-300mm f/4.8-6.7, released in 2010. The patent is Sigma's; no public source states that Sigma designed or made the lens, so the attribution is circumstantial, and the model does not relabel the assignee as Olympus. The construction drawing of the 2013 II version shows the same layout, which supports the architecture but does not prove identical factory numbers.

Example 2 is preferred over Example 3 for its symmetric biconcave L6 (equal absolute radii at R10/R11) and its negative R12; both examples share the 18-element/13-group construction and three high-index elements, so the choice is probable rather than proven. The patent's focal lengths of 76.91 / 140.00 / 290.98 mm and F-numbers of 4.95 / 5.57 / 6.92 are used unscaled; the marketed 75–300 mm and F4.8–6.7 are rounded figures.

## Optical Architecture

The five main groups have positive, positive, negative, positive and negative powers. The last group divides into negative G5a and G5b components. Eighteen elements form thirteen groups, five of them cemented pairs. The stop is surface 16, 7.35 mm ahead of surface 17. A 4.14 mm low-pass filter plate follows the last lens with 1 mm of air to the image plane; it is traced as a plane-parallel plate, not drawn as a lens element.

All three published infinity configurations are unchanged. The patent states that G2 does not move during zooming (paragraph 0069) and that four groups move. The 78 intermediate stations follow a derived cam that respects this: G2 stays fixed relative to the image plane, G1, G3 and G5 follow monotone splines through their three printed positions (parameterised by log focal length), and G4 is solved paraxially at each station to keep the infinity image on the fixed plane. G1, G4, G5 and the overall length then move monotonically from wide to tele. Stations are spaced geometrically in focal length, forty per printed interval. This is a derived compensation law, not the factory cam; only the three printed stations are marked as published.

## Element-by-Element Analysis

The table lists the elements with the patent's d-line constants. Shape labels refer to each element's own two surfaces; they do not assign unique aberration corrections or cemented-component power to individual glasses.

| Element | Shape | nd | Abbe number | Catalog equivalent |
|---|---|---:|---:|---|
| L1 | Negative Meniscus | 1.80610 | 40.73 | NBFD13 (Hoya equivalent) |
| L2 | Biconvex Positive | 1.49700 | 81.61 | FCD1 (Hoya equivalent) |
| L3 | Positive Meniscus | 1.45860 | 90.19 | FCD10A (Hoya equivalent) |
| L4 | Biconcave Negative | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| L5 | Biconvex Positive | 1.54814 | 45.82 | E-FEL1 (Hoya equivalent) |
| L6 | Biconcave Negative | 1.80420 | 46.50 | N-LASF44 (Schott equivalent) |
| L7 | Biconcave Negative | 1.80420 | 46.50 | N-LASF44 (Schott equivalent) |
| L8 | Biconvex Positive | 1.84666 | 23.78 | FDS90 (Hoya equivalent) |
| L9 | Biconvex Positive | 1.59282 | 68.62 | FCD505 (Hoya equivalent) |
| L10 | Biconvex Positive | 1.48749 | 70.44 | H-QK3L (CDGM equivalent) |
| L11 | Negative Meniscus | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| L12 | Biconcave Negative | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| L13 | Biconvex Positive | 1.51680 | 64.20 | H-K9L (CDGM equivalent) |
| L14 | Biconvex Positive | 1.72916 | 54.67 | TAC8 (Hoya equivalent) |
| L15 | Biconvex Positive | 1.80518 | 25.46 | FD60 (Hoya equivalent) |
| L16 | Biconcave Negative | 1.77250 | 49.62 | N-LAF34 (Schott equivalent) |
| L17 | Positive Meniscus | 1.54072 | 47.20 | E-FEL2 (Hoya equivalent) |
| L18 | Negative Meniscus | 1.72916 | 54.67 | TAC8 (Hoya equivalent) |

G1 comprises L1–L3, including the front cemented pair and the very-low-dispersion third element. G2 is L4–L5. G3 is L6–L8. The stop precedes G4's L9–L14 relay assembly. G5a is the L15/L16 focusing doublet; G5b is the L17/L18 rear doublet. The group boundaries follow the patent.

## Glass and Dispersion

Every source nd and νd is retained. Named equivalents are selected from the available catalog by proximity in those two coordinates; they do not identify the actual supplier, melt or full dispersion. Olympus lists one Super ED, two ED and three HR (high-refractive) elements. The model takes L3 (νd 90.19, the only glass above νd 90) as the Super ED element, L2 (nd 1.49700 / νd 81.61) and L9 (nd 1.59282 / νd 68.62, an FCD505-class anomalous-dispersion crown) as the ED elements, and the three nd 1.91082 elements L4, L11 and L12 as the HR elements. These assignments are inferred from the patent constants; the patent does not name them. L10 (nd 1.48749 / νd 70.44) is an FK5-class crown and is not counted as ED. No unmeasured apochromatic or partial-dispersion performance is claimed. The rear filter plate uses the patent's nd 1.5168 / νd 64.20.

## Focus Mechanism

The patent states that G5a moves toward the image on focusing closer. The model reproduces that motion by increasing D26 and reducing the gap after surface 29 by equal amounts, leaving G5b and the image plane fixed relative to the other groups at that zoom state. Seventeen focus keyframes are solved paraxially for the object conjugate; the largest G5a travel is 8.30 mm.

The modeled close limit is a 1.5 m object-to-image distance across the zoom range. Olympus's original release gives 0.9 m at 75 mm and 1.5 m elsewhere; the wide-end 0.9 m limit is not modelled. No finite-focus patent station, factory focus law or manufacturer close-range performance is asserted.

## Aspherical Surfaces

All source refracting surfaces are spherical. No asphere is introduced. The low-pass plate is plane-parallel.

## Clear Apertures and Model Limits

No clear semi-diameters are tabulated. The radii are read from the wide-end section of Figure 8, scaled from the drawn vertex positions: 23.5 mm for G1, 11.4/11.2 mm for the two G2 elements, 8.1/8.0/8.5 mm across the three G3 elements, 10.3/10.5/11/11 mm stepping rearward through G4, 7.1 mm for G5a and 7.7 mm for G5b. Each value was checked against the on-axis beam at every zoom and focus state. They are drawing estimates, not recovered production aperture measurements; no gap-sag override or hidden geometry trim is used.

With the G2-fixed cam, the corner chief ray reaches the full image height and the on-axis beam reaches the stated f-number at all 81 zoom stations without rim clipping. The front-group, G2/G3 and focus-group rims cut part of the full-field bundle, as real lenses of this type do: at full aperture the format corner keeps about 79 % of the axial illumination at the wide end and about 76 % at the tele end. This is not a full-pupil illumination claim. Manufacturer MTF and factory close-focus behaviour have not been reproduced.

## Sources

- [JP2011186095A](https://patents.google.com/patent/JP2011186095A/en), Example 2 tables and Figure 8; paragraph 0069 for the fixed G2.
- [Olympus original 2010 product announcement](https://www.olympus.co.jp/jp/news/2010b/nr100914zuikoj.html), production identity and 0.9 m / 1.5 m close-focus limits.
- Original-period Olympus catalog and later OM System lens-construction drawings, used as architectural checks, not numerical factory prescriptions.
