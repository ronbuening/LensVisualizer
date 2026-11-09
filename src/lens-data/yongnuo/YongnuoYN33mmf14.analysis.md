## Patent Reference and Design Identification

**Patent:** CN 220137479 U
**Filed:** 2023-06-08
**Granted:** 2023-12-05
**Inventors:** Ying Zhuang, Yuanhua Ye, Yongsheng Zhuang, Yongxiao Zhuang
**Assignee:** Shenzhen Yongnuo Electric Appliance Co., Ltd. (深圳市永诺电器有限公司)
**Title:** An internal-focusing imaging lens (一种内对焦成像镜头)
**Example details:** Table 1 (prescription), Table 2 (focus data), Figs. 1–3, ¶0046–¶0059. Unscaled millimetres.

The YN 33mm F1.4 DA DSM WL Pro is Yongnuo's APS-C autofocus standard prime (about 50 mm equivalent). A preview
appeared in February 2023, and the lens was announced in 2024. Yongnuo's 2026 catalog lists Sony E and Nikon Z
versions; its product page also lists a Canon RF version sold as the YN33mm F1.4R DA DSM. The patent names no
product, but the evidence linking its sole example to this lens is strong:

1. **Construction.** Yongnuo specifies 11 elements in 9 groups. The example has 11 elements in 9 groups, with two
   cemented doublets ahead of the stop.
2. **Special glass.** Yongnuo's construction drawing marks low-dispersion and high-index glass and, unlike several
   other lenses on the same catalog page, no aspherical element. A review lists two low-dispersion and four
   high-index elements. The example is all spherical. Its two νd ≈ 68.5 crowns (G1, G6) are its only
   low-dispersion glasses, and four elements have nd ≥ 1.88 (G2, G4, G9, G10).
3. **Close focus.** Table 2's minimum object distance, 305 mm from the first surface, plus the 95 mm track gives
   400 mm at a paraxial magnification of 0.099×. Yongnuo specifies 0.4 m and 0.1×.
4. **Angle of view.** The header prints 2ω = 48.74° (¶0051). A published specification gives a 48.8° diagonal. The
   model's real chief ray reaches the APS-C corner (14.18 mm) at 24.3°, close to the printed half-angle. Without the
   barrel distortion of about 4% that Fig. 3 plots there, a 32.6 mm lens would reach the corner at 23.5°.
5. **Specification and timing.** The header prints f = 33 mm and Fno = 1.4. The application was filed in June 2023,
   before the lens was announced. It was filed the same day, by the same four inventors, as CN 220171327 U, the
   patent for Yongnuo's YN 56mm F1.4.

The caveats are ordinary ones for a patent model. The patent prints nd to three decimals. The tabulated focal length is
32.620 mm rather than 33 mm, and the example's pupil gives F/1.46 rather than F/1.4. The clear apertures are
inferred, and the maker's construction drawing is a thumbnail too small to compare element by element. One
published specification lists two aspherical elements; Yongnuo's drawing and the other sources show none. The model
is therefore a strong correlation, not a factory prescription.

The prescription is unscaled. The rounded table traces to 32.637 mm at infinity, 0.05% above Table 2's 32.620 mm.
Fig. 2 labels an entrance-pupil radius of 11.1999 mm, which gives F/1.457. The model sizes its stop from that pupil,
giving an iris radius of 9.604 mm (not printed). It does not enlarge the stop to reach the marketed F/1.4.

## Optical Architecture

Eleven spherical elements form nine groups, with two cemented doublets (G3/G4 and G6/G7). The patent divides them
into three positive groups (¶0006, ¶0029–¶0032). GR1 (G1–G7, f ≈ +71.3 mm) is fixed and lies ahead of the stop SP.
Behind the stop come the two-element focus group GR2 (G8–G9, f ≈ +50.0 mm) and the fixed rear group GR3 (G10–G11,
f ≈ +149.1 mm). The group focal lengths are paraxial values from Table 1. Element and group names are the
patent's (G1–G11, GR1–GR3); Fig. 1 numbers the elements 1–11. Only GR2 moves, so the length of the lens does not
change with focus. The patent presents three aims: a light two-element focus group, suppressed focus breathing for
video, and a short total length (¶0022–¶0023, ¶0029).

The layout reads as a double-Gauss derivative with a negative front element. Its core is the air space around the
iris. On one side is G7's strongly concave rear face (R 15.45 mm), 6.48 mm ahead of the stop. On the other is G8's
concave front (R −16.66 mm), 11.91 mm behind it at infinity. The weak, nearly afocal G3/G4 meniscus pair ahead of G5
is the less usual feature.

Table 1 has no row 11: the cemented G6/G7 pair runs from row 10 to row 12, and no surface is missing. Row 14 is the
stop. Behind G11, Table 1 lists a 12.5 mm air gap, a 2 mm plate (nd 1.517, νd 64.2) and 1 mm to the image. The
model keeps that plate as a rear plate, which is not drawn.

