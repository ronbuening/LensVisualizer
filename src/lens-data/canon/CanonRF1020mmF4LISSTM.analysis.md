# Canon RF10-20mm F4 L IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2024/0045184 A1
**Application Number:** US 18/347,616
**Filed:** July 6, 2023
**Published:** February 8, 2024
**Priority:** JP 2022-126694, filed August 8, 2022
**Inventor:** Makoto Nakahara
**Applicant:** Canon Inc. (Canon Kabushiki Kaisha, Tokyo)
**Title:** Zoom Lens and Image Pickup Apparatus Having the Same
**Embodiment analyzed:** Numerical Example 1 (FIG. 1; aberration diagrams FIGS. 2A–2C)

US 2024/0045184 A1 discloses six numerical examples of a negative-lead ultra-wide zoom in which a single positive lens
immediately behind the aperture stop performs focusing (¶0029–¶0030, ¶0044). Numerical Example 1 is a four-unit design
covering 10.33–19.39 mm at F4.08–4.12 (Various Data, printed p. 7). Its surface table, aspheric coefficients, Various
Data and Zoom Lens Unit Data appear on printed pp. 6–7 (PDF pp. 20–21); the conditional-expression values appear in
Table 1 on printed pp. 10–11 (PDF pp. 24–25).

The identification of Example 1 with the production Canon RF10-20mm F4 L IS STM rests on the following convergent
evidence. No Canon source names the patent or the example, so the correlation is not manufacturer-confirmed.

1. **Construction.** The prescription contains 16 elements in 12 air-separated groups, matching Canon's published
   construction of 16 elements in 12 groups.
2. **Aspherical elements.** Five aspherical surfaces sit on three elements: both sides of the large front element E1,
   the rear surface of E11, and both sides of E15. Canon lists three GMo (glass-moulded) aspherical elements, one of
   which is also a UD element.
3. **Low-dispersion elements.** One element has νd = 94.7 and three have νd = 81.5, matching Canon's "1 Super UD + 3
   UD". One of the νd 81.5 elements (E11) is also aspherical, matching Canon's statement that one element is both UD and
   aspherical.
4. **Focal length and aperture.** 10.33–19.39 mm at F4.08–4.12 corresponds to the marketed 10–20 mm F4.
5. **Focus.** A single lightweight positive lens behind the stop moves toward the image; Canon's launch material
   describes a rear-focus system with a lightweight focus lens and short stroke.
6. **Stabilization.** The image-stabilizing element (E14) is in the rear part of the third unit; Canon describes the IS
   optic as placed near the image sensor.
7. **Distortion.** The patent permits large wide-end barrel distortion for electronic correction (¶0036–¶0038); Canon
   states that the optical design presumes in-camera distortion correction.
8. **Timing.** The priority date (August 8, 2022) precedes the lens's announcement on October 11, 2023.

Canon's regional sources count the low-dispersion elements differently but consistently. Canon Hong Kong's product
page tabulates 1 Super UD lens, 2 UD lenses and 1 UD aspherical lens, whereas the Canon Camera Museum and the Canon CNA
specification page list 1 Super UD and 3 UD elements; both totals equal the prescription's one νd 94.7 element and three
νd 81.5 elements, one of which (E11) is aspherical. One source anomaly remains. In the patent, the header of FIG. 2A
reads "Fno = 4.63, ω = 36.2°", which does not match Example 1's wide-angle state (F4.08, ω = 61.36°); FIGS. 2B and 2C
match the middle and telephoto states, and the tables are internally consistent, so the anomaly is confined to that
figure header.

Examples 2 and 3 also have four units (¶0031–¶0032); in Example 3 the rear unit moves during zooming. Example 1 is the
embodiment analyzed throughout, and no values from the other examples are used.

## Optical Architecture

Example 1 is a negative-lead four-unit zoom with power sequence **negative – positive – positive – positive**:

| Unit    | Elements          | Surfaces | Focal length (mm) | Function                                                           |
| ------- | ----------------- | -------- | ----------------- | ------------------------------------------------------------------ |
| L1      | E1–E5 (4 groups)  | 1–9      | −19.370           | Negative front unit; three negative menisci and a cemented doublet |
| Stop    | —                 | 10       | —                 | Aperture stop SP, travels with L3 during zoom                      |
| L2 (GP) | E6                | 11–12    | +73.576           | Single positive focus lens                                         |
| L3      | E7–E15 (6 groups) | 13–27    | +49.325           | Main positive relay; contains the IS element E14 (LIS/GIS)         |
| L4 (LN) | E16               | 28–29    | +71.715           | Weak positive rear meniscus; fixed during zoom and focus           |

The unit focal lengths are thick-lens values in air computed from the prescription. L1, L2 and L4 reproduce the patent's
Zoom Lens Unit Data (−19.37, 73.58, 71.72 mm); L3 does not (printed 49.46 mm), a discrepancy discussed under
Verification Summary.

Because L1 is strongly negative and everything behind the stop is positive, the system has the inverted-telephoto power
arrangement typical of ultra-wide lenses. The paraxial back focal distance exceeds the focal length only at the wide end
(BFD/EFL = 1.17, 0.80, 0.62 at wide, middle and tele). The overall length is 12.5, 8.2 and 6.4 times the focal length,
so the system is not a telephoto at any state. The entrance pupil lies 23.00 mm behind the first vertex at the wide end
and 20.78 mm at the tele end. The exit pupil lies 80.1 mm ahead of the image at wide and 190.0 mm ahead at tele, so the
paraxial chief ray meets the printed image height at about 13.3° to the axis at wide and 6.5° at tele.

