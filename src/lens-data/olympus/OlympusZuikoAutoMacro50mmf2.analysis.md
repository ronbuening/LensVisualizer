# Olympus Zuiko Auto-Macro 50mm f/2 — Optical Analysis

**Patent:** US 4,708,445 — *Large Aperture Ratio Photographic Lens System*
**Example:** Embodiment 6 (Figures 29–33)
**Inventor:** Hisashi Goto (Olympus Optical Co., Ltd.)
**Filed:** October 29, 1984 (Japanese priority: November 7, 1983)
**Granted:** November 24, 1987

---

## 1. Overview

The Olympus Zuiko Auto-Macro 50mm f/2 is a nine-element, seven-group macro lens designed for the Olympus OM bayonet mount. Introduced in 1985 and produced until 2002, it was marketed by Olympus as the fastest macro lens on the market at the time of its release — though the Kern-Macro-Switar 50mm f/1.9 for the Alpa system, produced in small numbers, was marginally faster. The f/2 aperture was a notable achievement for a 50mm macro design intended to deliver high image quality from infinity to 1:2 magnification. The lens employs an all-spherical optical design with a floating-element focus mechanism based on variable group separation.

Embodiment 6 of US 4,708,445 matches the production lens in element count (9 elements / 7 groups), optical configuration, and performance targets. The patent prescription is normalized to f = 1; scaling by 50.016× yields the 50 mm production focal length.

### Production Specifications (Olympus)

| Parameter | Value |
|---|---|
| Focal length | 50 mm |
| Maximum aperture | f/2 |
| Minimum aperture | f/16 |
| Angle of view | 47° (diagonal) |
| Optical construction | 9 elements / 7 groups |
| Close focus | 0.24 m (film plane to subject) |
| Maximum magnification | 1:2 (×0.5); 1:1 with 25 mm extension tube |
| Floating elements | Yes |
| Iris blades | 6 |
| Filter size | 55 mm |
| Mount | Olympus OM bayonet (46.0 mm flange distance) |
| Weight | 320 g |
| Length | 55 mm |
| Coating | Multi-coated |

---

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All sixteen optical surfaces (r₁ through r₁₆) are spherical. The patent text makes no mention of aspherical coefficients for any embodiment, and the prescription tables contain only radii of curvature, axial thicknesses, and glass indices — no conic constants or polynomial terms appear anywhere in the document.

This is consistent with the era and with Olympus's manufacturing approach for OM-system lenses in the 1980s. Precision glass molding for aspherical elements was not yet widespread in production photographic lenses, and the modified Gauss architecture employed here achieves its aberration correction through the interplay of nine carefully shaped spherical elements, appropriate glass selection, and the floating-element focus mechanism.

---

## 3. Optical Architecture

The patent describes the lens as a three-section design: a first lens group (positive), a second lens group (negative), and a third lens group (positive, with a negative element in the rearmost position). The aperture stop sits between the second and third groups. In Olympus's production terminology, these three functional sections decompose into seven air-separated groups.

### Group and Element Map

```
              Patent Group I              Patent Group II       Patent Group III
              (positive)                  (negative)            (positive)
         ┌─────────────────────┐    ┌─────────────────────┐  ┌────────────────────────────────────────┐
         │  L1        L2       │    │  L3        L4       │  │ L5+L6      L7       L8+L9              │
         │  (−)       (+)      │    │  (+)       (−)      │  │ cement     (+)      cement              │
         │  Grp 1    Grp 2     │    │  Grp 3    Grp 4     │  │ Grp 5     Grp 6    Grp 7               │
         └─────────────────────┘    └─────────────────────┘  └────────────────────────────────────────┘
                              ↑ d₄ (variable)          ↑ d₈ (stop gap)
                              │ focusing gap           │
```

The patent's three functional groups correspond to classical modified-Gauss zones:

- **Patent Group I** (L1 + L2) — a weak positive doublet (f_I = +157.7 mm) in front. Its deliberately weak power ensures that marginal rays remain nearly parallel even at high magnification, which is the key to preserving spherical aberration correction during close focusing.

