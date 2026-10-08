## Patent Reference and Design Identification

**Patent:** JP 2019-191502 A
**Application Number:** JP 2018-087260
**Filed:** 2018-04-27
**Published:** 2019-10-31
**Inventor:** Naoyuki Sato
**Applicant:** Tamron Co., Ltd.
**Title:** Inner-focus image capturing lens and image capturing device
**Embodiment analyzed:** Example 1

The prescription is the numerical Example 1 in paragraphs 0048–0050, interpreted with the sign, wavelength and asphere conventions in paragraphs 0043–0045. Its relationship to the ZEISS Batis 2/40 CF is a research correlation. The manufacturer does not identify this patent as the production design. The patent applicant and the marketed lens brand are therefore retained as different attributes.

The primary-source correlation rests on several convergent observations:

1. The prescription and ZEISS datasheet each describe nine elements in eight air-separated groups. Their front-to-rear shape sequence, rear cemented pair, and three double-aspheric elements agree visually.
2. The numerical design is close to the marketed 40 mm focal length and f/2 aperture. No uniform scaling has been imposed to force equality.
3. The two positive focusing units in the patent move objectward by different amounts. The near endpoint corresponds to an object-to-source-image distance close to the marketed 0.24 m minimum distance, without using the production distance to solve a new focus law.
4. The ZEISS datasheet specifies no optical stabilization, consistent with the selected Example 1. Stabilization discussion in other examples is not imported into this one.

The ZEISS data sheet is dated 09/18. The selected application was filed before that date and published afterward. Chronology supports plausibility, not proof of supplier involvement or optical identity. Production values such as the 43.3 mm image-field diameter and 1:3.3 maximum reproduction ratio remain manufacturer claims about the marketed lens.

## Optical Architecture

The patent groups the nine elements into five functional units with positive, positive, negative, positive and negative net powers (paragraph 0047, Figure 1). These functional units are distinct from the eight air-separated groups counted in photographic specifications.

The front unit G1 contains L1 and L2. G2 comprises L3 and L4 and is the first focusing unit. G3 is the fixed negative L5 immediately behind the stop. G4 consists of positive L6 and is the second focusing unit. The fixed rear G5 comprises the L7/L8 cemented pair and L9. The aperture stop is the neutral source surface 9 between G2 and G3.

The calculated functional-unit focal lengths at the source reference state are:

| Functional unit | Source surfaces | Net focal length (mm) |
|---|---|---:|
| G1 | 1A–4 | +156.930167 |
| G2 focus | 5–8A | +46.984636 |
| G3 | 10–11 | -38.610539 |
| G4 focus | 12A–13A | +37.523792 |
| G5 | 14–18 | -63.918863 |

The d-line Gaussian EFL at the infinity spacing is 41.194754 mm. The Gaussian BFD from the final lens vertex is 17.533647 mm, while the source image plane is placed at the separately published final gap. The first-vertex-to-source-image track is 100.4477 mm. Neither a telephoto track ratio nor a retrofocus BFD/EFL condition is satisfied, so neither term is used as a quantitative classification here.

The per-surface Petzval sum, using each refracting interface's power divided by its incident and emergent indices, is 0.001948 mm⁻¹. This is a paraxial surface sum, not a calculated best-focus field curvature or proof of off-axis correction.

## Element-by-Element Analysis

The focal lengths below are those of individual thick elements isolated in air. They do not assign each element's in-situ aberration contribution and must not be added as a substitute for a spaced or cemented system calculation.

### L1 — Biconcave Negative

nd = 1.49845, νd = 81.61. Glass: Unmatched as printed (equals HOYA FCD1 at the e line: ne 1.49845, νd 81.61). f = -56.99 mm.

The negative front element has both surfaces aspherical. Together with positive L2 and their separation, it forms the weakly positive G1. The large difference between its two vertex curvatures is retained; the nearly flat front vertex is not replaced by a plane. The published optical section supports its broad front aperture, but supplies no numerical clear diameter.

### L2 — Biconvex Positive

nd = 1.94136, νd = 21.13. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = +52.28 mm.

