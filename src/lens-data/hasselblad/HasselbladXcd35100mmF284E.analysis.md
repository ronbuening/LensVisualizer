# Hasselblad XCD 35–100 mm f/2.8–4 E

## Patent Reference and Design Identification

**Patent:** US 2026/0036794 A1  
**Application Number:** 19/272,642  
**Filed:** 2025-07-17  
**Published:** 2026-02-05  
**Priority:** 2024-07-31 (JP 2024-125127)  
**Inventors:** Emiri Suzuki, Naoto Nishimura  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Imaging optical system, and image capture device and camera system including the same  
**Embodiment analyzed:** Example 1

The prescription is Example 1 of US 2026/0036794 A1, read from Tables 1A–1F and Figure 1A. It is a research
correlation to the Hasselblad XCD 2,8–4/35–100E, not manufacturer confirmation of the production formula. The
applicant is Panasonic Intellectual Property Management Co., Ltd.; the brand of the marketed lens does not identify
the glass supplier or establish ownership of this particular embodiment. [P]

The following converging correspondences support the selection:

1. The element and air-separated group counts agree with the manufacturer's lens datasheet.
2. The source endpoint focal lengths agree closely with the datasheet's actual focal-length
   range, rather than requiring a change to the named marketing endpoints.
3. The aspherical elements occupy the corresponding front-to-rear positions. Counting
   the manufacturer's unnumbered cross-section gives the same relative placement as the
   patent's explicitly described aspheres. This is a diagram interpretation, not a factory
   part-number identification.
4. The source field and image height are appropriate to the documented XCD camera format.
5. The internal-focus architecture is consistent in broad mechanism. The manufacturer does
   not identify the patent's particular moving pair as its production focus unit. [P, H1, H2, H3]

| Quantity            | Manufacturer specification             | Selected source model                                             |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| Focal length        | 35–100 mm named; 36–97 mm in datasheet | 36.0455–96.9931 mm published                                      |
| Maximum aperture    | f/2.8–4                                | F4.12 printed at every station; f/2.84–4.12 with a fixed iris     |
| Construction        | 16 elements / 13 optical groups        | 16 elements / 13 optical groups                                   |
| Aspherical elements | 3                                      | L4, L12 and L13                                                   |
| ED designation      | 5 elements                             | Five elements have νd ≥ 71.7: L4, L8, L10, L11, L15 (inferred)    |
| Image format        | 43.8 × 32.9 mm sensor                  | 55.0 mm source image circle                                       |
| Close distance      | 0.4 / 0.5 m, object to image plane     | Infinity prescription only                                        |
| Announcement        | 2025-08-26                             | US publication 2026-02-05                                         |

The patent prints F4.12 at the wide, middle and long stations in all five examples, and its aberration plots are
drawn at F4.12 only. Holding the iris at the radius that passes the printed F4.11983 beam at the long end (12.18 mm)
gives f/2.84 at the wide station and f/3.41 at the middle one, which reproduces the marketed f/2.8–4; the model uses
that fixed iris. The f/2.84 and f/3.41 values are derived, not printed, so the model does not establish the
production lens's performance faster than F4.12. The system mount is Hasselblad XCD, and the modeled format category
is 44×33. [P, Table 1C, Fig. 1B; H1, H3]

The website's 2.86× zoom statement follows the named 100/35 endpoints; the datasheet's 97/36 ratio is 2.69, and the
patent prints 2.69085.

Likewise, barrel length is a mechanical dimension, whereas the source total length is an optical
first-vertex-to-image distance; one cannot validate the other without the relevant mechanical reference planes.
[H1, H2]

## Optical Architecture

The design is a positive-leading six-group zoom with power order positive, negative, positive, positive, negative,
positive. The aperture is between the second and third functional groups and moves with the third group in this
embodiment. The functional zoom groups are distinct from the air-separated optical-group count. [P, ¶0034–0041,
¶0126]

| Functional group | Elements | Computed net focal length (mm) | Structural role                 |
| ---------------- | -------- | ------------------------------ | ------------------------------- |
| G1               | L1–L2    | +139.2669                      | Positive front bonded pair      |
| G2               | L3–L6    | -29.9624                       | Negative group before stop      |
| G3               | L7–L10   | +67.9399                       | Positive group following stop   |
| G4               | L11–L12  | +35.8536                       | Positive pair before focus unit |
| G5               | L13–L14  | -44.3671                       | Negative internal-focus pair    |
| G6               | L15–L16  | +113.7285                      | Positive rear group             |

The front group is a weak net-positive bonded pair. A stronger negative group precedes the stop. Two positive
groups then lead into a negative internal-focus pair and a positive rear group. The architecture's most specific
feature is the opposed negative-meniscus focus pair: the patent attributes it to reduced moving mass and control of
focus-dependent astigmatism and distortion. Those are the patent's design reasons, not isolated-element aberration
contributions established by the present calculations. [P, ¶0131–0133]

