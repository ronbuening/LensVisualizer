# Minolta AF 28 mm f/2 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,258,985
**Application Number:** 45,433
**Filed:** June 4, 1979
**Priority:** June 16, 1978 (Japan, 53-73362)
**Granted:** March 31, 1981
**Inventor:** Akiyoshi Nakamura
**Assignee:** Minolta Camera Kabushiki Kaisha (Osaka, Japan)
**Title:** Inverted Telephoto Type Wide Angle Lens System
**Classification:** Int. Cl. G02B 13/04 (U.S. Cl. 350/459)
**Embodiment analyzed:** Example 4 — Table 4, illustrated in Fig. 7 with aberration plots Fig. 8a–8c, and reproduced as claim 9.

US 4,258,985 discloses four worked inverted-telephoto wide-angle examples for the 35 mm SLR format. Each is normalized to `f = 100` and a full field angle of `2ω = 75°`. Example 4 is the relevant prescription: it is the `FNo. = 2.0` design in which the second functional group is split into two air-spaced positive singlets rather than made as a cemented component or a single thick singlet.

The identification with the production Minolta AF 28 mm f/2 rests on convergent evidence rather than on an explicit product name in the patent.

1. **Element and group count.** Example 4 has nine glass elements in nine air-spaced groups. The production Minolta AF 28 mm f/2 is specified as a nine-element, nine-group lens.
2. **Aperture.** Example 4 is an f/2.0 design, matching the production f/2 maximum aperture.
3. **Field.** The patent's 75° full field is the published diagonal field for a 28 mm full-frame lens. At the scaled 28 mm focal length, `28 tan(37.5°) = 21.5 mm`, matching the 135-format half diagonal.
4. **Prescription scale.** The rechecked Table 4 paraxial trace gives `EFL = 100.005` in the patent normalization. A uniform `×0.28` scale gives `28.001 mm`, which is effectively the nominal 28 mm production focal length.
5. **Construction.** The patent embodiment is all-spherical and contains no cemented interfaces, ED glass, fluorite, or aspherical surfaces. That is consistent with the production AF lens's conventional 9/9 construction.

The patent should not be used to make an overbroad statement about every Minolta manual-focus 28 mm f/2. Early MC/MD W.Rokkor 28 mm f/2 versions used a different ten-element floating construction, while later compact MD-era designs are closer in element count. The production AF 28 mm f/2 match is established by the AF lens specifications and the Example 4 optical prescription; manual-focus variants are historical context, not the primary identification evidence.

Where manufacturer-published specifications and patent-derived values differ, the manufacturer specification governs the production lens metadata. The prescription itself is taken from the patent and scaled uniformly to the production focal length.

## Optical Architecture

The design is a fast inverted-telephoto, or retrofocus, wide-angle lens. In the patent's functional nomenclature it has three groups of negative–positive–positive net power. In production construction nomenclature it is nine elements in nine air-spaced groups, because no elements are cemented.

| Functional group | Elements | Net focal length, patent units | Scaled focal length | Role |
|---|---:|---:|---:|---|
| First group | L1–L3 | −102.36 | −28.66 mm | Front retrofocus divergence; back-focus generation and distortion balance |
| Second group | L4a–L4b | +107.86 | +30.20 mm | First reconverging group after the broad retrofocus air space |
| Third group | L5–L8 | +170.23 | +47.67 mm | Rear aperture-correction and chromatic-correction group |

The front group follows the patent's preferred arrangement: a weak positive front singlet followed by two object-convex negative menisci. This differs from designs that place most of the front-group burden on a strong positive element followed by stronger negative lenses. The patent explicitly uses the weak L1 power and the finite negative rear radius of L1 to reduce aberrations generated in the first group while maintaining marginal illumination.

The aperture stop is located in the air space immediately ahead of L5. The numerical table gives only the total `d8` air separation between L4b and L5, so the data file splits this gap according to Fig. 7: `12.50` patent units from r8 to the stop and `2.00` patent units from the stop to r9. The resulting stop semi-diameter reproduces the f/2 entrance pupil in paraxial trace.

The back focal distance is `128.951` patent units, or `36.106 mm` after scaling. Relative to the `28.001 mm` computed effective focal length, the ratio is `BFD/EFL = 1.289`, confirming a genuine retrofocus layout rather than merely a wide-angle lens with a short register requirement.

