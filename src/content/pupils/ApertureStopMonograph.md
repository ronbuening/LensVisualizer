---
slug: aperture-stop-in-practice
title: "The Aperture Stop in Practice: Entrance Pupil, Exit Pupil, and Telecentricity"
summary: A graduate-level treatment of aperture stops, entrance and exit pupils, and their photographic consequences — working f-number, panorama stitching, sensor CRA compatibility, corner illumination, telecentricity, and mirrorless design advantages.
tag: guide
series: pupil-geometry
seriesOrder: 8
toc: true
---

# The Aperture Stop in Practice: Entrance Pupil, Exit Pupil, and Telecentricity

*Part 1 of a series on pupil geometry in photographic lenses. This monograph is written at a graduate level and assumes familiarity with basic geometric optics.*

---

## 1. Introduction: The Aperture You Set Is Not the Aperture the System "Sees"

When a photographer adjusts the aperture ring or command dial, the intuition is straightforward: the iris diaphragm opens or closes, admitting more or less light. The f-number changes, depth of field shifts, and the exposure follows. In daily practice, this mental model is sufficient. But it is also incomplete — and the gap between the simple model and the physical reality explains a surprising number of optical behaviors that photographers encounter but rarely trace to their source.

In optical design, the physical diaphragm — the *aperture stop* — is only the starting point. The quantities that actually govern image formation are the **entrance pupil** and **exit pupil**: virtual images of the stop, formed by the lens elements on either side of it. The entrance pupil is what the optical system presents to object space; the exit pupil is what it presents to image space. Together, they determine the geometry of every light cone that enters and exits the lens. That geometry, in turn, controls the effective f-number, the perspective projection center, the angular distribution of light arriving at the sensor, and the illumination uniformity across the image field.

This article develops these ideas from first-order definitions through practical photographic consequences, connecting classical optics to real design tradeoffs. Along the way, it covers working f-number, panorama stitching, the chief-ray angle that matters to digital sensors, the three distinct causes of corner light loss, and the concept of telecentricity as a specific structural condition rather than a vague quality label. Detailed case studies of three photographic lenses appear in Part 2.

The central claim is simple: photographers adjust a physical aperture stop, but lenses and sensors *see* the entrance and exit pupils. Understanding the distinction is the first step toward understanding nearly every design tradeoff in modern photographic optics.

---

## 2. First-Order Definitions: Stop, Pupils, Chief Ray, Marginal Ray

### 2.1 The Aperture Stop

Every imaging system contains one aperture that limits the cone of light accepted from the on-axis object point. This is the **aperture stop** [^1] [^2]. In most photographic lenses, the aperture stop is a variable-diameter iris diaphragm located somewhere between the front and rear lens groups. It is physical hardware — metal blades that form a roughly polygonal or circular opening.

The aperture stop is defined by function, not by intent. Any aperture in the system — a lens-element rim, a barrel wall, a filter ring — *could* act as the aperture stop if it happens to be the most restrictive for the axial bundle. In a well-designed photographic lens, the iris diaphragm is deliberately sized and positioned so that it is always the limiting aperture for the on-axis beam at every marked f-number. Other apertures may clip off-axis beams (producing vignetting), but the stop is the one that governs the axial cone.

### 2.2 Entrance Pupil and Exit Pupil

The **entrance pupil** is the image of the aperture stop as seen from object space — that is, the image formed by all optical elements located in front of the stop [^1] [^2]. If you look into the front of a camera lens, the bright disk you see is the entrance pupil. It is not the physical diaphragm itself; it is an image of the diaphragm, magnified or demagnified by the front group and potentially shifted in position along the optical axis.

The **exit pupil** is the image of the aperture stop as seen from image space — the image formed by all optical elements located behind the stop [^1] [^2]. If you could look into the rear of the lens from the sensor plane, the apparent aperture you would see is the exit pupil.

Put simply, the entrance pupil, the exit pupil, and the physical stop are three views of the same limiting aperture, formed by the optics on either side of the stop. More precisely, they are *conjugate* to each other through the optical system: every ray that passes through the edge of the entrance pupil also passes through the edge of the exit pupil and through the edge of the physical stop. This conjugacy means that the pupils carry exactly the same aperture-limiting information, expressed in different optical spaces.

### 2.3 Marginal Ray and Chief Ray

Two reference rays define the geometry of any rotationally symmetric optical system [^1] [^2]:

The **marginal ray** originates from the on-axis object point and grazes the edge of the aperture stop (or, equivalently, the rim of the entrance or exit pupil). It defines the system's maximum acceptance angle and therefore its light-gathering capacity. The marginal ray height at the image plane is zero (it converges to the axial image point), while its height at the stop equals the stop's semi-diameter.

The **chief ray** (also called the *principal ray* in some European texts) originates from an off-axis object point and passes through the *center* of the aperture stop. In object space, it appears to pass through the center of the entrance pupil; in image space, it appears to emerge from the center of the exit pupil. The chief ray defines the field geometry: the angle it makes with the optical axis in object space is the **field angle** (or semi-field angle, $W$), and the height at which it crosses the image plane defines the **image height**, $y'$.

Together, the marginal ray and the chief ray carry all first-order information about the system [^1] [^2] [^18]. The marginal ray encodes the aperture (how much light), and the chief ray encodes the field (where the light goes). Every first-order imaging property — f-number, magnification, field of view, pupil locations — can be extracted from these two rays traced through the paraxial system.

