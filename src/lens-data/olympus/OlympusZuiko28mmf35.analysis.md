## Patent Reference and Design Identification

**Patent:** DE 2205380 A1 (Federal Republic of Germany)\
**Application Number:** P 22 05 380.1-51\
**Filed:** 4 February 1972\
**Published:** 16 August 1973\
**Inventor:** Nobuo Yamashita\
**Applicant:** Olympus Optical Co., Ltd.\
**Title:** _Linsensystem für eine Weitwinkelkamera mit Retrofokus-Objektiv_\
**Embodiment analyzed:** Ausführungsform 3 (Example 3, Table V)

Example 3 is the strongest known patent match for the Olympus OM-System G.Zuiko Auto-W 28mm f/3.5, but the identification remains an attribution rather than an explicit statement in the patent. The match rests on convergent evidence:

1. The patent example is a seven-element, seven-group, all-spherical retrofocus lens at $F/3.5$; Olympus's own lens brochure specifies the production 28mm f/3.5 as 7 elements in 7 groups at f/3.5.
2. Uniformly scaling the patent's $f=100$ prescription by $0.28$ gives a computed effective focal length of $28.0072$ mm.
3. The patent specifies coverage to 76° and plots Example 3 to a 38° half-field; Olympus specifies a 75° production angle of view.
4. The patent seeks a back focal distance of about $1.35f$. The independently traced Example 3 gives $BFL/EFL=1.3390$, establishing a genuine retrofocus layout suitable for an SLR.
5. Example 3 alone satisfies the patent's additional compactness conditions (5) and (6). The contemporary Olympus brochure describes the 28mm f/3.5 as the smallest and lightest retrofocus type among the company's 28mm lenses.
6. The February 1972 filing and August 1973 publication are contemporary with the early OM system and its 28mm f/3.5.

The identification should therefore be read as **probable production basis**, not as proof that every production sample used Table V without manufacturing changes. The later Zuiko 28mm f/2.8 is a different 6-element/6-group design in Olympus literature and is not represented by this prescription.

## Optical Architecture

Example 3 is a seven-singlet retrofocus prime with three useful paraxial power blocks. The focal lengths below are standalone in-air values for the stated block, not in-situ powers inside the complete lens.

- **Front negative block, L1-L2:** $f=-37.382$ mm at production scale. A very weak positive front element precedes the strongly negative L2 meniscus.
- **Intermediate positive block, L3-L4:** $f=+46.939$ mm. Two thick positive elements form the central relay; their facing concave surfaces create the patent's negative air lens.
- **Rear positive block, L5-L7:** $f=+48.712$ mm. Positive L5 and L7 surround the strongly dispersive negative L6, producing the principal rear convergence and chromatic balancing.

The defining architectural device is not simply a strong negative front meniscus. The patent deliberately transfers part of the negative action to the narrow air lens between $r_6$ and $r_7$. This permits a long image-side clearance without making the front negative group still stronger, which the patent associates with worse asymmetrical aberration, spherical aberration, and distortion.

At production scale, the lens has a computed EFL of $28.0072$ mm and a back focal distance of $37.5024$ mm. Because $BFL>EFL$, the design meets the optical criterion for retrofocus. The physical span from the first to the last glass surface is $38.0352$ mm. These are different quantities: the complete first-surface-to-image-plane track is $75.5377$ mm, not 38 mm.

The patent places the aperture stop somewhere in air gap $t_5$ between L5 and L6 but does not give an axial coordinate. The data file splits $t_5$ equally around the stop. This documented modeling choice affects entrance-pupil location and the drawing, but not the prescription's EFL or BFL.

## Element-by-Element Analysis

### L1 — Weak Positive Biconvex

$n_d=1.66672$, $\nu_d=48.32$. Glass: S-BAH11 (OHARA current equivalent). Standalone $f=+272.651$ mm.

L1 has radii of $+479.3796$ and $-292.1324$ mm after scaling. Its power is very small relative to the complete lens. It slightly conditions the incident bundle before L2 and provides a broad front surface without forcing the primary negative power onto the first interface.

The catalog name is an optical-property match, not evidence that Olympus purchased this exact OHARA melt. With $\nu_d<50$, the patent glass lies on the flint side of the conventional crown/flint division.

### L2 — Negative Meniscus, Convex to Object

$n_d=1.62041$, $\nu_d=60.27$. Glass: S-BSM16 (OHARA current equivalent). Standalone $f=-32.524$ mm.

L2 is the principal negative element. Both radii are positive in the patent sign convention, giving a convex-concave meniscus with its convex face toward the object. The strongly curved rear surface supplies most of the negative power and launches the divergent bundle across the long $t_2$ space toward L3.

The high Abbe number limits the longitudinal-color burden of this strongly powered negative element. Together, L1 and L2 form the negative front section required by the retrofocus architecture.

