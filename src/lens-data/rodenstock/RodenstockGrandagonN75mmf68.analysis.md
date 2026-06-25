# Rodenstock Grandagon-N 75mm f/6.8

## Patent Reference and Design Identification

**Patent:** DE 26 35 415 B1 / DT 26 35 415 B1
**Filed:** 6 August 1976
**Announced / published:** 18 May 1977
**Inventors:** Franz Schlegel; Josef Weiss
**Applicant:** Optische Werke G. Rodenstock, Munich
**Title:** Sechslinsiges Weitwinkelobjektiv
**Classification:** G 02 B 13/06
**Embodiment analyzed:** Example 1 / claim 1, normalized to $f' = 100$

DE 26 35 415 B1 discloses a six-element wide-angle objective with a field angle of at least 104° and an aperture ratio of at least 1:6.8. The numerical examples are normalized to $f' = 100$ and report refractive indices at the mercury e-line, $n_e$, with the corresponding $\nu_e$ dispersion convention. Example 1 is the prescription used here.

The production identification is strong but not quite as direct as a modern data sheet naming this exact patent example. The patent prose states that the described embodiments have focal lengths of 75 mm, 90 mm, and 114 mm. Because the worked examples are presented in that three-example sequence, Example 1 is treated here as the 75 mm member. Its six-element, four-group, f/6.8 topology matches the compact Grandagon / Grandagon-N f/6.8 family. Archived large-format specification tables list a Grandagon N 75 mm f/6.8 in Copal 0 with 4x5 coverage, a 102° angle of coverage, a 187 mm image circle at f/22, and a 58 mm filter thread. Later Rodenstock/LINOS literature omits the 75 mm f/6.8 from the active Grandagon-N lens tables but still lists its E58/77 center filter and marks that 75 mm f/6.8 lens as no longer produced. That combination supports treating the patent's 75 mm scaling of Example 1 as the discontinued Rodenstock Grandagon-N 75 mm f/6.8.

The production scaling applied in the data file is therefore uniform: all patent radii, axial thicknesses, baffle positions, and inferred semi-diameters are multiplied by 0.75. The resulting paraxial focal length is $74.982$ mm at the patent e-line prescription.

## Optical Architecture

The design is an all-spherical, six-element, four-group wide-angle objective of the Biogon-derived symmetric type. The power sequence is negative-positive-stop-positive-negative:

- Group 1: L1, a negative meniscus ahead of the main converging groups.
- Group 2: L2+L3, a cemented positive doublet immediately in front of the stop.
- Aperture stop: located in the patent's split air space $l_2 = 1.28 + 1.34$.
- Group 3: L4+L5, a cemented positive doublet immediately behind the stop.
- Group 4: L6, a negative rear meniscus.

This is not a retrofocus design in the strict optical sense. The verified back focal distance is 68.779 in the normalized patent units, or 51.584 mm after 0.75x scaling. Since the production-scaled paraxial EFL is 74.982 mm, $\mathrm{BFD}/\mathrm{EFL} = 0.688$, not greater than one. It is better described as a compact quasi-symmetric wide-angle design with enough rear clearance for a large-format shutter and lens board.

