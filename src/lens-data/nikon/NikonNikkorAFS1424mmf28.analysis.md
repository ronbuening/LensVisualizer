# Optical Analysis: Nikon AF-S Nikkor 14-24mm f/2.8G ED

## US 7,359,125 B2 — Example 1 (Kimura & Sato, Nikon Corporation)

**Patent:** US 7,359,125 B2
**Filed:** September 7, 2006
**Granted:** April 15, 2008
**Priority:** JP 2005-285398 (September 29, 2005)
**Inventors:** Yoko Kimura, Haruo Sato
**Assignee:** Nikon Corporation
**Embodiment analyzed:** Example 1
**Production lens:** AF-S Nikkor 14-24mm f/2.8G ED (released August 2007)

---

## 1. Identification of Example 1 as the Production Embodiment

The patent contains three worked examples. Example 1 is identified as the production design on the basis of convergent evidence:

- **Element/group count.** Example 1 lists 15 optical media in 11 groups. One of them (E4, surfaces 6–7) is only 0.3 mm thick, has nd = 1.55389 / νd = 38.09 and carries the strong aspherical surface 7 on the rear of E3. That combination identifies it as the replicated resin shell of a hybrid (compound) aspherical element; the patent lists only its n and ν, so the identification is inferred. Counting E3 + resin as one element gives 14 elements in 11 groups, exactly Nikon's published construction. Examples 2 and 3 both have 16 elements.
- **Focal length and f-number.** Example 1 specifies f = 14.4–23.8 mm at f/2.88, consistent with the marketed 14–24 mm f/2.8.
- **Angle of view.** 2ω = 114.7°–83.8° at wide-to-tele, matching Nikon's published 114°–84° (FX format).
- **Close focus.** The close-object rows are tabulated at an object-to-image distance R = 300 mm at all three stations (the text calls this the 300 mm shooting distance); Nikon's production minimum focus distance is 0.28 m.
- **Aspherical surfaces.** Three aspherical surfaces on three separate elements (E2, the E3 hybrid, E15), matching Nikon's three aspherical elements.
- **ED elements.** Two elements use nd = 1.49782, νd = 82.52 — a fluorophosphate ED (Extra-low Dispersion) glass whose catalog equivalent is Hikari J-FKH1 — matching the two ED glass elements in the published spec.

The paraxial ray trace (ABCD matrix method) confirms the patent's stated values precisely: EFL = 14.400 mm (wide) and 23.800 mm (tele), zoom ratio 1.653×.

---

## 2. Optical Layout and Group Structure

The design is a two-group, negative-leading (retrofocus) zoom. G1 has negative refractive power; G2 has positive refractive power. Zooming is performed by narrowing the air gap between G1 and G2 (d11 decreases from 31.93 mm at wide to 1.20 mm at tele) while the back focal distance increases (from 38.70 mm to 53.97 mm). With the image plane fixed, the tabulated gaps put the front vertex at 175.00 / 165.29 / 159.54 mm from the image at 14.4 / 18.0 / 23.8 mm: G1 moves 15.46 mm toward the image while G2 moves 15.27 mm toward the object, as the trajectories in Fig. 1 show. G1's travel decelerates toward tele; a fit of the three stations puts its turning point near f ≈ 26 mm, beyond the tele end, so neither group reverses within the zoom range.

### Group Focal Lengths (ABCD thick-lens trace)

| Group | Focal length | Role |
|-------|-------------|------|
| G1 (surfaces 1–11) | −26.27 mm | Negative front group — diverges incoming light to create the retrofocus geometry necessary for a long back focal distance |
| G2 (surfaces 12–27) | +42.65 mm | Positive rear group — converges light to form the image; contains the aperture stop and focusing mechanism |

The ratio fw/f2 = 14.4 / 42.65 = 0.338, satisfying the patent's conditional expression (3): 0.25 < fw/f2 < 0.5. This balance ensures adequate back focal distance for the SLR mirror box while keeping aberrations in check.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Negative Front Group (5 elements plus one resin layer, 5 groups)

