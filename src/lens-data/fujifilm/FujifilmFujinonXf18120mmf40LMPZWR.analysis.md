# FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR

## Patent Reference and Design Identification

**Patent:** JP 2023-033114 A\
**Application Number:** JP2022-102075\
**Priority:** 2021-08-27 (JP2021-139216)\
**Filed:** 2022-06-24\
**Published:** 2023-03-09\
**Inventors:** Masaru Yonezawa; Shinkichi Ikeda; Takashi Kunugise; Masanao Kawana\
**Applicant:** FUJIFILM Corporation\
**Title:** Zoom Lens and Imaging Apparatus (ズームレンズおよび撮像装置)\
**Embodiment analyzed:** Example 1

This prescription is the project-selected production correlation for the **FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR**. The patent itself does not identify a commercial product by name, so the correlation is an authoring inference rather than a statement of manufacturer confirmation. The numerical prescription is Example 1, retained at native patent scale without uniform scaling.

The production correlation rests on several convergent features:

1. FUJIFILM specifies the production lens as **15 elements in 12 groups**, and Example 1 contains the same physical count.
2. FUJIFILM specifies **3 aspherical elements**; Example 1 has three double-sided aspherical elements, L21, L31, and L51, for six aspherical surfaces.
3. The production lens is marketed as **18-120 mm f/4**. The patent endpoints are 18.544 mm and 116.830 mm at f/4.04 and f/4.11, respectively.
4. The patent architecture is a five-group zoom in which G2 and G4 move during zoom, while G4 alone is the focusing group. FUJIFILM identifies the commercial lens as a power zoom with linear-motor focusing.
5. FUJIFILM specifies a 0.6 m minimum focus distance and 0.2× maximum magnification at the tele end. The mechanism-constrained reconstruction of the patent model reaches 0.6 m and computes approximately 0.203× magnification at the tele endpoint.

The production values and the design values are intentionally kept separate. The marketed range is 18-120 mm at f/4, whereas the final data file stores the independently recomputed design EFL endpoints as **18.544395860 mm** and **116.823552800 mm** and uses the modeled infinity f-numbers **4.04** and **4.11**. The difference between the patent's 6.30× design ratio and the marketed 6.67× ratio is not removed by scaling.

No uniform scale factor is applied: **s = 1**. Accordingly, radii, spacings, semi-diameters, image-plane coordinates, and aspheric coefficients are retained in the patent's native dimensional scale, and no `A_p / s^(p-1)` coefficient transformation is required.

## Optical Architecture

Example 1 is an ordinary, unfolded five-group zoom with the first-order power sequence **positive – negative – positive – negative – positive**. The patent defines the broader blocks as G1, front group GA, middle group GB, and rear group GC; in Example 1, GA is G2, GB is G3, and GC comprises G4 and G5 (JP 2023-033114 A, ¶0085-¶0091).

The final model contains **15 glass elements in 12 air-separated physical groups**. Three element pairs are cemented: L11+L12, L32+L33, and L41+L42. Those physical-group counts should not be confused with the five kinematic zoom groups:

| Zoom group | Elements | Net first-order sign | Zoom behavior | Functional role |
|---|---|---:|---|---|
| G1 | L11-L13 | Positive | Fixed | Front collecting/correcting group |
| G2 / GA | L21-L24 | Negative | Moves imageward from wide to tele | Main negative variator |
| G3 / GB | STO + L31-L33 | Positive | Fixed | Stop-bearing positive relay/corrector |
| G4 | L41-L42 | Negative | Moves imageward in zoom and focus | Sole focusing group |
| G5 | L51-L53 | Positive | Fixed | Rear positive relay/corrector |

Independent first-order calculation gives group focal lengths of approximately **+65.641 mm (G1)**, **-11.975 mm (G2)**, **+18.482 mm (G3)**, **-25.154 mm (G4)**, and **+62.752 mm (G5)**. These group powers are distinct from the focal lengths of the individual elements listed below. G4 and G5 together form the rear block GC, whose in-situ combined first-order focal length changes with their separation, from approximately **-299.336 mm at wide infinity** to **-91.780 mm at tele infinity**. That change is a system-state result, not a standalone element or cemented-pair power.

The zoom motion is compactly expressed by two conserved adjacent-gap sums. G2 moves imageward by 30.275 mm from wide to tele while `D5 + D13 = 32.230 mm`; G4 moves imageward by 11.925 mm while `D19 + D22 = 23.060 mm`. The patent supplies only the wide and tele zoom stations numerically, so the LensVisualizer model interpolates between those source endpoints and does not present the intermediate path as a measured production cam law.

