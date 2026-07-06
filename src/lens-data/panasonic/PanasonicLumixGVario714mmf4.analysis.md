## Patent Reference and Design Identification

**Patent:** US 2010/0194930 A1  
**Application Number:** 12/696,454  
**Filed:** January 29, 2010  
**Published:** August 5, 2010  
**Priority:** February 2, 2009 (JP 2009-021832 and JP 2009-021833)  
**Inventors:** Kyoichi Miyazaki; Keiichi Zaitsu  
**Assignee:** Panasonic Corporation  
**Title:** Zoom Lens System, Interchangeable Lens Apparatus and Camera System  
**Embodiment analyzed:** Numerical Example 1 (Embodiment 1, FIG. 1)

The prescription used here is Numerical Example 1, not Numerical Example 2. The production Panasonic Lumix G Vario 7-14 mm f/4.0 ASPH. (H-F007014) is specified as a 16-element, 12-group Micro Four Thirds lens with two aspherical elements and four ED elements. Example 1 has the same 16-element count and gives 12 air-separated groups because L4 and L5 are separated by a 0.26000 mm air gap. Example 2 is optically very close but cements L4 and L5, reducing the patent example to 11 groups. That is a material mismatch against the production specification, so Example 1 is the better production correspondence.

The remaining identification evidence is consistent: Example 1 gives a patent focal-length range of 7.2006-13.6229 mm, a patent maximum image height of 10.815 mm, two aspherical surfaces, four nd = 1.49700 / νd = 81.6 ED-class elements, and a single negative fourth-unit rear focusing element that moves to the image side for close focus. The official lens specification gives a 7-14 mm focal-length range, f/4.0 aperture range, Micro Four Thirds mount, 0.25 m minimum focus distance, and approximately 0.08x maximum magnification.

## Optical Architecture

The design is a five-unit negative-lead retrofocus zoom with power sequence negative-positive-positive-negative-positive. It is a mirrorless ultra-wide-angle zoom: the front negative group supplies the large field coverage and back-focal clearance, while the positive relay and fixed rear group control image-side ray angles.

The system contains 16 glass elements in 12 air-separated groups. G1 contains five air-spaced elements: three negative menisci, an ED biconcave negative element, and a positive flint meniscus. G2 is a cemented negative-positive doublet and carries the aperture stop. G3 is the main relay and chromatic-correction unit, made from two cemented doublets followed by two ED singlets. G4 is a single weak negative focusing meniscus. G5 is a fixed rear cemented doublet whose final surface is aspherical.

During zooming from wide to telephoto, G1 moves image-side, while G2, G3, and G4 move object-side; G5 remains fixed relative to the image surface. The dominant variable gap is d10 between G1 and G2, which closes from 19.2075 mm to 1.9157 mm. The rear gap d26 between G4 and G5 opens from 5.1612 mm to 18.0524 mm. Total track decreases from 95.5429 mm at wide to 89.7896 mm at telephoto.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.80420, νd = 46.5. Glass: lanthanum flint class (804/465, catalog match uncertain). f = -69.5 mm.

L1 is the first large-diameter negative meniscus of the retrofocus front group. Its two positive radii create a convex-to-object meniscus with negative power, bending the incoming ultra-wide field without placing all of the front-group power on a single steep surface. The element shape factor, 4.184, satisfies the patent's front-meniscus condition (7).

This glass should not be identified as OHARA S-LAH63. S-LAH63 has essentially the same nd but νd = 39.59, not the patent's νd = 46.5. The prescription is better recorded as a high-index lanthanum-flint class glass whose exact public catalog identity is uncertain.

### L2 — Negative Meniscus, convex to object

nd = 1.80420, νd = 46.5. Glass: lanthanum flint class (804/465, catalog match uncertain). f = -52.4 mm.

L2 continues the meniscus cascade and has greater negative power than L1. Its shape factor is 3.750, again within the patent's preferred range. Using the same 804/465 glass as L1 keeps the two largest front negative elements thermally and mechanically similar while distributing the retrofocus bending over two separate components.

### L3 — Negative Meniscus with rear asphere

nd = 1.80800, νd = 40.9. Glass: high-index lanthanum flint class (808/409, catalog match uncertain). f = -35.1 mm.

L3 is the strongest of the three initial negative menisci and carries the first aspherical surface on its image-facing side. This is the most sensitive location for wide-angle distortion and off-axis coma because the chief-ray height is still large. The rear asphere reduces the aberration burden that would otherwise fall on the later relay groups.