**Element 1 (surfaces 1–2): Negative meniscus, convex to object**
Glass: nd = 1.80400, νd = 46.58 → **S-LAH65V** (OHARA catalog equivalent); six-digit code 804/466.
Thick-lens focal length: **−91.3 mm**.
This is a large-diameter lanthanum-crown meniscus serving as the first field-flattening element. Fig. 1 draws its convex front surface out to about 41 mm and its deep concave rear (R = 32.27 mm) out to about 31 mm, where a flat mounting annulus begins; at the wide end the corner chief ray crosses the front surface 37.5 mm from the axis. Its high index (1.804) reduces the surface curvatures needed, keeping Petzval contributions manageable despite the large clear aperture. It acts as a gentle diverging element, beginning to spread the wide-angle ray bundle while controlling the tangential/sagittal field balance.

**Element 2 (surfaces 3–4A): Negative meniscus, convex to object — 1× aspherical**
Glass: nd = 1.67790, νd = 55.34 → **S-LAL12** (OHARA catalog equivalent); code 678/553.
Thick-lens focal length: **−71.1 mm**.
Surface 4A is the first aspherical surface, with conic constant κ = 0.0913 (K = −0.9087, nearly paraboloidal). The aspherical departure on this surface is the primary corrector for field curvature and distortion across the ultra-wide field. The moderate-index lanthanum crown is a plausible PGM (Precision Glass Moulding) candidate; the patent itself does not say how the surface is made. The aspherical rear surface is used out to about 25 mm in Fig. 1, beyond its 19.5 mm vertex radius, which the near-paraboloidal conic allows. The polynomial coefficients are small (C4 ≈ −5.12 × 10⁻⁷), indicating that the conic term does most of the work, with higher-order terms providing fine correction.

**Elements 3 + 4 (surfaces 5–7A): Hybrid aspherical element (J1) — glass meniscus with resin shell**
E3 glass: nd = 1.74100, νd = 52.67 → **LAK011** (HIKARI catalog equivalent); code 741/527.
E4: nd = 1.55389, νd = 38.09, 0.3 mm thick → inferred **UV-cure resin layer** of a hybrid asphere (not a catalog glass; the patent lists only n and ν).
Combined thick-lens focal length: **−60.3 mm** (E3 individually: −51.9 mm; resin shell: +357.6 mm).
Surface 7A is the second aspherical surface, with κ = −6.3795 (K = −7.380, a strong hyperboloid). This is the most aggressive asphere in the design, with large C4 (4.22 × 10⁻⁵) indicating substantial departure from the base sphere. Because the shell is only 0.3 mm thick on axis, E3 + E4 behave as one negative meniscus whose rear surface is aspherical; the resin contributes almost no power of its own (+357.6 mm), so its role is to carry the asphere rather than to correct colour. In Fig. 1 the front surface of E3 runs out to about 25 mm, while the cemented rear and the resin surface stop at about 20.4 mm behind a flat mounting step. The aspherical exit surface controls sagittal coma flare, a historically difficult aberration in retrofocus ultra-wide-angle designs, as noted in Nikon's own "Thousand and One Nights" series.

**Element 5 (surfaces 8–9): Biconcave negative — ED glass**
Glass: nd = 1.49782, νd = 82.52 → **J-FKH1** (HIKARI catalog equivalent, nd = 1.49782, νd = 82.57); six-digit code 498/825.
Thick-lens focal length: **−56.1 mm**.
This is the first of two ED elements. The patent nd matches Hikari's J-FKH1 fluorophosphate exactly (νd within 0.05); Ohara's S-FPL51 (nd = 1.49700, νd = 81.54) is the nearest Ohara type. Positioned at the rear of G1 where the ray bundle is strongly diverging, it provides negative power with minimal primary chromatic contribution — its very high Abbe number (82.5) means it introduces far less dispersion per unit of refractive power than a conventional flint glass would. Fluorophosphate ED glasses of this class also have positive anomalous partial dispersion, which helps control secondary spectrum when paired with the normal-dispersion positive element E6; the patent gives no partial-dispersion data, so this is inferred from the glass type. The biconcave shape (R8 < 0, R9 > 0) yields the maximum negative power per unit thickness, keeping the element thin.

