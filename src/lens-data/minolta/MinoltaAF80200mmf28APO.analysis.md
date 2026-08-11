## Patent Reference and Design Identification

**Patent:** JP1989-039542<br>
**Application Number:** 昭62-197396<br>
**Filed:** 1987-08-06<br>
**Published:** 1989-02-09<br>
**Inventors:** Hisashi Tokumaru; Masakuni Tai<br>
**Applicant:** Minolta Co., Ltd.<br>
**Title:** 大口径比望遠ズームレンズ (large-aperture-ratio telephoto zoom lens)<br>
**Embodiment analyzed:** Example 1

The prescription is Example 1 of JP1989-039542. The patent gives a four-group zoom with 16 elements in 13 air-separated groups and a numerical range of 82.00-140.00-195.00 mm at FNO 2.88. The LensVisualizer record keeps those exact design values separate from the production identity, which is marketed as the MINOLTA AF 80-200mm f/2.8 APO.

The selected production correlation is supported by several converging features, but the patent does not identify the retail lens by model name. The correspondence is therefore a documented production-correlation inference rather than an explicit manufacturer statement linking Example 1 to the commercial lens.

1. Example 1 has 16 elements in 13 air-separated groups, matching Minolta's factory service information for the AF Zoom 80-200mm F2.8, lens code 2589.
2. The patent divides the system into four functional groups with positive-negative-positive-positive power. Its claim language describes Groups I-III as an approximately afocal zooming section and Group IV as a positive image-forming group.
3. The patent's 82-195 mm design range and FNO 2.88 closely bracket, but are not substituted for, the marketed 80-200 mm and f/2.8 values.
4. Minolta service information identifies front focusing by the first lens group. During zooming, the second and third groups move individually while the fourth group remains fixed, and the overall lens length does not change. That mechanism agrees with the Example 1 spacing table and the reconstructed group stations.
5. Patent Fig. 1 shows the same 4+4+3+5 element distribution across Groups I-IV that results from the Example 1 numerical prescription.

The production lens is a Minolta A-mount 135-format autofocus zoom. The data file uses the project's canonical A-mount taxonomy and retains the public product name while keeping patent design quantities distinct from marketed specifications.

No uniform scale is applied. The radii, center thicknesses, zoom gaps, inferred clear apertures, and image-plane spacing are all expressed on the patent Example 1 dimensional scale. Because the embodiment is entirely spherical, no aspherical coefficient scaling or conic conversion is applicable.

## Optical Architecture

Example 1 is a four-group, all-spherical large-aperture zoom. The 16 elements form 13 air-separated groups, with three cemented pairs. In front-to-rear order, the four patent functional groups have independently recomputed paraxial powers corresponding to focal lengths of approximately +117.200 mm, -32.910 mm, +84.100 mm, and +109.700 mm. These are in-situ functional-group powers; they are distinct from the standalone powers of individual elements and from the net powers of the three cemented pairs.

The patent's central architectural choice is an approximately afocal variable-magnification section formed by Groups I-III ahead of a fixed positive Group IV. Group I is positive and remains fixed during zooming; Group II is strongly negative; Group III is positive; Group IV is positive and fixed. The first three groups therefore alter angular magnification while the rear group supplies the final converging function to the image plane.

At the three authored infinity positions, Group II begins 28.961, 54.379, and 64.515 mm behind the first vertex. It moves imageward by 35.554 mm from the 82 mm to the 195 mm design station. Group III begins at 72.409, 85.341, and 83.637 mm: it first moves imageward by 12.932 mm and then reverses objectward by 1.704 mm between the 140 and 195 mm stations. Group IV begins at 99.097, 99.096, and 99.096 mm, fixed to the precision of the source table. The r1-to-r29 lens-stack track is consequently 165.957 mm at 82 mm and 165.956 mm at the 140 and 195 mm stations.

The patent title uses the source term “telephoto zoom lens.” Under the LensVisualizer structural terminology rule, however, this model is not classified as a telephoto-type layout because total optical track divided by EFL remains greater than unity at all three modeled stations: about 2.534, 1.484, and 1.065. It is likewise not a retrofocus design under the project's `BFD > EFL` test; the modeled BFD/EFL ratios are about 0.510, 0.299, and 0.214.

