# Nikon AI Zoom-Nikkor 50-135mm f/3.5S

## Patent Reference and Design Identification

**Patent:** US 4,497,547
**Application Number:** US 367,807
**Filed:** April 13, 1982
**Priority:** JP 56/61469, April 24, 1981
**Granted:** February 5, 1985
**Inventor:** Kiyoshi Hayashi
**Assignee:** Nippon Kogaku K.K., Tokyo, Japan
**Title:** Zoom Lens
**Embodiment analyzed:** First Embodiment / Example 1, FIG. 1; aberration figures FIGS. 2A-2C

US 4,497,547 discloses a compact zoom lens for 35 mm still cameras covering the standard-to-medium-telephoto range. Example 1 is the embodiment transcribed here. It uses the FIG. 1 construction, with a cemented compensator doublet in G3 and the published focal length range of 51.35-131.5 mm at f/3.5. Examples 2 and 3 use the FIG. 3 construction and replace the G3 cemented doublet with a single negative meniscus; those alternatives therefore do not match the 16-element / 13-group production lens.

The production identification rests on convergent evidence rather than on an explicit patent-to-product label. The patent's Example 1 has the same focal-length class, constant f/3.5 aperture, 35 mm still-camera format, front-group focusing, and four-group positive/negative/negative/positive architecture described in Nikon's own retrospective account of the AI Zoom-Nikkor 50-135mm f/3.5S. That retrospective also names Kiyoshi Hayashi as the optical designer and describes the design as Nikon's only 35 mm camera lens application of the Yamaji zoom type. The patent's inventor and assignee match that account.

Nikon's retrospective chronology contains an internal tension: one paragraph says the lens was released in April 1982, while the development-history paragraph says transition to mass production occurred in early summer 1982 and that the lens was finally released in November 1982. The patent timing remains consistent with either reading: trial production drawings were issued in December 1980, the optical design report was submitted in 1981, the Japanese priority application was filed in April 1981, and the U.S. application followed in April 1982.

## Optical Architecture

The lens is a four-group positive/negative/negative/positive zoom of the Yamaji type. From front to rear it contains a convergent focus group G1, a divergent variator G2, a divergent compensator G3, and a convergent master group G4. G1 is stationary during zooming and translates for focusing. G2 and G3 move during zooming. G4 is stationary during zooming.

The independently verified paraxial group focal lengths for Example 1 are:

| Group | Function | Construction | Focal length |
|---|---|---:|---:|
| G1 | Front collector / focus group | 3 elements / 2 groups | +96.500 mm |
| G2 | Variator | 3 elements / 3 groups | -38.000 mm |
| G3 | Compensator | 2 elements / 1 cemented group | -112.000 mm |
| G4 | Master lens | 8 elements / 7 groups | +38.877 mm |

G4 is the critical architectural feature. The patent divides it into a convergent first master sub-unit G41, a convergent second master sub-unit G42, and a weakly divergent third master sub-unit G43. This positive/positive/negative master-lens structure is intended to gather the strongly divergent beam leaving G3 while avoiding excessive rear-element diameter and field curvature.

The patent figure places the aperture stop between G3 and G4, but the numerical table gives only the total G3-G4 zoom gap D3. The accompanying data file therefore uses an explicit modeling convention: the stop is placed 1.000 mm in front of surface 4r1, and the variable surface-14 air gap is set to D3 - 1.000 mm. With that stop split, a 12.5 mm physical stop semi-diameter reproduces approximately f/3.5 at all three zoom positions.

The zoom gap schedule is:

| Design focal length | D1, G1-G2 | D2, G2-G3 | Total D3, G3-G4 | Bf |
|---:|---:|---:|---:|---:|
| 51.35 mm | 2.956 mm | 27.727 mm | 9.846 mm | 39.997 mm |
| 90.00 mm | 24.277 mm | 6.833 mm | 9.418 mm | 39.997 mm |
| 131.50 mm | 35.427 mm | 2.852 mm | 2.251 mm | 39.997 mm |

The sum D1 + D2 + D3 is effectively constant, confirming a constant-length zoom cell in the patent prescription. The calculated zoom ratio is 2.56x.

## Element-by-Element Analysis

### G1 - Front Collector / Focus Group

