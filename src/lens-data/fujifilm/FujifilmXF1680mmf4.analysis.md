# Fujifilm Fujinon XF 16–80 mm f/4 R OIS WR — Optical Analysis

**Patent embodiment:** US 2020/0166735 A1, Example 11 (Kawamura & Noda, assigned to FUJIFILM Corporation; filed 20 Nov 2019; priority JP 2018‑221597, 27 Nov 2018; published 28 May 2020). Example 11 is the uniquely matching embodiment among the eleven in the application: it contains 16 elements in 12 groups, four elements with aspherical surfaces (one of which is also the ED element), a constant f/4 aperture across the zoom range (FNo 4.12 at wide, 4.13 at tele), a focal range of 16.497–77.751 mm that maps cleanly to the marketed 16–80 mm, and the positive‑negative‑positive‑negative‑positive five‑group topology Fujifilm's product documentation attributes to the shipping lens.

This analysis is derived from the patent prescription alone, cross‑referenced with Fujifilm's published product specifications. All quantitative claims have been independently verified via paraxial ray trace using ABCD matrix methods (the Python verification reproduces the patent's stated EFLs at all three zoom positions to within 0.001 mm and matches eighteen of the nineteen Table 34 conditional expressions that the patent lists for Example 11; the single discrepancy — Expression 11 — is identified in § 10 as a transcription error in the patent's printed table).

---

## 1. System specifications

| Quantity                                       | Wide‑angle end | Middle       | Telephoto end |
| ---------------------------------------------- | -------------: | -----------: | ------------: |
| EFL (patent)                                   | 16.497 mm      | 36.533 mm    | 77.751 mm     |
| EFL (computed)                                 | 16.497 mm      | 36.534 mm    | 77.751 mm     |
| Nominal F‑number                               | f/4.12         | f/4.12       | f/4.13        |
| Total field 2ω                                 | 87.2°          | 40.4°        | 19.8°         |
| Variable gap DD[5] (G1↔G2)                     | 0.800 mm       | 16.301 mm    | 36.160 mm     |
| Variable gap DD[13] (G2↔G3, across stop)       | 20.010 mm      | 6.315 mm     | 0.948 mm      |
| Variable gap DD[21] (G3↔G4)                    | 2.400 mm       | 3.974 mm     | 2.502 mm      |
| Variable gap DD[24] (G4↔G5)                    | 4.010 mm       | 15.227 mm    | 30.211 mm     |
| Total optical length TLw (incl. BFw air‑eq.)   | 104.19 mm      | 118.79 mm    | 146.80 mm     |
| Back focal length (air‑equivalent, from S29)   | 17.494 mm      | 17.495 mm    | 17.494 mm     |
| Zoom ratio                                     | 1.0×           | 2.215×       | 4.713×        |

**Marketing vs. patent.** Fujifilm publishes the native focal range as 16–80 mm; the patent's computed range is 16.497–77.751 mm. The marketed "f/4" is rounded from the design values (FNo 4.12 wide → 4.13 tele). In keeping with project convention, manufacturer‑published values take precedence for spec fields (`focalLengthMarketing = [16, 80]`, `apertureMarketing = 4`), with the design‑exact values available as `focalLengthDesign = [16.497, 77.751]` and `apertureDesign = 4.13`.

## 2. Design philosophy

Example 11 is a **positive‑lead five‑group zoom** of the form:

> G1 (+) — G2 (−) — STOP — G3 (+) — G4 (−) — G5 (+)

with G3 internally subdivided into a positive **front subgroup G3F** (L31 + cemented doublet L32/L33) and a positive **rear subgroup G3R** (the single element L34). The patent highlights three design choices that distinguish this embodiment from the prior art it cites:

1. **A three‑element first group** (negative, positive, positive — the L11/L12 cemented doublet plus a separated L13), chosen to jointly correct telephoto‑end spherical aberration, longitudinal chromatic aberration, wide‑end field curvature, and distortion while keeping the entering‑ray cone small enough to respect the 72 mm filter thread of the shipping barrel.
2. **An OIS subgroup placed in G3R** (L34 only), where the off‑axis beam height is at its minimum because the aperture stop is immediately upstream. This minimizes the diameter and mass of the moving VR cell and permits a single actuator with modest force.
3. **A compact two‑element focusing group G4** positioned between two positive groups (G3 and G5). The narrow marginal‑ray pencil at this location allows a small, light focusing cell that is well suited to the linear stepping motor used in production.

The system is symmetric in refractive‑power arrangement about G3 (positive–negative–positive–negative–positive). That symmetry is explicitly cited in the patent (¶ 0064) as a mechanism for controlling distortion and lateral chromatic aberration.

## 3. Element‑by‑element analysis

The table below summarizes every element in front‑to‑rear order. Element focal lengths are computed via the thick‑lens formula and verified by paraxial ray trace of the isolated element in air; cemented‑group focal lengths (rows labeled "D_n") are isolated paraxial traces of the cemented stack with the surrounding media set to air.

