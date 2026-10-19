## Patent Reference and Design Identification

**Patent:** JP 2011-186095 A  
**Title:** Telephoto zoom lens  
**Filed:** 8 March 2010  
**Published:** 22 September 2011  
**Inventors:** Noriyuki Ogasawara; Takehisa Koyama  
**Assignee:** Sigma Corporation  
**Embodiment analyzed:** Example 2, numerical tables on PDF pages 11–12, Figure 8.

The probable production pairing is the original Olympus M.Zuiko Digital ED 75–300 mm F4.8–6.7. The optical source is explicitly a Sigma patent; the model does not relabel its assignee as Olympus or claim a proven supply contract. The original 2010 Olympus release establishes the target product. Later II optical drawings provide corroborating architectural controls, not proof that every revision has identical factory numbers.

Example 2 is favored over Example 3 by the ordered18-element/13-group construction, independently reproduced manufacturer drawing ratios, equal absolute curvatures at source R10/R11, and negative R12. Source focal lengths76.91/140.00/290.98mm and F-numbers4.95/5.57/6.92 are retained. Marketing75–300mm/F4.8–6.7 remains separate. No source length scaling or asphere interpretation is needed.

## Optical Architecture

The five main groups have positive, positive, negative, positive and negative powers. The last group divides into negative G5a and G5b components. Eighteen glass elements form thirteen components; five cemented pairs retain single glass-to-glass interfaces. Source stop16 is explicit,7.35mm before surface17. The4.14mm LPF follows the last lens, with1mm air to the image plane, and is represented as a rear plate rather than an extra powered lens.

All three published infinity configurations are unchanged. The patent states that G2 does not move during zooming (paragraph 0069) and that four groups move. The 78 intermediate stations follow a derived cam that respects this: G2 stays fixed relative to the image plane, G1, G3 and G5 follow monotone splines through their three printed positions (parameterised by log focal length), and G4 is solved paraxially at each station to keep the infinity image on the fixed plane. G1, G4, G5 and the overall length then move monotonically from wide to tele. Stations are spaced geometrically in focal length, forty per printed interval. This is a derived compensation law, not recovered factory motion; only the three source stations are marked published.

## Element-by-Element Analysis

The table describes the authored elements and source d-line constants. Shape labels refer to each element's own two surfaces; they do not assign unique aberration corrections or cemented-component power to individual glasses.

| Element | Shape | nd | Abbe number | Catalog dispersion surrogate |
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

G1 comprises L1–L3, including the front cemented pair and the very-low-dispersion third element. G2 is L4–L5. G3 is L6–L8. The stop precedes G4's L9–L14 relay assembly. G5a is the L15/L16 focusing doublet; G5b is the L17/L18 rear doublet. These assignments follow the patent group boundaries, not a count of arbitrary rendering brackets.

## Glass and Dispersion

Every source nd and νd is retained. Named equivalents are selected from the available catalog by proximity in those two coordinates; they do not identify the actual supplier, melt or full dispersion. L2/L3's high Abbe numbers and L9's low dispersion are source facts; a particular branded ED or Super-ED assignment remains an interpretation. No unmeasured apochromatic or partial-dispersion performance is claimed. The rear LPF uses source n1.5168/ν64.20.

## Focus Mechanism

The patent states that G5a moves toward the image on focusing closer. This model reconstructs that motion by increasing D26 and reducing the gap after surface29 by equal amounts, leaving G5b and the image plane fixed relative to the other groups at that zoom state. Seventeen focus keyframes are calculated by paraxial conjugate solving; the maximum derived G5a travel is8.30028mm.

The modeled close limit is1.5m object-to-image distance across the zoom range. Olympus's original release gives0.9m specifically at75mm and1.5m elsewhere. The wide-only0.9m endpoint is deliberately not reconstructed. No finite-focus source station, factory motion law or manufacturer macro performance is asserted. Continuous-state residuals and physical clipped rays remain in the validation report.

## Aspherical Surfaces

All source refracting surfaces are spherical. No asphere is introduced. The low-pass plate is plane-parallel.

## Clear Apertures and Validation Limits

No clear semi-diameters are tabulated. Inferred radii are23.5mm for G1,13mm for G2,8.1/10/11mm across the three G3 elements,11mm for G4,9mm for G5a and9.5mm for G5b. They are based on source-section proportions and nonintersection constraints, not recovered production aperture measurements. Narrowing the first G3 element prevents its strong rear sag from intruding into the next lens; no gap-sag override or hidden geometry trim is used.

With the G2-fixed cam, the repository's surface, image-circle and field-coverage audits pass at all 81 stations, and the on-axis beam reaches the stated f-number at every station without rim clipping. The inferred front-group and rear-group rims cut part of the full-field bundle, as real lenses of this type do; this is not a full-pupil illumination claim. Manufacturer MTF and factory close-focus behaviour have not been reproduced.

## Sources

- [JP2011186095A](https://patents.google.com/patent/JP2011186095A/en), Example 2 tables and Figure 8; paragraph 0069 for the fixed G2.
- [Olympus original 2010 product announcement](https://www.olympus.co.jp/jp/news/2010b/nr100914zuikoj.html), production identity and 0.9 m / 1.5 m close-focus limits.
- Original-period Olympus catalog and later OM System lens-construction drawings, used as architectural checks, not numerical factory prescriptions.
