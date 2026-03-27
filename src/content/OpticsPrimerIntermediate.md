---
slug: optics-primer-intermediate
title: Optics In More Detail
summary: A deeper look at optical design principles including Petzval sums, field curvature correction, and retrofocus designs.
tag: guide
---

# Optics Primer — Foundations of Lens Design

This companion guide introduces the optical concepts, symbols, and relationships that underpin the lens cross-section diagrams on this site. It assumes you are comfortable with the conceptual primer and want a more precise understanding of how the numbers in the element-detail panel and the ray-trace overlay relate to one another.

---

## 1. Surfaces, Curvature, and Sign Conventions

A camera lens is specified as an ordered list of **surfaces**, each defined by a radius of curvature **R** (in mm) and a separation distance **d** to the next surface. The sign convention used here (and in virtually all patent literature) is as follows: light travels left to right; a surface whose center of curvature lies to the *right* of the surface has a positive R, and one whose center lies to the *left* has a negative R. A flat surface is represented by R = ∞. Each pair of adjacent surfaces that encloses glass constitutes an **element**; air spaces between elements are simply surfaces with a refractive index of 1.

## 2. Refraction and Snell's Law

When a ray of light crosses the boundary between two media with different refractive indices, it changes direction according to Snell's law:

> **n₁ sin θ₁ = n₂ sin θ₂**

where n₁ and n₂ are the refractive indices of the first and second medium and θ₁, θ₂ are the angles the ray makes with the surface normal. In the **paraxial** (small-angle) regime used by this viewer, sin θ ≈ θ, which simplifies the ray-trace arithmetic considerably and is sufficiently accurate for understanding the first-order behavior of a design. Full patent prescriptions also support exact (real-ray) tracing, but the paraxial model captures focal lengths, conjugate distances, and pupil positions with minimal computation.

## 3. Focal Length, Power, and the Thin-Lens Equation

The **effective focal length** (EFL, symbol *f*) of a complete lens describes how strongly it converges a collimated beam. It is related to the object distance *s* and image distance *s′* by the thin-lens conjugate equation:

> **1/s′ − 1/s = 1/f**

with the convention that distances measured in the direction of light propagation are positive. When the object is at infinity (s → −∞), the image forms at a distance *f* behind the lens's rear principal plane. The reciprocal of focal length is called **optical power** and is sometimes expressed in diopters (inverse meters), though millimeters are the standard unit in photographic optics.

For a single thin element in air, the **lensmaker's equation** gives the focal length in terms of its surface curvatures and refractive index:

> **1/f = (nd − 1) [1/R₁ − 1/R₂]**

where nd is the refractive index at the d-line (587.56 nm) and R₁, R₂ are the front and rear radii. Real multi-element lenses require a sequential surface-by-surface trace to arrive at the system EFL, but this single-element formula illustrates why both curvature and glass choice matter.

## 4. The f-Number and Entrance Pupil

The **f-number** (N) is defined as:

> **N = f / D_EP**

where D_EP is the diameter of the **entrance pupil** — the image of the aperture stop as seen from object space through all preceding elements. At the lens's maximum aperture (e.g., f/1.4), D_EP is at its largest. Stopping down the iris reduces D_EP and increases N. Because image-plane illuminance falls with the square of N, each full stop (a factor of √2 in N) halves the light reaching the sensor.

The viewer displays both the entrance-pupil diameter (EP ⌀) and the physical stop diameter (Stop ⌀). These differ because the elements in front of the stop magnify or demagnify its image; the ratio between them is the pupil magnification of the front group.

## 5. Refractive Index, Abbe Number, and Dispersion

Every optical glass is characterized (at minimum) by two numbers:

**nd** — the refractive index at the Fraunhofer d-line (587.56 nm, yellow-green). This governs the strength of refraction at each surface. Values in photographic optics typically range from about 1.46 (fluorite-like glasses) to 1.95 (dense lanthanum types).

**νd** — the **Abbe number**, defined as:

> **νd = (nd − 1) / (nF − nC)**

where nF and nC are the refractive indices at the F-line (486.13 nm, blue) and C-line (656.27 nm, red). A high νd means the glass bends all visible wavelengths almost equally (low dispersion); a low νd means significant wavelength-dependent bending (high dispersion). Crown-type glasses generally have νd > 50, flint-type glasses νd < 50. Glasses with νd above roughly 65 are marketed as **extra-low dispersion** (**ED**) and are prized for minimizing chromatic aberration.

The element-detail panel on this site shows the derived quantity *nF − nC* = (nd − 1)/νd alongside approximate red- and blue-channel indices so you can see at a glance how much a given element spreads color.

## 6. Chromatic Aberration — LCA and TCA

Because dispersion causes each wavelength to focus at a slightly different distance, a lens that is perfectly focused for green light will show red and blue light slightly out of focus. The axial (along the optical axis) component of this error is **longitudinal chromatic aberration** (**LCA**), reported on this site in micrometers (µm). The lateral (across the image height) component is **transverse chromatic aberration** (**TCA**), which manifests as color fringing at the edges of the frame.

An achromatic doublet — a positive crown element cemented to a negative flint element — is the classical correction strategy. The designer chooses the two glasses so that their combined dispersion cancels while their combined power remains positive. When the COLOR overlay is enabled in the viewer, you can see the separate R, G, and B ray paths diverge or converge at the image plane; the inset LCA diagram shows this spread at exaggerated magnification.