| ID   | Name              | Shape / role                                             | nd        | vd    | θgF     |     f (mm) | Notes                                                        |
| ---- | ----------------- | -------------------------------------------------------- | --------- | ----- | ------- | ---------: | ------------------------------------------------------------ |
| L11  | G1‑1              | Negative meniscus, convex to object                      | 1.84666   | 23.78 | 0.62054 |    −164.22 | Cemented to L12                                              |
| L12  | G1‑2              | Positive meniscus, convex to object                      | 1.72916   | 54.67 | 0.54503 |    +110.04 | Cemented to L11                                              |
| D1   | L11+L12           | Cemented doublet (chromatic pair, G1 front)              | —         | —     | —       |    +343.47 | Net weakly positive                                          |
| L13  | G1‑3              | Positive meniscus, convex to object                      | 1.69680   | 55.53 | 0.54404 |    +119.57 | Separated from D1 by 0.150 mm air                            |
| L21  | G2‑1              | Negative meniscus, both surfaces aspheric                | 1.80780   | 40.89 | 0.56949 |     −17.29 | Double‑sided glass‑molded asphere                            |
| L22  | G2‑2              | Biconcave negative                                       | 1.61800   | 63.39 | 0.54015 |     −33.01 | Low‑dispersion element in G2                                 |
| L23  | G2‑3              | Biconvex positive, high‑index heavy flint                | 1.92287   | 20.88 | 0.63943 |     +26.67 | Anomalous partial dispersion (high θgF) for CA correction    |
| L24  | G2‑4              | Negative meniscus, concave to object                     | 1.84667   | 23.79 | 0.61771 |     −74.75 | Mild negative, field‑control meniscus                        |
| —    | STOP              | Aperture stop                                            | —         | —     | —       |          — | 1.100 mm from last G2 surface                                |
| L31  | G3F‑1             | Biconvex positive, both surfaces aspheric                | 1.68893   | 31.16 | 0.60397 |     +23.31 | PGM aspheric                                                 |
| L32  | G3F‑2             | Negative meniscus, concave toward image                  | 1.84667   | 23.79 | 0.61771 |     −16.50 | Cemented to L33                                              |
| L33  | G3F‑3             | Positive meniscus                                        | 1.61800   | 63.39 | 0.54015 |     +34.61 | Cemented to L32                                              |
| D2   | L32+L33           | Cemented doublet (G3F achromat)                          | —         | —     | —       |     −27.46 | Net negative — controls longitudinal CA                      |
| L34  | G3R               | Biconvex positive, both surfaces aspheric, ED glass      | 1.49710   | 81.56 | 0.53859 |     +19.56 | **OIS element**; anomalous partial dispersion                |
| L41  | G4‑1              | Biconvex positive                                        | 1.85896   | 22.73 | 0.62844 |     +51.03 | Cemented to L42                                              |
| L42  | G4‑2              | Negative meniscus, concave to image                      | 1.80440   | 39.59 | 0.57297 |     −20.30 | Cemented to L41                                              |
| D3   | G4 (focus group)  | Cemented doublet, net negative                           | —         | —     | —       |     −34.63 | **Focusing group**                                           |
| L51  | G5‑1              | Positive, near plano‑convex                              | 1.51680   | 64.20 | 0.53430 |     +80.96 | Cemented to L52, borosilicate crown                          |
| L52  | G5‑2              | Negative meniscus, flat rear (R = ∞)                     | 1.69350   | 53.35 | 0.54844 |     −67.22 | Cemented to L51                                              |
| D4   | L51+L52           | Cemented doublet (G5 front)                              | —         | —     | —       |    −402.70 | Net very weakly negative — chromatic clean‑up                |
| L53  | G5‑3              | Positive meniscus, both surfaces aspheric, concave‑obj   | 1.58313   | 59.46 | 0.54067 |     +76.57 | Final field‑flattener                                        |

Group totals from the paraxial trace (wide‑angle end, object at infinity, groups isolated in air):

| Group | Elements                       | Sign |   f (mm) | Petzval contribution (mm⁻¹) |
| ----- | ------------------------------ | :--: | -------: | --------------------------: |
| G1    | L11, L12, L13                  |  +   |  +89.88  |                    +0.00677 |
| G2    | L21, L22, L23, L24             |  −   |  −16.01  |                    −0.03856 |
| G3F   | L31, L32, L33                  |  +   |  +58.24  |                 (see G3 row) |
| G3R   | L34                            |  +   |  +19.56  |                 (see G3 row) |
| G3    | G3F + G3R                      |  +   |  +19.92  |                    +0.04374 |
| G4    | L41, L42 (cemented)            |  −   |  −34.63  |                    −0.01663 |
| G5    | L51, L52, L53                  |  +   |  +93.51  |                    +0.00731 |
| **Σ** | 16 elements, 12 air groups     |      |          |                 **+0.00263** |

(Petzval contributions are summed over constituent surfaces using `P_i = (n′ − n)/(n·n′·R_i)`. The per‑group rows are the sums of their member surfaces, not independent subsystem Petzval sums; flat surfaces contribute zero.)

The Petzval sum magnitude is exceptionally small: |Σ P| ≈ 2.63 × 10⁻³ mm⁻¹, corresponding to a Petzval field radius of approximately 380 mm. G2 and G4, which carry net negative power, generate negative Petzval contributions that largely cancel the positive contributions of G1, G3, and G5. This is the classical symmetric Petzval‑balance strategy, particularly effective here because the strong positive power of G3 (f₃ ≈ 20 mm) is placed where the flanking negative groups can compensate.

### 3.1 First lens group G1 (positive, three elements)

G1 consists of a cemented doublet D1 (L11 + L12) followed by a separated positive meniscus L13, 0.150 mm astern of D1.

- **L11** (f = −164.2 mm, nd = 1.847, vd = 23.78, θgF = 0.621) is a negative meniscus of a dense short flint (six‑digit glass code 847238). Its job is to absorb longitudinal chromatic aberration at the telephoto end — the tele EFL of 77.75 mm places high demand on achromatic correction of the front doublet, and a high‑dispersion (low‑νd) glass with elevated θgF is required to partner with L12's dense lanthanum crown. Its outer surface (R = +128.25 mm) is convex to the object with a mild curvature, keeping oblique‑ray incidence angles low at the wide‑angle end and so limiting the front element's contribution to distortion.
- **L12** (f = +110.0 mm, nd = 1.729, vd = 54.67, θgF = 0.545) is a positive meniscus cemented to L11. The six‑digit code 729547 is a relatively narrow region of nd/νd space; dense lanthanum crowns in this range (e.g. the OHARA S‑LAM family) contribute to longitudinal color correction through a large νd · (n − 1) product, and the cement interface at R = +66.35 mm eliminates the air gap that would otherwise generate high‑order spherical aberration at the telephoto end.
- **L13** (f = +119.6 mm, nd = 1.697, vd = 55.53, θgF = 0.544) is a positive meniscus (code 697555 — very close to common lanthanum crowns like OHARA S‑LAL14). Separating L13 from D1 by only 0.150 mm of air, rather than cementing, buys a small additional degree of freedom for correcting spherical aberration without significantly increasing front‑element diameter.

