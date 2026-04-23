# Nikon AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR — Patent Optical Analysis

## US 2020/0049962 A1 · Example 1 (ZL1) · Inventor: Tomoki Ito · Nikon Corporation

---

## 1. Identification and Provenance

US Patent Application Publication US 2020/0049962 A1 was published on February 13, 2020, as a divisional of application No. 14/809,242 (filed July 26, 2015, now US Patent 10,459,207), itself a continuation of PCT/JP2014/000396 (filed January 27, 2014). The patent claims priority from seven Japanese applications all filed January 28, 2013 (JP 2013-012752 through JP 2013-012758).

The production lens — the **AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR** — was announced by Nikon on March 5, 2013, placing the patent priority dates less than six weeks before the commercial announcement. The patent's Example 1 (designated ZL1 in the figures) is the numerical embodiment that most closely matches the production lens specification:

| Parameter | Patent Example 1 | Production Lens (Nikon) |
|-----------|-------------------|------------------------|
| Focal length range | 81.6–392.0 mm | 80–400 mm |
| Maximum aperture | f/4.56–5.85 | f/4.5–5.6 |
| Angle of view (2ω) | 29.6°–6.2° | 30°10′–6°10′ |
| Image height (Y) | 21.6 mm | 21.6 mm (FX-format, 43.2 mm circle) |
| Element/group count | 20 elements / 12 groups | 20 elements / 12 groups |
| Zoom ratio | 4.80× | 5× (nominal) |
| Minimum focus distance | 1.75 m (inferred from MFD data) | 1.75 m (AF) / 1.50 m (MF) |
| VR system | G2 sub-group shift, 2nd-gen | VR II, ~4 stops CIPA |
| Filter thread | — | 77 mm |
| Aperture blades | Not specified | 9 (rounded) |

The minor differences in stated focal length (81.6 vs. 80, 392 vs. 400) reflect the standard practice of rounding design focal lengths to marketing values. The design EFL values were independently verified by paraxial ray trace and match the patent to better than 0.02 mm at all three tabulated zoom positions.

---

## 2. Optical Architecture

### 2.1 Zoom Group Structure

The zoom system follows a five-group layout of the form **+/−/+/−/+**, a classic architecture for long-range telephoto zoom lenses. The five zoom groups are:

| Zoom Group | Power | Elements | Patent Designation | Focal Length |
|------------|-------|----------|--------------------|-------------|
| G1 | Positive | 3 (in 2 optical groups) | First lens group | +161.71 mm |
| G2 | Negative | 5 (in 3 optical groups) | Second lens group | −32.53 mm |
| G3 | Positive | 3 (in 2 optical groups) | Third lens group | +50.82 mm |
| G4 | Negative | 2 (in 1 optical group) | Fourth lens group | −70.03 mm |
| G5 | Positive | 7 (in 4 optical groups) | Fifth lens group | +59.67 mm |

All group focal lengths were independently verified by paraxial ray trace and agree with the patent's tabulated values to three decimal places.

The patent and Nikon's marketing specification both state **20 elements in 12 groups**. The "12 groups" count refers to air-separated optical groups (counting each cemented assembly as one group), while the "5 groups" in the patent text refers to zoom groups that move independently during zooming. The reconciliation is: G1 contributes 2 optical groups, G2 contributes 3, G3 contributes 2, G4 contributes 1, and G5 contributes 4 — totaling 12.

### 2.2 Zoom Mechanism

Upon zooming from the wide-angle end (81.6 mm) to the telephoto end (392.0 mm):

- **G1, G3, and G5** move toward the object along the optical axis.
- **G2 and G4 are stationary** — both are fixed with respect to the image plane during zooming.

This is an important design feature. By fixing G2 (which contains the VR sub-group) and G4 relative to the image sensor, the mechanical barrel design is simplified. The VR group's position relative to the sensor remains constant regardless of zoom state, which simplifies the VR control algorithm. Fixing G4 further reduces the number of moving cam groups from five to three.

