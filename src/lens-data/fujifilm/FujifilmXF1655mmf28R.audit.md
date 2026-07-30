# Audit Log - FUJIFILM FUJINON XF16-55mmF2.8 R LM WR

Patent: US 2016/0154221 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20160154221A1.pdf`. The patent publishes Example 1 prescription, zoom data, focus assumptions, and Fig. 1 wide/intermediate/tele sections, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a very large front G1 across the zoom range, while G2 through G5 remain much smaller around the stop and image-side groups.
- Stored SDs match that outline: G1 starts at 21.7-25.2 mm, G2-G5 stay mostly in the 8.8-11.4 mm range, and the stop is 9.1 mm.
- No SD values changed. Current values remain inferred from the patent figure, infinity zoom-state ray envelopes, f/2.8 stop geometry, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 1 in local `patents/US20160154221A1.pdf`; S13A remains 1.68458 / 30.88 and its R/d/asphere
  values are unchanged.
- S13A `Near OHARA L-TIM28 (685309)` -> code-first `685309 — dense flint (patent coordinate; vendor
  unresolved)`. L-TIM28 misses the stored index by about 0.0044 and is retained only as a comparison.
- Synchronized the L31 glass row and catalog-confidence summary.

## 2026-07-30 - Remaining 685309 source audit

- Rechecked the full coefficient-backed catalog after the legacy additions; no row is inside the runtime
  `|delta nd| <= 0.003` and `|delta vd| <= 2` safety window.
- OHARA S-TIM28 / HOYA E-FD8 remain index-near comparisons at about `delta nd = +0.00435`, outside the guard.
- Reworded L31 as explicit unmatched `685309`; no prescription, asphere, zoom, or semi-diameter values changed.
