## Patent Reference and Design Identification

**Patent:** CN 122410763 A  
**Application Number:** 202610010446.5  
**Filed:** January 6, 2026  
**Published:** July 17, 2026  
**Priority:** January 15, 2025, JP2025-005511  
**Inventor:** Takuya Tanaka (田中琢也)  
**Applicant:** Fujifilm Corporation  
**Title:** 变倍光学系统及摄像装置 (Zoom optical system and imaging apparatus)  
**Example details:** 实施例1; Tables 1–3 (PDF pp. 20–22), Table 31 (PDF p. 50), Figs. 1–2; unscaled  

This model transcribes Example 1 of the Chinese publication. Tables 1–3 give its prescription, three infinity zoom states and eight asphere coefficient sets. Table 31 summarizes the conditions. Figures 1–2 show the layout. The English family publication US 2026/0202648 A1 carries the same Example 1 drawing as its FIG. 1. No other example supplies optical numbers. Lengths are the patent's millimetres, without scaling. [1, 7]

The association with the FUJIFILM FUJINON XC13–33mmF3.5–6.3 OIS is a convergent identification, not a manufacturer-confirmed production prescription:

1. The source has ten lenses in nine air-separated groups; Fujifilm specifies the same construction.
2. Four source elements have two aspherical faces each: L11, L21, L25 and L31. Fujifilm's construction diagram marks elements 1, 4, 8 and 9 as aspherical, which are the same four positions.
3. The three source lenses with the highest Abbe numbers are L12 (νd 90.17), L23 (76.45) and L25 (81.56). Fujifilm's diagram marks elements 2, 6 and 8 as its three ED elements, which are the same three positions. The patent itself does not call these lenses ED.
4. The source spans approximately the marketed focal range. It places a cemented OIS pair next to the stop and uses a separate single-element internal focus group.
5. The January 2025 priority precedes the October 23, 2025 product announcement. Timing supports the association but does not establish prescription identity. [1–3, 8]

The patent prints focal lengths 13.39, 22.59 and 32.14 mm, open f-numbers 3.60, 4.70 and 6.49, and full fields 100.37°, 64.36° and 47.84°. The marketed labels are 13–33 mm and f/3.5–6.3, with published full angles of 95.1°–46.6°. The model keeps the patent values. Fujifilm's 0.2 m minimum focus distance and 0.25× maximum magnification are product specifications; the patent publishes no finite-focus state for this example. [1, Table 2; 2]

## Optical Architecture

Example 1 is a four-group negative–positive–negative–positive zoom. The negative front group followed by a positive group supports wide-angle coverage. The separate negative focus group and the fixed positive rear group divide focusing from image-side ray control. The patent defines a functional zoom group by the variable air spaces around it. This is distinct from counting air-separated optical groups. [1, ¶0092–0095, ¶0197–0198]

The following focal lengths are computed at the d line from each complete group in air. They are group powers, not sums of the standalone element powers.

| Functional group | Source faces | Elements | Calculated focal length (mm) | Function |
|---|---|---|---:|---|
| G1 | 1A–6 | L11–L13 | -22.530546 | Front negative zoom group |
| G2 | 7A–16A | L21–L25, STO | +18.122944 | Positive group containing stop and OIS pair |
| G3 | 17A–18A | L31 | -42.177986 | Negative internal focus group |
| G4 | 19–20 | L41 | +85.327560 | Positive rear group fixed to image during zoom |
| OIS | 10–12 | L22–L23 | +43.645422 | Cemented moving subassembly within G2 |

The physical aperture stop is located within G2, after L21 and before the L22/L23 cemented pair. Source surface 9 is named STO in the data. The rear parallel plate is kept as a separate optical part and is excluded from the ten-lens/nine-group count. The patent presents PP as a filter and/or cover-glass equivalent rather than another powered lens. [1, ¶0091, ¶0094]

The table below gives the printed infinity positions of each group's front vertex relative to the fixed image plane. Negative coordinates are object-side. These are calculated from the published spacings, not measured production travel.

| State | G1 front (mm) | G2 front (mm) | G3 front (mm) | G4 front (mm) |
|---|---:|---:|---:|---:|
| Wide | -71.694 | -40.437 | -23.925 | -15.766 |
| Middle | -67.545 | -49.834 | -32.773 | -15.766 |
| Tele | -73.235 | -60.771 | -44.237 | -15.766 |

G1 moves imageward from Wide to Middle, then reverses toward the object at Tele. G2 and G3 move objectward across the three zoom stations, and G4 remains fixed relative to the image. The middle station is therefore needed to describe the G1 path. [1, Table 2, Fig. 1, ¶0198]

