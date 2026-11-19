## Patent Reference and Design Identification

**Patent:** JP 2001-033704 A
**Application Number:** JP H11-202390
**Filed:** 16 July 1999
**Published:** 9 February 2001
**Inventors:** Shinji Ogawa, Takehisa Koyama
**Applicant:** Sigma Corporation
**Title:** Macro lens (マクロレンズ)
**Example details:** 実施例1, numerical table on PDF p. 4 (printed p. 3); Fig. 1 section on PDF p. 7; aberration plots Figs. 2–4 (infinity, −0.5×, 1:1). Unscaled.

The publication's first page (the Patent Abstracts of Japan front page) carries the bibliographic data above: publication
number, filing and publication dates, applicant and both inventors. The patent gives five numerical examples, each with
infinity, −0.5× and 1:1 states. Example 1 is the only one with thirteen elements in ten groups: Examples 2, 3 and 5 air-space
the L3/L4 pair (13 elements, 11 groups) and Example 4 has fourteen elements in twelve groups. [1]

The correlation with the Sigma APO MACRO 180mm F3.5 is strong, though Sigma has not published the prescription:

1. Sigma lists thirteen elements in ten groups. [2,3]
2. Example 1 has exactly two elements at nd 1.49700 / νd 81.6, an FCD1-class extra-low-dispersion coordinate, at the
   second and fourth positions. Sigma's catalogue drawing highlights the second and fourth elements as SLD glass, and
   Sigma's specifications give two SLD elements in the front group. [2,3,5]
3. The patent focuses by moving G2 toward the image and G3 toward the object, with G1 and G4 fixed. Sigma describes an
   inner focus with two moving groups and an unchanged lens length. [1,3,4]
4. The printed 1:1 state places the object 460.4 mm from the image (D(0) 239.6585 mm, vertex track 166.636 mm, BF
   54.1414 mm). Sigma gives 1:1 at a 46 cm minimum focusing distance. [1,2]
5. The design focal length is 178.65 mm at F3.61, against the marketed 180 mm f/3.5. ¶0001 gives a field of about 14°,
   and Sigma gives a 13.7° angle of view. [1,2]
6. The application was filed in July 1999. The lens appeared in 2000 as the APO MACRO 180mm F3.5 EX IF HSM. [6]

In May 2005 Sigma re-released the lens as the EX DG HSM, with a multilayer coating revised for digital cameras. Both
versions are published as thirteen elements in ten groups, focusing to 1:1 at 0.46 m, and no source reports an optical
change, so one prescription stands for both. The DG version was sold in Sigma SA, Canon EF, Nikon F, Pentax K and Konica
Minolta (Sony A) mounts; the Sigma, Canon and Nikon versions have HSM ultrasonic focusing. [3,4]

## Optical Architecture

The design is an all-spherical inner-focus macro telephoto of four groups with powers positive, negative, positive,
negative. The patent's L1–L4 are these groups; the data file shows them as G1–G4 and names the elements L1–L13 in
sequence. The four groups contain thirteen elements in ten air-separated components, including three cemented doublets
(C1–C3). Group focal lengths computed from the printed infinity prescription are:

| Group | Elements | Surfaces | f (mm) | Focus |
|---|---|---|---|---|
| G1 | L1–L5 | 1–9 | +84.20 | fixed |
| G2 | L6–L8 | 10–14 | −49.96 | moves toward the image |
| G3 | L9–L11 | 16–20 | +59.82 | moves toward the object |
| G4 | L12–L13 | 22–25 | −73.84 | fixed |

The aperture stop (row 15) lies between G2 and G3 (¶0019). A second, fixed stop (row 21, 固定絞り) sits 15.158 mm ahead of
G4 and stays fixed relative to it. The vertex track is 166.52 mm and the back focus 54.14 mm, for 220.66 mm from the first
vertex to the image.

At infinity the printed β2∞ = 1099.9 means G2 receives G1's image almost exactly at its front focal point. The beam
through the stop is therefore nearly collimated. G3 converges it, and the negative G4 acts as a rear magnifier of about
1.77× while holding the back focus clear of an SLR mirror (¶0011, ¶0017). The patent's design rule (¶0010–¶0011) treats G3
as a positive lens behind a front stop. Such a lens works best with a negative magnification, so G3 should have
β3 < 0 at 1:1. Because the negative G4 has positive magnification, G2 must then also have negative magnification at 1:1.

The patent places this design against two earlier ones (¶0003–¶0004). The same applicant's JP H03-278012 has the same
positive–negative–positive–negative scheme at F2.8 but reaches only about 0.5×. JP H05-323191 reaches 1:1 at F4 but
moves its first group nonlinearly, which suits autofocus poorly. Example 1 keeps both end groups fixed and reaches 1:1
with two groups moving on opposite sides of the stop.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: FC5 (HOYA) equivalent. f = +323.9 mm.

A weak low-dispersion collector that takes the widest beam in the lens. Its low power keeps the spherical aberration it
adds small. That burden passes to the following elements of G1.

### L2 — Positive Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) equivalent — SLD. f = +180.2 mm.

