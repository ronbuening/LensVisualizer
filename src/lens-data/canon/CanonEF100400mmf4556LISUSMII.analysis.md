# CANON EF 100-400mm f/4.5-5.6 L IS II USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2015/0146044 A1
**Application Number:** US 14/527,573
**Priority:** November 22, 2013 (JP 2013-241733)
**Filed:** October 29, 2014
**Published:** May 28, 2015
**Inventor:** Shigenobu Sugita
**Applicant:** Canon Inc. (Canon Kabushiki Kaisha)
**Title:** *Zoom Lens and Image Pickup Apparatus Including the Same*

**Embodiment analyzed:** Example 2 / Numerical Example 2

The prescription is the unscaled Numerical Example 2 of US 2015/0146044 A1. The patent describes Example 2 as a
six-unit zoom with a positive-negative-positive-negative-positive-negative power sequence, a zoom ratio of 3.78, and
published infinity-focus stations at 102.79, 199.97, and 389.03 mm with f-numbers of 4.63, 4.94, and 5.85
(¶0037, ¶0079, ¶0092). The data file retains those design stations rather than forcing them to the marketed 100-400 mm
endpoints.

The project-selected correlation is the Canon EF 100-400mm f/4.5-5.6 L IS II USM. It is treated as the fixed production
correlation for this prescription, but not as a manufacturer-confirmed statement that Numerical Example 2 is the final
production formula. The convergent evidence is:

1. Canon specifies the production lens as 100-400 mm f/4.5-5.6 with 21 elements in 16 groups; Numerical Example 2 also
   resolves to 21 elements and 16 air-separated groups.
2. The design endpoints, 102.79 and 389.03 mm at f/4.63 and f/5.85, lie close to the marketed 100 and 400 mm at
   f/4.5-5.6, but the endpoint ratios do not support a uniform scale transform.
3. The prescription contains two extremely low-dispersion coordinate pairs, E03 at nd = 1.43875, νd = 94.9 and E09 at
   nd = 1.43387, νd = 95.1. Canon identifies one fluorite and one Super UD element in the production lens. The mapping
   between those product materials and individual patent elements remains an inference, not a patent statement.
4. The patent states that Example 2 can focus to 1.0 m measured from the image plane (¶0036, ¶0079). Canon specifies a
   0.98 m production closest focusing distance and 0.31× maximum magnification at 400 mm. A paraxial conjugacy
   diagnostic using the patent's published tele-end focus travel gave |m| ≈ 0.3058; this supports the correlation but
   is not used as a modeled finite-focus state.
5. The patent priority date, November 2013, precedes Canon's December 2014 market introduction.

Manufacturer and design quantities are kept separate throughout. Canon's public product specification supplies the EF
mount, marketed 100-400 mm f/4.5-5.6 range, 21/16 construction, nine-blade circular diaphragm, 0.98 m closest focus,
0.31× maximum magnification at 400 mm, inner focusing with USM, and image stabilization. The exact prescription,
modeled focal lengths, unit powers, stop geometry, and zoom spacings come from Numerical Example 2 and independent
calculation.

The patent's rendered Numerical Example 2 table on publication page 8 is the numerical source. The machine-parsed text
for that page drops several leading digits; the data follows the rendered values, including 1.62299, 1.65412, 1.43875,
1.43387, and 1.90366. These are OCR corrections only. No substantive patent value is silently changed. Likewise, the
rounded telephoto spacings sum to 311.72 mm although the patent separately prints 311.71 mm total lens length; both are
retained as source-precision quantities.

No uniform scaling is applied. There are no aspherical surfaces, no sensor-cover or filter plate in the modeled
prescription, and no inactive dummy or mechanical plane. The patent explicitly publishes the aperture stop and effective
diameters, so neither stop position nor semi-diameter is inferred.

## Optical Architecture

