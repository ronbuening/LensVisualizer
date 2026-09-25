# SONY FE 400mm f/2.8 GM OSS — JP 2025-63175 A Example 2

## Patent Reference and Design Identification

**Patent:** JP 2025-63175 A  
**Application Number:** JP 2025-004775  
**Filed:** 2025-01-14 (divisional); original application filed 2020-06-01  
**Priority:** 2019-06-04  
**Published:** 2025-04-15  
**Inventor:** Riki Maruyama (丸山 理樹)  
**Applicant:** Sony Group Corporation  
**Title:** 光学系および撮像装置 (Optical System and Imaging Device)  
**Embodiment analyzed:** Example 2, Figure 5, Tables 4–6

The prescription in this file is Example 2 of JP 2025-63175 A. The numerical example begins at ¶0089; Table 4 gives the complete surface prescription, Table 5 gives the infinity-focus system values, and Table 6 gives the published infinity and 2.7 m focus states. Figure 5 is the corresponding optical section. [JP 2025-63175 A, ¶0089–¶0097; PDF pp. 18–20 and 63.]

The association with the production Sony FE 400mm F2.8 GM OSS is a strong research correlation, not a manufacturer-confirmed patent attribution. Several independent details converge:

1. Sony specifies the production lens as a 400 mm f/2.8 full-frame E-mount lens, while Example 2 publishes a 388.00 mm design focal length, f/2.91, and 21.633 mm image height. The prescription is retained at the patent scale rather than forced to the marketing numbers. [JP 2025-63175 A, Table 5, PDF p. 20; Sony SEL400F28GM specifications.]
2. Sony lists 17 groups and 23 elements, explicitly including one filter. Example 2 contains 22 refractive lens elements in 16 air-separated groups; adding the manufacturer-counted filter produces the same 23/17 count. The filter is not present in Table 4 and is therefore not inserted into the modeled patent prescription. [JP 2025-63175 A, ¶0090–¶0092; Sony SEL400F28GM specifications.]
3. Sony states that the production lens uses three fluorite elements. Example 2 contains exactly three positive elements, L12, L14, and L16, at the optical-fluorite coordinate `nd = 1.43385`, `νd = 95.23`, with the same patent partial-dispersion entry `θgF = 0.5387`. [JP 2025-63175 A, Table 4, PDF p. 19; Sony launch release, 2018-06-28.]
4. Example 2 uses a positive cemented internal-focus group GR2 and a rear transverse image-stabilization group GR3b. Sony describes the production lens as using Optical SteadyShot and two XD Linear Motors to drive its focus group. [JP 2025-63175 A, ¶0091–¶0092; Sony launch release; Sony specifications.]
5. The patent emphasizes a large air space in the first group and a rearward stabilizing group to reduce front mass and move the system balance toward the camera. Sony's launch material independently emphasizes front-barrel mass reduction and handling balance. [JP 2025-63175 A, ¶0027–¶0029; Sony launch release.]

The timing prevents stronger provenance language. Sony announced development of the production lens on 2017-10-25 and formally launched it on 2018-06-28, whereas this patent family claims priority from 2019-06-04. No Sony primary source in the dossier states that Example 2 is the production prescription. The data and analysis therefore preserve the product match as an inference rather than a confirmed manufacturing disclosure.

## Optical Architecture

Example 2 is a three-group, long-focus telephoto design. The verified infinity-state track from the first vertex to the image plane is 380.74 mm and the Gaussian EFL computed from the final data file is 388.145731 mm, giving `TL/EFL = 0.980920`. Because this ratio is below unity, the design satisfies the project's quantitative criterion for the term **telephoto**. Its computed back focal distance from the last refracting vertex is 28.285215 mm, far below the EFL, so it is not a retrofocus design. [Stage 2 calculation from the final data revision; source comparison to JP 2025-63175 A, Table 5.]

The physical prescription contains 22 lens elements in 16 air-separated groups and is entirely spherical. There are no aspherical surfaces or coefficient tables in Example 2, and no geometric asphere is introduced by the model. The aperture stop lies between GR3a and GR3b, as recommended by the patent and shown by the `STO` row in Table 4. [JP 2025-63175 A, ¶0022, ¶0090–¶0092; Table 4, PDF p. 19.]

The group power structure, calculated from the final data file as air-bounded standalone groups, is:

| Group | Contents | Verified net EFL | Function in the patent/model |
|---|---|---:|---|
| GR1 | L11–L17 | +460.270 mm | Fixed positive front group |
| GR2 | L21+L22 | +140.897 mm | Positive cemented focusing group |
| GR3 | L31–L43 | −70.539 mm | Fixed rear group overall |
| GR3a | L31+L32 | −168.606 mm | Fixed pre-stop subgroup |
| GR3b | L33–L35 | −54.170 mm | Transversely shifted image-stabilization subgroup |
| GR3c | L36–L43 | +69.271 mm | Fixed rear correction subgroup |

These focal lengths are computed standalone group powers, not claims about each group's effective contribution in situ. The patent directly specifies the signs of GR1, GR2, and GR3 for Example 2; the subgroup values above are independent calculations from the final prescription. [JP 2025-63175 A, ¶0020–¶0021 and ¶0090–¶0092.]

GR1 is distinctive for the 121.22 mm air gap after L11. That large gap is the `D_g1max` term used in patent condition (2). The patent's design rationale is explicit: a large first-group air space removes glass from the front portion of the barrel, while the rearward IS group helps shift actuator mass toward the camera. The prescription therefore reaches its long focal length without filling the entire front-to-rear track with large-diameter glass. [JP 2025-63175 A, ¶0027–¶0029.]

GR2 is a compact cemented doublet between two variable air gaps. From infinity to the published 2.7 m state it translates toward the object while GR1 and GR3 remain fixed. GR3 is then partitioned into a pre-stop pair, the movable transverse stabilizer, and a strongly structured rear correction group. This separation of axial focus motion and transverse stabilization is a defining mechanical-optical feature of the example.

## Element-by-Element Analysis

The focal length quoted on each first line below is the verified **standalone thick-element focal length in air** calculated from the final data file. It is not a patent-tabulated element focal length and should not be read as the element's isolated contribution to the assembled system. Refractive indices and Abbe numbers are the patent d-line values from Table 4. Glass names are audited catalog-coordinate classes or equivalents unless explicitly stated otherwise; they do not establish the production supplier or melt.

### L11 — Biconvex Positive

`nd = 1.69895, νd = 30.05. Glass: 699301 — E-FD15L coordinate class (HOYA equivalent; supplier unconfirmed). f = +376.05 mm.`

L11 is the large first element of fixed positive group GR1. Its rear surface is followed by the 121.22 mm air gap that defines the maximum first-group air spacing. In the patent's architecture this front element therefore precedes, rather than fills, the intentionally hollow front section. [JP 2025-63175 A, Table 4 and ¶0027–¶0029.]

The runtime resolves the 699301 coordinate class through compatible catalog dispersion. Catalog line indices are not stored as measured lens data.

### L12 — Biconvex Positive

`nd = 1.43385, νd = 95.23. Glass: CaF2 optical fluorite crystal (supplier unconfirmed). f = +253.04 mm.`

L12 is the first of three fluorite-coordinate positive elements in GR1. Together with L14 and L16, it satisfies the patent's conditions (4) and (5): `νd > 90` and a large positive deviation from the patent's normal partial-dispersion line. The verified normal-line deviation is 0.06194723. [JP 2025-63175 A, ¶0032–¶0035; Tables 4 and 34.]

The patent explicitly links this material condition to correction of primary and secondary chromatic aberration. The analysis therefore treats the chromatic role as source-supported; it does not independently label the complete lens apochromatic.

### L13 — Biconcave Negative

`nd = 1.85478, νd = 24.80. Glass: 855248 — S-NBH56 coordinate class (OHARA equivalent; supplier unconfirmed). f = −157.96 mm.`

L13 is a high-index, low-Abbe negative element between the first two fluorite positives. L13 and L15 share the same patent coordinate and satisfy conditions (10) and (11), with `νd = 24.80` and a verified normal-line deviation of 0.0086028. [JP 2025-63175 A, ¶0052–¶0055; Table 38.]

The patent describes this material choice as part of its chromatic correction strategy for the front group. The runtime resolves a compatible S-NBH56 spectral proxy, while supplier identity remains unconfirmed.

### L14 — Biconvex Positive

`nd = 1.43385, νd = 95.23. Glass: CaF2 optical fluorite crystal (supplier unconfirmed). f = +208.80 mm.`

L14 is the second fluorite-coordinate positive element in GR1. It repeats the material condition of L12 while occupying a smaller-diameter position deeper in the front group. Its verified partial-dispersion normal-line deviation is likewise 0.06194723. [JP 2025-63175 A, Table 4; conditions (4)–(5).]