## Element-by-Element Analysis

Element focal lengths are thick-lens values for each element in air, from Table 1.

### G1 — Negative Meniscus, convex to object

nd = 1.593, νd = 68.53. Glass: FCD515 (HOYA equivalent), a fluor crown. f = −50.9 mm.

The entrance element of GR1 and the largest in the lens. A weak front (R 163.5 mm) and a deep concave rear
(R 25.4 mm) spread the incoming beam before the positive elements that follow. It is one of the two νd ≈ 68.5
crowns that are the only candidates for Yongnuo's two low-dispersion elements.

### G2 — Positive Meniscus, convex to object

nd = 1.946, νd = 17.99. Glass: H-ZF88 (CDGM catalog equivalent) — high index. f = +97.6 mm.

The highest-index and most dispersive glass in the lens, used as a weak positive meniscus (R 44.0 / 81.4 mm). It
begins converging the beam that G1 spread. A 6.6 mm air space separates it from the G3/G4 pair.

### G3/G4 — Cemented Doublet, concave to object

- **G3 (Positive Meniscus):** nd = 1.772, νd = 49.60. Glass: H-LaF50B (CDGM equivalent), a lanthanum crown. f = +56.3 mm.
- **G4 (Negative Meniscus):** nd = 1.883, νd = 40.79. Glass: H-ZLaF68C (CDGM catalog equivalent) — high index.
  f = −59.1 mm.

Claim 1 names G3 a cemented positive lens and G4 a cemented negative lens. Together they form a 7.55 mm thick
meniscus shell. All three radii are concave to the object (R −26.7, −18.1 and −29.0 mm), the opposite bending to
G1 and G2, and the shell has almost no net power (f ≈ −794 mm). With so little power, the pair works on the
aberrations of the steep front group rather than on its focal length. The small νd step across its cemented face
(49.6 to 40.8) means it does little for axial colour; the patent says only that the two doublets reduce their own
aberrations and so help the overall balance (¶0030), and any more specific role is the author's interpretation.

### G5 — Biconvex Positive

nd = 1.804, νd = 46.59. Glass: H-ZLaF50E (CDGM catalog equivalent). f = +36.2 mm.

An air-spaced biconvex element (R 38.2 / −114.5 mm) between the two doublets. Together with G6, it supplies most of
GR1's positive power.

### G6/G7 — Cemented Doublet

- **G6 (Biconvex Positive):** nd = 1.593, νd = 68.62. Glass: FCD515 (HOYA equivalent), as G1. f = +28.2 mm.
- **G7 (Biconcave Negative):** nd = 1.762, νd = 26.62. Glass: H-ZF12 (CDGM equivalent), a dense flint. f = −16.1 mm.

The pair is negative overall (f ≈ −57.1 mm) and is GR1's crown–flint achromat: a νd 68.6 crown against a νd 26.6
flint, cemented at R −61.9 mm. G7's rear face (R 15.45 mm) is the most strongly curved surface ahead of the stop and
faces it across 6.48 mm of air.

### G8 — Negative Meniscus, concave to object

nd = 1.808, νd = 22.76. Glass: FD225 (HOYA catalog equivalent). f = −95.9 mm.

The front element of the focus group GR2. Its concave front (R −16.66 mm) faces the stop, mirroring G7. The patent
relies on this weak negative element to correct the focus group's own spherical aberration and coma. Condition (2),
−10 < F2a/F2 < −1, is met at −1.92 (¶0037, ¶0039).

### G9 — Biconvex Positive, nearly plano-convex

nd = 1.883, νd = 40.79. Glass: H-ZLaF68C (CDGM catalog equivalent) — high index. f = +38.1 mm.

A nearly flat front (R 199.8 mm) and a convex rear (R −40.07 mm). It supplies the focus group's positive power,
about +38 mm against the group's +50 mm: F2b/F2 = 0.76, inside the patent's condition (3), 0 < F2b/F2 < 1.6
(¶0038, ¶0040).

### G10 — Biconvex Positive

nd = 1.883, νd = 40.79. Glass: H-ZLaF68C (CDGM catalog equivalent) — high index. f = +43.0 mm.

The front element of the fixed rear group GR3, 1.5 mm behind the focus group at infinity and 8.1 mm at the minimum
distance.

### G11 — Negative Meniscus, nearly plano-concave

nd = 1.855, νd = 25.15. Glass: NBFD25 (HOYA equivalent), a dense lanthanum flint. f = −54.5 mm.

The last element: a concave front (R −44.5 mm) and an almost flat rear (R −1000 mm). Against G10 it leaves GR3
weakly positive (f ≈ +149 mm). Its ratio to G10, F3b/F3a = −1.27, satisfies condition (4), −1.7 < F3b/F3a < 0.
The patent ties the strength of this negative element to the correction of field curvature and distortion (¶0044).
Behind it are 12.5 mm of air to the 2 mm cover plate.

