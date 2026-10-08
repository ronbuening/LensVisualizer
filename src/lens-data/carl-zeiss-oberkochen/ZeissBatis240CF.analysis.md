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

The patent labels the five units L1 to L5 in Figure 1, in paragraph 0047 and in its reference-sign list, and gives no designation to any single element. This page keeps L1–L5 for the units and numbers the elements E1–E9 from the object side, so an L-number always means a group.

The front unit L1 contains E1 and E2. L2 comprises E3 and E4 and is the first focusing unit. L3 is the fixed negative E5 immediately behind the stop. L4 consists of positive E6 and is the second focusing unit. The fixed rear L5 comprises the E7/E8 cemented pair and E9. The aperture stop is the neutral source surface 9 between L2 and L3.

The calculated functional-unit focal lengths at the source reference state are:

| Functional unit | Source surfaces | Net focal length (mm) |
|---|---|---:|
| L1 | 1A–4 | +156.930167 |
| L2 focus | 5–8A | +46.984636 |
| L3 | 10–11 | -38.610539 |
| L4 focus | 12A–13A | +37.523792 |
| L5 | 14–18 | -63.918863 |

The Gaussian EFL at the printed indices and the infinity spacing is 41.194754 mm. The Gaussian BFD from the final lens vertex is 17.533647 mm, while the source image plane is placed at the separately published final gap. The first-vertex-to-source-image track is 100.4477 mm. Neither a telephoto track ratio nor a retrofocus BFD/EFL condition is satisfied, so neither term is used as a quantitative classification here.

The per-surface Petzval sum, using each refracting interface's power divided by its incident and emergent indices, is 0.001948 mm⁻¹. This is a paraxial surface sum, not a calculated best-focus field curvature or proof of off-axis correction.

## Element-by-Element Analysis

The focal lengths below are those of individual thick elements isolated in air. They do not assign each element's in-situ aberration contribution and must not be added as a substitute for a spaced or cemented system calculation.

### E1 — Biconcave Negative (2× Asph)

ne = 1.49845, νd = 81.61. Glass: FCD1 (HOYA), from the exact e-line match; supplier unconfirmed. f = -56.99 mm.

The negative front element has both surfaces aspherical. Together with positive E2 and their separation, it forms the weakly positive L1. The large difference between its two vertex curvatures is retained; the nearly flat front vertex is not replaced by a plane. The published optical section supports its broad front aperture, but supplies no numerical clear diameter.

### E2 — Biconvex Positive

ne = 1.94136, νd = 21.13. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = +52.28 mm.

This positive element completes L1. Its isolated positive power is stronger than the magnitude of E1’s isolated negative power, but the net unit power also depends on their air spacing. It is the positive element ahead of the first focus group to which the patent’s conditions (3) and (4) apply: Table 1 lists its g–F anomalous dispersion, G1dPgF, as 0.0282, the upper limit of condition (3). The element therefore carries the patent anomalous-dispersion tag, and ZEISS’s construction diagram also marks it as special glass. The inconsistent Table 1 Abbe value is discussed below rather than being substituted for its actual prescription coordinate.

### E3 — Negative Meniscus

ne = 1.85505, νd = 23.78. Glass: FDS90-SG (HOYA), from the exact e-line match; supplier unconfirmed. f = -45.76 mm.

This negative meniscus, concave to the object, precedes positive E4 inside the first focusing unit. Both move together, with their internal separation fixed. It is the negative element of the first focus group to which the patent’s conditions (5) and (6) apply: Table 1 lists its g–F anomalous dispersion, G2dPgF, as 0.0137 with νd = 23.78, above the 0.0007 floor of condition (5). The element therefore carries the patent anomalous-dispersion tag, and ZEISS’s construction diagram also marks it as special glass. The tabulated deviation is not a calculated chromatic correction.

### E4 — Biconvex Positive (2× Asph)

ne = 1.59412, νd = 67.02. Glass: M-PCD51 (HOYA), from the exact e-line match; supplier unconfirmed. f = +26.01 mm.

The double-aspheric positive element provides the main positive contribution to L2. The complete group remains positive and moves objectward for near focus. The patent connects the relative powers of the two focusing units with the amount of required focus travel (paragraphs 0016–0019). The data does not assign an uncalculated share of spherical aberration correction to this element.

### E5 — Negative Meniscus

ne = 1.80655, νd = 25.30. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -38.61 mm.

The negative meniscus, convex to the object, constitutes fixed L3 behind the aperture stop. Paragraphs 0020–0023 discuss the role of a negative unit between positive focusing units in increasing the relevant lateral magnifications and reducing required motion. That patent rationale is reported as design context; the present calculation verifies the unit’s negative power, not a counterfactual performance optimization.

