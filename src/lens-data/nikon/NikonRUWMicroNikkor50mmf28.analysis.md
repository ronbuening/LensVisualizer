# NIKON R-UW AF MICRO-NIKKOR 50mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 5,257,137
**Application Number:** 855,665
**Filed:** March 23, 1992
**Granted:** October 26, 1993
**Priority:** April 1, 1991 (JP 3-092626)
**Inventors:** Fumio Suzuki; Yoshinari Hamanishi
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Photo-Taking Lens for an Underwater Camera
**Embodiment analyzed:** Example 1 / Claim 10

The transcribed prescription is Example 1 of US 5,257,137. The patent describes a water-contact photographic lens for an underwater camera, optimized for use from infinity to approximately one-to-one magnification under water. Example 1 is the representative embodiment used here because it aligns with the production Nikon R-UW AF Micro-Nikkor 50mm f/2.8 in the following ways.

1. Example 1 has 10 physical glass elements in 9 air-separated groups, including a single cemented doublet in the rear part of G2. The production R-UW AF Micro-Nikkor 50mm f/2.8 is also documented as a 10-element / 9-group lens.
2. The patent gives a rearward focal length of $f = 51.6000$ mm at infinity when the object field medium is water. This is consistent with a marketed 50 mm underwater macro lens.
3. The short-focal-length examples are described as approximately f/2.8 lenses, matching the production f/2.8 maximum aperture.
4. The variable-spacing table gives positions for $\beta = -0.5$ and $\beta = -1.0$, establishing a 1:1 macro design rather than a merely close-focusing underwater lens.
5. The front unit G1 is a transparent parallel flat plate, matching the optical requirement of a sealed water-contact front window.
6. The focus mechanism keeps G1 and G4 fixed while translating G2 and G3 together toward the object. This is the mechanical pattern expected for a sealed underwater macro lens because the front port need not rotate or extend.
7. The production underwater diagonal field is about 35°. Using a 35 mm frame diagonal half-height of 21.633 mm and the patent rearward focal length of 51.603 mm gives an image-side half-field of 22.745°. Refraction through the flat water/air interface maps this to an object-side underwater half-field of approximately 16.892°, or 33.78° full field, consistent with the rounded 35° specification.

Example 2 is also a 50 mm-class flat-port embodiment, so it cannot be excluded by element count and focal length alone. Example 1 is adopted because Claim 10 reproduces its numerical prescription directly and because it is the first fully worked 50 mm flat-port design in the patent.

## Optical Architecture

The lens is a four-unit water-contact macro design with the power sequence zero or very weak / weak / positive / negative. In front-to-rear order the units are G1, G2, G3, and G4.

G1 is the pressure-resistant front window. In Example 1 it is a 10.00 mm thick parallel flat plate and has no paraxial power. It is fixed relative to the image plane. The patent emphasizes that G1 must have no power or only weak power because a strong first unit would make the marginal-ray incidence height at the focusing unit vary excessively during the long macro focus stroke.

G2 is a weak-power correction unit and is itself split into G2F and G2R. G2F is a single negative meniscus L2F. Its role is to correct positive distortion and chromatic difference of magnification caused by the flat water-contact port when the object medium is water. G2R is a positive rearward unit consisting of L2R1 and the cemented doublet L2R2 + L2R3. The patent states that this positive rearward unit corrects the positive spherical aberration generated in the negative forward unit. As a complete unit, G2 is very weakly negative: the independent paraxial trace gives $f_2 \approx -419.1$ mm.

G3 is the principal positive power unit. It contains L31, L32, and L33. Its computed group focal length is $f_3 \approx 43.88$ mm, close to the total rearward focal length because G2 is nearly afocal and G4 is a weak negative rear group.

G4 is the fixed negative rear unit. It contains L41 and L42. The patent describes the fourth unit as securing sufficient positive magnification, reducing the required movement of the focusing unit, and suppressing aberration fluctuation during focusing. In paraxial terms it is a mild negative relay/field group with $f_4 \approx -214.2$ mm.

The aperture stop is not tabulated as a numbered surface in the patent data. The Fig. 1 drawing places the stop in the air space between the rear of G2 and the front of G3. The data file therefore splits the 8.84 mm air space between patent surfaces 9 and 10 and places an inferred stop in that fixed internal gap.

## Element-by-Element Analysis

### PL — Parallel Flat Plate, G1

nd = 1.51680, νd = 64.1. Glass: N-BK7 (Schott) / J-BK7A class. f = ∞.

PL is a 10.00 mm thick water-pressure window. On-axis it has no paraxial refractive power. Off-axis, however, the water-to-glass-to-air transitions of a flat port change the angular mapping of the field and introduce the positive distortion and chromatic difference of magnification that the patent assigns G2F to correct.

