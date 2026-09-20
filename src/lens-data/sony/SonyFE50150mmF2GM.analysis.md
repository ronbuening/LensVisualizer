## Patent Reference and Design Identification

**Patent:** WO 2025/220324 A1\
**Application Number:** PCT/JP2025/005644\
**Priority:** JP 2024-065875, 16 April 2024\
**Filed:** 19 February 2025\
**Published:** 23 October 2025\
**Inventors:** Hiroo Juri; Naoto Kikuchi; Hiraku Iwaya\
**Applicant:** Sony Group Corporation\
**Title:** *Zoom Lens and Imaging Device*\
**Embodiment analyzed:** Example 1

The prescription transcribed in the companion data file is Example 1 of WO 2025/220324 A1. The patent defines the surface-table notation and d-line refractive-index convention in ¶¶0065–0068, gives the Example 1 element and zoom-group structure in ¶¶0069–0078, and publishes the full numerical prescription in Tables 1–5. Figure 1 shows the same example at Wide, Mid, and Tele, including the seven motion groups G1–G7, the stop, and the two floating-focus groups. The patent is the authority for prescription values and mechanism statements in this analysis.

The production association with the SONY FE 50-150mm f/2 GM is strong but remains a research correlation, not a manufacturer-confirmed identification of Example 1 as the production prescription. The evidence is convergent:

1. Example 1 contains 19 physical glass elements. Sony lists the product as 17 groups / 19 elements. The patent separately uses a 17-component count because its two cemented pairs are each treated as a single lens component; those terms are not assumed to be identical to Sony’s marketing group terminology.
2. The patent design values are 51.50, 88.98, and 145.50 mm at f/2.06; Sony markets a 50–150 mm f/2 lens. The data file deliberately keeps the design and marketing quantities separate.
3. The patent uses image height Y = 21.63 mm and an image-plane effective diameter of 43.33 mm, consistent with 35 mm full-frame coverage. Sony identifies the product as a full-frame E-mount lens.
4. Patent close shooting distances are 397, 521, and 746 mm at Wide, Mid, and Tele. Sony publishes a minimum-focus range of approximately 0.40–0.74 m and a maximum magnification of 0.2×.
5. Example 1 uses internal zoom and a two-group floating-focus arrangement. Sony likewise describes internal zoom and floating focus for the product.
6. The patent priority date, 16 April 2024, predates Sony’s 22 April 2025 announcement and 23 May 2025 release.

The production specifications in the preceding comparison come from Sony’s official FE 50-150mm F2 GM specification and release pages. Neither those sources nor the patent states that Example 1 is the manufactured prescription, so the correlation should not be read as such a confirmation. The patent optical track is also not compared directly with the product’s external barrel length because the reference planes differ. [Sony specifications][sony-spec] [Sony release][sony-release]

## Optical Architecture

Example 1 is a seven-motion-group internal zoom with signed group-power sequence **positive – negative – positive – positive – negative – positive – negative**. The patent keeps G1, G4, and G7 fixed during zoom; G2, G3, G5, and G6 change axial position as focal length changes. For close focusing, G5 moves toward the image and G6 moves toward the object at different rates (WO 2025/220324 A1, ¶¶0069–0070; Fig. 1).

The design contains 19 physical elements and two cemented interfaces, giving 17 air-separated optical groups in the implemented sequential model. These 17 physical groups are distinct from the seven larger zoom-motion groups G1–G7. The aperture stop lies between G3 and the first refracting element of G4, matching source surface 17. No sensor cover glass, filter plate, dummy plane, or mechanical part appears in Example 1 Table 1, so none is introduced into the model.

Isolated group focal lengths computed from the final data reproduce patent Table 5 within 0.02 mm:

| Motion group | Elements | Net focal length (mm) | Kinematic role |
|---|---|---:|---|
| G1 | E1, E2, E3 | +132.450064 | fixed in zoom |
| G2 | E4, E5, E6, E7 | -42.582996 | moves in zoom |
| G3 | E8 | +70.078778 | moves in zoom |
| G4 | E9, E10, E11, E12, E13 | +60.069367 | fixed in zoom |
| G5 | E14, E15 | -66.640129 | moves in zoom; imageward in close focus |
| G6 | E16 | +50.868972 | moves in zoom; objectward in close focus |
| G7 | E17, E18, E19 | -35.192987 | fixed in zoom |