### E6 — Biconvex Positive (2× Asph)

ne = 1.49856, νd = 81.56. Glass: M-FCD1 (HOYA), from the exact e-line match; supplier unconfirmed. f = +37.52 mm.

This single positive, double-aspheric element is L4, the second focusing unit. Paragraphs 0026–0027 emphasize a focusing component without internal air separation as a way to limit moving mass. It has stronger net power than the complete L2 unit. Its motion is specified independently of L2 by the published complementary gaps.

### E7 — Positive Meniscus

ne = 1.86290, νd = 24.80. Glass: S-NBH56 (OHARA), from the exact e-line match; supplier unconfirmed. f = +43.71 mm.

This positive meniscus, convex to the object, is the front part of the rear cemented pair. Its rear surface is the shared interface to E8, whose refractive index is therefore the medium after source surface 15. Its listed isolated focal length is not the power of that cemented interface in situ.

### E8 — Negative Meniscus

ne = 1.65965, νd = 33.72. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -31.96 mm.

The negative meniscus, convex to the object, completes the rear cemented pair. The shared interface is represented once and is owned by the downstream element in the data schema. No synthetic cement layer is inserted. The compound pair and E9, separated by the published air gap, make up the net negative L5 unit.

### E9 — Negative Meniscus

ne = 1.61599, νd = 38.71. Glass: Unmatched (printed coordinates; no vendor row at either the d or the e line). f = -91.95 mm.

The final negative meniscus, concave to the object, is fixed relative to the image plane and the other members of L5. Paragraphs 0024–0025 explain the patent’s use of a negative unit behind the second focus group to keep peripheral ray heights in that moving unit smaller. The source provides no prescription for a separate rear sensor cover stack in this example.

## Glass Identification and Selection

Paragraph 0043 explicitly identifies the refractive-index and Abbe coordinates with the d line. The printed indices are nevertheless e-line values paired with d-line Abbe numbers: five of the nine rows equal a current catalog glass at the e line to all five printed decimals, each with that glass's exact νd. The model stores the printed values unchanged and treats the whole index column as e-line (`indexReference: "e"` on all nine elements).

OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM catalog snapshots were reviewed at both lines. No row matches at the d line. At the e line E1, E3, E4, E6 and E7 match exactly and E2, E5, E8 and E9 match nothing. The five matched elements carry the catalog name and trace on that glass's dispersion curve, anchored to the printed index. The other four keep an explicit Unmatched disposition and the Abbe estimate. Every element is traced at the same lines (C′, e, F′ and g), which requires all nine to share the e reference: with only the five matched elements e-referenced, the red and blue foci move about 0.2 mm. The matches identify catalog coordinates; they do not establish a supplier or melt.

| Element | Printed n | νd | Material disposition |
|---|---:|---:|---|
| E1 | 1.49845 | 81.61 | HOYA FCD1, exact at the e line (nd 1.49700) |
| E2 | 1.94136 | 21.13 | Unmatched; no vendor row at either line |
| E3 | 1.85505 | 23.78 | HOYA FDS90-SG, exact at the e line (nd 1.84666) |
| E4 | 1.59412 | 67.02 | HOYA M-PCD51, exact at the e line (nd 1.59201) |
| E5 | 1.80655 | 25.30 | Unmatched; no vendor row at either line |
| E6 | 1.49856 | 81.56 | HOYA M-FCD1, exact at the e line (nd 1.49710) |
| E7 | 1.86290 | 24.80 | OHARA S-NBH56, exact at the e line (nd 1.85478) |
| E8 | 1.65965 | 33.72 | Unmatched; no vendor row at either line |
| E9 | 1.61599 | 38.71 | Unmatched; no vendor row at either line |

The palette contains relatively high-Abbe materials in E1 and E6, and lower-Abbe materials in several negative and high-index elements. These are coordinate observations. They do not establish apochromatic correction, secondary-spectrum performance, or an anomalous-dispersion material identity. The anomalous-dispersion tags rest on other evidence: on Table 1 for E2 and E3, and on the special-glass marking of ZEISS’s construction diagram for E6, E7 and E8.

