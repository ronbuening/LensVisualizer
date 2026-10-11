# Samyang AF 14mm F2.8 EF — Example 3 optical analysis

## Patent Reference and Design Identification

**Patent:** KR 101918210 B1  
**Application Number:** 10-2017-0053558  
**Filed:** 2017-04-26  
**Registered:** 2018-11-07  
**Published:** 2018-11-14  
**Inventors:** 유재명, 이해진, 이정두  
**Applicant:** Samyang Optics Co., Ltd.  
**Title:** Lens optical system and photographing apparatus having the same  
**Embodiment analyzed:** Numerical Example 3, Tables 7–9, Figure 7, system 100-3

This model transcribes the selected numerical example without focal-length scaling. Its association with the Canon-EF AF 14mm F2.8 is inferred from the complete optical arrangement, rather than confirmed by the manufacturer as a production-exact prescription.

1. Fifteen lenses form ten air-separated components. The added positive L7 singlet and moving cemented L8–L10 triplet distinguish Example 3 from the 13- and 14-element alternatives.
2. Double-sided aspheres occupy L4 and L13. The final positive L15 is the low-dispersion member in the manufacturer's ED position.
3. The official EF optical section and technical table identify 15/10, two ASP elements, one ED highlight, four HR highlights and a 0.20 m minimum distance. Those marketing highlights are not exhaustive glass-index classes.
4. The patent's native infinity f = 14.194604 mm, Fno = 2.851 and full field 115.742° are close to, but distinct from, the marketed 14 mm, f/2.8 and 116.6°.

The Nikon-F and Sony-FE variants are not additional prescriptions in this file. The existing AF14 FE model uses another application. Manufacture-exact radii, coating performance, glass supplier and melt identity are not established by this correlation.

Two explicit modeling exceptions are disclosed throughout: the missing asphere equation uses a separately approved sibling-patent convention, and the image plane uses an approved fixed arithmetic reference behind the source plate. Neither is presented as a corrected statement recovered from the controlling patent.

## Optical Architecture

The prescription has the computed distance relationship of a retrofocus lens: its bare-lens back focal distance is 38.328954 mm from S26, well above the computed EFL of 14.190782 mm. Including the source rear plate, the infinity Gaussian image lies 39.180747 mm behind S26. The physical S1–S26 lens track is 90.897060 mm.

The source identifies fixed G1, moving G2 and fixed G3. Their independently computed standalone d-line focal lengths are:

| Source group | Surfaces      | Elements | Computed EFL (mm) |
| ------------ | ------------- | -------- | ----------------: |
| G1 / G13     | 1–13          | L1–L7    |        +25.111991 |
| G2 / G23     | 14–17         | L8–L10   |        +98.643520 |
| G3 / G33     | stop18, 19–26 | L11–L15  |       +115.047351 |

The positive computed G1 is an unresolved contradiction with the patent's negative-group wording. It does not authorize moving the group boundary or changing a radius. The large negative front menisci, positive L7 and separated groups must be considered as a compound system; summing thin-lens powers would not reproduce these thick-group values.

The rear optical device OD3 is a 2.500 mm plane-parallel plate, nd = 1.51680 and νd = 64.20, located 36.200000 mm after S26. Paragraph 0099 identifies possible low-pass, IR-cut or cover glass, without establishing a drop-in holder. The model traces this source plate through rearPlates and excludes it from the 15 product lenses. Its position and thickness stay fixed.

## Element-by-Element Analysis

All focal lengths below are computed for an individual element surrounded by air. They are not the in-situ interface powers inside cemented components. Catalog equivalents supply a declared dispersion approximation; they do not identify the production supplier.

### L1 / L13 — Positive Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15 (Hoya equivalent). f = +348.460392 mm.

The first element is a weak positive meniscus, as both its standalone calculation and the example description establish. Its large inferred aperture accepts the wide incident field.

### L2 / L23 — Negative Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (Hoya equivalent). f = -80.538760 mm.

This negative meniscus follows the front collector. Its front and rear inferred clear semi-diameters differ because the rear spherical surface imposes a steeper-rim limit; those modeled edge dimensions are not source-measured bevel geometry.

### L3 / L33 — Negative Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (Hoya equivalent). f = -50.569262 mm.

