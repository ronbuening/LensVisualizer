# NIKON AF FISHEYE-NIKKOR 16mm f/2.8D

## Patent Reference and Design Identification

**Patent:** US 5,434,713 A
**Priority:** 26 March 1992
**Filed:** 19 March 1993
**Granted:** 18 July 1995
**Inventor:** Haruo Sato
**Assignee:** Nikon Corporation
**Title:** *Fisheye Lens Having a Short Distance Compensating Function*
**Embodiment analyzed:** Example 1 / First Embodiment

The Example 1 prescription is assigned to the Nikon AF Fisheye-Nikkor 16mm f/2.8D. Nikon's product literature identifies the production lens and its designer, but it does not explicitly cite US 5,434,713 A. The production correlation therefore rests on convergent design evidence rather than a manufacturer statement that names the patent. The modeled production form uses Nikon F mount and the 135 full-frame format.

1. Haruo Sato is both the patent inventor and the Nikon designer identified in the official retrospective on the production lens.
2. Patent Figure 1 and Example 1 show eight active elements in five air-separated groups: two front negative menisci followed by three cemented doublets. Nikon gives the production lens the same 8-element/5-group count and publishes a matching optical section.
3. The computed design focal length is 15.6685487655 mm, consistent with the marketed 16 mm designation without scaling.
4. The patent identifies the worked embodiments as 180° diagonal fisheyes and specifies a two-group short-distance compensation mechanism. Nikon specifies a 180° maximum field on FX/35 mm and Close-Range Correction for the production lens; it does not separately label that angle as diagonal on the product page.
5. Nikon's retrospective places design completion in 1991, trial production in 1992, mass production in 1993, and release in November 1993, consistent with the patent's 1992 priority and 1993 filing.

The exact modeled values remain distinct from the marketed specifications. The prescription computes to 15.6685487655 mm at f/2.9; the production lens is marketed as 16 mm f/2.8. No uniform scale was applied.

## Optical Architecture

The design is an all-spherical retrofocus diagonal fisheye with 8 elements in 5 groups. Its front functional group G1 has negative refracting power, while rear group G2 has positive refracting power. A single aperture stop lies in the air space between the two groups. The active system contains eight elements in five groups, with cemented positive doublets L3, L4, and L5.

G1 comprises the large negative meniscus L1, a second negative meniscus L2, and the cemented L31-L32 doublet. Its independently computed isolated group focal length is −40.1985 mm. G2 comprises the cemented L41-L42 and L51-L52 doublets and has an isolated group focal length of +30.6344 mm. Their separated combination produces the complete positive focal length of 15.6685487655 mm.

The active prescription has a back focal length of 40.2717943624 mm from surface 13, giving `BFD/EFL = 2.5702313`; it therefore meets the stated retrofocus criterion, `BFD > EFL`. Its active first-vertex-to-image track is 99.0068392405 mm, giving `TL/EFL = 6.3188264`, so it does not meet the telephoto criterion `TL/EFL < 1`. The long rear clearance arises from the strongly asymmetric negative-front/positive-rear power distribution.

The patent includes a plane-parallel rear filter after L5. The active model excludes that plate and preserves its first-order optical-path effect in the final air-equivalent image spacing. No sensor cover glass, dummy plane, mechanical surface, or asphere is included.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

`nd = 1.64000`, `νd = 60.0`. Glass: `J-LAK01 (Hikari catalog equivalent to patent 640600; production supplier unspecified)`. Standalone `f = −30.7150 mm`.

L1 is the large front negative meniscus responsible for accepting the extreme object-space field and initiating the fisheye's angular compression. Its convex object-side form keeps the first surface comparatively weak while the steep rear surface supplies most of the element's negative power. The patent also uses L1's Abbe number in Condition (5), requiring `νd1 ≥ 52`; the modeled value is 60.0.

The stated focal length is the thick element isolated in air. Its effect inside G1 differs because the following elements are reached at enlarged ray heights.

### L2 — Negative Meniscus, Convex to Object

