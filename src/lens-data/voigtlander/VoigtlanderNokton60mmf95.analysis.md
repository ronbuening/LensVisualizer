# VOIGTLÄNDER NOKTON 60mm f/0.95 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2021-076740 A  
**Application Number:** JP 2019-203981  
**Filed:** 2019-11-11  
**Published:** 2021-05-20  
**Inventors:** Yasuyuki Sugano; Hirokazu Shimada  
**Applicant:** Cosina Co., Ltd.  
**Title:** 大口径撮像光学系 (*Large-Aperture Imaging Optical System*)  
**Embodiment analyzed:** Example 2

The prescription transcribes Example 2 exactly at the patent's published scale. The production correlation is the
Voigtländer NOKTON 60mm F0.95 for Micro Four Thirds. This identification is fixed for the present model; it is a
source-based correlation rather than a claim that Cosina has publicly confirmed the patent-to-product relationship.

Several independent features converge on that identification:

1. The patent gives an 11-element, 8-group formula, matching the production construction published by Cosina.
2. The computed design focal length is 58.145372 mm, while the production lens is marketed as 60 mm.
3. The patent gives f/0.93 and a 10.79° half-field, whereas Cosina markets f/0.95 and a 21.5° full angle of view.
4. Figure 5 and the manufacturer's optical section share the same three cemented pairs, rear singlet, and overall
   sequence of element shapes.
5. Cosina identifies two anomalous-partial-dispersion elements; their positions in the production diagram align with
   L2 and L7 in the patent sequence.
6. The patent was filed on 2019-11-11, before the Japanese product release on 2020-04-24.

The marketed values and the modeled prescription are therefore kept separate. The public product is a 60 mm f/0.95
manual-focus Micro Four Thirds lens; the optical model is the unscaled 58.145372 mm f/0.93 Example 2 design.

## Optical Architecture

Example 2 is an all-spherical, 11-element design arranged in 8 air-spaced groups. The patent divides the system into
three functional groups, with the aperture stop between groups 102 and 103. It describes groups 102 and 103 as a
modified Gaussian core and group 101 as an additional front group that adapts that core to the required field and
large entrance pupil (¶0033–¶0036, ¶0069–¶0073).

| Functional assembly | Elements | Computed standalone assembly EFL | Architectural function |
| --- | --- | ---: | --- |
| G1 / group 101 | L1, L2, L3 | +93.188913 mm | Positive front collector with one negative and two positive elements |
| G2 / group 102 | L4, Jc (L5+L6) | −123.571884 mm | Object-side half of the modified Gaussian core; strongly concave stop-facing rear surface |
| Aperture stop | Between surfaces 11 and 13 | — | Separates the two halves of the Gaussian core |
| G3 / group 103 | Ja (L7+L8), Jb (L10+L9), L11 | +34.811593 mm | Positive rear core and final relay toward the image plane |

The power signs in this table are computed for each isolated assembly. They do not imply that the same assembly acts
with identical vergence inside the complete lens. This distinction is especially important for G2: L4 is individually
positive, yet the complete isolated G2 assembly is negative because the cemented Jc pair has substantial negative net
power.

The layout is not a telephoto-form design under the project definition: the normalized total track divided by EFL is
1.678018, not less than 1. It is also not retrofocus, because the 18.218112 mm paraxial BFL is much shorter than the
58.145372 mm EFL. Cosina's description of the production lens as a short telephoto refers to its Micro Four Thirds
angle of view, not to a telephoto-ratio classification.

## Element-by-Element Analysis

### L1 — Biconcave Negative

**nd = 1.65568, νd = 33.69. Glass: Unmatched (656337 medium-flint class). f = −237.814 mm.**

L1 is the weak negative front member of group 101. The patent identifies group 101 as a positive group containing a
front negative lens followed by two positive lenses (¶0070). L1 therefore moderates the field geometry before the
stronger positive members collect the beam. The patent's general discussion assigns the front negative member a role
in off-axis correction and distortion control (¶0024, ¶0043); the precise partition of aberration correction among the
three elements remains an optical interpretation rather than a separately published surface-by-surface claim.

### L2 — Biconvex Positive

**nd = 1.49873, νd = 81.17. Glass: FCD1 optical equivalent; patent vendor unspecified. f = +159.970 mm.**

L2 is the lowest-dispersion glass in the prescription and the first positive member of group 101. Its high Abbe number
provides a low-dispersion positive contribution beside the lower-Abbe L1 and the high-index L3. Cosina's production
diagram marks the corresponding element as one of the two APD elements, but Example 2 supplies no nC, nF, ng, or
dPgF values. The model therefore records the manufacturer alignment without assigning a quantitative anomalous-
dispersion curve or making an apochromatic claim.

