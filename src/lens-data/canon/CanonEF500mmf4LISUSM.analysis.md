# CANON EF 500mm f/4 L IS USM

## Patent Reference and Design Identification

**Patent:** US 6,115,188 A  
**Application Number:** 09/172,164  
**Priority:** 1997-10-16; 1997-12-01; 1998-09-11  
**Filed:** 1998-10-14  
**Granted:** 2000-09-05  
**Inventors:** Akihiro Nishio; Hideki Ogawa; Makoto Misaka  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** *Optical System and Optical Apparatus Having the Same*  
**Embodiment analyzed:** Numerical Example 24

Numerical Example 24 is the fixed prescription used for this model. The patent gives a design focal length of
490.56 mm, an f-number of 4.1, and a full field angle of 5.0°. Figure 87 identifies the front protection plate HG,
the three-part first lens unit L1, the axially movable focus unit L2, aperture stop SP, the three-part third lens unit
L3, transverse motion of L3b for image stabilization, rear filter FL, flare cutter FC, and image plane IP. Figure 91
shows the corresponding aberration plots at Fno/4.1 and a 2.5° half-field.

The correlation to the production Canon EF 500mm f/4L IS USM is based on convergent evidence rather than on focal
length alone:

1. The patent's 490.56 mm, f/4.1, 5.0° design is consistent with a marketed 500 mm f/4 full-frame supertelephoto while
   preserving the distinction between exact design and rounded product specifications.
2. The raw Example 24 path contains 17 media elements in 13 air-separated groups when HG and FL are counted. Canon
   independently specifies 17 elements in 13 groups and states that the protection glass and rear filter are included
   in that count.
3. The prescription contains two elements at the 1.496999 / 81.5 low-dispersion coordinate and one unique
   1.433870 / 95.1 coordinate. Canon independently specifies two UD elements and one fluorite element in the production
   lens. The assignment of these patent coordinates to the production special elements is a correlation inference, not
   a material declaration by the patent.
4. The patent places focusing in the compact negative L2 unit and stabilization in the transversely movable L3b
   subunit. Canon independently identifies image stabilization and a lightweight focusing-lens group as product
   features.
5. The patent's 1997-1998 priority/filing sequence precedes Canon's July 1999 market introduction.

Canon does not identify US 6,115,188 as the production prescription on the product page. The production-to-patent link
therefore remains an author/modeling correlation supported by the independent product specifications above.

The data file uses the native patent scale. No dimensional scale factor is applied. The marketed values are stored as
500 mm and f/4, while the design values remain 490.56 mm and f/4.1.

## Optical Architecture

Example 24 is a positive-negative-positive inner-focus telephoto system. The first unit L1 is itself divided into a
positive front subunit L1a, a negative middle subunit L1b, and a positive rear subunit L1c. The negative L2 unit moves
axially for focus. The third unit L3 is divided into positive L3a, negative L3b, and positive L3c, with L3b moving
transversely for image stabilization.

The physical Example 24 design contains 17 elements in 13 air-separated groups when the plane HG protection plate and
plane FL rear filter are counted, matching Canon's published production count. The active LensVisualizer prescription
contains 15 powered elements in 11 air-separated groups because HG and FL are omitted from the ordinary active model, as
is the inactive FC flare-cutter plane. The structured physical element/group metadata therefore remains 17/13 while the
active arrays remain 15/11.

The computed net focal lengths below describe the actual multi-element subunits in air; they are not simple sums of the
standalone element powers listed later. The final row describes the complete active prescription.

| Unit | Construction | Net focal length (mm) | Function in the system |
|---|---|---:|---|
| L1a | 1 positive element | +344.3304 | Front collection and initial convergence |
| L1b | 2 air-spaced elements | -939.5798 | Weak net-negative correction within L1 |
| L1c | 2 air-spaced elements | +346.6979 | Restores positive power behind L1b |
| L1 overall | L1a + L1b + L1c | +225.5145 | Strong positive front unit |
| L2 | cemented doublet | -198.0387 | Axially translating inner-focus unit |
| L3a | cemented doublet | +152.7805 | Converges the beam before L3b |
| L3b | cemented doublet + singlet | -43.9002 | Negative transverse image-stabilization subunit |
| L3c | singlet + cemented doublet | +68.6765 | Positive rear subunit |
| L3 overall | L3a + L3b + L3c | +3970.7843 | Weak net-positive rear unit after internal cancellation |
| Complete active model | L1 + L2 + L3 | +491.3568 | Full-system Gaussian EFL from the rounded arrays |