All functional groups move during zooming. Their front glass vertices, with the physical image plane held at zero
and positive coordinates directed imageward, are:

| Group | Wide position (mm) | Middle position (mm) | Long-end position (mm) |
| ----- | ------------------ | -------------------- | ---------------------- |
| G1    | -150.4096          | -164.4458            | -189.9698              |
| G2    | -140.0820          | -140.1169            | -149.8287              |
| G3    | -84.5160           | -98.0739             | -116.6943              |
| G4    | -61.7052           | -77.7910             | -97.5705               |
| G5    | -49.7750           | -66.9186             | -87.0957               |
| G6    | -28.7485           | -39.4751             | -44.9017               |

Thus every group moves objectward over each interval between the published stations. The source specifies
increasing separation between the first and second groups, decreasing separations through the next three intergroup
intervals, and increasing separation between the focus and rear groups. The separation from the last group to the
image plane also increases. The numerical model interpolates the published spacings linearly; this does not recover
a mechanical cam from the figure's schematic polygonal motion marks. [P, ¶0027, ¶0049; Table 1C]

The bonded pairs have the following net powers when each complete pair is placed in air:

| Bonded pair | Computed net focal length in air (mm) |
| ----------- | ------------------------------------- |
| L1–L2       | +139.2669                             |
| L4–L5       | -5330.8142                            |
| L9–L10      | -27.1037                              |

