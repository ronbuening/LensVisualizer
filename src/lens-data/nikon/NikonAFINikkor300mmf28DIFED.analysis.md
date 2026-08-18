## Patent Reference and Design Identification

**Patent:** JPH04294310A\
**Application Number:** 特願平3-59980\
**Filed:** 1991-03-25\
**Published:** 1992-10-19\
**Inventor:** Susumu Sato (佐藤 進)\
**Applicant:** Nikon Corporation (株式会社ニコン)\
**Title:** Internal-Focusing Telephoto Lens (内焦望遠レンズ)\
**Embodiment analyzed:** Example 1 (実施例1)

This analysis treats JPH04294310A Example 1 as the fixed production correlation for the **NIKON AF-I NIKKOR 300mm f/2.8 D IF-ED**. The patent itself does not name the commercial lens, so the correlation should not be read as manufacturer confirmation. It is instead supported by convergent timing and optical characteristics.

1. Nikon records that the AF-I Nikkor 300mm f/2.8D IF-ED appeared in September 1992 with a completely renewed optical design and a built-in focusing motor. The selected application was filed in March 1991 and published the following month after that product introduction.
2. Example 1 gives a headline focal length of 294.0 mm, a more precise design value of 293.9647 mm, and `FN = 2.9`. These are close to, but intentionally kept separate from, the production designation of 300mm f/2.8.
3. The patent describes a positive first group, a negative internal-focusing second group, and a positive third group. Example 1 contains 11 glass elements and uses image-side translation of the negative second group for focusing, matching the production lens's IF identity at the architectural level.

The data file therefore keeps both identities visible: the public product is recorded as a 300mm f/2.8 Nikon F-mount lens, while the optical model remains the unscaled Example 1 prescription at the patent's 293.9647 mm / f/2.9 design values. No uniform scaling is applied.

## Optical Architecture

Example 1 is an all-spherical internal-focusing telephoto organized as three functional groups, `G1–G2–G3`, with positive, negative, and positive net power respectively. The final data file contains 11 physical elements in 9 air-separated clusters. This is distinct from the three functional groups: `groupCount: 9` records the physical air-separated clustering, while the diagram annotations preserve the patent's three-group optical organization.

Independent paraxial tracing of the final TypeScript arrays gives an infinity EFL of **293.957373 mm**, only −0.007327 mm from the patent's 293.9647 mm value. The authored infinity image track is **270.766710 mm**, giving `TL/EFL = 0.921109`. The design therefore satisfies the project's telephoto criterion, `TL/EFL < 1`; it is not being called telephoto merely because of its long focal length.

The isolated functional-group EFLs, preserving each group's internal spacings but treating the group as an air-to-air subassembly, are approximately:

| Functional group | Surface span | Isolated EFL | Role in the patent architecture |
|---|---:|---:|---|
| G1 | 1–9 | +150.2174 mm | Front positive collector and primary converging group |
| G2 | 10–14 | −60.1134 mm | Negative internal-focusing group |
| G3 | 15–20 | +117.6861 mm | Rear positive group |

These group EFLs are not additive lens powers and should not be confused with in-situ contribution to the complete system. They are useful only for confirming the patent's positive–negative–positive architecture. The complete system power results from the groups, their separations, and the strong principal-plane displacement characteristic of a telephoto construction.

The patent draws the aperture stop `S` behind G3 but does not publish its numerical axial coordinate or diameter (Fig. 1; ¶0025). The data model therefore inserts the required `STO` by inference rather than treating it as a tabulated patent surface. That modeling choice is discussed under Verification Summary.

## Element-by-Element Analysis

### L11 — Positive Meniscus

**nd = 1.49782, νd = 82.6. Glass: `498826 - high-Abbe crown/ED class (vendor unresolved)`. f = +237.961792 mm.**