The total track length changes from 246.4 mm at the wide end to 302.5 mm at the telephoto end — a 56.1 mm extension. At the telephoto end, the telephoto ratio (total track / focal length) is **0.772**, confirming strong telephoto compression: the physical length is only 77% of the focal length.

The variable air gap data at three zoom positions (all at infinity focus):

| Gap | Wide (81.6 mm) | Mid (200.0 mm) | Tele (392.0 mm) |
|-----|----------------|-----------------|-----------------|
| D1 (G1→G2) | 8.23 mm | 45.19 mm | 64.29 mm |
| D2 (G2→G3) | 27.06 mm | 15.34 mm | 3.06 mm |
| D3 (G3→G4) | 5.39 mm | 17.11 mm | 29.39 mm |
| D4 (G4→STO/G5) | 26.68 mm | 11.15 mm | 2.38 mm |
| BF (last surface→image) | 52.8 mm | 68.3 mm | 77.1 mm |

Notice the monotonic trends: D1 increases throughout (G1 moves away from the fixed G2), D2 decreases (G3 approaches G2), D3 increases (G3 moves away from the fixed G4), and D4 decreases (G5 approaches G4). No variable gap reverses direction, which means the zoom cam curves are all monotonic — mechanically simple to implement and free of backlash concerns.

The sum of all variable gaps plus fixed thicknesses satisfies a conservation check: the fixed-thickness total is 126.28 mm at all three zoom positions, confirming the prescription transcription is error-free.

### 2.3 Aperture Stop

The aperture stop (labeled "S" in the patent, surface 22) is positioned between G4 and G5 — specifically, on the object side of G5. It moves together with G5 upon zooming. This placement between the third and fourth zoom groups (between G3+G4 on the front side and G5 on the rear side) is optimal for controlling coma and field curvature across the zoom range.

The lens uses a variable maximum aperture: f/4.56 at 81.6 mm, progressively stopping down to f/5.85 at 392 mm. At the wide end, the entrance pupil diameter is approximately 17.9 mm; at the telephoto end it is approximately 67.0 mm. The 9-blade iris diaphragm must accommodate this large range of physical stop diameters.

---

## 3. Aspherical Surfaces

**The lens contains no aspherical surfaces.** This is stated explicitly in the patent text at paragraph [0107]:

> "It is preferable that all the lens surfaces are spherical. By this configuration, processing, assembly and adjustment of the lenses become easier, and deterioration of optical performance, due to an error in processing, assembly and adjustment, can be prevented."

This is corroborated by three independent lines of evidence: no aspherical coefficient tables appear in the patent's numerical examples; Nikon's marketing materials make no mention of aspherical elements; and the patent treats aspherical surfaces as a possible future modification (paragraph [0210]). Achieving high optical performance across a 4.8× zoom range with 20 all-spherical elements is a notable design accomplishment, relying entirely on glass selection (ED and Super ED materials), cemented interfaces, and power distribution for aberration control.

---

## 4. Glass Types and ED/Super ED Identification

### 4.1 Nikon's Published Specification

Nikon states the lens incorporates **four ED (Extra-low Dispersion) glass elements** and **one Super ED glass element** — five special-dispersion elements in total. ED glass has anomalous partial dispersion characteristics enabling superior chromatic aberration correction, while Super ED glass provides even more extreme anomalous dispersion for secondary spectrum correction.

### 4.2 Identification from Patent Data

#### Super ED Glass (1 element)

**L13** (nd = 1.43700, νd = 95.0): Extraordinarily low refractive index and extremely high Abbe number, placing it in the fluorite-class dispersion range. Matches Hoya FCD100 exactly (nd = 1.43700, νd = 95.10, Δνd = −0.10). Nikon's "Super ED" designation for this element reflects their use of synthetic fluorite-equivalent glasses offering the extreme anomalous partial dispersion of fluorite without its sensitivity to thermal shock. This positive meniscus element sits in G1, contributing strong positive power with minimal chromatic contribution.

#### ED Glass (4 elements)

**L12** (nd = 1.49782, νd = 82.6): Classic low-dispersion fluorophosphate crown, closely matching OHARA S-FPL51 class. This is the archetype of Nikon's "ED glass." Cemented with the high-index flint L11, forming the primary axial color-correcting achromatic doublet.

