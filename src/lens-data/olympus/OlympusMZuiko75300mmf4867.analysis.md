## Patent Reference and Design Identification

**Patent:** JP 2011-186095 A  
**Title:** Telephoto zoom lens  
**Filed:** 8 March 2010  
**Published:** 22 September 2011  
**Inventors:** Noriyuki Ogasawara; Takehisa Koyama  
**Assignee:** Sigma Corporation  
**Embodiment analyzed:** Example 2, numerical tables on PDF pages 11–12, Figure 8.

Example 2 is probably the design of the original OLYMPUS M.ZUIKO DIGITAL ED 75-300mm f/4.8-6.7, released in 2010. The patent is Sigma's; no public source states that Sigma designed or made the lens, so the attribution is circumstantial, and the model does not relabel the assignee as Olympus. The construction drawing of the 2013 II version shows the same layout, which supports the architecture but does not prove identical factory numbers.

Example 2 is preferred over Example 3 for its symmetric biconcave E6 (equal absolute radii at R10/R11) and its negative R12; both examples share the 18-element/13-group construction and three high-index elements, so the choice is probable rather than proven. The patent's focal lengths of 76.91 / 140.00 / 290.98 mm and F-numbers of 4.95 / 5.57 / 6.92 are used unscaled; the marketed 75–300 mm and F4.8–6.7 are rounded figures.

## Optical Architecture

The five main groups have positive, positive, negative, positive and negative powers. The patent's reference signs name them L1–L5, and the last group divides into negative L5a and L5b components; because an L-number is a group in this patent, the elements are numbered E1–E18 here and the cemented pairs C1–C5. Eighteen elements form thirteen groups, five of them cemented pairs. The stop is surface 16, 7.35 mm ahead of surface 17. A 4.14 mm low-pass filter plate follows the last lens with 1 mm of air to the image plane; it is traced as a plane-parallel plate, not drawn as a lens element.

All three published infinity configurations are unchanged. The patent states that L2 does not move during zooming (paragraph 0069) and that four groups move; Figure 8 draws L2's movement arrows horizontal. The 78 intermediate stations follow a derived cam that respects this: L2 stays fixed relative to the image plane, L1, L3 and L5 follow monotone splines through their three printed positions (parameterised by log focal length), and L4 is solved paraxially at each station to keep the infinity image on the fixed plane. From wide to tele, L1 moves 47.97 mm and L5 22.61 mm toward the object, and the overall length grows monotonically. L3 and L4 reverse, as the printed spacings require: L3 moves 8.10 mm toward the image by the middle station and then 0.23 mm back, and L4 moves about 2.0 mm toward the image to a turning point near 120 mm and then 5.2 mm toward the object, ending 3.2 mm ahead of its wide position. Stations are spaced geometrically in focal length, forty per printed interval. This is a derived compensation law, not the factory cam; only the three printed stations are marked as published.

## Element-by-Element Analysis

The table lists the elements with the patent's d-line constants. Shape labels refer to each element's own two surfaces; they do not assign unique aberration corrections or cemented-component power to individual glasses.

| Element | Shape | nd | Abbe number | Catalog equivalent |
|---|---|---:|---:|---|
| E1 | Negative Meniscus | 1.80610 | 40.73 | NBFD13 (Hoya equivalent) |
| E2 | Biconvex Positive | 1.49700 | 81.61 | FCD1 (Hoya equivalent) |
| E3 | Positive Meniscus | 1.45860 | 90.19 | FCD10A (Hoya equivalent) |
| E4 | Biconcave Negative | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| E5 | Biconvex Positive | 1.54814 | 45.82 | E-FEL1 (Hoya equivalent) |
| E6 | Biconcave Negative | 1.80420 | 46.50 | N-LASF44 (Schott equivalent) |
| E7 | Biconcave Negative | 1.80420 | 46.50 | N-LASF44 (Schott equivalent) |
| E8 | Biconvex Positive | 1.84666 | 23.78 | FDS90 (Hoya equivalent) |
| E9 | Biconvex Positive | 1.59282 | 68.62 | FCD505 (Hoya equivalent) |
| E10 | Biconvex Positive | 1.48749 | 70.44 | H-QK3L (CDGM equivalent) |
| E11 | Negative Meniscus | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| E12 | Biconcave Negative | 1.91082 | 35.25 | TAFD35 (Hoya equivalent) |
| E13 | Biconvex Positive | 1.51680 | 64.20 | H-K9L (CDGM equivalent) |
| E14 | Biconvex Positive | 1.72916 | 54.67 | TAC8 (Hoya equivalent) |
| E15 | Biconvex Positive | 1.80518 | 25.46 | FD60 (Hoya equivalent) |
| E16 | Biconcave Negative | 1.77250 | 49.62 | N-LAF34 (Schott equivalent) |
| E17 | Positive Meniscus | 1.54072 | 47.20 | E-FEL2 (Hoya equivalent) |
| E18 | Negative Meniscus | 1.72916 | 54.67 | TAC8 (Hoya equivalent) |