L11 is the object-side positive element of G1. Its rear surface is nearly plane on the scale of the system (`R = +9945 mm`), so most of its standalone positive power comes from the strongly convex first surface. The high Abbe number is a source coordinate; the data file does not promote it to a specific vendor glass.

The Example 1 numerical radii make L11 a positive meniscus under the patent's sign convention. This is more specific than the generic description in ¶0023, which calls the corresponding component biconvex; ¶0016 separately states that the image-side curvature sign of L11 may be positive or negative according to correction. The numerical example therefore governs the modeled shape.

Together with L12, L11 establishes the positive front power before the negative L13 and the weak-net-positive L14 cemented pair. Its standalone focal length describes L11 by itself in air, not its effective contribution while embedded in G1.

### L12 — Biconvex Positive

**nd = 1.49782, νd = 82.6. Glass: `498826 - high-Abbe crown/ED class (vendor unresolved)`. f = +190.561415 mm.**

L12 repeats the same high-Abbe glass coordinate as L11 but with a stronger biconvex form. It is the second positive component of G1 and adds substantial converging power before the negative correction supplied by L13.

The repeated use of the same `1.49782 / 82.6` coordinate at L11, L12, and later L31 is an explicit property of the selected patent example. It should not be converted into a claim that all three elements are a particular catalog melt unless a source identifies that melt.

### L13 — Biconcave Negative

**nd = 1.74950, νd = 35.2. Glass: `J-LAF7 (HIKARI catalog correlation; patent vendor unspecified)`. f = −262.763246 mm.**

L13 is the negative element within G1. Its higher index and much lower Abbe number contrast sharply with the two positive high-Abbe elements ahead of it. In first-order terms, it reduces the front group's net power while introducing the opposite dispersion sign required by the patent's multi-glass front group.

The data label records a lanthanum-flint class rather than a named vendor glass. That is deliberately narrower than claiming a specific melt and broader than an optical-performance claim based on partial dispersion, which the patent does not provide.

### L14a + L14b — Cemented Meniscus Pair

**L14a:** nd = 1.69680, νd = 55.6. Glass: `697556 - lanthanum-crown class (vendor unresolved)`. f = −78.104606 mm.

**L14b:** nd = 1.59319, νd = 67.9. Glass: `593679 - PSK/high-Abbe crown class (vendor unresolved)`. f = +71.700928 mm.

L14a and L14b are cemented across surface 8. The individual elements are comparatively strong and opposite in sign, but the complete cemented pair has an isolated EFL of approximately **+1741.2774 mm**. It is therefore a **weak net positive** component even though L14a by itself is negative and L14b by itself is positive.

That distinction matters here: the standalone element powers describe the pieces separated into air, while the +1741 mm value describes the actual cemented pair with the published interface and indices. Neither number alone describes the pair's in-situ action inside G1, where spacing to the preceding elements also affects the group cardinal points.

Surface 8 is the most strongly curved interface in the front group. The final model assigns its semi-diameter from the Stage 2 ray/geometry reconstruction rather than from a patent aperture table; the patent publishes no such table.

### L21a + L21b — Cemented Component of the Moving G2 Group

**L21a:** nd = 1.80384, νd = 33.9. Glass: `E-LAFH2 (HIKARI catalog correlation; patent vendor unspecified)`. f = +100.872040 mm.

**L21b:** nd = 1.58913, νd = 61.0. Glass: `589610 - SK5/BAL35 class (vendor unresolved)`. f = −81.285442 mm.

The L21 cemented pair begins the moving focus group. L21a is a positive meniscus and L21b a biconcave negative element, but their cemented combination is **net negative**, with an isolated EFL of approximately **−430.7162 mm**.

This is another case where the signs of the individual pieces do not predict the sign of the cemented component by simple comparison of their standalone focal lengths. The shared cemented interface at surface 11 changes the combined power. The data file accordingly assigns surface 11 to the downstream L21b element and its refractive index, preserving the physical junction.

L21a's patent coordinate is intentionally retained as `Unmatched`. Current public-glass proximity is insufficient to justify replacing it with a specific vendor name.

