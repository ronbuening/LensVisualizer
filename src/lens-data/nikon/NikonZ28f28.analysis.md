# NIKKOR Z 28mm f/2.8 — Patent Example 2

## Patent Reference and Design Identification

**Patent:** WO 2022/071249 A1

**Inventor:** Toshiyuki Shimada

**Applicant:** Nikon Corporation

**Priority:** September 30, 2020, JP2020-164402

**Published:** April 7, 2022

**Embodiment analyzed:** Example2, Table2 and Figure3

The diagram represents the compact nine-element, eight-component patent design associated with the catalog's28mm f/2.8 lens. Its source values are28.824mm, f/2.909, half-field38.029° and image semi-height21.7mm. These replace rounded marketing values in numerical controls. The patent association does not establish a measured production prescription, suppliers or software-correction behavior.

## Optical Architecture

The optical groups are positive G1, positive G2, positive G3 and negative G4. The stop is fixed between G1 and G2. G1 contains a negative and positive singlet. G2 contains a cemented pair, negative singlet and compound positive L24. G3 contains the weak negative aspheric L31 and positive L32. G4 is the final negative singlet.

L24 combines a glass body and a resin layer. Two entries preserve their interface, so the nine physical patent elements require ten medium entries. The separate rear filter is excluded. Three aspheric surfaces belong to two physical lens elements: L24's resin exit and both faces of L31. L31 remains a powered lens despite its small paraxial power; it is not an omitted filter.

## Element-by-Element Analysis

Individual focal lengths are calculated with center thickness and both vertex radii for each medium isolated in air. In particular, the resin layer is about397.37mm rather than the previous thin-lens413.6mm. These values do not represent powers within cemented or compound assemblies.

| Element | nd | νd | Glass interpretation | Isolated FL (mm) |
|---|---|---|---|---|
| L11 | 1.53172 | 48.78 | 532488 class; J-LLF6 catalog spectral proxy (production supplier unspecified) | -26.74 |
| L12 | 1.80400 | 46.60 | S-LAH65V (OHARA, inferred coordinate counterpart) | 24.39 |
| L21 | 2.00100 | 29.12 | S-LAH99 (OHARA, inferred coordinate counterpart) | 10.60 |
| L22 | 1.80518 | 25.45 | S-TIH6 (OHARA, inferred coordinate counterpart) | -13.17 |
| L23 | 1.80809 | 22.74 | 808227 class; J-SFH1 catalog spectral proxy (production supplier unspecified) | -22.25 |
| L24g | 1.80400 | 46.60 | S-LAH65V (OHARA, inferred coordinate counterpart) | 21.77 |
| L24r | 1.56093 | 36.64 | Resin layer (source coordinate; formulation unspecified) | 397.37 |
| L31 | 1.53113 | 55.73 | 531557 — source optical material (unmatched; supplier unspecified) | -1032.75 |
| L32 | 1.80400 | 46.60 | S-LAH65V (OHARA, inferred coordinate counterpart) | 45.83 |
| L41 | 1.64769 | 33.73 | S-TIM22 (OHARA, inferred coordinate counterpart) | -44.28 |

L11/L12 form the weak positive front group. L21/L22 and L23 share the power and correction in G2; compound L24 adds positive power and an aspheric boundary. G3 pairs an aspheric weak negative with a positive plano-convex lens. The final negative G4 modifies the emerging cone and field behavior. These are qualitative roles, not independent proofs of aberration performance.

## Glass Identification and Selection

All commercial names are inferred coordinate or spectral counterparts, with source nd/νd authoritative. L11 and L23 retain J-LLF6/J-SFH1 proxies. The source identifies L24's resin layer but not its formulation, manufacturer or curing process.

L31's1.53113/55.73 coordinate does not match its former S-BAL41 label. The annotation is now the source-derived code531557 with identity unresolved. A local catalog search and exact-coordinate public source search did not establish a compatible named material. The similar-index BSC6 has a different Abbe number and is not substituted. This remains a glass-identification follow-up. No patent-listed anomalous partial dispersion is supplied for these rows.

## Aspherical Surfaces

Equation(A), paragraph95 on PDF p.20, uses1−κh²/R². Table2 listsκ=1 for all three aspheric surfaces, so **standard K=0** is verified and retained. All sixteen nonzero polynomial terms also match the original scan.

The source S14 A8 is **−6.64821×10⁻¹⁰**, as already stored. One English OCR rendering reverses digits to−6.68421×10⁻¹⁰; the original scan and Japanese text resolve this in favor of the existing coefficient. No coefficient edit follows the erroneous OCR.

## Focus Mechanism

The published gaps are:

| Gap | Infinity (mm) | Near (mm) |
|---|---|---|
| D5 (after stop) | 4.850 | 3.169 |
| D13 | 4.450 | 1.339 |
| D17 | 3.700 | 8.492 |

Their sum remains13mm. G2 moves1.681mm objectward and G3 moves4.792mm objectward; G1, stop and G4 stay fixed. D17 is an internal gap and is no longer mislabeled BF. Intermediate motion is interpolated between the published endpoints.

The source near D0 is135.390mm from object to first surface. Adding the original physical track54.610mm gives the retained source label0.19m. The filter-omitted model has54.064852mm track and an independently computed near distance0.189450650m, beta−0.2032457, consistent with source beta−0.203 within its stated precision. The small distance difference includes the explicitly omitted filter path. Infinity EFL28.823820mm reproduces the source28.824mm.

## Semi-Diameter Estimation Notes

Original Figure3 on PDF p.47 was rendered at600dpi and rotated for inspection. The40.927mm first-to-last-lens vertex span calibrates optical rims independently of the filter, brackets and callouts. Front optical radii are6.7/6.2mm; L12 uses6.2mm. G2's cemented pair uses6.0/6.0/6.4mm, L23 uses6.9/8.2mm, and compound L24 uses11mm. G3 uses12.3/13.1mm on L31 and14.3mm on L32; G4 uses14.6/16.1mm. Unequal optical radii exclude the drawn mechanical shoulders.

These replace larger ray-envelope estimates. The adopted values pass surface/image-circle checks and show no hidden runtime trimming at infinity, midpoint or near. They are inferred optical outlines, not source-listed clear apertures.

## Filter Omission and Limitations

The source's separate FL surfaces20–21 comprise1.6mm at nd1.51680, followed by0.86mm air. They remain absent under the lens specification. The final gap is corrected from11.223mm to **11.223+1.6/1.51680+0.86=13.137852mm**, matching source Bfa13.138mm. The old data omitted both the plate's equivalent distance and the final air gap; the former claim that a separate camera model supplied them was incorrect.

Equivalent spacing preserves d-line paraxial propagation, without the filter's higher-order and chromatic effects. Compound lens resin remains modeled. Production identification, supplier/chemistry and correction-pipeline claims are qualified; the source optical prescription and its limitations are explicit.

## Sources

- Original local WO2022071249A1.pdf: equation/definitions p.20, Table2 pp.26–28 and Figure3 p.47.
- [WO2022071249A1 publication](https://patents.google.com/patent/WO2022071249A1/en), used for locating the scanned source and checking the OCR discrepancy.
