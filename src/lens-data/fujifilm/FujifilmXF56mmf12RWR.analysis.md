# Fujifilm Fujinon XF56mm F1.2 R WR

**Patent:** JP 2023-029039 A  
**Application Number:** 特願2021-135107 (P2021-135107)  
**Filed:** 2021-08-20  
**Published:** 2023-03-03  
**Inventors:** Tanaka Takuya (田中 琢也); Shimada Yasutaka (島田 泰孝)  
**Applicant:** FUJIFILM Corporation (富士フイルム株式会社)  
**Title:** Imaging Lens and Imaging Apparatus (撮像レンズ及び撮像装置)  
**Embodiment analyzed:** Example 2 (実施例2; Tables 4–6; Figure 4)

## Patent Reference and Design Identification

JP 2023-029039 A describes a compact high-speed imaging lens formed from three functional lens groups. The first and second groups have positive refractive power; the third group is allowed to be weakly positive or negative depending on the example. The second group contains the aperture stop and moves during focusing while the first and third groups remain fixed to the image plane. This is the same architectural problem addressed by the production Fujinon XF56mmF1.2 R WR: a fast APS-C portrait lens with internal focusing, close focusing, and stable correction at short distances.

Example 2 is the embodiment transcribed for the data file. The identification is strong but not absolutely unique against Example 1. Both Example 1 and Example 2 are thirteen-element, eight-group, fast APS-C designs with one ED element, two double-sided aspheric elements, an eight-element focus group, and the same general 0.5 m close-focus class. Example 2 is retained here because its 29.06° patent full field lies nearer to FUJIFILM's published 28.5° angle of view than Example 1's 27.78°. The nominal 56 mm focal length sits between Example 1's 57.187 mm and Example 2's 54.453 mm, so focal length alone does not select between the two.

The production-link evidence is as follows.

1. Example 2 has thirteen glass elements in eight air-separated groups. FUJIFILM publishes thirteen elements in eight groups.
2. The patent example has two aspheric elements, L24 and L33, each aspheric on both faces, and one ED element, L22. FUJIFILM publishes two aspherical elements and one ED element.
3. The Example 2 infinity prescription gives f = 54.453 mm, FNo. = 1.24, and 2ω = 29.06°. The production lens is sold as 56 mm f/1.2 with a 28.5° angle of view.
4. The image height from the patent field is f·tan(14.53°) = 14.113 mm, or a 28.23 mm image circle, matching APS-C coverage.
5. The second group and aperture stop move as one unit toward the object for close focus; the first and third groups remain fixed. FUJIFILM describes an updated focusing group containing aspherical and ED elements and gives a minimum focus distance of 0.50 m.

Surfaces 23 and 24 in the patent are the parallel optical member PP, representing a cover glass or filter plate rather than lens power. The data file excludes PP from the surface list and folds its optical path into the final air-equivalent back focal distance: 9.275 + 2.850/1.51680 + 1.013 = 12.167012 mm.

## Optical Architecture

The design is a positive-positive-weak-negative three-group prime. It is not a telephoto design in the strict first-order sense: the total track from the first surface to the paraxial image plane is 90.018 mm, greater than the 54.453 mm focal length. The rear group's negative power is very weak, so it behaves mainly as a field and lateral-color corrector rather than a length-shortening telephoto group.

G1 is a fixed weak positive cemented doublet. Its computed focal length is +244.10 mm. This group preconditions the incoming beam while keeping focus-dependent aberration change low.

G2 is the moving focus group and the optical core of the lens. It contains L21 through L28 plus the aperture stop. Its computed infinity focal length is +60.39 mm. The group has three elements before the stop and five behind it. Positive high-index elements at both ends of G2 reduce ray heights on following elements, while the cemented doublets inside the group handle axial color and spherical-aberration balance.

G3 is the fixed rear corrector. It consists of a positive-negative cemented doublet followed by a weak negative double-aspheric singlet. Its computed focal length is about -19.2 m, effectively near-afocal but still negative in sign. Its chief role is lateral color correction, Petzval reduction, and close-focus field stabilization as G2 changes separation from G3.

