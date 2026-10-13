# NIKON TV-NIKKOR 11.5-69mm f/1.2 (Nikon S-100)

## Patent Reference and Design Identification

**Patent:** US 4,437,733<br>
**Application Number:** US 06/280,102<br>
**Priority:** 1980-07-11, Japan 55-93804<br>
**Filed:** 1981-07-02<br>
**Granted:** 1984-03-20<br>
**Inventors:** Tomowaki Takahashi; Kunio Konno; Toshihiro Sasaya<br>
**Assignee:** Nippon Kogaku K.K.<br>
**Title:** Zoom Lens<br>
**Embodiment analyzed:** First Embodiment / Example 1, Fig. 1

The prescription modeled here is the First Embodiment of US 4,437,733. The patent identifies it as a 6× zoom with
published focal-length endpoints of 11.5 and 69.0 mm, an f-number of 1.2, a 16.54 mm back focal length, a 53.5 mm
forward-lens effective diameter, and useful performance to a stated short distance of 0.93 m. It also places a
plane-parallel half-prism between the fourth and fifth powered groups to divert light to the viewfinder. These facts are
published in the First Embodiment description and numerical table. See US 4,437,733, PDF pp. 12–13 (printed pp. 6–8),
Fig. 1 and the First Embodiment table.

The production-lens identification is a convergent correlation rather than a manufacturer-confirmed patent mapping:

1. Nikon's own S-100 history states that a separate lens team developed the camera's taking lens and that the Color Video
   Camera S-100 was released in June 1982. Nikon also identifies the taking lens as f/1.2 and describes the camera's folded
   optical arrangement, in which the pickup tube is mounted vertically and the taking-light path is bent downward.
2. A documented surviving S-100 is marked with a permanently attached 11.5–69 mm f/1.2 TV-Nikkor. This is secondary
   direct-observation evidence rather than a Nikon specification.
3. The patent's First Embodiment is 11.5–69.0 mm, 6×, and f/1.2, matching the observed production marking and the period
   description of the S-100 as using an f/1.2 6:1 Nikkor zoom.
4. The patent's half-prism and video-camera telecentric-relay discussion fit the S-100's optical-viewfinder and folded
   pickup-tube architecture.
5. The 1980 Japanese priority, 1981 U.S. filing, and 1984 U.S. grant bracket the S-100's June 1982 release in a plausible
   development sequence.

Nikon's historical page does not identify US 4,437,733 or state the 11.5–69 mm focal range. The patent-to-product mapping therefore remains inferred. The production lens is permanently attached, so the data model classifies it as a fixed-lens
camera optic rather than assigning the Nikon S rangefinder mount. The available primary manufacturer source does not
establish the active pickup-tube image format, and `imageFormat` is therefore left unset.

## Optical Architecture

The optical system is an all-spherical, five-powered-group zoom with the power sequence **positive – negative – negative – positive – positive**. The patent assigns the first three groups to the magnification-changing system and the last two to the relay:
G1 is the positive focusing group, G2 the negative variator, G3 the negative compensator, G4 the positive forward relay,
and G5 the positive rear relay. The half-prism P lies between G4 and G5 and has zero paraxial power but finite optical
thickness. US 4,437,733, PDF pp. 10–12 (printed pp. 1–6), describes this architecture and the reason for a substantially
image-space-telecentric relay in a video-camera application.

The final parsed prescription contains 14 lens elements plus the active half-prism, or 15 modeled optical glass bodies.
Under the current LensVisualizer metadata definition, these form 11 air-separated optical groups: four cemented pairs each
count as one group, while the remaining singlets and P are separate groups. The patent separately organizes the powered
lens train into five functional lens groups, G1–G5; P is not a sixth powered lens group. The isolated air-to-air focal
lengths of those five patent groups are:

| Group | Patent role | Computed focal length |
|---|---|---:|
| G1 | Positive focusing group | +63.328881 mm |
| G2 | Negative variator | −15.018430 mm |
| G3 | Negative compensator | −40.549759 mm |
| G4 | Positive forward relay | +24.878658 mm |
| G5 | Positive rear relay | +34.285711 mm |

