# NIKON AF-S NIKKOR 50mm f/1.4 G — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-041003 A\
**Application Number:** JP 2013-172291\
**Filed:** August 22, 2013\
**Published:** March 2, 2015\
**Inventor:** Haruo Sato (佐藤治夫)\
**Applicant:** Nikon Corporation\
**Title:** _Rear wide converter lens, imaging apparatus having the rear wide converter lens, and method for manufacturing
the rear wide converter lens_\
**Example details:** マスタレンズGm (master lens Gm) of 第1実施例, Table 1 rows 1–17 and Figure 1; Tables 2 and 3
repeat the same master rows, as does the corresponding grant JP 6413211 B2.

The patent claims rear wide converters, not a camera lens. Each of its three examples attaches a different converter
Gc behind one shared master lens Gm, and the patent states that Gm is common to all examples (¶0046). It describes Gm
as eight lenses, Lm1 to Lm8, with the aperture stop S between Lm3 and Lm4. The data file models Gm alone; its L1–L8
are the patent's Lm1–Lm8. The converter, its dummy filter plate and the compound image plane are left out.

The patent never names a product. The correlation with the AF-S NIKKOR 50mm f/1.4G is inferred from convergent
evidence:

1. **Construction.** Nikon lists the AF-S NIKKOR 50mm f/1.4G as eight elements in seven groups, all spherical. Gm is eight all-spherical elements in seven air-separated groups. No other Nikon 50mm f/1.4 uses eight
   elements in seven groups.
2. **Section.** Nikon's published optical section shows the same arrangement as the patent's Figure 1: a nested
   positive/negative meniscus pair (L2, L3) whose rims almost touch, a biconcave L4 with a stepped rim cemented to L5
   across a nearly flat interface, and three positive singlets behind it.
3. **Focal length and aperture.** The lens group data print f(Gm) = 51.598 mm. The patent prints no F-number for Gm,
   but the compound F-numbers and focal ratios of all three examples give about f/1.45 (see Optical Architecture).
4. **Back focus.** The derived back focus of 39.02 mm suits a Nikon F-mount SLR lens.
5. **Focus.** Nikon states that all lens groups shift during focusing, which is consistent with a master lens whose
   internal spacings are fixed.

The patent was filed in 2013, five years after the lens was announced, and uses Gm only as the host for its converters.
The match is therefore a strong design correlation, not a statement by Nikon that this is the production prescription.

Nikon announced the AF-S NIKKOR 50mm f/1.4G on September 22, 2008. Its published specifications include a 46° angle of
view on FX, a 0.45 m minimum focus distance, a 0.15× maximum reproduction ratio, a minimum aperture of f/16 and a
nine-blade rounded diaphragm.

## Optical Architecture

Gm is an all-spherical double-Gauss derivative with eight elements in seven groups. Ahead of the stop sit two positive
menisci (L1, L2) and a negative meniscus (L3), all convex to the object. Behind it are a cemented negative-positive pair
(L4 + L5) and three positive singlets (L6, L7, L8). Compared with a seven-element Gauss layout with two rear singlets,
the rear positive power is split over three elements.

| Section | Elements | Focal length |
| --- | --- | --- |
| Front group, ahead of the stop | L1–L3 | +152.38 mm |
| Cemented pair | L4 + L5 | −69.80 mm |
| Rear group, behind the stop | L4–L8 | +44.61 mm |
| Whole master lens | L1–L8 | +51.598 mm |

The front group is weakly positive and the rear group carries most of the power, the usual balance of a fast Gauss
lens. The two concave faces around the stop (L3 rear, R = 19.2 mm, and L4 front, R = −18.804 mm) are nearly mirror
images, and the 16.43 mm air space between them holds the stop: 6.822 mm behind S6 and 9.6123 mm ahead of S8, or
18.402 mm behind the first vertex.

The vertex track from S1 to S17 is 44.08 mm. The patent's d17 = 3.0 mm is the gap from Gm to the converter, so the
data file uses the paraxial image distance of Gm alone, 39.0174 mm, as the back focus. Total length to the image at
infinity is then 83.10 mm. The longitudinal spherical aberration of this model is small at every pupil zone (−0.09 mm
at the worst, 0.7 of the pupil), so the paraxial image plane is effectively the best-focus plane.

The F-number is inferred. Example 1 prints a compound F-number of 1.015 at a compound focal length of 36.106 mm;
multiplying by 51.598 / 36.106 gives f/1.4505 for Gm alone, assuming the converter does not limit the aperture.
Examples 2 and 3 give 1.4501 and 1.4502 by the same calculation. The model's stop is sized for f/1.4505.