Table 1 gives G1vd = 20.8800, although the selected front positive element has νd = 21.13 in the numerical prescription. The table also reports G1dPgF = 0.0282 and G2dPgF = 0.0137, which claims 9 and 10 define as the g–F anomalous dispersion of the positive element ahead of the first focus group (E2) and of the negative element inside it (E3). The patent states no normal-line equation, but both rows equal HOYA catalog entries: νd 20.88 with ΔPgF 0.0282 is E-FDS1, and νd 23.78 with ΔPgF 0.0137 is FDS90, the glass E3 matches at the e line. The deviations are therefore on HOYA’s catalog line, not the engine’s. The E2 row describes an E-FDS1-class glass (nd 1.92286, ne 1.93323) that the printed 1.94136 and 21.13 do not reproduce. The row's Abbe number stays a recorded contradiction, but its partial dispersion is the patent's own statement about E2 and is entered on that element: the absolute P_g,F is 0.0282 + 0.6483 − 0.0018 × 20.88 = 0.6389, which is +0.0307 from the engine's normal line at the printed νd 21.13. With it the model's g-line focus moves from 104 µm to 31 µm behind green, beside 28 µm and 26 µm for the red and blue channels. E3 needs no entry because it traces on the FDS90 catalog curve. For the other elements the source supplies only the printed index and Abbe number. The runtime uses catalog dispersion curves for the five named glasses and its Abbe-based estimate for the four Unmatched elements; the resulting channel indices are catalog or calculated proxies, not patent-measured line indices or confirmed melts. Because the Abbe number in each e-referenced slot is the printed d-line value (catalog νe is 0.2 to 0.4 lower), the estimated dispersion of the four Unmatched elements is understated by under 1 %.

## Focus Mechanism

The focus status is PUBLISHED. Both source spacing endpoints are preserved. L2 and L4 translate objectward while the front unit, stop, L3, rear unit and image plane remain fixed. The two complementary pairs of variable gaps conserve overall track.

| Gap after source surface | Infinity (mm) | Published close (mm) |
|---|---:|---:|
| 4 | 6.1277 | 2.6108 |
| 8 | 2.7571 | 6.2740 |
| 11 | 15.5621 | 11.2121 |
| 13 | 0.2000 | 4.5500 |

L2 travels 3.5169 mm objectward and L4 travels 4.3500 mm objectward. The published close object distance is 134.5124 mm measured to the first surface, not to the sensor. Adding the unchanged source track gives 234.9601 mm from object to image, represented by closeFocusM = 0.2349601 m. This is distinct from the marketed minimum focus distance of 0.24 m.

At the close spacing, the computed Gaussian EFL is 36.116048 mm, against the source’s rounded 36.1160 mm. The focus endpoints are not reconstructed from marketing data. Intermediate slider positions linearly interpolate the source gaps; the production focus cam and continuous conjugate accuracy are not established by that interpolation.

The source image plane is retained in both states. At infinity it lies 0.032153 mm behind Gaussian focus. At the stated finite object distance, the object-to-image B-matrix residual is 0.184008 mm; the Gaussian zero-B object distance would be 135.128894 mm. These source-plane observations are not “corrected” by changing the final gap or the close object distance. A source-first exact on-axis meridional bundle gives a near RMS best-focus displacement of -0.000709 mm from that source plane, with -0.030897 mm at infinity. These monochromatic sampled-bundle diagnostics explain why the Gaussian residual alone does not establish a source error; the patent’s exact image-selection criterion remains unidentified. No image plane is moved.

## Aspherical Surfaces

Source surfaces 1, 2, 7, 8, 12 and 13 are aspherical, corresponding to E1, E4 and E6. The patent’s equation is

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

E1’s two modeled rims have positive departure. E4’s front rim departs negatively while its rear rim departs positively. E6’s front rim departs negatively; its rear rim’s polynomial and conic contributions partly oppose each other, so the full departure is much smaller than the polynomial contribution alone. These are geometric observations, not standalone measures of aberration correction. No manufacturing process is assigned without a supporting primary source.

## Conditional Expressions

The focal-length ratio of L2 to L4 is 1.252129, consistent with the source’s two-decimal 1.25. It satisfies the patent’s broad 0.3–3.3 interval and its more restrictive 1.2–2.4 preference (paragraphs 0016–0019).

The front positive element’s actual νd = 21.13 satisfies both the claim’s <=45 threshold and paragraph 0035’s <=46 wording; this does not erase the 20.8800 summary-row discrepancy. The first focus unit’s negative E3 has νd = 23.78, consistent with Table 1. The reported dPgF inequalities cannot be independently certified from the modeled spectral data for the reasons given above. Stabilization sensitivity is blank for this example and is not modeled.

## Verification and Modeling Limits

The physical iris is inferred by exact on-axis calibration of the infinity source F-number, 2.0834. Matching that target is a calibration dependence, not independent evidence of the manufactured diaphragm size. The authored stop semi-diameter is 12.15912 mm. Semi-diameters elsewhere are estimates measured from the patent's FIG. 1 section and floor-checked by real-ray tracing; they are not published mechanical dimensions. The figure is drawn to scale: its vertex spacings reproduce the prescription, its stop opening reads 12.1 mm against the calibrated 12.159 mm, and the rim thicknesses it draws for E2, E4, E6 and E7 match the prescription's edge thicknesses at the measured heights.

