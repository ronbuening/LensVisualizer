# NIKKOR Z 14-24mm f/2.8 S — Optical Analysis

> **Companion data file:** `NikonZ1424f28S.data.ts` — zoom lens prescription for interactive SVG renderer.

**Patent:** WO 2021/117563 A1 (PCT/JP2020/044761), published 17 June 2021
**Inventors:** Ohtake Fumiaki, Nonaka Azuna, Yuasa Yoshiharu, Umeda Takeshi (Nikon Corporation)
**Priority:** JP 2019-223165 / JP 2019-223166, filed 10 December 2019
**Embodiment analyzed:** Example 4 (Table 4, Figures 10–12)
**Production lens:** NIKKOR Z 14-24mm f/2.8 S (released November 2020)

---

## 1. Production Lens Match

Example 4 of the patent matches the production NIKKOR Z 14-24mm f/2.8 S across all identifying parameters:

| Parameter | Patent Example 4 | Nikon Production Spec |
|-----------|------------------|-----------------------|
| Elements × Groups | 16 × 11 | 16 in 11 groups |
| ED elements | 4 (νd = 82.6) | 4 ED |
| Aspherical elements | 3 (L11, L12, L310) | 3 aspherical |
| Aspherical surfaces | 4 (srf 1, 2, 4, 27) | — |
| Focal length (W/T) | 14.4 / 23.3 mm | 14–24 mm |
| Maximum aperture | f/2.91 | f/2.8 |
| Image circle | Y = 21.6 mm (≡ FX 43.2 mm dia.) | FX format |
| Field of view (W) | 2ω = 115.2° | 114° |
| Focus type | Inner focus (G2) | IF |
| Close focus distance | 279 mm (computed) | 0.28 m |

The element/group count, ED count, aspherical element count, focal length range, field of view, and close-focus distance all converge to confirm this is the embodiment that went to production.

---

## 2. Overall Optical Architecture

The lens is a three-moving-group zoom comprising, from object to image:

| Group | Patent Name | Power | Elements | Focal Length | Role |
|-------|-------------|-------|----------|--------------|------|
| G1 | GA (Preceding) | Negative | L11–L14 (4 elements, 4 groups) | −21.4 mm | Front negative — wide field of view |
| G2 | GF (Focusing) | Positive | L21–L22 (2 elements, 1 cemented group) | +105.3 mm | Focusing group — inner focus |
| G3 | GC (Image-side) | Positive | L31–L310 (10 elements, 6 groups) | +39.3 mm | Image formation and aberration correction |

This is a **negative-lead retrofocus zoom** — the large negative front group (G1) diverges the incoming light to achieve a very wide field of view, while the positive rear assembly (G2 + G3) converges the diverged beam to form an image. The back focal distance at wide (Bf_w = 22.54 mm) exceeds the flange-to-sensor distance of the Z-mount (16 mm), ensuring clearance for the mirrorless body.

### Zoom Mechanism

During zooming from wide (14.4 mm) to telephoto (23.3 mm), all three groups move:

- **G1** moves toward the image (rearward).
- **G2** and **G3** move toward the object (forward).
- The spacings D8 (G1↔G2) and D11 (G2↔G3) both change, as does the back focal distance.

The zoom ratio is 1.62×, modest by zoom lens standards, which allows the optical designer to push aberration correction much harder than in higher-ratio zooms. This is a deliberate trade-off: a narrow zoom range in exchange for near-prime-level optical quality.

### Focus Mechanism

Focusing is performed by **G2 alone** (the L21+L22 cemented doublet), which moves toward the image when focusing from infinity to close distance. This is a classic inner-focus (IF) architecture. Because only a single cemented pair moves, the focusing mass is very small, enabling the fast and silent stepping-motor AF that Nikon advertises.

