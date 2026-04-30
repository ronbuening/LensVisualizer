# Sigma DP2x — 24.2 mm f/2.8 Imaging Optical System

## Source

**Patent:** JP 2010-101979 A (特開2010-101979), published 2010-05-06  
**Filing date:** 2008-10-22 (Application 特願2008-271510)  
**Applicant:** 株式会社シグマ (Sigma Inc.), Kawasaki, Japan  
**Inventor:** Noriyuki Ogasahara (小笹原 典行)  
**Example analysed:** Numerical Example 5 (数値実施例5)

---

## Overview

### The Lens and Camera

The Sigma DP2x is a fixed-lens compact camera built around a large APS-C format Foveon X3 sensor. Unlike virtually every other compact camera of its era, the DP2x committed to a single prime lens of exceptional optical quality — a 24.2 mm f/2.8 retrofocus design covering the Foveon's approximately 23.5 mm × 15.7 mm effective imaging area. The lens provides a 35 mm equivalent field of view of approximately 41 mm, placing it squarely in the "standard" category.

The DP2x was the second-generation version of the original DP2 (2009), both sharing the same optical architecture documented in this patent. The patent was filed in October 2008 — prior to the DP2's commercial release — and published in May 2010 alongside the DP2x launch, timing that is consistent with the DP2x representing a refinement of the patented design.

**Manufacturer-specified hard parameters (DP2x):**

| Parameter | Value |
|-----------|-------|
| Focal length | 24.2 mm |
| Maximum aperture | f/2.8 |
| Minimum aperture | f/11 |
| Minimum focus distance | 0.28 m |
| Diagonal field of view | ~56° |
| Filter thread | 46 mm |
| Sensor format | APS-C (Foveon X3) |

**Patent Example 5 design parameters** (all subsequent numerical analysis uses these values):

| Parameter | Patent Value |
|-----------|-------------|
| Computed EFL | 24.1472 mm |
| F-number (design) | 2.9129 |
| Full diagonal field (2ω) | 56.7586° |
| Image half-height | 13.05 mm |
| Elements / Groups | 7 / 6 |
| Aspherical surfaces | 2 |

The small discrepancy between the patent Fno (2.9129) and the marketed f/2.8 is consistent with a minor aperture optimisation in the production lens relative to the illustrative patent example. All hard specifications in this document follow the manufacturer's declared values where they differ from the patent example.

---

## Design Concept

### Why Retrofocus?

The Foveon X3 sensor — like all photosensors based on silicon photodiodes — has a directional sensitivity characteristic: photons arriving at steep oblique angles produce proportionally lower signal than those arriving near-normally. Additionally, digital camera systems commonly place optical low-pass filters and infrared-cut filters immediately in front of the sensor, requiring a mechanical clearance of several millimetres behind the rear lens element. For both reasons, digital cameras benefit strongly from *telecentric* or *near-telecentric* imaging optics that deliver chief rays at shallow angles to the image plane.

The retrofocus (inverted-telephoto) architecture solves both problems simultaneously. By placing a strong negative component in front of the aperture stop followed by a positive relay system, the exit pupil is pushed far behind the lens toward (or beyond) the image plane, making the chief ray angle at the sensor small. The same geometry also naturally produces a long back focal distance (BFD) — in this design, approximately 22.6 mm — comfortably accommodating filter stacks and mechanical clearances.

The trade-off is overall length. A simple Gaussian or Tessar design at 24 mm would be very compact, but would deliver steeply angled chief rays incompatible with the sensor. The retrofocus adds total track length in exchange for near-telecentricity at the image and long BFD.

### The Compactness Innovation

The particular challenge this patent addresses is achieving good telecentricity for a large (APS-C) sensor in a *compact* package. The patent's key claim is that placing a net-positive front group (G1a) before the stop — rather than the more conventional pure-negative "front element" — allows the optical track to be shortened significantly while retaining sufficient front-group power to bend the principal ray into a quasi-telecentric path. Condition (1) of the patent, Sd1a/f = 0.530, quantifies this compactness: the physical extent of all four pre-stop elements spans only 53% of the system focal length.

### Rear Focus

Focusing is accomplished by translating the rear single-element group (G2, element L7) along the optical axis. This arrangement has two practical advantages for a digital compact camera. First, the focusing element is the physically smallest and lightest element in the system, enabling fast response with a small actuator. Second, the front group (G1) remains stationary throughout focus travel, so the front-element diameter (and thus the filter thread engagement) does not change. The Sigma DP2x has no external focusing motion at the front barrel.

---

## Optical Group Structure

The lens is divided into two major groups with the aperture stop (S) located within the first group:

```
  Object                                       Image
    ──►  [ G1a (4 elements) ]  ──S──  [ G1b (doublet) ]  ──D12──  [ G2 (1 element) ]  ──Bf──  ⊗
         L1   L2   L3   L4                    L5 L6                      L7
         Neg Neg  Pos  Pos             (NegFlint+PosCrown)            Pos Meniscus
         ←─────── G1 (fixed) ──────────────────────►                               ←─ moves in focus
```

- **G1 (First Lens Group, fixed):** Contains the aperture stop internally. G1 is itself subdivided into the front sub-group G1a (before the stop: L1–L4) and the rear sub-group G1b (after the stop: the cemented doublet L5+L6).
- **G2 (Second Lens Group, focusing):** The single positive meniscus element L7. It moves toward the object for close focus, decreasing D12 and increasing Bf.
- **Aperture stop S:** Located within G1, between L4 and the doublet, as an iris diaphragm.

### Key Axial Dimensions at Infinity Focus

| Span | Value (mm) |
|------|-----------|
| L1 front surface to L4 rear surface (Sd1a) | 12.79 |
| L4 rear surface to aperture stop | 5.30 |
| Aperture stop to doublet front (L5) | 5.31 |
| Doublet (L5+L6) total thickness | 5.20 |
| G1b rear to G2 front (D12, at ∞) | 9.33 |
| G2 thickness (L7) | 2.57 |
| G2 rear to image plane (Bf, at ∞) | 22.64 |
| **Total track (surface 1 to image plane)** | **63.13** |

---

## Element-by-Element Analysis

All thin-lens focal lengths (fl) were computed from the lensmaker's equation using the patent prescription. Group focal lengths used full paraxial ray tracing through the actual prescription. All values are independently verified.

### L1 — Negative Meniscus, Front of G1a

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex front |
| R1 | +46.7657 mm |
| R2 | +13.6170 mm |
| Centre thickness | 1.0000 mm |
| nd / νd | 1.71300 / 53.94 |
| Thin-lens fl | −26.94 mm |
| Aspherical | No |

Both radii are positive (centres of curvature to the right), but R1 > R2, so the rear surface has a stronger curvature. The element is therefore a negative meniscus with its convex face toward the object. With a thin-lens focal length of −27 mm, L1 is the primary retrofocus negative element: it intercepts the wide incoming bundle and bends the chief rays outward, establishing the large principal-ray divergence that will be relayed back to near-telecentric at the image by the positive elements behind the stop.

The relatively high refractive index (nd = 1.713) allows the strong curvature required in a compact element. The moderately high Abbe number (νd ≈ 54) means this negative lens contributes proportionally less lateral chromatic aberration than a conventional glass would, helping the system meet its chromatic balance without over-burdening the positive elements.

**Probable glass identification:** OHARA S-LAL7 (nd = 1.71300, νd = 53.87) or HOYA LACL5 (same index). The Δνd of +0.07 relative to the S-LAL7 catalogue entry is within a single melt's typical variation. Confidence: high.

---

### L2 — Biconcave Negative

| Property | Value |
|----------|-------|
| Shape | Biconcave, symmetric |
| R1 | −30.3452 mm |
| R2 | +30.3452 mm |
| Centre thickness | 0.8000 mm |
| nd / νd | 1.60342 / 38.01 |
| Thin-lens fl | −25.14 mm |
| Aspherical | No |

The perfectly symmetric prescription (|R1| = |R2| = 30.3452 mm) is noteworthy: a symmetric biconcave element with equal radii has zero intrinsic coma contribution (to third order) for a centred object. By choosing this symmetric form, the designer avoids introducing coma from the second negative element, keeping the burden of coma correction on the subsequent biconvex elements.

L2 adds further negative power (f ≈ −25 mm) to the front group. Combined with L1, the two negative elements provide the retrofocus character while the symmetric form minimises aberration generation. The lower index (nd = 1.603) and moderate Abbe number (νd = 38) place this glass in the flint-glass territory of the Abbe diagram, introducing some secondary colour that the downstream achromatic doublet (L5+L6) helps to correct.

**Probable glass identification:** OHARA S-TIM5 (nd = 1.60342, νd ≈ 38.03), Δνd ≈ 0.02. This glass type is a standard dense-flint entry in the OHARA catalogue. Confidence: moderate (nd matches exactly; minor νd offset consistent with melt variation).

---

### L3 — Biconvex Positive

| Property | Value |
|----------|-------|
| Shape | Biconvex, asymmetric |
| R1 | +156.2100 mm |
| R2 | −50.8028 mm |
| Centre thickness | 2.2164 mm |
| nd / νd | 1.83481 / 42.72 |
| Thin-lens fl | +45.92 mm |
| Aspherical | No |

The strongly asymmetric biconvex shape (front radius very weak at 156 mm; rear radius much tighter at −51 mm) concentrates most of the refractive work at the rear surface. This arrangement — with the more curved surface facing the converging beam — is a classic strategy for minimising spherical aberration in an internal positive element.