By the project's architecture definitions, the design is not a telephoto system at either endpoint: `TL/EFL` is approximately 7.482 at wide and 1.188 at tele, both greater than 1. The wide endpoint does meet the project's retrofocus test because its computed BFD, 24.829 mm, exceeds its 18.544 mm EFL; the tele endpoint does not.

### Model normalization and aperture treatment

Patent surfaces 29-30 are a plane-parallel optical member PP representing a filter and/or cover-glass surrogate (¶0084). They are excluded from the ordinary LensVisualizer prescription. Their first-order optical effect is retained by replacing the raw rear geometry with an air-equivalent S28-to-image spacing of

`21.929 + 2.850 / 1.51633 + 1.021 = 24.829538095 mm`.

This moves the normalized image plane 0.970462 mm objectward relative to the raw physical image plane through PP. All finite-distance comparisons in the modeled prescription use that normalized plane.

The aperture stop position is not inferred: it is patent surface 14 and appears as the single `STO` in the data file. The patent's listed stop-row effective diameter, however, is not a published physical open-iris diameter. The physical wide-open iris schedule is therefore a modeling inference from the source-station f-numbers. Exact axial Snell tracing through the final aspheres gives physical stop semi-diameters of approximately **7.152960 mm at wide** and **8.239312 mm at tele**, with ratio **0.868150**, reproducing the patent's rounded Table-110 value 0.87. The active refracting-surface semi-diameters are not inferred; they use the patent effective diameters divided by two.

## Element-by-Element Analysis

### G1 — fixed positive front group

The patent describes G1 as a positive group whose first two elements are a negative lens followed by a positive lens; it states that this arrangement facilitates aberration correction and that the front negative element is useful at the wide end (¶0092-¶0095).

#### L11 + L12 — cemented front pair D1

**L11:** nd = 1.92286, νd = 20.89. Glass: 923209 class (supplier unresolved). f = -148.173 mm.\
**L12:** nd = 1.59283, νd = 68.63. Glass: 593686 class (supplier unresolved). f = +89.400 mm.

L11 is a negative meniscus and L12 is a plano-convex positive element. Their isolated powers have opposite signs, but the verified cemented-pair focal length is approximately **+230.791 mm**. That net value belongs to the bonded pair and must not be substituted for either element's standalone focal length.

The large νd separation between L11 and L12, together with their patent-derived partial-dispersion values (`dPgF = +0.02939698` and `+0.01449566`), gives the front cemented pair both power-sharing and chromatic degrees of freedom. The data does not assign a production glass vendor to either member.

#### L13 — positive meniscus

**nd = 1.77535, νd = 50.30. Glass: 775503 class (H-LaK77 catalog equivalent; supplier unresolved). f = +89.506 mm.**

L13 completes G1 as a second positive element. In the assembled group it works with the weakly positive L11/L12 cemented pair to produce the verified G1 focal length of approximately +65.641 mm. Its material coordinate resolves to the newly added NHG H-LaK77 curve (nd 1.77536, νd 50.32), without asserting the production supplier.

### G2 / GA — moving negative variator

G2 is the patent's front group GA in Example 1. It is strongly negative overall and moves imageward during the wide-to-tele zoom. The group contains four air-spaced elements, allowing the large negative group power to be distributed rather than concentrated in a single surface pair.

#### L21 — double-sided aspherical negative meniscus

**nd = 1.80610, νd = 40.73. Glass: 806407 class (supplier unresolved). f = -16.637 mm.**

L21 is the strongest isolated negative element in the variator and carries aspheres on both surfaces, 6A and 7A. Its position at the entrance of the moving negative group gives the design two independent non-spherical surface profiles where ray angles and zoom sensitivity are substantial. This functional interpretation follows from its location and power; the patent does not assign a single named aberration exclusively to L21.

#### L22 — biconcave negative

**nd = 1.77535, νd = 50.30. Glass: 775503 class (H-LaK77 catalog equivalent; supplier unresolved). f = -22.676 mm.**

L22 adds substantial negative power after L21. It uses the same authored coordinate class as L13 but in a different shape and group role. The repeated material coordinate is a source fact; it is not evidence that a particular commercial glass or production supplier has been identified.

#### L23 — biconvex positive

**nd = 1.84667, νd = 23.79. Glass: 847238 class (supplier unresolved). f = +19.103 mm.**

L23 reverses the local power sign inside G2. It is a high-index, high-dispersion positive element placed between negative members, providing the variator with a strong internal balancing power rather than leaving G2 as a simple stack of negative singlets.

