# NIKON AF-S NIKKOR 500mm f/4 E FL ED VR

## Patent Reference and Design Identification

**Patent:** JP 2015-215560 A\
**Application Number:** JP2014-99625\
**Filed:** 2014-05-13\
**Published:** 2015-12-03\
**Inventors:** Masafumi Yamashita; Tetsushi Miwa\
**Applicant:** Nikon Corporation\
**Title:** 光学系、光学装置、光学系の製造方法 (*Optical system, optical apparatus, and method for manufacturing an optical system*)\
**Embodiment analyzed:** Example 1 / 第1実施例

The prescription is the project-selected correlation for the **NIKON AF-S NIKKOR 500mm f/4 E FL ED VR**. The patent does not identify a commercial lens by product name, so the correspondence is an evidence-based production correlation rather than an express manufacturer statement.

Several independent features converge on that identification:

1. Nikon's production specification describes an FX-format Nikon F-mount 500 mm f/4 lens with 16 lens elements in 12 groups, two fluorite elements, three ED elements, internal focusing, and VR. Example 1 contains a separate front protective meniscus FLG plus 16 active lens elements in 12 air-separated groups. Removing FLG, as the LensVisualizer data policy requires, leaves the same 16-element/12-group active count. [Nikon product specification][nikon-spec]
2. The patent contains exactly two elements with `nd = 1.43385`, `νd = 95.25` (L11 and L12), matching the production lens's count of two fluorite elements, and exactly three elements with `nd = 1.49782`, `νd = 82.57` (L15, L32, and L35), matching the production count of three ED elements.
3. Example 1 publishes `f = 490.000 mm`, `FNO = 4.122`, full field `2ω = 5.035°`, and image height `Y = 21.63 mm`; these design quantities correspond closely to the marketed 500 mm f/4 full-frame lens while remaining explicitly separate from its rounded product specifications. Patent Table 1, ¶¶0041–0044.
4. The patent uses a negative internal-focus group G2 that translates imageward, together with a laterally shifting G3b vibration-reduction group. Those mechanisms agree with Nikon's production description of IF and VR. Patent ¶¶0038–0040; [Nikon product specification][nikon-spec].
5. The patent's near-focus row gives `β = -0.153`. The unmodified source prescription independently traces to approximately 3.599 m from object to focal plane, consistent with Nikon's rounded 3.6 m minimum focusing distance and 0.15× maximum reproduction ratio. The final LensVisualizer model is slightly different at close focus because it omits FLG and renormalizes rear air, as described below.
6. Nikon announced the production lens on 2015-07-02, after the patent filing and before the Japanese publication date, which is chronologically consistent with the design being contemporary with the product. [Nikon launch release][nikon-launch]

No uniform scale factor is applied. The marketed values remain 500 mm and f/4; the final active model has an independently recomputed infinity EFL of **489.459688 mm** and uses the patent's modeled maximum aperture **f/4.122**.

## Optical Architecture

Example 1 is an all-spherical, fixed-focal-length **telephoto** design. The patent organizes it as a positive G1, negative G2, and positive G3, with G3 subdivided into positive G3a, negative G3b, and positive G3c. The aperture stop is fixed between G2 and G3. Patent ¶¶0034–0039.

The final LensVisualizer prescription contains **16 active elements in 12 air-separated groups**. The source protective meniscus FLG (patent surfaces 1–2) is not modeled as an active lens element. This omission is a modeling normalization, not a correction to the patent: surface 31's rear air is increased from the source `Bf = 87.772 mm` to **87.868557 mm** so that the FLG-free active prescription remains focused at infinity. The omission changes the modeled EFL from the complete patent system's 490.000 mm to **489.459688 mm**.

Measured from the first active modeled surface to the image plane, the final axial track is **418.900557 mm**. The ratio `TL/EFL = 0.855843`, so the model satisfies the project's telephoto criterion `TL/EFL < 1`. Its infinity back focal distance is **87.868557 mm**, well below EFL, so it is not retrofocus under the project's `BFD > EFL` definition.

The power distribution is functionally straightforward but internally layered:

- **G1** is a strong positive front collector. With FLG removed, its isolated equivalent focal length is **+196.770692 mm**.
- **G2** is the negative internal-focus group, with isolated equivalent focal length **−107.210701 mm**. It moves as a unit between the fixed front and rear structures.
- **G3a** is a positive cemented pair with isolated equivalent focal length **+261.209511 mm**.
- **G3b** is the negative VR group, with isolated equivalent focal length **−80.753233 mm**. It shifts transversely for image stabilization in the patent model.
- **G3c** is a positive rear relay with isolated equivalent focal length **+97.292426 mm**.

These group focal lengths are isolated equivalent powers of the defined subassemblies; they are not interchangeable with the standalone focal lengths of the individual elements or with each group's system-level contribution after surrounding separations are included.

The numerical example contains no aspherical surface coefficients. The final data therefore uses `asph: {}`. Patent ¶0067 permits aspheres generically as an optional implementation, but that statement does not add an asphere to Example 1.

The patent does not publish clear semi-diameters or a physical stop diameter. Consequently, all modeled lens semi-diameters and the stop radius are authoring inferences constrained by the patent section drawing, Nikon's construction drawing, the modeled pupil and ray envelopes, and the current geometry rules. The stop remains at the patent's fixed axial station, but its modeled semi-diameter **18.662373 mm** is back-solved from the active prescription and `FNO = 4.122`; it is not a patent dimension.

## Element-by-Element Analysis

### L11 — Plano-Convex Positive

`nd = 1.43385`, `νd = 95.25`. Glass: **Calcium fluoride (CaF2 crystal; Nikon-correlated)**. Standalone `f = +459.039299 mm`.

L11 is the first active positive collector after the omitted protective meniscus. Nikon's product specification establishes that the production lens contains two fluorite elements, and Example 1 contains exactly two elements at this low-index, very-high-Abbe coordinate; the final model therefore correlates L11 and L12 with the production fluorite pair. This is a production correlation, not a glass name supplied by the patent.

The explicit C-, F-, and g-line values stored for L11 are calculated from the cited CaF2 dispersion relation rather than copied from the patent. They support the model's chromatic trace but do not alter the source `nd` and `νd` values.

### L12 — Biconvex Positive

`nd = 1.43385`, `νd = 95.25`. Glass: **Calcium fluoride (CaF2 crystal; Nikon-correlated)**. Standalone `f = +224.087353 mm`.

L12 is the stronger of the two front fluorite-correlated positive elements. Together, L11 and L12 establish much of G1's positive power before the two negative members farther back in the group. The patent specifically prefers at least two negative lenses in G1 because that structure assists the balance of spherical and axial chromatic aberration; the individual corrective allocation among L11–L15 is not separately tabulated. Patent ¶0030.

### L13 — Biconcave Negative

`nd = 1.61266`, `νd = 44.46`. Glass: **613445 class (HIKARI J-KZFH1 spectral match)**. Standalone `f = −338.744576 mm`.

L13 supplies the first negative power within G1 after the two positive front collectors. Its class label reflects the source coordinates; HIKARI J-KZFH1 is used in the final data only as an exact-coordinate spectral analogue for `nC`, `nF`, `ng`, and `dPgF`, not as a claim that Nikon specified that melt.

As one of G1's negative elements, L13 participates in the correction balance described in patent ¶0030. The patent does not assign a unique aberration term to L13 alone.

### L14 — Negative Meniscus, Convex to Object

`nd = 1.69680`, `νd = 55.52`. Glass: **697555 class (HIKARI J-LAK14 spectral match)**. Standalone `f = −161.158073 mm`.

L14 is the negative front member of cemented pair D1 at the rear of G1. It is cemented directly to L15 at surface 10. Its spectral fields again use an exact-coordinate HIKARI analogue without asserting vendor identity.

### L15 — Positive Meniscus, Convex to Object

`nd = 1.49782`, `νd = 82.57`. Glass: **498826 ED class (HIKARI J-FKH1 spectral match)**. Standalone `f = +109.492952 mm`.

L15 is the positive partner of L14 and one of the three elements correlated with Nikon's production ED count. The isolated cemented L14+L15 assembly has equivalent focal length **+374.249888 mm**. That net positive assembly power is distinct from either element's standalone-in-air focal length.

The pair closes G1 and places a high-Abbe positive member immediately before the moving negative focus group, contributing to the front group's chromatic and power balance without requiring a separate air gap.

