# Minolta MD Zoom 28-85mm f/3.5-4.5

## Patent Reference and Design Identification

**Patent:** JP H01-193709 A (特開平1-193709)
**Application Number:** 特願昭63-304987, a divisional of 特願昭56-192492
**Filed:** 1981-11-30 (filing date of the parent application 特願昭56-192492)
**Published:** 1989-08-03
**Inventors:** Hisashi Tokumaru (得丸 祥), Shuji Ogino (荻野 修司)
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)
**Title:** 広角域を含む高変倍率ズームレンズ系 (High-zoom-ratio zoom lens system including the wide-angle range)
**Classification:** G02B 15/20
**Worked examples:** 6
**Embodiment analyzed:** Example 1 (実施例1)

JP H01-193709 A is a divisional publication of the Japanese application filed on 30 November 1981. The same priority
application supports US 4,591,235 A ("Zoom lens system", Minolta Camera Kabushiki Kaisha, granted 27 May 1986), whose
Embodiment 1 prints the same prescription as Example 1 here. The Latin forms of the inventors' names are taken from that
US front page. Example 1 is printed on p. 47 (PDF p. 3), with its condition values at the top of p. 48 (PDF p. 4). Its
lens section and aberration plots are Figs. 2 and 3 on p. 50 (PDF p. 6).

The correlation of Example 1 with the Minolta MD Zoom 28-85mm f/3.5-4.5 is a research identification, not a
manufacturer confirmation. No Minolta brochure, manual or specification sheet for this lens was located, so every
marketed value cited here comes from third-party sources (see Sources). The convergent evidence is:

1. **Construction.** Example 1 has 13 elements in 10 groups, the count reported for the production lens. Examples 3, 4
   and 5 share this count, so it does not by itself single out Example 1.
2. **Focal-length range and format.** The printed f = 28.8–82.5 mm and the image height Y′ = 21.63 mm (the 24 × 36 mm
   half-diagonal) correspond to a 28–85 mm lens for 35 mm film.
3. **Aperture.** The printed F-numbers 3.6 / 4.0 / 4.63 correspond to the marketed f/3.5–4.5 after the usual marketing
   rounding.
4. **Kinematics.** The design is a negative-lead four-group zoom whose overall length is shortest at the long end,
   consistent with a third-party observation that the two-touch MD lens is shortest at the long end.
5. **Timing.** The 1981 filing precedes the production lens, which third-party sources date to 1983.

The printed 82.5 mm long end is 2.9 % shorter than the marketed 85 mm, and the marketed apertures are about 0.08 stop
brighter than the printed values at each end. One third-party review describes aspherical elements; Example 1 is all-spherical,
and no evidence was found that the production lens departs from it.

## Optical Architecture

Example 1 is a four-group zoom with the power sequence negative–positive–negative–positive. The groups are L1
(E1–E4, f = −41.67 mm), L2 (E5–E8, f = +30.85 mm), L3 (E9–E10, f = −39.37 mm) and L4 (E11–E13, f = +56.84 mm). The
computed group focal lengths reproduce the printed f1–f4 (p. 47) within 0.0011 mm. There are two cemented components: the triplet
E5–E6–E7 at the front of L2 and the doublet E9–E10 that forms all of L3. All 23 refracting surfaces are spherical.

The patent explains the architecture as a change of type across the zoom range (pp. 45–46). At the short end the
system divides into the negative L1 and a positive rear assembly of L2–L4, which is a retrofocus (逆望遠型)
arrangement. At the long end it divides into a positive front pair (L1 + L2) and a negative rear pair (L3 + L4), which
the patent calls a telephoto-type (望遠型) arrangement. According to the patent, this is why the long-end overall
length is shorter than that of the conventional two-group wide-angle zoom. The computed first-order data support the
first description and limit the second:

| Quantity (infinity focus) | Wide | Middle | Tele |
|---|---|---|---|
| EFL (printed 28.8 / 50.0 / 82.5 mm) | 28.800 mm | 50.006 mm | 82.505 mm |
| Back focal distance from r23 | 38.77 mm | 46.13 mm | 56.13 mm |
| BFD / EFL | 1.35 | 0.92 | 0.68 |
| Track, r1 to image | 149.86 mm | 129.94 mm | 126.54 mm |
| Track / EFL | 5.20 | 2.60 | 1.53 |

