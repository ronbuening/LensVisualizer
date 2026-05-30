# Sigma APO Macro 105mm F2.8 EX DG OS HSM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2012-58682 A  
**Application Number:** 特願2010-204605 (P2010-204605)  
**Filed:** 13 September 2010  
**Published:** 22 March 2012  
**Inventor:** Noriyuki Ogasawara (小笠原 典行)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Macro Lens (マクロレンズ)  
**Embodiment analyzed:** Example 4 (実施例４)

JP 2012-58682 A describes a floating inner-focus macro lens for 1:2 to 1:1 photography, with a lens-shift optical-stabilizer group and a diagonal field in the 20°–25° class. Six numerical examples are given. Example 4 is the prescription transcribed here and is the best match to the production Sigma APO Macro 105mm F2.8 EX DG OS HSM.

The identification rests on converging evidence rather than on a single number. Example 4 has 16 glass elements in 11 air-separated groups when cemented pairs are counted as groups. Sigma's official product specification lists the production lens as 16 elements in 11 groups, a full-frame DG lens, with a 23.3° angle of view, 1:1 maximum magnification, 31.2 cm minimum focusing distance, a 62 mm filter thread, nine rounded diaphragm blades, and optical stabilization. The patent example gives f = 101.71 mm, Fno = 2.91, 2ω = 24.09° at infinity, and β = 1:1 at the closest tabulated focus position. The small difference between the patent's 101.71 mm design focal length and the marketed 105 mm designation is within ordinary production naming practice; the data file records both values rather than scaling the patent prescription.

The focus and stabilization mechanisms also match the product description. The patent fixes L1, L2b/stop, and L3 relative to the image plane while L2a and L2c move independently during focus (¶0029). Sigma describes the lens as using floating inner focusing with two lens groups moving separately. The patent assigns stabilization to the negative L3a component, shifted perpendicular to the optical axis (¶0050, ¶0060), corresponding to Sigma's OS concept.

## Optical Architecture

The design is a six-component, three-main-group macro lens. In photographic use it is a short-telephoto macro lens, but by strict optical-design terminology it is not a telephoto construction: the first-surface-to-image track is about 168.10 mm at infinity, so TL/EFL ≈ 1.65 rather than less than 1. The patent's 望遠系 language refers to telephoto-like relationships between selected internal positive and negative components, not to the whole lens satisfying the classical telephoto ratio.

Read object-to-image, the power distribution is:

- **L1 — fixed positive front group.** Four elements: a high-index biconvex positive, a cemented positive/negative achromat using an ED crown, and a weak positive meniscus. Paraxial focal length: +53.85 mm.
- **L2a — moving negative focus component.** A biconcave singlet followed by a cemented biconcave/positive-meniscus pair. Paraxial focal length: −32.91 mm.
- **L2b — fixed positive stop component.** The aperture stop SP sits immediately before a single biconvex positive. Paraxial focal length: +122.09 mm.
- **L2c — moving positive focus component.** A biconvex singlet followed by a cemented biconvex/biconcave pair. Paraxial focal length: +57.10 mm.
- **L3a — fixed negative optical-stabilizer component.** A cemented positive-meniscus/biconcave doublet. Paraxial focal length: −50.17 mm.
- **L3b — fixed positive rear component.** A cemented biconcave/biconvex pair followed by a biconvex positive. Paraxial focal length: +111.94 mm.

The patent explicitly frames L1/L2a and L2c/L3 as paired positive-negative or positive-rear relationships for aberration balancing (¶0031). It also states that L1 and L2a are particularly sensitive because ray heights are large there and coma, astigmatism, and distortion are strongly interdependent (¶0032–0033). This is why neither L1 nor L2a is chosen as the stabilizing group (¶0055).

The stop is placed with the fixed L2b component near the system center. The patent explains that moving the entrance pupil objectward causes off-axis chief rays to pass closer to the axis in L1 and L2a, reducing coma and astigmatism from those high-leverage components (¶0034). Condition (1) then keeps L2a and L2b strong enough to limit the focusing travel required by that forward stop placement (¶0035–0039).

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens focal lengths in air. They are not the same as the in-situ powers of cemented groups or moving components.

### L1 — Fixed Front Positive Group

**E1 — Biconvex positive.**  
nd = 1.80420, νd = 46.50. Glass: dense lanthanum flint, TAF3D/N-LASF44 class; close to OHARA S-LAH65VS. f = +91.5 mm.

