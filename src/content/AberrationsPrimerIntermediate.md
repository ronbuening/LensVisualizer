# Aberrations — Foundations of Optical Error

This guide expands on the conceptual aberration primer with the mathematical framework that lens designers use to classify, quantify, and correct the imperfections of real optical systems. It assumes familiarity with the terms and symbols introduced in the optics primers (particularly *nd*, *νd*, EFL, the paraxial ray-trace equations, and the asphere sag formula).

---

## 1. Why Aberrations Exist

Snell's law is exact — but it is also nonlinear. The paraxial approximation (sin θ ≈ θ) that makes first-order ray tracing tractable ignores higher-order terms in the Taylor expansion of the sine function. When those terms become significant — as they do for rays far from the axis or at steep angles — the actual ray path deviates from the paraxial prediction. These deviations are aberrations. A useful way to think about them is as a power-series expansion of the wavefront error: the first-order (paraxial) terms describe perfect imaging, the third-order terms describe the five Seidel aberrations, and still higher orders produce residuals that even a Seidel-corrected design must manage.

## 2. The Seidel Framework

In 1856, Ludwig von Seidel showed that every monochromatic aberration of a rotationally symmetric optical system can, to third order, be decomposed into five independent contributions. Each is characterized by a **Seidel coefficient** (S_I through S_V) that depends on the constructional parameters of the lens — surface curvatures, spacings, refractive indices, and the heights and angles of the paraxial marginal and chief rays at each surface.

The five aberrations, with their Seidel coefficient labels, are:

**S_I — Spherical aberration.** A variation in focus with aperture zone. Rays at height *h* in the pupil miss the paraxial focus by a longitudinal amount proportional to h². In the cross-section diagrams on this site, this appears as a spread in the convergence point of on-axis rays: marginal rays (near the edge of the entrance pupil) cross the axis closer to or farther from the lens than paraxial rays (near the center). The transverse error at the image plane grows as h³.

**S_II — Coma.** A variation in magnification with aperture zone for off-axis points. The image of a point source away from the axis is drawn out into a comet-shaped flare. The transverse aberration is proportional to h²·η, where η is the field height. Coma is most visible in the off-axis ray bundle: an asymmetric fan of rays at the image plane is the hallmark.

**S_III — Astigmatism.** Rays in the tangential plane (the plane containing the optical axis and the field point) and the sagittal plane (perpendicular to it) come to focus at different axial positions. The separation between the two focal lines grows as η². Because the viewer traces rays in a single meridional plane, astigmatism is not directly visible in the cross-section diagram, but its effect — elongated rather than circular point images at the field edge — is one of the most consequential off-axis defects in fast lenses.

**S_IV — Petzval field curvature.** Even when astigmatism is corrected, the surface of best focus may be curved rather than flat. The **Petzval sum** determines the natural radius of this curvature:

> **Σ (1 / n_i · f_i)** over all elements

where n_i and f_i are the refractive index and focal length of the *i*-th element. A zero Petzval sum yields a flat field. In practice, designers use strong negative elements (which contribute negative terms to the sum) to flatten the field. The element-detail panel on this site shows the focal length (FL) of each element; elements with large negative FL values are often present specifically to control field curvature.

**S_V — Distortion.** A shift in image position that varies with field height but does not blur the image. The displacement is proportional to η³, so straight lines in the scene bow outward (barrel, S_V < 0) or inward (pincushion, S_V > 0). Distortion is determined almost entirely by the position of the aperture stop relative to the lens's symmetry; designs that are structurally symmetric about the stop tend to have very low distortion.

## 3. Surface Contributions and the Seidel Sums

Each surface in the system contributes independently to the five Seidel sums. For the *k*-th surface, the contribution to spherical aberration can be written as:

> **S_I(k) = −A² · y · Δ(u/n)**

