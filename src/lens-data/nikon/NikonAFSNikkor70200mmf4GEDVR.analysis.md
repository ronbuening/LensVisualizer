# NIKON AF-S NIKKOR 70-200mm f/4 G ED VR

## Patent Reference and Design Identification

**Patent:** US 2017/0315337 A1
**Application Number:** US 15/650,817
**Priority:** August 9, 2012
**Filed:** July 14, 2017
**Published:** November 2, 2017
**Inventors:** Satoshi Yamaguchi; Issei Tanaka
**Applicant:** Nikon Corporation
**Title:** *Variable Magnification Optical System, Optical Device, and Production Method for Variable Magnification Optical System*
**Embodiment analyzed:** First Example / Example 1

This prescription is the First Example described in ¶0201–¶0237 and Table 1 of the patent. The patent itself does
not name the production AF-S NIKKOR 70-200mm f/4G ED VR, so the product identification is a research correlation rather
than a Nikon-confirmed patent attribution. Several independent characteristics nevertheless converge on that production
lens.

1. The patent example contains 20 glass elements and six cemented interfaces, giving 14 physical optical units; Nikon
   specifies the production lens as 20 elements in 14 groups.
2. The patent gives 71.4, 135.0, and 194.0 mm infinity-focus states at FNO 4.1, while Nikon markets the lens as
   70–200 mm f/4. The exact modeled end-state EFLs are 71.387353 and 193.999701 mm; these are design values rather
   than marketing focal lengths.
3. The patent publishes image height Y = 21.6 mm. Nikon specifies FX format and Nikon F bayonet for the production lens,
   providing a compatible production-format correlation without changing the patent scale.
4. Example 1 focuses by moving rear subgroup G1B and stabilizes by laterally shifting subgroup G4B; Nikon specifies
   Internal Focusing and Vibration Reduction for the production lens.
5. Nikon markets three ED elements and one HRI element. The patent has exactly three elements at nd/νd =
   1.497820/82.57 and one at nd = 2.000690. That count pattern supports the correlation, but no reviewed Nikon source
   maps the ED or HRI labels to specific Example 1 elements.
6. The Japanese priority date, August 9, 2012, precedes Nikon’s October 24, 2012 product announcement. Nikon announced
   late-November 2012 availability.

The main mismatch is also informative: Example 1 spans 71.4–194.0 mm with a published zoom ratio of 2.72, whereas the
production lens is marketed as 70–200 mm and 2.9×. No uniform scaling is applied in this model; all prescription lengths
remain at the patent scale. (US 2017/0315337 A1, front page, ¶0201–¶0231, Table 1; Nikon product and launch material
listed under Sources.)

## Optical Architecture

Example 1 is a four-main-group positive–negative–positive–positive zoom. The patent identifies G1 and G4 as fixed during
zooming and moves G2 and G3 axially. The aperture stop is fixed between G3 and G4. The final parsed prescription
recomputes the main-group focal lengths as G1 = +100.018 mm, G2 = −28.545 mm, G3 = +100.062 mm, and
G4 = +85.726 mm, matching the published group values to source precision. This is described here simply by its verified four-group power sequence rather than by a looser historical family label.

G1 is itself divided into positive front group G1A and positive rear group G1B. G1A is the single meniscus L11; G1B
contains cemented pair L12–L13 plus L14 and is the internal focusing subgroup. G2 is a negative variator built from L21
followed by two negative cemented segments, G2A and G2B. G3 is the single cemented L31–L32 positive group. G4 is the
fixed rear “master” group, subdivided into positive G4A, negative G4B, and positive G4C. G4B is also the laterally
shifted vibration-reduction subgroup. (US 2017/0315337 A1, ¶0202–¶0218.)