L3 begins to converge the ray bundle after the two negatives. Its high index (nd = 1.835) and comparatively high Abbe number for such a dense glass (νd = 42.72) are important: high index glass allows the required positive power in a physically smaller, thinner element (important for the 53% total-track constraint), while the moderate-to-high νd limits the chromatic aberration contribution.

**Probable glass identification:** OHARA S-LAH55 (nd = 1.83481, νd = 42.73) or equivalent HOYA TAFD5 (same values). Δνd = 0.01. This is among the most confident glass identifications in the design, as S-LAH55 is a standard high-index lanthanum-dense-flint glass and both the index and Abbe number match to four significant figures. Confidence: very high.

---

### L4 — Biconvex Positive, Dominant Collector

| Property | Value |
|----------|-------|
| Shape | Biconvex, asymmetric |
| R1 | +22.9236 mm |
| R2 | −53.9477 mm |
| Centre thickness | 3.3836 mm |
| nd / νd | 1.88300 / 40.80 |
| Thin-lens fl | +18.22 mm |
| Aspherical | No |

L4 is the strongest single element in the entire lens and the most refractive glass in the design (nd = 1.883). Its comparatively tight front radius (+22.9 mm) and moderate rear radius (−53.9 mm) create a strongly asymmetric biconvex form where the front surface carries the majority of the positive power. Positioned immediately before the aperture stop, this is a deliberate choice: a strong converging surface placed just before the stop effectively raises the marginal ray height just as it approaches the stop, which is the correct strategy for minimising high-order spherical aberration in retrofocus systems.

L4's thin-lens focal length of +18.2 mm dominates the G1a group power. The G1a group EFL, computed by full subsystem ray tracing, is +47.45 mm (confirmed: f_G1a/f = 47.45/24.15 = 1.965, matching the patent's stated condition-value of 1.965 to three decimal places). Since G1a contains two negatives summing to about −52 mm combined and two positives roughly adding +64 mm, the net is moderately positive — consistent with the stated condition that G1a must be net positive despite containing multiple negative elements.

**Probable glass identification:** The combination nd = 1.88300, νd = 40.80 matches Schott N-LASF41A and HOYA TaFD30 (both at nd = 1.88300, νd = 40.78, Δνd = 0.02). For a Japanese manufacturer, HOYA TaFD30 or an OHARA equivalent (approximately S-LAH65 family) is likely. Confidence: high on type; moderate on specific catalogue entry due to closely clustered options in this glass region.

---

### Aperture Stop (S)

Located in the air gap between L4 and the doublet (G1b). The stop is a flat surface (R = ∞) with the iris diaphragm physically at this location, 18.09 mm behind the front lens surface.

At the marketed maximum aperture (f/2.8), the physical stop semi-diameter calculates as:

- Entrance pupil semi-diameter = EFL / (2 × Fno) = 24.1472 / (2 × 2.8) = **4.31 mm**
- Marginal ray amplification factor from entrance pupil to stop: 1.2536 (traced)
- Physical stop semi-diameter = 4.31 × 1.2536 = **5.40 mm**

The entrance pupil — the image of the stop formed by the front lens elements in object space — is located 10.17 mm behind the L1 front surface, placing it inside the lens barrel. This is a real pupil conjugate, not a virtual one: the front group has net positive power, so it forms a real image of the stop in image space rather than a virtual image in object space. From the perspective of an object at infinity, incoming ray bundles are intercepted as if the pupil were located 10.17 mm inside the lens body. The exit pupil, which determines how telecentric the illumination is at the sensor, is pushed substantially further behind the image plane by the retrofocus geometry — this is the property that enables near-telecentric chief ray delivery to the Foveon sensor.

---

### L5 + L6 — Cemented Achromatic Doublet (G1b)

This cemented pair constitutes the rear sub-group G1b, placed after the aperture stop. The prescription is:

| Property | L5 (negative, flint) | L6 (positive, crown) |
|----------|----------------------|----------------------|
| Shape | Biconcave negative | Biconvex positive |
| R_front | −15.3911 mm | +24.9748 mm (shared junction) |
| R_rear | +24.9748 mm (junction) | −15.1814 mm (aspherical\*) |
| Centre thickness | 0.8000 mm | 4.4049 mm |
| nd | 1.72825 | 1.74180 |
| νd | 28.32 | 49.23 |
| Thin-lens fl | −13.08 mm | +12.73 mm |