## Element-by-Element Analysis

### G1 — L11-L12 cemented front doublet

**L11 — positive, strongly convex to object.** nd = 1.62041, νd = 60.36. Glass: 620/604 dense crown, Hoya BACD16 / Ohara S-BSM16 class. f = +81.6 mm.  
**L12 — negative, near-plano-concave.** nd = 1.85451, νd = 25.15. Glass: Hoya NBFD25. f = -115.0 mm.

The cemented pair has a net focal length of +244.10 mm. Its surface-2 cement radius is very weak (R = -2367.27 mm), so most of the front-group power sits on the outside surfaces. The crown/flint pairing gives a conventional weak achromat ahead of the moving focus group. Keeping G1 weak and fixed is consistent with the patent's stated objective of suppressing performance variation during focusing.

### L21 / Lp1 — high-index positive meniscus

nd = 1.95906, νd = 17.47. Glass: Ohara S-NPH3. f = +54.1 mm.

L21 is the most object-side element of G2 and corresponds to the patent's Lp1. It is a positive meniscus with its concave face toward the image side, matching claim 9. Its unusually high index allows strong positive power without severe surface curvature. This reduces the height of rays entering the rest of the focus group, helping keep the moving group compact.

The glass is very high index and very low Abbe number. It is therefore a dense flint by dispersion behavior, not a crown, even though it carries positive power in this design.

### G2 pre-stop doublet — L22-L23

**L22 — positive ED element.** nd = 1.55032, νd = 75.50. Glass: Hoya FCD705 class ED. f = +46.0 mm.  
**L23 — negative dense flint.** nd = 1.92286, νd = 20.88. Glass: Hoya E-FDS1 / Schott N-SF66 class. f = -21.1 mm.

The L22-L23 cemented pair has a net focal length of -50.40 mm. It is the main axial-color correction structure ahead of the stop. The ED crown supplies high Abbe number and positive anomalous partial dispersion; the high-index, high-dispersion negative element supplies the counter-power needed to achromatize the fast converging beam.

The doublet also helps keep the moving group short. Because this pair is inside the focus group, its chromatic correction moves with the stop and the principal focusing power, reducing the amount of axial color variation across focus.

### Stop

The aperture stop is surface 9 in the patent prescription and is carried inside G2. The data file uses a stop semi-diameter of 11.1204 mm, derived from the patent infinity f-number FNo. = 1.24 and the paraxial entrance-pupil magnification. The corresponding entrance-pupil semi-diameter is f/(2·FNo.) = 21.9567 mm.

### L24 — weak double-aspheric post-stop corrector

nd = 1.58254, νd = 59.44. Glass: 582/594 moldable crown, Hoya M-BACD12 class inferred. f = +131.6 mm.

L24 is a low-power positive meniscus immediately behind the stop. Both surfaces are aspheric. Because its first-order power is modest, its main function is not focal power but correction: it shapes the wide-aperture beam after the stop, chiefly for spherical aberration and coma.

The material assignment is deliberately stated as class-level. The nd/νd coordinates fit a moldable crown family, but the exact catalog identity is not named in the patent.

### G2 post-stop doublet — L25-L26

**L25 — biconcave negative.** nd = 1.78472, νd = 25.72. Glass: Ohara S-TIH11 / Hoya FD110 class. f = -18.9 mm.  
**L26 — biconvex positive.** nd = 1.81600, νd = 46.56. Glass: Ohara S-LAH59 / Hoya TAF5 class. f = +23.3 mm.

The cemented pair has a net focal length of -119.57 mm. It contributes a weak negative correction just behind the aspheric L24. The pairing of a dense flint with a higher-Abbe lanthanum glass gives another chromatic and spherical-aberration balancing stage within the moving unit.

### G2 rear doublet — L27-L28 / Ln2-Lp2

**L27 / Ln2 — biconcave negative.** nd = 1.61340, νd = 44.17. Glass: Ohara S-NBM51 / CDGM H-TF3L class. f = -40.3 mm.  
**L28 / Lp2 — biconvex positive.** nd = 2.05090, νd = 26.94. Glass: Hoya TAFD65. f = +23.5 mm.