The complete modeled track from the first powered surface to the image plane is 403.820871512 mm. Relative to the
computed EFL of 491.356789096 mm, the track ratio is 0.821848564; under the project definition this is a telephoto
layout. The modeled final rear distance is well below the EFL, so the design is not retrofocus.

The omitted rear filter is not simply deleted from the axial reference. Its 2.20 mm glass thickness is replaced by its
air-equivalent optical path, giving a final surface-29-to-image spacing of 101.730871512 mm. The omitted front
protection
plate is likewise accounted for when the finite-object reference is normalized for the reconstructed close-focus state.

The patent publishes the aperture-stop location explicitly as surface 16. The model therefore does not infer the stop
position. It does infer the physical stop semi-diameter, because Example 24 gives no stop diameter; the f/4.1 pupil
calibration gives 17.719982840 mm.

All powered surfaces in Example 24 are spherical. There are no aspherical or diffractive surfaces in the selected
embodiment.

## Element-by-Element Analysis

The focal length on each element line is the standalone thick-element focal length in air stored by the final data file.
Where elements form a cemented or air-spaced functional unit, the unit's net power is stated separately; this avoids
confusing individual element power with the behavior of the compound group.

### L1a — Biconvex Positive

**nd = 1.496999, νd = 81.5. Glass: 497816 — low-dispersion / UD coordinate class. f = +344.3304 mm.**

L1a is the single-element positive front subunit identified as L1a in the patent's third embodiment. It supplies the
first strong convergence while using the same low-dispersion coordinate that appears again in L1b-1. The production
correlation maps those two occurrences to Canon's published pair of UD elements; the patent itself gives only refractive
index and Abbe number.

### L1b-1 — Biconvex Positive

**nd = 1.496999, νd = 81.5. Glass: 497816 — low-dispersion / UD coordinate class. f = +230.7498 mm.**

This positive element begins L1b. Its standalone positive power is paired with the following high-index negative
member. The two elements are air-spaced, and their combined subunit focal length is -939.5798 mm; the subunit is
therefore only weakly negative despite the much stronger standalone powers of its constituents.

### L1b-2 — Biconcave Negative

**nd = 1.834807, νd = 42.7. Glass: 835427 — lanthanum dense-crown coordinate class. f = -174.6660 mm.**

L1b-2 supplies the negative power that reverses the sign of the L1b subunit. In the architecture described by the
patent, the negative middle subunit helps moderate the aberration burden created by the positive front subunit while
allowing L1 as a whole to remain strongly positive.

### L1c-1 — Biconvex Positive

**nd = 1.433870, νd = 95.1. Glass: Fluorite (CaF2; manufacturer-correlated crystal). f = +217.8146 mm.**

This is the unique extremely low-index, high-Abbe coordinate in Example 24. The patent does not name the material as
fluorite, but Canon states that the production lens contains one fluorite element; the production correlation therefore
assigns that identity to L1c-1. The element provides strong positive power in the rear part of L1 while minimizing the
dispersion associated with that positive contribution.

### L1c-2 — Negative Meniscus

**nd = 1.516330, νd = 64.1. Glass: 516641 — S-BSL7 / K-BK7 coordinate class. f = -488.4803 mm.**

L1c-2 is a weak negative meniscus following the fluorite-correlated positive element. The pair is air-spaced and forms a
net-positive L1c subunit with a focal length of +346.6979 mm. Its negative standalone power tempers the positive
contribution without changing the sign of L1c.

### L2-1 — Biconvex Positive

**nd = 1.805181, νd = 25.4. Glass: 805254 — dense-flint coordinate class. f = +209.1537 mm.**

L2-1 is the positive front member of the cemented focusing doublet. Its relatively high index and low Abbe number are
paired directly with the following negative element at the cemented interface.

### L2-2 — Biconcave Negative

**nd = 1.834807, νd = 42.7. Glass: 835427 — lanthanum dense-crown coordinate class. f = -100.9907 mm.**

L2-2 is the stronger negative member of the cemented pair. The completed L2 doublet has a net focal length of
-198.0387 mm. In the complete system this compact negative unit lies in a converging beam and translates toward the
image side as object distance decreases; its in-situ role is therefore governed by both its negative group power and its
position between the positive L1 and L3 units.

