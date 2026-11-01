# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

JP2011248219A Example1, claim5 and ¶0014–0017 explicitly describe two turning points in G2 motion (the patent defines its term by changing trajectory tangent direction). Keep G1/G3/G4 piecewise-linear in the fixed-image frame and solve the paired D5/D14 G2 translation. Result has the required imageward/objectward/imageward phases. The independent six-station movement table discrepancy remains unresolved and is not substituted for direct-gap source data. Infinity only.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

## Patent Reference and Design Identification

**Patent:** JP 2011-248219 A  
**Application Number:** JP 2010-122984  
**Filed:** May 28, 2010  
**Published:** December 8, 2011  
**Inventor:** Dayong Li (李大勇)  
**Applicant:** Tamron Co., Ltd.  
**Title:** High variable power zoom lens  
**Example details:** Numerical Example 1, Figure 1

This is a source-prescription research model associated with the original Tamron B008, not a manufacturer-confirmed production prescription. The unchanged Japanese publication controls the numerical data. The same-priority US20110292521A1 cover confirms the inventor's English name; the PAJ wrapper's different romanization is retained as a discrepancy.

The architectural association rests on several independent features:

1. The source and original B008 brochure have 16 physical lens bodies in 13 air-separated components. The model represents the explicitly tabulated hybrid resin as a seventeenth material interval, not a seventeenth product lens.
2. The first G2 body is hybrid aspheric, with the resin at S6 and the substrate beginning at S7. Manufacturer molded-asphere bodies align with S23 and S26–S27.
3. The official drawing locates LD bodies at physical L2 and L9, and an AD body at L3. Their ordered positions agree with Example 1.
4. The first G3 body is a positive meniscus, matching Example 1's S16–S17. Example 2 instead has a biconvex body there; its closer telephoto number is not grounds to substitute it.

Native focal stations are 18.5000 / 71.000 / 291.2015, with f/3.44 / 6.03 / 6.50 and full fields 79.46° / 22.47° / 5.57°. The marketed B008 is 18–270mm f/3.5–6.3. The native tele endpoint is 7.85% above the marketed value. No rescaling or supposed rounding convention reconciles that difference. Prescription lengths are retained at native scale and interpreted contextually as millimetres; the governing table does not explicitly declare the length unit.

The older B003 is a distinct 18-element/13-component architecture, confirmed by Tamron’s original B003 specification and manual. The original B008 brochure distinguishes Canon/Nikon VC PZD variants from Sony PZD without lens VC. This centered optical model does not simulate stabilization, mechanical mount differences or later coating revisions. The specific brochure contains 2011 awards and issue code 1108; its exact issue date should not be inferred from a website's December 2010 label.

## Optical Architecture

The four functional groups have a positive–negative–positive–positive power sequence. Their computed standalone d-line focal lengths are:

| Group | Native surfaces | Focal length (mm) |
| ----- | --------------- | ----------------: |
| G1    | S1–S5           |       +101.614766 |
| G2    | S6–S14          |        -14.002025 |
| G3    | S16–S25         |        +44.213513 |
| G4    | S26–S31         |        +48.659423 |

G1 combines a negative front member and a low-dispersion positive partner with a separate positive AD-class body. The compact negative G2 is the variator. G3 supplies positive power behind the stop and includes a positive/negative cemented pair plus an aspheric negative/positive pair. G4 starts with the double-sided molded asphere and finishes with two singlets.

The stop is printed S15, exactly 1.0000 before G3's first vertex. Its shared G3 axial motion is inferred from this fixed separation. It is not a source statement about the production iris mechanism.

The native first-surface-to-image tracks are 133.0049 / 181.1375 / 214.9387 mm. At wide angle the paraxial BFD exceeds EFL, a retrofocus characteristic. At telephoto the track/EFL ratio is below one, a telephoto characteristic. These descriptions refer to their specified stations; neither is asserted as a constant property across an unmodeled zoom continuum.

## Element-by-Element Analysis

