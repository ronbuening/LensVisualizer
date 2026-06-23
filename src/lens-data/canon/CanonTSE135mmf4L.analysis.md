## Patent Reference and Design Identification

**Patent:** JP 2018-132674 A  
**Application Number:** JP 2017-026625  
**Filed:** 2017-02-16  
**Published:** 2018-08-23  
**Inventor:** Mizuma Akira (水間 章)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** 撮像光学系及びそれを有する撮像装置 (Imaging optical system and imaging apparatus having the same)  
**Embodiment analyzed:** Example 1 / Numerical Data 1 (数値データ1)

JP 2018-132674 A discloses a macro-capable imaging system intended to reduce focus-induced aberration variation, especially chromatic variation, from infinity to close focus. The system keeps the positive first group L1 and the negative rear group RF/L4 fixed, while a negative group FN/L2 moves imageward and a positive group FP/L3 moves objectward during focusing. The patent identifies the negative lens FPn in the positive moving group as the principal glass-selection constraint and defines the partial-dispersion conditions around that element.

Example 1 is the prescription transcribed in the paired data file. It matches the Canon TS-E 135mm f/4L Macro by convergent evidence: the patent gives f = 133.00 mm, F/4.05, half-field 14.19°, image height 33.63 mm, BF = 78.33 mm, and a close-focus tabulation at β = -0.5. Canon's production specification gives a 135 mm f/4 tilt-shift macro lens, 11 elements in 7 groups, 0.486 m closest focusing distance, 0.50× maximum magnification, 82 mm filter size, ±10° tilt, ±12 mm shift, and a 67.2 mm image circle. The patent's image height of 33.63 mm corresponds to a 67.26 mm image circle, effectively identical to the production coverage.

The date evidence is also consistent. The patent was filed on 2017-02-16; Canon announced the production TS-E 135mm f/4L Macro on 2017-08-29 and released it on 2017-12-22, before the Japanese patent publication date.

The patent contains no aspherical surface rows and no aspherical coefficient table for Example 1. The production specification confirms two UD elements but does not require any aspherical surface to reproduce this prescription. The data file therefore keeps `asph: {}` and models the lens as all-spherical.

## Optical Architecture

The design is a long-back-focus, perspective-control telephoto macro objective with a positive-negative-positive-negative group-power sequence: L1 (+) / L2-FN (-) / aperture stop / L3-FP (+) / L4-RF (-). The patent counts the stop as its own group in the group focal-length table, but the powered glass architecture consists of four powered groups and seven air-separated sub-groups: G1 | G2-G3 | G4 | G5-G6 | G7 | G8-G9 | G10-G11.

L1 is a fixed positive collector group. L2 is the negative moving focus group FN. The aperture stop remains fixed. L3 is the positive moving focus group FP. L4 is the fixed negative rear field-corrector group. The system is not telephoto-compact in the strict TL/EFL sense: the patent total track is 183.76 mm for a 133.00 mm focal length, giving TL/EFL ≈ 1.38. The rear negative group is better understood as a long-back-focus and field-correction group for a large image circle and tilt-shift mechanism, not as a compaction device.

At infinity, the independently verified paraxial EFL is 132.9709 mm, BFD is 78.3044 mm, and total first-surface-to-image distance is 183.77 mm. The patent group focal lengths are L1 = +104.40 mm, L2/FN = -71.94 mm, stop = ∞, L3/FP = +42.19 mm, and L4/RF = -56.59 mm.

Focus is a double-floating mechanism. As the lens focuses from infinity to β = -0.5, L2/FN moves toward the image and L3/FP moves toward the object. The first group, stop, and rear group remain fixed, preserving barrel length and keeping working distance longer than a front-unit focus design.

## Element-by-Element Analysis

The element focal lengths listed below are standalone in-air focal lengths for the individual glass pieces. Cemented-doublet and group focal lengths are separate in-situ values computed with the actual cement interfaces and group spacings.

### G1 — Biconvex Positive

nd = 1.65844, νd = 50.9. Glass: S-BSM25 (OHARA). f = +100.3 mm.

G1 is the large front positive element of the fixed collector group. The patent describes L1 as beginning with a biconvex positive lens G1, which is consistent with R1 = +82.416 mm and R2 = -318.233 mm. Most of its refractive work is on the front surface, while the weaker rear surface moderates spherical aberration and keeps the front group from becoming excessively thick.

### G2 + G3 — Cemented Doublet in L1

**G2 — Biconvex Positive UD element.** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +71.4 mm.  
**G3 — Biconcave Negative.** nd = 1.91082, νd = 35.3. Glass: TAFD35L-class dense lanthanum flint (HOYA equivalent; supplier uncertain). f = -59.6 mm.

