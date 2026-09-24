# Audit Log - FUJIFILM FUJINON GF45mmF2.8 R WR

Patent: US 2020/0174231 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20200174231A1.pdf`. The patent publishes Example 1 prescription, focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a balanced medium-format retrofocus layout: broad front G1, a smaller moving G2 around the stop, and a broad rear G3 rather than a narrow tail.
- Stored SDs preserve that balance: G1 is about 16.5-20.5 mm, the stop and central moving group contract to roughly 13-15.7 mm, and rear G3 returns to about 17-20.6 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/2.8 stop geometry, focus-group ray envelopes, edge thickness, and cross-gap sag limits.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 16 (rendered at 160 dpi): surface 20 d = 25.000; surfaces 21–22 are the parallel
  plate PP, 3.200 mm, nd 1.51680, νd 64.20, θgF 0.53430; 22 → image is 4.617 mm. The legacy fold
  25.000 + 3.200/1.51680 + 4.617 = 31.726704641 reproduces the old stored value exactly.
- Surface 20 now stores 25 mm, with `rearPlates` PP labeled N-BK7 (exact 1.51680 / 64.2 class; OHARA S-BSL7 is 1.51633)
  and dPgF −0.00152 from the printed θgF, gapAfter 4.617 mm. The focus gaps D6/D17 are unaffected.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 3.5e-10 mm) at infinity and
  the modeled close focus. Physical track grows by 1.0903 mm to the patent's 110.197 mm.
