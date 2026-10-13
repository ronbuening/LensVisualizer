# Canon RF-S 14-30mm f/4-6.3 IS STM PZ — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2025-50505 A (特開2025-50505), unexamined patent application publication, Japan Patent Office
**Application Number:** 特願2023-159337 (JP 2023-159337)
**Filed:** 25 September 2023
**Published:** 4 April 2025
**Inventor:** Takeharu Nakada (printed as 仲田 丈晴)
**Applicant:** Canon Inc. (キヤノン株式会社)
**Title:** ズームレンズおよび撮像装置 (Zoom lens and image pickup apparatus)
**Classification:** G02B 15/167; G02B 13/18
**Claims:** 16
**Worked examples:** 5
**Embodiment analyzed:** Numerical Example 5 (数値例５), Figs. 9 and 10

The publication discloses a family of compact, wide-angle, negative-lead zoom lenses composed of exactly four lens groups
with a negative–positive–negative–positive power sequence. The first and fourth groups are fixed during zooming, and the
second and third groups move (claim 1, ¶0012). The stated problem is the prior art's inadequate correction of field
curvature at the wide end. The patent attributes this to the negative-lead zoom of JP 2011-059597 A (¶0003–¶0004). The
stated objective is a small, light negative-lead zoom with high performance over the whole zoom range (¶0005).

Numerical Example 5 is the prescription transcribed in the companion data file. Its correlation with the production
RF-S14-30mm F4-6.3 IS STM PZ rests on the following convergent evidence:

1. **Applicant and product class.** Canon is the applicant. The design is an APS-C-scale wide zoom whose first and last
   groups do not move and whose published total length is constant at 80.14 mm. Canon markets the lens as an internal
   power zoom whose barrel does not extend.
2. **Element and group count.** Example 5 has 10 elements in 9 groups, with G23 + G24 as the only cemented pair. Canon
   lists 10 elements in 9 groups.
3. **Aspherical elements.** The two nd 1.53504 / νd 55.7 molded-polymer elements, G12 and G32, are each aspherical on
   both faces. Canon lists two PMo (plastic-molded) aspherical elements.
4. **Low-dispersion element.** Example 5 contains one fluorophosphate-class crown, G24 (nd 1.49700 / νd 81.7). Canon's
   specification tables list one UD element.
5. **Focal length and aperture.** The design covers f = 14.41–29.35 mm at F/4.08–6.43. The marketed values are 14–30 mm
   and f/4–6.3.
6. **Focus and stabilization.** The patent focuses by moving the two-element third group imageward (¶0021, ¶0036) and
   permits G21 or all of the second group to act as the stabilizer (¶0020, ¶0034, claim 15). This is consistent with a
   lead-screw STM focus drive and Canon's optical IS, although the patent names no actuator.
7. **Close focus.** A constrained reconstruction of the patent's focus mechanism at Canon's 0.15 m minimum distance gives
   a paraxial magnification of −0.385 at 29.35 mm, against Canon's 0.38× at 30 mm (see Focus Mechanism).
8. **Timing.** The application was filed on 25 September 2023. Canon announced the lens on 26 March 2025 in the United
   States and on 27 March 2025 in Asia, shortly before the publication on 4 April 2025.

The correlation is **plausible but not manufacturer-confirmed**. Examples 1 and 3 of the same publication share the
10-element, 9-group layout with two nd 1.53504 polymer aspherical elements. Example 3 also reaches F6.43 at the tele end.
The publication does not state which example, if any, entered production. One manufacturer inconsistency is noted.
Canon Europe's feature text mentions two UD elements while its own specification table and the Canon U.S.A. and Canada
pages list one, so the specification tables are followed. Separately, the marketed diagonal angle of view (88°30′–48°50′) is a
nominal sensor-diagonal figure. It is not comparable with the patent's half-field ω, which is atan(Y/f) at the published
image heights.

## Optical Architecture

Example 5 is a four-group **negative-lead zoom** (− + − +), the term the patent itself uses (ネガティブリード型, ¶0002,
¶0005). The ten elements are arranged as follows.

| Group | Elements                                              | Published f (mm) | Zoom W→T             | Focus     | Principal function                                |
| ----- | ----------------------------------------------------- | ---------------- | -------------------- | --------- | ------------------------------------------------- |
| L1    | G11 (−), G12 (−, polymer, 2× asph), G13 (+)           | −20.50           | fixed                | fixed     | negative front group; wide-angle field acceptance |
| L2    | G21 (+), stop SP, G22 (+), G23 (−) + G24 (+) cemented | +17.40           | objectward, 15.60 mm | fixed     | positive variator; carries the stop; IS candidate |
| L3    | G31 (−), G32 (+, polymer, 2× asph)                    | −29.02           | objectward, 12.54 mm | imageward | negative second variator and focus group          |
| L4    | G41 (+ meniscus, convex to image)                     | +51.05           | fixed                | fixed     | fixed rear positive element; exit-pupil control   |

The group focal lengths recomputed from the prescription are −20.504, +17.406, −29.018 and +51.050 mm. These agree with
the published group data.

**Zoom kinematics.** From wide to tele, L2 and its aperture stop travel 15.60 mm toward the object and L3 travels
12.54 mm toward the object (¶0036). L1, L4 and the image plane do not move, so the three variable spacings trade length
among themselves. d7 closes from 16.90 to 1.30 mm, d16 opens from 2.57 to 5.63 mm, and d20 opens from 5.74 to 18.28 mm.
The published zoom ratio is 2.04. The paraxial group magnifications show how that ratio is shared:

