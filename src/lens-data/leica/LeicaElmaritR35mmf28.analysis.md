## Patent Reference and Design Identification

**Patent:** FR 1,471,493 (République Française)  
**Filed:** 15 March 1966, Paris  
**Granted:** 23 January 1967; published in *Bulletin officiel de la Propriété industrielle*, no. 9, 3 March 1967  
**Priority:** German application L 50.417, filed 8 April 1965  
**Applicant:** Ernst Leitz G.m.b.H., Wetzlar, Federal Republic of Germany  
**Title:** Objectif photographique  
**Embodiment analyzed:** Single numerical prescription; the patent contains one worked table and one optical section drawing

FR 1,471,493 describes a short-focal-length photographic objective whose rear focal distance on the image side is intentionally longer than the focal length. The tabulated numerical example is normalized to $f = 1.0$, has aperture ratio 1:2.8, and gives $s' = 1.0918f$ for the back focal distance. Scaled uniformly by 35.0, the prescription computes to $f = 35.073\ \mathrm{mm}$ and a computed paraxial back focal length of $38.305\ \mathrm{mm}$, with the patent-listed $s'$ scaling to $38.213\ \mathrm{mm}$.

The identification with the early Leica / Leitz Elmarit-R 35 mm f/2.8 is strong but circumstantial. The patent itself does not print a commercial lens name. The evidence is the combination of a 35 mm f/2.8 retrofocus prescription, Leitz Wetzlar ownership, a mid-1960s priority date, an SLR-compatible back focal distance, and a 7-element retrofocus form. The patent drawing and table show 7 elements in 5 air-separated groups: L1 | L2+L3 | L4 | L5 | L6+L7. Some secondary production references list the early Elmarit-R 35 mm f/2.8 as 7 elements in 6 groups; that disagreement should be treated as an unresolved source-convention issue unless a Leitz factory section drawing for the exact version is being used. The transcribed optical prescription itself is unambiguously five air-separated groups.

The data file therefore models the patent prescription directly rather than trying to reconcile secondary production group-count listings.

## Optical Architecture

The design is an all-spherical retrofocus wide-angle objective. The patent describes the rear image-forming portion as a classical triplet-like main system, with a cemented convergent element placed in front of it and a negative meniscus farther forward. In group-power order, the lens is:

| Group | Elements | Power | Role |
|---|---:|---:|---|
| G1 | L1 | negative | Front divergent meniscus for retrofocus extension |
| G2 | L2+L3 | positive | Cemented convergent collector ahead of the triplet-like rear system |
| G3 | L4 | positive | Front positive member of the main triplet-like system |
| G4 | L5 | negative | Central triplet negative element and major Petzval counterweight |
| G5 | L6+L7 | positive | Cemented rear positive member of the triplet-like system |

Using thick-lens ABCD matrices at the patent e-line indices, the scaled standalone group focal lengths are approximately:

| Group / subsystem | Focal length |
|---|---:|
| L1 | −54.91 mm |
| L2+L3 | +48.19 mm |
| L4 | +36.46 mm |
| L5 | −18.04 mm |
| L6+L7 | +26.79 mm |
| Rear subsystem L4–L7, including internal air gaps | +59.26 mm |
| Complete objective | +35.07 mm |

The architectural point is not simply that a negative front lens lengthens the back focal distance. The patent’s claim is more specific: the two cemented surfaces, R4 and R11, are both weakly convergent, tightly curved, and made with small refractive-index steps. These cemented interfaces provide astigmatism and aperture-defect correction without using large cemented-interface power.

The aperture stop is drawn in the air gap $l_3$ between L4 and L5. The prescription table does not give a numerical stop coordinate. The data file splits $l_3$ equally and computes the physical stop semi-diameter from the f/2.8 entrance-pupil requirement at that inferred stop plane.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$n_e = 1.4892$, $\nu_e = 69.9$. Glass: FK5 / N-FK5 class, Schott legacy equivalent. $f = -54.91\ \mathrm{mm}$.

L1 is the front retrofocus element. Scaled by 35.0, its radii are $R_1 = +39.025\ \mathrm{mm}$ and $R_2 = +15.610\ \mathrm{mm}$, with a center thickness of $2.240\ \mathrm{mm}$. Both radii are positive, so the element is a meniscus convex toward the object. The steep rear surface gives the element most of its negative power.

The high Abbe number is appropriate for a strongly powered front negative element. It limits the lateral color and axial chromatic burden created before the beam reaches the positive collector group. L1 also contributes a net negative Petzval term, so it is not only a mechanical back-focus extender; it participates in field-curvature balancing.

