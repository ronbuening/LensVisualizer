# NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8 G — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2011/0176215 A1\
**Application Number:** 13/008,975\
**Priority:** January 20, 2010 (JP 2010-009580) and December 7, 2010 (JP 2010-272975)\
**Filed:** January 19, 2011\
**Published:** July 21, 2011\
**Inventors:** Motohisa Mouri and Issei Tanaka\
**Assignee:** Nikon Corporation\
**Title:** _Imaging Lens, Optical Apparatus Equipped Therewith, and Method for Manufacturing Imaging Lens_\
**Example details:** Table 1, Figs. 1–3 and ¶¶0088–0101. The 40 mm prescription is used at its published scale.

Example 1 is a close published counterpart to Nikon's 2011 DX Micro-NIKKOR. Several details support the identification.

1. **Construction.** Nikon specifies nine elements in seven groups. Its section shows two cemented doublets ahead of the iris followed by five singlets, just as in Fig. 1 of the patent. Example 1 is all spherical. Nikon's product diagram marks no aspherical, ED or Super ED elements.[^nikon-spec][^nikon-section][^nikon-story]
2. **Focal length and aperture.** Both sources give 40 mm. The patent's infinity design aperture is f/2.887, while the product is rated f/2.8. At life size the patent prescription gives a paraxial working aperture of f/4.217, close to the f/4.2 Nikon reports.[^nikon-spec][^nikon-story]
3. **Close-range correction.** The first two groups move independently and the third remains fixed. Example 1's front group moves 30.053 mm to 1:1, in line with Nikon's account of just over 30 mm. The patent's closest row gives 160.777 mm from object to image, compared with Nikon's 163 mm from the focal plane. Nikon credits co-inventor Motohisa Mouri with designing the production lens.[^nikon-spec][^nikon-story]

An overlay registered at the first and last powered vertices shows close agreement in the order and general shape of the glass. Measured in the original Nikon image's pixels, Example 1's second-doublet seam and exit face lie about 7 and 8 pixels farther toward the image than Nikon's corresponding surfaces. The production drawing's focus state is unstated. The profile differences and the f/2.887 versus f/2.8 aperture difference leave the exact factory prescription unverified.[^nikon-story]

Nikon announced this F-mount DX lens in July 2011 and released it that August. Nikon specifies a 38°50′ angle of view, a 52 mm filter thread and a seven-blade rounded diaphragm. The patent's infinity half-field is 20.479° at a 15.00 mm image height. Nikon's angle of view and the patent field describe their respective frames.[^nikon-release][^nikon-spec][^nikon-story]

## Optical Architecture

The three optical groups have positive, positive and negative power. At the front, the negative G1F doublet and positive G1R doublet form a retrofocus arrangement within the focusing optics. The rear negative group helps set the back focus and correct field curvature (¶¶0035–0039, 0042–0044, 0088–0091). Nikon describes a similar retrofocus-derived arrangement in the production lens. For the complete Example 1 system, the computed infinity back focus of 39.825 mm is slightly shorter than the 40.020 mm focal length.[^nikon-story]

| Assembly | Glass construction                                 | Paraxial focal length in air |
| -------- | -------------------------------------------------- | ---------------------------: |
| G1F      | Front cemented doublet                             |                    −57.73 mm |
| G1R      | Rear cemented doublet                              |                    +38.64 mm |
| G1       | Both doublets, 12.50 mm apart on axis              |                    +76.90 mm |
| G2       | Negative singlet followed by two positive singlets |                    +51.03 mm |
| G3       | Negative meniscus followed by a positive singlet   |                   −333.64 mm |

The iris is surface 7, in air 2.50 mm behind G1. The patent gives its location and design f-number. Those values imply a 7.548 mm stop radius and a 6.931 mm paraxial entrance-pupil radius at infinity. The same physical iris moves with G1. After the last spherical surface the prescription ends with 39.818 mm of air to the image. This is the more precise back-focus value in Table 1 and gives its printed infinity track of 92.518 mm.

The glass rims are estimated from the patent section. The exit face of the first doublet has a spherical cap surrounded by the flat land shown in Fig. 1. The cap clears the open beam across the focus range. Off-axis bundles still lose rays at the glass edges. At the patent's 20.479° infinity half-field, the chief ray reaches about 14.99 mm image height and about 53% of the sampled open-iris bundle reaches the image. That fraction describes geometric vignetting in the model, with no account of glass absorption or reflection losses.

## Element-by-Element Analysis

The focal lengths below are for the individual thick elements in air. The shared interfaces of each doublet contribute to the power of the assembled pair.

### L11 — Biconvex positive

**nd = 1.743997, νd = 44.79. Glass: S-LAM2 (Ohara equivalent). f = +45.34 mm.**

L11 is the positive front element of G1F. Its shallow, cemented rear face joins L12. The two elements together form the first negative assembly. The patent connects that front negative power with preserving working distance as G1 moves toward the object (¶0089).

