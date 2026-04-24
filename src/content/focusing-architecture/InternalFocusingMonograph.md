---
slug: internal-focusing-monograph
title: Internal Focusing Architectures — Aberration Theory and Design Tradeoffs
summary: A unified treatment of the five recurrent internal-focusing patterns in photographic lens design, grounded in Seidel theory, the Wynne conjugate-shift formalism, and extrinsic aberrations.
tag: article
series: focusing-architectures
seriesOrder: 8
toc: true
---

# Internal Focusing Architectures in Photographic Lenses: Aberration Theory and Design Tradeoffs

## Introduction

The decision of which lens group to move during focusing is not merely a mechanical convenience — it is a fundamental optical design choice that determines how every aberration evolves across the conjugate range. This monograph examines five recurrent internal-focusing architecture patterns that are especially instructive for understanding the tradeoffs in photographic lens design: front-of-stop focusing, rear-of-stop focusing, dual-side (CRC-type) focusing, monolithic group focusing with the stop inside the moving group, and rear-group focusing in a retrofocus wide-angle.

C.G. Wynne proved in 1952 that simultaneous correction of all five Seidel aberrations at two different conjugates is impossible unless the system's *pupil* aberrations also vanish — a condition rarely achievable in practice [^1]. Every internal focusing architecture represents a different engineering compromise within this fundamental constraint. The analysis that follows grounds each architecture in third-order aberration theory, the Wynne conjugate-shift formalism, and the higher-order considerations that become essential at wide apertures.

The five case studies were selected to span the principal architecture patterns — one example each of front-of-stop, rear-of-stop, dual-side, stop-inside-moving-group, and retrofocus rear-focusing — while covering a representative range of focal lengths (28–135 mm), apertures (f/1.4–f/2.8), and conjugate demands (portrait-distance to 1:1 macro):

| Architecture | Case Study | Patent |
|---|---|---|
| Front-of-stop focusing | [Nikon AF-S Nikkor 105mm f/1.4E ED](/lens/nikkor-105-f14e-ed) | WO 2019/116563 Ex. 3 [^12] |
| Rear-of-stop focusing | [Canon RF 135mm f/1.8 L IS USM](/lens/canon-rf-135f18) | US 2023/0213745 A1 Ex. 4 [^13] |
| Dual-side focusing | [Nikon AF-S Micro-Nikkor 105mm f/2.8G VR](/lens/nikon-afs-105f28-vr-micro) | US 7,218,457 Ex. 3 [^14] |
| Monolithic group focusing | [Nikon AF-S Nikkor 85mm f/1.4G](/lens/nikkor-85f14g) | US 8,767,319 Ex. 1 [^16] |
| Rear-group retrofocus focusing | [Nikon AF-S Nikkor 28mm f/1.4E ED](/lens/nikon-afs-28f14e) | JP 2017-227799 Ex. 1 [^17] |

The methodology for matching patent examples to production lenses, and the evidence-level framework used throughout this monograph (distinguishing patent-stated facts, theory-derived inferences, and qualitative design interpretations), are detailed in Appendix B and Appendix C respectively.

Open any of the case study lenses in the [lens library](/lenses) to explore its cross-section, adjust focus, and see how the architecture manifests in the geometry of the moving elements.

---

## Mathematical Framework

> **Notation and scope.** Unless otherwise noted, the aberration discussion uses third-order (Seidel) notation with paraxial ray coordinates in a fixed-stop formulation. Image-space Seidel sums follow the conventions of Welford [^2] and Sasián [^3]; Mahajan [^4] provides an accessible parallel treatment. Kingslake and Johnson [^21] and Smith [^22] offer further coverage of the lens design context. The underlying wave-aberration framework is due to Hopkins [^5]. Equations from Wynne's conjugate-shift theory are given in a form sufficient for qualitative analysis of focusing behavior; they are not intended as a self-contained derivation.

### Seidel Surface Contributions and the Stop-Shift Equations

The five primary (third-order) aberration coefficients for a single refracting surface are built from the marginal ray refraction invariant $A = n(hc + u)$ and the chief ray invariant $\bar{A} = n(\bar{h}c + \bar{u})$, where $h$ and $\bar{h}$ are the respective ray intercept heights at the surface, $c$ the surface curvature, and $u$, $\bar{u}$ the paraxial ray angles. The foundational derivation appears in Conrady, Part I [^6]; Welford, Ch. 5 [^2] provides a modern formulation. The surface contributions take the form:

$$S_I = -A^2 h\,\Delta(u/n)$$

$$S_{II} = \frac{\bar{A}}{A}\,S_I$$

$$S_{III} = \left(\frac{\bar{A}}{A}\right)^2 S_I$$

$$S_{IV} = -\mathcal{H}^2 c\,\Delta(1/n)$$

$$S_V = \frac{\bar{A}}{A}\left(S_{III} + S_{IV}\right)$$

