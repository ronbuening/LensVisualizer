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

## 2026-11-23 — Group count against the maker's section drawing

The model outline was laid over OM System's lens-construction drawing
(`https://jp.omsystem.com/product/lens/single/premi/12_20/spec.html`). The drawing shows the groups as
L1 | L2 | L3–L4–L5 | L6 | L7 | L8–L9 | L10 | L11, eight in all. Example 1 has 0.635 mm of air between L3 and L4,
which makes its ninth group; L6 and L7 are drawn separated, as the patent's 0.189 mm gap has them. Earlier notes
attributed the difference to the L6/L7 gap; the header and analysis are corrected. No prescription value changed.

The other six examples of US 8,248,716 B2 were counted: none has eleven elements in eight groups (Example 6, the only
other eleven-element f/2 design, has ten groups and a third aspherical element). Olympus marks ED glass at L9 and
Super HR glass at L5; Example 1 prints nd 1.88300 / νd 40.80 at L9 and nd 1.72151 at L5, and its νd 70.23 glass at L4.
