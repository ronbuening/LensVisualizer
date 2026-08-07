---
slug: spherical-aberration-technical
title: "Spherical Aberration: From Optical Error to Creative Design Tool"
summary: A rigorous treatment of how lens designers suppress, balance, and deliberately retain spherical aberration across aperture, focus, wavelength, and pupil zone.
tag: article
series: spherical-aberration
seriesOrder: 2
toc: true
---

# Spherical Aberration: From Optical Error to Creative Design Tool

> **This is the technical version.** For a shorter, photographer-focused explanation without the mathematical appendix, read [Spherical Aberration for Photographers](/articles/spherical-aberration-essentials/). The [series introduction](/articles/spherical-aberration/) links both versions.

A point in the scene should become a point in the image. That compact statement is one of geometrical optics' most useful ideals, and one of its most persistent simplifications. In a real photographic lens, rays from an on-axis object point can enter through different zones of the aperture and reach their narrowest convergence at different axial positions. Instead of one universal focus, the lens produces a distribution of ray crossings. The image plane must be placed somewhere within that distribution.

That failure of the pupil zones to agree is *spherical aberration*. It is commonly introduced as a defect that makes a lens soft at large apertures, then recedes when the lens is stopped down. Both statements are often true, but they are incomplete. Spherical aberration can reduce contrast while leaving a recognizable fine-detail core. It can move the effective best-focus plane as the aperture changes. It can make foreground and background defocus behave differently. It can vary with wavelength, producing spherochromatism even when ordinary axial color is otherwise well controlled. Most importantly, it can be shaped rather than merely minimized.[^1] [^2]

Lens designers manage the residual and its imaging consequences through surface curvature, lens bending, glass choice, the division of power among elements, aspherical surfaces, focus-dependent group movement, and the weighting of the pupil through transmission or aperture. In some lenses they deliberately retain or vary it. A controlled residual can place a concentrated core inside a broader halo, bias the light distribution of out-of-focus disks, or allow the photographer to exchange one foreground–background rendering for another. The design objective is therefore rarely "zero spherical aberration" in an absolute sense. It is a useful distribution of residual error across pupil zone, aperture, wavelength, field position, and focus distance.

> **About the figures.** The explanatory figures are simplified, static schematics: they are not computed from named prescriptions, dimensionally accurate, or interactive. In blur-disk comparisons, displayed diameter is normalized to emphasize radial weighting; integrated energy, peak intensity, and exposure are not quantitative. Lens-specific discussion links to implemented Surface & Stop models, including the [Nikon AF DC-Nikkor 135mm f/2D](/lens/nikon-af-dc-nikkor-135mm-f2/). Those pages are patent-derived simulations rather than production-sample measurements.

> **At a glance.** Four ideas organize the discussion: pupil zones may prefer different focus positions; aperture changes which zones contribute; the radial weighting of defocus tends to reverse on opposite sides of focus; and wavelength can change the spherical-aberration balance. The case studies show how designers suppress, retain, or deliberately vary those effects.

> **Working terms.** A *pupil zone* is an annular region of the aperture. *Paraxial* rays pass close to the optical axis; *marginal* rays pass near the admitted pupil edge. Their envelope of crossings is the *caustic*. *LSA* records where pupil zones cross the axis, *TSA* records their intercepts at a selected image plane, the *PSF* describes the resulting point-intensity distribution, and the *MTF* describes contrast transfer by spatial frequency. In this article, *undercorrected* means marginal rays focus objectward of the paraxial focus; *overcorrected* means they focus imageward.

## 1. One Point, Many Foci

Imagine a distant point source centered on the optical axis. Its rays reach the lens as a nearly parallel bundle. A ray passing close to the axis encounters the system under relatively gentle conditions and is well described by paraxial optics. A ray passing through a middle zone of the entrance pupil follows a steeper path. A marginal ray near the pupil edge encounters the strongest refractions and the greatest departures from paraxial assumptions.

If the lens were perfect for that object point and wavelength, all of those rays would emerge toward the same image point. In a lens with residual spherical aberration, their axial intersections spread along the optical axis. The near-axis rays may converge farther from the lens while the marginal rays converge closer to it, or the order may be reversed. Between the most extreme crossings lies a narrow three-dimensional envelope called a *caustic*. The caustic, rather than a single geometrical focus, is the more faithful picture of what the ray bundle is doing.[^3] [^4]

![Figure 1. One point, a continuum of axial crossings. Paraxial, zonal, and marginal rays form a caustic rather than several isolated ideal foci.](/diagrams/spherical-aberration/01-caustic.svg)

The practical result depends on where the image plane intersects this bundle. At one plane, the marginal rays may form a broad disk while the central zones remain concentrated. At another, the marginal zones may cross and spread in the opposite direction. Usually somewhere within the caustic—often between the paraxial and marginal foci—a selected criterion such as minimum spot radius, maximum central intensity, maximum contrast at a chosen spatial frequency, or visual appearance will identify a useful image plane. Those criteria do not necessarily select the same plane.

The name *spherical aberration* comes from its classical association with spherical refracting and reflecting surfaces. It does not mean that every spherical surface produces an unusable result, nor that an all-spherical photographic lens must be poorly corrected. The contributions of many spherical surfaces can be arranged to oppose one another. Conversely, the presence of an aspherical surface does not guarantee that the complete lens has negligible spherical aberration. An asphere is an additional degree of freedom; the final correction still depends on the whole system.[^1] [^5]

Spherical aberration is usually introduced as an on-axis, monochromatic aberration of a centered optical system. *On-axis* distinguishes it from field-dependent aberrations such as coma and astigmatism. *Monochromatic* means that it can be defined at a single wavelength, unlike longitudinal chromatic aberration. Real photographic lenses, however, must work over a spectral band and across a field. Their spherical-aberration balance can change with wavelength, focus distance, and aperture; across the field, adjustments intended to change it can also alter coma, astigmatism, and image-plane position. The clean on-axis definition is a starting point, not a claim that the aberration operates alone.

## 2. Three Descriptions of the Same Aberration

Spherical aberration can be described as a longitudinal focus error, a transverse ray error, or a wavefront error. These views are related, but each answers a different question. Treating them as interchangeable can hide important information.

### 2.1 Longitudinal Spherical Aberration

*Longitudinal spherical aberration* (LSA) records where rays from different pupil zones intersect the optical axis. A typical plot places normalized pupil coordinate on one axis and axial focus displacement on the other. The near-axis reference is commonly set to zero, and the curve shows how progressively higher zones focus before or after that reference.

The longitudinal curve is intuitive because it displays the spread of focal positions directly. It is also easy to misuse. A single value at the marginal ray says nothing about what happens in the middle of the pupil. A curve can return close to zero at the edge while making a large excursion through an intermediate zone. Another design can have a larger marginal endpoint but a smoother, less disruptive distribution over most of the pupil. The full curve matters.

### 2.2 Transverse Spherical Aberration

*Transverse spherical aberration* (TSA) records where the same rays strike a selected image plane. Instead of asking, "Where does this zone cross the axis?" it asks, "How far from the ideal image point does this ray land here?" The answer changes whenever the image plane changes. Adding defocus therefore adds a linear component to the transverse ray fan even though the lens's underlying pupil-zone disagreement has not disappeared.[^2] [^3]

A transverse fan is often more directly related to geometrical image blur than an LSA plot because it is evaluated at the plane where the image is actually recorded. Its shape shows whether outer zones land predominantly inside or outside the central bundle and whether the ray distribution is monotonic, folded, or zonal. It still is not an intensity image: equal samples in pupil radius do not represent equal amounts of light, diffraction is absent, and transmission or vignetting may weight the zones differently.

### 2.3 Wavefront Spherical Aberration

The wavefront view compares the emerging wavefront with the ideal reference sphere centered on the desired image point. For a rotationally symmetric pupil, a simplified expansion can be written as