#### 1L1 + 1L2 - Cemented Doublet, negative/positive menisci

1L1: nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA; exact d-line code 805254). f = -126.65 mm.
1L2: nd = 1.67790, νd = 55.6. Glass: S-LAL12 class (OHARA; catalog νd differs slightly because the patent rounds to one decimal place). f = +91.93 mm.

Both elements are menisci convex toward the object. The pair is a weakly convergent achromat, with the high-dispersion dense flint of 1L1 countered by the lower-dispersion lanthanum crown of 1L2. The cemented interface at 1r2 is the main chromatic balancing surface in the front group.

The doublet does not carry most of the G1 power. Its role is to condition the incoming beam and reduce chromatic burden before the stronger positive 1L3.

#### 1L3 - Positive meniscus, convex to object

nd = 1.66672, νd = 48.4. Glass: S-BAH11 (OHARA; exact within patent rounding). f = +127.22 mm.

This element supplies most of G1's positive power and is the moving power-bearing component during front-group focusing. The patent's conditions (15)-(17) directly govern its power, refractive index, and Abbe number. The computed ratio f(1L3) / f1 is 1.318, inside the required 1.10-1.45 range.

Because G1 translates as a unit for focusing, 1L3 also drives much of the close-range aberration behavior described by Nikon. The patent gives no close-focus prescription, so the analysis of close-range behavior must remain qualitative.

### G2 - Variator

#### 2L1 - Negative lens, nearly plano-concave

nd = 1.69680, νd = 55.6. Glass: S-LAL14 class (OHARA; catalog νd differs slightly because the patent rounds to one decimal place). f = -31.69 mm.

The front surface is extremely weak (R = -708.168 mm), while the rear surface is much stronger (R = +22.809 mm). Geometrically, the element is nearly plano-concave, though the patent describes it more generally as a negative lens with the sharper curvature facing the image side.

This element is the strongest negative element in the variator and strongly controls the zooming magnification. The patent's condition (18), (2r2 + 2r1) / (2r2 - 2r1), evaluates to -0.938, inside the required -1.0 to -0.85 band.

#### 2L2 - Biconcave negative

nd = 1.78797, νd = 47.5. Glass: S-LAH64 class (OHARA; catalog nd is 1.78800, close to the patent value). f = -73.77 mm.

2L2 adds distributed divergent power in the variator. Its biconcave form avoids concentrating all the variator power on a single steep surface and helps moderate zoom-dependent coma and field curvature.

#### 2L3 - Positive meniscus, convex to object

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA; exact d-line code 805254). f = +56.03 mm.

2L3 partially offsets the negative G2 power while providing a high-dispersion chromatic partner within the variator. The computed shape factor (2r6 + 2r5) / (2r6 - 2r5) is 1.550, within the patent's required 1.0-2.0 range. Its high refractive index also satisfies condition (21), n(2L3) >= 1.70.

### G3 - Compensator

#### 3L1 + 3L2 - Cemented doublet, net negative meniscus

3L1: nd = 1.67025, νd = 57.6. Glass: unmatched 670576 lanthanum-crown code; no confirmed current catalog match. f = -46.84 mm.
3L2: nd = 1.67163, νd = 38.9. Glass: unmatched / S-NBH-class 672389 short-flint code. f = +82.22 mm.

The compensator is a cemented negative/positive doublet with net focal length -112.00 mm. The near equality of the two refractive indices means that the cemented interface contributes very little d-line power; its purpose is primarily chromatic, using the Abbe-number difference between the two glasses.

The patent condition for the compensator uses the outer surfaces of the cemented group: (3r3 + 3r1) / (3r3 - 3r1) = 1.871. This is within the required 1.75-2.3 interval and confirms that the condition applies to the whole doublet shape, not to either cemented element alone.

### G4 - Master Lens System

The master group converts the strongly divergent beam leaving G3 into a rear image while keeping the rear group compact enough for a 35 mm SLR back focus. It contains three sub-units: G41, G42, and G43.

#### 4L1 - Biconvex positive

nd = 1.71300, νd = 54.0. Glass: S-LAL8 class (OHARA; patent νd rounded to 54.0). f = +65.38 mm.

