# KONICA VARIFOCAL HEXANON AR 35-100mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,584,935\
**Priority:** June 3, 1968 (Japan 43/37500)\
**Filed:** May 27, 1969\
**Granted:** June 15, 1971\
**Inventor:** Tadashi Kojima\
**Assignee:** Konishiroku Photo Industry Co., Ltd.\
**Title:** Improved Wide Angle Zoom Objective Lens System\
**Embodiment analyzed:** Example 1, the single published numerical prescription

US 3,584,935 describes a four-component wide-angle variable-magnification objective for a still camera. The numerical
example covers 35.992–100.000 mm at f/2.8, uses 15 elements in 10 air-separated groups, and reaches a stated maximum
field angle of 62°. Its prescription is entirely spherical. The example tabulates three infinity configurations at
35.992, 50.991, and 100.000 mm and gives the focal lengths of the first three components as +126.000, −40.000, and
+36.364 mm. [US 3,584,935, cols. 5–8, prescription and variable-spacing tables; Figs. 1–5.](https://patents.google.com/patent/US3584935A/en)

The association with the production KONICA VARIFOCAL HEXANON AR 35-100mm f/2.8 is strong but is not presented as a
manufacturer-confirmed patent attribution. Several independent identifiers converge:

1. The patent's 35.99–100.00 mm range and f/2.8 aperture match the marketed 35–100mm f/2.8 specification.
2. Both the patent example and Konica's catalog give 15 elements in 10 groups.
3. The patent states a maximum field angle of 62°, while Konica gives a 63°–24° viewing-angle range for the production
   lens.
4. The patent assignee is Konishiroku Photo Industry Co., Ltd., and a Konica manufacturer catalog documents the AR-mount
   35–100mm f/2.8 in the early 1970s.
5. The patent priority and filing dates precede the documented production period.

Konica's catalog lists the production lens as a 10-group, 15-element 35–100mm f/2.8 with 63°–24° viewing angle, a single
10½ in minimum-focus specification, an f/2.8–16 aperture range, an 82 mm filter thread, and a 39 oz weight. [Konica,
*Hexanon Lenses for Autoreflex Cameras* (1972), p. 3.](https://www.pacificrimcamera.com/rl/01702/01702.pdf)

One qualification remains important. The patent describes nonlinear motion of C3 that compensates C2 zoom motion so the
final infinity image remains stationary, whereas a later secondary historical data sheet describes the production lens as
"Varifocal" and requiring refocus after focal-length changes. That difference prevents treating the patent as explicit
manufacturer confirmation of the literal production prescription. The present model therefore represents the selected
patent example and its strong production correlation, not a claim that every production mechanical detail is reproduced.
[US 3,584,935, cols. 1–2 and 7; JAPB production-lens data sheet.](https://japb.net/gear/gear-review-index/ds_konica-ar-35-100f28-varifocal/)

## Optical Architecture

The patent divides the objective into four components in object-to-image order: positive C1, negative C2, positive C3,
and a fixed relay component C4. C1–C3 form the variable-magnification system; C4 is the relay. This is the patent's own
architectural description and is more precise for this design than applying a prime-lens family label. [US 3,584,935,
cols. 1–4.](https://patents.google.com/patent/US3584935A/en)

The final modeled component powers, independently recomputed from the prescription, are:

| Component | Elements | Function in the patent | Computed focal length |
|---|---|---|---:|
| C1 | L1–L3 | Fixed front positive component | +126.000016 mm |
| C2 | L4–L7 | Moving negative variator | −40.000167 mm |
| C3 | L8–L10 | Positive nonlinear compensator | +36.363636 mm |
| C4 | L11–L15 | Fixed relay component | +384.564837 mm |

The first three computed values reproduce the patent's +126.000, −40.000, and +36.364 mm figures within the printed
precision. C4's focal length is a computed result; the patent does not print it.

Zooming is accomplished by translating C2 toward the image while C3 moves a much smaller distance toward the object. From
the 35.992 mm to 100.000 mm stations, C2 moves +40.000 mm and C3 moves −4.219 mm, while C1 and C4 remain fixed. The
r1→r25 optical track remains 129.862 mm. This motion follows directly from the three published values of d5, d12, and
d17. [US 3,584,935, cols. 7–8, variable-spacing table.](https://patents.google.com/patent/US3584935A/en)

The aperture stop is fixed with C4. The patent places it 3.694 mm in front of r18, the first surface of C4. The modeled
prescription therefore divides the published d17 air space into a variable r17→stop segment and a fixed 3.694 mm
stop→r18 segment. The stop lies at z = 95.668 mm from r1 in every published zoom state. Its physical diameter is not
published. [US 3,584,935, col. 7, discussion of Fig. 5.](https://patents.google.com/patent/US3584935A/en)

The patent emphasizes two related architectural problems: obtaining a field angle above 60° without an excessively large
front section, and controlling the large change of distortion and higher-order aberrations that accompanies wide-angle
zooming. Its solution is not merely the positive-negative-positive moving sequence. C2 is deliberately a "thick"
negative component containing separated negative groups and a rear positive group, while cemented interfaces in C1–C3
are assigned powers opposite in sign to the parent component where specified by the patent conditions. [US 3,584,935,
cols. 1–6.](https://patents.google.com/patent/US3584935A/en)

## Element-by-Element Analysis

### L1 — Negative Meniscus, C1 front element

nd = 1.80518, νd = 25.5. Glass: 805255 — dense flint class (supplier unproven). f = −215.428894 mm.

L1 is the front member of cemented pair D1. Its standalone power is negative, but it is paired with the positive L2 across
the r2 cemented interface. The pair's net standalone focal length in air is +687.878976 mm, so D1 is only weakly positive
as a cemented group; the stronger positive contribution of C1 comes from the combination of D1 with L3.

The r2 cemented interface has negative surface power in the patent sign convention. This is the C1 interface governed by
the patent's condition III and by its refractive-index/Abbe-number condition V. The patent specifically relates this
opposite-sign cemented-surface construction to control of aberration variation over the zoom range. [US 3,584,935,
cols. 5–6.](https://patents.google.com/patent/US3584935A/en)

### L2 — Plano-Convex Positive, C1 cemented rear element

nd = 1.64000, νd = 60.2. Glass: 640602 — crown class (supplier unproven). f = +163.281250 mm.

L2 is the rear member of D1 and terminates at the plane r3 surface. Its lower index and much higher Abbe number than L1
produce the index and dispersion steps used by condition V at the cemented interface. Those coordinates are source facts;
the identification as a 640602 crown class is a catalog-coordinate classification rather than a historical melt
attribution.

### L3 — Positive Meniscus, C1 rear group

nd = 1.62041, νd = 60.3. Glass: 620603 — crown class (supplier unproven). f = +152.942916 mm.

L3 is an air-spaced positive meniscus following D1 and completes fixed component C1. The combined C1 focal length is
+126.000016 mm, reproducing the patent's +126.000 mm value. Because C1 does not move during zooming, its role in the
implemented kinematics is that of a fixed front positive component rather than a variator or compensator.

### L4 — Biconvex Positive, C2 cemented front element

nd = 1.80518, νd = 25.5. Glass: 805255 — dense flint class (supplier unproven). f = +139.860017 mm.

L4 begins moving component C2 and is cemented to L5 as D2. Although L4 by itself is positive, the D2 cemented pair is
strongly negative, with a net standalone focal length of −43.913716 mm. This distinction between individual-element power
and cemented-group power is important: C2 is a negative component even though it contains positive elements.

### L5 — Biconcave Negative, C2 cemented rear element

nd = 1.67003, νd = 47.2. Glass: 670472 — barium-flint class (supplier unproven). f = −33.129242 mm.

L5 supplies the dominant negative standalone power in D2. The shared r7 surface is concave toward the object in the
patent's geometry and has positive cemented-interface power, the opposite sign of C2's total negative power. This is the
C2 cemented interface evaluated under conditions III and V.

### L6 — Negative Meniscus, C2 second negative group

nd = 1.62041, νd = 60.3. Glass: 620603 — crown class (supplier unproven). f = −83.510264 mm.

L6 is the second air-spaced negative group in C2. Its front radius r9 = +470.07 mm is one of the two C2 negative-group
front surfaces tested by patent condition IV. The final prescription satisfies the required lower bound relative to the
magnitude of C2's focal length.

### L7 — Positive Meniscus, C2 rear positive group

nd = 1.80518, νd = 25.5. Glass: 805255 — dense flint class (supplier unproven). f = +109.533117 mm.

L7 is the rear positive group that makes C2 a deliberately thick negative component rather than a compact cluster of
same-sign groups. It is separated from the preceding negative group by 5.5 mm. The patent's condition II constrains this
spacing, L7's focal length, and its front radius r11 = +39.703 mm; all three checks pass in the final model. The patent
associates this separated rear positive group with reducing variation of distortion across magnification. [US 3,584,935,
cols. 3–4.](https://patents.google.com/patent/US3584935A/en)

### L8 — Biconvex Positive, C3 front group

nd = 1.62041, νd = 60.3. Glass: 620603 — crown class (supplier unproven). f = +62.842532 mm.

L8 is the front positive group of compensating component C3. It is followed by the D3 cemented pair. C3 as a whole has a
computed focal length of +36.363636 mm, matching the patent's +36.364 mm. During zooming, the entire C3 component moves
only −4.219 mm from wide to tele, much less than C2's 40.000 mm travel.

### L9 — Biconvex Positive, C3 cemented front element

nd = 1.64000, νd = 60.2. Glass: 640602 — crown class (supplier unproven). f = +37.485474 mm.

L9 is the positive front member of D3. The D3 pair remains positive overall, with a computed standalone focal length of
+86.239552 mm. L9 and L10 therefore form a positive cemented group even though the rear member is individually negative.

### L10 — Biconcave Negative, C3 cemented rear element

nd = 1.80518, νd = 25.5. Glass: 805255 — dense flint class (supplier unproven). f = −63.146383 mm.

L10 is the negative rear member of D3. The r16 cemented interface has negative surface power, opposite the positive power
of C3 as a whole. The patent applies condition III to this interface and condition V to its index/Abbe-number difference,
linking the C3 cemented construction to aberration balance at intermediate focal lengths. [US 3,584,935, cols. 5–6.](https://patents.google.com/patent/US3584935A/en)

### L11 — Biconcave Negative, C4 front cemented element

nd = 1.69680, νd = 55.6. Glass: 697556 — lanthanum-crown class (supplier unproven). f = −25.002359 mm.

L11 begins the fixed relay component immediately behind the aperture stop and is cemented to L12 as D4. D4 is negative
overall, with a computed standalone focal length of −34.066617 mm. Unlike the C1–C3 cemented interfaces, this pair is not
one of the interfaces governed by the patent's conditions III and V for the variable-magnification components.

### L12 — Positive Meniscus, C4 cemented rear element

nd = 1.71736, νd = 29.5. Glass: 717295 — dense flint class (supplier unproven). f = +76.513713 mm.

L12 is the positive rear member of D4. Its individual positive power partly offsets L11, but the pair remains negative.
This negative front portion of C4 is followed by two positive groups, L13 and D5, yielding a weakly positive relay as a
whole.

### L13 — Positive Meniscus, C4 middle group

nd = 1.80610, νd = 41.0. Glass: 806410 — LASF-class high-index glass (supplier unproven). f = +67.213246 mm.

L13 is the air-spaced middle positive group of C4. It follows D4 across a 5.0 mm air gap and precedes the rear D5 pair.
Its position and power are fixed through all modeled zoom states.

### L14 — Plano-Convex Positive, C4 rear cemented front element

nd = 1.75500, νd = 52.4. Glass: 755524 — lanthanum-crown class (supplier unproven). f = +31.483444 mm.

L14 is the positive front member of rear pair D5 and begins at the plane r23 surface. Together with L15 it forms a net
positive cemented group with a computed standalone focal length of +110.147542 mm.

### L15 — Negative Meniscus, C4 rear cemented element

nd = 1.75520, νd = 27.5. Glass: 755275 — dense flint class (supplier unproven). f = −44.568583 mm.

L15 is the final glass element. Its negative standalone power moderates the positive L14 within D5. The complete C4 relay,
combining negative D4, positive L13, and positive D5, has a computed focal length of +384.564837 mm and remains fixed
during zooming.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number for each glass but names no glass manufacturer or catalog
melt. The data therefore retains nine six-digit nd/νd coordinate classes rather than asserting supplier identity. Modern
catalog comparisons supply coordinate-equivalent examples, but these are comparison anchors only; they do not establish
what Konishiroku actually purchased for production.

| Coordinate class | nd | νd | Elements | Catalog-coordinate example | Interpretation |
|---|---:|---:|---|---|---|
| 805255 | 1.80518 | 25.5 | L1, L4, L7, L10 | HOYA FD60/FD60-W is very close | Dense-flint class; supplier unproven |
| 640602 | 1.64000 | 60.2 | L2, L9 | HOYA LACL60 exact coordinate | Crown class; supplier unproven |
| 620603 | 1.62041 | 60.3 | L3, L6, L8 | OHARA S-BSM16 / HOYA BACD16 exact coordinate | Crown class; supplier unproven |
| 670472 | 1.67003 | 47.2 | L5 | HOYA BAF10 exact coordinate | Barium-flint class; supplier unproven |
| 697556 | 1.69680 | 55.6 | L11 | SUMITA K-LaK14 exact coordinate | Lanthanum-crown class; supplier unproven |
| 717295 | 1.71736 | 29.5 | L12 | HOYA E-FD1L exact coordinate | Dense-flint class; supplier unproven |
| 806410 | 1.80610 | 41.0 | L13 | HIKARI J-LASF03 exact code-class match | LASF-class high-index glass; supplier unproven |
| 755524 | 1.75500 | 52.4 | L14 | SUMITA K-LaSKn1 exact coordinate | Lanthanum-crown class; supplier unproven |
| 755275 | 1.75520 | 27.5 | L15 | OHARA S-TIH4 / HOYA E-FD4L exact coordinate | Dense-flint class; supplier unproven |

These comparisons were made against authoritative vendor catalog or cross-reference data. The catalog names are not used
as historical melt identities in the prescription. The patent provides no per-element nC, nF, ng, or anomalous-partial-
dispersion values, and the modeled elements therefore carry no transferred catalog line-index or dPgF fields. No APO or
anomalous-dispersion performance claim is justified from the retained data alone.

The glass pattern is nevertheless structurally significant in one source-backed sense: patent condition V explicitly
constrains the refractive-index and Abbe-number differences across the cemented surfaces in C1, C2, and C3. The final
coordinates satisfy those bounds. This supports discussion of the patent's cemented-interface strategy without requiring
a speculative supplier assignment.

## Focus Mechanism

No finite-focus internal prescription is published in US 3,584,935. The model therefore uses
`NO_INTERNAL_RECONSTRUCTION`: it preserves the three infinity zoom states and does not invent a focus-group law, close-
focus air gaps, or finite-conjugate calibration.

The 1972 Konica catalog gives a single minimum-focus specification of 10½ in, represented as 0.2667 m in product metadata.
That value does not alter any internal spacing in the optical model. In particular, every focus endpoint stored for d5,
d12, and the split d17 gap repeats the corresponding infinity spacing, so the focus control introduces no synthetic
internal motion. [Konica, *Hexanon Lenses for Autoreflex Cameras* (1972), p. 3.](https://www.pacificrimcamera.com/rl/01702/01702.pdf)

The published zoom motion is separate from finite focusing. At the three source stations, C2 moves monotonically toward
the image and C3 moves monotonically toward the object, with C4 and the stop fixed. The patent describes C3's small
nonlinear motion as compensation for final-image shift during magnification change. [US 3,584,935, cols. 1–2 and 7–8.](https://patents.google.com/patent/US3584935A/en)

## Aberration-Control Strategy and Patent Rationale

The patent treats the wide-angle zoom problem as a balance among compactness, front-element diameter, distortion change,
and higher-order aberration variation. Its four-component architecture keeps a fixed positive front component and a fixed
relay around a moving negative variator and a small-travel positive compensator. [US 3,584,935, cols. 1–4.](https://patents.google.com/patent/US3584935A/en)

The most distinctive source-described construction is C2. Rather than making the negative variator a closely packed
same-sign group, the patent separates two negative groups from a rear positive group and constrains that separation, the
rear positive group's power, and its front curvature. The patent explicitly associates this thick-component arrangement
with reducing distortion variation as magnification changes. [US 3,584,935, cols. 3–4.](https://patents.google.com/patent/US3584935A/en)

Cemented-surface conditions provide a second control mechanism. The C1 cemented interface has power opposite to the
positive parent component, the C2 interface opposite to the negative parent component, and the selected C3 interface
opposite to the positive parent component. The patent couples those interface-power conditions with index/Abbe-number
bounds and discusses their use in balancing coma, field curvature, higher-order aberration variation, and chromatic
aberration over the zoom range. These are claims of the patent's design rationale; the present first-order verification
does not independently decompose each higher-order aberration contribution by element. [US 3,584,935, cols. 5–6.](https://patents.google.com/patent/US3584935A/en)

## Conditional Expressions

The following checks are evaluated from the final modeled prescription, not from a separate copy of the intended design.
For the negative C2 component, the table uses |f2|. The wide reference focal length is the computed 35.991474 mm EFL.

| Patent condition | Final-model value | Required range | Result |
|---|---:|---:|---|
| I-1: 0.5 fw < |f2| < 1.5 fw | 40.000167 mm | 17.995737–53.987211 mm | Pass |
| I-2: 2 fw < f1 < 4 fw | 126.000016 mm | 71.982948–143.965895 mm | Pass |
| I-3: 0.8 fw < f3 < 1.2 fw | 36.363636 mm | 28.793179–43.189769 mm | Pass |
| II-1: 0.07 |f2| < t < 0.27 |f2| | 5.500000 mm | 2.800012–10.800045 mm | Pass |
| II-2: 2 |f2| < f2p < 3 |f2| | 109.533117 mm | 80.000333–120.000500 mm | Pass |
| II-3: 0.5 |f2| < r2p < 1.5 |f2| | 39.703000 mm | 20.000083–60.000250 mm | Pass |
| III-1: 0.05/f1 < −Φ1 < 0.30/f1 | 0.001580670 mm⁻¹ | 0.000396825–0.002380952 mm⁻¹ | Pass |
| III-2: 0.01/|f2| < Φ2 < 0.11/|f2| | 0.000933453 mm⁻¹ | 0.000249999–0.002749989 mm⁻¹ | Pass |
| III-3: 0.05/f3 < −Φ3 < 0.20/f3 | 0.003058889 mm⁻¹ | 0.001375000–0.005500000 mm⁻¹ | Pass |
| IV: 7|f2| < |r2F|, first C2 negative group | 501.010 mm | > 280.001 mm | Pass |
| IV: 7|f2| < |r2F|, second C2 negative group | 470.070 mm | > 280.001 mm | Pass |
| V: C1 cemented-interface Δn / Δν | 0.16518 / 34.7 | 0.05–0.20 / 15–40 | Pass |
| V: C2 cemented-interface Δn / Δν | 0.13515 / 21.7 | 0.05–0.20 / 15–40 | Pass |
| V: C3 cemented-interface Δn / Δν | 0.16518 / 34.7 | 0.05–0.20 / 15–40 | Pass |

The signs in condition III refer to cemented-surface power in the patent's object-to-image convention. Condition V also
uses the orientation-specific n, n′, ν, and ν′ ordering stated in the patent; the table reports the positive differences
that are tested against the published bounds. [US 3,584,935, cols. 1–6.](https://patents.google.com/patent/US3584935A/en)

## Verification Summary

The final prescription reproduces the three published infinity focal-length stations with the following first-order
results:

| Published station | Computed EFL | Computed BFL from r25 | Modeled f-number |
|---:|---:|---:|---:|
| 35.992 mm | 35.991474 mm | 48.482823 mm | 2.80000029 |
| 50.991 mm | 50.990786 mm | 48.483446 mm | 2.80002030 |
| 100.000 mm | 99.999855 mm | 48.482179 mm | 2.79997958 |

The EFL and BFL values were reproduced by both a sequential height/reduced-angle trace and a separately implemented ABCD
matrix calculation, agreeing within 1×10⁻¹⁰ mm at the published states. The common r1→r25 track is 129.862 mm.

The patent does not publish a post-r25 image distance. The modeled image plane is therefore placed 48.482816 mm after r25,
the mean of the three computed infinity BFLs. Because the source spacings are rounded, residual paraxial defocus at that
single fixed plane is +0.000007, +0.000630, and −0.000637 mm at the wide, middle, and tele stations. This is a modeling
normalization, not a source d25 value.

The physical diaphragm diameter is likewise absent from the patent. A fixed stop semi-diameter of 10.463093 mm is
calibrated from the published f/2.8. Its agreement with f/2.8 at all three zoom stations demonstrates internal consistency
of the interpreted stop position; it is not independent evidence of the manufactured iris diameter.

The surface-by-surface Petzval sum is +0.002490128 mm⁻¹ when each refracting surface is evaluated as Φ/(n·n′), giving a
paraxial Petzval-radius magnitude of 401.586 mm. This is a first-order field-curvature quantity, not a measured image-plane
curvature or a statement about the final corrected astigmatic field.

No clear semi-diameters are printed in the patent. The modeled semi-diameters use meridional d-line ray envelopes
bounded by physical geometry. A 600 dpi review of the exact local Fig. 1 shows a common optical rim across surfaces
6–8, rather than the imported 24.3/24.3/16.8 mm step. The rear surface now uses 23.5 mm, close to the retained 24.3 mm front rims. Extending all
three to 24.3 mm would exceed the supported spherical rim slope, and a much larger following meniscus would violate
cross-gap clearance. Surfaces 9/10 were subsequently increased from 16.8 to 17.2 mm toward the Fig. 1 rim proportions,
improving wide-end chief-ray format-corner reach from 93% to 95%. A 17.3 mm candidate exceeds the
90% intrusion limit of the preceding r8→r9 physical gap, so full corner clearance remains unproven. The other rims are retained. Fig. 1 depicts the long-focal-length arrangement: its large d5
and small d12 must not be compared surface-by-surface to the default wide state.

All 15 elements resolve to compatible existing catalog dispersion curves. These are supplier-neutral spectral proxies;
they do not establish production glass identities. No additional catalog entry is needed for this prescription.

These semi-diameter and containment results validate the portable geometric model only. They do not establish factory
clear apertures, mechanical barrel dimensions, or production-render trim behavior. The prescription is all-spherical, so
no asphere convention, coefficient conversion, or asphere-departure calculation applies.

## Sources and References

1. Tadashi Kojima, **US 3,584,935, “Improved Wide Angle Zoom Objective Lens System,”** filed May 27, 1969; granted June
   15, 1971. Prescription and variable-spacing tables in cols. 5–8; optical layout in Fig. 1.\
   https://patents.google.com/patent/US3584935A/en
2. Konica Camera Company, **Hexanon Lenses for Autoreflex Cameras** (1972), especially p. 3 for the 35–100mm f/2.8
   production specification. Scan hosted by Pacific Rim Camera.\
   https://www.pacificrimcamera.com/rl/01702/01702.pdf
3. HOYA Optics Division, **Glass Cross Reference Index**, used for coordinate-class comparison.\
   https://www.hoya-opticalworld.com/english/products/crossreference.html
4. OHARA INC., **Comparative Table of Recommended Glasses**, used for cross-vendor coordinate comparison.\
   https://www.ohara-inc.co.jp/en/product/01002/
5. OHARA, **Optical Glass Catalog**, used for catalog-coordinate and line-data comparison where applicable.\
   https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf
6. SUMITA Optical Glass, **Optical Glass Data Book / Catalog**, used for K-LaK14 and K-LaSKn1 coordinate comparison.\
   https://refractiveindex.info/download/data/2016/sumita_2016-02-01.pdf
7. HIKARI Glass Co., Ltd., **J-LASF optical-glass catalog** (Nikon Business), used to verify that glass code 806410
   is J-LASF03 (`nd = 1.806100`, `νd = 40.97`) and therefore should not be labeled a crown family.\
   https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lasf.html
8. Pekka Buttler, **“Data sheet: Konica Varifocal Hexanon AR 35~100mm f/2.8,”** JAPB, November 2025. Used only for
   secondary production-history and varifocal-mechanism context, not for the patent prescription.\
   https://japb.net/gear/gear-review-index/ds_konica-ar-35-100f28-varifocal/