`nd = 1.62041`, `νd = 60.1`. Glass: `620601 — SK16/BSM16 crown class (vendor unassigned)`. Standalone `f = −27.0464 mm`.

L2 continues the negative front-group action after the large air space behind L1. Its rear surface is steep, so its in-situ contribution depends strongly on the ray height produced by L1. Together, L1 and L2 establish the divergent front section required for 180° coverage and the long rear focal clearance.

### L31 — Biconvex Positive Member of Cemented Doublet L3

`nd = 1.62588`, `νd = 35.7`. Glass: `626357 — F1/TIM1 flint class (vendor unassigned)`. Standalone `f = +17.7508 mm`.

L31 is the strongly positive member of the front cemented doublet. It reverses much of the divergence generated by L1 and L2 before the stop region. Its relatively low Abbe number is retained exactly from the patent; the catalog label denotes a coordinate class rather than an asserted Nikon melt.

### L32 — Negative Meniscus Member of Cemented Doublet L3

`nd = 1.79668`, `νd = 45.4`. Glass: `J-LASF017 (Hikari catalog equivalent to patent 797454; production supplier unspecified)`. Standalone `f = −38.2342 mm`.

L32 is a high-index negative meniscus cemented to L31. The pair remains net positive, with a computed cemented focal length of +37.2245 mm. The cemented interface permits the two glasses to redistribute power and dispersion without an additional air gap. HIKARI J-LASF017 differs from the patent row by only `Δnd = −0.00168` and `Δνd = −0.09`, so it is retained as a coefficient-backed optical equivalent without asserting the production melt.

### L41 — Biconcave Negative Member of Cemented Doublet L4

`nd = 1.58144`, `νd = 40.8`. Glass: `581408 — FL5/TIL25 flint class (vendor unassigned)`. Standalone `f = −31.7113 mm`.

L41 begins the positive rear functional group with a negative biconcave component. This placement allows the rear group to receive the converted ray bundle without concentrating all positive power at its first surface. The element is not a negative rear group by itself; it is the negative member of a net-positive cemented assembly.

### L42 — Biconvex Positive Member of Cemented Doublet L4

`nd = 1.51823`, `νd = 58.9`. Glass: `J-K3 (Hikari catalog equivalent to patent 518589; production supplier unspecified)`. Standalone `f = +22.2475 mm`.

L42 supplies the dominant positive power in L4. The L41-L42 cemented pair has a computed net focal length of +61.4602 mm. Its crown/flint dispersion contrast contributes to primary chromatic balancing, but the available `nd` and `νd` data do not establish apochromatic or anomalous-partial-dispersion behavior.

### L51 — Biconvex Positive Member of Cemented Doublet L5

`nd = 1.51860`, `νd = 70.0`. Glass: `J-PKH1 (Hikari catalog equivalent to patent 519700; production supplier unspecified)`. Standalone `f = +27.0297 mm`.

L51 is the low-dispersion positive component of the rearmost cemented doublet. Its high Abbe number contrasts sharply with the dense-flint L52. This pairing supplies positive rear power while providing a strong ordinary-dispersion lever for longitudinal and lateral color correction.

### L52 — Negative Meniscus Member of Cemented Doublet L5

`nd = 1.78470`, `νd = 26.1`. Glass: `785261 — dense-flint class (nearest J-SFS3/S-TIH23)`. Standalone `f = −47.6671 mm`.

L52 is the high-index, high-dispersion negative member at the rear of the active lens. Together with L51 it forms a net-positive cemented doublet with a computed focal length of +61.1952 mm. The patent's Condition (4) is directed specifically at the refractive-index contrast of this pair. The numerical prescription gives `nn − np = 1.78470 − 1.51860 = 0.26610`.

### Standalone, Cemented, and In-Situ Power

The element focal lengths above are isolated thick-element values in air; they must not be added to infer the system power. The independently recomputed cemented net focal lengths are +37.2245 mm for L3, +61.4602 mm for L4, and +61.1952 mm for L5. These are again isolated assembly values.

