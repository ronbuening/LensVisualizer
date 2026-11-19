## Patent Reference and Design Identification

**Patent:** US 7,286,303 B2  
**Filed:** June 21, 2005  
**Granted:** October 23, 2007  
**Inventors:** Akio Arakawa; Yuichi Muramatsu  
**Assignee:** Tamron Co., Ltd.  
**Title:** Macro lens  
**Example details:** Tables 1–2, Fig. 1; application US 2006/0285230 A1 paragraphs 0045–0048. No scaling.

The patent prints one numerical example: f = 45.3 mm, F2.8, image height 21.633 mm (the half-diagonal of the 36 × 24 mm frame). The text names 35 mm film, digital still, video and broadcast cameras as uses but no product. No Tamron or OEM lens with this construction has been identified. Two 9-element, 8-group 1:1 macros of the period differ: the Pentax DA 35mm F2.8 Macro Limited is a 35 mm APS-C lens whose rear element stays fixed during focusing, and the Tokina AT-X M35 PRO DX has a different element layout. No mount is assigned.

The grant prints the prescription in columns 6–7 (Tables 1–2); the application prints the same rows (¶0045–0046). In the grant, the aberration-plot wavelengths read 87.56 and 84 nm; the application (¶0048) prints 587.56 and 435.84 nm, the d- and g-lines, so the indices are read at the d-line. Claim 1 of the grant calls the first lens's object-side face concave. The table, the description, Fig. 1 and the application's claim 1 give a convex face. Neither discrepancy affects the table, which governs this model.

## Optical Architecture

Nine spherical glass elements form eight air-separated groups, arranged as two focusing groups. The first seven elements form a retrofocus front group (f = 42.84 mm) built around a Gauss-type core; a weak negative meniscus and a positive element form the rear group (f ≈ −1000 mm). L5 and L6 are cemented at surface 12. The stop is the patent's surface 10, 4.0 mm behind surface 9 and 4.0 mm ahead of surface 11, and moves with the front group.

The patent's surface 1 is a flat plane 3.0 mm ahead of surface 2 with no glass after it; Fig. 1 draws it as a short flat outline. Its purpose is not stated, and as an air-to-air plane it has no optical effect, so the model omits it. Surface labels 2–19 follow the patent, with surface 10 as the stop.

The patent specifies no aspherical surface, cover glass or stabilization.

## Element-by-Element Analysis

### L1: Negative meniscus

nd = 1.69680, νd = 55.5, HOYA LAC14 (exact catalog match). f = −57.10 mm.

The positive object-side radius and smaller positive image-side radius form the negative front element. The patent attributes a diverging action and retention of back focus to it. The claim wording conflict does not change the tabulated curvature.

### L2: Positive meniscus

nd = 1.75520, νd = 27.5, HOYA E-FD4 (exact catalog match). f = +88.51 mm.

This positive element follows the negative front element. The patent describes their combination as compensating distortion changes at close range. Fig. 1 shows surfaces 3 and 4 touching at their edges, with L1's edge carried on a flat land behind the contact. The model keeps the printed 2.0 mm axial gap: L1's rear face ends at 10.2 mm, just short of the contact, and a flat land carries L1's edge out to 12 mm as drawn.

### L3: Biconvex positive

nd = 1.72000, νd = 50.3, HOYA LAC10 (exact catalog match). f = +26.70 mm.

The strong front and weak rear curvatures supply positive power. The patent relates its position to symmetry around the stop and coma compensation.

### L4: Negative meniscus

nd = 1.62004, νd = 36.3, HOYA E-F2 (exact catalog match). f = −29.38 mm.

Its strongly curved rear face borders the stop space. The patent's condition (2) ties its power to that of L5 (see Conditional Expressions).

### L5–L6: Cemented negative-positive pair

L5: nd = 1.71736, νd = 29.5, HOYA E-FD1L (exact catalog match). f = −19.16 mm.  
L6: nd = 1.77250, νd = 49.6, HOYA TAF1 (exact catalog match). f = +24.06 mm.

L5 has a concave front facing the aperture; L6 has a strongly convex rear. The printed common interface is surface 12; no cement layer is modelled. The pair is nearly afocal (f = −386.4 mm), and the pairing of a dense flint (νd 29.5) with a lanthanum flint (νd 49.6) points to a chromatic role.

### L7: Biconvex positive

nd = 1.72000, νd = 50.3, HOYA LAC10 (exact catalog match). f = +42.83 mm.

The last front-group element has a weak front and stronger rear surface. Its rear surface faces the floating gap D15.

### L8: Negative meniscus

nd = 1.72000, νd = 50.3, HOYA LAC10 (exact catalog match). f = −129.99 mm.

This is the first rear-group element. The patent describes its negative power as weaker than L1 and its object-facing surface as convex.

### L9: Biconvex positive

nd = 1.54072, νd = 47.2, HOYA E-FEL2 (exact catalog match). f = +151.47 mm.

This final positive element completes the rear group, which it leaves nearly afocal with L8. The last surface's distance to the image is D19, printed at both states.

## Glass Identification and Selection

