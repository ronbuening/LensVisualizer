## Patent Reference and Design Identification

**Patent:** JP 2025-182227 A
**Application Number:** JP 2024-089613
**Filed:** 3 June 2024
**Published:** 15 December 2025
**Inventor:** Takeshi Umeda
**Applicant:** Sigma Corporation
**Title:** Variable magnification optical system and imaging apparatus
**Embodiment analyzed:** Numerical Example 1

This model is correlated with the Sigma 28–105mm F2.8 DG DN | Art. The patent's printed asphere equation (¶0067) omits the square root of the conic term; this is a typesetting error, and the model uses the standard square-root conic equation, which reproduces the patent's own aberration plots. Every published radius, axial spacing, refractive index and aspheric coefficient is unchanged.

The production association is supported by several convergent features:

1. The example and the manufacturer both describe 18 elements in 13 air-separated groups.
2. Five elements are aspherical. The source uses two glasses at nd=1.43700, νd=95.10 and another at nd=1.49700, νd=81.61, consistent with the broad dispersion pattern of the marketed two FLD/one SLD construction. These coordinates do not establish Sigma's trade-glass identities or suppliers.
3. The published design range, 28.55–102.37 mm at F2.91, is close to the marketed 28–105 mm at F2.8 without being numerically identical.
4. The June 2024 application predates Sigma's 5 September 2024 announcement and 26 September 2024 launch.
5. Figure 1 and Sigma's construction diagram show the same broad sequence of singlets and cemented pairs, including a small rear focusing pair.

The manufacturer identifies full-frame mirrorless coverage, L-Mount and Sony E variants, a 12-blade rounded diaphragm and HLA linear-motor autofocus. Production MFD is 0.4 m, with maximum telephoto reproduction 1:3.1. Those production specifications do not supply missing finite-focus prescription rows. The selection is a strong construction correlation, not manufacturer confirmation of the exact factory formula. [1–4]

The selected publication is the original Japanese A-publication. A same-family US text repeats the no-root equation and therefore supplies no official correction. It is not substituted for the governing Japanese prescription.

## Optical Architecture

The design is a six-functional-group positive-front zoom. Its group-power sequence is positive, negative, positive, positive, negative, negative. Functional groups refer to the moving optical units in Figure 1; the separate 13-group construction count refers to air-separated glass assemblies.

G1 combines a nearly power-cancelled cemented pair with a positive meniscus. G2 supplies the strongest negative functional-group power. The stop is source surface 13 at the front of G3. Two positive groups, G3 and G4, follow the negative zoom group. G5 is the negative focusing doublet. G6 is a fixed rear group with weak net negative power despite substantial powers in its constituent elements. The weak net G6 power does not imply negligible higher-order optical action.

The following functional powers are calculated in air from their actual separated source spans. They are not sums of the individual element powers.

| Group | Source surfaces | Calculated focal length (mm) | Role supported by source |
|---|---|---:|---|
| G1 | 1–5 | 122.234286 | Positive front group; translates objectward during zoom |
| G2 | 6–12 | -24.475200 | Negative group; fixed relative to image during zoom |
| G3 | 13–17 | 98.830509 | Positive group with leading stop; translates objectward |
| G4 | 18–24 | 38.560843 | Positive group; translates objectward |
| G5 | 25–27 | -74.214958 | Negative cemented pair; source focus group |
| G6 | 28–32 | -2028.200404 | Weak negative rear group; fixed relative to image |

G6 is printed as −2027.04 mm; the displayed rounded prescription instead gives the value above. Its near-cancelled power is sensitive to source rounding. Half-last-digit input intervals contain the printed result, but the direct numerical mismatch is retained rather than called an exact reproduction.

All coordinate calculations use native millimetres. No scaling to the marketing focal length or aperture is applied. The patent gives a source front-vertex-to-image track, which must not be equated to Sigma's mechanical mount-to-front product length. [1, §§0075–0085]

| State | Calculated EFL (mm) | Gaussian BF (mm) | Source front-to-image track (mm) |
|---|---:|---:|---:|
| Wide | 28.545113 | 27.896805 | 174.4717 |
| Intermediate | 49.999294 | 27.896822 | 191.9826 |
| Tele | 102.374455 | 27.897300 | 216.1641 |

The source image gap is 27.8972 mm at all three stations. Neither the source front-to-image track nor the BF establishes a telephoto or retrofocus classification across the range. The design is described here by its actual power distribution rather than by an unsupported architectural label.

