# Carl Zeiss Jena Biogon 3.5 cm f/2.8 — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2,084,309  
**Filed:** January 6, 1936 (US); German priority June 16, 1934  
**Granted:** June 22, 1937  
**Inventor:** Ludwig Bertele  
**Assignee:** Zeiss Ikon Aktiengesellschaft, Dresden, Germany  
**Title:** Photographic Lens System  
**Embodiment analyzed:** Single numerical example

US 2,084,309 gives one worked optical prescription for Ludwig Bertele's four-unit wide-angle photographic lens system. The patent drawing and claims describe the same four-unit arrangement transcribed here: a front positive unit, a cemented concavo-convex triplet, a cemented third unit with a convex-to-object cementing surface, and a rear concavo-convex meniscus separated from the third unit by the critical curved air space.

The prescription is normalized near a 100 mm effective focal length. Independent paraxial tracing gives $f = 100.239$ mm and a back focal length of 18.515 mm from the final glass surface. The companion data file scales all radii, thicknesses, air spaces, and inferred semi-diameters by $35 / 100.2390886 = 0.3491651858$, producing a 35.000 mm rendered focal length for the pre-war 3.5 cm class lens.

The last lines of the numerical table were checked against the page image rather than the OCR layer. The table reads R10 = −47.17 mm and d7 = 25.16 mm; the OCR text tends to drop the hundredths in this line.

The identification with the pre-war Zeiss Biogon 3.5 cm f/2.8 is based on convergent evidence rather than on an explicit product name in the patent:

1. The patent inventor, assignee, priority date, and optical form match the Bertele/Zeiss Ikon wide-angle design lineage.
2. The patent prescription contains seven glass elements in four air-spaced groups, matching the Biogon family architecture rather than a retrofocus wide-angle design.
3. Scaling the patent prescription to 35 mm gives a diagonal rectilinear field of 63.4° on a 24 × 36 mm frame, matching the documented 35 mm Biogon coverage.
4. The scaled back focal distance is only 6.465 mm from the rear glass vertex, explaining the deeply protruding rear element characteristic of the pre-war Contax rangefinder Biogon type.

The patent itself is the prescription authority. Secondary production references are used only for the lens-family identification and 35 mm format context.

## Optical Architecture

The design is a modified Sonnar-derived wide-angle system, not a retrofocus wide-angle. Its scaled back focal distance is 6.465 mm, so $\mathrm{BFD}/\mathrm{EFL} = 0.185$; this is the opposite of the long-back-focus condition required for retrofocus clearance.

The optical system consists of seven elements in four air-spaced groups:

| Group | Elements | Form | Standalone group focal length, patent scale | Scaled focal length | Role |
|---|---:|---|---:|---:|---|
| I | L1 | Positive meniscus | +114.876 mm | +40.111 mm | Front collector |
| II | L2–L4 | Cemented triplet | −178.194 mm | −62.219 mm | Front negative/chromatic correction group |
| III | L5–L6 | Cemented doublet | +74.014 mm | +25.843 mm | Main positive image-forming group |
| IV | L7 | Negative meniscus | −132.572 mm | −46.290 mm | Rear field/obliquity correction meniscus |

The front half of the lens, including Groups I and II and their intervening air space, remains net positive at +176.728 mm on the patent scale. The rear half, including Groups III and IV and the intervening air space, is also net positive at +143.532 mm. The whole lens reaches 35 mm focal length only through the close interaction of these two positive halves with the negative Group II and rear meniscus.

The patent's central architectural feature is the third air space between Group III and Group IV. It is bounded by R9 = −78.62 mm and R10 = −47.17 mm on the patent scale. Both surfaces are concave toward the object, and the second boundary is more strongly curved. Bertele describes this gap as a meniscus of collective properties convex toward the image. In first-order surface-power terms, the glass-air and air-glass powers across this gap sum to a mildly negative value because the low-index medium is air, but the patent's point is geometric and aberrational: this curved air interval changes the heights and angles of the strongly converging pencil before it enters the rear meniscus.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.6716$, $\nu_d = 47.2$. Glass: unmatched vintage Zeiss/Schott high-index medium-dispersion glass, code 672/472. Standalone $f = +114.876$ mm at patent scale (+40.111 mm scaled).

L1 is a thick positive meniscus with R1 = +53.46 mm and R2 = +157.23 mm on the patent scale. Its two positive radii give a convex-to-object meniscus form, while the stronger first surface supplies most of the positive power. At the scaled 35 mm size its center thickness is 4.501 mm.

The element works as the front collector for the wide-angle bundle. The relatively high index reduces the required surface curvature for this amount of front positive power. The exact 1930s Schott catalog designation was not assigned in this revision because no current public Schott catalog entry matches $n_d = 1.6716$, $\nu_d = 47.2$ within a conservative tolerance.

### L2 — Positive Meniscus, Front Element of Cemented Triplet

$n_d = 1.6716$, $\nu_d = 47.2$. Glass: same unmatched vintage Zeiss/Schott 672/472 glass as L1. Standalone $f = +98.278$ mm at patent scale (+34.315 mm scaled).

