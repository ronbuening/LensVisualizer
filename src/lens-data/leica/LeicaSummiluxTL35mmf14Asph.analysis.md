# LEICA SUMMILUX-TL 35mm f/1.4 ASPH. — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** EP 3 029 504 A1\
**Application Number:** 15195998.8\
**Priority:** JP 2014244816, 3 December 2014\
**Filed:** 24 November 2015\
**Published:** 8 June 2016\
**Inventor:** Keiko Yamada\
**Applicant:** Konica Minolta, Inc.\
**Title:** *Imaging Optical System, Imaging Optical Device, and Digital Appliance*\
**Embodiment analyzed:** Example 4

The modeled prescription is Example 4 of EP 3 029 504 A1. The patent describes a large-aperture normal lens with three power groups in positive-negative-positive order, with the complete negative second group moving toward the image side for close focus (EP 3 029 504 A1, ¶0008, ¶0012-¶0019, ¶0035-¶0036). Figure 4 on patent page 22 identifies the Example 4 layout as Gr1(+), Gr2(-), and Gr3(+), with Gr1 divided around the aperture stop into Gr1a(-) and Gr1b(+).

The association with the production Leica Summilux-TL 35 mm f/1.4 ASPH. is a strong research correlation rather than a manufacturer-confirmed patent attribution. The main convergent points are:

1. **Topology:** Example 4 contains 12 elements in 8 air-separated groups, and Leica specifies 12 lenses in 8 groups.
2. **Aspheres:** Example 4 has four aspherical surfaces, all on L18 and L21; Leica specifies four aspherical surfaces.
3. **Focal length and aperture:** the patent gives FL = 34.4 mm and FNO = 1.44, while the production lens is sold as 35 mm f/1.4.
4. **Field:** the patent gives 44.8° full field for Example 4, while Leica specifies a 45° diagonal field.
5. **Close focus:** the patent's POS2 geometry corresponds to approximately 0.4008 m from object to image plane, closely matching Leica's 0.4 m minimum focusing distance.
6. **Magnification:** the patent model gives a paraxial POS2 reproduction of approximately 1:9.32; Leica specifies 1:9.4.
7. **Mechanism:** the patent uses a single negative internal focusing group while holding total optical track fixed; Leica describes internal focusing with unchanged overall lens length.
8. **Timing:** the patent priority and filing dates precede the product's 2016 release, and Leica's technical sheet is dated October 2015.

The attribution limit is material. The patent names Konica Minolta, Inc. and Keiko Yamada, whereas Leica's 22 March 2016 press material states that the production lens was designed by Leica optical specialists in Wetzlar. No reviewed primary Leica or Konica Minolta source explicitly identifies EP 3 029 504 A1 or Example 4 as the production prescription. The analysis therefore treats the product match as an inference, not as a documented assignment.

## Optical Architecture

The design is best described by the patent's explicit power structure: a **three-power-group inner-focus normal lens**, rather than by forcing it into a historical eponymous family. From object to image, the system is Gr1 positive, Gr2 negative, and Gr3 positive. The complete first group is itself split by the stop into a weakly negative front subgroup Gr1a and a positive rear subgroup Gr1b (EP 3 029 504 A1, ¶0036, ¶0043-¶0044; Fig. 4).

At the native d-line values in the model, the computed functional-group focal lengths are approximately -829.29 mm for Gr1a, +33.55 mm for Gr1b, +40.82 mm for Gr1 as a whole, -70.83 mm for Gr2, and +45.13 mm for Gr3. Gr1a is therefore nearly afocal in comparison with the other power groups; the principal positive work of the first group resides in Gr1b and in the in-situ interaction of the complete Gr1 stack.

The stop lies between Gr1a and Gr1b. The patent specifically arranges the most image-side surface of Gr1a and the most object-side surface of Gr1b concave toward the stop, an arrangement it associates with coma correction in a large-aperture lens (¶0014, ¶0036). In Example 4 this corresponds to the rear of L15 and the front of L16 facing one another across the stop.

