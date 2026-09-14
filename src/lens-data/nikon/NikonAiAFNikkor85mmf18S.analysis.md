## Patent Reference and Design Identification

**Patent:** US 4,812,027 A<br>
**Application Number:** 206,292<br>
**Priority:** June 19, 1987 and September 18, 1987 (Japan)<br>
**Filed:** June 14, 1988<br>
**Granted:** March 14, 1989<br>
**Inventor:** Masaaki Yanagisawa<br>
**Assignee:** Nikon Corporation<br>
**Title:** *Gauss Type Near Focus Lens*<br>
**Embodiment analyzed:** Example 1

The prescription represented here is Example 1 of US 4,812,027 A, used as the fixed production correlation for the **NIKON AI AF NIKKOR 85mm f/1.8 S**. The patent gives an 85 mm, f/1.8, 28° full-field design with six elements in six air-spaced groups and rear focusing by translation of the rear three-element group.[1]

The production correlation is supported by several independent points without implying that Nikon explicitly identified the patent. Nikon's historical *NIKKOR - The Thousand and One Nights No. 32* identifies its Figure 1 as the Ai AF Nikkor 85mm f/1.8S, dates the lens to 1988, describes its layout as a new form of Gaussian lens, and states that focusing is performed by moving only the rear three-element group.[2] Those details agree with Example 1 in focal length, aperture, element/group count, broad layout, focusing architecture, maker, and development period. Nikon's article does not cite US 4,812,027 or state that Example 1 is the production prescription; the example-to-product identification therefore remains a documented correlation rather than a manufacturer-confirmed patent attribution.

The data file keeps marketed and computed quantities separate. The marketed focal length is 85 mm, while paraxial tracing of the transcribed prescription gives a design EFL of 84.869191 mm. The maximum aperture is f/1.8 in both the patent and the final stop model. The catalog metadata assigns Nikon F mount and the 135 format; Nikon's later AF Nikkor 85mm f/1.8D product page documents the same production family as an F-bayonet, FX/35mm-film, six-element/six-group rear-focus lens with a 0.85 m minimum focus distance.[3]

## Optical Architecture

Example 1 is an all-spherical, six-element/six-group modified Gauss design divided by the aperture region into two three-element functional groups. The forward group **GF** is fixed during focusing and contains positive menisci L1 and L2 followed by a strong negative meniscus L3. The rear group **GR** contains negative meniscus L4, positive meniscus L5, and biconvex positive L6; it translates as a rigid unit for close focusing.[1]

Both GF and GR have net positive refractive power. Independent matrix evaluation of the final data gives standalone group EFLs of approximately +138.340 mm for GF and +71.928 mm for GR. These are isolated group powers at the published internal spacings, not substitutes for the complete-system EFL. The complete infinity-focus system has EFL 84.869191 mm because the two groups interact across the large central air space.

The design's defining architectural choice is rear focusing. Instead of translating the complete large-aperture Gauss system, only L4-L6 move. Nikon's retrospective describes the same three-element moving rear group in the production lens and presents this as the key change that made the 85 mm f/1.8 compatible with autofocus requirements.[2]

Although 85 mm is a medium-telephoto focal length on 135 format, the prescription is not a telephoto optical configuration under the criterion `TL/EFL < 1`: total first-surface-to-image track divided by EFL is 1.20233, greater than unity. It is also not retrofocus; the infinity back-focus distance is much shorter than the EFL.

The patent places the stop between GF and GR but does not tabulate its exact coordinate or clear diameter. A 300-dpi measurement of Figure 1 places the stop at approximately 34.0% of the surface-6-to-surface-7 interval, corresponding to about 9.4 mm after surface 6. The final data therefore models one fixed `STO` at that coordinate. Its 13.716100 mm semi-diameter is solved from the paraxial entrance pupil so that the prescription operates at f/1.8. Both quantities, like the surface semi-diameters, are modeling inferences rather than published Nikon mechanical dimensions.