The zoom cam is not monotonic for every moving group. Relative to the wide state, the start of G2 moves +25.313 mm at
the 135 mm station and +34.661 mm at the tele station. G3 moves +13.749 mm at the middle station but returns to
+10.991 mm at tele, a genuine reversal between the middle and tele stations. The published variable-gap sums are 43.405 / 43.404 / 43.405 mm at W/M/T.
The source describes the stop/G4 as fixed (¶0216), but its rounded middle-state d18 = 2.127 mm
puts that station 0.001 mm forward. The model preserves the printed value rather than adjusting
the prescription to force exact station equality. This rounding discrepancy does not reverse any zoom travel.

Source surface 25 is a plane air-to-air flare-stopper bookkeeping plane between G4A and G4B. It has no refractive power
and is omitted from the sequential model; its 0.5000 mm spacing is added to the preceding air gap, so source surface 26
retains its original axial position. The physical flare stopper is therefore acknowledged as a mechanical/stray-light
feature without being represented as a powered optical surface.

The patent does not publish clear semi-diameters or a physical diaphragm diameter. The model therefore uses inferred
semi-diameters checked against exact spherical d-line ray envelopes and geometry constraints. The stop semi-diameter
is 13.826131 mm, calibrated from the published f/4.1 states. It is a modeled iris radius, not a source-published
measurement. The resulting modeled f-numbers are 4.09973, 4.09978, and 4.09972 at W, M, and T.

## Element-by-Element Analysis

All focal lengths in this section are independently computed **standalone in-air** values for individual physical
elements, not in-situ element contributions. For cemented pairs, the net focal length of the pair is stated separately.
The functional group focal lengths discussed above are different quantities because they include the actual internal
spacings and surrounding elements of each group.

### L11 — G1A Positive Meniscus

**L11:** nd = 1.487490, νd = 70.31. Glass: J-FK5 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +442.202 mm.

L11 is the complete front subgroup G1A. The patent specifies it as a positive meniscus with its convex face toward the
object (¶0204). Its standalone power is weak relative to the full G1 power: the computed +442.202 mm element focal
length contrasts with +100.018 mm for G1 as a whole. This shows that L11 alone is not the sole source of the full first-group power.

L11 also supplies the smallest positive-lens index in G1 for patent condition (3). Together with the high-index negative
L12, it produces the verified index difference Nin − N1p = 0.41617. The patent associates this first-group index contrast
with allowing lower surface curvatures while controlling coma; that is a group-level patent rationale, not an isolated
aberration attribution to L11 alone (¶0177–¶0181).

### D1 — L12 + L13 Cemented Pair in G1B

**L12:** nd = 1.903660, νd = 31.27. Glass: J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -177.522 mm.

**L13:** nd = 1.497820, νd = 82.57. Glass: J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +131.635 mm.

The cemented pair has a net in-air focal length of +514.477 mm. The patent specifies a negative meniscus L12
cemented to biconvex positive L13, followed by L14, as the rear positive subgroup G1B (¶0205). The large index and
dispersion contrast across the pair is source-visible in the d-line coordinates, but the patent does not assign a
standalone aberration duty to either component. The pair should therefore be read as one part of the complete focusing
subgroup rather than as an independently characterized achromat.

Surface 3 on L12 is one of the two first-group surfaces on which Example 1 explicitly places an antireflection coating.
The later ghost discussion identifies reflections between surface 6 on L14 and surface 3 on L12 as a potential ghost/flare
path (¶0215, ¶0234–¶0237). Those coating facts are not represented as refractive prescription surfaces in the data file.

### L14 — G1B Positive Meniscus

**L14:** nd = 1.497820, νd = 82.57. Glass: J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +159.143 mm.

L14 completes G1B and is another positive meniscus convex toward the object (¶0205). Together with D1 it produces the
computed G1B focal length of +122.385 mm. Because G1B is the focusing subgroup, the optical state of L14 changes with
focus in the patented mechanism even though the numerical example publishes only infinity-focus spacings.

The object-side surface of L14 is source surface 6, the other Example 1 surface explicitly given an antireflection
coating. The patent’s Fig. 12 discussion identifies surfaces 6 and 3 as the two reflecting surfaces in one ghost path;
this is one of the few element-specific functional statements made by the patent beyond geometry and group membership.