- **L2.** β2 runs from −0.4545 at the wide end to −0.7670 at the tele end, a ratio of 1.6874.
- **L3.** β3 runs from 2.0895 to 2.5212, a ratio of 1.2066.
- **L4.** β4 is nearly constant at about 0.740.

In logarithmic terms L2 supplies 73.6 % of the zoom ratio and L3 supplies 26.4 %. L2 is therefore the principal variator
and L3 a secondary variator that also compensates the image position. The product f1·β2·β3·β4 reproduces the system
focal length at every station. Only the three published stations are sampled, so a reversal of either moving group
between them cannot be excluded.

**First-order character.** The paraxial back focal distance is 14.18 mm at the wide end, against a wide-end EFL of
14.41 mm. The ratio BFD/EFL is 0.984, 0.709 and 0.483 at the three stations, so the design does not meet the BFD > EFL
criterion for a retrofocus. It does not meet the telephoto criterion either: TL/EFL is 5.563 at the wide end and 2.732 at
the tele end. The negative lead is used to accept an 80.7° paraxial field at the wide end within a fixed-length barrel.
It is not used to lengthen the back focus.

**Stop and F-number schedule.** The aperture stop sits between G21 and G22 inside L2 (¶0034) and moves with that group.
The patent publishes the F-numbers F4.08, F5.18 and F6.43 but no stop diameter. The data file therefore uses an iris
schedule calibrated to those F-numbers, giving stop semi-diameters of 4.451, 4.189 and 4.080 mm. This is a model
inference, not a published diameter. A fixed iris equal to the wide-end value would give F4.08, F4.88 and F5.89, so the
published tele value of F6.43 requires the limiting aperture to be about 8.3 % smaller in radius at the tele end.

**Image field.** The published image heights are 12.24, 13.31 and 14.12 mm at the three stations. The published half-fields
of 40.33°, 33.59° and 25.69° equal atan(Y/f) to within 0.015°, so they are paraxial field definitions rather than real
chief-ray angles. The aberration plots likewise use the image height as their field coordinate (¶0043). At the wide
end the real chief ray reaches the published 12.24 mm image height at a 44.45° half-field, which corresponds to −13.4 %
distortion. A real chief ray entering at 40.33° lands at only 10.87 mm. Canon states that optical and digital
corrections are combined at the widest setting. That statement is consistent with the design's substantial wide-end
barrel distortion (see Verification Summary).

In the data file the elements carry sequential names L1–L10, with the patent labels G11–G41 as diagram labels. In this
analysis L1–L4 always denote the patent's lens groups, and elements are identified by their patent labels.

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens values in air. In-situ behavior is described separately and draws on
the third-order (Seidel) contributions computed from the prescription at the published F-number and half-field. Those
contributions are given as image-plane quantities for each station's paraxial image, with transverse values in mm and
distortion in percent. The third-order values are bookkeeping for the balance between elements. They are not predictions
of real full-field performance, which the higher orders modify substantially in this wide-field design.

### G11 — Negative Meniscus (convex to object)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 / TAF1 class (772496 lanthanum flint; vendor unresolved). f = −19.50 mm.

G11 is the front element and the strongest element in L1. Its standalone focal length is close to the whole group's
−20.50 mm. The meniscus is convex toward the object. The concave rear surface (R = 11.439 mm, φ = −0.0675 mm⁻¹) carries the element's negative
power, and the convex front surface is weakly positive (φ = +0.0155 mm⁻¹).

In third order G11 is the dominant source of barrel distortion, contributing −25.95 % at the wide end against a system
third-order total of −17.27 %. It also contributes the largest single lateral-colour term (−0.150 mm, F−C, at the wide
end) and a large Petzval-field term (+2.19 mm at the wide end), of opposite sign to that of the positive elements of L2.
Its high index permits a shallower rear curvature for this power than a lower-index glass would need. Six print-compatible glasses were found across the
surveyed catalogs, so no single vendor is identified.

### G12 — Biconcave Negative (2× Asph)

nd = 1.53504, νd = 55.7. Glass: Unmatched (molded optical polymer, COP-like coordinates nd 1.53504 / νd 55.7; supplier and grade unconfirmed). f = −59.96 mm.

G12 is a weak negative element, aspherical on both faces (surfaces 4 and 5). Its index and Abbe number match no glass
catalog. They fall in the range of cyclo-olefin optical polymers, which is consistent with Canon's description of two
plastic-molded aspherical elements. The supplier is not identified.

The element's value lies in its aspheric profile, not its power. At the wide end the paraxial chief ray at G12 is more
than three times higher than the marginal ray (ȳ/y = −3.42 at surface 4), so its aspheric terms act mainly on the field
aberrations. At the tele end the ratio falls below unity (−0.82), and the same surfaces act mostly on spherical
aberration. The Aspherical Surfaces section quantifies both roles.

### G13 — Biconvex Positive

nd = 1.84666, νd = 23.9. Glass: S-TIH53WN (OHARA). f = +60.04 mm.

G13 is the positive member that completes the negative–negative–positive sequence the patent prefers for L1 (¶0019,
claim 12). It is a dense titanium flint. In a negative group, pairing a low-dispersion negative element with a
high-dispersion positive element reduces the group's chromatic contribution. Consistent with that, G13's third-order
lateral colour (+0.118 mm at the wide end) opposes G11's (−0.150 mm), and its axial colour opposes those of G11 and G12.
Among the nd 1.84666 candidates, S-TIH53WN is the only one whose listed Abbe number rounds to the published 23.9.

