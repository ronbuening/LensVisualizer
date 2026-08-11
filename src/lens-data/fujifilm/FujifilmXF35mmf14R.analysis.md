# Fujifilm Fujinon XF35mmF1.4 R — Optical Design Analysis

**Patent:** US 2014/0285903 A1 — Example 1
**Inventor:** Takashi Suzuki (Fujifilm Corporation)
**Applicant:** Fujifilm Corporation
**Priority:** December 16, 2011 (JP 2011-275177)
**Published:** September 25, 2014
**Embodiment analyzed:** Example 1

*Note on patent title:* The US publication is titled "Imaging Zoom Lens and Imaging Apparatus Including the Same," but the patent describes fixed focal length (prime) lens designs exclusively. None of the three numerical examples include variable magnification or zoom mechanisms. The title is likely an artifact of broad PCT filing language or a translation convention from the original Japanese application.

---

## 1. Patent-to-Product Identification

The patent US 2014/0285903 A1, filed by Fujifilm Corporation, describes a modified double-Gauss imaging lens with 8 elements in 6 groups, one aspherical element (two aspherical surfaces), and unit focusing. Example 1 of the patent corresponds to the production Fujinon XF35mmF1.4 R based on the following concordance:

| Parameter | Patent (Ex. 1) | Production Lens |
|-----------|---------------|-----------------|
| Focal length | 36.17 mm | 35 mm (marketed) |
| Maximum aperture | f/1.45 | f/1.4 (marketed) |
| Full angle of view | 43° | 44.2° |
| Elements / groups | 8 / 6 | 8 / 6 |
| Aspherical elements | 1 (2 surfaces) | 1 |
| Image circle (2Y) | 28.4 mm | APS-C (23.5 × 15.6 mm, diagonal ≈ 28.4 mm) |
| Focus mechanism | Unit focus (entire lens moves) | "All lens groups move at the same time" |
| Assignee | Fujifilm Corporation | Fujifilm |

The marketed focal length of 35 mm is a rounded value; the design EFL computed from the patent prescription via paraxial ray trace is 36.17 mm. Similarly, the marketed f/1.4 aperture is slightly faster than the design value of f/1.45. Both are standard practices in lens marketing.

The XF35mmF1.4 R was launched alongside the Fujifilm X-Pro1 in early 2012 as one of three inaugural XF-mount lenses. The patent's Japanese priority filing (December 2011) aligns with this timeline.

---

## 2. Design Architecture

The lens is a modified double-Gauss type consisting of a positive front group (GF), an aperture stop, and a positive rear group (GR). The departure from a classical double-Gauss lies primarily in the rear group, which replaces the traditional negative–positive cemented doublet with a negative aspheric singlet followed by a positive–negative–positive cemented triplet.

### Group Structure

| Group | Elements | Focal Length | Description |
|-------|----------|-------------|-------------|
| Front (GF) | L11, L12, L13, L14 | +182.6 mm | Four meniscus lenses, all convex to object |
| Rear (GR) | L21, L22+L23+L24 | +24.4 mm | Aspheric biconcave singlet + cemented triplet |
| *— L21 alone* | *L21* | *−59.0 mm* | *Biconcave aspheric (both surfaces)* |
| *— Triplet alone* | *L22+L23+L24* | *+19.4 mm* | *Positive cemented triplet* |
| **System** | **8 elements** | **36.17 mm** | **EFL verified via ABCD paraxial trace** |

The front group is weakly positive (f ≈ 183 mm), while the rear group carries the majority of the optical power (f ≈ 24 mm). This asymmetric power distribution departs from a classical double-Gauss, where the front and rear groups share power more equally. The concentration of power in the rear group, behind the aperture stop, contributes to the lens's compact form factor: the back focal distance of 21.98 mm is only 0.61× the system focal length, with the image plane sitting closer to the lens than the focal length would suggest if the principal planes were at the lens center.

### Petzval Sum and Field Curvature

The surface-by-surface Petzval sum is +0.0044 mm⁻¹, corresponding to a Petzval radius of approximately 228 mm. This is a relatively gentle inward-curving field. The small positive Petzval sum is consistent with the lens's well-known subtle field curvature behavior: at wide apertures, the focus plane bows slightly toward the lens at the edges, producing the characteristic "three-dimensional pop" that photographers associate with this lens. By f/5.6 and beyond, depth of field masks this effect.

---

## 3. Element-by-Element Analysis

