## Patent Reference and Design Identification

**Patent:** US 2,821,112  
**Application Number:** US 569,500  
**Filed:** March 5, 1956  
**Granted:** January 28, 1958  
**Inventors:** Johann Lautenbacher; Theodor Brendel  
**Assignee:** Enna-Werk Optische Anstalt Dr. Appelt K.G., Munich, Germany  
**Title:** Four-Membered Photographic Wide-Angle Objective  
**Embodiment analyzed:** Sole numerical example / claim 2 construction data

US 2,821,112 discloses a four-member wide-angle photographic objective consisting of a front negative meniscus separated from a simple triplet by a long air gap. The patent states that the design was intended for single-reflex cameras because of its long back focal length, and that the object of the invention was to increase the relative aperture of this design class to f/3.5 while improving coma and reducing vignetting for oblique rays. The worked prescription is normalized to $f = 1.0$ and gives a stated back focal length of $s' = 1.01941f$.

The following evidence identifies the worked embodiment as the optical formula represented here for the Enna München Lithagon 35mm f/3.5:

1. The patent and drawing specify four air-spaced glass elements: a negative meniscus followed by a simple triplet. Later production references for the Lithagon 35mm f/3.5 describe a 4-element / 4-group lens.
2. Scaling the normalized patent prescription by 35 gives an independently traced EFL of 35.0008 mm.
3. The patent objective is expressly described as an f/3.5 improvement over earlier f/4.0 examples of the same class.
4. The scaled traced BFD is 35.68 mm, essentially one focal length behind the rear surface. This is consistent with an early SLR wide-angle lens rather than a rangefinder wide-angle.
5. The assignee is Enna-Werk Optische Anstalt Dr. Appelt K.G., the manufacturer of the Lithagon series.
6. External production references list the Lithagon 35mm f/3.5 as a 35 mm SLR lens in M42, Exakta, and Praktina variants, with f/3.5 maximum aperture and a 4-element / 4-group optical layout.

The data file therefore treats the sole worked patent example as the Lithagon 35mm f/3.5 optical package, uniformly scaled from the patent's $f=1.0$ normalization to a 35 mm production focal length.

## Optical Architecture

The Lithagon 35mm f/3.5 is an early inverted-telephoto, or retrofocus, wide-angle design. It uses a negative-positive-negative-positive power sequence: a weak negative meniscus in front, followed by a positive-negative-positive triplet. All four members are air-spaced and all surfaces are spherical.

The front meniscus group M is optically weak by itself, with a thick-lens-in-air focal length of -127.0 mm, or $-3.63f$ in the patent normalization. Its role is architectural rather than simply refractive: it allows the rear triplet to sit far behind the first surface while preserving a back focal distance slightly longer than the system focal length. The large air gap $l_1 = 0.760f$ scales to 26.6 mm, and is 2.04× the axial length of the triplet assembly.

The rear group T is a simple triplet with a traced group focal length of 34.1 mm, or $+0.973f$. L2 and L4 supply the main positive power, while L3 supplies the central high-dispersion negative power needed for primary color correction and Petzval compensation.

The design is retrofocus in the literal back-focus sense: traced $\mathrm{BFD}/\mathrm{EFL} = 1.0194$. It should not be described as telephoto; the front-vertex-to-image total track is 77.1 mm, giving a total-track / EFL ratio of 2.201. The rear principal plane is only 0.68 mm to the image side of the last surface, not near the front element. The long-back-focus property is therefore modest in magnitude but important for the SLR mount context.

The aperture stop is not tabulated in the patent prescription. The drawing places the stop in the $l_2$ air space between L2 and L3. The data file splits the patent's $l_2 = 0.100f$ spacing evenly around an inserted `STO` surface and solves the stop semi-diameter paraxially for f/3.5.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$n_d = 1.51821$, $\nu_d = 65.2$. Glass: unmatched 518/652 crown class. $f = -127.0$ mm.