The design is a six-unit positive-lead zoom. Its functional power sequence is L1 (+), L2 (-), L3 (+), L4 (-), L5 (+),
L6 (-). Independent thick-unit calculations of the prescription reproduce the patent unit table: L1 = +194.144 mm,
L2 = -55.244 mm, L3 = +78.731 mm, L4 = -202.633 mm, L5 = +43.668 mm, and L6 = -45.805 mm. These are complete unit
powers in air, distinct from the standalone powers stored for individual elements and from each unit's in-situ effect
inside the zoom.

The patent states that L2 and L5 remain fixed during zooming. From wide to tele, L1, L3, and L6 move toward the object,
while L4 moves toward the image (¶0074, ¶0079). Positions recomputed from the modeled spacings, referenced to
the fixed first surface of L2, are:

| Unit | Wide (mm) | Intermediate (mm) | Tele (mm) | Wide→tele (mm) | Interpretation |
|---|---:|---:|---:|---:|---|
| L1 | -22.18 | -73.68 | -99.18 | -77.00 | objectward |
| L2 | 0.00 | 0.00 | 0.00 | 0.00 | fixed |
| L3 | 55.94 | 42.48 | 19.59 | -36.35 | objectward |
| L4 | 81.76 | 89.34 | 93.79 | +12.03 | imageward |
| L5 | 103.55 | 103.55 | 103.56 | +0.01 | fixed within source rounding |
| L6 | 126.53 | 123.46 | 117.91 | -8.62 | objectward |

None of the three published zoom stations demonstrates a movement reversal. The 0.01 mm L5 scatter is the accumulated
rounding of tabulated spacings, not evidence of a real L5 zoom stroke.

L1 is the large positive front collector. L2 supplies the principal negative variator action and contains two cemented
pairs plus a negative singlet. L3 is a positive relay containing the lowest-index, highest-Abbe element in the model and
a weak positive cemented pair. The aperture stop lies between L3 and L4. L4 is itself a cemented negative unit and is
also the patent's auxiliary floating unit during close focus. L5 is the compact positive unit immediately before the
focus unit. L6 is the final negative focus unit and contains the patent-specified negative-positive-negative-positive
four-lens sequence.

The aperture stop is patent surface 20, represented as `STO`. Its published 28.41 mm effective diameter is treated as a
clear-envelope diameter, not as a fixed blade opening across the zoom. Back-solving from the modeled entrance pupil and
the patent f-numbers requires stop diameters of 28.243, 28.214, and 26.261 mm at the wide, intermediate, and telephoto
stations respectively, all inside the 28.41 mm source envelope. This is why the data uses the state-specific modeled
f-numbers rather than forcing the source effective-diameter row to be the hard iris diameter.

Under the project's geometric classification, only the telephoto endpoint is a strict telephoto configuration:
TL/EFL = 0.801 at tele, compared with 2.284 at wide and 1.431 at the intermediate station. No state is retrofocus because
BFD never exceeds EFL.

## Element-by-Element Analysis

The `fl` values below are standalone thick-element focal lengths: each physical element
is isolated in air while its own radii, center thickness, and d-line index are preserved. They must not be confused with
the net power of a cemented pair or with the effective power of a functional zoom unit in situ.

### E01 — Positive Meniscus

**nd = 1.62299, νd = 58.2. Glass: 623582 crown class (vendor unresolved). Standalone f = +224.575110 mm.**

E01 is the first positive member of L1. Its positive meniscus form and relatively moderate dispersion make it part of the
front unit's main collecting power. In the model, its role is architectural rather than independently attributable to a
specific aberration term: the patent describes L1 by unit power and zoom motion, not by a separate claim for E01.

### E02 — Negative Meniscus

**nd = 1.65412, νd = 39.7. Glass: 654397 KZFS/NBH-class flint (vendor unresolved). Standalone f = -178.541705 mm.**

