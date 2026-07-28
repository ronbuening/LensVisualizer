# PENTAX HD PENTAX-D FA★ 70-200mm f/2.8 ED DC AW

## Patent Reference and Design Identification

**Patent:** US 2016/0103303 A1  
**Priority:** October 9, 2014  
**Filed:** October 6, 2015  
**Published:** April 14, 2016  
**Inventor:** Masakazu Saori  
**Applicant:** Ricoh Imaging Company, Ltd.  
**Title:** *Zoom Lens System*  
**Embodiment analyzed:** Numerical Embodiment 1

The prescription is Numerical Embodiment 1 of US 2016/0103303 A1, specifically Figures 1–6D and Tables 1–3
(¶0192–¶0198). The patent publishes a 72.06–194.00 mm, constant-f/2.9, full-frame zoom design with a
21.64 mm image height. The data file retains those design values without scaling. The public product name,
70–200 mm range, and f/2.8 maximum aperture remain separate marketed specifications.

The job card fixes this embodiment as the production correlation for the HD PENTAX-D FA★ 70-200mm F2.8ED DC AW. The
patent does not name the commercial lens, so the identification is a convergent correlation rather than a claim of
explicit manufacturer confirmation. The principal evidence is:

1. Both the patent and product have 19 elements. The patent prescription contains four cemented doublets and
   therefore 15 air-separated physical units, whereas Ricoh specifies the production lens as 19 elements in 16
   groups. This one-group difference is retained as a correlation limit rather than being hidden.
2. The unscaled patent range of 72.06–194.00 mm closely brackets the marketed 70–200 mm range.
3. The patent full fields are 34.4° at wide and 12.4° at tele; Ricoh specifies 34.5°–12.5° for the full-frame
   product.
4. The patent image height is 21.64 mm, corresponding to a 43.28 mm image circle and the diagonal of the 135
   full-frame format.
5. The modeled aperture is essentially constant at f/2.9; the product is marketed as a constant-f/2.8 zoom.
6. The patent glass set contains four S-FPM2 elements, two S-FPL51 elements, and two S-FPL53 elements. This
   numerical pattern corresponds to the manufacturer's published special-glass counts, although the translation from
   OHARA types to marketing categories is an inference.
7. A mechanism-constrained 1.2 m telephoto focus reconstruction gives a magnification magnitude of 0.13325,
   consistent with the product specification of 0.13×.
8. Ricoh's development interview identifies Masakazu Saori with the optical-design team for the product.
9. The October 2014 Japanese priority predates the February 2015 product announcement, and the 2016 publication is
   chronologically consistent with the final product release.

The patent is the numerical authority for the prescription. Ricoh sources are used only for product identity and
marketed specifications. OHARA catalog data supplies the glass names and spectral annotations. Independently
computed values are identified as such below.

## Optical Architecture

Numerical Embodiment 1 is an all-spherical, five-functional-group zoom with a
positive–negative–positive–negative–positive power sequence. It has 19 elements, four cemented doublets, 15
air-separated physical units, 34 refracting surfaces, and one aperture-stop plane. The stop is the patent's surface
23, immediately before G5, with 1.20 mm to surface 24 (¶0193). No filter, sensor-cover plate, dummy plane, flare
cutter, mirror, or mechanical component is included.

The five functional groups have the following isolated, air-surrounded paraxial powers. These are group powers, not
the standalone powers of their individual elements and not a decomposition of each group's in-situ contribution
inside the complete zoom.

| Functional group | Elements | Calculated group focal length | Patent Table 3 | Motion and principal function |
|---|---|---:|---:|---|
| G1 | L1–L4 | +119.845 mm | +119.85 mm | Fixed positive front collector |
| G2 | L5–L9 | −32.589 mm | −32.59 mm | Negative variator moving imageward |
| G3 | L10–L12 | +66.082 mm | +66.08 mm | Positive compensator and focusing group |
| G4 | L13 | −205.119 mm | −205.12 mm | Weak negative moving group |
| G5 | L14–L19 | +90.906 mm | +90.93 mm | Fixed positive rear relay; fixed with stop |

