# SIGMA 85mm f/1.2 DG | Art

## Patent Reference and Design Identification

**Patent:** JP 2025-124346 A  
**Application Number:** JP 2024-020335  
**Filed:** 14 February 2024  
**Published:** 26 August 2025  
**Inventor:** Yuki Ueda  
**Applicant:** Sigma Corporation  
**Title:** Optical System  
**Embodiment analyzed:** Numerical Example 2

The prescription follows Numerical Example 2 and Figure 6, using the complete original publication.
The numerical tables occupy PDF pp. 17–18, corresponding to printed pp. 16–17; Figure 6 is PDF p. 28.
The PDF's initial English abstract accounts for the one-page offset. [1]

This is a strong construction correlation with the Sigma 85mm F1.2 DG | Art, not confirmation of its factory prescription.
The evidence converges in several independent respects:

1. The patent and official product have 17 elements in 12 air-separated groups.
2. Figure 6 and the official construction diagram share the five functional groups, cemented topology and three aspherical elements.
3. The example's approximately 83 mm focal length and F/1.24 aperture are consistent with the marketed 85 mm F1.2 class.
4. The published image semi-height is 21.63 mm, consistent with the product's full-frame format.
5. Two independently translating focus groups correspond in broad mechanism to the product's floating focus and dual HLA drive.
6. The source near endpoint is close to the production minimum focusing distance, but those distances are not substituted for one another.

Sigma's current specification lists L-Mount and Sony E-mount, 84 cm minimum focus, a 13-blade diaphragm,
and a maximum reproduction ratio of 1:8.9. These are production facts, separate from the patent's numerical model.
The September 2026 product evidence is retrospective to the August 2025 publication; it does not establish the exact production prescription. [2, 3]

The implemented prescription is a limited fixed-iris model.
It retains the infinity F/1.24 calibration, while the published near F/1.31 remains unreproduced.
The optical source values and finite object/image planes are unchanged; only clear-aperture estimates are inferred.

## Optical Architecture

The system comprises five functional groups with positive–positive–positive–positive–negative net power.
These are motion/power groups, distinct from the 12 air-separated groups used in the element count.
G1 contains three menisci; G2 is a single aspherical positive meniscus; G3 contains four cemented pairs around the stop;
G4 is a negative–positive focus pair separated by air; G5 combines a cemented pair and a double-aspherical negative element. [1, ¶0057–0062]

The distinguishing arrangement is double-floating focus: G2 and G4 translate toward the object along different trajectories.
G1, G3, G5 and the stop remain stationary between the published endpoints.
The stop is explicitly surface 12, between the first and second cemented pairs of G3.

| Functional group | Surface range | Computed isolated group focal length (mm) |
|---|---|---:|
| G1 | 1–6 | +227.444131 |
| G2 | 7A–8 | +122.502976 |
| G3 | 9–21 | +226.408603 |
| G4 | 22–25 | +78.969515 |
| G5 | 26–30A | -74.626360 |

At infinity, the calculated EFL is 82.629573 mm and the first-vertex-to-image track is
136.908 mm. Their ratio is 1.656889.
Thus the product's medium-telephoto focal-length category should not be confused with an optical telephoto track ratio below unity.
The Gaussian back focal distance is 17.188836 mm from the final lens vertex;
the implemented physical final gap is the source 17.1880 mm.

The first principal plane lies 46.847506 mm imageward of the first vertex;
the second lies 65.440736 mm objectward of the last vertex, at infinity.
These are optical reference planes, not mechanical mounting dimensions.

The net d-line Petzval sum is 0.001563147 mm⁻¹, corresponding to a signed radius of
639.735176 mm under the paraxial convention used here.
Every refracting interface, including cemented junctions, contributes through φ/(n n′).
This first-order curvature is not a prediction of the complete sagittal/tangential best-image surfaces.

## Element-by-Element Analysis