- **Patent Group II** (L3 + L4) — a weak negative pair (f_II = −328.0 mm) providing the diverging action needed for a long back focal distance in a compact package. Together with Group I, the combined front system has f_F = +211.3 mm, which is very weak relative to the 50 mm system focal length — exactly as the patent requires for stable macro performance.

- **Patent Group III** (L5 through L9) — the powerhouse of the system (f_III = +46.1 mm), carrying nearly all the system's converging power. This group contains two cemented doublets and a positive meniscus singlet, providing strong positive power while simultaneously correcting chromatic aberration, Petzval curvature, and coma across the entire magnification range.

---

## 4. Element-by-Element Description

### 4.1 L1 — Negative Meniscus (convex toward object)

| Parameter | Value |
|---|---|
| Surfaces | r₁ = +1.2060 → r₂ = +0.5894 |
| Center thickness | 0.0278 (norm) → 1.39 mm |
| Glass | nd = 1.60342, νd = 38.01 |
| Catalog match | Schott F5 / HOYA E-F5 / OHARA S-TIM22 (flint) |
| Thick-lens focal length | −97.2 mm |
| Shape | Negative meniscus, both radii positive (concentric-like), convex toward object |

L1 is the front element and serves three purposes. First, its negative power combined with the positive L2 behind it forms an achromatic front group, satisfying the patent's requirement that chromatic aberration of Group I be independently corrected — essential because Group I moves differentially during focusing. Second, the meniscus shape at the entrance of a fast (f/2) system reduces the angle of incidence of marginal rays on the first surface, controlling higher-order spherical aberration. Third, the glass selection (F5, a conventional flint with νd = 38.01) satisfies patent condition (3): ν₁ < 40, which keeps lateral chromatic aberration variation small as the magnification changes.

### 4.2 L2 — Biconvex Positive

| Parameter | Value |
|---|---|
| Surfaces | r₃ = +1.8201 → r₄ = −1.7383 |
| Center thickness | 0.0676 (norm) → 3.38 mm |
| Glass | nd = 1.72916, νd = 54.68 |
| Catalog match | OHARA S-LAL59 / HOYA LACL60 (lanthanum crown) |
| Thick-lens focal length | +61.5 mm |

L2 is a strong biconvex element made of lanthanum crown glass (OHARA S-LAL59, nd = 1.729, νd = 54.68) — a high-index, low-dispersion material that delivers positive power without introducing excessive chromatic aberration. The near-symmetrical radii (|r₃| ≈ |r₄|) help minimize coma from this element. Together, L1 + L2 form the patent's "first lens group" with a combined focal length of f_I = +157.7 mm — deliberately weak so that the marginal ray bundle emerging from Group I remains nearly collimated even when the group is extended for close-focus photography.

### 4.3 L3 — Positive Meniscus (convex toward object)

| Parameter | Value |
|---|---|
| Surfaces | r₅ = +0.4099 → r₆ = +0.7540 |
| Center thickness | 0.1216 (norm) → 6.08 mm |
| Glass | nd = 1.77250, νd = 49.66 |
| Catalog match | HOYA LAC14 (lanthanum crown, 773/497) |
| Thick-lens focal length | +50.4 mm |

L3 is the thickest element in the system, forming the front half of Patent Group II. Despite the group being collectively negative, L3 itself is strongly positive. This is a characteristic feature of Gauss and modified-Gauss designs: the inner positive meniscus works with the adjacent negative element (L4) to create a powerful diverging pair while keeping individual surface curvatures moderate. The high-index glass (nd = 1.773) keeps surface curvatures relatively gentle for the strong power delivered.

### 4.4 L4 — Negative Meniscus (convex toward object)

| Parameter | Value |
|---|---|
| Surfaces | r₇ = +4.9772 → r₈ = +0.3856 |
| Center thickness | 0.0233 (norm) → 1.17 mm |
| Glass | nd = 1.58144, νd = 40.75 |
| Catalog match | 581/408 glass code; HOYA FF5 nearest (Δνd ≈ 0.23); short flint family |
| Thick-lens focal length | −36.0 mm |