E1 is the high-index front collector. The previous draft described this as a lanthanum crown; that was too loose. With νd below 50, and with an LAH/LASF/TAF-type index region, it is better described as a dense lanthanum flint. Its high index reduces the required curvature of the first refracting surface while allowing L1 to carry substantial positive power.

**E2 — Biconvex positive, ED/SLD-class.**  
nd = 1.49700, νd = 81.61. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) class. f = +71.1 mm.

E2 is the primary low-dispersion positive in the front group and the strongest positive single element in L1. It is cemented to E3, forming the main front achromatizing doublet. The patent gives only nd and νd, so any anomalous-partial-dispersion claim is inferred from the catalog class and Sigma's product description rather than from patent-listed θgF or ΔPgF data.

**E3 — Biconcave negative.**  
nd = 1.76182, νd = 26.61. Glass: S-TIH14 (OHARA) class. f = −61.0 mm.

E3 is the high-index, high-dispersion mate to E2. The large Abbe separation between E2 and E3 supplies the principal front-group color correction. The E2/E3 cemented interface also allows strong chromatic correction without adding an extra air space in the already large-diameter front section.

**E4 — Positive meniscus, convex to object.**  
nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) / S-FPM2-neighbor class. f = +101.8 mm.

E4 completes the front positive group with modest additional power. The exact 593686 glass code matches Hoya FCD515 more closely than Ohara S-FPM2, although S-FPM2 is a nearby Ohara catalog neighbor. This is the more plausible counterpart to Sigma's “high refractive index SLD” language than E2, because it combines a higher refractive index with low dispersion.

### L2a — Moving Negative Focus Component

**E5 — Biconcave negative.**  
nd = 1.60342, νd = 38.01. Glass: S-TIM5 (OHARA) / F5 class. f = −40.9 mm.

E5 begins the negative L2a focus component. Its strongly curved rear surface (R = +26.4941 mm) turns the converging beam from L1 outward and supplies much of the negative power needed for the L1/L2a telephoto-like internal pair.

**E6 — Biconcave negative.**  
nd = 1.51680, νd = 64.20. Glass: N-BK7 / BSC7 class. f = −41.5 mm.

E6 is the lower-index, lower-dispersion negative member of the L2a cemented pair. In isolation it is negative; within the cemented pair it works with E7 to control the chromatic and spherical-aberration contribution of the moving L2a component.

**E7 — Positive meniscus, convex to object.**  
nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA). f = +50.8 mm.

E7 is a very high-index dense flint. The E6/E7 cemented interface is the chromatic-correction junction inside the negative focus component. The high index provides bending power without requiring impractically steep external surfaces.

### L2b — Fixed Stop Component

**E8 — Biconvex positive.**  
nd = 1.80518, νd = 25.46. Glass: S-TIH6 (OHARA) / SF6 class. f = +122.1 mm.

E8 is the single positive lens of L2b, immediately behind the aperture stop. Its low Abbe number is deliberate. The patent says the strong negative L2a component tends to over-correct axial chromatic aberration; assigning high dispersion to the positive L2b lens helps cancel that error, especially at close distances (¶0067–0072). This is the substance of condition (3).

### L2c — Moving Positive Focus Component

**E9 — Biconvex positive.**  
nd = 1.80420, νd = 46.50. Glass: dense lanthanum flint, TAF3D/N-LASF44 class; close to OHARA S-LAH65VS. f = +84.3 mm.

E9 is the leading positive of the moving L2c component. As with E1, its νd places it in dense lanthanum-flint territory rather than crown territory. Its weakly curved front surface and stronger rear surface re-converge the beam after the stop without making the front of L2c too sensitive to small focusing displacement errors.

**E10 — Biconvex positive.**  
nd = 1.72916, νd = 54.67. Glass: S-LAL18 (OHARA). f = +35.9 mm.

E10 is the strongest standalone positive element in the prescription. It supplies the main positive power of L2c and is cemented to E11 to control color and spherical aberration as the L2c component moves objectward during close focusing.

**E11 — Biconcave negative.**  
nd = 1.76182, νd = 26.61. Glass: S-TIH14 (OHARA) class. f = −43.1 mm.

E11 is the flint mate behind E10. The E10/E11 doublet lets L2c carry strong positive power while limiting chromatic and spherical-aberration variation over the floating-focus range.

### L3a — Fixed Optical-Stabilizer Component