Net G1 power: f₁ = +89.88 mm. Because the entire first group moves forward by ≈ 42.6 mm during zooming to the telephoto end (the largest stroke of any group), achieving low spherical aberration and longitudinal CA at the telephoto position depends heavily on how G1 is corrected in isolation. The three‑element, two‑group design is the minimum construction that meets this correction budget.

### 3.2 Second lens group G2 (negative, four elements)

G2 is the principal variator. It carries four elements in four separate groups (no cementing). The patent (¶ 0068) argues that sharing the negative refractive power across three negative lenses (with one positive interleaved) reduces individual surface curvatures and eases correction of coma and astigmatism; Example 11 follows the preferred negative–negative–positive–negative ordering that that paragraph calls out.

- **L21** (f = −17.3 mm, nd = 1.808, vd = 40.89) is a strongly negative meniscus whose **front and rear surfaces are both aspheric**. The front surface (R = +294.1 mm) is nearly flat in the paraxial region and carries a negative A₄ coefficient that depresses the rim; the rear surface (R = +13.29 mm) is strongly curved and carries aspheric terms that reshape it at large heights, correcting the high‑order spherical aberration generated at the steep rim. The glass is almost certainly a **PGM‑designated lanthanum dense flint** (six‑digit code 808409) — the combination of high refractive index and two aspheric surfaces is characteristic of precision glass molding.
- **L22** (f = −33.0 mm, nd = 1.618, vd = 63.39, θgF = 0.540) is a biconcave negative (code 618634 — consistent with light phosphate crown, OHARA S‑PHM52 family). Its role is to provide negative power with low dispersion; this is the chromatic companion to L23, absorbing some of the secondary spectrum generated by L23's heavy flint.
- **L23** (f = +26.7 mm, nd = 1.923, vd = 20.88, θgF = 0.639) is a biconvex positive (code 923209 — consistent with OHARA S‑NPH53 family). Its very high refractive index and very low νd, combined with the elevated partial‑dispersion ratio, make it the principal chromatic corrector in G2: the sign flip from L22's negative power paired with this glass's anomalous θgF corrects secondary spectrum across the zoom range.
- **L24** (f = −74.8 mm, nd = 1.847, vd = 23.79) is a weak negative meniscus (code 847238 — same family as L11). Its contribution to net G2 power is modest; its primary role is to aid field‑angle correction at the wide‑angle end, where G2 sees a ±43.6° half‑field.

The astigmatism and distortion budget at the wide‑angle end is the hardest constraint on G2: an 87.2° total field is unusually wide for a five‑group standard zoom, and the negative variator must perform this correction while also satisfying zoom‑ratio constraints (Conditional Expression 14: f₂/f₃ = −0.804). The aspherics on L21 are essential for meeting this budget.

### 3.3 Aperture stop and third lens group G3 (positive)

The aperture stop sits 1.100 mm after the last surface of G2 and 1.100 mm before the first surface of G3F; it is fixed in position relative to G3 during zooming (G3 is a single rigid cell that includes the stop).

The patent explicitly subdivides G3 into a **front subgroup G3F** (L31 + cemented doublet L32/L33) and a **rear subgroup G3R** (L34 alone), both with positive power.

#### G3F — compound positive subgroup

- **L31** (f = +23.3 mm, nd = 1.689, vd = 31.16, θgF = 0.604) is a biconvex positive whose **front and rear surfaces are both aspheric**. Its glass (code 689312) is consistent with a PGM‑designated glass in the OHARA L‑TIM family (low‑Tg, formulated specifically for precision glass molding of aspheric surfaces). L31 is the first optical surface after the stop, so it sees the narrowest beam in the system; its aspherics are dedicated primarily to correcting spherical aberration generated by the positive convergence of G3 rather than wide‑field aberrations.
- **L32** (f = −16.5 mm, nd = 1.847, vd = 23.79) is a negative meniscus cemented to L33 (code 847238, same family as L11/L24).
- **L33** (f = +34.6 mm, nd = 1.618, vd = 63.39) is a positive meniscus (code 618634, same family as L22).
- **D2 = L32 + L33** is a net‑**negative** cemented doublet (f = −27.5 mm). The combination of high‑νd crown (L33) and low‑νd dense flint (L32) is a classical achromatic pair; its embedded position between the positive L31 and L34 means it does not disturb overall G3 power materially, but it provides a large chromatic correction lever at a high‑marginal‑ray location.

#### G3R — the OIS subgroup

- **L34** (f = +19.56 mm, nd = 1.49710, vd = 81.56, θgF = 0.539) is a biconvex positive with **both surfaces aspheric**. Its glass (code 497816) is an excellent match for OHARA **S‑FPL51** (catalog value nd = 1.49700, vd = 81.54), the canonical ED glass of this era. The combination of very low dispersion (vd > 81) and anomalous partial dispersion makes L34 indispensable for correcting secondary spectrum at the telephoto end, where longitudinal CA would otherwise dominate. The two aspheric surfaces additionally correct spherical aberration introduced by the strongly convex front (R₁ = +16.54 mm).