Gr2 is unusually simple mechanically: it is the single negative meniscus L21, with both surfaces aspherical. The first group converges the beam, Gr2 re-diverges it, and Gr3 converges it again. The patent presents this positive-negative-positive arrangement as a way to keep the moving focus group light while maintaining useful ray heights through the focusing section (¶0013).

Gr3 contains a biconvex positive element L31 followed by a cemented positive-negative pair L32/L33. The patent attributes the front positive element to reconverging the off-axis beam emerging from Gr2 and the cemented rear pair to control of chromatic variation during focusing (¶0044, ¶0048).

The model retains 12 physical elements, 8 air-separated groups, and 4 aspherical surfaces. It does not include the patent's rear plane-parallel plate PT, because ¶0036 identifies that plate as equivalent to sensor cover glass and low-pass filtering rather than as part of the lens proper. Its first-order d-line effect is retained through the air-equivalent rear spacing discussed below.

## Element-by-Element Analysis

The focal lengths quoted for individual elements in this section are **standalone-in-air thick-lens values** recomputed from the final d-line prescription. They are not substitutes for cemented-pair power or in-situ group behavior.

### L11 — Positive Meniscus

**nd = 1.83400, νd = 37.35. Glass: NBFD10 class (coordinate-compatible spectral proxy; native d 1.834/37.35; supplier/melt unproven). Standalone f = +1006.922 mm.**

L11 is the foremost element of Gr1a and is a positive meniscus convex to the object side (EP 3 029 504 A1, ¶0043). Its standalone power is weak compared with the rest of the design, consistent with the near-afocal net behavior of Gr1a. The patent does not assign a unique aberration-correction function to L11 individually, so its role is treated here as part of the compound front subgroup rather than as an isolated corrector.

### L12 — Positive Meniscus, Front Component of D1

**nd = 1.92290, νd = 20.88. Glass: PBH21 class (coordinate-compatible spectral proxy; coordinate code 923209; supplier/melt unproven). Standalone f = +53.172 mm.**

L12 is the positive component of the first cemented pair in Gr1a. It is a positive meniscus convex to the object side and is cemented directly to L13 at source surface 4 (¶0043). Its high index and low Abbe number are source coordinates; no supplier or actual melt is established by the patent.

### L13 — Negative Meniscus, Rear Component of D1

**nd = 1.51740, νd = 52.15. Glass: E-CF6 class (coordinate-compatible spectral proxy; coordinate code 517522; supplier/melt unproven). Standalone f = -37.950 mm.**

L13 is the negative rear component of D1 and is concave toward the image side (¶0043). L12 and L13 therefore combine opposite standalone powers at a cemented interface. The analysis does not assign a specific chromatic or monochromatic correction contribution to this pair beyond what the patent states for Gr1a as a whole.

### L14 — Biconvex Positive, Front Component of D2

**nd = 1.83480, νd = 42.72. Glass: TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven). Standalone f = +19.936 mm.**

L14 is the strong positive biconvex component of the second cemented pair in Gr1a (¶0043). It is cemented to L15 at source surface 7. Its large standalone positive power is countered by the negative L15 immediately behind it; the resulting front subgroup remains only weakly negative as a complete in-situ assembly.

### L15 — Biconcave Negative, Rear Component of D2

**nd = 1.75520, νd = 27.53. Glass: E-FD4 class (coordinate-compatible spectral proxy; coordinate code 755275; supplier/melt unproven). Standalone f = -19.139 mm.**

L15 is the biconcave negative rear component of D2 and the final glass element before the aperture stop (¶0043). Its image-side surface is the concave surface that faces the stop from the object-side subgroup, one half of the stop-centered concave-surface arrangement emphasized by the patent (¶0014, ¶0036).

### L16 — Biconcave Negative, Front Component of D3

**nd = 1.68890, νd = 31.16. Glass: E-FD8 class (coordinate-compatible spectral proxy; coordinate code 689312; supplier/melt unproven). Standalone f = -16.394 mm.**