**E12 — Positive meniscus, convex to image.**  
nd = 1.80518, νd = 25.46. Glass: S-TIH6 (OHARA) / SF6 class. f = +57.2 mm.

E12 is the positive, high-dispersion member of the stabilizer doublet. The patent requires the stabilizing component to include at least one positive and one negative lens to suppress lateral-color variation when the component is shifted perpendicular to the axis (¶0061).

**E13 — Biconcave negative.**  
nd = 1.77250, νd = 49.62. Glass: S-LAH66 (OHARA) / TAF1 / N-LAF34 class. f = −26.7 mm.

E13 is the negative member of the L3a stabilizer doublet. The E12/E13 cemented component has a net paraxial focal length of −50.17 mm and is the unit shifted for optical stabilization. Its symmetric radii (−41.4772 / +41.4772 mm) are a conspicuous feature of the stabilizer component.

### L3b — Fixed Rear Positive Component

**E14 — Biconcave negative.**  
nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA) / H-ZLaF56B class. f = −34.3 mm.

E14 is the high-index negative of L3b. The patent's Petzval-control strategy relies on a high-index negative lens paired with lower-index positive lenses so that L3b can generate a sufficiently positive Petzval contribution while preserving chromatic correction (¶0074–0081). Condition (4) is built on this index split.

**E15 — Biconvex positive.**  
nd = 1.72916, νd = 54.67. Glass: S-LAL18 (OHARA). f = +41.1 mm.

E15 is the positive mate cemented to E14. Of the two positive lenses in L3b, E15 has the smaller Abbe number, so it sets νdL3bpl in condition (5). The Abbe-number difference against E14 is 54.67 − 33.27 = 21.40, matching the patent's conditional-value table.

**E16 — Biconvex positive.**  
nd = 1.58913, νd = 61.25. Glass: BACD5 (HOYA) / S-BAL35 class. f = +81.8 mm.

E16 is the rear low-index positive. It sets ndL3bpl in condition (4), because it is the lowest-index positive lens in L3b. Its low index increases L3b's positive Petzval contribution and helps counter the field-curvature change caused by decentering L3a.

## Glass Identification and Selection

The patent does not name glass manufacturers. The table below therefore gives catalog-class identifications by matching the patent's nd/νd pairs to public manufacturer catalogs. Exact vendor names should be read as catalog matches, not as proof of Sigma's procurement source.

| Elements | nd | νd | Code | Catalog identification | Confidence | Use |
|---|---:|---:|---:|---|---|---|
| E1, E9 | 1.80420 | 46.50 | 804465 | TAF3D / N-LASF44 exact class; OHARA S-LAH65VS close | High class match | High-index positive powers |
| E2 | 1.49700 | 81.61 | 497816 | S-FPL51 / FCD1 class | High | Main SLD/ED crown |
| E3, E11 | 1.76182 | 26.61 | 762266 | S-TIH14 class | High | High-index flint mates |
| E4 | 1.59282 | 68.62 | 593686 | FCD515 exact; S-FPM2 nearby | High for Hoya class | High-index SLD-class crown |
| E5 | 1.60342 | 38.01 | 603380 | S-TIM5 / F5 class | High | Moving negative focus singlet |
| E6 | 1.51680 | 64.20 | 517642 | N-BK7 / BSC7 class | High | Low-index crown in L2a |
| E7 | 1.84666 | 23.78 | 847238 | S-TIH53 | High | Dense flint in L2a |
| E8, E12 | 1.80518 | 25.46 | 805255 | S-TIH6 / SF6 class | High | High-dispersion positive lenses |
| E10, E15 | 1.72916 | 54.67 | 729547 | S-LAL18 | High | Lanthanum-crown positives |
| E13 | 1.77250 | 49.62 | 773496 | S-LAH66 / TAF1 / N-LAF34 class | High | Stabilizer negative |
| E14 | 1.80610 | 33.27 | 806333 | NBFD15 / H-ZLaF56B class | Moderate-high | L3b high-index negative |
| E16 | 1.58913 | 61.25 | 589613 | BACD5 exact; S-BAL35 nearby | High for Hoya class | L3b low-index positive |

