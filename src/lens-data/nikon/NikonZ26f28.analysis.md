# NIKKOR Z 26mm f/2.8 — Patent Model

## Patent Reference and Design Identification

**Patent:** WO 2023/190222 A1

**Inventors:** Ayumu Makida and Taeko Toshi

**Assignee:** Nikon Corporation

**Filed:** 2023-03-24

**Priority:** JP 2022-053866, 2022-03-29

**Published:** 2023-10-05

**Embodiment analyzed:** Example 1, Table 1 and Figure 1

The diagram uses the compact wide-angle example associated with the NIKKOR Z26. Its source prescription is 26.78 mm f/2.90, distinct from the 26mm f/2.8 product name. The correspondence does not establish identical production prescriptions, material suppliers or manufacturing processes.

Original PDF pp. 33–34 describe the architecture, composite lens and unit focus; Table 1 is on pp. 35–36 and Figure 1 on p. 63. The title page establishes the inventors and publication details.

## Optical Architecture

The patent divides the system into four optical sections: positive G1, positive G2, negative G3 and positive G4. Their focal lengths are +123.54, +20.55, −20.18 and +31.47 mm. The source stop lies between G1 and G2.

The catalog group count means air-separated components, as defined by the lens-data specification. There are six: L1, the L2/L3 pair, the L4/L5 pair, L6, L7 and L8. The former count of four conflated optical sections with these components. Eight physical lens elements are modeled using nine media because the final composite L8 contains a resin layer bonded to a glass body.

Paragraph 199 explicitly identifies L8 as a single composite aspherical lens and assigns surface 14 to the resin front, 15 to the resin/glass interface and 16 to the glass rear. The 0.1 mm resin layer is a refracting part of the lens, not sensor cover glass or a filter. Its chemistry and supplier are unspecified; UV curing is not established by this paragraph.

Optical rims are inferred from Figure 1 at 600 dpi using the 27.39 mm first-to-last-surface span. Front L1 has approximately 5.5 mm radius, the first cemented pair 5 mm, L6 about 7.3 mm, L7 up to 9.7 mm, the resin about 12.2 mm and the rear glass about 14 mm. Mechanical edge extensions are excluded. Surface 9 retains 6.2 mm rather than a 6.3 mm trial that exceeded the 9→10 clearance allowance. These estimates are constrained by geometry and image-circle checks, not published clear-aperture dimensions.

## Element-by-Element Analysis

The values below are isolated thick-element focal lengths in air, computed from the source radii, central thicknesses and indices. For L8a/L8b, these are mathematical isolated-medium values, not separate manufactured lenses; assembled L8 has the source G4 power.

| Element | Form | nd | νd | Isolated focal length (mm) |
|---|---|---:|---:|---:|
| L1 | Pos. Meniscus (1× Asph) | 1.58913 | 61.1 | +123.5 |
| L2 | Biconcave Negative | 1.59270 | 35.3 | -14.7 |
| L3 | Biconvex Positive | 1.88300 | 40.7 | +10.6 |
| L4 | Biconvex Positive | 1.81600 | 46.6 | +9.7 |
| L5 | Biconcave Negative | 1.62004 | 36.4 | -11.7 |
| L6 | Pos. Meniscus (2× Asph) | 1.58313 | 59.5 | +333.9 |
| L7 | Negative Meniscus | 1.75520 | 27.6 | -20.2 |
| L8a | Asph. Resin Layer (1× Asph) | 1.56093 | 36.6 | -353.8 |
| L8b | Positive Meniscus | 1.88300 | 40.7 | +29.3 |

G1 is a weak positive meniscus. G2 combines two positive cemented pairs with a weak positive double-aspherical meniscus. G3 supplies negative power close to the rear section, and composite G4 supplies strong positive power. Functional aberration descriptions are interpretations of this arrangement rather than isolated element measurements.

## Glass Identification and Selection

Source nd and νd are preserved for all nine media. Catalog names are inferred counterparts: S-BAL35 for L1, S-FTM16 for L2, S-LAH58 for L3/L8b, J-LASF09A for L4, N-F2 for L5, M-BACD12 for L6 and SF4 for L7. They do not establish production suppliers, resin identity or precision-molding processes. The rounded patent Abbe values remain authoritative.

L8a remains a resin layer at nd=1.56093 and νd=36.6 with no asserted catalog chemistry. No patent-listed anomalous partial dispersion is supplied for these elements.

## Aspherical Surfaces

Equation (a), paragraph 206, uses the source coefficient K in the term 1−K·y²/r². The implementation's standard conic constant is therefore source K minus one. Surfaces 1, 11 and 14 use standard K=0; surface 10 uses K=−0.7036.

All published polynomial terms are retained. Surface 10 includes A16=−9.66×10⁻¹⁴ and A18=+1.31×10⁻¹⁵, previously omitted despite their increasing contribution near the optical rim. The other coefficients agree with Table 1 and were retained. This conversion changes the actual surface shapes, not just their labels.

## Focusing Mechanism

Paragraph 201 specifies translation of the entire optical system toward the object when focusing closer. Table 1 gives BFD 10.760 mm at infinity and 15.873 mm at the near station. Every lens and the stop therefore moves objectward by 5.113 mm relative to the fixed image plane. The four section annotations share this same movement; they are not independent focus groups.

An independent paraxial calculation reproduces f=26.77994 mm and infers a near object-to-image distance of 0.199991 m from the source BFD. The control displays 20 cm. Intermediate gap interpolation and inverse-distance labels remain estimates between the published endpoints.

## Aperture and Image Formation

The nominal aperture and first shortcut use source f/2.90. Table 1 gives half-field 40.30°, image height 21.05 mm and infinity track 38.15 mm. These are patent values; the full-frame mount/format classification describes the associated product. Image height need not equal a rectilinear focal-length/tangent estimate in a distorted wide-angle design.

The source explicitly defines BFD as an air-equivalent distance in paragraph 208. No cover-glass or filter surfaces are included in Table 1 or added to this model. The prescribed rear distances are used directly. Near total track increases to 43.263 mm with unit focusing.

## Model Limitations

The numerical prescription, four aspheres, composite construction and unit-focus endpoints are source-based. Rims, catalog identities, finite object distance and intermediate focus states are inferred or reconstructed. Production processes and resin chemistry are unspecified. The composite is counted as one physical lens while its two refractive media are modeled separately.