### L21 — Plano-Concave Negative

`nd = 1.83400`, `νd = 37.18`. Glass: **834372 class (HIKARI J-LASF010 spectral match)**. Standalone `f = −98.587170 mm`.

L21 is the leading negative element of G2, the internal-focus group. Its substantial negative standalone power is central to G2's overall negative equivalent focal length. The entire G2 assembly moves imageward during focusing; L21 does not move independently of L22 and L23. Patent ¶¶0036, 0038.

### L22 — Positive Meniscus, Concave to Object

`nd = 1.80809`, `νd = 22.74`. Glass: **808227 high-dispersion class (HIKARI J-SFH1 spectral match)**. Standalone `f = +151.725029 mm`.

L22 is the positive member of the cemented L22+L23 pair. Its unusually low Abbe number for a positive lens is intentional in the patent's design logic: condition (2) requires the relevant positive lens in G2 to satisfy `νdp < 30`, and Example 1 uses `νdp = 22.74`. The patent states that this condition suppresses chromatic variation during focusing. Patent ¶¶0017–0018, 0023.

### L23 — Plano-Concave Negative

`nd = 1.55298`, `νd = 55.07`. Glass: **Unmatched (553551; current HIKARI J-KZFH4 is a post-filing spectral proxy only)**. Standalone `f = −171.288293 mm`.

L23 is cemented to L22 and is the negative glass governed by patent conditions (3) and (5). The final data deliberately leaves its identity unmatched. A current HIKARI J-KZFH4 entry is an exceptionally close coordinate analogue, but HIKARI's history records its development after this patent's filing and after the production lens's release period. It is therefore used only as an explicit spectral proxy for line-index modeling, not as the historical glass identification. [HIKARI history archive][hikari-history]

The isolated L22+L23 cemented pair is weakly positive, with equivalent focal length **+1373.881775 mm**. G2 nevertheless remains strongly negative at **−107.210701 mm** because L21 precedes that pair with negative power and a finite air separation. This illustrates why standalone element power, cemented net power, and complete group power must be kept separate.

### L31 — Negative Meniscus, Convex to Object

`nd = 1.80809`, `νd = 22.74`. Glass: **808227 high-dispersion class (HIKARI J-SFH1 spectral match)**. Standalone `f = −115.189996 mm`.

L31 begins G3a as the negative member of a cemented pair. Although L31 alone is negative, the pair becomes positive after the strong biconvex L32 is added. Patent ¶0037 identifies G3a as a positive subgroup.

### L32 — Biconvex Positive

`nd = 1.49782`, `νd = 82.57`. Glass: **498826 ED class (HIKARI J-FKH1 spectral match)**. Standalone `f = +79.685959 mm`.

L32 is the positive partner of L31 and the second of the model's three production-correlated ED-class elements. The cemented L31+L32 pair is identical to G3a and has isolated equivalent focal length **+261.209511 mm**.

### L33 — Biconcave Negative

`nd = 1.62299`, `νd = 58.12`. Glass: **623581 class (HIKARI J-SK15 spectral match)**. Standalone `f = −186.957194 mm`.

L33 is the leading negative element of G3b, the laterally shifting vibration-reduction subgroup. Patent ¶0039 specifies G3b as the shift group, while ¶0027 states a preference for the shift group to contain at least one positive and at least one negative lens so chromatic coma during lens shift can be controlled.

### L34 — Positive Meniscus, Concave to Object

`nd = 1.61266`, `νd = 44.46`. Glass: **613445 class (HIKARI J-KZFH1 spectral match)**. Standalone `f = +81.749600 mm`.

L34 is the positive member of cemented pair D4 within G3b. Its positive power is paired directly with the ED-class negative L35.

### L35 — Biconcave Negative

`nd = 1.49782`, `νd = 82.57`. Glass: **498826 ED class (HIKARI J-FKH1 spectral match)**. Standalone `f = −52.475028 mm`.

L35 is the negative partner of L34 and the third element correlated with Nikon's production ED count. The ED designation here describes dispersion class, not optical sign: L35 is a strongly negative lens despite its high Abbe number.

The isolated L34+L35 cemented pair has equivalent focal length **−145.943720 mm**. Together with L33 and their intervening air gap, the full G3b shift group has equivalent focal length **−80.753233 mm**.