The actual ray action depends on the ray heights and reduced angles established by the preceding optics. For a unit-height parallel input ray, the reduced-angle changes across L1, L2, L3, L4, and L5 are respectively +0.0325574, +0.0503903, −0.0580711, −0.0442350, and −0.0444637. These are in-situ changes in ray state, not focal powers, and they show why isolated element or doublet focal lengths cannot substitute for a sequential trace.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number at the d-line, 587.6 nm, but does not name glass manufacturers or melts. The data preserves those exact coordinates. Named modern glasses are coefficient-backed optical equivalents, not claims about the original Nikon production supplier or melt.

| Element | `nd` | `νd` | Authored glass annotation | Identification basis |
|---|---:|---:|---|---|
| L1 | 1.64000 | 60.0 | J-LAK01; patent 640600 | Reproduces `nd`; `Δνd = +0.20`; production supplier unspecified |
| L2 | 1.62041 | 60.1 | 620601 — SK16/BSM16 crown class | J-SK16 reproduces `nd`; `Δνd = +0.15`; vendor unassigned |
| L31 | 1.62588 | 35.7 | 626357 — F1/TIM1 flint class | J-F1 reproduces `nd`; `Δνd = +0.02`; vendor unassigned |
| L32 | 1.79668 | 45.4 | J-LASF017; patent 797454 | `Δnd = −0.00168`, `Δνd = −0.09`; production supplier unspecified |
| L41 | 1.58144 | 40.8 | 581408 — FL5/TIL25 flint class | J-LF5 reproduces `nd`; `Δνd = +0.18`; vendor unassigned |
| L42 | 1.51823 | 58.9 | J-K3; patent 518589 | Reproduces `nd`; `Δνd = −0.08`; production supplier unspecified |
| L51 | 1.51860 | 70.0 | J-PKH1; patent 519700 | Reproduces `nd`; `Δνd = −0.11`; production supplier unspecified |
| L52 | 1.78470 | 26.1 | 785261 — dense-flint class | J-SFS3 reproduces `nd`; `Δνd = +0.17`; S-TIH23 is similarly close |

The chromatic strategy uses ordinary crown/flint and low-/high-dispersion pairings across the three cemented doublets. The source provides no `nC`, `nF`, `ng`, `dPgF`, partial-dispersion ratio, or Sellmeier coefficients. Consequently, the model makes no APO or anomalous-dispersion claim and leaves all structured line-index fields unset.

## Focus Mechanism

The patent describes short-distance compensation by moving both functional groups toward the object while increasing the air space between them. Nikon describes the production implementation as Close-Range Correction. In the data model, G1 and G2 move objectward at different rates while the aperture stop remains fixed.

The patent's published `β = −1/30` row is a calibration state, not the production minimum-focus endpoint. Its printed spacings imply `X1 = 0.7876 mm`, `X2 = 0.4726 mm`, and `X2/X1 = 0.6000508`, matching the stated value 0.6 at source precision. The corresponding object-to-image distance is approximately 557.48 mm, so it cannot represent Nikon's marketed 0.25 m minimum focus.

The production endpoint is therefore a `CONSTRAINED_RECONSTRUCTION`. It retains the patent movement topology, fixes `X2/X1 = 0.6`, enforces the paraxial imaging condition at 0.25 m measured from the image plane, and is checked against Nikon's rounded 0.10× maximum reproduction ratio.

| Variable spacing | Infinity | Reconstructed 0.25 m endpoint |
|---|---:|---:|
| Surface 7 to `STO` | 6.470000 mm | 8.755470 mm |
| `STO` to surface 8 | 4.518300 mm | 3.147018 mm |
| Total G1-G2 gap `d7` | 10.988300 mm | 11.902488 mm |
| Surface 13 to image, air-equivalent | 40.268539 mm | 41.639822 mm |

The solution gives G1 objectward travel `X1 = 2.2854704520 mm` and G2 objectward travel `X2 = 1.3712822712 mm`. The reconstructed finite-conjugate magnification is −0.0971903×, which rounds to the manufacturer's 0.10× specification. The model does not claim that the production cam maintains an exactly constant 0.6 ratio throughout its full travel; that constant ratio is the explicit reconstruction constraint.

