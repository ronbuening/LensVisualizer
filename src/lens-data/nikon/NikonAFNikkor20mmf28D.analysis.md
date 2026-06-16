# Nikon AF Nikkor 20mm f/2.8D — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,690,517  
**Filed:** October 3, 1985  
**Granted:** September 1, 1987  
**Priority:** October 9, 1984 (JP 59-212243)  
**Inventor:** Daijiro Fujie  
**Assignee:** Nippon Kogaku K. K.  
**Title:** Retrofocus Type Wide Angle Lens  
**Embodiment analyzed:** First Embodiment, Table 1  
**Total embodiments:** Six numerical embodiments, Tables 1–6  
**Claims:** 13

The First Embodiment of US 4,690,517 is the closest patent prescription for the Nikon AF Nikkor 20mm f/2.8D optical formula. The prescription is normalized to `f = 100`, `F-number = 2.8`, and `2ω = 94°`; all data-file radii, thicknesses, spacings, back focus, and inferred semi-diameters are scaled by 0.2 for the production 20 mm class lens.

The identification rests on the convergence of the numerical prescription and Nikon's published production data. Table 1 gives a 12-element, 9-group retrofocus wide-angle lens with `2ω = 94°`, `Bf = 186.3`, and `f₁₋₄ = −0.737 f`. Nikon's production specification for the AF Nikkor 20mm f/2.8D gives a 20 mm f/2.8 FX-format lens with a 94° angle of view, 12 elements in 9 groups, CRC close-range correction, a 0.25 m minimum focus distance, 0.12× maximum reproduction ratio, and a 7-blade diaphragm. The patent and production lens are also consistent in being all-spherical; the production specification does not list ED or aspherical elements.

The remaining five embodiments have the same broad nine-component architecture, but the fourth and fifth component substructures and field angles differ. Embodiments 2 and 3 are 96° examples, while Embodiments 4–6 are 95° examples. The First Embodiment's `2ω = 94°` and 12/9 construction are the best match to the production lens.

## Optical Architecture

The design is a compact retrofocus wide-angle prime for the 35 mm SLR image format. It comprises 12 glass elements in 9 air-separated groups, arranged as follows.

| Group | Component | Elements | Power | Form |
|---|---:|---:|---|---|
| 1 | L1 | 1 | Positive | Meniscus, convex to object |
| 2 | L2 | 1 | Negative | Meniscus, convex to object |
| 3 | L3 | 1 | Negative | Meniscus, convex to object |
| 4 | L4 | 3 | Weak negative | Cemented biconvex + biconcave + plano-convex triplet |
| 5 | L5 | 1 | Positive | Biconvex |
| 6 | L6 | 1 | Positive | Meniscus, convex to image |
| — | Stop | — | — | In the L6–L7 airspace |
| 7 | L7 | 2 | Negative | Cemented positive meniscus + biconcave doublet |
| 8 | L8 | 1 | Positive | Meniscus, convex to image |
| 9 | L9 | 1 | Positive | Biconvex |

The front divergent group, L1–L4, has a normalized focal length of `−73.72`, or `−0.737 f`; after production scaling this is `−14.74 mm`. This places the design plainly in the retrofocus class: the scaled paraxial effective focal length is `19.9999 mm`, while the back focal distance is `37.2607 mm`, giving `BFD/EFL = 1.863`. The patent explicitly targets a back focal length at least 1.85 times the focal length while maintaining a roughly 95° field and f/2.8 aperture.

The front group distributes negative power across two negative menisci and a very weak cemented negative triplet instead of relying on a single strong front negative element. The L4 cemented triplet has a normalized focal length of approximately `−1837.3`, or `−367.5 mm` after scaling; it is therefore optically weak in bulk power but important through its internal cemented surfaces. This is the patent's central design choice: the divergent group is strong enough to clear an SLR mirror box, but its aberration burden is spread over several surfaces.