The structure of these equations is the key to what follows. Spherical aberration $S_I$ is the "seed" — it depends only on the marginal ray and the surface geometry. Coma, astigmatism, and distortion are then derived from $S_I$ by successive multiplication by the ratio $\bar{A}/A$: coma carries one power of this ratio, astigmatism carries two, and distortion carries three. Petzval curvature $S_{IV}$ stands apart — it depends only on the surface curvature and the refractive index step, not on ray heights at all.

The ratio $\bar{A}/A$ — equivalently $\bar{h}/h$ at a thin element — is the **eccentricity parameter**, and it determines how each surface's aberration contribution is partitioned among spherical aberration, coma, astigmatism, and distortion. Near the aperture stop, where $\bar{h} \approx 0$, the eccentricity parameter is small and the surface contributes almost exclusively to spherical aberration. Far from the stop, where $\bar{h}$ grows, the surface's contribution fans out into the off-axis aberrations. This is the fundamental reason why the position of a focusing group relative to the stop matters.

When the aperture stop is displaced axially, introducing a shift parameter $Q = \Delta\bar{A}/A$, the system Seidel sums transform according to the **stop-shift equations** [^2] [^3]:

$$S_I^* = S_I$$

$$S_{II}^* = S_{II} + QS_I$$

$$S_{III}^* = S_{III} + 2QS_{II} + Q^2 S_I$$

$$S_{IV}^* = S_{IV}$$

$$S_V^* = S_V + Q(3S_{III} + S_{IV}) + 3Q^2 S_{II} + Q^3 S_I$$

Two aberrations are **stop-invariant**: spherical aberration ($S_I$) and Petzval curvature ($S_{IV}$). Coma depends linearly on $Q$, astigmatism quadratically, and distortion cubically. This hierarchy is central to understanding why the position of a focusing group relative to the stop determines which aberrations are most sensitive to conjugate change.

### The Wynne Conjugate-Shift Equations

Wynne's 1952 derivation established the mathematical dual of the stop-shift equations [^1] [^2]. When the object conjugate changes, the marginal ray changes while the chief ray — defined by the fixed stop — remains constant. Defining a conjugate-shift parameter $\delta = \Delta A / \bar{A}$, the image aberrations transform as:

$$S_I' = S_I + 4\delta S_{II} + 4\delta^2\!\left(S_{III} + \tfrac{1}{2}S_{IV}\right) + \cdots$$

$$S_{II}' = S_{II} + \delta(3S_{III} + S_{IV}) + 3\delta^2 \bar{S}_{II} + \cdots$$

$$S_{III}' = S_{III} + 2\delta \bar{S}_{II} + \delta^2 \bar{S}_I$$

The barred quantities $\bar{S}_I$ and $\bar{S}_{II}$ are the **pupil aberrations** — the Seidel coefficients of the pupil imaging subsystem.

The most consequential result for IF design is the induced spherical aberration: even a system with perfectly corrected $S_I$ at the design conjugate will develop spherical aberration upon refocusing, with the leading term proportional to the system's coma $S_{II}$. **If a lens group has uncorrected coma, refocusing it will directly generate spherical aberration** — a particularly visible degradation in fast lenses at close focus [^1] [^7].

Wynne's impossibility theorem follows from these equations: correcting all five Seidel aberrations simultaneously at two conjugates requires the vanishing of all pupil aberrations. No practical photographic lens satisfies all these conditions simultaneously. Every IF architecture therefore represents a prioritization — which aberrations to hold stable across the focus range, and which to allow to degrade.

### Pupil Aberrations as the Theoretical Engine of IF Design

The pupil aberrations $\bar{S}_I$ (pupil spherical aberration) and $\bar{S}_{II}$ (pupil coma) govern the *rate* at which image aberrations change during focusing. From the conjugate-shift equations, the conditions for aberration invariance during refocusing emerge directly:

- **Spherical aberration invariance** requires $S_{II} = 0$ (no image coma) at the design conjugate.
- **Coma invariance** requires $3S_{III} + S_{IV} = 0$ and $\bar{S}_{II} = 0$.
- **Astigmatism invariance** requires $\bar{S}_{II} = 0$ and $\bar{S}_I = 0$.

The condition $\bar{S}_I = 0$ states that the exit pupil must be a sharp, aberration-free image of the aperture stop as seen through the rear group. When the exit pupil is aberrated, the chief ray angles at the image plane vary nonlinearly with field position, and refocusing produces field-dependent image quality shifts [^8].

In practical IF design, the *stationary* groups determine the pupil aberration environment in which the focusing group operates. A well-designed IF system minimizes pupil aberrations in the fixed groups, giving the moving group the cleanest possible optical context for conjugate change.

### Extrinsic Aberrations and IF Group Translation

A subtlety not captured by the classical conjugate-shift equations alone is that when an IF group physically translates, it introduces **extrinsic aberrations** — aberrations arising from the mismatch between the exit pupil of one subsystem and the entrance pupil of the next. Sasián formalized this concept [^9]: when two subsystems are concatenated and the exit pupil of the first does not coincide with the entrance pupil of the second, the composite system develops aberrations beyond those predicted by summing the subsystem contributions independently.