These values include the actual shared refracting interfaces. They are not sums of the constituents' isolated focal
lengths. An element's standalone power, a bonded assembly's net power and its effect in the converging or diverging
system beam are different quantities. The element focal lengths below use the standalone thick-element-in-air
convention; their signs alone do not identify a contribution to coma, distortion or spherical aberration.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.69895, νd = 30.1. Glass: E-FD15L (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -324.3865 mm.

The object-facing convex meniscus forms the front member of the first bonded pair. Its negative standalone power
opposes the following positive member while the pair remains net positive. The lower Abbe number of this negative
member provides a different chromatic weight from its partner, but no isolated achromatization or aberration budget
is inferred from that observation. [P, ¶0036, ¶0043; Tables 1A, 1D]

The exposed front group collects the system beam before the principal negative zoom group. Its shared interface
remains a refracting boundary between the two published glasses; the adhesive mentioned in the patent is not
assigned an unreported finite optical layer.

### L2 — Positive Meniscus

nd = 1.71300, νd = 53.9. Glass: LAC8 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +96.3675 mm.

This object-facing convex meniscus completes the positive first group. Its greater positive standalone power
overcomes the front member's negative power, with the combined result set by thickness and the shared boundary as
well as the surface curvatures. [P, ¶0036, ¶0043]

LAC8 is the catalog glass whose nd, νd and θgF equal the print. That equality does not establish that HOYA supplied
the production glass.

### L3 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: TAFD5G (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -40.3551 mm.

The first member of the second functional group is convex toward the object and supplies negative standalone power
ahead of the bonded pair. The source shape is strongly asymmetric; it should not be interpreted as a thin,
symmetric negative lens. [P, ¶0037, ¶0044]

Its rear clear-aperture estimate follows the end of the drawn optical curve rather than the larger mechanical
flange. This distinction matters to the adjacent gap geometry; it changes an inferred clear radius, not a published
curvature, thickness or refractive index.

### L4 — Negative Biconcave (1x Asph)

nd = 1.55332, νd = 71.7. Glass: M-FCD500 (HOYA; equals the patent nd and νd, catalog θgF 0.5403 against the printed 0.5398; supplier unconfirmed). f = -38.5330 mm.

The biconcave member has an aspherical object-side surface and is bonded to L5. Its relatively high Abbe number
occurs on the negative member of this pair. The adjacent positive member has substantially lower Abbe number, so a
generic description of a positive ED crown paired with a negative flint would misidentify this particular assembly.
[P, ¶0037, ¶0044]

The patent constrains this member's Abbe number to balance wide-angle lateral chromatic correction and decentering
sensitivity. That attribution concerns the stated design conditions, not an independently measured manufacturing
tolerance. [P, ¶0140–0145]

M-FCD500, a HOYA moulding glass, equals the printed nd and νd. Its catalog curve gives θgF 0.5403 against the
printed 0.5398, and the model keeps the printed value. The label is a catalog match, not an identification of the
production glass.

### L5 — Positive Meniscus

nd = 1.90110, νd = 27.1. Glass: NBFD27 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +38.0884 mm.

The object-facing convex member completes the second bonded pair. Despite its strong positive isolated power, the
bonded pair's net power is weakly negative. The surrounding negative singlets make the complete second group much
more strongly negative than this near-balanced pair by itself. [P, ¶0037, ¶0044; Table 1E]

The partial-dispersion condition on this positive member is explicitly tied in the patent to axial and
magnification chromatic aberration at the wide-angle end. The high index and low Abbe number are preserved rather
than replaced by a more familiar achromat pairing. [P, ¶0134–0139]

### L6 — Negative Meniscus

nd = 1.68960, νd = 31.1. Glass: E-FD80 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -182.3971 mm.

This image-facing convex meniscus closes the second group immediately before the stop interval. Its negative
standalone power is weaker than that of L3 or L4. Its position, bending and glass distinguish it from those
preceding negative members. [P, ¶0037, ¶0044]

No particular coma or distortion correction is assigned to it without a contribution analysis. The source
establishes its shape, glass coordinates and position, not a unique single-element aberration function.

### L7 — Positive Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +48.9739 mm.

The first element behind the stop is an object-facing convex positive meniscus. It begins the net-positive third
group and is followed by a lower-index positive element and a net-negative bonded pair. [P, ¶0038, ¶0045]

The dense lanthanum-flint class and the moderate Abbe number distinguish this member from the lower-dispersion
positive elements farther behind the stop. Catalog equivalence remains separate from identification of the
historical material.

### L8 — Positive Biconvex

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +42.8706 mm.

The low-index, high-Abbe biconvex element is a positive member of the third group. The patent's condition on
positive lenses behind the stop includes this element and links the permitted Abbe-number interval to axial color
and long-end magnification color. [P, ¶0038, ¶0045, ¶0151–0156]

The manufacturer diagram places an ED-marked element in this relative position. That label supports the production
correlation but does not substitute for the source's numerical partial-dispersion coordinate or identify a
commercial melt. [H1]

### L9 — Negative Biconcave

nd = 1.74951, νd = 35.3. Glass: S-NBH51 (OHARA; equals the patent νd and θgF, catalog nd 1.74950 against the printed 1.74951; supplier unconfirmed). f = -18.8206 mm.

This biconcave element is the negative member of the third bonded pair. The assembled pair remains negative even
though its following member is positive. Its role within a positive functional group cannot be described by
treating the entire group as a sequence of positive thin lenses. [P, ¶0038, ¶0045]

The patent associates this member's partial-dispersion deviation with secondary-spectrum and axial-chromatic
correction. OHARA S-NBH51 equals the printed νd and θgF; its catalog nd is 1.74950 against the printed 1.74951, and
the prescription keeps the printed index. [P, ¶0146–0150]

### L10 — Positive Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +59.1525 mm.

The object-facing convex positive member completes the third bonded pair. Its high Abbe number and source partial
dispersion match the repeated low-index coordinate also used by other elements, but its curvature, power sign and
beam location determine a distinct role. [P, ¶0038, ¶0045]

In the model L9 and the cemented joint share one rim radius (12.1 mm), as the figure draws them. The rear face of
L10 stops at 11.3 mm, where the figure bevels the rear corner of the pair.

### L11 — Positive Biconvex

nd = 1.55032, νd = 75.5. Glass: FCD705 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +30.6651 mm.

This positive member begins the fourth group. Its standalone positive power exceeds the magnitude of the following
element's negative power, giving a positive group with the actual spacing included. Its high Abbe number is one of
the positive-lens coordinates covered by the patent's post-stop dispersion condition. [P, ¶0039, ¶0046, ¶0151–0156]

Its glass is FCD705, not the FCD1 of L8, L10 and L15. Grouping all high-Abbe elements under a single material name
would therefore discard source information.

### L12 — Negative Meniscus (2x Asph)

nd = 1.69350, νd = 53.2. Glass: L-LAL13 (OHARA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -179.1199 mm.

The object-facing convex meniscus has aspheres on both sides and closes the fourth group. Its negative standalone
power is relatively weak, but that paraxial observation does not bound the effect of its higher-order profile
across the finite pupil. [P, ¶0039, ¶0046]

The original optical outline constrains the inferred rim. Its first surface approaches a profile slope turnover
near that rim, so an enlarged diameter taken merely from the full drawn blank would extend the polynomial beyond
the adopted optical region. The surface shape and aperture evidence are discussed separately below.

### L13 — Negative Meniscus (2x Asph)

nd = 1.81055, νd = 41.1. Glass: K-VC181 (SUMITA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -80.5510 mm.

The object-facing convex negative meniscus is the front member of the focus pair, with aspherical profiles on both
sides. The next negative meniscus faces in the opposite direction. Together they form the patent's internal-focus
group. [P, ¶0040, ¶0047, ¶0050]

The patent attributes this opposed pair to reducing moving weight and focus-dependent aberration changes. No
quantitative focus travel or close-focus aberration improvement is inferred from the infinity prescription alone.
[P, ¶0133]

### L14 — Negative Meniscus

nd = 1.48749, νd = 70.4. Glass: FC5 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -110.6674 mm.

The image-facing convex meniscus completes the negative focus group. It has a lower index and higher Abbe number
than the preceding aspherical member. The different coordinates and opposing bends give the pair more degrees of
freedom than a single negative lens, but do not establish a unique finite-focus motion law. [P, ¶0040, ¶0047]

Both members move together in the source's stated focus mechanism; the model assigns no relative motion between
them.

### L15 — Negative Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = -366.8758 mm.

The image-facing convex meniscus is the first member of the rear group. Its low-index, high-Abbe coordinate also
appears in positive elements elsewhere; here the standalone power is negative and comparatively weak. Material
repetition therefore does not imply identical optical function. [P, ¶0041, ¶0048]

It precedes the final positive element across a fixed air interval. The pair forms the positive rear functional
group, rather than a cemented doublet.

### L16 — Positive Biconvex

nd = 1.92119, νd = 24.0. Glass: FDS24-W (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed). f = +87.9367 mm.

The biconvex last lens supplies positive standalone power and completes the rear group. The patent explicitly
constrains the partial-dispersion deviation of the last positive lens in relation to wide- and long-end
magnification color. This is more specific than calling any final positive element a field flattener. [P, ¶0041,
¶0048, ¶0157–0162]

The physical camera plate follows this lens. That plate remains in optical propagation, although it is not counted
as a seventeenth lens element or displayed as part of the sixteen-element optical assembly.

## Glass Identification and Selection

The printed d-line index, Abbe number and partial-dispersion ratio of every glass were compared with the current
OHARA, HOYA, Schott, HIKARI, CDGM and SUMITA catalog records. Each element is labelled with the catalog glass whose
nd, νd and θgF equal the print, and that label selects the dispersion curve the model traces. Supplier and melt are
not identified. The nd, νd and θgF columns are the printed values; the last two columns come from the labelled
glass's catalog dispersion formula. [C1–C6]

| Use          | nd      | νd   | θgF    | ΔPgF (model) | Glass label      | Catalog νd | Catalog θgF |
| ------------ | ------- | ---- | ------ | ------------ | ---------------- | ---------- | ----------- |
| L1           | 1.69895 | 30.1 | 0.6028 | +0.0096282   | E-FD15L (HOYA)   | 30.05      | 0.60279     |
| L2           | 1.71300 | 53.9 | 0.5442 | -0.0089402   | LAC8 (HOYA)      | 53.94      | 0.54422     |
| L3           | 1.83481 | 42.7 | 0.5647 | -0.0072786   | TAFD5G (HOYA)    | 42.72      | 0.56475     |
| L4           | 1.55332 | 71.7 | 0.5398 | +0.0165994   | M-FCD500 (HOYA)  | 71.68      | 0.54027     |
| L5           | 1.90110 | 27.1 | 0.6072 | +0.0089822   | NBFD27 (HOYA)    | 27.06      | 0.60716     |
| L6           | 1.68960 | 31.1 | 0.6031 | +0.0116102   | E-FD80 (HOYA)    | 31.14      | 0.60316     |
| L7           | 1.83400 | 37.3 | 0.5790 | -0.0020614   | NBFD10 (HOYA)    | 37.35      | 0.57906     |
| L8, L10, L15 | 1.49700 | 81.6 | 0.5389 | +0.0323512   | FCD1 (HOYA)      | 81.61      | 0.53885     |
| L9           | 1.74951 | 35.3 | 0.5818 | -0.0026254   | S-NBH51 (OHARA)  | 35.33      | 0.58186     |
| L11          | 1.55032 | 75.5 | 0.5401 | +0.0232910   | FCD705 (HOYA)    | 75.50      | 0.53999     |
| L12          | 1.69350 | 53.2 | 0.5482 | -0.0061176   | L-LAL13 (OHARA)  | 53.19      | 0.54829     |
| L13          | 1.81055 | 41.1 | 0.5690 | -0.0056698   | K-VC181 (SUMITA) | 41.14      | 0.56891     |
| L14          | 1.48749 | 70.4 | 0.5306 | +0.0052128   | FC5 (HOYA)       | 70.44      | 0.53059     |
| L16          | 1.92119 | 24.0 | 0.6202 | +0.0167680   | FDS24-W (HOYA)   | 23.96      | 0.62022     |
| CG           | 1.51680 | 64.2 | 0.5343 | -0.0015156   | BSC7 (HOYA)      | 64.20      | 0.53428     |

Thirteen of the fifteen labels equal the print in all three coordinates, with the catalog θgF within about 0.0001
of the printed value. The other two are close. M-FCD500 (L4) equals the printed nd and νd, but its curve gives θgF
0.5403 against 0.5398. S-NBH51 (L9) equals the printed νd and θgF, with nd 1.74950 against 1.74951. Where several
glasses share an nd and νd, θgF separates them. FCD1 fits the repeated coordinate of L8, L10 and L15, where OHARA
S-FPL51 at the same nd and νd has θgF 0.5375. L12 is OHARA L-LAL13; HOYA M-LAC130 and OHARA S-LAL13 share its nd
and νd but have θgF 0.5466 and 0.5473.

The three aspherical elements, L4, L12 and L13, carry the three moulding glasses of the set: M-FCD500, L-LAL13 and
K-VC181. Five elements have νd of 71.7 or more: L4 (M-FCD500), L8, L10 and L15 (FCD1) and L11 (FCD705). That
equals Hasselblad's count of five ED elements, and the model marks those five as inferred anomalous-dispersion
elements. [H1]

The source defines the absolute ratio as θgF = (ng − nF)/(nF − nC). Each element traces on its labelled glass's
catalog dispersion curve at the C, d and F lines, and the g-line index is set from the printed ratio:

$$n_g=n_F+\theta_{gF,\mathrm{source}}(n_F-n_C).$$

The traced Abbe number is therefore the catalog's, which differs from the one-decimal printed value by at most 0.05
(30.05 for E-FD15L where the patent prints 30.1), while the traced θgF is the patent's. The catalog d-line indices
differ from the printed ones by no more than 0.000006, and the prescription keeps the printed indices.

The table's ΔPgF is the printed θgF measured from the model's normal line, θgF = 0.6438 − 0.001682νd, at the
printed νd. The patent instead uses ΔθgF = θgF − (0.648285 − 0.00180123νd) for its conditional expressions; the two
must not be conflated. [P, ¶0130]

The catalog curves are current catalog data, not measured line indices of the production melts. Current catalogs
do not recover production supplier, molding process, batch variation, adhesive dispersion or the designer's
original glass catalog revision. No apochromatic performance claim follows from the coordinate matches.

## Focus Mechanism

The source describes internal focusing by translating the negative fifth group imageward from infinity toward a
close-object state. The focus pair's opposed menisci and the relationship between the fourth and fifth group powers
are discussed explicitly in the patent. [P, ¶0050, ¶0133, ¶0177–0183]

The manufacturer specifies internal stepping-motor focus, with minimum object-to-image distances of 0.4 and 0.5 m at the named endpoints and maximum magnifications of 0.125× and 0.25×.

Those product specifications do not determine the group travel or internal spacings for this example, and the
patent tabulates infinity spacings only. The model is therefore infinity-only: focus is not modeled, and the 0.4 m in
the data file is the manufacturer's wide-end minimum distance, recorded as metadata. The direction of travel is kept
as a description of the mechanism; the travel itself and close-focus performance are not available. [P, Table 1C;
H1]

## Aspherical Surfaces

The object surface of L4 and both surfaces of L12 and L13 are aspherical. The five model labels are 6A, 21A, 22A,
23A and 24A. The source equation uses the standard conic form:

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}
+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},\qquad c=1/R.
$$

The printed κ is used directly as K; all listed conics are zero, so the base profiles are spherical. Lengths and
radial height are in mm, and each coefficient Ap has units mm^(1−p). The prescription is
unscaled. No odd orders are published, and the schema's additional A14 slot is zero because that term is absent. [P,
¶0209; Table 1B]

