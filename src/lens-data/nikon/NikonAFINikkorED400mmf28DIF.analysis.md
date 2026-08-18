# NIKON AF-I NIKKOR 400mm f/2.8 D IF-ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,438,455 A\
**Application Number:** 166,836\
**Priority:** December 28, 1992 (Japan)\
**Filed:** December 15, 1993\
**Granted:** August 1, 1995\
**Inventor:** Masahiro Nakashima\
**Assignee:** Nikon Corporation\
**Title:** *Internal Focus Telephoto Lens for an Auto Focus Camera*\
**Embodiment analyzed:** Example 1, Figure 1 / Table 1

The data file fixes Example 1 of US 5,438,455 A as the prescription correlated with the **NIKON AF-I NIKKOR 400mm f/2.8 D IF-ED**. The patent itself does not state that Example 1 became that production lens, so the correlation should not be read as manufacturer confirmation. It rests on convergent evidence: the patent gives a design focal length of 392.0066 mm and `FN = 2.88`; Figure 1 shows internal focusing by a negative middle unit; the prescription contains 10 elements in 7 air-separated groups; and three elements use the unusually high-Abbe coordinate `nd = 1.49782`, `νd = 82.6`. Nikon's own compatibility material separately lists the production AF-I Nikkor 400mm f/2.8D IF-ED designation, and Nikon's historical account places its 300 mm, 400 mm, and 500 mm AF-I lenses in the silver-halide era.

The data therefore keeps the marketed 400 mm / f/2.8 identity separate from the patent design. The independently recomputed design EFL is **392.005464 mm**, while the wide-open design f-number is **2.88**. The canonical `nikon-f` mount and `135-full-frame` format are product-context assignments rather than patent prescription fields.

## Optical Architecture

Example 1 is an all-spherical, three-unit internal-focus telephoto. The front-to-rear power sequence is **positive G1 — negative G2 — positive G3**, followed by an aperture stop. G1 and G3 are fixed during focusing; G2 moves toward the image side as the object distance decreases. The patent specifically seeks a small focus stroke suitable for autofocus while maintaining correction as the negative internal group moves.

The ten physical elements form seven air-separated groups. G1 contains the three-element front subgroup `G11` followed by cemented component `L14`. G2 consists of biconcave `L21` followed by cemented component `L22`. G3 is the cemented pair `L3a + L3b`. The independently computed functional powers are:

| Unit or component | Computed EFL | Interpretation |
|---|---:|---|
| G1 | +219.8579 mm | Fixed positive front unit |
| G2 | -87.9602 mm | Translating negative focus unit |
| G1 + G2 | +207,494.3 mm | Nearly afocal combination |
| G3 | +156.8803 mm | Fixed positive rear unit |

The nearly zero power of `G1 + G2` independently confirms the patent's description of that combination as substantially afocal. This is a central architectural choice: focus is obtained by moving a comparatively compact negative group inside a system whose front two macro-units contribute almost no residual net vergence as a pair.

Using the active, filter-normalized model, total track divided by EFL is **0.952912**. Under the project definition this qualifies as telephoto. The Gaussian back focal distance from surface 17 is only **0.388183 EFL**, so the design is not retrofocus.

## Element-by-Element Analysis

### L11 — Biconvex Positive

`nd = 1.49782`, `νd = 82.6`. Glass: **J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = +294.9252 mm`.

L11 is the first positive collector in fixed unit G1. Its large clear aperture and very high Abbe number place a low-dispersion positive element at the point of greatest beam diameter. The glass name is catalog-derived; only the d-line index and Abbe number are patent facts.

### L12 — Biconvex Positive

`nd = 1.49782`, `νd = 82.6`. Glass: **J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = +311.2363 mm`.

L12 repeats the same optical coordinate as L11 and supplies the second positive member of the front subgroup. It is followed by the negative L13, so the first three elements distribute positive power across two low-dispersion elements before introducing the higher-index negative correction member.

