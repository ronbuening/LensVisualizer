# Canon EF 28–80mm f/3.5–5.6 II — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,899,585\
**Application Number:** 08/889,453\
**Priority:** JP 8-182041, July 11, 1996\
**Filed:** July 8, 1997\
**Granted:** May 4, 1999\
**Inventor:** Hideki Ogawa\
**Assignee:** Canon Inc. (source form: Canon Kabushiki Kaisha)\
**Title:** _Compact Wide-Angle Zoom Lens_\
**Example details:** Numerical Example 1, PDF page 9 / printed column 6; Figure 1(A–C), PDF page 2 / sheet 1 of 5 (shared schematic for Examples 1–4); Figure 2(A–C), PDF page 3 / sheet 2 of 5

The prescription is correlated with the **CANON EF 28-80mm f/3.5-5.6 II**. The patent does not name the retail lens, and Canon does not publish a patent-to-product cross-reference, so the identification remains an author-established production correlation rather than a manufacturer-confirmed factory prescription.

1. Numerical Example 1 has ten elements in ten air-spaced groups, matching Canon's published 10/10 construction.
2. Its patent focal states are 28.98, 50.00, and 77.08 mm; independent paraxial calculation gives 28.968918, 49.959942, and 76.961180 mm, consistent with the marketed 28–80 mm range.
3. The patent states f/3.46, f/4.51, and f/5.88. The wide state agrees closely with the marketed f/3.5; the prescription's tele state is retained rather than forcing the rounded f/5.6 product marking.
4. Combining the computed EFLs with the patent half-fields gives image semi-heights of 21.628, 21.620, and 21.604 mm, consistent with the 21.63 mm half-diagonal of the 24 × 36 mm format.
5. The patent assigns focusing to the complete first unit, consistent with Canon's front-group focus description, and its 1996 priority date precedes the product's April 1999 market introduction.

| Quantity              | Production / marketing value |                     Modeled value or status |
| --------------------- | ---------------------------: | ------------------------------------------: |
| Focal length          |                     28–80 mm |        28.968918 / 49.959942 / 76.961180 mm |
| Maximum aperture      |                    f/3.5–5.6 |          Patent states f/3.46 / 4.51 / 5.88 |
| Closest focus         |                       0.38 m | No finite-focus optical state reconstructed |
| Maximum magnification |                        0.26× |                Identification evidence only |
| Construction          |      10 elements / 10 groups |       10 air-spaced elements; all spherical |
| Mount / format        |        Canon EF / 24 × 36 mm |               `canon-ef` / `135-full-frame` |
| Linear scaling        |                            — |                        None; `s = 1.000000` |

The product's f/5.6 marking is not imposed on the exact patent prescription. At the tele state, f/5.6 would require an approximately 8.9819 mm physical stop semi-diameter. The earlier axial diagnostic placed that ray outside the modeled stop and the retained 8.3 mm S13 clear cap; S14 is now 10.5 mm after the source-outline review. The directly printed f/5.88 remains authoritative independently of that diagnostic. The data therefore retains the patent f/5.88 state while preserving f/3.5–5.6 as product metadata.

## Optical Architecture

The 2026-10-30 original-PDF review retains the numerical prescription and controls. Figure 1 is explicitly a shared schematic for Numerical Examples 1–4, so its outline proportions do not establish exact Example 1 mechanical dimensions. All ten elements are spherical and air-spaced; no cemented interface, resin/hybrid layer, filter or rear plate is tabulated.

The optical system is a **three-unit negative–positive–negative standard zoom**. The ten production groups are the ten individual air-spaced elements; L1, L2, and L3 are functional units at a different structural level.

| Functional unit | Elements | Computed focal length | Motion and principal function                                       |
| --------------- | -------- | --------------------: | ------------------------------------------------------------------- |
| L1              | L11–L14  |         −39.866182 mm | Reversing compensator and patent-specified focus unit               |
| L2              | L21–L24  |         +32.286533 mm | Monotonic objectward variator carrying the principal positive power |
| L3              | L31–L32  |        −569.300696 mm | Stationary weak-negative field-correction unit                      |

L1 contains a weak positive meniscus, two negative elements, and a stronger positive rear meniscus, but remains net negative. L2 contains three positive elements surrounding a strong biconcave negative element and remains strongly positive. L3 is an air-spaced negative-positive pair whose component powers nearly cancel, leaving a weak net-negative unit. The aperture stop is the patent-published plane r11 between L21 and L22. No cemented interface, asphere, cover plate, inactive dummy surface, or flare-cutter plane is retained.

