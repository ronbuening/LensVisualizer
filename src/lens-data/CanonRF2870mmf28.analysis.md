# Canon RF 28-70mm F2.8 IS STM — Optical Design Analysis

**Patent:** US 2024/0329367 A1 (Pub. Oct 3, 2024)
**Inventor:** Yasuaki Hagiwara (Canon Kabushiki Kaisha)
**Priority:** JP 2023-051695 (Mar 28, 2023)
**Embodiment analyzed:** First Numerical Example (§0083)

---

## 1. Design Overview

The Canon RF 28-70mm F2.8 IS STM is a compact, constant-aperture standard zoom designed for Canon's RF-mount mirrorless system. According to Canon's first-party specifications, the production lens comprises **15 elements in 12 groups**, including **2 UD (Ultra-low Dispersion) elements** and **2 GMo (Glass-Molded) aspherical elements**, with a 9-blade circular aperture diaphragm. The lens is a retractable design, collapsing to 92.2 mm for transport.

The first numerical example in the patent describes a zoom system with a **2.36× zoom ratio** spanning 28.80–67.90 mm at f/2.88–2.92. The zoom structure consists of seven independently movable lens units organized into four functional groups:

- **B1** (positive, f = +135.53 mm) — 1 element, the front collecting group
- **B2** (negative, f = −27.10 mm) — 4 elements, the variator
- **Bm** (intermediate group containing the aperture stop):
  - **B3** (positive, f = +51.68 mm) — 3 elements (includes stop)
  - **B4** (negative, f = −321.04 mm) — 2 elements (cemented doublet)
  - **B5** (positive, f = +26.75 mm) — 2 elements
- **Br** (rear group):
  - **B6** (negative, f = −57.18 mm) — 1 element (**focusing element**)
  - **B7** (negative, f = −120.17 mm) — 2 elements (cemented doublet)

A flat cover glass (GB, nd = 1.54400, 2.00 mm) follows B7 before the image plane.

### Note on Surface 4 Radius

Independent paraxial ray trace verification revealed that the **correct radius for surface 4 is R = 22.455 mm**. At low rendering resolution, the tens digit can appear ambiguous (resembling either "2" or "3"), but at 300 DPI the patent reads "22.455" directly. With this value, computed EFLs at all three zoom positions match the patent's stated values to within ±0.01 mm, and all seven group focal lengths reproduce exactly (see §7). With R = 32.455, the wide-angle EFL computes to 32.58 mm instead of 28.80 mm, and the B2 group focal length becomes −43.4 mm instead of the patent's −27.10 mm — conclusively ruling out the larger value.

---

## 2. Zoom Mechanism and Variable Gaps

The lens uses **seven variable air gaps** (d2, d9, d16, d19, d23, d25, d28) that change with zoom. An eighth gap (d30, from the cover glass rear to the image plane) remains constant at 1.09 mm across all zoom positions. The patent provides spacings at three zoom positions:

| Gap | Location | Wide (28.8 mm) | Intermediate (49.0 mm) | Telephoto (67.9 mm) | Role |
|-----|----------|:-:|:-:|:-:|------|
| d2 | B1 → B2 | 0.85 | 15.70 | 26.56 | Zoom (increases monotonically) |
| d9 | B2 → STO | 21.64 | 7.73 | 2.90 | Zoom (decreases monotonically) |
| d16 | B3 → B4 | 4.86 | 2.83 | 2.01 | Zoom (decreases monotonically) |
| d19 | B4 → B5 | 2.00 | 4.04 | 4.86 | Zoom (increases monotonically) |
| d23 | B5 → B6 | 3.22 | 3.12 | 2.00 | Zoom + Focus |
| d25 | B6 → B7 | 12.68 | 12.78 | 13.90 | Zoom + Focus |
| d28 | B7 → GB | 13.00 | 23.93 | 32.48 | Zoom (increases monotonically) |

During zooming from wide to telephoto, the dominant motion is:

1. **B1 moves toward the object side** relative to B2 (d2 increases by 25.7 mm), extending the front of the lens at the telephoto end.
2. **B2 closes toward the stop** (d9 decreases by 18.7 mm), providing the primary variator motion.
3. **The rear groups (Bm and Br) separate from the image plane** at different rates, with B7's spacing to the cover glass (d28) increasing by 19.5 mm.

All variable gaps change **monotonically** across the zoom range — there are no reversing groups in this design. This simplifies the cam mechanism and allows smooth, linear interpolation between zoom positions.

The patent states the Total Lens Length (front vertex to image plane) as 132.38, 144.25, and 158.83 mm at wide, intermediate, and telephoto respectively. The computed sum of all axial thicknesses from the prescription gives values ~0.9 mm shorter at all three positions (131.48, 143.36, 157.94 mm). This constant offset likely reflects the patent's inclusion of a mechanical reference (such as front barrel protrusion or vertex offset) not captured in the optical prescription alone.

The air-equivalent back focal distance (bf = d28 + d29/n29 + d30) is 15.39 mm at wide, 26.32 mm at intermediate, and 34.87 mm at telephoto — matching the patent's stated values exactly.

### Focus Mechanism

The patent (§0042, §0065) describes B6 as the lens unit closest to the object side within the rear group Br that moves during focusing. B6 consists of a single element (L13), and it translates toward the image side when focusing from infinity to close distance. Both flanking gaps d23 (B5 → B6) and d25 (B6 → B7) change during zoom and focus, though the patent's Example 1 provides only infinity-focus spacings. Close-focus data is not available for this embodiment, so the data file encodes all gaps as zoom-only with identical infinity/close values.

The close-focus distance of 0.27 m at 28 mm (AF) / 0.24 m (MF) and maximum magnification of 0.24× at 70 mm are from Canon's production specifications.

The single-element focusing group enables fast, quiet autofocus with the leadscrew-type STM motor — minimal moving mass means rapid position changes with low power consumption.

---

## 3. Aspherical Surfaces

Canon specifies **2 GMo (Glass-Molded) aspherical elements**, which in the patent correspond to **4 aspherical surfaces** on two double-asphere elements. Both elements use nd = 1.58313, νd = 59.4, matching the **BAL42 glass family** from OHARA (glass code 583594). This family exists in two forms: **S-BAL42** (conventional polishing grade) and **L-BAL42** (low-Tg molding grade). The optical constants are identical — the distinction rests entirely on thermal properties suitable for precision glass molding. Since Canon explicitly specifies "GMo" aspherical elements, the glass is identified as **L-BAL42**. The "L-" prefix in OHARA's nomenclature denotes their family of low-Tg moldable glass types.

### Surface 13A — Front of L7 (B3, Intermediate Group)

| Parameter | Value |
|-----------|-------|
| R (base) | +106.432 mm |
| K (conic) | 0.0 (spherical base) |
| A4 | −5.91734 × 10⁻⁶ |
| A6 | −1.25922 × 10⁻⁸ |
| A8 | −6.96192 × 10⁻¹¹ |
| A10 | −1.24634 × 10⁻¹³ |
| A12 | +3.32938 × 10⁻¹⁶ |

At an estimated semi-diameter of ~13.5 mm, the aspherical departure from the base sphere is dominated by the negative A4 term, producing a progressive flattening toward the rim that corrects spherical aberration generated by the fast f/2.88 aperture. All coefficients through A10 are negative, with only the A12 term providing a small positive correction at the extreme rim.

### Surface 14A — Rear of L7 (B3, Intermediate Group)

| Parameter | Value |
|-----------|-------|
| R (base) | −70.798 mm |
| K (conic) | 0.0 |
| A4 | −2.81431 × 10⁻⁶ |
| A6 | −1.15888 × 10⁻⁸ |
| A8 | −1.20810 × 10⁻¹⁰ |
| A10 | +3.67743 × 10⁻¹³ |
| A12 | −6.62375 × 10⁻¹⁶ |