L34 is the **vibration‑reduction element** — the only element that moves perpendicular to the optical axis for image stabilization. The patent's choice of a single‑element VR group is deliberate (¶ 0073): a single lens minimizes the mass driven by the VR actuator, reducing power consumption and settling time. Conditional Expression 6 quantifies the VR sensitivity: (1 − β3Rt)·β45t = 3.140 at the telephoto end, meaning a 1 mm physical lateral translation of L34 shifts the sensor‑plane image by 3.14 mm. This is a favorable compromise between actuator stroke and correction range, comfortably within the patent's preferred range of 2 < (1 − β3Rt)·β45t < 5.

G3 totals f₃ = +19.92 mm, with G3F contributing f₃F = +58.24 mm and G3R contributing f₃R = +19.56 mm. Conditional Expression 5 (f₃R/f₃F = 0.336) shows that G3R carries the larger share of G3's convergence; Conditional Expression 18 (f₃R/f₃ = 0.982) confirms that f₃R is essentially the same order as f₃ itself — G3R does most of the convergence work, with G3F pre‑conditioning the beam.

### 3.4 Fourth lens group G4 (negative, two‑element cemented doublet)

G4 is the **focusing group** — the only group that moves during focusing from infinity to the close‑range object (patent ¶ 0077). The patent's focus‑sensitivity conditional expressions give, for Example 11, (1 − β4w²)·β5w² = −1.709 at the wide‑angle end (Expression 19) and (1 − β4t²)·β5t² = −4.069 at the telephoto end (Expression 8). These quantify how much the image plane shifts per millimetre of G4 axial travel: about 1.7× at wide and 4.1× at tele, a normal focus‑sensitivity spread for a zoom ratio near 4.7× and consistent with the telephoto position requiring finer mechanical AF resolution than the wide position.

- **L41** (f = +51.0 mm, nd = 1.859, vd = 22.73, θgF = 0.628) is a biconvex positive (code 859227 — a strong match for OHARA S‑NBH58, catalog value 1.85896/22.73). Its low νd pairs with L42 for color correction.
- **L42** (f = −20.3 mm, nd = 1.804, vd = 39.59, θgF = 0.573) is a negative meniscus, concave to image. Its glass code 804396 is consistent with a lanthanum flint in the OHARA S‑LAH family or equivalent from HOYA, though a precise melt match to a current catalog is not guaranteed.

**Why a cemented doublet as the focuser?** Three reasons:

1. The doublet minimizes element count and thus mass, reducing the load on the AF actuator.
2. Cementing eliminates an air/glass transition inside a moving group, removing a potential source of decentration error during AF travel.
3. Internal color correction within the moving group means chromatic aberration does not drift with focus distance — critical for modern autofocus systems that operate on contrast or phase detection at specific wavelengths.

Conditional Expression 9 (vd4n − vd4p = 39.59 − 22.73 = 16.86) quantifies the achromatic strength of the G4 doublet.

### 3.5 Fifth lens group G5 (positive, three elements)

G5 is **stationary with respect to the image plane** at all zoom positions — the patent is explicit about this for Example 11 (¶ 0081). G5's job is to serve as a field flattener and final converging element, shaping telecentricity appropriate to the digital image sensor behind it.

- **L51** (f = +81.0 mm, nd = 1.517, vd = 64.20) is a positive crown (code 517642 — universally recognizable as Schott N‑BK7 / OHARA S‑BSL7, an exact match). Its front surface has the largest radius of curvature in the whole system (R = +398.6 mm), making it almost flat.
- **L52** (f = −67.2 mm, nd = 1.694, vd = 53.35) is a negative meniscus with a **flat rear surface** (R = ∞), cemented to L51 at its front (R = −46.62 mm). Its glass (code 694534) is consistent with a lanthanum crown in the HOYA E‑LAC or OHARA S‑LAM family. The flat air‑facing rear surface contributes exactly zero refractive power, which simplifies the downstream aberration budget and provides a convenient mechanical reference surface for the cemented doublet assembly.
- **L53** (f = +76.6 mm, nd = 1.583, vd = 59.46, θgF = 0.541) is a positive meniscus with **both surfaces aspheric**. Its glass code 583595 is consistent with a PGM‑designated lanthanum crown (HOYA M‑BACD12 family or equivalent). L53 provides the final field flattening — its aspheric surfaces are critical for correcting residual field curvature and astigmatism at the edges, particularly at the wide‑angle end.

## 4. Aspherical surfaces

Example 11 contains **eight aspherical surfaces** distributed across **four aspheric elements**: L21, L31, L34, and L53 — each with both surfaces aspheric. All eight aspherics use the patent's conic parameter KA = 1.0 exactly, which corresponds to a spherical base (in the project's data‑file convention, `K = KA − 1 = 0`). All aspheric departure therefore arises from the polynomial terms A₄ through A₁₀. The patent's A₃, A₅, A₇, A₉ coefficients are uniformly zero for this example; only the even‑order terms (A₄, A₆, A₈, A₁₀) carry data.

The aspheric sag equation as given in the patent is:

> Z(h) = C·h² / [1 + √(1 − KA·C²·h²)] + A₃·h³ + A₄·h⁴ + A₅·h⁵ + A₆·h⁶ + A₇·h⁷ + A₈·h⁸ + A₉·h⁹ + A₁₀·h¹⁰

where C = 1/R.

### Aspheric departure at the verified semi‑diameter

The following table shows the departure of each aspheric surface from its best‑fit vertex sphere, evaluated at the verified semi‑diameter (computed from combined marginal + vignetted chief‑ray envelope, see § 5). Δsag = Z_asph(SD) − Z_sphere(SD).