The doublet is cemented at the shared surface R = +24.97 mm. The juxtaposition of a high-dispersion flint (L5, νd = 28.32) against a much lower-dispersion crown-type glass (L6, νd = 49.23) with Δν = 20.91 achieves achromatic correction: the combination eliminates first-order chromatic aberration much as a traditional achromatic doublet does, but with the flint element placed *first* (the object side). This reversed arrangement — flint-first rather than the Fraunhofer crown-first order — means the high-dispersion element intercepts the converging beam immediately after the stop before the chief ray has climbed high. This geometry may serve to reduce the oblique aberration contribution of the high-dispersion flint, and is a choice sometimes made when the cemented doublet must operate in a strongly non-collimated beam.

The net group focal length of L5+L6 together, from full subsystem paraxial tracing, is +111.7 mm — a weakly positive doublet. This near-afocal character is intentional: G1b does relatively little to the vergence of the beam, instead acting primarily as a partial chromatic corrector for the accumulated chromatic imbalance of G1a. The doublet's thin-lens phi/V residual (Σφ/V = −0.0011) is non-zero, meaning the doublet does not independently achieve perfect achromatism — rather, it reduces the system's chromatic imbalance, and the remaining residual is corrected by the asymmetric glass choices in G1a and G2 operating in concert. Because the individual element focal lengths (−13 and +13 mm) are both short and opposite in sign, the thick-lens combination largely cancels, leaving a long residual positive focal length.

The principal planes of G1b are widely displaced relative to the physical element — a characteristic consequence of near-afocal systems. H lies 16.4 mm in front of L5f (object side), and H' lies 15.7 mm behind L6r (image side), placing both principal planes well outside the 5.2 mm physical extent of the doublet. This displacement has no practical consequence for the optical design — it is simply a geometric property of near-afocal groups — but it does mean that thin-lens conjugate calculations for G1b must use principal-plane distances rather than surface vertex distances.

**Aspherical surface on L6 rear (surface [12A]\*):** The rear surface of L6 carries the first aspherical surface in the system. See the aspherical surface analysis section for a detailed treatment.

**Glass identification:**
- **L5 (nd = 1.72825, νd = 28.32):** A dense flint glass in the high-index region. The combination nd ≈ 1.728, νd ≈ 28 places this glass in the OHARA S-TIH or HOYA FD series. This specific glass appears identically in Examples 1, 3, and 5, suggesting it is a single standard catalogue entry used consistently across the design family. Confidence: moderate.
- **L6 (nd = 1.74180, νd = 49.23):** A lanthanum crown glass. The closest standard entries are OHARA S-LAM55 (nd = 1.74000, νd = 49.24, Δnd = +0.00180, Δνd = 0.01) and HOYA LACL60 (same values). The small but nonzero Δnd = +0.0018 could indicate a separate catalogue entry, a known melt variant of S-LAM55, or a glass from a third manufacturer (Sumita, Hikari). Confidence: moderate-high.

---

### L7 — Positive Meniscus, Focusing Element (G2)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, concave front, convex image side |
| R1 | −127.4690 mm |
| R2 | −31.1114 mm (aspherical\*) |
| Centre thickness | 2.5658 mm |
| nd / νd | 1.58763 / 61.09 |
| Thin-lens fl (approx.) | +70.04 mm |
| Subsystem EFL (thick-lens) | +69.35 mm |
| Aspherical surfaces | 1 (rear, surface [14A]\*) |

The entire focusing function is concentrated in this single element. The sign and magnitude of both radii — both negative, with |R1| ≈ 4× |R2| — define a meniscus with its weak concave face toward the incoming beam and its stronger convex face toward the image. Per the patent (Claim 3), G2 is explicitly specified as a meniscus with the convex face toward the image side. This shape minimises the angle at which off-axis ray bundles strike the single focusing element, which in turn reduces the aberration variation that would accompany focus travel.

The low-dispersion glass (νd = 61.09) minimises the chromatic focus shift that would otherwise appear as a focus shift between wavelengths as the element moves — particularly important because G2 moves independently of G1b, which contains the primary chromatic corrector.

The principal planes of G2 (from the transfer-matrix analysis) lie close to the physical element: H = +2.12 mm from L7f (inside the glass, between the two surfaces), and H' = +0.52 mm from L7r (just to the image side of the rear surface). These unremarkable positions are consistent with a meniscus element whose two surfaces are of similar sign. The compact BFD of 22.6 mm — much shorter than the G2 standalone focal length of 69.35 mm — arises not from displaced principal planes but from the strongly converging beam that G1 delivers: G2 receives a virtual-object beam that would converge 34.6 mm past G2's front surface if G2 were absent, and redirects it to the sensor 22.6 mm behind G2's rear surface.

