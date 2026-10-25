## Patent Reference and Design Identification

**Patent:** CN 122410763 A  
**Application Number:** 202610010446.5  
**Filed:** January 6, 2026  
**Published:** July 17, 2026  
**Priority:** January 15, 2025, JP2025-005511  
**Inventor:** 田中琢也  
**Applicant:** Fujifilm Corporation  
**Title:** 变倍光学系统及摄像装置 (Zoom optical system and imaging apparatus)  

**Runtime limitation:** The literal source supports a Wide stop-centered chief at the published 50.185° half-field, but the pinned LensVisualizer runtime does not reproduce that ray or reach the declared APS-C corner at Wide. Its surface intersection routine selects a mathematical extension of S7A outside the published effective radius. Application compatibility at Wide is deferred. Passing default ray fans and zero render trim do not establish full-format coverage. The source prescription is retained unchanged; the source-only solution and application failure are distinguished below.

This model transcribes Example 1 from the complete supplied 79-page Chinese publication. Tables 1–3 provide its prescription, three infinity zoom states and eight asphere coefficient sets; Table 31 supplies condition summaries. Figures 1–2 show its topology. No other example or family member supplies optical numbers. Lengths remain in native millimetres, without uniform scaling. [1]

The association with the FUJIFILM FUJINON XC13–33mmF3.5–6.3 OIS is a convergent identification, not a manufacturer-confirmed production prescription:

1. The source has ten lenses in nine air-separated groups; Fujifilm specifies the same construction.
2. Four source elements have two aspherical faces each. Fujifilm specifies four aspherical elements.
3. Three source lenses have comparatively high Abbe numbers, compatible with the manufacturer's count of three ED elements; the source does not individually label those lenses as the retail ED components.
4. The source spans approximately the marketed focal range and places a cemented OIS pair next to the stop, with a separate single-element internal focus group.
5. The January 2025 priority precedes the October 23, 2025 product announcement. Timing supports the association but does not establish prescription identity. [1–3]

The patent prints focal lengths 13.39, 22.59 and 32.14 mm; open f-numbers 3.60, 4.70 and 6.49; and full fields 100.37°, 64.36° and 47.84°. The marketed labels are 13–33 mm and f/3.5–6.3, with published full angles 95.1°–46.6°. These differences are retained. Fujifilm's 0.2 m minimum focus distance and 0.25× maximum magnification are product specifications, not numerical states of this model. [1, Table 2; 2]

## Optical Architecture

Example 1 is a four-group negative–positive–negative–positive zoom. The initial negative/positive sequence supports wide-angle coverage, while the separate negative focus group and fixed positive rear group divide focusing and image-side ray control. The patent defines a functional zoom group by the variable air spaces between it and its neighbours; this is distinct from counting air-separated optical groups. [1, ¶0092–0095, ¶0197–0198]

The following focal lengths are computed at the d line from each complete group in air. They are group powers, not sums of the standalone element powers.

| Functional group | Source faces | Elements | Calculated focal length (mm) | Function |
|---|---|---|---:|---|
| G1 | 1A–6 | L11–L13 | -22.530546 | Front negative zoom group |
| G2 | 7A–16A | L21–L25, STO | +18.122944 | Positive group containing stop and OIS pair |
| G3 | 17A–18A | L31 | -42.177986 | Negative internal focus group |
| G4 | 19–20 | L41 | +85.327560 | Positive rear group fixed to image during zoom |
| OIS | 10–12 | L22–L23 | +43.645422 | Cemented moving subassembly within G2 |

The physical aperture stop is located within G2, after L21 and before the L22/L23 cemented pair. Source surface 9 is named STO in the data. The rear parallel plate is retained as a separate optical part; it is excluded from the ten-lens/nine-group count. The patent presents PP as a filter and/or cover-glass equivalent rather than another powered lens. [1, ¶0091, ¶0094]

The table below gives native infinity positions of each group's front vertex relative to the fixed physical image plane; negative coordinates are object-side. These are calculated from the published spacings, not measured production travel.

| State | G1 front (mm) | G2 front (mm) | G3 front (mm) | G4 front (mm) |
|---|---:|---:|---:|---:|
| Wide | -71.694 | -40.437 | -23.925 | -15.766 |
| Middle | -67.545 | -49.834 | -32.773 | -15.766 |
| Tele | -73.235 | -60.771 | -44.237 | -15.766 |

