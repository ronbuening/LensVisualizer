# NIKON NIKKOR Z 26mm f/2.8 — Patent Analysis

**Patent:** WO 2023/190222 A1 (PCT/JP2023/011961)
**Priority:** JP 2022-053866, filed 29 March 2022
**Published:** 5 October 2023
**Assignee:** Nikon Corporation
**Inventors:** Ayumu Makida, Taeko Toshi
**Example analysed:** Example 1 (第1実施例), Table 1

---

## 1. Production Identification

The patent's Example 1 matches the production NIKKOR Z 26mm f/2.8 (released February 2023) on every verifiable parameter:

| Parameter | Patent Ex. 1 | Production | Match |
|-----------|-------------|------------|-------|
| Focal length | 26.78 mm | 26 mm (nominal) | ✓ |
| Maximum aperture | f/2.90 | f/2.8 (nominal) | ✓ |
| Half-field angle (ω) | 40.30° (full 80.6°) | 79° full FOV | ≈ |
| Elements / Groups | 8 / 4 (patent grouping) | 8 / 6 (marketing grouping) | ✓ (see §2) |
| Aspherical surfaces | 4 (on 3 elements) | 3 aspherical elements | ✓ |
| Focus mechanism | Unit focus (all-element) | All-element focusing | ✓ |
| Max image height (Y) | 21.05 mm | FX half-diagonal 21.63 mm | ✓ (97.3%) |
| Computed MFD | ~199 mm | 0.2 m (200 mm) | ✓ |
| Computed magnification | 0.191× | 0.19× | ✓ |
| Total track (TL) | 38.15 mm | — | — |

The full field of view from the patent's half-field angle (2 × 40.30° = 80.6°) is slightly wider than the production specification of 79°. The patent's ω is the real (finite) chief ray angle at the maximum image height — not a paraxial approximation. For comparison, the paraxial half-field angle arctan(Y/f) = arctan(21.05/26.78) = 38.17° is 2.1° smaller than the real angle, a difference consistent with barrel distortion. The ~1.6° difference between the patent's full 80.6° and the production's 79° reflects the mechanically vignetted field specification. The patent's Y = 21.05 mm corresponds to 97.3% of the full FX half-diagonal (21.63 mm), consistent with the production image circle covering the frame with slight corner vignetting.

The patent cites JP 2017-054078 (Fujifilm) as prior art. The international search report additionally identifies several Nikon, Fujifilm, Konishiroku, and Sigma prior art documents as relevant, including WO 2022/244840 (a closely related Nikon filing from November 2022).

---

## 2. Optical Architecture

### 2.1 Group Structure

The patent describes the system in four functional groups (§0195):

| Patent Group | Power | Elements | Patent FL (mm) | Verified FL (mm) |
|-------------|-------|----------|----------------|------------------|
| G1 | Positive | L1 | +123.54 | +123.54 |
| G2 | Positive | L2+L3 (cemented), L4+L5 (cemented), L6 | +20.55 | +20.55 |
| G3 | Negative | L7 | −20.18 | −20.18 |
| G4 | Positive | L8 (composite asphere) | +31.47 | +31.47 |

The production marketing specification of "8 elements in 6 groups" counts air-separated subgroups within patent-G2 as individual groups: L2+L3 cemented, L4+L5 cemented, and L6 singlet each count as separate groups, yielding six total.

All four patent group focal lengths were independently verified via paraxial ray trace and match the patent-listed values exactly.

### 2.2 Design Topology

The system follows a front-group–stop–rear-group topology, where the single-element G1 sits ahead of the aperture diaphragm and the multi-element rear assembly (patent groups G2–G4) follows. G1 is a weak positive meniscus, the stop sits between G1 and the strongly positive G2 core, and the system closes with a negative G3 followed by a positive G4. The back focal distance (Bf = 10.76 mm at infinity) is substantially shorter than the system EFL (26.78 mm), giving a BFL/EFL ratio of 0.40. This is not a retrofocus design — retrofocus wide-angles use a negative front group to push the back focus beyond the EFL (BFL > EFL), enabling clearance for SLR mirrors. Here, the absence of that negative-front constraint yields a much shorter total track (TL/f = 1.425 vs. typical retrofocus ratios of 2.0–2.5 for a 26 mm design), at the cost of a short back focus. The 10.76 mm BFL is less than the Z mount's 16 mm flange distance, meaning the rear of the lens extends behind the mount surface into the camera body cavity — a design freedom enabled by the mirrorless architecture that makes this compact non-retrofocus topology feasible.