The nd/νd pair does not justify a confident Hoya TAFD33 assignment. It is retained here as an 808/409 high-index lanthanum-flint class glass.

### L4 and L5 — Air-spaced ED negative plus positive flint meniscus

L4: nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate crown. f = -33.9 mm.  
L5: nd = 1.80610, νd = 33.3. Glass: dense lanthanum flint class (806/333, NBFD15/H-ZLaF56 class). f = +30.7 mm.

Example 1 separates L4 and L5 by a 0.26000 mm air gap. That air gap is the defining production-match difference from Example 2, where the same pair is cemented. The pair is still functionally a chromatic corrector: the ED negative element and high-index flint positive meniscus sit at the rear of G1, where wide-angle chief-ray height remains significant and lateral color is a primary residual.

OHARA S-LAH53 matches nd = 1.80610 but has νd = 40.92, whereas the patent requires νd = 33.3. The better identification is therefore an 806/333 dense lanthanum-flint class glass.

### L6 and L7 — Cemented G2 variator doublet

L6: nd = 1.74330, νd = 49.2. Glass: lanthanum flint class (743/492; S-LAM60/H-LaF53/NBF1 class). f = -14.4 mm.  
L7: nd = 1.67270, νd = 32.2. Glass: dense flint class (673/322; E-FD5/SF5 class). f = +10.4 mm.

G2 is a compact cemented doublet with net positive power, f = +40.62 mm. It moves object-side during zooming and carries the aperture stop. Its axial position gives it strong leverage over magnification while limiting the size and weight of the moving unit.

OHARA S-TIM22 is 1.64769 / 33.79, not 1.67270 / 32.2. The patent glass is therefore recorded as a 673/322 dense-flint class material.

### L8 and L9 — First G3 cemented doublet

L8: nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA). f = -16.3 mm.  
L9: nd = 1.51680, νd = 64.2. Glass: N-BK7 / S-BSL7 class borosilicate crown. f = +16.6 mm.

This doublet sits immediately after the stop. The very high-dispersion dense flint L8 and low-dispersion crown L9 form a near power-balanced chromatic corrector at a location where marginal-ray height is high. Its purpose is more corrective than power-generating.

S-TIH53 is a strong catalog match for L8. L9 is best described as BK7-family borosilicate crown; the patent's nd is closer to conventional BK7 than to the exact OHARA S-BSL7 value, though the class equivalence is optically close.

### L10 and L11 — Second G3 cemented doublet

L10: nd = 1.51680, νd = 64.2. Glass: N-BK7 / S-BSL7 class borosilicate crown. f = -12.6 mm.  
L11: nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate crown. f = +18.2 mm.

This cemented pair supplies controlled negative power inside G3 while adding another ED correction site. The L10/L11 combination helps keep the relay group compact while reducing axial color and secondary color residuals that would otherwise grow through the zoom range.

### L12 — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate crown. f = +63.3 mm.

L12 is a weak ED positive meniscus with both radii negative, so its convex surface faces the image. Its weak power makes it primarily a chromatic and field-shape trim element rather than a dominant power component.

### L13 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate crown. f = +28.4 mm.

L13 is the rearmost G3 element and contributes substantial positive relay power. It is also the fourth ED-class element in the design. Its position near the rear of the positive relay group helps suppress both axial color and lateral color as the image-side ray geometry changes during zooming.

### L14 — Negative Meniscus, G4 focusing unit

nd = 1.51823, νd = 59.0. Glass: S-NSL3 (OHARA). f = -102.0 mm.

L14 is the entire fourth lens unit and is the only focusing element. It is a very weak negative meniscus, which reduces focal-length and image-magnification change when it is moved for contrast-AF wobbling. The patent's condition (4), fW/f4 = -0.071, confirms that this group is deliberately weak.

At close focus, G4 moves image-side. Therefore the G3-G4 gap increases and the G4-G5 gap decreases in this embodiment.

### L15 and L16 — Fixed rear cemented doublet

L15: nd = 1.80518, νd = 25.5. Glass: S-TIH6 / N-SF6 class dense flint. f = -51.0 mm.  
L16: nd = 1.52300, νd = 70.1. Glass: unmatched crown class (523/701, likely phosphate/fluorophosphate). f = +31.7 mm.

G5 remains fixed relative to the image surface and has net positive power, f = +80.79 mm. It acts as a rear field and image-side ray-angle correction group. The dense-flint/crown pairing provides a strong chromatic correction site close to the image plane, and the final aspherical surface provides field-curvature and astigmatism correction.

