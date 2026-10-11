## Patent Reference and Design Identification

**Patent:** JP 2001-330771 A  
**Application Number:** JP 2000-149429  
**Filed:** 2000-05-22  
**Published:** 2001-11-30  
**Inventors:** Shizuka Takemoto; Norikazu Yokoi  
**Applicant:** Sigma Corporation  
**Title:** Retrofocus Type Wide-Angle Lens  
**Embodiment analyzed:** Numerical Example 2

This prescription is correlated, on construction, with the original SIGMA 24mm f/1.8 EX DG ASPHERICAL MACRO for
35 mm SLR cameras, not the later DG DN or Art lenses. The manufacturer has not confirmed an unchanged numerical
factory prescription.

1. The September 2004 Sigma catalogue, PDF pages 5 and 12, shows ten elements in nine groups, with two aspherical
   elements in the same front and rear positions as patent Fig. 2. Sigma's product page lists the same 10 elements
   in 9 groups, 84.1°, 0.18 m and 1:2.7, but the construction image on that page is the drawing of the 20mm f/1.8
   (13 elements in 11 groups, the same image as on the 20mm page), so patent Fig. 2 is the governing section.
   A third-party side-by-side drawing of the 24 mm and 28 mm lenses agrees with Fig. 2's layout of five elements
   ahead of the stop and five behind.
2. The patent's f = 24.69 mm, Fno = 1.85 and full field 82.44° are close to, but distinct from,
   the marketed 24 mm, f/1.8 and 84.1°. The prescription is not rescaled to the marketed focal length.
   Example 2 is the patent's only 24 mm-class example; Examples 1 and 3 are 28 mm-class (f = 27.10 and 27.27 mm).
3. Sigma describes floating focus, a 0.18 m minimum focus distance and maximum magnification 1:2.7.
   The patent describes two-group floating focus and a near state at about 1:2.6.
   These similarities support the correlation; they do not prove an identical mechanism or formula.
4. The 2001 publication precedes the 2004 catalogue, which lists Sigma SA, Canon EF, Nikon F, Pentax K and
   Minolta A (Sony A) versions. Sigma announced a Four Thirds version on 2006-09-26.

Only the infinity configuration is modeled. The patent prints no back focus or total length, so the 38.58 mm
image distance behind the last surface is the paraxial back focus of the printed table. The patent's single
near-focus spacing is described under Focus Mechanism and is not modeled.
The tables used here are on PDF page 5 (printed page 4) of the Japanese publication itself.

## Optical Architecture

The layout is retrofocus in the quantitative sense: the calculated infinity back focal distance exceeds the effective
focal length. It achieves this without a strongly negative net front group. Strong positive and negative subgroups
nearly balance before the stop, while the rear group supplies substantial positive power.

The 22 table rows comprise ten glass elements, two thin resin layers that carry the aspherical surfaces, and the
aperture stop. The patent lists each resin layer with its own thickness and index, so the data file has twelve
element entries against the manufacturer's ten-element count; the nine air-separated groups are unchanged.

The patent divides the assembly into G1 before the diaphragm and G2 after it. G1 contains positive G1a,
negative G1b and positive G1c; G2 contains positive G2a, negative G2b and positive G2c (Fig. 2). The diagram
labels these six sub-groups.
The following focal lengths are standalone group calculations in air from the printed d-line prescription,
not isolated aberration contributions in situ.

| Group | Patent surfaces | Standalone focal length (mm) |
| ----- | --------------- | ---------------------------: |
| G1a   | 1–2             |                  +197.734937 |
| G1b   | 3–7             |                   -19.957111 |
| G1c   | 8–11            |                   +46.497971 |
| G2a   | 13–15           |                   +35.023360 |
| G2b   | 16–18           |                   -28.201157 |
| G2c   | 19–22           |                   +35.212308 |

G1 as a whole has f = -298.269126 mm; G2 has f = +43.689362 mm.
The printed table gives EFL 24.689902525 mm and Gaussian BFD 38.579155506 mm.
The first-to-last refracting-vertex track is 85.83000 mm; first vertex to the image plane
is 124.41000 mm. Neither is a physical barrel dimension.