### L2 — Biconvex Positive, front element of D1

$n_e = 1.6713$, $\nu_e = 41.6$. Glass: BaSF6-class Schott legacy barium dense flint, inferred. $f = +16.46\ \mathrm{mm}$.

L2 is the strongest standalone positive collector in the front half of the lens. Its scaled radii are $R_3 = +52.115\ \mathrm{mm}$ and $R_4 = -12.880\ \mathrm{mm}$, with a center thickness of $10.605\ \mathrm{mm}$. The high index permits the required positive power without making the front surface excessively steep.

The earlier BaSF10-class assignment is too weakly supported. A BaSF6-class legacy Schott match is closer in the relevant index/dispersion region when compared as an e-line prescription, but the patent does not name the glass. The data file therefore records this as an inferred class rather than a hard catalog identification.

### L3 — Negative Meniscus, concave to object, rear element of D1

$n_e = 1.6299$, $\nu_e = 38.8$. Glass: unmatched flint / barium-flint position; no confident public catalog match. $f = -23.18\ \mathrm{mm}$.

L3 is cemented to L2 at R4 and exits through the weakly curved $R_5 = -115.255\ \mathrm{mm}$ surface. Most of L3’s optical work is therefore at the cemented interface, not at its rear air surface. At R4, the index step is $1.6299 - 1.6713 = -0.0414$ and the radius is negative, giving a positive surface power. This is one of the patent’s required convergent cemented surfaces.

A BaSF51 identification is not reliable: modern Schott N-BASF51 is in a much higher-index region than this patent value. Because the patent does not identify a glass name and no public Schott entry cleanly matches this pair, L3 is better treated as an unmatched vintage or proprietary flint-type glass.

### L4 — Biconvex Positive, front member of the triplet-like rear system

$n_e = 1.6241$, $\nu_e = 60.1$. Glass: SK16 / N-SK16 class, Schott legacy equivalent. $f = +36.46\ \mathrm{mm}$.

L4 has $R_6 = +23.590\ \mathrm{mm}$ and $R_7 = -609.980\ \mathrm{mm}$. It is formally biconvex, but optically it behaves close to a plano-convex positive element because the rear surface is very weak. This places most of the element’s power on the front surface while leaving the surface adjacent to the stop nearly neutral.

The high Abbe number fits its role as a positive member in the main image-forming subsystem. It supplies convergence ahead of the stop without adding excessive chromatic error. Its near-flat rear surface also reduces stop-adjacent higher-order contributions.

### L5 — Biconcave Negative, central triplet element

$n_e = 1.7046$, $\nu_e = 34.6$. Glass: unmatched dense flint; no confident public catalog match. $f = -18.04\ \mathrm{mm}$.

L5 is the central negative element of the triplet-like rear subsystem. Its scaled radii are $R_8 = -39.935\ \mathrm{mm}$ and $R_9 = +18.935\ \mathrm{mm}$, with a center thickness of $1.505\ \mathrm{mm}$. R9 is the strongest negative air-glass surface in the design.

This element provides the dominant negative Petzval and chromatic counterweight against the positive crown and lanthanum-crown elements. The published $n_e = 1.7046$, $\nu_e = 34.6$ pair does not cleanly map to a stable public Schott catalog glass. It should therefore be recorded as an unmatched dense flint rather than forced into a specific SF or TiSF designation.

### L6 — Negative Meniscus, front element of D2

$n_e = 1.6734$, $\nu_e = 46.9$. Glass: BaF13-class Schott legacy barium flint, inferred. $f = -19.24\ \mathrm{mm}$.

L6 is a thin negative meniscus with a nearly flat front surface, $R_{10} = +400.925\ \mathrm{mm}$, and a strongly curved cemented rear surface, $R_{11} = +12.530\ \mathrm{mm}$. Nearly all of its standalone negative power comes from the cemented interface geometry.

At R11, the index step is $1.6940 - 1.6734 = +0.0206$ and the radius is positive, again giving a weak positive cemented-interface power. This is the second cemented surface targeted by the patent’s condition. The glass is better described as BaF13-class barium flint than as BaSF13 dense barium flint; the latter is a poorer class description for the stated dispersion.

### L7 — Biconvex Positive, rear element of D2

$n_e = 1.6940$, $\nu_e = 54.6$. Glass: LAK9 / N-LAK9 class, Schott legacy equivalent. $f = +12.08\ \mathrm{mm}$.

L7 is the final and strongest standalone positive element. It uses the cemented $R_{11} = +12.530\ \mathrm{mm}$ front surface and the strongly curved $R_{12} = -20.125\ \mathrm{mm}$ rear surface. The element’s high index permits large positive power while keeping the rear air surface within practical curvature.

