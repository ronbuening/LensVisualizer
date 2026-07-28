## Patent Reference and Design Identification

**Patent:** US 7,804,652 B2
**Application Number:** US 12/127,914
**Priority:** JP 2007-143070, filed May 30, 2007
**Filed:** May 28, 2008
**Published:** US 2008/0297913 A1, December 4, 2008
**Granted:** September 28, 2010
**Inventor:** Masakazu Saori
**Assignee:** Hoya Corporation
**Title:** “Zoom Lens System”
**Embodiment analyzed:** Embodiment 4, Table 4

The prescription is correlated with the **PENTAX SMC DA 17-70mm f/4 AL [IF] SDM**. The patent does not name a
commercial lens, so the identification is a production correlation rather than a manufacturer-confirmed attribution.
Several independent facts converge [1, pp. 15–16; 2–3]:

1. Embodiment 4 has a design range of 17.50–67.89 mm at a constant modeled f/4.1, closely matching the marketed
   17–70 mm constant-f/4 lens.
2. Both the prescription and the production specification have 17 physical elements in 12 air-separated assemblies.
3. Both use two hybrid aspherical optical elements.
4. The patent describes an SLR zoom exceeding 80° full field at the wide state; the production lens is an APS-C K-mount
   standard zoom with a marketed 79°–23° field.
5. The Japanese priority date, United States filing, and June 4, 2008 product announcement fall within the same design
   and release interval.

The analysis keeps the marketed 17–70 mm and f/4 values separate from the unscaled patent design. No uniform scale is
applied: the computed design endpoints are 17.5006 and 67.8703 mm, and `nominalFno` is the patent-based f/4.1. No sensor
cover plate, filter, inactive dummy plane, or mechanical component is present in the selected embodiment, and none is
added or removed. No patent radius, spacing, refractive index, Abbe number, or aspherical coefficient is corrected.

## Optical Architecture

Embodiment 4 is a five-functional-group positive–negative–positive–negative–positive zoom. The five power
groups are annotated G1 through G5, while the physical construction contains 12 air-separated assemblies. The two hybrid
aspherical elements each contain a thin bonded resin layer and a glass substrate. The data model therefore uses 19
refractive material records while retaining the source and manufacturer count of 17 physical elements.

| Functional group | Surfaces | Isolated in-air EFL | Principal function in the zoom |
|---|---:|---:|---|
| G1 | 1–5 | +99.7587 mm | Front positive collector and long-travel front group |
| G2 | 6A–17 | −13.9995 mm | Strong negative variator |
| G3 | 18–22 | +27.0142 mm | Positive relay group carrying the diaphragm |
| G4 | 23–25 | −41.1067 mm | Negative rear compensator |
| G5 | 26–31 | +35.7010 mm | Positive rear imaging group |

The isolated group focal lengths are computed with each group embedded in air. They describe group sign and relative
strength, not the power of the same group inside the complete zoom, where principal-plane locations and neighboring
groups alter its effective action.

Zooming is governed by the four inter-group spacings after surfaces 5, 17, 22, and 25, together with the rear image
spacing. From wide to tele, D5 increases from 3.10 to 33.70 mm, D17 contracts from 16.92 to 1.00 mm, D22 increases from
3.97 to 16.34 mm, and D25 contracts from 13.39 to 1.00 mm. The patent states that G2 first moves toward the image and
then reverses toward the object. Its three tabulated focal states do not bracket that turning point, so the model does
not invent an additional zoom control position [1, pp. 12, 16].

G3 and G5 move almost integrally in the tabulated states. The sum D22 + D25 is 17.36, 17.35, and 17.34 mm, a 0.02 mm
spread consistent with the two-decimal source table. The diaphragm is fixed 1.41 mm behind surface 22 and therefore
moves with G3, as described by the patent [1, p. 12].

Using `TL/EFL < 1` as the telephoto criterion, the design is not telephoto at any tabulated state. Using `BFD > EFL`
as the retrofocus criterion, the wide and middle states qualify, while the tele state does not.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element values in air. Cemented or hybrid net focal lengths are
reported separately and should not be confused with the in-situ behavior of the complete functional groups.

