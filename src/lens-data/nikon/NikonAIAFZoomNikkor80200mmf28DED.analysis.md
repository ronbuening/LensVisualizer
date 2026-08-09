## Patent Reference and Design Identification

**Patent:** US 5,579,171 A

**Application number:** US 08/563,908

**Priority:** March 30, 1993 (JP 5-93816 and JP 5-93817)

**Filed:** November 22, 1995; continuation of US 08/208,857 filed March 11, 1994

**Granted:** November 26, 1996

**Inventors:** Kenzaburo Suzuki; Masahiro Nakatsuji; Keiji Moriyama

**Assignee:** Nikon Corporation

**Title:** *Zoom Lens Equipped with the Image Stabilizing Function*
**Embodiment analyzed:** Example 3 / third embodiment, Figure 5 and Table 4

The prescription is the third embodiment of US 5,579,171 A, selected for correlation with the
NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 D ED. The patent describes this embodiment as a relatively
bright 80-200 mm-class zoom with an F-number of 2.8 and gives two infinity-focus endpoints, 80.94 mm
and 196.00 mm. Its Table 4 contains 16 glass elements in 11 air-separated groups, while Figure 5 shows
the same positive/negative/positive/positive four-unit structure used by the numerical prescription.
The data file retains those patent dimensions without uniform scaling. [1]

The selected production correlation rests on several convergent characteristics rather than on a
manufacturer statement identifying this patent or embodiment:

1. Nikon markets the production lens as an 80-200 mm constant-f/2.8 zoom; the patent endpoints are
   80.94 mm and 196.00 mm at F/2.8. [1][2]
2. Nikon specifies 16 elements in 11 groups, exactly matching the centered Example-3 prescription.
   [2]
3. Nikon specifies three ED-glass elements. The data file contains exactly three elements, L2, L3,
   and L12, at the high-Abbe coordinate `nd = 1.49782`, `νd = 82.52`. Their count coincides with the
   production ED count; this is correlation evidence, not a glass-chemistry or vendor identification. [2]
4. Nikon identifies the production lens as Nikon F bayonet and FX/35mm format; those product facts
   supply the catalog mount and image-format metadata without altering the patent prescription. [2]
5. Nikon's historical account states that the 1996 AI AF Zoom-Nikkor 80-200mm f/2.8D continued the
   1988 optical design with no noteworthy optical changes. That chronology is compatible with the
   patent's 1993 Japanese priorities and 1996 U.S. grant, but it is correlation evidence rather than
   manufacturer confirmation of Example 3. [1][3]

One mechanical distinction is essential. Example 3 is an image-stabilizing proposal in which G3 is
shifted transversely. Nikon's own historical account identifies the 2003 AF-S VR Zoom-Nikkor
70-200mm f/2.8G IF-ED as the later lens in this line that added a vibration-reduction mechanism. The
modeled data therefore represents only the centered Example-3 prescription and does not attribute
VR to the 1996 production 80-200mm lens. [1][3]

Two internal patent discrepancies are preserved rather than silently repaired. Table 1 prints
`ΔY(W) = 2.270` for the third embodiment, although the published relation
`ΔY = (f4/f3)ΔS` and the verified group powers give approximately 0.270; the telephoto-end value is
internally consistent. Separately, the prose definition of the radius in Expression (4) points to
the object-side surface of the image-side-most convex lens in G3, which is surface 16 at
`R = +104.0599 mm`, whereas Table 1 uses `+862.073`, corresponding to surface 14. Neither discrepancy
changes the Table-4 prescription. [1]

## Optical Architecture

Example 3 is a four-unit zoom with isolated unit powers `+ / - / + / +`. In the patent's operating
scheme, G1 and G4 are fixed, G2 is the variator and moves toward image space as focal length
increases, and G3 is the compensator. G3 follows a non-linear axial trajectory to hold the image
plane while the first three units form an afocal zoom converter ahead of the positive G4 relay.
The aperture stop S3 lies within G4. [1]

Independent first-order calculation from the authored TypeScript arrays gives the following isolated
air-to-air unit focal lengths:

| Functional unit | Surfaces | Isolated EFL | Function in Example 3 |
|---|---|---:|---|
| G1 | 1-5 | +123.500000 mm | Fixed front positive unit |
| G2 | 6-13 | -34.146301 mm | Moving negative variator |
| G3 | 14-18 | +86.829301 mm | Moving positive compensator; patent stabilization unit |
| G4 | 19-28 | +112.999999 mm | Fixed positive relay/master unit containing S3 |

The first three units are afocal to source precision at both authored zoom endpoints. The ABCD `C`
term through G1-G3 is about `6.96e-9 mm^-1` at the wide endpoint and `5.86e-9 mm^-1` at the tele
endpoint, consistent with the patent's statement that the light between G3 and G4 remains parallel.
This is a computed property of the centered prescription rather than a separately entered data
field.

The endpoint kinematics follow directly from the published variable gaps. From 80.94 to 196.00 mm,
G2 moves 39.8008 mm toward image space and G3 has a net 15.3567 mm imageward displacement. G4 is
fixed to source precision; its apparent endpoint shift is only -0.0001 mm from printed spacing
rounding. The first-surface-to-image-plane track remains 216.95756 mm at both endpoints. The patent
states that G3 moves non-linearly, but it publishes only the wide and tele positions. The data file
therefore contains no invented intermediate cam point; interpolation between the two endpoint states
is a viewer interpolation, not a reconstructed Nikon cam law. [1]

The patent repeatedly describes this architecture as intended for the photographic telephoto
region. Under the project's stricter geometrical terminology, however, the centered prescription is
not classified as a telephoto package: `TL/EFL` is about 2.680 at the wide endpoint and 1.107 at the
tele endpoint, both greater than unity. It is not retrofocus either, because `BFD/EFL` is about
0.815 and 0.337, respectively, both below unity. These ratios are classification checks, not claims
about Nikon's marketing terminology.

### Power accounting: elements, cemented assemblies, and functional units

Standalone element focal lengths in the data file are calculated with each physical element isolated
in air. They must not be confused with either the net power of a cemented assembly or the behavior of
that assembly inside a larger zoom unit. The five cemented pairs have independently calculated net
focal lengths of:

| Cemented pair | Physical elements | Net EFL in air |
|---|---|---:|
| D1 | L1 + L2 | +274.769741 mm |
| D2 | L4 + L5 | -84.547065 mm |
| D3 | L6 + L7 | -250.473470 mm |
| D4 | L10 + L11 | +311.675735 mm |
| D5 | L13 + L14 | +116.544141 mm |

These values demonstrate why a simple list of the signs of the individual elements is not an adequate
description of the zoom. D1, for example, combines an individually negative front meniscus with a
positive second element yet is net positive. D4 similarly combines strong positive and negative
standalone powers into a much weaker positive cemented pair. The four functional-unit powers above
include these assemblies together with their internal air spacings and therefore describe a third,
distinct level of power accounting.

## Element-by-Element Analysis

### D1 — L1 and L2, front cemented pair in G1

**L1:** `nd = 1.80518`, `νd = 25.43`. Glass: **S-TIH6 catalog equivalent (patent 805254; production supplier not established)**.
Standalone `f = -316.694623 mm`.

**L2:** `nd = 1.49782`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier not established)**.
Standalone `f = +145.367398 mm`.

L1 is a weak negative meniscus cemented directly to the much stronger positive L2. Their combined
D1 power is positive (`f = +274.769741 mm`), so the pair participates in the positive G1 front unit
despite the sign of L1 alone. The strong dispersion contrast between the dense-flint-class L1 and
the high-Abbe L2 is consistent with a front-group achromatizing function. Their catalog names supply
compatible dispersion curves but do not identify the production supplier.

The pair also carries the largest authored semi-diameter in the lens. Those semi-diameters are model
inferences, not dimensions printed by the patent; they are discussed in the verification section
rather than treated as element specifications.

### L3 — positive singlet completing G1

**L3:** `nd = 1.49782`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier not established)**.
Standalone `f = +216.200439 mm`.

