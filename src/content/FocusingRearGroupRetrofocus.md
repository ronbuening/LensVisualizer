---
slug: focusing-rear-group-retrofocus
title: Rear-Group Retrofocus Focusing
summary: In a two-group retrofocus wide-angle, the rear positive group moves while the heavy front negative group stays fixed — a pragmatic architecture dictated by the mass asymmetry of inverse-telephoto designs.
tag: guide
series: focusing-architectures
seriesOrder: 7
---

# Rear-Group Retrofocus Focusing

## What It Is

In rear-group retrofocus focusing, the rear (positive) group of a two-group retrofocus (inverse telephoto) layout moves during focusing while the front (negative) group remains fixed. The aperture stop, located within the rear group, moves with it. This is distinct from rear-of-stop focusing (see that primer), where a compact subgroup behind a fixed stop moves; here, the entire rear portion of the lens — including the stop — translates. Nikon designates this simply as "Rear Focusing" in production documentation.

This architecture is dictated by the practical constraints of fast wide-angle lens design: the heavy front negative group cannot be moved efficiently, so the lighter rear group becomes the focusing element.

## How It Works

A retrofocus (inverse telephoto) lens places a strong negative diverging group in front and a positive converging group behind. This configuration produces a back focal distance longer than the system focal length — the defining requirement for wide-angle lenses used on SLR cameras, where the rear element must clear the reflex mirror. The front negative group is physically large, heavy, and contains the elements with the steepest curvatures and highest aberration contributions.

During focusing from infinity to close range, the rear group moves toward the object side, reducing the air gap between the fixed front group and the moving rear group. This spacing change provides inherent close-range correction — a geometric consequence of the retrofocus architecture. The power distribution between the two halves of the system changes as the gap narrows, partially compensating the conjugate-shift-induced aberration degradation that would occur under unit focusing.

### Case Example: Nikon AF-S Nikkor 28mm f/1.4E ED

- **Patent:** JP 2017-227799, Example 1 (jointly assigned to Nikon Corporation and Konica Minolta Inc.)
- **Production lens:** 14 elements in 11 groups; two ED elements; three aspherical elements; Nano Crystal Coat; fluorine front-element coating
- **MFD:** 0.28 m

The [Nikon 28mm f/1.4E](/lens/nikon-afs-28f14e) uses a two-group rear-focusing strategy, with the rear positive group moving toward the object side during focusing from infinity to close range.

The predecessor 28mm f/1.4D (US 5,315,441) used a more complex focusing system: three groups moving at two distinct rates, with a differential cam mechanism coupling their motions. The newer 28mm f/1.4E trades this multi-rate complexity for modern optical technology — three aspherical elements (versus one in the predecessor) and two ED elements provide additional degrees of freedom for higher-order aberration control with a simpler single-rate rear-focus mechanism (Neil, 1996, documented this same tradeoff in wide-angle cinematographic objectives).

This represents a broader trend in modern lens design: **advances in glass and aspherical manufacturing technology can offset the loss of mechanical degrees of freedom**, allowing simpler focusing mechanisms where multi-group predecessors once required differential cam systems.

## Aberration Behavior

The aberration behavior connects directly to the specific pathologies of wide-angle retrofocus lenses at close focus. As described in the predecessor patent (US 5,315,441, col. 2): unit focusing an inverse telephoto wide-angle produces "excessively corrected" astigmatism and "insufficiently corrected" spherical aberration at short range.

This diagnosis maps precisely onto the Wynne conjugate-shift predictions (Wynne, 1952): for a retrofocus design with significant inherent distortion and astigmatism (due to the strong front-negative / rear-positive asymmetry), conjugate change generates large cross-coupled aberration shifts. By separating the system into a fixed front half and a moving rear half, the variable air gap introduces a compensating astigmatism change that partially offsets the conjugate-shift-induced overcorrection.

**Spherical aberration ($S_I$):** Managed through the degrees of freedom available in the moving rear group — aspherical surfaces (the modern approach), additional elements, or glass choice. Aspherics are particularly effective here because they can control higher-order SA residuals across the conjugate range without adding element count or mass to the already-heavy system.

