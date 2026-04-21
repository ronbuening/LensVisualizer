# Canon RF 15-35mm f/2.8 L IS USM — Optical Analysis

**Patent:** US 2020/0257181 A1 (Gyoda, Canon Kabushiki Kaisha)
**Published:** August 13, 2020 · **Priority:** JP 2019-021356, February 8, 2019
**Embodiment:** Numerical Example 1 (FIGS. 1A/1B, aberration plots FIGS. 2A/2B)

---

## 1. Patent-to-Production Matching

The production Canon RF 15-35mm f/2.8 L IS USM (released August 2019, item 3682C002) is identified as the implementation of Numerical Example 1 in US 2020/0257181 A1 based on convergent evidence across multiple parameters:

| Parameter | Patent (Example 1) | Canon Production Spec |
|---|---|---|
| Focal length range | 15.45–33.95 mm | 15–35 mm |
| Maximum aperture | f/2.91 (constant) | f/2.8 (constant) |
| Element count | 16 | 16 |
| Group count | 12 | 12 |
| Aspherical elements | 3 (6 asph. surfaces) | 3 |
| UD elements | 2 (nd = 1.497, νd = 81.6) | 2 |
| Half-field angle (wide) | 54.47° | 55.25° (diagonal) |
| Image height | 21.64 mm (half-diagonal) | 21.63 mm (half-diagonal of 36 × 24 mm full-frame sensor: √(36² + 24²)/2) |
| Close focus | Not specified in this example | 0.28 m |
| Image stabilization | B4 decentered orthogonal to axis | 5-stop OIS (CIPA) |
| Mount | Not specified | Canon RF |

The patent prescription is at design scale — the computed EFL at the wide-angle end is 15.451 mm versus the patent's stated 15.45 mm, verified via paraxial ray trace to within 0.01%.

The modest discrepancy between the patent's f/2.91 and the marketed f/2.8 is typical of patent filings. The f/2.91 figure reflects the computed ratio from the paraxial entrance pupil at the specified stop diameter, while f/2.8 is the commercial rounding used in Canon's product designation. The half-field angles and overall lens lengths confirm the wide-to-tele zoom range maps precisely to the 15–35 mm marketing designation.

---

## 2. Optical Architecture

The zoom lens is a five-unit design of the negative-lead (retrofocus) type, arranged object-to-image as:

**B1 (−) → B2 (+) → [SP] → B3 (+) → B4 (−) → [FS] → B5 (+)**

| Unit | Surfaces | f (mm) | Elements | Role |
|---|---|---|---|---|
| B1 | 1–8 | −21.75 | L11, L12, L13, L14 (4 elements, 4 groups) | Negative front diverging group |
| B2 | 9–13 | +73.31 | L21, L22+L23 (3 elements, 2 groups) | Positive variator / **focus unit** |
| SP | 14 | ∞ | — | Fno stop (aperture diaphragm) |
| B3 | 15–17 | +52.20 | L31+L32 (2 elements, 1 group) | Positive relay doublet |
| B4 | 18–21 | −63.99 | L41+L42 (2 elements, 1 group) + FS | Negative IS unit + flare cutting stop |
| B5 | 22–30 | +51.49 | L51, L52+L53, L54, L55 (5 elements, 4 groups) | Positive rear group (PL) |

Total: **16 elements in 12 groups**, matching Canon's published specification exactly.

### 2.1 Zoom Motion

During zooming from wide-angle to telephoto:

- **B1** moves toward the image (rearward).
- **B2 through B5** all move toward the object (forward).
- The **Fno stop SP** moves forward on an independent trajectory, separate from both B2 and B3.
- The **flare cutting stop FS** (surface 21, at the image-side end of B4) narrows its aperture diameter from φ25.93 mm (wide) to φ21.91 mm (tele).

The variable air gaps change as follows:

| Gap | Location | Wide (mm) | Middle (mm) | Tele (mm) |
|---|---|---|---|---|
| d8 | B1 → B2 | 25.32 | 7.72 | 1.50 |
| d13 | B2 → SP | 8.24 | 11.30 | 7.40 |
| d14 | SP → B3 | 13.71 | 5.42 | 0.71 |
| d17 | B3 → B4 | 1.60 | 9.89 | 14.61 |
| d21 | B4(FS) → B5 | 7.04 | 1.27 | −1.05 |
| d30 | BF (B5 → image) | 14.00 | 22.21 | 32.15 |

The overall lens length contracts from 159.58 mm (wide) to 144.99 mm (tele), a reduction of 14.59 mm. The back focal distance grows from 14.00 mm to 32.15 mm. At the wide end, BFD/EFL = 14.00/15.45 = 0.91 — just under unity. While a classic retrofocus prime typically achieves BFD > EFL, this zoom design trades some back focal clearance at 15 mm in order to keep the overall length compact. The 14 mm BFD is shorter than the RF mount's 20 mm flange distance, meaning the rear element (L55) protrudes past the mounting flange into the camera body — a standard technique in RF-mount lenses that exploits the mirrorless system's short flange distance and absent mirror box.

Note the negative d21 value at the telephoto end (−1.05 mm). This indicates that the B5 front vertex physically overlaps the FS position at full telephoto — the flare stop retracts into the gap between B4 and B5. This is mechanically permissible because the FS is a flat aperture (infinite radius) with no axial thickness, and the element semi-diameters in this region are smaller than the B5 front elements, preventing physical collision.

### 2.2 Dual Aperture Stop System

A distinctive feature of this patent is its **dual-stop architecture**:

1. **Fno stop SP** (surface 14): Determines the wide-open f-number across the entire zoom range. Its aperture diameter increases from 16.52 mm (wide) to 26.65 mm (tele) as it tracks the marginal ray bundle.

2. **Flare cutting stop FS** (surface 21): A variable-diameter stop that *narrows* during zooming from wide to tele (φ25.93 → φ21.91 mm). Its purpose is to clip off-axis ray bundles at intermediate image heights that would otherwise cause flare and ghost images — particularly problematic in wide-angle retrofocus designs where the angular spread of off-axis bundles is large.

The flare cutting stop diameter ratio satisfies conditional expression (1): φW/φT = 1.054, within the range 1.01–2.00. The patent's mechanical embodiment (FIGS. 7A–7C) describes a multi-blade iris mechanism driven by a cam cylinder that rotates with the zoom ring.

### 2.3 Data File Treatment of the Flare Cutting Stop

The companion `.data.ts` file omits patent surface 21 (the FS) from the optical prescription. The FS is a flat surface (R = ∞) in air (nd = 1.0), so it contributes no refraction and does not affect paraxial ray tracing or EFL computation. Its variable air gap has been combined with the preceding fixed gap (patent surface 20, d = 3.52 mm) into a single variable gap at data-file surface "20":

| Zoom Position | d20 (fixed) | d21 (FS, variable) | Combined d20′ |
|---|---|---|---|
| Wide | 3.52 | 7.04 | 10.56 |
| Middle | 3.52 | 1.27 | 4.79 |
| Tele | 3.52 | −1.05 | 2.47 |

All combined values are non-negative, satisfying the validator's constraint (rule 8: d ≥ 0). EFL at all three zoom positions was verified computationally to be unchanged after this surface removal (delta < 0.001 mm at each position).

The patent also does not provide close-focus spacing tables. Since B2 is the focus unit (see Section 5), focus changes gaps d8 and d13, but the close-focus values at each zoom position are unknown. All variable-gap pairs in the data file use identical `[d_inf, d_inf]` values, and the focus slider is accordingly inoperative.

---

## 3. Aspherical Surfaces

The design employs **six aspherical surfaces on three elements**:

| Surface | Element | Location | R (mm) | K | Max Departure | Notes |
|---|---|---|---|---|---|---|
| 1\* | L11 front | B1 front | 3000.000 | 0.0 | 3280 μm | Nearly flat; asph. creates negative power |
| 2\* | L11 rear | B1 front | 16.526 | −0.981 | ≥2166 μm (at 75% SD) | Near-paraboloid; extreme conic |
| 3\* | L12 front | B1 | −809.327 | 0.0 | 483 μm | Weakly curved base; moderate departure |
| 4\* | L12 rear | B1 | 91.828 | 0.0 | 1244 μm | Strong positive-departure correction |
| 27\* | L54 front | B5 | −73.669 | 0.0 | 2021 μm | Field curvature / distortion correction |
| 28\* | L54 rear | B5 | −1000.000 | 0.0 | 1071 μm | Nearly flat; combined astigmatism correction |

Aspherical departures computed at the full semi-diameter (effective diameter / 2) relative to a K = 0 spherical base curve. The sag equation follows the standard form:

Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴ + A16·h¹⁶

The patent provides coefficients through A16 for surfaces 1\*, 3\*, and 27\*. The data file's renderer sag equation extends only to A14; the A16 terms are omitted. Maximum sag error from this omission is approximately 3 μm at the rim of surface 1\* — negligible for visualization purposes but noted for completeness.

### 3.1 L11 — Double-Aspherical Front Meniscus (Surfaces 1\*, 2\*)

L11 is the most optically demanding element in the design. Its front surface (R = 3000 mm) is nearly flat but accumulates 3.28 mm of aspherical departure at the rim — this departure alone contributes significant negative refractive power to the front of the system. Without the aspherical polynomial terms, this surface would be essentially a plane window; the aspherical coefficients transform it into a powerful wide-angle corrector.

The rear surface (R = 16.526 mm) carries a conic constant of K = −0.981, making it nearly a paraboloid (K = −1). This is critical: the base sphere at R = 16.526 mm physically cannot reach the full semi-diameter of 18.92 mm, since h/R = 1.145 > 1.0, which means the sag formula with K = 0 would produce a complex (imaginary) result. The near-unity negative conic flattens the surface enough that the argument under the square root remains positive (1 − (1+K)·(h/R)² = 0.975 at full SD). This surface essentially functions as a near-paraboloidal refracting surface — an extremely steep, strongly curved element face that simultaneously provides the bulk of L11's diverging power and controls higher-order spherical aberration in the wide-field marginal zone. Because the K = 0 reference sphere is undefined beyond 75% of the semi-diameter (h > |R|), the aspherical departure of ≥2166 μm reported in the table above is a lower bound computed at 75% SD; the true departure at the full rim is larger but cannot be expressed as a deviation from a standard sphere.

Together, the two surfaces of L11 produce a net focal length of −28.51 mm while spanning the largest clear aperture in the system (∅55 mm effective diameter). The element is made of a barium crown glass (nd = 1.583, νd = 59.4 — identified as OHARA S-BAL42 or its PGM variant L-BAL42) chosen for its moderate refractive index that keeps the surface curvatures from becoming even more extreme, while its reasonable Abbe number limits chromatic contribution from such a large, steeply-powered surface.

### 3.2 L12 — Double-Aspherical Negative Element (Surfaces 3\*, 4\*)

L12 is a biconcave negative element with aspherical surfaces on both faces. The front surface (R = −809 mm) has a weakly curved base with 483 μm of aspherical departure, while the rear (R = 91.8 mm) accumulates 1244 μm. Together they yield a focal length of −96.46 mm — a weaker negative contribution than L11, acting primarily as a field-flattening and distortion-correcting asphere rather than a power element.

The glass is OHARA S-LAH65V (nd = 1.854, νd = 40.4), a high-index lanthanum dense flint. The high refractive index keeps the element thin despite its negative power, and the relatively low dispersion for a dense flint limits chromatic error from the strongly curved rear surface.

### 3.3 L54 — Double-Aspherical Negative Meniscus (Surfaces 27\*, 28\*)

L54 is positioned in the rear group G5, between the cemented doublet D4 and the final positive element L55. Both surfaces are aspherical: the front (R = −73.7 mm) shows 2021 μm of departure, and the rear (R = −1000 mm, nearly flat) shows 1071 μm. The net focal length is −93.22 mm — a weak negative contribution.