L3 is a weak positive meniscus separated from D1 by only 0.2 mm on axis. It uses the same
high-Abbe coordinate as L2 and L12. Together with D1 it brings the complete fixed G1 unit to an
isolated `+123.500000 mm` focal length. Its role in the model is therefore best understood at the G1
level rather than by its relatively weak standalone power.

### D2 — L4 and L5, first cemented pair of the G2 variator

**L4:** `nd = 1.62588`, `νd = 35.70`. Glass: **S-TIM1 catalog equivalent (patent 626357; production supplier not established)**.
Standalone `f = +132.766680 mm`.

**L5:** `nd = 1.56384`, `νd = 60.69`. Glass: **S-BAL41 catalog equivalent (patent 564607; production supplier not established)**.
Standalone `f = -51.530893 mm`.

D2 is net negative (`f = -84.547065 mm`) and forms the front part of G2. The positive standalone
power of L4 does not reverse the sign of the cemented assembly because the biconcave L5 is much
stronger in isolation. G2's axial motion is the principal zoom-magnification motion described by the
patent, so D2 participates in the variator rather than functioning as an independent fixed
corrector. [1]

The index/Abbe contrast across the cemented interface supplies dispersion balancing within a unit
that must remain net negative. The data supports that qualitative description from the stored
`nd`/`νd` values; it does not support a more specific secondary-spectrum claim.

### D3 — L6 and L7, second cemented pair of the G2 variator

**L6:** `nd = 1.51680`, `νd = 64.10`. Glass: **J-BK7A catalog equivalent (patent 517641; production supplier not established)**.
Standalone `f = -56.556908 mm`.

**L7:** `nd = 1.80458`, `νd = 25.50`. Glass: **805255 — dense flint class (unmatched exact public coordinate)**.
Standalone `f = +73.222191 mm`.

The sign pattern reverses that of D2: a negative low-index/high-Abbe element is cemented to a
positive high-index/low-Abbe element. The pair nevertheless remains net negative at
`f = -250.473470 mm`. This weaker net negative power, combined with D2 and L8, produces G2's much
stronger aggregate `-34.146301 mm` power once the complete unit geometry is included.

The tight neighboring air spaces around this pair make its clear aperture one of the limiting
geometrical choices in the authored model. The stored 19.2 mm semi-diameter is therefore an inferred
model aperture, not a patent measurement.

### L8 — rear negative singlet of G2

**L8:** `nd = 1.71300`, `νd = 53.93`. Glass: **LAC8 catalog equivalent (patent 713539; production supplier not established)**.
Standalone `f = -90.634757 mm`.

L8 is a biconcave negative singlet at the rear of the variator. It completes the three-air-group G2
unit and lies immediately ahead of the variable D13 spacing to G3. Because D13 contracts from
26.3473 mm to 1.9032 mm between the two published endpoints, L8 approaches the G3 front singlet
substantially as the lens is zoomed toward the long-focal-length state. [1]

Its relatively high index and intermediate Abbe number distinguish it from both the high-Abbe
negative L6 and the dense-flint positive L7. The catalog-equivalent label carries no vendor attribution for the production lens.

### L9 — front positive singlet of G3

**L9:** `nd = 1.51835`, `νd = 60.23`. Glass: **BALK3 catalog equivalent (patent 518602; production supplier not established)**.
Standalone `f = +121.343398 mm`.

L9 is the front positive singlet of the positive G3 compensator. The patent assigns G3 two roles:
axial compensation of image-plane movement during zooming and transverse displacement for the
proposed image-stabilizing function. In the centered model L9 remains on axis and contributes to the
isolated `+86.829301 mm` G3 power. [1]

L9 is separated by only 0.2 mm from D4. This compact three-element G3 is consistent with the patent's
argument that the stabilizing unit should remain comparatively small and simple. [1]

### D4 — L10 and L11, rear cemented pair of G3

**L10:** `nd = 1.56384`, `νd = 60.69`. Glass: **S-BAL41 catalog equivalent (patent 564607; production supplier not established)**.
Standalone `f = +63.249287 mm`.

