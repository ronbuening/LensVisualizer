# Audit Log — Nikon AI Zoom-Nikkor 25-50mm f/4

Patent: US 4,189,212, Example 8 / Claim 20.

## 2026-06-24 — Patent recheck, code-only glass rows, and SD provenance

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L6 / surface 12 | `glass` | `K10 class (501/565)` | unchanged | Patent Example 8 confirms `nd=1.50137`, `νd=56.5`. No coefficient-backed exact public catalog match was verified for `501565`; the same glass is repeated on L7 and L9b. |
| L7 / surface 14 | `glass` | `K10 class (501/565)` | unchanged | Same patent glass row as L6; retained as code-family `501565`. |
| L9a / surface 18 | `glass` | `Unmatched 465/658 (FK/phosphate crown class)` | unchanged | Patent Example 8 confirms `nd=1.46450`, `νd=65.8`. No exact coefficient-backed public catalog source was verified for `465658`. |
| L9b / surface 20 | `glass` | `K10 class (501/565)` | unchanged | Same patent glass row as L6/L7; retained as code-family `501565`. |

### Phase 2 — Retained-information audit

- Rechecked local `patents/US4189212.pdf` against the data file and companion analysis sidecar.
- Confirmed the data file's patent erratum: Example 8 prints `r11 = +219.5`, but Claim 20 repeats the same prescription with `r11 = -219.5`; the negative sign is required to reproduce the patent `f=25.50` wide-end focal length.
- Confirmed the three zoom spacings for `d8` and back-focus values used by the data file. The inserted `STO` split inside `d8` remains a modeling convenience because the patent describes a zoom-cammed diaphragm but does not publish a separate stop row.
- The patent does not publish per-surface clear apertures or semi-diameters. Added a data-header note documenting that current `sd` values are visualization estimates from marginal/chief ray envelopes and renderer clearance constraints.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows were found in the extracted local patent text.
- APD status remains absent/false for all elements. High-index status remains descriptive for the dense lanthanum/flint members; the patent does not identify anomalous partial dispersion.

### Phase 4 — Analysis sync

- Current analysis sidecar already matches the audited data: it documents the r11 sign correction, the zoom-cammed aperture approximation, code-only glass status, and SD-estimate provenance.

## 2026-08-07 — Legacy K10 catalog recovery

- The official Schott K10 datasheet supplies Sellmeier coefficients for `nd=1.50137`, `νd=56.41`, code 501564.
- The three repeated patent rows at L6, L7, and L9b now resolve through that curve; the stored patent coordinates and labels remain unchanged.
- The local `patents/US4189212.pdf` review recorded above remains the prescription source. No geometry changed.

## 2026-08-07 — Legacy FC3 catalog recovery

- Visually rechecked US 4,189,212 Example 8: L9a remains `nd=1.46450`, `νd=65.8`, code 465658.
- HOYA's obsolete FC3 row (`1.464502 / 65.767612`) is the exact coefficient-backed catalog equivalent. The
  production supplier remains unspecified.
- Strict and trusted coverage rise to `10/11`; only L1's separate 773494 coordinate remains unmatched. No geometry
  changed.

## 2026-08-07 — M-TAF1 catalog recovery

- Visually rechecked Example 4 in local `patents/US4189212.pdf`; L1 remains `1.77279 / 49.4`.
- HOYA's discontinued M-TAF1 row (`1.77250 / 49.46`) is compatible with the rounded patent coordinate and supplies a vendor polynomial.
- Relabeled L1 as an M-TAF1 catalog equivalent while leaving Nikon's production supplier unspecified. No geometry changed.

## 2026-10-30 — Direct patent shape and glass reinspection

- Directly inspected `patents/US4189212.pdf`: Example 8 full prescription/media, PDF p. 22; repeated Claim 20, PDF p. 26; Example/Figure association, PDF p. 21; Figure 8, PDF p. 5, rendered at 600 dpi. Native figure raster is 300 ppi, so this is 2× upscaling. The vertex span gives approximately 11.8 native px/mm. Reviewed all eleven elements and the cemented L5 boundary, distinguishing actual end strokes from leaders. The existing r11 = −219.5 is freshly confirmed by Claim 20, while the body example prints +219.5; the prior source-errata adoption is retained.
- L1's concave rear has source q ≈0.78, approximately 338 native edge-radius pixels, one-native-pixel q band ±0.0053 before ink ambiguity. Preserve its existing 22.0 mm cap and add `rimExtensionSd: 27.5` (adopted q = 0.80) to draw the opaque land. L3's concave rear has q ≈0.87, about 278 native pixels/±0.0067; outer S6 21.0→21.5 mm and inferred cut depth 4.80 give cap 18.720769 mm/q = 0.87073. No clear cap is reduced by authoring an extension.
- Reject the additional L8-rear/S17 land: source q near 0.87 would imply approximately 8.265 mm against outer 9.5, while the literal R17 = 16.739/d17 = 1.9/R18 = 185 gap contacts at 8.074608 mm and the 90% clearance bound is 7.687721. At 8.265 the surfaces overlap by 0.098053 mm. Retain the existing 7.6 mm cap and tapered rim instead of forcing the diagram. Other faces retain their guarded profiles; no speculative compound-interface land.
- All eleven material pairs match both Example 8 and Claim 20. Their index/Abbe definitions do not explicitly identify a line wavelength; retain the existing d-line interpretation as qualified. No per-material partial or C/F/g values are printed. Eleven compatible catalog curves remain unchanged; labels now name the actual selected curves as spectral proxies, with production suppliers unspecified.
- Every source R/d/material pair, stop convention, zoom/focus control, source back focus and tolerance remains unchanged. Surface, image-circle, all three nominal apertures and all three ≥99% field stations pass. Nine actual SVG states were inspected: finite compound outlines and zero hidden renderer trim.
- Focused shared dispersion/glass consistency tests: 2 files/93 tests passed. Candidate AST scan: 3 data files/197 object literals, zero duplicate keys or parse errors. A dedicated pair/curve comparison verified all 43 source pairs, unchanged curve selections and channels, and source-prescription/control invariants across this triad.
- Dense S6 probe: 21×21 states/grid 41/0.5°, 19,195,159 rays; refined reach 17.2438 < cap 18.720769−margin 0.0562 mm, zero clipped/within-margin rays and no unlaunchable fields.
