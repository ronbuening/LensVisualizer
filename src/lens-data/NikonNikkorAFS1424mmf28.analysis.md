# Optical Analysis: Nikon AF-S Nikkor 14-24mm f/2.8G ED

## US 7,359,125 B2 — Example 1 (Kimura & Sato, Nikon Corporation)

**Patent filed:** September 7, 2006 · **Granted:** April 15, 2008
**Priority:** JP 2005-285398 (September 29, 2005)
**Inventors:** Yoko Kimura, Haruo Sato
**Production lens:** AF-S Nikkor 14-24mm f/2.8G ED (released August 2007)

---

## 1. Identification of Example 1 as the Production Embodiment

The patent contains three worked examples. Example 1 is identified as the production design on the basis of convergent evidence:

- **Element/group count.** Example 1 yields 15 elements in 11 groups from the patent prescription. Nikon's published specification for the production lens states 14 elements in 11 groups — a one-element discrepancy that likely reflects a minor simplification during final production engineering (e.g., elimination of the very thin E4 cemented layer in the front group, d = 0.3 mm). The 11-group count matches exactly. Examples 2 and 3 both have 16 elements.
- **Focal length and f-number.** Example 1 specifies f = 14.4–23.8 mm at f/2.88, consistent with the marketed 14–24 mm f/2.8.
- **Angle of view.** 2ω = 114.7°–83.8° at wide-to-tele, matching Nikon's published 114°–84° (FX format).
- **Close focus.** Shooting distance of 300 mm (0.3 m); the production lens focuses to 0.28 m, which is plausible given that the patent represents a slightly earlier design stage and the production lens restricts close focus to the 18–24 mm range.
- **Aspherical surfaces.** Three aspherical surfaces on three separate elements, matching Nikon's "3 aspherical lenses including large-diameter PGM elements."
- **ED elements.** Two elements use nd = 1.49782, νd = 82.52 — an ED (Extra-low Dispersion) fluorophosphate glass in the FPL family — matching the "2 ED glass elements" in the published spec.

The paraxial ray trace (ABCD matrix method) confirms the patent's stated values precisely: EFL = 14.400 mm (wide) and 23.800 mm (tele), zoom ratio 1.653×.

---

## 2. Optical Layout and Group Structure

The design is a two-group, negative-leading (retrofocus) zoom. G1 has negative refractive power; G2 has positive refractive power. Zooming is performed by narrowing the air gap between G1 and G2 (d11 decreases from 31.93 mm at wide to 1.20 mm at tele) while the back focal distance increases (from 38.70 mm to 53.97 mm). This is the classic wide-angle zoom cam: both groups move toward the object as the lens zooms from wide to tele, with G2 closing the gap to G1.

### Group Focal Lengths (ABCD thick-lens trace)

| Group | Focal length | Role |
|-------|-------------|------|
| G1 (surfaces 1–11) | −26.27 mm | Negative front group — diverges incoming light to create the retrofocus geometry necessary for a long back focal distance |
| G2 (surfaces 12–27) | +42.65 mm | Positive rear group — converges light to form the image; contains the aperture stop and focusing mechanism |

The ratio fw/f2 = 14.4 / 42.65 = 0.338, satisfying the patent's conditional expression (3): 0.25 < fw/f2 < 0.5. This balance ensures adequate back focal distance for the SLR mirror box while keeping aberrations in check.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Negative Front Group (6 elements, 5 groups)

**Element 1 (surfaces 1–2): Negative meniscus, convex to object**
Glass: nd = 1.80400, νd = 46.58 → **S-LAH65** (OHARA); six-digit code 804/466.
Thick-lens focal length: **−91.3 mm**.
This is a large-diameter lanthanum-crown meniscus serving as the first field-flattening element. Its high index (1.804) reduces the surface curvatures needed, keeping Petzval contributions manageable despite the large clear aperture. It acts as a gentle diverging element, beginning to spread the wide-angle ray bundle while controlling the tangential/sagittal field balance.