Its role is best understood collectively with L12 and L16: the patent deliberately distributes three very-low-dispersion positive elements through the fixed front group rather than concentrating them in one cemented assembly.

### L15 — Biconcave Negative

`nd = 1.85478, νd = 24.80. Glass: 855248 — S-NBH56 coordinate class (OHARA equivalent; supplier unconfirmed). f = −236.13 mm.`

L15 repeats the same high-index negative coordinate as L13 and sits between the second and third fluorite-coordinate positives. The patent conditions that apply to L13 also apply to L15. [JP 2025-63175 A, Table 4; ¶0052–¶0055.]

The standalone focal length is weaker in magnitude than L13's, but that comparison does not by itself identify a specific aberration correction. The source-supported statement is that both negative elements belong to the front-group material strategy constrained by conditions (10) and (11).

### L16 — Positive Meniscus

`nd = 1.43385, νd = 95.23. Glass: CaF2 optical fluorite crystal (supplier unconfirmed). f = +209.29 mm.`

L16 is the third fluorite-coordinate element and the only one of the three modeled as a positive meniscus. It completes the repeated `nd = 1.43385`, `νd = 95.23`, `θgF = 0.5387` set identified by the patent's front-group chromatic conditions. [JP 2025-63175 A, Table 4 and ¶0032–¶0035.]

The three-element count is also one of the strongest product-correlation signals because Sony independently states that the production 400 mm lens uses three fluorite elements.

### L17 — Negative Meniscus

`nd = 1.51742, νd = 52.15. Glass: 517522 — H-KF6 coordinate class (supplier unconfirmed). f = −203.73 mm.`

L17 is the rear negative element of GR1. It terminates the fixed front group immediately before the large variable gap `d14` leading to the focus group. The patent does not assign L17 a special material condition, so its optical role is kept at the architectural level rather than attributed to a specific aberration term.

The same 517522 coordinate appears again at L32 in the rear system, but that coordinate repetition does not establish common supplier provenance.

### L21 — Biconvex Positive, cemented GR2 member

`nd = 1.59270, νd = 35.31. Glass: 593353 — S-FTM16 coordinate class (OHARA equivalent; supplier unconfirmed). f = +97.47 mm.`

L21 is the positive member of the cemented L21+L22 focus doublet. The standalone doublet has a verified net EFL of +140.897 mm. During focusing the complete cemented group translates as a unit; no internal spacing within the doublet changes. [JP 2025-63175 A, ¶0091; Table 6.]

The 593353 coordinate class resolves to compatible catalog dispersion at runtime; no external line indices are authored as patent measurements.

### L22 — Biconcave Negative, cemented GR2 member

`nd = 1.48749, νd = 70.44. Glass: 487704 — H-QK3L / FC5 / N-FK5 coordinate class. f = −303.49 mm.`

L22 is the negative partner of L21. The cemented interface is modeled using L22's downstream medium and element identity, matching the current LensVisualizer cemented-junction convention. The positive L21 and weaker negative L22 combine to leave GR2 positive overall.

The patent specifically permits the focusing group to be a cemented lens or singlet and links this compact group to lower moving mass. [JP 2025-63175 A, ¶0059 and ¶0091.]

### L31 — Biconvex Positive, cemented GR3a member

`nd = 1.72825, νd = 28.32. Glass: 728283 — H-ZF4A / E-FD10L coordinate class. f = +129.99 mm.`

L31 begins fixed subgroup GR3a and is cemented to L32. The pair lies immediately before the aperture stop and has a verified standalone net EFL of −168.606 mm. The patent does not separately specify the sign of GR3a, so that subgroup sign is a calculation rather than a source assertion.

L31 is not assigned a special dispersion condition in the patent. Its treatment here is therefore structural: it is the positive member of a net-negative pre-stop cemented pair.

### L32 — Biconcave Negative, cemented GR3a member

`nd = 1.51742, νd = 52.15. Glass: 517522 — H-KF6 coordinate class (supplier unconfirmed). f = −71.81 mm.`

L32 is the stronger negative member of the GR3a pair and shares its material coordinate with L17. Its rear surface is followed by the 7.63 mm air spacing to the stop plane. [JP 2025-63175 A, Table 4.]

Because the stop lies after this cemented pair and before the stabilizing group, GR3a is part of the fixed optical structure flanking the moving GR3b subgroup described by the patent.

### L33 — Biconvex Positive, cemented GR3b member

`nd = 1.90366, νd = 31.31. Glass: 904313 — TAFD25 coordinate class (catalog νd residual 0.01). f = +79.65 mm.`