The patent's FL(i) column prints +159.70 mm for L2. Direct computation from the published radii, center thickness, and
nd gives +159.969653 mm; the data file uses the computed value while preserving the printed discrepancy in the audit.

### L3 — Positive Meniscus, Convex to the Object

**nd = 1.85167, νd = 42.76. Glass: Unmatched (852428 high-index lanthanum-crown class). f = +116.236 mm.**

L3 completes the positive front group. Its high refractive index permits useful positive power with a meniscus form,
and the patent places it at the image-side end of group 101 (¶0070). In the full system it reconverges the beam leaving
L1 and L2 before the fixed 1.30 mm gap to group 102. The combined G1 power is +93.188913 mm, which is stronger than
any conclusion drawn from L3's standalone focal length alone.

### L4 — Positive Meniscus, Convex to the Object

**nd = 1.76994, νd = 49.70. Glass: MC-TAF101-100 optical equivalent; patent vendor unspecified. f = +192.711 mm.**

L4 is the first element of group 102 and the first positive element on the object side of the stop. The patent requires
group 102 to contain two positive lenses followed by a negative lens with a strongly concave stop-facing surface
(¶0034, ¶0071). L4 supplies a relatively weak positive contribution before the more powerful Jc pair. Although L4 is
positive in isolation, G2 as a complete isolated assembly is negative; the surrounding spacings and incident vergence
therefore matter more than the sign of this one element.

### Jc — Cemented L5/L6 Pair

**L5:** nd = 1.57774, νd = 67.11. Glass: Unmatched (578671 low-dispersion crown class). f = +59.269 mm.  
**L6:** nd = 1.80639, νd = 33.35. Glass: NBFD15 optical equivalent; patent vendor unspecified. f = −24.406 mm.

L5 is a strong positive, nearly plano-convex member cemented to the negative meniscus L6. L6 terminates group 102 with
the strongly concave surface facing the stop, the defining geometry emphasized by the patent (¶0071). The individual
powers are opposite in sign, and the cemented pair has a computed net EFL of −61.268635 mm. This net negative result is
an assembly property; neither member should be described as having that focal length by itself.

The nearly plane cemented interface keeps little refracting power at the glass-to-glass boundary. Most of the pair's
negative action arises from the strong curvature at surface 11 together with the index contrast and thicknesses of both
members. In the complete lens, Jc also operates in a converging beam delivered by G1 and L4, so its in-situ effect is
not equivalent to placing a −61.27 mm thin lens in air.

### Ja — Cemented L7/L8 Pair

**L7:** nd = 1.66172, νd = 33.13. Glass: Unmatched (662331 APD flint; maker-marked, line data unpublished). f = −37.143 mm.  
**L8:** nd = 1.87648, νd = 36.27. Glass: Unmatched (876363 high-index lanthanum-flint class). f = +37.573 mm.

Ja begins group 103 immediately behind the stop. L7 presents the strong concave surface toward the stop, mirroring the
stop-facing negative surface on L6 and completing the modified Gaussian core described by the patent (¶0035, ¶0072).
L8 is a strong positive, near-plano-convex partner. Despite the similar magnitudes of the two standalone focal lengths,
the thick cemented combination has only weak positive net power, with a computed EFL of +302.459979 mm.

Cosina marks the corresponding L7 position as the second APD element. As with L2, that manufacturer designation is not
converted into nC, nF, ng, or dPgF values because the patent and public product specification do not publish them.

### Jb — Cemented L10/L9 Pair

**L10:** nd = 1.75449, νd = 27.15. Glass: E-FD4 optical equivalent; patent vendor unspecified. f = −31.808 mm.  
**L9:** nd = 1.88300, νd = 40.80. Glass: S-LAH58 optical equivalent; patent vendor unspecified. f = +24.861 mm.

Jb is a positive cemented pair formed by the biconcave L10 followed by the biconvex L9. Its computed net EFL is
+95.632782 mm. The contrast between L10's low Abbe number and L9's higher Abbe number supplies an ordinary achromatic
pairing tendency, but the absence of complete line-index data prevents a quantitative secondary-spectrum claim.

The element labels require a source correction. Paragraph 0072 and Figure 5 identify the physical order as negative
L10 followed by positive L9, and the numerical prescription has that same order. Paragraph 0073 reverses the two names.
The data file follows the diagram and prescription rather than the isolated prose reversal.

### L11 — Rear Positive Meniscus

**nd = 1.88300, νd = 40.80. Glass: S-LAH58 optical equivalent; patent vendor unspecified. f = +83.855 mm.**

L11 is the final powered element and a positive meniscus convex toward the object. It follows Jb across a 0.20 mm air
gap and completes the five-element group 103 described for Example 2 (¶0072). Its material is optically identical in
nd and νd to L9, but its weaker standalone power and rear position give it a different system role. It contributes to
the final convergence and provides the last refracting surface before the normalized rear air space.

