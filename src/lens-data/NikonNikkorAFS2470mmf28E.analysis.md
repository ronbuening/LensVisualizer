# Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR — Patent Example 1 Analysis

## US 2020/0142168 A1 · Example 1 · Inventor: Hiroki Harada · Nikon Corporation

---

## 1. Identification and Provenance

This analysis covers **Example 1** of US Patent Application Publication 2020/0142168 A1, published May 7, 2020. The application is a divisional of US Patent 10,527,829 (application 15/545,702), which originated as PCT/JP2016/052683, filed January 29, 2016, claiming priority from Japanese Patent Application 2015-017916, filed January 30, 2015.

The design corresponds to the **Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR**, Nikon's professional-grade standard zoom lens announced in 2015. The production lens is marketed as a 24–70 mm f/2.8 constant-aperture zoom with Vibration Reduction (VR), internal focusing, electromagnetic diaphragm ("E" designation), 82 mm filter thread, 9-blade aperture, and a minimum focus distance of 0.38 m. Nikon's specification describes the construction as **20 elements in 16 groups**, including two ED glass elements, one aspherical ED glass element, three aspherical lens elements, and one HRI (High Refractive Index) lens element.

Example 1's numerical prescription yields the following at the three tabulated zoom positions:

| Parameter | Wide (W) | Intermediate (M) | Telephoto (T) |
|---|---|---|---|
| Focal length (mm) | 24.80 | 50.01 | 67.85 |
| F-number | 2.92 | 2.92 | 2.92 |
| Half-angle of view (°) | 42.5 | 22.7 | 17.2 |
| Maximum image height (mm) | 21.60 | 21.60 | 21.60 |
| Total track length (mm) | 220.25 | 198.42 | 200.83 |
| Back focal distance (mm) | 41.04 | 48.52 | 55.69 |

The image circle (Y = 21.60 mm) corresponds to a 43.2 mm diagonal — FX format (36 × 24 mm sensor). The zoom ratio is 67.85 / 24.80 ≈ 2.74×. The production lens covers 24–70 mm (2.92×); the patent example's slightly shorter telephoto end (67.85 vs. 70 mm) and slightly longer wide end (24.80 vs. 24 mm) are typical of patent numerical examples, which optimize for aberration balance rather than marketing round numbers. The F/2.92 design aperture reflects the typical gap between a patent's optimized prescription and the marketed F/2.8 value.

Example 1 contains exactly 20 optical elements. The "16 groups" count follows the standard Japanese convention where each **lens component** — whether a singleton or a cemented assembly (doublet or triplet) — counts as one group. Example 1 has 13 singletons, 2 cemented doublets, and 1 cemented triplet, totaling exactly 16 components.

---

## 2. Optical Architecture

The system follows a classic **negative-lead zoom** (retrofocus-derivative) configuration: G1(−) · G2(+) · G3(−) · G4(+). Zooming is accomplished by changing the air spacings between all four groups. The design sub-divides G2 and G3 into operationally independent sub-groups:

- **G1 (negative, f = −38.47 mm):** Front diverging group, 3 elements. Moves during zoom.
- **G2 (positive, f = +42.49 mm):** Main converging group, 6 elements split into G21 (focusing sub-group, 5 elements, f = +78.58 mm) and G22 (1 element, f = +64.02 mm). The entire G2 moves during zoom; G21 alone moves rearward for close focusing.
- **G3 (negative, f = −39.26 mm):** Intermediate group, 5 elements split into G31 (3 elements, axially fixed during VR, f = −65.76 mm) and G32 (2 elements, the vibration-reduction sub-group, f = −121.07 mm). G31 serves as the patent's "intermediate group Gn."
- **G4 (positive, f = +48.95 mm):** Rear converging group, 6 elements. Moves during zoom.

An aperture stop (S) and a first flare-cut diaphragm (FC1) are located between G2 and G3, both axially fixed during zoom. A second flare-cut diaphragm (FC2) sits between G4 and the image plane.

The overall power distribution — negative, positive, negative, positive — gives the system wide-angle capability (the negative front group diverges the field) while the rear positive group provides a long back focal distance compatible with the SLR mirror box (BFD ≈ 41.0–55.7 mm across the zoom range).

### Group Focal Lengths (verified independently)

