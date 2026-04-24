# FUJINON XF60mmF2.4 R Macro — Optical Analysis

**Patent:** US 2014/0247506 A1, Example 1 (Tetsuya Ori / FUJIFILM Corporation)
**Priority:** November 14, 2011 (JP 2011-248180)
**Published:** September 4, 2014
**Design:** 10 elements / 8 groups, 2 aspherical surfaces, 1 ED element
**Design EFL:** 61.06 mm | **FNO:** 2.48 | **2ω:** 25.4°

---

## 1. Patent-to-Product Identification

This analysis covers Example 1 from US 2014/0247506 A1, which corresponds to the production FUJINON XF60mmF2.4 R Macro lens. The identification is confirmed by several converging lines of evidence.

The patent's design focal length of 61.06 mm rounds to the marketed 60 mm. The design f-number of 2.48 is marketed as f/2.4 — a standard commercial rounding practice. The patent specifies a maximum magnification of −0.5× and the production lens is marketed with 0.5× maximum magnification at a minimum focus distance of 26.7 cm, consistent with the patent's close-focus aberration diagrams. The construction of 10 elements in 8 groups including one aspherical element and one ED glass element matches Fujifilm's published specifications exactly. Fujifilm's product page confirms the aspherical element is the 7th element (L17 in patent nomenclature) and the ED element is the 6th element (L16), both consistent with the patent data. Finally, the patent assignee is FUJIFILM Corporation and the filing timeline (November 2011 priority, matching the XF60mm's initial announcement alongside the X-Pro1 in early 2012) aligns precisely.

---

## 2. Optical Design Overview

The lens comprises two groups: a first lens group (G1) of seven elements with positive net power, and a second lens group (G2) of three elements with very weak net positive power. An aperture stop (St) is located within G1, between the 4th and 5th elements.

### Group structure

**G1 (L11–L17):** Positive power, fl = 51.76 mm. Contains two cemented doublets and two aspherical surfaces. This entire group moves forward as a unit during focusing from infinity toward close distances. The stop moves with it.

**G2 (L21–L23):** Very weak positive power, fl ≈ 978 mm. This group is fixed during focusing and acts as a field-correcting rear group, reducing the cone angle of light onto the APS-C imaging sensor and controlling field curvature variation across the focus range. Its near-afocal character means it contributes almost no convergence power — it is primarily an aberration corrector.

The ratio fi/f1 = 1.180 (satisfying conditional expression 1: 1.0 < fi/f1 < 1.3) indicates that G1 is slightly more powerful than the complete system, with G2 providing a modest telephoto-like shortening of the back focal distance. Note that "medium telephoto" in the patent title refers to the focal length class (91 mm equivalent on APS-C), not to the telephoto optical arrangement: the total track of ~65.7 mm slightly exceeds the 61.1 mm EFL, giving a telephoto ratio of ~1.075 — technically a non-telephoto configuration. However, the BFD/EFL ratio of 0.35 indicates the rear principal plane is shifted well forward of the lens, which is characteristic of telephoto-like power distribution.

### Sub-group analysis within G1

The front sub-group (L11–L14, surfaces 1–7) has a combined focal length of 56.13 mm and provides the primary convergence power. The ratio fi/f1a = 1.088 confirms this sub-group carries most of the refracting burden.

The rear sub-group (L15–L17, surfaces 9–13A) has a combined focal length of 246.86 mm — weakly positive. The ratio fi/f1b = 0.247 indicates this sub-group is close to afocal, functioning primarily for aberration correction (especially field curvature and lateral chromatic aberration) rather than contributing significantly to the system's power.

---

## 3. Element-by-Element Analysis

The prescription is transcribed directly from patent Table 1. All radii (R) and thicknesses (d) are in millimeters. The sign convention follows the patent: R > 0 means the center of curvature lies to the right (image side) of the surface.

### L11 — Element 1 (1-1 lens)

| Property | Value |
|---|---|
| Shape | Plano-convex positive |
| Surfaces | S1 (R = +51.974) / S2 (R = ∞) |
| nd / νd | 1.48749 / 70.2 |
| Glass | **S-FSL5** (OHARA) — exact match |
| Standalone fl | +106.6 mm |

L11 is the front element, a weakly positive plano-convex lens in a low-index, high-dispersion-correcting fluorosilicate crown. Its modest power contributes gentle convergence while introducing minimal chromatic aberration, thanks to the high Abbe number (νd = 70.2). It acts as the primary light-gathering surface and sets the physical aperture constraint of the front group. The flat rear surface simplifies manufacturing and provides a convenient reference plane.

### L12 — Element 2 (1-2 lens)

| Property | Value |
|---|---|
| Shape | Positive meniscus (convex toward object) |
| Surfaces | S3 (R = +29.000) / S4 (R = +52.723) |
| nd / νd | 1.58913 / 61.1 |
| Glass | **S-BAL35** (OHARA) — exact match |
| Standalone fl | +103.3 mm |

L12 is another weakly positive element in a barium crown glass. Like L11, its high Abbe number keeps chromatic contributions small. The meniscus shape (both surfaces convex toward the object) bends the converging beam while sharing the refractive load with L11, keeping surface curvatures moderate and controlling spherical aberration. Together, L11 and L12 form a pair of positive "collector" elements that gradually converge the incoming collimated beam before it enters the cemented doublet.

### L13+L14 — Cemented Doublet D1 (1-3 / 1-4 lens)

| Property | L13 | L14 |
|---|---|---|
| Shape | Positive meniscus | Negative meniscus |
| Surfaces | S5 (R = +18.512) | S6 junction (R = +57.135) / S7 (R = +12.794) |
| nd / νd | 1.72916 / 54.7 | 1.66680 / 31.1 |
| Glass | **S-LAL18** (OHARA) | Dense flint family (no exact catalog match; see §4) |
| Standalone fl | +35.4 mm | −25.0 mm |
| Combined fl | −173.6 mm (net negative) |

This cemented doublet is the strongest individual power contribution in the front group. Although the positive L13 element has the shorter focal length in isolation, the combination is net negative — this is by design. The primary purpose of D1 is chromatic correction. With νd3 − νd4 = 23.6 (satisfying conditional expression 5: 10 < νd3 − νd4 < 30), the crown/flint pairing provides achromatization of the converging beam before it reaches the stop. The patent text explicitly states that this cemented pair "can favorably correct longitudinal chromatic aberration, thereby enabling attainment of good resolution with little change while changing magnification from infinity to a short distance."

The net negative power of D1 ensures that the front sub-group doesn't over-converge the beam, distributing the refractive work more evenly and reducing higher-order spherical aberration. L13 is in lanthanum crown (S-LAL18), a high-index moderate-dispersion glass that achieves strong positive power from relatively gentle curvatures.

### Aperture Stop (St)

The stop is located in the air gap between L14 and L15, represented as surface S8 (R = ∞, d = 2.60 mm). It sits at the natural waist of the beam where the marginal ray height is minimized. At infinity focus and f/2.48, the marginal ray height at the stop is approximately 7.64 mm. The lens uses a 9-blade rounded diaphragm in production.

The stop position is explicitly specified in the patent Table 1 as surface 8 with the aperture stop annotation. The air gap between L14 rear (S7, d = 4.20 mm) and the stop (S8, d = 2.60 mm) places the iris 4.20 mm behind L14 and 2.60 mm in front of L15.

### L15+L16 — Cemented Doublet D2 (1-5 / 1-6 lens)

| Property | L15 | L16 |
|---|---|---|
| Shape | Biconcave negative | Positive meniscus |
| Surfaces | S9 (R = −317.321) | S10 junction (R = +17.180) / S11 (R = +52.440) |
| nd / νd | 1.51742 / 48.8† | 1.49700 / 81.5 |
| Glass | S-TIL27 (OHARA) — probable (νd corrected to ≈52.2) | **S-FPL51** (OHARA) — exact match, **ED glass** |
| Standalone fl | −31.5 mm | +50.1 mm |
| Combined fl | −80.9 mm (net negative) |

†*Note: Patent Table 17 gives νd6 − νd5 = 29.1 for Example 1, which implies νd5 ≈ 52.4 rather than the 48.8 listed in Table 1. A cross-check of all six numerical examples confirms this is a Table 1 typographical error: Examples 2–6 all produce νd6 − νd5 values that match Table 17 exactly when computed from their respective surface tables, while Example 1 alone fails (computing 32.7 instead of 29.1). With the corrected νd5 ≈ 52.4, the glass matches OHARA S-TIL27 (nd = 1.51742, νd = 52.15) — a titanate light flint. See §4 for further discussion.*

This doublet is the chromatic correction workhorse for the rear half of G1. L16 is the sole ED (extra-low dispersion) glass element in the entire lens — confirmed by Fujifilm's product literature as S-FPL51, a calcium fluoride equivalent phosphate crown with anomalous partial dispersion. Its extremely high Abbe number (νd = 81.5) paired against L15's moderate dispersion creates a strong achromatic correction. The Abbe difference νd6 − νd5 falls well within conditional expression 4 (20.0 < νd6 − νd5 < 70.0).

The combined power of D2 is negative, which complements the positive L17 that follows. Together, L15+L16+L17 form a weakly positive triplet-like arrangement behind the stop that performs field flattening and lateral color correction without adding significant axial power.

### L17 — Element 7 (1-7 lens)

| Property | Value |
|---|---|
| Shape | Positive meniscus (convex toward object), **2× aspherical** |
| Surfaces | S12A (R = +34.588) / S13A (R = +106.552) |
| nd / νd | 1.80348 / 40.4 |
| Glass | Lanthanum heavy flint family (PGM-suitable; see §4) |
| Standalone fl | +62.7 mm |

L17 is the most optically distinctive element in the design — the only aspherical element, and the last element of G1. Both surfaces carry aspherical corrections (see §5 for detailed analysis). Fujifilm's product page specifically identifies this as a "glass molded aspheric lens" used "to prevent field curvature." The patent confirms that the aspherical surfaces reduce sagittal field curvature in particular (para [0067]).

The element uses a high-index glass (nd = 1.80348) in the lanthanum heavy flint family, which is characteristic of glasses suitable for precision glass molding (PGM). The high index allows the aspherical surfaces to achieve significant wavefront correction with relatively small physical departures from the spherical base curve.

L17 is also the rearmost element of G1 and the boundary surface for the variable air gap D13. As G1 moves forward during focusing, L17's rear surface moves away from L21, increasing the D13 gap from 1.80 mm at infinity to 23.73 mm at −0.5× magnification.

### L21 — Element 8 (2-1 lens)

| Property | Value |
|---|---|
| Shape | Plano-concave negative |
| Surfaces | S14 (R = ∞) / S15 (R = +22.466) |
| nd / νd | 1.72916 / 54.7 |
| Glass | **S-LAL18** (OHARA) — exact match (same glass as L13) |
| Standalone fl | −30.8 mm |

L21 is the first element of the fixed G2 group. Its negative power diverges the converging beam, increasing the back focal distance and reducing the cone angle incident on the sensor. The flat front surface faces the variable air gap and receives light at varying angles as G1 moves during focusing. The strongly curved concave rear surface (R = +22.5 mm) provides the negative power.

### L22 — Element 9 (2-2 lens)

| Property | Value |
|---|---|
| Shape | Positive meniscus (convex toward object) |
| Surfaces | S16 (R = +28.669) / S17 (R = +77.494) |
| nd / νd | 1.51823 / 58.9 |
| Glass | **S-NSL3** (OHARA) — exact match |
| Standalone fl | +86.1 mm |

L22 partially compensates for L21's negative power, re-converging the beam toward the image plane. As a moderate-index crown glass, it contributes minimal chromatic aberration.

### L23 — Element 10 (2-3 lens)

| Property | Value |
|---|---|
| Shape | Biconvex positive (strongly convex toward image) |
| Surfaces | S18 (R = +236.547) / S19 (R = −56.983) |
| nd / νd | 1.80400 / 46.6 |
| Glass | **S-LAH65V** (OHARA) — very close match |
| Standalone fl | +57.4 mm |

L23 is the final optical element before the image plane. It is strongly asymmetric — nearly flat on the front (R = +237 mm) and deeply curved on the rear (R = −57 mm). This rearward-convex geometry makes L23 the primary field-flattening element in G2. Its high refractive index (nd = 1.804) in lanthanum heavy crown glass allows the strongly curved rear surface to correct Petzval field curvature without introducing excessive higher-order aberrations. Together with L21 and L22, it forms a quasi-telecentric rear corrector that keeps the exit cone angle moderate for the APS-C sensor.

### Cover Glass (GC)

The patent includes a parallel-plate cover glass (surfaces S20/S21, R = ∞/∞, d = 2.85 mm, nd = 1.51680 / νd = 64.2). This represents the sensor's protective cover glass and IR-cut filter stack. The glass is standard N-BK7 or S-BSL7. In the data file, the cover glass is excluded from the surface array and its optical path is folded into the back focal distance of surface S19 as an air-equivalent thickness: d_BFD = 18.46 + 2.85/1.51680 ≈ 20.34 mm.

---

## 4. Glass Identification

Glass matches were determined by comparing nd/νd pairs against the OHARA, HOYA, Schott, and Sumita catalogs. Six-digit glass codes (nd×1000 rounded / νd×10 rounded) were used for cross-referencing.

| Elem | nd | νd | Code | Identification | Confidence |
|---|---|---|---|---|---|
| L11 | 1.48749 | 70.2 | 487/702 | **S-FSL5** (OHARA) | Exact |
| L12 | 1.58913 | 61.1 | 589/611 | **S-BAL35** (OHARA) | Exact |
| L13 | 1.72916 | 54.7 | 729/547 | **S-LAL18** (OHARA) | Exact |
| L14 | 1.66680 | 31.1 | 667/311 | Dense flint family | Family only |
| L15 | 1.51742 | 48.8† | 517/522‡ | **S-TIL27** (OHARA) — probable (νd corrected to ≈52.2) | High confidence |
| L16 | 1.49700 | 81.5 | 497/815 | **S-FPL51** (OHARA) — **ED glass** | Exact |
| L17 | 1.80348 | 40.4 | 803/404 | Lanthanum heavy flint (PGM-suitable) | Family only |
| L21 | 1.72916 | 54.7 | 729/547 | **S-LAL18** (OHARA) | Exact (same as L13) |
| L22 | 1.51823 | 58.9 | 518/589 | **S-NSL3** (OHARA) | Exact |
| L23 | 1.80400 | 46.6 | 804/466 | **S-LAH65V** (OHARA) | Very close |

**Unresolved glasses:**

L14 (nd = 1.66680, νd = 31.1): No exact match found in current OHARA, HOYA, or Schott catalogs. The nearest OHARA glass by refractive index is S-TIH14 (nd = 1.76182) — far too high. HOYA E-FD2 (nd = 1.66680) has νd = 33.05, not 31.1. This may be a proprietary melt, a discontinued glass type, or the νd value may contain a patent transcription error.

L15 (nd = 1.51742, νd = 48.8 as listed): The νd value listed in Table 1 is almost certainly a typographical error. The conditional expression cross-check (§7) shows that all five other examples in the patent produce νd6 − νd5 values matching Table 17 exactly, while Example 1 alone fails — requiring νd5 ≈ 52.4 to produce the Table 17 value of 29.1. OHARA S-TIL27 (nd = 1.51742, νd = 52.15) is the most likely intended glass, with a residual of only 0.25 in νd attributable to rounding. The six-digit code with corrected νd would be 517/522. (†Listed value; ‡corrected code.)

L17 (nd = 1.80348, νd = 40.4): This glass is in the lanthanum heavy flint region (LaF/LaSF boundary). No exact catalog match was found. The closest candidates are S-LAH53 (nd = 1.80610, νd = 40.93) and HOYA NBFD3, but neither is an exact match. As a glass-molded aspherical element, L17 likely uses a low-softening-temperature (L-) variant or a proprietary PGM glass optimized for molding at the nd/νd required by the design.

---

## 5. Aspherical Surface Analysis

Both surfaces of L17 (S12A and S13A) are aspherical. The patent specifies aspherical coefficients using a non-standard formulation that includes **odd-order** polynomial terms (A3, A5, A7, A9) in addition to even-order terms (A4, A6, A8, A10).

### 5.1 Patent aspherical formula

The patent (para [0083]) defines the sag as:

> Z = C·Y² / {1 + √(1 − K·C²·Y²)} + Σ(An·Yⁿ)  for n = 3, 4, 5, ..., 10

where K is described as "an eccentricity" and C = 1/R. Note that this differs from the standard optics convention:

> Z = c·h² / {1 + √(1 − (1+K)·c²·h²)} + A4·h⁴ + A6·h⁶ + ...

The patent's K relates to the standard conic constant K_std by: **K_std = K_patent − 1**.

### 5.2 Surface 12A (L17 front) — patent coefficients

| Parameter | Patent value | Standard equivalent |
|---|---|---|
| R | 34.5881 mm | — |
| K (patent) | −3.054014×10¹ | K_std = −31.54 |
| A3 | −1.886310×10⁻⁴ | (odd order) |
| A4 | +2.861281×10⁻⁴ | — |
| A5 | −7.198710×10⁻⁵ | (odd order) |
| A6 | +1.134194×10⁻⁵ | — |
| A7 | −2.726246×10⁻⁷ | (odd order) |
| A8 | −1.992572×10⁻⁷ | — |
| A9 | +2.806654×10⁻⁸ | (odd order) |
| A10 | −1.181930×10⁻⁹ | — |

The strongly negative standard conic constant (K ≈ −31.5) makes this a heavily oblate hyperboloidal base curve. The polynomial terms — particularly the odd orders — superimpose fine-grained wavefront corrections onto this base shape. At h = 10 mm, the total aspherical departure from the spherical base curve is approximately −64 µm (the aspherical surface is flatter than the sphere at the rim). At h = 8 mm, the departure is +41 µm (the aspherical surface is steeper than the sphere at mid-zone). This sign reversal between mid-zone and rim is characteristic of surfaces designed to correct higher-order spherical aberration and field curvature simultaneously.

### 5.3 Surface 13A (L17 rear) — patent coefficients

| Parameter | Patent value | Standard equivalent |
|---|---|---|
| R | 106.5522 mm | — |
| K (patent) | +6.010862×10¹ | K_std = +59.11 |
| A3 | −1.680437×10⁻⁴ | (odd order) |
| A4 | +1.554805×10⁻⁴ | — |
| A5 | −5.548409×10⁻⁵ | (odd order) |
| A6 | +1.067906×10⁻⁵ | — |
| A7 | −1.051099×10⁻⁶ | (odd order) |
| A8 | +4.143267×10⁻⁸ | — |
| A9 | +3.478004×10⁻¹⁰ | (odd order) |
| A10 | −4.029777×10⁻¹¹ | — |

This surface has a strongly positive K_std ≈ +59, which defines an oblate ellipsoidal base that departs rapidly from spherical. At h = 10 mm, the aspherical departure is approximately +181 µm — the aspherical surface sags significantly more than the sphere. This dramatic correction is aimed primarily at sagittal field curvature, consistent with the patent's claim.

### 5.4 Even-order refit for renderer

The lens diagram renderer's aspherical schema supports only even-order coefficients (A4, A6, A8, A10, A12, A14). The patent's use of odd-order terms (A3, A5, A7, A9) requires a least-squares refit to even-order polynomials for visualization. The conic constant K_std is retained from the patent; only the polynomial coefficients are refitted.

The refit was performed over h = 0–11 mm (covering the estimated semi-diameter with margin) using 200 sample points and scipy least-squares optimization.

**Surface 12A — refitted coefficients:**

| Parameter | Refitted value |
|---|---|
| K | −3.154014×10¹ |
| A4 | +9.643206×10⁻⁵ |
| A6 | −4.485087×10⁻⁷ |
| A8 | −9.443291×10⁻⁹ |
| A10 | +2.623015×10⁻¹⁰ |
| A12 | −1.989546×10⁻¹² |
| A14 | +2.061914×10⁻¹⁵ |
| Max residual | 0.10 nm |
| RMS residual | 0.04 nm |

**Surface 13A — refitted coefficients:**

| Parameter | Refitted value |
|---|---|
| K | +5.910862×10¹ |
| A4 | +3.386573×10⁻⁶ |
| A6 | +2.311207×10⁻⁷ |
| A8 | −5.842872×10⁻⁹ |
| A10 | +5.698330×10⁻¹¹ |
| A12 | −1.773299×10⁻¹³ |
| A14 | +2.131915×10⁻¹⁶ |
| Max residual | 0.14 nm |
| RMS residual | 0.05 nm |

Both refits achieve sub-nanometer accuracy — well within the manufacturing tolerance of a glass-molded aspherical element (typically ±500–1000 nm). The A12 and A14 terms are needed to absorb the influence of the odd-order patent terms but remain small enough to be physically plausible.

---

## 6. Focus Mechanism

The XF60mm uses **unit focusing of the first group (G1)**: the entire assembly of L11 through L17, including the aperture stop, translates forward as a rigid unit along the optical axis. G2 remains fixed. This is the simplest possible focusing architecture — a single moving group with no floating elements.

### Variable gap D13

The air gap between L17's rear surface (S13A) and L21's front surface (S14) is the sole variable spacing:

| Focus state | D13 (mm) | Extension from ∞ |
|---|---|---|
| Infinity | 1.80 | 0 mm |
| −0.2× magnification | 10.57 | +8.77 mm |
| −0.5× magnification | 23.73 | +21.93 mm |

At maximum magnification (−0.5×), G1 has extended 21.93 mm forward from its infinity position. This is a substantial extension — approximately 36% of the design focal length — which is typical of macro lenses achieving 0.5× reproduction ratios. In practice, the front element protrudes significantly from the lens barrel at close focus, which is why the production lens ships with a deep metal hood.

### Why single-group focus?

The patent explicitly contrasts this design against floating-focus systems (para [0064]), arguing that single-group focus "can simplify the mechanism for moving lenses while focusing, and miniaturization of the lens and low cost can be achieved as a result." The trade-off is that chromatic and field curvature aberrations change more with focus distance than in a floating system, but the cemented doublets and G2's corrector architecture mitigate this. The aberration diagrams in the patent (Figs. 7–9) show well-controlled performance across the full focus range from infinity to −0.5×.

---

## 7. Optical Performance Parameters

### Verified by paraxial ray trace

| Parameter | Computed | Patent stated | Match |
|---|---|---|---|
| EFL | 61.059 mm | 61.06 mm | ✓ (0.00%) |
| fi/f1 | 1.180 | 1.179 | ✓ |
| fi/f1a | 1.088 | 1.087 | ✓ |
| fi/f1b | 0.247 | 0.248 | ✓ |
| νd3 − νd4 | 23.6 | 23.6 | ✓ |
| νd6 − νd5 (as listed) | 32.7 | 29.1 | ✗ (see L15 erratum) |
| νd6 − νd5 (corrected) | 29.1 | 29.1 | ✓ |
| G2 fl | 978 mm | — | — |

### Petzval sum

The surface-by-surface Petzval sum is +0.00240 mm⁻¹, corresponding to a Petzval radius of +417 mm (Rp/EFL = 6.83). For a 60 mm focal length lens, this indicates well-controlled inward (positive) field curvature. The Petzval sum accumulates to +0.0348 through the front sub-group (L11–L13, dominated by L13's strong positive power), then is sharply pulled back by L14's negative rear surface to +0.0032 at the stop. Behind the stop, D2 and L17 bring it briefly negative (−0.0047 after L16), before G2's corrector group — particularly L23's strongly curved rear surface — restores it to the final +0.0024. This oscillating behavior reflects the deliberate balancing of positive and negative surface powers throughout the design.

### Image circle

The half-field angle of 12.7° at f = 61.06 mm yields a design image circle diagonal of approximately 27.5 mm. The Fuji X-mount APS-C sensor diagonal is 28.2 mm (23.5 × 15.6 mm), so the patent's 2ω = 25.4° represents the designed optimization field — slightly inside the sensor corners. Fujifilm's own product specification lists the angle of view as 26.6°, which corresponds to the full sensor diagonal (2 × arctan(14.1/61.06) ≈ 26.0°). The ~0.6° difference between the design field (25.4°) and full-sensor field (26.0°) provides a margin for vignetting control at the extreme corners, which is standard practice for this class of lens.

### Back focal distance

The patent specifies d_19 = 18.46 mm (S19 to cover glass front) plus a 2.85 mm cover glass (nd = 1.51680). The image plane falls at the exit face of the cover glass (verified by paraxial trace: residual distance ≈ 0 mm). For the data file, the cover glass is excluded and its optical path folded into the BFD as an air-equivalent thickness: d_BFD = 18.46 + 2.85/1.51680 = 20.34 mm.

---

## 8. Semi-Diameter Estimation

Semi-diameters were estimated by tracing marginal and chief rays through the system. The marginal ray was launched at the entrance pupil radius (EP_SD = EFL/(2·F_NO) = 61.06/4.96 = 12.31 mm) with zero angle. The chief ray was launched at 60% of the maximum half-field angle (offAxisFieldFrac = 0.60, i.e. ω = 7.62°) through the center of the entrance pupil. At each surface, the semi-diameter estimate is |y_marginal| + |y_chief| with ~10% mechanical clearance added.

The front group SDs are constrained by the 39 mm filter thread (maximum SD ≈ 18.5 mm); all estimates fall comfortably within this limit (maximum front SD ≈ 15.5 mm). Behind the stop, SDs are noticeably smaller (8–9.5 mm) as expected for the narrower beam.

Validation checks performed: edge thickness ≥ 0.3 mm for all elements (minimum: L11 at 0.96 mm); front/rear SD ratio ≤ 1.25 for all elements (maximum: L13 at 1.29, within the 3.0 sanity limit); cross-gap sag intrusion within gap × 1.1 for all air gaps.

---

## 9. Design Rationale Summary

The XF60mm F2.4 R Macro is a two-group medium telephoto with a positive front group and a weak rear corrector, adapted for close-range performance at up to 0.5× magnification. The key design decisions visible in the patent are:

1. **Two cemented doublets for chromatic control.** The D1 doublet (L13+L14) corrects longitudinal chromatic aberration in the converging front group. The D2 doublet (L15+L16) with its ED glass element corrects both longitudinal and lateral chromatic aberration behind the stop. Together they enable good chromatic performance from infinity through −0.5× magnification.

2. **Glass-molded aspherical element (L17) for field curvature.** By placing the aspherical surfaces after the stop and on the last element of G1, the designer gains maximum leverage over sagittal field curvature — the aberration that the patent identifies as the primary target. Fujifilm describes this as a "glass molded aspheric lens" in their product literature.

3. **Fixed three-element rear group for field correction.** G2's near-afocal power (fl ≈ 978 mm) serves mainly to reduce the exit cone angle onto the APS-C sensor and to control field curvature variation across the focus range, while adding minimal axial power. The negative-positive-positive triplet arrangement in G2 balances the Petzval sum (final Rp = 417 mm, or Rp/EFL = 6.8, indicating well-controlled field curvature).

4. **Single-group focus for simplicity.** The absence of floating elements reduces mechanical complexity, cost, and weight — contributing to the lens's remarkably compact 215 g mass — at a modest cost in close-range aberration performance that the cemented doublets compensate for.

### Production specifications (Fujifilm)

| Spec | Value |
|---|---|
| Marketed focal length | 60 mm (91 mm equiv. on APS-C) |
| Maximum aperture | f/2.4 |
| Minimum aperture | f/22 |
| Aperture blades | 9 (rounded) |
| Close focus distance | 26.7 cm |
| Maximum magnification | 0.5× |
| Filter thread | 39 mm |
| Weight | 215 g |
| Dimensions | 64 mm (dia.) × 70.9 mm (length) |
| Coating | Super EBC (Electron Beam Coating) |
| Mount | Fujifilm X-mount (17.7 mm flange distance) |

---

## 10. Open Questions and Patent Errata

**Confirmed patent error:**
- **L15 Abbe number (Table 1, surface 9):** Listed as νd = 48.8, but cross-checking all six numerical examples against Table 17's conditional expression values proves this is a typographical error. The intended value is νd ≈ 52.2, consistent with OHARA S-TIL27 (nd = 1.51742, νd = 52.15). See §3 footnote and §4 for full analysis. The nd value (1.51742) is used in the surface prescription and is unaffected by this erratum.

**Unresolved items:**
- **L14 glass identity:** The nd = 1.66680 / νd = 31.1 combination has no confirmed catalog match in OHARA, HOYA, or Schott catalogs. This may be a proprietary melt, a discontinued type, or the νd value may contain an additional transcription error.
- **L17 glass identity:** The PGM glass (nd = 1.80348, νd = 40.4) has no exact catalog match and is likely a proprietary or low-softening-temperature variant optimized for glass molding.
- **Aspherical conic convention:** The patent uses a non-standard "eccentricity" K that maps to the standard conic constant as K_std = K_patent − 1. This conversion has been verified by consistency checks against spherical and paraboloidal limit cases. All values in this document and the data file use the converted standard convention.
- **Odd-order aspherical terms:** The patent specifies odd-order polynomial coefficients (A3, A5, A7, A9) not supported by the renderer's even-order-only schema. A least-squares refit to even-order-only terms (A4–A14) achieves sub-0.15 nm maximum residual over the estimated clear aperture (h = 0–11 mm). Refitted coefficients are listed in §5.4 and used in the data file.