G1 moves imageward from Wide to Middle, then reverses toward the object at Tele. G2 and G3 move objectward across the three zoom stations; G4 remains fixed relative to the image. The middle keyframe is therefore necessary. Interpolation between the three stations is a display model, not a disclosed continuous cam law. During focusing, G3's motion has a different purpose and direction, described below. [1, Table 2, Fig. 1, ¶0198]

## Element-by-Element Analysis

The quoted element focal lengths are d-line thick-lens powers calculated for each lens in air from its two vertex radii, thickness and index. For the cemented pair, these isolated values are useful descriptors; the actual doublet power is obtained by tracing the shared glass-to-glass interface. Attribution of aberration-control intent below is limited to the cited patent statements. No element's individual aberration contribution has been inferred solely from its power sign.

### L11 — Negative Meniscus (2× Asph)

nd = 1.81000, νd = 40.99. Glass: D-ZLAF52LA (CDGM). f = -13.5860 mm.

L11 is the strongly negative front meniscus, with both surfaces aspherical. The patent specifically associates a negative aspheric first lens with wide-angle operation, field-curvature control and compactness. Its comparatively high index is coupled to its Abbe and partial-dispersion values by conditions (8)–(9), rather than being an isolated material choice. [1, ¶0097, ¶0137–0143]

The large front effective diameter and the smaller rear diameter are source values. The asymmetric asphere departures should not be reduced to a single A4-sign explanation: higher radial orders remain significant at the published rim.

### L12 — Negative Meniscus

nd = 1.45860, νd = 90.17. Glass: H-FK90 (NHG). f = -72.0362 mm.

L12 is the second negative meniscus of G1. Its high Abbe number separates its dispersion contribution from the denser front and third lenses. The patent describes the second negative lens as supporting wide-angle coverage and field-curvature control, and conditions (10)–(11) constrain its index/Abbe and partial-dispersion combinations to balance field curvature and lateral colour. [1, ¶0098, ¶0144–0150]

The supplier designation is explicit in Table 1. The current NHG catalog gives νd = 90.19 for H-FK90, while the source prints 90.17; the model retains the source value. Catalog identity compatibility is not evidence of an identical production melt. [5]

### L13 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: H-ZLAF82 (NHG). f = +30.4952 mm.

L13 is the positive meniscus completing the negative–negative–positive front group. Its dense, relatively dispersive glass provides positive power within a group whose net power remains negative. The patent identifies this three-singlet structure as a means of combining wide-angle coverage with compactness. No isolated claim of coma or distortion cancellation is assigned to L13. [1, ¶0099]

NHG's current catalog gives νd = 29.14 for the named H-ZLaF82 material, compared with 29.13 in the source. The patent coordinates are retained without supplier substitution or spectral invention. [6]

### L21 — Biconvex Positive (2× Asph)

nd = 1.62263, νd = 58.16. Glass: M-BACD15 (HOYA). f = +23.3900 mm.

L21 is a double-aspherical biconvex positive lens immediately before the stop. It begins the positive G2 group. The patent links multiple positive lenses in G2 with spherical-aberration correction, but it does not apportion that correction quantitatively among L21, L23 and L25. [1, ¶0100]

Its S7A face is also the location of the Wide runtime branch-selection failure. The in-envelope source ray and the earlier mathematical extension are different roots of the same radial polynomial. The source coefficient table and effective diameter remain authoritative; extrapolated material outside that diameter is not established by the patent.

### L22 — Negative Meniscus

nd = 1.57135, νd = 52.95. Glass: S-BAL3 (OHARA). f = -17.6518 mm.

L22 is the negative member of the L22/L23 cemented pair immediately behind the stop. Table 1 explicitly identifies S-BAL3 and gives θgF = 0.55544. The corresponding ΔPgF is +0.0007019 under the project's normal-line conversion.

The patent associates the adjacent cemented negative/positive pair with axial colour correction over the zoom range. The same pair is the OIS group. Its cemented interface is source surface 11; that interface must retain L23's downstream medium rather than being converted into an air gap. [1, ¶0101–0104]

### L23 — Biconvex Positive

nd = 1.52841, νd = 76.45. Glass: S-FPM4 (OHARA). f = +12.5841 mm.

