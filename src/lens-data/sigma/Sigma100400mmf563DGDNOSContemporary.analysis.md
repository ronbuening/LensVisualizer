# SIGMA 100–400mm f/5–6.3 DG DN OS Contemporary — Patent-Derived Design

## Patent Reference and Design Identification

**Patent:** [JP 2021-92636 A](https://patents.google.com/patent/JP2021092636A/ja)  
**Application Number:** JP 2019-222569  
**Filed:** 2019-12-10  
**Published:** 2021-06-17  
**Inventor:** Hiromichi Ochiai (落合 裕道)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** 防振機能を備えた変倍結像光学系 — Variable-magnification imaging optical system with vibration reduction  
**Example details:** 数値実施例１, ¶¶0056–0067, numerical data on publication pages 12–13; Figure 1 on page 30. Dimensions are used at the native millimetre scale, without rescaling.

This **patent-derived design** is associated with the DG DN OS Contemporary generation, but neither the cited patent nor the manufacturer page explicitly confirms that the commercial product uses this exact numerical table. The following observations support correlation:

1. The [manufacturer product page](https://www.sigmaphoto.com/100-400mm-f5-6-3-dg-dn-os-c) identifies the C020 DG DN OS lens, with 22 elements in 16 groups. The numerical example has exactly 22 glass elements and six cemented doublets, therefore 16 air-separated optical components.
2. Its native range is 103.00–387.40 mm at f/5.15–6.50 and image semi-height 21.63 mm, close to the full-frame 100–400 mm f/5–6.3 commercial specification. The differences are retained, not normalized away.
3. The manufacturer construction diagram and Figure 1 share the front doublet plus positive singlet, eight-group architecture, single positive focus element, and rear negative meniscus. They are consistent in sequence and broad relative size, not metrological proof of identical radii.
4. The patent describes G3 lateral stabilization and G6 single-element inner focusing. The product uses optical stabilization and a stepping focus motor.
5. The 2019 filing predates the product’s 2020 edition. A paraxial reconstruction at the manufacturer’s 1.60 m telephoto MFD gives 0.2412×, close to the listed 1:4.1 (0.2439×); this is a consistency check, not source-published focus data.

This mirrorless DG DN generation differs from the earlier DG OS HSM lens. The model lists **L-Mount, Sony E and Fujifilm X**, which Sigma sells with the same optics. The patent table itself is not mount-specific. Sigma’s [original 2020 announcement](https://press.sigmaphoto.com/product/06/new-product-announcement-sigma-100-400mm-f5-6-3-dg-dn-os-contemporary/) and [official compatibility table](https://www.sigma-global.com/en/support/download/SIGMA-TELE-CONVERTER-TC1411_TC2011_EN_240823.pdf.pdf) confirm TC-1411/TC-2011 support for the L-Mount C020 product. Teleconverter configurations are not supported by this model.

## Optical Architecture

There are eight moving/fixed power groups in the sequence **+ − − + + + − −**. “16 groups” in the product specification counts air-separated components, whereas G1–G8 here denote the zoom/focus subassemblies.

| Group | Elements | Source surfaces | Published focal length (mm) | Function                                               |
| ----- | -------- | --------------- | --------------------------: | ------------------------------------------------------ |
| G1    | L1–L3    | 1–5             |                     +197.57 | Front positive assembly; extends objectward on zooming |
| G2    | L4–L6    | 6–10            |                     −433.83 | Fixed front correction group                           |
| G3    | L7–L9    | 11–15           |                      −40.20 | Negative zoom group and lateral OS assembly            |
| G4    | L10–L12  | 16–20           |                      +79.54 | First positive intermediate group                      |
| G5    | L13–L17  | 21–29           |                     +193.71 | Second intermediate group; carries adjacent stop       |
| G6    | L18      | 31–32           |                      +74.24 | Single-element positive focusing group                 |
| G7    | L19–L21  | 33–37           |                      −98.68 | Moving rear negative group                             |
| G8    | L22      | 38–39           |                     −122.70 | Fixed rear negative meniscus                           |

The iris is source surface 30, represented as `STO`. Its radius is derived from each native design f-number, not inferred from the drawing. There is no source camera-cover plate in this example. The full 33.1482 mm final air space is retained.

## Element-by-Element Analysis

The focal lengths below are calculated in-air thick-element values using each element’s two source radii, thickness and index. They are **not** powers of an element embedded within its cemented group. Glass names denote catalog equivalents; production suppliers are unspecified. The model retains the published d-line index and Abbe number.

### L1 — Negative Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3D (HOYA equivalent). f = -200.055 mm.

Front negative meniscus in the G1 achromatic doublet. Its lower Abbe number provides the dispersion contrast against L2; the patent does not identify its commercial glass.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA equivalent). f = +183.903 mm.

Positive member of the front cemented pair. The high Abbe number reduces the primary longitudinal color associated with the positive front group.

### L3 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA equivalent). f = +215.357 mm.

Separate very-low-dispersion positive lens completing G1. Its 95.10 Abbe number is consistent with a fluor-crown class, but this does not independently establish a particular FLD material.

### L4 — Positive Meniscus

nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA equivalent). f = +121.456 mm.

Positive meniscus in the net-negative fixed G2. The opposed powers of its neighbors allow a relatively weak group power while changing the pupil and aberration balance.

### L5 — Biconvex Positive

nd = 1.56732, νd = 42.84. Glass: E-FL6 (HOYA equivalent). f = +169.662 mm.

Positive member of the G2 cemented pair, followed directly by L6 at the shared surface 9.

### L6 — Biconcave Negative

nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA equivalent). f = -55.520 mm.