L33 is the first element encountered after the stop and begins the transverse image-stabilization group. It is cemented to L34. The audited catalog candidate is a very close, rather than exact, Abbe match: the patent gives `νd = 31.31`, while the retained TAFD25-family catalog coordinate differs by 0.01. Supplier identity is not asserted.

The L33+L34 cemented pair is only one part of GR3b; its standalone net EFL is approximately −755.94 mm, whereas the complete three-element GR3b including L35 is −54.170 mm. This illustrates why cemented-pair power and functional-group power are kept distinct.

### L34 — Biconcave Negative, cemented GR3b member

`nd = 1.49700, νd = 81.61. Glass: 497816 — FCD1 / N-PK52A / S-FPL51 coordinate class. f = −70.42 mm.`

L34 is the negative member cemented to L33. Its 497816 coordinate is shared by several vendor families, so the data deliberately uses a class-level label rather than selecting one supplier.

The patent identifies GR3b as the group that shifts approximately perpendicular to the optical axis for image stabilization. It does not isolate an aberration function for L34 itself, so none is assigned here. [JP 2025-63175 A, ¶0021 and ¶0092.]

### L35 — Biconcave Negative

`nd = 1.75500, νd = 52.32. Glass: 755523 — lanthanum-crown coordinate class. f = −57.37 mm.`

L35 is the rear singlet of the GR3b stabilizing assembly. Combined with the preceding cemented pair, it produces the verified negative standalone power of the full stabilization subgroup.

The 755523 coordinate class resolves to compatible catalog dispersion at runtime. Multiple vendors publish glasses at this coordinate, so the curve does not identify a production material.

### L36 — Positive Meniscus

`nd = 1.74950, νd = 35.33. Glass: 750353 — S-NBH51 coordinate class (OHARA equivalent; supplier unconfirmed). f = +84.40 mm.`

L36 starts fixed rear subgroup GR3c after the stabilizer. The subgroup as a whole has a verified positive standalone EFL of +69.271 mm, even though the complete GR3 group is negative. [Stage 2 calculation; JP 2025-63175 A, condition (12).]

This element uses runtime catalog dispersion for its coordinate class; the patent's own refractive-index table remains authoritative.

### L37 — Biconvex Positive

`nd = 1.56883, νd = 56.04. Glass: 569560 — H-BaK7 coordinate class. f = +49.00 mm.`

L37 is a relatively strong positive singlet in GR3c. It is followed by a short air gap and then three cemented pairs occupying the rearmost portion of the optical system.

The patent's principal conditions on GR3c concern the subgroup power and selected negative lenses rather than L37 individually. Accordingly, the analysis does not assign a more specific aberration role than its participation in the positive rear subgroup.

### L38 — Biconcave Negative, cemented GR3c member

`nd = 2.00100, νd = 29.13. Glass: 001291 — TAFD55-W coordinate class (HOYA equivalent; supplier unconfirmed). f = −21.72 mm.`

L38 is a very high-index negative element cemented to positive L39. Its `νd = 29.13` satisfies the patent's condition (7) threshold for a low-Abbe negative element in GR3c. [JP 2025-63175 A, ¶0040–¶0043; Table 38.]

The audited TAFD55-W coordinate is exact at the patent's d-line pair, and the data stores catalog C/F/g indices for that coordinate class. Those indices strengthen the spectral model but do not prove that the manufactured lens used HOYA glass.

### L39 — Biconvex Positive, cemented GR3c member

`nd = 1.59270, νd = 35.31. Glass: 593353 — S-FTM16 coordinate class (OHARA equivalent; supplier unconfirmed). f = +29.67 mm.`

L39 is the positive partner of L38 and uses the same audited 593353 coordinate class as focus-group element L21. The L38+L39 cemented pair has a verified standalone net EFL of −107.917 mm.

Its runtime spectral proxy uses the same coordinate-class evidence as L21; no measured line indices are authored.

### L40 — Biconcave Negative, cemented GR3c member

`nd = 1.59282, νd = 68.63. Glass: 593686 — FCD505 coordinate class (HOYA equivalent; supplier unconfirmed). f = −26.18 mm.`

L40 is a low-dispersion negative element cemented to L41. The patent gives `θgF = 0.5441`; with `νd = 68.63`, the verified deviation from the patent's normal line is 0.01944063. L40 also satisfies the patent's negative-element focal-length and image-plane-distance conditions: `|f3cn/f| = 0.067475` and `D3cnImg/f = 0.126005`. [JP 2025-63175 A, ¶0036–¶0039 and ¶0044–¶0051; Tables 34 and 38.]

