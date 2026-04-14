---
slug: focusing-unit-floating
title: Unit Focusing with Floating Elements
summary: A hybrid architecture that retains the extending-barrel form of unit focusing but introduces one or more variable internal air spacings that change during focusing.
tag: guide
series: focusing-architectures
seriesOrder: 2
---

# Unit Focusing with Floating Elements

## What It Is

A floating-element extending design is a hybrid architecture that retains the extending-barrel form of unit focusing but introduces one or more variable internal air spacings that change during focusing. The barrel extends as in a conventional helicoid design, but internal element groups move at different rates, providing additional degrees of freedom for close-range aberration correction that pure unit focusing cannot offer.

This architecture occupies a middle ground between unit focusing (where no internal spacings change) and true internal focusing (where the barrel does not extend).

## How It Works

In a floating-element design, the lens barrel extends to focus at closer distances — just as in unit focusing — but selected element groups within the barrel are coupled to cam mechanisms that change their relative spacings as the barrel extends. The differential motion of these groups adjusts the aberration balance at each focus position without requiring the barrel to remain at a fixed length.

The key principle is the same insight that underlies the dual-side IF architecture (and Nikon's Close-Range Correction system): by identifying air spacings whose changes selectively affect specific aberrations, the designer can compensate for conjugate-shift-induced degradation. The floating-element approach applies this insight within an extending-barrel form — the barrel still extends and most of the lens mass still translates, distinguishing it mechanically from true internal focusing.

### Case Example: Voigtländer APO-Lanthar 50mm f/2.0 Aspherical

The [Voigtländer APO-Lanthar 50mm f/2.0 Aspherical](/lens/apo-lanthar-50f2) (JP 2021-43376 A, Example 5; Cosina/Sugano) is a particularly sophisticated example. Its floating focus mechanism employs three independently moving groups — a front group, an intermediate group, and a rear group including a field-flattening element — with **three variable air gaps** that adjust to maintain quasi-symmetric aberration balance across the conjugate range. The barrel extends slightly during focusing, but the essential optical action is the differential movement of internal groups.

This three-parameter floating correction enables the APO-Lanthar's apochromatic performance to be maintained from infinity through close focus — a result that a rigid unit-focusing translation could not achieve. The design is conceptually closer to a dual-side IF architecture than to a simple extending helicoid, though its barrel extension distinguishes it mechanically from true internal focusing.

## Aberration Behavior

The aberration logic mirrors unit focusing for the gross conjugate-shift terms (the Wynne equations still apply to the system as a whole), but the floating elements provide **compensating adjustments** that offset the worst degradation modes.

From the Wynne framework, the dominant close-focus degradation in any system is:

$$\Delta S_I \approx 4\delta S_{II}, \qquad \Delta S_{II} \approx \delta(3S_{III} + S_{IV})$$

In a pure unit-focus design, these terms are fixed by the design-conjugate prescription and cannot be independently managed during focusing. A floating-element design adds one or more variable spacings whose changes generate counteracting aberration contributions — typically targeting the same aberrations (spherical aberration, astigmatism, field curvature) that the Wynne equations predict will degrade most severely.

The number of floating groups determines the number of independent correction parameters: one floating group provides one degree of freedom, two floating groups provide two (enabling simultaneous correction of two aberrations), and three — as in the APO-Lanthar — provide three, enabling the apochromatic performance to be maintained across the full conjugate range.

## Advantages

- **Close-range correction without fixed barrel length.** Provides the close-focus aberration management of internal focusing while retaining the extending-barrel form — useful when the lens design is not well suited to a fixed-length IF architecture.
- **Preserves much of unit-focusing's optical baseline.** The bulk of the lens still translates as a unit, so the system is closer to the unit-focusing aberration baseline than a true IF design where only a small subgroup moves.
- **Scalable complexity.** The number of floating groups can be matched to the severity of the conjugate-shift problem — a single floating element for moderate correction needs, or three for apochromatic performance across the full range.

## Tradeoffs

- **Extending barrel.** The barrel still extends, carrying the same weather-sealing, dust-ingestion, and center-of-gravity penalties as unit focusing.
- **Mechanical complexity.** Cam-driven differential motion requires precision machining and adds manufacturing cost relative to simple unit focusing.
- **Full or near-full mass AF inertia.** Most of the lens mass still translates during focusing, limiting autofocus speed compared to true IF designs where only a lightweight subgroup moves.
- **Rotating front element.** Unless a separate front-element decoupling mechanism is used, the front element typically rotates during focusing.

## Best Suited For

Floating-element designs are most valuable when the optical prescription demands close-range correction but the lens form or mechanical design philosophy favors an extending barrel. This includes:

- **Apochromatic designs** where maintaining chromatic correction across the conjugate range is a primary design goal (e.g., the APO-Lanthar 50mm f/2.0).
- **Manual-focus primes** where autofocus speed is not a constraint and the extending barrel provides a natural mechanical focus feel.
- **Designs where the quasi-symmetric form** provides strong inherent correction at infinity but needs targeted compensation at close range.

The architecture becomes less attractive as autofocus speed, weather sealing, and constant barrel length become design priorities — at which point the transition to a true internal focusing architecture is warranted.

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Cosina Co., Ltd. JP 2021-43376 A, "Imaging lens" (2021). [Voigtländer APO-Lanthar 50mm f/2.0 Aspherical]
- Kingslake, R. and Johnson, R.B. *Lens Design Fundamentals*, 2nd ed. Academic Press/SPIE Press, 2010.
- Smith, W.J. *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2007.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