The chromatic correction is layered. E2 provides the low-index, very high-Abbe front correction. E4 supplies a higher-index low-dispersion positive later in L1. The moving focus groups then use high-index flint/crown pairings to keep axial color from changing excessively with focus. L2b deliberately uses a high-dispersion positive lens, not an ED element, because the patent wants it to offset the over-corrected axial color generated by strong negative L2a (¶0067–0072). The rear group uses E14/E15/E16 primarily for Petzval and lateral-color control during stabilization (¶0074–0081).

## Focus Mechanism

The lens uses floating inner focus. L1, L2b/stop, L3a, and L3b remain fixed relative to the image plane. L2a (E5–E7) moves toward the image, while L2c (E9–E11) moves toward the object from infinity to 1:1. The opposed travel keeps the total track constant while reducing close-focus aberration variation.

| Variable gap | Location | Infinity | 1:2 | 1:1 | Net change, infinity to 1:1 |
|---|---|---:|---:|---:|---:|
| d7 | L1 → L2a | 2.9138 | 10.4099 | 18.6188 | +15.7050 |
| d12 | L2a → stop/L2b | 20.1047 | 12.6086 | 4.3997 | −15.7050 |
| d15 | L2b → L2c | 22.7964 | 12.4801 | 3.3614 | −19.4350 |
| d20 | L2c → L3a | 5.4077 | 15.7240 | 24.8427 | +19.4350 |
| Bf | E16 rear → image | 53.3000 | 53.3001 | 53.3001 | fixed within rounding |

The sum d7 + d12 + d15 + d20 is 51.2226 mm at all three focus settings, confirming that the focus motion is internal and track-preserving. Independent first-order conjugate calculation gives an image-plane-to-object distance of 312.39 mm at the 1:1 setting, matching Sigma's 31.2 cm specification within rounding.

The effective focal length shortens with close focus: 101.71 mm at infinity, 91.84 mm at 1:2, and 75.68 mm at 1:1. The patent's working F-number correspondingly rises from 2.91 to 4.38 and 5.83. At 1:1, 5.83 is essentially twice the infinity design F-number, as expected for life-size macro imaging with near-unit pupil magnification.

## Aspherical Surfaces

There are no aspherical surfaces in Example 4. The prescription table lists only spherical radii, axial separations, nd, and νd. The patent contains no aspherical-coefficient table and does not invoke 非球面 in the numerical examples. The aperture stop is the only flat surface in the transcribed prescription; the weak E9 front surface and E16 rear surface remain finite spherical radii.

## Image Stabilization

Stabilization is performed by shifting L3a, the cemented E12/E13 negative doublet, perpendicular to the optical axis. The patent assigns L3a this role explicitly (¶0050, ¶0060).

The stabilizer must be fixed during focus because placing the stabilization mechanism on a moving focus component would increase mechanical complexity, barrel diameter, and focus-group mass (¶0054). The patent also rejects L1 and L2a because their decentering sensitivity is high (¶0055). A rear fixed component is therefore the practical location.

The patent's first-order stabilization coefficient is:

Kos = Δy / Δx = (1 − βos) · βrear

where Δx is stabilizer shift, Δy is image shift, βos is the stabilizer-group magnification, and βrear is the magnification of the group behind the stabilizer (¶0052). If Kos is too small, the stabilizer must move too far and the barrel grows (¶0053). The rear positive L3b component is placed behind the negative L3a stabilizer to reduce aberration variation during this decentering motion (¶0044–0049).

The patent's aberration figures evaluate decentering of +0.5 mm at infinity, +1.0 mm at 1:2, and +1.5 mm at 1:1 for Example 4. These are analysis displacements, not necessarily the exact production OS stroke.

## Conditional Expressions

All five patent conditions were recomputed from the Example 4 prescription. The independent paraxial group focal lengths are fL1 = +53.85 mm, fL2a = −32.91 mm, fL2b = +122.09 mm, fL2c = +57.10 mm, fL3a = −50.17 mm, and fL3b = +111.94 mm.

| # | Expression | Patent bound | Computed | Patent value | Result |
|---|---|---:|---:|---:|---|
| (1) | \\|fL2a · fL2b / f²\\| | 0.35–0.55 | 0.388 | 0.388 | Matches |
| (2) | \\|fL3a / fL3b\\| | 0.35–0.47 | 0.448 | 0.448 | Matches |
| (3) | νdL2b | 22.0–36.0 | 25.46 | 25.46 | Matches |
| (4) | ndL3bpl / ndL3bnh | 0.85–0.97 | 0.880 | 0.880 | Matches |
| (5) | νdL3bpl − νdL3bnh | > 20 | 21.40 | 21.40 | Matches |

