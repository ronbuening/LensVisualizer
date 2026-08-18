## Patent Reference and Design Identification

**Patent:** JPH04238311A (特開平4-238311)\
**Application Number:** 特願平3-6132\
**Filed:** 1991-01-23\
**Published:** 1992-08-26\
**Inventor:** Susumu Sato (佐藤 進)\
**Applicant:** Nikon Corporation\
**Title:** オートフォーカスカメラ用内焦望遠レンズ — *Inner-focus telephoto lens for an autofocus camera*\
**Embodiment analyzed:** Example 5 (実施例5)

The data file transcribes Example 5 of JPH04238311A and treats it, as specified by the job card, as the optical-design correlation for the NIKON AF-I NIKKOR 600mm f/4D IF-ED. The patent itself does not name the retail lens. It describes a positive–negative–positive three-group telephoto in which the negative second group performs focusing, with the first and second groups arranged so that the beam presented to the fixed positive rear group remains approximately afocal during focus [JPH04238311A, ¶0005]. Example 5 is identified as a design with a cemented rear subgroup in G1, a single-element G3, focusing by G2, and fixed filters at the front and rear [JPH04238311A, ¶0020].

The production correlation rests on several independent points rather than on a manufacturer statement that the patent is the production prescription:

1. The computed design focal length is **587.999783 mm**, close to Nikon's marketed **600 mm** designation.
2. The patent aberration plot gives a design aperture of **f/4.11**; Nikon markets the lens as **f/4**.
3. After the patent's fixed plane plates are omitted, the active formula contains **9 elements in 7 air-separated groups**, matching Nikon's specification of 9 elements in 7 groups plus a front dustproof plate.
4. The patent focuses by translation of the internal negative G2 group; Nikon identifies the production lens as an Internal Focusing design.
5. The patent's image height of **21.6 mm** corresponds to a 43.2 mm image diagonal. The computed paraxial full field is **4.207595°**, close to Nikon's marketed **4°10′** picture angle for the 35 mm format.
6. The patent was published on 1992-08-26. Nikon's corporate Camera Chronicle places the AF-I 600 mm release in **September 1992**.

The data file therefore keeps the marketed and design quantities separate: `focalLengthMarketing = 600`, `focalLengthDesign = 587.9997827153087`, `apertureMarketing = 4`, and `apertureDesign = nominalFno = 4.11`. The production mount is normalized to the canonical `nikon-f` taxonomy id, and the covered format is `135-full-frame`.

## Optical Architecture

Example 5 is a **positive–negative–positive inner-focus telephoto**. The active prescription has nine glass elements in seven air-separated groups. The front positive group G1 is compound, the negative G2 group translates for focus, and the positive G3 group remains fixed. The patent's stated objective is to preserve optical performance while reducing total length and the amount of focusing movement [JPH04238311A, p. 1; ¶¶0005–0009].

Independent first-order calculation from the final TypeScript arrays gives an active optical track of **427.344265 mm** and an EFL of **587.999783 mm**, so `TL/EFL = 0.726776`. Under the project definition this is a telephoto design. The Gaussian back focal distance from active surface 18 is **201.824132 mm**, or `BFD/EFL = 0.343238`; the design is therefore not retrofocus.

The computed group powers clarify the division of labor:

| Unit | Construction | Computed EFL |
|---|---|---:|
| G11 | L11 + L12 + L13 | +286.365 mm |
| G12 | cemented L14 + L15 | +1194.684 mm |
| G1 | G11 + G12 in situ | +245.001 mm |
| G2a | cemented L21 + L22 | −175.331 mm |
| G2 | G2a + separated L23 in situ | −85.000 mm |
| G3 | L31 | +204.000 mm |

These are in-situ or cemented-unit powers, not substitutes for the standalone focal lengths of the individual elements. In particular, G12 is only weakly positive as a cemented unit even though its front element L14 is individually negative and its rear element L15 is individually positive. Likewise, the G2 front cemented pair is net negative although L21 by itself is positive.

