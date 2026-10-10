## Patent Reference and Design Identification

**Patent:** JP 2001-330771 A  
**Application Number:** JP 2000-149429  
**Filed:** 2000-05-22  
**Published:** 2001-11-30  
**Inventors:** Shizuka Takemoto; Norikazu Yokoi  
**Applicant:** Sigma Corporation  
**Title:** Retrofocus Type Wide-Angle Lens  
**Embodiment analyzed:** Numerical Example 1

This prescription is correlated, on construction, with the original SIGMA 28mm f/1.8 EX DG ASPHERICAL MACRO for
35 mm SLR cameras. The manufacturer has not confirmed an unchanged numerical factory prescription.
The September 2004 Sigma catalogue, PDF pages 5 and 12, documents the product and its section drawing:

- Ten elements in nine groups, with two aspherical elements highlighted at the corresponding front and rear positions.
- Floating focus, a 0.20 m minimum shooting distance measured from the image plane, and maximum magnification 1:2.9.
- Nine diaphragm blades, minimum aperture f/22, 77 mm filter thread, and 75.4° marketed full field on 35 mm format.
- Sigma SA, Minolta A (Sony A), Nikon F, Pentax K and Canon EF versions.

The catalogue establishes product presence by September 2004, not an exact release date.
Patent Example 3 is another 28 mm-class variant, so nominal focal length and topology alone do not uniquely
identify Example 1. Scaled to the vertex length, Sigma's published construction diagram places the surface vertices
within about 0.7 mm of Example 1 and up to about 1.9 mm from Example 3, so Example 1 is the closer of the two;
this is a drawing comparison, not a confirmed factory attribution.
The patent states f = 27.10 mm, Fno = 1.86 and 2ω = 77.2°; the marketed 28 mm and f/1.8 are nominal values.
No uniform scaling is applied.

Only the infinity configuration is modeled. The patent prints no back focus or total length, so the 38.52 mm
image distance behind the last surface is the paraxial back focus of the printed table. The patent's single
near-focus spacing is described under Focus Mechanism and is not modeled.
The description and tables used here are on PDF pages 4–5 of the Japanese publication itself.

## Optical Architecture

The layout is quantitatively retrofocus: its Gaussian back focal distance exceeds its effective focal length.
G1 before the diaphragm is nearly afocal and weakly negative overall. This does not make the front assembly optically
inactive: positive G1a, strongly negative G1b and positive G1c substantially redistribute the beam before balancing in net power.
The positive G2 behind the stop completes the image-forming system.

The 22 table rows comprise ten glass elements, two thin resin layers that carry the aspherical surfaces, and the
aperture stop. The patent lists each resin layer with its own thickness and index, so the data file has twelve
element entries against the manufacturer's ten-element count. The nine air-separated groups are distinct from the two focusing groups.

The patent splits G1 into G1a/G1b/G1c and G2 into G2a/G2b/G2c (Fig. 1).
The following focal lengths are standalone group calculations in air, not isolated aberration contributions in situ.

| Group | Patent surfaces | Standalone focal length (mm) |
|---|---|---:|
| G1a | 1–2 | +222.751902 |
| G1b | 3–7 | -22.560104 |
| G1c | 8–11 | +45.418141 |
| G2a | 13–15 | +35.093758 |
| G2b | 16–18 | -26.988169 |
| G2c | 19–22 | +35.491419 |

G1 as a whole gives f = -9635.800812 mm and G2 gives +46.042725 mm.
The very large negative G1 focal length is a consequence of its small residual power; it is not a sign error.
The printed table gives EFL 27.106315411 mm and Gaussian BFD 38.516134602 mm.
The EFL exceeds the stated 27.10 mm by 0.006315411 mm (0.023%), slightly more than rounding to two decimals allows.
The table is used as printed, without correction or scaling.

First-to-last refracting-vertex track is 85.81000 mm. First vertex to the image plane is
124.33000 mm. Neither is a physical barrel dimension.
The front principal plane is 43.453259 mm imageward of the first vertex;
the rear principal plane is 11.409819 mm imageward of the last vertex.
The per-surface Petzval sum is 0.0048669820 mm⁻¹ with positive imageward distance.
This paraxial scalar does not alone predict finite-aperture tangential/sagittal field curves.

## Element-by-Element Analysis

Each focal length below treats one element or resin layer as a standalone lens in air.
For hybrid and cemented pieces, these powers must not be summed as if the shared boundary were air.
Optical-role descriptions are architectural interpretations unless a patent paragraph is cited.