The `dPgF` value stored in the data is this computed normal-line deviation derived from the patent's published `θgF` and `νd`. It is not a separately published catalog melt measurement.

### L41 — Positive Meniscus, cemented GR3c member

`nd = 1.68893, νd = 31.16. Glass: 689312 — H-ZF10 / MP-FD80 coordinate class. f = +69.08 mm.`

L41 is the positive partner of L40. The cemented pair remains net negative with a verified standalone EFL of −39.978 mm. A compatible catalog curve supplies C/F/g dispersion at runtime.

The patent conditions identify L40, rather than L41, as one of the selected negative chromatic-correction elements. L41 is therefore described as the positive cemented partner without attributing an unverified independent aberration function.

### L42 — Biconvex Positive, cemented GR3c member

`nd = 1.80610, νd = 33.27. Glass: 806333 — H-ZLaF56B / NBFD15 coordinate class. f = +24.08 mm.`

L42 is a strong positive element cemented to the final negative element L43. The L42+L43 cemented pair is net positive, with a verified standalone EFL of +80.036 mm.

This pair lies immediately ahead of the final 28.23 mm published back-focus spacing. L42 itself is not one of the elements singled out by the patent's GR3c material inequalities.

### L43 — Negative Meniscus, cemented GR3c member

`nd = 1.92119, νd = 23.96. Glass: 921240 — FDS24 coordinate class (HOYA equivalent; supplier unconfirmed). f = −31.27 mm.`

L43 is the final refractive element and the negative rear member of the L42+L43 cemented pair. It is one of the clearest condition-bearing elements in the prescription. The patent gives `θgF = 0.6202`, producing a verified normal-line deviation of 0.01508996; `νd = 23.96` satisfies condition (7); `|f3cn/f| = 0.080590` satisfies condition (8); and `D3cnImg/f = 0.076881` satisfies condition (9). [JP 2025-63175 A, ¶0036–¶0051; Tables 34 and 38.]

The FDS24-family catalog evidence independently reproduces the relevant partial-dispersion ratio from official line differences. The supplier and melt remain unconfirmed, so the data uses coordinate-class language rather than a production-material assertion.

## Glass Identification and Selection

The prescription uses 17 distinct d-line material coordinates across 22 elements. The table below summarizes the audited coordinate labels used by the final data. Exact-coordinate matches are still **equivalents or classes** unless the patent or a manufacturer source establishes the supplier. For the primary catalog candidate selected for each coordinate, the TAFD25-family row is the only one with a nonzero Abbe residual, at 0.01. Cross-vendor aliases grouped under the same six-digit class can differ slightly in catalog νd and are not treated as exact unless the individual catalog coordinate agrees.

| Coordinate / class used in data | nd | νd | Elements | Spectral support in final data | Identification status |
|---|---:|---:|---|---|---|
| 699301 / E-FD15L class | 1.69895 | 30.05 | L11 | runtime catalog curve | coordinate exact; supplier unconfirmed |
| CaF2 optical fluorite | 1.43385 | 95.23 | L12, L14, L16 | patent-derived `dPgF` | material class strongly supported; supplier unconfirmed |
| 855248 / S-NBH56 class | 1.85478 | 24.80 | L13, L15 | runtime catalog curve + patent-derived `dPgF` | coordinate exact; supplier unconfirmed |
| 517522 / H-KF6 class | 1.51742 | 52.15 | L17, L32 | nd/νd only | coordinate exact class |
| 593353 / S-FTM16 class | 1.59270 | 35.31 | L21, L39 | runtime catalog curve | coordinate exact; supplier unconfirmed |
| 487704 / H-QK3L-FC5-N-FK5 class | 1.48749 | 70.44 | L22 | nd/νd only | H-QK3L and FC5 match the patent coordinate; N-FK5 is a close equivalent (νd 70.41, Δνd −0.03); supplier unconfirmed |
| 728283 / H-ZF4A-E-FD10L class | 1.72825 | 28.32 | L31 | nd/νd only | coordinate exact class |
| 904313 / TAFD25 class | 1.90366 | 31.31 | L33 | nd/νd only | νd differs from candidate by 0.01 |
| 497816 / FCD1-N-PK52A-S-FPL51 class | 1.49700 | 81.61 | L34 | nd/νd only | N-PK52A/FCD1-class candidate matches the patent coordinate; S-FPL51 is a close equivalent (νd 81.54, Δνd −0.07); supplier unconfirmed |
| 755523 lanthanum-crown class | 1.75500 | 52.32 | L35 | runtime catalog curve | coordinate exact multi-vendor class |
| 750353 / S-NBH51 class | 1.74950 | 35.33 | L36 | runtime catalog curve | coordinate exact; supplier unconfirmed |
| 569560 / H-BaK7 class | 1.56883 | 56.04 | L37 | nd/νd only | coordinate exact class |
| 001291 / TAFD55-W class | 2.00100 | 29.13 | L38 | runtime catalog curve | coordinate exact; supplier unconfirmed |
| 593686 / FCD505 class | 1.59282 | 68.63 | L40 | patent-derived `dPgF` | coordinate exact; supplier unconfirmed |
| 689312 / H-ZF10-MP-FD80 class | 1.68893 | 31.16 | L41 | runtime catalog curve | coordinate exact class |
| 806333 / H-ZLaF56B-NBFD15 class | 1.80610 | 33.27 | L42 | nd/νd only | coordinate exact class |
| 921240 / FDS24 class | 1.92119 | 23.96 | L43 | patent-derived `dPgF`; catalog line-difference check | coordinate exact; supplier unconfirmed |

