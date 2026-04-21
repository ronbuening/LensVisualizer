# Voigtländer ULTRON Vintage Line 28mm F2 Aspherical — Patent Analysis

## JP2022-100641A, Example 1 (Cosina Co., Ltd.)

**Inventors:** Shōju Hatta (蓬田祥寿), Yūki Shibata (柴田裕輝)
**Filed:** 2020-12-24 · **Published:** 2022-07-06
**Assignee:** Cosina Co., Ltd., Nakano, Nagano, Japan

---

## 1. Patent-to-Production Correspondence

Patent JP2022-100641A discloses four example embodiments of a compact, wide-angle imaging lens
system for digital still cameras. Example 1 is identified as the production design for the
**Voigtländer ULTRON Vintage Line 28mm F2 Aspherical (VM mount)** based on the following
convergent criteria:

- **Element/group count:** Example 1 comprises 10 elements in 7 groups, matching the manufacturer's
  published specification exactly (Cosina product page; B&H Photo; Amazon product listings).
- **Focal length:** Example 1 gives f = 28.5000 mm, consistent with the production lens's nominal
  28 mm focal length (patent field angle: 75.4° at f = 28.5 mm).
- **Speed:** F/2.0, matching the production f/2 specification.
- **Aspherical surfaces:** Example 1 has two aspherical surfaces (17A, 18A) on a single rear
  element (L25 / Nnc). The manufacturer states "one aspherical element" with "two aspherical
  surfaces," exactly matching this configuration.
- **Close focus:** The patent's close-focus object distance of 430 mm from the first surface yields
  a subject-to-sensor distance of approximately 492 mm (≈ 0.49 m), consistent with the production
  specification of 0.5 m minimum focus distance (mirrorless).
- **Front group configuration:** Example 1 uses three negative lenses in the front group (Gf)
  with two cemented doublets (Jw and Jy), yielding 10 elements in **7 groups** — matching the
  production specification exactly. Examples 2 and 3 use only two negative lenses in Gf, giving
  9 elements — ruling them out. Example 4 also has 10 elements but arranges the front group as
  three singlets plus one doublet, producing 10 elements in **8 groups** — a group count mismatch
  that rules it out as the production design.

The patent was filed on December 24, 2020, approximately four months before the lens was
announced in April 2021. The lens was available in two cosmetic variants (Type I and Type II),
both sharing identical optics. Type I was discontinued in July 2024; Type II in November 2025.

---

## 2. Optical Design Overview

The lens is a **quasi-symmetric wide-angle design** with a negative-positive front section and
positive-negative rear section arranged about the aperture stop. Despite using a leading negative
meniscus — a common feature of retrofocus designs — this lens is **not retrofocus**: its thick-lens
back focal distance (18.47 mm) is only 65% of the focal length (28.58 mm), well below the
BFD > EFL threshold that defines a true retrofocus (reverse telephoto) system. For a VM-mount
rangefinder lens, no mirror-box clearance is required, and the compact 18.4 mm flange-to-image
distance is entirely adequate.

- **Front group (Gf):** Five elements (L11–L15) arranged as one negative meniscus singlet, one
  cemented doublet (Jw = L12+L13), and one cemented doublet (Jy = L14+L15). Contains two positive
  elements and three negative elements.
- **Aperture stop (STO):** Located between the front and rear groups.
- **Rear group (Gr):** Five elements (L21–L25) arranged as one cemented doublet (Jx = L21+L22),
  two singlets (L23, L24), and one aspherical singlet (L25). Contains two positive elements
  and three negative elements.

### Specifications (Example 1, infinity focus)

| Parameter | Value |
|-----------|-------|
| Focal length (fa) | 28.5000 mm |
| F-number | F/2.0 |
| Full field angle (2ω) | 75.4° |
| Image height | 21.63 mm |
| Total track (LT) | 60.24 mm |
| Back focal distance | 18.40 mm |
| Elements / Groups | 10 / 7 |
| Aspherical surfaces | 2 (on 1 element) |
| APD elements | 2 (manufacturer-stated; element identification speculative) |

### Computed verification (thick-lens matrix method)