L23 is the positive, higher-Abbe component of the cemented OIS pair. Its low-dispersion glass is a plausible contributor to the pair's chromatic balance, consistent with the patent's stated purpose for the doublet. That statement does not establish apochromatic performance or a complete production spectrum. [1, ¶0101, ¶0104]

The doublet has calculated net focal length +43.645422 mm in air. It is neither equivalent to adding the two isolated focal lengths nor established as an independently movable focusing group.

### L24 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA). f = -17.8368 mm.

L24 is a thin, dense-glass biconcave negative lens after the OIS doublet. It introduces negative power within the positive G2 assembly, between the cemented pair and the positive rear asphere. Its placement and sign are source facts; a particular isolated aberration correction is not demonstrated by the available calculations.

The source names TAFD45L, and the current runtime resolves that name through catalog Sellmeier data. This numerical support does not turn its published partial-dispersion ratio into a source designation of anomalous material.

### L25 — Biconvex Positive (2× Asph)

nd = 1.49710, νd = 81.56. Glass: M-FCD1 (HOYA). f = +19.1594 mm.

L25 is the double-aspherical positive lens at the rear of G2. The patent identifies a positive aspheric rear lens in this group as useful for spherical-aberration and field-curvature correction. Conditions (14)–(15) constrain its index/Abbe and partial-dispersion combinations. [1, ¶0100, ¶0158–0164]

Its high Abbe number also enters the mean-material conditions for G2's positive lenses together with L21 and L23. The following variable gap separates it from the independently moving focus group.

### L31 — Negative Meniscus (2× Asph)

nd = 1.63858, νd = 55.18. Glass: M-PCD55AR (HOYA). f = -42.1780 mm.

L31 is the single negative meniscus constituting G3, with its concave side facing the object. Both faces are aspherical. The patent describes the small single negative group behind the stop as the focusing unit and connects that arrangement with a compact actuator assembly. [1, ¶0105–0108]

Its source focus direction is imageward for nearer objects. Only its infinity positions at the three zoom states are published; neither near-focus travel nor an actuator displacement law is reconstructed.

### L41 — Positive Meniscus

nd = 1.77250, νd = 49.60. Glass: H-LAF50B (CDGM). f = +85.3276 mm.

L41 is the positive rear meniscus constituting G4, with its convex side facing the image. It stays fixed relative to the image during zoom. The patent associates the positive rear group with reducing off-axis chief-ray incidence at the image while maintaining a compact system. [1, ¶0109–0110, ¶0198]

Its last surface is followed by the physical gap to PP. Replacing that gap with an air-equivalent distance in the rendered prescription would change the physical image-side geometry, so the conversion is confined to source condition calculations.

## Glass Identification and Selection

Table 1 gives both material names and suppliers, and ¶0200 expands their abbreviations. These labels therefore have stronger provenance than a nearest-point match in an nd/νd plot. The comparison against vendor catalogs checks compatibility; it does not replace patent coordinates, infer a different supplier, or certify a production melt.

The source θgF is the ratio (ng − nF)/(nF − nC). The data stores ΔPgF = θgF − (0.6438 − 0.001682νd), using the runtime's normal-line convention. This conversion supplies a spectral constraint, not measured absolute C/F/g indices. Published ratios alone do not support individual anomalous-material display tags, and none is asserted.

| Element | Glass and supplier | nd | νd | Source θgF | Converted ΔPgF |
|---|---|---:|---:|---:|---:|
| L11 | D-ZLAF52LA (CDGM) | 1.81000 | 40.99 | 0.56996 | -0.0048948 |
| L12 | H-FK90 (NHG) | 1.45860 | 90.17 | 0.53706 | +0.0449259 |
| L13 | H-ZLAF82 (NHG) | 2.00100 | 29.13 | 0.59935 | +0.0045467 |
| L21 | M-BACD15 (HOYA) | 1.62263 | 58.16 | 0.53913 | -0.0068449 |
| L22 | S-BAL3 (OHARA) | 1.57135 | 52.95 | 0.55544 | +0.0007019 |
| L23 | S-FPM4 (OHARA) | 1.52841 | 76.45 | 0.53954 | +0.0243289 |
| L24 | TAFD45L (HOYA) | 1.95375 | 32.32 | 0.58998 | +0.0005422 |
| L25 | M-FCD1 (HOYA) | 1.49710 | 81.56 | 0.53848 | +0.0318639 |
| L31 | M-PCD55AR (HOYA) | 1.63858 | 55.18 | 0.55320 | +0.0022128 |
| L41 | H-LAF50B (CDGM) | 1.77250 | 49.60 | 0.55165 | -0.0087228 |