The departure profile is similar to surface 13A (negative A4 dominance), but with a sign reversal at A10 that creates a subtle inflection at large aperture heights. Working together, surfaces 13A and 14A form a **doubly-aspherized corrector** immediately after the stop — the optimal position for correcting spherical aberration and coma simultaneously.

### Surface 20A — Front of L11 (B5, Intermediate Group)

| Parameter | Value |
|-----------|-------|
| R (base) | +55.622 mm |
| K (conic) | 0.0 |
| A4 | −2.16306 × 10⁻⁶ |
| A6 | −3.51669 × 10⁻⁸ |
| A8 | +3.80997 × 10⁻¹² |
| A10 | −8.02806 × 10⁻¹³ |
| A12 | +7.68937 × 10⁻¹⁶ |

The A6 term here is notably larger (in magnitude) relative to A4 than on L7, indicating that higher-order aberration correction is more important at this position in the optical train. The A8 coefficient is unusually small (10⁻¹² vs the typical 10⁻¹⁰ progression), suggesting the 8th-order contribution is intentionally minimized at this surface — the correction burden shifts to A10 instead.

### Surface 21A — Rear of L11 (B5, Intermediate Group)

| Parameter | Value |
|-----------|-------|
| R (base) | −248.880 mm |
| K (conic) | 0.0 |
| A4 | +1.35282 × 10⁻⁵ |
| A6 | −2.86368 × 10⁻⁸ |
| A8 | +3.89958 × 10⁻¹¹ |
| A10 | −1.08816 × 10⁻¹² |
| A12 | +1.83610 × 10⁻¹⁵ |

This surface stands out with a **positive A4 coefficient** — the only one among the four aspherical surfaces. With a very weak base sphere (R = −248.880), the aspherical terms effectively define the surface's power profile across the aperture. The positive A4 creates a progressive increase in local power toward the rim, providing correction for residual field curvature and astigmatism variation across the zoom range.

### Summary of Aspherical Strategy

Both aspherical elements are placed in the **intermediate group (Bm)**, specifically in B3 and B5 — the two positive-power units that bracket the weakly-powered B4 doublet. This placement is deliberate:

1. **L7 (B3)** sits immediately after the aperture stop, where the marginal ray height is maximum and the chief ray height is near zero. Aspherical correction here is most effective against **spherical aberration** and **zonal spherical aberration**.

2. **L11 (B5)** sits further from the stop, where both marginal and chief ray heights are significant. Aspherical correction here addresses **coma, astigmatism, and field curvature** — the off-axis aberrations that limit edge-to-edge sharpness across the zoom range.

Together, the four aspherical surfaces provide six degrees of freedom for aberration correction beyond what the base sphere radii provide, enabling high imaging performance while keeping the element count to 15.

---

## 4. Glass Types and Identification

| Element | nd | νd | 6-Digit Code | Probable Glass | Special |
|---------|---------|------|------|------|------|
| L1 | 1.49700 | 81.7 | 497817 | S-FPL51 (OHARA) | **UD** |
| L2 | 1.89190 | 37.1 | 892371 | S-LAH66 family | — |
| L3 | 1.60311 | 60.6 | 603606 | S-BSL7 family | — |
| L4 | 1.90366 | 31.3 | 904313 | S-LAH58 family | — |
| L5 | 1.85150 | 40.8 | 851408 | S-LAH65V | — |
| L6 | 2.00100 | 29.1 | 001291 | S-NPH4 family | — |
| L7 | 1.58313 | 59.4 | 583594 | L-BAL42 (OHARA) | **GMo Asph** |
| L8 | 1.77047 | 29.7 | 770297 | S-TIH18 family | — |
| L9 | 1.85478 | 24.8 | 855248 | S-TIH53W family | — |
| L10 | 1.49700 | 81.7 | 497817 | S-FPL51 (OHARA) | **UD** |
| L11 | 1.58313 | 59.4 | 583594 | L-BAL42 (OHARA) | **GMo Asph** |
| L12 | 1.59522 | 67.7 | 595677 | S-BSM14 family | — |
| L13 | 1.61340 | 44.3 | 613443 | S-BAH11 family | — |
| L14 | 1.74400 | 44.8 | 744448 | S-LAL14 family | — |
| L15 | 1.92286 | 20.9 | 923209 | S-NPH2 (OHARA) | — |