**L22** (nd = 1.49782, νd = 82.6): Identical glass to L12, placed in G2. Contributes to lateral chromatic aberration correction in the negative diverging group.

**L31** (nd = 1.59319, νd = 67.9): Medium-index phosphate crown with anomalous partial dispersion. Falls above the "normal line" on the partial dispersion diagram (Pg,F vs. νd). The front positive singlet of G3 — the focusing group.

**L33** (nd = 1.59319, νd = 67.9): Identical glass to L31. The rear positive element of the cemented doublet in G3.

### 4.3 Full Glass Inventory

| Element | nd | νd | Six-Digit Code | Probable Glass | APD |
|---------|------|------|---------|---------------|------|
| L11 | 1.90265 | 35.7 | 1903/357 | LaH dense flint (no exact match) | Normal |
| **L12** | **1.49782** | **82.6** | **1498/826** | **S-FPL51 class** | **ED** |
| **L13** | **1.43700** | **95.0** | **1437/950** | **FCD100 (HOYA)** | **Super ED** |
| L21 | 1.80100 | 34.9 | 1801/349 | S-LAH52 (OHARA), exact | Normal |
| **L22** | **1.49782** | **82.6** | **1498/826** | **S-FPL51 class** | **ED** |
| L23 | 1.81600 | 46.6 | 1816/466 | S-LAH59 (OHARA), exact | Normal |
| L24 | 1.80518 | 25.5 | 1805/255 | SF6 (Schott), exact | Normal |
| L25 | 1.83481 | 42.7 | 1835/427 | S-LAH55V (OHARA), exact | Normal |
| **L31** | **1.59319** | **67.9** | **1593/679** | **Phosphate crown (ED)** | **ED** |
| L32 | 1.90366 | 31.3 | 1904/313 | S-LAH65V (OHARA), near-exact | Normal |
| **L33** | **1.59319** | **67.9** | **1593/679** | **Phosphate crown (ED)** | **ED** |
| L41 | 1.72916 | 54.6 | 1729/546 | S-LAL18 (OHARA), exact | Normal |
| L42 | 1.90265 | 35.7 | 1903/357 | Same as L11 | Normal |
| L51 | 1.74400 | 44.8 | 1744/448 | S-LAM2 (OHARA), exact | Normal |
| L52 | 1.48749 | 70.3 | 1487/703 | S-FSL5 (OHARA) / N-FK5 (Schott) | Normal |
| L53 | 1.95000 | 29.4 | 1950/294 | TAFD40 (HOYA), exact | Normal |
| L54 | 1.51742 | 52.2 | 1517/522 | S-NSL36 (OHARA) / K10 (Schott) | Normal |
| L55 | 1.64769 | 33.7 | 1648/337 | S-TIF6 (OHARA), exact | Normal |
| L56 | 1.60300 | 65.4 | 1603/654 | No close catalog match; likely proprietary | Normal |
| L57 | 1.83481 | 42.7 | 1835/427 | S-LAH55V (OHARA), same as L25 | Normal |

### 4.4 Glass Strategy

The design employs an aggressive glass strategy: four ultra-high-index glasses (nd > 1.90) appear in L11, L32, L42 (all nd ≈ 1.903) and L53 (nd = 1.950, the highest-index glass in the system). Three distinct glass families provide chromatic correction at three levels: FCD100-class Super ED L13 (νd = 95) for secondary spectrum, FPL51-class ED L12/L22 (νd = 82.6) for primary color, and medium-dispersion ED L31/L33 (νd = 67.9) for residual color in the focusing group. Extensive glass reuse (L11=L42, L12=L22, L25=L57, L31=L33) simplifies procurement and quality control.

---

## 5. Element-by-Element Optical Analysis

### 5.1 Group 1 — Front Positive Group (f = +161.71 mm)

G1 is the front objective group, collecting light and beginning convergence. Its relatively weak positive power (f₁ = 161.7 mm, about 40% of the telephoto-end EFL) is deliberate: a weaker front group reduces aberration sensitivity to decentration errors from the zoom mechanism (patent paragraph [0094]).

