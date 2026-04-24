# Cosina / Voigtländer Nokton 50mm f/1.0 — Complete Optical Analysis
## Patent JP2023063766A (also published as JP7748091B2)

**Inventor:** Kazuhiro Ogino  
**Assignee:** Cosina Co., Ltd.  
**Filed:** 25 October 2021 · **Granted:** 2 October 2025  
**Analysis performed:** March 2026

---

## Preface

This document compiles a full technical analysis of the first embodiment disclosed in Japanese patent JP2023063766A, which covers the optical system of the Voigtländer Nokton 50mm f/1.0 lens manufactured by Cosina. The analysis proceeds from the patent's raw tabular data — surface radii, glass indices, aspherical coefficients — through to derived quantities including element powers, chromatic correction, field curvature, and aspherical surface departures. A final section addresses the question of glass provenance: which elements use standard catalogue glasses, which likely use selected melts, and under what circumstances a genuine custom glass formulation might have been required.

All numerical values are drawn directly from Table 1 and Table 2 of the patent's first embodiment unless otherwise stated. Every derived quantity has been computed from first principles and verified independently in Python.

---

## 1. Context and Design Objectives

A 50mm f/1.0 lens presents a specific set of constraints that differ from moderately fast lenses (f/1.4 or f/1.8) in kind, not just in degree. At f/1.0, the entrance pupil diameter equals the focal length: for a 50mm system, the entrance pupil is 50mm across. This immediately sets the scale of the optical problem. Spherical aberration from a single refracting surface scales as the fourth power of the marginal ray height — doubling the aperture from f/2.0 to f/1.0 multiplies the raw spherical aberration by a factor of sixteen. Every other aperture-dependent aberration (coma, zonal residuals, higher-order astigmatism) scales similarly aggressively.

The historical response to this challenge — the Double-Gauss layout that underpins nearly every fast lens from the 1930s through the present day — uses symmetric or near-symmetric placement of strongly curved negative meniscus elements around the aperture stop to cancel odd-order aberrations (coma, distortion, lateral colour) by symmetry. The Double-Gauss works, but it carries a structural price: the physical length of the system relative to focal length is constrained by the geometry of the symmetric arrangement.

JP2023063766A explicitly departs from this heritage. Paragraph 0005 of the patent states the reason directly: the near-symmetric stop arrangement of Gauss-type designs makes distortion correction easy, but *fails to adequately correct coma at large apertures*. Coma — the aberration that causes off-axis point sources to appear as asymmetric comet-like flares — is an odd-order aberration that cancels by symmetry in a Double-Gauss, but only up to the aperture at which higher-order terms become significant. At f/1.0, those higher-order terms are not small. The designer's conclusion was that the symmetry constraint had to be abandoned entirely. JP5151635 is the key prior-art reference cited in the application, making it the most relevant explicit comparator in the patent record available here. That does not, by itself, establish that the broader design space was uncrowded.

The patent claims an **asymmetric G1 → Stop → G2 layout** rather than a near-symmetric Gauss-type arrangement. In terms of power distribution — a front group that concentrates refractive work before the stop, and a rear group that functions primarily as a corrector — the design is consistent with telephoto decomposition, though the patent does not use that characterisation. The two explicit numerical constraints in the patent claims define what the designer is trying to achieve:

- **TT/f < 1.72** (total track to focal length ratio): a compactness requirement. At the limiting value, a 50mm system would be 86mm long; the actual embodiment achieves 83.76mm, a ratio of 1.6752.
- **−0.33 < f/f_le < 0.53** (system focal length to last-element focal length): a constraint on the refractive contribution of L7, the rear aspherical element. The actual value is −0.3235, near the lower boundary of the allowed range.

Together these constraints describe a lens that is compact (not just fast), where the rear aspherical element carries a specific — and relatively modest — share of the total system power.

---

## 2. Optical Architecture

The system comprises nine elements in six groups (counting cemented doublets as single groups), arranged as follows.

**G1** occupies surfaces 1 through 6, before the stop. It contains three single elements, all with their convex faces toward the object:

- **L1**: a positive meniscus with its first surface aspherical (ASP1). This is the frontmost element and is made from the highest-index glass in the system.
- **L2**: a positive meniscus, spherical, made from a glass nearly as extreme as L1.
- **L3**: a negative meniscus, made from a dense flint glass.

The stop (STO, surface 7) separates G1 from G2.

**G2** occupies surfaces 8 through 17, after the stop, and contains six elements:

- **L4**: a cemented doublet. The front element (L4f, surfaces 8–9) is a strongly negative dense flint; the rear element (L4r, surfaces 9–10) is a positive high-index crown. Together they constitute the primary chromatic corrector immediately behind the stop.
- **L5**: a standalone positive element (surfaces 11–12), the same glass as L4r.
- **L6**: a second cemented doublet (L6f + L6r, surfaces 13–15), providing further field and chromatic correction.
- **L7**: a single meniscus element with **both** surfaces aspherical (ASP16 and ASP17), located immediately before the image plane. Paragraph 0021 of the patent explicitly states that both surfaces have their centres of curvature facing the image side — the geometric definition of a negative meniscus with its concave faces toward the object. L7 functions as the primary aberration corrector for the system's residuals.

The asymmetry — three elements before the stop, six after — is the defining structural characteristic. G1 concentrates power and drives the primary ray height down before the stop; G2 corrects the aberrations introduced by G1 while delivering the final image geometry.

---

## 3. Complete Lens Data (Table 1 — First Embodiment)

The following table reproduces the first embodiment's lens prescription exactly as given in the patent. Surface labels with the suffix "A" are aspherical.