### G21 — Positive Meniscus (convex to image)

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +83.51 mm.

G21 is a weak, nearly plano-convex fluor-crown element (R = −788.613 / −38.750 mm) placed ahead of the aperture stop at
the front of L2. The patent names G21, or all of L2, as the element that may be decentered for image stabilization
(¶0034, ¶0036, claim 15). Its weak power keeps its in-situ aberration contributions small. Its third-order spherical
contribution at the wide end is −0.006 mm, against −0.168 mm for G22. Small in-situ contributions are generally desirable in a decentering element, because they limit the aberrations
that decentering introduces. Its stabilization sensitivity is discussed under Image
Stabilization.

### G22 — Positive Meniscus (convex to object)

nd = 1.80400, νd = 46.5. Glass: S-LAH65VS (OHARA). f = +36.01 mm.

G22 sits immediately behind the stop and is the strongest air-spaced positive element in L2; G21 is much weaker. As the
positive element nearest the stop, where the axial marginal ray is tall, it generates the largest undercorrected spherical aberration in the system (−0.168 mm transverse at the wide end, −0.304 mm at the tele end). It also generates the largest
undercorrected axial colour (−0.098 mm at the wide end). The lanthanum-flint index limits its surface curvatures for the
required power. HOYA TAF3D and SCHOTT N-LASF44 are marginally closer by the combined coordinate metric, but both list
nd 1.80420 rather than the published 1.80400.

### D1 — Cemented Doublet G23 + G24

The only cemented component pairs a very-high-index negative meniscus with a low-dispersion biconvex positive element.
The junction radius is 7.424 mm.

- **G23 — Negative Meniscus (convex to object).** nd = 1.95375, νd = 32.3. Glass: S-LAH98 / TAFD45 class (954323 dense lanthanum flint; vendor unresolved). f = −21.90 mm.
- **G24 — Biconvex Positive.** nd = 1.49700, νd = 81.7. Glass: S-FPL51 / FCD1 class (497816 fluorophosphate ED crown; Canon UD). f = +13.39 mm.

Standing alone, the doublet has a net focal length of +39.06 mm. It is the classic achromatizing arrangement in which a
strong low-dispersion positive element (G24, f = +13.39 mm) is paired with a strong high-dispersion negative element
(G23, f = −21.90 mm), so that much of their power cancels while their dispersions do not. In situ the doublet partly
offsets the undercorrected axial colour of G21 and G22. D1 contributes +0.050 mm of axial colour at the wide end, against
−0.098 mm from G22 and −0.026 mm from G21. The large index step across the junction (Δnd = 0.457) makes the cemented surface strongly powered
(φ = −0.0615 mm⁻¹) without an air-spaced surface pair. The doublet's third-order coma
(+0.243 mm at the wide end) is the largest in the system and opposes that of G22 (−0.198 mm).

G24 is the design's only fluorophosphate-class crown and corresponds in class to Canon's single UD element. No catalog row
reproduces νd 81.7 exactly. The nearest listed row is HIKARI J-FK01A. S-FPL51 and FCD1 are named as the conventional
class heads. The data file marks G24 `apd: "inferred"` on the basis of glass class only; the patent publishes no
partial-dispersion data (see Chromatic Correction Strategy).

### G31 — Biconcave Negative

nd = 1.63980, νd = 34.5. Glass: S-TIM27 (OHARA). f = −20.42 mm.

G31 is the front element of the focusing group L3 and provides nearly all of its negative power. It lies well behind the
stop, where the chief ray is again taller than the marginal ray (ȳ/y between 1.46 and 1.76 across the zoom), and its
third-order behavior mirrors that of L1:

- **Distortion.** It contributes +10.04 % at the wide end, which opposes G11's barrel term.
- **Field curvature.** Its Petzval-field term (+2.22 mm at the wide end) offsets the positive elements of L2.
- **Colour.** It contributes +0.077 mm of axial colour and +0.118 mm of lateral colour at the wide end, balancing L2.

The patent's reason for making L3 a negative element followed by a positive one is the correction of wide-end field
curvature (¶0015). Placing a flint rather than a crown here is consistent with its colour-balancing role, but the patent
gives no glass rationale.

### G32 — Pos. Meniscus (2× Asph)

nd = 1.53504, νd = 55.7. Glass: Unmatched (molded optical polymer, COP-like coordinates nd 1.53504 / νd 55.7; supplier and grade unconfirmed). f = +85.04 mm.

G32 is the second polymer element, a weak positive meniscus concave to the object (R = −31.961 / −19.173 mm), aspherical
on both faces. It is the positive lens that claim 1 requires behind the negative lens of L3. Its paraxial power is small,
but its aspheric surfaces carry a large share of the field correction at every zoom position. ȳ/y at surfaces 19 and 20
stays between 1.91 and 2.36 across the zoom. The molding and mounting details are not published.

### G41 — Positive Meniscus (convex to image)

nd = 1.90043, νd = 37.4. Glass: TAFD37A (HOYA). f = +51.05 mm.

G41 alone forms L4, and its image-convex meniscus shape is a claim-1 requirement. The patent gives two reasons for this
single-element rear group. It is light, and its meniscus shape reduces ghost images generated near the image plane
(¶0016). The shape is bounded by condition (7) (¶0028). Its shape factor is −1.896.

