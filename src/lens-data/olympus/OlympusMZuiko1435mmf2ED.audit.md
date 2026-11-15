# Audit Log - Olympus Zuiko Digital ED 14-35mm f/2.0 SWD

Patent: US 8,081,392 B2, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8081392.pdf`. Numerical Example 3 maps to FIGS. 3(a)-3(c).
- The patent publishes prescription, zoom data, and anomalous partial-dispersion information, but no full per-surface clear-aperture table.
- FIG. 3 shows a very broad front G1, compact G2F/G2R groups, and a rear G3 that grows again toward the image side. Stored SDs follow that hierarchy: 38.5-31.0 mm in G1, about 12.5-17.1 mm through G2, a 12.1 mm stop, and 10.0-17.6 mm through G3.
- No SD values changed. Current values remain inferred from the patent section drawing, zoom ray envelopes, and sag-clearance checks.

## 2026-11-14 — Published finite conjugates

Patent: US 8,081,392 B2, Example 3.

| State (zoom/keyframe) | Field | Before | After | Paraxial offset (mm) | Offset (depths of focus) | Other reference (depths) | Verdict |
|---|---|---|---|---|---|---|---|
| 0/1 | `focus.conjugates` | absent | 350 mm, `image-plane` | -0.030181459 | -6.173433 | -86.098616 | consistent |
| 1/1 | `focus.conjugates` | absent | 350 mm, `image-plane` | -0.070542564 | -14.429011 | -175.592174 | consistent |
| 2/1 | `focus.conjugates` | absent | 350 mm, `image-plane` | -0.119232847 | -24.428076 | -331.268533 | consistent |

Source: US 8,081,392 B2, Example 3, Zooming Data (PDF p. 22, printed cols. 17-18), WE(350)/ST(350)/TE(350); PDF p. 18 defines subject distance as the distance from the subject to image plane I.

Distance-reference basis: `patent-defined`. The patent states on PDF p. 18, column 10: “The bracketed figures after WE, ST and TE are the subject distances (mm) as measured from the image plane.”

- State 0/1: D6=0.76, D14=0.85, D18=39.19, BF=33.78 mm. The printed finite-spacing column matches these authored gaps.
- State 1/1: D6=9.09, D14=0.85, D18=17.36, BF=41.76 mm. The printed finite-spacing column matches these authored gaps.
- State 2/1: D6=26.5, D14=0.85, D18=9.57, BF=46.6 mm. The printed finite-spacing column matches these authored gaps.

Residuals retain the authored prescription and image plane. Every declared state already has its published-focus flag.