| Surface | K           | A4           | A6           | A8           | A10          | A12         |
| ------- | ----------- | ------------ | ------------ | ------------ | ------------ | ----------- |
| 6A      | 0.00000E+00 | 1.65418E-06  | 2.35613E-09  | -6.17277E-12 | 1.77861E-14  | 0.00000E+00 |
| 21A     | 0.00000E+00 | -7.15927E-06 | -9.60538E-08 | 2.44811E-10  | -8.38030E-14 | 0.00000E+00 |
| 22A     | 0.00000E+00 | 1.63430E-05  | -6.55930E-08 | 2.59214E-10  | 2.75345E-13  | 0.00000E+00 |
| 23A     | 0.00000E+00 | -3.27630E-06 | 1.66759E-07  | -1.98459E-10 | -3.44918E-13 | 2.38114E-15 |
| 24A     | 0.00000E+00 | -9.87207E-06 | 1.59487E-07  | -1.15095E-11 | -1.39913E-12 | 5.93558E-15 |

At the adopted, figure-informed clear radii, the polynomial departures from the sphere of the same base radius are:

| Surface | Modeled SD (mm) | Polynomial departure (µm) | Total rim slope |
| ------- | --------------- | ------------------------- | --------------- |
| 6A      | 17.4            | +210.396                  | -0.099107       |
| 21A     | 11.6            | -287.091                  | +0.001073       |
| 22A     | 11.6            | +233.230                  | +0.301411       |
| 23A     | 12.2            | +380.570                  | +0.367200       |
| 24A     | 12.2            | +263.861                  | +0.557563       |

