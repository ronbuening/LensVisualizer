---
slug: aberrations-primer
title: Understanding Aberrations
summary: An introduction to the optical aberrations that lens designers work to minimize — spherical, coma, astigmatism, and more.
tag: guide
---

# Aberrations — A Conceptual Introduction

A perfect lens would take every ray of light from a single point in the scene and bring them all together at exactly one point on the sensor, regardless of where that ray entered the lens or what color it was. Real lenses cannot do this. The residual failures — the ways in which rays miss their ideal meeting point — are called **aberrations**. Understanding them is the key to understanding why photographic lenses contain so many elements and why different designs render images differently.

## Monochromatic Aberrations

Even if we pretend light has only one color, five distinct aberrations can affect image quality. These are sometimes called the **Seidel aberrations** (or third-order aberrations), after the mathematician who first classified them. **Spherical aberration** is the most fundamental: rays passing through the outer zones of a lens focus at a different distance than rays near the center. In the cross-section diagrams on this site, you can see this when on-axis marginal rays converge at a point that does not coincide with where the paraxial (near-center) rays converge. A lens corrected for spherical aberration brings these two convergence points together; a soft-focus lens deliberately leaves them apart.

**Coma** affects off-axis points. Instead of forming a tight dot, rays from a point away from the center of the frame spread into a comet-shaped flare — brighter on one side, fading on the other. It arises when different zones of the aperture magnify the off-axis image by different amounts. In the viewer, switching on the off-axis ray bundle gives a rough sense of how symmetrically those rays converge: a well-corrected lens keeps them tightly grouped, while one with residual coma fans them out unevenly. The Aberrations panel now includes a real 2D coma point cloud at several field positions. It traces a fixed circular pupil pattern with the skew-ray core and plots the chief-ray-centered tangential and sagittal image heights directly, so you can see the off-axis point shape without synthesizing the missing dimension from a meridional slice. The dense meridional coma plot below it remains the complementary diagnostic for reading the tangential spread across the pupil, and the field-curvature / astigmatism chart now reuses that same off-axis bundle geometry so its tangential-versus-sagittal split is derived from the same real ray family. **Astigmatism** is a related off-axis defect in which rays arriving in two perpendicular planes (tangential and sagittal) focus at different distances, so the image of a point becomes a short line rather than a dot.

**Field curvature** means the natural surface on which the lens forms a sharp image is curved rather than flat. Since sensors and film are flat, the center and edges of the frame cannot both be perfectly sharp at the same focus setting unless the designer flattens the field with additional correcting elements. **Distortion** is the only Seidel aberration that does not blur the image; instead it warps its geometry. Straight lines in the scene bow outward (barrel distortion) or inward (pincushion distortion) because magnification varies with distance from the center of the frame.

## Chromatic Aberrations

White light is a mix of wavelengths, and glass bends shorter (blue) wavelengths more strongly than longer (red) ones. This wavelength-dependent bending produces two chromatic aberrations. **Longitudinal chromatic aberration** (**LCA**) means that red, green, and blue light focus at slightly different distances along the optical axis. The viewer's COLOR overlay shows this directly: when you enable the R, G, and B ray channels, you can see them converge at three distinct points, and the inset LCA diagram reports the spread in micrometers. **Transverse chromatic aberration** (**TCA**) is the lateral version — different wavelengths form images of slightly different sizes, producing color fringing that increases toward the edges of the frame.

## How Designers Correct Aberrations

Lens designers have a limited toolkit: the curvature and spacing of each surface, the choice of glass for each element, the placement of the aperture stop, and the option to use aspherical surfaces. Each of these levers affects multiple aberrations simultaneously, often in opposing directions, which is why practical lens design is a balancing act rather than a series of independent fixes. Cemented doublets pair a low-dispersion crown glass with a high-dispersion flint glass to cancel chromatic aberration while preserving positive power. Aspherical surfaces are particularly effective against spherical aberration and coma because they can vary their corrective contribution across the aperture in ways a sphere cannot. Floating elements — groups that move independently during focusing — help maintain the aberration balance at close distances where it would otherwise degrade.

## Stopping Down and Aberration Behavior

Most monochromatic aberrations diminish rapidly as the lens is stopped down, because the iris blocks the outer-zone rays that contribute most of the error. Spherical aberration and coma, in particular, fall off sharply — which is why many lenses are noticeably sharper one or two stops below their maximum aperture. Field curvature and distortion, however, depend primarily on the field angle and the lens's structural symmetry, so they change little with aperture. Chromatic aberrations also persist at small apertures because they are a property of the glass itself, not of how much of the aperture is used. This is why high-performance designs invest heavily in ED glass and careful doublet balancing rather than relying on the photographer to stop down.

## Reading the Diagrams

When examining a lens on this site, the interplay between the ray-trace overlay, the aperture slider, the focus slider, and the element-detail panel gives you a practical window into all of these effects. Comparing on-axis and off-axis ray bundles reveals the balance between spherical aberration and coma. Enabling the chromatic overlay shows how well the design controls LCA and TCA. Sweeping the aperture slider demonstrates how quickly the monochromatic aberrations clean up. And moving the focus slider from infinity to close range — especially in TRACKS FOCUS mode — shows whether the designer optimized the correction for a single distance or distributed it across the focus range. Each lens tells a slightly different story, and the aberrations are the vocabulary.
