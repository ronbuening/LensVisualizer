## Patent Reference and Design Identification

**Patent:** US 2018/0188508 A1 (granted as US 10,444,479 B2, October 15, 2019)
**Application Number:** US 15/854,280
**Filed:** December 26, 2017 (priority JP 2017-000496, January 5, 2017)
**Published:** July 5, 2018
**Inventors:** Takuya Tanaka, Masaru Yonezawa
**Assignee:** Fujifilm Corporation
**Title:** Zoom Lens and Imaging Apparatus
**Example details:** Tables 16–18 (lens data, specification, zoom spacings), Fig. 6 (section), Fig. 18 (aberrations).

The patent describes a five-group zoom for movie, broadcast, digital, video and surveillance cameras (¶0002) whose first and fifth groups stay fixed while the second, third and fourth groups move toward the image when zooming from wide to tele. Example 6 is its only embodiment that matches the FUJINON MKX18-55mm T2.9 cine zoom:

1. **Construction.** Example 6 has 22 elements in 17 air-separated groups, the count Fujifilm publishes for the MKX18-55mm.
2. **Special glass.** Fujifilm's construction diagram marks six Super ED and two ED elements. Example 6 has exactly six νd 94.66 elements (L14, L21, L33, L41, L52, L57) at the Super ED positions and its νd 74.70 and 68.62 elements (L16, L32) at the ED positions.
3. **Focal length and aperture.** f = 18.592–55.217 mm at a constant F2.75; the product is an 18–55 mm constant T2.9 zoom, and Fujifilm's sheet for the E-mount MK18-55mm gives the maximum aperture as F2.75 (T2.9).
4. **Focus.** The patent focuses with a front-group element (G1b); moving it reaches the product's 0.85 m minimum focus distance with 5.35 mm of travel.
5. **Size and timing.** The 221.7 mm vertex-to-image length less the 17.7 mm X-mount flange distance leaves about 204 mm, against the 206.6 mm barrel length Fujifilm gives from the flange. The Japanese priority date (January 2017) shortly precedes the E-mount MK18-55mm's 2017 release; the X-mount MKX18-55mm was announced on February 15, 2018 and released in June 2018.

The other examples do not fit: Examples 1, 2 and 5 have 23 elements, Examples 7–12 have 20, Example 3 covers 15–30 mm and Example 4 covers 19.6–63.6 mm. The correlation is not manufacturer-confirmed, and the patent cannot separate the MK and MKX versions, which Fujifilm describes as sharing one design concept with the X-mount flange distance built into the MKX optics. Radii, spacings and nd/νd are used as printed, without scaling.

## Optical Architecture

Example 6 is a positive-positive-negative-negative-positive zoom. G1 (f = +52.6 mm, seven elements) and G5 (f = +39.3 mm, nine elements behind the stop) stay fixed. G2 is a single weak positive element (L21, f = +299.9 mm), G3 is the four-element variator (f = −48.0 mm) and G4 is a single negative meniscus (L41, f = −79.9 mm). From wide to tele, G2 moves 19.1 mm, G3 36.4 mm and G4 24.2 mm toward the image. G1 itself is split into G1a (L11–L13, f = −40.9 mm), the focusing element G1b (L14, f = +292.8 mm) and G1c (L15–L17, f = +57.8 mm) (¶0078, ¶0090). The stop (surface 25) sits at the front of the fixed G5. Because G5 and the image plane are fixed, G1–G4 always image an infinitely distant object at the same point, so a fixed iris there gives the same F2.75 at every focal length. Five doublets are cemented at surfaces 10, 21, 29, 34 and 37. Unlike Example 5, Example 6 lists no plane-parallel optical member (PP) for filters or cover glass; the 24.783 mm final air reaches the image.

The three printed infinity stations are kept exactly:

| Station | f (mm) | FNo. | 2ω | D13 | D15 | D22 | D24 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Wide | 18.592 | 2.75 | 78.6° | 1.726 | 1.184 | 17.241 | 25.173 |
| Middle | 37.183 | 2.75 | 41.2° | 10.015 | 17.312 | 4.375 | 13.622 |
| Tele | 55.217 | 2.75 | 28.4° | 20.857 | 18.458 | 5.041 | 0.967 |

The printed tele spacings sum 0.001 mm shorter than the wide and middle ones (rounding); they are left as printed. Between the printed stations the model adds 30 solved cam points that are not in the patent: the four zoom gaps are solved so that the image stays on the fixed image plane, and the zoom control interpolates linearly between them. The largest focus error between points is about 6 µm, small against the depth of focus at F2.75. This is not Fujifilm's zoom cam.

## Element-by-Element Analysis

Focal lengths below are for each element alone in air.

### G1a — L11, L12, L13 (fixed, negative)

**L11 — Negative Meniscus.** nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA). f = −65.1 mm. The large front meniscus, convex to the object, begins the negative power that gives the 78.6° wide-end field.

**L12 — Biconcave Negative.** nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA). f = −68.2 mm. The second negative lens of G1a. The patent places two negative lenses here so the chief ray reaches G1b at a smaller angle, which reduces astigmatism behind it (¶0091).

**L13 — Positive Meniscus.** nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA). f = +170.9 mm. A high-dispersion positive meniscus, convex to the object, closing G1a (f = −40.9 mm) and balancing the colour of the two negative lenses.

### G1b — L14 (focus)

**L14 — Positive Meniscus.** nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) — Super ED. f = +292.8 mm. The only element that moves for focusing. Its weak power (f1b/f1 = 5.57) is the compromise the patent describes between focus travel and aberration change during focusing (¶0082).

### G1c — L15, L16, L17 (fixed, positive)

**L15 + L16 — Cemented doublet C1.** L15: nd = 1.68893, νd = 31.07, S-TIM28 (OHARA), negative meniscus, f = −86.6 mm. L16: nd = 1.53775, νd = 74.70, S-FPM3 (OHARA) — ED, biconvex, f = +53.0 mm. The doublet (f = +126.5 mm) pairs an ED crown with a flint, the usual arrangement for axial colour correction in a front group.

**L17 — Positive Meniscus.** nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). f = +104.8 mm. Completes G1c (f = +57.8 mm) and the fixed first group.

### G2 — L21 (zoom)

**L21 — Biconvex Positive.** nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) — Super ED. f = +299.9 mm. A weak Super ED element that moves 19.1 mm toward the image from wide to tele.

### G3 — L31 to L34 (variator)

**L31 — Negative Meniscus.** nd = 2.00069, νd = 25.46. Glass: TAFD40 (HOYA). f = −48.1 mm. The strongest negative lens of the variator, convex to the object.

**L32 — Plano-Concave Negative.** nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) — ED. f = −70.6 mm. Concave to the object and flat on the image side.

**L33 + L34 — Cemented doublet C2.** L33: nd = 1.43875, νd = 94.66, S-FPL55 (OHARA) — Super ED, plano-concave, f = −94.4 mm. L34: nd = 1.80809, νd = 22.76, S-NPH1 (OHARA), biconvex, f = +43.1 mm. A positive doublet (f = +78.6 mm) inside the negative variator, pairing a Super ED negative with a high-dispersion positive.

### G4 — L41 (zoom)

**L41 — Negative Meniscus.** nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA) — Super ED. f = −79.9 mm. A single meniscus concave to the object that moves 24.2 mm toward the image from wide to tele.

### G5 — L51 to L59 (fixed relay behind the stop)

**L51 — Biconvex Positive.** nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA). f = +78.6 mm. The first element behind the stop.

**L52 + L53 — Cemented doublet C3.** L52: nd = 1.43875, νd = 94.66, S-FPL55 (OHARA) — Super ED, biconvex, f = +35.3 mm. L53: nd = 1.95375, νd = 32.32, S-LAH98 (OHARA), biconcave, f = −30.5 mm. A nearly afocal doublet (f = −1179 mm) close to the stop; with almost no net power, its work is mainly chromatic.

