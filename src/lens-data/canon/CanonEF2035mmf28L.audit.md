# Audit Log - Canon EF 20-35mm f/2.8L

Patent: US 5,000,550, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US5000550.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values but not modern procurement names; the stored class/equivalent labels remain intentionally non-exclusive.
- The high-index rows (L3, L4, L5, L8, L10, and L15) are already indicated by nd >= 1.8 and dense-flint / high-index class labels.

### Phase 2 - Retained-information audit

- Confirmed the patent does not publish clear apertures for this example. Existing `sd` values remain renderer-safe estimates from ray envelopes and cross-gap/edge constraints.
- Retained the inferred stop semi-diameter used to represent the tele-end f/2.8 equivalent physical stop.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 (table PDF p. 61) prints ω = 46.4° at the 20.6 mm wide end in FIG. 2(a) (PDF p. 3), so f·tan ω = 21.63 mm
reaches the full-frame corner (21.65 mm). The estimated front rims were sized for the 0.6-field display rays and clipped
the real chief ray (solved through the stop centre) at surface 1A from 42.0°, leaving the wide station at 17.82 mm (82%
of the corner). With barrel distortion the traced chief ray reaches the corner at 47.5°, where it crosses surface 1A at
21.02, 2 at 16.40, 3 at 15.25 and 4 at 14.47 mm; the 27.2 mm and 35 mm stations already reached their corners. New values
are those heights plus ~0.5 mm. L1 is a strong meniscus and scaling surface 2 with 1A would pass its 0.9|R| rim-slope
limit, so each surface keeps its own floor; L2 was scaled as one element from surface 3. FIG. 1 (PDF p. 2), scaled on the
wide-end track, draws L1 at about 23 mm, consistent with the new values; it was a cross-check only.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 18.0 | 21.6 | corner chief ray 21.02 mm + clearance; the asphere's slope rises monotonically to 25.9 mm (32.5° at the rim) |
| 2 | 15.8 | 17.0 | corner chief ray 16.40 mm + clearance (55.5° rim) |
| 3 | 13.8 | 15.8 | corner chief ray 15.25 mm + clearance |
| 4 | 13.5 | 15.5 | L2 scaled with surface 3 (corner chief ray 14.47 mm) |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note quotes no semi-diameter or rim-departure value for
these surfaces, so it is unchanged.

## 2026-10-30 — Original-PDF element-height and glass review

### Exact source and native evidence

Read the local `patents/US5000550.pdf` anew: Numerical Example 1, PDF p. 61 (printed cols. 7–8), all 28 radius/
spacing rows, all 15 source index/Abbe pairs, the three source zoom rows and the four front-asphere coefficients.
The introduction explicitly defines Ni at the spectral d-line. The printed spherical-base sag equation maps to
K = 0 with A4/B, A6/C, A8/D and A10/E; the stored coefficients match. R3 = −394.519 and D18 = 4.10 are visible
in the native page; OCR omissions are rejected. No source R/d, asphere, stop or focus/zoom control is changed.

The corresponding section is Fig. 1, PDF p. 2 (sheet 1 of 56). The source embeds a 2320 × 3408 native raster at
300 ppi; the optical crop is 1320 × 680 native pixels. Long axial baselines, including the 92.092 mm first-to-last
vertex span, give about 13.9–14.0 px/mm, one pixel about 0.072 mm. Stroke width, endpoint ambiguity and local
schematic differences warrant practical height uncertainty around ±0.4 mm. Reading enlargements add no resolution.
Leaders, numbered-surface pointers, group brackets, focus arrows and zoom trajectories were excluded. Lower rims
were used where upper leaders cross the optics.

The source supplies no effective-diameter column. The following remain inferred clear caps, not published Canon
apertures. Every element, both concave ends, all three cemented interfaces and the last inset outer contour were
checked against the native figure and actual rendered SVG.

### Height and outer-shoulder dispositions

| Source faces | Previous clear sd, mm | Adopted clear sd, mm | Native reading / constraint |
|---|---|---|---|
| 1A | 21.6 | 23.0 | Front optical rim about 23.2–23.4. |
| 2 | 17.0 | 17.0 | Concave optical end about 17.5; larger clear-cap trial rejected by gap guard. Resolved rear annulus extends to 23.0 with `rimExtensionSd`. |
| 3/4 | 15.8/15.5 | 17.5/17.5 | Positive meniscus outline about 17.5–17.7. |
| 5/6 | 13.1/13.1 | 14.1/14.5 | Figure about 14.5–14.7; front cap constrained by reconstructed close-focus clearance. |
| 7/8 | 13.8/14.0 | 13.6/13.6 | Positive outline about 13.5–13.7. |
| 9/10/11 | 14.0/11.2/11.2 | 10.5/10.5/10.5 | Three connected caps of C1 terminate at the same visible 10.4–10.6 outline. |
| 12/13 | 13.2/13.0 | 10.7/10.7 | Singlet about 10.6–10.8. |
| 15/16 | 9.8/9.0 | 9.0/9.0 | Biconcave outline about 8.9–9.1. |
| 17/18/19 | 9.0/10.6/12.0 | 9.8/9.8/9.8 | Connected C2 rim about 9.8–10.0. |
| 20/21 | 12.8/13.0 | 10.7/10.7 | Positive singlet about 10.7–10.9. |
| 22/23 | 13.0/11.3 | 11.6/11.3 | Meniscus about 11.6; rear 11.6 trial rejected by cross-gap guard. |
| 24/25 | 14.0/14.0 | 12.3/12.3 | Near-planar front and convex rear terminate around 12.2–12.4. |
| 26/27/28 | 14.1/14.1/14.3 | retained | The inset front blank cannot be completed from the schematic without unsupported interface/step geometry. |

