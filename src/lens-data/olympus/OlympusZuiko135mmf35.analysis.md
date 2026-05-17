# Olympus E.Zuiko Auto-T 135mm f/3.5 — Patent Example 1 Analysis

## Patent Reference and Design Identification

The relevant patent is **US 3,838,911, "Telephoto Lens System,"** assigned to Olympus Optical Co. Ltd. and naming Yoshitsugi Ikeda as inventor. The U.S. filing date is 24 April 1973, the Japanese priority date is 3 July 1972 (Japanese Application 47-66514), and the U.S. grant date is 1 October 1974. The analysis below uses **Embodiment 1 / Example 1**, the f/3.5 example in the patent.

The identification of Example 1 with the Olympus E.Zuiko Auto-T 1:3.5 f=135mm rests on the convergence of several independent specifications between the patent and the Olympus OM System lens leaflet. No first-party interview or designer commentary naming specific glass melts or describing the internal focusing mechanism was located; all conclusions therefore rest on the patent prescription and the first-party lens sheet.

1. **Focal length and aperture.** Patent Example 1 is normalized to `f = 100` and `F 1:3.5`; the production lens is specified as `f = 135 mm` and maximum aperture `1:3.5`. The prescription therefore scales by ×1.35 from patent units to the production focal length.
2. **Angle of view.** Patent Example 1 gives `2ω = 18°`. The Olympus leaflet also specifies an 18° angle of view.
3. **Telephoto ratio.** Patent Example 1 gives `ζ = 0.87`; the Olympus leaflet describes the production lens as achieving a telephoto ratio of 0.87.
4. **Element and group count.** The patent architecture is five glass elements in four air-spaced groups: a front positive singlet, a cemented positive/negative doublet, a negative meniscus, and a rear positive meniscus. The Olympus leaflet gives five elements in four groups.
5. **Manual unit focusing.** The Olympus leaflet specifies a straight helicoid and a minimum focusing distance of 1.5 m. The patent contains no variable internal air-spacing table, which is consistent with unit focusing rather than inner or floating focusing.

The patent body text contains one material transcription issue in Example 1. The rear component of the cemented doublet reads as `n3 = 1.7682` in the description paragraphs, but the claims section and the glass-code match show `n3 = 1.76182`, `νd = 26.5`. The six-digit code 762265 resolves to the SF14 / N-SF14 glass family. The corrected value gives an effective focal length of 100.019 patent units by independent paraxial trace, consistent with the patent's stated `f = 100`; the uncorrected five-digit value would shift the EFL farther from unity.

## Optical Architecture

The lens is a compact, all-spherical, five-element/four-group telephoto. In group order:

| Group | Elements | First-order power | Description |
|---|---:|---:|---|
| G1 | L1 | positive | Front positive meniscus collector |
| G2 | L2–L3 | positive | Cemented crown/flint achromat, net positive |
| G3 | L4 | negative | Strong negative meniscus — principal telephoto-shortening group |
| G4 | L5 | positive | Rear positive meniscus, field and aberration corrector |

The stop is located in the airspace between the cemented second group and the third lens (d₅ = 14.91 patent units). The patent does not give an explicit stop coordinate within that airspace; the data file places it at approximately 50% of d₅ based on the Fig. 1 cross-section.

The first two groups form a relatively long-focus positive front system. The third group is a strong negative meniscus placed behind the stop; this negative power shortens the physical length relative to focal length and produces the telephoto ratio below unity. The final positive meniscus recovers convergence, moderates the rear ray angles, and contributes to field curvature and distortion correction. The design is not a Sonnar in the historical Zeiss sense; it is better described as a compact four-group telephoto using a cemented achromat ahead of a negative telephoto group.

The paraxial trace of Example 1, using the corrected `n3 = 1.76182`, gives:

| Quantity | Patent units | Scaled (×1.35) |
|---|---:|---:|
| Effective focal length | 100.019 | 135.03 mm |
| Back focal distance (from r₉) | 37.409 | 50.50 mm |
| Total track (r₁ to image) | 87.119 | 117.61 mm |
| Telephoto ratio | 0.8710 | 0.8710 |
| Half-field image height at 9° | 15.841 | 21.39 mm |

The scaled 9° half-field height of 21.39 mm is close to the 21.63 mm half-diagonal of the 24 × 36 mm frame, consistent with the patent's stated 18° full field and with a 135 mm lens covering the 35 mm format.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

`nd = 1.62041, νd = 60.2. Glass: 620602 dense crown / SK–BSM class; public equivalents include N-SK16 (Schott), S-BSM16 (OHARA), and BACD16 (HOYA). f = +83.2 patent units (+112.3 mm scaled).`

