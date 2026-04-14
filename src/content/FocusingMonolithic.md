---
slug: focusing-monolithic
title: Monolithic Group Focusing
summary: A single central group that includes elements on both sides of the aperture stop — plus the stop itself — moves as a rigid unit, preserving the internal stop–element geometry that defines the lens's aberration balance.
tag: guide
series: focusing-architectures
seriesOrder: 6
---

# Monolithic Group Focusing

## What It Is

In monolithic group focusing, a single central group that includes elements on both sides of the aperture stop — plus the stop itself — moves as a rigid unit during focusing. The front and rear groups remain fixed. Because the stop translates with the focusing group, the **relative positions of all elements with respect to the stop are exactly preserved** during focusing, maintaining the internal stop–element geometry that defines the lens's aberration correction state.

This is the internal focusing architecture that most closely approximates the unit-focusing optical baseline.

## How It Works

The lens is divided into three sections: a fixed front group (G1), a monolithic central focusing group (G2) containing the aperture stop, and a fixed rear group (G3). During focusing from infinity to close range, G2 — including the stop — translates as a unit (toward the object side in the case-study example below).

The critical distinction from other IF architectures is that the stop moves with the focusing group rather than remaining fixed. In all other IF designs, moving elements relative to a fixed stop changes the eccentricity parameter $\bar{h}/h$ at each surface within the moving group, directly altering the partition of aberration contributions among spherical aberration, coma, astigmatism, and distortion (Welford, 1986, §5.3). By moving the stop with the elements, the monolithic architecture preserves $\bar{h}/h$ at each surface within the group to first order — it changes only through the second-order effect of the altered chief ray angle at the stop, not through the first-order stop-shift effect.

### The Symmetry Preservation Principle

The monolithic architecture is particularly powerful for **modified Double Gauss** designs. The Double Gauss achieves exceptional performance through the symmetry principle (Kingslake & Johnson, 2010, Ch. 12; Smith, 2007, §17.3): for a system symmetric about a central stop, coma ($S_{II}$), distortion ($S_V$), and lateral chromatic aberration ($C_{II}$) automatically vanish — they are odd functions of the chief ray angle and cancel by symmetry. Even at infinite conjugate (far from the ideal unit magnification), these odd aberrations remain small in a well-designed quasi-symmetric system.

Moving the stop with the focusing group preserves this quasi-symmetry. The aberration changes during focusing arise predominantly from the pure Wynne conjugate-shift terms rather than from the more severe combined stop-shift-plus-conjugate-shift interactions that occur when elements move relative to a fixed stop.

### Case Example: Nikon AF-S Nikkor 85mm f/1.4G

- **Patent:** US 8,767,319, Example 1 (jointly assigned to Nikon Corporation and Konica Minolta Advanced Layers, Inc.)
- **Production lens:** 10 elements in 9 groups; no aspherical elements; no ED elements
- **MFD:** 0.85 m

The [Nikon 85mm f/1.4G](/lens/nikkor-85f14g) moves a central group containing elements on both sides of the stop as a monolithic unit. The patent's prior-art discussion explains the rationale explicitly: placing the aperture stop within the focusing group "reduces variation in off-axial aberrations during focusing."

The absence of both ED glass and aspherical elements is deliberate. In a modified Double Gauss, the inherent quasi-symmetry already provides substantial chromatic correction: lateral color cancels by the odd-aberration symmetry argument, and axial color is corrected through careful glass pairing in the cemented groups flanking the stop. The monolithic focusing strategy preserves this correction across the focus range because the cemented doublets within the moving group maintain their internal spacings and stop-relative positions.

## Aberration Behavior

**Spherical aberration ($S_I$):** Minimized through the Double Gauss's inherent symmetry, which keeps the system coma $S_{II}$ small — and the leading conjugate-shift term $\Delta S_I \approx 4\delta S_{II}$ is therefore small. This is the most direct link between the symmetry principle and focusing stability.