#### L24 — negative meniscus

**nd = 1.88299, νd = 40.78. Glass: 883408 class (supplier unresolved). f = -36.557 mm.**

L24 closes the negative variator. Patent conditions (23) and (24) explicitly constrain the dispersion difference and adjacent curvature relation of the final positive/negative pair in GA, which correspond in Example 1 to L23 and L24. The independently recomputed Example-1 values satisfy those two primary conditions.

### G3 / GB — fixed positive stop group

G3 contains the aperture stop followed by L31-L33. It is fixed during zoom and has a verified group focal length of approximately +18.482 mm. The patent specifically describes a preferred middle-group form consisting of the stop, a positive singlet, and a cemented negative-positive pair (¶0100-¶0103).

#### L31 — double-sided aspherical biconvex positive

**nd = 1.49648, νd = 81.26. Glass: S-FPL51 (catalog proxy for nd=1.49648, vd=81.26; supplier unresolved). f = +27.451 mm.**

L31 is the first powered element after the stop and is aspherical on both surfaces, 15A and 16A. It combines strong positive power with the highest νd in the prescription and a patent-derived `dPgF` of +0.02976932. The production lens is marketed as containing three ED elements, and L31 is one of the most conspicuous low-dispersion coordinates in Example 1, but the patent does not identify which production elements carry Fujifilm's ED designation. The data therefore does not label L31 as a confirmed production ED glass.

#### L32 + L33 — cemented pair D2

**L32:** nd = 1.91082, νd = 35.25. Glass: 911353 class (supplier unresolved). f = -26.178 mm.\
**L33:** nd = 1.53775, νd = 74.70. Glass: 538747 class (supplier unresolved). f = +16.782 mm.

The negative L32 and positive L33 form a cemented doublet with a verified net focal length of approximately **+40.896 mm**. The patent expressly states that a cemented negative-positive pair in the middle group is advantageous for correcting axial chromatic aberration on the wide side (¶0101). The material pairing is consistent with that stated function: L32 has moderate dispersion while L33 is a much lower-dispersion positive member.

### G4 — moving negative focus group

#### L41 + L42 — cemented focusing doublet D3

**L41:** nd = 1.90200, νd = 25.26. Glass: 902253 class (supplier unresolved). f = +26.721 mm.\
**L42:** nd = 1.78799, νd = 47.47. Glass: 788475 class (supplier unresolved). f = -13.042 mm.

The cemented pair has a verified net focal length of approximately **-25.154 mm**, equal to the first-order G4 group focal length because G4 consists only of this doublet. This distinction is important: L41 is positive by itself, L42 is strongly negative by itself, and their bonded combination is negative.

G4 is the sole focus group and also participates in zoom motion. The patent describes the focus group as preferably negative because that reduces the required focusing travel (¶0111-¶0118). In the final model, close focusing is implemented only by translating this cemented doublet imageward while conserving `D19 + D22 = 23.060 mm`.

### G5 — fixed positive rear group

G5 is fixed to the image plane in the patent Example-1 zoom motion and has a verified group focal length of approximately +62.752 mm. The patent identifies the final group as preferably positive and specifically favors an aspherical positive lens at its object-side end (¶0105-¶0109).

#### L51 — double-sided aspherical positive meniscus

**nd = 1.58313, νd = 59.46. Glass: 583595 class (supplier unresolved). f = +31.816 mm.**

L51 is the third double-sided aspherical element, on surfaces 23A and 24A. It begins the fixed rear positive group and therefore supplies non-spherical correction after both the zoom variator and moving focus group. The patent states that an aspherical lens in the last rear group is useful for suppressing aberration variation during zoom and focus (¶0107).

#### L52 — negative meniscus

**nd = 2.00069, νd = 25.43. Glass: 001255 class (supplier unresolved). f = -33.538 mm.**

L52 is the highest-index element in the prescription and provides negative power between two positive rear-group menisci. Its combination of high index and low νd gives G5 a strong local power and dispersion counterweight without changing the overall positive sign of the group.

#### L53 — positive meniscus

**nd = 1.53172, νd = 48.85. Glass: 532489 class (supplier unresolved). f = +68.503 mm.**

L53 is the final powered element. It restores positive power after L52 and forms the last refracting surface before the normalized rear air space to the image plane. Its standalone focal length is substantially longer than L51's, so the rear-group net behavior is determined by the complete three-element spacing and power distribution rather than by L53 alone.

## Glass Identification and Selection

