## Patent Reference and Design Identification

**Patent:** US 4,806,003\
**Application Number:** 90,680\
**Priority:** September 1, 1986 (Japan)\
**Filed:** August 28, 1987\
**Granted:** February 21, 1989\
**Inventors:** Hiromu Mukai; Hisashi Tokumaru\
**Assignee:** Minolta Camera Kabushiki Kaisha\
**Title:** *Inverted-Telephototype Wide Angle Lens System*\
**Embodiment analyzed:** Example 2

The LensVisualizer prescription identifies Example 2 of US 4,806,003 with the original **MINOLTA AF 35mm f/1.4**. This is a production correlation adopted for the model, not a statement that Minolta explicitly identified the production lens by patent number. Several independent features converge on the same identification:

1. Example 2 contains ten glass elements arranged as eight air-separated lens components, matching the Minolta service manual's 10-element/8-group specification.
2. The patent divides focusing motion between elements E4-E6 and E7-E10. The Minolta repair guide describes the production lens as a double-floating rear-focus design and identifies the corresponding 4th-6th and 7th-10th lens assemblies as the moving groups.
3. The patent places its only asphere on the rear surface of the ninth physical element; the repair guide likewise identifies the ninth lens as aspherical.
4. The production lens is marketed as 35 mm f/1.4, while the patent gives a normalized design with `f = 100` and `FNO = 1.45`. The LensVisualizer model applies a uniform scale of `s = 0.35`, yielding a computed design EFL of 34.983445722 mm while retaining the patent's exact modeled F-number of 1.45. The marketed aperture remains f/1.4 metadata rather than a substitute for the design value.
5. The patent specifies a 64° full field; the Minolta service manual gives a 63° production angle of view. The service manual also specifies 0.3 m minimum focus, close to the independently reconstructed 0.308740 m image-plane-to-object distance for the modeled patent close-focus state.
6. The manufacturer source identifies Minolta A mount. LensVisualizer therefore uses the canonical `sony-a` taxonomy id and the `135-full-frame` image-format id.

The patent provides no absolute dimensional unit for Example 2. The data file therefore scales all dimensional prescription values by 0.35 from the normalized `f = 100` prescription. Refractive indices, Abbe numbers, field angle, F-number, and conic constant are unchanged by that operation.

## Optical Architecture

The patent describes an inverted-telephoto wide-angle system. Under the project's geometric classification, the scaled prescription is **retrofocus**: the computed rear vertex-to-image BFL is 36.740699721 mm while the EFL is 34.983445722 mm, so `BFL/EFL = 1.050231015 > 1`. It is not classified as telephoto under the project criterion `TL/EFL < 1`; the verified total-track ratio is 3.344396108.

The design has ten physical glass elements in eight air-separated components, labeled L1 through L8 in the patent and represented as E1 through E10 in the data file. The patent organizes those components into three functional power groups rather than eight independent power groups:

- **GI, E1-E3:** fixed negative front group. Independent paraxial evaluation of the authored group gives an EFL of -123.945894 mm.
- **GII, E4-E6:** positive moving group ahead of the stop, with a computed group EFL of +62.126489 mm.
- **GIII, E7-E10:** positive moving rear group, with a computed group EFL of +46.492900 mm.

These group focal lengths describe the isolated functional group chains in the authored prescription. They are distinct from the standalone focal lengths of individual elements and from the net focal lengths of the cemented L5 and L6 components.

The principal architectural choice is the focus system. GI remains stationary while GII and GIII translate objectward at different rates for closer focus. GIII moves faster, reducing the GII-GIII separation as focus approaches the close state. This permits focus correction to be distributed between two rear assemblies without translating the large negative front group.

Example 2 contains no sensor cover glass, filter plate, dummy or flare-cutter plane, mirror, or folded optical path, and none is added to the model. No omitted plate correction is folded into the rear spacing. The patent also publishes no semi-diameters. Every authored clear semi-diameter is therefore a modeling inference constrained by the Fig. 5 silhouette, the f/1.45 marginal bundle, field rays, and the Stage-2 geometry checks; these dimensions are not patent-published aperture data.