Behind the divergent group, L5 and L6 form the main pre-stop positive section. L7, a cemented negative doublet immediately behind the stop, corrects spherical aberration under-corrected by L6 while supporting the long back focal distance. L8 and L9 complete the rear relay and field-balance section. The computed Petzval sum is `+0.00106435 mm⁻¹` at the normalized patent scale and `+0.00532175 mm⁻¹` at production scale, corresponding to a production-scale Petzval radius of approximately `187.9 mm`. The Petzval calculation here uses the surface-by-surface `φ/(n·n′)` form, including cemented interfaces and the final refracting surface.

## Element-by-Element Analysis

Standalone in-air element focal lengths in this section are production-scaled values. The equivalent normalized patent-scale values are five times larger.

### L1 — Positive Meniscus, Convex to Object

nd = 1.62041, νd = 60.4. Glass: S-BSM16 class (OHARA) — barium crown. f = +99.6 mm.

L1 is a thick positive meniscus and the front collecting element. At the patent scale its center thickness is 27.481; after scaling this becomes 5.496 mm. The element contributes only weak positive power, but it shapes the wide oblique ray bundles before they reach the negative menisci.

The patent's chromatic strategy begins here. It states that the first component should use low-dispersion glass of high Abbe number so that the high-order lateral color generated by the first positive component can be deliberately counterbalanced by the adjacent high-dispersion negative L2. The patent value, `νd = 60.4`, fits that role.

### L2 — Negative Meniscus, Convex to Object

nd = 1.78470, νd = 26.1. Glass: SF56A equivalent (SCHOTT) — dense flint. f = −23.9 mm.

L2 is the first strong negative member of the front divergent group. Its dense flint glass satisfies the patent's condition `23 < ν₂ < 40` and places L2 near the high-dispersion end of the permitted range. This is not incidental: the patent identifies the second component as the primary high-dispersion counterweight to L1 for correcting the bending of chromatic difference of magnification.

Because L2 is close to L1 in oblique-ray incidence height, it can act on field-dependent lateral color before the ray bundle becomes too separated by field. Its high index also permits a compact meniscus shape without relying on an extremely thin or steep element.

### L3 — Negative Meniscus, Convex to Object

nd = 1.71300, νd = 54.0. Glass: S-LAL8 class (OHARA) — lanthanum crown. f = −32.2 mm.

L3 continues the front divergent action with lower dispersion than L2. This split between a high-dispersion negative L2 and a lower-dispersion negative L3 allows the designer to distribute the retrofocus power while keeping chromatic and monochromatic corrections partly separable.

The L3 curvatures are milder than L2's most strongly powered surface, helping keep coma and distortion under control while still contributing to the negative focal length required by condition (1).

### L4 — Cemented Negative Triplet

Overall group focal length: approximately `−367.5 mm` at production scale (`−1837.3` at the patent scale).

The fourth component is a cemented triplet: positive L4a, negative L4b, and positive L4c. Its net refractive power is weakly negative, but the triplet has substantial axial thickness and two internal cemented interfaces. The patent explicitly assigns this component a role in flattening the image plane and correcting distortion; condition (2) constrains its total center thickness.

**L4a — Biconvex positive.** nd = 1.75520, νd = 27.6. Glass: S-TIH4 class (OHARA) — dense flint. f = +28.4 mm.

L4a opens the triplet with positive power. Its dense flint glass and biconvex form partly cancel the strong negative member behind it while maintaining the axial thickness and internal refracting surfaces that the patent relies on.

**L4b — Biconcave negative.** nd = 1.77279, νd = 49.4. Glass: S-LAH66 class near-match (OHARA) — lanthanum flint class. f = −10.7 mm.

L4b is the strongest individual negative component in the L4 triplet. Its high index and moderate dispersion are consistent with a lanthanum flint role. The public OHARA S-LAH66 value is a close class match rather than an exact identity for the patent's stored pair, so the data file labels it as a class match.