Between the printed stations the model infers the zoom path; it is not the factory cam. G1 and G2 are interpolated piecewise-linearly through the three published configurations. G3 is then solved paraxially for infinity focus with G4, the plate and the image plane fixed, carrying along the small focus residual the printed spacings already contain. The three printed configurations are reproduced exactly. During focusing, G3's motion has a different purpose and direction, described below.

## Element-by-Element Analysis

The quoted element focal lengths are d-line thick-lens powers calculated for each lens in air from its two vertex radii, thickness and index. For the cemented pair, these isolated values are useful descriptors; the actual doublet power is obtained by tracing the shared glass-to-glass interface. Aberration-control intent below is attributed only where a patent statement is cited. No element's individual aberration contribution has been inferred solely from its power sign.

### L11 — Negative Meniscus (2× Asph)

nd = 1.81000, νd = 40.99. Glass: D-ZLAF52LA (CDGM). f = -13.5860 mm.

L11 is the strongly negative front meniscus, with both surfaces aspherical. The patent specifically associates a negative aspheric first lens with wide-angle operation, field-curvature control and compactness. Conditions (8)–(9) couple its comparatively high index to its Abbe and partial-dispersion values, so the material is not an isolated choice. [1, ¶0097, ¶0137–0143]

The large front effective diameter and the smaller rear diameter are source values. The asymmetric asphere departures cannot be reduced to a single A4-sign explanation, because higher radial orders remain significant at the published rim.

### L12 — Negative Meniscus

nd = 1.45860, νd = 90.17. Glass: H-FK90 (NHG). f = -72.0362 mm.

L12 is the second negative meniscus of G1. Its high Abbe number separates its dispersion contribution from the denser front and third lenses. The patent describes the second negative lens as supporting wide-angle coverage and field-curvature control. Conditions (10)–(11) constrain its index/Abbe and partial-dispersion combinations to balance field curvature and lateral colour. Fujifilm's construction diagram marks this position as one of the lens's three ED elements. [1, ¶0098, ¶0144–0150; 8]

Table 1 names the supplier explicitly. NHG's catalog listing gives νd = 90.19, but the dispersion curve from NHG's data sheet gives νd = 90.17 and θgF = 0.5370, matching the patent's 90.17 and 0.53706. Catalog agreement is not evidence of an identical production melt. [5]

### L13 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: H-ZLAF82 (NHG). f = +30.4952 mm.

L13 is the positive meniscus completing the negative–negative–positive front group. Its dense, relatively dispersive glass provides positive power within a group whose net power remains negative. The patent identifies this three-singlet structure as a means of combining wide-angle coverage with compactness. No isolated claim of coma or distortion cancellation is assigned to L13. [1, ¶0099]

NHG's catalog listing gives νd = 29.14 for H-ZLaF82. Its data-sheet dispersion curve gives νd = 29.13 and θgF = 0.5993, against the patent's 29.13 and 0.59935. [6]

### L21 — Biconvex Positive (2× Asph)

nd = 1.62263, νd = 58.16. Glass: M-BACD15 (HOYA). f = +23.3900 mm.

L21 is a double-aspherical biconvex positive lens immediately before the stop. It begins the positive G2 group. The patent links multiple positive lenses in G2 with spherical-aberration correction, but it does not apportion that correction quantitatively among L21, L23 and L25. [1, ¶0100]

Its S7A polynomial is defined by the patent only within the published effective diameter. The profile's slope changes sign at about 5.7 mm radius, a little beyond the 4.645 mm rim. Material outside the effective diameter is not established by the patent.

### L22 — Negative Meniscus

nd = 1.57135, νd = 52.95. Glass: S-BAL3 (OHARA). f = -17.6518 mm.

L22 is the negative member of the L22/L23 cemented pair immediately behind the stop. Table 1 explicitly identifies S-BAL3 and gives θgF = 0.55544, which corresponds to ΔPgF = +0.0007019 against the normal line.

The patent associates the adjacent cemented negative/positive pair with axial colour correction over the zoom range. The same pair is the OIS group, and its cemented interface is surface 11. [1, ¶0101–0104]

### L23 — Biconvex Positive

nd = 1.52841, νd = 76.45. Glass: S-FPM4 (OHARA). f = +12.5841 mm.

L23 is the positive, higher-Abbe component of the cemented OIS pair, and Fujifilm's diagram marks it as an ED element. Its low-dispersion glass is a plausible contributor to the pair's chromatic balance, consistent with the patent's stated purpose for the doublet. That statement does not establish apochromatic performance. [1, ¶0101, ¶0104; 8]

