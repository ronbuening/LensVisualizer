# smc Pentax-A★ 200mm F/4 Macro ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,666,260  
**Application Number:** 06/801,992  
**Filed:** November 25, 1985  
**Priority:** November 30, 1984 — JP 59-254653  
**Granted:** May 19, 1987  
**Inventor:** Takayuki Itoh  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Title:** Telephoto Macro Lens System  
**Embodiment analyzed:** Example 1, also reproduced as claim 5

The production lens identified for this prescription is the **smc Pentax-A★ 200mm F/4 Macro ED**. The match rests on convergent rather than single-factor evidence. The patent states a 200 mm f/4 telephoto macro for 35 mm still cameras, covering object distances from infinity to unity magnification. Example 1 is a ten-element, nine-group, all-spherical telephoto macro whose two lowest-dispersion positive elements are the nd = 1.49700, νd = 81.6 glasses in the front subgroup. Public lens references for the production A★ Macro likewise list 200 mm, f/4, ten elements in nine groups, ED glass, Pentax K mount, 1:1 macro capability, and a 0.55 m minimum focus distance.

Example 1 is the rigid fixed-rear embodiment. In the patent's focusing description, the first lens group moves toward the object while the rear group and the image plane remain stationary. Pentax later defines FREE as “Fixed Rear Element Extension,” in which only the front group shifts during focusing while the rear group remains stationary. This does not prove that every production detail equals Example 1, but it strongly favors Example 1 over Examples 3 and 4, both of which move rear components. Example 2 is the remaining ambiguity: it is also fixed-rear but varies the spacing inside the front group. Because public production literature does not disclose whether the A★ Macro floats the 1a–1b gap, the present data file transcribes the patent's Example 1 / claim 5 prescription, the rigid front-group extension design shown in Fig. 1.

The half-field angle in the patent is ω = 6.2°. For a 200 mm rectilinear lens, the 43.3 mm diagonal of the 135 still frame gives a computed half diagonal field of 6.17°, which is consistent with the patent field. At 1:1, the patent's front-vertex working distance is 302.2 mm. Adding the close-focus optical track of 244.09 mm gives a focal-plane-to-subject distance of 546.3 mm, which rounds to the commonly published 0.55 m production specification.

The design is all-spherical. The patent tabulates no aspherical coefficients. Its “non-spherical aberration” plots are field-curvature astigmatism plots, not aspheric departures.

## Optical Architecture

The top-level form is a positive-negative telephoto macro: a positive first lens group, followed by a negative second lens group. The first group is divided into subgroup 1a and subgroup 1b; the rear group is divided into negative subgroup 2a and the positive unitary lens 2b. The patent's claim language describes the same partition: subgroup 1a is three positive lenses followed by a negative meniscus; subgroup 1b is a cemented negative-positive doublet followed by another positive lens; subgroup 2a is a positive lens followed by a negative biconcave lens; 2b is a single positive element.

The verified paraxial group powers are:

| Unit            | Surfaces | Verified focal length |
| --------------- | -------: | --------------------: |
| Subgroup 1a     |      1–8 |            +149.63 mm |
| Subgroup 1b     |     9–13 |            +190.08 mm |
| First group     |     1–13 |            +104.93 mm |
| Subgroup 2a     |    14–17 |             −66.97 mm |
| Rear group      |    14–19 |            −270.10 mm |
| Unitary lens 2b |    18–19 |            +143.65 mm |

The characteristic design choice is not merely the telephoto split. It is the constrained aberration balance over the full conjugate range. The patent states that ordinary telephoto lenses are corrected over only a limited range and degrade when extended to high magnification. This design uses a strong positive front group, a large negative rear subgroup, and a controlled divergent surface in subgroup 1b so that the residual aberrations of the front group are cancelled by the rear group from infinity to unity magnification.

Focusing is by front-group extension. The first group moves object-ward; subgroup 2a, unitary lens 2b, and the image plane remain fixed. In the data file, the aperture stop is placed in the focusing gap just ahead of subgroup 2a, matching the Fig. 1 drawing. The patent does not tabulate the stop split, so the data file places STO 1.00 mm before surface 14 and varies the remaining part of the d13 spacing.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air at the d line. They should not be confused with the in-situ group powers above.

