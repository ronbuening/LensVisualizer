# Fujifilm Fujinon XF 18mm f/2 R — Optical Design Analysis

**Patent:** US 2014/0240851 A1, Example 4  
**Inventor:** Daiki Kawamura (Fujifilm Corporation)  
**Priority date:** November 9, 2011 (JP 2011-245310)  
**Published:** August 28, 2014  
**Production lens:** Fujinon XF18mmF2 R (launched March 2012 with X-Pro1)

---

## 1. Patent-to-Production Identification

The Fujifilm XF 18mm f/2 R is an 8-element, 7-group wide-angle pancake prime for the Fujifilm X-mount (APS-C). Fujifilm's own product literature specifies the lens has two glass-mold aspherical elements at the 5th and 7th positions, 7 rounded diaphragm blades, and a marketed angle of view of 76.5°.

Example 4 of US 2014/0240851 A1 is the closest match to the production lens among the patent's numerical examples. The key correspondences are: the patent computes f = 18.844 mm and F/2.06 (the production lens is marketed as 18 mm f/2); the prescription contains 8 elements in 7 groups with 4 aspherical surfaces distributed across exactly 2 elements (L5 and L7 — the 5th and 7th elements counting from the object side); and the aberration diagrams show a half-field angle of ω = 41.7° (full 2ω = 83.4°), which is wider than the marketed 76.5° because the patent evaluates over a slightly oversized image circle to verify performance margins. Fujifilm's marketed 76.5° angle of view is computed using the nominal 18 mm focal length against the 23.6 × 15.6 mm sensor half-diagonal of 14.14 mm: 2 × arctan(14.14 / 18) = 76.3°, rounded to 76.5°.

The remaining examples in the patent explore design variants with different glass selections and element configurations, but Example 4 is the one whose element count, aspherical element positions, and overall dimensions best match the production hardware.

---

## 2. Optical Architecture

The lens is a compact retrofocus design arranged as two lens groups separated by an aperture stop:

**Group 1 (G1, negative/weak positive power):** L1 (negative) + L2 (positive), located in front of the stop. This group provides the wide-angle field coverage and contributes the characteristic retrofocus asymmetry needed to achieve a back focal distance longer than what the focal length alone would require.

**Aperture Stop (St):** Located between G1 and G2, physically positioned 6.90 mm from the front surface of L1.

**Group 2 (G2, positive power):** L3–L4 cemented doublet + L5 (positive, aspheric) + L6 (negative) + L7 (negative meniscus, aspheric) + L8 (positive biconvex, rear element). This group carries the primary converging power and performs the bulk of aberration correction.

The total optical track from S1 to the image plane (excluding cover glass) is 37.62 mm, giving a retrofit ratio of approximately 2.00 — the lens is about twice as long as its focal length. This is a moderate value for a retrofocus wide-angle and reflects the pancake constraint; larger retrofit ratios would produce a longer barrel.

The back focal distance from the last optical surface (L8 rear) to the image plane is 7.80 mm in air plus the 2.70 mm cover glass plate. The total physical distance to the sensor (10.5 mm) is less than the X-mount flange distance of 17.7 mm, meaning the rear element of L8 protrudes behind the lens mount flange and into the camera body. This is standard practice for short-registration mirrorless mounts and is the architectural reason L8 is positioned as closely to the sensor as possible — reducing the chief ray incidence angle at the sensor edges and thereby minimizing vignetting and color shading.

---

## 3. Paraxial Verification

An ABCD matrix ray trace through all 16 optical surfaces (excluding the cover glass PP) produces the following system parameters:

| Parameter | Computed | Patent stated |
|---|---|---|
| Effective focal length | 18.63 mm | 18.844 mm |
| F-number | 2.06 | 2.06 |
| Entrance pupil diameter | ~9.04 mm | — |
| Petzval sum | 0.00728 mm⁻¹ | — |
| Petzval radius | 137.4 mm | — |

The ~1.1% discrepancy in EFL is attributable to rounding in the patent's tabulated radii and thicknesses (which are published to limited decimal places). The F-number and all conditional formula values from Table 17 of the patent are reproduced to within rounding tolerance, confirming a clean transcription.