E02 introduces negative power between the two positive members of L1. Its lower νd than E01 and E03 makes it the
higher-dispersion partner in the front triplet-like sequence, providing chromatic balancing leverage within L1. The
`KZFS/NBH-class` wording is a coordinate-class annotation; because the data has no nC, nF, ng, or
dPgF for this element, no anomalous-partial-dispersion performance claim is made from that label alone.

### E03 — Positive Meniscus

**nd = 1.43875, νd = 94.9. Glass: 439950 ultra-low-dispersion crown; S-FPL53-class (vendor unresolved). Standalone f = +157.805857 mm.**

E03 completes the positive L1 unit with an exceptionally high Abbe number. The combination of positive power and very
low d-line dispersion gives L1 a strong first-order means of limiting longitudinal color while retaining net positive
power. The S-FPL53 reference is a class-level coordinate match, not a source-proven vendor identity and not a basis for
an APO claim.

### E04 — Biconvex Positive, cemented pair D1 front member

**nd = 1.59551, νd = 39.2. Glass: 596392 flint class (vendor unresolved). Standalone f = +107.227216 mm.**

E04 is cemented directly to E05 at source surface 8. Although E04 is positive in isolation, the D1 cemented pair is only
weakly negative: the independently computed D1 EFL is -638.420485 mm. The distinction matters because the shared
interface and the E05 power largely cancel E04's isolated positive contribution.

### E05 — Biconcave Negative, cemented pair D1 rear member

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum flint class (vendor unresolved). Standalone f = -90.137765 mm.**

E05 supplies the dominant negative isolated power in D1. Its high index permits substantial negative curvature in a
compact thickness. The complete D1 pair remains a weak negative component of the much stronger negative L2 unit, so the
-90.138 mm standalone value should not be read as the pair or unit focal length.

### E06 — Negative Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum flint class (vendor unresolved). Standalone f = -115.210567 mm.**

E06 is an air-spaced negative singlet between D1 and D2. It reinforces L2's negative power without sharing a cemented
interface. In combination with D1 and D2 it helps produce the verified L2 unit focal length of -55.244 mm.

### E07 — Biconcave Negative, cemented pair D2 front member

**nd = 1.60311, νd = 60.6. Glass: 603607 crown class (vendor unresolved). Standalone f = -58.610704 mm.**

E07 is the strong negative front member of D2. It is cemented to the high-index E08 at source surface 13. Its relatively
high νd compared with E08 creates a large dispersion contrast across the cemented pair while the curvatures retain net
negative power.

### E08 — Positive Meniscus, cemented pair D2 rear member

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint class (vendor unresolved). Standalone f = +108.022317 mm.**

E08 is positive in isolation but uses the highest-dispersion material class in the first half of the system. The complete
D2 pair has a computed EFL of -128.981682 mm, so E08 moderates rather than reverses the negative power introduced by E07.
This pair, D1, and E06 together form the verified -55.244 mm L2 variator unit.

### E09 — Biconvex Positive

**nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite coefficient proxy (production-correlation inference; patent material unnamed). Standalone f = +99.179306 mm.**

E09 is the first element of positive unit L3 and has the highest νd in the prescription. Its `1.43387 / 95.1` coordinate
matches the catalog CaF2 model closely, and Canon states that the production lens contains one fluorite element, but the
selected patent does not name the material. The data therefore uses CaF2 as a qualified coefficient proxy and records the
fluorite classification as a production-correlation inference rather than a patent material identity.

### E10 — Biconvex Positive, cemented pair D3 front member

**nd = 1.51742, νd = 52.4. Glass: 517524 class; S-NSL36 is the closest public coordinate match. Standalone f = +73.559486 mm.**

E10 begins the second component of L3 and is cemented to E11. Its isolated positive power is much stronger than the net
power of D3 because E11 supplies opposing negative power at the shared interface and rear surface.

### E11 — Negative Meniscus, cemented pair D3 rear member

**nd = 1.90366, νd = 31.3. Glass: 904313 high-index lanthanum-flint class (vendor unresolved). Standalone f = -88.892217 mm.**