### L22 — Biconcave Negative

**nd = 1.67025, νd = 57.5. Glass: `Unmatched (670575; nd=1.67025, vd=57.5)`. f = −70.611234 mm.**

L22 is the second negative component of G2. Its standalone negative power is substantially stronger than the weak net negative power of the L21 cemented pair, and the full isolated G2 subassembly reaches approximately −60.1134 mm EFL after the internal spacing between L21 and L22 is included.

The combination of the L21 cemented pair and L22 forms the complete translating negative group described by the patent. L22's glass coordinate is also retained as `Unmatched`, avoiding a speculative catalog identity.

### L31 — Biconvex Positive

**nd = 1.49782, νd = 82.6. Glass: `498826 - high-Abbe crown/ED class (vendor unresolved)`. f = +98.226770 mm.**

L31 is the first element of fixed G3 and uses the same high-Abbe coordinate as L11 and L12. Its biconvex form gives it considerably stronger standalone power than either front high-Abbe element.

Within the full design, L31 receives the beam after the moving negative group and begins the final positive relay toward the image plane. The patent keeps G3 fixed during the published focus motion.

### L32 — Negative Meniscus

**nd = 1.80458, νd = 25.5. Glass: `805255 - SF6/high-index flint class (vendor unresolved)`. f = −98.530466 mm.**

L32 is the negative member of G3 and has the highest index and lowest Abbe number in the final group. Its standalone focal length is almost equal in magnitude and opposite in sign to L31's, although the two are air separated and should not be treated as a cemented achromat.

The data label records an SF6/high-index-flint class rather than a named catalog glass. No line-index or anomalous-partial-dispersion field is authored for it.

### L33 — Positive Meniscus

**nd = 1.74000, νd = 28.2. Glass: `740282 - SF3/TIH3 class (vendor unresolved)`. f = +118.256490 mm.**

L33 is the final positive element of G3. Together with L31 and L32, it produces an isolated G3 EFL of approximately +117.6861 mm. The complete group remains positive despite the strong negative L32.

The stop is shown by the patent on the image side of this element rather than between G2 and G3. In the authored model, L33 therefore remains the last refractive element before the inferred stop and the normalized rear image spacing.

## Glass Identification and Selection

The final data file preserves the patent's `nd` and `νd` coordinates while keeping vendor attribution conservative. The six-digit-style labels are coordinate/class descriptors, not claims that Nikon used a particular catalog melt. Two coordinates remain explicitly unmatched because no public identity was considered defensible enough for the authored data.

| Data-file glass annotation | nd | νd | Element(s) | Authored status |
|---|---:|---:|---|---|
| `498826 - high-Abbe crown/ED class (vendor unresolved)` | 1.49782 | 82.6 | L11, L12, L31 | Class/code only |
| `J-LAF7 (HIKARI catalog correlation; patent vendor unspecified)` | 1.74950 | 35.2 | L13 | Exact catalog-coordinate correlation; historical vendor unproven |
| `697556 - lanthanum-crown class (vendor unresolved)` | 1.69680 | 55.6 | L14a | Class/code only |
| `593679 - PSK/high-Abbe crown class (vendor unresolved)` | 1.59319 | 67.9 | L14b | Class/code only |
| `E-LAFH2 (HIKARI catalog correlation; patent vendor unspecified)` | 1.80384 | 33.9 | L21a | Exact catalog-coordinate correlation; historical vendor unproven |
| `589610 - SK5/BAL35 class (vendor unresolved)` | 1.58913 | 61.0 | L21b | Class/code only |
| `Unmatched (670575; nd=1.67025, vd=57.5)` | 1.67025 | 57.5 | L22 | Unmatched |
| `805255 - SF6/high-index flint class (vendor unresolved)` | 1.80458 | 25.5 | L32 | Class/code only |
| `740282 - SF3/TIH3 class (vendor unresolved)` | 1.74000 | 28.2 | L33 | Class/code only |