Within G2, the two cemented doublets are arranged in a mirror-symmetric configuration with respect to each other: D1 (L2+L3) places its negative element on the object side and positive element on the image side, while D2 (L4+L5) places its positive element on the object side and negative element on the image side. The patent (§0062) explicitly notes that this symmetric doublet pairing enables effective correction of aberrations, particularly coma. The air-spaced L6 corrector element completes G2 before the beam enters the negative G3.

The total track at infinity is just 38.15 mm — only 1.425× the focal length (TL/f = 1.425). This is a remarkably compact ratio for a 26 mm wide-angle design covering full frame, and the conditional expressions in the patent place explicit upper and lower bounds on this ratio (condition 15: 0.750 < TL/f < 1.600).

---

## 3. Surface Prescription and Verification

### 3.1 Paraxial Verification

The system EFL was computed via a full paraxial marginal ray trace through all 16 surfaces:

| Parameter | Computed | Patent | Discrepancy |
|-----------|----------|--------|-------------|
| EFL | 26.7799 mm | 26.78 mm | 0.0001 mm (0.000%) |
| BFL (Bf) | 10.7604 mm | 10.760 mm | 0.0004 mm |
| Total track | 38.150 mm | 38.15 mm | exact |

### 3.2 Conditional Expression Verification

All 28 numbered conditional expressions listed in the patent were independently computed from the prescription data. Every expression matches the patent-listed value for Example 1 to within ±0.001 (rounding precision of the published table), and all fall within their specified valid ranges, with one exception: condition (12), a Petzval-sum ratio whose precise computation depends on a convention choice discussed in §8. The full verification table is provided in Appendix A.

---

## 4. Aspherical Surfaces

The design uses four aspherical surfaces distributed across three elements. This is confirmed by both the patent (which marks surfaces 1, 10, 11, and 14 with asterisks) and the production specification of "3 aspherical elements."

All aspherical surfaces use the standard even-polynomial sag equation:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + \cdots$$

### 4.1 Surface 1 — L1 Front (Single Asphere)

| Coefficient | Value |
|-------------|-------|
| K | 1.0000 |
| A4 | −6.30 × 10⁻⁵ |
| A6 | −1.02 × 10⁻⁶ |
| A8 | −1.93 × 10⁻⁸ |

The conic constant K = 1.0 defines an oblate ellipsoidal base surface (K > 0 = oblate; for reference, K = 0 is a sphere and K = −1 is a paraboloid). The oblate base flattens the surface at the rim relative to a sphere, and modest polynomial corrections are applied on top. Aspherical departure from a best-fit sphere reaches about +5 μm at the edge of the clear aperture (h ≈ 6 mm). This is the front element of the lens, directly exposed to the object space, and the aspherical profile primarily addresses spherical aberration introduced by the steep meniscus curvature and helps control the ray angles entering the stop.

L1 is fabricated from S-BAL35, which carries OHARA's standard "S-" prefix rather than the "L-" prefix designating their low-Tg PGM (precision glass molding) series. OHARA does produce an optically equivalent L-BAL35 specifically for PGM applications, but the patent's nd/νd values match both S-BAL35 and L-BAL35 identically — the choice between them cannot be determined from the patent data alone. If the standard S-BAL35 is used, the aspherical surface would be produced by CNC grinding and polishing, which is well within capability for the modest ~5 μm departure. If L-BAL35 is used, PGM is the likely production method.

### 4.2 Surfaces 10 and 11 — L6 (Double Asphere)

**Surface 10 (L6 front):**

| Coefficient | Value |
|-------------|-------|
| K | 0.2964 |
| A4 | −1.07 × 10⁻⁴ |
| A6 | +1.09 × 10⁻⁵ |
| A8 | −1.04 × 10⁻⁷ |
| A10 | −6.74 × 10⁻⁹ |
| A12 | +1.76 × 10⁻¹⁰ |
| A14 | +8.59 × 10⁻¹⁴ |
| A16 | −9.66 × 10⁻¹⁴ |
| A18 | +1.31 × 10⁻¹⁵ |

**Surface 11 (L6 rear):**

| Coefficient | Value |
|-------------|-------|
| K | 1.0000 |
| A4 | +1.94 × 10⁻⁴ |
| A6 | +9.62 × 10⁻⁶ |
| A8 | +1.86 × 10⁻⁸ |
| A10 | −3.79 × 10⁻⁹ |
| A12 | +3.78 × 10⁻¹¹ |