The source contains two plane plates outside the active lens. The front plate and the rear fixed filter are excluded from the ordinary LensVisualizer prescription in accordance with the data specification. Their translational effects are normalized to air where needed. The rear 2.00 mm plate at `nd = 1.51680`, together with the corrected rear image distance, is folded into the post-stop air-equivalent spacing. The resulting active surface-18-to-image distance is **201.825465 mm**.

The source does not tabulate the aperture-stop coordinate. Figure 9 places stop S between G3 and the rear filter F [JPH04238311A, Fig. 9, p. 10]. The model therefore treats the stop position as an inference from that figure: **22.3 mm after surface 18**. With the patent's f/4.11 design aperture, the inferred physical stop semi-diameter is **21.839919 mm**, corresponding to a computed entrance-pupil diameter of **143.065641 mm**. These dimensions are modeling quantities, not patent measurements.

The patent likewise does not publish numerical semi-diameters. The semi-diameters stored in the data file are inferred geometry constrained by the f/4.11 marginal bundle, off-axis containment, Figure 9 proportions, edge thickness, rim slope, cross-gap clearance, and both authored focus endpoints. They should not be read as a recovered mechanical barrel prescription.

## Element-by-Element Analysis

### L11 — Biconvex Positive

`nd = 1.49782, νd = 82.6.` Glass: **498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match**. Standalone `f = +365.436 mm`.

L11 is the first positive collector in the strongly positive G11 front subgroup. Its high Abbe number places substantial positive power in a low-dispersion material class. The data file records only a class-level identification: the current HIKARI J-FKH1 coordinate match is exact at the published `nd/νd` pair, but the patent does not identify the historical melt or vendor.

L11 operates with L12 and L13 rather than as an isolated objective. The patent's discussion of G1 emphasizes that excessive front-group power would increase spherical-aberration burden and force an undesirable aperture/weight tradeoff [JPH04238311A, ¶¶0007–0009]. The computed G11 EFL of +286.365 mm is therefore the more relevant first-order quantity for the subgroup than L11's standalone focal length.

### L12 — Biconvex Positive

`nd = 1.49782, νd = 82.6.` Glass: **498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match**. Standalone `f = +324.511 mm`.

L12 is the second positive collector in G11 and uses the same high-Abbe coordinate as L11. Together the two positive elements carry most of the front collecting power before the negative L13. Their repeated low-dispersion coordinate creates a large first-order Abbe contrast against L13, but no anomalous-partial-dispersion or apochromatic behavior is asserted because the source publishes no line indices or `dPgF` values.

### L13 — Biconcave Negative

`nd = 1.75692, νd = 31.7.` Glass: **E-LAF11 (HIKARI catalog equivalent; production supplier unspecified)**. Standalone `f = −386.878 mm`.

L13 is the negative member that completes G11. Its higher refractive index and much lower Abbe number oppose the two low-dispersion positive elements ahead of it, providing both negative first-order power and a strong chromatic balancing lever. HIKARI E-LAF11 is index-exact and differs by only `Δνd = −0.109`, so the data uses its checked curve while explicitly leaving the production supplier unspecified.

### L14 — Negative Meniscus

`nd = 1.71300, νd = 54.0.` Glass: **J-LAK8 (HIKARI catalog equivalent; production supplier unspecified)**. Standalone `f = −141.365 mm`.

L14 is the front member of the cemented G12 pair. The patent describes it as a negative meniscus with its convex surface toward the object side, followed by a positive meniscus with its convex surface toward the object side [JPH04238311A, ¶0020]. Its independently computed standalone power is likewise negative.

L14 must be distinguished from G12 as a whole. Cemented to L15, the pair has a computed EFL of **+1194.684 mm**, so G12 is a weak positive contribution to G1 rather than a −141 mm standalone negative element embedded unchanged in the system.

### L15 — Positive Meniscus

`nd = 1.59319, νd = 67.9.` Glass: **J-PSKH1 (HIKARI catalog equivalent; production supplier unspecified)**. Standalone `f = +120.231 mm`.