During zooming from 72.06 to 194.00 mm, G1 and G5 remain fixed relative to the image plane, while G2, G3, and G4
move monotonically toward the image side (¶0117–¶0119). The published gaps change by +40.64 mm at d7, −23.09 mm at
d15, +12.38 mm at d20, and −29.93 mm at d22 from wide to tele. The three tabulated stations show no movement
reversal.

The first-surface-to-image total length is 243.06 mm at wide and tele and 243.05 mm at the intermediate state. The
corresponding TL/EFL ratios are 3.37391, 2.43106, and 1.25331, so no station meets the project's strict telephoto
test. Separately, the first-surface-to-last-glass track is 194.77, 194.76, and 194.77 mm; its tele-end ratio is
1.00431. The BFL/EFL ratios are 0.66982, 0.48271, and 0.24885, so no station is retrofocus. “Telephoto zoom”
therefore describes the focal-length category rather than a strict track-shortening classification.

### Stop and Image-Plane Normalization

The stop position is patent-published, but its clear radius is not. Backward pupil imaging gives the fixed stop
radius required for the tabulated f/2.9 aperture as 18.471844, 18.472967, and 18.473142 mm at wide, intermediate,
and tele. The data file uses their mean, 18.472650718 mm. With that physical stop, the independently computed
open-aperture values are f/2.899873, f/2.900050, and f/2.900077.

Table 2 publishes a back focus of 37.79 mm at all three zoom stations, but that value conflicts with two independent
prescription-based checks. Gaussian BFL from surface 35 is 48.254–48.261 mm, while the published overall length
minus the summed surface track is 48.29 mm. The modeled surface-35-to-image spacing is therefore 48.29 mm. The 37.79
mm source value is retained as an unresolved reference-plane or table contradiction; it is not silently substituted
into the model.

The patent provides no semi-diameter table. Surface apertures are modeled values derived from exact spherical
meridional tracing at all three infinity and reconstructed close-focus stations, with marginal, chief, and off-axis
ray envelopes and comparison to Figure 1. They must not be read as manufacturer-published clear apertures.

## Element-by-Element Analysis

The focal length stated for each element is its standalone air-surrounded thick-lens focal length computed from the
final data arrays. It is not the element's effective contribution after neighboring elements, cemented interfaces,
and group motion are restored.

### G1 — Fixed Positive Front Group

G1 combines one negative meniscus with three positive low- or moderate-dispersion elements. Its net focal length is
+119.845 mm. Patent condition (19) places the three positive-element Abbe numbers in the order 95.0 > 81.6 > 67.7 to
balance longitudinal and lateral color against spherical aberration and coma (¶0182–¶0183).

#### L1 — Negative Meniscus, concave to image

**nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA). f = −138.913 mm standalone.**

L1 is the negative front member described in ¶0194. Its high index permits useful negative bending without requiring
an extreme front curvature. Cementing it to L2 forms D1, whose isolated net focal length is −353.031 mm. D1 is
therefore a weak negative subassembly even though the complete four-element G1 is positive.

The role attributed to L1 in the model is to moderate the front group's positive power and supply a high-index
partner for the low-dispersion L2. Any more detailed allocation of coma or distortion correction to this single
element would be an interpretation rather than a patent-published element-by-element result.

#### L2 — Positive Meniscus, convex to object

**nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA). f = +224.913 mm standalone.**

L2 is the positive member of D1. Its low dispersion is important because it follows the negative, higher-dispersion
L1 at the front of the system. The cemented interface allows the refractive and dispersive powers of the two glasses
to be combined without an air gap, while L3 and L4 restore G1's overall positive power.

Catalog line data support the chromatic interpretation: S-FPL51 has nC = 1.49514, nF = 1.50123, ng = 1.50451, and
dPgF = +0.0280. These are OHARA catalog-derived properties, not values printed in the patent.