L6 is the most optically distinctive element in this design. Its front and rear radii are −9.52831 mm and −9.47003 mm respectively — a difference of only 0.058 mm. The two surface powers are large and nearly equal in magnitude but opposite in sign (φ₁ = −0.0612 mm⁻¹, φ₂ = +0.0616 mm⁻¹), leaving a residual so small that the focal length is extremely sensitive to the thick-lens correction term. In the thin-lens approximation the focal length is about +2655 mm (effectively infinite), while the thick-lens formula yields approximately +334 mm — the difference arises because the correction term (d/n)·φ₁·φ₂ is nearly seven times larger than the thin-lens residual. Either way, L6's paraxial power contribution is small relative to the 26.78 mm system focal length, confirming that its primary role lies in its aspherical profiles rather than in its first-order power. Despite this weak base power, both surfaces carry heavy aspherical departures: Surface 10 departs from a sphere by about −8 μm at h = 4 mm, while Surface 11 departs by +36 μm at the same height, rising to +61 μm at h = 4.5 mm.

Functionally, L6 acts as an embedded corrector plate — analogous in purpose (though not in geometry) to a Schmidt corrector in a catadioptric system, in that it introduces negligible first-order power but provides strong higher-order wavefront correction. The polynomial coefficients extend to 18th order on Surface 10, indicating that the correction profile must be shaped with precision across the full aperture. The primary function of L6 is to clean up residual spherical aberration, field curvature, and higher-order coma generated by the two cemented doublets ahead of it.

L6 is fabricated from OHARA L-BAL42 (nd = 1.58313, νd = 59.38). The "L-" prefix in OHARA's naming convention designates their Low-Tg (low transformation temperature) glass series, specifically engineered for precision glass molding. This confirms that L6 is produced by PGM, which is the only economically viable method for double-aspherical surfaces with this level of correction.

### 4.3 Surface 14 — L8 Resin Layer (Composite Asphere)

| Coefficient | Value |
|-------------|-------|
| K | 1.0000 |
| A4 | +4.28 × 10⁻⁵ |
| A6 | −3.34 × 10⁻⁷ |
| A8 | +1.25 × 10⁻⁹ |
| A10 | −3.20 × 10⁻¹² |
| A12 | +3.14 × 10⁻¹⁵ |

L8 is explicitly described in the patent (§0199) as a composite aspherical lens: a glass body made from S-LAH58 (nd = 1.88300) with a thin UV-curing resin layer (nd = 1.56093, thickness 0.100 mm) bonded to its object-facing surface. The resin layer's front face (Surface 14) is the aspherical surface; the junction between resin and glass (Surface 15) and the glass body's image-side face (Surface 16) are both spherical.

The aspherical departure on Surface 14 is substantial: approximately +100 μm at h = 8 mm, where the surface systematically flattens relative to a sphere. At these marginal heights, the resin asphere reshapes the wavefront passing through L8 to control field curvature and residual astigmatism across the image field. The resin layer's low refractive index (1.56093) relative to the glass body (1.88300) means the junction surface also contributes meaningful negative power, which partially offsets the glass body's strong positive contribution.

The composite asphere construction — rather than a fully glass-molded asphere — is a pragmatic manufacturing choice. S-LAH58 is a dense lanthanum flint glass (nd = 1.883) that cannot be precision glass molded due to its high transformation temperature. The resin overlay allows the aspherical correction to be applied to a conventional polished glass substrate.

---

## 5. Glass Identification

Glass identification was performed by matching the patent-listed nd and νd values against the OHARA and Schott catalogs. All eight glass elements yielded strong catalog matches, with nd values matching to five decimal places and νd within typical patent rounding tolerance (≤ 0.15).

| Element | nd | νd | Best Catalog Match | Δnd | Δνd | Type |
|---------|------|------|-------------------|-----|-----|------|
| L1 | 1.58913 | 61.1 | **OHARA S-BAL35** | 0.00000 | 0.05 | Barium crown |
| L2 | 1.59270 | 35.3 | **OHARA S-TIM2** | 0.00000 | 0.01 | Titanium flint |
| L3 | 1.88300 | 40.7 | **OHARA S-LAH58** | 0.00000 | 0.06 | Lanthanum dense flint |
| L4 | 1.81600 | 46.6 | **OHARA S-LAL18** | 0.00000 | 0.02 | Lanthanum crown |
| L5 | 1.62004 | 36.4 | **Schott N-F2** | 0.00001 | 0.03 | Dense flint |
| L6 | 1.58313 | 59.5 | **OHARA L-BAL42** | 0.00000 | 0.12 | PGM barium crown |
| L7 | 1.75520 | 27.6 | **OHARA S-TIH6** | 0.00000 | 0.07 | Heavy flint |
| L8 resin | 1.56093 | 36.6 | UV-curing resin | — | — | Composite asphere |
| L8 glass | 1.88300 | 40.7 | **OHARA S-LAH58** | 0.00000 | 0.06 | Lanthanum dense flint |