The third element adds negative power ahead of the first asphere. Its rear clearance toward S7 is the tightest modeled air band, so the inferred rear radius is kept at 15.03 mm under the unchanged 90% gap-sag rule.

### L4 / L43 — Neg. Meniscus (2× Asph)

nd = 1.77271, νd = 49.70. Glass: Unmatched (lanthanum crown class; source 1.77271 / 49.70). f = -24.654385 mm.

The two source aspheres are S7/S8. Their published H-Ape values, 15.06 and 12.31 mm, are preserved individually. The aspheric shape remains valid where a same-radius sphere would not, so a spherical sd/R shortcut would be inappropriate.

### L5 / L53 — Biconcave Negative

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya equivalent). f = -14.963818 mm.

This biconcave element is cemented to L6 at S10. It supplies strong negative standalone power and a high-index, high-dispersion partner, but its isolated power should not be assigned to the shared interface.

### L6 / L63 — Biconvex Positive

nd = 1.74077, νd = 27.76. Glass: E-FD13 (Hoya equivalent). f = +17.428485 mm.

L6 completes the front cemented doublet. The complete L5–L6 component has weak net negative power, f = −468.689165 mm, because the shared interface and thick-element separation matter.

### L7 / L73 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (Hoya equivalent). f = +30.162235 mm.

This air-separated positive singlet is present in Example 3 and helps distinguish its architecture from the alternatives. It completes G1 and changes the net power of that source-defined group to positive.

### L8 / L83 — Negative Meniscus

nd = 1.69680, νd = 55.46. Glass: LAC14 (Hoya equivalent). f = -32.332801 mm.

L8 begins the inner-focus triplet. It is a negative meniscus with a convex object-side face. The triplet remains cemented while its two surrounding air gaps change.

### L9 / L93 — Biconvex Positive

nd = 1.51823, νd = 58.96. Glass: E-C3 (Hoya equivalent). f = +18.100766 mm.

The central biconvex member provides the positive contribution of the moving group. Its standalone value is not the group focal length; the complete L8–L10 triplet computes +98.643520 mm.

### L10 / L103 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya equivalent). f = -58.155896 mm.

This negative meniscus completes the moving triplet at S17. Its source thickness remains 0.700 mm. No relative motion inside the cemented triplet is modeled.

### L11 / L113 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (Hoya equivalent). f = -8.449203 mm.

The first post-stop element is biconcave and cemented to L12. This rear pair is net negative, f = −21.935462 mm, even though the full G3 assembly is net positive.

### L12 / L123 — Biconvex Positive

nd = 1.78472, νd = 25.72. Glass: FD110 (Hoya equivalent). f = +13.962670 mm.

L12 is the positive partner of the first rear doublet. The selected FD110 catalog-equivalent spectrum is supplied as explicit line-index anchors because the frozen runtime catalog does not contain that exact label.

### L13 / L133 — Biconvex Positive (2× Asph)

nd = 1.55352, νd = 71.50. Glass: Unmatched (low-dispersion crown class; source 1.55352 / 71.5). f = +26.204916 mm.

This positive biconvex element has aspheres on both S22 and S23. Its source dispersion coordinate is not replaced with MP-FCD500-20: that catalog glass has νd = 71.72, whereas the patent prints 71.5.

### L14 / L143 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: TAFD45 (Hoya equivalent). f = -19.797829 mm.

This negative meniscus begins the final cemented doublet. The same source coordinate appears in L11, but the different curvatures and thickness give it a different standalone power.

### L15 / L153 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya equivalent). f = +19.443294 mm.

The final positive element has the lowest source dispersion of the fifteen lenses and occupies the official ED-highlight position. The complete L14–L15 doublet computes +138.787851 mm. That pairing alone does not establish apochromatic performance.

## Glass Identification and Spectral Scope

The patent supplies nd/νd rather than manufacturer glass names. Fresh primary catalog searches covered HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM. Several coordinates have multiple compatible candidates. A consistent selected HOYA-equivalent set is used where supported, without asserting that Samyang bought those glasses.