The total optical track from the first glass vertex to the image plane is about 210.16 mm at all three published infinity states. Under this project’s architectural terminology, the layout is **not** classified as a telephoto optical form because TL/EFL is 4.0817, 2.3615, and 1.4442 at Wide, Mid, and Tele, respectively, and never falls below 1. Likewise, BFD never exceeds EFL, so the design is not classified as retrofocus. These are first-order classifications of the modeled prescription, not product-category labels.

## Element-by-Element Analysis

The following element descriptions use the final data file for labels, shapes, d-line indices, Abbe numbers, glass annotations, cemented relationships, and standalone focal lengths. “Standalone f” is the focal length of the isolated physical element in air; it is not the power of the surrounding motion group and is not interchangeable with the cemented-pair net power. Unless the patent explicitly provides a function, no specific aberration-correction role is assigned from power sign or glass class alone.

### E1 — Negative Meniscus, convex to object

**nd = 1.80610, νd = 33.3. Glass: 806333 class (supplier unproven). Standalone f = −306.490 mm.**

E1 is the first element of G1. Its standalone negative power is weak compared with the net positive power of G1; the patent assigns no separate aberration-correction function to E1, so the analysis limits itself to its structural and power role.

### E2 — Biconvex Positive

**nd = 1.43700, νd = 95.1. Glass: 437951 class (supplier unproven). Standalone f = +176.726 mm.**

E2 is the first of two positive elements that follow E1 in G1. It has the highest Abbe number used in the prescription, but the patent does not identify a supplier or a named special-glass family; the data therefore retains only the 437951 d-line coordinate class.

### E3 — Positive Meniscus, convex to object

**nd = 1.43700, νd = 95.1. Glass: 437951 class (supplier unproven). Standalone f = +189.241 mm.**

E3 closes G1 and uses the same 437951 coordinate class as E2. Its positive standalone power contributes to the net positive G1, while the element remains air-spaced from E2.

### E4 — Negative Meniscus (2× Asph)

**nd = 1.76802, νd = 49.2. Glass: 768492 class (supplier unproven). Standalone f = −65.594 mm.**

E4 opens G2 and is the first doubly aspherical element. Both of its surfaces are aspherical (7A and 8A). It is a negative standalone element inside a net-negative zoom group; no more specific aberration function is assigned without direct patent support.

### E5 — Biconcave Negative

**nd = 1.72916, νd = 54.7. Glass: 729547 class (supplier unproven). Standalone f = −67.658 mm.**

E5 is a biconcave negative element within G2. It is air-spaced from E4 and E6 and reinforces the negative power character of the group.

### E6 — Biconvex Positive

**nd = 1.90110, νd = 27.1. Glass: 901271 class (supplier unproven). Standalone f = +60.790 mm.**

E6 is the sole positive standalone element between the negative E5 and E7 portions of G2. Its low Abbe coordinate is preserved as a numeric class only; supplier and melt identity are not established by the patent.

### E7 — Negative Meniscus, convex to image

**nd = 1.55032, νd = 75.5. Glass: 550755 class (supplier unproven). Standalone f = −120.586 mm.**

E7 closes G2 as a negative meniscus. Its relatively high Abbe coordinate does not by itself justify an ED or anomalous-dispersion label, so none is assigned.

### E8 — Biconvex Positive (2× Asph)

**nd = 1.69350, νd = 53.2. Glass: 694532 class (supplier unproven). Standalone f = +70.079 mm.**

E8 is the single element of G3; consequently its standalone focal length and the isolated G3 focal length are the same within numerical precision. Both surfaces (15A and 16A) are aspherical.

### E9 — Biconcave Negative

**nd = 1.95375, νd = 32.3. Glass: 954323 class (supplier unproven). Standalone f = −66.250 mm.**

E9 is the first refracting element after the aperture stop and begins G4. It is a strong negative standalone element within a net-positive multi-element group.

### E10 — Biconvex Positive

**nd = 1.76385, νd = 48.5. Glass: 764485 class (supplier unproven). Standalone f = +53.136 mm.**

E10 is a positive biconvex element in G4. Patent Table 31 identifies the corresponding P3p material coordinate with nd about 1.76, νd = 48.49, and θgF = 0.559 for conditions (2)–(4); this is source spectral evidence for the condition only, not a supplier or APO designation.

### E11 — Negative Meniscus, convex to object

**nd = 1.76634, νd = 35.8. Glass: S-NBH59 — coordinate-compatible spectral proxy (supplier unproven). Standalone f = −49.522 mm.**