This positive element completes G1. Its isolated positive power is stronger than the magnitude of L1’s isolated negative power, but the net unit power also depends on their air spacing. It is the front positive element relevant to the patent’s G1 material conditions. The inconsistent Table 1 Abbe value is discussed below rather than being substituted for its actual prescription coordinate.

### L3 — Negative Meniscus

nd = 1.85505, νd = 23.78. Glass: Unmatched as printed (equals HOYA FDS90-SG at the e line: ne 1.85505, νd 23.78). f = -45.76 mm.

This negative meniscus precedes positive L4 inside the first focusing unit. Both move together, with their internal separation fixed. The low Abbe number is a published material coordinate; it does not on its own establish a particular chromatic correction or anomalous-partial-dispersion property.

### L4 — Biconvex Positive

nd = 1.59412, νd = 67.02. Glass: Unmatched as printed (equals HOYA M-PCD51 at the e line: ne 1.59412, νd 67.02). f = +26.01 mm.

The double-aspheric positive element provides the main positive contribution to G2. The complete group remains positive and moves objectward for near focus. The patent connects the relative powers of the two focusing units with the amount of required focus travel (paragraphs 0016–0019). The data does not assign an uncalculated share of spherical aberration correction to this element.

### L5 — Negative Meniscus

nd = 1.80655, νd = 25.30. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -38.61 mm.

The negative meniscus constitutes fixed G3 behind the aperture stop. Paragraphs 0020–0023 discuss the role of a negative unit between positive focusing units in increasing the relevant lateral magnifications and reducing required motion. That patent rationale is reported as design context; the present calculation verifies the unit’s negative power, not a counterfactual performance optimization.

### L6 — Biconvex Positive

nd = 1.49856, νd = 81.56. Glass: Unmatched as printed (equals HOYA M-FCD1 at the e line: ne 1.49856, νd 81.56). f = +37.52 mm.

This single positive, double-aspheric element is G4, the second focusing unit. Paragraphs 0026–0027 emphasize a focusing component without internal air separation as a way to limit moving mass. It has stronger net power than the complete G2 unit. Its motion is specified independently of G2 by the published complementary gaps.

### L7 — Positive Meniscus

nd = 1.86290, νd = 24.80. Glass: Unmatched as printed (equals OHARA S-NBH56 at the e line: ne 1.86290, νd 24.80). f = +43.71 mm.

This positive meniscus is the front part of the rear cemented pair. Its rear surface is the shared interface to L8, whose refractive index is therefore the medium after source surface 15. Its listed isolated focal length is not the power of that cemented interface in situ.

### L8 — Negative Meniscus

nd = 1.65965, νd = 33.72. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -31.96 mm.

The negative element completes the rear cemented pair. The shared interface is represented once and is owned by the downstream element in the data schema. No synthetic cement layer is inserted. The compound pair and L9, separated by the published air gap, make up the net negative G5 unit.

### L9 — Negative Meniscus

nd = 1.61599, νd = 38.71. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -91.95 mm.

The final negative meniscus is fixed relative to the image plane and the other members of G5. Paragraphs 0024–0025 explain the patent’s use of a negative unit behind the second focus group to keep peripheral ray heights in that moving unit smaller. The source provides no prescription for a separate rear sensor cover stack in this example.

## Glass Identification and Selection

Paragraph 0043 explicitly identifies the refractive-index and Abbe coordinates with the d line, and the printed coordinates are retained under that label. The printed indices nevertheless behave as e-line values paired with d-line Abbe numbers: five of the nine rows equal a current catalog glass at the e line to all five printed decimals, each with that glass's exact νd. The model does not change the source convention on that evidence, but records it.

OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM catalog snapshots were reviewed at both lines. No row matches at the d line. At the e line L1, L3, L4, L6 and L7 match exactly and L2, L5, L8 and L9 match nothing. All elements keep an explicit Unmatched disposition, and no catalog line indices or Sellmeier coefficients are imported: tracing five elements on catalog curves and four on the Abbe estimate would mix reference lines between elements, which shifts the model's colour channels by about 0.15 mm of focus. The matches do not establish a supplier or melt.