## Element-by-Element Analysis

The focal lengths quoted below are **standalone thick-element EFLs in air**, independently recomputed from each element's two refracting surfaces. They should not be read as in-situ powers of the complete groups or lens.

### L1 — Positive Meniscus

**nd = 1.76684, νd = 46.76. Glass: 767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +66.766 mm.**

L1 is the first positive component of GF. Its convex surface faces the object side, matching the element form specified in the patent. With relatively high refractive index and moderate Abbe number, it supplies substantial positive power at the front of the system without requiring an extremely short standalone focal length.[1]

The same `nd`/`νd` coordinate is reused in L6, but the data file does not infer that the two elements necessarily came from a named production melt. The shared six-digit code records only the optical coordinate.

### L2 — Positive Meniscus

**nd = 1.72000, νd = 50.28. Glass: 720503 — J-LAK10 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +86.904 mm.**

L2 is the second positive meniscus in GF. It continues the forward group's positive power while leaving the strongly negative correction to L3. The patent describes L1 and L2 as successive positive menisci with their convex surfaces facing the object side.[1]

Its higher Abbe number than L3 gives the forward triplet a substantial dispersion contrast, but the patent publishes only d-line index and Abbe data. No stronger claim about secondary-spectrum behavior is made from that contrast alone.

### L3 — Negative Meniscus

**nd = 1.78470, νd = 26.07. Glass: 785261 — SF56A (SCHOTT) coordinate-compatible spectral proxy; production supplier unresolved. f = −34.077 mm.**

L3 is the strongest standalone negative element in the prescription and completes GF. The patent specifies a negative meniscus with a sharply concave surface facing the image side. Its strongly curved rear surface lies immediately before the large central air space and the aperture region.[1]

The L1-L3 combination remains net positive despite L3's negative power. This is the fixed forward optical block throughout the published focusing range.

### L4 — Negative Meniscus

**nd = 1.62588, νd = 35.64. Glass: 626356 — F1 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved. f = −52.501 mm.**

L4 is the first element of the translating rear group GR. The patent identifies it as a negative meniscus whose sharply concave surface faces the object side.[1] Its rear surface and the front surface of L5 bound the air space that the patent treats explicitly as a negative air lens.

This relationship is central to the patent's rear-group strategy. The patent states that negative refractive power contributed by the L4-L5 air lens allows the negative power of L4 itself to be made weaker, with flatter surface curvature, which is intended to ease spherical-aberration and coma correction while keeping the moving rear group light.[1]

### L5 — Positive Meniscus

**nd = 1.69350, νd = 53.76. Glass: 694538 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved. f = +74.568 mm.**

L5 is the middle positive element of GR and forms the second boundary of the negative air lens with L4. The patent specifically constrains the Abbe-number difference between L5 and L4: `νd5 − νd4 > 10`. The final prescription gives 53.76 − 35.64 = 18.12, satisfying the stated chromatic condition for the rear group.[1]

That condition supports a conventional achromatizing role for the L4/L5 dispersion contrast. It does not establish apochromatic correction or anomalous partial dispersion; neither the patent nor the final data provides the spectral information required for those claims.

### L6 — Biconvex Positive

**nd = 1.76684, νd = 46.76. Glass: 767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +67.721 mm.**

L6 is the rear biconvex positive element and completes GR. Together with L4 and L5 it produces a net-positive three-element rear group. During focusing, L6 does not move independently: all six surfaces of L4-L6 translate by the same axial amount in the published two-state prescription.

Its optical coordinate is the same as L1's, giving the outer positive components matching d-line index and Abbe values even though their curvatures and in-situ roles differ.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number at the helium d line, 587.6 nm, but it does not identify glass manufacturers or catalog names. The final data preserves the five distinct optical coordinates and uses compatible catalog curves as spectral proxies without promoting any catalog product to production identity.

