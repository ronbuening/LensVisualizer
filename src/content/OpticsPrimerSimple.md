---
slug: optics-primer
title: How Camera Lenses Work
summary: A gentle introduction to refraction, focal length, and how multiple glass elements combine to form an image.
tag: guide
---

# Optics Primer — A Conceptual Introduction

Every camera lens is a carefully arranged sequence of glass pieces — called **elements** — that work together to bend light from a scene onto a flat sensor or film plane. When you look at a cross-section diagram like the ones on this site, each filled shape represents one of these elements. The shapes are not arbitrary: their curves correspond to the actual curvature of each glass surface, derived from optical patent data. Light enters from the left, passes through each element in turn, and converges at the **image plane** (labeled **IMG**) on the right.

## Elements, Groups, and Doublets

Lens designers organize elements into **groups** — clusters of glass that move together when you focus or zoom. Sometimes two elements are cemented directly together with no air gap between them; this pair is called a **doublet** (or, less commonly, a **triplet** if three are bonded). Cementing elements reduces reflections at the internal surfaces and allows the designer to combine different glass types in close optical contact, which is essential for controlling color errors.

## The Aperture Stop

Somewhere inside every lens sits the **aperture stop** (marked **STO** in the diagrams). This is the adjustable iris diaphragm that controls how much light reaches the sensor. When you change the **f-number** — written as f/1.4, f/2.8, f/5.6, and so on — you are widening or narrowing this physical opening. A smaller f-number means a larger opening and more light. The related concept of the **entrance pupil** (**EP**) is what the stop looks like when viewed from the front of the lens through all the elements ahead of it; its diameter determines the effective light-gathering size of the lens.

## Focal Length and the f-Number

The **effective focal length** (**EFL**), shown in millimeters, describes the lens's magnifying power: longer focal lengths produce more magnification and a narrower field of view. The f-number ties the focal length to the entrance-pupil diameter. An f/2 lens with a 50 mm focal length, for instance, has an entrance pupil roughly 25 mm across. Each individual element also has its own **focal length** (**FL**), which tells you whether that piece of glass converges light (positive FL) or diverges it (negative FL).

## Refractive Index and Glass Types

The symbol **nd** that appears in the element detail panel is the **refractive index** — a number describing how strongly a glass bends light. Most optical glasses have an nd between about 1.45 and 1.95; higher values mean stronger bending at each surface. Not all glasses are alike, though. Crown glasses are relatively low in dispersion, while flint glasses disperse light more aggressively. Lens designers choose specific glasses by catalog name (such as S-LAH58 or S-FPL53) to get a precise combination of refractive index and dispersion for each position in the design.

## Dispersion, Abbe Number, and Chromatic Aberration

Different wavelengths (colors) of light bend by slightly different amounts when they pass through glass — this is **dispersion**. The **Abbe number** (**νd**) quantifies how dispersive a glass is: a high νd (above roughly 55) means low dispersion, while a low νd (below about 35) means high dispersion. When dispersion is left uncorrected, the lens focuses red, green, and blue light at slightly different distances behind the last element. This defect is called **chromatic aberration**. The diagrams on this site can display separate red, green, and blue ray paths so you can see this spread directly. **LCA** (longitudinal chromatic aberration) measures how far apart those focus points are along the optical axis, while **TCA** (transverse chromatic aberration) measures color fringing across the image height. Extra-low dispersion (**ED**) glasses, typically with νd above 65, are the designer's primary weapon against chromatic aberration.

## Ray Tracing: On-Axis, Off-Axis, and Vignetting

The colored lines in each diagram are **rays** — straight-line segments that show the path light takes through each element. **On-axis** rays enter parallel to the optical axis (the dashed centerline) and represent light from a subject at the very center of the frame. **Off-axis** rays enter at an angle and represent light from a subject near the edge of the frame. When a ray strikes the edge of an element or the aperture stop and is blocked, it is **vignetted**; the diagram shows these clipped paths as faint dashed lines. You can toggle between rays arriving from infinity and rays that converge to match the current focus distance, which lets you see how the internal spacing changes and how aberrations shift as you focus closer.

## Aspherical Surfaces

Most lens surfaces are spherical — a single radius of curvature defines the entire curve. An **aspherical** surface departs from a perfect sphere by small, precisely controlled amounts described by polynomial coefficients (labeled **K**, **A4**, **A6**, and so on in the patent data). Aspheres give the designer extra freedom to correct aberrations without adding more elements.