The most explicit source-backed material strategy occurs in the fixed front group and the rearmost part of GR3c. Conditions (4) and (5) select very-low-dispersion positive material in GR1; the three fluorite-coordinate elements satisfy them. Conditions (10) and (11) constrain low-Abbe negative material in GR1, matched by L13 and L15. In GR3c, conditions (6)–(9) select negative elements by partial dispersion, Abbe number, standalone focal length, and location relative to the image plane. [JP 2025-63175 A, ¶0032–¶0055.]

This analysis does not describe the complete design as apochromatic. Some elements have explicit patent partial-dispersion evidence and others use compatible catalog dispersion curves, but the data still mixes source-published spectral information with catalog-equivalent spectral proxies. The distinction is material: a coordinate match can support a chromatic model without proving the exact production glass.

## Focus Mechanism

Example 2 uses published inner focus. GR1 and GR3 remain fixed while the cemented positive GR2 doublet, L21+L22, translates toward the object when focusing from infinity to the published 2.7 m state. [JP 2025-63175 A, ¶0020, ¶0091; Table 6.]

| Published state | d14 before GR2 | d17 after GR2 | BF |
|---|---:|---:|---:|
| Infinity | 51.13 mm | 9.69 mm | 28.23 mm |
| 2.7 m label | 31.43 mm | 29.39 mm | 28.23 mm |

The two changing gaps conserve their sum at 60.82 mm. GR2 therefore translates 19.70 mm objectward without changing the overall first-to-image track. No interpolated or reconstructed close-focus law is claimed: only the two Table 6 endpoints are source-published, while intermediate focus positions used in geometry testing are model interpolation samples.

The patent does not define the reference plane for the 2.7 m distance label. A paraxial conjugate check of the final near-state prescription gives approximately 2.707 m from object to image plane and 2.327 m from object to the first vertex, with paraxial magnification magnitude 0.1562. The former is consistent with the patent's 2.7 m label and the latter difference illustrates why the datum is not silently redefined. Sony independently specifies a 2.7 m minimum focus distance and 0.16 maximum magnification for the production lens; that numerical agreement is correlation evidence, not proof of identity.

Sony's launch material states that two XD Linear Motors drive the production lens focus system. That is a product fact. The patent example establishes only the optical motion of GR2; it does not identify those production actuators as part of the numerical prescription.

## Chromatic Correction Strategy

The patent makes chromatic control a central design constraint rather than leaving it implicit in the glass table. The front group combines three positive fluorite-coordinate elements with two high-index, low-Abbe negative elements, while the rear GR3c subgroup places selected negative elements close to the image plane. [JP 2025-63175 A, ¶0032–¶0055.]

For L12/L14/L16, the patent's `νd = 95.23` and `θgF = 0.5387` produce a verified normal-line deviation of 0.06194723. The patent states that satisfying conditions (4) and (5) improves primary and secondary chromatic correction in the telephoto front group. For L13/L15, `νd = 24.80` and `θgF = 0.6122` give a deviation of 0.0086028, satisfying conditions (10) and (11). These statements follow the patent's own material-selection rationale rather than inferring performance only from Abbe number.

