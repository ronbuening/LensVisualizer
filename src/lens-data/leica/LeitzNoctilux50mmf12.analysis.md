# LEITZ NOCTILUX 50mm f/1.2 — US 3,459,468, Sole Example

## Patent Reference and Design Identification

**Patent:** US 3,459,468
**Application Number:** 449,192
**Filed:** 19 April 1965
**Priority:** 25 April 1964 (Germany, L 47,701)
**Published:** 5 August 1969
**Inventors:** Helmut Marx; Paul Sindel
**Assignee:** Ernst Leitz GmbH
**Title:** *Two-Aspherical-Surfaced, High Speed Photographic Objective Lens*
**Example details:** repeated in claim 1, and the sole, unnumbered drawing

The patent contains one numerical prescription, printed in the description and repeated in claim 1. The drawing is not numbered and shows the same six-element, four-group layout. [US 3,459,468, PDF pp. 1–3.]

The production-lens identification is a convergent correlation, not a manufacturer-confirmed patent attribution:

1. Leica's 4 October 2016 press release names Helmut Marx as the designer of the Noctilux 50 mm f/1.2 introduced at photokina 1966. It gives six elements in four groups, with the aspherical elements first and last. [Leica Camera AG, 2016, pp. 1–2.]
2. The patent was filed by Ernst Leitz with Marx as first inventor, and claims a German priority of April 1964. Its example is f/1.2 with a 45° field and two aspheric surfaces, the first and the last.
3. The topology matches: positive front singlet, cemented doublet, stop, cemented doublet, positive rear singlet.

Leica does not cite the patent number or confirm individual radii or glasses. The 1975 all-spherical f/1.0, the 2008 f/0.95 and the 2021 f/1.2 reissue are separate designs and are not modeled here.

The patent text describes a **52 mm** focal length for a **24×36 mm** image. The table is normalized to f = 1, with f/1.2 and a 2 × 22.5° = 45° field. Every length is scaled by 52 rather than by the marketed 50 mm.

## Optical Architecture and Source Conventions

The four groups are L1 | L2+L3 | L4+L5 | L6: a positive front singlet, a weakly negative cemented front doublet, the stop, a weakly negative cemented rear doublet and a positive rear singlet. This is a modified double-Gauss layout with six elements, eight glass-air surfaces and two cemented interfaces (S4 and S7).

In the patent table, d is the distance **to the preceding surface**. The first entry, d = −0.722, gives the position of surface 1 relative to the entrance pupil, not a thickness. The nine physical intervals are 0.130, 0.004, 0.226, 0.042, 0.270, 0.031, 0.181, 0.001 and 0.117. Their sum, 1.002, becomes a 52.104 mm vertex-to-vertex length at the 52 mm scale.

Only S1 and S10 are aspherical. The two near-contact air gaps, 0.004 and 0.001, become 0.208 and 0.052 mm. They are kept as air gaps rather than treated as cemented interfaces.

The model gives EFL 52.022 mm and paraxial back focus 27.668 mm, for a first-vertex-to-image length of 79.772 mm. The patent does not print the back focus; it is derived.

## The Aspheric Surfaces

The patent does not use the standard conic-plus-polynomial sag. It defines the sag c of surfaces 1 and 10 implicitly, through the chord L from the vertex to the surface point: L² = y² + c², b = L²/2, and c = c(1)·b + c(2)·b² + … + c(6)·b⁶. With only the first term the surface is a sphere of curvature c(1). For S1 the coefficients are 0.869, −0.188, 0.2, 0, −16 and 100; for S10 they are −0.932, 1.889, −12, 0, 233 and 1,670 (normalized to f = 1).

The patent also states that c(1) is the vertex curvature 1/r, but the printed radii are rounded independently: 1.151 and −1.073, against 1/0.869 = 1.1507 and 1/(−0.932) = −1.0730. The model uses the c(1) values, giving vertex radii of +59.839 and −55.794 mm. The printed radii would give EFL 52.024 mm and back focus 27.677 mm, a difference of 0.002 and 0.008 mm.

The data format has no implicit surface type. Each surface is therefore stored as a paraboloid (K = −1) on the c(1) vertex radius, plus A4–A20 terms converted by least squares from the patent equation over the stored clear radius (26.5 mm for S1, 16.5 mm for S10). These A-terms are derived, not printed. Within those radii the stored sag matches the patent equation to better than 10⁻⁵ µm, and the slope to better than 10⁻⁷ rad. The aspheric departure from the vertex sphere at the rim is about −180 µm on S1 and +188 µm on S10. The polynomial is not valid beyond the stored radii.

## Element-by-Element Analysis

### L1: positive front aspherical meniscus

ne = 1.821, νe = 45.2. Glass: unidentified high-index glass; TAFD10 and TAF5 are only loose analogues. Standalone focal length about +95.8 mm.

An aspheric front surface (S1) and a spherical rear surface (R2 = 4.571 normalized) make it a positive meniscus 6.76 mm thick. The patent puts one asphere as far forward as possible, where its contribution to the third-order spherical-aberration coefficient is negative. The 26.5 mm semi-diameter follows the proportions of the patent drawing. Leica's 2016 account says one of the two aspherical elements was made from a high-index special glass; L1 is the higher-index of the two.

### L2: positive front member of the front cemented doublet

ne = 1.900, νe = 40.5. Glass: unidentified very-high-index glass with no close catalog match. Standalone focal length about +41.1 mm.

Radii 0.575 and 2.434 (normalized) form a positive meniscus 11.752 mm thick, the thickest element in the lens.