$$
W(\rho)=W_{020}\rho^2+W_{040}\rho^4+W_{060}\rho^6+\cdots,
$$

where $\rho$ is normalized pupil radius, $W_{020}$ is defocus, $W_{040}$ is primary spherical aberration, and $W_{060}$ represents a higher-order spherical term. Piston, a constant offset that has no imaging consequence, is omitted.[^4] [^6]

The familiar abbreviated expression

$$
W(\rho)\propto W_{040}\rho^4
$$

isolates primary spherical aberration. It is useful for understanding the rapid growth of the error toward the pupil edge, but a fast photographic lens rarely behaves as a pure fourth-power system over its full aperture. Higher-order terms can reinforce the primary term, oppose it, or create one or more zonal reversals.

The slope of the wavefront is related to transverse ray error. For the primary term alone, the transverse error grows approximately with the cube of pupil radius, while the longitudinal focus difference grows approximately with its square. These scaling relationships explain why opening a lens by a seemingly modest amount can expose a much larger residual. They are third-order approximations, not substitutes for a real ray trace at f/1.2, f/1.4, or f/1.8.

![Figure 2. Three descriptions of one pupil-zone error. Longitudinal focus, transverse intercept, and wavefront departure provide related but noninterchangeable information.](/diagrams/spherical-aberration/02-three-descriptions.svg)

> **Inset: Undercorrected or overcorrected?** Surface & Stop uses the following convention throughout this article: spherical aberration is **undercorrected** when the marginal rays focus closer to the lens—objectward of the near-axis focus—and **overcorrected** when the marginal rays focus farther from the lens—imageward of the near-axis focus. Some books, software packages, and manufacturers reverse signs or describe the condition through wavefront coefficients rather than ray-crossing order. For that reason, the diagrams label the paraxial and marginal foci explicitly instead of relying on "positive" or "negative" alone.[^2] [^4]

## 3. Primary, Zonal, and Higher-Order Spherical Aberration

The simplest teaching diagram shows a smooth curve departing steadily from the paraxial focus toward the marginal zone. That is a useful picture of predominantly primary spherical aberration. Real lenses often produce more complicated traces.

The phrase *third-order spherical aberration* refers to spherical aberration in Seidel, or third-order, aberration theory. Its corresponding wavefront term varies as $\rho^4$. The terminology can seem contradictory until the distinction between ray-aberration order and wavefront order is kept in view. Higher-order contributions add terms such as $\rho^6$, $\rho^8$, and beyond. In a fast lens these are not minor decorative refinements. They can determine whether the marginal zone reinforces the mid-zone error or bends the curve back toward the reference focus.[^1] [^2]

A *zonal* residual occurs when one part of the pupil behaves differently from adjacent zones. The longitudinal curve may cross the reference line, reverse slope, or form a pronounced hook. "Zonal spherical aberration" is often used descriptively rather than as a separate fundamental aberration: it tells us that the residual cannot be summarized by one monotonic primary term.

Four simplified cases are especially useful:

1. **Primary-dominated residual.** The error increases smoothly toward the pupil edge.
2. **Reinforced higher-order residual.** Primary and higher-order terms have the same general sign, making the marginal departure especially strong.
3. **Balanced residual.** A higher-order term opposes the primary term, reducing the marginal endpoint while leaving an intermediate-zone excursion.
4. **Multiple-zone residual.** The curve crosses or reverses more than once, distributing different focus positions across several annuli.

![Figure 3. Similar marginal endpoints can conceal different zonal structures. The normalized primary-dominated, reinforced, balanced, and multiple-zone curves illustrate shape rather than magnitude.](/diagrams/spherical-aberration/03-zonal-curves.svg)

The balanced case explains why the edge of a spherical-aberration plot cannot serve as a score. Suppose two lenses place the marginal ray equally close to the paraxial focus. One may keep most zones clustered and deviate only near the edge. The other may make a large mid-zone excursion before returning at the margin. Their marginal values are similar, but their point-spread functions, focus shifts, and aperture behavior can differ substantially.

Pupil area adds another complication. In a uniformly illuminated circular pupil, an annulus near radius $\rho$ carries an area proportional to $\rho\,d\rho$. Equal steps in pupil radius therefore do not carry equal energy. The outer half of the pupil radius contains three quarters of the pupil area before transmission and vignetting are considered. A modest error spread across a broad outer annulus may matter more than a larger error confined to a narrow central region. Conversely, apodization, mechanical clipping, coatings, or angle-dependent transmission can change the weighting.

A designer can exploit this distribution. A soft-focus system may concentrate some zones near a common focus while allowing others to form a broad halo. A highly corrected lens may accept a small zonal ripple because removing it would worsen coma, chromatic correction, close-focus performance, or tolerance sensitivity. The residual is part of a multivariable compromise rather than a verdict on design competence.

## 4. What Reaches the Image Plane

Spherical aberration is often described as "glow," "softness," or "low contrast." These words refer to visible outcomes, not to one unique optical state. To understand the image, it is more useful to ask how energy from a point source is distributed at the selected plane.

### 4.1 Core, Halo, and Contrast

At a well-chosen plane, one set of pupil zones may form a compact central concentration while other zones spread light over a larger radius. The resulting point-spread function can have a narrow core surrounded by a broad halo. Fine edges remain locatable because of the core, yet the halo adds light to neighboring dark areas and removes contrast from neighboring bright ones. The image can therefore preserve more resolution than its low-contrast appearance suggests.

This is a central distinction between aberrational soft focus and simple defocus. Moving the image plane away from a well-corrected focus expands the whole point image according to the defocused pupil. Deliberate spherical aberration can instead superimpose a relatively concentrated component and a broader component. A diffusion filter can also produce a core-and-halo effect, but through scattering or structured diffusion rather than through a controlled pupil-zone focus distribution.

In diffraction-aware terms, the pupil's amplitude and phase determine the point-spread function. Spherical aberration changes the phase across the pupil and redistributes energy away from the central diffraction peak into surrounding structure.[^6] [^7] A geometrical spot diagram or ray-density plot can suggest where rays concentrate, but it is not the same as a diffraction point-spread function. The distinction becomes especially important when the residual is small, the aperture is stopped down, or the plotted ray sampling is sparse.

![Figure 4. Compact concentration, core with halo, and ordinary defocus. The panels isolate different point-distribution concepts.](/diagrams/spherical-aberration/04-core-halo.svg)

Spherical aberration also changes the modulation transfer function, but not through one universal signature. A broad halo can cause a rapid loss of contrast at low-to-middle nonzero spatial frequencies while a narrow core retains some higher-frequency response. Another distribution may spread the core itself and suppress fine detail more directly. A single adjective such as "soft" does not identify which spatial frequencies have been affected or how the effect changes with refocusing.

### 4.2 There Is More Than One Best Focus

A lens with residual spherical aberration does not offer one self-evident focus plane. Several reasonable criteria may disagree:

- **Paraxial focus** follows the near-axis rays.
- **Marginal focus** follows the outermost admitted zone.
- **Minimum geometrical spot** minimizes a radius or second moment of ray intersections.
- **Minimum wavefront variance** finds the best-fitting reference sphere under a chosen pupil weighting.
- **Maximum on-axis intensity** seeks the largest central diffraction peak.
- **Maximum MTF** selects a spatial frequency, orientation, and weighting relevant to a particular imaging task.
- **Visual focus** may favor edge crispness, local contrast, facial detail, or another subject-dependent cue.

Adding defocus does not correct spherical aberration; it selects another plane through the aberrated bundle. That plane can balance inner and outer zones more usefully, but their disagreement remains. This is why two test methods can report different focus positions for the same lens and aperture without either measurement necessarily being defective.