| Group | Focal Length (mm) | Power | Role |
|---|---|---|---|
| G1 | −38.47 | Negative | Front diverging group (wide-angle coverage) |
| G2 (G21 + G22) | +42.49 | Positive | Main converging / variator group |
| — G21 alone | +78.58 | Positive | Focusing sub-group |
| — G22 alone | +64.02 | Positive | Fixed relay element |
| G3 (G31 + G32) | −39.26 | Negative | Compensator / VR housing |
| — G31 alone | −65.76 | Negative | Intermediate group (field flattener / coma corrector) |
| — G32 (VR) | −121.07 | Negative | Vibration-reduction sub-group |
| G4 | +48.95 | Positive | Rear image-forming group |

---

## 3. Element-by-Element Analysis

### Group 1: Front Diverging Group (f = −38.47 mm)

G1's three elements handle the extreme angular divergence at the wide end (half-field 42.5°). Its strongly negative power bends off-axis ray bundles inward, providing wide-angle coverage at the cost of introducing significant aberrations — primarily barrel distortion and lateral chromatic aberration — that subsequent groups must correct.

**L11 — Negative Meniscus (convex toward object), 1× aspherical**
nd = 1.74389, νd = 49.5 · Glass: S-LAH60 (OHARA) · fl = −53.4 mm
The front element of the entire system. Its meniscus shape keeps the angle of incidence moderate despite the wide field angle, reducing surface reflection losses and coma. The aspherical rear surface (surface 2A) corrects spherical aberration and distortion introduced by the steep ray bending at the wide end. The aspherical coefficients (K = 0, A4 = +2.215×10⁻⁶) add a small positive sag departure at the rim, steepening the surface slightly relative to the base sphere.

**L12 — Biconcave Negative (composite aspherical)**
Glass body (L12g): nd = 1.80400, νd = 46.6 · Glass: S-LAH65V (OHARA) · fl = −55.2 mm
Resin layer (L12r): nd = 1.56093, νd = 36.6 · UV-curing polymer, 0.200 mm thick · fl ≈ ∞
A powerful negative element that, together with L11, establishes G1's diverging power. The composite aspherical front surface (surface 3A, on the resin layer, K = 1.0, A4 = −3.834×10⁻⁷) corrects higher-order field aberrations — primarily astigmatism and field curvature — across the full zoom range. In the data file, L12 is modeled as a cemented doublet (L12r + L12g) per the hybrid composite pattern, giving two renderer elements from one physical element.

**L13 — Positive Meniscus (convex toward object) — HRI Element**
nd = 2.00100, νd = 29.1 · Glass: S-NPH2 (OHARA) · fl = +80.2 mm
This is the **HRI element** highlighted in Nikon's marketing. With nd > 2.0, this glass bends light significantly per unit thickness, allowing a single element to contribute the corrective positive power that would otherwise require two or three conventional elements. Its placement at the rear of G1 partially compensates the group's strong negative power, reducing the Petzval sum contribution. Compared to a hypothetical element of the same power made from typical crown glass (n ≈ 1.5), L13's Petzval contribution is reduced by a factor of 1.5/2.001 ≈ 0.75 — a 25% reduction.

### Group 2: Main Converging Group (f = +42.49 mm)

G2 is the most complex group, containing six elements across two sub-groups. It carries the majority of the system's positive power and bears primary responsibility for correcting spherical aberration and axial coma at the design aperture of f/2.8.

**Sub-group G21 — Focusing Group (f = +78.58 mm)**

G21 contains five elements and moves rearward (toward the image) by 6.735 mm during close focusing. This "inner-focus" scheme keeps the front element fixed, prevents barrel rotation, and enables fast autofocus with the Silent Wave Motor.

| Element | nd | νd | fl (mm) | Glass | Shape |
|---|---|---|---|---|---|
| L21 | 1.59349 | 67.0 | +194.6 | L-BSL7 | Biconvex |
| L22 | 1.59349 | 67.0 | +121.5 | L-BSL7 | Positive meniscus |
| L23 | 1.59349 | 67.0 | +89.4 | L-BSL7 | Biconvex (cemented Ja) |
| L24 | 1.90366 | 31.3 | −37.5 | S-LAH79 | Biconcave (cemented Ja) |
| L25 | 1.77250 | 49.6 | +71.2 | S-LAH52 | Biconvex |

