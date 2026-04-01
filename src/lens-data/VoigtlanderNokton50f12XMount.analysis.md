# Voigtländer NOKTON 50mm F1.2 — X-Mount

## Patent & Product Identification

**Patent:** JP 2025-058577 A (filed 2023-09-28, published 2025-04-09)
**Applicant:** Cosina Co., Ltd. (Nagano, Japan)
**Inventor:** Yūki Shibata (柴田 裕輝)
**Example used:** Example 1 (実施例 1) — all-spherical, 9 elements in 8 groups

**Product:** Voigtländer NOKTON 50mm F1.2, Fujifilm X-Mount
**Release:** September 2023

### Production Design Identification

The patent contains three numerical examples. Example 1 is identified as the production design for the X-Mount lens on the following convergent evidence:

- **Element/group count:** 9 elements in 8 groups, matching the manufacturer specification exactly. Examples 2 and 3 have different group structures (Example 2: 9 elements in 7 groups with a cemented G3; Example 3: 10 elements in 8 groups with a cemented triplet in G2 and a different focal length).
- **All-spherical construction:** Example 1 uses no aspherical surfaces, consistent with Cosina's product description: "employing spherical elements." Example 2 introduces an aspherical surface on surface i = 1.
- **Focal length and format:** f = 48.5 mm at F/1.23 with ω = 16.28° half-field, yielding a 32.6° full angle of view — the manufacturer states 32.5°. The APS-C image circle (≈ 28.2 mm diagonal for the 23.5 × 15.6 mm Fujifilm X-Trans sensor) with ω ≈ 16.3° is fully consistent.
- **Extension system:** The variable spacing table shows only the object distance (ZD0) and back focal distance (ZD18) changing, confirming unit focusing (whole-lens extension), matching Cosina's description of an "extension system."
- **Article 30 grace period claim:** The patent filing specifically invokes Japan Patent Law Article 30(2), citing Cosina's website publication of September 10, 2023 — the exact period of the X-Mount product announcement.

Example 3 (f = 72.8 mm, F/1.23) is a longer focal-length variant that may correspond to a future product or an internal design study.

---

## Optical Layout

The lens follows what Cosina describes as a "Sonnar-type formula with asymmetrical front and rear lens groups." The optical system consists of three functional groups arranged around a central aperture stop:

**Group G1 (Front, Gf):** Five air-spaced singlets — three positive meniscus elements (L11, L12, L13) followed by two negative meniscus elements (L14, L15). All elements are convex toward the object. G1 has a long focal length (ff ≈ 302 mm) and serves as a collective front group that strongly converges the on-axis marginal beam while maintaining relatively low individual surface powers. According to the patent's real ray trace at f/1.23, the marginal ray height drops from Hh = 19.75 mm at surface 1 to Hs = 10.54 mm at surface 10 — a ratio Hs/Hh = 0.53, satisfying the patent's Condition 1 ([Hs/Hh] < 0.65). An independent paraxial verification yields a height of 10.87 mm at surface 10, about 3% higher than the patent value; this discrepancy is expected because at f/1.23 the marginal ray incidence angles exceed 21° at the front surface, where the paraxial (small-angle) approximation begins to overestimate ray heights. This strong beam narrowing through G1 is the defining characteristic of the design; it permits the rear groups and the aperture stop to be physically small relative to the entrance pupil diameter.

**Aperture Stop (STO):** Positioned in the air gap between G1 and G2, at a distance of 30.25 mm from the first lens surface (7.54 mm after the last surface of L15). The stop semi-diameter is approximately 10.4 mm — less than 53% of the entrance pupil half-diameter (19.75 mm). The 12-blade iris diaphragm sits in this mechanically compact location.

**Group G2 (Rear front):** A cemented doublet (J21) comprising a negative meniscus element (L21) bonded to a biconvex element (L22). G2 has a combined focal length of approximately +46 mm and provides color correction and field curvature control in the post-stop space.