The patent publishes **nd, νd, and θgF** for every glass row but does not name a glass manufacturer. The final data file therefore avoids supplier-specific assignments. Six-digit coordinate classes and explicitly qualified catalog equivalents provide runtime dispersion while retaining the source nd/νd and θgF. H-LaK77 supplies L13/L22; S-FPL51 is a close proxy for L31. All fifteen elements resolve, but no production supplier is established.

The `dPgF` values are not vendor substitutions. They are direct transformations of the patent's θgF data using the project's normal-line convention

`dPgF = θgF - (0.6438 - 0.001682 × νd)`.

The patent does not publish `nC`, `nF`, or `ng`, so those fields are intentionally absent. The data therefore supports partial-dispersion-aware fallback modeling through `dPgF`, but it does not justify an APO label or a claim that any supplier-specific Sellmeier curve is the exact production glass.

| Glass annotation | nd | νd | dPgF | Element(s) | Status |
|---|---:|---:|---:|---|---|
| 923209 class | 1.92286 | 20.89 | +0.02939698 | L11 | Supplier unresolved |
| 593686 class | 1.59283 | 68.63 | +0.01449566 | L12 | Supplier unresolved |
| 775503 class / H-LaK77 equivalent | 1.77535 | 50.30 | -0.00915540 | L13, L22 | Catalog equivalent; supplier unresolved |
| 806407 class | 1.80610 | 40.73 | -0.00589214 | L21 | Supplier unresolved |
| 847238 class | 1.84667 | 23.79 | +0.01392478 | L23 | Supplier unresolved |
| 883408 class | 1.88299 | 40.78 | -0.00691804 | L24 | Supplier unresolved |
| S-FPL51 coordinate proxy | 1.49648 | 81.26 | +0.02976932 | L31 | Δnd ≈ +0.00052, Δνd ≈ +0.286; supplier unresolved |
| 911353 class | 1.91082 | 35.25 | -0.00226950 | L32 | Supplier unresolved |
| 538747 class | 1.53775 | 74.70 | +0.02120540 | L33 | Supplier unresolved |
| 902253 class | 1.90200 | 25.26 | +0.01530732 | L41 | Supplier unresolved |
| 788475 class | 1.78799 | 47.47 | -0.01049546 | L42 | Supplier unresolved |
| 583595 class | 1.58313 | 59.46 | -0.00322828 | L51 | Supplier unresolved |
| 001255 class | 2.00069 | 25.43 | +0.01314326 | L52 | Supplier unresolved |
| 532489 class | 1.53172 | 48.85 | +0.00536570 | L53 | Supplier unresolved |

The production specification states that the commercial lens contains three ED elements. Within Example 1, L12 (νd 68.63), L31 (νd 81.26), and L33 (νd 74.70) are the three most conspicuous low-dispersion positive materials and provide a plausible numerical correlation with that count. This is an inference from the patent coordinates and production specification, not a manufacturer-published element-by-element ED map.

The diagram marks L11, L31, and L33 as patent-supported APD because their published θgF values imply positive ΔPgF above 0.02. This includes a high-dispersion flint (L11); APD is not synonymous with ED or a production APO designation.

## Focus Mechanism

The design uses **single-group inner focus**. G4, the cemented L41+L42 doublet, is the only group that moves for focus. G5 remains fixed to the image plane. FUJIFILM's product documentation identifies linear-motor focusing; the patent establishes the optical movement but does not supply the commercial motor implementation.

The patent publishes three relevant Example-1 states: wide infinity, tele infinity, and a tele near state. It does not publish a wide near row and does not publish a 0.6 m production-MFD row. The final data file therefore uses the disclosed status **CONSTRAINED_RECONSTRUCTION** rather than inventing unconstrained focus motion.

The constraint is mechanical and optical: only G4 moves, and its adjacent gaps remain complementary so that `D19 + D22 = 23.060 mm` at every authored focus state. Three normalized focus keyframes are stored:

| Focus keyframe | Wide D19 / D22 (mm) | Tele D19 / D22 (mm) | Provenance |
|---|---:|---:|---|
| Infinity | 1.000000 / 22.060000 | 12.925000 / 10.135000 | Patent Table 2 |
| Middle, 1.195394 m object-to-image | 1.060783 / 21.999217 | 16.026000 / 7.034000 | Tele pair published; wide pair code-solved under G4-only constraint |
| Close, 0.600 m object-to-image | 1.135197 / 21.924803 | 19.540846 / 3.519154 | Both endpoints code-solved from production MFD |