These departures are calculated at modeled apertures, not source-published dimensions. The positive departure on 6A
makes its signed sag less negative than the spherical base. The negative departure on 21A reduces its positive base
sag and brings the rim slope close to zero. The total departures on 22A, 23A and 24A are positive at their adopted
rims. A negative A4 alone does not predict the sign of the total high-order departure there.

Three readings of the scanned tables are stated because they are easy to misread: A8 of surface 23 is negative,
Table 1D's fourth lens begins at surface 6, and the index after surface 21 is 1.69350. With the values as printed,
the computed axial spherical aberration at F4.12 agrees with Figure 1B at all three stations (about −0.12, −0.07 and
+0.08 mm at its largest). [P, Tables 1A, 1B, 1D; Fig. 1B]

The three aspherical elements are labelled with moulding glasses (M-FCD500, L-LAL13 and K-VC181), which is
consistent with moulded aspheres. The patent states no manufacturing route, and none is asserted here. It does not
supply a finite resin or adhesive prescription for these optical surfaces.

## Chromatic Correction Strategy and Conditional Expressions

The conditional expressions identify where the patent places particular chromatic constraints: the positive member
of the second bonded pair, the negative member of that pair, the negative member of the third bonded pair, positive
lenses behind the stop, and the final positive lens. The palette combines differing Abbe numbers and
partial-dispersion coordinates across both signs of power. [P, ¶0134–0162]