#### L3 — Biconvex Positive

**nd = 1.43875, νd = 95.0. Glass: S-FPL53 (OHARA). f = +169.216 mm standalone.**

L3 is the highest-Abbe positive element in G1 and the second positive element in the sequence governed by condition
(19). Its biconvex form supplies positive power while minimizing ordinary d-line dispersion. The validated OHARA
line data and dPgF = +0.0461 support a role in suppressing secondary color, but the design is not labeled
apochromatic solely from that fact.

Because L3 is air-spaced from D1, its bending can be selected independently from the cemented pair. The patent's
general rationale assigns the front positive elements a combined chromatic, spherical, and coma-balancing function
rather than an isolated correction term for L3.

#### L4 — Positive Meniscus, convex to object

**nd = 1.59522, νd = 67.7. Glass: S-FPM2 (OHARA). f = +191.643 mm standalone.**

L4 completes the fixed positive group. Its index is substantially higher than that of L2 and L3, while its Abbe
number is lower. That combination gives the rear of G1 additional positive power and bending freedom without placing
all of the front-group refraction on the very-low-dispersion glasses.

Its catalog dPgF is +0.0123. In the complete group, L4 works with the 81.6 and 95.0 Abbe-number elements to satisfy
the patent's prescribed dispersion ordering.

### G2 — Moving Negative Variator

G2 has an isolated focal length of −32.589 mm and moves imageward throughout the published zoom range. It consists
of two cemented pairs followed by a negative singlet (¶0195). The first pair D2 is net negative at −73.124 mm; the
second pair D3 is weakly positive at +435.460 mm. The whole group remains strongly negative because of the combined
action of D2, L7, and L9.

#### L5 — Positive Meniscus, convex to image

**nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA). f = +70.578 mm standalone.**

L5 is the high-index positive entrance member of G2 and the positive component of D2. Its high index allows a
compact meniscus with substantial positive power. The low Abbe number is countered by the cemented negative L6 and
by the second cemented pair farther back in the group.

The isolated positive focal length of L5 must not be confused with D2's negative net power or G2's much stronger
negative functional power.

#### L6 — Biconcave Negative

**nd = 1.81600, νd = 46.6. Glass: S-LAH59 (OHARA). f = −35.849 mm standalone.**

L6 is the dominant negative component of D2. Its biconcave form and shorter-magnitude focal length overwhelm L5's
positive standalone power, leaving the cemented pair net negative. The catalog dPgF of −0.0092 gives it a different
partial-dispersion behavior from S-LAH95, supporting the pair's chromatic balancing function.

D2's role is inseparable from the rest of G2: the pair operates inside a moving negative group whose spacing
relative to G1 and G3 changes by tens of millimeters across the zoom.

#### L7 — Biconcave Negative

**nd = 1.59522, νd = 67.7. Glass: S-FPM2 (OHARA). f = −57.512 mm standalone.**

L7 begins the second cemented pair D3. It is unusual in combining negative power with a relatively high Abbe number.
The low-dispersion negative member is paired directly with the much higher-dispersion positive L8, giving the
designer a strong dispersion contrast at one cemented interface.

The pair's isolated net focal length is +435.460 mm, so D3 is only weakly positive as a complete cemented unit
despite the substantial standalone powers of both components.

#### L8 — Biconvex Positive

**nd = 1.80518, νd = 25.5. Glass: S-TIH6 (OHARA). f = +51.397 mm standalone.**

L8 is the positive, high-dispersion partner in D3. Its index and curvature provide strong positive power in a
compact thickness. The contrast between νd = 25.5 at L8 and νd = 67.7 at L7 is a direct, data-supported feature of
the cemented pair.

The validated line data include dPgF = +0.0158. This permits spectral modeling beyond a plain Abbe approximation,
but it does not by itself establish apochromatic correction for the complete lens.