The back focal distance exceeds the focal length only at the wide station, so the system is a true retrofocus only
there. The track never falls below the focal length. The telephoto description in the patent therefore refers to the
front-positive, rear-negative split of power, not to a telephoto ratio below unity.

The four-group form can also be read as a two-group zoom. Because the system EFL equals f1 multiplied by the lateral
magnification of everything behind L1, the L2–L4 assembly works at −0.69, −1.20 and −1.98 at the three stations. It
passes through unit magnification at f = 41.67 mm, the magnitude of f1. The zoom ratio is 2.86, inside the 2.5–3.5×
range that the patent sets as its object (p. 45).

### Zoom kinematics

Claim 1 requires the L1–L2 and L3–L4 spaces to shrink and the L2–L3 space to grow toward the long end, with at least
L1, L2 and L4 moving. In Examples 1–5, L2 and L4 move together (p. 47). The patent notes that L3 may be held fixed
relative to the image to reduce the number of zoom cams, and that placing the stop in this fixed group simplifies the
barrel further (p. 47). The Example 1 spacings satisfy both conditions: d14 + d17 is constant to within 0.01 mm, and L3 stays fixed to
the image within 0.009 mm, a residual at the level of the printed rounding.

| Spacing | Wide | Middle | Tele | Motion |
|---|---|---|---|---|
| d8 (L1–L2) | 41.48 | 14.19 | 0.80 | zoom; also the focusing gap |
| d14 (L2–L3, patent) | 4.20 | 11.57 | 21.55 | zoom |
| d17 (L3–L4) | 18.85 | 11.49 | 1.50 | zoom |
| Back focus (computed) | 38.77 | 46.13 | 56.13 | zoom |

Relative to the wide station, L2 and L4 advance 17.36 mm toward the object, while L1 moves 19.91 mm (middle) and
23.32 mm (tele) toward the image. The three stations alone show L1 moving only toward the image.

The full zoom law can be found by applying the patent's constraints continuously: L2 and L4 advance together, L3 stays
fixed to the image, and L1 is placed so that the infinity image stays on the fixed plane. This law reproduces the
printed d8 at the middle and tele stations to within 0.004 mm. It shows that L1 travels 23.52 mm toward the image, to
a turning point near f = 74.7 mm, and then returns 0.19 mm toward the object. The overall length is therefore shortest
(126.34 mm) slightly before the long end.

The data file carries only the three published stations. Between them, the viewer interpolates the spacings linearly,
which is not the curved path of L1. Intermediate zoom positions are therefore approximations; their paraxial image
falls up to about 3.6 mm from the image plane.

### Stop

The patent prints no stop position or diameter. The stop is placed 2.23 mm ahead of r15, inside the L2–L3 space and
fixed to the image with L3. This position is derived from the S mark in Fig. 2, which falls 2.19–2.29 mm ahead of r15
when the figure is scaled to the prescription. It also agrees with the patent's remark about a stop in the fixed group
and with claim 13 of US 4,591,235. A single fixed iris of 7.697 mm semi-diameter gives F/3.64, 3.97 and 4.63 at the
three stations, matching the printed F3.6 / 4.0 / 4.63 within print rounding. That diameter is a calibration to the
printed F-numbers, not a published dimension. The rise in F-number through the zoom comes from the entrance pupil
growing more slowly (semi-diameter 3.96 → 8.91 mm) than the focal length.

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens values in air. Several elements behave very differently in place.
The marginal ray widens behind the negative L1, so it crosses L2 and L3 at greater heights than at r1, and their
in-situ contributions to system power exceed their standalone powers. In-situ shares quoted below are each element's
contribution to the total power, normalized to the system power at the stated station. Semi-diameters in the data file
are modeled from ray envelopes and edge-thickness limits, with E8 and E13 fitted to the rims drawn in Fig. 2; the patent
publishes none.

### Group L1 — negative front group (E1–E4)