For a thin achromatic doublet, the condition for zero LCA is:

> **φ₁/ν₁ + φ₂/ν₂ = 0**

where φ₁, φ₂ are the powers (1/f) of the two elements and ν₁, ν₂ are their Abbe numbers. This constrains the ratio of powers and thus the individual focal lengths, which is why doublet partners are almost always one crown and one flint.

## 7. Aspherical Surfaces

A spherical surface is fully defined by one parameter, R. An **aspherical** surface adds a conic constant **K** and even-order polynomial coefficients **A4**, **A6**, **A8**, … that describe the departure from a sphere. The surface sag (depth at height *h* from the axis) is given by:

> **z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + …**

When K = 0 and all polynomial terms are zero, the surface reduces to a sphere. A parabola corresponds to K = −1; a hyperbola to K < −1. In photographic lenses, aspheres are typically mild departures from spherical (|K| ≪ 1, small polynomial coefficients) and are placed at surfaces where they most efficiently reduce spherical aberration or coma without adding extra elements.

## 8. Ray Tracing in the Viewer

The ray-trace engine on this site performs sequential paraxial propagation: at each surface, a ray's height *y* and angle *u* are updated according to the **refraction** and **transfer** equations:

> **Refraction:** n₂ u₂ = n₁ u₁ − y · (n₂ − n₁) / R
>
> **Transfer:** y_next = y + d · u₂

These two operations, applied surface by surface, yield the complete path of every ray from the entrance pupil to the image plane. Rays that exceed the semi-diameter (**sd**) of any surface or the physical stop aperture are flagged as **vignetted** and drawn as faint dashed lines. The "TRACKS FOCUS" mode adjusts the input ray convergence angle so that the traced bundle converges toward the current conjugate distance rather than arriving from infinity, which lets you see how aberration balance and vignetting change across the focus range.

## 9. Conjugates and Focus

When the focus slider moves away from infinity, certain air spaces inside the lens change thickness — these are the **variable** surfaces (marked with min/max values in the patent data). The viewer interpolates between the infinity and close-focus prescriptions and recomputes the layout in real time. The resulting **conjugate distance** — the object distance at which the lens is focused — is displayed above the slider. At any given conjugate, the paraxial image distance shifts, and the viewer holds the image plane fixed while translating the lens group positions to compensate, just as the mechanical focus mechanism of a real lens would.

## 10. Refocus Control and Aberration Balance

The viewer offers two ray-launch modes, toggled in the control bar: **FROM ∞** and **TRACKS FOCUS**. In FROM ∞ mode, all on-axis rays enter parallel to the optical axis regardless of where the focus slider is set. This shows the *geometric* cone of light the lens produces for a distant object and makes it easy to see how the focal point drifts relative to the image plane as the internal spacings change. In TRACKS FOCUS mode, the rays are given an input convergence angle that corresponds to the current conjugate distance, so the traced bundle represents light actually arriving from a subject at that distance. The difference matters because aberrations — especially spherical aberration and coma — shift in magnitude and sign as the object distance changes. A lens that is well-corrected at infinity may show noticeably different aberration structure at its close-focus limit, and TRACKS FOCUS mode makes this visible. The coma preview in the Aberrations panel reuses this same meridional ray model, so it should be read as a representative tangential-plane footprint rather than a full skew-ray spot diagram.

This distinction also affects vignetting. Off-axis ray bundles in TRACKS FOCUS mode enter the lens at slightly different heights and angles than they would from infinity, so the set of rays that clear every aperture changes. Comparing the two modes at the same focus position is a practical way to see whether a design's aberration correction was optimized for a particular working distance or balanced across the range.

## 11. Soft Focus

Most photographic lenses aim to minimize aberrations so that a point of light in the scene reproduces as a tight point on the sensor. A **soft-focus** design deliberately retains a controlled amount of **spherical aberration** — the tendency for rays passing through the outer zones of the aperture to focus at a different distance than rays near the center. The result is a sharp core image overlaid with a smooth, low-contrast halo. Unlike defocus blur (which shifts the entire image out of the focal plane) or diffusion filters (which scatter light after the lens), soft focus is inherent to the optical design and varies with aperture: stopping down reduces the contribution of the outer zones and progressively sharpens the image.

In a cross-section diagram, the signature of spherical aberration is visible when marginal rays (those near the edge of the pupil) cross the axis at a different point than paraxial rays (those near the center). The longitudinal distance between these two crossings is the **longitudinal spherical aberration**. In a fully corrected lens this distance is driven as close to zero as practical; in a soft-focus design it is left deliberately large — often tens of micrometers — to produce the characteristic glow. The degree of softness is thus directly tied to the f-number: at maximum aperture the halo is strongest, and by f/5.6 or so the image typically appears conventionally sharp.

## 12. Apodization

A small number of lenses incorporate an **apodization** (**APD**) element — a filter whose optical density increases smoothly from center to edge. It does not alter the focal length or aberration correction; it attenuates the marginal rays more than the central rays, which softens the transition at the edge of out-of-focus highlights (bokeh). The trade-off is a reduction in effective light transmission: an APD lens with a geometric aperture of f/1.2 may transmit light equivalent to roughly f/1.7 or f/2, depending on the filter profile. Where patent data provides the APD transmission function, the viewer flags the element accordingly; where the function is inferred from the design context, it is noted as such.