L1 has both centers of curvature to the image side: $R_1 = +1.984f$ and $R_2 = +0.95718f$. Because the rear surface is more strongly curved, the element has net negative power despite its meniscus form. The patent describes this as a negative meniscus with its concave surface directed toward the triplet; in the sign convention used by the numerical table, that is the rear surface $R_2$.

The element is weak compared with the triplet elements, but its position ahead of the rear group is decisive. It establishes the inverted-telephoto layout by permitting a large air separation before the positive triplet while leaving the image plane approximately one focal length behind the last surface. Its high Abbe number also limits the chromatic penalty of placing a negative member in the front group.

### L2 — Plano-Convex Positive, flat to image

$n_d = 1.74400$, $\nu_d = 44.9$. Glass: N-LAF2 equivalent (Schott). $f = 21.6$ mm.

L2 is the first positive element of the triplet. Its front surface $R_3 = +0.460f$ carries the refracting power, while $R_4 = \infty$ is flat. The high refractive index lets the element supply strong positive power from a single curved surface without requiring a very small radius.

Although the glass is a lanthanum flint by catalog family and Abbe number, its dispersion is still much lower than that of the central negative flint L3. In this triplet it functions as one of the positive achromatizing partners around the dense-flint negative element.

### L3 — Biconcave Negative

$n_d = 1.67270$, $\nu_d = 32.2$. Glass: SF5 (Schott). $f = -13.3$ mm.

L3 is a thin, strongly negative biconcave element located immediately behind the inferred stop. Its two radii, $R_5 = -0.538f$ and $R_6 = +0.494f$, are similar in absolute magnitude, so the negative power is distributed across both surfaces.

This element supplies the highest dispersion in the system and is the primary chromatic counterweight to L2 and L4. It also contributes the strongest negative Petzval terms in the design. Those terms partly compensate the positive Petzval contributions of L2 and the rear surface of L4, though the total Petzval sum remains positive.

### L4 — Biconvex Positive

$n_d = 1.65160$, $\nu_d = 58.5$. Glass: N-LAK7 (Schott). $f = 20.0$ mm.

L4 is the rear positive element of the triplet. The front radius $R_7 = +2.600f$ is weak, while the rear radius $R_8 = -0.42816f$ is strongly curved. Most of the element's power therefore comes from the rear surface facing the image side.

The glass is a lanthanum crown match to Schott N-LAK7. Its combination of moderately high index and relatively high Abbe number helps the rear element provide strong convergence without adding as much dispersion as a classical dense flint would. The design remains an ordinary achromatized wide-angle; no anomalous-partial-dispersion or secondary-spectrum correction glass is specified.

## Glass Identification

The patent provides only $n_d$ and $\nu_d$ values and does not name catalog glasses. Because this is a German Enna-Werk patent from the 1950s, Schott matches are the first catalog references checked. The following table reports catalog residuals as catalog value minus patent value.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog identification        | Catalog $n_d$ | Catalog $\nu_d$ | $\Delta n_d$ | $\Delta\nu_d$ | Status      |
| ------- | -----------: | -------------: | ----------------------------- | ------------: | --------------: | -----------: | ------------: | ----------- |
| L1      |      1.51821 |           65.2 | Unmatched 518/652 crown class |             — |               — |            — |             — | Class only  |
| L2      |      1.74400 |           44.9 | N-LAF2 (Schott), equivalent   |       1.74397 |           44.85 |     -0.00003 |         -0.05 | Close match |
| L3      |      1.67270 |           32.2 | SF5 (Schott)                  |       1.67270 |           32.21 |      0.00000 |         +0.01 | Match       |
| L4      |      1.65160 |           58.5 | N-LAK7 (Schott)               |       1.65160 |           58.52 |      0.00000 |         +0.02 | Match       |

L1 is deliberately left as a class rather than forced to a modern catalog name. Schott N-BK7 is near the patent value but not exact: N-BK7 is $n_d = 1.51680$, $\nu_d = 64.17$, giving residuals of $\Delta n_d = -0.00141$ and $\Delta\nu_d = -1.03$. That is close enough for class context, but not close enough to assert that the patent glass is N-BK7.