### Zoom kinematics

Coordinates below are measured relative to the fixed front surface of L3, with imageward positive.

| State  | L1 front, surface 1 | L2 front, surface 9 | L3 front, surface 18 |
| ------ | ------------------: | ------------------: | -------------------: |
| Wide   |           −76.66 mm |           −24.35 mm |              0.00 mm |
| Middle |           −70.33 mm |           −39.29 mm |              0.00 mm |
| Tele   |           −79.29 mm |           −58.55 mm |              0.00 mm |

L2 moves monotonically 34.20 mm objectward from wide to tele. L1 first moves 6.33 mm imageward and then 8.96 mm objectward, reproducing the patent's reversing locus. The r1-to-r21 tracks are 82.67, 76.34, and 85.30 mm. With the fixed inferred rear spacing, the r1-to-image tracks are 120.402911, 114.072911, and 123.032911 mm.

### Cardinal classification

The stored total-length-to-EFL ratios are 4.15628, 2.28329, and 1.59864. All exceed one, so the design is not telephoto at any modeled state. At wide, BFD/EFL is 1.30253 and the architecture is negative-leading, supporting a retrofocus classification only at that endpoint. The middle and tele BFD/EFL ratios are 0.75526 and 0.49028.

## Element-by-Element Analysis

The original defines only $n_i/ν_i$ without a spectral reference (column 6). The `nd/νd` notation below is the retained approximate d-line tracing convention; all ten media are explicitly Unmatched. Earlier named OHARA comparisons are conditional and no catalog dispersion curve is active. Each focal length below is the independently calculated thick-element focal length **alone in air**. It is not the element's in-situ contribution within the complete zoom.

### L11 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: Unmatched (prior S-BSL7 / OHARA comparison conditional). Standalone f = +273.983442 mm.`

L11 is a weak positive front meniscus. Its modest standalone power shapes the entering bundle and supports the distortion-control role that the patent assigns to the first positive lens of L1.

### L12 — Negative Meniscus

`nd = 1.70154, νd = 41.2. Glass: Unmatched (prior S-BAH27 / OHARA comparison conditional). Standalone f = −36.355632 mm.`

L12 is the strongest negative member of L1 by standalone focal length. Its strongly concave image-side surface supplies a large part of the first unit's negative power in a compact axial space.

### L13 — Biconcave Negative

`nd = 1.62299, νd = 58.2. Glass: Unmatched (prior S-BSM15 / OHARA comparison conditional). Standalone f = −47.243800 mm.`

L13 shares the negative work of L1 across two surfaces. Its higher Abbe number than L12 and L14 broadens the first unit's ordinary chromatic balancing freedom without establishing an ED or apochromatic function.

### L14 — Positive Meniscus

`nd = 1.76182, νd = 26.5. Glass: Unmatched (prior S-TIH14 / OHARA comparison conditional). Standalone f = +50.374322 mm.`

L14 partially cancels the two negative elements while preserving L1's net-negative sign. Its high-index, high-dispersion class gives the four-element unit additional control over axial and chromatic balance during zooming and front-unit focus.

### L21 — Biconvex Positive

`nd = 1.63854, νd = 55.4. Glass: Unmatched (prior S-BSM18 / OHARA comparison conditional). Standalone f = +37.877067 mm.`

L21 is the leading positive member of L2 and lies immediately before the aperture-stop gap. It provides strong convergence at the entrance of the principal variator and materially influences entrance-pupil imaging.

### L22 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: Unmatched (prior S-BAH11 / OHARA comparison conditional). Standalone f = +52.725250 mm.`

L22 is the first refracting element behind the stop. It distributes the positive power of L2 and participates in the unit-level spherical-aberration variation described by the patent.

### L23 — Biconcave Negative

`nd = 1.78472, νd = 25.7. Glass: Unmatched (prior S-TIH11 / OHARA comparison conditional). Standalone f = −19.029663 mm.`

L23 is the strongest standalone element in the prescription. Its negative power counterbalances the three positive elements of L2, permitting the unit to remain strongly positive without concentrating all convergence in the surrounding surfaces.

### L24 — Biconvex Positive

`nd = 1.58144, νd = 40.8. Glass: Unmatched (prior S-TIL25 / OHARA comparison conditional). Standalone f = +31.621733 mm.`