### L1 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.1. Glass: S-FSL5 / N-FK5 class fluor-crown. f = +383.9 mm.

L1 is the weakest of the front positive lenses. It begins the low-dispersion front-cell correction while bending the incoming bundle gently. Its two positive radii give a convex-to-object positive meniscus form, consistent with the patent's subgroup 1a description.

### L2 — Biconvex Positive ED element

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate. f = +109.9 mm.

L2 is the strongest single positive in subgroup 1a and one of the two ED elements. Most of its power is carried by the steep front surface because the rear surface is nearly flat at R = −2002.939 mm. This concentrates useful positive power while keeping the rear surface from adding unnecessary higher-order aberration.

### L3 — Positive Meniscus ED element, convex to object

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate. f = +143.7 mm.

L3 is the second ED positive in subgroup 1a. Splitting the low-dispersion positive power between L2 and L3 spreads the chromatic correction and avoids relying on a single steep ED element. Together with L1, these three positives give an average νd of 77.77, satisfying the patent's requirement that the positive lenses in subgroup 1a have an average Abbe number greater than 70.

### L4 — Negative Meniscus, convex to object

nd = 1.61340, νd = 43.8. Glass: BPM4 legacy Ohara 613/438 short flint class. f = −61.7 mm.

L4 closes subgroup 1a as the dispersing negative partner to the three preceding low-dispersion positives. Both radii are positive, so the element is a convex-to-object negative meniscus. The steep rear radius supplies most of the negative power and is the main front-cell counterweight to the ED positives.

### L5 + L6 — Cemented negative-positive doublet

Cemented net f = −306.8 mm.

L5 is a negative meniscus: nd = 1.61293, νd = 37.0, glass S-TIM3 / E-F3 class flint, f = −114.0 mm. Its object-side surface R9 = −59.122 mm is the divergent surface singled out in condition 4. Using the patent's definition, f1b = r1b / (N1b − 1) = −96.46 mm, so F/f1b = −2.073.

L6 is a positive meniscus: nd = 1.69680, νd = 55.5, glass S-LAL14 lanthanum crown, f = +189.0 mm. It is cemented directly to L5 at surface 10. The interface adds chromatic correction while leaving the doublet weakly negative overall. The doublet is therefore a correction unit more than a primary power unit.

### L7 — Biconvex Positive

nd = 1.73400, νd = 51.5. Glass: S-LAL59 lanthanum crown. f = +122.4 mm.

L7 is the final positive of subgroup 1b and the last element of the moving first group. Its high index supplies useful positive power with moderate curvature. The air gap after L7 is the focus gap between the moving front group and the stationary rear group.

### L8 — Positive Meniscus, concave to object

nd = 1.80518, νd = 25.4. Glass: S-TIH6 dense flint. f = +178.0 mm.

L8 begins subgroup 2a. It is a positive lens despite its concave-to-object meniscus form; the second, more strongly negative radius dominates the sign of the power. The very high index and strong dispersion are deliberate: L8 works against the following negative lanthanum-crown element to shape the rear-group chromatic and field behavior.

### L9 — Biconcave Negative

nd = 1.71300, νd = 53.8. Glass: S-LAL8 / N-LAK8 class lanthanum crown. f = −48.2 mm.

L9 provides most of subgroup 2a's negative power. The use of a high-index, relatively high-Abbe negative element lets the design obtain the needed telephoto divergence without an excessive Petzval penalty. It is the main contributor to the negative rear subgroup focal length of −66.97 mm.

### L10 — Biconvex Positive unitary lens 2b

nd = 1.51633, νd = 64.1. Glass: S-BSL7 / N-BK7 class borosilicate crown. f = +143.7 mm.

L10 is the positive unitary lens spaced behind subgroup 2a. The d17 separation of 39.83 mm is the l2a-2b term in condition 5. Its role is to re-converge the bundle toward the image plane while contributing to the field-curvature and distortion balance governed by the rear-group spacing.

## Glass Identification and Selection

The patent gives nd and νd, not manufacturer glass names. The corrected glass table therefore distinguishes exact catalog matches from class-equivalent identifications. Modern Ohara S-prefix entries are used where current Ohara data match the patent values; the older non-S names are retained where a current S-glass would be a misleading exact-name substitution.

