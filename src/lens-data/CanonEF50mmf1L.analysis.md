# Canon EF 50mm f/1.0L USM — Optical Design Analysis

**Patent:** US 4,717,245 — *High Relative Aperture Gauss Type Lens*
**Inventor:** Sadatoshi Takahashi (Canon Kabushiki Kaisha)
**Filed:** December 5, 1986 (US); priority December 12, 1985 (JP 60-280060)
**Granted:** January 5, 1988
**Numerical example analyzed:** Example 2 (11 elements / 9 groups)
**Production lens marketed:** September 1989 — discontinued 2000

---

## 1. Identification of the Production Design

US 4,717,245 contains three numerical examples. Example 2 is identified as the basis for the Canon EF 50mm f/1.0L USM on the following grounds:

The production lens has an 11-element, 9-group construction with two ground-and-polished aspherical surfaces on the 3rd and 8th elements (per the Canon Camera Museum). Example 1 has only 10 elements (one front element in G1) and 8 groups, eliminating it immediately. Examples 2 and 3 both have 11 elements with two-element G1 units and aspherical surfaces on elements 3 and 8, but they differ in G2 group topology: Example 2 uses a cemented doublet (L21+L22) behind the stop, producing 9 air-separated groups, while Example 3 uses a cemented triplet (L21+L22+L23) behind the stop, producing only 8 groups. Since the production lens has 9 groups, Example 2 is the unique match. The patent prescription is given at a normalized focal length of f = 100 mm; scaling to the production focal length of f ≈ 50 mm requires a uniform factor of approximately 0.5001.

### Production specifications (Canon)

| Parameter | Value |
|-----------|-------|
| Focal length | 50 mm |
| Maximum aperture | f/1.0 |
| Construction | 11 elements / 9 groups |
| Aspherical surfaces | 2 (ground and polished, elements 3 and 8) |
| Diaphragm blades | 8 |
| Minimum aperture | f/16 |
| Minimum focus distance | 0.6 m |
| Maximum magnification | 0.11× |
| Filter diameter | 72 mm |
| Dimensions (∅ × L) | 91.5 × 81.5 mm |
| Weight | 985 g |
| Mount | Canon EF |
| AF system | Ring USM, focus-by-wire |
| Focus mechanism | Floating front extension |

---

## 2. Optical Architecture