4L1 is the leading positive element of G41. Condition (12) requires n(4L1) >= 1.65 and νd(4L1) >= 44. The selected high-index lanthanum crown satisfies both constraints, allowing a positive element with moderate curvature and controlled chromatic variation of spherical aberration.

#### 4L2 + 4L3 - Cemented positive/negative doublet

4L2: nd = 1.56384, νd = 60.8. Glass: N-SK11 / BACD11 class, dense-crown code 564608. f = +52.75 mm.
4L3: nd = 1.79631, νd = 41.0. Glass: unmatched / S-LAH52-class lanthanum-flint code 796410. f = -67.32 mm.

The cemented surface 4r4 is concave toward the object side, matching the patent claim language. The refractive-index step n(4L3) - n(4L2) is 0.232, exceeding the condition (6) lower bound of 0.18.

The patent explains that this index step serves more than achromatization. It also assigns negative power to the cemented interface, reducing the burden on the strong rear surface 4r9 and assisting Petzval correction.

#### 4L4 - Biconvex positive, stronger curvature to object

nd = 1.51823, νd = 59.0. Glass: S-NSL3 (OHARA; exact within patent rounding). f = +47.13 mm.

The element is bent close to the patent's preferred minimum-spherical-aberration form. Its shape factor (4r7 + 4r6) / (4r7 - 4r6) is 0.935, inside the required 0.80-1.10 range.

#### 4L5 - Biconcave negative, stronger curvature to image

nd = 1.79504, νd = 28.6. Glass: J-LAFH3 (HIKARI; exact d-line match to the catalog). f = -41.20 mm.

4L4 and 4L5 form an opposed positive-negative air-spaced pair. Their focal-length ratio |f(4L4) / f(4L5)| is 1.144, and their refractive-index difference is 0.277. Both values satisfy conditions (7) and (8), which the patent ties to high-order spherical-aberration control and Petzval correction.

The rear surface 4r9, R = +37.552 mm, is the strongest discussed divergent surface in the first master sub-unit. Its surface focal length is -47.233 mm by the patent's surface-power convention.

#### 4L6 - Biconvex positive

nd = 1.51680, νd = 64.1. Glass: S-BSL7 / N-BK7 class, borosilicate-crown code 517641. f = +101.23 mm.

4L6 is the entire second master sub-unit G42. Its shape factor (4r11 + 4r10) / (4r11 - 4r10) is -0.068, inside the patent's -0.2 to +0.1 range. Its role is to gather the oblique beam diverged by 4r9 before that beam reaches the rear master sub-unit.

#### 4L7 - Negative meniscus, concave to object

nd = 1.67003, νd = 47.1. Glass: N-BAF10 class, barium-flint code 670471. f = -69.89 mm.

4L7 is the negative element of the rear master sub-unit G43. Its front surface 4r12 has surface focal length -45.827 mm and appears in conditions (4) and (5). The computed ratio f(4r9) / f(4r12) is 1.031, inside the required 0.75-1.15 range.

#### 4L8 - Nearly plano-convex positive

nd = 1.70154, νd = 41.0. Glass: S-BAH27 class (OHARA; patent νd rounded to 41.0). f = +96.24 mm.

The front surface radius, +941.473 mm, is nearly flat compared with the rear surface radius, -72.586 mm. 4L8 partly cancels the negative power of 4L7, leaving G43 weakly divergent overall rather than strongly negative.

Condition (14) constrains |νd(4L8) - νd(4L7)| <= 10. The Example 1 value is 6.1, keeping the rear sub-unit's lateral chromatic contribution modest.

## Glass Selection

The prescription uses conventional high-index crowns, barium crowns/flints, dense flints, and lanthanum flints. It contains no ED, fluorite, anomalous partial-dispersion, or aspherical elements. The strongest glass-identification corrections in this review were not optical corrections but certainty corrections: several earlier labels were too definite. Public catalog matches are now marked as exact only where the catalog nd/νd pair supports that status; otherwise the element is identified by class, six-digit glass code, or as unmatched.