| Element | Patent nd | Patent νd | Catalog / class identification        | Basis                                                |
| ------- | --------: | --------: | ------------------------------------- | ---------------------------------------------------- |
| L1      |   1.48749 |      70.1 | S-FSL5 (OHARA) / N-FK5 class          | Current Ohara S-FSL5 is 1.48749, νd 70.23            |
| L2      |   1.49700 |      81.6 | S-FPL51 (OHARA) / FCD1 class ED       | Current Ohara S-FPL51 is 1.49700, νd 81.54           |
| L3      |   1.49700 |      81.6 | S-FPL51 (OHARA) / FCD1 class ED       | Same as L2                                           |
| L4      |   1.61340 |      43.8 | BPM4 legacy Ohara 613/438 short flint | Better match than current S-NBM51-like substitutions |
| L5      |   1.61293 |      37.0 | S-TIM3 / E-F3 class 613/370 flint     | Current/legacy catalog code 613370                   |
| L6      |   1.69680 |      55.5 | S-LAL14 (OHARA)                       | Current Ohara 697555                                 |
| L7      |   1.73400 |      51.5 | S-LAL59 (OHARA)                       | Current Ohara 734515                                 |
| L8      |   1.80518 |      25.4 | S-TIH6 (OHARA)                        | Current Ohara 805254                                 |
| L9      |   1.71300 |      53.8 | S-LAL8 (OHARA) / N-LAK8 class         | Current Ohara 713539; patent rounds νd to 53.8       |
| L10     |   1.51633 |      64.1 | S-BSL7 (OHARA) / N-BK7 class          | Current Ohara 516641                                 |

The older draft's glass table over-specified several partial-dispersion deviations and used some loose class names where exact catalog matches were available. Those claims have been softened. The patent supports the statement that the design uses very low-dispersion glass in the front positive subgroup; it does not publish partial-dispersion data sufficient to assert a measured apochromatic correction.

## Focus Mechanism

**Type:** fixed-rear extension by first-group motion.

The focus variable is the air spacing after surface 13, between the moving first group and the fixed rear group. The patent's Example 1 table gives three d13 values:

| Focus state | Patent d13 total | First-group advance from infinity |
| ----------- | ---------------: | --------------------------------: |
| Infinity    |          7.53 mm |                           0.00 mm |
| 1:2         |         35.05 mm |                          27.52 mm |
| 1:1         |         62.58 mm |                          55.05 mm |

The data file splits this total gap into surface 13 to STO plus STO to surface 14. STO is fixed 1.00 mm ahead of surface 14, so the data file varies surface 13 from 6.53 mm at infinity to 61.58 mm at 1:1.

A finite-conjugate paraxial trace verifies the focusing kinematics. With d13 = 62.58 mm and the object 302.2 mm in front of surface 1, the image falls 76.83 mm behind the last surface at magnification −0.9997. Solving the same system for the fixed 76.9 mm image plane gives WD = 302.13 mm and magnification −1.0001. At the intermediate d13 = 35.05 mm, the fixed-image solution gives WD = 502.11 mm and magnification −0.5001.

The first-group travel also matches the patent's stated scaling. F/F1 = 1.906, so the movement needed for front-group focus is approximately the reciprocal square of that ratio: 1 / 1.906² = 0.275. Applied to 200 mm unit-magnification whole-lens extension, this predicts 55.0 mm of travel, matching the 55.05 mm d13 increase.

## Chromatic Correction Strategy

The chromatic correction is front-loaded. L1, L2, and L3 are all low-dispersion positives, and L2/L3 are ED fluorophosphate-class glasses. L4 then supplies a higher-dispersion negative component in subgroup 1a. That is the direct implementation of the patent's claim that higher performance is obtained by using super-low-dispersion glass in the positive elements on the object side of the first subgroup.

Subgroup 1b and subgroup 2a then trim the residual color. L5/L6 form a flint-lanthanum crown cemented correction pair. L8/L9 form a dense-flint positive and lanthanum-crown negative pair inside the strongly negative rear subgroup. The result is not documented here as apochromatic in the strict three-line sense, because the patent does not publish the partial-dispersion or line-index data required to verify that claim. It is more precise to describe the design as a highly corrected ED telephoto macro with secondary-spectrum reduction inferred from the two ED positive elements.