### L3a-1 — Negative Meniscus

**nd = 1.846658, νd = 23.9. Glass: 847239 — dense-flint coordinate class. f = -72.4610 mm.**

L3a-1 is the negative front member of the first rear cemented doublet. Its strong standalone negative power should not
be read as the sign of the compound group: the cemented partner that follows is still stronger in positive power.

### L3a-2 — Biconvex Positive

**nd = 1.834807, νd = 42.7. Glass: 835427 — lanthanum dense-crown coordinate class. f = +49.0812 mm.**

L3a-2 converts the L3a cemented pair to a net-positive subunit with a focal length of +152.7805 mm. The patent's design
logic places this positive subunit ahead of the transverse stabilizer so that the beam is further converged before it
reaches L3b.

### L3b-1 — Biconvex Positive

**nd = 1.846658, νd = 23.9. Glass: 847239 — dense-flint coordinate class. f = +77.3004 mm.**

L3b-1 is the positive member at the front of the image-stabilization subunit. It is cemented to L3b-2, but that cemented
pair is followed by an additional negative singlet; the behavior of the stabilization unit therefore cannot be inferred
from the first doublet alone.

### L3b-2 — Biconcave Negative

**nd = 1.677900, νd = 55.3. Glass: 678553 — lanthanum crown coordinate class. f = -48.0730 mm.**

L3b-2 is the negative cemented partner to L3b-1. Together with L3b-3, it makes the complete L3b stabilization subunit
net negative.

### L3b-3 — Biconcave Negative

**nd = 1.733997, νd = 51.5. Glass: 734515 — lanthanum crown coordinate class. f = -65.4005 mm.**

L3b-3 is an air-spaced negative singlet behind the cemented pair. The complete L3b subunit has a net focal length of
-43.9002 mm. The patent uses this negative subunit as the transversely movable image-displacement group rather than as
an axial focusing group.

### L3c-1 — Biconvex Positive

**nd = 1.696797, νd = 55.5. Glass: 697555 — lanthanum crown coordinate class. f = +151.3467 mm.**

L3c-1 begins the final positive subunit. It is followed by a cemented positive/negative pair, so the rear unit
distributes
positive power across more than one positive element rather than concentrating it in a single surface pair.

### L3c-2 — Biconvex Positive

**nd = 1.517417, νd = 52.4. Glass: 517524 — crown coordinate class. f = +61.7463 mm.**

L3c-2 is the strongest standalone positive element in the final cemented pair. Its rear surface is the cemented junction
to L3c-3.

### L3c-3 — Negative Meniscus

**nd = 1.720000, νd = 43.7. Glass: 720437 — legacy S-LAM52 / H-LaF62 coordinate class. f = -118.8387 mm.**

L3c-3 is the negative cemented partner that moderates the strong positive L3c-2. The entire L3c subunit remains strongly
positive at +68.6765 mm. The final data file deliberately retains the legacy coordinate-class wording rather than
substituting the current S-LAL10 family, whose Abbe number does not match the patent coordinate.

## Glass Identification and Selection

The patent labels its material values as `N` and `ν` without explicitly naming the spectral reference line. The model
treats them as d-line `nd`/`νd` coordinates because the values round-trip to authoritative d-line glass coordinates and
Figure 91 explicitly plots d-, C-, F-, and g-line aberrations. This is a wavelength-convention inference, not an
explicit
patent statement. The data file therefore keeps conservative glass-class labels rather than supplier assertions. A
cross-vendor catalog audit checked the coordinates against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita
resources and kept the prescription values unchanged.

| Data-file glass annotation | nd | νd | Elements |
|---|---:|---:|---|
| 497816 — low-dispersion / UD coordinate class | 1.496999 | 81.5 | L1a, L1b-1 |
| 835427 — lanthanum dense-crown coordinate class | 1.834807 | 42.7 | L1b-2, L2-2, L3a-2 |
| Fluorite (CaF2; manufacturer-correlated crystal) | 1.433870 | 95.1 | L1c-1 |
| 516641 — S-BSL7 / K-BK7 coordinate class | 1.516330 | 64.1 | L1c-2 |
| 805254 — dense-flint coordinate class | 1.805181 | 25.4 | L2-1 |
| 847239 — dense-flint coordinate class | 1.846658 | 23.9 | L3a-1, L3b-1 |
| 678553 — lanthanum crown coordinate class | 1.677900 | 55.3 | L3b-2 |
| 734515 — lanthanum crown coordinate class | 1.733997 | 51.5 | L3b-3 |
| 697555 — lanthanum crown coordinate class | 1.696797 | 55.5 | L3c-1 |
| 517524 — crown coordinate class | 1.517417 | 52.4 | L3c-2 |
| 720437 — legacy S-LAM52 / H-LaF62 coordinate class | 1.720000 | 43.7 | L3c-3 |