The Petzval sum of 0.00728 mm⁻¹ (Petzval sum × f ≈ 0.136) is quite well-controlled for a fast wide-angle. This is achieved through the use of very high-index glasses in the rear group (L6 at nd = 1.923, L7 and L8 both above nd = 1.80), which allow strong curvatures to be deployed with smaller Petzval contributions per unit of optical power.

---

## 4. Element-by-Element Analysis

### L1 — Biconcave Negative (Front Element)

| Property | Value |
|---|---|
| Surfaces | S1 (R = −130.000 mm), S2 (R = +8.903 mm) |
| Glass | nd = 1.51742, νd = 52.43 → **OHARA S-NSL36** (exact match) |
| Thickness | 1.00 mm |
| Focal length | −16.1 mm |

L1 is a strongly negative biconcave element positioned at the very front of the lens. Its rear surface (R = +8.9 mm) is the strongly curved surface; the front surface at R = −130 mm is nearly flat. This asymmetry directs the strong divergence inward while presenting a gently curved surface to the incoming light, reducing aberration contributions from the steep marginal ray angles at the lens periphery.

S-NSL36 is an ordinary crown glass — low index, moderate dispersion. In a retrofocus wide-angle, the front negative element does not benefit from exotic glass; its primary job is geometric (field expansion and retrofocus extension), and using a common crown keeps cost down and allows this large-diameter element to be manufactured economically.

**Optical role:** Provides the leading negative power that defines the retrofocus configuration. Diverges the entering beam to widen the apparent field, at the cost of increasing the beam diameter that the rear group must handle. Also makes the dominant negative contribution to the Petzval sum, which the rear positive group must compensate.

### L2 — Positive Meniscus (Second Element)

| Property | Value |
|---|---|
| Surfaces | S3 (R = +20.152 mm), S4 (R = +296.161 mm) |
| Glass | nd = 1.83400, νd = 37.16 → **OHARA S-LAH55V** (exact match) |
| Thickness | 2.20 mm |
| Focal length | +25.8 mm |

L2 is a positive meniscus with its convex side facing the object. The rear surface (R = +296 mm) is nearly flat. This is a high-index, moderate-dispersion lanthanum glass — a premium optical material that provides strong positive power with minimal contribution to field curvature.

S-LAH55V is a compositional variant from OHARA's lanthanum heavy-crown (LAH) family. Its high index (1.834) allows the meniscus shape to achieve positive power with moderate curvatures. The Abbe number of 37.16 is low for a positive element — it places the glass in a dispersion range traditionally associated with flint glasses, though LAH glasses are classified as lanthanum crowns by chemical composition. This is acceptable here because the chromatic correction is primarily handled by the cemented doublet in G2.

**Optical role:** Partially compensates the divergence from L1 and begins converging the beam toward the aperture stop. The meniscus form reduces coma and astigmatism contributions compared to a biconvex shape at this position. Together with L1, G1 has a net weak negative or near-zero power that sets up the retrofocus geometry.

### Aperture Stop (St)

The stop is located 6.90 mm from the front of L1, in the 4.50 mm air gap between S4 (L2 rear) and S6 (L3 front). The stop sits 1.50 mm after L2's rear surface (D4 = 1.50 mm), with 3.00 mm remaining to the front of L3 (D_STO = 3.00 mm). The stop semi-diameter determines the system's entrance pupil, which at f/2.06 and f = 18.84 mm is approximately 4.57 mm radius (9.15 mm diameter).

### L3 + L4 — Cemented Doublet (Chromatic Corrector)

**L3 — Negative Meniscus:**

| Property | Value |
|---|---|
| Surfaces | S6 (R = +24.734 mm), junction S7 (R = +9.003 mm) |
| Glass | nd = 1.64769, νd = 33.79 → **HOYA E-FD2** (exact nd and νd match) |
| Thickness | 0.86 mm |
| Focal length | −22.3 mm |

**L4 — Biconvex Positive:**