### L3: negative rear member of the front cemented doublet

ne = 1.792, νe = 25.9. Glass: dense flint, labelled with Schott SF56A as a catalog equivalent (ne 1.7918, νe 25.87 at C′/e/F′); Ohara PBH23 matches equally well. Neither is a confirmed production melt. Standalone focal length about −27.0 mm.

Radii 2.434 and 0.349 form a negative meniscus whose strongly curved rear surface faces the stop. It outweighs L2's power, so the cemented doublet is weakly negative (−220.0 mm).

### L4: biconcave front member of the rear cemented doublet

ne = 1.844, νe = 30.0. Glass: unidentified high-index flint. Standalone focal length about −20.8 mm.

Radii −0.450 and +1.385 make it biconcave, 1.612 mm thick, with its concave front facing the stop.

### L5: biconvex rear member of the rear cemented doublet

ne = 1.900, νe = 40.5, the same printed values as L2. Standalone focal length about +27.1 mm.

Radii +1.385 and −0.665 form a biconvex element 9.412 mm thick. The L4+L5 doublet remains weakly negative (−258.2 mm). The 0.052 mm air gap to L6 widens away from the axis because the facing surfaces curve in opposite directions.

### L6: positive rear singlet with an aspheric rear surface

ne = 1.694, νe = 54.6. Glass: lanthanum crown, labelled with Ohara S-LAL9 as a catalog equivalent (ne 1.6940, νe 54.59 at C′/e/F′); Schott N-LAK9, Sumita K-LaK9 and Hikari J-LAK9 also match. The production melt is not known. Standalone focal length about +43.0 mm.

A spherical front surface (R = 1.180 normalized) and the aspheric rear surface S10 form a biconvex singlet 6.084 mm thick. This is the patent's rear asphere, placed as far back as possible so that the two aspheres act as independently as possible.

## Glass Map

The patent gives e-line indices and Abbe numbers (ne, νe). The data file keeps them in e-line form (`indexReference: "e"`) without converting them to d-line. Two positions have catalog rows that reproduce the printed pair at C′/e/F′ within its precision: L3 (SF56A) and L6 (S-LAL9). They are labelled as catalog equivalents, not as the glasses Leitz used, and the chromatic trace uses their dispersion curves. L1, L2, L4 and L5 match no catalog row; the nearest for L1 (TAF5, TAFD10) is about 0.001 off in ne and 1 off in νe. They stay `Unmatched` and are traced from ne and νe. Every element is traced at C′/e/F′ whichever tier it uses, so the mix does not combine reference lines. The two very-high-index positions, L2 and L5 at ne = 1.900, have no close modern catalog equivalent. No partial-dispersion data are printed, so the model makes no claim about secondary spectrum.

## Focus Mechanism and Stop Position

The patent gives the infinity state only and no focus travel. The production lens focuses to 1.0 m. That distance is product metadata; the close-focus state is not modeled. The floating rear group described in Leica's 2016 release belongs to the 2008 f/0.95 lens, not this one.

The stop position is not printed. The patent's first d = −0.722 places the entrance pupil 0.722 (37.544 mm) behind surface 1. Imaging that point back through S1–S5 puts the stop 8.239 mm after S5 and 5.801 mm before S6, splitting the 14.04 mm central gap. The stop radius of 12.687 mm gives f/1.2 for real marginal rays; the paraxial f-number is about 1.19. The exit pupil lies 29.06 mm in front of the last vertex.

## Model Scope and Limitations

No clear diameters are printed. The semi-diameters (S1–S10: 26.5, 26.5, 23.5, 23.5, 14.0, 12.5, 20.4, 18.8, 16.5, 16.5 mm) follow the proportions of the patent drawing and are not factory measurements. The full f/1.2 axial bundle passes every surface without clipping.

The patent's 22.5° half-field reaches an image height of 21.02 mm. The 24×36 mm corner (21.63 mm) needs about 23.2°. At full aperture the rims of the rear singlet cut the oblique bundle heavily toward the corner. Strong wide-open corner vignetting is expected in a 1960s f/1.2 lens of this size.

## First-Order Properties and Patent Conditions

The front principal plane lies 41.86 mm behind the first vertex and the rear principal plane 24.35 mm in front of the last vertex. The Petzval sum is about 0.00526 mm⁻¹.

The patent's general conditions limit the spread of a "modified surface power" p across the front surfaces concave toward the stop, and across the corresponding rear surfaces. Taking those groups as S1/S3 in front and S8/S10 at the rear gives half-spreads of about 0.0003 and 0.079, inside the stated 0.15 limit. The patent drawing does not label these surfaces, so this grouping is an interpretation.

At f/1.2 the on-axis diffraction MTF at the e-line is approximately 0.7953 at 20 lp/mm, 0.4219 at 40 lp/mm and 0.2823 at 50 lp/mm. The patent states that wide open the lens shows no objectionable flare spread around point lights at night; that is the patent's own claim, not a reproduced measurement.

## Sources

1. [US 3,459,468](https://patents.google.com/patent/US3459468A/en), Helmut Marx and Paul Sindel, Ernst Leitz GmbH. PDF p. 1: drawing; p. 2: description, 52 mm / 24×36 mm example and chord-form asphere definition; p. 3: table, asphere coefficients and claim 1.
2. [Leica Camera AG, “50 Years of Leica Noctilux-M,” press information, 4 October 2016](https://leica-camera.com/sites/default/files/downloads/135192/Press%20Information_50%20Years_Leica%20Noctilux%20M.pdf), pp. 1–2 (the 1966 lens).