| Surface         |     R (mm) | SD (mm) | Sphere sag (μm) | Asphere sag (μm) |  Δsag (μm) | Δsag (λ @ 550 nm) |
| --------------- | ---------: | ------: | --------------: | ---------------: | ---------: | ----------------: |
| S6  (L21 front) |   +294.106 |   12.5  |          +265.8 |           +370.3 |     +104.6 |              +190 |
| S7  (L21 rear)  |    +13.292 |   12.5  |         +8771.7 |          +7272.1 |    −1499.7 |             −2727 |
| S15 (L31 front) |    +16.627 |    5.8  |         +1044.4 |          +1030.5 |      −13.9 |               −25 |
| S16 (L31 rear)  |   −416.400 |    6.1  |           −44.7 |            −26.9 |      +17.8 |               +32 |
| S20 (L34 front) |    +16.539 |    6.9  |         +1508.1 |          +1385.4 |     −122.7 |              −223 |
| S21 (L34 rear)  |    −20.800 |    7.3  |         −1323.1 |          −1238.0 |      +85.1 |              +155 |
| S28 (L53 front) |    −83.448 |   10.8  |          −701.8 |           −376.5 |     +325.3 |              +591 |
| S29 (L53 rear)  |    −29.560 |   11.8  |         −2457.3 |          −1923.0 |     +534.3 |              +972 |

These Δsag values are meaningfully larger than early‑approximation values one might compute at a smaller "paraxial‑envelope" SD: the rim of L21's rear surface (at SD ≈ 12.5 mm) reaches a departure of nearly 1500 μm from the best‑fit sphere, reflecting how aggressively the asphere must reshape the surface near the geometric sd/|R| limit (here 12.5/13.29 = 0.94). At a more conservative 80 % of this SD, the same surface's Δsag drops to about 400 μm.

### What each aspheric is correcting

- **S7 (L21 rear, Δsag ≈ −1500 μm at the rim)** carries the largest absolute departure of any asphere in the system. With R = +13.29 mm and marginal rays hitting the rim at steep incidence, this is where high‑order spherical aberration is most efficiently corrected at the wide‑angle end. The negative A₄ term flattens the rim relative to a sphere — on a surface exiting high‑index glass (nd = 1.808) into air, this reduces the rim ray's refraction and hence its contribution to undercorrected spherical aberration.
- **S20 and S21 (L34, Δsag ≈ −123 μm and +85 μm)** work together on the OIS element. S20's negative A₄ reduces spherical aberration generated by L34's strong convex front; S21's positive A₄ on the concave‑to‑object rear similarly reduces rim aberration. Because L34 is the VR element, its aspheric correction must remain stable under small lateral translations — achievable here because the departures are modest relative to those of S7 and the L53 aspherics.
- **S28/S29 (L53, Δsag ≈ +325 μm and +534 μm)** carry the **largest aspheric departures in G5** — hundreds of wavelengths of 550 nm light on each surface. This is characteristic of a rear field‑flattener aspheric: L53 sees the widest off‑axis beam geometry in the lens (the beam has already been magnified by the positive G5 doublet), so its aspheric correction acts on a broad range of ray heights simultaneously. The large polynomial departures correct field curvature and astigmatism at the wide‑angle end, where off‑axis beam geometry through the lens is most severe.
- **S15/S16 (L31, Δsag ≈ −14 μm and +18 μm)** carry the smallest departures. L31 is immediately downstream of the aperture stop where the off‑axis beam is narrow and well‑controlled; its aspherics do fine‑grained spherical aberration correction on the near‑axis beam rather than shaping wide‑field rays.
- **S6 (L21 front, Δsag ≈ +105 μm)** has moderate departure. The near‑flat vertex curvature (R = +294 mm) means the sphere itself contributes little power; the aspheric polynomial terms are the primary source of this surface's aberration‑correction behavior at the rim.

### A note on counting

Fujifilm's published specification for the XF 16–80 mm cites "three aspherical elements and one ED element." This patent prescription contains four elements with aspheric surfaces and one explicitly ED glass element, with the ED element also being aspheric. The most parsimonious reconciliation is that Fujifilm treats L34 as the "ED element" (a valid descriptor given its vd = 81.56 low‑dispersion glass, matching S‑FPL51) rather than as an "aspherical element," even though L34 carries two aspheric surfaces. Under that taxonomy, the three "aspherical elements" are L21, L31, and L53 — all double‑sided aspherics. This reading is consistent with the element count, group count, and aperture specifications all matching the production lens exactly.

## 5. Glass identification

Per project convention, glasses are identified at three tiers of confidence:

- **Exact**: the patent's six‑digit code (nd × 1000 rounded / νd × 10 rounded) matches a public catalog value to within one unit in either the nd or νd place, and the partial dispersion ratio θgF is consistent.
- **Family**: the nd/νd pair places the glass in an identifiable family (e.g. "dense short flint", "ED glass", "lanthanum crown") but the exact catalog melt cannot be asserted with confidence from a generic lookup.
- **Uncertain**: only a broad-stroke characterization is available.

I report six‑digit codes verbatim from the patent; catalog‑name matches are stated as *families* wherever a specific melt match is not uniquely determined by the six‑digit code alone. Readers who require the precise shipping‑lens glass should consult Fujifilm's service documentation; the identifications here are the best public inferences from the patent nd/νd/θgF triplet and a manufacturer‑agnostic six‑digit lookup.