The front unit concentrates the negative power in its three leading menisci: E1–E3 together have a focal length of
−13.655 mm in air, stronger than L1 as a whole. The cemented pair C1 (E4 + E5) that closes L1 is net positive (+120.115
mm), although it contains the unit's fourth negative lens. L3 has an internal positive–negative split: surfaces 13–23
(C2, C3, E11, C4) form a +27.612 mm group, and the rear pair E14 + E15 is net negative (−34.221 mm).

### Zoom kinematics

During zooming from wide to tele (¶0031), L1 follows a path convex toward the image: its front vertex lies 128.82 mm
from the image plane at wide, 122.35 mm at middle and 123.26 mm at tele. L2 and L3 move monotonically toward the object;
L4 and the image plane are fixed, and the back focus d29 = 12.13 mm is constant. The L1–stop gap d9 closes from 24.06 to
2.42 mm and the L3–L4 gap d27 opens from 3.36 to 19.44 mm.

The stop does not ride with L2. The stop-to-L3 distance d10 + (L2 thickness) + d12 stays at 10.01 mm at all three
stations, so the stop is fixed to L3 and moves 16.08 mm toward the object from wide to tele. L2 floats between them: d10
is 3.18, 3.92 and 3.78 mm at wide, middle and tele, while d10 + d12 stays at 8.15 mm. The patent notes that placing the
stop on the object side of L2 and moving it monotonically objectward reduces the stop size (¶0070).

In paraxial terms, the zoom works by changing the magnification of the rear units. With fL1 fixed, the system focal
length equals fL1·β2·β3·β4, where βi are the in-situ lateral magnifications of the rear units. β2·β3 changes from −0.636
at wide to −1.193 at tele, a ratio of 1.875, while β4 stays between 0.837 and 0.838. The computed zoom ratio is 1.8776
(printed 1.88). At the tele end the product β2·β3·β4 is −0.99989, so the tele focal length is almost exactly
|fL1|. At the wide end β2 = −32.03 and β3 = 0.0199: the axial beam between L2 and L3 is then nearly collimated.

### Aperture model

The patent does not publish the stop diameter. The data file uses LensVisualizer's `from-nominal-fno` aperture model,
which infers the iris radius at each station from the printed f-numbers (4.08, 4.08, 4.12). The inferred radii are
4.722, 5.460 and 6.154 mm at wide, middle and tele, an increase of 30.3%. The ratio of entrance-pupil diameter to stop
diameter rises from 0.268 to 0.382 over the same range. In this model, therefore, a fixed diaphragm could not maintain
the near-constant published f-number; the radii are a calibration to the printed f-numbers, not independent evidence of
the production diaphragm schedule.

### Image circle and distortion

The patent permits distortion and relies on electronic correction (¶0036–¶0038; claim 14). The printed image height at
the wide end is 18.92 mm, compared with 21.64 mm at middle and tele; ¶0038 and claim 26 describe this deliberately
smaller wide-end image circle, which allows a smaller front-element diameter. The consequences are quantified under
Distortion and Image-Circle Strategy.

## Element-by-Element Analysis

Element focal lengths are standalone thick-lens values in air. Cemented pairs are discussed both as individual elements
and as net doublets. In-situ heights refer to paraxial rays: the marginal ray at the printed f-number and the chief ray
scaled to the printed image height. At the wide end's 61° paraxial field these heights are first-order indicators rather
than real-ray values.

### Unit L1 — negative front unit

#### E1 — Negative Meniscus, convex to object (2× Asph)

nd = 1.58313, νd = 59.4. Glass: S-BAL42 / L-BAL42 (OHARA) class — 583594 barium crown. f = −62.51 mm.

E1 is by far the largest element: its modeled front semi-diameter is 33.5 mm (Ø67 mm), against 22.7 mm for E2 and 20.8
mm for the rear element E16. Both surfaces are aspherical, and the rear surface also carries a conic constant (K =
−0.876). At the wide end, the paraxial chief ray at surface 1 is 33.4 times the marginal-ray height, so its aspheric
figure acts almost entirely on field-dependent aberrations; it has little leverage on spherical aberration. The glass is
a moderate-index barium crown with a moulding-grade (low-Tg) equivalent, consistent with the element being one of
Canon's three GMo aspheres. E1 is the weaker of the two large front menisci (f = −62.51 mm against −30.18 mm for E2).

#### E2 — Negative Meniscus, convex to object

nd = 1.91082, νd = 35.2. Glass: TAFD35 (HOYA) / H-ZLaF4LA class — 911352 dense lanthanum flint. f = −30.18 mm.

E2 is the strongest negative element in L1. For a given power, its very high index requires less surface curvature than
a lower-index glass would. Among L1's negative elements it is the largest lateral-colour contributor: −0.233 mm (F − C)
at the wide end, compared with −0.180 mm for L1 as a whole (see Chromatic Correction Strategy).

#### E3 — Negative Meniscus, convex to object