## Glass Identification and Selection

The patent names no glass and prints nd to three decimals (¶0046, ¶0049). A catalog name is given where a catalog
row rounds to the printed nd and matches νd within 0.15. The names are catalog equivalents, not the production
supplier.

| Glass | nd / νd | Elements | Role |
|---|---|---|---|
| FCD515 (HOYA equivalent) | 1.593 / 68.53, 68.62 | G1, G6 | Probable low-dispersion crowns; G6 is the crown of the stop-side achromat |
| H-ZF88 (CDGM equivalent) | 1.946 / 17.99 | G2 | Very high-index dense flint, weak positive meniscus |
| H-LaF50B (CDGM equivalent) | 1.772 / 49.60 | G3 | Positive half of the afocal meniscus pair |
| H-ZLaF68C (CDGM equivalent) | 1.883 / 40.79 | G4, G9, G10 | High-index lanthanum flint; G9 and G10 carry the power behind the stop |
| H-ZLaF50E (CDGM equivalent) | 1.804 / 46.59 | G5 | Main air-spaced positive element of GR1 |
| H-ZF12 (CDGM equivalent) | 1.762 / 26.62 | G7 | Flint of the stop-side achromat |
| FD225 (HOYA equivalent) | 1.808 / 22.76 | G8 | Dense flint, negative element of the focus group |
| NBFD25 (HOYA equivalent) | 1.855 / 25.15 | G11 | Negative last element |

The patent prints nd to three decimals, and every pair equals a catalog row at that precision: FCD515 (1.59282 /
68.63) for G1 and G6, H-LaF50B (1.7725 / 49.60) for G3, H-ZF12 (1.76182 / 26.61) for G7 and NBFD25 (1.85451 / 25.15)
for G11. CDGM rows are preferred where they match, as for the other CDGM-class glasses in this lens; HOYA FD140 is an
equal match for G7. All eleven elements trace on catalog dispersion.

Fig. 3 supports these rows. With their five-decimal indices, a Coddington trace along the chief ray reproduces the
plotted tangential and sagittal field curves within about 1 µm at every field, −90 and −73 µm at the corner. With
the printed indices, which the model keeps, the corner tangential field is −46 µm. Most of that difference comes from
G3, whose printed 1.772 stands for H-LaF50B's 1.7725. On axis, Fig. 2's C, d and g curves agree with the model within
about 5 µm at every pupil zone; the g ray at full aperture, where its curve is steepest, differs by about 7 µm.

The maker's low-dispersion and high-index claims fit the palette. A review counts two low-dispersion and four
high-index elements. The νd ≈ 68.5 crowns (G1, G6) are the only low-dispersion glasses; the next lowest dispersion
is G3's νd 49.6. The four high-index elements are presumably the four with nd ≥ 1.88: G2, G4, G9 and G10. Yongnuo's
drawing is too small to show which positions it colours, so no element is tagged as anomalous-dispersion glass.

## Focus Mechanism

Inner focus. GR1, the iris and GR3 stay fixed relative to the image plane. The two-element focus group GR2 (G8–G9)
moves 6.598 mm toward the object between infinity and the minimum distance MOD (¶0006, ¶0055). The stop-to-G8
gap (d14) and the G9-to-G10 gap (d18) exchange length, with a constant sum of 13.410 mm. The 1.820 mm air space
inside the group does not change. Yongnuo drives the group with a stepping motor (DSM).

| Position | Object to first surface (mm) | d14 (mm) | d18 (mm) | Published EFL (mm) |
|---|---:|---:|---:|---:|
| Infinity | Infinity | 11.910 | 1.500 | 32.620 |
| X20 | 623.757 | 8.396 | 5.014 | 31.760 |
| MOD | 305.000 | 5.312 | 8.098 | 31.080 |

The object distances are measured from the first surface. The image plane stays 95.000 mm behind the first vertex
in every state, so MOD is 400 mm from object to image, matching Yongnuo's 0.4 m minimum focus. The paraxial
magnification is 1:20.0 at X20, which gives the state its name, and 0.099× at MOD; Yongnuo specifies 0.1×. The
focal length shortens from 32.62 to 31.08 mm at MOD. The patent reports that the angle of view changes very little
over the focus range, which suits video use (¶0022). Only these three states are printed; positions in between
interpolate the two gaps linearly.

## Conditional Expressions

The patent states four conditions (¶0033–¶0044). The example satisfies all of them; the values below are paraxial,
computed from Table 1 at infinity.