L15 is identified as S-TIH6 / SF6 class. The nd/νd pair is an exact practical match to OHARA S-TIH6. L16 remains unmatched against common public catalogs and is therefore recorded generically as a 523/701 crown-class material.

## Glass Identification and Selection

| Element(s) | nd | νd | Identification | Confidence / note |
|---|---:|---:|---|---|
| L1, L2 | 1.80420 | 46.5 | Lanthanum flint class, 804/465 | Exact public catalog match not established; not S-LAH63 |
| L3 | 1.80800 | 40.9 | High-index lanthanum flint class, 808/409 | Exact public catalog match not established |
| L4, L11-L13 | 1.49700 | 81.6 | S-FPL51 / FCD1 class ED fluorophosphate crown | High confidence by nd/νd match |
| L5 | 1.80610 | 33.3 | Dense lanthanum flint class, 806/333 | Not S-LAH53; Hoya/CDGM class match more plausible |
| L6 | 1.74330 | 49.2 | S-LAM60 / H-LaF53 / NBF1 class | Close class match; patent value slightly differs from current S-LAM60 catalog nd |
| L7 | 1.67270 | 32.2 | Dense flint class, 673/322 | Not S-TIM22 |
| L8 | 1.84666 | 23.8 | S-TIH53 (OHARA) | High confidence |
| L9, L10 | 1.51680 | 64.2 | N-BK7 / S-BSL7 class borosilicate crown | High confidence as BK7-family crown |
| L14 | 1.51823 | 59.0 | S-NSL3 (OHARA) | High confidence |
| L15 | 1.80518 | 25.5 | S-TIH6 / N-SF6 class | High confidence |
| L16 | 1.52300 | 70.1 | Unmatched crown class, 523/701 | Public catalog match not established |

The main chromatic strategy is distributed rather than concentrated. L4 places ED glass in the front group for lateral color at large chief-ray heights. L11, L12, and L13 place ED glass inside the main relay group for axial and lateral color through the zoom range. The rear L15/L16 pair then trims residual color and field shape close to the image plane.

## Focus Mechanism

Focusing is performed by G4, a single weak negative meniscus L14. The patent gives the direction: G4 moves to the image side when focusing from infinity to a close object. It does not publish close-focus spacing tables for Example 1.

The data file therefore uses a paraxial finite-conjugate solve for Panasonic's 0.25 m minimum focus distance. The solve keeps the image plane fixed and moves only G4, increasing d24 and decreasing d26 by the same amount.

| Zoom state | d24 infinity | d24 close | d26 infinity | d26 close | G4 shift | Paraxial magnification |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 2.5261 | 3.3297 | 5.1612 | 4.3576 | +0.8036 | -0.041x |
| Middle | 2.0100 | 3.2050 | 10.9650 | 9.7700 | +1.1950 | -0.056x |
| Telephoto | 1.8500 | 3.6620 | 18.0524 | 16.2404 | +1.8120 | -0.077x |

The telephoto close-focus magnification is close to the production specification of approximately 0.08x, which is a useful independent check on the focus solve.

## Aspherical Surfaces

The patent uses the standard even-order aspheric sag equation:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_n h^n
$$

Here K is the standard conic constant, with K = 0 giving a spherical base.

### Surface 6A — Rear of L3

R = 11.47060 mm.

| K | A4 | A6 | A8 | A10 | A12 |
|---:|---:|---:|---:|---:|---:|
| -4.01413e-1 | -2.82803e-5 | -1.13654e-7 | -7.54243e-10 | +5.36525e-12 | -3.87978e-14 |

This rear front-group asphere is the primary wide-angle correction surface. Its negative conic and negative fourth-order term reduce peripheral power relative to a simple spherical meniscus, controlling distortion and coma from the large off-axis field.

### Surface 29A — Rear of L16

R = -39.99340 mm.

| K | A4 | A6 | A8 | A10 | A12 |
|---:|---:|---:|---:|---:|---:|
| 0 | +5.16711e-5 | +2.64198e-7 | -6.34113e-9 | +9.00687e-11 | -4.31222e-13 |

The final rear-group asphere acts near the image plane and primarily trims field curvature, astigmatism, and image-side chief-ray behavior. Because G5 is fixed during zooming and focusing, this correction remains tied to the sensor-side geometry.

## Chromatic Correction Strategy