E11 is the negative member of cemented pair D1. Its standalone power is substantial, but D1 must be treated as a cemented system rather than by algebraically adding the isolated powers.

D1 combines E11 and E12 at the cemented interface. The verified cemented-pair focal length is -1327.553 mm; that net value is intentionally distinguished from E11’s isolated −49.522 mm value.

### E12 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 class (supplier unproven). Standalone f = +51.643 mm.**

E12 is the positive member of D1 and shares the cemented interface at surface 23. The verified net focal length of D1 is very weakly negative compared with either isolated component, showing the strong cancellation produced by the cemented geometry.

For the complete D1 pair, the verified net power is -0.753266 D (-1327.553 mm).

### E13 — Biconvex Positive

**nd = 1.59282, νd = 68.6. Glass: 593686 class (supplier unproven). Standalone f = +81.011 mm.**

E13 is the final element of G4 and is a positive biconvex singlet. Together with the preceding elements it leaves G4 net positive at the patent value reproduced by the final model.

### E14 — Biconvex Positive

**nd = 1.86966, νd = 20. Glass: 870200 class (supplier unproven). Standalone f = +103.931 mm.**

E14 is the positive first element of cemented pair D2 and therefore of focus group G5. Because the pair is cemented, its system focal length is distinct from the standalone focal length quoted here.

For the complete D2 pair/G5, the verified cemented net focal length is -66.640 mm, not E14’s isolated value.

### E15 — Biconcave Negative

**nd = 1.61340, νd = 44.3. Glass: 613443 class (supplier unproven). Standalone f = −39.983 mm.**

E15 is the negative second element of D2. The cemented pair as a whole is negative and constitutes G5, the focus group that moves imageward at close focus.

D2 is also the complete G5 motion group, so its cemented net focal length and the independently computed G5 group focal length both evaluate to approximately -66.640 mm.

### E16 — Biconvex Positive (1× Asph)

**nd = 1.59245, νd = 66.9. Glass: M-PCD51 — coordinate-compatible spectral proxy (supplier unproven). Standalone f = +50.869 mm.**

E16 is the single element of G6, so its standalone focal length is also the group focal length within numerical precision. Its rear surface 31A is aspherical. During close focusing, G6 moves objectward while G5 moves in the opposite direction.

### E17 — Positive Meniscus, convex to image

**nd = 1.64769, νd = 33.8. Glass: 648338 class (supplier unproven). Standalone f = +119.026 mm.**

E17 opens the fixed rear group G7 and is a positive meniscus. It is followed by two negative menisci, leaving G7 net negative.

### E18 — Negative Meniscus, convex to image (2× Asph)

**nd = 1.76802, νd = 49.2. Glass: 768492 class (supplier unproven). Standalone f = −55.447 mm.**

E18 is a negative meniscus in G7 and carries two aspherical surfaces (34A and 35A). Its glass coordinate is the same 768492 class used earlier by E4, without implying a particular vendor or melt.

### E19 — Negative Meniscus, convex to image

**nd = 1.95375, νd = 32.3. Glass: 954323 class (supplier unproven). Standalone f = −58.512 mm.**

E19 is the final refracting element before the image plane. It is a negative meniscus using the 954323 coordinate class, which also appears in E9; the patent does not identify a supplier for either use.

## Glass Identification / Selection

E11 uses the published OHARA S-NBH59 Sellmeier curve (1.766342 / 35.82 versus patent 1.76634 / 35.8). E16 uses M-PCD51 as a close coordinate-compatible spectral proxy. Eighteen of nineteen elements now resolve to catalog curves; E6 remains unresolved. Neither proxy identifies the production supplier.

The patent publishes d-line refractive indices and Abbe numbers but does not name glass suppliers or melts. The companion data therefore stores d-line coordinate classes and qualified spectral proxies based on the published nd/νd pairs. Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs were used in the dossier to test coordinate compatibility, but catalog proximity is not treated as proof of the actual supplier. [OHARA][ohara] [HOYA][hoya] [SCHOTT][schott] [HIKARI][hikari] [CDGM][cdgm] [SUMITA][sumita]

