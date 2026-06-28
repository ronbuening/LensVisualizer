## Patent Reference and Design Identification

**Patent:** US 2,745,315
**Filed:** July 19, 1951
**Granted:** May 15, 1956
**Priority:** Germany, July 26, 1950
**Inventor:** Theodor Brendel
**Assignee:** Agfa Camera-Werk Aktiengesellschaft, Munich, Germany
**Title:** High Speed Corrected Objective Comprising Four Air Spaced Members
**Embodiment analyzed:** Example 1

US 2,745,315 describes a high-speed photographic objective of the double-Gauss family: two convergent outer singlets and two negative cemented inner menisci, with both cemented interfaces specified as plane surfaces. The patent presents three worked numerical examples; Example 1 is the embodiment transcribed here.

Example 1 is the best match to the production Agfa Solagon 50mm f/2 for these reasons:

1. The patent example is a six-element, four-group lens, matching the Solagon 50mm f/2 construction described in contemporary Agfa camera literature.
2. The patent gives the example at relative aperture F:2 and equivalent focal length $f = 100\;\text{mm}$. Scaling all radii and spacings by 0.5 gives a 50.08 mm computed focal length, consistent with the 50 mm production lens.
3. Example 1 is the only worked example in the patent satisfying the symmetric glass arrangement of Claim 2: $n_1 = n_6$, $n_2 = n_5$, and $n_3 = n_4$.
4. The Agfa Super Silette Solagon manual describes the camera as a 24 × 36 mm camera supplied with a six-element 1:2.0/50 mm Agfa Solagon lens, matching the scaled patent design.
5. The patent's aberration plots extend to 25° half-field. At the scaled computed focal length this corresponds to an image height of 23.35 mm and an image circle of 46.71 mm, larger than the 43.27 mm diagonal of the 24 × 36 mm frame.

The data file therefore uses Example 1, uniformly scaled by 0.5 from the patent's $f=100\;\text{mm}$ normalization. The aperture stop position is not given numerically in the patent table; it is inferred from Fig. 1 and placed at the midpoint of the central air space $l_2$.

## Optical Architecture

The design is a modified double-Gauss objective with six elements in four air-spaced groups. Its power distribution is positive–negative–negative–positive: a positive front singlet, a weak negative cemented front meniscus, a weak negative cemented rear meniscus, and a positive rear singlet. The two cemented menisci turn their concave surfaces toward the central stop, as stated in the patent.

The distinctive constructional point is the use of plane cemented surfaces in both inner doublets. Earlier high-speed double-Gauss designs often used curved cemented interfaces to obtain correction, but Brendel's patent specifically claims that comparable correction can be obtained with flat cemented junctions when the overall length, central air spacing, and glass-index relationships are constrained.

At patent scale, the computed equivalent focal length is 100.1697 mm and the first-to-last-surface length is 62.81 mm. At production scale, these become 50.0848 mm and 31.405 mm respectively. The computed back focal distance from the last optical surface is 68.6036 mm at patent scale, or 34.3018 mm after scaling.

The aperture stop lies in the large central air space between surfaces R5 and R6. In the data file this 10.44 mm scaled space is split equally into 5.22 mm before and after the stop. The resulting physical stop semi-diameter is 8.587 mm at the scaled focal length, giving an entrance-pupil semi-diameter of 12.521 mm and F/2.0 by paraxial trace.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

$n_d = 1.6230$, $\nu_d = 58.1$. Glass: N-SK15 / SK15 class (Schott). Standalone $f = +82.2\;\text{mm}$ at production scale.

L1 is the front convergent singlet. Both surfaces have positive radius in the patent sign convention, with the front surface considerably stronger than the rear surface. It admits the F/2 marginal bundle and begins convergence before the first narrow air space.

Its low-dispersion dense-crown character is important because this element sits far from the stop and therefore has leverage over coma and lateral color. The index is also tightly coupled to the patent's index condition requiring the outer singlets and the divergent elements of the inner menisci to lie close in refractive index.

### L2 — Positive Plano-Convex Element of the Front Cemented Meniscus

$n_d = 1.6667$, $\nu_d = 48.4$. Glass: 667/484 barium flint; S-BAH11 / BaF11 cross-reference class. Standalone $f = +25.4\;\text{mm}$ at production scale.

L2 is the convergent element of the front cemented doublet. It has a strongly curved convex front surface and a plane rear cemented surface. In isolation it is the strongest positive component in the lens.

The elevated index of L2 relative to L1 and L3 is one of the patent's essential conditions. In Example 1, $n_2-n_3 = 0.0413$ and $n_2-n_1 = 0.0437$, both just above the lower limit of 0.04. This gives enough index separation for a plane cemented junction to remain useful while avoiding a large departure from the index balance of the neighboring glasses.

### L3 — Negative Plano-Concave Element of the Front Cemented Meniscus

