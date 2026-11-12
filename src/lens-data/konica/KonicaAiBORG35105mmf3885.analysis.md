## Patent Reference and Design Identification

**Patent:** JP H03-39920 A (特開平3-39920)\
**Application Number:** 特願平2-39751\
**Filed:** 1990-02-22\
**Published:** 1991-02-20\
**Priority:** 1989-04-19, 特願平1-97566\
**Inventor:** Akira Ishisaka (石坂 哲)\
**Applicant:** Konica Corporation (コニカ株式会社)\
**Title:** 小型の高変倍ズームレンズ (compact high-ratio zoom lens)\
**Example details:** 第1実施例; prescription and zoom spacings on gazette p. 247, asphere and conditions on p. 248,
Fig. 1 (sections at wide, middle and tele) and Fig. 2 (aberration curves)

The patent describes a four-group zoom of about 3× for lens-shutter compact cameras. Konica's own documents tie
Example 1 to the zoom lens of the Konica AiBORG, a 35–105 mm autofocus compact introduced in 1991:

1. Konica's January 1992 technical report, _Optical Systems and Lens Control Systems for Compact Zoom Cameras with a
   Zooming Ratio of 3_ (Konica Technical Report vol. 5, pp. 110–114), describes the optics of the newly developed
   AiBORG and its 35–105 mm range (p. 111). Ishisaka is one of its three authors.
2. The report's reference 1 (p. 114) is 石坂: 特開平3-39920, this publication.
3. The report settles on a positive–negative–positive–negative four-group zoom (§2.3, p. 112) with G1 and G3 at a fixed
   separation, G2 as the inner-focus group, and only G3 and G4 on the zoom cam (§3.1). The four-group type, G2
   focusing and the linked G1 and G3 are the patent's claim 1, claim 2 and its linked-group option.
4. The report's Fig. 3-1 lens section (p. 112) shows 2 / 3 / 5 / 3 elements: a cemented front meniscus pair, a
   three-element G2 whose first element has a flat front, a five-element G3 with the shutter blades between its
   cemented pair and the next positive element, and a three-element rear group. Example 1 matches it element for
   element. Examples 2 and 3 have 12 elements each, so Example 1 is the only example that fits.
5. Konica's instruction manual lists the lens as a Konica zoom lens, 35 mm F3.8 to 105 mm F8.5, with autofocus from
   0.8 m (specifications, printed p. 92). Example 1 is printed at F3.8–8.5, and the report's focusing figures run to
   0.8 m.

The report prints no prescription, so the correlation does not show that the production glasses, spacings or
aspheric coefficients equal Example 1's. The lens ring in the report's camera photograph (p. 110) is engraved KONICA
LENS JAPAN 35-105, which gives the display name. Camera Legend dates the camera to 1991 but gives the lens as
f/3.5–8.5; the manual and the patent both give F3.8 at the wide end, and the data file uses F3.8.

The patent front page prints the inventor as 石坂 哲. The report prints the same name with the romanization Ishisaka,
Akira (p. 110), which is used here.

The patent states f = 36.03–102.91 mm, F3.8–8.5 and 2ω = 60.6°–23.3°. The table traces to 36.033 / 62.128 /
102.937 mm, within 0.027% of the printed values, at the patent's own scale.

## Optical Architecture

Example 1 is a positive–negative–positive–negative zoom with 13 elements in 11 air-separated groups; L1–L2 and L7–L8
are cemented. The four zoom groups are:

| Zoom group | Elements | Surfaces | Focal length (d-line, calculated) | Role |
| --- | --- | --- | ---: | --- |
| G1 (+) | L1–L2, cemented | 1–3 | +172.25 mm | Weak positive front group, linked to G3 |
| G2 (−) | L3–L5 | 4–9 | −32.27 mm | Negative zoom group and focusing group |
| G3 (+) | L6–L10 | 10–18 | +20.52 mm | Strong positive group carrying the stop and the plastic asphere |
| G4 (−) | L11–L13 | 19–24 | −28.28 mm | Rear negative group with the largest magnification change |