L4 is a thin, strongly negative meniscus that dominates Group II's overall negative power. The deeply concave rear surface (r₈ = +0.3856 — a very short radius, steeply curved and facing the stop) is the defining feature of this element. The large air gap d₈ following L4 contains the aperture stop. This configuration — a strongly negative element immediately before the stop — is the hallmark of the Gauss inner doublet. The glass (581/408 code, short flint family) provides moderate dispersion for chromatic correction without excessive Petzval contribution. This glass type does not have an exact match in current catalogs and may have been a 1980s-era HOYA or OHARA type that has since been reformulated.

### 4.5 L5 — Biconcave Negative (cemented with L6)

| Parameter | Value |
|---|---|
| Surfaces | r₉ = −0.4730 → r₁₀ = +4.6709 (junction) |
| Center thickness | 0.0216 (norm) → 1.08 mm |
| Glass | nd = 1.68250, νd = 44.65 |
| Catalog match | 683/447 glass code; no exact modern catalog match; barium/lanthanum flint family |
| Thick-lens focal length | −31.4 mm |

L5 is the negative component of the first cemented doublet in Group III, located immediately behind the stop. Its strongly concave front surface (r₉) faces the stop gap and provides diverging power that, together with the converging L6, forms a meniscus doublet of overall negative power (f = −154.6 mm). The cemented junction at r₁₀ has a very weak curvature (R = 4.67f = 233.6 mm), indicating that the primary purpose of the cementation is chromatic correction via the refractive index step (Δn = 1.72000 − 1.68250 = 0.0375 at the junction) rather than power contribution. The glass (683/447 code) does not have a precise match in current catalogs; it is likely a 1980s-era OHARA or HOYA type that has since been discontinued or reformulated.

### 4.6 L6 — Biconvex Positive (cemented with L5)

| Parameter | Value |
|---|---|
| Surfaces | r₁₀ = +4.6709 (junction) → r₁₁ = −0.7102 |
| Center thickness | 0.0929 (norm) → 4.65 mm |
| Glass | nd = 1.72000, νd = 46.03 |
| Catalog match | 720/460 glass code; no exact modern catalog match; lanthanum crown/flint border |
| Thick-lens focal length | +43.1 mm |

L6 is the positive component of the L5+L6 doublet. With a thick center (4.65 mm) and strongly concave rear surface, it provides most of the positive power in the cemented pair. The lanthanum-containing glass (nd = 1.720, νd = 46.03) sits at the boundary between lanthanum crown and lanthanum flint classifications. The doublet as a whole (f = −154.6 mm, weakly negative) functions primarily as a field-flattening and chromatic correction element in the rear group, rather than a primary power contributor.

### 4.7 L7 — Positive Meniscus (concave toward object)

| Parameter | Value |
|---|---|
| Surfaces | r₁₂ = −1.6505 → r₁₃ = −0.5942 |
| Center thickness | 0.0573 (norm) → 2.87 mm |
| Glass | nd = 1.77250, νd = 49.66 |
| Catalog match | HOYA LAC14 (lanthanum crown, 773/497) |
| Thick-lens focal length | +58.7 mm |

L7 is an air-spaced positive meniscus singlet between the two cemented doublets of Group III. Both radii are negative, making this a rear-concave meniscus that "wraps around" the converging beam. Its primary roles are Petzval curvature correction (the meniscus shape adds positive power with a reduced Petzval contribution compared to a biconvex lens) and astigmatism balancing for macro photography at intermediate magnifications. The same 773/497 glass as L3 and L8.

### 4.8 L8 — Biconvex Positive (cemented with L9)

| Parameter | Value |
|---|---|
| Surfaces | r₁₄ = +3.5444 → r₁₅ = −0.6641 (junction) |
| Center thickness | 0.0845 (norm) → 4.23 mm |
| Glass | nd = 1.77250, νd = 49.66 |
| Catalog match | HOYA LAC14 (lanthanum crown, 773/497) |
| Thick-lens focal length | +36.5 mm |