**Element 2 (surfaces 3–4A): Negative meniscus, convex to object — 1× aspherical**
Glass: nd = 1.67790, νd = 55.34 → **S-BAH11** (OHARA); code 678/553.
Thick-lens focal length: **−71.1 mm**.
Surface 4A is the first aspherical surface, with conic constant κ = 0.0913 (K = −0.9087, nearly paraboloidal). The aspherical departure on this surface is the primary corrector for field curvature and distortion across the ultra-wide field. The moderate-index barium crown glass is likely a PGM (Precision Glass Moulding) candidate — consistent with Nikon's marketing reference to "large-diameter PGM elements" in the front group. The polynomial coefficients are small (C4 ≈ −5.12 × 10⁻⁷), indicating that the conic term does most of the work, with higher-order terms providing fine correction.

**Elements 3 + 4 (surfaces 5–7A): Cemented doublet (J1) — negative meniscus pair**
E3 glass: nd = 1.74100, νd = 52.67 → **S-LAH53** (OHARA); code 741/527.
E4 glass: nd = 1.55389, νd = 38.09 → **S-TIM25** (OHARA); code 554/381.
Combined thick-lens focal length: **−60.3 mm** (E3 individually: −51.9 mm; E4: +357.6 mm).
Surface 7A is the second aspherical surface, with κ = −6.3795 (K = −7.380, a strong hyperboloid). This is the most aggressive asphere in the design, with large C4 (4.22 × 10⁻⁵) indicating substantial departure from the base sphere. The cemented interface between E3 (lanthanum crown, νd = 52.67, lower dispersion) and E4 (titanium flint, νd = 38.09, higher dispersion) provides chromatic correction within the front group — essential because the front group's strong negative power would otherwise introduce severe lateral chromatic aberration. The aspherical exit surface controls sagittal coma flare, a historically difficult aberration in retrofocus ultra-wide-angle designs, as noted in Nikon's own "Thousand and One Nights" series.

**Element 5 (surfaces 8–9): Biconcave negative — ED glass**
Glass: nd = 1.49782, νd = 82.52 → **ED glass (FPL family, OHARA)**; six-digit code 498/825.
Thick-lens focal length: **−56.1 mm** (originally misreported as −56.2 mm; corrected via thick-lens trace).
This is the first of two ED elements. The patent values (nd = 1.49782, νd = 82.52) are close to but do not precisely match any single current OHARA catalog entry; S-FPL52 (nd = 1.49700, νd = 81.54) is the nearest standard offering, and the glass may represent a proprietary Nikon-specified melt or an older catalog vintage. Positioned at the rear of G1 where the ray bundle is strongly diverging, it provides negative power with minimal primary chromatic contribution — its very high Abbe number (82.5) means it introduces far less dispersion per unit of refractive power than a conventional flint glass would. Its anomalous partial dispersion (ΔPgF ≈ +0.038) also helps control secondary spectrum when paired with the normal-dispersion positive element E6. The biconcave shape (R8 < 0, R9 > 0) yields the maximum negative power per unit thickness, keeping the element thin.

**Element 6 (surfaces 10–11): Biconvex positive (weakly curved rear)**
Glass: nd = 1.80440, νd = 39.59 → **S-LAH66** (OHARA); code 804/396.
Thick-lens focal length: **+48.1 mm**.
This is the sole positive element in G1. It partially counterbalances the accumulated negative power, bending the diverging ray bundle back toward the axis before the light crosses the zoom gap. Its high-index, high-dispersion lanthanum glass also serves as the chromatic counterpart to E5's ED glass — the positive power in a high-dispersion material, paired with the negative ED element, creates an achromatizing sub-unit within G1.

### 3.2 Group 2 — Positive Rear Group (9 elements, 6 groups)

The patent describes G2's internal structure as: **L11** (first positive lens component) → **Stop** → **L12** (second positive lens component) → **L13** (negative lens), followed by additional correction elements.

