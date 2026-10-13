# FUJIFILM FUJINON XC 15-45mm f/3.5-5.6 OIS PZ — Patent Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2021-15312 A\
**Application Number:** JP 2020-191852\
**Priority:** 2017-08-24, through divisional origin JP 2017-161263\
**Filed:** 2020-11-18\
**Published:** 2021-02-12\
**Inventor:** Ryosuke Nagami (永見 亮介)\
**Applicant:** Fujifilm Corporation\
**Title:** ズームレンズおよび撮像装置 (“Zoom lens and imaging apparatus”)\
**Embodiment analyzed:** Example 3 (実施例3)

The prescription represented here is Example 3 of JP 2021-15312 A, using the lens data in Table 9, system data in Table 10, variable spacings in Table 11, and aspherical coefficients in Table 12. The patent identifies the design as a four-functional-group zoom with negative, positive, negative, and positive group powers; G3 is the sole focusing group and G4 is fixed during zoom for Example 3 by reference to the Example 1 group-motion scheme. The rendered section in Figure 3 shows the same G1–G4 labels, the stop in G2, the single-lens OIS member, the single-lens focus group, and the optional rear plane-parallel member PP. (JP 2021-15312 A, ¶0028–¶0030, ¶0055, ¶0072–¶0077; Fig. 3; Tables 9–12.)

The production-lens identification is a strong correlation rather than a manufacturer-confirmed patent attribution. The evidence is convergent:

1. FUJIFILM specifies the production XC15-45mmF3.5-5.6 OIS PZ as 10 elements in 9 groups; Example 3 likewise contains 10 powered elements, with one cemented pair and therefore 9 physical air-separated groups.
2. FUJIFILM specifies three aspherical elements. Example 3 has three physical elements carrying aspherical surfaces: L1b, L2d, and L3a.
3. Example 3 places a single-lens OIS member in G2 and uses a single negative lens as the internal focusing group G3. FUJIFILM describes the production lens as optically stabilized and internally focused with a stepping-motor focus drive.
4. The verified infinity design endpoints are 15.32595 mm at f/3.58 and 43.73380 mm at f/5.76, close to the marketed 15–45 mm f/3.5–5.6 range.
5. The 2017-08-24 priority date precedes the FUJIFILM Japan product release date of 2018-03-15.

The correlation is not exact in every published field quantity. Example 3 gives a 92.4° full field at the wide state and 34.6° at tele, whereas FUJIFILM gives approximately 86.9° and 35.0° for the marketed lens. The patent also publishes a finite-focus state at an object distance of 1 m from the image plane, while the production lens is specified to focus substantially closer. These differences are retained rather than reconciled away. (JP 2021-15312 A, Table 10; FUJIFILM XC15-45 owner’s manual and product specifications.)

The source PP plate is traced through `rearPlates` and omitted only from the drawing and element count. Tables 9 and 11 give 7.33 mm of air, 2.85 mm of glass (nd=1.51633, vd=64.14), then 2.41 mm of air. The physical image-plane position includes that plate; the paraxial equivalent remains 11.6195380953 mm.

## Optical Architecture

Example 3 is a four-functional-group negative-positive-negative-positive zoom. This description is preferable to assigning a historical named design family: the verified wide-state back focal distance is shorter than the effective focal length, so the project’s strict criterion for calling the design “retrofocus” is not met.

The four functional groups are:

- **G1 (negative):** L1a–L1c, three elements. Its isolated first-order EFL is −25.06097 mm.
- **G2 (positive):** L2a–L2e plus the aperture stop, five elements with the cemented L2b+L2c pair. Its isolated first-order EFL is +19.81355 mm.
- **G3 (negative):** the single aspherical element L3a. Its isolated EFL is −38.43343 mm, and it is the sole focusing group.
- **G4 (positive):** the single rear element L4a. Its isolated EFL is +54.36947 mm and it remains fixed during zoom in Example 3.