These are isolated group powers, not standalone-member powers and not an assertion that every individual member performs
one specific aberration-correction task. The patent itself explains that strong group powers are used in pursuit of a
compact, high-ratio zoom and that this makes higher-order aberration correction difficult; its conditional design rules
then constrain group power, cemented surfaces, dispersion separation, movement, Petzval sum, telecentricity, and ghost
behavior.

### Zoom kinematics

Three published zoom stations are represented: 11.5 mm (wide), 28.0 mm (middle), and 69.0 mm (tele). The first group and
relay remain fixed in the infinity-focus zoom model while G2 and G3 move. The front-vertex locations, measured from the
first surface, are:

| State | G2 front | G3 front | G4 front |
|---|---:|---:|---:|
| Wide | 20.76 mm | 65.47 mm | 69.89 mm |
| Middle | 38.84 mm | 62.90 mm | 69.89 mm |
| Tele | 49.85 mm | 65.85 mm | 69.90 mm |

G2 therefore moves monotonically toward image space. G3 first moves toward the object between wide and middle, then
reverses and moves toward image space between middle and tele. That reversal is a characteristic part of the compensator
motion rather than an interpolation artifact. G4 remains fixed to the precision of the published spacing table.

The patent's three station labels are retained as source zoom coordinates rather than redefined as exact Gaussian focal
lengths. The rounded prescription computes the following first-order values:

| State | Published station | Computed EFL | Computed BFD from r26 |
|---|---:|---:|---:|
| Wide | 11.5 mm | 11.735474 mm | 16.638774 mm |
| Middle | 28.0 mm | 28.031359 mm | 16.637279 mm |
| Tele | 69.0 mm | 66.962358 mm | 16.628655 mm |

The small BFD offsets from the published 16.54 mm are consistent across the corrected three-state model and are retained
rather than absorbed into an invented rear spacing. Likewise, the patent's prose total length of 162.7 mm is not equated
with the explicit first-vertex-to-image prescription track, which is 152.53, 152.53, and 152.54 mm at wide, middle, and
tele. The reference extent of the 162.7 mm prose value is not defined well enough to force those unlike quantities to
match.

### Supported middle-state source correction

The First Embodiment table visibly prints the middle-state D12 spacing as 6.99 mm. The source value remains preserved in
the evidence record, but the implemented prescription uses 5.99 mm. With the printed 6.99 mm value, the otherwise fixed
relay shifts by 1.00 mm at the middle station and computed BFD becomes 15.492923 mm. With 5.99 mm, the G4 front vertex
returns to 69.89 mm and middle-state BFD becomes 16.637279 mm, consistent with the wide and tele states within the
precision of the published table. This is treated as a supported source correction, not as a transcription claim.

### Relay, half-prism, and aperture model

The half-prism is retained as a real 10.0 mm plane-parallel body with `nd = 1.57501` and `νd = 41.3`. Its plane faces add
no surface power, but its reduced propagation contributes to the G4-to-G5 relay geometry. The computed G4-to-G5
principal-plane spacing is 42.479768 mm, compared with the patent's 42.36 mm value. The patent states that the relay is
arranged to place the exit pupil substantially at infinity for video-camera telecentricity. With the model's inferred
aperture stop, the middle-state exit pupil is calculated about 627.13 mm to the image side of the last lens vertex: finite,
but distant relative to the lens dimensions. This is a model result, not a published production exit-pupil measurement.

The patent does not publish an aperture-stop station or physical diaphragm diameter. To provide the required viewer stop,
the model divides the original 1.8 mm air interval between r19 and the prism into 1.70 mm from r19 to `STO` and 0.10 mm
from `STO` to r20. The exact split is not source-determined; placing the stop near r20 is a telecentricity-guided modeling
choice within the published air gap. The physical stop semi-diameter, 14.650231 mm, is calibrated to the published f/1.2 at the middle zoom
station. The resulting modeled paraxial f-numbers are 1.199997 at wide, 1.200000 at middle, and 1.200017 at tele. Agreement
with f/1.2 is therefore calibration evidence, not independent confirmation of the S-100's diaphragm diameter or axial
location.