**Elements 7 + 8 (surfaces 12–14): Cemented doublet (J2) — L11, the focusing component**
E7 glass: nd = 1.83481, νd = 42.72 → **S-LAH55** (OHARA); code 835/427.
E8 glass: nd = 1.62374, νd = 47.04 → **S-BSM81** (OHARA); code 624/470.
Combined thick-lens focal length: **+80.3 mm** (E7: −54.9 mm; E8: +32.1 mm).
E7 is a negative meniscus convex to the object; E8 is a positive element with a nearly flat rear surface (R = 611.6 mm). Together they form L11, the internal focusing component. Focusing is performed by translating L11 along the optical axis: at wide/infinity, d14 = 5.86 mm; at wide/close (300 mm), d14 = 1.43 mm — L11 moves toward the image by approximately 4.4 mm. The patent states that focusing via L11 minimizes variation in curvature of field during close-focus operation. The Abbe number ratio νdn/νdp = 42.72 / 47.04 = 0.908, satisfying conditional expression (4): 0.25 < νdn/νdp < 0.95.

**Aperture Stop (surface STO)**
Located between L11 and L12 with a 1.67 mm air space ahead of it. The stop diameter at f/2.88 defines the entrance pupil position.

**Element 9 (surfaces 16–17): Positive meniscus, convex to image — L12**
Glass: nd = 1.51680, νd = 64.10 → **S-BSL7** (OHARA); code 517/641. This is optically equivalent to Schott N-BK7.
Thick-lens focal length: **+110.8 mm**.
L12 is a gently positive meniscus with its convex surface facing the image (R16 = −265.5, R17 = −47.3). Its moderate power and common BK7-type glass make it an inexpensive, easily manufactured element. Its primary role is to provide positive power near the stop, contributing to spherical aberration correction by balancing the ray-bending distribution symmetrically about the iris.

**Element 10 (surfaces 18–19): Biconcave negative — L13**
Glass: nd = 1.83481, νd = 42.72 → **S-LAH55** (OHARA); code 835/427 (same glass as E7).
Thick-lens focal length: **−27.7 mm**.
This is the strongest single element in the entire system. The patent describes it as the "negative lens L13" and states that making it biconcave is critical for correcting sagittal field curvature and sagittal coma. Its placement at a large separation from L12 (D1 = 9.07 mm) pushes the principal point of G2 toward the object, which is essential for securing adequate zoom working distance and keeping the exit pupil distant from the image plane — an important consideration for digital sensors that are sensitive to the angle of incidence of light.

**Element 11 (surfaces 20–21): Biconvex positive**
Glass: nd = 1.57099, νd = 50.80 → **S-BAL42** (OHARA); code 571/508.
Thick-lens focal length: **+42.4 mm**.
A moderately powered biconvex element that works with E10 and E9 to form a triplet-like correction system around the stop. It provides positive power to counterbalance E10's strong divergence while contributing to coma correction.

**Elements 12 + 13 (surfaces 22–24): Cemented doublet (J3) — chromatic corrector with ED glass**
E12 glass: nd = 1.772789, νd = 49.45; six-digit code 773/495. **Best match uncertain** — the patent values do not precisely match any current OHARA catalog entry. The glass is in the lanthanum-crown family based on its high index and moderate Abbe number.
E13 glass: nd = 1.49782, νd = 82.52 → **ED glass (FPL family, OHARA)** — same glass as E5, ED element #2.
Combined thick-lens focal length: **+48.6 mm** (E12: −56.9 mm; E13: +26.3 mm).
This is the primary achromatic corrector in G2. E12 is a negative meniscus convex to the object, cemented to E13, a biconvex positive ED element. The large Abbe number difference (Δνd = 33.1) provides strong longitudinal chromatic aberration correction. The ED glass carries the positive power with very low dispersion, while the high-index crown carries negative power with higher dispersion — the classic achromat configuration. This doublet is responsible for ensuring that the focal shift between d-line and g-line remains small across the zoom range.

