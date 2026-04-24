# Patent Analysis: NIKKOR Z MC 105mm f/2.8 VR S

## WO 2022/097401 A1 — Example 1 (Numerical Embodiment 1)

**Patent:** WO 2022/097401 A1 (PCT/JP2021/036577)
**Priority:** JP 2020-185907, filed November 6, 2020
**Applicant:** Nikon Corporation
**Inventor:** Kuribayashi Tomonori (栗林 知憲)
**Published:** May 12, 2022

**Production lens:** NIKKOR Z MC 105mm f/2.8 VR S (Nikon product code 20100, announced June 2021)

**Identification basis:** The patent's Example 1 focal length (f = 102.86 mm) matches the Photons to Photos optical bench measurement of the production lens exactly. The 4-group inner-focus architecture, 1:1 macro capability (β = −1.0), and 16-element/11-group optical formula with 1 aspherical surface match Nikon's published specifications (16 elements / 11 groups, 1 aspherical lens element, 3 ED elements). The implied working distance at 1:1 (MFD − TL ≈ 290 − 149.4 ≈ 141 mm) is consistent with the Photons to Photos optical bench measurement of 138 mm and with the production lens's 0.29 m minimum focus distance (measured from image plane).

---

## 1. System Overview

The optical system OL(1) comprises four lens groups arranged along the optical axis from the object side:

| Group | Power | Focal Length (mm) | Elements | Start Surface |
|-------|-------|-------------------|----------|---------------|
| G1    | Positive (+) | +56.05  | 4 (L11, L12, L13, L14) | 1 |
| G2    | Negative (−) | −49.08 | 3 (L21, L22, L23) | 8 |
| G3    | Positive (+) | +52.89  | 3 (L31, L32, L33) | 14 |
| G4    | Negative (−) | −64.87 | 6 (L41–L46) | 19 |