High-index negative member of the G2 cemented pair. G2 is fixed relative to the image plane during the native zoom schedule.

### L7 — Negative Meniscus

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA equivalent). f = -80.527 mm.

Negative meniscus at the front of G3. Together with L8–L9 it forms the source’s laterally translating stabilization group; only its centered state is modeled.

### L8 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA equivalent). f = -38.689 mm.

Negative member of the G3 cemented doublet. Its higher Abbe number contrasts with the positive high-dispersion L9.

### L9 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA equivalent). f = +73.664 mm.

Positive member of the G3 cemented doublet. The group remains negative overall, with a published group focal length of −40.20 mm.

### L10 — Biconvex Positive

nd = 1.69680, νd = 55.46. Glass: LAC14 (HOYA equivalent). f = +98.615 mm.

Positive singlet at the front of G4. G4 is the first positive intermediate group, and moves objectward from wide to tele.

### L11 — Biconvex Positive

nd = 1.58144, νd = 40.89. Glass: E-FL5 (HOYA equivalent). f = +49.658 mm.

Positive member of the G4 cemented pair. The patent’s relatively low Abbe number is retained rather than replaced by a generic crown value.

### L12 — Negative Meniscus

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA equivalent). f = -54.665 mm.

High-index negative meniscus at the rear of G4. The shared 19 interface and all published thicknesses are preserved.

### L13 — Positive Meniscus

nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA equivalent). f = +69.208 mm.

Positive meniscus at the front of G5, the second positive intermediate group.

### L14 — Negative Meniscus

nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA equivalent). f = -45.688 mm.

Negative front member of the G5 cemented pair. The following positive L15 has a substantially larger Abbe number.

### L15 — Positive Meniscus

nd = 1.59410, νd = 60.47. Glass: FCD600 (HOYA equivalent). f = +64.821 mm.

Positive member of the G5 doublet. Its higher Abbe number supplies dispersion contrast within this local correction pair.

### L16 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA equivalent). f = -72.313 mm.

High-index negative meniscus behind the G5 doublet. Figure 1 draws it and L17 at about 12.0 mm, with its rear face meeting L17's flat front at the rim; the model keeps both faces at 11.4 mm, just inside the point where that 2.17 mm air gap closes.