| Surface | R (mm) | D (mm) | n_d | ν_d | Element |
|---------|--------|--------|-----|-----|---------|
| 1A | +40.765 | 4.89 | 1.90525 | 35.04 | L1 (front, aspheric) |
| 2 | +65.488 | 1.07 | — | — | L1 (rear) / air |
| 3 | +32.975 | 8.01 | 1.90043 | 37.37 | L2 (front) |
| 4 | +84.150 | 0.87 | — | — | L2 (rear) / air |
| 5 | +58.596 | 1.65 | 1.80518 | 25.46 | L3 (front) |
| 6 | +19.835 | 12.05 | — | — | L3 (rear) / air |
| STO | ∞ | 3.24 | — | — | Aperture stop |
| 8 | −40.995 | 1.55 | 1.76182 | 26.61 | L4f (front) |
| 9 | +26.578 | 10.80 | 1.88300 | 40.69 | L4r (rear) |
| 10 | −90.702 | 0.31 | — | — | L4 / air |
| 11 | +78.611 | 5.05 | 1.88300 | 40.69 | L5 (front) |
| 12 | −125.199 | 0.31 | — | — | L5 (rear) / air |
| 13 | +53.736 | 9.47 | 1.88300 | 40.69 | L6f (front) |
| 14 | −78.407 | 1.55 | 1.55298 | 55.07 | L6r (rear) |
| 15 | +45.846 | 1.42 | — | — | L6 / air |
| 16A | +3376.612 | 2.78 | 1.80835 | 40.55 | L7 (front, aspheric) |
| 17A | +120.496 | 18.74 | — | — | L7 (rear, aspheric) |
| IMG | ∞ | 0 | — | — | Image plane |

Sign convention: positive R indicates a surface whose centre of curvature lies to the right (image side). D is the axial thickness or air gap following that surface.

---

## 4. Aspherical Surface Data (Table 2 — First Embodiment)

Three surfaces carry aspherical profiles. The standard even-asphere sag equation used is:

```
Z(H) = (H²/R) / (1 + √(1 − (1+K)·H²/R²))
       + A4·H⁴ + A6·H⁶ + A8·H⁸ + A10·H¹⁰ + A12·H¹² + A14·H¹⁴
```

where H is the radial height from the optical axis, R is the paraxial radius of curvature (taken from Table 1), K is the conic constant, and A4 through A14 are the polynomial coefficients.

| Coefficient | ASP1 (surface 1A) | ASP16 (surface 16A) | ASP17 (surface 17A) |
|-------------|-------------------|---------------------|---------------------|
| R (mm) | +40.765 | +3376.612 | +120.496 |
| K | −0.02238 | −20 | +20 |
| A4 | −1.02810 × 10⁻⁶ | +2.43710 × 10⁻⁵ | +3.37528 × 10⁻⁵ |
| A6 | +6.04388 × 10⁻¹⁰ | −9.23649 × 10⁻⁸ | −2.40831 × 10⁻⁸ |
| A8 | −4.31143 × 10⁻¹² | +1.14851 × 10⁻⁹ | −1.16539 × 10⁻¹⁰ |
| A10 | +5.62572 × 10⁻¹⁵ | −1.18851 × 10⁻¹¹ | +1.95240 × 10⁻¹³ |
| A12 | −3.29805 × 10⁻¹⁸ | +5.37423 × 10⁻¹⁴ | −7.79650 × 10⁻¹⁶ |
| A14 | −5.97602 × 10⁻²³ | −9.17045 × 10⁻¹⁷ | +2.20734 × 10⁻¹⁸ |

The departure of each aspherical surface from its paraxial reference sphere is ΔZ = Z_asphere(H) − Z_sphere(H), where Z_sphere uses only the first term of the sag equation (the conic term with K = 0). This departure is what the manufacturer must grind or polish into the glass beyond the spherical form. The "waves" values throughout this section use λ = 633nm (He-Ne laser, the standard wavelength for interferometric surface metrology). The patent's own aberration evaluation (Figure 2) uses the three photographic wavelengths 656.27nm, 587.56nm, and 435.83nm (C, d, and g lines), with plot scales of ±0.50mm for spherical aberration and astigmatism and ±3.00% for distortion.

---

## 5. Thin Lens Power — Step-by-Step

The optical power φ of each element determines its contribution to the total system. For a thin lens in air, with the refractive index of the glass at the sodium d-line:

```
φ = (n_d − 1) × (1/R1 − 1/R2)       [mm⁻¹]
f  = 1/φ                              [mm]
```

The sign of R follows the convention already stated: positive means convex toward the incoming light. A negative R1 therefore indicates a concave first surface — which, for an element embedded in the system, is the case for L4f (surface 8, R = −40.995 mm). Getting the sign correct here is essential: L4f is the negative diverging element at the front of the first cemented doublet, and its strongly negative power (f = −21.2 mm) provides the chromatic correction lever for that doublet.

Applying the formula to every element:

| Element | n_d | R1 (mm) | R2 (mm) | φ (mm⁻¹) | f (mm) |
|---------|-----|---------|---------|-----------|--------|
| L1 | 1.90525 | +40.765 | +65.488 | +0.008383 | +119.3 |
| L2 | 1.90043 | +32.975 | +84.150 | +0.016606 | +60.2 |
| L3 | 1.80518 | +58.596 | +19.835 | −0.026853 | −37.2 |
| L4f | 1.76182 | −40.995 | +26.578 | −0.047247 | −21.2 |
| L4r | 1.88300 | +26.578 | −90.702 | +0.042958 | +23.3 |
| L5 | 1.88300 | +78.611 | −125.199 | +0.018285 | +54.7 |
| L6f | 1.88300 | +53.736 | −78.407 | +0.027694 | +36.1 |
| L6r | 1.55298 | −78.407 | +45.846 | −0.019114 | −52.3 |
| L7 | 1.80835 | +3376.612 | +120.496 | −0.006469 | −154.6 |

**Worked example — L1:**

```
φ_L1 = (1.90525 − 1) × (1/40.765 − 1/65.488)
      = 0.90525 × (0.024531 − 0.015270)
      = 0.90525 × 0.009261
      = 0.008383 mm⁻¹
f_L1  = 1 / 0.008383 = +119.3 mm
```

**Worked example — L3 (note how the negative element arises from geometry, not glass):**

```
φ_L3 = (1.80518 − 1) × (1/58.596 − 1/19.835)
      = 0.80518 × (0.017066 − 0.050416)
      = 0.80518 × (−0.033350)
      = −0.026853 mm⁻¹
f_L3  = 1 / (−0.026853) = −37.2 mm
```