L15 is the positive rear member of G12 and receives the cemented junction at surface 10. The patent explicitly places refractive-index and Abbe-number conditions on the positive member of this rear G1 subgroup, requiring `Na < 1.60` and `νa > 65` to control aberration in the compact rear portion of G1 [JPH04238311A, ¶¶0012–0013]. The Example-5 values `1.59319 / 67.9` satisfy both conditions.

The present glass annotation remains class-level. Current HIKARI J-PSKH1 reproduces the published coordinate exactly, but the patent does not establish that modern catalog name as the historical production glass.

### L21 — Positive Meniscus

`nd = 1.80518, νd = 25.4.` Glass: **SF6 (SCHOTT catalog equivalent; production supplier unspecified)**. Standalone `f = +151.917 mm`.

L21 is the positive front member of the cemented pair at the head of the translating G2 focus group. Its high index and low Abbe number are paired directly with the negative L22. The cemented pair is not positive overall: its computed EFL is **−175.331 mm**.

Because G2 is the moving group, its system role is set by the net negative group power and by the spacing constraints on either side, not by L21's positive standalone focal length.

### L22 — Biconcave Negative

`nd = 1.71300, νd = 54.0.` Glass: **J-LAK8 (HIKARI catalog equivalent; production supplier unspecified)**. Standalone `f = −80.857 mm`.

L22 is the negative rear member of the G2 cemented pair and receives the cemented junction at surface 13. Its magnitude of negative standalone power exceeds the positive power of L21, giving the cemented pair its net negative sign. The same `713540` class coordinate also appears in L14, but the data does not infer a common historical vendor from that repetition.

### L23 — Biconcave Negative

`nd = 1.69350, νd = 53.8.` Glass: **LAC13 (HOYA catalog equivalent; production supplier unspecified)**. Standalone `f = −172.934 mm`.

L23 is the separated negative element that completes G2. Combined with the front cemented pair and the internal spacings, the moving G2 group has a computed EFL of **−85.000 mm**. This is the quantity that governs its inner-focus behavior in the full system.

The current cross-vendor catalog neighborhood around this coordinate is close but not exact in Abbe number. The final label therefore records a class and leaves the historical melt unresolved rather than selecting a specific modern trade name.

### L31 — Biconvex Positive

`nd = 1.49782, νd = 82.6.` Glass: **498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match**. Standalone and group `f = +204.000 mm`.

L31 is the single fixed positive element forming G3 in Example 5 [JPH04238311A, ¶0020]. Because G3 is a one-element group, its standalone and group focal lengths are the same to the stated calculation precision.

The patent treats both the glass and surface shape of a single-element G3 as design constraints. Example 5 satisfies `Nc < 1.55` and `νc > 50` with `1.49782 / 82.6`, and its two radii satisfy the specified rear-group curvature expression. The rear group receives the approximately afocal beam from G1/G2 and forms the final image [JPH04238311A, ¶¶0005, 0015–0016].

## Glass Identification and Selection

The patent supplies d-line `nd` and `νd` values at approximately **587.6 nm** but no glass trade names [JPH04238311A, ¶0021]. The final data therefore separates coordinate facts from catalog interpretation. Six-digit strings and class names are identification aids; they are not claims that Nikon used the named current catalog glass.

| Stored glass annotation | `nd / νd` | Elements | Identification status |
|---|---:|---|---|
| 498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match | 1.49782 / 82.6 | L11, L12, L31 | Exact current HIKARI coordinate match; historical identity unproven |
| E-LAF11 (HIKARI catalog equivalent; production supplier unspecified) | 1.75692 / 31.7 | L13 | Compatible catalog equivalent; historical identity unproven |
| J-LAK8 (HIKARI catalog equivalent; production supplier unspecified) | 1.71300 / 54.0 | L14, L22 | Compatible catalog equivalent |
| J-PSKH1 (HIKARI catalog equivalent; production supplier unspecified) | 1.59319 / 67.9 | L15 | Exact current HIKARI coordinate match; historical identity unproven |
| SF6 (SCHOTT catalog equivalent; production supplier unspecified) | 1.80518 / 25.4 | L21 | Compatible catalog equivalent |
| LAC13 (HOYA catalog equivalent; production supplier unspecified) | 1.69350 / 53.8 | L23 | Compatible catalog equivalent |

