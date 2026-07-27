---
slug: about-site
title: About Surface & Stop
summary: How this interactive lens visualization tool was built and what makes it unique.
tag: article
---

# About Surface & Stop

Surface & Stop is an interactive reference for exploring the optical designs behind real camera lenses. It turns
published patent prescriptions into responsive cross-sections so you can see how elements are shaped and spaced, trace
light through the system, and study how focus, aperture, and zoom affect the optical path.

The aim is to make lens design tangible. The diagrams are calculated from structured surface and glass data rather than
traced from a static illustration, and the analysis views respond to the state you select.

## Where The Data Comes From

Each model starts with a published patent embodiment. Reconstructing it can involve choosing one example from several,
translating surface tables and aspheric conventions, resolving glass references, and checking the resulting section
against figures and known optical properties. Patent and attribution metadata is shown on the corresponding lens page.

Patents do not always document the exact design that reached production. They may describe experimental, alternative,
or pre-production embodiments, and some values can remain ambiguous. Surface & Stop therefore presents these entries as
patent-derived models, not as verified manufacturing prescriptions.

## What The Analysis Means

Ray paths, first-order values, and aberration plots are computed from the declared prescription and the current viewer
state. They are useful for understanding and comparing designs, but they are simulations—not measurements of a physical
lens. Manufacturing tolerances, coatings, mechanical baffling, sensor behavior, and undocumented production changes can
all affect real-world performance.

## Sharing Views

Lens and comparison pages keep shareable state in the browser URL. Copy the address bar to share the selected element,
overlays, open analysis view, and focus, aperture, or zoom settings. Supported perspective-control and comparison state
is preserved as well.

## How It's Made

Surface & Stop was created by **[Ron Buening](https://ronbuening.com/)**. The site is built with TypeScript, React, a
pure optical computation layer, and inline SVG rendering.

LLMs assist with parts of the development workflow, including patent transcription, optical code, tests, documentation,
and interface implementation. Source checks, typed data contracts, validation, and automated tests are used to review
that work.

---

**[View the source on GitHub](https://github.com/ronbuening/LensVisualizer)** ·
**[Request a Lens](https://github.com/ronbuening/LensVisualizer/issues/new?labels=new+lens&title=New%20Lens%3A%20&body=Patent%20%23%3A%20)**