The patent likewise supplies no per-surface clear-aperture table. Surfaces r1–r3 use a 26.75 mm semi-diameter directly
from the published 53.5 mm forward-lens effective diameter. The remaining semi-diameters are modeled from Fig. 1 geometry
and checked against edge thickness, rim slope, cross-gap intrusion, and exact meridional ray containment. They should not
be read as measured production clear apertures. No dimensional scaling is applied to the patent prescription.

## Element-by-Element Analysis

### L1 — Cemented Positive Focusing Component

**L1a:** `nd = 1.80518`, `νd = 25.5`. Glass: **805255 — SF6/TIH6-class (vendor unresolved)**. `f = −103.991 mm`.<br>
**L1b:** `nd = 1.71300`, `νd = 53.9`. Glass: **713539 — LAL8/LAK8-class (vendor unresolved)**. `f = +52.931 mm`.

The two members are cemented at r2. Although the front member is negative and the rear member is positive when each is
considered alone in air, their cemented combination has a computed net focal length of +107.971459 mm. This distinction
matters: the patent describes the combination as a positive component within G1, while the individual member powers have
opposite signs.

Together with L2, L1 forms the positive G1 focusing group. The patent assigns focusing to G1 as a whole; it does not
publish a separate finite-focus displacement for L1 or attribute a unique aberration term to either cemented member.

### L2 — Positive Meniscus

`nd = 1.51680`, `νd = 64.2`. Glass: **517642 — BK7-class (vendor unresolved)**. `f = +148.469 mm`.

L2 is the second positive component of G1. The patent's condition (10) is written from the two surface radii of this
positive meniscus and is described as keeping long-end spherical aberration acceptable while reducing sine-condition
deviation. That design statement is source-specific; it is not inferred merely from L2's positive power or glass class.

### L3 — Negative Meniscus, G2 Variator

`nd = 1.74443`, `νd = 49.4`. Glass: **M-NBF1 — coordinate-compatible spectral proxy (supplier unresolved)**. `f = −24.573 mm`.

L3 is the first negative component of G2. The patent identifies G2 as the variator that moves along the axis to change the
focal length chiefly. L3's individual negative power is therefore distinguished from the complete G2 power of
−15.018430 mm, which also includes the following cemented component.

The stored glass label deliberately stops at the six-digit coordinate and a neighborhood description. Current LAM60/LAF35
catalog coordinates are close but do not reproduce the patent coordinate closely enough to justify a named production
melt.

### L4 — Cemented Negative Variator Component

**L4a:** `nd = 1.60311`, `νd = 60.7`. Glass: **603607 — SK14/BSM14-class (vendor unresolved)**. `f = −17.370 mm`.<br>
**L4b:** `nd = 1.80518`, `νd = 25.5`. Glass: **805255 — SF6/TIH6-class (vendor unresolved)**. `f = +27.656 mm`.

L4 is cemented at r9. The standalone members again have opposite signs, while the cemented pair is net negative with a
computed focal length of −48.257841 mm. In combination with L3, it produces the negative G2 variator power.

The patent emphasizes that strengthening the negative variator to shorten the magnification-changing system increases
curvature and the burden of correcting aberrations over the zoom range. It does not assign that burden to one L4 member
in isolation, so the model does not do so either.

### L5 — Negative Compensator

`nd = 1.60311`, `νd = 60.7`. Glass: **603607 — SK14/BSM14-class (vendor unresolved)**. `f = −40.550 mm`.

L5 is the single element of G3, so its standalone focal length and the isolated G3 focal length are the same within
rounding. The patent defines G3 as the negative compensator that maintains the image plane as G2 moves. The verified zoom
motion shows the resulting non-monotonic path: G3 moves toward the object from wide to middle and reverses toward the image
from middle to tele.

Condition (9), which constrains the ratio `f3/f2`, is described by the patent as balancing magnification-system size,
forward-lens diameter at short distance, and the sign of the system Petzval sum. The final model gives a positive
surface-by-surface Petzval sum of +0.002055556670 mm⁻¹.

### L6 — Positive Meniscus, Forward Relay