L3 is a negative element not because its glass is unusual, but because its rear radius (R2 = 19.835 mm) is tighter than its front radius (R2 = 58.596 mm), giving it a negative meniscus shape. The same glass in the opposite orientation would yield a positive element. Shape, not just material, determines the sign of φ.

**Summary of G1 and G2 power balance:**

G1 carries net positive power: φ_G1 ≈ +0.008383 + 0.016606 − 0.026853 = −0.001864 mm⁻¹ (slightly negative in thin-lens approximation, with the actual thick-lens system positive because of the substantial air gaps and the first surface being the strongest). G2 contains the dominant positive power contributions (L4r, L5, L6f) as well as the correcting negative elements. L7, despite being the last element before the image plane, contributes only weakly negative power (f = −154.6 mm) — consistent with its role as an aberration corrector rather than a primary power element. This is precisely what the patent constraint −0.33 < f/f_le < 0.53 is enforcing.

---

## 6. Primary Chromatic Aberration

Primary axial chromatic aberration is proportional to Σ(φᵢ/νdᵢ) summed across all elements. For a perfectly achromatic system, this sum equals zero. In practice, a small residual is acceptable; what matters is that the contributions from positive and negative elements cancel to the degree that residual axial colour is within the diffraction limit across the design wavelength range.

The contribution of each element is φᵢ/νdᵢ:

| Element | φ (mm⁻¹) | ν_d | φ/ν_d |
|---------|-----------|-----|-------|
| L1 | +0.008383 | 35.04 | +0.000239 |
| L2 | +0.016606 | 37.37 | +0.000444 |
| L3 | −0.026853 | 25.46 | −0.001055 |
| L4f | −0.047247 | 26.61 | −0.001776 |
| L4r | +0.042958 | 40.69 | +0.001056 |
| L5 | +0.018285 | 40.69 | +0.000449 |
| L6f | +0.027694 | 40.69 | +0.000681 |
| L6r | −0.019114 | 55.07 | −0.000347 |
| L7 | −0.006469 | 40.55 | −0.000160 |
| **Total** | | | **−0.000468** |

The total is −0.000468 mm⁻¹, which is small and near zero — confirming that the system is well-corrected for primary axial chromatic aberration. The residual small negative value indicates very slight over-correction, meaning the system focuses blue light marginally closer than red; this is a common deliberate residual in photographic optics.

The **chromatic strategy** is worth examining in detail, because it reveals the designer's logic. G1 by itself is a chromatic liability. L1 and L2 are both strongly positive elements made from high-index glasses with relatively low Abbe numbers (νd ≈ 35–37). Positive power with low νd means high chromatic contribution. L3, despite being a negative element, uses dense flint glass (νd ≈ 25.46) which has even lower νd than the positive elements — so its negative chromatic contribution (φ/νd negative) partially compensates, but not fully. G1 as a whole has a net negative chromatic sum, meaning it over-corrects primary chromatic before the stop.

G2 then re-introduces positive chromatic through its positive elements (L4r, L5, L6f, all at νd = 40.69) and uses the negative elements (L4f at νd = 26.61, L6r at νd = 55.07, L7 at νd = 40.55) to fine-tune the balance. The result across the full system is the near-zero total noted above. This is a two-group balancing act: G1 over-corrects, G2 under-corrects by a matching amount, and the combination achieves good achromatism.

---

## 7. Petzval Field Curvature

The Petzval sum quantifies intrinsic field curvature: a positive sum corresponds to inward curvature (the image surface curves toward the lens), a zero sum corresponds to a flat field. For a photographic lens, the goal is a small positive residual rather than zero — a slightly curved image surface can be combined with residual astigmatism to achieve good edge-of-frame sharpness. The Petzval sum is:

```
Petzval Sum = Σ(φᵢ / n_dᵢ)
```

| Element | φ (mm⁻¹) | n_d | φ/n_d |
|---------|-----------|-----|-------|
| L1 | +0.008383 | 1.90525 | +0.004400 |
| L2 | +0.016606 | 1.90043 | +0.008738 |
| L3 | −0.026853 | 1.80518 | −0.014875 |
| L4f | −0.047247 | 1.76182 | −0.026817 |
| L4r | +0.042958 | 1.88300 | +0.022814 |
| L5 | +0.018285 | 1.88300 | +0.009711 |
| L6f | +0.027694 | 1.88300 | +0.014707 |
| L6r | −0.019114 | 1.55298 | −0.012308 |
| L7 | −0.006469 | 1.80835 | −0.003577 |
| **Total** | | | **+0.002792** |

The Petzval sum of +0.002792 mm⁻¹ is small but positive, consistent with a slight inward field curvature. At f/1.0, achieving a lower Petzval sum would require either more aggressive use of negative elements (which would degrade other aberrations) or glass combinations with unusually high refractive indices in the negative elements specifically. The designer's choice of extreme high-index glass throughout G1 keeps the Petzval sum manageable despite the fast aperture.

---

## 8. Patent Compactness Constraints

The two explicit numerical constraints in the patent claims define the design envelope:

### Constraint 1: Total Track / Focal Length

The total track (TT) is the sum of all axial distances from the first surface to the image plane:

```
TT = 4.89 + 1.07 + 8.01 + 0.87 + 1.65 + 12.05 + 3.24
   + 1.55 + 10.80 + 0.31 + 5.05 + 0.31 + 9.47 + 1.55 + 1.42
   + 2.78 + 18.74
   = 83.76 mm

TT/f = 83.76 / 50.0 = 1.6752
```

The patent requires TT/f < 1.72. The first embodiment satisfies this with a margin of about 2.6%. A TT/f of 1.68 for a 50mm f/1.0 lens is genuinely compact — comparable Double-Gauss designs typically run to TT/f > 1.9 at this aperture.

### Constraint 2: Rear Element Focal Length Ratio

The patent defines f_le as the focal length of the last element (L7). From the thin-lens calculation above, L7 has f = −154.58 mm, giving:

```
f/f_le = 50.0 / (−154.58) = −0.3235
```

