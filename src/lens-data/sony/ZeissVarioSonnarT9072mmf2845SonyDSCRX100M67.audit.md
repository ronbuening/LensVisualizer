# Lens integration audit — ZeissVarioSonnarT9072mmf2845SonyDSCRX100M67.data

## 2026-09-18 — Repository integration and glass audit

Romanized all four inventors using the printed WO2019188070A1 front page: Koji Toyoda, Maya Kiyotoshi, Keita Kaifu, Kentaro Tawada. The WO front page was retrieved solely to verify names; the SD audit uses the exact local JP republication. Added the distinct HOYA M-FCD1 molding-glass polynomial; both named elements now select it instead of the bare-code FCD1 fallback. All fifteen elements resolve.

### Semi-diameter figure audit

Reviewed local JP WO 2019/188070 A1, PDF page 40, Fig. 5 and the wide panel of Fig. 6, with the vertical optical axis rotated. The front doublet is approximately 13 mm versus the authored 13.3 mm; remaining usable optical-rim readings do not establish a robust correction beyond the drawing uncertainty. Rejected leader-contaminated readings and retained all SDs. Table 7 on PDF page 22 confirms the glass coordinates. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Romanization source: WO2019188070A1, printed front page item (72), https://patentimages.storage.googleapis.com/89/85/b0/891dc9e138b2bc/WO2019188070A1.pdf. The English spellings were visually read, including TAWADA rather than the inconsistent Taoda romanization on an older unrelated patent.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.
