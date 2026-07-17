## Patent Reference and Design Identification

**Patent:** US 9,063,253 B2  
**Application Number:** 13/709,945  
**Priority:** JP 2011-271638 and JP 2011-271639, both filed December 12, 2011  
**Filed:** December 10, 2012  
**Granted:** June 23, 2015  
**Inventor:** Nobuyuki Adachi  
**Assignee:** Tamron Co., Ltd.  
**Title:** Imaging Lens  
**Embodiment analyzed:** Embodiment 7 under the second invention; its numerical prescription is identical to Embodiment 1 under the first invention

Embodiment 7 is identified with high confidence as the optical formula associated with the Tamron SP 90mm F/2.8 Di MACRO 1:1 VC USD, Model F004. The identification rests on convergent evidence rather than on an explicit product name in the patent:

1. The patent prescription contains 14 elements in 11 air-separated groups, matching Tamron's published F004 specification.
2. Two elements have $n_d = 1.43700$, $\nu_d = 95.10$, matching HOYA FCD100, and one has $n_d = 1.59282$, $\nu_d = 68.62$, matching HOYA FCD515. This agrees with Tamron's stated use of two XLD elements and one LD element.
3. The patent gives $f = 92.74$ mm and FNo. 2.89 at infinity, consistent with a marketed 90 mm f/2.8 lens.
4. The infinity half-angle of view is $13.12^\circ$, corresponding to a full-frame diagonal image circle of about 43.1 mm.
5. The prescription is tabulated at infinity, 1:2, and 1:1 magnification, and the calculated 1:1 object-to-image distance is 299.31 mm. Tamron publishes a 0.30 m minimum focus distance and 1:1 maximum magnification.
6. The patent uses three independently moving inner groups while the front and rear assemblies remain axially fixed, matching the F004's internal-focus architecture.
7. Embodiment 7 assigns the fifth group to lateral image stabilization. Tamron introduced the F004 with VC in 2012; the Sony A-mount version retained the optical group but omitted the VC actuator because stabilization was provided in the camera body.
8. The priority date immediately precedes the 2012 introduction of Model F004. The later Model F017 did not appear until 2016.
9. No aspherical coefficients are supplied for the embodiment; the prescription is entirely spherical.

The numerical prescription is used without production scaling. Its independently computed infinity focal length is 92.556 mm, the patent's summary table reports 92.74 mm, and the commercial lens is conventionally rounded to 90 mm. Uniformly scaling the prescription to exactly 90 mm would discard the patent's physical dimensions without resolving the patent's own internal numerical inconsistency.

The patent presents the same surfaces twice because it describes two related inventions. Embodiment 1 uses a three-assembly taxonomy: a positive foremost group, a three-subgroup focusing assembly, and a negative rearmost group. Embodiment 7 divides the same prescription into six groups so that the VC group can be identified separately. The six-group taxonomy is used here because it maps more directly to the physical focusing and stabilization functions.

One patent inconsistency remains unresolved. The printed prescription gives surface 4 as $R = -90.2962$ mm, whereas Tables 1 and 2 list $R_{n1} = -92.2729$ mm. Substituting the tabulated value improves agreement with the table's first-group focal length but worsens agreement with the patent's whole-system focal length. The data file therefore preserves the repeated printed prescription value, $-90.2962$ mm, and treats the derived-table entry as a typographical or calculation inconsistency.

## Optical Architecture

The lens is an all-spherical, long-focus macro design with a positive–negative–positive–positive–negative–positive six-group power sequence. It is not a telephoto optical layout in the strict structural sense: the infinity first-surface-to-image track is 158.735 mm and the computed EFL is 92.556 mm, giving a track/EFL ratio of 1.715. A true telephoto construction requires a ratio below 1. The back focal distance is 46.739 mm, or 0.505 times EFL, so the lens is not retrofocus either.

The six groups are:

- **G1, fixed positive front group:** L1–L4, four elements in three air-spaced groups. Computed group focal length: +51.405 mm.
- **G2, moving negative focus group:** L5–L7, three air-spaced elements. Computed group focal length: −37.255 mm.
- **G3, moving positive focus group:** L8 alone. Computed group focal length: +116.219 mm.
- **G4, moving positive focus group:** cemented L9+L10. Computed group focal length: +81.238 mm.
- **G5, fixed negative VC group:** cemented L11+L12. Computed group focal length: −68.674 mm.
- **G6, fixed positive rear group:** L13 and L14, separated by air. Computed group focal length: +149.417 mm.

Under the patent's first-invention taxonomy, G5 and G6 form a combined negative rear assembly with computed focal length −108.033 mm. This distinction matters: the individual VC group is negative, the following fixed group is positive, and their separated combination is negative.

The principal architectural choice is the three-group floating focus system. G2 moves toward the image plane while G3 and G4 move toward the object. The opposite-direction movements redistribute aberration correction through the macro range without moving the heavy front group or changing the external lens length. The fixed stop lies between G2 and G3. G5 remains stationary along the axis but can translate laterally for vibration compensation.

The prescription contains 14 physical elements and 11 air-separated groups. Three pairs are cemented: L2+L3, L9+L10, and L11+L12. The patent's terminal surface 27 is a zero-power reference plane, not a glass element. It is omitted from the data file, and D(27) is folded into the final image-space distance after surface 26.

## Element-by-Element Analysis

The focal length quoted for each physical element is its standalone thick-lens focal length in air. That value should not be confused with the element's in-situ contribution inside a cemented assembly, where the shared interface and neighboring glass change the effective power.

### L1 — Biconvex Positive

$n_d = 1.77250$, $\nu_d = 49.60$. Glass: 773/496 lanthanum glass, catalog-equivalent to OHARA S-LAH66N or HOYA TAF1; vendor is not identifiable from the patent. $f = +111.46$ mm.

L1 is the large front collector. Its high index allows moderate surface curvatures for a fast entrance group, while its Abbe number places it just on the flint side of the conventional $\nu_d = 50$ crown/flint boundary. The element contributes positive power without relying on unusually steep front curvature.

The earlier attribution to one specific vendor glass is not supportable from $n_d$ and $\nu_d$ alone because current OHARA and HOYA catalogs both contain matching 773/496 glasses. The data file therefore records the equivalence instead of asserting a unique manufacturer.

### L2 + L3 — Cemented XLD/Dense-Flint Doublet

**L2:** $n_d = 1.43700$, $\nu_d = 95.10$. Glass: HOYA FCD100. Standalone $f = +86.20$ mm.  
**L3:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: HOYA FDS90. Standalone $f = -100.96$ mm.

L2 and L3 form a weakly positive cemented doublet with an in-situ assembly focal length of +485.68 mm. The very high Abbe number of FCD100 and very low Abbe number of FDS90 provide a large dispersion contrast. The pair therefore supplies strong chromatic balancing while contributing relatively little net system power.

FCD100 is the first of the two XLD-class elements identified by Tamron. FDS90 is an exact public-catalog match to the patent's $n_d$/$\nu_d$ pair. The patent publishes no partial-dispersion or line-index data, so the analysis does not assign a numerical $\Delta P_{gF}$ to either element. The anomalous-dispersion role of FCD100 follows from the manufacturer's glass classification, not from a patent-supplied spectral trace.

### L4 — Positive Meniscus, Convex to Object

$n_d = 1.43700$, $\nu_d = 95.10$. Glass: HOYA FCD100. $f = +110.14$ mm.

L4 is the second XLD element and the final element of the fixed front group. Its positive meniscus form adds convergence while limiting the angular change at the weak rear surface. Placing a second FCD100 element after the cemented doublet distributes low-dispersion correction across the entire front group rather than concentrating it at one cemented interface.

L1, L2, and L4 are the three convex elements used in the patent's average-index and average-Abbe conditions. Their computed averages are $n_{d1} = 1.54883$ and $\nu_{d1} = 79.933$.