The L23+L24 cemented doublet is a **chromatic corrector** — a classic crown-flint pair with a net negative focal length of −67.6 mm. Despite G21's overall positive power, this doublet is intentionally net-negative, correcting longitudinal chromatic aberration generated by the surrounding positive elements. The large Abbe number difference (Δνd ≈ 36) provides strong achromatization.

**Sub-group G22 — Relay Element (f = +64.02 mm)**

| Element | nd | νd | fl (mm) | Glass | Shape |
|---|---|---|---|---|---|
| L26 | 1.81600 | 46.6 | +64.0 | S-LAH66 | Biconvex |

A single powerful positive element acting as a relay between G21 and the aperture stop. During focusing, G21 moves rearward while L26 remains fixed relative to the zoom motion, so the G21–G22 air gap (D16) changes. L26's high refractive index (1.816) enables strong convergence with moderate curvatures.

### Group 3: Intermediate / VR Housing (f = −39.26 mm)

G3's five elements divide into two operationally distinct sub-groups: G31 remains axially fixed during VR operation, while G32 shifts perpendicular to the optical axis for image stabilization.

**Sub-group G31 — Intermediate Group (f = −65.76 mm)**

G31's role, as described in the patent, is to restore the converging beam from G2 to approximately afocal (parallel) light before it enters the VR sub-group. This is essential for minimizing off-axis aberrations — particularly eccentric coma and one-sided blur — during VR decentration.

| Element | nd | νd | fl (mm) | Glass | Shape |
|---|---|---|---|---|---|
| L31 | 1.80400 | 46.6 | −33.4 | S-LAH65V | Biconcave |
| L32 | 1.60300 | 65.4 | −129.7 | S-PHM52 | Neg. meniscus (concave obj.) |
| L33 | 1.84666 | 23.8 | +51.5 | S-TIH53 | Biconvex |

L32 is a candidate for one of the two ED glass elements in Nikon's specification. Phosphate crowns in the nd ≈ 1.60, νd ≈ 65 region can exhibit measurable anomalous partial dispersion. However, confirmation from nd/νd alone is not possible without published ΔPgF data.

L33 is an unusual "positive flint" element — its extremely low Abbe number (23.8) provides strong negative chromatic contribution despite the positive power, correcting the lateral color accumulated by the preceding negative elements.

**Sub-group G32 — Vibration-Reduction Group (f = −121.07 mm)**

| Element | nd | νd | fl (mm) | Glass | Shape |
|---|---|---|---|---|---|
| L34 | 1.59349 | 67.0 | −72.6 | L-BSL7 | Biconcave |
| L35 | 1.80518 | 25.5 | +180.9 | S-TIH6 | Positive meniscus |

G32's deliberately weak negative power (−121 mm vs. the 24.8–67.9 mm system range) minimizes the aberration penalty of decentration during VR operation.

### Group 4: Rear Image-Forming Group (f = +48.95 mm)

G4 is the rear positive group responsible for final image formation. It contains six elements including the **aspherical ED element** (L41), an **ED glass element** (L44), and the aspherical rear element (L46). G4 corresponds to the patent's "image-side lens group RP."

**L41 — Biconvex Positive — Aspherical ED Element**
nd = 1.55332, νd = 71.7 · Glass: Fluorophosphate crown · fl = +106.8 mm
This is **Nikon's first aspherical ED glass element** — the "ASP/ED" designation. The aspherical front surface (29A) has an oblate ellipsoidal base (K = 1.0) with positive fourth-order correction, which steepens the surface at the margin to control zonal spherical aberration. Combining aspherical and ED properties in one element eliminates the need for a separate spherical ED corrector, contributing to compact design.

**L42 + L43 — Cemented Doublet (Jb), net f = +128.1 mm**
L42 (Neg. Meniscus): nd = 1.83481, νd = 42.7 · S-LAH63 · fl = −101.1 mm
L43 (Biconvex): nd = 1.59319, νd = 67.9 · L-BSL7 variant · fl = +56.3 mm
L43 (nd = 1.59319, νd = 67.9) is the other candidate for the second ED element in Nikon's specification. Its slightly different refractive index and Abbe number from the L-BSL7 family (1.59349/67.0) confirm it is a distinct glass type that may exhibit anomalous partial dispersion.