## Glass Identification and Selection

The patent supplies exact nd and νd values but does not name glass vendors. The data file therefore uses explicit
`Unmatched (...)` labels or source-qualified public optical equivalents; no equivalent is a production-supplier claim.

| Element(s) | nd | νd | Stored identification | Evidence level |
| --- | ---: | ---: | --- | --- |
| L1 | 1.65568 | 33.69 | Unmatched 656337 medium-flint class | No exact catalog match retained |
| L2 | 1.49873 | 81.17 | FCD1 optical equivalent | Compatible HOYA curve; production diagram marks APD |
| L3 | 1.85167 | 42.76 | Unmatched 852428 high-index lanthanum-crown class | No exact catalog match retained |
| L4 | 1.76994 | 49.70 | MC-TAF101-100 optical equivalent | Compatible HOYA curve |
| L5 | 1.57774 | 67.11 | Unmatched 578671 low-dispersion crown class | No exact catalog match retained |
| L6 | 1.80639 | 33.35 | NBFD15 optical equivalent | Compatible HOYA curve |
| L7 | 1.66172 | 33.13 | Unmatched 662331 APD flint | Manufacturer position match; line data absent |
| L8 | 1.87648 | 36.27 | Unmatched 876363 high-index lanthanum-flint class | No exact catalog match retained |
| L10 | 1.75449 | 27.15 | E-FD4 optical equivalent | Compatible HOYA curve |
| L9, L11 | 1.88300 | 40.80 | S-LAH58 optical equivalent | Exact 883408 optical family; vendor not established |

OHARA lists S-LAH58 under optical code 883408 with nd = 1.88300 and νd approximately 40.8. This supports the optical-
equivalent annotation for L9 and L11, but it does not establish that the production elements were manufactured from
OHARA glass. The other named equivalents are likewise classification aids rather than vendor attributions.

The broad chromatic strategy is visible from the patent data: low-dispersion positive glasses at L2 and L5 are paired
within a system containing several lower-Abbe negative glasses, while the dense high-index positives permit strong
power without requiring every surface to carry extreme curvature. That statement describes the nd/νd distribution; it
does not substitute for a complete spectral trace. The model contains no authored nC, nF, ng, or dPgF values and does
not support an APO or quantified anomalous-partial-dispersion claim.

## Focus Mechanism

Example 2 uses a published two-unit floating-focus arrangement. Group 101 and group 102 translate together as the front
unit, while the aperture stop and group 103 translate together as the rear unit. The 1.30 mm G1-to-G2 air gap and the
6.37 mm stop-to-G3 gap remain fixed. The variable spacing between surface 11 and the stop increases toward close focus,
and the rear distance to the image plane also increases (¶0074–¶0078; Figure 5).

| Published state | Object distance from surface 1 | ZD11 | Normalized surface-20-to-image spacing | Computed |m| |
| --- | ---: | ---: | ---: | ---: |
| Infinity | Infinity | 8.10 mm | 18.208987 mm | — |
| 0.10× | 600.00 mm | 14.29 mm | 22.818987 mm | 0.101050 |
| 0.20× | 300.00 mm | 22.74 mm | 28.208987 mm | 0.203222 |

The normalized rear values include the air-equivalent effect of the omitted sensor plate. Relative to infinity, the
published 0.20× state moves the rear stop/G3 unit 10.00 mm toward the object and the front G1+G2 unit 24.64 mm toward
the object, increasing the inter-unit gap by 14.64 mm. These translations are computed from the published variable
spacings; they are not separately tabulated by the patent.

The data file stores the infinity and 0.20× endpoints because the prime-lens schema accepts endpoint pairs. The
published 0.10× state was independently verified but is not a discrete slider control point. Cosina specifies a 0.34 m
minimum focus distance from the sensor and a 1:4 maximum reproduction ratio for the production lens. Example 2 does not
publish the corresponding 0.25× internal spacings, so that production endpoint is not extrapolated or reconstructed.

## Conditional Expressions

The patent defines five conditions governing front-group power, focus behavior, axial proportions, and pupil/track
balance. The values below were recomputed from the final data arrays rather than copied from the patent's rounded
summary (¶0041, ¶0045, ¶0048, ¶0064–¶0067, ¶0077).

| Condition | Definition | Patent bound | Computed value | Result |
| --- | --- | --- | ---: | --- |
| C1 | FL1 / AFL | 1.0 < C1 < 4.5 | 1.602688 | Pass |
| C2 | ΔOP / (D11 − OP1) | 0.3 < C2 < 2.5 | 0.467785 | Pass |
| C3 | TL1 / TL23 | 0.01 < C3 < 1.0 | 0.290461 | Pass |
| C4 | TL / D0 | 1.3 < C4 < 3.0 | 1.560557 | Pass |
| C5 | DS / D0 | 0.4 < C5 < 1.0 | 0.598699 | Pass |