The first of the two extra-low-dispersion elements, which Sigma's drawing marks as SLD. It carries a large share of G1's
positive power with little axial color.

### L3 + L4 — Cemented Doublet C1

- **L3**, Negative Meniscus: nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA) equivalent. f = −80.4 mm.
- **L4**, Positive Meniscus: nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) equivalent — SLD. f = +85.3 mm.

As a whole, the doublet is nearly afocal (f = −1130 mm). The large index step across its strongly curved interface
(R6 = 40.49 mm) between a lanthanum dense flint and the second SLD crown corrects G1's axial color and spherical aberration
without adding net power. This reading is an interpretation of the prescription; the patent does not discuss single
elements.

### L5 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.4. Glass: FC5 (HOYA) equivalent. f = +207.2 mm.

Completes G1's convergence (G1 f = +84.2 mm), placing its image at the front focal point of G2.

### L6 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA) equivalent. f = −63.7 mm.

The strongest single negative power in the moving group G2.

### L7 + L8 — Cemented Doublet C2

- **L7**, Biconcave Negative: nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA) equivalent. f = −53.6 mm.
- **L8**, Positive Meniscus: nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) equivalent. f = +65.6 mm.

A negative doublet (f = −279.2 mm) whose dense-flint positive element achromatizes G2. Because G2 travels about 31 mm
during focusing, its own color correction keeps axial color nearly constant from infinity to 1:1.

### L9 — Biconvex Positive

nd = 1.60311, νd = 60.7. Glass: BACD14 (HOYA) equivalent. f = +84.3 mm.

The leading positive element of G3, the group behind the stop that moves toward the object for close focus.

### L10 + L11 — Cemented Doublet C3

- **L10**, Biconvex Positive: nd = 1.60311, νd = 60.7. Glass: BACD14 (HOYA) equivalent. f = +69.1 mm.
- **L11**, Negative Meniscus: nd = 1.72825, νd = 28.3. Glass: E-FD10 (HOYA) equivalent. f = −104.4 mm.

A positive doublet (f = +200.3 mm) that achromatizes the second moving group.

### L12 — Biconcave Negative

nd = 1.51680, νd = 64.2. Glass: BSC7 (HOYA) equivalent. f = −145.1 mm.

### L13 — Negative Meniscus, concave to object

nd = 1.51680, νd = 64.2. Glass: BSC7 (HOYA) equivalent. f = −153.3 mm.

L12 and L13 form the fixed negative rear group G4 (f = −73.8 mm). They are separated by a 2.54 mm air gap whose facing
surfaces curve toward each other. A low-index crown gives a larger negative Petzval contribution per unit of negative
power, which offsets the positive groups' field curvature. Condition (3) bounds G4's power (see Conditional Expressions).

## Glass Identification and Selection

The patent prints ND and Vd (¶0019). Every pair matches a d-line HOYA catalog row exactly at the printed precision. The
labels are catalog equivalents and do not assert the production supplier or melt. θgF values are the catalog's, not the
patent's.

| Glass (HOYA) | nd | νd | θgF (catalog) | Elements | Role |
|---|---|---|---|---|---|
| FC5 | 1.48749 | 70.4 | 0.5306 | L1, L5 | Low-dispersion positive crowns of G1 |
| FCD1 | 1.49700 | 81.6 | 0.5389 | L2, L4 | SLD positives of G1 |
| NBFD10 | 1.83400 | 37.3 | 0.5791 | L3 | High-index negative partner in C1 |
| TAF1 | 1.77250 | 49.6 | 0.5504 | L6, L7 | Negative power of G2 |
| FDS90 | 1.84666 | 23.8 | 0.6192 | L8 | Dense-flint achromatizer of G2 |
| BACD14 | 1.60311 | 60.7 | 0.5410 | L9, L10 | Positive power of G3 |
| E-FD10 | 1.72825 | 28.3 | 0.6059 | L11 | Flint achromatizer of G3 |
| BSC7 | 1.51680 | 64.2 | 0.5343 | L12, L13 | Low-index negatives of G4 |

The chromatic strategy concentrates in G1, which carries the largest marginal-ray heights. FCD1's catalog θgF lies about
0.03 above the normal line, the anomalous partial dispersion behind Sigma's SLD designation. The two moving groups are
each achromatized by an ordinary flint, so focusing does not disturb the front group's correction. Sigma markets the lens
as APO; the patent makes no claim about secondary spectrum.

## Focus Mechanism

Inner focus with two groups moving in opposite directions. G1 and G4 are fixed relative to the image (claim 1), and the
lens length does not change. The patent prints three states: [1]

| | ∞ | β = −0.5050 | β = −1.0021 |
|---|---|---|---|
| D(0), object to S1 | ∞ | 390.2574 | 239.6585 |
| D9 (G1–G2) | 9.9681 | 24.7878 | 41.1292 |
| D14 (G2–stop) | 41.2023 | 26.3916 | 10.1072 |
| D15 (stop–G3) | 23.1829 | 13.4325 | 7.1902 |
| D20 (G3–fixed stop) | 5.5193 | 15.2772 | 21.5611 |
| BF | 54.1414 | 54.1414 | 54.1414 |
| F | 3.6069 | 4.7197 | 5.8594 |