**Group G3 (Rear):** Two air-spaced singlets — a biconvex positive element (L31, nearly plano-convex with R₁ ≈ 2708 mm) followed by a concave-to-object negative meniscus (L32). G3 provides final power and field correction.

The combined rear group (Gr = G2 + G3) has a focal length fr ≈ 29.4 mm, giving fr/f ≈ 0.61. This means the rear group carries roughly 1.65× the total system power, while the front group acts as a long-focal-length collector. The rear principal plane of the complete system is shifted well forward of the physical lens, producing a compact total track: TTL = 65.0 mm for a 48.5 mm focal length (TTL/f = 1.34).

---

## Aspherical Surfaces

**Example 1 contains no aspherical surfaces.** All nine elements use conventionally polished spherical surfaces, and no aspherical coefficient table appears in the patent for this example.

This is confirmed by Cosina's marketing material, which explicitly describes the X-Mount lens as "employing spherical elements." The choice to use an all-spherical design is notable for a lens of this speed (f/1.2) and reflects Cosina's manufacturing philosophy and cost optimization for this product segment.

By contrast, Example 2 in the same patent introduces one aspherical surface on the front face of L11 (surface i = 1A), with conic constant K = 0 and coefficients A4 = −2.11597 × 10⁻⁶, A6 = −1.16190 × 10⁻⁹, and A8 = −1.93368 × 10⁻¹². That aspherical surface corresponds to a design variant that may serve the VM-mount (Leica M-mount) product line, which Cosina markets separately as the "NOKTON 50mm F1.2 Aspherical" with 8 elements in 6 groups and four aspherical surfaces. The VM-mount product and Example 2 differ in element count and group structure, so Example 2 may represent an intermediate design study rather than a direct match to the VM product.

---

## Glass Types and Identification

The design uses six distinct glass types. All identifications below are based on matching the patent's nd and νd values against published catalog data; residuals are noted where the match is not exact.

### Glass 1: nd = 1.72916, νd = 54.67 — Used in L11, L12, L13

**Probable identification:** OHARA S-LAH66 (catalog: nd = 1.72916, νd = 54.68)
**Glass code:** 729/547
**Residuals:** Δnd = 0.00000, Δνd = −0.01 (within melt tolerance)
**Family:** Dense lanthanum crown (LaK). A high-index, low-dispersion glass. The S-prefix confirms it is an eco-friendly (lead- and arsenic-free) conventional-polish type.

This glass is used for all three positive meniscus elements in G1. Its combination of high refractive index (enabling steep meniscus curvatures without excessive surface power) and low dispersion (νd ≈ 55) is central to the design's chromatic correction strategy. The patent's Condition 2 requires νdp > νdn (positive-element Abbe numbers must exceed negative-element Abbe numbers in G1), and S-LAH66's νd of 54.67 comfortably exceeds the negative elements' values of 27.74 and 26.58.

Using the same glass for all three positive elements simplifies manufacturing logistics significantly — Cosina can source a single melt lot and process all three blanks identically.

### Glass 2: nd = 1.74077, νd = 27.74 — Used in L14

**Probable identification:** OHARA S-TIH13 (catalog: nd = 1.74077, νd = 27.79) or HIKARI E-TIH13
**Glass code:** 741/277
**Residuals:** Δnd = 0.00000, Δνd = −0.05 (within tolerance; νd specification is ±0.5% at Grade 1)
**Family:** Titanium-containing flint (TiF). A high-dispersion glass used as a chromatic corrector in the front group.

### Glass 3: nd = 1.76182, νd = 26.58 — Used in L15

**Probable identification:** OHARA S-TIH14 (catalog: nd = 1.76182, νd = 26.52) or equivalent
**Glass code:** 762/266
**Residuals:** Δnd = 0.00000, Δνd = +0.06 (within tolerance)
**Family:** Titanium-containing heavy flint (TiSF). Slightly higher refractive index and lower Abbe number than Glass 2, providing additional dispersion correction at the rear of G1 where the beam diameter is smallest.