L1 leads with two negative elements and follows them with two positive dense flints. As the moving front group, it
also carries the reconstructed focusing motion. The patent attributes a much smaller front diameter to a
negative-leading first group than to a positive-leading one (p. 47). The modeled front clear aperture is 50.0 mm, but
this is a modeled semi-diameter, not a published one.

#### E1 — Negative Meniscus, convex to object

nd = 1.7725, νd = 49.8. Glass: TAF1 (Hoya) / N-LAF34 class (equivalent). f = −54.64 mm.

The front surface is nearly flat (r1 = 333.3 mm) and the rear surface is strongly concave (r2 = 37.38 mm). The rear
surface r2 is the "R" of condition (2), the object-side surface of the first air space. The patent ties its curvature
to the balance between spherical aberration and zonal coma from the middle to the long end (p. 47).

#### E2 — Biconvex Positive

nd = 1.80741, νd = 31.6. Glass: Unmatched (807316 lanthanum dense flint). f = +72.50 mm.

E2 is nearly plano-convex, with a weak front surface (r3 = 374.7 mm) and almost all of its power at the rear. It is
the first of two positive flint elements in L1. No current catalog glass lies within the matching tolerance of this
coordinate; the nearest candidates differ by about 1.7 in νd. The six-digit code 807316 is that of the discontinued
Schott glass LaSF8 in the Newport Glass cross-reference; this is a coordinate match, not a supplier identification, and
no dispersion data for it are in the viewer's catalog, so the element stays unmatched.

#### E3 — Biconcave Negative

nd = 1.7725, νd = 49.8. Glass: TAF1 (Hoya) / N-LAF34 class (equivalent). f = −38.02 mm.

E3 is the strongest negative element in L1, both standalone and in place, where its share of total power ranges from
−0.87 at the wide station to −2.50 at the tele station. It uses the same lanthanum glass as E1. Its object-side
surface is weak (r5 = −175.4 mm) and its image-side surface carries most of its power (r6 = 35.42 mm).

#### E4 — Positive Meniscus, convex to object

nd = 1.84666, νd = 23.9. Glass: S-TIH53WN (OHARA) / FDS90 class (exact coordinate match). f = +125.01 mm.

E4 is a weak meniscus in the densest flint of the design, and it closes L1 with a surface concave to the image
(r8 = 42.05 mm). L1 thus pairs two lanthanum glasses of νd 49.8 in its negative elements with two flints of νd 31.6
and 23.9 in its positive ones.

### Group L2 — positive variator (E5–E8)

Claim 1 defines L2 as a biconvex lens with negative menisci cemented to both faces, followed by a positive singlet.
The patent compares this choice with two alternatives (p. 46):

- **Doublet plus singlet.** L2 alone would be less fully corrected, and the L2–L3 air space would have to share the
  correction. Image quality would then become sensitive to cam errors in that space.
- **Two cemented doublets.** The combined centre thickness would be larger, which is less favourable for marginal
  illumination.

The cemented triplet E5–E6–E7 has a net focal length of +49.17 mm. As the patent prefers, its two menisci differ in
both index and Abbe number (p. 46).

#### E5 — Negative Meniscus, convex to object (triplet front)

nd = 1.834, νd = 37.1. Glass: S-LAH60 (OHARA) (close). f = −43.58 mm.

The front surface r9 (36.67 mm) is the air-bounded entry of the triplet. The cemented surface r10 (18.006 mm) is the
most steeply curved surface in the lens. The index step across this junction is 0.137.

#### E6 — Biconvex Positive (triplet core)

nd = 1.6968, νd = 56.5. Glass: H-LaK12 (CDGM) (nd-exact, νd equivalent). f = +18.24 mm.

E6 is the strongest element in the design: standalone, f = +18.24 mm; in place, it contributes 3.66 times the system
power at the wide station and 5.97 times at the tele station. Both of its faces are cemented. The printed νd = 56.5
lies about one unit above the common 1.6968 / 55.5 lanthanum-crown class. The US family document prints the same
value, so it is kept as published.

#### E7 — Negative Meniscus, concave to object (triplet rear)

nd = 1.75, νd = 25.1. Glass: FF8 (Hoya) (close within the two-decimal nd). f = −72.10 mm.

