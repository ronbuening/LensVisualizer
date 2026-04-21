# Nikon NIKKOR Z 24-120mm f/4 S — Optical Analysis

**Patent:** WO 2022/259649 A1 (PCT/JP2022/008965)
**Priority:** JP 2021-096938, filed 9 June 2021
**Published:** 15 December 2022
**Inventors:** Ono Takuro, Machida Kosuke, Makida Ayumu, Tsubonoya Keisuke
**Assignee:** Nikon Corporation
**Design Example:** Example 5 (Table 5, Figures 9–10)

---

## 1. Overview

The NIKKOR Z 24-120mm f/4 S is a constant-aperture 5× zoom for the Nikon Z mount, covering a 24–120 mm focal range at f/4 across the full zoom travel. Nikon markets it as an S-Line optic — their premium tier — and lists the construction as **16 elements in 13 groups**, incorporating 3 ED (Extra-low Dispersion) glass elements, 1 aspherical ED glass element, and 3 aspherical elements. It uses ARNEO Coat and Nano Crystal Coat for flare suppression, a fluorine-coated front element, and an internal multi-focus system driven by dual stepping motors.

Example 5 in the patent filing corresponds to this production design. The patent prescription gives a wide-angle EFL of 24.70 mm, a telephoto EFL of 116.50 mm, and f-numbers of f/4.00 (wide) and f/4.12 (tele) — closely matching the marketed 24–120 mm f/4 specification. These EFLs have been independently verified by paraxial ray trace (ABCD matrix / y-nu method) and match the patent's stated values to within rounding precision (computed: 24.6997 mm and 116.4998 mm).

The 16 production elements yield 13 air-separated groups. However, the patent describes the design in terms of 7 *zoom groups* — units that move together during zooming — which is a different and coarser grouping. This distinction matters: the patent's G1–G7 are zoom-group designations, not the 13 optically air-separated groups that Nikon counts in its marketing specifications.

---

## 2. Design Parameters (Example 5)

| Parameter | Wide | Tele |
|-----------|------|------|
| Focal length (design) | 24.70 mm | 116.50 mm |
| f-number (design) | f/4.00 | f/4.12 |
| Zoom ratio | 4.72× | |
| Total track length | 130.96 mm | 185.96 mm |
| Back focal distance | 13.555 mm | 45.147 mm |
| Half-field angle | 41.2° | 10.5° |
| Petzval sum | 0.001689 mm⁻¹ | |
| Petzval radius | −592 mm | |

The total track length changes by approximately 55 mm from wide to tele, consistent with the externally-telescoping zoom barrel visible in the production lens. The very long Petzval radius (−592 mm) indicates well-corrected field curvature — a signature of careful glass selection and group power balancing across the seven zoom groups. The patent's aberration plots also include evaluation at a mid-zoom position of f ≈ 69.98 mm (Figure 10B), confirming the intermediate-focal-length performance.

---

## 3. Zoom Group Architecture

The seven zoom groups, their patent-stated focal lengths, and their constituent elements are:

### G1 — Front Positive Group (f = +136.58 mm)

**Elements:** L11 + L12 (cemented doublet)
**Surfaces:** 1–3

G1 is a cemented positive doublet comprising a negative meniscus (L11, convex toward the object) bonded to a positive meniscus (L12, also convex toward the object). Its long positive focal length means it contributes gentle convergence at wide angle while primarily serving as a field lens at longer focal lengths. In a retrofocus-derived wide-zoom design, G1 sits furthest from the stop and handles the widest beam diameters, so the high-index glasses used in L11 and L12 (nd = 1.9037 and 1.6180, respectively) help contain element diameters and sag.

By cementing L11 and L12, Nikon eliminates an air gap and its attendant ghost reflections while simultaneously correcting lateral chromatic aberration across the large entrance pupil. The strong dispersion difference between L11 (νd = 31.27, high dispersion) and L12 (νd = 63.34, moderate dispersion) creates an effective achromatic corrector at the front of the system. The junction surface semi-diameter is constrained to approximately 27 mm by L12's edge thickness requirement, while L11's front surface extends to approximately 33 mm to accommodate the full tele-end marginal beam.