No `nC`, `nF`, `ng`, or `dPgF` values are authored. The source does not publish them, and the class-level glass matches are not sufficient grounds to synthesize line indices from a modern catalog. Consequently, this analysis does not claim apochromatic correction, anomalous partial dispersion, or a specific secondary-spectrum behavior.

## Focus Mechanism

The patent uses **inner focusing by translation of the negative G2 group**. G1 and G3 remain fixed while the air gap after G1 (`d11`) increases and the air gap after G2 (`d16`) decreases by the same amount. The sum `d11 + d16` remains **25.0888 mm**, so the motion is a single degree of freedom.

The source publishes an infinity state and a finite-conjugate state at `β = −0.13`:

| State | `d11` | `d16` | G2 imageward travel |
|---|---:|---:|---:|
| Infinity | 7.2137 mm | 17.8751 mm | 0 mm |
| Patent `β = −0.13` | 20.4845 mm | 4.6043 mm | 13.2708 mm |
| Modeled Nikon 6.0 m endpoint | 18.470014825 mm | 6.618785175 mm | 11.256314825 mm |

The UI close-focus endpoint is a **CONSTRAINED_RECONSTRUCTION**, not a patent-published row. Nikon's production specification gives a 6.0 m minimum distance; the reconstruction treats that production focus distance as image-plane-referenced, while the patent's finite row uses an object distance referenced to the first source surface. The data solves one scalar—the G2 translation—while preserving the patent mechanism and the invariant adjacent-gap sum. The resulting paraxial close-state magnification is **β = −0.110267509**, approximately **1:9.069**.

The patent's own `β = −0.13` state remains a separate audit state and is not substituted for the production 6 m endpoint. With the corrected rear normalization, the authored arrays reproduce that patent state with `β = −0.130001114` and an object-to-image matrix B residual of about **−0.003403 mm**.

The focus table contains a direct source error in `d20`. It prints **93.3069 mm**, while the static Example-5 prescription gives **135.31 mm**. Independent finite-conjugate tracing requires **135.306458 mm**, making **135.3069 mm** the source-precision correction used for normalization. The raw 93.3069 mm value does not form the published image. This correction is kept explicit rather than silently incorporated.

## Chromatic Correction Strategy

At the level supported by the patent, the design distributes unusually high-Abbe positive glass through the front and rear positive groups while using lower-Abbe negative and dense-flint members for balancing. L11, L12, and L31 share `νd = 82.6`; L13 falls to `νd = 31.7`, and G2 includes the `νd = 25.4` L21 element. These contrasts provide strong first-order chromatic degrees of freedom without requiring a large number of elements.

The G12 pair adds another controlled index/dispersion combination. The patent explicitly constrains the positive L15 member to `n < 1.60` and `ν > 65`, while the single-element G3 is constrained to `n < 1.55` and `ν > 50` [JPH04238311A, ¶¶0012–0016]. Those source conditions support a discussion of Abbe-number balancing, but they do not establish anomalous partial dispersion. The production lens's ED designation is a manufacturer product identity; it is not used here to promote the class-level catalog matches into exact glass identities.

## Conditional Expressions

The patent gives explicit conditions intended to balance compactness, focus travel, spherical aberration, coma, and glass selection [JPH04238311A, claims 1–7; ¶¶0007–0016]. Example 5 evaluates as follows:

| Patent condition | Example-5 evaluation | Status |
|---|---:|---|
| `0.43 < Φ/f1 < 0.75` | published ratio 0.594 | Pass as published; `Φ` itself is not independently recoverable |
| `0.39 < f1/F < 0.55` | 0.416668683 | Pass |
| `0 < R1 + 0.9R2` | 49.1636 mm | Pass |
| `Na < 1.60` | 1.59319 | Pass |
| `65 < νa` | 67.9 | Pass |
| cemented-G3 `Nb/νb` branch | not used in Example 5 | Not applicable |
| `Nc < 1.55` | 1.49782 | Pass |
| `50 < νc` | 82.6 | Pass |
| `0.68 < L/F < 0.93` | 0.738479355 | Pass |