In an IF lens at the design conjugate, the group spacings are chosen so that the pupil relay between fixed and moving groups is well-matched. When the focusing group translates, this relay match is disrupted. The practical signature is **focus-position-dependent illumination non-uniformity and color shading** at the sensor plane.

For IF design, the key implication is that the stationary groups must be designed not only with low *image* aberration contributions but also with low *pupil* aberration contributions. Architectures that inherently minimize pupil mismatch during focusing — notably the monolithic architecture, where the stop translates with the group and preserves the pupil relay geometry — gain a theoretical advantage that the Wynne equations alone do not fully capture.

### The Wynne–Kidger Design Methodology

Kidger extended the Wynne analysis by identifying pupil spherical aberration as the single most important parameter governing aberration stability across conjugates [^8]. His argument was that while the classical Wynne conditions for conjugate invariance require the vanishing of *all* pupil aberrations, in practice the dominant degradation mechanism is pupil spherical aberration because it feeds directly into the astigmatism change equation ($\Delta S_{III} = \cdots + \delta^2 \bar{S}_I$). A lens system with small $\bar{S}_I$ will maintain correction across conjugates substantially better than one with large $\bar{S}_I$. Kidger's two textbooks [^23] [^24] provide further development of this methodology in the context of practical lens design.

This insight has a direct architectural consequence: the monolithic architecture naturally produces small $\bar{S}_I$; the dual-side architecture can actively manage $\bar{S}_I$ through its two independent degrees of freedom; and the rear-of-stop architecture benefits from the reduced ray heights that suppress all aberration contributions. Front-of-stop and rear-group retrofocus architectures face the steepest $\bar{S}_I$ challenges.

### Higher-Order Aberrations at Wide Apertures

Three of the five case-study lenses operate at f/1.4, where the third-order (Seidel) framework provides necessary but insufficient analysis. Transverse spherical aberration scales as the cube of the numerical aperture: going from f/4 to f/1.4 amplifies spherical aberration contributions by a factor of approximately $(4/1.4)^3 \approx 23\times$.

The principal higher-order aberrations relevant to IF design at wide apertures include fifth-order spherical aberration ($W_{060}$), oblique spherical aberration ($W_{240}$), and elliptical coma ($W_{331}$). Berek recognized that for wide-aperture lenses, deliberate under-correction of third-order spherical aberration is often necessary to counterbalance the opposite sign of the fifth-order term, producing a zonal balance that minimizes the total wavefront error across the aperture [^10]. This balance is conjugate-dependent — it shifts as the lens refocuses — and each IF architecture disturbs it differently.

### Focusing Group Mechanics and Focal Length Change

For a single thin lens of focal length $f$, the focusing extension required to image an object at distance $s$ is $\Delta = f^2/(|s| - f)$. In a compound system with front group focal length $f_1$ and focusing group focal length $f_2$ separated by distance $d$, the system focal length is:

$$\frac{1}{f_{sys}} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$$

When the focusing group translates by $\delta$, the system focal length changes:

$$\Delta f_{sys} \approx \frac{f_{sys}^2 \cdot \delta}{f_1 f_2}$$

> **Key result — the IF breathing–aberration tension.** A shorter focal length focusing group (stronger optical power) requires less movement $\delta$ for a given conjugate change, enabling compact IF mechanisms, but contributes proportionally larger aberration changes and produces more breathing per unit of travel. Compact, fast-focusing mechanisms demand strong focusing groups, which are inherently more aberration-sensitive to conjugate change and more prone to breathing.

Goodsell, Blahnik, and Rolland derived the paraxial condition for breathing elimination with a single moving group, demonstrating up to two orders of magnitude improvement in breathing on patent designs — breathing is a designable quantity rather than an inevitable consequence of IF [^11].

### The Unit-Focusing Baseline

In **unit focusing** (whole-lens focusing), the entire optical assembly translates as a rigid unit. Because no element moves relative to any other, no air spaces change and no stop-shift perturbations are introduced. For a unit-focused system, the dominant degradation at close focus is governed by the leading conjugate-shift terms:

$$\Delta S_I \approx 4\delta S_{II}, \qquad \Delta S_{II} \approx \delta(3S_{III} + S_{IV})$$

> **Key result — the coma–SA coupling.** The system's own coma controls the leading spherical aberration change during refocusing. A unit-focused system with inherently small coma — such as a quasi-symmetric Double Gauss — will resist spherical aberration degradation at close focus far better than an asymmetric design.

See the dedicated primers for a deeper treatment:

- **[Unit Focusing](/articles/focusing-unit)** — the extending-barrel baseline
- **[Unit Focusing with Floating Elements](/articles/focusing-unit-floating)** — the hybrid extension that preserves the barrel form but introduces internal variable spacings

---

## Case Study I: Front-of-Stop Focusing — Nikon AF-S Nikkor 105mm f/1.4E ED

