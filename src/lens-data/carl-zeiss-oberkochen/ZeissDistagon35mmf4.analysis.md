## Patent Reference and Design Identification

**Patent:** US 3,038,380
**Application Number:** Ser. No. 794,476
**Priority:** Germany, February 27, 1958
**Filed:** February 19, 1959
**Granted:** June 12, 1962
**Inventors:** Helmut Eismann, Günther Lange
**Assignee:** Carl Zeiss, Heidenheim (Brenz), Germany
**Title:** Asymmetrical Photographic Objective
**Classification:** Cl. 88–57
**Embodiment analyzed:** Sole numerical example; the patent gives one worked prescription at $f = 1$

The numerical example in US 3,038,380 is a seven-element, four-component retrofocus wide-angle objective. It corresponds to the Carl Zeiss B-Distagon 1:4 f=35 mm for the Zeiss Ikon Contarex system. The identification rests on several converging points.

1. The patent's prescription contains seven elements in four air-separated components, matching the Contarex 35 mm f/4 Distagon architecture.
2. The patent gives $f = 1$, aperture ratio 1:4, useful half-field angle $\pm32^\circ$, and focal intercept approximately 116% of focal length. Scaled to 35 mm, this gives a 35 mm f/4 retrofocus objective with a back focal distance of about 40.6 mm.
3. Carl Zeiss's later historical account of the Distagon name states that an improved 1956 Distagon calculation was scaled and produced as the Distagon 4/35 for the Contarex 35 mm camera starting in 1958.
4. The patent priority date, February 27, 1958, aligns with the initial Contarex-era wide-angle lens program.
5. The assignee, Carl Zeiss of Heidenheim (Brenz), is the West German Zeiss entity associated with the Contarex system.

The Contarex booklet names the production lens as the ZEISS B-DISTAGON f/4, 35 mm and gives close focusing as 11 inches from the subject, or 15 inches from the film plane. The data file therefore uses 0.381 m as the close-focus distance and models focusing as unit focus.

## Optical Architecture

The lens is an asymmetric retrofocus, or inverted-telephoto, wide-angle design. It comprises seven all-spherical elements in four air-separated components. The stop lies in the air space between the single positive pre-stop element and the cemented triplet behind the stop.

The four components are:

**Component I (LI + LII):** A cemented front doublet with net negative power, $f_{\mathrm{I}} = -1.6635f$ (−58.22 mm at 35 mm scale). This is the principal retrofocus group. It gives the system the long positive back focal distance needed for SLR mirror clearance.

**Component II (LIII):** A positive meniscus immediately in front of the diaphragm, $f_{\mathrm{II}} = +1.9908f$ (+69.68 mm). This group recovers part of the divergence introduced by Component I and controls the beam entering the stop.

**Component III (LIV + LV + LVI):** A cemented crown/flint/crown triplet behind the stop, $f_{\mathrm{III}} = +4.4013f$ (+154.04 mm). Its net power is modestly positive, but it is optically important because the two cemented junctions place strong dispersive correction immediately behind the aperture.

**Component IV (LVII):** A final positive meniscus, $f_{\mathrm{IV}} = +1.2672f$ (+44.35 mm). It supplies much of the final image-side convergence and helps manage field curvature at the rear of the design.

The power order is negative / positive / weak positive / stronger positive. This is the classical retrofocus allocation: a strong negative front section pushes the rear principal plane rearward, while the post-stop section restores convergence and compensates aberrations introduced by the front group.

At 35 mm scale, the patent prescription gives an optical track from the first surface to the last glass surface of 35.048 mm. The patent back focal distance is $1.1613f$, or 40.646 mm, giving a front-vertex-to-film-plane distance of 75.693 mm at infinity.

## Element-by-Element Analysis

### LI — Biconvex Positive, front element of the cemented doublet

$n_d = 1.62041$, $\nu_d = 60.3$. Glass: SK16 / N-SK16 class (Schott). Standalone $f = +0.8476f$ (+29.67 mm).

LI is the positive front element of the cemented retrofocus doublet. Its front surface is strongly convex to the object, and its cemented rear surface is weakly curved. By itself, LI is a compact positive element; within the doublet, it supplies the first refracting surface and provides a high-Abbe partner for LII.

