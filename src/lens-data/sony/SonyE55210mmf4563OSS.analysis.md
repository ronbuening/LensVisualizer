## Patent Reference and Design Identification

**Patent:** US 8,837,056 B2
**Application Number:** US 13/552,332
**Filed:** 2012-07-18
**Granted:** 2014-09-16
**Inventor:** Masaki Maruyama
**Assignee:** Sony Corporation
**Title:** Zoom lens and imaging device
**Example details:** Numerical Working Example 1, Tables 1–3 and 10, Figures 1 and 14–16; uniform 55× scale inferred.

Numerical Working Example 1 is a **related Sony design**, not a confirmed
factory prescription for the Sony E 55–210mm f/4.5–6.3 OSS (SEL55210). The grant
and the published application US 2013/0033621 A1 print identical tables. The
Japanese priority filing is dated 5 August 2011, and the lens was announced later
that month. The correlation rests on these points:

1. The example's thirteen elements in nine air-separated groups match Sony's
   published construction, and its five moving groups fit a compact telephoto zoom.
2. Sony's diagram marks ED elements at E2 and E8 and aspherical elements at E10
   and E11. Example 1 has its 1.4970/81.61 glass at E2 and E8, and aspheric surfaces
   on both faces of E10 and E11. Sony's text counts two of each.
3. Example 1's E10 also has a very high Abbe number. Sony's count treats it as
   aspherical rather than ED; the drawing does not settle the material.
4. The single positive G4 focus element and the transverse stabilizer at the front
   of G5 fit Sony's internal focus and OSS. F/4.64–6.49 sits close to the marketed
   f/4.5–6.3.
5. Example 2 has fourteen elements, a doublet G4 and F/7.30 at tele, unlike the
   production lens. Example 3 keeps thirteen elements in nine groups and two
   aspherical elements, but adds a third 1.4970/81.61 element at E3 and reaches
   only 3.46×. Example 1 is the closest of the three, which is not proof of identity.

The patent gives radii and distances with f = 1.00/1.91/3.62; Table 10 gives the
less rounded tele ratio 3.624. **No production scale is published.** The model
multiplies every length by an inferred 55× so the first station reads 55 mm. The
other stations become 105.05 and 199.10 mm, not 210 mm: the example zooms 3.62×
against the marketed 3.82×, and no single scale fits both ends. The printed
half-fields land on one image height, 13.9 mm at 55×, so a 14.1 mm APS-C
semi-diagonal implies about 55.75× and a 202 mm tele. Reaching 210 mm would take
58× and a 14.65 mm image height. The example's ratio, apertures and relative
dimensions are kept rather than stretching the telephoto spacing. The inferred
scale also sets the physical lp/mm meaning of any MTF figure.

The patent disagrees with itself in two places. Table 3 gives the intermediate
half-field as 7.43°, while Figs. 6B and 6C print 7.34°. Tracing favors the figure:
7.34° lands at 13.90 mm at 55×, matching 13.91 mm at wide and 13.92 mm at tele,
while 7.43° lands at 14.08 mm. Table 3 gives the wide-end F-number as 4.64, while
Fig. 5A prints 4.84. The patent prints no stop diameter, so this cannot be settled
directly, but 4.64 gives a tele-to-wide stop ratio of 1.109, close to Example 3's
1.105, while 4.84 gives 1.157. The model keeps Table 3's 4.64.

## Optical Architecture

The five moving groups have powers positive–negative–positive–positive–negative.
G1 comprises E1–E3, G2 E4–E6, G3 E7–E9, G4 E10 and G5 E11–E13. Four cemented
pairs are E1/E2, E4/E5, E8/E9 and E12/E13. These five moving groups are not the
nine air-separated groups in the catalog count. The aperture stop lies between G2
and G3 and moves with G3. No camera-side plate is tabulated in this example, and
none is modeled.

The patent's L signs name components, not single elements, so the elements here run
E1 to E13. Its L11 is E1/E2, L12 is E3, L21 is E4/E5, L22 is E6, L31 is E7, L32 is
E8/E9, L4 is E10, L51 is E11 and L52 is E12/E13.