The design uses four ED-class fluorophosphate elements at two different ray-height regimes. L4 sits in G1 where chief-ray height is high at wide angle, so it primarily supports lateral color correction. L11, L12, and L13 sit in G3, where marginal-ray height and relay power dominate, so they support axial color correction and secondary-spectrum suppression.

The patent gives only nd and νd values, not full line-index sets for every element. The design should therefore not be described as apochromatic from the patent data alone. It is better characterized as an ED-assisted, well-corrected ultra-wide zoom achromat.

## Conditional Expressions

The patent's Example 1 satisfies the conditions for Embodiments 1-5, 7, and 8. Conditions involving only paraxial or prescription quantities were independently recomputed.

| Condition | Expression | Patent range | Example 1 value |
|---|---|---:|---:|
| (1) | fW/f1 | -0.65 to -0.45 | -0.483 |
| (2) | fW/f2 | 0.1 to 0.3 | 0.177 |
| (3) | fW/f3 | 0.25 to 0.5 | 0.320 |
| (4) | fW/f4 | -0.1 to -0.05 | -0.071 |
| (5) | fW/f5 | 0.01 to 0.15 | 0.089 |
| (6) | DISW | < -8% | -9.81% |
| (7) | (R11 + R12)/(R11 - R12) | 2.3 to 10 | 4.184 |
| (8) | (R21 + R22)/(R21 - R22) | 2.3 to 10 | 3.750 |
| (9) | (R31 + R32)/(R31 - R32) | 2.3 to 10 | 3.535 |
| (10) | DL/YM | 1.4 to 2.5 | 1.658 |
| (11) | BFW/YM | 1.2 to 1.6 | 1.422 |

Condition (6) is important for the design philosophy. The patent permits substantial residual barrel distortion because excessive geometric correction would make coma and astigmatism correction harder and would increase lens size. That trade-off is typical of compact digital ultra-wide zooms.

## Verification Summary

The prescription was re-entered from Example 1 and checked with an independent d-line paraxial ray trace. Aspheres do not change first-order paraxial values because their vertex radii are used for paraxial power.

| Quantity | Patent | Computed |
|---|---:|---:|
| EFL, wide | 7.2006 mm | 7.2005 mm |
| EFL, middle | 9.9053 mm | 9.9051 mm |
| EFL, telephoto | 13.6229 mm | 13.6227 mm |
| BFD, wide | 15.38321 mm | 15.38279 mm |
| BFD, middle | 15.38860 mm | 15.38807 mm |
| BFD, telephoto | 15.39895 mm | 15.39825 mm |
| Total track, wide | 95.5429 mm | 95.5429 mm |
| Total track, telephoto | 89.7896 mm | 89.7896 mm |
| G1 focal length | -14.89596 mm | -14.8960 mm |
| G2 focal length | +40.61921 mm | +40.6192 mm |
| G3 focal length | +22.48920 mm | +22.4892 mm |
| G4 focal length | -101.96007 mm | -101.9601 mm |
| G5 focal length | +80.78660 mm | +80.7866 mm |

The surface-by-surface Petzval sum is +0.007924 mm^-1, corresponding to a Petzval radius of approximately -126.2 mm under the sign convention used here. That is relatively gentle for a 7.2 mm ultra-wide-angle design and is consistent with the fixed rear field-correction doublet.

The patent does not publish semi-diameter data. The data file therefore uses estimated clear apertures. The last-surface semi-diameter is anchored to Example 1 condition (10), DL/YM = 1.658; with YM = 10.815 mm, this corresponds to an effective full diameter of about 17.93 mm, or a semi-diameter of about 8.96 mm. Other semi-diameters are conservative rendering clearances constrained by edge thickness, gap sag, and element-diameter continuity.

## Sources

- US 2010/0194930 A1, "Zoom Lens System, Interchangeable Lens Apparatus and Camera System" — primary source for prescription, zoom spacings, aspherical coefficients, embodiment prose, and conditional expressions.
- Panasonic official H-F007014 specifications — production focal length, aperture, lens construction, mount, minimum focus distance, and magnification.
- Micro Four Thirds official product listing for H-F007014 — production lens construction and system-format confirmation.
- OHARA optical glass catalog and datasheets — S-FPL51, S-TIH53, S-NSL3, S-TIH6, S-LAH63, S-LAH53, S-LAM60, and S-TIM22 checks.
- Hoya, Schott, CDGM, and Sumita catalog cross-reference tables — class-level checks for 804/465, 806/333, 673/322, and 523/701 glasses where a single public catalog identity could not be established.