E11 is the high-index negative partner in D3. The complete cemented pair is weakly positive, with a computed EFL of
+391.678726 mm. Together with E09, D3 produces the verified +78.731 mm L3 unit. The large index and dispersion contrast
between E10 and E11 gives the pair correction freedom without requiring it to carry most of L3's net positive power.

### E12 — Biconcave Negative, cemented pair D4 front member

**nd = 1.59270, νd = 35.3. Glass: 593353 flint class (vendor unresolved). Standalone f = -40.972573 mm.**

E12 is the strong negative front member of the two-element L4 unit. L4 is positioned immediately behind the stop and is
both a zoom-moving unit and the auxiliary floating unit during close focus. The patent attributes the auxiliary L4
motion primarily to correction of focus-induced field-curvature variation at the wide-angle end (¶0075, ¶0079).

### E13 — Biconvex Positive, cemented pair D4 rear member

**nd = 1.78472, νd = 25.7. Glass: 785257 dense-flint class (vendor unresolved). Standalone f = +52.351749 mm.**

E13 opposes E12 with strong isolated positive power but lower νd. Because D4 contains only these two cemented elements,
its cemented-pair EFL and functional-unit EFL are the same verified value, -202.633086 mm. The pair is therefore only
moderately negative in net power despite the much stronger isolated powers of its constituents.

### E14 — Positive Meniscus

**nd = 1.76200, νd = 40.1. Glass: 762401 lanthanum-flint class (OHARA S-LAM55 / HIKARI J-LAF05 coordinate). Standalone f = +97.274259 mm.**

E14 is the first singlet of positive unit L5. The glass annotation records a shared catalog coordinate rather than a
resolved manufacturer identity. Its positive power begins the compact unit that remains essentially fixed during zooming.

### E15 — Biconvex Positive, cemented pair D5 front member

**nd = 1.48749, νd = 70.2. Glass: 487702 low-index crown; S-FSL5-class (vendor unresolved). Standalone f = +52.534222 mm.**

E15 is a low-dispersion positive member cemented to E16. Its relatively high νd contrasts strongly with the dense-flint
rear partner. The pair is weakly positive compared with either element's isolated power.

### E16 — Negative Meniscus, cemented pair D5 rear member

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint class (vendor unresolved). Standalone f = -58.962792 mm.**

E16 supplies the negative, high-dispersion side of D5. The complete pair has a computed EFL of +385.102278 mm, so its
positive and negative powers largely cancel. This is a useful example of why standalone element power cannot be used as a
proxy for cemented-group behavior.

### E17 — Positive Meniscus

**nd = 1.72916, νd = 54.7. Glass: 729547 lanthanum-crown class (vendor unresolved). Standalone f = +94.972406 mm.**

E17 is the rear singlet of L5. Together with E14 and weakly positive D5 it produces the verified +43.668 mm L5 unit. The
The 729547 coordinate matches OHARA S-LAL18 (nd = 1.72916, νd = 54.68) in the current catalog. Because the patent
does not name a glass vendor, the data retains only the vendor-neutral coordinate class.

### E18 — Negative Meniscus

**nd = 1.88300, νd = 40.8. Glass: 883408 high-index lanthanum-flint class (vendor unresolved). Standalone f = -46.266812 mm.**

E18 begins the final L6 focus unit with negative power. The patent specifically requires the focus unit to contain, in
order, negative, positive, negative, and positive lenses so that useful focus sensitivity can coexist with controlled
spherical-aberration variation (¶0051-0056, ¶0076). E18 is the first member of that sequence.

### E19 — Positive Meniscus

**nd = 1.80518, νd = 25.4. Glass: 805254/805255 dense-flint class (vendor unresolved). Standalone f = +75.394271 mm.**

E19 is the second, positive member of L6. Its high index and low νd provide a strong counterterm to the negative front
member while preserving the alternating power structure required by the patent. The patent's rationale applies to the
four-lens unit as a whole rather than assigning a separate aberration function to E19.