**Element 6 (surfaces 10–11): Biconvex positive (weakly curved rear)**
Glass: nd = 1.80440, νd = 39.59 → **S-LAH63** (OHARA); code 804/396.
Thick-lens focal length: **+48.1 mm**.
This is the sole positive element in G1. It partially counterbalances the accumulated negative power, bending the diverging ray bundle back toward the axis before the light crosses the zoom gap. Its high-index, high-dispersion lanthanum glass also serves as the chromatic counterpart to E5's ED glass — the positive power in a high-dispersion material, paired with the negative ED element, creates an achromatizing sub-unit within G1.

### 3.2 Group 2 — Positive Rear Group (9 elements, 6 groups)

The patent describes G2's internal structure as: **L1** (first positive lens component) → **Stop** → **L2** (second positive lens component) → **L3** (negative lens), followed by additional correction elements.

**Elements 7 + 8 (surfaces 12–14): Cemented doublet (J2) — L1, the focusing component**
E7 glass: nd = 1.83481, νd = 42.72 → **S-LAH55** (OHARA); code 835/427.
E8 glass: nd = 1.62374, νd = 47.04 → **E-BAF8** (HIKARI catalog equivalent); code 624/470.
Combined thick-lens focal length: **+80.3 mm** (E7: −54.9 mm; E8: +32.1 mm).
E7 is a negative meniscus convex to the object; E8 is a positive element with a nearly flat rear surface (R = 611.6 mm). Together they form L1, the internal focusing component. Focusing is performed by translating L1 along the optical axis: at wide/infinity, d14 = 5.86 mm; at wide/close (300 mm), d14 = 1.43 mm — L1 moves toward the image by approximately 4.4 mm. The patent states that focusing via L1 minimizes variation in curvature of field during close-focus operation. The Abbe number ratio νdn/νdp = 42.72 / 47.04 = 0.908, satisfying conditional expression (4): 0.25 < νdn/νdp < 0.95.

**Aperture Stop (surface STO)**
Located between L1 and L2 with a 1.67 mm air space ahead of it. The stop diameter at f/2.88 defines the entrance pupil position.

**Element 9 (surfaces 16–17): Positive meniscus, convex to image — L2**
Glass: nd = 1.51680, νd = 64.10 → **J-BK7A** (HIKARI catalog equivalent); code 517/641. This is optically equivalent to Schott N-BK7.
Thick-lens focal length: **+110.8 mm**.
L2 is a gently positive meniscus with its convex surface facing the image (R16 = −265.5, R17 = −47.3). Its moderate power and common BK7-type glass make it an inexpensive, easily manufactured element. Its primary role is to provide positive power near the stop, contributing to spherical aberration correction by balancing the ray-bending distribution symmetrically about the iris.

**Element 10 (surfaces 18–19): Biconcave negative — L3**
Glass: nd = 1.83481, νd = 42.72 → **S-LAH55** (OHARA); code 835/427 (same glass as E7).
Thick-lens focal length: **−27.7 mm**.
This is the strongest single element in the entire system. The patent describes it as the "negative lens L3" and states that making it biconcave is critical for correcting sagittal field curvature and sagittal coma. Its placement at a large separation from L2 (D1 = 9.07 mm) pushes the principal point of G2 toward the object, which is essential for securing adequate zoom working distance and keeping the exit pupil distant from the image plane — an important consideration for digital sensors that are sensitive to the angle of incidence of light.

**Element 11 (surfaces 20–21): Biconvex positive**
Glass: nd = 1.57099, νd = 50.80 → **S-BAL2** (OHARA); code 571/508.
Thick-lens focal length: **+42.4 mm**.
A moderately powered biconvex element that works with E10 and E9 to form a triplet-like correction system around the stop. It provides positive power to counterbalance E10's strong divergence while contributing to coma correction.