Those are isolated group powers computed from the final prescription; they are not a claim that each group retains the same effective contribution when embedded in the complete zoom system.

The aperture stop lies within G2 between L2a and the cemented L2b+L2c pair. The patent specifically favors a positive lens immediately object-side of the stop and a positive/negative cemented pair immediately image-side of it. It associates the stop-adjacent arrangement with compactness and the cemented pair with longitudinal chromatic correction. (JP 2021-15312 A, ¶0045–¶0048.)

Zooming moves G1, G2, and G3 while G4 remains fixed. Relative to the front vertex of G4 at infinity, the verified front-vertex positions are:

| Functional group | Wide (mm) | Mid (mm) | Tele (mm) |
|---|---:|---:|---:|
| G1 | −63.75 | −58.56 | −60.65 |
| G2 | −26.59 | −35.71 | −47.72 |
| G3 | −7.88 | −14.05 | −19.00 |
| G4 | 0.00 | 0.00 | 0.00 |

G1 therefore reverses direction between the middle and tele positions: it first moves imageward from wide to middle and then moves objectward from middle to tele. G2 and G3 move monotonically objectward over the three published infinity stations. These motions come from the final `var` spacings, not from a schematic reading of Figure 3.

The data file reports 10 physical elements and 9 physical air-separated groups. That count is distinct from the patent’s four functional zoom groups. The difference is caused by the cemented L2b+L2c pair, which is one physical group containing two glass elements.

## Element-by-Element Analysis

The focal lengths below are standalone first-order element EFLs in air, recomputed from the final prescription. They describe isolated element power and should not be read as the element’s in-situ contribution inside the zoom.

### L1a — Negative Meniscus

**nd = 1.95375, νd = 32.32. Glass: TAFD45-equivalent coordinate class (HOYA; supplier unconfirmed). f = −21.8776 mm.**

L1a is the strongly negative front element of G1. The patent explicitly assigns the first negative element the task of bringing the entrance pupil toward the object side, which supports wide-angle coverage while limiting the diameter demanded of the following groups. That rationale is a patent statement, not an inference from the glass label. (JP 2021-15312 A, ¶0029.)

The catalog match is coordinate-exact for HOYA TAFD45 at the patent’s d-line `nd`/`νd` pair, and the runtime catalog supplies the equivalent dispersion curve. The supplier remains unconfirmed because the patent publishes optical coordinates rather than a melt name.

### L1b — Biconcave Negative, Two Aspherical Surfaces

**nd = 1.53409, νd = 55.89. Glass: Unmatched (nd=1.53409, νd=55.89; 534559 coordinate class). f = −57.6526 mm.**

L1b is the second negative member of G1 and carries the aspherical pair 3A/4A. No defensible exact current-public catalog identity was established for its published d-line coordinate, so the model deliberately leaves it as `Unmatched` rather than assigning a speculative vendor glass.

The patent discusses L1b and L1c as an adjacent negative-positive pair, stating that this arrangement contributes to controlling telephoto-end spherical aberration and to limiting aberration change during zoom. That statement applies to the pair as a subsystem; it does not justify assigning the entire correction to L1b alone. (JP 2021-15312 A, ¶0029.)

### L1c — Positive Meniscus

**nd = 1.94595, νd = 17.98. Glass: FDS18-equivalent coordinate class (HOYA; supplier unconfirmed). f = +46.1508 mm.**

L1c closes G1 with positive power after two negative elements. Its high index and low Abbe number reproduce the patent coordinate exactly with the HOYA FDS18 family, but this remains a coordinate equivalence rather than proof of FUJIFILM’s selected melt.

In the patent’s design rationale, L1c acts together with L1b as the negative-positive rear pair of G1. The verified complete-group EFL remains negative at −25.06097 mm, so L1c moderates rather than overturns the group’s net negative power.

### L2a — Positive Meniscus

**nd = 1.62041, νd = 60.29. Glass: S-BSM16-equivalent coordinate (OHARA; supplier unconfirmed). f = +24.0448 mm.**