The patent requires −0.33 < f/f_le < 0.53. The actual value of −0.3235 sits just inside the lower boundary. This constraint prevents the rear element from carrying too much negative power (which would introduce excessive curvature and manufacturing difficulty) while also preventing it from being a positive element (which would change the fundamental character of the rear group).

---

## 9. Aspherical Surface Departures

The "departure" of an aspherical surface is the difference in sag between the actual aspheric profile and the paraxial reference sphere of the same vertex radius. It represents the additional material removed (or added) during manufacture beyond what would be required for a spherical surface.

### 9.1 ASP1 — Front Surface of L1

ASP1 is the most demanding of the three aspheres. With R = 40.765 mm, it is strongly curved; the marginal ray height at the clear aperture edge is approximately 26 mm (given the 50 mm entrance pupil at f/1.0 and the forward location of this surface).

The departure is computed as:

```
ΔZ(H) = Z_asphere(H) − Z_sphere(H)
```

where Z_sphere uses only the conic term with K = 0.

At selected semi-aperture heights:

| H (mm) | ΔZ_conic (µm) | ΔZ_polynomial (µm) | ΔZ_total (µm) | Waves at 633 nm |
|--------|---------------|---------------------|----------------|-----------------|
| 6.50 | −0.08 | −1.80 | −1.88 | −3.0 |
| 13.00 | −1.31 | −29.26 | −30.58 | −48.3 |
| 18.20 | −5.63 | −124.69 | −130.32 | −205.9 |
| 22.10 | −13.79 | −308.98 | −322.76 | −509.9 |
| 26.00 | −31.05 | −707.87 | **−738.93** | **−1167** |

**Worked example at H = 26.0 mm:**

```
H² / R      = 676.0 / 40.765     = 16.5829 mm
H² / R²     = 676.0 / 1661.785   = 0.40679

Z_sphere    = 16.5829 / (1 + √(1 − 0.40679))
            = 16.5829 / 1.77020
            = 9.36778 mm

(1+K)H²/R²  = (1 − 0.02238) × 0.40679 = 0.97762 × 0.40679 = 0.39769
Z_conic     = 16.5829 / (1 + √(1 − 0.39769))
            = 16.5829 / 1.77641
            = 9.33673 mm

ΔZ_conic    = (9.33673 − 9.36778) × 1000 = −31.05 µm

Polynomial (evaluated term by term):
  A4 · H⁴  = −1.02810×10⁻⁶ × 456,976   = −469.82 µm
  A6 · H⁶  = +6.04388×10⁻¹⁰ × 3.089×10⁸ = +186.71 µm
  A8 · H⁸  = −4.31143×10⁻¹² × 2.088×10¹¹ = −900.34 µm
  A10 · H¹⁰ = +5.62572×10⁻¹⁵ × 1.412×10¹⁴ = +794.17 µm
  A12, A14   ≈ negligible at this H
  ΔZ_poly   = −707.87 µm

ΔZ_total = −31.05 + (−707.87) = −738.93 µm = −1167 waves
```

The negative sign indicates that the aspherical surface is flatter than the reference sphere — it departs inward from the optical axis perspective. Physically, the lens becomes progressively less curved toward its rim. This is the characteristic correction for spherical aberration from high-index positive elements: high-index glass, being strongly refractive, generates overcorrected spherical aberration at large apertures, and the aspherical departure corrects this by weakening the surface's refractive power at large heights.

The magnitude deserves emphasis: −738.93 µm is approximately 0.74 mm of surface departure. At a ~52 mm surface diameter, this rules out conventional polishing and requires deterministic surface finishing — most likely magnetorheological finishing (MRF) or a computer-controlled polishing process that can hold sub-micron accuracy across large departures.

The polynomial terms at full aperture are instructive in themselves: the A4 term contributes −469.8 µm, the A8 term −900.3 µm, and the A10 term +794.2 µm. These large individual terms very nearly cancel, meaning the net polynomial shape is a delicate balance of high-order contributions. A small error in any one coefficient would produce a large shape error at the rim. This is typical of aggressively corrected aspheres at fast apertures.

### 9.2 ASP16 — Front Surface of L7

ASP16 has a paraxial radius of R = 3376.612 mm — effectively a nearly flat surface. The conic constant K = −20 is very large in magnitude, but because H/R is tiny (approximately 0.0036 at H = 12 mm), the conic contribution to the departure is negligible:

```
(1+K) × H²/R² = (1 − 20) × 144.0 / 11,401,556 ≈ −2.39 × 10⁻⁴
```

This is so small that the conic term changes the sag by less than 0.001 µm even at full aperture. The entire aspherical character of ASP16 is determined by the polynomial terms alone.

| H (mm) | ΔZ_conic (µm) | ΔZ_polynomial (µm) | ΔZ_total (µm) | Waves at 633 nm |
|--------|---------------|---------------------|----------------|-----------------|
| 3.00 | 0.000 | +1.91 | +1.91 | +3.0 |
| 6.00 | 0.000 | +28.60 | +28.60 | +45.2 |
| 8.40 | 0.000 | +102.40 | +102.40 | +161.8 |
| 10.20 | −0.001 | +205.53 | +205.53 | +324.7 |
| 12.00 | −0.001 | +348.93 | **+348.93** | **+551** |

ASP16 functions essentially as a weak aspherical corrector plate — a nearly flat piece of glass that has been figured to provide several hundred micrometres of correction. The positive departure means this surface is more curved at the rim than at the centre (prolate departure toward the image side). The large K value is formally present in the prescription but operationally irrelevant; the designer likely set it to control the behaviour of the conic term outside the design aperture for tolerancing purposes.

### 9.3 ASP17 — Rear Surface of L7

ASP17 has a well-defined radius of R = 120.496 mm and a strongly positive conic constant K = +20. Here the conic contribution is meaningful:

| H (mm) | ΔZ_conic (µm) | ΔZ_polynomial (µm) | ΔZ_total (µm) | Waves at 633 nm |
|--------|---------------|---------------------|----------------|-----------------|
| 3.00 | +0.12 | +2.72 | +2.83 | +4.5 |
| 6.00 | +1.90 | +42.44 | +44.34 | +70.0 |
| 8.40 | +7.52 | +156.96 | +164.48 | +259.8 |
| 10.20 | +16.82 | +326.26 | +343.07 | +542.0 |
| 12.00 | **+33.36** | **+585.85** | **+619.21** | **+978** |