### G2 — Variator Group (f = −24.06 mm)

**Elements:** L21, L22, L23, L24 (four air-spaced singlets)
**Surfaces:** 4–11

G2 is the primary variator — the negative group that moves the most during zooming and provides the majority of the magnification change. Its short negative focal length (−24.06 mm) makes it the most powerful group in the system. It travels approximately 45 mm along the axis between wide and tele positions (d3 changes from 1.525 mm to 46.708 mm, while d11 changes from 24.145 mm to 2.370 mm).

The four elements are:

- **L21** (nd = 1.77503, νd = 47.31, f ≈ −27.8 mm): A negative meniscus with an aspherical front surface (*4). The base radius of 8892 mm is nearly flat — at the estimated production clear aperture (sd ≈ 13 mm), the base sphere contributes only ~10 µm of sag while the polynomial terms generate ~165 µm of aspherical departure. However, at wide angle the beam footprint on L21 extends much further due to the large chief ray, and at the full wide-angle envelope (sd ≈ 25 mm), the polynomial terms produce approximately 4 mm of departure — effectively defining the entire surface figure. This makes L21 a precision-glass-molded aspherical corrector plate, conceptually similar to a Schmidt corrector, that pre-conditions the beam to manage field-dependent aberrations such as astigmatism and distortion across the zoom range.

- **L22** (nd = 1.83400, νd = 37.18, f ≈ −54.4 mm): A biconcave negative lens providing strong divergence. The high-index lanthanum glass keeps the surface curvatures moderate despite the strong negative power.

- **L23** (nd = 1.85451, νd = 25.15, f ≈ +35.2 mm): A biconvex positive element in very high-dispersion glass, tagged **P1** in the patent (satisfying conditional expression (23): νdP1 < 45). This is the chromatic aberration corrector within the variator. By placing a high-dispersion positive element adjacent to the lower-dispersion negatives, Nikon creates an air-spaced achromatic pair (L22 + L23) that corrects both the Petzval contribution and the chromatic variation of G2's strong negative power. The symmetric curvature (R = ±60.170 mm) helps minimize coma generation.

- **L24** (nd = 1.49782, νd = 82.57, f ≈ −69.2 mm): A negative meniscus in **S-FPL53** (fluorophosphate ED glass), tagged **N** in the patent (satisfying conditional expression (24): νdN > 60). This is the first of three S-FPL53 elements in the design. Its role is to correct secondary (residual) chromatic aberration that the conventional doublet structure of L22+L23 cannot eliminate. The extremely high Abbe number and anomalous partial dispersion of S-FPL53 make it uniquely effective at suppressing secondary spectrum.

### G3 — First Relay Group (f = +59.44 mm)

**Elements:** L31, L32 (two air-spaced singlets)
**Surfaces:** 13–16

G3 sits immediately behind the aperture stop and acts as the first positive relay group in the rear assembly. The stop's spacing to L31 (d = 0.880 mm) is fixed — not a variable gap — meaning the aperture diaphragm is physically mounted in the G3 barrel assembly and moves with it during zooming.

- **L31** (nd = 1.59306, νd = 66.97, f ≈ +78.9 mm): A positive meniscus with an aspherical front surface (*13), tagged **P2** in the patent. Its aspherical departure (approximately −242 µm at the estimated sd of 13.5 mm) corrects spherical aberration generated by the f/4 axial beam passing through the stop region. The negative departure (surface becomes flatter toward the edge) reduces marginal ray refraction and tames overcorrected spherical aberration from the preceding elements.

- **L32** (nd = 1.61800, νd = 63.34, f ≈ +256.9 mm): A weak positive meniscus, also tagged **P2**. L32 shares the same glass as L12 (S-PHM52 or equivalent) and adds mild convergence to the relay.

### G4 — Second Relay Group (f = +67.49 mm)

**Elements:** L41, L42 + L43 (cemented doublet)
**Surfaces:** 17–21

G4 is the second positive relay group, with total focal length of +67.49 mm — close to G3's, creating a near-symmetric positive relay pair behind the stop.