The broad dispersion strategy is visible in the patent coordinates themselves: high-Abbe positive elements are paired across the system with lower-Abbe, higher-index negative or compensating elements. This is a statement about the authored `nd/νd` palette, not a claim of apochromatic correction or anomalous partial dispersion.

The production lens name contains Nikon's `ED` designation, and Nikon's historical account identifies the AF-I model by that product name. The selected patent example, however, publishes no `nC`, `nF`, `ng`, or `dPgF` values, and the final data file intentionally authors none. Catalog-compatible strings allow the runtime to use checked dispersion curves where coordinates support them, but those curves are modeling correlations rather than historical-melt identifications. Consequently the analysis does not infer APO behavior or anomalous partial dispersion from Abbe number alone.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal-focus reconstruction is used. The patent directly publishes the two endpoint gaps around G2, and the final data file transcribes those states.

| State | d9, before G2 | d14, after G2 | Authored S20→image spacing |
|---|---:|---:|---:|
| Infinity | 5.1340 mm | 15.8406 mm | 113.4293098 mm |
| Patent close state, R = 2500 mm | 16.0229 mm | 4.9517 mm | 113.4293098 mm |

As focus moves from infinity toward the published close state, d9 grows by **10.8889 mm** and d14 shrinks by the same amount. Their sum remains **20.9746 mm**, so the motion is a pure imageward translation of G2 rather than a change in its internal geometry. The patent quotes the travel as 10.89 mm and the close-state lateral magnification as `β = −0.1418`. With the final fixed authored image plane, the paraxial close-state magnification is **β = −0.1418187**; solving the rounded prescription for its exact close conjugate instead gives **−0.1418175**. Both reproduce the published value to the source precision.

The 2.5 m value in `closeFocusM` is therefore the selected patent's source-defined object-plane to image/reference-plane distance, not a substituted secondary specification. It should not be silently reinterpreted as a different mechanical reference distance.

Nikon's product history states that the 1992 AF-I lens used a built-in focusing motor. That is manufacturer product metadata rather than a property computed from the prescription. The optical part of the focus mechanism represented here is only the published translation of negative G2.

## Conditional Expressions

The patent gives nine conditions governing the front group, the negative focus group, and selected glass coordinates. The final arrays reproduce the independently evaluable conditions. For the first condition, the numerical table does not tabulate `Φ` directly, but Fig. 2 labels the infinity spherical-aberration bundle `H = 51.0`. Treating that plotted marginal height as a diameter proxy gives `2H/f1 = 0.6790`, closely corroborating the patent's reported `Φ/f1 = 0.678` without redefining the figure label as an exact `Φ` datum.

| Patent condition | Example 1 / data-file check | Result |
|---|---:|---|
| `0.43 < Φ/f1 < 0.75` | Patent 0.678; `2H/f1 = 0.6790` from Fig. 2 | Pass; figure corroboration |
| `0.39 < f1/F < 0.55` | 0.511018 | Pass |
| `0.13 < f22/f21 < 0.35` | 0.163939 | Pass |
| `−1.3 < (Rb + Ra)/(Rb − Ra) < 3.0` | −0.976241 | Pass |
| `R21 < 0` | −9945 mm | Pass |
| `Na < 1.60` | 1.59319 | Pass |
| `νa > 65` | 67.9 | Pass |
| `nb < 1.58` | 1.49782 | Pass |
| `νb > 45` | 82.6 | Pass |

Here `f1` is the isolated EFL of G1; `f21` is the isolated EFL of the L21 cemented component; `f22` is the standalone EFL of L22. This preserves the distinction between the quantities used by the patent's conditions rather than substituting the full G2 focal length for a component focal length.

## Verification Summary