### L21 — Leading Negative Element of G2

**L21:** nd = 1.834810, νd = 42.73. Glass: J-LASF05 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -52.832 mm.

L21 is the biconcave element that begins the moving negative second group (¶0206). Its standalone focal length is
−52.832 mm, while the complete G2 focal length is −28.545 mm. G2 is the principal negative moving group in the
positive–negative–positive–positive zoom sequence; its spacing from fixed G1 increases substantially from wide to tele.

Patent condition (2) concerns the magnification of G2 across the zoom. The patent’s rationale is explicitly group-level:
the second-group magnification crosses unity in magnitude so ray-height changes through G2 are moderated, reducing
variation in field curvature and coma through the zoom (¶0170–¶0176). That rationale is not assigned uniquely to L21.

### D2 — L22 + L23 / G2A

**L22:** nd = 1.618000, νd = 63.34. Glass: J-PSK02 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -53.139 mm.

**L23:** nd = 1.846660, νd = 23.80. Glass: J-SF03 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +74.453 mm.

The cemented pair is also the complete first negative segment G2A and has a verified net focal length of -186.386 mm.
The patent describes L22 as biconcave negative and L23 as a positive meniscus convex toward the object (¶0207).
Although the two elements have opposite standalone powers, their cemented combination remains negative.

The broader patent rationale for the three-part G2 structure is given in ¶0188–¶0189: dividing G2 into a leading negative
element and two negative cemented segments is intended to reduce ray-deviation angles on individual surfaces and to
limit zoom-induced changes in field curvature, spherical aberration, and coma. This statement applies to the G2 layout
as a whole, not to an independently measured correction from D2 alone.

### D3 — L24 + L25 / G2B

**L24:** nd = 1.729160, νd = 54.61. Glass: J-LAK18 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -52.520 mm.

**L25:** nd = 1.846660, νd = 23.80. Glass: J-SF03 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +99.241 mm.

D3 forms the second negative segment G2B and has a verified net focal length of -112.501 mm. L24 is biconcave
negative and L25 is plano-convex positive, with their cemented interface assigned to downstream element L25 in the
model exactly as the medium transition requires. Like D2, the pair remains net negative despite its positive component.

D2 and D3 therefore give G2 two relatively weak negative cemented subgroups behind the stronger leading L21. The final
G2 power and zoom behavior emerge from all three units together; standalone element focal lengths should not be read as
their in-situ contributions.

### D4 — L31 + L32 / Complete G3

**L31:** nd = 1.717000, νd = 47.98. Glass: J-LAF3 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +39.621 mm.

**L32:** nd = 1.903660, νd = 31.27. Glass: J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -65.882 mm.

This cemented pair is the entire third lens group G3, so its net in-air focal length and group focal length are both
+100.062 mm to the quoted precision. The patent specifies a biconvex positive L31 cemented to a negative
meniscus L32 whose concave surface faces the object (¶0209).

The pair also supplies patent condition (4): N3n − N3p = 1.903660 − 1.717000 = 0.18666, verified against the published
0.187. The patent explicitly links this third-group index contrast to permitting lower curvatures while maintaining coma
correction across the zoom (¶0182–¶0185). Unlike a general guess from glass type, that interpretation is directly tied
to the patent’s condition and to the exact L31/L32 coordinates.

G3 is the second axial zoom-moving group. Its reversal after the middle station is a significant kinematic feature:
it reaches its most imageward sampled position at M and then shifts 2.758 mm back toward the object by T.

### L41 — First Element of G4A

**L41:** nd = 1.772500, νd = 49.62. Glass: J-LASF016 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +63.740 mm.

L41 is a plano-convex positive element immediately behind the fixed aperture stop and begins the positive first segment
G4A (¶0210–¶0211). Its standalone +63.740 mm power is stronger than the +112.031 mm net power of G4A because the
following D5 pair contributes negative net power.

