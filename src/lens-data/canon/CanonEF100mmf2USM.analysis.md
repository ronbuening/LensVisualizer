## Patent Reference and Design Identification

**Patent:** JP H04-255813 A
**Application Number:** JP1991-038069
**Filed:** 1991-02-07
**Published:** 1992-09-10
**Inventor:** Hiroshi Endo
**Applicant:** Canon Inc.
**Title:** Inner-focus telephoto lens
**Example details:** Numerical Example 1, table on pp. 3–4; section in Fig. 1; aberrations in Fig. 4. Millimetres as printed.

Canon lists the EF 100mm f/2 USM, marketed in October 1991, with eight elements in six groups and states that lens group 5 moves for rear focusing. The patent, filed in February 1991, has that layout: four separate front elements, then two cemented doublets, the first of which is the fifth group and moves to focus. All three numerical examples share it, each at F = 100, FNO 1:2, 2ω = 24.4°.

Example 1 is chosen on Canon's published section, which draws the rear doublet as a thin negative meniscus in front of a thick biconvex element, with the cemented face convex toward the object. Examples 1 and 3 have that order (R14 near +43.7 mm); Example 2 reverses it (R14 = −47.69 mm, biconvex element first). Fitted to 14 surfaces of the section at one scale, Example 1 leaves 1.48 px rms, Example 3 1.86 px and Example 2 2.45 px; for the rear doublet alone the figures are 0.52, 1.28 and 3.92 px. The section draws surface 2 flat, the one feature nearer Example 2, by under 1.6 px.

The 1998 amendment revises the claims and corrects group 3 from negative to positive in ¶0008. It changes no table value and no example number.

The match is an inference. Canon publishes no radii and no source ties a numerical example to the production lens, so the exact production prescription is unproved.

## Optical Architecture

Eight spherical glass elements form six air-separated groups. The power sequence is positive, negative, positive: four separated front singles, a central negative cemented doublet behind the stop, and a final positive cemented doublet. These functional groups have f1 = +90.66 mm, f2 = −71.71 mm and f3 = +67.74 mm.

Table 1 prints f12/f = 2.75, |f2|/f = 0.717 and f3/|f2| = 0.944; the model gives 2.752, 0.717 and 0.945.

The stop sits at its printed position. The patent lists no camera-side plate and none is modeled.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.55962, νd = 61.20. Glass: S-BAL50 (OHARA catalog equivalent). f = +256.06 mm in air.

Positive front element of the first group, with a weakly curved rear face (R2 = −686.60 mm).

### L2 — Positive Meniscus

nd = 1.65160, νd = 58.50. Glass: S-LAL7 (OHARA catalog equivalent). f = +138.61 mm in air.

Positive meniscus 0.20 mm behind L1. With L1 and L3 it converges the axial beam gradually, which ¶0011 uses to hold down spherical aberration.

### L3 — Positive Meniscus

nd = 1.78590, νd = 44.20. Glass: S-LAH51 (OHARA catalog equivalent). f = +59.11 mm in air.

Strongest element of the first group, 9.70 mm thick on axis. Its rear face and L4's front face bound the negative air lens that ¶0012 credits with correcting spherical aberration and sagittal flare.

### L4 — Negative Meniscus

nd = 1.75550, νd = 25.10. Glass: Unmatched (no catalog row at these coordinates). f = −41.97 mm in air.

Negative meniscus closing the first group, 9.00 mm in front of the stop. Its concave rear face balances the spherical aberration of L1 to L3.

### L5 — Positive Meniscus

nd = 1.80518, νd = 25.40. Glass: SF6 (Schott catalog equivalent). f = +185.21 mm in air.

Weak positive front member of the focusing doublet.

### L6 — Biconcave Negative

nd = 1.55962, νd = 61.20. Glass: S-BAL50 (OHARA catalog equivalent). f = −51.66 mm in air.

Negative member of the focusing doublet, which is Canon's fifth group and has f = −71.71 mm as a pair.

### L7 — Negative Meniscus

nd = 1.80518, νd = 25.40. Glass: SF6 (Schott catalog equivalent). f = −119.53 mm in air.

Thin negative meniscus at the front of the rear doublet, convex toward the object, as in Canon's section.

### L8 — Biconvex Positive