The labels below follow physical bodies L1–L16, with L4r reserved for the resin. Focal lengths are computed for each isolated material interval bounded by its own surfaces in air. A cemented member's isolated power is not its in-situ system contribution. Optical roles beyond the source's geometry are identified as interpretation rather than optimized aberration attribution.

### L1 — Negative Meniscus

nd = 1.90366, νd = 31.31. Glass: TAFD25L (HOYA coordinate-compatible class; supplier unproven). f = -152.476 mm.

This negative meniscus is the front partner of the G1 doublet. Its higher index and lower Abbe number contrast with the adjacent LD crown; the pair combines signed power and dispersion rather than acting as two air-separated singlets.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate-compatible class; supplier unproven). f = +116.174 mm.

The biconvex LD partner shares S2 with L1. The manufacturer highlights this body as LD. Its low dispersion relative to L1 supports an achromatizing pairing, but the model does not establish production secondary-spectrum correction.

### L3 — Positive Meniscus

nd = 1.61800, νd = 63.39. Glass: PCD4 (HOYA coordinate-compatible class; supplier unproven). f = +127.557 mm.

The positive meniscus completes G1. The manufacturer marks this physical body AD. That marking is a product fact; the inferred coordinate-class prescription does not establish the production melt or an APO performance claim.

### L4r — Hybrid Aspheric Resin

nd = 1.51460, νd = 49.96. Glass: Unmatched (hybrid optical resin; nd 1.51460 / vd 49.96). f = -1362.974 mm.

The thin resin layer begins at S6 and is bonded to the substrate at S7. Its nonzero thickness and independently specified refractive index are essential. Collapsing it into the glass surface would change both the geometry and optical power.

### L4 — Negative Meniscus

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA coordinate-compatible class; supplier unproven). f = -20.201 mm.

The high-index substrate completes the hybrid first G2 body. Its strongly curved rear surface faces the following air space. The resin and substrate use matched 13.5-mm semi-diameters; their shared interface remains unclipped in the sampled bundles.

### L5 — Biconcave Negative

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA coordinate-compatible class; supplier unproven). f = -25.691 mm.

This biconcave interval is a second negative member of G2. Its air-facing front boundary is a field-vignetting location in the inferred-aperture model; blocked peripheral rays are retained as vignetting rather than numerical successes.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA coordinate-compatible class; supplier unproven). f = +18.282 mm.

This positive dense-flint singlet lies between negative G2 bodies. The positive isolated power moderates the net negative variator. No individual coma or spherical-aberration budget is assigned without an explicit perturbation analysis.

### L7 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5G (HOYA coordinate-compatible class; supplier unproven). f = -29.548 mm.

The final negative G2 meniscus precedes the variable gap to the stop. The preceding 0.6619-mm air gap and neighboring curvature constrain its inferred semi-diameter; source thicknesses and radii remain unchanged.

### L8 — Positive Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate-compatible class; supplier unproven). f = +76.185 mm.

The positive meniscus is the first G3 body, immediately after the fixed stop gap. Its shape is an important Example 1 identification feature. The body is distinct from Example 2's biconvex alternative.

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate-compatible class; supplier unproven). f = +46.928 mm.

The second LD body is a biconvex positive singlet in G3. The low-index/high-Abbe coordinate matches the front LD class, but shared coordinates do not prove that the same supplier or melt was used.

### L10 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA coordinate-compatible class; supplier unproven). f = +33.853 mm.

The positive crown forms the front member of a cemented pair. Its relatively high Abbe number contrasts with the strongly dispersive negative partner. The common interface is retained explicitly.

### L11 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA coordinate-compatible class; supplier unproven). f = -59.622 mm.

The negative dense-flint partner completes that pair. Its isolated power and the net cemented-pair power differ because the interface is refracting between two glasses rather than glass and air.

### L12 — Biconcave Negative (Aspheric)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA coordinate-compatible class; supplier unproven). f = -14.449 mm.

The front surface of this negative body is molded aspheric S23. It shares S24 with the following positive partner. The manufacturer's molded-asphere marker supports the body-level manufacturing interpretation.

### L13 — Positive Meniscus

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA coordinate-compatible class; supplier unproven). f = +28.030 mm.

