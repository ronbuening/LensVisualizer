## Patent Reference and Design Identification

**Patent:** US 2015/0146085 A1  
**Application Number:** US 14/513,363  
**Priority:** Japanese Patent Application 2013-241734, November 22, 2013  
**Filed:** October 14, 2014  
**Published:** May 28, 2015  
**Inventor:** Takahiro Hatada  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** _Optical System and Image Pickup Apparatus Including the Same_  
**Embodiment analyzed:** Numerical Example 1 / Example 1 (FIGS. 1, 2A, and 2B; ¶¶0023, 0027–0028, 0062)

Numerical Example 1 is the patent embodiment corresponding to the production Canon EF 11-24mm f/4L USM. The identification is supported by several independent correspondences:

1. **Construction.** The example contains 16 glass elements in 11 air-separated groups. Canon specifies 16 elements in 11 groups for the production lens, and its official construction diagram shows the same cementing topology.
2. **Aspherical pattern.** Patent surfaces 1, 4, 6, and 30 are aspherical, placing one asphere on E1, E2, E3, and E16. Canon's diagram marks those same four element positions.
3. **Low-dispersion pattern.** Canon's diagram marks E5 and E14 as the two low-dispersion elements. Their patent coordinates match OHARA S-FPL53 and S-FPL51 respectively. Canon states that the production lens uses one Super UD and one UD element, but does not publish the grade assigned to each numbered position. E5 is therefore identified only as the probable Super-UD-class position and E14 as the probable UD-class position.
4. **Focal range and aperture.** The patent design traces to 11.3285–23.2815 mm at F/4.12; the marketed lens is 11–24 mm at f/4. No scaling is applied. All radii, thicknesses, clear apertures, and zoom spacings remain in the patent's published millimetres, and the endpoint differences are treated as ordinary marketing rounding.
5. **Image field.** The patent image height is 21.64 mm, giving a 43.28 mm image circle. This is consistent with the 36 × 24 mm format. At the wide state, the patent gives a 62.36° half field, or 124.72° full diagonal field; Canon specifies 126°05′ for the marketed 11 mm endpoint.
6. **Focusing.** Paragraph 0028 assigns focusing to L2. Canon describes the product as a rear-focus lens driven by ring-type USM.
7. **Stabilization.** The example has no decentering or image-stabilization unit, consistent with the non-IS production lens.
8. **Timing.** The Japanese priority filing predates Canon's February 2015 market introduction, and the U.S. application was published in May 2015.

Example 2 is excluded because it begins at 12.36 mm and uses a two-powered-unit rear arrangement rather than the L2/L3 split of Example 1. Example 3 is a 10.30 mm f/2.88 fixed-focal-length design. Paragraph 0024 once calls Example 3 a “Zoom lens,” but the numerical table, the surrounding prose, and claim 11 establish that it is a prime; the isolated wording is an internal drafting error.

## Optical Architecture

The prescription is a negative-lead retrofocus zoom with three powered units: negative L1, positive L2, and positive L3. The wide-state back-focus ratio is

$$
\frac{\mathrm{BFD}}{\mathrm{EFL}}=\frac{39.8681}{11.3285}=3.5193,
$$

so the system is unambiguously retrofocus because BFD exceeds EFL. It is not a telephoto design. Paragraph 0047 uses “telephoto ratio” for $L_w/f_w$, but the patent's terminology there describes total-length compactness rather than the usual telephoto classification $\mathrm{TL}/\mathrm{EFL}<1$.

| Powered unit | Patent surfaces | Elements / air-spaced groups | Verified focal length | Primary role                                                                |
| ------------ | --------------: | ---------------------------: | --------------------: | --------------------------------------------------------------------------- |
| L1           |            1–12 |                        6 / 6 |            −18.221 mm | Strong negative front unit that establishes the ultra-wide retrofocus field |
| L2           |           15–20 |                        4 / 2 |            +70.905 mm | Positive rear-focus unit formed by two cemented doublets                    |
| L3           |           22–30 |                        6 / 3 |            +56.822 mm | Positive rear relay: cemented triplet, UD-class singlet, and rear doublet   |