An independent thick-lens ABCD transfer matrix computation through the full prescription yields:

- **Computed EFL: 28.58 mm** (patent: 28.50 mm; error 0.28%)
- **Computed BFD: 18.47 mm** (patent: 18.40 mm; error 0.38%)

These sub-0.5% discrepancies are consistent with rounding in the patent's tabulated radii and
thicknesses. The prescription is confirmed as self-consistent. The total track computed by
summing all tabulated d values (60.24 mm) differs from the patent's stated LT of 60.2274 mm by
0.013 mm, attributable to truncation in the tabulated values.

---

## 3. Element-by-Element Analysis

### 3.1 Front Group (Gf) — Elements L11 through L15

#### L11 (Mna) — Front negative meniscus

| Property | Value |
|----------|-------|
| Surfaces | 1 → 2 |
| R₁ / R₂ | +89.943 / +22.131 mm |
| Center thickness | 1.20 mm |
| nd / νd | 1.51680 / 64.20 |
| Focal length | −57.14 mm (patent) |
| Type | Negative meniscus, convex toward object |
| Glass (catalog match) | **BK7-type** — HOYA BSC7 (exact), Schott N-BK7 (Δνd = 0.03) |

**Optical role:** L11 serves as a field-flattening negative meniscus at the front of the system.
Its weak negative power (f = −57.14 mm) and strong curvature difference between front and rear
surfaces create a diverging effect on off-axis ray bundles entering the lens. This widens the
acceptance cone for off-axis fields and increases the entrance pupil distance, allowing the
rear elements to handle a narrower range of ray angles. The use of BK7 — an inexpensive,
low-dispersion crown glass — reflects the low chromatic demand on this element, which sits far
from the stop and contributes primarily to Petzval sum correction and field curvature control.

#### L12 (Mnb) — Plano-concave negative (cemented to L13)

| Property | Value |
|----------|-------|
| Surfaces | 3 → 4 (junction) |
| R₃ / R₄ | −23.578 / ∞ (flat) mm |
| Center thickness | 1.05 mm |
| nd / νd | 1.64769 / 33.84 |
| Focal length | −36.40 mm |
| Type | Plano-concave negative |
| Cemented | Doublet Jw with L13 |
| Glass (catalog match) | **SF2-type** — Schott SF2 (Δνd = 0.01), HOYA E-F3 (exact) |

#### L13 (Mpa) — Plano-convex positive (cemented to L12)

| Property | Value |
|----------|-------|
| Surfaces | 4 (junction) → 5 |
| R₄ / R₅ | ∞ (flat) / −36.797 mm |
| Center thickness | 2.75 mm |
| nd / νd | 1.91082 / 35.25 |
| Focal length | +40.40 mm |
| Type | Plano-convex positive |
| Cemented | Doublet Jw with L12 |
| Glass (catalog match) | **S-LAH58** — OHARA S-LAH58 (exact), Schott N-LASF46A (exact) |

**Optical role of doublet Jw (L12+L13):** This cemented pair functions primarily as a
monochromatic aberration corrector in the front group. The flat junction surface (R = ∞)
simplifies manufacturing — no compound curve to align during cementing — and creates a large
refractive index step at the interface (Δnd = 0.263), which provides strong correction of
spherical aberration and coma. Notably, both glasses are in the "flint" region of the glass map
(νd < 50) with a dispersion difference of only Δνd ≈ 1.4 — far too small for meaningful
chromatic correction (typical achromatic doublets require Δνd of 20–30). The doublet's role is
therefore almost exclusively monochromatic. The extreme refractive index of L13 (nd = 1.91082)
provides strong positive power while keeping surface curvatures moderate, which reduces
higher-order aberration contributions. The net doublet power is weakly positive, contributing to
the converging action that redirects the diverging bundle from L11 toward the stop.

#### L14 (Mpb) — Biconvex positive (cemented to L15)

| Property | Value |
|----------|-------|
| Surfaces | 6 → 7 (junction) |
| R₆ / R₇ | +22.947 / −24.267 mm |
| Center thickness | 5.46 mm |
| nd / νd | 1.91082 / 35.25 |
| Focal length | +13.70 mm (patent; thin-lens: +12.95 mm) |
| Type | Biconvex positive |
| Cemented | Doublet Jy with L15 |
| Glass (catalog match) | **S-LAH58** — OHARA S-LAH58 (exact) |