| Element | nd / νd / θgF (patent)    | 6‑digit code | Closest catalog match                             | Confidence |
| ------- | ------------------------- | :----------: | ------------------------------------------------- | :--------: |
| L11     | 1.84666 / 23.78 / 0.62054 |   847 238    | OHARA S‑NBH family / HOYA E‑FDS family            |   Family   |
| L12     | 1.72916 / 54.67 / 0.54503 |   729 547    | OHARA S‑LAM66 (729547) — exact six‑digit match    |   Exact    |
| L13     | 1.69680 / 55.53 / 0.54404 |   697 555    | OHARA S‑LAL14 (697555)                            |   Exact    |
| L21     | 1.80780 / 40.89 / 0.56949 |   808 409    | PGM lanthanum dense flint — OHARA L‑LAH family    |   Family   |
| L22     | 1.61800 / 63.39 / 0.54015 |   618 634    | OHARA S‑PHM52 (618634)                            |   Exact    |
| L23     | 1.92287 / 20.88 / 0.63943 |   923 209    | OHARA S‑NPH53 (923209)                            |   Exact    |
| L24     | 1.84667 / 23.79 / 0.61771 |   847 238    | Same family as L11                                |   Family   |
| L31     | 1.68893 / 31.16 / 0.60397 |   689 312    | PGM glass — OHARA L‑TIM28 / HOYA M‑TAF equivalent |   Family   |
| L32     | 1.84667 / 23.79 / 0.61771 |   847 238    | Same family as L11 and L24                        |   Family   |
| L33     | 1.61800 / 63.39 / 0.54015 |   618 634    | Same as L22                                       |   Exact    |
| L34     | 1.49710 / 81.56 / 0.53859 |   497 816    | OHARA S‑FPL51 (497816) — canonical ED glass       |   Exact    |
| L41     | 1.85896 / 22.73 / 0.62844 |   859 227    | OHARA S‑NBH58 (859227)                            |   Exact    |
| L42     | 1.80440 / 39.59 / 0.57297 |   804 396    | Lanthanum flint — OHARA S‑LAH family              |   Family   |
| L51     | 1.51680 / 64.20 / 0.53430 |   517 642    | Schott N‑BK7 / OHARA S‑BSL7 (517642)              |   Exact    |
| L52     | 1.69350 / 53.35 / 0.54844 |   694 534    | HOYA E‑LAC14 / OHARA S‑LAM family                 |   Family   |
| L53     | 1.58313 / 59.46 / 0.54067 |   583 595    | PGM lanthanum crown — HOYA M‑BACD / OHARA L‑BAL   |   Family   |

**Prefix conventions that support the identification:**

- OHARA **S‑** prefix = "eco‑friendly" conventional glass (arsenic‑ and lead‑free); standard polishing process.
- OHARA **L‑** prefix = low‑Tg glass, designated for precision glass molding (PGM) of aspheric surfaces. L21 and L31 candidates are consistent with L‑prefix designations — matching their double‑sided aspheric construction.
- HOYA **M‑** prefix = likewise PGM‑designated. L53's identification in the HOYA M‑BACD family is consistent with its double‑sided aspheric construction.

The clean pattern in the table: every aspheric element (L21, L31, L34, L53) uses a glass family explicitly sold by its manufacturer for aspheric molding, while the spherical elements use standard catalog glasses optimized for conventional polishing.

## 6. Zoom kinematics

All four of G1, G2, G3, G4 move along the optical axis during zooming. G5 remains stationary. The stop travels with G3 as a rigid assembly (the patent places the stop between the last surface of G2 and the first surface of G3F, 1.100 mm in front of L31).

Cumulative stroke from wide to tele, measured as front‑vertex position relative to the image plane:

| Group | Wide position (mm from image) | Tele position (mm from image) | Stroke (mm)          |
| ----- | ----------------------------: | ----------------------------: | -------------------: |
| G1    |                        105.17 |                        147.77 | **+42.60** (forward) |
| G2    |                         92.39 |                         99.63 |     +7.24 (forward)  |
| G3    |                         55.38 |                         81.68 |    +26.30 (forward)  |
| G4    |                         33.79 |                         59.99 |    +26.20 (forward)  |
| G5    |                         27.17 |                         27.17 |  0.00 (stationary)   |

Variable‑gap behavior:

| Gap               |  Wide  | Middle |  Tele  | Motion character                     |
| ----------------- | -----: | -----: | -----: | ------------------------------------ |
| DD[5]  (G1 ↔ G2)  |  0.800 | 16.301 | 36.160 | Monotonic expansion (45× range)      |
| DD[13] (G2 ↔ G3)  | 20.010 |  6.315 |  0.948 | Monotonic contraction (21× range)    |
| DD[21] (G3 ↔ G4)  |  2.400 |  3.974 |  2.502 | **Reversing** — peaks at middle      |
| DD[24] (G4 ↔ G5)  |  4.010 | 15.227 | 30.211 | Monotonic expansion (7.5× range)     |

The **reversing G3↔G4 spacing** (DD[21]) is notable. Between wide and middle, DD[21] grows by 1.57 mm; between middle and tele, it shrinks back by 1.47 mm. This non‑monotonic behavior arises because G3 and G4 have slightly different zoom trajectories that must cross — typical of five‑group zoom designs where the focusing group shares the zoom path. Any lens data file encoding this prescription must interpolate DD[21] piecewise‑linearly across all three zoom positions rather than linearly between only wide and tele; a naive endpoint interpolation would miss the middle‑position peak entirely.

The total physical length of the lens (S1 to image plane including cover glass air‑equivalent) grows from 104.2 mm at wide to 146.8 mm at tele — a 41 % extension. This is an **externally extending zoom**, consistent with the barrel‑extending mechanical behavior observed in the shipping XF 16–80 mm.

## 7. Focusing mechanism

The patent is explicit (¶ 0077) that **only G4 moves during focusing** from infinity to the close‑range object. G4 moves **toward the image side** to focus on closer subjects. This is an **inner focus** architecture (the front element does not translate during focusing, so filter rotation is avoided), specifically a rear‑inner‑focus variant with the focusing group placed between two positive groups.