| Elements | Native nd / νd  | Model interpretation                                          |
| -------- | --------------- | ------------------------------------------------------------- |
| L1       | 1.80610 / 33.27 | NBFD15 (Hoya equivalent)                                      |
| L2       | 1.72916 / 54.67 | TAC8 (Hoya equivalent)                                        |
| L3       | 1.80420 / 46.50 | TAF3 (Hoya equivalent)                                        |
| L4       | 1.77271 / 49.70 | Unmatched (lanthanum crown class; source 1.77271 / 49.70)     |
| L5, L10  | 1.92286 / 20.88 | E-FDS1 (Hoya equivalent)                                      |
| L6       | 1.74077 / 27.76 | E-FD13 (Hoya equivalent)                                      |
| L7       | 1.84666 / 23.78 | FDS90 (Hoya equivalent)                                       |
| L8       | 1.69680 / 55.46 | LAC14 (Hoya equivalent)                                       |
| L9       | 1.51823 / 58.96 | E-C3 (Hoya equivalent)                                        |
| L11, L14 | 1.95375 / 32.32 | TAFD45 (Hoya equivalent)                                      |
| L12      | 1.78472 / 25.72 | FD110 (Hoya equivalent)                                       |
| L13      | 1.55352 / 71.50 | Unmatched (low-dispersion crown class; source 1.55352 / 71.5) |
| L15      | 1.49700 / 81.61 | FCD1 (Hoya equivalent)                                        |

Thirteen elements carry nC/nF/ng evaluated from the selected primary HOYA AGF coefficients at 656.2725, 486.1327 and 435.8343 nm. These catalog-derived anchors are not patent-published measurements or production-melt spectra. They take precedence over runtime aliases; native nd/νd remain unchanged.

L4 and L13 remain explicitly Unmatched. For L4, TAF1 differs by Δnd = −0.00021 and Δνd = −0.07. For L13, MP/MC-FCD500-20 matches nd but differs by Δνd = +0.22. Their modeled spectra therefore use the native Abbe approximation. The source ray-fan text identifies 656.2700, 587.5600 and 479.9100 nm; the last wavelength is not silently treated as the standard F line.

The ED/flint pairings suggest a chromatic balancing strategy, but the mixed spectral evidence does not support an APO, secondary-spectrum, measured MTF or production-performance claim. The interface-by-interface d-line Petzval sum is +0.00518138510909 mm⁻¹; it is not a direct measurement of image-surface curvature or chromatic correction.

## Focus Mechanism and Image-Plane Interpretation

The source provides three discrete configurations. Only G2, the cemented L8–L10 triplet, moves; G1 and G3 stay fixed. D1 decreases by 3.226261 mm while D2 increases by the same amount at the near state. Their sum remains 7.589060 mm.

| Quantity                   |  Infinity | MGA = −1/30 heading | TL = 0.2 m |
| -------------------------- | --------: | ------------------: | ---------: |
| D0, object to S1 (mm)      |         ∞ |          405.430516 |  69.902940 |
| D1, S13→S14 (mm)           |  5.334159 |            4.640341 |   2.107898 |
| D2, S17→ST18 (mm)          |  2.254901 |            2.948719 |   5.481162 |
| D3, S26→plate (mm)         | 36.200000 |           36.200000 |  36.200000 |
| Literal D4, plate→IMG (mm) |  0.495503 |            0.514995 |   0.572628 |
| Signed D5 after IMG (mm)   | +0.004497 |           −0.014995 |  −0.072628 |
| Printed MAG                |         — |           +0.033333 |  +0.157378 |
| Printed Fno                |     2.851 |               2.853 |      2.938 |
| Printed HFOV (degrees)     |    57.871 |              57.495 |     55.966 |

The positive printed MAG entries are retained as magnitudes; the middle heading retains its signed wording. Computed Gaussian magnifications are −0.033324139 and −0.157329939. The patent provides no continuous mechanical law. Piecewise-linear interpolation between the three model keyframes is illustrative, and only the two original finite configurations carry source-certified first-surface object distances.

The plate faces remain at z = 127.097060 and 129.597060 mm from S1. Literal IMG lies at z = 130.092563, 130.112055 and 130.169688 mm. The signed sum D4+D5 is always 0.500000 mm, placing a fixed arithmetic reference at z = 130.097060 mm. That arithmetic identity does not establish that the reference is the same physical sensor plane as literal IMG.