The Petzval sum, computed surface by surface as $\sum \phi/(n n')$, is $+8.165 \times 10^{-5}$ in normalized patent units. That near-cancellation is central to the design: the positive cemented groups provide the imaging power, while the outer negative menisci counterbalance field curvature and distortion across the wide field.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

$n_e = 1.5246$, $\nu_e = 59.22$. Glass: K5 / N-K5 class, Schott match. Standalone $f = -44.17$ mm after scaling.

L1 uses modest-index crown glass and has radii $r_1 = +102.18$ and $r_2 = +23.46$ in the normalized patent table. The stronger rear curvature makes it a negative meniscus. Its function is to accept the steep field bundle, bend it toward the central doublets, and supply negative Petzval curvature at the front of the lens.

The same glass appears again in L6. That reuse is consistent with the quasi-symmetric correction strategy: the outer elements bracket the powered cemented groups with similar negative curvature contributions.

### L2 + L3 — Front Cemented Positive Doublet

#### L2 — Negative Meniscus

$n_e = 1.7343$, $\nu_e = 28.47$. Glass: SF10 class, Schott legacy dense flint. Standalone $f = -50.48$ mm after scaling.

L2 is the high-index, high-dispersion member of the front cemented group. Its negative meniscus form provides chromatic leverage without allowing the cemented group to become too strongly positive.

#### L3 — Positive Meniscus

$n_e = 1.6269$, $\nu_e = 46.71$. Glass: BaF8 / J-BAF8 class. Standalone $f = +17.50$ mm after scaling.

L3 is the positive partner of the front doublet. The cemented pair has a verified net focal length of $+43.90$ mm after scaling. The patent also places the first internal stray-light baffle, $b_1$, inside this element at $db_1 = 4.46$ normalized units behind the cemented radius $r_4$, with $b_1 = 15.66$ full diameter in the normalized prescription.

The doublet is not a simple crown-flint pair in the modern catalog sense; both glasses lie in flint territory by Abbe number. The correction comes from their relative dispersion difference, not from a crown/flint boundary at $\nu_d \approx 50$.

### L4 + L5 — Rear Cemented Positive Doublet

#### L4 — Biconvex Positive

$n_e = 1.6541$, $\nu_e = 38.86$. Glass: BaSF4 class, Schott/Sumita equivalent. Standalone $f = +15.24$ mm after scaling.

L4 is the strongest individual positive element in the system. Its very weak front radius and strongly curved cemented rear radius form a biconvex element that supplies most of the rear doublet's positive power. The patent places the second internal stray-light baffle, $b_2$, inside this element at $db_2 = 4.23$ normalized units behind $r_6$, with $b_2 = 14.94$ full diameter.

#### L5 — Negative Meniscus

$n_e = 1.7273$, $\nu_e = 29.02$. Glass: SF18 / S-TIH18 class dense flint. Standalone $f = -35.03$ mm after scaling.

L5 partially cancels L4's strong positive power and provides the high-dispersion partner needed for the rear doublet's chromatic correction. The verified rear doublet net focal length is $+36.11$ mm after scaling, making it slightly stronger than the front doublet.

### L6 — Negative Meniscus, Concave to Object

$n_e = 1.5246$, $\nu_e = 59.22$. Glass: K5 / N-K5 class, Schott match. Standalone $f = -46.66$ mm after scaling.

L6 mirrors the front meniscus in glass choice and function but is not a numerically symmetric copy. Its radii, $r_9 = -27.48$ and $r_{10} = -179.75$, form a negative rear meniscus that helps control field curvature, distortion, and chief-ray geometry before the final image plane.

## Glass Identification and Selection

The patent gives $n_e$ and $\nu_e$, so direct comparison to current catalog $n_d$ / $\nu_d$ values must be treated with care. The data file preserves the patent e-line indices for geometry; the catalog values below document the nearest glass identifications.

| Element | Patent $n_e$ / $\nu_e$ | Catalog identification | Catalog $n_d$ / $\nu_d$ | Assessment |
|---|---:|---|---:|---|
| L1, L6 | 1.5246 / 59.22 | K5 / N-K5, Schott | 1.52249 / 59.48 | Exact e-line match to Schott N-K5 within rounding. |
| L2 | 1.7343 / 28.47 | SF10, Schott legacy | 1.72825 / 28.41 | Index match at $n_e$; $\nu_e$ differs from the current Schott SF10 data, so this is treated as legacy/melt-equivalent. |
| L3 | 1.6269 / 46.71 | BaF8 / J-BAF8 class | 1.62374 / 47.01 | Strong match to Hikari J-BAF8 / BaF8-class glass. |
| L4 | 1.6541 / 38.86 | BaSF4 class | about 1.6513 / 38.3 | BaSF4-class match; current public catalogs do not make a melt-identical Schott BaSF4 assertion safe. |
| L5 | 1.7273 / 29.02 | SF18 / S-TIH18 class | 1.72151 / 29.23 | Strong match to the SF18/S-TIH18 dense-flint position. |

The glass palette is economical. No ED, fluorite, lanthanum crown, or anomalous partial-dispersion glass is required. The front doublet has the larger dispersion separation; the rear doublet has a smaller separation but greater positive power.

## Focus Mechanism

The optical design is unit-focused. In ordinary large-format use, the entire shutter-mounted lens moves as a unit relative to the film plane, and the camera bellows or focusing rail supplies the extension. The patent does not publish separate close-focus air-spacing tables and does not describe internal focusing.

The `.data.ts` file therefore models focus by varying only the final back-focus gap. The infinity value is the verified e-line back focal distance after scaling, 51.584 mm. The close-focus value, 58.453 mm, is a 1.0 m object-to-image visualization reference solved by paraxial unit-focus tracing. It should not be read as a manufacturer minimum-focus specification.

## Verification Summary

All load-bearing paraxial quantities were re-derived from the patent prescription, not copied from the previous analysis.

| Quantity | Patent / source value | Recomputed value | Note |
|---|---:|---:|---|
| Patent normalized EFL | $f' = 100$ | 99.9758 | e-line prescription, Example 1. |
| Production-scaled EFL | 75 mm nominal | 74.9818 mm | 0.75x scale from patent. |
| Patent normalized BFD | not separately tabulated | 68.7792 | Computed from final surface to paraxial image. |
| Production-scaled BFD | not separately tabulated | 51.5844 mm | 0.75x scale. |
| Mechanical optical track, L1 front to L6 rear | patent table | 83.990 normalized / 62.993 mm scaled | Sum excludes back focus. |
| Petzval sum | not tabulated | $+8.165 \times 10^{-5}$ | Surface-by-surface $\phi/(n n')$. |
| L2+L3 focal length | not tabulated | +58.533 normalized / +43.900 mm scaled | Standalone in-air cemented group. |
| L4+L5 focal length | not tabulated | +48.142 normalized / +36.106 mm scaled | Standalone in-air cemented group. |

Semi-diameters are not given by the patent. The data file uses conservative estimates constrained by the patent baffle diameters, the 58 mm production filter thread, on-axis f/6.8 marginal-ray tracing, a 0.6-field displayed chief-ray envelope, surface-rim constraints, cross-gap sag clearance, and element front/rear semi-diameter ratios.

## Design Heritage and Context

The Grandagon-N f/6.8 family belongs to the same broad wide-angle design tradition as the Biogon and Super-Angulon types: negative outer menisci surround positive interior groups at a central stop. The symmetry helps suppress odd-order aberrations, while the negative outer menisci help flatten the field and reduce distortion. DE 26 35 415 B1 is specifically framed as a six-element, economical alternative to more complex wide-angle objectives while preserving high field angle and f/6.8 aperture.

The internal baffles $b_1$ and $b_2$ are a notable practical feature of this patent. They are not ordinary aperture stops; they are dye-blackened internal light traps placed inside the thick positive doublet elements to suppress stray light in a lens whose outer field rays pass through the cemented groups at steep angles.

## Sources

1. DE 26 35 415 B1 / DT 26 35 415 B1, *Sechslinsiges Weitwinkelobjektiv*, Optische Werke G. Rodenstock, announced 18 May 1977. Primary prescription source.
2. Rodenstock/LINOS, *Lenses for Analog Professional Photography*, Grandagon-N and center-filter tables, <https://www.mr-alvandi.com/downloads/large-format/rodenstock-analog-lenses.pdf>.
3. Photoscapes / large-format lens specification scan, *LargeFormatLenses*, Grandagon N specification table, <https://photoscapes.com/wp-content/uploads/LgFormatLenses.pdf>.
4. Schott optical glass datasheets for N-K5 and SF10.
5. Hikari / Nikon optical-glass cross-reference and J-series glass tables for BaF8-class equivalents.
6. Ohara S-TIH18 catalog/datasheet.
7. Sumita optical glass data book, BaSF4/SF-series Schott-type equivalents.