**L54 — Biconvex Positive.** nd = 1.80519, νd = 25.47. Glass: FD60 (HOYA). f = +46.1 mm.

**L55 + L56 — Cemented doublet C4.** L55: nd = 1.95375, νd = 32.32, S-LAH98 (OHARA), negative meniscus, f = −37.9 mm. L56: nd = 1.69680, νd = 55.53, S-LAL14 (OHARA), positive meniscus, f = +26.3 mm. Both are convex to the object; the doublet is positive (f = +97.3 mm).

**L57 + L58 — Cemented doublet C5.** L57: nd = 1.43875, νd = 94.66, S-FPL55 (OHARA) — Super ED, biconvex, f = +39.1 mm. L58: nd = 1.85478, νd = 24.80, S-NBH56 (OHARA), biconcave, f = −15.5 mm. The doublet is negative (f = −26.5 mm); a 13.5 mm air space separates it from L59.

**L59 — Biconvex Positive.** nd = 1.80610, νd = 40.93. Glass: S-LAH53 (OHARA). f = +76.9 mm. The last element, 24.8 mm in front of the image.

## Glass Identification

The patent prints d-line nd and νd only. Every pair matches a current catalog row exactly (|Δnd| ≤ 1e-5, |Δνd| ≤ 0.01); the names below are those catalog equivalents and do not establish Fujifilm's supplier. θgF values are catalog-derived; ΔPgF is the deviation from the normal line θgF = 0.6438 − 0.001682 νd.

| Glass | nd | νd | θgF | Elements | Role |
| --- | --- | --- | --- | --- | --- |
| S-FPL55 (OHARA) | 1.43875 | 94.66 | 0.5340 (ΔPgF +0.049) | L14, L21, L33, L41, L52, L57 | Super ED crown |
| S-FPM3 (OHARA) | 1.53775 | 74.70 | 0.5393 (ΔPgF +0.021) | L16 | ED crown |
| FCD515 (HOYA) | 1.59282 | 68.62 | 0.5441 (ΔPgF +0.016) | L32 | ED crown |
| S-LAL14 (OHARA) | 1.69680 | 55.53 | 0.5434 | L56 | Lanthanum crown |
| S-LAH59 (OHARA) | 1.81600 | 46.62 | 0.5568 | L17 | Lanthanum flint |
| S-LAH53 (OHARA) | 1.80610 | 40.93 | 0.5702 | L59 | Lanthanum flint |
| TAFD35 (HOYA) | 1.91082 | 35.25 | 0.5822 | L11, L12 | High-index front negatives |
| S-LAH98 (OHARA) | 1.95375 | 32.32 | 0.5905 | L53, L55 | High-index negatives |
| S-TIM28 (OHARA) | 1.68893 | 31.07 | 0.6004 | L15 | Flint partner in C1 |
| TAFD40 (HOYA) | 2.00069 | 25.46 | 0.6136 | L31 | Very high-index variator negative |
| FD60 (HOYA) | 1.80519 | 25.47 | 0.6157 | L54 | Dense flint |
| S-NBH56 (OHARA) | 1.85478 | 24.80 | 0.6123 | L58 | Dense flint in C5 |
| S-TIH53 (OHARA) | 1.84666 | 23.78 | 0.6205 | L51 | Dense flint |
| S-NPH1 (OHARA) | 1.80809 | 22.76 | 0.6307 | L13, L34 | High-dispersion flint |

The six Super ED positions are spread over every group except G1a: one in the focusing element, one in each moving zoom group (G2, G3, G4) and two in the cemented doublets of the relay. Low-dispersion glass in each moving group would help hold colour correction while zooming and focusing; this is an interpretation, as the patent does not discuss glass choice.

## Focus Mechanism