> **Inset: The "circle of least confusion" is a criterion, not a universal point.** In introductory geometrical optics, the narrowest cross-section of the caustic is often called the circle of least confusion. Its location depends on what is minimized and how the pupil is weighted. A minimum-RMS ray radius, a minimum enclosing circle, a maximum Strehl ratio, and a visually preferred focus are not guaranteed to coincide. The mathematical appendix shows this explicitly for a simplified primary-spherical-aberration model.

### 4.3 Subject Detail and Highlight Behavior

The core-and-halo description is most conspicuous around bright points and high-contrast edges. A bright highlight can veil adjacent dark tones; a dark line against a bright field can appear partly filled; skin texture may retain edges while losing local tonal contrast. The same residual can look restrained in midtones yet conspicuous around isolated highlights, backlit hair, or chrome because scene structure reveals different parts of the point-spread function.

Similar halos can also arise from longitudinal chromatic aberration, spherochromatism, internal flare, sensor-cover reflections, diffusion, condensation, or processing. Spherical aberration is established by pupil-zone focus behavior, not appearance alone.

## 5. Aperture, Pupil-Zone Weighting, and Focus Shift

### 5.1 Stopping Down Changes the Aberration That Reaches the Image

Closing the aperture is the simplest external way to manage spherical aberration. It does not repair a surface or move the focal positions of the rays that are blocked. It removes the outer pupil zones from the image-forming bundle and changes the relative weight of the zones that remain.

This distinction matters. If the marginal annulus carries most of the residual, a small reduction in aperture can produce a rapid increase in contrast and a large reduction in halo. If a broad middle zone is responsible, the improvement may be slower. In a higher-order design, the widest rays may partly cancel the mid-zone error; removing them can briefly expose a more obvious zonal residual before further stopping down reduces the complete bundle. Aperture behavior therefore follows the shape of the spherical-aberration curve, not a universal rule that every lens improves at the same rate.[^1] [^2]

The familiar phrase that stopping down "uses the better center of the glass" is only an approximation. Rays admitted by the smaller entrance pupil pass through reduced zones on several elements, but those zones are not necessarily centered identically on every surface, especially off axis. What matters is the new system-wide ray geometry: changed heights, angles, pupil weighting, and diffraction.

For a conventional lens, stopping down usually narrows the point-spread function, raises contrast, and reduces the image impact of many spacing or curvature errors until diffraction becomes the dominant limit. For a soft-focus design, it often weakens the intended effect because the halo-producing zones are preferentially removed. Some purpose-built soft-focus lenses use higher-order spherical aberration so that a controlled residual survives over more than one aperture. That is a deliberate balance, not an exception to the pupil-zone principle.

![Figure 5. Stopping down changes the participating zones. Progressively smaller apertures exclude marginal zones; the blocked rays have not been corrected, but no longer reach the image.](/diagrams/spherical-aberration/05-aperture-sweep.svg)

### 5.2 Stop-Down Focus Shift

When different pupil zones prefer different axial locations, changing their relative weights can move the plane that best satisfies a chosen focus criterion. This is *stop-down focus shift*. A lens focused at full aperture may deliver its highest stopped-down contrast slightly in front of or behind the originally selected plane.

The direction is connected to the sign of the residual, but only in the simplest primary-aberration case. With undercorrection under the convention used here, blocking the outer zones tends to move the image-side weighted best-focus plane away from the lens, toward the paraxial focus; overcorrection tends to reverse that motion. Translating the change into "front focus" or "back focus" in object space requires a stated camera and focusing convention. A zonal curve can produce a nonlinear shift, a plateau, or even a reversal as successive annuli are removed. Quoting only "front shift" or "back shift" without the aperture sequence and focus criterion omits the behavior that matters.

Camera architecture can change how visible the effect becomes. The practical question is whether focus is evaluated with the same effective pupil and aperture used for capture. Camera bodies and lenses differ in how far they stop down during focus acquisition and whether they verify focus on the imaging sensor, so architecture and firmware can reveal, reduce, or mask the shift without changing its optical cause.

A variable spherical-aberration control adds another layer. Moving a control group can shift the paraxial focus and the weighted best-focus plane at the same time. A successful design may compensate mechanically, require the photographer to refocus, or do some combination of both. The control cannot be assumed to leave focus fixed merely because its primary purpose is described as changing "bokeh."

> **Inset: Aperture sweep versus refocusing.** Two comparisons answer different questions. Holding focus fixed while closing the aperture reveals the combined effect of reduced aberration and focus shift. Refocusing at every aperture reveals the best performance available from each pupil. A repeatable test should report both sequences rather than treating them as interchangeable.

## 6. Foreground, Background, and the Distribution of Defocus

### 6.1 A Blur Disk Is Not Necessarily Uniform

An out-of-focus point is often drawn as a uniformly filled circle. That is a convenient geometrical shorthand, but the actual disk contains a radial distribution of light. Spherical aberration changes that distribution because different pupil zones arrive at different radii on a defocused image plane.

Under the convention used here, an undercorrected residual tends, at equal defocus magnitude, to give background points a center-weighted disk with a gradually fading perimeter and foreground points a more edge-weighted disk with a brighter or more sharply bounded rim. Overcorrection exchanges those tendencies. A well-corrected state tends toward a more even distribution, though diffraction, pupil transmission, and vignetting keep it from becoming a perfectly uniform geometrical disk.[^1] [^6]

![Figure 6. Equal defocus on opposite sides of focus. Center-weighted and edge-weighted tendencies exchange sides when the correction sign is reversed. Displayed disk diameters are normalized to the same size; intensity is schematic rather than energy-normalized.](/diagrams/spherical-aberration/06-front-rear-defocus.svg)

The reversal occurs because foreground and background object points form their paraxial images on opposite sides of the selected image plane. The same pupil-zone focus distribution is therefore sampled with opposite signs of defocus. A residual that gives a diffuse perimeter behind the subject tends to strengthen the perimeter for a corresponding point in front. A fixed spherical-aberration state cannot favor both sides in exactly the same way.

Higher-order terms, optical vignetting, coma, astigmatism, diaphragm shape, exposure, and overlapping scene points can all modify this tendency; the correction sign alone does not predict a complete photograph.

### 6.2 Spherical Aberration and the Language of Bokeh

The word *bokeh* often compresses several independent properties into one judgment. For design analysis it is more useful to describe what is present:

- center-weighted or edge-weighted energy;
- diffuse or sharply bounded perimeter;
- annular or approximately uniform interior;
- circular, polygonal, cat's-eye, or mechanically clipped shape;
- neutral or wavelength-colored rim;
- symmetric or coma-distorted off-axis structure;
- gradual or abrupt change with object distance.

Only some of these properties are governed primarily by spherical aberration. Cat's-eye shapes arise mainly from optical vignetting. Polygonal boundaries follow the diaphragm. Concentric texture can reflect tooling or molding structure on an aspherical surface. Colored rims can come from longitudinal color and spherochromatism. Coma and astigmatism change off-axis point images. Spherical aberration is central to radial energy distribution and front/back asymmetry, but it is not a complete theory of out-of-focus rendering.

Aesthetic labels remain scene dependent. A center-weighted disk may be unobtrusive in one background while its corresponding foreground becomes more outlined; an edge-weighted disk may dominate isolated lights yet recede in a continuous tonal field. The optical description should come first.

### 6.3 Keeping the Subject Concentrated While Changing the Surroundings

A conventional soft-focus lens deliberately changes the in-focus point-spread function: the subject receives a core plus halo. A defocus-control lens can pursue a narrower goal. It can vary the sign and amount of spherical aberration modestly, then compensate the image-plane movement so that the main subject remains concentrated while the foreground–background distribution changes.

Nikon's patent for the [Nikon AF DC-Nikkor 135mm f/2D model](/lens/nikon-af-dc-nikkor-135mm-f2/) makes that distinction explicit: it varies out-of-focus depiction while retaining useful sharpness at the main object, with coordinated changes to spherical aberration, coma, and astigmatism.[^8] [^9]

## 7. Spherochromatism: When Spherical Aberration Changes with Wavelength