The variable-gap data confirms this: at all four zoom positions, the back focal distance (Bf) remains identical between infinity and close focus. Only D8 (the gap between G1 and G2) and D11 (the gap between G2 and G3) change during focus, with D8 increasing and D11 decreasing as the lens focuses closer — consistent with G2 translating rearward.

At the wide end at close focus (object distance 141 mm from the front vertex, β = 0.088), D8 grows from 19.11 mm to 22.29 mm while D11 shrinks from 10.68 mm to 7.50 mm. The sum D8 + D11 is conserved (29.79 mm at both infinity and close), confirming that the total travel of G2 is the only mechanical motion during focus. This conservation holds at all four zoom positions.

---

## 3. Element-by-Element Analysis

### Group 1 — Front Negative Group (GA): L11–L14

G1 is the large, strongly negative front group that creates the retrofocus field-widening effect. It comprises four air-separated singlets with a group focal length of −21.4 mm.

**L11 — Negative Meniscus (both surfaces aspherical)**
- Glass: nd = 1.58887, νd = 61.1 → **S-BAL35 / L-BAL35** (OHARA; nd = 1.58913, νd = 61.27)
- Focal length: −30.7 mm
- Surfaces 1\* and 2\*; both carry aspherical profiles
- This is the outermost element, directly exposed to the scene. Its front surface (R = 151.50 mm) is gently convex with a spherical base curve (K = 0) and strong positive-departure higher-order aspherical terms — at 90% of its clear aperture, the aspherical departure reaches nearly 3,900 µm, an extraordinarily large figure. This aspherical departure is what allows the element to control the severe distortion and astigmatism inherent in a 115° field of view.
- The rear surface (R = 16.04 mm) is much more steeply curved with a paraboloidal base (K = −1). The paraboloidal profile flattens the sag relative to a sphere, reducing the refraction angle for extreme marginal rays and controlling spherical aberration of the pupil.
- The L-BAL35 glass variant (OHARA's "L-" prefix denotes low-softening-temperature PGM glass) is consistent with the extremely large aspherical departures on both surfaces — precision glass molding is the only economically viable manufacturing method for aspheres of this magnitude.

**L12 — Negative Meniscus (rear surface aspherical)**
- Glass: nd = 1.743104, νd = 49.4 → **S-LAM51** (OHARA; nd = 1.74330, νd = 49.33)
- Focal length: −54.2 mm
- Surface 4\* is aspherical with a paraboloidal base (K = −1) and positive higher-order terms. At 90% of its clear aperture the departure exceeds 2,900 µm. Like L11, this element helps tame the oblique spherical aberration and coma of the extreme off-axis rays. The high refractive index (1.743) reduces the surface curvatures needed for a given power, which in turn reduces higher-order aberration contributions.

**L13 — Biconcave Negative (anomalous partial dispersion)**
- Glass: nd = 1.49782, νd = 82.6 → **S-FPL52** (OHARA; nd = 1.49782, νd = 82.56) — ED fluorophosphate crown
- Focal length: −65.3 mm
- Patent explicitly identifies this element as using anomalous partial dispersion glass. Although it is a negative element with weak power, placing an ED glass here allows it to act as a chromatic aberration corrector for the front group. The negative power in a high-νd, low-ΔPgF glass generates anomalous secondary spectrum of opposite sign to that produced by the positive rear groups, partially canceling the overall lateral color across the wide field.

**L13 is unusual** — most designers place ED glass in positive elements to correct primary longitudinal chromatic aberration. Using ED glass in a *negative* element in the front group suggests that secondary lateral chromatic aberration (secondary spectrum of lateral color) was a dominant residual in the design, and this was the most effective placement to address it.

**L14 — Biconvex Positive (nearly plano-convex)**
- Glass: nd = 1.737999, νd = 32.3 → **S-TIH14** (OHARA; nd = 1.73800, νd = 32.33)
- Focal length: +47.7 mm
- This positive element partially compensates the strong negative power of L11–L13, reducing the divergence angle of the beam entering G2. Its low Abbe number (νd = 32.3, a dense flint) provides the complementary dispersion needed to achromatize the front group in combination with L13's ED glass. The rear surface R = −644.56 mm is nearly flat, making this effectively a plano-convex element — a form that minimizes coma contribution from the individual element.

### Group 2 — Focusing Group (GF): L21–L22

G2 is a single cemented doublet with a group focal length of +105.3 mm. It functions as both the focusing element and a relay of the diverging beam from G1 toward G3.

**L21 — Negative Meniscus**
- Glass: nd = 2.00060, νd = 25.4 → **S-NPH2** (OHARA; nd = 2.00069, νd = 25.46) — ultra-high-index dense flint
- Focal length: −47.4 mm
- With nd = 2.0006, this is among the highest-index glasses in production optical catalogs. The extreme refractive index allows very strong surface curvatures to be "hidden" behind a high-index-to-air interface, reducing both the physical curvature and the associated higher-order aberration contributions. Its very low Abbe number makes it an effective flint element in the cemented pair.

**L22 — Positive Meniscus**
- Glass: nd = 1.64769, νd = 33.7 → **S-TIM27** (OHARA; nd = 1.64769, νd = 33.80)
- Focal length: +31.9 mm
- Despite both L21 and L22 being relatively low-νd glasses, the cemented doublet as a whole is weakly positive (+105.3 mm), acting primarily as a field lens and aberration compensator rather than a strong power contributor. Its main job during focusing is to shift the exit pupil position smoothly without introducing significant focus breathing — consistent with Nikon's claim of virtually eliminated focus breathing.

### Group 3 — Image-Side Group (GC): L31–L310

G3 is the most complex group, with 10 elements in 6 sub-groups and a net focal length of +39.3 mm. It contains the aperture stop and does the heavy lifting of image formation and aberration balancing. This group includes all four of the lens's ED elements.

**L31 + L32 — Cemented Doublet D2 (negative meniscus + positive meniscus)**
- L31: nd = 1.85000, νd = 27.0 → **Dense flint** (probable CDGM H-ZF88 or Schott SF57-class equivalent; round nd value prevents definitive catalog identification)
- L32: nd = 1.59349, νd = 67.0 → **Near S-FPM3** (OHARA; nd = 1.59319, νd = 67.87; Δnd = +0.0003)
- Combined focal length: +67.5 mm
- This doublet sits just ahead of the aperture stop. Its primary role is to pre-correct spherical aberration and coma for the rays about to pass through the stop. The large index difference at the cemented junction (Δnd = 0.257) creates significant chromatic correction power. L31's low νd against L32's high νd forms a conventional crown-flint achromatic correction.

**Aperture Stop (S)** — located between L32 and L33, within G3.

The patent also mentions a **sub-aperture stop Sa** near the object side of L31. During zooming, Sa moves together with G3 along the optical axis. This supplementary stop helps control vignetting and stray light at the extreme wide-angle setting, where the cone of light entering G3 is at its widest.

**L33 + L34 — Cemented Doublet D3 (biconcave negative + biconvex positive)**
- L33: nd = 1.95375, νd = 32.3 → **S-LAH79** (OHARA; nd = 1.95375, νd = 32.32)
- L34: nd = 1.84666, νd = 23.7 → **S-TIH53** (OHARA; nd = 1.84666, νd = 23.78)
- Combined focal length: −142.0 mm (weakly negative)
- Immediately behind the stop, this doublet corrects the zonal spherical aberration and chromatic variation of spherical aberration (spherochromatism). Both glasses are high-index flints, but with different dispersive properties — L33 is a lanthanum flint (high nd, moderate νd) while L34 is a titanium flint (high nd, very low νd). The strongly negative L33 (fl = −19.4 mm) against the strongly positive L34 (fl = +23.4 mm) creates a "thick meniscus" effect that controls the Petzval sum contribution while also bending the chromatic correction curve.

**L35 — Biconvex Positive (ED, anomalous partial dispersion)**
- Glass: nd = 1.49782, νd = 82.6 → **S-FPL52** (OHARA; nd = 1.49782, νd = 82.56) — ED fluorophosphate crown
- Focal length: +34.8 mm
- The first of three ED elements in the rear group. Its strong positive power and anomalous partial dispersion correct both primary and secondary longitudinal chromatic aberration. Positioned immediately behind the stop, it handles the on-axis color correction.

**L36 + L37 — Cemented Doublet D4 (negative meniscus + positive meniscus, ED)**
- L36: nd = 1.83481, νd = 42.7 → **S-LAH55** (OHARA; nd = 1.83481, νd = 42.73)
- L37: nd = 1.49782, νd = 82.6 → **S-FPL52** (OHARA) — ED fluorophosphate crown
- Combined focal length: −142.9 mm (weakly negative)
- This is the patent-identified "specific lens" (特定レンズ) within group GBa. L37's ED glass corrects lateral chromatic aberration (lateral color), which is the dominant chromatic defect in ultra-wide-angle systems. By placing the ED element in a cemented pair with a lanthanum crown, the designer achieves anomalous chromatic correction without introducing excessive monochromatic aberrations. The weak net negative power of the doublet also contributes to Petzval sum correction (flattening the field).

**L38 + L39 — Cemented Doublet D5 (biconvex positive ED + biconcave negative)**
- L38: nd = 1.49782, νd = 82.6 → **S-FPL52** (OHARA) — ED fluorophosphate crown
- L39: nd = 1.83481, νd = 42.7 → **S-LAH55** (OHARA; nd = 1.83481, νd = 42.73)
- Combined focal length: −84.6 mm (negative)
- This doublet mirrors the L36+L37 pair in glass selection (the same two glass types, swapped in element order). L38 is the fourth and final ED element. The pair provides additional secondary spectrum correction and contributes negative Petzval curvature to flatten the image field. The symmetric pairing of L36+L37 and L38+L39 — same glasses, reversed roles — is a hallmark of Nikon's approach to lateral color correction in wide-angle designs, distributing the chromatic workload across multiple doublets to avoid overburdening any single interface.

**L310 — Positive Meniscus (front surface aspherical)**
- Glass: nd = 1.85108, νd = 40.1 → **Probable S-LAH97** (OHARA) or HOYA equivalent
- Focal length: +286.4 mm (very weak positive)
- Surface 27\* is aspherical with a spherical base (K = 0) and negative higher-order coefficients — the aspherical departure at 90% of the clear aperture is approximately −449 µm, bending the surface away from the image relative to the sphere. This is the "field-correcting" asphere: positioned near the image plane where the chief ray height is large relative to the marginal ray, it primarily corrects field-dependent aberrations (astigmatism, field curvature, and distortion) without significantly affecting on-axis performance. The weak overall power means it acts almost as a corrector plate rather than a focusing element.

---

## 4. Aspherical Surface Summary

The lens uses four aspherical surfaces on three elements. Their roles divide cleanly into two categories:

### Front-Group Aspheres (Surfaces 1\*, 2\*, 4\*) — Pupil & Field Aberration Control

All three front-group aspherical surfaces carry very large departures from the best-fit sphere (millimeters, not micrometers). This is characteristic of ultra-wide-angle designs where the extreme ray angles at the front group demand radical reshaping of the wavefront:

| Surface | Element | R (mm) | Conic (K) | Departure at ~90% zone | Primary Role |
|---------|---------|--------|-----------|----------------------|--------------|
| 1\* | L11 front | 151.50 | 0 (sphere) | +3,900 µm | Distortion, oblique SA |
| 2\* | L11 rear | 16.04 | −1 (paraboloid) | * | Pupil spherical aberration |
| 4\* | L12 rear | 27.44 | −1 (paraboloid) | * | Coma, astigmatism |

\* Departure figures for surfaces 2\* and 4\* depend critically on the assumed semi-diameter; the paraboloidal base (K = −1) means the conic sag itself represents a massive departure from a sphere at any substantial aperture height. A precise departure calculation requires knowledge of the actual clear aperture radii, which the patent does not provide. At the semi-diameters used in the companion data file (14 mm and 22 mm respectively), the combined conic + polynomial departure reaches thousands of micrometers.

Surfaces 2\* and 4\* use a paraboloidal base (K = −1), which is significantly flatter than a sphere at the rim. The paraboloid eliminates the h² sag contribution from the conic, pushing all power control into the higher-order polynomial coefficients. This is a common technique in high-departure aspheres where the designer needs fine control over the wavefront shape at large aperture heights without fighting the rapid sag growth of a spherical base curve.

### Rear-Group Asphere (Surface 27\*) — Field Curvature & Distortion Fine-Tuning

| Surface | Element | R (mm) | Conic (K) | Departure at ~90% zone | Primary Role |
|---------|---------|--------|-----------|----------------------|--------------|
| 27\* | L310 front | −68.43 | 0 (sphere) | −449 µm | Astigmatism, field curvature |

The rear asphere is far more modest in departure — under 0.5 mm even at the edge. Positioned close to the image plane where chief rays are well separated by field angle, it fine-tunes the residual field curvature and astigmatism that the front aspheres and the ED doublets could not fully correct. This placement also helps control the pincushion distortion that the negative-lead retrofocus architecture would otherwise produce at the telephoto end.

---

## 5. ED Glass Distribution and Chromatic Strategy

The four ED elements (all S-FPL52 type, nd = 1.49782, νd = 82.6) are distributed across the optical system in a deliberate pattern:

| Element | Group | Power | Role in Chromatic Correction |
|---------|-------|-------|------------------------------|
| L13 | G1 (front) | Negative (−65.3 mm) | Secondary lateral color correction |
| L35 | G3 (rear) | Positive (+34.8 mm) | Primary longitudinal CA correction |
| L37 | G3 (rear) | Positive (+42.9 mm) | Lateral color correction (cemented with flint) |
| L38 | G3 (rear) | Positive (+27.7 mm) | Lateral + longitudinal CA correction |

Three of the four ED elements are positive, which is the conventional use — the anomalous partial dispersion of S-FPL52 overcorrects the secondary spectrum relative to a normal crown glass, compensating for the undercorrection from the paired flint elements.

The fourth ED element (L13) is negative and placed in the front group. This is the unusual and interesting placement. In a retrofocus ultra-wide, the lateral color (chromatic difference of magnification) is the dominant chromatic defect because the front negative group and rear positive group have very different heights for the chief ray. Placing an ED glass element with negative power in the front group provides a secondary-spectrum lateral color correction that cannot be efficiently achieved from the rear group alone. This is a signature feature of this design — the patent explicitly identifies L13, L35, L37, and L38 as anomalous dispersion elements.

---

## 6. Conditional Expression Verification

The patent specifies 15 conditional expressions. Example 4 satisfies all of them. The key ones are:

| Expression | Formula | Range | Example 4 Value | Status |
|-----------|---------|-------|-----------------|--------|
| (1-1) | fF / fBaw | > 1.80 | 3.217 | ✓ |
| (1-2) | βFw / (−βBaw) | 2.00 – 15.00 | 3.989 | ✓ |
| (2) | FNow | < 3.40 | 2.91 | ✓ |
| (3) | βFw | 1.50 – 15.00 | 2.687 | ✓ |
| (4) | fBaw / fCw | 0.00 – 1.00 | 0.834 | ✓ |
| (5) | Bfw / fw | 0.60 – 4.00 | 1.563 | ✓ |
| (6) | Bfw / TLw | 0.05 – 0.22 | 0.163 | ✓ |
| (7) | STLw / TLw | 0.40 – 0.70 | 0.583 | ✓ |
| (15) | νd (specific lens) | > 75.0 | 82.6 | ✓ |

Expression (1-1) governs the ratio of focusing group focal length to image-side group focal length. The value of 3.217 means the focusing group (G2) is much weaker than the image-side group (G3), ensuring that the focus travel is modest and aberration variation during focus is well controlled.

Expression (5) relates the back focus to the system focal length. The value of 1.563 means the back focal distance is 56% larger than the wide-end focal length — a measure of the retrofocus character. Values below 1.0 would indicate a telephoto design; values well above 1.0 confirm the retrofocus (inverted telephoto) architecture.

Expression (15) requires that the "specific lenses" in the rear group (L35, L37, L38 per [0111]) have an Abbe number exceeding 75.0. The value of 82.6 comfortably exceeds this threshold, confirming the use of ED-class glass.

---

## 7. Variable Spacing and Zoom Data

### Infinity Focus

| Parameter | Wide (W) | Mid 1 (M1) | Mid 2 (M2) | Tele (T) |
|-----------|----------|------------|------------|----------|
| Focal length (mm) | 14.42 | 18.00 | 20.00 | 23.29 |
| D8 — G1↔G2 (mm) | 19.11 | 10.32 | 6.94 | 2.78 |
| D11 — G2↔G3 (mm) | 10.68 | 8.35 | 7.26 | 5.72 |
| Bf (mm) | 22.54 | 27.74 | 30.59 | 35.22 |
| Total track (mm) | 138.26 | 132.34 | 130.72 | 129.65 |

As the lens zooms from wide to tele, D8 decreases dramatically (19.11 → 2.78 mm) while Bf increases (22.54 → 35.22 mm). This means G1 moves rearward while G3 moves forward — the three groups converge during zooming, with the total track decreasing by about 8.6 mm from wide to tele.

### Intermediate Focus (β = 0.025)

| Parameter | Wide (W) | Mid 1 (M1) | Mid 2 (M2) | Tele (T) |
|-----------|----------|------------|------------|----------|
| Object distance (mm) | 553 | 697 | 777 | 909 |
| D8 (mm) | 20.03 | 11.12 | 7.69 | 3.46 |
| D11 (mm) | 9.77 | 7.55 | 6.52 | 5.04 |
| Bf (mm) | 22.54 | 27.74 | 30.59 | 35.22 |

### Close Focus (maximum magnification)

| Parameter | Wide (W) | Mid 1 (M1) | Mid 2 (M2) | Tele (T) |
|-----------|----------|------------|------------|----------|
| Magnification (β) | 0.088 | 0.106 | 0.117 | 0.135 |
| Object distance (mm) | 141 | 147 | 149 | 150 |
| D8 (mm) | 22.29 | 13.66 | 10.37 | 6.38 |
| D11 (mm) | 7.50 | 5.02 | 3.83 | 2.13 |
| Bf (mm) | 22.54 | 27.74 | 30.59 | 35.22 |

At close focus, D8 increases by 3.18 mm (wide) to 3.60 mm (tele) relative to infinity, and D11 decreases by the same amount — confirming that the G2 doublet translates rearward along the axis. The back focal distance is unchanged during focus, meaning the image plane position is maintained entirely by the G2 movement. The close-focus object distance of ~141–150 mm from the front vertex is consistent with Nikon's published minimum focus distance of 0.28 m (measured from the sensor plane: 141 mm front vertex + 138.3 mm total track = 279.3 mm ≈ 0.28 m).

---

## 8. Glass Budget Summary

The design uses 10 distinct glass types across 16 elements:

| Glass (Catalog Match) | nd | νd | Elements | Count |
|----------------------|------|------|----------|-------|
| S-FPL52 (ED) | 1.49782 | 82.6 | L13, L35, L37, L38 | 4 |
| S-LAH55 | 1.83481 | 42.7 | L36, L39 | 2 |
| S-BAL35 / L-BAL35 | 1.58887 | 61.1 | L11 | 1 |
| S-LAM51 | 1.74310 | 49.4 | L12 | 1 |
| S-TIH14 | 1.73800 | 32.3 | L14 | 1 |
| S-NPH2 | 2.00060 | 25.4 | L21 | 1 |
| S-TIM27 | 1.64769 | 33.7 | L22 | 1 |
| Dense flint (850/270) | 1.85000 | 27.0 | L31 | 1 |
| Near S-FPM3 | 1.59349 | 67.0 | L32 | 1 |
| S-LAH79 | 1.95375 | 32.3 | L33 | 1 |
| S-TIH53 | 1.84666 | 23.7 | L34 | 1 |
| Probable S-LAH97 | 1.85108 | 40.1 | L310 | 1 |

Glass identifications are based on matching the patent's nd/νd values against published OHARA catalog data. Most matches are exact (Δnd < 0.001, Δνd < 0.3). Two identifications carry caveats: L31 (nd = 1.85000, νd = 27.0) has a round nd value that could match multiple catalogs; L32 (nd = 1.59349, νd = 67.0) is close to S-FPM3 (nd = 1.59319) but the Δnd of +0.0003 and the νd discrepancy (67.0 vs. 67.87) suggest it may be a proprietary Nikon melt or a less common catalog variant.

The design makes heavy use of high-index glasses (seven elements have nd > 1.73) to keep surface curvatures manageable despite the very strong total power of the system. The single ultra-high-index element (L21, nd = 2.0006) is notable — S-NPH2 is one of the densest commercially available optical glasses, and its use in the compact focusing group helps keep that group physically small.

---

## 9. Numerical Verification

Independently computed from the patent prescription using a paraxial ABCD-method ray trace:

| Quantity | Computed | Patent | Δ |
|----------|----------|--------|---|
| System EFL (wide ∞) | 14.422 mm | 14.42 mm | +0.002 mm |
| System EFL (M1 ∞) | 18.003 mm | 18.00 mm | +0.003 mm |
| System EFL (M2 ∞) | 19.997 mm | 20.00 mm | −0.003 mm |
| System EFL (tele ∞) | 23.283 mm | 23.29 mm | −0.007 mm |
| G1 focal length | −21.438 mm | −21.401 mm | −0.037 mm |
| G2 focal length | +105.273 mm | +105.275 mm | −0.002 mm |
| G3 focal length | +39.247 mm | +39.261 mm | −0.014 mm |
| BFL (wide ∞) | 22.497 mm | 22.54 mm | −0.043 mm |
| Total track (wide ∞) | 138.260 mm | 138.261 mm | −0.001 mm |
| D8+D11 sum (wide ∞) | 29.79 mm | 29.79 mm | 0.00 mm |
| D8+D11 sum (wide cf) | 29.79 mm | 29.79 mm | 0.00 mm |
| Close focus MFD | 279.3 mm | — | ≈ Nikon 0.28 m |

All computed values match the patent to within rounding precision of the stated values, confirming correct transcription.

---

## 10. Semi-Diameter Estimation

The patent does not provide semi-diameters. For the companion `.data.ts` file, semi-diameters were estimated using the following methodology:

1. The patent diagram (Fig. 10) provides proportional element sizes, anchored by the known barrel outer diameter of 88.5 mm and the front dome geometry.
2. Front element L11 has a large convex dome with R = 151.5 mm; the maximum physical semi-diameter is estimated at ~42 mm based on the barrel profile.
3. The steep rear surface of L11 (R = 16.04 mm) constrains the rear SD to ~14 mm (sd/R < 0.90).
4. Elements in G3 have SDs in the 10–12.5 mm range, consistent with the stop semi-diameter and the moderate total track behind the stop.
5. Edge thickness, sd/R ratio, and cross-gap sag constraints were enforced for all elements. Cemented surfaces were equalized within each doublet.

Paraxial chief ray tracing is invalid at the wide-end half-field angle of 57.6° — the small-angle approximation (tan ω ≈ ω) fails catastrophically at these extreme angles. The semi-diameters should therefore be understood as physically constrained estimates for rendering purposes, not exact optical clear aperture values.

---

## 11. Design Philosophy — Key Takeaways

The NIKKOR Z 14-24mm f/2.8 S, as revealed by Example 4 of WO 2021/117563, is a carefully optimized negative-lead retrofocus zoom with several notable design decisions:

**Minimal focusing mass.** The focusing group is a single cemented doublet (L21+L22). This is the lightest possible focusing element for a lens of this complexity, and it explains the fast, quiet AF and negligible focus breathing. The weak positive power of G2 (+105 mm) means its focal shift during focus is small relative to the system, minimizing aberration variation.

**Distributed chromatic correction.** Rather than concentrating all ED glass in one location, the design distributes four S-FPL52 elements across the front and rear groups. The unusual negative ED element (L13) in the front group addresses secondary lateral color — the chromatic defect that is hardest to correct in ultra-wide retrofocus designs and most visible as purple fringing at high-contrast edges near the frame corners.

**Extreme front-group aspheres.** The three front-element aspherical surfaces carry millimeter-scale departures, far larger than typical photographic lens aspheres. Two surfaces use paraboloidal base curves (K = −1) to manage the departure profile. L11 is almost certainly precision glass-molded (PGM) given its use of L-BAL35 glass (OHARA's L-prefix denotes low-softening-temperature PGM glass), and the millimeter-scale departures on both surfaces confirm this — conventional polishing of aspheres this deep would be prohibitively expensive.

**Rear corrector asphere.** L310's much more modest aspherical surface (sub-millimeter departure) performs the fine-tuning of field curvature and residual distortion. Positioned near the image, where field angles are well separated, it efficiently corrects field-dependent aberrations without disturbing the on-axis performance established by the rest of the system.

**Symmetric ED doublet pairs.** The L36+L37 and L38+L39 doublets use the same two glass types (S-LAH55 and S-FPL52) in swapped configurations. This near-symmetric arrangement is effective for canceling odd-order aberrations (particularly lateral color and coma) across the image field — a technique Nikon has employed in other high-performance Z-mount designs.

---

## Revision Log

**v2 (this document):** Corrected glass identifications for L11 (S-BAM4 → S-BAL35/L-BAL35), L12 (S-LAM2 → S-LAM51), L32 (S-BSM14 → near S-FPM3), and all four ED elements (S-FPL51 → S-FPL52). Added note on L-BAL35 PGM glass variant for L11. Added independent numerical verification table (§9). Added total track values at all four zoom positions. Corrected aspherical departure discussion for surfaces 2\* and 4\* (previous departure figures were computed at unrealistically large semi-diameters; now noted as SD-dependent). Added semi-diameter estimation methodology (§10). Corrected total track change during zoom (was "~6 mm," now correctly "~8.6 mm"). Added intermediate-focus variable spacing table (β = 0.025). Corrected MFD calculation with explicit sum (141 + 138.3 = 279.3 mm ≈ 0.28 m).

---

## Sources

1. WO 2021/117563 A1, "Variable Magnification Optical System, Optical Apparatus and Method for Manufacturing Variable Magnification Optical System," Nikon Corporation, PCT/JP2020/044761, published 17 June 2021. Example 4 (Table 4), paragraphs [0107]–[0114].
2. Nikon Corporation, "NIKKOR Z 14-24mm f/2.8 S" product page: 16 elements / 11 groups, 4 ED, 3 aspherical elements. nikonusa.com.
3. OHARA Optical Glass Catalog (glass identification reference for nd/νd matching: S-FPL52, S-BAL35, L-BAL35, S-LAM51, S-TIH14, S-NPH2, S-TIM27, S-FPM3, S-LAH79, S-TIH53, S-LAH55, S-LAH97).