$n_d = 1.6254$, $\nu_d = 35.6$. Glass: unmatched 625/356 flint, with CDGM F6/H-F6 and Schott F7 as class candidates. Standalone $f = -18.8\;\text{mm}$ at production scale.

L3 is the negative element of the front cemented meniscus. Its plane front surface is cemented to L2; its strongly concave rear surface faces the central stop. This surface supplies most of the front meniscus group's negative power and contributes a large negative Petzval term that offsets the positive Petzval contributions of the outer singlets.

### L4 — Negative Concave-Plano Element of the Rear Cemented Meniscus

$n_d = 1.6254$, $\nu_d = 35.6$. Glass: unmatched 625/356 flint, with CDGM F6/H-F6 and Schott F7 as class candidates. Standalone $f = -23.4\;\text{mm}$ at production scale.

L4 is the rear-half counterpart to L3. Its concave front surface faces the stop and its rear surface is plane, forming the cemented junction with L5. The glass is identical to L3 in Example 1, satisfying the symmetric-glass condition in Claim 2.

Although L4 and L3 use the same glass, their radii and thicknesses are not mirror images. L4 is weaker than L3 in standalone focal length, contributing to the deliberate front-rear asymmetry of the design.

### L5 — Positive Plano-Convex Element of the Rear Cemented Meniscus

$n_d = 1.6667$, $\nu_d = 48.4$. Glass: 667/484 barium flint; S-BAH11 / BaF11 cross-reference class. Standalone $f = +32.1\;\text{mm}$ at production scale.

L5 is cemented to L4 at a plane front surface and exits through a convex rear surface. It supplies the positive component of the rear cemented meniscus and balances the negative power of L4 without introducing a curved cemented interface.

Its glass matches L2 exactly in the patent table. The pair L2/L5 therefore provides the higher-index convergent components of the two cemented menisci, while L3/L4 provide the lower-index, higher-dispersion divergent components.

### L6 — Positive Biconvex Rear Singlet

$n_d = 1.6230$, $\nu_d = 58.1$. Glass: N-SK15 / SK15 class (Schott). Standalone $f = +47.3\;\text{mm}$ at production scale.

L6 is the rear convergent singlet. It is strongly asymmetric: the front surface has a very long positive radius and the rear surface has a much stronger negative radius. Most of L6's refractive power is therefore concentrated at the final surface.

This element is stronger than L1, even though both use the same glass. The rear singlet is the largest contributor to the rear-half positive power and is responsible for the comparatively long computed back focal distance of 34.30 mm after scaling.

## Glass Identification and Selection

The patent publishes only $n_d$ and $\nu_d$ values, not glass maker names. The following identifications therefore distinguish direct patent values from catalog-equivalent labels. Catalog names should be read as close modern or cross-reference classes, not as proof of the original Agfa melt supplier.

| Patent value               | Six-digit code | Catalog-equivalent identification                         | Elements | Comment                                                                                 |
| -------------------------- | -------------: | --------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| $n_d=1.6230$, $\nu_d=58.1$ |        623/581 | N-SK15 / SK15 class (Schott)                              | L1, L6   | Close match to Schott N-SK15 and Ohara S-BSM15.                                         |
| $n_d=1.6667$, $\nu_d=48.4$ |        667/484 | S-BAH11 / BaF11 cross-reference class                     | L2, L5   | Close match to Ohara S-BAH11, CDGM H-ZBaF16, and legacy BaF11/BAFN11 cross-references.  |
| $n_d=1.6254$, $\nu_d=35.6$ |        625/356 | Unmatched flint; CDGM F6/H-F6 and Schott F7 class candidates | L3, L4   | No coefficient-backed project catalog row is available; the data keeps this explicit instead of asserting a resolved glass. |


The glass palette is materially important. The inner negative elements are ordinary high-dispersion flints near 625/356, while the positive elements in the cemented menisci are barium flints near 667/484. The design is a well-corrected achromat, not an apochromat. No ED, fluorophosphate, or anomalous partial-dispersion glass is specified by the patent.

The Petzval sum was recomputed surface by surface using $\Phi/(n n')$, where $\Phi=(n'-n)/R$. The result is $+0.0018877\;\text{mm}^{-1}$ at patent scale, corresponding to a Petzval radius of about 529.7 mm, or 5.29 times the patent focal length. The two negative inner menisci provide most of the compensating negative Petzval contribution.

## Focus Mechanism

The patent gives an infinity-focus prescription only. It does not publish close-focus variable spacing, floating groups, or finite-conjugate examples.

Production implementations in Agfa fixed-lens cameras use unit focusing. The optical assembly translates as a rigid unit and the internal air spaces remain constant. The patent does not establish a production minimum focus distance. Agfa camera literature shows body-dependent close-focus scales; the Karat guide states that the Karat normally focuses down to 3 ft, while the Super Silette Solagon manual publishes depth-of-field tables beginning at 4 ft. The data file therefore uses 0.9144 m (3 ft) only as a representative unit-focus endpoint, not as a patent-published optical state.