Under the explicit lens-specific owner/maintainer exception, the model uses this fixed reference 0.500000 mm behind the plate. It retains all source D4/D5 values in the record, does not shift the plate, and does not propagate negative physical air. This is a disclosed modeling choice, not a two-kind source correction.

| State    | Gaussian defocus relative to modeled plane (mm) |
| -------- | ----------------------------------------------: |
| Infinity |                                       −0.019253 |
| Middle   |                                       +0.003864 |
| Near     |                                       +0.075973 |

The near D0 plus the fixed-reference track is exactly 200.000000 mm. The middle object-to-reference distance is 535.527576 mm, giving normalized focusT = 0.3734634946231042 for closeFocusM = 0.20. These references are not substituted for the raw first-surface D0 values.

### Inferred iris and finite F-number limitation

The source does not publish a physical iris diameter or an iris schedule. Infinity f/2.851 calibrates an entrance radius of 2.488737662 mm; exact tracing gives an inferred fixed physical stop radius of 7.188930 mm. Reproducing that target is calibration, not independent aperture evidence.

The native finite Fno values 2.853 and 2.938 are preserved, but their convention is not independently established. Full-stop ray angles give image-space 1/(2 sin u) values 2.861232, 2.860883 and 2.860311. Finite incoming-radius f/(2h at S1) gives different values again. These diagnostics are not substituted for the patent's Fno row, and all-state F-number reproduction is not claimed. No changing diaphragm schedule has been invented.

## Aspherical Surfaces and Equation Convention

The controlling publication's Equation 6 area is blank in both A and B originals, although paragraph 0096 defines K, c and A..F. The explicit approved interpretation uses sibling KR101933088B1, page 11 Equation 5: a standard conic base with K plus A·Y⁴+B·Y⁶+C·Y⁸+D·Y¹⁰+E·Y¹²+F·Y¹⁴, with c = 1/R.

That sibling has the same applicant and filing day but is a different application. Its equation supplies the authorized power mapping only; no radius, index, coefficient or focus state is borrowed. Coefficient units are mm^(1−p) for the Y^p term. No uniform rescaling is applied.

| Coefficient |            S7 |            S8 |           S22 |           S23 |
| ----------- | ------------: | ------------: | ------------: | ------------: |
| K           |     -1.814675 |     -0.991237 |     -0.944323 |     -0.379701 |
| A           |  4.382060E-05 |  8.027756E-05 |  1.218699E-05 |  6.765680E-06 |
| B           | -6.238794E-07 | -6.824901E-07 | -2.957337E-07 | -5.681990E-07 |
| C           |  2.964679E-09 | -2.553086E-09 |  1.226961E-09 |  1.289974E-08 |
| D           | -7.736225E-12 |  4.533099E-11 | -1.755245E-10 | -5.635791E-10 |
| E           |  1.016927E-14 | -2.113286E-13 |  4.105461E-12 |  9.294879E-12 |
| F           | -4.412777E-18 |  3.515643E-16 | -4.297231E-14 | -6.527433E-14 |

L4's two aspheres combine a negative meniscus with a large departure from a simple spherical form. At the source S7 radius 15.06 mm, sag is 3.768721 mm and actual rim angle is 16.681254°. Its same-radius spherical departure is −1.449772 mm. At the source S8 radius 12.31 mm, sag is 7.179803 mm and rim angle is 43.410119°. A same-radius sphere is undefined at that S8 height because 12.31 mm exceeds |R| = 10.342 mm; the aspheric conic domain remains valid.

L13 provides a second pair of aspheric degrees of freedom behind the stop. The positive fourth-order terms do not by themselves determine the net rim departure because the higher orders and conic terms also contribute. Manufacturing process and exact production correction contributions are not inferred from coefficient signs alone. S22/S23 clear radii are modeled, not published.

## Source Conditions and Unresolved Statements

| Condition                   | Source bounds | Recalculated ratio | Disposition                                |
| --------------------------- | ------------- | -----------------: | ------------------------------------------ |
| Rfront/f                    | 3–6.5         |           5.860635 | Satisfied                                  |
| Σt/y                        | 0.15–0.4      |           0.342857 | Satisfied                                  |
| f1st/f                      | 15–30         |          24.555404 | Satisfied; printed component power differs |
| fAF/fG3                     | 0.3–1.2       |           0.857417 | Satisfied; printed group powers differ     |
| D/y using Table10 D = 12.08 | 0.65–0.75     |           0.556682 | Not satisfied                              |