The middle tele keyframe preserves the patent's published near row exactly. The source describes that state as approximately 1.1 m from the first lens surface; after PP removal and reference-plane normalization, the modeled object-to-image distance is 1.195394 m and the calculated lateral magnification is approximately -0.100018.

At the modeled 0.6 m production MFD, G4 travels imageward from infinity by approximately **0.135197 mm at wide** and **6.615846 mm at tele**. The calculated tele magnification is approximately **-0.203252**, consistent with FUJIFILM's rounded 0.2× production specification. These 0.6 m positions are reconstruction results, not patent table rows.

Because focusing changes the internal group spacing, the paraxial EFL of the focused system also changes. The final-state calculations should therefore not be interpreted as a fixed-focal-length thin-lens focus model; the modeled close-state EFLs are consequences of the prescribed internal motion.

## Aspherical Surfaces

Example 1 has six aspherical surfaces on three elements: **6A/7A on L21, 15A/16A on L31, and 23A/24A on L51**. The patent uses

`Zd = C h² / [1 + sqrt(1 - KA C² h²)] + Σ A_m h^m`.

LensVisualizer uses the standard denominator with `(1 + K)`, so the conversion is `K = KA - 1`. Example 1 gives `KA = 1` on all six surfaces; the authored standard conic constant is therefore **K = 0** on every asphere. No scaling is applied, so all polynomial coefficients are transcribed at their native patent values.

Surfaces 15A and 16A include odd radial powers. Here `h` is radial height, so these odd powers remain rotationally symmetric and do not imply decenter or anamorphism. The patent also prints `A3 = 0` on those surfaces; zero-valued optional odd terms are omitted from the data file under the current schema convention.

### Surface 6A — L21 front

`K = 0`

```text
A4  =  7.4473652E-05
A6  = -2.1119784E-06
A8  =  4.7319775E-08
A10 = -7.9524193E-10
A12 =  9.3934890E-12
A14 = -7.4102362E-14
A16 =  3.6783833E-16
A18 = -1.0327838E-18
A20 =  1.2461383E-21
```

At the patent effective semi-diameter 12.420 mm, the verified departure from the spherical base is approximately **+0.264193 mm** and the rim-slope angle is approximately **5.381°**.

### Surface 7A — L21 rear

`K = 0`

```text
A4  =  6.5838933E-05
A6  = -8.2962920E-07
A8  = -8.0793970E-08
A10 =  5.9315217E-09
A12 = -2.0050240E-10
A14 =  3.9039118E-12
A16 = -4.4501804E-14
A18 =  2.7553203E-16
A20 = -7.1506946E-19
```

At 9.120 mm semi-diameter, the verified aspheric departure is approximately **+0.075654 mm**. This is the steepest authored rim in the model, at approximately **45.851°**, still below the current default rim-slope limit.

### Surface 15A — L31 front

`K = 0`

```text
A4  =  7.3078481E-06
A5  = -2.9986848E-05
A6  =  1.6384009E-05
A7  = -4.0393568E-06
A8  =  2.4477938E-07
A9  =  9.0464563E-08
A10 = -1.6990822E-08
A11 = -2.4534913E-10
A12 =  3.0825088E-10
A13 = -2.3134201E-11
A14 = -7.8884947E-13
A15 =  1.6292002E-13
A16 = -5.4632706E-15
```

At 9.230 mm semi-diameter, the verified departure is approximately **-0.072250 mm** and the rim-slope angle is approximately **28.552°**.

### Surface 16A — L31 rear

`K = 0`

```text
A4  =  5.3950544E-05
A5  = -1.3977719E-05
A6  =  1.0144728E-05
A7  = -3.9828880E-06
A8  =  8.7491995E-07
A9  = -8.8643972E-08
A10 = -2.9596556E-09
A11 =  2.0443076E-09
A12 = -2.8803981E-10
A13 =  2.5839721E-11
A14 = -1.8603752E-12
A15 =  9.7346637E-14
A16 = -2.4344642E-15
```

At 9.200 mm semi-diameter, the verified departure is approximately **+0.353627 mm** and the rim-slope angle is approximately **2.841°**.

### Surface 23A — L51 front

`K = 0`

```text
A4  =  6.2558334E-07
A6  = -2.5123777E-07
A8  =  9.6772452E-09
A10 = -9.2663040E-11
A12 = -1.5910064E-12
A14 =  4.8091291E-14
A16 = -4.7819912E-16
A18 =  2.1682041E-18
A20 = -3.7741189E-21
```