### L3 — Thick Positive Biconvex

$n_d=1.66892$, $\nu_d=44.98$. Glass: BAF13 (SUMITA current equivalent). Standalone $f=+54.188$ mm.

L3 is a thick positive biconvex element. Its nearly flat front surface contributes little power, while the rear surface at $-39.1524$ mm performs most of the convergence. That rear surface is also the first wall of the negative air lens.

SUMITA's current authoritative catalog contains BAF13 at $n_d=1.668920$, $\nu_d=45.00$, a direct match within $\Delta\nu_d=0.02$. This is a present-day optical equivalent, not a historical supplier identification.

### L4 — Weak Positive Meniscus, Concave to Object

$n_d=1.67790$, $\nu_d=55.33$. Glass: S-LAL12 (OHARA current equivalent). Standalone $f=+158.409$ mm.

L4 is the thickest element. Its two radii, $-19.5328$ and $-19.5216$ mm, are almost equal, so its standalone power is weak despite its pronounced shape. The object-side face is concave; the image-side face is convex.

Its principal architectural role is geometric. Together with L3's rear surface, L4's front surface defines the negative air lens constrained by condition (3). The large center thickness also satisfies condition (6), which the patent uses to preserve long back focus while shortening the overall lens body.

### L5 — Positive Meniscus, Convex to Object

$n_d=1.71300$, $\nu_d=53.98$. Glass: J-LAK8 (HIKARI current equivalent). Standalone $f=+41.212$ mm.

L5 begins the final positive block. Its front surface is appreciably stronger than its rear surface, giving positive meniscus power and converging the bundle before the stop and L6.

The patent specifies the stop in the following air gap $t_5$. No further claim about an exact stop plane or symmetry should be inferred from the patent.

### L6 — Biconcave Negative

$n_d=1.74077$, $\nu_d=27.79$. Glass: S-TIH13 (OHARA current equivalent). Standalone $f=-21.296$ mm.

L6 is the strongest negative element by standalone focal length and the most dispersive glass in the prescription. It opposes the positive powers of L5 and L7 and supplies the rear block's principal chromatic counter-power.

Its negative refractive power also contributes negative Petzval curvature, offsetting part of the positive field curvature generated by the surrounding positive elements. The prescription is an achromatizing arrangement; the available $n_d/\nu_d$ data alone do not justify an apochromatic claim.

### L7 — Plano-Convex Positive, Convex to Image

$n_d=1.71300$, $\nu_d=53.98$. Glass: J-LAK8 (HIKARI current equivalent). Standalone $f=+24.544$ mm.

L7 has a plane object-side surface and a convex image-side surface. With $r_{14}<0$ under the patent convention, the rear surface bulges toward the image and the element is positive.

L7 shares the same patent glass as L5. Together they bracket L6 and complete the strongly positive rear block.

## Glass Identification

The patent gives only $n_d$ and $\nu_d$; it does not name a glass maker. The following names are nearest current catalog equivalents verified against authoritative manufacturer data. They must not be read as claims about Olympus's 1972 supplier or exact historical melt.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Current catalog equivalent | Catalog $n_d$ | Catalog $\nu_d$ | Residual $(\Delta n_d,\Delta\nu_d)$ |
|---|---:|---:|---|---:|---:|---:|
| L1 | 1.66672 | 48.32 | S-BAH11 (OHARA) | 1.66672 | 48.32 | $(0.00000,0.00)$ |
| L2 | 1.62041 | 60.27 | S-BSM16 (OHARA) | 1.62041 | 60.29 | $(0.00000,+0.02)$ |
| L3 | 1.66892 | 44.98 | BAF13 (SUMITA) | 1.66892 | 45.00 | $(0.00000,+0.02)$ |
| L4 | 1.67790 | 55.33 | S-LAL12 (OHARA) | 1.67790 | 55.34 | $(0.00000,+0.01)$ |
| L5, L7 | 1.71300 | 53.98 | J-LAK8 (HIKARI) | 1.71300 | 53.96 | $(0.00000,-0.02)$ |
| L6 | 1.74077 | 27.79 | S-TIH13 (OHARA) | 1.74077 | 27.79 | $(0.00000,0.00)$ |

The palette contains three flints by Abbe number (L1, L3, L6) and four crowns (L2, L4, L5, L7). L6 is the high-dispersion member; L2 is the lowest-dispersion member. L5 and L7 use identical patent glass data, leaving six unique optical pairs across the seven elements.

## Focus Mechanism

The patent does **not** specify unit focusing and does not publish a variable-spacing table. It supplies only fixed prescription data plus finite-conjugate aberration plots. The patent text calls the finite-conjugate case a magnification of $1/40$, while Figure 8A is labeled $1:35$; this internal inconsistency makes those plots unsuitable as a numerical focus prescription.