### L1 — Positive Meniscus

nd = 1.74330, νd = 49.5. Glass: N-LAF35 (SCHOTT coordinate-equivalent class; supplier unconfirmed). f = +222.751902 mm.

The front positive meniscus forms G1a. Its relatively weak positive power is followed by the strong divergent subgroup. Its large inferred semi-diameter accommodates oblique beams; the patent publishes no clear apertures.

### L2 — Negative Meniscus

nd = 1.70154, νd = 41.0. Glass: BASF7 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = -47.349171 mm.

The negative meniscus starts G1b. Its strong negative power combines with the following hybrid negative component to expand the beam. This does not identify the individual contribution to coma or distortion without further aberration decomposition.

### R1 — Resin Layer on L3 (Hybrid Asphere, Negative Meniscus)

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = -415.117598 mm.

R1 is the 0.15 mm resin layer between s5A and s6, bonded to the front of L3. Its air-side front surface s5A is aspherical; the resin-to-glass surface s6 is spherical. The resin's formulation and dispersion curve are not published.

### L3 — Negative Meniscus

nd = 1.78590, νd = 44.1. Glass: S-LAH51 (OHARA coordinate-equivalent class; supplier unconfirmed). f = -58.887010 mm.

This negative meniscus is the glass body of the hybrid R1+L3. Its entrance medium in the assembled lens is the resin, not air. The strongly divergent G1b subgroup is followed by the positive G1c pair.

### L4 — Biconvex Positive

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +93.482071 mm.

This thick, positive, weak-front-curvature lens starts G1c. The patent relates the positive subgroup's center thickness to negative distortion and field-curvature correction (¶0011). That group-level claim is not an isolated L4 aberration measurement.

### L5 — Positive Meniscus

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +91.038988 mm.

The positive meniscus completes G1c before the variable gap and diaphragm. It has the same printed nd and νd as L4, despite a different curvature distribution. G1c balances much of G1b's negative power.

### L6 — Biconvex Positive

nd = 1.71300, νd = 54.1. Glass: LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +37.954810 mm.

The positive front member of G2 forms G2a with R2. The patent relates G2a power to rear-group effective diameters and manufacturing sensitivity (¶0012). The hybrid component reconverges the expanded beam after the stop.

### R2 — Resin Layer on L6 (Hybrid Asphere, Positive Meniscus)

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = +440.898731 mm.

R2 is the 0.20 mm resin layer between s14 and s15A, bonded to the rear of L6. Its air-side rear surface s15A is aspherical; the glass-to-resin surface s14 is spherical. The layer faces the image, the reverse of R1.

### L7 — Positive Meniscus

nd = 1.69680, νd = 55.6. Glass: K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = +71.131708 mm.

The positive meniscus is the first member of the rear cemented G2b doublet. Its higher Abbe number is paired with a lower-Abbe negative member. The net doublet power remains negative.

### L8 — Biconcave Negative

nd = 1.75520, νd = 27.5. Glass: S-TIH4 (OHARA coordinate-equivalent class; supplier unconfirmed). f = -20.519635 mm.

The biconcave flint is the negative member of G2b. The crown/flint pairing is consistent with group-level chromatic balancing, but neither the patent nor the approximate dispersion data establish apochromatic performance.

### L9 — Positive Meniscus

nd = 1.60625, νd = 63.1. Glass: Unmatched (native 1.60625/63.1; no source-precision catalog coordinate adopted). f = +94.086642 mm.

This positive meniscus starts G2c after the narrow s18–s19 air gap. Its weak front curvature contrasts with its stronger rear face. The same printed nd and νd recur in L10; both are left unmatched because no catalogue glass reproduces the pair.

### L10 — Biconvex Positive

nd = 1.60625, νd = 63.1. Glass: Unmatched (native 1.60625/63.1; no source-precision catalog coordinate adopted). f = +55.828713 mm.

The final biconvex lens completes the positive G2c pair. Its printed d-line index and Abbe number are kept without assigning a supplier. The 38.52 mm image distance is measured from its rear surface s22.

The standalone compound focal lengths of R1+L3, L6+R2 and L7+L8 are -51.428936 mm, +35.093758 mm, -26.988169 mm, respectively.
Both resin layers are included in the whole-lens and compound calculations.

## Glass Identification and Spectral Limits

The patent defines n as the d-line index in ¶0016. The nine distinct index/Abbe pairs were compared against the
OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogues.
The chosen names are catalogue glasses with matching coordinates; no supplier or production melt is established.

