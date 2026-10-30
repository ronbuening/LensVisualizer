# Audit Log — Canon EF 135mm f/2.8 Soft Focus

Patent: US 4,826,301, Numerical Example 4. Original: `patents/US4826301.pdf`.

## 2026-10-30 — Original-patent shape, concave-end and glass review

### Exact source and measurement boundary

The original title page confirms US 4,826,301, granted 2 May 1989, inventor Keiji Ikemori and Canon as assignee. Numerical Example 4, all seven N/Abbe pairs, the normal/soft gap table and the asphere equation are on PDF page 21, column 9; its A–E coefficients continue at the top of column 10 on the **same page**. Figures 10(A)/10(B) are on PDF page 10, sheet 9 of 15. Figures 12/13 on pages 11/12 show the corresponding normal/soft aberration curves.

Every page embeds a 2320 × 3408 one-bit raster at 300 ppi. The table, coefficients, normal/soft figures and local cap/rim details were inspected at native resolution. The normal front-to-rear optical-vertex span is approximately 500 native pixels over 74.72 mm, giving approximately 6.7 px/mm. Stroke picks alone are about ±1–2 native pixels; approximate figure proportions and ray overlays raise practical semi-height uncertainty to approximately ±1 mm. Rays, axis lines, movement arrows, group brackets and the stop strokes were excluded from optical-rim measurements.

### Element heights, concave ends and retained constraints

| Element / surfaces | Disposition | Source evidence and constraint |
|---|---|---|
| L1 / S1–S2 | Retained | Biconvex front collector; no independent vertical shoulder is resolved. Small figure/model height differences remain within the approximate-drawing boundary. |
| L2 / S3–S4 | Retained | Biconvex second element; curved caps meet ordinary rim connectors, without a separate source-supported land. |
| L3 / S5–S6 | Retained | Both concave ends remain full caps. A normal rim connector and ray crossings do not establish an opaque land or cut. |
| L4 / S7A–S8 | Retained | One aspherical meniscus, not a hybrid layer. Both figures show the cap ends without a separately resolved vertical shoulder. Existing unequal clear radii implement the published normal/soft beam-limiting mechanism. |
| L5–L6 / S10–S12 | Retained | One connected cemented doublet. The curved S11 interface carries no opaque land. Outer cap-height differences match a tapered compound and do not independently establish a truncation. |
| L7 / S13–S14 | Retained | Stationary biconvex rear element; no new land/cut is supported by the native outline. |

No `sd`, `rimExtensionSd`, `rimCutDepthMm` or `rimCutDepthSource` is changed. Adding an equal-height block or flattening a concave end from ray-contaminated outer ink is rejected: neither figure resolves such a feature separately from the cap/rim connector. No resin wing, extra cement medium, source filter or rear plate is present in this selected example.

The source R/d, asphere terms, stop, all clear caps, published normal/soft spacings and reconstructed ordinary-focus endpoint remain unchanged. The spherical base gives K = 0, and original A = 0, B = −5.880e−7, C = −1.588e−10, D = −2.038e−12, E = +2.540e−16 map directly to the retained even-order polynomial. At the retained S7A radius 15.675574 mm, the polynomial departure remains approximately −45.06 μm; no aperture change makes that statement stale.

The source explicitly gives normal f/3.4 and soft f/2.8 (column 8 and Example 4 heading). Enlarging L4 to force the NORMAL state through the nominal f/2.8 beam would erase that mechanism and is rejected. Exact centered collimated traces using each current state's EFL reproduce about f/3.341365 in NORMAL and f/2.800000 in SOFT, with a smooth transition through the sampled intermediate control positions. The default aperture census flags the normal state against the global f/2.8 reference; the source-supported S8 limiter is retained rather than treated as an unintended clear-aperture defect.

The actual SVGs were compared with both source layouts. Sampled ordinary focus and independent SOFT positions retain connected finite paths and show no hidden renderer cap trimming. The corner chief and the source 9.1° chief both trace through the sampled centered states. Ordinary close focus remains a constrained reconstruction from product MFD, not a source-published finite-object table; the residual soft-state focus shift is retained. Source fidelity, sampled centered clearance and production correlation remain separate conclusions.

### Glass and source-reference qualification

Column 9 defines only refractive indices N and Abbe numbers ν. It never explicitly assigns those prescription coordinates to the d-line. The d/C/g system-aberration plots are retained as contextual evidence supporting the **approximate** d-line tracing convention; they are not individual line-index data and do not independently define the table's reference wavelength.

| Element | Printed N / ν | Disposition |
|---|---|---|
| L1 | 1.62299 / 58.2 | Preserved; Unmatched, reference unspecified |
| L2 | 1.62299 / 60.7 | Preserved, including the distinct printed Abbe value; Unmatched |
| L3 | 1.80518 / 25.4 | Preserved; Unmatched, reference unspecified |
| L4 | 1.58313 / 59.4 | Preserved; Unmatched, reference unspecified |
| L5 | 1.75520 / 27.5 | Preserved; Unmatched, reference unspecified |
| L6 | 1.54072 / 47.2 | Preserved; Unmatched, reference unspecified |
| L7 | 1.48749 / 70.2 | Preserved; Unmatched, reference unspecified |

All seven media now carry `indexReferenceNote` and an explicit `Unmatched` label. The prior seven coordinate-compatible catalog curves are disabled while the source reference remains unverified (7/7 → 0/7); no numeric pair is changed. This qualifies an uncertain reference rather than proving the conventional d-line inference wrong. No element supplies published `nC`, `nF`, `ng`, partial dispersion or APD data, and no per-lens spectral override is introduced. Conditional class comparisons select no curve and establish no historical supplier, melt or chemistry. The analysis and header now distinguish source N/ν from the approximate tracing convention, preserve the plotted spectral context and qualify the derived stop radius correctly.
