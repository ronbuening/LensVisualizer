## Patent Reference and Design Identification

**Patent:** JP H9-105860 (特開平9-105860)
**Application Number:** 特願平7-262941
**Filed:** October 11, 1995 (平成7年10月11日)
**Published:** April 22, 1997 (平成9年4月22日)
**Inventor:** Kouichi Ohshita (大下 孝一)
**Applicant:** Nikon Corporation (株式会社ニコン)
**Title:** 望遠レンズ (Telephoto Lens)
**Embodiment analyzed:** Example 1 (第1実施例; Table 1)

JP H9-105860 describes a compact two-group telephoto lens with a positive front group and a negative rear group. Both groups are cemented doublets, so the optical prescription contains four elements in two air-separated groups, with the aperture stop in the inter-group air space. Example 1 is the selected embodiment. The patent table gives f = 390.004 mm, Bf = 174.594 mm, FNO = 8.13, 2A = 10.1°, and TL = 0.762.

Example 1 is the best match to the production Nikon Dodotto 400 (Tele 400mm f/8) for the following reasons:

1. **Element and group count.** The patent embodiment has four elements in two cemented groups, matching Nikon's published discussion of the Dodotto 400 as a front two-element converging group plus a rear two-element diverging group.
2. **Focal length and aperture.** The patent's f = 390.004 mm and FNO = 8.13 correspond to the production 400mm f/8 designation after ordinary marketing rounding.
3. **Timing.** The patent was filed in October 1995, before the Fun Fun LensSet's December 1995 release.
4. **Inventor and product history.** Nikon's _NIKKOR: The Thousand and One Nights_ article on the Fun Fun LensSet identifies Kouichi Ohshita as the author and describes the Dodotto 400 as a 400mm f/8 telephoto.
5. **Cost-constrained glass selection.** The prescription uses no ED, fluorite, or anomalous-dispersion glass. Nikon's retrospective notes that ED elements could not be used in the Dodotto 400 because of cost restrictions.
6. **Image circle.** The patent field angle of 2A = 10.1° at f ≈ 390 mm corresponds to an image diameter of about 68.9 mm. The aberration plots are also drawn at Y = 35.00 mm. Nikon's retrospective says the design preserved peripheral illumination sufficient for 645 medium-format use.
7. **Telephoto ratio.** The computed total track from the first surface to the paraxial image plane is 297.095 mm. Divided by the patent focal length, this gives TL = 0.762, matching the patent table.

A later related patent, JP H10-111451, is sometimes associated with the Dodotto 400 in secondary references. It was published after the production lens had already appeared. JP H9-105860 has both the necessary filing chronology and the closer numerical correspondence, so Example 1 of JP H9-105860 is used as the working prescription.

## Optical Architecture

The design is a classic positive-negative telephoto. The front group GF is a cemented positive doublet formed by a biconvex positive element L1 and a negative meniscus L2 whose concave side faces the object. The rear group GR is a cemented negative doublet formed by a biconvex positive element L3 and a biconcave negative element L4. The aperture stop lies between the two cemented components.

The patent's design objective is not high speed or professional super-telephoto correction. It is a small, inexpensive, easily assembled telephoto with a telephoto ratio near 0.76. The choice of two cemented components is central to that objective: each group is manufactured and aligned as a bonded unit, leaving only the axial spacing and centering of the two components as major assembly variables. The patent explicitly frames this as a way to reduce sensitivity to internal group spacing and tilt errors (¶0011-0012).

The front group provides the primary positive power. Its independently traced paraxial focal length is +210.855 mm, so f1/f = 0.541. The rear group has a paraxial focal length of −202.913 mm, so f2/f = −0.520. This strong negative rear group moves the rear principal plane forward and compresses the physical track to roughly 76% of the focal length.

The rear group also acts as a field flattener and rear converter. The patent describes the rear cemented component as a negative meniscus concave toward the image side, correcting residual field curvature from the front group and magnifying the focal length of the front group (¶0010). This is the functional distinction between this lens and a simple telescope objective placed in a long tube.

## Element-by-Element Analysis

### L1 — Biconvex Positive, front crown

nd = 1.62280, νd = 57.03. Glass: S-BSM10 (OHARA) match. f = +98.17 mm in air.

L1 is the leading positive element of the front cemented doublet. Its object-side radius is +146.186 mm and its cemented rear radius is −103.020 mm, making it a strong biconvex positive element. In the front group it supplies most of the converging power and works with L2 to correct spherical and chromatic aberration within the group rather than relying on later compensation.

The glass is a moderate-index barium crown. The patent's nd value matches current OHARA S-BSM10 at the d line. The listed patent νd differs from current catalog S-BSM10 only by last-digit melt or catalog rounding.

### L2 — Negative Meniscus, concave to object

nd = 1.75692, νd = 31.62. Glass: unmatched dense flint, 757/316 code. f = −181.11 mm in air.