### Element 1 — L11: Front Positive Meniscus

| Property | Value |
|----------|-------|
| Radii | R1 = +31.767, R2 = +108.050 |
| Thickness | 4.70 mm |
| Shape | Positive meniscus, convex to object |
| Glass | nd = 1.75500, νd = 52.3 |
| Focal length | +58.1 mm |
| Glass match | **OHARA S-LAH97** (nd = 1.75500, νd = 52.32), SCHOTT N-LAK33B, HOYA TAC6 |

L11 is the first element the light encounters and serves as the primary positive power contributor in the front group. Its meniscus shape (both radii positive, R1 < R2) bends the wide f/1.4 entrance cone gently inward while minimizing the angle of incidence at each surface. This reduces the surface contribution to spherical aberration — critical at f/1.4 where marginal rays are steep. The lanthanum dense crown glass (LAH/LAK family) provides a high index (1.755) with moderate dispersion (ν ≈ 52), keeping the Petzval contribution manageable while maintaining low chromatic aberration.

### Element 2 — L12: Second Positive Meniscus

| Property | Value |
|----------|-------|
| Radii | R1 = +16.733, R2 = +25.973 |
| Thickness | 5.01 mm |
| Shape | Positive meniscus, convex to object |
| Glass | nd = 1.80400, νd = 46.6 |
| Focal length | +47.1 mm |
| Glass match | **OHARA S-LAH65VS** (nd = 1.80400, νd = 46.58), SCHOTT N-LASF44, HOYA TAF3 |

L12 is the strongest positive element in the front group. Its tighter curvatures (R1 = 16.7 mm) indicate that it does the heavy lifting of converging the marginal ray bundle. The very high index lanthanum glass (nd = 1.804) reduces the curvature needed for a given power, which again minimizes spherical aberration at each surface. The pair L11 + L12 together act as a split positive doublet, distributing the positive power across four surfaces rather than two, which is a classical strategy for controlling spherical aberration in fast lenses.

L12 is the thickest element in the front group at 5.01 mm, reflecting the strong curvature and the need to maintain adequate edge thickness in a meniscus form.

### Element 3 — L13: Negative Meniscus (Flint)

| Property | Value |
|----------|-------|
| Radii | R1 = +27.720, R2 = +10.424 |
| Thickness | 1.35 mm |
| Shape | Negative meniscus, convex to object |
| Glass | nd = 1.69895, νd = 30.1 |
| Focal length | −24.7 mm |
| Glass match | **OHARA S-TIM35** (nd = 1.69895, νd = 30.13), SCHOTT N-SF15, HOYA E-FD15 |

L13 is the primary color-correcting element in the front group. Its medium-index flint glass (ν ≈ 30, TIM/SF family) provides strong negative dispersion to counteract the chromatic aberration introduced by the two preceding positive lanthanum elements. Despite being thin (1.35 mm), it has the strongest negative power of any element in the front group (f = −24.7 mm). The meniscus shape, concave toward the aperture stop, also contributes to coma correction.

The large disparity between L13's rear radius (10.424 mm — quite steep) and its front radius (27.720 mm) creates the strong negative power. This is the "diverging half" of the front group's quasi-achromatic arrangement.

### Element 4 — L14: Weak Negative Meniscus

| Property | Value |
|----------|-------|
| Radii | R1 = +37.345, R2 = +25.375 |
| Thickness | 1.10 mm |
| Shape | Negative meniscus, convex to object |
| Glass | nd = 1.60342, νd = 38.0 |
| Focal length | −135.9 mm |
| Glass match | **OHARA S-TIM5** (nd = 1.60342, νd = 38.03), HOYA E-F5 |

L14 is a weakly negative meniscus (f ≈ −136 mm) positioned immediately before the aperture stop. In a double-Gauss configuration, this element plays the role of a "field flattener" for the front group — its mild negative power and meniscus form help control astigmatism and gently re-shape the wavefront before it passes through the stop. The moderate-dispersion flint glass (TIM family, ν ≈ 38) provides a secondary color correction contribution without introducing excessive chromatic aberration.

The thin construction (1.10 mm) and weak power indicate this element's role is more about wavefront shaping and symmetry than raw power contribution.

### Aperture Stop (between L14 and L21)

The aperture stop is located in the air gap between the front and rear groups, at a distance of 2.73 mm after L14's rear surface. The production lens has 7 rounded diaphragm blades. In the patent, the stop is modeled as an ideal thin aperture (R = ∞, d = 3.20 mm), with the 3.20 mm thickness representing the physical space occupied by the iris mechanism and the air gap to L21.