All groups change position with zoom. The patent states that G1, G3 and G5 move
objectward and that G3 and G5 move together. Their printed d16 + d18 sum is
0.315/0.314/0.315; the 0.001 rounding difference is kept rather than redistributed.
The back gaps stay as printed. OSS is modeled centered: decentered stabilization
performance and actuator range are not simulated.

## Element-by-Element Analysis

The focal lengths below are isolated thick-element values at d-line, using the
patent's constants at the inferred 55× scale. They are not additive powers of
cemented assemblies. Optical roles are positional interpretations.

### E1 — Negative Meniscus

nd = 1.9108, νd = 35.25. Glass: TAFD35 (HOYA, coordinate equivalent). f = -131.457 mm.

Negative meniscus forming the front of cemented C1, with high-index material.

### E2 — Biconvex Positive

nd = 1.4970, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent) — ED class, inferred. f = +70.113 mm.

Positive biconvex rear of C1 with a very high Abbe number; it sits at the first ED position on Sony's diagram.

### E3 — Positive Meniscus

nd = 1.4875, νd = 70.44. Glass: FC5 (HOYA, coordinate equivalent). f = +280.670 mm.

Weak positive meniscus singlet that completes the positive front group.

### E4 — Biconcave Negative

nd = 1.8061, νd = 40.73. Glass: NBFD13 (HOYA, coordinate equivalent). f = -14.124 mm.

Negative biconcave front member of C2, supplying most of the negative group's power.

### E5 — Positive Meniscus

nd = 1.8467, νd = 23.78. Glass: FDS90 (HOYA, coordinate equivalent). f = +17.852 mm.

Positive meniscus rear of C2, with a low Abbe number that opposes its negative partner.

### E6 — Biconcave Negative

nd = 1.9108, νd = 35.25. Glass: TAFD35 (HOYA, coordinate equivalent). f = -34.508 mm.

Negative biconcave singlet that completes G2. The narrow air space in front of it limits the inferred rims.

### E7 — Biconvex Positive

nd = 1.9108, νd = 35.25. Glass: TAFD35 (HOYA, coordinate equivalent). f = +32.981 mm.

Positive biconvex singlet that begins G3 immediately behind the stop.

### E8 — Biconvex Positive

nd = 1.4970, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent) — ED class, inferred. f = +30.861 mm.

Positive biconvex front of C3 with a very high Abbe number; it sits at the second ED position on Sony's diagram.

### E9 — Biconcave Negative

nd = 1.8467, νd = 23.78. Glass: FDS90 (HOYA, coordinate equivalent). f = -32.247 mm.

Negative biconcave rear of C3, supplying opposing power within the positive third group.

### E10 — Biconvex Positive (Asph)

nd = 1.4971, νd = 81.56. Glass: M-FCD1 (HOYA, coordinate equivalent). f = +46.904 mm.

Double-aspheric positive biconvex singlet that is the entire focus group (patent L4). Its index and Abbe number sit on the coordinates of a moulding glass in the FCD1 family.

### E11 — Biconcave Negative (Asph)

nd = 1.5920, νd = 67.02. Glass: M-PCD51 (HOYA, coordinate equivalent). f = -30.468 mm.

Double-aspheric negative biconcave singlet that forms the front of G5 and is the patent's stabilizing element (patent L51).

### E12 — Biconvex Positive

nd = 1.6034, νd = 38.01. Glass: E-F5 (HOYA, coordinate equivalent). f = +22.943 mm.

Positive biconvex front of C4, the rear part of G5 (patent L52).

### E13 — Biconcave Negative

nd = 1.8348, νd = 42.72. Glass: TAFD5F (HOYA, coordinate equivalent). f = -24.456 mm.

Negative biconcave rear of C4, the last element before the variable back gap.

## Glass Identification and Selection

All nine printed nd/νd pairs sit on HOYA catalog coordinates. Four of them recur
across the patent's examples, and the other examples' glasses also sit on catalog
rows, so the data file names HOYA glasses as coordinate equivalents. The patent
names no supplier or melt and prints four-decimal indices, no line indices and no
partial-dispersion data. The names are therefore catalog-derived equivalents, not
a stated production bill of materials, and the model's color behavior comes from
those catalog rows.