### L5 — Negative Meniscus, Convex to Object

$n_d = 1.81600$, $\nu_d = 46.62$. Glass: OHARA S-LAH59. $f = -49.92$ mm.

L5 begins the net-negative G2 focus group. Its high index provides substantial negative power with manageable curvature. Because G2 translates by 18.049 mm between infinity and 1:1, L5 encounters one of the largest changes in ray height and conjugate condition in the system.

The glass is an exact current-catalog match. Its $\nu_d$ places it in dense lanthanum-flint territory despite the family name sometimes being loosely associated with crowns.

### L6 — Biconcave Negative

$n_d = 1.48749$, $\nu_d = 70.24$. Glass: OHARA S-FSL 5; the current catalog lists $\nu_d = 70.23$. $f = -44.05$ mm.

L6 adds strong negative power with low refractive index and low dispersion. It counterbalances the high-index L5 and high-dispersion L7 within G2. The small one-hundredth difference in Abbe number is consistent with catalog revision or rounding and does not justify substituting a different glass.

Its negative power is significant, but the element's low index reduces its surface-by-surface Petzval contribution relative to a similarly curved high-index element.

### L7 — Biconvex Positive

$n_d = 1.84666$, $\nu_d = 23.78$. Glass: HOYA FDS90. $f = +69.67$ mm.

L7 is a positive dense-flint element inside the net-negative G2 group. Its positive power moderates the group's total divergence, while its high dispersion supplies chromatic counterweight to L5 and especially the low-dispersion L6. The complete G2 group has computed focal length −37.255 mm.

The rear radius is very weak, so L7 is nearly plano-convex in power distribution even though both radii are finite.

### Aperture Stop

The stop is fixed axially between G2 and G3. The data file uses an infinity-state stop semi-diameter of 13.9336 mm, obtained by paraxially calibrating the entrance pupil to the patent's FNo. 2.89. The patent states that the physical stop diameter is preferably reduced toward close focus, but it does not tabulate the diaphragm diameter at the three focus states.

D(14) is the axial distance from the stop to L8; it is not a diaphragm diameter. It decreases from 14.000 mm at infinity to 9.2987 mm at 1:2 and 1.700 mm at 1:1 because G3 moves toward the object. The data file models that axial movement but keeps one physical stop size. Consequently, the patent's close-focus F-numbers are documented here rather than represented as a focus-dependent diaphragm schedule.

### L8 — Biconvex Positive, Single-Element G3

$n_d = 1.59282$, $\nu_d = 68.62$. Glass: HOYA FCD515. $f = +116.22$ mm.

L8 is the sole element in G3 and the single LD element in Tamron's published special-glass count. Its position immediately behind the aperture stop exposes it to a comparatively broad beam. Using one moderate-index, low-dispersion element keeps the moving mass low while satisfying the patent's manufacturing-sensitivity and chromatic conditions:

$$55 < \nu_{d3} < 75, \qquad 1.55 < n_{d3} < 1.65.$$

The selected values, 68.62 and 1.59282, lie near the middle of both ranges. The patent's general description allows G3 to move axially forward and backward in different embodiments, but the actual Embodiment 7 spacing table is monotonic: L8 moves 12.300 mm toward the object from infinity to 1:1. The slight reversal in D(16) near 1:2 is a change in separation between G3 and G4, not a reversal of G3 itself.

### L9 + L10 — Cemented Positive G4 Doublet

**L9:** $n_d = 1.72825$, $\nu_d = 28.46$. Glass: OHARA S-TIH10. Standalone $f = -58.40$ mm.  
**L10:** $n_d = 1.67790$, $\nu_d = 55.35$. Glass: OHARA S-LAL12Q. Standalone $f = +34.44$ mm.

The cemented pair has computed in-situ focal length +81.238 mm. L9 is a negative meniscus and L10 is a positive biconvex element. The patent specifically favors a front negative element cemented to a rear positive element in this group because the arrangement reduces focus-dependent curvature-of-field variation.