The rear group uses a different mechanism. L40 and L43 are negative lenses with verified positive normal-line deviations of 0.01944063 and 0.01508996, respectively, while L43 and L38 also fall below the patent's `νd < 31` threshold. Conditions (8) and (9) then constrain the focal strength and image-side location of selected negative GR3c elements. The patent states that these rear negative elements support lateral-color correction near the image plane. [JP 2025-63175 A, ¶0036–¶0051.]

The spectral model remains deliberately qualified. Patent-derived `dPgF` values are computed from the published `θgF` and `νd` under the patent's stated normal-line equation. C/F/g indices are resolved at runtime from coordinate-compatible catalog curves; catalog values are not authored as measured patent indices. These two evidence types are not interchangeable and neither identifies a production melt without further source support.

## Conditional Expressions

Example 2 satisfies all twelve patent conditions when evaluated from the final prescription. The values below are recomputed from the final data revision; they are not copied from the patent's summary tables.

| Condition | Verified value | Criterion | Result |
|---|---:|---|---|
| (1) `L/f` | 0.981289 | `< 1` | Satisfied |
| (2) `Dg1max/f` | 0.312423 | `> 0.23` | Satisfied |
| (3) `D3bImg/f` | 0.238969 | `< 0.24` | Satisfied |
| (4) front positive `νd` | 95.23 | `> 90` | Satisfied |
| (5) front positive normal-line deviation | 0.06194723 | `> 0.04` | Satisfied |
| (6) GR3c negative normal-line deviation | L43 0.01508996; L40 0.01944063 | `> 0.008` | Satisfied |
| (7) GR3c negative `νd` | L43 23.96; L38 29.13 | `< 31` | Satisfied |
| (8) `|f3cn/f|` | L40 0.067475; L43 0.080590 | between 0 and 0.15 | Satisfied |
| (9) `D3cnImg/f` | L40 0.126005; L43 0.076881 | `< 0.15` | Satisfied |
| (10) front negative `νd` | 24.80 | `< 35` | Satisfied |
| (11) front negative normal-line deviation | 0.0086028 | `< 0.010` | Satisfied |
| (12) `|f3c/f|` | 0.178534 | between 0.05 and 0.3 | Satisfied |

One source discrepancy must remain visible. Table 34 prints Example 2 `D_g1max/f = 0.310`, while Table 4 gives the actual maximum GR1 air gap as 121.22 mm and Table 5 gives `f = 388.00 mm`; these source values yield 0.31242268, which cannot round to 0.310. The final model follows the raw prescription and condition definition rather than replacing the Table 34 entry. Both 0.310 and 0.312423 satisfy condition (2), so the inconsistency does not change the condition outcome or the constructed prescription. [JP 2025-63175 A, Tables 4, 5, and 34.]

## Image Stabilization

The patent divides the fixed third lens group into GR3a, GR3b, and GR3c and specifies GR3b as the image-stabilization group. GR3b contains the cemented L33+L34 pair followed by negative singlet L35. It shifts in a direction approximately perpendicular to the optical axis; the surrounding GR3a and GR3c subgroups remain axially fixed during focusing. [JP 2025-63175 A, ¶0021–¶0022, ¶0092.]

The stabilizer's verified standalone EFL is −54.170 mm. The stop is immediately ahead of the subgroup. The patent explains that placing the stabilizer in this rear position lowers ray heights through the moving group, permits a smaller stabilizing assembly, and places its actuator nearer the camera. Those are source-stated design goals, not deductions from the subgroup power alone. [JP 2025-63175 A, ¶0027–¶0029.]

No numerical transverse shift range is published for Example 2 and none is invented in the data file. Sony's Optical SteadyShot branding is used only as production-correlation evidence; the numerical patent model represents the centered non-stabilized state.

## Verification Summary

The final `.data.ts` preserves the patent prescription at scale factor 1.0; the prescription is not scaled. Marketing focal length and aperture are stored separately as 400 mm and f/2.8, while the patent/model quantities remain 388.00 mm published focal length and f/2.91. The recomputed Gaussian EFL from rounded prescription data is 388.145731 mm. No surface, spacing, or image-plane coordinate is scaled to force the model to 400 mm.

The principal infinity-state first-order checks are:

| Quantity | Final-model calculation | Patent value | Comment |
|---|---:|---:|---|
| Gaussian EFL | 388.145731 mm | 388.00 mm | within source-precision sensitivity |
| BFD from S39 | 28.285215 mm | 28.23 mm | within source-precision sensitivity |
| S1-to-image track | 380.740 mm | 380.75 mm | direct spacing sum |
| Petzval sum | 4.4512183×10⁻⁵ mm⁻¹ | — | surface-by-surface `φ/(n·n′)` |

