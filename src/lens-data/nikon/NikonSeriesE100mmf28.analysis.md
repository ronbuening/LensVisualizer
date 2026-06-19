# Nikon Series E 100mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 4,303,314
**Filed:** March 3, 1980
**Granted:** December 1, 1981
**Priority:** March 20, 1979 (Japan, 54-31788)
**Inventor:** Sei Matsui
**Assignee:** Nippon Kogaku K.K.
**Title:** Compact Telephoto Lens
**Embodiment analyzed:** Embodiment 1 / Claim 2

US 4,303,314 describes a compact four-component telephoto lens with an aperture ratio of 1:2.8, an angle of view of 18° to 24°, and a telephoto ratio of 0.92 to 0.94. The patent layout is, from object side to image side, a positive first lens, a positive second meniscus, a negative third lens, a stop, and a positive fourth lens. The patent emphasizes that the design avoids the cemented surface previously used in comparable compact telephoto lenses to control short-wavelength spherical aberration.

A Certificate of Correction issued May 31, 1983 corrects the missing `f` multiplier in the lower bound of Condition (I), restoring the expression to `0.35f < f12 < 0.4f`, and also corrects the element-focal-length subscript wording. The corrected form is used throughout this analysis.

Embodiment 1 is the transcribed prescription. The identification rests on the following convergent evidence:

1. The patent example is a four-element, four-group, all-spherical telephoto formula, matching the Series E 100mm f/2.8 product configuration.
2. Embodiment 1 is tabulated at `f = 100`, requiring no focal-length scaling for the 100 mm production lens.
3. Embodiments 1 and 2 both have `2ω = 24°`; Embodiment 3 is narrower at `2ω = 18.1°` and is a better formal match to the longer Series E 135mm class.
4. Embodiment 1 is repeated as Claim 2, making it the first numerical claim.
5. Nikon's own historical account names Sei Matsui as the Series E 100mm f/2.8 designer and describes the final lens as a four-element/four-group Ernostar-derived structure.
6. Independent paraxial tracing gives a telephoto ratio of 0.93785, inside the patent's claimed 0.92–0.94 range.

## Optical Architecture

The Nikon Series E 100mm f/2.8 is a compact Ernostar-derived telephoto lens with positive-positive-negative-positive power distribution. The first two positive lenses form a high-power front collector; the third lens is a strong negative meniscus that reduces the convergence of the front subsystem and moves the rear principal point forward; the fourth lens is a weak positive rear collector behind the stop.

The first and second lenses have a combined focal length of `f12 = +38.37 mm`, so the front subsystem is much stronger than the full lens. Adding the negative third lens changes the first-three-lens focal length to `f123 = +143.33 mm`. The final weak positive lens then combines with this residual positive subsystem across the long `d6 = 29.4 mm` air space to produce the final `EFL = 100.02 mm`.

The telephoto effect is modest but real. The optical distance from the first vertex to the image plane is 93.80 mm, giving `TTL/EFL = 0.93785`. This is not a long-lens layout with a rear principal plane near the image side; the rear principal plane sits about 59.77 mm in front of the last surface, which is the practical source of the compact track.

The stop is located between L3 and L4, but the patent does not give its exact axial position inside `d6`. The data file therefore splits `d6` into two equal 14.70 mm air spaces and inserts `STO` at the visual mid-gap position shown in Fig. 1. This rendering choice does not change any of the paraxial verification values, because the stop has no refractive power.

The patent also omits clear semi-diameters. The data file uses conservative inferred values, with the narrow 0.75 mm air space between `r2` and `r3` and the 1.8 mm air space between `r4` and `r5` acting as the binding signed-sag constraints. These clear apertures are modeling estimates, not patent-tabulated dimensions.

The Petzval sum, computed surface by surface as `Φ/(n·n′)`, is `+0.0013111 mm⁻¹`, corresponding to a Petzval radius of about `−762.7 mm`. The value reflects partial cancellation between the positive crown lenses and the strong negative flint element rather than a flat-field modern correction strategy.

## Element-by-Element Analysis

### L1 — Positive meniscus, convex to object

`nd = 1.61272, νd = 58.6. Glass: 613586 dense crown with line-index backfill; Schott N-SK4 / Hoya BACD4 class. f = +77.0 mm.`

L1 is the first converging element and carries most of its power on `r1 = +41.0 mm`. The rear surface, `r2 = +298.19 mm`, is very weakly curved, so the element behaves close to a plano-convex collector in the paraxial sense while retaining a meniscus profile.