The doublet has a calculated net focal length of +43.645422 mm in air. This is not the sum of the two isolated focal lengths. The patent moves the pair across the axis for stabilization, not along it for focusing.

### L24 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA). f = -17.8368 mm.

L24 is a thin, dense-glass biconcave negative lens after the OIS doublet. It introduces negative power within the positive G2 assembly, between the cemented pair and the positive rear asphere. Its placement and sign are source facts; a particular isolated aberration correction is not demonstrated by the available calculations.

### L25 — Biconvex Positive (2× Asph)

nd = 1.49710, νd = 81.56. Glass: M-FCD1 (HOYA). f = +19.1594 mm.

L25 is the double-aspherical positive lens at the rear of G2, and Fujifilm's diagram marks it as both aspherical and ED. The patent identifies a positive aspheric rear lens in this group as useful for spherical-aberration and field-curvature correction. Conditions (14)–(15) constrain its index/Abbe and partial-dispersion combinations. [1, ¶0100, ¶0158–0164; 8]

Its high Abbe number also enters the mean-material conditions for G2's positive lenses together with L21 and L23. The following variable gap separates it from the independently moving focus group.

### L31 — Negative Meniscus (2× Asph)

nd = 1.63858, νd = 55.18. Glass: M-PCD55AR (HOYA). f = -42.1780 mm.

L31 is the single negative meniscus constituting G3, with its concave side facing the object. Both faces are aspherical. The patent describes the small single negative group behind the stop as the focusing unit and connects that arrangement with a compact actuator assembly. [1, ¶0105–0108]

Its source focus direction is imageward for nearer objects. Only its infinity positions at the three zoom states are published, so neither near-focus travel nor an actuator law is modeled.

### L41 — Positive Meniscus

nd = 1.77250, νd = 49.60. Glass: H-LAF50B (CDGM). f = +85.3276 mm.

L41 is the positive rear meniscus constituting G4, with its convex side facing the image. It stays fixed relative to the image during zoom. The patent associates the positive rear group with reducing off-axis chief-ray incidence at the image while maintaining a compact system. [1, ¶0109–0110, ¶0198]

Its last surface is followed by the physical 8.779 mm gap to PP. The model keeps that gap, the plate and the final gap as printed. Air-equivalent distances are used only in the condition calculations below.

## Glass Identification and Selection

Table 1 gives both material names and suppliers, and ¶0200 expands their abbreviations. These labels therefore have stronger provenance than a nearest-point match in an nd/νd plot.

The model resolves all ten lens glasses and the rear plate to the named vendor's own catalog dispersion curve. Each curve reproduces the patent's printed θgF to within 0.00003 and its printed νd to within 0.005. The source θgF is the ratio (ng − nF)/(nF − nC). The data also stores the patent's value as ΔPgF = θgF − (0.6438 − 0.001682νd), the deviation from the normal line. Catalog agreement checks compatibility; it does not certify a production melt.

| Element | Glass and supplier | nd | νd | Patent θgF | Catalog-curve θgF | ΔPgF | ED (Fujifilm diagram) |
|---|---|---:|---:|---:|---:|---:|---|
| L11 | D-ZLAF52LA (CDGM) | 1.81000 | 40.99 | 0.56996 | 0.5699 | -0.0048948 | |
| L12 | H-FK90 (NHG) | 1.45860 | 90.17 | 0.53706 | 0.5370 | +0.0449259 | Yes |
| L13 | H-ZLAF82 (NHG) | 2.00100 | 29.13 | 0.59935 | 0.5993 | +0.0045467 | |
| L21 | M-BACD15 (HOYA) | 1.62263 | 58.16 | 0.53913 | 0.5391 | -0.0068449 | |
| L22 | S-BAL3 (OHARA) | 1.57135 | 52.95 | 0.55544 | 0.5554 | +0.0007019 | |
| L23 | S-FPM4 (OHARA) | 1.52841 | 76.45 | 0.53954 | 0.5395 | +0.0243289 | Yes |
| L24 | TAFD45L (HOYA) | 1.95375 | 32.32 | 0.58998 | 0.5900 | +0.0005422 | |
| L25 | M-FCD1 (HOYA) | 1.49710 | 81.56 | 0.53848 | 0.5385 | +0.0318639 | Yes |
| L31 | M-PCD55AR (HOYA) | 1.63858 | 55.18 | 0.55320 | 0.5532 | +0.0022128 | |
| L41 | H-LAF50B (CDGM) | 1.77250 | 49.60 | 0.55165 | 0.5516 | -0.0087228 | |

The plate is source BSC7 (HOYA), nd = 1.51680 and νd = 64.20, with source θgF = 0.53430 (catalog curve 0.5343). It is a separate rear plate, not an additional powered lens.