**Elements 12 + 13 (surfaces 22–24): Cemented doublet (J3) — chromatic corrector with ED glass**
E12 glass: nd = 1.772789, νd = 49.45; six-digit code 773/495. **No catalog match** — the common 1.7725 / 49.5 lanthanum crowns (S-LAH66, M-TAF1) differ by 2.9 × 10⁻⁴ in nd, so the element stays on its patent nd/νd. The glass is in the lanthanum-crown family based on its high index and moderate Abbe number.
E13 glass: nd = 1.49782, νd = 82.52 → **J-FKH1** (HIKARI catalog equivalent) — same glass as E5, ED element #2.
Combined thick-lens focal length: **+48.6 mm** (E12: −56.9 mm; E13: +26.3 mm).
This is the primary achromatic corrector in G2. E12 is a negative meniscus convex to the object, cemented to E13, a biconvex positive ED element. The large Abbe number difference (Δνd = 33.1) provides strong longitudinal chromatic aberration correction. The ED glass carries the positive power with very low dispersion, while the high-index crown carries negative power with higher dispersion — the classic achromat configuration. This doublet is responsible for ensuring that the focal shift between d-line and g-line remains small across the zoom range.

**Elements 14 + 15 (surfaces 25–27A): Cemented doublet (J4) — final corrector with aspherical surface**
E14 glass: nd = 1.80610, νd = 40.94 → **S-LAH53** (OHARA); code 806/409.
E15 glass: nd = 1.58913, νd = 61.18 → **S-BAL35** (OHARA); code 589/612.
Combined thick-lens focal length: **+6579 mm** (essentially afocal — a corrector plate). E14: −25.7 mm; E15: +26.6 mm.
Surface 27A is the third and final aspherical surface, with κ = 6.0164 (K = +5.016, an oblate ellipsoid). The patent notes that "the most image side lens surface in the second lens group G2 is an aspherical surface" and that placing the asphere as close to the image plane as possible is most effective for correcting upper coma and distortion. This nearly zero-power doublet functions purely as an aberration corrector — a field-flattening/coma-trimming plate at the very end of the optical path. Its essentially neutral focal length means it contributes no first-order power, only higher-order corrections.

---

## 4. Aspherical Surfaces

The design uses three aspherical surfaces, each on a different element. All three are in the front group (G1) or at the extreme rear of G2, placing them far from the aperture stop where they can most effectively influence field-dependent aberrations.

| Surface | Element | Location | κ (patent) | K (standard) | Conic type | Primary correction role |
|---------|---------|----------|-----------|-------------|-----------|----------------------|
| 4A | E2 rear | G1 | 0.0913 | −0.909 | Near-paraboloid | Field curvature, distortion across the ultra-wide field |
| 7A | E4 (resin) rear | G1 (hybrid exit) | −6.380 | −7.380 | Strong hyperboloid | Sagittal coma flare, higher-order field aberrations |
| 27A | E15 rear | G2 (last surface) | 6.016 | +5.016 | Oblate ellipsoid | Upper coma, residual distortion at telephoto end |

The conic constant convention in this patent uses κ in the sag formula Z(y) = (y²/R) / [1 + √(1 − κ(y/R)²)] + C4y⁴ + ⋯, where κ = 1 + K in the standard (1+K) convention. Thus κ = 1 corresponds to a sphere (K = 0).

Surface 7A is by far the most aggressive asphere. Its K = −7.38 alone would flatten the surface toward the rim, but the large positive C4 (4.22 × 10⁻⁵) more than offsets it: at the 20.0 mm data-file rim the surface lies about 2.53 mm deeper than its 30.24 mm base sphere, with a 57.7° local slope. A departure that large on a 0.3 mm layer is why the surface is read as a replicated resin asphere on a spherical glass body. Surface 4A sits on a moderate-index glass (nd = 1.678) that suits precision glass moulding; the patent does not state the manufacturing method for either surface.

---

## 5. Glass Selection and Material Strategy

The design uses 13 distinct glass types plus the resin layer of the hybrid asphere. The patent gives only nd and νd; the names below are catalog equivalents with matching values, not glass identities stated by Nikon. Nikon's in-house supplier is Hikari, and several of the pairs are exact Hikari coordinates.

### Glass Census