The element also controls the exit pupil. At the wide end the paraxial chief ray at the full published field enters G41
at 22.29° to the axis and leaves at 12.96°. At the tele end the angles are 19.37° and 5.79°. The paraxial exit pupil lies
53.17, 84.17 and 139.21 mm in front of the image plane at the three stations. At the published image height the real
chief ray meets the image at 13.76° at the wide end and 6.33° at the tele end. This is the "telecentricity" that the
patent ties to condition (5) (¶0026) and condition (6) (¶0027). In third order G41 contributes −2.84 % distortion at the
wide end and −0.074 mm of lateral colour. The coordinate search found HOYA TAFD37A and TAFD37 as close class matches; this does not identify the production supplier.

## Glass Identification and Selection

The patent publishes only nd and νd. The labels below come from an unseeded search of 1,086 glasses in six current vendor
catalogs (OHARA, HOYA, HIKARI, CDGM, SCHOTT and SUMITA). They use the metric √(Δnd² + (Δνd/50)²). The θgF and ΔPgF columns
are catalog-derived values for the listed basis row, computed from vendor nF, nC and ng. ΔPgF is taken from the SCHOTT
normal line θgF = 0.6438 − 0.001682·νd. These values are context, not patent data. The data file stores no nC, nF, ng or
dPgF values.

| Element | nd / νd        | Label in data file              | Match                    | Basis row       | θgF    | ΔPgF    | Role                              |
| ------- | -------------- | ------------------------------- | ------------------------ | --------------- | ------ | ------- | --------------------------------- |
| G11     | 1.77250 / 49.6 | S-LAH66 / TAF1 class            | Coordinate match; supplier unresolved | OHARA S-LAH66   | 0.5520 | −0.0084 | front negative meniscus           |
| G12     | 1.53504 / 55.7 | Unmatched (COP-like polymer coordinates)   | Unmatched                | —               | —      | —       | aspheric field corrector          |
| G13     | 1.84666 / 23.9 | S-TIH53WN class               | Coordinate match; supplier unresolved | OHARA S-TIH53WN | 0.6208 | +0.0172 | L1 chromatic partner              |
| G21     | 1.48749 / 70.2 | S-FSL5 class                  | Coordinate match; supplier unresolved | OHARA S-FSL5    | 0.5300 | +0.0044 | weak pre-stop crown; IS candidate |
| G22     | 1.80400 / 46.5 | S-LAH65VS class               | Coordinate match; supplier unresolved | OHARA S-LAH65VS | 0.5577 | −0.0079 | main post-stop positive           |
| G23     | 1.95375 / 32.3 | S-LAH98 / TAFD45 class          | Coordinate match; supplier unresolved | OHARA S-LAH98   | 0.5905 | +0.0011 | doublet flint                     |
| G24     | 1.49700 / 81.7 | S-FPL51 / FCD1 class (inferred UD) | Close class; supplier unresolved | HIKARI J-FK01A  | 0.5372 | +0.0307 | doublet ED crown                  |
| G31     | 1.63980 / 34.5 | S-TIM27 class                 | Coordinate match; supplier unresolved | OHARA S-TIM27   | 0.5922 | +0.0064 | focus-group negative              |
| G32     | 1.53504 / 55.7 | Unmatched (COP-like polymer coordinates)   | Unmatched                | —               | —      | —       | aspheric field corrector          |
| G41     | 1.90043 / 37.4 | TAFD37A class                  | Coordinate match; supplier unresolved | HOYA TAFD37A    | 0.5766 | −0.0043 | rear meniscus; exit-pupil control |

The palette has three features. First, the glass elements use high-index lanthanum and titanium flints: five of the eight
glass elements have nd > 1.77. A high index permits lower curvatures for a given power, which matters in a lens whose elements are small and
strongly powered.
Second, the only low-index materials are the two crowns G21 and G24, both of low dispersion, and the two polymers G12
and G32, which carry all four aspheric surfaces. Third, G24 is the one element tagged as inferred APD in the model, consistent with a possible assignment of Canon’s single production UD element. This does not establish the production prescription or exclude anomalous partial dispersion in other glass classes.
Its class heads S-FPL51 and FCD1 have catalog ΔPgF of +0.0308 and +0.0321. The patent contains no conditional
expression on glass properties. For the two polymer elements only nd and νd are available, so any chromatic model of
them rests on the Abbe number alone.

## Focus Mechanism

**Type.** The design uses inner focus by the third group. L3 (G31 + G32) moves toward the image when focusing from
infinity to a near object, while L1, L2, L4 and the image plane stay fixed (¶0021, ¶0036, claim 14). Canon specifies a
lead-screw STM focus drive. The patent names no actuator.

