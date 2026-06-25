# Rodenstock Grandagon-N 75mm f/4.5

## Patent Reference and Design Identification

**Patent:** DE 2444954 A1 (Offenlegungsschrift)
**Filed:** 20 September 1974
**Published:** 1 April 1976
**Inventors:** Franz Schlegel; Josef Weiß
**Applicant:** Optische Werke G. Rodenstock, München
**Title:** Achtlinsiges Weitwinkelobjektiv
**Classification:** G 02 B 13/06
**Embodiment analyzed:** Claim 3 / Example 3, f′ = 75 mm, 1:4.5

DE 2444954 A1 discloses an eight-element wide-angle objective for a field angle of at least 90° and an aperture ratio of at least 1:5. The stated design goal is a better-corrected f/4.5 wide-angle lens with compact optical assembly length and with all refractive indices below 1.7. The prescription tables use e-line refractive index and Abbe number (`n_e`, `ν_e`), which is also the convention stated explicitly in the patent text.

Example 3 is the embodiment used here. It matches the production Rodenstock Grandagon-N 75mm f/4.5 on the following points:

1. The patent example is f′ = 75 mm and 1:4.5.
2. The prescription has eight elements in four air-spaced groups, matching Rodenstock's published Grandagon-N f/4.5 construction for the 65, 75, and 90 mm lenses.
3. Rodenstock's published 75 mm f/4.5 specification gives a 195 mm image circle at the recommended working aperture and a 105° image angle; the patent trace gives 104.98° for a 195 mm image circle.
4. The production lens is listed for 9×12 cm / 4×5 in. coverage, consistent with the 195 mm image-circle specification.
5. The applicant is Optische Werke G. Rodenstock, the production maker.

A minor patent-text inconsistency does not affect the selected embodiment: the descriptive prose states that Claims 2 through 4 cover f = 90, f = 75, and f = 60, while the actual Claim 4 prescription table is f′ = 65. The numerical prescription tables are internally consistent, and Claim 3 is unambiguous for the 75 mm design.

The page-8 prescription was re-read directly from the rasterized patent image. Surface `r4` in Example 3 is `17,22`. The neighboring `20,83` value belongs to the f′ = 90 example, not to the 75 mm example. With `r4 = 17.22`, the e-line paraxial EFL is 74.846 mm; with the erroneous `r4 = 20.83`, the EFL falls to 71.725 mm.

## Optical Architecture

The lens is a near-symmetric Biogon-type wide-angle design: negative field lens, positive cemented triplet, aperture stop, positive cemented triplet, negative field lens. In power form it is:

`(−)  (+)  [stop]  (+)  (−)`

The four air-spaced groups are:

| Group | Elements | Function | d-line focal length |
|---|---:|---|---:|
| G1 | L1 | Front negative field meniscus | −56.2 mm |
| G2 | L2–L4 | Front positive cemented triplet | +50.9 mm |
| Stop | — | Aperture between the two triplets | — |
| G3 | L5–L7 | Rear positive cemented triplet | +42.1 mm |
| G4 | L8 | Rear negative field meniscus | −50.3 mm |

The patent lists the central air space between surfaces `r6` and `r7` as `l2 = 1.75 + 0.50 = 2.25 mm`, placing the aperture stop 1.75 mm behind the rear surface of the front triplet and 0.50 mm in front of the rear triplet. The patent does not list a separate stop surface, so the data file inserts a flat `STO` surface at that split while preserving the total patented air space.

The two cemented triplets satisfy the index-gradient rule stated in Claim 1: within each triplet, refractive index increases from the stop outward. In the front triplet this sequence is L4 → L3 → L2 (`n_e = 1.5629 → 1.6251 → 1.6776`); in the rear triplet it is L5 → L6 → L7 (`n_e = 1.5855 → 1.6113 → 1.6700`). That gradient is one of the patent's defining structural constraints rather than a later interpretation.

The front-vertex to rear-vertex optical assembly length is 76.0 mm, or 1.02× the e-line EFL. That is the construction length relevant to the patent's compactness claim. The front-vertex to image-plane distance is 127.8 mm after adding computed back focal distance; that larger number is the total optical track to the film plane and should not be confused with the patent's compact assembly-length claim.

The design is only moderately asymmetric. That departure from perfect symmetry is necessary because the lens is optimized for distant objects rather than for unit magnification. The symmetry still suppresses odd-order aberrations, while the unequal glass selection and unequal triplet powers give the designer latitude to correct residual field curvature, astigmatism, and lateral color at the 105° coverage angle.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

`nd = 1.46450, νd = 65.77. Glass: FK3 (Schott inquiry glass). f = −56.2 mm.`

L1 is the front negative field lens. Both surfaces have positive radii, so the element is convex toward the object and more steeply curved on the image side. Its low index and high Abbe number make it a fluor-crown field element rather than a high-index bending element. It bends oblique bundles inward toward the central stop while keeping chromatic contribution low.