L24 restores positive power after L23 and controls the vergence delivered to the stationary rear unit. It completes the verified +32.286533 mm net focal length of L2.

### L31 — Biconcave Negative

`nd = 1.63854, νd = 55.4. Glass: Unmatched (prior S-BSM18 / OHARA comparison conditional). Standalone f = −56.675582 mm.`

L31 supplies the negative component of the stationary rear unit. The patent assigns L3 to residual field-curvature correction after the first two units produce opposing field tendencies.

### L32 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: Unmatched (prior S-BAH11 / OHARA comparison conditional). Standalone f = +67.550745 mm.`

L32 is separated from L31 by the patent-published 1.94 mm air gap. The pair is not a cemented doublet; the separation is part of the patent's strategy for shifting the unit principal point and retaining a weak net power.

## Glass Identification and Selection

Column 6 / PDF page 9 defines ni and νi as refractive index and Abbe number, without naming the reference wavelength. Column 2 names d/g in the aberration plots only. All ten original numerical pairs remain unchanged; the default d-line tracing reference is explicitly approximate via `indexReferenceNote`. All ten media are Unmatched and ten previously resolved catalog curves are disabled. This qualifies the missing source reference rather than claiming the conventional d inference is wrong.

| Source index / Abbe | Prior conditional OHARA comparison | Elements  | Disposition |
| ------------------- | ---------------------------------- | --------- | ----------- |
| 1.51633 / 64.1      | S-BSL7                             | L11       | Unmatched   |
| 1.70154 / 41.2      | S-BAH27                            | L12       | Unmatched   |
| 1.62299 / 58.2      | S-BSM15                            | L13       | Unmatched   |
| 1.76182 / 26.5      | S-TIH14                            | L14       | Unmatched   |
| 1.63854 / 55.4      | S-BSM18                            | L21 / L31 | Unmatched   |
| 1.66672 / 48.3      | S-BAH11                            | L22 / L32 | Unmatched   |
| 1.78472 / 25.7      | S-TIH11                            | L23       | Unmatched   |
| 1.58144 / 40.8      | S-TIL25                            | L24       | Unmatched   |

Thirty per-lens C/F/g indices and ten per-lens ΔPgF values were catalog-derived and are removed. The original publishes none of those values, no relative partial-dispersion table and no APD evidence. No genuine published spectral value is removed. A numerical catalog comparison cannot prove historical supplier, melt, chemistry or manufacturing route; the previous table of catalog spectra is no longer presented as source glass content. Production lead-free-glass claims are separate historical product context and do not identify the patent media.

## Focus Mechanism

The patent assigns focusing to the complete first unit L1 while L2 and L3 retain their zoom-state positions. Canon describes the production lens as front-group focusing; the mechanical rotation is a means of producing the axial optical motion.

The patent publishes no finite-focus D8 or D17 values, no worked object distance, and no close-focus magnification state. The data therefore uses **`NO_INTERNAL_RECONSTRUCTION`**. `closeFocusM: 0.38` records Canon's rounded production MFD only and does not validate a particular L1 displacement.

| Zoom state | D8 infinity / close control | D17 infinity / close control |
| ---------- | --------------------------: | ---------------------------: |
| Wide       |            32.88 / 32.88 mm |               3.01 / 3.01 mm |
| Middle     |            11.61 / 11.61 mm |             17.95 / 17.95 mm |
| Tele       |              1.31 / 1.31 mm |             37.21 / 37.21 mm |

The identical pairs deliberately keep the focus control optically neutral. No focus travel or finite-focus magnification is claimed.

## Conditional Expressions

All five patent conditions are satisfied. The ratios using `fT` use the patent's printed tele focal length of 77.08 mm, matching the convention of Table 1.

| Patent condition | Independent value | Patent Table 1 |         Bound | Verdict |
| ---------------- | ----------------: | -------------: | ------------: | ------- | ---------- | ---- |
| `β2W × β2T`      |       1.080883430 |          1.083 |       0.8–1.2 | Pass    |
| `                |                f1 |          / fT` |   0.517205271 | 0.517   | 0.45–0.59  | Pass |
| `f2 / fT`        |       0.418870435 |          0.419 |     0.37–0.43 | Pass    |
| `f2 /            |                f3 |              ` |   0.056712618 | 0.057   | 0.02–0.085 | Pass |
| `d31 / fT`       |       0.025168656 |         0.0252 | 0.0025–0.0625 | Pass    |