**L4c — Plano-convex positive, flat rear.** nd = 1.62588, νd = 35.6. Glass: F1 / E-F1 class (HOYA legacy) — flint. f = +18.8 mm.

L4c closes the triplet and leaves surface 10 flat. The important cemented interface is surface 9, where light passes from the higher-index L4b into the lower-index L4c at `r₉ = +58.690` on the normalized patent scale. This surface is convex toward the object side and has negative refractive power, satisfying the patent's preferred condition (6). The computed dimensionless value is `f(nH − nL)/r₉ = 0.250`, with `nH = 1.77279`, `nL = 1.62588`, and `f = 100`.

### L5 — Biconvex Positive

nd = 1.67270, νd = 32.2. Glass: S-TIM25 class (OHARA) — dense flint class. f = +36.0 mm.

L5 is the first strong positive element after the front divergent group. Its object-side surface is sharper than its image-side surface, matching the patent description. It begins the rapid convergence of the beam toward the stop and works with L6 to reverse the divergence imposed by L1–L4.

Although L5 is a singlet in the First Embodiment, the patent permits the fifth component to be either cemented or single. In this embodiment, chromatic correction around this section is handled by the cemented L4 triplet and the later L7 doublet rather than by making L5 a cemented element.

### L6 — Positive Meniscus, Convex to Image

nd = 1.58267, νd = 46.5. Glass: J-BAF3 (HIKARI / Nikon) — barium flint. f = +33.1 mm.

L6 is a positive meniscus immediately ahead of the aperture stop. Its two negative radii indicate a meniscus concave toward the object and convex toward the image side. It is one of the main positive elements bringing the beam down before it reaches the post-stop negative doublet.

The patent identifies the L6–L7 region as important because L6 tends to leave spherical aberration under-corrected, while L7 then corrects it near the stop. This division of labor is typical of a compact retrofocus layout, where the rear group must simultaneously form the image, preserve back focus, and correct wide-field aberrations.

### Stop

The patent drawing places stop S between L6 and L7, and the prescription table provides the whole air spacing from surface 14 to surface 15. It does not tabulate the stop as a separate numerical surface. The data file therefore splits the scaled `d₁₄` gap evenly around an explicit `STO` surface. Because the stop is a flat air surface, this split affects the diagram and pupil tracing but not the paraxial Gaussian power.

The stop semi-diameter in the data file is `6.12 mm`. Independent pupil tracing gives an entrance-pupil semi-diameter of approximately `3.572 mm`, which corresponds to `f/2.7995` for the scaled `19.9999 mm` effective focal length.

### L7 — Cemented Negative Doublet

Overall group focal length: approximately `−19.3 mm` at production scale (`−96.6` at the patent scale).

L7 is the strongest negative group in the rear half of the system. It is placed immediately behind the stop, where it has strong leverage over spherical aberration, coma, and lateral color.

**L7a — Positive meniscus, convex to image.** nd = 1.77279, νd = 49.4. Glass: S-LAH66 class near-match (OHARA) — lanthanum flint class. f = +38.4 mm.

The object-side surface of L7a is surface 15, `r₁₅ = −112.362` at the normalized patent scale. This surface satisfies condition (3), `−1.3 f < r₁₅ < −0.9 f`, and is specifically identified by the patent as important for correcting spherical aberration under-corrected by L6 while preserving the long back focal distance.

**L7b — Biconcave negative.** nd = 1.78470, νd = 26.1. Glass: SF56A equivalent (SCHOTT) — dense flint. f = −13.9 mm.

L7b shares the same high-dispersion glass class as L2. Its cemented junction with L7a is surface 16, `r₁₆ = −69.443`, satisfying the patent's preferred condition (8), `−1.0 f < r₁₆ < −0.5 f`. The patent states that this surface helps correct the bending of chromatic difference of magnification from the image side of the stop.