For LensVisualizer, unit focus is represented by changing only the final back-focus gap. At the scaled focal length, the infinity back focal distance is 34.3018 mm. Solving the thick-lens paraxial conjugate equation for a 0.9144 m object-to-film distance gives a close-focus back distance of 37.3720 mm and an approximate magnification of 0.061×.

## Conditional Expressions

The patent's dimensional and index conditions were re-evaluated from the Example 1 prescription at patent scale.

| Condition                  |                       Required range | Example 1 value | Status |
| -------------------------- | -----------------------------------: | --------------: | ------ |
| Overall length / $f$       |                         0.55 to 0.67 |           0.627 | Pass   |
| Central air space $l_2/f$  | greater than 0.20 and less than 0.25 |          0.2088 | Pass   |
| $n_1$, $n_3$, $n_4$, $n_6$ |                         1.62 to 1.72 | 1.6230 / 1.6254 | Pass   |
| $n_1-n_3$                  |                       −0.01 to +0.01 |         −0.0024 | Pass   |
| $n_4-n_6$                  |                       −0.01 to +0.01 |         +0.0024 | Pass   |
| $n_2-n_3$                  |                         0.04 to 0.10 |         +0.0413 | Pass   |
| $n_2-n_1$                  |                         0.04 to 0.10 |         +0.0437 | Pass   |
| $n_5-n_4$                  |                         0.04 to 0.10 |         +0.0413 | Pass   |
| $n_5-n_6$                  |                         0.04 to 0.10 |         +0.0437 | Pass   |
| Claim 2 glass symmetry     |      $n_1=n_6$, $n_2=n_5$, $n_3=n_4$ |           exact | Pass   |

The final four index-difference rows check the convergent cemented elements both against the divergent elements of the cemented menisci and against the adjacent outer singlets, as described in the patent text.

## Verification Summary

All paraxial quantities in this analysis were recomputed directly from the patent Example 1 table with a Python $y,n u$ trace.

| Quantity                |  Patent / source value |            Computed at patent scale |     Scaled data-file value |
| ----------------------- | ---------------------: | ----------------------------------: | -------------------------: |
| Equivalent focal length |                 100 mm |                         100.1697 mm |                 50.0848 mm |
| Relative aperture       |                    F:2 |              F:2.0 by selected stop |                      F:2.0 |
| R1-to-R10 length        | 0.55–0.67$f$ condition |                            62.81 mm |                  31.405 mm |
| Central air space $l_2$ |               20.88 mm |                            20.88 mm |                   10.44 mm |
| Back focal distance     |          not tabulated |                          68.6036 mm |                 34.3018 mm |
| Petzval sum             |          not tabulated |                     +0.0018877 mm⁻¹ |            +0.0037754 mm⁻¹ |
| Petzval radius          |          not tabulated |                            529.7 mm |                   264.9 mm |
| 25° half-field coverage |      patent aberration plots | 46.71 mm semi-image height / 93.42 mm image circle | 23.35 mm semi-image height / 46.71 mm image circle |

Standalone focal lengths at patent scale are L1 +164.3 mm, L2 +50.7 mm, L3 −37.7 mm, L4 −46.7 mm, L5 +64.3 mm, and L6 +94.5 mm. At production scale those values are halved in the data file.

## Design Heritage and Context

The Solagon 50mm f/2 belongs to the post-war family of high-speed double-Gauss lenses used in 35 mm fixed-lens cameras. Its general architecture is conventional, but the plane cemented interfaces are a practical manufacturing choice: the patent emphasizes that flat cemented surfaces ease serial production tolerances while retaining a high correction level.

The patent cites earlier double-Gauss and related high-speed objective work by Merte, Lee, Warmisham, and Baker. Brendel's contribution is not a new lens family so much as a manufacturable variant of a mature high-speed Gaussian form, with tight index balancing and compact length constraints.

## Sources

1. US 2,745,315, Theodor Brendel, "High Speed Corrected Objective Comprising Four Air Spaced Members," filed July 19, 1951, granted May 15, 1956.
2. Agfa Super Silette Solagon instruction manual, Agfa Aktiengesellschaft Camera-Werk München, English edition 1277 engl. - 1258.
3. Agfa Karat Guide, close-focus and supplementary-lens guidance.
4. SCHOTT Optical Glass Datasheet Collection, N-SK15 inquiry glass data.
5. OHARA S-BAH11 optical glass datasheet.
6. HOYA Glass Cross Reference Index, six-digit glass-code cross-reference table.
7. CDGM optical glass database, F-family table for F6/H-F6 and F13/H-F13 comparison.