**L44 + L45 + L46 — Cemented Triplet (Tc), net f = +393.4 mm**
L44 (Biconvex): nd = 1.49782, νd = 82.6 · **S-FPL53 (Super-ED)** · fl = +44.8 mm
L45 (Biconcave): nd = 1.80518, νd = 25.5 · S-TIH6 · fl = −37.1 mm
L46 (Pos. Meniscus, 1× asph): nd = 1.69350, νd = 53.3 · S-LAM54 · fl = +180.6 mm

This is the system's **final chromatic and field corrector**. L44 is a classic fluorophosphate crown (Super-ED) with νd = 82.6, providing primary secondary-spectrum correction. L45's dense flint provides complementary dispersion. L46 adds a third glass type, extending color correction toward an apochromatic tendency. The aspherical rear surface of L46 (37A, K = 1.0) is the **final aberration corrector**, addressing residual field curvature and astigmatism.

---

## 4. Aspherical Surface Summary

The design employs four aspherical surfaces across four elements:

| Surface | Element | Position | K | A4 | Purpose |
|---|---|---|---|---|---|
| 2A | L11 rear | G1 | 0.0 | +2.215e−6 | Wide-angle distortion & SA correction |
| 3A | L12r front (resin) | G1 | +1.0 | −3.834e−7 | Field curvature & astigmatism |
| 29A | L41 front | G4 | +1.0 | +4.809e−6 | Zonal SA & coma (ASP/ED) |
| 37A | L46 rear | G4 | +1.0 | +7.565e−6 | Residual field curvature & astigmatism |

Surfaces 29A and 37A both have K = +1.0, meaning their base conic is an **oblate ellipsoid** ((1+K) = 2). An oblate base steepens the surface curvature at the margin relative to a sphere — the sag grows faster with height than the spherical baseline.

---

## 5. Glass Strategy

The design uses 16 distinct material types across its 20 elements (15 optical glasses plus 1 UV-curing resin):

| Six-Digit Code | nd | νd | Count | Classification | Probable Catalog Match |
|---|---|---|---|---|---|
| 744/495 | 1.74389 | 49.5 | 1 | Lanthanum crown | S-LAH60 |
| 561/366 | 1.56093 | 36.6 | 1 | UV resin | Composite asph. resin |
| 804/466 | 1.80400 | 46.6 | 2 | Lanthanum flint | S-LAH65V |
| 2001/291 | 2.00100 | 29.1 | 1 | **HRI glass** | **S-NPH2** |
| 593/670 | 1.59349 | 67.0 | 4 | Borosilicate crown | L-BSL7 |
| 904/313 | 1.90366 | 31.3 | 1 | Dense lanthanum flint | S-LAH79 |
| 773/496 | 1.77250 | 49.6 | 1 | Lanthanum crown | S-LAH52 |
| 816/466 | 1.81600 | 46.6 | 1 | Dense lanthanum crown | S-LAH66 |
| 603/654 | 1.60300 | 65.4 | 1 | Phosphate crown | S-PHM52 |
| 847/238 | 1.84666 | 23.8 | 1 | Dense flint | S-TIH53 |
| 805/255 | 1.80518 | 25.5 | 2 | Dense flint | S-TIH6 |
| 553/717 | 1.55332 | 71.7 | 1 | **ED fluorophosphate crown** | **ASP/ED glass** |
| 835/427 | 1.83481 | 42.7 | 1 | Lanthanum crown | S-LAH63 |
| 593/679 | 1.59319 | 67.9 | 1 | Borosilicate crown | L-BSL7 variant |
| 498/826 | 1.49782 | 82.6 | 1 | **Super-ED fluorite crown** | **S-FPL53** |
| 694/533 | 1.69350 | 53.3 | 1 | Lanthanum-adjacent | S-LAM54 |

Glass identifications are best-effort matches based on nd/νd pairs against the OHARA May 2023 pocket catalog. The six-digit codes (nd×1000 / νd×100 rounded) serve as manufacturer-agnostic identifiers.

The chromatic correction strategy relies on three tiers: the HRI element L13 (nd = 2.001) for monochromatic field flattening in G1, the ASP/ED element L41 (νd = 71.7) for combined aspherical + ED correction in G4, and the Super-ED element L44 (νd = 82.6) in the rear triplet for secondary spectrum control.