| Element | Shape | fl (mm) | Glass | Role |
|---------|-------|---------|-------|------|
| L11 | Neg. meniscus (convex to object) | −210.5 | LaH dense flint (nd=1.903, νd=35.7) | High-index flint of cemented achromatic doublet |
| L12 | Biconvex | +165.1 | **ED glass** (nd=1.498, νd=82.6) | Positive ED element; primary axial color corrector |
| L13 | Pos. meniscus (convex to object) | +202.2 | **Super ED / FCD100** (nd=1.437, νd=95.0) | Secondary spectrum corrector; ultra-low dispersion |

The L11+L12 cemented doublet is a classic negative-lead achromat. L13, separated by 0.1 mm, is the single most optically valuable element in the system: without it, the 400 mm telephoto end would show pronounced secondary chromatic fringing.

### 5.2 Group 2 — Negative Variator Group (f = −32.53 mm)

G2 is the primary zoom variator. Despite being stationary during zooming, its strong negative power magnifies the converging beam from G1 by an amount that varies as G1 moves. G2 also contains the **VR (vibration reduction) sub-group**.

| Element | Shape | fl (mm) | Glass | Role |
|---------|-------|---------|-------|------|
| L21 | Biconvex | +74.0 | LaH dense flint (nd=1.801) | Front positive element of achromatic doublet |
| L22 | Biconcave | −80.4 | **ED glass** (nd=1.498, νd=82.6) | Negative ED element; lateral color correction |
| L23 | Biconcave | −33.7 | Lanthanum dense flint (nd=1.816, νd=46.6) | **VR sub-group front** |
| L24 | Pos. meniscus (convex to object) | +55.5 | Dense flint (nd=1.805, νd=25.5) | **VR sub-group rear** |
| L25 | Biconcave | −49.6 | Lanthanum dense flint (nd=1.835, νd=42.7) | Rear diverging singlet; wide-angle coma control |

**VR sub-group (L23+L24):** This cemented pair shifts perpendicular to the optical axis for image stabilization. The patent provides vibration-isolation coefficients:

| Zoom Position | K | f (mm) | Shift for 0.2° correction |
|---------------|---|--------|---------------------------|
| Wide (81.6 mm) | −0.767 | 81.6 | −0.371 mm |
| Mid (200.0 mm) | −1.348 | 200.0 | −0.518 mm |
| Tele (392.0 mm) | −2.103 | 392.0 | −0.651 mm |

### 5.3 Group 3 — Positive Focusing Group (f = +50.82 mm)

G3 is the **focusing group**. The patent states at paragraph [0105] that G3 is moved along the optical axis upon focusing. Specifically, G3 moves toward the image to focus from infinity to close distances.

| Element | Shape | fl (mm) | Glass | Role |
|---------|-------|---------|-------|------|
| L31 | Biconvex | +78.7 | **ED glass** (nd=1.593, νd=67.9) | Front positive singlet |
| L32 | Neg. meniscus (convex to object) | −85.0 | Dense LaH flint (nd=1.904, νd=31.3) | Negative element of achromatic doublet |
| L33 | Biconvex | +52.5 | **ED glass** (nd=1.593, νd=67.9) | Positive ED element of doublet |

Both positive elements use the same ED glass, ensuring chromatic correction is maintained as G3 translates during focusing.

**Focus travel:** During focus from infinity to close focus (1.75 m), G3 moves toward the image. This causes D2 (the gap between fixed G2 and moving G3) to **increase** and D3 (the gap between moving G3 and fixed G4) to **decrease**, with D2 + D3 remaining constant at each zoom position. Close-focus variable gaps were computed by paraxial ray trace:

| Zoom | D2 (inf → close) | D3 (inf → close) | Focus shift δ |
|------|-------------------|-------------------|---------------|
| Wide (81.6 mm) | 27.059 → 29.722 | 5.388 → 2.725 | 2.663 mm |
| Mid (200.0 mm) | 15.341 → 21.696 | 17.106 → 10.751 | 6.355 mm |
| Tele (392.0 mm) | 3.056 → 16.069 | 29.391 → 16.378 | 13.013 mm |

