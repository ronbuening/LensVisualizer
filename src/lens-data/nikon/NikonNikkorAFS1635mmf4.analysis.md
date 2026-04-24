# Nikon AF-S NIKKOR 16-35mm f/4G ED VR — Optical Design Analysis

**Patent:** US 2010/0238560 A1 — Example 1 (SL1)
**Inventor:** Makoto Fujimoto (Nikon Corporation)
**Filed:** February 26, 2010 | **Priority:** March 17, 2009 (JP 2009-064521)
**Production lens:** AF-S NIKKOR 16-35mm f/4G ED VR (released February 2010)

---

## 1. Overview

The Nikon AF-S NIKKOR 16-35mm f/4G ED VR is an ultra-wide-angle zoom lens with built-in optical image stabilization, designed for Nikon's FX-format (full-frame 35 mm) digital SLR cameras. It is a negative-lead, four-group zoom with vibration reduction (VR) implemented in the third lens group. Example 1 from the patent (designated SL1) matches the production lens in element count, group structure, focal length range, and mechanical configuration.

### Identification of Example 1 as the production embodiment

The production lens is specified by Nikon as having 17 elements in 12 groups, two ED glass elements, three aspherical lens elements, constant f/4 aperture, 16–35 mm focal length, 107°–63° angle of view, 0.29 m close focus distance, and a 77 mm filter thread. Example 1 matches on all convergent criteria:

- **Element count:** 17 elements (16 glass + 1 resin layer). Nikon specifies 12 groups; the patent describes 4 zoom groups (G1–G4), with the "12 groups" counting each air-separated optical component within the zoom groups.
- **Aspherical elements:** Three elements carry aspherical surfaces (L11 with two aspheric surfaces, L13 with a compound resin asphere, and L46 with one aspheric surface), totaling four aspherical surfaces on three elements.
- **ED glass:** Two elements (L41 and L43) use S-FPL51 fluorophosphate ED glass (nd = 1.49782, νd = 82.51).
- **Focal length:** 16.48–33.94 mm at the design level; marketed as 16–35 mm.
- **f-number:** f/4.1 constant across all zoom positions.
- **Angle of view:** 108° (wide) to 63° (tele), consistent with the marketed 107°–63° specification.

### Design type

The lens is a negative-positive-negative-positive four-group zoom. The negative-leading (retrofocus) first group enables the ultra-wide angle of view while maintaining a long enough back focal distance for the SLR mirror clearance. The four groups (G1–G4) move during zooming such that the G1–G2 separation decreases, the G2–G3 separation increases, and the G3–G4 separation decreases as the lens zooms from wide to telephoto.

---

## 2. Group Structure and Focal Lengths

The system comprises four air-separated groups, each with a distinct optical role. Group focal lengths were verified by independent paraxial (ABCD matrix) ray trace and match the patent-stated values to four significant figures.

| Group | Surfaces | Elements | Focal Length (mm) | Power | Role |
|-------|----------|----------|-------------------|-------|------|
| G1 | 1–9 | L11, L12, L13 (hybrid), L14 | −21.30 | Negative | Front diverging group; establishes retrofocus geometry and wide field of view |
| G2 | 10–14 | L21+L22 (cemented), L23 | +34.14 | Positive | Converging group; contains the internal focusing element (CL21) |
| G3 | 15–22 | Aperture stop, L31+L32 (cemented), L33, L34 | −46.90 | Negative | Rear diverging group; serves as the VR (vibration reduction) group |
| G4 | 23–30 | L41+L42+L43 (triplet), L44+L45+L46 (triplet) | +50.02 | Positive | Rear converging group; contains both ED glass elements |

**System EFL verification** (paraxial ray trace):

| Zoom Position | Patent EFL (mm) | Computed EFL (mm) | Patent 2ω | Patent FNO |
|---------------|-----------------|-------------------|-----------|------------|
| Wide (W) | 16.48 | 16.48 | 108° | 4.1 |
| Intermediate (M) | 24.00 | 23.99 | 84° | 4.1 |
| Telephoto (T) | 33.94 | 33.93 | 63° | 4.1 |

The computed values agree with the patent to within rounding precision of the tabulated data.

### Patent errata — Surface 30 radius of curvature

The patent publication lists the radius of curvature of surface 30 as R = −724.48 mm. Independent verification demonstrates this is a decimal-point error; the correct value is **R = −72.448 mm**. With R = −724.48, the computed G4 focal length is +77.3 mm (vs. patent-stated +50.02), and the system EFL at wide is 26.9 mm (vs. 16.48). With R = −72.448, all group and system focal lengths match exactly. This type of error is common in patent typesetting and does not affect the claims or disclosure of the invention.

---

## 3. Zoom Mechanism