The glass matches the modern Schott N-SK16 optical position very closely. In a 1958 Zeiss design, the historically appropriate designation is SK16; the data file labels it as SK16 / N-SK16 class to preserve both the patent-era context and the catalog-resolvable modern equivalent.

### LII — Biconcave Negative, rear element of the cemented doublet

$n_d = 1.50137$, $\nu_d = 56.5$. Glass: K10 (Schott). Standalone $f = -0.4910f$ (−17.19 mm).

LII is the thin negative member of the front doublet. Its negative power overwhelms LI's positive power, so the cemented pair has net negative focal length. The short rear radius, $r_3 = +0.28631f$, is one of the strongest curvatures in the prescription and is central to the retrofocus action.

The patent describes the front component as a meniscus-shaped dispersive component with its concave side turned toward the diaphragm and with the cemented surface convex toward the diaphragm. The LI/LII pair satisfies that qualitative condition and provides the front negative component required by the patent.

### LIII — Positive Meniscus, pre-stop collective element

$n_d = 1.75520$, $\nu_d = 27.5$. Glass: SF4 (Schott). Standalone $f = +1.9908f$ (+69.68 mm).

LIII is a positive meniscus of dense flint glass. Its use as a positive element is deliberate: SF4's high index permits positive power with relatively gentle surface curvatures. The trade-off is dispersion. Positive power in a low-Abbe flint introduces chromatic contribution that must be compensated by the post-stop triplet.

The element stands immediately in front of the diaphragm and controls the beam delivered to the stop. Its two positive radii make it convex toward the object and concave toward the diaphragm, matching the curvature pattern required in the patent description.

### LIV — Positive Meniscus, front element of the cemented triplet

$n_d = 1.65160$, $\nu_d = 58.4$. Glass: LAK7 / N-LAK7 class (Schott). Standalone $f = +0.4981f$ (+17.43 mm).

LIV is the first element behind the stop and the first element of the cemented triplet. It is a high-index, high-Abbe lanthanum crown. Its front surface is concave toward the diaphragm, satisfying the patent's requirement that the component immediately behind the diaphragm be meniscus-shaped and concave toward the diaphragm.

The glass choice is significant. A lanthanum crown provides high refractive index without the strong dispersion penalty of a dense flint, allowing a compact positive element ahead of the central dispersive element.

### LV — Biconcave Negative, middle element of the cemented triplet

$n_d = 1.72339$, $\nu_d = 38.0$. Glass: BAFD8 / S-BAH28 / H-ZBaF21 class, code 723/380; patent vendor not named. Standalone $f = -0.2388f$ (−8.36 mm).

LV is the central dispersive element of the cemented triplet. It is a high-index barium dense flint class glass, used as a strong negative element between two positive outer elements. Its low Abbe number relative to the outer glasses makes it the principal chromatic balancing element in the rear group.

The patent imposes two material conditions on this middle element. Its $\nu$ value must be smaller than the arithmetic mean of the $\nu$ values of the two outer triplet elements, and its $n$ value must be greater than the arithmetic mean of the $n$ values of those two outer elements. The numerical example satisfies both: $38.0 < (58.4 + 48.4)/2 = 53.4$, and $1.72339 > (1.65160 + 1.66672)/2 = 1.65916$.

### LVI — Biconvex Positive, rear element of the cemented triplet

$n_d = 1.66672$, $\nu_d = 48.4$. Glass: BAFN11 / BAF11 / S-BAH11 class, code 667/484; patent vendor not named. Standalone $f = +0.4596f$ (+16.09 mm).

LVI is the rear positive element of the cemented triplet. Its biconvex form and intermediate dispersion complete the triplet's crown/flint/crown correction strategy. The rear surface, $r_9 = -0.42835f$, forms the last surface of Component III and is one of the important field-shaping surfaces in the rear half of the design.

The previous assumption that this element is merely near a modern N-BAF10 position is not the best catalog match. The six-digit code 667/484 corresponds much more closely to the BAFN11 / BAF11 / S-BAH11 class in modern cross-reference tables.

### LVII — Positive Meniscus, final rear element

$n_d = 1.69067$, $\nu_d = 54.9$. Glass: LAK9 / N-LAK9 class (Schott). Standalone $f = +1.2672f$ (+44.35 mm).

LVII is the final positive meniscus. Both radii are negative, so the element is concave toward the diaphragm. It provides the final convergence into the long back focal distance and contributes to field curvature control.