Monochromatic spherical aberration is defined at a selected wavelength, but photographic lenses work in polychromatic light. Refractive index changes with wavelength, so surface powers, ray paths, principal planes, and aberration contributions also change. When the amount or shape of spherical aberration varies with wavelength, the result is *spherochromatism*.[^2] [^3]

Spherochromatism is distinct from ordinary longitudinal chromatic aberration. In paraxial axial color, the near-axis focal position changes with wavelength. In spherochromatism, the pupil-zone relationship changes as well. A lens can bring red, green, and blue paraxial rays close together while their marginal rays remain separated, or it can show similar marginal crossings with different mid-zone shapes.

![Figure 7. Spherochromatism with similar paraxial focus. Short-, middle-, and long-wavelength longitudinal spherical-aberration curves separate through the pupil even though their near-axis references are close.](/diagrams/spherical-aberration/07-spherochromatism.svg)

Photographers commonly see the combined result as colored structure around high-contrast details or defocused highlights. One side of focus may show one color near a disk edge while the other side shows the complementary tendency. Stopping down can reduce the effect by excluding the zones where the wavelength-dependent curves separate most strongly. That observation alone does not distinguish spherochromatism from ordinary axial color; wavelength-resolved pupil data or through-focus behavior is needed.

> **Inset: Axial color or spherochromatism?** If every pupil zone for one wavelength shifts together relative to another, the dominant error is paraxial longitudinal color. If the separation changes with pupil radius, spherical aberration itself is chromatic. Real fast lenses commonly show both. [From Achromat to APO](/articles/achromat-apochromat/) places spherochromatism within the broader problem of chromatic correction.[^10]

A prescription limited to $n_d$ and Abbe number $\nu_d$ does not identify the exact glass melt or its full dispersion curve. Catalog matching can support a qualitative color trace, but not a production-level spherochromatism claim.

## 8. Why Fast Lenses Make Spherical Correction Difficult

A large relative aperture admits rays at greater pupil heights. Those rays typically meet surfaces at steeper incidence angles, undergo larger departures from paraxial refraction, and become more difficult to balance. Primary spherical aberration grows rapidly with aperture, while higher-order terms become increasingly important. At the same time, the depth of focus becomes shallow, so a small axial disagreement among zones can affect the image visibly.[^1] [^2] [^11]

The designer must solve this problem while meeting other requirements. Strongly bent surfaces can worsen coma or chromatic behavior. A short overall length can reduce the air spaces available for balancing groups. Internal focusing changes conjugates. A large full-frame field requires off-axis correction at the same time as on-axis correction. More elements add variables but also mass, reflections, cost, and tolerance sensitivity.

A slow lens can avoid difficult marginal zones by never admitting them. A fast lens must transmit and control them. This is why large-aperture lenses make the difference between suppression, balanced residual, and intentional retention especially visible.

## 9. How Lens Designers Manage Spherical Aberration

Designers do not correct spherical aberration with one isolated feature. They distribute power, shape the pupil-zone refractions, and optimize several operating states together.

### 9.1 Surface and Element Variables

**Lens bending.** Two elements can have the same paraxial focal power and different spherical aberration. Changing how power is divided between the front and rear surfaces changes incidence angles, ray heights, and each surface's aberration contribution.[^1] [^4] A plano-convex element is the familiar demonstration: under a given set of conjugates, one orientation can refract the critical rays more gently than the reverse. The preferred orientation depends on conjugates, stop location, refractive index, and the surrounding elements rather than on a universal object-side or image-side rule.

![Figure 8. Equal first-order power does not imply equal spherical aberration. All three bendings share the paraxial focus, but the marginal rays cross at different distances because the refraction is divided differently between the two surfaces.](/diagrams/spherical-aberration/08-lens-bending.svg)

Correcting axial spherical aberration at one conjugate does not by itself control coma. An *aplanatic* system at that conjugate must satisfy both requirements: spherical correction for the axial point and the Abbe sine condition for neighboring off-axis points. Bending or group changes that improve one target can therefore worsen the other.[^1] [^2]

**Dividing power among elements.** Several moderately powered elements provide more radii, thicknesses, air spaces, and glass choices than one strongly powered element. Positive and negative contributions can then oppose one another while also participating in chromatic and Petzval correction. Cementing removes an air space and its two air–glass interfaces, replacing them with lower-index-contrast glass–cement–glass boundaries; air spacing adds independent bending and spacing variables. The correction belongs to the complete sequence, not to one element in isolation.

**Glass and refractive index.** A higher refractive index can provide a given power with gentler curvature, but it also changes field curvature, chromatic balance, and tolerance sensitivity. ED glass, fluorite, and anomalous-partial-dispersion materials are selected principally for chromatic control, not as generic spherical-aberration cures. Their usefulness depends on the geometry built around them.

### 9.2 Pupil and Surface-Shape Variables

**Aperture-stop placement.** The stop determines chief-ray geometry and the bundle admitted from each field point. Moving it changes off-axis ray heights and therefore coma, astigmatism, distortion, lateral color, vignetting, and pupil behavior. At fixed relative aperture, however, third-order spherical aberration of the axial bundle is invariant to stop position; finite-aperture systems can still show higher-order, pupil-aberration, and field-dependent changes.[^2] After manufacture, changing the working aperture is a different operation: it excludes pupil zones, reweights their contribution, reduces light, and increases diffraction. It can therefore change the residual that reaches the image without independently selecting its sign.

**Aspherical surfaces.** A spherical surface has one radius; an aspherical surface can vary its departure from a base sphere with pupil height. That added freedom can reduce primary spherical aberration, oppose a higher-order turn, replace several spherical surfaces, or free other elements to address field and color.[^2] [^4]

> **Inset: An asphere is a degree of freedom, not a guarantee.** It may be used mainly for coma, distortion, packaging, or element-count reduction. The complete lens may still retain spherical aberration intentionally or show a higher-order residual after optimization. The prescription and resulting wavefront—not the word *aspherical*—establish the correction. Manufacturing process and fine surface structure add their own practical constraints.

### 9.3 Configuration, Optimization, and Tolerance

**Floating groups and focus-dependent correction.** A lens corrected at infinity does not automatically preserve the same balance at close focus. Conjugates, ray heights, incidence angles, and—in an internally focused design—internal spacings all change. A floating group adds a controlled relative movement that can restrain spherical aberration, coma, astigmatism, or field curvature across distance. Its trajectory is an optical correction variable, not merely a packaging decision.

**Optimization and manufacturing tolerance.** Modern lens design evaluates wavelengths, apertures, fields, focus distances, zoom or control states, MTF frequencies, distortion, pupil behavior, dimensions, and fabrication sensitivity together.[^3] [^4] A flat spherical-aberration curve at one wavelength and distance may be rejected if it creates a severe zonal turn elsewhere or becomes unstable under realistic errors. A smooth, modest residual can be preferable to a smaller nominal residual that depends critically on one spacing, curvature, or glass melt.

## 10. When Complete Correction Is Not the Goal

The phrase *creative aberration* can imply that a designer simply permits a defect to remain. The better examples are more disciplined. They create a particular residual, place it in selected pupil zones, and control the collateral changes well enough that the result is repeatable.

Three goals recur in photographic lenses.

### 10.1 A Resolved Core Inside a Soft Halo

A conventional soft-focus lens keeps enough light concentrated to define the subject while allowing other zones to spread light over a larger radius. The useful result is not uniform blur. It is a point-spread function with at least two scales: a narrow component that preserves location and a broad component that lowers local contrast. The designer must also restrain coma, astigmatism, field curvature, and vignetting so the halo does not become strongly directional or vary uncontrollably across the frame.[^12] [^13]

### 10.2 A Chosen Foreground–Background Bias