The plate is source BSC7 (HOYA), nd = 1.51680 and νd = 64.20, with source θgF = 0.53430. It is a separate rear plate, not an additional powered lens.

The retained six-vendor catalog search includes OHARA, HOYA, CDGM, SCHOTT, HIKARI and SUMITA; exact relevant named rows are recorded in the dossier. Explicitly named source vendors are not replaced by adjacent alternatives. Current official NHG pages separately support H-FK90 and H-ZLaF82, with the small Abbe differences noted above. [4–6]

The pinned runtime resolves S-BAL3, S-FPM4, TAFD45L and M-FCD1 to compatible Sellmeier entries; the BSC7 rear plate uses a supported catalog alias. Other named elements use an Abbe-plus-source-partial-dispersion path in this runtime. This distinction concerns implementation support, not source supplier identity. The source does not supply complete absolute line indices for each glass, and no APO performance, quantified secondary spectrum or production colour curve is claimed.

The source's chromatic strategy operates across several elements. Conditions (9) and (11) address lateral colour in the front negative group; conditions (12)–(15) constrain the positive lenses in G2. The negative/positive cemented OIS pair is explicitly associated with axial-colour correction and with limiting colour changes during stabilization. These are patent design objectives, not independently measured performance claims. [1, ¶0101–0104, ¶0140–0164]

## Focus Mechanism

G3/L31 is the internal focus group. It moves imageward when focusing from infinity to a nearer object, while G4 is fixed relative to the image during zoom. The three tabulated prescriptions are all infinity states. The source gives no numerical finite-object conjugate, close-focus spacing, focus travel or continuous focus law for Example 1. [1, ¶0197–0202]

The implemented status is NO_INTERNAL_RECONSTRUCTION. The value closeFocusM = 1e15 is an infinity-only UI sentinel, not a physical minimum focus distance. The two focus entries at each zoom station repeat the same gaps; moving the focus slider does not model finite-focus motion. No focusing range, breathing behaviour or close-focus image quality is established by this data.

Fujifilm specifies a 0.2 m minimum focus distance and maximum magnification 0.25× for the marketed lens. Those facts support product description but cannot supply a missing optical cam law. No patent-example focus travel or actuator design is inferred from them. [2]

## Aspherical Surfaces

L11, L21, L25 and L31 each have two aspherical faces: 1A/2A, 7A/8A, 15A/16A and 17A/18A. The A suffix is a model label corresponding to the source's asterisk. The complete selected coefficients are Table 3, PDF page 22; coefficients from later examples are not used. [1, ¶0203–0211]

The native sag equation is

z(h) = C h² / [1 + √(1 − KA C² h²)] + Σ Aₘ hᵐ,

where C = 1/R and h is nonnegative radial height. In the standard conic form this becomes K = KA − 1. Surface 2A therefore has K = −2.2576327; the other seven surfaces have K = 0. Odd radial powers remain rotationally symmetric because they act on |h|, not a signed transverse coordinate. The signed meridional derivative changes sign across the axis.

All source orders A3–A20 are retained. A3 is zero on every selected face. Coefficient units are mm^(1−m), and no scaling is applied. Material prefixes are not, by themselves, proof of the manufacturing process; no unreported resin layer or asphere fabrication method is inserted.

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

L11's front polynomial reduces its positive conic sag at the rim, whereas its rear polynomial increases the positive base sag. On L21, the front departure is modest and negative; the rear departure is much smaller at its stated rim. L25 has a small negative front departure and a positive rear departure. Both L31 departures are positive relative to their negative-sag bases. These evaluated profiles, rather than the sign of A4 alone, describe the full retained polynomials at their applicable radii.

The polynomial formula does not establish the physical existence of material at arbitrarily large radii. This distinction is decisive for S7A: its mathematical continuation outside the source effective envelope produces an earlier line intersection in the current runtime, while the in-envelope surface supports the published chief ray.

## Conditional Expressions