The patent numerical table contains no explicit aperture-stop row or stop diameter. Minolta service material, however, depicts the production diaphragm inside Group IV between its second and third elements, corresponding to the patent d23 air gap between L13 and L14, and the service adjustment instructions specify an aperture diameter of 2.4 mm with the diaphragm operation plate at its minimum side. The authored `STO` is therefore a source-constrained modeling inference rather than a patent transcription. The patent d23 = 23.30 mm gap is split into 13.934190046639 mm from r23 to `STO` and 9.365809953361 mm from `STO` to r24. The stop semi-diameter is 13.333333333333 mm: at the 82 mm design station it reproduces F/2.88, while the same entrance-pupil magnification makes a 2.4 mm physical stop correspond to f/32. The exact axial split is code-solved and is not presented as a manufacturer-published dimension.

The patent also ends at r29 without a numerical image-plane spacing. The model uses a fixed 41.793578 mm distance from r29 to the image plane, equal to the independently computed 82 mm-state back focal distance to six decimal places. The 140 and 195 mm infinity states differ from that fixed image station by only about 0.00114 and 0.00187 mm, respectively, consistent with the precision of the published spacing table.

No cover glass, filter plate, inactive dummy plane, or flare-cutter surface appears in the active Example 1 prescription, so none is modeled and no air-equivalent plate compensation is required. Patent r19 is explicitly tabulated as 0.000 curvature and is normalized only at the schema level to the LensVisualizer flat-surface sentinel.

## Element-by-Element Analysis

### L1 - Positive Meniscus

nd = 1.48749, νd = 70.1. Glass: S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified). f = +398.330 mm.

L1 is the first member of positive Group I and participates in the production lens's front-focusing unit. Its standalone power is modest compared with the complete group, so the front group's convergence is distributed rather than concentrated in a single surface pair. The relatively high Abbe number gives L1 low primary dispersion in the ordinary first-order sense, but no anomalous-partial-dispersion behavior is assigned.

### L2 - Positive Meniscus

nd = 1.48749, νd = 70.1. Glass: S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified). f = +398.330 mm.

L2 repeats the same refractive coordinates and standalone focal length as L1. The two front positive menisci therefore form a symmetric material pairing within Group I while remaining separated by a small air gap. In the data model they move with the rest of Group I during the constrained focus reconstruction.

### L3 - Negative Meniscus, Cemented Pair D1

nd = 1.74000, νd = 31.7. Glass: 740317 class (vendor unresolved). f = -123.241 mm.

L3 is the negative member of the first cemented pair. Its higher index and substantially lower Abbe number contrast with the neighboring positive L4. This opposing power-and-dispersion pairing provides a first-order chromatic-balancing degree of freedom within the otherwise positive front group; the available data support that general achromatizing interpretation, not an apochromatic or anomalous-dispersion claim.

### L4 - Positive Meniscus, Cemented Pair D1

nd = 1.60311, νd = 60.7. Glass: 603607 class (vendor unresolved). f = +84.290 mm.

L4 completes D1 at the shared r6 interface. Its standalone positive power is stronger than L3's negative power, but the cemented stack must be treated as a coupled optical unit rather than by summing isolated focal lengths. Direct matrix evaluation gives D1 a net focal length of about +275.167 mm. The pair therefore remains net positive while moderating the material dispersion contrast inside Group I.

### L5 - Biconcave Negative

nd = 1.60311, νd = 60.7. Glass: 603607 class (vendor unresolved). f = -64.525 mm.

L5 is the first element of negative Group II and supplies strong standalone negative power. Group II is the principal negative member of the variable-magnification section, with a group focal length of about -32.910 mm. L5's position ahead of the D2 cemented pair places substantial negative power at the front of the moving variator group.

### L6 - Biconcave Negative, Cemented Pair D2

nd = 1.60311, νd = 60.7. Glass: 603607 class (vendor unresolved). f = -46.021 mm.

L6 is the negative component of D2. Its standalone focal length shows strong negative power, but that power is partly countered at the cemented interface by L7. The pair's role must therefore be judged from its coupled matrix rather than from L6 alone.

### L7 - Positive Meniscus, Cemented Pair D2

nd = 1.75000, νd = 25.1. Glass: FF8 (HOYA catalog equivalent; patent 750251; production supplier unspecified). f = +54.784 mm.

L7 is the positive component of D2 and uses a high-index, low-Abbe prescription coordinate. HOYA FF8 is the only reviewed catalog curve inside the project compatibility guard and is used as a spectral equivalent without asserting Minolta's production supplier. Although L6 and L7 have strong opposing standalone powers, their cemented net focal length is approximately -293.777 mm, so D2 is only weakly negative compared with either isolated component. This is an important distinction between element power and cemented-stack behavior.