This element's role is primarily correction of field curvature, astigmatism, and residual distortion at the image-side of the optical system, where off-axis ray bundles are most spatially separated from the on-axis bundle. Placing aspherical surfaces here gives the designer independent control over field-dependent aberrations without disturbing the axial correction established by the front groups.

The glass is again OHARA S-LAH65V (nd = 1.854, νd = 40.4), identical to L12. The shared glass type between the front and rear aspherical elements suggests manufacturing and inventory efficiency — a practical consideration in production lens design.

---

## 4. Glass Identification and Element Roles

Twelve distinct glass types are used across the 16 elements. All identifications are made by matching the patent's nd/νd values against published glass catalogs (OHARA, HOYA). Residuals are listed where the match is not exact.

### 4.1 Glass Table

| Element | nd | νd | Best Match | Catalog | Δnd | Δνd | Glass Family |
|---|---|---|---|---|---|---|---|
| L11 | 1.58313 | 59.4 | S-BAL42 | OHARA | 0.00000 | 0.02 | Barium crown |
| L12, L54 | 1.85400 | 40.4 | S-LAH65V | OHARA | 0.00000 | 0.02 | Lanthanum dense flint |
| L13 | 1.59522 | 67.7 | S-FPM2 | OHARA | 0.00000 | 0.04 | Fluorophosphate crown |
| L14 | 1.85478 | 24.8 | S-NPH1 | OHARA | 0.00000 | 0.00 | Niobium phosphate heavy flint |
| L21 | 1.84666 | 23.9 | S-TIH53 | OHARA | 0.00000 | 0.02 | Titanium dense flint |
| L22, L41, L55 | 1.92286 | 20.9 | S-NPH2 | OHARA | 0.00000 | 0.02 | Niobium phosphate heavy flint |
| L23 | 1.53172 | 48.8 | S-TIL6 | OHARA | 0.00000 | 0.04 | Titanium light flint |
| L31 | 2.00069 | 25.5 | TAFD25 | HOYA | 0.00000 | 0.04 | Tantalum dense flint |
| L32 | 1.53775 | 74.7 | S-FPM3 | OHARA | 0.00000 | 0.00 | Fluorophosphate crown |
| L42 | 1.83400 | 37.2 | S-LAH55V | OHARA | 0.00000 | 0.04 | Lanthanum dense flint |
| L51, L52 | 1.49700 | 81.6 | FCD1 / S-FPL51 | HOYA / OHARA | 0.00000 | 0.01–0.06 | **Fluorophosphate crown (UD)** |
| L53 | 2.05090 | 26.9 | TAFD45 | HOYA | 0.00000 | 0.04 | Tantalum dense flint |

All nd matches are exact to five decimal places. The νd residuals are ≤0.06, well within the typical catalog truncation tolerance (±0.1). These are high-confidence identifications.

### 4.2 Element-by-Element Role Analysis

**B1 — Front Negative Group (f = −21.75 mm)**

The front group's strong net negative power is the hallmark of a retrofocus wide-angle design, creating a long back focal distance to clear the RF-mount's 20 mm flange distance.

- **L11** (S-BAL42, f = −28.51 mm): The large-aperture front meniscus is the primary negative power contributor. Its double-aspherical surfaces handle the extreme ray bending required at 15 mm, where the half-field angle exceeds 54°. The barium crown glass provides a good balance of moderate refractive index (keeping curvatures manageable) and moderate dispersion (limiting the chromatic load on this largest element).

- **L12** (S-LAH65V, f = −96.46 mm): A supplementary negative element with aspherical correction. The high-index lanthanum glass (nd = 1.854) allows weak power in a thin package while providing higher-order aberration correction through its aspherical surfaces.

- **L13** (S-FPM2, f = −50.16 mm): A biconcave negative element in fluorophosphate crown glass (νd = 67.7). This low-dispersion crown adds negative power to B1 while keeping the chromatic load moderate — its fluorophosphate composition (S-FPM2 is in the same glass family as the UD elements, though at lower νd) limits the chromatic aberration contributed per unit of refractive power.