L2 begins the second group. It is a convexo-concave positive meniscus with R3 = +33.33 mm and R4 = +62.89 mm. The patent explicitly describes this slot as a convexo-concave lens in a cemented meniscus group.

Because L2 is cemented directly to L3, its standalone focal length is less important than its in-situ contribution to the triplet. Its positive power partially balances the strong negative power of L4, while the shared glass with L1 and L6 keeps the design palette narrow.

### L3 — Convexo-Plane Low-Dispersion Crown, Middle Element of Cemented Triplet

$n_d = 1.4645$, $\nu_d = 65.7$. Glass: FK3 (Schott). Standalone $f = +135.393$ mm at patent scale (+47.274 mm scaled).

L3 is the low-index, low-dispersion member in the front cemented triplet. The patent describes it as a convexo-plane lens made of lower refractive glass than the plano-concave negative lens behind it. The numerical prescription gives R4 = +62.89 mm on the front and R5 = $\infty$ on the rear.

Its main role is chromatic rather than power-dominant. FK3 provides $\nu_d = 65.7$ against the SF8-class L4 at $\nu_d = 31.0$, creating the strongest dispersion contrast in the design. SCHOTT's inquiry-glass data for FK3 gives $n_d = 1.46450$, $\nu_d = 65.77$, $n_C = 1.46232$, $n_F = 1.46939$, and $n_g = 1.47315$; these values are carried into the companion data file for higher-fidelity chromatic behavior.

### L4 — Plano-Concave Dense Flint, Rear Element of Cemented Triplet

$n_d = 1.6890$, $\nu_d = 31.0$. Glass: SF8 / N-SF8 equivalent (Schott). Standalone $f = -37.649$ mm at patent scale (−13.146 mm scaled).

L4 is the strongly negative rear element of Group II. It has a plane cemented front face at R5 = $\infty$ and a concave rear face R6 = +25.94 mm. The patent identifies this element as the plano-concave member facing the second air space.

This is the highest-dispersion element in the system. Its strong negative power and low Abbe number work against L3's low-dispersion FK3 crown at the cemented interface. Modern SCHOTT N-SF8 is not the historical lead flint itself, but its published $n_d = 1.68894$ and $\nu_d = 31.31$ are close enough to the patent constants to treat it as the practical catalog equivalent for chromatic modeling.

### L5 — Negative Meniscus, Front Element of Cemented Rear Doublet

$n_d = 1.4645$, $\nu_d = 65.7$. Glass: FK3 (Schott). Standalone $f = -97.714$ mm at patent scale (−34.118 mm scaled).

L5 begins the third group. Its R7 = +417.60 mm front surface is very weak, while R8 = +40.88 mm is much stronger; the resulting meniscus is net negative when considered alone. The patent states that the element facing the second air space is negative and has a lower refractive index than the positive lens to which it is cemented.

The FK3-to-672/472 cemented interface at R8 provides a second chromatic-correction lever, weaker than the L3/L4 pair but located farther back in the system. This helps trim residual axial and lateral color after the front triplet.

### L6 — Thick Biconvex Positive, Rear Element of Cemented Rear Doublet

$n_d = 1.6716$, $\nu_d = 47.2$. Glass: unmatched vintage Zeiss/Schott 672/472 glass. Standalone $f = +45.866$ mm at patent scale (+16.015 mm scaled).

L6 is the thick dominant positive element of the lens. Its front cemented surface R8 = +40.88 mm and rear surface R9 = −78.62 mm form a biconvex positive lens, and its patent-scale center thickness of 37.74 mm is the largest in the prescription. Scaled to 35 mm, this is a 13.177 mm-thick element.

Its strength must be read in context. As a standalone thick lens, it is the strongest positive individual element. As part of Group III, the L5/L6 cemented doublet has a focal length of +74.014 mm on the patent scale, because L5 tempers L6's positive power and supplies chromatic correction.

### L7 — Rear Negative Meniscus, Concave to Object

$n_d = 1.5333$, $\nu_d = 48.9$. Glass: unmatched vintage Zeiss/Schott medium-index glass, code 533/489. Standalone $f = -132.572$ mm at patent scale (−46.290 mm scaled).

L7 is the rear meniscus. Both surfaces have negative radii in the patent convention: R10 = −47.17 mm and R11 = −168.02 mm. The more strongly curved front surface and weaker rear surface make the element net negative.

The element is directly involved in the patent's principal correction mechanism. Its front surface forms the image-side wall of the curved third air space, while the element itself modifies the oblique, strongly converging beam just before the short back-focus image plane. The scaled center thickness is 8.785 mm, and the scaled back focal distance from R11 to the image plane is only 6.465 mm.

No current public Schott catalog match was assigned for $n_d = 1.5333$, $\nu_d = 48.9$. The data file therefore labels it as an unmatched vintage Zeiss/Schott glass rather than forcing a speculative modern catalog name.

## Glass Identification and Selection