L1 is the first positive collecting element. Its front surface (`r₁ = +45.297`) carries the principal positive power, while the rear surface (`r₂ = +355.454`) is very weak. Both radii are positive, producing a meniscus shape convex to the object. The geometry starts the converging front system without imposing the high marginal angles that would follow from a more strongly biconvex singlet.

The 620602 glass class is a high-index crown rather than an ordinary low-index crown. The relatively high `nd` allows the designer to obtain positive power without extremely steep curvature, while `νd ≈ 60` keeps the front element from becoming a major source of axial color. In this design it acts as a compact front collector rather than as a special-dispersion element.

### L2 — Front Component of Cemented Doublet, Plano-Convex Positive

`nd = 1.48749, νd = 69.8. Glass: ≈487698 low-dispersion crown / FK–FSL class; nearest public equivalents include FC5 (HOYA), N-FK5 (Schott), and S-FSL5 (OHARA), though the patent value is not an exact modern catalog match. f = +59.7 patent units (+80.6 mm scaled).`

L2 is the positive crown member of the cemented second group. Its powered surface is `r₃ = +29.103`; the cemented interface `r₄` is plane. As a standalone element, this is a strong positive plano-convex lens, but in the system its behavior is inseparable from the high-dispersion negative L3 cemented to its rear face.

The low index and high Abbe number are deliberate. L2 supplies positive refractive power with comparatively low dispersion, making it the natural crown side of the achromatic pair. The following flint element then subtracts dispersion and shapes the aberration balance while leaving the group net positive.

### L3 — Rear Component of Cemented Doublet, Plano-Concave Negative Flint

`nd = 1.76182, νd = 26.5. Glass: 762265 dense flint class; public equivalents include SF14 / N-SF14 (Schott), S-TIH14 (OHARA), and FD140 (HOYA). f = −98.3 patent units (−132.7 mm scaled).`

L3 is the negative, high-dispersion partner in the cemented doublet. The cemented interface at `r₄ = ∞` is plane, and the rear surface `r₅ = +74.890` provides the relevant negative optical power as light passes from the high-index glass into air. In standalone terms the element is a weak negative plano-concave; in the cemented group it is the flint component that achromatizes the positive L2 contribution.

The net focal length of the L2–L3 cemented group is **+136.2 patent units** (+183.8 mm scaled). The group therefore remains net positive even though its rear member is negative. This is analytically important: the flint does not make the second group a negative group; it reduces the positive power, controls secondary aberrations, and supplies the high-dispersion side of the achromat.

The patent stresses a sufficiently large index difference between the positive and negative members of the cemented second lens. With the corrected constants, `n₃ − n₂ = 0.27433`, far above the stated lower bound of 0.05. The point is not only axial color; the patent links this high-index flint pairing to the suppression of zonal spherical aberration and coma in the compact telephoto layout (conditions (4), columns 1–2).

### L4 — Negative Meniscus, Convex to Object

`nd = 1.66998, νd = 39.3. Glass: S-BAH32 (OHARA) — exact six-digit optical-code match at 670393. f = −34.3 patent units (−46.4 mm scaled).`

L4 is the strongest standalone element in the system by absolute power. Both surfaces have positive radii (`r₆ = +79.258`, `r₇ = +17.670`), but the rear surface is much more strongly curved, so the net element power is negative. It is the principal telephoto group: placing this negative meniscus behind the stop shortens the distance from the first surface to the image plane relative to the effective focal length.

This element also controls off-axis behavior. The patent conditions (2) tie the shapes of `r₆` and `r₇` to the correction of spherical aberration and off-axis aberrations while preserving the short telephoto ratio. The air spaces on either side of L4 are nearly equal in Example 1: `d₅ = 14.91` and `d₇ = 14.70` patent units. That spacing symmetry is not accidental; the patent explicitly limits the difference between those two spaces (condition (1): `|d₅ − d₇| < 0.1f`) to help balance astigmatism, coma, and lateral color.

The glass is a moderate-dispersion, high-index flint class rather than a crown. Its `νd = 39.3` places it on the flint side of the Abbe diagram. The high index allows the negative group to achieve adequate power without excessive curvature, while its dispersion participates in the multi-element color balance established by L2/L3 and L5.

### L5 — Rear Positive Meniscus, Convex to Object

`nd = 1.80518, νd = 25.4. Glass: 805254 dense flint class; public equivalents include N-SF6 / SF6 (Schott), S-TIH6 (OHARA), and FD60 (HOYA). f = +89.0 patent units (+120.1 mm scaled).`