where *A* = *n*·*i* is the refraction invariant (with *i* the angle of incidence at the surface), *y* is the marginal-ray height, *u* is the marginal-ray angle, *n* is the refractive index, and Δ denotes the change in the quantity across the surface. The other four Seidel coefficients follow analogous expressions involving various combinations of the marginal and chief-ray data. (The exact formulation varies by author; the essential point is that each surface's contribution depends on the ray heights and angles that the paraxial trace provides.) The total system aberration is the algebraic sum of all surface contributions, which is why adding more surfaces — even though each one introduces its own errors — can reduce the total if the new contributions have the opposite sign.

This additive property is the reason photographic lenses have so many elements. A four-element Tessar is sufficient for moderate apertures, but an f/1.2 design may need twelve or more elements to drive the individual Seidel sums close to zero while also controlling higher-order residuals.

## 4. Chromatic Aberrations

The Seidel framework assumes a single wavelength. Extending to polychromatic light adds two more aberrations:

**Longitudinal chromatic aberration (LCA)** — the axial focus shift between wavelengths. For a thin lens in air, the focus spread between the F-line (blue) and C-line (red) is:

> **|δf| = f / νd**

where *f* is the focal length and *νd* is the Abbe number. This expression makes clear why low-νd (high-dispersion) elements produce large LCA contributions and why ED glasses (high νd) are effective correctors. The viewer reports LCA in micrometers; values below roughly 10 µm are generally well-corrected for photographic use.

**Transverse chromatic aberration (TCA)** — a wavelength-dependent magnification that produces color fringing proportional to field height. It is often called "lateral color." TCA is zero on-axis and worst at the corners of the frame. It can be corrected independently of LCA by adjusting the chromatic properties of the elements near the stop (which primarily affect LCA) versus those far from the stop (which primarily affect TCA).

The achromatic-doublet condition from the optics primer,

> **φ₁/ν₁ + φ₂/ν₂ = 0**

corrects LCA to first order. An **apochromatic** design goes further, bringing a third wavelength to a common focus — typically by using anomalous-dispersion glasses whose partial dispersion ratios differ from the normal glass line on a P–νd diagram. The viewer's COLOR overlay, which traces separate R, G, and B ray paths, provides a direct visual test of how well a given design achieves this.

## 5. Higher-Order Aberrations

The Seidel (third-order) coefficients capture the dominant behavior at moderate apertures and field angles, but fast lenses (f/1.4 and below) and wide-angle designs inevitably excite fifth-order and higher terms. Fifth-order spherical aberration causes the blur pattern to change character across the aperture in ways that a single aspheric correction cannot fully address. Higher-order coma and oblique spherical aberration create field-dependent flare that differs qualitatively from its third-order counterpart.

In practice, designers balance third-order and fifth-order contributions against each other so that the total wavefront error remains within tolerance across the aperture and field. The aspherical surface coefficients **A4**, **A6**, **A8**, and so on (visible in the patent data) give the designer direct control over successively higher orders of spherical aberration at that surface. This is why a single well-placed asphere can sometimes replace two or three spherical elements: it provides correction at multiple orders simultaneously.

## 6. Aberration Behavior with Aperture and Field

The Seidel coefficients reveal how each aberration scales with aperture (pupil coordinate *h*) and field (image height *η*):

| Aberration | Dependence | Aperture scaling | Field scaling |
|---|---|---|---|
| Spherical | S_I | h⁴ (wavefront) | — |
| Coma | S_II | h³ | η |
| Astigmatism | S_III | h² | η² |
| Field curvature | S_IV | h² | η² |
| Distortion | S_V | — | η³ |

This table explains several practical observations. Spherical aberration and coma, which scale strongly with aperture, improve dramatically when the lens is stopped down — visible in the viewer as the on-axis ray bundle tightening when you increase the f-number. Astigmatism and field curvature depend equally on aperture and field, so stopping down helps but does not eliminate them. Distortion is independent of aperture altogether and persists identically at every f-stop.

## 7. Correction Strategies in Real Designs

Correcting aberrations is fundamentally a problem of balancing positive and negative contributions across many surfaces. Several classical strategies appear repeatedly in the lenses on this site:

**Symmetry about the stop.** A lens whose front and rear groups are mirror images of each other (with the stop at the center) automatically cancels all odd-order aberrations — coma, distortion, and TCA — for a 1:1 conjugate. Even approximate symmetry (as in a double-Gauss design) provides significant suppression of these three aberrations at other conjugates.

**Doublet balancing.** Cemented doublets pair a positive crown element with a negative flint element to cancel LCA (via the achromatic condition) while shaping the Seidel contributions of the two surfaces to reduce spherical aberration and coma simultaneously. The viewer's element-detail panel shows the FL, nd, and νd of each element, making it straightforward to identify doublet partners and their corrective roles.

**Aspherical correction.** An aspherical surface bends rays by an amount that varies with zone in a way no sphere can match. Its primary effect is on spherical aberration (S_I), but because aspherical departure also changes the ray angles at that surface, it indirectly affects coma and, to a lesser degree, astigmatism. Aspheres are most effective when placed at surfaces where the marginal-ray height is large, which is why they commonly appear on the front or rear elements of fast designs.

**Floating elements.** When a lens focuses closer, the object conjugate changes and the aberration balance shifts — particularly spherical aberration and field curvature. Floating-element designs move internal groups at different rates during focusing to maintain correction across the conjugate range. In the viewer, you can see this by comparing the ray bundle in TRACKS FOCUS mode at infinity versus at close range: a well-implemented floating design keeps the bundle tight at both extremes.

**Field-flattening elements.** A strongly negative element placed near the image plane contributes a large negative term to the Petzval sum without significantly affecting the other Seidel coefficients. This is why many retrofocus wide-angle designs and some telephoto designs include a concave rear element: it flattens the field at the cost of requiring additional correction for the spherical aberration and coma it introduces.

## 8. Interpreting Aberrations in the Viewer

The paraxial ray-trace model used by this site captures the first-order aberration behavior — spherical aberration, chromatic aberration, and the gross structure of coma and vignetting — faithfully enough to distinguish well-corrected designs from poorly corrected ones. A few practical observations for reading the diagrams:

When on-axis marginal rays converge noticeably ahead of or behind the image plane, the lens has residual spherical aberration. The sign tells you the type: if marginal rays focus short of the image plane (toward the lens), the aberration is *under-corrected*; if they focus beyond it, it is *over-corrected*.

When the off-axis ray bundle is asymmetric — spreading more on one side of the chief ray than the other — the lens has residual coma. A tight, symmetric off-axis bundle indicates good coma correction.

The LCA inset and the spread between R, G, and B ray convergence points quantify the chromatic correction directly. A lens with well-matched ED doublets will show the three channels converging nearly at the same point; one relying on conventional glasses will show a measurable spread, typically with the blue channel focusing shortest.

Sweeping the aperture slider from wide open to stopped down compresses the on-axis ray fan and visually confirms the aperture-scaling relationships in the table above. And comparing the ray bundle at infinity versus at close focus in TRACKS FOCUS mode reveals how well the design's floating elements (if any) maintain the aberration balance across the conjugate range.