The report's section 2 (pp. 111–112) explains the four-group choice. A two-group positive–negative zoom puts the whole
magnification change on its rear group, whose travel grows with the zoom ratio. A three-group telephoto zoom does not
use each group's magnification change efficiently. In a four-group zoom the system focal length is
$f = f_1 M_2 M_3 M_4$, and the report distributes the zoom load so that $M_{2T}/M_{2W} < M_{3T}/M_{3W} < M_{4T}/M_{4W}$
(the report's eq. 2-6; the patent's claim 1). The rear groups magnify the aberrations left by the front groups, so
keeping the front groups' share small keeps aberration change during zooming small. Example 1 prints the three ratios
as 1.05, 1.20 and 2.27.

The first-vertex-to-image length is 69.71 mm at wide and 103.06 mm at tele. The telephoto ratios, 1.935 and 1.0015,
round to the patent's printed 1.93 and 1.0.

### Zoom movement

| State | Printed f | D3 | D9 | D18 | BF (calculated) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Wide | 36.03 mm | 6.40 mm | 8.00 mm | 13.37 mm | 3.998 mm |
| Middle | 62.13 mm | 8.76 mm | 5.64 mm | 5.74 mm | 24.084 mm |
| Tele | 102.91 mm | 12.40 mm | 2.00 mm | 2.88 mm | 47.840 mm |

D3 + D9 is 14.40 mm at every state, so G1 and G3 move as one unit. Relative to that unit, G2 moves 6.00 mm toward the
image and G4 closes on G3 by 10.49 mm from wide to tele. Relative to the film plane every group moves toward the object:
G1 and G3 by 33.35 mm, G2 by 27.35 mm and G4 by 43.84 mm.

In the camera only G3 and G4 ride the zoom cam. G2 follows an "imaginary cam": at each of 24 zoom stop positions the
focusing motor drives it to an infinity position stored for that camera in EEPROM (report §3.2, §4.3, Figs. 3-2 and
4-2). The individual calibration absorbs the mechanical tolerances that the report says a 3× compact zoom could not
meet on part accuracy alone.

The patent prints no back focus, so BF is the paraxial infinity image distance. The data file adds 62 interpolated
stations between the three printed states: D3, D9 and D18 change linearly between printed rows, and BF is solved at
each station, because a BF interpolated linearly would leave the image up to 2.29 mm out of focus mid-segment. These
intermediate stations are not the factory zoom law.

### Stop and clear apertures

The patent prints no stop position or diameter. Fig. 1 draws the diaphragm between L8 and L9 at all three states, claim
4 places the stop in or behind G3, and the report's Fig. 3-1 has the shutter blades in the same space, slightly nearer
L8. The model splits the printed 1.40 mm air gap after surface 14 into 0.70 mm before and 0.70 mm after the stop. The
stop diameter follows the printed f-number at each station: 9.31 mm at wide, 10.08 mm at the middle station and
10.17 mm at tele.

The patent gives no semi-diameters either. The rims follow the element sizes drawn in Fig. 1, with the front and rear
rims at 14.4 mm. Fig. 1 ends four faces short of their element's edge with a flat land: the rear of L3, the aspherical
rear of L10 and the fronts of L12 and L13. The diagram draws those lands, and the clear semi-diameters of the four faces
are 8.7, 5.71, 11.3 and 12.7 mm. The cemented L1–L2 interface and the rear of L2 both end at 13.8 mm: L2 has the
square edge Fig. 1 draws, and the 14.4 mm rim of L1 overhangs it, as in the figure. The rear rims are smaller than a
full-aperture bundle to the full-frame corner would need, so the wide-angle corners vignette heavily, as the drawing
implies. The chief ray still reaches the 21.65 mm corner at every zoom position, at 30.3° at wide and 11.6° at tele,
matching the patent's 2ω.

