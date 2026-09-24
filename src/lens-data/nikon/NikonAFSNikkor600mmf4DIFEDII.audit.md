# Audit Log — NIKON AI AF-S NIKKOR ED 600mm f/4D II IF

Patent: US 5,745,306 A, Example 3 / Figure 7

## 2026-08-21 — Screenshot, patent-figure, diagram-metadata, and glass audit

### Phase 1 — Glass corrections

| Elements | Before | After | Justification |
|---|---|---|---|
| L11, L12, L14b | `J-FKH1-compatible ... proxy` | `J-FKH1 catalog equivalent` + inferred ED tag | These are the prescription's three `1.49782 / 82.52` positions and match Nikon's three-ED production specification. |
| L13, L14a | `804465 — high-index lanthanum class` | `TAF3D catalog equivalent` | `TAF3D` is the resolver's closest compatible coefficient curve; production supplier remains unspecified. |
| L21 | `788475 — lanthanum class` | `TAF4 catalog equivalent` | `TAF4` is the resolver's closest compatible coefficient curve; production supplier remains unspecified. |
| L22a, L22b | generic SF6/S-BSM81 classes | explicit `SF6` / `S-BSM81` catalog equivalents | Direct compatible catalog curves already existed and are now exposed in the element inspector. |
| L3a, L3b | generic J-PKH1/high-index-flint classes | explicit `J-PKH1` / `E-LAFH2` catalog equivalents | Both selections pass the runtime coordinate guard; neither is asserted as the production melt. |

### Phase 2 — Retained-information and semi-diameter audit

- Rendered the untracked local `patents/US5745306.pdf` at 600 dpi and compared PDF page 12 / Figure 7 with the supplied site screenshot.
- Retained all semi-diameters. The reliable front and middle element rims agree with the modeled taper inside the audit tolerance; rear automated outliers were caused by element numbers, group brackets, and leader lines crossing the measurement bands.
- `audit:surface` passes with no validation errors, and `audit:image-circle` reports zero undersized surfaces.

### Phase 3 — Diagram and movement metadata

- Corrected the display name to Nikon's period wording: `NIKON AI AF-S NIKKOR ED 600mm f/4D II IF`.
- Added patent identifiers `L11` through `L3b` as diagram labels and marked the three production-correlated ED positions as inferred rather than patent-listed material identities.
- Verified fixed-focal operation: there is no zoom travel. G2 alone moves `+10.8633 mm` imageward from infinity to the published close state; G1 and G3 remain fixed apart from a `0.0001 mm` source-rounding residual.

### Phase 4 — Analysis sync

- Synchronized the product title, explicit qualified glass labels, supplier caveats, and ED inference wording in the companion analysis.

## 2026-09-23 — Rear filter modeled as `rearPlates`

- Read Table 3 on local `patents/US5745306.pdf` page 23 at 160 dpi: surface 20 (S1) d = 36.5000; 21 (inactive S2) d = 2.0000; 22–23 is the rear filter, 2.0000 mm, nd 1.516800, νd 64.10; Bf = 115.6862 at both infinity and the R = 6000 close state. Printed 38.5 + 2.0/1.5168 + 115.6862 reproduces the previous folded 155.504765 exactly.
- `STO` now stores the physical 38.5 mm to the filter (the S21 plane is folded out), with `rearPlates` J-BK7A (Hikari, matching the file's other Hikari-equivalent labels; resolver-compatible for 1.5168 / 64.1) and gapAfter 115.6862 mm. The front protective plate (surfaces 1–2) stays omitted.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 1.4e-14 mm) at infinity and close focus. Physical track grows by 0.681435 mm, to 456.277700 mm from surface 3.
