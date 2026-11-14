## Patent Reference and Design Identification

**Patent:** [US 8,203,795 B2](https://patents.google.com/patent/US8203795B2/en)  
**Application Number:** US 13/089,429  
**Filed:** April 19, 2011 (priority KR 10-2010-0095964, October 1, 2010)  
**Granted:** June 19, 2012  
**Inventor:** Jae Myung Ryu  
**Assignee:** Samsung Electronics Co., Ltd.  
**Title:** Macro-lens system and photographing apparatus having the same  
**Example details:** Tables 10–12 and Fig. 12 (PDF pp. 37 and 27); conditional values in Table 13; no scaling

The patent describes five macro designs that focus from infinity to 1:1 at a fixed overall length. Embodiment 5 is stated as f = 59.3 mm, F-number 2.86 and 2ω = 27.0°. Several lines of evidence tie it to the SAMSUNG 60mm f/2.8 Macro ED OIS SSA for the NX system, released in 2011:

1. Twelve elements in nine groups with one aspherical lens and one extra-low-dispersion lens, the construction Samsung published.
2. A 59.3 mm, F/2.86 design against the marketed 60 mm f/2.8; the 27.0° field against the listed 26.4° diagonal angle of view.
3. A printed 1:1 state whose object sits 185.4 mm from the image, against the 0.187 m minimum focus at 1:1.
4. Optical image stabilization: the patent moves one lens of the fixed third group across the axis (Fig. 12). Table 13's Expression 3 value for Embodiment 5 (νd = 81.6) identifies that lens as L8 (1.49700/81.6), which is also the design's only ED-class glass.
5. A 106.0 mm front-vertex-to-image track; less the NX mount's 25.5 mm flange focal distance this leaves about 80.5 mm ahead of the mount, consistent with the 84 mm barrel.
6. The October 2010 Korean priority date, a few months before the lens appeared.

Embodiments 1–3 are all spherical, which rules them out (Embodiment 3 prints the marketed 26.4° field but no asphere). Embodiment 4 shares the element and group counts, the single S4 asphere and the 106 mm length. Embodiment 5 differs mainly in its glass: L2 changes from a catalog 1.64000/60.2 to 1.61780/63.4 and the aspherical L3 from a catalog 1.74330/49.2 to an uncatalogued 1.73968/49.0, which is consistent with a glass-moulded asphere. Embodiment 5 is used here, but no source states which embodiment, if either, is the factory prescription.

The patent prints the inventor's name as Jae-myung Ryu; the corpus form is Jae Myung Ryu.

## Optical Architecture

Twelve elements in nine air-spaced groups form five functional groups, positive–negative–positive–positive–negative:

| Group | Surfaces | Elements | Focal length | Focus | Role |
| ----- | -------- | -------- | -----------: | ----- | ----------- |
| G1 | S1–S5 | L1–L3 (doublet C1 + aspherical singlet) | +31.3 mm | fixed | positive front group |
| G2 | S6–S10 | L4–L6 (singlet + doublet C2) | −20.1 mm | moves toward the image | focusing |
| G3 | S11–S14 | L7, L8 | +74.4 mm | fixed, with the stop | spherical aberration; L8 is the OIS lens |
| G4 | S16–S20 | L9–L11 (doublet C3 + singlet) | +40.6 mm | moves toward the object | compensates the image-plane shift |
| G5 | S21–S22 | L12 | −73.8 mm | fixed | astigmatism and distortion |

The patent explains the layout. The strong negative G2 leaves the axial marginal ray roughly parallel or diverging, so a positive G3 ahead of the stop reconverges it and keeps the moving G4 small and light. The patent's Expressions 1 and 2 bound the third group's focal length, f3/f, which Table 13 gives as 1.26 for Embodiment 5 (model 1.255). Expression 2 (0.5 ≤ f3/f ≤ 1.6) is the form for a design whose third group carries the stabilizer: a longer f3 keeps the image change small when the stabilizing lens shifts. The single negative lens of G5 is kept as one group so as not to lengthen the system.

The iris sits 1.5 mm behind L8, at the patent's stop row between S14 and S16 (ST in Fig. 12), and stays fixed with G3. A 2.8 mm plane plate (1.51680/64.2) and a 1.0 mm air gap complete the 106.0 mm track; the patent text places a filter closest to the image.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = −48.1 mm.

Dense-flint front element, convex to the object, cemented to L2. The 1.84666/23.8 flint appears four times in the design, always as the colour-correcting partner of a crown.

### L2 — Biconvex Positive

nd = 1.61780, νd = 63.4. Glass: PCD4 (HOYA), nearest catalog row; Embodiments 1 and 3 print 1.61800 / 63.4 in this position. f = +35.0 mm.

Positive half of doublet C1. With L1 it forms a weakly positive cemented pair (f = +128 mm).

### L3 — Positive Meniscus (aspherical front)

nd = 1.73968, νd = 49.0. Glass: Unmatched; no catalog row at these coordinates. f = +40.4 mm.

Nearly plano-convex singlet closing G1; it supplies most of the group's +31.3 mm power. Its front face S4 is the design's only asphere; see Aspherical Surfaces.

### L4 — Plano-Concave

nd = 1.56883, νd = 56.0. Glass: BAC4 (HOYA) catalog equivalent. f = −31.8 mm.

First element of the G2 focus group, flat on its object side (S6) and concave toward the image. The patent suggests building G2 from meniscus, concave or plano-concave lenses rather than a biconvex one, to keep the moving group light.

### L5 — Biconcave Negative

nd = 1.51680, νd = 64.2. Glass: BSC7 (HOYA) catalog equivalent. f = −27.2 mm.

Crown front member of doublet C2 and the strongest negative element. The doublet as a whole has f = −65.4 mm.

### L6 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = +43.5 mm.

Dense-flint rear member of C2, convex to the object. A low-dispersion negative crown with a high-dispersion positive flint is the usual achromatizing arrangement for a negative group; it limits the colour change as the group moves.

### L7 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = +160.6 mm.

Weak flint meniscus at the front of the fixed G3. It and L8 reconverge the beam leaving G2 just ahead of the stop.

### L8 — Biconvex Positive (ED, OIS)

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) catalog equivalent — ED fluorophosphate crown. f = +135.4 mm.

