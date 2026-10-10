## Patent Reference and Design Identification

**Patent:** CN 112285890 B  
**Application Number:** 202011235405.5  
**Filed:** 2020-11-05  
**Application Published:** 2021-01-29 (CN 112285890 A)  
**Granted:** 2024-10-22  
**Inventor:** Dayong Li (李大勇)  
**Assignee:** Anhui Changgeng Optics Technology Co., Ltd. (安徽长庚光学科技有限公司)  
**Title:** 一种超大光圈镜头及具有其的数码相机、摄像机 (An ultra-large-aperture lens and digital/still-video cameras incorporating it; translated title)  
**Embodiment analyzed:** Example 2 (Figure 3); the printed infinity and 2500 mm gap states.

Example 2 is associated with the LAOWA ARGUS 45mm f/0.95 FF through the manufacturer's published optical section and the matching construction. This is a construction-based association, not manufacturer confirmation of an identical production prescription.

1. The patent example and the product section both have 13 elements in 9 air-separated groups.
2. The product section shows the same order as the patent: a negative front element (the patent's fixed G1), a positive auxiliary group (G2), the stop and a positive main group (G3). The final meniscus has two aspherical faces, matching the single aspherical element the manufacturer lists.
3. The patent states f = 44.89 mm, F/0.98 and a 25.6° half-field; the product is marketed as 45 mm f/0.95 for full frame. The model keeps the patent F-number and every printed radius, thickness, index and aspheric coefficient. The stop radius is derived from the F-number; the patent prints no iris diameter.
4. The patent's near state is an object distance of 2500 mm, not the 0.5 m production minimum focus. The patent does not state the reference point; the model's conjugate lies 2497 mm in front of the first surface, consistent with a distance measured from that surface.

The manufacturer's material lists 13 elements in 9 groups, one ED element, one aspherical element, full-frame coverage and 15 aperture blades. Its feature text mentions four high-index elements, while the specification table and manual say three. The manufacturer's construction diagram marks L8 as the ED element, L13 as aspherical, and L3, L10 and L11 as ultra-high-refraction glass. The patent example gives nd = 1.497, νd = 81.61 to both L1 and L8, although only L8 is marked ED, and seven of its elements have nd above 1.83. The data file tags only L8 as special-dispersion glass and assigns no glass name on the strength of the marketing counts. Figure 3 leaves the fixed front brace unnumbered and labels the auxiliary moving group G1 and the main moving group G2, while the text names the three groups G1, G2 and G3. The text naming is used here; it is the one that reproduces the patent's conditional-expression values.

The model's semi-diameters and stop radius are inferred rather than published, and the printed table does not reproduce the patent's own spherical-aberration plot; both points are covered under Model Scope and Limitations.

## Optical Architecture

The design has a fixed negative front group and two positive focusing groups, with the stop between the two moving groups. G3 is the main focusing group; G2 moves independently as an auxiliary correction group. The patent describes G2's purpose as reducing the changes in field curvature and spherical aberration during focusing. That is the patent's stated design intent, not a measured property of the transcribed model.

| Group | Patent surfaces | Calculated focal length | Role |
|---|---|---:|---|
| G1 | 1–2 | -220.143686 mm | Fixed front negative |
| G2 | 3–9 | +181.242991 mm | Auxiliary positive focusing |
| G3 | 11–23 | +35.402606 mm | Main positive focusing |

The 13 elements form two cemented doublets, one cemented triplet and six singlets. D3 denotes the triplet L8/L9/L10. The aperture stop lies between G2 and G3 and keeps a fixed axial separation from the front of G3. No cover plate is specified or added. Row 24 of the patent table is the image plane, not a refracting surface.

| Cemented group | Patent surfaces | Calculated focal length |
|---|---|---:|
| D1 | 7–9 | -38.773946 mm |
| D2 | 11–13 | +345.934182 mm |
| D3 | 14–17 | +54.262702 mm |

These focal lengths include the cemented interfaces. The single-element focal lengths below are evaluated in air and cannot simply be added across a cemented group.

## Element-by-Element Analysis

Indices are given at the patent's printed precision. A named glass is the catalog glass whose nd/νd equals the patent pair; it identifies a compatible glass, not the supplier. Glasses with no close catalog match are marked Unmatched and use the Abbe-number dispersion model.

### L1 — Negative Meniscus

nd = 1.497, νd = 81.61. Glass: H-FK61 (CDGM) coordinate equivalent; supplier unconfirmed. f = -220.14 mm.

L1 alone forms the fixed negative group G1. Its nd/νd pair, 1.497/81.61, is that of an ED fluorophosphate crown and reappears at L8. The manufacturer's diagram marks only L8 as ED, so L1 carries no special-dispersion tag in the data file; the patent example may differ from the production glass at this position.

### L2 — Positive Meniscus

nd = 1.88421, νd = 37.00. Glass: Unmatched (no close catalog nd/νd match). f = +168.97 mm.

L2 is a positive meniscus at the front of auxiliary G2. Its high index and relatively weak positive power precede the more strongly positive L3. The complete G2 has weak net positive power after the following negative cemented pair is included.

### L3 — Positive Meniscus

nd = 1.883, νd = 40.80. Glass: TAFD30 (HOYA) coordinate equivalent; supplier unconfirmed. f = +54.74 mm.

L3 supplies positive power before D1. Its rear surface 6 and the front of L4 converge across the 0.990 mm air gap and would meet at a height of about 23.8 mm, just outside the f/0.98 axial beam; the model limits surface 7 to a 23.2 mm semi-diameter there (see Edge Clearance Between L3 and L4). Only inferred rims are affected, not the printed curvature, glass or spacing.

### L4 — Positive Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA) coordinate equivalent; supplier unconfirmed. f = +195.14 mm.

L4 is the positive, strongly dispersive first member of D1. Its very weak concave front curvature is retained as printed; its rear curvature supplies most of its standalone power. It is cemented to negative L5 at surface 8.

### L5 — Biconcave Negative

nd = 1.6966, νd = 28.87. Glass: Unmatched (no close catalog nd/νd match). f = -31.94 mm.

L5 supplies strong negative power and makes D1 net negative. It is the final member of G2, with the variable gap D(9) behind it. Its relatively modest Abbe contrast with L4 should not be described as proof of a conventional achromat.

### L6 — Biconcave Negative

nd = 1.64465, νd = 33.02. Glass: Unmatched (no close catalog nd/νd match). f = -34.87 mm.

L6 begins rear G3 after the stop as the negative front member of D2. The lower-dispersion positive L7 compensates much of its power. Their near cancellation leaves a weakly positive complete pair.

### L7 — Biconvex Positive

nd = 1.83098, νd = 46.00. Glass: Unmatched (no close catalog nd/νd match). f = +35.32 mm.

L7 is the biconvex positive member of D2. Its high index and larger Abbe number than L6 support first-order chromatic balancing. Its nd/νd pair does not correspond to a catalog glass.

### L8 — Biconvex Positive

nd = 1.497, νd = 81.61. Glass: H-FK61 (CDGM) coordinate equivalent, supplier unconfirmed — ED class (inferred). f = +46.59 mm.

L8 is the positive, high-Abbe front member of the cemented triplet D3. The manufacturer's diagram marks this element as the lens's single ED element, and its nd/νd pair matches an ED fluorophosphate crown; the data file tags it as inferred special-dispersion glass on that basis. L1 has the same nd/νd pair but is not marked by the manufacturer. The patent publishes no partial-dispersion data.

### L9 — Biconcave Negative

nd = 1.62004, νd = 36.30. Glass: E-F2 (HOYA) coordinate equivalent; supplier unconfirmed. f = -54.07 mm.

L9 is the negative middle element of D3. It is cemented to L8 and L10, with no inserted air or stop. Its higher dispersion than L8 provides a first-order balancing variable within the triplet.

### L10 — Positive Meniscus

nd = 1.883, νd = 40.80. Glass: TAFD30 (HOYA) coordinate equivalent; supplier unconfirmed. f = +67.78 mm.

L10 is the positive meniscus at the rear of D3 and shares the 1.883/40.80 pair with L3, L11 and L13. The complete triplet is positive; assigning exact coma or spherical-aberration contributions would require a separate perturbation analysis.

### L11 — Biconvex Positive

nd = 1.883, νd = 40.80. Glass: TAFD30 (HOYA) coordinate equivalent; supplier unconfirmed. f = +49.99 mm.

L11 is a separate positive element behind the triplet. It contributes positive rear-group power with a nearly flat rear face. The printed finite curvature remains distinct from a plane.

### L12 — Biconcave Negative

nd = 1.64079, νd = 33.41. Glass: Unmatched (no close catalog nd/νd match). f = -61.22 mm.

L12 is a separate negative element immediately ahead of the final aspheric meniscus. Its negative power offsets the preceding positive contribution and contributes negative Petzval terms, without by itself proving a flat field.

### L13 — Negative Meniscus (2x Asph)

nd = 1.883, νd = 40.80. Glass: TAFD30 (HOYA) coordinate equivalent; supplier unconfirmed. f = -328.54 mm.

L13 is the final weakly negative meniscus; both of its faces, surfaces 22 and 23, are aspherical. Its paraxial power is small relative to G3 as a whole, while its profile departs substantially from a sphere of the same radius. The patent does not say whether the element is molded, hybrid or polished.

## Glass Identification

Each distinct nd/νd pair was compared with HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalog values. A close nd/νd match supports a compatible glass class; it does not establish the supplier, glass name, melt, anomalous partial dispersion or full spectral equivalence.

L2, L5, L6, L7 and L12 have no close catalog match and are labelled Unmatched. The other eight elements are labelled with a catalog glass whose nd and νd equal the patent pair: H-FK61 (CDGM) for 1.497/81.61, TAFD30 (HOYA) for 1.883/40.80, E-FDS1 (HOYA) for 1.92286/20.88 and E-F2 (HOYA) for 1.62004/36.30. Other vendors list glasses at the same coordinates (FCD1 and S-FPL51; S-LAH58 and H-ZLaF68C; N-SF66; S-TIM2), so the names stand for the coordinate class and the supplier is unconfirmed.

| nd | νd | Elements | Catalog comparison | Dispersion model |
|---:|---:|---|---|---|
| 1.497 | 81.61 | L1, L8 | H-FK61 (CDGM), coordinate equivalent | Catalog dispersion formula |
| 1.88421 | 37.00 | L2 | Unmatched | Abbe number |
| 1.883 | 40.80 | L3, L10, L11, L13 | TAFD30 (HOYA), coordinate equivalent | Catalog dispersion formula |
| 1.92286 | 20.88 | L4 | E-FDS1 (HOYA), coordinate equivalent | Catalog dispersion formula |
| 1.6966 | 28.87 | L5 | Unmatched | Abbe number |
| 1.64465 | 33.02 | L6 | Unmatched | Abbe number |
| 1.83098 | 46.00 | L7 | Unmatched | Abbe number |
| 1.62004 | 36.30 | L9 | E-F2 (HOYA), coordinate equivalent | Catalog dispersion formula |
| 1.64079 | 33.41 | L12 | Unmatched | Abbe number |

The eight named elements trace on the dispersion curves of those catalog glasses; the five Unmatched elements use the Abbe-number model, and the patent prints no nC, nF or ng values. L8 is tagged as inferred ED glass from its nd/νd pair and the manufacturer's diagram, but no partial-dispersion value is assigned to it. Because five elements, including the two strongest negative ones, rely on the Abbe model, the powers and Abbe differences support first-order chromatic reasoning only; secondary-spectrum behaviour is only partly modeled.

## Focus Mechanism

Focusing is internal with two floating groups. G1 remains fixed. From infinity to the 2500 mm state, G2 moves 2.2512 mm toward the object and G3, with the stop, moves 0.9109 mm toward the object. These travels follow directly from the printed gap changes.

| Gap after surface | Infinity | 2500 mm state |
|---|---:|---:|
| 2 | 11.6660 mm | 9.4148 mm |
| 9 | 8.9660 mm | 10.3063 mm |
| 23 | 12.8692 mm | 13.7801 mm |

The distance from the first vertex to the image plane is 122.4362 mm in both states. Only these two gap sets are published; intermediate positions are linear interpolations, not a published cam law. The computed EFL changes from 44.890439 mm to 45.307214 mm.

The paraxial conjugate of the 2500 mm state lies 2496.961022 mm in front of the first vertex, or 2619.397222 mm object-to-image, at a magnification of -0.018044984. That agrees with a 2500 mm distance measured from the first surface, although the patent does not state its reference. The data file's close-focus distance is this object-to-image value (2.62 m). The marketed 0.5 m minimum focus is not tabulated in the patent and is not modeled.

The stop radius, 18.026436837 mm, is derived by tracing the real axial ray at the entrance radius EFL/(2×0.98) to the stop at infinity focus; it is then held fixed. It is a consequence of the stated F-number, not a published aperture dimension.

## Aspherical Surfaces

The patent uses the conic-plus-even-polynomial sag equation:

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.$$

K is the standard conic constant (K = 0 is a sphere) and is used as printed. R is in millimetres and the coefficient A_p has units mm^(1-p). Patent surfaces 22 and 23 are labelled 22A and 23A in the data file. The patent prints terms up to A12; no higher-order terms are used.

| Coefficient | Surface 22A | Surface 23A |
|---|---:|---:|
| K | -95.0 | 0.0 |
| A4 | -5.44460E-05 | -2.26938E-05 |
| A6 | 1.29944E-07 | 4.66871E-08 |
| A8 | -2.15045E-10 | 5.31197E-10 |
| A10 | 3.43403E-13 | -2.34658E-12 |
| A12 | -2.08375E-15 | 2.67922E-15 |

The two faces together remove most of the system's undercorrected spherical aberration: with both replaced by their base spheres, the model's marginal longitudinal aberration at f/0.98 grows from about -0.16 mm to about -2.2 mm. The full conic-plus-polynomial profile sets this correction; the sign of A4 alone does not.

| Surface | Inferred semi-diameter | Sag at rim | Departure from same-R sphere |
|---|---:|---:|---:|
| 22A | 15.70 mm | -3.104500 mm | -2.054849 mm |
| 23A | 17.90 mm | -1.023513 mm | -0.220878 mm |

The departure includes the conic contribution and all polynomial terms; positive values are toward the image. These are values at the inferred model rims, not published clear apertures. The patent does not state how the asphere is made.

## Conditional Expressions

D1 and D2 in expression (1) are the full separations between the groups at infinity: D1 is the gap after surface 2, and D2 is the gap after surface 9 plus the fixed stop-to-G3 spacing (8.966 mm + 9.285 mm).

| Expression | Calculated | Patent value |
|---|---:|---:|
| 0.5 ≤ (D1+D2)/F ≤ 2.0 | 0.666445 | 0.666 |
| 0.5 ≤ abs(F3/F) ≤ 1.5 | 0.788645 | 0.789 |
| 0.6 ≤ abs(F1/F2) ≤ 1.6 | 1.214633 | 1.215 |
| 2 ≤ abs(F1/F) ≤ 6 | 4.904022 | 4.904 |

Every condition is satisfied, and each calculated value rounds to the figure the patent prints.

## Edge Clearance Between L3 and L4

Surfaces 6 and 7 converge across their 0.990 mm axial gap and would touch at a height of about 23.8 mm. The f/0.98 axial beam reaches 23.16 mm at surface 7, so the model sets that surface's inferred semi-diameter to 23.2 mm. This leaves about 0.040 mm of radial margin over the marginal ray and 0.047 mm of axial air between the two surfaces at the rim.

To admit this rim, the data file lets the two surfaces' sags take up to 96% of the air gap instead of the usual 90%. The f/0.98 beam alone needs about 94.9%, and no other air gap in the model exceeds 90%.

These clearances are axial separations at equal height between centered nominal surfaces, not minimum three-dimensional distances. The margin lies next to illuminated heights, so a bevel there cannot be assumed harmless. The patent figures give no edge coordinates, seats, spacers or tolerances. The positive nominal clearance shows only that the modeled surfaces do not overlap; it does not show that the stack can be built as drawn. The printed values are kept unchanged rather than adjusted to widen the margin.

## Model Scope and Limitations

The model's infinity EFL is 44.890439 mm against the printed 44.89 mm, and its paraxial back focus from the last vertex is 12.868272 mm against the printed image gap of 12.8692 mm. The patent half-field is 25.6° (51.2° full angle), and its aberration plots extend to an image height of 21.60 mm. A real chief ray at 25.5° reaches the 21.63 mm full-frame corner clear of every modeled rim, but the viewer's paraxial field estimate is 23.6°, limited by the inferred 15.7 mm semi-diameter of surface 22A. That rim cannot be enlarged, because beyond about 16.3 mm the extrapolated aspheric profile runs into the rear of L12.

The printed table does not reproduce the patent's own Figure 4 spherical-aberration plot. At the f/0.98 stop, the model's marginal ray crosses the axis -0.159515 mm from the image plane at infinity and -0.172024 mm at the 2500 mm state, and the infinity zonal values (-0.078 mm at 0.7 of the pupil, -0.039 mm at 0.5) follow an almost purely third-order curve. The plot's horizontal axis spans −0.1 to +0.1 with no quantity or unit stated; read as millimetres of longitudinal aberration, its d-line curve stays within about 0.02 of zero. The design is very sensitive at this aperture: a 1% change in the radius of surface 5 alone removes most of the difference. A small discrepancy between the printed table and the design behind the plot would therefore be enough to explain it. No printed value was altered to fit the plot.

Because every semi-diameter is inferred, the model's off-axis vignetting is an estimate rather than a property stated by the patent. Element edges are drawn as straight joins between the inferred rims; Figure 3 shows outlines and some shoulders, but not the manufactured edge geometry, bevels or housing.

The model does not represent the production lens's glass, tolerances, coatings or stray light, and it does not cover focus distances nearer than the patent's 2500 mm state.

## Sources

- [CN 112285890 B](https://patents.google.com/patent/CN112285890B/en): front page, Example 2 prescription, aspheric-coefficient and focus tables, Figure 3 optical section and Figure 4 aberration plots.
- [Laowa Argus 45mm f/0.95 FF product page](https://www.laowalens.com/camera-lens-48): manufacturer's construction and specifications.
- [Laowa optical construction diagram](https://www.laowalens.com/Public/Uploads/uploadfile/images/20211227/3-947.png): positions of the ED, aspherical and ultra-high-refraction elements.
- [Laowa Argus 45mm f/0.95 FF manual](https://www.laowalens.com/Ftp/FFII%20Argus%2045mm%20F0.95.pdf): manufacturer's specifications.
- [Published interview with Dayong Li](https://phillipreeve.net/blog/the-man-behind-the-lens-mr-li-laowa-15mm-2-0-zero-d-fe/): romanized inventor name; the patent names him as 李大勇.
- [Manufacturer's legal-entity footer](https://www.laowalens.com/camera-lens-48): English name of 安徽长庚光学科技有限公司.
- [HOYA catalog](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [OHARA catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [SCHOTT catalog](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351), [HIKARI catalog](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/nikon-hikari20220701.zip), [SUMITA catalog](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf), and [CDGM catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf): catalog nd/νd values used for the glass comparison.