- **L14** (S-NPH1, f = +47.00 mm): A biconvex positive element in niobium phosphate heavy flint glass (νd = 24.8). L14 is the only positive element in B1 and partially offsets the strong net negative power of L11–L13, limiting the total divergence angle of the ray bundle before it enters the long air gap to B2. The very low Abbe number glass paired with positive power contributes positive chromatic aberration that partially compensates the negative chromatic contributions of L11–L13. This is not a classical achromatic pair with L13 — the chromatic residual of the L13+L14 combination is still substantial — but L14's role as the sole positive counterweight in B1 is critical for keeping both the power balance and the chromatic balance of the front group within correctable limits for the downstream elements.

**B2 — Positive Variator / Focus Unit (f = +73.31 mm)**

B2 converges the diverging beam from B1 and delivers it to the relay groups behind the aperture stop. It is the **focus unit** — the patent explicitly states that B2 moves from the object side toward the image side during focusing from infinity to the closest object. This means the variable gaps d8 (B1–B2) and d13 (B2–SP) change reciprocally during focus, keeping the overall length constant. Focusing is fully internal with no barrel extension.

- **L21** (S-TIH53, f = +72.07 mm): A biconvex positive singlet in titanium dense flint (nd = 1.847, νd = 23.9). This high-index, high-dispersion glass provides strong converging power in a compact element. Its low Abbe number means it contributes significant chromatic aberration of its own — corrected by the following cemented doublet.

- **L22 + L23** (cemented doublet D1, f_net ≈ +∞ ... actually L22 f = −44.91, L23 f = +45.20 → near-zero net power): This is a classic achromatic corrector pair. L22 (S-NPH2, νd = 20.9) is a negative meniscus in very-high-index heavy flint, cemented to L23 (S-TIL6, νd = 48.8), a positive meniscus in light flint. The near-zero net power means this doublet functions primarily as a chromatic and spherical aberration corrector for L21, not as a power element. The large Δνd (48.8 − 20.9 = 27.9) between the cemented pair provides strong achromatization.

**B3 — Positive Relay Doublet (f = +52.20 mm)**

- **L31 + L32** (cemented doublet D2): L31 is a negative meniscus in HOYA TAFD25 (nd = 2.001, νd = 25.5 — the highest refractive index glass in the entire system), cemented to L32 in OHARA S-FPM3 (nd = 1.538, νd = 74.7), a fluorophosphate crown. The Δνd = 49.2 between these two elements is the second-largest in the design (after D4 at Δνd = 54.7), making D2 a powerful achromatic doublet. The extreme index of L31 (nd > 2.0) allows a strongly curved negative surface to be realized with reasonable curvatures while maintaining thin center thickness (1.20 mm). B3's net positive power relays the image through the mid-section of the lens while aggressively correcting axial chromatic aberration.

**B4 — Negative IS Unit (f = −63.99 mm)**

B4 is a cemented doublet that serves double duty: it provides negative power for the zoom system's power distribution, and it is the **image stabilization element** — during IS operation, the entire G4 unit shifts orthogonal to the optical axis. The flare cutting stop FS is located at the image-side end of B4.

- **L41 + L42** (cemented doublet D3): L41 (S-NPH2, f = +31.50 mm) is a positive meniscus concave toward the object, cemented to L42 (S-LAH55V, f = −21.72 mm), a biconcave negative element. The net doublet power is negative (f ≈ −64 mm). The cemented construction is critical for IS — a cemented pair moves as a rigid unit without internal decentration, maintaining its corrected aberration state even when shifted off-axis. The Δνd between the pair (37.2 − 20.9 = 16.3) provides partial achromatization of the IS unit's negative power.

**B5 — Positive Rear Group / PL Unit (f = +51.49 mm)**

B5 is the largest subassembly, containing five elements in four groups. It serves as the "positive lens unit PL" referenced in the patent's conditional expressions. Its primary functions are to converge the beam onto the image plane, correct field curvature and lateral chromatic aberration, and provide the aspherical correction needed for wide-angle distortion control.

