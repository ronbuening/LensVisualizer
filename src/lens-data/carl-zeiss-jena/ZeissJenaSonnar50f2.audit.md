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

## 2026-09-08 — First-hosted audit (lens 8, in progress)

- Original local US1998704.pdf Fig.1 p1 and Example I p2 visually inspected; 600 dpi figure crop retained temporarily. All radii, glass/air thicknesses and source nD/ν match the chosen 0.5 scale, including L4 1.6890.
- Production live view inspected. Figure-scaled rims were noticeably larger than authored geometry, especially the rear doublet: first-to-last span about975px/30.1mm; front halfheight540px≈16.7, triplet430px≈13.3, rear325px≈9.7. Set front 16/16, triplet entry/shared 13/13, rear doublet 9.7/9.7/9.7. Surface probe passes; batch hidden-trim and image-circle checks pending.
- Glass labels made supplier-neutral; removed copied catalog nC/nF/ng overrides from FK3/N-SF8 and insignificant FK3 inferred-APD highlight. Catalog curves remain comparisons, not source measurements.
- Inferred 0.90m endpoint solved by complete paraxial propagation: BF27.3398042394, extension3.1598042394 from rounded BF24.18. Patent no finite focus or exact stop position; split2.5/5.0 remains inferred within published7.5 gap. Analysis rewritten with source/model distinctions.
- Local live check and batch gates pending.
- Local infinity, close, midpoint and f16 checked: BF24.18/27.34/25.76; stop diameter1.89 at f16; all three groups move objectward3.16mm, zoom disabled. Shared movement chart clips long labels (also seen on XF50); fix required before batch commit. No visible element overlap. Source assembly sum is30.1mm; earlier29.1 measurement note corrected (focus calculation already summed the correct prescription).
- SK16 label removed after direct catalog check: N-SK16 has nd1.62041 versus patent1.6185; no exact historical identity established. L1 now unmatched crown medium. Tests authored; batch execution pending.

## 2026-10-27 — Inferred stop plane behind r₆'s clear cap

The patent gives no stop position; the inferred plane sat 2.5 mm behind r₆, inside r₆'s cap: r₆ (R 11.85 mm, rim 8.25 mm) sags 3.344 mm, so L4's glass filled that plane beyond 7.28 mm, inside the 7.41 mm f/2 iris that F/N sizes there (`__tests__/src/lens-data/irisInAir.test.ts` flagged it). The sequential trace steps back to such a plane, but no iris can close there.

| Field | Before | After | Basis |
|---|---:|---:|---|
| Surface 6 `d` | 2.5 mm | 3.4 mm | r₆ sag 3.344 mm at its 8.25 mm rim, rounded up to 0.1 mm |
| `STO` `d` | 5.0 mm | 4.1 mm | Preserves the sourced 7.5 mm gap |

This is the construction used for the Vivitar Series 1 zoom (#774): the plane sits at the preceding surface's sag at its retained clear radius, rounded up to the next 0.1 mm, and the vertex-to-vertex air gap is preserved. Splitting a neutral air transfer leaves EFL, BFD and every power unchanged. The plane is a sequential-model choice, not a measured blade position. r₇ (R 100 mm) curves away from the stop, so its cap never comes forward of its vertex.

Result: the iris is in air over its whole stroke, at least 0.88 mm clear of r₆'s cap and 4.10 mm of r₇. The derived iris is 7.305 mm (7.405 mm at the old plane: F/N fixes the paraxial entrance pupil, and the paraxial marginal ray is lower 0.9 mm further into the converging beam), and the analysis half field is 23.38° (was 23.45°). The beam the iris admits is then clipped at the L3/L4 junction (surface 5): the on-axis ray to the iris rim, launched at 12.226 mm, meets it at 9.662 mm, above its 9.5 mm rim (`audit:aperture --raise`).

## 2026-10-27 — Junction rim raised to the beam the f/2 iris admits

LSA is ordinary (+0.140 / −0.172 / −0.230 / −0.164 mm at pupil 1 / 0.85 / 0.7 / 0.5), so the rim, not the prescription, is short. It rises to the ray's height plus 1 %, rounded up to 0.1 mm, so a small change of the stated beam cannot clip it.

| Surface | Before | After | Ray | Margin | Basis |
|---|---:|---:|---:|---:|---|
| 5 (L3/L4 junction) | 9.5 | 9.8 | 9.662 | 1.4 % | ray to the f/2 iris rim; L4's faces already differ (junction / r₆ 8.25) |

No other rim is within 11 % of the ray (r₆, 8.25 against 7.387 mm, 11.7 %). The raise over the original estimate is 3.2 %.

Figure check (Fig. 1 of US 1,998,704, PDF page 1, rendered at 200 dpi, read by hand; 30.10 mm of glass over about 308 px): L4's flat-topped junction rim is drawn at about 11.1 mm, below L2/L3's tips, so 9.8 mm stays inside the drawing. `audit:patent-figure` could not settle the crop (leader lines and labels pulled its axis), so the hand reading stands.

Result: f/2 traces f/2.00, iris-limited (`audit:aperture`). `audit:image-circle` reports nothing undersized; `audit:field-coverage` reaches the format corner at 23.38°. The rendered section was compared with Fig. 1: L4's junction sits below the L2/L3 tips as drawn, and the stop clears L4's concave tips.

Why the inferred rim was short. It was estimated while the stop plane sat inside r₆'s cap, where the traced f/2 marginal ray could not reach the stop above the f/2.08 beam. The junction was sized against that smaller beam, and no audit traced the stated beam past the stop until the plane moved. It is derived here on the stops sized by paraxial EPD = F/N (#933), against the ray to the iris rim.