This positive meniscus is the rear partner of the S23–S25 cemented component. Its catalog class is strongly dispersive. The pair remains distinct from the following G4 group across D25.

### L14 — Biconvex Positive (Aspheric)

nd = 1.59201, νd = 67.02. Glass: M-PCD51 (HOYA coordinate-compatible class; supplier unproven). f = +22.377 mm.

The first G4 body is biconvex and aspheric on both sides, S26 and S27. The negative conic at S27 and the retained polynomial terms affect its peripheral sag without changing the paraxial curvature.

### L15 — Biconcave Negative

nd = 1.90366, νd = 31.31. Glass: TAFD25L (HOYA coordinate-compatible class; supplier unproven). f = -21.282 mm.

The negative rear singlet has a nearly flat object-side surface and a strongly curved rear surface. Equal inferred 8.4-mm front/rear semi-diameters place peripheral clipping on its external boundary rather than inventing a large clear aperture that violates the following air gap.

### L16 — Biconvex Positive

nd = 1.69895, νd = 30.05. Glass: E-FD15L (HOYA coordinate-compatible class; supplier unproven). f = +51.250 mm.

The final positive biconvex singlet completes G4. Its rear-to-image distance is the printed D31 at each station. No cover plate or compensating refocus is inserted after it.

## Glass Identification and Spectral Limits

Fifteen unique native coordinates were compared against retained complete catalogs from OHARA, HOYA, Schott, HIKARI, CDGM and Sumita. The comparison was newly executed; the archived catalog bytes were not misrepresented as a fresh network retrieval. The data retains the original Nd/Abbe values and uses compatible catalog-class names where supported. No manufacturer supplier attribution is made.

| Source nd | Source νd | Authored class                                                  | Runtime disposition                 |
| --------: | --------: | --------------------------------------------------------------- | ----------------------------------- |
|   1.90366 |     31.31 | TAFD25L (HOYA coordinate-compatible class; supplier unproven)   | TAFD25L                             |
|   1.49700 |     81.61 | FCD1 (HOYA coordinate-compatible class; supplier unproven)      | FCD1                                |
|   1.61800 |     63.39 | PCD4 (HOYA coordinate-compatible class; supplier unproven)      | PCD4                                |
|   1.51460 |     49.96 | Unmatched (hybrid optical resin; nd 1.51460 / vd 49.96)         | Abbe approximation; resin unmatched |
|   1.88300 |     40.80 | TAFD30 (HOYA coordinate-compatible class; supplier unproven)    | TAFD30                              |
|   1.77250 |     49.62 | TAF1 (HOYA coordinate-compatible class; supplier unproven)      | S-LAH66                             |
|   1.84666 |     23.78 | FDS90 (HOYA coordinate-compatible class; supplier unproven)     | FDS90                               |
|   1.83481 |     42.72 | TAFD5G (HOYA coordinate-compatible class; supplier unproven)    | TAFD5G                              |
|   1.72916 |     54.67 | TAC8 (HOYA coordinate-compatible class; supplier unproven)      | TAC8                                |
|   1.48749 |     70.44 | FC5 (HOYA coordinate-compatible class; supplier unproven)       | FC5                                 |
|   1.92286 |     20.88 | E-FDS1 (HOYA coordinate-compatible class; supplier unproven)    | E-FDS1                              |
|   1.85135 |     40.10 | M-TAFD305 (HOYA coordinate-compatible class; supplier unproven) | M-TAFD305                           |
|   1.80809 |     22.76 | FD225 (HOYA coordinate-compatible class; supplier unproven)     | FD225                               |
|   1.59201 |     67.02 | M-PCD51 (HOYA coordinate-compatible class; supplier unproven)   | M-PCD51                             |
|   1.69895 |     30.05 | E-FD15L (HOYA coordinate-compatible class; supplier unproven)   | E-FD15L                             |

