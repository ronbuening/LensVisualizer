# Lens integration audit — ZeissVarioSonnarT104371mmf1849SonyDSCRX100M12.data

## 2026-09-18 — Repository integration and glass audit

Corrected maker Zeiss to Sony and the display prefix to SONY ZEISS, preserving the lens brand and RX100/II camera association. This removes the spurious zeiss maker slug that failed the metadata/runtime parity test. All seven glasses already resolve to compatible curves.

### Semi-diameter figure audit

Reviewed local US 2013/0314585 A1, PDF page 10, Fig. 9 wide panel at 600 dpi. Excluded the front mechanical flange. The first-to-last optical vertex span provides a scale of approximately 0.14 mm per pixel in the 1500-pixel-high page preview. Reduced front surfaces 1A/2A from 16.3/12.65 mm to 12/10 mm and the following positive element 3/4 from 12.6 mm to 11 mm to preserve the group outline. Remaining optical rims are consistent within drawing uncertainty. Recomputed the front aspheric departures; Table 9 on PDF page 22 independently confirms the glass coordinates. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Manufacturer attribution follows ZEISS’s 2015 partnership explanation (Sony manufactures Sony/ZEISS lenses), reproduced at https://www.sonyalpharumors.com/zeiss-explains-what-photographers-should-know-about-the-sony-zeiss-partnership/ with the original ZEISS link https://blogs.zeiss.com/photo/en/?p=6131. This is independent of the patent-assignee field.

Local browser review covered wide, middle and telephoto states with on-axis rays enabled. The updated optical silhouettes render without visible crossings.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.

## 2026-09-18 — Local-site diagram follow-up

Compared live wide/mid/tele diagrams with local US 2013/0314585 A1, PDF page 10, Fig. 9 and page 22, Tables 9-12. Retained the previously corrected front SDs. Corrected L11's displayed type to biconcave negative: Table 9 gives R1=-72.2917 and R2=+16.0439, consistent with Fig. 9, despite the general prose calling it a meniscus.

Enabled the existing from-nominal-fno zoom aperture model. The former fixed wide-end iris did not implement the authored f/1.86, f/3.469 and f/5.07 schedule. The local site now shows stop diameters of about 8.68, 6.64 and 6.97 mm at wide/mid/tele. These are exact-ray-derived physical apertures, not published iris measurements.

Zoom is correctly ordered: GR1 moves imageward then reverses, GR2 and GR3 move objectward, and GR4 moves imageward. The disabled focus control correctly limits the model to published infinity-focus states. L22 and L23 now display their existing S-LAH55 and E-FD4 spectral proxy names with production identity unconfirmed.

Follow-up validation: typecheck, formatting, lint and all 2,717 tests in 276 files passed; the production build prerendered 1,397 pages. Glass reports retain 63/67 resolved batch elements and zero catalog mismatches. All six surface audits pass, the five applicable image-circle audits report no undersized surfaces, and renderer diagnostics report zero SD trim at five zoom positions and both focus-control endpoints. No additional changelog entry was added.