| Entries | Patent nd / νd | Catalogue glass | Catalogue nd / νd |
|---|---|---|---|
| R1, R2 | 1.51840 / 52.1 | Unmatched | — |
| L9, L10 | 1.60625 / 63.1 | Unmatched | — |
| L7 | 1.69680 / 55.6 | K-LaK14 (SUMITA) | 1.6968 / 55.6 |
| L2 | 1.70154 / 41.0 | BASF7 (SUMITA) | 1.70154 / 41.1 |
| L6 | 1.71300 / 54.1 | LAC8 (HOYA) | 1.713 / 53.94 |
| L1 | 1.74330 / 49.5 | N-LAF35 (SCHOTT) | 1.7433 / 49.4 |
| L8 | 1.75520 / 27.5 | S-TIH4 (OHARA) | 1.755199 / 27.512089 |
| L3 | 1.78590 / 44.1 | S-LAH51 (OHARA) | 1.785896 / 44.202637 |
| L4, L5 | 1.80610 / 33.3 | NBFD15 (HOYA) | 1.8061 / 33.27 |

Eight glass elements carry catalogue-derived C, F and g indices and ΔPgF in the data file. The patent nd/νd are unchanged;
the catalogue dispersion curves are approximations, not exact matches. OHARA S-prefix names are kept as such.
No catalogue glass is substituted for the resin, and no dispersion curve is invented for it.

Both resin layers are therefore traced from the patent nd and νd alone. L9 and L10 are also left unmatched: the nearest
catalogue glass found, HOYA LBC3N, has νd = 63.72 against the patent's 63.1, too far to adopt as an identification.
No secondary-spectrum or APO-performance claim follows from these approximate dispersion data.

## Focus Mechanism

The patent describes G1 and G2 moving objectward while their intergroup separation shrinks (¶0005–0010).
Its table gives d11 = 6.81 mm at infinity and 3.08 mm at OBJ = 55; the stop-to-G2 distance d12 stays 4.31 mm,
so the stop travels with G2. Sigma independently describes a floating-focus production lens.

Only infinity focus is modeled, and every air gap in the data file is fixed: the patent prints no image distance
for the near state. The manufacturer's 0.20 m minimum object-to-image distance is recorded as product data and
does not generate focus travel.

The patent does not define the OBJ reference plane. Read as an object 55 mm in front of the first vertex, the near
state gives a paraxial image distance of 49.009338160 mm, magnification -0.387023561 (about 1:2.6, the magnification
the patent states for its near-focus aberration plots, Fig. 5) and an object-to-image distance of 186.089338160 mm.
Relative to a common Gaussian image, G1 and G2 would advance 6.763203558 and 10.493203558 mm, a ratio of 0.644531817
against the printed condition (2) value 0.64. These figures are calculated, not printed, and are not part of the model.

At infinity, the 38.52 mm image distance differs from the Gaussian BFD by +0.003865398 mm.
The plane is not adjusted to maximize a finite-aperture metric or to force the marketed focal length.

## Aspherical Surfaces

Both aspherical surfaces are the air-side faces of thin resin layers on glass (hybrid aspheres). The patent's equation (¶0017) is

X(H) = (H²/R) / [1 + √(1 − A(H/R)²)] + A2 H² + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰.

The standard conic constant is K = A − 1. Both surfaces use A = 1.0 and A2 = 0, hence K = 0.
All dimensional inputs are modeled in millimetres; Ap has units mm^(1−p). No scaling or coefficient reassignment is applied.

| Coefficient | s5A, front of R1 | s15A, rear of R2 |
|---|---:|---:|
| K | 0 | 0 |
| A4 | +0.39371E−05 | +0.13651E−04 |
| A6 | +0.10779E−07 | −0.38380E−08 |
| A8 | −0.97950E−11 | +0.60900E−11 |
| A10 | +0.52670E−13 | −0.58850E−14 |

At the inferred 5A semi-diameter of 17 mm, departure from the spherical base is +0.626864240 mm.
At the inferred 15A semi-diameter of 15 mm, departure from the spherical base is +0.659579073 mm.
These are calculated departures at the modeled semi-diameters, not measured production clear apertures.
The polynomial's positive axial departure has different geometric meaning on positive- and negative-curvature bases.
The patent associates its shape constraints with spherical aberration and astigmatism (¶0013), without isolating a
single coefficient's measurable aberration contribution.

## Conditional Expressions