The principal planes lie 40.727597 mm imageward of the first vertex and
13.889253 mm imageward of the last vertex, respectively.
The surface-by-surface Petzval sum is 0.0042773117 mm⁻¹ with positive imageward distance.
That paraxial sum is not a prediction of the finite-aperture tangential/sagittal field curves by itself.

## Element-by-Element Analysis

Each focal length below treats one element or resin layer as a standalone lens in air.
For hybrid and cemented pieces, these powers must not be summed as if the shared boundary were air.
Optical-role descriptions are architectural interpretations unless a patent paragraph is cited.

### L1 — Positive Meniscus

nd = 1.72342, νd = 38.0. Glass: BAFD8 (HOYA) / S-BAH28 (OHARA) coordinate-equivalent class; supplier unconfirmed. f = +197.734937 mm.

The front positive meniscus is G1a. Its relatively weak positive standalone power is opposed by the following negative subgroup. Its large inferred front rim accommodates oblique fields; no physical clear diameter is published.

### L2 — Negative Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -41.975595 mm.

This negative meniscus begins G1b. The high index permits strong refraction without an especially thick body. Together with the following negative hybrid component it forms the principal divergent portion of G1.

### R1 — Resin Layer on L3 (Hybrid Asphere, Negative Meniscus)

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = -630.244284 mm.

R1 is the 0.20 mm resin layer between s5A and s6, bonded to the front of L3. Its air-side front surface s5A is aspherical; the resin-to-glass surface s6 is spherical. The resin's formulation and dispersion curve are not published.

### L3 — Negative Meniscus

nd = 1.78590, νd = 44.1. Glass: S-LAH51 (OHARA coordinate-equivalent class; supplier unconfirmed). f = -49.352254 mm.

This negative meniscus is the glass body of the hybrid R1+L3. Its entrance medium in the assembled lens is the resin, not air. L2 and this hybrid together form the strongly negative G1b subgroup.

### L4 — Biconvex Positive

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +100.772651 mm.

This thick positive lens starts G1c. The patent explains that the central thickness of the positive front subgroup helps control negative distortion and field curvature (¶0011). That group-level statement does not isolate the contribution of L4 alone.

### L5 — Positive Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +86.490026 mm.

The positive meniscus completes G1c immediately before the variable intergroup gap and stop. It has the same printed nd and νd as L2 but the opposite standalone power; index and Abbe number alone do not determine an element's role.

### L6 — Biconvex Positive

nd = 1.71300, νd = 54.1. Glass: LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +37.895602 mm.

The strongly positive rear-group front lens forms G2a together with R2. The patent relates G2a power to required rear-group diameters and manufacturing sensitivity (¶0012). The hybrid component reconverges the expanded beam after the stop.

### R2 — Resin Layer on L6 (Hybrid Asphere, Positive Meniscus)

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = +437.572470 mm.

R2 is the 0.20 mm resin layer between s14 and s15A, bonded to the rear of L6. Its air-side rear surface s15A is aspherical; the glass-to-resin surface s14 is spherical. The layer faces the image, the reverse of R1.

### L7 — Positive Meniscus

nd = 1.69680, νd = 55.6. Glass: K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = +62.572881 mm.

The positive meniscus is the first member of the rear cemented doublet G2b. Its higher Abbe number contrasts with the following strong negative flint. The net doublet power remains negative.

### L8 — Biconcave Negative

nd = 1.75520, νd = 27.5. Glass: S-TIH4 (OHARA coordinate-equivalent class; supplier unconfirmed). f = -20.205857 mm.

The biconcave flint is the strong negative member of G2b. The positive crown/negative flint pairing offers chromatic balancing at group level; the patent does not provide sufficient spectral performance evidence to call the design apochromatic.

### L9 — Positive Meniscus

nd = 1.71300, νd = 54.1. Glass: LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +89.218592 mm.