Glass identifications marked "family" are nearest-catalog matches based on six-digit glass codes. Exact catalog designations cannot be confirmed without full melt-sheet data from Canon's supplier.

### UD Elements (L1 and L10)

Both UD elements use nd = 1.49700, νd = 81.7, closely matching **OHARA S-FPL51** — a fluorophosphate crown with anomalous partial dispersion (ΔPgF ≈ +0.028). The catalog value for S-FPL51 is nd = 1.49700, νd = 81.54 (glass code 497816); the patent's νd = 81.7 is within normal melt-to-melt variation for this glass family.

Canon's marketing notes that the **large-diameter UD lens at the front** (L1) is a configuration previously found only in their L-series lenses. L1 serves as the primary collecting element of B1, and its UD glass ensures that the strong positive power it contributes does not introduce excessive chromatic aberration at the wide-angle end, where the marginal ray height on L1 is greatest.

L10 is the rear element of the **cemented doublet D2** (L9 + L10), forming a classic anomalous-dispersion achromat. Paired with the ultra-dense flint L9 (νd = 24.8), this doublet corrects secondary chromatic aberration. The extreme Abbe number difference (81.7 − 24.8 = 56.9) enables strong secondary spectrum correction. B4's weak total power (f = −321 mm) means it contributes minimally to the zoom action; its primary role is **chromatic correction** across the full zoom range.

### GMo Aspherical Elements (L7 and L11)

Both aspherical elements use nd = 1.58313, νd = 59.4 (glass code 583594), matching **OHARA L-BAL42** — identified as the low-Tg molding grade rather than the optically identical S-BAL42 polishing grade based on Canon's "GMo" specification. Glass molding directly presses the aspherical profile into the glass, avoiding the need for grinding and polishing — a critical cost reduction for non-L-series lenses.

### Notable High-Index Glasses

**L6** (nd = 2.00100, νd = 29.1) is an **ultra-high index dense flint** — one of the highest-index optical glasses commercially available. This extreme refractive index allows L6 to achieve strong positive power (f ≈ +41.5 mm) with relatively gentle surface curvatures, minimizing higher-order aberrations. Its position immediately after the stop makes it the primary positive element controlling spherical aberration correction at the design aperture.

**L15** (nd = 1.92286, νd = 20.9) is an ultra-dense short flint, matching OHARA **S-NPH2**. Paired with L14 in the B7 cemented doublet, it provides achromatic correction for the rear group while contributing strong positive power (f ≈ +44 mm) to partially offset L14's negative contribution (f ≈ −32 mm).

---

## 5. Element-by-Element Optical Role

### B1 — Front Collecting Group (Positive, f = +135.53 mm)

**L1** (Biconvex, f = +135.5 mm): A large-diameter positive element in S-FPL51 UD glass. As the only element in B1, L1 collects the incoming light bundle and provides the initial positive power. Its UD glass suppresses primary chromatic aberration at the wide-angle end, where the marginal ray height on L1 is greatest. The large front element diameter also determines the 67 mm filter size. The low density of fluorophosphate glass (~3.6 g/cm³) reduces the front-heavy weight distribution, improving handling balance.

### B2 — Variator (Negative, f = −27.10 mm)

B2 is the most strongly powered group in the system and provides the primary zoom action. Its four elements form a **classic negative variator** configuration:

**L2** (Negative meniscus, f = −33.2 mm): A high-index lanthanum flint meniscus with the convex surface facing the object. Its strong negative power, combined with the steep rear curvature (R = 22.455 mm), is the primary source of the variator's diverging action.

