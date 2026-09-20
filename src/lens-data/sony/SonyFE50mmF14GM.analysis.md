## Patent Reference and Design Identification

**Patent:** WO 2024/166548 A1\
**Application Number:** PCT/JP2023/045649\
**Priority:** JP 2023-018717, 2023-02-09\
**Filed:** 2023-12-20\
**Published:** 2024-08-15\
**Inventor:** Masakazu Yamagishi\
**Applicant:** Sony Group Corporation\
**Title:** *Imaging Optical System and Imaging Device*\
**Embodiment analyzed:** Example 1

The prescription transcribed here is Example 1 of WO 2024/166548 A1. The patent publishes a 51.50 mm, f/1.46 imaging system with a 45.57° full field, 21.63 mm maximum image height, and 114.00 mm first-surface-to-image distance (Table 2, printed p. 22 / PDF p. 24). Figure 1 identifies three powered groups, G1–G3, places the stop inside G1, and shows G2 translating toward the image for close focus (Fig. 1, PDF p. 97; ¶0067–¶0068, printed p. 21 / PDF p. 23).

The association with the production **Sony FE 50mm F1.4 GM (SEL50F14GM)** is an evidence-based correlation, not a manufacturer statement that Example 1 is the production prescription. Several independent facts converge:

1. Example 1 is a 51.50 mm, f/1.46 full-frame-class normal lens, while Sony specifies the production lens as 50 mm, f/1.4, 35 mm full frame.
2. After the rear optical member GC is excluded, Example 1 contains 14 imaging elements in 11 air-spaced groups, matching Sony's 11-group / 14-element specification.
3. Example 1 has four aspherical surfaces carried by two physical elements, L14 and L34. Sony states that the production lens uses two XA elements. The patent does not identify its aspherical elements as XA, so this is structural correlation rather than material confirmation.
4. Example 1 contains one especially low-dispersion d-line coordinate, L17 at nd = 1.55032 and νd = 75.5. Sony states that the production lens uses one ED element. The patent does not identify L17 as the production ED glass or name a supplier.
5. Example 1 focuses by moving only G2 toward the image while G1 and G3 remain fixed relative to the image plane (¶0068). Sony states that the production lens uses two XD linear motors for focus drive; that mechanical fact is consistent with a compact moving focus group but does not prove identical group kinematics.
6. The patent claims priority from 2023-02-09. Sony announced the FE 50mm F1.4 GM on 2023-02-22 and listed a 2023-04-21 release date.

The strongest limitation to the correlation is focus range. Example 1 publishes only infinity and a 450 mm shooting-distance state (Table 3, printed p. 23 / PDF p. 25), whereas Sony specifies 0.41 m minimum focus in AF and 0.38 m in MF. The data model therefore stops at the patent's 0.45 m state rather than extending G2 motion to the production limit.

## Optical Architecture

Example 1 is a **three-group positive–negative–positive fast normal prime**. The patent gives group focal lengths of +50.55 mm for G1, −86.49 mm for G2, and +94.92 mm for G3 (Table 5). Independent calculation from the implemented prescription gives +50.550513 mm, −86.496037 mm, and +94.909442 mm respectively.

G1 occupies surfaces 1–15 and contains eight elements. The stop lies within G1 between the rear of the L15/L16 cemented pair and L17. The patent further divides G1 into a front portion G1a and a rear portion G1b, and identifies a negative air lens Gaf between L14 and L15 (¶0069). G1 is fixed during focusing.

G2 occupies surfaces 16–19 and contains L21 and L22 as two air-spaced elements. It is the only translating focus group. Its net focal length is negative even though L22 by itself is positive; the group behavior is therefore not equivalent to either standalone element power.

G3 occupies surfaces 20–26 and contains L31, the cemented L32/L33 pair, and L34. It is net positive and fixed relative to the image plane during focusing. The patent identifies a second negative air lens, Gar, between L33 and L34 (¶0071).

The final data model ends at surface 26A, the rear asphere of L34. Patent surfaces 27–28 form the plane-parallel optical member GC. Paragraph ¶0016 describes GC as a rear optical member that may be an optical filter such as a low-pass or infrared-cut filter. LensVisualizer excludes such rear filter/cover plates from the ordinary imaging prescription, so GC is omitted and the remaining rear distance is replaced by the first-order air-equivalent spacing

`13.61 + 2.50 / 1.51680 + 1.00 = 16.25820675105485 mm`.