### G1 — Front Positive Group

#### D1: L1 / L2 Cemented Pair

**L1:** nd = 1.84666, νd = 23.8. Glass: 847238 — dense flint, vendor unresolved. Standalone f = −172.3482 mm.
**L2:** nd = 1.71300, νd = 53.9. Glass: 713539 — LAC8/S-LAL8-class lanthanum crown, code equivalent. Standalone f = +138.6423 mm.

L1 is a negative meniscus with its convex face toward the object; L2 is a positive meniscus of the same orientation.
Their cemented combination is only weakly positive, with an independently computed net EFL of +721.3971 mm. The pair
therefore contributes less net power than either element considered alone. Its opposed powers and dispersion classes
form the first balancing component of the positive front group.

#### L3: Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 — high-index lanthanum flint, vendor unresolved.
Standalone f = +115.2780 mm.**

L3 supplies the principal positive contribution behind the weak front cemented pair. Its meniscus bending keeps both
surfaces convex toward the object while completing the +99.7587 mm net power of G1. As G1 moves strongly toward the
object during zooming, this relatively moderate group power limits the sensitivity that would accompany a much stronger
front collector.

### G2 — Negative Variator

#### H1: L4 Resin Layer / L4 Glass Substrate

**L4r:** nd = 1.52700, νd = 43.7. Glass: Unmatched hybrid aspherical resin. Standalone layer f = −341.4156 mm.
**L4g:** nd = 1.80400, νd = 46.6. Glass: 804466 — high-index lanthanum flint, vendor unresolved.
Standalone f = −21.8019 mm.

The thin resin layer carries aspherical surface 6A and is bonded to a much stronger negative glass meniscus. The
complete hybrid has a net in-air EFL of −20.4519 mm. The resin layer is therefore principally a surface-form corrector
rather than a separate high-power lens; its weak standalone power modifies the front profile of the negative substrate.

#### L5: Biconcave Negative

**nd = 1.80400, νd = 46.6. Glass: 804466 — high-index lanthanum flint, vendor unresolved.
Standalone f = −34.7210 mm.**

L5 adds substantial negative power immediately behind the hybrid meniscus. Its biconcave form reinforces the angular
expansion produced by the front of G2 and helps make this group the dominant variator of the zoom.

#### L6: Biconcave Negative

**nd = 1.83400, νd = 37.2. Glass: 834372 — dense lanthanum flint, vendor unresolved. Standalone f = −79.9033 mm.**

L6 is weaker than L5 but uses the highest refractive index in the prescription. It distributes the negative power across
an additional surface pair rather than concentrating it in the steepest elements. The lower Abbe number also broadens
the dispersion palette available within G2, although the patent provides no line-index data from which a detailed
secondary-spectrum claim could be made.

#### L7: Biconvex Positive

**nd = 1.59270, νd = 35.3. Glass: 593353 — flint, vendor unresolved. Standalone f = +26.5302 mm.**

L7 is a strong positive element embedded within an overall negative group. It counteracts part of the preceding negative
power and provides additional bending freedom before the rear cemented pair. This alternating sign structure permits G2
to remain strongly negative while avoiding a simple stack of uniformly negative lenses.

#### D2: L8 / L9 Cemented Pair

**L8:** nd = 1.80400, νd = 46.6. Glass: 804466 — high-index lanthanum flint, vendor unresolved.
Standalone f = −22.5496 mm.
**L9:** nd = 1.78472, νd = 25.7. Glass: 785257 — dense flint, vendor unresolved. Standalone f = +41.1325 mm.

Despite the positive standalone power of L9, the cemented pair remains negative, with a net EFL of −55.2705 mm. The
pair closes G2 with a more moderate negative contribution than the front hybrid and L5. Its low-Abbe positive member is
not evidence of anomalous dispersion; it is simply the source-prescribed dispersion pairing.