| Glass code | Catalog equivalent | Elements | nd | νd | Category |
|-----------|------------------|----------|------|------|---------|
| 804/466 | S-LAH65V (Ohara) | E1 | 1.804 | 46.6 | Lanthanum crown (high-index) |
| 678/553 | S-LAL12 (Ohara) | E2 | 1.678 | 55.3 | Lanthanum crown |
| 741/527 | LAK011 (Hikari) | E3 | 1.741 | 52.7 | Lanthanum crown |
| 554/381 | resin (inferred) | E4 | 1.554 | 38.1 | Hybrid-asphere resin layer |
| 498/825 | J-FKH1 (Hikari) | E5, E13 | 1.498 | 82.5 | Fluorophosphate — **ED glass** |
| 804/396 | S-LAH63 (Ohara) | E6 | 1.804 | 39.6 | Lanthanum flint |
| 835/427 | S-LAH55 (Ohara) | E7, E10 | 1.835 | 42.7 | Lanthanum flint (very high-index) |
| 624/470 | E-BAF8 (Hikari) | E8 | 1.624 | 47.0 | Barium flint |
| 517/641 | J-BK7A (Hikari) | E9 | 1.517 | 64.1 | Borosilicate crown (BK7 equiv.) |
| 571/508 | S-BAL2 (Ohara) | E11 | 1.571 | 50.8 | Barium crown |
| 773/495 | No catalog match | E12 | 1.773 | 49.5 | Lanthanum crown family |
| 806/409 | S-LAH53 (Ohara) | E14 | 1.806 | 40.9 | Lanthanum flint |
| 589/612 | S-BAL35 (Ohara) | E15 | 1.589 | 61.2 | Barium crown |

**Note on ED glass (E5, E13):** nd = 1.49782 matches Hikari J-FKH1 exactly and νd = 82.52 is within 0.05 of the catalog 82.57. Ohara's S-FPL51 (nd = 1.49700, νd = 81.54) is a close but not identical alternative.

**Note on E12 glass:** The patent value nd = 1.772789, νd = 49.45 (code 773/495) does not match any catalog entry; the nearest 1.7725-class lanthanum crowns differ by 2.9 × 10⁻⁴ in nd.

The design is dominated by high-index lanthanum glasses (8 of the 14 elements), which provide the high refractive index needed to keep surface curvatures moderate in a fast, ultra-wide-angle system. The two ED elements are strategically placed — one in each group — to control chromatic aberration on both sides of the stop.

No anomalous partial dispersion (APD) behavior is claimed in the patent. The APD status for E5 and E13 is marked as "inferred" in the data file based on the well-known positive ΔPgF anomaly inherent to fluorophosphate ED glasses.

---

## 6. Focusing Mechanism

Focusing is performed by internal focus (IF) — specifically, by translating L1 (the cemented doublet E7+E8, surfaces 12–14) along the optical axis. The patent's variable-distance table gives three focus states at each of the three zoom stations: infinity, a constant magnification β = −0.025, and a close object at object-to-image distance R = 300 mm. D0 is the object distance in front of the first surface; the object-to-image values add the total length at that station.

| Condition | D0 (mm) | Object-to-image (mm) | d11 (zoom gap) | d14 (focus gap behind L1) | Bf |
|-----------|---------|---------|----------|---------|------|
| Wide / ∞ | ∞ | ∞ | 31.93 | 5.86 | 38.70 |
| Wide / β = −0.025 | 536.77 | 711.77 | 33.18 | 4.61 | 38.70 |
| Wide / close | 125.00 | 300 | 36.36 | 1.43 | 38.70 |
| Mid / ∞ | ∞ | ∞ | 16.37 | 5.86 | 44.55 |
| Mid / β = −0.025 | 682.52 | 847.81 | 17.33 | 4.90 | 44.55 |
| Mid / close | 134.71 | 300 | 20.38 | 1.85 | 44.55 |
| Tele / ∞ | ∞ | ∞ | 1.20 | 5.86 | 53.97 |
| Tele / β = −0.025 | 916.19 | 1075.73 | 1.95 | 5.11 | 53.97 |
| Tele / close | 140.46 | 300 | 5.21 | 1.85 | 53.97 |