Inner focus by G1b (L14 alone). The patent states that G1a stays fixed and G1b moves during focusing (¶0078), but tabulates infinity states only. In the model L14 moves toward the image for closer focus; D6 grows, D8 shrinks by the same amount, and every other group, the stop and the image plane stay fixed. The travel was solved from the prescription so that the close end focuses at the product's 0.85 m minimum focus distance (object to image); it is a reconstruction, not Fujifilm's focus cam:

| Station | L14 travel | D6 (∞ → 0.85 m) | D8 (∞ → 0.85 m) |
| --- | --- | --- | --- |
| Wide | 5.346 mm | 7.691 → 13.037 | 6.601 → 1.255 |
| Middle | 5.347 mm | 7.691 → 13.038 | 6.601 → 1.254 |
| Tele | 5.349 mm | 7.691 → 13.040 | 6.601 → 1.252 |

Because the focus element sits in the fixed first group, the travel barely changes with focal length, which suits a cine zoom that must hold focus while zooming. The product's wide-end macro mode (0.38 m) is not modeled.

## Conditional Expressions

Table 37 of the patent lists Example 6's values; the model's paraxial group focal lengths reproduce each one.

| Expression | Range | Example 6 |
| --- | --- | --- |
| (1) pr1/f1 | 0.8–2.6 | 1.07 |
| (2) f1/(fw · tan ωw) | 2–5.8 | 3.46 |
| (3) f1/f2 | 0–0.8 | 0.18 |
| (4) f1c/f1a | −3.4 to −0.5 | −1.41 |
| (5) f1b/f1 | 3.1–8 | 5.57 |
| (6) f1b/f1c | 2.4–8 | 5.06 |
| (7) f1c/f1 | 0.5–1.4 | 1.10 |

Here pr1 is the distance from the last surface of G1 to its image-side principal point, and ωw the half angle of view at the wide end.

## Model Scope and Limitations

- **All spherical.** Example 6 has no aspherical surfaces.
- **Stop and iris.** The patent places the stop at surface 25 but gives no diameter. The iris radius is derived from the design F2.75 at each zoom position; T2.9 is the product's transmission rating, not a geometric aperture. The nine blades and the F22 smallest stop are product data.
- **Clear apertures.** Semi-diameters are measured from the Fig. 6 element outlines within edge-thickness and air-gap limits, not taken from factory dimensions. The front surface is sized so the wide-end chief ray to the printed 78.6° field passes. As in the figure, L11 and L41 have square edges, with flat lands outside the clear aperture of their concave faces, and the concave front face of L32 nests closely inside the concave rear face of L31 at the rim.
- **Zoom and focus control.** Only the three tabulated infinity stations come from the patent; the intermediate zoom points and the focus travel are solved from the prescription.

## Sources

- [US 2018/0188508 A1 (Google Patents)](https://patents.google.com/patent/US20180188508A1/en); granted as [US 10,444,479 B2](https://patents.google.com/patent/US10444479B2/en).
- [Fujifilm — FUJINON MKX18-55mmT2.9 specifications](https://www.fujifilm-x.com/en-us/products/lenses/mkx18-55mmt29/specifications/) (22 elements / 17 groups, 6 Super ED + 2 ED, F2.8–F22, 0.85 m, 0.38 m macro, 206.6 mm from the flange) and its [construction diagram](https://fujifilm-x.b-cdn.net/wp-content/uploads/2025/09/mkx18-55mmt29_cross.webp).
- [Fujifilm — FUJINON MK series](https://www.fujifilm.com/cl/en/business/cine-and-broadcast/cinelens/mk) (MK18-55mm T2.9, E-mount: F2.75 (T2.9), 0.85 m).
- [Photography Blog — MKX18-55mm and MKX50-135mm announcement](https://www.photographyblog.com/news/fujifilm_mkx_18_55mm_t2_9_and_mkx_50_135mm_t2_9_cinema_lenses_for_x_series_mirrorless_cameras) (February 15, 2018; availability June 2018).
- [Fujifilm X Complete Guide](https://dl.fujifilm-x.com/global/products/pdf/x-complete_guide_01.pdf).