### E20 — Biconcave Negative

**nd = 1.72916, νd = 54.7. Glass: 729547 lanthanum-crown class (vendor unresolved). Standalone f = -31.404691 mm.**

E20 is the strongest negative standalone element in L6 and the third member of the required alternating sequence. Its
position ahead of the final positive E21 helps place the L6 front principal point toward the object side; the independently
computed L6 front principal point is 1.993 mm objectward of its first surface, reproducing the patent unit table and the
quantity used in conditional expression (2).

### E21 — Biconvex Positive

**nd = 1.65412, νd = 39.7. Glass: 654397 KZFS/NBH-class flint (vendor unresolved). Standalone f = +65.132917 mm.**

E21 closes L6 with positive power. In combination with E18-E20 it leaves the complete focus unit negative, with verified
EFL -45.805433 mm. As with E02, the `KZFS/NBH-class` label is a coordinate-class description only; no anomalous-partial-
dispersion behavior is asserted without explicit line-index or dPgF data.

## Glass Identification and Selection

Numerical Example 2 publishes only d-line refractive index and Abbe number; it does not identify glass manufacturers or
publish per-element nC, nF, ng, PgF, or dPgF. The data therefore uses vendor-neutral six-digit coordinate classes,
class-level catalog hints, and qualified coefficient proxies where the public coordinate match is compatible. These
strings are material annotations, not proof that Canon purchased any named vendor glass for the production lens.

| Elements | nd | νd | Data-file glass annotation |
|---|---:|---:|---|
| E01 | 1.62299 | 58.2 | 623582 crown class (vendor unresolved) |
| E02, E21 | 1.65412 | 39.7 | 654397 KZFS/NBH-class flint (vendor unresolved) |
| E03 | 1.43875 | 94.9 | 439950 ultra-low-dispersion crown; S-FPL53-class (vendor unresolved) |
| E04 | 1.59551 | 39.2 | 596392 flint class (vendor unresolved) |
| E05, E06 | 1.77250 | 49.6 | 773496 lanthanum flint class (vendor unresolved) |
| E07 | 1.60311 | 60.6 | 603607 crown class (vendor unresolved) |
| E08, E16 | 1.84666 | 23.8 | 847238 dense-flint class (vendor unresolved) |
| E09 | 1.43387 | 95.1 | CaF2 fluorite coefficient proxy; production-correlation inference, patent material unnamed |
| E10 | 1.51742 | 52.4 | 517524 class; S-NSL36 is the closest public coordinate match |
| E11 | 1.90366 | 31.3 | 904313 high-index lanthanum-flint class (vendor unresolved) |
| E12 | 1.59270 | 35.3 | 593353 flint class (vendor unresolved) |
| E13 | 1.78472 | 25.7 | 785257 dense-flint class (vendor unresolved) |
| E14 | 1.76200 | 40.1 | 762401 lanthanum-flint class (OHARA S-LAM55 / HIKARI J-LAF05 coordinate) |
| E15 | 1.48749 | 70.2 | 487702 low-index crown; S-FSL5-class (vendor unresolved) |
| E17, E20 | 1.72916 | 54.7 | 729547 lanthanum-crown class (vendor unresolved) |
| E18 | 1.88300 | 40.8 | 883408 high-index lanthanum-flint class (vendor unresolved) |
| E19 | 1.80518 | 25.4 | 805254/805255 dense-flint class (vendor unresolved) |

The palette spans very-low-dispersion positive materials and high-index, low-Abbe partners. That spread is consistent
with a design in which chromatic correction is distributed across several zoom units rather than delegated to one
cemented achromat. The data supports this first-order statement through nd and νd only. It does not support an APO label,
nor does it support claims about anomalous partial dispersion or secondary-spectrum correction for any particular glass.