Equi-biconvex element (R = ±134.285 mm) just ahead of the stop. It is the design's only ED-class glass and the lens that shifts perpendicular to the axis for image stabilization. Expression 3 (60 ≤ νd) asks for a low-dispersion glass here so that the shift adds little lateral colour; Table 13 lists 81.6 for Embodiment 5. That this is Samsung's one ED element is inferred from the glass; Samsung does not say where it sits.

### L9 — Biconcave Negative

nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = −38.3 mm.

Dense-flint front member of doublet C3, the first element behind the stop.

### L10 — Biconvex Positive

nd = 1.69680, νd = 55.5. Glass: LAC14 (HOYA) catalog equivalent. f = +30.7 mm.

Lanthanum-crown rear member of C3 and the strongest positive element. C3 is weakly positive (f = +130.7 mm) and achromatizes the moving G4.

### L11 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA) catalog equivalent. f = +60.2 mm.

Lanthanum-flint singlet that closes G4 and supplies most of its +40.6 mm power.

### L12 — Biconcave Negative

nd = 1.48749, νd = 70.4. Glass: FC5 (HOYA) catalog equivalent. f = −73.8 mm.

Equi-biconcave G5 (R = ±72.217 mm), fixed 19.3 mm ahead of the filter. The patent assigns it the correction of astigmatic field curvature and distortion; as a negative lens well behind the stop it also lowers the Petzval sum.

## Glass Identification and Selection

The patent prints nd and νd only, with the d-line defined as 587.6 nm. Ten elements resolve to HOYA catalog glasses whose nd matches the printed value to five decimals and νd within 0.05; these are equivalents for dispersion modelling, not production identifications. L2's printed 1.61780 / 63.4 sits 0.0002 below HOYA PCD4 (1.61800 / 63.4), the pair Embodiments 1 and 3 print in the same position, so it takes the PCD4 dispersion curve while the trace keeps the printed nd. L3 has no catalog row within reach of its printed coordinates and keeps its printed nd/νd (Abbe-number dispersion).

| Glass (HOYA equivalent) | nd / νd | Elements | Role |
| ----------------------- | ------: | -------- | ---- |
| FDS90 | 1.84666 / 23.8 | L1, L6, L7, L9 | dense flint, achromatizing partner |
| PCD4 (nearest row) | 1.61780 / 63.4 | L2 | phosphate crown, positive in C1 |
| Unmatched | 1.73968 / 49.0 | L3 | aspherical positive |
| BAC4 | 1.56883 / 56.0 | L4 | barium crown, negative in G2 |
| BSC7 | 1.51680 / 64.2 | L5 | borosilicate crown, negative in C2 |
| FCD1 | 1.49700 / 81.6 | L8 | ED fluorophosphate, OIS lens |
| LAC14 | 1.69680 / 55.5 | L10 | lanthanum crown in C3 |
| TAF1 | 1.77250 / 49.6 | L11 | lanthanum flint, G4 singlet |
| FC5 | 1.48749 / 70.4 | L12 | fluor crown, G5 |

Each of the three doublets joins a crown to the 1.84666/23.8 flint, and G3 pairs the same flint (L7) with the ED crown (L8), so G1 to G4 each carry their own colour correction; this reads as a way to keep colour steady while G2 and G4 move. The one ED glass sits in the stabilizer rather than in the focusing groups.

## Focus Mechanism

Inner focus at constant length. G1, G3 (with the iris) and G5 stay fixed; G2 moves toward the image and G4 toward the object. The gap sums B + C = 12.94 mm and D + E = 33.72 mm stay constant in all three printed states, which confirms that G1, G3 and G5 do not move.

| Gap (mm) | Table 11 | Infinity | M = −0.5 | M = −1.0 |
| -------- | -------- | -------: | -------: | -------: |
| Object to S1 | A | ∞ | 124.9239 | 79.4080 |
| D5 (G1–G2) | B | 2.0000 | 6.2983 | 11.3642 |
| D10 (G2–G3) | C | 10.94 | 6.6417 | 1.5758 |
| D15 (stop–G4) | D | 22.0052 | 11.5409 | 3.5925 |
| D20 (G4–G5) | E | 11.7148 | 22.1791 | 30.1275 |