L2, L3, and L4 are much more secure. N-LAF2, SF5, and N-LAK7 reproduce the patent glass coordinates to normal transcription tolerance. For a historical lens, the exact melt may have been a predecessor or lead-containing formulation rather than the modern N-series glass, so the data file marks L2 as an equivalent and uses the exact patent $n_d$/$\nu_d$ values as authoritative.

## Focus Mechanism

The patent publishes only the infinity prescription and gives no variable spacing table. The production lens is a manual-focus unit-focus lens; the entire optical package moves with respect to the film plane.

The data file therefore models focus by varying only the final back-focus gap. The infinity BFD uses the independently traced paraxial value, 35.68017 mm, rather than the rounded patent value 35.67935 mm. For a 0.5 m close-focus distance measured from the image plane, the paraxial unit-focus solution gives a BFD of 38.60566 mm, an extension of 2.93 mm, and an approximate paraxial magnification of 0.084×. This close-focus setting is an inferred production model, not a patent-published focus state.

| Focus state | Final gap / BFD | Note                                    |
| ----------- | --------------: | --------------------------------------- |
| Infinity    |     35.68017 mm | Traced from rounded patent prescription |
| 0.5 m       |     38.60566 mm | Unit-focus finite-conjugate solution    |

## Conditional Expressions

Claim 1 defines the design by ranges for radii, axial thicknesses, air spaces, refractive indices, and Abbe numbers. The sole worked example satisfies all stated constraints. The radius inequalities are interpreted by absolute radius magnitude, while $R_4 = \infty$ is the explicit plano rear face of L2.

| Parameter       |   Patent value |       Claim range | Result   |
| --------------- | -------------: | ----------------: | -------- | ----------- | ---- |
| $               |            r_1 |                 $ | 1.98400f | 1.5f–2.5f   | Pass |
| $               |            r_2 |                 $ | 0.95718f | 0.8f–1.2f   | Pass |
| $               |            r_3 |                 $ | 0.46000f | 0.4f–0.55f  | Pass |
| $r_4$           |       $\infty$ |          $\infty$ | Pass     |
| $               |            r_5 |                 $ | 0.53800f | 0.45f–0.6f  | Pass |
| $               |            r_6 |                 $ | 0.49400f | 0.45f–0.55f | Pass |
| $               |            r_7 |                 $ | 2.60000f | 2f–4f       | Pass |
| $               |            r_8 |                 $ | 0.42816f | 0.35f–0.5f  | Pass |
| $d_1$           |         0.050f |        0.01f–0.2f | Pass     |
| $l_1$           |         0.760f |         0.7f–1.0f | Pass     |
| $d_2$           |         0.090f |        0.05f–0.2f | Pass     |
| $l_2$           |         0.100f |        0.05f–0.2f | Pass     |
| $d_3$           |         0.028f |       0.003f–0.1f | Pass     |
| $l_3$           |         0.060f |        0.03f–0.1f | Pass     |
| $d_4$           |         0.094f |        0.05f–0.2f | Pass     |
| $n_1$ / $\nu_1$ | 1.51821 / 65.2 | 1.44–1.60 / 45–75 | Pass     |
| $n_2$ / $\nu_2$ | 1.74400 / 44.9 | 1.65–1.80 / 35–55 | Pass     |
| $n_3$ / $\nu_3$ | 1.67270 / 32.2 | 1.62–1.75 / 27–37 | Pass     |
| $n_4$ / $\nu_4$ | 1.65160 / 58.5 | 1.60–1.75 / 50–65 | Pass     |

## Verification Summary

Independent paraxial verification was performed using a reduced-angle $y,n u$ ray trace and an ABCD matrix trace. Both methods give the same first-order results from the patent table.

| Quantity                                  | Patent / source value | Computed value | Scaled to 35 mm |
| ----------------------------------------- | --------------------: | -------------: | --------------: |
| EFL                                       |              1.00000f |    1.00002275f |     35.00080 mm |
| BFD                                       |              1.01941f |    1.01943351f |     35.68017 mm |
| Lens length, front vertex to last surface |                     — |      1.182000f |     41.37000 mm |
| Total track to traced image plane         |                     — |    2.20143351f |     77.05017 mm |
| Full diagonal field on 36×24 mm           |                     — |              — |          63.44° |

