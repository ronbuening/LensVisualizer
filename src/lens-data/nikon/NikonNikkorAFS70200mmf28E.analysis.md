# Optical Analysis: Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR

## Patent WO 2019/097669 A1 — Example 1

**Patent**: WO 2019/097669 A1 (PCT/JP2017/041445)
**Filed**: November 17, 2017
**Published**: May 23, 2019
**Inventor**: ITO Tomoki (Nikon Corporation)
**Title**: Variable Magnification Optical System, Optical Device, and Method for Manufacturing Variable Magnification Optical System

---

## 1. Identification and Provenance

This patent describes the optical architecture of the Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR, Nikon's third-generation professional telephoto zoom lens, announced October 19, 2016. The production lens is specified at 22 elements in 18 groups, incorporating 6 ED (Extra-low Dispersion) glass elements, 1 fluorite (FL) element, and 1 HRI (High Refractive Index, nd > 2.0) element.

Example 1 of the patent (Table 1, paragraph [0060]) presents a complete numerical prescription of 41 optical surfaces spanning 22 glass elements arranged in five zoom groups. A paraxial ray trace of this prescription reproduces the patent's stated focal lengths to within ±0.005 mm at all three zoom positions (wide, mid, tele), confirming transcription accuracy.

The design employs a constant total track length of 246.0 mm with a constant back focal distance of 54.0 mm across the zoom range, consistent with the production lens's constant-length barrel. The zoom ratio computed from the prescription is 196.0 / 71.5 = 2.74×, matching the patent's stated value.

### Production Lens Cross-Reference

| Parameter | Production Lens | Patent Example 1 |
|---|---|---|
| Elements / Groups | 22 / 18 | 22 / 18 |
| ED elements | 6 | 6 |
| Fluorite elements | 1 | 1 |
| HRI elements | 1 | 1 |
| Focal range | 70–200 mm | 71.5–196.0 mm |
| Maximum aperture | f/2.8 | f/2.9 |
| Close focus | 1.1 m | Not specified |
| Filter size | 77 mm | — |
| Total track | ~202.5 mm (barrel) | 246.0 mm (optical) |

The slight differences in focal length (71.5 vs 70 mm) and aperture (f/2.9 vs f/2.8) between patent and production are typical: production lenses are often derived from patent prescriptions via minor optimization adjustments and deliberate rounding of marketed specifications.

---

## 2. Optical Architecture

The design follows a classic five-group telephoto zoom architecture with positive–negative–positive front groups and a rear "subsequent" group (GR) comprising focusing and vibration-reduction subgroups.

### Group Structure

| Group | Surfaces | Elements | Focal Length (mm) | Power | Function |
|---|---|---|---|---|---|
| G1 | 1–5 | L11, L12, L13 | +143.951 | Positive | Front objective; fixed |
| G2 | 6–13 | L21–L24 | −45.574 | Negative | Variator; zooms |
| G3 | 14–25 | S, L31–L36 | +94.464 | Positive | Relay; fixed |
| G4 | 26–30 | L41–L43 | +58.195 | Positive | Focusing group |
| G5 | 31–41 | L51–L56 | −109.088 | Negative | VR group; fixed |

The 18 "groups" in Nikon's marketing count arises from counting air-separated sub-assemblies: G1 contains 2 subgroups (one cemented doublet plus one singlet), G2 has 4 singlets, G3 has 5 subgroups (the stop plus four singlets and one cemented doublet), G4 has 2 subgroups (one singlet and one cemented doublet), and G5 has 5 subgroups (two singlets, one cemented doublet, and two more singlets). The total is 2 + 4 + 5 + 2 + 5 = 18.

### Zoom Mechanism

During zooming from wide to tele, the spacings between groups change while G1, G3, and G5 remain fixed relative to the image plane. G2 moves toward the image side (increasing D1, decreasing D2), and G4 exhibits a non-monotonic cam path — it first moves toward the object, then reverses toward the image side. This is evident in the D3 variable-gap data: at infinity focus, D3 = 16.922 mm (W), 14.105 mm (M), 16.921 mm (T), showing a dip at mid-zoom before returning to nearly the same value at tele. D4 also exhibits non-monotonic behaviour: D4 = 1.903 mm (W), 4.720 mm (M), 1.903 mm (T), peaking at mid-zoom.