#### L15 (Mnc) — Biconcave negative (cemented to L14)

| Property | Value |
|----------|-------|
| Surfaces | 7 (junction) → 8 |
| R₇ / R₈ | −24.267 / +97.122 mm |
| Center thickness | 1.10 mm |
| nd / νd | 1.76182 / 26.61 |
| Focal length | −25.39 mm |
| Type | Biconcave negative |
| Cemented | Doublet Jy with L14 |
| Glass (catalog match) | **SF14-type** — HOYA E-FD15 (exact), Schott N-SF14 (Δνd = 0.08) |

**Optical role of doublet Jy (L14+L15):** This is the most powerful sub-assembly in the front
group. L14 alone has a focal length of only +13.70 mm — by far the strongest element in the
lens — making it the primary converging element that bends the wide-angle ray bundle through
the stop. The nearly symmetric biconvex shape of L14 (R₆ ≈ +23, R₇ ≈ −24) distributes the
refraction evenly across both surfaces, minimizing spherical aberration generation at f/2.

L15 (f = −25.39 mm) partially cancels L14's power, leaving the Jy doublet with a net positive
focal length. The Abbe number difference between L14 (νd = 35.25) and L15 (νd = 26.61) — a Δνd
of 8.64 — provides partial chromatic correction. While modest compared to a classical achromatic
doublet (which typically uses Δνd > 20), this difference is still meaningful: both glasses are
dense flints, but the *negative* element L15 uses the lower-νd (more dispersive) glass, following
the standard achromatic doublet principle. The bulk of the system's chromatic correction is
handled by doublet Jx in the rear group (Δνd = 25.96), not by the front group doublets.

L14 is also the thickest element in the system at 5.46 mm. This substantial thickness is
necessary to maintain structural integrity at the large clear aperture required by the f/2 speed,
and also contributes a non-negligible thick-lens correction (thick-lens f = 13.70 mm vs.
thin-lens f ≈ 12.95 mm, a 5.5% difference).

### 3.2 Aperture Stop (STO)

The aperture stop is located between surfaces 8 and 10, at an axial distance of 2.27 mm after
L15's rear surface (surface 8), with an air gap of 3.54 mm from the stop to L21's front surface
(surface 10). The patent explicitly places the STO between the front and rear groups, as stated
in the claims. The production lens uses 10 aperture blades with a range of f/2 to f/22.

### 3.3 Rear Group (Gr) — Elements L21 through L25

#### L21 (Nna) — Biconcave negative (cemented to L22)

| Property | Value |
|----------|-------|
| Surfaces | 10 → 11 (junction) |
| R₁₀ / R₁₁ | −17.809 / +17.500 mm |
| Center thickness | 1.00 mm |
| nd / νd | 1.71736 / 29.50 |
| Focal length | −12.16 mm |
| Type | Biconcave negative |
| Cemented | Doublet Jx with L22 |
| Glass (catalog match) | **SF1-type** — Schott SF1 (Δνd = 0.01), OHARA S-TIH1 (Δνd = 0.01) |

#### L22 (Npa) — Biconvex positive (cemented to L21)

| Property | Value |
|----------|-------|
| Surfaces | 11 (junction) → 12 |
| R₁₁ / R₁₂ | +17.500 / −171.048 mm |
| Center thickness | 3.86 mm |
| nd / νd | 1.69680 / 55.46 |
| Focal length | +22.98 mm |
| Type | Biconvex positive (strongly asymmetric) |
| Cemented | Doublet Jx with L21 |
| APD | **Probable** — lanthanum crown glasses in this region typically have positive ΔPgF |
| Glass (catalog match) | **S-LAC14** — OHARA S-LAC14 (nd=1.69680, νd=55.41, Δνd=0.05); Schott N-LaK14 (Δnd=0.0002) |