This cemented pair is net positive, f = +51.62 mm, and forms the image-side end of G2. It corresponds to the patent's Ln2-Lp2 doublet in claim 6. L28 is the highest-index element in the example. The large index difference between L27 and L28 is not incidental; it is one of the explicitly controlled quantities in the patent's conditional expressions.

The pair completes the moving focus group with a strong positive terminal element. This lowers oblique ray heights entering G3, which helps keep the fixed rear correction group small.

### G3 front doublet — L31-L32

**L31 — biconvex positive.** nd = 2.00100, νd = 29.12. Glass: Hoya TAFD55 / Ohara S-LAH99 class. f = +19.3 mm.  
**L32 — biconcave negative.** nd = 1.78880, νd = 28.43. Glass: Ohara S-NBH58 class. f = -20.4 mm.

The L31-L32 cemented pair has a weak net positive focal length of +189.03 mm. It sits in a high oblique-ray-height region at the front of G3, making it an efficient lateral-color correction stage. The patent describes this rear cemented doublet as part of a compact third group that corrects off-axis aberrations while remaining fixed during focus.

### L33 — rear double-aspheric negative field corrector

nd = 1.68863, νd = 31.19. Glass: 689/312 flint, E-FD8 / J-SF8 class inferred. f = -173.5 mm.

L33 is a weak negative meniscus with an object-side concave front surface and an almost plane rear surface. Both faces are aspheric. Its negative power reduces the Petzval sum, while its rear position gives the aspheric departures leverage over field curvature, distortion, and off-axis aberrations near the sensor.

The exact glass identity is again treated as inferred. The patent supplies nd, νd, and θgF, but does not name the melt.

## Glass Identification

Glass names were assigned by matching the patent nd/νd coordinates, with θgF used as an independent cross-check where catalog line data were available. Exact catalog identities are used only where the match is tight and supported by known vendor data; otherwise the data file uses class-level language.

| Element | nd | νd | θgF (patent) | Identification | Confidence | Role |
|---|---:|---:|---:|---|---|---|
| L11 | 1.62041 | 60.36 | 0.54 | BACD16 / S-BSM16 class | class | front crown |
| L12 | 1.85451 | 25.15 | 0.61 | Hoya NBFD25 | probable | front flint |
| L21 | 1.95906 | 17.47 | 0.66 | Ohara S-NPH3 | probable | high-index positive Lp1 |
| L22 | 1.55032 | 75.50 | 0.54 | Hoya FCD705 class | probable | ED element |
| L23 | 1.92286 | 20.88 | 0.64 | Hoya E-FDS1 / N-SF66 class | probable/class | dense flint |
| L24 | 1.58254 | 59.44 | 0.54 | M-BACD12-class moldable crown | inferred | aspheric corrector |
| L25 | 1.78472 | 25.72 | 0.62 | S-TIH11 / FD110 class | class | post-stop flint |
| L26 | 1.81600 | 46.56 | 0.56 | S-LAH59 / TAF5 class | class | lanthanum positive |
| L27 | 1.61340 | 44.17 | 0.56 | S-NBM51 / H-TF3L class | class | rear-G2 negative |
| L28 | 2.05090 | 26.94 | 0.61 | Hoya TAFD65 | probable | high-index Lp2 |
| L31 | 2.00100 | 29.12 | 0.60 | TAFD55 / S-LAH99 class | class | rear positive |
| L32 | 1.78880 | 28.43 | 0.60 | Ohara S-NBH58 class | probable | rear flint |
| L33 | 1.68863 | 31.19 | 0.60 | E-FD8 / J-SF8 class | inferred | rear aspheric flint |

The design is dominated by dense flints and dense lanthanum-type positive glasses. L22 is the only ED element. The lens is therefore best described as a strongly corrected achromatic design with anomalous-dispersion assistance, not as an apochromatic design. The patent makes no apochromatic claim.

## Focus Mechanism