L16 begins Gr1b immediately after the stop. It is the negative front component of cemented pair D3, and its object-side surface is concave toward the stop (¶0043). In the model the cemented interface between L16 and L17 uses a widened modeled semi-diameter at surface 11; that geometry decision is discussed in the verification section and is not a change to the published radius or refractive data.

### L17 — Biconvex Positive, Rear Component of D3

**nd = 1.72920, νd = 54.67. Glass: TAC8 class (coordinate-compatible spectral proxy; coordinate code 729547; supplier/melt unproven). Standalone f = +23.255 mm.**

L17 is the positive rear component of D3. Together L16 and L17 form the cemented front portion of the positive rear subgroup Gr1b. The patent describes Gr1b as a positive subgroup but does not isolate a separate aberration function for L17.

### L18 — Biconvex Positive with Two Aspherical Surfaces

**nd = 1.74320, νd = 49.30. Glass: S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven). Standalone f = +28.999 mm.**

L18 is the final element of Gr1b and carries the aspherical surfaces 13A and 14A. The patent explicitly states that the two-sided aspherical biconvex element in Gr1b is used to correct spherical aberration (¶0024, ¶0047). Because it lies immediately before the variable gap to the focusing element, its contribution is also part of the optical handoff into the moving Gr2 section.

### L21 — Negative Meniscus with Two Aspherical Surfaces; Focus Group Gr2

**nd = 1.74320, νd = 49.30. Glass: S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven). Standalone f = -70.827 mm.**

L21 is the entire second power group and the only element that moves for focus. It is a negative meniscus concave toward the image side, with aspherical surfaces 15A and 16A (¶0044). For close focus the whole element moves toward the image side.

The patent gives a specific rationale for the rear asphere of L21: its negative optical power increases toward larger ray height. As L21 moves toward the image side for close focus, the axial beam diameter at the element decreases, so marginal rays sample less of that increasingly negative peripheral contribution. The patent presents this behavior as a means of reducing focusing-induced variation of spherical aberration (¶0021, ¶0047). This explanation is a source statement, not an inferred decomposition from coefficient signs alone.

### L31 — Biconvex Positive, Front Element of Gr3

**nd = 1.88100, νd = 40.14. Glass: TAFD33 class (coordinate-compatible spectral proxy; coordinate code 881401; supplier/melt unproven). Standalone f = +48.044 mm.**

L31 is the first element of Gr3 and the first positive element encountered after the negative focusing group. The patent states that placing a biconvex positive element at the object side of Gr3 properly reconverges the off-axis beam diverged by Gr2 and contributes to coma correction (¶0044, ¶0048).

### L32 — Biconvex Positive, Front Component of D4

**nd = 1.83480, νd = 42.72. Glass: TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven). Standalone f = +37.695 mm.**

L32 is the positive front component of the final cemented pair. It shares the same native d-line optical coordinate as L14. In the patent's Gr3 architecture, this positive component is immediately followed by the negative L33, producing a strongly opposed-power cemented pair behind L31.

### L33 — Biconcave Negative, Rear Component of D4

**nd = 1.64770, νd = 33.84. Glass: H-ZF1 class (coordinate-compatible spectral proxy; coordinate code 648338; supplier/melt unproven). Standalone f = -34.920 mm.**

L33 is the biconcave negative rear component of D4 and the final glass element of the active lens. The patent states that the cemented element in Gr3 helps reduce variation of chromatic aberration during focusing (¶0044). That source statement is retained without elevating the lens to an APO or anomalous-dispersion classification, because the patent does not publish the line-index or partial-dispersion data needed for such a claim.

## Glass Identification and Selection

The patent publishes only `nd` and `νd` coordinates at the d-line (587.56 nm); it does not name glass suppliers or melt designations (¶0050). Current authoritative catalog sources from OHARA, HIKARI, SCHOTT, CDGM, HOYA, and SUMITA provide coordinate-compatible public rows for the native glass coordinates, but coordinate agreement does not prove which supplier or melt was used. The model stores class/code labels and compatible spectral proxies, including NBFD10 for L11; none establishes production supplier identity.

