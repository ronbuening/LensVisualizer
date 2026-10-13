# Lens integration audit — ZeissVarioPrakticar3570mmf2735.data

## 2026-09-18 — Repository integration and glass audit

Assigned eight compatible native e-line proxies: L1 S-LAL12, L2 LAC13, L3 SF2, L4 N-SK14, L5 E-FD4, L7 J-BASF2, L8 N-SSK5, P N-BK7. L6 remains unresolved. No e-line value was converted to a d-line code and no historical supplier identity is asserted.

### Semi-diameter figure audit

Reviewed local DE 3602859 A1, PDF page 11, Fig. 1. The description explicitly calls this a schematic drawing. Leader lines and the schematic spacing prevent a dependable absolute optical-rim scale. Retained the authored SDs; the figure does not establish a reliable correction beyond the measurement uncertainty. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.

## 2026-09-18 — Local-site diagram follow-up

Compared the live wide/tele diagrams again with local DE 3602859 A1, PDF page 11, Fig. 1. Reduced both plane-plate SDs to 12.9 mm: the optical rim is approximately 0.95 of L4's 13.49 mm rim, excluding annotation strokes. The former 16.08/16.46 mm pair overstated the plate and gave a plane plate unequal rims. This is a relative schematic estimate, not a published clear aperture. The updated site silhouette now follows that relative height.

Wide-to-tele order is correct: G1 moves imageward, G2 objectward, and the plate stays fixed. Close focus moves both powered groups objectward together (about 1.78 mm at wide and 6.58 mm at tele), with the fixed plate preserved. This remains an explicitly reconstructed unit-extension model, not a published internal-focus prescription.

L6 remains unresolved in its native e-line coordinates. Removed the stale numerical nearest-match claim; other catalog labels remain explicitly qualified spectral proxies.

Follow-up validation: typecheck, formatting, lint and all 2,717 tests in 276 files passed; the production build prerendered 1,397 pages. Glass reports retain 63/67 resolved batch elements and zero catalog mismatches. All six surface audits pass, the five applicable image-circle audits report no undersized surfaces, and renderer diagnostics report zero SD trim at five zoom positions and both focus-control endpoints. No additional changelog entry was added.