**L3 + L4** (Cemented doublet D1, f_pair = +101.3 mm): L3 is a biconcave negative element in borosilicate crown (νd = 60.6), with a nearly flat front surface (R = −369.959) giving it plano-concave character; it is cemented to L4, a strongly positive meniscus in dense lanthanum flint (νd = 31.3). The large νd difference (60.6 vs 31.3) provides achromatic correction within B2, preventing the strong negative power from introducing excessive chromatic aberration during zoom.

**L5** (Negative meniscus, f = −73.0 mm): A moderately powered negative meniscus in lanthanum heavy flint (both radii negative: R = −36.457 / −89.252, concave to the object). Its placement at the rear of B2, closest to the aperture stop, helps control field curvature contribution.

### B3 — First Intermediate Positive Unit (f = +51.68 mm)

B3 contains the aperture stop and three elements forming a **modified Gauss-type corrector**:

**L6** (Plano-convex, f = +41.5 mm): The strongest single element in the entire system, using ultra-high-index glass (nd = 2.001). Positioned immediately after the stop, it introduces strong positive power where the marginal ray height is maximum. The extreme refractive index allows gentle curvatures (R_front = 43.928, R_rear = −750.0), keeping higher-order aberrations low despite the high power.

**L7** (Biconvex, double-asph, f = +73.5 mm): The first GMo aspherical element. Both surfaces carry aspherical profiles that systematically flatten toward the rim (negative A4 on both), correcting **zonal spherical aberration** — the residual ring-like aberration that limits wide-open performance in fast zoom lenses.

**L8** (Biconcave, f = −45.2 mm): A dense flint element (νd = 29.7) providing chromatic correction for B3 while contributing negative power for Petzval sum control.

### B4 — Weak Negative Compensator (f = −321.04 mm)

**L9 + L10** (Cemented doublet D2, f = −321.0 mm): The **anomalous-dispersion achromatic doublet** at the heart of the zoom system. L9 is a plano-concave element in ultra-dense flint (νd = 24.8), cemented to L10, a biconvex UD element (νd = 81.7). B4's weak total power means it contributes minimally to the zoom action; its primary role is **secondary chromatic correction** across the full zoom range.

### B5 — Second Intermediate Positive Unit (f = +26.75 mm)

B5 is the **most strongly positive group** in the system and provides the primary image-forming convergence:

**L11** (Biconvex, double-asph, f = +78.3 mm): The second GMo aspherical element. Its placement away from the stop means the aspherical profiles address **field-dependent aberrations**. The unique positive A4 on the rear surface creates a bulging departure that progressively increases local power toward the rim, counteracting natural field curvature.

**L12** (Biconvex, f = +37.7 mm): A relatively low-dispersion barium crown (νd = 67.7) that provides the bulk of B5's positive power. Its strong biconvex shape (R_front = 69.909, R_rear = −31.690) concentrates power on the rear surface.

### B6 — Focusing Element (Negative, f = −57.18 mm)

**L13** (Negative meniscus, f = −57.2 mm): This single element constitutes the **entire focusing group**. It is a meniscus with the convex surface facing the object (R_front = 71.379, R_rear = 23.380), yielding negative power despite both radii being positive. The patent (§0065) explicitly states that B6 moves toward the image side when focusing from infinity to close distance.

Using a single lightweight element for focusing is critical for the **STM (Stepping Motor) autofocus** system — the low mass allows the leadscrew-type STM to achieve fast, quiet, and accurate focus acquisition. The choice of a medium-index glass (nd = 1.61340, νd = 44.3) balances adequate negative power against manageable chromatic aberration contribution.

### B7 — Rear Negative Doublet (f = −120.17 mm)

**L14 + L15** (Cemented doublet D3): L14 is a biconcave element in lanthanum crown (nd = 1.74400), providing strong negative power (f ≈ −32 mm). L15 is a biconvex element in ultra-dense short flint S-NPH2 (nd = 1.92286, νd = 20.9), providing strong positive power (f ≈ +44 mm). The net effect is moderate negative power (f = −120 mm) with achromatic correction.

