# SIGMA 24-70mm f/2.8 DG OS HSM | Art

## Patent Reference and Design Identification

**Patent:** JP 2017-156719 A  
**Application Number:** JP 2016-042815  
**Filed:** 2016-03-04  
**Published:** 2017-09-07  
**Inventor:** Ryo Shioda  
**Applicant:** Sigma Corporation  
**Title:** Variable Power Optical System  
**Embodiment analyzed:** Numerical Example 1

The source is the original Japanese A-publication, preserved with its PAJ front wrapper.
Numerical Example 1 is in paragraph 0131, printed pages 16-18 (PDF pages 17-19).
The asphere convention is defined in paragraphs 0122-0130; Figure 1 is on printed page 29.
The PAJ wrapper supplies the Latin-script inventor form SHIODA RYO, normalized here to Ryo Shioda. [1]

The selected association is the A017 DSLR 24-70mm F2.8 DG OS HSM Art.
It is an architectural correlation, not a manufacturer-confirmed factory prescription.
It does not identify the later DG DN or DG DN II models.
The following evidence converges:

1. The source has 19 elements in 14 air-separated groups, matching Sigma's published construction.
2. Seven aspherical surfaces belong to four elements, matching the manufacturer's four aspherical elements.
3. Sigma's construction diagram marks L12, L16 and L17 as its three SLD elements, and L4, L9, L13 and L19 as aspherical.
   The patent's indices and Abbe numbers are consistent with these low-dispersion positions.
   This does not establish Sigma's glass supplier or a particular production melt.
4. The source describes lateral stabilization by the negative G4a subgroup and internal focusing by G2.
   The production lens provides OS and an HSM focusing drive. The optical model does not reproduce their mechanics.
5. The patent's focal lengths, f-number and fields are close to, but distinct from, the commercial specification.
   Sigma's June 2017 release announcement identifies the contemporary 24-70mm DSLR model. [2,3]

The manufacturer specifies Sigma SA, Canon EF and Nikon F versions, covering full frame.
The commercial specifications include F2.8, F22 minimum aperture, nine rounded diaphragm blades,
0.37 m minimum focus, 1:4.8 maximum magnification, an 82 mm filter, and 88 × 107.6 mm dimensions.
Those dimensions are for the Sigma SA version and use a mechanical filter-to-mount length reference;
they must not be compared directly to first-optical-vertex-to-image track. [2,4]

No scaling was applied. The marketed 24-70 mm and F2.8 specifications differ from the patent's 24.84-67.55 mm and F2.93.
The exact production prescription remains unconfirmed.

## Optical Architecture

The optical train is a five-group positive-negative-positive-negative-positive zoom.
The five functional groups differ from the fourteen air-separated optical groups.
Five cemented doublets account for the difference between nineteen elements and fourteen air-separated groups.
The aperture stop is source surface 15, immediately before the first element in G3.
No sensor cover plate, rear filter plate or resin hybrid layer is specified in this example. [1, ¶¶0058-0064, 0131]

| Functional group | Source surfaces | Elements | Calculated isolated focal length, mm |
|---|---|---|---:|
| G1 | 1-5 | L1-L3 | +101.329591 |
| G2 | 6-14 | L4-L8 | -16.128185 |
| G3 | 15-22 | L9-L12 | +29.835380 |
| G4 | 23-27 | L13-L15 | -59.330467 |
| G5 | 28-34 | L16-L19 | +51.395811 |
| G4a | 23-25 | L13-L14 | -47.565173 |
| G4b | 26-27 | L15 | +239.494364 |

G1 supplies positive front-group power. G2 is the negative variator and the published focus group.
G3 supplies positive power behind the diaphragm. G4 combines the negative, laterally movable G4a
with the weaker positive G4b. G5 supplies the final positive group. [1, ¶¶0058-0065]

The focal lengths above are isolated group values with air on either side.
They are not additive allocations of whole-system power, nor individual aberration contributions.
Zooming changes the group separations, so the whole-system power changes while these rigid-group powers stay fixed.