Two zero-power flare-cut planes are included at patent surfaces 13 and 21. The aperture stop lies between them and ahead of L2. Paragraph 0028 states that the aperture stop moves integrally with L3.

The separated L2+L3 rear assembly has a net focal length of +38.800 mm at wide angle, +38.887 mm at the intermediate state, and +38.969 mm at telephoto. The slight variation is caused by the changing L2–L3 air gap; the individual powered-unit focal lengths remain fixed.

The independently reconstructed zoom motion, referred to the fixed image plane, is:

| Reference plane |       Wide | Intermediate |  Telephoto |       Wide→Telephoto |
| --------------- | ---------: | -----------: | ---------: | -------------------: |
| L1 surface 1    | −171.39 mm |   −162.77 mm | −165.24 mm |   +6.15 mm imageward |
| Aperture stop   |  −81.80 mm |    −94.56 mm | −107.32 mm | −25.52 mm objectward |
| L2 surface 15   |  −80.06 mm |    −93.05 mm | −106.03 mm | −25.97 mm objectward |
| L3 surface 22   |  −62.98 mm |    −75.74 mm |  −88.50 mm | −25.52 mm objectward |

L1 moves imageward by 8.62 mm from wide to the intermediate state, then reverses 2.47 mm toward the object by telephoto. L2 and L3 move objectward. The stop-to-L3 first-surface distance remains 18.82 mm at all three states, independently confirming that the stop and L3 move together. The L1–L2 first-surface interval contracts from 91.33 to 59.21 mm, while the L2–L3 interval expands from 17.08 to 17.53 mm, matching ¶0027. Paragraph 0027 calls the L1 locus “convex-shaped,” whereas claim 8 calls it “concave-shaped.” The three published states verify the imageward motion and partial reversal but do not resolve the patent's opposing curvature adjectives.

## Element-by-Element Analysis

### E1 — Negative Meniscus, front asphere (surfaces 1–2)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 coordinate match (OHARA special-order catalog; production melt not disclosed). f = −64.308 mm.

E1 is the largest and most strongly exposed front element. It supplies the first part of the negative lead and carries aspherical surface 1. The patent explicitly links the power of this element and the radius of surface 2 to wide-angle coverage, front diameter, distortion, and ghost suppression (¶¶0035–0042).

### E2 — Negative Meniscus, rear asphere (surfaces 3–4)

nd = 1.58443, νd = 59.4. Glass: Unmatched 584/594 crown; the nearest current OHARA S-BAL42 row differs by Δnd = −0.00130. f = −69.590 mm.

E2 is patent lens g2. Its image-side surface 4 is the design's only nonzero-conic asphere. The air space bounded by E1 surface 2 and E2 surface 3 is treated by the patent as a negative air lens and appears explicitly in conditions (4)–(6), rather than being merely mechanical clearance.

### E3 — Negative Meniscus, rear asphere (surfaces 5–6)

nd = 1.85000, νd = 40.3. Glass: Unmatched 850/403 high-index flint; the nearest current HOYA M-TAFD305 row differs by Δnd = +0.00135 and Δνd = −0.20. f = −110.005 mm.

E3 completes the three consecutive negative lenses required by claim 6. Its image-side asphere helps distribute the front-unit bending and distortion correction rather than forcing all of the correction onto E1.

### E4 — Negative Meniscus (surfaces 7–8)

nd = 1.59522, νd = 67.7. Glass: S-FPM2 coordinate match (OHARA; production melt not disclosed). f = −44.025 mm.

This lower-dispersion negative meniscus extends L1. Although its Abbe number is high, Canon's official construction diagram does not mark E4 as one of the production lens's two designated UD elements, so it is not labeled UD here.

### E5 — Biconcave Negative, probable Super-UD-class position (surfaces 9–10)