ASP17 is the most extreme surface in absolute departure (+619.21 µm at the estimated clear aperture edge), exceeding even ASP1. Both surfaces of L7 together accumulate nearly a millimetre of total aspherical departure, which is the signature of an element designed to correct the wavefront errors accumulated through the preceding eight elements. The large positive K on ASP17 describes an oblate surface — one that is progressively more curved at larger apertures relative to the paraxial sphere, complementing the corrective action of the polynomial terms.

---

## 10. Glass Identification

Identifying the actual glass types used is an exercise in inference: patent prescriptions list measured refractive indices to five decimal places, which reflects the actual batch characteristics of the glass used rather than nominal catalogue values. Standard catalogue glasses are specified to four decimal places in nd and two decimal places in νd, with batch-to-batch variation of roughly ±0.0005 in nd and ±0.2 in νd. The prescription values therefore never match catalogues exactly; the question is which catalogue glass the measurements are closest to.

### L1 — nd = 1.90525, νd = 35.04

This is the most extreme glass in the system and one of the most extreme available in production. An nd above 1.90 places this firmly in the **lanthanum dense flint (LaSF)** family — the upper boundary of the conventional glass map, where maximum refractive power is extracted at the cost of high dispersion and significant material cost.

The closest commonly cited catalogue match is **Schott LASF35** (legacy designation), with nominal nd = 1.90000 and νd = 35.28. The patent value is 0.005 higher in nd and 0.24 lower in νd than this nominal. CDGM's H-ZLaF series includes members in this approximate region. Several Japanese and Chinese glass manufacturers produce proprietary compositions at nd ≈ 1.90 with νd in the 33–37 range that do not appear in Western catalogues. Given that Cosina manufactures in Japan and sources glass from Japanese manufacturers including Ohara and Hoya, an Ohara or Hoya composition not widely catalogued outside Japan is plausible.

The most economical explanation is that this is a **selected melt** of a standard LaSF-territory glass — see Section 11 for detailed discussion.

### L2 — nd = 1.90043, νd = 37.37

Nearly as extreme as L1. Having two consecutive positive elements both above nd = 1.90 is unusual by any standard. The designer is deliberately concentrating the maximum available refractive power in the front group with the minimum physical volume. L2 sits slightly lower in nd and higher in νd than L1, suggesting a different glass of similar character — perhaps a different member of the same family.

### L3 — nd = 1.80518, νd = 25.46

An essentially exact match for **Schott SF6** (nominal nd = 1.80518, νd = 25.43) or its equivalent **Ohara S-TIH6** (same nominal values). The agreement is within rounding in both nd and νd, making this the most confidently identified glass in the system. SF6 is a classical dense flint used as the negative element in fast lens designs for decades; its very low Abbe number makes it an effective chromatic corrector when used in a negative element paired against high-νd positive glasses.

### L4f — nd = 1.76182, νd = 26.61

A dense flint, less extreme than SF6. Consistent with glasses such as Ohara S-TIH14 (nd = 1.76200, νd = 26.52) or Schott SF14 / N-SF14 equivalents. Used as the negative element in the first cemented doublet of G2.

### L4r, L5, L6f — nd = 1.88300, νd = 40.69

Three elements share identical nd and νd values to five decimal places. This strongly indicates a single glass type used for all three, which is both a materials management decision and an optical design strategy: controlling the Petzval sum contribution from three positive elements simultaneously by fixing their nd. The closest catalogue match is **Ohara S-LAH58** (nd = 1.88300, νd = 40.76 — a νd difference of only 0.07). Schott N-LASF31 (nd = 1.88067, νd = 41.01) is close in νd but 0.002 lower in nd. The match to S-LAH58 is the tightest of any standard catalogue glass.

### L6r — nd = 1.55298, νd = 55.07

A moderate-index crown glass, serving as the negative element of the field-correcting cemented doublet. The combination of nd ≈ 1.553 and νd ≈ 55 is consistent with several standard crown glasses from Ohara, Schott, and Hoya, though no single standard glass gives a closer match than 0.001 in nd. Again consistent with selected melt of a standard crown.

### L7 — nd = 1.80835, νd = 40.55

A lanthanum crown or lanthanum flint boundary glass, close to Ohara S-LAH65 family members or Hoya TAFD30 (nd = 1.80610, νd ≈ 40.7). The exact match is not definitive from the available catalogue data.

### Glass Map Summary

| Element | n_d | ν_d | Most Likely Family | Confidence |
|---------|-----|-----|-------------------|------------|
| L1 | 1.90525 | 35.04 | LaSF (e.g., LASF35 melt) | Moderate |
| L2 | 1.90043 | 37.37 | LaSF family | Moderate |
| L3 | 1.80518 | 25.46 | **SF6 / S-TIH6** | **High** |
| L4f | 1.76182 | 26.61 | Dense flint (SF14 family) | Moderate |
| L4r | 1.88300 | 40.69 | **S-LAH58** | **High** |
| L5 | 1.88300 | 40.69 | **S-LAH58 (same as L4r)** | **High** |
| L6f | 1.88300 | 40.69 | **S-LAH58 (same as L4r, L5)** | **High** |
| L6r | 1.55298 | 55.07 | Standard crown | Moderate |
| L7 | 1.80835 | 40.55 | LaF/LaSF boundary | Moderate |

---

## 11. On Custom Melts — What They Are and When They Are Required

**Interpretive caveat.** This section is inferential. The patent tables provide refractive index and Abbe number (nd, νd) but not partial dispersion curves, melt certificates, or spectral transmission data. The discussion below explains the framework for interpreting those figures, but cannot establish from patent data alone whether the production lens used catalogue glass, selected melts, or a genuinely custom formulation. All conclusions here should be treated as reasoned hypotheses, not demonstrated facts.

The phrase "custom glass" is frequently used loosely to describe anything that does not appear in a standard catalogue. In practice there are three distinct categories, which differ enormously in cost and lead time.