The focus mechanism is internal unit focusing of G2. During focus from infinity toward the close state, G2 and the aperture stop move objectward while G1 and G3 remain fixed to the image plane. The two variable spacings maintain a constant sum, confirming rigid-body translation of the focus group.

| State | DD[3] G1-G2 | DD[17] G2-G3 | Sum | f | FNo. | 2ω |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | 17.100 mm | 1.657 mm | 18.757 mm | 54.453 mm | 1.24 | 29.06° |
| Patent close table | 9.855 mm | 8.902 mm | 18.757 mm | 52.909 mm | 1.50 | 25.82° |

The change from infinity to the patent close table is 7.245 mm of objectward G2 travel. Independent finite-conjugate tracing shows that this tabulated close state focuses an object 499.98 mm in front of the first surface. Since the optical distance from the first surface to the image plane is 90.018 mm, the object-to-sensor distance is about 590.00 mm and the paraxial magnification is |β| = 0.111×.

FUJIFILM publishes the production minimum focus distance as 0.50 m measured from the focal plane and maximum magnification as 0.14×. Holding the patent's G2 unit-focus constraint and extrapolating the spacing pair to a 0.50 m object-to-sensor distance gives DD[3] = 8.246 mm, DD[17] = 10.511 mm, and |β| = 0.137×, which rounds to the published 0.14×. The data file retains the patent-published Table 5 focus-variable pair for transcription fidelity and stores the official 0.50 m minimum focus distance as product metadata.

## Aspherical Surfaces

The four aspherical surfaces are surfaces 10 and 11 on L24 and surfaces 21 and 22 on L33. In the data file these are labeled 10A, 11A, 21A, and 22A. The patent's aspheric equation uses KA in the square-root term. For this patent convention, KA = 1.0000000 corresponds to the standard conic constant K = 0, so the conic base is spherical and all departure is carried by the even-order polynomial terms.

| Coefficient | S10 / 10A | S11 / 11A | S21 / 21A | S22 / 22A |
|---|---:|---:|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 | 1.0000000E+00 | 1.0000000E+00 |
| A4 | -1.6629532E-05 | -5.5850107E-06 | -1.0498869E-04 | -9.7239880E-05 |
| A6 | -3.8750119E-08 | -4.4690391E-08 | -3.2481669E-07 | -2.6858552E-07 |
| A8 | 7.7228086E-10 | 1.2037661E-09 | 1.2586842E-08 | 9.8162657E-09 |
| A10 | -2.8769387E-11 | -3.0702606E-11 | -1.8119295E-10 | -9.8726900E-11 |
| A12 | 6.0016164E-13 | 4.7225261E-13 | 1.9233709E-12 | 4.9713577E-13 |
| A14 | -7.2506556E-15 | -4.2946277E-15 | -1.7608027E-14 | -1.4675441E-15 |
| A16 | 5.0113719E-17 | 2.1354594E-17 | 1.2512700E-16 | 8.1775471E-18 |
| A18 | -1.8657069E-19 | -5.0392357E-20 | -5.3225257E-19 | -5.2231708E-20 |
| A20 | 2.8792944E-22 | 3.1595001E-23 | 9.4838616E-22 | 1.1759575E-22 |

The leading A4 term is negative on all four aspheric faces. On L24, the departures operate close to the stop and primarily control spherical aberration and coma in the wide-aperture bundle. On L33, the larger A4 terms act at high off-axis ray height near the rear of the system, where they are effective for field and distortion correction.

At the inferred data-file semi-diameters, the verified aspheric rim slopes are below 29° on all four aspheric surfaces, comfortably below the renderer's slope limit.

## Chromatic Correction Strategy

The chromatic correction is concentrated in the moving group. L22-L23 supplies the main pre-stop ED/flint correction. L25-L26 and L27-L28 continue the correction behind the stop, with L27-L28 explicitly tied to the patent's conditions on Np2 - Nn2 and νn2 - νp2. Because those chromatic correction structures move with G2, they remain aligned with the changing focus power rather than being left behind in a fixed group.