Several six-digit coordinates have very close current catalog anchors. For example, OHARA publicly lists 497816 as
S-FPL51 at nd = 1.49700 and νd = 81.54, 835427 as S-LAH55V at nd = 1.83481 and νd = 42.73, and 805254 as S-TIH6 at
nd = 1.80518 and νd = 25.42. These are useful coordinate checks, but they do not establish which supplier or exact melt
Canon used in the production lens.

Example 24 does not publish per-element nC, nF, ng, PgF, or dPgF values. The data file therefore does not author those
fields from catalog candidates. No apochromatic or anomalous-partial-dispersion claim is made from nd/νd alone.

## Focus Mechanism

The patent explicitly makes L2 the axial focusing unit and states that it moves toward the image side as the object
distance decreases. Numerical Example 24 does not, however, publish a finite-object spacing row. The data file therefore
uses a **CONSTRAINED_RECONSTRUCTION**, not a purported patent-published close-focus state.

The reconstruction has one mechanical degree of freedom: translating the cemented L2 doublet changes only the air gaps
immediately before and after it while preserving their sum.

| Gap | Infinity (mm) | Reconstructed close (mm) | Change (mm) |
|---|---:|---:|---:|
| Surface 12 / L2 front gap | 20.520000000 | 37.353981615 | +16.833981615 |
| Surface 15 / L2 rear gap | 93.550000000 | 76.716018385 | -16.833981615 |
| Sum | 114.070000000 | 114.070000000 | 0 |

The single external scalar constraint is Canon's marketed 4.5 m closest focusing distance, measured to the focal plane.
After normalizing the omitted HG and FL plates to the active model's reference planes, the stored close-focus distance
is
4.497548307 m. Recalculation from the final arrays gives a close-focus lateral magnification of -0.121615195, whose
absolute value is consistent with Canon's rounded 0.12× product specification.

No additional floating motion is reconstructed. In particular, L3b is not moved axially with focus; its patent-defined
motion is transverse and belongs to image stabilization.

## Chromatic Correction Strategy

The chromatic strategy is visible first in the distribution of Abbe numbers rather than in any claimed apochromatic
classification. The two 1.496999 / 81.5 positive elements occur in L1a and L1b, while the unique 1.433870 / 95.1
positive
element occurs in L1c. Against these low-dispersion positive powers, the design uses higher-index, lower-Abbe negative
partners in L1b and the focus/rear groups.

Canon independently states that the production lens uses two UD elements and one fluorite element. The production
correlation maps those three special elements to the two 497816-class positives and the unique L1c-1 coordinate. That
mapping is consistent with the count and optical position, but it remains a correlation inference because the patent
prescription itself supplies only N and ν values.

The patent's conditions 22-25 specifically constrain the index and Abbe number of the positive elements in L1a and L1b.
Those conditions are satisfied by the authored coordinates. Because no element-level line indices or partial-dispersion
numbers are present in the patent, the analysis does not infer secondary-spectrum performance from catalog substitutes.

## Conditional Expressions

The third embodiment defines conditions 18-29 for the L1 subunits, the L2 focus unit, and the L3 subunits. The table
below uses the narrowed preferred bands and values recomputed from the rounded Example 24 prescription. Ratios use the
patent's stated f = 490.56 mm as the normalization, matching the patent's condition table convention.