The table evaluates the patent's 24 broad strict inequalities from the retained source prescription. The native definitions use fw/ft for Wide/Tele focal length; DG quantities for group thickness or front-vertex separation; θ for g–F partial dispersion; and Dexpw measured from the image with image-side positive. TLw, Bfw and Dexpw use the patent's air-equivalent treatment of the rear plate. β terms are in-situ transverse magnifications derived from axial basis rays, not isolated group magnifications. [1, ¶0113–0192; Table 31]

All 24 literal inequalities pass. The printed numerical summary of condition (5) remains a mismatch and is marked explicitly.

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

Paragraph 0128 defines ft as the Tele focal length. The computed literal ratio fOIS/ft is 1.357935577, while Table 31 prints 3.259. The same OIS focal length divided by fw gives 3.259017354, matching that printed value at its precision. A probable denominator error in the summary is therefore documented, but the literal source label/value is not silently corrected. The actual condition 0.5 < fOIS/ft < 6 passes, and the prescription is unchanged.

The air-equivalent Wide back distance used only for these conditions is 11.676955696 mm; TLw is 70.722955696 mm and Dexpw is −38.647040494 mm. The physical model instead retains the 8.779 mm gap after S20, PP thickness 2.850 mm, and final physical gap 1.019 mm. Air-equivalent condition coordinates are not substituted into the physical tracing geometry.

## Image Stabilization

The OIS assembly is the L22/L23 cemented pair at surfaces 10–12, immediately image-side of STO. The patent states that the assembly moves in a direction intersecting the optical axis and operates throughout the zoom range. Its proximity to the stop is intended to limit changes in on- and off-axis aberrations during stabilization. The cemented form is intended to reduce colour variation during that movement. [1, ¶0102–0104, ¶0198]

No numerical decenter amplitude, control law or stabilized image-quality state is published for Example 1. The displayed prescription remains centered. Neither an OIS displacement schedule nor a production stabilization rating is inferred from the group identification.

## Aperture Model and Native Residuals

Paragraph 0183 defines ED as twice the radius of the outermost transmitted ray at a surface. The same paragraph notes that this extremal ray can be off axis. Thus ED is an effective ray envelope; it does not by itself establish a housing diameter, maximum iris radius across zoom or a mechanical diaphragm schedule. Paragraph 0094 also states that the drawn stop symbol specifies axial position, not size or shape.

All source effective diameters are preserved as authored semi-diameters ED/2. Source STO has ED = 8.84 mm, hence an authored radius 4.42 mm. The implemented from-nominal-fno option infers a zoom iris schedule from source f/3.60, f/4.70 and f/6.49. This is a calculated model, not a source-published mechanical law; matching its calibration targets is not independent evidence of the diaphragm size.

| State | Source FNo | Inferred runtime iris radius (mm) | EFL/transmitted entrance diameter | Image-space sine f-number |
|---|---:|---:|---:|---:|
| Wide | 3.60 | 4.432359809 | 3.610346467 | 3.605446402 |
| Middle | 4.70 | 4.414429784 | 4.701630345 | 4.703192568 |
| Tele | 6.49 | 4.002417831 | 6.489999998 | 6.493012822 |

The Wide inferred iris exceeds the source effective radius by 0.012359809 mm. The source diameter precision gives a radius half-last-unit interval of 0.0025 mm, so the difference is not erased as a numerical equality. ED's definition prevents treating it automatically as a proved mechanical enlargement, but the native full-aperture fidelity remains unestablished.

At Wide, the nominal entrance ray for f/3.60 first exceeds S7A's published effective radius; the limiting transmitted on-axis pupil is set at S8A. Its transmitted entrance-equivalent f-number is 3.610346467 and its image-space sine value is 3.605446402. At Middle the nominal ray first clips exterior S10 by a small amount; both computed f-number conventions fall within the printed f/4.70 interval. At Tele the nominal f/6.49 ray passes and STO limits the inferred-schedule boundary. These are physical, non-ghost axial diagnostics, separate from the off-axis branch-selection issue.

Treating 4.42 mm as a fixed iris at all zoom stations is retained as a sensitivity branch. Its image-space sine values are 3.605446402, 4.703192568 and 6.074195366; the Tele result differs materially from source 6.49. Changing f-number convention alone therefore does not justify a fixed source iris interpretation. Conversely, agreement under the inferred schedule does not establish the actual mechanical iris law. No joint source-rounding witness is asserted to resolve these native aperture residuals.

