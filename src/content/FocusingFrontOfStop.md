---
slug: focusing-front-of-stop
title: Front-of-Stop Focusing
summary: A lens group positioned ahead of the aperture stop moves during focusing while the stop and all groups behind it remain fixed — an IF architecture favored by fast portrait and short telephoto primes.
tag: guide
series: focusing-architectures
seriesOrder: 3
---

# Front-of-Stop Focusing

## What It Is

In front-of-stop focusing, a lens group positioned ahead of (on the object side of) the aperture stop moves during focusing while the stop and all groups behind it remain fixed. The barrel does not extend — this is a true internal focusing architecture. Only the front focusing group translates, presenting reduced inertial mass to the autofocus motor compared to whole-lens focusing.

## How It Works

The optical system places a moving focusing group ahead of the aperture stop, with one or more fixed groups on either side. The focusing group may have positive or negative optical power; the choice of power determines the specific aberration behavior during focusing. During focusing from infinity to close range, the focusing group translates along the optical axis while the stop and all elements behind it remain stationary.

The key geometric fact is that at surfaces before the stop, the chief ray height $\bar{h}$ is nonzero — the chief ray has not yet crossed the axis at the stop. This gives the focusing group a **moderate eccentricity parameter** $\bar{h}/h$, meaning its aberration contributions span both on-axis and off-axis aberrations, though with the on-axis terms (spherical aberration) typically dominating.

### Self-Compensation with a Negative Focusing Group

A particularly effective variant places a **negative-power** focusing group ahead of the stop. When such a group changes conjugate, the dominant induced aberration is spherical aberration — through the leading Wynne conjugate-shift term $\Delta S_I \approx 4\delta S_{II}$. The negative power provides a natural compensating mechanism: negative elements contribute negative spherical aberration that partially counterbalances the overcorrection tendency at close focus. This self-compensation is the principal aberration advantage of the negative-power front-of-stop architecture.

### Case Example: Nikon AF-S Nikkor 105mm f/1.4E ED

**Patent:** WO 2019/116563, Example 3
**Production lens:** 14 elements in 9 groups; three ED elements; Nano Crystal Coat; no aspherical surfaces

The [Nikon 105mm f/1.4E](/lens/nikkor-105-f14e-ed) places its negative-power focusing group ahead of the stop. The ED glass elements are positioned in the fixed front group G1, where their chromatic correction contribution remains constant regardless of focus position. The focusing group itself — a lightweight cemented doublet — has minimal chromatic contribution and presents low inertial mass to the Silent Wave Motor.

Notably, this design uses no aspherical elements despite an entrance pupil diameter exceeding 75 mm — a choice that trades element count (14 elements) for rendering purity by avoiding the surface-form artifacts that can appear in defocused highlights of aspherically surfaced lenses at large apertures. The large number of spherical surfaces provides sufficient degrees of freedom for simultaneous management of third-order through fifth-order aberration terms across the field.

## Aberration Behavior

**Spherical aberration ($S_I$):** When the focusing group has negative power, mitigated by the group's inherent self-compensation — it generates SA of opposite sign to the conjugate-shift-induced change. Positive-power front-of-stop groups lack this self-compensation and must rely on other corrective strategies.

**Coma ($S_{II}$):** The moderate eccentricity parameter $\bar{h}/h$ at the front-of-stop position means the focusing group contributes significant coma, and this coma varies with conjugate change. Coma variation is the primary field-aberration tradeoff of this architecture.

**Chromatic aberrations:** When dispersive-correction elements (ED/UD glass) are placed in the fixed groups rather than the moving group, chromatic correction remains stable across the focus range. This is a deliberate design strategy enabled by the front-of-stop placement.

**Focus breathing:** Moderate. When the focusing group translates by a displacement $d$, the system focal length changes per $\Delta f_{sys} \approx f_{sys}^2 \cdot d / (f_1 f_2)$ (Smith, 2007, §3.3). Stronger focusing groups require less movement but produce more breathing per unit of travel — the fundamental IF breathing–aberration tension (Goodsell, Blahnik, and Rolland, 2022).

## Advantages

- **Spherical aberration self-compensation** (with a negative-power focusing group), maintaining on-axis rendering quality across the focus range.
- **Stable chromatic correction** when ED/UD glass is placed in the fixed groups.
- **Low focusing group mass** (a lightweight cemented doublet or triplet), enabling fast autofocus.
- **Constant barrel length** and non-rotating front element for weather sealing and filter/hood stability.

## Tradeoffs

- **Coma variation** across the focus range — the primary field-aberration penalty of having the focusing group at a moderate distance from the stop.
- **Moderate focus breathing** — inherent to any IF architecture, with magnitude depending on the focusing group's optical power.
- **Limited close-range correction** compared to dual-side architectures — only one moving group provides one degree of freedom for aberration correction.

## Best Suited For

Front-of-stop focusing is a strong fit for **large-aperture portrait and short telephoto lenses** where on-axis rendering quality — simultaneously sharp and with smooth bokeh — at wide apertures is the primary design target. The self-compensation mechanism keeps the spherical aberration balance stable across the focus range, which is critical for consistent bokeh character in the portrait working distance (1.5–5 m).

## Key References

- Wynne, C.G. "Primary Aberrations and Conjugate Change." *Proc. Phys. Soc. B*, 65, 429–437 (1952).
- Nikon Corporation. WO 2019/116563 A1, "Optical system, optical apparatus, and method of manufacturing optical system" (2019).
- Goodsell, J., Blahnik, V., and Rolland, J.P. "Method for minimizing lens breathing with one moving group." *Optics Express*, 30(11), 19494–19511 (2022).
- Smith, W.J. *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2007.
- Welford, W.T. *Aberrations of Optical Systems*. Taylor & Francis, 1986.

---

*Part of the [Focusing Architectures](/articles/focusing-architectures) series. For the full mathematical framework and cross-architecture comparative analysis, see [Internal Focusing Architectures: Aberration Theory and Design Tradeoffs](/articles/internal-focusing-monograph).*