The negative sign on `A12` is important. The rendered original Table 3 on patent PDF page 51 shows **-1.5910064E-12**; some parsed text drops that minus sign. The data file preserves the rendered source value. At 11.320 mm semi-diameter, the verified departure is approximately **+0.057680 mm** and the rim-slope angle is approximately **1.568°**.

### Surface 24A — L51 rear

`K = 0`

```text
A4  =  1.7961844E-05
A6  =  2.5308981E-07
A8  = -1.7409809E-08
A10 =  6.4173328E-10
A12 = -1.2426583E-11
A14 =  1.3729067E-13
A16 = -8.6371114E-16
A18 =  2.8638107E-18
A20 = -3.8577185E-21
```

At 11.620 mm semi-diameter, the verified departure is approximately **+0.523735 mm**, the largest absolute departure of the six authored surfaces, and the rim-slope angle is approximately **35.401°**.

The three double-sided aspheres are distributed across the moving negative variator (G2), the fixed stop group (G3), and the fixed rear positive group (G5). That distribution gives the zoom design non-spherical correction degrees of freedom before, near, and after the moving focus group rather than concentrating all aspheric correction in one kinematic block.

## Chromatic Correction Strategy

The patent's material data supports a more specific chromatic discussion than nd/νd alone because θgF is available for every glass and is retained as `dPgF` in the final data. The design nonetheless should not be described as apochromatic: no APO designation is published for this prescription, and the data does not contain patent-authored `nC`, `nF`, or `ng` line indices.

Three pairings are particularly important to the chromatic architecture:

- **D1 (L11+L12)** combines νd 20.89 and 68.63. The pair is only weakly positive in net power, allowing the front group to separate power and color correction functions.
- **D2 (L32+L33)** combines νd 35.25 and 74.70. This is the middle-group negative-positive cemented pair that the patent explicitly associates with wide-side axial color correction.
- **D3 (L41+L42)** combines νd 25.26 and 47.47 inside the moving focus group. The pair remains net negative while its two members carry opposite standalone powers and substantially different partial-dispersion deviations.

The patent-derived `dPgF` values also show that νd alone does not describe the complete spectral palette. For example, L31 combines νd 81.26 with `dPgF = +0.02976932`, while L42 combines νd 47.47 with `dPgF = -0.01049546`. Those deviations are retained numerically in the model rather than replaced by a guessed vendor curve.

## Conditional Expressions

The patent states a large family of conditional inequalities and Tables 109-110 list the corresponding values for Example 1. Independent recomputation reproduces the corresponding-value tables within the precision permitted by the rounded prescription. Using the printed Table 1 coordinates, conditions (21) and (48) differ by 0.01 from Tables 109-110, consistent with ¶0220's statement that the tabulated data are rounded. Conditions (4) and (6) use base-10 logarithm; using the natural logarithm does not reproduce the patent table.

The table below reports the 58 primary expressions. Condition (33) uses the exact axial-Snell stop model (`STw/STt = 0.868150`) rather than a paraxial-only estimate. The remaining values are independently recomputed from the Example-1 prescription.