**Optical role of doublet Jx (L21+L22):** This is the first element group immediately after the
aperture stop and functions as the primary rear achromat. The structure mirrors a classic
Schott-type cemented achromatic doublet: a negative flint element (L21, νd = 29.50) cemented to a
positive crown (L22, νd = 55.46), with Δνd = 25.96 — the largest dispersion difference of any
cemented pair in the system, and therefore the most chromatically active doublet.

L21 has the most extreme negative power of any element in the system (f = −12.16 mm), with
nearly symmetric biconcave surfaces (R₁₀ ≈ −17.8, R₁₁ ≈ +17.5). Combined with L22's moderately
strong positive power (f = +22.98 mm), the doublet produces a net positive focal length while
strongly correcting longitudinal chromatic aberration in the converging beam behind the stop.

L22 is a probable candidate for one of the two anomalous partial dispersion (APD) elements in the
lens. Its nd/νd values closely match OHARA S-LAC14, a lanthanum crown glass. Lanthanum crowns in
this region of the glass map (nd ≈ 1.70, νd ≈ 55) typically exhibit moderate positive anomalous
partial dispersion (ΔPgF > 0), which would help reduce secondary spectrum in the Jx doublet
beyond what standard glass combinations achieve.

#### L23 (Npb) — Biconvex positive singlet

| Property | Value |
|----------|-------|
| Surfaces | 13 → 14 |
| R₁₃ / R₁₄ | +35.878 / −27.184 mm |
| Center thickness | 4.85 mm |
| nd / νd | 1.88300 / 40.81 |
| Focal length | +18.17 mm |
| Type | Biconvex positive |
| Glass (catalog match) | **S-LAH60MQ / S-LAH64** — OHARA S-LAH60MQ (Δνd = 0.01), OHARA S-LAH64 (Δνd = 0.05) |

**Optical role:** L23 is a strong positive singlet (f = +18.17 mm) that serves as the primary
image-forming element in the rear group. Its high refractive index (nd = 1.88300) keeps surface
curvatures moderate for the power required, controlling spherical aberration. The asymmetric
biconvex shape (R₁₃ > |R₁₄|) indicates the rear surface is more strongly curved, which is
consistent with bending the converging beam toward the image while minimizing coma for the
off-axis field. This element also contributes positively to the Petzval sum, which is balanced by
the surrounding negative elements (L21, L24, L25).

#### L24 (Nnb) — Negative meniscus, image-side convex

| Property | Value |
|----------|-------|
| Surfaces | 15 → 16 |
| R₁₅ / R₁₆ | −32.873 / −70.814 mm |
| Center thickness | 1.50 mm |
| nd / νd | 1.62999 / 58.12 |
| Focal length | −100.00 mm |
| Type | Negative meniscus (concave toward object, convex toward image) |
| APD | **Possible** — glass-map position is consistent with anomalous dispersion, but no exact catalog match confirms it |
| Glass (catalog match) | **Unconfirmed** — nd/νd does not match any standard OHARA, Schott, or HOYA glass in current catalogs. May correspond to a HOYA-specific or discontinued designation. Nearest: OHARA S-BSM15 (nd=1.62299, νd=58.14; Δnd=0.007, too distant for a match). |

**Optical role:** L24 is a weak negative meniscus (f = −100 mm) that acts primarily as a field
corrector. Its low power means it contributes little to the system's overall focal length, but
its position — deep in the converging beam, far from the stop — gives it significant leverage
over field curvature and astigmatism. The meniscus shape (concave toward the object, convex
toward the image) directs oblique ray bundles more gently toward the sensor, helping to control
the angle of incidence on the image plane — a critical consideration for rangefinder lenses
used on digital sensors, where steep ray angles at the image corners cause color shift and
luminance falloff.

L24 is a possible candidate for the second APD element. Its nd/νd values (1.62999 / 58.12)
place it in the barium crown / lanthanum crown transition region of the glass map, where some
glasses exhibit positive anomalous partial dispersion. However, no exact catalog match has been
identified, so the APD status cannot be confirmed from glass identification alone. If L24 does
carry anomalous dispersion, it would complement L22 in forming a secondary-spectrum correction
subsystem across the rear group.

