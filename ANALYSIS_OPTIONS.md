# Analysis Options — Derivable from Existing Lens Data

Features that can be implemented using only the data and computation engine already present in the codebase. Organized by estimated implementation effort.

---

## Tier 1 — Quick Wins (S: under 2 hours each)

Trivially computable from existing `RuntimeLens` fields. Mostly display work.

| # | Feature | Description | Where to Display | Computation |
|---|---------|-------------|-----------------|-------------|
| 1 | **Telephoto Ratio** | `totalTrack / EFL` — measures how compact the design is relative to its focal length. Values < 1 indicate a telephoto design; > 1 indicates retrofocus. | Aperture readout or header specs | Single division of two existing values |
| 2 | **Back Focal Distance (BFD)** | Distance from last glass surface to the image plane. Important for mirror clearance and mount compatibility. | Aperture readout section | `imgZ - z[N-1]` from `doLayout()` |
| 3 | **Front Focal Distance (FFD)** | Distance from first glass surface to the front focal point. | Aperture readout section | Paraxial trace from image side, or `EFL × (1 - 1/angularMag)` |
| 4 | **Total Track Length** | Overall length from first surface to image plane. Already computed internally as `totalTrack`. | Aperture readout section | Direct read from `RuntimeLens.totalTrack` |
| 5 | **Image Circle Diameter** | Maximum usable image circle at the focal plane, limited by vignetting. | Header specs or readout | `2 × EFL × tan(halfField)` — both values already computed |
| 6 | **Hyperfocal Distance** | The focus distance beyond which everything is acceptably sharp (given f-number and a circle-of-confusion assumption). | Focus slider readout section | `H = EFL² / (N × c)` with CoC = 0.03 mm (full-frame default) |
| 7 | **Depth of Field** | Near and far limits of acceptable sharpness at the current focus distance and aperture. | Focus slider readout section | Standard formulas: `Dn = d×H / (H + d)`, `Df = d×H / (H - d)` |
| 8 | **Lens Summary Statistics** | Breakdown of element types: count of positive/negative elements, spherical vs. aspheric, total glass path length, number of air gaps. | Header specs or analysis panel | Iterate `elements[]` and `surfaces[]` arrays |
| 9 | **Angular Magnification** | Ratio of exit pupil to entrance pupil diameter. Indicates the "speed" at which the cone of light narrows through the lens. | Analysis panel readout | Reverse paraxial trace to find exit pupil SD; divide by `EP.epSD` |
| 10 | **Focus Breathing Metric** | How much the effective focal length changes between infinity and close focus. Critical for video work. | Focus slider readout section | Compare paraxial EFL at `focusT = 0` vs `focusT = 1` |

---

## Tier 2 — Moderate (M: 2–6 hours each)

Require new computation functions but leverage the existing ray tracing infrastructure.