| # | Expression | Example-1 value | Result |
|---:|---|---:|---|
| 1 | `0.5 < DDG1STw/f1 < 1.5` | 0.917202 | Pass |
| 2 | `0.1 < f1/fB < 6` | 3.55161 | Pass |
| 3 | `-1 < fAw/fB < -0.2` | -0.647906 | Pass |
| 4 | `1 < enp/[IHw log10(ft/fw)] < 3` | 2.32219 | Pass |
| 5 | `1.4 < f1/(ft/FNot) < 4.4` | 2.30933 | Pass |
| 6 | `3 < DDG1STw/[IHw log10(ft/fw)] < 10` | 5.05515 | Pass |
| 7 | `-9 < f1/fAw < -4` | -5.48168 | Pass |
| 8 | `0.3 < EDyr/EDz < 0.9` | 0.479151 | Pass |
| 9 | `0.1 < fz/fGz < 3` | 1.09166 | Pass |
| 10 | `0.1 < f1/fGz < 3` | 1.04604 | Pass |
| 11 | `0.2 < (βBt/βBw)/(ft/fw) < 1.55` | 0.370195 | Pass |
| 12 | `0.2 < βGzw < 0.9` | 0.615022 | Pass |
| 13 | `0.5 < (Rzf+Ryr)/(Rzf-Ryr) < 2` | 0.770590 | Pass |
| 14 | `1.7 < NL1 < 2.02` | 1.92286 | Pass |
| 15 | `15 < νL1 < 45` | 20.89 | Pass |
| 16 | `2 < NL1+0.01νL1 < 3` | 2.13176 | Pass |
| 17 | `1.65 < N1z < 2` | 1.77535 | Pass |
| 18 | `40 < ν1z < 60` | 50.30 | Pass |
| 19 | `2 < N1z+0.01ν1z < 3` | 2.27835 | Pass |
| 20 | `7 < ν1z-νL1 < 40` | 29.41 | Pass |
| 21 | `0.02 < NL1-N1z < 0.4` | 0.14751 | Pass |
| 22 | `0.5 < f1/f1z < 1.5` | 0.733367 | Pass |
| 23 | `8 < νAn-νAp < 30` | 16.99 | Pass |
| 24 | `-9 < (RAnf+RApr)/(RAnf-RApr) < -3` | -6.25574 | Pass |
| 25 | `-0.95 < f1/fL1 < -0.3` | -0.443003 | Pass |
| 26 | `2 < f1/fw < 5` | 3.53966 | Pass |
| 27 | `0.7 < f1/sqrt(fw ft) < 2.7` | 1.41027 | Pass |
| 28 | `0.1 < fB/fGz < 1` | 0.294526 | Pass |
| 29 | `-1 < fAw/fw < -0.3` | -0.645726 | Pass |
| 30 | `0.3 < (βAt/βAw)/(ft/fw) < 0.8` | 0.489082 | Pass |
| 31 | `0.3 < enp/sqrt(fw ft) < 1` | 0.594199 | Pass |
| 32 | `0.2 < DDG1STw/TLw < 0.6` | 0.433901 | Pass |
| 33 | `0.6 < STw/STt < 1` | 0.868150 | Pass |
| 34 | `1.5 < ED1/EDz < 3` | 2.01191 | Pass |
| 35 | `60 < νBpave < 85` | 77.98 | Pass |
| 36 | `11 < νGFnave-νGFpave < 30` | 22.21 | Pass |
| 37 | `-0.2 < NGFnave-NGFpave < -0.01` | -0.11401 | Pass |
| 38 | `1.495 < NL2 < 1.56` | 1.59283 | **Not satisfied** |
| 39 | `65 < νL2 < 75` | 68.63 | Pass |
| 40 | `2.18 < NL2+0.01νL2 < 2.5` | 2.27913 | Pass |
| 41 | `0.645 < θL2+0.001625νL2 < 0.66` | 0.654384 | Pass |
| 42 | `1.72 < NA2n < 1.8` | 1.77535 | Pass |
| 43 | `43 < νA2n < 57` | 50.30 | Pass |
| 44 | `2.21 < NA2n+0.01νA2n < 2.37` | 2.27835 | Pass |
| 45 | `0.63 < θA2n+0.001625νA2n < 0.66` | 0.631778 | Pass |
| 46 | `1.72 < NGFn < 1.8` | 1.78799 | Pass |
| 47 | `43 < νGFn < 57` | 47.47 | Pass |
| 48 | `2.21 < NGFn+0.01νGFn < 2.37` | 2.26269 | Pass |
| 49 | `0.63 < θGFn+0.001625νGFn < 0.66` | 0.630599 | Pass |
| 50 | `0.3 < fAw/fGF < 0.8` | 0.476052 | Pass |
| 51 | `0.15 < abs(DDfft/DDf) < 0.5` | 0.260042 | Pass |
| 52 | `-4 < fGz/fGF < -2` | -2.49471 | Pass |
| 53 | `0.5 < Bfw/IHw < 2` | 1.66638 | Pass |
| 54 | `3 < ft/fw < 100` | 6.29967 | Pass |
| 55 | `-35 < (R2r+R1f)/(R2r-R1f) < -1` | 1.00000 | **Not satisfied** |
| 56 | `55 < νAwnave < 102` | 45.54 | **Not satisfied** |
| 57 | `1 < (Rp+Rn)/(Rp-Rn) < 10` | 2.05994 | Pass |
| 58 | `-1.4 < (APLp+APLn)/2 < 0` | -1.00181 | Pass |

Conditions (38), (55), and (56) lie outside their printed primary intervals for Example 1, but the independently calculated values reproduce Tables 109-110. Paragraph 0436 states that the later tables list the corresponding values for Examples 1-36; it does not state that every numerical example satisfies every optional refinement. These three rows are therefore retained as genuine non-satisfied optional conditions rather than treated as prescription errors.

For condition (55), Example 1's relevant second-lens rear surface is planar, making the analytic ratio limit +1. For condition (58), Figure 5 identifies `SAn` with the object-side surface of L22 and `SAp` with the image-side surface of L24; the computed mean aplanatic expression is -1.00181, matching Table 110.