| Published infinity state | EFL, mm | BFD, mm | First vertex to image, mm | BFD/EFL | Track/EFL |
|---|---:|---:|---:|---:|---:|
| Wide | 24.838234 | 38.559853 | 149.7327 | 1.552439 | 6.028315 |
| Intermediate | 45.008649 | 54.813687 | 163.7170 | 1.217848 | 3.637456 |
| Tele | 67.553642 | 60.730459 | 180.7328 | 0.898996 | 2.675397 |

BFD is measured from source surface 34 to the image plane in air; track starts at source surface 1.
The wide and intermediate states have BFD greater than EFL, supporting a retrofocus description at those states.
The tele state does not satisfy that inequality.
All three first-vertex-to-image track/EFL ratios exceed unity, so the long end is not described here as an
optical telephoto construction merely because it is the tele end of the zoom.

## Element-by-Element Analysis

Element focal lengths below are independently calculated for each isolated thick element in air.
Cemented net powers are stated separately where relevant.
They do not measure each element's in-situ contribution to the full zoom's focal length.
All indices and Abbe numbers are the printed d-line values; every named material is a catalog equivalent.
The production melts and suppliers are not identified.

### L1 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA catalog equivalent; production supplier unspecified). f = -170.309280 mm.

L1 is a negative meniscus, convex toward the object, cemented to L2 at source surface 2.
Its relatively high index and low Abbe number contrast with the positive partner.
The source explicitly describes this negative-positive front doublet. [1, ¶0059]

### L2 — Biconvex Positive

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA catalog equivalent; production supplier unspecified). f = +149.340141 mm.

L2 is the biconvex positive partner in the first cemented pair.
The pair has weak positive net power compared with either isolated component.
Together with L3, it forms the positive G1; the doublet alone should not be called the whole front group. [1, ¶0059]

### L3 — Positive Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (HOYA catalog equivalent; production supplier unspecified). f = +110.698611 mm.

L3 is a positive meniscus with its convex face toward the object.
It is air-spaced from the first doublet and completes G1.
The first variable zoom spacing follows its rear surface 5. [1, ¶¶0059, 0065]

### L4 — Negative Meniscus

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA catalog equivalent; production supplier unspecified). f = -22.264007 mm.

L4 is the leading negative meniscus of G2, with aspheres on both faces, surfaces 6A and 7A.
Its strongly curved rear face and the following air space precede the L5-L6 cemented pair.
The source specifies an aspherical glass element; no separate resin film is tabulated. [1, ¶0060]
The M-TAFD305 label is a coordinate-compatible catalog proxy, not proof of molding or supplier identity.

### L5 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA catalog equivalent; production supplier unspecified). f = -18.293771 mm.

L5 is the biconcave negative member of the second cemented pair.
It is the patent's LN reference element, whose Abbe number enters condition (5).
Its Abbe number is greater than L6's in this design; conventional assumptions about a negative low-Abbe
achromat partner must not replace the actual table. [1, ¶¶0060-0061]

### L6 — Positive Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5G (HOYA catalog equivalent; production supplier unspecified). f = +33.759998 mm.

L6 is a positive meniscus, convex toward the object, cemented to L5.
It is the patent's LP1 reference element, appearing in conditions (5) and (6).
The L5-L6 pair remains net negative, consistent with its placement within negative G2. [1, ¶0061]

### L7 — Biconvex Positive

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA catalog equivalent; production supplier unspecified). f = +33.581866 mm.

L7 is a separate biconvex positive element within G2.
Its low-Abbe coordinate differs substantially from the preceding positive meniscus.
It is LP2 in the patent's condition (6), rather than the positive partner cemented to LN. [1, ¶0061]

### L8 — Negative Meniscus

nd = 1.88300, νd = 40.81. Glass: TAFD30 (HOYA catalog equivalent; production supplier unspecified). f = -50.930729 mm.

L8 is a negative meniscus with its convex side toward the image.
It closes G2; variable spacing d14 follows it and leads to the diaphragm.
The stated closer-focus movement translates the complete G2, not only this element. [1, ¶0060]

### L9 — Biconvex Positive

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 (HOYA catalog equivalent; production supplier unspecified). f = +36.939017 mm.