The L7 total center thickness is `d₁₅ + d₁₆ = 27.481` at the patent scale, satisfying condition (7). The thickness reduces the burden on the doublet's outer refracting surfaces, but the patent also warns that excessive thickness would be undesirable mechanically and would increase sagittal coma.

### L8 — Positive Meniscus, Convex to Image

nd = 1.62041, νd = 60.4. Glass: S-BSM16 class (OHARA) — barium crown. f = +34.7 mm.

L8 is a positive meniscus behind the L7 doublet. It uses the same low-dispersion barium-crown class as L1 and L9. Its position near the image side makes its primary role image relay and field balancing rather than front-group divergence.

The short air gap between L8 and L9 is one of the tighter mechanical clearances in the design. The inferred semi-diameters in the data file preserve positive edge clearance and avoid excessive sag intrusion across that gap.

### L9 — Biconvex Positive

nd = 1.62041, νd = 60.4. Glass: S-BSM16 class (OHARA) — barium crown. f = +37.6 mm.

L9 is the final positive element. Its Coddington shape factor is constrained by patent condition (4), using normalized surfaces `r₂₀ = +472.174` and `r₂₁ = −153.303`. The computed value is approximately `−0.510`, within the stated range of `−0.9` to `−0.2`.

The steeper image-side curvature lets the final element help balance on-axis and off-axis aberrations while maintaining the long back focal distance required by the F-mount SLR geometry.

## Glass Identification and Selection

The design uses eight distinct `nd`/`νd` pairs. The patent does not name glass catalog types, so catalog names in the data file are class or equivalent identifications based on current public catalog matches. Where the match is not exact, the label is deliberately softened.

| Element(s) | nd | νd | Catalog identification | Role |
|---|---:|---:|---|---|
| L1, L8, L9 | 1.62041 | 60.4 | S-BSM16 class (OHARA) | Low-dispersion positive barium-crown elements |
| L2, L7b | 1.78470 | 26.1 | SF56A equivalent (SCHOTT) | High-dispersion dense flint for lateral-color correction |
| L3 | 1.71300 | 54.0 | S-LAL8 class (OHARA) | Moderate-dispersion negative lanthanum-crown-class element |
| L4a | 1.75520 | 27.6 | S-TIH4 class (OHARA) | Positive dense-flint member of L4 triplet |
| L4b, L7a | 1.77279 | 49.4 | S-LAH66 class near-match (OHARA) | High-index moderate-dispersion cemented-group members |
| L4c | 1.62588 | 35.6 | F1 / E-F1 class (HOYA legacy) | Positive flint member closing L4 triplet |
| L5 | 1.67270 | 32.2 | S-TIM25 class (OHARA) | Positive high-dispersion lead element of rear convergence group |
| L6 | 1.58267 | 46.5 | J-BAF3 (HIKARI / Nikon) | Positive barium-flint meniscus ahead of stop |

No element qualifies as ED glass by the usual photographic standard, and the patent does not claim apochromatic correction. Chromatic correction is classical: low-dispersion positive elements are balanced against dense-flint negative elements at carefully chosen ray heights, with cemented interfaces in L4 and L7 used to recover low-order chromatic balance.

## Focus Mechanism

The production lens uses Nikon CRC close-range correction. The patent describes the same mechanism in qualitative terms: during short-distance focusing, the whole lens moves forward, while the first through fifth components move as a unit to reduce spacing `d₁₂` relative to the succeeding component. In Table 1, `d₁₂` is the L5–L6 air gap, `7.852` at the patent scale and `1.5704 mm` after production scaling.

The patent does not publish a close-focus numerical spacing table. The data file therefore does not include a `var` table for close focus. It records the infinity-focus prescription and notes the CRC mechanism in `focusDescription`. Nikon's production specification gives a minimum focus distance of 0.25 m and a maximum reproduction ratio of 0.12×.

## Conditional Expressions