Here AFL = 58.145372 mm, FL1 = 93.188913 mm, FL3 = 34.811593 mm, D0 = AFL/FNO, and DS = FL3/FNO. The direct
rounded-table sums give TL1 = 17.57 mm and TL23 = 60.49 mm, differing by +0.01 mm and −0.01 mm respectively from the
patent's prose values. Those differences are retained as source-rounding discrepancies rather than used to alter the
prescription.

## Verification Summary

The final data file was checked with sequential height/reduced-angle tracing and an independent ABCD matrix product.
The two methods agree to a maximum absolute matrix difference of 4.44 × 10⁻16, and the system determinant is unity to
floating-point precision.

| Quantity | Computed from final data | Source or interpretation |
| --- | ---: | --- |
| Effective focal length | 58.145372 mm | Patent: 58.15 mm |
| Modeled maximum aperture | f/0.930000 | Patent design value; physical stop inferred |
| Paraxial BFL from surface 20 | 18.218112 mm | 0.009125 mm longer than normalized source spacing |
| First-surface-to-image track | 97.568987 mm | Patent: 97.57 mm |
| Full field from published half-angle | 21.58° | Production specification: 21.5° |
| Petzval sum | +0.005299457 mm⁻¹ | Surface-by-surface φ/(n·n′) computation |
| TL/EFL | 1.678018 | Not telephoto-form under the project ratio test |
| Paraxial BFL/EFL | 0.313320 | Not retrofocus |

The reciprocal magnitude of the Petzval sum is 188.699 mm. It is an audit diagnostic and is not presented as the
complete best-focus field-curvature radius.

The inferred semi-diameters also pass the targeted geometric checks used for this model. Every element retains positive
edge thickness, the maximum spherical rim angle remains 54.064251° at surface 11, and the checked non-stop ray bundles
remain contained. These checks verify the authored apertures; they are not manufacturer-published mechanical dimensions.

## Modeling Disclosures and Source Corrections

The model incorporates the following explicit departures from a literal transcription of every patent row:

- **No scale transform:** all radii, thicknesses, and image-plane distances remain at the Example 2 scale. No asphere
  coefficient transformation applies because the embodiment is entirely spherical.
- **Inferred stop diameter:** the patent specifies the stop location and f/0.93 but not the stop clear diameter. The
  physical stop semi-diameter, 14.083355 mm, is inferred from the pre-stop paraxial matrix and required entrance pupil.
- **Inferred semi-diameters:** the patent publishes no clear-aperture heights. Surface semi-diameters are derived from
  exact spherical ray envelopes at all three published focus states, the 11.15 mm image height, and qualitative
  comparison with Cosina's optical section.
- **Omitted sensor plate:** patent surfaces 21–22 represent a 4.20 mm, nd = 1.51680 sensor faceplate/filter assembly.
  They are excluded, and 4.20/1.51680 = 2.768987 mm is added to each rear air spacing.
- **Infinity-row correction:** Table 2 prints ZD0 = 0.10 in the 0.00× column. Paragraph 0075 identifies that column as
  the infinity state, so the model uses Infinity.
- **Jb label correction:** paragraph 0073 reverses L9 and L10. Paragraph 0072, Figure 5, and the numerical sequence agree
  on negative L10 followed by positive L9.
- **Wavelength-label correction:** the patent repeatedly prints 586.56 nm for the d line. The nd/νd notation and glass
  codes are treated as the standard 587.56 nm d-line convention.
- **No close-focus reconstruction:** the product's 0.34 m / 0.25× endpoint is retained as marketed metadata only. The
  internal model stops at the patent's published 0.20× state.

## Sources and References

1. **JP 2021-076740 A**, *大口径撮像光学系*. Example 2: ¶0068–¶0078; prescription and focus data: Table 2, p. 19;
   layout: Figure 5, p. 40; aberration plots: Figure 13, p. 41.
2. **Cosina Co., Ltd.**, “NOKTON 60mm F0.95,” official English product page:
   https://www.cosina.co.jp/voigtlander/en/micro-four-thirds/nokton-60mm-f0-95/
3. **Cosina Co., Ltd.**, “NOKTON 60mm F0.95,” official Japanese product page, including release date:
   https://www.cosina.co.jp/voigtlander/micro-four-thirds-mount/nokton-60mm-f0-95/
4. **OHARA Inc.**, official optical-glass listing for S-LAH58, code 883408:
   https://www.ohara-inc.co.jp/product/01001/
5. **VoigtlanderNokton60mmf95.audit.md**, consolidated extraction, glass, paraxial, focus, geometry, and source-correction
   audit accompanying the data file.