**Astigmatism ($S_{III}$):** The variable air gap between fixed front and moving rear groups provides inherent compensation — the same CRC-type mechanism exploited in dual-side focusing, but achieved here through a single group movement rather than two independent ones.

**Distortion ($S_V$):** Substantial variation with focus. The large separation between the fixed front group and the moving rear group creates a large effective stop-shift change (the stop, within the rear group, moves while the front group stays fixed). Distortion, being cubic in the stop-shift parameter $Q$, is highly sensitive to this geometry.

**Focus breathing:** Variable, and often significant. The distortion variation is one component of focus breathing and is most visible in video applications. Modern mirrorless camera bodies can apply computational correction for distortion and breathing, substantially mitigating what was a significant liability in film-era SLR lenses.

## Advantages

- **Practical for fast wide-angle designs** — the heavy front negative group remains fixed, enabling autofocus through a lighter rear group driven by the AF motor.
- **Inherent close-range correction** through the variable air gap between fixed and moving halves — a geometric consequence of the retrofocus architecture.
- **Non-rotating, non-extending front element** for weather sealing and filter/hood stability.
- **Leverages modern manufacturing** — aspherical and ED elements in the moving group compensate for the reduced mechanical degrees of freedom compared to multi-group predecessors.

## Tradeoffs

- **Distortion variation** across the focus range — the most significant among IF architectures, due to the large stop-shift change in the strongly asymmetric retrofocus form.
- **Focus breathing** — directly related to the distortion variation and the power redistribution between fixed and moving halves.
- **Exit pupil shift** — the stop moves with the rear group, substantially altering the exit pupil position and chief ray angle distribution during focusing. This produces the most exit pupil variation of any IF architecture, interacting with sensor microlens arrays to create focus-dependent illumination and color shading.
- **Strong dependence on aspherical and ED technology** — the simpler mechanical scheme requires optical technology to fill the correction gap that multi-group differential focusing once provided.

## Computational Correction

Of the five IF architectures examined in the parent monograph, rear-group retrofocus focusing benefits most from modern computational correction in mirrorless camera bodies. The severe barrel-to-pincushion distortion swing across the focus range becomes a correctable profile parameter; lateral chromatic aberration and vignetting variation produced by exit pupil shift are similarly amenable to software correction. This has fundamentally changed the design tradeoff: aberrations that were optical liabilities in film-era SLR lenses are now designable quantities that can be deferred to the processing pipeline, freeing the optical prescription to optimize for the computationally intractable aberrations — spherical aberration, coma, and field curvature.

## Best Suited For

Rear-group retrofocus focusing is the pragmatic architecture for **fast wide-angle primes in SLR and mirrorless mounts** where the heavy front negative group cannot practically be moved. It provides inherent close-range correction through the variable air gap and leverages modern optical technology to maintain performance with a simpler mechanical scheme than multi-group predecessors required.

The architecture accepts distortion and breathing variation as tradeoffs inherent to the strongly asymmetric retrofocus form — tradeoffs increasingly mitigated by computational correction in modern mirrorless camera systems.

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Nikon Corporation and Konica Minolta Inc. JP 2017-227799 A, "Optical system, optical apparatus equipped therewith, and method for manufacturing optical system" (2017).
- Nikon Corporation. US 5,315,441, "Inverse telephoto large aperture wide angle lens" (1994). [28mm f/1.4D predecessor]
- Neil, I.A. "High-performance wide-angle objective lens systems with internal close-focusing optics and multiple aspheric surfaces." *Proc. SPIE* 2774 (1996).
- Welford, W.T. *Aberrations of Optical Systems*. Taylor & Francis, 1986.
- Sasián, J.M. *Introduction to Aberrations in Optical Imaging Systems*. Cambridge University Press, 2013.
- Goodsell, J., Blahnik, V., and Rolland, J.P. "Method for minimizing lens breathing with one moving group." *Optics Express*, 30(11), 19494–19511 (2022).

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