The TAF1 label resolves through the current S-LAH66 alias, an OHARA class. This is an explicit runtime substitution, not confirmation of HOYA glass in the production lens. Resolved catalog dispersion can introduce tiny green-index differences from the printed Nd used by the independent first-order source calculation. The resin has only Nd and Abbe support and remains on an approximate dispersion model. No source nC/nF/ng, melt data, coatings, diffraction efficiency or measured chromatic performance is supplied.

The material distribution is consistent with combining low-dispersion positive bodies and higher-dispersion signed partners. This qualitative statement is not an APO, secondary-spectrum or MTF certification.

## Focus and Zoom Scope

NO_INTERNAL_RECONSTRUCTION. The patent supplies three infinity configurations, not quantitative near-focus conjugates. The brochure's 0.49 m minimum focus distance is metadata only. Repeated focus entries leave the prescription at infinity; they do not reconstruct a focus mechanism or demonstrate that close-focus performance.

The three direct-gap stations are the only quantitative zoom states. The authored half-step zoom control selects them; arbitrary intermediate values accepted by the generic runtime are illustrative linear interpolation, not a verified cam law or refocused prescription. The separate six-station movement table is preserved as evidence but does not supply complete intermediate prescriptions.

Using the direct gaps and a fixed image reference gives the following objectward movements:

| Station |      G1 |      G2 |      G3 |      G4 |
| ------- | ------: | ------: | ------: | ------: |
| Wide    |  0.0000 |  0.0000 |  0.0000 |  0.0000 |
| Middle  | 48.1326 | 19.6583 | 37.7180 | 42.9724 |
| Tele    | 81.9338 | 17.0629 | 46.3000 | 52.8142 |

The separate movement table differs in G4 by 0.0266 at middle and 0.0598 at tele, with similar common offsets in other groups. The source does not explain this discrepancy. Direct gaps control; the difference is not silently labeled image-plane drift or reconciled by changing D31.

The source FNO values calibrate the runtime iris independently at each station. Exact stop radii are 8.17668879 / 7.97180855 / 8.17226144 mm. This is an inferred calibration schedule, not evidence of a measured variable iris in the product. Stopping down is an illustrative optical control. The modeled maximum f/22 is conservative relative to the brochure's f/22–40 minimum-aperture range; the full mechanical iris schedule is not reconstructed.

## Aspherical Surfaces

The native equation contains an unsquared height under its radical and a trailing squared parenthesis. The owner-approved interpretation is the standard conic plus the published even polynomial. The original equation facsimile remains preserved; the interpretation is not claimed verbatim. K is used directly. Every source A2 is zero, all terms through A12 are retained, and the schema-required A14 is zero. No scaling is applied.

| Surface |       K |           A4 |           A6 |           A8 |          A10 |         A12 |
| ------- | ------: | -----------: | -----------: | -----------: | -----------: | ----------: |
| 6A      |  0.0000 |  1.00848e-05 | -8.23992e-08 |  7.73802e-10 | -3.65697e-12 | 7.40459e-15 |
| 23A     |  0.0000 |  1.20221e-05 | -1.69654e-08 |  3.67494e-10 | -2.56282e-12 | 0.00000e+00 |
| 26A     |  0.0000 | -2.13290e-05 |  1.07151e-07 | -1.36111e-09 |  1.05249e-11 | 0.00000e+00 |
| 27A     | -8.6353 |  9.38555e-06 |  7.17720e-08 | -8.25848e-10 |  8.21363e-12 | 0.00000e+00 |

At the inferred modeled radii, the signed sag departures from the same-vertex sphere are:

| Surface | Modeled radius (mm) | Departure (mm) |
| ------- | ------------------: | -------------: |
| 6A      |               13.50 |   +0.225902382 |
| 23A     |                9.50 |   +0.094485381 |
| 26A     |               10.50 |   -0.145321147 |
| 27A     |               10.50 |   +0.409556210 |

These are computed departures at author-estimated apertures, not manufacturing dimensions. S6 adds positive departure to the hybrid's outer surface; S23 makes the negative sag less negative; S26 reduces positive sag; S27's conic-plus-polynomial profile makes its negative sag less negative. These geometric signs do not alone establish each surface's net aberration contribution.

## Conditional Expressions and First-Order Verification