nd = 1.59282, νd = 68.6. Glass: FCD515 / FCD505 (HOYA) class — 593686 fluorophosphate crown. f = −87.21 mm.

E3 is the weakest negative element of L1. Its fluorophosphate-class glass adds negative power with little dispersion.

#### C1 — Cemented Doublet E4 + E5 (net f = +120.115 mm)

**E4 — Biconcave Negative.** nd = 1.43875, νd = 94.7. Glass: S-FPL55 (OHARA) class — 439947 fluorophosphate (Super UD
class). f = −34.74 mm.

**E5 — Biconvex Positive.** nd = 1.88300, νd = 40.8. Glass: TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum
flint. f = +27.83 mm.

E4 is the only νd 94.7 element in the design and is therefore the element most plausibly identified with Canon's single
Super UD element. The patent does not name glasses or publish partial dispersions, so this assignment is an inference.
E4 is nearly as strong as E2 (f = −34.74 against −30.18 mm), yet at the wide end it contributes −0.090 mm of lateral
colour against E2's −0.233 mm. Carrying part of L1's negative power on very low-dispersion glass thus reduces the
lateral colour that the rest of the system must correct.

E5 is G1P, the strongest (and only) positive lens in L1 (¶0051). It is a high-index, relatively dispersive lanthanum
flint (νd = 40.8), whose lateral-colour contribution (+0.281 mm at wide) opposes that of the four negative elements.
Condition (10), 22 < νdG1P < 50, bounds this choice: the patent states that a lower Abbe number makes lateral colour
during zooming hard to correct, and a higher one makes longitudinal colour during zooming hard to correct (¶0059).

### Unit L2 — focus lens GP

#### E6 — Biconvex Positive (focus lens)

nd = 1.72047, νd = 34.7. Glass: S-NBH8 (OHARA) / N-KZFS8 (Schott) class — 720347 short flint. f = +73.58 mm.

E6 is the entire second unit and the only element that moves during focusing (¶0030, ¶0044). It sits directly behind the
stop, where the off-axis beam is low: the paraxial chief-ray height at its front surface is 0.32 times the marginal-ray
height at wide and 0.24 times at tele. The patent's stated rationale is that this position minimises the diameter of the
focus unit, and a single lens minimises its weight (¶0044). Its modeled semi-diameters are 8.4 and 8.6 mm.

Conditions (2) and (8) constrain the glass to 25 < νdGP < 45 and 1.60 < ndGP < 1.91 (¶0048, ¶0057). The patent links the
Abbe-number range to chromatic-aberration fluctuation during focusing, and the index range to fluctuations of
astigmatism and spherical aberration during focusing. The coordinate nd = 1.72047, νd = 34.7 matches OHARA S-NBH8 and
Schott N-KZFS8, both classed here as short flints. As a positive singlet, E6 is a substantial source of undercorrected
longitudinal colour (−0.637 mm at wide), which L3 corrects.

### Unit L3 — main positive relay with image stabilizer

#### C2 — Cemented Doublet E7 + E8 (net f = +52.745 mm)

**E7 — Negative Meniscus, convex to object.** nd = 1.80810, νd = 22.8. Glass: S-NPH1 (OHARA) / FD225 (HOYA) class —
808228 dense flint. f = −25.10 mm.

**E8 — Positive Meniscus, convex to object.** nd = 1.67300, νd = 38.3. Glass: S-NBH52V (OHARA) class — 673383. f =
+16.55 mm.

C2 opens L3 immediately after E6. The modeled front and cemented-interface semi-diameters are both 8.4 mm, following
the continuous rim in Fig. 1; the rear remains 6.9 mm to preserve clearance to C3. The thin (0.69 mm) dense-flint E7 is cemented to the thicker positive E8 across a
strongly curved junction (R = 10.223 mm). The two elements' longitudinal-colour contributions largely cancel (+2.777 and
−2.447 mm at wide), leaving the doublet net positive in power. The air gap to the next doublet is only 0.80 mm; in the
model it limits the semi-diameters of surfaces 15 and 16.

#### C3 — Cemented Doublet E9 + E10 (net f = −25.740 mm)

**E9 — Biconcave Negative.** nd = 1.88300, νd = 40.8. Glass: TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum
flint. f = −11.92 mm.

**E10 — Positive Meniscus, convex to object.** nd = 1.92286, νd = 20.9. Glass: E-FDS1 (HOYA) / N-SF66 (Schott) class —
923209 dense flint. f = +21.04 mm.

E9 is the strongest negative element in the lens. Paired with E10, a positive element of higher dispersion, it forms the
only net-negative doublet in L3. Within C3, E9 has the higher Abbe number and acts as the crown of a negative achromat.
The two elements' longitudinal-colour contributions again nearly cancel (+2.685 and −2.865 mm at wide).

#### E11 — Biconvex Positive (1× Asph)

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815 fluorophosphate (UD class). f = +25.04 mm.

E11 is a low-dispersion positive element with an aspherical rear surface (surface 20). It corresponds to Canon's UD
element that is also a GMo asphere; a moulding-grade FCD1-family glass is among the closest catalog coordinates. At
surface 20 the paraxial chief-ray height is 2.0 times the marginal-ray height at wide and 1.2 at tele, so this asphere
acts on both aperture- and field-dependent aberrations. Its longitudinal-colour contribution (−0.644 mm at wide) is
about the same as that of E6 (−0.637 mm), although its focal length is much shorter (25.04 against 73.58 mm).