| Coordinate code | nd | νd | Elements | Data-file interpretation |
|---|---:|---:|---|---|
| 767468 / J-LASFH2 proxy | 1.76684 | 46.76 | L1, L6 | Coordinate-compatible curve; production supplier unresolved |
| 720503 / J-LAK10 proxy | 1.72000 | 50.28 | L2 | Coordinate-compatible curve; production supplier unresolved |
| 785261 / SF56A proxy | 1.78470 | 26.07 | L3 | Coordinate-compatible curve; production supplier unresolved |
| 626356 / F1 proxy | 1.62588 | 35.64 | L4 | Coordinate-compatible curve; production supplier unresolved |
| 694538 / H-LaK6A proxy | 1.69350 | 53.76 | L5 | Coordinate-compatible curve; production supplier unresolved |

A separate catalog audit found coordinate-compatible candidates from multiple manufacturers for these rows. In several cases more than one vendor falls within the project's `nd`/`νd` tolerance, so coordinate agreement cannot establish the Nikon production melt. The proxy labels in the data file are therefore deliberately qualified.[4]

No `nC`, `nF`, `ng`, partial-dispersion ratio, or `dPgF` value is published for Example 1, and none is authored in the data. The analysis consequently makes no APO, anomalous-partial-dispersion, or secondary-spectrum claim that would require line-index or validated Sellmeier evidence.

## Focus Mechanism

The focus status is **PUBLISHED**. Example 1 gives both infinity and close-focus values for the central GF-to-GR spacing and the final back-focus spacing. L4-L6 translate 12.6617 mm toward the object as one rigid rear group, while L1-L3 and the image plane remain fixed.[1]

| Quantity | Infinity | Close endpoint | Change |
|---|---:|---:|---:|
| Complete GF-to-GR air space | 27.6330 mm | 14.9713 mm | −12.6617 mm |
| Modeled fixed surface-6-to-STO segment | 9.4000 mm | 9.4000 mm | 0 |
| Modeled STO-to-L4 segment | 18.2330 mm | 5.5713 mm | −12.6617 mm |
| Surface-12 to image plane (`BF`) | 38.2080 mm | 50.8697 mm | +12.6617 mm |

The split at `STO` is a modeling inference, not an additional published focus state. Its two parts always sum to the patent's complete d6 value. Because the rear-group objectward shift equals the increase in back focus, the image plane remains fixed at 102.0410 mm from surface 1 in both defined states.

Independent conjugate solution of the close state gives an object distance of 0.849892 m measured from the fixed image plane, reproducing the patent's statement that the lens focuses to a distance of the order of 0.85 m. The corresponding paraxial magnification is −0.109172. Only the two endpoints are source facts; intermediate positions in the visualization are model interpolation and are not presented as published kinematics.

Nikon's retrospective independently confirms the production mechanism at the architectural level: the AF 85 mm f/1.8 focuses by moving only the rear three-element group.[2] It does not provide the patent's numerical travel values.

## Air Lens

The 2.000 mm air space between the rear surface of L4 and the front surface of L5 is not merely a separation between components; US 4,812,027 treats those two surfaces as a negative air lens. Independent calculation from the final data gives this air lens a standalone EFL of approximately −252.915 mm.

The patent uses that negative air-lens power in condition (4), `−1 < f/fAIR < 0`, and explains the design rationale in mechanical as well as aberrational terms: the air lens permits L4's own negative refractive power to be reduced, allowing flatter curvatures and a lighter moving GR assembly while avoiding an excessive close-focus travel requirement.[1]

This is distinct from both L4's standalone focal length (−52.501 mm) and GR's net focal length (+71.928 mm). The three quantities describe different optical objects and should not be conflated.

## Conditional Expressions

The patent defines five conditions for the Gauss rear-focus system. Four are determined directly from the numerical prescription. Condition (3) depends on the marginal ray and therefore is not uniquely fixed by the table alone because the stop coordinate and clear diameter are omitted; under the disclosed Figure 1 stop model, however, an exact spherical/Snell marginal-ray trace can test it independently.