## Element-by-Element Analysis

### E1 — L1 / Element 1 — Negative Meniscus

**nd = 1.62280, νd = 56.98. Glass: 623570 SK10-class (vendor unresolved). Standalone f = -69.653802 mm.**

E1 is the first negative component of GI. Together with E2 it establishes the diverging front section needed for the long SLR back focus. The patent specifically attributes part of the high-order spherical-aberration and distortion control to the first two negative components. The quoted focal length is the element's standalone paraxial focal length in air; its in-system contribution is coupled to E2, E3, and the intervening air spaces.

### E2 — L2 / Element 2 — Biconcave Negative

**nd = 1.61720, νd = 54.00. Glass: 617540 SSK1-class (vendor unresolved). Standalone f = -56.793881 mm.**

E2 strengthens GI's negative power while preserving the broad front-group separation from the positive rear system. Its biconcave form makes it the most conventionally negative shape in GI. As with E1, the patent treats the two front negative components as a pair in the control of distortion and high-order spherical aberration rather than assigning a unique correction term to E2 alone.

### E3 — L3 / Element 3 — Biconvex Positive

**nd = 1.78850, νd = 45.68. Glass: Unmatched (nd=1.78850, vd=45.68). Standalone f = +49.743878 mm.**

E3 is the positive rear element of the otherwise negative GI group. The patent states that this positive third component is used to reduce lateral chromatic aberration. Its positive power also partially recovers the strong divergence introduced by E1 and E2 before the light reaches the moving positive groups. Despite E3's positive standalone focal length, the complete GI chain remains negative at -123.945894 mm.

### E4 — L4 / Element 4 — Biconvex Positive

**nd = 1.78850, νd = 45.68. Glass: Unmatched (nd=1.78850, vd=45.68). Standalone f = +67.005266 mm.**

E4 begins GII and is the first lens to translate during focusing. The patent describes L4 as a positive component followed by a negative L5 component. That division places the main positive power of GII ahead of a weak negative cemented correction component. The patent links this positive/negative subdivision of GII to coma correction.

### E5-E6 — L5 Cemented Component

**E5: nd = 1.76500, νd = 46.25. Glass: Q-LASFPH2S coefficient proxy (supplier unspecified; patent 1.76500/46.25). Standalone f = +24.667375 mm.**\
**E6: nd = 1.72342, νd = 37.88. Glass: 723380 BAF/BASF-class (vendor unresolved). Standalone f = -20.812694 mm.**

E5 and E6 share the cemented interface represented by surface 10. The two constituents have strong opposing standalone powers, but their cemented combination is only weakly negative: independent paraxial evaluation of the authored cemented component gives a net EFL of approximately -800.511 mm. That net value is a property of the isolated cemented L5 component, not a measure of either element's in-situ contribution inside GII.

The patent calls L5 a negative component and places it behind positive L4. In the complete authored group, E4 plus L5 produce the positive GII EFL of +62.126489 mm.

### E7-E8 — L6 Cemented Component

**E7: nd = 1.75520, νd = 27.51. Glass: 755275 SF4/TIH4-class (vendor unresolved). Standalone f = -21.204950 mm.**\
**E8: nd = 1.72000, νd = 50.31. Glass: 720503 LAK10/LAC10-class (vendor unresolved). Standalone f = +34.381380 mm.**

E7 and E8 form the cemented L6 component immediately behind the aperture stop. Their Abbe numbers differ substantially: E7 is the higher-dispersion negative constituent and E8 the lower-dispersion positive constituent. The patent explicitly states that this pairing is intended to correct longitudinal chromatic aberration.

The isolated cemented component remains negative, with a verified net EFL of approximately -76.181928 mm. Again, this cemented net is not the same quantity as the in-system power contribution of the two elements inside GIII. The full GIII chain remains positive because L7 and L8 follow L6 and the entire group computes to +46.492900 mm.