This is a modeling normalization, not a claim that an air gap reproduces the higher-order behavior of the plate exactly. The implemented first-surface-to-image track is consequently 113.128207 mm rather than the patent's physical 114.00 mm track that includes GC.

## Element-by-Element Analysis

### L11 — Biconvex Positive

**nd = 1.91082, νd = 35.2. Glass: 911353 class (supplier unresolved). Standalone f = +69.431 mm.**

L11 is the front positive singlet of G1. Its front surface is substantially more curved than its nearly flat rear surface, so the element carries appreciable positive power while presenting a comparatively gentle rear transition into the following air gap. The glass name in the data is deliberately a six-digit coordinate class, not a supplier assignment.

### L12 — Negative Meniscus, first component of D1

**nd = 1.56732, νd = 42.8. Glass: 567428 class (supplier unresolved). Standalone f = −60.622 mm.**

L12 begins the first cemented pair. Its standalone power is negative, but that number describes the element in air and should not be confused with the behavior of the bonded L12/L13 combination. At the cemented surface 4, the medium changes directly from L12 glass to L13 glass; no synthetic cement layer is inserted in the model.

### L13 — Positive Meniscus, second component of D1

**nd = 2.00272, νd = 19.3. Glass: 003193 class (supplier unresolved). Standalone f = +194.349 mm.**

L13 completes D1. In isolation it is a weak positive element relative to L12, but the air-bounded cemented pair D1 has a verified net focal length of −83.702360 mm. That cemented-net value is the appropriate descriptor for the pair as a compound component; it is not substituted for either element's standalone focal length.

### L14 — Negative Meniscus with two aspherical surfaces

**nd = 1.76802, νd = 49.2. Glass: 768492 class (supplier unresolved). Standalone f = −170.464 mm.**

L14 is the first physical aspherical element in the prescription. Both its front and rear surfaces, 6A and 7A, carry even-order aspheric terms. The element is weakly negative in standalone power. Its rear surface also forms the front boundary of the patent-defined negative air lens Gaf.

### L15 — Biconcave Negative, first component of D2

**nd = 1.75520, νd = 27.5. Glass: 755275 class (supplier unresolved). Standalone f = −27.254 mm.**

L15 is the stronger negative member of the second cemented pair. Its front surface is the rear boundary of Gaf, and its rear surface is cemented directly to L16. The element's strong negative standalone power does not imply the same power for D2 as a unit.

### L16 — Biconvex Positive, second component of D2

**nd = 1.80420, νd = 46.5. Glass: 804465 class (supplier unresolved). Standalone f = +34.428 mm.**

L16 completes D2 and is strongly positive as a standalone thick element. The verified air-bounded net focal length of D2 is nevertheless −197.424091 mm, illustrating the difference between the powers of the individual cemented members and the net behavior of the cemented combination with its actual interface curvature and indices.

The aperture stop follows L16 by 1.00 mm in the patent table.

### L17 — Biconvex Positive

**nd = 1.55032, νd = 75.5. Glass: 550755 class (supplier unresolved). Standalone f = +82.024 mm.**

L17 is the highest-Abbe element in Example 1 and sits immediately behind the stop. Its coordinate is compatible with low-dispersion catalog families, but the patent names no supplier and publishes no line indices or anomalous-partial-dispersion value. The data therefore retains only the class label and the patent's nd/νd pair.

### L18 — Biconvex Positive

**nd = 1.59349, νd = 67.0. Glass: 593670 class (supplier unresolved). Standalone f = +74.092 mm.**

L18 is the final element of G1. It is a positive singlet with a relatively high Abbe number compared with many of the dense glasses in the front portion of the group. Its rear surface 15 is followed by the variable gap d15 that opens as G2 moves imageward.

### L21 — Negative Meniscus, front element of G2

**nd = 2.00100, νd = 29.1. Glass: 001291 class (supplier unresolved). Standalone f = −37.952 mm.**

L21 is the negative front element of the moving focus group. G2 translates as a rigid optical group in the published focus model: the internal L21-to-L22 spacing remains fixed while the air gaps before and after G2 exchange 9.84 mm of distance.

### L22 — Positive Meniscus, rear element of G2

**nd = 1.98613, νd = 16.5. Glass: 986165 class (supplier unresolved). Standalone f = +74.980 mm.**