A lens can retain the in-focus subject more sharply and use a smaller spherical residual to change the radial weighting of defocused points. Undercorrection and overcorrection exchange the side of focus that tends toward a center-weighted disk. This does not make one setting universally superior. It gives the photographer a way to decide whether foreground or background structure should receive the less sharply bounded distribution.[^8]

### 10.3 A User-Adjustable Range

Variable-aberration lenses turn an optical compromise into a control. Moving an element or group changes ray height at selected surfaces and therefore changes the balance of spherical terms. The control may span a corrected state, a soft-focus state, an undercorrected state, an overcorrected state, or some subset of these. Because the same movement also changes first-order and off-axis behavior, a successful implementation may require focus compensation, coordinated group motion, or explicit instructions to refocus and check exposure.

![Figure 9. Three uses of a controlled residual: core-and-halo softness, foreground–background defocus bias, and an adjustable under-to-over range.](/diagrams/spherical-aberration/09-design-goals.svg)

A fixed lens can also allocate a restrained residual without offering a control—for example, accepting some undercorrection wide open and becoming more neutral when stopped down. Whether fixed or adjustable, the decisive feature is intentional control: the residual serves a defined imaging purpose and remains balanced against focus stability and other aberrations.

### 10.4 Comparison of the Four Primary Strategies

| Lens | Design goal | Control mechanism | In-focus / defocus result | Focus handling |
| --- | --- | --- | --- | --- |
| [Nikon Nikkor Z 135mm f/1.8 S Plena](/lens/nikon-z-135f18-plena/) | Fixed high correction | Multi-element design with aspherical, specialized-dispersion, and floating-focus variables | Concentrated subject; one designed foreground–background balance | Normal focusing only |
| [Minolta Varisoft Rokkor 85mm f/2.8](/lens/varisoft-rokkor-85f28/) | Variable soft focus | Rear air-space change with coordinated compensation | Adjustable core-and-halo subject rendering; defocus changes secondarily | Mechanically compensated; verify focus |
| [Nikon AF DC-Nikkor 135mm f/2D](/lens/nikon-af-dc-nikkor-135mm-f2/) | Variable foreground–background bias | DC-group spacing plus rear-group compensation | Concentrated subject; **R** favors background softness and **F** foreground softness | Refocus or verify after adjustment |
| [Voigtländer Portrait Heliar 75mm f/1.8](/lens/voigtlander-portrait-heliar-75f18/) | Adjustable under–sharp–over range | Variable spacing between principal groups | Subject ranges from sharp to soft; defocus weighting changes with the control | Refocusing required |

## 11. Four Primary Design Strategies in Practice

The four primary examples represent fixed high correction, variable soft focus, variable foreground–background balance, and an adjustable under-to-over range. The Fuwatto sidebar adds a mechanically reconfigured soft-focus design without treating it as a fifth primary strategy.

### 11.1 NIKON NIKKOR Z 135mm f/1.8 S Plena: A Fixed-Correction Baseline

The [Nikon Nikkor Z 135mm f/1.8 S Plena model](/lens/nikon-z-135f18-plena/) provides a useful modern baseline.[^14] Nikon specifies a 16-element, 14-group production construction containing four ED elements, one aspherical element, and one SR element.[^15] The Surface & Stop entry is derived from a closely correlated patent embodiment in WO 2024/147268 A1 and models a 132.3mm, approximately f/1.85 design with floating inner focusing.[^16]

In the correlated patent embodiment, two focusing groups move in opposite directions as focus changes.[^16] Together with the many powered surfaces, specialized-dispersion materials, and asphere, that architecture provides numerous variables for maintaining a selected correction balance across a very large aperture, full-frame field, wavelength, and focus distance. The Plena is therefore a fixed-correction baseline rather than a user-variable aberration design.

### 11.2 MINOLTA VARISOFT ROKKOR 85mm f/2.8: Variable Core-and-Halo Soft Focus

The [Minolta Varisoft Rokkor 85mm f/2.8 model](/lens/varisoft-rokkor-85f28/) is based on Embodiment 3 of US 4,124,276, scaled from the patent's 100mm normalization to the production focal length. The all-spherical design contains six elements in five groups. A separate control changes a meniscus-shaped air space near the rear of the system while coordinated movement compensates the resulting focus change.[^12] [^17]

Minolta's user instructions describe a concentrated subject point surrounded by a diffuse halo and state that the control cam compensates the accompanying focus shift.[^13] This is conventional soft focus in the precise sense that the rendering of the in-focus subject changes. Detail remains locatable in the core, while the halo lowers contrast and spreads highlights.

The Varisoft therefore illustrates controlled soft focus rather than a simple increase in one coefficient: its moving-group geometry varies spherical aberration while restraining astigmatism and coma, and the linked model exposes the actual spacing changes.

### 11.3 NIKON AF DC-NIKKOR 135mm f/2D: Controlling Defocus While Retaining the Subject

The [Nikon AF DC-Nikkor 135mm f/2D model](/lens/nikon-af-dc-nikkor-135mm-f2/)[^9] pursues a different goal. US 4,908,639 describes a long-focus, large-aperture system in which spacing within the positive forward group is varied to change spherical aberration, coma, and associated astigmatism while a positive rear group performs focusing and image-plane compensation.[^8] The second embodiment is a full-scale 135mm f/2 prescription with seven elements in six groups, closely matching Nikon's published production cross-section and design history.[^18]

At its neutral setting, Nikon describes spherical aberration as nearly corrected. Turning the production DC ring toward **R** produces undercorrection and favors a softer-edged background distribution; turning it toward **F** produces overcorrection and favors foreground defocus. The patent's central distinction from ordinary soft-focus lenses is that the main subject can remain sharply concentrated while the foreground–background distribution changes. Extreme ring travel can still produce a soft-focus effect, but that is not the ordinary purpose of the calibrated settings.

The implemented Surface & Stop model can be opened directly in its [corrected infinity](/lens/nikon-af-dc-nikkor-135mm-f2/), [corrected close](/lens/nikon-af-dc-nikkor-135mm-f2/?focus=1.000), [R / under close](/lens/nikon-af-dc-nikkor-135mm-f2/?focus=1.000&aberration=-1.000), and [F / over close](/lens/nikon-af-dc-nikkor-135mm-f2/?focus=1.000&aberration=1.000) states. The three close states are the patent's $\beta=-0.0333$ anchors. Their descriptive labels are not numerical equivalents of engraved production-ring marks, and the production lens's 1.1 m minimum-focus endpoint is not reconstructed. Nikon reports that the production graduations were selected through simulation and repeated photography.[^8] [^9] [^18]

### 11.4 VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8: Under, Sharp, and Over

The [Voigtländer Portrait Heliar 75mm f/1.8 model](/lens/voigtlander-portrait-heliar-75f18/) represents a current, explicit spherical-aberration control. Cosina specifies six elements in three groups and warns that operating the control changes focus position, changes the effective aperture by less than one-third EV, and—in the undercorrected direction—reduces peripheral illumination.[^19]

The correlated patent embodiment is an all-spherical positive-negative-positive system made from three cemented doublets. Its principal control changes the air space between the front positive group and central negative group. Surface & Stop preserves the published under, sharp, and over positions while keeping the patent labels separate from the production-ring wording.[^20] [^21]

Cosina states that overcorrection retains a focused core while making the background blur harder and more bubble-like; undercorrection softens the focused subject, introduces highlight flare, and makes the background blur smoother.[^19] In the terminology of Section 6, those descriptions are consistent with a shift toward more edge-weighted versus more center-weighted background disks, but the exact appearance remains lens- and scene-dependent.

> **Sidebar: NIKON Fuwatto Soft 90mm f/4.8—changing the architecture rather than turning a control.** The [Nikon Fuwatto Soft 90mm f/4.8 model](/lens/nikon-fuwatto-soft-90mm-f48/) shows another route. Nikon's inexpensive 1995 Fun Fun LensSet used one convertible optical assembly for a 120mm macro state and a 90mm soft-focus state. For the Fuwatto configuration, the rear negative corrector is removed and the front cemented doublet is reversed.[^22] [^23] [^24] The first-order power of the doublet remains similar when reversed, but its higher-order aberration balance changes substantially. The result is a fixed soft-focus lens rather than a continuously adjustable one. It is a compact demonstration that orientation and group topology can be creative controls as consequential as adding a specialized surface.

