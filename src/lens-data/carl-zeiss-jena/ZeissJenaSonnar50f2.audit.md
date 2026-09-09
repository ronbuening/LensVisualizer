# Audit Log - Carl Zeiss Jena Sonnar 50mm f/2

Patent: US 1,998,704, Example I
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and glass-status audit

### Source Note

- The exact patent PDF was added locally under `patents/US1998704.pdf` from the Google Patents image source and checked against the existing transcription.
- Rechecked the rendered Example I table and Figure 1. The patent prescription is normalized at f=100 and the data file correctly uses a 0.5x scale for the 50mm rendering.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | retained `SK16 (Schott dense crown)` | retained | Legacy SK16 resolves to N-SK16 locally and stays within the project tolerance for the patent nd=1.6185 value. |
| L2 / 3, L6 / 8 | `glass` | `BaLF5 (Schott barium light flint)` | `Unmatched (vintage Schott/Jena barium light flint, patent nd=1.6711, νd=47.3)` | The current local N-BALF5 catalog entry is not the high-index historical BaLF glass in this patent, so these elements remain Abbe fallback. |
| L3 / 4 | APD / line indices | `apd: false` | inferred FK3 line-index/APD metadata | Patent nd=1.4645, vd=65.7 matches FK3; the file now carries the same inferred FK3 spectral metadata used by the other CZJ FK3 entries. |
| L4 / 5 | `glass`, line indices | `SF-type (Schott dense flint)` | `N-SF8 / SF8 equivalent` with C/F/g line indices | Visual table check confirms nd=1.6890, not OCR's 1.6390. The data file keeps the patent nd at the d-line and uses N-SF8 line indices for chromatic tracing. |
| L5 / 7 | `glass` | `BaK4 (Schott barium crown)` | `Unmatched (vintage Schott/Jena BaK4-class barium crown, patent nd=1.5647, νd=55.8)` | The BaK4 family label remains descriptive, but no local coefficient-backed match is available. |

### Phase 2 - Prescription and SD review

- Rechecked all radii, thicknesses, air spaces, and glass constants against the patent table, including the corrected L4 nd=1.6890.
- The patent does not publish semi-diameters or exact stop position inside the L4-L5 air gap. Existing SDs and the stop split remain plausible against the drawing and runtime layout.
- Runtime element-render diagnostics showed no hidden trim warnings, so no SD changes were made.

### Verification

- Temporary Zeiss Jena diagnostic test - passed after the glass-label and FK3 APD updates; runtime trim diagnostics empty for this lens.

## 2026-09-08 — First-hosted audit (lens 8, in progress)

- Original local US1998704.pdf Fig.1 p1 and Example I p2 visually inspected; 600 dpi figure crop retained temporarily. All radii, glass/air thicknesses and source nD/ν match the chosen 0.5 scale, including L4 1.6890.
- Production live view inspected. Figure-scaled rims were noticeably larger than authored geometry, especially the rear doublet: first-to-last span about975px/30.1mm; front halfheight540px≈16.7, triplet430px≈13.3, rear325px≈9.7. Set front 16/16, triplet entry/shared 13/13, rear doublet 9.7/9.7/9.7. Surface probe passes; batch hidden-trim and image-circle checks pending.
- Glass labels made supplier-neutral; removed copied catalog nC/nF/ng overrides from FK3/N-SF8 and insignificant FK3 inferred-APD highlight. Catalog curves remain comparisons, not source measurements.
- Inferred 0.90m endpoint solved by complete paraxial propagation: BF27.3398042394, extension3.1598042394 from rounded BF24.18. Patent no finite focus or exact stop position; split2.5/5.0 remains inferred within published7.5 gap. Analysis rewritten with source/model distinctions.
- Local live check and batch gates pending.
- Local infinity, close, midpoint and f16 checked: BF24.18/27.34/25.76; stop diameter1.89 at f16; all three groups move objectward3.16mm, zoom disabled. Shared movement chart clips long labels (also seen on XF50); fix required before batch commit. No visible element overlap. Source assembly sum is30.1mm; earlier29.1 measurement note corrected (focus calculation already summed the correct prescription).
- SK16 label removed after direct catalog check: N-SK16 has nd1.62041 versus patent1.6185; no exact historical identity established. L1 now unmatched crown medium. Tests authored; batch execution pending.