### Glass 4: nd = 1.80809, νd = 22.76 — Used in L21

**Probable identification:** OHARA S-TIH53 (catalog: nd = 1.80809, νd = 22.76)
**Glass code:** 808/228
**Residuals:** Δnd = 0.00000, Δνd = 0.00 (exact match)
**Family:** Titanium-containing extra-heavy flint (TiSF). An extremely high-dispersion glass (νd < 23) used as the negative element of the G2 cemented doublet. This glass provides strong chromatic leverage against its cemented partner.

### Glass 5: nd = 1.90043, νd = 37.37 — Used in L22 and L31

**Probable identification:** Uncertain — no exact match found in major catalogs
**Glass code:** 900/374
**Family:** This glass falls in the LASF (dense lanthanum flint) region of the nd–νd diagram. At nd ≈ 1.90 with νd ≈ 37, it occupies a gap in the standard catalogs: OHARA S-LAH58 (883/408, nd ≈ 1.883, νd ≈ 40.8) lies below and to the right, while OHARA S-LAH95 (904/313, nd ≈ 1.904, νd ≈ 31.3) lies above and to the left. OHARA S-LAH93 (905/350) is also distant. No matching glass was found in the OHARA, Schott, HOYA, or CDGM standard catalogs. The glass may be sourced from HIKARI (a Japanese optical glass manufacturer with some types not available from the larger suppliers), Sumita, or could be a custom-specified melt. Note that this same glass type also appears in Examples 2 and 3 of the patent in identical roles, confirming it is a real production glass rather than a design-space placeholder.

This glass is used in two elements: the positive half of the G2 doublet (L22) and the positive element of G3 (L31). Its very high refractive index enables strong curvatures on relatively small elements (both L22 and L31 sit behind the stop where beam diameters are 10–15 mm).

### Glass 6: nd = 1.65412, νd = 39.68 — Used in L32

**Probable identification:** OHARA S-TIM25 (catalog: nd = 1.65412, νd = 39.68) or equivalent
**Glass code:** 654/397
**Residuals:** Δnd = 0.00000, Δνd = 0.00 (exact match if S-TIM25)
**Family:** Titanium-containing medium flint (TiM). A moderate-index, moderate-dispersion flint used as the final negative field-flattening element.

### Summary Table

| Element(s) | nd | νd | Glass Code | Probable ID | Family |
|---|---|---|---|---|---|
| L11, L12, L13 | 1.72916 | 54.67 | 729/547 | S-LAH66 | Dense La crown |
| L14 | 1.74077 | 27.74 | 741/277 | S-TIH13 | Ti flint |
| L15 | 1.76182 | 26.58 | 762/266 | S-TIH14 | Ti heavy flint |
| L21 | 1.80809 | 22.76 | 808/228 | S-TIH53 | Ti extra-heavy flint |
| L22, L31 | 1.90043 | 37.37 | 900/374 | Uncertain (LASF type) | Dense La flint |
| L32 | 1.65412 | 39.68 | 654/397 | S-TIM25 | Ti medium flint |

---

## Element-by-Element Analysis

### L11 — Positive Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | i = 1, 2 |
| R₁ / R₂ | +53.73 / +138.48 mm |
| Center thickness | 4.26 mm |
| Glass | nd = 1.72916, νd = 54.67 (S-LAH66) |
| Thick-lens focal length | +117.9 mm |
| Shape | Positive meniscus, convex to object |

L11 is the front element and physically the largest in the system. The marginal ray enters at a height of 19.75 mm (radius), so the on-axis beam alone requires a clear aperture of approximately 39.5 mm diameter. For full-field illumination at the maximum half-angle (ω = 16.28°), the chief ray adds further height, meaning the theoretical full-field clear aperture requirement exceeds the lens barrel diameter of 63.9 mm; significant natural vignetting at the field corners is expected at full aperture — a standard characteristic of fast lenses. L11's relatively gentle curvatures (R₁ = 53.73 mm) begin the process of bending incoming parallel rays toward convergence while introducing minimal spherical aberration. The meniscus form with both radii positive means the element acts as a weak positive lens with strong curvature asymmetry, reducing the refraction angle at each surface.