L22 is a positive high-index, low-Abbe member behind L21. Together the two elements form a net negative moving group with verified focal length −86.496037 mm. The group remains air-spaced; L21 and L22 are not a cemented pair.

### L31 — Biconvex Positive

**nd = 1.80420, νd = 46.5. Glass: 804465 class (supplier unresolved). Standalone f = +49.877 mm.**

L31 begins the fixed rear group G3 and supplies substantial positive standalone power. Its glass coordinate is identical to L16's, but that repeated coordinate does not establish a particular vendor or melt.

### L32 — Biconvex Positive, first component of D3

**nd = 1.76385, νd = 48.5. Glass: 764485 class (supplier unresolved). Standalone f = +26.500 mm.**

L32 is the strongly positive first component of the rear cemented pair. Its rear surface 23 is the cemented interface into L33 and therefore carries L33's refractive index and element identity in the surface model.

### L33 — Biconcave Negative, second component of D3

**nd = 1.69895, νd = 30.1. Glass: 699301 class (supplier unresolved). Standalone f = −21.556 mm.**

L33 completes D3. Although L32 and L33 individually have large and opposite standalone powers, their verified air-bounded cemented-net focal length is −221.021659 mm. The rear of L33 forms the front boundary of the patent-defined negative air lens Gar.

### L34 — Negative Meniscus with two aspherical surfaces

**nd = 1.76802, νd = 49.2. Glass: 768492 class (supplier unresolved). Standalone f = −79.330 mm.**

L34 is the second physical aspherical element and shares its nd/νd coordinate with L14. Surfaces 25A and 26A carry the most extensive coefficient sets in Example 1, through A14. Surface 25A is also the rear boundary of Gar. The final rear surface 26A is followed directly by the normalized image-space air gap in the LensVisualizer model.

## Glass Identification and Selection

The patent provides d-line refractive index and Abbe number but does not identify suppliers or melts. The data therefore uses class-level six-digit labels and intentionally omits `nC`, `nF`, `ng`, and `dPgF`. Catalog research found coordinate-compatible public glasses, but those rows remain evidence of possible equivalence rather than element identities.

| Data glass class | nd | νd | Used by | Coordinate-compatible catalog example | Residual from patent coordinate |
|---|---:|---:|---|---|---|
| 911353 class | 1.91082 | 35.2 | L11 | HOYA TAFD35 | Δn = 0.00000, Δν = +0.05 |
| 567428 class | 1.56732 | 42.8 | L12 | OHARA S-TIL26 | Δn = 0.00000, Δν = +0.02 |
| 003193 class | 2.00272 | 19.3 | L13 | HOYA E-FDS2 | Δn = 0.00000, Δν = +0.02 |
| 768492 class | 1.76802 | 49.2 | L14, L34 | HOYA M-TAF101 coordinate family | Δn = 0.00000, Δν = +0.04 |
| 755275 class | 1.75520 | 27.5 | L15 | OHARA S-TIH4 | Δn = 0.00000, Δν = +0.01 |
| 804465 class | 1.80420 | 46.5 | L16, L31 | SCHOTT N-LASF44 | Δn = 0.00000, Δν = 0.00 |
| 550755 class | 1.55032 | 75.5 | L17 | HOYA FCD705 family | Δn = −0.00032, Δν = 0.00 |
| 593670 class | 1.59349 | 67.0 | L18 | HIKARI J-PSKH4 | Δn = 0.00000, Δν = 0.00 |
| 001291 class | 2.00100 | 29.1 | L21 | OHARA S-LAH99 / S-LAH99W | Δn = 0.00000, Δν = +0.04 |
| 986165 class | 1.98613 | 16.5 | L22 | HOYA FDS16-W coordinate family | Δn = 0.00000, Δν = −0.02 |
| 764485 class | 1.76385 | 48.5 | L32 | OHARA S-LAH96 | Δn = 0.00000, Δν = −0.01 |
| 699301 class | 1.69895 | 30.1 | L33 | OHARA S-TIM35; HIKARI J-SF15 | Δn = 0.00000, Δν = +0.03 for both |

The 699301 coordinate illustrates the supplier problem directly: both OHARA and HIKARI publish matching coordinate families. A coordinate match alone therefore cannot establish which glass Sony used in the patent prototype or production lens.

### Chromatic Correction Strategy and Limits