G4 moves 17.570 mm toward the object from infinity to 1:1, opposite G2's imageward travel. The substantial positive power and counter-directed displacement give the floating system another independent degree of freedom for controlling field curvature, spherical aberration, and coma at macro conjugates.

S-LAL12Q is used rather than the older S-LAL12 label because the current OHARA catalog's Q variant matches both $n_d = 1.67790$ and $\nu_d = 55.35$.

### L11 + L12 — Cemented Negative VC Doublet

**L11:** $n_d = 1.58913$, $\nu_d = 61.13$. Glass: OHARA S-BAL35; the current catalog lists $\nu_d = 61.14$. Standalone $f = -41.25$ mm.  
**L12:** $n_d = 1.80518$, $\nu_d = 25.42$. Glass: OHARA S-TIH 6. Standalone $f = +94.26$ mm.

Together the two elements form a net-negative group with focal length −68.674 mm. G5 remains axially fixed during focusing but translates almost perpendicular to the optical axis for vibration compensation. A cemented doublet provides chromatic correction in a compact moving package and avoids an internal air gap that would increase the decentered assembly's length and mass.

The patent's stabilization table gives a 0.490 mm lateral displacement at infinity for correction of a $0.3^\circ$ camera rotation. The value is a patent design point, not a claim about the production actuator's full mechanical travel.

### L13 — Biconvex Positive

$n_d = 1.72000$, $\nu_d = 50.23$. Glass: OHARA S-LAL10. $f = +45.16$ mm.

L13 supplies the principal positive power in the fixed rear G6 group. It reconverges the bundle after the negative VC group and works with L14 to establish the final back focus and field behavior.

Its Abbe number lies just above the conventional crown/flint boundary, making it a high-index lanthanum crown in the simple dispersion classification used here.

### L14 — Biconcave Negative

$n_d = 1.84666$, $\nu_d = 23.78$. Glass: HOYA FDS90. $f = -52.65$ mm.

L14 is the rearmost physical element. The patent deliberately places a concave element nearest the image plane, separated from L13 by 6.0015 mm of air. This spacing and the element focal length enter conditional expression (7), which controls back focus, marginal incidence angle, production adjustability, and sensitivity to spacing error.

The element contributes negative field-curvature and chromatic power near the image plane. It should not be described simply as a field flattener in isolation: its actual function is coupled to L13, the 6.0015 mm air gap, and the preceding negative VC group.

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$; it does not name glass vendors. Identifications therefore use current public manufacturer catalogs and are graded according to whether the numeric pair is unique.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog identification | Confidence | Function |
|---|---:|---:|---|---|---|
| L1 | 1.77250 | 49.60 | OHARA S-LAH66N / HOYA TAF1 equivalent | Ambiguous vendor | High-index front positive |
| L2 | 1.43700 | 95.10 | HOYA FCD100 | Exact | XLD positive in D1 |
| L3 | 1.84666 | 23.78 | HOYA FDS90 | Exact | Dense-flint negative in D1 |
| L4 | 1.43700 | 95.10 | HOYA FCD100 | Exact | Second XLD positive |
| L5 | 1.81600 | 46.62 | OHARA S-LAH59 | Exact | High-index negative |
| L6 | 1.48749 | 70.24 | OHARA S-FSL 5 | Near-exact; catalog $\nu_d=70.23$ | Low-dispersion negative |
| L7 | 1.84666 | 23.78 | HOYA FDS90 | Exact | Positive dense-flint balance |
| L8 | 1.59282 | 68.62 | HOYA FCD515 | Exact | LD moving positive |
| L9 | 1.72825 | 28.46 | OHARA S-TIH10 | Exact | Negative member of D2 |
| L10 | 1.67790 | 55.35 | OHARA S-LAL12Q | Exact | Positive member of D2 |
| L11 | 1.58913 | 61.13 | OHARA S-BAL35 | Near-exact; catalog $\nu_d=61.14$ | Negative member of VC D3 |
| L12 | 1.80518 | 25.42 | OHARA S-TIH 6 | Exact | Positive member of VC D3 |
| L13 | 1.72000 | 50.23 | OHARA S-LAL10 | Exact | Rear positive |
| L14 | 1.84666 | 23.78 | HOYA FDS90 | Exact | Rear negative |