| Glass (HOYA equivalent) | nd | νd | θgF (catalog) | Elements | Role |
| ------- | ---: | ---: | ---: | ---- | ---- |
| TAFD35 | 1.9108 | 35.25 | 0.5822 | E1, E6, E7 | High-index meniscus, negative and positive singlets |
| FCD1 | 1.4970 | 81.61 | 0.5389 | E2, E8 | ED positive members of C1 and C3 (inferred) |
| FC5 | 1.4875 | 70.44 | 0.5306 | E3 | Low-dispersion crown |
| NBFD13 | 1.8061 | 40.73 | 0.5672 | E4 | Strong negative member of C2 |
| FDS90 | 1.8467 | 23.78 | 0.6192 | E5, E9 | Dense flint partners in C2 and C3 |
| M-FCD1 | 1.4971 | 81.56 | 0.5385 | E10 | Aspheric focus element |
| M-PCD51 | 1.5920 | 67.02 | 0.5359 | E11 | Aspheric stabilizing element |
| E-F5 | 1.6034 | 38.01 | 0.5828 | E12 | Positive member of C4 |
| TAFD5F | 1.8348 | 42.72 | 0.5651 | E13 | Negative member of C4 |

E2 and E8 are tagged as inferred ED from Sony's diagram. E10 has a similar Abbe
number but is left untagged because Sony's count of two ED elements is already met.
No measured color or APO claim is made.

## Focus Mechanism

Only G4 moves for focusing, objectward from infinity (¶0087). The patent provides
no finite spacing table, object distance or cam. The marketed 1 m minimum focus is
a product specification, not a patent-stated optical state. The model uses 65 zoom
and 33 focus positions from a paraxial calculation. Only the three infinity
stations in Table 3 are marked published, and no finite conjugate is declared, so
**finite-distance MTF stays unavailable**.

Between printed stations G1, G2, G3 and G5 are interpolated linearly and G4 alone
keeps the image in place, departing from a straight line by at most 0.14 mm. Near
focus moves G4 by 1.03 mm at wide, 2.69 mm at mid and 6.02 mm at tele; d16 and d18
change by equal and opposite amounts, so total track holds. The inferred endpoint
is 1000 mm object to image at every zoom. Tele magnification there is 0.219, close
to Sony's 0.225×, and focal length breathes from 199 mm to about 138 mm.

The printed back gaps do not close exactly at paraxial infinity focus. Paraxial
focus minus the printed plane is +0.037, +0.029 and −0.394 mm at 55×. The tele
figure means the printed plane sits 0.394 mm behind paraxial focus, which is within
print rounding: three-decimal values on a normalized table carry about 0.38 mm of
one-sigma uncertainty at that station, so no misprint is implied. The values are
kept. As a result the infinity position focuses about 100 m in front of the lens at
tele, and on virtual objects about 82 m and 385 m behind it at wide and mid. The
focus scale close to infinity is therefore approximate, and the cam is not
manufacturer firmware or a measured calibration.

## Aspherical Surfaces

Surfaces S17 and S18 form E10; S19 and S20 form E11. The patent uses the standard
(1+K) conic equation and prints K = 0 on all four faces, with A4, A6, A8 and A10.
Uniform scaling by s = 55 leaves K unchanged and transforms each coefficient An to
An/s^(n−1), while every radius, thickness and spacing is multiplied by s. The
values below are the patent's normalized coefficients, not the scaled ones in the
data file.

| Surface |     K |           A4 |           A6 |          A8 |          A10 |
| ------- | ----: | -----------: | -----------: | ----------: | -----------: |
| 17      | 0.000 | -7.41237E-01 | -3.10429E+01 | 1.32468E+04 |  8.96268E+03 |
| 18      | 0.000 |  2.12773E+00 |  9.44297E+01 | 4.03824E+03 |  2.78726E+05 |
| 19      | 0.000 |  4.32488E+01 | -2.60480E+03 | 5.69705E+04 |  2.78726E+05 |
| 20      | 0.000 |  4.43360E+01 | -2.77038E+03 | 7.06497E+04 | -2.78726E+05 |