The total variable-gap sum (D1 + D2 + D3 + D4 + BF) is conserved at 126.44 mm across all zoom positions, confirming the constant-length design.

### Focus Mechanism

Focusing from infinity to close distance is accomplished by moving G4 toward the object along the optical axis (paragraph [0053]). This is an internal-focus design: the front element does not rotate, the overall length does not change, and the filter thread remains stationary — all critical features for professional use.

The variable-gap data shows that D1 and D2 are identical at infinity and close focus for each zoom position, confirming that only D3 and D4 change during focus. At the tele end, D3 decreases from 16.921 mm to 2.928 mm (a 14 mm travel) while D4 increases from 1.903 mm to 15.897 mm, maintaining conservation of total track.

### Vibration Reduction (VR)

The VR system uses a subgroup within G5 consisting of the L52+L53 cemented doublet and the L54 plano-concave singlet. These three elements move perpendicular to the optical axis to correct image-plane shift caused by camera shake (paragraph [0054]). The VR coefficient K = −1.21 is constant across the zoom range, while the required lateral shift Z increases proportionally with focal length: −0.31 mm at wide (71.5 mm), −0.58 mm at mid (135 mm), and −0.85 mm at tele (196 mm), all for a tilt angle θ = 0.3°.

---

## 3. Aspherical Surfaces

Example 1 contains no aspherical surfaces. There are no asterisk-marked surfaces in the prescription table, and no aspherical surface data section appears in the patent for this example.

This is consistent with the production AF-S NIKKOR 70-200mm f/2.8E FL ED VR, which does not list aspherical elements in its specifications — Nikon highlights ED, fluorite, and HRI elements but does not reference aspherical surfaces. The all-spherical design achieves its aberration correction through the strategic deployment of special glass types (ED, fluorite, HRI) and careful power distribution among 22 elements.

For reference, Example 3 in the same patent does include one aspherical surface (surface 15, with κ = 1, C4 = −1.26980 × 10⁻⁶, C6 = −9.34669 × 10⁻¹¹), demonstrating that the patent covers both spherical and aspherical variants of the architecture.

---

## 4. Glass Strategy

The design uses 14 unique glass types across 22 elements. The glass selection is dominated by high-performance anomalous-dispersion types, with special emphasis on chromatic aberration control across a 2.74× zoom range at f/2.9.

### Glass Identification Table

| Element | nd | νd | Code | Best Catalog Match | Confidence | APD |
|---|---|---|---|---|---|---|
| L11 | 1.950000 | 29.37 | 950/293 | OHARA S-LAH79 | Exact | No |
| L12 | 1.497820 | 82.57 | 497/825 | HOYA FCD1 / OHARA S-FPL51 family | Exact | Yes (ED) |
| L13 | 1.433852 | 95.25 | 433/952 | Fluorite (CaF₂) | Confirmed | Yes (FL) |
| L21 | 1.719990 | 50.27 | 719/502 | OHARA S-LAM51 | Exact | No |
| L22 | 1.618000 | 63.34 | 618/633 | OHARA S-PHM52 / HOYA PCD4 | Exact | No |
| L23 | 1.846660 | 23.83 | 846/238 | Schott N-SF57 / OHARA S-TIH53 | Exact | No |
| L24 | 1.603000 | 65.44 | 603/654 | OHARA S-PHM53 | Exact | No |
| L31 | 1.834810 | 42.73 | 834/427 | OHARA S-LAH55VS / HOYA TAFD5G | Exact | No |
| L32 | 1.593190 | 67.90 | 593/679 | Sumita K-VC89 / HIKARI J-PSKH1 | Exact | Yes (ED) |
| L33 | 1.497820 | 82.57 | 497/825 | HOYA FCD1 / OHARA S-FPL51 family | Exact | Yes (ED) |
| L34 | 2.001000 | 29.12 | 001/291 | HOYA TAFD55 / OHARA S-LAH99 | Exact | No (HRI) |
| L35 | 1.902650 | 35.73 | 902/357 | LaH family (no exact catalog match) | Unmatched | No |
| L36 | 1.581440 | 40.98 | 581/409 | HOYA E-FL5 / OHARA S-TIL25 | Close | No |
| L41 | 1.497820 | 82.57 | 497/825 | HOYA FCD1 / OHARA S-FPL51 family | Exact | Yes (ED) |
| L42 | 1.950000 | 29.37 | 950/293 | OHARA S-LAH79 | Exact | No |
| L43 | 1.593190 | 67.90 | 593/679 | Sumita K-VC89 / HIKARI J-PSKH1 | Exact | Yes (ED) |
| L51 | 1.804000 | 46.60 | 804/466 | OHARA S-LAH65VS / HOYA TAF3D | Exact | No |
| L52 | 1.846660 | 23.83 | 846/238 | Schott N-SF57 / OHARA S-TIH53 | Exact | No |
| L53 | 1.719990 | 50.27 | 719/502 | OHARA S-LAM51 | Exact | No |
| L54 | 1.953750 | 32.33 | 953/323 | HOYA TAFD45 / OHARA S-LAH98 | Exact | No |
| L55 | 1.593190 | 67.90 | 593/679 | Sumita K-VC89 / HIKARI J-PSKH1 | Exact | Yes (ED) |
| L56 | 1.719990 | 50.27 | 719/502 | OHARA S-LAM51 | Exact | No |

