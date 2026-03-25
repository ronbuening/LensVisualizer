# Nikon AF Nikkor 85mm f/1.4D IF — Optical Design Analysis

## US Patent 5,640,277 · Example 2 (Production Design)

**Patent:** US 5,640,277 · Filed Dec 27, 1994 · Granted Jun 17, 1997
**Inventor:** Koichi Ohshita (大下浩一)
**Assignee:** Nikon Corporation, Tokyo, Japan
**Japanese Priority:** JP 5-353455, filed Dec 28, 1993
**Production Lens:** Nikon AF Nikkor 85mm f/1.4D IF (released December 1995, in production 1995–2010)

---

## 1. Overview and Identification

The Nikon AF Nikkor 85mm f/1.4D IF is covered by US Patent 5,640,277, which presents eight numerical examples of a three-group inner-focus design for a large-aperture medium telephoto lens. The **second embodiment** (Example 2) matches the production lens based on the following convergent criteria:

- **Element count:** The production lens is specified by Nikon as 9 elements in 8 groups. Examples 1, 3–5, 7, and 8 use 8 elements in 7 groups. Only Examples 2 and 6 have 9 elements. Example 6 uses a cemented doublet for L1 (negative + positive cemented pair), while Example 2 splits L1 into two separate positive meniscus elements — a configuration consistent with the production cross-section diagram published by Nikon.
- **Focal length and f-number:** f = 85.00 mm, FN = 1.43 (the patent's f/1.43 reflects the as-designed maximum aperture; the nominal f/1.4 is the marketed specification).
- **Back focal distance:** Bf = 38.12 mm, consistent with a Nikon F-mount SLR requiring the rear element to extend into the mirror box.
- **Designer match:** Koichi Ohshita is named both in the patent and in Nikon's own historical account (Nikkor — Thousand and One Nights No. 41), which confirms him as the optical designer.

The lens was developed between early summer 1992 and spring 1993, with trial production beginning in spring 1994 and mass production in winter 1995. It was released in December 1995.

---

## 2. Design Architecture

The lens comprises three groups, all with positive refractive power, arranged in a modified Gauss-type configuration:

| Group | Patent Name | Elements | Function |
|-------|------------|----------|----------|
| G1 | 1st lens unit | L1a, L1b, L2, L3 (4 elements) | Fixed front converter group — converges the ray bundle while suppressing spherical aberration |
| G2 | 2nd lens unit | L4, L5, Stop, L6 (cemented), L7 (5 elements) | Movable focusing group — Tessar-type master lens with aperture stop |
| G3 | 3rd lens unit | L8 (1 element) | Fixed rear compensator — cancels aberration variation during focusing |

**Total: 9 elements / 8 groups** (the cemented doublet L6 counts as one group).

This three-group power distribution — where G1 and G3 remain stationary while only G2 translates along the optical axis — is the key innovation of the patent. Unlike conventional rear-focus systems that use only two groups (G1 fixed, G2 movable), the addition of G3 behind the movable group provides a mechanism to cancel the aberration degradation that would otherwise occur at close focus distances. The patent describes this as follows: when focusing to a near object, the marginal ray height in G2 increases (undercorrecting spherical aberration), but the corresponding marginal ray height in G3 *decreases*, producing an opposing correction that stabilizes performance across the focus range. The same cancellation operates on the chief ray heights for field curvature and astigmatism.

### Aspherical Surfaces

**There are no aspherical surfaces in this design.** All 20 optical surfaces are spherical. This is confirmed by the absence of any aspherical coefficient table in the patent for any of the eight numerical examples, and is consistent with the production era (1993–1995 design) and the all-spherical Gauss-type heritage of the lens.

---

## 3. Focus Mechanism

The lens uses **inner focusing (IF)**: only the G2 group (L4 through L7, five elements including the aperture stop) translates forward along the optical axis to focus from infinity to the minimum focus distance.

| Parameter | Infinity Focus | Close Focus (β = −0.1) |
|-----------|---------------|----------------------|
| G1–G2 air gap (d8) | 17.799 mm | 7.455 mm |
| G2–G3 air gap (d18) | 1.200 mm | 11.544 mm |
| G2 forward travel | — | 10.344 mm |
| System EFL | 85.000 mm | 80.396 mm |
| Paraxial BFL (collimated input) | 38.120 mm | 30.080 mm |
| Physical gap: last surface to image plane | 38.120 mm | 38.120 mm (fixed) |
| Image magnification β | 0 (infinity) | −0.100 (1:10) |

The total optical track from the front vertex to the image plane remains constant at 118.12 mm regardless of focus position, since G1 and G3 are fixed and G2 merely translates within the barrel. The 10.34 mm G2 travel yields a close-focus magnification of 1:10 (β = −0.1) in the patent's design evaluation. Nikon's production specification lists a minimum focus distance of 0.85 m (from the film plane) with a maximum reproduction ratio of 0.11× — slightly beyond the patent's 0.10× design point. This minor discrepancy is normal: the patent's close-focus data represents a specific design evaluation conjugate, while the production lens's mechanical focus travel extends slightly further. Additionally, the telephoto power distribution places the front principal plane ahead of the front vertex, which reduces the actual subject-to-film-plane distance below what a thin-lens conjugate calculation would predict.

The telephoto ratio of 1.39 (total track / EFL = 118.12 / 85.00) places this lens squarely in the mild telephoto category — not strongly telephoto, but enough to keep the physical length reasonable given the large f/1.4 aperture.

---

## 4. Optical Prescription

### 4.1 Surface Data

The complete surface prescription from Example 2, with the patent's surface numbering:

| Surface | R (mm) | d (mm) | nd | νd | Element |
|---------|--------|--------|------|------|---------|
| 1 | 82.1305 | 4.600 | 1.60300 | 65.42 | L1a front |
| 2 | 142.2969 | 0.100 | 1.0 (air) | — | L1a rear → air |
| 3 | 50.1028 | 9.600 | 1.59319 | 67.87 | L1b front |
| 4 | 180.9466 | 0.100 | 1.0 (air) | — | L1b rear → air |
| 5 | 43.2464 | 7.000 | 1.79631 | 40.90 | L2 front |
| 6 | 50.6525 | 4.000 | 1.0 (air) | — | L2 rear → air |
| 7 | 85.0525 | 2.400 | 1.71736 | 29.46 | L3 front |
| 8 | 29.0685 | **17.799** | 1.0 (air) | — | L3 rear → air (variable) |
| 9 | 39.2512 | 4.800 | 1.80454 | 39.61 | L4 front |
| 10 | 198.2455 | 2.500 | 1.0 (air) | — | L4 rear → air |
| 11 | −126.0081 | 2.000 | 1.67270 | 32.17 | L5 front |
| 12 | 36.9324 | 4.000 | 1.0 (air) | — | L5 rear → air |
| 13 | ∞ (flat) | 4.000 | 1.0 (air) | — | **Aperture stop** |
| 14 | −36.6878 | 1.800 | 1.68893 | 31.08 | L6 neg front |
| 15 | 158.8503 | 8.000 | 1.86994 | 39.82 | L6 cemented junction → L6 pos |
| 16 | −46.1165 | 0.100 | 1.0 (air) | — | L6 pos rear → air |
| 17 | 84.9089 | 4.000 | 1.78797 | 47.47 | L7 front |
| 18 | −151.1095 | **1.200** | 1.0 (air) | — | L7 rear → air (variable) |
| 19 | −177.6658 | 2.000 | 1.74810 | 52.30 | L8 front |
| 20 | −150.9493 | 38.120 | 1.0 (air) | — | L8 rear → image |

### 4.2 Group Focal Lengths

Computed via paraxial ray trace (all values verified against patent-stated condition values):

| Group/Sub-group | Focal Length (mm) | Power Ratio (÷ f) | Patent Value |
|-----------------|-------------------|-------------------|-------------|
| G1 (entire front group) | 194.63 | F1/f = 2.290 | 2.290 ✓ |
| G2 (entire middle group) | 72.39 | F2/f = 0.852 | 0.852 ✓ |
| G3 (rear element L8) | 1300.2 | F3/f = 15.296 | 15.296 ✓ |
| G21 (front sub-unit: L4+L5) | −228.84 | Fa/f = −2.692 | −2.692 ✓ |
| G22 (rear sub-unit: L6+L7) | 53.29 | Fb/f = 0.627 | 0.627 ✓ |

The sign of Fa is notable: the front sub-unit of G2 (L4 positive + L5 negative) has a *net negative* focal length. Combined with the strongly positive rear sub-unit G22, this produces the overall positive power of G2. This internal negative/positive power distribution within G2 — resembling a Tessar-type arrangement — gives the designer leverage to control spherical aberration variation during focusing.

---

## 5. Glass Identification and Element Analysis

### 5.1 Glass Identification Table

Glass types were identified by matching patent nd/νd values against known optical glass catalogs (OHARA, SCHOTT, HOYA). The patent does not explicitly name glass types — identifications are inferential, based on the closest catalog match. Where an exact match exists (Δnd = 0, Δνd < 0.1), the identification is high-confidence. Where discrepancies exist, they are noted.

| Elem | Patent Name | nd | νd | Best Catalog Match | Confidence | Notes |
|------|------------|------|------|-------------------|------------|-------|
| 1 | L1a | 1.60300 | 65.42 | **OHARA S-PHM53** (nd=1.60300, νd=65.44) | High | Phosphate crown. Δνd=0.02 |
| 2 | L1b | 1.59319 | 67.87 | Fluorophosphate crown (glass code 593679) | Low | No exact current-catalog match. Nearest: OHARA S-FPM2 (nd=1.59522, νd=67.73, Δnd=0.002). Likely a 1990s-era fluorophosphate crown, now discontinued or redesignated. Specific type uncertain |
| 3 | L2 | 1.79631 | 40.90 | **HOYA NBFD15 / SCHOTT LaSF3** (nd=1.79631, νd=40.90) | Exact | Dense lanthanum flint (glass code 796409). SCHOTT LaSF3 is now discontinued; HOYA NBFD15 remains in production. No current OHARA exact equivalent |
| 4 | L3 | 1.71736 | 29.46 | **SCHOTT SF1 / OHARA S-TIH1** (nd=1.71736, νd=29.51) | High | Dense flint. Exact nd match |
| 5 | L4 | 1.80454 | 39.61 | **HOYA NBFD3** (nd=1.80454, νd=39.61) | Exact | Dense niobium flint. OHARA S-LAH63 is near-equivalent |
| 6 | L5 | 1.67270 | 32.17 | **HOYA E-FD5 / OHARA S-TIM25** (nd=1.67270, νd=32.17) | Exact | Flint glass |
| 7 | L6 neg | 1.68893 | 31.08 | **OHARA S-TIM28** (nd=1.68893, νd=31.08) | Exact | Flint glass |
| 8 | L6 pos | 1.86994 | 39.82 | **HOYA TAFD30** (nd=1.86994, νd=39.82) | Exact | Very dense lanthanum flint. Expensive high-index glass |
| 9 | L7 | 1.78797 | 47.47 | **SCHOTT LaFN21** (nd=1.78797, νd=47.47) | Exact | Lanthanum flint. Modern equivalent: SCHOTT N-LAF21 |
| 10 | L8 | 1.74810 | 52.30 | **OHARA S-LAM66** (nd=1.74810, νd=52.30) | Exact | Lanthanum crown (anomalous partial dispersion). This is one of the "expensive glass" types referenced in Nikon's historical account |

Eight of the ten elements have exact catalog matches (Δnd = 0, Δνd < 0.1). Element L1a has a near-exact match (OHARA S-PHM53, Δνd = 0.02). Element L1b is the only element without a confident identification — its nd/νd combination falls in the fluorophosphate crown region of the glass map but does not match any current catalog entry precisely. Both L1a and L1b use relatively low-dispersion crown glasses in the front group to provide chromatic correction, while the remaining elements use progressively higher-index, higher-dispersion materials toward the center of the system — a classical dispersion-balancing strategy.

### 5.2 Element-by-Element Optical Analysis

#### Element 1 — L1a (Positive Meniscus, convex toward object)
- **Glass:** Phosphate crown (S-PHM53 type), nd=1.603, νd=65.4
- **Thin-lens FL:** +322 mm (weakly positive)
- **Shape:** Meniscus with both surfaces convex toward object (R1=82.13, R2=142.30)
- **Role:** First element of the front converter group. Its gentle positive power begins converging the large-diameter ray bundle from the 85mm entrance pupil while introducing minimal spherical aberration. The low-dispersion glass (νd=65.4) helps control axial chromatic aberration in the front group. The patent notes that the large radius of the front surface (r1/f = 0.966) is deliberately chosen to balance annular spherical aberration — the largest r1/f ratio of any example in the patent, indicating the designer prioritized smooth out-of-focus rendering over aggressive correction.
- **Group membership:** G1, part of the L1 compound element

#### Element 2 — L1b (Positive Meniscus, convex toward object)
- **Glass:** Fluorophosphate crown (glass code 593679), nd=1.593, νd=67.9. Specific glass type uncertain — no exact current-catalog match; nearest is OHARA S-FPM2 (Δnd=0.002). Likely a 1990s fluorophosphate crown that has since been discontinued or redesignated.
- **Thin-lens FL:** +117 mm (moderately positive)
- **Shape:** Meniscus with both surfaces convex toward object (R3=50.10, R4=180.95), significantly steeper front curvature than L1a
- **Role:** This is the primary power-carrying element of G1's front section. Its steeper curvatures do the bulk of the convergence. The very low dispersion (νd=67.9) ensures this element contributes minimally to chromatic aberration. Together with L1a, these two elements form a split positive component that distributes the refraction over four surfaces rather than two, reducing the spherical aberration contribution at each surface — essential for maintaining performance at f/1.4.
- **Group membership:** G1, part of the L1 compound element
- **Dispersion note:** The Abbe number difference v1−v2 = 65.42−40.90 = 24.52 (patent condition 15) is computed between L1a and L2, not within the L1 compound, confirming that the chromatic correction strategy uses the low-dispersion front pair against the higher-dispersion L2.

#### Element 3 — L2 (Positive Meniscus, convex toward object)
- **Glass:** Dense lanthanum flint (LaSF3 / NBFD15 type), nd=1.796, νd=40.9
- **Thin-lens FL:** +371 mm (weakly positive)
- **Shape:** Meniscus with both surfaces convex toward object (R5=43.25, R6=50.65), deeply curved
- **Role:** Completes the positive power of G1. Its high refractive index (1.796) allows strong curvatures with less spherical aberration than would be possible with lower-index glass. The higher dispersion (νd=40.9) relative to L1a/L1b provides the Abbe number differential needed for lateral chromatic aberration and chromatic astigmatism correction within G1 (condition 15). The patent states that r3/f = 0.509, and this value — combined with r1/f — must satisfy conditions (6) and (12) simultaneously to control annular spherical aberration.
- **Group membership:** G1

#### Element 4 — L3 (Negative Meniscus, convex toward object)
- **Glass:** Dense flint (SF1 / S-TIH1 type), nd=1.717, νd=29.5
- **Thin-lens FL:** −61.6 mm (strongly negative)
- **Shape:** Meniscus with convex surface toward object (R7=85.05, R8=29.07), the rear surface steeply concave
- **Role:** This is the most strongly powered element in G1 and serves as the diverging component of the front group's tele-converter arrangement. Positioned at the rear of G1, it receives the converging beam from L1/L2 and strongly diverges it, reducing the ray height entering G2. This accomplishes two goals: it controls the physical size and movement distance of G2 (the focusing group), and its very high dispersion (νd=29.5) combined with the low-dispersion front elements provides the chromatic balance within G1. The steep rear curvature (R8 = 29.07 mm) is the most extreme radius in the entire front group.
- **Group membership:** G1

#### Element 5 — L4 (Positive Meniscus, convex toward object)
- **Glass:** Dense niobium flint (NBFD3 / S-LAH63 type), nd=1.805, νd=39.6
- **Thin-lens FL:** +60.8 mm (moderately positive)
- **Shape:** Meniscus with convex surface toward object (R9=39.25, R10=198.25)
- **Role:** First element of the focusing group G2 and the front sub-unit G21. Provides the initial positive convergence in the master lens section. Together with the following L5, forms a positive-negative pair that the patent describes as the "front sub-unit G21" with a combined negative focal length (Fa = −228.8 mm). The negative net power of this sub-unit is critical for controlling the variation of spherical aberration during focusing (condition 10). The high-index glass (nd=1.805) minimizes aberration at the steep curvatures.
- **Group membership:** G2, front sub-unit G21

#### Element 6 — L5 (Biconcave Negative)
- **Glass:** Flint (E-FD5 / S-TIM25 type), nd=1.673, νd=32.2
- **Thin-lens FL:** −42.5 mm (strongly negative)
- **Shape:** Biconcave (R11=−126.01, R12=36.93), with the image-side surface much more steeply concaved than the object side
- **Role:** The second element of G21 and the last element before the aperture stop. Its strongly concave image-side surface (facing the stop) is a hallmark of the modified Gauss-type design. The patent specifically discusses the ratio r10/r9 = −0.293 (condition 7), which governs the balance between upper and lower coma aberration at middle field angles. The stop placement immediately after L5 (rather than after L4 or L6) was chosen because it places L5 and the negative element of L6 symmetrically about the stop — optimizing coma correction while preserving reasonable vignetting performance. The moderate-index flint glass provides the necessary dispersion for chromatic balancing within G2.
- **Group membership:** G2, front sub-unit G21

#### Aperture Stop (Surface 13)
- Located between L5 and L6, in the spacing between the front and rear sub-units of G2
- 9-blade rounded diaphragm (from Nikon specifications, not patent)
- Stop position is critical: the patent evaluates three possible positions (after L4, after L5, after L6) and concludes that placement after L5 is optimal for coma correction symmetry
- **Moves with G2** during focusing

#### Elements 7+8 — L6 (Cemented Doublet: Biconcave Negative + Biconvex Positive)
- **L6 negative glass:** Flint (S-TIM28 type), nd=1.689, νd=31.1
- **L6 positive glass:** Very dense lanthanum flint (TAFD30 type), nd=1.870, νd=39.8
- **Individual thin-lens FLs:** L6 neg = −43.3 mm, L6 pos = +41.1 mm
- **Combined cemented doublet FL:** +328 mm (thick-lens paraxial trace; weakly positive). Note: a thin-lens approximation gives +816 mm, but this substantially underestimates the combined power because the doublet is 9.8 mm thick — the thick-lens value is the appropriate one.
- **Shape:** L6 neg is biconcave (R14=−36.69, junction R15=158.85); L6 pos is biconvex (junction R15=158.85, R16=−46.12)
- **Role:** This cemented doublet is the chromatic corrector and field-flattening element of the rear sub-unit G22. The two individual elements have nearly equal but opposite powers (−43.3 vs +41.1 mm), so their combined power is much weaker than either alone — the primary purpose of the cemented pair is chromatic aberration correction and Petzval sum control, not power contribution. The very high index of the positive element (nd=1.870, condition 16: n7 ≥ 1.84) is essential for Petzval sum control; without it, the field curvature would be unacceptably large for a fast f/1.4 system. The patent describes conditions (13) and (14) governing the doublet's image-side radius and cemented surface curvature in relation to astigmatism and Rand-ray chromatic aberration. The strongly concave front surface (R14=−36.69) faces the aperture stop, creating the characteristic symmetrical concave-surface pair (L5 rear / L6 front) that defines the modified Gauss structure.
- **Group membership:** G2, rear sub-unit G22

#### Element 9 — L7 (Biconvex Positive)
- **Glass:** Lanthanum flint (LaFN21 / N-LAF21 type), nd=1.788, νd=47.5
- **Thin-lens FL:** +69.0 mm (positive)
- **Shape:** Biconvex (R17=84.91, R18=−151.11)
- **Role:** The final element of G2 and the rear sub-unit G22. Provides the dominant positive power of G22 (Fb/f = 0.627), which in turn provides the back focus and convergence needed to form the image. The Abbe number differential between L7 and L4 (v8−v4 = 47.47−39.61 = 7.86, condition 17) ensures that the higher-dispersion glass is used near the stop (L4, L5, L6) and the lower-dispersion glass at the periphery (L7), maintaining chromatic balance.
- **Group membership:** G2, rear sub-unit G22

#### Element 10 — L8 (Positive Meniscus, concave toward object)
- **Glass:** Lanthanum crown (S-LAM66 type), nd=1.748, νd=52.3
- **Thin-lens FL:** +1342 mm; thick-lens FL: +1300 mm (very weakly positive, F3/f = 15.3)
- **Shape:** Meniscus with both surfaces concave toward object (R19=−177.67, R20=−150.95)
- **Role:** The fixed rear compensator group G3. This single weak-positive element is the patent's principal innovation. Its deliberate weakness is by design (condition 3: 9 < F3/f < 20) — if G3 were too strong, it would overcorrect the spherical aberration at close focus and undercorrect the field curvature; too weak and it would be ineffective. The meniscus shape is governed by condition (18): r17/r16 = 0.850 (where r16 and r17 are the object-side and image-side radii of L8, respectively). If this shape ratio falls outside the specified range (0.3 < r17/r16 < 0.9), the balance between spherical aberration and field curvature during focusing becomes untenable. As a fixed element behind the moving G2, L8 exploits the fact that when G2 moves forward for close focus, the marginal ray height in G3 decreases, producing an aberration correction that opposes the degradation in G2. Similarly, the chief ray height in G3 increases at close focus, compensating for the reduced chief ray height in G1. The Nikon "Thousand and One Nights" article describes this element's role as "the touch of a master craftsman specifically intended to curb fluctuations at close range due to upper coma aberration and field curvature." The lanthanum crown glass (νd=52.3) keeps this element's chromatic contribution minimal.
- **Group membership:** G3 (fixed)

---

## 6. Patent Condition Values — Verified

All 18 conditional expressions specified in the patent were verified by independent paraxial ray trace computation. Every value matches to the precision stated in the patent:

| Condition | Expression | Computed | Patent | Status |
|-----------|-----------|----------|--------|--------|
| (1) | F1/f | 2.290 | 2.290 | ✓ |
| (2) | F2/f | 0.852 | 0.852 | ✓ |
| (3) | F3/f | 15.296 | 15.296 | ✓ |
| (4) | D1/f | 0.327 | 0.327 | ✓ |
| (5) | S1/f | 0.209 | 0.209 | ✓ |
| (6) | r1/f | 0.966 | 0.966 | ✓ |
| (7) | r10/r9 | −0.293 | −0.293 | ✓ |
| (8) | Da/f | 0.109 | 0.109 | ✓ |
| (9) | Db/f | 0.094 | 0.094 | ✓ |
| (10) | Fa/f | −2.692 | −2.692 | ✓ |
| (11) | Fb/f | 0.627 | 0.627 | ✓ |
| (12) | r3/f | 0.509 | 0.509 | ✓ |
| (13) | r13/r11 | 1.257 | 1.257 | ✓ |
| (14) | f/r12 | 0.535 | 0.535 | ✓ |
| (15) | v1−v2 | 24.52 | 24.52 | ✓ |
| (16) | n7 | 1.870 | 1.870 | ✓ |
| (17) | v8−v4 | 7.86 | 7.86 | ✓ |
| (18) | r17/r16 | 0.850 | 0.850 | ✓ |

Note on condition (15): In Example 2, L1 is described as "a combination of two positive meniscus lens elements L1" — the patent treats this as a single *component* despite comprising two physical elements (L1a and L1b). The condition variable "v1" takes the Abbe number of this first component's object-side sub-element (L1a, νd = 65.42), and "v2" refers to L2 (νd = 40.90) as the "second positive lens element in the 1st lens unit from the object side." If v2 were instead assigned to L1b (νd = 67.87), the resulting v1−v2 = −2.45 would not match the patent's stated 24.52 — confirming that the patent counts L1a+L1b as one component and L2 as the second. The patent further notes that when L1 is a cemented doublet (as in Example 6), v1 uses a reduced Abbe number formula v1 = 4·vx·vy/(5·vx−vy); Example 2's L1 is not cemented, so this formula does not apply here.

---

## 7. Design Philosophy and Aberration Strategy

The Nikon Thousand and One Nights account reveals that Ohshita did not design this lens simply for maximum sharpness. His stated goal was to find the optimal aberration balance for portrait photography — specifically, to achieve sharp focus in the image plane while producing smooth, attractive out-of-focus rendering (bokeh) in both the foreground and background.

The patent's aberration plots (Figs. 5 and 6 for Example 2) show the following characteristics at infinity focus (f/1.4):

- **Spherical aberration:** Small and well-corrected, with the marginal ray height H = 29.8. The d-line and g-line curves are nearly coincident near the axis, indicating good chromatic correction of spherical aberration.
- **Field curvature / astigmatism:** The sagittal and tangential surfaces are well-balanced out to Y = 21.6 mm (the full image diagonal). There is a small residual separation, but both surfaces remain within ±0.3 mm.
- **Distortion:** Less than −0.6% across the full field — negligible for a portrait lens.
- **Lateral chromatic aberration:** Well-corrected, with the g-line error remaining within ±0.03 mm.
- **Transverse aberration plots:** Show the characteristic lower coma flare that Ohshita deliberately preserved to produce the lens's signature smooth background bokeh.

At close focus (β = −0.10), the aberration plots show that the spherical aberration and field curvature remain well-controlled with only modest degradation — the patent notes that any slight undercorrection at close focus is deliberate, as it preserves favorable background rendering.

---

## 8. Summary Specifications

| Parameter | Value |
|-----------|-------|
| Focal length | 85.0 mm |
| Maximum aperture | f/1.4 (designed at f/1.43) |
| Minimum aperture | f/16 |
| Optical formula | 9 elements / 8 groups |
| Aspherical surfaces | None |
| ED / special glass | No ED, fluorite, or Super ED elements |
| Anomalous partial dispersion | Present in L8 glass (S-LAM66, νd=52.3) but not optically significant — L8's very weak power (F3/f = 15.3) makes its chromatic contribution negligible |
| Focus type | Inner focus (G2 only moves) |
| Focus travel | 10.34 mm forward |
| Minimum focus distance | 0.85 m (from film plane) |
| Maximum reproduction ratio | 0.11× (approximately 1:9) |
| Angle of view | 28°30' (full diagonal, 35mm format) |
| Back focal distance | 38.12 mm |
| Total optical track | 118.12 mm |
| Telephoto ratio | 1.39 |
| Filter size | 77 mm |
| Diaphragm | 9 blades, rounded |
| Mount | Nikon F (AI-S compatible) |
| Weight | 550 g |
| Production period | December 1995 – 2010 |

---

## 9. Sources

1. US Patent 5,640,277 — "Large Aperture Medium Telephoto Lens System," Koichi Ohshita, Nikon Corporation. Filed Dec 27, 1994. Example 2.
2. Japanese Patent Application JP 5-353455, priority date Dec 28, 1993.
3. Nikon Corporation — "NIKKOR – The Thousand and One Nights No. 41: Ai AF Nikkor 85mm F1.4D (IF)," by Haruo Sato. Published on Nikon Imaging website.
4. Nikon USA — AF NIKKOR 85mm f/1.4D IF product specifications page.
5. OHARA optical glass catalog (2023 edition) — glass identification reference.
6. HOYA optical glass catalog — glass identification reference.
7. SCHOTT optical glass catalog — glass identification reference.