Table10 prints f1st = 345.936 mm, fAF = 99.513 mm and fG3 = 118.196 mm. The unchanged numerical table computes 348.460392, 98.643520 and 115.047351 mm. These differences exceed the effects of source rounding. The source-defined G1 also computes positive despite the negative-power prose.

All remain unresolved sourceErrata. No favorable H-Ape value is substituted for Table10 D, no group boundary is reassigned, and no prescription number is repaired. Owner approval of the image-reference choice is not source-internal evidence for correcting these statements.

## Verification and Model Limits

The actual TypeScript values are loaded by a strict literal parser and independently checked with a real TypeScript AST. Scalar and matrix first-order computations, exact vector Snell tracing, source mapping and intentional wrong-sign/gap-collapse tests are reproducible from the dossier.

Geometry checks use 34 focus samples and 1001 radial points per shared band; an independent reviewer also checked derivative-root extrema. Default gapSagFrac = 0.90 is retained. The tightest S6–S7 band uses 89.5143% of its vertex gap and retains 0.454869 mm clearance. Maximum actual rim angle is 62.9964°. All modeled glass intervals remain positive, with a minimum shared-band thickness of 0.700000 mm.

All source S7/S8 apertures are preserved. The remaining rims are inferred, with asymmetric front meniscus faces where the slope/clearance rules require them. Actual production-path diagnostics give zero hidden render trim at the tested states. The section was rendered and visually checked against the distinctive patent/manufacturer topology; this is not a browser/UI test.

The portable and actual project 3D tracers agree on 7710 sampled rays across five focus positions and six field fractions. Every sampled chief ray clears to the native state field; all sampled bundles through 75% of that half-field clear. At the extreme field, 12/257 rays clip at infinity, 8/257 at the native middle state and none at near, at the inferred S6/S9 boundaries. These counts describe the chosen pupil sampling, not measured illumination or a radiometric transmission percentage. Complete field-bundle containment and continuum coverage are not claimed.

The native infinity half-field is 57.871°. The runtime diagram's tracing-half-field safety value is approximately 46.476655°, a separate bundle-display limit; it is not evidence of reduced source coverage. The source-field audit used the full native fields through the actual projection-aware chief-ray and exact trace interfaces.

The project checks actually run were buildLens, validateLensData, focused real LensDataInput type checking, Prettier formatting, runtime dispersion-quality inspection and production render diagnostics against main b7deb22166991aacdbdcae249f67f4932cb28b6b. Full-corpus tests, full build/prerender, browser UI and deployment were not run. Status remains INTEGRATION_PENDING after per-lens audit readiness.

## Sources

1. [KR101918210B1 original PDF](https://patentimages.storage.googleapis.com/8a/41/db/f97098b731c3df/KR101918210B1.pdf): pp. 10–12 group descriptions and conventions; pp. 16–17 Tables 7–10; p. 24 Figure 7.
2. [KR101918210B1 readable record](https://patents.google.com/patent/KR101918210B1/en): application, inventors, applicant and publication identity.
3. [KR20180119886A original](https://patentimages.storage.googleapis.com/54/c0/bf/af948366520f1c/KR20180119886A.pdf): selected A/B numerical-table comparison and the same missing equation.
4. [KR101933088B1 original](https://patentimages.storage.googleapis.com/81/b2/2b/a7be48631e191e/KR101933088B1.pdf): p. 11 Equation 5, used only under the explicit missing-equation interpretation.
5. [Samyang AF 14mm F2.8 EF official technical information](https://www.lksamyang.com/en/product/product-view.php?seq=147) and [official optical section](https://www.samyanglensglobal.com/upload/editor/1554972046): product identity, EF mount and positional correlation. The technical table's 0.20 m differs from generic 0.35 m feature text elsewhere on the page; no inferred focus law comes from that text.
6. [HOYA optical-glass downloads](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [OHARA catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [SCHOTT optical-glass data](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351), [HIKARI optical glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/nikon-hikari20220701.zip), [SUMITA data](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf) and [CDGM catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf): exact retrieved editions, hashes, row excerpts and coordinate residuals are retained in the evidence dossier.