### Special Glass Summary

The design's chromatic correction relies on three categories of special glass:

**Fluorite (CaF₂) — L13**: The fluorite element in G1 provides extreme anomalous partial dispersion (νd = 95.25) for superior secondary-spectrum correction at the front of the system where the marginal ray height is largest. Fluorite is also significantly lighter than optical glass of comparable refractive power, contributing to the production lens's weight reduction versus its predecessor.

**ED (Extra-low Dispersion) glasses — L12, L32, L33, L41, L43, L55**: Six elements use two distinct ED glass types. Three elements (L12, L33, L41) use a phosphate crown with nd = 1.497820 and νd = 82.57, matching the HOYA FCD1 catalog type. Three more (L32, L43, L55) use a glass with nd = 1.593190 and νd = 67.90, matching Sumita K-VC89 or HIKARI J-PSKH1. Both types exhibit anomalous partial dispersion (positive ΔPgF), enabling correction of secondary chromatic aberration that conventional glasses cannot address. Notably, the ED elements are distributed across G1, G3, G4, and G5, ensuring chromatic correction is maintained across all zoom positions.

**HRI (High Refractive Index) — L34**: Element L34 uses a glass with nd = 2.001000 and νd = 29.12, matching the HOYA TAFD55 / OHARA S-LAH99 family. Nikon's marketing specifically highlights this element: with a refractive index exceeding 2.0, a single HRI element can achieve optical effects that would otherwise require several conventional elements, simultaneously correcting field curvature and spherical aberration while enabling a more compact design.

**Unmatched glass — L35**: The glass with nd = 1.902650 and νd = 35.73 (code 902/357) does not exactly match any current standard catalog type. The nearest candidates fall within the lanthanum heavy flint (LaH) family, but residuals exceed typical matching thresholds. This may represent a proprietary or specialty melt optimized for this design.

---

## 5. Element-by-Element Analysis

### Group 1 — Front Objective (f = +143.95 mm, fixed)

G1 collects light from the object and provides positive power that forms a real intermediate image for the subsequent groups. Being fixed relative to the image sensor, G1's aberration contribution remains constant across the zoom range.

**L11 (Negative meniscus, convex toward object)**: nd = 1.950000 (S-LAH79), f = −327.1 mm. The front element uses the highest-index standard glass in the design. Its meniscus shape contributes negative power to flatten the field while its high index minimizes surface curvatures and thus surface contributions to spherical aberration. As the element with the largest clear aperture, the meniscus form reduces the angle of incidence of off-axis rays, controlling coma and astigmatism. It is cemented to L12.

**L12 (Plano-convex positive, cemented to L11)**: nd = 1.497820 (FCD1 family, ED), f = +165.2 mm. The patent text [0049] describes this element as 平凸レンズ (plano-convex); the rear surface R = −998.249 mm is effectively flat (|R| ≈ 1000 mm). The cemented doublet L11+L12 pairs a high-index dense flint (L11) with a low-index anomalous-dispersion crown (L12). This classic achromatic combination corrects primary longitudinal chromatic aberration at the front of the system. The anomalous partial dispersion of FCD1 additionally addresses secondary spectrum.