- **L51** (FCD1 / S-FPL51, f = +40.00 mm): A biconvex positive singlet in Canon's UD (Ultra-Low Dispersion) glass. With νd = 81.6, this fluorophosphate crown has extremely low dispersion, making it the primary lateral chromatic aberration corrector at the wide-angle end. Canon identifies nd = 1.497, νd = 81.6 as their "UD" designation — this glass has properties intermediate between standard optical glass and crystalline fluorite (CaF₂, nd = 1.434, νd = 95.0).

- **L52 + L53** (cemented doublet D4): L52 is a second UD element (same glass as L51, f = +33.68 mm), cemented to L53 in HOYA TAFD45 (nd = 2.051, νd = 26.9), the second-highest-index glass in the system. The Δνd = 54.7 makes this the most chromatically powerful cemented pair per unit aperture. The combination of UD positive power (L52) with ultra-high-index negative power (L53) simultaneously corrects lateral color and helps control Petzval curvature. L53's strong negative power (f = −21.79 mm) combined with its very high refractive index contributes a significant negative Petzval term (1/(n·f) = −0.022) that partially offsets the positive Petzval contributions of L51 and L52, moderating the overall field curvature of the positive rear group.

- **L54** (S-LAH65V, f = −93.22 mm): The third aspherical element, discussed in detail in Section 3.3. Its double-aspherical surfaces provide field-dependent correction of residual astigmatism, field curvature, and distortion that cannot be addressed by the spherical elements alone.

- **L55** (S-NPH2, f = +87.31 mm): A biconvex positive element in niobium phosphate heavy flint (nd = 1.923, νd = 20.9). The very high index allows a weak positive power to be realized with gentle curvatures, and its high-dispersion glass partially compensates any residual longitudinal chromatic aberration from the UD elements. L55 is the rearmost lens element and carries Canon's fluorine coating for environmental protection.

### 4.3 Canon UD Element Identification

Canon's published specification states "2 UD lenses" (Canon U.S.A. setup sheet, item 3682C002). In the patent, exactly two elements use the nd = 1.497, νd = 81.6 glass: **L51** and **L52**, both positioned in B5. This glass matches HOYA FCD1 or OHARA S-FPL51, both fluorophosphate crowns with fluorite-like dispersion characteristics. Canon's "UD" designation has historically corresponded to this glass family (νd ≈ 80+).

Note: At least one Canon regional specification (Canon UK, as cited in third-party reviews) lists "3 UD lenses." No third element in the patent prescription has optical properties consistent with Canon's UD glass family — the next-highest Abbe number is L32 at νd = 74.7 (S-FPM3), which falls below the typical UD threshold. The Canon U.S.A. figure of "2 UD" is treated as authoritative here, consistent with the patent data.

Both UD elements are positioned in the rear positive group (B5), where they encounter spatially separated on-axis and off-axis ray bundles. This placement maximizes their effectiveness for lateral chromatic aberration correction — the signature aberration of wide-angle retrofocus zoom lenses.

---

## 5. Focus Mechanism

The patent states (¶0050) that the **second lens unit B2 is the focus lens unit**. B2 moves axially from object-side toward image-side when focusing from infinity to the closest object. This constitutes an **inner focus** system with two variable gaps:

- **d8** (B1–B2 separation): increases as B2 moves rearward
- **d13** (B2–SP separation): decreases correspondingly

Because only B2 moves during focus, and it lies entirely within the lens barrel behind the fixed front group G1, the system achieves:

1. **No front element rotation or extension** — the filter thread remains stationary, enabling use of polarizing and graduated ND filters.
2. **Constant overall length during focus** — the sum d8 + d13 remains constant at each zoom position.
3. **Fast autofocus** — B2 consists of only three elements (L21, L22, L23) with a combined lens structure length of 9.23 mm and moderate clear apertures (~25 mm), resulting in a lightweight focus group compatible with Canon's Nano USM actuator.

The production lens achieves a minimum focusing distance of 0.28 m with a maximum magnification of 0.21× at the 35 mm end.

---

## 6. Image Stabilization