### L12 — Positive Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | i = 3, 4 |
| R₁ / R₂ | +36.67 / +52.00 mm |
| Center thickness | 3.67 mm |
| Glass | nd = 1.72916, νd = 54.67 (S-LAH66) |
| Thick-lens focal length | +155.0 mm |
| Shape | Positive meniscus, convex to object |

L12 continues the convergence begun by L11. The patent specifically notes that the object-side radii of the three positive elements decrease monotonically: R₁(L11) = 53.73 > R₁(L12) = 36.67 > R₁(L13) = 26.68. Similarly, the image-side radii decrease: R₂(L11) = 138.48 > R₂(L12) = 52.00. This progressive tightening of curvatures distributes the refractive bending across multiple surfaces, minimizing the spherical aberration contribution from any single surface — a classic design strategy for fast lenses.

### L13 — Positive Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | i = 5, 6 |
| R₁ / R₂ | +26.68 / +85.50 mm |
| Center thickness | 6.51 mm |
| Glass | nd = 1.72916, νd = 54.67 (S-LAH66) |
| Thick-lens focal length | +50.8 mm |
| Shape | Positive meniscus, convex to object |

L13 is the strongest individual element in G1 and the thickest element in the entire system at 6.51 mm. With a focal length of only 50.8 mm — comparable to the system focal length — L13 carries substantial positive power. Its relatively steep front surface (R = 26.68 mm) is the tightest in the positive trio, completing the progressive curvature sequence. The large difference between R₁ and R₂ (26.68 vs. 85.50) gives this element a strongly asymmetric meniscus profile. The 2.98 mm air gap following L13 separates the positive and negative sub-groups within G1 — substantially wider than the 0.15 mm and 0.30 mm gaps between the three positive elements, reflecting the transition in optical function from beam convergence to chromatic correction.

### L14 — Negative Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | i = 7, 8 |
| R₁ / R₂ | +204.14 / +38.68 mm |
| Center thickness | 1.40 mm |
| Glass | nd = 1.74077, νd = 27.74 (S-TIH13) |
| Thick-lens focal length | −64.7 mm |
| Shape | Negative meniscus, convex to object |

L14 is the first negative element and introduces high-dispersion glass into the system. Its flint-type glass (νd = 27.74) combined with the low-dispersion crowns of L11–L13 (νd = 54.67) forms the primary axial color correction mechanism for G1. The element is thin (1.40 mm) and weakly curved on the front face (R = 204.14 mm), becoming more steeply curved on the rear (R = 38.68 mm). This meniscus form means L14 acts primarily on the rear surface, where the marginal ray height has already decreased to about 12.4 mm. L14 begins to diverge the beam, reducing the diameter further as it approaches L15.

### L15 — Negative Meniscus (convex to object)

| Property | Value |
|---|---|
| Surfaces | i = 9, 10 |
| R₁ / R₂ | +47.82 / +14.26 mm |
| Center thickness | 1.20 mm |
| Glass | nd = 1.76182, νd = 26.58 (S-TIH14) |
| Thick-lens focal length | −27.1 mm |
| Shape | Negative meniscus, convex to object |

L15 is the strongest negative element in the system. Its rear surface (R = 14.26 mm) is the most steeply curved in the entire lens and carries the highest individual surface power. This surface is where the marginal beam reaches its minimum height within G1 (Hs ≈ 10.54 mm at surface 10, per the patent). The strongly negative focal length (−27.1 mm) combined with L14's contribution ensures that the beam exits G1 in a diverging state that is then collected by G2 and G3 behind the stop.

L15 uses a slightly denser flint glass than L14, with a marginally lower Abbe number (26.58 vs. 27.74). This provides fine chromatic tuning — the two negative flints are not interchangeable despite their similar properties. The progressive increase in negative-element front curvature (R₁(L14) = 204.14 > R₁(L15) = 47.82) mirrors the positive group's curvature progression, as required by the patent claims.

