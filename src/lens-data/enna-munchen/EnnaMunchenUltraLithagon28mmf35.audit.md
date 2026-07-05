# Audit Log - ENNA MÜNCHEN ULTRA-LITHAGON 28mm f/3.5

Patent: US 2,959,100, Example 1 / Table I

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2959100.pdf`. Table I gives the f = 100 Example 1 prescription, f/3.5 relative aperture, 75 degree field, and back focal length, but no clear-aperture or semi-diameter column.
- The patent figure shows the F front meniscus as the dominant aperture, the S median positive element as noticeably smaller but still broad, and the H rear group as compact. In H, the L3/L4 positives are similar in height, L5 is the smaller negative waist near the stop, and L6 re-expands modestly at the rear.
- Stored SDs preserve that visual run: L1 at 15.3 mm, L2 at about 11 mm, L3/L4 at 7.7-8.6 mm, L5 at 6.4-6.7 mm, and L6 at 7.8-8.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, marginal/chief-ray envelope, f/3.5 stop placement, edge-thickness limits, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