This positive meniscus starts G2c after the narrow s18–s19 air gap. Its nearly flat front contrasts with its stronger rear face; with L10 it forms the final positive subgroup.

### L10 — Biconvex Positive

nd = 1.60625, νd = 63.1. Glass: Unmatched (native 1.60625/63.1; no compatible catalog coordinate). f = +56.543777 mm.

The final biconvex element completes G2c. No catalogue glass reproduces its printed nd and νd, so it is left unmatched. The 38.58 mm image distance is measured from its rear surface s22.

The standalone compound focal lengths of R1+L3, L6+R2 and L7+L8 are -45.714611 mm, +35.023360 mm and -28.201157 mm, respectively.
Both resin layers are included in the whole-lens and compound calculations.

## Glass Identification and Spectral Limits

The patent defines n as the d-line index in ¶0016. The nine distinct index/Abbe pairs were compared against the
OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogues.
The chosen names are catalogue glasses with matching coordinates; no supplier or production melt is established.

| Entries | Patent nd / νd | Catalogue glass                | Catalogue nd / νd                |
| ------- | -------------- | ------------------------------ | -------------------------------- |
| R1, R2  | 1.51840 / 52.1 | Unmatched                      | —                                |
| L10     | 1.60625 / 63.1 | Unmatched                      | —                                |
| L7      | 1.69680 / 55.6 | K-LaK14 (SUMITA)               | 1.6968 / 55.6                    |
| L6, L9  | 1.71300 / 54.1 | LAC8 (HOYA)                    | 1.713 / 53.94                    |
| L1      | 1.72342 / 38.0 | BAFD8 (HOYA) / S-BAH28 (OHARA) | 1.72342 / 37.99; 1.72342 / 37.96 |
| L8      | 1.75520 / 27.5 | S-TIH4 (OHARA)                 | 1.755199 / 27.512089             |
| L3      | 1.78590 / 44.1 | S-LAH51 (OHARA)                | 1.785896 / 44.202637             |
| L4      | 1.80518 / 25.4 | S-TIH6 (OHARA)                 | 1.805181 / 25.425363             |
| L2, L5  | 1.83400 / 37.3 | NBFD10 (HOYA)                  | 1.834 / 37.34                    |

Nine glass elements carry catalogue-derived C, F and g indices and ΔPgF in the data file. The patent nd/νd are unchanged;
the catalogue dispersion curves are approximations, not exact matches, and the catalogue νd of S-LAH51 and LAC8 differ
from the printed values by 0.10 and 0.16. OHARA S-prefix names are kept as such. L1's stored line indices are those of
HOYA BAFD8; OHARA S-BAH28 has the same nd and a νd of 37.96.

Both resin layers are traced from the patent nd and νd alone; a resin cannot be identified with a catalogue glass
from nd/νd. L10 is also left unmatched: the nearest catalogue glass found, HOYA LBC3N, has νd = 63.72 against the
patent's 63.1, too far to adopt as an identification.
No secondary-spectrum or APO-performance claim follows from these approximate dispersion data.

## Focus Mechanism

The patent describes G1 and G2 moving objectward while their intergroup separation shrinks (¶0005–0010).
Its table gives d11 = 5.96 mm at infinity and 2.30 mm at OBJ = 50; the stop-to-G2 distance d12 stays 4.69 mm,
so the stop travels with G2. Sigma's catalogue independently describes a floating-focus production lens.

Only infinity focus is modeled, and every air gap in the data file is fixed: the patent prints no image distance
for the near state. The manufacturer's 0.18 m minimum focus distance (1:2.7) is recorded as product data and
does not generate focus travel.

The patent does not define the OBJ reference plane. Read as an object 50 mm in front of the first vertex, the near
state gives EFL 24.862310738 mm, a paraxial image distance of 48.134601016 mm, magnification −0.383318827 (about
1:2.6, the magnification the patent states for its near-focus aberration plots, Fig. 7) and an object-to-image
distance of 180.304601016 mm, close to the marketed 0.18 m.
Relative to a common Gaussian image, G1 and G2 would advance 5.895445510 and 9.555445510 mm, a ratio of 0.616972333
against the printed condition (2) value 0.62. These figures are calculated, not printed, and are not part of the model.

