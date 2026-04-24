---
slug: focusing-dual-side
title: Dual-Side Focusing
summary: Two groups, one on each side of the aperture stop, move independently during focusing — the modern realization of Nikon's Close-Range Correction system and the architecture of choice for macro lenses.
tag: guide
series: focusing-architectures
seriesOrder: 5
---

# Dual-Side Focusing

## What It Is

In dual-side focusing, two lens groups — one on each side of the aperture stop — move independently during focusing, typically at different rates or in different directions. This provides **two independent degrees of freedom** for aberration correction at each focus position, making it the only single-lens architecture capable of maintaining high image quality across extreme conjugate ranges (infinity to 1:1 macro and beyond). The barrel does not extend.

This architecture is the modern realization of Nikon's **Close-Range Correction (CRC) system**, conceived in 1967 by Zenji Wakimoto and first implemented by Yoshiyuki Shimizu for the Nikkor-N Auto 24mm f/2.8 [^1].

## How It Works

The optical system is typically divided into four groups, with the two inner groups moving and the two outer groups fixed. In the case study below (Micro-Nikkor 105mm f/2.8G VR), the arrangement is:

- **G1** (positive) — fixed
- **G2** (negative) — moves for focusing (ahead of the stop)
- **Aperture stop**
- **G3** (positive) — moves for focusing (behind the stop)
- **G4** (negative) — fixed

The specific power distribution varies by design, but the essential principle is groups on both sides of the stop moving independently. During focusing from infinity to close range, the two focusing groups typically move in opposite directions — in this example, G2 toward the image side and G3 toward the object side — creating a differential-spacing close-range correction mechanism. The spacing between the moving groups changes progressively with focus position, while the outer groups remain stationary. This differential movement is mechanically implemented through a cam barrel with separate cam slots for each group, driven from a single focusing ring rotation.

### The Wakimoto Insight

The CRC concept originated from a remarkably precise aberration insight. As described in "Thousand and One Nights" Tale #14 [^1], Wakimoto identified a variable air space whose change affected the astigmatism sum without disturbing the spherical aberration sum, then used that spacing as a correcting degree of freedom during focusing. Tale #14 characterizes the insight: "The separation between the sixth and seventh elements is designed such that the variation in the separation makes almost no effect on spherical aberration and makes effect only on astigmatism."

This is a direct application of the Wynne framework [^2]: the designer identified a mechanical degree of freedom that maps selectively onto specific aberration coefficients.

### Case Example: Nikon AF-S Micro-Nikkor 105mm f/2.8G VR

- **Patent:** US 7,218,457, Example 3 [^3]
- **Production lens:** 14 elements in 12 groups; one ED element; VR II image stabilization
- **MFD:** 0.314 m (1:1 reproduction)

The [Micro-Nikkor 105mm f/2.8G VR](/lens/nikon-afs-105f28-vr-micro) confronts the most demanding conjugate range of any common photographic lens: performance from infinity to 1:1 reproduction — a magnification change from 0 to −1. The enormous conjugate-shift parameter $\delta$ at 1:1 makes single-group IF fundamentally inadequate, as the Wynne impossibility theorem guarantees severe degradation of multiple aberrations simultaneously [^2].

## Aberration Behavior

With two independently moving groups, the designer can simultaneously satisfy two aberration constraints at each focus position — typically spherical aberration and field curvature, or spherical aberration and coma.

Having groups on both sides of the stop provides additional leverage: the front moving group (ahead of the stop) primarily influences on-axis aberrations where $\bar{h}/h$ is moderate, while the rear moving group (behind the stop) primarily influences the field-dependent balance where $\bar{h}/h$ has the opposite sign [^4]. The air space between the two moving groups acts as a continuously variable aberration-correcting degree of freedom at each conjugate.

**Spherical aberration ($S_I$):** Actively corrected at each focus position by adjusting the two group movements to compensate the conjugate-shift-induced SA change.

**Astigmatism ($S_{III}$):** The architecture's original design motivation — the dual-side mechanism provides direct control over astigmatism change, per Wakimoto's CRC insight.

**Field curvature:** While the Petzval sum $S_{IV}$ is conjugate-invariant, the effective field curvature at the sensor includes the astigmatism contribution $S_{III}$, which does shift with conjugate. The dual-group mechanism compensates this shift.

**Axial chromatic aberration:** Increases at high magnification because the effective f-number at 1:1 is twice the marked value (e.g., effective f/5.6 for a lens marked f/2.8). Placing ED or UD glass elements in the fixed groups helps control longitudinal chromatic aberration across the full conjugate range.

**Focus breathing:** The dual-side architecture can partially compensate breathing because one group's focal length change can be designed to offset the other's [^5] — a degree of freedom unavailable to single-group IF designs.

## Advantages

- **Best aberration correction across extended conjugate ranges** — two independent correction parameters enable simultaneous management of multiple aberrations at each focus position.
- **Partial breathing compensation** through differential group movement.
- **Constant barrel length** and non-rotating front element.
- **Proven lineage** — the CRC concept has been refined over six decades of production lens design.

## Tradeoffs

- **Mechanical complexity.** Differential cam mechanisms with separate cam slots for each group require precision machining and add manufacturing cost.
- **Increased manufacturing tolerances.** Two independently moving groups means tighter alignment requirements to ensure the cam profiles produce the designed aberration correction at each focus position.
- **Moderate focusing group mass.** Two moving groups collectively present more mass to the AF motor than a single compact rear-of-stop group, though less than a monolithic architecture.

## Best Suited For

Dual-side focusing is the architecture of choice for **macro lenses** reaching 1:1 reproduction or beyond, and for any design where image quality at close range must match infinity performance. The mechanical complexity of the differential cam system is justified when the conjugate range demands it — the Wynne impossibility theorem guarantees that no single-group IF design can maintain correction across such extreme conjugate shifts.

The architecture is also found in specialized close-focusing designs for scientific, product, and technical photography where rendering consistency from infinity through close focus is a functional requirement rather than an aesthetic preference.

## References

[^1]: Nikon Corporation, "Nikkor — Thousand and One Nights," Tales No. 14 and No. 86. [Online]. Available: https://imaging.nikon.com/imaging/information/nikkor/story/. Accessed: Apr. 2026.

[^2]: C. G. Wynne, "Primary aberrations and conjugate change," *Proc. Phys. Soc. B*, vol. 65, pp. 429–437, 1952.

[^3]: Nikon Corporation, "Close-up lens," U.S. Patent 7,218,457 B2, 2007. — [Micro-Nikkor 105mm f/2.8G VR](/lens/nikon-afs-105f28-vr-micro)

[^4]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, U.K.: Adam Hilger, 1986.

[^5]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2007.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
