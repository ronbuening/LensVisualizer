# Audit Log - Nikon AI Nikkor 35mm f/1.4S

Patent: US 3,576,360, Embodiment 1 / FIG. 1 / Claim 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed the semi-diameter reference-pass notes for this lens (the reference-pass guide has since been folded into `agent_docs/patent-figure-sd-audit-procedure.md`) and the local source mapping to US 3,576,360 Embodiment 1 / FIG. 1.
- This lens was part of the successful reference pass: the middle and rear SD run had already been reshaped to follow FIG. 1 and avoid excessive cross-gap sag in the tight post-stop air spaces.
- Current SDs preserve that refined shape: a large fast-wide front section, controlled central/post-stop diameters, and a rear group that stays clear without inflating the patent silhouette.
- No new SD values changed in this pass. The K10 glass label remains explicitly unmatched because the project has no coefficient-backed legacy K10 entry.

## 2026-08-07 — Legacy K10 catalog recovery

- Visually rechecked US 3,576,360 Embodiment 1: L4 remains `nd=1.50137`, `νd=56.5`.
- The official SCHOTT K10 datasheet supplies the matching coefficient curve (`1.50137 / 56.41`). The label now
  resolves through K10 while leaving the production supplier unspecified.
- Strict and trusted catalog coverage are now complete at `9/9`; no geometry changed.

## 2026-10-09 — Back-focus gap aligned with its focus row

Surface 15 `d` (37.254161 mm) rounded the infinity value of its own `var` row (37.254160829 mm). The surface value now
equals the row, so the authored image-plane distance and the infinity state agree; the image plane moves 1.7e-7 mm.
The V2 lens-data format stores a variable gap once, and its converter requires the two to agree.

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 15 | `d` | 37.254161 | 37.254160829 | `var["15"][0]`, the infinity back focus; the patent prints S' = 106.44 (37.254 mm at ×0.35) |

## 2026-10-30 — Fresh shape and glass reinspection

The 2026-10-30 review directly inspected local `US3576360.pdf`: Embodiment 1 Figure 1 on PDF page 2 at 600 dpi/native 300 dpi; its nine-media table (beginning at bottom left and continuing at top right) on page6; and the helium d-line definition on page7. The r1–r15 vertex span gives approximately 13.9 native pixels per scaled lens mm. Every exposed convex/concave face and both cemented boundaries were inspected. S2 and S4 now use the front partners' existing 22.0/17.3 mm outer rims and inferred concave-end cuts at depths 7.30/5.84 mm (caps17.609293/16.299684). Native q≈0.78 ±0.006 at S2 (edge≈302 pixels) and 0.88 ±0.008 at S4 (≈250 pixels), compared with adopted0.800/0.942. The endpoints move outward from the figure to clear modeled beams: source-ratio S2 cap17.200 fails against 17.4512 mm reach plus0.052 mm margin (minimum 17.5028); source-ratio S4 cap15.111 fails against 16.2313 mm reach plus0.050 mm (minimum 16.2813). Both adopted cuts pass the full existing guard without a source-depth bypass.

S7 retains its 15.5 mm clear cap and gains an exposed land to 16.7 mm, with the cemented S6 height restored from 16.4 to the common16.7 mm body rim. Native q≈0.92 ±0.008 at an approximately 235-pixel edge agrees with adopted0.928. No cemented land or additional speculative cut is added. Source radii/spacings, ×0.35 scale, inferred stop, and the approximate focus controls are unchanged; this early patent remains distinct from a confirmed AI-S production prescription.

All nine source nd/νd pairs are exact and preserved, including printed L4=1.50137/56.5. All nine selected curves are available and explicitly qualified as spectral proxies. The source supplies no C/F/g indices, partial-dispersion table, APD classification, or supplier identity. The present K10 curve is available; the historical unresolved note is superseded by the qualified current resolver result.

Surface/circle checks and complete inferred-cut beam checks pass; the format corner reaches 100% and the aperture is iris-limited at f/1.4. Nine actual SVG states have nine finite, untrimmed paths. At the approximate close conjugate D0=190.2497 mm the full 12.625666 mm iris passes 25/25 aimed axial samples. Source/catalog checks and shared glass suites pass (94 tests).
