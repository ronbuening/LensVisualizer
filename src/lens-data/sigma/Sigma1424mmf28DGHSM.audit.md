# Audit Log - Sigma 14-24 mm F2.8 DG HSM | Art

Patent: JP 2018-189733 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2018189733A.pdf`.
- Example 1 table lists 17 glass elements with `nd`, `vd`, and `theta_gF`.
- Figure 1 shows a very large bulbous front asphere, a tapering G1, and much smaller G2/G3 rear groups.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5A | `glass` | `M-BACD5N / BACD5 class (HOYA, 589/613 moldable crown)` | `M-BACD5N (HOYA, 589613 moldable barium crown)` | Added coefficient-backed HOYA `M-BACD5N`; removed `BACD5`, which aliases to a different 620/603 catalog row. |
| L8 / S13 | `glass` | `Dense flint class, 720/347` | `N-KZFS8 (Schott, 720347)` | Existing Schott catalog row exactly matches patent nd/vd. |
| L9 / S15 | `glass` | `High-index high-dispersion glass, 855/248` | `S-NBH56 (OHARA, 855248)` | Existing OHARA catalog row exactly matches patent nd/vd. |
| L17 / S28A | `glass` | `Moldable low-dispersion glass, 553/717` | `M-FCD500 (HOYA, 553717)` | Existing HOYA catalog row exactly matches patent nd/vd. |

### Spectral corrections

- Converted every `dPgF` field from the patent's condition-expression delta convention to the project engine convention, `theta_gF - (0.6438 - 0.001682 * vd)`.
- The analysis table still reports patent-condition `Delta theta`; an explicit note now distinguishes it from data-file `dPgF`.

### Cross-section review

- Reviewed patent Figure 1 against the current semi-diameter progression. No SD edits were needed; the current file already represents the dominant bulbous L1, tapered G1, and compact rear groups.

### Analysis sync

- Updated the element narratives and glass-identification table for L3, L8, L9, and L17.
- Updated confidence notes where class-level labels became catalog-backed matches.

## 2026-05-31 - APD display-key correction

### Patent evidence

- Rechecked ignored local file `patents/JP2018189733A.pdf`.
- The patent publishes `theta_gF` for every element, but that column is spectral data; it does not mean every element should carry the APD visual key.

### Display-key corrections

- Retained `dPgF` on all 17 elements for chromatic tracing.
- Kept `apd: "patent"` only on the visually keyed special-dispersion elements: SLD candidate L4; FLD L5, L12, L14; high-positive-APD flint L7; and SLD candidates L16, L17.
- Changed L1, L2, L3, L6, L8, L9, L10, L11, L13, and L15 to `apd: false`.
- Added `apdNote` only to keyed elements so the inspector now matches the diagram color coding.

### Analysis sync

- Added a display-key note distinguishing retained patent partial-dispersion data from the narrower visual APD key.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1 prints 2ω = 112.80° / 100.18° / 85.54° at Y = 21.63 mm for all three zoom states (各種データ,
p. 18, ¶0127), so the design covers the full-frame corner (21.65 mm) throughout. The estimated G1 rims were sized for
paraxial envelopes: at the wide end rim 5A stopped the real chief ray (solved through the stop centre) at 51.0° (82% of
the corner), and the undersized rims also kept the corner chief ray from solving past 53.9°. The middle and tele
stations already reached 100%. With the rims opened, the wide-end corner chief ray (56.43°; patent ω 56.40°) crosses
surfaces 1A-11 at 36.78, 27.62, 26.61, 21.05, 20.49, 18.19, 17.89, 17.18, 16.79, 16.47 and 16.16 mm; the middle and
tele corner heights are lower on every surface. Each new value is that height + ~0.5 mm, rounded up, except where the
64.2° rim-slope limit (sd/|R| ≤ 0.90) caps it: surfaces 2 (limit 27.82 mm) and 4 (limit 21.35 mm) sit 0.18 and 0.25 mm
above the chief ray, and neither could be scaled with its front surface. L3 is a strong meniscus, so 6A takes its own
floor rather than following 5A to 21.0 mm (its polynomial also steepens sharply past ~21.4 mm); the rears of L4 (8) and
L6 (11) are scaled with their front surfaces. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 33.8 | 37.3 | wide corner chief ray 36.78 mm + clearance; no aspheric turnover to 44.8 mm |
| 2 | 27.1 | 27.8 | wide corner chief ray 27.62 mm; capped by the rim-slope limit (27.82 mm), so not scaled with 1A |
| 3 | 24.0 | 27.2 | wide corner chief ray 26.61 mm + clearance |
| 4 | 19.5 | 21.3 | wide corner chief ray 21.05 mm; capped by the rim-slope limit (21.35 mm), so not scaled with 3 |
| 5A | 17.5 | 21.0 | wide corner chief ray 20.49 mm + clearance; no aspheric turnover to 25.2 mm |
| 6A | 17.5 | 18.7 | wide corner chief ray 18.19 mm + clearance; strong meniscus, not scaled with 5A; no turnover to 25.2 mm |
| 7 | 16.5 | 18.4 | wide corner chief ray 17.89 mm + clearance |
| 8 | 16.5 | 18.4 | scaled with surface 7 (×1.12); corner chief ray 17.18 mm |
| 9 | 16.0 | 17.3 | wide corner chief ray 16.79 mm + clearance |
| 10 | 16.0 | 17.0 | cemented junction, own floor: wide corner chief ray 16.47 mm + clearance |
| 11 | 16.0 | 17.0 | scaled with surface 10 (×1.06); corner chief ray 16.16 mm |

The validator accepts the new values, all three stations now reach 100% of the corner with every rim clear, the
image-circle floor still reports nothing undersized, and no render trim or gap overlap appears at any zoom station.
Departures from the paraxial sphere at the new rims are +8111.0 µm (1A at 37.3 mm), +969.2 µm (5A at 21.0 mm) and
+987.5 µm (6A at 18.7 mm); the analysis now quotes the 5A/6A values at the new rims (they were quoted at 17.5 mm) and
notes the surface 2/4 rim-slope margins. The quoted L8 edge (0.53 mm) and 27-28A gap margins are unchanged.

## 2026-10-30 — Fresh F-mount all-face and glass review

- Directly inspected original `patents/JP2018189733A.pdf`, Numerical Example 1: Figure 1 (PDF p.31), native and600 dpi crop; complete media/θgF table (p.17), exact odd/even aspheres and all source zoom stations (p.18), line/conic definitions (p.16 ¶0117/0121), and anomaly-condition prose (pp.7–8 ¶0032–0036). Every air face and cemented interface was checked. Infinity-only source zoom tables do not establish a close-focus trajectory.
- Preserve smaller clear caps on S2/4/6A =27.8/21.3/18.7 mm and add opaque outer extensions37.3/27.2/21.0 mm, following the three clear source meniscus lands without continuing their curves. S17 gains an inferred0.80 mm cut (cap 12.015803, outer 14). The C5 doublet's common source outline is restored at 12.5 mm on S25/S26/S27: S26's continuous cemented cap grows11.6→12.5, and S27 gains a1.67 mm cut (cap 11.548110, outer 12.5). No opaque interface land is added, and the actual compound outline remains connected.
- Figure 1 is about402 ppi,6.10 native px/mm from the130.5501 mm first/last lens-vertex span. Concave cap shares are approximately S17 q=.70±.0233 (edge 73 nativepx) and S27 q=.84±.0231 (80 px), with one-pixel uncertainty at cap and edge. Literal figure-share depths .53/1.18 mm fail full-beam clearance. Move them outward: S17 reach 11.931131 +.05 <12.015803; S27 final reach 11.476894 +.05 <11.548110. On the old11.6 mm S27 outer rim the smallest passing0.01 mm cut would leave less than0.1 mm land; the source-supported full C5 outline removes that artificial taper and permits a real land. Neither depth is source-printed, and no source exemption/tolerance is used. All remaining faces lack an additional independently resolved land or retain their already-supported continuous caps.
- All **17 physical lens media** retain printed nd/νd andθgF. Four-decimalθgF precision (±.00005) is preserved through conversion to `.6438−.001682νd`; all 17 stored deltas reproduce the source ratios at printed precision. All 17 retain compatible catalog curves, which do not establish suppliers or melts. No source C/F/g indices or rear plate is supplied. L7's `apd` flag changes `patent`→`inferred`: itsθgF=.6388 stays measured, but the material is outside the source anomaly-condition groups (G1 negatives and post-stop positives). The source condition-backed flags stay; public prose now distinguishes catalog compatibility from production identity.
- With identical fixed launch coordinates across three source zoom stations and five source-field fractions, a65×65 pupil-disk sample retains46,563 successful rays, loses0, gains0, and blocks1,572 in both models. This finite sampling is not flux or a continuum guarantee; it explicitly checks the possible vignetting effect of S26's opened interface. Full cut guards are checked separately with all final edits. The27–28A intrusion is now2.634740 mm against2.714940 allowed, synchronized in public prose; quoted asphere departures stay at their unchanged optical caps.
- Canonical/surface/full-cut, image-circle, direct field and aperture checks pass; no unlaunched cut fields, undersized surface or hidden renderer trim. Nine actual SVG states were rasterized and visually inspected, including the common C5 rim. All source R/d/aspheres, media/partials, stop/zoom/aperture/focus controls and tolerances are unchanged. Shared catalog/resolver and focused glass tests supplement the source review; full integration gates remain separate.
