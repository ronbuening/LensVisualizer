---
slug: corner-illumination
title: Why Corners Go Dark — The Three Causes of Light Falloff in Photographic Lenses
summary: The three distinct causes of corner light falloff — natural radiometric falloff (the cos⁴ law), optical vignetting, and mechanical vignetting — and why stopping down fixes only one of them.
tag: guide
series: pupil-geometry
seriesOrder: 4
toc: true
---

# Why Corners Go Dark — The Three Causes of Light Falloff in Photographic Lenses

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## The Problem: Corners Are Darker Than the Center

Pick up almost any wide-angle or fast lens, shoot a uniformly lit surface, and examine the resulting image. The corners will be darker than the center. This is one of the most visible optical effects in photography, and most photographers have noticed it. The temptation is to label the entire effect "vignetting" and move on.

But that label obscures a physically important distinction. Corner darkening arises from three fundamentally different mechanisms *within the lens and its immediate mechanical system* — and they respond differently to the photographer's controls [^1] [^7]. (A fourth source — the angular sensitivity of the digital sensor itself — is treated separately in [*The Exit Pupil and Your Digital Sensor*](/articles/exit-pupil-sensor).)

Understanding the three-cause breakdown matters, because "stop down to fix corner shading" is a half-truth. It addresses one of the three causes and does nothing to the other two.

## The Three Causes at a Glance

| Cause | What it is | Gets better when stopped down? | Visual signature |
|---|---|:-:|---|
| Natural radiometric falloff | Geometric light loss from oblique imaging (cos⁴ law) | No | Smooth, gradual darkening toward corners |
| Optical vignetting | Off-axis beams clipped by element rims | Yes (often dramatically) | Cat's-eye or lemon-shaped bokeh highlights |
| Mechanical vignetting | Obstruction by hoods, filters, adapters | No (remove the obstruction) | Sharp, abrupt darkening or blackening at edges |

## Cause 1: Natural Radiometric Falloff (the cos⁴ Law)

The most fundamental source of corner darkening has nothing to do with any defect in the lens. It is a consequence of the geometry of oblique imaging itself. For an idealized thin lens imaging a uniformly bright scene, the relative illumination at an off-axis image point corresponding to semi-field angle $W$ follows the classical **cos⁴ law** [^1] [^2] [^3]:

$$\frac{E(W)}{E(0)} = \cos^4 W$$

The four powers of cosine come from three geometrically distinct effects:

**One factor from pupil foreshortening.** From an off-axis object point, the entrance pupil — the apparent aperture on the scene side of the lens — is seen obliquely and appears as an ellipse with reduced area. The projected area decreases by $\cos W$: one factor [^1].

**Two factors from increased image distance.** The off-axis image point lies at distance $f / \cos W$ from the lens (the chief ray travels a longer oblique path), versus $f$ for the on-axis point. Irradiance falls as the inverse square of distance: two more factors [^1] [^3].

**One factor from oblique incidence.** The arriving light cone strikes the sensor at an angle, spreading its energy over a larger area: one final factor [^1] [^3].

**A clarification that matters.** The angle $W$ in this derivation is the **object-space semi-field angle** — the angle the chief ray makes with the axis as measured at the entrance pupil. For a thin lens, this equals the image-side chief-ray angle (CRA — the angle at which the chief ray strikes the sensor) because the entrance and exit pupils coincide. But in a real multi-element lens, the object-space field angle and the image-side CRA are generally different quantities. This distinction is the entire basis for understanding why image-space telecentricity helps digital sensors: a telecentric lens forces the image-side CRA to zero even when the object-space $W$ is large (see [*Telecentricity Explained*](/articles/telecentricity)).

### How Severe Is It?

| $W$ (degrees) | cos⁴ $W$ | Relative illumination | Falloff (stops) |
|:-:|:-:|:-:|:-:|
| 0° | 1.000 | 100% | 0.0 |
| 10° | 0.941 | 94% | 0.1 |
| 20° | 0.780 | 78% | 0.4 |
| 25° | 0.675 | 68% | 0.6 |
| 30° | 0.563 | 56% | 0.8 |
| 35° | 0.450 | 45% | 1.2 |
| 40° | 0.344 | 34% | 1.5 |

For a 35 mm lens on a full-frame sensor (43.3 mm image diagonal), the corner half-field angle is approximately 31.8°. The classical cos⁴ prediction gives about **52% relative illumination** in the extreme corners — nearly a full stop of light loss from pure geometry, before any vignetting enters the picture [^1].

**The critical point:** This falloff depends on the **field angle**, not the aperture size. Stopping down does *not* reduce natural radiometric falloff [^1] [^2]. It persists at every f-number.

## Cause 2: Optical Vignetting (the Cat's-Eye Effect)

The second source of corner darkening is **optical vignetting**: off-axis light beams clipped by lens-element rims, barrel walls, or other internal apertures that are not the aperture stop itself [^1] [^4].