## Modeling Disclosures

### Stop Placement and Aperture

The patent places the stop within the intergroup gap but gives neither its axial station nor its diameter. A 15-vertex axial fit of Nikon's official production cross-section to the patent prescription places the stop about 6.478 mm behind surface 7, with a 0.255 pixel RMS residual in the preserved 1240 × 764 image; the data uses 6.47 mm. The stop is held fixed as a disclosed modeling choice, not because either source publishes its mechanical trajectory.

The physical stop semi-diameter, 6.6275490428 mm, is calibrated so that the paraxially imaged entrance pupil gives the patent's f/2.9 design aperture. The recovered f-number is 2.9000000000. The marketed f/2.8 designation remains separate.

### Filter Removal and Rear Reference Plane

Patent surfaces 14 and 15 form a 1.20 mm plane-parallel plate with `nd = 1.51680`. The plate is omitted from the active prescription. Its air-equivalent thickness is `1.20/1.51680 = 0.7911392405 mm`, producing the authored infinity rear spacing

`0.88 + 0.7911392405 + 38.5974 = 40.2685392405 mm`.

The active prescription computes a back focal length of 40.2717943624 mm from surface 13. The 0.0032551219 mm difference from the normalized source spacing is consistent with the patent's rounded radii and indices.

### Semi-Diameters and Geometry

The patent does not tabulate semi-diameters. The authored values are inferred from Nikon's official cross-section, checked against exact on-axis and off-axis ray footprints, and adjusted only where the geometry checks require additional clearance. Surface 2 is reduced to a 14.30 mm semi-diameter to retain positive edge thickness and S2-S3 gap clearance.

The steep rear surface of L1 reaches an actual rim angle of 70.5549°. The data therefore uses a 72° rim-angle limit rather than applying the obsolete universal `sd/|R|` rule. The S2-S3 gap has 0.91931 mm physical edge clearance and requires the declared `gapSagFrac = 0.92`. These are explicit geometry-policy choices, not hidden layout corrections.

### Fisheye Projection

The patent gives 180° coverage but no projection equation or image-height table. The data's `fisheye-equisolid` classification is therefore a modeling inference. Exact reverse chief-ray tracing through the final prescription maps the 21.6333 mm full-frame half-diagonal to 90.1956511° object-space half-field. Among the available projection families, an equisolid fit has the lowest residual over the sampled field.

The modeled projection constant is set to the computed Gaussian EFL, 15.6685487655 mm, so the design f-number continues to govern pupil sizing. This taxonomy choice should not be read as a Nikon claim that the production lens follows an exact equisolid law.

### Scaling and Aspheres

The prescription is unscaled. The marketed 16 mm focal length is a rounded product designation, while 15.6685487655 mm is the computed design EFL. All surfaces are spherical, so there is no conic convention and no aspheric coefficient transformation.

## Conditional Expressions

The patent supplies five principal conditions for the floating fisheye. Example 1 satisfies their numerical intent, but two printed source inconsistencies require explicit treatment.

| Patent condition | Computed or modeled value | Assessment |
|---|---:|---|
| `0 ≤ X2/X1 ≤ 0.9` | 0.6000508 from the published calibration row; 0.6000000 in the reconstruction | Satisfies the stated and preferred `≤ 0.8` ranges |
| `−1.5 ≤ α ≤ 1` | −0.3897808 | Satisfies the condition; supports Claim 13's −0.3898 |
| `1 ≤ f2/f ≤ 5` | 1.955153 | Satisfies the condition and rounds to 1.96 |
| Intended rear-doublet contrast `nn − np ≥ 0.15` | 0.26610 | Satisfies the numerical intent |
| `νd1 ≥ 52` | 60.0 | Satisfies the condition |

Table 1 prints `α = −0.3893`, whereas Claim 13 prints `−0.3898`. Reproduction of the patent's own paraxial recurrence gives `−0.3897808223`; the analysis therefore retains both source values and identifies Claim 13 as the numerically supported one.