L8 is the positive component of the rear cemented doublet (L8+L9), which terminates the entire optical system. This is the strongest positive element in the design (f = +36.5 mm), providing the final convergence needed to bring rays to focus. The cemented doublet L8+L9 together has a focal length of +120.1 mm, contributing net positive power while correcting lateral chromatic aberration through the crown/flint glass pairing.

### 4.9 L9 — Negative Meniscus (concave toward object, rearmost element)

| Parameter | Value |
|---|---|
| Surfaces | r₁₅ = −0.6641 (junction) → r₁₆ = −4.3126 |
| Center thickness | 0.0255 (norm) → 1.28 mm |
| Glass | nd = 1.75520, νd = 27.51 |
| Catalog match | Schott SF4 / OHARA S-TIH4 / HOYA FD4 (dense flint) |
| Thick-lens focal length | −52.1 mm |

L9 is the rearmost element in the system and the one specifically identified in the patent claims as a "negative lens element arranged in the rearmost position." The use of dense flint glass (SF4 type, νd = 27.51) satisfies patent condition (4): ν_L < 40. This high-dispersion glass is essential for correcting lateral chromatic aberration across the full magnification range from infinity to 1:2. Because the chief ray height is large at the rear of the system, a high-dispersion negative element at this location exerts maximum leverage on lateral color without significantly disturbing the Petzval sum. The meniscus shape (both radii negative) keeps the Petzval contribution moderate despite the high index.

---

## 5. Glass Selection Summary

The design uses seven distinct glass types. Four have exact matches in current catalogs; three appear to be 1980s-era formulations without precise modern equivalents:

| Element(s) | nd | νd | Glass Code | Catalog Match | Glass Family |
|---|---|---|---|---|---|
| L1 | 1.60342 | 38.01 | 603/380 | Schott F5 / HOYA E-F5 | Flint |
| L2 | 1.72916 | 54.68 | 729/547 | OHARA S-LAL59 / HOYA LACL60 | Lanthanum crown |
| L3, L7, L8 | 1.77250 | 49.66 | 773/497 | HOYA LAC14 | Lanthanum crown |
| L4 | 1.58144 | 40.75 | 581/408 | No exact modern match (nearest: HOYA FF5) | Short flint |
| L5 | 1.68250 | 44.65 | 683/447 | No exact modern match | Barium/lanthanum flint |
| L6 | 1.72000 | 46.03 | 720/460 | No exact modern match | Lanthanum crown/flint border |
| L9 | 1.75520 | 27.51 | 755/275 | Schott SF4 / OHARA S-TIH4 / HOYA FD4 | Dense flint |

Three elements (L3, L7, L8) share the same glass — HOYA LAC14 type (nd = 1.773, νd = 49.66) — which simplifies procurement. This lanthanum crown glass has both high index and moderate Abbe number, making it useful for high-power elements where some dispersion is tolerable.

The six-digit glass codes given above are manufacturer-agnostic identifiers (first three digits = (nd − 1) × 1000, last three = νd × 10). Olympus, as a Japanese manufacturer, most likely sourced glass from OHARA or HOYA. The catalog names given above reflect exact matches where available; for the three glasses without modern equivalents (L4, L5, L6), the six-digit codes remain the authoritative identifiers. These may correspond to older catalog types that were reformulated or discontinued during the industry's transition to lead-free and arsenic-free glass compositions in the 1990s–2000s.

No anomalous partial dispersion (APD) glasses or ED glasses are used in this design. The chromatic correction relies entirely on conventional crown/flint pairings with adequate Abbe number separation.

---

## 6. Focusing Mechanism

The Zuiko Auto-Macro 50mm f/2 employs a **floating-element focus system** — the feature Olympus marketed as its "automatic close-focus correction mechanism." The patent describes the mechanism clearly: the entire lens advances toward the subject (unit focus), while simultaneously the air gap d₄ between Patent Group I (L1 + L2) and Patent Group II (L3 + L4) increases.