### L36 — Biconvex Positive

`nd = 1.61266`, `νd = 44.46`. Glass: **613445 class (HIKARI J-KZFH1 spectral match)**. Standalone `f = +54.142554 mm`.

L36 begins G3c with strong positive power. G3c is the final positive subgroup in the patent architecture and serves as the rear relay following the negative VR group. Patent ¶0037.

### L37 — Biconcave Negative

`nd = 1.83481`, `νd = 42.73`. Glass: **835427 class (HIKARI J-LASF05 spectral match)**. Standalone `f = −33.107808 mm`.

L37 inserts strong negative power between the two positive elements of G3c. Its role is best understood as part of the rear subgroup's net correction and power distribution rather than as an independently published aberration corrector; the patent does not allocate a specific aberration term to L37.

### L38 — Biconvex Positive

`nd = 1.80100`, `νd = 34.92`. Glass: **801349 class (HIKARI J-LAF016 spectral match)**. Standalone `f = +54.837817 mm`.

L38 is the final positive element. In combination with L36 and L37, it leaves G3c with positive isolated equivalent focal length **+97.292426 mm** before the normalized rear air to the image plane.

## Glass Identification and Selection

The patent itself supplies `nd`, `νd`, and rounded `θgF` values but does not name glass vendors. The final model therefore separates three kinds of material statement:

- **Manufacturer-correlated material:** L11 and L12 are assigned CaF2 because Nikon's production specification explicitly states that the lens contains two fluorite elements and the patent contains exactly two matching low-index/high-Abbe elements.
- **Coordinate class with spectral proxy:** where a current HIKARI glass reproduces the patent's `nd/νd` coordinate, the class remains the authored identity while HIKARI line data populate `nC`, `nF`, `ng`, and `dPgF` for chromatic tracing.
- **Unmatched material:** L23 remains `Unmatched (553551)` because the closest current named HIKARI coordinate post-dates the design. Its line data are retained only as a disclosed spectral proxy.

| Model material | `nd` | `νd` | `dPgF` in final data | Elements | Basis of identification |
| --- | ---: | ---: | ---: | --- | --- |
| Calcium fluoride (CaF2 crystal; Nikon-correlated) | 1.43385 | 95.25 | +0.055004227 | L11, L12 | Nikon's two-fluorite count + exact patent coordinate; line data from CaF2 dispersion relation |
| 613445 class (HIKARI J-KZFH1 spectral match) | 1.61266 | 44.46 | −0.0058 | L13, L34, L36 | Patent coordinate; HIKARI used only for spectral proxy |
| 697555 class (HIKARI J-LAK14 spectral match) | 1.69680 | 55.52 | −0.0082 | L14 | Patent coordinate; HIKARI spectral proxy |
| 498826 ED class (HIKARI J-FKH1 spectral match) | 1.49782 | 82.57 | +0.0327 | L15, L32, L35 | Three-element count correlates with Nikon's three ED elements; HIKARI spectral proxy |
| 834372 class (HIKARI J-LASF010 spectral match) | 1.83400 | 37.18 | −0.0042 | L21 | Patent coordinate; HIKARI spectral proxy |
| 808227 high-dispersion class (HIKARI J-SFH1 spectral match) | 1.80809 | 22.74 | +0.0226 | L22, L31 | Patent coordinate; HIKARI spectral proxy |
| Unmatched 553551; J-KZFH4 post-filing proxy | 1.55298 | 55.07 | −0.0073 | L23 | Historical identity not asserted; current HIKARI line data used only as proxy |
| 623581 class (HIKARI J-SK15 spectral match) | 1.62299 | 58.12 | −0.0030 | L33 | Patent coordinate; HIKARI spectral proxy |
| 835427 class (HIKARI J-LASF05 spectral match) | 1.83481 | 42.73 | −0.0079 | L37 | Patent coordinate; HIKARI spectral proxy |
| 801349 class (HIKARI J-LAF016 spectral match) | 1.80100 | 34.92 | −0.0004 | L38 | Patent coordinate; HIKARI spectral proxy |

The explicit spectral fields allow the model to represent more than an Abbe-only dispersion approximation, but they do not establish the historical vendor or melt for the class-coded glasses. No apochromatic classification is inferred from these proxies.