### L8 - Biconcave Negative

nd = 1.69350, νd = 53.2. Glass: 694532 class (vendor unresolved). f = -109.011 mm.

L8 is the rear element of Group II. It restores negative power after the nearly neutralized D2 pair and completes the strongly negative functional group. During zooming the entire Group II assembly moves monotonically imageward while its internal spacings remain fixed.

### L9 - Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unresolved). f = +88.292 mm.

L9 is the leading positive element of Group III. It is the dominant standalone positive contributor in a group whose net focal length is about +84.100 mm. Group III provides the positive partner to the moving negative Group II and reverses direction slightly after the middle zoom station.

### L10 - Biconvex Positive, Cemented Pair D3

nd = 1.48749, νd = 70.1. Glass: S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified). f = +76.568 mm.

L10 begins the D3 cemented pair with substantial positive standalone power. Its high Abbe number contrasts with the lower-Abbe negative L11, giving the pair an ordinary first-order chromatic-balancing degree of freedom.

### L11 - Plano-Concave Negative, Cemented Pair D3

nd = 1.74000, νd = 31.7. Glass: 740317 class (vendor unresolved). f = -76.824 mm.

L11 terminates Group III with nearly equal and opposite standalone power relative to L10. The coupled D3 matrix is correspondingly close to neutral, with a net focal length of approximately +3030.964 mm. Group III's useful positive power is therefore supplied primarily by L9, while D3 acts as a weakly positive cemented correction pair rather than a second strong converging component.

### L12 - Biconvex Positive

nd = 1.49310, νd = 83.6. Glass: Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row). f = +65.271 mm.

L12 is the first and strongest positive element of fixed Group IV. Its very high Abbe number indicates unusually low primary dispersion in the d-line/Abbe description, but the audited coordinates do not match a public catalog glass closely enough to justify a vendor name. The `APD (INFERRED)` tag is supported at the exact `493836` Minolta material-family level by the AF 200mm patent; because this prescription does not publish line indices or partial dispersion, no numeric `dPgF` is borrowed and no fluorite identity is claimed.

### L13 - Biconcave Negative

nd = 1.75520, νd = 27.5. Glass: 755275 class (vendor unresolved). f = -107.805 mm.

L13 follows L12 with negative power and much lower Abbe number. The opposing powers and dispersion levels form a strong material contrast at the front of Group IV. The prescription supports describing this as a first-order chromatic correction degree of freedom, but not assigning a specific secondary-spectrum performance without spectral line data.

### L14 - Positive Meniscus

nd = 1.71736, νd = 29.5. Glass: 717295 class (vendor unresolved). f = +146.479 mm.

L14 is a moderate positive meniscus in the fixed rear group. Its high refractive index allows useful positive bending with comparatively moderate standalone focal power. It is separated from L13 and L15 by substantial air spaces, so its action is not equivalent to a cemented achromat and must be considered in the full Group IV relay.

### L15 - Negative Meniscus

nd = 1.83400, νd = 37.2. Glass: 834372 class (vendor unresolved). f = -58.615 mm.

L15 is the highest-index element in the prescription and carries the strongest negative standalone power in Group IV. Its steep negative contribution is followed closely by the final positive L16. The alternating rear powers provide the fixed group with substantial correction freedom while preserving a net positive group focal length.

### L16 - Biconvex Positive

nd = 1.68893, νd = 31.1. Glass: 689311 class (vendor unresolved). f = +96.323 mm.

L16 is the final positive element before the modeled image plane. Together with L15 it closes the alternating-power sequence of Group IV. The full rear group remains net positive at approximately +109.700 mm and stays fixed during zooming and in the constrained focus model.

## Glass Identification and Selection

The patent publishes `nd` and `νd` only. It does not identify glass manufacturers and does not provide per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The data file therefore uses conservative six-digit refractive-coordinate classes where multi-vendor catalog comparison supports the coordinate family without establishing the actual melt vendor. Two targets remain explicitly unmatched.

