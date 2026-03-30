---
slug: about-site
title: About Optical Bench
summary: How this interactive lens visualization tool was built and what makes it unique.
tag: article
---

# About This Site

LensVisualizer is an interactive tool for exploring the optical design of real camera lenses. Each lens displayed here is derived from a published optical patent — the same surface prescriptions, glass types, and element arrangements that define the physical lens.

The goal is to make these designs tangible: to show how light actually moves through a lens, how elements are shaped and spaced, and how focus and aperture adjustments change the optical path. Rather than static diagrams, every cross-section is computed in real time from the patent data, with ray tracing that responds to your inputs.

## How It's Made

This site is created by **Ron Buening**. The optical prescriptions are translated from patent filings — a process that involves interpreting lens tables, converting between notation conventions, and validating the data against known optical properties.

**Claude** (Anthropic) is used in the development of this project:

- **Patent translation** — Extracting and converting surface data, glass specifications, and aspherical coefficients from patent documents into structured lens prescriptions
- **Optical math** — Paraxial ray tracing, sag curve computation, entrance pupil calculation, and chromatic dispersion modeling
- **Site development** — TypeScript React components, SVG rendering logic, theme system, and the interactive controls that bring the lens data to life

---

**[View on GitHub](https://github.com/ronbuening/LensVisualizer)** · **[Request a Lens](https://github.com/ronbuening/LensVisualizer/issues/new?labels=new+lens&title=New+Lens:+&body=Patent+%23:+)**