The aperture stop limits the on-axis beam. But for off-axis beams, the light travels obliquely through the lens and passes closer to the edges of surrounding elements, which may clip part of the beam. The visual signature is the **cat's-eye effect** in out-of-focus highlights: bright bokeh spots near the image corners appear as elongated, lemon-shaped blobs rather than circles. This shape is the truncated exit pupil — the circular pupil clipped into an asymmetric outline by nearby element rims [^1].

Optical vignetting is typically the **dominant** source of corner falloff at wide apertures in fast lenses. A fast lens at f/1.4 may lose two or more stops in the extreme corners from vignetting alone.

**Why stopping down helps:** when the iris closes, the beam narrows and is less likely to be clipped by surrounding element rims. By f/4 or f/5.6, the beam has typically cleared the internal obstructions entirely. This is the practical experience every photographer knows: cat's-eye bokeh at f/1.4 transitions to nearly circular highlights by f/4.

## Cause 3: Mechanical Vignetting

The simplest source: **mechanical vignetting** is physical obstruction by non-optical hardware — lens hoods, filter rings, extension tubes, adapter rings, or the camera mount throat itself [^1] [^4] [^7].

Mechanical vignetting produces a distinctly different pattern: a sharp, often abrupt darkening or complete blackening at the extreme periphery. Unlike the smooth, gradual profiles of radiometric falloff and optical vignetting, mechanical vignetting may produce a hard boundary where illumination drops to zero.

The fix is equally simple: remove the obstruction.

## Why Stopping Down Helps Some — But Not All — Corner Darkening

This is the practical payoff of the three-cause framework:

Stopping down **reduces optical vignetting**, often dramatically — this is the dominant improvement from f/1.4 to f/4. But stopping down **does not reduce natural radiometric falloff** (the cos⁴ geometry persists at every f-number) and **does not fix mechanical vignetting** (a hood obstructs at f/16 just as much as at f/1.4).

At f/16, a 35 mm lens on a full-frame sensor may have negligible optical vignetting, but it will still show approximately 50–55% relative illumination at the extreme corners from radiometric geometry alone. In-camera shading correction compensates for the combined effect, but that is a computational lookup-table adjustment, not a physical fix.

## What the Simple Model Leaves Out

The cos⁴ law is the first-order baseline. Real lenses can fall off faster or slower, for reasons the parent monograph develops in full [^5]:

**Pupil aberrations** cause the entrance pupil's apparent area to change with field angle. If the effective off-axis area shrinks, falloff can be steeper than cos⁴; if it grows, falloff can be shallower [^4] [^6]. **Non-unit pupil magnification** ($m_p \neq 1$, introduced in [*The Exit Pupil and Your Digital Sensor*](/articles/exit-pupil-sensor)) modifies the radiometric geometry for lenses with asymmetric power distributions. **Distortion** changes local area scaling across the field, partially counteracting or worsening the falloff depending on its sign.

The full treatment of pupil aberrations and their relationship to illumination prediction is planned for a dedicated article: *Pupil Aberrations in Practice*.

> **Key Takeaways**
>
> 1. Corner darkening has **three distinct optical causes**: natural radiometric falloff (cos⁴), optical vignetting (cat's-eye clipping), and mechanical vignetting (hood/filter obstruction).
> 2. Stopping down **reduces optical vignetting** but **does not reduce natural radiometric falloff**. A 35 mm lens on full frame loses nearly a stop in the extreme corners from geometry alone, at every f-number.
> 3. The cos⁴ law uses the **object-space field angle** — distinct from the image-side CRA. This distinction is the key to understanding why telecentricity helps digital sensors.

*For the graduate-level mathematical treatment, including the generalized illumination law, see Section 5 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Previous: [The Exit Pupil and Your Digital Sensor](/articles/exit-pupil-sensor) · Next: [Telecentricity Explained](/articles/telecentricity)*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: D. A. Kerr, "Derivation of the 'cosine fourth' law for falloff of illuminance across a camera image," tech. note, 2007.

[^3]: M. Reiss, "The cos⁴ law of illumination," *J. Opt. Soc. Am.*, vol. 35, no. 4, pp. 283–288, Apr. 1945.

[^4]: V. N. Mahajan, *Optical Imaging and Aberrations*, Part I: Ray Geometrical Optics. Bellingham, WA, USA: SPIE Press, 1998.

[^5]: Edmund Optics, "Sensor relative illumination, roll-off, and vignetting," *Imaging Resource Guide*. [Online]. Available: https://www.edmundoptics.com/knowledge-center/application-notes/imaging/sensor-relative-illumination-roll-off-and-vignetting/. [Accessed: Apr. 2026].

[^6]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, UK: Adam Hilger (IOP Publishing), 1986, ch. 9.

[^7]: S. Ray, *Applied Photographic Optics*, 3rd ed. Oxford, UK: Focal Press (Elsevier), 2002.