- **L41** (nd = 1.49782, νd = 82.57, f ≈ +51.8 mm): A biconvex positive lens in **S-FPL53** (ED glass), tagged **P2**. This is the second S-FPL53 element. Its very low dispersion minimizes chromatic contribution from its strong positive power, and its anomalous partial dispersion helps suppress secondary spectrum.

- **L42** (nd = 1.90043, νd = 37.38, f ≈ −30.6 mm): A negative meniscus bonded to L43. Its primary role in the cemented doublet is chromatic rather than refractive: the moderate Abbe number (νd = 37.38) provides the dispersive counterbalance to L43's extremely low dispersion.

- **L43** (nd = 1.49782, νd = 82.57, f ≈ +36.4 mm): A positive meniscus in **S-FPL53** (ED glass), tagged **P2**. Together, L42 + L43 form a cemented doublet with a combined thin-lens focal length of approximately −194 mm. While weakly negative overall, the true purpose of this pair is chromatic: the enormous Abbe number contrast (37.38 vs. 82.57, Δνd ≈ 45) generates controlled negative chromatism to compensate for the positive chromatism of the upstream relay elements. The junction surface at R = 17.933 mm is strongly curved and limits the doublet's clear aperture to approximately 13.4 mm semi-diameter.

### G5 — First Focus Group (f = +135.76 mm)

**Elements:** L51, L52 (two air-spaced singlets)
**Surfaces:** 22–25

G5 is the first of two internal-focus groups. During close focusing, G5 moves toward the object side. Its long positive focal length (+135.76 mm) means it introduces only mild convergence, minimizing aberration sensitivity to focus position.

- **L51** (nd = 1.78472, νd = 25.64, f ≈ −77.4 mm): A negative meniscus (concave toward the object). Despite being in a positively powered group, L51 is individually negative. Its very high-dispersion glass (consistent with OHARA S-TIM25) works as a chromatic corrector within G5.

- **L52** (nd = 1.77250, νd = 49.62, f ≈ +51.6 mm): A biconvex positive element providing the group's net positive power. The glass code (1.77250/49.62) is consistent with the OHARA S-LAM66 family.

### G6 — Second Focus Group (f = +79.64 mm)

**Elements:** L61 (single element)
**Surfaces:** 26–27

G6 is a single positive meniscus (concave toward the object) that serves as the second internal-focus group. It also moves toward the object during close focusing, working in tandem with G5 to maintain image quality across the focus range.

- **L61** (nd = 1.55332, νd = 71.67, f ≈ +80.2 mm): This is the **aspherical ED element** — the single element that combines both aspherical figuring and ED-class glass. Its glass code is an excellent match for **HOYA M-FCD500**, a mold-compatible fluorophosphate crown specifically designed for precision glass molding. The rear surface (*27) carries the aspherical profile, with approximately +419 µm of departure at the estimated sd of 12.8 mm. The choice to use moldable ED glass combines chromatic and wavefront correction in one precision-molded element, saving weight and an air–glass interface.

### G7 — Rear Negative Group (f = −38.93 mm)

**Elements:** L71 + L72 (cemented doublet)
**Surfaces:** 28–30

G7 is the final zoom group — a cemented negative doublet that acts as a negative relay/field-flattener at the rear of the system.

- **L71** (nd = 1.77503, νd = 47.31, f ≈ −25.8 mm): A biconcave negative element with an aspherical front surface (*28). The aspherical departure is small (approximately +28 µm at sd 12.3 mm), fine-tuning the wavefront in the converging beam just before the image plane. The same glass (1.77503/47.31) appears in L21, suggesting it is a precision-moldable lanthanum crown suitable for PGM.

- **L72** (nd = 1.92286, νd = 20.88, f ≈ +74.7 mm): A positive meniscus in extremely high-dispersion glass, tagged **P1**. The glass code matches **OHARA S-NPH2**, a dense flint with one of the highest refractive indices and lowest Abbe numbers in commercial production. Paired with L71 in the cemented doublet, the extreme Abbe number contrast (47.31 vs. 20.88, Δνd ≈ 26) provides a final stage of lateral color correction for off-axis beams at the image end.

