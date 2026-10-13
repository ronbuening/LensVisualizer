# Audit Log — KONICA ZOOM-HEXANON AR 70–150mm f/4

Patent: JP 1983-137812 A (JPS58137812A), Example 1

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 prints no field angle or image height; the production lens is a 24×36 zoom whose 2ω of about 34°–16° matches
the traced corner fields (17.23° / 12.44° / 8.17°). The earlier Figure-1 review reduced L3 (surfaces 4–5) from
17.5/17.0 to 14.5/14.0 mm, and those rims clipped the real chief ray (solved through the stop centre) from 11.1° at the
97.7 mm state and 7.4° at the 146.4 mm state, leaving the analysis field at 89% and 90% of the corner. The corner chief
ray needs surface 4 ≥ 16.33 and surface 5 ≥ 15.78 mm at 97.7 mm (16.04 / 15.59 mm at 146.4 mm); values are floor +
~0.5 mm, each surface on its own floor. Where the drawing and the traced floor disagree, the floor wins: the
figure-reduced L3 cannot pass the full-frame corner that the product covers. No new figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 4 | 14.5 | 16.9 | 97.7 mm corner chief ray 16.33 mm + clearance |
| 5 | 14.0 | 16.3 | 97.7 mm corner chief ray 15.78 mm + clearance |

The validator accepts the new values, all three stations reach 100% of the corner with every rim clear, and the
image-circle floor reports nothing undersized.

## 2026-09-24 — Zoom-spacing transcription corrected

The zoom-spacing table below 表1 (publication p. 2, PDF p. 2) prints d12 = 14.466 at 97.746 mm and d15 = 6.318 at
146.388 mm; the data carried 14.468 and 6.310. The blotchy print makes 6 and 8 look alike, but the printed rows keep
d5 + d12 + d15 = 31.333 mm in all three states, as the stationary G1 and G4 require, only with 14.466 and 6.318. With
both values corrected the first-vertex-to-image track is 139.888 mm at every state (it was 139.890 and 139.880). The
Gaussian EFL moves from 97.607135 to 97.613188 mm (middle) and from 146.196286 to 146.196652 mm (tele);
`focalLengthDesign` and the analysis verification table were updated to match.