At infinity, the 38.58 mm image distance differs from the Gaussian BFD by +0.000844494 mm.
The plane is not adjusted to maximize a finite-aperture metric or to force the marketed focal length.

## Aspherical Surfaces

Both aspherical surfaces are the air-side faces of thin resin layers on glass (hybrid aspheres). The patent's equation (¶0017) is

X(H) = (H²/R) / [1 + √(1 − A(H/R)²)] + A2 H² + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰.

The standard conic constant is K = A − 1. Both surfaces use A = 1.0 and A2 = 0, hence K = 0.
All dimensional inputs are modeled in millimetres; Ap has units mm^(1−p). No scaling, sign reversal or coefficient
reassignment is applied. The polynomial contains only even radial powers.

| Coefficient | s5A, front of R1 | s15A, rear of R2 |
| ----------- | ---------------: | ---------------: |
| K           |                0 |                0 |
| A4          |     +0.38440E−05 |     +0.13754E−04 |
| A6          |     +0.10581E−07 |     −0.36849E−08 |
| A8          |     −0.99037E−11 |     +0.26087E−11 |
| A10         |     +0.50550E−13 |     +0.39670E−14 |

At the modeled semi-diameters 16.9 mm and 14.5 mm, the axial departures from the respective spherical bases are
+0.590253155 mm and +0.580476005 mm. Those are calculated model departures, not manufacturer clear-aperture measurements.
The different signs of the base curvatures mean that a positive polynomial departure does not have the same geometric
interpretation on the two surfaces. The patent discusses the aspheric shape in relation to spherical aberration and
astigmatism (¶0013); no single coefficient is assigned an independently measured aberration contribution.

## Conditional Expressions

| Patent condition     | Calculated infinity value | Printed comparison                         |
| -------------------- | ------------------------: | ------------------------------------------ |
| 0 < abs(f/f1) < 0.25 |               0.082777265 | 0.08; within 0.005 rounding half-unit      |
| −0.25 < f/f1 < 0     |              −0.082777265 | −0.08; within 0.005 rounding half-unit     |
| 0.6 < D1c/f < 0.8    |               0.726612832 | 0.72; outside the 0.005 rounding half-unit |
| 1.15 < f2/f2a < 1.40 |               1.247434897 | 1.25; within 0.005 rounding half-unit      |

All four inequalities are satisfied. The printed D1c/f value is left as a source inconsistency: with the near-state
focal length the ratio would be 0.721574120, a possible explanation that the patent does not state.
The movement-ratio condition 0.5 < Δd1/Δd2 < 0.75 (printed value 0.62) agrees with the near-state calculation above (0.617); focus travel is not modeled.
The printed condition (5) ratios ΔxH/Hmax, 0.027 and 0.033, cannot be recomputed directly because Hmax is not printed;
they correspond to heights of about 15.9 mm on surface 5 and 13.6 mm on surface 15, the latter the F/1.85 axial
marginal ray height there (13.57 mm).

## Aperture, Semi-Diameters and Model Limits

The source publishes neither physical clear radii nor a stop diameter. Modeled semi-diameters are estimated from the
outline of Fig. 2, scaled by the printed vertex spacing, and floor-checked by exact ray trace at F/1.85 and at the
21.63 mm image corner; the figure is a drawing, not a dimensioned source. Fig. 2 draws flat lands outside the concave
rear faces of L2, L3 and L8 and draws L9 square to its rim. Surface 4 is 17.5 mm, the rim-slope limit, where Fig. 2 ends
the curve near 17.7 mm. L3 and its resin layer are 16.9 mm against a drawn 16.85 mm, and the front corner of L3 sits just
inside the rear of L2 as drawn, with 0.598 mm of air between surfaces 4 and 5A at that height. L1 is square at 26.65 mm,
the front of L2 is 21.9 mm, L4 is 14.0 mm and L5 is 14.5 mm, each as Fig. 2 draws them; the F/1.85 axial ray needs
12.88 mm at L4 and 13.46 mm at L5. Behind the stop the rims are also the drawn heights: L6 with its resin layer
14.5 mm, the cemented pair L7–L8 13.4 mm at its front and cemented surfaces, L9 13.6 mm and L10 14.7 mm, where the
F/1.85 axial ray needs 13.70, 12.33, 11.51 and 11.44 mm. The diagram joins unequal front and rear rims with a straight
edge, so the flat lands Fig. 2 draws on L2 and L8 appear as bevels.