Taken together, H1, L5, L6, L7, and D2 form a −13.9995 mm group. The complete group is much stronger than
the algebraic impression given by isolated thin powers because internal separations and principal-plane shifts
materially affect the combined thick-group result.

### G3 — Positive Relay and Stop-Carrying Group

#### L10: Biconvex Positive

**nd = 1.56732, νd = 42.8. Glass: 567428 — light flint, vendor unresolved. Standalone f = +32.9268 mm.**

L10 begins G3 with a compact positive element. It reconverges the expanded bundle emerging from G2 and establishes the
front portion of the positive relay group.

#### D3: L11 / L12 Cemented Pair

**L11:** nd = 1.58913, νd = 61.2. Glass: 589612 — barium crown, vendor unresolved. Standalone f = +23.4800 mm.
**L12:** nd = 1.80518, νd = 25.4. Glass: 805254 — dense flint, vendor unresolved. Standalone f = −25.5790 mm.

The strong positive crown and nearly equal-magnitude negative dense flint form a weak positive cemented assembly with a
net EFL of +178.3492 mm. This pair moderates the net power and dispersion of G3 while placing the diaphragm only 1.41 mm
behind its rear surface. The entire group has an isolated EFL of +27.0142 mm.

### G4 — Negative Rear Compensator

#### D4: L13 / L14 Cemented Pair

**L13:** nd = 1.84666, νd = 23.8. Glass: 847238 — dense flint, vendor unresolved. Standalone f = +28.2004 mm.
**L14:** nd = 1.80400, νd = 46.6. Glass: 804466 — high-index lanthanum flint, vendor unresolved.
Standalone f = −17.4062 mm.

L13 is a positive meniscus convex toward the image, followed by a strong biconcave negative element. Their cemented
net EFL is −41.1067 mm, identical to the isolated G4 result because the group consists solely of this pair. Positioned
between two positive groups, G4 provides a rear negative compensating action while D22 increases and D25 decreases
through the zoom range.

### G5 — Positive Rear Imaging Group

#### L15: Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 487702 — fluor crown, vendor unresolved. Standalone f = +40.0198 mm.**

L15 supplies a low-dispersion positive component at the front of the final group. Its high Abbe number gives the rear
group chromatic leverage against the dense flints used behind it. The absence of published partial-dispersion or line
indices prevents an APO or anomalous-dispersion classification.

#### H2: L16 Resin Layer / L16 Glass Substrate / L17

**L16r:** nd = 1.52972, νd = 42.7. Glass: Unmatched hybrid aspherical resin. Standalone layer f = +401.1494 mm.
**L16g:** nd = 1.80518, νd = 25.4. Glass: 805254 — dense flint, vendor unresolved. Standalone f = −37.5119 mm.
**L17:** nd = 1.48749, νd = 70.2. Glass: 487702 — fluor crown, vendor unresolved. Standalone f = +36.4522 mm.

The nearly plano resin surface 28A is bonded to a negative glass substrate, which is then cemented to the final positive
crown. The three-material assembly is weakly positive, with a net EFL of +220.2235 mm. The patent specifically
identifies an aspherical surface in G5 as useful for coma correction. In this embodiment that correction is placed on
the outer resin layer rather than ground into the dense-flint substrate [1, pp. 13, 15–16].

Together, L15 and H2 form a +35.7010 mm rear group. The two 487702 fluor-crown elements bracket the rear dense-flint
component, while the hybrid surface supplies a separately controllable profile near the image side of the zoom.

## Glass Identification and Selection

The patent supplies only d-line refractive indices and Abbe numbers. It does not name a glass vendor or melt. A
cross-vendor catalog audit found multiple exact or near-exact equivalents for most pairs, so the data file deliberately
uses six-digit optical codes and generic classes rather than assigning an unsupported melt identity. The `713539`
position is an exact code-coordinate match for HOYA LAC8 and OHARA S-LAL8; the catalog uses the vendor-published LAC8
polynomial as a code-equivalent dispersion source without asserting that the patent element was made by HOYA.