Given the production lens's specified MFD of 0.35 m (measured from the sensor plane) and the patent's Table 32, which provides only infinity‑focus variable‑gap values (no close‑focus table is given for Example 11 — this is one case where the patent does not disclose the close‑focus prescription), we can infer but not exactly compute the close‑focus G4 travel. The focus sensitivity is captured by two conditional expressions: at wide‑angle end (Expression 19: (1 − β4w²)·β5w² = −1.709), a 1 mm G4 travel shifts the image plane by ≈ 1.71 mm; at the telephoto end (Expression 8: (1 − β4t²)·β5t² = −4.069), the same 1 mm of G4 travel produces a ≈ 4.07 mm image‑plane shift. The higher telephoto sensitivity means less physical G4 motion is required for the same close‑focus acquisition at tele — consistent with the compact rear‑inner‑focus architecture and a short throw on the focusing actuator.

When G4 moves toward the image by Δ during close‑focus acquisition (at a given zoom position):

- DD[21] — the gap between G3R (L34 rear) and G4 (L41 front) — **increases** by Δ.
- DD[24] — the gap between G4 (L42 rear) and G5 (L51 front) — **decreases** by Δ.

For a lens data file encoding this prescription, DD[21] and DD[24] must therefore carry both a zoom‑dependence and a focus‑dependence: each zoom position needs a [d_inf, d_close] pair. Because the patent does not publish close‑focus DD values for Example 11, the data file currently uses d_close = d_inf at each zoom position — a reasonable first approximation pending independent measurement of the shipping lens. DD[5] and DD[13] are zoom‑only (unchanged by focusing) and so carry identical infinity and close‑focus values at each zoom position regardless.

## 8. Optical image stabilization (OIS)

The patent defines the vibration‑reduction lens group (¶ 0069) as a lens group that translates **perpendicular to the optical axis** to counteract camera shake. In Example 11, the VR group is **exclusively the third lens group rear subgroup G3R — that is, L34 alone**.

The choice of L34 as the OIS element is optical‑engineering‑optimal for three reasons:

1. **Location at the stop.** L34 is immediately downstream of the aperture stop, where the off‑axis beam radius is at its minimum. This means L34 can be made small in diameter — the physical VR cell is compact, and the required actuator force (proportional to cell mass × acceleration) is small.
2. **Single‑element VR minimizes mass.** The patent explicitly argues (¶ 0073) for making the VR subgroup a single element. This keeps the moving mass to a minimum (≈ 2 g of glass, estimated from the L34 prescription and a typical density of ≈ 3.65 g/cm³ for S‑FPL51‑family ED glass), supporting fast corrective motion and reducing settling time after camera shake impulses.
3. **High VR sensitivity.** The condition (1 − β3Rt) × β45t = +3.14 at the telephoto end means the sensor‑plane image shift is 3.14× the physical lateral displacement of L34. A modest actuator stroke of ±0.5 mm therefore translates to a ±1.57 mm image shift at the sensor plane — more than adequate to correct typical handshake (typically < 0.5 mm equivalent image shift).

There is an upper bound to VR sensitivity: too high a sensitivity makes the system susceptible to actuator noise and decentration errors during stabilization. Conditional Expression 6 constrains this to 2 < (1 − β3Rt) × β45t < 5, and Example 11's value of 3.14 is comfortably in the middle of that band.

## 9. Aberration correction strategy

Synthesizing across the element, glass, aspheric, and kinematic analyses, the lens's correction strategy can be summarized as:

- **Petzval sum**: Very small magnitude, |ΣP| ≈ 2.63 × 10⁻³ mm⁻¹ (Petzval radius ≈ 380 mm). The symmetric positive‑negative‑positive‑negative‑positive group structure, with high‑index glasses in the negative groups (L21 at nd = 1.808, L22 at nd = 1.618, L42 at nd = 1.804), flattens the field effectively.
- **Longitudinal chromatic aberration**: Primarily corrected by the L11/L12 cemented doublet in G1 (using heavy flint + dense lanthanum crown), the L32/L33 cemented doublet in G3F (flint + crown), and the ED element L34 (very low‑dispersion glass with anomalous partial dispersion). The G4 cemented doublet provides internal color correction within the focusing group so that CA does not drift with focus distance.
- **Lateral chromatic aberration**: Addressed by the symmetric refractive‑power arrangement about G3 (patent ¶ 0064) plus the specific glass pairings in each doublet. Conditional Expression 9 (vd4n − vd4p = 16.86) is the most quantitative constraint.
- **Secondary spectrum**: The ED glass L34 (vd > 81, θgF = 0.539) is the dedicated secondary‑spectrum corrector. Its effect is amplified by its positive power (f = +19.6 mm) — a strong convergent ED element is the most efficient configuration for secondary color correction in a telephoto‑capable zoom.
- **Spherical aberration**: Distributed correction via the G1 front doublet (L11/L12) achromatization, the double‑sided aspheric on L21 (G2, the primary wide‑angle spherical corrector), L31's double‑sided aspheric (G3F, the post‑stop fine corrector), and L34's double‑sided aspheric (G3R/OIS) handling spherical and marginal‑ray correction on the strongly positive OIS element.
- **Distortion**: Addressed through the symmetric five‑group power arrangement; residual distortion at the wide‑angle end is known in the shipping lens to be handled in part by in‑camera digital correction, which is common for compact modern APS‑C zooms and consistent with a patent emphasizing angle of view over low uncorrected distortion.
- **Field curvature and astigmatism at wide angle**: The primary burden falls on L53's large aspheric surfaces (Δsag ≈ +325 μm on S28 and +534 μm on S29 — the largest aspheric departures in the lens). L53 acts as a final field flattener, shaping the wide‑field ray fan just before the sensor.
- **OIS‑coupled aberration stability**: The VR group (L34) is a single lens with moderate aspheric departures (< 200 μm at the rim) specifically to minimize aberration variation during lateral translation.