nd = 1.43875, νd = 94.9. Glass: S-FPL53 coordinate match (OHARA; element-grade assignment inferred). f = −79.442 mm.

E5 has the extreme 439/949 glass coordinate and an OHARA catalog ΔPg,F of +0.0461. Canon marks this position as low dispersion. Its S-FPL53 coordinates make it the more plausible Super-UD-class member of the two marked positions, but this remains an inference rather than a disclosed Canon melt assignment.

### E6 — Biconvex Positive (surfaces 11–12)

nd = 1.72047, νd = 34.7. Glass: S-NBH8 coordinate match (OHARA; production melt not disclosed). f = +42.103 mm.

E6 closes L1 and partially offsets the five preceding negative elements. Its high dispersion contrasts sharply with E5, creating chromatic leverage within the otherwise negative front unit. The complete six-element L1 remains strongly negative at −18.221 mm.

### E7 — Negative Meniscus, cemented doublet D1 (surfaces 15–16)

nd = 2.00100, νd = 29.1. Glass: TAFD55 exact coordinate match (HOYA; production melt not disclosed). f = −68.420 mm.

HOYA TAFD55 reproduces the patent coordinate and predates the patent's 2013 priority filing. E7 is a very-high-index negative component. In isolation it is negative, but cementing it to E8 produces a strongly positive +27.927 mm doublet. Its high index permits substantial interface power without a correspondingly extreme external curvature.

### E8 — Biconvex Positive, cemented doublet D1 (surfaces 16–17)

nd = 1.57501, νd = 41.5. Glass: S-TIL27 coordinate match (OHARA; production melt not disclosed). f = +19.763 mm.

E8 provides the dominant positive power of the first L2 doublet. Together E7 and E8 form the front positive component of the focusing unit.

### E9 — Biconcave Negative, cemented doublet D2 (surfaces 18–19)

nd = 1.91082, νd = 35.3. Glass: TAFD35 exact coordinate match (HOYA; production melt not disclosed). f = −20.753 mm.

HOYA TAFD35 reproduces the patent coordinate directly. This supports the catalog annotation but does not establish that Canon used a catalog TAFD35 production melt.

### E10 — Biconvex Positive, cemented doublet D2 (surfaces 19–20)

nd = 1.80518, νd = 25.4. Glass: S-TIH6 coordinate match (OHARA; production melt not disclosed). f = +48.009 mm.

E10 completes the second L2 doublet. Despite E10's positive standalone power, the E9–E10 cemented pair is net negative at −37.795 mm. The separation between the positive D1 and negative D2 assemblies gives the complete L2 unit a weak positive focal length of +70.905 mm.

### E11 — Negative Meniscus, cemented triplet T1 (surfaces 22–23)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 coordinate match (OHARA; production melt not disclosed). f = −31.542 mm.

E11 begins L3 as the negative front member of a three-element cemented assembly. Its high index supplies substantial interface power in a compact axial space.

### E12 — Biconvex Positive, cemented triplet T1 (surfaces 23–24)

nd = 1.51742, νd = 52.4. Glass: S-NSL36 coordinate match (OHARA; production melt not disclosed). f = +24.362 mm.

E12 is the positive crown center of the triplet. It is bracketed by higher-index negative components and provides the principal positive power within that assembly.

### E13 — Biconcave Negative, cemented triplet T1 (surfaces 24–25)

nd = 1.83481, νd = 42.7. Glass: S-LAH55V coordinate match (OHARA; production melt not disclosed). f = −63.633 mm.

E13 closes the triplet. The complete E11–E13 cemented assembly is weakly negative at −174.507 mm; its function must therefore be understood in situ with E14 and the rear doublet, not as an isolated positive relay.

### E14 — Biconvex Positive, probable UD-class position (surfaces 26–27)

nd = 1.49700, νd = 81.5. Glass: S-FPL51 coordinate match (OHARA; element-grade assignment inferred). f = +26.015 mm.

E14 is the strongest positive standalone element in L3. Canon marks this position as low dispersion. Its S-FPL51 coordinates and ΔPg,F = +0.0280 make it the more plausible ordinary UD-class member, but the grade assignment remains inferred.