| Stored material | nd | νd | Elements | Classification and use |
|---|---:|---:|---|---|
| 847238 | 1.84666 | 23.8 | L1, L13 | Dense flint; negative/positive members in front and rear cemented pairs |
| 713539 | 1.71300 | 53.9 | L2 | LAC8/S-LAL8-class lanthanum crown in the front cemented pair |
| 773496 | 1.77250 | 49.6 | L3 | High-index lanthanum flint completing G1 |
| 804466 | 1.80400 | 46.6 | L4g, L5, L8, L14 | Repeated high-index lanthanum-flint class across negative groups |
| 834372 | 1.83400 | 37.2 | L6 | Dense lanthanum flint in G2 |
| 593353 | 1.59270 | 35.3 | L7 | Flint positive element within G2 |
| 785257 | 1.78472 | 25.7 | L9 | Dense-flint positive member of D2 |
| 567428 | 1.56732 | 42.8 | L10 | Light flint at the front of G3 |
| 589612 | 1.58913 | 61.2 | L11 | Barium crown in D3 |
| 805254 | 1.80518 | 25.4 | L12, L16g | Dense flint in G3 and G5 |
| 487702 | 1.48749 | 70.2 | L15, L17 | Fluor crown in the rear positive group |
| Unmatched resin 527437 | 1.52700 | 43.7 | L4r | Bonded front hybrid aspherical layer |
| Unmatched resin 530427 | 1.52972 | 42.7 | L16r | Bonded rear hybrid aspherical layer |

The palette combines high-index positive and negative glasses with several low-Abbe dense flints and two high-Abbe rear
crowns. This supports ordinary achromatizing and aberration-balancing interpretations. L2 now has coefficient-backed
code-equivalent dispersion through LAC8; the remaining unresolved glasses and both resins still use Abbe modeling.
Nothing in the source supports a claim of apochromatic correction or anomalous partial dispersion.

## Focus Mechanism

The production lens is documented as an inner-focusing design with a closest focus distance of 0.28 m [2–3].
Embodiment 4, however, publishes only infinity-focus zoom states. It gives no focusing-group identity, object-distance
table, close spacing, focus travel, magnification state, or adjacent-gap conservation rule.

The data therefore uses the status **NO_INTERNAL_RECONSTRUCTION**. Every infinity/close pair in the zoom variables is
identical. The 0.28 m value is retained as manufacturer metadata, but the model does not claim to reproduce the optical
configuration, effective focal length, pupil behavior, or magnification at that distance. No internal focusing motion is
invented from the product designation alone.

## Aspherical Surfaces

The two aspheres are the outer surfaces of bonded resin layers: 6A on the first element of G2 and 28A in the rear
cemented assembly of G5. The patent uses the standard rotationally symmetric conic equation

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.
$$

Here `K = 0` is a spherical base. The data is unscaled, so no coefficient transformation is applied.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | Verified sd | Polynomial departure at sd |
|---|---:|---:|---:|---:|---:|---:|
| 6A | 0 | +2.3425e−5 | −5.5109e−8 | +1.3114e−10 | 13.2 mm | +0.540527 mm |
| 28A | 0 | −1.9525e−5 | −9.1623e−9 | 0 | 11.2 mm | −0.325314 mm |

The quoted departures are evaluated at the final validated semi-diameters, not at paraxial ray footprints. Surface 6A
has a positive net polynomial departure at the rim after the sixth- and eighth-order terms moderate the positive A4
term. Surface 28A has a negative polynomial departure dominated by its negative A4 term. These profiles are implemented
as thin composite resin layers; they are not treated as separate conventional production elements in the 17-element
count.

## Aperture Stop and Pupil Model

The stop position is a patent fact: it lies 1.41 mm behind surface 22 [1, p. 16]. The data inserts exactly one neutral
`STO` plane and splits D22 into a fixed 1.41 mm front segment plus a rear segment of 2.56, 10.32, or 14.93 mm. The
recombined values remain the published 3.97, 11.73, and 16.34 mm.

