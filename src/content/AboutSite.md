---
slug: about-site
title: About Optical Bench
summary: How this interactive lens visualization tool was built and what makes it unique.
tag: article
---

# About Optical Bench

Optical Bench is an interactive reference site for exploring the optical design of real camera lenses. Each lens displayed here is derived from a published optical patent — the same surface prescriptions, glass types, and element arrangements that define the physical lens.

The goal is to make these designs tangible: to show how light actually moves through a lens, how elements are shaped and spaced, and how focus and aperture adjustments change the optical path. Rather than static diagrams, every cross-section is computed in real time from the patent data, with ray tracing that responds to your inputs.

## Sharing Views

Lens and comparison pages keep the current shareable view in the browser URL. Copy the address bar to share the selected element, glass map, chromatic aberration overlay, Petzval curvature overlay, bokeh preview, analysis drawer, active analysis tab, and focus/aperture/zoom settings.

## How It's Made

This site is created by **Ron Buening**. The optical prescriptions are translated from patent filings — a process that involves interpreting lens tables, converting between notation conventions, and validating the data against known optical properties.

**Claude** (Anthropic) is used in the development of this project:

- **Patent translation** — Extracting and converting surface data, glass specifications, and aspherical coefficients from patent documents into structured lens prescriptions
- **Optical math** — Paraxial ray tracing, sag curve computation, entrance pupil calculation, and chromatic dispersion modeling
- **Site development** — TypeScript React components, SVG rendering logic, theme system, and the interactive controls that bring the lens data to life

---

**[View on GitHub](https://github.com/ronbuening/LensVisualizer)** · **[Request a Lens](https://github.com/ronbuening/LensVisualizer/issues/new?labels=new+lens&title=New+Lens:+&body=Patent+%23:+)**

*The source code for Optical Bench is maintained as the open-source [LensVisualizer](https://github.com/ronbuening/LensVisualizer) project on GitHub.*