### Variable Gap

| Parameter | Infinity (∞) | Close Focus (1:2) | Change |
|---|---|---|---|
| d₄ (normalized) | 0.0024 | 0.0802 | +0.0778 |
| d₄ (scaled, mm) | 0.12 | 4.01 | +3.89 |
| BFD (scaled, mm) | 38.37 | 37.97 | −0.40 |
| Magnification β | 0 | 0.50 | — |

At infinity, the gap between L2 and L3 is a mere 0.12 mm — the two groups are nearly in contact. At maximum extension (1:2 magnification), this gap opens to 4.01 mm. The effect is that Group I moves ~3.89 mm further forward than the rest of the lens. The BFD decreases by only 0.40 mm, meaning the image plane position is nearly constant — a desirable property for SLR camera compatibility.

### Stop Position

The aperture stop sits in the d₈ air gap between L4 (rear of Group II) and L5 (front of Group III). The patent does not specify the exact stop position within this gap. From the cross-section drawing in Fig. 29, the iris diaphragm marker appears at approximately 60% of the d₈ gap measured from the L4 rear surface. For the data file, d₈ = 10.16 mm is split as 6.00 mm (L4 rear to stop) + 4.16 mm (stop to L5 front). This placement is consistent with the general Gauss-type convention of locating the stop slightly toward the rear group, where it provides optimal symmetry for off-axis aberration correction.

### Why This Works

The patent explains the optical rationale through four key principles:

1. **Spherical aberration control.** Group I's weak positive power (f_I = 157.7 mm ≈ 3.15f) ensures that marginal rays emerging from it remain nearly parallel even at close-focus extensions. This prevents the catastrophic spherical aberration that afflicts conventional unit-focus macro lenses beyond about 1:5 magnification.

2. **Coma correction.** When d₄ increases, the entrance pupil shifts toward the center of curvature of the first surface (r₁). This reduces the angle of incidence of off-axis rays on L1, naturally correcting the outer coma that modified-Gauss designs generate at high magnification.

3. **Distortion compensation.** Moving the positive front group away from the stop generates positive distortion, which compensates for the negative distortion that unit-focus extension inherently produces. This is critical for macro photography, where distortion must be well-controlled.

4. **Chromatic independence.** Because Group I is chromatically self-corrected (the L1 flint / L2 crown pair), its differential movement during focusing does not introduce chromatic aberration variation.

### Focus Range

The patent gives close-focus data at β = 0.50 (1:2 magnification). Olympus specifies the minimum focusing distance as 0.24 m measured from the film plane to the subject. The total conjugate distance computed from the patent prescription at β = 0.50 is approximately 230 mm, which is ~10 mm shorter than the Olympus specification. This discrepancy is within normal patent-to-production tolerance and may reflect final mechanical design adjustments (e.g., flange distance accommodation, helicoid travel limits) not captured in the optical prescription. At 1:2 magnification, the lens renders a field of 48 × 72 mm — exactly half the 35mm frame dimensions in each axis. With the addition of a 25 mm extension tube, the lens achieves 1:1 magnification.

---

## 7. Paraxial Verification

All numerical values below were independently computed via ABCD matrix ray trace on the normalized (f = 1) prescription.

### System Parameters

| Parameter | Patent Value | Computed Value | Match |
|---|---|---|---|
| System EFL | f = 1 | 0.9997 | ✓ |
| Group I focal length (f_I) | 3.15 | 3.153 | ✓ |
| Combined Groups I+II focal length (f_F) | 4.22 | 4.225 | ✓ |
| F-number | F/2.0 | F/2.0 | ✓ |
| Half-field angle (ω) | 22.8° | — | — |

### Scaled (50 mm production) Parameters

| Parameter | Value |
|---|---|
| EFL | 50.00 mm |
| Back focal distance (BFD) at infinity | 38.37 mm |
| Total optical track (front to last surface) | 40.13 mm |
| Overall length (front to image plane) | 78.49 mm |
| Petzval radius | −265.3 mm (5.31× EFL) |