| Coordinate class | nd | νd | Elements | Analysis disposition |
|---|---:|---:|---|---|
| 806333 | 1.80610 | 33.3 | E1 | d-line coordinate class; supplier unproven |
| 437951 | 1.43700 | 95.1 | E2, E3 | d-line coordinate class; supplier unproven |
| 768492 | 1.76802 | 49.2 | E4, E18 | d-line coordinate class; supplier unproven |
| 729547 | 1.72916 | 54.7 | E5 | d-line coordinate class; supplier unproven |
| 901271 | 1.90110 | 27.1 | E6 | d-line coordinate class; supplier unproven |
| 550755 | 1.55032 | 75.5 | E7 | d-line coordinate class; supplier unproven |
| 694532 | 1.69350 | 53.2 | E8 | d-line coordinate class; supplier unproven |
| 954323 | 1.95375 | 32.3 | E9, E19 | d-line coordinate class; supplier unproven |
| 764485 | 1.76385 | 48.5 | E10 | d-line coordinate class; supplier unproven |
| S-NBH59 proxy (766358) | 1.76634 | 35.8 | E11 | d-line coordinate class; supplier unproven |
| 497816 | 1.49700 | 81.6 | E12 | d-line coordinate class; supplier unproven |
| 593686 | 1.59282 | 68.6 | E13 | d-line coordinate class; supplier unproven |
| 870200 | 1.86966 | 20 | E14 | d-line coordinate class; supplier unproven |
| 613443 | 1.61340 | 44.3 | E15 | d-line coordinate class; supplier unproven |
| M-PCD51 proxy (patent 592669) | 1.59245 | 66.9 | E16 | d-line coordinate class; supplier unproven |
| 648338 | 1.64769 | 33.8 | E17 | d-line coordinate class; supplier unproven |

The widest dispersion spread in the prescription can be seen directly in the stored Abbe numbers: the 437951 class used by E2/E3 has νd = 95.1, while E14’s 870200 class has νd = 20.0. Those numbers are source coordinates, not evidence by themselves that any element belongs to a proprietary “ED,” “Super ED,” “XA,” or anomalous-dispersion family. The model therefore does not attach such labels.

The only patent-published partial-dispersion quantity used here is for P3p, corresponding to E10 in Example 1: Table 31 gives nd ≈ 1.76, νd = 48.49, and θgF = 0.559. That information is sufficient to evaluate patent conditions (2)–(4), but it is not converted into a supplier Sellmeier model, `dPgF`, or a general apochromatic-performance claim.

## Focus Mechanism

Example 1 publishes a genuine two-group floating-focus mechanism rather than requiring a reconstructed close-focus law. G5, the cemented E14/E15 pair, moves toward the image as focus moves from infinity toward the close state. G6, the single E16 element, moves toward the object. G1, G4, and G7 remain fixed. All six Wide/Mid/Tele × infinity/close variable-spacing states come directly from patent Table 3 (WO 2025/220324 A1, ¶¶0069–0070; Table 3; Fig. 1).

The focus-sensitive gaps are d26, d29, and d31. Their published values are:

| Zoom state | d26 inf → close (mm) | d29 inf → close (mm) | d31 inf → close (mm) | Close shooting distance |
|---|---:|---:|---:|---:|
| Wide | 2.40 → 6.14 | 22.72 → 17.74 | 2.15 → 3.38 | 397 mm |
| Mid | 4.81 → 12.42 | 20.23 → 11.05 | 2.22 → 3.79 | 521 mm |
| Tele | 2.49 → 15.63 | 22.77 → 7.67 | 2.00 → 3.97 | 746 mm |

From the final data, the corresponding close-minus-infinity group motions are:

| Zoom state | G5 motion | G6 motion | Rounded G7 residual |
|---|---:|---:|---:|
| Wide | +3.74 mm imageward | -1.24 mm objectward | -0.01 mm |
| Mid | +7.61 mm imageward | -1.57 mm objectward | +0.00 mm |
| Tele | +13.14 mm imageward | -1.96 mm objectward | +0.01 mm |

The ±0.01 mm rear-group residuals are consistent with the two-decimal spacing tables and are not corrected. A separate paraxial finite-conjugate replay of the rounded source states leaves equivalent image-plane residuals of about 0.138 mm (Wide), 0.199 mm (Mid), and 0.195 mm (Tele). The implemented model preserves the published spacings rather than modifying them to force exact Gaussian conjugacy.

The top-level `closeFocusM = 0.4` in the data file is production metadata matching Sony’s minimum wide-end focus distance. It does not replace the three source close states, which retain the patent’s 397/521/746 mm shooting distances. Sony also states that the production lens uses floating focus driven by four XD linear motors; that motor specification is a product fact and is not used to infer unprinted patent spacings. [Sony specifications][sony-spec]

## Aspherical Surfaces