### L17 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA equivalent). f = +98.248 mm.

Positive singlet immediately before the source aperture stop. The stop is surface 30, separate from this glass, and moves with G5 during zooming.

### L18 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA equivalent). f = +74.243 mm.

The sole focusing element, a positive singlet in G6. It moves toward the object for closer focus; no other group is given independent focus travel.

### L19 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA equivalent). f = -49.986 mm.

Negative meniscus at the front of G7. G7 is the first negative rear group and moves objectward in the native zoom schedule.

### L20 — Biconcave Negative

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA equivalent). f = -42.509 mm.

Low-dispersion negative member of the G7 cemented pair, contrasted with the high-dispersion positive L21.

### L21 — Biconvex Positive

nd = 1.78880, νd = 28.43. Glass: S-NBH58 (OHARA equivalent). f = +32.503 mm.

Positive member of the G7 cemented doublet. The net G7 power remains negative (published focal length −98.68 mm).

### L22 — Negative Meniscus

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA equivalent). f = -122.701 mm.

Negative meniscus forming G8. G8 remains fixed relative to the image plane; the source back focus is 33.1482 mm at all three native stations.

## Glass Identification and Selection

The patent supplies nd at 587.56 nm and νd (¶0048), but no glass maker/product names or explicit spectral line indices. The named catalog equivalents provide modeled dispersion, not production-glass identification. Multi-wavelength predictions must not be mistaken for measured production chromatic behavior.

| Element |      nd |    νd | Catalog equivalent | Sigma diagram |
| ------- | ------: | ----: | ------------------ | ------------- |
| L1      | 1.80420 | 46.50 | TAF3D (HOYA)       |               |
| L2      | 1.49700 | 81.61 | FCD1 (HOYA)        | SLD           |
| L3      | 1.43700 | 95.10 | FCD100 (HOYA)      | FLD           |
| L4      | 1.72047 | 34.71 | S-NBH8 (OHARA)     |               |
| L5      | 1.56732 | 42.84 | E-FL6 (HOYA)       |               |
| L6      | 1.91082 | 35.25 | TAFD35 (HOYA)      |               |
| L7      | 1.77250 | 49.62 | TAF1 (HOYA)        |               |
| L8      | 1.72916 | 54.67 | TAC8 (HOYA)        |               |
| L9      | 1.84666 | 23.78 | FDS90 (HOYA)       |               |
| L10     | 1.69680 | 55.46 | LAC14 (HOYA)       |               |
| L11     | 1.58144 | 40.89 | E-FL5 (HOYA)       |               |
| L12     | 2.05090 | 26.94 | TAFD65 (HOYA)      |               |
| L13     | 1.69895 | 30.05 | E-FD15 (HOYA)      |               |
| L14     | 1.90043 | 37.37 | TAFD37A (HOYA)     |               |
| L15     | 1.59410 | 60.47 | FCD600 (HOYA)      | SLD           |
| L16     | 2.00100 | 29.13 | TAFD55 (HOYA)      |               |
| L17     | 1.59282 | 68.63 | FCD515 (HOYA)      | SLD           |
| L18     | 1.59349 | 67.00 | PCD51 (HOYA)       |               |
| L19     | 2.00100 | 29.13 | TAFD55 (HOYA)      |               |
| L20     | 1.55032 | 75.50 | FCD705 (HOYA)      | SLD           |
| L21     | 1.78880 | 28.43 | S-NBH58 (OHARA)    |               |
| L22     | 2.05090 | 26.94 | TAFD65 (HOYA)      |               |