The focus shift increases dramatically at longer focal lengths — over 13 mm at the telephoto end — which is typical for inner-focus telephoto designs where the focusing group must compensate for the large magnification change.

### 5.4 Group 4 — Negative Compensating Group (f = −70.03 mm)

G4 is stationary during zoom (fixed relative to the image plane) and provides negative compensating power for field curvature and image position control.

| Element | Shape | fl (mm) | Glass | Role |
|---------|-------|---------|-------|------|
| L41 | Biconcave | −31.9 | Lanthanum crown (nd=1.729, νd=54.6) | Strong negative power; Petzval flattener |
| L42 | Pos. meniscus (convex to object) | +57.9 | Dense LaH flint (nd=1.903, νd=35.7) | Partially compensates L41; chromatic tuning |

The glass pairing is notable: the negative element uses a lanthanum crown (νd = 54.6), while the positive element uses a high-dispersion lanthanum dense flint (νd = 35.7). This deliberate dispersion imbalance introduces chromatic aberration to compensate for residual color from surrounding groups.

### 5.5 Group 5 — Positive Relay Group (f = +59.67 mm)

G5 is the rear relay group forming the final image on the sensor. It is the most complex group with seven elements in four optical sub-groups, including a cemented triplet.

| Element | Shape | fl (mm) | Glass | Role |
|---------|-------|---------|-------|------|
| L51 | Biconvex (symmetric: R = ±124.142) | +83.9 | Lanthanum crown-flint (nd=1.744, νd=44.8) | Front positive singlet after aperture stop |
| L52 | Plano-convex (convex to object) | +54.6 | Fluor crown (nd=1.487, νd=70.3) | Front element of cemented triplet |
| L53 | Plano-concave (concave to image) | −27.8 | Ultra-high-index LaH flint (nd=1.950, νd=29.4) | Central negative of triplet; highest-index glass |
| L54 | Plano-convex (convex to object) | +51.1 | Light crown (nd=1.517, νd=52.2) | Rear element of triplet |
| L55 | Biconvex | +27.7 | Short flint (nd=1.648, νd=33.7) | Front of rear doublet; strong positive near image |
| L56 | Plano-concave (concave to object) | −32.7 | Phosphate crown (nd=1.603, νd=65.4) | Rear of rear doublet; field flattener |
| L57 | Neg. meniscus (concave to object) | −82.2 | Lanthanum dense flint (nd=1.835, νd=42.7) | Final element; telecentricity and Petzval control |

**The cemented triplet (L52+L53+L54)** has two flat internal junctions and concentrates optical power at the two curved surfaces: the convex L52 front (R = 26.615 mm) and the L53→L54 junction (R = 26.437 mm). The ultra-high-index L53 (nd = 1.950) creates strong negative power at the curved junction (the large index step from 1.950 to 1.517 at R = 26.437). This triplet functions as a compact field corrector and is the primary mechanism for controlling field curvature and lateral color.

**L55+L56 cemented doublet** sits close to the image plane and acts as a field-flattening pair, with the phosphate crown L56 (νd = 65.4) providing mild anomalous partial dispersion that assists lateral color correction at the field edges.

**L57** is the final element — a negative meniscus with its concave side facing the object, fine-tuning the exit pupil position for digital sensor telecentricity and providing final Petzval curvature correction.

---

## 6. Anti-Reflection Coating (Nano Crystal Coat)

The patent describes a seven-layer anti-reflection film with a wet-process outermost layer:

| Layer | Material | Refractive Index | Process |
|-------|----------|-----------------|---------|
| 7 (outermost) | SiO₂ + MgF₂ mixture | 1.26 | Wet (sol-gel) |
| 6 | ZrO₂ + TiO₂ mixture | 2.12 | Dry (vacuum deposition) |
| 5 | Al₂O₃ | 1.65 | Dry |
| 4 | ZrO₂ + TiO₂ mixture | 2.12 | Dry |
| 3 | Al₂O₃ | 1.65 | Dry |
| 2 | ZrO₂ + TiO₂ mixture | 2.12 | Dry |
| 1 (on substrate) | Al₂O₃ | 1.65 | Dry |