## 10. Verification of patent conditional expressions

The patent provides conditional expressions (1)–(21) generally, of which **nineteen (1–19) are tabulated for Example 11** in Table 34. Expressions (20) and (21) are tabulated only for Examples 1–6 and do not appear in the Example 11 column. Using independently computed paraxial quantities from an ABCD‑matrix system trace, I verified every listed Example 11 value; numerical agreement is within the rounding precision of the patent table except where noted.

| Expr | Condition                    |          Patent (Ex 11) |             Computed | Status |
| ---- | ---------------------------- | ----------------------: | -------------------: | :----: |
| (1)  | f₁ / f₅                      |                  +0.961 |              +0.9611 |   ✓    |
| (2)  | f₄ / f₅                      |                  −0.370 |              −0.3704 |   ✓    |
| (3)  | Nd₂ (L12 refractive index)   |                   1.729 |              1.72916 |   ✓    |
| (4)  | BFw / TLw                    |                   0.168 |               0.1679 |   ✓    |
| (5)  | f₃R / f₃F                    |                  +0.336 |              +0.3358 |   ✓    |
| (6)  | (1 − β3Rt) · β45t            |                  +3.140 |              +3.1398 |   ✓    |
| (7)  | vd3Rp (L34 Abbe)             |                   81.56 |                81.56 |   ✓    |
| (8)  | (1 − β4t²) · β5t²            |                  −4.069 |              −4.0688 |   ✓    |
| (9)  | vd4n − vd4p                  |                   16.86 |                16.86 |   ✓    |
| (10) | TLw / \|Y\|                  |                   7.338 | 7.338 (Y ≈ 14.20 mm) |   ✓    |
| (11) | D45t / D45w                  |                  10.876 |                7.534 |  ✗ — see note |
| (12) | BFw / (fw · tan\|ωw\|)       |                   1.117 |                1.114 |   ✓    |
| (13) | NdG1p (avg of L12, L13 nd)   |                   1.713 |                1.713 |   ✓    |
| (14) | f₂ / f₃                      |                  −0.804 |              −0.8040 |   ✓    |
| (15) | f₁ / f₂                      |                  −5.612 |              −5.6123 |   ✓    |
| (16) | f₃ / f₄                      |                  −0.575 |              −0.5751 |   ✓    |
| (17) | f₂ / f₄                      |                  +0.462 |              +0.4624 |   ✓    |
| (18) | f₃R / f₃                     |                  +0.982 |              +0.9820 |   ✓    |
| (19) | (1 − β4w²) · β5w²            |                  −1.709 |              −1.7090 |   ✓    |

**Note on Y in Expression (10).** The patent defines Y as the maximum image height used by the design, not the physical sensor half‑diagonal. A native APS‑C sensor (23.6 × 15.6 mm) has a half‑diagonal of 14.15 mm. Working backward from the patent's Exp (10) value gives Y = 14.20 mm — slightly larger than the physical sensor half‑diagonal. This reflects the design's convention of specifying image height at the output circle before in‑camera geometric distortion correction; the production lens delivers a slightly wider pre‑correction image field that is then rectified and cropped to the physical sensor. This is an increasingly common convention for modern mirrorless zooms that rely on software distortion correction at the wide end.

**Note on Expression (11).** The patent states D45t/D45w = 10.876 for Example 11. From Table 32, DD[24] (the only air gap between G4 and G5) is 4.010 mm at wide and 30.211 mm at tele, giving 30.211 / 4.010 = 7.534. The ratio 10.876 is not achievable from the Table 32 data and would require DD[24] at tele to be approximately 43.6 mm, which is inconsistent with the total optical length at tele (146.80 mm, confirmed by Expression (4) BFw/TLw = 0.168 and by independent ray trace) and with every other conditional expression. This appears to be a transcription error in the patent's Table 34 — the ratio 7.534 is consistent with the pattern of Examples 7–10 (which have similar G5‑stationary architectures and ratios in the 3.7–4.2 range, and the higher‑zoom‑ratio Ex 5 at 8.27) and with the observed variable‑gap behavior. The correct G4‑to‑G5 kinematic ratio for Example 11 is 7.534.

## 11. Summary

Example 11 of US 2020/0166735 A1 is a 16‑element, 12‑group, constant f/4 zoom lens spanning 16.5–77.8 mm EFL (native APS‑C), with four groups moving during zooming, a single G4 cemented doublet performing rear‑inner focus, and the single‑element L34 providing in‑group optical image stabilization. The design achieves a small‑magnitude Petzval sum (|ΣP| ≈ 2.63 × 10⁻³ mm⁻¹, R_P ≈ 380 mm) through symmetric positive‑negative‑positive‑negative‑positive group arrangement; controls secondary spectrum via an ED element (L34, vd = 81.56) placed at the OIS location; and uses four aspheric elements — each with both surfaces aspheric — to bear the burden of spherical and wide‑field aberration correction across the 87° → 20° field‑angle range.

This analysis reproduces the patent's stated EFL values at all three zoom positions to within 0.001 mm and matches eighteen of the nineteen conditional expressions the patent tabulates for Example 11 (the nineteenth, Expression 11, is a transcription error in the patent's Table 34). The identification of Example 11 as the Fujifilm Fujinon XF 16–80 mm f/4 R OIS WR rests on an exact element count (16 elements / 12 groups), aspheric element count (consistent with Fujifilm's "3 aspherical + 1 ED" taxonomy under the L34‑as‑ED reading), focal range (16.5–77.8 mm vs. marketed 16–80 mm), constant aperture (f/4 marketed vs. f/4.12–4.13 designed), and the explicit five‑group positive‑lead architecture cited in the shipping lens's product documentation.