**L11:** `nd = 1.75692`, `νd = 31.62`. Glass: **E-LAF11 catalog equivalent (patent 757316; production supplier not established)**.
Standalone `f = -77.420847 mm`.

D4 is a weak net-positive cemented pair (`f = +311.675735 mm`) even though its two isolated elements
have fairly strong opposite powers. The cemented interface is convex toward image space, matching
the G3 construction emphasized by the patent for controlling aberration changes when the unit is
shifted for stabilization. [1]

The patent's Expressions (7) and (8) specifically constrain the refractive-index and Abbe-number
contrast of the convex and concave components of G3. Applied to L9/L10 versus L11, the final data
gives `Δnd = 0.215825` and `Δνd = 28.84`, both inside the published ranges. These conditions establish
a deliberate achromatizing and aberration-balancing glass contrast within G3, but they do not supply
partial-dispersion data and therefore do not justify an apochromatic classification. [1]

### L12 — front positive singlet of G4

**L12:** `nd = 1.49782`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier not established)**.
Standalone `f = +106.888123 mm`.

L12 begins the fixed G4 relay/master unit and is the third element using the data file's
498825 high-Abbe coordinate. The modeled prescription contains three such high-Abbe coordinates,
and that count coincides with Nikon's production specification of three ED-glass elements, one of the
stronger points in the selected production correlation. [2]

The production ED count does not establish which commercial melt or supplier corresponds to L12;
J-FKH1 is used only as the compatible public dispersion curve.

### D5 — L13 and L14, cemented pair ahead of the stop

**L13:** `nd = 1.48749`, `νd = 70.41`. Glass: **N-FK5 catalog equivalent (patent 487704; production supplier not established)**.
Standalone `f = +90.007702 mm`.

**L14:** `nd = 1.80458`, `νd = 25.50`. Glass: **805255 — dense flint class (unmatched exact public coordinate)**.
Standalone `f = -371.182464 mm`.

The D5 cemented pair is net positive (`f = +116.544141 mm`). Its high-Abbe positive L13 is partnered
with a much weaker negative dense-flint-class L14. D5 is followed by 9.4 mm of air to the aperture
stop S3, placing this achromatized positive assembly immediately objectward of the stop inside G4.
[1]

The modest negative standalone power of L14 compared with L13 shows again why the cemented net is the
appropriate quantity for interpreting the assembly. The complete G4 unit has a similar but distinct positive power because it also includes L12, L15, L16,
and their internal separations; D5 alone is not a substitute for the in-situ G4 description.

### L15 — negative relay singlet immediately imageward of S3

**L15:** `nd = 1.74400`, `νd = 45.00`. Glass: **744450 — lanthanum-flint class (unmatched exact public coordinate)**.
Standalone `f = -40.838625 mm`.

L15 is the strongest negative standalone element in the rear part of G4 and sits 2.0 mm behind the
aperture stop. Its location gives it substantial leverage over the converging rear relay while
keeping the physical aperture modest compared with the large front group. The patent publishes S3's
axial location in this portion of G4 but not its clear diameter. [1]

The model therefore separates two facts that would otherwise be easy to conflate: L15's radii and
thickness are direct patent data, whereas both its semi-diameter and the stop semi-diameter are
inferred clear-aperture values.

### L16 — final positive relay element

**L16:** `nd = 1.66755`, `νd = 41.96`. Glass: **J-BASF6 catalog equivalent (patent 668420; production supplier not established)**.
Standalone `f = +89.725388 mm`.

L16 is the final biconvex positive element and is followed by the published back-focus spacing. Its
positive power closes the G4 relay after the strong negative L15. The full G4 unit has an isolated
`+112.999999 mm` focal length, so L16 participates in a net positive rear master group rather than
acting as an isolated field element.

The rear vertex-to-image distance is essentially constant between the two published zoom endpoints:
65.9844 mm in the wide table and 65.9845 mm in the tele table. Independent calculation from the
centered prescription gives 65.984391 mm and 65.984457 mm, respectively. [1]

## Glass Identification and Selection