## Source Rays and Runtime Compatibility

Separate source-equation calculations solve the native stop-centered chief rays while retaining the original physical plate and image plane. The table uses the packaged author solver; a fresh source-first review independently reproduced the three paths. Positive field angle launches toward negative image height in the stated coordinate convention.

| Native state | Source half-field (°) | First-vertex-plane launch y (mm) | Physical image y (mm) |
|---|---:|---:|---:|
| Wide | 50.185 | 12.582784569649 | -14.199775933165 |
| Middle | 32.180 | 5.368804031854 | -14.201286638569 |
| Tele | 23.920 | 3.159762633241 | -14.201054333462 |

Each source solution explicitly hits the actual stop at zero height within numerical residual and stays inside every published lens ED. This establishes chief-ray existence for the literal source. It does not establish full-pupil transmission or production image quality.

For Wide, both implementations use the same incident line at the first vertex plane, slope −tan(50.185°), and the same physical glass sequence. Source and runtime hit coordinates, normals and refracted directions agree through S6. They first diverge at S7A, whose vertex is z = 31.257 mm and effective radius is 4.645 mm.

| S7A intersection of the same incoming line | z (mm) | y (mm) | Relation to source envelope |
|---|---:|---:|---|
| Earlier polynomial extension | 15.861200109442 | 6.780648655843 | Outside |
| Source in-envelope root | 31.288566504800 | 0.994000736881 | Inside |

The runtime selects the earlier extension and clips S7A. Disabling aperture checks allows refraction at that extension but then fails with noBracket at S8A. The in-envelope source intersection instead continues through the real stop and image plane. This comparison identifies a runtime surface-intersection selection problem; it does not supply a reason to alter coefficients, enlarge effective diameters, reduce the source field or change the sampling fractions.

The ordinary runtime chief solver at 50.185° returns bracket-failed. Its fallback launch then clips S13. That S13 observation belongs to an unbracketed non-chief, so its terminated extrapolation is not a physical image-height measurement.

The declared APS-C corner radius in the pinned runtime is 14.175 mm. Actual format coverage is evaluated separately from default off-axis pupil samples:

| Zoom control | Analysis half-field (°) | Attained radius just inside boundary (mm) | Format corner reached |
|---:|---:|---:|---|
| 0 | 41.736149141 | 11.298556187 | No |
| 0.25 | 40.005141907 | 14.174995436 | Yes |
| 0.5 | 32.131631689 | 14.174994565 | Yes |
| 0.75 | 27.637126998 | 14.174951588 | Yes |
| 1 | 23.880719969 | 14.174993212 | Yes |

Native stations are zoom controls 0, 0.5 and 1. Controls 0.25 and 0.75 are representative interpolation samples, not extra source prescriptions. At Wide, the runtime's corner solver returns no solution, and its attained radius is short of the format corner. The smaller runtime field can still support the default fan, which is why default-fan success does not establish the required Wide coverage.

At the five sampled zoom controls, all six default axial rays transmit. All five default off-axis rays transmit at Wide and Tele; four transmit at the three other samples, where the first clip of the remaining ray is exterior S13. No required default first clip occurs at the cemented S11 interface. Hidden render trim is zero under the unchanged 0.90 gap policy. Extra full-field/full-pupil failures remain diagnostics; ghost continuation never counts as physical transmission.

The two applicable runtime checks, required-source-chief-coverage and required-format-chief-coverage, remain FAIL. Runtime compatibility is deferred for this qualified source dossier. The pinned application revision is 5c25e4289c6e090eb44177e907d901dfe3cef76c; no application fix is incorporated. The optical data, including the full source apertures and fields, has not been changed to conceal these failures.

## Verification Summary

First-order calculations use the actual final data and the original source branch separately. Matrix propagation and sequential basis-ray propagation agree. At infinity, the reconstructed EFLs and physical image-plane residuals are:

| State | Published f (mm) | Calculated EFL (mm) | Source physical image-plane defocus (mm) |
|---|---:|---:|---:|
| Wide | 13.39 | 13.392203075 | +0.000260236 |
| Middle | 22.59 | 22.594478423 | -0.001091594 |
| Tele | 32.14 | 32.141010945 | -0.000080874 |