The Petzval radius of 265 mm (5.3× focal length) is excellent for a flat-field macro lens. A ratio above 3× is generally considered good; 5.3× indicates very well-controlled field curvature — essential for the lens's intended use in close-up photography of flat subjects like documents, stamps, and specimens.

### Additional Verified Values

| Parameter | Value |
|---|---|
| Group II focal length (f_II) | −328.0 mm |
| Group III focal length (f_III) | +46.1 mm |
| L5+L6 cemented doublet focal length | −154.6 mm |
| L8+L9 cemented doublet focal length | +120.1 mm |
| Entrance pupil distance from S1 | −21.8 mm (in front of lens) |
| Entrance pupil semi-diameter | 12.5 mm |

### Close-Focus System Properties (β = 0.50)

| Parameter | Value |
|---|---|
| EFL at close focus | 51.02 mm |
| BFD at close focus | 37.97 mm |
| Total optical track | 44.02 mm |

The slight increase in EFL at close focus (50.00 → 51.02 mm) is a natural consequence of the increased group separation.

---

## 8. Patent Design Conditions

The patent specifies four conditions for optimal performance. All are satisfied by Embodiment 6:

| Condition | Requirement | Embodiment 6 Value | Status |
|---|---|---|---|
| (1) f_I / f | 1.5 < f_I/f < 4 | 3.15 | ✓ |
| (2) f_F / f | 2 < f_F/f < 9 | 4.22 | ✓ |
| (3) ν₁ | ν₁ < 40 | 38.01 | ✓ |
| (4) ν_L | ν_L < 40 | 27.51 | ✓ |

- **Condition (1)** constrains the front group focal length. If f_I/f exceeds 4 or falls below 1.5, spherical aberration variation during close focusing becomes unacceptable. Embodiment 6's value of 3.15 sits comfortably in the middle of the range.

- **Condition (2)** constrains the combined front system (Groups I + II). If f_F/f falls below 2, the back focal length becomes too short to clear the SLR reflex mirror (the OM mount requires ~38 mm of clearance behind the last surface). If it exceeds 9, lateral chromatic aberration varies excessively when the stop-adjacent air gap is adjusted.

- **Condition (3)** requires the front negative meniscus (L1) to use a glass with Abbe number below 40 — i.e., a flint glass. This ensures that lateral chromatic aberration does not vary excessively across the magnification range.

- **Condition (4)** requires the rearmost negative element (L9) to also use a glass with νd < 40. The dense flint (SF4 type) at νd = 27.51 satisfies this generously. The high dispersion of L9 corrects lateral chromatic aberration of the rear group, compensating for the predominantly lanthanum-crown elements (L6, L7, L8) that precede it.

---

## 9. Comparison with Other Embodiments

US 4,708,445 contains six embodiments. They all share the same three-group architecture and floating-focus principle, but differ in the internal structure of Group III:

| Embodiment | Group III Structure | Elements/Groups | Figures | Notes |
|---|---|---|---|---|
| 1 | Cemented meniscus doublet + singlet + cemented doublet (pos+neg) | 9/7 | 1–5 | f_I = 2.91 |
| 2 | Two meniscus singlets + cemented doublet (pos+neg) | 8/7 | 6–10 | Simplified; 8 elements |
| 3 | Same as Emb. 1 | 9/7 | 11–18 | Also varies stop gap (d₈) |
| 4 | Same as Emb. 1 | 9/7 | 19–23 | f_I = 3.07 |
| 5 | Cemented doublet + meniscus + singlet + singlet (neg) | 9/8 | 24–28 | 17 surfaces, f_I = 4.05 |
| **6** | **Cemented doublet + meniscus + cemented doublet** | **9/7** | **29–33** | **Production design** |