The patent supplies refractive index and Abbe number but does not name glass manufacturers. A public-catalog
recheck supplies coordinate-compatible dispersion curves for thirteen elements while preserving the authored patent
coordinates and leaving every production supplier unknown. The three 498825 ED positions use Hikari J-FKH1 because
its `1.49782 / 82.57` curve is compatible with the rounded `1.49782 / 82.52` patent rows; this is not a supplier claim.

| Data-file glass annotation | `nd` | `νd` | Elements |
|---|---:|---:|---|
| S-TIH6 catalog equivalent (patent 805254) | 1.80518 | 25.43 | L1 |
| J-FKH1 catalog equivalent (patent 498825) | 1.49782 | 82.52 | L2, L3, L12 |
| S-TIM1 catalog equivalent (patent 626357) | 1.62588 | 35.70 | L4 |
| S-BAL41 catalog equivalent (patent 564607) | 1.56384 | 60.69 | L5, L10 |
| J-BK7A catalog equivalent (patent 517641) | 1.51680 | 64.10 | L6 |
| 805255 — dense flint class (unmatched exact public coordinate) | 1.80458 | 25.50 | L7, L14 |
| LAC8 catalog equivalent (patent 713539) | 1.71300 | 53.93 | L8 |
| BALK3 catalog equivalent (patent 518602) | 1.51835 | 60.23 | L9 |
| E-LAF11 catalog equivalent (patent 757316) | 1.75692 | 31.62 | L11 |
| N-FK5 catalog equivalent (patent 487704) | 1.48749 | 70.41 | L13 |
| 744450 — lanthanum-flint class (unmatched exact public coordinate) | 1.74400 | 45.00 | L15 |
| J-BASF6 catalog equivalent (patent 668420) | 1.66755 | 41.96 | L16 |

The `498825` coordinate is especially significant for the production correlation because it occurs in
exactly three elements and Nikon specifies three ED elements in the production lens. The J-FKH1 curve
is a coordinate-compatible public model, while the patent does not identify the glass chemistry or
supplier; the analysis therefore does not convert the production-count correlation into a material identity. [1][2]

No element carries patent-authored `nC`, `nF`, `ng`, or `dPgF`, and no element is flagged for anomalous
partial dispersion. The compatible catalog curves support wavelength tracing, but they do not by themselves
establish apochromatic performance, production materials, or a specific secondary-spectrum correction.

## Focus Mechanism

Example 3 publishes only infinity-focus zoom states. It gives `Do = infinity` at both 80.94 mm and
196.00 mm and does not provide a finite-object spacing table, a close-focus magnification, or a
uniquely specified focusing group for this embodiment. General patent prose notes that focusing may
be performed by the first or fourth unit in this class of zoom, but that statement is not sufficient
to reconstruct the production focusing motion of Example 3. [1]

The data therefore has focus status **NO_INTERNAL_RECONSTRUCTION**. Every `[d_inf, d_close]` pair in
the four variable gaps is intentionally identical at a given zoom endpoint. The nominal
`closeFocusM = 1.5` records Nikon's production minimum-focus-distance specification only; it is not an
optically traced 1.5 m state and is not used to infer internal movement or magnification. [2]

The absence of a reconstructed finite-focus state also means that the production lens's published
maximum reproduction ratio of 0.24x is not treated as a calculated property of this patent model.
It remains a manufacturer specification. [2]

## Chromatic Correction Strategy

The centered prescription uses a broad spread of d-line index and Abbe coordinates, from the
high-Abbe `498825` elements at `νd = 82.52` to dense-flint-class elements around `nd = 1.80` and
`νd = 25.5`. The most visible pattern is the repeated use of the 498825 coordinate in G1 and G4,
combined with low-Abbe high-index partners in several cemented groups. This arrangement provides the
ordinary achromatizing leverage expected in a fast long-focal-length zoom without requiring the
analysis to infer unreported partial-dispersion behavior.

G3 receives special chromatic treatment in the patent text. Expressions (7) and (8) constrain the
average refractive-index difference between the concave and convex components and the corresponding
Abbe-number difference. For L9/L10 versus L11, the data gives `Δnd = 0.215825` and `Δνd = 28.84`,
inside the patent's stated ranges. The patent explicitly presents these conditions as a route to good
achromatization of the image-stabilizing unit. [1]

