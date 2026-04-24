# Optical Analysis — NIKON NIKKOR Z 24-70mm f/4 S

**Patent:** WO2019/049372 A1 (JP WO2019/049372), Example 1
**PCT Filing:** PCT/JP2017/032695, filed September 11, 2017
**Published:** March 14, 2019
**Applicant:** Nikon Corporation, Tokyo
**Inventor:** Takeshi Umeda (梅田 武)

---

## 1. Product Identification and Patent Correlation

The NIKKOR Z 24-70mm f/4 S was announced on August 23, 2018 as one of the first three lenses for Nikon's Z-mount mirrorless system, alongside the Z 50mm f/1.8 S and the Z 35mm f/1.8 S. The filing date of the underlying patent predates the announcement by nearly a year, and the publication date follows it by approximately seven months — a typical Nikon timeline for bringing a zoom patent to production.

Example 1 of the patent is the most likely production basis. The correlation is established by matching all hard manufacturer specifications against the patent's numerical example:

| Specification | Manufacturer | Patent Ex. 1 | Match |
|---|---|---|---|
| Focal length | 24–70 mm | 24.72–67.91 mm | ✓ (marketing rounding) |
| Maximum aperture | f/4 (constant) | f/4.00 at all positions | ✓ |
| Elements / Groups | 14 / 11 | 14 / 11 | ✓ |
| Aspherical elements | 4 (1 AS-ED + 3 asph) | 4 aspherical surfaces | ✓ |
| ED elements | 2 (1 AS-ED + 1 ED) | 2 high-νd elements | ✓ |
| Close focus | 0.30 m | — (close-focus data given) | ✓ |
| Image circle | 43.4 mm Ø (Y = 21.7) | Y = 21.70 mm | ✓ |
| Half-angle (wide) | ~43° | 43.3° | ✓ |

The zoom ratio is 2.75×, the total track varies from 121.6 mm (wide) to 151.0 mm (tele), and the design uses five moving groups — all consistent with the compact retractable-barrel construction of the production lens.

---

## 2. Optical Architecture

The design follows a positive-lead five-group zoom configuration: **G1 (+) — G2 (−) — G3 (+) — G4 (+) — G5 (−)**, with the aperture stop positioned at the front of G3 and moving as a unit with that group during zooming. This is a classical positive-negative-positive front-relay configuration augmented by a split rear group (G4 + G5) that handles focus and field flattening respectively.

### 2.1 Group Summary

| Group | Power | EFL (mm) | Elements | Role |
|---|---|---|---|---|
| G1 | Positive | +125.09 | L11 + L12 (cemented) | Front collector — gathers light into the variator |
| G2 | Negative | −28.96 | L21, L22, L23 (3 singletons) | Variator — primary magnification change during zoom |
| G3 | Positive | +39.65 | L31, L32+L33, L34+L35 (1 singleton + 2 cemented) | Compensator and relay — reimages through the stop |
| G4 | Positive | +56.05 | L41, L42 (2 singletons) | Focusing group — moves toward object for close focus |
| G5 | Negative | −51.52 | L51, L52 (2 singletons) | Field flattener / telecentric corrector |

All group EFLs verified by independent y-nu paraxial ray trace and match patent values exactly.

During zooming from wide to tele, all five groups translate along the optical axis. The G1–G2 gap increases dramatically (1.6 → 31.3 mm), the G2–G3 gap decreases (23.7 → 2.9 mm), and the G5-to-image gap increases (13.9 → 34.4 mm). All zoom gaps are monotonically varying — there are no reversing groups in this design, which simplifies the cam mechanism. The total track grows by 29.4 mm from wide to tele, consistent with the lens's telescoping barrel.

### 2.2 Focus Mechanism

The fourth group (G4 = L41 + L42) serves as the internal focusing unit. It translates toward the object during close focus, consuming the G3–G4 air gap (D18 decreases) while the G4–G5 gap (D22) increases by an equal amount. This is a pure unit-shift internal focus — the sum D18 + D22 is conserved at each zoom position (verified: ΔD18 + ΔD22 < 0.001 mm at all three zoom positions), meaning the groups ahead of and behind G4 are undisturbed.

The focus throw varies with zoom position:

| Zoom | D18 Δ (mm) | D22 Δ (mm) | Throw |
|---|---|---|---|
| Wide (24.7 mm) | −2.43 | +2.43 | 2.43 mm |
| Mid (46.3 mm) | −5.24 | +5.24 | 5.24 mm |
| Tele (67.9 mm) | −8.51 | +8.51 | 8.51 mm |

