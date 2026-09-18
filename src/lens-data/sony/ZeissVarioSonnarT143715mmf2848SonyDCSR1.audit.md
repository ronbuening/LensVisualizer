# Lens integration audit — ZeissVarioSonnarT143715mmf2848SonyDCSR1.data

## 2026-09-18 — Repository integration and glass audit

All twelve bulk glasses already resolve to compatible curves. The two composite asphere layers remain unresolved. Display manufacturer is Sony, with ZEISS branding and DSC-R1 camera association preserved; the empty source-assignee array remains unchanged.

### Semi-diameter figure audit

Reviewed local US 2008/0218875 A1, PDF page 2, Fig. 1 at 600 dpi. The first-to-last vertex span represents 106.89 mm (approximately 528 pixels in the 1500-pixel-high page preview). Direct optical-rim inspection shows undersized G3/G4 and rear groups; curved leader lines contaminate automated envelope readings. Enlarged surfaces 5/6/7A to 14/13.5/13.5 mm, 8/9 to 14.5/14 mm, 17/18 to 7.7 mm, 19A/20A to 8.3/8.4 mm, and 21–25 to 10.4/11.8/12.2/13.2/13.4 mm. Excluded stepped mechanical rims. A 15 mm G3 trial crossed the thin composite layer and was rejected; the adopted cap passes the surface validator. A figure-sized G9 trial was rejected because 19A turns over between 8.3 and 8.7 mm; the adopted 8.3/8.4 mm pair stays below that limit. The asphere departures in the analysis were recomputed at the new rims. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Manufacturer attribution follows ZEISS’s 2015 partnership explanation (Sony manufactures Sony/ZEISS lenses), reproduced at https://www.sonyalpharumors.com/zeiss-explains-what-photographers-should-know-about-the-sony-zeiss-partnership/ with the original ZEISS link https://blogs.zeiss.com/photo/en/?p=6131. This is independent of the patent-assignee field.

Local browser review covered wide, middle and telephoto states with on-axis rays enabled. The updated optical silhouettes render without visible crossings.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.
