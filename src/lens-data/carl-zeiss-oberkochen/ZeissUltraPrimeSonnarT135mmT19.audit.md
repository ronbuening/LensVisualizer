# Lens integration audit — ZeissUltraPrimeSonnarT135mmT19.data

## 2026-09-18 — Repository integration and glass audit

Added the missing SCHOTT N-PSK53 inquiry-glass and N-SF6 Sellmeier curves. Removed the N-SF6 → SF6 alias: the named lead-free glass now resolves to its own published dispersion rather than the legacy lead-flint curve. Removed catalog-derived nC/nF/ng overrides from all eight elements so runtime catalog dispersion is used. Retained catalog-derived dPgF with its existing attribution. All eight elements resolve. The 31.14 mm design image circle remains explicit in projection; image-circle audit skips this lens because Super 35 has no canonical imageFormat id.

### Semi-diameter figure audit

Reviewed local US 2017/0307860 A1, PDF page 4, Fig. 7. Optical rims agree with the authored taper within approximately 1–2%; automated readings through L5/L6 include ray lines and were rejected. Retained all SDs. The construction table on PDF page 14 independently confirms the named glass types. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.
