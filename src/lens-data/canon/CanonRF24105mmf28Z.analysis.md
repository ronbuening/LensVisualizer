# Canon RF24-105mm F2.8 L IS USM Z — Optical Analysis

**Patent:** US 2024/0192474 A1 (Pub. Jun. 13, 2024), Numerical Example 4
**Inventor:** Shunji Iwamoto (Canon Kabushiki Kaisha)
**Assignee:** Canon Kabushiki Kaisha
**JP Priority:** 2022-192641 (Dec. 1, 2022)
**Published:** June 13, 2024
**Embodiment analyzed:** Numerical Example 4
**Production lens:** Canon RF24-105mm F2.8 L IS USM Z (announced Nov. 3, 2023)

---

## 1. Overview and Patent-to-Production Correspondence

US 2024/0192474 A1 presents seven numerical examples of a positive–negative–positive–rear-group zoom lens for mirrorless cameras. Numerical Example 4 (¶0082, FIG. 7, FIGS. 8A/8B) is the best match to the production Canon RF24-105mm F2.8 L IS USM Z on every checkable metric.

The production lens is marketed as 23 elements in 18 groups, with 4 UD (Ultra Low Dispersion) elements, 2 GMo (Glass Moulded) aspherical elements, and 1 replica aspherical element. It features an 11-blade diaphragm, dual Nano USM autofocus motors driving a floating focus system, and a constant-length internal zoom barrel (88.5 mm diameter × 199 mm length).

Example 4 yields 24 optically distinct refractive bodies (counting the thin replica resin layer separately from its glass substrate), which Canon counts as 23 "elements" because the resin layer and its host glass form a single optical component. The 18-group count, four UD elements (nd = 1.49700, νd = 81.5), two aspheric surfaces on solid elements (S32 and S37, Canon's GMo elements), and one aspheric surface on a 0.05 mm bonded layer (S22, Canon's replica aspheric) all match.

**Computed vs. patent specifications (independently verified via ABCD paraxial ray trace):**

| Parameter | WIDE | MIDDLE | TELE | Patent |
|-----------|------|--------|------|--------|
| EFL (mm) | 24.78 | 50.31 | 102.08 | 24.78 / 50.31 / 102.06 |
| Paraxial half-angle ω (°) | 41.12 | 23.27 | 11.97 | 41.12 / 23.27 / 11.97 |
| F-number | 2.90 | 2.90 | 2.90 | 2.90 |
| Overall length (mm) | 211.98 | 211.98 | 211.98 | 211.98 |
| Back focus BF (mm) | 11.63 | 25.76 | 19.01 | 11.63 / 25.76 / 19.01 |

EFL agreement is within ±0.02% at all zoom positions, and the stored back-focus gaps land within 0.015 mm of the paraxial image at every station (the patent lists no cover glass, so d43 is used as published). The patent's ω is a paraxial value (¶0030): it equals atan(21.64 mm / f) at every station. The constant overall lens length of 211.98 mm confirms internal zoom operation — the sum of all variable air gaps is invariant at 91.52 mm across zoom positions, consistent with the fixed-length barrel design. All three stations (wide, middle, tele) are tabulated in the patent; no station in the data file is interpolated.

The production lens has a marketed focal length range of 24–105 mm and an aperture of f/2.8. The patent example computes to 24.78–102.06 mm at f/2.90. These small differences are typical of patent-vs.-production rounding and final design optimization. The data file uses the patent's f/2.90 as its nominal aperture. Because the stop travels with L3 and the patent publishes no iris diameters, the per-station iris is inferred by tracing the f/2.90 entrance pupil back to the stop (about 21.7 mm diameter at wide, 27.4 mm at the middle station and 30.2 mm at tele); this schedule is calculated, not published.

---

## 2. Lens Unit Structure

The zoom lens L0 consists of seven lens units separated by variable air gaps. The first lens unit L1 is fixed relative to the image plane during zooming (¶0069); every other unit moves along its own locus, with the overall length held constant by coordinated motion.