From infinity to 1:1, G2 moves 31.16 mm toward the image and G3 15.99 mm toward the object. The printed D9 + D14 changes
by only 0.066 mm, so the stop stays essentially in place. The 1:1 state puts the object 460.4 mm from the image, which
matches Sigma's 0.46 m minimum focusing distance. Computed from the printed spacings, the system focal length falls to
124.4 mm at −0.5× and 84.3 mm at 1:1. This shortening holds the printed effective F-number at 1:1 to 5.86, against about
7.2 for a lens focused by unit extension.

The printed finite states are not exactly self-consistent. Each reproduces its printed β at its own paraxial image, but
that image lies 0.419 mm (−0.5×) and 0.409 mm (1:1) behind the printed BF, which is repeated unchanged in all three
columns. The vertex track also grows by 0.0165 and 0.1151 mm although G1 and G4 are fixed. With the image plane held at
the printed BF, the printed spacings focus objects 391.9 mm and 240.1 mm from the first surface (−0.502× and −0.997×).

The production lens drives focus with Sigma's HSM ultrasonic motor in the Sigma, Canon and Nikon versions. [3]

## Conditional Expressions

Values recomputed from the printed prescription reproduce the patent's printed figures for Example 1.

| Condition | Patent | Example 1 | Met |
|---|---|---|---|
| (1) \|β2∞\| > \|β2MOD\|, β2MOD < 0 | ¶0007 | 1099.9030 > 4.0548; β2MOD = −4.0548 | yes |
| (2) β3MOD < 0 | ¶0008 | −0.2692 | yes |
| (3) 0.34 < \|f4/f\| < 0.54 | ¶0016 | 0.4133 | yes |

According to ¶0017, below the lower limit of (3) the axial color and spherical aberration are overcorrected and the back
focus becomes too short for an SLR mirror. Above the upper limit the lens grows larger, and the exit pupil moves toward
the object, so the barrel must widen to keep corner illumination.

## Model Scope and Limitations

- The model is unscaled at the patent's f = 178.6538 mm, BF 54.1414 mm and design F3.6069; marketing gives 180 mm f/3.5.
  The aperture scale runs to f/32, Sigma's minimum aperture. [2]
- Focus is infinity only. The printed −0.5× and 1:1 spacings above are not modelled.
- At the 21.63 mm full-frame corner the model's half-field is 6.86° (13.7° total), matching Sigma's 13.7° angle of view.
- The patent prints no clear apertures. Semi-diameters are estimated from Fig. 1. The stop radius is derived from
  F3.6069. The fixed stop's 16.5 mm radius is its drawn height in Fig. 1; it leaves the axial beam clear and trims
  only the outer field.
- Fig. 1 and Sigma's drawing show L12 and L13 at similar heights, about 17.5 mm. L13 stops at 15.0 mm, because the
  facing surfaces S23 and S24 would meet near a 15.1 mm radius across their 2.54 mm air gap. The full-aperture corner
  beam needs 16.6–16.9 mm at S24–S25, so the model vignettes the corner at L13. Wide open, the model passes about
  49 % of the light at the 6.9° full-frame corner and 67 % at 5.7°.
- Chromatic results use the HOYA catalog curves named above, which are equivalents rather than confirmed melts.

## Sources

1. JP 2001-033704 A, Sigma Corporation, *Macro lens*, published 9 February 2001: Example 1, Fig. 1, ¶0001–¶0019.
   [Google Patents](https://patents.google.com/patent/JP2001033704A/en)
2. Sigma lens catalogue (English, February 2008), p. 11 (construction, drawing with SLD elements marked, 46 cm, 1:1) and
   p. 14 (specification table: 13.7°, nine blades, minimum aperture F32). Sigma-authored copy hosted by a third party:
   [PDF](https://images-eu.ssl-images-amazon.com/images/I/A1H8Q3vgpBS.pdf)
3. Sigma press release for the APO MACRO 180mm F3.5 EX DG HSM, 18 May 2005, reproduced by
   [DPReview](https://www.dpreview.com/articles/1963489363/sigma-180mmf3-5/)
4. Reviewed.com, [Sigma introduces 180mm f/3.5 APO EX DG HSM](https://www.reviewed.com/cameras/news/sigma-introduces-180mm-f35-apo-ex-dg-hsm-digitally-optimized-lens),
   18 May 2005
5. Imaging Resource, [Sigma 180mm f/3.5 EX DG IF HSM APO Macro specifications](https://imaging-resource.com/lenses/sigma/180mm-f3.5-ex-dg-if-hsm-apo-macro/specifications)
6. CameraReviews.com, [Sigma 180mm F/3.5 APO EX IF HSM Macro](https://camerareviews.com/specs/camera-lenses/sigma-180mm-f-3-5-apo-ex-if-hsm-macro-sigma-sa/)
   (release year 2000)