- **Patent:** WO 2019/116563, Example 3 [^12]
- **Production lens:** 14 elements in 9 groups; three ED elements; Nano Crystal Coat; no aspherical surfaces
- **Weight:** 985 g | **MFD:** 1.0 m | **Lens page:** [/lens/nikkor-105-f14e-ed](/lens/nikkor-105-f14e-ed)

The Nikon 105mm f/1.4E employs a focusing group of **negative refractive power** positioned ahead of the aperture stop. The optical system follows a three-group architecture: a front positive group G1, a negative focusing group G2, and a rear group G3 containing the aperture stop. During focusing from infinity to close range, G2 translates toward the image side.

### Aberration Rationale

At surfaces before the stop, the chief ray height $\bar{h}$ is nonzero and has the same sign across the group. For the negative focusing group ahead of the stop, the eccentricity parameter $\bar{h}/h$ is moderate — the group sits between the large-diameter front elements and the stop.

When this group's conjugate changes during focusing, the dominant induced aberration is spherical aberration (through the $4\delta S_{II}$ term). The negative power of G2 provides a natural compensating mechanism: negative elements contribute negative spherical aberration that partially counterbalances the overcorrection tendency at close focus. The patent text states this configuration "allows the focusing group to be quickly driven when an actuator performs automatic focusing and spherical aberrations and the curvature of field to be satisfactorily corrected when focusing at a close distance."

The design places ED glass elements in G1, ahead of the focusing group. Because these dispersive-correction elements are in the fixed front group, their chromatic correction contribution remains constant regardless of focus position.

### The All-Spherical Philosophy

At f/1.4 with a 105mm focal length, the entrance pupil diameter exceeds 75 mm. One likely reason to avoid aspherics in a lens of this type is that at such large apertures, surface-form artifacts can become visible as structured patterns in defocused highlights. The all-spherical design uses 14 conventional glass surfaces to simultaneously manage third-order through fifth-order aberration terms across the field, trading element count for rendering purity. The large element count provides sufficient degrees of freedom for zonal balancing of spherical aberration without aspherics.

For a focused treatment, see the **[Front-of-Stop Focusing primer](/articles/focusing-front-of-stop)**.

---

## Case Study II: Rear-of-Stop Focusing — Canon RF 135mm f/1.8 L IS USM

- **Patent:** US 2023/0213745 A1, Example 4 [^13]
- **Production lens:** 17 elements in 12 groups; three UD elements; Air Sphere Coating; Nano USM AF motor
- **MFD:** 0.70 m | **Lens page:** [/lens/canon-rf-135f18](/lens/canon-rf-135f18)

The Canon RF 135mm f/1.8 L IS USM places its focusing group behind the aperture stop — the most common IF architecture in modern telephoto primes. The cited patent describes a three-unit architecture: a positive first lens unit L1, the aperture stop, a **negative second lens unit L2** that serves as the focusing unit, and a positive third lens unit L3 containing an image-stabilization subunit.

### Aberration Rationale

Rear-of-stop focusing exploits a fundamental geometric fact: in a telephoto-type lens, the beam diameter narrows substantially after passing through the aperture stop. The focusing group operates with **smaller marginal ray heights** $h$ than it would have if positioned before the stop, which directly reduces its Seidel aberration contributions.

Behind the stop, the chief ray height $\bar{h}$ starts at zero and grows with distance from the stop. A focusing group positioned close behind the stop operates with small $\bar{h}/h$, meaning its aberration contributions are dominated by spherical aberration $S_I$. The off-axis aberrations scale with increasing powers of the eccentricity parameter — coma $\propto (\bar{h}/h)$, astigmatism $\propto (\bar{h}/h)^2$, distortion $\propto (\bar{h}/h)^3$. Near the stop, where $\bar{h}/h$ is small, all three are suppressed — and with them, the conjugate-shift-induced variation in those aberrations.

**Keeping the focusing group close to the stop suppresses conjugate-shift-induced field aberrations.** The tradeoff is that on-axis aberrations can still vary with focus.

### Short Flange Distance and IS Co-Location

The Canon RF mount's 54 mm inner diameter and 20 mm flange distance provide optical freedom unavailable in SLR designs. Rear-of-stop focusing also enables **co-location of AF and IS groups** behind the stop, where both operate in the reduced-diameter beam. Both groups benefit from the same geometric advantage: small ray heights mean lighter elements, lower inertial loads, and faster actuation.

For a focused treatment, see the **[Rear-of-Stop Focusing primer](/articles/focusing-rear-of-stop)**.

---

## Case Study III: Dual-Side Focusing — Nikon AF-S Micro-Nikkor 105mm f/2.8G VR

- **Patent:** US 7,218,457, Example 3 [^14]
- **Production lens:** 14 elements in 12 groups; one ED element; VR II image stabilization
- **MFD:** 0.314 m (1:1 reproduction) | **Lens page:** [/lens/nikon-afs-105f28-vr-micro](/lens/nikon-afs-105f28-vr-micro)