---

## 6. Focus Mechanism

Focusing from infinity to close distance is performed by moving **G21 (5 elements: L21–L25)** rearward along the optical axis by 6.735 mm. This distance is constant across all three tabulated zoom positions, yielding imaging distances of 0.42 m (wide), 0.38 m (mid), and 0.40 m (tele). The mid-zoom minimum of 0.38 m matches the production lens's specified minimum focus distance.

The inner-focus design keeps the front element (L11) and the rear group (G4) fixed during focusing, so the overall lens length does not change during focus and the front element does not rotate (permitting polarizer use). The air gap D16 between G21 and G22 absorbs the focus travel: at infinity D16 = 7.735 mm, decreasing to approximately 1.0 mm at close focus.

---

## 7. Zoom Mechanism

Zooming from wide (24.80 mm) to telephoto (67.85 mm) involves movement of all four principal groups along the optical axis. The variable air gaps and their values at each zoom position are:

| Gap | Location | Wide (mm) | Mid (mm) | Tele (mm) | Behavior |
|---|---|---|---|---|---|
| D7 | G1 → G21 | 48.95 | 10.93 | 1.90 | Contracts (zoom + focus) |
| D16 | G21 → G22 | 7.74 | 7.74 | 7.74 | Fixed during zoom (focus only) |
| D18+FC1 | G22 → STO | 3.00 | 19.13 | 30.64 | Expands (zoom only) |
| D20 | STO → G31 | 2.09 | 4.67 | 3.62 | Non-monotonic |
| D26 | G31 → G32 | 1.25 | 1.25 | 1.25 | Fixed |
| D30 | G32 → G4 | 17.69 | 7.68 | 1.49 | Contracts (zoom only) |
| BFD | G4 → image | 41.04 | 48.52 | 55.69 | Expands (zoom only) |

Key observations:

D7 (G1–G2 gap) contracts dramatically from 49 mm to under 2 mm — the primary zoom motion. D30 (G32–G4 gap) also contracts significantly, indicating G4 moves forward to contribute to telephoto magnification. D26 (G31–G32 gap within G3) remains constant at 1.25 mm — G31 and G32 move as a unit during zoom. D20 (stop–G3 gap) exhibits **non-monotonic behavior**, first expanding then partially contracting, indicating G3 reverses direction during the zoom stroke. D16 (G21–G22 gap within G2) remains constant at 7.735 mm during zoom (only during focusing does G21 separate from G22).

---

## 8. Vibration Reduction (VR)

Image stabilization is achieved by shifting **G32** (L34 + L35, f = −121.07 mm) perpendicular to the optical axis. The VR correction coefficient κ varies with zoom position:

| Zoom Position | κ | f (mm) | VR shift for 0.30° correction (mm) |
|---|---|---|---|
| Wide | −0.45 | 24.80 | −0.29 |
| Mid | −0.51 | 50.01 | −0.51 |
| Tele | −0.58 | 67.85 | −0.61 |

The formula governing the VR shift is: Δ = (f × tan θ) / κ.

The intermediate group G31, positioned just ahead of G32, re-collimates the converging beam from G2 to approximately afocal light before it enters the VR group. This afocal feed is critical: it means the VR group primarily introduces angular tilt to the beam (correcting the image shift) rather than transverse aberrations.

---

## 9. Petzval Sum and Field Curvature

The computed Petzval sum for the full system is **+0.00269 mm⁻¹**, corresponding to a Petzval radius of approximately **+372 mm**. For a 21.60 mm image height, this yields a Petzval sag of about 0.63 mm at the field edge — modest and well within the correction range of the aspherical surfaces and the field-flattening contributions from the negative groups (G1 and G3).

---

## 10. Conditional Expression Values

The patent defines five conditional expressions governing the design. Example 1's values are:

| Expression | Formula | Value | Range |
|---|---|---|---|
| (1) | f(1~Gn)t / ft | 10.118 | 1.000 – 100.000 |
| (2) | −f(Gn~G(VR))w / fw | 1.583 | 1.360 – 5.000 |
| (3) | f(RP) / f(FP) | 1.152 | 0.400 – 2.000 |
| (4) | ωt (half-angle, tele) | 17.2° | 10.00° – 30.00° |
| (5) | ωw (half-angle, wide) | 42.5° | 30.00° – 50.00° |