## Element-by-Element Analysis

Focal lengths below are standalone air focal lengths calculated from each physical element's front/back vertex curvatures, thickness and native d-line index. They are not in-situ powers within the complete system, and the values at a cemented junction cannot be added to recover the cemented assembly's effective focal length. Glass names are catalogue-compatible candidates only; the data retains coordinate-class labels and source indices/partial dispersions.

### L1 — G1; front cemented pair D1

Negative Meniscus; nd=1.84666, νd=23.78; FDS90 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -190.851 mm. Source surfaces 1–2.

The front negative meniscus has a high index and low Abbe number. It is cemented to L2 at surface 2. HOYA FDS90 variants, OHARA S-TIH53 and SCHOTT N-SF57 are among coordinate-compatible candidates. The source does not identify a supplier. The pair has very weak positive net power; its role cannot be inferred by treating this negative element as an isolated diverging group.

### L2 — G1; front cemented pair D1

Biconvex Positive; nd=1.43700, νd=95.10; FCD100 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 184.809 mm. Source surfaces 2–3.

The biconvex element uses the highest Abbe number in the example. Its coordinates exactly match the HOYA FCD100 catalogue pair, but equivalent candidate families exist and the match is not supplier attribution. It shares the surface-2 interface with L1 and exits to air at surface 3. Its positive standalone power largely cancels the preceding negative element in the cemented combination.

### L3 — G1; air-spaced positive meniscus

Positive Meniscus; nd=1.85033, νd=42.70; TAFD34 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 125.998 mm. Source surfaces 4–5.

This high-index positive meniscus follows the front pair. HOYA TAFD34 is an exact nd/vd coordinate candidate. It provides positive group power in conjunction with the nearly neutral front doublet. Its bending and separation matter to the group result; neither the material name nor its positive sign alone establishes a particular aberration contribution.

### L4 — G2; two-sided aspheric negative meniscus

Negative Meniscus (2× Asph); nd=1.77377, νd=47.17; M-TAF401 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -37.207 mm. Source surfaces 6–7.

Both surfaces 6A and 7A are aspherical. The native coordinate pair is compatible with the HOYA M-TAF401/MP-TAF401/MC-TAF401 family. Those catalogue names do not prove which production process or variant was used. The front and rear modeled optical radii differ because the thickened peripheral meniscus and nearby gap have distinct ray/shape constraints; the diagram is not treated as an exact clear-aperture specification.

### L5 — G2; cemented pair D2

Biconcave Negative; nd=1.77250, νd=49.63; TAF1 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -27.799 mm. Source surfaces 8–9.

The biconcave component is cemented to L6 at surface 9. HOYA TAF1 is an exact coordinate candidate. Its negative standalone power is close in magnitude to L6’s positive power, but the cemented assembly must be calculated with the actual material transition. The numerical example assigns this assembly to the negative fixed zoom group.

### L6 — G2; cemented pair D2