At the patent's F/1.85 the entrance-pupil radius is 6.672946628 mm, and a real axial ray at that height reaches the
stop at 13.512993540 mm; this is the stop radius the model uses. The paraxial estimate is 12.378810993 mm.
The 14 mm stop semi-diameter stored in the data file is not the working radius, and no diaphragm diameter is published.

The s18–s19 air gap is 1.82 mm on axis and closes toward the rim. The F/1.85 axial marginal ray heights at s18 and
s19 are 11.343020980 and 11.354183435 mm. The default clearance rule, which lets surface sag take 90% of an air gap,
would cap the height shared by the two faces at 11.188980100 mm and clip the axial beam.

Surface 18 is therefore 11.35 mm, the axial ray height rounded upward at 0.01 mm precision; Fig. 2 ends the drawn curve
of that face lower, near 9 mm, and continues it as a flat land. Surface 19 is 13.6 mm, equal to surface 20, because
Fig. 2 draws L9 square to its rim; the two faces would meet at 11.78 mm, so only the rear of L8 stops short. At
11.35 mm the two faces take 92.652788567% of the axial gap, so the data file raises the allowance for this lens from
90% to 92.66%; 0.133719248 mm of air remains there. The gap between surfaces 4 and 5A uses the same
allowance, at 92.09% for the 16.9 mm shared height.
Both resin layers keep positive thickness out to their rims, and no surfaces overlap.

The chief ray reaches the full-frame corner, image height 21.63 mm, at a field angle of 41.78°; the patent's 41.22°
half-field is the paraxial angle for that image height. The full axial beam passes every surface.
Full-aperture off-axis beams are clipped at the inferred rims, first at s18, so the model vignettes toward
the corner. This is not measured production vignetting.

The approximate dispersion data, the unconfirmed factory correlation, the derived image plane and the absence of a
focus model limit how far the model can be read as the production lens.

## Sources

1. [Japan Patent Office, JP 2001-330771 A, as served by DPMA DEPATISnet](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2001330771A).
   PDF page 1: English abstract sheet; PDF pages 3–4 (printed 2–3): claims, mechanism, d-line convention and equation;
   PDF page 5 (printed 4), ¶0024–0029: Example 2 summary, prescription, coefficients, focus spacing and condition
   values; PDF page 7 (printed 6): Fig. 2; PDF pages 8–9 (printed 7–8): Figs. 6–7 aberration plots.
2. [Sigma, September 2004 lens catalogue](https://w5.fuji.com.tw/pdf/SIGMA-lens-English.pdf).
   PDF page 5: the 24 mm product entry, construction and floating focus; PDF page 12: construction, mounts,
   84.1° field, 9 blades, 0.18 m and 1:2.7 specifications.
3. [Sigma, 24mm F1.8 EX DG ASPHERICAL MACRO product page](https://www.sigma-global.com/en/lenses/24_18/).
   Specifications; the lens construction image shown there is the 20mm F1.8 drawing.
   The Four Thirds version is from Sigma's press release of 2006-09-26, as reproduced by
   [Photography Blog](https://www.photographyblog.com/news/sigma_announces_4_new_four_thirds_lenses).
4. [HOYA catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   [OHARA catalogue](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
   and the Schott, HIKARI, Sumita and CDGM glass catalogues.