L2 is cemented to L1 at R2 = −103.020 mm and exits to air at R3 = −419.760 mm. Both radii are negative in the patent sign convention, so the element is a negative meniscus with the concave side facing the object. This matches the prose definition of the second element in the claim and detailed description.

The L1-L2 index difference is n2 − n1 = 0.13412. The patent makes this index difference a condition because the cemented interface is being used to correct zonal spherical aberration without adding another air-spaced surface (¶0016). The dispersion difference between L1 and L2 provides the front group's ordinary achromatization, but the patent does not support any apochromatic claim.

The L2 glass code does not correspond cleanly to a current public catalog entry from OHARA, SCHOTT, HOYA, HIKARI, CDGM, or Sumita within a tight nd/νd tolerance. The data file therefore labels it explicitly as unmatched rather than forcing a speculative catalog name.

### L3 — Biconvex Positive, rear flint

nd = 1.62004, νd = 36.27. Glass: S-TIM2 (OHARA) match. f = +174.63 mm in air.

L3 is the positive component in the rear cemented doublet. Its biconvex shape is defined by R5 = +191.786 mm and R6 = −247.184 mm. Although it is a positive element, νd ≈ 36 places it in flint territory rather than crown territory.

This is not a conventional crown-positive/flint-negative achromat. The rear doublet instead uses a higher-dispersion positive element against a lower-dispersion negative element. That reversed pairing is consistent with the patent's emphasis on Petzval and spherical-aberration correction in the rear group rather than on independent rear-group achromatism (¶0019).

The patent's nd value matches current OHARA S-TIM2 at the d line. The minor νd difference is catalog rounding.

### L4 — Biconcave Negative, rear BK7-class crown

nd = 1.51680, νd = 64.10. Glass: BK7-class crown; N-BK7 (SCHOTT) is the closest public catalog match checked here. f = −92.72 mm in air.

L4 is cemented to L3 at R6 = −247.184 mm and exits to air at R7 = +59.608 mm. The element is biconcave and provides the strongest negative single-element power in the system. The rear surface is also the largest negative contributor to the surface-by-surface Petzval sum.

Current OHARA S-BSL7 is a nearby 516/641 glass, but its catalog nd = 1.51633 does not match the patent's nd = 1.51680 as closely as SCHOTT N-BK7. The corrected identification is therefore BK7-class crown, with N-BK7 used as the principal public catalog match and S-BSL7 treated only as a nearby OHARA code-equivalent.

The patent's eighth condition, n3 − n4 = 0.103, depends on the index contrast between L3 and L4. The rear doublet uses this contrast to balance Petzval sum and spherical aberration while preserving the simple two-component mechanical construction.

## Glass Identification

| Element | nd | νd | Identification | Match quality |
|---|---:|---:|---|---|
| L1 | 1.62280 | 57.03 | S-BSM10 (OHARA) | Exact nd; νd within catalog/melt rounding |
| L2 | 1.75692 | 31.62 | Unmatched dense flint, 757/316 code | No current public catalog match found |
| L3 | 1.62004 | 36.27 | S-TIM2 (OHARA) | Exact nd; νd within catalog rounding |
| L4 | 1.51680 | 64.10 | BK7-class crown; N-BK7 (SCHOTT) closest checked match | Better match than current OHARA S-BSL7 |

The front group follows the ordinary positive crown plus negative flint pattern. The rear group reverses the dispersion ordering: the positive L3 is the higher-dispersion element and the negative L4 is the lower-dispersion crown. This is a field-flatness and Petzval-control choice more than a pure rear-group achromatization choice.

No ED, super-ED, fluorite, or anomalous-partial-dispersion glass is present. This matches Nikon's retrospective statement that ED glass was excluded from the Dodotto 400 for cost reasons.

## Focus Mechanism

The production Dodotto 400 uses unit focusing. The entire optical assembly translates forward relative to the film plane for close focus. The patent publishes only the infinity prescription and does not provide a close-focus prescription or variable-spacing table.

The data file therefore uses a simplified unit-focus approximation based on the commonly published 4.5 m minimum focus distance for the production lens. With f = 390.008 mm, the thin-lens extension estimate is:

$$
\Delta = \frac{f^2}{s-f} = 37.009\ \text{mm}
$$

This increases the final back focal gap from 174.594 mm at infinity to 211.603 mm at close focus and gives an estimated magnification of β ≈ −0.0949, or about 1:10.5.

| Parameter | Infinity | Close-focus estimate |
|---|---:|---:|
| Final BFD / data-file variable gap | 174.594 mm | 211.603 mm |
| Unit-focus extension | 0 mm | 37.009 mm |
| Magnification | 0 | −0.0949 |

The estimate is included for LensVisualizer focus motion. It should not be treated as a patent-published close-focus optical design.

## Conditional Expressions