### L21 — Negative Meniscus, cemented (G2 front)

| Property | Value |
|---|---|
| Surfaces | i = 12, cemented junction at 13 |
| R₁ / R₂ (junction) | +66.00 / +26.13 mm |
| Center thickness | 1.10 mm |
| Glass | nd = 1.80809, νd = 22.76 (S-TIH53) |
| Thick-lens focal length (standalone) | −54.2 mm |
| Shape | Negative meniscus, convex to object |
| Cemented group | J21 (with L22) |

L21 is the negative half of the G2 cemented doublet. Its glass — S-TIH53 with νd = 22.76 — has the highest dispersion in the entire system. When cemented to L22 (νd = 37.37), the Abbe-number difference (Δνd ≈ 14.6) at the cemented interface provides achromatic correction. While this Δνd is modest by classical doublet standards (where Δνd ≈ 30–40 is typical), the design compensates by having the doublet sit in a region of relatively low marginal ray height (10–11 mm), where the absolute chromatic aberration contributions are smaller. The high refractive indices of both glasses (nd > 1.80) serve a different purpose: they allow the doublet to carry its substantial positive power (+46 mm combined focal length) on compact element diameters with manageable spherical aberration.

### L22 — Biconvex, cemented (G2 rear)

| Property | Value |
|---|---|
| Surfaces | Junction at 13, exit at 14 |
| R₁ (junction) / R₂ | +26.13 / −145.01 mm |
| Center thickness | 4.83 mm |
| Glass | nd = 1.90043, νd = 37.37 (LASF type) |
| Thick-lens focal length (standalone) | +24.9 mm |
| Shape | Biconvex (strong front, weak rear) |
| Cemented group | J21 (with L21) |

L22 is the strongest positive element behind the stop, with a standalone focal length of only 24.9 mm. Its biconvex form with a strongly curved front face (R = 26.13 mm, shared with L21 as the cemented junction) and a weakly curved rear (R = −145.01 mm) concentrates most of its power at the front. The nd = 1.90043 glass is the highest-index glass type in the design, enabling this strong curvature on a compact element. The combined G2 doublet has a focal length of +46.2 mm.

### L31 — Biconvex Positive (G3 front)

| Property | Value |
|---|---|
| Surfaces | i = 15, 16 |
| R₁ / R₂ | +2707.72 / −25.97 mm |
| Center thickness | 3.83 mm |
| Glass | nd = 1.90043, νd = 37.37 (LASF type, same as L22) |
| Thick-lens focal length | +28.6 mm |
| Shape | Biconvex, nearly plano-convex (R₁ ≈ 2708 mm, R₂ = −25.97 mm) |

L31 is the main positive power element of G3. The patent describes it as 両凸レンズ (biconvex lens), though the front surface is nearly flat (R = 2707.72 mm — effectively plano), with virtually all the refracting power concentrated on the steeply curved rear surface (R = −25.97 mm). This near-plano-convex form places almost all power on the concave rear surface exiting into air, making L31 the single largest contributor to the system's Petzval sum. This is an unavoidable consequence of needing strong positive power in a compact rear group. The field curvature introduced by L31 is partially compensated by L32, with the remaining balance managed by the front-group negative elements. L31 uses the same very high-index glass as L22, enabling steep curvature on a small-diameter element (estimated clear aperture ≈ 23 mm).

### L32 — Negative Meniscus, concave to object (G3 rear)

| Property | Value |
|---|---|
| Surfaces | i = 17, 18 |
| R₁ / R₂ | −26.07 / −300.00 mm |
| Center thickness | 1.20 mm |
| Glass | nd = 1.65412, νd = 39.68 (S-TIM25) |
| Thick-lens focal length | −43.7 mm |
| Shape | Negative meniscus, concave to object |