---

## 12. Reading the Evidence and Drawing the Right Conclusion

The static figures isolate mechanisms; they are not quantitative predictions or substitutes for manufacturer aberration charts. The linked lens pages answer narrower, design-specific questions by exposing patent-derived surfaces, modeled or catalog-matched glasses, stops, moving groups, and available states. Those models still carry the limitations of their sources. A patent model is not a bench measurement of a production sample. Estimated clear apertures can affect vignetting and off-axis blur. $n_d$ and $\nu_d$ alone do not fully determine dispersion. A production lens may use revised spacings, glass substitutions, mechanical masks, and tolerance decisions not disclosed in the publication. Surface & Stop treats the prescription as design evidence and labels correlation or reconstruction rather than presenting it as a hidden factory drawing.[^25]

> **Closing sidebar: Beyond photographic taking lenses.** Spherical-aberration control also appears in microscopy, extended-depth-of-focus systems, wavefront coding, beam shaping, and instruments that trade peak concentration for a more stable response over axial range. Those uses may deliberately create phase structures that would be undesirable in a conventional camera lens. They confirm the broader point—aberration is not always synonymous with failure—but their goals and evaluation criteria differ enough to deserve separate treatment.

Spherical aberration begins with a simple disagreement: different zones of the pupil do not share one focus. Lens design turns that disagreement into a controlled distribution. Surface form, divided power, glass, pupil weighting, aspheres, moving groups, and optimization can compress the distribution, stabilize it across operating states, or give it a chosen shape. Aperture and focus determine how the residual reaches the image plane. Defocus reveals its asymmetry. Wavelength adds another dimension through spherochromatism.

The most useful question is consequently not whether a lens has spherical aberration. No practical photographic lens is identically free of spherical-aberration residual across every wavelength, field point, aperture, focus distance, and tolerance state. The useful questions are where the residual lies, how it changes, what other aberrations accompany it, and whether the resulting distribution serves the design goal. In a high-performance prime, success may mean suppressing the residual until it no longer limits the intended image. In a Varisoft, DC-Nikkor, Portrait Heliar, or Fuwatto, success may mean preserving enough of it—and controlling it carefully enough—that an optical error becomes a photographic choice.

---

The main article is complete above. Appendix A formalizes the principal relationships for readers who want the mathematical derivations; Appendix B returns to photographic practice and traces the design lineage.

## Appendix A. Mathematical Notes on Primary and Higher-Order Spherical Aberration

This appendix supplies the mathematical structure behind the simplified body diagrams. It is not a prescription-analysis method by itself. Named lenses should be evaluated by exact real-ray tracing through their published surfaces and by diffraction calculations using the declared pupil and spectral data.

### A.1 Normalized Pupil and Wavefront Expansion

Let $\rho$ be normalized pupil radius, with $0\leq\rho\leq1$. For an on-axis rotationally symmetric system, the wavefront departure from a chosen reference sphere can be expanded in even powers:

$$
W(\rho)=W_{000}+W_{020}\rho^2+W_{040}\rho^4+W_{060}\rho^6+W_{080}\rho^8+\cdots.
$$

The piston term $W_{000}$ changes absolute phase but not image formation and is normally ignored. $W_{020}$ is defocus. $W_{040}$ is primary spherical aberration. $W_{060}$ and higher terms represent higher-order spherical aberration. Other notational systems use Seidel sums, Zernike polynomials, optical-path-difference coefficients, or software-specific normalizations; coefficients cannot be transferred between conventions without checking pupil scaling, wavelength units, reference sphere, and sign.[^3] [^5]

Adding defocus changes the reference sphere:

$$
W'(\rho)=W(\rho)+\Delta W_{020}\rho^2.
$$

This can reduce peak-to-valley error, RMS wavefront error, spot radius, or another selected metric. It cannot cancel a $\rho^4$ or $\rho^6$ dependence at every pupil radius. Defocus chooses a different compromise plane through the same aberrated bundle.

### A.2 From Wavefront Slope to Transverse Ray Error

In the small-aberration approximation, transverse ray error is proportional to the gradient of the wavefront over the pupil. For a rotationally symmetric radial case,

$$
T(\rho)\propto\frac{dW}{d\rho}.
$$

For pure primary spherical aberration,

$$
W(\rho)=W_{040}\rho^4,
$$

so

$$
T(\rho)\propto4W_{040}\rho^3.
$$

The longitudinal error is related to transverse error divided by ray slope or pupil height, giving the familiar approximate scaling

$$
L(\rho)\propto\rho^2.
$$

The omitted proportionality constants depend on focal length, pupil radius, refractive index, image-space geometry, coordinate direction, and sign convention. The power laws explain the rapid growth toward the margin; they do not provide exact millimeter intercepts for a fast lens.

If the physical pupil radius is reduced by a factor $q$ while the underlying fourth-order coefficient remains fixed, the primary wavefront contribution falls approximately as $q^4$, the transverse contribution as $q^3$, and the longitudinal contribution as $q^2$. Real lenses depart from this simple scaling because aperture changes the admitted zones of a mixed higher-order residual and may also alter pupil aberration and vignetting.

### A.3 Several Best-Focus Planes in One Simple Model

Consider a simplified wavefront containing defocus and primary spherical aberration:

$$
W(\rho)=A\rho^2+B\rho^4.
$$

Its radial ray error is proportional to

$$
T(\rho)=2A\rho+4B\rho^3.
$$

Different focus definitions select different values of $A$:

- **Paraxial focus:** $A=0$. The near-axis ray slope is the reference, and spherical aberration remains as $B\rho^4$.
- **Minimum wavefront variance:** after allowing an arbitrary piston term and minimizing the pupil-weighted variance of $W$, the result is $A=-B$. This is the familiar balanced primary-spherical form related to the rotationally symmetric Zernike spherical term.
- **Minimum-RMS geometrical ray radius:** minimizing $\int_0^1T(\rho)^2\rho\,d\rho$ for a uniformly illuminated circular pupil gives $A=-4B/3$.
- **Minimum enclosing circle, or minimax geometrical blur:** minimizing $\max_{0\leq\rho\leq1}|T(\rho)|$ gives $A=-3B/2$. At this setting, the interior extremum at $\rho=1/2$ and the marginal ray at $\rho=1$ have equal and opposite transverse errors, $-B$ and $+B$. The maximum geometrical blur radius is therefore $|B|$, one quarter of the marginal-ray blur radius $4|B|$ at paraxial focus.
- **Marginal-ray focus:** setting $T(1)=0$ gives $A=-2B$. The outermost ray is brought to the axis, but other zones remain displaced.

For this model the criteria progress in coefficient space from $A=0$ through $-B$, $-4B/3$, $-3B/2$, and $-2B$. The ordered results make clear that they select distinct planes within the same caustic. A maximum-intensity or maximum-Strehl plane approaches the minimum-wavefront-variance solution for small aberrations, but can depart from it when aberration is large, amplitude varies across the pupil, or the calculation is polychromatic. Maximum MTF introduces another choice because its result depends on spatial frequency and weighting.

The derivation also explains why "the focus shift" is incomplete without a criterion. A test chart, autofocus system, interferometer, and photographer may each favor a different plane even when they observe the same optical state.

### A.4 Primary and Higher-Order Balancing

With primary and higher-order terms,

$$
W(\rho)=W_{040}\rho^4+W_{060}\rho^6,
$$

and

$$
T(\rho)\propto4W_{040}\rho^3+6W_{060}\rho^5.
$$

If $W_{040}$ and $W_{060}$ have opposite signs, the transverse error has a nonzero zonal crossing when