**Probable glass identification:** A BaCD (barium crown) or SK-type glass. The pattern nd = 1.58763, νd = 61.09 appears in Examples 1, 2, 3, and 5, suggesting a standard catalogue entry. Schott N-SK5 (nd = 1.58913, νd = 61.27) is close but differs by Δnd = −0.00150. A dedicated OHARA or HOYA equivalent may be the actual glass; HOYA BaCD5 (nd = 1.58913, νd = 61.25) has the same relationship. The glass is definitively in the BaCD / lanthanum-borosilicate family. Confidence: moderate.

---

## Aspherical Surface Analysis

### General Sag Equation

All aspherical surfaces in this patent use the following sag function (equation as stated in the patent):

$$z = \frac{(1/r) \cdot y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10}$$

where $r$ is the vertex radius of curvature, $K$ is the conic constant, and $A_4$–$A_{10}$ are the polynomial aspherical coefficients. The patent uses only the conic $K$ and four polynomial terms; higher-order terms are not specified for Example 5. Both aspherical surfaces have $K = 0$, indicating spherical base curves with polynomial-only aspheric departure.

### Surface [12A]\* — Rear of L6 (G1b doublet rear)

**Prescription:**

| Coefficient | Value |
|------------|-------|
| Base radius R | −15.1814 mm |
| K | 0 |
| A₄ | +3.046922 × 10⁻⁵ mm⁻³ |
| A₆ | +1.288985 × 10⁻⁷ mm⁻⁵ |
| A₈ | −8.073659 × 10⁻¹⁰ mm⁻⁷ |
| A₁₀ | +1.215549 × 10⁻¹¹ mm⁻⁹ |

**Computed sag departure from base sphere:**

| Semi-height h (mm) | Polynomial departure (µm) | Base sag (mm) | Frac. of base |
|-------------------|--------------------------|--------------|--------------|
| 1.0 | 0.031 | −0.0330 | 0.09% |
| 2.0 | 0.496 | −0.1323 | 0.38% |
| 3.0 | 2.557 | −0.2994 | 0.85% |
| 4.0 | 8.288 | −0.5364 | 1.55% |
| 5.0 | 20.861 | −0.8470 | 2.46% |
| 6.0 | 44.881 | −1.2360 | 3.63% |

The positive A₄ (dominant at smaller apertures) and positive A₆ coefficient mean the surface is progressively *less concave* toward the rim than the base sphere — in other words, the surface flattens out relative to the sphere at larger heights. This is a classic spherical aberration correction: a concave surface (R < 0) that is flatter at the rim than a sphere reduces the over-convergence of marginal rays. The A₈ coefficient is negative, providing a modest reversal of the trend at very high heights to avoid over-correction.

**Optical role:** Placed on the cemented doublet's rear surface (at the boundary between G1b and the air gap to G2), this aspherical surface is well-positioned to correct spherical aberration and possibly residual astigmatism from the front group without generating significant coma. The doublet rear surface is in a region where the chief ray is already gaining lateral displacement while the marginal ray height is close to its local minimum after the aperture stop — an aperture-proximate placement that biases the correction toward spherical aberration and away from field aberrations.

### Surface [14A]\* — Rear of L7 (G2 rear, focusing element rear)

**Prescription:**

| Coefficient | Value |
|------------|-------|
| Base radius R | −31.1114 mm |
| K | 0 |
| A₄ | +9.111786 × 10⁻⁶ mm⁻³ |
| A₆ | −6.004492 × 10⁻⁹ mm⁻⁵ |
| A₈ | +1.095870 × 10⁻⁹ mm⁻⁷ |
| A₁₀ | −5.418634 × 10⁻¹² mm⁻⁹ |
| A₁₂, A₁₄ | (not specified; assumed 0) |

**Computed sag departure from base sphere:**

| Semi-height h (mm) | Polynomial departure (µm) | Base sag (mm) | Frac. of base |
|-------------------|--------------------------|--------------|--------------|
| 1.0 | 0.009 | −0.0161 | 0.06% |
| 2.0 | 0.146 | −0.0644 | 0.23% |
| 3.0 | 0.741 | −0.1450 | 0.51% |
| 4.0 | 2.374 | −0.2582 | 0.92% |
| 5.0 | 5.976 | −0.4044 | 1.48% |
| 6.0 | 13.042 | −0.5840 | 2.23% |
| 8.0 | 48.315 | −1.0462 | 4.62% |

The alternating signs of the coefficients (A₄ > 0, A₆ < 0, A₈ > 0, A₁₀ < 0) indicate a more oscillatory correction profile, suggesting that this surface is balancing several aberration types simultaneously — characteristic of a surface controlling *both* field aberrations (curvature, distortion) and residual spherical aberration.

Placed on the rear surface of the focusing element, this aspherical surface is in a field-dominant position: the marginal ray height is modest (~3.9 mm from the trace), but the chief ray height is large (~7.8 mm, the largest of any surface in the system). Aspherical correction at a surface dominated by the chief ray primarily addresses field curvature and (negative) distortion — precisely the aberrations that a single positive meniscus element placed after the stop, in a retrofocus system, would otherwise generate. The patent explicitly states that the aspherical shape of G2 reduces negative distortion and stabilises spherical aberration during focus travel.