The plate is optically significant even though its focal length is infinite. It establishes the water-contact interface and explains why the lens cannot be treated as an ordinary in-air macro lens with a protective filter added in front.

### L2F — Negative Meniscus, Convex to Object, G2F

nd = 1.76684, νd = 46.8. Glass: unmatched J-LASFH2 class (Hikari; no source-backed local catalog entry). f = -46.66 mm.

L2F is the single element of the negative forward sub-unit G2F. Its shape factor is

$$q_{2F} = \frac{r_2 + r_1}{r_2 - r_1} = \frac{17.014 + 35.336}{17.014 - 35.336} = -2.857,$$

which lies close to the strong negative end of the patent's permitted range $-3 < q_{2F} < -1$. This is not a generic negative lens placement. It is specifically tuned to offset the flat-port field errors that appear when the object medium is water.

The high index keeps the two surfaces from becoming still sharper for the same negative power. The glass is a flint by Abbe number, despite the lanthanum-family name: νd = 46.8 is below the usual crown/flint boundary.

### L2R1 — Positive Meniscus, Convex to Object, G2R

nd = 1.80518, νd = 25.4. Glass: N-SF6 / S-TIH6 / J-SF6 dense flint class (805254). f = +68.31 mm.

L2R1 is a positive meniscus in a very high-dispersion dense flint. It contributes positive power immediately behind L2F and begins the correction of the spherical aberration burden created by the negative forward sub-unit.

Its low Abbe number makes it an important chromatic participant in G2R rather than just a weak positive collector. The meniscus form keeps the element from becoming a simple high-power biconvex element in a converging portion of the beam.

### L2R2 + L2R3 — Cemented Doublet, G2R

L2R2: nd = 1.79668, νd = 45.4. Glass: J-LASF017 (Hikari, 795453) close class; patent nd is about 0.0017 higher. f = +31.09 mm as an isolated in-air element.

L2R3: nd = 1.71736, νd = 29.5. Glass: SF1 / S-TIH1 / J-SF1 dense flint class (717295). f = -31.04 mm as an isolated in-air element.

The cemented pair is nearly afocal when evaluated as a doublet; the independent trace gives a combined in-air focal length of approximately +365.5 mm. This distinction matters. The individual elements are powerful, but their in-situ cemented combination is weak. Treating the pair as two standalone elements would overstate the power contribution of G2R.

L2R2 supplies positive power and L2R3 supplies closely matched negative power with stronger dispersion. Their cemented interface allows chromatic correction without adding another air space to a unit that must translate as part of the focus assembly.

### L31 — Biconcave Negative, G3

nd = 1.86074, νd = 23.0. Glass: unmatched J-SFH2 class (Hikari; 861230 region, no source-backed local catalog entry). f = -35.76 mm.

L31 is the high-index, high-dispersion negative element at the entrance of G3. It forms the negative member of the positive core's internal correction structure. Its placement before the strong positive L32 helps control chromatic and spherical aberration while broadening the beam entering L32.

The glass is one of the most dispersive in the design. It is therefore better described as a dense flint correction element than as a simple negative front element of a triplet-like group.

### L32 — Biconvex Positive, G3

nd = 1.79668, νd = 45.4. Glass: J-LASF017 (Hikari, 795453) close class; patent nd is about 0.0017 higher. f = +28.21 mm.

L32 is the strongest single positive element in the lens. Its front radius is weak and its rear radius is much stronger, so most of its power is concentrated toward the image side. This arrangement places strong positive power after the entrance negative element L31 and before the weak positive meniscus L33.

L32 is the principal contributor to the positive power of G3. It also contributes materially to the Petzval sum because of its high positive power.

### L33 — Positive Meniscus, Convex to Object, G3

nd = 1.79631, νd = 40.9. Glass: Unmatched 796/409 lanthanum-flint-region glass; no close current public catalog match. f = +115.63 mm.

L33 is a weak positive meniscus at the exit of G3. Its power is modest compared with L32, but it finishes the G3 power distribution and moderates the ray angles entering the fixed negative rear group.

The glass should not be forced into a modern catalog designation. The nearest current catalog families around νd ≈ 40.9 have noticeably different index; for example, OHARA L-LAH53 / Hikari J-LASF03 type glasses sit near nd ≈ 1.806 rather than the patent's nd = 1.79631. The analysis and data file therefore mark this material as unmatched rather than assigning a false exact catalog name.

### L41 — Biconvex Positive, G4

nd = 1.60717, νd = 40.3. Glass: Unmatched 607/403 medium-index flint; no close current public catalog match. f = +48.90 mm.