| Data-file glass label | nd | νd | Elements | Interpretation in this model |
|---|---:|---:|---|---|
| S-FSL5 catalog equivalent (patent 487701) | 1.48749 | 70.1 | L1, L2, L10 | Compatible OHARA curve; production supplier unspecified |
| 740317 class (vendor unresolved) | 1.74000 | 31.7 | L3, L11 | Higher-index, lower-Abbe negative members in cemented pairs |
| 603607 class (vendor unresolved) | 1.60311 | 60.7 | L4, L5, L6 | Medium-index, relatively high-Abbe glass used across Groups I-II |
| FF8 catalog equivalent (patent 750251) | 1.75000 | 25.1 | L7 | Compatible HOYA curve; production supplier unspecified |
| 694532 class (vendor unresolved) | 1.69350 | 53.2 | L8 | Rear negative member of Group II |
| 773496 class (vendor unresolved) | 1.77250 | 49.6 | L9 | High-index positive member leading Group III |
| Unmatched 493836 Minolta AD/ED fluorophosphate | 1.49310 | 83.6 | L12 | APD inferred from the exact Minolta material family; no compatible catalog curve or numeric dPgF asserted |
| 755275 class (vendor unresolved) | 1.75520 | 27.5 | L13 | High-index, low-Abbe negative member of Group IV |
| 717295 class (vendor unresolved) | 1.71736 | 29.5 | L14 | High-index positive meniscus in Group IV |
| 834372 class (vendor unresolved) | 1.83400 | 37.2 | L15 | Very high-index negative meniscus in Group IV |
| 689311 class (vendor unresolved) | 1.68893 | 31.1 | L16 | Final high-index positive element |

The coordinate audit finds exact or near-exact entries in more than one manufacturer catalog for several class-labeled rows. L1, L2, and L10 use the compatible S-FSL5 curve while explicitly leaving the production supplier unspecified. L7 now uses the compatible FF8 curve on the same basis. L12 remains explicitly unmatched so a future coefficient-backed `493836` row can upgrade it without implying a vendor identity now.

The commercial product name contains “APO,” but that branding is not used here as evidence of quantified apochromatic system performance. Abbe number alone describes primary dispersion and does not establish secondary-spectrum correction. L12's family-level APD tag records the strongest available material evidence while keeping the prescription on an Abbe-only chromatic model until source-specific line indices, `dPgF`, or a validated Sellmeier assignment becomes available.

## Focus Mechanism

Minolta's factory service information identifies the production lens as front focusing, with the first lens group moving for focus, and gives a minimum focus distance of 1.8 m. The patent Example 1, however, publishes only infinity zoom spacings; it contains no finite-object distance table, close-focus magnification table, or focus-travel row.

The authored close-focus state is therefore a **CONSTRAINED_RECONSTRUCTION**, not a patent transcription. The reconstruction keeps Groups II-IV and the rear image plane fixed, translates the optical effect of Group I objectward, and represents that relative motion in LensVisualizer by increasing D7 while holding the first modeled vertex fixed. Removing the resulting global axial translation makes this representation optically equivalent to front-group extension.

The 1.8 m distance is referenced to the modeled image plane. That reference-plane choice is a modeling assumption because the service specification does not numerically restate the MFD datum on the optical section.

| Zoom station | D7 at infinity (mm) | Reconstructed D7 at 1.8 m (mm) | Relative Group-I extension (mm) | Computed paraxial magnification |
|---:|---:|---:|---:|---:|
| 82 mm | 3.461 | 12.819425798 | 9.358425798 | -0.05587 |
| 140 mm | 28.879 | 38.238221860 | 9.359221860 | -0.09538 |
| 195 mm | 39.015 | 48.374098871 | 9.359098871 | -0.13285 |

The near-constant relative extension across the three zoom stations is consistent with the fixed image plane and the approximately afocal behavior of the front three groups. It should not be read as a manufacturer-published mechanical travel specification. The reconstructed imaging residual in the paraxial system matrix is below 5.3×10⁻¹² at every defined close-focus state.

## Conditional Expressions

The patent states seven design conditions for this four-group large-aperture zoom. Re-evaluation from the final prescription reproduces the first six printed Example 1 values to their published precision. The seventh printed evaluation contains a sign error, but the corrected value still satisfies the patent's inequality.