The patent gives no field for Gm. On the 135 full-frame format, the 21.63 mm corner image height corresponds to a
half-field of 23.2°, in line with Nikon's 46° angle of view.

## Element-by-Element Analysis

Focal lengths are for each element alone in air at the d-line.

### L1 — Positive Meniscus

nd = 1.80400, νd = 46.57. Glass: S-LAH65 (OHARA). f = +62.92 mm.

The front collector, convex to the object with a nearly flat rear face (R = 258.15 mm). A lanthanum glass of this index
gives the needed power with shallower curves than a crown would, which helps hold down the spherical aberration of the
first strong surface.

### L2 — Positive Meniscus

nd = 1.90366, νd = 31.31. Glass: TAFD25 (HOYA). f = +86.72 mm.

A dense, high-index positive meniscus 0.15 mm behind L1. Its rear face (R = 37.76 mm) and L3's front face
(R = 64.144 mm) bound a 1.51 mm axial air space that closes toward the rim, so L2 and L3 nest into each other; the
patent's figure and Nikon's section both show their rims almost touching. It has the highest index in the lens.

### L3 — Negative Meniscus

nd = 1.75520, νd = 27.53. Glass: E-FD4 (HOYA). f = −36.72 mm.

The pre-stop negative meniscus. Its deep concave rear face (R = 19.2 mm) faces the stop and supplies much of the
negative power that holds the Petzval sum down. Its front face meets L2's rear face at about 15.9 mm from the axis, so
in the model its outer rim (S5) is 15.8 mm, just short of contact, as the patent's figure draws the two rims meeting.
The rear face keeps a 13.7 mm optical cap with a vertical land out to 15.8 mm, so the element is square-cut at the
rim, as the figure draws it.

### L4 + L5 — Cemented Doublet

L4: nd = 1.75520, νd = 27.53. Glass: E-FD4 (HOYA). Biconcave Negative. f = −22.11 mm.\
L5: nd = 1.83481, νd = 42.71. Glass: S-LAH55 (OHARA). Biconvex Positive. f = +37.01 mm.

The cemented pair behind the stop has a combined focal length of −69.80 mm. L4's front face (R = −18.804 mm) nearly
mirrors L3's rear face across the stop, the defining feature of the Gauss form. L4 has a stepped rim: a 13.2 mm optical
cap on its front face with a vertical land out to 16.2 mm, matching both the patent figure and Nikon's section. L5 is
square-cut at 16.6 mm and stands just proud of L4's rim, as the patent figure draws it.

The junction is nearly flat (R = 154.1 mm on both sides), so it adds little power. Its job is chromatic: the flint L4
(νd 27.53) and the lanthanum glass L5 (νd 42.71) differ by 15.2 in Abbe number, which helps correct colour close to
the stop.

The patent prints a 0.0100 mm cement layer (nd 1.514, νd 42.83) between the two 154.1 mm faces. The data file keeps
it as the thin cement element C1 with its printed thickness, nd and νd, so all first-order values are exact. With
equal radii on both faces its own focal length is about 1.4 × 10⁷ mm, so neither its power nor its dispersion has a
visible effect.

### L6 — Positive Meniscus

nd = 1.83481, νd = 42.71. Glass: S-LAH55 (OHARA). f = +85.44 mm.

The first of the three rear singlets, concave to the stop (R = −43.029 / −27.84 mm), 0.71 mm behind the cemented
pair. It uses the same glass as L5.

### L7 — Positive Meniscus

nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). f = +111.07 mm.

A weaker positive meniscus, also concave to the stop, 0.18 mm behind L6. Bending both rear menisci toward the stop
lets the converging beam meet each surface at moderate angles, which spreads the rear power over more surfaces and
limits the spherical aberration and coma that a single strong rear element would add (an interpretation of the
prescription; the patent does not discuss Gm's correction).

### L8 — Biconvex Positive

nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA). f = +110.41 mm.

The final element, a weak biconvex lens 0.10 mm behind L7 with most of its power on the front face
(R = 100.548 / −400 mm). It has the lowest index and the highest Abbe number of the eight elements.

## Glass Identification and Selection