### E15 — Biconcave Negative, cemented doublet D3 (surfaces 28–29)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 coordinate match (OHARA; production melt not disclosed). f = −17.296 mm.

E15 is the strong negative front component of the final doublet. It uses the same catalog coordinate as E11.

### E16 — Biconvex Positive, rear asphere (surfaces 29–30)

nd = 1.58313, νd = 59.4. Glass: S-BAL42 coordinate match (OHARA; production melt not disclosed). f = +24.478 mm.

E16 closes the prescription and carries the final image-side asphere. The E15–E16 doublet is net negative at −65.841 mm in isolation, but the spacing among the triplet, E14, and this doublet produces a positive +56.822 mm L3 unit.

The standalone cemented-assembly focal lengths are:

| Assembly     | Surfaces | Verified net focal length |
| ------------ | -------: | ------------------------: |
| E7–E8 / D1   |    15–17 |                +27.927 mm |
| E9–E10 / D2  |    18–20 |                −37.795 mm |
| E11–E13 / T1 |    22–25 |               −174.507 mm |
| E15–E16 / D3 |    28–30 |                −65.841 mm |

These values describe each cemented assembly in air. They are not interchangeable with the standalone focal length of an individual component or with the assembly's in-situ contribution after spacing within L2 or L3.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. Catalog names below are coordinate matches used to provide a defensible dispersion model; they are not disclosures of Canon's production melts. Exact coordinate matching is therefore distinguished from production-glass identification.

|  Element | Patent nd / νd | Catalog annotation                 | Match status                                       | Catalog ΔPg,F |
| -------: | -------------: | ---------------------------------- | -------------------------------------------------- | ------------: |
|       E1 | 1.77250 / 49.6 | OHARA S-LAH66                      | Exact coordinate; special-order catalog            |       −0.0092 |
|       E2 | 1.58443 / 59.4 | Unmatched 584/594 crown            | Nearest S-BAL42 differs by Δnd = −0.00130          |             — |
|       E3 | 1.85000 / 40.3 | Unmatched 850/403 high-index flint | Nearest HOYA M-TAFD305 differs by +0.00135 / −0.20 |             — |
|       E4 | 1.59522 / 67.7 | OHARA S-FPM2                       | Exact coordinate                                   |       +0.0123 |
|       E5 | 1.43875 / 94.9 | OHARA S-FPL53                      | Exact coordinate; probable Super-UD-class position |       +0.0461 |
|       E6 | 1.72047 / 34.7 | OHARA S-NBH8                       | Exact coordinate                                   |       −0.0019 |
|       E7 | 2.00100 / 29.1 | HOYA TAFD55                        | Exact coordinate; cataloged before patent priority |             — |
|       E8 | 1.57501 / 41.5 | OHARA S-TIL27                      | Exact coordinate                                   |       +0.0024 |
|       E9 | 1.91082 / 35.3 | HOYA TAFD35                        | Exact coordinate                                   |       −0.0027 |
|      E10 | 1.80518 / 25.4 | OHARA S-TIH6                       | Exact coordinate                                   |       +0.0158 |
| E11, E15 | 1.88300 / 40.8 | OHARA S-LAH58                      | Exact coordinate                                   |       −0.0088 |
|      E12 | 1.51742 / 52.4 | OHARA S-NSL36                      | Exact coordinate                                   |       −0.0002 |
|      E13 | 1.83481 / 42.7 | OHARA S-LAH55V                     | Exact coordinate                                   |       −0.0075 |
|      E14 | 1.49700 / 81.5 | OHARA S-FPL51                      | Exact coordinate; probable UD-class position       |       +0.0280 |
|      E16 | 1.58313 / 59.4 | OHARA S-BAL42                      | Exact coordinate                                   |       −0.0020 |