From infinity to 1:1, G2 travels 9.36 mm and G4 18.41 mm (4.30 and 10.46 mm at half size). Table 11 heads the last column "M = 1.0"; the text and Fig. 12 make it M = −1.0. The printed object distances give 230.9 and 185.4 mm object to image. At those distances the paraxial magnifications are −0.501 and −1.003, with the image 0.14 and 0.34 mm behind the printed plane. With the image plane held, the 1:1 gaps focus paraxially at 79.78 mm from S1 (m = −0.994). Samsung lists 0.187 m minimum focus at 1:1. Positions between the printed states are interpolated, not printed. Samsung drives the focus with its Super Sonic Actuator (SSA).

## Aspherical Surfaces

S4, the front of L3, is the only aspherical surface. The patent's Expression 4 is the standard even asphere with (K + 1) in the root, so its K is used directly:

| Surface | R (mm) | K | A (y⁴) | B (y⁶) | C (y⁸) | D (y¹⁰) |
| ------- | -----: | -: | -----: | -----: | -----: | ------: |
| S4 | 29.064 | 0 | −1.4452e−6 | −2.54447e−9 | 0 | 0 |

Both terms are negative on a convex surface, so the surface falls away from its sphere toward the rim, by about 0.029 mm at the modelled 11.3 mm semi-diameter. Weakening the positive power of the marginal zone this way offsets the undercorrected spherical aberration a fast positive front group would otherwise add; the patent describes neither the asphere's purpose nor how it is made. The uncatalogued L3 glass suggests a glass-moulded element, but that is an inference.

## Image Stabilization

The patent allows either G2 or G3 to carry the stabilizer and illustrates G3 in Figs. 10 and 12: one of its two lenses shifts perpendicular to the axis. Placing it in a group that stays fixed during focus simplifies the actuator and its control. Expression 2 keeps f3 long enough that the shift does not degrade the image badly, and Expression 3 asks for νd ≥ 60 in the shifting lens to limit lateral colour. In Embodiment 5 only L8 (νd 81.6) satisfies Expression 3, so it is the stabilizing lens.

## Model Scope and Limitations

The prescription is unscaled. The model traces EFL 59.265 mm against the stated 59.3 mm and back focus 0.972 mm behind the plate against the printed G = 1.0 mm; the 0.028 mm residual is kept. Real-ray longitudinal spherical aberration at infinity is about 0.06 mm at full aperture.

The patent prints no clear apertures. The semi-diameters follow the element edges of Fig. 12, which is drawn to scale: square rims for C1 (13.7 mm), L3 (11.3 mm), C2 (9.4 mm, level with L8 as drawn), L7, L8, C3, L11 and L12. Where the figure ends a curved face short of the element's edge, the optical rim ends with the curve and a flat land carries the face out to the edge: L4's concave rear face stops at 8.8 mm inside the 9.9 mm edge of its plane front, and L6's rear face at 8.8 mm inside C2's edge. L3's rim also passes the whole axial beam at 1:1. Wide open at infinity the rims pass about 41% of the beam at the 14.2 mm corner (relative illumination about 39%); the patent gives a marginal ray ratio of 32.1 at 14.25 mm image height for Embodiment 5 (Expression 5, listed as Expression 4 in Table 13). Traced from the printed object points, about 58% of the beam reaches the corner at 0.5× and 63% at 1:1. The iris radius, 8.48 mm, follows from F/2.86; Fig. 12 draws about 8.5 mm. Eleven elements take their dispersion from catalog curves (L2 from PCD4, the nearest row); L3 uses the Abbe-number model. The OIS shift is not modelled.

## Sources and References

1. [US 8,203,795 B2](https://patents.google.com/patent/US8203795B2/en), Samsung Electronics Co., Ltd., granted June 19, 2012: Embodiments 1–5, Tables 1–13 and the lens sections.
2. [Imaging Resource, Samsung 60mm f/2.8 Macro ED OIS SSA specifications](https://imaging-resource.com/lenses/samsung/60mm-f2.8-macro-ed-ois-ssa-nx/specifications/): 12 elements in 9 groups with 1 aspherical and 1 extra-low-dispersion lens, Super Sonic Actuator focus drive, 18.7 cm minimum focus, 1:1, 7 rounded blades, 52 mm filter, 84 mm length, 26.4° diagonal angle of view, released 2011.
3. [LensTip, Samsung NX 60 mm f/2.8 Macro ED OIS SSA specifications](https://www.lenstip.com/979-Samsung_NX_60_mm_f_2.8_Macro_ED_OIS_SSA-lens_specifications.html): 0.187 m closest focus, 1:1, f/32 minimum aperture, 7 blades, 52 mm filter.
4. [Samsung NX-mount](https://en.wikipedia.org/wiki/Samsung_NX-mount), Wikipedia: 25.5 mm flange focal distance.