The fixed location of G4 and the stop is central to the constant-aperture architecture described by the patent. The
general embodiment discussion states that a fixed positive rearmost group makes a constant f-number easier to maintain
through zooming (¶0168–¶0169); the final model’s single calibrated stop radius reproduces f/4.1 at all three states.

### D5 — L42 + L43 in G4A

**L42:** nd = 1.497820, νd = 82.57. Glass: J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +59.002 mm.

**L43:** nd = 1.903660, νd = 31.27. Glass: J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -36.758 mm.

D5 has a net in-air focal length of -115.552 mm. It follows the positive L41 within G4A, so the three-element
subgroup remains positive at +112.031 mm even though D5 by itself is negative. This is a useful example of why
standalone and in-situ/group power must be kept distinct.

L42 shares the 1.497820/82.57 coordinate used by L13 and L14. These three occurrences numerically match Nikon’s
marketed count of three ED elements, but the patent does not label them ED and Nikon does not identify the corresponding
patent element numbers. The data therefore records a HIKARI coordinate equivalent rather than an asserted production melt.

### D6 — L44 + L45 in G4B

**L44:** nd = 1.805180, νd = 25.45. Glass: J-SF6 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +38.444 mm.

**L45:** nd = 1.603110, νd = 60.69. Glass: J-SK14 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -41.899 mm.

The L44–L45 cemented pair has a weak positive net focal length of +349.707 mm. It is followed by negative L46;
together those three elements form G4B, whose verified subgroup focal length is −62.730 mm. G4B is the designated
vibration-reduction subgroup and moves laterally rather than axially during stabilization (¶0212, ¶0218).

The patent’s second-embodiment rationale for conditions (5) and (6) is directly relevant because the First Example is
common to the first through third embodiments. It uses a negative G4B in the rear group so the stabilizing unit can be
kept relatively small and positioned where ray heights are modest, while power ratios constrain aberration changes during
decentering (¶0096–¶0102).

### L46 — Rear Negative Element of G4B

**L46:** nd = 2.000690, νd = 25.46. Glass: J-LASFH17 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -50.855 mm.

L46 is the separate biconcave negative element that makes the complete G4B subgroup net negative after the weak-positive
D6 pair. Its nd = 2.000690 is the highest d-line index in the example and the only coordinate near 2.00. Nikon markets
one HRI element in the production lens, so L46 is the obvious numerical candidate for that count correlation. The
identification is not treated as manufacturer-confirmed because the product source does not map HRI status to a patent
element.

### L47 — First Positive Element of G4C

**L47:** nd = 1.589130, νd = 61.22. Glass: J-SK5 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +69.993 mm.

L47 begins the fixed positive third segment G4C. It is a symmetric biconvex element in the authored model and is followed
by another biconvex positive element, L48, before the negative meniscus L49. The three-element G4C combination has
verified net focal length +48.814 mm.

G4C provides the positive denominator term in condition (5), f4B/f4C. Its role in that condition is established at the
subgroup level; no separate patent claim attributes a specific aberration correction to L47.

### L48 — Second Positive Element of G4C

**L48:** nd = 1.719990, νd = 50.27. Glass: J-LAK10 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = +54.598 mm.

L48 is the stronger of the two adjacent positive elements in G4C by standalone focal length. It remains air-spaced from
both L47 and L49. The final rear segment is therefore not a cemented triplet: its optical behavior depends on the three
separate powers and the two intervening air spaces.

### L49 — Rear Negative Meniscus

**L49:** nd = 1.834000, νd = 37.18. Glass: J-LASF010 (HIKARI coordinate equivalent; supplier unconfirmed). Standalone in-air f = -63.635 mm.

L49 is the final glass element and a negative meniscus with its concave face toward the object (¶0213). It moderates the
two preceding positive elements while leaving G4C net positive. The patent publishes no rear cover plate after L49; the
63.693 mm BF is therefore modeled as air from source surface 36, the final L49 surface, to the image plane.

## Glass Identification and Selection