L41 is the positive element inside the fixed negative G4 unit. The patent describes the fourth unit in the first and second embodiments as a positive lens followed by a negative lens, with the positive lens having its sharper surface facing the image side. The prescription confirms that description: the front surface is very weak and the rear surface is much stronger.

This material should remain unresolved rather than being forced into an OHARA or Hikari name. A direct check against current Hikari J-series and OHARA S-glass catalog data gives nearby but materially different entries: J-BAF4 / S-BAM4 is close in index but too high in Abbe number, while J-F5 / S-TIM5 is lower in both index and Abbe number. The data file therefore marks L41 as an unmatched 607/403 glass.

### L42 — Biconcave Negative, G4

nd = 1.79668, νd = 45.4. Glass: J-LASF017 (Hikari, 795453) close class; patent nd is about 0.0017 higher. f = -38.04 mm.

L42 provides the dominant negative power of the fixed rear group. Its strongly curved front surface faces the object side, matching the patent's descriptive language for G4. In combination with the positive L41, the group focal length is only mildly negative, $f_4 \approx -214.2$ mm.

Because G4 is fixed relative to the image plane, this negative rear group is central to maintaining a constant back focal distance while the G2 + G3 focusing unit translates.

## Glass Identification and Selection

The design uses a small palette of high-index flint and dense-flint glasses plus one BK7-class crown plate. Catalog-backed labels are used where the current local catalog resolves to a coefficient-backed entry within the d-line tolerance. Hikari class names are retained as class notes where useful, but J-LASFH2 and J-SFH2 remain unmatched because no source-backed local catalog row is available. OHARA data were used as an independent cross-check, but L41 is not assigned to an OHARA catalog name because no current OHARA entry matches the patent coordinates closely.

| Element | nd | νd | Identification | Status | Optical role |
|---|---:|---:|---|---|---|
| PL | 1.51680 | 64.1 | N-BK7 / J-BK7A class | Exact/class | Waterproof flat port |
| L2F | 1.76684 | 46.8 | Unmatched J-LASFH2 class | Unmatched | Negative flat-port corrector |
| L2R1 | 1.80518 | 25.4 | N-SF6 / S-TIH6 / J-SF6 class | Exact/class | Dense-flint positive meniscus |
| L2R2 | 1.79668 | 45.4 | J-LASF017 close class | Close, not exact | Positive doublet component |
| L2R3 | 1.71736 | 29.5 | SF1 / S-TIH1 / J-SF1 class | Exact/class | Negative doublet component |
| L31 | 1.86074 | 23.0 | Unmatched J-SFH2 class | Unmatched | Dense-flint negative corrector |
| L32 | 1.79668 | 45.4 | J-LASF017 close class | Close, not exact | Main positive power element |
| L33 | 1.79631 | 40.9 | Unmatched 796/409 glass | Unmatched | Weak positive exit meniscus |
| L41 | 1.60717 | 40.3 | Unmatched 607/403 glass | Unmatched | Positive element in G4 |
| L42 | 1.79668 | 45.4 | J-LASF017 close class | Close, not exact | Negative rear field element |

Only the flat plate PL is a crown by Abbe number. All powered elements have νd below 50 and are therefore flints in the ordinary crown/flint classification, even where their family names include lanthanum or barium.

No ED, fluorite, anomalous-partial-dispersion, or apochromatic correction claim is supported by the prescription. The chromatic strategy is instead a conventional high-index flint / dense-flint pairing strategy distributed through the correcting and power groups.

## Focus Mechanism

The focus mechanism is an inner-focus system. G1 and G4 remain fixed relative to the image plane. G2 and G3 translate together toward the object as focus is moved from infinity to one-to-one magnification. The patent does not specify the autofocus motor or drive details; only the optical focusing kinematics are represented here.

The variable gaps are patent surfaces 2 and 15. At infinity, $d_2$ is large and $d_{15}$ is small. At close focus, $d_2$ contracts and $d_{15}$ expands by the same amount. The sum remains constant at approximately 47.5012 mm, and the back focal distance remains 45.0470 mm in the patent table.

| Focus state | β | d2 (mm) | d15 (mm) | DO from object to first surface (mm) | Bf (mm) |
|---|---:|---:|---:|---:|---:|
| Infinity | 0 | 43.0605 | 4.4407 | ∞ | 45.0470 |
| Half life-size | -0.5 | 24.2389 | 23.2623 | 108.4613 | 45.0470 |
| Life-size | -1.0 | 5.4172 | 42.0840 | 64.7658 | 45.0470 |

The total first-surface-to-image optical track remains 158.2882 mm at all three tabulated focus positions. This constant-track construction is especially useful in a sealed underwater lens because the front port and rear mount relationship do not need to change during macro focusing.