Element and group focal lengths are thick-lens / separated-group first-order values in air, not in-situ powers inside the full system.

| Component          | Normalized focal length | Scaled focal length |
| ------------------ | ----------------------: | ------------------: |
| L1                 |              -3.629227f |          -127.02 mm |
| L2                 |               0.618280f |            21.64 mm |
| L3                 |              -0.378700f |           -13.25 mm |
| L4                 |               0.571178f |            19.99 mm |
| Rear triplet L2–L4 |               0.972938f |            34.05 mm |

The surface-by-surface Petzval sum is $\sum \phi/(n n') = 0.254418$ in normalized units, corresponding to a Petzval radius of 3.931f, or 137.6 mm at 35 mm scale. The largest negative contributions come from the two surfaces of L3; the strong positive rear surface of L4 and the front surface of L2 leave the net sum positive.

Data-modeling choices not explicit in the patent are limited to the stop position, semi-diameters, and close-focus extension. The stop is inserted in the $l_2$ gap shown by the patent drawing; semi-diameters are inferred for visualization and checked against rim slope and cross-gap sag intrusion; close focus is represented as unit focus because no patent floating or internal-focus data are present.

## Design Heritage and Context

The Lithagon 35mm f/3.5 belongs to the first generation of West German retrofocus wide-angle lenses for SLR cameras. Its architecture is deliberately economical: a single negative front meniscus and a simple triplet, rather than the more complex six-element constructions used in faster later Lithagon variants. Contemporary and later Enna 35mm f/2.8 Lithagons used a more ambitious 6-element / 5-group design, while the f/3.5 version remained the simpler four-element branch.

The patent cites Merte, Angénieux, Schlegel, and British Patent 724,698 as prior art. In practical terms, the design sits in the same early postwar problem space as other SLR wide-angle objectives: maintaining enough rear clearance for a reflex mirror while keeping the lens small and affordable.

## Sources

- US 2,821,112, "Four-Membered Photographic Wide-Angle Objective," Johann Lautenbacher and Theodor Brendel, granted January 28, 1958. Uploaded patent file reviewed directly.
- SCHOTT Optical Glass Datasheet: N-LAF2, $n_d = 1.74397$, $\nu_d = 44.85$. <https://media.schott.com/api/public/content/fe209361fc3544ac8daa39a286c5f41e>
- SCHOTT Optical Glass Datasheet: SF5, $n_d = 1.67270$, $\nu_d = 32.21$. <https://media.schott.com/api/public/content/361f36fa1b3d42888086fe31ea4e8f33>
- SCHOTT Optical Glass Datasheet: N-LAK7, $n_d = 1.65160$, $\nu_d = 58.52$. <https://media.schott.com/api/public/content/3331df258b1845b2970d1d3447990753>
- SCHOTT Optical Glass Datasheet: N-BK7, $n_d = 1.51680$, $\nu_d = 64.17$. <https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5>
- allphotolenses.com, "Enna München Lithagon 35 mm f/3.5 Lens" — production specifications for focal length, aperture, close focus, filter size, and M42/Exakta variants. <https://allphotolenses.com/lenses/item/c_3363.html>
- lens-db.com, "Enna Munchen Lithagon 35mm F/3.5" and "Enna Munchen Lithagon 35mm F/3.5 C" — production mount and optical-layout summaries. <https://lens-db.com/enna-munchen-lithagon-35mm-f35/>
- Enrico Savazzi, "Enna Lithagon 24 mm, 28 mm and 35 mm" — observed 35mm f/3.5 barrel and optical-layout notes. <https://savazzi.net/photography/enna-lithagon.html>
- JAPB, "ENNA München Lithagon 35 mm f/2.8" data sheets — historical context for the Lithagon 35mm family and later six-element f/2.8 variants. <https://japb.net/gear/gear-review-index/ds_enna-lithagon-35f28-praktina/>
