---
slug: lens-dimensions-primer
title: Lens Dimensions and Distances
summary: A beginner-friendly tour of the five first-order distances — EFL, BFD, FFD, hiatus, and total track — that summarize a lens as a geometric object.
tag: guide
---

# Lens Dimensions — Five Distances That Describe Any Lens

Once a lens has been reduced to its [cardinal points](/articles/cardinal-elements-primer), the rest of its first-order behavior can be summarized by five distances measured along the optical axis. These distances are what optical engineers exchange in datasheets, what camera designers worry about when fitting a lens to a body, and what you can use to reason about a design before tracing a single ray. Every lens diagram on this site can render all five distances as labeled measurement lines below the optical axis — turn on the **DIMENSIONS** toggle to see them.

## Effective Focal Length (EFL)

The **effective focal length**, abbreviated **EFL**, is the number printed on the front of every lens you have ever owned. Geometrically, it is the distance from the rear principal point **H'** to the rear focal point **F'**. EFL determines magnification: a 50 mm lens forms an image of a distant object that is half the size of an image formed by a 100 mm lens. It also sets the field of view for any given sensor size and, together with the entrance-pupil diameter, the f-number.

EFL is *effective* because, unlike the back focal distance, it is independent of where the elements physically sit. Two lenses with the same EFL will magnify a distant scene identically, even if one is a stubby telephoto and the other a long retrofocus. EFL is the single most important geometric specification of a lens.

## Back Focal Distance (BFD)

The **back focal distance**, abbreviated **BFD**, is the gap between the rear glass surface of the lens and the image plane when the lens is focused at infinity. This is a purely physical measurement: it tells you whether the lens fits the camera body. Mirrorless cameras have a short flange-to-sensor distance and tolerate lenses with small BFD, while DSLRs need enough BFD to clear the swinging mirror. Wide-angle lenses on SLR-style cameras *must* be retrofocus designs, deliberately engineered to push the BFD outward beyond their natural focal length, because a literal 18 mm of clearance is impossible behind a 30 mm-thick mirror box.

In the diagram, BFD is the distance from the last vertex of the lens to **F'**, drawn as the second measurement line.

## Front Focal Distance (FFD)

The **front focal distance**, abbreviated **FFD**, is the mirror image of BFD on the object side. It is the distance from the front vertex of the lens out to the front focal point **F**. FFD is rarely useful to photographers but matters in scientific imaging — it tells you, for instance, where to place a collimating point source so that its rays will emerge from the back of the lens parallel to the axis. A telephoto design typically has a large FFD because **F** sits well in front of the first element; a wide-angle design often has **F** tucked among or behind the elements, giving a small or even negative FFD.

## Hiatus

The **hiatus** is the signed distance from **H'** back to **H**, measured along the axis. In an idealized thin lens, **H** and **H'** coincide and the hiatus is zero. In real lenses they are separated, sometimes by a few millimeters, sometimes by tens of millimeters, and the gap is the hiatus.

The hiatus is the easiest single number to read for distinguishing design archetypes. A symmetric double-Gauss design (a Planar, a Summicron) has a small hiatus because the layout is balanced front to back. A retrofocus wide-angle has a *negative* hiatus: **H'** sits well behind **H**, sometimes outside the rear of the lens entirely. A telephoto has a *positive* hiatus: **H'** sits forward of **H**, allowing the barrel to be shorter than the focal length. Because the sign matters, the diagram displays hiatus with an explicit `+` or `−` so the design family is readable at a glance.

## Total Track

The **total track** is the simplest and most physical of the five distances: the length from the front vertex of the lens to the image plane. It is what you would measure with a ruler if you could see through the camera body. Total track is the engineering envelope a designer must hit, and it tells you whether two lenses of the same focal length are compact or sprawling. A Sonnar-derived telephoto and a long-focus tele of the same EFL can have very different total tracks.

## Reading the Stack

When the dimensions overlay is on, the five lines stack vertically beneath the diagram in this order: EFL, BFD, FFD, hiatus, total track. Each line carries arrowheads at its endpoints and a millimeter readout in the middle. You can hide any individual measurement using the **EFL**, **BFD**, **FFD**, **HIA**, and **TRK** sub-toggles inside the **DIMENSIONS** group, which is helpful when only one distance is relevant to the comparison you are making.

A useful exercise is to step through several lenses of the same nominal focal length and watch how the five numbers shift. A 50 mm Planar, a 50 mm Sonnar, and a 50 mm retrofocus pancake will all share the same EFL, but their BFD, hiatus, and total track will tell you everything about why each design exists, what it had to compromise, and how it behaves when paired with a particular camera body.

## Where to Go Next

If you have not read the [Cardinal Points of a Lens](/articles/cardinal-elements-primer) primer yet, that guide explains the six reference points from which all five of these distances are derived. Together, the two primers cover the geometric vocabulary you need to read any lens diagram on this site at the first-order level — before you start asking about [aberrations](/articles/aberrations-primer), the family of imperfections that the geometric description deliberately ignores.
