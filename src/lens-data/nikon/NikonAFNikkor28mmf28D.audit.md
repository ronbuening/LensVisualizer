# Nikon AF Nikkor 28mm f/2.8D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US5557473.pdf`, Third Embodiment / Table 5 and FIG. 3.

### Prescription And Focus Model

- The data file remains aligned to Table 5: `f = 28.6 mm`, `F = 2.86`, and `2ω = 75.4°`.
- The tabulated radii, center thicknesses, air spaces, fixed stop `S1`, aperture stop `STO`, and back focus match the patent example.
- The patent does not publish close-focus spacing tables. The current final-gap unit-extension model remains a visualization aid tied to Nikon's published 0.18x maximum reproduction, not a patent-derived focus cam.

### Glass And APD

- Rechecked all six patent glass rows. No `nd` / `νd` transcription changes were found.
- Updated L3 from a prose-only unmatched label to explicit `797454`, matching the project convention for unresolved patent glass rows and the same nd/vd family already audited on the Nikon 28Ti.
- No coefficient-backed exact public catalog match was verified for L3 (`nd=1.79668`, `νd=45.4`), so it remains a code-only/high-index lanthanum-dense-flint annotation.
- L1 remains a softened SF2-class label rather than an exact catalog assertion because the patent row `nd=1.64831`, `νd=33.8` does not round-trip exactly to current SCHOTT/OHARA data.
- The patent publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, `dPgF`, ED, fluorite, or anomalous-partial-dispersion rows; no APD fields were added.

### Semi-Diameters

- US 5,557,473 does not publish per-surface clear apertures or effective diameters for Table 5.
- Current SDs remain derived visualization estimates. They are consistent with the patent layout: the front biconvex element carries the widest field bundles, the aperture region narrows around `STO`, and the rear positive elements re-open without exceeding the tight L4/L5 air-lens sag clearance noted in the data header.

## 2026-07-30 - `797454` catalog-equivalent review

- Rendered and visually rechecked Third Embodiment / Table 5. L3 remains `nd = 1.79668`, `vd = 45.4`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.09`).
- Relabeled L3 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no prescription, focus, aperture, or semi-diameter values changed.

## 2026-10-29 — F-mount surface and glass reinspection

Fresh original source: `patents/US5557473.pdf`, Third Embodiment Figure 3 on PDF page 4 and Table 5 across pages 7–8. Directly inspected the 600 dpi rotated figure and every convex/concave face of the six singlets. The embedded raster is 300 dpi; the approximately 2380 px first-to-last vertex span at 600 dpi over 50.75 mm gives about 23.4 native px/mm.

Added S4 rear concave rim extension from the retained 13.6 mm optical cap to the existing 16.9 mm outer height, following L2’s clear flat seat. S9/S10/S11 have curved endpoints at their rims, without an independently resolved short land; no new inferred cut is supported. The constrained 6.85 mm L4/L5 shared cap stays unchanged. All source R/d, stop positions, aperture and qualified unit-extension focus model remain unchanged.

All six source nd/νd pairs match Table 5, with explicit d-line wavelength 587.6 nm. The patent publishes no θgF, extra spectral indices or APD identification; no spectral override is invented. All six media already have compatible coefficient-backed curves. Qualified the four bare supplier/glass labels as spectral proxies and corrected the public claim that νd=53.87 rounds to the source’s 54.0: it differs by 0.13 and is a compatible approximation. Supplier, melt and chemistry remain unconfirmed.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.648310 / 33.8 | SF2 |
| L2 | 1.651600 / 58.5 | S-LAL7 |
| L3 | 1.796680 / 45.4 | J-LASF017 |
| L4 | 1.784700 / 26.1 | SF56A |
| L5 | 1.696800 / 55.6 | S-LAL14 |
| L6 | 1.713000 / 54 | S-LAL8 |

All selected curves are qualified spectral proxies; source coordinates and any source θgF remain authoritative. No tolerance was relaxed. Focused surface, image-circle and aperture audits pass on this absolute-path candidate; current-label resolver and `assertCatalogConsistent()` pass. Native SVG geometry at nine focus/zoom states has no hidden rim trim; the rendered outlines were inspected. Shared dispersion/partial-dispersion suites passed 2 files / 93 tests for this wave. Full gates and commit integration are performed by the coordinator.