#### L9 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA). f = −59.112 mm standalone.**

L9 is the rear negative singlet of G2. It reinforces the group's negative power after the weakly positive D3 pair
and sets the final ray geometry entering G3. Its air spacing from D3 allows the negative variator's power
distribution and aberration balance to be adjusted independently of either cemented pair.

The element's catalog dPgF is −0.0075, adding a partial-dispersion sign opposite to several of the positive members
in the same functional group.

### G3 — Positive Compensator and Focusing Group

G3 is a compact three-element positive group with an isolated focal length of +66.082 mm. It translates during
zooming and also moves toward the image side for closer focus (¶0122, ¶0196). The group is mechanically smaller than
the front group, consistent with the patent's objective of reducing focusing drive burden.

#### L10 — Biconvex Positive

**nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA). f = +60.950 mm standalone.**

L10 supplies most of the obvious positive form at the front of G3. Its high index supports substantial power in a
compact biconvex element. It is air-spaced from D4, allowing the internal distribution of G3 power to be adjusted
while the group moves as a unit.

The modeled edge thickness is most restrictive at L10, but remains positive at 0.868 mm under the final inferred
semi-diameters. That is a geometry-validation result, not a manufacturing thickness specification.

#### L11 — Positive Meniscus, convex to image

**nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA). f = +122.964 mm standalone.**

L11 is the low-dispersion positive member of D4. It follows the high-index positive L10 and is cemented to the
strongly dispersive negative L12. The combination permits G3 to retain positive functional power while limiting
chromatic change as the group moves for zoom compensation and focus.

The element repeats the S-FPL51 glass used at L2, giving the moving group the same validated line-index basis as the
front cemented doublet.

#### L12 — Negative Meniscus, convex to image

**nd = 1.84666, νd = 23.8. Glass: S-TIH53W (OHARA). f = −109.779 mm standalone.**

L12 is the high-index, high-dispersion negative partner in D4. The isolated cemented pair has a very long negative
focal length of −901.036 mm, meaning its net power is weak compared with the standalone powers of its members. Its
principal value is therefore the combined bending and dispersion balance it introduces inside the positive G3 group.

The OHARA line data include nC = 1.83649, nF = 1.87210, ng = 1.89419, and dPgF = +0.0175. Those catalog properties
support explicit spectral tracing of the moving focus group.

### G4 — Moving Negative Singlet

#### L13 — Negative Meniscus, convex to image

**nd = 1.61340, νd = 44.3. Glass: S-NBM51 (OHARA). f = −205.119 mm standalone.**

L13 is both the only element and the complete optical power of G4. The patent specifies a negative singlet with a
convex image-side surface (¶0197) and places conditions on its index, Abbe number, and power ratios relative to G1,
G2, G3, and G5.

Its relatively weak negative power gives the zoom design a separate moving degree of freedom between the positive
focus group and the fixed stop/rear group. The validated dPgF is −0.0065, consistent with the use of an
NBM/KZFS-class glass where partial-dispersion control is useful, though the patent itself prints only nd and νd.

### G5 — Fixed Positive Rear Relay

G5 is a fixed six-element, all-air-spaced positive group immediately behind the stop. Its isolated focal length is
+90.906 mm. The patent treats the first two positive elements and the intermediate positive element as key variables
for spherical aberration, coma, chromatic aberration, and field curvature (¶0184–¶0187).

#### L14 — Biconvex Positive

**nd = 1.59522, νd = 67.7. Glass: S-FPM2 (OHARA). f = +58.499 mm standalone.**

L14 is the first refracting element after the aperture stop and the first positive element of G5. The patent links
the index difference between this element and L15 to spherical-aberration correction. In the selected embodiment,
1.59522 − 1.43875 = 0.15647, satisfying both applicable index-difference conditions.

Its proximity to the stop makes its bending particularly influential on pupil-dependent aberrations, but the precise
in-situ allocation of spherical aberration cannot be inferred from paraxial power alone.