Per ¶0044, image stabilization is achieved by shifting **B4** (the negative lens unit NL) in a direction orthogonal to the optical axis. B4 consists of the cemented doublet L41+L42 (surfaces 18–20) plus the flare cutting stop FS.

The IS unit's focal length is −63.99 mm. The ratio |f_NL|/ft = 1.885 (conditional expression 7), placing it comfortably within the 0.50–3.00 range. This moderate power ensures that the IS shift produces effective image translation without introducing excessive higher-order aberrations from decentration.

Canon's production specification rates the IS system at **5 stops** of shake correction (CIPA standard, measured on an EOS R body at 35 mm focal length). The system supports Dual Sensing IS and Combination IS when paired with EOS R bodies that have in-body image stabilization.

---

## 7. Conditional Expression Verification

All ten conditional expressions from the patent are satisfied by Example 1:

| Expression | Parameter | Value | Range | Status |
|---|---|---|---|---|
| (1) | φW/φT | 1.054 | 1.01–2.00 | ✓ |
| (2) | FDw/LDw | 0.343 | 0.10–0.50 | ✓ |
| (3) | BFw/fw | 0.906 | 0.10–1.20 | ✓ |
| (4) | LDw/fw | 10.329 | 5.0–15.0 | ✓ |
| (5) | SFDw/LDw | 0.216 | 0.10–0.50 | ✓ |
| (6) | (SFDt+FDt)/LDt | 0.684 | 0.50–0.90 | ✓ |
| (7) | \|f_NL\|/ft | 1.885 | 0.50–3.00 | ✓ |
| (8) | f_PL/ft | 1.517 | 0.50–2.50 | ✓ |
| (9) | Nd_PLL | 1.4790 | 1.40–1.65 | ✓ |
| (10) | νd_PLL | 81.61 | 60–100 | ✓ |

Expression (3) is notable: BFw/fw = 0.906, meaning the back focal distance at the wide end is about 91% of the focal length. For a 15 mm lens on the RF mount (20 mm flange distance), the rear element must protrude into the camera body. The BFD of 14.00 mm is achieved with the moderately weak negative power of B1 (f = −21.75 mm, only 1.41× the wide-end EFL) combined with the strong positive relay groups behind the stop — a design balance that keeps the overall length under 160 mm at the wide end.

---

## 8. Coatings

Canon's first-party documentation identifies two specialized coatings applied to the production RF 15-35mm f/2.8 L IS USM:

- **SWC (Subwavelength Structure Coating):** A nano-structured anti-reflection coating effective against incident light at steep angles. Particularly beneficial on the highly curved surfaces of the front group.
- **ASC (Air Sphere Coating):** A coating technology that incorporates a layer of air-filled silica particles to reduce reflections, particularly effective against light arriving nearly perpendicular to the surface.
- **Fluorine coating:** Applied to the front element (L11) and rear element (L55) to repel dust, moisture, and fingerprints.

The patent does not specify which surfaces receive SWC or ASC treatment. Based on the optical geometry, the most likely candidates are the steep rear surface of L11 (surface 2\*, R = 16.5 mm) for SWC, and one or more of the B5 rear-group surfaces for ASC — though this is inference, not confirmed by Canon.

---

## 9. Zoom Ratio and Magnification Architecture

The patent states a zoom ratio of 2.20× (f = 15.45 → 33.95 mm). This is consistent with the marketed 15–35 mm range (35/15 = 2.33×; the slightly lower patent ratio reflects the design-scale focal lengths).

The zoom is accomplished by differential axial motion of all five units plus the independent Fno stop. The dominant motion is the large contraction of the B1–B2 air gap (d8 shrinks from 25.32 to 1.50 mm — a 23.82 mm stroke), which accounts for most of the magnification change. Simultaneously, the B3–B4 gap (d17) expands by 13.01 mm in the opposite direction, and the back focal distance (d30) grows by 18.15 mm as the image shifts rearward at longer focal lengths. The opposing motions of these gaps reflect the classic power-balance of a negative-lead zoom: as B1 and B2 approach each other, the combined power of the front diverging group weakens (its effective negative contribution decreases), and the system's net focal length increases.