This architecture supports the stated chromatic design rationale, but the table below is an evaluation of parameter
inequalities, not a polychromatic MTF result. All intervals are open; every listed value satisfies both the primary
and the most restrictive preferred interval. [P, Table 6; ¶0134–0190]

| Condition | Quantity     | Primary interval | Most restrictive preferred interval | Computed value                  |
| --------- | ------------ | ---------------- | ----------------------------------- | ------------------------------- |
| 1         | ΔθgF,2p      | (-0.002, 0.015)  | (0.002, 0.008)                      | 0.007728                        |
| 2         | νd,2n        | (50, 90)         | (60, 80)                            | 71.7                            |
| 3         | ΔθgF,3n      | (-0.01, 0.005)   | (-0.005, 0.001)                     | -0.002902                       |
| 4         | νd,p         | (50, 100)        | (60, 90)                            | 81.6, 81.6, 75.5                |
| 5         | ΔθgF,Lp      | (0.012, 0.04)    | (0.015, 0.035)                      | 0.015145                        |
| 6         | BFw / Yw     | (0.5, 1.0)       | (0.7, 0.75)                         | 0.729575                        |
| 7         | f3 / fGR,w   | (0.0, 1.0)       | (0.4, 0.65)                         | 0.597387                        |
| 8         | abs(f5 / f4) | (0.5, 2.0)       | (1.1, 1.3)                          | 1.237452                        |
| 9         | tGR / tG5    | (0.2, 1.0)       | (0.4, 0.8)                          | 0.601335                        |

Conditions 1, 3 and 5 are evaluated from the printed νd and θgF of L5, L9 and L16, and they round to the 0.0077,
−0.0029 and 0.0151 that Table 6 prints. With the catalog Abbe numbers the model traces (27.06, 35.33 and 23.96)
they would be 0.007653, −0.002843 and 0.015066, still inside every interval.

For the second condition, the element table has νd = 71.7 whereas Table 6 reports 71.72. Their published
precisions differ; no replacement of the source element value is made. The condition remains satisfied with the
table value. For the seventh condition, ¶0170 and Table 6 define the ratio f3/fGR,w; the malformed chained
expression in claim 8 is not adopted as a new optical constraint. [P, Tables 1A, 6; ¶0170; claim 8]

The physical BFw in the sixth condition is the distance from the last lens to the printed image plane, including
the camera plate. It is not the Gaussian back focal distance. Group cardinal positions in Table 1E use the group
datum; the third group's source datum is the stop, ahead of its first glass surface. Absolute system principal
points in Table 1C use the first lens vertex. Mixing those datums creates apparent discrepancies unrelated to an
optical change.

The patent associates the group-power ratio with coma and field curvature, the focus-pair power ratio with moving
size and focus-dependent aberration changes, and the rear/focus group-length ratio with field curvature, distortion
and focus variation. These remain source-attributed rationales. No individual aberration contribution has been
assigned solely from power sign or glass class. [P, ¶0172–0190]

The surface-by-surface d-line Petzval sum is 0.000896 mm⁻¹. A Petzval sum is a paraxial field-curvature quantity; it is not the full sagittal or tangential image-surface
result of the finite-aperture, distorted system. It therefore does not by itself establish a flat usable image
field or identify a particular field-flattening element.