The data file includes explicit catalog nC, nF, ng, and ΔPg,F values where those values were independently matched to the stored prescription. E7 instead resolves through the project's authoritative HOYA TAFD55 catalog entry, avoiding duplicate spectral constants. E2 and E3 remain Abbe-only because assigning spectral data from a nearby but nonmatching catalog row would imply unsupported precision.

The repeated use of high-index lanthanum and dense-flint coordinates permits strong compact powers in L2 and L3. The two extreme low-dispersion positions are widely separated: E5 is negative in the front unit, while E14 is positive in L3. This is not a conventional cemented ED achromat; the design distributes axial and lateral chromatic correction across the zoom.

## Focus Mechanism

Paragraph 0028 states that focusing is carried out with L2, comprising surfaces 15–20 and four glass elements in two cemented doublets. Canon describes the production lens as a rear-focus system with ring-type USM and full-time manual focus.

The patent supplies no finite-object prescription, focus-variable spacing table, object distance, or magnification table for Numerical Example 1. Exact L2 focus travel and close-focus spacing changes therefore cannot be reconstructed without adding assumptions. The data file deliberately repeats each infinity-focus spacing in the “close” slot so that it represents zoom motion only rather than an invented finite-focus model.

Canon's production specifications are 0.32 m minimum focus at 11 mm, 0.28 m at 24 mm, and 0.16× maximum magnification at 24 mm. The data field `closeFocusM: 0.28` is catalog metadata; it does not imply that the patent prescription has been traced at that object distance.

The patent example has no decentering stabilization group or IS prescription, and the production lens is not an IS lens.

## Aspherical Surfaces

Paragraph 0060 defines the asphere in millimeters as

$$
X(H)=\frac{(1/R)H^2}{1+\sqrt{1-(1+K)(H/R)^2}}
+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+A_{12}H^{12}+A_{14}H^{14}.
$$

The positive X direction is imageward. The patent uses the standard conic convention: $K=0$ is a spherical base and $K=-1$ is a paraboloidal base. Only even polynomial orders are present.

| Data label | Patent surface | Element |        K |          A4 |           A6 |          A8 |          A10 |          A12 |         A14 |
| ---------: | -------------: | ------: | -------: | ----------: | -----------: | ----------: | -----------: | -----------: | ----------: |
|         1A |              1 |      E1 |        0 | 5.07039e−06 | −3.66524e−09 | 2.14684e−12 | −1.59746e−16 | −3.49877e−19 | 1.41029e−22 |
|         4A |              4 |      E2 | −3.08703 | 3.79875e−05 | −6.27286e−08 | 1.29970e−11 |  1.49707e−14 |            0 |           0 |
|         6A |              6 |      E3 |        0 | 1.15171e−05 | −2.29358e−09 | 2.08815e−10 | −7.57344e−13 |  1.20672e−15 |           0 |
|        30A |             30 |     E16 |        0 | 1.96961e−05 |  3.33943e−08 | 2.90343e−11 | −2.00200e−13 |  7.23046e−15 |           0 |

Full-clear-aperture sag checks use one-half of the patent's effective diameter:

| Surface | Semi-diameter | Conic-base sag | Polynomial departure |     Total sag | Rim-slope angle |
| ------: | ------------: | -------------: | -------------------: | ------------: | --------------: |
|      1A |     41.995 mm |   +9.204513 mm |        +10.664239 mm | +19.868752 mm |          62.04° |
|      4A |     24.805 mm |  +10.047804 mm |         +2.952519 mm | +13.000324 mm |          27.53° |
|      6A |     18.190 mm |   +3.600164 mm |         +2.260563 mm |  +5.860727 mm |          49.14° |
|     30A |     10.445 mm |   −0.614861 mm |         +0.291005 mm |  −0.323857 mm |           0.62° |

Surface 4 has $h=24.805$ mm while $|R|=20.133$ mm. A same-radius sphere is not real at that height, but the patent's $K=-3.08703$ hyperbolic base is valid. Treating the coefficients as a polynomial added to a spherical base would therefore be a material conic-convention error.