The patent publishes d-line nd and νd coordinates but no supplier names. The data file therefore does not claim Nikon
used HIKARI glass. Instead, each coordinate is linked to the exact matching row in the 2025-06-01 HIKARI catalog and
labeled as a **coordinate equivalent; supplier unconfirmed**. Dispersion comes from the shared catalog curves, including six newly added HIKARI power-series rows. Catalog C/F/g indices are not copied into the prescription as measured data. The tabulated deviations below use HIKARI’s normal line and are not authored as runtime `dPgF`.

| Catalog-equivalent row | nd | νd | HIKARI ΔPgF (reference only) | Elements |
|---|---:|---:|---:|---|
| J-FK5 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.487490 | 70.31 | +0.0027 | L11 |
| J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.903660 | 31.27 | +0.0029 | L12, L32, L43 |
| J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.497820 | 82.57 | +0.0327 | L13, L14, L42 |
| J-LASF05 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.834810 | 42.73 | -0.0079 | L21 |
| J-PSK02 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.618000 | 63.34 | +0.0031 | L22 |
| J-SF03 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.846660 | 23.80 | +0.0171 | L23, L25 |
| J-LAK18 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.729160 | 54.61 | -0.0085 | L24 |
| J-LAF3 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.717000 | 47.98 | -0.0053 | L31 |
| J-LASF016 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.772500 | 49.62 | -0.0093 | L41 |
| J-SF6 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.805180 | 25.45 | +0.0140 | L44 |
| J-SK14 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.603110 | 60.69 | -0.0014 | L45 |
| J-LASFH17 (HIKARI coordinate equivalent; supplier unconfirmed) | 2.000690 | 25.46 | +0.0123 | L46 |
| J-SK5 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.589130 | 61.22 | -0.0016 | L47 |
| J-LAK10 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.719990 | 50.27 | -0.0073 | L48 |
| J-LASF010 (HIKARI coordinate equivalent; supplier unconfirmed) | 1.834000 | 37.18 | -0.0042 | L49 |

The three 1.497820/82.57 elements use the J-FKH1 coordinate-equivalent row, whose stored catalog dPgF is +0.0327.
Because line-index and dPgF data are actually present, their catalog-equivalent spectral behavior can be modeled; this
does **not** establish that Nikon used J-FKH1 itself. Likewise, L46’s J-LASFH17 equivalent describes the coordinate
and line-data proxy, not a verified Nikon melt.

No apochromatic designation is inferred from the prescription. The strongest safe conclusion is that the model contains
several high-Abbe/partial-dispersion-sensitive coordinate classes and catalog curves sufficient for wavelength-aware
tracing of the chosen catalog equivalents. Production marketing describes three ED elements, but the mapping from that
marketing count to L13/L14/L42 remains a correlation inference rather than a source fact.

The diagram marks L13/L14/L42 as **inferred APD**, using the coordinate-compatible J-FKH1 catalog curve (engine-baseline ΔPgF ≈ +0.0337). This qualifies the spectral proxy and does not identify Nikon’s production melt or claim patent-measured anomalous dispersion. No catalog line indices are copied into the prescription.

## Focus Mechanism

Example 1 uses internal focusing. The patent states that rear subgroup G1B moves along the optical axis to focus from
infinity toward a close object (¶0217); the broader embodiment description specifies motion of the rear first-group
subgroup toward the object on close focusing (¶0166–¶0167). G1A remains the front fixed subgroup.

Table 1, however, supplies only infinity-focus W/M/T numerical spacing states. Nikon’s production specification gives a
minimum focus distance of approximately 1.0 m, but that external observable is insufficient to determine a unique G1B
travel law at each zoom station. The implemented model therefore has **NO_INTERNAL_RECONSTRUCTION**: its focus-variable
pairs are identical at each W/M/T station, and no close-focus G1B displacement is invented.

The `closeFocusM = 1.0` field records the production MFD for interface metadata only. It does not mean the LensVisualizer
prescription contains a solved 1.0 m optical state. Consequently, no quantitative claims about focus breathing, close-focus
EFL, or close-focus aberrations are made from this data revision.

