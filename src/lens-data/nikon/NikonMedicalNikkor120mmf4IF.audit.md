# Audit Log — Nikon Medical-Nikkor 120mm f/4 IF

Patent: US 4,437,734 A, Example 1 / Figure 3.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. The exact USPTO PDF page 3 was rendered at high resolution and the optical
rims in Figure 3 were compared with the site diagram. Dimension leaders, reference labels, and non-optical ink were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 9-11 (D3) | 14.0, 13.0, 12.5 mm | 18.0, 18.0, 18.0 mm | Restores the broad cemented-component rim shown in Figure 3. |
| 12-13 (L8) | 13.8, 14.5 mm | 14.2, 14.2 mm | Produces the source-like common rim within slope and gap limits. |

The moving G2 doublet remains at 13.82/13.8/13.7 mm because enlarging it to the apparent source rim violates the
adjacent shared-gap geometry. The retained values are therefore the geometry-safe ceiling rather than a missed figure
match.

### Glass classification

All nine physical-glass positions resolve to compatible Sellmeier curves. The uniquely compatible 785261, 697556, and
723380 rows are now labeled as supplier-neutral SF56A, K-LaK14, and S-BAH28 catalog equivalents. The 805255 and 713539
rows remain class-level because multiple compatible catalogs exist.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values L1-L9 while retaining descriptive inspector labels.
- Confirmed the moving second group has negative power; the diagram caption remains `G2 (−) / FOCUS`.
- Verified infinity-to-1:1 travel: G2 moves 30.242 mm imageward while G1 and G3 remain fixed.

## 2026-10-30 — Fresh source outline and complete glass review

- Directly inspected original `patents/US4437734.pdf`: Example 1 Figure 3 and its matching f/4 infinity plots on PDF p. 3; complete nine-media Example 1 table/definitions on p. 15 and continuation/stop statement on p. 15 right. All nine nd/νd pairs, source R/d, focus gaps and stop position remain unchanged. Source nd/νd notation is retained; no additional line indices or numerical partial-dispersion data are supplied.
- Inspected every air-facing and cemented face at 600 dpi. This PDF places its native 2320×3408 scan at 72 ppi; the large render adds no source precision. Local G3 vertex scale is about 9.2 native px/mm. The front group has a common source outline: restore S2/S3/S4/S5 continuous caps to the retained 24.0 mm front height. Preserve the existing D3 optical caps.
- Source L8 has a resolved concave front end land: measured cap/edge q ≈ 0.84 with native half-edge about 141 px, one-pixel range approximately 0.827–0.853. Adopt S12's existing 14.2 mm clear cap with `rimExtensionSd: 15.3`; continuous rear S13 grows to 15.3 mm. Adopted q = 0.928105 / land 1.1 mm is explicitly farther outward than the measured endpoint, preserving the prior optical cap rather than introducing a new inferred trim. The figure supports the taller outer rim; its clear endpoint is not forced into the tracing aperture. Full G2 16.0 mm trial fails S5→S6: 1.11 mm sag against 0.833 allowed in the unchanged 0.925 mm infinity gap. No land is invented on that continuous source face. Other faces have no additional supported usable cap-end trims.
- All nine media retain compatible coefficient coverage. Explicit J-SF6/LAC8 labels replace misleading generic unresolved text without changing any selected curve. L9 N-SK10 remains a nonidentical proxy (catalog 1.62278/56.98 versus source 1.62280/56.7); corrected public strict-match/rounding implications. No supplier, melt, composition or quantitative APD is inferred.
- Focused surface, image-circle, aperture and field checks pass. Nine actual SVG focus/zoom-grid views show connected compound outlines and no automatic rim trim. Catalog consistency passes. Zoom columns repeat this fixed-focal-length lens; the three focus rows exercise its published internal-focus travel.