The design is a modified double-Gauss with substantial elaboration at both ends. The classical Gauss core — a pair of negative lenses flanking a central stop, each oriented with its strong concave surface facing the stop — is preserved in elements L15 and L21 (G4 and G5 in the patent's notation). Around this core, the patent adds negative meniscus lenses (L13 and L23) to share the negative refractive power that would otherwise concentrate entirely on those two stop-adjacent concave surfaces. This power-sharing is the central design principle of the patent and is the mechanism by which the aperture is pushed to f/1.0 without catastrophic sagittal flare.

The nine air-separated groups, front to rear, are:

| Group | Elements | Function |
|-------|----------|----------|
| G1 | L11 | Front positive element — collects marginal rays |
| G2 | L12 | Second positive element — additional convergence for large-aperture marginal bundle |
| G3 | L13 + L14 (cemented) | Negative meniscus + positive meniscus doublet — shares G4's negative Petzval burden |
| G4 | L15 | Negative meniscus — classical front Gauss element, concave toward stop |
| — | Stop | Aperture diaphragm (between L15 and L21) |
| G5 | L21 + L22 (cemented) | Biconcave + biconvex doublet — classical rear Gauss pair plus chromatic correction |
| G6 | L23 | Negative meniscus — shares G5's negative Petzval burden (symmetric to L13) |
| G7 | L24 | Positive meniscus — aberration balancing |
| G8 | L25 | Biconvex positive — provides convergence for the G2 group |
| G9 | L26 | Positive meniscus (convex toward front) — final field correction |

An additional structural detail noted in patent claim 6 is that the air spaces between L14 and L15 (G3–G4 gap, D7 = 2.50 mm) and between L22 and L23 (G5–G6 gap, D13 = 3.15 mm) are "of the positive lens form" — meaning these air gaps are shaped like biconvex lenses (thicker at the center than at the edges). This is a consequence of the bounding surface curvatures: the G3–G4 gap is bounded by R7 = +280.28 and R8 = +1093.50 (both convex toward the front), and the G5–G6 gap by R13 = −69.60 and R14 = −60.14 (both concave toward the front, forming a biconvex air space between them). These positive-form air gaps contribute to the overall power distribution and aberration balancing of the system.

### Computed system parameters (f = 100 scale, verified by ABCD ray trace)

| Parameter | Value |
|-----------|-------|
| Effective focal length (EFL) | 99.98 mm |
| Back focal distance (BFD) | 74.44 mm |
| BFD / EFL | 0.7445 |
| Total optical track (vertex to image) | 233.67 mm |
| G1 group focal length (L11–L15) | 342.85 mm |
| G2 group focal length (L21–L26) | 72.56 mm |
| Half-field angle ω | 22.6° |
| Image height at f = 100 | 41.62 mm |
| Petzval sum | +0.00164 |
| Petzval radius | −610 mm |
| Stop semi-diameter (at f/1.0) | 34.77 mm |

The BFD/EFL ratio of 0.7445 satisfies the patent's stated constraint of ≥ 0.70, confirming sufficient back focal distance for the SLR quick-return mirror. At the production scale of f ≈ 50 mm, BFD ≈ 37.2 mm, which is less than the EF mount's 44.0 mm flange distance — the rear vertex of the last element sits approximately 6.8 mm forward of the mount flange plane, a geometry consistent with the large rear element visible in photographs of the lens.

The Petzval sum is very nearly zero (+0.00164 at f = 100), confirming that the design achieves nearly flat field curvature. This is accomplished through three principal mechanisms: first, the four positive "workhorse" elements (L14, L22, L24, L25) all use very high-index lanthanum flint glass (nd = 1.883), which reduces each element's Petzval contribution for a given power since the contribution scales as φ/n²; second, the negative elements L13, L15, and L23 use low-index glasses (nd = 1.517 for L13 and L15, nd = 1.805 for L23), maximizing their negative Petzval contribution per unit of negative power; and third, by distributing the required negative power across four negative elements (L13, L15, L21, L23) rather than concentrating it in the two elements flanking the stop, the design avoids the extreme surface curvatures that would generate excessive sagittal flare.

---

## 3. Aspherical Surfaces

### 3.1 Patent formulation

The patent uses a non-standard polynomial representation with the base radius R set to infinity:

$$Z(H) = \frac{(1/R) H^2}{1 + \sqrt{1 - (H/R)^2}} + AH^2 + BH^4 + CH^6 + DH^8 + EH^{10}$$

With R = ∞, the conic base term vanishes entirely, and the sag is a pure polynomial. The quadratic term AH² is the key: it defines the paraxial curvature of the aspherical surface, while the higher-order terms describe departures from that effective sphere.

### 3.2 Surface R5 — 3rd element (L13) front surface

**Patent coefficients (R = ∞):**

| Coefficient | Value |
|------------|-------|
| A | +3.826 × 10⁻³ |
| B | +6.521 × 10⁻⁸ |
| C | +4.881 × 10⁻¹¹ |
| D | −1.684 × 10⁻¹⁴ |
| E | +4.549 × 10⁻¹⁸ |

The effective paraxial radius is R_eff = 1/(2A) = +130.68 mm. The positive sign indicates that the center of curvature is to the right: the surface is convex toward the front, consistent with the patent's description of G2 as a "negative meniscus convex toward the front." With R_rear = +78.02 (also convex toward front, but more strongly curved), L13 is confirmed as a negative meniscus.

**Role (per patent text):** The aspherical surface on the object side of the stop is figured so that the positive power increases toward the margin. This corrects distortion arising from the asymmetry of the lens system about the stop, and simultaneously reduces sagittal flare.

### 3.3 Surface R15 — 8th element (L23) rear surface

**Patent coefficients (R = ∞):**

| Coefficient | Value |
|------------|-------|
| A | −3.846 × 10⁻³ |
| B | +3.361 × 10⁻⁸ |
| C | +8.434 × 10⁻¹¹ |
| D | −3.297 × 10⁻¹⁴ |
| E | +5.350 × 10⁻¹⁸ |

The effective paraxial radius is R_eff = 1/(2A) = −130.01 mm. The negative sign means the center of curvature is to the left: the surface is concave toward the image. With R_front = −60.14 (concave toward the front) and R_rear_eff ≈ −130.0, both radii are negative and L23 is a negative meniscus convex toward the rear, matching the patent description of G7.

**Role (per patent text):** The aspherical surface on the image side of the stop is figured so that the negative power increases toward the margin. This allows the curvatures of the two strongly concave surfaces flanking the stop (R9 on L15 and R11 on L21) to be weakened, directly reducing the amount of sagittal flare produced.

### 3.4 Conversion to standard sag form

The lens data specification used by the renderer expects the standard aspherical sag form with explicit base radius R and conic constant K. When the patent provides R = ∞ with an AH² term, conversion is required. Setting R = 1/(2A) and K = 0, the higher-order sphere expansion generates correction terms at each power of h:

| Power | Sphere correction term |
|-------|----------------------|
| h⁴ | A³ |
| h⁶ | 2A⁵ |
| h⁸ | 5A⁷ |
| h¹⁰ | 14A⁹ |

The standard-form aspherical coefficients are then A4 = B − A³, A6 = C − 2A⁵, and so on. The corrections are small (the largest correction at h⁴ is ~5.6 × 10⁻⁸ versus B ≈ 6.5 × 10⁻⁸ for R5) but non-negligible — omitting them would introduce micron-level sag errors at full aperture. Sag agreement between the patent polynomial and the converted standard form was verified to better than 6 × 10⁻⁸ mm at h = 30 mm.

### 3.5 Aspherical departure

The aspherical departure from the effective base sphere is small near the axis but grows significantly at the full clear aperture. At h = 25 mm (approximately the semi-diameter of these elements at f = 100 scale):

| Surface | Departure at h = 25 mm |
|---------|----------------------|
| R5 (L13 front) | +0.013 mm (surface becomes less strongly curved than the base sphere) |
| R15 (L23 rear) | +0.052 mm (surface becomes less deeply concave than the base sphere) |

The departures are of opposite sign relative to the base curvature: R5 flattens at the rim (reducing positive power margin-ward), while R15 also flattens (reducing negative power margin-ward). Both are consistent with the patent's stated aspherical roles. The magnitude of the R15 departure is roughly four times larger than R5, reflecting the greater correction burden placed on the image-side aspherical surface.

These are ground-and-polished aspherical elements, not molded — the Canon Camera Museum specifically describes them as "large-diameter ground and polished glass aspherical lens elements." This is significant because in 1989, precision glass molding was not mature enough to produce elements of this diameter (the 3rd element is one of the larger elements in the system), and the dense flint glass used for L23 (nd = 1.805) is not amenable to molding. Ground-and-polished aspherical production was a hallmark of Canon's optical manufacturing capability in this era.

---

## 4. Glass Types

The lens uses seven distinct glass types. The dominant material is a dense lanthanum flint used for all four of the positive "workhorse" elements.

### 4.1 Glass identification table

| Element | nd | vd | Six-digit code | Probable glass | Family |
|---------|-------|------|--------|---------------|--------|
| L11 | 1.60311 | 60.7 | 1603/607 | S-BSL7 (OHARA) / N-SK16 (SCHOTT) | Borosilicate crown |
| L12 | 1.69680 | 55.5 | 1696/555 | S-BSM14 (OHARA) / S-BAH28 (OHARA) | Barium dense crown |
| L13 | 1.51742 | 52.4 | 1517/524 | S-NSL5 (OHARA) / K10 (SCHOTT) | Light crown |
| L14 | 1.88300 | 40.8 | 1883/408 | S-LAH58 (OHARA) | Dense lanthanum flint |
| L15 | 1.51742 | 52.4 | 1517/524 | S-NSL5 (OHARA) / K10 (SCHOTT) | Light crown |
| L21 | 1.84666 | 23.9 | 1846/239 | S-TIH53 (OHARA) / SF57 (SCHOTT) | Dense flint |
| L22 | 1.88300 | 40.8 | 1883/408 | S-LAH58 (OHARA) | Dense lanthanum flint |
| L23 | 1.80518 | 25.4 | 1805/254 | S-TIH6 (OHARA) / SF6 (SCHOTT) | Dense flint |
| L24 | 1.88300 | 40.8 | 1883/408 | S-LAH58 (OHARA) | Dense lanthanum flint |
| L25 | 1.88300 | 40.8 | 1883/408 | S-LAH58 (OHARA) | Dense lanthanum flint |
| L26 | 1.55963 | 61.2 | 1559/612 | S-BSL10 (OHARA) / N-SK5 (SCHOTT) | Borosilicate crown |

Glass identifications are family-level matches based on nd/vd pairs; exact production glass designations may differ from these catalog assignments, particularly for the 1883/408 glass which could be S-LAH58, S-LAH59, or an equivalent from HOYA (TAFD5 series). Canon was known to source glass from multiple suppliers in this era.

### 4.2 Glass selection rationale

The glass choices divide into three functional categories:

**High-index positive elements (nd = 1.883, vd = 40.8):** L14, L22, L24, and L25 all use the same dense lanthanum flint. These are the "four high-refraction glass elements" mentioned by the Canon Camera Museum. The very high refractive index accomplishes two things simultaneously: it reduces the Petzval sum contribution of the positive elements (Petzval contribution ∝ φ/n², so higher n reduces the contribution for a given power), and it allows the element curvatures to be weaker for a given power (since φ ∝ (n−1)/R), which reduces higher-order aberrations. The moderate Abbe number (40.8) is a compromise — not as dispersive as the flint elements flanking the stop, but not as low-dispersion as the crown elements.

**Low-index negative elements (nd = 1.517, vd = 52.4):** L13 and L15 share the same light crown glass. The patent explicitly states that G2 (L13) should use a glass with refractive index not exceeding 1.65 to prevent the Petzval sum from increasing. Light crown is an ideal aspherical substrate for ground-and-polished production — it is relatively soft and homogeneous, making it amenable to precision figuring. Using the same glass for both L13 and L15 simplifies manufacturing and ensures symmetric Petzval behavior on either side of the cemented doublet region.

**Dense flint elements at the stop (nd = 1.847 and 1.805, vd = 23.9 and 25.4):** L21 and L23 use dense flint glasses with very high dispersion. The patent's condition (5) requires that the mean Abbe number of the negative lenses on the image side of the stop (G5 and G7, i.e., L21 and L23) satisfy (v5 + v7)/2 < 30; the actual value is 24.65. This strong dispersion is essential for correcting both longitudinal and lateral chromatic aberration across the full 45° field. The high refractive index of these flint glasses also contributes negatively to the Petzval sum, helping to flatten the field.

**Crown elements at the extremities (L11, L12, L26):** The front and rear positive elements use moderate-index crowns — borosilicate (L11, L26) and barium dense crown (L12). These provide positive power with low chromatic contribution, functioning as the outer "shell" of the modified Gauss design.

---

## 5. Element-by-Element Functional Analysis

### L11 — Front positive meniscus (G1)

**Shape:** Positive meniscus, convex toward front (R1 = +265.49, R2 = +1254.83)
**Focal length (standalone):** +556 mm (weak positive)
**Glass:** S-BSL7 type (nd = 1.603, vd = 60.7)

L11 is the first element the incoming light encounters. Its weak positive power begins converging the extremely wide marginal ray bundle (50 mm entrance pupil radius at f/1.0). The meniscus shape minimizes the angle of incidence on each surface, reducing spherical aberration and coma introduced by the front element — a standard technique for high-speed designs. The large radius of curvature (R1 = 265.49 at f = 100 scale, ≈ 133 mm at production) keeps surface powers low despite the large clear aperture.

### L12 — Second positive meniscus (G2)

**Shape:** Positive meniscus, convex toward front (R1 = +168.21, R2 = +522.76)
**Focal length (standalone):** +352 mm (moderate positive)
**Glass:** S-BSM14 type (nd = 1.697, vd = 55.5)

L12 provides additional positive power that a single front element cannot deliver without excessive surface curvature. The slightly higher refractive index (1.697 vs 1.603 for L11) allows a stronger contribution to convergence while maintaining moderate curvatures. The two-element G1 unit is one of the features that distinguishes Example 2 from Example 1 (which has only one front element). The patent notes that while Example 1's G1 unit "consists of one positive lens," Example 2's "consists of two positive lenses" — this additional degree of freedom in the G1 group is presumably what enables Example 2 to achieve better control of marginal-ray aberrations, and is consistent with it being the design selected for production.

### L13 — Negative meniscus with aspherical front (G3), cemented to L14

**Shape:** Negative meniscus, convex toward front (R_front_eff = +130.68, R_rear = +78.02)
**Focal length (standalone, with aspherical R_eff):** −394 mm (weak negative)
**Focal length (standalone, with R = ∞ front):** −151 mm (moderately negative)
**Glass:** S-NSL5 type (nd = 1.517, vd = 52.4)

L13 is the first of the two aspherical elements and one of the most optically significant elements in the design. Its role is defined by the patent's central innovation: sharing the negative Petzval burden of G4 (L15). In a conventional fast Gauss, all of the negative power required to flatten the field and secure sufficient back focus is concentrated in the two elements flanking the stop. This produces intense sagittal flare at apertures beyond f/1.2. By placing a negative meniscus (L13) upstream of the classical negative element (L15), the patent distributes this negative power over a longer baseline, dramatically reducing the surface curvatures required on L15's stop-facing concave surface.

The low refractive index (1.517) is deliberately chosen: the patent's condition (3) requires n3 − n2 > 0.25 (where n3 is the refractive index of L14 and n2 is the index of L13). The actual difference is 0.366, well within the prescribed range. This large index differential at the cemented junction (R6 = 78.02) between L13 and L14 provides substantial positive power at the junction surface while contributing strongly to Petzval sum reduction through the low-index negative element.

The aspherical figuring on R5 adds positive power toward the margin, correcting distortion and reducing sagittal flare from the G1 group. The ground-and-polished surface on this low-index crown glass represents one of the two most expensive manufacturing steps in the lens.

### L14 — Positive meniscus (G3), cemented to L13

**Shape:** Positive meniscus, convex toward front (R1 = +78.02, R2 = +280.28)
**Focal length (standalone):** +118 mm (strong positive)
**Glass:** S-LAH58 type (nd = 1.883, vd = 40.8)

L14 is the first of the four high-index lanthanum flint elements. Its strong positive power drives the convergence of the marginal ray bundle toward the stop. The meniscus shape (both radii positive, with the front surface more strongly curved) is a characteristic Gauss-type element form. Cemented to L13, the L13+L14 doublet has a combined focal length of +176 mm — net positive, but much weaker than L14 alone. This is by design: the doublet acts as a weak positive group that provides convergence while the L13 component absorbs Petzval burden.

### L15 — Negative meniscus (G4)

**Shape:** Negative meniscus, convex toward front (R1 = +1093.50, R2 = +51.26)
**Focal length (standalone):** −104 mm (strong negative)
**Glass:** S-NSL5 type (nd = 1.517, vd = 52.4)

L15 is the classical front Gauss negative element. Its rear surface (R9 = +51.26) is the strongly concave surface (concave toward the rear) facing the stop, referenced in the patent's condition (1): R4b/f = 0.5126, satisfying 0.44 < R4b/f < 0.64. The critical innovation is that this curvature is weaker than it would be in a conventional f/1.0 Gauss design, because L13 upstream absorbs part of the negative power. This directly reduces the sagittal flare that would otherwise be generated at this surface.

L15 uses the same low-index crown glass as L13 (nd = 1.517), which maximizes the Petzval contribution per unit of negative power. The nearly flat front surface (R8 = +1093.5) and strongly curved rear (R9 = +51.26) give the element its negative meniscus form — both radii positive, with the rear surface's much stronger curvature dominating the power. The patent describes G4 as "a negative fourth lens with its rear surface of strong concave curvature toward the rear," which is exactly what R9 = +51.26 produces. Almost all of L15's refractive power is concentrated at this rear surface.

### Aperture stop

The stop sits in the air gap between L15 and L21. The patent includes the stop as an explicit surface (R10), with D9 = 17.88 mm (L15 rear to stop) and D10 = 17.88 mm (stop to L21 front), yielding a total stop gap of 35.76 mm at f = 100 scale (≈ 17.9 mm at production). This is an exceptionally large air space for a double-Gauss design and reflects the need to accommodate the 8-blade diaphragm mechanism at the full f/1.0 stop diameter. At f/1.0 with EFL = 100 mm, the stop semi-diameter is approximately 34.8 mm (≈ 17.4 mm at production scale). The extremely large stop diameter — nearly as wide as the lens barrel — is one of the defining engineering challenges of the design.

### L21 — Biconcave negative (G5), cemented to L22

**Shape:** Biconcave (R1 = −48.88, R2 = +148.01)
**Focal length (standalone):** −43 mm (very strong negative)
**Glass:** S-TIH53 type (nd = 1.847, vd = 23.9)

L21 is the classical rear Gauss negative element and carries the strongest negative power of any element in the system. Its front surface (R11 = −48.88) is the strong concave surface referenced in the patent's condition (2): |R5a|/f = 0.4888, satisfying 0.48 < |R5a|/f < 0.68. Together with R9 on L15, these two concave surfaces flanking the stop are the Gauss-type surfaces responsible for securing the long back focal distance and controlling the Petzval sum.

The very high dispersion of L21's glass (vd = 23.9) is critical for chromatic correction. Cemented to L22 (a biconvex positive element in lower-dispersion lanthanum flint), the L21+L22 pair forms a chromatic correction doublet with a combined focal length of approximately −1012 mm — weakly negative (about 10× the system focal length), so the pair contributes minimal net power while providing strong negative Petzval contribution and chromatic correction.

### L22 — Biconvex positive (G5), cemented to L21

**Shape:** Biconvex (R1 = +148.01, R2 = −69.60)
**Focal length (standalone):** +56.7 mm (strong positive)
**Glass:** S-LAH58 type (nd = 1.883, vd = 40.8)

L22 is notably thick (d = 25.50 at f = 100 scale, ≈ 12.75 mm at production). This extraordinary thickness is unusual in Gauss-type designs and reflects the demands of the f/1.0 aperture: the marginal ray bundle emerging from the stop is extremely wide, and L22 must refract it over a long path length to control higher-order spherical aberration. The biconvex shape provides strong positive power that partially cancels L21's negative power, keeping the cemented pair weakly negative overall while providing essential spherical aberration correction.

### L23 — Negative meniscus with aspherical rear (G6)

**Shape:** Negative meniscus, convex toward rear (R_front = −60.14, R_rear_eff = −130.0)
**Focal length (standalone, with R_rear = ∞):** −74.7 mm (strong negative)
**Focal length (standalone, with aspherical R_eff):** −143 mm (moderate negative)
**Glass:** S-TIH6 type (nd = 1.805, vd = 25.4)

L23 is the symmetric counterpart to L13, placed on the image side of the stop+doublet core. Its role mirrors L13's: absorbing part of the negative Petzval burden that would otherwise be concentrated entirely on L21's strong concave surfaces. This power-sharing is the patent's central innovation applied symmetrically on both sides of the stop. The large difference between the two focal length values (−74.7 mm with flat rear vs. −143 mm with aspherical effective curvature) illustrates how much the aspherical figuring weakens L23's negative power by adding a positive contribution at the rear surface.

The aspherical rear surface (R15) plays a nuanced role. The patent states that this surface "should be figured so that the negative power increases toward the margin of the lens." This description refers to the comparison between having this aspherical surface versus not having it at all (i.e., versus a flat surface where R15 would contribute no refraction). Relative to a flat surface, R15 provides progressively more negative refraction at larger ray heights — its slope grows monotonically from zero at the axis to −0.187 at h = 25 mm.

However, relative to the effective base sphere (R_eff = −130 mm), the aspherical departure is positive at the margin: +0.052 mm at h = 25 mm, meaning the surface is less deeply concave than the base sphere. The aspherical slope at h = 25 is 5% smaller in magnitude than the sphere's slope at the same height. This margin-ward weakening is the fine correction that sculpts the sagittal wavefront — the aspherical surface provides the distributed negative power the design needs (versus no surface), but less aggressively than a pure sphere would, taming the higher-order sagittal flare that a spherical L23 rear surface would introduce.

The dense flint glass (nd = 1.805, vd = 25.4) provides the high dispersion needed for chromatic correction on the image side of the stop, satisfying the patent's condition (5). Ground-and-polished aspherical production on this dense flint — a harder, more brittle material than the light crown used for L13 — represents a significant manufacturing challenge.

### L24 — Positive meniscus (G7)

**Shape:** Positive meniscus, concave toward front (R1 = −401.91, R2 = −99.27)
**Focal length (standalone):** +146 mm (moderate positive)
**Glass:** S-LAH58 type (nd = 1.883, vd = 40.8)

L24 begins the rear positive group that converges the beam toward the image. The meniscus shape — concave toward the front, with the rear surface more strongly curved — is unusual for a positive element and reflects the constrained geometry of fitting strong positive power into the space between L23 and the image plane. This shape minimizes the angle of incidence on the more strongly curved rear surface, reducing coma and astigmatism in the converging beam.

### L25 — Biconvex positive (G8)

**Shape:** Biconvex (R1 = +3746.07, R2 = −139.62)
**Focal length (standalone):** +153 mm (moderate positive)
**Glass:** S-LAH58 type (nd = 1.883, vd = 40.8)

L25 is the primary converging element in the G2 group. Its nearly flat front surface (R = 3746) and moderately curved rear surface (R = −139.6) produce a nearly plano-convex form. This element is also thick (d = 12.69 at f = 100 scale, ≈ 6.35 mm at production), reflecting the large-diameter beam it must handle. Together with L24, these two elements provide the convergence necessary to bring the widely spread post-stop beam to a focus within the available back focal distance.

### L26 — Positive meniscus (G9)

**Shape:** Positive meniscus, convex toward front (R1 = +142.39, R2 = +961.53)
**Focal length (standalone):** +298 mm (weak positive)
**Glass:** S-BSL10 type (nd = 1.559, vd = 61.2)

L26 is the last element and acts as a field flattener and residual aberration corrector. Its weak positive power fine-tunes the field curvature, and the low-dispersion crown glass (vd = 61.2) ensures that this final correction does not introduce chromatic aberration. The meniscus shape with a nearly flat rear surface (R = 961.5) produces minimal distortion of the converging beam.

Critically, L26 is the fixed element in the production lens's floating focus mechanism. Multiple independent sources confirm that the rear element does not move during focusing, while all forward elements translate. This fixed rear element serves as a reference surface for the image geometry, maintaining consistent field flatness and distortion characteristics across the focus range.

---

## 6. Focus Mechanism

The production Canon EF 50mm f/1.0L USM uses a floating front extension focus mechanism with focus-by-wire electronic control via a ring USM motor. According to the Canon Camera Museum, the floating mechanism "minimizes spherical aberration and curvature of field at close focusing distance."

The patent text describes focusing as "preferably performed by moving the entire lens system" but notes that alternatives include "moving either the front or the rear half of the lens system with respect to the stop, or moving both halves at different speeds from each other." The production lens implements a floating design: the rear element (L26) is fixed, and the remaining elements extend forward during close focusing. The Canon Camera Museum's description of a "floating mechanism" that "minimizes spherical aberration and curvature of field at close focusing distance" implies differential motion between internal groups, but the specific sub-group displacements are not publicly documented.

Since the patent provides only the infinity-focus prescription without close-focus variable gap data, the exact internal floating-element displacements cannot be determined from the patent alone. The minimum focus distance of 0.6 m and maximum magnification of 0.11× are production specifications; the patent does not specify these values.

---

## 7. Patent Design Conditions

The patent establishes five inequalities that govern the design space. All are satisfied by Example 2:

| Condition | Expression | Required | Example 2 value | Status |
|-----------|-----------|----------|-----------------|--------|
| (1) | R4b / f | 0.44 – 0.64 | 0.5126 | ✓ |
| (2) | \|R5a\| / f | 0.48 – 0.68 | 0.4888 | ✓ |
| (3) | n₃ − n₂ | > 0.25 | 0.3656 | ✓ |
| (4) | (n₃ + n₆ + n₈ + n₉) / 4 | > 1.80 | 1.8830 | ✓ |
| (5) | (v₅ + v₇) / 2 | < 30 | 24.65 | ✓ |

Conditions (1) and (2) control the curvatures of the stop-adjacent concave surfaces (R9 on L15 and R11 on L21) to balance back focal distance against sagittal flare. Condition (3) ensures sufficient refractive index contrast at the L13/L14 cemented junction for Petzval sum reduction. Condition (4) keeps the mean index of the four main positive elements above 1.80, ensuring adequate Petzval sum reduction from the positive elements. Condition (5) constrains the dispersion of the image-side negative elements for chromatic correction.

---

## 8. Historical and Contextual Notes

The Canon EF 50mm f/1.0L USM was the fastest autofocus SLR lens ever produced, and as of 2026, no manufacturer has produced a faster autofocus SLR-mount lens. It was marketed from September 1989 to 2000, with an original price of ¥358,700 (approximately $2,500–3,000 USD at contemporary exchange rates). Production volume was low, and used specimens now typically command $2,000–5,000 depending on condition, with exceptional examples occasionally exceeding this range.

The lens shares its external barrel dimensions (91.5 × 81.5 mm) with the first-generation Canon EF 85mm f/1.2L USM released the same year, suggesting shared mechanical and electronic design between the two flagships. Both use the same focus-by-wire ring USM system and floating focus mechanism.

The optical design represents a definitive answer to the question of whether a Gauss-type lens can reach f/1.0 with acceptable image quality and a practical back focal distance for SLR use. The key innovations — power-sharing via the additional negative meniscus elements L13 and L23, the high-index lanthanum flint glass for all four major positive elements, and the two ground-and-polished aspherical surfaces — were all necessary to achieve this aperture. The design was eventually succeeded by the Canon EF 50mm f/1.2L USM (2007), which traded one stop of aperture for dramatically improved image quality with a simpler 8-element construction.