L2a is the front positive element of G2 and sits immediately object-side of the aperture stop. The patent favors this arrangement because a positive element ahead of the stop helps reduce the aperture diameter while preserving the G2 movement range used for zooming. (JP 2021-15312 A, ¶0045–¶0046.)

The S-BSM16 coordinate match is exact at the patent d-line pair. The runtime catalog supplies the dispersion curve for this equivalent, but the label does not establish the production supplier.

### L2b — Biconvex Positive, Cemented Pair Front Member

**nd = 1.53775, νd = 74.70. Glass: S-FPM3-equivalent coordinate (OHARA; supplier unconfirmed). f = +15.8917 mm.**

L2b is the positive front member of the only cemented pair in Example 3. The final data preserves the cemented interface directly: the junction carries the downstream L2c index and element identity, with no synthetic cement layer.

### L2c — Biconcave Negative, Cemented Pair Rear Member

**nd = 1.62588, νd = 35.70. Glass: F13 (CDGM) spectral proxy; supplier unspecified. f = −10.6741 mm.**

L2c is the negative rear member of the L2b+L2c cemented pair. Although L2b is strongly positive and L2c strongly negative as standalone elements, the cemented pair has a verified net first-order EFL of −45.63528 mm in air. That cemented net power is distinct from the powers of either element and from the behavior of the pair inside G2.

The patent explicitly uses the Abbe-number difference of this positive/negative cemented pair as condition (8). Here `74.70 − 35.70 = 39.00`, within the claimed 15–60 interval. The patent associates this dispersion contrast with longitudinal chromatic correction in G2. (JP 2021-15312 A, ¶0047–¶0048; Table 21.)

### L2d — Positive Meniscus, Two Aspherical Surfaces

**nd = 1.58313, νd = 59.38. Glass: S-BAL42-equivalent coordinate (OHARA; supplier unconfirmed). f = +107.6261 mm.**

L2d is a comparatively weak positive element in isolated first-order power and carries aspherical surfaces 13A and 14A. The patent does not assign a separate named aberration-control function to L2d, so the analysis does not infer one solely from its shape, glass class, or aspherical status.

The d-line coordinate matches OHARA S-BAL42 exactly. The `S-` prefix is retained deliberately; the low-Tg `L-` family is not treated as interchangeable merely because the nominal coordinate can be similar. The runtime catalog supplies dispersion for the selected equivalent.

### L2e — Biconvex Positive OIS Element

**nd = 1.49700, νd = 81.61. Glass: H-FK61 (CDGM) — coordinate-compatible spectral proxy; supplier unspecified. f = +35.5054 mm.**

L2e is the single positive lens identified with the OIS function in G2. The patent describes stabilization by moving an OIS lens group perpendicular to the optical axis and specifically favors a one-lens OIS group to reduce size and mass. (JP 2021-15312 A, ¶0042–¶0044.)

The high Abbe number is also explicit in patent condition (7), for which Example 3 gives 81.61. The data file names the actual H-FK61 runtime spectral proxy. Its catalog curve supports an inferred APD material tag (project-normal-line ΔPgF ≈ +0.0315); supplier identity remains unspecified. No catalog-derived `dPgF` is authored over the runtime curve.

### L3a — Biconcave Negative Focus Element, Two Aspherical Surfaces

**nd = 1.58313, νd = 59.38. Glass: S-BAL42-equivalent coordinate (OHARA; supplier unconfirmed). f = −38.4334 mm.**

L3a is the complete G3 group and the sole focusing element. The patent makes this single negative lens the only group that moves axially during focus, a choice it associates with a small, light focusing unit and faster focusing response. (JP 2021-15312 A, ¶0030.)

Condition (3) constrains the ratio of wide-end system focal length to G3 focal length. The verified value is −0.39877, within the patent’s −0.6 to −0.15 interval. The patent describes the bounds as a compromise between excessive focus travel when G3 power is too weak and increased focus-dependent aberration change when it is too strong. (JP 2021-15312 A, ¶0031, ¶0034; Table 21.)