| Element | nd | νd | Glass annotation | Certainty | Role |
|---|---:|---:|---|---|---|
| 1L1 | 1.80518 | 25.4 | S-TIH6 (OHARA; 805254) | Exact | Dense flint achromatizing member |
| 1L2 | 1.67790 | 55.6 | S-LAL12 class (OHARA) | Class / rounded | Lanthanum crown |
| 1L3 | 1.66672 | 48.4 | S-BAH11 (OHARA) | Exact within rounding | Barium flint front-group power |
| 2L1 | 1.69680 | 55.6 | S-LAL14 class (OHARA) | Class / rounded | High-index variator negative |
| 2L2 | 1.78797 | 47.5 | S-LAH64 class (OHARA) | Class | Lanthanum flint variator negative |
| 2L3 | 1.80518 | 25.4 | S-TIH6 (OHARA; 805254) | Exact | Dense-flint variator positive |
| 3L1 | 1.67025 | 57.6 | Unmatched 670576 code | Unmatched | Compensator negative member |
| 3L2 | 1.67163 | 38.9 | Unmatched / S-NBH-class 672389 code | Class / unmatched | Compensator positive chromatic member |
| 4L1 | 1.71300 | 54.0 | S-LAL8 class (OHARA) | Class / rounded | Leading master positive |
| 4L2 | 1.56384 | 60.8 | N-SK11 / BACD11 class, 564608 code | Class | Dense crown cemented member |
| 4L3 | 1.79631 | 41.0 | Unmatched / S-LAH52-class 796410 code | Class / unmatched | Lanthanum-flint cemented member |
| 4L4 | 1.51823 | 59.0 | S-NSL3 (OHARA) | Exact within rounding | Positive member of G41 pair |
| 4L5 | 1.79504 | 28.6 | J-LAFH3 (HIKARI; 795286) | Exact | Strong dense short flint |
| 4L6 | 1.51680 | 64.1 | S-BSL7 / N-BK7 class, 517641 code | Class | Borosilicate-crown G42 element |
| 4L7 | 1.67003 | 47.1 | N-BAF10 class, 670471 code | Class | Rear negative meniscus |
| 4L8 | 1.70154 | 41.0 | S-BAH27 class (OHARA) | Class / rounded | Rear positive color-balancing member |

The crown/flint boundary has been treated by Abbe number rather than by family name. Elements with νd below roughly 50 are flint-type glasses even when they belong to lanthanum or barium families.

## Focus Mechanism

The patent explicitly states that G1 is stationary during zooming and moves on the optical axis during focusing. This is front-group unit focus. G2 and G3 move only for zooming, and G4 is stationary during zooming.

The patent does not publish close-focus surface spacings. The data file therefore does not attempt to model close focus by inventing a G1 translation. The `closeFocusM` field is production metadata only; the optical prescription represents the infinity-focus patent zoom states.

Nikon's retrospective account reports the expected consequence of this focus scheme: close-range aberration fluctuation, especially a negative shift in spherical aberration as the convex front group moves forward. This is consistent with a positive front-focus zoom design but cannot be quantified from the patent table alone.

## Conditional Expressions

The patent states 22 conditions. Independent computation confirms that Example 1 satisfies all of them. Surface focal lengths use the patent convention f = n'R / (n' - n).

| # | Quantity | Computed value | Patent range | Status |
|---:|---|---:|---|---|
| 1 | |f42 / f(4r9)| | 2.143 | 1.70-4.20 | Satisfied |
| 2 | 4d9 | 10.150 mm | 0.05f42-0.13f42 = 5.062-13.160 mm | Satisfied |
| 3 | (4r11 + 4r10) / (4r11 - 4r10) | -0.068 | -0.2 to +0.1 | Satisfied |
| 4 | f(4r9) / f(4r12) | 1.031 | 0.75-1.15 | Satisfied |
| 5 | 4d9 + n(4L6)4d10 + 4d11 | 35.550 mm | 0.65-0.85 x |f(4r12)| = 29.787-38.953 mm | Satisfied |
| 6 | n(4L3) - n(4L2) | 0.232 | >= 0.18 | Satisfied |
| 7 | |f(4L4) / f(4L5)| | 1.144 | 0.8-1.35 | Satisfied |
| 8 | n(4L5) - n(4L4) | 0.277 | >= 0.23 | Satisfied |
| 9 | (4r7 + 4r6) / (4r7 - 4r6) | 0.935 | 0.80-1.10 | Satisfied |
| 10 | (4r9 + 4r8) / (4r7 - 4r6) | 0.292 | -0.90 to +1.10 | Satisfied |
| 11 | (4r13 + 4r12) / (4r13 - 4r12) | 3.784 | 2.5-5.5 | Satisfied |
| 12 | n(4L1), νd(4L1) | 1.713, 54.0 | n >= 1.65, νd >= 44 | Satisfied |
| 13 | (νd4L2 - νd4L3) + (νd4L4 - νd4L5) | 50.2 | 40-70 | Satisfied |
| 14 | |νd4L8 - νd4L7| | 6.1 | <= 10 | Satisfied |
| 15 | f(1L3) / f1 | 1.318 | 1.10-1.45 | Satisfied |
| 16 | n(1L3) | 1.667 | 1.65-1.78 | Satisfied |
| 17 | νd(1L3) | 48.4 | 45-65 | Satisfied |
| 18 | (2r2 + 2r1) / (2r2 - 2r1) | -0.938 | -1.0 to -0.85 | Satisfied |
| 19 | (2r6 + 2r5) / (2r6 - 2r5) | 1.550 | 1.0-2.0 | Satisfied |
| 20 | n(2L1) | 1.697 | >= 1.65 | Satisfied |
| 21 | n(2L3) | 1.805 | >= 1.70 | Satisfied |
| 22 | (3r3 + 3r1) / (3r3 - 3r1) | 1.871 | 1.75-2.3 | Satisfied |