E7 is cemented to the rear face of E6 (r11 = −35.53 mm) and leaves the triplet through a weak surface (r12 = −105.0
mm). Its low νd differs from that of E5 (37.1), which satisfies the patent's preference for unequal menisci.

#### E8 — Positive Meniscus, convex to object

nd = 1.618, νd = 63.5. Glass: PCD4 (Hoya) / N-PSK53A class (close). f = +76.44 mm.

E8 is the separate positive singlet named in claim 1, and the only crown of νd above 60 in L2. Its modeled semi-diameter
(12.4 mm) follows Fig. 2, which draws E8 level with the cemented triplet; the edge thickness there is 0.90 mm.

### Group L3 — negative stationary group (E9–E10)

L3 is a single cemented doublet with a net focal length of −39.37 mm, identical to the printed f3. In Example 1 it does
not move relative to the image, and the modeled stop sits immediately in front of it. Conditions (3) and (4) are the
patent's means of reaching good correction over the whole range without moving L3 (p. 47).

#### E9 — Positive Meniscus, concave to object

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) / SF6 class (exact). f = +42.96 mm.

E9 is a dense flint meniscus that faces the stop with a weak concave surface (r15 = −102.7 mm).

#### E10 — Biconcave Negative

nd = 1.7425, νd = 52.5. Glass: 743525 lanthanum crown (nearest S-LAL61 / TAC2 differ in nd by −0.0015). f = −20.63 mm.

E10 is the strongest negative element in the system, with an in-place share of −2.47 to −3.20 of total power. It
pairs a lanthanum crown with the flint E9 across the cemented surface r16 (−26.13 mm). The nearest current catalog
glasses differ in nd by more than the printed precision, so the label is a six-digit code rather than a catalog name.

### Group L4 — positive rear group (E11–E13)

L4 consists of two positive lanthanum crowns followed by a negative flint meniscus. It moves with L2, and at the long
end it is the positive member of the negative rear pair (L3 + L4) described by the patent.

#### E11 — Biconvex Positive

nd = 1.6405, νd = 60.1. Glass: N-LAK21 (Schott) (exact). f = +39.30 mm.

Most of E11's power is at its rear surface (r19 = −31.57 mm). It is the strongest positive element of L4.

#### E12 — Biconvex Positive

nd = 1.67, νd = 57.1. Glass: 670571 lanthanum crown (J-LAK02 Hikari class). f = +65.75 mm.

E12 is a weaker biconvex lens. Because the patent prints its index to only two decimals, the glass is identified by
class.

#### E13 — Negative Meniscus, concave to object

nd = 1.7569, νd = 31.8. Glass: NBFD9 (Hoya) class (757318 lanthanum flint; catalog equivalent). f = −37.91 mm.

The last element faces the small air space d21 (2.0 mm) with a strongly concave surface (r22 = −27.71 mm) and leaves
the lens through an almost flat surface (r23 = −831.7 mm). The discontinued HOYA glass NBFD9 (1.75690 / 31.80) matches the
printed coordinate exactly and is used as the catalog equivalent; its dispersion formula comes from a legacy HOYA glass
library rather than a current HOYA publication.

## Glass Identification

The patent gives only nd and νd. The labels below come from an unseeded nearest-neighbour search of current OHARA,
HOYA, Schott, Sumita, HIKARI and CDGM catalogs, using the distance √(Δnd² + (Δνd/50)²). A match of coordinates does
not identify the supplier or the 1981 melt, and discontinued glasses of the period are not represented in current
catalogs.

