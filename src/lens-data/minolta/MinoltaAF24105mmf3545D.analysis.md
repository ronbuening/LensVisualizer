## Patent Reference and Design Identification

**Patent:** [JP 2000-187161 A](https://patents.google.com/patent/JP2000187161A/en)  
**Application Number:** JP H10-367570  
**Filed:** December 24, 1998  
**Published:** July 4, 2000  
**Inventor:** Mamoru Terada  
**Applicant:** Minolta Co., Ltd.  
**Title:** 高変倍ズームレンズ (High-zoom-ratio zoom lens)  
**Example details:** 実施例3 (third embodiment, Fig. 3): construction table ¶0049, aspherical data ¶0050–¶0052, condition (P4) values ¶0053, Table 1 (¶0061), aberration curves Fig. 7. No scaling.

The Minolta AF 24-105mm f/3.5-4.5 (D) is a full-frame A-mount standard zoom released in 2000; Sony later sold the same optical design as the SAL24105. The patent names no product. Four examples share the same four-group layout, and three of them have the production element count, so the correlation with Example 3 is qualified rather than certain:

1. **Construction.** Sony Japan's SAL24105 specification gives 11 groups and 12 elements, as do mhohner.de and Imaging Resource for the Minolta lens. Examples 1–3 each have 12 elements in 11 groups (¶0013–¶0015). Example 4 adds a positive meniscus at the rear of Gr4 (¶0016) and has 13 elements, so it is excluded.
2. **Focal length, aperture and format.** Example 3 prints f = 24.71–50.00–102.50 mm and FNO 3.60–4.10–4.60, against the marketed 24–105 mm f/3.5–4.5. Table 1's fW/Y′ = 1.142 corresponds to an image height of 21.63 mm, the 35 mm full-frame half-diagonal.
3. **Focus.** The patent focuses with Gr2 (¶0010, ¶0034, claim 6), and mhohner.de lists internal focusing. A paraxial solve of the Example 3 prescription for a 0.5 m object distance, the marketed minimum, gives 0.18× at the tele end, matching Sony's 0.18× and mhohner.de's 1:5.49.
4. **Barrel length.** mhohner.de gives a length of 69 mm at the wide end and 108 mm at full extension, a 39 mm extension. Table 1 gives Example 3 a Gr1 travel of X1/fW = 1.6222 (40.1 mm) and a wide-end length of TLW/Y′ = 5.039 (109.0 mm from the first surface to the image). With the 44.5 mm A-mount flange distance, that length puts the front vertex about 64.5 mm ahead of the flange, 4.5 mm inside the 69 mm barrel. For the same 21.63 mm image height, Examples 1 and 2 would extend by about 44.9 and 41.5 mm and be about 98.0 and 99.9 mm long at the wide end, leaving the front vertex about 15.5 and 13.6 mm behind the barrel front. Example 3 fits the marketed barrel best.
5. **Timing.** The application was filed in December 1998 and published in July 2000, the year the lens was released.

## Optical Architecture

Example 3 is a four-group zoom of positive–negative–positive–positive power (¶0012) with 12 elements in 11 groups. The 0.010 mm cement layer printed between L1 and L2 (d2) is not a thirteenth element.

| Group | Elements             | Focal length | Function                                                     |
| ----- | -------------------- | -----------: | ------------------------------------------------------------ |
| Gr1   | L1–L2 cemented, L3   |    +87.96 mm | Positive front collector                                     |
| Gr2   | L4–L7                |    −15.59 mm | Negative variator and focusing group                         |
| Gr3   | Stop, L8–L10         |    +39.57 mm | Positive relay behind the stop                               |
| Gr4   | L11, L12             |    +48.64 mm | Positive rear group with the double-aspherical L12           |

The group focal lengths are paraxial values computed from the prescription; they reproduce Table 1's f1/fW = 3.5605, f4/fW = 1.9687 and f4/f3 = 1.2292.

All four groups move toward the object from wide to tele (¶0012, claim 5), and the stop moves with Gr3. With the image plane fixed, Gr1 travels 40.08 mm, Gr2 7.66 mm, Gr3 22.59 mm and Gr4 27.41 mm. The gap behind Gr1 opens while the gaps behind Gr2 and Gr3 close:

| Gap | Between       |   Wide |    Mid |   Tele |
| --- | ------------- | -----: | -----: | -----: |
| d6  | Gr1–Gr2       |  1.900 | 14.386 | 34.324 |
| d14 | Gr2–stop      | 15.728 |  6.432 |  0.800 |
| d21 | Gr3–Gr4       |  5.723 |  1.701 |  0.900 |
| BF  | L12–image     | 36.501 | 53.667 | 63.910 |
| TL  | r1–image      | 109.00 | 125.34 | 149.08 |

The patent prints no back focus for any example. BF is the paraxial image distance of the printed prescription at each station; the resulting wide-end length and Gr1 travel reproduce Table 1, which confirms the convention. The zoom ratio is 4.15×.

The patent's stated aim is a compact, wide-angle high-ratio zoom (¶0004). Its compactness comes from a four-group positive–negative–positive–positive layout whose Gr4 holds only one positive and one negative element (¶0028), with aspheres carrying the correction that extra elements would otherwise supply (¶0031).

## Element-by-Element Analysis

Element focal lengths are standalone paraxial values in air.

### L1–L2 — Cemented Doublet

L1: nd = 1.83350, νd = 21.00. Glass: Unmatched (no catalog glass at these values). f = −196.77 mm. Cement: 0.010 mm, nd = 1.51400, νd = 42.83. L2: nd = 1.61800, νd = 63.39. Glass: PCD4 equivalent (Hoya catalog); supplier not stated. f = +130.76 mm.

The front doublet pairs a high-dispersion flint meniscus, convex to the object, with a biconvex phosphate-crown-type glass. As a unit it is only weakly positive (f = +393.17 mm), which points to color correction at the front of the lens as its main job; the patent does not discuss it. The cemented interface has the same radius on both sides of the cement (r2 = r3 = 89.123 mm). The model keeps the printed cement layer as a separate thin element so that its printed νd stays in the chromatic trace.

### L3 — Positive Meniscus

nd = 1.69680, νd = 56.47. Glass: Unmatched (no catalog glass at these values). f = +112.89 mm.

The air-spaced meniscus, convex to the object, carries most of Gr1's positive power. Splitting that power between L2 and L3 keeps the individual curvatures moderate in the group with the largest diameter.

### L4 — Negative Meniscus, aspherical front

nd = 1.85000, νd = 40.04. Glass: Unmatched (no catalog glass at these values). f = −19.90 mm.

The strongest negative element in the lens leads Gr2 and is concave to the image. Its object-side face, r7, is aspherical. ¶0034 explains the placement: an asphere on the most object-side surface of Gr2 corrects aberrations, especially distortion. The deep rear face (r8 = 15.076 mm) faces L5 across a 6.433 mm air gap.

### L5 — Biconcave Negative

nd = 1.77250, νd = 49.77. Glass: TAF1 equivalent (Hoya catalog); supplier not stated. f = −26.20 mm.

The second negative element of Gr2 adds variator power while keeping its own curvatures moderate.

### L6 — Biconvex Positive

nd = 1.75000, νd = 25.14. Glass: FF8 (Hoya catalog), the nearest catalog row (nd 1.75211, νd 25.05); supplier not stated. f = +21.76 mm.

A dense-flint positive element inside the negative Gr2. Against the three negative elements (νd 40.0, 49.8 and 51.6), its low Abbe number corrects Gr2's color while its positive power is outweighed by theirs; Gr2 as a whole is −15.59 mm.

### L7 — Negative Meniscus

nd = 1.75450, νd = 51.57. Glass: Unmatched (no catalog glass at these values). f = −47.37 mm.

The meniscus is convex to the image and closes Gr2 ahead of the variable d14 gap.

### L8 — Biconvex Positive

nd = 1.51680, νd = 64.20. Glass: BSC7 equivalent (Hoya catalog); supplier not stated. f = +34.15 mm.

The first element behind the stop, 0.900 mm from it, starts Gr3's positive power with a low-dispersion crown.

### L9 — Biconvex Positive

nd = 1.51823, νd = 58.96. Glass: E-C3 equivalent (Hoya catalog); supplier not stated. f = +40.94 mm.

A second positive crown shares Gr3's power with L8.

### L10 — Biconcave Negative

nd = 1.75520, νd = 27.51. Glass: E-FD4 equivalent (Hoya catalog); supplier not stated. f = −27.83 mm.

The dense-flint negative element closes Gr3 and corrects the color of the two crowns ahead of it. Gr3 is spherical in this example; only Example 4 places an asphere on it (r21, ¶0016).

### L11 — Biconvex Positive

nd = 1.51680, νd = 64.20. Glass: BSC7 equivalent (Hoya catalog); supplier not stated. f = +27.97 mm.

The positive member of the two-element Gr4.

### L12 — Negative Meniscus, both faces aspherical

nd = 1.77450, νd = 44.46. Glass: Unmatched (no catalog glass at these values). f = −51.68 mm.

The last element is a negative meniscus, convex to the object, with both faces aspherical. ¶0028–¶0031 give the reasoning: a Gr4 of one positive and one negative element is compact but cannot by itself correct spherical aberration, astigmatism and field curvature, so at least one Gr4 surface should be aspherical, preferably both faces of one lens.

## Glass Identification and Selection

The patent prints Nd and νd at the d-line (¶0037) and names no supplier. Six elements match five Hoya catalog glasses at the printed nd and within 0.15 in νd, and carry their names as equivalents. L6 carries the nearest Hoya row, FF8 (nd 1.75211, νd 25.05), with its dispersion curve applied at the printed nd. Like most dense flints it lies above the normal partial-dispersion line (PgF 0.6192), and with it the traced g-line focus follows the patent's aberration curves (Fig. 7) within about 0.02 mm at the wide and middle positions and about 0.08 mm short of them at the tele end. The other five elements and the cement have no catalog glass at their printed values and use dispersion estimated from νd.

| Element | nd      | νd    | Identification          | Role                         |
| ------- | ------- | ----- | ----------------------- | ---------------------------- |
| L1      | 1.83350 | 21.00 | Unmatched               | Flint of the front doublet   |
| Cement  | 1.51400 | 42.83 | Unmatched (cement)      | 0.010 mm cement layer        |
| L2      | 1.61800 | 63.39 | PCD4 (Hoya) equivalent  | Crown of the front doublet   |
| L3      | 1.69680 | 56.47 | Unmatched               | Gr1 positive meniscus        |
| L4      | 1.85000 | 40.04 | Unmatched               | Gr2 aspherical negative      |
| L5      | 1.77250 | 49.77 | TAF1 (Hoya) equivalent  | Gr2 negative                 |
| L6      | 1.75000 | 25.14 | FF8 (Hoya) nearest row  | Gr2 flint positive           |
| L7      | 1.75450 | 51.57 | Unmatched               | Gr2 negative meniscus        |
| L8, L11 | 1.51680 | 64.20 | BSC7 (Hoya) equivalent  | Gr3 and Gr4 positive crowns  |
| L9      | 1.51823 | 58.96 | E-C3 (Hoya) equivalent  | Gr3 positive crown           |
| L10     | 1.75520 | 27.51 | E-FD4 (Hoya) equivalent | Gr3 flint negative           |
| L12     | 1.77450 | 44.46 | Unmatched               | Gr4 aspherical negative      |

Gr1, Gr2 and Gr3 each carry their own flint: L1 against L2 in Gr1, L6 against L4, L5 and L7 in Gr2, and L10 against L8 and L9 in Gr3. The patent does not discuss color correction, but this pairing suggests each group is corrected largely on its own, so that the correction holds as the group spacings change over the 4.15× range. The nearest catalog glass to L3 at nd 1.69680 is 0.29 lower in νd (CDGM H-LaK12) and the common 697/555 lanthanum crowns about 1.0 lower, so L3 stays unmatched. The patent identifies no anomalous-dispersion glass, and the model makes no apochromatic claim.

## Focus Mechanism

Inner focus by Gr2 (¶0010, ¶0034, claim 6). ¶0034 notes that focusing with Gr2 rather than extending Gr1 keeps the front diameter smaller. Condition (5), β2T between −0.9 and −0.40, keeps Gr2 moving in one direction toward the object at every focal length (¶0023); Example 3 has β2T = −0.515.

The patent prints no close-focus spacing for any example, so the model is infinity-only and the focus control does not change the spacings. As an illustration only, a paraxial solve for a 0.5 m object-to-image distance moves Gr2 toward the object by about 1.15 / 1.76 / 4.22 mm at wide / mid / tele (d6 shrinks and d14 grows by the same amount) and gives 0.184× at the tele end. Minolta's 0.5 m minimum focus distance is not modeled.

## Aspherical Surfaces

The patent's aspheric form (AS) is

$$
x(y)=\frac{C_0y^2}{1+\sqrt{1-\varepsilon C_0^2y^2}}+\sum A_iy^i,
$$

where ε is the quadric parameter. ε = 1 is a spherical base, so K = ε − 1 = 0 for all three surfaces. The coefficients are used as printed (¶0050–¶0052), in millimetres:

| Surface | Element    |            A4 |            A6 |            A8 |            A10 |           A12 |
| ------- | ---------- | ------------: | ------------: | ------------: | -------------: | ------------: |
| 7A      | L4 front   |  1.3112223e−5 | −4.5618329e−8 | 6.1980873e−10 | −3.4820002e−12 | 8.6768803e−15 |
| 24A     | L12 front  | −1.6701462e−4 |  5.8514171e−7 | −2.6712050e−9 |              — |             — |
| 25A     | L12 rear   | −1.4652391e−4 |  6.8705561e−7 | −2.6388843e−9 |              — |             — |

On 7A the departure is positive: the convex front face of L4 grows steeper toward the rim and lies 517 µm behind its base sphere at the 13.8 mm semi-diameter, which weakens L4's negative power at the outer, off-axis ray heights. This is the Gr2 asphere ¶0034 credits with distortion correction.

On L12 both faces depart toward the object, by 1704 µm (24A) and 1296 µm (25A) at the 10.6 mm semi-diameter. The front face's slope reverses near h = 8.1 mm, so that face bends back toward the object at its rim. The patent's own (P4) table for r24 runs to y = 9.708 mm, beyond that reversal.

Condition (P4) limits the slope of the aspherical departure, weighted by the index step at the surface and by Gr4's power φ4: −0.05 < φ4·(N′ − N)·(d/dy)[x(y) − x0(y)] < 0. ¶0053 prints ten values for r24, from −0.9686 × 10⁻⁵ at y = 0.9708 mm to −0.7679 × 10⁻² at y = 9.7083 mm, all inside the range; the model's coefficients reproduce every value within 0.03 %. ¶0030 explains the aim: the asphere lowers Gr4's spherical-aberration coefficient, which governs its axial-coma error sensitivity, while the other aberrations stay controlled. ¶0031 adds that using the asphere on both faces of one lens balances correction against error sensitivity.

The table prints no resin layer on either element, so the aspheres are on the glass itself; the patent does not say how they were made.

## Conditional Expressions

Table 1 gives Example 3's values. The model values use the traced fW = 24.706 mm and Y′ = 21.633 mm, the 35 mm half-diagonal.

| Condition | Expression | Range            | Table 1 | Model   |
| --------- | ---------- | ---------------- | ------: | ------: |
| (1)       | TLW/Y′     | 4.0 to 5.2       |   5.039 |  5.0388 |
| (2)       | fW/Y′      | 1.1 to 1.4       |   1.142 |  1.1420 |
| (3)       | f4/fW      | 1.68 to 2.5      |  1.9687 |  1.9688 |
| (4)       | f1/fW      | 2.1 to 3.50      |  3.5605 |  3.5604 |
| (5)       | β2T        | −0.9 to −0.40    |  −0.515 | −0.5151 |
| (6)       | X1/fW      | 1.25 to 1.90     |  1.6222 |  1.6224 |
| (7)       | f4/f3      | 1.05 to 1.70     |  1.2292 |  1.2293 |

Example 3 is outside condition (4): its f1/fW = 3.5605 exceeds the 3.50 upper limit that claims 1 and 2 require. It satisfies claim 3 instead, which asks for condition (1), condition (P4) and a double-aspherical lens in Gr4. ¶0021 states that above the upper limit Gr1 is weaker and correcting aberrations tends to lengthen the lens, consistent with Example 3 being longer at the wide end than Examples 1 and 2.

## Model Scope and Limitations

- The back focus at each station is the paraxial image distance; the patent prints none.
- Focus is infinity-only; no close-focus spacing is printed.
- Positions between the three printed focal lengths are interpolated linearly and are not the production cam.
- The stop diameter is not printed; the engine sizes the stop from the printed F-number at each station (f/3.6, f/4.1 and f/4.6).
- Semi-diameters are measured from Fig. 3 and checked against ray clearance, not printed. L1 is square-cut at 28.8 mm on both faces, wider than the 26.8 mm rim of L2, as the figure draws it. The deep rear face of L4 is held at 10.0 mm so that it keeps an air gap to L5 at the rim; as in the figure, L4's edge runs flat at 13.8 mm and steps down to that face.
- At the 21.63 mm image height the wide-end corner bundle loses about half its width at the Gr1 rims; that vignetting is kept.
- The traced full-aperture longitudinal spherical aberration is −0.169 / −0.083 / −0.155 mm at wide / mid / tele.
- A real chief ray at 42.0° reaches the 21.63 mm corner at the wide end, about −2.8 % barrel distortion; at the middle and tele positions the corner is reached at 22.9° and 11.5°, about +2.6 % and +3.6 % pincushion. Fig. 7 plots about −2.9 %, +2.5 % and +3.8 % at the corner; its wide-end curve is deepest, about −3.9 %, near 83 % of the image height, where the trace gives −3.8 %.

## Sources

- [JP 2000-187161 A](https://patents.google.com/patent/JP2000187161A/en), Example 3 construction table, aspherical data, Table 1 and Figs. 3 and 7 (read from the J-PlatPat publication images).
- [Sony Japan, SAL24105 specifications](https://www.sony.jp/ichigan/products/archive/SAL24105/spec.html): 11 groups / 12 elements, 0.5 m minimum focus distance, 0.18× maximum magnification, 62 mm filter.
- [mhohner.de, Minolta AF 24-105/3.5-4.5 (D)](https://mhohner.de/sony-minolta/onelens/af24-105f35d): 12 elements / 11 groups, internal focus, 0.5 m and 1:5.49, length 69.0–108.0 mm, released 2000.
- [mhohner.de, Sony Alpha 24-105/3.5-4.5](https://mhohner.de/sony-minolta/onelens/af24-105f35s?lg=e): same design as the Minolta version.
- [Imaging Resource, Konica Minolta 24-105mm f/3.5-4.5 D specifications](https://www.imaging-resource.com/lenses/konica-minolta/24-105mm-f3.5-4.5-d-af/specifications/): 12 elements / 11 groups.