### L13 — Biconcave Negative

`nd = 1.74950`, `νd = 35.2`. Glass: **J-LAF7 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = -337.5786 mm`.

L13 completes `G11`. Its higher index and lower Abbe number contrast strongly with L11 and L12. The resulting three-element subgroup remains positive: the independently computed EFL of `G11` is **+253.4494 mm**. This figure is an in-system subgroup result and should not be confused with L13's negative standalone power.

### L14a + L14b — Cemented L14

**L14a:** `nd = 1.69680`, `νd = 55.6`. Glass: **J-LAK14 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = -147.1464 mm`.

**L14b:** `nd = 1.59319`, `νd = 67.9`. Glass: **J-PSKH1 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = +127.0552 mm`.

L14 is the rear cemented component of G1. Although its two physical members have opposite standalone signs, their actual cemented combination is only weakly positive, with a computed EFL of **+1210.3921 mm**. It therefore refines the power and dispersion balance established by G11 rather than serving as the dominant source of G1's positive power.

### L21 — Biconcave Negative

`nd = 1.51680`, `νd = 64.1`. Glass: **J-BK7A (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = -168.5296 mm`.

L21 is the front element of moving unit G2. The patent gives several conditional expressions specifically constraining L21 and the cemented L22 component. In the final model, L21 retains substantial negative power while using a relatively high Abbe number, leaving the more extreme index and dispersion contrast to the following cemented pair.

### L22a + L22b — Cemented L22

**L22a:** `nd = 1.84666`, `νd = 23.8`. Glass: **J-SF03 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = +139.5398 mm`.

**L22b:** `nd = 1.53172`, `νd = 49.1`. Glass: **J-LLF6 (HIKARI line-data correlation; patent νd differs by +0.32)**. Standalone `f = -84.2658 mm`.

The two members form a negative cemented component with computed EFL **-211.2839 mm**. Their refractive-index difference is **0.31494**, while their Abbe-number difference is **25.3**; both quantities are explicitly controlled by the patent's conditions. Combined with L21, the complete translating G2 unit has EFL **-87.9602 mm**.

### L3a + L3b — Cemented G3

**L3a:** `nd = 1.49782`, `νd = 82.6`. Glass: **J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = +103.6319 mm`.

**L3b:** `nd = 1.68893`, `νd = 31.1`. Glass: **J-SF8 (HIKARI catalog correlation; patent vendor unspecified)**. Standalone `f = -312.2041 mm`.

G3 is positive overall, with computed EFL **+156.8803 mm**. L3b illustrates why standalone element power and in-situ behavior must be kept separate. Treated alone in air it is negative, matching the data-file `type` annotation. At its actual cemented front interface and air rear interface, however, the two surface powers are **-0.00238634 mm⁻¹** and **+0.00526536 mm⁻¹**, summing to **+0.00287902 mm⁻¹**. Thus its in-situ interface contribution is positive even though its isolated-air focal length is negative.

## Glass Identification and Selection

The patent identifies its glasses only by d-line `nd` and `νd`; it does not name a vendor or melt. The data file therefore preserves the patent coordinates as authoritative while treating every HIKARI name and every `nC`, `nF`, `ng`, and `dPgF` value as catalog-derived correlation data. No production-melt identity is asserted.

| Data-file correlation | Patent `nd` | Patent `νd` | Catalog `dPgF` | Elements |
|---|---:|---:|---:|---|
| J-FKH1 | 1.49782 | 82.6 | +0.0327 | L11, L12, L3a |
| J-LAF7 | 1.74950 | 35.2 | +0.0029 | L13 |
| J-LAK14 | 1.69680 | 55.6 | -0.0082 | L14a |
| J-PSKH1 | 1.59319 | 67.9 | +0.0135 | L14b |
| J-BK7A | 1.51680 | 64.1 | -0.0010 | L21 |
| J-SF03 | 1.84666 | 23.8 | +0.0171 | L22a |
| J-LLF6 | 1.53172 | 49.1 | -0.0003 | L22b |
| J-SF8 | 1.68893 | 31.1 | +0.0072 | L3b |