Condition (1)'s denominator must be read as f². The patent prints the exponent inline as ｆ２, but the expression is dimensionless only if the denominator is the square of the whole-system focal length. Using fL2a = −32.91 mm, fL2b = +122.09 mm, and f = 101.71 mm gives |−32.91 · 122.09 / 101.71²| = 0.388.

The conditional-value rows label condition (3) as νdL2a, but the defined quantity in the claims and description is νdL2b: the minimum Abbe number of the positive lens in L2b. Example 4's printed value, 25.46, is exactly E8's Abbe number. The row label is therefore a patent typographical error, not an optical ambiguity.

For condition (4), ndL3bpl is E16's index, 1.58913, and ndL3bnh is E14's index, 1.80610, giving 0.880. For condition (5), the minimum positive-lens Abbe number in L3b is E15's 54.67 and the maximum negative-lens Abbe number is E14's 33.27, giving 21.40.

## Verification Summary

Independent paraxial y–ν ray tracing reproduces the patent values for Example 4.

| Quantity | Computed | Patent | Difference |
|---|---:|---:|---:|
| Effective focal length at infinity | 101.7077 mm | 101.71 mm | <0.003 mm |
| Back focal distance at infinity | 53.3010 mm | 53.3000 mm | 0.0010 mm |
| Full field, 2ω | 24.09° class | 24.09° | matches within rounding |
| Magnification at 1:2 setting | −0.49999 | −0.5 | <0.001% |
| Magnification at 1:1 setting | −0.99999 | −1.0 | <0.001% |
| Object distance at 1:1, image plane to object | 312.39 mm | Sigma spec 31.2 cm | rounding-level match |
| Petzval sum Σφ/(n·n′) | +8.281 × 10⁻⁴ mm⁻¹ | not tabulated | — |

Under the adopted Petzval sign convention, P = +8.281 × 10⁻⁴ mm⁻¹ corresponds to a Petzval radius of about −1208 mm. The small value relative to the 101.71 mm focal length is consistent with the patent's emphasis on L3b's index split for field-curvature control during stabilization.

The data file's semi-diameters are not patent values. They were estimated from ray envelopes and then reduced where required by edge thickness and cross-gap sag limits, especially around the thin air gaps after surfaces 9 and 23. The stop semi-diameter was set so that the front-group pupil magnification gives the patent's Fno = 2.91 at infinity. These diameters should therefore be treated as renderer-safe clear-aperture estimates, not as measured Sigma mechanical drawings.

## Design Heritage and Context

The patent positions this design against earlier stabilized inner-focus macro lenses, citing JP 2003-329919 A, JP 2006-106112 A, and JP 2009-288384 A (¶0011–0019). It identifies three problem areas: image-plane variation during stabilization, axial chromatic and spherical aberration at high magnification, and meridional field-curvature plus g-line coma variation near 1:1 (¶0017–0019). The proposed solution is the combination of opposed floating focus groups, a fixed stop component with deliberately high-dispersion positive glass, and a split rear group in which a negative L3a stabilizer is followed by a positive L3b field-curvature-control component.

Within Sigma's macro line, the OS HSM lens is a more complex design than the older non-OS 105 mm f/2.8 EX DG Macro. The production lens keeps the 1:1 macro specification and roughly 0.31 m minimum focusing distance, but adds optical stabilization, HSM autofocus, a 16-element/11-group construction, and floating inner focusing.

## Sources

- JP 2012-58682 A, Sigma Corporation, Noriyuki Ogasawara. Example 4 prescription and variable-spacing table; design description at ¶0021–0083; Example 4 numerical data at ¶0090–0091.
- Sigma Corporation, “MACRO 105mm F2.8 EX DG OS HSM,” official product page: https://www.sigma-global.com/en/lenses/105_28_os/
- OHARA optical glass catalog and product datasheets, including S-FPL51, S-TIH14, S-TIM5, S-TIH53, S-TIH6, S-LAL18, S-LAH66, S-BAL35, and S-LAH65VS data pages: https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA GROUP Optics Division, official optical-glass data download page: https://www.hoya-opticalworld.com/english/datadownload/index.html
- Schott and Hoya catalog-class equivalents used only where the nd/νd pair is a closer match than a current Ohara S-catalog glass; uncertain vendor provenance is stated as class-level identification rather than as a procurement claim.