Sony states that the production FE 50mm F1.4 GM uses one ED element. Within Example 1, L17 is the conspicuous high-Abbe coordinate at nd = 1.55032 and νd = 75.5, so its position is consistent with the production statement. The correspondence is not proven: the patent does not call L17 ED, does not name its supplier, and does not provide line-index or partial-dispersion data.

All fourteen elements resolve to coordinate-compatible catalog curves for chromatic tracing. These are spectral proxies, not supplier identifications. The prescription does not establish anomalous partial dispersion or apochromatic correction, so no APD color or proprietary ED/XA label is assigned from coordinate similarity alone.

## Focus Mechanism

Paragraph ¶0068 states that, from infinity toward near focus, G1 and G3 remain fixed relative to the image plane while G2 moves toward the image side. Table 3 publishes the two variable gaps at infinity and at a 450 mm shooting distance.

| State | d15 after G1 (mm) | d19 after G2 (mm) | d15 + d19 (mm) |
|---|---:|---:|---:|
| Infinity | 2.81 | 12.30 | 15.11 |
| 450 mm | 12.65 | 2.46 | 15.11 |

The constant 15.11 mm sum shows that the published state is a rigid 9.84 mm imageward translation of G2 between fixed G1 and G3. No additional production travel is reconstructed.

The implemented Gaussian EFL is 51.495267 mm at infinity and 47.824221 mm at the published 450 mm state. These are model quantities referenced to the implemented prescription, not separate focal lengths printed by the patent and not production marketing specifications.

Sony specifies shorter production limits of 0.41 m in AF and 0.38 m in MF and states that two XD linear motors drive the lens's autofocus system. Those mechanical product facts do not determine the additional internal spacings beyond the patent's published 450 mm state, so they are not used to extrapolate the optical model.

## Aspherical Surfaces

Example 1 has four aspherical surfaces on two physical elements: 6A and 7A on L14, and 25A and 26A on L34 (Table 4, printed p. 23 / PDF p. 25). The patent defines

`x = c y² / (1 + sqrt(1 - (1 + k)c²y²)) + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹² + A14 y¹⁴`, with `c = 1/R` (¶0065, printed p. 20 / PDF p. 22).

Because the equation already uses the standard `(1 + k)` form, patent `k` maps directly to LensVisualizer `K`; no `K = k - 1` conversion is applied. All four surfaces have K = 0.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 6A | 0 | 1.61704e-5 | −3.10095e-8 | 5.82477e-12 | 0 | 0 | 0 |
| 7A | 0 | 2.31134e-5 | −2.26666e-8 | 4.38805e-12 | 0 | 0 | 0 |
| 25A | 0 | −1.32583e-4 | 7.33584e-7 | −2.69572e-9 | 4.77756e-12 | 2.55188e-15 | −1.77301e-17 |
| 26A | 0 | −1.30339e-4 | 8.23417e-7 | −3.54949e-9 | 1.02101e-11 | −1.60121e-14 | 9.24854e-18 |

The aspheric departures were evaluated only at the source-verified effective semi-diameters, i.e. at Table 1 φ/2 rather than at an assumed mechanical clear aperture. Relative to the K = 0 spherical bases, the departures are +0.531595 mm at 6A (15.605 mm semi-diameter), +0.951353 mm at 7A (15.130 mm), −2.174029 mm at 25A (13.900 mm), and −2.114378 mm at 26A (14.645 mm). The signs here describe geometric departure from the spherical base and are not, by themselves, assignments of particular aberration-correction roles.

## Air Lenses

The patent explicitly treats two strongly shaped air spaces as negative air lenses. Gaf lies between the rear asphere of L14 and the front of L15; Gar lies between the rear of L33 and the front asphere of L34 (¶0069, ¶0071).

Independent mixed-media calculation gives Gaf an image-space focal length of −58.276059 mm versus the patent's −58.275 mm, and Gar −126.486303 mm versus −126.479 mm. These are air-space powers defined by their bounding refracting surfaces, not powers of physical glass elements.

## Conditional Expressions

Tables 61–62 publish five dimensionless conditions for Example 1. Recalculation from the independently derived EFL, G1/G2 powers, G1b power, and the two air-lens powers reproduces the printed three-decimal values within ±0.0005 and leaves every value inside its stated patent interval.

