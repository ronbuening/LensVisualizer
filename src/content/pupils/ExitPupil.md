---
slug: exit-pupil-sensor
title: The Exit Pupil and Your Digital Sensor — Chief-Ray Angle, Microlens Arrays, and Color Cast
summary: How the exit pupil diameter and distance from the sensor determine chief-ray angle, why digital sensors are sensitive to CRA, and how CRA mismatch produces corner color casts.
tag: guide
series: pupil-geometry
seriesOrder: 3
toc: true
---

# The Exit Pupil and Your Digital Sensor — Chief-Ray Angle, Microlens Arrays, and Color Cast

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## The Exit Pupil: The Aperture the Sensor Sees

The previous articles established the entrance pupil as the lens's apparent aperture on the scene side — the aperture the world "sees." The **exit pupil** is its counterpart on the sensor side: the image of the aperture stop formed by all the optical elements behind the stop [^1] [^2].

If you could look into the rear of a lens from the sensor's position, the apparent opening you would see is the exit pupil. Its diameter and its distance from the sensor together determine the geometry of every light cone arriving at every pixel — how wide each cone is, and at what angle it arrives.

In the film era, this geometry was of relatively minor importance. Silver halide emulsion is generally far less sensitive to the angle of incoming light than modern digital sensors are [^3]. Digital sensors, however, care deeply about the *direction* from which light arrives — and that direction is governed by the exit pupil.

## Pupil Magnification: Why Entrance and Exit Pupils Differ

In general, the entrance pupil and exit pupil are not the same size. The ratio between them is the **pupil magnification** [^1] [^4]:

$$m_p = \frac{D_{\text{XP}}}{D_{\text{EP}}}$$

where $D_{\text{XP}}$ is the exit-pupil diameter and $D_{\text{EP}}$ is the entrance-pupil diameter. What determines this ratio? The rear optical group — all the elements behind the stop — acts as a complete imaging system for the physical aperture stop, just as the front group does for the entrance pupil. Whether the rear group magnifies or demagnifies the stop image depends on its power distribution: its focal length, element arrangement, and the location of the stop within that arrangement [^1] [^4].

Two broad patterns emerge from common lens architectures:

**Telephoto designs** (long focal-length lenses physically shorter than their focal length) typically have $m_p < 1$, often in the range 0.5–0.8. The exit pupil is smaller than the entrance pupil. The positive-front, negative-rear power distribution that shortens the barrel also compresses the stop image in image space [^1].

**Retrofocus wide-angle designs** typically have $m_p > 1$, commonly 1.2–2.0 or higher. The exit pupil is larger than the entrance pupil. The negative-front, positive-rear power distribution that produces a long back focal distance also magnifies the stop image [^1].

Why does this matter? Because two lenses with identical f-numbers — identical entrance-pupil diameters relative to focal length — can deliver different light-cone geometries at the sensor if their pupil magnifications differ. The sensor does not see the entrance pupil; it sees the exit pupil.

> **Sidebar: Pupil magnification and depth of field**
>
> Pupil magnification has a secondary effect on the near/far balance of depth of field. When $m_p \neq 1$, the object-side and image-side cone geometries are no longer symmetric. For telephoto designs ($m_p < 1$), the rear depth of field tends to be somewhat compressed relative to the front; for retrofocus designs ($m_p > 1$), the balance shifts the other way [^1]. The effect is modest at typical shooting distances but becomes noticeable at macro magnifications, where it compounds with the working-f-number shift discussed in [*Working f-Number*](/articles/working-f-number).

## Chief-Ray Angle: The Angle That Matters for Sensors

The **chief-ray angle (CRA)** at the image plane is the angle at which the chief ray — the central ray of each image-forming bundle — strikes the sensor surface. In the paraxial model [^1]:

$$\tan(\text{CRA}) = \frac{y'}{d_{\text{XP}}}$$

where $y'$ is the image height (distance from the optical axis to the pixel) and $d_{\text{XP}}$ is the distance from the exit pupil to the image plane.

### A worked example

Consider a full-frame sensor (36 × 24 mm) with a lens whose exit pupil sits 80 mm in front of the image plane. At the corner of the long edge ($y' = 18$ mm), the CRA is:

$$\tan(\text{CRA}) = \frac{18}{80} = 0.225 \quad \Rightarrow \quad \text{CRA} \approx 12.7°$$

At the extreme diagonal corner ($y' = 21.6$ mm):

$$\text{CRA} \approx \arctan(21.6 / 80) \approx 15.1°$$

Now suppose a different lens places the exit pupil only 40 mm from the sensor. At the same diagonal corner:

$$\text{CRA} \approx \arctan(21.6 / 40) \approx 28.4°$$

That nearly doubled CRA — from 15° to 28° — illustrates why exit-pupil distance matters so much for digital sensors.

![Cross-section showing the exit pupil at left and the image sensor at right. The on-axis chief ray (cyan) arrives at the center pixel with CRA = 0°. The off-axis chief ray (gold) strikes the corner pixel at CRA greater than 0°. Microlenses are shown above each pixel. The exit-pupil distance d_XP and image height y′ are annotated.](/diagrams/pupils/exit-pupil.svg)

### The venetian-blind analogy

A useful mental picture: think of venetian blinds [^5]. When light arrives perpendicular to the slats, it passes through efficiently. As the angle steepens, the slats progressively block it. Modern CMOS sensor pixels present a roughly analogous geometry — each pixel has a tiny **microlens** that concentrates incoming light onto the photodiode, but the microlens is optimized for a limited range of incidence angles [^5]. (This is only a conceptual analogy; the actual sensor stack — with color filters, wiring layers, and photodiode geometry — is considerably more complex.)

When the CRA exceeds the sensor's design range, light is partially blocked by the pixel-well walls or directed to the wrong photodiode.

## What Happens When the CRA Is Too Steep

When the chief-ray angle at the sensor corners exceeds the sensor's design tolerance, three distinct problems can emerge [^5] [^6]:

**Reduced corner illumination.** Light reaching the corner pixels is partially blocked or misdirected by the pixel structure, producing luminance falloff beyond what the natural radiometric law (the cos⁴ baseline discussed in [*Why Corners Go Dark*](/articles/corner-illumination)) would predict. This is an additional, sensor-specific source of corner darkening layered on top of the optical causes.

**Color crosstalk.** Light intended for one pixel spills into adjacent pixels when the incidence angle exceeds the microlens design range, degrading both color accuracy and spatial resolution [^5].

**Color cast in corners.** If the sensor's microlens offset pattern does not match the lens's CRA distribution, the red, green, and blue color channels exhibit different falloff rates. The result is a visible color shift in the corners — typically a magenta or cyan tint — that cannot be corrected by adjusting overall exposure.

### The classic example: Rangefinder wides on digital bodies

A well-known illustration of CRA mismatch is the behavior of rangefinder-type wide-angle lenses — such as the Leica Elmarit-M 28 mm or the Zeiss Biogon 21 mm — on digital bodies [^7]. These designs were conceived for film and place the rear optical group close to the image plane, producing steep corner CRAs. On digital sensors optimized for the more moderate CRA profiles of SLR-type retrofocus wide-angles, the result is visible corner color casts — a direct consequence of the mismatch between lens and sensor.

## CRA Matching and Microlens Offset Optimization

Sensor manufacturers address the CRA challenge by shifting the positions of the microlenses progressively outward toward the sensor edges [^5] [^8]. At the center, the microlens sits directly above the photodiode. Toward the corners, each microlens is offset slightly inward (toward the optical axis) to catch the increasingly oblique chief ray and redirect it onto the photodiode below.

This is a **joint optimization** between the lens and the sensor. The microlens offset pattern is designed around an expected CRA profile — a curve showing how the CRA increases from center to corner. When the lens matches this profile, light is efficiently collected across the frame. When it produces a significantly different CRA distribution, the mismatch produces the artifacts described above.

The critical implication: the same lens can behave differently on two different sensors, and the same sensor can behave differently with two different lenses. The visible severity of corner color cast is a property of the **lens-sensor system**, not a fixed characteristic of either component alone [^8].

## Where This Leads

The CRA challenge motivates two further topics in this series. The design changes enabled by mirrorless camera mounts — shorter flange distances and wider mount throats — give designers more control over exit-pupil placement and CRA distribution ([*Mirrorless vs. SLR Lens Design*](/articles/mirrorless-lens-design)). And the theoretical limiting case of CRA control is **telecentricity** — the condition where the exit pupil is at infinity and the CRA is zero everywhere across the sensor ([*Telecentricity Explained*](/articles/telecentricity)).

> **Key Takeaways**
>
> 1. The **exit pupil** is the apparent aperture as seen from the sensor side. Its diameter and distance from the sensor determine the geometry of every image-forming light cone.
> 2. The **chief-ray angle (CRA)** increases toward the sensor corners. Digital sensors are sensitive to CRA because their microlenses are optimized for a limited range of incidence angles.
> 3. CRA compatibility is a **joint lens-sensor property** — the same lens can behave differently on different sensors, and sensor manufacturers tune their microlens offsets to an expected CRA profile.

*For the graduate-level mathematical treatment, see Sections 4.1–4.3 and 6 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Previous: [The Entrance Pupil as Projection Center](/articles/entrance-pupil-projection-center) · Next: [Why Corners Go Dark](/articles/corner-illumination)*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Burlington, MA, USA: Academic Press (Elsevier), 2010.

[^3]: S. Ray, *Applied Photographic Optics*, 3rd ed. Oxford, UK: Focal Press (Elsevier), 2002.

[^4]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, UK: Adam Hilger (IOP Publishing), 1986, ch. 9.

[^5]: G. Agranov, V. Berezin, and R. H. Tsai, "Crosstalk and microlens study in a color CMOS image sensor," *IEEE Trans. Electron Devices*, vol. 50, no. 1, pp. 4–11, Jan. 2003.

[^6]: P. B. Catrysse and B. A. Wandell, "Optical efficiency of image sensor pixels," *J. Opt. Soc. Am. A*, vol. 19, no. 8, pp. 1610–1620, Aug. 2002.

[^7]: H. H. Nasse, "Distagon, Biogon and Hologon," Carl Zeiss AG Camera Lens Division, tech. article, Dec. 2011. [Online]. Available: https://lenspire.zeiss.com/photo/app/uploads/2018/02/en_CLB41_Nasse_LensNames_Distagon.pdf.

[^8]: STMicroelectronics, "Lens CRA matching recommendations for optimal colorization," Application Note AN6472, Rev. 1, Mar. 2026. [Online]. Available: https://www.st.com/resource/en/application_note/an6472-lens-cra-matching-recommendations-for-optimal-colorization-stmicroelectronics.pdf.