The First Embodiment satisfies the patent's stated conditions. All normalized lengths are at the patent scale where `f = 100`.

| Condition | Expression | Required range | Computed value | Status |
|---|---|---:|---:|---|
| (1) | `f₁₋₄` | `−0.9 f` to `−0.6 f` | `−73.72` (`−0.737 f`) | Pass |
| (2) | `D₄` | `0.35 f` to `0.53 f` | `46.618` | Pass |
| (3) | `r₁₅` | `−1.3 f` to `−0.9 f` | `−112.362` | Pass |
| (4) | `(r₂₁ + r₂₀)/(r₂₁ − r₂₀)` | `−0.9` to `−0.2` | `−0.510` | Pass |
| (5) | `ν₂` | `23` to `40` | `26.1` | Pass |
| (6) | `f(nH − nL)/rc` | `0.1` to `0.4` | `0.250` | Pass |
| (7) | `d₁₅ + d₁₆` | `0.2 f` to `0.4 f` | `27.481` | Pass |
| (8) | `r₁₆` | `−1.0 f` to `−0.5 f` | `−69.443` | Pass |

Condition (6) is dimensionally awkward in the OCR text, but the numerical intent is clear from the patent's normalized form: the checked value is the dimensionless `f(nH − nL)/rc`, where `rc = r₉ = +58.690`, `nH = 1.77279`, and `nL = 1.62588`.

## Verification Summary

The Table 1 prescription was independently re-traced using a paraxial reduced-angle matrix calculation. At the patent scale, the computed effective focal length is `99.9995` and the computed back focal distance is `186.3035`, matching the table's `f = 100` and `Bf = 186.3` within rounding. After applying the 0.2 production scale, the computed effective focal length is `19.9999 mm`, and the computed back focal distance is `37.2607 mm`.

The explicit `STO` surface in the data file is an inferred split of the patent's surface-14 air gap. The stop split is optically neutral in first order and is used only to render and trace the aperture position. With the selected `STO` semi-diameter of `6.12 mm`, pupil tracing gives approximately `f/2.7995`, consistent with the patent and production f/2.8 designation.

The inferred clear apertures were checked against the current renderer constraints. The maximum `sd/|R|` value is approximately `0.868`, below the `0.90` spherical rim limit. The minimum computed edge thickness remains greater than `1.0 mm`. The largest positive cross-gap sag-intrusion fraction is approximately `0.834`, below the `0.90` project limit.

## Design Heritage and Context

This design belongs to Nikon's compact SLR retrofocus wide-angle line: a strong but distributed front divergent section, a stop-centered convergent section, and a post-stop cemented negative doublet. The architecture is conservative in manufacturing terms because it uses only spherical surfaces, but it is not optically simple. Its compactness depends on a thick, weakly negative cemented triplet in the divergent group and a thick negative doublet behind the stop, both of which are explicitly governed by the patent's conditional expressions.

The patent is also explicit about the chromatic problem it is trying to solve: the bending of chromatic difference of magnification in a wide-angle retrofocus lens, especially at the g-line. The first and second components form the principal front chromatic pair, while the L4 and L7 cemented components restore system balance without requiring a larger or longer divergent group.

## Sources

- US 4,690,517, Fujie / Nippon Kogaku K. K., _Retrofocus Type Wide Angle Lens_, granted September 1, 1987.
- Nikon USA, _AF Nikkor 20mm f/2.8D_, product specification page, product #1913.
- Nikon Imaging, _NIKKOR — The Thousand and One Nights, No. 20_, historical Nikkor ultra-wide-angle discussion.
- OHARA optical glass catalog data for S-BSM16, S-LAL8, S-TIH4, S-LAH66, and S-TIM25 class matches.
- SCHOTT optical glass data for SF56A.
- HIKARI / Nikon optical glass data for J-BAF3.
- HOYA optical glass legacy F1 / E-F1 class data for the L4c glass pair.