The palette contains seven elements with $\nu_d < 50$ and seven with $\nu_d \ge 50$. This numerical crown/flint split is more informative than family names alone: L1 and L5 remain flint-class by dispersion despite being lanthanum-family glasses.

The data file includes current OHARA C-, F-, and g-line indices and $\Delta P_{gF}$ values for the unambiguous OHARA matches. Those fields come from the public catalog rather than from the patent. HOYA glass names are retained without invented line indices when only the $n_d$/$\nu_d$ match was independently available.

## Focus Mechanism

The lens uses three-group floating inner focus. G1, G5, and G6 remain fixed along the optical axis. G2, G3, and G4 move independently while the stop stays at a fixed axial station.

| Quantity | Infinity | 1:2 | 1:1 | Infinity-to-1:1 change |
|---|---:|---:|---:|---:|
| D(7), G1-to-G2 gap | 1.2000 mm | 9.8415 mm | 19.2488 mm | +18.0488 mm |
| D(13), G2-to-stop gap | 20.0500 mm | 11.4085 mm | 2.0012 mm | −18.0488 mm |
| D(14), stop-to-G3 gap | 14.0000 mm | 9.2987 mm | 1.7000 mm | −12.3000 mm |
| D(16), G3-to-G4 gap | 6.7201 mm | 1.0992 mm | 1.4506 mm | −5.2695 mm |
| D(19), G4-to-G5 gap | 1.7996 mm | 12.1217 mm | 19.3690 mm | +17.5694 mm |
| Folded final BFD | 46.7393 mm | 46.7793 mm | 46.7641 mm | +0.0248 mm |

D(7)+D(13) remains 21.2500 mm in all three states, proving that G2 translates 18.0488 mm imageward while the stop remains fixed. G3's position is controlled directly by D(14), which decreases monotonically; G3 therefore moves 12.3000 mm objectward. The position of G4 relative to the stop is D(14) plus the L8 center thickness plus D(16), giving 17.5695 mm of objectward travel. D(19) increases by the same amount, keeping G5 fixed.

The non-monotonic D(16) values do not mean G3 reverses direction. They record the changing separation of two independently moving groups. At 1:2, G4 has approached G3 more rapidly than at the final 1:1 state, after which their separation increases slightly.

The independently traced conjugates are:

| State | Computed EFL | Object distance from first surface | Object-to-image distance | Paraxial magnification |
|---|---:|---:|---:|---:|
| Infinity | 92.5564 mm | effectively infinite | — | — |
| 1:2 table state | 81.7477 mm | 217.3499 mm | 376.1247 mm | −0.49428× |
| 1:1 table state | 64.9771 mm | 140.5468 mm | 299.3064 mm | −1.00033× |

The 1:1 object-to-image distance agrees with Tamron's 0.30 m published minimum focus distance. The calculated distance from the first optical surface to the object is 140.55 mm; Tamron publishes a 139 mm working distance. The small difference is consistent with measuring working distance from the mechanical front of the lens rather than the first surface vertex.

The patent's total first-surface-to-image track is nearly constant: 158.7349 mm at infinity, 158.7748 mm at 1:2, and 158.7596 mm at 1:1 after D(27) is folded into the image-space distance. The external barrel therefore need not extend during focusing.

## Image Stabilization

G5, the cemented L11+L12 doublet, is the VC group. It remains fixed along the optical axis throughout focus but is shifted laterally to counter image motion. The patent's second-invention arrangement isolates this group from the three focus groups, avoiding a coupled axial/decenter mechanism.