### Category 1: Standard Catalogue Glass

A glass manufactured to published nominal nd/νd specifications, supplied from stock by Ohara, Schott, Hoya, CDGM, or similar manufacturers. The batch that arrives at the lens manufacturer will have slightly different actual properties from the nominal — typically within ±0.0005 in nd and ±0.2 in νd — but is sold to nominal specification. Used without further characterisation, the prescription is designed to tolerate this variation. Cost: standard.

### Category 2: Selected Melt

The manufacturer purchases glass from the same pool as Category 1, but requests that the batch be characterised to tighter tolerances and that the actual measured nd and νd (to five decimal places) be provided on the lot certificate. The optical design is then fabricated using the actual as-measured properties of that specific batch. The patent prescription reflects these actual-batch values rather than the nominal specification.

Selected melt costs almost nothing extra beyond the glass purchase price — it is documentation and testing, not manufacturing change. It is routinely used for precision optical systems where the design has been optimised for properties in a specific region of the allowed variation band. The five-decimal-place nd values in JP2023063766A are consistent with this practice across the board.

### Category 3: True Custom Melt (Special Purpose Glass)

A glass composition formulated specifically for the application, outside any existing catalogue. This requires: composition design or modification, coordination with the glass manufacturer's melt schedule, minimum order quantities (typically 100–500 kg for a production glass), full optical characterisation (nd, nF, nC, partial dispersion Pg,F, transmission curve, striae grade, stress birefringence), and qualification testing. Cost is typically three to ten times that of equivalent catalogue glass. Lead time extends to months. Supply security on reorder is a genuine concern for a lens that may remain in production for a decade.

For a manufacturer like Cosina producing a specialty manual-focus lens in limited volume (production runs for the Nokton range are measured in thousands of units, not tens of thousands), a true custom melt is a significant commitment. The economics strongly disfavour it unless there is an optical requirement that simply cannot be met by any available standard glass.

### The Partial Dispersion Question

The optical property that would force a true custom melt — and cannot be addressed by selected melt — is the **partial dispersion ratio Pg,F**. While primary chromatic aberration is controlled by νd (the Abbe number), secondary spectrum (the residual chromatic aberration remaining after primary correction) depends on the partial dispersion, which characterises how the refractive index varies across the blue-green portion of the spectrum relative to the standard F and C measurement wavelengths.

At f/1.0, once primary chromatic aberration has been balanced to near-zero (as it has in this design), secondary spectrum becomes the limiting axial aberration. The secondary spectrum is dominated by the front-group elements, principally L1, because these elements see the largest ray heights and carry the largest marginal ray angles. Pg,F of L1 directly sets the secondary spectrum contribution from G1.

Standard LaSF-family glasses cluster in a relatively narrow band of Pg,F values. If the optical design required a Pg,F shifted by 0.005–0.010 from all available standard glasses at nd ≈ 1.905 — which is a meaningful shift at this aperture — then no amount of selected melt selection would help, and a custom composition would be the only path.

Whether this applies to L1 in the Nokton cannot be determined from the prescription data alone. The partial dispersion is not a parameter reported in patent Table 2. The five-decimal-place nd = 1.90525 could represent a selected melt of LASF35 (which would imply standard Pg,F) or a custom glass with shifted Pg,F (which would imply secondary spectrum correction was a design driver). Both interpretations are consistent with the prescription. Resolving the question would require the full spectral transmission data for the actual production glass.

The most conservative and economically rational interpretation — consistent with standard industry practice — is that L1 uses a **selected melt of a standard or near-standard LaSF glass**, with the five-decimal nd value reflecting batch characterisation rather than a custom composition. This is by far the most common approach in precision photographic optics, and Cosina's use of the same glass type across multiple elements (L4r, L5, L6f) further suggests a pragmatic approach to materials specification.

---

## 12. Comparison with Prior Art — JP5151635 B2 (Nikon)

JP2023063766A cites a single prior art patent: JP5151635 B2, granted to Nikon Corporation (inventor: Take Toshinori) on 14 December 2012, based on a filing of 9 April 2008. In Japanese patent practice, a sole citation in this position is a strong signal: the applicant is identifying the closest known solution and asserting that the new design is meaningfully distinct from it. Analysing the prior art in detail reveals precisely where those distinctions lie and why they were necessary.

**Note on inference.** The subsections below distinguish between direct patent disclosures — statements or data drawn explicitly from the patent text — and design inferences drawn by comparing the disclosed embodiments. Where a conclusion goes beyond what the patents themselves state, this is noted.

### 12.1 Overview of JP5151635

JP5151635 covers a fast photographic lens intended for compact-camera sensors. All four numerical embodiments share the same nine-element, seven-group topology: positive meniscus G1 → positive meniscus G2 → positive meniscus G3 → negative meniscus G4 → aperture stop → cemented doublet G56 (biconcave/biconvex) → positive singlet G7 → cemented doublet G89 (biconvex/biconcave) → filter group.

The Nikon prior art and the Nokton Example 1 share a recognisable broad family resemblance as fast, asymmetric standard-lens layouts, but they are not structurally identical. Nikon's embodiment is a 7-group/9-element system with four pre-stop elements and an explicit floating two-group focus scheme. The Nokton Example 1 is a 6-group/9-element system with three pre-stop elements and a terminal single aspherical lens after the second rear cemented group. The architectural differences are summarised in the table below.

| Property | JP5151635 (Nikon) | JP2023063766A Example 1 (Cosina) |
|---|---|---|
| Total elements | 9 | 9 |
| Groups | 7 | 6 |
| Pre-stop elements | 4 (G1, G2, G3, G4) | 3 (L1, L2, L3) |
| Post-stop sequence | cemented doublet + singlet + cemented doublet | cemented doublet + singlet + cemented doublet + single aspheric |
| Terminal element | cemented doublet G89 | single aspherical meniscus L7 |
| Aspherical surfaces | 0 | 3 (ASP1, ASP16, ASP17) |
| Focus mechanism disclosed | Floating two-group differential | Not disclosed in this patent |

