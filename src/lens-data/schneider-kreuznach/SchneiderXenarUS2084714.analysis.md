# SCHNEIDER-KREUZNACH XENAR 200mm f/3.5 (US 2,084,714 Design)

## Patent Reference and Design Identification

**Patent:** US 2,084,714 A, *Unsymmetrical Photographic Objective*  
**Application Number:** Serial No. 46,809  
**Filed:** October 25, 1935 (priority: Germany, August 26, 1935)  
**Granted:** June 22, 1937  
**Inventor:** Albrecht Wilhelm Tronnier  
**Assignee:** Jos. Schneider & Co., Optotechnische Gesellschaft  
**Example details:** one numerical table for focal length 1 (PDF p. 2, column 2) and one drawing (PDF p. 1)

The patent describes a four-element objective with six air-contacting surfaces: a single positive lens in front, a
biconcave negative lens behind it, the diaphragm, and a cemented positive pair at the rear. The single table gives
radii, axial thicknesses, air spaces, refractive indices "for the yellow ray" and Abbe numbers, all for focal length 1.
The text gives the example as f/3.5 with a useful field of over 50°. The model multiplies every radius and spacing by
200, the focal length the patent names for its drawing. The printed table computes to f = 1.00109, so the model's EFL
is 200.22 mm, 0.11 % above the nominal 200 mm. That gap is within the rounding of the four-decimal radii, spacings and
indices. No value has been changed to close it.

The SCHNEIDER-KREUZNACH XENAR 200mm f/3.5 (US 2,084,714 Design) carries the Xenar name at family level. The evidence:

1. The construction is the Tessar type that Schneider sold as the Xenar: four elements in three groups, a positive
   front singlet, a biconcave negative singlet, the stop, and a cemented negative–positive rear pair.
2. Wikipedia's Schneider-Kreuznach article captions a redrawing of this patent "Xenar (Tronnier, 1935)". The
   redrawing on Wikimedia Commons is a contributor's own work and cites no Schneider source.
3. Schneider made f/3.5 Xenars in the 1930s, including 15 cm and 18 cm sizes for larger-format cameras, according to
   user reports rather than Schneider catalogues. The patent's 200 mm f/3.5 example is in the same class.

The Xenar name dates from 1919, before Tronnier's patent. No Schneider document found ties US 2,084,714 to a particular
Xenar focal length or production date, so the model stands for the patent's Xenar-type design rather than a specific
production lens.

## Optical Architecture

The design is an unsymmetrical positive–negative–positive anastigmat of the Tessar family. In order from the object:

- L1, a positive lens with a strong front surface and an almost flat rear surface;
- L2, a biconcave negative lens;
- the diaphragm, in the second air space;
- L3 + L4, a cemented pair with a strongly positive net power.

The front pair L1 + L2 is weakly negative (f = −499.6 mm at model scale). The patent asks for exactly this: the two
front lenses "together produce a dispersive or at most a slightly collective effect". The rear cemented pair has
f = +118.07 mm, stronger than the whole objective (200.22 mm), which the patent also requires. The cemented surface R6
is convex toward the object, and the index step across it (0.0887) is what the patent relies on for zonal correction
of the sagittal and meridional image surfaces.

The total length from R1 to R7 is 65.82 mm. The computed paraxial back focal distance is 163.95 mm, which gives a
total track of 229.77 mm.

## Element-by-Element Analysis

### L1 — Front Positive Lens

`nd = 1.6202, νd = 60.0.` No glass name is printed. In-air f = +99.38 mm.

The front surface (R1 = 64.84 mm) carries almost all of the power. The rear surface (R2 = −1159.6 mm) is so weak that
the drawing shows it flat, so the lens is technically biconvex but almost plano-convex. Its centre thickness (11.98 mm,
0.0599 f) and the air space behind it (13.10 mm, 0.0655 f) both exceed the 0.0525 f minimum in the patent's claim.

### L2 — Biconcave Negative Lens

`nd = 1.5785, νd = 42.3.` No glass name is printed. In-air f = −64.06 mm.

L2 is the only separate negative element and the main source of negative power and colour correction in front of the
stop. Its front surface (R3 = −117.0 mm) is the "flatter hollow radius" of the claim, and R1 is 55.4 % of it, above
the 52.5 % the claim requires. The strong rear surface (R4 = 55.22 mm) faces the stop. The drawing bevels its rim.

### L3 — Cemented Negative Lens

`nd = 1.5315, νd = 49.1.` No glass name is printed. In-air f = −94.14 mm.

L3 is the front member of the rear pair. Its front surface (R5 = −1159.6 mm) is drawn flat and its rear surface is the
cemented interface (R6 = 52.36 mm), so it is technically biconcave but almost plano-concave. The table prints the same
value, −5.7980, for R2 and R5.

### L4 — Cemented Positive Lens

`nd = 1.6202, νd = 60.0.` No glass name is printed. In-air f = +54.87 mm.

L4 is the strong biconvex member of the rear pair (R6 = 52.36 mm, R7 = −84.72 mm, thickness 17.58 mm). It uses the
same index and Abbe number as L1. The cemented L3 + L4 pair has a net focal length of +118.07 mm.

## Glass Identification

The patent prints an index for "the yellow ray" and an Abbe number for each glass, without glass names. The data file
stores the indices as sodium D-line values (`indexReference: "D"`), the usual convention for a German table of 1935.
At the printed four-decimal precision, the difference between the sodium D line and the helium d line (about 0.0001
in index) does not change the model in any meaningful way.