## Chromatic Correction Strategy

The chromatic model is grounded first in the patent’s glass coordinates and the catalog-equivalent line data stored with
each element. Conditions (3) and (4) additionally compare index contrasts within G1 and G3: condition (3) uses the
highest-index negative lens and lowest-index positive lens in G1, while condition (4) makes the analogous comparison in
G3. The verified values are 0.41617 and 0.18666, respectively, against the published 0.416 and 0.187.

The patent frames these conditions primarily as curvature/coma controls, not as explicit achromatization equations
(¶0177–¶0185). Chromatic interpretation therefore remains tied to the actual stored spectral proxies. In the data file,
every element carries nC, nF, ng, and dPgF from its coordinate-exact HIKARI equivalent. This permits wavelength-dependent
modeling of the proxy glasses, but it does not convert catalog equivalence into proof of Nikon’s production glass choice.

The production lens’s “three ED” description is useful corroborating evidence for product identification, particularly
because the patent has exactly three 82.57-Abbe elements. It is not used here as permission to relabel those patent
elements as specific Nikon ED melts.

## Conditional Expressions

The First Example publishes six evaluated conditional expressions. The final-model verifier recomputes all six from the
parsed data rather than copying the table values.

| Condition | Patent limit | Computed | Published Example 1 | Patent interpretation |
|---|---|---:|---:|---|
| (1) `fw²/(f13w·f4)` | `−1.20 < x < −0.20` | -0.258362 | −0.26 | Constrains G4 conjugate length/magnification and zoom power distribution (¶0143–¶0148). |
| (2) `β2w·β2t` | `0.30 < x < 0.90` | 0.698288 | 0.70 | Constrains second-group magnification through zoom (¶0170–¶0176). |
| (3) `N1n−N1p` | `x > 0.290` | 0.416170 | 0.416 | First-group index contrast (¶0177–¶0181). |
| (4) `N3n−N3p` | `x > 0.160` | 0.186660 | 0.187 | Third-group index contrast (¶0182–¶0185). |
| (5) `f4B/f4C` | `−1.60 < x < −0.50` | -1.285076 | −1.29 | Relative power of G4B and G4C for the VR rear group (¶0098–¶0100). |
| (6) `f4/f4B` | `−1.60 < x < −0.60` | -1.366597 | −1.37 | Relative power of whole G4 and negative G4B (¶0098–¶0102). |

Conditions (5) and (6) are especially relevant to the stabilizing group. The patent states that the selected rear-group
power distribution is intended to keep the vibration-reduction unit compact while limiting aberration changes as it is
decentered. The computed values lie inside the patent’s stated ranges and reproduce the rounded Example 1 values.

## Image Stabilization

The stabilizing group is G4B, the negative three-element subgroup L44–L46. The patent moves this subgroup with a component
perpendicular to the optical axis (¶0218). It defines a vibration-reduction coefficient K as image displacement divided
by VR-group displacement and uses the relation `movement = f·tan(θ)/K` (¶0219).

For Example 1, K = −1.28 at both published check states. Using the published focal lengths and shake angles, the verifier
computes |71.4·tan(0.60°)/−1.28| = 0.584161 mm at wide and
|194·tan(0.40°)/−1.28| = 1.058123 mm at tele. These reproduce the patent’s rounded
0.58 mm and 1.06 mm displacement values, respectively (¶0220).

No lateral VR state is encoded as a normal sequential spacing state in the data file. The values above are verification
of the patent’s stabilization relation and subgroup identity, not a claim that the current axial LensVisualizer model
simulates decentered VR geometry.

## Aberration-Control Rationale

The patent provides unusually explicit group-level reasoning for this four-group architecture. The fixed positive rear
group is treated as a master group whose power and conjugate length are constrained by condition (1), leaving more axial
space for the moving front groups and reducing the amount by which the G2–G3 separation must change. The second group is
arranged so its magnification crosses −1 during zooming; the patent connects this to reduced ray-height change through G2
and smaller variation of field curvature and coma (¶0143–¶0148, ¶0170–¶0176).