All selected catalog correlations are index-exact at the stored `nd` precision. The largest Abbe-number residual is **0.32** for L22b / J-LLF6; the remaining correlations are closer. The stored line indices and `dPgF` values reproduce the Stage 1 HIKARI catalog data at their written precision. These spectral fields improve the model's dispersion basis, but they do not turn a catalog correlation into evidence for the production lens's actual melt selection or justify a stronger chromatic-performance classification by themselves.

## Focus Mechanism

Focus is **PUBLISHED internal focus**, not a reconstruction. G1 and G3 remain fixed while negative unit G2 translates toward the image plane. The movement is represented exactly by the two patent-tabulated variable gaps:

| Gap | Infinity | Close endpoint | Change |
|---|---:|---:|---:|
| `d9` — G1→G2 | 8.2485 mm | 26.0802 mm | +17.8317 mm |
| `d14` — G2→G3 | 23.0326 mm | 5.2009 mm | -17.8317 mm |
| `d9 + d14` | 31.2811 mm | 31.2811 mm | 0 |

The equal and opposite gap changes establish a rigid **17.8317 mm** imageward translation of G2. Using the patent's close object distance data with the rounded prescription gives computed magnification **β = -0.144567**, compared with the patent's `-0.1446`.

The data field `closeFocusM = 3.3` represents the patent's worked close endpoint `R = 3300 mm`, where `R` is object-to-image distance. It is not presented as a separately verified production minimum-focus specification. No intermediate focus state is invented.

## Chromatic Correction Strategy

The prescription distributes dispersion correction across both the large fixed front unit and the small moving focus unit. Three positive elements—L11, L12, and L3a—share the very high-Abbe patent coordinate `nd = 1.49782`, `νd = 82.6`. In the front group, those elements are balanced against the higher-index, lower-Abbe L13 and the L14 cemented pair.

The patent is especially explicit about G2. L21 must have `νa > 45`; the positive and negative members of L22 must maintain a substantial refractive-index difference; and the negative member must exceed the positive member's Abbe number by more than 25. Example 1 satisfies these constraints with `νa = 64.1`, `Nb - Nc = 0.31494`, and `νc - νb = 25.3`. This makes the translating focus group a deliberately dispersion-balanced negative unit rather than a simple single negative lens.

The HIKARI correlations add C-, F-, and g-line indices and `dPgF` to the model, so the stored data can represent more than an Abbe-only approximation. Those values are catalog-derived, however; the patent itself publishes only d-line coordinates.

## Conditional Expressions

US 5,438,455 A sets eight design conditions. Conditions (1)–(7) can be recomputed directly from the final TypeScript prescription and its derived group powers. Condition (8) is only consistency-checked because the patent defines `Φ` as the effective diameter of the object-side surface of L11 but does not separately tabulate it.

| # | Expression | Patent Example 1 | Recomputed from final data | Required range | Result |
|---:|---|---:|---:|---|---|
| 1 | `f1/F` | 0.561 | 0.560853 | `0.35 < x < 0.60` | Pass |
| 2 | `f22/f21` | 1.254 | 1.253690 | `0.7 < x < 1.6` | Pass |
| 3 | `(Rb+Ra)/(Rb-Ra)` | -0.433 | -0.433208 | `-1.0 < x < -0.4` | Pass |
| 4 | `(Rd+Rc)/(Rd-Rc)` | -2.043 | -2.043476 | `-2.1 < x < -1.7` | Pass |
| 5 | `νa` | 64.1 | 64.1 | `x > 45` | Pass |
| 6 | `Nb-Nc` | 0.31 | 0.31494 | `0.1 < x < 0.35` | Pass |
| 7 | `νc-νb` | 25.3 | 25.3 | `x > 25` | Pass |
| 8 | `Φ/f1` | 0.619 | 0.619095* | `0.55 < x < 0.72` | Inference-limited pass* |