The independently reconstructed second-unit magnifications are `β2W = −0.637802861` and `β2T = −1.694698308`. Their product and all four focal-length/separation ratios agree with the intended numerical example within the patent's rounding.

## Original Figure Review — 2026-10-30

The original 2320 × 3408 one-bit page raster is native 300 ppi. Figure 1(A) spans about 994 native pixels over the 82.67 mm Example 1 optical stack, approximately 12.02 axial px/mm. Because the patent shares the same schematic among four different prescriptions, exact cap heights cannot be recovered from one isotropic scale. A practical approximately ±1.5 mm height uncertainty includes schematic and ink uncertainty; enlarged viewing is magnification only. Brackets, movement arrows, stop blades and leaders were excluded.

The long negative L23 body has a resolved rear vertical shoulder in the figure. S14 clear sd is increased from 8.3 to 10.5 mm, conservatively anchored to the preceding L22 front cap and the common drawn outer height. The S15 concave optical cap remains 7.2 mm and `rimExtensionSd: 10.5` supplies the visible outer blank. No equal-height bonded block or opaque interface land is introduced. All other clear caps, source R/d and controls remain unchanged. One shoulder and zero inferred cuts are authored.

Two otherwise visible schematic shoulders are rejected by retained Example 1 geometry. An S4 outer shoulder to 20.5 mm would intrude 9.440 mm into its 9.790 mm source gap to S5, beyond the unchanged 8.811 mm allowance. An S13 outer shoulder to 10.5 mm would intrude 1.039 mm into the 0.980 mm gap to S14, beyond 0.882 mm allowed. Neither is forced by shrinking clear caps, editing R/d or relaxing guards. The actual source-station SVGs therefore retain qualified non-square ends where the shared schematic and literal Example 1 geometry cannot both be reproduced. A larger S15 clear-cap trial at 8.3 mm is also rejected by the original S15–S16 gap; the source-constrained outer blank does not justify extending the optical curve through the next element. No extra S2 shoulder is independently resolved on its nearly flat continuous cap.

## Verification Summary

| Quantity                               |          Wide |        Middle |          Tele |
| -------------------------------------- | ------------: | ------------: | ------------: |
| Computed EFL                           |  28.968918 mm |  49.959942 mm |  76.961180 mm |
| Patent focal-state label               |      28.98 mm |      50.00 mm |      77.08 mm |
| Gaussian BFD from surface 21           |  37.724482 mm |  37.701927 mm |  37.625185 mm |
| Stored fixed BFD                       |  37.732911 mm |  37.732911 mm |  37.732911 mm |
| First principal plane from surface 1   | +40.443899 mm | +36.128819 mm | +28.570781 mm |
| Second principal plane from surface 21 |  +8.755564 mm | −12.258015 mm | −39.335995 mm |
| r1-to-r21 track                        |  82.670000 mm |  76.340000 mm |  85.300000 mm |
| Entrance-pupil semi-diameter           |   4.186260 mm |   5.538796 mm |   6.544318 mm |
| Derived/paraxial iris semi-diameter    |   8.582619 mm |   8.582622 mm |   8.554149 mm |
| Exit-pupil coordinate from surface 21  | −20.377477 mm | −36.025287 mm | −55.014518 mm |
| Modeled wide-open f-number             |          3.46 |          4.51 |          5.88 |

The patent omits the r21-to-image spacing. Its two-decimal zoom gaps yield Gaussian BFD estimates spanning 0.099297 mm even though L3 is stationary. A common-image-plane least-squares recovery gives 37.732910717 mm, stored as 37.732911 mm, while the data retains the printed D8 and D17 values. The stored plane is therefore 0.008429, 0.030984, and 0.107726 mm imageward of the raw Gaussian focus at wide, middle, and tele. This is a disclosed modeling inference, not a correction to the patent table.

The surface-by-surface Petzval sum, using `φ/(n·n′)` at every refracting surface, is `+0.001397834967 mm⁻¹`; its reciprocal radius is `+715.392034 mm`. The inferred apertures give a minimum element edge thickness of 0.149982 mm at L21, a maximum actual spherical rim angle of 53.8627° at surface 4, and a minimum 90%-gap margin of 0.012219 mm between surfaces 13 and 14. No hidden surface trim is required.