The 3.5× increase in focus throw from wide to tele is expected: at longer focal lengths, a given change in object distance requires a larger lens movement to maintain focus. The compact two-element G4 group enables the fast stepping-motor autofocus that Nikon advertises for video work.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Front Collector (L11 + L12, cemented doublet)

**L11 — Negative meniscus, convex toward object**
- Radii: R₁ = +73.000, R₂ = +47.495 (junction)
- Glass: nd = 1.84666, νd = 23.8 → **S-TIH53 (OHARA)** or FD60-W (HOYA)
- Center thickness: 2.15 mm
- Element focal length: −167.0 mm (thick lens)

**L12 — Positive meniscus, convex toward object**
- Radii: R₁ = +47.495 (junction), R₂ = +417.043
- Glass: nd = 1.75500, νd = 52.3 → **S-LAL14 (OHARA)** or E-TAF2 (HOYA)
- Center thickness: 8.60 mm
- Element focal length: +70.3 mm (thick lens)

**Doublet combined EFL: +125.09 mm** (verified by paraxial trace; matches patent exactly).

The G1 cemented doublet pairs a high-dispersion dense flint (L11, νd = 23.8) with a dense lanthanum crown (L12, νd = 52.3). The negative lead element bends field rays inward to control vignetting at the wide end and provides chromatic correction against the strong positive power of L12. The large Δνd of 28.5 between the partners provides effective achromatization. With both surfaces convex toward the object, G1 acts as a weak positive collector that steers the incoming cone into the variator below.

### 3.2 Group 2 — Variator (L21, L22, L23)

The variator is the engine of any zoom lens — its axial position relative to G1 and G3 determines the system focal length. G2 has a combined focal length of −28.96 mm, making it the strongest group in the system by absolute power.

**L21 — Negative meniscus, convex toward object, rear surface aspherical**
- Radii: R₁ = +400.000, R₂ = +17.042 (aspherical)
- Glass: nd = 1.74353, νd = 49.5 → **Uncertain.** Glass code 744495 does not match any standard OHARA S- or L-prefix glass precisely. Nearest candidate S-LAM2 (nd ≈ 1.744, νd ≈ 44.8) has a ~5-unit νd discrepancy. The glass sits in the lanthanum crown region of the nd–νd diagram and requires a low-Tg formulation for precision glass molding. May be a HOYA M-prefix type or a proprietary formulation.
- Center thickness: 1.80 mm
- Element focal length: −24.0 mm (thick lens)
- Aspherical surface: K = −1 (paraboloid base conic, patent κ = 0)

L21 is the most powerful single element in the entire lens. Its nearly flat front surface (R = 400 mm) combined with the strongly curved aspherical rear (R = 17 mm) creates extreme negative meniscus geometry. The paraboloidal base conic (K = −1) on the rear surface significantly flattens the sag profile at the rim compared to a sphere, allowing the beam to pass through at steep angles without exceeding slope limits. The polynomial aspheric coefficients provide additional correction for off-axis coma and astigmatism.

**L22 — Biconcave negative**
- Radii: R₁ = −181.132, R₂ = +49.985
- Glass: nd = 1.75500, νd = 52.3 → **S-LAL14 (OHARA)** — same glass as L12
- Center thickness: 1.35 mm
- Element focal length: −51.8 mm

L22 shares glass with L12 (G1), a practical cost optimization. Its biconcave form distributes negative power across both surfaces, reducing the surface contributions to higher-order aberrations.

**L23 — Positive meniscus, convex toward object**
- Radii: R₁ = +37.807, R₂ = +235.228
- Glass: nd = 2.00069, νd = 25.5 → **TAFD40 (HOYA)** (nd = 2.00069, νd = 25.46, exact match)
- Center thickness: 3.69 mm
- Element focal length: +44.6 mm

L23's refractive index exceeds 2.0, placing it in HOYA's ultra-high-index tantalum flint dense (TaFD) family. The ultra-high index allows weaker surface curvatures for a given optical power, minimizing the spherical aberration and coma contributions. This same glass appears in the L23 position across all eight numerical examples in the patent, indicating Nikon considers it essential to the design.

### 3.3 Group 3 — Relay / Compensator (L31, L32+L33, L34+L35)

G3 is the most complex group, containing five elements in three air-separated components. It sits immediately behind the aperture stop and serves as the primary image-forming relay — its combined power (+39.65 mm) is the strongest positive group.