`f1` is G1 focal length; `f21` is L21 focal length; `f22` is the cemented L22 focal length. `Ra` and `Rb` are the two L21 radii; `Rc` is the image-side radius of L12; `Rd` is the object-side radius of L13. `Nb`, `νb` refer to L22a, while `Nc`, `νc` refer to L22b.

For condition (8), the recomputed value substitutes the f-number-equivalent entrance-pupil diameter `EFL/FN` for the separately unavailable `Φ`. It therefore demonstrates numerical consistency with the patent, not an independent recovery of the source's effective-diameter datum.

## Verification Summary

The final data file retains patent surfaces 1–17 at native scale. There is **no uniform scaling** and no aspheric coefficient transformation because Example 1 is entirely spherical. The final sequential y–ν trace and an independently accumulated ABCD matrix agree to a maximum absolute ray-coordinate difference of **1.776 × 10⁻15**.

At infinity, the computed EFL is **392.005464 mm**, only **-0.001136 mm** from the patent's more precise `F = 392.0066 mm`. The modeled stop gives `f/2.880000`, matching the authored `nominalFno = 2.88`. The physical stop position is not tabulated by the patent: it is inferred from Figure 1 as **23.7 mm behind surface 17**, and its modeled semi-diameter **22.303806 mm** is solved to reproduce the patent design f-number. Both are modeling inferences.

The patent also includes a 2.00 mm, `n = 1.51680` plane-parallel filter after G3. The active LensVisualizer model omits this filter and preserves its first-order axial effect by replacing the source rear path with an air-equivalent surface-17-to-image distance of **152.165465 mm**. This is a documented reference-plane normalization, not a change to the powered prescription.

Clear apertures are likewise not tabulated. Surface 1 uses `sd = 68.2 mm`, anchored by the patent's condition-(8) effective semi-diameter of approximately **68.046 mm**; the remaining semi-diameters are inferred from the marginal-ray envelope, Figure 1 proportions, and geometry constraints. Across the published infinity and close states, the final model has minimum edge thickness **2.6931 mm**, maximum spherical rim angle **39.2468°**, maximum positive cross-gap intrusion fraction **0.4581**, and minimum exact full-stop marginal-ray clearance **0.2810 mm**. These are validation results for the authored geometry, not patent specifications.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is **+0.000260406876 mm⁻¹**, corresponding to a reciprocal radius of approximately **+3840.14 mm**. No patent prescription value was altered to obtain these agreements; the small residuals in focal length and close-focus imaging remain as consequences of printed source precision.

## Sources and References

1. **Nakashima, Masahiro.** US 5,438,455 A, *Internal Focus Telephoto Lens for an Auto Focus Camera*. Nikon Corporation. Granted August 1, 1995. Example 1, Figure 1, Table 1, and the patent's conditions (1)–(8). Original patent PDF is included in the handoff package.
2. **Nikon Imaging.** [AF-S Teleconverter TC-20E III — compatible lenses](https://imaging.nikon.com/imaging/lineup/lens/f-mount/teleconverters/af-s_tc-20e_3/). Lists `AF-I Nikkor 400mm f/2.8D IF-ED` and provides manufacturer-source support for the production identity and F-mount context.
3. **Nikon Imaging.** [NIKKOR — The Thousand and One Nights No. 67](https://imaging.nikon.com/imaging/information/story/0067/). Historical Nikon account noting the 300 mm, 400 mm, and 500 mm AF-I lens generation in the silver-halide era.
4. **HIKARI Glass Co., Ltd.** [Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/). Manufacturer catalog source for the HIKARI glass correlations and spectral line data stored in the data file; these are correlations, not patent-identified melts.