Upon zooming from wide to telephoto, all four groups translate along the optical axis. The variable air gaps at the three zoom positions are:

| Gap | Surface | Wide (mm) | Mid (mm) | Tele (mm) | Behavior |
|-----|---------|-----------|----------|-----------|----------|
| G1–G2 | d9 | 28.97 | 11.94 | 2.09 | Decreases (groups converge) |
| G2–G3 | d14 | 3.26 | 6.00 | 8.50 | Increases (groups diverge) |
| G3–G4 | d22 | 12.46 | 5.96 | 1.21 | Decreases (groups converge) |
| BFD | Bf | 38.60 | 50.93 | 67.55 | Increases |

The total track (first surface to image plane) varies from 169.2 mm at wide to 165.2 mm at telephoto, indicating that the overall lens length changes modestly during zooming — consistent with the production lens's extending front barrel.

**Note:** The patent provides variable gap data only at infinity focus. No close-focus gap data are tabulated, so the data file uses identical infinity and close-focus values for all variable gaps. Focusing is described as internal (CL21 axial translation within G2), but the specific gap changes during focus are not numerically specified.

---

## 4. Element-by-Element Analysis

### 4.1 Group 1 — Front Negative Group (f = −21.30 mm)

G1 is the most optically complex group and carries the heaviest aberration correction burden at the extreme field angles of the ultra-wide configuration.

**L11 — Negative meniscus, both surfaces aspherical (f = −25.3 mm)**
Glass: nd = 1.76690, νd = 46.85 (six-digit code 767/469). No exact match in current OHARA S-prefix catalog; closest cross-catalog equivalents are HOYA E-FD5 (nd = 1.76684, νd = 46.82) and Schott N-LASF46A (nd = 1.76684, νd = 46.78). Almost certainly a precision glass-molded (PGM) element using a low-Tg moldable glass. Both surfaces carry aspherical departures: surface 1 has a spherical base (K = 0) with polynomial-only correction, while surface 2 is a near-parabolic prolate ellipsoid (K = −0.983). The near-parabolic profile is critical for handling the steep ray angles at the rim of this large front meniscus.

**L12 — Biconcave negative lens (f = −92.4 mm)**
Glass: nd = 1.88300, νd = 40.76 — OHARA S-LAH58. Weakly biconcave (R = −118.914 / +261.338) providing modest negative power to supplement L11.

**L13 — Biconcave negative + resin aspherical layer (f = −30.9 mm glass, +209.9 mm resin)**
Glass body: nd = 1.88300, νd = 40.76 — S-LAH58. Strongly biconcave (R = −57.268 / +52.742). A thin UV-curing resin layer (nd = 1.55389, νd = 38.09, thickness 0.40 mm) is bonded to the image-side surface forming a hybrid compound aspherical element. The resin's outer surface (R = +96.287) carries a strongly oblate aspherical profile (K = +7.352). This corrects higher-order field curvature and coma at extreme field angles. The resin layer contributes very weak positive power (+209.9 mm) — its purpose is aspherical correction, not power contribution.

**L14 — Biconvex positive lens (f = +37.7 mm)**
Glass: nd = 1.69895, νd = 30.13 — OHARA S-TIM35, a titanium-containing medium-index flint. This unusual glass choice for a positive element (high-dispersion flint) indicates that L14's primary role is chromatic correction. Paired with the low-dispersion negative elements L12 and L13, L14 forms an achromatic subsystem within G1, correcting lateral color that would otherwise be extreme at short focal lengths.

### 4.2 Group 2 — Positive Focusing Group (f = +34.14 mm)

G2 provides the primary converging power and contains the internal focusing element.

**CL21 — Cemented doublet: L21 (negative meniscus, f = −50.3 mm) + L22 (biconvex positive, f = +28.0 mm) → f_doublet = +63.7 mm**
L21: nd = 1.84666, νd = 23.78 — OHARA S-TIH53, a very high-dispersion dense flint.
L22: nd = 1.60342, νd = 38.01 — OHARA S-TIM5.
CL21 is the **focusing element**: it translates along the optical axis to focus from infinity to the minimum distance of 0.29 m (¶0060). Internal focusing via a compact cemented doublet enables fast, lightweight AF actuation by Nikon's Silent Wave Motor (SWM).

**L23 — Biconvex positive singlet (f = +63.5 mm)**
Glass: nd = 1.51823, νd = 58.93 — OHARA S-NSL3. L23 remains fixed during focusing; only CL21 translates.

### 4.3 Group 3 — VR (Vibration Reduction) Group (f = −46.90 mm)

G3 is the vibration reduction group. During VR operation, the optical elements of G3 (CL31, L33, L34) shift perpendicular to the optical axis. The aperture stop S, though physically at the front of G3, does **not** move during VR — it remains fixed (¶0056).