### L12 — Biconcave negative

**nd = 1.516330, νd = 64.14. Glass: S-BSL7 (Ohara equivalent). f = −23.92 mm.**

L12 is the stronger element in the front doublet. Most of its curvature is on the image side, with a 13.1290 mm rear radius compared with the 216.2230 mm magnitude at the seam. The patent associates this strongly curved exit with control of coma and distortion as the lens focuses closer (¶0089).

### L13 — Biconvex positive

**nd = 1.699998, νd = 48.08. Glass: S-LAM51 (Ohara equivalent). f = +15.67 mm.**

L13 supplies the positive power in G1R. Its front surface receives the beam after the 12.50 mm separation between the doublets. Its steep rear surface of radius −14.9811 mm is shared with L14.

### L14 — Biconcave negative

**nd = 1.581439, νd = 40.75. Glass: S-TIL25 (Ohara equivalent). f = −24.34 mm.**

L14 is the higher-dispersion negative partner of L13. Its weakly curved exit lies immediately ahead of the iris and leaves the rear doublet with net positive power (¶¶0089, 0092).

### L21 — Biconcave negative

**nd = 1.740769, νd = 27.79. Glass: S-TIH13 (Ohara equivalent). f = −24.95 mm.**

L21 is the highest-dispersion glass in the prescription. It reduces the convergence of the bundle arriving at G2. Air on both sides of the element gives it independent refracting surfaces (¶0090).

### L22 — Positive meniscus, convex to image

**nd = 1.651597, νd = 58.55. Glass: S-LAL7 (Ohara equivalent). f = +68.41 mm.**

L22 restores convergence. The image-facing convex surface is stronger than its object-side concavity. In Fig. 3 and ¶0101 that rear surface is one of the two interfaces on the illustrated reflection path.

### L23 — Biconvex positive

**nd = 1.740999, νd = 52.64. Glass: S-LAL61 (Ohara equivalent). f = +29.30 mm.**

L23 carries the stronger of G2's two positive standalone powers. Together with L22 it shapes the converging beam after L21. The patent attributes part of the spherical-aberration and coma correction to this negative–positive–positive sequence (¶0090).

### L31 — Negative meniscus, concave to image

**nd = 1.772499, νd = 49.60. Glass: S-LAH66 (Ohara equivalent). f = −58.64 mm.**

L31 is the fixed group's negative element. The steep image-facing concavity lies near L32, with a 1.00 mm air gap on axis. The two-element rear group helps maintain back clearance and correct field curvature (¶0091).

### L32 — Biconvex positive

**nd = 1.548141, νd = 45.78. Glass: S-TIL1 (Ohara equivalent). f = +73.38 mm.**

L32 offsets most of L31's standalone negative power and leaves G3 weakly negative as an assembly. The convex rear face is the final glass interface in the prescription.

## Glass Identification and Selection

Table 1 defines the helium d line at 587.6 nm (¶0094). Each published index and Abbe number has an Ohara catalog equivalent at the printed precision. The patent supplies no glass trade names, melt data or individual C-, F- or g-line indices. The catalog curves provide estimates of wavelength-dependent behavior. The production supplier and glass melts remain unverified.[^ohara]

| Element |    $n_d$ | $\nu_d$ | Catalog equivalent and glass type   |
| ------- | -------: | ------: | ----------------------------------- |
| L11     | 1.743997 |   44.79 | S-LAM2, lanthanum glass             |
| L12     | 1.516330 |   64.14 | S-BSL7, borosilicate crown          |
| L13     | 1.699998 |   48.08 | S-LAM51, lanthanum glass            |
| L14     | 1.581439 |   40.75 | S-TIL25, light flint                |
| L21     | 1.740769 |   27.79 | S-TIH13, high-dispersion flint      |
| L22     | 1.651597 |   58.55 | S-LAL7, lanthanum crown             |
| L23     | 1.740999 |   52.64 | S-LAL61, lanthanum crown            |
| L31     | 1.772499 |   49.60 | S-LAH66, high-index lanthanum glass |
| L32     | 1.548141 |   45.78 | S-TIL1, light flint                 |

The two front doublets pair glasses with different dispersions in opposite orders. The front negative element L12 has a higher Abbe number than its positive partner. The rear doublet puts the lower Abbe number on its negative element, L14. Behind the stop, the high-dispersion negative L21 faces two positive glasses with considerably higher Abbe numbers. Figures 2A and 2B show the resulting longitudinal correction at the d and g lines.

## Focus Mechanism

This is a fixed-focal-length lens with two independently moving focus groups. G1 and the iris move toward the subject by 14.522 mm at 1:2 and 30.053 mm at 1:1. G2 moves in the same direction by 15.034 mm and 30.000 mm. The iris-to-G2 separation first decreases and then increases. G3 and the image plane stay fixed (Fig. 1, ¶0088 and Table 1).