| Patent condition | Calculated infinity value | Printed comparison |
|---|---:|---|
| 0 < abs(f/f1) < 0.25 | +0.002813084 | 0.00; within 0.005 rounding half-unit |
| −0.25 < f/f1 < 0 | -0.002813084 | 0.00; within 0.005 rounding half-unit |
| 0.6 < D1c/f < 0.8 | +0.640810075 | 0.64; within 0.005 rounding half-unit |
| 1.15 < f2/f2a < 1.40 | +1.311991838 | 1.31; within 0.005 rounding half-unit |

All four inequalities are satisfied. The printed 0.00 values represent small finite ratios, not exactly zero power.
The movement-ratio condition 0.5 < Δd1/Δd2 < 0.75 (printed value 0.64) agrees with the near-state calculation above (0.645); focus travel is not modeled.
Condition (5) requires 0.020 < ΔxH/Hmax < 0.040 for each specified asphere.
Its printed ratios 0.033 and 0.031 lie within that interval. Hmax is not printed, so they cannot be recomputed directly;
they correspond to heights of about 16.6 mm on surface 5 and 13.3 mm on surface 15, the latter close to the F/1.86
axial marginal ray height there (13.38 mm).

## Aperture, Semi-Diameters and Model Limits

The patent publishes no iris diameter or clear radii. The semi-diameters are estimated from the outline of Fig. 1,
limited by ray clearance, rim slope, edge thickness and the clearance between neighbouring surfaces.
Fig. 1 draws a flat land outside the concave rear faces of L2, L3 and L8. L2 and L8 have unequal front and rear
semi-diameters: the rear of L2 (s4) is 17.8 mm, the largest value the rim-slope limit admits, against about
18.2 mm in the drawing, and L8 is described below. The rear of L3 (s7) is 17 mm, equal to its front, so L3 keeps
the flat top of the drawing; the drawn curve ends lower, at about 15.4 mm.
All of these are inferred clear apertures, not production dimensions.

At the patent's F/1.86 the entrance-pupil radius is 7.286643928 mm, and a real axial ray at that height reaches the
stop at 13.508414216 mm; this is the stop radius the model uses. The paraxial estimate is 12.397089670 mm.
The stop semi-diameter of 14 mm stored in the data file is not the working radius.
The stop size is derived from the f-number; it is not a published diaphragm diameter.

The s18–s19 air gap is 1.96 mm on axis and closes toward the rim, where the two surfaces would touch at a height of
about 11.77 mm. Fig. 1 draws L9 square to its rim and ends the concave rear of L8 in a flat land just ahead of it,
so the s18 semi-diameter is held to 11.17 mm, with s19 at 14 mm, which leaves 0.197907877 mm of air at that height.
The drawn curve of s18 ends lower, near 10 mm, which is below the axial beam; the ray height governs.
The F/1.86 axial marginal ray heights at s18 and s19 are 11.127649 and 11.144057 mm, so the axial beam passes s18
with little margin.

The chief ray reaches the full-frame corner, image height 21.63 mm, at a field angle of 38.88°; the patent's 38.6°
half-field is the paraxial angle for that image height. The full axial beam passes every surface.
Full-aperture off-axis beams are clipped at the inferred rims, first at s18, so the model vignettes toward
the corner. This is not measured production vignetting.

The approximate dispersion data, the unconfirmed factory correlation, the derived image plane and the absence of a
focus model limit how far the model can be read as the production lens.

## Sources

1. [Japan Patent Office, JP 2001-330771 A, as served by DPMA DEPATISnet](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2001330771A).
   PDF page 1: English abstract sheet; PDF pages 3–4 (printed 2–3): mechanism, conventions and equation;
   PDF page 4 (printed 3), ¶0018–0019: Example 1 summary and prescription; PDF page 5 (printed 4), ¶0020–0023:
   coefficients, focus spacing and condition values; PDF page 7 (printed 6): Fig. 1; PDF page 8 (printed 7): Figs. 4–5 aberration plots.
2. [Sigma, September 2004 lens catalogue](https://w5.fuji.com.tw/pdf/SIGMA-lens-English.pdf).
   PDF page 5: the 28 mm product entry, section drawing and floating focus; PDF page 12: construction, mounts,
   75.4° field, 9 blades, 0.20 m and 1:2.9 specifications.
3. [Sigma, 28mm F1.8 EX DG ASPHERICAL MACRO product page](https://www.sigma-global.com/en/lenses/discontinued/wide/28_18/).
   Specifications and the lens construction diagram used for the Example 1 / Example 3 comparison.
4. [HOYA catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   [OHARA catalogue](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
   and the Schott, HIKARI, Sumita and CDGM glass catalogues.