Biconvex Positive; nd=1.78880, νd=28.43; S-NBH58 (OHARA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 29.508 mm. Source surfaces 9–10.

This biconvex high-dispersion element completes D2. OHARA S-NBH58 and HIKARI J-KZFH10 are coordinate candidates; the screened HOYA catalogue has no candidate within the declared compatibility window. This illustrates why a supplier cannot be inferred from the other glasses in the system. D2 is weakly positive as an isolated cemented unit even though G2 as a whole is strongly negative.

### L7 — G2; two-sided aspheric negative meniscus

Negative Meniscus (2× Asph); nd=1.69350, νd=53.18; L-LAL13 (OHARA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -93.301 mm. Source surfaces 11–12.

Surfaces 11A and 12A form a negative meniscus with two distinct conic bases. Surface 11A has K=−1; 12A has K=0. The shared nd/vd pair also occurs in L8. Its printed PgF 0.5482 identifies OHARA L-LAL13 (0.5483), a low-softening-point moulding glass; HOYA M-LAC130 shares nd/νd but has PgF 0.5466. The two elements use the same tabulated PgF but opposite standalone power signs.

### L8 — G3; two-sided aspheric biconvex element

Biconvex Positive (2× Asph); nd=1.69350, νd=53.18; L-LAL13 (OHARA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 59.189 mm. Source surfaces 14–15.

The positive element immediately after the source stop carries surfaces 14A and 15A. It shares the L7 native glass coordinates but has a different form and different aspheric coefficients. The stop moves with G3 during zoom. No assertion about an individual surface’s aberration contribution follows from the shared glass alone.

### L9 — G3; source negative lens L3n

Negative Meniscus; nd=1.72342, νd=37.99; BAFD8 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -123.348 mm. Source surfaces 16–17.

This negative meniscus is the image-side negative element identified as L3n in the patent. HOYA BAFD8 is an exact coordinate candidate. Its object-side surface 16 is convex toward the image in the source sign convention. Its νd and PgF enter the patent’s combined anomalous-dispersion condition with L11; the relevant numerical condition is evaluated separately below.

### L10 — G4; positive low-dispersion singlet

Biconvex Positive; nd=1.49700, νd=81.61; FCD1 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 62.246 mm. Source surfaces 18–19.

The biconvex element has nd=1.49700 and νd=81.61, exactly compatible with the HOYA FCD1 coordinate pair. The dispersion level is consistent with the manufacturer’s SLD-type construction correlation, but the production trade designation is not independently established. Its large positive standalone power is only one part of the net positive G4 assembly.

### L11 — G4; source negative lens L4n, pair D3

Biconcave Negative; nd=1.73037, νd=32.23; NBFD32 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -46.181 mm. Source surfaces 20–21.

This biconcave high-dispersion component is the first negative lens in G4 and is identified as L4n. HOYA NBFD32 exactly matches the native pair. Surface 21 is the shared interface to L12. The cemented pair D3 shares one 17.4 mm rim across surfaces 20–22, the least value that passes the F2.91 axial beam at the long end.

### L12 — G4; low-dispersion positive member of D3

Biconvex Positive; nd=1.43700, νd=95.10; FCD100 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 71.988 mm. Source surfaces 21–22.

The biconvex component repeats L2’s very-low-dispersion native coordinates and PgF. It shares surface 21 with L11 and exits at surface 22. D3 has negative net standalone power even though this element is positive; the positive G4 group therefore depends on the neighboring singlets and spacings as well as on the cemented pair.

### L13 — G4; two-sided aspheric biconvex element

Biconvex Positive (2× Asph); nd=1.59201, νd=67.02; M-PCD51 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 51.845 mm. Source surfaces 23–24.

Surfaces 23A and 24A complete G4. HOYA M-PCD51 is an exact coordinate candidate; other makers offer nearby coordinates, without establishing interchangeability. Both conic constants are zero in the adopted standard form. Their nonzero polynomial terms through A20 are retained, including the high orders that affect finite-height slopes.

### L14 — G5; positive member of focusing doublet D4

Biconvex Positive; nd=1.90110, νd=27.06; NBFD27 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 90.513 mm. Source surfaces 25–26.

The biconvex front member uses a high index and low Abbe number, compatible with HOYA NBFD27. Its rear surface 26 is cemented to the negative L15. The element is positive alone, while the complete focusing pair is negative. Source motion is specified for that physical pair, not for an independently translated L14.

### L15 — G5; negative member of focusing doublet D4

Biconcave Negative; nd=1.69680, νd=55.46; LAC14 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -40.393 mm. Source surfaces 26–27.

The biconcave component is compatible with HOYA LAC14 and equivalent lanthanum-crown families. The combined D4/G5 power is negative. The source moves G5 imageward toward close focus, but does not publish the travel or finite-conjugate spacing states. The implemented model does not invent those states.

### L16 — G6; positive rear singlet

Biconvex Positive; nd=1.61997, νd=63.88; PCD40 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 50.140 mm. Source surfaces 28–29.

This biconvex positive element is separated from the final cemented pair. HOYA PCD40 is an exact coordinate candidate. Together with D5 and the intervening air gap, it yields the small net negative G6 power. That cancellation makes the printed group focal length particularly sensitive to rounding.

### L17 — G6; negative member of rear doublet D5

Biconcave Negative; nd=1.91082, νd=35.25; TAFD35 (HOYA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length -21.758 mm. Source surfaces 30–31.

The biconcave element has the largest tabulated index in the example. HOYA TAFD35/TAFD35L and CDGM H-ZLaF4LA are coordinate-compatible candidates. It shares surface 31 with L18. The negative standalone power is stronger than the positive L18 power; D5 remains negative as a cemented assembly.

### L18 — G6; positive meniscus with rear asphere

Positive Meniscus (1× Asph); nd=1.68948, νd=31.02; L-TIM28 (OHARA; nd, νd and printed PgF match; supplier unconfirmed); standalone focal length 42.414 mm. Source surfaces 31–32.

The final positive meniscus carries the sole rear asphere 32A. OHARA L-TIM28 and other nearby catalogue families are candidates, not proof of a melt. Its glass/partial dispersion and complete A4–A20 rear coefficients remain native to the selected example. The final listed gap is air to the source image plane; no numerical sensor plate is present.

The five isolated cemented assemblies have the following calculated focal lengths. Near cancellation in D1/D2 and the negative D3 result are reasons to distinguish a physical element’s standalone power from the assembly’s power.

| Assembly | Elements | Calculated net focal length (mm) |
|---|---|---:|
| D1 | L1/L2 | 4929.949843 |
| D2 | L5/L6 | 1798.581956 |
| D3 | L11/L12 | -134.340926 |
| D4 | L14/L15 | -74.214958 |
| D5 | L17/L18 | -39.974362 |

## Glass Selection

The source publishes 16 distinct d-line index/Abbe/partial-dispersion coordinate sets. Its PgF values are retained rather than being replaced by an assumed normal-dispersion line. Each printed nd/νd/PgF triple matches one HOYA or OHARA catalog glass to the printed precision, and the data names that glass. The match identifies the optical material; it does not confirm the production supplier, melt or manufacturing method.

Each pair was screened against manufacturer material from HOYA, OHARA, SCHOTT, SUMITA, HIKARI and CDGM. The catalogue evidence preserves exact S-/L-/legacy OHARA distinctions and candidate residuals. The 2019 CDGM source is not claimed to represent every current offering. No claim of APO performance is made from these coordinates alone. [5]

The table gives one illustrative compatibility candidate for each source coordinate set. Other variants remain in the evidence; these are not selected suppliers.

| nd | νd | Source PgF | Elements | Matching catalog glass (catalog PgF) |
|---:|---:|---:|---|---|
| 1.84666 | 23.78 | 0.6192 | L1 | HOYA FDS90 (0.6192) |
| 1.43700 | 95.10 | 0.5336 | L2/L12 | HOYA FCD100 (0.5336) |
| 1.85033 | 42.70 | 0.5646 | L3 | HOYA TAFD34 (0.5646) |
| 1.77377 | 47.17 | 0.5557 | L4 | HOYA M-TAF401 (0.5557) |
| 1.77250 | 49.63 | 0.5504 | L5 | HOYA TAF1 (0.5504) |
| 1.78880 | 28.43 | 0.6009 | L6 | OHARA S-NBH58 (0.6009) |
| 1.69350 | 53.18 | 0.5482 | L7/L8 | OHARA L-LAL13 (0.5483); HOYA M-LAC130 is 0.5466 |
| 1.72342 | 37.99 | 0.5820 | L9 | HOYA BAFD8 (0.5820) |
| 1.49700 | 81.61 | 0.5389 | L10 | HOYA FCD1 (0.5389) |
| 1.73037 | 32.23 | 0.5899 | L11 | HOYA NBFD32 (0.5899) |
| 1.59201 | 67.02 | 0.5358 | L13 | HOYA M-PCD51 (0.5359) |
| 1.90110 | 27.06 | 0.6072 | L14 | HOYA NBFD27 (0.6072) |
| 1.69680 | 55.46 | 0.5426 | L15 | HOYA LAC14 (0.5426) |
| 1.61997 | 63.88 | 0.5426 | L16 | HOYA PCD40 (0.5425) |
| 1.91082 | 35.25 | 0.5822 | L17 | HOYA TAFD35 (0.5822) |
| 1.68948 | 31.02 | 0.5987 | L18 | OHARA L-TIM28 (0.5987) |

The patent defines its conditional anomalous-dispersion quantity as PgF−0.64833+0.00180νd. The application’s dPgF field instead offsets the normal line 0.6438−0.001682νd. The conversion used here is therefore dPgF=PgF−(0.6438−0.001682νd). The original PgF, patent-normal deviation and application-normal deviation remain separate records. Copying the patent deviation directly into the application would not reproduce the published PgF.

No source nC, nF or ng anchors are supplied. The runtime may resolve a compatible coordinate code to its catalogue dispersion model or use a source-PgF-corrected Abbe approximation. Such chromatic behavior remains a model; a coordinate match does not recover the unknown production melt. Full polychromatic MTF and production secondary-spectrum performance are not established.

The inferred APD highlights identify L2/L12 (FCD100 proxies) and L10 (FCD1 proxy).
Their printed partial dispersion agrees with the corresponding catalog curves, and [Sigma's construction diagram](https://www.sigma-global.com/lenses/28_105_28_dgdn_a024_lc.png) marks those positions FLD and SLD respectively.
The highlights are inferred rather than patent-listed anomalous-glass identities; the original supplier and melt remain unconfirmed.

## Focus Mechanism

The source describes rear internal focusing by G5: the cemented L14/L15 pair moves imageward from infinity toward the closest object. Figure 1’s dashed focus arrow supports that direction. Only three infinity-focus numerical states are published. There is no source travel, finite object distance, finite reproduction ratio or close-focus gap table for this example. [1, §0077, Fig. 1]

Only the published infinity-focus zoom prescriptions are represented. Sigma’s 0.4 m production minimum focus and telephoto 1:3.1 magnification are separate manufacturer specifications; they are not reproduced by these prescriptions. The production lens uses an HLA focus drive. [2–3]

Zoom motion is separate from focus. G2 and G6 stay fixed relative to the image plane. The other groups move objectward between the published wide and tele stations. The following movements are computed from source vertex positions relative to the fixed image plane, with objectward motion positive.

| Functional group | Wide-to-tele movement (mm) |
|---|---:|
| G1 | 41.6924 |
| G2 | 0.0000 |
| G3 | 26.8520 |
| G4 | 33.1690 |
| G5 | 29.7349 |
| G6 | 0.0000 |

The native application provides continuous piecewise-linear interpolation between the three published zoom stations. This is explicitly limited linear interpolation, not a recovered production cam and not a claim of parfocal operation between stations. Gap d24 changes from 2.3042 to 2.1000 to 5.7383 mm; this gap reversal does not mean that G5 reverses its absolute motion.

A 51-point interpolation calculation gives a maximum sampled Gaussian image-plane mismatch of 0.983286 mm at zoomT=0.26. The image gap remains the unchanged source 27.8972 mm; the computed Gaussian BF at that sample is 26.913914 mm. The mismatch is retained as a diagnostic. No compensating cam, source-gap alteration or fixed-preset replacement is used.

## Aspherical Surfaces

Five physical elements carry nine aspheres: L4 (6A, 7A), L7 (11A, 12A), L8 (14A, 15A), L13 (23A, 24A), and L18 (32A). Every published even coefficient from A4 through A20 is retained. The radius, K and all coefficients use the source’s native millimetre scale.

The literal printed equation is:

z = (y²/R) / [1 + {1 − (1+K)(y/R)²}] + Σ Aₙyⁿ.

The corrected, standard equation used for this model is:

z = (y²/R) / [1 + √{1 − (1+K)(y/R)²}] + Σ Aₙyⁿ.

Both have the same quadratic vertex term, so first-order focal length reproduction cannot choose between them. With the standard form, K=0 gives a spherical base and K=−1 gives a paraboloid. Only 7A and 11A have K=−1. The other seven surfaces have K=0 and acquire different higher-order base shapes when the square root is assumed. The first literal-minus-standard difference is (1+K)y⁴/(8R³).

The omission is treated as a typesetting error. Exact d-line traces with the unchanged source coefficients show that the standard form reproduces the scale of the patent's spherical-aberration plots (wide-end marginal longitudinal aberration −0.09 mm against the plots' ±0.5 mm scale) and its published field/image-height pairs; the literal form gives −3.20 mm and does not. All geometry and ray results below use the corrected equation. [1, §0067, Figs. 2a–c]

Coefficient units are mm^(1−n) for Aₙ; K is dimensionless. Positive polynomial coefficients add positive axial sag, negative ones subtract it. Because the high-order terms combine, the sign of A4 alone is not used to assign an aberration role or characterize the full profile.

### Surface 6A (L4)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | 1.85091E-07 |
| A6 | 4.26604E-08 |
| A8 | -2.21868E-10 |
| A10 | 6.01194E-13 |
| A12 | -4.78015E-16 |
| A14 | -7.32009E-19 |
| A16 | -8.78114E-22 |
| A18 | 7.22224E-24 |
| A20 | -6.75429E-27 |

At the modeled, inferred semi-diameter 21.0 mm, total sag is 2.666769 mm and the actual rim tangent angle is 20.313008°. Departure from the vertex-matched sphere is 861.204 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 7A (L4)

| Term | Value |
|---|---:|
| K | -1.00000E+00 |
| A4 | 8.62972E-06 |
| A6 | 8.64590E-08 |
| A8 | -6.91508E-10 |
| A10 | 6.99967E-12 |
| A12 | -3.41025E-14 |
| A14 | -3.35498E-17 |
| A16 | 1.25237E-18 |
| A18 | -5.28500E-21 |
| A20 | 7.25132E-24 |

At the modeled, inferred semi-diameter 15.2 mm, total sag is 6.168492 mm and the actual rim tangent angle is 47.944789°. Departure from the vertex-matched sphere is 505.304 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 11A (L7)

| Term | Value |
|---|---:|
| K | -1.00000E+00 |
| A4 | 2.24402E-05 |
| A6 | -1.47419E-07 |
| A8 | 3.52063E-10 |
| A10 | 1.85113E-13 |
| A12 | -1.32511E-15 |
| A14 | -7.28653E-18 |
| A16 | -1.96704E-20 |
| A18 | 1.21596E-22 |
| A20 | 5.37674E-26 |

At the modeled, inferred semi-diameter 15.0 mm, total sag is -4.867166 mm and the actual rim tangent angle is 35.740996°. Departure from the vertex-matched sphere is 888.186 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 12A (L7)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | 2.70163E-05 |
| A6 | -1.55510E-07 |
| A8 | 4.98439E-10 |
| A10 | -6.83300E-13 |
| A12 | -2.83775E-16 |
| A14 | -1.19661E-18 |
| A16 | -7.57143E-21 |
| A18 | 9.37658E-25 |
| A20 | 1.60524E-25 |

At the modeled, inferred semi-diameter 15.0 mm, total sag is -2.970043 mm and the actual rim tangent angle is 23.880304°. Departure from the vertex-matched sphere is 413.044 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 14A (L8)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | -1.27386E-06 |
| A6 | -5.12422E-09 |
| A8 | 4.41803E-11 |
| A10 | -1.61037E-13 |
| A12 | 5.07015E-17 |
| A14 | -2.39015E-19 |
| A16 | 2.17445E-21 |
| A18 | 8.42503E-24 |
| A20 | -1.61985E-26 |

At the modeled semi-diameter 16.8 mm, total sag is 2.594143 mm and the rim tangent angle is 18.776394°. Departure from the vertex-matched sphere is -101.869 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 15A (L8)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | 5.74097E-07 |
| A6 | -5.16686E-09 |
| A8 | 3.82098E-11 |
| A10 | -1.08565E-13 |
| A12 | -2.03240E-16 |
| A14 | 4.83533E-19 |
| A16 | 1.76105E-21 |
| A18 | 4.40341E-24 |
| A20 | -6.76496E-27 |

At the modeled semi-diameter 16.8 mm, total sag is -0.800507 mm and the rim tangent angle is 2.984334°. Departure from the vertex-matched sphere is 43.098 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 23A (L13)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | -3.14483E-06 |
| A6 | -1.98499E-10 |
| A8 | -5.30620E-12 |
| A10 | -2.87197E-14 |
| A12 | 1.08836E-16 |
| A14 | -4.94374E-19 |
| A16 | -8.27912E-22 |
| A18 | 1.11878E-23 |
| A20 | -2.44641E-26 |

At the modeled semi-diameter 16.9 mm, total sag is 2.549859 mm and the rim tangent angle is 13.081669°. Departure from the vertex-matched sphere is -352.151 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 24A (L13)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | 2.83152E-06 |
| A6 | 8.67123E-10 |
| A8 | -1.06632E-11 |
| A10 | -4.64511E-14 |
| A12 | 1.87428E-16 |
| A14 | -1.02921E-19 |
| A16 | -6.14286E-22 |
| A18 | -1.08374E-25 |
| A20 | -2.83106E-27 |

At the modeled semi-diameter 16.9 mm, total sag is -1.809339 mm and the rim tangent angle is 13.384300°. Departure from the vertex-matched sphere is 138.928 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

### Surface 32A (L18)

| Term | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | 1.16496E-06 |
| A6 | -7.65792E-09 |
| A8 | -8.49581E-12 |
| A10 | 7.86908E-13 |
| A12 | -6.73161E-15 |
| A14 | 2.04431E-17 |
| A16 | 8.18003E-21 |
| A18 | -1.79202E-22 |
| A20 | 2.86343E-25 |

At the modeled, inferred semi-diameter 17.4 mm, total sag is 2.637859 mm and the actual rim tangent angle is 18.612249°. Departure from the vertex-matched sphere is 7.226 µm. This is a computed value at a modeled radius, not a source-published clear aperture or an as-manufactured departure.

The final G6 singlet (surfaces 28/29) uses an 18.3 mm inferred optical radius; the final cemented pair (30/31/32A) uses a common 17.4 mm radius. These match Figure 1’s optical outline more closely than the previous 16.0/15.0 mm radii. They remain inferred clear apertures, with group brackets and mechanical flanges excluded.

The shape checks include the complete polynomial, not a universal semi-diameter/radius ratio rule. Mathematical conic domains, actual slopes, shared-band air-gap intrusion and element edge thickness are checked using the adopted convention. Model clear radii are inferred from the undimensioned source section and exact-ray/shape constraints; mechanical flanges in a drawing are not automatically clear optical apertures.

The patent establishes aspherical surfaces but does not identify a fabrication process for each element. Catalogue moulding-family compatibility alone is insufficient to label an element as precision-moulded, polished or hybrid.

## Conditional Expressions

The patent’s f13, f34, f4L and f5L in these conditions are explicitly defined harmonic combinations of functional-group focal lengths. They are not the separated-group ABCD focal lengths across the intervening zoom gaps. Motion terms are measured with objectward movement positive. [1, claims 1–8, §§0013–0052, Table 1]

| Condition | Defined expression | Calculated | Printed Table 1 | Disposition |
|---|---|---:|---:|---|
| 1 | 0.61 < f34/fW < 1.46 | 0.971732 | 0.97 | Satisfies bound; printed rounding reproduced |
| 2 | 0.32 < f4/f3 < 0.96 | 0.390171 | 0.39 | Satisfies bound; printed rounding reproduced |
| 3 | -0.0085 < deltaPgF1+deltaPgF2 < 0.007 | 0.001636 | 0.0016 | Satisfies bound; printed rounding reproduced |
| 4 | 0.13 < abs(f13)/f4L < 1.25 | 0.530430 | 0.53 | Satisfies bound; printed rounding reproduced |
| 5 | 1.12 < m4/m3 < 1.56 | 1.235252 | 1.24 | Satisfies bound; printed rounding reproduced |
| 6 | 1.17 < abs(f5)/f4 < 2.89 | 1.924620 | 1.92 | Satisfies bound; printed rounding reproduced |
| 7 | 0.83 < m5/m4 < 1.24 | 0.896467 | 0.9 | Satisfies bound; printed rounding reproduced |
| 8 | 1.34 < abs(f5L)/fW < 4.25 | 2.508141 | 2.51 | Satisfies bound; printed rounding reproduced |
| 9 | 0.51 < bfW/fW < 1.85 | 0.977302 | 0.98 | Satisfies bound; printed rounding reproduced |
| 10 | 28.56 < omegaW=atan(Y/fW)/2 in degrees < 44.11 | 18.574116 | 37.15 | Literal definition conflicts; not satisfied |

For condition (3), the native PgF/νd entries of L9 (L3n) and L11 (L4n) give the combined patent-normal deviation +0.001636. The application-normal dPgF values are not substituted into this patent expression.

Condition (10) is deliberately unresolved. Literal atan(21.63/28.55)/2 gives 18.574116°, not Table 1’s 37.15°. Removing the divisor gives 37.148232°, but that is a diagnostic alternative, not a source correction. The system table’s full field 77.11° corresponds to 38.555°, independently supported by its field plots. The model retains those separately published field/image-height pairs and does not claim that the literal condition (10) passes.

## Model Scope and Numerical Checks

The model preserves source geometry and a continuous zoom control, with three source-supported infinity stations. It does not infer an unreported finite-focus mechanism, a production cam law, an extra camera stack or a normalization to the marketing values.

The source gives stop position but no physical stop radius or surface clear radii. Native iris calibration uses the nominal entrance-ray radius implied by each source EFL/F2.91 station and exact axial propagation to the source stop. The resulting physical iris radii are:

| Source station | Inferred native physical iris radius (mm) | Nominal source entrance radius (mm) | Current UI small-ray pupil radius (mm) |
|---|---:|---:|---:|
| Wide | 11.020345346 | 4.904658583 | 4.947029705 |
| Intermediate | 13.332049973 | 8.590944028 | 8.740348003 |
| Tele | 15.507442322 | 17.590112469 | 18.171736240 |

These inferred iris radii are interpolated between source stations. Calibration to the source marking is not independent physical-iris evidence. The actual UI uses current physical stop/current front-group small-ray ratio; its pupil radius is therefore distinct from the cached nominal radius. The associated geometric paraxial F-number is not asserted to be exactly the nominal F2.91 at every state.

Modeled clear apertures permit the three exact source corner chief rays, whose image-height magnitudes are 21.628176, 21.628370 and 21.634185 mm, compared with the tabulated 21.63 mm. This does not mean that every corner pupil ray is transmitted. First-stop and exterior-edge vignetting are retained.

Actual current-code checks cover 51 zoom samples, three focus-control values and three aperture-control values. The duplicated focus rows remain the same infinity geometry, so this coverage is not a finite-conjugate performance test. It includes 5,049 normal default UI rays, 3,533 supplementary meridional/skew field rays, current pupil/focus launch logic, physical geometry and SVG-shape diagnostics. Default-ray results agree with the public camera-anchored trace API. No sampled ray has a first clip at an internal cemented interface; later ghost failures after an exterior or stop rejection are recorded separately.

The native renderer requires no hidden material trim in these samples. Separate portable profile sampling finds positive glass edge thickness and admissible conic/rim/shared-gap geometry. These are checks of modeled apertures; they do not determine factory diameters or certify the entire continuum.

The native d-line surface-by-surface Petzval sum is +0.001166603473 mm⁻¹. This first-order curvature sum is not a measured sagittal/tangential image surface and is not used as a claim of flat-field performance.

The equation correction, aperture inference and interpolation disclosures are essential to using the model. Linear interpolation between the three published stations leaves up to 0.98 mm of defocus at intermediate focal lengths (largest near zoomT 0.26); this was reviewed and accepted. Neither the source fit nor the geometry checks establish measured MTF, complete chromatic correction, manufacturing tolerances or production performance.

## Sources

1. Japan Patent Office, JP2025182227A, “変倍光学系及び撮像装置,” Numerical Example 1. Original PDF pp. 13–17/printed pp. 12–16: conventions, equation, description and tables; PDF p. 36/printed p. 35: Table 1; PDF p. 43/printed p. 42: Figure 1; PDF pp. 44–45: source aberration plots. [Original publication via DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025182227A). The complete original is preserved with the model evidence.
2. Sigma Corporation, [28–105mm F2.8 DG DN | Art product specifications](https://www.sigma-global.com/en/lenses/a024_28_105_28/), read 4 October 2026. Production identity, mounts, format, counts, MFD, diaphragm and HLA information.
3. Sigma Corporation, [Launch schedule, 5 September 2024](https://www.sigma-global.com/en/news/2024/09/05/010622/). Production launch date and specifications.
4. Sigma Corporation, [optical construction diagram](https://www.sigma-global.com/lenses/28_105_28_dgdn_a024_lc.png). Correlation support, not a dimensional prescription.
5. Manufacturer glass sources: [HOYA](https://www.hoya-opticalworld.com/english/datadownload/), [OHARA](https://www.ohara-inc.co.jp/en/product/catalog/), [SCHOTT](https://www.schott.com/en-nl/products/optical-glass-p1000267), [SUMITA](https://www.sumita-opt.co.jp/en/download/), [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/), and [CDGM catalogue](https://www.cdgmgd.com/accessory/2019-04-10/client/www.cdgmgd.com/6efdd75d-fdb7-4a7d-8913-1b836c3ea407.pdf). Relevant source versions, hashes, candidate rows and coordinate residuals accompany the evidence. Catalogue compatibility is not production supplier attribution.
6. Supplemental text comparison only: [JP2025182227A Japanese text mirror](https://patents.google.com/patent/JP2025182227A/ja) and [US20250370233A1 family text](https://patents.google.com/patent/US20250370233A1/en). Both retain the no-root expression; neither establishes an official correction.