The patent's compactness ratio Lw/(Ft/Fw) is 8.449787 using the printed focal values and literal wide track, reproducing 8.45 to two decimals. The combined G2–G4 EFL ratio is −0.164206, reproducing −0.16. It is a rear-assembly EFL ratio, not a BFD ratio. The native inequality's arrow-like '<−' glyph is retained as an ambiguity rather than silently typeset as an unqualified bound.

The computed surface-by-surface Petzval sum is +0.001943172832 mm⁻¹, constant across the three gap-only states. It is a first-order curvature sum; it is not the sagittal/tangential best-focus surface or an image-quality measurement.

| Station  | Printed EFL |  Computed EFL | Printed D31 | Computed BFD |
| -------- | ----------: | ------------: | ----------: | -----------: |
| 18.5000  |     18.5000 |  18.500464473 |     39.0550 | 39.056248251 |
| 71.0000  |     71.0000 |  71.004635708 |     82.0274 | 82.032520509 |
| 291.2015 |    291.2015 | 291.216960594 |     91.8692 | 91.871809466 |

The small residuals exceed the printed output least digit. They fit within conservative input half-last-digit sensitivity budgets, so source precision is a plausible explanation, not a proven one. Source radii, media and image gaps remain literal. Sequential ray recursion and independent ABCD checks agree; the data is not optimized to the printed headline values.

## Exact-Ray and Geometry Verification

The actual current project passes schema validation, buildLens, strict LensDataInput type checking and production element-shape diagnostics. Hidden render trim is zero at the three stations. The default 0.90 shared-gap allowance is retained; no override was needed. The largest computed gap-intrusion fraction is 0.8894842, with positive material edge thickness and acceptable actual aspheric rim slopes.

A 27,756-ray finite sample covers all three native stations, six field fractions, three pupil scales, both the native field limits and a 23.6 × 15.7 mm APS-C frame. Every sampled full-open axial pupil ray transmits; all sampled chief rays reach the image. This is sampled verification, not a proof over every possible ray or intermediate control value.

Off-axis vignetting remains explicit. There are 106 raw noBracket events in the sample: 96 front-cap misses at telephoto and 10 misses of the S9 optical cap at wide full native field. Separate analytic line/sphere checks confirm they do not hit the bounded optical cap. They are blocked rays, not successful transmission and not silently ignored solver failures. No sampled cemented/hybrid interior junction clips. At full native field, 194/257 pupil samples transmit at wide and 177/257 at tele; these sampling fractions are not integrated irradiance, T-stop or measured production vignetting.

The intended outcome is a source-station research model with inferred clear apertures and class-level dispersion. It is not a production-exact, continuously focused, finite-focus, stabilization or image-quality certification. Repository integration and whole-corpus/build gates remain pending.

## Sources

1. [JP2011248219A, complete Japanese publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002011248219A): equation ¶0019; Example 1 prescription ¶0021–0023; gaps ¶0024; conditions ¶0025; movement ¶0026; Figure 1 and aberration plots. The unchanged 15-page original includes its PAJ wrapper.
2. [Tamron original B008 brochure](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/catalog/b008_en.pdf): 16/13 construction, special-element key, original mounts and Sony VC exception, filter/barrel bounds, PZD, MFD and iris metadata. Complete four-page original preserved.
3. [Tamron official B008 construction drawing](https://www.tamron.com/product/pc_file/file/b008_lens-construction_en.svg): ordered shape sequence and manufacturer LD/AD/hybrid/molded-asphere positions.
4. [US20110292521A1 original](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20110292521): same Japanese priority and inventor romanization control only; not substituted for the controlling Japanese prescription.
5. Six-vendor optical catalog originals and provenance retained in the supporting evidence archive. Equivalent-class calculations are distinct from source material values and production supplier identity.

6. [Tamron official B003 specification](https://www.tamron.com/jp/consumer/lenses/data/af-lens/b003/) and [complete B003 manual](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/inst/b003/b003inst_1010_en.pdf): direct variant-control evidence for the separate 18-element/13-component model introduced in 2008.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 30 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.44306619720865115mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.