The lanthanum-crown class is plausible for the published index and Abbe number. In the rear doublet, L7 supplies the final convergence while L6 moderates the chromatic and field effects through the weak cemented interface.

## Glass Identification and Selection

The patent tabulates $n_e$ and $\nu_e$, not $n_d$ and $\nu_d$. These values are mercury e-line data at 546.1 nm, consistent with common German optical-glass practice of the period. The project data schema has only `nd` and `vd` fields, so the data file stores the patent e-line values in those fields and documents the convention in the file header.

| Element | Patent $n_e$ | Patent $\nu_e$ | Stored glass description | Confidence |
|---|---:|---:|---|---|
| L1 | 1.4892 | 69.9 | FK5 / N-FK5 class | High class match |
| L2 | 1.6713 | 41.6 | BaSF6-class barium dense flint | Moderate inferred class |
| L3 | 1.6299 | 38.8 | Unmatched flint / barium-flint position | Low; no confident public match |
| L4 | 1.6241 | 60.1 | SK16 / N-SK16 class | Good class match |
| L5 | 1.7046 | 34.6 | Unmatched dense flint | Low; no confident public match |
| L6 | 1.6734 | 46.9 | BaF13-class barium flint | Moderate inferred class |
| L7 | 1.6940 | 54.6 | LAK9 / N-LAK9 class | Good class match |

The practical chromatic strategy is distributed. The front doublet D1 does not behave like a simple high-Abbe crown plus low-Abbe flint achromat; its two glasses are relatively close in both index and dispersion because the patent’s cemented-surface condition limits the index step. The same is true, more weakly, for D2. L5 supplies the strongest dense-flint counterweight in the triplet-like rear system.

## Focus Mechanism

The patent provides only an infinity-focus prescription and does not describe a focusing mechanism. For the production R-mount lens, unit focusing is the conservative model: the complete optical cell translates forward, so the optical prescription remains fixed and the image-side air gap increases at close focus.

Production references commonly give a minimum focus distance of 0.30 m and a smallest object field of approximately 140 × 210 mm. Those two numbers imply a magnification of about $36/210 = 24/140 = 0.171\times$, or roughly 1:5.8. They do not imply 1:7.6; that value would correspond to about $0.132\times$ and a larger object field.

A paraxial finite-conjugate solve using the scaled patent prescription and measuring 0.30 m from the film plane gives a unit-focus extension of approximately $6.0\ \mathrm{mm}$. The data file therefore models close focus as a single variable BF gap:

| Gap | Infinity | Close focus model |
|---|---:|---:|
| R12 to image plane | 38.213 mm | 44.211 mm |

This close-focus value is a data-file modeling estimate, not a patent-published spacing.

## Aspherical Surfaces

The prescription is entirely spherical. The patent table lists only radii, thicknesses, air spaces, and glass data; it gives no aspherical coefficients and no aspheric equation. The design therefore relies on curvature distribution, glass selection, air spacing, and the two cemented junctions for aberration correction.

## Conditional Expressions

The patent states three linked conditions for the cemented surfaces in the front convergent component and the last element of the triplet-like rear system. In the worked example these are R4 and R11.