The three ED positions in Fujifilm's diagram are the three elements with the largest positive ΔPgF: L12, L25 and L23. The patent does not use the term ED, so the data marks their anomalous partial dispersion as inferred from the manufacturer's diagram rather than as a patent statement. No APO performance or quantified secondary spectrum is claimed. [8]

The source's chromatic strategy operates across several elements. Conditions (9) and (11) address lateral colour in the front negative group, and conditions (12)–(15) constrain the positive lenses in G2. The negative/positive cemented OIS pair is explicitly associated with axial-colour correction and with limiting colour changes during stabilization. These are patent design objectives, not independently measured performance claims. [1, ¶0101–0104, ¶0140–0164]

## Focus Mechanism

G3/L31 is the internal focus group. It moves imageward when focusing from infinity to a nearer object, while G4 stays fixed relative to the image. The three tabulated prescriptions are all infinity states. The source gives no finite-object conjugate, close-focus spacing, focus travel or continuous focus law for Example 1. [1, ¶0197–0202]

The model therefore shows infinity focus only. The data's 0.2 m close-focus value is Fujifilm's marketed minimum focus distance, quoted for reference; no group moves for finite focus. Neither the 0.2 m figure nor the 0.25× magnification supplies a focus cam, so no focusing range, breathing behaviour or close-focus image quality is modeled. [2]

## Aspherical Surfaces

L11, L21, L25 and L31 each have two aspherical faces: 1A/2A, 7A/8A, 15A/16A and 17A/18A. The A suffix is a model label corresponding to the source's asterisk. The coefficients are those of Table 3, PDF page 22; coefficients from later examples are not used. [1, ¶0203–0211]

The patent's sag equation is

z(h) = C h² / [1 + √(1 − KA C² h²)] + Σ Aₘ hᵐ,

where C = 1/R and h is nonnegative radial height. In the standard conic form this becomes K = KA − 1. Surface 2A therefore has K = −2.2576327, and the other seven surfaces have K = 0. Odd radial powers remain rotationally symmetric because they act on |h|, not a signed transverse coordinate. The signed meridional derivative changes sign across the axis.

All source orders A3–A20 are kept. A3 is zero on every face. Coefficient units are mm^(1−m), and no scaling is applied. Material prefixes are not, by themselves, proof of the manufacturing process, so no resin layer or fabrication method is assumed.

### Coefficients for 1A and 2A

| Term | 1A | 2A |
|---|---:|---:|
| KA | 1.0000000E+00 | -1.2576327E+00 |
| K | 0.0000000E+00 | -2.2576327E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | 2.1012568E-05 | 2.1411688E-04 |
| A5 | -7.7154002E-06 | 1.3009244E-05 |
| A6 | 1.7080933E-06 | -3.7880744E-06 |
| A7 | -2.1756426E-07 | 8.7137638E-08 |
| A8 | -8.5649329E-09 | -4.3506732E-08 |
| A9 | 3.7228872E-09 | 1.8733356E-08 |
| A10 | -1.5212747E-10 | 4.9008102E-10 |
| A11 | -1.2193393E-11 | -9.1230189E-10 |
| A12 | 1.1023665E-12 | 9.2810580E-11 |
| A13 | -4.3556525E-14 | 4.5369491E-12 |
| A14 | -1.5987029E-15 | -5.4840004E-13 |
| A15 | 2.9261609E-16 | -6.2891178E-14 |
| A16 | 2.7916685E-17 | 1.4481801E-15 |
| A17 | -2.3966744E-18 | 3.6553939E-16 |
| A18 | -2.3464908E-19 | 8.4601918E-17 |
| A19 | 2.4534067E-20 | -1.2480594E-17 |
| A20 | -5.7215952E-22 | 4.1462965E-19 |

### Coefficients for 7A and 8A

| Term | 7A | 8A |
|---|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 |
| K | 0.0000000E+00 | 0.0000000E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | -5.8138832E-05 | 5.2115154E-05 |
| A5 | -8.2599137E-05 | -1.9364378E-04 |
| A6 | 1.5160878E-04 | 2.6417734E-04 |
| A7 | -1.0520889E-04 | -1.9938527E-04 |
| A8 | 3.1154018E-05 | 9.0319412E-05 |
| A9 | -4.2416426E-07 | -2.3995235E-05 |
| A10 | -1.5709015E-06 | 2.8835559E-06 |
| A11 | -1.2579700E-07 | 2.5102621E-07 |
| A12 | 2.2348371E-07 | -1.3090376E-07 |
| A13 | -3.5033166E-08 | 5.9270436E-09 |
| A14 | -4.9586463E-09 | 4.7008870E-09 |
| A15 | 1.5164638E-09 | -7.8665774E-10 |
| A16 | 7.2960752E-11 | -8.9275024E-11 |
| A17 | -4.5340030E-11 | 3.6713556E-11 |
| A18 | 1.4634253E-12 | -2.6944496E-12 |
| A19 | 5.5452272E-13 | -1.3378376E-13 |
| A20 | -4.4593199E-14 | 1.7530908E-14 |