#### L15 — Positive Meniscus, convex to object

**nd = 1.43875, νd = 95.0. Glass: S-FPL53 (OHARA). f = +109.291 mm standalone.**

L15 is the second positive element in G5. Together with L14 it gives an average Abbe number of 81.35, exceeding the
patent's lower bounds for the corresponding chromatic conditions. Paragraph 0184 also describes the second positive
member as having a profile near an aplanatic form to suppress coma; that statement is the patent's design rationale,
not an independently measured production-lens property.

The S-FPL53 line data and dPgF = +0.0461 support a substantial low-dispersion role in the rear group.

#### L16 — Biconcave Negative

**nd = 1.78590, νd = 44.2. Glass: S-LAH51 (OHARA). f = −38.076 mm standalone.**

L16 is the strongest-magnitude standalone element in G5. It reverses part of the positive power supplied by L14 and
L15 and creates a strongly curved air space before L17. The negative singlet's placement divides G5 into front and
rear positive substructures without creating an additional moving group.

Its catalog dPgF is −0.0069, providing a spectral counterweight to the positive-dPgF low-dispersion elements around
it.

#### L17 — Biconvex Positive Intermediate Element

**nd = 1.59522, νd = 67.7. Glass: S-FPM2 (OHARA). f = +71.594 mm standalone.**

L17 is the patent's “intermediate positive lens element.” Its location and power are governed by conditions
(22)–(24). The final model gives D5P/LD5 = 0.597552, f5/f5P = 1.269744, and ν5P = 67.7, all inside the required
ranges.

The patent states that this intermediate positive element contributes to the joint correction of coma, chromatic
aberration, and field curvature (¶0186–¶0187). That is a source-published functional rationale; the standalone focal
length alone does not quantify those corrections.

#### L18 — Negative Meniscus, convex to image

**nd = 1.81600, νd = 46.6. Glass: S-LAH59 (OHARA). f = −49.268 mm standalone.**

L18 is the rear negative member of G5. Its strong concave object-side surface follows a long air space after L17 and
prepares the ray bundle for the final positive meniscus. The element's negative power and negative dPgF are
consistent with a role in balancing field and lateral color, as recorded in the data model.

That role is an optical interpretation of its placement and spectral properties; the patent does not publish a
separate aberration budget for L18.

#### L19 — Positive Meniscus, convex to image

**nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA). f = +92.714 mm standalone.**

L19 is the high-index positive rear meniscus and the final glass element. It restores positive power after L18 and
helps set the fixed rear group's exit vergence and pupil position. The exit pupil is computed at 44.339 mm to the
object side of surface 35 and remains fixed across zoom because the stop and G5 do not move relative to the image
plane.

The high index permits the required rear power with moderate physical curvature. Its low Abbe number is balanced by
the low-dispersion positive elements earlier in G5 rather than being treated as an isolated achromatizing solution.

## Glass Identification and Selection

The patent publishes only nd and νd. Each distinct pair matches a current OHARA S-prefix catalog type exactly in nd,
with a maximum absolute νd residual of 0.08 after allowing for the patent's one-decimal Abbe rounding. The glass
names, nC/nF/ng line indices, and dPgF values in the data file are therefore catalog-derived assignments.
Cross-vendor catalog names are not substituted as prescription identities.