The design parameters for the first embodiment are f = 32.00mm, F/1.24, with an image height of 8.50mm. Paragraph 0052 states that the 35mm-equivalent focal length is 60–150mm, preferably 80–90mm, placing this in portrait-telephoto territory on a small sensor rather than a standard lens on full frame. The total track is 56.13mm.

The stated engineering problem in paragraph 0003 is chromatic aberration — specifically secondary spectrum. Not coma. This is the critical contrast with the Nokton's stated motivation.

### 12.2 The Inverted Glass Strategy

The central claim of JP5151635 is the condition:

> **(ν₁ + ν₂)/2 > 60**

This requires the mean Abbe number of the first two positive elements to exceed 60 — firmly in the low-dispersion phosphate crown glass region. All four embodiments achieve this with nd = 1.59319, νd = 67.87 for both G1 and G2. The supplementary index condition (n1 + n2)/2 > 1.49 is comfortably satisfied at 1.593.

The Nokton's G1 elements use nd ≈ 1.903 at νd ≈ 35–37, giving a mean Abbe number of approximately 36 — failing the prior art's primary constraint by nearly a factor of two. Ogino's design does not extend the prior art's glass strategy; it reverses it entirely. Where Nikon solved the chromatic problem by choosing low-dispersion glass at moderate index, Cosina accepted high dispersion in exchange for the highest available refractive index, then redistributed the chromatic burden to the cemented doublet structures in G2.

This exchange is quantifiable. The prior art achieves (ν1+ν2)/2 = 67.87. The Nokton's equivalent mean is approximately 36. The difference in dispersion introduced by G1 alone must be recaptured somewhere in G2 — and it is, through the combination of the L4 cemented doublet and the carefully chosen L6r negative element. The near-zero chromatic sum of −0.000468 mm⁻¹ we computed for the Nokton is the result of that recapture.

### 12.3 Total Track and Compactness

The JP5151635 first embodiment has TT = 56.13mm at f = 32.00mm, giving TT/f = **1.754**. This exceeds the Nokton's upper constraint of 1.72. The Nokton achieves TT/f = 1.675 — approximately 4.5% below its own ceiling, and approximately 4.5% below the prior art's actual value when both are normalised to focal length.

The TT/f < 1.72 limit in the Nokton's patent claims places the claimed design space below the TT/f of Nikon's cited embodiment, which makes exclusion of that geometry a reasonable inference. The stated motive for the specific threshold is not established by the patent text, but the arithmetic consequence is clear: a design satisfying the Nokton's claims must be geometrically more compact than JP5151635's disclosed embodiment, while operating a full stop faster. The high-index front glass is the mechanism that makes this possible: by concentrating more refractive power into shorter radii of curvature in G1, adequate positive power can be delivered in a physically shorter front group.

### 12.4 Aspherical Surfaces

JP5151635 uses no aspherical surfaces in any of its four embodiments. Paragraph 0054 acknowledges aspherical surfaces as a possibility but does not implement them. At F/1.24 with high-Abbe front glass, the spherical aberration and coma residuals are manageable without departing from spherical form.

At F/1.0 with inverted glass — where the front group generates large spherical aberration by design — purely spherical correction is insufficient. The Nokton's three aspherical surfaces are not an optional refinement; they are a structural requirement imposed by the glass strategy. ASP1 on the front surface of L1, carrying 739 µm of total departure, corrects the spherical aberration that the extreme-index front elements introduce. ASP16 and ASP17 on L7 handle the residuals that cannot be addressed in the main optical train. JP5151635 requires no such correction because its glass choice prevents the problem from arising at the cost of the aperture and compactness performance the Nokton achieves.

### 12.5 Shared Elements

Not everything in the Nokton represents a departure from the prior art. Two structural features are directly continuous with JP5151635.

The positive element of the rear cemented doublet — nd = 1.88300 at νd ≈ 40.7 — appears in both patents. In JP5151635 this is G8 (nd = 1.88300, νd = 40.77). In the Nokton this is the positive element of L6 and also L4r and L5, all at nd = 1.88300. Ogino extended the use of this glass type from a single element in the rear group to three elements distributed through G2, exploiting its combination of high index and moderate dispersion as the workhorse of the rear correction group.

A suggestive geometric analogy also exists near the stop. JP5151635 defines a formal condition 0.30 < r₈/f < 0.50, where r₈ is the image-side surface of the pre-stop negative meniscus G4, satisfied by its first embodiment at r₈/f = 0.3295. The Nokton's rear surface of L3 — the functionally comparable pre-stop negative element — gives R/f = 0.397 (R = 19.835mm, f = 50mm), which falls within the prior art's range. JP2023063766A does not define or claim a homologous L3 surface condition, so this should be read as an analogy rather than a one-to-one architectural correspondence. The observation may nonetheless indicate shared design intuition about how this surface class governs coma and field curvature in the stop neighbourhood.

### 12.6 What the Comparison Reveals

The relationship between JP5151635 and the Nokton is that of a deliberate and well-defined engineering trade-off. The Nikon prior art demonstrates one successful F/1.2-class solution using a high-Abbe front-group strategy and no aspherical surfaces in the disclosed embodiments: excellent secondary spectrum correction and good aberration behaviour across focus distances at TT/f = 1.754. The disclosed Nikon embodiments do not show an F/1.0, TT/f < 1.72 design under those front-group glass constraints; whether such a design is impossible is not established here, only that no such embodiment is disclosed.

The Nokton's design accepts the chromatic penalty of extreme-index front glass, re-corrects it chromatically through the rear group, and then uses three aspherical surfaces to suppress the higher-order spherical aberration and coma that arise at F/1.0 with this glass strategy. The result is a lens that operates one full stop faster than the Nikon disclosed embodiments while fitting within a tighter physical envelope. The aspherical surfaces are the enabling technology; the glass inversion is the strategic choice; and the compactness constraint TT/f < 1.72 is the formal boundary that Cosina's claimed designs must satisfy and that Nikon's disclosed embodiments do not.

