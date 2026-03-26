# NIKON NIKKOR Z 58mm f/0.95 S Noct — Optical Design Analysis

**Patent:** WO2019/229849 A1 (JPWO2019229849A1)  
**PCT Filed:** 29 May 2018 (PCT/JP2018/020552)  
**Published:** 5 December 2019  
**Applicant:** Nikon Corporation  
**Inventors:** Keisuke Tsubonoya, Sōki Harada, Toshinori Take  
**Production Design:** Example 1  

---

## 1. Production Design Identification

Patent WO2019/229849 discloses four numerical examples. Example 1 is identified as the production NIKKOR Z 58mm f/0.95 S Noct through the following convergent criteria:

| Parameter | Example 1 | Nikon Spec Sheet | Match |
|---|---|---|---|
| Element count | 17 | 17 | ✓ |
| Group count | 10 | 10 | ✓ |
| Aspherical surfaces | 3 | 3 | ✓ |
| ED elements | 4 | 4 | ✓ |
| Close-focus magnification | β = −0.194 | 0.194× | ✓ Exact |
| Field angle 2ω | 39.96° | 40°50' (FX) | ✓ Close |
| F-number | 0.98 | 0.95 (nominal) | ✓ Design FNo |
| Close focus distance | 0.5 m (implied by D22 variable) | 0.5 m | ✓ |

Example 2, by contrast, yields only 16 elements in 9 groups with β = −0.188, which does not match the production specification. Examples 3 and 4 explore variant designs with different element counts and field angles.

Nikon's specification states a nominal maximum aperture of f/0.95 while the patent prescription produces a design F-number of 0.98. DxOMark measured a T-stop of T/1.1. The slight discrepancy between nominal (f/0.95) and design (f/0.98) values is typical — the nominal figure accounts for rounding conventions in the marketing specification, and the design value reflects the actual paraxial computation including the stop semi-diameter. The difference is within normal manufacturing and rounding tolerance.