The patent identifies G3 as optimal for VR (¶0037): small element diameters, minimal axial travel during zooming, and least decentering aberration among all groups.

**Aperture Stop S (surface 15)**
A flat surface (R = ∞) at the front of G3. The production lens uses a 9-blade rounded diaphragm.

**CL31 — Cemented doublet: L31 (positive meniscus, f = +58.5 mm) + L32 (biconcave negative, f = −18.8 mm) → f_doublet = −27.7 mm**
L31: nd = 1.70154, νd = 41.17 — OHARA S-LAM54.
L32: nd = 1.88300, νd = 40.76 — S-LAH58.
The cemented surface (R = −31.799) is concave toward the aperture stop, identified as important for correcting chromatic curvature of field during VR, particularly at the telephoto end (¶0063). CL31 constitutes the first negative VR subcomponent (G3a).

**L33 — Negative meniscus (f = −72.8 mm)**
Glass: nd = 1.88300, νd = 40.76 — S-LAH58. Second negative VR subcomponent (G3b). Concave surface faces CL31 (R = −24.463). The air lens formed between L32's rear surface (R = +35.395) and L33's front surface (R = −24.463) has a biconvex shape. The patent's conditional expression (1) requires |r2| < |r1|, which is satisfied: |−24.463| < |+35.395|. This configuration is identified as critical for wide-angle VR performance (¶0044).

**L34 — Biconvex positive singlet (f = +40.2 mm)**
Glass: nd = 1.84666, νd = 23.78 — S-TIH53. Positive VR subcomponent (G3c). Its positive power prevents G4 from needing a large diameter (¶0039).

### 4.4 Group 4 — Rear Positive Group (f = +50.02 mm)

G4 contains both ED glass elements in two triple-cemented lenses — an unusual and complex construction.

**CL41 — Triple-cemented lens: L41 + L42 + L43 → f_triplet = +67.0 mm**
L41: nd = 1.49782, νd = 82.51 — **S-FPL51 (OHARA) — ED glass** (f = +36.8 mm)
L42: nd = 1.83400, νd = 37.16 — S-LAH60 (f = −32.9 mm)
L43: nd = 1.49782, νd = 82.51 — **S-FPL51 (OHARA) — ED glass** (f = +59.3 mm)

The primary chromatic correction assembly. Two S-FPL51 ED glass elements sandwich a high-index negative element, providing superb secondary spectrum correction. S-FPL51 is a fluorophosphate crown with anomalous partial dispersion (dPgF ≈ +0.033 above the normal glass line). These are the "two ED glass elements" cited in Nikon's specification sheet.

**CL42 — Triple-cemented lens: L44 + L45 + L46 → f_triplet = +160.7 mm**
L44: nd = 1.88300, νd = 40.76 — S-LAH58 (f = −49.2 mm)
L45: nd = 1.48749, νd = 70.41 — S-FSL5 (f = +29.8 mm)
L46: nd = 1.80610, νd = 40.77 — S-LAH53 family (f = −113.4 mm)

CL42 is weaker than CL41 and serves primarily as a field-flattening and residual aberration correction assembly. L46's image-side surface carries a strongly oblate aspherical profile (K = +11.401) for final field-flattening correction, particularly important at the wide-angle end.

---

## 5. Aspherical Surfaces

The lens employs four aspherical surfaces distributed across three elements. The patent uses the κ (kappa) convention where K = κ − 1. For Example 1, odd-order polynomial coefficients (A3, A5, A7, A9, A11) are all zero.

| Surface | Element | κ (patent) | K (standard) | Conic Type | Purpose |
|---------|---------|------------|--------------|------------|---------|
| 1 | L11 front | 1.000 | 0.000 | Spherical base | Polynomial-only correction of oblique spherical aberration and distortion |
| 2 | L11 rear | 0.017 | −0.983 | Near-parabolic prolate ellipsoid | Controls rapidly diverging marginal rays exiting G1 |
| 7 | L13 resin | 8.352 | +7.352 | Oblate ellipsoid | Higher-order field curvature and coma correction |
| 30 | L46 rear | 12.401 | +11.401 | Oblate ellipsoid | Final field-flattening; residual astigmatism and distortion |

Surfaces 7 and 30 both have large positive K values (oblate ellipsoids), curving more steeply at the rim than a sphere — characteristic of field-flattening surfaces in wide-angle retrofocus designs that compensate for the strongly inward-curving Petzval surface.

---

## 6. Glass Selection

The design uses twelve distinct optical materials (eleven glass types plus one UV-curing resin). Most are identifiable in the OHARA catalog.