| # | Feature | Description | Where to Display | Computation |
|---|---------|-------------|-----------------|-------------|
| 11 | **Entrance & Exit Pupil Positions** | Z-position of the entrance and exit pupils along the optical axis. Can be drawn as markers on the diagram. | Diagram overlay markers + readout | Paraxial marginal ray trace: pupil position = `z_stop - y_stop / u_stop` (before/after stop) |
| 12 | **Principal Plane Positions (H, H')** | Cardinal points of the optical system. H and H' define where the lens "acts" as a thin lens. Nodal points coincide with principal planes when the lens is in air. | Diagram overlay markers + readout | From paraxial marginal ray: `H = z_img + EFL`, `H' = z_img - (y_img / u_img)` |
| 13 | **Petzval Sum** | `Σ (n' - n) / (n' × n × R)` across all refracting surfaces. Predicts native field curvature of the design. Lower = flatter field. | Analysis panel metric | Sum over all surfaces where `R ≠ ∞` |
| 14 | **Optical Power per Element** | Individual element contribution to total system power. Shows which elements converge/diverge light. | Element inspector grid (new row) | Thick-lens formula: `φ = φ_front + φ_rear - (d/n) × φ_front × φ_rear` per element |
| 15 | **Spherical Aberration Metric** | Difference between where the real marginal ray crosses the axis vs. the paraxial prediction. The primary on-axis image quality indicator. | Analysis panel metric | `traceToImageReal()` vs `traceToImage()` — compare axial intercepts |
| 16 | **Distortion Curve** | Percentage deviation of real image height from ideal (`EFL × tan(θ)`) at multiple field angles. Shows barrel/pincushion character. | Analysis panel SVG chart or modal | Trace chief ray at 5–7 field angles via `traceRay()`, compare to ideal |
| 17 | **Optical Path Layout Table** | Complete tabular view of all surfaces: label, R, d, nd, sd, element assignment, surface power. The "prescription data" view. | Analysis panel or modal (scrollable table) | Format existing `L.S[]` array data with computed `φ = (n' - n) / R` per surface |
| 18 | **Glass Map (Abbe Diagram)** | SVG scatter plot with nd on Y-axis and vd on X-axis. Each element is a dot, colored by APD status or dispersion class. Standard optical engineering visualization. | Modal or analysis panel | Plot `elements[].nd` vs `elements[].vd` in a new SVG component |
| 19 | **Aspheric Departure Profile** | For each aspheric surface, plot the difference between the full aspheric sag and a best-fit sphere vs. radial height. Shows how much the asphere departs from spherical. | Element inspector expansion or modal | `renderSag(h, idx, L) - sag(h, R)` at 20–30 heights per surface |
| 20 | **Chromatic Focal Shift Curve** | Plot of focus position vs. wavelength across the visible spectrum. Shows how well the design corrects color. | Analysis panel SVG line chart | Trace paraxial focus at ~10 wavelengths between F-line (486nm) and C-line (656nm) using Abbe dispersion model |
| 21 | **Zoom Characteristic Curves** | For zoom lenses: plot EFL, f-number, and half-field angle vs. zoom position. Shows how the lens changes across its range. | Analysis panel (zoom lenses only) | Data already exists in `zoomEFLs`, `zoomEPs`, `zoomHalfFields` — just needs charting |

---

## Tier 3 — Significant (L: 6–12 hours each)

Require new ray-trace analysis loops, new reusable SVG chart components, and careful UI integration.

| # | Feature | Description | Where to Display | Computation |
|---|---------|-------------|-----------------|-------------|
| 22 | **Longitudinal SA Plot** | Ray height (Y-axis) vs. axial focus shift (X-axis). The classic spherochromatism diagnostic. Shows how focus changes with aperture zone. | Modal or analysis panel | Trace real rays at 10–15 pupil heights via `traceRay()`; find each ray's axial intercept; new SVG chart component |
| 23 | **Transverse Ray Fan Plot** | Transverse ray error (Δy) vs. pupil coordinate. The standard aberration diagnostic showing SA slope, coma asymmetry, and higher-order structure. | Modal or analysis panel | Trace dense ray fan (20+ rays) on-axis and off-axis; compute Δy = (real_y - ideal_y) at image plane |
| 24 | **Vignetting / Relative Illumination** | How much light reaches the image at each field angle. Combines geometric vignetting (ray clipping) with cos⁴ falloff. | Analysis panel SVG chart | Trace full ray fan at 7+ field angles; count surviving (non-clipped) rays; multiply by cos⁴(θ) |
| 25 | **Spot Diagram** | 2D scatter of ray intersections at the image plane from a grid of rays across the pupil. Shows the shape and size of the blur at each field point. | Dedicated modal | Trace 100+ rays (polar or rectangular grid) through pupil; collect (x, y) at image plane; plot as SVG dots |
| 26 | **Field Curvature + Astigmatism Plot** | Tangential and sagittal focal surface positions vs. field angle. Two curves showing how the "best focus" surface bends and splits. | Modal or analysis panel | Trace tangential fan (meridional plane) and sagittal fan at multiple field angles; find best focus for each |
| 27 | **Coma Visualization** | Off-axis ray fan showing the asymmetric flare pattern. Upper and lower marginal rays arrive at different heights, creating the comet-shaped blur. | Diagram overlay or modal | Dense off-axis ray trace; measure upper vs. lower ray spread at image plane |
| 28 | **Element Power Bar Chart** | Visual bar chart showing each element's optical power (positive/negative). Quickly reveals the power balance of the design. | Analysis panel | Compute element power (Tier 2 #14); render as horizontal SVG bar chart with pos/neg coloring |

---

## Tier 4 — Major (XL: 12+ hours)

Substantial new computational and UI subsystems.

| # | Feature | Description | Where to Display | Computation |
|---|---------|-------------|-----------------|-------------|
| 29 | **Seidel Aberration Coefficients** | The five 3rd-order Seidel sums (S_I through S_V): spherical, coma, astigmatism, field curvature, distortion. Per-surface breakdown shows which elements contribute most to each aberration. | Analysis panel with per-surface table | Requires marginal + chief ray heights and angles at every surface from `paraxialTrace()` with `recordHeights`; significant math for Seidel coefficient formulas |
| 30 | **Ray Intercept Curves (full set)** | Complete tangential and sagittal ray fans at 3–5 field angles, all plotted together. The definitive aberration diagnostic used by optical engineers. | Dedicated modal with coordinated SVG plots | Multiple ray fan traces + multi-panel SVG chart system with shared axes |
| 31 | **Geometric MTF Estimate** | Modulation transfer function estimated from spot diagram data (or direct ray-based OPD computation). Shows contrast vs. spatial frequency. | Dedicated modal | Either FFT of spot diagram or OPD-based computation; computationally intensive; needs frequency-axis chart |