The rear surface, `r2 = 18.97 mm`, carries most of the element's negative power. This steep surface is also the limiting surface for the clear-aperture estimate used in the data file, so the modeled semi-diameter is intentionally conservative.

### L2 + L3 + L4 — Front Cemented Triplet

`L2: nd = 1.67270, νd = 32.21. Glass: SF5 (Schott legacy dense flint). f = −97.9 mm.`
`L3: nd = 1.62229, νd = 53.27. Glass: SSK2 / N-SSK2 class (Schott dense crown). f = +15.7 mm.`
`L4: nd ≈ 1.5600, νd ≈ 47.1. Glass: Unmatched short-flint / barium-crown boundary glass. f = −26.6 mm.`

The front triplet is the first strong positive group. It is cemented, so the two steep internal surfaces work as glass-to-glass refracting interfaces rather than as air-glass surfaces. This keeps the group compact and avoids placing highly curved air spaces close to the stop.

L3 is the power core of the group. Its biconvex form, `r4 = 17.22 mm` and `r5 = −16.73 mm`, gives the group most of its positive convergence. L2 and L4 provide negative flanking power and chromatic balancing. L2 is an ordinary dense flint. L4 is the only glass that does not resolve cleanly to a public catalog name; its patent values, `n_e = 1.5629` and `ν_e = 46.88`, place it near historical short-flint and barium-crown catalog positions but not on an exact public Schott, Ohara, Hoya, Hikari, CDGM, or Sumita match available for this review.

The resulting front-triplet focal length is +50.9 mm in the d-line data model. This positive group is deliberately weaker than the rear triplet in the same model, contributing to the residual asymmetry needed for infinity-conjugate correction.

### L5 + L6 + L7 — Rear Cemented Triplet

`L5: nd = 1.58313, νd = 59.3. Glass: SK12 (Schott legacy dense crown). f = −27.0 mm.`
`L6: nd = 1.60881, νd = 58.9. Glass: SK3 (Schott legacy dense crown). f = +13.2 mm.`
`L7: nd = 1.66672, νd = 48.4. Glass: BaF11 (Schott legacy barium flint). f = −49.3 mm.`

The rear triplet is the image-side positive group. It has a net d-line focal length of +42.1 mm and is the stronger of the two cemented triplets. L6 is the strongest individual element in the lens and provides most of the group convergence.

L5 is a thin negative meniscus ahead of L6. L6 is a steep biconvex dense-crown power element. L7 is a barium-flint negative meniscus that moderates the exit convergence and contributes chromatic correction. This crown-crown-flint order is not a mirror copy of the front triplet's flint-crown-flint order; the asymmetry is a design degree of freedom, not an extraction error.

### L8 — Negative Meniscus, Concave to Object

`nd = 1.48749, νd = 70.4. Glass: FK5 / N-FK5 class (Schott fluor-crown). f = −50.3 mm.`

L8 is the rear field lens. Both radii are negative, so the meniscus is concave toward the object. It is the image-side counterpart to L1, but it uses a still lower-dispersion fluor-crown glass. Its negative power helps flatten the Petzval field and controls the final ray bundle as it approaches the image plane.

The rear radius, `r12 = −96.12 mm`, is comparatively weak. This helps keep the exit geometry benign for a large-format image plane while the front surface of L8 supplies most of the element's negative field-lens action.

## Glass Identification and Selection

The patent publishes e-line optical constants. The data file stores d-line values, because the project prescription format defines `nd` as the 587.6 nm d-line index. For public catalog glasses, the d-line values were taken from manufacturer catalog data or manufacturer-type legacy catalog tables. L4 remains unresolved and is stored as an approximate d-line conversion rather than as a named catalog glass.

| Elem | Patent `n_e / ν_e` | Stored `nd / νd` | Glass assignment | Confidence |
|---|---:|---:|---|---|
| L1 | 1.4662 / 65.56 | 1.46450 / 65.77 | FK3, Schott | High |
| L2 | 1.6776 / 31.97 | 1.67270 / 32.21 | SF5, Schott | High |
| L3 | 1.6251 / 52.86 | 1.62229 / 53.27 | SSK2 / N-SSK2 class, Schott | High |
| L4 | 1.5629 / 46.88 | ≈1.5600 / ≈47.1 | Unmatched short-flint / barium-crown boundary | Low |
| L5 | 1.5855 / 59.19 | 1.58313 / 59.3 | SK12, Schott legacy | High |
| L6 | 1.6113 / 58.65 | 1.60881 / 58.9 | SK3, Schott legacy | High |
| L7 | 1.6700 / 48.13 | 1.66672 / 48.4 | BaF11, Schott legacy | High |
| L8 | 1.4891 / 70.22 | 1.48749 / 70.4 | FK5 / N-FK5 class, Schott | High |

