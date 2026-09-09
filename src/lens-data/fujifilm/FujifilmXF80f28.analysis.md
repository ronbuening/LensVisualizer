# Fujifilm XF80 Macro — Patent Model

## Patent Reference and Design Identification

**Patent:** US 2018/0246292 A1

**Inventors:** Ryoko Tomioka and Daiki Kawamura

**Assignee:** Fujifilm Corporation

**Filed:** 2018-02-27

**Priority:** JP 2017-036188, 2017-02-28

**Published:** 2018-08-30

**Embodiment analyzed:** Example 1, Tables 1–4 and Figure 1

The diagram uses the 16-element, 12-component macro example associated with the XF80. Its prescription remains at the patent scale, 78.79 mm f/2.88; the 80mm f/2.8 product name is separate. This correspondence does not establish identical production glass, coatings, stabilization effectiveness or actuators.

The original PDF shows Figure 1 on p. 2, the architecture and focus explanation in paragraphs 75–81 on p. 39, and Tables 1–4 with the asphere equation on p. 40. The title-page illustration is Example 8 and is not the source for this model.

## Optical Architecture

The four groups have positive–negative–positive–negative power. G1 has four singlets, including the element carrying both aspherical surfaces. G2 and G3 each have a singlet and cemented pair. G4 contains two subgroups: stabilization group G4a has a cemented pair and a singlet; fixed G4b has a singlet and cemented pair. Four cemented pairs produce 12 air-separated components from 16 elements.

The stop is source surface 14 between G2 and G3. Paragraph 75 explicitly says its drawn symbol indicates position rather than size or shape. The model calibrates the physical stop from f/2.88 rather than measuring that symbol.

Semi-diameters are inferred from the optical rims of the infinity section in Figure 1, rendered at 600 dpi and calibrated against the 108.91 mm first-to-last-glass span. The front radius is approximately 22 mm, the aspherical element 14.7 mm and the rear pair 13.7 mm. Source figures do not publish effective aperture dimensions. Surfaces 5, 11 and 23 retain tighter radii of 15.7, 10.2 and 10 mm because larger drawing-edge trials fail the adjacent-surface clearance checks. These limits prevent mechanical or schematic outlines from becoming overlapping optical surfaces.

## Element-by-Element Analysis

Each isolated focal length is independently calculated from the source radii, thickness and index using the thick-lens formula in air. It is not the power of an assembled doublet.

| Element | Form | nd | νd | Isolated focal length (mm) |
|---|---|---:|---:|---:|
| L1a | Biconvex Positive | 1.72916 | 54.67 | +83.0 |
| L1b | Biconvex Positive | 1.49700 | 81.54 | +76.6 |
| L1c | Biconcave Negative | 1.62588 | 35.70 | -30.8 |
| L1d | Biconvex Pos. (2× Asph) | 1.58313 | 59.46 | +33.5 |
| L2a | Biconcave Negative | 1.58913 | 61.13 | -31.1 |
| L2b | Negative Meniscus | 1.67300 | 38.15 | -29.2 |
| L2c | Positive Meniscus | 2.00069 | 25.46 | +28.5 |
| L3a | Biconvex Positive | 1.43875 | 94.66 | +68.0 |
| L3b | Biconvex Positive | 1.49700 | 81.54 | +41.8 |
| L3c | Negative Meniscus | 1.84666 | 23.78 | -92.5 |
| L4aa | Positive Meniscus | 2.00272 | 19.32 | +51.5 |
| L4ab | Biconcave Negative | 1.69700 | 48.52 | -24.2 |
| L4ac | Negative Meniscus | 1.53775 | 74.70 | -63.4 |
| L4ba | Positive Meniscus | 1.95375 | 32.32 | +41.4 |
| L4bb | Biconvex Positive | 1.51680 | 64.20 | +49.0 |
| L4bc | Negative Meniscus | 1.95906 | 17.47 | -49.0 |

G1 supplies positive collection and a negative correcting singlet. G2's negative power and G3's positive power provide opposite focus movements. The low-dispersion positive elements in G1/G3 balance higher-dispersion negative partners. G4a combines three elements for lateral stabilization, while G4b supplies the final fixed correction. These descriptions interpret the architecture; they do not assign measured aberration corrections to individual elements.

## Glass Identification and Selection

The patent gives numerical nd and νd, not glass suppliers or production ED designations. All catalog names are inferred counterparts: S-LAL18, S-FPL51, E-F1, M-BACD12, S-BAL35, S-NBH52, TAFD40, S-FPL55, S-TIH53, E-FDS2, S-LAM59, S-FPM3, S-LAH98, S-BSL7 and S-NPH3. The original numerical coordinates remain authoritative, including the source νd=64.20 for the rear crown.

L1b, L3a, L3b and L4ac have high Abbe numbers. Their anomalous partial dispersion is inferred from catalog counterparts. The source does not establish a count of branded ED/Super ED elements or the use of calcium fluoride. The diagram therefore distinguishes inferred dispersion from a patent-listed material identity.

## Aspherical Surfaces

L1d carries both aspherical surfaces, source 7 and 8. The source equation uses KA in the term 1−KA·C²h²; its KA=1 maps to standard conic K=0. All even polynomial coefficients A4 through A20 are transcribed from Table 4. Both conics and all 18 polynomial coefficients were checked against the rendered original table and retained. Their validity is constrained to the modeled optical rims, not arbitrary extrapolation beyond the glass.

## Focusing Mechanism

Paragraph 76 and Figure 1 identify G1/G4 as stationary relative to the image. G2 moves 15.35 mm imageward and G3 moves 15.95 mm objectward. The stop remains fixed.

| Gap | Infinity (mm) | Life-size station (mm) |
|---|---:|---:|
| DD8: G1–G2 | 2.34 | 17.69 |
| DD13: G2–stop | 20.39 | 5.04 |
| DD14: stop–G3 | 19.53 | 3.58 |
| DD19: G3–G4 | 6.50 | 22.45 |

The four gaps sum to 48.76 mm at both endpoints. An independent paraxial calculation using the rounded source prescription gives magnification −1.00096, EFL 59.26 mm and approximately 0.24643 m physical object-to-image distance at the near station. The distance is reconstructed, while the source explicitly labels the station β=−1.0. Intermediate slider positions and inverse-distance labels are estimates between the two published endpoints.

## Stabilization

The patent identifies G4a as the subgroup that moves transversely for camera-shake correction. The diagram shows the centered axial prescription and its focus motion; it does not animate lateral OIS displacement. The source supports the subgroup identification, but does not establish a five-stop production performance rating.

## Aperture and Image Formation

Table 2 gives f/2.88 and full field 20.2° at infinity, and f/3.99 and full field 5.0° at the life-size station. The aperture control uses nominal f/2.88, with a fixed physical iris during focus. The source finite-conjugate f/3.99 is separate from the viewer's calculated effective-aperture estimate.

The source rear stack consists of 27.42 mm air, a 2.85 mm plate at nd=1.51680 and 1 mm air. The plate is excluded from the lens surfaces under the lens-data specification. The remaining air-equivalent distance is 30.2989557 mm, preserving paraxial focus; the physical track including the plate is 140.18 mm. Omitting the plate also omits its higher-order and chromatic effects.

## Model Limitations

Radii, thicknesses, glass coordinates, asphere coefficients and focus gap endpoints are patent values. Optical rims, catalog identity, the finite object distance and intermediate focus states are reconstructed or inferred. The model does not establish production coatings, actuators, stabilization effectiveness or branded ED classifications. The centered optical calculations do not simulate OIS displacement.