---

## 4. Aspherical Surfaces

Four surfaces in Example 5 are aspherical, distributed across three zones of the lens. All use K = 0 (spherical base) with even-order polynomial corrections. Surfaces *4 and *28 carry coefficients through A14; surfaces *13 and *27 carry coefficients through A10 only.

| Surface | Element | Position | Key Coefficient | Departure (est. SD) |
|---------|---------|----------|-----------------|---------------------|
| *4 | L21 front | G2 variator | A4 = +6.78 × 10⁻⁶ | +165 µm @ 13.0 mm; ~+4040 µm @ 25 mm (wide beam) |
| *13 | L31 front | G3 relay | A4 = −7.33 × 10⁻⁶ | −242 µm @ 13.5 mm |
| *27 | L61 rear | G6 focus | A4 = +1.69 × 10⁻⁵ | +419 µm @ 12.8 mm |
| *28 | L71 front | G7 rear | A4 = +2.41 × 10⁻⁶ | +28 µm @ 12.3 mm |

**Surface *4 (L21)** is noteworthy for the dramatic variation of its aspherical departure with beam footprint. At the estimated tele-position clear aperture (sd ≈ 13 mm), the departure is modest (~165 µm). But at wide angle, where the chief ray sweeps across a much larger region of the surface, the beam footprint extends to approximately 25 mm and the departure reaches ~4 mm — effectively defining the entire surface figure. This is a hallmark of modern precision glass molding: the nearly flat base radius (R = 8892 mm) allows the polynomial terms to impose a complex, field-dependent wavefront correction without strong base curvature.

**Surface *13 (L31)** has a negative departure, meaning the surface becomes progressively flatter than a sphere toward the edge. This is a textbook spherical aberration corrector for the axial beam near the stop.

**Surface *27 (L61)** has the second-largest departure. As the sole element in G6 (the second focusing group), the aspherical rear surface provides field-dependent corrections that remain effective as the element translates during focusing.

**Surface *28 (L71)** has the smallest departure (~28 µm) — a fine wavefront trim on the converging beam entering the final cemented doublet.

---

## 5. Glass Material Identification

The following table summarizes the inferred glass identifications. Glasses labeled "confident" match catalog entries to better than ±0.0005 in nd and ±0.5 in νd. Those labeled "likely" are the closest catalog match with a small residual.

| Element | nd | νd | Inferred Glass | Confidence | Notes |
|---------|------|------|----------------|------------|-------|
| L11 | 1.903660 | 31.27 | S-LAH79 (OHARA) | Confident | Dense lanthanum flint |
| L12 | 1.618000 | 63.34 | S-PHM52 (OHARA) | Confident | Phosphate crown |
| L21 | 1.775030 | 47.31 | Moldable lanthanum crown | Uncertain | No exact catalog match; nearest is HOYA M-TAFD305 (1.77377/47.17) |
| L22 | 1.834000 | 37.18 | S-LAH66 (OHARA) | Confident | Dense lanthanum flint |
| L23 | 1.854510 | 25.15 | S-TIM35 (OHARA) or K-VC89 (Sumita) | Likely | Very high-dispersion titanium flint |
| L24 | 1.497820 | 82.57 | **S-FPL53 (OHARA)** | Confident | Fluorophosphate ED glass |
| L31 | 1.593060 | 66.97 | Moldable phosphate crown | Uncertain | No exact catalog match; aspherical, requires mold glass |
| L32 | 1.618000 | 63.34 | S-PHM52 (OHARA) | Confident | Same glass as L12 |
| L41 | 1.497820 | 82.57 | **S-FPL53 (OHARA)** | Confident | Fluorophosphate ED glass |
| L42 | 1.900430 | 37.38 | S-LAH58 (OHARA) | Likely | Dense lanthanum flint |
| L43 | 1.497820 | 82.57 | **S-FPL53 (OHARA)** | Confident | Fluorophosphate ED glass |
| L51 | 1.784720 | 25.64 | S-TIM25 (OHARA) | Likely | High-dispersion titanium flint |
| L52 | 1.772500 | 49.62 | S-LAM66 (OHARA) | Likely | Lanthanum crown |
| L61 | 1.553320 | 71.67 | **HOYA M-FCD500** | Confident | Moldable fluorophosphate ED glass |
| L71 | 1.775030 | 47.31 | Same mold glass as L21 | Uncertain | Aspherical — shares glass with L21 |
| L72 | 1.922860 | 20.88 | S-NPH2 (OHARA) | Confident | Ultra-high-dispersion dense flint |