**Coma ($S_{II}$):** Approximately preserved because the eccentricity parameter $\bar{h}/h$ at each surface is maintained by moving the stop with the group. In other IF architectures, moving elements relative to a fixed stop changes $\bar{h}/h$ and directly perturbs coma.

**Astigmatism ($S_{III}$) and distortion ($S_V$):** Benefit from the preserved stop–element geometry. Distortion — cubic in the stop-shift parameter — shows the least variation of any IF architecture because the stop-shift parameter is approximately zero within the moving group.

**Chromatic aberrations:** Stable across the focus range because elements within the moving group maintain their internal spacings and stop-relative positions. In quasi-symmetric designs, the symmetry-based lateral color cancellation is additionally preserved. The architecture does not preclude the use of ED glass or aspherics, but for well-designed quasi-symmetric forms, the symmetry principle may provide sufficient inherent correction without them.

**Pupil aberrations:** The monolithic architecture naturally produces small pupil spherical aberration $\bar{S}_I$ because the stop moves with the focusing group, preserving the pupil imaging geometry (Kidger, 1996). This is a theoretical advantage not fully captured by the Wynne conjugate-shift equations alone — the extrinsic aberration framework (Sasián, 2013) shows that maintaining the pupil relay match during focusing reduces field-dependent illumination and color shading effects at the sensor.

**Focus breathing:** Moderate. The entire central section moves, producing focal length change, but the angular field relationships within the moving group are preserved.

## Advantages

- **Best rendering consistency** of any IF architecture — the preserved stop–element geometry maintains the designed aberration balance (including bokeh character) from infinity through close focus.
- **Minimal distortion variation** — the stop-shift parameter within the moving group is approximately zero.
- **Stable exit pupil position** — the stop moves with the group, producing the least focus-dependent illumination variation among IF architectures.
- **Classical glass sufficiency in quasi-symmetric forms** — when the symmetry principle provides strong inherent correction, ED glass and aspherics may be unnecessary, simplifying manufacturing and preserving rendering purity. This is a property of the design form rather than the focusing architecture per se, but the monolithic mechanism uniquely preserves it across the focus range.

## Tradeoffs

- **Heavier focusing group.** The monolithic group includes elements on both sides of the stop — the central portion of the lens spanning the aperture — presenting greater inertial mass to the AF motor than architectures where only a compact subgroup moves.
- **Slower autofocus.** The increased mass directly limits AF acceleration and deceleration speeds.
- **Limited to quasi-symmetric forms.** The architecture's advantage derives from preserving the symmetry principle; for strongly asymmetric lens forms (retrofocus, telephoto), there is no symmetry to preserve, and the heavier moving group offers no compensating optical benefit.

## Best Suited For

Monolithic group focusing is narrowly optimal for **modified Double Gauss and other quasi-symmetric designs** where the symmetry principle provides powerful inherent corrections that would be destroyed by separating the stop from the focusing elements. It is the architecture of choice for fast normal-to-short-telephoto portrait primes (85mm f/1.4, 58mm f/1.4) where rendering consistency across the portrait working distance is valued above autofocus speed.

The architecture is less appropriate for designs where AF speed is paramount (sports telephotos), where the conjugate range is extreme (macro lenses), or where the lens form is inherently asymmetric (wide-angle retrofocus).

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Nikon Corporation and Konica Minolta Advanced Layers, Inc. US 8,767,319 B2, "Inner-focus large-aperture medium-telephoto lens system" (2014).
- Kingslake, R. and Johnson, R.B. *Lens Design Fundamentals*, 2nd ed. Academic Press/SPIE Press, 2010.
- Smith, W.J. *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2007.
- Kidger, M.J. "Design of lenses for variable magnification." *Proc. SPIE* 2774, 722–727 (1996).
- Sasián, J.M. "Extrinsic aberrations in optical imaging systems." *Advanced Optical Technologies*, 2(1), 75–80 (2013).
- Welford, W.T. *Aberrations of Optical Systems*. Taylor & Francis, 1986.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