**L13 (Positive meniscus, convex toward object)**: nd = 1.433852 (fluorite, CaF₂), f = +243.4 mm. The fluorite element provides additional positive power with extremely low dispersion (νd = 95.25), contributing to both primary and secondary chromatic correction. Its meniscus shape with convex front follows the curvature of the converging beam, minimizing surface aberrations. Fluorite's low density (3.18 g/cm³ vs ~3.5–5.5 for optical glass) also reduces the weight of this large-diameter front element.

### Group 2 — Variator (f = −45.57 mm, moves during zoom)

G2 provides negative power and moves along the optical axis during zooming. Its motion is the primary mechanism that changes the system's effective focal length. G2 moves toward the image during wide-to-tele zoom, causing D1 to increase from 3.0 mm to 51.0 mm while D2 decreases from 50.6 mm to 2.7 mm.

**L21 (Negative meniscus, convex toward object)**: nd = 1.719990 (S-LAM51), f = −93.9 mm. The leading element of G2 uses a meniscus shape to progressively bend rays away from the axis. The lanthanum glass (S-LAM51) provides moderate index with controlled dispersion.

**L22 (Biconcave negative)**: nd = 1.618000 (S-PHM52), f = −92.2 mm. A strong diverging element using a phosphate glass with νd = 63.34. The biconcave form produces strong negative power for zoom range, while the relatively low dispersion of PHM52 limits chromatic variation during zoom.

**L23 (Positive meniscus, convex toward object)**: nd = 1.846660 (N-SF57 / S-TIH53), f = +86.8 mm. This anomalous element uses a dense flint with very high dispersion (νd = 23.83) and positive power — the opposite of conventional wisdom that pairs positive power with low-dispersion glass. Positioned within a diverging group, its role is to correct higher-order chromatic aberrations and balance the Petzval sum contribution of the surrounding negative elements.

**L24 (Biconcave negative)**: nd = 1.603000 (S-PHM53), f = −96.8 mm. The final element of G2 provides additional negative power. S-PHM53 (νd = 65.44) is a phosphate crown that limits chromatic variation as G2 moves through its zoom travel.

### Group 3 — Relay Group (f = +94.46 mm, fixed)

G3 follows the aperture stop and relays the image while providing positive power. Its fixed position means it must handle the full range of ray geometries produced by the zooming G2 group above.

**Aperture Stop (S)**: Located at the entrance to G3 (surface 14), the stop position between G2 and G3 is optimal for controlling off-axis aberrations. The 2.5 mm air gap before L31 provides space for the mechanical iris diaphragm.

**L31 (Biconvex positive)**: nd = 1.834810 (S-LAH55VS), f = +128.0 mm. The first glass element after the stop provides moderate positive power using a high-index lanthanum glass that contributes favorable Petzval sum.

**L32 (Plano-convex, convex toward object)**: nd = 1.593190 (K-VC89, ED), f = +152.3 mm. The first of three ED elements using the K-VC89 anomalous-dispersion glass. Its plano-convex form (flat rear surface, R = ∞) minimizes spherical aberration for near-collimated beams emerging from the stop region. The anomalous dispersion corrects secondary chromatic aberration in the relay path.

**L33 (Positive meniscus, convex toward object)**: nd = 1.497820 (FCD1, ED), f = +119.6 mm. The second FCD1-type ED element in the system, contributing additional positive power with very low dispersion. Paired with L34 (following), this forms a loose air-spaced achromatic combination.

**L34 (Biconcave negative) — HRI element**: nd = 2.001000 (TAFD55 / S-LAH99), f = −70.1 mm. This is the High Refractive Index element highlighted in Nikon's marketing. With nd exceeding 2.0, the surface curvatures required for a given power are much gentler than with conventional glass, dramatically reducing higher-order aberrations (spherical, coma) at each surface. Positioned after two positive ED elements, L34 provides strong negative power for Petzval sum flattening and chromatic aberration control. Its high dispersion (νd = 29.12) is deliberately paired against the preceding low-dispersion elements.