| Glass (label) | nd | νd | Elements | Class | Match |
|---|---|---|---|---|---|
| TAF1 / N-LAF34 class | 1.7725 | 49.8 | E1, E3 | lanthanum flint | equivalent |
| Unmatched (807316) | 1.80741 | 31.6 | E2 | lanthanum dense flint | none in current catalogs; code of discontinued Schott LaSF8 |
| S-TIH53WN / FDS90 class | 1.84666 | 23.9 | E4 | dense flint | exact |
| S-LAH60 | 1.834 | 37.1 | E5 | lanthanum flint | close |
| H-LaK12 | 1.6968 | 56.5 | E6 | lanthanum crown | equivalent |
| FF8 | 1.75 | 25.1 | E7 | dense flint | close |
| PCD4 / N-PSK53A class | 1.618 | 63.5 | E8 | phosphate crown | close |
| S-TIH6 / SF6 class | 1.80518 | 25.4 | E9 | dense flint | exact |
| 743525 | 1.7425 | 52.5 | E10 | lanthanum crown | close by distance; nd outside print precision |
| N-LAK21 | 1.6405 | 60.1 | E11 | lanthanum crown | exact |
| 670571 (J-LAK02 class) | 1.67 | 57.1 | E12 | lanthanum crown | equivalent |
| NBFD9 (Hoya) class (757318) | 1.7569 | 31.8 | E13 | lanthanum flint | NBFD9 (1.75690 / 31.80; exact, discontinued) |

Every element has nd above 1.6, and nine of the thirteen have nd above 1.7. The positive elements of L1 and L3 are
flints, while the negative elements of those groups are lanthanum glasses of higher Abbe number. This is a reversal of
the crown-positive/flint-negative arrangement used in L4. The patent attributes the chromatic correction of L2 to its
structure (p. 46), and the group-level chromatic sums are given below. No partial-dispersion data are published, so no
claim about secondary spectrum is made.

## Focus Mechanism

The patent publishes infinity states only and does not name a focusing group. The data file therefore uses a
constrained reconstruction: L1 focuses as a unit, the image plane stays fixed, and only d8 changes. The mechanism is
inferred, not documented. The basis is that third-party descriptions place the focus ring at the front of the lens,
and front-group focusing is the conventional arrangement for a negative-lead zoom. The 0.8 m minimum focusing distance
is a third-party value, taken here as object-to-image distance. With one moving group and one image constraint, each
zoom station has a single solution:

| Station | d8 infinity | d8 at 0.8 m | L1 extension | Magnification (absolute) |
|---|---|---|---|---|
| Wide | 41.48 | 43.98 | 2.50 mm | 0.0415 |
| Middle | 14.19 | 16.62 | 2.43 mm | 0.0701 |
| Tele | 0.80 | 3.22 | 2.42 mm | 0.1151 |

Because L1 has a fixed power, its extension for a given object distance is almost independent of focal length. This
is consistent with a single 0.8 m distance scale holding across the zoom range. The reconstruction is paraxial; no
close-range aberration balance is claimed. The production lens's macro setting, which third-party sources describe as
1:4 at the 28 mm end and selected by a button on the zoom ring, is not modeled.

## Aberration Correction Strategy

The patent's correction argument is structural. L2 is made self-corrected so that the L2–L3 space does not have to
correct aberrations, which reduces sensitivity to cam errors. L3 is held fixed to simplify the barrel, and conditions
(3) and (4) make that possible without loss of correction (pp. 46–47). The group sums below quantify how the four
groups share the work.

The sums are third-order Seidel contributions computed from the prescription at full aperture and at the full image
height of 21.63 mm. The axial terms (spherical aberration and axial colour) depend only on the aperture. The field
terms (distortion and lateral colour) also depend on the modeled stop position. Chromatic sums use the dispersion
(nd − 1)/νd implied by the Abbe numbers.

| Contribution | L1 | L2 | L3 | L4 | Total |
|---|---|---|---|---|---|
| Third-order spherical aberration, wide (mm) | +0.37 | −1.35 | +1.65 | −0.94 | −0.27 |
| Third-order spherical aberration, tele (mm) | +15.19 | −17.13 | +2.13 | −0.06 | +0.13 |
| Third-order distortion, wide (%) | −12.1 | +4.4 | +2.3 | −3.3 | −8.6 |
| Petzval sum (mm⁻¹) | −0.0136 | +0.0215 | −0.0149 | +0.0099 | +0.00285 |
| Axial colour F−C, wide (mm) | +0.05 | −0.20 | +0.08 | −0.14 | −0.21 |
| Axial colour F−C, tele (mm) | +0.40 | −0.52 | +0.10 | −0.18 | −0.20 |