## Focus Mechanism

The lens uses **published internal focusing**. G2, comprising L21–L23, moves imageward as a rigid group from infinity toward near focus. The stop remains fixed, as do G1 and G3. Patent ¶0038.

The two variable gaps on either side of G2 conserve their sum at **50.610 mm** in every published focus row:

| Focus state | `d11` G1→G2 (mm) | `d16` G2→STO (mm) | G2 imageward shift from infinity (mm) | Source / model status |
| --- | ---: | ---: | ---: | --- |
| Infinity | 14.505 | 36.105 | 0.000 | Patent Table 1; data endpoint |
| Intermediate | 17.427 | 33.183 | 2.922 | Patent Table 1; exactly reproduced at `t = 0.210246079` |
| Near | 28.403 | 22.207 | 13.898 | Patent Table 1; data endpoint |

Because the intermediate row lies exactly on the linear translation between the two data endpoints, no focus reconstruction is required. The focus status is **PUBLISHED**, not constrained or inferred.

In the final FLG-free normalized model, the near state traces to transverse magnification **−0.153256072** and an object-to-focal-plane distance of **3.588203 m**. The source patent itself lists `β = -0.153`; Nikon's marketed minimum focus distance is rounded to 3.6 m. The small difference from the complete patent system's approximately 3.599 m traced distance is a consequence of the deliberately omitted FLG and rear-focus normalization, not a change in the published G2 motion.

## Chromatic Correction Strategy

The patent's chromatic strategy is distributed across the front collector, the moving focus group, and the VR group rather than concentrated in a single achromat.

The production correlation places two CaF2 elements at L11 and L12 and three ED-class elements at L15, L32, and L35. Those assignments are independently supported by Nikon's published special-element counts, while the exact element coordinates come from the patent. [Nikon product specification][nikon-spec]

G2 is particularly explicit in the claims. The relevant positive lens L22 uses the unusually dispersive `νd = 22.74` material required by condition (2), while the cemented negative partner L23 is selected to satisfy the refractive-index/Abbe constraint (3) and the partial-dispersion condition (5). Patent ¶¶0017–0023, 0028–0029. The patent states that this combination is intended to limit chromatic changes during focusing while balancing chromatic and spherical correction.

The VR subgroup also contains both positive and negative power, including the high-Abbe negative L35. Patent ¶0027 specifically associates that mixed-sign shift group with control of chromatic coma during stabilization. This is a source design rationale; the data file's modern spectral proxies should not be read as proof of the original melt identities.

## Conditional Expressions

Example 1 is governed by five explicit patent conditions. The following values are independently recomputed from the source prescription and source-precision material data rather than copied uncritically from the listed corresponding values.

1. **Focus-group power:** `3.20 < f/(-f2) < 6.00`. With `f = 490.000 mm` and computed `f2 = -107.210701 mm`, the result is **4.570439**, matching the patent's rounded 4.57 and satisfying the condition.
2. **G2 positive-lens dispersion:** `νdp < 30`. L22 gives **22.74**, satisfying the condition exactly as tabulated.
3. **G2 negative-lens index/dispersion:** `Ndn + 0.0071νdn - 1.964 < 0`. With L23's source `nd = 1.55298`, `νd = 55.07`, the result is **−0.020023**, matching the tabulated −0.02 after rounding.
4. **Combined G1+G2 power:** `0 < f/f12` with a preferred upper bound below 1.0. The infinity prescription gives **0.742306552**, not the **0.81** printed in Example 1's corresponding-value table. Substituting the patent's intermediate-focus `d11 = 17.427 mm` gives **0.810082896**, reproducing the printed 0.81. Sibling Examples 2 and 3 reproduce their own listed values from their infinity spacings, so Example 1's 0.81 is retained as a source calculation/copy error rather than forced into the model.
5. **G2 negative-lens partial dispersion:** `θgFn - 0.6438 + 0.0016821νdn < -0.001`. Table 1 prints `θgF = 0.54` only to two decimals; using that printed value gives **−0.011166753**, which safely satisfies the inequality but cannot reproduce the listed −0.007 exactly. The exact corresponding value is therefore underdetermined by the source precision. No unpublished precision is invented.