### L4a — Biconvex Positive Rear Element

**nd = 1.80400, νd = 46.53. Glass: S-LAH65VS-equivalent coordinate (OHARA; supplier unconfirmed). f = +54.3695 mm.**

L4a is the complete G4 group. Example 3 inherits the fixed-during-zoom G4 behavior from Example 1. The patent states that a positive G4 can balance focus-dependent aberration change with the adjacent negative G3 and that fixing G4 during zoom can also reduce a path for dust ingress. Those are patent design statements rather than production-mechanism measurements. (JP 2021-15312 A, ¶0049–¶0050, ¶0073.)

The S-LAH65VS coordinate match is exact at the patent d-line pair. The runtime catalog supplies dispersion for the selected equivalent, with the supplier still explicitly unconfirmed.

## Glass Identification and Selection

The patent itself publishes d-line refractive indices and Abbe numbers, not glass manufacturer names. The final model therefore uses catalog-coordinate equivalents or classes where a public catalog row reproduces the coordinate, and `Unmatched` where it does not. These labels are compatibility evidence, not melt provenance.

| Elements | Patent nd / νd | Data-file glass label | Spectral support in data |
|---|---:|---|---|
| L1a | 1.95375 / 32.32 | TAFD45-equivalent coordinate class (HOYA; supplier unconfirmed) | runtime catalog curve |
| L1b | 1.53409 / 55.89 | Unmatched (534559 coordinate class) | none beyond nd / νd |
| L1c | 1.94595 / 17.98 | FDS18-equivalent coordinate class (HOYA; supplier unconfirmed) | none stored |
| L2a | 1.62041 / 60.29 | S-BSM16-equivalent coordinate (OHARA; supplier unconfirmed) | runtime catalog curve |
| L2b | 1.53775 / 74.70 | S-FPM3-equivalent coordinate (OHARA; supplier unconfirmed) | runtime catalog curve |
| L2c | 1.62588 / 35.70 | F13 (CDGM) spectral proxy; supplier unspecified | none stored |
| L2d, L3a | 1.58313 / 59.38 | S-BAL42-equivalent coordinate (OHARA; supplier unconfirmed) | runtime catalog curve |
| L2e | 1.49700 / 81.61 | H-FK61 (CDGM) — coordinate-compatible spectral proxy; supplier unspecified | runtime catalog curve |
| L4a | 1.80400 / 46.53 | S-LAH65VS-equivalent coordinate (OHARA; supplier unconfirmed) | runtime catalog curve |

The production specification states that the marketed lens contains two ED elements. That is a manufacturer fact about the finished lens, not a patent statement that identifies which Example 3 elements correspond to those production ED elements. The patent’s strongest directly supported chromatic statements are instead its Abbe-number constraints, particularly the 39.00 Abbe difference across L2b+L2c and the 81.61 Abbe number of the OIS lens.

No `dPgF` value is authored over the runtime catalog curves. L2b and L2e carry inferred APD material tags based on the S-FPM3 and H-FK61 spectral curves (ΔPgF ≈ +0.0212 and +0.0315), not the d-line coordinates alone. This does not establish whole-lens apochromatic performance.

## Focus Mechanism

The focus status is **PUBLISHED**. Example 3 supplies both infinity and finite-focus spacing rows at wide, middle, and tele. The finite condition is explicitly defined by the patent as an object 1 m from the image plane; it is not the production lens’s minimum focusing distance. (JP 2021-15312 A, ¶0059; Tables 10–11.)

Only G3/L3a moves during focus. The published adjacent gaps change in equal and opposite amounts, so the span from G2 to G4 remains constant at each zoom station:

| Zoom state | DD16 infinity (mm) | DD16 at 1 m (mm) | DD18 infinity (mm) | DD18 at 1 m (mm) | G3 imageward shift (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | 2.38 | 2.63 | 7.13 | 6.88 | 0.25 |
| Mid | 5.33 | 5.87 | 13.30 | 12.76 | 0.54 |
| Tele | 12.39 | 13.68 | 18.25 | 16.96 | 1.29 |

The modeled `closeFocusM = 1.0` is therefore a schema endpoint for the published 1 m state only. FUJIFILM’s production specification gives minimum focus distances of 0.13 m at wide and 0.35 m at tele, but the patent does not publish the internal spacings needed to extend Example 3 to those distances. No minimum-focus reconstruction is included.

FUJIFILM describes the production lens as using inner focusing driven by a stepping motor. The patent establishes the optical focusing topology—single-lens G3 motion—but does not by itself establish the production motor implementation.

## Aspherical Surfaces

Example 3 has six aspherical surfaces on three physical elements: 3A and 4A on L1b, 13A and 14A on L2d, and 17A and 18A on L3a. (JP 2021-15312 A, Tables 9 and 12.)

The patent writes the base conic term as

`Zd = C h² / {1 + sqrt(1 − KA C² h²)} + Σ A_m h^m`.

LensVisualizer uses the standard denominator with `(1 + K)`, so the mapping is `K = KA − 1`. Every Example 3 asphere has `KA = 1`, hence every modeled surface has `K = 0`. The patent publishes radial polynomial orders A3 through A20; A3 is zero for all six Example 3 surfaces and is omitted from the data file, while every nonzero A4–A20 term, including odd radial powers, is retained. Because `h` is radial height, the odd powers remain rotationally symmetric.

The coefficients are reproduced below in the final data convention, with `K = 0` for every surface:

```text
3A:
A4=-1.9140163e-5  A5=-2.0582766e-5  A6= 8.7532733e-6  A7=-1.2534038e-6
A8= 4.0773420e-8  A9= 4.0704728e-9  A10=-9.4877383e-13 A11=-1.3786661e-11
A12=-2.3438579e-12 A13= 7.0378998e-14 A14= 4.7956714e-15 A15= 6.5570093e-16
A16=-6.1312681e-17 A17=-3.1119018e-19 A18= 4.4360739e-19 A19= 8.8956009e-21
A20=-2.7150711e-21

4A:
A4=-8.9669372e-5  A5= 1.2120440e-5  A6=-1.2563822e-7  A7=-6.0303929e-8
A8=-2.5960056e-8  A9= 2.0308435e-9  A10= 3.0865462e-10 A11= 2.5785525e-12
A12=-2.7120098e-12 A13=-2.3213883e-13 A14= 5.5221688e-16 A15= 1.5262265e-15
A16= 1.3658555e-16 A17= 6.8029137e-18 A18=-7.0655118e-19 A19=-1.5783086e-19
A20= 8.6449700e-21

13A:
A4=-5.7885505e-5  A5=-4.5028218e-5  A6= 3.0080467e-5  A7=-5.6206804e-6
A8=-3.4363745e-6  A9= 6.7064995e-7  A10= 1.2992400e-7  A11= 5.4385873e-9
A12=-8.1095113e-9  A13=-1.0069337e-9  A14=-1.5186113e-10 A15= 2.7601121e-11
A16= 1.8124262e-11 A17= 6.8738032e-12 A18=-1.1634526e-12 A19=-3.5841100e-13
A20= 5.1481080e-14

14A:
A4= 2.4485462e-4  A5=-1.4110635e-4  A6= 5.6570853e-5  A7=-1.2286182e-5
A8= 3.1442298e-7  A9= 4.9931822e-8  A10=-2.6354143e-8  A11=-4.8123943e-9
A12= 4.7006529e-9  A13= 7.8000672e-10 A14= 2.4725126e-10 A15=-1.1394066e-10
A16=-3.3900876e-11 A17=-3.6498853e-12 A18= 2.0945668e-12 A19= 7.3243178e-13
A20=-1.4616295e-13

17A:
A4= 8.7676592e-4  A5=-1.2912489e-4  A6=-1.1057738e-5  A7= 3.5517914e-6
A8= 3.9148966e-7  A9=-5.1672445e-8  A10=-2.3030362e-8  A11= 8.0622832e-10
A12= 4.6251920e-10 A13=-1.0569499e-11 A14= 4.2888450e-12 A15=-1.9088366e-12
A16= 3.0620564e-13 A17=-3.4565295e-14 A18= 3.2062861e-15 A19=-8.4800996e-16
A20= 8.6893598e-17

18A:
A4= 8.4593296e-4  A5=-1.0174404e-4  A6=-1.0893908e-5  A7= 1.6115318e-6
A8= 3.6642342e-7  A9=-6.6077822e-9  A10= 1.3845027e-9  A11=-2.6787740e-9
A12=-2.5830497e-10 A13= 2.4784233e-11 A14= 1.4336896e-11 A15= 2.0857507e-12
A16=-3.4550528e-13 A17=-5.5890953e-14 A18=-2.8207885e-15 A19= 2.0201792e-15
A20=-1.1386512e-16
```

At the revised model rims, the polynomial departures from the base conic are -0.158771 mm on 3A at 10 mm, -0.460254 mm on 4A at 10 mm, -0.174172 mm on 13A at 4.7 mm, -0.115133 mm on 14A at 4.7 mm, +0.458865 mm on 17A at 6.5 mm, +0.483990 mm on 18A at 6.5 mm. These are computed model-rim quantities, not patent-published apertures.

No manufacturing process for these aspheres is established by the selected patent material, so the analysis does not classify them as molded, polished, or hybrid elements.

## Chromatic Correction Strategy

The patent gives two particularly explicit chromatic constraints in Example 3. First, the cemented L2b+L2c pair uses a 39.00 Abbe-number difference, satisfying condition (8), `15 < Δνcd < 60`. Second, the OIS lens L2e has `νd = 81.61`, satisfying condition (7), `50 < νud < 100`. The patent associates the former with chromatic correction in G2 and the latter with limiting chromatic change during image stabilization. (JP 2021-15312 A, ¶0044, ¶0047–¶0048; Table 21.)

Those source statements do not support an APO designation. The model has catalog C/F/g indices for several coordinate-equivalent glasses, but no authored `dPgF` values and no validated claim that the production lens uses the same supplier melts. The analysis therefore stops at the patent’s achromatizing logic and does not infer secondary-spectrum or anomalous-dispersion performance beyond the available evidence.

## Image Stabilization

The patent places the OIS group inside G2, image-side of the stop, and permits it to move perpendicular to the optical axis. In Example 3 the OIS group is the single positive element L2e. (JP 2021-15312 A, ¶0042–¶0044; Fig. 3.)

Condition (6) compares the tele-end system focal length with the isolated OIS-lens focal length. The final prescription gives `ft/fois = 1.23175`, matching the Table 21 value 1.23 to the source precision and lying within the claimed 0.5–2.0 interval. Condition (7) gives `νud = 81.61` for the OIS lens.

The patent does not publish the lateral OIS decenter used in operation, so no stabilization travel is invented in the data or analysis. FUJIFILM’s production specification separately describes 3.0-stop optical image stabilization; that marketed performance figure is not derived from the patent prescription.

## Conditional Expressions

Example 3 satisfies the patent’s listed conditions. The values below are recomputed from the final prescription where the necessary quantities are independently available; condition (4) remains source-only because the patent does not separately tabulate maximum image height `IH`.

| Condition | Expression | Final-model value | Table 21 | Disposition |
|---|---|---:|---:|---|
| (1) | `Nd1 − 0.0037νd1` | 1.834166 | 1.83 | reproduced |
| (2) | `Nd3 − 0.0037νd3` | 1.879424 | 1.88 | reproduced |
| (3) | `fw / f3` | −0.398766 | −0.40 | reproduced |
| (4) | `Bf / IH` | — | 0.76 | source-only; `IH` not separately published |
| (5) | `Bf / f4` | 0.213708 | 0.21 | reproduced |
| (6) | `ft / fois` | 1.231750 | 1.23 | reproduced |
| (7) | `νud` | 81.61 | 81.61 | reproduced |
| (8) | `Δνcd` | 39.00 | 39.00 | reproduced |

The governing base bounds are `1.7 < (1) < 2.0`, `1.8 < (2) < 2.0`, `−0.6 < (3) < −0.15`, `0.6 < (4) < 1.2`, `0.15 < (5) < 0.35`, `0.5 < (6) < 2.0`, `50 < (7) < 100`, and `15 < (8) < 60`. (JP 2021-15312 A, ¶0031–¶0048; Table 21.)

## Verification Summary

The final data revision was checked by two independent first-order formulations: a sequential height/reduced-angle trace and an ABCD matrix trace. They agree to numerical precision for all six published zoom/focus states.

| Focus state | Wide EFL (mm) | Mid EFL (mm) | Tele EFL (mm) |
|---|---:|---:|---:|
| Infinity | 15.325953 | 25.775592 | 43.733799 |
| Patent 1 m state | 15.254476 | 25.565195 | 43.051237 |

At infinity the calculated back focal lengths from the last powered vertex are 11.619189 mm, 11.623048 mm, and 11.633187 mm for wide, middle, and tele. The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)` at each powered refracting surface, is +0.0037259278 mm⁻¹.

The source PP plate is traced through `rearPlates` and omitted only from the drawing and element count. Tables 9 and 11 give 7.33 mm of air, 2.85 mm of glass (nd=1.51633, vd=64.14), then 2.41 mm of air. The physical image-plane position includes that plate; the paraxial equivalent remains 11.6195380953 mm.

The patent publishes neither lens semi-diameters nor a physical stop diameter. Figure 3 supports larger lens rims than the initial sampled-ray envelope; the revised estimates exclude rays and leader lines. The front-group rear rim and focusing asphere are capped by gap clearance and slope constraints. The stop remains calibrated to the published f-number, not independently measured.

## Sources and References

**Primary patent**

- Japan Patent Office, **JP 2021-15312 A**, *ズームレンズおよび撮像装置* (“Zoom lens and imaging apparatus”), published 2021-02-12. Example 3: ¶0072–¶0077, Tables 9–12; design rationale: ¶0027–¶0052; conditions: Table 21; optical section: Figure 3 on PDF page 29.

**FUJIFILM production-lens sources**

- FUJIFILM, *XC15-45mmF3.5-5.6 OIS PZ Owner’s Manual — Specifications*: https://dl.fujifilm-x.com/support/manual/lenses/lens_xc15-45_manual_01.pdf
- FUJIFILM, *FUJINON XC15-45mmF3.5-5.6 OIS PZ* product page: https://www.fujifilm-x.com/en-gb/products/lenses/xc15-45mmf35-56-ois-pz/
- FUJIFILM Japan, product listing: https://mall-jp.fujifilm.com/shop/g/g16565818/

**Glass-coordinate references used for the data-file equivalence labels**

- HOYA, TAFD45 data sheet: https://www.hoya-opticalworld.com/english/pdf/TAFD45_120524.pdf
- HOYA, FDS18/FDS18-W catalog information: https://www.hoya-opticalworld.com/japanese/news/index.html
- OHARA, S-BSM glass types: https://oharacorp.com/glass-type/s-bsm/
- OHARA, S-FPM / S-BAL glass types: https://oharacorp.com/glass-type/s-fpm-s-bal/
- OHARA, S-LAH glass types: https://oharacorp.com/glass-type/optical-glass/s-lah/
- CDGM, F13 optical-glass database entry: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=15&url=database
- CDGM H-FK61 vendor catalog curve, mirrored at https://refractiveindex.info/database/data/specs/cdgm/optical/H-FK61.yml
