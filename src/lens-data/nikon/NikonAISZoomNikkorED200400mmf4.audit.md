# Audit Log — Nikon Zoom-Nikkor ED 200-400mm f/4

Patent: US 4,452,513 A, Example 3 / Figure 15.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The exact USPTO PDF page 8 was re-reviewed at high resolution. The existing G2-G4 semi-diameters already follow the
optical rims in Figure 15 as closely as the edge-thickness and r9-r10 shared-gap constraints allow, so no additional
clear-aperture change was made in this pass. The comparison excluded surface labels, rays, brackets, and housing ink.

### Glass classification

All 15 physical-glass positions resolve to compatible Sellmeier curves. The uniquely compatible 755276, 734511, and
581408 rows are now labeled as supplier-neutral SF4, TAC4, and PBL25 catalog equivalents. Ambiguous TAF4 and BK7-class
coordinates remain class-level rather than asserting a historical production supplier.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values for L11a through L45b.
- Normalized G1-G4 captions with signed power and functional roles.
- Verified 200-to-400 mm zoom travel: G2 moves 60.631 mm imageward and G3 moves 7.489 mm imageward while G4 remains
  fixed. At 200 mm, close focus moves G1 22.538873 mm objectward while G2-G4 remain fixed.

## 2026-10-30 — Fresh shape and glass reinspection

The 2026-10-30 review directly inspected local `US4452513.pdf`: Example 3 Figure 15 on PDF page 8 at 600 dpi and native 300 dpi raster, and Table 5 with its fifteen-media prescription plus Table 6 focus references on page 16. Every exposed convex/concave face and cemented boundary was inspected. The continuous arcs reach their optical rims; the staggered bonded endpoints, leaders and group braces are not separate cap-end lands. No additional cut or extension is supported, so all geometry is retained.

The existing S9–S10 constraint is confirmed: the unchanged 7.5 mm gap gives a 6.750 mm sag budget and common-cap bound 26.823897 mm, close to the retained S10 SD26.7. Extending its curve to the neighboring 30 mm body height would violate that guard; the figure does not independently resolve a land that would justify replacing the end. The source prescription, stop inference, linearly interpolated zoom and calculated production 4 m focus controls remain unchanged. The source's nearer worked states remain references rather than silently substituted production controls.

All fifteen source n/ν pairs are exact and preserved. The table does not state a reference wavelength alongside n/ν; the existing catalog-supported d-line interpretation remains an inference, as documented in the data header. All fifteen current curves, including TAF4 and N-BK7 at formerly class-only labels, are explicitly qualified spectral proxies. The four high-Abbe positions remain a production ED correlation, without source APD, C/F/g indices, partial-dispersion values, or a known historical supplier. Surface/circle checks pass; both catalog stations reach at least 99% of the format corner and remain iris-limited within the aperture band. Nine SVG states have fifteen finite paths and zero trim. At the calculated 4 m endpoint conjugates and interpolated middle, the unchanged 19.304930 mm full iris passes 25/25 aimed axial samples each; the middle conjugate is not published. Source/catalog checks and shared glass suites pass (94 tests).