The patent states eight design conditions. Recalculation from the Example 1 prescription gives the following values:

| Condition | Expression | Patent range | Computed value | Patent Table 4 |
|---|---|---:|---:|---:|
| (1) | f1/f | 0.50 to 0.60 | 0.541 | 0.541 |
| (2) | f2/f | −0.63 to −0.50 | −0.520 | −0.520 |
| (3) | d3/f | 0.26 to 0.35 | 0.274 | 0.274 |
| (4) | n2 − n1 | 0.10 to 0.20 | 0.134 | 0.134 |
| (5) | (n2 − n1)·r3/f | −0.16 to −0.08 | −0.144 | −0.144 |
| (6) | r4/f | 0.40 to 0.60 | 0.492 | 0.492 |
| (7) | n1 − 40/ν1 − 0.5·n2 + 20/ν2 | 0.65 to 0.68 | 0.6755 ≈ 0.676 | 0.676 |
| (8) | n3 − n4 | 0.08 to 0.13 | 0.103 | 0.103 |

Here d3 is the full air spacing from L2's rear surface to L3's front surface, i.e. 60.000 mm from surface 3 to the stop plus 47.000 mm from the stop to surface 5. The patent's r4 corresponds to the surface numbered 5 in the prescription table because surface 4 is the aperture stop.

All eight conditions are satisfied. The condition (7) last digit is sensitive to the displayed Abbe-number rounding; the patent table reports 0.676.

## Verification Summary

A separate paraxial y-nu / ABCD trace was run directly from the Example 1 surface data. The result confirms the prescription and identifies no sign errors in the radii or refractive indices.

| Quantity | Computed | Patent | Difference |
|---|---:|---:|---:|
| EFL | 390.008 mm | 390.004 mm | +0.004 mm |
| BFD | 174.597 mm | 174.594 mm | +0.003 mm |
| Front group focal length | +210.855 mm | — | — |
| Rear group focal length | −202.913 mm | — | — |
| Total track, first surface to image | 297.095 mm | — | — |
| Telephoto ratio | 0.762 | 0.762 | <0.001 |
| Aperture stop SD for FNO = 8.13 | 16.566 mm | — | — |
| Entrance pupil SD for FNO = 8.13 | 23.986 mm | — | — |
| Petzval sum, surface-by-surface φ/(n·n′) | −3.55 × 10⁻⁴ mm⁻¹ | — | — |
| Petzval radius using −1/P convention | +2814 mm | — | — |

The Petzval calculation uses the surface-by-surface sum φ/(n·n′). It should not be replaced by a thin-lens element-power approximation, which gives a different and less reliable result for cemented components.

The patent does not publish semi-diameters. The data file uses inferred mechanical semi-diameters: 28.0 mm for the leading cemented group, 16.566 mm for the patent f/8.13 stop, and 18.6 mm for the rear cemented group. These values pass spherical edge-thickness and cross-gap checks. A fully unvignetted 645-corner f/8.13 bundle would require about 32.4 mm semi-diameter at the first element, which is not compatible with the L1 center thickness and curvature. The 645-format statement should therefore be read as sufficient illumination/coverage, not as unvignetted full-aperture 645 coverage.

## Design Heritage and Context

Nikon's retrospective account says the Dodotto 400 began as a simpler two-element telescope-objective concept, but that version produced a roughly 40 cm optical/mechanical length and led to an unwieldy two-stage barrel. The final design increased the optical count to four elements so that the mechanical structure could be simplified and the total length reduced.

The resulting lens is a deliberately sparse telephoto. It does not attempt the correction standard of Nikon's professional 400 mm lenses, and the lack of ED glass leaves visible longitudinal color in demanding situations. Within those constraints, the two-cemented-doublet architecture is internally coherent: the front group supplies most of the imaging power and ordinary axial color correction, while the negative rear group compresses the track and improves edge-field behavior.

## Sources

- JP H9-105860 (特開平9-105860), Kouichi Ohshita, "望遠レンズ" (Telephoto Lens), filed October 11, 1995, published April 22, 1997.
- Nikon Imaging. Kouichi Ohshita, "NIKKOR: The Thousand and One Nights — Tale 54: Nikon Fun Fun LensSet, Part 2 (Gyogyotto 20, Dodotto 400)." https://imaging.nikon.com/imaging/information/story/0054/
- OHARA Corporation, S-BSM10 optical-glass datasheet / catalog page. https://oharacorp.com/glass/s-bsm10/
- OHARA Corporation, S-TIM2 optical-glass datasheet / catalog page. https://oharacorp.com/glass/s-tim2/
- OHARA Corporation, S-BSL7 optical-glass datasheet / catalog page. https://oharacorp.com/glass/s-bsl7/
- SCHOTT, N-BK7 optical-glass datasheet. https://www.schott.com/shop/advanced-optics/en/Optical-Glass/N-BK7/c/glass-N-BK7