#### L25 (Nnc) — Negative meniscus with two aspherical surfaces

| Property | Value |
|----------|-------|
| Surfaces | 17A → 18A |
| R₁₇ / R₁₈ | −38.030 / −43.027 mm |
| Center thickness | 2.10 mm |
| nd / νd | 1.80610 / 40.73 |
| Focal length | −500.00 mm |
| Type | Negative meniscus (concave toward object, convex toward image), both surfaces aspherical |
| Glass (catalog match) | **NBFD3 / S-LAH63Q** — HOYA NBFD3 (exact), OHARA S-LAH63Q (exact) |

**Optical role:** L25 is the most optically distinctive element in the system. Despite having
almost negligible power (f = −500 mm — effectively a "powered window"), it carries both of the
lens's aspherical surfaces, making it the primary higher-order aberration corrector. Its position
as the very last element before the image plane gives the aspheric profiles maximum leverage
over field-dependent aberrations: the marginal ray height is small here but the chief ray height
is large, meaning the aspheric departures preferentially correct off-axis aberrations
(astigmatism, coma, lateral color) rather than on-axis spherical aberration.

The patent's claim 3 specifically identifies this element: the rearmost negative singlet (Nnc)
in the rear group (Gr) is a negative meniscus lens formed with an aspherical surface that is
convex toward the image side. This claim protects the key design innovation of the lens.

The use of a high-index glass (nd = 1.80610) for the aspherical element is notable: aspherical
surfaces are typically easier to manufacture in lower-index materials (or as polymer/composite
elements), but the high index here reduces the surface curvatures needed for the meniscus shape,
keeping the aspherical departure within practical manufacturing tolerances.

---

## 4. Aspherical Surface Analysis

Both aspherical surfaces reside on L25 (Nnc), the final element before the image plane.
The sag equation used in the patent is the standard form:

> Z(h) = (C · h²) / [1 + √(1 − (1+K) · C² · h²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹²

where C = 1/R, K is the conic constant, and h is the radial height from the optical axis.

### Surface 17A (front surface of L25)

| Coefficient | Value |
|-------------|-------|
| R | −38.030 mm |
| K | 0.0 (sphere + polynomial) |
| A4 | −9.97 × 10⁻⁵ |
| A6 | −5.86 × 10⁻⁷ |
| A8 | +7.76 × 10⁻⁹ |
| A10 | −2.26 × 10⁻¹¹ |

### Surface 18A (rear surface of L25)

| Coefficient | Value |
|-------------|-------|
| R | −43.027 mm |
| K | 0.0 (sphere + polynomial) |
| A4 | −4.13 × 10⁻⁵ |
| A6 | −3.36 × 10⁻⁷ |
| A8 | +6.38 × 10⁻⁹ |
| A10 | −2.06 × 10⁻¹¹ |
| A12 | +9.67 × 10⁻¹⁵ |

**Note on A6 for surface 18A:** The patent table displays this coefficient as "−336E−07." This is
a formatting artifact (missing decimal point); the value is −3.36 × 10⁻⁷. This interpretation
is confirmed by independent computation: with A6 = −3.36 × 10⁻⁷, the aspherical departure at
h = 10 mm is 0.307 mm (physically reasonable); the literal reading of −3.36 × 10⁻⁵ would
produce a departure of 33.6 mm at the same height — absurd for a 12.6 mm semi-diameter element.
The coefficient progression also confirms the corrected reading: A6/A4 ≈ 0.008 on surface 18A
matches A6/A4 ≈ 0.006 on surface 17A.

### Aspherical departure from best-fit sphere

Both surfaces have K = 0, meaning the base curve is spherical and all aspherical correction is
carried by the polynomial terms. The negative A4 coefficients on both surfaces mean the aspheric
profiles depart in the same direction as the base curvature (more concave) at moderate heights,
then the sign-alternating higher-order terms introduce an inflection at larger radii.

**Surface 17A** shows significantly larger departures than 18A. Computed departures from the
base sphere:

| h (mm) | Surface 17A departure | Surface 18A departure |
|--------|----------------------|----------------------|
| 4 | −0.027 mm | −0.012 mm |
| 6 | −0.145 mm | −0.060 mm |
| 8 | −0.456 mm | −0.172 mm |
| 10 | −1.033 mm | −0.307 mm |
| 12 | −1.880 mm | −0.306 mm |

Surface 17A reaches over 1 mm of departure at h = 10 mm — a heavily aspherized surface by
photographic lens standards. The departure grows rapidly with height (roughly as h⁴ from the
dominant A4 term). This aggressive aspherization is possible because surface 17A faces an
air gap (it's the front surface of L25, with a 4.31 mm air space from L24), so the glass-to-air
interface can tolerate larger slope changes without causing total internal reflection.

**Surface 18A** has approximately one-third the departure of 17A at equivalent heights, and
includes an A12 coefficient (9.67 × 10⁻¹⁵) for fine-tuning at the edge of the field. The
interesting inflection at h = 12 mm — where the departure actually decreases slightly relative
to h = 10 mm — indicates the higher-order terms are pulling the surface back, balancing the
A4 contribution. This is consistent with its role as a final correction surface: it trims
residual higher-order astigmatism and coma that surface 17A's broader correction cannot fully
address.

### What the aspherical surfaces correct

The placement of both aspheric surfaces on the last element, far from the aperture stop, means
they operate primarily on **field aberrations** rather than on-axis aberrations:

1. **Astigmatism:** The large chief-ray height at L25 gives the aspherics strong leverage over
   the tangential/sagittal focus difference across the field. The patent's aberration diagrams
   (Figure 3) show well-controlled astigmatism out to the full 21.63 mm image height.

2. **Field curvature:** By locally varying the surface power as a function of ray height, the
   aspherics flatten the Petzval field without requiring additional negative elements (which
   would increase the lens's overall length).

3. **Coma:** Aspherical correction at the field margin reduces residual coma that the spherical
   elements cannot fully balance, contributing to the lens's reported excellent corner sharpness
   even at f/2.

4. **Distortion:** The meniscus shape and aspherical profiles help control barrel distortion,
   which is inherently difficult in compact wide-angle designs. Reviews of the production lens
   report low but slightly non-linear distortion, consistent with a design that prioritizes
   resolution over geometric perfection.

---

## 5. Glass Selection Summary

The lens uses nine distinct glass types (by nd/νd), with one type (S-LAH58) shared between two
elements:

| Glass type | nd | νd | Elements | Catalog match | Role |
|------------|------|-------|----------|---------------|------|
| BK7-type | 1.51680 | 64.20 | L11 | HOYA BSC7 / Schott N-BK7 | Low-cost crown for front meniscus |
| SF2-type | 1.64769 | 33.84 | L12 | Schott SF2 / HOYA E-F3 | Dense flint for Jw doublet |
| S-LAH58 | 1.91082 | 35.25 | L13, L14 | OHARA S-LAH58 | Ultra-high-index LaF for power elements |
| SF14-type | 1.76182 | 26.61 | L15 | HOYA E-FD15 / Schott N-SF14 | Very dense flint for Jy doublet |
| SF1-type | 1.71736 | 29.50 | L21 | Schott SF1 / OHARA S-TIH1 | Dense flint for Jx achromat |
| S-LAC14 (probable APD) | 1.69680 | 55.46 | L22 | OHARA S-LAC14 (Δνd=0.05) | LaC crown, probable anomalous dispersion |
| S-LAH60MQ | 1.88300 | 40.81 | L23 | OHARA S-LAH60MQ / S-LAH64 | High-index LaF for rear positive |
| Unconfirmed (possible APD) | 1.62999 | 58.12 | L24 | No exact catalog match found | BaK/LaC region crown, possible anomalous dispersion |
| NBFD3 / S-LAH63Q | 1.80610 | 40.73 | L25 | HOYA NBFD3 / OHARA S-LAH63Q | High-index LaF for aspheric element |

Two features of the glass selection are noteworthy:

**Heavy use of ultra-high-index lanthanum glasses:** Three elements (L13, L14, L23) use glasses with
nd > 1.88, and L25 uses nd = 1.806. These extreme refractive indices allow the designers to
achieve the necessary optical power within a compact total track (LT/fa = 2.11) while keeping
surface curvatures moderate enough to control higher-order aberrations at f/2. The trade-off is
cost — S-LAH58 (nd = 1.91082) is among the most expensive optical glasses in current production.

**Two anomalous partial dispersion elements (L22, L24 — probable):** The manufacturer specifies
two APD elements. L22 and L24 are the most likely candidates based on their glass-map positions
in the lanthanum crown / barium crown region, where positive anomalous partial dispersion
(ΔPgF > 0) is common. If confirmed, their anomalous dispersion would help correct secondary
spectrum — the residual longitudinal chromatic aberration that persists after primary
achromatization with ordinary glass pairs. This is consistent with the lens's reputation for
excellent color rendition and minimal purple fringing at f/2.

**Note on evidence basis:** The APD identification is *speculative*, not confirmed by exact
catalog matching. L22 closely matches OHARA S-LAC14 (a lanthanum crown likely to have positive
ΔPgF), but L24's nd/νd pair (1.62999 / 58.12) does not correspond to any glass in current OHARA,
Schott, or HOYA catalogs — it may be a HOYA-proprietary type, a discontinued designation, or a
glass from another supplier (e.g., Sumita, Hikari). The manufacturer's claim of two APD elements
is taken at face value, but the specific identification of *which* elements carry the anomalous
dispersion cannot be confirmed from the patent alone.

---

## 6. Focus Mechanism

### Unit focus (whole-lens movement)

The patent's variable spacing table for Example 1 lists only one changing gap:

| Gap | Infinity focus | Close focus (m = 0.0676) |
|-----|---------------|--------------------------|
| ZD 0 (object distance) | ∞ | 430.00 mm |
| ZD 18 (BFD) | 18.40 mm | 20.33 mm |

Only the back focal distance (ZD 18) changes between infinity and close focus, with a focus
extension of **1.93 mm**. This means the entire lens assembly moves as a unit relative to the image
plane (sensor). No internal groups shift relative to each other during focusing.

This is consistent with the production lens's mechanical design: a helicoid unit moves the entire
optical assembly forward within the lens barrel, with manual focusing via a focus ring (and
focusing knob on Type I, or focusing tab on Type II).

### Close focus distance

At maximum extension (m = 0.0676), the object is 430 mm from the first lens surface. Adding
the total track and focus extension:

> Subject-to-sensor distance = 430.0 + 60.24 + (20.33 − 18.40) = **492.2 mm ≈ 0.49 m**

The production lens specifies a minimum focus distance of **0.5 m** (mirrorless) or **0.7 m**
(rangefinder-coupled), consistent with this calculation.

### Implications of unit focus

Unit focusing is the simplest and most mechanically reliable focus mechanism, well-suited to a
compact rangefinder lens. The trade-off is that aberration correction is optimized for infinity
and degrades gradually toward close focus, since the air spacings within the lens remain fixed.
The patent's aberration diagrams (not analyzed in detail here) suggest this degradation is
well-controlled at the modest close-focus magnification of 0.0676.

---

## 7. Conditional Expressions

The patent defines three conditions that must be satisfied simultaneously:

### Condition 1: Compactness

> 2.00 < [LT / fa] < 2.25

| Parameter | Value |
|-----------|-------|
| LT | 60.2274 mm (patent-stated) |
| fa | 28.5000 mm |
| LT/fa | **2.11** |
| Status | ✓ Satisfied |

This condition bounds the total track relative to focal length. The lower limit (2.00) prevents
the lens from becoming too short, which would force extreme surface curvatures and increase
astigmatism and coma. The upper limit (2.25) ensures compactness. At LT/fa = 2.11, the lens
sits comfortably in the middle of the allowed range, reflecting a balanced optimization between
size and performance.

For context, LT/fa = 2.11 means the lens is just over twice its focal length from front surface
to image plane — a remarkably compact package for a 10-element f/2 wide-angle design.

### Condition 2: Rear group power balance

> 0.4 < [f2 / LT] < 1.6

| Parameter | Value |
|-----------|-------|
| f2 (rear group FL) | 69.2904 mm |
| LT | 60.2274 mm |
| f2/LT | **1.15** |
| Status | ✓ Satisfied |

This condition constrains the rear group's focal length relative to the total track. The patent
explains that exceeding the upper limit (1.6) would cause excessive astigmatism, coma, and field
curvature, while falling below the lower limit (0.4) would similarly degrade correction and
increase image plane shift with focus distance. The value of 1.15 indicates a moderately powered
rear group — strong enough to contribute meaningfully to image formation but not so strong that
it dominates aberration generation.

### Condition 3: Front positive element refractive index

> nd > 1.83

| Element | nd | Status |
|---------|------|--------|
| L13 (Mpa, i=4) | 1.91082 | ✓ Satisfied |
| L14 (Mpb, i=6) | 1.91082 | ✓ Satisfied |

This condition requires that both positive elements in the front group use high-index glass. The
patent states that violating this condition (nd ≤ 1.83) would lead to overall degradation of
astigmatism and field curvature correction. At nd = 1.91082, both elements significantly exceed
the threshold, using some of the highest-index optical glass commercially available. The high
index reduces surface curvatures for a given optical power, which in turn reduces Petzval sum
contributions and higher-order aberration generation.

---

## 8. Design Lineage and Context

The patent is filed by Cosina Co., Ltd. under the names of Shōju Hatta and Yūki Shibata. Hatta
is a known Cosina optical designer whose name also appears on the earlier Voigtländer Nokton
35mm f/1.2 patent (JP2004-101880A), indicating continuity of design philosophy within Cosina's
optical engineering group.

The Ultron Vintage Line 28mm F2 Aspherical represents the third generation of Cosina's 28mm f/2
rangefinder lens:

1. **Voigtländer Ultron 28mm f/1.9** (2001) — L39 mount, 9 elements/7 groups, aspherical,
   46mm filter, 261g
2. **Voigtländer Ultron VM 28mm f/2** (2008) — VM mount, 10 elements/8 groups, all-spherical
   with anomalous dispersion glass, 46mm filter, 238g
3. **Voigtländer Ultron Vintage Line 28mm f/2 Aspherical** (2021) — VM mount, 10 elements/7
   groups, aspherical + APD glass, 39mm filter, 190g (Type I) / 230g (Type II)

The third generation achieves a notable reduction in filter size (46mm → 39mm) and weight while
simultaneously improving optical performance — a combination made possible by the reintroduction
of aspherical surfaces (absent from the second generation) combined with modern ultra-high-index
glasses and anomalous partial dispersion elements.

---

## Sources

- **Primary:** JP2022-100641A (published 2022-07-06), Example 1, Tables 1 and associated
  conditional expression tables.
- **Manufacturer:** Cosina Co., Ltd. product page for ULTRON Vintage Line 28mm F2 Aspherical
  (https://www.cosina.co.jp/voigtlander/en/vm-mount/ultron-vintage-line-28mm-f2-aspherical/).
- **Retailer specifications:** B&H Photo (product #1637251), Amazon (ASIN B096QXNNWT).
- **Glass catalogs:** OHARA optical glass catalog (S-LAH58, S-LAH60MQ, S-LAC14, S-TIH1,
  S-TIH14, S-LAH63Q, S-BSL7); Schott optical glass catalog (N-BK7, SF1, SF2, N-SF14,
  N-LASF46A, N-LaK14, N-LASF43); HOYA optical glass catalog (BSC7, E-F3, E-FD15, E-FD1,
  TAFD30, NBFD3). OHARA pocket catalog (2023) used for cross-reference verification.
- **Computed values:** Thick-lens ABCD transfer matrix (EFL: 28.58 mm, BFL: 18.47 mm), paraxial
  marginal and chief ray traces (semi-diameter estimation), aspherical departure computations,
  and conditional expression verification performed independently using Python scripts.

---

*Analysis prepared from patent JP2022-100641A Example 1. Glass identifications are inferential,
based on catalog nd/νd matching — the patent does not specify glass trade names. Semi-diameters
are estimated from paraxial ray trace, not patent-listed. Focal length values are patent-stated
thick-lens values where available; thin-lens approximations are noted where used.*