**Total:** 16 elements in 4 groups (11 sub-groups when counting air-spaced elements within each group separately, matching Nikon's published "11 groups" specification).

The overall system specifications at infinity focus are:

| Parameter | Value |
|-----------|-------|
| Effective focal length | 102.86 mm |
| Half-field angle (ω) | 12.03° |
| Maximum image height (Ymax) | 21.70 mm |
| Total track length (TL) | 149.38 mm |
| Back focal distance (Bf) | 16.78 mm |
| F-number (infinity) | f/2.89 |
| F-number (β = −0.5) | f/3.68 |
| F-number (β = −1.0, 1:1) | f/4.65 |

The system covers a full-frame image circle (43.4 mm diagonal) and achieves 1:1 macro magnification. The implied working distance at 1:1 is approximately 141 mm (from MFD − TL), consistent with the Photons to Photos bench measurement of 138 mm.

---

## 2. Focus Mechanism — Dual Inner Focus ("Multi-Focus System")

The lens employs a dual inner-focus architecture in which groups G2 and G3 move axially during focusing while G1 and G4 remain fixed relative to the image plane. The aperture stop S, located between G2 and G3, is also fixed relative to the image plane.

When focusing from infinity to the closest distance (β = −1.0):

| Gap | Infinity | β = −0.5 | β = −1.0 | Change |
|-----|----------|----------|----------|--------|
| D7 (G1–G2) | 3.662 | 12.980 | 22.619 | +18.957 |
| D12 (G2–STO) | 25.484 | 16.167 | 6.528 | −18.956 |
| D13 (STO–G3) | 24.986 | 14.031 | 4.245 | −20.741 |
| D18 (G3–G4) | 2.206 | 13.161 | 22.947 | +20.741 |

**G2 moves toward the image** by 18.957 mm (the gap D7 before it opens while D12 after it closes by the same amount). **G3 moves toward the object** by 20.741 mm (D13 before it closes while D18 after it opens). The two groups move in opposite directions, collapsing the ~50.5 mm central air space (D12 + D13) at infinity down to ~10.8 mm at 1:1. The total group travel (Mf2 + Mf3 ≈ 39.7 mm) is absorbed entirely by this central gap reduction.

This counter-directional movement is the key to the "multi-focus system" that Nikon markets for chromatic aberration suppression. By moving two groups with opposite power signs in opposite directions, the design can re-balance spherical aberration, field curvature, and chromatic aberrations at each focus distance — maintaining correction quality from infinity to 1:1 in a way that a single-group inner-focus design cannot.

**Effective focal length variation:** Because the inner groups change the system's net power distribution as they move, the effective focal length shortens dramatically at close focus. Photons to Photos optical bench measurements confirm f_eff ≈ 70.5 mm at 1:2 and f_eff ≈ 49.3 mm at 1:1 — a reduction of more than half from the infinity-focus value. This "focus breathing" is an inherent consequence of the inner-focus architecture and means the lens operates more like a ~50 mm lens at macro distances, widening the field of view.

**Effective f-number at 1:1:** The working f-number increases from f/2.89 at infinity to f/4.65 at 1:1 — approximately 1.37 stops of light loss. This is notably less than the 2.00 stops predicted by the classical extension-tube rule (FNO_eff ≈ FNO × (1 + |β|) = 2.89 × 2 = 5.78). The difference arises because the inner-focus design simultaneously shortens the effective focal length from ~103 mm to ~49 mm as it achieves 1:1 magnification — the system is not simply extending an air gap as a bellows or extension tube would. The shorter effective focal length at close focus means the effective f-number penalty is much gentler than for a unit-focusing design, which is a significant practical advantage for macro photographers working at high magnifications.

---

## 3. Aspherical Surfaces

Example 1 has a single aspherical surface: **surface 27** (the object-side face of element L46, the rearmost element). The surface is denoted 27* in the patent table.

### 3.1 Aspherical Coefficients

The sag equation used in this patent (equation B in [0090]) is:

> Z(y) = (y²/R) / {1 + [1 − κ(y/R)²]^(1/2)} + A4·y⁴ + A6·y⁶ + A8·y⁸ + A10·y¹⁰ + A12·y¹²

| Coefficient | Value |
|-------------|-------|
| R (paraxial) | −26.4605 mm |
| κ (conic constant) | 1.000 |
| A4 | +9.61768 × 10⁻⁶ |
| A6 | +1.56877 × 10⁻⁸ |
| A8 | −4.92862 × 10⁻¹¹ |
| A10 | −1.29299 × 10⁻¹³ |
| A12 | −7.46540 × 10⁻¹⁷ |

### 3.2 Role of the Aspherical Surface

The aspherical surface on L46 is located at the very rear of the optical system, in the diverging cone of light approaching the image plane. At this position, off-axis ray bundles are spread out across the surface aperture, making it an effective location for correcting field-dependent aberrations — specifically, field curvature and astigmatism.

The patent text at [0077] explicitly states the purpose: "at least one lens surface of the negative lens disposed most on the image side in the optical system OL should preferably be aspherical. This enables uniform correction of field curvature across the image surface."

**Conic constant interpretation:** This patent uses equation form B, where κ replaces (1+K) in the standard even-asphere sag equation. Therefore κ = 1.000 corresponds to a standard conic constant K = 0 — the base surface is a **sphere**. All aspherical departure comes exclusively from the polynomial coefficients A4 through A12.

The dominant A4 term (+9.62 × 10⁻⁶) produces a positive sag departure from the base sphere that grows as y⁴. On this concave surface (R < 0), the positive polynomial departure makes the surface less steeply concave at the rim than the base sphere. At representative semi-diameters, the polynomial departure is substantial: approximately +43 µm at y = 8 mm, +106 µm at y = 10 mm, and +216 µm at y = 12 mm. The positive A6 term adds a sixth-order correction in the same direction, while the negative higher-order terms (A8, A10, A12) provide fine balancing of the residual higher-order field-dependent aberrations, particularly astigmatism.

**Note on other embodiments:** Example 3 (Table 3) in the patent adds a second aspherical surface (surface 6*), and Example 4/5 both use two aspherical surfaces (surfaces 6* and 27*). Nikon's production specification lists "1 aspherical lens element," which is consistent with Example 1 having a single aspherical surface on a single element (L46).

---

## 4. Glass Types and Identification

The patent lists 10 distinct glass types across the 16 elements. The table below presents each glass, its patent-listed properties, the closest catalog match, and the glass family classification.

### 4.1 Glass Identification Table

| Glass | nd | νd | θgF | Used In | Catalog Match (OHARA) | Family |
|-------|----|----|-----|---------|----------------------|--------|
| A | 1.83481 | 42.73 | — | L11, L31 | OHARA S-LAH55V (nd=1.835, νd=42.73) | Lanthanum dense crown |
| B | 1.85451 | 25.15 | 0.6103 | L12, L32 | No exact catalog match (glass code 855252) | High-index flint — anomalous partial dispersion |
| C | 1.59319 | 67.90 | — | L13, L14, L33 | S-FPM3 (nd=1.593, νd=67.9) | Fluorophosphate crown |
| D | 1.51860 | 69.89 | — | L21, L42 | No exact catalog match (glass code 519699) | Phosphate crown (FK/PK region) |
| E | 1.72047 | 34.71 | — | L22 | Glass code 720347 — OHARA region (S-TIH or S-LAH family) | Lanthanum/titanium flint |
| F | 1.94595 | 17.98 | — | L23, L43 | Hikari E-FDS3HT (nd=1.946, νd=18.0) or equivalent | Ultra-high-index dense flint |
| G | 1.95375 | 32.33 | — | L41 | OHARA S-LAH79 (nd=1.954, νd=32.32) | Lanthanum dense crown (extreme index) |
| H | 2.00069 | 25.46 | — | L44 | No exact catalog match (glass code 001255) | Ultra-high-index specialty glass (nd > 2.0) |
| I | 1.80440 | 39.61 | — | L45 | OHARA S-LAH63 (nd=1.804, νd=39.58; Q variant available) | Lanthanum dense crown |
| J | 1.51680 | 64.14 | — | L46 | Schott N-BK7 (nd=1.51680) / OHARA S-BSL7 (νd=64.14) | Borosilicate crown (BK7 equivalent) |

**Important caveat:** Glass identification from patent nd/νd values alone is inferential. Patents may use rounded or interpolated values, and production lenses may substitute equivalent glasses from different manufacturers (OHARA, Hikari, CDGM, Sumita, or Nikon proprietary melts). The matches above represent the closest available catalog glasses and should not be treated as confirmed production glass selections.

### 4.2 The "3 ED Elements" Question

Nikon's marketing materials for the Z MC 105mm f/2.8 VR S specify "3 ED glass elements." In Nikon's traditional usage, "ED" (Extra-low Dispersion) refers to glasses with anomalous partial dispersion used for chromatic correction — historically fluorite (νd ≈ 95), calcium fluoride, or FK-type fluorophosphate crowns (νd > 80).

No glass in this patent has an Abbe number anywhere close to traditional ED territory. The highest is Glass D (νd = 69.89), followed by Glass C (νd = 67.90). This observation was also noted in a photomacrography.net discussion of the patent. There are two plausible hypotheses for which three elements constitute the "3 ED" designation:

**Hypothesis A — The anomalous-dispersion flints (Glass B) plus one more:**
The patent explicitly identifies two elements (L12 and L32, both Glass B) as satisfying conditional expressions (4)–(6) and (17)–(19) for anomalous partial dispersion. Both use Glass B (nd = 1.85451, νd = 25.15, θgF = 0.6103), which has ΔθgF = +0.0095 above the normal line. Under a broadened definition of "ED" that encompasses any glass with significant anomalous partial dispersion — regardless of absolute dispersion level — these two would qualify. A third candidate would be Glass H (nd = 2.00069, νd = 25.46, L44) or Glass F (nd = 1.94595, νd = 17.98, L23/L43), both of which likely possess anomalous partial dispersion given their position on the glass map, though no θgF is listed for either.

**Hypothesis B — The fluorophosphate crowns (Glass C):**
Glass C (nd = 1.59319, νd = 67.90) matches OHARA S-FPM3, a **fluorophosphate** crown. Nikon has a history of designating fluorine-containing glasses as "ED" even at moderate Abbe numbers. Three elements use Glass C: L13, L14, and L33 — exactly matching the count. While νd = 67.9 is well below traditional ED territory, fluorophosphate glasses do possess some degree of anomalous partial dispersion (the "FP" in S-FPM denotes fluorophosphate), and Nikon's modern marketing may have relaxed the threshold.

**A third possibility** is that the production lens uses slightly different glasses than the patent embodiment — production substitutions are common, and a glass swap in one or two positions could bring additional elements into ED territory under Nikon's criteria.

The patent text does not use the term "ED" and the identification of the three ED elements is ultimately **not determinable from the patent data alone**. This is noted as an open question.

### 4.3 Anomalous Partial Dispersion — Verified Calculation

For Glass B (nd = 1.85451, νd = 25.15, θgF = 0.6103):

The Schott normal line for the g–F partial dispersion ratio is defined as:

> θgF_normal = 0.6415 − 0.00162 × νd

Substituting:

> θgF_normal = 0.6415 − 0.00162 × 25.15 = 0.6415 − 0.04074 = 0.6008

The anomalous partial dispersion deviation is:

> ΔθgF = θgF − θgF_normal = 0.6103 − 0.6008 = **+0.0095**

This matches the patent's conditional expression (6) value exactly. The positive deviation indicates the glass disperses more at short wavelengths (g-line) relative to its overall dispersion than the normal line predicts. When this glass provides negative power in a cemented doublet with the fluorophosphate crown Glass C (νd = 67.90), the excess short-wavelength dispersion from the flint's negative-power element acts to pull the blue (g-line) focus forward, reducing the secondary spectrum residual that a pair of normal-dispersion glasses would leave uncorrected. This is the complementary approach to using anomalous-dispersion *crowns* (like fluorite or FK51, which have *negative* ΔPgF) — either approach works by breaking the proportional relationship between primary and secondary color that constrains normal-glass achromats.

---

## 5. Element-by-Element Analysis

### 5.1 Group G1 — Front Positive Group (f = +56.05 mm)

G1 is fixed during focusing and provides the primary positive refracting power of the front half of the system. It comprises four elements: one singlet, one cemented doublet, and one singlet.

**L11 — Biconvex positive singlet**
- Surfaces: 1 (R = +1598.64) → 2 (R = −179.47)
- Glass: A (nd = 1.83481, νd = 42.73) — lanthanum dense crown
- Focal length: f ≈ +193 mm (thin-lens)
- Shape: Nearly plano-convex — the front surface is extremely weakly curved (R ≈ 1600 mm, effectively flat). The image-side surface carries nearly all the power. This shape minimizes surface reflections at near-normal incidence on the large front element and reduces the sensitivity to manufacturing tolerances (decentering, tilt) compared to a strongly curved front surface.
- Role: Gentle initial convergence of the incoming beam. The weak front curvature with a high-index glass (nd = 1.83) keeps the marginal ray height modest through the subsequent elements, controlling spherical aberration at the system's entrance.

**L12 — Negative meniscus (cemented to L13)**
- Surfaces: 3 (R = +80.95) → 4 (junction, R = +38.97)
- Glass: B (nd = 1.85451, νd = 25.15, θgF = 0.6103) — high-index flint with anomalous partial dispersion
- Focal length: f ≈ −88 mm (thin-lens)
- Shape: Meniscus, convex toward object. Both surfaces have positive R (centers of curvature on image side), with the rear surface more strongly curved.
- Role: The primary chromatic corrector in G1. This is one of the two elements the patent identifies as satisfying the anomalous-dispersion conditions (4)–(6). Its high dispersion (νd = 25.15) combined with positive anomalous partial dispersion (ΔθgF = +0.0095, above the normal line) allows it to correct both primary and secondary longitudinal chromatic aberration when cemented to the L13 crown element. The positive ΔθgF means this glass disperses *more* at short wavelengths (g-line) than a "normal" glass of the same Abbe number; when providing negative power in a cemented doublet, this excess blue dispersion helps bring the blue focal point closer to the red/green, reducing secondary spectrum. The negative power also partially offsets the strong positive contribution of L13, keeping the Petzval sum under control.

**L13 — Positive meniscus (cemented to L12)**
- Surfaces: 4 (junction, R = +38.97) → 5 (R = +865.58)
- Glass: C (nd = 1.59319, νd = 67.90) — fluorophosphate crown
- Focal length: f ≈ +68.8 mm (thin-lens)
- Shape: Meniscus, convex toward object. The thick (7.07 mm) fluorophosphate element provides the bulk of G1's positive power.
- Role: Primary power carrier for the L12–L13 cemented doublet. The fluorophosphate crown's high Abbe number (67.9) paired with L12's anomalous-dispersion flint creates a well-corrected achromatic doublet with reduced secondary spectrum compared to a conventional glass pairing.

**L14 — Positive meniscus singlet**
- Surfaces: 6 (R = +47.08) → 7 (R = +210.08)
- Glass: C (nd = 1.59319, νd = 67.90) — same fluorophosphate crown as L13
- Focal length: f ≈ +102 mm (thin-lens)
- Shape: Meniscus, convex toward object.
- Role: Additional positive power to bring G1's net focal length to +56.05 mm. The 0.200 mm air space between L13 and L14 (thin but genuine — nd = 1.0, not cemented) provides a degree of freedom for correcting spherical aberration and coma that a single thick element could not achieve, since the refraction at the air-glass boundaries differs from what a cemented interface would produce. Using the same glass as L13 simplifies manufacturing and sourcing.

### 5.2 Group G2 — Negative Focusing Group (f = −49.08 mm)

G2 moves toward the image during close focusing (travel: 18.957 mm at 1:1). It comprises three elements: one singlet and one cemented doublet.

**L21 — Biconcave negative singlet**
- Surfaces: 8 (R = −242.96) → 9 (R = +48.33)
- Glass: D (nd = 1.51860, νd = 69.89) — phosphate crown (FK/PK region)
- Focal length: f ≈ −77.7 mm (thin-lens)
- Shape: Biconcave — both surfaces concave from the perspective of incident light. The rear surface (R = +48.33) is much more strongly curved than the front.
- Role: The leading divergent element of G2. The low-index, high-Abbe-number glass keeps chromatic contributions small — the goal here is primarily to provide negative power (for the telephoto-like compression of the system) without introducing excessive color errors. The thin center (1.1 mm) minimizes weight in this moving group.

**L22 — Negative meniscus (cemented to L23)**
- Surfaces: 10 (R = +122.39) → 11 (junction, R = +28.61)
- Glass: E (nd = 1.72047, νd = 34.71) — lanthanum/titanium flint
- Focal length: f ≈ −51.8 mm (thin-lens)
- Shape: Meniscus, convex toward object. The strongly curved rear junction surface (R = +28.61) creates significant negative power.
- Role: Provides the majority of G2's negative power. The moderate-dispersion lanthanum flint is paired with L23's ultra-high-index material for chromatic balance within the moving group.

**L23 — Positive meniscus (cemented to L22)**
- Surfaces: 11 (junction, R = +28.61) → 12 (R = +44.89)
- Glass: F (nd = 1.94595, νd = 17.98) — ultra-high-index dense flint
- Focal length: f ≈ +83.4 mm (thin-lens)
- Shape: Meniscus, convex toward object.
- Role: Partially compensates L22's negative power while providing chromatic correction within the doublet. The extreme refractive index (nd ≈ 1.946) allows significant surface curvature differences without excessive thickness, and the very low Abbe number (νd ≈ 18) provides strong dispersion that, when properly balanced against L22, controls chromatic variation as G2 moves through its focus travel.

### 5.3 Aperture Stop S

The aperture stop is located in the air space between G2 and G3 (surface 13, R = ∞). It is fixed relative to the image plane during focusing. The stop semi-diameter determines the system's entrance pupil and controls the f-number.

At infinity, the combined air space D12 + D13 = 50.47 mm provides ample room for the stop mechanism. At 1:1, this collapses to 10.77 mm — still sufficient for the iris diaphragm (9 blades, per production specifications), but the tight clearance at maximum magnification explains why the stop must be positioned precisely in this gap.

### 5.4 Group G3 — Positive Focusing Group (f = +52.89 mm)

G3 moves toward the object during close focusing (travel: 20.741 mm at 1:1). It comprises three elements: one singlet and one cemented doublet.

**L31 — Biconvex positive singlet**
- Surfaces: 14 (R = +85.77) → 15 (R = −644.49)
- Glass: A (nd = 1.83481, νd = 42.72) — lanthanum dense crown (same as L11)
- Focal length: f ≈ +90.7 mm (thin-lens)
- Shape: Biconvex, with the front surface carrying most of the power.
- Role: Leading positive element of G3, converging the beam after the stop. The glass choice mirrors G1's L11, suggesting a deliberate symmetry in the chromatic design strategy — G3 effectively mirrors G1's correction philosophy on the image side of the stop.

**L32 — Negative meniscus (cemented to L33)**
- Surfaces: 16 (R = +79.21) → 17 (junction, R = +32.90)
- Glass: B (nd = 1.85451, νd = 25.15, θgF = 0.6103) — high-index flint with anomalous partial dispersion (same as L12)
- Focal length: f ≈ −65.8 mm (thin-lens)
- Shape: Meniscus, convex toward object. Functionally identical glass type and similar curvature ratio to L12.
- Role: The second chromatic corrector identified by the patent as satisfying conditions (17)–(19) for anomalous partial dispersion. It performs the same secondary spectrum correction in G3 that L12 performs in G1. The symmetrical placement of anomalous-dispersion correctors on both sides of the stop is a hallmark of well-corrected macro designs — it ensures that both on-axis and off-axis chromatic behavior remain balanced as the focus groups move.

**L33 — Biconvex positive (cemented to L32)**
- Surfaces: 17 (junction, R = +32.90) → 18 (R = −109.87)
- Glass: C (nd = 1.59319, νd = 67.90) — fluorophosphate crown (same as L13, L14)
- Focal length: f ≈ +42.7 mm (thin-lens)
- Shape: Biconvex — the strongly curved front junction surface provides the bulk of the power.
- Role: The primary power carrier in the L32–L33 cemented doublet, mirroring the L12–L13 pairing in G1. The thick (5.48 mm) fluorophosphate element ensures adequate positive power for G3 while the anomalous-dispersion pairing corrects secondary spectrum.

### 5.5 Group G4 — Rear Negative Group (f = −64.87 mm)

G4 is fixed during focusing and provides the rear negative component of the overall system. The net positive-negative arrangement of front and rear groups keeps the total track length moderate (TL/f = 1.45), though the system is not a true telephoto (which would require TL/f < 1.0). The back focal distance of 16.78 mm just clears the Z-mount's 16 mm flange distance. G4 is the most complex group with 6 elements including three cemented doublets and the sole aspherical surface. Its axial length (DG4 = 44.03 mm) represents 29.5% of the total track — the patent's condition (1) establishes that this ratio (0.20 < DG4/TL < 0.40) is critical for controlling field curvature and coma across the magnification range.

**L41 — Negative meniscus singlet**
- Surfaces: 19 (R = +163.49) → 20 (R = +45.67)
- Glass: G (nd = 1.95375, νd = 32.33) — extreme lanthanum dense crown
- Focal length: f ≈ −66.5 mm (thin-lens)
- Shape: Meniscus, convex toward object. The very high refractive index (nd ≈ 1.954) is the second-highest in the system.
- Role: Initial negative element of G4, beginning the divergence of the beam toward the image plane. The extreme refractive index provides strong surface power from moderate curvatures, keeping the element thin (1.1 mm center thickness) and reducing weight. The lanthanum crown family provides adequate chemical durability despite the extreme index.

**L42 — Negative meniscus (cemented to L43)**
- Surfaces: 21 (R = +85.05) → 22 (junction, R = +23.90)
- Glass: D (nd = 1.51860, νd = 69.89) — phosphate crown (same as L21)
- Focal length: f ≈ −64.1 mm (thin-lens)
- Shape: Meniscus, convex toward object. The strongly curved rear junction (R = +23.90) gives substantial negative power.
- Role: The low-index crown element in the L42–L43 cemented doublet. The pairing with the ultra-high-index L43 provides chromatic correction in the rear group.

**L43 — Positive meniscus (cemented to L42)**
- Surfaces: 22 (junction, R = +23.90) → 23 (R = +29.22)
- Glass: F (nd = 1.94595, νd = 17.98) — ultra-high-index dense flint (same as L23)
- Focal length: f ≈ +138.6 mm (thin-lens)
- Shape: Meniscus, convex toward object. Weak positive power — the closely spaced radii (23.90 and 29.22) mean only a small power differential.
- Role: Chromatic correction partner for L42. The ultra-low Abbe number (17.98) provides strong dispersion to balance L42's crown contribution.

**L44 — Negative meniscus (cemented to L45)**
- Surfaces: 24 (R = +34.94) → 25 (junction, R = +21.67)
- Glass: H (nd = 2.00069, νd = 25.46) — the highest-index glass in the system
- Focal length: f ≈ −57.0 mm (thin-lens)
- Shape: Meniscus, convex toward object.
- Role: A strong negative element that is the probable third "ED" element (see §4.2). The nd ≈ 2.001 refractive index is at the extreme upper limit of commercially available optical glass. The glass code 001255 places it in the dense lanthanum flint region of the glass map, near CDGM H-ZLaF92 (nd = 2.003, νd = 28.3) though not an exact match. The ultra-high index allows strong surface power from moderate curvatures, which is critical for creating tightly coupled positive-negative element pairs (here with L45) that provide higher-order aberration balancing with manageable element thicknesses. The Petzval contribution of each element scales as 1/(n·f); counter-intuitively, the high refractive index *reduces* the magnitude of L44's individual Petzval contribution compared to what a lower-index glass would give at the same focal length. The advantage of the high index is not more Petzval correction per element, but rather the ability to achieve the required power with gentler curvatures and to form closely coupled doublets whose combined higher-order aberration contributions are well-controlled. The cost of this glass is significant — glasses at nd > 2.0 are among the most expensive catalog types and require careful annealing for homogeneity.

**L45 — Positive meniscus (cemented to L44)**
- Surfaces: 25 (junction, R = +21.67) → 26 (R = +250.89)
- Glass: I (nd = 1.80440, νd = 39.61) — lanthanum dense crown
- Focal length: f ≈ +29.5 mm (thin-lens) — the strongest individual element in the system
- Shape: Meniscus, convex toward object but with a very weakly curved rear surface (R = +250.89, nearly flat). The thick center (8.8 mm) makes this the thickest element in the prescription.
- Role: The dominant positive power element in G4's rear section. Despite G4 being a net-negative group, L45 provides essential positive power to control field curvature. Its strong power (f ≈ +29.5 mm) paired with L44's strong negative power creates a closely spaced positive-negative pair with near-zero net power but significant contributions to Petzval sum correction and higher-order aberration balancing. The large air gap after this element (21.97 mm to L46) provides the separation needed for the aspherical corrector.

**L46 — Negative meniscus with aspherical surface (the sole aspherical element)**
- Surfaces: 27* (R = −26.46, aspherical) → 28 (R = −47.32)
- Glass: J (nd = 1.51680, νd = 64.14) — borosilicate crown (BK7 equivalent; Schott N-BK7 matches nd exactly, OHARA S-BSL7 matches νd exactly)
- Focal length: f ≈ −116.2 mm (thin-lens)
- Shape: Meniscus, concave toward object (both surfaces have negative R). The patent states this is the "most image-side disposed negative lens" (最も像側に配置された負レンズ).
- Role: Field-flattening corrector. The aspherical object-side surface (surface 27*) corrects field curvature and astigmatism as described in §3.2. The use of inexpensive BK7-equivalent glass for the aspherical element is a practical choice — BK7 has well-characterized thermal and mechanical properties that make it suitable for CNC grinding and polishing of aspherical surfaces. (Note: BK7's relatively high glass transition temperature, Tg ≈ 557 °C, makes it less ideal for precision glass molding than lower-Tg moldable glasses; the asphere is more likely produced by direct machining or MRF polishing.) The weak negative power (f ≈ −116 mm) means the element contributes minimally to chromatic aberration, so the low-cost glass is optically appropriate.

---

## 6. Design Symmetry and Correction Strategy

The overall design exhibits a deliberate quasi-symmetry around the aperture stop:

| Property | G1 (Front) | G3 (Rear of stop) |
|----------|------------|-------------------|
| Group power | +56.05 mm | +52.89 mm |
| Leading singlet glass | A (nd = 1.835, νd = 42.7) | A (nd = 1.835, νd = 42.7) |
| Anomalous-dispersion corrector | B (nd = 1.855, νd = 25.15, θgF = 0.6103) | B (identical) |
| Crown partner glass | C (nd = 1.593, νd = 67.9) | C (identical) |

This symmetry is a hallmark of well-corrected designs. By placing matched chromatic corrector pairs on both sides of the stop, the design promotes cancellation of lateral color (chromatic difference of magnification) — the front-group contributions to lateral color are largely balanced by opposing contributions from the rear group. The matched glass types also simplify inventory and reduce supply-chain risk.

Similarly, G2 and G4 share glass types:

| Property | G2 | G4 (partial) |
|----------|-----|-------------|
| Low-index crown | D (nd = 1.519, νd = 69.9) in L21 | D in L42 |
| Ultra-high-index flint | F (nd = 1.946, νd = 18.0) in L23 | F in L43 |

The total glass inventory for the 16-element system is only **10 distinct glass types**, of which several are used multiple times — an economically efficient design.

### Petzval Sum

A thin-lens approximation of the system Petzval sum (Σ 1/(nᵢ·fᵢ) for each element) yields +0.0010 mm⁻¹, corresponding to a Petzval field radius of approximately 988 mm. This is a remarkably flat Petzval field for a 100 mm f/2.8 design — for comparison, an uncorrected singlet at f = 100 mm in BK7 would have a Petzval sum of +0.0066 mm⁻¹ (field radius ≈ 152 mm). The near-zero sum arises from the careful balancing of positive elements (L13, L33, and especially L45 with its strong +29.5 mm focal length) against negative elements (L22, L42, L44) throughout the design. The aspherical surface on L46 then handles residual field curvature and astigmatism that the Petzval correction alone cannot address.

---

## 7. Conditional Expression Summary

All 20 patent conditional expressions were verified computationally against the Example 1 prescription data. Every expression passes within the specified bounds:

| Condition | Expression | Value (Ex.1) | Required Range | Status |
|-----------|-----------|--------------|----------------|--------|
| (1) | DG4/TL | 0.295 | 0.20–0.40 | ✓ |
| (2) | (LnR2+LnR1)/(LnR2−LnR1) | 3.537 | 3.00–5.00 | ✓ |
| (3) | f1/(−f2) | 1.142 | 0.75–1.30 | ✓ |
| (4) | ndM1 | 1.855 | > 1.80 | ✓ |
| (5) | νdM1 | 25.15 | < 26.00 | ✓ |
| (6) | θgFM1 − normal | 0.0095 | < 0.0120 | ✓ |
| (7) | f1/f3 | 1.060 | 0.75–1.20 | ✓ |
| (8) | −β | 1.00 | > 0.45 | ✓ |
| (9) | β2/β3 | 54.06 | 35.0–350.0 | ✓ |
| (10) | β3/β2 | 0.018 | 0.005–0.035 | ✓ |
| (11) | {β2+(1/β2)}⁻² | 0.015 | < 0.10 | ✓ |
| (12) | {β3+(1/β3)}⁻² | 0.022 | < 0.10 | ✓ |
| (13) | Bf/TL | 0.112 | 0.05–0.35 | ✓ |
| (14) | Bf/f | 0.163 | 0.10–0.50 | ✓ |
| (15) | L1S/SLn | 0.649 | 0.50–1.00 | ✓ |
| (16) | Mf2/Mf3 | 0.914 | 0.70–1.10 | ✓ |
| (17) | ndM3 | 1.855 | > 1.80 | ✓ |
| (18) | νdM3 | 25.15 | < 26.00 | ✓ |
| (19) | θgFM3 − normal | 0.0095 | < 0.0120 | ✓ |
| (20) | (L1R2+L1R1)/(L1R2−L1R1) | −0.798 | < 0.10 | ✓ |

The values were verified independently using a paraxial ray trace and direct calculation in Python. The computed EFL (102.86 mm), BFD (16.78 mm), and all four group focal lengths match the patent's stated values exactly, confirming correct transcription of the prescription data.

**Note on conditions (13) and (14):** Computing Bf/TL and Bf/f directly from the prescription values (Bf = 16.78, TL = 149.38, f = 102.86) gives 0.112 and 0.163, respectively — slightly below the patent's listed conditional values of 0.116 and 0.168. The discrepancy implies the patent uses an air-equivalent back focal distance Bf ≈ 17.3 mm for the conditional expressions, which would account for the sensor cover glass thickness (approximately 0.5 mm of additional air-equivalent path). This is a standard practice in Japanese optical patents where the "air-equivalent Bf" includes correction for the cover glass filter stack.

---

## 8. Summary Observations

1. **This is a modern, computationally optimized macro design** that uses inner focusing of two groups (G2 image-ward, G3 object-ward) to maintain aberration correction from infinity to 1:1 magnification. The counter-directional movement is the key innovation enabling the "multi-focus system" that Nikon highlights for chromatic aberration suppression.

2. **The chromatic correction strategy relies on anomalous-dispersion high-index flint glasses** (Glass B, nd = 1.855, νd = 25.15, ΔθgF = +0.0095) rather than traditional ED crown glasses. These are placed symmetrically in cemented doublets with fluorophosphate crowns (Glass C) on both sides of the aperture stop — one pair in G1, one in G3. The positive anomalous partial dispersion of the flint element, when providing negative power, reduces secondary spectrum by the same mechanism (breaking the proportional partial-dispersion relationship) that ED crowns achieve from the positive-power side.

3. **The sole aspherical surface** (surface 27, L46) is located at the extreme rear of the system on an inexpensive BK7-equivalent element, where it corrects field curvature and astigmatism. This is a cost-effective choice — a single aspherical surface on a well-characterized, easily machined glass achieves what would otherwise require 2–3 additional spherical elements.

4. **The glass palette is aggressive in refractive index.** Three glass types exceed nd = 1.94, including one at nd ≈ 2.001 (L44). These ultra-high-index glasses allow the designer to create strong positive-negative element pairs with moderate curvatures and manageable thicknesses — essential for higher-order aberration balancing in a fast macro design covering a 43.4 mm image circle. The thin-lens Petzval sum of the complete system is approximately +0.001 mm⁻¹ (field radius ≈ 988 mm), indicating exceptional field flatness achieved through careful power distribution across 16 elements.

5. **Nikon's "3 ED elements" marketing claim** cannot be straightforwardly resolved from the patent data. No glass in the prescription has the high Abbe number (νd > 80) traditionally associated with Nikon's ED designation. The most likely candidates are either the three fluorophosphate crown elements (L13, L14, L33, Glass C with νd = 67.9) under a relaxed ED definition, or the two patent-flagged anomalous-dispersion flints (L12, L32, Glass B with ΔθgF = +0.0095) plus one additional high-index glass (L44 or L23/L43). The patent does not use the term "ED," and the question remains open.

---

## Sources

- WO 2022/097401 A1, "Optical System, Optical Apparatus, and Method for Manufacturing Optical System," Nikon Corporation, inventor Kuribayashi Tomonori, published May 12, 2022. Example 1 (Table 1), [0077], [0090], [0095]–[0103].
- Nikon official specifications: NIKKOR Z MC 105mm f/2.8 VR S (16 elements / 11 groups, 1 aspherical lens element, 3 ED elements). Source: imaging.nikon.com and nikonusa.com product pages.
- Photons to Photos optical bench data (cited via photomacrography.net forum, topic 44929) confirming f = 102.86 mm at infinity, f ≈ 70.46 mm at 1:2, f ≈ 49.28 mm at 1:1, and working distance ≈ 138 mm at 1:1.
- photomacrography.net forum discussion (topic 44929) noting the absence of traditional high-νd ED glasses in the patent prescription.
- OHARA Inc. optical glass catalog (May 2023 edition) and refractiveindex.info database for glass identification.
- CDGM optical glass catalog (Zemax edition, June 2022) consulted for ultra-high-index glass matches.
- Numerical verification performed via paraxial ray trace in Python (computed EFL = 102.86 mm, BFD = 16.78 mm, all four group focal lengths and 20 conditional expressions independently verified).