The physical stop diameter is not published. The model therefore uses an explicitly inferred stop semi-diameter of 16.94716 mm, calibrated so that the parsed prescription gives the published f/2.91 at infinity. The resulting modeled entrance-pupil diameter is 133.383 mm and the modeled f-number is 2.90999997. This agreement is calibration, not independent evidence for the physical diaphragm diameter.

Semi-diameters are likewise modeled because Table 4 contains no clear-aperture column. They were derived from spherical-ray envelopes and Figure 5 proportions, then constrained by the current geometry policy. The verified modeled geometry has a minimum calculated edge thickness of 0.3783 mm, a maximum spherical rim angle of 47.35°, and a maximum shared-gap intrusion fraction of 0.8703 against the 0.90 policy limit. These values validate the authored model geometry; they are not measurements of production clear apertures.

Independent Stage 4 branch-safe spherical Snell tracing reproduces the 59-ray central acceptance set at the published endpoints and representative intermediate focus samples with all rays contained. A denser sweep using the project default visible ray fractions over `focusT = 0…1` is more revealing: 36 of 378 samples are non-contained at the outer `±0.75` off-axis pupil sample, including 32 clips whose limiting surface is S1 or S15 and four stop-target solutions that are unavailable. No such limiting clip occurs inside a cemented group. These results are retained as modeled natural vignetting/edge reachability, not as production vignetting measurements or as a geometry-validity failure. The full-field chief ray remains contained; at infinity the exact 3.15° chief reaches 21.666 mm image height versus the published 21.633 mm.

The model omits the manufacturer-counted filter, sensor cover glass, and any other rear plate because none is part of Example 2 Table 4. No air-equivalent spacing conversion is required. No dummy or flare-cutter plane is present in the selected source prescription.

Repository integration checks are recorded in the companion audit log; they remain separate from the source/model calculations above.

## Sources and References

1. Japan Patent Office. **JP 2025-63175 A, 光学系および撮像装置**, published 2025-04-15. Example 2: ¶0089–¶0097; Table 4 (PDF p. 19); Tables 5–6 (PDF p. 20); Table 34 (PDF p. 39); Table 38 (PDF p. 43); Figure 5 (PDF p. 63). Priority 2019-06-04.
2. Sony. **SEL400F28GM Specifications**. https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel400f28gm/specifications
3. Sony. **FE 400mm F2.8 GM OSS launch press release**, 2018-06-28. https://www.sony.jp/CorporateCruise/Press/201806/18-0628/
4. Sony. **FE 400mm F2.8 GM OSS development announcement**, 2017-10-25. https://www.sony.com/ja/SonyInfo/News/Press/201710/17-099/
5. OHARA Corporation. **Optical Glass Catalog**. https://oharacorp.com/glass-catalog/
6. HOYA Corporation. **Optical Glass Data Download**. https://www.hoya-opticalworld.com/english/datadownload/index.html
7. SCHOTT. **Optical Glass Downloads**. https://www.schott.com/en-us/products/optical-glass-p1000267
8. HIKARI GLASS CO., LTD. **Optical Glass Catalog Download**. https://www.hikari-g.co.jp/optical_glass/catalog/
9. CDGM Glass Co., Ltd. **Optical Glass Database**. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
10. SUMITA OPTICAL GLASS, Inc. **Optical Glass Downloads**. https://www.sumita-opt.co.jp/en/download/
11. HOYA Corporation. **E-FD15L datasheet**. https://www.hoya-opticalworld.com/common/pdf2019/E-FD15L.pdf
12. OHARA Corporation. **S-NBH56 datasheet**. https://staging.oharacorp.com/wp-content/uploads/2023/07/S-NBH56-2020-06.pdf
13. OHARA Corporation. **S-FTM16**. https://oharacorp.com/glass/s-ftm16/
14. HOYA Corporation. **TAFD55-W datasheet**. https://www.hoya-opticalworld.com/common/pdf2019/TAFD55-W.pdf
15. HOYA Corporation. **FDS24-SW optical data**. https://www.hoya-opticalworld.com/common/pdf2024/FDS24-SW_02.pdf

The seven elements with patent-derived partial-dispersion deviations (L12–L16, L40 and L43) carry the patent APD display classification. This records the source material conditions; it does not establish a production glass supplier or whole-lens APO performance.