---

## Focusing Mechanism

### Architecture

Focusing is accomplished by translating G2 (element L7 alone) toward the object for closer distances. G1 — comprising all four elements of G1a, the aperture stop, and the doublet G1b — remains mechanically fixed. The variable air gap D12 (between G1b rear and G2 front) and the back focal distance Bf (from G2 rear to the image plane) are both variable, but their sum is *constant*:

| Object distance | D12 (mm) | Bf (mm) | D12 + Bf (mm) |
|----------------|---------|--------|---------------|
| ∞ | 9.3255 | 22.6350 | **31.9605** |
| 1000 mm | 8.1995 | 23.7610 | **31.9605** |
| 500 mm | 6.9867 | 24.9738 | **31.9605** |
| 280 mm (est.) | 5.7909 | 26.1696 | **31.9605** |

The 500 mm rows are patent-tabulated. The 280 mm row was computed by paraxial back-solve at the manufacturer's close focus distance, and is not patent-listed. The invariance D12 + Bf = 31.9605 mm confirms that G2 translates as a rigid body along the optical axis — decreasing D12 and increasing Bf — with the sensor fixed in the camera body. From infinity to the manufacturer's close focus of 280 mm, G2 moves approximately 3.53 mm toward the object.

### Magnification and Focus Sensitivity

The lateral magnification of G2 at infinity focus — $\beta_2$ — was computed from the paraxial ray trace as the ratio of the convergence angles before and after G2:

$$\beta_2 = \frac{n_{\text{obj}} \cdot u_{\text{before G2}}}{n_{\text{img}} \cdot u_{\text{after G2}}} = \frac{-0.0282054}{-0.0414126} = +0.681$$

This matches the patent's stated value of 0.681 to three significant figures. The positive sign is consistent with a real image on both sides of G2 (the beam converging before and after the element). The magnitude |β₂| = 0.681 satisfies condition (4): 0.60 < |β₂| < 0.70.

The condition (4) limits have a physical interpretation. If |β₂| were too small (G2 too strong), the focusing element would generate large aberration variation as it translates. If |β₂| were too large (G2 too weak), the required focus travel for a given object distance change would become large, penalising compactness and actuator speed.

---

## Conditional Expression Verification

All six conditions stated in the patent were verified by independent paraxial computation.

| # | Expression | Patent value | Computed | Range | Status |
|---|-----------|-------------|---------|-------|--------|
| (1) | Sd1a / f | 0.530 | **0.530** | 0.40–0.60 | ✓ |
| (2) | Nd1ap (max nd of positive lenses in G1a) | 1.883 | **1.883** | > 1.77 | ✓ |
| (3) | f1a / f | 1.965 | **1.965** | 1.2–2.5 | ✓ |
| (4) | \|β₂\| | 0.681 | **0.681** | 0.60–0.70 | ✓ |
| (5) | Nd1an (max nd of negative lenses in G1a) | 1.713 | **1.713** | > 1.65 | ✓ |
| (6) | νd1an (Abbe of highest-nd negative lens in G1a = L1) | 53.938 | **53.94** | > 50 | ✓ |

**Notes on condition derivations:**

- **Condition (1):** Sd1a is the total axial extent of G1a from the front vertex of L1 to the rear vertex of L4, **not including** the subsequent air gap from L4 to the stop. This interpretation (Sd1a = 12.79 mm) produces the patent value exactly; including the trailing gap would give 18.09 mm and a ratio of 0.749, which is out of range and inconsistent with the patent.
- **Condition (2):** The positive lenses in G1a are L3 (nd = 1.83481) and L4 (nd = 1.88300). Nd1ap = max = 1.88300 ≡ L4's glass.
- **Condition (5):** The negative lenses in G1a are L1 (nd = 1.71300) and L2 (nd = 1.60342). Nd1an = max = 1.71300 ≡ L1's glass. The condition ensures the negative elements use high-index glass, reducing curvature requirements and controlling coma.
- **Condition (6):** Applied to L1 (the highest-nd negative lens in G1a). νd = 53.94 > 50 ensures this negative element has low enough dispersion that it does not introduce excessive lateral chromatic aberration.

---

## Petzval Field Curvature

The Petzval sum was computed surface-by-surface as $\sum_i (n'_i - n_i) / (n_i \cdot n'_i \cdot R_i)$:

$$P = +0.004395 \;\text{mm}^{-1} \quad \Longrightarrow \quad R_{\text{Petzval}} = +227.5 \;\text{mm}$$