| OHARA glass | nd | νd | dPgF | Elements | Principal use in this prescription |
|---|---:|---:|---:|---|---|
| S-FPL53 | 1.43875 | 95.0 | +0.0461 | L3, L15 | Very-low-dispersion positive power in G1 and G5 |
| S-FPL51 | 1.49700 | 81.6 | +0.0280 | L2, L11 | Low-dispersion positive cemented partners |
| S-FPM2 | 1.59522 | 67.7 | +0.0123 | L4, L7, L14, L17 | Moderate-index low-dispersion power in four groups |
| S-NBM51 | 1.61340 | 44.3 | −0.0065 | L13 | Weak negative G4 singlet with negative partial dispersion |
| S-LAH51 | 1.78590 | 44.2 | −0.0069 | L16 | Strong negative member in G5 |
| S-LAH65V | 1.80400 | 46.6 | −0.0088 | L10 | High-index positive lead element of G3 |
| S-TIH6 | 1.80518 | 25.5 | +0.0158 | L8 | High-dispersion positive component of D3 |
| S-LAH59 | 1.81600 | 46.6 | −0.0092 | L6, L18 | Negative components in G2 and G5 |
| S-LAH60 | 1.83400 | 37.2 | −0.0037 | L1 | High-index negative front meniscus |
| S-LAH55V | 1.83481 | 42.7 | −0.0075 | L9 | Rear negative singlet of G2 |
| S-TIH53W | 1.84666 | 23.8 | +0.0175 | L12 | High-dispersion negative partner in moving D4 |
| S-LAH95 | 1.90366 | 31.3 | +0.0055 | L5, L19 | High-index positive members in G2 and G5 |

The chromatic strategy is distributed rather than concentrated in one nominal “ED group.” G1 uses S-FPL51, S-FPL53,
and S-FPM2 as three positive glasses with deliberately ordered Abbe numbers. G2 and G3 use cemented pairs with large
contrasts in both ordinary dispersion and partial dispersion. G5 combines S-FPL53 and S-FPM2 positives with
higher-index negative and positive glasses. Because complete line data and dPgF values are present, these statements
are supported by more than nd/νd alone. The data nevertheless does not justify an unqualified APO label for the
complete zoom.

## Focus Mechanism

The patent specifies internal focusing by moving G3 toward the image side (¶0122), but it does not publish
finite-object spacing tables. The data file therefore uses the declared status `CONSTRAINED_RECONSTRUCTION`, not
`PUBLISHED`.

The reconstruction is solved at the official 1.2 m minimum focus distance, measured from the fixed image plane. Only
G3 moves for focusing, and the sum d15 + d20 is conserved at each zoom station. Gaps d7 and d22 remain zoom-only.
The solved states are:

| Zoom station | G3 imageward shift | d15 infinity → close | d20 infinity → close | Calculated magnification |
|---:|---:|---:|---:|---:|
| 72.06 mm | 3.287999 mm | 27.090000 → 30.377999 mm | 8.580000 → 5.292001 mm | −0.067070 |
| 100.00 mm | 5.615212 mm | 21.740000 → 27.355212 mm | 10.890000 → 5.274788 mm | −0.086240 |
| 194.00 mm | 15.514881 mm | 4.000000 → 19.514881 mm | 20.960000 → 5.445119 mm | −0.133249 |

The telephoto magnification agrees with the manufacturer's rounded 0.13× specification, but the solved travel
remains a modeling reconstruction. It should not be presented as the exact production cam law or as a
patent-published set of finite-focus spacings. A reconstruction using the patent's contradictory 37.79 mm fB value
has no positive G3 translation solution within the available d20 space; the prescription-consistent 48.29 mm image
gap is required.

## Chromatic Correction Strategy

The patent's chromatic logic is visible at three levels. First, G1 satisfies the ordered-Abbe relationship 95.0 >
81.6 > 67.7 among its three positive elements. Second, G2 and G3 place low-dispersion and high-dispersion glasses on
opposite sides of cemented interfaces, creating chromatic leverage without adding air-spaced moving components.
Third, G5 uses two high-Abbe positive elements near the stop and a separately constrained intermediate positive
element.

The catalog dPgF signs also alternate meaningfully. Positive deviations occur in S-FPL53, S-FPL51, S-FPM2, S-TIH6,
S-TIH53W, and S-LAH95, while negative deviations occur in S-NBM51 and the S-LAH glasses used for several negative
members. The complete spectral effect depends on the curvatures, powers, and ray heights of the assembled system;
the sign pattern alone is not an aberration correction proof.

## Conditional Expressions