**Source status.** The patent publishes infinity spacings only. The close-focus spacings in the data file are a
**constrained reconstruction**, not patent data. At each zoom station a single L3 shift is solved so that an object
0.15 m from the image plane (Canon's minimum focusing distance, assumed to be measured from the image plane) is imaged
onto that station's paraxial infinity image plane, with d16 + d20 conserved. Each station has exactly one root within
the available spacing.

| Station | f (mm) | L3 shift (mm) | d16 ∞ → close (mm) | d20 ∞ → close (mm) | Paraxial β at 0.15 m | Focus sensitivity |
| ------- | ------ | ------------- | ------------------ | ------------------ | -------------------- | ----------------- |
| Wide    | 14.41  | 1.428         | 2.57 → 3.998       | 5.74 → 4.312       | −0.177               | 1.84              |
| Middle  | 20.03  | 2.166         | 3.06 → 5.226       | 12.79 → 10.624     | −0.253               | 2.43              |
| Tele    | 29.35  | 4.126         | 5.63 → 9.756       | 18.28 → 14.154     | −0.385               | 2.93              |

The focus sensitivity is the paraxial image displacement per unit L3 displacement at infinity focus, |(1 − β3²)·β4²|. It
rises with β3 toward the tele end. The tele station nevertheless needs the longest travel, because the image shift
required for a given object distance grows roughly with the square of the focal length.

**Comparison with Canon.** The reconstructed tele magnification (|β| = 0.385 at 29.35 mm) agrees with Canon's 0.38× at
30 mm. The wide value (0.177 at 14.41 mm) is about 4.1 % larger than the 0.17× that Canon India lists at 14 mm. The
difference may reflect the assumed distance reference, the production focus design, or the paraxial treatment; it is
not resolved here. Canon's published fields of view at the minimum distance (126 × 84 mm at 14 mm; 57 × 38 mm at 30 mm)
imply frame widths of 22.3 and 21.9 mm at the reconstructed magnifications. These are mutually consistent.

**Limitations.** Intermediate focus distances in the data file use linear interpolation of the gaps between the infinity
and close keyframes. That is a model assumption, not a verified focus law. Whether production focusing breathes, and by
how much, is not established by this reconstruction.

## Aspherical Surfaces

Four surfaces are aspherical, on the two polymer elements: surfaces 4 and 5 (G12) and surfaces 19 and 20 (G32). The data
file labels them 4A, 5A, 19A and 20A.

**Equation and convention (¶0040–¶0041).** The patent defines the sag as

$$X = \frac{H^2/R}{1 + \sqrt{1 - (1+k)(H/R)^2}} + A H^4 + B H^6 + C H^8 + D H^{10} + E H^{12}$$

where X is the axial displacement from the vertex, positive in the direction of light travel, and H is the height from the
axis. The conic term uses the (1 + k) form, so k = 0 describes a sphere and the patent's k transfers unchanged to K. All
four surfaces have k = 0. The coefficients A–E are the tabulated A4–A12. No A14 term is published, and the data file sets
A14 = 0. No scaling was applied.

| Surface | Element   | K   | A4                      | A6                      | A8                      | A10                     | A12                      |
| ------- | --------- | --- | ----------------------- | ----------------------- | ----------------------- | ----------------------- | ------------------------ |
| 4A      | G12 front | 0   | $-5.04723\times10^{-5}$ | $9.76372\times10^{-7}$  | $-1.59689\times10^{-8}$ | $1.32446\times10^{-10}$ | $-5.68130\times10^{-13}$ |
| 5A      | G12 rear  | 0   | $-7.17848\times10^{-5}$ | $7.38593\times10^{-7}$  | $-1.30318\times10^{-8}$ | $9.24639\times10^{-11}$ | $-3.59028\times10^{-13}$ |
| 19A     | G32 front | 0   | $-2.04732\times10^{-4}$ | $3.95714\times10^{-7}$  | $4.88410\times10^{-8}$  | $2.88130\times10^{-9}$  | $-5.69956\times10^{-11}$ |
| 20A     | G32 rear  | 0   | $-1.03004\times10^{-4}$ | $-4.09262\times10^{-7}$ | $4.95272\times10^{-8}$  | $5.33678\times10^{-10}$ | $-9.62541\times10^{-12}$ |

**Departures.** The patent publishes no clear apertures, so departures are quoted only at the modeled semi-diameters in
the data file. At those semi-diameters the departures from the base sphere are:

| Surface | Modeled SD (mm) | Departure at SD (mm) |
| ------- | --------------- | -------------------- |
| 4A      | 9.6             | −0.284               |
| 5A      | 9.6             | −0.577               |
| 19A     | 5.6             | −0.109               |
| 20A     | 6.2             | −0.054               |

All four departures are negative, that is, toward the object. On G12 the rear-surface departure is 2.03 times the front
one at the same height, so the element is 0.293 mm thinner at the rim than its base spheres imply. The effect is equivalent to
adding positive power toward the rim of this negative element.

**Third-order roles.** The A4 terms enter the Seidel sums weighted by the chief-to-marginal height ratio ȳ/y at each
surface.

- **G12 at the wide end.** ȳ/y is −3.42 at surface 4 and −3.02 at surface 5. The two faces' aspheric distortion terms are
  large and of opposite sign: −8.61 % and +11.35 %.
- **G12 at the tele end.** ȳ/y falls to −0.82 and −0.65, and the same faces mainly contribute spherical aberration:
  +0.116 and −0.221 mm transverse.
- **G32.** ȳ/y stays near 2 at both zoom extremes, so its aspheric terms act on the field at every station.

The opposed front and rear terms show that each polymer element is used as an aspheric pair. The individual faces are
strongly figured while the pair's net third-order effect is moderate. That net effect is modified at full field by the
higher-order coefficients.

**Diagnostic sensitivity.** To show what the aspheric departures do beyond third order, the model was retraced with each
element's aspheric terms removed, leaving the base spheres. Paraxial quantities are
unchanged by construction. This is a perturbation of the as-designed system without re-optimization, not an estimate of
what an all-spherical design could achieve. Real-ray values below are referred to each station's paraxial image plane at
full aperture, for a real object-side half-field equal to the printed ω (40.33° at the wide end, 25.69° at the tele end).
At the wide end that field falls inside the published image height, so the as-designed distortion here is smaller in
magnitude than the value at 12.24 mm quoted elsewhere; the table is a like-for-like sensitivity at a fixed field angle.

| Station | Variant       | Distortion (%) | ΔM (mm) | ΔS (mm) | LSA (mm) |
| ------- | ------------- | -------------- | ------- | ------- | -------- |
| Wide    | as designed   | −11.15         | −0.089  | −0.001  | −0.041   |
| Wide    | G12 spherical | −14.19         | +5.445  | +1.232  | +0.161   |
| Wide    | G32 spherical | −12.61         | −2.912  | −0.958  | −0.542   |
| Tele    | as designed   | −0.64          | −0.230  | −0.022  | +0.015   |
| Tele    | G12 spherical | −0.64          | +0.996  | +0.235  | +1.486   |
| Tele    | G32 spherical | −2.80          | −6.326  | −2.167  | −0.822   |

Four observations follow from the table:

1. The dominant effect of both aspheric pairs is on field curvature and astigmatism. Removing either one moves the
   tangential focus by several millimetres.
2. The two pairs act in opposite directions on the field and on spherical aberration, so each partly compensates the
   other's residuals.
3. Both pairs reduce barrel distortion at the wide end, by 3.04 (G12) and 1.46 (G32) percentage points. Only G32 does so
   at the tele end, by 2.16 points. This agrees in direction with Canon's statement that the two PMo aspherical elements are placed to reduce
   distortion, but the traced effect on astigmatism is far larger.
4. G12 governs tele-end spherical aberration.

**Manufacture.** Canon describes both aspherical elements as PMo (plastic-molded). The patent itself does not describe
the manufacturing method; its prescription gives a molding-compatible optical polymer index for both elements.

## Chromatic Correction Strategy

Only d-line indices and Abbe numbers are published. Because νd defines nF − nC exactly, the primary (F–C) chromatic
contributions follow from the published data without assumption. The secondary spectrum and g-line behavior do not.

The primary colour balance is a group-level cancellation. The third-order F–C contributions at the full published
aperture and field, as transverse image-plane values in mm, are:

| Group     | Axial colour, wide | Axial colour, tele | Lateral colour, wide | Lateral colour, tele |
| --------- | ------------------ | ------------------ | -------------------- | -------------------- |
| L1        | +0.004             | +0.009             | −0.075               | −0.080               |
| L2        | −0.074             | −0.086             | +0.035               | +0.049               |
| L3        | +0.068             | +0.085             | +0.091               | +0.127               |
| L4        | −0.010             | −0.007             | −0.074               | −0.099               |
| **Total** | **−0.012**         | **+0.002**         | **−0.023**           | **−0.003**           |

- **Axial colour.** The positive variator L2 is undercorrected, as its positive power implies. Nearly all of that is
  cancelled by the negative variator L3, which is overcorrected. The cancellation holds at both ends of the zoom.
- **Lateral colour.** L1 and L4 on one side are balanced against L2 and L3 on the other.
- **Within L2.** The UD-class doublet D1 reduces L2's own axial colour by opposing G22 and G21 (see D1 above).
- **Within L1.** The dense flint G13 opposes the lanthanum-flint and polymer negatives.

The model tags G24 as inferred APD from its ED-class coordinate. Its class heads have catalog ΔPgF near +0.03, and the dense flint
G13's basis row has +0.0172. The patent publishes no partial-dispersion data, states no chromatic conditional
expression, and the data file carries no spectral fields. Canon describes the UD element only as correcting chromatic
aberration. The design is therefore described here as a primary-colour-balanced achromat with one ED-class element. No
apochromatic or secondary-spectrum claim is supported. The two polymer elements have no verified grade-specific catalog dispersion curves, so
their partial dispersion is unknown. [ZEON’s public COP property table](https://www.zeon.co.jp/business/enterprise/resin/cop/)
and its [COP brochure](https://www.zeon.co.jp/en/business/enterprise/resin/pdf/200323391.pdf) list several grades at nd = 1.535, but supply no wavelength-dependent index coefficients and do not identify any as Canon’s
material. The index match alone therefore does not support adding a spectral proxy for these elements.

## Aberration Correction Strategy

The patent explains its architecture in terms of three functions:

- **Fixed heavy groups.** L1 and L4 are the large, heavy groups, and fixing them during zoom shrinks the zoom mechanism
  (¶0015).
- **Neg + pos L3.** Making L3 a negative element followed by a positive element improves wide-end field curvature (¶0015).
- **Meniscus L4.** Making L4 a single image-convex meniscus saves weight and suppresses ghosts near the image (¶0016).

The third-order bookkeeping shows how the monochromatic correction is shared among the groups.

| Group     | Distortion, wide (%) | Distortion, tele (%) | Petzval field, wide (mm) | Spherical, wide (mm) | Spherical, tele (mm) |
| --------- | -------------------- | -------------------- | ------------------------ | -------------------- | -------------------- |
| L1        | −23.45               | −6.41                | +2.324                   | +0.013               | +0.057               |
| L2        | −0.84                | −0.51                | −3.457                   | −0.150               | −0.186               |
| L3        | +9.86                | +9.56                | +1.675                   | +0.151               | +0.129               |
| L4        | −2.84                | −4.10                | −0.752                   | −0.016               | −0.004               |
| **Total** | **−17.27**           | **−1.46**            | **−0.210**               | **−0.003**           | **−0.004**           |

Three balances stand out.

1. **Distortion.** L1 supplies most of the third-order barrel distortion. At the wide end it is
   partly cancelled by the pincushion contribution of L3 behind the stop. L3's contribution stays near +9.6 to +9.9 %
   across the zoom, while L1's falls from −23.45 % to −6.41 % as the field narrows. The third-order total is therefore
   strongly barrel at the wide end and small at the tele end. Higher orders reduce the wide-end value to a real
   −13.4 % at the published image height, but they do not remove it.
2. **Spherical aberration.** The undercorrection of L2, chiefly from G22, is almost exactly cancelled by L3. The
   third-order total is −0.003 mm at the wide end and −0.004 mm at the tele end. The real longitudinal spherical
   aberration at full aperture is within ±0.06 mm at both ends.
3. **Field curvature.** The Petzval sum is small: +0.002812 mm⁻¹, a Petzval radius of −355.6 mm. It is formed by cancelling the positive L2 and L4 against the two negative groups. At the wide end the third-order tangential field is
   strongly backward-curving, +0.991 mm at the edge of the field, but the real tangential focus at the published image
   height is only −0.131 mm from the paraxial image. The flat real field at the wide end is thus a balance between
   third-order and higher-order astigmatism. The aspheric pairs on G12 and G32 are central to that balance (see Aspherical Surfaces).

This distribution is consistent with the patent's rationale. The negative-plus-positive L3 corrects distortion,
spherical aberration and field curvature as well as focusing, and its distortion contribution changes little with zoom
position.

## Conditional Expressions

The patent defines nine conditions (claims 1–9, ¶0014, ¶0023) and two nested preferred ranges, (a) (¶0032) and (b)
(¶0033). The values below were recomputed from the prescription; published values are from Table 1 (¶0044). Here f1–f4
are the group focal lengths, BFw and LDw are the back focus and total length at the wide end, SF_G41 is the shape factor
of G41, and β2 and β3 are the group lateral magnifications at infinity focus.

| No. | Expression                                 | Broad range    | Example 5, computed | Table 1 | (a) | (b) |
| --- | ------------------------------------------ | -------------- | ------------------- | ------- | --- | --- |
| (1) | f3 / f1                                    | 0.5–2.0        | 1.4152              | 1.415   | ✓   | ✓   |
| (2) | f2 / (−f1)                                 | 0.70–1.40      | 0.8489              | 0.849   | ✓   | ✓   |
| (3) | f4 / (−f1)                                 | 1.90–3.50      | 2.4897              | 2.490   | ✓   | ✓   |
| (4) | f2 / (−f3)                                 | 0.20–0.90      | 0.5998              | 0.600   | ✓   | ✓   |
| (5) | (−f3) / f4                                 | 0.30–0.80      | 0.5684              | 0.568   | ✓   | ✓   |
| (6) | BFw / LDw                                  | 0.10–0.30      | 0.1771              | 0.177   | ✓   | ✓   |
| (7) | SF_G41 = (rG41b + rG41a) / (rG41b − rG41a) | −3.00 to −1.01 | −1.8960             | −1.896  | ✓   | ✓   |
| (8) | β2t / β2w                                  | 1.35–2.00      | 1.6874              | 1.688   | ✓   | ✓   |
| (9) | β3t / β3w                                  | 1.05–1.45      | 1.2066              | 1.207   | ✓   | ✓   |

Example 5 satisfies every condition in its broad, (a) and (b) forms. The patent's rationale for each condition is as
follows:

- **(1).** An overly strong L1 makes wide-end field curvature hard to correct, and an overly weak L1 enlarges the lens
  (¶0017).
- **(2) and (3).** These bound the strength of L1 relative to L2 and L4 against the same aberration-versus-size trade
  (¶0023–¶0024).
- **(4).** This limits L2 against L3 (¶0025).
- **(5).** The lower limit preserves telecentricity through adequate L4 power (¶0026).
- **(6).** This ties back focus to total length for telecentricity and compactness (¶0027).
- **(7).** This bounds the meniscus bending of G41 between ghost suppression and aberration control (¶0028).
- **(8) and (9).** These keep the variator magnification ratios in a range where aberrations can be corrected over the
  zoom (¶0029–¶0030).

The lower bound of condition (9) is a source inconsistency. It is printed as 0.05 in claim 9 and in configuration 9
(構成９), but as 1.05 in ¶0023. Example 5, at 1.207, satisfies either reading.

## Image Stabilization

The patent allows either G21 alone (¶0034) or the whole of L2 (¶0036, claim 15) to move with a component perpendicular to
the axis for image stabilization. It gives no decentering range and no stabilization performance. Canon specifies optical
IS rated at up to 5.0 stops (CIPA 2024, at 30 mm on an EOS R7). Canon does not identify the stabilizing element. The
paraxial image displacement per unit lateral displacement, (1 − β_g)·β_after, at infinity focus is:

| Station | G21 alone | All of L2 |
| ------- | --------- | --------- |
| Wide    | 0.425     | 2.249     |
| Middle  | 0.502     | 2.703     |
| Tele    | 0.597     | 3.297     |

The two options differ in sensitivity by a factor of 5.30 to 5.52. A G21 stabilizer would need 1.67–2.36 mm of travel for
each millimetre of image correction, but it would move only a single weak element whose aberration contributions are
small. A whole-L2 stabilizer would need 0.30–0.44 mm per millimetre of image correction, but would move four elements and
the aperture stop. The sensitivity table does not establish which option Canon adopted.

## Verification Summary

The data file is a direct transcription of Numerical Example 5 with the following documented transformations.

- **Omitted planes.** Patent surface 1, a flat air-to-air plane with zero spacing, is omitted. Patent surface 11, a flat
  air-to-air plane 0.00 mm behind the stop, is also omitted, and its 1.00 mm spacing is added to the stop, which the data
  file labels STO. Neither omission changes any axial station, and the full 22-surface branch gives the same EFL and back
  focus.
- **Labels and scale.** Surface labels keep the patent numbering, with an A suffix on aspheric surfaces. No scaling was
  applied.
- **Image space.** No cover glass or filter is listed, so the last spacing is the published back focus of 14.20 mm, which
  the patent defines as air-equivalent (¶0039).
- **Modeled quantities.** The semi-diameters are not published. They were read from the to-scale Fig. 9 section, with five
  documented reductions at surfaces 3, 4A, 18, 19A and 20A to satisfy cross-gap clearance. The stop schedule is
  calibrated to the published F-numbers, and the close-focus spacings are a constrained reconstruction, as described
  above.

Against the published data, the recomputed EFLs are 14.409, 20.035 and 29.343 mm (published 14.41, 20.03 and 29.35 mm).
The paraxial back focus is 14.184, 14.202 and 14.177 mm (published 14.20 mm). The group focal lengths, the Table 1
magnifications and all nine conditions reproduce within the rounding of the printed prescription. The sum of the printed
spacings is 80.16, 80.15 and 80.16 mm, against the published total length of 80.14 mm. That difference is within the
accumulated rounding of the printed spacings.

The Fig. 10 plots use the image height as their field coordinate (¶0043); the top of each panel is the published image
height, labelled with the printed ω. On that basis a real-ray trace with the patent's asphere equation reproduces the
distortion at both ends, the sagittal field at both ends and the spherical aberration at both ends within graphical
tolerance. The trace gives −13.42 % at the published 12.24 mm image height, against about −12.9 % read from the figure,
and follows the plotted wide-end distortion curve to within 0.18 percentage points from 0.2 to 1.0 of the image height.
It does not reproduce the meridional field at the edge of the field:

- **Wide end.** The trace gives −0.131 mm at the published image height, against about −0.05 mm read from the figure.
- **Tele end.** The trace gives −0.237 mm at the published image height, against about +0.11 mm read from the figure.

These residuals exceed the propagated rounding uncertainty of the prescription. No single misprinted aspheric sign or
exponent restores agreement, and the first-order data all agree. The printed table is therefore treated as governing,
and the meridional-field plots are considered likely to reflect a different design state. The trace does not reproduce
the meridional field, and this discrepancy is recorded rather than reconciled.

**Wide-end coverage.** At the wide end the real chief ray reaches the published 12.24 mm image height at a 44.45°
half-field and clears every modeled semi-diameter by at least 1.03 mm. That image height is below the nominal APS-C
half-diagonal. Canon's marketed diagonal angle of view at 14 mm corresponds to a half-angle of 44.25°, close to that
real field. This is consistent with a production image in which digital correction expands the barrel-distorted
wide-end image to fill the frame, as Canon's description of combined optical and digital correction implies. It is not proof of Canon's correction method.

## Sources

**Primary patent source.** Japan Patent Office. _特開2025-50505 (JP 2025-50505 A): ズームレンズおよび撮像装置._
Applicant Canon Inc.; inventor 仲田 丈晴. Application 特願2023-159337, filed 25 September 2023; published 4 April 2025.
The material cited here is located as follows:

- claims 1–16: pp. 2–3;
- background and objective, ¶0002–¶0005: p. 3;
- architecture and rationale, ¶0012–¶0021: pp. 4–6;
- conditions, ¶0022–¶0033: pp. 6–7;
- configurations, motion and conventions, ¶0034–¶0040: p. 8;
- asphere equation, ¶0041: p. 9;
- Numerical Example 5: pp. 13–15;
- Table 1, ¶0044: p. 15;
- Figs. 9 and 10: p. 20.

**Manufacturer sources.**

- Canon Europe. "Canon RF-S 14-30mm F4-6.3 IS STM PZ Lens — Specifications." canon-europe.com, retrieved 29 September 2026.
- Canon U.S.A. "RF-S14-30mm F4-6.3 IS STM PZ." usa.canon.com shop page, retrieved 29 September 2026.
- Canon U.S.A. "Canon Unveils New Lenses for High-Level Social Creators …" Press release, 26 March 2025.
- Canon Canada. "RF-S14-30mm F4-6.3 IS STM PZ." Product and shop pages (canon.ca, shop.canon.ca), retrieved 29 September 2026.
- Canon Asia. "RF-S14-30mm f/4-6.3 IS STM PZ: Canon's First RF Power Zoom Lens." SNAPSHOT, 27 March 2025.
- Canon India. "Canon announces EOS R50 V with RF-S 14-30mm F4-6.3 IS STM PZ Lens." Press release, 27 March 2025.

**Glass catalogs** (vendor data files as distributed with the `opticalglass` 2.0.2 package):

- OHARA, 12 March 2025;
- HOYA, 1 April 2026;
- HIKARI, general catalog;
- CDGM, September 2024;
- SCHOTT, January 2025;
- SUMITA, version 14.01.03.

**Method references.**

- Welford, W. T. _Aberrations of Optical Systems._ Bristol: Adam Hilger, 1986, ch. 8, for the Seidel sums, including the
  aspheric terms.
- SCHOTT AG. _TIE-29: Refractive Index and Dispersion_, for the partial-dispersion normal line.