The rear sub-group of L1 is a cemented achromatizing doublet. G2 is the positive low-dispersion member and corresponds to the patent's L1p element governed by conditions (11)-(13). It is one of the two production UD elements. G3 provides high index and substantially greater dispersion, allowing the doublet to correct longitudinal color without forcing excessive group power.

The standalone powers of G2 and G3 are strong, but the cemented doublet has a weak in-situ net focal length of approximately -695 mm. That weak negative net power is deliberate: L1 remains a +104 mm positive group while the doublet supplies chromatic balancing.

No public OHARA glass exactly matches G3's nd/νd pair as closely as HOYA TAFD35L. CDGM H-ZLaF4LB is also close. The data file labels this element as `TAFD35L (HOYA equivalent; supplier uncertain)` rather than assigning a specific Canon supplier.

### G4 — Negative Meniscus, Convex to Object

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA). f = -54.8 mm.

G4 is the standalone front element of the moving negative focus group FN. Its object-side convex meniscus form uses a moderately curved front surface and a much stronger rear surface to generate negative power. During close focusing this element moves imageward with the rest of L2.

### G5 + G6 — Cemented Doublet in L2 / FN

**G5 — Biconcave Negative.** nd = 1.65412, νd = 39.7. Glass: S-NBH5 (OHARA). f = -42.3 mm.  
**G6 — Positive Meniscus, convex to object.** nd = 2.00100, νd = 29.1. Glass: S-LAH99 (OHARA). f = +36.0 mm.

G5-G6 is the rear sub-group of the negative moving focus group. Its net focal length is approximately +248 mm, so it does not supply the main negative power of L2; that work falls primarily to G4. The doublet instead controls chromatic and higher-order aberration variation in the moving FN group.

G6 is the positive FNp element identified by the patent and governed by conditions (8)-(10). It is an unusual positive element because it combines very high index with high dispersion. This lets the moving negative group keep chromatic variation under control without growing the group diameter.

### G7 — Biconvex Positive

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA). f = +61.9 mm.

G7 is the standalone front element of the moving positive focus group FP. It collects the diverging beam emerging from L2 and begins the rear convergence. The group motion is objectward at close focus, so G7's position changes with object distance.

### G8 + G9 — Cemented Doublet in L3 / FP

**G8 — Biconvex Positive UD element.** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +53.8 mm.  
**G9 — Negative Meniscus, convex to image.** nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA). f = -91.1 mm.

The G8-G9 cemented doublet is the chromatic-control core of the positive moving focus group. G8 is the second UD element in the design and corresponds to FPp in conditions (4)-(6). G9 is the negative FPn element and is the most dispersive element in the system; it is governed by the patent's principal conditions (1)-(3).

The pair's net focal length is approximately +128 mm. Together with G7 it yields the L3/FP focal length of +42.19 mm. Because L3 moves during focusing, this doublet is central to suppressing color shift and field-curvature variation at the 0.5× close-focus state.

### G10 + G11 — Cemented Rear Field-Corrector Doublet

**G10 — Positive Meniscus, convex to image.** nd = 1.95375, νd = 32.3. Glass: S-LAH98 (OHARA). f = +72.2 mm.  
**G11 — Biconcave Negative.** nd = 1.65160, νd = 58.5. Glass: S-LAL7 (OHARA). f = -32.5 mm.

L4 is the stationary negative rear group. The doublet has a net focal length of -56.59 mm and serves as the rear field corrector, supporting the large 67 mm-class image circle required for shift movements. Its high-index positive first member and lower-dispersion negative second member are arranged for rear-field correction rather than as a simple conventional achromat.

The G11 prescription value nd = 1.65160, νd = 58.5 matches the S-LAL7/S-LAL7Q code family. The data file uses S-LAL7 because OHARA introduced S-LAL7Q after the patent filing and after the production lens announcement; the optical calculation is unaffected because the two glasses share essentially the same d-line index and Abbe number.

## Glass Identification and Selection

The prescription uses nine distinct glass types across eleven elements. The identifications below are catalog matches to the published nd/νd pairs and line-index behavior, not proof of Canon's actual melt supplier.