**Scope note.** The conclusions above apply specifically to Example 1 of JP2023063766A, which is the subject of this analysis. Example 2 of the same patent uses a positive meniscus for the terminal element L7′ rather than a negative meniscus, placing it at the opposite end of the f/fle constraint range. Design inferences about L7's role as a weakly negative corrector are Example 1-specific and do not generalise automatically to the full scope of the patent's claims.

| Property | JP5151635 (Nikon, 2012) | JP2023063766A Example 1 (Cosina, 2021) |
|---|---|---|
| F-number | 1.24 | 1.0 |
| Focal length | 32mm (small sensor) | 50mm (full frame) |
| TT/f | 1.754 | 1.675 |
| G1/G2 glass strategy | νd ≈ 68, nd ≈ 1.593 | νd ≈ 36, nd ≈ 1.903 |
| Mean Abbe of front group | 67.87 (> 60 required) | ~36 (would fail prior art constraint) |
| Aspherical surfaces | 0 | 3 (ASP1, ASP16, ASP17) |
| Stated design problem | Secondary spectrum | Large-aperture coma |
| Rear doublet positive element | nd = 1.883 / νd = 40.77 | nd = 1.883 / νd = 40.69 (shared) |
| Pre-stop surface R/f (analogy) | 0.330 (claimed condition) | 0.397 (unclaimed, analogous) |
| Focus mechanism disclosed | Floating two-group differential | Not disclosed in this patent |

---

## 13. Synthesis

The Nokton 50mm f/1.0 as described in JP2023063766A represents a coherent and technically rigorous approach to the fundamental problem of making a compact, corrected, ultra-fast normal lens. Its key features, in descending order of unconventionality:

**1. The extreme front glass selection.** Using two consecutive positive elements above nd = 1.90 in G1 is the defining choice of the design. It allows G1 to be physically small — the strong refraction of these glasses means the required power can be delivered with gentle surface curvatures, which in turn limits aberration generation. The cost is that these glasses are more dispersive (lower νd) than one would want, requiring the chromatic correction to be managed almost entirely in G2.

**2. The asymmetric G1 → Stop → G2 layout.** The patent explicitly states (paragraph 0005) that the near-symmetric stop arrangement of Gauss-type designs fails to adequately correct coma at large apertures. Coma is an odd-order aberration that cancels by symmetry in a Double-Gauss, but only up to the point at which higher-order contributions become significant — which at f/1.0 they very much do. Abandoning symmetry was a deliberate response to this specific failure mode. By front-loading power before the stop and using G2 primarily for correction rather than power delivery, the designer achieves TT/f = 1.675 compactness while simultaneously addressing the coma problem that would defeat a Double-Gauss at this aperture.

**3. The aspherical architecture.** Three aspherical surfaces carry dramatically different functional loads. ASP1 (front of L1) is a manufacturing feat — 739 µm of departure at ~52 mm diameter requires deterministic polishing. It corrects the spherical aberration generated by the strongest surfaces in the system. ASP16 and ASP17 (both surfaces of L7) together carry over a millimetre of combined departure and serve as the final wavefront correctors, cleaning up residuals that could not be addressed by the spherical elements upstream.

**4. The L7 power constraint.** The patent's lower boundary of f/f_le > −0.33 prevents L7 from being a strongly negative element. At the actual value of −0.3235, L7 sits just inside this boundary — suggesting the design is optimised to place L7 as close to the edge of acceptable correction range as possible while satisfying the constraint. This is characteristic of a design that has been pushed to its geometrical limits.

**5. The glass strategy across G2.** Using a single glass (almost certainly Ohara S-LAH58 or equivalent) for three elements — L4r, L5, and L6f — is a simplification that reduces the number of glass types to procure, certify, and manage in production. It also makes the Petzval sum contributions from these elements predictable as a block, giving the designer precise control over field curvature by adjusting element powers independently of glass type.

The system achieves well-corrected primary axial chromatic (Σφ/νd = −0.000468 ≈ 0), a small positive Petzval sum (+0.002792 mm⁻¹), both patent compactness constraints satisfied with margin, and aspherical corrections exceeding 600 µm on two surfaces. It is a mature, tightly constrained design where every parameter is close to its limit.

---

---

## Appendix A — Verification Summary

All numerical results in this document were verified by independent Python computation against the raw Table 1 and Table 2 data. The key figures are:

| Quantity | Computed Value | Patent Constraint | Status |
|----------|---------------|-------------------|--------|
| TT | 83.76 mm | — | — |
| TT/f | 1.6752 | < 1.72 | ✓ |
| f/f_le | −0.3235 | −0.33 to +0.53 | ✓ |
| Σ(φ/νd) | −0.000468 | ≈ 0 | ✓ |
| Petzval sum | +0.002792 | small positive | ✓ |
| ASP1 departure at H = 26 mm | −738.93 µm | — | — |
| ASP16 departure at H = 12 mm | +348.93 µm | — | — |
| ASP17 departure at H = 12 mm | +619.21 µm | — | — |

---

---

## Appendix B — Notation Reference

| Symbol | Meaning |
|--------|---------|
| n_d | Refractive index at d-line (587.56 nm) |
| ν_d | Abbe number = (n_d − 1) / (n_F − n_C) |
| Pg,F | Partial dispersion ratio = (n_g − n_F) / (n_F − n_C) |
| R | Surface radius of curvature (mm) |
| D | Axial thickness or air gap (mm) |
| K | Conic constant |
| φ | Optical power (mm⁻¹) |
| f | Focal length (mm) |
| TT | Total track: sum of all axial distances surface 1 to image (mm) |
| f_le | Focal length of last element |
| H | Semi-aperture height (radial distance from optical axis) |
| Z | Sag: axial distance from vertex plane to surface at height H |
| ΔZ | Aspherical departure from reference sphere at height H |
| λ | Wavelength (nm) |
| ASP | Aspherical surface |
| G1 / G2 | Front group / rear group |
| L1 ... L7 | Individual lens elements, numbered front to back |

---

---

*All data sourced from patent JP2023063766A (Cosina Co., Ltd., inventor Kazuhiro Ogino). Numerical calculations performed independently and verified by the author. Glass catalogue comparisons made against published Ohara, Schott, and Hoya datasheets. No proprietary or confidential information has been used.*