Every printed nd/νd pair equals a catalog glass to the printed precision (|Δνd| ≤ 0.01). Sigma's [construction diagram](https://www.sigma-global.com/lenses/c020_100_400_5_63_specification_01.png) marks one FLD element and four SLD elements, and Example 1 places matching glasses at exactly those positions: L3 at the fluorophosphate coordinate of FCD100 (FLD), and L2, L15, L17 and L20 at the coordinates of FCD1, FCD600, FCD515 and FCD705 (SLD). L15's FCD600 coordinate has a modest Abbe number (60.47) but marked anomalous partial dispersion (catalog θgF about 0.555, roughly 0.013 above the normal line), which is why it counts as an SLD position. L18 (PCD51 coordinate) is a low-dispersion crown that Sigma does not mark. The catalog names are coordinate equivalents; the production melts are not published.

## Focus Mechanism

Paragraph 0057 specifies objectward translation of **G6 alone**, the single positive L18. The source publishes infinity zoom rows only: there is no numeric near-focus spacing, finite object distance, or magnification table for this example.

The model uses one reconstructed rigid-translation endpoint at each station, based on reduced-angle ABCD optics with the source image plane fixed. D30 decreases and D32 increases by exactly the same displacement. The endpoint distances are the manufacturer’s 1.12 m wide and 1.60 m tele MFD; 1.36 m at the middle station is an explicit interpolation assumption. These are not manufacturing cam measurements or published focus positions or finite MTF conjugates.

| Native zoom (mm) | Endpoint object-to-image distance (m) | Objectward G6 travel (mm) | Reconstructed magnitude |
| ---------------- | ------------------------------------: | ------------------------: | ----------------------: |
| 103.00           |                                  1.12 |                 2.9048769 |               0.104830× |
| 200.08           |                                  1.36 |                 7.0750665 |               0.156955× |
| 387.40           |                                  1.60 |                18.4158462 |               0.241215× |

Intermediate focus positions linearly interpolate the reconstructed travel; the corresponding physical conjugates are not established. The model uses the manufacturer’s 9-blade iris without a numerical roundedness parameter.

## Zoom Mechanism and Native Positions

The model retains all three printed infinity configurations and their native radii, thicknesses, indices, Abbe numbers, variable gaps and back focus.

| Quantity                 |    Wide |  Middle |    Tele |
| ------------------------ | ------: | ------: | ------: |
| Source focal length (mm) |  103.00 |  200.08 |  387.40 |
| Source f-number          |    5.15 |    5.90 |    6.50 |
| Full angle (degrees)     |   23.31 |   11.93 |    6.15 |
| Image semi-height (mm)   |   21.63 |   21.63 |   21.63 |
| Source total length (mm) |  212.15 |  255.54 |  289.15 |
| D5                       |  3.3680 | 46.7644 | 80.3695 |
| D10                      |  5.5000 | 10.4000 | 10.4400 |
| D15                      | 27.0319 | 15.3115 |  3.5000 |
| D20                      | 18.4761 |  8.1967 |  2.1579 |
| D30                      |  9.4339 | 17.9858 | 35.4047 |
| D32                      | 18.4981 | 14.9456 |  3.5000 |
| D37                      | 16.1889 | 28.2895 | 40.1247 |
| BF                       | 33.1482 | 33.1482 | 33.1482 |

The source says G2 and G8 stay fixed relative to the image plane during zooming. The table respects this to its rounding. Straight interpolation between the three native rows produces up to 12.56 mm of infinity defocus. The model uses 65 stations: the three native rows remain exact and published, while 62 intermediate rows are inferred. At those inferred nodes, only G1 position (D5) and a rigid G4 shift (opposite D15/D20 changes) interpolate nominal focal length at the fixed source image plane; all other gaps interpolate their native values. G2 and G8 remain fixed relative to the image plane. The reconstructed piecewise-linear cam has sampled infinity paraxial defocus up to 0.01482 mm. This is not a measured production law. Near endpoints are reconstructed for each inferred station and are not source-published.

## Stabilization and Surface Form

G3 translates perpendicular to the optical axis for vibration reduction (¶0061). The model represents the centered configuration; lateral OS actuation is not simulated. Every numbered refracting surface in this example is spherical. A general design possibility of a diffractive focus surface in ¶0046 does not establish that this example contains one; the model has no aspheric or diffractive terms.