**Spherical aberration.** At the long end, L1 and L2 carry large contributions of opposite sign that nearly cancel.
The negative front group overcorrects and the strong positive variator undercorrects. L3 adds a consistent
overcorrection at every station.

Exact on-axis rays show a residual zonal pattern that matches Fig. 3. At the middle station the zone reaches −0.26 mm
near 0.75 of the aperture and returns to −0.01 mm at full aperture; Fig. 3 shows about −0.28 mm near 0.8 of the
aperture. At the long end the exact full-aperture value is −0.15 mm, against about −0.17 mm in the figure.

**Distortion.** At the wide end, L1 is the dominant source of third-order barrel distortion (−12.1 %), with a smaller
barrel contribution from L4. L2 and L3 offset part of it, and higher orders reduce the net. The exact chief ray at 21.63 mm image height gives −3.78 % at the wide station,
+0.40 % at the middle station and +3.08 % at the tele station. Fig. 3 shows about −4.2 %, +0.3 % and +2.8 %. This
agreement is conditional on the modeled stop position.

**Field curvature.** The two negative groups cancel about 90 % of the Petzval sum of the two positive groups. The
residual is a Petzval radius of −350.5 mm, about twelve times the wide-end focal length.

**Axial colour.** The Abbe-number model gives an axial colour of about −0.2 mm (F focusing ahead of C) at every
station. The large opposite contributions of L1 and L2 change with zoom while their sum stays nearly constant.

## Conditional Expressions

The patent states four conditions (p. 46) and prints the Example 1 values on p. 48. Claim 2 includes condition (1)
only. Here fW and fT are the system focal lengths at the short and long ends, and R is the image-side radius of the
first lens (r2).

| Condition | Range | Printed | Computed | Satisfied |
|---|---|---|---|---|
| (1) \|f1\| / √(fW·fT) | 0.5–1.2 | 0.855 | 0.8548 | yes |
| (2) R / \|f1\| | 0.5–1.3 | 0.897 | 0.8971 | yes |
| (3) f2 / fW | 0.9–1.5 | 1.07 | 1.0713 | yes |
| (4) \|f3\| / fW | 0.8–1.6 | 1.37 | 1.3670 | yes |

The patent explains the limits as follows (p. 47):

- **Condition (1)** balances performance through the zoom. Below the lower limit, spherical aberration and astigmatism
  at the long end become hard to correct; above the upper limit, the overall length grows at both ends.
- **Condition (2)** controls the curvature of r2. Below the lower limit, zonal coma grows from the middle to the long
  end; above the upper limit, the balance of spherical aberration fails, and forcing it worsens coma and distortion.
- **Conditions (3) and (4)** keep L2 and L3 strong enough for compactness without having to move L3. If L3 is too
  weak, L4 must also be weak, and the telephoto-type power split at the long end can no longer be reached.

All four computed values reproduce the printed values to their printed precision, and Example 1 lies well inside each
range.

## Verification Summary

All quantities below were computed from the transcribed prescription with two independent paraxial methods and an
exact meridional ray trace.

| Quantity | Patent | Computed | Note |
|---|---|---|---|
| EFL, wide / middle / tele | 28.8 / 50.0 / 82.5 mm | 28.800 / 50.006 / 82.505 mm | — |
| f1 / f2 / f3 / f4 | −41.667 / 30.853 / −39.370 / 56.840 mm | −41.666 / 30.853 / −39.370 / 56.840 mm | — |
| F-number | 3.6 / 4.0 / 4.63 | 3.64 / 3.97 / 4.63 | iris calibrated to the printed values |
| Half-angle ω | 36.9° / 23.4° / 14.7° | 36.91° / 23.39° / 14.69° | paraxial, atan(Y′/f) |
| Full angle, exact chief ray | 76° (wide-end target, p. 45) | 75.95° / 46.61° / 28.54° | depends on the modeled stop |
| Distortion at Y′ = 21.63 mm | ≈ −4.2 / +0.3 / +2.8 % (Fig. 3) | −3.78 / +0.40 / +3.08 % | figure read by hand |
| Back focal distance | not printed | 38.77 / 46.13 / 56.13 mm | used as the image-plane spacing |