Embodiment 6 distinguishes itself through a slightly different glass pairing in Group I: L2 uses a 729/547 lanthanum crown (nd = 1.72916, νd = 54.68 — OHARA S-LAL59 type) rather than the 713/538 glass (nd = 1.71300, νd = 53.84) used in Embodiments 1, 3, 4, and 5. This higher-index crown gives L2 a slightly longer focal length at the same surface curvatures, which appears to have been the final optimization for the production design. The overall Group I focal length of 3.15f places it between Embodiment 1's more aggressive 2.91f and Embodiment 5's conservative 4.05f.

Embodiment 6 also uses a slightly different glass for L6 (nd = 1.72000, νd = 46.03 — glass code 720/460) compared to most other embodiments (which use νd ≈ 41.98 — a 720/420 glass). The higher Abbe number in Embodiment 6's L6 provides slightly better chromatic balance in the rear cemented doublet.

---

## 10. Historical Context and Significance

The Zuiko Auto-Macro 50mm f/2 represented a significant achievement in macro lens design when introduced in 1985. Prior to this lens, 50mm macro designs were limited to f/2.8 or slower (such as Olympus's own Zuiko Auto-Macro 50mm f/3.5 from the first OM lens series, or Nikon's Micro-Nikkor 55mm f/2.8). Achieving f/2 in a macro lens that maintains high image quality from infinity to 1:2 magnification required the floating-element approach described in the patent.

The design sits in the modified-Gauss lineage but extends it significantly. Classical Gauss designs — even with unit focusing — degrade rapidly beyond about 1:5 magnification due to spherical aberration variation. By deliberately making the front group's power very weak (f_I ≈ 3.15f versus the more typical ~1.5–2f for a standard Gauss) and introducing differential group motion during focusing, Goto's design maintains aberration correction out to 1:2 magnification.

The patent explicitly notes that the lens was arranged to obtain high quality of image from an object at the infinite distance up to an object at an extremely short distance where the photographing magnification is ½ or more, and the aberration curves presented for Embodiment 6 (Figures 31–33) confirm well-corrected spherical aberration, astigmatism, distortion, coma, and lateral chromatic aberration at both infinity and 1:2 magnification.

---

## 11. Summary Table — Complete Prescription (Scaled to 50 mm)

Surface numbering follows the patent convention (r₁ through r₁₆, d₁ through d₁₅).

| Surface | R (mm) | d (mm) | nd | Element | Note |
|---|---|---|---|---|---|
| r₁ | +60.32 | 1.39 | 1.60342 | L1 front | Neg. meniscus, F5 glass |
| r₂ | +29.48 | 2.01 | 1.0 (air) | L1 rear | |
| r₃ | +91.03 | 3.38 | 1.72916 | L2 front | Biconvex, S-LAL59 glass |
| r₄ | −86.94 | 0.12 | 1.0 (air) | L2 rear | **Variable gap (focusing)** |
| r₅ | +20.50 | 6.08 | 1.77250 | L3 front | Pos. meniscus, LAC14 glass |
| r₆ | +37.71 | 1.52 | 1.0 (air) | L3 rear | |
| r₇ | +248.9 | 1.17 | 1.58144 | L4 front | Neg. meniscus, 581/408 glass |
| r₈ | +19.29 | 10.16 | 1.0 (air) | L4 rear | **Contains aperture stop** |
| r₉ | −23.66 | 1.08 | 1.68250 | L5 front | Biconcave, 683/447 glass |
| r₁₀ | +233.6 | 4.65 | 1.72000 | L5/L6 junction | Cemented; 720/460 glass |
| r₁₁ | −35.52 | 0.10 | 1.0 (air) | L6 rear | |
| r₁₂ | −82.55 | 2.87 | 1.77250 | L7 front | Pos. meniscus, LAC14 glass |
| r₁₃ | −29.72 | 0.10 | 1.0 (air) | L7 rear | |
| r₁₄ | +177.3 | 4.23 | 1.77250 | L8 front | Biconvex, LAC14 glass |
| r₁₅ | −33.22 | 1.28 | 1.75520 | L8/L9 junction | Cemented; SF4 glass |
| r₁₆ | −215.7 | 38.37 | 1.0 (air) | L9 rear | BFD to image plane |