The production lens is a separate source fact: Canon identifies one fluorite element and one Super UD element. The patent
coordinate pattern is consistent with those two special low-dispersion elements at E03 and E09. The data encodes these
as inferred diagram classifications and uses a catalog CaF2 curve for E09, while retaining the caveat that the selected
patent does not publish the exact production-material mapping.

## Focus Mechanism

The patent uses rear/internal focusing centered on L6, with auxiliary floating motion of L4. For Example 2, the movement
conditions are stated to be the same as Example 1 (¶0079): from infinity toward close focus, L6 moves toward the image
side for the main focus action, while L4 moves slightly toward the object side. The patent explains that the L4 auxiliary
movement chiefly corrects focus-induced field-curvature variation at the wide-angle end, while L6 provides the main focus
sensitivity (¶0075-0077).

The data file intentionally has `NO_INTERNAL_RECONSTRUCTION` status. The patent publishes two L6 travel constraints at the
telephoto end—16.753 mm at the 1,000 mm image-plane-referenced object distance and 9.090 mm at an object distance of
5 fT—but it does not publish the corresponding L4 travel magnitude or a complete set of finite-focus air spacings. A
unique two-unit focus model therefore cannot be recovered from the source.

Accordingly, every close-focus member of the `var` arrays repeats its infinity value. The production 0.98 m MFD
is stored as product metadata (`closeFocusM`) but does not move any internal surface in LensVisualizer. Any L4 displacement obtained by imposing paraxial conjugacy would be a diagnostic solution rather than a published focus
state, so it is excluded from the model.

This distinction also resolves the reference-plane issue. The patent defines object distance from the image plane
(¶0036), whereas Canon's 0.98 m product specification is a camera/lens shooting-distance specification. Those values are
close enough to support the production correlation but are not interchangeable optical coordinates.

## Chromatic Correction Strategy

At first order, the design alternates strong dispersion contrasts through several groups. L1 combines E03
(νd = 94.9) with lower-Abbe E01/E02; L3 begins with E09 (νd = 95.1) before the E10/E11 cemented pair; L5 combines the
high-Abbe E15 (νd = 70.2) with E16 (νd = 23.8); and L6 alternates powers and material dispersions through four singlets.
This arrangement gives the zoom multiple locations at which axial and lateral color can be balanced as group powers and
ray heights change with focal length.

The production literature's fluorite and Super UD statement is consistent with that strategy, but the analysis stops at
what the data can support. The inferred classifications drive diagram tags, and the qualified CaF2 proxy improves E09's
spectral tracing; they do not turn the patent's unnamed materials into supplier identities. No patent C/F/g line indices
or dPgF values are stored, so no apochromatic or anomalous-partial-dispersion correction claim is made.

## Conditional Expressions

The patent defines eight conditions governing the final focus unit and the six-unit zoom architecture. Recalculation from
the modeled prescription and the patent Table 1 quantities reproduces all eight published rounded values and places every result
inside its required open interval.

| Condition | Computed | Patent rounded | Required interval | Result |
|---|---:|---:|---|---|
| (1) fN / fT | -0.117770 | -0.118 | (-0.15, -0.05) | pass |
| (2) o1N / dN | -0.106287 | -0.106 | (-0.30, -0.05) | pass |
| (3) LN / fT | 0.243303 | 0.243 | (0.15, 0.35) | pass |
| (4) d34 / dN | 0.229333 | 0.229 | (0.15, 0.60) | pass |
| (5) fN-1 / fT | 0.112276 | 0.112 | (0.05, 0.20) | pass |
| (6) DT(5fT) / fT | 0.023371 | 0.023 | (0.015, 0.030) | pass |
| (7) f1 / fT | 0.499162 | 0.499 | (0.35, 0.60) | pass |
| (8) f2 / fT | -0.142038 | -0.142 | (-0.20, -0.10) | pass |