| Condition | Range | Example |
|---|---|---|
| (1) F1/F3, GR1 against GR3 | 0 < F1/F3 < 2 | 0.478 (+71.3 / +149.1 mm) |
| (2) F2a/F2, G8 against GR2 | −10 < F2a/F2 < −1 | −1.916 (−95.9 / +50.0 mm) |
| (3) F2b/F2, G9 against GR2 | 0 < F2b/F2 < 1.6 | 0.762 (+38.1 / +50.0 mm) |
| (4) F3b/F3a, G11 against G10 | −1.7 < F3b/F3a < 0 | −1.270 (−54.5 / +42.9 mm) |

Condition (1) keeps GR3 weak against GR1. A stronger GR3 would add aberrations of its own, and a weaker one would
make the barrel wider relative to the sensor (¶0035).

## Model Scope and Limitations

The model reproduces Table 2 to within 0.1%: 32.637, 31.785 and 31.110 mm against the printed 32.620, 31.760 and
31.080 mm, a difference consistent with the three-decimal indices. The total track is 95.000 mm.

The patent prints no clear apertures and no stop diameter. The iris radius, 9.604 mm, follows from the Fig. 2 pupil;
Fig. 1's stop opening, about 9.7 mm, agrees. Fig. 1 is drawn to scale, and most semi-diameters are read from it within
2%; G7 is drawn about 5% smaller than modeled. G2 and G3 are modeled at 14.926 mm against the 15.5 and 15.3 mm drawn,
the largest equal rims that keep a clear air space between them. G4 is drawn larger than G3, its front stepping out
past the cemented face, and reaches 16.4 mm at its rear. The figure ends the concave rears of G1 and G7 at flat lands,
which the model reproduces as rim cuts outside the traced beams; G7's land keeps its rim ahead of the stop plane.
Wide open, the iris limits the axial beam. At the corner of the frame, the 10.5 mm rims of the focus group cut a large
part of the oblique beam, as Fig. 1's small G8 suggests, so corner illumination depends on these inferred rims: about
26% of the axial value at infinity, 37% at X20 and 46% at MOD, wide open.

The field runs to the printed 2ω = 48.74°. The real chief ray reaches the APS-C corner (14.18 mm) at 24.3°, with
about 4% barrel distortion, as Fig. 3 plots. Because the model keeps the printed three-decimal indices, its
tangential field at the corner is about 44 µm short of Fig. 3's (see Glass Identification and Selection).

The printed 1 mm gap between the cover plate and the image is kept. The paraxial focus lies 0.062 mm behind that
plane at infinity, 0.096 mm at X20 and 0.141 mm at MOD. The patent's plane is probably a best-focus setting for the
f/1.46 aperture, but it is not stated. These offsets can lower predicted contrast slightly. The focus readout keeps
the image plane at the infinity paraxial focus, so it reports the MOD state as about 42 cm rather than the printed
400 mm.

## Sources

- [CN 220137479 U](https://patents.google.com/patent/CN220137479U/zh), Shenzhen Yongnuo Electric Appliance Co., Ltd.,
  granted 2023-12-05: Tables 1–2 and Figs. 1–3 ([PDF](https://patentimages.storage.googleapis.com/7a/fb/69/8b9076fb18a773/CN220137479U.pdf)).
- Yongnuo, [product catalog, 2026-03 edition](https://www.szyongnuo.com/upload/file/202403/2026-03.pdf), pp. 07–08
  (APS-C lenses): YN33mm F1.4 DA DSM WL PRO, E/Z mounts, APS-C, F1.4, 11 elements / 9 groups, 9 blades, 0.4 m,
  0.1×, 58 mm filter, Φ69 × 89 mm, 370–378 g, and a construction drawing marked for low-dispersion and high-index
  glass.
- Yongnuo, [33mm F1.4 APS-C autofocus prime product page](https://th.hkyongnuo.com/products/33mmf14): Sony E,
  Nikon Z and Canon RF versions.
- Digital Camera World, [Yongnuo YN33mm f/1.4 DA DSM WL Pro review](https://www.digitalcameraworld.com/reviews/yongnuo-yn33mm-f14-da-dsm-wl-pro-review-not-just-an-autofocus-lens-its-got-built-in-rf-wireless-too):
  two low-dispersion and four high-index elements; Nikon Z, Sony E and Fujifilm X versions.
- Thom Hogan, [Yongnuo 33mm f/1.4 DA DSM WL Pro specifications](https://zsystemuser.com/z-mount-lenses/third-party-lenses/third-party-autofocus-lense/yongnuo-lenses/yongnuo-33mm-f14-da-dsm-wl.html):
  48.8° diagonal angle of view, f/1.4–f/16, internal focus, 2024 announcement. The same page lists two aspherical
  elements, which Yongnuo's drawing does not show.
- Photo Rumors, [Yongnuo 33mm f/1.4 tag archive](https://photorumors.com/tag/yongnuo-33mm-f-1-4): the February 2023
  preview of the lens.