A surface-by-surface Petzval calculation using `Σ φ/(n n′)` gives `0.00147765` in the patent normalization. The corresponding Petzval radius is about `676.75` patent units, or `189.49 mm` after scaling. That is roughly `6.77×` the focal length. The field is therefore not optically flat in the modern extreme sense, but the Petzval balance is moderate for a 1970s fast retrofocus design.

## Element-by-Element Analysis

Unless stated otherwise, element focal lengths in this section are standalone thick-lens focal lengths in air. The first value is in the patent's `f = 100` normalization; the parenthetical value is the `×0.28` production-scale value.

### First Group (L1–L3) — Diverging Retrofocus Front

#### L1 — Weak Positive Singlet, near-plano biconvex

`nd = 1.6935`, `νd = 53.61`. Glass: lanthanum crown class, glass code 694/536. `f = +1799.06` (`+503.74 mm`).

L1 is deliberately weak. Its front radius, `r1 = +7518.80`, is nearly plano at the patent scale, while `r2 = −1494.77` supplies the finite rear curvature required by condition (3). This makes L1 a very shallow biconvex element whose focal length is nearly eighteen times the whole-lens focal length.

The patent's front-group strategy is clear: L1 is not asked to provide strong positive power. Instead, it moderates the entrance geometry and reduces the amount of negative power required from L2 and L3. That limits the front group's contributions to distortion and astigmatism.

#### L2 — Negative Meniscus, convex to object

`nd = 1.5111`, `νd = 60.49`. Glass: K7/C7 crown class. `f = −202.77` (`−56.78 mm`).

L2 is the first object-convex negative meniscus. Its radii, `r3 = +117.92` and `r4 = +54.21`, have the same sign, with the rear surface more strongly curved. The low index and high Abbe number show that the negative power is obtained mainly through curvature rather than through a dense flint.

This is a conservative chromatic choice for the front divergence: the element contributes strong negative optical power and useful negative Petzval contribution without introducing a large dispersion burden.

#### L3 — Negative Meniscus, convex to object

`nd = 1.5111`, `νd = 60.49`. Glass: K7/C7 crown class. `f = −196.46` (`−55.01 mm`).

L3 repeats the L2 strategy with very similar radii, `r5 = +115.00` and `r6 = +52.66`. The paired menisci distribute the front-group divergence over four curved air-glass surfaces instead of concentrating it in one stronger negative element.

The wide `d6 = 30.72` patent-unit air gap after L3 is a major retrofocus lever. At production scale this gap is `8.60 mm`, a large internal spacing in a 28 mm SLR lens.

### Second Group (L4a–L4b) — Split Positive Converger

#### L4a — Positive Meniscus, convex to object

`nd = 1.7620`, `νd = 40.38`. Glass: lanthanum flint class, glass code 762/404. `f = +173.90` (`+48.69 mm`).

L4a begins reconverging the diverged front-group bundle. Its positive power is concentrated mainly at the front surface, `r7 = +112.26`, while the rear radius, `r7′ = +694.93`, is much weaker.

The relatively high index allows useful power without especially steep curvatures. The moderate Abbe number identifies this as a lanthanum-flint class rather than a low-dispersion crown.

#### L4b — Weak Positive Singlet, near-plano biconvex

`nd = 1.7620`, `νd = 40.38`. Glass: lanthanum flint class, glass code 762/404. `f = +244.65` (`+68.50 mm`).

L4b is the second positive singlet in the split second group. Its object-side radius, `r7″ = +1254.71`, is very weak; its rear surface, `r8 = −217.30`, supplies most of the element's power.

The air gap between L4a and L4b is the structural feature that distinguishes Example 4 from the patent's cemented-second-group Example 3. It is also why the production construction is nine air-spaced groups rather than eight.

### Third Group (L5–L8) — Rear Aperture and Color-Correction Group

#### L5 — Positive Meniscus, convex to image

`nd = 1.7495`, `νd = 50.41`. Glass: dense lanthanum crown class, glass code 750/504; exact catalog melt unresolved. `f = +148.65` (`+41.62 mm`).