For Embodiment 7, the patent reports a 0.490 mm group displacement at infinity to compensate a $0.3^\circ$ angular disturbance. Because the group has net negative power, lateral translation changes the chief-ray direction and shifts the image in the opposite sense to camera motion.

The data format is rotationally symmetric and does not encode a decentered operating state. G5 is therefore stored centered, with its VC role documented through the group annotation and this analysis. The Sony A-mount production version used the same optical formula without an active lens-based VC mechanism.

## Chromatic Correction Strategy

The front group carries the primary special-dispersion correction. L2 and L4 use FCD100 at $\nu_d=95.10$, while L3 uses FDS90 at $\nu_d=23.78$. The very large Abbe-number contrast in the L2+L3 cemented pair provides strong primary chromatic correction, and the separate L4 distributes low-dispersion positive power farther through G1.

L8 adds a moderate-dispersion LD glass immediately behind the stop. Its role is not equivalent to the two XLD elements: its $\nu_d=68.62$ is much lower than FCD100's 95.10, and the patent uses it partly to balance chromatic correction against surface-curvature and manufacturing-sensitivity constraints in the large stop-adjacent beam.

FDS90 appears at three separated stations: L3 in the front cemented doublet, L7 in the moving negative focus group, and L14 near the image plane. This distribution lets high-dispersion positive and negative powers participate in chromatic balance as the internal groups change position.

The patent states a target of no more than 0.02 mm chromatic aberration of magnification under its specified close-focus test and reports 0.018 mm for the selected prescription. That is a patent finite-ray result. The present paraxial verification confirms the first-order prescription and glass dispersion data but does not independently reproduce the patent's full finite-ray lateral-color plot.

The design should therefore be described as strongly chromatically corrected, not as proven apochromatic solely from $n_d$ and $\nu_d$. Apochromatic classification would require wavelength-dependent performance criteria or complete spectral ray tracing beyond the patent's Abbe-only prescription table.

## Conditional Expressions

The patent defines seven conditions. Values below use the printed prescription and independently computed first-order focal lengths. Where the patent's derived table uses its inconsistent $R_{n1}$ value, both figures are shown.

| Condition | Required range | Verified value | Result |
|---|---:|---:|---|
| $(R_{n1}-R_{n2})/(R_{n1}+R_{n2})$ | $<0$ | −1.11866 from printed $R_{n1}=-90.2962$ mm; patent table −1.121 | Satisfied |
| $n_{d1}$ | $<1.6$ | 1.54883 | Satisfied |
| $\nu_{d1}$ | $>67.5$ | 79.933 | Satisfied |
| $\nu_{d3}$ | $55<\nu_{d3}<75$ | 68.62 | Satisfied |
| $n_{d3}$ | $1.55<n_{d3}<1.65$ | 1.59282 | Satisfied |
| $f_2/f$ | $-0.58<f_2/f<-0.36$ | −0.40251 | Satisfied |
| $f_4/f_3$ | $0.28<f_4/f_3<1.95$ | 0.69901 | Satisfied |
| $D/F_R$ | $-0.23<D/F_R<-0.01$ | −0.11399 | Satisfied |

For the first condition, $R_{n2}=+1612.2365$ mm. The negative result constrains the form of the front-group concave element L3. The second condition fixes the average glass properties of L1, L2, and L4. Conditions (3) and (4) govern L8. Condition (5) constrains the power and travel balance of the negative G2 focus group. Condition (6) balances the two positive moving groups. Condition (7) uses $D=6.0015$ mm and the standalone focal length of L14, $F_R=-52.6485$ mm.

## Verification Summary