### E9 — L7 / Element 9 — Positive Meniscus (1× Asph)

**nd = 1.72000, νd = 50.31. Glass: 720503 LAK10/LAC10-class (vendor unresolved). Standalone f = +209.744340 mm.**

E9 is a weak positive meniscus whose rear surface is the design's only asphere, labeled `16A` in the data file. Its standalone power is modest relative to E10, so its role is not simply to add convergence. The patent states that an asphere outside L6 can reduce meridional and sagittal coma flare as the aperture ratio increases; Example 2 places that correction on the rear surface of E9.

### E10 — L8 / Element 10 — Biconvex Positive

**nd = 1.72000, νd = 50.31. Glass: 720503 LAK10/LAC10-class (vendor unresolved). Standalone f = +44.020599 mm.**

E10 is the final positive element and the strongest positive standalone element in the rear part of GIII after the cemented L6 component. Its positive power helps recover convergence after the negative L6 cemented component and supports the overall positive power of GIII. The rear surface of E10 is followed directly by the modeled image-space distance; no additional cover plate or filter is present in the selected patent example.

## Glass Identification and Selection

The patent specifies only d-line refractive index and Abbe number (`Nd`, `νd`) and names no glass manufacturer. The data file therefore uses conservative coordinate classes, supplier-neutral coefficient proxies, or explicit `Unmatched (...)` annotations rather than assigning speculative proprietary identities. The six-vendor audit compared OHARA, SCHOTT, HOYA, HIKARI, CDGM, and SUMITA catalogs.

| Data-file annotation | nd | νd | Elements | Catalog interpretation |
|---|---:|---:|---|---|
| 623570 SK10-class (vendor unresolved) | 1.62280 | 56.98 | E1 | Coordinate family is well supported; SCHOTT N-SK10 is extremely close, but the patent does not identify a vendor. |
| 617540 SSK1-class (vendor unresolved) | 1.61720 | 54.00 | E2 | SSK1-class coordinates are strongly supported across catalogs; an exact or near-exact vendor row does not establish the patent's supplier. |
| Unmatched (nd=1.78850, vd=45.68) | 1.78850 | 45.68 | E3, E4 | No audited public row reproduces both coordinates closely enough to justify a named glass. |
| Q-LASFPH2S coefficient proxy (supplier unspecified) | 1.76500 | 46.25 | E5 | Compatible HIKARI curve used for tracing; patent coordinates retained and supplier not established. |
| 723380 BAF/BASF-class (vendor unresolved) | 1.72342 | 37.88 | E6 | The 723380 class is supported by several vendors with small coordinate residuals. |
| 755275 SF4/TIH4-class (vendor unresolved) | 1.75520 | 27.51 | E7 | The coordinate family is closely represented in several catalogs, including an exact OHARA coordinate match, but supplier identity is not published. |
| 720503 LAK10/LAC10-class (vendor unresolved) | 1.72000 | 50.31 | E8-E10 | Several vendors cluster closely around this coordinate pair; the class is defensible while the manufacturer remains unresolved. |

No `nC`, `nF`, `ng`, or `dPgF` values are authored for any element. The patent does not publish those quantities, and no specific catalog identity was established strongly enough to import spectral line data from a tentative equivalent. Consequently the model supports Abbe-level chromatic interpretation, but not an APO or anomalous-partial-dispersion claim.

## Focus Mechanism

The patent focus architecture is a two-group rear-focus system. GI is fixed. GII, containing E4-E6, moves toward the object for closer focus, and GIII, containing E7-E10, also moves objectward but faster. For Embodiment 2 the aperture stop lies between GII and GIII and moves with GII.

The patent does **not** publish a numerical close-focus spacing table. The data file therefore labels its close state `CONSTRAINED_RECONSTRUCTION`. The reconstruction uses the embodiment-specific Table-2 speed ratio `R = x3/x2 = 1.43`, the illustrated close-state magnification `β = -0.175`, a fixed image plane, and the published group-motion topology. The resulting modeled travels are 4.904952 mm objectward for GII and 7.014082 mm objectward for GIII.

