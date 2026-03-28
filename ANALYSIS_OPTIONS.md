# Analysis Options — Next Optical Measures to Add (from Existing Lens Data)

This file is intentionally filtered to **future options only**.

The app already ships: spherical aberration (metric + profile), coma previews, distortion curve, focus breathing, vignetting / relative illumination, Petzval display, Abbe diagram, and LCA inset widgets. Those are treated as baseline and excluded below.

---

## Selection Criteria

All items below are feasible with data already present in `*.data.ts` files and/or values already derived into `RuntimeLens` by `buildLens()`.

- **Tier 1:** mostly arithmetic over existing fields (very low engineering risk)
- **Tier 2:** paraxial-level tracing or per-element computations (moderate effort)
- **Tier 3:** dense real-ray sweeps and new charts (higher effort, highest insight)

---

## Tier 1 — Metadata / Geometry Metrics (Quick Wins)

| # | Measure | Why it matters | Inputs already available | Suggested UI |
|---|---------|----------------|--------------------------|--------------|
| 1 | **Telephoto Ratio** (`totalTrack / EFL`) | Compactness vs focal length; quickly identifies retrofocus vs telephoto behavior. | `RuntimeLens.totalTrack`, `RuntimeLens.EFL` | Lens header spec pills |
| 2 | **Back Focal Distance (BFD)** | Mount / sensor clearance proxy and adaptation relevance. | `zPos[last]`, `imgZ` from current layout pass | Lens header + compare mode column |
| 3 | **Image Circle Diameter (ideal rectilinear)** | Fast sanity check for format coverage assumptions. | `EFL`, `halfField` (`2*EFL*tan(halfField)`) | Specs row near focal/aperture |
| 4 | **Element Complexity Index** | One-number summary of mechanical/optical complexity. | `elements`, `surfaces`, `asph`, `doublets`, `groups` | Inspector summary card |
| 5 | **Asphere Utilization Metrics** | Helps explain where correction burden is placed. | `asph` map + surface labels + `elemId` | Element Inspector section |
| 6 | **Glass Dispersion Risk Score** | Flags potential chromatic correction difficulty from glass set alone. | `vd` values from `elements`, `vdByIdx` | Abbe panel side readout |
| 7 | **Moving-Group Travel Budget** | Shows mechanical focus/zoom burden and likely breathing risk. | `var` ranges and `zoomPositions` | Focus/zoom tab metadata |
| 8 | **Zoom Constancy Metrics** | Quantifies varifocal vs parfocal tendencies and aperture drift by zoom. | `zoomEFLs`, `zoomFOPENs`, `zoomLabels` | Breathing tab add-on chart |

---

## Tier 2 — Paraxial / Cardinal-Point Measures

| # | Measure | Why it matters | Inputs already available | Suggested UI |
|---|---------|----------------|--------------------------|--------------|
| 9 | **Entrance/Exit Pupil Distances** | Core explanation tool for perspective, vignetting behavior, and pupil magnification. | `epZRelStop`, `xpZRelLastSurf`, `xpSD`, zoom variants | Diagram overlay toggles + readout |
| 10 | **Pupil Magnification** (`XP/EP`) | Useful for DOF intuition and aberration balancing context. | `xpSD`, `EP.epSD` | Aperture/analysis readout |
| 11 | **Principal Plane Locations (H, H')** | Converts lens from “black box” to cardinal-point model; useful in education and comparisons. | Existing paraxial traces in `buildLens`/`optics.ts` | Diagram overlay markers |
| 12 | **Nodal Point Separation** | Good pedagogical metric; useful when discussing thick-lens behavior. | Derived from principal planes in air model | Diagram overlay + hover tooltip |
| 13 | **Element Optical Power Breakdown** | Shows where convergence/divergence actually occurs. | Per-surface `R`, `n`, element spans (`ES`) | Element Inspector table + bars |
| 14 | **Surface Power Ledger** (`(n'-n)/R`) | High-signal diagnostic for understanding correction strategy by surface. | `S[]` plus refractive index transitions | New “Prescription” table tab |
| 15 | **Chief-Ray Sensor Incidence Angle** (center/corner) | Useful proxy for sensor stack compatibility and edge shading risk. | Chief-ray traces + image-plane intercept geometry | Distortion/Vignetting footer metrics |
| 16 | **Hyperfocal + DOF (model-based)** | Practical photographer-facing extension using current EFL and f-number state. | `dynamicEFL`, active f-number, focus distance mapping | Focus tab auxiliary panel |

---

## Tier 3 — High-Value Real-Ray Diagnostics

| # | Measure | Why it matters | Inputs already available | Suggested UI |
|---|---------|----------------|--------------------------|--------------|
| 17 | **Transverse Ray Fan (T/S)** | Most direct geometric aberration signature beyond scalar metrics. | Existing real `traceRay` engine + dense pupil sweep | Dedicated analysis chart panel |
| 18 | **Spot Diagram (multi-field)** | Gives intuitive blur shape and size at center/mid/corner. | Real ray tracing with pupil sampling grid | Modal with center/mid/corner tabs |
| 19 | **Field Curvature + Astigmatic Difference** | Explains best-focus surface bend and sagittal/tangential split. | Off-axis sweeps + best-focus solve loop | New chart in Aberrations tab | Implemented in Aberrations tab |
| 20 | **Longitudinal Chromatic Focus Curve** | Extends existing LCA inset into full wavelength trend. | Existing dispersion model (`vdByIdx`) + repeated paraxial solves | Chromatic analysis section |
| 21 | **Coma Asymmetry Index vs Field** | Turns current coma visuals into a comparable scalar curve. | Current coma routines plus field sweep | Coma section mini-chart |
| 22 | **Relative Illumination Decomposition** | Split geometric clipping vs cos⁴ for clearer diagnosis. | Current vignetting computation already tracks both terms | Vignetting chart toggle |

---

## Recommended Implementation Order

1. **Tier 1 #1, #2, #5, #7** (quick value + almost no computational risk)
2. **Tier 2 #9, #10, #13** (leverages already computed runtime fields)
3. **Tier 3 #22, #21** (incremental upgrades to existing tabs)
4. **Tier 3 #17, #18, #19** (new charting subsystem)

---

## Notes on Scope

- Keep analysis math in `src/optics/*` pure functions.
- Keep visualization and interaction in `src/components/display/*`.
- For compare mode, prioritize scalar metrics first (before heavy charts) so lenses can be ranked side-by-side.