B7's position at the rear of the optical train, close to the image plane, means it has the most influence on **field curvature and distortion**. The Canon marketing material acknowledges that this lens relies on **electronic distortion correction** — the raw images show significant barrel distortion at the wide end (on the order of 10% or more at full field per the patent's aberration plots), which is corrected in-camera for JPEGs and via lens profiles for RAW converters.

### Cover Glass (GB)

**Surfaces 29–30** (Flat, nd = 1.54400, νd = 66.3, thickness = 2.00 mm): A filter/cover glass assembly representing the sensor stack. The flat surfaces contribute no optical power. In the data file, the cover glass is excluded from the surface prescription, and its physical thickness (2.00 mm) plus the trailing air gap (1.09 mm) are folded into the back focal distance of the last optical surface (S28).

---

## 6. Verified Paraxial Properties

All values verified via independent ABCD-matrix paraxial ray trace with R4 = 22.455:

| Property | Wide | Intermediate | Telephoto | Source |
|----------|:----:|:----:|:----:|:----:|
| EFL (mm) | 28.804 | 49.007 | 67.900 | Computed (match to ±0.01 mm) |
| F-number | 2.88 | 2.88 | 2.92 | Patent-stated |
| Half-field ω (°) | 34.93 | 23.82 | 17.67 | Patent-stated |
| Image height (mm) | 21.64 | 21.64 | 21.64 | Patent-stated |
| Patent TLL (mm) | 132.38 | 144.25 | 158.83 | Patent-stated |
| BFL air-equiv (mm) | 15.39 | 26.32 | 34.87 | Computed (exact match) |
| Zoom ratio | — | — | 2.36 | Patent-stated |

**Group focal lengths** (all match patent exactly):

| Unit | Starting Surface | Focal Length (mm) | Computed (mm) |
|------|:---:|:---:|:---:|
| B1 | 1 | +135.53 | +135.53 |
| B2 | 3 | −27.10 | −27.10 |
| B3 | 10 | +51.68 | +51.68 |
| B4 | 17 | −321.04 | −321.04 |
| B5 | 20 | +26.75 | +26.75 |
| B6 | 24 | −57.18 | −57.18 |
| B7 | 26 | −120.17 | −120.17 |

**Individual element focal lengths** (thick-lens ABCD):

| Element | f (mm) | Element | f (mm) |
|:---:|:---:|:---:|:---:|
| L1 | +135.5 | L9+L10 (D2) | −321.0 |
| L2 | −33.2 | L11 | +78.3 |
| L3+L4 (D1) | +101.3 | L12 | +37.7 |
| L5 | −73.0 | L13 | −57.2 |
| L6 | +41.5 | L14+L15 (D3) | −120.2 |
| L7 | +73.5 | | |
| L8 | −45.2 | | |

**Petzval sum:** +0.001622 mm⁻¹ (Petzval radius ≈ +617 mm). This is well-corrected for a zoom lens — the negative elements (especially B2 and the rear doublets) effectively flatten the Petzval field against the strong positive elements (B3, B5).

---

## 7. Design Philosophy and Tradeoffs

Several aspects of this design reflect Canon's specific goals for a **compact, affordable, high-performance standard zoom**:

**Electronic distortion correction as a design constraint.** The lens is designed from the outset to rely on in-camera distortion correction. This allows the optical designer to accept significant barrel distortion at the wide end (reducing the element count needed for geometric correction) and instead allocate the limited element budget toward sharpness, chromatic correction, and aberration control. The patent's aberration plots (FIG. 2A) show barrel distortion exceeding 10% at the full field angle of ω = 34.8° at the wide end.

**Glass-molded aspherics instead of polished.** Using L-BAL42 (a moldable glass) for both aspherical elements enables high-volume production at lower cost than polished aspherics, consistent with the lens's non-L-series positioning. The tradeoff is visible in reviews as faint "onion ring" artifacts in out-of-focus highlights — a characteristic signature of molding marks on aspherical surfaces.