| Authored glass label | nd | νd | Elements |
|---|---:|---:|---|
| NBFD10 class (coordinate-compatible spectral proxy; native d 1.834/37.35; supplier/melt unproven) | 1.83400 | 37.35 | L11 |
| PBH21 class (coordinate-compatible spectral proxy; coordinate code 923209; supplier/melt unproven) | 1.92290 | 20.88 | L12 |
| E-CF6 class (coordinate-compatible spectral proxy; coordinate code 517522; supplier/melt unproven) | 1.51740 | 52.15 | L13 |
| TAFD5F class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven) | 1.83480 | 42.72 | L14, L32 |
| E-FD4 class (coordinate-compatible spectral proxy; coordinate code 755275; supplier/melt unproven) | 1.75520 | 27.53 | L15 |
| E-FD8 class (coordinate-compatible spectral proxy; coordinate code 689312; supplier/melt unproven) | 1.68890 | 31.16 | L16 |
| TAC8 class (coordinate-compatible spectral proxy; coordinate code 729547; supplier/melt unproven) | 1.72920 | 54.67 | L17 |
| S-LAM60 class (coordinate-compatible spectral proxy; coordinate code 743493; supplier/melt unproven) | 1.74320 | 49.30 | L18, L21 |
| TAFD33 class (coordinate-compatible spectral proxy; coordinate code 881401; supplier/melt unproven) | 1.88100 | 40.14 | L31 |
| H-ZF1 class (coordinate-compatible spectral proxy; coordinate code 648338; supplier/melt unproven) | 1.64770 | 33.84 | L33 |

No `nC`, `nF`, `ng`, or `dPgF` fields are stored in the model. Representative catalog line indices can be used to examine the patent's first-order comparison wavelength, but they are not asserted as properties of the unnamed patent melts. Accordingly, this analysis makes no apochromatic or anomalous-partial-dispersion performance claim.

Across D1-D4, each cemented pair combines opposite standalone powers and different `nd`/`νd` coordinates; the ordering of dispersion and index is not the same in every pair. That observation is descriptive of the prescription only. The patent does not identify any one catalog glass as necessary to the design.

## Focus Mechanism

Focus status is **PUBLISHED**. The patent supplies both endpoint spacing states and explicitly identifies the complete negative second group Gr2/L21 as the focusing group (¶0035, ¶0044, ¶0067). No internal reconstruction is required.

| Focus state | Source object distance | D14 after L18 | D16 after L21 |
|---|---:|---:|---:|
| POS1 | Infinity | 2.29 mm | 12.12 mm |
| POS2 | 306 mm from source surface 1 | 9.39 mm | 5.02 mm |

The two variable gaps change by equal and opposite amounts, so L21 moves **7.10 mm imageward** while `D14 + D16` remains **14.41 mm**. A finite-conjugate calculation from the prescription gives **306.528 mm** from source surface 1 for the POS2 image condition, consistent with the patent's 306 mm row at its published precision.

The production lens is specified by Leica for focusing from 0.4 m to infinity and for a maximum reproduction of 1:9.4. The patent's 306 mm object distance plus its 94.8 mm source first-surface-to-image track gives approximately 400.8 mm object-to-image distance, and the verified paraxial POS2 magnification is approximately 1:9.32. These are important parts of the production correlation, but they do not convert that correlation into a documented patent assignment.

Only POS1 and POS2 are source-published focus states. Any interpolation between them in the visualization is a model interpolation, not a claimed published mechanical trajectory.

## Aspherical Surfaces

Example 4 has four aspherical surfaces: 13A and 14A on L18, and 15A and 16A on L21. The patent defines them with the standard rotationally symmetric conic-plus-polynomial form (¶0050):

$$
z(h) = \frac{c h^2}{1 + \sqrt{1-(1+K)c^2h^2}} + \sum_j A_j h^j.
$$