| Element | Catalog identification          |      nd |   νd | θgF class                   | Role                                 |
| ------- | ------------------------------- | ------: | ---: | --------------------------- | ------------------------------------ |
| G1      | S-BSM25 (OHARA)                 | 1.65844 | 50.9 | near normal                 | front dense crown collector          |
| G2      | S-FPL51 (OHARA)                 | 1.49700 | 81.5 | strongly positive anomalous | UD L1p element                       |
| G3      | TAFD35L class (HOYA equivalent) | 1.91082 | 35.3 | near normal                 | high-index negative L1 partner       |
| G4      | S-LAH55V (OHARA)                | 1.83481 | 42.7 | negative deviation          | moving FN negative meniscus          |
| G5      | S-NBH5 (OHARA)                  | 1.65412 | 39.7 | slight negative deviation   | moving FN short-flint member         |
| G6      | S-LAH99 (OHARA)                 | 2.00100 | 29.1 | positive deviation          | moving FNp high-index positive       |
| G7      | S-LAL14 (OHARA)                 | 1.69680 | 55.5 | negative deviation          | moving FP positive element           |
| G8      | S-FPL51 (OHARA)                 | 1.49700 | 81.5 | strongly positive anomalous | UD FPp element                       |
| G9      | S-NBH56 (OHARA)                 | 1.85478 | 24.8 | positive deviation          | moving FPn high-dispersion negative  |
| G10     | S-LAH98 (OHARA)                 | 1.95375 | 32.3 | slight positive deviation   | rear positive field-corrector member |
| G11     | S-LAL7 (OHARA)                  | 1.65160 | 58.5 | slight negative deviation   | rear negative field-corrector member |

The chromatic logic spans three powered zones. L1 uses S-FPL51 against a high-index lanthanum flint to control front-group color. L2 uses a short flint and an ultra-high-index positive element so that the negative focus group can move without excessive chromatic variation. L3 uses the second S-FPL51 member against S-NBH56, satisfying the patent's tight conditions on the positive FPp and negative FPn glasses.

## Focus Mechanism

The lens uses double floating focus. L1, the aperture stop, and L4 remain stationary. L2/FN moves imageward, and L3/FP moves objectward.

| Gap    | Patent surface | Infinity | β = -0.5 |    Change |
| ------ | -------------: | -------: | -------: | --------: |
| L1-L2  |             d5 |  4.04 mm | 19.81 mm | +15.77 mm |
| L2-STO |            d10 | 22.15 mm |  6.37 mm | -15.78 mm |
| STO-L3 |            d11 | 19.94 mm | 11.39 mm |  -8.55 mm |
| L3-L4  |            d16 |  4.35 mm | 12.89 mm |  +8.54 mm |

The variable-gap sum is 50.48 mm at infinity and 50.46 mm at close focus, a 0.02 mm rounding residual. The fixed overall barrel length is consistent with a tilt-shift macro design in which mechanical rigidity matters.

A y-ν paraxial trace of the close-focus gap state, with the patent image plane fixed at the original d19 distance, gives magnification -0.4999 and subject-to-image-plane distance 487.7 mm. This agrees with Canon's official 0.486 m closest focusing distance within patent rounding and mechanical measurement convention.

## Chromatic Correction Strategy

The patent defines θgF using the g, F, d, and C Fraunhofer-line indices and compares each selected glass against the normal line θgF = -0.001682 × νd + 0.6438. Example 1 satisfies the specified constraints for FPn, FPp, FNp, and L1p.

The strongest positive anomalous partial-dispersion elements are G2 and G8, both S-FPL51. G2 sits in the fixed front group, while G8 sits in the moving positive focus group. This distribution is significant: one UD element stabilizes the front collector group, and the other travels with FP so that close-focus color variation is corrected in the moving relay rather than left to a fixed rear corrector alone.

The high-dispersion G9 is not a conventional opposite-sign anomalous partner to S-FPL51; it also lies above the patent's normal line. The correction is therefore achieved through the large Abbe-number separation and the specified θgF limits rather than through a simple ED-crown / negative-anomalous-flint pairing.

## Conditional Expressions

The patent's Table 1 gives the following Example 1 values. Independent computation from the prescription reproduces the focal-length ratios and confirms that all conditions are satisfied.

|  No. | Condition                           | Example 1 value | Patent limit      | Status |
| ---: | ----------------------------------- | --------------: | ----------------- | ------ |
|  (1) | νdFPn                               |           24.80 | < 25.0            | pass   |
|  (2) | θgFFPn                              |           0.612 | < 0.615           | pass   |
|  (3) | θgFFPn > -0.001682 × νdFPn + 0.6438 |   0.612 > 0.602 | above normal line | pass   |
|  (4) | νdFPp                               |           81.54 | > 65.0            | pass   |
|  (5) | θgFFPp                              |           0.538 | < 0.55            | pass   |
|  (6) | θgFFPp > -0.001682 × νdFPp + 0.6438 |   0.538 > 0.507 | above normal line | pass   |
|  (7) | fFN / fFP                           |           -1.71 | -3.5 < x < -1.5   | pass   |
|  (8) | νdFNp                               |           29.13 | < 30.0            | pass   |
|  (9) | θgFFNp                              |           0.599 | > 0.59            | pass   |
| (10) | θgFFNp > -0.001682 × νdFNp + 0.6438 |   0.599 > 0.595 | above normal line | pass   |
| (11) | νdL1p                               |           81.54 | > 65.0            | pass   |
| (12) | θgFL1p                              |           0.538 | < 0.55            | pass   |
| (13) | θgFL1p > -0.001682 × νdL1p + 0.6438 |   0.538 > 0.507 | above normal line | pass   |
| (14) | f1 / f                              |           0.785 | < 2.0             | pass   |
| (15) | sk / f                              |           0.589 | > 0.4             | pass   |