### Element 5 — L21: Biconcave Aspheric Singlet

| Property | Value |
|----------|-------|
| Radii (paraxial) | R1 = −94.514, R2 = +45.548 |
| Thickness | 2.50 mm |
| Shape | Biconcave (paraxial) with both surfaces aspherical |
| Glass | nd = 1.51760, νd = 63.5 |
| Focal length | −59.0 mm |
| Glass match | **D-K59 (CDGM catalog equivalent)** — exact 518635 coordinate; production supplier unspecified |

L21 is the single aspherical element in the design and the most optically interesting component. Positioned immediately behind the aperture stop, it is a glass-molded biconcave singlet with aspherical profiles on both surfaces. Fujifilm's marketing explicitly states: "Using a glass-molded aspheric lens at the 5th element minimizes spherical aberration."

**Role in the system:** L21's negative power (f ≈ −59 mm) acts as the "diverging core" of the rear group, creating a large separation in ray heights between the stop and the cemented triplet. This is essential for the triplet to correct both axial and lateral chromatic aberration simultaneously. The aspheric profiles on L21 are responsible for the bulk of the residual spherical aberration correction — the patent text ([0036]) explicitly states that the aspherical lens provides "effective correction" of spherical aberration before light enters the cemented triplet, enabling the triplet to then "satisfactorily correct spherical aberration, chromatic coma aberration, and lateral chromatic aberration."

**Aspherical departure:** With the exact patent polynomials, the front surface S10A departs by −1257.304 µm from its paraxial sphere at the 8.4 mm data-file semi-diameter, while S11A departs by −149.709 µm at 6.5 mm. The S10A estimate is 0.1 mm smaller than the original refit-era estimate so the exact profile remains inside the project rim-slope safety limit. The net effect is to increase L21's negative power at the margin relative to the paraxial zone, over-correcting marginal rays to compensate for the residual under-corrected spherical aberration from the many positive elements in the front group and cemented triplet.

**Glass type:** The $n_d = 1.51760$, $\nu_d = 63.5$ prescription is the exact 518635 coordinate of coefficient-backed CDGM D-K59, a molding crown in the borosilicate region. D-K59 is therefore used as the optical catalog equivalent. The patent identifies neither a vendor nor a production melt, so the label does not claim CDGM supplied Fujifilm. The low refractive index and high Abbe number make this glass essentially "color-neutral," ensuring that the aspheric surfaces correct monochromatic aberrations without disturbing the chromatic balance.

**Aspherical coefficient format:** The patent describes the aspheric sag with both odd and even powers of radial height *h* (A3·h³ through A20·h²⁰) and writes its conic denominator as `1−K_A·C²·h²`. Its tabulated $K_A = 0$ therefore describes a paraboloid and converts to the renderer's standard conic constant $K = K_A - 1 = -1$.

The data file stores Table 2 directly: $K=-1$ plus every nonzero A3–A20 coefficient on both surfaces. No even-order refit or conic substitution remains.

### Element 6 — L22: Plano-Convex (Triplet Front)

| Property | Value |
|----------|-------|
| Radii | R1 = ∞ (flat), R2 = −11.174 |
| Thickness | 6.72 mm |
| Shape | Plano-convex, convex to image side |
| Glass | nd = 1.88300, νd = 40.8 |
| Focal length | +12.7 mm |
| Glass match | **OHARA S-LAH58** (nd = 1.88300, νd = 40.76), SCHOTT N-LASF31A, HOYA TAFD30 |
| Cemented group | Triplet T1 (with L23, L24) |

L22 is the strongest single element in the entire system (f ≈ +12.7 mm). Its flat front surface is a deliberate design choice noted in the patent ([0043]): "The surface on the most object side of the three-cemented lens may be a planar surface... a lens system having superior manufacturability that achieves low cost can be provided." A flat surface is easier and cheaper to grind, polish, and cement.

The very high-index lanthanum dense flint glass (nd = 1.883, the highest index in the system) provides strong positive power from a single curved surface (R2 = −11.174 mm), while the 40.8 Abbe number classifies it as a moderate-dispersion glass. Combined with L23's high-dispersion flint and L24's identical high-index glass, this creates an achromatic triplet with secondary spectrum control.

### Element 7 — L23: Negative Meniscus (Triplet Center)