## Model Scope and Limitations

### Printed states and reference planes

The model keeps the printed camera plate, 1.8 mm thick at nd = 1.51680, and the 1.0 mm of air behind it. The gap
from the last lens to the plate is the printed one; the plate is not removed or replaced by an air-equivalent
spacing, and the image plane is not moved. Units and asphere coefficients are as printed. [P, ¶0031; Table 1A]

| Quantity                                         | Wide       | Middle      | Long end    |
| ------------------------------------------------ | ---------- | ----------- | ----------- |
| Computed EFL (mm)                                | 36.046115  | 59.130334   | 96.995533   |
| Physical first-vertex/image track (mm)           | 150.4096   | 164.4458    | 189.9698    |
| Physical Gaussian BFD from surface 30 (mm)       | 20.133004  | 30.825930   | 36.169984   |
| Gaussian focus minus physical image plane (mm)   | +0.069704  | +0.036030   | -0.046516   |
| Entrance pupil from first vertex (mm)            | 37.644325  | 58.484852   | 90.093680   |
| Exit pupil relative to physical image plane (mm) | -87.114854 | -108.436465 | -162.634576 |
| Printed f-number                                 | 4.11984    | 4.11992     | 4.11983     |
| Iris radius for the printed f-number (mm)        | 8.355      | 10.054      | 12.183      |
| Model f-number, iris fixed at 12.18 mm           | 2.84       | 3.414       | 4.11983     |

The Gaussian focus offsets are nonzero even at the three printed stations. Their sign is Gaussian focus minus the
printed image-plane position, positive toward the image. They are separate from the larger error that zoom
interpolation introduces between stations, and the image plane is not shifted to remove them.

After converting to the same image-plane datum, the computed entrance-pupil distances ahead of the physical image plane are 112.765 and 99.876 mm at the endpoints; the manufacturer lists 111 and 95 mm. The computed-minus-manufacturer residuals are +1.765 and +4.876 mm.

The datum-normalized pupil discrepancy limits the production correlation. The manufacturer labels the pupil positions at the named wide and long zoom endpoints, in front of the image plane, but gives no focus-distance or iris condition in that pupil block. The infinity caption on its separate MTF page is not transferred to the pupil data. The computed comparison is paraxial at infinity focus; identical focus conditions are not assumed. Raw first-vertex pupil coordinates cannot
be compared directly with the manufacturer's distances ahead of the image plane. The two sources also need not
represent an identical physical prescription.

### Interpolated zoom and the fixed iris

Between the printed stations the linearly interpolated spacings move the Gaussian focus away from the image plane.
The largest offsets, on a zoom coordinate running from 0 (wide) through 0.5 (middle) to 1 (long), are:

| Interval    | Zoom coordinate | Gaussian focus offset (mm) | Computed EFL there (mm) |
| ----------- | --------------- | -------------------------- | ----------------------- |
| Wide–middle | 0.268           | -1.075                     | 46.46                   |
| Middle–long | 0.760           | -0.733                     | 76.19                   |

These offsets belong to the interpolation, not to the lens. The patent supplies no continuous cam and says the
lines joining the stations in its figure are schematic; no compensating refocus or fitted intermediate spacing is
added. [P, ¶0027]

No iris diameter is printed. The model holds the iris at 12.18 mm radius, the value that passes the printed
F4.11983 axial beam at the long end, at every zoom position. That radius gives f/2.84 at the wide station and
f/3.41 at the middle station; at the printed F4.12 the radii would be 8.36, 10.05 and 12.18 mm. The fixed iris is a
modeling choice that reproduces the marketed f/2.8–4. It is not source data, and the patent's aberration plots do
not cover apertures faster than F4.12.

### Printed field angles and rounding

The printed half-angles produce these chief-ray heights on the printed image plane:

| Station | Source half-angle (°) | Height on image plane (mm) | Residual from 27.5000 mm | Residual at the Gaussian plane (mm) |
| ------- | --------------------- | -------------------------- | ------------------------ | ----------------------------------- |
| Wide    | 38.1948               | 27.4812                    | -0.0188                  | +0.0002                             |
| Middle  | 24.9661               | 27.4920                    | -0.0080                  | -0.0000                             |
| Long    | 15.7173               | 27.5080                    | +0.0080                  | +0.0015                             |

The differences from the printed 27.5000 mm, up to 0.019 mm, are larger than the rounding of that value. At the
Gaussian image plane of each station the same rays land within 0.002 mm of 27.5 mm, which suggests the printed
half-angles were computed there; the patent does not say so, and the model keeps both the printed angles and the
printed image plane.

The other printed first-order summaries are consistent with the prescription. If every printed radius, thickness
and index is allowed to vary within its own rounding, one set of values reproduces all 77 of them (focal lengths,
total lengths, pupil and principal-point positions, element and group data) to their printed precision. The same
search did not find a set that also reproduces the three image heights, which does not prove that none exists. This
is a consistency check only: every value in the model is the printed one.