With that fixed inferred iris, the infinity exact image-side sine working f-number is 2.084141. At close focus the exact image-side sine value is 2.264487, the tangent-based value is 2.208598 and the finite paraxial working value is 2.066806. The printed close Fno is 2.3759. Paragraph 0043 does not identify a finite-conjugate or pupil convention, and the stop size is unpublished. Therefore no unique automatic close-aperture reproduction is claimed, and no focus-dependent aperture law has been invented to force agreement.

Actual-rim-slope, conic-domain, material edge-thickness and shared-band gap checks were executed on the final data. Exact meridional real-ray tracing shows the full stop-filling axial beam clearing every rim at five focus samples from infinity to the close endpoint; the smallest margin is 0.03 mm at E4's front surface 7A at close focus. Off-axis bundles vignette at exterior apertures; the checked first clipping events are not inside the cemented pair. These finite samples do not certify continuous motion, full-field throughput, MTF, or the entire production image circle.

Physical stop-aimed bundles and UI entrance-pupil launch rays use different pupil conventions. The current UI launch formulas were retraced at all eight authored f-stops and five focus samples: 440 physical rays. Sixteen first clipping events occur, twelve of them wide open. Off axis, one edge ray of the default 0.60-field fan first clips at E6's front surface 12A at every focus sample, and the opposite edge ray first clips at E3's front surface 5 from focus 0.50 to close focus. On axis, the two edge rays first clip at 7A at focus 0.75 and at surface 6 at close focus. Four additional axial edge rays clip at the stop at close focus, two each at f/2.8 and f/4. No first default-bundle clip is at the cemented interface. These are preserved stop/exterior vignetting observations, not a claim of unvignetted UI fans throughout focus.

At infinity the modeled rims pass a tangential pupil range that narrows with field. In units of the on-axis entrance-pupil radius it runs from about −0.89 to +0.73 at 0.50 relative field (14.71°), −0.82 to +0.57 at 0.70 (20.16°), −0.72 to +0.40 at 0.90 (25.18°) and −0.63 to +0.32 at full field (27.49°). E6's rear surface limits one side at every field; E3, E2 and then E1 limit the other as the field grows. The patent's own transverse-aberration fans (FIG. 2B) end near −0.78/+0.65, −0.69/+0.48, −0.61/+0.33 and −0.55/+0.25 at the same fields, so the design vignettes at least as much as the model does. The plot readings are approximate, and the comparison is a consistency check on the figure-derived rims rather than a fit: no rim was sized to these numbers. These are finite meridional samples, not a continuum guarantee.

The source infinity chief at 27.4433° reaches image semi-height 21.632918 mm and clears the modeled rims. The diagram's aperture-derived half-field is 28.684539°, a paraxial estimate set by the rear surface of E9 (surface 18), so the default off-axis fan is launched at 17.21° at infinity. The current analysis field follows the exact format-corner chief to approximately 27.460807°. The actual format audit reaches 21.649978 mm of the 21.65 mm corner and reports no clipped rim. The diagram's launch extent and the exact analysis-field coverage are separate estimates; neither certifies the full pupil at every field.

The actual project constructor and production render diagnostic functions also accepted the candidate at the tested focus samples with no hidden material trim. That targeted execution is narrower than a full project integration test. No claimed optical performance depends on a successful production build.

## Sources

1. Japan Patent Office, [JP 2019-191502 A](https://patentimages.storage.googleapis.com/2b/6c/91/54b2be0fb680d9/JP2019191502A.pdf), 2019-10-31. Attribution: PDF pp. 1, 27. Definitions/equation: p. 10, paragraphs 0043–0045. Selected data: pp. 10–11, paragraphs 0047–0050. Conditions: p. 17, Table 1. Optical section: p. 18, Figure 1.
2. Carl Zeiss AG, [ZEISS Batis 2/40 CF Technical Specifications](https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/batis-lenses/datasheet-zeiss-batis-240cf.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/datasheet-zeiss-batis-240cf.pdf), 09/18, p. 1. Production values and optical section; the patent correlation is not manufacturer-confirmed.
3. Primary optical-glass catalog snapshots: [OHARA, 2026-07-01](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [HOYA, 2026-07-07 including obsolete](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf); [HIKARI catalog data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx); [SUMITA optical glass data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). SCHOTT and CDGM source document identities and row-level comparisons are retained in the accompanying evidence record. None is presented as proof of supplier identity.

