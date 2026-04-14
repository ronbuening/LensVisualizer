---
slug: focusing-rear-of-stop
title: Rear-of-Stop Focusing
summary: A compact group positioned behind the aperture stop moves during focusing — the dominant IF architecture in modern stabilized telephoto primes and video-oriented designs.
tag: guide
series: focusing-architectures
seriesOrder: 4
---

# Rear-of-Stop Focusing

## What It Is

In rear-of-stop focusing, a lens group positioned behind (on the image side of) the aperture stop moves during focusing while the stop and all groups ahead of it remain fixed. The barrel does not extend. This is the most common internal focusing architecture in modern telephoto primes, and it is distinct from "rear-group focusing" (see the Rear-Group Retrofocus Focusing primer) in that the focusing group is typically a compact subgroup within the rear half of the lens, not the entire rear portion.

## How It Works

The optical system is typically organized with a positive front unit ahead of the aperture stop, a moving focusing unit positioned behind the stop, and one or more fixed rear units. During focusing from infinity to close range, the focusing unit moves toward the image side.

The architecture exploits a fundamental geometric fact: **the beam diameter narrows after passing through the aperture stop**, because the stop defines the axial ray cone. In telephoto-type lenses, this narrowing is particularly pronounced. The focusing group therefore operates with smaller marginal ray heights $h$ than it would if positioned before the stop, which directly reduces its Seidel aberration contributions — all five primary coefficients scale with powers of $h$ and the marginal ray refraction invariant $A = n(hc + u)$ (Welford, 1986, Ch. 5).

### The Small-$\bar{h}$ Advantage

Behind the stop, the chief ray height $\bar{h}$ starts at zero (at the stop) and grows with distance from the stop. A focusing group positioned close behind the stop operates with a small eccentricity parameter $\bar{h}/h$, meaning its aberration contributions are dominated by spherical aberration $S_I$. The off-axis aberrations scale with increasing powers of the eccentricity parameter — coma $\propto (\bar{h}/h)$, astigmatism $\propto (\bar{h}/h)^2$, distortion $\propto (\bar{h}/h)^3$ — and all three are suppressed near the stop. With them, the conjugate-shift-induced variation in those aberrations is also suppressed.

**Keeping the focusing group close to the stop suppresses conjugate-shift-induced field aberrations.** The tradeoff is that on-axis aberrations (spherical aberration and axial chromatic aberration) can still vary with focus.

### Case Example: Canon RF 135mm f/1.8 L IS USM

**Patent:** US 2023/0213745 A1, Example 4
**Production lens:** 17 elements in 12 groups; three UD elements; Air Sphere Coating; Nano USM AF motor

The [Canon RF 135mm f/1.8 L](/lens/canon-rf-135f18) places a negative-power focusing unit behind the aperture stop. A positive rear unit behind the focusing group contains the image-stabilization subunit. During focusing, the focusing unit moves toward the image side. (Note: the patent-to-production correspondence for this lens is approximate; the focusing group's negative power and post-stop placement are stated in the patent text but have not been independently confirmed against production teardown data.)

## Aberration Behavior

**Spherical aberration ($S_I$):** Reduced in absolute magnitude by the small ray heights behind the stop, but still conjugate-dependent through the Wynne term $\Delta S_I \approx 4\delta S_{II}$. This is the primary on-axis tradeoff.

**Coma ($S_{II}$):** Minimized by the small eccentricity parameter near the stop. A focusing group positioned close behind the stop generates and varies much less coma than one placed farther from the stop.

**Astigmatism ($S_{III}$) and distortion ($S_V$):** Strongly suppressed by the small $\bar{h}/h$ — astigmatism scales as $(\bar{h}/h)^2$ and distortion as $(\bar{h}/h)^3$, so both are geometrically small near the stop.

**Chromatic aberrations:** Lateral chromatic aberration $C_{II} = \sum h_j \bar{h}_j \phi_j / V_j$ vanishes at the stop where $\bar{h} = 0$; rear-of-stop focusing groups operating near the stop inherently minimize lateral color variation. Longitudinal chromatic aberration depends on marginal ray heights and can still vary with conjugate.

**Focus breathing:** Often significant. When the focusing group translates by a displacement $d$, the system focal length changes per $\Delta f_{sys} \approx f_{sys}^2 \cdot d / (f_1 f_2)$; because the focusing group directly modulates the rear power contribution, the angle of view shifts with focus. A negative-power focusing group and a positive-power focusing group produce breathing of opposite sign. Goodsell, Blahnik, and Rolland (2022) derived conditions for breathing elimination, but satisfying them may conflict with aberration correction constraints.

## Co-Location of AF and IS Groups

Rear-of-stop focusing enables **co-location of the autofocus and image-stabilization groups** behind the stop, where both operate in the reduced-diameter beam. Both groups benefit from the same geometric advantage: small ray heights mean lighter elements, lower inertial loads, and faster actuation — whether for focus tracking or vibration compensation. This is a principal reason why rear-of-stop focusing dominates in modern stabilized telephoto primes.

Short-flange mirrorless mounts provide additional optical freedom for rear-of-stop designs: their large inner diameters and short flange distances allow large rear elements to be positioned close to the sensor, serving as effective field-flattening and aberration-compensating elements — a role difficult to fill in longer-flange SLR mounts where the rear element must clear the mirror box.

## Advantages

- **Minimal focusing group mass** — the group operates in the reduced-diameter beam behind the stop, enabling the lightest and fastest-focusing IF mechanisms.
- **Low off-axis aberration variation** — the small eccentricity parameter geometrically suppresses coma, astigmatism, and distortion changes during focusing.
- **AF and IS co-location** — both groups can be placed behind the stop where inertial loads are lowest.
- **Constant barrel length** and non-rotating front element.

## Tradeoffs

- **Focus breathing** — often the most significant among IF architectures for telephoto designs. Modern camera systems can partially compensate digitally.
- **On-axis aberration variation** — spherical aberration and axial chromatic aberration can still change with focus, as the Wynne conjugate-shift terms for $S_I$ remain active.
- **Exit pupil shift** — the focusing group's motion alters the exit pupil position, producing focus-dependent illumination and color shading that interacts with sensor microlens arrays. Mirrorless bodies can apply lens-profile-based correction.

## Best Suited For

Rear-of-stop focusing is the natural architecture for **telephoto lenses designed for speed, IS integration, and video use** — applications where AF speed, compact moving mass, and low field-aberration variation outweigh the breathing and on-axis SA tradeoffs. It dominates modern stabilized telephoto primes and is increasingly common in mirrorless-native portrait telephoto designs.

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Canon Inc. US 2023/0213745 A1, "Optical system and image pickup apparatus" (2023).
- Goodsell, J., Blahnik, V., and Rolland, J.P. "Method for minimizing lens breathing with one moving group." *Optics Express*, 30(11), 19494–19511 (2022).
- Welford, W.T. *Aberrations of Optical Systems*. Taylor & Francis, 1986.
- Sasián, J.M. *Introduction to Aberrations in Optical Imaging Systems*. Cambridge University Press, 2013.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