The small air gap between Component III and LVII, $d_9 = 0.00284f$ (0.099 mm at 35 mm scale), makes the rear part of the design behave almost like a near-continuous optical assembly while still allowing the triplet and final meniscus to remain separate manufactured components.

## Glass Identification and Selection

The patent gives only $n_d$ and $\nu_d$, not catalog names. The table below uses the patent values, current Schott datasheets where exact matches exist, and cross-reference codes where the glass is better treated as a class rather than an exact named Schott current glass.

| Element | Patent $n_d$ | Patent $\nu_d$ | Corrected glass identification | Confidence | Notes |
|---|---:|---:|---|---|---|
| LI | 1.62041 | 60.3 | SK16 / N-SK16 class (Schott) | High | Modern Schott N-SK16 gives $n_d = 1.62041$, $\nu_d = 60.32$. |
| LII | 1.50137 | 56.5 | K10 (Schott) | High | Modern Schott K10 gives $n_d = 1.50137$, $\nu_d = 56.41$. |
| LIII | 1.75520 | 27.5 | SF4 (Schott) | High | Modern Schott SF4 gives $n_d = 1.75520$, $\nu_d = 27.58$. |
| LIV | 1.65160 | 58.4 | LAK7 / N-LAK7 class (Schott) | High | Modern Schott N-LAK7 gives $n_d = 1.65160$, $\nu_d = 58.52$. |
| LV | 1.72339 | 38.0 | BAFD8 / S-BAH28 / H-ZBaF21 class, 723/380 | Class match | The patent does not name a vendor; Hoya and CDGM cross-reference data map this code to BAFD8 / S-BAH28 / H-ZBaF21 class. |
| LVI | 1.66672 | 48.4 | BAFN11 / BAF11 / S-BAH11 class, 667/484 | Class match | The 667/484 position matches BAFN11 / BAF11 / S-BAH11 class, not N-BAF10. |
| LVII | 1.69067 | 54.9 | LAK9 / N-LAK9 class (Schott) | High | Modern Schott N-LAK9 is very close at $n_d = 1.69100$, $\nu_d = 54.71$. |

The chromatic strategy is concentrated in the post-stop triplet. The front doublet uses two relatively high-Abbe glasses and is mainly a retrofocus power component. The pre-stop LIII is a high-index flint used positively, which is optically efficient but chromatically expensive. The triplet behind the stop then pairs a high-index, low-Abbe negative central element with two positive outer elements, using the cemented interfaces for efficient color correction and coma control.

## Focus Mechanism

The patent provides only the infinity prescription and does not describe a focusing mechanism. The production Contarex lens used unit focusing: the whole optical cell moves forward, away from the film plane, to focus closer. In a prescription file with the image plane held fixed, this is represented by an increase in the final air space from the last glass surface to the image plane.

The Contarex booklet gives the B-Distagon f/4, 35 mm close-focus distance as 15 inches from the film plane, approximately 0.381 m. Solving the thick-lens conjugate equation with the patent prescription gives the following model values at 35 mm scale:

| Focus state | Back focal distance from LVII rear vertex | Front vertex to film plane | Approximate object distance from first optical surface |
|---|---:|---:|---:|
| Infinity | 40.646 mm | 75.693 mm | Infinity |
| 0.381 m from film plane | 44.755 mm | 79.803 mm | 301 mm |

The close-focus value in the data file is therefore not patent-published; it is a unit-focus reconstruction constrained by the Contarex booklet's film-plane close-focus specification.

## Aspherical Surfaces

The design is entirely spherical. The patent includes no aspherical coefficient table and no aspherical surface description. The numerical prescription consists of eleven spherical glass surfaces plus the aperture stop.

This is consistent with late-1950s production practice. The correction is achieved by glass selection, strong cemented interfaces, meniscus bending, and the retrofocus power distribution rather than by aspherical departures.

## Patent Conditional Expressions

The patent states four qualitative layout conditions and four quantitative spacing/length conditions. The numerical prescription satisfies all of them. The following computed values use the normalized patent scale, $f = 1$.

**Conditions (a)–(d):** The front component is a meniscus-shaped dispersive cemented doublet concave toward the diaphragm; the component before the diaphragm is collective; the component after the diaphragm is a meniscus concave toward the diaphragm; and the last component is a collective meniscus concave toward the diaphragm. The patent drawing and prescription satisfy all four layout conditions.