L9 is the first element after the stop and is biconvex with two aspherical faces, surfaces 16A and 17A.
It begins positive G3. Its large positive isolated power does not, by itself, quantify its contribution
to spherical aberration or coma; both surface departures and the surrounding ray geometry matter. [1, ¶0062]

### L10 — Biconvex Positive

nd = 1.61997, νd = 63.88. Glass: PCD40 (HOYA catalog equivalent; production supplier unspecified). f = +95.010757 mm.

L10 is an air-spaced biconvex positive element between L9 and the L11-L12 doublet.
Its relatively high Abbe number contrasts with the following high-dispersion negative component.
The source lists it as a separate member of G3. [1, ¶0062]

### L11 — Negative Meniscus

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA catalog equivalent; production supplier unspecified). f = -35.296191 mm.

L11 is a negative meniscus, convex toward the object, cemented to L12.
The S-NBH56 coordinate match is supported by OHARA's original data, but that is not a production attribution.
The opposed powers and dispersion contrast permit chromatic balancing within the pair;
no quantitative secondary-spectrum allocation is established here. [1, ¶0062; 6]

### L12 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent; production supplier unspecified). f = +39.599028 mm.

L12 is the biconvex positive partner of L11 and the lowest-index, highest-Abbe element in this prescription.
Its FCD1-equivalent coordinate is consistent with Sigma's low-dispersion designation at this position. [2]
The doublet's net power is weakly negative despite L12's positive isolated power. [1, ¶0062]

### L13 — Biconcave Negative

nd = 1.77250, νd = 49.50. Glass: M-TAF105 (HOYA catalog equivalent; production supplier unspecified). f = -29.513771 mm.

L13 is biconcave and has an aspherical object-side surface 23A.
It is cemented to L14, forming the negative G4a stabilization subgroup.
The patent assigns lateral motion to this complete subgroup; the centered prescription does not model
a displaced stabilization state. [1, ¶0063]

### L14 — Positive Meniscus

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA catalog equivalent; production supplier unspecified). f = +75.119694 mm.

L14 is the positive meniscus partner within G4a, convex toward the object.
The pair's net negative power is retained in the group calculation.
Its FD225-equivalent material repeats the coordinate used by L7, without proving that the physical melts
or their manufacturing histories were identical. [1, ¶0063]

### L15 — Positive Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA catalog equivalent; production supplier unspecified). f = +239.494364 mm.

L15 is the positive meniscus that forms G4b by itself.
Its isolated and subgroup focal lengths therefore coincide.
It belongs to G4's axial zoom motion, but the patent identifies G4a, not G4b, as the lateral stabilization mover. [1, ¶0063]

### L16 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; production supplier unspecified). f = +36.812444 mm.

L16 is a separate biconvex positive element at the front of G5.
Its 1.59282/68.62 coordinate also appears in L17 and has multiple compatible HOYA candidates.
Sigma's diagram marks this as one of the three SLD elements. [1, ¶0064; 2]

### L17 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; production supplier unspecified). f = +71.805163 mm.

L17 is a biconvex positive element cemented to the biconcave L18.
It shares L16's source coordinate but has a substantially weaker isolated positive power.
Sigma's diagram also marks this position as SLD. [2]
The net power of the cemented pair is negative; L16 and L19 help make the whole G5 positive. [1, ¶0064]

### L18 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA catalog equivalent; production supplier unspecified). f = -28.556612 mm.

L18 is the high-index biconcave negative partner in the rear cemented doublet.
TAFD45 is a coordinate-compatible catalog equivalent; the source does not name its supplier.
Its power sign and dispersion contrast support a balancing role within G5, but do not independently
establish a particular aberration correction. [1, ¶0064]

### L19 — Biconvex Positive

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 (HOYA catalog equivalent; production supplier unspecified). f = +80.982543 mm.

L19 is the final biconvex positive element and has two aspherical faces, 33A and 34A.
The published back-focus spacing follows surface 34A directly.
No extra sensor optics or mechanical filter is added to that gap. [1, ¶0064, Example 1 surface table]

### Cemented-pair net powers