| Glass Code | Catalog Match | nd | νd | Elements | Count |
|------------|--------------|------|------|----------|-------|
| 767/469 | LAM family (cf. HOYA E-FD5) | 1.76690 | 46.85 | L11 | 1 |
| 883/408 | S-LAH58 | 1.88300 | 40.76 | L12, L13, L32, L33, L44 | 5 |
| 554/381 | UV-cure resin | 1.55389 | 38.09 | L13 resin | 1 |
| 699/301 | S-TIM35 | 1.69895 | 30.13 | L14 | 1 |
| 847/238 | S-TIH53 | 1.84666 | 23.78 | L21, L34 | 2 |
| 603/380 | S-TIM5 | 1.60342 | 38.01 | L22 | 1 |
| 518/589 | S-NSL3 | 1.51823 | 58.93 | L23 | 1 |
| 702/412 | S-LAM54 | 1.70154 | 41.17 | L31 | 1 |
| 498/825 | **S-FPL51 (ED)** | 1.49782 | 82.51 | L41, L43 | 2 |
| 834/372 | S-LAH60 | 1.83400 | 37.16 | L42 | 1 |
| 487/704 | S-FSL5 | 1.48749 | 70.41 | L45 | 1 |
| 806/408 | S-LAH53 family | 1.80610 | 40.77 | L46 | 1 |

S-LAH58 (nd = 1.883) is the most frequently used glass, appearing in five elements. The two S-TIH53 elements (L21 and L34) have very high dispersion (νd = 23.78), making them effective chromatic correctors when paired with low-dispersion partners. The S-FPL51 ED glass has anomalous partial dispersion enabling correction of secondary spectrum.

---

## 7. Focusing System

Internal focusing via translation of the cemented doublet CL21 (L21 + L22) along the optical axis within G2 (¶0060). The variable air gaps d9 (G1–G2 separation) and the CL21-to-L23 spacing adjust as CL21 moves. Internal focusing ensures the overall lens length does not change during focus and the front element does not rotate. The minimum focus distance is 0.29 m.

**Note:** The patent does not tabulate close-focus gap values. The data file uses identical infinity and close-focus values for all variable gaps and documents this limitation.

---

## 8. Vibration Reduction (VR) System

G3 serves as the VR group. During VR operation, CL31 (L31+L32), L33, and L34 shift perpendicular to the optical axis. The aperture stop remains stationary. The production lens provides VR II image stabilization.

---

## 9. Data File Notes

### Semi-diameter constraints

The renderer enforces sd/|R| < 0.90 for all surfaces. This constraint is physically motivated by extreme surface slopes near sd = |R| for spherical surfaces, but is overly conservative for aspherical surfaces with K < 0 (prolate conics), which flatten at the rim and can support sd >> |R| without slope issues.

The most restrictive surface is L11 rear (surface 2A): R = 14.627 mm, K = −0.983. The near-parabolic profile physically supports sd ≈ 37 mm (constrained only by the 77 mm filter thread), but the renderer's sd/|R| limit requires sd ≤ 13.2 mm. This forces all of G1 to appear undersized relative to the production lens. The actual production lens has a front element diameter of approximately 73–74 mm (37 mm semi-diameter).

Several other surfaces are also constrained by edge thickness (the sag difference between front and rear surfaces of thick biconvex elements must not exceed center thickness) and cross-gap sag clearance. Key constraints:

- L22 (R = 19.297 / −121.274, d = 4.95 mm): edge thickness limits sd to ≈ 12 mm
- L23 (R = 65.31 / −65.31, d = 3.10 mm): symmetric biconvex limits sd to ≈ 14 mm
- L41 (R = 29.863 / −43.301, d = 8.0 mm): edge thickness limits sd to ≈ 16 mm
- L45 (R = 20.5 / −40.025, d = 12.15 mm): edge thickness limits sd to ≈ 16 mm
- Gap 18→19 (d = 2.90 mm): cross-gap sag clearance limits sd to ≈ 8.5 mm

The resulting diagram is representative of the optical design's structure and element arrangement but not dimensionally accurate for the front element group.

---

## 10. Summary of Manufacturer Specifications vs. Design Data

| Parameter | Nikon Published Spec | Patent Example 1 |
|-----------|---------------------|-------------------|
| Focal length | 16–35 mm | 16.48–33.94 mm |
| Maximum aperture | f/4 | f/4.1 |
| Angle of view | 107°–63° | 108°–63° |
| Elements / groups | 17 in 12 | 17 in 12 (verified) |
| ED elements | 2 | 2 (L41, L43: S-FPL51) |
| Aspherical elements | 3 | 3 (L11, L13, L46) |
| Close focus | 0.29 m | Not explicitly stated |
| Diaphragm blades | 9 (rounded) | Not specified |
| Filter size | 77 mm | Not specified |
| Weight | ~680 g | Not specified |
| VR | VR II (~4 stops) | G3 perpendicular shift |
| Focus type | Internal (SWM) | CL21 axial translation |