`nd = 1.71300`, `νd = 53.9`. Glass: **713539 — LAL8/LAK8-class (vendor unresolved)**. `f = +61.922 mm`.

L6 is the first positive component of G4. The patent describes G4 as the positive forward relay, which is followed by the
half-prism and G5. No individual aberration claim is assigned to L6 by the source, so its interpretation here is limited
to its verified positive power and relay position.

### L7 — Cemented Middle Component of G4

**L7a:** `nd = 1.56384`, `νd = 60.8`. Glass: **564608 — SK11-class (vendor unresolved)**. `f = +33.620 mm`.<br>
**L7b:** `nd = 1.74000`, `νd = 28.2`. Glass: **740282 — SF3/TIH3-class (vendor unresolved)**. `f = −53.166 mm`.

L7 is cemented at r16 and has a computed cemented-net focal length of +90.526874 mm. The positive crown-like member and
negative high-index, lower-Abbe member are not treated as separately identifiable production glasses; the labels describe
coordinate classes only.

This is one of the cemented components explicitly constrained by the patent. Condition (1) acts on the cemented-surface
radius, and condition (3) requires an Abbe-number separation between its positive and negative members. The Example 1 pair
gives `νAP − νAN = 32.6`, inside the specified 30–60 interval. The patent places these constraints within its broader
strategy for controlling the aberration burden associated with strong group powers.

### L8 — Positive Meniscus, Rear Component of G4

`nd = 1.74000`, `νd = 44.9`. Glass: **Unmatched (740449; current authoritative catalogs)**. `f = +68.183 mm`.

L8 completes the three-component G4 relay group. Its patent coordinate is not forced to N-LAF2, S-LAM2, or another nearby
current catalog entry because the refractive-index residual is too large for a confident label. The model therefore uses
an explicit unmatched designation and falls back to the stored `nd`/`νd` values for material behavior.

### P — Plane-Parallel Half-Prism

`nd = 1.57501`, `νd = 41.3`. Glass: **575413 — QF3-class (vendor unresolved)**. **No finite focal length; zero paraxial
surface power.**

P is not one of the five powered lens groups. It is nevertheless an active optical body: its 10.0 mm thickness changes
axial propagation by the refractive index even though its two faces are plane. The patent explicitly places this half-prism
between G4 and G5 to direct light toward the optical viewfinder. Omitting it as a dummy plate would therefore alter the
relay spacing and contradict the selected embodiment.

### L9 — Cemented Positive Component of G5

**L9a:** `nd = 1.74000`, `νd = 28.2`. Glass: **740282 — SF3/TIH3-class (vendor unresolved)**. `f = −27.163 mm`.<br>
**L9b:** `nd = 1.56384`, `νd = 60.8`. Glass: **564608 — SK11-class (vendor unresolved)**. `f = +24.062 mm`.

L9 is cemented at r23. The front member is negative and the rear member positive when considered separately in air, but
the pair has a positive cemented-net focal length of +162.517694 mm. It is therefore consistent with the patent's
description of the object-side component of G5 as a positive cemented component.

Condition (2) constrains the G5 cemented-surface curvature, and condition (4) constrains the Abbe-number separation of its
positive and negative members. Example 1 again gives a separation of 32.6, within the patent's required 20–60 interval.
Condition (6) separately addresses the curvature of an object-side surface in the rear relay as a ghost-control constraint;
the wording does not uniquely distinguish r23 from r25 for Example 1, but either plausible mapping satisfies the published
inequality.

### L10 — Rear Positive Meniscus

`nd = 1.51680`, `νd = 64.2`. Glass: **517642 — BK7-class (vendor unresolved)**. `f = +44.199 mm`.

L10 is the final positive component of G5 and lies immediately ahead of the published `Bf = 16.54 mm` image-space gap.
The patent treats G5 as part of the positive rear relay and discusses rear-group surface curvature partly in terms of
suppressing ghost reflections from the image-pickup surface. The model does not convert that system-level ghost-control
argument into an unsupported claim about L10 alone.

## Glass Identification / Selection