The patent prints nd and νd only. Each pair reproduces the named catalog glass to within 2 × 10⁻⁶ in nd and 0.01 in
νd (the largest differences are TAFD25's), so the names are catalog matches, not a statement of the production supplier.
E-FD4 (HOYA) and S-TIH4 (OHARA) are near-identical alternatives for the 1.7552 / 27.53 pair.

| Glass | nd | νd | Elements | Role |
| --- | --- | --- | --- | --- |
| S-LAH65 (OHARA) | 1.80400 | 46.57 | L1 | Front positive collector |
| TAFD25 (HOYA) | 1.90366 | 31.31 | L2 | High-index positive meniscus |
| E-FD4 (HOYA) | 1.75520 | 27.53 | L3, L4 | Negative flints flanking the stop |
| S-LAH55 (OHARA) | 1.83481 | 42.71 | L5, L6 | Cemented positive and first rear meniscus |
| S-LAH59 (OHARA) | 1.81600 | 46.62 | L7 | Second rear meniscus |
| S-LAL18 (OHARA) | 1.72916 | 54.68 | L8 | Final positive element |
| Cement (no catalog match) | 1.514 | 42.83 | C1 | 0.0100 mm layer at the L4/L5 junction |

The palette is uniformly high-index. Five of the six positive elements have nd above 1.80, while the two negative
elements share a lower-index flint (1.7552). Placing high index in the positive elements and lower index in the negative
ones is the classical way to keep the Petzval sum small; this model's Petzval sum is 0.00333 mm⁻¹, a Petzval radius of
about 300 mm, or 5.8 times the focal length. The two negatives also have the lowest Abbe numbers, so they act as the
achromatizing flints against the lanthanum positives.

No element uses ED or anomalous-dispersion glass. The chromatic trace uses the named catalog dispersion curves, and
the cement layer's printed nd and νd. The patent plots aberrations only for Gm with a converter attached. Traced with
the Example 1 converter, its rows matched to catalog glasses, these curves reproduce the d- and g-line spherical
aberration and the g-line lateral colour of the patent's Figure 2 to within about 0.005 mm.

## Focus Mechanism

Nikon states that all lens groups shift during focusing: the lens unit-focuses, moving as a whole toward the object
while its internal spacings stay fixed, so only the back focus changes. The patent prints Gm at infinity only.

The close state in the data file is a paraxial reconstruction, not a published configuration. It solves the back focus
that puts the image in focus at Nikon's 0.45 m minimum focus distance, measured from object to image plane:

| State | Object to image | Back focus | Extension | Magnification |
| --- | --- | --- | --- | --- |
| Infinity | ∞ | 39.017 mm | — | 0 |
| Close (reconstructed) | 0.45 m | 46.659 mm | 7.641 mm | 0.148× |

The reconstructed 0.148× agrees with Nikon's 0.15× maximum reproduction ratio. Focus positions between the two states
are interpolated.

## Model Scope and Limitations

- The back focus (39.0174 mm), the F-number (f/1.4505) and the close-focus spacing are calculated, not printed.
- The patent prints no semi-diameters. The rims follow the outline of the patent's Figure 1 within the real geometry,
  including the lands on L3's rear face and L4's front face. The rims are not measured from a production lens.
- The aperture runs from f/1.4505 to f/16, Nikon's minimum aperture.
- The cement layer has no catalog match; its colour is traced from the printed nd 1.514 and νd 42.83 alone.
- At the reconstructed 0.45 m state, traced from a real object point, the rims of L6 and L7 trim the outer edge of the
  wide-open on-axis beam (about 4.5 % of it); the figure they follow is drawn at infinity.
- Paragraph 0014 of the patent gives the master as 51.6 mm but divides 36.1 by 51.5 in its sample ratio calculation.
  The table value, 51.598 mm, is used.

## Sources

- [JP 2015-041003 A](https://patents.google.com/patent/JP2015041003A/ja): Table 1 master rows 1–17, Tables 2–3,
  Figure 1, ¶0014 and ¶0046.
- [JP 6413211 B2](https://patents.google.com/patent/JP6413211B2/ja): corresponding grant; same master table.
- [Nikon news release, September 22, 2008](https://www.nikon.com/company/news/2008/0922_nikkor_01/): announcement,
  construction and focusing description.
- [Nikon AF-S NIKKOR 50mm f/1.4G product page](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_50mmf_14g/):
  specifications.
- [Nikon optical section](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_50mmf_14g/img/pic_003.jpg):
  lens construction diagram.
- [Nikon user manual](https://cdn-10.nikon-cdn.com/pdf/manuals/lenses/AF/AFS50G.pdf): specifications page.