The viewer preserves all nine rows. Because the β = −0.025 states fall at a different object distance at each station, the focus slider carries one keyframe for each of them (focus coordinates 0.2789, 0.3539 and 0.4215, i.e. 0.3 m divided by the tele, middle and wide object-to-image distances). At each station its own published row is exact; the values at the other two keyframes are interpolated through that station's two published finite states, so intermediate focus positions are calculated, not patent data. Paraxially, the stored rows focus at 713 / 847 / 1073 mm for the β rows and at 300 mm for the close rows.

At wide angle, focusing from infinity to 300 mm moves L1 rearward (toward the image) by approximately 4.4 mm, changing d14 from 5.86 to 1.43 mm and d11 from 31.93 to 36.36 mm — the gap before L1 opens while the gap after it closes, confirming rearward translation. At telephoto, the focus travel is similar (d14 changes from 5.86 to 1.85 mm, a 4.01 mm shift). The back focal distance (Bf) remains constant during focus — only d11 and d14 change — confirming that the overall barrel length does not change with focusing, consistent with Nikon's IF designation.

Variable gap conservation: d11 + d14 = 37.79 mm (wide), 22.23 mm (mid), 7.06 mm (tele) — exactly conserved between infinity and close focus at each zoom position.

The choice of L1 as the focusing group is significant: it is a lightweight cemented doublet positioned immediately ahead of the aperture stop, where ray heights are moderate. Moving it produces relatively small changes in curvature of field (as the patent notes), and its small mass enables fast autofocus via the Silent Wave Motor.

---

## 7. Zoom Mechanism

Zooming changes the air gaps d11 (between G1 and G2), d14 (within G2), and Bf (back focal distance):

| Position | f (mm) | 2ω (°) | d11 (mm) | d14 (mm) | Bf (mm) |
|----------|--------|--------|----------|----------|---------|
| Wide (W) | 14.4 | 114.7 | 31.93 | 5.86 | 38.70 |
| Mid (M) | 18.0 | 100.6 | 16.37 | 5.86 | 44.55 |
| Tele (T) | 23.8 | 83.8 | 1.20 | 5.86 | 53.97 |

The middle-station angle comes from the half-field ω = 50.29° printed on the Fig. 2B aberration curves. Both G1 and G2 translate during zoom, in opposite directions: G1 moves 15.46 mm toward the image (total length 175.00 → 165.29 → 159.54 mm) and G2 moves 15.27 mm toward the object (Bf 38.70 → 44.55 → 53.97 mm). The inter-group gap (d11) collapses from 31.93 mm to just 1.20 mm. The d14 gap (between L1 and the stop) remains constant at infinity focus across all zoom positions, indicating that the focusing group L1 maintains a fixed position relative to the stop during zooming. No groups exhibit reversing (non-monotonic) motion within the zoom range.

The f-number is 2.88 at all three stations (Figs. 2A–2C) while the stop travels with G2, so the physical iris has to open toward tele. The patent publishes no iris diameters; the viewer infers them by tracing the f/2.88 entrance pupil to the stop at each station, which gives iris radii of about 9.16 / 9.89 / 11.15 mm. This schedule is calculated, not patent data.

---

## 8. Verification of Patent Conditional Expressions

All four conditional expressions were independently verified via ABCD matrix ray trace:

| Expression | Definition | Computed | Patent stated | Satisfied? |
|-----------|-----------|---------|-------------|-----------|
| (1): 0.065 < D1/D2 < 0.3 | D1 = 9.074 mm, D2 = 89.55 mm | **0.1013** | 0.101 | ✓ |
| (2): −1.0 < D1/f1 ≤ −0.27 | f1 = −26.27 mm | **−0.3455** | −0.345 | ✓ |
| (3): 0.25 < fw/f2 < 0.5 | f2 = +42.65 mm | **0.3376** | 0.337 | ✓ |
| (4): 0.25 < νdn/νdp < 0.95 | L1 cemented: 42.72/47.04 | **0.9082** | 0.91 | ✓ |