| Element | Printed n / ν | Nearest modern class (not a match) |
|---|---:|---|
| L1, L4 | 1.6202 / 60.0 | SK16 class (N-SK16 1.62041 / 60.32) |
| L2 | 1.5785 / 42.3 | light flint; no catalogue glass within tolerance |
| L3 | 1.5315 / 49.1 | LLF6 class (1.53172 / 48.9) |

None of the three glasses matches a current catalogue entry at the d, D or e line within 0.00006 in index. They are
period glasses, so each element's glass is recorded as unmatched with its printed index and Abbe number, and colour
is modelled from the printed Abbe numbers on the normal partial-dispersion line. No partial-dispersion data is printed, so the model supports no secondary-spectrum
claim.

## Focus Mechanism

The patent gives only the infinity state: it prints no focus-state table, object distance or moving group, so the
model focuses at infinity only.

## Stop, Rims and Image Plane

The table labels the second air space (13.10 mm at model scale) as the "diaphragm space", and the claim places the
diaphragm behind the dispersive lens. The position inside that space is not printed. The patent does say that, at the
zone of greatest astigmatism, the principal ray has an inclination of 23° in the diaphragm space and 19°38′44.6″ on
the image side. A real chief ray crossing the axis at 23° meets that exit angle only when the stop is 9.84 mm behind
R4, which leaves 3.26 mm to R5. The model places the stop there. On the object side, the same ray enters at
about 18.0°.

The rims are not printed; they are estimated from the drawing, which is to scale (its vertex spacings match the table
within about 5 %). The drawing shows the front lens largest, at about 29.5 mm, with L2 and the cemented pair at
about 25.5 mm. L2 takes the drawn 25.5 mm on both faces. L1 is 31 mm, within the reading's uncertainty of the
drawing. The cemented pair is 29.66 mm, the smallest rim that keeps the off-axis light within 3 percentage points of a
lens with 31 mm rims throughout, over the patent's 25° half-field. The drawing bevels L2's rear edge from about 22.7 mm, the height at which the f/3.5 axial
beam crosses R4, and also bevels the front edge of L3. The model draws both elements with square edges.

Every rim passes the full f/3.5 axial beam, which reaches 28.6 mm at R1, 24.2 mm at R3, 22.7 mm at R4 and 24.2 mm at
R7. The rim of R4 sits 3.6 mm in front of the stop plane.

The image plane is the computed paraxial focus, 163.95 mm behind R7. The patent prints no back focus.

## Patent Conditions and Model Scope

| Patent condition (claim and text) | Model value | Result |
|---|---:|---|
| R1 more than 52.5 % of the hollow radius R3 | 55.4 % | Satisfied |
| d1 and the first air space each more than 0.0525 f | 0.0599 f, 0.0655 f | Satisfied |
| Cemented radius at least 80 % of the aperture diameter (0.229 f at f/3.5) | R6 = 0.262 f | Satisfied |
| Index step at the cemented surface at least 0.06 | 0.0887 | Satisfied |
| Front lens index above the dispersive lens by at least one third of that step (0.0296) | 0.0417 | Satisfied |
| Rear component stronger than the whole objective | 118.07 mm vs 200.22 mm | Satisfied |
| Front two lenses dispersive or only slightly collective | f = −499.6 mm | Satisfied |

The model's EFL is 200.22 mm, the f-number is 3.5 at the modelled stop, and the back focal distance is 163.95 mm.

The patent also states that, at the zone of greatest astigmatism, the sagittal and meridional image points lie 0.393 %
and 0.347 % of the focal length in front of the Gauss image plane. A real-ray Coddington trace of the model at that
zone gives 0.478 % and 0.311 %, the same direction and size but not the same values. No stop position in the
diaphragm space reproduces both figures, and no single plausible misprint in the table does either. The difference is
recorded here rather than corrected.

At the patent's 25° half-field, the chief ray crosses R1 at 23.3 mm, inside the 31 mm rim, and reaches an image height
of 94.5 mm. The model's image circle is therefore 189 mm. Wide open, the geometric transmission falls from 100 % on
axis to about 81 % at 16.7° and 55 % at 25°. The front rim cuts one side of the off-axis bundle and the cemented pair
the other, the normal mechanical vignetting of an f/3.5 anastigmat at the edge of its field. The chief ray passes
every rim out to 33°.

## Sources

1. Albrecht Wilhelm Tronnier, **US Patent 2,084,714, "Unsymmetrical Photographic Objective,"** assigned to Jos.
   Schneider & Co., Optotechnische Gesellschaft; filed October 25, 1935, granted June 22, 1937. Drawing: PDF p. 1;
   table, field and astigmatism statements: PDF p. 2; claim: PDF p. 3.
   https://patents.google.com/patent/US2084714A/en
2. Wikipedia, **"Schneider Kreuznach,"** Xenar section, image captioned "Xenar (Tronnier, 1935)".
   https://en.wikipedia.org/wiki/Schneider_Kreuznach
3. Wikimedia Commons, **"Tronnier US2084714A (Xenar, 1935).svg,"** a contributor's redrawing of the patent geometry
   (no Schneider source cited). https://commons.wikimedia.org/wiki/File:Tronnier_US2084714A_(Xenar,_1935).svg
4. Photrio forum, user reports of 1930s f/3.5 Xenars: **"Schneider Xenar 15cm 3.5 on Speed Graphic"**,
   https://www.photrio.com/forum/threads/schneider-xenar-15cm-3-5-on-speed-graphic.220935/ and **"Schneider Xenar
   18cm in Compound from 1936"**, https://www.photrio.com/forum/threads/schneider-xenar-18cm-in-copound-from-1936.123462