The data file preserves the patent effective semi-diameters. Surface 2, although spherical rather than aspherical, has a verified 71.27° rim slope at its listed clear radius. The per-lens renderer limit is consequently set to 72° rather than silently trimming the patent aperture. The closest signed cross-gap clearance occurs between surfaces 8 and 9: sag intrusion is 7.1287 mm across a 7.54 mm vertex gap, leaving 0.4113 mm at the shared clear radius. `gapSagFrac` is set to 0.96 to preserve that nonoverlapping patent geometry.

Canon states that the production lens uses one 87 mm ground-and-polished aspherical element. The patent's E1 effective diameter is 83.99 mm, making E1 the probable corresponding position, but Canon does not identify it by element number in the cited specification.

## Chromatic Correction Strategy

Canon's construction diagram marks E5 and E14 as low-dispersion elements, while the product specification states that the lens contains one Super UD and one UD element. The diagram does not distinguish the grades. The patent coordinates add the relevant evidence:

- E5 matches S-FPL53 at nd = 1.43875, νd = 94.9, with catalog ΔPg,F = +0.0461.
- E14 matches S-FPL51 at nd = 1.49700, νd = 81.5, with catalog ΔPg,F = +0.0280.

E5 is therefore the probable Super-UD-class position and E14 the probable UD-class position. The assignment is recorded as inferred, not as a Canon disclosure.

E5 is a negative biconcave element followed by positive, high-dispersion E6. E14 is a positive singlet in L3. Their separated placement distributes chromatic correction between the front negative unit and rear positive relay. Neither Canon nor the patent designates the lens apochromatic, so that term is not applied.

## Conditional Expressions

The patent's principal conditions are:

$$3.0<|f_{g1}|/f_w<6.1 \tag{1}$$
$$1.9<R_2/f_w<3.0 \tag{2}$$
$$8.0<L_w/f_w<20.0 \tag{3}$$
$$3.0<|f_{g2}|/f_w<10.0 \tag{4}$$
$$1.5<R_3/f_w<4.5 \tag{5}$$
$$10.0<|f_{g12}|/f_w<40.0 \tag{6}$$

The preferred ranges in ¶¶0041 and 0053 are 4.0–5.8, 2.00–2.95, 10.0–17.0, 3.5–9.5, 2.0–4.0, and 12.0–30.0 respectively.

The independent calculations use the re-traced wide-state EFL $f_w=11.328513$ mm, the summed wide-state track $L_w=171.39$ mm, and powers derived directly from the prescription.

| Condition | Independent value | Patent Table 1 | Principal range | Preferred range |
| --------: | ----------------: | -------------: | --------------: | --------------: |
|       (1) |           5.67669 |           5.68 |         3.0–6.1 |         4.0–5.8 |
|       (2) |           2.89420 |           2.89 |         1.9–3.0 |       2.00–2.95 |
|       (3) |          15.12908 |          15.12 |        8.0–20.0 |       10.0–17.0 |
|       (4) |           6.14290 |           6.14 |        3.0–10.0 |         3.5–9.5 |
|       (5) |           3.72573 |           3.73 |         1.5–4.5 |         2.0–4.0 |
|       (6) |          14.18360 |          14.18 |       10.0–40.0 |       12.0–30.0 |

Conditions (1), (2), and (4)–(6) reproduce Table 1 at its printed precision. Condition (3) does not: both the rounded patent summary values and the re-traced prescription round to 15.13, whereas Table 1 prints 15.12. The 0.01 discrepancy is retained as a patent rounding inconsistency rather than silently forcing the independent result to match.

The negative air lens is bounded by surface 2 of E1 and surface 3 of E2. Its reduced-angle matrix gives $C=+0.006223583\ \mathrm{mm}^{-1}$, hence

$$
f_{g12}=-1/C=-160.679145\ \mathrm{mm}.
$$

This definition reproduces the patent's condition (6) value.

## Independent Paraxial Verification

The verification uses a d-line reduced-angle ray vector $[y,\nu]$ with $\nu=n\theta$. Refraction at each surface uses

