## Patent Reference and Design Identification

**Patent:** GB 423,468 A
**Application Number:** 5397/34
**Filed:** February 19, 1934
**Published:** February 1, 1935 (complete specification accepted)
**Priority:** March 9, 1933, Germany
**Assignee:** Ernst Leitz GmbH
**Title:** Improvements in or relating to Lens Systems for Rapid Objectives
**Example details:** Sole numerical example, page 2 (prescription and ray-intersection tables) and the single drawing sheet; printed at f = 100 mm, f/2, and scaled uniformly by 0.5 in the data file.

The copy transcribed is the **amended specification**, reprinted in 1936 after a decision of the Assistant Comptroller dated February 24, 1936; the 1935 year in the data file is the acceptance year. The specification names the company as applicant and no individual inventor, so the data file lists no authors. The Austrian counterpart, AT 141 288 B, shares the priority, applicant and numerical example.

The association with the Leitz Summar 5 cm f/2 is a production correlation, not a manufacturer-confirmed prescription:
1. The E. Leitz, Inc. price list that introduced the Leica Model F (1933) offers the Summar 50 mm f/2 in rigid and collapsible mounts, in the year of the patent's German priority. The two mounts share one optical design. About 127,950 were made through 1939, all in screw mount.
2. The Leitz sectional drawing "THE SUMMAR" shows six elements in four groups: two outer singlets around two inner cemented pairs. Every element shape matches the patent, including both cemented interfaces convex toward the object and the plane front face of the last element.
3. The patent states an angle of view of about 52° at full aperture. The data file uses 48°; the 24 × 36 mm diagonal at 50 mm subtends 46.8°.

The Summitar and Summicron sections printed beside it on the same Leitz sheet are later designs, and the Summarex is a different lens.

## Optical Architecture

The six-element, four-group layout is a double-Gauss form: two positive outer singlets (L1, L6) and two inner cemented "dispersing" menisci (L2–L3, L4–L5) concave toward one another. The patent's claim is that both curved cemented interfaces exert a collective action for all colours, are less curved than the air-exposed faces of their members, and are convex toward the incident light (page 1 and claim 1). That orientation makes the design asymmetric: the front cemented member is a positive meniscus cemented to a negative meniscus, while the rear one is a biconcave element cemented to a biconvex one.

All ten radii, the nine thicknesses and air spaces, and the back gap are scaled by 0.5 from the printed f = 100 mm example; indices and Abbe numbers are unchanged. The scaled vertex length is 30.125 mm. The back gap is the patent's printed near-axis image distance, 68.3 mm, scaled to 34.15 mm; the computed paraxial back focus of the transcribed prescription is 34.099 mm, and the 0.051 mm difference is kept rather than refocused. The traced focal length is 49.97 mm (patent: 100.0 mm before scaling).

The patent's second page also tabulates the image distance at each surface for a near-axis ray, and image distances at 1:2.7 and 1:2. The transcribed prescription reproduces the per-surface values within 0.6 mm at the printed scale and the real-ray values at 1:2.7 and 1:2 (67.97 and 68.23 mm against the printed 68.0 and 68.2 mm).

## Element-by-Element Analysis

Focal lengths are thick-lens values for each element alone in air at the D line, computed from the scaled prescription; the patent prints none. The cemented pairs have much weaker combined powers: about −222 mm for L2–L3 and −378 mm for L4–L5.

### L1: Positive Meniscus, convex to object

nD = 1.6202, νD = 60.4. Glass: Unmatched (SK16-type dense crown). f = +76.7 mm.

L1 is the front collective singlet, a weak meniscus (R1 = +39.32 mm, R2 = +219.1 mm). Its glass is shared by L2, L5 and L6.

### L2: Positive Meniscus, convex to object

nD = 1.6202, νD = 60.4. Glass: Unmatched (SK16-type dense crown). f = +33.6 mm.

L2 is the thick front member of the front cemented meniscus, cemented to L3 at R4 (+75.3 mm), the first of the two collective interfaces the patent claims.

### L3: Negative Meniscus, convex to object

nD = 1.5814, νD = 40.8. Glass: LF5 (Schott). f = −24.5 mm.

L3 is the thin light-flint partner of L2. Its strongly curved rear face (R5 = +11.88 mm) borders the central air space. The patent notes that R4 still converges the near-axis ray although L3's index is lower than L2's.

### L4: Biconcave Negative

nD = 1.5673, νD = 42.8. Glass: S-TIL26 (Ohara; LF6-type equivalent). f = −19.8 mm.