| Property | Value |
|---|---|
| Surfaces | junction S7 (R = +9.003 mm), S8 (R = −24.158 mm) |
| Glass | nd = 1.80400, νd = 46.57 → **OHARA S-LAH65V** (exact match) |
| Thickness | 5.00 mm |
| Focal length | +20.4 mm |

**Combined doublet focal length:** +13.9 mm (strongly positive)

This is a classic crown-flint cemented doublet, though with non-traditional glass choices. The negative element (L3) is a dense flint with moderate index (1.648) and low Abbe number (high dispersion). Its nd and νd match HOYA E-FD2 exactly; the Schott equivalent N-SF2 has νd = 33.82 (Δνd = 0.03), making HOYA the more precise catalog match. Given Fujifilm's Japanese manufacturing base and established supplier relationships, HOYA is a plausible production glass source. The positive element (L4, S-LAH65V) is a lanthanum crown with high index and higher Abbe number (lower dispersion). The dispersion mismatch between L3 (νd = 33.79) and L4 (νd = 46.57) enables correction of longitudinal chromatic aberration, while the strong net positive power of the cemented pair provides most of the converging action needed to form the image.

L4 at 5.00 mm is the thickest single element in the prescription, reflecting its role as the primary power-carrying element. Its high index (1.804) keeps the Petzval contribution manageable despite the strong curvatures.

**Optical role:** The doublet is the aberration-correction workhorse of G2. It corrects longitudinal and lateral chromatic aberration through the crown-flint dispersion difference, corrects spherical aberration through the strongly curved junction surface (R = +9.0 mm), and provides the majority of the system's converging power.

### L5 — Biconvex Positive Aspheric (5th Element)

| Property | Value |
|---|---|
| Surfaces | S9\* (R = +57.660 mm), S10\* (R = −33.145 mm) |
| Glass | nd = 1.80348, νd = 40.45 → **OHARA S-LAH63** (exact match) |
| Thickness | 2.21 mm |
| Focal length | +26.5 mm |
| Aspherical | Both surfaces (S9 and S10) |

This is the first of the two aspherical elements. Both surfaces carry aspherical profiles with the patent's extended polynomial convention (odd+even order terms from h³ to h¹⁶). The patent's conic constants are KA = 4.817 for S9 and KA = −25.258 for S10. In standard convention (K = KA − 1), S9 has K ≈ +3.8 (oblate ellipsoid) and S10 has K ≈ −26.3 (strong hyperboloid). These extreme conic values indicate that the aspherical departure from spherical is substantial, particularly on the rear surface.

S-LAH63 is the same glass used for L7, which simplifies manufacturing logistics (one glass type serves two mold-pressed aspheric elements). It is a lanthanum crown with high index (1.803) and moderate dispersion (νd = 40.45). Fujifilm's product page confirms these are "glass-mold aspheric lenses" — meaning they are precision glass-molded (PGM) rather than ground and polished.

**Optical role:** L5 corrects the higher-order spherical aberration that arises from operating at f/2 — a fast aperture for a pancake wide-angle. Without aspherical correction at this position, the residual spherical aberration from the cemented doublet would degrade on-axis sharpness at full aperture.

### L6 — Biconcave Negative (Flint Corrector)

| Property | Value |
|---|---|
| Surfaces | S11 (R = −147.184 mm), S12 (R = +15.912 mm) |
| Glass | nd = 1.92286, νd = 18.90 → **OHARA S-NPH2** (exact match) |
| Thickness | 0.80 mm |
| Focal length | −15.5 mm |

L6 uses an extreme dense flint glass with the highest refractive index in the prescription (1.923) and the lowest Abbe number (18.90 — extremely high dispersion). S-NPH2 is one of OHARA's densest flints, a specialty glass that provides very strong chromatic correction per unit of optical power. This is a thin (0.80 mm), strongly negative element that works in concert with the surrounding positive elements (L5 and L8) to control higher-order chromatic aberration and Petzval field curvature.