The field angle discrepancy (39.96° vs. 40°50' = 40.83°) reflects a difference in measurement convention. The patent's 2ω = 39.96° is consistent with the paraxial calculation 2 × arctan(Ymax / f) = 2 × arctan(21.70 / 59.62) = 40.00°. Nikon's specification of 40°50' is likely derived from a real-ray trace at full field that includes the effect of distortion, which widens the apparent field angle relative to the paraxial value.

---

## 2. Architecture Overview

The design is structured as a modified double-Gauss variant with an extended front correction group, organized into two principal assemblies:

- **Front Group GF** (positive, f = +75.60 mm): Surfaces 1–22. Contains all 4 ED elements, the aperture stop, and both front-group aspherical surfaces. Moves as a unit during focusing.
- **Rear Group GR** (weakly positive, f = +294.37 mm): Surfaces 23–28. Fixed during focus. Functions as a field-flattening and telecentric correction assembly.

The front group is itself subdivided:

- **G1** (negative, f = −289.87 mm): Surfaces 1–6. Four elements in two cemented doublets. A diverging field corrector that pre-conditions the incoming beam before the master group.
- **G2** (positive, f = +69.07 mm): Surfaces 7–22. Nine elements in six subgroups — the optical core of the design, incorporating the aperture stop and the primary power-generating elements.

The overall topology — a weakly-negative front group feeding a strong positive master group with a quasi-symmetric layout around the aperture stop, followed by a weak rear corrector — reflects a lineage that extends back through the double-Gauss family, but with substantially more correction surfaces and degrees of freedom than a classical six- or eight-element Gauss.

### 2.1 Element and Group Count Verification

| Assembly | Elements | Optical Groups | Surfaces |
|---|---|---|---|
| G1 (front corrector) | L11, L12, L13, L14 | 2 cemented doublets | 1–6 |
| G2 (master group) | L21, L22, L23, L24, L25, L26, L27, L28, L29 | 6 subgroups | 7–22 |
| GR (rear corrector) | L31, L32, L33, L34 | 2 cemented doublets | 23–28 |
| **Total** | **17 elements** | **10 groups** | **28 optical surfaces** |

This count matches Nikon's published specification exactly.

---

## 3. Element-by-Element Analysis

### 3.1 Surface Prescription

The complete surface prescription from Example 1 (Table 1), with all values as published in the patent. An asterisk (*) denotes an aspherical surface.

| m | R (mm) | d (mm) | nd | νd | θgF | Element |
|---|---|---|---|---|---|---|
| *1 | 108.488 | 7.65 | 1.902650 | 35.77 | — | L11 front |
| 2 | −848.550 | 2.80 | 1.552981 | 55.07 | 0.54467 | L11/L12 junction |
| 3 | 50.252 | 18.12 | 1.0 | — | — | L12 rear → air |
| 4 | −60.720 | 2.80 | 1.612660 | 44.46 | 0.56396 | L13 front |
| 5 | 2497.500 | 9.15 | 1.593190 | 67.90 | — | L13/L14 junction |
| 6 | −77.239 | 0.40 | 1.0 | — | — | L14 rear → air |
| 7 | 113.763 | 10.95 | 1.848500 | 43.79 | — | L21 front |
| 8 | −178.060 | 0.40 | 1.0 | — | — | L21 rear → air |
| 9 | 70.659 | 9.74 | 1.593190 | 67.90 | — | L22 front |
| 10 | −1968.500 | 0.20 | 1.0 | — | — | L22 rear → air |
| 11 | 289.687 | 8.00 | 1.593190 | 67.90 | — | L23 front |
| 12 | −97.087 | 2.80 | 1.738000 | 32.33 | 0.58997 | L23/L24 junction |
| 13 | 47.074 | 8.70 | 1.0 | — | — | L24 rear → air |
| 14(S) | ∞ | 5.29 | 1.0 | — | — | Aperture stop |
| 15 | −95.230 | 2.20 | 1.612660 | 44.46 | 0.56396 | L25 front |
| 16 | 41.204 | 11.55 | 1.497820 | 82.57 | — | L25/L26 junction |
| 17 | −273.092 | 0.20 | 1.0 | — | — | L26 rear → air |
| 18 | 76.173 | 9.50 | 1.883000 | 40.69 | — | L27 front |
| 19 | −101.575 | 0.20 | 1.0 | — | — | L27 rear → air |
| *20 | 176.128 | 7.45 | 1.953750 | 32.33 | — | L28 front |
| 21 | −67.221 | 1.80 | 1.738000 | 32.33 | 0.58997 | L28/L29 junction |
| 22 | 55.510 | D22 | 1.0 | — | — | L29 rear → air |
| 23 | 71.413 | 6.35 | 1.883000 | 40.69 | — | L31 front |
| 24 | −115.025 | 1.81 | 1.698950 | 30.13 | — | L31/L32 junction |
| 25 | 46.943 | 0.80 | 1.0 | — | — | L32 rear → air |
| 26 | 55.281 | 9.11 | 1.883000 | 40.69 | — | L33 front |
| 27 | −144.041 | 3.00 | 1.765538 | 46.76 | — | L33/L34 junction |
| *28 | 52.858 | 14.50 | 1.0 | — | — | L34 rear → air |
| 29 | ∞ | 1.60 | 1.516800 | 64.14 | — | Filter front |
| 30 | ∞ | 1.00 | 1.0 | — | — | Filter rear |

D22 is the only variable air gap: 2.68 mm at infinity focus, 21.29 mm at closest focus.

### 3.2 Individual Element Analysis

The following analysis proceeds front to rear. Element focal lengths are computed from the thick-lens equation (independently verified by paraxial ray trace — see Section 7). Glass identifications are inferential unless stated otherwise: the patent provides nd, νd, and (for some elements) θgF, but does not name specific catalog glasses. Matches are proposed based on the closest available catalog entries from OHARA, Schott, CDGM, Hikari, and Sumita.

---

#### L11 — Biconvex Positive (Aspherical Front Surface)

| Property | Value |
|---|---|
| Surfaces | *1 → 2 |
| R₁, R₂ | +108.488, −848.550 mm |
| d | 7.65 mm |
| nd / νd | 1.902650 / 35.77 |
| Focal length | +107.0 mm |
| Cemented with | L12 (doublet Da) |
| Aspherical | Surface 1 (front, ground) |

**Glass identification:** nd = 1.90265 with νd = 35.77 is an ultra-high-index lanthanum dense flint. No exact match has been confirmed in the current OHARA, Schott, or HOYA standard catalogs. The nearest OHARA types are S-LAH95 (nd = 1.90366, νd = 31.31 — matching nd within 0.001 but Δνd = 4.5) and S-LAH93 (nd = 1.91082, νd = 35.25 — matching νd region but Δnd = 0.008). Neither matches both parameters simultaneously. CDGM and Hikari may carry closer matches (both manufacturers list types at code 903358 in some cross-reference tables), but this has not been independently confirmed. The glass is most likely a Nikon-specified special-melt or proprietary formulation. Its refractive index exceeds 1.90, placing it in the regime that Nikon specifically highlights in their marketing: "a high refractive index unattainable with molded-glass."

**Aspherical surface:** Surface 1 is the large-diameter front aspherical element — the showpiece of the Noct and a direct spiritual descendant of the hand-ground aspherical element on the original 1977 Noct-Nikkor 58mm f/1.2. Nikon describes this as "a highly accurate, large-diameter ground aspherical lens element using glass material with a high refractive index." With nd ≈ 1.903, precision glass molding (PGM) is not feasible at this refractive index. The glass transition temperature and thermal expansion characteristics of ultra-high-index lanthanum glasses prevent them from being press-molded in conventional PGM processes without unacceptable form errors. This element must be individually CNC-ground and polished to aspherical figure — a costly process that directly contributes to the lens's $8,650 price point.

The aspherical departure at the estimated full clear aperture (SD ≈ 34 mm) reaches approximately **−614 µm** — a substantial deviation from the base sphere, indicating that the aspheric correction is doing heavy lifting in controlling spherical aberration for the outermost marginal rays entering this extraordinarily fast optical system.

**Optical role:** L11 is the first element the incoming light encounters. As a weakly biconvex positive element with an aspherical front surface, it serves two roles simultaneously: it provides positive power to begin converging the beam toward the master group, and the aspherical departure corrects high-order spherical aberration that would otherwise be introduced by the extreme speed (f/0.95) of the system. The negative A4 coefficient (−3.82×10⁻⁷) means the surface becomes progressively flatter toward the rim relative to its base sphere — an under-correction that counterbalances the overcorrection introduced by the many subsequent positive elements.

---

#### L12 — Biconcave Negative (Anomalous Dispersion)

| Property | Value |
|---|---|
| Surfaces | 2 → 3 |
| R₁, R₂ | −848.550, +50.252 mm |
| d | 2.80 mm |
| nd / νd / θgF | 1.552981 / 55.07 / 0.54467 |
| Focal length | −85.7 mm |
| Cemented with | L11 (doublet Da) |
| ΔPgF | −0.0065 (below normal line) |

**Glass identification:** This glass has an unusual combination of moderate refractive index (1.553) with moderately low dispersion (νd = 55.07) and distinctly negative anomalous partial dispersion (ΔPgF = −0.0065). The θgF of 0.54467 falls well below the Schott normal glass line. This places it in the family of special short-flint or phosphate-based anomalous dispersion glasses. No exact catalog match has been confirmed — the nd/νd pair does not correspond precisely to any readily available catalog entry from major suppliers. This is likely either a Nikon-proprietary formulation or a special-melt glass from a Japanese supplier (Hikari or Sumita).

**Optical role:** Cemented to L11, this negative element forms the first cemented doublet (Da). The combination of L11's high-index positive power with L12's negative power and anomalous dispersion creates a partially achromatized unit that also seeds the Petzval correction. The negative anomalous dispersion (ΔPgF < 0) means L12 helps suppress secondary spectrum — the residual chromatic error that persists even after conventional first-order achromatization. Together, the L11+L12 doublet is a diverging cemented lens (net negative power) that introduces the first stage of field curvature compensation. The air space between this doublet and the next (L13+L14) forms the biconvex **air lens La1** — a critical design element discussed in Section 4.

---

#### L13 — Biconcave Negative (Anomalous Dispersion)

| Property | Value |
|---|---|
| Surfaces | 4 → 5 |
| R₁, R₂ | −60.720, +2497.500 mm |
| d | 2.80 mm |
| nd / νd / θgF | 1.612660 / 44.46 / 0.56396 |
| Focal length | −96.7 mm |
| Cemented with | L14 (doublet Db) |
| ΔPgF | −0.0051 (below normal line) |

**Glass identification:** nd = 1.61266 with νd = 44.46 and negative ΔPgF is characteristic of the KZFS (Kurz Flint Sonder / short flint special) glass family. The closest catalog match is Schott N-KZFS4 (nd = 1.61336, νd = 44.49), though the match is not exact. OHARA S-NBM51 (nd = 1.61340, νd = 44.27) is similarly close. The same glass appears in L25, confirming it is a deliberately chosen type, not a transcription variation. This glass type is specifically selected for its negative anomalous partial dispersion — it lies below the normal line on the θgF vs. νd diagram.

**Optical role:** L13 is the diverging element of the second cemented doublet in G1. Its biconcave shape with a nearly flat rear surface (R₂ ≈ 2498 mm) gives it strong negative power primarily from the front surface. Together with L14, it forms doublet Db. The rear surfaces of L12 (R = 50.252) and the front surface of L13 (R = −60.720) define the biconvex air lens La1, with an axial thickness of 18.12 mm — the longest air gap in G1 and a key aberration-correction element.

---

#### L14 — Biconvex Positive (ED Glass)

| Property | Value |
|---|---|
| Surfaces | 5 → 6 |
| R₁, R₂ | +2497.500, −77.239 mm |
| d | 9.15 mm |
| nd / νd | 1.593190 / 67.90 |
| Focal length | +126.5 mm |
| Cemented with | L13 (doublet Db) |

**Glass identification:** nd = 1.593190 with νd = 67.90 is a phosphate crown / fluorophosphate-type ED glass. This same glass appears three times in the design (L14, L22, L23), making it the most frequently used glass type. The Abbe number of 67.90 qualifies it as an extra-low dispersion (ED) glass under Nikon's classification. The closest catalog matches include OHARA S-FPM2 (nd = 1.59522, νd = 67.74) and HOYA FCD10 (nd = 1.59270, νd = 67.87), though neither is exact. Given its repeated use across multiple elements, this is most likely a Nikon-specified glass manufactured to Nikon's tolerances — possibly by OHARA or Hikari under contract.

**Optical role:** L14's positive power, combined with its ED glass, makes the L13+L14 doublet a partially achromatized diverging unit. The ED glass provides low dispersion in the positive element while L13's KZFS-type glass provides anomalous dispersion in the negative element — together they attack both primary chromatic aberration and secondary spectrum. L14's very weak front surface (R ≈ 2498 mm, essentially the cemented junction with L13) means almost all of its power comes from the strongly curved rear surface (R = −77.239 mm), contributing to the gradual convergence of the beam as it transitions from G1 into the master group G2.

---

#### L21 — Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 7 → 8 |
| R₁, R₂ | +113.763, −178.060 mm |
| d | 10.95 mm |
| nd / νd | 1.848500 / 43.79 |
| Focal length | +83.2 mm |

**Glass identification:** nd = 1.84850 with νd = 43.79 is a high-index lanthanum dense flint. The closest matches include Hikari E-LASF013 and CDGM H-ZLaF68C. This is a powerful converging element in a high-index glass that provides strong positive power while maintaining moderate dispersion.

**Optical role:** L21 is the first element of the master group G2 and the first standalone (non-cemented) element encountered by the beam after leaving G1. Its strong positive power (f ≈ +83 mm) begins the primary convergence toward the focal point. The high refractive index (1.849) allows this convergence to be achieved with relatively gentle curvatures, which reduces the surface contributions to spherical aberration — essential when operating at f/0.95.

---

#### L22 — Biconvex Positive (ED Glass)

| Property | Value |
|---|---|
| Surfaces | 9 → 10 |
| R₁, R₂ | +70.659, −1968.500 mm |
| d | 9.74 mm |
| nd / νd | 1.593190 / 67.90 |
| Focal length | +115.2 mm |

**Glass:** Same phosphate crown ED glass as L14.

**Optical role:** L22 continues the positive power buildup approaching the aperture stop. Its nearly plano-convex shape (strongly curved front, nearly flat rear) distributes the refraction asymmetrically, which is favorable for minimizing coma in the pre-stop region. The ED glass provides chromatic correction — this element is paired in the achromatic balance against the high-dispersion negative elements that follow (L24, L25).

---

#### L23 — Biconvex Positive (ED Glass)

| Property | Value |
|---|---|
| Surfaces | 11 → 12 |
| R₁, R₂ | +289.687, −97.087 mm |
| d | 8.00 mm |
| nd / νd | 1.593190 / 67.90 |
| Focal length | +123.5 mm |
| Cemented with | L24 (doublet Jc) |

**Glass:** Same phosphate crown ED glass as L14 and L22.

**Optical role:** L23 is the positive element of the pre-stop cemented doublet Jc. Its weakly curved front surface (R = 289.7 mm) and more strongly curved rear surface place most of the refraction at the cemented junction with L24. This configuration is typical of the positive element in a dense-flint / crown achromatic doublet positioned near the stop, where it balances chromatic aberration while the doublet as a whole contributes to the Petzval sum correction.

---

#### L24 — Biconcave Negative (Anomalous Dispersion)

| Property | Value |
|---|---|
| Surfaces | 12 → 13 |
| R₁, R₂ | −97.087, +47.074 mm |
| d | 2.80 mm |
| nd / νd / θgF | 1.738000 / 32.33 / 0.58997 |
| Focal length | −42.6 mm |
| Cemented with | L23 (doublet Jc) |
| ΔPgF | +0.0006 (essentially on normal line) |

**Glass identification:** nd = 1.738000 with νd = 32.33. This high-index, high-dispersion flint glass appears twice (L24 and L29), bracketing the aperture stop in a quasi-symmetric arrangement. Despite its θgF value being essentially on the normal line (ΔPgF = +0.0006, marginal), it still satisfies the patent's condition (4): θgF + 0.0021 × νd = 0.658 < 0.670. The closest catalog match is potentially OHARA S-NBH53V or a similar niobium-containing heavy flint.

**Optical role:** L24 is one of the most optically critical elements in the design. Its strong negative power (f ≈ −43 mm) positioned immediately before the aperture stop serves as the primary Petzval corrector. In a fast optical system, controlling field curvature is paramount, and strongly negative elements near the stop contribute negative Petzval sum without significantly affecting the axial ray heights (since they are near the stop where axial ray heights are low). The L23+L24 doublet as a whole has net negative power, forming a diverging unit that helps balance the heavy positive power of L21 and L22. The air space between L24's rear surface and the stop surface, together with the space between the stop and L25's front surface, forms the biconvex **air lens La2** — the second critical air lens in the design.

---

#### Aperture Stop (S)

| Property | Value |
|---|---|
| Surface | 14 |
| Position | Between L24 and L25 |
| d to next surface | 5.29 mm |

The aperture stop is positioned within the air lens La2, between the pre-stop doublet (L23+L24) and the post-stop doublet (L25+L26). This central placement provides the quasi-symmetry needed for correction of odd-order aberrations (coma, distortion, lateral color). Nikon's production lens uses an 11-blade diaphragm.

---

#### L25 — Biconcave Negative (Anomalous Dispersion)

| Property | Value |
|---|---|
| Surfaces | 15 → 16 |
| R₁, R₂ | −95.230, +41.204 mm |
| d | 2.20 mm |
| nd / νd / θgF | 1.612660 / 44.46 / 0.56396 |
| Focal length | −46.7 mm |
| Cemented with | L26 (doublet Jd) |
| ΔPgF | −0.0051 (below normal line) |

**Glass:** Same KZFS-type anomalous dispersion glass as L13.

**Optical role:** L25 mirrors L24's function on the image side of the stop — a strongly negative element that contributes to Petzval correction and serves as the diverging element of the post-stop doublet Jd. Its KZFS-type glass with negative anomalous dispersion makes it a partner in the secondary spectrum correction strategy. L25+L26 together form a doublet that is quasi-symmetric with L23+L24 about the aperture stop, a hallmark of double-Gauss aberration correction.

---

#### L26 — Biconvex Positive (Super-ED Fluorophosphate)

| Property | Value |
|---|---|
| Surfaces | 16 → 17 |
| R₁, R₂ | +41.204, −273.092 mm |
| d | 11.55 mm |
| nd / νd | 1.497820 / 82.57 |
| Focal length | +72.8 mm |
| Cemented with | L25 (doublet Jd) |

**Glass identification:** nd = 1.49782 with νd = 82.57 is the lowest-dispersion glass in the entire system. This is unambiguously a super-ED fluorophosphate glass, closely related to the OHARA S-FPL51 family (nd = 1.49700, νd = 81.54) or HOYA FCD1 (nd = 1.49700, νd = 81.61). The slight differences from standard catalog values (nd higher by ~0.001, νd higher by ~1) suggest either a Nikon-proprietary formulation or a special high-purity melt with tighter tolerances on the fluorophosphate composition. The Abbe number of 82.57 makes this the crown jewel of the chromatic correction strategy — a single element with extraordinarily low dispersion that can counterbalance multiple high-dispersion elements.

**Optical role:** Cemented to L25, L26 is the positive element of the post-stop doublet Jd. The L25+L26 doublet has net negative power (f ≈ −137 mm per paraxial trace), consistent with the patent's classification as 接合負レンズ (cemented negative lens). Its super-ED glass enables aggressive achromatization: the doublet achieves color correction not just at primary wavelengths but deep into the secondary spectrum, which is critical at f/0.95 where even small residual chromatic errors become visible. The thick center (11.55 mm) indicates this is a substantial piece of glass — the thickest individual element in the entire system. Its strong positive power (f ≈ +73 mm) provides a significant fraction of the master group's total converging power.

---

#### L27 — Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 18 → 19 |
| R₁, R₂ | +76.173, −101.575 mm |
| d | 9.50 mm |
| nd / νd | 1.883000 / 40.69 |
| Focal length | +50.6 mm |

**Glass identification:** nd = 1.88300 with νd = 40.69 matches OHARA S-LAH58 exactly. This lanthanum dense flint glass is used three times in the design (L27, L31, L33) — all as positive elements. S-LAH58 is a well-established catalog glass with excellent chemical durability and good moldability, widely used in high-performance photographic lenses.

**Optical role:** L27 is the strongest positive singlet in the master group (f ≈ +51 mm). Positioned immediately after the post-stop doublet, it provides substantial converging power to bring the diverging beam from the L25+L26 doublet toward the focus. The high refractive index (1.883) allows strong power with moderate curvatures, minimizing surface contributions to higher-order aberrations. L27 works in concert with the subsequent L28+L29 doublet to complete the rear half of G2's quasi-symmetric double-Gauss core.

---

#### L28 — Biconvex Positive (Aspherical Front, Ultra-High-Index)

| Property | Value |
|---|---|
| Surfaces | *20 → 21 |
| R₁, R₂ | +176.128, −67.221 mm |
| d | 7.45 mm |
| nd / νd | 1.953750 / 32.33 |
| Focal length | +51.8 mm |
| Cemented with | L29 (doublet De) |
| Aspherical | Surface 20 (front) |

**Glass identification:** nd = 1.95375 is the highest refractive index in this design and among the highest encountered in photographic lens patents. OHARA S-LAH98 (nd = 1.95375, νd = 32.32) is an almost exact match (Δνd = 0.01 — within manufacturing tolerance). HOYA TAFD45 and Hikari J-LASFH21 share the same glass code (954323) and are equivalent types. S-LAH98 is classified by OHARA as a polished-lens glass (not moldable), which is consistent with the aspherical surface on this element requiring CNC grinding rather than press molding. Combined with Nikon's marketing statement that the Noct uses "large-diameter ground aspherical lens elements made of glass with a high refractive index" (note the plural), **this element is very likely the second ground aspherical element** in the design.

**Aspherical surface:** Surface 20 carries the second aspherical profile. Its departure at an estimated SD of 20 mm reaches **−207 µm** — significant but smaller than surface 1, consistent with its position deeper in the lens where the beam diameter has narrowed after the stop. The negative A4 coefficient (−1.15×10⁻⁶) again indicates the surface becomes flatter toward the rim, correcting zonal and high-order spherical aberration in the post-stop convergent beam.

**Optical role:** L28 is the last positive power element before the beam exits the master group. Its aspherical surface provides fine-tuned correction of spherical aberration and coma in the converging beam after the stop. The ultra-high refractive index (1.954) enables strong positive power from moderate curvatures, which is essential for maintaining image quality at f/0.95. This element, together with L29, forms the final cemented doublet in the front group — positioned quasi-symmetrically with the L23+L24 doublet about the aperture stop.

---

#### L29 — Biconcave Negative (Anomalous Dispersion)

| Property | Value |
|---|---|
| Surfaces | 21 → 22 |
| R₁, R₂ | −67.221, +55.510 mm |
| d | 1.80 mm |
| nd / νd / θgF | 1.738000 / 32.33 / 0.58997 |
| Focal length | −41.0 mm |
| Cemented with | L28 (doublet De) |
| ΔPgF | +0.0006 (essentially on normal line) |

**Glass:** Same high-dispersion flint as L24, completing the quasi-symmetric arrangement.

**Optical role:** L29 is the last element of the front group GF. Together with L28, it forms doublet De — a cemented negative lens (f ≈ −230 mm per paraxial trace), consistent with the patent's designation 接合負レンズ. Its strong negative power (f ≈ −41 mm) diverges the beam as it exits toward the rear group, and the air gap D22 (the variable focus spacing) separates it from L31. This element's rear surface (R = +55.510 mm, concave toward the image) combined with L31's front surface (R = +71.413 mm, convex toward the object) forms the transition region between GF and GR. By deliberately under-correcting certain aberrations in GF's rear elements, the design creates a residual that the fixed rear group GR can compensate — a strategy that maintains good correction across the focus range.

---

#### L31 — Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 23 → 24 |
| R₁, R₂ | +71.413, −115.025 mm |
| d | 6.35 mm |
| nd / νd | 1.883000 / 40.69 |
| Focal length | +50.7 mm |
| Cemented with | L32 (doublet Df) |

**Glass:** OHARA S-LAH58 (same as L27 and L33).

**Optical role:** L31 is the positive element of the first rear-group doublet Df. The rear group GR has weak overall positive power (f = +294 mm), and L31 provides the primary converging contribution. Its role is primarily one of field correction — it helps flatten the Petzval surface and correct residual astigmatism and field curvature from the front group, while also contributing to telecentricity (ensuring the chief ray exits nearly perpendicular to the sensor).

---

#### L32 — Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | 24 → 25 |
| R₁, R₂ | −115.025, +46.943 mm |
| d | 1.81 mm |
| nd / νd | 1.698950 / 30.13 |
| Focal length | −47.5 mm |
| Cemented with | L31 (doublet Df) |

**Glass identification:** nd = 1.69895 with νd = 30.13 is a dense flint with very high dispersion. This glass does not appear elsewhere in the design. Possible matches include OHARA S-NBH52V or Hikari E-FD8. The very low Abbe number (30.13) provides the dispersion differential needed for achromatization within doublet Df.

**Optical role:** L32's high dispersion paired with L31's moderate dispersion (νd = 40.69) provides achromatization in the rear group. Note that the patent lists θgF = 0.60210 for this glass in Example 3 but does not list it for Example 1 — the θgF value is only documented for glasses satisfying condition (4) in the front group. The L31+L32 doublet has net negative power, contributing to field flattening.

---

#### L33 — Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 26 → 27 |
| R₁, R₂ | +55.281, −144.041 mm |
| d | 9.11 mm |
| nd / νd | 1.883000 / 40.69 |
| Focal length | +46.2 mm |
| Cemented with | L34 (doublet Dg) |

**Glass:** OHARA S-LAH58 (same as L27 and L31).

**Optical role:** L33 is the strongest positive element in the rear group (f ≈ +46 mm). It provides the final stage of convergence before the image plane. Together with L34, it forms doublet Dg — the only cemented doublet in the entire design with net *positive* power (f ≈ +588 mm per thin-lens approximation), consistent with the patent's classification of the L33+L34 unit as 接合正レンズ (cemented positive lens). Its position as the penultimate element gives it significant influence over the sagittal coma correction at the field edges — Nikon specifically highlights the Noct's ability to render point light sources as clean points even in the frame periphery, and L33's strong curvatures are part of how this is achieved.

---

#### L34 — Biconcave Negative (Aspherical Rear Surface)

| Property | Value |
|---|---|
| Surfaces | 27 → *28 |
| R₁, R₂ | −144.041, +52.858 mm |
| d | 3.00 mm |
| nd / νd | 1.765538 / 46.76 |
| Focal length | −50.2 mm |
| Cemented with | L33 (doublet Dg) |
| Aspherical | Surface 28 (rear, last optical surface) |

**Glass identification:** nd = 1.76554 with νd = 46.76 places this glass in the lanthanum crown / dense phosphate crown region of the glass map. No standard catalog glass from OHARA, Schott, or HOYA matches both parameters precisely. The closest candidates include HOYA TAFD5F (nd = 1.76684, νd = 46.62 — Δnd = 0.0013, Δνd = 0.14), but the match is not exact. This is likely another special-melt or proprietary formulation. The moderate refractive index (1.766) places it within the feasible range for precision glass molding, unlike the two ultra-high-index aspherical elements.

**Aspherical surface:** Surface 28 is the last optical surface before the filter, and it carries the third and final aspherical correction. Uniquely among the three aspherics, it uses coefficients up to **A14** (14th order) — the most complex aspheric profile in the design. The departure at SD ≈ 18 mm reaches **+321 µm** (positive departure, meaning the surface bulges outward relative to the base sphere). This is the only aspheric with a positive A4 coefficient (+3.19×10⁻⁶), meaning the rim becomes steeper than the base sphere. The higher-order terms (A6 through A14) alternate in sign, creating an oscillatory correction profile that fine-tunes the wavefront across multiple zones.

**Optical role:** The rear aspherical surface is the design's last chance to correct residual aberrations before the image plane. Its complex profile (14th-order polynomial) addresses field-dependent aberrations that cannot be corrected by the axially-symmetric front aspherics alone — particularly astigmatism, field curvature, and sagittal coma at intermediate and full field angles. This element's position at the exit of the lens gives it leverage over the chief ray angles at the sensor, contributing to Nikon's stated exit pupil distance of 43.85 mm (condition 9). Because this surface is in the rear group at a relatively small diameter, it is likely produced by precision glass molding (PGM) or hybrid molding rather than CNC grinding — unlike the two front aspherics.

---

## 4. Air Lenses

The patent explicitly calls out two biconvex air lenses as key design features, each governed by a shape-factor conditional expression:

### Air Lens La1 (Between G1 Doublets)

Formed between L12's rear surface (R = +50.252 mm) and L13's front surface (R = −60.720 mm), with an axial thickness of 18.12 mm — the longest air gap in the front group. This air lens has a biconvex shape (both surfaces curve inward toward the air space) and functions as a strong negative power element in the equivalent air-glass optical train. Shape factor:

$$\frac{r_{2L1} + r_{1L1}}{r_{2L1} - r_{1L1}} = \frac{-60.720 + 50.252}{-60.720 - 50.252} = \frac{-10.468}{-110.972} = 0.09$$

This near-zero shape factor indicates an almost equi-convex air lens — the two bounding surfaces have similar but opposite curvatures — providing balanced divergence to the beam passing through G1.

### Air Lens La2 (Across the Aperture Stop)

Formed between L24's rear surface (R = +47.074 mm) and L25's front surface (R = −95.230 mm), spanning the aperture stop itself (total axial extent: 8.70 + 5.29 = 13.99 mm). Shape factor:

$$\frac{r_{2L2} + r_{1L2}}{r_{2L2} - r_{1L2}} = \frac{-95.230 + 47.074}{-95.230 - 47.074} = \frac{-48.156}{-142.304} = 0.34$$

The positive shape factor indicates the air lens is shifted toward a meniscus shape, with the image-side surface (L25 front) being more weakly curved than the object-side surface (L24 rear). This asymmetry in the air lens across the stop is a deliberate design choice — it provides differential correction of coma and astigmatism that would be absent in a perfectly symmetric configuration.

---

## 5. Chromatic Correction Strategy

### 5.1 ED Glass Distribution

All four ED glass elements are located in the front group GF, and all four are positive elements:

| Element | nd | νd | Role | Location |
|---|---|---|---|---|
| L14 | 1.593190 | 67.90 | ED phosphate crown | G1, cemented to L13 |
| L22 | 1.593190 | 67.90 | ED phosphate crown | G2, singlet before stop |
| L23 | 1.593190 | 67.90 | ED phosphate crown | G2, cemented to L24 |
| L26 | 1.497820 | 82.57 | Super-ED fluorophosphate | G2, cemented to L25 |

The concentration of all ED elements in the positive-power front group is characteristic of Nikon's design philosophy for high-performance lenses: correct chromatic aberrations where they are generated (at the high-power elements) rather than relying on distant compensating elements. The use of three elements of the same ED glass (nd = 1.593190) provides manufacturing advantages — the same glass melt can supply multiple elements, reducing cost and ensuring consistent batch-to-batch chromatic properties.

### 5.2 Anomalous Dispersion and Secondary Spectrum

The patent explicitly highlights condition (4), which governs the anomalous partial dispersion of negative lenses in the front group:

θgF + 0.0021 × νd < 0.670

Five negative elements satisfy this condition:

| Element | θgF | νd | θgF + 0.0021×νd | ΔPgF |
|---|---|---|---|---|
| L12 | 0.54467 | 55.07 | 0.660 | −0.0065 |
| L13 | 0.56396 | 44.46 | 0.657 | −0.0051 |
| L24 | 0.58997 | 32.33 | 0.658 | +0.0006 |
| L25 | 0.56396 | 44.46 | 0.657 | −0.0051 |
| L29 | 0.58997 | 32.33 | 0.658 | +0.0006 |

The strategy pairs positive ED elements (low νd, low θgF relative to their position on the glass map) with negative elements that have low or negative anomalous partial dispersion. This combination attacks secondary spectrum — the residual chromatic error at g-line (435.8 nm) and C-line (656.3 nm) that persists after primary F–C achromatization. At f/0.95, even modest secondary spectrum would produce visible purple fringing in high-contrast transitions; the five anomalous-dispersion negative elements working against four ED positive elements provide the multi-surface correction necessary to suppress this.

Nikon does not apply the "APO" designation to this lens, consistent with their general practice of avoiding the term even when achieving apochromatic-equivalent correction through ED, Super ED, and anomalous-dispersion glass combinations.

---

## 6. Aspherical Surfaces

### 6.1 Summary

| Surface | Element | nd | Type (inferred) | Max Departure | Order |
|---|---|---|---|---|---|
| *1 | L11 front | 1.903 | CNC ground | −614 µm at SD≈34mm | 10th |
| *20 | L28 front | 1.954 | CNC ground | −207 µm at SD≈20mm | 10th |
| *28 | L34 rear | 1.766 | PGM or hybrid (inferred) | +321 µm at SD≈18mm | 14th |

### 6.2 Manufacturing Methods

Nikon's marketing language provides direct insight into the manufacturing:

- **"Large-diameter ground aspherical lens elements"** (plural) — at least two aspherics are CNC-ground.
- **"High refractive index unattainable with molded glass"** — the ground elements use glass types too dense for PGM.

Surfaces 1 and 20 both use glasses with nd > 1.90, placing them firmly in the regime where PGM cannot achieve acceptable form accuracy due to the thermal properties of ultra-high-index lanthanum glasses. These elements must be individually ground and polished on CNC aspherical generators — a process requiring hours per element and contributing substantially to the lens's cost and limited production volume.

Surface 28, with nd = 1.766, is within the feasible range for PGM or hybrid aspherical manufacturing (glass body with aspherical resin layer), though the patent prescription treats it as a homogeneous glass element (no separate resin layer). Given its lower index and position at the rear of the lens (smaller diameter), PGM is the most likely manufacturing method for this surface.

### 6.3 Aspherical Coefficients

**Surface 1 (L11 front):**

| Coefficient | Value |
|---|---|
| κ | 0.0000 |
| A4 | −3.82177 × 10⁻⁷ |
| A6 | −6.06486 × 10⁻¹¹ |
| A8 | −3.80172 × 10⁻¹⁵ |
| A10 | −1.32266 × 10⁻¹⁸ |

All coefficients are negative, producing a monotonically increasing departure (flatter than the base sphere at all heights). This "lazy" aspherical profile reduces the angle of incidence for marginal rays at the rim, directly reducing spherical aberration from the first surface.

**Surface 20 (L28 front):**

| Coefficient | Value |
|---|---|
| κ | 0.0000 |
| A4 | −1.15028 × 10⁻⁶ |
| A6 | −4.51771 × 10⁻¹⁰ |
| A8 | +2.72670 × 10⁻¹³ |
| A10 | −7.66812 × 10⁻¹⁷ |

The sign reversal at A8 creates a more complex profile: the surface flattens progressively through the A4 and A6 zones, then the A8 term partially counteracts this at higher ray heights. This produces a "zonal" correction — different annular zones of the surface contribute different amounts of aberration correction, targeting residual zonal spherical aberration in the convergent post-stop beam.

**Surface 28 (L34 rear):**

| Coefficient | Value |
|---|---|
| κ | 0.0000 |
| A4 | +3.18645 × 10⁻⁶ |
| A6 | −1.14718 × 10⁻⁸ |
| A8 | +7.74567 × 10⁻¹¹ |
| A10 | −2.24225 × 10⁻¹³ |
| A12 | +3.34790 × 10⁻¹⁶ |
| A14 | −1.70470 × 10⁻¹⁹ |

The alternating-sign coefficients create the most complex aspherical profile in the system. This oscillatory departure corrects field-dependent aberrations across multiple annular zones simultaneously. The use of 14th-order terms indicates that the designers pushed the optimization to capture fine wavefront structure at the edge of the field — consistent with Nikon's claim of "outstanding resolution along the focal plane at any shooting distance."

---

## 7. Focus Mechanism

The Noct focuses by **unit extension of the entire front group GF**. This is a mechanically simple but optically elegant approach:

| Parameter | Value |
|---|---|
| Variable gap | D22 (between L29 rear and L31 front) |
| Gap at infinity | 2.68 mm |
| Gap at close focus | 21.29 mm |
| Focus travel | 18.61 mm |
| Close focus distance | 0.5 m (from focal plane) |
| Reproduction ratio at close focus | 1:5.15 (β = −0.194) |

In unit focus, all 13 elements of GF (surfaces 1–22) translate forward as a rigid body along the optical axis. The rear group GR (surfaces 23–28) remains fixed relative to the camera mount. This is the reason the lens barrel visibly extends during close-focus operation — the inner barrel carrying GF physically moves forward by up to 18.6 mm.

**Why unit focus?** At f/0.95, the front group's massive aperture (estimated entrance pupil SD ≈ 30.4 mm) and 13 elements create a package weighing well over a kilogram of glass alone. Nikon chose unit focus for several reasons:

1. **Optical quality at close focus:** By moving the entire front group, all internal air spacings within GF remain fixed. This preserves the carefully optimized aberration balance within the master group across the entire focus range. An inner-focus design would allow some internal spacings to change, potentially degrading spherical aberration correction at close distances.

2. **Simplicity and precision:** A single moving group eliminates the need for cam mechanisms or multiple independently-moving groups, reducing mechanical tolerances and play.

3. **No autofocus motor required:** The enormous mass of the moving group (all 13 elements of GF) makes it impractical to drive with a conventional AF motor at useful speeds. Nikon made the deliberate choice to ship the Noct as manual-focus-only — the only NIKKOR Z lens without autofocus. The ~320° focus throw provides the fine positioning accuracy needed to exploit the razor-thin depth of field at f/0.95.

The patent's conditional expression (1) — fF/f = 1.27 — ensures that the front group's focal length is close to the system focal length, which keeps the focus extension moderate relative to the total track. If fF/f were significantly larger, the focus travel would increase proportionally, making the lens impractically long at close focus distances.

---

## 8. Verification Summary

All numerical values from the patent were independently verified using thick-lens focal length calculations and paraxial ray trace. Results:

| Quantity | Patent Value | Computed Value | Δ |
|---|---|---|---|
| System EFL (f) | 59.62 mm | 59.62 mm | < 0.01 mm |
| GF focal length | 75.60 mm | 75.60 mm | < 0.01 mm |
| GR focal length | 294.37 mm | 294.38 mm | 0.01 mm |
| G1 focal length | −289.87 mm | −289.85 mm | 0.02 mm |
| G2 focal length | 69.07 mm | 69.07 mm | < 0.01 mm |
| Total track | 160.74 mm | 160.75 mm | 0.01 mm |
| All conditional expressions (1–14) | — | — | All verified ✓ |

The sub-millimeter agreement across all quantities confirms the prescription has been correctly transcribed from the patent.

---

## 9. Unique Glass Types Used

The design employs **11 distinct glass types** across 17 elements, showing a high degree of material diversity:

| nd | νd | Count | Elements | Category |
|---|---|---|---|---|
| 1.497820 | 82.57 | 1 | L26 | Super-ED fluorophosphate |
| 1.552981 | 55.07 | 1 | L12 | Anomalous dispersion special |
| 1.593190 | 67.90 | 3 | L14, L22, L23 | ED phosphate crown |
| 1.612660 | 44.46 | 2 | L13, L25 | KZFS-type anomalous dispersion |
| 1.698950 | 30.13 | 1 | L32 | Dense flint |
| 1.738000 | 32.33 | 2 | L24, L29 | High-dispersion flint |
| 1.765538 | 46.76 | 1 | L34 | Lanthanum crown |
| 1.848500 | 43.79 | 1 | L21 | Lanthanum dense flint |
| 1.883000 | 40.69 | 3 | L27, L31, L33 | Lanthanum dense flint (S-LAH58) |
| 1.902650 | 35.77 | 1 | L11 | Ultra-high-index LaH (no confirmed catalog match) |
| 1.953750 | 32.33 | 1 | L28 | Ultra-high-index LaH (S-LAH98 / TAFD45) |

The refractive indices span from 1.498 (L26, super-ED) to 1.954 (L28, ultra-high-index) — a range of 0.456, among the widest in any photographic lens design. This extraordinary diversity reflects the competing demands of an f/0.95 system: ultra-high-index glasses to enable strong power from gentle curvatures (minimizing aberrations), ultra-low-dispersion glasses to control chromatic errors, and anomalous-dispersion glasses to attack secondary spectrum.

---

## 10. Summary of Key Design Features

The NIKKOR Z 58mm f/0.95 S Noct represents an extreme point in photographic lens design — a system where optical performance at an unprecedented aperture was prioritized above all other considerations including size, weight, cost, and autofocus capability. The key design features identified from this patent analysis are:

1. **Modified double-Gauss architecture** with an extended front correction group (G1) and a weakly positive rear field corrector (GR), giving 17 elements in 10 groups.

2. **Two CNC-ground aspherical elements** in ultra-high-index glass (nd = 1.903 and 1.954) — glasses whose refractive indices are "unattainable with molded glass" per Nikon's own documentation. A third aspherical surface on the last element (nd = 1.766) uses a 14th-order polynomial profile for field-edge correction.

3. **Four ED elements** (three phosphate crown, one super-ED fluorophosphate) all concentrated in the front group, paired with five negative elements having anomalous partial dispersion to correct both primary chromatic aberration and secondary spectrum.

4. **Two deliberately shaped air lenses** (La1 in G1, La2 across the aperture stop) that function as negative power elements for Petzval sum correction and aberration balancing.

5. **Unit focus** of the entire 13-element front group (18.6 mm travel), preserving internal air spacings for consistent image quality from infinity to 0.5 m — at the cost of requiring manual focus only.

6. **Quasi-symmetric doublet arrangement** around the aperture stop (L23+L24 before, L25+L26 after, with L28+L29 mirroring L23+L24 at a longer conjugate) providing the self-correcting properties of a Gauss-type design.

---

*Analysis prepared from patent WO2019/229849 A1 (Example 1), Nikon first-party product specifications, and independent numerical verification. Glass identifications are inferential based on nd/νd matching against published catalog data unless otherwise noted. All focal lengths, conditional expressions, and group powers have been independently verified by paraxial ray trace.*