The Micro-Nikkor 105mm f/2.8G VR confronts the most demanding conjugate range of any of the five case studies: performance from infinity to **1:1 reproduction** — a magnification change from 0 to −1.

### Architecture and CRC Heritage

The solution is dual-side focusing: **two groups, one before and one after the aperture stop, move independently at different rates**. In the patent example, the lens is divided into four groups: fixed positive G1, moving negative G2 (ahead of the stop), aperture stop, moving positive G3 (behind the stop), fixed negative G4. During focusing from infinity to close range, G2 moves toward the image side and G3 moves toward the object side.

This architecture is the modern realization of Nikon's **Close-Range Correction (CRC) system**, conceived in 1967 by Zenji Wakimoto and executed in its first implementation by Yoshiyuki Shimizu for the Nikkor-N Auto 24mm f/2.8 [^15]. Wakimoto's original insight was remarkably precise: he identified a variable air space whose change affected the astigmatism sum without disturbing the spherical aberration sum, then used that air space as a correcting degree of freedom during focusing.

### Aberration Rationale

With two independently moving groups, the designer has **two free parameters** rather than one. At each focus position, the two movements can be chosen to simultaneously satisfy two aberration constraints — typically correcting both spherical aberration and field curvature, or spherical aberration and coma.

For macro photography specifically, the critical aberrations are spherical aberration (which degrades rapidly as magnification approaches unity), field curvature (which shifts the best-focus surface away from the sensor plane at high magnification), and axial chromatic aberration (which increases at high magnification because the effective f-number at 1:1 is twice the marked value).

For a focused treatment, see the **[Dual-Side Focusing primer](/articles/focusing-dual-side)**.

---

## Case Study IV: Monolithic Group Focusing — Nikon AF-S Nikkor 85mm f/1.4G

- **Patent:** US 8,767,319, Example 1 [^16]
- **Production lens:** 10 elements in 9 groups; no aspherical elements; no ED elements
- **Weight:** 595 g | **MFD:** 0.85 m | **Lens page:** [/lens/nikkor-85f14g](/lens/nikkor-85f14g)

The Nikon 85mm f/1.4G takes a philosophically different approach: **a single central group that includes elements on both sides of the aperture stop, plus the stop itself, moves as a monolithic unit** during focusing.

### Architecture

The patent confirms this unusual arrangement explicitly. The second lens group (Gr2) contains, in order from the object side: a positive meniscus, the aperture stop, and then four additional elements. During focusing from infinity to close range, Gr2 translates toward the object side while Gr1 and Gr3 remain stationary. The patent's prior-art discussion explains the rationale: placing the aperture stop within the focusing group "reduces variation in off-axial aberrations during focusing."

### The Symmetry Preservation Principle

The Double Gauss architecture achieves exceptional performance through the **symmetry principle**: for a system symmetric about a central stop, coma, distortion, and lateral chromatic aberration automatically vanish — they are odd functions of the chief ray angle and cancel by symmetry.

Moving the stop with the focusing group preserves this quasi-symmetry. When the central group translates, the stop moves with it, so the **relative positions of all elements with respect to the stop remain constant**. The eccentricity parameter $\bar{h}/h$ at each surface within the moving group is approximately maintained during focusing. Of the five IF architectures, the monolithic approach most closely approximates the unit-focusing baseline.

### The All-Classical Glass Choice

The absence of ED glass and aspherical elements is deliberate. In a modified Double Gauss design, the inherent quasi-symmetry already provides substantial chromatic correction: lateral color cancels by the odd-aberration symmetry argument, and axial color is corrected through careful glass pairing in the cemented groups flanking the stop. The monolithic focusing strategy preserves this correction across the focus range.

For a focused treatment, see the **[Monolithic Group Focusing primer](/articles/focusing-monolithic)**.

---

## Case Study V: Rear-Group Focusing in a Fast Retrofocus Wide-Angle — Nikon AF-S Nikkor 28mm f/1.4E ED

- **Patent:** JP 2017-227799, Example 1 [^17]
- **Production lens:** 14 elements in 11 groups; two ED elements; three aspherical elements; Nano Crystal Coat; fluorine front-element coating
- **MFD:** 0.28 m | **Lens page:** [/lens/nikon-afs-28f14e](/lens/nikon-afs-28f14e)

The Nikon 28mm f/1.4E employs a two-group rear-focusing strategy: the patent divides the system into a fixed first group and a **second group that moves toward the object side** during focusing from infinity to close range.

### The Retrofocus Constraint

This architecture is dictated by the lens's **inverse telephoto (retrofocus) design** — the standard wide-angle configuration for SLR cameras requiring sufficient back focal distance for the reflex mirror. Fixing the front group and moving the rear second group addresses three problems simultaneously: the rear group has substantially less mass; the spacing change provides inherent close-range correction; and the front element does not rotate or extend. Neil described the general class of high-performance wide-angle systems with internal close-focusing optics that exploit this constraint [^20].

