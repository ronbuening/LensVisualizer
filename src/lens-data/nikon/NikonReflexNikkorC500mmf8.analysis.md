# Nikon Reflex-Nikkor·C 500mm f/8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,632,190  
**Application Number:** US 859,347  
**Filed:** 19 September 1969  
**Priority:** 24 September 1968 (Japan, 43/68288)  
**Granted:** 4 January 1972  
**Inventor:** Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K.  
**Title:** Catadioptric Telephoto Objective Lens System  
**Embodiment analyzed:** Example 1, claim 2

US 3,632,190 discloses a compact reflecting-refracting telephoto objective of the Cassegrain class. The patent describes an F/7 system with a 5° field, a positive front meniscus, a concave main mirror with an unplated clear central zone, a convex secondary mirror near the front corrector, and a cemented rear corrector group passing through the center of the main mirror. Example 1 is normalized to f = 100 and is the prescription transcribed here.

The association with the original Reflex-Nikkor 500mm f/8 / Reflex-Nikkor·C 500mm f/8 rests on convergent evidence rather than a named commercial product in the patent:

1. The assignee is Nippon Kogaku K.K., the inventor is Yoshiyuki Shimizu, and the Japanese priority date is 24 September 1968, aligning with Nikon's late-1960s compact 500mm reflex program.
2. The prescription is a five-element, three-group catadioptric system, matching the original 500mm f/8 construction rather than the later 1984 New design.
3. The patent field is 5°, which corresponds to a half-field of 2.5°. At 500mm this gives an image height of 500 · tan(2.5°) = 21.83mm, essentially the 24 × 36mm frame half-diagonal.
4. Nikon's own historical account separates the original 500mm f/8 from the 1984 Reflex-Nikkor 500mm f/8 (New), which has a different optical design and 1.5m close-focus capability.
5. The production lens is a fixed-aperture Nikon F-mount reflex lens. The patent gives the optical reason for the f/8 working specification: the geometric system is F/7, but the secondary obstruction reduces the effective transmitting pupil.

Example 2 in the same patent is a close sibling, not the transcribed design. It shares the same general mirror layout but changes the front-meniscus glass, the first rear-corrector glass, several radii, and all three principal air separations. The data file therefore follows Example 1 only.

## Optical Architecture

The design is a folded Mangin-mirror Cassegrain telephoto. Light first passes through a weak positive front meniscus, travels rearward to the annular concave primary mirror, reflects forward to the smaller convex secondary mirror, reflects again, and then travels rearward through the cemented corrector group in the clear central zone of the primary mirror. The final image plane lies behind the primary.

The group power distribution is positive front corrector — converging primary mirror — diverging secondary mirror — negative rear corrector. The two mirrors provide most of the system power and most of the telephoto compression. The refracting elements correct the monochromatic aberrations of the spherical mirrors, manage field curvature, and balance the residual color introduced by the Mangin substrates.

Three structural choices define the design. First, both mirrors are second-surface Mangin mirrors, so each mirror substrate supplies refracting correction before and after reflection. Second, the main mirror is not drilled; the central zone is left unplated and transparent, avoiding the machining and figuring problems that the patent identifies for bored glass mirrors. Third, the central zone of the primary blank also serves as the last element of the rear corrector group, so the primary mirror and final corrector are physically one piece of glass. In the data file the shared blank is rendered as complementary regions: a silvered annular M1 shell and a clear central L4 plug with the same glass, axial thickness, and R3/R4 curvature. This keeps the small L3 positive corrector confined to the clear central opening instead of being drawn across the full mirror diameter.

The patent's stated assembled optical length requirement is also met. From the front optical vertex to the rear of the primary mirror, the corrected Example 1 layout is 21.26 normalized units. With the 500mm scaling used in the data file, that is 106.31mm, or EFL / 4.70, well below the patent limit of EFL / 3.5.

## Element-by-Element Analysis

The sequence below follows optical encounter order, not simple physical front-to-rear order. In a folded mirror lens the same physical surface may be encountered more than once.

### L1 — Positive Meniscus, convex to object

nd = 1.52450, νd = 59.6. Glass: unmatched light crown, 525/596 code; K5-class nearest, not an exact catalog match. f = +696.5mm.

L1 is a weak positive meniscus at the front of the system. The patent states that this positive element begins to converge the incoming beam before it reaches the main mirror, allowing the main mirror diameter to be smaller than it would be in a bare reflector of the same entrance pupil.

The convex-to-object orientation is also specified by the patent. Its purpose is not merely sealing the mirror cavity; the patent connects this orientation to correction of the negative image-surface curvature caused by the entrance pupil position behind L1 and by the relatively wide 5° field for a reflex telephoto.

The glass is treated conservatively. The stored nd / νd pair does not land on an exact public catalog entry within normal transcription tolerance. It is therefore marked as an unmatched light crown rather than assigned a false exact vendor name.

### M1 / L4 — Primary Mangin Mirror and clear central corrector