## Conditional Expressions

The patent's five design conditions were recomputed from the corrected Example 1 prescription. The focal length F below is the patent's 200 mm normalization.

| #   | Patent condition       | Re-derived value | Patent value | Result |
| --- | ---------------------- | ---------------: | -----------: | ------ |
| 1   | 1.0 < F/F1a < 1.8      |            1.337 |        1.336 | Pass   |
| 2   | 1.5 < F/F1 < 2.3       |            1.906 |        1.906 | Pass   |
| 3   | −3.7 < F/F2a < −2.5    |           −2.986 |       −2.986 | Pass   |
| 4   | −2.5 < F/f1b < −0.8    |           −2.073 |       −2.073 | Pass   |
| 5   | 0.15 < l2a-2b/F < 0.35 |            0.199 |        0.199 | Pass   |

Here F1a is subgroup 1a, F1 is the whole first group, F2a is subgroup 2a, f1b is the single-surface focal length of R9 by the patent definition r1b/(N1b−1), and l2a-2b is d17 = 39.83 mm.

## Verification Summary

The prescription was rechecked against the patent page images and then traced independently. Two OCR-sensitive entries are load-bearing. Surface 8 is +31.143 mm, not +31.43 mm; using +31.43 mm lowers the computed system EFL to about 196.33 mm and the BFL to about 73.32 mm. The corrected +31.143 mm value returns the patent's 200 mm / 76.9 mm system. Surface 13 is −226.517 mm in the final trace.

Verified paraxial results from the corrected prescription:

| Quantity                                          |             Result |
| ------------------------------------------------- | -----------------: |
| Effective focal length                            |         199.980 mm |
| Back focal distance                               |          76.866 mm |
| Petzval sum Σφ/(n·n′)                             | 3.1299 × 10⁻⁴ mm⁻¹ |
| Petzval radius                                    |         +3195.0 mm |
| Close-focus image distance at WD = 302.2 mm       |           76.83 mm |
| Close-focus magnification at WD = 302.2 mm        |            −0.9997 |
| Close-focus focal-plane-to-subject reconstruction |           546.3 mm |

The data file's semi-diameters are not patent data. They are physically constrained estimates for rendering and ray visualization. They were checked for rim slope, element front/rear semi-diameter ratio, element edge thickness, and cross-gap sag intrusion. The largest spherical height ratio is at surface 8, with sd/|R| ≈ 0.706, below the project limit. The closest practical clearance is the inferred STO-to-surface-14 split at the stop rim; the selected stop position and semi-diameter leave approximately 0.45 mm of axial clearance at the rim.

## Design Heritage and Context

The patent is explicitly a response to the limitations of ordinary telephoto lenses used at macro distances. The background section says conventional telephotos are normally corrected only to about 1/10 magnification, while unity magnification with accessory extension lies outside their intended correction range. Normal and semi-telephoto macros can reach 1:1, but with shorter working distance. This design solves the problem by combining a true telephoto power split with first-group extension and ED front-group correction, producing life-size coverage with roughly 0.3 m front-vertex working distance.

## Sources

- US Patent 4,666,260, “Telephoto Macro Lens System,” Takayuki Itoh, Asahi Kogaku Kogyo Kabushiki Kaisha, granted May 19, 1987. Primary source for prescription, conditions, focus method, and claims.
- Ricoh/Pentax, _PENTAX K-mount Lens & Accessories_, definition of FREE as Fixed Rear Element Extension and general ED terminology.
- The K-Mount Page, “A\* 200/4 Macro ED,” production lens dimensions and specifications.
- Kamerastore, “Pentax 200mm f4 SMC ED Pentax-A\* Macro,” production element/group count, minimum focus distance, production period, and basic physical data.
- Lens-DB, “smc Pentax-A\* 200mm F/4 ED Macro,” production focal length, aperture, lens construction, mount, and field angle.
- OHARA Corporation product tables and datasheets for S-FSL5, S-FPL51, S-LAL14, S-LAL59, S-TIH6, S-LAL8, and S-BSL7.
- OHARA legacy / optical-glass index data for BPM4 and S-TIM3 where the patent values predate direct modern S-prefix equivalents.