### 2.4 The f-Number and the Entrance Pupil

The f-number of a lens focused at infinity is defined as [^1] [^2]:

$$N = \frac{f}{D_{\text{EP}}}$$

where $f$ is the effective focal length and $D_{\text{EP}}$ is the diameter of the entrance pupil. This is not the diameter of the physical iris — it is the diameter of the iris's *image in object space*. The distinction matters. A lens whose mechanical diaphragm is 12 mm across may present a 25 mm entrance pupil if the front group magnifies the stop by a factor of approximately 2×. The photographer sees "f/2" on the lens barrel, and that f/2 is computed from the entrance-pupil diameter, not from the physical iris size. Two lenses with identical physical iris diameters can have different f-numbers if their front groups magnify the stop differently.

The image-side geometry can equivalently be described in terms of the exit pupil. The image-space numerical aperture, $\text{NA}'$, is related to the half-angle $\theta'$ subtended by the exit pupil as seen from the axial image point:

$$\text{NA}' = n' \sin \theta'$$

where $n'$ is the refractive index of the image-space medium (unity for air). For a lens focused at infinity, the paraxial relationship between f-number and numerical aperture is:

$$N \approx \frac{1}{2\,\text{NA}'}$$

This holds regardless of the pupil magnification $m_p$ (introduced in Section 4). The reason is instructive: a lens with $m_p \neq 1$ has an exit pupil that differs in diameter from the entrance pupil, but it also has an exit pupil that sits at a different distance from the image plane — specifically, at $d_{\text{XP}} = m_p \cdot f$. The $m_p$ factor in the exit-pupil diameter and the $m_p$ factor in the exit-pupil distance cancel exactly, so that $\text{NA}' = D_{\text{XP}} / (2\,d_{\text{XP}}) = m_p D_{\text{EP}} / (2\,m_p f) = D_{\text{EP}} / (2f) = 1/(2N)$. The pupil magnification does not independently appear in the $N$-to-$\text{NA}'$ relationship at infinity — its practical consequences emerge instead in the working f-number at finite conjugates (Section 3.4) and in the image-side chief-ray angle geometry (Section 4).

Either way, the f-number and the numerical aperture encode the same underlying physics — the solid angle of the light cone — viewed from opposite ends of the optical system. The f-number describes it from object space via the entrance pupil; the numerical aperture describes it from image space via the exit pupil.

---

## 3. Entrance Pupil in Practice: Apparent Aperture, Projection Center, and Panorama Rotation

### 3.1 The Entrance Pupil as Apparent Aperture

The entrance pupil is the aperture that the object "sees." Looking into the front of a photographic lens, the luminous disk visible within the glass is the entrance pupil — the virtual image of the iris diaphragm, formed by refraction through the front optical group. Its diameter, position along the axis, and apparent shape are all determined by the imaging properties of the elements in front of the stop.

This is one of the few "invisible" optical quantities that photographers can estimate directly. Hold a 50 mm f/2 lens at arm's length, look into the front element, and the bright disk you see is the entrance pupil. From the f-number equation, its diameter is $D_{\text{EP}} = f/N = 50/2 = 25$ mm — roughly the width of a U.S. quarter. The physical iris inside the lens may be considerably smaller; what you are seeing is that iris magnified by the front group.

Because the front group acts as an imaging system for the stop, the entrance pupil may be larger or smaller than the physical diaphragm, and it may be located in front of, behind, or within the front group. In a simple design where the stop is the frontmost element (as in some view-camera lenses or pinhole cameras), the entrance pupil coincides with the physical stop. But in any lens with optical elements ahead of the stop — which includes virtually all modern photographic lenses — the entrance pupil is displaced and scaled relative to the stop.

For the Leica APO-Summicron-M 35 f/2 ASPH., Leica explicitly publishes the entrance-pupil position: **13.8 mm in front of the lens bayonet mount** [^15]. The f-number equation gives $D_{\text{EP}} = 35/2 = 17.5$ mm — the bright disk you see looking into the front of this lens is roughly 17.5 mm across, even though the physical iris and barrel are substantially different in both size and location. This is one of the few cases where a manufacturer publishes a hard number for entrance-pupil position, making it a useful reference. (A detailed examination of this lens's pupil behavior appears in Part 2.)

### 3.2 Projection Center and Perspective Geometry

In rectilinear (non-fisheye) imaging, the entrance pupil acts as the **projection center** — the point from which the lens maps angular positions in object space to linear positions on the image plane [^2] [^3]. The fundamental relationship for a rectilinear lens focused at infinity is:

$$y' = f \tan W$$

where $y'$ is the image height (distance from the optical axis on the image plane), $f$ is the effective focal length, and $W$ is the semi-field angle — the angle the chief ray from an off-axis object point makes with the optical axis in object space. This equation describes ideal rectilinear projection: straight lines in the scene map to straight lines in the image, and the mapping is governed by the tangent of the field angle.

The projection center is the point from which these angular relationships are measured. In paraxial theory, it is located at the center of the entrance pupil. This is the reason the entrance pupil, rather than the front element or the lens's center of mass, is the geometrically meaningful reference point for perspective.

### 3.3 Panorama Rotation and the No-Parallax Point

The projection-center property of the entrance pupil has a direct practical consequence: when stitching panoramic images, the camera should be rotated about the entrance pupil to minimize parallax between overlapping frames.

When the rotation axis coincides with the entrance pupil, near and far objects maintain the same angular relationships across frames, and the overlapping regions register correctly. When the rotation axis is displaced from the entrance pupil — for example, when the camera rotates about the tripod socket — near objects shift laterally relative to far objects between frames. This parallax shift produces visible misregistration in the stitched panorama, particularly when the scene contains objects at substantially different distances from the camera.

In practice, panorama-head manufacturers provide adjustment rails that allow the photographer to position the rotation axis at the entrance pupil. The adjustment is lens-specific because the entrance pupil position depends on the lens design. For lenses that publish the entrance pupil location (such as the Leica APO-Summicron-M 35 f/2 ASPH., at 13.8 mm before the bayonet), the setup is straightforward. For lenses that do not, the position must be found empirically by adjusting the camera position on the rail until parallax vanishes between near and far targets.

> **Sidebar: "Nodal Point" versus Entrance Pupil**
>
> Photographers frequently refer to the panorama rotation point as the "nodal point." This is technically inaccurate. The **nodal points** are cardinal points defined by unit angular magnification — a property of the principal planes, not of the aperture stop [^2] [^3]. In the simplest single-thin-lens teaching model — especially when the stop is treated as lying in the lens plane — the nodal points, principal points, and pupils are all represented as coincident. That simplification likely explains why the conflation persists. In a real multi-element lens, they generally do not coincide. The **entrance pupil** is the correct term for the no-parallax point, because it is the entrance pupil that defines the projection center.

### 3.4 Working f-Number: Why f/2.8 Changes at Close Range

The f-number engraved on a lens barrel is the *infinity-conjugate* f-number — valid when the lens is focused at infinity. At closer working distances, the effective f-number increases because the image conjugate lengthens: the image is formed farther from the rear principal plane, and the exit pupil subtends a smaller angle as seen from the image plane. The light per unit area on the sensor decreases accordingly.

For a conventional lens (one that focuses by changing the overall lens-to-sensor distance without altering its internal optics), the effective f-number at magnification $m$ is [^2] [^4]:

$$N_{\text{eff}} = N\,(1 + m)$$

where $N$ is the marked (infinity-conjugate) f-number and $m$ is the image magnification (positive, defined as the ratio of image height to object height). At 1:1 macro magnification ($m = 1$), the effective f-number doubles: a lens marked f/2.8 behaves as f/5.6, a two-stop loss. Every macro photographer has experienced the practical consequence — significant exposure compensation at high magnification — even though the physical iris has not changed.

When pupil magnification ($m_p$, defined in Section 4) differs from unity, the more general expression is [^2] [^4]:

$$N_{\text{eff}} = N\left(1 + \frac{m}{m_p}\right)$$

This accounts for the fact that the exit pupil, not the entrance pupil, determines the solid angle subtended at the image plane. For lenses with $m_p \neq 1$, the exposure penalty at a given magnification differs from the simple $(1 + m)$ rule.

Internally focusing lenses partially decouple this relationship because they change the effective focal length and pupil geometry as they focus, rather than simply extending the image conjugate. The effective f-number still changes, but the relationship between magnification and exposure loss becomes design-specific and cannot be predicted from the infinity f-number alone. (For a detailed treatment of how internal focusing architectures affect pupil and conjugate geometry, see the [*Internal Focusing in Photographic Lens Design*](/articles/internal-focusing-monograph) monograph elsewhere on this site.)

---

## 4. Exit Pupil in Practice: Image-Side Light Cones, Chief-Ray Angle, and Sensors

### 4.1 The Exit Pupil and Image-Side Geometry

The exit pupil is the image-side apparent aperture — the image of the stop formed by the optical elements behind it. It is the aperture from which, in the paraxial model, all image-side ray bundles appear to originate. This means that if you trace any ray from the image plane backward through the rear group, it will appear to have come from the exit pupil — just as, in object space, every ray that enters the lens appears to pass through the entrance pupil.

The exit pupil's diameter and axial position jointly determine the geometry of the light cones that converge onto the image plane. A large exit pupil close to the sensor produces wide, steeply angled cones; a smaller exit pupil farther from the sensor produces narrower cones at shallower angles. These two parameters — size and distance — control everything the sensor experiences: the f-number of the arriving light, the angular spread of each image-forming bundle, and the obliquity at which off-axis bundles strike the sensor surface.

For the axial image point, the exit pupil subtends a half-angle $\theta'$ whose sine gives the image-space numerical aperture. For off-axis image points, the angle between the chief ray and the optical axis at the image plane is the **chief-ray angle (CRA)** — a quantity of central importance to digital sensor performance, as we shall see.

### 4.2 Pupil Magnification

The **pupil magnification** is the ratio of the exit-pupil diameter to the entrance-pupil diameter [^2] [^4]:

$$m_p = \frac{D_{\text{XP}}}{D_{\text{EP}}}$$

where $D_{\text{XP}}$ and $D_{\text{EP}}$ are the diameters of the exit and entrance pupils, respectively. This ratio links the object-side and image-side cone geometries and participates directly in the generalized illumination law (discussed below) and in the effective f-number expression at finite conjugates.

For most photographic lenses, $m_p \neq 1$, meaning the exit pupil is a different size than the entrance pupil:

- **Telephoto designs** typically have $m_p < 1$ (often in the range 0.5–0.8 for long telephotos): the exit pupil is smaller than the entrance pupil. The rear group acts as a telephoto relay, compressing the beam. This is a natural consequence of the positive-front / negative-rear power distribution that shortens the physical length below the focal length.

- **Retrofocus (inverted telephoto) wide-angle designs** typically have $m_p > 1$ (commonly 1.2–2.0 or higher for ultra-wides): the exit pupil is larger than the entrance pupil. The negative-front / positive-rear power distribution that produces a long back focal distance also magnifies the stop image in image space.

Pupil magnification matters because the exit pupil — not the entrance pupil — is what the sensor "sees." Two lenses with identical f-numbers (identical entrance-pupil diameters relative to focal length) can deliver different image-side cone geometries if their pupil magnifications differ.

Pupil magnification also affects close-range depth-of-field behavior. In simplified photographic formulae, front and rear depth of field are often treated using assumptions that ignore pupil asymmetry. When $m_p \neq 1$, the near/far balance of depth of field is modified because the image-side and object-side cone geometries are no longer symmetric. For telephoto designs with $m_p < 1$, the rear depth of field tends to be compressed relative to the front; for retrofocus designs with $m_p > 1$, the tendency is reversed. The effect is usually modest at ordinary working distances but becomes more significant at high magnification, where it compounds with the working-f-number shift discussed in Section 3.4.

### 4.3 Chief-Ray Angle and Sensor Compatibility

The **chief-ray angle (CRA)** at the image plane is the angle the chief ray makes with the optical axis where it crosses the sensor surface. In the paraxial model, the CRA at any image height $y'$ is determined by the position of the exit pupil:

$$\tan(\text{CRA}) = \frac{y'}{d_{\text{XP}}}$$

where $d_{\text{XP}}$ is the distance from the exit pupil to the image plane (positive when the exit pupil is in front of the image plane). When the exit pupil is close to the sensor, the CRA increases steeply toward the field corners. When the exit pupil is far from the sensor, the CRA remains small even at large image heights.

For film-based cameras, the CRA was of relatively minor importance — silver halide emulsion responds to photons largely regardless of their angle of incidence. For digital sensors, the CRA is critical [^20].

The intuition is straightforward: think of venetian blinds. When light arrives perpendicular to the slats, it passes through efficiently. As the angle of incidence steepens, the slats progressively block it. Modern CMOS sensor pixels present a similar geometry. Microlens arrays positioned over each pixel concentrate incoming light onto the photodiode, but these microlenses are optimized for a specific range of incidence angles [^20]. When the CRA exceeds the design angle, light arriving at the pixel well is partially blocked by the walls of the pixel structure or directed to the wrong photodiode, causing:

- **Reduced corner illumination** — luminance falloff beyond what the natural radiometric law predicts.
- **Color crosstalk** — light intended for one pixel spills into adjacent pixels, degrading color accuracy and resolution [^20].
- **Color cast in corners** — if the microlens offset pattern does not match the lens's CRA distribution, the red, green, and blue channels may exhibit different falloff rates, producing a visible color shift.

Sensor manufacturers address this by shifting the microlens positions progressively outward toward the sensor edges (a technique called *microlens offset optimization* or *CRA matching*), but this optimization is tuned to a specific expected CRA profile [^20] [^21]. Lenses that deviate significantly from the expected profile may produce visible artifacts on sensors not designed for their CRA distribution. A well-known example is the behavior of rangefinder-type wide-angle lenses — such as the Leica Elmarit-M 28 mm or the Zeiss Biogon 21 mm — on digital bodies. These designs place the rear optical group relatively close to the sensor and can produce substantially steeper image-side chief-ray angles at the field corners than retrofocus SLR-type wide-angles. On sensors whose microlens arrays are optimized for the more moderate CRA profiles of SLR-type retrofocus designs, the result is visible magenta or cyan color casts in the corners — a direct, practical consequence of CRA mismatch [^14].

It is worth noting that the sensor-side consequences depend not only on the lens's CRA distribution, but also on the specific sensor stack, microlens offsets, pixel geometry, and color filter arrangement. The same lens may behave differently on two sensors with different CRA optimization profiles. The visible severity of corner color cast, in particular, is a joint property of the lens-sensor system — not a stable characteristic of the lens by itself.

The exit pupil, pupil magnification, and chief-ray angle together form the image-side counterpart to the entrance-pupil geometry discussed in Section 3. The entrance pupil governs how the lens collects light; the exit pupil governs how that light is delivered to the sensor. The next section turns to the question of *how much* light arrives at each point across the image field — the problem of corner illumination.

---

## 5. Corner Illumination: The cos⁴ Law, Vignetting, and Pupil Aberrations

### 5.1 Natural Radiometric Falloff and the cos⁴ Law

Corner illumination falloff in a photographic image has multiple contributing causes, and conflating them leads to confusion. The most fundamental is the **natural (radiometric) falloff** that arises from the geometry of oblique imaging itself, independent of any lens defect.

For an idealized thin lens imaging a Lambertian (uniformly bright) scene, the relative irradiance $E$ at an image point corresponding to an off-axis object at semi-field angle $W$ (measured in object space at the entrance pupil) follows [^2] [^8] [^17] [^19]:

$$\frac{E(W)}{E(0)} = \cos^4 W$$

This is the classical **cos⁴ law** of illumination falloff. To understand where the four powers of cosine come from, imagine two small patches of a uniformly bright scene — one on the optical axis, one at semi-field angle $W$. Consider the imaging of each patch through the same thin lens, and compare the irradiance each produces on the image plane.

Three things change for the off-axis patch relative to the on-axis one:

First, the entrance pupil appears **foreshortened**. Seen from the off-axis object point, the circular pupil is viewed obliquely and appears as an ellipse with its area reduced by a factor of $\cos W$. Less pupil area means less light collected: one factor of $\cos W$.

Second, the off-axis image point is **farther from the lens** (and from the exit pupil, which for a thin lens sits at the lens). The axial image point is at distance $f$ from the lens; the off-axis image point is at distance $f / \cos W$, because the chief ray to that point travels along a longer, oblique path. Irradiance falls off as the inverse square of distance, so the distance increase by a factor of $1/\cos W$ introduces a factor of $\cos^2 W$: two more powers of cosine.

Third, the light cone arriving at the off-axis image point strikes the sensor surface **obliquely**, spreading its energy over a larger area than a normally-incident cone would. The area increase is $1/\cos W$, giving one more factor of $\cos W$ in irradiance.

The product of these three contributions — one from foreshortening, two from inverse-square distance, and one from oblique incidence — yields $\cos^4 W$.

**Critical clarification:** The angle $W$ in this classical derivation is the *object-space semi-field angle* — the angle the chief ray makes with the axis as measured at the entrance pupil. For a thin lens, this equals the image-space chief-ray angle because the entrance and exit pupils coincide. But in a real multi-element lens, the object-space field angle and the image-space CRA are generally different quantities related through the pupil magnification and the lens's power distribution. The distinction is essential: the entire point of telecentric design (Section 6) is to make the image-space CRA approach zero even when the object-space field angle is large.

The following table gives the classical $\cos^4 W$ values for representative field angles:

| $W$ (degrees) | $\cos^4 W$ | Relative illumination | Falloff (stops) |
|:-:|:-:|:-:|:-:|
| 0° | 1.000 | 100.0% | 0.0 |
| 5° | 0.985 | 98.5% | 0.0 |
| 10° | 0.941 | 94.1% | 0.1 |
| 15° | 0.871 | 87.1% | 0.2 |
| 20° | 0.780 | 78.0% | 0.4 |
| 25° | 0.675 | 67.5% | 0.6 |
| 30° | 0.563 | 56.3% | 0.8 |
| 35° | 0.450 | 45.0% | 1.2 |
| 40° | 0.344 | 34.4% | 1.5 |

For a 35 mm focal length on a full-frame sensor (43.3 mm image diagonal), the corner half-field angle is approximately 31.8°, giving a classical cos⁴ falloff to about 52% — nearly a full stop of light loss in the corners from radiometric geometry alone, before any vignetting enters the picture.

In real lenses, the actual illumination falloff is governed by a more general expression. Three additional factors modify the classical cos⁴ result: the off-axis pupil area may differ from the on-axis area (due to pupil aberrations), the effective ray angle depends on the full system geometry (not just the paraxial field angle), and image distortion changes the local image-area scaling. The generalized illumination law incorporates these factors. The following expression collects, in schematic first-order form, the principal modifying factors identified across several treatments [^4] [^5] [^8] [^9] [^10]:

$$\frac{E(W)}{E(0)} \approx \frac{A_{\text{EP}}(W)}{A_{\text{EP}}(0)} \cdot \cos^4 W_{\text{eff}} \cdot (1 + D)^2$$

where $A_{\text{EP}}(W)/A_{\text{EP}}(0)$ is the ratio of the off-axis entrance-pupil area to the on-axis area (accounting for pupil aberrations), $W_{\text{eff}}$ incorporates corrections for the actual ray geometry, and $D$ is the fractional image distortion at that field position. (Strictly, the distortion correction involves the Jacobian of the distortion mapping — for radially symmetric distortion, the full form is $[(1+D) + y'\,dD/dy']^2$ rather than $(1+D)^2$ — but the simplified form captures the leading-order effect for moderate distortion levels.)

> **Sidebar: Three Distinct Sources of Corner Light Loss**
>
> Corner darkening in a photographic image can arise from three fundamentally different mechanisms, each with its own cause, aperture dependence, and correction strategy [^2] [^13]:
>
> 1. **Natural (radiometric) falloff** — the cos⁴-type dependence arising from the geometry of oblique imaging: reduced projected aperture area, increased image distance, and oblique incidence on the image surface. This falloff depends on the field angle and the pupil geometry; it is *independent of f-number* and cannot be reduced by stopping down.
>
> 2. **Optical vignetting (cat's-eye effect)** — off-axis beams are clipped by lens-element rims, barrel edges, or other internal apertures that are not the stop itself. The result is that the exit pupil, as seen from an off-axis image point, appears truncated into a cat's-eye or lemon shape rather than a circle. Optical vignetting is typically the *dominant* source of corner falloff at wide apertures in fast lenses, and it *does* decrease with stopping down.
>
> 3. **Mechanical vignetting** — physical obstruction by non-optical hardware: lens hoods, filter rings, extension tubes, mount flanges, or adapter rings. This produces a sharp falloff or complete blackening at the image periphery and is corrected by removing the obstruction.

### 5.2 Pupil Aberrations: A Brief Acknowledgment

The entrance and exit pupils as described so far are paraxial idealizations — they are fixed in size, shape, and position regardless of where in the field the light originates. In real lenses, the pupils shift in position, change in size, and distort in shape as a function of field angle. These are the **pupil aberrations**, and they are the image-space analogs of the familiar image aberrations (spherical, coma, astigmatism, etc.), applied to the pupil rather than to the image.

Pupil aberrations have practical consequences [^4] [^7]. Pupil coma, for example, causes the apparent entrance-pupil area to vary with field angle, directly modifying the relative illumination profile. If pupil coma reduces the effective pupil area for off-axis field points, the illumination falls off faster than cos⁴ — sometimes approximated as cos⁵ for designs with significant pupil coma [^4] [^11]. Conversely, if pupil coma enlarges the off-axis pupil, the illumination can be partially compensated.

Pupil aberrations are related to, but distinct from, the **cat's-eye effect** visible in the out-of-focus highlights of fast lenses. The cat's-eye shape is primarily a consequence of *optical vignetting* — hard clipping of off-axis beams by lens-element rims and barrel edges that are not the stop itself. This clipping truncates the circular exit pupil into an elongated or lemon-shaped outline as seen from off-axis image points. Pupil aberrations further modify this shape by shifting, scaling, or distorting the underlying pupil, but the dominant cause of the characteristic cat's-eye truncation is the off-axis clipping by internal apertures — that is, optical vignetting — rather than the pupil aberration itself.

The full treatment of pupil aberrations — their classification within the Seidel framework, their relationship to stop-shift equations, and their practical consequences for illumination and CRA prediction — belongs in a dedicated article.

---

## 6. Telecentricity: Object-Space, Image-Space, and Double Telecentric Systems

### 6.1 Definitions

Telecentricity is a specific geometric condition of the pupil, not a vague synonym for "digital-friendly" or "well-corrected." It has a precise definition with two independent forms [^6] [^12]:

- A lens is **object-space telecentric** when the entrance pupil is located at infinity in object space. The chief rays in object space are then parallel to the optical axis for all field angles.

- A lens is **image-space telecentric** when the exit pupil is located at infinity in image space. The chief rays in image space are then parallel to the optical axis for all field points — that is, the CRA is zero everywhere across the image plane.

- A lens is **double telecentric** (or *bi-telecentric*) when both conditions hold simultaneously.

Note also that telecentricity is independent of distortion: a telecentric lens can still exhibit barrel or pincushion distortion, and a non-telecentric lens can be well-corrected for distortion.

### 6.2 The Structural Mechanism: How Telecentricity Is Achieved

Telecentricity is not an emergent property that appears when a lens happens to be well-designed. It is a consequence of a specific geometric relationship between the aperture stop and the optical groups surrounding it.

**Object-space telecentricity** requires placing the aperture stop at the **rear focal point of the front optical group** [^1] [^6] [^12]. When the stop sits at this location, the front group images it to infinity in object space: rays from the stop center, traced backward through the front group, emerge parallel to the axis. The entrance pupil is therefore at infinity, and all chief rays in object space are parallel to the axis.

**Image-space telecentricity** requires the complementary arrangement: the aperture stop must be placed at the **front focal point of the rear optical group**. The rear group then images the stop to infinity in image space, placing the exit pupil at infinity. All chief rays in image space emerge parallel to the optical axis, and the CRA is zero at every point on the sensor.

**Double telecentricity** requires that both conditions be satisfied simultaneously. This imposes tight constraints on the power distribution and physical layout of the system: the inter-group spacing, the focal lengths of the front and rear groups, and the total system length are all coupled.

### 6.3 Practical Consequences

**Object-space telecentricity** stabilizes magnification against changes in object distance. Because the chief rays are parallel in object space, objects at different distances within the depth of field are imaged at the same magnification. This property is essential in machine-vision gauging and metrology. It is also why telecentric lenses in these applications have a field of view limited by the physical diameter of the front element — since the chief rays are parallel, the lens cannot "look around" an object larger than itself.

**Image-space telecentricity** means the chief rays arrive perpendicular to the sensor across the entire field. Recall from Section 4.3 that the CRA at image height $y'$ is given by $\tan(\text{CRA}) = y'/d_{\text{XP}}$, where $d_{\text{XP}}$ is the exit-pupil-to-sensor distance. When the exit pupil moves to infinity ($d_{\text{XP}} \to \infty$), the CRA goes to zero at every field position. This removes the image-side chief-ray obliquity that causes the sensor-angle-sensitivity problems discussed in Section 4.3.

**Double telecentricity** combines both benefits but imposes the tightest constraints. Double telecentric designs are used in metrology, lithography, and inspection — not in general-purpose photography.

### 6.4 Most Photographic Lenses Are Not Strictly Telecentric

Strict telecentricity requires the aperture stop to be placed at a group focal point, and this placement conflicts with other design goals: compactness, zoom-range flexibility, aberration correction across the field, and the requirement to focus from infinity to close range. General-purpose photographic lenses are *not* telecentric.

What many modern digital-era lens designs do pursue is *more favorable rear-ray geometry* than earlier designs could achieve. By careful placement and power distribution of the rear group — enabled in part by the design freedoms of mirrorless mounts (Section 7) — designers can reduce the maximum image-side CRA at the field corners. This reduction is genuinely beneficial for sensor compatibility, but it is a **design tendency on a continuum**, not a binary telecentric/non-telecentric classification.

---

## 7. From Theory to Photographic Practice: Why Mirrorless Mount Geometry Matters

### 7.1 Flange Distance and Design Freedom

The transition from SLR to mirrorless camera systems removed one of the most constraining geometric requirements in lens design: the need to provide clearance for a swinging reflex mirror between the rear of the lens and the image plane. SLR mount systems — the Nikon F-mount (46.5 mm flange distance), Canon EF (44 mm), Pentax K (45.5 mm) — required that no optical or mechanical element intrude into the mirror box volume. This forced the rearmost lens element to sit far from the sensor, limiting the designer's control over the image-side ray geometry.

Mirrorless mounts dramatically reduce this constraint. The Nikon Z mount, for example, provides a 55 mm inner diameter and a 16 mm flange focal distance [^16]. The difference in flange distance — 46.5 mm for the F-mount versus 16 mm for the Z mount — does not translate directly into "30.5 mm of extra space for optics." Even F-mount lenses routinely extend rear elements behind the flange plane into the mirror box. What changes is that the region between the mount plane and the sensor, which in an SLR must remain clear for mirror swing, is now available for optical elements. The designer can place glass closer to the sensor without competing for space with the mirror mechanism.

### 7.2 What Short Flange Distance Changes Optically

The increased freedom has several consequences for pupil geometry. The following claims are *design inferences* — they follow from first-order optical principles applied to the changed geometric constraints. They are not derived from published manufacturer data on specific pupil positions or CRA distributions.

**Exit-pupil placement.** The short flange distance and large mount throat can make favorable image-side chief-ray control easier to achieve, because they give the designer more freedom in rear-group placement and power distribution. The benefit is especially relevant for wide-angle and ultra-wide-angle designs, where the large object-space field angle would otherwise tend to produce correspondingly large image-side chief-ray angles.

**Rear-group power distribution.** Placing optical elements closer to the sensor allows the rear group to carry more negative or corrective power near the image plane, where it can most effectively influence field curvature, astigmatism, and chief-ray angle distribution.

**Entrance-pupil freedom (indirect).** When the rear group carries more of the burden of field-curvature correction, CRA control, and astigmatism management, the front group may be optimized more aggressively for entrance-pupil size and spherical-aberration control. This is consistent with the trend toward very fast primes (f/1.2, f/0.95) in mirrorless systems.

### 7.3 What Mount Geometry Does Not Prove

The expanded design envelope of a mirrorless mount does **not** prove that any particular lens built for that mount is telecentric, achieves a specific maximum CRA, or delivers superior corner illumination. These are design outcomes that depend on the specific optical prescription, not on the mount specification alone.

---

## 8. Common Misconceptions and Clean Corrections

**"The aperture stop and the entrance pupil are the same thing."** They are not. The aperture stop is a physical piece of hardware — the iris diaphragm. The entrance pupil is its virtual image, formed in object space by the optics in front of the stop. They coincide only in the special case where there are no optical elements in front of the stop.

**"Telecentric means distortion-free."** Telecentricity and distortion are related only indirectly. An image-space telecentric lens produces zero CRA at the sensor, but telecentricity does not eliminate optical distortion. A telecentric lens can exhibit barrel or pincushion distortion; a non-telecentric lens can be well-corrected for distortion.

**"A telecentric lens sends all rays perpendicular to the sensor."** In an image-space telecentric lens, the **chief rays** in image space are parallel to the optical axis — they arrive perpendicular to the sensor. But the full cone of rays from each field point still has angular extent determined by the f-number. What telecentricity ensures is that the *center* of each cone is normal to the sensor, not that every ray within the cone is.

**"The panorama rotation point is the nodal point."** The entrance pupil is the correct and less misleading term for the no-parallax rotation point. The nodal points describe unit angular magnification — a different property — and are not, in general, coincident with the entrance pupil.

**"Wide-angle corner shading is all just vignetting."** Corner darkening in wide-angle images arises from at least three distinct mechanisms: natural radiometric falloff (cos⁴-type), optical vignetting (beam clipping by element rims), and mechanical vignetting (obstruction by hoods, filters, or adapters). Each has different causes, different aperture dependencies, and different correction strategies.

**"Stopping down always fixes corner shading."** Stopping down does reduce the contribution from optical vignetting, often dramatically. But the natural cos⁴-type falloff persists at all apertures because it depends on the obliquity of the imaging geometry, not on the size of the aperture.

---

## 9. Conclusion: The Invisible Geometry Behind Visible Imaging Behavior

The aperture stop is what the photographer touches — a mechanical iris with metal blades that open and close. But the optical system negotiates something more subtle: two invisible apertures, the entrance pupil and exit pupil, that exist only as images of the physical stop, formed by the lens groups on either side.

The entrance pupil governs what the lens presents to the world: the effective aperture diameter that determines the f-number, the projection center that defines perspective geometry, the no-parallax point that matters for panoramic stitching, and the working f-number that changes with magnification. The exit pupil governs what the lens presents to the sensor: the image-side light cone geometry, the chief-ray angle distribution, and the angular compatibility with microlens arrays and pixel structures. Between them, these two images of the stop encode nearly every first-order property of the imaging system.

Telecentricity — the condition in which one or both pupils sit at infinity — reveals what chief-ray control actually does and what it costs. Placing the exit pupil at infinity forces the chief rays to arrive normal to the sensor at every field position, suppressing the angular-dependent illumination and color-response problems that constrain digital imaging. But achieving this requires a specific structural commitment: the stop must sit at a group focal point, and that placement imposes constraints on the power distribution, physical size, and aberration-correction flexibility of the lens. It is a design tradeoff, not a free improvement.

The photographer turns a ring and watches the diaphragm open or close. But what the lens actually negotiates — between object space and image space, between collection angle and incidence angle, between design freedom and physical constraint — is the geometry of two invisible apertures that exist only as images of the one the photographer can touch.

---

*This article is Part 1 of a series on pupil geometry in photographic lenses. For the companion primer series, see [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry). Part 2 — "Pupils in Practice: Case Studies" — examines entrance-pupil, exit-pupil, and telecentric design tradeoffs in three specific photographic lenses.*

[^1]: J. E. Greivenkamp, "Stops and pupils," OPTI 502 course notes, College of Optical Sciences, Univ. Arizona, 2019.

[^2]: W. J. Smith, *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2008, chs. 6, 8.

[^3]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Academic Press (Elsevier), 2010.

[^4]: W. T. Welford, *Aberrations of Optical Systems*. Adam Hilger (IOP Publishing), 1986, ch. 9.

[^5]: J. Sasián, *Introduction to Aberrations in Optical Imaging Systems*. Cambridge Univ. Press, 2013.

[^6]: J. Sasián, *Introduction to Lens Design*. Cambridge Univ. Press, 2019.

[^7]: J. Sasián, "Pupil aberrations," OPTI 518 lecture notes, College of Optical Sciences, Univ. Arizona, 2014; rev. 2021.

[^8]: M. Reiss, "The cos⁴ law of illumination," *J. Opt. Soc. Am.*, vol. 35, no. 4, pp. 283–288, 1945.

[^9]: M. Reiss, "Notes on the cos⁴ law of illumination," *J. Opt. Soc. Am.*, vol. 38, no. 11, pp. 980–986, 1948.

[^10]: D. Reshidko and J. Sasián, "Geometrical irradiance changes in a symmetric optical system," *Opt. Eng.*, vol. 56, no. 1, p. 015104, 2017.

[^11]: H. Slevogt, "Zur Definition der Lichtstärke optischer Systeme," *Phys. Z.*, vol. 40, pp. 658–667, 1939.

[^12]: Edmund Optics, "Telecentric design topics," *Imaging Resource Guide*, sec. 4.4. [Online]. Available: https://www.edmundoptics.com/knowledge-center/application-notes/imaging/telecentric-design-topics/. Accessed: Apr. 2026.

[^13]: Edmund Optics, "Sensor relative illumination, roll-off, and vignetting," *Imaging Resource Guide*. [Online]. Available: https://www.edmundoptics.com/knowledge-center/application-notes/imaging/sensor-relative-illumination-roll-off-and-vignetting/. Accessed: Apr. 2026.

[^14]: H. H. Nasse, "Distagon, Biogon and Hologon," Carl Zeiss AG Camera Lens Division, technical article, Dec. 2011. [Online]. Available: https://lenspire.zeiss.com/photo/app/uploads/2018/02/en_CLB41_Nasse_LensNames_Distagon.pdf

[^15]: Leica Camera AG, "APO-Summicron-M 35 f/2 ASPH. — Technical specification." [Online]. Available: https://leica-camera.com/en-US/photography/lenses/m/apo-summicron-m-35-f2-asph-black-anodized-finish/technical-specification. Accessed: Apr. 2026.

[^16]: Nikon Corp., "Nikon Z series: Z mount system." [Online]. Available: https://www.nikonusa.com/learn-and-explore/c/products-and-innovation/nikon-z-series-z-mount-system. Accessed: Apr. 2026.

[^17]: D. A. Kerr, "Derivation of the 'cosine fourth' law for falloff of illuminance across a camera image," technical note, 2007.

[^18]: M. Born and E. Wolf, *Principles of Optics*, 7th ed. Cambridge Univ. Press, 1999, ch. 4.

[^19]: V. N. Mahajan, *Optical Imaging and Aberrations*, Part I: Ray Geometrical Optics. SPIE Press, 1998.

[^20]: G. Agranov, V. Berezin, and R. H. Tsai, "Crosstalk and microlens study in a color CMOS image sensor," *IEEE Trans. Electron Devices*, vol. 50, no. 1, pp. 4–11, 2003.

[^21]: STMicroelectronics, "Lens CRA matching recommendations for optimal colorization," Application Note AN6472, Rev. 1, Mar. 2026. [Online]. Available: https://www.st.com/resource/en/application_note/an6472-lens-cra-matching-recommendations-for-optimal-colorization-stmicroelectronics.pdf