A positive Petzval sum indicates the natural image surface curves so that edge-field focus lies closer to the lens than the axial focus — the "bowl" opens toward the object side. This is the typical undercorrected condition for a net-positive optical system. The magnitude, with a Petzval radius of 227 mm compared to an EFL of 24 mm, represents a ratio R_P/f ≈ 9.4 — a well-controlled Petzval curvature for a fast retrofocus lens.

The dominant positive contributors to the Petzval sum, ranked by magnitude, are: surface 12A (L6 rear, +2.81×10⁻²), surface 7 (L4 front, +2.05×10⁻²), surface 14A (L7 rear, +1.19×10⁻²), and surfaces 6, 1, and 8 (L3 rear, L1 front, L4 rear, each near +8.7–9.0×10⁻³). The dominant negative contributions come from surface 2 (L1 rear, −3.06×10⁻²) and surface 10 (L5 front, −2.74×10⁻²), with surfaces 3 and 4 (both L2, −1.24×10⁻² each) providing secondary negative contributions. The doublet cemented junction (surface 11) contributes only +1.8×10⁻⁴, near zero, as expected for surfaces between glasses of similar refractive index.

The near-cancellation of L5 front (−2.74×10⁻²) and L6 rear (+2.81×10⁻²) is notable: these two surfaces form the G1b doublet's outer faces, and their opposing contributions bring the doublet close to Petzval-neutral (+0.07×10⁻² net for the doublet, essentially zero).

The aspherical surface on G2 rear (surface [14A]) does not contribute to the Petzval sum (which depends only on the spherical base curve radii) but does flatten the tangential and sagittal fields through higher-order correction.

A thin-lens estimate of the system's primary axial chromatic balance — the sum Σφ/V across all elements — gives −7.50×10⁻⁴ mm⁻¹, corresponding to a paraxial longitudinal chromatic aberration of approximately −0.44 mm (EFL² × Σφ/V). The non-zero residual confirms that this is not a fully corrected achromatic system in the thin-lens sense; thick-lens effects, the aspherical surfaces, and the deliberate mismatch of dispersion values across the groups together achieve an acceptable chromatic balance for the sensor's bandwidth. The primary chromatic corrector is the G1b doublet (ΔV = 20.9 between L5 and L6), which contributes the largest magnitude individual phi/V terms in the system and reduces the G1a chromatic imbalance — though not to zero.

---

## Summary of Verified Optical Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| EFL | 24.1472 mm | Paraxial trace (matches patent exactly) |
| Back focal distance (Bf, ∞) | 22.6350 mm | Patent / verified |
| Total track (front to image) | 63.13 mm | Summed from prescription |
| Total track / EFL | 2.614 | Derived |
| Stop position (from L1 front) | 18.09 mm | Prescription |
| Entrance pupil position (from L1 front) | 10.17 mm | Traced (real pupil, inside lens) |
| Entrance pupil SD (marketed f/2.8) | 4.31 mm | EFL / (2 × 2.8) |
| Physical stop SD (marketed f/2.8) | 5.40 mm | Traced |
| Image half-height | 13.05 mm | f × tan(ω) |
| G1a EFL | 47.45 mm | Subsystem trace |
| G1b (doublet) EFL | 111.7 mm | Subsystem trace |
| G1b H' from L6r | +15.66 mm | Matrix (image side) |
| G2 (L7) EFL | 69.35 mm | Subsystem trace |
| G2 H from L7f | +2.12 mm | Matrix (inside glass) |
| G2 H' from L7r | +0.52 mm | Matrix (image side) |
| β₂ (G2 magnification at ∞) | +0.681 | Angle ratio |
| G2 travel (∞ → 500 mm) | 2.34 mm | Variable gap Δ |
| G2 travel (∞ → 280 mm) | 3.53 mm | Paraxial back-solve |
| D12 + Bf invariant | 31.9605 mm | Verified at all focus distances |
| Petzval sum | +0.004395 mm⁻¹ | Surface-by-surface computation |
| Petzval radius | 227.5 mm | 1 / Petzval sum |

### Estimated Element Semi-Diameters

Semi-diameters were estimated from a combined marginal and chief ray trace at the marketed maximum aperture (f/2.8) and full field (2ω = 56.76°). A 10% mechanical clearance margin was applied to all optical surfaces except the aperture stop. Stop SD is set to the marketed f/2.8 physical aperture without additional margin.

Several front-group surfaces required downward revision from the raw ray-trace values due to cross-gap sag intrusion constraints. The L1r→L2f air gap (3.768 mm) limits both bounding surfaces to ≤ 7.71 mm at the rim; the L2r→L3f air gap (0.916 mm) independently limits both bounding surfaces to ≤ 7.80 mm. As a result, surfaces 2 through 5 (L1 rear and all of L2) are constrained well below the marginal-plus-chief-ray estimate. Similarly, the L6 rear semi-diameter (surface 12A) is limited to 8.8 mm by the element's edge thickness — the tight concave rear radius (R = −15.18 mm) accumulates sag rapidly with increasing height, and exceeding 8.8 mm would reduce the rim edge thickness below a practical minimum.