L5 is immediately behind the stop. Both radii are negative, `r9 = −427.72` and `r10 = −89.36`, so the element is a positive meniscus convex to the image side.

This is the element governed by condition (4), which requires `1.3f < f5 < 1.9f`. The computed value is `1.486f`, placing it near the center of the allowed range. The patent assigns L5 the correction of spherical aberration and coma as the aperture ratio increases.

#### L6 — Biconcave Negative

`nd = 1.8052`, `νd = 25.21`. Glass: dense flint, SF6/S-TIH6 class. `f = −65.30` (`−18.28 mm`).

L6 is the design's only strongly dispersive glass. Its radii, `r11 = −74.06` and `r12 = +192.94`, make it a biconcave negative element.

Placed between two positive rear-group menisci, L6 provides the main longitudinal and lateral color counterweight for the rear converging group. Its high index keeps the required curvatures less severe than a lower-index flint would require.

#### L7 — Positive Meniscus, convex to image

`nd = 1.7725`, `νd = 50.14`. Glass: lanthanum flint / dense-lanthanum-crown boundary, glass code 773/501. `f = +141.37` (`+39.58 mm`).

L7 follows the dense-flint corrector and restores positive convergence. Its two radii are negative, `r13 = −233.15` and `r14 = −75.97`, with the image-side surface more strongly curved.

The optical role is complementary to L5. Together, L5–L7 form a positive–negative–positive rear correction block around the stop, balancing aperture aberrations and chromatic error after the retrofocus front group has established the long back focus.

#### L8 — Weak Positive Singlet, near-plano biconvex

`nd = 1.6968`, `νd = 55.80`. Glass: lanthanum crown class, LAC14/S-LAL14 class. `f = +189.87` (`+53.16 mm`).

L8 is a weak positive terminal element. Its front radius, `r15 = +1956.95`, is nearly plano, while `r16 = −141.52` provides the rear curvature.

Located close to the image plane, L8 behaves partly as a field element. Its moderate index and relatively high Abbe number let it trim the exit geometry and residual oblique aberrations without adding much chromatic burden.

## Glass Identification and Selection

The patent lists only `nd` and `νd`. It does not name OHARA, Hoya, Schott, Hikari, CDGM, Sumita, or any other glass vendor, and it provides no partial-dispersion or line-index table. The glass names below are therefore class identifications and close catalog analogues, not asserted melt identities.

| Element(s) | Patent `nd / νd` | Glass class | Closest catalog-class match | Role |
|---|---:|---|---|---|
| L1 | 1.6935 / 53.61 | Lanthanum crown | 694/536; LAC13/S-LAL13 class | Weak front positive |
| L2, L3 | 1.5111 / 60.49 | Crown | K7/C7 class | Low-dispersion front negative menisci |
| L4a, L4b | 1.7620 / 40.38 | Lanthanum flint | 762/404 class | Split second-group positive power |
| L5 | 1.7495 / 50.41 | Dense lanthanum crown | 750/504 class, exact melt unresolved | Post-stop spherical/coma correction |
| L6 | 1.8052 / 25.21 | Dense flint | SF6/S-TIH6 class | Rear-group chromatic correction |
| L7 | 1.7725 / 50.14 | High-index lanthanum glass | 773/501 class, approximate | Rear positive meniscus |
| L8 | 1.6968 / 55.80 | Lanthanum crown | LAC14/S-LAL14 class | Terminal field positive |

The glass palette is conventional for a late-1970s fast wide-angle SLR lens. There is no ED, fluorite, fluorophosphate, anomalous-dispersion, or KZFS-type glass in the prescription. Color correction is mainly the ordinary achromatic pairing of the high-index, low-Abbe L6 biconcave element against the surrounding positive lanthanum crown/flint elements.

The strongest caution is L5. Its index and Abbe number place it in the dense lanthanum crown region, but no modern public catalog match is exact enough to justify a named catalog glass. The data file therefore records it as a glass-code/class match rather than as a specific vendor melt.

## Focus Mechanism

US 4,258,985 publishes a single numerical prescription and no variable-spacing table. The patent therefore supports the infinity-focus optical form but does not independently define close-focus kinematics.

