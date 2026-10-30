# Audit Log - Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED

Patent: US 7,218,457 B2, Example 3 / Table 3

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US7218457.pdf`.
- Example 4 / Table 4 rows confirmed from the local patent text:
  - S5 / L3: nd = 1.717360, vd = 29.52.
  - S9 / L5: nd = 1.582670, vd = 46.43.
  - S19 / L10: nd = 1.620410, vd = 60.29.
  - S21 / L11: nd = 1.806100, vd = 40.94.

### Glass corrections

| Element / surface | Before            | After             | Disposition                                                  |
| ----------------- | ----------------- | ----------------- | ------------------------------------------------------------ |
| L3 / S5           | `S-TIH13 (OHARA)` | `S-TIH1 (OHARA)`  | Exact nd/vd catalog match.                                   |
| L5 / S9           | `S-TIM22 (OHARA)` | `BAF3`            | Exact Schott nd/vd catalog match already in catalog.         |
| L10 / S19         | `S-LAL59 (OHARA)` | `S-BSM16 (OHARA)` | Exact nd/vd catalog match.                                   |
| L11 / S21         | `S-TIH53...`      | `S-LAH53 (OHARA)` | Exact nd/vd catalog match; removed weaker alternate wording. |

### Catalog-search disposition

- Checked public OHARA/Schott-backed catalog data and existing coefficient-backed entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and the catalog-identification note.

## 2026-08-11 - S-TIL6 catalog recovery

- Rendered local `patents/US7218457.pdf` page 24 and visually confirmed Example 3 / Table 3 surface 11 at
  `nd = 1.531720`, `vd = 48.87`.
- The recovered OHARA S-TIL6 polynomial carries code 532489 and differs by only `-0.000003` in d-line index and
  `-0.029` in Abbe number.
- Relabeled L6 as an S-TIL6 catalog equivalent while leaving Nikon's production supplier unspecified. No prescription
  geometry, focusing data, or aperture data changed.

## 2026-09-09 — First-added diagram audit, lens 37

Original Table 3 (PDF page 24) and Figures 9A–9C (page 10, 600 dpi) supersede the May entry's erroneous Example 4/Table 4 attribution. All source radii, thicknesses, indices and Abbe numbers are retained. Restored the middle focus station, source-distance slider mapping and f/2.88 first aperture setting. Corrected the eleven-component count and calculated isolated element focal lengths; qualified catalog names and removed unsupported L8 partial dispersion/APD. No cover glass or filter is present. Existing SDs pass figure review, surface/image-circle checks and four-state render diagnostics.

Follow-up: source BF drift contradicts its fixed-group narrative; rounded source conjugates differ from exact matrix solutions. Focus-dependent iris diameter and lateral VR are not modeled. These limitations and the production-association distinction are surfaced in the data/analysis.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US7218457.pdf`: Figures 9A–9C on PDF page 10 rendered as separate 600 dpi crops, Example 3 / Table 3 on page 24, and the d-line 587.6 nm convention on page 22. The page is a 300 ppi raster (`pdfimages -list`), so measurements use native pixels. Figure 9A first/last vertices span about 1035 native pixels over 105.8775 mm, or 9.78 native px/mm.

All fourteen elements, every air/glass face and three cemented boundaries were reinspected. The supported lands are:

| Surface                | Native cap / edge radial pixels | Measured q and one-pixel band ±(1+q)/edge | Adopted geometry                                                      |
| ---------------------- | ------------------------------: | ----------------------------------------: | --------------------------------------------------------------------- |
| S6, L3 concave rear    |                 about 172 / 185 |                             0.930 ±0.0104 | `sd` 21.5 retained; inferred cut 5.93 mm → cap 19.99199 mm, q 0.92986 |
| S10, L5 concave rear   |                 about 137 / 150 |                             0.913 ±0.0128 | clear `sd` 14 retained; `rimExtensionSd` 15.4, q 0.90909              |
| S24, L13 concave front |                 about 147 / 168 |                             0.875 ±0.0112 | `sd` 14 retained; inferred cut 3.29 mm → cap 12.95820 mm, q 0.92559   |

The thick source strokes make the endpoint picks approximate; these one-native-pixel bands do not assert precise manufacture. For S24 the measured ratio initially gives depth 2.92 mm / radius 12.252 mm. The dense full-beam audit rejects that: the wide-open beam reaches 12.8964 mm at focus 0.85 / field 9.05°, requiring radius 12.9464 mm with the 0.05 mm margin. The adopted 3.29 mm depth moves the cap outward to 12.95820 mm; this differs deliberately from the measured q. S6 and the final S24 pass the complete inferred-cut beam sweep. S10 uses an optical-preserving extension instead of reducing its existing cap.

No other resolved land is added. L4’s front S7 remains a continuous curve in the source; no invented extension is used to fill its modeled 15/18 mm height difference across the narrow 0.2601 mm preceding gap. The source’s continuous curves and bevels are not replaced by speculative flat faces. Outer radii remain an approximation, especially through G1/G2. The source draws S11 as a continuous near-flat front face. Its inherited 12 mm radius clips the nominal axial beam; `audit:aperture --raise` requires 12.5 mm at the file’s one-decimal precision. That minimal increase is accepted without a land or a change to the existing 15 mm cemented interface. The canonical validator and dense inferred-cut sweep pass with S11 at 12.5.

All fourteen source nd/νd pairs were checked freshly and retained. Resolved compatible curves by element are S-LAH66 (L1/L4), BACD4 (L2), S-TIH1 (L3), J-BAF3 (L5), S-TIL6 (L6), S-TIH6 (L7/L12), S-FPL51 (L8), S-TIH53W (L9), S-BSM16 (L10), S-LAH53 (L11), S-NSL3 (L13), and S-LAH51 (L14). L5’s earlier BAF3 alias already selected J-BAF3; only the label is clarified, with production supplier unspecified. The patent supplies no individual line indices or partial dispersions; no new APD assertion or override is added.

Focused `audit:surface` and `audit:image-circle` pass. Actual SVG paths at focus/zoom 0, 0.5 and 1 are finite with zero hidden trimming; rendered montages were inspected. The shared dispersion and glass-resolution parity suites pass (2 files / 93 tests). A temporary source-coordinate/resolver check confirms all 45 media in this triad, 44 compatible catalog curves and the one deliberately unresolved L12; `assertCatalogConsistent` passes. No R/d, aspheric coefficient, gap, focus, zoom or iris control was changed. The final aperture audit is within 3% of nominal 2.88 with no rim limiter, removing the inherited S11 f/2.99 clip. The focus-dependent iris schedule, lateral VR, source BF inconsistency and retail construction correlation remain qualified.