| Element | Printed n | νd | Material disposition |
|---|---:|---:|---|
| L1 | 1.49845 | 81.61 | Unmatched as printed; equals HOYA FCD1 at the e line (nd 1.49700) |
| L2 | 1.94136 | 21.13 | Unmatched; no vendor row at either line |
| L3 | 1.85505 | 23.78 | Unmatched as printed; equals HOYA FDS90-SG at the e line (nd 1.84666) |
| L4 | 1.59412 | 67.02 | Unmatched as printed; equals HOYA M-PCD51 at the e line (nd 1.59201) |
| L5 | 1.80655 | 25.30 | Unmatched; no vendor row at either line |
| L6 | 1.49856 | 81.56 | Unmatched as printed; equals HOYA M-FCD1 at the e line (nd 1.49710) |
| L7 | 1.86290 | 24.80 | Unmatched as printed; equals OHARA S-NBH56 at the e line (nd 1.85478) |
| L8 | 1.65965 | 33.72 | Unmatched; no vendor row at either line |
| L9 | 1.61599 | 38.71 | Unmatched; no vendor row at either line |

The palette contains relatively high-Abbe materials in L1 and L6, and lower-Abbe materials in several negative and high-index elements. These are coordinate observations. They do not establish apochromatic correction, secondary-spectrum performance, or an anomalous-dispersion material identity.

Table 1 gives G1vd = 20.8800, although the selected front positive element has νd = 21.13 in the numerical prescription. The table also reports G1dPgF = 0.0282 and G2dPgF = 0.0137 without specifying a normal-line equation adequate to identify the engine’s dPgF convention. The contradictory row and the unspecified baseline are retained as limitations; neither deviation is copied into the element spectral fields. The model consequently has only source nd/νd spectral support. The actual current runtime selects its Abbe-based dispersion fallback for all nine explicit Unmatched labels. Its C/F/g estimates are calculated proxies, not patent-measured line indices or confirmed catalog melts.

## Focus Mechanism

The focus status is PUBLISHED. Both source spacing endpoints are preserved. G2 and G4 translate objectward while the front unit, stop, G3, rear unit and image plane remain fixed. The two complementary pairs of variable gaps conserve overall track.

| Gap after source surface | Infinity (mm) | Published close (mm) |
|---|---:|---:|
| 4 | 6.1277 | 2.6108 |
| 8 | 2.7571 | 6.2740 |
| 11 | 15.5621 | 11.2121 |
| 13 | 0.2000 | 4.5500 |

G2 travels 3.5169 mm objectward and G4 travels 4.3500 mm objectward. The published close object distance is 134.5124 mm measured to the first surface, not to the sensor. Adding the unchanged source track gives 234.9601 mm from object to image, represented by closeFocusM = 0.2349601 m. This is distinct from the marketed minimum focus distance of 0.24 m.

At the close spacing, the computed Gaussian EFL is 36.116048 mm, against the source’s rounded 36.1160 mm. The focus endpoints are not reconstructed from marketing data. Intermediate slider positions linearly interpolate the source gaps; the production focus cam and continuous conjugate accuracy are not established by that interpolation.

The source image plane is retained in both states. At infinity it lies 0.032153 mm behind Gaussian focus. At the stated finite object distance, the object-to-image B-matrix residual is 0.184008 mm; the Gaussian zero-B object distance would be 135.128894 mm. These source-plane observations are not “corrected” by changing the final gap or the close object distance. A source-first exact on-axis meridional bundle gives a near RMS best-focus displacement of -0.000709 mm from that source plane, with -0.030897 mm at infinity. These monochromatic sampled-bundle diagnostics explain why the Gaussian residual alone does not establish a source error; the patent’s exact image-selection criterion remains unidentified. No image plane is moved.

## Aspherical Surfaces

Source surfaces 1, 2, 7, 8, 12 and 13 are aspherical, corresponding to L1, L4 and L6. The patent’s equation is