#### C4 — Cemented Doublet E12 + E13 (net f = +54.744 mm)

**E12 — Negative Meniscus, convex to object.** nd = 2.05090, νd = 26.9. Glass: TAFD65 (HOYA) / H-ZLaF96 (CDGM) class —
051269 lanthanum dense flint. f = −27.40 mm.

**E13 — Biconvex Positive.** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815
fluorophosphate (UD class). f = +18.70 mm.

Fig. 1 shows a common optical rim across C4. Surfaces 21–23 therefore use a modeled 9.9 mm semi-diameter, slightly above the approximately 9.3 mm figure reading; the former 11.5 mm front rim introduced an unsupported step.

C4 is a conventional crown-flint achromat: a UD-class positive element cemented to a very-high-index flint negative. E12
has the highest refractive index in the design (nd = 2.0509) and is only 0.64 mm thick, so the cemented junction carries
a large index step. E13, at 7.99 mm, is the thickest element in the lens.

#### E14 — Negative Meniscus, convex to object (image stabilizer)

nd = 1.88300, νd = 40.8. Glass: TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum flint. f = −80.07 mm.

E14 is the image-stabilizing unit LIS, consisting of the single negative lens GIS, which shifts perpendicular to the
axis (¶0026, ¶0039). Its object-side vertex lies 34.48 mm behind the stop at the wide end. The patent's conditions (3),
(7), (9) and (11) govern its placement, power, glass and shape; they are discussed under Image Stabilization.

#### E15 — Negative Meniscus, concave to object (2× Asph)

nd = 1.85400, νd = 40.4. Glass: L-LAH85V (OHARA low-Tg) class — 854404 lanthanum flint. f = −62.05 mm.

E15 closes L3 and is the third GMo aspherical element. Its closest catalog coordinate is OHARA's low-Tg moulding glass
L-LAH85V, although coordinate agreement does not identify the supplier. Both surfaces are aspherical and sit where the
chief ray is well above the marginal ray (4.83 and 5.26 times at surfaces 26 and 27 at wide). Their correction therefore
acts mainly on field aberrations. E15 and E14 together form the net-negative rear part of L3 (f = −34.221 mm).

### Unit L4 — fixed rear meniscus

#### E16 — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815 fluorophosphate (UD class). f = +71.72 mm.