The following focal lengths are computed for each element standing alone in air, using its source curvature,
center thickness and refractive index. They are not an additive decomposition of in-situ group power.
Cemented-pair net focal lengths are given separately where they clarify that distinction.
Every glass name below denotes a coordinate-compatible catalog class; supplier and melt identity remain unconfirmed.

### L1 — Positive Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6L (HOYA coordinate-compatible class; supplier unconfirmed). f = +276.439 mm.

L1 is the front positive meniscus, convex toward the object, and begins stationary G1.
Its relatively weak isolated positive power is combined with the stronger positive L2 and negative L3.
The patent specifies this meniscus sequence but does not isolate L1's individual aberration contribution. [1, ¶0058]

### L2 — Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA coordinate-compatible class; supplier unconfirmed). f = +132.213 mm.

L2 supplies the stronger isolated positive component of G1.
Its high Abbe number distinguishes it from the neighboring negative L3; the official production diagram also marks
its corresponding position as SLD glass. That positional agreement does not uniquely identify FCD705 as the production material. [1, ¶0058; 3]

### L3 — Negative Meniscus

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA coordinate-compatible class; supplier unconfirmed). f = -114.915 mm.

L3 is a negative meniscus convex toward the object, completing G1.
Its negative standalone power offsets the two preceding positive elements within the net-positive stationary group.
The gap behind it is the first variable gap associated with the motion of G2. [1, ¶0057–0058]

### L4 — Positive Meniscus (1× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA coordinate-compatible class; supplier unconfirmed). f = +122.503 mm.

L4 is the complete moving G2 and is identified in the patent as G2asp.
The object-side face 7A is aspherical; the rear face is spherical.
The patent associates this group and its peripheral power profile with controlling focus breathing and distortion,
but the modeled apertures and published endpoint spacings do not establish the manufactured continuous focus law. [1, ¶0022–0023, ¶0059]

### L5 — Biconvex Positive

nd = 1.94594, νd = 17.98. Glass: FDS18-W (HOYA coordinate-compatible class; supplier unconfirmed). f = +89.478 mm.

L5 is the designated Lp, the positive member of cemented pair L5–L6 before the stop.
Its unusually high index and low Abbe number are accompanied by explicitly published partial-dispersion information.
The patent's conditions constrain this positive element's anomalous dispersion and standalone focal length;
they do not identify it as an ordinary low-index ED crown. [1, ¶0024–0029, ¶0060]

### L6 — Biconcave Negative

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate-compatible class; supplier unconfirmed). f = -43.148 mm.

L6 is the negative member of L5–L6, sharing surface 10 with L5.
The L5–L6 pair is net negative despite the positive L5; its calculated cemented-pair focal length is −84.260322 mm.
The following air space leads to the published stop. The pair's combined power includes the real glass-to-glass interface. [1, ¶0060]

### L7 — Biconcave Negative

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate-compatible class; supplier unconfirmed). f = -43.981 mm.

L7 is the biconcave negative element immediately behind the stop and the front member of L7–L8.
Its shared junction with L8 is surface 14. Figure 6 draws the junction meeting the pair's square rim, so all three
faces of L7–L8 carry the same inferred 21.3 mm semi-diameter; it is not a patent-specified rim dimension. [1, ¶0060, Fig. 6]

### L8 — Positive Meniscus

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate-compatible class; supplier unconfirmed). f = +69.464 mm.

L8 is the positive meniscus of L7–L8, convex toward the object, with a higher Abbe number than L7.
The L7–L8 pair remains net negative, with calculated focal length −116.724226 mm.
The production construction diagram marks the corresponding element as SLD, supporting the broad position/class correlation;
FCD505 and FCD515 share the relevant catalog coordinates, so the prescription does not establish a unique grade. [1, ¶0060; 3]

### L9 — Biconvex Positive

nd = 1.85033, νd = 42.70. Glass: TAFD34 (HOYA coordinate-compatible class; supplier unconfirmed). f = +50.097 mm.