nd = 1.54072, νd = 47.2. Glass: LLF2 / S-TIL2 / E-FEL2 class, 541/472 code. Primary bare-mirror focal-length magnitude = 144.5mm; clear central refractive meniscus f = −947.0mm.

The main mirror is a thick light-flint Mangin element. Its front surface is refracting, and its rear annular surface is silvered as the concave primary mirror. The central rear zone is not silvered, so light can pass through it after the secondary reflection. This dual use of the primary blank is the patent's central mechanical and optical economy.

As a mirror, M1 is the dominant converging component of the lens. As a refractive element, the same glass provides corrective power on entry and exit, reducing the spherical aberration and sine-condition error that a simple spherical reflecting surface would otherwise produce. The patent's first conditional expression directly controls the ratio between the primary refracting radius R3 and reflecting radius R4.

The same physical blank becomes L4 on the final pass through the central bore. In that role it is a weak negative meniscus at the back of the cemented corrector stack.

### M2 — Secondary Mangin Mirror

nd = 1.54814, νd = 45.9. Glass: LLF1 / S-TIL1 / E-FEL1 class, 548/459 code. Bare-mirror focal-length magnitude = 89.3mm, used as a diverging secondary.

M2 is the smaller convex Mangin mirror near the front of the lens. The beam reflected from the primary reaches the refracting face of M2, passes into the glass, reflects from the silvered rear surface, and exits again toward the rear corrector group.

The secondary supplies the Cassegrain magnification. It intercepts the converging primary beam before its first focus and re-images it at a much longer effective focal length, while also folding the path rearward through the primary's clear central zone. Its radius ratio R6/R5 is governed by the patent's second conditional expression, for the same spherical-aberration and coma-control reasons as the primary mirror.

### Rear Corrector Group — L2 + L3 + L4 cemented triplet

The final transmitted beam passes through a cemented triplet set into the primary's central zone. The group is negative as a whole; independent paraxial calculation gives an equivalent focal length of −164.2mm for L2 + L3 + L4 at the 500mm scale.

**L2 — Plano-concave negative.** nd = 1.56883, νd = 56.0. Glass: BAK4 / BAC4 class, 569/560 code. f = −109.6mm. L2 supplies most of the corrector group's negative refracting power. Its concave surface faces the incoming final-pass beam, as specified in both the abstract and the claims.

**L3 — Plano-convex positive.** nd = 1.72825, νd = 28.3. Glass: SF10 / E-FD10 / S-TIH10 class, 728/283 code. f = +251.0mm. L3 is the dense-flint positive partner cemented behind L2. The patent says this positive lens chiefly corrects magnification chromatic aberration and contributes less to the general monochromatic correction than the other members.

**L4 — Central zone of the primary blank.** nd = 1.54072, νd = 47.2. Glass: LLF2 / S-TIL2 / E-FEL2 class. f = −947.0mm as a refractive meniscus. L4 uses the same radii as the primary mirror, R9 = R3 and R10 = R4, because it is the clear central region of the same physical glass element. In the data file this is modeled with central-zone surfaces `9` and `10` at the same axial stations as the annular primary surfaces `3` and `4M`; the SVG renders L4 as the clear plug that fills the unsilvered center of the annular primary shell, and the same surfaces carry the final-pass ray trace.

## Glass Identification and Selection

The design uses ordinary crown, barium-crown, light-flint, and dense-flint glass classes. It does not require ED, fluorite, anomalous partial dispersion, or molded aspherical materials. That is consistent with a mirror-dominated catadioptric, where reflection supplies most of the power without axial chromatic dispersion.

| Element | nd | νd | Working identification | Confidence | Role |
|---|---:|---:|---|---|---|
| L1 | 1.52450 | 59.6 | Unmatched light crown, 525/596; K5-class nearest | approximate only | Front positive corrector |
| M1 / L4 | 1.54072 | 47.2 | LLF2 / S-TIL2 / E-FEL2 class, 541/472 | high class match | Primary Mangin substrate and final clear corrector |
| M2 | 1.54814 | 45.9 | LLF1 / S-TIL1 / E-FEL1 class, 548/459 | high class match | Secondary Mangin substrate |
| L2 | 1.56883 | 56.0 | BAK4 / BAC4 class, 569/560 | high class match | Negative member of rear corrector |
| L3 | 1.72825 | 28.3 | SF10 / E-FD10 / S-TIH10 class, 728/283 | high class match | Positive dense-flint corrector |

The prior analysis over-stated the certainty of some vendor names. The corrected file uses class-level identifications and six-digit glass codes where the patent gives only nd and νd. The front crown is explicitly left unmatched because forcing it to a K5 catalog name would introduce a non-trivial nd error.

## Focus Mechanism

The patent publishes the infinity prescription only. It does not provide finite-distance spacing tables, close-focus optical states, or a variable-focus prescription. Accordingly, the data file models the verified infinity state and leaves `var` empty.