| Spacing | Infinity | Reconstructed close | Status |
|---|---:|---:|---|
| GI→GII gap (`6`) | 7.887250 mm | 2.982298 mm | Reconstructed from the group-motion constraint |
| Total GII→GIII gap (`d11`) | 11.831050 mm | 9.721920 mm | Reconstructed; includes the inferred stop split |
| r18→image plane | 36.740700 mm | 43.754782 mm | Reconstructed to keep the image plane fixed |

The reconstruction gives an image-plane-to-object distance of 0.308740 m at `β = -0.175`. The production specification is 0.3 m minimum focus; that agreement is supporting correlation evidence, not proof that the exact production close-focus cam follows the modeled patent state.

A source contradiction remains unresolved. Table 2 gives `R = 1.43` for Example 2, while the patent's description of Figs. 7a-7c states `R = 1.15` for the second embodiment at `β = -0.175`. Both branches can be solved and both fall near the production minimum-focus specification. The data file therefore uses the embodiment-specific Table-2 value 1.43 and preserves the Fig. 7 value as a conflicting source statement rather than blending the two.

The stop geometry is also inferred. Table 2 gives only the unsplit `d11` air space and no diaphragm diameter. Fig. 5 places the stop between GII and GIII, visually closer to the rear of GII. The data model places it one-third of the infinity `d11` distance from r11 toward r12, keeping the r11-to-stop separation fixed so the stop moves with GII. Its modeled semi-diameter, 12.684073 mm, is solved so that the entrance pupil reproduces the patent design F-number of 1.45. Neither the axial split nor this physical stop diameter is a patent-published measurement.

## Aspherical Surfaces

The only asphere is the rear surface of E9: patent surface r16*, stored as `16A`. The patent's sag expression uses a spherical base with `A0 = 1/R` and adds a rotationally symmetric polynomial. It does not publish a separate conic parameter. In the project's standard conic convention this corresponds to `K = 0`.

The patent-normalized non-zero coefficients are:

- `A4 = +2.9251e-7`
- `A6 = +3.6733e-11`
- `A8 = -4.6789e-15`

Because the prescription is scaled by `s = 0.35`, each polynomial coefficient is transformed as `A_p,scaled = A_p,patent / s^(p-1)` while `K` remains unchanged. The authored coefficients are therefore:

- `A4 = +6.822390670553938e-6 mm^-3`
- `A6 = +6.993847801511277e-9 mm^-5`
- `A8 = -7.272227436818725e-12 mm^-7`

At the model's inferred 16.0 mm semi-diameter on `16A`, the polynomial contribution relative to the spherical base is +0.533216 mm in the project's sag convention. This value is a model-dependent result at the inferred aperture; the patent does not publish that clear semi-diameter.

The patent describes the purpose of an asphere outside L6 as reducing meridional and sagittal coma flare in a large-aperture design. The data therefore treats the E9 rear asphere as a high-aperture correction surface rather than assigning it a separate first-order power role.

## Chromatic Correction Strategy

The patent's chromatic strategy can be described at the Abbe-number level without asserting apochromatic performance. In GI, the patent identifies positive L3/E3 as a means of reducing lateral chromatic aberration. In GIII, cemented L6 pairs the high-dispersion negative E7 (`νd = 27.51`) with the lower-dispersion positive E8 (`νd = 50.31`) and explicitly assigns that doublet a longitudinal-chromatic-aberration correction role.

That interpretation is limited by the source data. Example 2 supplies `Nd` and `νd` only. Without published line indices, `dPgF`, or a uniquely validated Sellmeier identity for each glass, the prescription does not support claims about secondary-spectrum suppression, anomalous partial dispersion, or APO correction.

## Conditional Expressions

US 4,806,003 gives explicit conditions for the group powers and focusing motion. Independent calculations from the selected Example-2 prescription give the following results:

| Condition | Patent form | Computed Example-2 value | Result |
|---|---|---:|---|
| (1) focus-speed ratio | `1.0 < R < 1.5` | 1.43 | Satisfies |
| (2) GI-GII spacing | `0.12 < L/f < 0.38` | 0.225457 | Satisfies |
| (3) GI power | description: `0.1 < f/(-f1) < 0.25`; claims: upper limit 0.35 | 0.282248 | Fails the description's 0.25 limit; satisfies the claim's 0.35 limit |
| (4) GI/GII power ratio | `1.5 < -f1/f2 < 3.5` | 1.995057 | Satisfies |
| (5) GI/GIII power ratio | `2.1 < -f1/f3 < 5.0` | 2.665910 | Satisfies |

Two of the patent's printed derived values conflict with the prescription. Table 2 prints `-f1/f2 = 3.000`, whereas direct tracing of the selected group definitions gives 1.995057. A restricted check against Example 1 reproduces that example's printed group-power ratios closely, so the Example-2 value 3.000 is treated as an apparent source error rather than substituted into the model.

The patent also prints `Σd = 229.577` for Example 2, while the arithmetic sum of the seventeen individually tabulated spacings is 229.308 normalized units. The model retains the individual spacing entries because they define the sequential prescription and independently recover essentially `f = 100`; the printed sum is preserved only as a source discrepancy.

## Verification Summary

Independent sequential y-ν tracing and ABCD analysis of the final authored TypeScript arrays give an infinity EFL of 34.983445722 mm and a BFL of 36.740699721 mm. The sequential and matrix BFL calculations agree to numerical precision, and the authored rear spacing places the image plane at that paraxial BFL.

The stop placement is not a source measurement, but once the inferred axial location is fixed, solving its semi-diameter against the authored prescription gives an entrance-pupil diameter of 24.126514 mm and a modeled f-number of 1.45. This is why `nominalFno` follows the patent design value rather than the marketed f/1.4 designation.

Surface-by-surface Petzval summation using `φ/(n·n')` gives 0.0035187354 mm^-1 for the scaled model, corresponding to an equivalent signed air-image Petzval radius of approximately -284.193 mm under the project's `-1/P` convention. This is a paraxial curvature diagnostic, not a statement of the final aberrated best-focus surface.

The reconstructed close state preserves the fixed image-plane track and reproduces `β = -0.175` with the specified 1.43 group-motion ratio. The semi-diameters and stop location remain model inferences because the patent publishes neither aperture heights nor a numerical stop split. The original 16.9/15.0 mm r11/r12 boundary overlapped in the close state and triggered a 2.04 mm display trim at infinity. Reducing both boundary semi-diameters to 13.5 mm follows the narrower Fig. 5 stop-adjacent silhouette and leaves 1.192 mm physical clearance at close focus; the edge-thickness, rim-slope, cross-gap, display-trim, and ray-containment checks then pass in both states.

## Sources / References

1. Mukai, Hiromu, and Hisashi Tokumaru. **US 4,806,003**, *Inverted-Telephototype Wide Angle Lens System*. Minolta Camera Kabushiki Kaisha. Filed August 28, 1987; granted February 21, 1989. Example 2, Table 2, Fig. 5, Figs. 6-7, and claims 1-10.
2. Minolta. *Service Manual / Repair Guide: MINOLTA AF 35mm F1.4 (2591-100) / MINOLTA MAXXUM AF 35mm F1.4 (2591-600)*. Manufacturer service documentation consulted for production specifications, focusing-group identification, asphere position, A-mount identity, and flange-back reference.
3. OHARA, SCHOTT, HOYA, HIKARI, CDGM, and SUMITA optical-glass catalogs, as consolidated in the Stage-1 six-vendor glass residual audit. Catalog comparisons are used only to justify conservative class labels or `Unmatched (...)` annotations; they do not establish the patent's glass supplier.
4. `MinoltaAF35mmf14_calculations.json` and `MinoltaAF35mmf14_verify.py`, independent LensVisualizer audit artifacts for paraxial, group-power, focus, Petzval, scaling, stop/pupil, and geometry verification.