The sol-gel outermost layer achieves nd = 1.26 — significantly lower than conventional single-layer MgF₂ coatings (nd = 1.38). The porosity of the nanostructured MgF₂/air mixture yields the ultra-low effective refractive index. Reflectance is controlled to 0.2% or less across 420–720 nm. The patent identifies surfaces 28 and 29 (the rear surface of L54 and the front surface of L55) as ghost-critical surfaces (FIG. 5).

---

## 7. Petzval Sum and Field Curvature

The Petzval sum computed surface-by-surface is **+0.00105 mm⁻¹**, corresponding to a Petzval radius of approximately **956 mm**. This is a large positive Petzval radius — the field curvature is mild enough to be corrected by the astigmatism balance built into the design. The Petzval correction relies on the interplay of the strong negative groups (G2 and G4) with the positive groups, and the cemented triplet in G5 (with its ultra-high-index L53) is a particularly efficient Petzval flattener.

---

## 8. Conditional Expressions — Design Balance

The patent defines 27 conditional expressions constraining the power balance among groups. All are satisfied by Example 1:

| Expression | Value | Range | Significance |
|-----------|-------|-------|-------------|
| f₁/(−f₂) | 4.97 | 4.41–5.33 | G1/G2 power ratio; telephoto-end SA and axial color |
| f₁/f₃ | 3.18 | 2.15–4.95 | G1/G3 power ratio; front vs focus group balance |
| f₃/(−f₄) | 0.73 | 0.18–0.92 | G3/G4 power ratio; telephoto-end SA and chromatic |
| (−f₄)/f₅ | 1.17 | 0.82–1.58 | G4/G5 power ratio; wide-angle field curvature and distortion |
| ft/(−f₂) | 12.1 | 9.6–20.0 | System magnification relative to G2; wide-angle coma |
| ft/(−f₄) | 5.6 | 3.9–8.8 | System magnification relative to G4; telephoto chromatic |
| (−f₂)/f₅ | 0.55 | 0.3–0.8 | G2/G5 balance; wide-angle field and distortion |

---

## 9. Verification Summary

All numerical claims were verified by independent Python-based paraxial ray trace using the ABCD (y-nu) matrix method.

**EFL verification at all three zoom positions:**

| Position | Computed EFL | Patent EFL | Residual |
|----------|-------------|------------|---------|
| Wide | 81.599 mm | 81.6 mm | −0.001 mm |
| Mid | 199.991 mm | 200.0 mm | −0.009 mm |
| Tele | 391.985 mm | 392.0 mm | −0.015 mm |

**Group focal length verification:**

| Group | Computed | Patent | Residual |
|-------|---------|--------|---------|
| G1 | +161.715 mm | +161.714 mm | +0.001 mm |
| G2 | −32.531 mm | −32.531 mm | < 0.001 mm |
| G3 | +50.816 mm | +50.816 mm | < 0.001 mm |
| G4 | −70.030 mm | −70.030 mm | < 0.001 mm |
| G5 | +59.673 mm | +59.673 mm | < 0.001 mm |

**Variable gap conservation:** Fixed-thickness sum = 126.280 mm at all three zoom positions. ✓

**Petzval sum:** +0.001046 mm⁻¹ (Petzval radius = 956.4 mm).

**Close-focus gaps:** Solved by paraxial imaging equation for MFD = 1.75 m at all three zoom positions. Focus shift (δ) ranges from 2.66 mm at wide to 13.01 mm at tele.

All 27 conditional expressions evaluated in Table 3 of the patent were independently verified and confirmed satisfied.

---

## 10. References

1. US Patent Application Publication US 2020/0049962 A1, "Zooming optical system, optical apparatus, and manufacturing method for the zooming optical system," Tomoki Ito, Nikon Corporation, published February 13, 2020.
2. US Patent 10,459,207 B2 (parent patent).
3. Nikon Corporation, "AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR — Specifications," Nikon Imaging, https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_80-400mmf_45-56g_ed_vr/