L9 is the positive front member of L9–L10.
It is followed by a negative partner of substantially lower Abbe number.
The complete cemented pair has weak positive net power, with calculated focal length +393.449390 mm,
showing why the isolated element focal lengths must not be substituted for the pair's in-situ action. [1, ¶0060]

### L10 — Biconcave Negative

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate-compatible class; supplier unconfirmed). f = -55.120 mm.

L10 is the biconcave negative partner of L9–L10.
It uses the same published nd/νd coordinates as L6, L7 and L12.
The repeated coordinate does not by itself prove a common production melt, nor does it assign identical aberration roles
at these different locations in G3. [1, ¶0060]

### L11 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA coordinate-compatible class; supplier unconfirmed). f = +43.230 mm.

L11 is the strong positive member of L11–L12, the final cemented pair in G3.
Its index is the highest in this example, while its isolated power is considerably stronger than G3's overall net power.
The L11–L12 pair has calculated net focal length +54.378347 mm; the spatially separated preceding negative pairs remain essential
to the complete G3 matrix. [1, ¶0060]

### L12 — Negative Meniscus

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA coordinate-compatible class; supplier unconfirmed). f = -202.905 mm.

L12 is a negative meniscus with its concave face toward the object, completing L11–L12 and G3.
Its negative isolated power is weaker than that of the other NBFD29-coordinate negative elements in the group.
The variable spacing after surface 21 separates stationary G3 from moving G4. [1, ¶0060–0061]

### L13 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90-SG (HOYA coordinate-compatible class; supplier unconfirmed). f = -83.138 mm.

L13 is the negative meniscus at the front of G4, convex toward the object.
Together with L14 it moves as the second focus group.
The patent specifically requires positive and negative elements in G4 and discusses the group's contribution
to controlling chromatic change during focusing; that is a group-level design statement. [1, ¶0022–0023, ¶0061]

### L14 — Biconvex Positive (1× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA coordinate-compatible class; supplier unconfirmed). f = +41.410 mm.

L14 is the biconvex positive component of G4, with an aspherical object-side face 24A.
Its positive isolated power exceeds the magnitude of L13's negative power, and the assembled air-spaced G4 is net positive.
L4 and L14 share the same source glass coordinates, although their curvature, position and motion differ. [1, ¶0061]

### L15 — Biconvex Positive

nd = 2.00069, νd = 25.46. Glass: TAFD40L-W (HOYA coordinate-compatible class; supplier unconfirmed). f = +67.106 mm.

L15 is the positive member of L15–L16 at the front of stationary G5.
It is cemented to L16 at surface 27.
The complete pair is net negative, with calculated focal length −155.177078 mm, so the positive sign of L15 alone
does not describe the rear group's relay action. [1, ¶0062]

### L16 — Biconcave Negative

nd = 1.61396, νd = 44.29. Glass: LAF45 (HOYA coordinate-compatible class; supplier unconfirmed). f = -45.331 mm.

L16 is the negative biconcave member of L15–L16.
Its rear face, surface 28, is the object-side boundary of the patent's designated air lens AL.
The adjacent negative element L17 supplies AL's image-side boundary; the patent discusses this curved air space
in connection with Petzval/field-curvature control. [1, ¶0036–0039, ¶0062]

### L17 — Biconcave Negative (2× Asph)

nd = 1.68948, νd = 31.02. Glass: L-TIM28 (OHARA coordinate-compatible class; supplier unconfirmed). f = -144.576 mm.

L17 is the final negative biconcave element, with aspherical faces 29A and 30A.
It completes the net-negative G5 and follows the designated air lens AL.
Both modeled semi-diameters are 16.4 mm, within about 3% of the square rim Figure 6 draws for this element.
The matching L-TIM28 catalog class is not proof of the production supplier or manufacturing process. [1, ¶0062]

## Glass Identification and Selection