## Element-by-Element Analysis

Focal lengths are for each element alone in air; cemented members are separated for the calculation.

### L1 — Negative Meniscus, convex to object

**nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) catalog equivalent, dense flint. f = −78.7 mm.**

The front member of the cemented G1 pair. The patent notes that focusing with G2 lets G1 be a simple negative–positive
pair (p. 247), which keeps the large front group light and short.

### L2 — Positive Meniscus, convex to object

**nd = 1.65844, νd = 50.9. Glass: S-BSM25 (OHARA) catalog equivalent, dense barium crown. f = +50.8 mm.**

The positive member of G1. With L1 the cemented group is only weakly positive at +172.25 mm. Claim 3 bounds G1's power
against G2's: a stronger G1 would lengthen the G2 focus travel and crowd G1 and G2 at the wide end, and a weaker one
would lengthen the lens (p. 247).

### L3 — Biconcave Negative, nearly flat front

**nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA) catalog equivalent, lanthanum flint. f = −22.0 mm.**

The first element of G2. Its front radius of −56,728 mm is effectively flat, as Fig. 3-1 draws it, and its strong
concave face points to the image. The patent builds G2 from a negative element with a strong concave face to the
image, a positive element and a negative element with a strong concave face to the object, so that chromatic and
off-axis aberrations change little as G2 focuses (p. 247).

### L4 — Biconvex Positive

**nd = 1.71736, νd = 29.5. Glass: PBH1 (OHARA) catalog equivalent, a lead dense flint of the period. f = +22.8 mm.**

The positive middle element of G2. As the flint partner of the two higher-Abbe negatives it keeps the moving focus group
close to achromatic.

### L5 — Biconcave Negative

**nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA) catalog equivalent, lanthanum crown. f = −33.3 mm.**

The rear element of G2, with its stronger concave face toward the object, mirroring L3 about the positive L4.

### L6 — Positive Meniscus, convex to object

**nd = 1.59551, νd = 39.2. Glass: S-TIM8 (OHARA) catalog equivalent, flint. f = +32.0 mm.**

The front element of G3. Nearly all of its power is on the front face; the rear radius is 419.33 mm.

### L7 — Negative Meniscus, convex to object

**nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA) catalog equivalent, dense flint. f = −23.0 mm.**

### L8 — Biconvex Positive

**nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) catalog equivalent, borosilicate crown. f = +20.8 mm.**

L7 and L8 form the cemented pair ahead of the stop. L7 carries the highest index and lowest Abbe number in the lens,
L8 the lowest index and highest Abbe number. Cemented, the pair is only weakly positive (+236.6 mm), so its job is
chromatic correction near the stop rather than power.

### L9 — Biconvex Positive

**nd = 1.58144, νd = 40.7. Glass: S-TIL25 (OHARA) catalog equivalent, light flint. f = +56.5 mm.**

The first element behind the stop, adding positive power to G3 after the nearly powerless cemented pair.

### L10 — Positive Meniscus, concave to object, aspherical rear surface

**nd = 1.49200, νd = 58.3. Glass: plastic (patent-specified; the nd/νd fit a PMMA-type acrylic, no catalog curve).
f = +444.4 mm.**

The patent states that Examples 1 and 3 use a plastic lens for the asphere and make it nearly powerless, so that
changes in temperature and humidity affect performance little (p. 247). Its rear surface, S18, is the lens's only
asphere; see below.

### L11 — Positive Meniscus, concave to object

**nd = 1.72342, νd = 38.0. Glass: S-BAH28 (OHARA) catalog equivalent, barium flint. f = +30.6 mm.**

### L12 — Biconcave Negative

**nd = 1.71300, νd = 53.9. Glass: LAL8 (OHARA) catalog equivalent, lanthanum crown. f = −18.6 mm.**

### L13 — Negative Meniscus, concave to object

**nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA) catalog equivalent, lanthanum crown. f = −62.7 mm.**

G4 is a positive flint meniscus followed by two negative crowns, net −28.28 mm. Its magnification grows 2.27 times from
wide to tele, the largest share of the zoom.

## Glass Identification and Selection

The patent names no glass maker. Twelve of the thirteen elements match OHARA catalog coordinates: nd to all five
printed decimals and νd within 0.05. The labels give the model catalog dispersion curves; they do not identify the
production melts.

| Glass | nd | νd | Elements | Type |
| --- | ---: | ---: | --- | --- |
| S-TIH53 (OHARA) | 1.84666 | 23.8 | L7 | Dense flint |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | L1 | Dense flint |
| S-LAH66 (OHARA) | 1.77250 | 49.6 | L3 | Lanthanum flint |
| S-BAH28 (OHARA) | 1.72342 | 38.0 | L11 | Barium flint |
| PBH1 (OHARA) | 1.71736 | 29.5 | L4 | Dense flint |
| LAL8 (OHARA) | 1.71300 | 53.9 | L12 | Lanthanum crown |
| S-LAL14 (OHARA) | 1.69680 | 55.5 | L5, L13 | Lanthanum crown |
| S-BSM25 (OHARA) | 1.65844 | 50.9 | L2 | Dense barium crown |
| S-TIM8 (OHARA) | 1.59551 | 39.2 | L6 | Flint |
| S-TIL25 (OHARA) | 1.58144 | 40.7 | L9 | Light flint |
| S-BSL7 (OHARA) | 1.51633 | 64.1 | L8 | Borosilicate crown |
| Plastic | 1.49200 | 58.3 | L10 | PMMA-type acrylic class |

L12's printed 1.71300 matches OHARA's older LAL8 entry exactly; the current S-LAL8 is 1.71299. L10 has no catalog
curve, so its dispersion comes from the printed Abbe number.

The two cemented pairs, L1–L2 and L7–L8, are conventional negative-flint, positive-crown achromats. The negative groups
reverse the pattern: G2 and G4 each place one positive flint (L4, L11) among higher-Abbe negative elements, so each
moving group is corrected for colour on its own. No glass with anomalous partial dispersion is used, and no
apochromatic correction is claimed.

## Focus Mechanism

The lens focuses internally with G2 (claim 2). The patent chose G2 because it lets G1 stay a simple cemented pair, and
the three-element negative–positive–negative G2 keeps the change in chromatic and off-axis aberrations small during
focusing (p. 247).

The report (§4.3–4.4, Figs. 4-2 and 4-3) describes how the camera drives it. The focusing motor moves G2 toward the
object from its infinity position to focus down to 0.8 m, at the wide and tele ends alike. The extension differs from one
zoom stop to the next and is not linear in object distance, so the camera approximates each focusing curve by two
straight segments whose slopes, P1 and P2, are calibrated for each camera and stored in EEPROM.

The patent prints no close-focus spacings, so the model is infinity-only: both focus states repeat the infinity
spacings, and the 0.8 m figure is the maker's minimum focus distance, not a modelled state.

## Aspherical Surfaces

The only asphere is S18, the rear face of the plastic L10. The patent gives the sag $X$ along the axis at height $Y$,
with vertex curvature $C = 1/R$:

$$
X = \frac{C Y^2}{1 + \sqrt{1 - (1 + K) C^2 Y^2}} + A_4 Y^4 + A_6 Y^6
$$

The $1 + K$ under the root is the standard conic convention ($K = 0$ is a sphere), which the data file uses unchanged.

| Surface | R | K | A4 | A6 |
| --- | ---: | ---: | ---: | ---: |
| S18 | −12.900 mm | 0.19205 | 4.9648 × 10⁻⁵ | 1.4617 × 10⁻⁷ |