### Evolution from the 28mm f/1.4D

The predecessor 28mm f/1.4D [^18] used a more mechanically complex focusing system: three groups moved during focusing at **two** distinct rates. The newer 28mm f/1.4E trades this multi-rate complexity for modern optical technology. Three aspherical elements and two ED elements provide the additional degrees of freedom needed to control higher-order aberration residuals across the conjugate range with a simpler single-rate rear-focus mechanism.

This represents a broader trend in modern lens design: **advances in glass and aspherical manufacturing technology can offset the loss of mechanical degrees of freedom**.

For a focused treatment, see the **[Rear-Group Retrofocus Focusing primer](/articles/focusing-rear-group-retrofocus)**.

---

## Comparative Analysis

The five architectures are not interchangeable — each is suited to a specific class of design brief. **Front-of-stop focusing** earns its place in fast portrait and short telephoto primes where on-axis rendering purity at wide apertures is non-negotiable. **Rear-of-stop focusing** dominates modern stabilized telephotos and video-oriented designs where AF speed, IS co-location, and compact moving mass matter more than breathing control. **Dual-side focusing** is the only architecture that can hold correction across extreme conjugate ranges. **Monolithic group focusing** is narrowly optimal for modified Double Gauss and other quasi-symmetric forms. **Rear-group retrofocus focusing** is the pragmatic solution for fast wide-angles where the heavy front negative group cannot practically be moved.

The comparisons in this section are **theory-led qualitative judgments** derived from applying the stop-shift and conjugate-shift frameworks to the patent-described group structures of the five case studies. They represent predicted tendencies rather than measured cross-lens results.

### Aberration Management Across the Five Architectures

**Spherical aberration** ($S_I$) is stop-independent but conjugate-dependent. The leading conjugate-shift term $\Delta S_I \approx 4\delta S_{II}$ means that coma in the focusing group generates spherical aberration upon refocusing.

- *Front-of-stop* (105/1.4E): Mitigated by the negative-power focusing group's inherent self-compensation.
- *Rear-of-stop* (RF 135/1.8): Reduced in absolute magnitude by small ray heights behind the stop.
- *Dual-side* (105/2.8G): Explicitly nulled at each focus position using two independent group movements.
- *Monolithic* (85/1.4G): Minimized by the Double Gauss's inherent symmetry keeping $S_{II}$ small.
- *Rear-group retrofocus* (28/1.4E): Managed through aspherical surfaces in the moving group.

**Coma** ($S_{II}$) depends linearly on the eccentricity parameter. Front-of-stop groups, being moderately distant from the stop, experience significant coma variation with conjugate change. Rear-of-stop groups near the stop minimize this. The monolithic architecture, by moving the stop with the group, approximately preserves $\bar{h}/h$ at each surface.

**Astigmatism** ($S_{III}$) depends quadratically on the stop-shift parameter. The dual-side architecture provides the most direct control, having been invented specifically to compensate astigmatism change.

**Distortion** ($S_V$), being cubic in the stop-shift parameter, shows the largest variation in architectures where the focusing group is far from the stop or where the stop's relationship to the elements changes during focusing. Rear-group retrofocus focusing is expected to produce substantial distortion variation; monolithic focusing is expected to produce the least.

### Telecentricity and Digital Sensor Compatibility

Movement of an internal group alters the position and aberration state of the exit pupil, which determines the chief ray angle at the sensor plane. Modern digital sensors employ microlens arrays over each photosite, optimized for specific chief ray angles. When the chief ray angle varies with focus position, the result can include illumination falloff changes, color shading, and vignetting variations across the focus range.

The monolithic architecture is expected to produce the least exit pupil variation during focusing; rear-group retrofocus focusing is expected to produce the most.

### Focus Breathing

- *Rear-of-stop* designs often show significant breathing.
- *Monolithic* designs show moderate breathing.
- *Front-of-stop* designs show moderate breathing.
- *Dual-side* designs can partially compensate breathing through differential group rates.
- *Rear-group retrofocus* designs show variable breathing depending on the retrofocus ratio.

### Bokeh and Rendering Consistency

The quality of out-of-focus rendering connects to IF architecture through the spherical aberration balance at each focus position. The *monolithic* architecture preserves the Double Gauss's natural spherical aberration balance across the focus range. The *front-of-stop* architecture maintains stable on-axis correction through the negative-group self-compensation mechanism. The *dual-side* architecture can maintain a neutral spherical aberration state from infinity to 1:1. The *rear-of-stop* architecture may show bokeh variation with focus. The *rear-group retrofocus* architecture tends toward the most variation overall.

### Secondary Practical Consequences

**Focus shift.** When a lens has residual spherical aberration, the best-focus plane shifts as the aperture is stopped down. Because IF architectures change the SA balance with conjugate, the *magnitude and direction* of focus shift also vary with focus distance. The monolithic architecture is expected to produce the most stable focus-shift behavior across the conjugate range.

