---
slug: cardinal-elements-primer
title: Cardinal Points of a Lens
summary: A gentle introduction to focal, principal, and nodal points — the six reference locations that define how any lens forms an image.
tag: guide
---

# Cardinal Points — Where a Lens Lives in Space

A camera lens contains anywhere from three to twenty pieces of glass, each with its own curvature, thickness, and spacing. That sounds like a lot to keep track of, but for most imaging questions the entire stack can be replaced by just six reference points along the optical axis. These are the **cardinal points**, and once you know where they sit you can predict where the image forms, how big it is, and how the lens behaves when you tilt the camera or move the subject. Every lens on this site has its cardinal points computed automatically — turn on the **CARDINALS** toggle below the diagram to see them appear as labeled tick marks and dashed curves.

## The Three Pairs

The six cardinal points come as three pairs: one pair on the object side (where light enters) and a matching pair on the image side (where light leaves). Each pair captures a different first-order property of the lens.

The **focal points**, labeled **F** on the object side and **F'** on the image side, are the easiest to describe. Light arriving from infinity parallel to the axis converges at **F'**. Conversely, light that emerges from **F** on the object side leaves the lens parallel to the axis. If you photograph a star, its image lands at **F'**.

The **principal points**, labeled **H** and **H'**, are slightly more abstract. They are not where rays actually focus — they are reference planes from which the lens "appears" to do all of its bending. Imagine a thin ideal lens that would behave identically to your real, thick, multi-element lens. The position of that imaginary thin lens, projected onto the optical axis, is the principal plane. Real lenses have *two* principal planes, **H** and **H'**, because the bending is split between the front and back of the system. The distance from **H'** to **F'** is what optical engineers actually mean by **focal length**.

The **nodal points**, labeled **N** and **N'**, govern how the image moves when the lens rotates. A ray aimed at **N** emerges from **N'** travelling in the same direction it entered, just shifted laterally. This is the property that matters for panoramic photography: rotate the camera around **N'** and the image will not parallax. For a lens fully surrounded by air, **N** coincides with **H** and **N'** coincides with **H'**, so the diagram collapses the labels to **H/N** and **H'/N'**. They only separate when the object and image spaces have different refractive indices, which is unusual for ordinary photographic lenses.

## Reading the Diagram

When you enable cardinals on a lens diagram, three visual layers appear, each color-coded.

- **F** and **F'** are short ticks on the optical axis, drawn in the slider-accent color.
- **H** and **H'** are accompanied by dashed arcs that represent the principal *surfaces*. These curves are not real glass; they are the geometric loci on which the system's bending is concentrated. The principal points themselves are where those surfaces meet the axis.
- **N** and **N'** appear separately only when they do not coincide with the principal points. For an in-air photographic lens, you will normally see them merged into the **H** and **H'** markers.

You can hide individual layers — focal, principal, or nodal — using the small **F**, **H**, and **N** sub-toggles inside the **CARDINALS** group. This is useful when comparing lenses at a glance: turn off everything except the principal points, and the optical "centers" of two designs become directly comparable.

## Why They Matter

Two facts about cardinal points repay the small effort of learning them.

The first is that they make focal length unambiguous. The number stamped on the front of a lens — *50 mm*, *85 mm*, *200 mm* — is the distance from **H'** to **F'**, not the physical length of the barrel. A retrofocus wide-angle has its rear principal plane sitting *behind* the last element, well past the body's lens mount, so a 24 mm lens can be physically much longer than 24 mm without contradicting its label. A telephoto lens has the opposite arrangement: its rear principal plane is shoved forward, so the barrel can be much shorter than the focal length suggests. Looking at where **H'** falls relative to the glass tells you immediately which kind of design you are holding.

The second is that the cardinal points let you reduce the whole lens to a textbook diagram. Once you know the positions of **F**, **F'**, **H**, and **H'**, you can compute image position and magnification using the same simple constructions that work for a single thin lens — without retracing every surface. Real ray tracing is still required for sharpness and aberrations, but for the geometric questions of *where the image is* and *how big it is*, the cardinal points carry all the necessary information.

## Where to Go Next

The companion guide, [Lens Dimensions and Distances](/articles/lens-dimensions-primer), explains the five distance measurements that the diagram derives from these cardinal points: effective focal length, back focal distance, front focal distance, hiatus, and total track. Together, the cardinal points and the dimension overlay describe everything you need to know about a lens *as a black box*, before you start asking the harder questions about aberrations and image quality.
