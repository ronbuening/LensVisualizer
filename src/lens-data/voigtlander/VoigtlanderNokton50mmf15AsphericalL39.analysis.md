## Patent Reference and Design Identification

**Patent:** JP 2000-330014 A ([publication and original text](https://patents.google.com/patent/JP2000330014A/en))
**Application Number:** JP 11-144448
**Filed:** 1999-05-25
**Published:** 2000-11-30
**Inventor:** Koji Shiokawa
**Applicant:** Cosina Co., Ltd.
**Title:** Large-aperture lens
**Embodiment analyzed:** Example 2, Tables 3–4 and Figures 3–4

The paired model is **VOIGTLÄNDER NOKTON 50mm f/1.5 Aspherical L39**, the original L39 product. The production association is a supported correlation, not a manufacturer-confirmed patent attribution. Cosina’s [discontinued-product record](https://www.cosina.co.jp/discontinued/nokton-50mm-f1-5-aspherical/) and [optical section](https://www.cosina.co.jp/wp/wp-content/uploads/2024/01/L-50_15-LD.svg) provide the following convergent evidence:

1. The production lens and this example have six elements in five groups, with a cemented rear-center doublet and a final singlet with two aspheric faces.
2. The source describes an approximately 50 mm large-aperture standard lens. Its design values are f = 51.60 mm and FNO = 1.53; the product is marketed as 50 mm f/1.5.
3. The source and manufacturer sections share the positive-positive-negative-negative-positive group topology. The product’s L(L39) mount and full-frame format are recorded separately from the optical prescription.
4. The May 1999 filing precedes Cosina’s October 1999 release. Timing and outline agreement do not establish that every manufactured radius, spacing, or material equals this example.

The active selection is Example 2. The source is transcribed without scaling: Table 3 is on PDF page 5 (printed page 4), Table 4 continues onto PDF page 6 (printed page 5), and Figures 3–4 are on PDF page 8 (printed page 7). The common asphere equation is in ¶0018 on PDF page 4. The faithfully modeled table reproduces system focal length and back focus, but its final-group focal length and literal ratio bound have the qualified discrepancy described below.

## Optical Architecture

This is a modified Gaussian standard-lens architecture with two positive front singlets, a negative meniscus before the stop, a negative-positive cemented pair after the stop, and a double-aspheric positive rear singlet. This architectural description follows the patent’s Gaussian comparison and stated group forms (¶0002–0013, ¶0021); it does not imply a symmetric prescription.

The five air-separated groups have the following isolated d-line focal lengths. The cemented group is traced with its real glass-to-glass interface.

| Group | Modeled surfaces | Composition | Net focal length, mm |
|---|---|---|---:|
| G1 | 1–2 | L1, positive meniscus | +76.364077 |
| G2 | 3–4 | L2, positive meniscus | +100.434927 |
| G3 | 5–6 | L3, negative meniscus | -39.184773 |
| G4 | 8–10 | L4 + L5, cemented D1 | -239.679867 |
| G5 | 11A–12A | L6, double-aspheric singlet | +41.258080 |

The stop is source plane 7, labeled STO in the model, between the third and fourth groups. Its axial location is published; its physical radius is inferred. All refracting surfaces, the stop plane, and the final image spacing are retained. No rear cover plate is listed or introduced.

At the published static state, the final-data calculation gives EFL **51.600113 mm** and last-vertex BFD **36.427561 mm**. The first-to-last refracting vertex track is **43.229700 mm**, and the first-vertex-to-tabulated-image distance is **79.657200 mm**. The front principal plane is at **33.571956 mm** relative to the first vertex; the rear principal plane is at **-15.172552 mm** relative to the final vertex, with positive distances toward the image. These are d-line paraxial quantities, not finite-field image-quality measurements.

The surface-by-surface Petzval sum is **0.002905458 mm⁻¹**, using φ/(n n′) at every refracting interface, including the cemented surface. This is a first-order curvature indicator; it does not establish the actual sagittal and tangential focal surfaces.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

nd = 1.80420, νd = 46.5. Glass: 804465 — coordinate class (supplier unconfirmed). f = +76.364077 mm.

This is the first positive air-separated group, corresponding to patent group 21. Its object-facing convex meniscus begins the converging front pair. The source identifies the form and positive power; it does not isolate a measured aberration contribution for this element (¶0013, ¶0021).

### L2 — Positive Meniscus, convex to object

nd = 1.80420, νd = 46.5. Glass: 804465 — coordinate class (supplier unconfirmed). f = +100.434927 mm.

This second positive meniscus is patent group 22. A narrow air separation distinguishes it from a cemented front pair. Its standalone positive focal length describes the isolated thick element; it does not by itself determine the element’s in-situ contribution to the complete system (¶0013, ¶0021).

### L3 — Negative Meniscus, convex to object

nd = 1.72825, νd = 28.3. Glass: 728283 — coordinate class (supplier unconfirmed). f = -39.184773 mm.

The negative meniscus is patent group 23, immediately before the diaphragm. Its higher dispersion relative to the front pair provides a potential chromatic balancing degree of freedom, but neither this pairing nor the power sign establishes a quantified correction allocation. The patent’s explicit correction argument concerns the complete architecture and rear aspheric singlet (¶0008–0009, ¶0013, ¶0021).

### L4 — Biconcave Negative, cemented D1 front

nd = 1.62004, νd = 36.3. Glass: 620363 — coordinate class (supplier unconfirmed). f = -16.068684 mm.

This negative element is 24a, the front member of patent group 24. Its image-side surface is cemented directly to L5 at surface 9. The standalone focal length above assumes air outside both faces; in the modeled lens that shared face refracts directly from L4 glass into L5 glass. The cemented pair’s net focal length is therefore calculated separately (¶0011, ¶0013, ¶0021).

### L5 — Biconvex Positive, cemented D1 rear

nd = 1.80420, νd = 46.5. Glass: 804465 — coordinate class (supplier unconfirmed). f = +19.310697 mm.

This positive element is 24b, sharing surface 9 with L4. The pair combines a more dispersive negative member with a less dispersive positive member, a qualitative achromatizing arrangement. The actual cemented group remains weakly negative in the d-line first-order calculation. No apochromatic or partial-dispersion performance follows from the two Abbe numbers alone (¶0011, ¶0021).

### L6 — Biconvex Positive, two aspheric faces

nd = 1.69350, νd = 53.3. Glass: 694533 — coordinate class (supplier unconfirmed). f = +41.258080 mm.

This is patent group 25, the final positive singlet. Both surfaces are aspherical. The patent’s central design choice replaces two rear positive elements of its comparison design with one double-aspheric positive element, reducing the element count while seeking sufficient whole-system aberration correction (¶0008, ¶0011, ¶0035). The source’s stated focal length and lower-bound condition for this group are not exactly reproduced; the discrepancy is retained below.

## Glass Identification and Selection

The numerical tables use generic N/ν headings. Their d-line interpretation is inferred from the d/g definitions in ¶0020 and the plotted aberration references, supported by ordinary catalog-coordinate compatibility; the table headings alone do not specify the line. No wavelength conversion is applied.

Four native coordinate classes describe the source glass palette: 804465 in L1, L2 and L5; 728283 in L3; 620363 in L4; and 694533 in L6. The last code uses decimal half-up rounding of nd = 1.69350. These labels preserve native coordinates and express a class, not a supplier or melt identification.

The review checked primary OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalog rows, including competing candidates and their residuals. HOYA TAF3D and Schott N-LASF44 both match the native L1/L2/L5 coordinates at the stated precision. HOYA E-F2 and Sumita F2 match the L4 coordinates. Those competing matches alone prevent assigning a unique supplier. L6 has nearby candidates such as HOYA LAC13; proximity is not proof of historical use. The catalog search window is only a discovery window and is not a widened prescription tolerance.

The actual pinned runtime resolves the four labels to spectral proxies N-LASF44, H-ZF4A, E-F2 and LAC13. Those catalog curves are runtime choices. The source does not establish their line indices or partial-dispersion behavior for the manufactured glass, and the model does not attach invented nC, nF, ng or ΔPgF measurements to its elements. Color tracing is therefore an estimate. No APO, anomalous-dispersion, or secondary-spectrum performance claim is made.

## Focus Mechanism

The source publishes one prescription and no finite-focus spacing law. The manufacturer documents manual focusing and a 0.9 m minimum focusing distance, but that specification does not identify a unique internal or unit-motion solution for the patent table.

The model’s disposition is **NO_INTERNAL_RECONSTRUCTION**. Close focus is **not modeled**: the data uses closeFocusM = 1e15 and an empty var object, with an explicit infinity-only disclosure. Focus-control samples remain the same geometry. No focus travel, breathing behavior, or finite-conjugate performance is inferred from the production minimum-focus distance.

## Aspherical Surfaces

Both faces of L6 are aspheric: patent surfaces 11 and 12 map to **11A** and **12A**. The patent uses the standard 1 + K conic convention (¶0018):

$$z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2 h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},\quad c=1/R.$$

K = 0 for both faces. It is copied without conversion. With h and z in mm, Aₚ has units mm^(1−p). The following native coefficients come from Table 4; no dimensional scaling or coefficient fitting is applied.

| Surface | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|
| 11A | 7.584e-6 | −1.473e-9 | 2.323e-10 | 6.597e-14 |
| 12A | 1.656e-5 | 2.224e-8 | 8.509e-11 | 9.492e-13 |

At the inferred modeled semi-diameter **16.000000 mm**, surface **11A** has a polynomial departure of **1.542567870 mm** from its vertex-curvature sphere and total signed sag **2.999165786 mm**. At the inferred modeled semi-diameter **16.000000 mm**, surface **12A** has a polynomial departure of **2.867516648 mm** from its vertex-curvature sphere and total signed sag **-0.366216574 mm**. These are modeled-rim values, not departures at a published clear aperture. Positive polynomial departure shifts each profile toward the image relative to its sphere; on the negative-radius rear face it reduces the magnitude of the negative rim sag. The patent describes the two faces as providing correction for the reduced-element architecture, but it does not allocate a measured individual aberration correction or establish a manufacturing process for this prescription (¶0008, ¶0035).

## Conditional Expressions and Source Discrepancy

The Japanese claims and details repeatedly state **0.8 ≤ f5/f ≤ 1.2** (claim 2, ¶0007, ¶0009, ¶0012, ¶0023), where f5 is the final air-separated singlet’s focal length. The source summary gives f5 = 41.28 mm and says the example satisfies the bound. The English cover abstract’s differing lower bound does not override the repeated Japanese condition.

The unchanged final table calculates **f5 = 41.258080 mm**, rather than the printed 41.28 mm, and **f5/f = 0.799573431**. The ratio rounds to 0.80 but is strictly below 0.8. The printed f5 comparison fails its **0.005 mm** precision tolerance, and the literal lower-bound comparison fails with **zero inequality tolerance**. Neither comparison is reported as reproduced or compliant.

A final-singlet source-precision diagnostic varied both radii and thickness by ±0.00005 mm and its index by ±0.000005 at all 16 corners. It produced f5 from **41.257738 to 41.258422 mm**, outside the printed rounding interval 41.275–41.285 mm. That finite sensitivity calculation does not explain the discrepancy as ordinary rounding, and no corrected source value is proposed.

The supported disposition is a qualified faithful-table model. Its system EFL and BFD reproduce the published table, while the inconsistent group summary and strict inequality remain failed observations. The native radii, spacings, indices, and coefficients are retained. Production matching remains a correlation.

## Verification and Aperture Limits

The authored physical iris radius is **11.501654285 mm**, calibrated by exact axial tracing at nominal entrance-pupil radius **16.862782103 mm** for f/1.53. The current runtime independently performs the same type of real-ray calibration and returns **11.501654285 mm**. This agreement verifies implementation of a dependent calibration; it is not independent evidence of the manufactured diaphragm diameter.

For comparison, a paraxial calibration at that nominal entrance pupil would require iris radius **11.744546841 mm**. The small-angle entrance-pupil radius derived from the authored physical iris is **16.514037762 mm**, corresponding to **f/1.562310623**. These paraxial quantities are distinct from the runtime’s nominal f/1.53 convention.

All lens semi-diameters are estimated from patent Figure 3 (the Example 2 section, measured at 0.066 mm per pixel) and the manufacturer section, constrained by geometry and floor-checked by real-ray trace; none is a published aperture. Surfaces 4, 6 and 8 carry the optical extent that the figure draws inside flat mounting annuli, and surface 5 stops at the largest height the facing-surface gap check admits. The minimum sampled shared-band edge thickness is **0.140649978 mm**; the maximum actual rim-slope angle is **51.574582°**. Conic-domain and shared-band gap checks pass, and actual project render diagnostics show zero trim. These finite checks are not a manufacturing tolerance analysis.

The current template’s default off-axis field is 0.60 of the state-specific runtime half-field. Here that is **18.155362101°**, within the aperture-derived runtime extent of **30.258936836°**. The actual six axial pupil fractions are −0.83, −0.5, −0.17, 0.17, 0.5, 0.83; the five off-axis fractions are −0.75, −0.375, 0, 0.375, 0.75. Across three static focus controls and eight authored f-stops, the axial and 0.30/0.60 field samples give **384 passing rays**. A further **120 full-runtime-field probes** are recorded separately and contain failures.

Source, marketing, image format, and runtime view extent are different quantities. The manufacturer lists a 46° full field, giving a 23° marketed half-field. Source Figure 4 labels an image height of 22.10 mm. The current 135-full-frame taxonomy uses a 43.3 mm diagonal, or a 21.65 mm corner. Both signed corner and source-height chief rays pass. In the runtime, their solved half-field angles are as follows:

| Chief target | Half-field angle |
|---|---:|
| Full-format corner, 21.65 mm | 23.193926910° |
| Source plot height, 22.10 mm | 23.639794403° |

Chief coverage does not establish complete pupil clearance. At both signs of the marketed edge and each of those source/format fields, only **three of five wide-open pupil samples pass**. One extreme first clips the exterior exit surface **4**, 1.24 mm ahead of entrance surface 5; the opposite extreme genuinely first misses spherical cemented interface **9** after passing surface **8**. The latter is a real first failure, not a ghost artifact. Relevant inferred semi-diameters are 14.3 mm at surface 4, 14 mm at surface 5, 12 mm at surface 6, 11.8 mm at surface 8, 15.5 mm at surface 9, and 16 mm at surface 10.

A separate straight connector between the modeled outer rim points suggests possible physical edge vignetting, but that connector is an inferred diagnostic, not a source-measured bevel or an implemented blocker. **Complete full-field pupil containment is not established.** The larger full-runtime-field probes also retain their actual failures. No source dimension, aperture, or projection cap was altered to hide these outcomes.

The scoped default-bundle gate passes; the failed full-field transmission observations remain FAIL. The source discrepancy and edge-pupil limits qualify the model’s use. Independent source-first audit is complete; project integration remains pending.

## Sources

- [JP2000330014A publication](https://patents.google.com/patent/JP2000330014A/en), original Japanese claims and ¶0002–0027, ¶0035; Table 3, Table 4, Figures 3–4. One-based original PDF page locators are identified above. The supplied recovered PDF remains the transcription source.
- [Cosina: NOKTON 50mm F1.5 Aspherical, discontinued L39 product](https://www.cosina.co.jp/discontinued/nokton-50mm-f1-5-aspherical/) and [manufacturer optical section](https://www.cosina.co.jp/wp/wp-content/uploads/2024/01/L-50_15-LD.svg).
- [OHARA primary glass catalog, 2026-07-01](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
- [HOYA20260707 primary glass catalog, 2026-07-07 including obsolete](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
- [HIKARI primary glass catalog, 2025-06-01 history header](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
- [SUMITA primary glass catalog, 2026-08-21 data, download page 2026-08-26](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
- [SCHOTT primary glass catalog, June-2025-B](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
- [CDGM primary glass catalog, 2026-09](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c). Relevant raw rows, residuals and retrieval hashes are retained in the evidence record.