### Coefficients for 15A and 16A

| Term | 15A | 16A |
|---|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 |
| K | 0.0000000E+00 | 0.0000000E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | -1.1398550E-04 | 1.8363783E-04 |
| A5 | 5.3420106E-05 | -5.3565754E-05 |
| A6 | -1.3700316E-04 | -5.8001649E-05 |
| A7 | 1.0164413E-04 | 1.0175447E-04 |
| A8 | -1.9158104E-05 | -5.0747364E-05 |
| A9 | -9.3980369E-06 | 5.9385136E-06 |
| A10 | 5.0972752E-06 | 3.5014757E-06 |
| A11 | -7.5625248E-07 | -1.2011516E-06 |
| A12 | 8.4908220E-08 | 2.6232319E-08 |
| A13 | -4.3576269E-08 | 4.1927156E-08 |
| A14 | -1.5779686E-10 | -8.0413057E-09 |
| A15 | 6.8518575E-09 | 4.5258474E-10 |
| A16 | -2.2294729E-09 | 3.2406146E-10 |
| A17 | 3.1100172E-10 | -1.1569486E-10 |
| A18 | -8.1371143E-12 | 9.5896802E-12 |
| A19 | -3.9199543E-12 | 9.9684710E-13 |
| A20 | 4.2667275E-13 | -1.3848411E-13 |

### Coefficients for 17A and 18A

| Term | 17A | 18A |
|---|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 |
| K | 0.0000000E+00 | 0.0000000E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | 5.7486710E-04 | 3.9005594E-04 |
| A5 | 3.2944246E-05 | 1.8236010E-04 |
| A6 | -6.0502620E-05 | -1.3511387E-04 |
| A7 | 2.1279814E-05 | 4.6377533E-05 |
| A8 | -2.2419247E-06 | -1.0178646E-05 |
| A9 | -7.0186849E-07 | 1.1660027E-06 |
| A10 | 1.2434213E-07 | 1.0143922E-07 |
| A11 | 2.5168952E-08 | -5.9809737E-08 |
| A12 | -3.3569391E-09 | -2.6107370E-09 |
| A13 | -1.1102496E-09 | 4.7845188E-09 |
| A14 | 2.1787417E-11 | -6.1983538E-10 |
| A15 | 5.4781343E-11 | -6.8386384E-11 |
| A16 | -2.0779017E-12 | 1.3525400E-11 |
| A17 | -5.6043511E-13 | 2.2469223E-12 |
| A18 | -2.0935901E-13 | -6.7140193E-13 |
| A19 | 5.2966254E-14 | 5.6640015E-14 |
| A20 | -3.0093282E-15 | -1.6499314E-15 |

The following evaluated profiles show the combined polynomial departure at each published rim relative to its conic base. A positive departure moves the sag toward positive z relative to that base; it is not a standalone statement about aberration correction.

| Face | Source semi-diameter (mm) | Polynomial departure (mm) | Absolute rim slope (°) |
|---|---:|---:|---:|
| 1A | 12.830 | -0.358892354 | 2.159825 |
| 2A | 9.850 | +1.262551311 | 46.849389 |
| 7A | 4.645 | -0.022346392 | 16.332283 |
| 8A | 4.535 | -0.000111146 | 1.161151 |
| 15A | 3.780 | -0.005484799 | 1.879338 |
| 16A | 4.280 | +0.077295769 | 20.055603 |
| 17A | 5.520 | +0.231641628 | 13.647012 |
| 18A | 5.995 | +0.254002600 | 2.106128 |

L11's front polynomial reduces its positive conic sag at the rim, whereas its rear polynomial increases the positive base sag. On L21, the front departure is modest and negative; the rear departure is much smaller at its stated rim. L25 has a small negative front departure and a positive rear departure. Both L31 departures are positive relative to their negative-sag bases. These evaluated profiles, rather than the sign of A4 alone, describe the full polynomials at their applicable radii.

The polynomial formula does not establish material at arbitrarily large radii. None of the eight profiles changes slope direction inside its published rim. Three turn beyond their rims:

- **1A:** at about 14.1 mm, against a 12.83 mm rim.
- **7A:** at about 5.7 mm, against a 4.645 mm rim.
- **18A:** at about 7.3 mm, against a 5.995 mm rim.

The other five do not turn within 1.3 times their rims.

The table uses the printed rims. The model draws the front faces of L25 and L31 out to their rear faces' rims, so 15A ends at 4.28 mm and 17A at 5.995 mm (see Aperture Model and Effective Diameters). At 4.28 mm the 15A departure is +0.0095 mm and its rim slope is 5.1°. At 5.995 mm the 17A departure is +0.265 mm and its slope is 16.7°. Neither profile turns within 1.3 times these drawn rims either.

## Conditional Expressions

The table evaluates the patent's 24 broad strict inequalities from the transcribed prescription. The patent's definitions use the following quantities:

- **fw, ft:** Wide and Tele focal lengths.
- **DG:** group thickness or front-vertex separation.
- **θ:** g–F partial dispersion.
- **Dexpw:** exit-pupil distance measured from the image, image-side positive.
- **TLw, Bfw, Dexpw:** computed with the patent's air-equivalent treatment of the rear plate.
- **β:** in-situ transverse magnifications derived from axial basis rays, not isolated group magnifications. [1, ¶0113–0192; Table 31]

All 24 literal inequalities pass. The printed numerical summary of condition (5) is a mismatch and is marked explicitly.

| No. | Literal quantity | Strict lower bound | Computed | Strict upper bound | Printed Example 1 |
|---:|---|---:|---:|---:|---:|
| 1 | DG1fG2f/fw | 1 | 2.333970 | 5 | 2.334 |
| 2 | DG1/fw | 0.4 | 0.874837 | 2.5 | 0.875 |
| 3 | TLw/(fw tan ωw) | 2 | 4.402227 | 8 | 4.402 |
| 4 | Bfw/(fw tan ωw) | 0.2 | 0.726845 | 1.8 | 0.727 |
| 5 | fOIS/ft | 0.5 | 1.357936 | 6 | 3.259 — mismatch |
| 6 | f1/fw | -4 | -1.682363 | -0.8 | -1.682 |
| 7 | f2/fw | 0.5 | 1.353246 | 3 | 1.353 |
| 8 | N1 + 0.01ν1 | 2.19 | 2.219900 | 2.29 | 2.220 |
| 9 | θ1 + 0.0025ν1 | 0.65 | 0.672435 | 0.7 | 0.672 |
| 10 | N2 + 0.01ν2 | 2.18 | 2.360300 | 2.4 | 2.360 |
| 11 | θ2 + 0.0025ν2 | 0.65 | 0.762485 | 0.79 | 0.762 |
| 12 | NG2p + 0.01νG2p | 2.16 | 2.269947 | 2.36 | 2.270 |
| 13 | θG2p + 0.0025νG2p | 0.68 | 0.719192 | 0.76 | 0.719 |
| 14 | NG2r + 0.01νG2r | 2.18 | 2.312700 | 2.4 | 2.313 |
| 15 | θG2r + 0.0025νG2r | 0.7 | 0.742380 | 0.76 | 0.742 |
| 16 | (RG2r + RG3f)/(RG2r − RG3f) | -12 | -3.546272 | -0.5 | -3.546 |
| 17 | Dexpw/fw | -5 | -2.885787 | -1.5 | -2.886 |
| 18 | Dexpw/TLw | -1 | -0.546457 | -0.3 | -0.546 |
| 19 | ThG/fw | 0.5 | 2.258254 | 3.8 | 2.258 |
| 20 | ThG/TLw | 0.15 | 0.427626 | 0.7 | 0.428 |
| 21 | EDL1f/fw | 1.5 | 1.916040 | 2.5 | 1.916 |
| 22 | EDL1f/TLw | 0.2 | 0.362824 | 0.6 | 0.363 |
| 23 | abs[(1 − βFoc²) βFocR²] | 1 | 2.410277 | 10 | 2.410 |
| 24 | abs[(1 − βOIS) βOISR] | 0.6 | 1.097417 | 3.5 | 1.097 |

Paragraph 0128 defines ft as the Tele focal length. The computed literal ratio fOIS/ft is 1.357935577, while Table 31 prints 3.259. The same OIS focal length divided by fw gives 3.259017354, matching the printed value at its precision. A denominator error in the summary is therefore probable. The source label and value are reported as printed, not silently corrected. The actual condition 0.5 < fOIS/ft < 6 passes, and the prescription is unchanged.

The air-equivalent Wide back distance used only for these conditions is 11.676955696 mm; TLw is 70.722955696 mm and Dexpw is −38.647040494 mm. The physical model instead keeps the 8.779 mm gap after S20, the PP thickness of 2.850 mm and the final physical gap of 1.019 mm. Air-equivalent condition coordinates are not used in the traced geometry.