Of note, the B2–SP gap (d13) exhibits **non-monotonic behavior**: it widens from 8.24 mm (wide) to 11.30 mm (middle) then narrows to 7.40 mm (tele). This reversal indicates that the Fno stop follows an independent cam track that does not move in lockstep with any single lens unit — a detail that increases mechanical complexity but allows more precise control of the f-number across the zoom range.

---

## 10. Aberration Performance

The patent provides longitudinal aberration plots at the wide-angle and telephoto ends (FIGS. 2A/2B), evaluated at infinity focus, f/2.91, in d-line (587.6 nm) and g-line (435.8 nm). Several observations can be made from these plots:

**Spherical aberration** is well-corrected at both ends, with the d-line curve remaining within ±0.2 mm across the full aperture. A slight higher-order residual (S-shaped curve) is visible at the wide end, consistent with the extreme ray bending in the G1 front group. The g-line undercorrection (shifted negative relative to d-line) indicates a modest secondary spectrum — inevitable given the absence of fluorite or anomalous-dispersion glasses in the high-powered front group.

**Astigmatism** shows the sagittal (S) and meridional (M) image surfaces separating toward the field edge, with the characteristic wide-angle pattern: the M surface curves more strongly than S. At the wide end (ω = 54.5°), the S–M separation reaches approximately 0.3 mm at full field — a good result for a 110° diagonal field. The aspherical surfaces on L54 (B5) are the primary field-edge correctors here.

**Distortion** is held below 5% at both ends. For a 15 mm rectilinear wide-angle, this is a strong result; many competing designs exhibit barrel distortion exceeding 5% at 15 mm. The production lens relies on Canon's Digital Lens Optimizer (in-camera and in-software correction) to reduce residual distortion further.

**Lateral chromatic aberration** (g-line) is well-controlled, staying within ±0.03 mm at both zoom extremes. This confirms the effectiveness of the dual UD elements (L51, L52) in B5 — the rear-group placement puts them at maximum lever arm for lateral color correction.

---

## 11. Design Summary

The Canon RF 15-35mm f/2.8 L IS USM represents a mature implementation of the negative-lead five-unit zoom architecture for ultrawide-angle coverage on a full-frame mirrorless system. Its key design choices include:

1. **Three double-aspherical elements** (L11, L12, L54) with a total of six aspherical surfaces — the highest aspherical surface count in the system is concentrated in the front group (B1), where ray heights and field angles are largest and aberration sensitivity is most acute.

2. **Two UD elements** (L51, L52) in the rear positive group, dedicated to lateral chromatic aberration correction — the dominant chromatic challenge in wide-angle retrofocus designs.

3. **Ultra-high-index glasses** (nd > 2.0) in two critical cemented doublets (D2 and D4), enabling strong achromatic correction in compact packages.

4. **A dual-stop architecture** with an Fno stop and a zoom-dependent flare cutting stop, addressing the off-axis ghost control challenges inherent in wide-angle zooms.

5. **Inner focus via B2** with a lightweight three-element group, compatible with Canon's Nano USM actuator for fast, quiet autofocus in both stills and video.

6. **Optical image stabilization via B4** (cemented doublet shift), providing 5 stops of shake correction in a configuration that maintains corrected aberrations during IS operation.

---

## Sources

- US 2020/0257181 A1, "Zoom Lens and Optical Apparatus," Yuichi Gyoda, Canon Kabushiki Kaisha, published August 13, 2020.
- Canon U.S.A. product page: RF 15-35mm F2.8 L IS USM (accessed 2025).
- Canon Europe specifications page: RF 15-35mm F2.8 L IS USM (accessed 2025).
- OHARA optical glass catalog: S-BAL42, S-LAH65V, S-FPM2, S-NPH1, S-TIH53, S-NPH2, S-TIL6, S-FPM3, S-LAH55V, S-FPL51.
- HOYA optical glass catalog: TAFD25, FCD1, TAFD45.
- Paraxial ray trace verification performed computationally (Python) against patent-stated focal lengths.