| Condition | Patent bounds | Computed | Printed Example 1 |
|---|---|---:|---:|
| `abs(faf) / f` | 0.5 < value < 2.0 | 1.131678 | 1.132 |
| `abs(far) / f` | 0.5 < value < 4.5 | 2.456270 | 2.456 |
| `faf / far` | 0.1 < value < 2.1 | 0.460730 | 0.461 |
| `abs(f1b / f2)` | 0.1 < value < 2.0 | 0.462725 | 0.463 |
| `abs(f1 / f2)` | 0.1 < value < 1.5 | 0.584426 | 0.584 |

The agreement is a numerical check of the selected patent example; it does not establish the production-lens correlation independently of the structural and manufacturer evidence discussed above.

## Verification Summary

The final LensVisualizer prescription reproduces the selected Example 1 first-order quantities without scaling. Sequential reduced-angle tracing and a separately implemented ABCD composition agree to numerical precision. The infinity EFL is 51.495267 mm, compared with the patent's printed 51.50 mm. Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.0012575106 mm⁻¹, corresponding to a signed Petzval radius of about +795.222 mm.

The aperture requires a specific model distinction. Table 1 publishes a 37.00 mm full stop diameter, and Table 2 prints f/1.46. A Gaussian entrance-pupil calculation from the same physical stop gives about f/1.3845, while exact nonlinear tracing of the source stop edge gives f/1.456367. LensVisualizer's current aperture relation derives the active physical stop from `nominalFno`, so the data stores `nominalFno = 1.4563674539005629`; under that documented relation the modeled opening maps back to the published 18.50 mm stop semi-diameter. The marketed aperture remains separately recorded as f/1.4 and the patent design value as 1.46.

Every non-stop semi-diameter in the data is the patent's published effective diameter φ divided by two. These values are not asserted to be factory mechanical clear-aperture radii. With those source radii, the minimum calculated physical-element edge thickness is 1.416439 mm and the maximum actual rim-slope angle is 31.5746°. The tightest shared-gap sag intrusion is the 7A→8 gap at 86.1095% of its axial spacing, within the model's 90% limit.

Exact full-field chief rays remain within the authored source radii at both published focus endpoints. The worst infinity chief-ray ratio is 0.976308 at surface 26A, and the corresponding 450 mm-state ratio is 0.947135. Extreme stop-edge axial samples slightly exceed a published effective radius—about 1.00021× at infinity and 1.01107× at 450 mm—so the model retains that source-defined vignetting/clearance behavior rather than enlarging the patent diameters.

The rear GC omission is first-order only. Through surface 26A, the Gaussian BFL is 16.246443 mm, while the air-equivalent image spacing is 16.258207 mm. The small residual is retained as part of the disclosed normalization rather than being hidden by altering the source prescription.

## Sources and References

1. **WO 2024/166548 A1**, *Imaging Optical System and Imaging Device*, PCT/JP2023/045649, Sony Group Corporation, inventor Masakazu Yamagishi. Primary locations used here: ¶0016; ¶0063–¶0071; Tables 1–5 (printed pp. 22–23 / PDF pp. 24–25); Tables 61–62 (printed p. 67 / PDF p. 69); Figure 1 (PDF p. 97). WIPO publication supplied with this dossier.
2. **Sony USA, SEL50F14GM Specifications.** Product specifications for focal length, maximum aperture, E-mount, 35 mm full-frame format, 11 groups / 14 elements, 47° angle of view, minimum focus, maximum magnification, and 11 aperture blades: https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel50f14gm/specifications
3. **Sony Japan, FE 50mm F1.4 GM launch release, 2023-02-22.** Product announcement and 2023-04-21 release date; identifies two XA elements and one ED element: https://www.sony.jp/CorporateCruise/Press/202302/23-0222/
4. **Sony Japan, FE 50mm F1.4 GM feature page.** Production focus limits and two XD linear motors: https://www.sony.jp/ichigan/products/SEL50F14GM/feature_1.html
5. **OHARA optical-glass catalog:** https://www.ohara-inc.co.jp/en/product/01000/
6. **HOYA optical-glass data downloads:** https://www.hoya-opticalworld.com/english/datadownload/index.html
7. **SCHOTT Optical Glass:** https://www.schott.com/en-us/products/optical-glass-p1000267
8. **HIKARI general optical-glass catalog:** https://www.hikari-g.co.jp/optical_glass/general_optical_glass/
9. **CDGM Glass:** https://www.cdgmgd.com/
10. **SUMITA Optical Glass data downloads:** https://www.sumita-opt.co.jp/en/download/