The design uses five crowns and three flints by Abbe-number classification. FK3, SSK2, SK12, SK3, and FK5 are the crowns. SF5, L4, and BaF11 are the flint-side glasses. The outer field lenses use the lowest-index glasses in the design, which gives negative Petzval contribution without requiring high-index lanthanum glass. This is consistent with the patent's stated requirement that no element exceed refractive index 1.7.

The e-line surface-by-surface Petzval sum is:

`Σ φ/(n · n′) = +0.0001724 mm⁻¹`

With the sign convention used here, this corresponds to a Petzval radius of about −5800 mm and `Petzval × f = 0.0129`. The d-line data-file model gives `+0.0002003 mm⁻¹`, still a very small field-curvature term relative to the focal length. These values were computed surface by surface; element-level thin-lens sums were not used.

## Focus Mechanism

The patent gives only the infinity prescription and does not disclose an internal focusing mechanism. The production lens is a fixed optical assembly for view-camera use. In ordinary large-format use, focus is obtained by changing the lens-to-film distance with bellows extension. Rodenstock also listed a Focus-Mount helical accessory for shutter-size-0 lenses, with the Grandagon-N 75 mm f/4.5 covering infinity to 1.0 m.

The data file therefore models focus as unit extension only: all internal spacings remain fixed and the final back-focus distance changes.

| State | Modeled d-line BFD |
|---|---:|
| Infinity | 51.855 mm |
| 1.0 m object distance | 57.769 mm |

The close-focus value is a paraxial unit-focus model. It is not a patented floating-group spacing.

## Verification Summary

The prescription was re-derived from the patent table and traced independently with a reduced-angle paraxial ray trace. The e-line trace uses the patent's printed indices. The d-line trace is the data-file model after catalog conversion of known glasses and approximate conversion of L4.

| Quantity | E-line patent trace | d-line data model | Note |
|---|---:|---:|---|
| Effective focal length | 74.846 mm | 74.932 mm | Patent states f′ = 75 mm |
| Back focal distance | 51.785 mm | 51.855 mm | Computed from last vertex |
| Optical assembly length | 76.000 mm | 76.000 mm | Front vertex to rear vertex |
| Front vertex to image plane | 127.785 mm | 127.855 mm | Assembly length + BFD |
| Full field for 195 mm IC | 104.98° | 104.91° | Production specification is 105° |
| Petzval sum | +0.0001724 mm⁻¹ | +0.0002003 mm⁻¹ | Surface formula |
| Petzval × focal length | +0.0129 | +0.0150 | Dimensionless |

The `r4` extraction check is decisive. Using the printed `17.22` value gives a 74.846 mm e-line focal length. Substituting the `20.83` value from the f′ = 90 example gives 71.725 mm and fails the 75 mm patent example.

The d-line group focal lengths used in the element discussion are:

| Group | d-line focal length |
|---|---:|
| L1 | −56.2 mm |
| L2–L4 | +50.9 mm |
| L5–L7 | +42.1 mm |
| L8 | −50.3 mm |

The modeled stop semi-diameter is 8.72 mm. Tracing the axial marginal ray through the front half gives an entrance-pupil semi-diameter of 8.324 mm, so the d-line data model opens at f/4.501. This is consistent with the patent's 1:4.5 aperture.

## Design Heritage and Context

The Grandagon-N 75 mm f/4.5 is a mature large-format implementation of the symmetric wide-angle, Biogon-derived design family. The key architectural idea is not extreme retrofocus clearance but near-symmetric correction around a central stop. That is appropriate for a view-camera lens, where the film plane is accessible by bellows extension and the optical priority is wide rectilinear coverage with controlled distortion and field curvature.

Rodenstock's published Grandagon-N line separated the f/4.5 eight-element lenses from the slower f/6.8 six-element alternative. The 75 mm f/4.5 version occupies the middle focal length of the f/4.5 group, sharing the 105° image-angle specification with the 65 mm and 90 mm variants while covering 9×12 cm / 4×5 in. formats.

## Sources

- DE 2444954 A1, *Achtlinsiges Weitwinkelobjektiv*, Optische Werke G. Rodenstock, filed 20 September 1974, published 1 April 1976.
- Rodenstock Photo Optics / LINOS, *Lenses for Analog Professional Photography*, Grandagon-N data sheets and Focus-Mount table.
- SCHOTT, *Optical Glass* catalog, 2003 edition, optical-constant conventions and current/legacy Schott glass positions.
- SCHOTT, *Optical Glass Inquiry Glass Collection Datasheets*, 2019 edition, FK3 data sheet.
- Sumita legacy optical-glass tables for Schott-type FK5, SF5, SK12, SK3, and BaF11 line indices.