The small EFL/image-plane residuals are evaluated at the patent's printed precision; they are separate from native aperture and runtime field-coverage failures. Numerical agreement does not establish manufacturing tolerances or an exact production optical prescription.

Geometry checks retain every source ED/2, all eight complete asphere coefficient sets, the source plate and all three zoom states. The model has no finite-focus reconstruction and no OIS decenter model. Source-only chief success, actual runtime defaults, actual Wide coverage failure and spectral support are distinct findings. Full compiler, corpus, integration, metadata generation and production build remain unperformed.

## Sources and References

1. **CN 122410763 A**, Fujifilm Corporation, published July 17, 2026, Example 1. The complete original supplied file is `CN_122410763_A.pdf`. Cover: metadata; PDF pp19–22: ¶0195–0211 and Tables 1–3; PDF p50: Table 31, Example 1 column; PDF pp57–58: Figs. 1–2. ¶0091–0110 describe plate, group, focus and OIS roles; ¶0113–0192 define the conditions; ¶0183 defines ED. The source PDF is retained whole, 19,214,206 bytes.
2. [Fujifilm official XC13–33mmF3.5–6.3 OIS lens manual BL00005399-100](https://dl.fujifilm-x.com/support/manual/lenses/lens_xc13-33mmf35-63_ois_manual_01.pdf), PDF page 16, printed EN-8. Primary product construction, focal/aperture labels, field, MFD and magnification; retrieved October 3, 2026.
3. [Fujifilm product announcement](https://www.fujifilm.com/us/en/news/fujifilm-introduces-fujinon-xc13-33mm), October 23, 2025. Primary announcement and X Mount identification; retrieved October 3, 2026.
4. Primary glass catalogs: [OHARA, July 1, 2026](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [HOYA, July 7, 2026, including obsolete](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf); [CDGM, September 2026](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c). Relevant source rows, coordinate residuals and the broader six-vendor search are retained in the dossier with hashes and locators; retrieved October 3, 2026.
5. [NHG official FK catalog](https://www.hbnhg.com/en/ListData/list.aspx?lcid=27), H-FK90 row; retrieved October 3, 2026. Catalog nd/νd = 1.45860/90.19; source 1.45860/90.17 retained.
6. [NHG official ZLaF catalog](https://www.hbnhg.com/en/ListData/list.aspx?lcid=16), H-ZLaF82 row; retrieved October 3, 2026. Catalog nd/νd = 2.00100/29.14; source 2.00100/29.13 retained.

Calculated claims are reproducible from the same-stem data, evidence, verifier, source-chief program and runtime records. Catalog identity evidence, source statements and calculated model behaviour are distinguished throughout; no manufacturer confirmation of the patent-to-product identity is asserted.


## Current-runtime and continuous-path revalidation, 2026-10-23
The earlier runtime-deferred wide-source-chief failure is historical, not reproduced on pinned main f29b729277462ece3aa02491b8ef95cba83dab80. With unchanged native optics, the exact archived wide source launch at50.185 degrees now traces without clipping to y=−14.199775933174mm, and the current chief solver converges to the same12.582784569650mm launch. Middle and tele source chiefs likewise pass. Current full-format14.175mm image-height fields converge. This resolves the old engine-root-selection hold without altering any source coefficient or aperture. The exact replay is retained in xc-current-source-chiefs.json; historical failure evidence remains intact.

For continuous infinity zoom, G1/G2 positions are piecewise-linearly interpolated through the three native configurations. G3 is solved paraxially, keeping G4, rear plate and image plane fixed and preserving the interpolated native rounding residual rather than optimizing the native rows. All three source configurations remain exact;198 intermediate nodes are marked unpublished. G1 reverses as in the source, while G2 and G3 move objectward. This is a constrained inferred visualization trajectory, not recovered factory cam measurements or a unique reconstruction. No radius, glass, aperture, fixed thickness, source spectral anchor, or gap allowance is changed.

Finite focus remains unmodeled. Ordinary exterior off-axis vignetting must not be confused with the former source-chief failure or cemented-interface containment. Source-to-production correlation and all source glass/aperture/condition qualifications remain as originally disclosed. Independent integration and final package qualification are pending. Per-field MTF converged bandwidths, not merely field status labels, govern numerical confidence.