The data file represents close focus by unit extension of the full optical cell. This is a modeling choice made because the production lens specification gives a 0.3 m minimum focus distance while the patent supplies no floating or internal-focus spacings. The paraxial finite-conjugate solve gives a final back focal distance of `39.765 mm` at 0.3 m, compared with `36.106 mm` at infinity, for a modeled extension of `3.659 mm`.

This should not be read as a patent-proven statement that the production AF lens has no floating correction. It only states what can be represented from the available patent data without inventing internal variable gaps.

## Conditional Expressions

The patent gives four inequalities. The following values are recomputed directly from Example 4 using the patent normalization, where the whole-lens focal length is `f ≈ 100`.

| # | Patent condition | Computed value | Result |
|---|---|---:|---|
| (1) | `0.75f < |f1,2,3| < 1.25f`, with `f1,2,3 < 0` | `f1,2,3 = −102.36` | Satisfied |
| (2) | `10f < f1 < 20f` | `f1 = +1799.06` (`17.99f`) | Satisfied |
| (3) | `6.5f < |r2| < 22f`, with `r2 < 0` | `r2 = −1494.77` (`14.95f`) | Satisfied |
| (4) | `1.3f < f5 < 1.9f` | `f5 = +148.65` (`1.486f`) | Satisfied |

Conditions (1)–(3) govern the weak-positive / paired-negative-meniscus front group. Condition (4) governs the post-stop positive meniscus L5, which the patent assigns to spherical-aberration and coma correction at the high aperture ratio.

## Verification Summary

The Table 4 transcription was rechecked against the claim 9 reproduction. The critical `d13` value is `11.50` patent units; treating it as `1.50` is an OCR-style error and produces an incorrect focal length. With `d13 = 11.50`, the paraxial matrix gives `EFL = 100.005`, confirming the stated `f = 100` normalization.

After applying the `×0.28` scale factor, the production-scale effective focal length is `28.001 mm`; the infinity back focal distance is `36.106 mm`. The first-surface-to-last-surface mechanical optical length is `51.794 mm`, and the first-surface-to-image distance at infinity is `87.901 mm`.

The Petzval sum was recomputed surface by surface as `Σ φ/(n n′) = 0.00147765` in patent units. The computed group focal lengths are `−102.36`, `+107.86`, and `+170.23` patent units for the negative, positive, and rear positive functional groups respectively.

The data file contains inferred semi-diameters because the patent does not publish clear apertures. The selected values satisfy the project constraints used for this corpus: spherical rim ratios remain below the renderer limit, front/rear semi-diameter ratios for individual elements are kept at or below 1.25, all element edge thicknesses remain positive with practical margin, and cross-gap sag intrusion stays within 90% of the intervening air gap.

## Design Heritage and Context

The patent positions itself against earlier retrofocus wide-angle layouts that used either a pair of negative singlets and a positive singlet in the front group or a positive front lens followed by negative menisci. Nakamura's stated contribution is not the mere presence of a retrofocus front group, but the constrained weakening and shaping of the first positive lens so that the following negative menisci do not need excessive power.

In Minolta's 28 mm f/2 lineage, this patent is best treated as the source for the AF 28 mm f/2 optical form rather than as a blanket description of all Minolta 28 mm f/2 lenses. Earlier manual-focus W.Rokkor versions used a different, more complex construction. Later compact manual-focus designs are a separate historical question and should not be used as the main identification basis unless a distinct production cross-section or manufacturer service documentation is brought in.

## Sources and References

- US 4,258,985, *Inverted Telephoto Type Wide Angle Lens System*, A. Nakamura, Minolta Camera K.K. Primary source for the optical prescription, element order, conditional expressions, figure layout, and Certificate of Correction.
- Minolta AF Lenses owner's manual / specification table. Source for production metadata: 28 mm focal length, f/2 maximum aperture, nine elements in nine groups, 75° angle of view, 0.3 m minimum focus distance, f/22 minimum aperture, seven aperture blades, 55 mm filter, and physical size/weight.
- Hoya Optical Glass Cross Reference Index. Used only for six-digit glass-code class comparison, not as proof of identical composition.
- SCHOTT K7 and N-SF6 catalog datasheets. Used for close class verification of the crown pair and dense-flint L6 analogue.
- Hikari, OHARA, CDGM, and Sumita catalog cross-references. Used only as class-level checks where the patent does not name a vendor.