The glass is a dense crown match to the Schott N-SK4 / Hoya BACD4 optical region by six-digit code `613586`. The patent gives only `nd` and `νd`, not a vendor name. The data file therefore records the patent code with line-index backfill rather than treating a vendor class as a proven Nikon procurement source.

### L2 — Positive meniscus, convex to object

`nd = 1.62041, νd = 60.3. Glass: S-BSM16 (Ohara) / N-SK16-class dense crown. f = +75.9 mm.`

L2 sits only 0.75 mm behind L1. This narrow air gap gives the first two lenses the behavior of a compact positive subsystem without using cement. Both L2 surfaces have positive radii (`r3 = +29.92 mm`, `r4 = +71.72 mm`), with the tighter front surface carrying the greater positive contribution.

The resulting `f12 = +38.37 mm` satisfies the first part of the patent's Condition (I). The point of this high front-group power is not merely compactness; it also controls the ray height reaching the critical rear surface of L3.

### L3 — Negative meniscus, rear surface of sharper curvature

`nd = 1.71736, νd = 29.5. Glass: S-TIH1 (Ohara) / SF1-class dense flint. f = −32.4 mm.`

L3 is the main telephoto element and the patent's critical aberration-control component. Its front surface is weak (`r5 = +149.221 mm`), while its rear surface is very steep (`r6 = +19.836 mm`). The patent states that short-wavelength spherical aberration is decisively generated when light emerges from this rear surface, and that the ray height at L4 is then too low for the fourth lens to correct it fully.

The high refractive index keeps the needed curvature from becoming even more severe, while the low Abbe number supplies the chromatic leverage needed against the two positive crown elements. Condition (I) explicitly constrains `r6` to `0.19f < r6 < 0.21f`, and Embodiment 1's `r6 = 19.836 mm` falls inside the required 19–21 mm interval.

### L4 — Positive meniscus, convex to object

`nd = 1.74077, νd = 27.7. Glass: S-TIH13 (Ohara) dense flint. f = +138.7 mm.`

L4 is a weak positive rear collector behind the stop. Its front surface (`r7 = +71.0 mm`) carries most of its power, while the rear surface (`r8 = +227.07 mm`) is weak. The element bends the diverging cone from L3 back toward the axis and completes the image formation at a back focal distance of `40.25 mm` from `r8`.

The use of a positive dense flint in this position is deliberate. A high-index positive element contributes less Petzval curvature per unit optical power than a lower-index crown of the same power, and its high dispersion gives the designer another chromatic term behind the stop. This does not make the lens apochromatic; it remains a compact achromat with residual secondary spectrum and close-distance aberration variation.

## Glass Identification and Selection

| Element | Patent `nd` | Patent `νd` | Catalog match used | Verification note |
|---|---:|---:|---|---|
| L1 | 1.61272 | 58.6 | 613586 dense crown; N-SK4 / BACD4 class | Schott N-SK4 lists `nd = 1.61272`, `νd = 58.63`; the data file keeps a code-based label with line-index backfill because the catalog entry is not currently in the local Sellmeier table. |
| L2 | 1.62041 | 60.3 | S-BSM16 (Ohara) / N-SK16-class | Ohara S-BSM16 lists code 620603, `nd = 1.62041`, `νd = 60.29`; Schott N-SK16 and Hoya BACD16 are equivalent-code matches. |
| L3 | 1.71736 | 29.5 | S-TIH1 (Ohara) / SF1-class | Ohara S-TIH1 lists code 717295, `nd = 1.71736`, `νd = 29.52`; Schott SF1 is a close equivalent-code match. |
| L4 | 1.74077 | 27.7 | S-TIH13 (Ohara) | Ohara S-TIH13 lists code 741278, `nd = 1.74077`, `νd = 27.79`. |

The glass palette is conventional: two dense crowns followed by two dense flints. No ED glass, fluorite, anomalous-partial-dispersion glass, aspherical surface, or cemented interface is present in the patent example.

The data file includes `nC`, `nF`, and `ng` line-index fields where catalog data were available. These fields are catalog-derived and not part of the patent prescription itself.

## Focus Mechanism

The patent gives only the infinity-focus prescription. The production lens focuses by unit extension, so the data file models close focus by varying only the final back focal distance after `r8`.

| Parameter | Infinity | 1.0 m close-focus model |
|---|---:|---:|
| BFD from `r8` | 40.2504 mm | 52.9395 mm |
| Unit extension | 0 mm | 12.6891 mm |
| Front vertex to image plane | 93.8004 mm | 106.4895 mm |
| Paraxial magnification | 0 | −0.12687 (`1:7.88`) |