First, both cemented surfaces are convergent. Using $\phi = (n' - n)/R$:

| Surface | $R/f$ | Index step | Surface power, normalized | Result |
|---|---:|---:|---:|---|
| R4, L2→L3 | −0.368 | −0.0414 | +0.1125 | convergent |
| R11, L6→L7 | +0.358 | +0.0206 | +0.0575 | convergent |

Second, the refractive-index difference across each cemented surface is less than 0.08:

| Surface | $|\Delta n|$ | Limit | Result |
|---|---:|---:|---|
| R4 | 0.0414 | < 0.08 | satisfied |
| R11 | 0.0206 | < 0.08 | satisfied |

Third, the radii of both cemented surfaces are less than half the total focal length:

| Surface | $|R|/f$ | Limit | Result |
|---|---:|---:|---|
| R4 | 0.368 | < 0.5 | satisfied |
| R11 | 0.358 | < 0.5 | satisfied |

The French text also says that the convexity of the cemented surfaces is turned toward the objective. Read literally, that phrase is geometrically awkward because R4 and R11 have opposite radius signs in the prescription. The operative optical condition is clearer and directly verifiable: both cemented interfaces have positive surface power with small index steps and small radii.

## Petzval Sum and Field Curvature

The Petzval sum was recomputed surface by surface using

$$
P = \sum_i \frac{\phi_i}{n_i n'_i}, \qquad \phi_i = \frac{n'_i - n_i}{R_i}.
$$

For the normalized patent prescription, $P = 0.22027$. Scaled to a 35 mm design, this corresponds to a Petzval radius of approximately $35 / 0.22027 = 158.9\ \mathrm{mm}$. The largest positive terms are the rear surface of L7 and the front surface of L4. The dominant negative contributions are the two surfaces of L5, with an additional net-negative contribution from the front meniscus L1.

| Contributor | Petzval contribution, normalized |
|---|---:|
| L1 combined | −0.4419 |
| L5 combined | −1.1263 |
| R6, front of L4 | +0.5701 |
| R12, rear of L7 | +0.7125 |
| Complete system | +0.2203 |

This balance is consistent with a retrofocus triplet-derived system: the positive rear groups create strong convergence, while L1 and especially L5 restrain the Petzval curvature.

## Data-file Modeling Notes

The patent omits semi-diameters. The data file uses inferred clear apertures rather than ray-envelope maxima. This is intentional. A full-field paraxial envelope at maximum aperture can exceed the physical clear apertures of a compact retrofocus lens because mechanical vignetting is part of the design behavior. The selected semi-diameters satisfy the project’s renderer constraints: spherical rim limits, edge thickness, element front/rear diameter ratios, and cross-gap sag intrusion. The tightest clearance is the R9–R10 air gap, where the selected diameters keep cross-gap sag intrusion below 90% of the 1.960 mm scaled gap.

The final image distance in the surface table is the patent-stated $s' = 1.0918f$ scaled to 38.213 mm. Independent matrix reduction of the radii, thicknesses, and e-line indices gives a best paraxial BFL of 38.305 mm. The difference is 0.092 mm, about 0.24%, and is small enough to be treated as rounding in the printed patent table.

## Design Heritage and Context

The design belongs to the SLR retrofocus tradition: a negative front component creates the required back focal distance, while a positive collector and triplet-like rear subsystem restore convergence and correct aberrations. FR 1,471,493 cites the prior practice of putting a negative lens in front of a conventional objective and also cites US 1,934,561 for the additional convergent element placed between the front negative element and the main system.

The Leitz contribution in this patent is narrower than the retrofocus concept itself. It is the specific use of two weak, convergent, close-index cemented surfaces in a short-focal-length objective to improve astigmatic correction and reduce aperture defect.

## Verification Summary

The numerical prescription was re-entered from the patent table and checked by independent paraxial ABCD / $y$-$\nu$ ray trace at the patent e-line indices.

| Parameter | Patent / source value | Recomputed value | Note |
|---|---:|---:|---|
| Scale factor | 35.0 | 35.0 | Applied uniformly to radii and axial distances |
| Effective focal length | $f = 1.0$ normalized | 35.073 mm | 1.0021 normalized |
| Patent back focal distance | $s' = 1.0918f$ | 38.213 mm scaled | Surface-table image gap |
| Matrix back focal length | — | 38.305 mm | 0.092 mm longer than printed $s'$ |
| Aperture ratio | 1:2.8 | 1:2.8 | Stop semi-diameter derived from entrance pupil |
| Full diagonal field, 36×24 mm | about 63° production class | 63.33° paraxial | From 43.27 mm diagonal and computed EFL |
| Glass-to-glass track | — | 47.740 mm | R1 vertex to R12 vertex |
| R1 vertex to image plane | — | 85.953 mm using patent $s'$ | 86.045 mm using computed BFL |
| Petzval sum | — | 0.22027 normalized | Petzval radius ≈ 158.9 mm scaled |

## Sources

1. FR 1,471,493, Ernst Leitz G.m.b.H., *Objectif photographique*, filed 15 March 1966, granted 23 January 1967. Primary source for the prescription, claims, and optical section drawing.
2. SCHOTT, *Optical Glass Pocket Catalog*, 2000 edition. Used for e-line / d-line convention checks and legacy Schott glass-code comparisons.
3. SCHOTT Technical Information TIE-29, *Refractive Index and Dispersion*. Used for line-index terminology and the distinction between $n_d$ and $n_e$ conventions.
4. Erwin Puts, *Leica R-Lenses*, chapter material available through historical Leica lens documentation. Used only for historical context on Leitz R-system retrofocus development, not for prescription data.
5. Production reference tables for the Leica / Leitz Elmarit-R 35 mm f/2.8. Used for the 0.30 m close-focus and 35 mm f/2.8 production identification context; the patent prescription remains the authoritative optical source here.