## Image Stabilization

The OIS assembly is the L22/L23 cemented pair at surfaces 10–12, immediately image-side of STO. The patent states that the assembly moves in a direction intersecting the optical axis and operates throughout the zoom range. Its proximity to the stop is intended to limit changes in on- and off-axis aberrations during stabilization. The cemented form is intended to reduce colour variation during that movement. [1, ¶0102–0104, ¶0198]

No numerical decenter amplitude, control law or stabilized image-quality state is published for Example 1. The displayed prescription remains centered. Neither an OIS displacement schedule nor a production stabilization rating is inferred from the group identification.

## Aperture Model and Effective Diameters

Paragraph 0183 defines ED as twice the radius of the outermost transmitted ray at a surface. The same paragraph notes that this extremal ray can be off axis. Thus ED is an effective ray envelope; it does not by itself establish a housing diameter, a maximum iris radius across zoom or a mechanical diaphragm schedule. Paragraph 0094 also states that the drawn stop symbol specifies axial position, not size or shape.

Seventeen of the twenty non-stop semi-diameters in the data are Table 1 effective diameters halved (ED/2). Those rims are source values, not estimates from the drawing, and FIG. 1's element heights agree with them. The drawing outlines L25, L31 and L41 as square blanks, each with both faces ending at one height close to its rear face's larger ED. The table gives smaller clear apertures for their front faces. The model therefore draws those three front faces at the rear partners' ED/2: 15A at 4.28 mm, 17A at 5.995 mm and 19 at 12.48 mm, instead of the printed 3.78, 5.52 and 12.045 mm. This changes the drawing, not the trace. The traced axial and full-field beams stay inside the printed front apertures, and the wide-open transmission at every field angle of the three printed stations is the same as with the printed values. Source STO has ED = 8.84 mm (radius 4.42 mm). The data file stores no stop radius, so the model derives the iris from the printed f-numbers f/3.60, f/4.70 and f/6.49. This is a calculated model, not a source-published mechanical law, and matching its calibration targets is not independent evidence of the diaphragm size.

| State | Source FNo | Inferred iris radius (mm) | EFL/transmitted entrance diameter | Image-space sine f-number |
|---|---:|---:|---:|---:|
| Wide | 3.60 | 4.432359809 | 3.610346467 | 3.605446402 |
| Middle | 4.70 | 4.414429784 | 4.701630345 | 4.703192568 |
| Tele | 6.49 | 4.002417831 | 6.489999998 | 6.493012822 |

The Wide inferred iris exceeds the source stop radius by 0.012 mm. That is larger than the 0.0025 mm half-last-digit interval of the printed diameter, so rounding alone does not explain it. Because ED is a ray envelope, the difference is not proof of a larger mechanical stop either.

At Wide, the nominal f/3.60 axial ray reaches about 0.015 mm beyond the published 8A effective radius, so the transmitted on-axis pupil is set at S8A. Its transmitted entrance-equivalent f-number is 3.610346467 and its image-space sine value is 3.605446402. These figures describe the printed effective diameters. The model draws L21 square-cut, as FIG. 1 does, with both faces at the front face's 4.645 mm, so the modelled Wide axial beam clears 8A and the stop sets the pupil. With the Wide iris set to the source's 4.42 mm (about f/3.61), every published rim clears the axial beam, so the source's ED set agrees with its own stop. At Middle the nominal ray clips the exterior of S10 by a small amount, and both computed f-number conventions fall within the printed f/4.70 interval. At Tele the nominal f/6.49 ray passes and the stop limits the beam.

Treating 4.42 mm as a fixed iris at all zoom stations is kept as a sensitivity check. Its image-space sine values are 3.605446402, 4.703192568 and 6.074195366; the Tele result differs materially from source 6.49. Changing the f-number convention alone therefore does not justify a fixed-iris interpretation. Conversely, agreement under the inferred schedule does not establish the actual mechanical iris law. The small Wide difference is left as printed.

## Field Coverage

Stop-centered chief rays were solved from the source sag equation, with the physical plate and image plane included. Positive field angle launches toward negative image height in the stated coordinate convention.

| Printed state | Source half-field (°) | First-vertex-plane launch y (mm) | Physical image y (mm) |
|---|---:|---:|---:|
| Wide | 50.185 | 12.582784569649 | -14.199775933165 |
| Middle | 32.180 | 5.368804031854 | -14.201286638569 |
| Tele | 23.920 | 3.159762633241 | -14.201054333462 |