| Pair | Elements | Calculated net focal length, mm |
|---|---|---:|
| D1 | L1 + L2 | +1202.262726 |
| D2 | L5 + L6 | -40.274668 |
| D3 | L11 + L12 | -464.153481 |
| D4 | L13 + L14 | -47.565173 |
| D5 | L17 + L18 | -47.860393 |

The shared cemented boundary refracts from the first glass directly into the second.
It is not represented as two independent glass-air faces or a synthetic cement layer.
The isolated element focal lengths above are explanatory reference quantities; the pair values include their real shared interface.

## Glass Identification and Selection

The source lists fifteen distinct nd/νd coordinates but no catalog names.
The catalog names identify compatible spectral proxies; the production melts and suppliers are not identified.
HOYA's current and obsolete catalog entries supply the equivalents below, except for S-NBH56,
whose coordinate is supported by OHARA's datasheet. [5,6]

| Coordinate nd / νd | Catalog-equivalent annotation | Source entry surfaces |
|---|---|---|
| 1.92286 / 20.88 | E-FDS1 (HOYA catalog equivalent; production supplier unspecified) | 1 |
| 1.72916 / 54.67 | TAC8 (HOYA catalog equivalent; production supplier unspecified) | 2, 8 |
| 1.80420 / 46.50 | TAF3 (HOYA catalog equivalent; production supplier unspecified) | 4 |
| 1.85135 / 40.10 | M-TAFD305 (HOYA catalog equivalent; production supplier unspecified) | 6 |
| 1.83481 / 42.72 | TAFD5G (HOYA catalog equivalent; production supplier unspecified) | 9 |
| 1.80809 / 22.76 | FD225 (HOYA catalog equivalent; production supplier unspecified) | 11, 24 |
| 1.88300 / 40.81 | TAFD30 (HOYA catalog equivalent; production supplier unspecified) | 13 |
| 1.80610 / 40.73 | M-NBFD130 (HOYA catalog equivalent; production supplier unspecified) | 16, 33 |
| 1.61997 / 63.88 | PCD40 (HOYA catalog equivalent; production supplier unspecified) | 18 |
| 1.85478 / 24.80 | S-NBH56 (OHARA catalog equivalent; production supplier unspecified) | 20 |
| 1.49700 / 81.61 | FCD1 (HOYA catalog equivalent; production supplier unspecified) | 21 |
| 1.77250 / 49.50 | M-TAF105 (HOYA catalog equivalent; production supplier unspecified) | 23 |
| 1.51742 / 52.15 | E-CF6 (HOYA catalog equivalent; production supplier unspecified) | 26 |
| 1.59282 / 68.62 | FCD505 (HOYA catalog equivalent; production supplier unspecified) | 28, 30 |
| 1.95375 / 32.32 | TAFD45 (HOYA catalog equivalent; production supplier unspecified) | 31 |

The selected catalog dispersion formulas reproduce the source coordinates closely;
alternative matching HOYA rows remain possible at several coordinates.
The source provides no measured nC, nF, ng, PgF or ΔPgF table for this example.
The model therefore does not import catalog line indices as if they were patent measurements.
All nineteen glass entries have compatible catalog dispersion curves.
For L9 and L19, the M-NBFD130 annotation resolves through a catalog alias to NBFD13; this is not evidence that the two manufacturing families are identical.
The ordinary monochromatic prescription uses the stored source nd values. Chromatic G-channel evaluation uses the catalog curve,
whose d-line index differs from stored nd by up to 0.000006792 in this set. These small differences are not silently substituted into the patent table.
The low-dispersion designations for L12, L16 and L17 are inferred from Sigma's diagram and the printed nd/νd.
The patent does not designate anomalous dispersion for those elements or establish apochromatic performance.

The HOYA M- prefixes distinguish moldable catalog families from conventional names.
That prefix is retained in the annotation and must not be generalized into a production process claim.
OHARA S-NBH56 retains its S- prefix; it is not silently replaced by an L-type family.
SCHOTT N-SF66 is another coordinate-compatible example at the first element's nd/νd. [7]
No exhaustive uniqueness search across all glass makers is claimed.

## Focus Mechanism