L31-L32 handles lateral color in the fixed rear group. L33 then supplies a weak negative rear correction with aspheric field shaping. This division of work is typical of a modern fast internal-focusing portrait lens: axial color is controlled close to the moving high-power group, while lateral color and field curvature are cleaned up behind it.

## Conditional Expressions

Table 16 of the patent gives twelve condition values for each example. The values below were recomputed directly from the Example 2 prescription.

| # | Condition | Computed | Patent Table 16 | Bound |
|---|---|---:|---:|---|
| 1 | Np12 = (NLp1 + NLp2)/2 | 2.00498 | 2.00498 | 1.94-2.5 |
| 2 | νn, average of G2 negative elements | 30.257 | 30.26 | 28.4-40 |
| 3 | D3/BF | 0.954 | 0.954 | 0.5-1 |
| 4 | νp12 = (νLp1 + νLp2)/2 | 22.205 | 22.21 | 15-30 |
| 5 | D2/D3 | 3.360 | 3.36 | 3-5 |
| 6 | f/f1 | 0.223 | 0.223 | 0.1-0.3 |
| 7 | Np2 - Nn2 | 0.43750 | 0.4375 | 0.3-0.7 |
| 8 | νn2 - νp2 | 17.23 | 17.23 | 5-30 |
| 9 | BF/(f·tanωm) | 0.862 | 0.862 | 0.5-1 |
| 10 | TL²/(f²·tanωm) | 10.545 | 10.544 | 7.1-11 |
| 11 | f1/BF | 20.062 | 20.062 | 20-30 |
| 12 | D12/(f·tanωm) | 1.212 | 1.212 | 1.2-3 |

Condition 10 is interpreted with both TL and f squared. This reading is required to reproduce Table 16: 90.018²/(54.453²·tan14.53°) = 10.545. The unsquared expression would give 6.378 and would miss the stated bound.

## Verification Summary

The prescription was re-run through independent paraxial y-nu and ABCD matrix calculations. The infinity prescription reproduces the patent focal length and back focus after the PP optical member is folded into air-equivalent distance.

| Quantity | Computed | Patent / source | Note |
|---|---:|---:|---|
| EFL at infinity | 54.4525 mm | 54.453 mm | Table 5 |
| Air-equivalent BF | 12.1670 mm | 12.167 mm | Table 5; PP folded out |
| Image height at ω = 14.53° | 14.1128 mm | APS-C class | 28.23 mm image circle |
| f(G1) | +244.10 mm | positive | group sign agrees |
| f(G2) | +60.39 mm | positive | group sign agrees |
| f(G3) | -19228.5 mm | negative | weak near-afocal negative group |
| G2 Table 5 travel | 7.245 mm | DD[3]/DD[17] | objectward G2 motion |
| Patent close table magnification | 0.111× | derived | Table 5 focus state |
| Manufacturer MFD extrapolated magnification | 0.137× | 0.14× | product metadata |
| Petzval sum Σφ/(n·n′) | +0.002566 mm⁻¹ | derived | surface-by-surface calculation |

The data file's clear apertures are inferred because the patent does not publish semi-diameters. The final set was constrained by the production 67 mm filter envelope, marginal/chief ray envelopes, edge thickness, aspheric slope, and cross-gap sag intrusion. The most restrictive clearances are the thin 14-15 and 20-21 air gaps and the L24 rear-to-L25 front gap.

## Sources and References

- JP 2023-029039 A, Imaging Lens and Imaging Apparatus. Primary source for prescription data, focus-group structure, aspheric coefficients, conditional expressions, and group claims. Tables 4-6 and Table 16 are the controlling numerical sources for Example 2.
- FUJIFILM, “FUJINON XF56mmF1.2 R WR” product overview and specifications. Manufacturer source for marketed focal length, aperture, angle of view, lens configuration, ED/aspheric count, aperture blades, minimum focus distance, maximum magnification, filter size, weather resistance, and focusing-group description.
- OHARA, HOYA, Schott, Hikari, CDGM, and Sumita optical-glass catalogs. Sources used for nd/νd and θgF matching; exact vendor names are asserted only where the match is sufficiently tight.