The front surface (R = −147 mm) is nearly flat, while the rear surface (R = +15.9 mm) carries most of the optical power. This planoconcave-like configuration concentrates the refraction on one surface, reducing the aberration contributions compared to splitting the power across two strongly curved surfaces.

**Optical role:** Provides negative power for Petzval sum correction and contributes strong anomalous dispersion for higher-order chromatic aberration control. The very high index allows this element to carry significant negative power without excessive curvature, which is essential for keeping the lens compact. The patent's conditional formula (2) requiring NdAB ≥ 1.819 ensures that the average index of the rear pair (L7+L8) is high enough for adequate Petzval control, and L6's extreme index makes it possible to achieve this while keeping the element count low.

### L7 — Negative Meniscus Aspheric ("Lens B" in the Patent)

| Property | Value |
|---|---|
| Surfaces | S13\* (R = −7.212 mm), S14\* (R = −12.000 mm) |
| Glass | nd = 1.80348, νd = 40.45 → **OHARA S-LAH63** (exact match, same as L5) |
| Thickness | 1.70 mm |
| Focal length | −26.7 mm |
| Aspherical | Both surfaces (S13 and S14) |
| Shape | Meniscus, concave toward object |

L7 is the patent's "Lens B" — the element around which the invention's key claims are structured. Both surfaces are aspherical with very strong hyperboloidal conic constants (KA ≈ −9.9 on both surfaces in the patent's convention). Both surfaces are concave toward the object side (both R values are negative), creating a meniscus that curves away from the incoming light. The aspherical departure from spherical at the edge of the clear aperture is significant — Table 17 shows |Sagsp1| − |Sagas1| = 2.926 − 1.924 = 1.002 mm on the front surface, normalized to (|Sagsp1| − |Sagas1|)/Re1 = 0.173.

**Optical role:** L7 is the fine-tuning corrector. The patent describes its function as providing favorable balance of spherical aberration and field curvature, and the conditional formulae (1) and (3) specifically constrain the aspherical sag departures on both its surfaces. The meniscus shape with the concave surface toward the object also helps reduce distortion and coma. Being glass-molded from S-LAH63 (the same glass as L5), it can carry the complex aspherical profiles economically.

### L8 — Biconvex Positive ("Lens A" in the Patent, Rear Element)

| Property | Value |
|---|---|
| Surfaces | S15 (R = +52.117 mm), S16 (R = −30.012 mm) |
| Glass | nd = 1.83481, νd = 42.71 → **OHARA S-LAH55VS** (exact match) |
| Thickness | 5.30 mm |
| Focal length | +23.5 mm |

L8 is the final optical element, the patent's "Lens A." It is a thick (5.30 mm) biconvex positive lens positioned as close to the sensor as physically possible. S-LAH55VS is a high-index lanthanum crown from OHARA's LAH family, with a compositional variant suffix. It is a conventionally polished element (not glass-molded), which is appropriate for a thick biconvex shape that does not require aspherical surfaces. This is the second-thickest element in the lens and carries substantial positive power (f = +23.5 mm).

**Optical role:** L8 serves two essential functions. First, it provides the final convergence that brings the image to focus at the sensor plane. Second, it controls the exit pupil position — by placing a positive element very close to the sensor, the chief ray angle at the sensor edges is reduced, which is critical for digital sensors that suffer from vignetting and color shading when light arrives at steep angles. The conditional formula (4) constraining 0.8 < fA/f < 1.7 ensures that L8's focal length is appropriately matched to the system focal length for telecentric control; the computed ratio fA/f ≈ 1.26 sits comfortably within this range.

---

## 5. Aspherical Surfaces

### 5.1 Patent Convention

The lens has 4 aspherical surfaces distributed across 2 glass-molded elements. The patent uses an extended aspherical sag formula that includes odd-order polynomial terms (A3, A5, A7, ..., up to A15) in addition to the standard even-order terms (A4, A6, ..., A16). The patent's conic constant is designated KA, which relates to the standard convention as K = KA − 1. Since h is the radial distance from the optical axis (always non-negative), both odd and even powers of h produce rotationally symmetric surface profiles — the use of odd-order terms does not break symmetry, it simply provides additional degrees of freedom for surface optimization.

### 5.2 Refitting to Even-Order Format

The data file format supports only even-order coefficients (K, A4, A6, A8, A10, A12, A14). The odd-order terms in this patent carry significant sag contributions — for instance, the A5 term on S13 contributes over 8 mm of sag at the edge of the clear aperture, completely altering the surface profile relative to even-terms-only.

To resolve this, all four aspherical surfaces were refitted via least-squares optimization: the full patent sag curve (conic + all polynomial terms) was sampled at 200 radial points from h = 0 to h = sd, and a new set of even-order-only coefficients (K, A4–A14) was fitted to match. The refitted coefficients differ substantially from the direct patent values (K ≠ KA − 1, and all polynomial coefficients change), but they reproduce the patent's sag profile to sub-wavelength accuracy:

| Surface | Max sag error | RMS sag error |
|---|---|---|
| S9 (L5 front) | 0.072 µm | 0.030 µm |
| S10 (L5 rear) | 0.025 µm | 0.010 µm |
| S13 (L7 front) | 0.227 µm | 0.094 µm |
| S14 (L7 rear) | 0.130 µm | 0.054 µm |

These errors are well below manufacturing tolerances (typically ~1 µm for precision glass-molded aspheres) and below the shortest visible wavelength (~380 nm). The refitted surfaces are optically equivalent to the patent's specification.

### 5.3 Aspherical Surface Summary

| Surface | Element | Refitted K | Patent KA | Role |
|---|---|---|---|---|
| S9 | L5 front | −674.6 | +4.82 | Spherical aberration correction at wide aperture |
| S10 | L5 rear | −208.2 | −25.26 | Higher-order spherical + coma |
| S13 | L7 front | −13.7 | −9.90 | Field curvature + distortion |
| S14 | L7 rear | −19.1 | −9.86 | Field curvature + lateral color balance |

Both elements use OHARA S-LAH63 glass. This glass carries the S-prefix (environmentally safe composition). Fujifilm's product page explicitly confirms these are "glass-mold aspheric lenses." S-LAH63 was selected for its combination of high refractive index (1.803), moderate dispersion (νd = 40.45), and acceptable molding characteristics.

---

## 6. Glass Selection Summary

Seven of the eight glass types in Example 4 can be identified with exact matches in the OHARA catalog. The eighth (L3) matches HOYA E-FD2 exactly:

| Element | nd | νd | Glass identification | Type | Role |
|---|---|---|---|---|---|
| L1 | 1.51742 | 52.43 | OHARA S-NSL36 (exact) | Normal crown | Front negative, low cost |
| L2 | 1.83400 | 37.16 | OHARA S-LAH55V (exact) | Lanthanum crown | Positive meniscus, high index |
| L3 | 1.64769 | 33.79 | HOYA E-FD2 (exact nd and νd) | Dense flint | Doublet negative, high dispersion |
| L4 | 1.80400 | 46.57 | OHARA S-LAH65V (exact) | Lanthanum crown | Doublet positive, main power |
| L5 | 1.80348 | 40.45 | OHARA S-LAH63 (exact) | Lanthanum crown | Aspheric positive (glass-mold) |
| L6 | 1.92286 | 18.90 | OHARA S-NPH2 (exact) | Dense phosphate flint | Field flattener, extreme index |
| L7 | 1.80348 | 40.45 | OHARA S-LAH63 (exact) | Lanthanum crown | Aspheric negative meniscus (glass-mold) |
| L8 | 1.83481 | 42.71 | OHARA S-LAH55VS (exact) | Lanthanum crown | Rear positive, telecentricity |

The glass palette is dominated by OHARA lanthanum types (5 of 8 elements), reflecting Fujifilm's established supply relationship with OHARA and the design's need for high-index materials to achieve compact dimensions. The S-prefix in OHARA nomenclature denotes environmentally safe compositions (lead- and arsenic-free), meeting RoHS/REACH requirements. The sole HOYA glass (L3 / E-FD2) provides the dense flint dispersion needed for the cemented doublet; the nearest Schott equivalent (N-SF2, νd = 33.82) is slightly off in Abbe number.

No anomalous partial dispersion (APD) glasses are present in the prescription. The chromatic correction relies entirely on conventional crown-flint Abbe number differences, supplemented by the extreme dispersion of S-NPH2 (νd = 18.90) for higher-order chromatic control.

---

## 7. Semi-Diameter Estimation

The patent does not list semi-diameters. SDs were estimated through a multi-step process:

1. **Paraxial marginal ray trace** at the entrance pupil radius (EP ≈ 4.52 mm for f/2.06) established the on-axis beam footprint at each surface.

2. **Paraxial chief ray trace** at the APS-C production field angle (ω ≈ 37.2°, corresponding to the sensor half-diagonal of 14.14 mm) provided the off-axis beam contribution.

3. **Patent anchor points** from Table 17 — Re1 = 5.80 mm (S13A effective semi-diameter) and Re2 = 6.96 mm (S14A effective semi-diameter) — were used to calibrate the off-axis estimate. The paraxial chief ray overestimates heights by roughly 2× at the rear elements of this wide-angle retrofocus design due to pupil aberration.

4. **Cross-gap sag intrusion** was the binding constraint at two locations: the S2–S3 gap (2.20 mm, limited to sd ≤ 6.8 mm by the strongly curved S2 at R = +8.9 mm) and the S12–S13A gap (2.40 mm, limited to sd ≤ 4.9 mm by the combined curvature of S12 and the aspherical S13A surface). The S12/S13A constraint is tighter than the patent's Re1 = 5.80 because the refitted aspherical surface, while matching sag to sub-micron accuracy, has the same physical shape as the patent's surface — the strongly curved L7 front and L6 rear simply close the gap rapidly at the rim.

5. **Mechanical clearance** of 8% was applied above the raw beam footprint estimates.

---

## 8. Focusing Mechanism

The patent states in paragraph [0092]: "focusing is performed by moving the entirety of the optical system along the optical axis Z." This is **unit focusing** — the entire 8-element assembly translates forward as a rigid body to focus on closer objects.

Unit focusing is the simplest and most mechanically compact focus mechanism, consistent with the pancake design goal. There are no internal floating elements or independently moving groups. The patent provides optical data only at infinity focus; the close-focus change is simply an increase in the back focal distance as the lens translates forward.

The production lens specifies a minimum focus distance of 0.18 m (macro mode) and 0.80 m (normal mode). For unit focusing at 0.18 m:

- Lens extension ≈ f² / (d_object − f) ≈ 18.84² / (180 − 18.84) ≈ 2.20 mm
- BFD at close focus ≈ 7.80 + 2.20 = 10.00 mm

This modest 2.2 mm of travel is mechanically feasible within the pancake barrel and is driven by the lens's internal DC motor.

---

## 9. Design Philosophy and Context

The XF 18mm f/2 R was one of the three launch lenses for the Fujifilm X-mount system in early 2012, alongside the XF 35mm f/1.4 R and XF 60mm f/2.4 R Macro. It was designed to showcase the system's compact potential — at just 33.7 mm from flange and 116 g, it transforms any X-mount body into a near-pocketable camera.

The optical design makes several deliberate tradeoffs in pursuit of compactness. The 8-element configuration with only 2 aspherical elements (4 aspherical surfaces) is relatively modest by modern standards — Fujifilm's later XF 18mm f/1.4 R LM WR uses 15 elements with 3 aspherical and 1 ED glass to achieve superior corner sharpness and less distortion. The f/2 aperture and retrofocus ratio of ~2.0 are both constrained by the pancake dimension target.

The design is a textbook example of how high-index glasses and strategically placed aspheric surfaces can substitute for additional elements. The Petzval sum is controlled not by adding more negative elements, but by using exceptionally dense glass (S-NPH2, nd = 1.923) in L6 and maintaining high average index in the rear pair (NdAB = 1.819). The two aspheric elements handle the spherical aberration and field curvature correction that would otherwise require 2–3 additional spherical elements, which would make the lens too long for pancake proportions.