| Condition | Quantity | Recomputed value | Preferred band | Result |
|---|---|---:|---|---|
| 18a | f1a / f | 0.701913 | 0.5 < x < 0.9 | Pass |
| 19a | D1ab / f | 0.099580 | 0.05 < x < 0.11 | Pass |
| 20a | \|f1b / f\| | 1.915321 | 1.2 < x < 2.5 | Pass |
| 21a | f1c / f | 0.706739 | 0.55 < x < 1.0 | Pass |
| 22a | ν1ap | 81.5 | x > 80 | Pass |
| 23a | N1ap | 1.496999 | x > 1.49 | Pass |
| 24a | ν1bp | 81.5 | x > 80 | Pass |
| 25a | N1bp | 1.496999 | x > 1.49 | Pass |
| 26a | \|f2 / f\| | 0.403699 | 0.3 < x < 0.45 | Pass |
| 27a | f3a / f | 0.311441 | 0.2 < x < 0.45 | Pass |
| 28a | \|f3b / f\| | 0.089490 | 0.06 < x < 0.13 | Pass |
| 29a | f3c / f | 0.139996 | 0.1 < x < 0.18 | Pass |

The patent's Table 3 carries more displayed precision for conditions 22 and 24 (81.540) than the prescription rows
(81.5), and the rounded prescription recomputation of condition 21 differs from the printed table by approximately
0.000239. These are retained as source-precision effects; no prescription value is altered to force exact agreement.

## Image Stabilization

The patent assigns image stabilization to L3b, the negative middle subunit of L3. Figure 87 marks its motion with the
transverse arrow LT, and the third-embodiment text states that L3b moves perpendicular to the optical axis to displace
the image on the focal plane. Its computed net focal length is -43.9002 mm, while the preceding L3a and following L3c
subunits are positive.

This division of power is central to the patent's stabilization concept: positive L3a converges the beam before the
compact negative stabilizer, and positive L3c follows it. The patent conditions 27-29 constrain those three subunit
powers; Example 24 satisfies the preferred ranges listed above.

The data file represents the centered optical state. It does not author a numerical transverse L3b decenter because
Example 24 does not publish an image-stabilization travel range suitable for a quantitative movement state. No invented
IS displacement is therefore introduced.

## Verification Summary

The rounded active arrays recompute to an infinity EFL of 491.356789096 mm, 0.796789096 mm or 0.1624% above the patent's
printed 490.56 mm. The sequential reduced-angle trace and an independent ABCD chain agree to machine precision at the
reported tolerance, so the residual is retained as a source-precision effect rather than corrected by altering a radius
or spacing.

The calibrated entrance pupil and physical stop recover f/4.1. The stop axial position is patent-published; only its
17.719982840 mm semi-diameter is inferred. Example 24 also publishes no clear semi-diameters. The modeled surface
semi-diameters were therefore derived from exact spherical d-line ray traces at infinity and reconstructed close focus,
then checked for element edge thickness, actual rim slope, shared-band cross-gap intrusion, and off-axis ray
containment.

The surface-by-surface Petzval sum, evaluated as φ/(n·n′), is +3.084662783316×10^-5 mm^-1, corresponding to
-32,418.454471 mm under the project's -1/P radius convention. This is a first-order field-curvature quantity and is not
substituted for the patent's full aberration plots.

No scaling is applied, so no radius, spacing, image-plane coordinate, or polynomial coefficient is transformed. There
are no aspherical coefficients in Example 24 in any event. The patent's Certificate of Correction changes other text and
numerical examples but does not alter the Example 24 numeric prescription; no silent source correction is present in the
modeled surfaces.

The active model omits HG, FL, and inactive FC by design. The rear-filter effect is retained through the documented
air-equivalent final spacing, and the close-focus object reference is normalized for the omitted front and rear plates.
These are modeling transformations of reference planes, not changes to the patent's powered prescription.

## Sources and References

1. Akihiro Nishio, Hideki Ogawa, and Makoto Misaka, **US 6,115,188 A, “Optical System and Optical Apparatus Having the
   Same,”** granted 2000-09-05. Numerical Example 24; Figure 87; Figure 91; Table 3; Certificate of Correction.
2. Canon Camera Museum, **EF500mm f/4L IS USM**, Canon Inc.,
   <https://global.canon/en/c-museum/product/ef351.html>. Product identity, July 1999 market date, 17 elements in 13
   groups, eight diaphragm blades, f/32 minimum aperture, 4.5 m closest focusing distance, 0.12× maximum magnification,
   146 × 387 mm dimensions, one fluorite element, two UD elements, image stabilization, and inclusion of protection
   glass and rear filter in the element count.
3. OHARA INC., **Glass Type**, <https://www.ohara-inc.co.jp/en/product/01000/>. Public d-line coordinate checks used as
   catalog anchors for several six-digit glass classes; supplier identity is not inferred from coordinate agreement
   alone.
