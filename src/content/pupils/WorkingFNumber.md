---
slug: working-f-number
title: Working f-Number — Why Macro Photographers Lose Light
summary: Why macro photographers lose two stops of light at 1:1 magnification, the bellows factor formula, pupil magnification corrections for telephoto macros, and the close-up diopter exception.
tag: guide
series: pupil-geometry
seriesOrder: 7
toc: true
---

# Working f-Number — Why Macro Photographers Lose Light

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## The Observation: Exposure Loss at Close Focus

A lens marked f/2.8 delivers f/2.8 when focused at infinity. Move to 1:1 macro magnification — life-size reproduction — and the same iris setting delivers the light equivalent of f/5.6. That is a two-stop loss, enough to turn a well-exposed ambient shot into an underexposed one.

Every macro photographer has experienced this. TTL (through-the-lens) metering compensates automatically, so in practice the camera adjusts and the photographer may not even notice. But the effect becomes critical for manual flash exposure (where the photographer calculates from the guide number and the marked f-number), for extension-tube calculations, and any situation where the actual light-delivery performance of the lens at close focus matters.

Understanding *why* the exposure changes — even though the physical iris has not moved — requires understanding the relationship between magnification, pupil geometry, and the effective f-number.

## The Simple Explanation: The Image Moves Farther from the Lens

The f-number engraved on a lens barrel is the **infinity-conjugate f-number** — valid when the lens is focused at infinity. At infinity focus, the image forms one focal length behind the rear principal plane.

As the lens focuses closer, the image conjugate lengthens: the image forms farther from the exit pupil (the apparent aperture on the sensor side; see [*The Exit Pupil and Your Digital Sensor*](/articles/exit-pupil-sensor)). The exit pupil subtends a smaller angle as seen from the image plane, so less light per unit area reaches the sensor.

*[Diagram: Two side-by-side cross-sections. Left: lens focused at infinity — exit pupil subtends a wide angle from the image plane, labeled $N$. Right: lens extended for close focus — image plane farther away, exit pupil subtends a narrower angle, labeled $N_{\text{eff}} > N$. Show the longer image conjugate explicitly.]*

For a conventional lens — one that focuses by changing the overall lens-to-sensor distance without altering its internal optics — the relationship is [^1] [^2]:

$$N_{\text{eff}} = N(1 + m)$$

where $N$ is the marked f-number and $m$ is the image magnification (image size divided by object size, positive by convention). This is the **bellows factor**.

At 1:1 ($m = 1$), the effective f-number doubles: $N_{\text{eff}} = 2N$. A lens marked f/2.8 behaves as f/5.6 — exactly two stops lost. At 2:1 ($m = 2$), it triples: f/2.8 becomes f/8.4, over three stops.

## The Refinement: Pupil Magnification

The simple $(1 + m)$ rule assumes the entrance and exit pupils are the same size — that the **pupil magnification** $m_p = 1$. For many lenses, this is not the case. When $m_p \neq 1$, the generalized expression is [^1] [^2]:

$$N_{\text{eff}} = N\left(1 + \frac{m}{m_p}\right)$$

**Telephoto macro lenses** ($m_p < 1$, exit pupil smaller than entrance pupil): dividing $m$ by a number less than 1 increases the correction term. The exposure penalty is **worse** than $(1 + m)$ predicts.

**Retrofocus designs** ($m_p > 1$, exit pupil larger than entrance pupil): the correction term is reduced, and the penalty is **less** than $(1 + m)$.

### A worked example

A 180 mm macro lens with $m_p = 0.7$ at 1:1:

$$N_{\text{eff}} = N\left(1 + \frac{1}{0.7}\right) = N \times 2.43$$

Instead of two stops lost ($2N$), this lens loses about **2.6 stops** ($2.43N$). The difference — about two-thirds of a stop — matters for precise manual flash work.

### Effective f-number multiplier at various magnifications