**L35 + L36 (Cemented negative doublet)**: L35 is a biconvex positive element (nd = 1.902650, νd = 35.73, f = +47.5 mm) cemented to L36, a biconcave negative (nd = 1.581440, νd = 40.98, f = −44.0 mm). The patent text [0049] describes this pair as 接合負レンズ (cemented negative lens), confirming a net negative focal length of approximately −1420 mm — very weak combined power, functioning primarily as a field-flattening corrector at the exit of G3. The L35 glass (code 902/357) does not match any current standard catalog type and may represent a proprietary or specialty melt. L36 matches the HOYA E-FL5 / OHARA S-TIL25 family, a light flint glass.

### Group 4 — Focusing Group (f = +58.20 mm, moves during zoom and focus)

G4 is the internal focusing group. It moves toward the object during focus from infinity to close, and also participates in zooming with a non-monotonic cam path. Its relatively short focal length (+58.2 mm) means small movements produce significant focus shifts.

**L41 (Biconvex positive)**: nd = 1.497820 (FCD1, ED), f = +89.7 mm. The third FCD1-type ED element, providing positive power with extremely low dispersion. Placing an ED element in the focusing group ensures that chromatic performance is maintained across the focus range, not just at infinity.

**L42 + L43 (Cemented positive doublet)**: L42 is a negative meniscus (nd = 1.950000, S-LAH79, f = −89.9 mm) cemented to L43, a positive meniscus (nd = 1.593190, K-VC89, ED, f = +57.1 mm). The patent text describes this as 接合正レンズ (cemented positive lens), with a net positive focal length of approximately +170 mm. The pairing of S-LAH79 (high-index, high-dispersion) with K-VC89 (moderate-index, anomalous-dispersion) creates a powerful achromatic combination. The meniscus forms reduce higher-order aberrations, and the use of an ED glass ensures chromatic correction survives focus changes. Note: L43's steep junction radius (R = 28.478 mm) produces the tightest edge-thickness constraint in the entire design, limiting the cemented doublet's maximum semi-diameter to approximately 17 mm.

### Group 5 — VR Group (f = −109.09 mm, fixed overall; VR subgroup shifts laterally)

G5 has a net negative focal length, making the complete system shorter than G1–G4 alone (telephoto ratio). It houses the vibration-reduction mechanism.

**L51 (Negative meniscus, convex toward object)**: nd = 1.804000 (S-LAH65VS), f = −98.7 mm. The leading element of G5, providing negative power to diverge the converging beam from G4. Its high-index lanthanum glass (νd = 46.60) contributes to favorable Petzval sum balance.

**L52 + L53 (Cemented doublet — VR subgroup, part 1)**: L52 is a biconvex positive (nd = 1.846660, N-SF57, f = +61.2 mm) cemented to L53, a biconcave negative (nd = 1.719990, S-LAM51, f = −41.3 mm). This cemented doublet (net f ≈ −138 mm) is part of the VR moving subgroup. The pairing creates a diverging achromatic element with well-controlled chromatic performance during lateral decentering. The N-SF57 dense flint (L52) paired with the S-LAM51 lanthanum glass (L53) provides the necessary power balance for image-shift correction.

**L54 (Plano-concave, concave toward image — VR subgroup, part 2)**: nd = 1.953750 (TAFD45 / S-LAH98), f = −71.9 mm. This plano-concave element moves with L52+L53 as part of the VR subgroup. Its flat front surface and curved rear surface produce strong negative power. The high-index glass (nd = 1.954) minimizes aberrations generated during the lateral shift needed for image stabilization. Note: the patent prescription table renders the flat-surface radius as "0.000" — a rendering artifact; the patent text explicitly describes L54 as 平凹レンズ (plano-concave), and the EFL computation confirms R = ∞.

**L55 (Biconvex positive)**: nd = 1.593190 (K-VC89, ED), f = +108.0 mm. The third K-VC89 ED element, providing positive power after the VR subgroup. Its anomalous dispersion ensures that the color correction introduced by the VR elements during lateral shift does not degrade overall chromatic performance.

**L56 (Positive meniscus, convex toward object)**: nd = 1.719990 (S-LAM51), f = +100.4 mm. The final element before the image plane, a positive meniscus that helps control the back-focal field curvature and provides final positive power to direct the converging beam to the sensor. Using S-LAM51 (the same glass as L21 and L53) maintains manufacturing simplicity.

---

## 6. Semi-Diameter Estimation