Olympus's own brochure specifies “Straight helicoid,” a 0.30 m minimum focus, and a minimum photographic range of approximately $18\times27$ cm. The data file therefore uses a clearly labeled unit-focus approximation: the entire optical system remains fixed internally and only the final image-space gap changes.

For a 0.30 m object-to-film distance, the paraxial conjugate solution is:

| State | Back focal/image gap | Change from infinity | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 37.5024 mm | — | 0 |
| 0.30 m | 41.0772 mm | +3.5747 mm | $-0.12764$ ($1:7.83$) |

The computed full-frame object field is about $18.8\times28.2$ cm, close to Olympus's rounded $18\times27$ cm specification. This agreement supports the unit-focus implementation, but it does not convert the patent into a close-focus spacing source.

## Air-Lens and Aberration Strategy

The central air gap between $r_6$ and $r_7$ is the patent's main corrective mechanism. Both surfaces are negative, and the more strongly curved L4 front surface makes the air space act as a negative lens. The patent states that this permits long back focus without further increasing the power of the front negative group.

The surface ratio is

$$
\frac{r_6}{r_7}=\frac{-139.83}{-69.76}=2.0044.
$$

This lies comfortably inside the prescribed interval $1.2<r_6/r_7<3.5$. The narrow center gap and steep L4 surface also explain why the data file's inferred clear apertures form a pronounced neck at this location. That neck and the L6-L7 gap are constrained by signed sag clearance and intentionally allow wide-field vignetting, consistent with the patent's Figure 9 aperture-efficiency curve.

## Conditional Expressions

All values below use the patent-normalized $f=100$ prescription.

| Condition | Example 3 value | Result |
|---|---:|---|
| $(t_2+t_3+t_4)/(d_3+d_4)<0.8$ | $30.39/53.90=0.56382$ | Pass |
| $0.4f<d_3+d_4<1.1f$ | $53.90$ | Pass |
| $1.2<r_6/r_7<3.5$, with $r_6,r_7<0$ | $2.00444$ | Pass |
| $t_5+t_6<0.3f$ | $13.40$ | Pass |
| $0.6f<t_2+d_3+t_3+d_4+t_4<1.0f$ | $84.29$ | Pass |
| $d_4>0.7d_3$ | $d_4/d_3=1.38390$ | Pass |

The patent states that Examples 1 and 2 satisfy only conditions (1)-(4). Independent arithmetic confirms the two failures: condition (5) evaluates to 103.82 and 103.65, respectively, while $d_4/d_3$ is 0.587 and 0.475, both below the condition (6) threshold of 0.7.

## Verification Summary

The prescription was independently checked with an ABCD matrix calculation and a scalar paraxial $y$-$n u$ ray trace. Both methods return the same first-order values.

| Quantity | Patent scale | Production scale ($\times0.28$) | Check |
|---|---:|---:|---|
| Effective focal length | 100.0256 mm | 28.0072 mm | Patent states 100 mm |
| Back focal distance from L7 rear vertex | 133.9373 mm | 37.5024 mm | $1.3390f$ |
| First-to-last optical-surface span | 135.8400 mm | 38.0352 mm | $1.3581f$ |
| First surface to image plane | 269.7773 mm | 75.5377 mm | Span + BFL |
| Surface Petzval sum | $+0.00116762\ \mathrm{mm}^{-1}$ | $+0.00417007\ \mathrm{mm}^{-1}$ | $fP=0.11679$ vs. patent 0.1166 |
| Petzval radius, stated sign convention | $-856.44$ mm | $-239.80$ mm | $-1/P$ |

The distinction between optical span and back focal distance is essential. The first-to-last surface span is 38.04 mm, the first-surface-to-image-plane track is 75.54 mm, and the image clearance is the separate 37.50 mm BFL.

No aspherical coefficients occur. The prescription, computed powers, focus approximation, and semi-diameter constraints are all recorded in the paired data file.

## Sources

- DE 2205380 A1, _Linsensystem für eine Weitwinkelkamera mit Retrofokus-Objektiv_, Olympus Optical Co., Ltd., published 16 August 1973. Prescription: Table V; Seidel/Petzval data: Table VI; geometry: Figure 6; aberrations and aperture efficiency: Figures 7-9.
- Olympus Optical Co., _Manual for Zuiko Interchangeable Lenses_, January 1973 brochure, p. 24. Archived scan: `https://retro-camera.ru/files/Zuiko-Lenses-0173-Late-HR-EN.pdf`.
- OHARA, _Optical Glass Pocket Catalog_, May 2023: S-BAH11, S-BSM16, S-LAL12, and S-TIH13. `https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf`.
- HIKARI GLASS, _Optical Glass Catalog_, June 2025: J-LAK8. `https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf`.
- SUMITA Optical Glass, official Zemax glass catalog, dated 4 June 2026: BAF13. `https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf`.