**Elements 14 + 15 (surfaces 25–27A): Cemented doublet (J4) — final corrector with aspherical surface**
E14 glass: nd = 1.80610, νd = 40.94 → **S-LAH58** (OHARA); code 806/409.
E15 glass: nd = 1.58913, νd = 61.18 → **S-BAL35** (OHARA); code 589/612.
Combined thick-lens focal length: **+6579 mm** (essentially afocal — a corrector plate). E14: −25.7 mm; E15: +26.6 mm.
Surface 27A is the third and final aspherical surface, with κ = 6.0164 (K = +5.016, an oblate ellipsoid). The patent notes that "the most image side lens surface in the second lens group G2 is an aspherical surface" and that placing the asphere as close to the image plane as possible is most effective for correcting upper coma and distortion. This nearly zero-power doublet functions purely as an aberration corrector — a field-flattening/coma-trimming plate at the very end of the optical path. Its essentially neutral focal length means it contributes no first-order power, only higher-order corrections.

---

## 4. Aspherical Surfaces

The design uses three aspherical surfaces, each on a different element. All three are in the front group (G1) or at the extreme rear of G2, placing them far from the aperture stop where they can most effectively influence field-dependent aberrations.

| Surface | Element | Location | κ (patent) | K (standard) | Conic type | Primary correction role |
|---------|---------|----------|-----------|-------------|-----------|----------------------|
| 4A | E2 rear | G1 | 0.0913 | −0.909 | Near-paraboloid | Field curvature, distortion across the ultra-wide field |
| 7A | E4 rear | G1 (cemented exit) | −6.380 | −7.380 | Strong hyperboloid | Sagittal coma flare, higher-order field aberrations |
| 27A | E15 rear | G2 (last surface) | 6.016 | +5.016 | Oblate ellipsoid | Upper coma, residual distortion at telephoto end |

The conic constant convention in this patent uses κ in the sag formula Z(y) = (y²/R) / [1 + √(1 − κ(y/R)²)] + C4y⁴ + ⋯, where κ = 1 + K in the standard (1+K) convention. Thus κ = 1 corresponds to a sphere (K = 0).

Surface 7A is by far the most aggressive asphere: its K = −7.38 means the surface departs strongly from spherical, flattening rapidly at the rim. This is combined with a large C4 coefficient (4.22 × 10⁻⁵), which dominates the polynomial contribution at the clear aperture of the cemented pair. The patent's emphasis on PGM (Precision Glass Moulding) elements in the front group aligns with the manufacturing approach for surfaces 4A and 7A, which are on moderate-index glasses (nd = 1.678 and 1.554) — both compatible with PGM processes, unlike the high-index lanthanum crowns.

---

## 5. Glass Selection and Material Strategy

The design uses 13 distinct glass types, all identifiable as OHARA catalog glasses (with two exceptions noted below). This is consistent with Nikon's long-standing preference for OHARA as their primary glass supplier.

### Glass Census

| Glass code | OHARA designation | Elements | nd | νd | Category |
|-----------|------------------|----------|------|------|---------|
| 804/466 | S-LAH65 | E1 | 1.804 | 46.6 | Lanthanum crown (high-index) |
| 678/553 | S-BAH11 | E2 | 1.678 | 55.3 | Barium crown |
| 741/527 | S-LAH53 | E3 | 1.741 | 52.7 | Lanthanum crown |
| 554/381 | S-TIM25 | E4 | 1.554 | 38.1 | Titanium flint |
| 498/825 | FPL family (see note) | E5, E13 | 1.498 | 82.5 | Fluorophosphate — **ED glass** |
| 804/396 | S-LAH66 | E6 | 1.804 | 39.6 | Lanthanum crown (high-dispersion) |
| 835/427 | S-LAH55 | E7, E10 | 1.835 | 42.7 | Lanthanum crown (very high-index) |
| 624/470 | S-BSM81 | E8 | 1.624 | 47.0 | Barium dense flint |
| 517/641 | S-BSL7 | E9 | 1.517 | 64.1 | Borosilicate crown (BK7 equiv.) |
| 571/508 | S-BAL42 | E11 | 1.571 | 50.8 | Barium crown |
| 773/495 | Uncertain (see note) | E12 | 1.773 | 49.5 | Lanthanum crown family |
| 806/409 | S-LAH58 | E14 | 1.806 | 40.9 | Lanthanum crown |
| 589/612 | S-BAL35 | E15 | 1.589 | 61.2 | Barium crown |