Each solution passes the stop at zero height within numerical residual and stays inside every published lens ED. This establishes that the chief ray exists in the source design. It does not establish full-pupil transmission or production image quality.

The model's own traced chief ray reaches the 14.18 mm APS-C corner at every zoom position: at 50.1° at Wide, 32.1° at the printed middle station and 23.9° at Tele. Off-axis transmission falls with field angle, as the rims are the source's ray envelopes. Wide open at infinity, the modeled geometric transmission is:

- **Wide:** 79.8 % at 44.2° and 51.1 % at 50.1°.
- **Middle station:** 77.7 % at 32.1°.
- **Tele:** 81.3 % at 23.9°.

## Verification Summary

First-order calculations from the transcribed data use two methods, matrix propagation and sequential basis-ray propagation, and they agree. At infinity, the reconstructed EFLs and physical image-plane residuals are:

| State | Published f (mm) | Calculated EFL (mm) | Source physical image-plane defocus (mm) |
|---|---:|---:|---:|
| Wide | 13.39 | 13.392203075 | +0.000260236 |
| Middle | 22.59 | 22.594478423 | -0.001091594 |
| Tele | 32.14 | 32.141010945 | -0.000080874 |

The small EFL and image-plane residuals are consistent with the patent's printed precision. They do not establish manufacturing tolerances or an exact production prescription.

The model keeps the source ED/2 on every rim except the three square-blank front faces described above, all eight complete asphere coefficient sets, the source plate and all three zoom states. It has no finite-focus reconstruction and no OIS decenter model.

## Sources and References

1. **CN 122410763 A**, Fujifilm Corporation, published July 17, 2026, Example 1.
   - Cover: bibliographic data.
   - PDF pp. 19–22: ¶0195–0211 and Tables 1–3.
   - PDF p. 50: Table 31, Example 1 column.
   - PDF pp. 57–58: Figs. 1–2.
   - Paragraph map: ¶0091–0110 describe the plate, group, focus and OIS roles; ¶0113–0192 define the conditions; ¶0183 defines ED.
2. [Fujifilm official XC13–33mmF3.5–6.3 OIS lens manual BL00005399-100](https://dl.fujifilm-x.com/support/manual/lenses/lens_xc13-33mmf35-63_ois_manual_01.pdf), PDF page 16, printed EN-8. Product construction, focal/aperture labels, field, MFD and magnification; retrieved October 3, 2026.
3. [Fujifilm product announcement](https://www.fujifilm.com/us/en/news/fujifilm-introduces-fujinon-xc13-33mm), October 23, 2025. Announcement and X Mount identification; retrieved October 3, 2026.
4. Vendor glass catalogs supplying the dispersion curves:
   - [OHARA Zemax catalog, July 1, 2026](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip): S-BAL3. S-FPM4 is from OHARA's June 27, 2025 Zemax data.
   - [HOYA Zemax catalog, July 7, 2026, including obsolete](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf): M-BACD15, M-PCD55AR, TAFD45L and BSC7. M-FCD1 is from HOYA's April 1, 2017 Zemax data.
   - [CDGM Zemax catalog, September 2026](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c): D-ZLaF52LA and H-LaF50B; retrieved October 25, 2026.
5. [NHG official FK catalog](https://www.hbnhg.com/en/ListData/list.aspx?lcid=27), H-FK90 row, retrieved October 3, 2026: listed nd/νd = 1.45860/90.19. [NHG H-FK90 data sheet](https://www.hbnhg.com/uploadfiles/file/productpdf/H-FK90.pdf), retrieved October 25, 2026: dispersion constants A0–A5, whose curve gives νd 90.17.
6. [NHG official ZLaF catalog](https://www.hbnhg.com/en/ListData/list.aspx?lcid=16), H-ZLaF82 row, retrieved October 3, 2026: listed nd/νd = 2.00100/29.14. [NHG H-ZLaF82 data sheet](https://www.hbnhg.com/uploadfiles/file/productpdf/H-ZLaF82.pdf), retrieved October 25, 2026: dispersion constants A0–A5, whose curve gives νd 29.13.
7. **US 2026/0202648 A1**, Fujifilm Corporation (inventor Takuya Tanaka), published July 16, 2026; English family publication of the same application, claiming the same JP priority. FIG. 1 (sheet 1) is the Example 1 drawing used for the cross-section comparison.
8. Fujifilm, XC13–33mmF3.5–6.3 OIS product page (fujifilm-x.com), lens construction diagram marking the aspherical and ED elements.

Catalog identity evidence, source statements and calculated model behaviour are distinguished throughout. Fujifilm has not confirmed that this patent example is the production prescription.