### Glass Strategy Summary

The design employs three primary families of glass:

1. **ED fluorophosphates** (L24, L41, L43 = S-FPL53; L61 = M-FCD500): These four elements provide the secondary chromatic correction that enables the lens to maintain low axial color from 24 mm to 120 mm. S-FPL53 is the premier conventional ED glass; M-FCD500 provides equivalent ED performance in a mold-compatible formulation.

2. **High-dispersion flints** (L23, L72 = P1 elements; L51): These elements sit adjacent to the ED elements and provide the dispersive counterbalance needed for the achromatic corrections. The extreme Abbe number contrasts (e.g., L23 at νd = 25.15 paired near L24 at νd = 82.57, a Δνd of 57) generate the large chromatic leverage required to correct a 5× zoom.

3. **Dense lanthanum crowns and flints** (L11, L22, L42, L52): High-index glasses that provide optical power in compact element geometries, minimizing element diameters and total track length.

---

## 6. Focus Mechanism

Focusing is performed by **G5 (L51 + L52) and G6 (L61)**, which move along the optical axis independently as an internal multi-focus system. The patent description ([0254]) states that when focusing from infinity to a close-range object, both G5 and G6 move from the image side toward the object side.

The variable spacing data from the patent shows the zoom-dependent gaps surrounding the focus groups at infinity:

| Gap | Wide/∞ | Tele/∞ |
|-----|--------|--------|
| d25 (after G5) | 2.000 | 5.177 |
| d27 (after G6) | 9.107 | 1.773 |

The patent provides only infinity-focus spacings for each zoom position. Close-focus data is not given in Example 5, which limits the ability to characterize the exact focus travel. However, the dual-group internal focus architecture is clear: by moving two groups independently during focus, Nikon can correct aberrations (particularly field curvature and spherical aberration) that would shift if only a single group moved. This is what Nikon designates "Multi-Focus System" (Multi-FS) in their marketing.

The production lens achieves a minimum focus distance of 0.35 m with a maximum reproduction ratio of 0.39× — remarkably high for a general-purpose zoom. This impressive close-focus performance is enabled by the large available travel of G5 and G6 within the barrel, and by the aspherical ED element L61 in G6.

---

## 7. Zoom Mechanism

The seven zoom groups move in a complex cam pattern. The variable spacing data at the two extreme zoom positions is:

| Gap | Description | Wide (24.70 mm) | Tele (116.50 mm) | Change |
|-----|-------------|-----------------|-------------------|--------|
| d3 | G1 → G2 | 1.525 | 46.708 | +45.183 |
| d11 | G2 → Stop/G3 | 24.145 | 2.370 | −21.775 |
| d16 | G3 → G4 | 9.007 | 1.400 | −7.607 |
| d21 | G4 → G5 | 6.277 | 18.040 | +11.763 |
| d25 | G5 → G6 | 2.000 | 5.177 | +3.177 |
| d27 | G6 → G7 | 9.107 | 1.773 | −7.334 |
| Bf | G7 → Image | 13.555 | 45.147 | +31.592 |
| **Total var.** | | **65.616** | **120.615** | **+54.999** |

The total variable gap sum increases by approximately 55 mm from wide to tele, confirming that the lens barrel extends during zooming (not an internally compensated zoom). The dominant motion is G2 moving away from G1 — d3 increases by 45 mm — which is the primary variator action. Simultaneously, G2 moves toward G3 (d11 decreases by 22 mm), concentrating the converging beam into the rear groups.

The patent provides variable spacing data at only two zoom positions (wide and tele). Aberration plots at an intermediate focal length of approximately 69.98 mm (Figure 10B) confirm that the design was evaluated at a mid-zoom position, but the corresponding gap data is not tabulated in Example 5.