L5 is the rear positive meniscus. Its role is not simply to add power; it completes the correction system behind the strong negative L4. It bends the emergent cone toward the image plane, helps moderate field curvature and astigmatism, and keeps distortion within the small value shown in the patent's aberration curves (Fig. 2d: distortion < 2% at the 9° half-field).

The high index is useful because the element can remain thin (`d₈ = 2.52` patent units) while still providing useful positive power. Its very low Abbe number would be problematic if used as the main positive element, but in this rear corrector position it participates in the chromatic balance of the whole system rather than functioning as an isolated crown element.

The computed surface-by-surface Petzval sum for Example 1 is **+0.001211 per patent unit**, corresponding to a Petzval radius of about −826 patent units. The large absolute Petzval radius is consistent with a relatively flat field for a compact telephoto of this period.

## Glass Identification and Selection

The patent publishes refractive indices and Abbe numbers only. It does **not** name glass manufacturers or glass trade names. The catalog names below are identifications by optical constants and cross-reference code, not proof of Olympus procurement.

| Element | Patent constants | Six-digit code | Catalog identification | Confidence |
|---|---:|---:|---|---|
| L1 | `nd = 1.62041`, `νd = 60.2` | 620602 | N-SK16 (Schott) / S-BSM16 (OHARA) / BACD16 (HOYA) class | High class match |
| L2 | `nd = 1.48749`, `νd = 69.8` | ≈487698 | Near FK/FSL low-dispersion crown class; modern catalogs list 487702–487704 | Near match only |
| L3 | `nd = 1.76182`, `νd = 26.5` | 762265 | SF14 / N-SF14 (Schott), S-TIH14 (OHARA), FD140 (HOYA) class | High match |
| L4 | `nd = 1.66998`, `νd = 39.3` | 670393 | S-BAH32 (OHARA) exact optical-code match | High match |
| L5 | `nd = 1.80518`, `νd = 25.4` | 805254 | N-SF6 / SF6 (Schott), S-TIH6 (OHARA), FD60 (HOYA) class | High match |

The glass palette is conventional but carefully balanced. L1 is a high-index crown collector. L2 is a low-dispersion crown. L3 is a dense flint cemented to L2 to make a net-positive achromat. L4 is the negative telephoto meniscus with moderate flint dispersion. L5 is a high-index dense-flint rear meniscus. The design does not use ED, fluorite, anomalous partial-dispersion glass, or aspherical surfaces.

The L2 identification is the least exact. The patent gives `nd = 1.48749`, which is exactly in the FK region, but the stated `νd = 69.8` is lower than the current HOYA/Schott/OHARA cross-reference entries around code 487704. It is best treated as a vintage FK/FSL-class low-dispersion crown rather than forced into a named modern catalog entry.

## Focus Mechanism

The production Olympus leaflet specifies a **straight helicoid** and a minimum focusing distance of **1.5 m**. The patent does not publish separate close-focus prescriptions, moving-group tables, or variable internal spacings. The lens therefore focuses by **unit movement**: the entire five-element optical block translates as one rigid assembly.

The unit-focus calculation is consistent with the published close-focus behavior. Scaling the patent prescription to 135 mm and solving the thick-lens conjugate equation for an object at 1.5 m from the film plane, the required forward optical-block extension from infinity to 1.5 m is approximately **15.17 mm**. The corresponding paraxial magnification is **0.1124×**, or about **1:8.9**. That is consistent with the Olympus leaflet's close-field specification of approximately 21 × 32 cm and the commonly listed 1:9 close-focus ratio.

| Focus state | Optical-block extension | Magnification | Interpretation |
|---|---:|---:|---|
| Infinity | 0 mm | 0× | Lens at infinity stop |
| 1.5 m | +15.17 mm | 0.1124× | Unit helicoid extension, approximately 1:8.9 |

## Aspherical Surfaces

Example 1 is an **all-spherical** design. The patent lists only spherical radii `r₁` through `r₉`; it provides no aspherical sag equation, no conic constants, and no higher-order aspherical coefficients. The first-party cross-section also shows a conventional five-element spherical layout with no molded or composite aspherical component. The data file therefore uses an empty aspheric object: `asph: {}`.

## Conditional Expressions and Design Intent

The patent identifies four conditional expressions aimed at preserving the aberration balance as the telephoto ratio is shortened. Using the corrected Example 1 values with `f = 100`:

| Patent condition | Example 1 value | Result |
|---|---:|---|
| (1) `d₇ > 0.12f` | `14.70 > 12.00` | Satisfied |
| (1) `\|d₅ − d₇\| < 0.1f` | `0.21 < 10.00` | Satisfied |
| (2) `0.25f < 2r₇ < r₆ < 1.2f` | `25 < 35.34 < 79.258 < 120` | Satisfied |
| (3) `0.25f < 1.3r₈ < r₉ < 2f` | `25 < 44.13 < 62.394 < 200` | Satisfied |
| (4) `n₃ − n₂ > 0.05` | `0.27433 > 0.05` | Satisfied |

The final printed condition references `|r₄|` in the denominator: `(n₃ − n₂)f / |r₄| > 0.1`. In Example 1, `r₄ = ∞`, which would make the left-hand side equal to zero and fail the condition. If the intended denominator is `|r₅|`, the value becomes `(1.76182 − 1.48749) × 100 / 74.890 = 0.366`, which satisfies the bound. The claims section repeats the same notation, so this appears to be a systematic surface-index error in the patent text rather than an OCR artifact. The surface `r₅` is the powered rear surface of the cemented flint component — the surface that actually participates in the high-index-difference correction described by the patent.

## Verification Summary

The prescription was verified with an independent paraxial ray trace using the ABCD matrix method and the standard sign convention (`R > 0` for centers of curvature to the right). Standalone element focal lengths were computed via thick-lens ABCD subsystem traces. The Petzval sum was computed surface-by-surface. The unit-focus extension was solved from the thick-lens conjugate equation.

| Check | Result |
|---|---:|
| EFL (patent units) | 100.019 |
| EFL (scaled to production) | 135.03 mm |
| Patent stated EFL | 100 |
| Back focal distance | 37.409 p.u. / 50.50 mm |
| Total track (r₁ to image) | 87.119 p.u. / 117.61 mm |
| Telephoto ratio | 0.8710 |
| Half-field image height at 9° | 15.841 p.u. / 21.39 mm |
| L1 standalone EFL | +83.22 p.u. / +112.3 mm |
| L2 standalone EFL | +59.70 p.u. / +80.6 mm |
| L3 standalone EFL | −98.30 p.u. / −132.7 mm |
| L2–L3 cemented group EFL | +136.17 p.u. / +183.8 mm |
| L4 standalone EFL | −34.34 p.u. / −46.4 mm |
| L5 standalone EFL | +88.95 p.u. / +120.1 mm |
| Petzval sum | +0.001211 per p.u. |
| Unit-focus extension to 1.5 m | +15.17 mm |
| Close-focus magnification | 0.1124× ≈ 1:8.9 |

All checks support the identification of Patent Example 1 with the production Olympus E.Zuiko Auto-T 135mm f/3.5 and confirm the lens as an all-spherical, unit-focusing, five-element compact telephoto.

## Design Heritage and Context

The E.Zuiko Auto-T 135mm f/3.5 is representative of the compact medium-telephoto lenses produced for Japanese SLR systems in the early 1970s. The five-element, four-group telephoto layout with a cemented achromat and a strong negative meniscus behind the stop was a common architectural pattern during this period; similar designs appeared from other manufacturers at comparable focal lengths and speeds. The achievable telephoto ratio of 0.87 was competitive for the era, keeping the physical length well below the focal length — an important practical constraint for hand-held 35 mm SLR use. The 49 mm filter thread and the compact barrel dimensions made the lens a light, affordable complement to the Olympus OM system.

## Sources and References

1. **US 3,838,911**, Yoshitsugi Ikeda / Olympus Optical Co. Ltd., "Telephoto Lens System," filed 24 April 1973, priority 3 July 1972 (JP 47-66514), granted 1 October 1974.
2. **Olympus OM System lens leaflet**, "E.Zuiko Auto-T 1:3.5 f=135mm," hosted as `135mm_f3.5.pdf` by the Olympus OM Sales Information File mirror. Used for production focal length, aperture, 18° angle of view, five-element/four-group construction, 0.87 telephoto ratio, straight helicoid focusing, 1.5 m minimum focus, 49 mm filter, and physical dimensions.
3. **HOYA Optical World**, "Glass Cross Reference Index." Used for six-digit glass-code interpretation and cross-vendor equivalence among HOYA, Schott, OHARA, HIKARI, Sumita, and CDGM classes.
4. **SCHOTT optical glass data**, N-SK16, N-SF6/SF6, and SF14-class published optical constants. Used as catalog cross-checks for the 620602, 805254, and 762265 glass-code identifications.
5. **OHARA S-BAH32 datasheet**, code 670393, `nd = 1.66998`, `νd = 39.27`. Used as the exact public catalog match for L4.