X(H) = (H²/R) / [1 + √(1 − εH²/R²)] + AH² + BH⁴ + CH⁶ + DH⁸ + EH¹⁰.

The implemented conic constant is K = ε − 1. The selected table supplies no nonzero quadratic term; none is invented. The published fourth through tenth orders are retained without a polynomial refit. The unused required twelfth and fourteenth orders are zero. All lengths remain at source scale 1.0; coefficients therefore require no dimensional rescaling.

| Surface | Source ε | Model K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|---:|
| 1A | 1.00000e+00 | 0.00000e+00 | 6.40958e-06 | -2.02463e-08 | 3.45386e-11 | -2.75776e-14 |
| 2A | 1.00000e+00 | 0.00000e+00 | 5.65334e-06 | -1.43670e-08 | 1.97422e-11 | -2.41721e-14 |
| 7A | 1.00000e+00 | 0.00000e+00 | -1.19932e-05 | -3.89527e-09 | -2.76725e-11 | 1.24792e-13 |
| 8A | 1.00000e+00 | 0.00000e+00 | 1.26852e-05 | -1.31319e-08 | 1.35488e-11 | 8.33317e-14 |
| 12A | 1.00000e+00 | 0.00000e+00 | -1.84977e-06 | -5.69701e-09 | -3.09555e-11 | 6.56866e-14 |
| 13A | 1.96612e+00 | 9.66120e-01 | 6.29488e-06 | 4.80463e-11 | 2.02382e-11 | -5.09673e-14 |

The net rim departures below are calculated at modeled semi-diameters, not manufacturer-specified clear apertures. They compare the full implemented sag with a sphere of the same vertex radius. Positive departure means a displacement toward the image side in the source sign convention.

| Surface | Modeled semi-diameter (mm) | Full departure from sphere (mm) |
|---|---:|---:|
| 1A | 19.20000 | +0.306863 |
| 2A | 19.20000 | +0.248556 |
| 7A | 14.70000 | -0.600865 |
| 8A | 14.70000 | +0.528634 |
| 12A | 12.30000 | -0.073078 |
| 13A | 12.30000 | +0.032977 |

L1’s two modeled rims have positive departure. L4’s front rim departs negatively while its rear rim departs positively. L6’s front rim departs negatively; its rear rim’s polynomial and conic contributions partly oppose each other, so the full departure is much smaller than the polynomial contribution alone. These are geometric observations, not standalone measures of aberration correction. No manufacturing process is assigned without a supporting primary source.

## Conditional Expressions

The focal-length ratio of G2 to G4 is 1.252129, consistent with the source’s two-decimal 1.25. It satisfies the patent’s broad 0.3–3.3 interval and its more restrictive 1.2–2.4 preference (paragraphs 0016–0019).

The front positive element’s actual νd = 21.13 satisfies both the claim’s <=45 threshold and paragraph 0035’s <=46 wording; this does not erase the 20.8800 summary-row discrepancy. The first focus unit’s negative L3 has νd = 23.78, consistent with Table 1. The reported dPgF inequalities cannot be independently certified from the modeled spectral data for the reasons given above. Stabilization sensitivity is blank for this example and is not modeled.

## Verification and Modeling Limits

The physical iris is inferred by exact on-axis calibration of the infinity source F-number, 2.0834. Matching that target is a calibration dependence, not independent evidence of the manufactured diaphragm size. The authored stop semi-diameter is 12.15912 mm. Semi-diameters elsewhere are estimates measured from the patent's FIG. 1 section and floor-checked by real-ray tracing; they are not published mechanical dimensions. The figure is drawn to scale: its vertex spacings reproduce the prescription, its stop opening reads 12.1 mm against the calibrated 12.159 mm, and the rim thicknesses it draws for L2, L4, L6 and L7 match the prescription's edge thicknesses at the measured heights.

With that fixed inferred iris, the infinity exact image-side sine working f-number is 2.084141. At close focus the exact image-side sine value is 2.264487, the tangent-based value is 2.208598 and the finite paraxial working value is 2.066806. The printed close Fno is 2.3759. Paragraph 0043 does not identify a finite-conjugate or pupil convention, and the stop size is unpublished. Therefore no unique automatic close-aperture reproduction is claimed, and no focus-dependent aperture law has been invented to force agreement.