Condition (5) is necessarily evaluated with |f(4r12)|. The surface focal length f(4r12) is negative, while the left-side spacing expression is a positive optical distance; a literal signed reading would make the condition impossible.

## Design Heritage and Context

Nikon's retrospective account describes this lens as a rare 35 mm still-camera use of the Yamaji positive/negative/negative/positive zoom type. The design places the variator and compensator as adjacent negative groups, which helps make the compensator path concave relative to the image plane and can reduce the variable-space burden compared with a positive/negative/positive/positive afocal zoom. The penalty is a complex, high-power master group behind the stop.

The patent text and Nikon account agree on the central design problem: after the divergent G2/G3 zooming system, the master group must gather a strongly divergent beam without making the rear elements too large or producing uncontrolled high-order spherical aberration, astigmatism, and field curvature. The patent's first fourteen conditions are almost entirely devoted to managing that master-group problem.

## Verification Summary

A fresh paraxial ABCD / y-nu trace was run directly from the Example 1 prescription. The EFL and back-focus results match the patent table to within normal transcription and rounding tolerance.

| Position | Computed EFL | Patent EFL | Computed BFD | Patent Bf |
|---|---:|---:|---:|---:|
| Wide | 51.3508 mm | 51.35 mm | 39.9977 mm | 39.997 mm |
| Mid | 90.0010 mm | 90.00 mm | 39.9985 mm | 39.997 mm |
| Tele | 131.4989 mm | 131.50 mm | 39.9962 mm | 39.997 mm |

The patent's internal focal-length reference quantities were also reproduced:

| Quantity | Computed | Patent |
|---|---:|---:|
| f42 | +101.234 mm | +101.234 mm |
| f(4r9) | -47.233 mm | -47.233 mm |
| f(4r12) | -45.827 mm | -45.827 mm |
| f(4L4) | +47.131 mm | +47.131 mm |
| f(4L5) | -41.198 mm | -41.198 mm |

The surface-by-surface Petzval sum is +0.001916 mm^-1, corresponding to a Petzval radius of about 522 mm. This value was computed using the surface formula φ/(n n'), not a thin-element approximation.

## Sources

1. US 4,497,547, "Zoom Lens," Kiyoshi Hayashi, Nippon Kogaku K.K., granted February 5, 1985.
2. Haruo Sato, "NIKKOR - The Thousand and One Nights No. 61: The AI Zoom-NIKKOR 50-135mm f/3.5S," Nikon Corporation, https://imaging.nikon.com/imaging/information/story/0061/.
3. OHARA Corporation, current optical glass datasheets and catalog pages for S-TIH6, S-LAL12, S-BAH11, S-LAL14, S-LAH64, S-LAL8, S-NSL3, and S-BAH27.
4. HIKARI Glass Co., Ltd., J-LAFH3 optical glass datasheet.
5. HOYA Optical World, Glass Cross Reference Index, for six-digit glass-code interpretation and cross-vendor class checks.
