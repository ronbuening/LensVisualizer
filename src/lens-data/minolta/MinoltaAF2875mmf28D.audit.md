# Audit Log - Minolta AF 28-75mm f/2.8 (D)

Patent: JP 2004-101739 A, sole numerical embodiment

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/JP2004101739A.pdf`.
- The numeric tables do not extract cleanly with `pdftotext`, so pages 8-9 were rendered locally for visual checking.
- The rendered tables confirm the key material rows:
  - `1.49700 / 81.6` appears on the low-dispersion positive elements L31, L33, and L42.
  - `1.48749 / 70.2` appears on the fluor-crown rows modeled as S-FSL5-class elements.
  - `1.53610 / 41.2` is used only by the thin hybrid aspheric resin layers.
  - Dense/high-index rows such as `1.84666 / 23.8`, `1.80400 / 46.6`, `1.80518 / 25.4`, `1.83400 / 37.2`, and `1.58144 / 40.8` match the existing data.

### Glass and APD disposition

- No data changes were made.
- The `S-FPL51 (OHARA) / FCD1 class` labels remain attached only to the patent's `1.49700 / 81.6` low-dispersion rows, not to the `1.48749 / 70.2` S-FSL5 rows.
- APD remains `inferred` for the low-dispersion rows because the patent lists nd/vd only and gives no partial-dispersion ratios.

### Semi-diameter disposition

- The patent includes condition text around front effective diameter and 67 mm-class sizing, but it does not publish a per-surface clear-aperture table.
- Existing SDs remain inferred from the 67 mm filter target, paraxial envelope, aspheric slope, edge thickness, and zoom/focus clearance constraints. No SD edits were made.

## 2026-10-30 — Fresh F-mount source, rim and glass review

- Reopened original `patents/JP2004101739A.pdf`: PDF p.7 ¶0024 defines the reference at 587.6 nm; pp.8–9 print all 20 medium entries (16 glass bodies plus four 0.2 mm layers); p.11 Figure 1 supplies the optical section. All source nd/vd pairs were checked, including 1.53610/41.2 on all four layers. No C/F/g indices or partial ratio is printed. The 16 compatible curves are spectral proxies, not historical supplier or melt identification; the four thin layers remain unresolved, with resin chemistry/cure unspecified. Removed nine catalog-only C/F/g copies. APD is inferred only.
- Figure 1 was inspected at native resolution and 600 dpi after the correct rotation. Exposed S2/S9 show flat outer lands; modeled `rimExtensionSd` becomes 30.2/14.5 mm. No cemented interface gets an opaque land. Raise the entire first hybrid compound S7A/S8 together to 14.5 mm, so the layer creates no independent wing. A 15 mm trial makes its edge negative and is rejected. S10/S11 become 10.6 mm together; Figure 1 suggests a larger body (~12.3 mm), but unchanged edge/gap rules prevent literal adoption. Common continuous rims S14–16=11.6, S18/S19=13.7 and S20A–22=14.1 mm better follow Figure 1 and contain the native aperture beam. These are inferred heights, never printed dimensions. No inferred axial cut is added; oblique/weak corners are retained.
- All R/d, aspheres, source media, stop, zoom/focus/aperture controls and tolerances remain unchanged. Canonical validation and the full inferred-cut guard pass. Actual buildLens/computeElementShapes SVGs were inspected at nine focus/zoom states: finite paths and zero hidden trim. Image-circle: zero undersized; all three format-corner chiefs clear. Exact native f/2.91 is iris-limited at all three zoom stations.
- Matched 16-point stop-lattice vignetting samples at focus/zoom 0/.5/1 and five common field fractions retain 8,664 previous passing samples, lose zero and gain 152. These sampled counts are not flux or a continuum guarantee. Inferred close focus and unresolved layer spectra remain limitations.
