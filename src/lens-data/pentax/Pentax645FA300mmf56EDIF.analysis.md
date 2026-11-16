# Pentax SMC FA 645 300mm f/5.6 ED [IF]

## Patent Reference and Design Identification

**Patent:** US 2002/0041452 A1 (granted as US 6,580,568 B2 on June 17, 2003)  
**Title:** Telephoto lens system  
**Application Number:** US 09/921,897  
**Filed:** August 6, 2001; priority August 9, 2000 (JP 2000-241711)  
**Published:** April 11, 2002  
**Inventor:** Hiroyasu Ozaki  
**Applicant:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Example details:** Table 1, Figure 1; infinity state, no scale factor.

The patent describes a compact inner-focusing telephoto of three groups, positive, negative and positive, in which only the negative second group moves for focusing. Embodiment 1 is a 292.35 mm F5.7 design with a 6.7° half-field. The patent does not name a commercial lens; the link to the smc PENTAX-FA645 300mm F5.6 ED [IF] rests on agreement in construction:

1. Seven air-spaced elements in seven groups, as Ricoh Imaging lists for the production lens.
2. One element of ED-class glass (L2, nd 1.497, νd 81.6), consistent with the "ED" designation.
3. Inner focusing by a middle group, consistent with "[IF]".
4. A focal length of 292.35 mm and F5.7 against the marketed 300 mm and F5.6.
5. A 13.4° full field against the 13.5° the maker gives for the 645 film format (10.5° is the figure for the smaller digital 645 sensor).
6. A front semi-diameter near 31 mm, compatible with the lens's 67 mm filter thread.
7. An August 2000 priority date and the Pentax corporate predecessor as applicant.

The FA★645 300mm F4 ED [IF] has eight elements in eight groups and does not fit this patent.

Five embodiments are tabulated. Embodiment 4 is F4.6 and Embodiment 5 has a 7.2° half-field, so neither matches the product's figures as well. Embodiment 2 (292.49 mm, F5.7) places the stop between the last two elements. Embodiments 1 and 3 (292.38 mm, F5.7) both place the stop ahead of the rear group and fit the product equally; no maker cross-section has been published that would separate them, and Embodiment 1 is used here.

Sources: [patent](https://patents.google.com/patent/US20020041452A1/en), [patent PDF](https://patentimages.storage.googleapis.com/2c/c3/b9/524e2bf841a355/US20020041452A1.pdf), [grant](https://patents.google.com/patent/US6580568B2/en), [maker film-format specifications](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index645n2_long.html), [maker product page](https://www.ricoh-imaging.co.jp/english/products/lens/645/telephoto/smcpentax-fa645-300/).

## Optical Architecture

The lens is a true telephoto: the track from the first surface to the image plane is 246.00 mm for a 292.35 mm focal length, a telephoto ratio of 0.84. The three groups are:

- **G1 (positive, f = 171.52 mm):** L1, L2 and L3, a positive–positive–negative air-spaced triplet.
- **G2 (negative, f = −177.21 mm):** L4 and L5, the focusing group.
- **G3 (positive, f = 577.29 mm):** L6 and L7, behind the fixed aperture stop.

The stop sits 20.25 mm behind L5 and 1.50 mm ahead of L6. The patent's conditions on the group powers give f/f1 = 1.704, f/|f2| = 1.650 and f/f3 = 0.506 for this embodiment, and the model reproduces all three.

## Element-by-Element Analysis

| Element | Type | nd | νd | f (mm) | Role |
|---|---|---:|---:|---:|---|
| L1 | Biconvex Positive | 1.48749 | 70.2 | 148.2 | Low-dispersion front collector |
| L2 | Biconvex Positive | 1.49700 | 81.6 | 130.5 | ED positive element, near-flat rear face |
| L3 | Biconcave Negative | 1.66998 | 39.3 | −102.7 | Achromatizing negative of G1 |
| L4 | Negative Meniscus | 1.65412 | 39.7 | −85.4 | Negative element of the focusing group |
| L5 | Positive Meniscus | 1.80518 | 25.4 | 176.8 | Dense-flint positive of the focusing group |
| L6 | Biconvex Positive | 1.56732 | 42.8 | 128.8 | Positive element behind the stop |
| L7 | Negative Meniscus | 1.83400 | 37.2 | −123.6 | Negative rear meniscus, concave to the object |

L1 and L2 share the front group's positive power between two low-dispersion crowns, and L3 follows across a 0.99 mm air gap. The patent requires the mean Abbe number of L1 and L2 to exceed that of L3 and L4 by more than 30 (36.4 here) and sets a condition on the mean partial dispersion ratio of L3 and L4, so that the two negative elements reduce the secondary spectrum left by the crowns.

## Glass Identification and Selection

The patent prints nd and νd for every element and names no glass. Each printed pair coincides with a catalog glass: S-FSL5 (L1), S-FPL51 (L2), S-BAH32 (L3), S-NBH5 (L4), S-TIH6 (L5), S-TIL26 (L6) and S-LAH60 (L7), all Ohara designations. Equivalent glasses from other makers share several of these positions, and the production supplier is not established.

L2 is the only ED-class glass in the prescription and is taken as the ED element of the production lens; the maker states that ED glass is used without giving a count or a position.

Table 1 also prints the partial dispersion ratio (ng − nF)/(nF − nC) for L3 (0.5774) and L4 (0.5703). Both are about 0.004 below the current catalog values for S-BAH32 and S-NBH5, so the data file keeps the printed ratios, stored as deviations of −0.0003 and −0.0067 from the normal line 0.6438 − 0.001682·νd.

## Focus Mechanism

The patent moves G2 toward the image when focusing from infinity to the shortest distance, with G1, the stop and G3 fixed. It tabulates the infinity state only, so the data file models infinity focus and no focus travel. The production lens focuses to 2.2 m (0.16× magnification).

## Aspherical Surfaces

None; all fourteen surfaces are spherical.

## Model Scope and Limitations

- The paraxial focal length of the model is 292.353 mm and its back focus 116.663 mm, against the printed 292.35 mm and 116.66 mm.
- The stop radius follows the patent's F5.7, not the marketed F5.6.
- The patent publishes no clear apertures. The semi-diameters (31, 30, 26, 22, 21, 19 and 22 mm for L1 to L7) are estimates; L3 is held to 26 mm by the narrow air gap behind L2. With these rims the corner of the 645 frame is vignetted by roughly a quarter at full aperture, which reflects the estimates and is not a published property of the lens.
- The corner of the 645 frame lies marginally beyond the patent's 6.7° half-field.
- Figure 1 of the patent is schematic and carries no dimensions; it confirms the group arrangement and the stop position only.