| Property | Value |
|----------|-------|
| Radii | R1 = −11.174, R2 = −124.500 |
| Thickness | 1.20 mm |
| Shape | Negative meniscus, convex to image side |
| Glass | nd = 1.76182, νd = 26.5 |
| Focal length | −16.2 mm |
| Glass match | **OHARA S-TIH14** (nd = 1.76182, νd = 26.52), SCHOTT N-SF14, HOYA FD140 |
| Cemented group | Triplet T1 (with L22, L24) |

L23 is the color-correcting core of the cemented triplet. Sandwiched between two high-index positive elements, it provides the negative dispersion needed to achromatize the triplet. Its dense flint glass (ν ≈ 26.5, TIH/N-SF family) has very high dispersion, and the difference in Abbe number between L23 and the positive elements (νd2p − νd2n = 40.8 − 26.5 = 14.3) satisfies the patent's conditional expression (2) with substantial margin (requirement: > 10). This large Abbe number difference enables simultaneous correction of longitudinal and lateral chromatic aberration — the patent explicitly states ([0050]) that insufficient difference would cause chromatic coma to increase.

### Element 8 — L24: Positive Meniscus (Triplet Rear)

| Property | Value |
|----------|-------|
| Radii | R1 = −124.500, R2 = −20.516 |
| Thickness | 4.99 mm |
| Shape | Positive meniscus, convex to image side |
| Glass | nd = 1.88300, νd = 40.8 |
| Focal length | +27.2 mm |
| Glass match | **OHARA S-LAH58** (same glass as L22), SCHOTT N-LASF31A, HOYA TAFD30 |
| Cemented group | Triplet T1 (with L22, L23) |

L24 uses the same glass type as L22, which simplifies manufacturing procurement. Its meniscus form with the convex surface toward the image produces strong positive power while maintaining a curvature that helps correct field curvature — the patent ([0041]) notes that having two positive lenses with convex surfaces toward the image in the rear group "is advantageous from the viewpoint of favorable correction of field curvature" when paired with a front group of object-convex meniscus lenses.

The final surface (R = −20.516 mm) is the last refracting surface before the image. Its relatively steep curvature is responsible for the largest single positive Petzval contribution in the system (+0.0229 mm⁻¹), which partially offsets the negative Petzval contributions from the strongly curved surfaces in the front group.

---

## 4. Focusing Mechanism

The XF35mmF1.4 R uses **unit focusing** — the entire optical assembly moves forward as a unit for close-focus, with only the back focal distance changing. Fujifilm describes this as: "The XF35mmF1.4 R moves all of the lens groups at the same time, it is the simplest and best way to ensure the best image quality."

Unit focusing preserves the inter-element spacings, so aberration correction remains consistent across the focus range. The trade-off is that the lens must physically extend, and the focus motor must move the entire 8-element assembly. This contributes to the lens's relatively slow autofocus compared to inner-focus designs (a well-known characteristic of this lens).

For the variable gap in the data file, only the back focal distance (the gap after S15) changes:

| Focus position | BFD (S15 to image) | Extension |
|----------------|-------------------|-----------|
| Infinity | 21.98 mm | 0.00 mm |
| 0.28 m (close focus) | ~27.35 mm | ~5.37 mm |

The maximum magnification of 0.17× at the 0.28 m close focus distance is consistent with the calculated value of approximately 0.148×. The small discrepancy reflects the difference between thin-lens and thick-lens magnification computation, as well as the difference between the design EFL (36.17 mm) and the marketed focal length (35 mm).

---

## 5. Semi-Diameter Estimation

The patent does not list semi-diameters. They were estimated using combined marginal ray and chief ray paraxial traces through the verified prescription:

**Methodology:** For each surface, the semi-diameter was estimated as (marginal ray height + chief ray height at 60% field) × clearance factor, then constrained by physical validation checks.

**Marginal ray:** Traced at the design f-number (f/1.45), entrance pupil radius = 12.47 mm. The marginal ray heights decrease from 12.47 mm at S1 to a minimum of ~7.4 mm near the stop, then remain relatively constant through the rear group.

**Chief ray (60% field):** The chief ray at 60% of the maximum half-field angle (ω = 12.9°) was traced to find the off-axis beam footprint at each surface. The entrance pupil is located approximately 31.2 mm in front of S1, consistent with the stop being 21.5 mm behind S1 and the front group's weak positive power imaging the stop forward into object space.