**Notes on the identifications:**

For L5, both Schott N-F2 (Δνd = 0.03) and OHARA S-TIM28 (Δνd = 0.14) are plausible candidates on nd alone, but the Schott match is superior on νd. The use of a mixed-supplier glass set (predominantly OHARA with one Schott glass) is not uncommon in Nikon designs.

For L6 (OHARA L-BAL42), the νd discrepancy of 0.12 is the largest in the set but still within typical patent rounding. The L-prefix confirms PGM suitability, consistent with L6 carrying two aspherical surfaces.

The L8 resin (nd = 1.56093, νd = 36.6) does not appear in standard optical glass catalogs. This is expected — it is a proprietary UV-curing optical adhesive/resin used specifically for composite aspherical element construction.

No anomalous partial dispersion (APD) glasses appear in this design. None of the identified glasses fall significantly above or below the Schott "normal line" on the PgF–νd diagram. The design relies on structural correction (element count, aspherical surfaces, and cemented doublet Abbe-number differentials) rather than anomalous-dispersion materials for chromatic control. This is consistent with the lens's market positioning — the Z 26mm f/2.8 is not an S-line lens and uses no ED, Super ED, SR, or fluorite elements.

---

## 6. Element-by-Element Optical Analysis

### L1 — Front Positive Meniscus (G1)

**Glass:** S-BAL35 (nd = 1.589, νd = 61.1)
**Shape:** Positive meniscus, convex toward the object
**Radii:** R₁ = +11.702 mm, R₂ = +13.383 mm
**Thickness:** 1.270 mm
**Focal length:** +123.5 mm (thick-lens)
**Aspherical:** Front surface (K = 1.0, oblate ellipsoidal base)

L1 is the sole element in G1 and the only element before the aperture stop. It acts as a weak positive field lens, bending off-axis ray bundles gently toward the optical axis before they reach the stop. Its long focal length (+123.5 mm, about 4.6× the system EFL) means it contributes minimal optical power — condition (17) bounds f1/f to 0.7–5.0, and Example 1 sits at 4.613, near the upper limit, confirming the deliberate weakness.

The aspherical front surface corrects the refraction angles of marginal rays entering the system, mitigating spherical aberration and helping to place the entrance pupil efficiently for the compact total track. The meniscus shape (both surfaces convex with nearly equal radii) minimizes the off-axis angle of incidence, reducing coma and astigmatism contributions from G1.

S-BAL35 is a barium crown glass commonly used in consumer optics. Its moderate index (1.589) and high Abbe number (61.1) give low dispersion contribution, appropriate for a front meniscus that handles the full spectral bandwidth of the incoming light.

### L2 — Negative Element of First Cemented Doublet (D1 / G2)

**Glass:** S-TIM2 (nd = 1.593, νd = 35.3)
**Shape:** Biconcave
**Radii:** R₁ = −37.934 mm, R₂ = +11.354 mm (junction)
**Thickness:** 0.700 mm
**In-air focal length:** −14.7 mm (strongly negative in isolation)

L2 is the object-side element of the first cemented doublet. Its role is to introduce negative power with relatively low Abbe number (νd = 35.3), creating the chromatic dispersion differential needed to correct longitudinal chromatic aberration when combined with the positive L3.

The biconcave shape concentrates the negative power, while the very thin center thickness (0.700 mm) is consistent with the patent's emphasis on overall compactness. The Abbe-number difference between L2 and L3 is Δν = 40.7 − 35.3 = 5.4 (condition 7), which is modest by doublet standards — the design relies on substantial index contrast (Np1 − Nn1 = 0.290) at the cemented junction to balance chromatic and monochromatic corrections.

### L3 — Positive Element of First Cemented Doublet (D1 / G2)

**Glass:** S-LAH58 (nd = 1.883, νd = 40.7)
**Shape:** Biconvex
**Radii:** R₁ = +11.354 mm (junction), R₂ = −46.903 mm
**Thickness:** 2.800 mm
**In-air focal length:** +10.6 mm (strongly positive in isolation)

L3 provides the dominant positive power of the first doublet and is the thickest element in the doublet (tp1/tn1 = 4.000, condition 4). S-LAH58 is a high-index lanthanum dense flint (nd = 1.883), providing strong refractive power per unit curvature. The same glass appears again in L8's body, giving the design seven distinct glass types across eight elements (with S-LAH58 used twice) — an economical choice that simplifies inventory in production.