Actual-rim-slope, conic-domain, material edge-thickness and shared-band gap checks were executed on the final data. Exact meridional real-ray tracing shows the full stop-filling axial beam clearing every rim at five focus samples from infinity to the close endpoint; the smallest margin is 0.03 mm at L4's front surface 7A at close focus. Off-axis bundles vignette at exterior apertures; the checked first clipping events are not inside the cemented pair. These finite samples do not certify continuous motion, full-field throughput, MTF, or the entire production image circle.

Physical stop-aimed bundles and UI entrance-pupil launch rays use different pupil conventions. The current UI launch formulas were retraced at all eight authored f-stops and five focus samples: 440 physical rays. Sixteen first clipping events occur, twelve of them wide open. Off axis, one edge ray of the default 0.60-field fan first clips at L6's front surface 12A at every focus sample, and the opposite edge ray first clips at L3's front surface 5 from focus 0.50 to close focus. On axis, the two edge rays first clip at 7A at focus 0.75 and at surface 6 at close focus. Four additional axial edge rays clip at the stop at close focus, two each at f/2.8 and f/4. No first default-bundle clip is at the cemented interface. These are preserved stop/exterior vignetting observations, not a claim of unvignetted UI fans throughout focus.

At infinity the modeled rims pass a tangential pupil range that narrows with field. In units of the on-axis entrance-pupil radius it runs from about −0.89 to +0.73 at 0.50 relative field (14.71°), −0.82 to +0.57 at 0.70 (20.16°), −0.72 to +0.40 at 0.90 (25.18°) and −0.63 to +0.32 at full field (27.49°). L6's rear surface limits one side at every field; L3, L2 and then L1 limit the other as the field grows. The patent's own transverse-aberration fans (FIG. 2B) end near −0.78/+0.65, −0.69/+0.48, −0.61/+0.33 and −0.55/+0.25 at the same fields, so the design vignettes at least as much as the model does. The plot readings are approximate, and the comparison is a consistency check on the figure-derived rims rather than a fit: no rim was sized to these numbers. These are finite meridional samples, not a continuum guarantee.

The source infinity chief at 27.4433° reaches image semi-height 21.632918 mm and clears the modeled rims. The diagram's aperture-derived half-field is 27.518806°, while the current analysis field follows the exact format-corner chief to approximately 27.460807°. The actual format audit reaches 21.649978 mm of the 21.65 mm corner and reports no clipped rim. The diagram's launch extent and the exact analysis-field coverage are separate estimates; neither certifies the full pupil at every field.

The actual project constructor and production render diagnostic functions also accepted the candidate at the tested focus samples with no hidden material trim. That targeted execution is narrower than a full project integration test. No claimed optical performance depends on a successful production build.

## Sources

1. Japan Patent Office, [JP 2019-191502 A](https://patentimages.storage.googleapis.com/2b/6c/91/54b2be0fb680d9/JP2019191502A.pdf), 2019-10-31. Attribution: PDF pp. 1, 27. Definitions/equation: p. 10, paragraphs 0043–0045. Selected data: pp. 10–11, paragraphs 0047–0050. Conditions: p. 17, Table 1. Optical section: p. 18, Figure 1.
2. Carl Zeiss AG, [ZEISS Batis 2/40 CF Technical Specifications](https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/batis-lenses/datasheet-zeiss-batis-240cf.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/datasheet-zeiss-batis-240cf.pdf), 09/18, p. 1. Production values and optical section; the patent correlation is not manufacturer-confirmed.
3. Primary optical-glass catalog snapshots: [OHARA, 2026-07-01](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [HOYA, 2026-07-07 including obsolete](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf); [HIKARI catalog data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx); [SUMITA optical glass data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). SCHOTT and CDGM source document identities and row-level comparisons are retained in the accompanying evidence record. None is presented as proof of supplier identity.

