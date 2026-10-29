## Patent Reference and Design Identification

**Patent:** [US 5,568,323 A](https://patents.google.com/patent/US5568323A/en)  
**Filed:** 25 November 1994  
**Granted:** 22 October 1996  
**Inventor:** Takayuki Sensui  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd. (printed “Asahi Kogaku Kogyo Kabushiki Kaisha”)  
**Title:** Zoom Lens  
**Example details:** Table 3 (third embodiment); certificate of correction dated 21 December 1999 (K of surface 3)

**Example 3 is a qualified production correlation, not a confirmed Pentax factory prescription.** The model uses Table 3's radii, thicknesses, indices and Abbe numbers unchanged and covers infinity focus only. The image plane at the middle and tele positions is derived as described below.

The [Ricoh/Pentax discontinued-product page](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index35_others.html) gives the FA★28–70mmF2.8AL 14 glass elements in 11 groups, a four-group zoom with nonlinear group movement (4群非線形移動ズーム) and a “large-aperture hybrid aspherical lens”. Pentax also lists anomalous low-dispersion and high-index low-dispersion glass and a 75–34.5° angle of view. The [MZ-S brochure](https://www.ricoh-imaging.co.jp/japan/products/catalog/pdf/mz-s.pdf), printed pages 18–19, confirms the 14/11 count and 0.43 m minimum focus distance. Example 3 matches the 14/11 count, the resin asphere on the rear of the front element, f/2.8 and a 75.6–34.6° field, but **exact numerical identity with the production lens is not established**. Product dimensions are 84.5 × 104 mm and mass 800 g. The maker's table lists a 67 mm filter but names hood PH-RBC77.

Example 5 is not used: its text describes a glass asphere without a resin layer, contrary to the maker's hybrid wording. Example 6 has the same hybrid construction, but its printed R22 = −22.946 mm gives a wide focal length of 24.10 mm instead of 29.00 mm (R22 = −26.946 mm would give 29.00 mm); no radius is repaired. Table 7's fourth-group magnification cannot confirm that alternative, because for a change of R22 alone it varies together with the focal length. Table 3 is the example that matches with the fewest assumptions; it is not proven to be the factory prescription.

### Back focus and figures

The patent defines fB as the back-focal distance, and Table 3 prints **39.87 mm at all three positions**. That is a printing error. The text (column 7) and claim 9 fix the third group together with the diaphragm during zooming, and every table in the patent repeats a near-constant fB. With G3 and the stop fixed, the stop-to-image distance stays 80.19 mm, which gives formula (8) Xs/fw = 2.76 as Table 7 prints. The back focus then follows from d20, anchored to the printed wide value:

`BF = 39.87 + d20(wide) − d20(zoom) = 55.45 − d20(zoom)`.

| Station | Printed f, mm | Computed EFL, mm | Printed BF, mm | Model BF, mm | Paraxial BFD minus model BF, mm |
| ------- | ------------: | ---------------: | -------------: | -----------: | ------------------------------: |
| Wide    |         29.00 |        29.000701 |          39.87 |        39.87 |                       +0.000129 |
| Middle  |         50.00 |        50.001890 |          39.87 |        47.54 |                       +0.004091 |
| Tele    |         68.00 |        67.995339 |          39.87 |        53.55 |                       −0.001305 |

The model's back focus corrects a printing error from the patent's own statements; it is not an official erratum. The small paraxial offsets remain unexplained and are not removed by refocusing. Against the printed constant fB, the middle and tele images would lie 7.674091 and 13.678695 mm behind the printed plane.

Table 3 contains 26 refracting surfaces in four groups, but the linked Figure 9 labels only r1–r20 in three groups, and Figure 10 shows W = 31.1° rather than the table's 37.8°. These figures belong to another design and are **not used for clear apertures or aberration comparison**; no other example's plots are substituted.

## Optical Architecture

The four groups have calculated powers **− / + / − / +**: G1 S1–S7 (f ≈ −45.842 mm), G2 S8–S15 (+38.819 mm), G3 S16–S20 (−55.842 mm), G4 S21–S26 (+61.535 mm). The detailed embodiment text agrees with the negative front group; the front-page abstract's positive-front wording is not used to override the table. In all, 14 glass elements form 11 groups; the 0.13 mm resin layer bonded to L1 is modeled as a separate medium and is not counted.

From wide to tele, G1 moves 21.64 mm toward the image (20.16 mm of it by 50 mm), G2 moves 20.04 mm and G4 13.68 mm toward the object, and G3 stays fixed with the stop. The space between G2 and G3 widens and the one between G3 and G4 closes, as claim 7 requires.

The stop sits between G2 and G3: Table 3's d15 ends at the stop, and a separate 1.68 mm space follows to S16. The iris radius is set at each zoom position from the patent's constant f/2.8 rather than given as a fixed diameter.

Across the zoom range the model uses 65 positions, including the three printed ones. d20 and the back focus change linearly; d7 and d15 are solved at each position so that the focal length and the small paraxial offset vary smoothly between the printed rows. Interpolating the three rows directly would leave intermediate positions up to 2.970 mm out of focus; with 65 positions the added error is at most 0.003941 mm, against a printed-row offset of at most 0.004091 mm. The interpolated path is not the factory cam.

## Element-by-Element Analysis

Focal lengths below are each element's own thick-lens value in air, **not its contribution inside a cemented group**. Glass names are catalog types with the same nd/νd; the production melts and suppliers are not known. Roles are interpreted from position and power; the patent does not assign aberrations to individual elements.

### L1 — Negative Meniscus

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (catalog equivalent; supplier unconfirmed). f = −55.719 mm.

Negative front member of G1; its image-side interface carries the bonded resin layer.

### Resin — Bonded Aspheric Resin Layer

nd = 1.52010, νd = 50.8. Glass: Unmatched (aspheric resin layer). f = −641.995 mm.

Thin bonded resin on L1, not an additional counted glass piece. Its rear face S3 is the single tabulated asphere.

### L2 — Biconcave Negative

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (catalog equivalent; supplier unconfirmed). f = −65.931 mm.

Second negative G1 member, ahead of the positive compensating L3.

### L3 — Positive Meniscus

nd = 1.84666, νd = 23.9. Glass: SFLDN3 (catalog equivalent; supplier unconfirmed). f = +72.690 mm.

Positive rear member of the net-negative first unit.

### L4 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (catalog equivalent; supplier unconfirmed). f = +48.453 mm.

Positive member of the first cemented pair in G2.

### L5 — Negative Meniscus

nd = 1.71736, νd = 29.5. Glass: S-TIH1 (catalog equivalent; supplier unconfirmed). f = −67.897 mm.

Negative member sharing the first G2 cemented interface.

### L6 — Negative Meniscus

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (catalog equivalent; supplier unconfirmed). f = −90.545 mm.

Negative front member of the second G2 cemented pair.

### L7 — Positive Meniscus

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (catalog equivalent; supplier unconfirmed). f = +53.714 mm.

Low-index, high-Abbe positive partner in the second G2 cemented pair; the patent gives no partial-dispersion data.

### L8 — Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (catalog equivalent; supplier unconfirmed). f = +69.383 mm.

Positive rear singlet completing the net-positive G2.

### L9 — Positive Meniscus

nd = 1.84666, νd = 23.9. Glass: SFLDN3 (catalog equivalent; supplier unconfirmed). f = +43.379 mm.

Positive member of the G3 cemented pair.

### L10 — Biconcave Negative

nd = 1.74400, νd = 44.8. Glass: S-LAM2 (catalog equivalent; supplier unconfirmed). f = −30.668 mm.

Negative partner in G3; the complete third unit is negative.

### L11 — Negative Meniscus

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (catalog equivalent; supplier unconfirmed). f = −119.273 mm.

Negative rear singlet of the fixed G3. Its front face sits only 3.00 mm behind L10, and that narrow air space limits its rim.

### L12 — Positive Meniscus

nd = 1.59240, νd = 68.3. Glass: K-GFK68 (catalog equivalent; supplier unconfirmed) — inferred anomalous dispersion. f = +58.411 mm.

High-Abbe positive member of G4. Its νd 68.3 fits the anomalous low-dispersion glass Pentax describes, so it is tagged as inferred; the patent gives no partial-dispersion data.

### L13 — Biconvex Positive

nd = 1.59240, νd = 68.3. Glass: K-GFK68 (catalog equivalent; supplier unconfirmed) — inferred anomalous dispersion. f = +62.429 mm.

Second positive G4 member, in the same νd 68.3 glass and likewise tagged as inferred anomalous dispersion.

### L14 — Negative Meniscus

nd = 1.75520, νd = 27.5. Glass: S-TIH4 (catalog equivalent; supplier unconfirmed). f = −51.718 mm.

Negative rear member of the net-positive G4, nearest the image plane.

## Glass Identification and Selection

| Medium / elements |      nd |   νd | Catalog equivalent             |
| ----------------- | ------: | ---: | ------------------------------ |
| L1, L4, L8        | 1.77250 | 49.6 | S-LAH66                        |
| Bonded resin      | 1.52010 | 50.8 | Unmatched                      |
| L2                | 1.72916 | 54.7 | S-LAL18                        |
| L3, L9            | 1.84666 | 23.9 | SFLDN3                         |
| L5                | 1.71736 | 29.5 | S-TIH1                         |
| L6                | 1.80518 | 25.4 | S-TIH6                         |
| L7                | 1.48749 | 70.2 | S-FSL5                         |
| L10               | 1.74400 | 44.8 | S-LAM2                         |
| L11               | 1.80610 | 40.9 | S-LAH53                        |
| L12, L13          | 1.59240 | 68.3 | K-GFK68 (inferred anomalous)   |
| L14               | 1.75520 | 27.5 | S-TIH4                         |

The patent supplies d-line nd and νd only, with no glass names or C/F/g indices. Each glass is matched to a catalog type with the same nd/νd, whose dispersion the model uses; suppliers and production melts are not known. The resin layer has no catalog match. L12 and L13 are tagged as inferred anomalous-dispersion elements, consistent with the anomalous low-dispersion glass Pentax describes; their partial dispersion, and that of L7 (νd 70.2), is not published, so the model's secondary spectrum follows the catalog equivalents.

## Focus Mechanism

**Infinity only.** The patent tabulates infinity focus only and gives no focusing data. Both focus positions in the model repeat the infinity spacings at every zoom setting, so finite-distance behavior is not represented. Pentax specifies a 0.43 m minimum focus distance.

## Aspherical Surfaces

S3 (model label 3A), the rear face of the 0.13 mm bonded resin layer, uses the source's standard conic equation:

`z = (h²/R)/(1+sqrt(1−(1+K)h²/R²)) + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰`.

| Parameter |                           Value |
| --------- | ------------------------------: |
| R         |                       28.008 mm |
| K         |         −1.0 (1999 certificate) |
| A4        |               +3.2045×10⁻⁶ mm⁻³ |
| A6        |              +3.4954×10⁻¹⁰ mm⁻⁵ |
| A8        |              +2.0117×10⁻¹² mm⁻⁷ |
| A10       |              +2.7659×10⁻¹⁶ mm⁻⁹ |

The certificate changes the printed K = −0.1000 to −0.1000E01 (−1.0) and nothing else in Table 3. The equation is the standard form, so K = −1.0 is a paraboloidal base. Per claim 1 and formula (2), the surface weakens the negative power of L1's rear face toward the edge (Table 7 gives formula (2) = −0.0167 for Example 3), which the patent uses to correct tele spherical aberration and wide-angle astigmatism and distortion. The resin layer keeps positive thickness out to the 24 mm shared rim.

## Clear Apertures and Model Limitations

The patent does not give semi-diameters, and the figure linked to Example 3 shows another design. The **rims are estimated from Example 5's Figure 17, used as a proxy**: it draws the same 14-element / 11-group layout, and Figure 21 (Example 6, the same hybrid construction as Example 3) agrees with it within about 1 %. The drawing was scaled by Example 3's own wide vertex positions, so it sets the proportions of the section, not Example 3's actual apertures. The maker's small construction diagram shows the same proportions but was compared only by eye. These rims are estimates, not Example 3 or production clear apertures.

Measured this way, every element agrees with the stored rims within about 6 %: S1 25.5 mm against 26 mm, L2 and L3 21.4–21.5 mm against 21.5 and 22 mm, the three G2 components 16.5–17.3 mm against 17.5 mm, and the rear groups 11.2–13.6 mm against 11.1–14 mm. The one clear difference is the rear of the front element: both figures end its concave curve at about 21.4 mm, inside a wide mounting flange, where the model keeps 24 mm. That rim stays because S2 and S3A set the app's wide-angle field limit; at 21.4 mm the limit would fall from 38.4° to 35.2°, below the patent's 37.8°. The resin keeps a positive edge at 24 mm, and L2 (21.5 mm) and L13 (12.8 mm) stay within the air-gap edge limit. No rim is trimmed for drawing and no gap-sag override is used.

The chief ray at the patent's half-field angles clears every rim. L11 is square at 11.3 mm, as both figures draw it, so that the f/2.8 axial beam the app sets at tele passes S20; at that height S19 comes within 0.28 mm of L10 across the narrow 3.00 mm S18–S19 air space, so the model allows 0.91 of that gap for rim sag instead of the default 0.90. A stricter check, a real ray launched at the full f/2.8 entrance radius (12.14 mm at tele), meets the stop at 12.88 mm rather than the app's 12.16 mm iris; that beam would still be slightly clipped at S11, S14, S16, S19 and S20, most at S20 (11.99 mm needed). Some full-aperture off-axis rays also meet S19's sphere outside its rim and are stopped there. These are kept as limitations rather than hidden by enlarging rims.

No comparison with the patent's aberration plots is possible, because the plots linked to Example 3 belong to another design.