Here `c = 1/R`, `K` is the standard conic constant, and `h` and `z` are in millimeters. No convention conversion is required for LensVisualizer. All four Example 4 surfaces have `K = 0`, so their base conic is spherical. The patent publishes even orders A4 through A12; A12 is zero on all four surfaces. The data file also carries `A14 = 0` as a schema/template completion, not as an additional published nonzero term.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 13A | 0 | -3.216E-06 | -4.801E-09 | +2.164E-11 | +4.021E-14 | 0 |
| 14A | 0 | +6.802E-06 | -8.283E-09 | +3.717E-11 | +8.350E-15 | 0 |
| 15A | 0 | +4.716E-05 | -2.777E-07 | +1.021E-09 | -1.800E-12 | 0 |
| 16A | 0 | +5.477E-05 | -2.745E-07 | +9.612E-10 | -1.649E-12 | 0 |

The computed departures from each spherical base, evaluated only at the modeled semi-diameter for that surface, are:

| Surface | Verified semi-diameter | Aspheric departure | Actual rim slope |
|---|---:|---:|---:|
| 13A | 13.200 mm | -0.096630 mm | 12.418° |
| 14A | 13.323 mm | +0.206358 mm | 20.200° |
| 15A | 11.662 mm | +0.439279 mm | 6.471° |
| 16A | 11.100 mm | +0.492708 mm | 19.866° |

The patent directly associates the two aspheres on L18 with spherical-aberration correction (¶0047). For L21 it particularly emphasizes the image-side asphere, whose increasingly negative peripheral power is used to reduce spherical-aberration variation as the focusing group moves (¶0021, ¶0047). No manufacturing process for these aspheres is asserted here because the cited patent passages do not identify one.

## Conditional Expressions

The patent defines seven conditions for this family (¶0008, ¶0022, ¶0025, ¶0028). Recomputing the Example 4 Table 1 expressions from the printed Table 1 values gives the following results:

| Condition | Patent range | Example 4 value | Result |
|---|---|---:|---|
| (1) `FL / 1aGr_Fl` | -0.3 < value < 0.03 | -0.04018 | within range |
| (2) `1bGr_Fl / FL` | 0.85 < value < 1.1 | 0.97355 | within range |
| (3) `|2Gr_Fl / FL|` | 1.5 < value < 2.5 | 2.04913 | within range |
| (4) `|3Gr_Fl / 2Gr_Fl|` | 0.55 < value < 0.70 | 0.63711 | within range |
| (5) `1aGr_obj / 1aGr_img` | 1.1 < value < 1.5 | 1.22840 | within range |
| (6) `3Gr_F_Rad / FL` | 2.5 < value < 10 | 5.94099 | within range |
| (7) `2ω` | 40° < value < 50° | 44.86° | within range |

The patent explains these as design-space controls on focus-induced aberration variation, coma, field curvature, group power, and normal-lens field coverage (¶0015-¶0018, ¶0023, ¶0026, ¶0029). Those explanations are source claims; satisfying the inequalities does not by itself constitute an independent image-quality measurement.

A source-convention limitation remains. The construction table explicitly identifies `nd` as d-line data, but the wavelength used for the printed FL/FNO/Table 1 first-order quantities is not stated. A representative catalog-based e-line replay reproduces the whole-system focal length, Gr1b, Gr1, Gr2, Gr3, beam radii, and FNO more closely than a direct d-line replay. The near-afocal Gr1a value remains sensitive to unpublished line indices and higher-precision prescription values and does not reproduce the printed -856.14 mm exactly. The model nevertheless retains the patent's native d-line prescription; no Table 1 value is substituted into the prescription.

## Verification Summary

At POS1 the native d-line effective focal length is **34.428812 mm**, while the marketed focal length remains 35 mm. The exact non-paraxial axial marginal ray through the patent-published 9.845 mm stop radius gives a modeled wide-open value of **f/1.445594**; the product marketing value is f/1.4 and the patent prints FNO 1.44.

The patent's rear PT plate is omitted from the LensVisualizer prescription because the patent identifies it as the sensor-cover/low-pass equivalent (¶0036). Its d-line first-order effect is preserved by replacing the source rear train after surface 21 with **19.918924 mm** of air-equivalent spacing. The normalized first-surface-to-image track is therefore **94.248924 mm**, rather than the patent's physical 94.8 mm track that includes the plate. The raw and normalized d-line first-order matrices agree to numerical precision at both published focus endpoints.