The patent gives f/4.1 but no physical iris diameter. The stop opening is therefore a modeled quantity. Exact meridional
Snell tracing consistent with the current data model requires the following semi-diameters at the three zoom states:

| State | Exact modeled stop sd |
|---|---:|
| 17.50 mm | 4.997425 mm |
| 35.00 mm | 6.726249 mm |
| 67.89 mm | 8.885293 mm |

Only the wide-state base value is stored on the authored `STO`; the larger middle and tele openings are derived from the
constant `nominalFno` during zoom construction. These values are modeling results, not dimensions published by the
patent or manufacturer.

## Conditional Expressions

Embodiment 4 satisfies all four patent inequalities when the prescription is evaluated independently [1, p. 16]:

| Condition | Required interval | Table 5 | Computed |
|---|---:|---:|---:|
| $f_1/f_w$ | 5.0 < x < 6.5 | 5.70 | 5.700302 |
| $f_{Rt}/f_t$ | 0.4 < x < 0.55 | 0.47 | 0.469173 |
| $f_4/f_2$ | 2.7 < x < 4.5 | 2.94 | 2.936297 |
| $f_{Bw}/|f_{12w}|$ | 2.0 < x < 2.5 | 2.10 | 2.094930 |

The supporting isolated or combined values are $f_1=+99.7587$ mm, $f_2=-13.9995$ mm, $f_4=-41.1067$ mm,
$f_{12w}=-18.6320$ mm, and $f_{Rt}=+31.8429$ mm. Condition (4) uses the independently computed wide-state back focal
distance rather than merely reproducing the rounded table ratio.

## Verification Summary

Sequential reduced-angle tracing and an independent ABCD multiplication reproduce the three source states within the
precision expected from the rounded patent table:

| State | Computed EFL | Published f | Computed BFD | Published BFD |
|---|---:|---:|---:|---:|
| Wide | 17.500596 mm | 17.50 mm | 39.032799 mm | 39.04 mm |
| Middle | 35.000226 mm | 35.00 mm | 49.448610 mm | 49.45 mm |
| Tele | 67.870290 mm | 67.89 mm | 64.361899 mm | 64.38 mm |

The maximum direct-trace/ABCD component difference is $4.26\times10^{-14}$. Surface-by-surface Petzval summation using
$\phi/(nn')$ gives +0.003914679528 mm⁻¹, corresponding to a signed Petzval radius of −255.448752 mm under
$R_P=-1/P$.

The patent does not publish clear apertures. The authored semi-diameters are modeling inferences: Figure 13 sets the
relative outline, while exact axial and off-axis ray envelopes set the clearance floor. The revised isolated L3 and rear
G5 apertures pass the repository edge-thickness, conic-domain, rim-slope, cross-gap, image-circle, ray-containment, and
render-diagnostic gates at all three zoom states. These dimensions are not presented as patent values.

## Sources

1. Masakazu Saori, “Zoom Lens System,” **US 7,804,652 B2**, especially Figure 17, the equation and conventions on
   page 13, Embodiment 4 on pages 15–16, and Tables 4–5 on page 16.
   https://patents.google.com/patent/US7804652B2/en
2. HOYA Corporation PENTAX Products, “smc PENTAX-DA 17-70mmF4AL[IF] SDM,” press release, June 4, 2008.
   https://www.ricoh-imaging.co.jp/english/news/2008/200814.html
3. Ricoh Imaging, “smc PENTAX-DA 17-70mmF4AL[IF] SDM,” discontinued K-mount product page.
   https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/smcpentax-da17-70/
4. HOYA Optics Europe, “Glass Cross Reference Index,” with six-digit codes and cross-vendor equivalents for HOYA,
   Schott, OHARA, HIKARI, SUMITA, and CDGM.
   https://www.hoyaoptics.eu/glass-cross-reference-index
   The comparison establishes cross-vendor non-uniqueness, not a unique melt assignment.