Example 1 has seven geometric aspherical surfaces: 7A and 8A on E4, 15A and 16A on E8, 31A on the rear of E16, and 34A and 35A on E18. The patent defines the sag equation in ¶¶0066–0067 as

$$x=\frac{cy^2}{1+\sqrt{1-(1+k)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10},\qquad c=1/R.$$

Because the patent explicitly uses the factor $1-(1+k)c^2y^2$, its tabulated $k$ maps directly to the project’s standard conic constant $K$. No conic conversion is applied. No dimensional scaling is applied to the prescription, so the published coefficients are used without scale transformation. Table 4 publishes only even terms through A10 for Example 1.

| Surface | Element | K | A4 | A6 | A8 | A10 | Verified polynomial departure at authored SD |
|---|---|---:|---:|---:|---:|---:|---:|
| 7A | E4 | 0 | 2.596210e-07 | 3.370070e-09 | -5.229430e-12 | 3.913320e-15 | +0.296907 mm |
| 8A | E4 | 1.31207 | -2.695330e-06 | 2.600200e-10 | -3.289690e-12 | -6.666920e-15 | -0.568590 mm |
| 15A | E8 | 0 | -1.304800e-06 | -2.505330e-10 | -1.113460e-12 | -5.072520e-16 | -0.352080 mm |
| 16A | E8 | 0 | 1.491760e-06 | -2.795270e-10 | -1.098000e-12 | 0* | +0.235253 mm |
| 31A | E16 | 0 | 1.788220e-05 | -2.795190e-08 | 5.071300e-11 | -4.653430e-14 | +1.320484 mm |
| 34A | E18 | 0 | 1.556930e-05 | -2.743860e-08 | 5.954060e-11 | -5.110490e-14 | +1.062678 mm |
| 35A | E18 | 0 | -6.906780e-06 | -7.756370e-10 | 3.273990e-12 | -1.997280e-14 | -0.687305 mm |

\* The patent Table 4 cell for surface 16 A10 is blank. The raw evidence preserves the blank; the implemented polynomial treats the omitted term as numerical zero. This is an interpretation of an absent coefficient, not a source correction.

The verified departures are evaluated at the patent-derived effective-aperture radii used as authored semi-diameters. The paired E4 surfaces have opposite-sign polynomial departures at their rims (+0.297 mm at 7A and −0.569 mm at 8A); E8 likewise has −0.352 mm at 15A and +0.235 mm at 16A. The single E16 asphere reaches +1.320 mm at 31A. E18’s two aspheres reach +1.063 mm at 34A and −0.687 mm at 35A. These statements describe surface geometry only; they do not assign a specific aberration contribution that the patent does not explicitly state.

All seven conic domains remain valid at their authored semi-diameters. Surface 8A is the only Example 1 asphere with nonzero conic constant (K = 1.31207); the other six use K = 0 with polynomial departures from the spherical-conic base.

## Conditional Expressions

The patent defines six conditions and publishes the Example 1 parameters in Tables 31–32. The final verifier recomputes each condition using final-data quantities where the condition depends on optical power or back focus, while preserving source-only spectral and field parameters where appropriate.

| Condition | Example 1 evaluated value | Required range | Result |
|---|---:|---|---|
| (1) $f_{N1w}/f_{P2}$ | −0.607645 | < −0.5 | satisfied |
| (2) $N_{dP3p}$ | 1.76 | 1.72 < x < 1.84 | satisfied |
| (3) $\nu_{dP3p}$ | 48.49 | 43 < x < 57 | satisfied |
| (4) $\theta_{gF,P3p}+0.001625\nu_{dP3p}$ | 0.637796 | 0.635 < x < 0.660 | satisfied |
| (5) $T\omega/TFno$ | 3.987379 | 3.0 < x < 4.7 | satisfied |
| (6) $BF/f_T$ | 0.106585 | < 0.18 | satisfied |

Condition (5) requires a source-discrepancy note. Table 31 prints $T\omega=8.214°$, while Table 2 gives a Tele full field of 16.91°, whose simple half is 8.455°. The analysis preserves both source values and uses Table 31 for condition (5), because Table 31 is the condition-parameter table. Using 8.455° instead would give approximately 4.10437, which also lies inside the patent inequality; the discrepancy is therefore not hidden or “repaired.”

## Verification Summary

The final data file is unscaled and reproduces the selected Example 1 prescription directly after excluding the non-refracting OBJ row and treating IMG as the image plane after surface 37. Blank post-glass medium cells are interpreted as air, as required by the source-table convention. No cover/filter plate appears in Example 1 Table 1, so no rear plate is omitted and no air-equivalent back-spacing conversion is required.

The independently recomputed infinity-state effective focal lengths from the final data are 51.490659 mm, 88.994139 mm, and 145.523015 mm, compared with the patent’s 51.50, 88.98, and 145.50 mm. The summed first-vertex-to-image tracks are 210.17, 210.16, and 210.16 mm versus the printed 210.15 mm. At Tele infinity, the computed back focal distance from the last glass vertex is 15.509269 mm versus Table 31’s 15.508 mm. These residuals are consistent with the patent’s rounded radii and spacings.

The Petzval sum, evaluated surface by surface as $\phi/(n n^{\prime})$, is +0.000922042 mm⁻¹. Under the dossier’s sign convention this corresponds to a signed curvature radius of approximately −1084.55 mm. This is a computed property of the final prescription; the patent does not print a Petzval target for comparison.

The physical iris diameter is not separately published. The data uses one fixed modeled stop diameter of 39.833424 mm, obtained by calibration to the three patent f/2.06 infinity states. With that fixed opening, the modeled paraxial f-numbers are 2.054002, 2.067196, and 2.058803 at Wide, Mid, and Tele. Agreement with the f/2.06 target is therefore a calibration result, not independent evidence that the manufactured iris is 39.833424 mm.

Refracting-surface semi-diameters use the patent effective diameters $\phi_i/2$. They are treated as source effective/clear apertures, not as measured manufactured rim diameters. Retaining those source apertures requires a per-lens `gapSagFrac = 0.98`; the most demanding printed geometry is the surface 2→3 air gap, with a verified sag-intrusion fraction of 0.968944 and still-positive rim clearance of 0.004658 mm. Across the tested published and intermediate states, the maximum actual rim-slope angle is 46.4223° and the minimum common-band element edge thickness is 1.64309 mm.

An independent exact meridional spherical/aspherical trace through the final data passes the six defined states and two representative intermediate infinity states under the authored clear apertures. The trace records front-side failure of an extreme off-axis pupil sample as ordinary vignetting rather than a geometry defect; no tested ray showed invalid asphere intersection, total internal reflection, or post-stop clipping. This check is independent of the LensVisualizer production renderer and does not substitute for production render-trim validation.

## Sources / References

1. **WIPO / PCT, WO 2025/220324 A1, “Zoom Lens and Imaging Device.”** Example 1: ¶¶0065–0078; Tables 1–5; Figure 1. Conditional parameters: Tables 31–32. Publication date 23 October 2025. This is the primary source for the prescription, asphere convention, focus/zoom states, and patent conditions.
2. **Sony, FE 50-150mm F2 GM specifications.** Product identity, E mount, full-frame coverage, 17-group/19-element construction, minimum-focus range, 0.2× maximum magnification, internal zoom, and related marketed specifications. [Sony specifications][sony-spec]
3. **Sony, FE 50-150mm F2 GM announcement / release.** Announcement and release timing used in the patent-to-product chronology. [Sony release][sony-release]
4. **OHARA optical-glass catalog.** Used only for coordinate-compatibility review; not as proof of supplier identity. [OHARA][ohara]
5. **HOYA optical-glass data.** Used only for coordinate-compatibility review; not as proof of supplier identity. [HOYA][hoya]
6. **HIKARI optical-glass catalog.** Used only for coordinate-compatibility review; not as proof of supplier identity. [HIKARI][hikari]
7. **SCHOTT Advanced Optics glass search.** Used only for coordinate-compatibility review; not as proof of supplier identity. [SCHOTT][schott]
8. **CDGM optical-glass database.** Used only for coordinate-compatibility review; not as proof of supplier identity. [CDGM][cdgm]
9. **SUMITA optical-glass data.** Used only for coordinate-compatibility review; not as proof of supplier identity. [SUMITA][sumita]

[sony-spec]: https://www.sony.com/ng/electronics/camera-lenses/sel50150gm/specifications
[sony-release]: https://www.sony.jp/CorporateCruise/Press/202504/25-0422/
[ohara]: https://www.ohara-inc.co.jp/en/product/01000/
[hoya]: https://www.hoya-opticalworld.com/english/datadownload/index.html
[hikari]: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
[schott]: https://www.us.schott.com/shop/advanced-optics/en/search/
[cdgm]: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=18&url=database
[sumita]: https://sumita-opt.co.jp/en/download/