The following values were independently recomputed from the final prescription and isolated functional-group powers.
All inequalities are strict, as written by the patent. Duplicate conditions are shown separately when the patent
gives different bounds.

| Condition | Computed value | Required interval or relation | Result |
|---|---:|---|---|
| (1) f1/f5 | 1.318348 | 1.23 < value < 1.50 | Pass |
| (2) f5/f3 | 1.375646 | 1.20 < value < 1.60 | Pass |
| (3) | 95.0 > 81.6 > 67.7 | Ordered Abbe relation | Pass |
| (4) Np1 − Np2 | 0.156470 | > 0 | Pass |
| (5) νave | 81.35 | > 68 | Pass |
| (6) D5P/LD5 | 0.597552 | 0.50 < value < 0.75 | Pass |
| (7) f5/f5P | 1.269744 | 0.90 < value < 1.40 | Pass |
| (8) ν5P | 67.7 | 60 < value < 75 | Pass |
| (9) f4/f3 | −3.104003 | −8.0 < value < −1.5 | Pass |
| (10) Nd4 | 1.61340 | 1.55 < value < 1.73 | Pass |
| (11) νd4 | 44.3 | 30 < value < 60 | Pass |
| (12) f4/f1 | −1.711534 | −1.76 < value < −1.49 | Pass |
| (13) f4/f2 | 6.294085 | 5.0 < value < 8.5 | Pass |
| (14) f4/f5 | −2.256398 | −4.0 < value < −1.5 | Pass |
| (15) f5/f2 | −2.789440 | −5.0 < value < −1.0 | Pass |
| (16) f3/f4 | −0.322165 | −0.4 < value < −0.2 | Pass |
| (17) Nd4 | 1.61340 | 1.55 < value < 1.75 | Pass |
| (18) νd4 | 44.3 | 30 < value < 70 | Pass |
| (19) | 95.0 > 81.6 > 67.7 | Ordered Abbe relation | Pass |
| (20) N5p1 − N5p2 | 0.156470 | > 0.03 | Pass |
| (21) ν5ave | 81.35 | > 68 | Pass |
| (22) D5P/LD5 | 0.597552 | 0.45 < value < 0.80 | Pass |
| (23) f5/f5P | 1.269744 | 0.90 < value < 1.70 | Pass |
| (24) ν5P | 67.7 | 55 < value < 75 | Pass |

The patent also gives narrower preferred refinements for several of these conditions. Numerical Embodiment 1
satisfies all of them:

| Preferred condition | Computed value | Preferred interval or relation | Result |
|---|---:|---|---|
| (5′) νave | 81.35 | > 72 | Pass |
| (6′) D5P/LD5 | 0.597552 | 0.55 < value < 0.75 | Pass |
| (9′) f4/f3 | −3.104003 | −4.0 < value < −1.5 | Pass |
| (13′) f4/f2 | 6.294085 | 5.0 < value < 7.0 | Pass |
| (14′) f4/f5 | −2.256398 | −3.0 < value < −1.8 | Pass |
| (15′) f5/f2 | −2.789440 | −3.2 < value < −2.0 | Pass |
| (17′) Nd4 | 1.61340 | 1.55 < value < 1.73 | Pass |
| (18′) νd4 | 44.3 | 40 < value < 55 | Pass |
| (20′) N5p1 − N5p2 | 0.156470 | > 0.08 | Pass |
| (21′) ν5ave | 81.35 | > 72 | Pass |
| (22′) D5P/LD5 | 0.597552 | 0.55 < value < 0.80 | Pass |
| (23′) f5/f5P | 1.269744 | 0.90 < value < 1.50 | Pass |
| (24′) ν5P | 67.7 | 63 < value < 75 | Pass |

## Source and Model Boundaries

The prescription is not uniformly scaled. All radii, thicknesses, image-plane spacing, and calculated powers remain
in the patent's published scale, so no asphere coefficient transformation applies. Paragraph 0188 explicitly states
that none of the numerical embodiments uses an aspherical surface; the data file accordingly contains no
`A`-suffixed surface and an empty `asph` object.