## Verification Summary

Independent calculation from the authored TypeScript arrays confirms the load-bearing first-order and geometry quantities used above. The calculation parses the authored prescription arrays directly.

| Check | Result |
|---|---:|
| Wide infinity EFL | 18.544395860 mm |
| Patent wide f | 18.544 mm |
| Tele infinity EFL | 116.823552800 mm |
| Patent tele f | 116.830 mm |
| Wide computed BFD | 24.829048674 mm |
| Tele computed BFD | 24.825694248 mm |
| Authored air-equivalent rear spacing | 24.829538095 mm |
| Petzval sum `Σφ/(n·n′)` | 0.002682204958 mm⁻¹ |
| Petzval reciprocal | 372.827586 mm |
| Minimum verified element edge thickness | 1.181609 mm at L41 |
| Maximum aspheric rim-slope angle | 45.850741° at 7A |
| Tightest shared-gap separation fraction | 0.179010 at 7A→8 |
| Exact modeled wide/tele stop ratio | 0.868150 |
| Reconstructed wide close MFD | 0.600000 m |
| Reconstructed tele close MFD | 0.600000 m |

Reduced-angle sequential tracing was cross-checked against an independently formulated angle-coordinate ABCD matrix; the maximum matrix residual is approximately 5.68 × 10^-14. The authored arrays reproduce the same wide and tele EFLs and the same surface-by-surface Petzval sum.

The geometry checks use the current actual-rim-slope and shared-band cross-gap criteria rather than the obsolete universal `sd/|R|` rule. All authored element edge thicknesses remain positive, all six aspheres are within their applicable conic domains, and every authored zoom/focus keyframe satisfies the independent shared-gap policy check.

## Sources / References

### Primary patent source

- **JP 2023-033114 A**, *Zoom Lens and Imaging Apparatus* (`ズームレンズおよび撮像装置`), FUJIFILM Corporation, published 2023-03-09. Example 1 Tables 1-3 provide the prescription, zoom/focus spacings, and asphere coefficients; Tables 109-110 provide the corresponding conditional-expression values. Architecture and movement are described in ¶0082-¶0118.

### Manufacturer sources

- FUJIFILM, **XF18-120mmF4 LM PZ WR Specifications**: https://www.fujifilm-x.com/en-us/products/lenses/xf18-120mmf4-lm-pz-wr/specifications/\
  Used for marketed 18-120 mm focal range, f/4 aperture, 15-element/12-group construction, 3 aspherical and 3 ED elements, 0.6 m minimum focus, and 0.2× tele magnification.
- FUJIFILM, **Fujifilm Announces FUJINON XF18-120mmF4 LM PZ WR**, 2022-05-31: https://www.fujifilm-x.com/en-sg/news/fujifilm-announces-fujinon-xf18-120mmf4-lm-pz-wr/\
  Used for X-Series/XF product identity, power-zoom positioning, announcement date, and September 2022 launch timing.
- FUJIFILM, **XF18-120mmF4 LM PZ WR Owner's Manual**: https://dl.fujifilm-x.com/support/manual/lenses/lens_xf18-120mmf4_lm_pz_wr_manual_02.pdf\
  Used for the manufacturer's linear-motor focusing statement and production specification cross-checks.

### Glass-coordinate catalog sources

The patent does not name glass suppliers. Supplier-neutral annotations were retained after coordinate checks against the official catalog resources of OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM. Those catalog comparisons support the use of coordinate classes and qualified proxies; they are not claims that the production lens uses a particular vendor's glass.

- OHARA: https://oharacorp.com/optical-glass/
- HOYA: https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- HIKARI: https://www.hikari-g.co.jp/optical_glass/catalog/
- SUMITA: https://www.sumita-opt.co.jp/en/download/
- CDGM: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database

The H-LaK77 dispersion polynomial is sourced from the [NHG optical glass catalog, October 2024, printed page 108](https://hbnhg.com/uploadfiles/2024/10/NHG产品数据手册%20202410.pdf). The patent θgF remains authoritative at the g-line; the catalog curve supplies the remaining wavelength dependence.

### Patent-rim review — 2026-09-12 UTC

JP2023033114A.pdf, page 180, Figs. 1–2 was visually inspected at 600 dpi. The published ED/2 apertures were retained. The 600-dpi section agrees at the optical rims; the large apparent G2/G4 automated readings follow leaders, brackets, or mounting steps rather than the curved optical extent. Surface validation and image-circle audits pass.