L4 is the thin light-flint front member of the rear cemented meniscus. Its front face (R6 = −16.555 mm) is concave to the central air space and its cemented rear face (R7 = +36.005 mm) is weakly convex toward the object, so the element is biconcave rather than a meniscus. Its glass differs from L3's, so the two flint members are not identical.

### L5: Biconvex Positive

nD = 1.6202, νD = 60.4. Glass: Unmatched (SK16-type dense crown). f = +23.8 mm.

L5 is the thick crown member cemented to L4 at R7, the second collective interface. With R7 convex toward the object and R8 = −23.59 mm, it is biconvex.

### L6: Plano-Convex Positive

nD = 1.6202, νD = 60.4. Glass: Unmatched (SK16-type dense crown). f = +58.9 mm.

L6 is the rear collective singlet, with a plane front face (R9) and a convex rear face (R10 = −36.525 mm). The Leitz sectional drawing shows the same plano-convex form.

## Glass Identification and Selection

The patent prints three glasses: nD = 1.6202 / νD = 60.4 for L1, L2, L5 and L6; 1.5814 / 40.8 for L3; and 1.5673 / 42.8 for L4. The patent states its indices for the D line, and its isoplanasy table is computed for the D and G lines, so the data file keeps the values at the sodium D line (589.29 nm) without conversion to the helium d line (587.56 nm).

At the D line, Schott LF5 matches L3 to within 0.0001 in index and 0.05 in Abbe number, and Ohara S-TIL26 (an LF6-type light flint) matches L4 to within 0.0001 and 0.01; both are catalog equivalents, and the 1933 melts are not documented. The crown of L1, L2, L5 and L6 lies 0.00012 below SK16-type rows at the D line, outside the match tolerance, so it stays unmatched and its dispersion is modeled from nD and νD alone. The pairing of a dense crown with lower-index light flints in each cemented member gives the interfaces their collective, colour-correcting role; nothing in the patent indicates anomalous partial dispersion.

## Focus Mechanism

The patent gives only the infinity prescription, and the model is infinity-only. The production Summar focuses on a helicoid to 1 m; that movement is not modeled, and the close-focus value in the data file is a placeholder rather than the lens's minimum focus distance.

## Aspherical Surfaces

The design is all spherical; R9 is plane.

## Model Scope and Limitations

The patent prints the central air space A2 (15.72 mm, 7.86 mm scaled) but not the diaphragm position. The model places the stop at its midpoint, 3.93 mm behind R5, following the broadly symmetric Leitz sectional; that drawing actually shows the iris slightly behind the midpoint, at roughly 59 % of the gap. The iris diameter is set by the engine from f/2. The aperture scale, f/2 to f/12.5 without click stops, follows the production lens.

Semi-diameters are not printed. They follow the patent drawing, which is close to full size at the printed f = 100 mm, and are not measured clear apertures. Both cemented members carry one rim height, 11.7 mm, as drawn; the outer singlets sit just inside the drawn outline (13.0 and 12.4 mm against about 13.3 and 12.7 mm). The concave faces R5 and R6 follow their drawn rims, 8.9 and 9.0 mm, and both pass the full f/2 axial beam. With the stop at the midpoint of A2, the rim of R5 reaches 0.08 mm past the stop plane; an iris where the Leitz sectional draws it, about 4.6 mm behind R5, would clear that rim by about 0.6 mm.

Off axis, the rear elements clip the oblique bundles increasingly toward the 24° half-field; the amount depends on the estimated rims.

## Sources

- [GB 423,468 A](https://patents.google.com/patent/GB423468A/en): amended specification; page 1 description, page 2 prescription, ray-intersection tables and claims, one drawing sheet.
- [AT 141 288 B](https://patents.google.com/patent/AT141288B/en): Austrian counterpart with the same example and drawing.
- [E. Leitz, Inc. price list, 1933](https://www.pacificrimcamera.com/rl/00305/00305.pdf) (Summar in rigid and collapsible mounts) and [Leitz catalog, 1934](https://www.pacificrimcamera.com/rl/01320/01320.pdf).
- [Leitz sectional drawings "The Summar", "The Summitar", "The Summicron"](https://zeissikonveb.de/onewebmedia/Marco/Summar-Summitar-Summicron%20englisch.jpg): maker brochure scan; schematic sections, not engineering drawings.
- [Leica Society International, "Rare and Uncommon 50 mm Lenses"](https://leicasocietyinternational.org/blog/rare-and-uncommon-50-mm-lenses): 6 elements / 4 groups, production 1933–1939.
- [Ken Rockwell, Leica 50mm f/2 Summar](https://kenrockwell.com/leica/50mm-f2-summar.htm): aperture scale f/2–12.5 without click stops.