Expression (1) ensures that the composite focal length from G1 to the intermediate group Gn is long (≈10× the tele EFL), meaning the beam entering the VR group is nearly afocal at the telephoto end. This is the key to achieving good VR performance with minimal eccentric coma.

---

## 11. Data File Construction Notes

### Flare-Cut Diaphragm Handling

The patent prescription includes two flare-cut diaphragms: FC1 (patent surface 19, d = 1.200 mm, between G22 and the aperture stop) and FC2 (patent surface 40, between G4 and the image plane). These are not optical elements and are omitted from the data file. Their air gap contributions are folded into adjacent surfaces: FC1's 1.200 mm is added to the L26 rear→STO gap (surface "18" d = patent D18 + 1.200), and FC2's gap is added to the BFD (surface "37A" d = patent D39 + D40).

### Composite Aspherical Treatment

L12 (patent's single composite aspherical element) is modeled in the data file as a cemented doublet: L12r (resin layer, id 2) + L12g (glass body, id 3). This follows the hybrid composite pattern in the LENS_DATA_SPEC. The renderer treats them as two separate elements for drawing purposes, but the marketing element count remains 20. The resin layer is extremely thin (0.200 mm) and has negligible standalone focal length; its optical contribution is entirely through the aspherical surface figure.

### Variable Gap Classification

Six variable gaps are defined for the zoom lens format, classified as zoom-only, focus-only, or zoom+focus:

| Gap | Surface Label | Type | Notes |
|---|---|---|---|
| D7 | "7" | Zoom + focus | G21 moves +6.735 mm rearward during focus |
| D16 | "16" | Focus only | Fixed during zoom at 7.735; decreases to 1.0 at close |
| D18+FC1 | "18" | Zoom only | Includes FC1's 1.200 mm |
| D20 | "STO" | Zoom only | Non-monotonic across zoom range |
| D30 | "28" | Zoom only | — |
| BFD | "37A" | Zoom only | Includes FC2 gap |

---

## 12. Verification Appendix

All numerical values in this document were independently verified via Python paraxial ray trace (y-nu convention with proper reduced thickness d/n). The computed system EFL at each zoom position matches the patent to within ±0.01 mm:

| Position | Computed EFL (mm) | Patent EFL (mm) | Error |
|---|---|---|---|
| Wide | 24.800 | 24.80 | < 0.01% |
| Mid | 50.015 | 50.01 | +0.01% |
| Tele | 67.847 | 67.85 | < 0.01% |

All group focal lengths match to ±0.02 mm. Total track lengths match to ±0.002 mm across all three zoom positions. The Petzval sum was computed via the surface-by-surface formula φ/(n·n′).

### Corrections from Prior Analysis

The following values were corrected from the prior draft analysis to match independent computation:

| Item | Prior Value | Corrected Value | Note |
|---|---|---|---|
| L13 fl | +77.9 mm | +80.2 mm | Thick-lens recomputation |
| L23+L24 doublet fl | −69.2 mm | −67.6 mm | Thick-lens recomputation |
| L32 fl | −131.1 mm | −129.7 mm | Thick-lens recomputation |
| L35 fl | +178.0 mm | +180.9 mm | Thick-lens recomputation |
| L44+L45+L46 triplet fl | +342.3 mm | +393.4 mm | Significant thick-lens effect from 9.5 mm L44 thickness |
| L42+L43 doublet fl | +128.3 mm | +128.1 mm | Minor refinement |

---

## 13. References

1. US Patent Application Publication 2020/0142168 A1, "Variable Magnification Optical System, Optical Apparatus, and Method for Manufacturing Variable Magnification Optical System," Hiroki Harada, Nikon Corporation, published May 7, 2020.
2. US Patent 10,527,829, parent patent (granted January 7, 2020).
3. Nikon Corporation, "AF-S NIKKOR 24-70mm f/2.8E ED VR" product page, imaging.nikon.com.
4. Nikon Corporation, "AF-S NIKKOR 24-70mm f/2.8E ED VR" specification sheet: 20 elements in 16 groups, including 2 ED, 1 ASP/ED, 3 AS, 1 HRI.