**Mechanical vignetting.** As focusing groups translate within the barrel, the beam path changes relative to fixed mechanical structures. In rear-of-stop and rear-group designs, the focusing group moves within a region of reduced beam diameter, making mechanical vignetting changes less pronounced.

---

## Engineering Realities

The optical theory establishes what is possible; engineering constraints determine what is practical. Internal focusing sacrifices some degree of optical invariance in exchange for the following engineering advantages:

**Reduced moving mass** is the primary driver of AF speed. A focusing group typically weighs 10–30% of the total lens mass.

**Constant physical length** eliminates the bellows-pumping effect, enabling the rubber gasket sealing used in professional weather-resistant lenses.

**Non-rotating front element** preserves polarizer orientation and petal hood alignment.

**Reduced focusing torque** improves manual focus feel and extends motor life.

The trend toward **individually motorized multi-group systems** represents the logical extension of the dual-side concept. Nikon's Z-mount "multi-focusing system" and Canon's RF floating-focus designs use separate voice-coil or stepping motors for each focusing group, with real-time optimization of group positions for each focus distance.

### Computational Correction as a Design Freedom

The most consequential development in IF design tradeoffs since the introduction of mirrorless camera systems is **in-camera computational correction**. Modern mirrorless camera bodies routinely correct distortion, lateral chromatic aberration, and peripheral illumination falloff digitally. These three aberrations share a critical property: they are field-dependent, slowly varying, and deterministic — they can be characterized as smooth functions of image height and modeled accurately from a small number of calibration measurements. They are also among the aberrations most sensitive to IF group motion.

By deferring these corrections to software, the designer is freed to optimize the optical prescription for the aberrations that cannot be corrected computationally — spherical aberration, coma, field curvature, and axial chromatic aberration — which are the aberrations that degrade resolving power and bokeh quality.

The practical impact on the five architectures is uneven. Rear-group retrofocus focusing benefits most from computational correction: the severe barrel-to-pincushion distortion swing across the focus range that was a significant liability in film-era SLR lenses becomes a correctable profile parameter. The monolithic architecture, which inherently minimizes these field-dependent aberrations through symmetry preservation, gains the least from computational correction.

**Focus breathing compensation** represents a particularly instructive case. Nikon's Z-mount implementation optically minimizes breathing through multi-group focusing mechanisms. Sony and Canon instead offer digital breathing compensation as a firmware feature, slightly cropping the image frame at each focus position.

---

## Conclusion

The five internal focusing architectures are not arbitrary mechanical choices but direct consequences of aberration theory applied to specific lens forms. The Wynne conjugate-shift equations establish that refocusing inevitably degrades image quality, with the degradation pattern determined by the focusing group's position relative to the aperture stop, its optical power, the pupil aberrations of the complete system, and — at wide apertures — the higher-order aberration balance.

Each architecture prioritizes different aspects of this multi-dimensional tradeoff:

| Architecture | Primary advantage | Primary tradeoff | Best suited to |
|---|---|---|---|
| Front-of-stop | SA self-compensation; stable color | Coma variation; moderate breathing | Fast portrait/short telephoto |
| Rear-of-stop | Minimal mass; fast AF; low field aberration variation | Breathing; SA variation | Telephoto; video-oriented designs |
| Dual-side | Best extended-range correction | Mechanical complexity | Macro; extreme conjugate range |
| Monolithic | Symmetry preservation; rendering consistency | Heavier focusing group; slower AF | Modified Double Gauss designs |
| Rear-group retrofocus | Practical for retrofocus; inherent CRC | Distortion/breathing variation | Fast wide-angle for SLR/mirrorless |

The historical trajectory from Wakimoto and Shimizu's 1967 CRC system [^15] to modern multi-focusing architectures traces a path of increasing optical sophistication enabled by manufacturing advances. Modern aspherical elements, ED glasses with anomalous partial dispersion, and computational optimization now allow simpler focusing mechanisms to maintain high performance where mechanically complex predecessors once required multiple differentially moving groups. The concurrent rise of computational correction in mirrorless camera systems has further reshaped the design space.

The fundamental physics of the Seidel and Buchdahl [^19] coefficients ensures that the question of *where to place the focusing group* will remain a central problem in optical design for as long as lenses are made from glass.

---

## Appendix A: Terminology

- **Front-of-stop focusing:** A group positioned ahead of the aperture stop moves during focusing.
- **Rear-of-stop focusing:** A group positioned behind the aperture stop moves during focusing. The focusing group is typically a compact subgroup within the rear half, not the entire rear portion.
- **Dual-side focusing:** Two groups, one on each side of the aperture stop, move independently during focusing. A generalization of Nikon's Close-Range Correction (CRC) concept.
- **Monolithic group focusing:** A single group that includes the aperture stop within it moves as a unit. Elements on both sides of the stop translate together.
- **Rear-group focusing (retrofocus):** In a two-group retrofocus layout, the rear (positive) group moves while the front (negative) group remains fixed. The aperture stop moves with the rear group.
- **Floating-element extending design:** A hybrid architecture in which the barrel extends during focusing but internal element spacings also change.