$$
\rho^2=-\frac{2W_{040}}{3W_{060}},
$$

provided the right-hand side lies between zero and one. Adding $\rho^8$ and higher terms can create further turns. The marginal value at $\rho=1$ may therefore be small even when an intermediate annulus carries a large error. This is the mathematical reason an endpoint cannot characterize a shaped residual.

Balancing terms also changes aperture behavior. If the wide-open pupil includes the return of a hooked curve toward zero, modest stopping down can remove that return and temporarily expose the larger mid-zone error. Later stopping down removes the mid-zone as well. Nonmonotonic performance with aperture can therefore be a predictable consequence of higher-order balancing rather than a measurement anomaly.

### A.5 Diffraction and the Point-Spread Function

A geometrical ray spot is not the physical point-spread function. For pupil amplitude $P(\rho,\theta)$ and wavefront error $W(\rho,\theta)$, the scalar image field is schematically

$$
U(x,y)\propto\mathcal{F}\left\{P(\rho,\theta)
\exp\left[i\frac{2\pi}{\lambda}W(\rho,\theta)\right]\right\},
$$

and the point-spread function is

$$
\operatorname{PSF}(x,y)=|U(x,y)|^2.
$$

The optical transfer function is the Fourier transform of the PSF, and the MTF is its magnitude. Spherical aberration changes phase across the pupil; diffraction determines how the contributions interfere in the image. Amplitude apodization, vignetting, coatings, and the diaphragm change $P$, so two systems with the same wavefront term can still distribute intensity differently.[^6] [^7]

A ray-density diagram can indicate where geometrical energy tends to concentrate, but its appearance depends on sampling. Uniform steps in radius overweight the pupil center relative to equal-area sampling. Surface & Stop's conceptual diagrams therefore avoid numerical intensity claims unless they come from a specified diffraction calculation.

### A.6 Polychromatic Spherical Aberration

For real photographic light, the coefficients depend on wavelength:

$$
W(\rho,\lambda)=W_{020}(\lambda)\rho^2+W_{040}(\lambda)\rho^4+W_{060}(\lambda)\rho^6+\cdots.
$$

Ordinary longitudinal chromatic aberration appears principally through wavelength-dependent defocus. Spherochromatism appears when $W_{040}$, $W_{060}$, or the resulting curve shape changes with $\lambda$. A polychromatic PSF sums wavelength-dependent intensities after applying the source spectrum, optical transmission, and detector response. A single d-line prescription cannot establish that full behavior without additional dispersion data.

### A.7 Limits of the Expansion

The power-series treatment is most useful for interpretation near the axis and within a stated normalization. Fast objectives with steep aspheres, strong menisci, large conjugate changes, substantial pupil aberration, or large residual error may require many terms and can make coefficient-based intuition misleading. Exact Snell-law tracing remains the governing method for prescription work. Wavefront decomposition is then used to summarize the trace, not replace it.

With the mathematical framework established, the historical appendix returns to the photographic mechanisms by which designers selected, transmitted, or varied the relevant pupil zones.

## Appendix B. A Concise Lineage of Photographic Soft-Focus Design

Soft-focus photography predates the idea of a dedicated control ring. Early photographic objectives were limited by available glass, computation, manufacturing, and the need for speed. Portrait photographers learned that a lens with residual spherical aberration could reduce local contrast and texture while retaining a recognizable subject. What began partly as an accepted limitation became an intentional design category.[^26]

### B.1 Fixed Residuals, Pupil Selection, and Apodization

The simplest soft-focus objectives used a meniscus, achromatic doublet, or other compact group with deliberate undercorrection. Wide open, marginal zones supplied a broad halo. Stopping down removed those zones and reduced the effect. The aperture therefore served simultaneously as exposure control and softness control.

Some designs separated those functions with special diaphragms. Rodenstock's Imagon used perforated sieve diaphragms to regulate the proportion of peripheral, strongly aberrated light while retaining a central image-forming opening.[^27] The photographer could change the core-to-halo balance without merely defocusing a corrected lens. Such systems also showed that pupil *transmission* can be as important as pupil phase: blocking or admitting selected annuli changes which zones contribute.

Leitz's original Thambar 90mm f/2.2, introduced in 1935, combined intentional soft rendering with a removable center-spot filter and separate aperture scales. Leica states that the modern Thambar-M adopts the original optical calculation while adding modern single-layer coatings, preserving the same basic pupil-selection concept.[^28]

Modern apodization lenses continue this transmission-based branch. Sony's FE 100mm F2.8 STF GM OSS uses an optical APD element, Fujifilm's XF56mmF1.2 R APD uses an apodization filter, and Canon's RF85mm F1.2 L USM DS uses a two-surface coating that progressively lowers transmission from the center of each coated surface toward its periphery.[^29] [^30] [^31] In each case, the intended smoothing comes primarily from pupil-amplitude weighting rather than from deliberately increasing spherical aberration, so a similarly smooth blur-disk boundary can arise from a different optical mechanism.[^6] [^7]

### B.2 Moving an Element to Vary the Residual

The Universal-Heliar, introduced around 1926, made the central component of a large-format Heliar axially adjustable. A 1931 Voigtländer catalog explains that turning the lens hood shifts the middle lens and allows the degree of softness to be regulated on a scale.[^32] At its normal position the lens provided conventional Heliar definition; displacement introduced progressively more spherical aberration. It was an early explicit conversion of correction error into a repeatable user setting.[^33]

Later variable soft-focus lenses used more tightly controlled cams and air spaces. The Minolta Varisoft Rokkor 85mm f/2.8 is a representative late-twentieth-century design. Its patent varies a rear meniscus spacing to change the balance of low- and higher-order spherical aberration while coordinating other movement to preserve focus and restrain off-axis degradation.[^12] [^17]

Canon's EF 135mm f/2.8 Softfocus brought selectable soft focus into an autofocus lens in 1987. Canon states that a molded-glass aspherical element moves to generate spherical aberration, with two degrees of effect in addition to normal operation.[^34] The asphere in this case is not only a correction tool; its movement is used to create a controlled departure from the corrected state.

### B.3 From Subject Softness to Defocus-Image Control

Nikon's [AF DC-Nikkor 135mm f/2D](/lens/nikon-af-dc-nikkor-135mm-f2/), whose optical concept entered production in 1991, drew a conceptual line between conventional soft focus and foreground–background control. In its calibrated range, the goal was to keep the main subject concentrated while varying the radial distribution of defocused points. The R direction undercorrects for the background; the F direction overcorrects for the foreground. Extreme travel can produce subject flare, but Nikon's primary design argument was control of the defocus image rather than routine softening of the focal plane.[^8] [^18]

The distinction is important historically. Earlier adjustable soft-focus lenses asked how much halo should surround the subject. The DC design asked which side of focus should receive the more diffuse-edged point distribution while the subject remained sharp.

### B.4 Reconfiguration and Contemporary Revival

Nikon's Fuwatto Soft 90mm f/4.8 reduced the mechanism rather than elaborating it. The 1995 Fun Fun LensSet used a small convertible assembly. In the soft configuration, a reversed cemented doublet functions as a fixed 90mm f/4.8 objective. Nikon's own account emphasizes a concentrated core surrounded by circular flare and the need to control coma and astigmatism so that the effect remains reasonably consistent over the frame.[^22] [^23] [^24]

The Voigtländer Portrait Heliar 75mm f/1.8 returns continuous spherical-aberration control to a current mirrorless lens. Its all-spherical, three-doublet prescription varies the spacing between its front positive and central negative groups. The control spans under, sharp, and over states and makes associated focus, exposure, and illumination changes explicit in the operating instructions.[^19] [^20] [^21]