The aspheric terms give correction freedom on the focus and stabilizing elements;
their separate contributions are not measured here. The patent does not state how
the surfaces are made, but the moulding-glass coordinates of E10 and E11 point to
glass-moulded aspheres.

## Image Stabilization

The patent shifts E11 (its L51), the negative front of G5, perpendicular to the
axis for blur correction. Sony confirms OSS on the SEL55210. The model keeps all
surfaces centered, so stabilizer stroke and off-center image quality are not
simulated.

## Model Scope and Limitations

At 55× the printed dimensions give focal lengths of 54.97 / 104.82 / 198.67 mm
against 55.00 / 105.05 / 199.10 mm from the rounded printed f values. The
differences are kept, not fitted away. The 14.1 mm APS-C semi-diagonal needs half
fields of 14.13° / 7.44° / 3.97° at 55×, slightly wider than the printed angles.

Rims are inferred from Figure 1, not factory clear apertures. E4 reaches 8.7 mm, as
drawn, above the 7.77 mm on-axis telephoto marginal ray at S6. The clear apertures of
S8 and S9 stop at 8.2 mm, because those faces meet at 8.23 mm, and the model leaves
0.01 mm of air between them. Figure 1 draws those rims touching, so opaque lands carry
E5 to 8.7 mm and E6 to 8.54 mm.

Figure 1 also ends the concave rear faces of E3 and E11 on short flat lands, and the
patent's own ray plots show those two radii limit the design. The tangential fans of
Figs. 14A to 16A stop short of the full pupil at the corner, at about −0.55 to +0.38
at wide, −0.43 to +0.51 at mid and −0.48 to +0.56 at tele. Clear apertures of 15.0 mm
on S5 and 5.9 mm on S20A give −0.55 to +0.38, −0.43 to +0.51 and −0.51 to +0.57, so
the model uses them, with lands out to each element's edge. The on-axis beam clears
both, at 14.43 mm and 5.24 mm. The sagittal fans run to the pupil edge even at tele,
where a round clip at S5 stops the sagittal ray near 0.9, so the model's clips may be
slightly tighter there than the patent's plotted pupil. Wide open, geometric
transmission at the 14.1 mm corner is about 44 % / 43 % / 45 % at the three stations.
These are modeled clips, not measured factory vignetting.

The iris radius is 6.97 / 7.10 / 7.73 mm at the three stations, set so the paraxial
entrance pupil equals focal length over F-number at infinity (11.85 / 19.41 /
30.61 mm). Working f/# from the real marginal ray is 4.65 / 5.42 / 6.56 at infinity
and 4.68 / 5.58 / 7.14 at the inferred 1 m states. These are model values, not a
reproduction of the marketed f/4.5–6.3.

**Tele MTF is weak on the printed image plane.** Photopic on-axis diffraction MTF
at 40 lp/mm, wide open, is about 0.69 / 0.64 / 0.06 on the printed planes. The tele
loss is defocus from the 0.394 mm plane offset: at best axial focus, a shift of
−0.39 mm, the same figure is 0.73 (0.81 / 0.78 at wide and mid after −0.06 and
−0.08 mm). The printed plane is kept in the data. The best-axial values describe
the rounded table refocused, not a measured lens, and their lp/mm scale depends on
the inferred 55×. No finite-distance MTF is computed from the inferred cam.

## Sources

- [US 8,837,056 B2, USPTO](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8837056).
- [US 2013/0033621 A1 publication record](https://patents.google.com/patent/US20130033621A1/en).
- [Sony SEL55210 official product](https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel55210).
- [Sony official specifications](https://www.sony.co.uk/electronics/camera-lenses/sel55210/specifications).
- [Sony Japanese feature page and construction](https://www.sony.jp/ichigan/products/SEL55210/feature_1.html).
- [Sony E 55-210mm F4.5-6.3 OSS, Wikipedia](https://en.wikipedia.org/wiki/Sony_E_55-210mm_F4.5-6.3_OSS), announcement date.