The analysis is based on the final `NikonAFINikkor300mmf28DIFED.data.ts` arrays, not on a restatement of the Stage 1 extraction. Sequential height/reduced-angle tracing and an independent `(y, θ)` ABCD calculation reproduce an infinity EFL of **293.957373 mm**; the two matrix formulations agree to a maximum matrix-element difference of approximately `2.84 × 10⁻14`.

The aperture geometry requires a disclosed modeling inference. Example 1 shows stop `S` behind G3 but gives no numerical stop station or diameter. The authored model places `STO` **14.0 mm** behind surface 20 and uses an inferred stop semi-diameter of **17.142984 mm**. Paraxial imaging of that stop through the front system gives an entrance-pupil semi-diameter of **50.682306 mm**, producing the authored `nominalFno = 2.9` exactly. These stop dimensions are model values; only the patent's `FN = 2.9` is source-published.

The prescription likewise contains no numerical clear semi-diameters. Every `sd` in the final data file is therefore a modeling inference constrained by the patent optical section, the `H = 51.0` infinity aperture reference, marginal/chief-ray envelopes, and geometry checks. In the final model, the minimum computed element edge thickness is **1.0335 mm**, the maximum shared-gap sag-intrusion fraction is **0.6405**, and the minimum checked ray clearance over the defined infinity/close bundles is **0.2769 mm**. These are validation properties of the authored geometry, not patent specifications.

A separate source-plane issue occurs behind surface 20. The patent publishes `Bf = 114.1141 mm` at infinity and `114.1140 mm` at the close state, but the rounded bare 20-surface prescription focuses at **113.4293098 mm** and **113.4289881 mm** respectively. The approximately 0.685 mm offset is too large to attribute to the printed precision: an adversarial perturbation of every published radius, spacing, and index within half of its last printed unit still leaves the largest tested infinity BFL well short of 114.1141 mm. Nikon documents a rear slip-in-filter system for the production AF-I 300mm f/2.8D IF-ED, so an omitted plate is physically plausible, but the selected patent does not publish a plate thickness, index, or station and does not establish that as the cause.

The final data file therefore omits any synthetic plate and fixes the authored image plane at the rounded prescription's infinity bare-air conjugate, **113.4293098 mm** behind surface 20. At the published close state the rounded prescription's exact paraxial conjugate is only **0.0003217 mm** nearer than that fixed plane. The residual is left as source-precision error rather than encoded as a second focus variable, so the only authored focus motion is the patent-published translation of G2.

No patent radius, thickness, index, or Abbe value was corrected in constructing the data file. No scaling is applied. All active Example 1 surfaces are spherical, so there are no aspheric coefficients and no coefficient transformation to disclose. The independently recomputed Petzval sum is `+2.6395546 × 10⁻4 mm⁻1`, using the project convention `φ/(n n′)` surface by surface.

## Sources

- **Primary prescription:** JPH04294310A, *Internal-Focusing Telephoto Lens* (内焦望遠レンズ), Example 1, especially ¶0006–¶0015 and ¶0022–¶0029, Fig. 1, and the Example 1 numerical table.
- **Nikon product history:** Nikon, *NIKKOR — The Thousand and One Nights No.11*. The historical chronology states that the AF-I Nikkor 300mm f/2.8D IF-ED appeared in September 1992 with a completely renewed optical design and a built-in motor. <https://imaging.nikon.com/imaging/information/story/0011/>
- **Rear filter system:** Nikon Support, *Slip-in circular polarizing filters*. The compatibility table includes the AF-I 300mm f/2.8D IF-ED and documents Nikon's rear slip-in filter system for this lens class. <https://www.nikonimgsupport.com/eu/BV_article?articleNo=000048272&lang=en_GB>
- **Glass-coordinate cross-checks:** HIKARI Optical Glass catalog pages for J-FKH1, J-LAF7, J-LAK14, J-PSKH1, J-SK5, and J-SF6; SCHOTT SF3 datasheet. These are used only to test whether the authored class/code labels are coordinate-compatible, not to claim Nikon used those exact vendor melts.