The patent states that the complete negative G2 moves toward the object when focusing from infinity to a nearer object.
No finite-distance spacing table is supplied for Numerical Example 1. [1, ¶0060]
Only infinity focus is modeled. Each zoom station retains the same group spacings at both focus endpoints,
so there is no internal focus travel or modeled finite conjugate.

Sigma's 0.37 m minimum focus and HSM drive are production specifications. [2,4]
That distance is retained as metadata only; it does not certify modeled focusing at 0.37 m,
and no calculated close-focus magnification is presented.
The mechanical displacement law and production close-focus travel remain unknown.

### Zoom motion at infinity

| Source gap, mm | Wide | Intermediate | Tele |
|---|---:|---:|---:|
| d5 | 3.4411 | 15.9487 | 30.5409 |
| d14 | 15.9358 | 5.4783 | 2.0000 |
| d22 | 2.6285 | 4.7911 | 6.1391 |
| d27 | 9.3452 | 2.8630 | 1.5000 |
| BF | 38.5600 | 54.8138 | 60.7307 |

These are the three published infinity states; no additional source station is implied.
Measured from a fixed image plane, every functional group front moves objectward between each pair of published stations.
None reverses between those sampled endpoints. That does not prove a monotonic physical cam path between them.

| Group | Wide front z, mm | Intermediate front z, mm | Tele front z, mm |
|---|---:|---:|---:|
| G1 | -149.7327 | -163.7170 | -180.7328 |
| G2 | -130.1637 | -131.6404 | -134.0640 |
| G3 | -91.4801 | -103.4143 | -109.3162 |
| G4 | -70.8440 | -80.6156 | -85.1695 |
| G5 | -54.4614 | -70.7152 | -76.6321 |

Negative z is objectward from the fixed image plane.
The three source track lengths differ, so this model is not an internal zoom with constant first-vertex-to-image length.

Linear interpolation of the five gap rows between the three published states alone does not preserve focus.
At the two interval midpoints, that approximation gives:

| Interpolated sample | Calculated EFL, mm | Final air gap, mm | Paraxial BFD, mm | Image gap minus BFD, mm |
|---|---:|---:|---:|---:|
| 0.5 | 32.417611 | 46.686900 | 44.896675 | +1.790225 |
| 1.5 | 54.771900 | 57.772250 | 57.836805 | -0.064555 |

These modeled midpoint defocus values are not errors in the patent's published endpoints.
The model therefore adds 18 solved, unpublished stations, nine inside each published interval, at focal lengths
evenly spaced in f (26.857 to 42.993 mm and 47.264 to 65.296 mm). G1, G2, G4 and G5 each follow one quadratic
through their three published image-fixed positions, in a zoom parameter whose published nodes sit at
ln(f/24.84)/ln(67.55/24.84) = 0, 0.594 and 1. G3, the group holding the stop, is the compensator: at each station
the parameter and G3's departure from its own quadratic are solved together for the target EFL and zero paraxial
defocus. G3 departs from its quadratic by at most 1.30 mm. Holding focus by moving the whole lens instead (back
focus alone), or by G2 or G5, made at least one group reverse inside a published interval; G4 avoided reversal
but departed 1.96 mm from its quadratic. With G3 every group moves objectward at each of the 20 steps, and G3 also
stays reversal-free with evenly spaced nodes.

Paraxial defocus is below 0.0003 mm at all 21 stations and at most 0.047 mm at sampled positions between them,
against 1.81 mm before. The focal-length readout, interpolated between station EFLs, now stays within 0.035 mm of the
traced EFL, against 2.54 mm before. The published rows are unchanged. The solved stations are a smooth,
focus-holding visualization path, not the factory cam, which the patent does not give.

## Aspherical Surfaces

The seven aspherical surfaces are 6A and 7A on L4, 16A and 17A on L9,
23A on L13, and 33A and 34A on L19.
The source marks these with asterisks; the application labels use an A suffix. [1, ¶0125, Example 1]

The published sag equation is

z(y) = (y²/r) / [1 + √(1 − (1 + K)(y/r)²)] + A4y⁴ + A6y⁶ + A8y⁸ + A10y¹⁰ + A12y¹².