| Condition | Independent / published value | Result |
|---|---:|---|
| `0.3 < l/f < 0.4` | 27.6330 / 85 = 0.325094 | Pass |
| `0.7 < fR/f < 0.9` | 71.928058 / 85 = 0.846212 | Pass |
| `0.4 < Hex/Hin < 0.6` | 0.473805 from the modeled exact marginal ray; patent prints 0.47 | Pass; model-dependent |
| `−1 < f/fAIR < 0` | 85 / −252.915012 = −0.336081 | Pass |
| `10 < νd5 − νd4` | 53.76 − 35.64 = 18.12 | Pass |

The first two conditions constrain the central separation and rear-group power. Condition (3) limits the change in marginal-ray height across the complete lens and the inferred stop model reproduces the printed 0.47 value. Conditions (4) and (5) govern the L4/L5 air-lens and glass-dispersion relationships. The independently computed values reproduce the patent's rounded entries within the precision of the published table.[1]

## Verification Summary

Independent sequential y–ν tracing and a separately assembled ABCD matrix agree to machine precision for the final TypeScript prescription. At infinity the computed EFL is 84.869191 mm and the paraxial back focal distance from surface 12 is 38.206572 mm. The latter differs from the patent's printed 38.2080 mm by only 0.001428 mm, consistent with the source precision of the radii, spacings, and indices.[4]

The inferred stop model produces an entrance-pupil semi-diameter of 23.574776 mm and a modeled wide-open f-number of 1.800000; `nominalFno` therefore remains 1.8. The stop coordinate and semi-diameter are modeling inferences and are not presented as patent or production mechanical dimensions.

The surface semi-diameters are also inferred because the patent gives none. They were checked at both defined focus states for positive element edge thickness, actual spherical rim slope, shared-gap intrusion, stop clearance, and exact meridional ray containment. The minimum tested glass-surface ray clearance is 0.273 mm, the minimum element edge thickness is 2.365 mm, the maximum rim angle is 43.934°, and the close-focus stop-to-L4 edge clearance is 1.377 mm. These checks validate the visualization geometry; they do not convert the modeled semi-diameters into Nikon manufacturing specifications.[4]

The Petzval sum computed surface by surface as `φ/(n·n′)` is +0.001709793 mm⁻¹, corresponding to a Petzval-radius magnitude of approximately 584.866 mm under the adopted sign convention. No cemented junctions, aspherical surfaces, folded paths, diffractive surfaces, or independent aberration-control motions are present.

No scale factor was applied: patent millimeters are retained directly. No patent prescription value was corrected. Example 1 contains no sensor cover plate, filter, inactive dummy/flare-cutter plane, or mechanical surface requiring omission or air-equivalent rear-spacing compensation in the sequential model.

## Sources and References

1. Masaaki Yanagisawa, **US 4,812,027 A, “Gauss Type Near Focus Lens,”** Nikon Corporation, granted March 14, 1989. Example 1, Figures 1-3, Tables 1-3, and claims. Primary prescription source.
2. Nikon, **NIKKOR - The Thousand and One Nights No. 32**, section “I. AF 85mm f/1.8.” <https://imaging.nikon.com/imaging/information/story/0032/>. Production identity, 1988 release timing, Figure 1 identification, and three-element rear-focus mechanism.
3. Nikon, **AF Nikkor 85mm f/1.8D**, official product page. <https://www.nikonusa.com/p/af-nikkor-85mm-f18d/1931/overview>. Manufacturer metadata for Nikon F-bayonet mount, FX/35mm-film coverage, six elements in six groups, 0.85 m minimum focus, and rear focusing in the later D version of the 85mm f/1.8 production family.
4. **Independent Stage 4 calculation and glass-audit artifacts for `NikonAiAFNikkor85mmf18S`**, recomputed from the clean `.data.ts` arrays. Catalog comparison used authoritative material from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita; coordinate-compatible catalog products are treated as candidates rather than production identities.