Semi-diameters were estimated via combined marginal and chief ray trace (offAxisFieldFrac = 0.60) across all six zoom/focus configurations (3 zoom × 2 focus), with 8% mechanical clearance applied, then lightly refined against Nikon's published lens-construction diagram. The main visual adjustment was to slim the G2 variator shoulders and the first two G3 relay singlets, which the raw ray-height estimate rendered a little fuller than the manufacturer section suggests.

### Key constraints:

**Filter thread (G1)**: The production lens uses a 77 mm filter thread, constraining the front group (G1) semi-diameters to approximately 36.5 mm. At the tele end (196 mm, f/2.9), the unvignetted entrance pupil radius of 33.8 mm produces a marginal ray height of approximately 60 mm at the front surface — far exceeding the filter aperture. This confirms significant natural vignetting at tele, a characteristic common to all fast telephoto zooms in this class.

**Edge thickness**: Several elements hit edge-thickness limits well before the beam-derived SDs. The binding constraints are L23 (max SD ≈ 22.7 mm), L32 (23.6 mm), L33 (21.8 mm), L35 (20.5 mm), L41 (18.9 mm), L43 (17.1 mm), and L52 (16.5 mm). All final SDs were validated to maintain ET ≥ 0.7 mm.

**Cemented doublet L42+L43**: The steep junction radius of L43 (R = 28.478 mm) produces the tightest edge-thickness constraint in the design. At SD = 17 mm, the junction sag is approximately 5.6 mm against a center thickness of only 5.55 mm, leaving ET ≈ 0.8 mm. This limits the entire cemented doublet to approximately 17 mm SD.

---

## 7. Verification Appendix

### EFL Verification (Paraxial Ray Trace)

| Position | Patent EFL (mm) | Computed EFL (mm) | Δ (mm) |
|---|---|---|---|
| Wide (W) | 71.5 | 71.498 | −0.002 |
| Mid (M) | 135.0 | 134.996 | −0.004 |
| Tele (T) | 196.0 | 196.000 | 0.000 |

### Group Focal Length Verification

| Group | Patent f (mm) | Computed f (mm) | Δ (mm) |
|---|---|---|---|
| G1 (f1) | 143.951 | 143.951 | 0.000 |
| G2 (f2) | −45.574 | −45.573 | +0.001 |
| G3 (f3) | 94.464 | 94.465 | +0.001 |
| G4 (f4) | 58.195 | 58.194 | −0.001 |
| G5 (f5) | −109.088 | −109.087 | +0.001 |

### Variable Gap Conservation

| Position | D1 + D2 + D3 + D4 + BF (mm) |
|---|---|
| Wide (∞) | 126.437 |
| Wide (close) | 126.436 |
| Mid (∞) | 126.436 |
| Mid (close) | 126.435 |
| Tele (∞) | 126.436 |
| Tele (close) | 126.437 |

Sum conserved within ±0.002 mm (rounding), confirming constant-length design across all six configurations.

### Petzval Sum

Petzval sum = +0.001491 mm⁻¹, corresponding to a Petzval radius of −671 mm. The positive sum (concave Petzval surface toward object) indicates slight under-correction of field curvature, which is typical for telephoto zoom designs and is partially compensated by the negative field-flattening contribution of the L35+L36 cemented doublet and the overall G5 negative power.

### Conditional Expressions

| No. | Expression | Patent Value | Computed |
|---|---|---|---|
| (1) | f1 / (−f2) | 3.1586 | 3.1587 |
| (2) | f2 / \|fZ\| | 0.4178 | 0.4178 |
| (5) | f3 / (−f2) | 2.0728 | 2.0728 |
| (6) | f1 / fw | 2.0133 | 2.0133 |
| (7) | nd1 | 1.9500 | 1.950000 |
| (8) | ωw | 11.200° | — |

---

## 8. References

1. **WO 2019/097669 A1** — ITO Tomoki (Nikon Corporation), "Variable Magnification Optical System, Optical Device, and Method for Manufacturing Variable Magnification Optical System," published May 23, 2019.
2. **Nikon product page**: AF-S NIKKOR 70-200mm f/2.8E FL ED VR, https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_70-200mmf_28e_fl_ed_vr/
3. **HOYA Glass Cross Reference Index**: https://www.hoya-opticalworld.com/english/products/crossreference.html
4. **OHARA Optical Glass Pocket Catalog**, May 2023 edition.