## Conditional Expressions

The patent gives seven conditional expressions. Example 1 satisfies all of them. The values below were recomputed from the prescription using a reduced-angle $y, n u$ paraxial trace with water as the object field medium for the whole-lens rearward focal length.

| Condition | Patent range | Computed value | Result |
|---|---:|---:|---|
| (1) $f_{2F}/f$ | $-1 < f_{2F}/f < -0.6$ | -0.904 | Satisfied |
| (2) $f_{23}/f$ | $0.6 < f_{23}/f < 1$ | 0.854 | Satisfied |
| (3) $d/f_{23}$ | $0.3 < d/f_{23} < 2.0$ | 0.977 | Satisfied |
| (4) $f/f_2$ | $-0.7 < f/f_2 < 0.2$ | -0.123 | Satisfied |
| (5) $q_{2F}$ | $-3 < q_{2F} < -1$ | -2.857 | Satisfied |
| (6) $n_{2F}$ | $1.65 < n_{2F}$ | 1.767 | Satisfied |
| (7) $f/f_1$ | $-0.25 < f/f_1 < 0.25$ | 0 | Satisfied |

The most design-defining values are conditions (1), (2), and (5). They place strong constraints on the negative forward corrector, the combined focusing-unit power, and the meniscus shape of L2F.

## Verification Summary

The prescription was independently re-run as a paraxial sequence using the surface-by-surface power convention $\phi = (n' - n)/R$ and reduced angle $n u$. The full-system trace used water at nd = 1.3306 as the object field medium and air after the final surface. The Petzval sum used the surface formula $\sum \phi/(n n')$.

| Quantity | Computed | Patent table | Difference |
|---|---:|---:|---:|
| Rearward EFL at infinity | 51.603 mm | 51.600 mm | +0.003 mm |
| BFD at infinity | 45.054 mm | 45.047 mm | +0.007 mm |
| $f_{2F}$ | -46.659 mm | -46.661 mm | +0.002 mm |
| $f_{2b}$ | +54.144 mm | +54.142 mm | +0.002 mm |
| $f_2$ | -419.08 mm | -419.395 mm | +0.32 mm |
| $f_3$ | +43.878 mm | +43.876 mm | +0.002 mm |
| $f_{23}$ | +44.075 mm | +44.073 mm | +0.002 mm |
| $f_4$ | -214.17 mm | -214.140 mm | -0.03 mm |
| Petzval sum | +0.002008 mm^-1 | not stated | — |
| Petzval radius | -498.1 mm | not stated | — |

The small EFL and BFD residuals are consistent with the rounding precision of the published radii, thicknesses, and refractive indices. The focus table conserves $d_2 + d_{15}$ at 47.5012 mm in all three tabulated states.

The data file's semi-diameters are not patent-published values. They are estimated working apertures constrained by traced marginal/chief ray heights, the 35° underwater field, rim-height limits, element edge thickness, and the 90% cross-gap sag-intrusion rule. The stop position is likewise inferred from the patent drawing rather than a numbered prescription surface.

## Design Heritage and Context

The Nikonos RS system was introduced in the early 1990s as an autofocus underwater SLR system with dedicated water-contact optics. Nikon's own historical overview identifies the RS as using a specifically designed R-UW lens mount and lists the R-UW AF Micro-Nikkor 50mm f/2.8 among the initial compatible lenses.

This patent's contribution is not simply a sealed macro lens. It is a macro lens whose first optical unit is allowed to be a simple pressure window while the following movable optical groups correct the water-port aberrations and preserve performance over a large focus stroke. The flat port, negative forward corrector, nearly afocal G2, positive G3, and fixed negative G4 form a specialized underwater macro architecture rather than a direct adaptation of an ordinary 50-60 mm Micro-Nikkor.

## Sources

- US Patent 5,257,137, Suzuki and Hamanishi, "Photo-Taking Lens for an Underwater Camera," assigned to Nikon Corporation, granted October 26, 1993.
- Nikon Imaging, "Evolution of NIKONOS," Camera Chronicle, for Nikonos RS system context and R-UW lens lineup.
- Hikari Optical Glass Data spreadsheet, Nikon / Hikari, for J-BK7A, J-SF6/J-SF1 class equivalents, J-LASF017 catalog comparison, and negative checks on the unresolved J-LASFH2 and J-SFH2 class labels.
- OHARA optical glass catalog data, for S-glass comparison and negative checks on the unmatched L33 and L41 coordinates.
- Production specification references for R-UW AF Micro-Nikkor 50mm f/2.8: 10 elements / 9 groups, f/2.8-f/22, 35° underwater field, 1:1 close focus, 88 mm attachment, 103 x 126 mm, approximately 1,100 g.