One semi-diameter is a modeling inference rather than a direct transcription. The patent gives source surface 11 an effective radius of **11.836 mm**. Exact off-axis stress tracing of the final model showed that using 11.836 mm as the modeled semi-diameter caused rays to be clipped at the internal cemented L16/L17 interface. The model keeps the published 11.836 mm value as a source record but uses **sd = 12.700 mm** at surface 11. The change removes cemented-interface clipping in the tested POS1, midpoint, and POS2 field/pupil samples while retaining positive edge thickness and acceptable rim/gap geometry. It is not a claim about the production barrel or a measured mechanical clear aperture.

Across the verified focus states and midpoint stress state, the minimum computed element edge thickness is **1.738684 mm**, the maximum actual rim-slope angle is **40.641°**, and the maximum shared-band cross-gap intrusion fraction is **0.5344**, below the current 0.90 model limit. The exact sampled off-axis verification found no cemented-interface clipping after the surface-11 correction. These are model-geometry checks, not production mechanical measurements.

The surface-by-surface d-line Petzval sum, computed as `Σ φ/(n n′)`, is **0.003010623 mm⁻¹**. The design is not described as telephoto or retrofocus under the project's quantitative definitions: the verified source `TL/EFL` ratio is about 2.75, while the active-lens `BFD/EFL` ratio is about 0.58.

No uniform scaling was applied. All modeled radii, spacings, semi-diameters, and asphere coefficients therefore remain on the patent's native millimeter scale, apart from the disclosed rear reference-plane normalization and the single surface-11 modeled semi-diameter override.

## Sources and References

1. **European Patent Office.** EP 3 029 504 A1, *Imaging Optical System, Imaging Optical Device, and Digital Appliance*, published 8 June 2016. Principal passages used here: ¶0008, ¶0012-¶0029, ¶0035-¶0038, ¶0043-¶0055; Example 4 surface/asphere/miscellaneous data at ¶0065-¶0067; Table 1 on patent page 16; Figure 4 on patent page 22; Example 4 aberration plots in Figure 9 on patent page 27.
2. **Leica Camera AG.** *LEICA SUMMILUX-TL 35 mm f/1.4 ASPH. Technical Data*, “As at October 2015.” https://leica-camera.com/sites/default/files/pm-55632-Datenblatt_Summilux-TL%2035_e.pdf
3. **Leica Camera AG.** *LEICA SUMMILUX-TL 35 mm f/1.4 ASPH. — the new reference lens in the APS-C segment is available from today*, press information, 22 March 2016. https://leica-camera.com/sites/default/files/downloads/131544/Press%20Information_Leica%20Summilux%20TL_35mm%20ASPH.pdf
4. **OHARA.** Optical-glass tables and 2023 pocket catalog. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
5. **HIKARI GLASS / Nikon.** *OPTICAL GLASS J-series catalog 2023*. https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
6. **SCHOTT Advanced Optics.** *Optical Glass 2025*. https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
7. **CDGM Glass Co., Ltd.** Optical glass database. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
8. **HOYA GROUP Optics Division.** Glass polished-lens and cross-reference resources. https://www.hoya-opticalworld.com/english/products/kenma.html
9. **SUMITA OPTICAL GLASS, Inc.** Optical Glass Data downloads, catalog version 14.02.00. https://www.sumita-opt.co.jp/en/download/

### Catalog proxy labels

The viewer names the compatible catalog curve explicitly while retaining the original coordinate code and the supplier/melt qualification. The selected curves are unchanged: L12 → PBH21, L13 → E-CF6, L14 → TAFD5F, L15 → E-FD4, L16 → E-FD8, L17 → TAC8, L18 → S-LAM60, L21 → S-LAM60, L31 → TAFD33, L32 → TAFD5F, L33 → H-ZF1. These labels identify spectral proxies, not production glass suppliers.