The close-focus value was solved by paraxial conjugate tracing using a 1.0 m subject distance measured from the image plane. Nikon's historical article also notes the lens's 1 m minimum focusing distance.

## Conditional Expressions

The Certificate of Correction restores the first sub-clause below to `0.35f < f12 < 0.4f`. The verified Embodiment 1 values are:

| Condition | Bound | Embodiment 1 value | Status |
|---|---:|---:|---|
| `0.35f < f12 < 0.4f` | 35–40 mm | 38.3656 mm | Satisfied |
| `0.2f < d1+d2+d3+d4+d5 < 0.25f` | 20–25 mm | 22.1500 mm | Satisfied |
| `0.19f < r6 < 0.21f` | 19–21 mm | 19.8360 mm | Satisfied |
| `1.35f < f123 < 1.46f` | 135–146 mm | 143.3314 mm | Satisfied |
| `0.27f < d6 < 0.32f` | 27–32 mm | 29.4000 mm | Satisfied |
| `n1, n2 > 1.6` | greater than 1.6 | 1.61272, 1.62041 | Satisfied |
| `n3, n4 > 1.7` | greater than 1.7 | 1.71736, 1.74077 | Satisfied |
| `ν1, ν2 > 50` | greater than 50 | 58.6, 60.3 | Satisfied |
| `ν3, ν4 < 30` | less than 30 | 29.5, 27.7 | Satisfied |

Condition (I) controls the short-wavelength spherical aberration generated at `r6`. Condition (II) balances the positive distortion associated with `f123` against the compensating effect of the long air space before L4. Condition (III) sets the crown/flint index and dispersion separation needed to make the first two conditions usable at `f/2.8`.

## Verification Summary

The prescription was re-entered from the patent table and independently checked with a paraxial `y, n·u` matrix trace. The stop insertion used for rendering was omitted from the power calculation because it is a flat air surface.

| Quantity | Patent / claim value | Computed value |
|---|---:|---:|
| Effective focal length | 100 mm | 100.0167 mm |
| Back focal distance from `r8` | not separately stated | 40.2504 mm |
| Vertex-to-image track | telephoto ratio 0.92–0.94 | 93.8004 mm |
| Telephoto ratio | 0.92–0.94 | 0.93785 |
| `f12` | bounded | 38.3656 mm |
| `f123` | bounded | 143.3314 mm |
| L1 focal length | not stated | +76.9793 mm |
| L2 focal length | not stated | +75.9301 mm |
| L3 focal length | not stated | −32.3608 mm |
| L4 focal length | not stated | +138.6926 mm |
| Petzval sum | not stated | +0.0013111 mm⁻¹ |
| Petzval radius | not stated | −762.7 mm |

The small EFL departure from exactly 100 mm is consistent with the decimal precision of the printed radii and spacings.

## Design Heritage and Context

Nikon describes the Series E 100mm f/2.8 as one of the first E-series lenses and states that Matsui completed the improved final design after an earlier prototype left excessive axial chromatic aberration and distance-dependent performance variation. Nikon's account also identifies the layout as an Ernostar structure of four elements in four groups and notes that the 100mm lens likely served as a model for the later Series E 135mm f/2.8.

The patent's contribution is narrower than a new lens type. It formalizes a compact, inexpensive, all-separated, all-spherical implementation that avoids the cemented concave third component cited as prior art while still controlling g-line spherical aberration sufficiently for an `f/2.8` short telephoto.

## Sources

- US 4,303,314, "Compact Telephoto Lens," Sei Matsui, Nippon Kogaku K.K., granted December 1, 1981; Certificate of Correction issued May 31, 1983.
- Nikon Imaging, "NIKKOR - The Thousand and One Nights No.80: Nikon Series E 100mm f/2.8," https://imaging.nikon.com/imaging/information/story/0080/
- SCHOTT, "Optical Glass Datasheet N-SK4," https://media.schott.com/api/public/content/defafebe1229485f87ba49c4acbfcb3a
- SCHOTT, "Optical Glass Datasheet N-SK16," https://media.schott.com/api/public/content/5e904e6952b54f05be70518c4b669395
- HOYA Group Optics Division, "Glass Cross Reference Index," https://www.hoya-opticalworld.com/english/products/crossreference.html
- OHARA Corporation, "S-BSM16," https://oharacorp.com/glass/s-bsm16/
- OHARA Corporation, "S-TIH1," https://oharacorp.com/glass/s-tih1/
- OHARA Corporation, "S-TIH13," https://oharacorp.com/glass/s-tih13/
- SCHOTT, "Optical Glass Datasheet SF1," https://media.schott.com/api/public/content/bb675cb9047d468b9e3d75dc05952882