L1 comprises E1–E3, including the front cemented pair C1 and the very-low-dispersion third element. L2 is E4–E5. L3 is E6–E8. The stop (SP in the patent) precedes L4's E9–E14 relay assembly, which contains the cemented pairs C2 and C3. L5a is the C4 focusing doublet E15/E16; L5b is the C5 rear doublet E17/E18. The group boundaries follow the patent.

## Glass and Dispersion

Every source nd and νd is retained. Named equivalents are selected from the available catalog by proximity in those two coordinates; they do not identify the actual supplier, melt or full dispersion. Olympus lists one Super ED, two ED and three HR (high-refractive) elements. The model takes E3 (νd 90.19, the only glass above νd 90) as the Super ED element, E2 (nd 1.49700 / νd 81.61) and E9 (nd 1.59282 / νd 68.62, an FCD505-class anomalous-dispersion crown) as the ED elements, and the three nd 1.91082 elements E4, E11 and E12 as the HR elements. These assignments are inferred from the patent constants; the patent does not name them. E10 (nd 1.48749 / νd 70.44) is an FK5-class crown and is not counted as ED. No unmeasured apochromatic or partial-dispersion performance is claimed. The rear filter plate uses the patent's nd 1.5168 / νd 64.20.

## Focus Mechanism

The patent states that L5a moves from the object side toward the image on focusing closer (claim 1), and Figure 8 marks it with a focus arrow pointing imageward. The model reproduces that motion by increasing D26 and reducing the gap after surface 29 by equal amounts, leaving L5b and the image plane fixed relative to the other groups at that zoom state. Seventeen focus keyframes are solved paraxially for the object conjugate; the L5a travel to 1.5 m is 1.35 mm at the wide end, 3.56 mm at 140 mm and 8.30 mm at the tele end.

The modeled close limit is a 1.5 m object-to-image distance across the zoom range. Olympus's original release gives 0.9 m at 75 mm and 1.5 m elsewhere; the wide-end 0.9 m limit is not modelled. No finite-focus patent station, factory focus law or manufacturer close-range performance is asserted.

## Aspherical Surfaces

All source refracting surfaces are spherical. No asphere is introduced. The low-pass plate is plane-parallel.

## Clear Apertures and Model Limits

No clear semi-diameters are tabulated. The radii are read from the wide-end section of Figure 8, scaled from the drawn vertex positions: 22.5 mm for the C1 doublet and 22.0 mm for E3 in L1, 11.4/11.2 mm for the two L2 elements, 8.1/8.0/8.5 mm across the three L3 elements, 10.3/10.5/11/11 mm stepping rearward through L4, 7.1 mm for L5a and 7.7 mm for L5b. Each value was checked against the on-axis beam at every zoom and focus state. They are drawing estimates, not recovered production aperture measurements; no gap-sag override or hidden geometry trim is used.

With the L2-fixed cam, the corner chief ray reaches the full image height and the on-axis beam reaches the stated f-number at all 81 zoom stations without rim clipping. The front-group, L2/L3 and focus-group rims cut part of the full-field bundle, as real lenses of this type do: at full aperture the format corner keeps about 79 % of the axial illumination at the wide end and about 74 % at the tele end. This is not a full-pupil illumination claim. Manufacturer MTF and factory close-focus behaviour have not been reproduced.

## Sources

- [JP2011186095A](https://patents.google.com/patent/JP2011186095A/en), Example 2 tables and Figure 8; paragraph 0069 for the fixed L2.
- [Olympus original 2010 product announcement](https://www.olympus.co.jp/jp/news/2010b/nr100914zuikoj.html), production identity and 0.9 m / 1.5 m close-focus limits.
- Original-period Olympus catalog and later OM System lens-construction drawings, used as architectural checks, not numerical factory prescriptions.