## Semi-Diameters and Modeling Limits

No effective-diameter column is printed. Clear semi-diameters are estimates based on Figure 1 and constrained by the exact geometry, the stated axial beam, and the source 21.63 mm field. Figure 1 shows the wide state and is drawn to the same scale on both axes, about 151 µm per 600-dpi pixel. Every vertex falls within 1.5 pixels of the prescription, and the curvature of L3 and L22 matches the printed radii at their drawn heights. Read at the drawn line centres, the element rims agree with the model to within about 2.5%. The exceptions are L16 and L17, modelled at 0.95 of their drawn 12.0 mm, and the curved faces described below.

Two concave rear faces end before their element's outer edge, with a flat land drawn out to the edge. On L6 (surface 10) the curve ends at about 12.2–13.5 mm against a 15 mm element. On L15 (surface 25) it ends at about 10.6–11.5 mm against 13.2 mm. Both keep `sd` at the drawn edge and carry inferred rim cuts (`rimCutDepthMm`). The patent states no depth, so each cut radius must clear the wide-open beams by 0.05 mm at every field, zoom and focus. Surface 25's cut sits at 11.42 mm, inside the drawn range. Surface 10's cut moves out to 13.95 mm, because the beams reach 13.88 mm there at 200 mm and 4.4°. The axial beam at the f-number reaches 12.73 mm at surface 10 and 10.99 mm at surface 25.

At facing surface pairs 12/13, 27/28 and 34/35, the drawing extends the faces until they meet or cross, at about 12.2, 12.0 and 11.5 mm. The model's optical radii there are 11.5, 11.4 and 11.0 mm, under the 90% gap-sag limit. Raising the 27/28 pair to the figure's 12.0 mm would need that limit at 0.98, because the gap closes at 12.15 mm. L16 and L17 keep one height on both faces, as the figure draws them square. L19's front face follows the figure at 12.0 mm, but its rear face cannot, since it would cross L20's front. These are inferred optical extents, distinct from mounting-blank envelopes. Figure estimates are not exact production apertures.

Reference-wavelength MTF is simulated, not manufacturer MTF; finite-focus MTF remains unavailable because no source-published conjugates are supplied.

## Sampled MTF and Intermediate-Cam Limits

The simulated geometric and diffraction MTF uses the reference d-line and the model’s fixed image plane, through 50 lp/mm, with native stations also stopped to nominal f/8. These values are not measured product performance or an all-state guarantee.

At 30 lp/mm and the full source image semi-height of 21.63 mm, the wide-open diffraction tangential values are 0.74915 / 0.63048 / 0.61510 at the three native source zoom rows. At inferred zoom 0.25 (nominal f/5.525), the value is only **0.09122**. That intermediate loss is a limitation of the inferred cam, not a claimed defect in the commercial lens. The three source rows do not uniquely determine a production cam.

The source prints 21.63 mm at every native station, so image-height interpolation is constant. Nominal f/8 settings scale the physical stop and trace approximately f/7.97794, f/7.99397 and f/7.99466 at native anchors; those small pupil-nonlinearity differences are retained.

C/d/F and photopic predictions depend on catalog dispersion equivalents; the patent does not establish production partial dispersion. Finite-focus MTF remains unavailable without source-published conjugates.

## Sources

- [Original JP2021092636A PDF](https://patentimages.storage.googleapis.com/85/12/54/dee7f38fd43cdf/JP2021092636A.pdf), publication pages 1, 10–13 and 30; Numerical Example 1.
- [Japanese patent text](https://patents.google.com/patent/JP2021092636A/ja), Numerical Example 1 and design description.
- [Sigma manufacturer product specification and construction](https://www.sigmaphoto.com/100-400mm-f5-6-3-dg-dn-os-c), exact DG DN OS Contemporary/C020 generation; accessed 2026-10-25.