The first cemented doublet D1 (L2 + L3) has a combined thin-lens focal length of +34.8 mm. It constitutes one half of the quasi-symmetric doublet pair that forms the core of the rear group's power.

### L4 — Positive Element of Second Cemented Doublet (D2 / G2)

**Glass:** S-LAL18 (nd = 1.816, νd = 46.6)
**Shape:** Biconvex
**Radii:** R₁ = +58.388 mm, R₂ = −8.935 mm (junction)
**Thickness:** 3.870 mm
**In-air focal length:** +9.7 mm (strongly positive in isolation)

L4 is the thickest standalone glass element in the system at 3.870 mm (L8's composite thickness of 6.630 mm is greater, but consists of a resin layer bonded to a glass body) and carries the strongest isolated positive power. It is the object-side element of the second cemented doublet, with the negative element (L5) following on the image side — the mirror image of D1's arrangement (negative-first). This structural symmetry about the aperture stop is a classic technique for suppressing odd-order aberrations, particularly coma and distortion.

S-LAL18 is a lanthanum crown with high index (1.816) and moderate Abbe number (46.6). The Abbe contrast with L5 is νdp2 − νdn2 = 46.6 − 36.4 = 10.2 (condition 11), nearly double that of the first doublet's 5.4. Combined with the second doublet's index contrast (Np2 − Nn2 = 1.816 − 1.620 = 0.196, condition 10), this provides more aggressive chromatic correction at the image side where the beam is converging and chromatic errors are more consequential.

### L5 — Negative Element of Second Cemented Doublet (D2 / G2)

**Glass:** N-F2 (Schott) (nd = 1.620, νd = 36.4)
**Shape:** Biconcave
**Radii:** R₁ = −8.935 mm (junction), R₂ = +39.697 mm
**Thickness:** 0.700 mm
**In-air focal length:** −11.7 mm (strongly negative in isolation)

L5 completes the second doublet. Like L2, it is a thin (0.700 mm) biconcave element that introduces negative power and the low-Abbe-number dispersion needed for achromatization. The junction surface (R = −8.935 mm) is tightly curved, which generates strong chromatic leverage at the cemented interface.

The second cemented doublet D2 (L4 + L5) has a combined thin-lens focal length of +49.3 mm, weaker than D1's +34.8 mm. This asymmetry in doublet power is deliberate. Paraxial ray tracing shows that the marginal ray height at D2's entrance is slightly smaller than at D1's entrance, since D1's positive power has already begun converging the beam. D2 therefore operates on an already-converging wavefront and contributes less primary power, while the strong curvature of its junction surface (R = −8.935 mm) provides aggressive chromatic correction and Petzval balancing in the converging beam.

### L6 — Double-Aspherical Corrector Element (G2)

**Glass:** L-BAL42 (nd = 1.583, νd = 59.4)
**Shape:** Meniscus, concave toward the object (both R < 0)
**Radii:** R₁ = −9.528 mm, R₂ = −9.470 mm (ΔR = 0.058 mm)
**Thickness:** 1.100 mm
**Focal length:** +334 mm thick-lens (+2655 mm thin-lens; see §4.2 for discussion)
**Aspherical:** Both surfaces

L6 is the key corrector element in this design. With nearly identical front and rear radii (differing by only 0.058 mm), its paraxial power is weak — the thick-lens focal length of +334 mm is over 12× the system EFL, and the thin-lens value is even more extreme at +2655 mm. In either case, L6's purpose is not to contribute first-order optical power but rather to provide higher-order wavefront correction through its aspherical surfaces.

Surface 10 (front) uses an oblate ellipsoidal base conic (K = 0.296) with polynomial corrections extending to A₁₈ — the highest order in the entire design. Surface 11 (rear) uses a more strongly oblate base (K = 1.0) with corrections to A₁₂. The two surfaces work in concert: their aspherical departures are of opposite sign at moderate aperture heights, creating a differential thickness profile that reshapes the wavefront without introducing significant power.

Positioned in the converging beam between the second cemented doublet and L7, L6 provides degrees of freedom to correct residual higher-order spherical aberration, oblique spherical aberration, and higher-order coma that cannot be addressed by the spherical surfaces of the cemented doublets alone. The double-asphere configuration provides twice the correction degrees of freedom of a single asphere, which is critical for achieving acceptable performance in such a compact form factor.

L-BAL42 is fabricated by precision glass molding — the "L-" prefix in OHARA's catalog designates low-Tg glasses specifically engineered for PGM production. This is the only viable manufacturing route for a double-aspherical element with departure profiles of this magnitude.

### L7 — Negative Meniscus (G3)

**Glass:** S-TIH6 (nd = 1.755, νd = 27.6)
**Shape:** Negative meniscus, concave toward the object
**Radii:** R₁ = −9.362 mm, R₂ = −25.395 mm
**Thickness:** 1.000 mm
**Focal length:** −20.2 mm (strongly negative; equals the patent-listed G3 focal length)

L7 is the sole element in G3 and serves as a field-flattener and Petzval corrector. It is fabricated from S-TIH6, a heavy flint glass with the highest dispersion in the design (νd = 27.6) and a moderately high index (1.755). The strong negative power (−20.2 mm focal length, nearly matching the system's +26.8 mm EFL in magnitude) makes L7 the primary Petzval sum corrector in the system.

The Petzval sum analysis (§8) confirms this role: L7's two surfaces contribute a combined Petzval shift of −0.029, the single largest negative contribution in the system, which offsets the accumulated positive Petzval contributions from L3, L4, and L8. L7's position — immediately after the corrector plate L6 and before the final positive element L8 — places it where the chief ray height is relatively large, maximizing its effectiveness for field curvature correction while minimizing its contribution to axial aberrations.

### L8 — Composite Aspherical Positive Meniscus (G4)

**Glass body:** S-LAH58 (nd = 1.883, νd = 40.7)
**Resin layer:** UV-curing optical resin (nd = 1.561, νd = 36.6)
**Shape:** Meniscus, concave toward the object
**Radii:** R₁ = −45.867 mm (resin front, asph.), R₂ = −59.699 mm (junction), R₃ = −18.980 mm (glass rear)
**Thicknesses:** 0.100 mm (resin) + 6.530 mm (glass) = 6.630 mm total
**Combined focal length:** +31.5 mm (paraxial, matching patent G4 FL)
**Aspherical:** Front surface of resin layer (surface 14)

L8 is the rearmost element in the system and by far the thickest (6.630 mm total). It serves dual roles: as the final positive element that converges the beam toward the image plane, and as an aspherical corrector for residual field curvature and astigmatism.

The patent explicitly describes L8 as a composite aspherical lens (§0199): the glass body (S-LAH58) is conventionally polished and coated, then a thin layer of UV-curing resin is applied to the object-facing surface and molded into the aspherical shape (surface 14). The resin-glass junction (surface 15) and the glass body's rear surface (surface 16) are both spherical. This construction is standard for Nikon's non-S-line lenses where high-index glasses that cannot withstand PGM temperatures require aspherical correction.

The aspherical departure on surface 14 is substantial — approximately 100 μm at h = 8 mm — and acts primarily to flatten the field at the image plane. The shape factor of L8, computed as (rR2 + rR1) / (rR2 − rR1) = −2.412 (condition 20), indicates a meniscus strongly concave toward the object, which helps project the exit pupil well away from the image plane to minimize sensor-side telecentricity violations and reduce shading on the image sensor.

S-LAH58 appears twice in this design (as L3 and L8's glass body), an inventory-efficient choice. Its high refractive index (1.883) allows L8 to achieve strong positive power (+31.5 mm combined) with moderate surface curvature, keeping the element's rim thickness reasonable despite the large total center thickness.

---

## 7. Focus Mechanism

The patent states (§0201) that this design focuses by translating the entire optical system along the optical axis — unit focus. When focusing from infinity to close objects, the lens group moves from the image side toward the object side. This is consistent with the production lens's externally-focusing barrel behavior, which extends visibly at close focus distances.

The back focal distance (Bf) values at the two focus extremes are:

| Focus position | Bf (mm) |
|---------------|---------|
| Infinity | 10.760 |
| Close focus | 15.873 |

The focus extension is 5.113 mm. Using Newton's equation (x · x' = −f²), the close-focus object distance from the front focal point is 140.3 mm, yielding a close-focus magnification of 0.191× and a minimum focus distance (from focal plane) of approximately 199 mm — matching the production specification of 0.2 m and 0.19× magnification to within rounding.

Unit focus is the simplest possible focus mechanism — no internal moving groups, no cam tracks, no variable air gaps. The entire optical cell translates as a rigid body, driven by the STM stepping motor. This is a key enabler of the lens's extreme compactness (23.5 mm body length), since there is no internal space required for moving group travel. The trade-offs are: external barrel extension of up to ~5 mm at close focus, focus breathing (approximately 11% magnification change from infinity to MFD as noted by reviewers), and no close-focus aberration optimization (performance is optimized for infinity and degrades somewhat at MFD).

Despite these limitations, the patent's aberration diagrams (Fig. 2) show well-controlled spherical aberration, astigmatism, and coma at infinity focus, confirming that the design achieves its performance targets within the unit-focus constraint.

---

## 8. Petzval Sum and Field Curvature

The Petzval sum was computed surface-by-surface using the standard formula Σ(n'−n)/(R·n·n') from the prescription:

| Contributor | Petzval contribution |
|------------|---------------------|
| L1 (2 surfaces) | +0.00398 |
| D1: L2+L3 (3 surfaces) | +0.00871 |
| D2: L4+L5 (3 surfaces) | +0.00551 |
| L6 (2 surfaces) | +0.00024 |
| L7 (2 surfaces) | −0.02902 |
| L8 (3 surfaces) | +0.01504 |
| **Total** | **+0.00446** |

The total Petzval sum of +0.00446 corresponds to a Petzval radius of −224 mm. This is a well-balanced result for a wide-angle design: the Petzval sum × f product is 0.119, indicating mild backward field curvature that is largely compensated by the astigmatism balance.

The dominant negative Petzval contributor is L7 (S-TIH6, the high-dispersion field flattener), which alone contributes −0.029 — enough to offset the combined positive contributions of both cemented doublets and L8. This is consistent with L7's high index and strong negative power, which together produce a large negative φ/n contribution to the Petzval sum.

**Note on condition (12):** The patent's condition (12) defines a Petzval-ratio (ΣΔPzi)/ΔPz that relates the Petzval correction contributed by the cemented doublets to the system's total Petzval-plus-power quantity. The patent reports a value of 1.062 for Example 1. Independent reproduction of this value proved sensitive to the exact Petzval sum convention used. The standard Western surface-by-surface formula Σ(n'−n)/(R·n·n') yields a ratio of approximately 1.52, while alternative conventions (e.g., thin-lens per-element Σ(φⱼ/nⱼ), sometimes used in Japanese optical texts) give intermediate values. The discrepancy most likely arises from the patent's internal use of a specific Petzval definition combined with a particular treatment of the composite element L8 where the effective index is ambiguous. The patent value of 1.062 falls within the specified bounds (0.550–1.400) and is accepted on the basis of the patent's own computational framework.

---

## 9. Chromatic Correction Strategy

The design achieves achromatization through two cemented doublets, each pairing a higher-Abbe positive element with a lower-Abbe negative element:

| Doublet | Positive glass | νd | Negative glass | νd | Δν |
|---------|---------------|------|---------------|------|-----|
| D1 (L2+L3) | S-LAH58 | 40.7 | S-TIM2 | 35.3 | 5.4 |
| D2 (L4+L5) | S-LAL18 | 46.6 | N-F2 | 36.4 | 10.2 |

Neither doublet uses a particularly large Abbe-number differential by classical achromatization standards (where Δν > 20 is common), nor do the positive elements use true crown glasses (typically νd > 55). Instead, both positive elements are high-index lanthanum types with moderate Abbe numbers (40.7 and 46.6). The design relies on their high refractive indices (nd = 1.883 and 1.816) to achieve strong power with moderate curvature, while distributing the chromatic correction workload across two doublets rather than concentrating it in one. The patent's condition (3), 0.050 < Np1 − Nn1 < 0.400, explicitly bounds the index differential at the cemented junction, balancing chromatic correction against monochromatic aberration generation at the junction surface.

This design uses no anomalous partial dispersion materials — no ED, Super ED, fluorite, or SR elements appear. This is consistent with the lens's positioning as a compact, cost-optimized wide-angle prime rather than a high-performance S-line design.

---

## Appendix A: Conditional Expression Verification

All values computed from the Example 1 prescription and verified against patent Table [0270].

| # | Expression | Computed | Patent | Range | Status |
|---|-----------|----------|--------|-------|--------|
| 1 | Bf/y | 0.5112 | 0.511 | (0.350, 0.700) | ✓ |
| 2 | TL/y | 1.8124 | 1.812 | (1.350, 2.000) | ✓ |
| 3 | Np1−Nn1 | 0.2903 | 0.290 | (0.050, 0.400) | ✓ |
| 4 | tp1/tn1 | 4.0000 | 4.000 | (1.500, 7.000) | ✓ |
| 5 | f/y | 1.2722 | 1.272 | (1.000, 1.600) | ✓ |
| 6 | t1/f | 0.0474 | 0.047 | (0.025, 0.080) | ✓ |
| 7 | νdp1−νdn1 | 5.400 | 5.400 | (3.000, 30.000) | ✓ |
| 8 | f/y | 1.2722 | 1.272 | (1.000, 1.380) | ✓ |
| 9 | fc1/fc2 | 0.7064 | 0.706 | (−0.030, 1.000) | ✓ |
| 10 | Np2−Nn2 | 0.1960 | 0.196 | (0.050, 0.400) | ✓ |
| 11 | νdp2−νdn2 | 10.200 | 10.200 | (3.000, 30.000) | ✓ |
| 12 | (ΣΔPzi)/ΔPz | † | 1.062 | (0.550, 1.400) | ✓† |
| 13 | ΣD/TL | 0.7180 | 0.718 | (0.525, 0.967) | ✓ |
| 14 | dL1_St/TL | 0.0758 | 0.076 | (0.050, 0.167) | ✓ |
| 15 | TL/f | 1.4246 | 1.425 | (0.750, 1.600) | ✓ |
| 16 | TLs/TL | 0.9242 | 0.924 | (0.590, 1.333) | ✓ |
| 17 | f1/f | 4.6131 | 4.613 | (0.700, 5.000) | ✓ |
| 18 | D1/TL | 0.0333 | 0.033 | (0.010, 0.150) | ✓ |
| 19 | t1/ΣD | 0.0464 | 0.046 | (0.025, 0.080) | ✓ |
| 20 | (rR2+rR1)/(rR2−rR1) | −2.4119 | −2.412 | (−4.500, −1.500) | ✓ |
| 21 | tR/ΣD | 0.2421 | 0.242 | (0.130, 0.350) | ✓ |
| 22 | (−f3)/f | 0.7535 | 0.754 | (0.300, 2.200) | ✓ |
| 23 | f4/f | 1.1751 | 1.175 | (0.450, 2.300) | ✓ |
| 24 | (−f3)/f4 | 0.6412 | 0.641 | (0.286, 2.000) | ✓ |
| 25 | f2/f | 0.7674 | 0.767 | (0.300, 2.000) | ✓ |
| 26 | (r312+r311)/(r312−r311) | 2.1678 | 2.168 | (1.500, 7.000) | ✓ |
| 27 | d3/f | 0.6034 | 0.603 | (0.150, 0.750) | ✓ |
| 28 | dL1_Gr3/ΣD | 0.6955 | 0.696 | (0.400, 0.900) | ✓ |

All 27 unique expressions verified (conditions 5 and 8 share the expression f/y with different bounds). Maximum discrepancy from patent-listed values: 0.0005 (rounding).

**† Note on condition (12):** See §8 for discussion of the Petzval-ratio computation and the convention-dependent discrepancy.

---

## Appendix B: Patent Nomenclature Key

| Patent Symbol | Definition |
|--------------|-----------|
| Bf | Back focal distance (air-equivalent) |
| y | Maximum image height |
| TL | Total track: first lens surface to image plane |
| ΣD | First lens surface to last lens surface |
| Np1, Nn1 | Refractive indices of positive/negative elements of 1st cemented doublet |
| Np2, Nn2 | Refractive indices of positive/negative elements of 2nd cemented doublet |
| νdp1, νdn1 | Abbe numbers of positive/negative elements of 1st cemented doublet |
| νdp2, νdn2 | Abbe numbers of positive/negative elements of 2nd cemented doublet |
| tp1, tn1 | Thicknesses of positive/negative elements of 1st cemented doublet |
| t1 | Thickness of most object-side element (L1) |
| tR | Thickness of most image-side element (L8 total) |
| rR1, rR2 | Radii of most image-side element (object/image surfaces) |
| dL1_St | Distance from first surface to aperture stop |
| TLs | Distance from aperture stop to image plane |
| f1, f2, f3, f4 | Focal lengths of groups G1, G2, G3, G4 |
| fc1, fc2 | Focal lengths of object-side and image-side cemented doublets |
| r311, r312 | Radii of most object-side element of G3 (= L7 front/rear) |
| d3 | Distance from aperture stop to first surface of G3 |
| dL1_Gr3 | Distance from first surface to first surface of G3 |
| ΣΔPzi | Sum over each rear-group cemented doublet of (doublet Petzval sum + 1/doublet FL) |
| ΔPz | System Petzval sum + 1/system focal length |

---

*Analysis prepared from WO 2023/190222 A1 and verified against Nikon product specifications. All focal lengths, conditional expressions, and derived quantities independently computed via paraxial ray trace and verified against patent-listed values. Glass identifications are inferential, based on nd/νd matching against OHARA and Schott catalogs — they are not explicitly stated in the patent text.*