The text prints Condition (4) with the operands reversed as `0.15 ≤ np − nn`. Example 1 has `np = 1.51860` and `nn = 1.78470`, so the printed expression evaluates to −0.26610 and cannot pass. The corresponding-value tables consistently give `nn − np = +0.266`. The data and analysis preserve the contradiction and use the demonstrable numerical intent rather than silently presenting the printed formula as valid.

## Aberration Correction Strategy

The patent treats the lens as an extremely asymmetric retrofocus system whose large negative distortion changes the usual close-focus behavior. It states that simple overall extension causes a harmful negative shift of field curvature in a fisheye. Increasing the G1-G2 air space during focusing introduces an opposing positive shift, allowing the two effects to be balanced.

Condition (2) controls the conversion inclination of the paraxial marginal ray at the front of G2. The computed `α = −0.3897808` keeps that ray from becoming excessively convergent or divergent when the intergroup spacing changes. In the patent's design argument, this limits the accompanying fluctuation of spherical aberration while the floating motion addresses field curvature.

The computed Petzval sum is `+0.0003798027562 mm⁻¹`, with a signed reciprocal of +2632.9456 mm. Individual positive and negative surface contributions largely cancel. This first-order result describes Petzval balance only; it does not by itself predict the complete astigmatic field surfaces or the nonlinear fisheye projection.

The rearmost L51-L52 doublet also follows the patent's specified index-contrast strategy, while L1 satisfies the front-meniscus Abbe-number condition. These constraints distribute monochromatic and chromatic correction across the architecture rather than relying on aspherical surfaces or identified anomalous-dispersion glass.

## Verification Summary

Independent verification imports the actual TypeScript data object and recomputes its optical and geometric results. It uses independent reduced-angle sequential tracing and ABCD multiplication for the paraxial cross-check.

| Quantity | Verified result |
|---|---:|
| Infinity EFL | 15.6685487655 mm |
| Infinity BFL from surface 13 | 40.2717943624 mm |
| Modeled maximum aperture | f/2.9000000000 |
| Close-configuration EFL | 15.4883916360 mm |
| Reconstructed close magnification | −0.0971902755× |
| Petzval sum | +0.0003798027562 mm⁻¹ |
| Patent conversion inclination `α` | −0.3897808223 |
| Maximum actual rim angle | 70.5548755° |
| Minimum element edge thickness | 1.6514157 mm |
| Minimum cross-gap clearance | 0.9193098 mm |
| Full-frame diagonal traced half-field | 90.1956511° |

The infinity and close ABCD implementations agree within `7.11 × 10⁻15`. Both focus states pass the local edge-thickness, rim-slope, cross-gap, and nonnegative-spacing checks. The default 54° off-axis rendered bundle, the close-focus on-axis bundle, and the full-field chief ray at the 21.6333 mm half-diagonal remain within the stored apertures. Marginal pupil samples at the 90° edge field are partly vignetted, so this model does not claim an unvignetted f/2.9 pupil across the full diagonal. No conic-limit test applies because the design is all-spherical.

## Sources and References

1. Haruo Sato, *Fisheye Lens Having a Short Distance Compensating Function*, US 5,434,713 A, especially Figure 1, Table 1, and Claim 13.
2. Nikon, [NIKKOR — The Thousand and One Nights No. 53](https://imaging.nikon.com/imaging/information/story/0053/), official design history by Haruo Sato.
3. Nikon, [official production optical section](https://imaging.nikon.com/imaging/information/story/0053/img/img1.jpg), used only for stop-position and semi-diameter inference.
4. Nikon USA, [AF Fisheye-Nikkor 16mm f/2.8D product page](https://www.nikonusa.com/p/af-fisheye-nikkor-16mm-f28d/1910/overview), for marketed focal length, aperture, mount, format, field, minimum focus, reproduction ratio, blade count, and minimum aperture.
5. Official HIKARI and OHARA glass catalogs and HOYA's official cross-vendor reference, used for independent coordinate screening. The data file retains vendor-neutral or unmatched annotations because catalog proximity does not establish the original Nikon melts.