L32 is the final element and serves as a field-flattening lens. Its concave-to-object meniscus form (both radii negative, |R₁| < |R₂|) places diverging power close to the image plane. The moderate glass index (nd = 1.654) and the thin construction (1.20 mm) indicate this element's role is primarily to flatten the Petzval surface and control residual astigmatism rather than to contribute significant optical power. The 2.97 mm air gap between L31 and L32 provides the separation needed for independent field correction.

---

## Focusing System

The lens employs **unit focusing** (whole-lens extension). This is confirmed by the patent's variable spacing table for Example 1, which shows only two variable parameters:

| Parameter | Infinity | Close-Focus Evaluation Position |
|---|---|---|
| ZD0 (object distance from surface 1) | ∞ | 369.5 mm |
| ZD18 (back focal distance) | 12.57 mm | 19.36 mm |

No internal air gaps change with focus. The entire optical assembly translates forward when focusing, with the back focal distance increasing by 6.79 mm (= 19.36 − 12.57) at the patent's close-focus evaluation conjugate. This is the simplest possible focusing mechanism: a precision helicoid physically extends the lens barrel, moving all nine elements as a rigid unit.

Cosina describes this as an "extension system" and emphasizes the "all-metal helicoid unit machined and adjusted to a high degree of precision." The unit-focus approach means:

1. **No moving internal groups** — aberration performance is stable across the focus range because the relative element positions never change.
2. **The total track length increases at close focus** — TTL grows from 65.0 mm (infinity) as the lens extends.
3. **The back focal distance increases** — from 12.57 mm at infinity as the barrel moves forward.

**Note on minimum focus distance:** The patent's close-focus data (ZD0 = 369.5 mm, extension = 6.79 mm) represents an aberration evaluation conjugate at approximately 1:7.1 magnification, not the production lens's minimum focus distance. The manufacturer specifies MFD = 0.39 m with maximum magnification 1:6.0. A thin-lens calculation confirms these marketed values are self-consistent: at 1:6 magnification, the total object-to-image conjugate is f × (2 + m + 1/m) ≈ 48.5 × 8.17 ≈ 396 mm ≈ 0.40 m, closely matching the stated 0.39 m. The production lens therefore extends further (approximately 8.1 mm) than the patent's evaluation example shows, reaching the shorter conjugate distance.

---

## Computed Optical Properties

The following values were independently computed via paraxial ray trace (ABCD transfer matrix method) and verified against the patent's stated parameters:

| Property | Computed | Patent Stated | Δ |
|---|---|---|---|
| System EFL | 48.48 mm | 48.50 mm | −0.02 mm |
| Total track (TTL) | 65.0 mm | 65.0 mm | 0.0 |
| Back focal distance (BF) | 12.56 mm | 12.57 mm | −0.01 mm |
| Front group EFL (ff) | 301.5 mm | 302.45 mm | −0.95 mm |
| Rear group EFL (fr) | 29.39 mm | 29.39 mm | 0.00 |
| fr / f | 0.606 | 0.61 | 0.00 |
| F-number (design) | 1.23 | 1.23 | — |
| Half-field angle (ω) | — | 16.28° | — |
| Petzval sum | 0.00451 mm⁻¹ | — | — |
| Petzval radius | −222 mm | — | — |
| Petzval radius / f | −4.58 | — | — |

The design f-number of 1.23 from the patent differs from the marketed f/1.2. This is typical: the marketed value is the nominal commercial designation, while the patent value reflects the actual computed ratio of focal length to entrance pupil diameter. The design EP diameter at f/1.23 is 2 × 19.71 = 39.4 mm, corresponding closely to the patent's Hh = 19.75 mm (the ~0.04 mm difference reflects the real-ray vs paraxial distinction). At f/1.2, the EP diameter would be 40.4 mm — about 2.5% larger. The production lens may open slightly wider than the patent example, or the f/1.2 designation may follow the industry convention of rounding to the nearest standard value.

All five of the patent's optical conditions are satisfied:

| Condition | Expression | Value | Limit | Status |
|---|---|---|---|---|
| 1 | Hs/Hh | 0.53 | < 0.65 | Pass |
| 2 | νdp > νdn | 54.67 > 27.74, 26.58 | — | Pass |
| 3 | BF/TTL | 0.19 | < 0.30 | Pass |
| 4 | fr/f | 0.61 | 0.50 – 0.75 | Pass |
| 5 | TTL/f | 1.34 | < 1.45 | Pass |

### Element Focal Length Summary

| Element | Thick-lens fl (mm) | Power character |
|---|---|---|
| L11 | +117.9 | Weak positive |
| L12 | +155.0 | Weak positive |
| L13 | +50.8 | Moderate positive |
| L14 | −64.7 | Moderate negative |
| L15 | −27.1 | Strong negative |
| L21 | −54.2 | Moderate negative |
| L22 | +24.9 | Strong positive |
| G2 (J21 doublet) | +46.2 | Moderate positive |
| L31 | +28.6 | Strong positive |
| L32 | −43.7 | Moderate negative |

---

## Design Philosophy and Aberration Strategy

The NOKTON 50mm F1.2 X-Mount represents Cosina's approach to a fast medium-telephoto lens for APS-C mirrorless cameras: an all-spherical design that prioritizes compact size, manufacturing simplicity, and rendering character over absolute wide-open resolution.

**Spherical aberration control:** The three-element positive meniscus cascade (L11–L13) with progressively tightening curvatures distributes the total beam convergence across six refracting surfaces rather than concentrating it on one or two. This is the fundamental mechanism for controlling spherical aberration without aspherical surfaces. The marginal ray at each positive surface sees a moderate incidence angle rather than a steep one, reducing the higher-order aberration contributions that would otherwise dominate at f/1.2.

**Chromatic correction:** The design uses a two-stage chromatic correction strategy. In G1, the high-Abbe crown glass (νd = 54.67) in the three positive elements is balanced against the low-Abbe flints (νd = 27.74 and 26.58) in the two negative elements, satisfying the patent's Condition 2. Behind the stop, the G2 cemented doublet provides a second stage of achromatic correction using the extreme dispersion of S-TIH53 (νd = 22.76) against the high-index LASF glass. The aberration diagrams in the patent show well-controlled longitudinal chromatic aberration at the d-line focal position.

**Field curvature (Petzval sum):** The computed Petzval sum of 0.00451 mm⁻¹ corresponds to a Petzval radius of −222 mm, or about −4.6× the focal length. For a 48.5 mm lens covering an APS-C image circle (≈ 14.1 mm half-diagonal image height), the uncorrected Petzval sag at the image edge would be approximately 0.45 mm. The patent's aberration diagrams show that astigmatism is used to partially compensate this curvature, with the sagittal and tangential focal surfaces straddling the Petzval surface — a standard approach for fast lenses where full Petzval correction is impractical without anomalous-dispersion elements.

**Compact form factor:** The patent's Condition 5 (TTL/f < 1.45) enforces compactness. At TTL/f = 1.34, the lens achieves a total optical track of only 65 mm for a 48.5 mm focal length. The physical barrel length of 49.0 mm (manufacturer specification) is even shorter, since the last element sits well inside the barrel and the back focal distance extends into the camera body's flange-to-sensor space.

---

## Manufacturer Specifications (Cosina)

| Specification | Value |
|---|---|
| Full designation | Voigtländer NOKTON 50mm F1.2 |
| Mount | Fujifilm X-mount (APS-C) |
| Focal length | 50 mm (75 mm equivalent in full-frame) |
| Maximum aperture | f/1.2 |
| Minimum aperture | f/16 |
| Lens construction | 9 elements in 8 groups |
| Angle of view | 32.5° |
| Aperture blades | 12 |
| Minimum focus distance | 0.39 m |
| Maximum magnification | 1:6.0 |
| Filter size | φ58 mm |
| Dimensions | φ63.9 × 49.0 mm |
| Weight | 290 g |
| Electronic contacts | Yes (Exif, focus check, IBIS) |
| Focus type | Manual (precision helicoid, unit extension) |