### Clear apertures and corner illumination

No surface semi-diameters or iris diameter are printed. The clear radii are estimated from the ends of the optical
curves in Figure 1A, not from the wider mechanical flanges, with the drawing scaled by the printed distance from
the first vertex to the front of the cover plate; the schematic drawing limits their precision. The axial beam of
the fixed-iris model passes every rim at all three stations. The tightest rim leaves 0.64 mm at surface 12 at the
wide station, and 0.37 and 0.15 mm at surface 18 at the middle and long stations.

For surfaces 21A/22A the figure gives a semi-extent of about 11.99 mm, with a plausible range of 11.34–12.64 mm.
The adopted radius is 11.6 mm; the slope of 21A first returns to zero at 11.647 mm. Thus 11.6 mm lies inside the
drawn rim range and below the turnover of the polynomial, which a 12.1 mm radius would cross.

Each face follows the end of its own drawn curve. The rear face of L3 stops at 18.0 mm, where its wider flange
begins, and the concave front face of L14 stops at 13.2 mm, at the flat land the figure draws below its 14.5 mm rim.
In each cemented pair the front element and the joint share one rim radius. The rear faces of L5 (15.0 mm) and L10
(11.3 mm) stop lower, where the figure bevels the rear corner of the pair. The diagram joins unequal face heights
with a straight edge, so these lands and flanges appear as chamfers. That the geometry fits is not evidence that a
diameter is the production one.

Across the interpolated zoom range no two facing surfaces come closer than 0.3 mm, the smallest axial air gap, and
the thinnest glass edge is 0.69 mm (L2 at its 30.3 mm rim).

At the 27.5 mm image corner the inferred rims, not the iris, limit the beam at the wide and middle stations. In the
meridional section about 8 mm of the stop diameter is filled at the wide station and about 12 mm at the middle one,
whether the iris radius is the fixed 12.18 mm or the smaller F4.12 value, so the wider model aperture adds light on
axis and in the mid-field but not at the corner. Because the rims come from a schematic figure, corner illumination
in the model is indicative only. No MTF, bokeh or transmission result for the production lens follows from it.

## Sources and References

[P] US 2026/0036794 A1, _Imaging optical system, and image capture device and camera system including the same_,
published 2026-02-05. Original publication PDF: page 1 bibliography; page 2 Figure 1A; pages 15–16 (printed 2–3)
¶0027–0050; pages 20–24 (printed 7–11) ¶0126–0190; pages 25–26 (printed 12–13) ¶0209 and Tables 1A–1F; page 31
(printed 18) Table 6; page 32 claim 8. [Publication text and document
identity](https://patents.google.com/patent/US20260036794A1/en). Signs and digits were read from the page images
of the original publication.

[H1] Hasselblad, _XCD 2,8–4/35–100E Lens Datasheet_, English printed page 1 (PDF page 2), specifications and
optical diagrams. [Official
datasheet](https://cdn.hasselblad.com/f/77891/x/50973fbeac/xcd-35-100e-datasheet-multi-language.pdf).

[H2] Hasselblad, _XCD 35–100E_ product page and dated product announcement, 2025-08-26. [Official product
page](https://www.hasselblad.com/x-system/lenses/xcd-35-100e/) and [dated official
release](https://www.hasselblad.com/zh-hant/press/press-releases/2025/hasselblad-introduces-the-x2d-ii-100c-and-xcd-35-100e/).

[H3] Hasselblad, _X2D II 100C Datasheet_, English printed page 1 (PDF page 2), sensor format and XCD system
compatibility. [Official camera
datasheet](https://cdn.hasselblad.com/f/77891/x/a5e78b1d54/x2d-ii-100c-datasheet-multi-language.pdf).

[C1] OHARA optical-glass catalog, 2026-07-01 AGF, with the separately retained S- and L-family property workbooks.
[Official catalog archive](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip).

[C2] HOYA optical-glass catalog, 2026-07-07 AGF including obsolete materials, cross-checked against the 2026-06-01
workbook. [Official AGF](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

[C3] SCHOTT, preferred and special optical glasses, June 2025-B catalog. [Official catalog
download](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true).

[C4] HIKARI, _All Catalog Data_ optical-glass workbook. [Official
workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).

[C5] CDGM, original official Zemax catalog and property workbook. [Official Zemax
download](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX).

[C6] SUMITA, original official optical-glass Zemax data, retrieved 2026-10-10. [Official catalog download
endpoint](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php). The named
material records and coefficient conventions, rather than landing-page summaries, are the basis of the spectral
comparisons. Catalog snapshots were checked in October 2026; their current equivalence does not establish the
historical production melt.