The source publishes nd and νd, with absolute PgF additionally supplied for L5.
The catalog comparison covered available primary data from OHARA, HOYA, SCHOTT, SUMITA, CDGM and HIKARI.
Names are retained as coordinate-compatible classes, without assigning a manufacturer merely from Sigma's nationality.
The table consolidates the 13 distinct source coordinates; repeated uses retain their own element identity.

| Elements | Source nd | Source νd | Candidate class used in the model |
|---|---:|---:|---|
| L2 | 1.55032 | 75.50 | FCD705 (HOYA; coordinate-compatible class) |
| L8 | 1.59282 | 68.62 | FCD515 (HOYA; coordinate-compatible class) |
| L3 | 1.60342 | 38.01 | E-F5 (HOYA; coordinate-compatible class) |
| L16 | 1.61396 | 44.29 | LAF45 (HOYA; coordinate-compatible class) |
| L17 | 1.68948 | 31.02 | L-TIM28 (OHARA; coordinate-compatible class) |
| L1 | 1.75500 | 52.32 | TAC6L (HOYA; coordinate-compatible class) |
| L4, L14 | 1.76450 | 49.09 | L-LAH91 (OHARA; coordinate-compatible class) |
| L6, L7, L10, L12 | 1.77047 | 29.74 | NBFD29 (HOYA; coordinate-compatible class) |
| L13 | 1.84666 | 23.78 | FDS90-SG (HOYA; coordinate-compatible class) |
| L9 | 1.85033 | 42.70 | TAFD34 (HOYA; coordinate-compatible class) |
| L5 | 1.94594 | 17.98 | FDS18-W (HOYA; coordinate-compatible class) |
| L15 | 2.00069 | 25.46 | TAFD40L-W (HOYA; coordinate-compatible class) |
| L11 | 2.00100 | 29.13 | TAFD55-W (HOYA; coordinate-compatible class) |

Candidate dispersion coefficients were round-tripped at the d/C/F/g lines rather than selecting names first.
Most selected coordinates agree at the patent's printed precision. L-LAH91 is a close class with νd differing by
approximately +0.006913; the OHARA L-prefix is preserved and is not replaced by an S-prefix grade.
Catalog coordinate compatibility does not identify supplier, composition, melt or availability at the actual design date. [4–9]

For L5, the patent gives PgF = 0.6546 and defines its own deviation as
PgF − (0.64833 − 0.00180νd). With νd = 17.98 this gives 0.038634, consistent with printed condition (2), 0.039.
The engine's baseline differs: PgF(normal) = 0.6438 − 0.001682νd.
Accordingly the model stores dPgF = 0.04104236, preserving the absolute source ratio. [1, ¶0020, ¶0100; 10]

The source explicitly describes Lp as anomalous-partial-dispersion glass, supporting the element's patent tag.
No unreported nC, nF or ng is synthesized as a measured source value.
Catalog-assisted dispersion remains an approximation to an unidentified production material;
this model does not establish apochromatic performance or reproduce a production MTF chart.

## Focus Mechanism

The source status is PUBLISHED double-floating focus.
G2 moves 6.22 mm toward the object and G4 moves 6.40 mm toward the object between the two tabulated configurations.
G1, G3, G5 and the stop remain stationary. The overall first-vertex-to-image distance is conserved. [1, ¶0057–0062, ¶0100]

| Air gap | Infinity (mm) | Source near state (mm) |
|---|---:|---:|
| d6 | 13.9300 | 7.7100 |
| d8 | 4.1900 | 10.4100 |
| d21 | 8.6500 | 2.2500 |
| d25 | 2.1500 | 8.5500 |
| BF | 17.1880 | 17.1880 |

The source near distance d0 is 694.8314 mm from object plane to first vertex.
Adding the computed 136.908 mm track gives 831.7394 mm object-to-image distance.
That precise sum is used numerically; the printed state label is rounded to 832 mm and the production MFD is 840 mm.

