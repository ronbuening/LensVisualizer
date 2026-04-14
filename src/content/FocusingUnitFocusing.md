---
slug: focusing-unit
title: Unit Focusing
summary: The entire optical assembly translates as a rigid body — no internal air spaces change and the aperture stop holds its exact position within the element stack.
tag: guide
series: focusing-architectures
seriesOrder: 1
---

# Unit Focusing

## What It Is

In unit focusing (whole-lens focusing), the entire optical assembly translates as a rigid body along the optical axis. No element moves relative to any other — all air spacings are preserved, and the aperture stop maintains its exact position within the element stack. The lens barrel extends to accommodate the increased back focus distance required at closer conjugates.

## How It Works

To image an object at distance $s$, a lens of focal length $f$ requires an additional focusing extension:

$$\Delta = \frac{f^2}{|s| - f}$$

Because the entire lens moves together, no internal air spaces change. The eccentricity parameter $\bar{h}/h$ — the ratio of the chief ray height to the marginal ray height at each surface — is exactly preserved at every element across the focus range. This means the partition of aberration contributions among spherical aberration, coma, astigmatism, and distortion at each surface remains undisturbed. The only image quality changes are those arising from the conjugate shift itself (Wynne, 1952).

## Aberration Behavior

The dominant close-focus degradation is governed by the leading Wynne conjugate-shift terms:

$$\Delta S_I \approx 4\delta S_{II}$$

$$\Delta S_{II} \approx \delta(3S_{III} + S_{IV})$$

Two important consequences follow from these equations:

**Coma drives spherical aberration change.** A lens with small residual coma at its design conjugate will resist spherical aberration degradation at close focus. This is why the quasi-symmetric Double Gauss form — whose structural symmetry inherently suppresses coma — has historically been the most successful architecture for unit-focused fast normal primes (Kingslake & Johnson, 2010, Ch. 12; Smith, 2007, §17.3).

**Astigmatism and Petzval sum drive coma change.** The relationship $3S_{III} + S_{IV}$ controls how rapidly coma degrades with conjugate shift. Strongly asymmetric designs (retrofocus wide-angles, telephoto constructions) carry large residual coma and astigmatism by virtue of their asymmetry, and suffer correspondingly severe degradation under unit focusing at close range. The predecessor patent for the Nikon 28mm f/1.4D (US 5,315,441, col. 2) states this explicitly: unit focusing an inverse telephoto wide-angle produces "excessively corrected" astigmatism and "insufficiently corrected" spherical aberration at short range.

## Advantages

- **Optical simplicity.** The designer optimizes one unified system at the design conjugate. No group boundaries need to be defined, and no differential motion mechanisms are required.
- **No stop-shift perturbation.** Because no element moves relative to the stop, the stop-shift-dependent aberrations (coma, astigmatism, distortion) are not mechanically disturbed during focusing — only the pure Wynne conjugate-shift terms apply.
- **Consistent rendering.** The preserved internal geometry means bokeh character and aberration balance tend to change smoothly and predictably across the focus range.

## Tradeoffs

- **No independent close-focus correction.** The designer has no adjustable degree of freedom that acts only during focusing. If close-focus performance is unacceptable, the entire system must be redesigned.
- **Extending barrel.** The barrel lengthens at close focus, changing the center of gravity, pumping air through unsealed joints (drawing in dust and moisture), and precluding effective weather sealing.
- **Full-mass AF inertia.** The entire optical assembly must accelerate and decelerate during autofocus, resulting in slow AF speeds — particularly problematic for heavy telephoto and wide-aperture designs.
- **Rotating front element.** In many unit-focus implementations, the front element rotates during focusing, disrupting polarizer orientation and petal hood alignment.

## Best Suited For

Unit focusing works best in quasi-symmetric designs (Double Gauss and its derivatives) with moderate conjugate demands, where the inherent symmetry-based aberration cancellations keep the Wynne conjugate-shift residuals small. Classic examples include manual-focus normal primes (50mm f/1.4, 85mm f/1.4 designs of the 1970s–1990s) where autofocus speed was not a design requirement.

For strongly asymmetric lens forms — retrofocus wide-angles, long telephotos — the Wynne conjugate-shift terms become large enough that unit focusing is optically unacceptable at close range, and some form of internal correction becomes a necessity rather than a convenience.

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Kingslake, R. and Johnson, R.B. *Lens Design Fundamentals*, 2nd ed. Academic Press/SPIE Press, 2010.
- Smith, W.J. *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2007.
- Welford, W.T. *Aberrations of Optical Systems*. Taylor & Francis, 1986.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