The printed half-angles are paraxial: twice ω gives 73.8° at the wide end. The 76° in the patent's statement of
object matches the exact-ray full angle, which barrel distortion enlarges. The third-party angles of view (75.4° and
28.5°) agree, to within 0.1°, with the paraxial values for the nominal 28 mm and 85 mm (75.37° and 28.55°).

The following parts of the data model are not published by the patent and should be read as such:

- **Stop and iris.** The stop position is derived from the figure, and the iris size is calibrated to the printed
  F-numbers.
- **Semi-diameters.** These are modeled, with E8 and E13 fitted to the Fig. 2 drawing.
- **Back focus.** The last spacing is the computed paraxial back focal distance.
- **Close focus.** The close-focus states are a reconstruction.
- **Scaling.** None was applied; all dimensions are the patent's.

## Design Heritage and Context

The patent presents the design against the two-group (negative–positive) wide-angle zoom of its time, whose long-end
length it seeks to reduce. It does this by splitting the rear group into positive, negative and positive parts, so
that the system changes from retrofocus to front-positive form through the zoom (pp. 45–46). Within the publication,
Examples 1–5 cover the same 28.8–82.5 mm range with L2 and L4 linked. Example 6 extends to 102 mm and moves every
movable group independently (p. 47). The patent states one barrel-design motive directly: fixing L3 and the stop
reduces the number of zoom cams (p. 47). The common motion of L2 and L4 would also allow one cam to drive both, but the
patent does not state that reason.

## Sources

1. Japan Patent Office. JP H01-193709 A (特開平1-193709), 広角域を含む高変倍率ズームレンズ系. Minolta Camera Co., Ltd.;
   inventors 得丸 祥 and 荻野 修司. Published 3 August 1989; divisional of 特願昭56-192492 (filed 30 November 1981).
   Example 1, p. 47; conditions, pp. 46–48; Figs. 1–3, p. 50.
2. United States Patent and Trademark Office. US 4,591,235 A, "Zoom lens system." Minolta Camera Kabushiki Kaisha;
   inventors Hisashi Tokumaru and Shuji Ogino. Granted 27 May 1986; priority JP 56-192492. Embodiment 1 (Table 1);
   claim 13. https://patents.google.com/patent/US4591235
3. The Noisy Shutter. "Legacy Lens Review: Minolta MD Zoom 28-85mm f3.5-4.5," 19 February 2023. Focus-ring position,
   macro control, aperture range. https://thenoisyshutter.com/2023/02/19/legacy-lens-review-minolta-md-zoom-28-85mm-f3-5-4-5/
4. Kamerastore. Product page, Minolta 28-85mm f3.5-4.5 MD Zoom. Marketed specifications.
   https://kamerastore.com/en-us/products/minolta-28-85mm-f3-5-4-5-md-zoom-minolta-md-t132446
5. minolta.su. "Minolta MD 28-85mm 1:3.5-4.5 Zoom Macro" review. Construction and the unverified asphere report.
   https://minolta.su/minolta-md-28-85mm-f3-5-4-5-zoom/
6. Dyxum. "Samples: Minolta MD Zoom 28-85mm F3.5-4.5." Specifications.
   https://www.dyxum.com/dforum/samples-minolta-md-zoom-2885mm-f3-54-5_topic123889.html
7. allphotolenses.com. "Minolta MD 28-85 mm f/3.5-4.5." Construction, minimum aperture and focusing distance.
   https://allphotolenses.com/lenses/item/c_1762.html
8. MFlenses forum. "Testing Minolta MD Zoom 28-85mm/3.5-4.5," 2016. Barrel length shortest at the long end.
   https://forum.mflenses.com/testing-minolta-md-zoom-28-85mm-3-5-4-5-t76421.html
9. Glass catalogs as distributed with opticalglass 2.0.2: OHARA (2025-03-12), HOYA (2026-04-01), Schott (2025),
   Sumita (ver. 14.01.03), HIKARI (general catalog) and CDGM (2024-09).
10. Newport Glass Works. Optical glass cross-reference, nd = 1.800 to 1.899. Code 807316, Schott LaSF8.
    http://www.newportglass.com/OPTGLA8.htm