That source statement should not be extended into an APO label. The patent lacks line-specific
indices and `dPgF` values, while the coordinate-compatible catalog curves do not prove production
materials or unreported anomalous-partial-dispersion behavior.

## Image Stabilization

The patent's third embodiment makes G3 the image-stabilizing unit. In the proposed mechanism, G3
moves substantially orthogonal to the optical axis while retaining its ordinary axial compensator
motion during zooming. The patent argues that the relatively compact G3 is advantageous for this
purpose because the first three units form an afocal converter and G3 emits a parallel bundle toward
G4. [1]

For the centered Example-3 powers, Expression (1) gives the image displacement from G3 transverse
movement as `ΔY = (f4/f3)ΔS`. Using the verified `f3 = 86.829301 mm` and `f4 = 112.999999 mm`, the
published wide-end `ΔS = 0.207 mm` gives `ΔY = 0.269391 mm`, while the tele-end
`ΔS = 0.502 mm` gives `ΔY = 0.653305 mm`. The tele result agrees with Table 1's 0.653 value; the
wide result is why the visibly printed 2.270 entry is treated as an internal source error rather than
silently transcribed as a design quantity. [1]

The data file does not implement a decentered optical state. It models the centered prescription only.
The optional fixed flare stop discussed by the patent is likewise not included because Example 3 does
not numerically locate it. Only S3, the actual aperture stop, is retained as the single `STO` surface.
[1]

This patent mechanism must not be read as a production feature of the correlated 1996 lens. Nikon's
historical account places VR later in the lineage, with the AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED
released in 2003. [3]

## Conditional Expressions

The first-invention conditions applicable to Example 3 can be re-evaluated from the final centered
data. The values below use the authored TypeScript prescription and the patent's printed displacement
inputs; they are not copied uncritically from Table 1.

| Patent condition | Value from final model | Result / source issue |
|---|---:|---|
| (1) `ΔY = (f4/f3)ΔS` | W 0.269390627; T 0.653304805 | T agrees with 0.653; W conflicts with printed 2.270 |
| (2) `f3 / sqrt(fW fT)` | 0.689359605 | Within `0.5 < value < 1.0` |
| (3) `ΔSmax / f3` | 0.005781458 | Below 0.1 |
| (4) `rt / f3` | 9.928365074 using Table-1 `rt`; 1.198442216 using prose-defined surface 16 | Both within `0.5 < value < 20` |
| (5) `L / fW` | 0.171723711 | Below 0.3 |
| (6) tele `ΔS` predicted from rounded wide input | 0.501235964 mm | Consistent with printed 0.502 mm at source precision |
| (7) `Δnd` in G3 | 0.215825000 | Within `0.1 < value < 0.4` |
| (8) `Δνd` in G3 | 28.840000000 | Within `15 < value < 50` |

Expression (4) deserves separate treatment because the patent is internally inconsistent about which
G3 radius is meant. Table 1's `+862.073` corresponds to surface 14; the prose definition identifies
the object-side surface of the convex element nearest image space, which is surface 16 at
`+104.0599 mm`. Both readings satisfy the inequality, so the contradiction does not require a change
to the prescription. [1]

Expression (6) is limited by the patent's rounded displacement table. Applying the verified focal-
length ratio to the wide value predicts approximately 0.50124 mm rather than exactly 0.502 mm. The
difference is smaller than the precision implied by the printed three-decimal displacement values and
is treated as rounding rather than a conflicting optical state.

## Verification Summary

The final data file has 16 elements, 11 air-separated groups, five cemented doublets, exactly one
`STO`, and no aspherical surfaces. No scaling is applied. The `nd` and `νd` values remain the patent's
d-line coordinates; there is no e-line conversion and no imported line-index data.

Independent sequential height/reduced-angle tracing and ABCD calculation from the final TypeScript
arrays reproduce the two published infinity endpoints:

| State | Calculated EFL | Patent focal length | Calculated BFL | Patent `Bf` |
|---|---:|---:|---:|---:|
| Wide | 80.943976177 mm | 80.94 mm | 65.984390969 mm | 65.9844 mm |
| Tele | 196.000154274 mm | 196.00 mm | 65.984457092 mm | 65.9845 mm |

The centered surface-by-surface Petzval sum, calculated as `phi / (n n')` for every refracting
surface, is `+0.000844817417 mm^-1`. It is identical at the two zoom endpoints because zooming changes
air spaces rather than the surface powers.

### Aperture stop and inferred clear apertures

The axial position of S3 is a patent fact: Figure 5 and the third-embodiment text place the aperture
stop inside G4, and Table 4's otherwise plane surface 24 leaves 9.4 mm from surface 23 to S3 and
2.0 mm from S3 to surface 25. The clear diameter is not published. The data file therefore retains
that axial position but infers a fixed stop semi-diameter of 13.839631 mm from the patent's F/2.8
declaration and the paraxial entrance-pupil geometry. [1]

With that one fixed physical stop, the modeled wide-open f-number is about 2.799999 at the wide
endpoint and 2.800001 at the tele endpoint. The corresponding entrance-pupil semi-diameters are
about 14.454287 mm and 35.000016 mm. These are model results, not source dimensions.

No patent semi-diameter table is published for Example 3. Every surface semi-diameter in the data file
is therefore an author/modeling inference based on the on-axis F/2.8 marginal bundle, 135-format
field bundles, Figure 5 proportions, and geometric edge-thickness, rim-slope, and cross-gap limits. The stored `gapSagFrac = 0.97` is likewise a geometry-model parameter used to preserve
the tight G2 rim clearances; it is not a patent specification.

The model does not add a sensor cover, filter, dummy plane, synthetic cement layer, or mechanically
specified flare-cutter surface. The patent's optional flare stop is omitted because no numerical
position or aperture is supplied for Example 3. No omitted plate requires an air-equivalent rear-
spacing correction in this prescription.

### Focus and zoom state limits

Only the two source-published infinity zoom states are optical states. The framework's nominal
close-focus side duplicates the infinity spacings because there is no internal focus reconstruction.
Consequently no finite-focus EFL, close-focus magnification, breathing, or group travel is claimed.
The product's 1.5 m MFD and 0.24x maximum reproduction ratio remain manufacturer metadata only. [2]

No asphere coefficient transformation is applicable because Example 3 is all-spherical. No uniform scaling is applied,
and no linear scale transformation is applicable because the patent's calculated 80.943976-196.000154 mm range
already corresponds closely to the marketed 80-200 mm lens.

## Sources / References

1. Suzuki, Kenzaburo; Nakatsuji, Masahiro; Moriyama, Keiji. **US 5,579,171 A**, *Zoom Lens Equipped
   with the Image Stabilizing Function*. Nikon Corporation. Granted November 26, 1996. In particular:
   Figure 5; Table 1; Table 4; cols. 1-6 and 14-16.
2. Nikon Inc. **AF Zoom-NIKKOR 80-200mm f/2.8D ED** official product page. Production metadata used
   here includes 80-200 mm, f/2.8, Nikon F bayonet, FX/35mm format, 16 elements / 11 groups, three ED
   elements, nine diaphragm blades, 1.5 m minimum focus distance, and 0.24x maximum reproduction ratio.
   https://www.nikonusa.com/p/af-zoom-nikkor-80-200mm-f28d-ed/1986/overview
3. Nikon Imaging. **NIKKOR — The Thousand and One Nights No. 67**, *AI AF-S Zoom-Nikkor 80-200mm
   f/2.8D IF-ED*. The historical introduction states that the 1996 AI AF Zoom-Nikkor 80-200mm f/2.8D
   continued the 1988 optical design with no noteworthy optical changes and identifies the 2003 AF-S
   VR Zoom-Nikkor 70-200mm f/2.8G IF-ED as the later lens in the lineage equipped with VR.
   https://imaging.nikon.com/imaging/information/story/0067/