Conditions (4)-(6) and (11)-(13) have identical numerical values in Example 1 because both FPp and L1p use S-FPL51. They are nevertheless separate elements in separate moving/fixed contexts.

## Verification Summary

The prescription was checked directly against Numerical Data 1 in the patent and retraced independently using reduced-angle y-ν matrices and ABCD checks. Values below are d-line paraxial values at infinity unless noted.

| Parameter                 |    Computed |      Patent value |  Residual |
| ------------------------- | ----------: | ----------------: | --------: |
| Effective focal length    | 132.9709 mm |         133.00 mm | -0.029 mm |
| Back focal distance       |  78.3044 mm |          78.33 mm | -0.026 mm |
| Total track               |   183.77 mm |         183.76 mm |  +0.01 mm |
| Half-field                |      14.19° |            14.19° |   matched |
| Design F-number           |        4.05 |              4.05 |   matched |
| L1 focal length           | +104.407 mm |        +104.40 mm | +0.007 mm |
| L2 / FN focal length      |  -71.938 mm |         -71.94 mm | +0.002 mm |
| L3 / FP focal length      |  +42.194 mm |         +42.19 mm | +0.004 mm |
| L4 / RF focal length      |  -56.594 mm |         -56.59 mm | -0.004 mm |
| Close-focus magnification |     -0.4999 |             -0.50 |   matched |
| Computed subject distance |    487.7 mm | production 486 mm |   +1.7 mm |
| Petzval sum               |  +0.0008645 |     not tabulated |         - |

Petzval curvature was computed surface by surface as Σφ/(n·n′), not by thin-lens element approximation. The corresponding Petzval radius is approximately -1157 mm.

## Data-File Implementation Notes

The data file is an unscaled transcription of Example 1. The final air thickness `d19` remains the patent back focal distance to the image plane; no sensor cover glass is modeled.

The aperture stop semi-diameter was computed from the patent F/4.05 condition. Solving the entrance pupil for the infinity prescription gives an entrance-pupil semi-diameter of 16.42 mm and a physical stop semi-diameter of 12.92 mm.

The patent does not publish semi-diameters. The reconstructed SDs in the data file are therefore not primary-source values. They are conservative drawing and tracing apertures chosen to satisfy the renderer's edge-thickness and cross-gap checks while respecting the official 82 mm front filter size. All selected element edge thicknesses remain above 0.5 mm.

## Design Heritage and Context

The TS-E 135mm f/4L Macro belongs to Canon's 2017 TS-E macro group, along with the TS-E 50mm f/2.8L Macro and TS-E 90mm f/2.8L Macro. The 135 mm model is the longest member and requires the largest working distance of the three. The patent's 60 mm-class effective-diagonal prose and Canon's 67.2 mm image-circle specification both show that the optical system was designed for shifted 135-format coverage, not merely ordinary full-frame coverage.

The main design interest is not aspherical correction but floating-focus color control across a large image circle. The prescription relies on four cemented doublets and two S-FPL51 UD elements, one in the fixed front group and one in the moving positive focus group, with a stationary rear doublet acting as the final field-correction group.

## Sources

- JP 2018-132674 A, Canon Inc., published 2018-08-23. Primary source for the prescription, group structure, variable gaps, conditional expressions, and Example 1 paraxial data.
- Canon Japan product specification FAQ for TS-E135mm F4L マクロ, document 92304. Official source for release date, element/group count, tilt/shift limits, MFD, magnification, filter size, aperture blade count, minimum aperture, and image-circle diameter.
- Canon product specification page for TS-E 135mm f/4L MACRO. Official source for production metadata and confirmation of two UD elements.
- OHARA optical glass catalog and product pages for S-BSM25, S-FPL51, S-LAH55V, S-NBH5, S-LAH99, S-LAL14, S-NBH56, S-LAH98, and S-LAL7.
- OHARA 2018 S-LAL7Q announcement. Used to distinguish the time-consistent S-LAL7 label from the later S-LAL7Q variant.
- HOYA optical glass catalog for TAFD35L equivalence to G3.