All load-bearing first-order quantities were independently recalculated with a Python reduced-angle ABCD trace using the printed prescription. The surface-by-surface Petzval sum used $\sum \phi/(n n')$, not an element-level thin-lens approximation.

| Quantity | Patent | Independently computed | Difference / note |
|---|---:|---:|---|
| EFL, infinity | 92.74 mm | 92.5564 mm | −0.1836 mm (−0.198%) |
| EFL, 1:2 | 81.62 mm | 81.7477 mm | +0.1277 mm (+0.156%) |
| EFL, 1:1 | 64.66 mm | 64.9771 mm | +0.3171 mm (+0.490%) |
| G1 focal length | 51.173 mm | 51.4047 mm | Printed-surface inconsistency affects G1 |
| G2 focal length | −37.255 mm | −37.2553 mm | Agreement within 0.0003 mm |
| G3 focal length | 116.218 mm | 116.2191 mm | Agreement within 0.0012 mm |
| G4 focal length | 81.567 mm | 81.2385 mm | Patent table differs by 0.329 mm |
| G5 VC focal length | −68.674 mm | −68.6736 mm | Agreement within 0.0004 mm |
| G6 focal length | 149.42 mm | 149.4167 mm | Agreement within 0.0034 mm |
| Combined G5+G6 rear assembly | −108.031 mm | −108.0333 mm | Agreement within 0.0023 mm |
| Infinity first-surface-to-image track | 158.72 mm | 158.7349 mm | +0.0149 mm |
| 1:1 object-to-image distance | — | 299.3064 mm | Matches 0.30 m production MFD |
| 1:1 first-surface working distance | — | 140.5468 mm | Near 139 mm manufacturer figure |
| Petzval sum | — | +0.00150791 mm⁻¹ | Surface-by-surface |
| Petzval radius | — | −663.17 mm | Sign follows image-space convention used here |

The EFL differences are not attributed to “finite-ray versus paraxial” behavior. The patent's tabulated focal lengths are themselves first-order quantities. The discrepancies instead reflect rounding and the unresolved surface-4/derived-table inconsistency. The printed prescription remains internally coherent enough to reproduce all focus states, group-power signs, 1:1 magnification, and total track to the stated tolerances.

The inferred semi-diameters were separately checked against the project's rendering constraints. The most restrictive results are:

- minimum computed element edge thickness: 0.5168 mm;
- maximum element front/rear semi-diameter ratio: 1.1719;
- maximum $sd/|R|$: 0.7013;
- maximum signed cross-gap sag intrusion: 0.8794 of the air gap, at surfaces 9–10;
- front semi-diameter: 26.5 mm, within the 29 mm radius of the 58 mm filter thread.

No cover glass or terminal dummy plate is included. Surface 26's stored image-space distance is the patent's 44.5749 mm air distance plus D(27): 46.7393 mm at infinity and 46.7641 mm at 1:1.

## Design Heritage and Context

Tamron's 90 mm macro line predates Model F004 by several decades, but the F004 prescription is not a minor extension of the earlier unit-focusing manual-focus design. The patent combines a fixed front group, three independently moving focus groups, a separate laterally movable VC doublet, two XLD elements, and one LD element. Those choices address the practical requirements of 1:1 internal focusing, autofocus moving mass, chromatic correction, and stabilization in one system.

Model F004 was introduced in 2012 with VC and USD autofocus. Tamron replaced it in 2016 with Model F017, which retained the 90 mm f/2.8, 14-element/11-group, 1:1 concept but revised the product implementation and exterior features. The patent timing, special-glass count, focus architecture, and stabilization group align with F004 rather than the later lens.

## Sources

- US 9,063,253 B2, Nobuyuki Adachi / Tamron Co., Ltd., “Imaging Lens,” granted June 23, 2015. Prescription tables for Embodiments 1 and 7; Tables 1 and 2; Figures 1 and 25–32.
- Tamron Co., Ltd., official archived product specification for SP 90mm F/2.8 Di MACRO 1:1 VC USD, Model F004.
- Tamron Co., Ltd., official product-history chronology for the 2012 F004 and 2016 F017.
- HOYA Corporation, official optical-glass code and property listings for FCD100, FCD515, FDS90, and TAF1.
- OHARA Inc., Optical Glass Data, catalog release April 2, 2026, for S-LAH66N, S-LAH59, S-FSL 5, S-TIH10, S-LAL12Q, S-BAL35, S-TIH 6, and S-LAL10.