| Glass slot | Patent $n_d$ | Patent $\nu_d$ | Data-file identification | Elements | Verification status |
|---|---:|---:|---|---|---|
| A | 1.6716 | 47.2 | Unmatched vintage Zeiss/Schott 672/472 | L1, L2, L6 | No current public catalog match assigned |
| B | 1.4645 | 65.7 | FK3 (Schott) | L3, L5 | Confirmed against SCHOTT inquiry-glass data |
| C | 1.6890 | 31.0 | SF8 / N-SF8 equivalent (Schott) | L4 | Modern SCHOTT N-SF8 matches within transcription tolerance |
| D | 1.5333 | 48.9 | Unmatched vintage Zeiss/Schott 533/489 | L7 | No current public catalog match assigned |

The design uses a restricted glass palette, appropriate for a 1930s cemented-group lens. Two FK3 elements are used as low-dispersion correction partners: L3 against the dense flint L4 in the front triplet, and L5 against the higher-index positive L6 in the rear doublet. L4 supplies the strongest dispersion correction because it combines high refractive index with low Abbe number.

The six-digit optical codes are retained for the unmatched glasses, with probable Zeiss/Schott origin noted but without forcing catalog names not verified against a manufacturer table.

## Focus Mechanism

The patent does not publish a focusing mechanism or close-focus prescription. The optical construction is treated as a unit-focus rangefinder lens: all groups retain fixed internal air spacings and the entire optical cell translates relative to the film plane.

The companion data file therefore exposes one variable spacing, the back focal distance after R11. Infinity focus uses the independently computed scaled BFL of 6.464821 mm. For a 1.0 m visualization close-focus setting, solving the thick-lens conjugate with the object distance measured from the image plane gives a BFL of 7.800429 mm, corresponding to 1.335608 mm of unit-focus extension.

This close-focus value is a rendering model, not a patent-published value. The patent authority covers the infinity prescription only.

## Aspherical Surfaces

The patent prescription contains no aspherical surfaces. R5 is explicitly plane and is represented as $R = \infty$; all other powered surfaces are spherical. The data file therefore uses `asph: {}`.

## The Collective Air Lens

The third air space is the design's named corrective feature. On the patent scale, the interval from R9 to R10 has an axial thickness of 6.29 mm and is bounded by two negative radii:

| Boundary | Radius | Medium transition | Surface power $\phi = (n' - n) / R$ |
|---|---:|---|---:|
| R9 | −78.62 mm | 1.6716 → air | +0.008542 mm$^{-1}$ |
| R10 | −47.17 mm | air → 1.5333 | −0.011306 mm$^{-1}$ |

The two surface powers sum to about −0.002764 mm$^{-1}$, so the air interval is not a positive thin lens in first-order power. The patent's term “collective” should be read in its stated meniscus-shape and aberration-correction context: the gap narrows toward the rim and is convex toward the image side in the patent's geometrical description. Bertele's claim is that placing the convex-to-object cemented surface in the third unit before this shaped air interval improves the correction of coma over rays of different inclinations.

## Verification Summary

All first-order quantities below were recomputed from the patent prescription using a reduced-angle ABCD paraxial ray trace. The production-scale column applies the uniform scale factor 0.3491651858.

| Quantity | Patent scale | Scaled 35 mm data file |
|---|---:|---:|
| Effective focal length | 100.239089 mm | 35.000000 mm |
| Back focal length from R11 | 18.515079 mm | 6.464821 mm |
| R1-to-R11 optical track | 105.670000 mm | 36.896285 mm |
| R1-to-image length | 124.185079 mm | 43.361106 mm |
| Rectilinear diagonal full field on 24 × 36 mm | — | 63.440° |
| Entrance pupil diameter at f/2.8 | 35.799 mm | 12.500 mm |
| Aperture-stop semi-diameter used in data file | 11.891948 mm | 4.152254 mm |
| Petzval sum, $\sum \phi/(n n')$ | +0.00257885 mm$^{-1}$ | +0.00738691 mm$^{-1}$ |

The aperture stop is not specified in the patent. For the renderer, it is inserted as a neutral flat surface in the second air space between R6 and R7, 4.53 mm after R6 on the patent scale and 3.02 mm before R7. This placement does not affect EFL or BFL; it only sets the physical stop diameter and ray-bundle layout. Semi-diameters are not patent-published and are estimated for rendering clearance, with explicit constraints on edge thickness, rim slope, and cross-gap sag intrusion.

## Sources

1. Ludwig Bertele, “Photographic Lens System,” US Patent 2,084,309, filed January 6, 1936, German priority June 16, 1934, granted June 22, 1937.
2. SCHOTT AG, “Optical Glass — Datasheets of Inquiry Glasses,” FK3 data sheet, $n_d = 1.46450$, $\nu_d = 65.77$, glass code 464658.227.
3. SCHOTT AG, “N-SF8 Optical Glass Data Sheet,” $n_d = 1.68894$, $\nu_d = 31.31$, glass code 689313.290.
4. Rudolf Kingslake, *A History of the Photographic Lens*, Academic Press, 1989, Sonnar/Biogon historical context.
5. Lens-db.com, “Carl Zeiss Jena Biogon 35mm F/2.8 [T] (1936),” production-family metadata and 63.4° diagonal field reference.