| Magnification ($m$) | $m_p = 1.0$ | $m_p = 0.7$ | $m_p = 1.5$ |
|:-:|:-:|:-:|:-:|
| 0.1 (1:10) | 1.10× | 1.14× | 1.07× |
| 0.25 (1:4) | 1.25× | 1.36× | 1.17× |
| 0.5 (1:2) | 1.50× | 1.71× | 1.33× |
| 1.0 (1:1) | 2.00× | 2.43× | 1.67× |
| 2.0 (2:1) | 3.00× | 3.86× | 2.33× |

## Practical Guidance

**TTL metering handles this automatically** for ambient-light exposure. The meter reads the light that actually reaches the sensor, incorporating all bellows-factor and pupil-magnification effects.

**For manual flash work**, use the generalized formula if you know $m_p$. If you don't, the simple $(1 + m)$ rule is a reasonable approximation for most standard macro lenses, but expect potential error of up to a stop for strongly telephoto or retrofocus designs at high magnification.

**Extension tubes** add to the image conjugate and increase the effective f-number [^4]. Each tube contributes additional lens-to-sensor distance. The bellows factor applies to the total extension.

> **A caution about internally focusing lenses**
>
> The formulas above apply to conventional lenses that focus by extending the barrel. Many modern lenses use **internal focusing (IF)**, moving internal groups while the barrel length stays fixed [^3]. IF lenses change their effective focal length and pupil geometry as they focus, so the relationship between magnification and exposure loss becomes design-specific — it cannot be predicted from the infinity f-number and magnification alone. The camera's TTL meter still accounts for the actual light, but analytical exposure calculations may not match the simple bellows factor. For the full treatment of how IF architectures alter pupil and conjugate geometry, see the [*Internal Focusing in Photographic Lens Design*](/articles/internal-focusing-monograph) monograph on OpticalBench.net.

> **Sidebar: Close-up diopter lenses — magnification without bellows-factor cost**
>
> Close-up diopter lenses (supplementary positive lenses attached to the front of the main lens) offer an instructive contrast to extension tubes. A diopter changes the object conjugate — allowing the lens to focus on closer objects — without extending the image conjugate. The lens-to-sensor distance remains unchanged, so the exit pupil subtends the same angle from the sensor as before. The magnification increase comes without the corresponding bellows-factor exposure penalty. This is one reason close-up diopters remain popular for field macro work despite their optical compromises. The formal analogy between a supplementary diopter and the front-cell focusing mechanism is developed in the *Front-Cell Focusing* monograph on OpticalBench.net.

> **Rules of Thumb**
>
> - At **1:4 magnification**: expect a modest light loss (roughly ⅓ stop if $m_p \approx 1$).
> - At **1:2 magnification**: expect about 1 stop of loss.
> - At **1:1 magnification**: expect roughly **2 stops** if $m_p \approx 1$. Telephoto macros ($m_p < 1$) lose more.
> - **TTL metering** compensates automatically. These calculations matter mainly for manual flash.

> **Key Takeaways**
>
> 1. The marked f-number is valid only at infinity focus. At closer distances, the effective f-number increases because the image conjugate lengthens: $N_{\text{eff}} = N(1 + m)$.
> 2. When $m_p \neq 1$, the generalized formula $N_{\text{eff}} = N(1 + m/m_p)$ accounts for the actual exit-pupil geometry. Telephoto macros ($m_p < 1$) lose more light than the simple rule predicts.
> 3. **Close-up diopter lenses** gain magnification without extending the image conjugate, avoiding the bellows-factor penalty entirely.

*For the graduate-level mathematical treatment, see Sections 3.4 and 4.2 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Previous: [Mirrorless vs. SLR Lens Design](/articles/mirrorless-lens-design)*

*This is the final article in this series. For the graduate-level treatment of all topics covered here, see [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, UK: Adam Hilger (IOP Publishing), 1986, ch. 9.

[^3]: S. Ray, *Applied Photographic Optics*, 3rd ed. Oxford, UK: Focal Press (Elsevier), 2002.

[^4]: L. Lefkowitz, *The Manual of Close-Up Photography*. Garden City, NY, USA: Amphoto, 1979.