---

## 8. Conditional Expressions and Design Philosophy

The patent specifies several conditional expressions that Example 5 must satisfy. Two families are particularly illuminating:

### Dispersion Conditions

- **(23)** νdP1 < 45.00 — At least one positive lens in the rear groups must have a low Abbe number (high dispersion).
  - **Satisfied by:** L23 (νd = 25.15) and L72 (νd = 20.88)

- **(24)** νdN > 60.00 — At least one negative lens in the rear groups must have a high Abbe number (low dispersion).
  - **Satisfied by:** L24 (νd = 82.57)

- **(25)** νdP2 > 60.00 — At least one positive lens in the rear groups must have a high Abbe number (low dispersion).
  - **Satisfied by:** L31 (νd = 66.97), L32 (νd = 63.34), L41 (νd = 82.57), L43 (νd = 82.57), L61 (νd = 71.67)

### Group Power Conditions

- **(3)** 8.00 < f1 / D1 < 27.00 — For Example 5, f1 = 136.58 mm and D1 = 1.800 + 9.290 = 11.090 mm, giving f1/D1 = 12.32.

---

## 9. Special Elements Summary

| Count | Type | Elements |
|-------|------|----------|
| 3 | ED glass | L24, L41, L43 (all S-FPL53) |
| 1 | Aspherical ED glass | L61 (HOYA M-FCD500 equivalent) |
| 3 | Aspherical | L21, L31, L71 |
| **7** | **Total special elements** | |

This count of 7 special elements out of 16 total matches Nikon's published specifications exactly. Nearly half the elements in the design are either aspherical, ED glass, or both — an unusually high ratio for a consumer-grade zoom.

---

## 10. Notes and Caveats

1. **Semi-diameters** are not provided in the Example 5 prescription table. Values in the companion data file were estimated via combined marginal and chief ray trace at both zoom positions (60% off-axis field fraction, 8% mechanical clearance), subject to edge thickness ≥ 0.5 mm and cross-gap sag overlap constraints. The front group G1 SDs were capped by the 77 mm production filter thread. The L42/L43 cemented doublet junction is constrained to sd ≈ 13.4 mm by L43's edge thickness (the strongly curved junction at R = 17.933 mm limits the clear aperture). Semi-diameters should be treated as indicative rather than precise.

2. **Close-focus variable spacings** are not provided for Example 5. The data file uses identical infinity/close values for all variable gaps. The actual close-focus cam trajectory cannot be characterized from the available data.

3. **Glass identifications** marked "uncertain" use glasses without exact catalog matches. These may be proprietary mold-compatible formulations developed by the glass manufacturer for Nikon. The L21/L71 glass (1.77503/47.31) is particularly notable: it appears twice in the design, both times on aspherical surfaces, strongly suggesting a PGM-specific formulation.

4. **Zoom positions:** The patent provides variable gap data at only two positions (wide and tele). The data file uses `zoomPositions: [24.70, 116.50]` with piecewise-linear interpolation. The production lens's zoom cam may include intermediate control points to handle non-monotonic group motions, which cannot be determined from the two-position data.

5. **Manufacturing methods**: The P1 and P2 tags in the patent's prescription table refer to dispersion conditional expressions (23) and (25), *not* to manufacturing processes. However, the glass choices for the four aspherical elements (L21, L31, L61, L71) strongly suggest precision glass molding (PGM) — all four use glasses with optical properties consistent with known mold-compatible formulations.

6. **Aperture stop behavior across zoom:** The physical iris diaphragm moves with G3 and the optics between the stop and the entrance pupil (principally G2's strong negative power) change dramatically during zooming. At wide angle, G2 sits far from the stop (d11 = 24.145 mm) and its divergent power makes the entrance pupil much smaller than the physical stop opening. At tele, G2 is compressed against the stop (d11 = 2.370 mm) and barely affects the pupil magnification, so the entrance pupil is close to the physical stop size. This mechanism enables the approximately constant f/4 aperture across the 4.72× zoom range.