Independent exact tracing confirms that representative on-axis and 60%-field bundles pass at wide, middle, and tele, and that the full-field chief ray reaches the image plane at all three states. Some full-field edge-pupil rays are mechanically vignetted, consistent with the deliberately inferred clear apertures. No aspheric departure, conic-height limit, cover glass, cement layer, stabilization state, or finite-focus state applies.

### Runtime zoom and beam limits

A 65-position diagnostic clone reproduces actual runtime z/sd geometry within 3.6×10⁻15 mm at focus 0/0.5/1. Identical infinity/close gaps deliberately provide no finite-focus model, so quantitative optical checks use infinity only. All 65 zoom samples pass the aperture census's 3% beam-clearance criterion and full-frame corner-chief checks. The aperture census computes the paraxial iris f-number (reference focal length × absolute paraxial stop-height ratio / twice iris radius), scaled by the iris-admitted launch radius divided by the largest fully clearing axial launch radius. With iris-limited clearance, that scale is approximately one. Its source-node values are 3.459999997 / 4.509999996 / 5.879999995. This is distinct from `computeWorkingFNumber`, which reads the actual aimed marginal ray as $1/(2n^\prime\sin θ^\prime)$. The latter source-node values are 3.519465815 / 4.640390870 / 6.060981572, or +1.718665% / +2.891150% / +3.077918% relative to nominal. The tele source state exceeds a separate 3% real-working comparison; it is not called a 3% real-working pass. Across 65 actual-geometry zoom samples, all real marginal rays trace, but only 56/65 stay within 3% of the nominal value; nine positions from zoom 0.875 onward exceed 3%, with a maximum +3.080506% at zoom 0.984375. The derived/paraxial iris rule and tolerances remain unchanged. The directly printed source targets 3.46/4.51/5.88 remain; Figure 2 on PDF page 3 prints each one. Derived/paraxial iris authority remains separate from a physical source iris-radius schedule, which is not published.

The source gives three zoom stations and omits a compensator trajectory. Linear intervals remain illustrative and do not preserve focus. The largest 65-position paraxial residual occurs at zoom 0.78125: EFL 61.986601 mm versus displayed 65.232500 mm, and BF 34.988657 mm versus fixed inferred image gap 37.732911 mm, or −2.744254 mm defocus. Source-node residuals −0.008429/−0.030984/−0.107726 mm remain those already disclosed above. No source R/d, gaps or inferred common image plane is tuned to remove them.

At 21 sampled zoom states and eight aperture presets, all 168 real working-ray checks trace successfully, with baseline/candidate results unchanged. A 193-point circular-pupil probe at axial, half-field and corner fields gives identical passing counts before/after at all 63 field states; every axial sample passes, while source-node corner counts are 116/175/163 of 193. This is sampled clearance with retained off-axis vignetting, not full-pupil illumination. At 21 zoom states the renderer produces 210 finite, singly connected, closed element paths with zero hidden trimming; modeled corner aiming reaches about 21.65 mm. Source fidelity, these sampled runtime checks and production correlation are separate conclusions. Existing product/catalog links below are older correlation context, not fresh original-source inspections.

## Sources

1. **US Patent 5,899,585**, Hideki Ogawa, _Compact Wide-Angle Zoom Lens_, granted May 4, 1999. Numerical Example 1 is on PDF page 9 / printed column 6; Table 1 is on PDF page 10 / column 8; Figure 1 is PDF page 2 and Figure 2 is PDF page 3. Local `patents/US5899585.pdf`, SHA-256 `fe76f622bda4424367b7d4f7e8dc7485ceaf321fa218e9e9b3ad293411e3156f`, inspected 2026-10-30.
2. **Canon Camera Museum**, [EF28-80mm f/3.5-5.6 II](https://global.canon/en/c-museum/product/ef347.html). Production construction, market date, MFD, magnification, aperture blades, filter size, dimensions, drive description, and lead-free-glass statement.
3. **Canon U.S.A. Support**, [EF 28-80mm f/3.5-5.6 II](https://www.usa.canon.com/support/p/ef-28-80mm-f-3-5-5-6-ii). Front-group rotating focus and micromotor description.
4. **OHARA**, [Optical Glass Catalog](https://www.ohara-inc.co.jp/en/product/optical-glass/). Current catalog identities, line indices, Abbe values, and dispersion coefficients. Catalog equivalence does not establish Canon's historical supplier.