The calculated near-state EFL is 74.713457 mm, a 9.580245% decrease from infinity.
The finite-source paraxial magnification at the fixed image plane is -0.112935066.
The printed full fields, 28.98° and 26.91°, are reproduced by exact chief-ray tracing to the printed precision.
Focal-length change and field-angle change are distinct descriptions of focus-dependent behavior.

Intermediate spacings are linearly interpolated only for visualization.
No measured motor trajectory, continuous production focus law or additional published finite state is inferred.

## Aspherical Surfaces

Surfaces 7A, 24A, 29A and 30A belong to L4, L14 and L17.
The patent equation uses the standard conic convention:

z(h) = (h²/R) / [1 + √(1 − (1 + K)h²/R²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰ + A12 h¹² + A14 h¹⁴.

All four K values are zero. Coefficient units are mm^(1−p) for Ap, with h in millimetres.
No conic offset, scale conversion, parity change or fitted substitute coefficients are used. [1, ¶0091–0092, ¶0100]

| Coefficient | 7A | 24A | 29A | 30A |
|---|---:|---:|---:|---:|
| K | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |
| A4 | -1.34170E-06 | -2.10140E-06 | -5.97450E-06 | -4.17290E-06 |
| A6 | -7.37970E-10 | -7.28010E-11 | 7.78050E-08 | 7.69700E-08 |
| A8 | -2.08620E-13 | 2.69240E-13 | -1.89690E-10 | -1.63300E-10 |
| A10 | 4.08000E-16 | -5.85700E-16 | 1.46960E-13 | 1.30570E-13 |
| A12 | -9.63930E-19 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |
| A14 | 7.18370E-22 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |

The modeled clear apertures are inferred, so departures below are evaluated at the final data-file radii,
not at patent-published effective diameters.

| Surface | Modeled semi-diameter (mm) | Polynomial departure from the base sphere (mm) |
|---|---:|---:|
| 7A | 25.5 | -0.797625067 |
| 24A | 19.5 | -0.306871465 |
| 29A | 16.4 | +0.295808658 |
| 30A | 16.4 | +0.524919840 |

On 7A and 24A, the negative leading A4 and the complete fitted polynomial reduce the positive base-sphere sag
at the retained rim. Surface 7A lies on the front moving group identified by the patent as G2asp.
On 29A and 30A, higher orders outweigh the negative A4 term at the modeled edge, giving positive net departures.
The full polynomial must therefore be evaluated; A4 alone does not describe the rim profile.

The source does not establish whether these specific production surfaces are molded, polished or otherwise fabricated.
A low-temperature catalog-family match is insufficient evidence for a manufacturing-process claim.

## Conditional Expressions

The following values are recomputed from the prescription and the source definitions.
The patent's rounded condition table is on PDF p.23 / printed p.22; all seven conditions satisfy the published bounds. [1, ¶0105]

| Condition | Source definition / inequality | Calculated | Printed |
|---|---|---:|---:|
| (1) | 1.10 < βG5 < 1.60 | 1.241271498 | 1.24 |
| (2) | 0.021 < native ΔPgF(Lp) < 0.055 | 0.038634000 | 0.039 |
| (3) | 1/[f(Lp)νd(Lp)] < 0.0020 | 0.000621578 | 0.0006 |
| (4) | 1.0 < fG2/fG4 < 6.0 | 1.551269187 | 1.6 |
| (5) | [fG4/mean νd of positive G4 elements]/f < 0.050 | 0.019468430 | 0.019 |
| (6) | −1.00 < (R2air+R1air)/(R2air−R1air) < 1.00 | 0.641574699 | 0.64 |
| (7) | 0.005 < abs((Hnear−Hinf)/fG2) < 0.050 | 0.025256729 | 0.025 |

Condition (1) uses G5's transverse magnification for the incoming infinity-focus converging bundle;
it is obtained from the complete system and the preceding G1–G4 subsystem, not from the sign of G5 alone.
Conditions (2) and (3) use the designated positive Lp, L5, with its native patent dispersion baseline and standalone focal length.
Conditions (4) and (5) relate the two moving-group powers and the positive element material within G4. [1, ¶0024, ¶0030]

Condition (6) concerns the air lens AL between surface 28 and 29A, whose source radii are +32.6400 and −149.4900 mm.
This is a curved air space with two glass/air boundaries, not an added glass element.
The calculated G5 Petzval contribution is negative, consistent with the patent's group-level discussion of field-curvature control.
It does not isolate the complete off-axis correction into a single radius or element. [1, ¶0036–0039]

Condition (7) uses exact chief-ray heights on surface 7A, with each ray passing through the stop center and reaching
source image semi-height 21.63 mm in its respective configuration. [1, ¶0040]

## Model Scope and Limitations

The model keeps the patent's surface data and both published focus states unchanged; the example lists no cover glass or filter plates.
All clear semi-diameters are estimated from Figure 6 and checked against the axial F/1.24 ray in both focus states.
Where the figure ends a concave face's curve before a flat annulus (the rear faces of L2, L3 and L16), the modeled
semi-diameter follows the end of the curve, or the axial ray where that is higher. L6's rear face is instead carried
to the element's drawn 23 mm outer rim, so L6 renders square-cut as Figure 6 draws it; the stop, not that face, limits
every traced ray there. Cemented junctions take the height of their outer faces, as the figure draws them.

The iris radius, 20.068 mm, is set so that the exact infinity-focus image-space f-number equals the printed F/1.24;
it is not a measured production diaphragm. The iris stays fixed through focus.
At the near state the exact image-space f-number is about 1.257 against the printed 1.31,
so the patent's near-focus aperture is not reproduced.
The viewer's close-focus f-number readouts use first-order pupil and magnification estimates and differ from this exact value.

At close focus the outermost drawn on-axis rays fall outside the fixed iris and are blocked by it; the diagram ends them
at the rear face of L6, just ahead of the stop. At every focus position the outer off-axis rays
are vignetted by the element rims. These rays are drawn as blocked rather than hidden.

The model does not establish production MTF, production glass identities or Sigma's continuous focus law.

## Sources

1. Japan Patent Office, [JP2025124346A, Optical System](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025124346A).
   Numerical Example 2, ¶0100, PDF pp.17–18; Figure 6, PDF p.28; conventions ¶0019–0020 and ¶0088–0092;
   conditional expressions ¶0024, ¶0030, ¶0036, ¶0040, with values in ¶0105.
2. Sigma Corporation, [85mm F1.2 DG | Art official specification](https://www.sigma-global.com/en/lenses/a026_85_12/), retrieved 4 October 2026.
3. Sigma Corporation, [official lens construction diagram](https://www.sigma-global.com/lenses/images/a026_85_12__specification_01.png.png), retrieved 4 October 2026.
4. HOYA, [optical-glass catalog downloads](https://www.hoya-opticalworld.com/english/datadownload/), 7 July 2026 AGF including obsolete glasses.
5. OHARA, [catalog downloads](https://www.ohara-inc.co.jp/en/product/catalog/), 1 July 2026 all-products catalog including special-order and discontinued grades.
6. SCHOTT, [optical glass](https://www.schott.com/en-gb/products/optical-glass), preferred/special catalog, June 2025-B distribution.
7. SUMITA, [optical-glass downloads](https://www.sumita-opt.co.jp/en/download/), August 2026 catalog.
8. CDGM, [manufacturer download directory](https://www.cdgmgd.com/go.htm?k=ge_lei_xia_zai&url=downList), September 2026 AGF header.
9. HIKARI, [optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/), Data worksheet revision beginning 1 June 2025.
10. LensVisualizer, [current dispersion implementation](https://github.com/ronbuening/LensVisualizer/blob/709dda72a0ddead8ee77b8306347429031f8b379/src/optics/dispersion.ts), normal-line conversion convention.
