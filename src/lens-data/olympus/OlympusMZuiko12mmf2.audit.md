# Audit Log - Olympus M.Zuiko Digital ED 12mm f/2.0

Patent: US 8,248,716 B2, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8248716.pdf`. Numerical Example 1 maps to FIG. 1.
- The patent publishes prescription and aspherical data, but no full per-surface clear-aperture table. The data file intentionally omits the sensor-side cover-glass stack from the rendered prescription.
- FIG. 1 shows a tapered front group, a smaller stop waist, and a rear group that widens toward the final relay element. Stored SDs follow that silhouette: 10.4-6.4 mm through the front/middle run, a 4.564608 mm stop, and 6.1-8.7 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure, marginal/chief ray envelopes, and renderer geometry constraints.

## 2026-11-14 — Published finite conjugates

Patent: US 8,248,716 B2, Numerical Example 1.

| State (zoom/keyframe) | Field | Before | After | Paraxial offset (mm) | Offset (depths of focus) | Other reference (depths) | Verdict |
|---|---|---|---|---|---|---|---|
| 0/1 | `focus.conjugates` | absent | 200 mm, `image-plane` | -0.059029030 | -11.952594 | -69.158168 | consistent |

Source: US 8,248,716 B2, Numerical Example 1, focus spacings (PDF p. 25, printed col. 18), IO = 20 cm.

Distance-reference basis: `audit-resolved`. The patent does not explicitly define the distance reference. The finite-conjugate audit identifies the image-plane reference for each declared state.

- State 0/1: BF=16.679, LRF gap=1.4977 mm. The printed finite-spacing column matches these authored gaps.

Residuals retain the authored prescription and image plane. Every declared state already has its published-focus flag.