**Condition (e):** Axial separation from $r_1$ to $r_9$ must exceed the arithmetic mean of $|r_1|$ and $|r_9|$, and that mean must lie between $0.35f$ and $1.00f$.

$$d(r_1 \to r_9) = 0.93657,\qquad \frac{|r_1| + |r_9|}{2} = 0.56861.$$

Thus $0.93657 > 0.56861$, and $0.35 < 0.56861 < 1.00$.

**Condition (f):** Axial separation from $r_3$ to $r_6$ must exceed the arithmetic mean of $|r_3|$ and $|r_6|$, but remain less than three times that mean.

$$d(r_3 \to r_6) = 0.49230,\qquad \frac{|r_3| + |r_6|}{2} = 0.41085.$$

Thus $0.41085 < 0.49230 < 1.23255$.

**Condition (g):** The front section from $r_1$ to the surface immediately in front of the diaphragm must be longer than the rear section from the surface immediately behind the diaphragm to $r_{11}$.

$$d(r_1 \to r_5) = 0.56478,\qquad d(r_6 \to r_{11}) = 0.28594.$$

The front section is longer.

**Condition (h):** Overall glass-surface length must lie between $0.70f$ and $2.00f$.

$$d(r_1 \to r_{11}) = 1.00137.$$

This lies within the specified interval.

## Design Heritage and Context

The 35 mm f/4 Contarex Distagon is part of the first Oberkochen generation of Zeiss retrofocus wide-angle lenses. Zeiss's own historical account links this 35 mm lens to earlier Distagon work for the Hasselblad 1000F and states that the Contarex 4/35 was produced by scaling an improved Distagon calculation.

The patent's importance is not merely its long back focal distance. It also formalizes a compact retrofocus solution around a negative cemented front component, a dense-flint pre-stop collector, and a post-stop cemented triplet with explicit index and Abbe-number constraints. Those triplet constraints are the most distinctive analytical feature of the design: they couple chromatic correction with coma control in the rear section of a wide-angle SLR objective.

## Verification Summary

The prescription was re-transcribed from the patent page image rather than from OCR alone. The OCR text misreads several plus signs in the radius table; the page image shows the standard sign sequence used in the data file.

Paraxial verification used a $y, n u$ ray-transfer trace with all patent surfaces at $f = 1$.

| Quantity | Patent value | Computed value | 35 mm scaled value |
|---|---:|---:|---:|
| Effective focal length | $f = 1$ | 0.9999865 | 34.9995 mm |
| Back focal distance | 1.1613 | 1.161256 | 40.6440 mm computed; 40.6455 mm tabulated/scaled |
| Front-vertex to last glass surface | — | 1.00137 | 35.0480 mm |
| Front-vertex to film plane | — | 2.16267 | 75.6935 mm |
| Useful half-field | $32^\circ$ | accepted from patent | image height 21.87 mm at 35 mm |
| Petzval sum, $\sum \phi/(nn')$ | — | +0.18758 $f^{-1}$ | +0.005359 mm$^{-1}$ |

Standalone element focal lengths at the patent scale were recomputed as follows: LI +0.8476, LII −0.4910, LIII +1.9908, LIV +0.4981, LV −0.2388, LVI +0.4596, and LVII +1.2672. Component focal lengths were recomputed as Component I −1.6635, Component II +1.9908, Component III +4.4013, and Component IV +1.2672.

## Sources

1. US Patent 3,038,380, Helmut Eismann and Günther Lange, "Asymmetrical Photographic Objective," granted June 12, 1962.
2. Zeiss Ikon, *Contarex* booklet, hosted by CameraManuals.org / OrphanCameras, especially the lens section naming the ZEISS B-DISTAGON f/4, 35 mm and giving close focus as 15 inches from the film plane.
3. H. H. Nasse, Carl Zeiss Camera Lens Division, *Distagon, Biogon, Hologon*, Camera Lens News No. 41, stating that the improved Distagon calculation was scaled and produced as the Distagon 4/35 for Contarex starting in 1958.
4. Schott optical glass datasheets for N-SK16, K10, SF4, N-LAK7, and N-LAK9.
5. Hoya / CDGM optical glass cross-reference data for 723/380 and 667/484 glass-code positions.