The production Reflex-Nikkor·C 500mm f/8 is a manual-focus fixed-aperture lens. Nikon's historical material gives 4m as the closest focusing distance for the original Reflex-Nikkor 500mm f/8, while later material distinguishes the 1984 New design by its shorter 1.5m close focus. Lens-DB gives the original Reflex-Nikkor[·C] as a 5-element / 3-group Nikon F lens with a 5° field and 4m close focus.

| Parameter | Corrected handling |
|---|---|
| Patent focus state | Infinity only |
| Data-file focus model | No finite-focus variables; `var` is empty |
| Production focusing | Manual front-cell focus, reported externally |
| Production close focus | 4m |
| Production aperture | Fixed f/8; no iris |

## Conditional Expressions

The patent states two radius-ratio conditions for the two Mangin mirrors:

$$1.3 < \frac{R_4}{R_3} < 1.8$$

$$1.3 < \frac{R_6}{R_5} < 1.9$$

Using Example 1:

$$\frac{R_4}{R_3} = \frac{-57.800}{-36.552} = 1.5813$$

$$\frac{R_6}{R_5} = \frac{-35.719}{-23.166} = 1.5419$$

Both ratios lie well inside the required ranges. The patent says falling below the lower limits under-corrects the spherical aberration produced by the reflecting surfaces, while exceeding the upper limits over-corrects it. The same conditions also govern the sine-condition, or coma, balance of the two mirror subsystems.

## Verification Summary

The numerical prescription was independently re-run as a folded-path paraxial trace. The main correction made during review concerns the air separation between the secondary mirror and the rear corrector.

The printed Example 1 table gives R6 → R7 as 14.740 normalized units. Taken literally, that places R9 0.020 normalized units behind R3 even though the patent explicitly states R9 = R3 and R10 = R4. Enforcing the shared primary-surface condition gives R6 → R7 = 14.720. This is not an arbitrary redesign; it is the value required for the listed primary and central-corrector surfaces to be the same physical glass surfaces.

| Quantity | Printed 14.740 gap | Corrected shared-surface gap |
|---|---:|---:|
| R6 → R7 normalized separation | 14.740 | 14.720 |
| R9 relative to R3 | +0.020 normalized units | coincident |
| Paraxial EFL, normalized | 99.9041 | 99.9931 |
| Scale factor to 500mm | not used | 5.000347406 |
| Scaled EFL | — | 500.000mm |
| Scaled BFD from final surface | — | 65.312mm |

The data file uses the corrected shared-surface gap and the resulting scale factor. Semi-diameters are not published in the patent; they were estimated from marginal and chief-ray heights at 0°, 1.55°, and 2.5° field with conservative mechanical margin. The annular geometric entrance pupil is represented as F/7 with an inner obstruction sized so that the remaining pupil area corresponds to the marketed f/8 working aperture. The equivalent obstruction-area loss is 23.4%. L3 is assigned the central-opening semi-diameter only; the full-diameter surface in the drawing belongs to the annular primary blank, not to the positive L3 corrector.

## Design Heritage and Context

The Reflex-Nikkor 500mm f/8 belongs to Nikon's first compact generation of photographic reflex telephotos. Nikon's historical account lists the Reflex-Nikkor progression through the 1000mm f/11 in 1966, the 500mm f/8 in 1969, and the 2000mm f/11 in 1972, then treats the 1984 Reflex-Nikkor 500mm f/8 (New) as a later design.

The important point for this prescription is that the patent's method avoids boring a central hole through the primary mirror. Instead, the central region is left uncoated and optically clear. That preserves the figure and alignment of the main mirror while still letting the post-secondary beam reach the image plane behind the mirror. This is the distinguishing construction of the transcribed patent.

The ·C marking concerns coating generation, not a new optical prescription. The analyzed formula is therefore the same core 1968/1969 design represented by the patent; the later 1984 New design should not be conflated with it.

## Sources and References

- US Patent 3,632,190, "Catadioptric Telephoto Objective Lens System," Yoshiyuki Shimizu, assigned to Nippon Kogaku K.K.; filed 19 September 1969, priority 24 September 1968, granted 4 January 1972. Example 1 / claim 2 is the transcribed embodiment.
- Nikon, *NIKKOR — The Thousand and One Nights*, Tale 13, for Nikon's historical distinction between the original Reflex-Nikkor 500mm f/8 and the 1984 Reflex-Nikkor 500mm f/8 (New): https://imaging.nikon.com/imaging/information/story/0013/
- Lens-DB, "Nippon Kogaku / Nikon Reflex-Nikkor[·C] 500mm F/8 (1968)," for production construction, Nikon F mount, 5° field, and 4m closest focus: https://lens-db.com/nippon-kogaku-nikon-reflex-nikkor-c-500mm-f8-1968/
- MIR / Photography in Malaysia, Nikon Reflex-Nikkor 500mm f/8 resource page, for Nikon rear-filter and fixed-aperture context and for the distinction between the earlier 4m-focus lens and the later 1.5m New version: https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/reflex/500mm.htm
- Glass class checks against public OHARA, HOYA, Hikari, Schott, and CDGM catalogs by nd / νd matching. Vendor-class names are treated as equivalence classes unless the patent itself names a vendor glass.