## Appendix B: Patent-to-Production Correspondence

Patent numerical examples are matched to production lenses by focal length, aperture class, group structure, special-element count, and release chronology. The computed prescriptions in these patents represent the actual optical designs; the marketed focal lengths and f-numbers are rounded consumer-facing labels. Production lens specifications may include features not addressed in the optical patent; stabilization-group placement, motor arrangement, and final production housing do not necessarily follow directly from the cited patent example.

## Appendix C: Evidence Levels

Statements in this monograph fall into three categories:

**Patent-stated or manufacturer-documented.** Group structure, element counts, which groups move, movement direction — directly from the patent text or manufacturer product pages.

**Theory-derived inference.** Aberration behavior predicted from the Wynne conjugate-shift equations, stop-shift equations, and Seidel surface-contribution formulas applied to the patent-described architecture.

**Qualitative design interpretation.** Broader claims about design philosophy, historical lineage, rendering character, and architecture-to-architecture rankings.

---

## References

[^1]: C. G. Wynne, "Primary aberrations and conjugate change," *Proc. Phys. Soc. B*, vol. 65, pp. 429–437, 1952.

[^2]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, U.K.: Adam Hilger, 1986.

[^3]: J. Sasián, *Introduction to Aberrations in Optical Imaging Systems*. Cambridge, U.K.: Cambridge Univ. Press, 2013.

[^4]: V. N. Mahajan, *Aberration Theory Made Simple*, 2nd ed. Bellingham, WA, USA: SPIE Press, 2011.

[^5]: H. H. Hopkins, *Wave Theory of Aberrations*. Oxford, U.K.: Oxford Univ. Press, 1950.

[^6]: A. E. Conrady, *Applied Optics and Optical Design*, Parts I & II. Oxford, U.K.: Oxford Univ. Press, 1929.

[^7]: E. Takano, "Changes in aberrations due to focusing and their elimination," *Proc. SPIE*, vol. 0237, 1980.

[^8]: M. J. Kidger, "Design of lenses for variable magnification," *Proc. SPIE*, vol. 2774, pp. 722–727, 1996.

[^9]: J. M. Sasián, "Extrinsic aberrations in optical imaging systems," *Adv. Opt. Technol.*, vol. 2, no. 1, pp. 75–80, 2013.

[^10]: M. Berek, *Grundlagen der praktischen Optik*. Berlin, Germany: Walter de Gruyter, 1930.

[^11]: J. Goodsell, V. Blahnik, and J. P. Rolland, "Method for minimizing lens breathing with one moving group," *Opt. Express*, vol. 30, no. 11, pp. 19494–19511, 2022.

[^12]: Nikon Corporation, "Optical system," Int. Patent WO 2019/116563 A1, 2019. — [105mm f/1.4E ED](/lens/nikkor-105-f14e-ed)

[^13]: Canon Inc., "Optical system," U.S. Patent Appl. 2023/0213745 A1, 2023. — [RF 135mm f/1.8 L IS USM](/lens/canon-rf-135f18)

[^14]: Nikon Corporation, "Close-up lens," U.S. Patent 7,218,457 B2, 2007. — [Micro-Nikkor 105mm f/2.8G VR](/lens/nikon-afs-105f28-vr-micro)

[^15]: Nikon Corporation, "Nikkor — Thousand and One Nights," Tales No. 14 and No. 86. [Online]. Available: https://imaging.nikon.com/imaging/information/nikkor/story/. Accessed: Apr. 2026.

[^16]: Nikon Corporation and Konica Minolta Advanced Layers, Inc., "Photographic lens," U.S. Patent 8,767,319 B2, 2014. — [85mm f/1.4G](/lens/nikkor-85f14g)

[^17]: Nikon Corporation and Konica Minolta Inc., "Optical system," JP Patent 2017-227799 A, 2017. — [28mm f/1.4E ED](/lens/nikon-afs-28f14e)

[^18]: Nikon Corporation, "Wide-angle lens," U.S. Patent 5,315,441, 1994.

[^19]: H. A. Buchdahl, *Optical Aberration Coefficients*. Oxford, U.K.: Oxford Univ. Press, 1954; repr. New York, NY, USA: Dover, 1968.

[^20]: I. A. Neil, "High-performance wide-angle objective lens systems with internal close-focusing optics and multiple aspheric surfaces for the visible waveband," *Proc. SPIE*, vol. 2774, 1996.

[^21]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Burlington, MA, USA: Academic Press, 2010.

[^22]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2007.

[^23]: M. J. Kidger, *Fundamental Optical Design*. Bellingham, WA, USA: SPIE Press, 2001.

[^24]: M. J. Kidger, *Intermediate Optical Design*. Bellingham, WA, USA: SPIE Press, 2004.

---

*This monograph is part of the [Focusing Architectures](/articles/focusing-architectures) series on OpticalBench. For short, standalone primers on each architecture, see the individual entries linked throughout the text.*