| # | Patent condition | Printed Example 1 value | Recomputed value | Result |
|---:|---|---:|---:|---|
| 1 | $\sqrt{2} \le (f_I/f_T)F_T \le 2\sqrt{2}$ | 1.731 | 1.730954 | Pass |
| 2 | $2 \le f_I/r_S \le 2\sqrt{2}$ | 2.344 | 2.344000 | Pass |
| 3 | $0.1 \le N_N-N_P \le 0.2$ | 0.137 | 0.136890 | Pass |
| 4 | $\sqrt{2} \le (f_p/f_4)F_T \le 2\sqrt{2}$ | 1.714 | 1.713592 | Pass |
| 5 | $1/20 < (r'_p+r_p)/(r'_p-r_p) < 1/\sqrt{2}$ | 0.647 | 0.646844 | Pass |
| 6 | $0.4 < r_N/r'_p < 0.7$ | 0.518 | 0.517778 | Pass |
| 7 | $-3 < [(r'_p+r_p)/(r'_p-r_p)]-[(r'_N+r_N)/(r'_N-r_N)] < 0.3$ | +0.101 | -0.101610 | Pass |

Here the symbols follow the patent's definitions for the first-group focal length, tele-end system focal length and f-number, selected cemented-surface radius and refractive indices, and the first elements of the fourth group. Condition 7's source value is preserved as `+0.101` in the documentary record; direct substitution gives -0.101609585. The correction concerns only the sign of the printed evaluation and does not require alteration of any prescription value.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix product give the same first-order system matrices to a maximum elementwise difference of 8.53×10⁻¹⁴. The resulting effective focal lengths reproduce the patent's three design stations within 0.0027 mm.

| Patent station | Computed EFL (mm) | EFL residual (mm) | Modeled F/# | BFL minus fixed image spacing (mm) |
|---:|---:|---:|---:|---:|
| 82 mm | 81.998398 | -0.001602 | 2.880000 | -0.0000003 |
| 140 mm | 139.997329 | -0.002671 | 2.880046 | +0.0011369 |
| 195 mm | 194.997463 | -0.002537 | 2.880075 | +0.0018674 |

The f-number values above depend on the service-constrained stop placement and 13.333333333333 mm stop semi-diameter. They verify that the authored stop reproduces the patent's design FNO 2.88 while remaining consistent with Minolta's 2.4 mm minimum-side diaphragm adjustment at f/32. The exact axial split is still a modeling inference rather than a published prescription dimension. The marketed f/2.8 designation remains separate.

The surface-by-surface Petzval sum, using $\phi/(n n')$, is +0.001447967451 mm⁻¹. This value is reported as a paraxial design quantity only; it is not used to claim a measured field-curvature performance for the production lens.

Clear semi-diameters are also modeling inferences because Example 1 publishes no numerical aperture radii. They were constrained by the patent optical section, the inferred entrance pupil, axial and off-axis ray clearance, the reconstructed 1.8 m focus state, and the current geometry rules. Across the defined zoom and focus states, the minimum modeled edge thickness is 1.0123 mm, the maximum spherical rim-slope angle is 41.30°, and the worst positive shared-band sag intrusion is 84.90% of its physical air gap, below the model's 90% limit. Representative axial and off-axis ray checks do not first-clip at cemented interfaces.

The prescription is all-spherical. No aspheric coefficients, conic constants, diffractive terms, or coefficient transformations are present. No dimensional scaling is applied. The only surface normalization is the patent's `r19 = 0.000` plane represented by the LensVisualizer flat sentinel. The added stop, final image spacing, close-focus D7 values, and all semi-diameters are explicitly modeled inferences rather than silent modifications to the patent table.

## Sources

1. **JP1989-039542**, 大口径比望遠ズームレンズ, Minolta Co., Ltd., filed 1987-08-06 and published 1989-02-09. Example 1 supplies the numerical prescription and 82-140-195 mm spacing table; Fig. 1 supplies the four-group optical section.
2. **Minolta factory service manual, AF Zoom 80-200mm F2.8, lens code 2589-100 / Maxxum code 2589-600.** Manufacturer-authored service material, consulted as an archival scan hosted by AllPhotoLenses, used for the production 16-element/13-group identity, Minolta A mount, front-focus mechanism, first-group focusing, Groups II/III zoom motion, fixed Group IV, constant zoom length, 1.8 m minimum focus distance, diaphragm location within Group IV, and the 2.4 mm minimum-side aperture adjustment.
3. **Manufacturer optical-glass catalogs audited for coordinate compatibility:** OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA. These comparisons support the conservative class/unmatched annotations but do not establish the actual Minolta glass vendor or melt identity.
4. **Minolta US 4,786,152, Embodiment 3.** Used only as cross-patent evidence that the exact `493836` material family is anomalous-dispersion glass, not as a source of numeric spectral data for this prescription.