Here y is radial height in millimetres, z is imageward sag in millimetres,
and A_p has units mm^(1-p). The conic convention is unchanged: all source K values are zero.
No coefficient refit, scale transformation, odd-order term or conic offset is applied.
Terms above A12 are zero because the source polynomial ends at A12.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 6A | 0.0000 | 1.62710E-05 | -6.78580E-08 | 3.22350E-10 | -8.15570E-13 | 9.97360E-16 |
| 7A | 0.0000 | 5.96130E-06 | -6.16310E-08 | 3.70060E-10 | -1.98060E-12 | 8.93120E-15 |
| 16A | 0.0000 | -3.38060E-06 | 7.29310E-09 | -6.83650E-12 | -7.89830E-14 | 5.29580E-17 |
| 17A | 0.0000 | 6.75530E-06 | 4.15380E-09 | -1.71460E-11 | -4.14860E-14 | 0.00000E+00 |
| 23A | 0.0000 | 4.31950E-06 | 1.97060E-09 | -5.65700E-11 | 1.01870E-13 | 0.00000E+00 |
| 33A | 0.0000 | -6.60950E-06 | -1.73870E-08 | 1.55020E-10 | -3.38880E-13 | 0.00000E+00 |
| 34A | 0.0000 | 4.89080E-06 | -7.93250E-09 | 1.64860E-10 | -2.98090E-13 | 0.00000E+00 |

The following departures are evaluated at each surface's published maximum effective semi-diameter,
not at an inferred common aperture. They are signed differences from the K=0 base sphere.

| Surface | Source semi-diameter, mm | Departure from base sphere, mm | Actual rim angle, degrees |
|---|---:|---:|---:|
| 6A | 16.415 | +0.776339 | 18.091817 |
| 7A | 12.180 | +0.062107 | 48.367809 |
| 16A | 14.280 | -0.114596 | 19.356776 |
| 17A | 14.305 | +0.273518 | 3.422609 |
| 23A | 12.365 | +0.085615 | 8.349270 |
| 33A | 13.220 | -0.205324 | 1.146716 |
| 34A | 13.505 | +0.236825 | 2.276491 |

The positive rim departures on 6A, 7A, 17A, 23A and 34A shift the rim imageward relative to their base spheres;
negative departures on 16A and 33A shift it objectward.
The total polynomial, not the A4 sign alone, governs these rim values.
These geometrical observations do not allocate a numerical aberration correction to an individual surface.

## Aperture, Field and Model Limits

The surface table's 25.99 mm stop effective diameter is the maximum across the zoom range.
The general-data table separately gives actual station diaphragm diameters of 19.31, 23.87 and 25.99 mm.
The model retains that physical iris schedule, with radii of 9.655, 11.935 and 12.995 mm.
It does not infer a replacement iris diameter from marketed F2.8.
At the 18 solved stations the iris radius is the stop radius of the f/2.93 axial marginal ray times the
published-radius ratio (1.0011, 1.0012 and 1.0009 at the published stations), interpolated quadratically in the
zoom parameter. Each solved station therefore passes the f/2.93 axial beam with the same 0.1% margin as the
published ones; a plain quadratic in the radii themselves would have left them up to 0.9% small near 29 mm.

| Published infinity state | Physical iris diameter, mm | Exact axial-aperture f-number | Paraxial-pupil f-number |
|---|---:|---:|---:|
| Wide | 19.31 | 2.926862 | 2.882364 |
| Intermediate | 23.87 | 2.926796 | 2.823134 |
| Tele | 25.99 | 2.927655 | 2.797948 |

The exact values follow from an axial incident ray solved to the physical stop edge, then EFL divided by twice
its entrance radius. Their agreement with printed F2.93 is independent of the application's nominal f-number metadata.
The different paraxial values show why a finite-aperture pupil must not be identified with its small-ray approximation.

At the printed full fields, exact chief rays reach image heights of 21.6290, 21.6295 and 21.6268 mm,
consistent with the source's 21.63 mm at all three zoom stations.
That chief-ray result does not show that every point of the whole iris is accessible or unvignetted.