---

## 9. Design Philosophy and Historical Context

The AF-S Nikkor 14-24mm f/2.8G ED was released alongside the Nikon D3 and AF-S 24-70mm f/2.8G ED in August 2007, forming Nikon's "holy trinity" of professional f/2.8 zooms for the new FX-format era. As noted in Nikon's own Thousand and One Nights series (Tale 90), the release of the D3 and these lenses marked Nikon's commitment to full-frame digital sensors after years of focusing on the DX format.

The patent's inventors — Yoko Kimura and Haruo Sato — are prominent Nikon optical designers. Sato is a co-author of the Thousand and One Nights series itself and designed numerous landmark Nikkor lenses.

The design achieves what the patent abstract calls "a wide angle of view, a fast aperture ratio with an f-number of about 2.8, a high zoom ratio, and high optical performance, and is easy to be manufactured." The key insight is the avoidance of aspherical surfaces on the large-diameter front element — a departure from prior designs like the one in JP 2001-166206. Instead, the aspherics are placed on smaller, easier-to-manufacture elements deeper in the optical system (E2 and the E3/E4 hybrid in G1, E15 at the rear of G2), where PGM or composite molding processes can be applied cost-effectively.

---

## 10. Data File Notes

### Semi-diameter methodology

The patent does not publish clear apertures, so every semi-diameter is an estimate. The front group follows Fig. 1 (wide panel), scaled from the 175.00 mm front-vertex-to-image distance: the rims are taken where each curved surface ends, not at the flat mounting annuli drawn outside them. That gives about 41 mm for the front surface of E1, 29.5 mm and 25.2 mm for E2, and 25 mm for the front of E3, whose cemented rear and resin surface stop at about 20 mm. An exact real-ray trace confirms that the wide-end chief ray for the 21.6 mm image corner (ω = 57.36°, the patent's value) crosses these surfaces at 37.5, 28.6, 27.0, 22.9 and 20.8 mm, so all of them pass it. The deep concave rear of E1 is drawn at 29.0 mm rather than the figure's 30.9 mm because the renderer limits how close a spherical rim can come to its 32.27 mm radius; the chief ray needs 28.6 mm there. The remaining front-group rims and all rear-group rims agree with Fig. 1 within about 15 % and are retained.

The viewer estimates its wide-end field paraxially, and that estimate stops at about 46° (half-angle) because it overstates the chief-ray height on the rear of E1. The patent's full 57.36° wide-end field is therefore not drawn, although the rims admit it.

### Glass identification

The catalog names are equivalents chosen by matching the patent's nd/νd. E12 (nd = 1.772789, νd = 49.45) has no catalog match, and E4 is treated as a resin layer, so both run on their patent nd/νd.

### Aspherical coefficient conversion

The patent uses κ in the sag formula where κ = 1 + K (standard conic convention). All coefficients in the data file use the standard K convention: K = κ − 1. The polynomial coefficients (A4 through A14) correspond directly to the patent's C4 through C14 with no conversion needed.

---

## 11. Summary Table

| Parameter | Value |
|-----------|-------|
| Configuration | 14 elements / 11 groups (15 modeled media incl. hybrid-asphere resin layer), 2-group negative-lead zoom |
| Focal length | 14.4–23.8 mm (marketed as 14–24 mm) |
| Maximum aperture | f/2.88 (marketed as f/2.8) |
| Field of view | 114.7°–83.8° (full frame) |
| Zoom ratio | 1.65× |
| Aspherical surfaces | 3 (on E2, the E3/E4 hybrid, E15) |
| ED elements | 2 (E5 and E13, J-FKH1-class fluorophosphate) |
| Focus type | Internal focus via L1 (E7+E8 cemented doublet) |
| Close focus | 300 mm object-to-image (patent); 280 mm (production) |
| G1 focal length | −26.27 mm |
| G2 focal length | +42.65 mm |
| Glass identification | Catalog equivalents (Ohara/Hikari) from patent nd/νd; E12 unmatched, E4 resin |
| Aperture blades | 9, rounded (production spec) |