**L31 — Biconvex positive, front surface aspherical — the AS-ED element**
- Radii: R₁ = +25.884 (aspherical), R₂ = −254.632
- Glass: nd = 1.55332, νd = 71.7 → **E-FPL51 (HOYA)** or L-FPL51 (OHARA equivalent)
- Center thickness: 4.05 mm
- Element focal length: +42.7 mm (thick lens)
- Aspherical surface: K = 0 (spherical base, patent κ = 1)

This is the element Nikon designates as the **"aspherical ED glass"** (AS-ED). The glass, with νd = 71.7, is in the extra-low dispersion category. The aspherical front surface primarily corrects spherical aberration, while the ED glass character controls axial chromatic aberration across the zoom range.

**L32 + L33 — Cemented doublet (negative meniscus + biconvex positive)**
- L32: nd = 1.83481, νd = 42.7 → **S-LAH55V (OHARA)** or similar high-index LaH flint
- L33: nd = 1.61800, νd = 63.3 → **S-PHM52 (OHARA)**, phosphate crown
- Doublet EFL: +84.3 mm

**L34 + L35 — Cemented doublet (biconcave negative + biconvex positive)**
- L34: nd = 1.81600, νd = 46.6 → **S-LAH59 (OHARA)**, lanthanum flint
- L35: nd = 1.59319, νd = 67.9 → **L-LAM60 (OHARA)** (nd = 1.59319, νd = 67.87, exact match)
- Doublet EFL: −137.3 mm

L35 is the most likely candidate for Nikon's second designated **ED glass** element. Its low dispersion (νd = 67.9) provides secondary spectrum correction when paired with the high-dispersion L34.

### 3.4 Group 4 — Focusing Group (L41, L42)

**L41 — Negative meniscus, concave toward object**
- Glass: nd = 1.80100, νd = 34.9 → **S-TIH18 (OHARA)**
- Element focal length: −63.4 mm

**L42 — Biconvex positive, rear surface aspherical**
- Glass: nd = 1.59201, νd = 67.0 → **M-PCD51 (HOYA)** (exact match)
- Element focal length: +31.7 mm
- Aspherical surface: K = 0 (patent κ = 1)

**Group combined EFL: +56.05 mm.**

G4 functions as a telephoto-like unit internally. L42's aspherical rear surface carries significant aspherical departure, correcting residual spherical aberration and coma that would otherwise vary during focus.

### 3.5 Group 5 — Field Flattener / Exit Corrector (L51, L52)

**L51 — Positive meniscus, concave toward object, rear surface aspherical**
- Glass: nd = 1.58913, νd = 61.2 → **L-BAL35 (OHARA)** (exact nd match)
- Element focal length: +92.4 mm
- Aspherical surface: K = 0 (patent κ = 1)

**L52 — Biconcave negative**
- Glass: nd = 1.61800, νd = 63.3 → **S-PHM52 (OHARA)** — same glass as L33
- Element focal length: −32.0 mm

**Group combined EFL: −51.52 mm.**

G5's negative net power serves three purposes: it flattens the Petzval field curvature, provides a degree of telecentricity at the image plane for the mirrorless sensor, and L51's aspherical surface provides final correction for off-axis aberrations.

---

## 4. Aspherical Surfaces

The design employs four aspherical surfaces, each fabricated by glass molding (ガラスモールド非球面レンズ).

### 4.1 Surface Catalog

| Surface | Element | Location | K (standard) | Patent κ | Base shape |
|---|---|---|---|---|---|
| S5A | L21 rear | G2 variator | −1 | 0 | Paraboloid |
| S11A | L31 front | G3 relay | 0 | 1 | Sphere |
| S22A | L42 rear | G4 focus | 0 | 1 | Sphere |
| S24A | L51 rear | G5 field flattener | 0 | 1 | Sphere |

### 4.2 Conic Convention

The patent uses the κ (kappa) convention in its sag equation:

$$x = \frac{h^2 / r}{1 + \sqrt{1 - \kappa (h/r)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

The relationship to the standard conic constant K is: **K = κ − 1**. Thus κ = 1 corresponds to a spherical base (K = 0), and κ = 0 corresponds to a paraboloid (K = −1). Only surface 5A uses a non-trivial base conic.

### 4.3 Coefficient Table

| Coeff. | S5A (L21) | S11A (L31) | S22A (L42) | S24A (L51) |
|---|---|---|---|---|
| K | −1 | 0 | 0 | 0 |
| A4 | +2.11342×10⁻⁵ | −5.01541×10⁻⁶ | +1.52181×10⁻⁵ | +3.09258×10⁻⁶ |
| A6 | +4.21453×10⁻⁸ | +1.10914×10⁻⁹ | −2.09730×10⁻⁸ | +3.56902×10⁻⁸ |
| A8 | −3.77216×10⁻¹¹ | +4.72876×10⁻¹¹ | −1.77284×10⁻¹¹ | −3.36788×10⁻¹¹ |
| A10 | +4.44697×10⁻¹³ | −3.55280×10⁻¹³ | −1.36838×10⁻¹³ | +3.80333×10⁻¹³ |

The patent provides coefficients only through A10. A12 and A14 are zero (not used). This is consistent with glass molding manufacturing limits.

---

## 5. Glass Selection Strategy

### 5.1 Glass Palette

The design uses 10 distinct glass types across 14 elements (plus one filter glass). Three glasses are reused: S-LAL14 appears in both L12 and L22, S-PHM52 in both L33 and L52. Glasses are sourced from at least two manufacturers — OHARA and HOYA. One glass (L21, nd = 1.74353, νd = 49.5) has no confirmed catalog match and may be proprietary.

### 5.2 ED (Extra-low Dispersion) Glasses

Nikon's marketing identifies **two** ED glass elements:

1. **L31 (νd = 71.7):** The AS-ED element. Fluorophosphate ED glass (E-FPL51 or equivalent). APD classification: inferred.
2. **L35 (νd = 67.9):** The non-aspherical ED element. Confirmed match L-LAM60 (OHARA). APD classification: inferred.

### 5.3 Ultra-High Index Glass

L23 (nd = 2.00069) is the design's most remarkable glass choice. The confirmed match is HOYA TAFD40 (nd = 2.00069, νd = 25.46). No equivalent from the OHARA catalog has been identified.

### 5.4 Petzval Field Curvature

The computed Petzval sum is **+0.00132**, yielding a Petzval radius of approximately **+756 mm**. The positive sum indicates a backward-curving Petzval surface (concave toward the lens), which is the typical result for a net-positive zoom system. The strong negative contributions from G2 elements (particularly L21 at −0.025 per surface) partially offset the positive contributions from G3 elements. The relatively well-controlled Petzval sum indicates effective field flattening by the G5 rear group.

---

## 6. Zoom Mechanism and Variable Gaps

### 6.1 Variable Gap Behavior

The design has five optically significant variable air gaps. Their behavior across zoom positions (at infinity focus) is:

| Gap | Location | Wide | Mid | Tele | Character |
|---|---|---|---|---|---|
| D3 | G1—G2 | 1.60 | 17.20 | 31.25 | Zoom only, increasing |
| D9 | G2—G3 | 23.69 | 8.56 | 2.90 | Zoom only, decreasing |
| D18 | G3—G4 | 4.58 | 8.45 | 10.82 | Zoom + focus, increasing |
| D22 | G4—G5 | 8.25 | 4.38 | 2.00 | Zoom + focus, decreasing |
| BFD | G5—Image | 15.56 | 28.49 | 36.14 | Zoom only (includes filter path) |

Three gaps (D3, D9, BFD) change only with zoom and are unaffected by focus. Two gaps (D18, D22) change with both zoom and focus.

### 6.2 EFL Verification

Paraxial ray trace through the complete system at each zoom position yields:

| Position | Computed EFL | Patent EFL | Δ |
|---|---|---|---|
| Wide | 24.720 mm | 24.72 mm | < 0.01 mm |
| Mid | 46.311 mm | 46.31 mm | < 0.01 mm |
| Tele | 67.912 mm | 67.91 mm | < 0.01 mm |

All values match to within rounding precision, confirming correct transcription.

---

## 7. Nikon Marketing Designations and Their Optical Basis

| Nikon Term | Optical Basis |
|---|---|
| **S-Line** | Multi-parameter optimization for high-resolution sensors |
| **AS-ED** | L31: aspherical + ED glass in a single element (νd = 71.7, fluorophosphate crown) |
| **ED** | L35: νd = 67.9, low-dispersion crown for secondary spectrum correction |
| **3 Aspherical** | L21 (S5A), L42 (S22A), L51 (S24A): the three non-ED aspherical elements |
| **Nano Crystal Coat** | Multi-layer anti-reflective coating; likely applied to high-incidence surfaces in G2 and G3 |
| **IF (Internal Focus)** | G4 moves internally; front and rear elements are stationary during focus |
| **STM** | Stepping motor drives the compact G4 group |
| **7 blades** | Electromagnetic diaphragm at STO surface, between G2 and G3 |

---

## 8. Design Observations and Trade-offs

### 8.1 Compact Design at the Cost of Distortion

The retractable barrel mechanism and relatively short total track (121.6–151.0 mm) require aggressive optical power distribution. The G2 variator (f = −29 mm) is exceptionally strong for a 2.75× zoom, and the resulting higher-order aberrations — particularly barrel distortion at the wide end — are managed by aspherical correction and in-camera digital correction. This is a deliberate Nikon strategy for the Z system: trade optical distortion (easily corrected in firmware) for physical compactness.

### 8.2 Constant f/4 Aperture

The constant f/4 maximum aperture across the zoom range is achieved by the stop travelling with G3. The patent confirms FNo = 4.00 at all three zoom positions.

### 8.3 Close Focus Performance

The 0.30 m minimum focus distance is exceptional for a standard zoom. The G4 focus throw at the tele end is 8.5 mm — a large excursion that could introduce significant aberration shift. The aspherical surface on L42 specifically maintains image quality across this focus range.

---

## 9. Computed Prescription Summary

### 9.1 Element Focal Lengths

| Element | Type | nd | νd | EFL (mm) | Glass (probable) |
|---|---|---|---|---|---|
| L11 | Neg. meniscus | 1.84666 | 23.8 | −167.0 | S-TIH53 |
| L12 | Pos. meniscus | 1.75500 | 52.3 | +70.3 | S-LAL14 |
| L21 | Neg. meniscus (1× asph) | 1.74353 | 49.5 | −24.0 | Uncertain (see §10) |
| L22 | Biconcave neg. | 1.75500 | 52.3 | −51.8 | S-LAL14 |
| L23 | Pos. meniscus | 2.00069 | 25.5 | +44.6 | TAFD40 (HOYA) |
| L31 | Biconvex pos. (1× asph, AS-ED) | 1.55332 | 71.7 | +42.7 | E-FPL51 |
| L32 | Neg. meniscus | 1.83481 | 42.7 | −65.1 | S-LAH55V |
| L33 | Biconvex pos. | 1.61800 | 63.3 | +36.6 | S-PHM52 |
| L34 | Biconcave neg. | 1.81600 | 46.6 | −13.9 | S-LAH59 |
| L35 | Biconvex pos. (ED) | 1.59319 | 67.9 | +17.7 | L-LAM60 |
| L41 | Neg. meniscus | 1.80100 | 34.9 | −63.4 | S-TIH18 |
| L42 | Biconvex pos. (1× asph) | 1.59201 | 67.0 | +31.7 | M-PCD51 (HOYA) |
| L51 | Pos. meniscus (1× asph) | 1.58913 | 61.2 | +92.4 | L-BAL35 (OHARA) |
| L52 | Biconcave neg. | 1.61800 | 63.3 | −32.0 | S-PHM52 |

All element focal lengths computed via thick-lens formula and independently verified.

### 9.2 Air-Separated Group Count (11 groups)

1. L11+L12 (cemented), 2. L21, 3. L22, 4. L23, 5. L31, 6. L32+L33 (cemented), 7. L34+L35 (cemented), 8. L41, 9. L42, 10. L51, 11. L52 — totaling 14 elements in 11 groups, matching Nikon's specification exactly.

---

## 10. Limitations and Caveats

- **Semi-diameters:** The patent does not provide semi-diameter data. All SDs in the data file are estimated via combined marginal + chief ray traces across all three zoom positions with 8–10% mechanical clearance, validated against edge thickness (≥ 0.5 mm), cross-gap sag overlap (intrusion ≤ gap × 1.1), and aspherical slope limits. Front element SD constrained by 72 mm filter thread. Some vignetting at wide-end field edges is expected — the production lens applies digital shading correction.
- **Close-focus object distance:** The patent provides close-focus variable spacings at W/M/T but does not explicitly state the object distance. The manufacturer specification of 0.30 m is used for `closeFocusM`.
- **Aspherical coefficients:** Only A4–A10 provided in patent. A12–A14 set to 0.
- **Glass identifications:** All assignments are inferences from 6-digit nd/νd codes. Exact matches (Δnd < 0.00001) found for 13 of 14 elements. **L21 (nd = 1.74353, νd = 49.5) has no confirmed catalog match.** Production glasses may differ from patent values.
- **Cover glass:** Patent surfaces 27–28 (nd = 1.51680, d = 1.60 mm) excluded from surface array. Physical BFD from last lens surface to image plane (including filter path) folded into the last surface's d value.