A separate stop-target diagnostic at 60% of the source half-field uses pupil fractions
−0.75, −0.375, 0, +0.375 and +0.75 as exact stop-coordinate targets.
At the three published states and the two interval midpoints of the earlier linear model, first aperture clips occur only at air/glass boundaries;
none first occurs at a cemented junction in that particular diagnostic.
These fixed stop targets differ from the entrance-pupil ray positions used in the diagram.

Broader full-field and full-iris boundary sampling has explicit limits:

- At wide full field, no continuous pre-stop root was established for the −1 and −0.75 iris targets.
  These are unresolved aiming results, not proof that a physical lens blocks those rays.
- At the intermediate source station, 60%-field and +1 iris target first clips at cemented surface 21
  by 0.144550 mm in the transcribed aperture model.
- At tele full field, the −0.375 iris target first clips at cemented surface 2 by 0.145930 mm.

These are modeled boundary results, not confirmed production vignetting.
The stop-target diagnostic must not be read as full-field, unvignetted-pupil certification.
No aperture was altered to eliminate the boundary results, and no skew-ray or complete three-dimensional coverage claim is made.

### Entrance-pupil rays and source-rim clipping

The application launches its ordinary meridional fan at the solved chief-ray height plus
fraction × current entrance-pupil semi-diameter. It does not solve each fraction to a fixed iris coordinate.
Its field geometry is also recomputed from the current optical state rather than copied from the patent's full-field row.
In the earlier linear-spacing approximation, the ray at zoomT=0.875, f/2.93, pupil fraction −0.75 first clips at a cemented interface,
at an actual off-axis angle of 12.8435252753°. The entrance-pupil semi-diameter is 10.8264208707 mm,
and the launch height is 10.6718186345 mm with slope −0.227993434786.
At source surface 24, ray height is −12.5788737719 mm against the preserved 12.395 mm clear radius,
an overshoot of 0.1838737719 mm.

This interior state is not a published source state or a measured production-lens defect.
The separate 0.92 gap-intrusion setting addresses air-gap clearance, not ray clipping.

The selected patent supplies only three numerical zoom stations. Paragraph 0065 and Figure 1 give movement directions,
but no sufficient numerical interior cam law. No replacement intermediate prescription is inferred from its arrows.
The continuous model now runs through 18 solved, unpublished stations (see Zoom motion at infinity) that hold
paraxial focus; they do not recover the factory cam.

### S24 clipping across zoom and aperture

Across zoom positions spaced by 0.0025, at pupil fractions −0.75, −0.375, 0, +0.375 and +0.75,
and f/2.93, f/3.0, f/3.2, f/4, f/5.6, f/8, f/11, f/16 and f/22, the same −0.75 ray first clips
the L13→L14 cemented interface at S24. With the 21 solved and published stations:

- At f/2.93: 91 sampled positions, zoomT=0.7125–0.9375 (about 54.6–64.7 mm), with maximum sampled overshoot 0.349798 mm.
- At f/3.0: 59 sampled positions, zoomT=0.8550–1.0000, with maximum sampled overshoot 0.168031 mm at tele.

The earlier linear model gave 73 positions at zoomT=0.7800–0.9600 (0.343460 mm) and 38 at 0.9075–1.0000.
Holding focus did not remove the clip: that interval was already within 0.08 mm of focus, and the clip is set by the
printed G4a rims (12.365 and 12.395 mm), which the same ray overruns by 0.417 mm at the published tele state at f/2.93,
where it first meets air/glass surface 23A.

These are sampled ranges, not mathematically certified continuous boundaries. No first cemented-interface clip
was observed at the listed f/3.2-and-smaller openings, and no different cemented surface or unresolved trace
was found in that grid. Other pupil densities, untested aperture values, full-field bundles and skew rays are not
covered by these samples.

The f/3.0 tele case uses a published zoom geometry but a slightly stopped-down aperture. Stopping down changes
the sampled ray's entrance-pupil height: it can clear an earlier air/glass boundary and then encounter the smaller
cemented-interface aperture first. Thus first-clip location can change even as the iris shrinks.
The tele f/3.0 ray reaches S24 at −12.5630311136 mm against its unchanged 12.395 mm radius.