| Table 1 value or derived distance          |  Infinity |        1:2 |        1:1 |
| ------------------------------------------ | --------: | ---------: | ---------: |
| Printed magnification                      |         0 |      −0.5× |      −1.0× |
| Printed object to first vertex, $d_0$      |         ∞ |  78.087 mm |  38.206 mm |
| Stop to G2, $d_7$                          |  7.200 mm |   6.688 mm |   7.253 mm |
| G2 to G3, $d_{13}$                         |  1.200 mm |  16.234 mm |  31.200 mm |
| First vertex to image                      | 92.518 mm | 107.040 mm | 122.571 mm |
| Object to image from the printed distances |         ∞ | 185.127 mm | 160.777 mm |

All three published states use their tabulated spacings. Focus positions between those states use piecewise-linear interpolation of the two gaps. The model comes to paraxial focus at about 185.290 mm and 160.879 mm object-to-image with the image plane fixed at the printed back focus. Nikon describes approximately 190 mm at 1:2 and specifies 163 mm at 1:1 for the production lens. Nikon's roughly 35 mm at 1:1 is measured from the front of the production barrel. The patent's 38.206 mm is measured from the first glass vertex. The production lens uses Silent Wave Motor autofocus and offers manual override.[^nikon-story][^nikon-spec]

## Conditional Expressions

The patent relates the group powers, front-doublet spacing and focus travel to seven bounds (¶¶0038–0052 and 0067–0081). Here $f$ is the infinity EFL, $f_{1F}$ and $f_{1R}$ are the powers expressed as focal lengths of the two front doublets, $f_{1Fn}$ is the focal length of L12, and $X_1$ and $X_2$ are the respective travels of G1 and G2 to 1:1. The quantities from the printed prescription satisfy all seven bounds.

| Quantity         | Table 1 | Computed |
| ---------------- | ------: | -------: |
| $-f_{1F}/f_{1R}$ |    1.49 |    1.494 |
| $f_{1R}/f$       |   0.966 |    0.965 |
| $-f_3/f_1$       |    4.38 |    4.339 |
| $d_{FR}/f$       |   0.313 |    0.312 |
| $-f_{1Fn}/f$     |    0.60 |    0.598 |
| $X_1/f$          |   0.751 |    0.751 |
| $X_2/f$          |   0.750 |    0.750 |

The printed 4.38 for $-f_3/f_1$ is not reproduced by the printed prescription: rounding at the displayed precision allows about 4.31 to 4.37. Both values satisfy the stated range, and the prescription is kept as printed.

## First-Order Performance and Aberration Plots

With the object at the published position for each state, the calculated paraxial image distances are 39.825, 39.859 and 39.920 mm behind the last surface. They lie 0.007, 0.041 and 0.102 mm behind the fixed image plane specified by Table 1. The calculated finite image magnifications at their paraxial image positions are −0.5006× and −1.0022×. The infinity focal length agrees with the patent's 40 mm at its stated precision.

| Computed quantity         |  Infinity |       1:2 |       1:1 |
| ------------------------- | --------: | --------: | --------: |
| Effective focal length    | 40.020 mm | 37.882 mm | 36.271 mm |
| Paraxial working f-number |     2.887 |     3.547 |     4.217 |

The infinity plot in Fig. 2A is labeled f/2.87, compared with f/2.887 in Table 1. Fig. 2B instead labels the closest state with object-side NA 0.11. Exact tracing to the same inferred iris gives an object-side NA of 0.115 at that state. The d-line marginal focus bends toward the lens in both plots and the model shows the same trend. The g-line curve lies near d around the axis at infinity and separates toward the lens at 1:1. This agrees with the change in the plotted longitudinal color. The curves represent the optical design at its published states, with the model's rim shapes and color behavior subject to the aperture and glass estimates above.

## Sources

- [US 2011/0176215 A1](https://patents.google.com/patent/US20110176215A1/en) and [publication PDF](https://patentimages.storage.googleapis.com/cb/14/1b/1cf1db8be7b0b1/US20110176215A1.pdf). Table 1 and Figs. 1–3 cover the modeled prescription, movement, aberrations and illustrated reflection path.

[^nikon-spec]: Nikon, [AF-S DX Micro NIKKOR 40mm f/2.8G specifications](https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/micro/af-s_dx_micro40mmf_28g/).

[^nikon-section]: Nikon, [product construction drawing](https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/micro/af-s_dx_micro40mmf_28g/img/pic_004.jpg).

[^nikon-story]: Kouichi Ohshita, Nikon, [_NIKKOR — The Thousand and One Nights_, No. 88](https://imaging.nikon.com/imaging/information/story/0088/index.html), including the production section in Fig. 1.

[^nikon-release]: Nikon, [July 12, 2011 Japanese launch announcement](https://www.jp.nikon.com/company/news/2011/0712_nikkor_01/).

[^ohara]: Ohara, [Optical Glass Catalog](https://oharacorp.com/glass-catalog/) and [older glass catalog and equivalence table](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf).