S18 is concave toward the object and, as a glass-to-air surface, has positive power. The positive A4 and A6 outweigh
the slightly oblate conic: relative to the vertex sphere the surface departs 0.025 mm toward the image at 5 mm height
and 0.04 mm at the 5.71 mm edge of its clear aperture, so it flattens and its positive power weakens off axis. That is
the patent's stated aim (p. 247, claim 4): weakening G3's positive power off axis reduces the astigmatism G3 generates and keeps the image
surface from being overcorrected, which in turn leaves G2 free to take a shape with small focusing aberration changes.
The patent adds that the asphere works best with the stop in or behind G3.

## Conditional Expressions

| Condition | Source | Example 1 printed | Calculated |
| --- | --- | ---: | ---: |
| $M_{2T}/M_{2W}$ | Claim 1 (smaller than $M_{3T}/M_{3W}$) | 1.05 | 1.055 |
| $M_{3T}/M_{3W}$ | Claim 1 | 1.20 | 1.194 |
| $M_{4T}/M_{4W}$ | Description; report eq. 2-6 (largest share) | 2.27 | 2.267 |
| $\lvert \phi_1/\phi_2 \rvert$ | Claim 3: between 0.10 and 0.27 | 0.19 | 0.187 |
| Telephoto ratio, wide / tele | Description | 1.93 / 1.0 | 1.935 / 1.0015 |

Example 1 satisfies each condition. The calculated values use the printed prescription and the computed infinity image
distance.

## Aberration Figures and Model Limitations

The model's d-line axial spherical aberration at full aperture is −0.08 mm at wide, −0.12 mm at the middle station and
+0.22 mm at tele. Fig. 2(a) shows about −0.07 mm at wide, in agreement, but Fig. 2(b) and 2(c) show about +0.20 mm and
−0.14 mm, the opposite signs. The table, checked against the scan, shows no misprint, and no single change to a radius,
spacing, index, aspheric coefficient or zoom gap reproduces both plots while keeping the stated focal lengths. The
focal lengths, f-numbers, telephoto ratios and conditional values all agree with the table. The cause is not known;
the plots may come from another design iteration. J-PlatPat lists an amendment (手続補正書) to this publication that
has not been seen. The data file keeps the printed values and records the conflict as an unresolved source erratum.

The stop position, rims, back focus and the 62 intermediate zoom stations are derived, as described above, and finite
focusing is not modelled.

## Sources / References

- **JP H03-39920 A**, 小型の高変倍ズームレンズ, 石坂 哲, applicant コニカ株式会社, published 1991-02-20: gazette pp.
  246–247 for the design rationale, p. 247 for Example 1, p. 248 for its asphere and conditions, Fig. 1 for the
  sections and Fig. 2 for the aberration curves.
  [Patent record](https://patents.google.com/patent/JPH0339920A/en).
- **Haruki Nakayama, Hironobu Mikoshiba and Akira Ishisaka**, _Optical Systems and Lens Control Systems for Compact
  Zoom Cameras with a Zooming Ratio of 3_, Konica Technical Report vol. 5, January 1992, pp. 110–114: p. 110 for the
  authors and the camera photograph, pp. 111–112 for the zoom-type choice, §3.1 and Fig. 3-1 for the lens section,
  §4 and Figs. 4-2 and 4-3 for the focus control, and reference 1 on p. 114.
  [Konica Minolta PDF](https://research.konicaminolta.com/jp/pdf/technology_report/1992/pdf/19.pdf).
- **Konica AiBORG instruction manual**, English specifications, printed p. 92: lens, F3.8–F8.5 and the 0.8 m
  autofocus range. [Manual scan](https://www.butkus.org/chinon/konica/konica_aiborg/konica_aiborg.htm).
- **Camera Legend**, "The Force Awakens: The Konica AiBorg aka 'Vader Cam'", 2015: 1991 introduction.
  [Article](https://cameralegend.com/2015/12/18/the-force-awakens-the-konica-aiborg-aka-vader-cam/).