nd = 1.78590, νd = 44.20. Glass: S-LAH51 (OHARA catalog equivalent). f = +43.06 mm in air.

Thick biconvex member of the rear doublet, which has f = +67.74 mm as a pair. Cementing the group lets it correct its own colour, limiting chromatic change as group 2 moves (¶0014).

## Glass Identification and Selection

The patent names no commercial glass. Seven of the eight printed pairs match catalog rows, and the model traces those rows. They are catalog equivalents, not production identifications. L4's pair has no row in the repo catalog, so the model traces it from nd and νd, with ΔPgF +0.0190 from the published P_g,F of OHARA TPH55, the catalogue glass at these coordinates.

The table names no spectral line for N and ν. The patent's plots use the d and g lines and the catalog rows match at nd and νd, so the pairs are read at the d line.

| Element | nd | νd | Catalog equivalent |
| --- | ---: | ---: | --- |
| L1, L6 | 1.55962 | 61.20 | S-BAL50 (OHARA) |
| L2 | 1.65160 | 58.50 | S-LAL7 (OHARA) |
| L3, L8 | 1.78590 | 44.20 | S-LAH51 (OHARA) |
| L4 | 1.75550 | 25.10 | Unmatched |
| L5, L7 | 1.80518 | 25.40 | SF6 (Schott) |

The model's g-line focus agrees with Fig. 4 within about 0.03 mm. At infinity g−d is −0.03 mm paraxially and +0.18 mm at the top of the pupil, against about 0 and +0.20 mm in the plot; at 1 m it is +0.07 and +0.45 mm against about +0.09 and +0.45 mm.

## Focus Mechanism

The patent calls this inner focus and Canon calls it rear focusing. Group 2, the doublet L5 and L6, moves toward the image (¶0009) while the stop and groups 1 and 3 stay put.

The table marks D9 and D12 variable but prints only their infinity values. The near gaps are solved, not printed: paraxially, with the image plane fixed, for Canon's 0.9 m minimum focus measured from object to image.

| State | D9, mm | D12, mm | Magnification |
| --- | ---: | ---: | ---: |
| Infinity (printed) | 2.66 | 24.99 | 0 |
| 0.9 m (solved) | 16.487 | 11.163 | −0.139× |

The stroke is 13.83 mm, and Canon states 0.14×. Positions between the two states are interpolated.

Fig. 4(B) shows this example at an object distance of 1 m. The same solve, measured from the image plane, gives f/2.27, +2.81% distortion at 12° and a spherical-aberration peak of −0.22 mm; the plot reads f/2.3, about +2.8% and about −0.22 mm. ¶0022 also allows a stop that moves with group 2, but that would give about f/1.84 at 1 m, so the plot fits a fixed stop.

## Geometry, Aperture and Image Plane

Clear semi-diameters are inferred, not printed. They are carried by element from a model of Example 2 and checked against Canon's section, where they agree within about 1 mm, and they pass the axial beam at infinity and at 0.9 m. The front rim is 10% above the 25 mm entrance-pupil radius.

The image plane is 115.66 mm behind surface 1. The patent prints neither this distance nor the back focus; both are computed paraxially from the table, giving f = 100.016 mm and BF = 39.60 mm.

The iris radius of 14.68 mm is sized from the f/2 design value. Surface 8 would reach 0.59 mm past the stop plane at its rim, so a land at 9.00 mm depth, from radius 19.27 mm, keeps it in front. Canon's section draws this land nearer 16 mm. Clearance of the iris opening does not prove blade or mount fit.

Inferred clear semi-diameters in millimetres are 1–2: 27.50, 3–4: 25.75, 5–6: 22.25, 7–8: 19.75, 10–12: 15.50, 13–15: 17.25.

## Model Scope and Limitations

The model reproduces the printed F = 100 to 0.02%. At infinity its d-line spherical aberration is −0.069 mm at 0.7 pupil and +0.039 mm at the rim, against about −0.06 and +0.03 mm in Fig. 4(A).

Rays clipped by the inferred rims stay clipped: at f/2 the geometric illumination falls to 46% at 12.2°. Diffraction and colour results are model estimates, not measurements of the production lens.

## Sources and References

1. [Primary publication](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-H04-255813/11/ja), numerical example and figures cited above.
2. [Manufacturer product and construction](https://global.canon/en/c-museum/product/ef302.html).