| Unit | Surfaces | Power | Focal Length (mm) | Elements | Groups | Role |
|------|----------|-------|-------------------|----------|--------|------|
| L1 | S1–S8 | Positive | +90.57 | 4 | 4 | Front group, fixed to image plane; contains negative element L11 and three positive lenses |
| L2 | S9–S15 | Negative | −27.00 | 4 | 3 | Variator; primary zoom motion, strongest power among all units |
| L3 | S16–S24 | Positive | +119.23 | 5 | 3 | Compensator with aperture stop; includes replica aspheric |
| L4 | S25–S34 | Positive | +35.02 | 6 | 4 | Rear relay group; strongest positive power, contains 3 UD elements and GMo aspheric |
| L5 | S35–S36 | Negative | −47.42 | 1 | 1 | Focus group A (Nano USM #1); single negative meniscus |
| L6 | S37–S38 | Positive | +112.74 | 1 | 1 | Focus group B (Nano USM #2); single positive meniscus with GMo aspheric |
| L7 | S39–S43 | Negative | −90.78 | 3 | 2 | Rear field corrector; negative power near the image plane |

Unit focal lengths are the patent's Zoom Lens Unit Data. L3 counts five optical bodies (four Canon elements) because the replica resin layer is modeled separately.

### Zoom Motion

The gap changes from wide to tele reveal the zoom kinematics:

| Gap | Wide (mm) | Mid (mm) | Tele (mm) | Δ (mm) | Motion |
|-----|-----------|----------|-----------|--------|--------|
| d8 (L1→L2) | 0.80 | 16.58 | 34.70 | +33.90 | L2 moves away from L1 |
| d15 (L2→L3) | 42.76 | 21.90 | 2.98 | −39.78 | L3 approaches L2 |
| d24 (L3→L4) | 19.63 | 10.61 | 0.79 | −18.84 | L4 approaches L3 |
| d34 (L4→L5) | 2.50 | 1.78 | 1.10 | −1.40 | Small motion |
| d36 (L5→L6) | 8.07 | 7.90 | 7.19 | −0.88 | Small motion |
| d38 (L6→L7) | 6.12 | 7.00 | 25.75 | +19.63 | L6 outpaces L7 in object-ward motion |
| d43 (BF) | 11.63 | 25.76 | 19.01 | +7.38 | Non-monotonic (increases W→M, decreases M→T) |

L1 is the reference frame (fixed). Computing absolute unit positions from the cumulative gap changes reveals the true zoom kinematics. L2 translates 33.9 mm toward the image — the dominant zoom motion. L3 and L4 move modestly toward the object (5.9 and 24.7 mm respectively), closing the gaps behind L2. L5 and L6 track together toward the object (26.1 and 27.0 mm), maintaining their tight mutual spacing. L7 exhibits non-monotonic behavior: it moves 14.1 mm toward the object from wide to mid, then reverses 6.7 mm toward the image from mid to tele, for a net 7.4 mm object-ward displacement. The back focal distance d43 is correspondingly non-monotonic, peaking at 25.76 mm at the middle zoom position — a consequence of L7's reversal and the complex power distribution needed to hold f/2.9 and image registration across the range.

---

## 3. Element-by-Element Analysis

### 3.1 Lens Unit L1 — Front Positive Group (fixed, f = +90.57 mm)

L1 is the largest and heaviest unit, carrying the full entrance pupil. It comprises four elements: one negative element closest to the object (the "single lens L11" in patent terminology) followed by three positive lenses. This arrangement — negative lead followed by positive power — is a hallmark of retrofocus-influenced front groups, enabling the wide 41° half-angle at 24 mm while keeping the front lens diameter manageable with an 82 mm filter thread.

Fixing L1 relative to the image plane during zooming is the key innovation called out in the patent abstract. Because the front group is the largest and most massive component, fixing it simplifies the zoom mechanism, reduces barrel length variation, and enables high-speed zooming. The patent explicitly notes that this approach avoids the need to move a heavy front group during zoom operation (¶0034).

**Element 1 (L11) — Biconcave negative, nd = 1.90043, νd = 37.4**
R₁ = −266.746 mm, R₂ = +98.340 mm. FL ≈ −79.6 mm. Glass: TAFD37A (HOYA), six-digit code 900/374. This is the "single lens" referred to in the patent claims. Its strong negative power diverges the incoming marginal ray, establishing the retrofocus characteristic essential for wide-angle coverage. The very high refractive index (nd = 1.900) minimizes surface curvatures for a given power, which controls spherical aberration and coma contributed by this large-aperture element. The front surface R₁ = −266.746 mm is nearly flat, making the element almost plano-concave — this reduces the surface sag and simplifies manufacturing of what is the largest element in the lens.

**Element 2 — Biconvex positive, nd = 1.53775, νd = 74.7**
R₁ = +192.058 mm, R₂ = −241.263 mm. FL ≈ +200 mm. Glass: S-FPM3 (OHARA), a low-dispersion fluorophosphate crown with six-digit code 538/747. Its low dispersion (νd = 74.7) provides positive power with minimal chromatic aberration introduction.

**Elements 3 and 4 — Biconvex positive (nearly plano-convex), nd = 1.72916, νd = 54.7**
Both use S-LAL18 (OHARA), the lanthanum crown matching code 729/547. Element 3: R₁ = +119.575, R₂ = −1682.093 (FL ≈ +153 mm). Element 4: R₁ = +76.157, R₂ = −880.300 (FL ≈ +96 mm). Both are biconvex with very weak rear curvatures, making them effectively plano-convex — a shape that minimizes spherical aberration for a given power contribution. Element 4, with its shorter focal length, provides the strongest positive contribution in L1. The use of identical glass in both elements simplifies manufacturing logistics.

### 3.2 Lens Unit L2 — Negative Variator (f = −27.00 mm)

L2 is the primary zoom variator. With the strongest absolute power (|f| = 27 mm) of any unit, it provides the bulk of magnification change during zooming. Its translation along the axis (d8 grows from 0.80 to 34.70 mm, wide to tele) produces the 4.12× zoom ratio.

**Element 5 — Negative meniscus, nd = 1.88300, νd = 40.8**
R₁ = +915.083, R₂ = +29.841 (both positive; R₁ ≫ R₂ → nearly flat front, deeply concave rear, convex toward the object). FL ≈ −35 mm. Glass: S-LAH58 (OHARA), dense lanthanum glass matching code 883/408. This is the strongest negative element in the variator. Its strongly curved rear surface faces the stop, the usual orientation for keeping the oblique wide-angle bundle's angles of incidence moderate.

**Element 6 — Biconcave negative, nd = 1.59522, νd = 67.7**
R₁ = −218.330, R₂ = +63.389. FL ≈ −82 mm. Glass: S-FPM2 (OHARA), fluorophosphate crown matching code 595/677. A secondary negative element with low dispersion, providing different aberration contributions than element 5 for zonal spherical aberration correction across the zoom range.

**Elements 7+8 — Cemented doublet (Da), overall FL ≈ +265 mm**
Element 7 (biconcave): nd = 1.49700, νd = 81.5, S-FPL51 (OHARA). **This is a UD element** — the first of four in the lens. Element 8 (biconvex): nd = 1.77047, νd = 29.7, HOYA NBFD29 (770297). This is a *reversed* achromatic doublet — the UD crown element is the *negative* component (FL ≈ −53 mm) and the heavy flint is the *positive* component (FL ≈ +45 mm), opposite to the classic positive-crown/negative-flint arrangement. This inversion is consistent with the doublet's placement within the net-negative L2 unit. The large Abbe number difference (Δνd = 51.8) provides strong achromatization of the longitudinal chromatic aberration from elements 5 and 6. The doublet's net positive focal length (+265 mm) is deliberately weak — it serves primarily as a chromatic corrector rather than a power contributor.

### 3.3 Lens Unit L3 — Positive Compensator with Aperture Stop (f = +119.23 mm)

L3 contains the aperture stop (surface 16, positioned at the front of this unit) and provides positive power for zoom compensation. The stop moves with L3 (5.9 mm toward the object from wide to tele), so the physical iris must open as the lens zooms to hold f/2.9; see the inferred schedule in §1.

**Element 9 — Biconvex positive, nd = 1.84666, νd = 23.8**
R₁ = +78.578, R₂ = −594.031. FL ≈ +82 mm. Glass: S-TIH53 (OHARA), very heavy flint matching code 847/238. An unusual glass choice for a positive element — high-dispersion glass is more commonly used for negative elements. Here the high dispersion is deliberately exploited: element 9's positive chromatic contribution is counterbalanced by the collective negative chromatic contributions of the remaining L3 elements, yielding a chromatically corrected unit. The high refractive index allows it to carry positive power with low curvatures, minimizing higher-order aberrations near the stop.

**Elements 10+11 — Cemented doublet (Db), FL ≈ +102 mm**
Element 10 (negative meniscus, convex toward the object; FL ≈ −98 mm): nd = 2.00100, νd = 29.1. **This is the highest-index glass in the entire lens** — S-LAH99 (OHARA), an extreme dense flint matching code 001/291. Element 11 (biconvex): nd = 1.51742, νd = 52.4, S-NSL36 (OHARA). The nd = 2.001 glass provides very strong contribution at the junction surface. The extreme index step at the cemented junction (Δnd = 0.484) creates a powerful internal surface that corrects spherical aberration without requiring strong external curvatures.

**Elements 12+13 — Hybrid replica aspherical composite (Ha), FL ≈ −62.6 mm**
Element 12 is the **replica aspherical** layer: nd = 1.59022, νd = 30.1, center thickness = 0.05 mm. The patent gives only the index pair; the thin bonded layer is inferred to be a UV-curing optical resin, not a catalog glass. Element 13 is the S-LAH66 glass substrate: nd = 1.77250, νd = 49.6 (code 773/496). Surface 22 carries the aspherical profile (K = 0, with polynomial terms to 8th order). Canon's product literature identifies this as a replica aspherical element. The negative focal length of this composite provides divergence that, combined with element 9 and the doublet 10+11, gives L3 its net positive power while enabling field curvature correction.

Because the replica layer is only 0.05 mm thick on axis, its modeled clear semi-diameter is capped at 15.5 mm (FIG. 7 draws the composite at about 16.6 mm). A larger value would make surfaces 22 and 23 cross at the rim in this renderer's element geometry check; the cap preserves positive edge thickness while still passing the full f/2.9 axial beam (15.3 mm at tele).

### 3.4 Lens Unit L4 — Rear Positive Relay (f = +35.02 mm)

L4 is the strongest positive unit in the rear group and carries three of the four UD elements. It functions as the primary image-forming relay, gathering the divergent beam from L3 and converging it toward the focus groups.

**Elements 14+15 — Cemented doublet (Dc), FL ≈ −117 mm**
Element 14 (biconvex UD): nd = 1.49700, νd = 81.5, S-FPL51. Element 15 (negative meniscus): nd = 1.90043, νd = 37.4, TAFD37A (same glass as element 1). Although this doublet has a net negative focal length, its primary purpose is chromatic correction — the UD crown paired with the dense flint provides strong achromatization for the converging beam.

**Element 16 — Biconvex UD, nd = 1.49700, νd = 81.5**
R₁ = +41.537, R₂ = −105.932. FL ≈ +61 mm. A standalone UD element providing strong positive power with minimal chromatic contribution. (The strongest positive element in L4 is element 19, FL ≈ +41 mm.)

**Element 17 — Biconvex UD, nd = 1.49700, νd = 81.5**
R₁ = +63.231, R₂ = −97.379. FL ≈ +78 mm. The fourth and final UD element, working in concert with element 16 to deliver the positive power of L4. Having two separate UD singlets rather than one strong element distributes the power and reduces higher-order spherical aberration.

**Elements 18+19 — Cemented doublet with GMo aspheric (Dd), FL ≈ +96 mm**
Element 18 (negative meniscus, GMo aspherical): nd = 1.85400, νd = 40.4. The glass is **OHARA L-LAH85V**, a low-softening-temperature lanthanum dense flint matching code 854/404 — the "L-" prefix designates PGM compatibility, consistent with this element being glass-moulded. R₁ = +85.354, R₂ = +34.925 (FL ≈ −71 mm individually). Surface 32 carries the aspherical profile (K = 0, polynomial to 8th order; all coefficients negative). Element 19 (biconvex): nd = 1.60311, νd = 60.6; OHARA S-BSM14 is the catalog equivalent (code 603/606). The cemented pair is net positive (+96 mm), with element 19 (FL ≈ +41 mm) overpowering element 18's divergence. The GMo aspherical surface on element 18 is the primary corrector for spherical aberration in the strongly converging beam through L4. At a representative semi-diameter of 12 mm, the aspherical departure is −0.158 mm from the base sphere. The polynomial makes the surface's sag turn over at about 18.2 mm, so the modeled clear aperture stops at 18.0 mm (departure ≈ −0.87 mm there), slightly inside the ≈19 mm rim drawn in FIG. 7.

### 3.5 Lens Unit L5 — Focus Group A (f = −47.42 mm)

**Element 20 — Negative meniscus, nd = 1.72916, νd = 54.7**
R₁ = +157.315, R₂ = +28.256 (both R positive; R₁ > R₂ → convex toward the object, deeply concave toward the image). FL = −47.42 mm. S-LAL18 lanthanum crown (same glass as elements 3 and 4). This single-element unit is one of the two floating focus groups. It is driven by one of the dual Nano USM motors and moves **toward the image plane** when focusing from infinity to close distance (¶0069). Its compact size (1.20 mm center thickness) enables the fast, quiet autofocus performance required for video.

### 3.6 Lens Unit L6 — Focus Group B (f = +112.74 mm)

**Element 21 — Positive meniscus with GMo aspheric, nd = 1.58313, νd = 59.4**
R₁ = +47.159, R₂ = +160.935 (both R positive; R₁ < R₂ → convex toward object). FL = +112.74 mm. The catalog equivalent is **OHARA L-BAL42** (code 583/594), a low-softening-point barium crown made for precision glass moulding — consistent with Canon's GMo description, though the patent itself gives only nd/νd. Surface 37 carries the aspherical profile (K = 0, polynomial to 10th order — the only surface in the design requiring an A₁₀ coefficient). This focus group is driven by the second Nano USM motor and also moves **toward the image** when focusing close (¶0069; the two FOCUS arrows in FIG. 7 both point image-ward). Because L6 translates during focus, its aspherical surface meets the beam at a changing height and helps hold aberrations across the focus range.

### 3.7 Lens Unit L7 — Rear Field Corrector (f = −90.78 mm)

L7 sits closest to the image sensor and provides final field correction. Its negative power counterbalances the strong positive power of L4, flattening the field and controlling astigmatism across the image circle.

**Elements 22+23 — Cemented doublet (De), FL ≈ +406 mm**
Element 22 (biconvex): nd = 1.80518, νd = 25.4, S-TIH6 (OHARA). Element 23 (biconcave): nd = 1.48749, νd = 70.2, S-FSL5 (OHARA). This is a flint-lead doublet — an inverted configuration compared to the classical achromat. The heavy flint provides chromatic overcorrection that compensates for residual undercorrection accumulated through the preceding groups. The fluorocrown element 23, with νd = 70.2, has dispersion properties approaching UD glass and contributes to lateral color correction at the field edge.

**Element 24 — Negative meniscus, nd = 2.00069, νd = 25.5**
R₁ = −33.883, R₂ = −66.006 (both R negative; |R₁| < |R₂| → concave toward object). FL ≈ −70.9 mm. TAFD40 (HOYA), an extreme dense flint matching code 001/255. This is the final optical element before the image plane. Its nd = 2.001 glass provides strong negative power in a compact meniscus form. Placed close to the image plane where the chief ray height is large, this element corrects field curvature, astigmatism, and lateral chromatic aberration simultaneously.

---

## 4. Aspherical Surfaces

The design uses three aspherical surfaces — matching Canon's specification of "2 GMo aspherical + 1 replica aspherical." All three have zero conic constant (K = 0), meaning the aspherical correction is provided entirely by the polynomial even-order terms.

### Surface 22 — Replica Aspherical (element 12, in L3)

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | +3.72124 × 10⁻⁶ |
| A₆ | +3.39835 × 10⁻¹⁰ |
| A₈ | +6.96887 × 10⁻¹³ |

All positive polynomial coefficients: the surface becomes less concave at larger heights. The replica aspherical is a 0.05 mm thick layer (nd = 1.590, νd = 30.1; inferred to be UV-curing resin) bonded to the front surface of element 13 (nd = 1.773, νd = 49.6), with the clear semi-diameter limited to 15.5 mm by edge-thickness feasibility.

### Surface 32 — GMo Aspherical (element 18, in L4)

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | −7.10364 × 10⁻⁶ |
| A₆ | −3.27713 × 10⁻⁹ |
| A₈ | −1.38031 × 10⁻¹² |

All negative polynomial coefficients: the surface flattens progressively toward the edge. This is the strongest aspherical correction in the design — at h = 12 mm, the departure reaches −0.158 mm. The catalog equivalent is OHARA L-LAH85V (a moulding-grade dense lanthanum flint).

### Surface 37 — GMo Aspherical (element 21, in L6 / focus group B)

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | +1.68172 × 10⁻⁶ |
| A₆ | +3.21879 × 10⁻⁹ |
| A₈ | +5.86323 × 10⁻¹² |
| A₁₀ | −1.26470 × 10⁻¹⁴ |

This is the only surface requiring a 10th-order polynomial coefficient, indicating complex higher-order aberration correction. The positive lower-order terms make the surface steeper at the edge while the negative A₁₀ provides rolloff at the extreme margin. The catalog equivalent is OHARA L-BAL42. This surface is on a moving focus element, so its aspherical profile must maintain correction across the focus range.

---

## 5. Floating Focus System

The Canon RF24-105mm F2.8 L IS USM Z uses a **dual-group floating focus** system driven by two independent Nano USM motors. The patent text (¶0069) specifies that, during focusing from infinity to a short distance:

- **L5 (element 20, negative)** moves toward the **image side**
- **L6 (element 21, positive)** moves toward the **image side**

Both groups travel in the same direction, and the two FOCUS arrows in FIG. 7 agree. The dotted zoom loci drawn for L5 and L6 in FIG. 7 (¶0027) show that their close-focus positions follow different paths from the infinity loci, so the two groups are not locked together; their relative travel is not published.

**Why two groups.** The groups have opposite powers (L5 −47.42 mm, L6 +112.74 mm), so moving them by different amounts changes the L4–L5, L5–L6 and L6–L7 spacings independently. That extra degree of freedom lets the design correct field curvature and spherical aberration at close range, and control focus breathing, better than a single focusing group could.

**Aberration stability.** The aspherical surface on L6 (S37) moves with the group, so it meets the beam at a changing height as the conjugate changes.

**Zoom tracking.** The variable gaps d34, d36 and d38 all change during zoom, so L5 and L6 also take part in the zoom motion. In a focus-by-wire lens like this one, the motors reposition both groups for the current focal length as well as the focus distance.

**Speed and silence.** Each focus group consists of a single lightweight element: L5 is 1.20 mm thick and L6 is 4.54 mm thick.

The patent does not provide close-focus air spacing data for this or any other example, so the focus trajectories cannot be reconstructed and the viewer does not model focus travel. Canon's production specification gives a minimum focus distance of 0.45 m and a maximum magnification of 0.29× at 105 mm; the data file keeps 0.45 m for reference only.

---

## 6. Glass Budget and Material Strategy

The design uses 17 distinct glass types plus the replica resin across 24 optical bodies (23 elements in Canon's count). Glass names are catalog equivalents matched on the patent's nd/νd; the patent names no glass.

**Ultra-low dispersion glasses (4 elements, nd = 1.497, νd = 81.5):** Elements 7, 14, 16, 17. Canon describes four UD elements, and these four rows share the 497/815 fluorophosphate-crown coordinate of OHARA S-FPL51 (nd = 1.497, νd = 81.55); the UD identification is inferred from that match. All four sit behind L1 — one in L2 (as part of a chromatic correcting doublet) and three in L4 (the rear positive relay). The concentration of UD glass in L4 is deliberate: this is where the beam is converging most strongly toward focus, and the accumulated longitudinal chromatic aberration must be corrected without introducing secondary spectrum. The fluorophosphate crown's anomalous partial dispersion aids correction of secondary longitudinal color.

**Extreme-index glasses (2 elements, nd > 2.0):** Elements 10 (S-LAH99, nd = 2.001, νd = 29.1) and 24 (TAFD40, nd = 2.001, νd = 25.5). These extreme dense flints are deployed at critical locations — element 10 in L3 (near the stop) and element 24 as the final element before the image plane. The nd > 2.0 glasses are expensive and present manufacturing challenges, but they provide uniquely strong surface contributions per unit curvature, enabling compact designs with lower surface counts.

**Moulding glasses (2 elements):** The two elements Canon lists as GMo aspherics match OHARA moulding-grade glasses: element 18 (L-LAH85V, nd = 1.854, νd = 40.4) and element 21 (L-BAL42, nd = 1.583, νd = 59.4). OHARA's "L-" prefix marks low-softening-point glasses for precision moulding. The patent gives only nd/νd, so these names are catalog equivalents.

**Lanthanum glasses (8 elements):** Elements 1 and 15 use TAFD37A; elements 3, 4, and 20 use S-LAL18; element 5 uses S-LAH58; element 13 uses S-LAH66; and element 18 uses L-LAH85V. The remaining high-index elements — element 8 (HOYA NBFD29, nd = 1.770, νd = 29.7) and element 9 (S-TIH53) — are flints that serve as chromatic correction partners in their respective units.

---

## 7. Petzval Sum and Field Curvature

The computed Petzval sum is **+0.000568 mm⁻¹**, corresponding to a Petzval radius of **1762 mm**. For a full-frame sensor with a 21.6 mm half-diagonal, this produces a Petzval field sag of only 0.133 mm at the image corner — well controlled for a zoom lens of this complexity. The Petzval sum was computed using the correct surface-by-surface formula φ/(n_before × n_after).

The positive Petzval sum (field curving toward the lens) is partially compensated by astigmatic field contributions, resulting in the moderate residual field curvature visible in the patent aberration diagrams (Figs. 8A/8B). The sagittal and meridional curves stay well inside the ±0.4 mm plot scale at both the wide and telephoto ends.

The Petzval control is achieved through the power distribution strategy: the strong negative L2 (f = −27 mm) and the negative rear elements contribute negative Petzval that counterbalances the dominant positive contributions from L1, L3, L4, and L6. The two extreme-index elements (nd > 2.0) are advantageous for field flatness because high-index surfaces contribute less Petzval per unit of refractive power — the Petzval contribution per surface is φ/(n·n'), which decreases with higher index.

---

## 8. Aberration Correction Strategy Summary

The patent aberration diagrams (Figs. 8A/8B) for Example 4 show:

**Wide-angle end (24.78 mm, f/2.9, ω = 41.2°):** Spherical aberration is well corrected within ±0.4 mm for both d and g lines. Astigmatism shows moderate sagittal/meridional separation within ±0.4 mm. Distortion is large: the plot reaches about −12 % barrel at ω = 41.2° (a real-ray trace puts the 41.12° chief ray at 19.0 mm image height against the paraxial 21.6 mm), consistent with Canon relying on in-camera digital correction at 24 mm. Lateral chromatic aberration is within ±0.05 mm.

**Telephoto end (102.06 mm, f/2.9, ω = 12°):** Spherical aberration shows mild d/g separation typical of secondary spectrum, but controlled within ±0.4 mm. Astigmatism is tighter. Distortion is pincushion, about +4 to +5 % at the field edge. Lateral color is well corrected.

The three aspherical surfaces work in concert: S22 (replica, in L3 near the stop) handles residual spherical and coma at the wide end; S32 (GMo, in L4) manages the strongly converging beam at all zoom positions; S37 (GMo, on the moving focus element L6) provides adaptive correction across the focus range.

---

## 9. Key Design Innovations

**Internal zoom with fixed front group.** The constant 211.98 mm overall length and the fixed L1 simplify the barrel construction and maintain the center of gravity, critical for gimbal-mounted video shooting. The patent explicitly identifies this as a strategy to enable high-speed zoom operation.

**Floating focus with aspherical moving element.** Placing an aspherical surface on one of the two independently driven focus elements (L6) provides aberration correction that varies with conjugate.

**Replica aspherical technology.** A 0.05 mm bonded aspherical layer on a spherical glass substrate (S22) adds an aspheric surface near the stop without moulding a large glass element.

**Extreme-index glass strategy.** Two elements with nd > 2.0 are deployed at positions of maximum leverage (near the stop and near the image plane) to achieve aberration correction that would otherwise require additional elements.

**Moulding-grade glass.** Both GMo elements match OHARA moulding-grade catalog glasses (L-LAH85V and L-BAL42), the kind of low-softening-point glass that precision moulding requires.

---

*Analysis generated from US 2024/0192474 A1, Example 4. All focal lengths, Petzval sums, and numerical claims independently verified via paraxial ABCD matrix ray trace. The 2026-05-19 audit promoted most six-digit family labels to public catalog matches; the 2026-06-04 source pass then resolved element 8 to HOYA NBFD29 using first-party coefficient data. Production specifications sourced from Canon's official spec sheet and marketing materials. The 2026-09-23 diagram audit corrected the focus direction of L6 (image-ward, ¶0069), element shape descriptions, the aperture model and several semi-diameters.*