The condition-(4) discrepancy is the only direct numerical source error that affects an explicitly listed corresponding value. The prescription itself is left unchanged.

## Image Stabilization

Patent G3b (L33 plus the L34/L35 cemented pair) is the vibration-reduction shift group. During stabilization it moves with a component perpendicular to the optical axis. Patent ¶0039. The patent gives a vibration-reduction coefficient of **−1.474** and states that a **0.149°** rotational shake is compensated by a G3b shift of **−0.865 mm**. Patent ¶0040.

An independent rigid-decenter first-order calculation on the complete source prescription gives coefficient **−1.473994506** and a shift of **−0.864500 mm** for the stated rotation, reproducing the source values at their printed precision.

The final LensVisualizer active model omits FLG and uses the normalized rear air, so its recomputed coefficient is slightly different at **−1.475220599**. This difference is a direct consequence of the documented model normalization rather than an alteration of G3b itself. The data file marks G3b as the VR group but does not invent a production decenter limit beyond the displacement published for the patent's example calculation.

## Verification Summary

For the final active model, the independently recomputed first-order quantities are:

| Quantity | Final active-model result | Interpretation |
| --- | ---: | --- |
| Infinity EFL | 489.459687598 mm | FLG-free active prescription |
| Infinity BFD | 87.868556937 mm | normalized rear air after FLG omission |
| Modeled maximum f-number | 4.122000014 | reproduces authored `nominalFno = 4.122` |
| First-active-surface → image track | 418.900557 mm | `TL/EFL = 0.855843`, telephoto by project rule |
| Near magnification | −0.153256072 | final normalized close-focus state |
| Near focal-plane object distance | 3.588202891 m | stored as `closeFocusM = 3.588203` |
| Active Petzval sum | −6.624312132723×10⁻⁶ mm⁻¹ | surface-by-surface `φ/(n·n′)` |

The modeled stop semi-diameter is **18.662373 mm** and gives entrance-pupil semi-diameter **59.371626 mm**, recovering the modeled **f/4.122**. Because the patent does not publish stop diameter or lens clear apertures, the stop and all lens semi-diameters remain explicitly inferred geometry.

The inferred semi-diameter set has a minimum modeled edge thickness of **0.506967 mm** at L15 and a maximum spherical rim angle of **46.489054°** at surface 10. The tightest shared air gap is surfaces 13→14: at the authored semi-diameters its sag-intrusion ratio is **0.928179572**, below the lens-specific `gapSagFrac = 0.93`, while preserving **0.282972 mm** of physical axial clearance. Surface 14 retains only **0.076390 mm** of margin to the independently traced wide-open marginal ray at infinity, which is why that local aperture cannot simply be reduced to restore the default 0.90 gap fraction.

At the authored sampling configuration, the defined on-axis and default rendered off-axis rays remain within every modeled non-stop aperture at infinity, the published intermediate position, and near focus. This containment statement is specific to those defined samples and is not a claim that the entire published 5.035° field is unvignetted at every pupil coordinate.

## Sources

- **JP 2015-215560 A**, Nikon Corporation, Example 1 / 第1実施例, especially ¶¶0014–0031 and ¶¶0034–0046, Table 1, and Figs. 1–3.
- [Nikon Imaging — AF-S NIKKOR 500mm f/4E FL ED VR product specification][nikon-spec].
- [Nikon Corporation — 2015-07-02 launch release][nikon-launch].
- [HIKARI Optical Glass — current catalog downloads][hikari-catalog], used for disclosed coordinate-class spectral proxies rather than historical vendor attribution.
- [HIKARI J-KZFH product material][hikari-kzfh] and [HIKARI history archive][hikari-history], used to establish that current J-KZFH4 is post-filing and therefore unsuitable as an asserted historical identity for L23.
- I. H. Malitson, *Applied Optics* **2** (1963), 1103–1107, used for the CaF2 line-index values stored on L11 and L12.

[nikon-spec]: https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_500mmf_4e_fl_ed_vr/
[nikon-launch]: https://www.nikon.com/company/news/2015/0702_lens_01/
[hikari-catalog]: https://www.hikari-g.co.jp/optical_glass/catalog/
[hikari-kzfh]: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-kzfh/
[hikari-history]: https://www.hikari-g.co.jp/news/archive/2018/