| Surface | Location | SD (mm) | Constraint |
|---------|----------|---------|-----------|
| 1 | L1 front | 10.5 | Ray trace |
| 2 | L1 rear | 9.0 | Cross-gap (L1r→L2f) |
| 3 | L2 front | 7.5 | Cross-gap (L1r→L2f, L2r→L3f) |
| 4 | L2 rear | 7.5 | Cross-gap (L2r→L3f) |
| 5 | L3 front | 8.0 | Ray trace |
| 6 | L3 rear | 8.5 | Ray trace |
| 7 | L4 front | 9.0 | Ray trace |
| 8 | L4 rear | 8.5 | Ray trace |
| STO | Aperture stop | 5.4 | Marketed f/2.8 |
| 10 | L5 front | 7.7 | Ray trace |
| 11 | L5/L6 junction | 8.1 | Ray trace |
| 12A | L6 rear | 8.8 | Element edge thickness |
| 13 | L7 front | 12.3 | Ray trace |
| 14A | L7 rear | 12.8 | Ray trace |

The graduated increase from stop (~5.4 mm) to L7 rear (~12.8 mm) is characteristic of a retrofocus design: the chief ray diverges strongly after the stop, and by the time it reaches the rear focusing element, it carries more than three times the height of the marginal ray. The relatively large G2 element diameter is a direct consequence of this geometry.

---

## Glass Summary

| Element | nd | νd | 6-digit code | Probable Glass | Catalogue | Confidence |
|---------|------|------|-------------|---------------|-----------|-----------|
| L1 | 1.71300 | 53.94 | 713/539 | S-LAL7 / LACL5 | OHARA / HOYA | High |
| L2 | 1.60342 | 38.01 | 603/380 | S-TIM5 (≈) | OHARA | Moderate |
| L3 | 1.83481 | 42.72 | 835/427 | S-LAH55 / TAFD5 | OHARA / HOYA | Very high |
| L4 | 1.88300 | 40.80 | 883/408 | ~S-LAH65 / TaFD30 / N-LASF41A | OHARA/HOYA/Schott | High |
| L5 | 1.72825 | 28.32 | 728/283 | S-TIH family / FD series | OHARA / HOYA | Moderate |
| L6 | 1.74180 | 49.23 | 742/492 | ~S-LAM55 / LACL60 | OHARA / HOYA | Moderate–High |
| L7 | 1.58763 | 61.09 | 588/611 | ~BaCD family / SK family | Various | Moderate |

The four front elements (L1–L4) span a wide range of Abbe numbers (38–54), creating a dispersively mixed group that would introduce significant chromatic aberration in isolation. The doublet L5+L6 (Δν = 20.9) is the primary chromatic corrector, balancing the accumulated dispersion of G1a. The rear focusing element L7 uses the lowest-dispersion glass in the system (νd = 61.09), minimising focus-induced chromatic shift.

---

## Design Character and Context

The JP 2010-101979 design represents a thoughtful compact retrofocus optimisation for a large digital sensor. Several design choices merit specific note:

1. **Net-positive G1a despite containing two negatives.** The conventional approach for a compact standard lens targeting digital sensors would place a single large negative element in front of the stop. Using four elements (two negative, two positive) in G1a allows finer aberration control while still achieving the compactness target.

2. **Reversed achromat order in G1b (L5 flint-first).** The flint-first orientation of the doublet, combined with its near-afocal net power, functions more as a field-zone corrector than as a simple chromatic balancer. The aspherical surface on L6 rear extends this corrective function into the aspherical domain.

3. **No aspherical surface in the front group.** Unlike many contemporary retrofocus designs, the front group contains no aspheres — all four elements are spherical. This is a notable simplification, presumably chosen to hold manufacturing cost for a consumer compact camera. The aberration workload that would normally be assigned to a front-group asphere is instead distributed between the G1b aspherical surface and the G2 aspherical rear surface.

4. **Single-element G2 with one aspherical surface.** The single focusing element carries one aspherical surface. This asphere is responsible for correcting distortion (dominant), field curvature residual, and focus-shift-dependent aberration variation — a demanding assignment for one surface, but made tractable by the relatively modest field angle (28° half-field) and the pre-correction provided by G1b.

5. **Petzval control without field-flattening glass.** The Petzval radius of 227 mm (9.4× the EFL) is achieved without any dedicated field-flattening element. The near-Petzval-neutral doublet G1b contributes to this, and the aspherical rear surface of G2 completes the field control.