**Note on ED glass (E5, E13):** The patent values nd = 1.49782, νd = 82.52 are close to but do not precisely match any single current OHARA catalog entry. S-FPL52 (nd = 1.49700, νd = 81.54) is the nearest standard offering. The glass may represent a proprietary Nikon-specified melt or an older catalog vintage that has since been renumbered or discontinued.

**Note on E12 glass:** The patent value nd = 1.772789, νd = 49.45 (code 773/495) does not precisely match any current OHARA catalog entry. The closest candidate is in the lanthanum-crown family, but a confident catalog assignment cannot be made without Δnd < 0.001 and Δνd < 0.1 tolerances being met.

The design is dominated by lanthanum crowns (7 of 15 elements), which provide the high refractive index needed to keep surface curvatures moderate in a fast, ultra-wide-angle system. The two ED elements are strategically placed — one in each group — to control chromatic aberration on both sides of the stop.

No anomalous partial dispersion (APD) behavior is claimed in the patent. The APD status for E5 and E13 is marked as "inferred" in the data file based on the well-known positive ΔPgF anomaly inherent to fluorophosphate ED glasses.

---

## 6. Focusing Mechanism

Focusing is performed by internal focus (IF) — specifically, by translating L11 (the cemented doublet E7+E8, surfaces 12–14) along the optical axis. The patent's variable-distance table shows three focus states:

| Condition | d11 (zoom gap) | d14 (focus gap behind L11) | Bf |
|-----------|----------|---------|------|
| Wide / ∞ | 31.93 | 5.86 | 38.70 |
| Wide / 300 mm | 36.36 | 1.43 | 38.70 |
| Tele / ∞ | 1.20 | 5.86 | 53.97 |
| Tele / 300 mm | 5.21 | 1.85 | 53.97 |

At wide angle, focusing from infinity to 300 mm moves L11 rearward (toward the image) by approximately 4.4 mm, changing d14 from 5.86 to 1.43 mm and d11 from 31.93 to 36.36 mm — the gap before L11 opens while the gap after it closes, confirming rearward translation. At telephoto, the focus travel is similar (d14 changes from 5.86 to 1.85 mm, a 4.01 mm shift). The back focal distance (Bf) remains constant during focus — only d11 and d14 change — confirming that the overall barrel length does not change with focusing, consistent with Nikon's IF designation.

Variable gap conservation: d11 + d14 = 37.79 mm (wide), 22.23 mm (mid), 7.06 mm (tele) — exactly conserved between infinity and close focus at each zoom position.

The choice of L11 as the focusing group is significant: it is a lightweight cemented doublet positioned immediately ahead of the aperture stop, where ray heights are moderate. Moving it produces relatively small changes in curvature of field (as the patent notes), and its small mass enables fast autofocus via the Silent Wave Motor.

---

## 7. Zoom Mechanism

Zooming changes the air gaps d11 (between G1 and G2), d14 (within G2), and Bf (back focal distance):

| Position | f (mm) | 2ω (°) | d11 (mm) | d14 (mm) | Bf (mm) |
|----------|--------|--------|----------|----------|---------|
| Wide (W) | 14.4 | 114.7 | 31.93 | 5.86 | 38.70 |
| Mid (M) | 18.0 | — | 16.37 | 5.86 | 44.55 |
| Tele (T) | 23.8 | 83.8 | 1.20 | 5.86 | 53.97 |

Both G1 and G2 translate during zoom, but in opposite directions. The inter-group gap (d11) collapses from 31.93 mm to just 1.20 mm, while Bf increases from 38.70 mm to 53.97 mm. The d14 gap (between L11 and the stop) remains constant at infinity focus across all zoom positions, indicating that the focusing group L11 maintains a fixed position relative to the stop during zooming. No groups exhibit reversing (non-monotonic) motion.

---

## 8. Verification of Patent Conditional Expressions

All four conditional expressions were independently verified via ABCD matrix ray trace:

| Expression | Definition | Computed | Patent stated | Satisfied? |
|-----------|-----------|---------|-------------|-----------|
| (1): 0.065 < D1/D2 < 0.3 | D1 = 9.074 mm, D2 = 89.55 mm | **0.1013** | 0.101 | ✓ |
| (2): −1.0 < D1/f1 ≤ −0.27 | f1 = −26.27 mm | **−0.3455** | −0.345 | ✓ |
| (3): 0.25 < fw/f2 < 0.5 | f2 = +42.65 mm | **0.3376** | 0.337 | ✓ |
| (4): 0.25 < νdn/νdp < 0.95 | L11 cemented: 42.72/47.04 | **0.9082** | 0.91 | ✓ |

---

## 9. Design Philosophy and Historical Context

The AF-S Nikkor 14-24mm f/2.8G ED was released alongside the Nikon D3 and AF-S 24-70mm f/2.8G ED in August 2007, forming Nikon's "holy trinity" of professional f/2.8 zooms for the new FX-format era. As noted in Nikon's own Thousand and One Nights series (Tale 90), the release of the D3 and these lenses marked Nikon's commitment to full-frame digital sensors after years of focusing on the DX format.

The patent's inventors — Yoko Kimura and Haruo Sato — are prominent Nikon optical designers. Sato is a co-author of the Thousand and One Nights series itself and designed numerous landmark Nikkor lenses.

The design achieves what the patent abstract calls "a wide angle of view, a fast aperture ratio with an f-number of about 2.8, a high zoom ratio, and high optical performance, and is easy to be manufactured." The key insight is the avoidance of aspherical surfaces on the large-diameter front element — a departure from prior designs like the one in JP 2001-166206. Instead, the aspherics are placed on smaller, easier-to-manufacture elements deeper in the optical system (E2 and E4 in G1, E15 at the rear of G2), where PGM or composite molding processes can be applied cost-effectively.

---

## 10. Data File Notes

### Semi-diameter methodology

The patent does not provide semi-diameters. SDs were estimated by tracing paraxial marginal and chief rays at both wide (2ω = 114.7°, f/2.88) and tele (2ω = 83.8°, f/2.88) positions. The maximum combined beam footprint (marginal + chief ray heights) at each surface was taken with ~8% mechanical clearance, then constrained by the renderer's validation rules (sd/|R| < 0.90, element SD ratio ≤ 1.25, cross-gap sag clearance). For the deep meniscus front elements (E1, E2), the sd/|R| and element ratio constraints limit the rendered SD significantly below the physical clear aperture of the production lens (~49 mm front element radius). This is an inherent limitation of the renderer for ultra-wide retrofocus designs with extreme meniscus elements.

### Glass identification uncertainties

Two glass types lack confident catalog matches: the ED glass (nd = 1.49782, νd = 82.52, used in E5 and E13) and the E12 glass (nd = 1.772789, νd = 49.45). Both are identified to the family level (fluorophosphate and lanthanum crown, respectively) but may represent proprietary Nikon-specified melts or older catalog vintages.

### Aspherical coefficient conversion

The patent uses κ in the sag formula where κ = 1 + K (standard conic convention). All coefficients in the data file use the standard K convention: K = κ − 1. The polynomial coefficients (A4 through A14) correspond directly to the patent's C4 through C14 with no conversion needed.

---

## 11. Summary Table

| Parameter | Value |
|-----------|-------|
| Configuration | 15 elements / 11 groups, 2-group negative-lead zoom |
| Focal length | 14.4–23.8 mm (marketed as 14–24 mm) |
| Maximum aperture | f/2.88 (marketed as f/2.8) |
| Field of view | 114.7°–83.8° (full frame) |
| Zoom ratio | 1.65× |
| Aspherical surfaces | 3 (on elements E2, E4, E15) |
| ED elements | 2 (E5 and E13, FPL family) |
| Focus type | Internal focus via L11 (E7+E8 cemented doublet) |
| Close focus | 300 mm (patent); 280 mm (production, at 18–24 mm) |
| G1 focal length | −26.27 mm |
| G2 focal length | +42.65 mm |
| Glass supplier | OHARA (all types identified to family level; 2 uncertain catalog matches) |
| Aperture blades | 9, rounded (production spec) |