The patent supplies d-line refractive index and Abbe number but no glass manufacturer, melt designation, line indices, or
partial-dispersion data. The names below are therefore conservative coordinate classes or explicit unmatched labels, not
claims about the production supplier.

| Stored glass label | `nd` | `νd` | Used at | Identification status |
|---|---:|---:|---|---|
| 805255 — SF6/TIH6-class | 1.80518 | 25.5 | L1a, L4b | Coordinate class; vendor unresolved |
| 713539 — LAL8/LAK8-class | 1.71300 | 53.9 | L1b, L6 | Coordinate class; vendor unresolved |
| 517642 — BK7-class | 1.51680 | 64.2 | L2, L10 | Coordinate class; vendor unresolved |
| M-NBF1 spectral proxy | 1.74443 | 49.4 | L3 | Compatible spectral proxy; Δnd = −0.001130, Δνd = −0.07; supplier unresolved |
| 603607 — SK14/BSM14-class | 1.60311 | 60.7 | L4a, L5 | Coordinate class; vendor unresolved |
| 564608 — SK11-class | 1.56384 | 60.8 | L7a, L9b | Coordinate-exact class match; vendor unresolved |
| 740282 — SF3/TIH3-class | 1.74000 | 28.2 | L7b, L9a | Coordinate-exact class match; vendor unresolved |
| Unmatched (740449) | 1.74000 | 44.9 | L8 | No current authoritative match accepted |
| 575413 — QF3-class | 1.57501 | 41.3 | Half-prism P | CDGM QF3 is the closest current code/class match; vendor unresolved |

The patent's cemented-relay conditions make the Abbe-number separation of L7 and L9 directly relevant: both pairs differ
by 32.6 in `νd`, satisfying conditions (3) and (4). That is a source-backed statement about the patent's conditional
structure. It does not establish anomalous partial dispersion or apochromatic correction.

No `nC`, `nF`, `ng`, or `dPgF` values are authored. Although authoritative OHARA, SCHOTT, HOYA, HIKARI, CDGM, and SUMITA
catalog resources were used to evaluate coordinate equivalences, a coordinate-compatible modern catalog row does not prove
the supplier or melt used in the 1980–1982 design. Chromatic interpretation is therefore limited to the published d-line
`nd`/`νd` data and the patent's own conditional statements; no APO or anomalous-dispersion performance claim is made.

## Focus Mechanism

The patent identifies G1 as the positive focusing portion and states that the First Embodiment has useful performance to a
short distance of 0.93 m. It does not publish a finite-focus spacing table, magnification, focus travel, or the reference
plane from which that 0.93 m distance was measured. No drive mechanism is specified in the patent material used here.

The data model therefore uses `NO_INTERNAL_RECONSTRUCTION`. The 0.93 m value is retained as source metadata, but the
three zoom-variable gaps carry identical infinity and close members so that the viewer does not invent focus motion.

A constrained paraxial sensitivity test illustrates why a unique reconstruction is not defensible. With only G1 allowed
to translate and the image plane held fixed, solving the 0.93 m conjugate gives materially different G1 travel depending
on whether the distance is interpreted from the first surface or from the image plane:

| Zoom state | 0.93 m from first surface | 0.93 m from image plane | Relative difference |
|---|---:|---:|---:|
| Wide | 7.288876 mm | 8.336267 mm | 14.37% |
| Middle | 5.098458 mm | 6.128264 mm | 20.20% |
| Tele | 4.691861 mm | 5.718494 mm | 21.88% |

The roughly one-millimeter spread in the solved travel is large relative to the total motion and varies with zoom. Without
a source datum or finite-focus prescription, selecting either branch would create a precise-looking but underdetermined
mechanism. The analysis therefore describes the published focusing architecture while leaving the internal close-focus
state unmodeled.

## Conditional Expressions

US 4,437,733 uses fifteen inequalities to constrain the power distribution, cemented interfaces, dispersive separation,
telecentric relay, movement relationship, Petzval behavior, and ghost-control geometry. The following values are
recomputed from the final parsed model and the source quantities required by each condition. All fifteen lie inside their
published ranges.