$$
\begin{bmatrix}1&0\\-\phi&1\end{bmatrix},\qquad
\phi=\frac{n'-n}{R},
$$

and translation through thickness $d$ in index $n$ uses

$$
\begin{bmatrix}1&d/n\\0&1\end{bmatrix}.
$$

For an air-to-air system matrix $\begin{bmatrix}A&B\\C&D\end{bmatrix}$, EFL is $-1/C$ and BFD is $-A/C$. Aspheres use their paraxial radius for first-order power.

| State        | EFL computed | Patent f |   Difference | BFD computed | Patent BF |   Difference | Track sum | Patent total |
| ------------ | -----------: | -------: | -----------: | -----------: | --------: | -----------: | --------: | -----------: |
| Wide         | 11.328513 mm | 11.33 mm | −0.001487 mm | 39.868059 mm |  39.88 mm | −0.011941 mm | 171.39 mm |    171.38 mm |
| Intermediate | 17.321726 mm | 17.32 mm | +0.001726 mm | 52.642756 mm |  52.64 mm | +0.002756 mm | 162.77 mm |    162.77 mm |
| Telephoto    | 23.281475 mm | 23.28 mm | +0.001475 mm | 65.400925 mm |  65.40 mm | +0.000925 mm | 165.24 mm |    165.23 mm |

The 0.01 mm track differences at wide and telephoto result from summing two-decimal prescription spacings against independently rounded total-length entries. The EFL and BFD agreement confirms the radius sign convention and transcription.

The patent half fields are internally consistent with image height and EFL: $\arctan(21.64/\mathrm{EFL})$ gives 62.368°, 51.324°, and 42.907°, compared with 62.36°, 51.32°, and 42.90° in the patent.

The patent's 18.91 mm stop effective diameter is a maximum clear envelope rather than the state-specific iris opening. A paraxial F/4.12 solution requires stop diameters of 13.656 mm, 15.947 mm, and 18.243 mm at wide, intermediate, and telephoto respectively; all fit within the listed envelope.

Using the required surface-by-surface Petzval formula

$$
P=\sum\frac{n'-n}{Rnn'}=\sum\frac{\phi}{nn'},
$$

the complete d-line Petzval sum is +0.004166121 mm⁻¹. Its reciprocal magnitude is 240.031 mm. Every refracting interface, including cemented interfaces, is included; stops contribute zero.

No finite-focus EFL, focus travel, or close-focus magnification is reported because the patent provides no finite-focus prescription. Substituting a thin-lens estimate based on the manufacturer's MFD would mix reference-plane conventions and would not constitute an exact reconstruction.

## Sources

1. Takahiro Hatada, “Optical System and Image Pickup Apparatus Including the Same,” US 2015/0146085 A1, especially ¶¶0021–0066, Numerical Example 1, Table 1, and claims 1–13: https://patents.google.com/patent/US20150146085A1/en
2. Canon Camera Museum, “EF11-24mm f/4L USM,” official production specifications, construction, release timing, aspherical-element information, and low-dispersion statement: https://global.canon/en/c-museum/product/ef438.html
3. Canon USA, “EF 11-24mm f/4L USM,” official support and specification page: https://www.usa.canon.com/support/p/ef-11-24mm-f-4l-usm
4. Canon Latin America, “EF 11-24mm f/4L USM,” official focal range, angle of view, optical construction, focusing, and USM specifications: https://www.cla.canon.com/en/p/ef-11-24mm-f-4l-usm
5. Canon Camera Museum, official lens-construction diagram: https://global.canon/ja/c-museum/wp-content/uploads/2015/06/ef438-lens-construction.png
6. OHARA, official optical-glass catalog, special-order catalog, and glass data sheets, updated May 29, 2026: https://www.ohara-inc.co.jp/en/product/catalog/
7. HOYA, official optical-glass catalog and data downloads, updated June 1, 2026: https://www.hoya-opticalworld.com/english/datadownload/index.html