**Vignetting:** Real f/1.4 lenses typically vignette significantly at full field. The SD estimates incorporate a 50% vignetting reduction of the chief ray contribution, reflecting the practical beam diameter at outer field angles.

**Physical constraints enforced:**

1. 52 mm filter thread → maximum front group SD ≈ 23 mm (with barrel wall)
2. Edge thickness ≥ 0.3 mm for all elements (validated via spherical sag computation)
3. Cross-gap sag intrusion ≤ gap × 1.1 for all air gaps
4. sd < |R| × 0.88 for all spherical surfaces (slope limit)

**Binding constraints:** The tightest constraints are the 0.45 mm air gap between L21 and L22 (S11A–S12), which limits SD at S11A and S12 to ~6.5 mm, and the 0.20 mm air gap between L12 and L13 (S4–S5), which limits SD to ~12.1 mm.

---

## 6. Glass Summary

| Element | nd | νd | Glass Code | Best Match | Glass Family | APD |
|---------|-------|------|------------|------------|--------------|-----|
| L11 | 1.75500 | 52.3 | 755-523 | OHARA S-LAH97 | Lanthanum dense crown | No |
| L12 | 1.80400 | 46.6 | 804-466 | OHARA S-LAH65VS | Lanthanum dense flint | No |
| L13 | 1.69895 | 30.1 | 699-301 | OHARA S-TIM35 | Titanium medium-index flint | No |
| L14 | 1.60342 | 38.0 | 603-380 | OHARA S-TIM5 | Titanium medium-index flint | No |
| L21 | 1.51760 | 63.5 | 518-635 | CDGM D-K59 catalog equivalent | Molding crown | No |
| L22 | 1.88300 | 40.8 | 883-408 | OHARA S-LAH58 | Lanthanum dense flint | No |
| L23 | 1.76182 | 26.5 | 762-265 | OHARA S-TIH14 | Titanium high-index flint | No |
| L24 | 1.88300 | 40.8 | 883-408 | OHARA S-LAH58 | Lanthanum dense flint | No |

Glass identifications are based on matching nd/νd pairs against coefficient-backed public catalogs. L21's previously unresolved 518635 coordinate now has an exact catalog position in CDGM D-K59. The catalog name models its dispersion; it does not establish the supplier of Fujifilm's glass-molded production element.

The design uses no anomalous partial dispersion (APD) glasses. Chromatic correction is achieved through conventional crown-flint pairings with adequate Abbe number spread. The average index of the front group positive elements is Nd1 = 1.7795 (patent conditional expression (3): Nd1 > 1.75 ✓), and the average index of the cemented triplet positive elements is Nd2 = 1.8830 (patent conditional expression (1): Nd2 > 1.85 ✓). These high refractive indices are a deliberate design strategy: higher index reduces the required surface curvatures for a given power, which reduces spherical aberration at wide apertures.

---

## 7. Patent Conditional Expressions

| Expression | Condition | Value | Satisfied |
|------------|-----------|-------|-----------|
| (1) | Nd2 > 1.8 | 1.88300 | ✓ |
| (1′) | Nd2 > 1.85 | 1.88300 | ✓ |
| (2) | νd2p − νd2n > 10 | 14.3 | ✓ |
| (2′) | νd2p − νd2n > 12 | 14.3 | ✓ |
| (3) | Nd1 > 1.7 | 1.77950 | ✓ |
| (3′) | Nd1 > 1.75 | 1.77950 | ✓ |
| (4) | 2 < f/Y < 5 | 2.547 | ✓ |
| (4′) | 2.1 < f/Y < 3.5 | 2.547 | ✓ |

Example 1 satisfies all conditional expressions including the tighter "primed" variants, indicating it represents a preferred embodiment within the patent's claims.

---

## 8. Aspherical Coefficient Transcription

The patent's aspherical sag formula differs from the standard (ISO 10110 / Zemax / renderer) convention in two ways:

**Base curve:** The patent uses `Zd = C·h² / {1 + (1 − K_A·C²·h²)^½}` with $K_A = 0$, which yields the paraboloid `C·h²/2`. The standard formula uses `Z = C·h² / {1 + (1 − (1+K)·C²·h²)^½}`, so the direct conversion is $K = K_A - 1 = -1$.

**Polynomial orders:** Table 2 includes both odd and even powers from A3 through A20. All are now represented directly:

| Surface | A3 | A4 | A5 | A6 | A7 | A8 | A9 | A10 | A11 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 10A | 1.4267934E-03 | -1.6625706E-03 | 7.1056683E-04 | -9.1063817E-05 | -6.7671475E-05 | 3.1530346E-05 | -2.7404199E-06 | -1.2148981E-06 | 2.9053673E-07 |
| 11A | 1.4075342E-03 | -1.5407051E-03 | 7.2833847E-04 | -1.3764849E-04 | -3.4723387E-05 | 2.1553742E-05 | -2.4723865E-06 | -6.0987942E-07 | 1.7824931E-07 |

| Surface | A12 | A13 | A14 | A15 | A16 | A17 | A18 | A19 | A20 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 10A | 6.3508375E-09 | -7.9573382E-09 | 4.5951622E-10 | 9.3989975E-11 | -9.7762088E-12 | -4.3352953E-13 | 7.1170331E-14 | 2.5581917E-16 | -1.6083703E-16 |
| 11A | -3.5081942E-09 | -3.6689473E-09 | 3.8060840E-10 | 2.1235855E-11 | -5.4237286E-12 | 1.6515932E-13 | 2.1078707E-14 | -1.6918406E-15 | 3.4763829E-17 |

At the selected semi-diameters, the exact profiles depart from their paraxial spheres by −1257.304 µm for S10A ($h=8.4$ mm) and −149.709 µm for S11A ($h=6.5$ mm). These values are used as regression checks against transcription errors.

---

## 9. Cover Glass Treatment

The patent includes a flat parallel plate (surfaces S16–S17: R = ∞, d = 2.80 mm, nd = 1.51680, νd = 64.2) between the last lens surface and the image plane, representing the sensor cover glass and any optical filters. Per the data file specification, this cover glass is excluded from the surfaces array and its optical path is folded into the BFD.

The paraxial BFD from S15 to the image plane is 21.98 mm regardless of whether the cover glass is present, because flat parallel plates do not refract paraxial rays (φ = 0 at both surfaces). The physical image plane shifts by Δ = t(1 − 1/n) = 2.80(1 − 1/1.5168) ≈ 0.95 mm downstream when the cover glass is inserted, but this does not affect the paraxial BFD computation.

---

## 10. Production Specifications (Manufacturer)

| Parameter | Value |
|-----------|-------|
| Full designation | FUJINON XF35mmF1.4 R |
| Mount | Fujifilm X (APS-C mirrorless) |
| Focal length | 35 mm (53 mm equivalent in 35 mm format) |
| Maximum aperture | f/1.4 |
| Minimum aperture | f/16 |
| Angle of view | 44.2° |
| Lens construction | 8 elements in 6 groups (1 aspherical) |
| Aperture blades | 7 (rounded) |
| Close focus | 28 cm |
| Maximum magnification | 0.17× |
| Filter size | 52 mm |
| Dimensions | ø65.0 mm × 50.4 mm (from flange) |
| Weight | 187 g |

---

## 11. Design Philosophy and Significance

The XF35mmF1.4 R is a textbook study in pragmatic optical design for a mass-market fast prime. Several design choices reveal the engineering priorities:

**Cost consciousness:** The plano front surface on L22 eliminates one polishing operation. Using the same glass (S-LAH58 / N-LASF31A) for both L22 and L24 reduces procurement complexity. The single glass-molded aspheric in inexpensive BK7-type glass keeps the aspheric element cost low.

**Aberration strategy:** Rather than attempting to correct all aberrations uniformly (as modern computational designs do), the XF35mm deliberately prioritizes spherical aberration and axial chromatic correction while allowing mild field curvature and lateral color to remain. The patent text emphasizes spherical aberration correction repeatedly — this is the defining challenge of an f/1.4 design. The aspheric L21 serves as the dedicated spherical aberration corrector, while the cemented triplet handles chromatic correction. This separation of concerns produces a design that is optically elegant and yields the smooth, characterful rendering the lens is known for.

**The "classic" rendering:** The mild positive Petzval sum (R_Petzval ≈ 228 mm) and the moderate field curvature it implies are not a design flaw — they are an inevitable consequence of the compact, cost-effective architecture. But they contribute to the lens's photographic character: center-sharp with gently softening edges at wide apertures, producing a natural dimensionality that many photographers prize. The deliberate choice of unit focusing preserves this consistent aberration signature across the focus range, unlike inner-focus designs where aberration balance shifts with focus position.