E16 is the whole of L4 (the patent's LN), is fixed during zooming and focusing (¶0031, ¶0073), and is the third UD-class
element. Here the chief ray is 7.0 to 10.9 times the marginal-ray height at wide (surfaces 28–29), so E16 works mainly
on the off-axis bundles, in the manner of a field lens. Condition (6) bounds its power relative to L1 (|fL1/fLN| =
0.270); ¶0055 explains that a stronger positive LN would strengthen the retrofocus asymmetry and make wide-end
distortion harder to correct.

## Glass Identification and Selection

The patent publishes nd and νd only. The labels below are coordinate matches against the OHARA, HOYA, Schott, CDGM,
HIKARI and Sumita catalogs plus OHARA's low-Tg sheet. All twelve distinct coordinates have a catalog glass within 0.001
on the metric √(Δnd² + (Δνd/50)²). A coordinate match does not establish the supplier or melt.

| Coordinate (nd / νd) | Label in data file                               | Elements      | Role                                     |
| -------------------- | ------------------------------------------------ | ------------- | ---------------------------------------- |
| 1.58313 / 59.4       | S-BAL42 / L-BAL42 class — barium crown           | E1            | Large double-sided front asphere         |
| 1.91082 / 35.2       | TAFD35 / H-ZLaF4LA class — dense lanthanum flint | E2            | Strongest negative power in L1           |
| 1.59282 / 68.6       | FCD515 / FCD505 class — fluorophosphate crown    | E3            | Low-dispersion negative meniscus         |
| 1.43875 / 94.7       | S-FPL55 class — Super UD class                   | E4            | Low-dispersion negative in C1            |
| 1.88300 / 40.8      | TAFD30 / S-LAH58 class — lanthanum flint         | E5, E9, E14   | G1P; negative achromat crown; IS element |
| 1.72047 / 34.7      | S-NBH8 / N-KZFS8 class — short flint             | E6            | Focus lens GP                            |
| 1.80810 / 22.8       | S-NPH1 / FD225 class — dense flint               | E7            | Flint of C2                              |
| 1.67300 / 38.3       | S-NBH52V class                                   | E8            | Positive member of C2                    |
| 1.92286 / 20.9       | E-FDS1 / N-SF66 class — dense flint              | E10           | Positive flint of C3                     |
| 1.49700 / 81.5       | S-FPL51 / FCD1 class — UD class                  | E11, E13, E16 | UD asphere; crown of C4; rear field lens |
| 2.05090 / 26.9       | TAFD65 / H-ZLaF96 class — lanthanum dense flint  | E12           | Flint of C4                              |
| 1.85400 / 40.4       | L-LAH85V (low-Tg) class                          | E15           | Rear GMo asphere                         |

Three observations follow from the table:

- **Low-dispersion glass on both sides of the stop.** Canon's "1 Super UD + 3 UD" maps onto the one νd 94.7 element (E4)
  and the three νd 81.5 elements (E11, E13, E16). This mapping is inferred from the coordinates. Three of the four sit
  behind the stop.
- **Mouldable glasses on the aspheric elements.** All three aspherical elements (E1, E11, E15) have exact coordinate
  matches among low-Tg or moulding-grade glasses (L-BAL42, the FCD1 moulding family, L-LAH85V). This is consistent with
  Canon's GMo description.
- **Repeated lanthanum flint.** The 883408 lanthanum flint appears in three roles: G1P in L1, the negative member of C3,
  and the IS element. Its Abbe number sits inside conditions (9) and (10), which constrain GIS and G1P.

No partial-dispersion data are published, and the data file carries no line indices. The chromatic analysis below is
therefore limited to primary (F − C) colour; secondary spectrum is not assessed, and no apochromatic claim is made.

## Focus Mechanism

Focusing is by the single positive lens E6 (unit L2), which moves toward the image when focusing from infinity to close
distance; L1, the stop, L3 and L4 stay fixed (¶0030, ¶0044). Only d10 and d12 change, and their sum is conserved. Canon
describes the production drive as a leadscrew-type STM driving a lightweight focus lens in a rear-focus system.

**The close-focus states are reconstructed, not published.** The patent gives infinity data only. The data file's
close-focus spacings are a constrained reconstruction. At each published zoom station, E6's position was solved
paraxially so that an axial object 0.25 m from the fixed image plane (Canon's minimum focus distance, which applies at
all focal lengths) images onto that plane. Each station has exactly one solution within the available travel.

| Station           | d10 ∞ → close (mm) | d12 ∞ → close (mm) | E6 travel (mm) | Paraxial magnification |
| ----------------- | ------------------ | ------------------ | -------------- | ---------------------- |
| Wide (10.33 mm)   | 3.18 → 5.4269      | 4.97 → 2.7231      | 2.247          | −0.0693                |
| Middle (15.00 mm) | 3.92 → 6.2052      | 4.23 → 1.9448      | 2.285          | −0.0970                |
| Tele (19.39 mm)   | 3.78 → 6.2119      | 4.37 → 1.9381      | 2.432          | −0.1266                |

Canon specifies maximum magnifications of 0.06× at 10 mm and 0.12× at 20 mm. Canon U.S.A.'s field-of-view figures at
minimum focus (approximately 520 × 347 mm and 284 × 189 mm) imply 0.0692× and 0.1268× for a 36 mm frame width. The
reconstructed magnitudes differ from these by 0.0001 at wide and 0.0002 at tele, but they were not fitted to them: the
agreement is correlation evidence only.

The near-constant travel follows from two trends that nearly offset. With E6 at its infinity position, the 0.25 m object
displaces the paraxial image by 0.745 mm at wide and 2.577 mm at tele, a factor of 3.46. Over the same range the
magnitude of the image displacement per millimetre of image-ward E6 travel grows from 0.283 to 0.935, a factor of 3.30,
because β2 and β3 change with zoom (see Optical Architecture). The reconstructed stroke therefore varies only from 2.247
to 2.432 mm across the zoom range, consistent with Canon's short-stroke description.

The reconstruction has three limits. It is a paraxial d-line solution, not a real-ray best-focus solution. Close-focus
states exist only at the three published stations; intermediate states are linear interpolations. An alternative
constraint, which holds the small infinity-state defocus constant (see Verification Summary), would lengthen the stroke
by 0.16–0.27 mm. The production focus cam is not published.

## Aspherical Surfaces

The patent's aspheric equation (¶0077) is

$$X = \frac{h^2/R}{1 + \sqrt{1 - (1 + k)(h/R)^2}} + A4\,h^4 + A6\,h^6 + A8\,h^8 + A10\,h^{10} + A12\,h^{12}$$

X is the sag measured toward the image, R the paraxial radius and k the standard conic constant; k = 0 is a sphere. The
data file's K is therefore the patent's k without conversion. Surfaces 1 and 2 also publish an A14 term, which is
applied as the next term of the same even series. All coefficients are copied unchanged; no scaling was applied.

| Surface | Element   | R (mm)  | K            | A4          | A6           | A8           | A10          | A12          | A14          |
| ------- | --------- | ------- | ------------ | ----------- | ------------ | ------------ | ------------ | ------------ | ------------ |
| 1       | E1 front  | 37.000  | 0            | 2.59429e−06 | −2.61399e−08 | 5.21697e−11  | −5.59197e−14 | 3.27515e−17  | −8.57311e−21 |
| 2       | E1 rear   | 17.814  | −8.76022e−01 | 9.21103e−06 | −3.58438e−08 | −4.52147e−11 | 2.92832e−13  | −4.25258e−16 | 2.03592e−19  |
| 20      | E11 rear  | −31.043 | 0            | 2.45229e−05 | −3.72036e−08 | −1.08800e−09 | 1.03970e−11  | −1.91023e−14 | —            |
| 26      | E15 front | −26.667 | 0            | 1.66615e−04 | −1.90317e−06 | 1.23230e−08  | −9.41453e−11 | 4.39584e−13  | —            |
| 27      | E15 rear  | −55.445 | 0            | 1.69532e−04 | −1.38711e−06 | 4.53596e−09  | −6.87436e−12 | 2.41668e−14  | —            |

The patent does not publish semi-diameters. The departures below are evaluated at the data file's **modeled**
semi-diameters and change with any different clear aperture. All five surfaces are flatter at the modeled rim than their
base curves.

- **Surface 1 (E1 front).** At h = 33.5 mm the surface departs −4.263 mm from its base sphere (R = 37.0 mm); the rim
  slope is 53.6°. The front face of the large meniscus is flattened substantially toward the edge.
- **Surface 2 (E1 rear).** The modeled semi-diameter (25.6 mm) exceeds |R| = 17.814 mm, so no base sphere exists at the
  rim. The prolate conic base (K = −0.876) already flattens the surface; the polynomial terms add a further −2.194 mm at
  the rim, where the slope is 48.5°.
- **Surface 20 (E11 rear).** The departure is +0.254 mm at h = 10.85 mm, a mild flattening of a convex surface with R =
  −31.043 mm.
- **Surfaces 26 and 27 (E15).** The departures are +0.566 mm at h = 10.6 mm and +0.995 mm at h = 11.5 mm. On surface 27
  the aspheric terms bring the surface back almost parallel to the vertex plane at the rim (local slope 0.2°).

For a fourth-order aspheric term, the weight of the field-dependent Seidel contributions relative to spherical
aberration scales with powers of the chief-to-marginal height ratio at the surface (Welford 1986). This ratio is about
33 at surface 1, 2.0 at surface 20 and about 5 at surfaces 26–27 at the wide end. The front and rear aspheres therefore
act principally on off-axis aberrations, whereas surface 20 has meaningful leverage on both aperture- and
field-dependent terms. The patent does not publish third-order data, so this allocation is first-order interpretation,
not a patent statement.

## Image Stabilization

Image stabilization moves the single negative meniscus E14 (fLIS = −80.07 mm) perpendicular to the axis (¶0026, ¶0039).
Canon specifies 5 stops of optical stabilization, or 6 stops with coordinated in-body stabilization. The data file does
not model the decentered state.

In a first-order model, a lateral shift of E14 moves the image by −0.302, −0.393 and −0.478 mm per millimetre of
decenter at wide, middle and tele; the negative sign means that the image moves opposite to the element. Compensating a
1° angular shake therefore requires about 0.596 mm of decenter at wide and 0.708 mm at tele. The patent's conditions
bound this sensitivity and the associated aberration changes:

- **Condition (7), 0.50 < |fLN/fLIS| < 1.60 (value 0.896).** A weaker IS lens increases the required stroke and the
  barrel diameter, while a stronger one makes coma and field curvature during stabilization hard to suppress (¶0056).
- **Condition (3), 0.35 < DISw/DSPw < 0.80 (value 0.525).** This places E14 at about half the stop-to-image distance,
  leaving room for separate focus and IS actuators without enlarging the IS lens (¶0052).
- **Condition (9), 35 < νdGIS < 60 (value 40.8).** Below the lower limit, lateral colour during stabilization becomes
  hard to correct; above the upper limit, the index of GIS becomes low and the required stroke too large (¶0058).
- **Condition (11), 3.5 < (R1 + R2)/(R1 − R2) < 13.0 (value 6.891).** This fixes E14 as a meniscus convex to the object,
  which the patent states suppresses coma fluctuation during stabilization (¶0060).

## Chromatic Correction Strategy

Only primary (F − C) colour can be evaluated from the published data. The values below come from paraxial traces with
each glass's nF − nC = (nd − 1)/νd. Longitudinal colour (LCA) is the separation of the F and C paraxial foci. Lateral
colour (TCA) is the F − C chief-ray height difference at the printed image height. Contributions are obtained by
enabling dispersion in one unit at a time; the four unit contributions add to within 0.0005 mm of the whole-system
values.

| Unit       | LCA wide (mm) | LCA tele (mm) | TCA wide (mm) | TCA tele (mm) |
| ---------- | ------------- | ------------- | ------------- | ------------- |
| L1         | −0.134        | −0.474        | −0.180        | −0.267        |
| L2         | −0.637        | −1.170        | −0.026        | −0.035        |
| L3         | +0.707        | +1.676        | +0.243        | +0.347        |
| L4         | −0.010        | −0.010        | −0.040        | −0.048        |
| **System** | **−0.074**    | **+0.022**    | **−0.0038**   | **−0.0018**   |

**Lateral colour** is balanced between the front unit and the relay. L1 contributes −0.180 mm at wide, and L3
contributes +0.243 mm, so the residual at the image is a few micrometres at every station (−0.0038, −0.0071 and −0.0018
mm at wide, middle and tele). Within L1, the four negative elements together contribute −0.461 mm at wide and the
positive E5 returns +0.281 mm. The low-dispersion E3 (−0.042 mm) and E4 (−0.090 mm) contribute much less than E2 (−0.233
mm) although E4 carries comparable power.

**Longitudinal colour** is dominated by the focus lens and the relay. The positive singlet E6 contributes −0.637 mm at
wide and −1.170 mm at tele, and L3 overcorrects by +0.707 and +1.676 mm. Inside L3, the flint–crown pairs C2 and C3 have
large, nearly cancelling element contributions of about ±2.4 to ±2.9 mm at wide. The net overcorrection of L3 comes
mainly from C4 (+0.839 mm), C2 (+0.330 mm) and the negative rear elements E14 and E15 (+0.196 and +0.167 mm); E11 works
against it (−0.644 mm), and C3 is slightly negative (−0.180 mm). The system residual changes sign through the zoom
(−0.074 mm at wide, −0.034 mm at middle, +0.022 mm at tele).

E6 moves during focusing, and its large LCA contribution is consistent with the patent's constraint on its Abbe number
(condition (2)), which the patent motivates by chromatic fluctuation during focusing (¶0044, ¶0048). The patent does not
quantify that fluctuation, and the close-focus states here are reconstructions, so no close-focus chromatic value is
claimed.

## Distortion and Image-Circle Strategy

The design deliberately leaves strong barrel distortion at the wide end and removes it by image processing, using
distortion data stored in the lens (¶0036–¶0038; claim 14). The patent defines distortion relative to y = f·tan θ, where
θ is the real chief-ray field angle (¶0063–¶0065).

A real meridional chief ray through the centre of the stop reaches the wide-end printed image height of 18.92 mm at θ =
64.51°. With the model's focal length of 10.3155 mm, the corresponding undistorted height is 21.635 mm, giving Dist_w =
−12.55% (printed −12.56%; condition (13): −20.0 < Dist_w < −8.0). The undistorted height matches the printed middle and
tele image height of 21.64 mm, the full-frame half-diagonal. The wide-end optical image circle is therefore smaller than
the sensor diagonal by the amount the barrel distortion compresses it. After electronic correction, the image fills the
full frame with a diagonal field of 129.02° (twice the real chief-ray angle). This is the mechanism of ¶0038 and claim
26: a smaller wide-end image circle permits a smaller front element. Condition (12), Ymax_w/fL1 = −0.977, bounds the
wide-end image height relative to the front-unit focal length (¶0061).

At the other stations the real chief ray reaches 21.64 mm at 56.09° (middle) and 48.33° (tele). The distortion falls to
−2.88% and −0.54% respectively, and the corresponding real full angles are 112.17° and 96.65°.

Canon's marketed diagonal angle of view (130°25′ to 94°) is close to the rectilinear angle 2·atan(21.64/f) at the
nominal 10 mm and 20 mm focal lengths (130.40° and 94.51°), which suggests that the marketed figures describe corrected
output at nominal focal lengths. The modeled values (129.02° at the wide end and 96.65° at the tele end) are design
quantities and are kept separate from these marketed figures.

## Conditional Expressions

The patent claims inequalities (1)–(13) (¶0045, ¶0050; claims 1 and 3–13) and gives narrower preferred ranges in
¶0066–¶0067. The table lists Example 1's printed Table 1 values alongside values recomputed from the data file; all lie
inside the base ranges.

| No.  | Expression                 | Range         | Table 1 | Recomputed |
| ---- | -------------------------- | ------------- | ------- | ---------- |
| (1)  | D2w/TLw                    | 0.48 – 0.65   | 0.51    | 0.515      |
| (2)  | νdGP                       | 25 – 45       | 34.7   | 34.7      |
| (3)  | DISw/DSPw                  | 0.35 – 0.80   | 0.52    | 0.525      |
| (4)  | Skw/TLw                    | 0.04 – 0.25   | 0.09    | 0.094      |
| (5)  | fL1/fL2                    | −0.45 – −0.15 | −0.26   | −0.263     |
| (6)  | \|fL1/fLN\|                | 0.00 – 0.40   | 0.27    | 0.270      |
| (7)  | \|fLN/fLIS\|               | 0.50 – 1.60   | 0.90    | 0.896      |
| (8)  | ndGP                       | 1.60 – 1.91   | 1.72    | 1.72047    |
| (9)  | νdGIS                      | 35 – 60       | 40.8   | 40.8      |
| (10) | νdG1P                      | 22 – 50       | 40.8   | 40.8      |
| (11) | (R1 + R2)/(R1 − R2) of GIS | 3.5 – 13.0    | 6.89    | 6.891      |
| (12) | Ymax_w/fL1                 | −1.60 – −0.40 | −0.98   | −0.977     |
| (13) | Dist_w (%)                 | −20.0 – −8.0  | −12.56  | −12.55     |

Conditions (1) and (2) are the independent-claim conditions. Condition (1) locates the focus lens GP. Moving it forward
raises the off-axis ray height on L2 and enlarges the focus unit; moving it back raises the off-axis height again and
lengthens the lens (¶0047). The Table 1 inputs themselves (TLw = 128.82, D2w = 66.31, DSPw = 65.69, DISw = 34.48, Skw =
12.13 mm) are reproduced exactly by the prescription. The (13) value depends on the focal length used for y = f·tan θ:
with the printed f = 10.33 mm instead of the prescription's 10.3155 mm it becomes −12.67%.

## Verification Summary

The prescription was traced with a sequential paraxial (y–nu) trace, checked by an independently implemented ABCD-matrix
product, and with exact real rays for the distortion and field-angle quantities. Surfaces are in patent order at scale
1; no cover glass or filter is listed by the source, and none is modeled.

| Quantity                                       | Wide            | Middle          | Tele            |
| ---------------------------------------------- | --------------- | --------------- | --------------- |
| EFL computed / printed (mm)                    | 10.3155 / 10.33 | 14.9801 / 15.00 | 19.3683 / 19.39 |
| Paraxial BFD from surface 29 / printed BF (mm) | 12.054 / 12.13  | 12.021 / 12.13  | 11.980 / 12.13  |
| Overall length, Σd (mm) / printed              | 128.82 / 128.82 | 122.35 / 122.35 | 123.26 / 123.27 |
| Calibrated stop radius (mm)                    | 4.722           | 5.460           | 6.154           |

**L3 source inconsistency.** L1, L2 and L4 reproduce the printed unit focal lengths, but the printed L3 surfaces give
fL3 = 49.325 mm against the printed 49.46 mm. The paraxial focus also falls 0.076, 0.109 and 0.150 mm ahead of the
printed BF at wide, middle and tele, beyond the spread expected from rounding. The L3 rows were re-read at high
resolution without finding a transcription error. Several different single-parameter edits inside L3 would each
reconcile fL3, EFL and BF, so no unique correction can be inferred. The data file therefore keeps the printed
prescription and the printed image plane (d29 = 12.13 mm) unchanged, and the infinity states carry the resulting small
paraxial defocus. The computed focal lengths are 0.11–0.14% short of the printed values for the same reason. The
distortion check above is weak supporting evidence that the printed surface table is the dataset behind Table 1.

**Petzval sum.** The surface-by-surface Petzval sum Σφ/(n·n′) is 0.003294 mm⁻¹, a Petzval radius of −303.6 mm (29.43
times the wide-end focal length). It is zoom-invariant. L1 contributes −0.03629 mm⁻¹, which nearly cancels the positive
contributions of L2 (+0.00792), L3 (+0.02239) and L4 (+0.00927 mm⁻¹).

**Modeled quantities.** Semi-diameters are not published. The data file's values come from real-ray envelopes
(full-aperture axial bundle, full-field chief ray and partial off-axis bundles) with 8% clearance, reduced where edge
thickness, rim slope or gap clearance required. The narrowest constraint is the 0.80 mm E8–E9 air gap at surfaces 15/16.
The stop radii are an f-number calibration, and the close-focus states are the reconstruction described under Focus
Mechanism.

## Design Heritage and Context

The patent frames its contribution against earlier negative-lead zooms (¶0002–¶0007). Such designs readily reach wide
angles with long back focus, but their asymmetry about the stop makes focus-dependent aberration changes difficult to
control. The problem is worst for inner-focus designs with a small focus unit behind the first unit (¶0004–¶0005). The
cited prior art, JP 2020-134806, a five-unit negative–positive–positive–negative–positive zoom, suppresses those changes
but does not, in the applicant's assessment, sufficiently reduce the size of the focus unit (¶0003, ¶0006). Example 1's
response is to make the focus unit a single positive lens located immediately behind the stop. Conditions (1) and (2)
then fix its axial position and its glass (¶0007, ¶0045).

Across the patent's six examples, the rear group LR varies from two to four units behind this common L1 / stop / GP
front end (¶0031–¶0035), and the patent describes all six as designed to permit distortion for electronic correction
(¶0036). Example 1 is the four-unit form with a fixed rear meniscus, and its element count, aspheric count and
low-dispersion-glass count agree with the production RF10-20mm F4 L IS STM, which Canon announced on October 11, 2023.

## Sources

1. Nakahara, M. (Canon Kabushiki Kaisha). _Zoom Lens and Image Pickup Apparatus Having the Same._ US Patent Application
   Publication US 2024/0045184 A1, published February 8, 2024; Appl. No. 18/347,616, filed July 6, 2023; priority JP
   2022-126694, August 8, 2022. Numerical Example 1: printed pp. 6–7; Table 1: printed pp. 10–11; FIGS. 1, 2A–2C.
2. Canon Inc. "RF10-20mm F4 L IS STM." Canon Camera Museum. https://global.canon/en/c-museum/product/rf528.html
   (accessed September 29, 2026).
3. Canon Central and North Africa. "Canon RF 10-20mm F4L IS STM Specifications."
   https://en.canon-cna.com/lenses/rf-10-20mm-f4l-is-stm/specifications/ (accessed September 29, 2026).
4. Canon Hong Kong. "RF10-20mm F4 L IS STM." Product page with specifications.
   https://store.hk.canon/english/rf10-20mm-f-4-l-is-stm.html (accessed September 30, 2026).
5. Canon U.S.A., Inc. "Going Wide: Canon Introduces the RF10-20mm F4 L IS STM to Its Lens Lineup." Press release,
   October 11, 2023. https://www.usa.canon.com/newsroom/2023/20231011-lens (accessed September 30, 2026).
6. Canon U.S.A., Inc. "RF10-20mm F4 L IS STM" product support page.
   https://www.usa.canon.com/support/p/rf10-20mm-f4-l-is-stm (accessed September 29, 2026).
7. Optical glass catalogs: OHARA (catalog data dated March 12, 2025, and OHARA low-Tg glass sheet); HOYA (April 1,
   2026); Schott optical glass overview (2025); CDGM (September 2024); HIKARI general catalog; Sumita (version
   14.01.03).
8. Welford, W. T. _Aberrations of Optical Systems._ Bristol: Adam Hilger, 1986.