| No. | Published condition | Final-model value | Result |
|---:|---|---:|---|
| 1 | `1.7 < |RA/FW| < 2.4` | 1.833391 | Pass |
| 2 | `0.5 < RB/FW < 2.0` | 1.529652 | Pass |
| 3 | `60 > νAP − νAN > 30` | 32.600000 | Pass |
| 4 | `60 > νBP − νBN > 20` | 32.600000 | Pass |
| 5 | `0.7 < D/f5 < 1.5` | 1.238993 | Pass |
| 6 | `1.0 < Rc/Bf < 5.0` | 1.063543 (r23) / 1.195284 (r25) | Pass under either plausible locator |
| 7 | `0.5 < f1/FT < 1.5` | 0.917810 | Pass |
| 8 | `−5.0 < f1/f2 < −3.7` | −4.216744 | Pass |
| 9 | `2.5 < f3/f2 < 3.0` | 2.700000 | Pass |
| 10 | `−3.0 < (ra+rb)/(ra−rb) < −1.5` | −2.730271 | Pass |
| 11 | `5.0FW < f1 < 8.0FW` | 5.506859 × FW | Pass |
| 12 | `1.0FW < |f2| < 2.0FW` | 1.305950 × FW | Pass |
| 13 | `3.0FW < |f3| < 5.0FW` | 3.526066 × FW | Pass |
| 14 | `1.5FW < f4 < 2.5FW` | 2.163362 × FW | Pass |
| 15 | `2.5FW < f5 < 5.5FW` | 2.981366 × FW | Pass |

Condition (5) is specifically described by the patent as setting the relay power relationship needed to place the exit
pupil substantially at infinity. Condition (6) is described as a ghost-control constraint for the rear relay. Conditions
(7)–(10) address first-group power, the variator/compensator relationship, compactness and Petzval behavior, and the G1
positive-meniscus shape. The final prescription passes these conditions without changing the raw source record for the
middle-state D12 discrepancy.

## Sources / References

1. **Takahashi, Tomowaki; Konno, Kunio; Sasaya, Toshihiro.** *Zoom Lens*. U.S. Patent 4,437,733, granted 1984-03-20.
   The supplied dossier contains the original grant PDF. Relevant locations: Fig. 1 on PDF p. 2; design discussion and
   conditions on PDF pp. 10–12; First Embodiment numerical table on PDF p. 13. Online family/text reference:
   https://patents.google.com/patent/US4437733A/en
2. **Nikon.** “Family Cousins, Part 20: Color Video Camera S-100.” Nikon Camera Chronicle. Manufacturer history of the
   S-100 development, separate lens team, June 1982 release, folded pickup-tube optical path, optical SLR finder, and f/1.2
   taking lens. https://imaging.nikon.com/imaging/information/chronicle/cousins20-e/
3. **Aasland, Jarle.** “Nikon S-100 Color Video Camera.” NikonWeb. Secondary direct observation of a surviving S-100 with
   permanently attached 11.5–69 mm f/1.2 TV-Nikkor. https://www.nikonweb.com/s100/
4. **High Fidelity**, July 1982, “Video Today & Tomorrow.” Contemporaneous secondary report used as supporting production
   context for the S-100's f/1.2 6:1 zoom. Archive scan:
   https://www.worldradiohistory.com/Archive-All-Audio/Archive-High-Fidelity/80s/High-Fidelity-1982-07.pdf
5. **OHARA Inc.** Optical Glass catalog/download resources. https://www.ohara-inc.co.jp/en/product/01000/
6. **SCHOTT Advanced Optics.** Optical glass search/catalog resources. https://www.us.schott.com/shop/advanced-optics/en/search/
7. **HOYA.** Optical glass data downloads. https://www.hoya-opticalworld.com/english/datadownload/index.html
8. **HIKARI Glass Co., Ltd.** Optical glass catalog downloads. https://www.hikari-g.co.jp/optical_glass/catalog/
9. **CDGM Glass Co., Ltd.** Optical glass database/downloads. https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
10. **SUMITA Optical Glass, Inc.** Optical glass data downloads. https://www.sumita-opt.co.jp/en/download/


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.