Surface 18 is entered as R = −195.611 mm. The parsed patent text can read this as −1956.11, but the rendered Table 1
page shows −195.611, and only the rendered value reproduces the patent focal lengths and group powers. This is an
OCR correction, not a correction to the patent document.

The stop semi-diameter, all refracting-surface semi-diameters, the 48.29 mm final image gap, and the finite-focus
states are model quantities. The stop position, spherical prescription, infinity zoom gaps, focal lengths, f-number,
field, image height, and overall length are source facts. The OHARA identities and spectral values are
catalog-derived. The production-lens correlation is fixed by the job card but remains inferential because the patent
does not state the commercial product name and its 15-unit prescription differs from the marketed 16-group
construction.

## Verification Summary

The final TypeScript arrays were independently reloaded and traced using both sequential height/reduced-angle
propagation and ABCD matrices. The maximum difference between the two methods was 2.842 × 10⁻14. The complete-system
determinant was unity to numerical precision.

| Zoom station | Calculated EFL | Patent focal length | Calculated BFL from S35 | Modeled f-number |
|---:|---:|---:|---:|---:|
| Wide | 72.041113 mm | 72.06 mm | 48.254470 mm | 2.899873 |
| Intermediate | 99.976767 mm | 100.00 mm | 48.260100 mm | 2.900050 |
| Tele | 193.933935 mm | 194.00 mm | 48.260977 mm | 2.900077 |

The surface-by-surface Petzval sum, computed as φ/(n·n′), is +1.321079809 × 10⁻3 mm⁻1, corresponding to the
project's signed paraxial Petzval radius of −756.957 mm. This is a paraxial field-curvature quantity and does not
include astigmatic splitting or distortion.

All six defined zoom/focus states pass the local geometry gate. The minimum modeled edge thickness is 0.868 mm, the
maximum rim slope is 32.959°, and the highest shared-band cross-gap intrusion ratio is 0.978408. Mandatory marginal,
chief, and close-focus rays are contained. Two extreme opposite-side telephoto off-axis samples are naturally
vignetted. These checks validate the authored apertures as a renderable model; they do not convert inferred
semi-diameters into source-published dimensions.

## Sources

### Primary prescription source

- Masakazu Saori, *Zoom Lens System*, US 2016/0103303 A1, Ricoh Imaging Company, Ltd., published April 14, 2016.
Numerical Embodiment 1, Figures 1–6D, Tables 1–3, and ¶0117–¶0127, ¶0182–¶0198.

### Product identity and marketed specifications

- Ricoh Imaging, [HD PENTAX-D FA★ 70-200mmF2.8ED DC AW product page](https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/hdpentax-dfa-70-200/).
- Ricoh Imaging, [lens specification](https://www.ricoh-imaging.co.jp/english/products/lens/pentax-story/70-200/spec/).
- Ricoh Imaging, [special-optical-glass feature](https://www.ricoh-imaging.co.jp/english/products/lens/pentax-story/70-200/feature/).
- Ricoh Imaging, [engineers interview](https://www.ricoh-imaging.co.jp/english/products/lens/pentax-story/70-200/interview/).
- Ricoh Imaging, [February 5, 2015 product announcement](https://news.ricoh-imaging.co.jp/rim_info2/2015/20150205_019077.html).
- Ricoh Imaging, [February 23, 2016 release-date notice](https://news.ricoh-imaging.co.jp/rim_info/2016/20160223_019328.html) for the final March 18, 2016 release.

### Glass catalog source

- OHARA, current optical-glass catalog and individual data sheets for S-FPL53, S-FPL51, S-FPM2, S-NBM51, S-LAH51,
S-LAH65V, S-TIH6, S-LAH59, S-LAH60, S-LAH55V, S-TIH53W, and S-LAH95.