The segmented G2 structure in ¶0188–¶0189 is also deliberate at the group level: a leading negative element followed by
two negative cemented segments is intended to distribute ray deviation over more surfaces. G3’s index-contrast condition
provides a parallel curvature/coma constraint. In the rear group, negative G4B is positioned near the stop/image-side
region and used as the VR unit, while conditions (5) and (6) bound its power relative to G4 and G4C.

These are patent-stated design rationales. The analysis does not assign a numerical coma, spherical-aberration, or field-
curvature contribution to an individual element because the final verifier has not decomposed those aberrations element by
element. The element descriptions therefore stay at the level of verified power, placement, glass coordinates, and the
functional group structure actually stated in the patent.

## Verification Summary

The final model was recalculated directly from the parsed `.data.ts` revision. Two first-order implementations—ABCD
matrix multiplication and sequential height/reduced-angle basis-ray propagation—agree to numerical precision at W, M,
and T. The table below compares the final modeled state with the source values.

| State | Modeled EFL (mm) | Patent f (mm) | Modeled BFD (mm) | Patent BF (mm) | Modeled track (mm) | Modeled f/# |
|---|---:|---:|---:|---:|---:|---:|
| W | 71.387353 | 71.400 | 63.691882 | 63.693 | 218.2811 | 4.09973 |
| M | 134.998571 | 135.000 | 63.693335 | 63.693 | 218.2811 | 4.09978 |
| T | 193.999701 | 194.000 | 63.691680 | 63.693 | 218.2811 | 4.09972 |

The modeled Petzval sum is 0.001593683181286 mm⁻¹, corresponding to a Petzval-radius magnitude of
627.477 mm under the adopted sign convention. The computation uses the required
surface-by-surface `φ/(n·n′)` form. Removing the neutral flare-stopper plane does not change the sum because that plane
has no index transition or optical power.

The modeled clear apertures are inferences rather than patent data. In the verified geometry sample, 125 exact spherical
d-line rays across W, M, T and two intermediate zoom stations pass without clipping failure. The smallest sampled
non-stop clearance is 0.131856 mm. The minimum modeled
element edge thickness is 0.284072 mm, the maximum
rim-slope angle is 25.601°, and the worst shared-band
cross-gap intrusion ratio is 0.894473, below the 0.90 policy limit.
These are modeled-geometry checks, not patent-published diameters or production-render measurements.

Example 1 is entirely spherical: no surface in Table 1 is marked aspherical and the implemented `asph` object is empty.
The patent’s asphere equation is therefore retained only as a convention reference for other examples and does not
produce any aspheric departure in this lens model.

## Sources

- **US 2017/0315337 A1**, Satoshi Yamaguchi and Issei Tanaka, *Variable Magnification Optical System, Optical Device,
  and Production Method for Variable Magnification Optical System*, published November 2, 2017. First Example:
  ¶0201–¶0237, Table 1, Figs. 1–3 and 12. The attached publication is the prescription authority.
- **Nikon USA**, “AF-S NIKKOR 70-200mm f/4G ED VR,” product specification/overview:
  https://www.nikonusa.com/p/af-s-nikkor-70-200mm-f4g-ed-vr/2202/overview
- **Nikon USA**, “Nikon Continues Popular Series of F/4 Lenses with the Addition of the New FX-Format AF-S NIKKOR
  70-200mm f/4G ED VR Telephoto Zoom Lens,” October 24, 2012:
  https://www.nikonusa.com/press-room/70-200-nikon-continues-popular-series
- **Nikon Corporation**, 2012 corporate news index: https://www.nikon.com/company/news/2012/
- **HIKARI GLASS CO., LTD.**, *OPTICAL GLASS*, revision 2025-06-01:
  https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf. Catalog rows are used only as
  coordinate/spectral equivalents; they do not establish Nikon’s glass supplier or melt identity.