The printed G4a rims and physical iris schedule are retained. These modeled clips do not establish
production-lens vignetting or an unvignetted field. The solved stations hold infinity focus approximately;
the factory cam remains unknown.

### Source apertures and air-gap clearance

The effective diameters are retained exactly as printed and halved for the surface semi-diameters.
At surfaces 7A and 8, their shared radial extent is 11.91 mm.
The surface-sag intrusion is 7.893607 mm across the printed 8.666800 mm air gap,
leaving positive physical separation of 0.773193 mm.
This is 91.078677% intrusion, exceeding the model's default 90% clearance policy while remaining nonintersecting.

A lens-wide 92% sag-intrusion limit accommodates this geometry.
Every other eligible gap meets the default 0.90 limit at all 21 modeled zoom stations.
The exception changes the conservative clearance policy, not a source dimension, diameter or asphere.
Rim slope and positive element thickness remain separate geometric constraints.

## Patent Conditions and First-Order Balance

The six condition expressions are given in the claims and paragraphs 0021-0055,
with Example 1's values in paragraph 0139, printed page 28. [1]
The source supplies additional digits for some condition inputs beyond the general and surface tables.
Those digits are preserved as source evidence; they are not silently substituted for the actual prescription values.

| Condition | Expression | Calculated from retained prescription | Printed condition value |
|---|---|---:|---:|
| (1) | (D12t/ft)*FNOt | 1.323588 | 1.323 |
| (2) | ft/f3 | 2.264213 | 2.264 |
| (3) | ft/f1 | 0.666672 | 0.667 |
| (4) | abs(ft/f2) | 4.188546 | 4.189 |
| (5) | vdN-vdP1 | 11.950000 | 11.952 |
| (6) | vdP1-vdP2 | 19.960000 | 19.957 |

All six computed values fall within the patent's stated inequalities.
The small final-digit differences reflect the rounded prescription and higher-precision condition inputs.
Conditions (5) and (6) concern the Abbe relationships of LN=L5, LP1=L6 and LP2=L7;
they are not a measured demonstration of apochromatic correction.

The d-line Petzval sum, evaluated surface by surface as ((n′−n)/R)/(n n′), is
+0.001894993 mm⁻¹.
It is unchanged by air-gap-only zooming.
This paraxial sum is not the actual sagittal or tangential best-focus surface and does not by itself certify a flat field.

## Stabilization Scope

The patent's Figure 4 compares laterally displaced G4a states at infinity.
Paragraph 0018 specifies 0.15 mm at wide, 0.21 mm at the intermediate station and 0.30 mm at tele. [1]
Those source states are retained as context. The centered prescription does not implement subgroup decenter,
reproduce the displaced aberration diagrams or certify the production stabilizer's performance.

## Sources

1. [JP 2017-156719 A, original Japanese publication and PAJ wrapper](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2017156719A).
   Example 1: ¶¶0057-0065; conventions: ¶¶0122-0130; numerical data: ¶0131, printed pp16-18 / PDF pp17-19;
   conditions: ¶0139, printed p28 / PDF p29; Figure 1: printed p29 / PDF p30.
2. [Sigma, 24-70mm F2.8 DG OS HSM Art A017 product specification](https://www.sigma-global.com/en/lenses/a017_24_70_28/).
3. [Sigma Corporation of America, June 2017 shipping announcement](https://press.sigmaphoto.com/corporate/06/sigma-begins-shipping-its-14mm-f1-8-dg-hsm-and-24-70mm-f2-8-dg-os-hsm-art-lenses/).
4. [Sigma, A017 instruction manual](https://www.sigma-global.com/en/support/download/24_70mm_F28_DG_OS_HSM_A017.pdf).
5. [HOYA, Optical Glass Catalog 20260707, including obsolete types](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).
   Catalog-equivalent coordinates and dispersion coefficients, not proof of the production supply chain.
6. [OHARA, S-NBH56 original datasheet, 25-04](https://oharacorp.com/wp-content/uploads/2025/04/esnbh56.pdf).
7. [SCHOTT, Optical Glass datasheet collection, May 2019](https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf?rev=5358bb64e13a44f2b37f5065490509af), N-SF66.

Manufacturer and catalog sources accessed 2026-10-04.