There are 21 cap corrections and one outer shoulder. The S2 annulus preserves sd 17 while joining the new S1 rim
at 23 mm. Its flat outer land lies beyond R2's radius domain; the optical sphere still ends inside that domain.
No inferred concave cut, opaque bonded-interface land, disconnected layer or unsupported equal-height block is added.
C1 and C2's common heights follow visible connected optical endpoints rather than filling an unknown compound blank.
The source has no hybrid resin layer, separately modeled cement, filter or rear plate.

Rejected trials preserve the geometric constraints rather than tune source radii or gaps:

- S2 = 17.5 mm gives 10.10 mm combined sag across D2 = 10.4, exceeding the existing 9.36 mm intrusion guard.
  Retain the 17 mm optical cap; the outer annulus is independent of that cap.
- S23 = 11.6 mm gives about 1.79 mm combined sag across D23 = 1.93, beyond its existing 1.737 mm guard.
  Retain 11.3; no unresolved 0.3 mm shoulder is invented at the native-stroke uncertainty.
- S5 = 14.5 mm passes the canonical infinity scan but the actual renderer hides 0.343894 mm at wide close focus
  (0.071877/0.028979 at middle/tele). S5 = 14.1 removes that hidden clipping throughout the sampled controls.
  S6 retains 14.5; no front annular land is invented to force the focusing biconcave element into a rectangle.

### Glass and source qualifications

All 15 literal pairs and all 15 compatible curves remain unchanged. Modern catalog/class labels now identify
qualified spectral proxies with historical supplier and melt unspecified; the analysis uses the same labels.
The source's explicit d-line definition supports those active curves. It prints no individual nC/nF/ng or
partial-dispersion values, and no structured per-lens catalog-derived overrides are present. No APD claim or
special-glass identity is inferred from a coordinate class; historical chemistry remains unidentified.

The heading's 20.6–34.2 mm range contradicts the variable-gap table's 20.6/27.2/34.0 labels. The literal rows trace
to 33.9741 mm at the last state. `source.errata` now records this unresolved contradiction, preserving every source
row and the existing 34.0 mm control; no claim that the heading is a proven typo is made. The coordinator owns the
shared Section G queue entry. The production association and 0.5 m maker specification remain qualified retained
correlations; this local original review does not newly verify the historical production prescription.

### Rendered geometry and sampled runtime clearance

Nine actual SVG views cover three published zoom stations at infinity, middle and close focus. The final silhouette
was compared directly with native Fig. 1. All 1,365 sampled states (65 zoom × 21 focus) have 15 finite, connected,
closed outlines and zero hidden renderer trimming. A diagnostic 65-station copy exactly matches current runtime
geometry, with zero positional difference; all 65 pass surface/aperture checks, have no undersized format and reach
at least 99% of the full-frame corner with a clear chief. Interpolated infinity back focus still differs from its
linear image-gap interpolation by up to −0.562847 mm near t = 0.265625; the three source stations remain the
quantitative anchors. No cam or image-gap fit is made to remove this retained interpolation limit.

A separate 21 × 21 zoom/focus grid uses reconstructed paraxial finite conjugates and stop-centered finite chiefs,
then 97 pupil samples at center/half/full nominal field: 1,323 bundles and 128,331 sampled rays. Every axial bundle
passes 97/97 and every solved chief clears, with zero unaimed samples and ordinary off-axis vignetting. The close
anchors reproduce 500 mm object-to-image distance. Eight wide-end infinity image-height inversions needed the
shared analysis-field bound before chief aiming; an initial failed inversion was not treated as a physical block.
Eighty-four marginal entries still return `noBracket` before the first asphere in 25 full-field bundles, versus
617 entries in 106 bundles with the previous caps. These retained marginal intersection limits prevent a continuous
pupil or extreme-field clearance claim. The nominal finite-field target uses paraxial magnification, not a certified
finite production field map; the source publishes 1 m plots but no numerical close-focus spacing table.

Source fidelity, sampled runtime clearance and production correlation remain separate. There is no missing-original
blocker, no inferred cut to exempt, and no tolerance relaxation or source-prescription tuning.