Across this lineage, the mechanism changes but the underlying design decision remains recognizable. The designer determines which pupil zones form the concentrated image, which form the halo or defocus boundary, and how the photographer can alter their balance. The effect may be fixed, aperture-controlled, transmission-controlled, continuously variable, or mechanically reconfigurable. In each case, soft focus is an optical allocation of energy—not simply a missed focus point.

---

## Bibliography

[^1]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Amsterdam, The Netherlands: Academic Press, 2010.

[^2]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, U.K.: Adam Hilger, 1986.

[^3]: J. M. Sasián, *Introduction to Aberrations in Optical Imaging Systems*. Cambridge, U.K.: Cambridge University Press, 2013.

[^4]: W. J. Smith, *Modern Optical Engineering: The Design of Optical Systems*, 4th ed. New York, NY, USA: McGraw-Hill, 2008.

[^5]: V. N. Mahajan, *Optical Imaging and Aberrations, Part I: Ray Geometrical Optics*. Bellingham, WA, USA: SPIE Press, 1998.

[^6]: V. N. Mahajan, *Optical Imaging and Aberrations, Part II: Wave Diffraction Optics*, 2nd ed. Bellingham, WA, USA: SPIE Press, 2011.

[^7]: M. Born and E. Wolf, *Principles of Optics*, 7th expanded ed. Cambridge, U.K.: Cambridge University Press, 1999.

[^8]: M. Yanagisawa, "Optical system having a variable out-of-focus state," U.S. Patent 4,908,639, Mar. 13, 1990. [Online]. Available: https://patents.google.com/patent/US4908639A/en. [Accessed: Aug. 6, 2026].

[^9]: Surface & Stop, "NIKON AF DC-NIKKOR 135mm f/2D." [Online]. Available: https://surfaceandstop.com/lens/nikon-af-dc-nikkor-135mm-f2/. [Accessed: Aug. 6, 2026].

[^10]: Surface & Stop, "From Achromat to APO." [Online]. Available: https://surfaceandstop.com/articles/achromat-apochromat/. [Accessed: Aug. 6, 2026].

[^11]: J. M. Sasián, *Introduction to Lens Design*. Cambridge, U.K.: Cambridge University Press, 2019.

[^12]: Y. Okano, A. Nakamura, and T. Ogura, "Soft focus lens system," U.S. Patent 4,124,276, Nov. 7, 1978. [Online]. Available: https://patents.google.com/patent/US4124276A/en. [Accessed: Aug. 6, 2026].

[^13]: Minolta Camera Co., Ltd., "Your 85mm f/2.8 Varisoft Rokkor," user instructions. [Online]. Available: https://allphotolenses.com/public/files/pdfs/67c64fdb77248cd2a5e41fd4c7c2c8cf.pdf. [Accessed: Aug. 6, 2026].

[^14]: Surface & Stop, "NIKON NIKKOR Z 135mm f/1.8 S Plena." [Online]. Available: https://surfaceandstop.com/lens/nikon-z-135f18-plena/. [Accessed: Aug. 6, 2026].

[^15]: Nikon Corporation, "NIKKOR Z 135mm f/1.8 S Plena," *Nikon Consumer*. [Online]. Available: https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_135mmf18s/. [Accessed: Aug. 6, 2026].

[^16]: M. Muratani, H. Yamamoto, T. Kuribayashi, and T. Ono, "Optical system, optical device, interchangeable lens, and optical system manufacturing method," WO Patent 2024/147268 A1, Jul. 11, 2024. [Online]. Available: https://patents.google.com/patent/WO2024147268A1/en. [Accessed: Aug. 6, 2026].

[^17]: Surface & Stop, "MINOLTA VARISOFT ROKKOR 85mm f/2.8." [Online]. Available: https://surfaceandstop.com/lens/varisoft-rokkor-85f28/. [Accessed: Aug. 6, 2026].

[^18]: K. Ohshita, "Ai AF DC Nikkor 135mm F2S," *NIKKOR—The Thousand and One Nights*, no. 32, Nikon Corporation. [Online]. Available: https://imaging.nikon.com/imaging/information/story/0032/. [Accessed: Aug. 6, 2026].

[^19]: Cosina Co., Ltd., "PORTRAIT HELIAR 75mm F1.8," *Voigtländer*. [Online]. Available: https://www.cosina.co.jp/voigtlander/en/z-mount/portrait-heliar-75mm-f1-8/. [Accessed: Aug. 6, 2026].

[^20]: T. Moriyama, "Optical lens system," Japan Patent Appl. Publ. 2026-120386, Jul. 22, 2026. [Online]. Available: https://ipforce.jp/patent-jp-P_A1-2026-120386. [Accessed: Aug. 6, 2026].

[^21]: Surface & Stop, "VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8." [Online]. Available: https://surfaceandstop.com/lens/voigtlander-portrait-heliar-75f18/. [Accessed: Aug. 6, 2026].

[^22]: K. Ohshita, "Nikon Fun Fun LensSet, Part 1 (Gugutto Macro/Fuwatto Soft)," *NIKKOR—The Thousand and One Nights*, no. 52, Nikon Corporation. [Online]. Available: https://imaging.nikon.com/imaging/information/story/0052/. [Accessed: Aug. 6, 2026].

[^23]: K. Ohshita, "Lens system with switchable soft focus," U.S. Patent 5,796,530, Aug. 18, 1998. [Online]. Available: https://patents.google.com/patent/US5796530A/en. [Accessed: Aug. 6, 2026].

[^24]: Surface & Stop, "NIKON Fuwatto Soft 90mm f/4.8." [Online]. Available: https://surfaceandstop.com/lens/nikon-fuwatto-soft-90mm-f48/. [Accessed: Aug. 6, 2026].

[^25]: Surface & Stop, "About Surface & Stop." [Online]. Available: https://surfaceandstop.com/articles/about-site/. [Accessed: Aug. 6, 2026].

[^26]: R. Kingslake, *A History of the Photographic Lens*. San Diego, CA, USA: Academic Press, 1989.

[^27]: Rodenstock, "History, characteristics and operation of Imagon lenses," product brochure, Apr. 1986, English trans. reproduced online. [Online]. Available: https://www.pentaconsix.com/imagon2.htm. [Accessed: Aug. 6, 2026].

[^28]: Leica Camera AG, "Thambar-M 90 f/2.2." [Online]. Available: https://leica-camera.com/en-GB/photography/lenses/m/thambar-m-90mm-f2-2-black-painted. [Accessed: Aug. 7, 2026].

[^29]: Sony Corporation, "FE 100mm F2.8 STF GM OSS," *Sony*. [Online]. Available: https://www.sony.com/en-ae/electronics/camera-lenses/sel100f28gm. [Accessed: Aug. 7, 2026].

[^30]: Fujifilm Corporation, "FUJINON XF56mmF1.2 R APD," *FUJIFILM X Series & GFX*. [Online]. Available: https://www.fujifilm-x.com/en-gb/products/discontinued-lenses/xf56mmf12-r-apd/. [Accessed: Aug. 7, 2026].

[^31]: Canon Inc., "RF85mm F1.2 L USM DS," *Canon Camera Museum*. [Online]. Available: https://global.canon/en/c-museum/product/rf488.html. [Accessed: Aug. 7, 2026].

[^32]: Voigtländer & Sohn AG, *Voigtländer Cameras and Lenses*, 1931, p. 28. [Online]. Available: https://www.cameramanuals.org/voigtlander_pdf/voigtlander_cameras_1931.pdf. [Accessed: Aug. 6, 2026].

[^33]: Surface & Stop, "Helios in Glass: A Developmental History of Voigtländer's Heliar Lens Designs, 1900–2025." [Online]. Available: https://surfaceandstop.com/articles/heliar-history/. [Accessed: Aug. 6, 2026].

[^34]: Canon Inc., "EF135mm f/2.8 Soft Focus (with Softfocus mechanism)," *Canon Camera Museum*. [Online]. Available: https://global.canon/en/c-museum/product/ef268.html. [Accessed: Aug. 6, 2026].