The Example-5 scalar block also prints `f1 = 197.75` and `Φ = 109.8`, but those values are inconsistent with the same example's published `f1/F = 0.417` result and repeat values from the preceding example. Independent calculation gives **G1 EFL = 245.001095 mm**, for `f1/F = 0.416668683`, reproducing the Example-5 condition line. The printed `f1` and `Φ` are therefore treated as stale copy-through values. The published ratio `Φ/f1 = 0.594` is retained, but no numerical `Φ` is promoted to source fact because Example 5 supplies no independent clear-aperture diameter.

## Verification Summary

The final data arrays reproduce the patent's first-order design without a dimensional scale factor. **No scaling is applied (`s = 1`)**. Example 5 is entirely spherical, so there are no conic constants or polynomial asphere coefficients and no asphere-coefficient scaling transformation is applicable.

Independent sequential height/reduced-angle tracing and an ABCD calculation applied directly to the authored TypeScript arrays agree to numerical precision. The main first-order results are:

| Quantity | Verified value |
|---|---:|
| Design EFL | 587.999782715 mm |
| Residual versus patent `F = 588.0001 mm` | −0.000317285 mm |
| Active track / EFL | 0.726776230 |
| Paraxial full field at `Y = 21.6 mm` | 4.207595° |
| Modeled entrance-pupil diameter | 143.065641 mm |
| Modeled wide-open f-number | 4.110000 |
| G1 EFL | +245.001095 mm |
| G2 EFL | −85.000170 mm |
| G3 EFL | +204.000152 mm |
| Petzval sum | −0.000548404159 mm⁻¹ |
| Reciprocal Petzval radius | −1823.472677 mm |

The model's inferred semi-diameters also satisfy the independent geometry checks used during data construction. The minimum computed edge thickness is **0.382907 mm**, the maximum spherical rim-slope angle is **51.1264°**, and the tightest cross-gap case remains within the prescribed clearance at both authored focus endpoints. These results validate the internal consistency of the stored geometry; they do not convert the inferred semi-diameters into patent-published mechanical dimensions.

The source corrections and modeling inferences that materially affect the final prescription are therefore limited and explicit: the corrected `d20`, air-equivalent removal of the two fixed plane plates, the figure-derived stop position and aperture, the inferred semi-diameters, and the constrained 6 m G2 focus endpoint. None changes the selected patent, embodiment, or active powered-surface prescription.

## Sources and References

- Japan Patent Office, **JPH04238311A / 特開平4-238311**, *オートフォーカスカメラ用内焦望遠レンズ*, published 1992-08-26. Example 5 is the numerical source; see especially pp. 1–4, 6–7, and Fig. 9 on p. 10.
- Nikon, **AF-I Nikkor ED 600mm f/4 D IF Instruction Manual** — production identity, 600 mm f/4 specification, 9 elements in 7 groups plus front dustproof plate, 4°10′ picture angle, 6 m distance scale, Nikon bayonet mount, and 39 mm slip-in filter: [Nikon archived manual](https://www.nikonusa.com/pdf/manuals/archive/AF-I%20Nikkor%20ED%20600mm%20f-4%20D%20IF.pdf).
- Nikon, **Camera Chronicle — Debut of Nikon F4** — contemporary-system context and September 1992 introduction of the AF-I 600 mm: [Nikon Imaging](https://imaging.nikon.com/imaging/information/chronicle/history-f4/).
- HIKARI, current optical-glass catalog — coordinate checks for J-FKH1 and J-PSKH1: [HIKARI optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/).
- Current optical-glass catalog/database sources from OHARA, HOYA, SCHOTT, CDGM, and SUMITA were consulted alongside HIKARI for coordinate matching and mismatch rejection. These current-catalog equivalents do not establish historical Nikon melt identities.