**Single-element focusing unit.** The use of a single element (L13) for focusing minimizes the moving mass, enabling the compact leadscrew-type STM motor to achieve fast, quiet autofocus. The tradeoff is that a single negative element provides less aberration correction freedom during focus than a multi-element focus group — contributing to the slight performance falloff at close distances noted in some reviews.

**UD glass at the front.** Placing an S-FPL51 element at the very front of the system is unusual for non-L lenses (as Canon's own marketing notes). The low density of fluorophosphate glass (~3.6 g/cm³) reduces the front-heavy weight distribution. The UD properties simultaneously address chromatic aberration at the position where it matters most — where the marginal ray is tallest.

**Monotonic zoom cam.** All seven variable gaps change monotonically across the zoom range, with no reversing groups. This simplifies the mechanical cam design and contributes to the smooth zoom feel expected in a video-capable lens.

---

## 8. Comparison with Production Lens

| Parameter | Patent Example 1 | Production RF 28-70mm F2.8 IS STM |
|-----------|:-:|:-:|
| Elements / Groups | 15 / 12 | 15 / 12 |
| Focal range | 28.80–67.90 mm | 28–70 mm |
| Maximum aperture | f/2.88–2.92 | f/2.8 (constant) |
| Aspherical elements | 2 (4 surfaces) | 2 (GMo) |
| UD elements | 2 | 2 |
| Aperture blades | Not specified | 9 (circular) |
| Close focus | Not specified in Ex.1 | 0.27 m (AF at 28 mm) |
| IS | Not covered (optical only) | 5.5 stops (OIS) |
| Filter diameter | Not specified | 67 mm |
| Weight | Not specified | 495 g |

The production lens matches the patent's first embodiment closely in element count, group structure, and special glass usage. The slight focal length rounding (28.80 → 28, 67.90 → 70) is standard marketing practice. The image stabilization unit is not part of the optical prescription — it operates by shifting an element group perpendicular to the optical axis, which does not appear in the patent's on-axis surface data.

---

## 9. Data File Notes

The accompanying `CanonRF2870mmf28.data.ts` file encodes the first numerical example with the following conventions:

- **Cover glass excluded:** The 2.00 mm cover glass (nd = 1.54400) and 1.09 mm trailing air gap are folded into the back focal distance of surface "28". At each zoom position, BFD = d28 + 2.00 + 1.09.
- **Zoom-only variable gaps:** Since Example 1 provides only infinity-focus spacings, all seven variable gaps are encoded with identical [d_inf, d_close] pairs. If close-focus data becomes available (from another embodiment or measurement), gaps d23 and d25 should be updated to reflect the B6 focus travel.
- **Semi-diameters estimated:** Combined marginal + chief ray trace at all three zoom positions, refined against the patent cross-section figure (FIG. 1) proportions. The initial unvignetted beam heights were reduced to satisfy multiple physical constraints: edge thickness ≥ 0.5 mm (six elements are binding — L1, L4, L10, L11, L12, L15), cross-gap sag overlap (the S4→S5 air gap limits the B2/D1 junction region to ~15.5 mm due to the very steep R = 22.455 mm rear surface of L2), sd/|R| ≤ 0.90 slope limit, and the 67 mm production filter thread (L1 max SD ≈ 29.5 mm). The resulting SDs imply moderate vignetting at the field corners, consistent with the production lens's known reliance on electronic vignetting correction.
- **nominalFno as array:** The design f-number varies from 2.88 at wide/intermediate to 2.92 at telephoto. The array form [2.88, 2.88, 2.92] ensures the renderer computes the correct entrance pupil size at each zoom position.

---

## References

1. US Patent Application Publication US 2024/0329367 A1, "Zoom Lens and Imaging Apparatus Including the Same," Yasuaki Hagiwara, Canon Kabushiki Kaisha, published October 3, 2024.
2. Canon U.S.A., "RF28-70mm F2.8 IS STM" product page.
3. Canon Europe, "RF 28-70mm F2.8 IS STM Specifications."
4. OHARA Inc., Optical Glass Catalog (for S-FPL51, L-BAL42, S-NPH2 glass data).