The patent prints nd and νd only, read at the d-line (587.56 nm, application ¶0048). All seven distinct pairs match HOYA catalog rows exactly. HOYA's νd rounds to every printed value, including 50.3 for the 1.72000 glass (LAC10, 50.34), where the OHARA equivalent S-LAL10 (50.23) would print 50.2. The production supplier is not stated.

| Glass (HOYA) | nd / νd | Elements | Role |
|---|---|---|---|
| LAC14 | 1.69680 / 55.5 | L1 | Lanthanum crown, negative front meniscus |
| E-FD4 | 1.75520 / 27.5 | L2 | Dense flint, positive meniscus |
| LAC10 | 1.72000 / 50.3 | L3, L7, L8 | Lanthanum crown |
| E-F2 | 1.62004 / 36.3 | L4 | Flint, negative meniscus before the stop |
| E-FD1L | 1.71736 / 29.5 | L5 | Dense flint, negative half of the doublet |
| TAF1 | 1.77250 / 49.6 | L6 | Lanthanum flint, positive half of the doublet |
| E-FEL2 | 1.54072 / 47.2 | L9 | Light flint, rear positive element |

No anomalous-dispersion glass is used, and the patent prints no partial dispersion; the model traces dispersion on the catalog curves.

Fig. 2 plots the infinity aberrations in the d- and g-lines. The model reproduces the d-line spherical aberration (about −0.14 mm at 0.7 of the pupil), the distortion (−2.2 % at the 21.633 mm image height) and the g-line lateral colour (about +0.01 mm at the edge of the field). Its g-line paraxial focus lies about 0.05 mm behind the d-line focus, where the plot shows about 0.02 mm. No single maker's exact catalog rows close that gap (OHARA's give about 0.04 mm), so the patent's g-line data rest on partial dispersions that the catalog curves do not reproduce.

## Focus Mechanism

Floating focus with two moving groups. The patent prints two states, infinity and equal magnification (1:1):

| Spacing | Infinity | 1:1 |
|---|---|---|
| D15 (front group to rear group) | 0.669 mm | 21.832 mm |
| D19 (back focus) | 42.605 mm | 63.767 mm |

With the image plane fixed, the rear group moves 21.162 mm toward the object and the front group, with the stop, moves 42.325 mm, so the two groups separate as focus closes. The patent discloses no cam or drive mechanism; intermediate positions in the model interpolate the gaps linearly.

A paraxial calculation from the printed gaps places the 1:1 object 60.806 mm ahead of surface 2 (57.806 mm ahead of the patent's surface 1). The object-to-image distance is 184.405 mm at magnification −1.000, and the EFL at that state is 44.308 mm. These are calculated values: the patent prints no object distance, and there is no marketed minimum focus distance to compare.

## Conditional Expressions

The patent states three conditions but prints no values for its example. Computed from the table (F = 45.30 mm):

| Condition | Range | Example |
|---|---|---|
| (1) F1/F | 0.6 to 1.3 | −1.26 (F1 = −57.10 mm); 1.26 in magnitude, inside the range |
| (2) F4/F5 | 0.9 to 1.5 | 1.53 (F4 = −29.38 mm, F5 = −19.16 mm), just above the upper limit |
| (3) F2/F | 4.0 to 6.0 | −22.1 (rear group F2 ≈ −1000 mm), outside the range |

The example reproduces the printed focal length, back focus and 1:1 state, so the transcription is not in question. The conflict lies in the patent itself, whose example does not meet its own conditions (2) and (3).

## Model Scope and Limitations

The model's infinity EFL is 45.300 mm. Its paraxial focus lies 0.0004 mm behind the printed image plane; no radius, thickness or index has been adjusted to remove the difference.

The patent prints no rim or iris diameters. All semi-diameters are estimated from Fig. 1 and clear the F2.8 axial beam at infinity and at 1:1; they are not measured rims, and the stop radius follows from F2.8. L3 is kept about 0.7 mm larger than drawn, since the drawn rim would cut noticeably more off-axis light. Fig. 1 draws L5's concave front face ending at about 7.6 mm, inside a flat land beside the stop, and L1's rear face ending inside a flat land at its edge; the model draws both lands. L1, L2, L8 and L9 are square-edged as drawn. At infinity the iris, not a rim, sets the F2.8 beam. At the 21.633 mm image height, a calculated 26.0° field angle (the patent prints none), the corner bundle is partly vignetted by the estimated rims. F2.8 is the infinity aperture; the patent prints no effective f-number for the 1:1 state.

Finite-distance MTF is not offered at the 1:1 state, because the patent prints a magnification rather than an object distance.

## Sources

- [US 7,286,303 B2 grant](https://patents.google.com/patent/US7286303B2/en), Tables 1–2, Fig. 1, conditions (1)–(3) and claim 1.
- [US 2006/0285230 A1 application](https://patents.google.com/patent/US20060285230A1/en), ¶0045–0048 and claim 1.
- [Ricoh Imaging, HD PENTAX-DA 35mm F2.8 Macro Limited](https://www.ricoh-imaging.co.jp/english/products/lens/k/macro/hdpentax-da-35/): 9 elements / 8 groups, 1:1, fixed-rear-element focusing.
- [Tokina, AT-X M35 PRO DX](https://tokinalens.com/product/at_x_m35_pro_dx): 9 elements / 8 groups, 1:1, construction diagram.