Conditions (1) and (2) are central to the patent's focus-unit concept: L6 must have sufficiently strong negative power and
an object-side front principal point to provide focus sensitivity without excessive spherical-aberration variation
(¶0054-0056). Conditions (3)-(8) constrain the focus-unit position, internal spacing, neighboring positive unit power,
focus travel, and front-unit powers (¶0058-0068). Condition (6) uses the patent-published 9.090 mm L6 travel as a source
quantity; it does not imply that a close-focus state has been modeled in the data file.

## Image Stabilization

Canon's production documentation specifies optical image stabilization of approximately four shutter-speed stops and
three IS modes, and Canon's product block diagram identifies an IS unit. Those are production-lens facts, not properties
published in Numerical Example 2. The selected patent is concerned with zoom-unit and focus-unit architecture and does not
publish an image-stabilizer decenter table or a surface-by-surface mapping from its numerical example to the production IS
unit.

The data file therefore contains no stabilization motion or decentered optical state. No patent group is asserted to be
the production IS group from the evidence available here.

## Verification Summary

The modeled prescription was independently recomputed with sequential height/reduced-angle tracing and a
separate ABCD matrix calculation. The two methods agree to better than 1e-12 at every published zoom station.

| State | Computed EFL (mm) | Patent f (mm) | Computed BFD (mm) | Patent BF (mm) | Computed track (mm) | Patent track (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 102.757858 | 102.79 | 67.230219 | 67.26 | 234.72 | 234.72 |
| Intermediate | 200.025122 | 199.97 | 70.351713 | 70.32 | 286.21 | 286.21 |
| Telephoto | 388.939059 | 389.03 | 75.843156 | 75.88 | 311.72 | 311.71 |

The small residuals are consistent with the patent's rounded radii, thicknesses, indices, and printed cardinal values.
The 0.01 mm telephoto track difference is the patent's own independent rounding mismatch and is not corrected in the
model.

Surface-by-surface Petzval summation using φ/(n·n′) gives +0.000642467127 mm⁻¹, whose reciprocal under the same sign
convention is 1556.500 mm. This is an inverse Petzval sum, not a measured best-field radius.

The patent publishes effective diameters for every surface; the data uses exactly half of each value as the corresponding
semi-diameter. Fresh geometry checks on the final arrays find a minimum physical element edge thickness of 1.403 mm and a
maximum spherical rim-slope angle of 29.960°. The tightest shared-band air-gap sag intrusion is 0.93248 of the axial gap,
so the file uses `gapSagFrac = 0.94` to retain the source apertures with positive rim clearance rather than trimming them.
No conic-limit test is applicable because the design is entirely spherical.

The model contains exactly one `STO`, five cemented interfaces, 21 glass elements, and 16 air-separated groups. The five
cemented-group net EFLs are D1 -638.420 mm, D2 -128.982 mm, D3 +391.679 mm, D4 -202.633 mm, and D5 +385.102 mm. These
values are distinct from both the individual standalone element focal lengths and the six complete functional-unit
powers.

No scaled dimensions, asphere-coefficient transformations, omitted plate corrections, inferred semi-diameters, or
invented focus rows are present in this prescription.

## Sources / References

1. Shigenobu Sugita, **US 2015/0146044 A1**, *Zoom Lens and Image Pickup Apparatus Including the Same*, Canon Kabushiki
   Kaisha, published May 28, 2015. Numerical Example 2 and Table 1 are the prescription sources.
2. Canon Camera Museum, **EF100-400mm f/4.5-5.6L IS II USM**:
   https://global.canon/en/c-museum/product/ef437.html
3. Canon U.S.A., **EF 100-400mm f/4.5-5.6L IS II USM** product specifications:
   https://www.usa.canon.com/shop/p/ef-100-400mm-f-4-5-5-6l-is-ii-usm
4. OHARA optical-glass catalog and detailed data: https://oharacorp.com/
5. HOYA optical-glass cross-reference: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. SCHOTT optical-glass data: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
8. SUMITA optical-glass data: https://www.sumita-opt.co.jp/en/download/
9. CDGM optical-glass data: https://www.cdgmgd.com/
