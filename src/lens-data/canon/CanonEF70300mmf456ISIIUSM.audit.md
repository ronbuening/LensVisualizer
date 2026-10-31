# CanonEF70300mmf456ISIIUSM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20170003486A1.pdf`, Example 5, Fig. 9, PDF page 10. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves and the existing S10 12.15 mm cemented-interface ray-containment refinement. Automated median figure/data 1.052; E1-E16 normalized shape ratios 0.96-1.04. E17 1.55 is the nearby FS line, not the optical rim; the 600-dpi optical edge is consistent with the retained 15.9 mm extent.

### Glass and identity

Strict catalog coverage: 17/17 before, 17/17 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Removed proxy-derived nC/nF/ng/dPgF fields from the elements: the patent publishes only nd/vd. These fields override catalog lookup and would otherwise be treated as measured evidence. All 17 elements retain qualified OHARA catalog curves.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 9 optical rims against the screenshot. Retained the published effective-diameter halves; no supported improvement survived the source/clearance comparison. Removed invented J-series cemented-pair diagram callouts, preserving the underlying cemented metadata. E3 now has an inferred UD/APD color tag, supported by its 1.49700/81.5 coordinate and Canon's one-UD production count, not an asserted OHARA production identity.

With the image plane fixed, wide→tele L1/L3/L4/L5 travel objectward, L2a/L2b and L6 remain fixed (0.01 mm source rounding at mid). Near focus moves L5 imageward at every source zoom station. Published infinity gaps and reconstructed close gaps are unchanged.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.

## 2026-10-30 — Complete original shape and glass review

Exact original: `patents/US20170003486A1.pdf`, Example 5 / paragraph 0084, PDF p. 22
(printed p. 8), with unit/element continuation PDF p. 23. Corresponding Fig. 9 is PDF p. 10
(sheet 9); paragraph 0044 on PDF p. 16 identifies the wide infinity section and Figs. 10A/10B
(PDF p. 11) as wide/tele infinity aberration plots. Other examples are excluded.

The native embedded pages are 2560 × 3300 px at 300 ppi. The 1400 × 900 optical crop is
unresampled. About 998 px between first and last refracting vertices over the source 150.00 mm
span gives 6.65 px/mm (0.15 mm/px). Opposing optical edges, rather than the slightly leaning
axis, give the half-height readings below. Practical uncertainty is ±0.6 mm and ±0.7 mm at
near-contact tips; the source drawing is not an aperture-dimension drawing. Enlarged crops are
magnifications only. Brackets, arrows, the FS/IP lines and leaders are excluded from blank heights.

| Optical body / surfaces | Native half-height estimate (mm) | Adopted optical caps (mm) |
| ----------------------- | -------------------------------: | ------------------------- |
| E1 / 1–2                |                       about 26.5 | 26 / 26                   |
| E2–E3 / 3–5             |                       about 26.0 | 26 / 26 / 26              |
| E4–E5 / 6–8             |                       about 17.0 | 16.7 throughout           |
| E6–E7 / 9–11            |                       about 13.0 | 12.7 / 12.7 / 11.465      |
| E8 / 12–13              |                       about 12.2 | 11.465 / 12.1             |
| E9 / 15–16              |                       about 13.0 | 13 throughout             |
| E10–E11 / 17–19         |                       about 13.0 | 13 throughout             |
| E12 / 20–21             |                       about 13.5 | 13.3 / retained 12.84     |
| E13 / 22–23             |                       about 13.5 | retained 12.87 / 13.3     |
| E14 / 24–25             |                       about 14.3 | 14 throughout             |
| E15–E16 / 26–28         |                       about 13.7 | 13.6 throughout           |
| E17 / 29–30             |                       about 16.5 | 16.2 throughout           |

Twenty-four cap changes replace tapered ray-envelope outlines with the resolved optical blanks.
Every element, concave end and all five cemented interfaces were checked. Whole-height junctions
4/7/10/18/27 follow the respective source compound outlines; no opaque land is placed at a bonded
interface. There is no hybrid/resin layer, separate cement medium, source filter or rear plate.

At the visibly short vertical ends of S11/S12, `rimExtensionSd` 12.7/12.1 preserves the existing
11.465 mm optical caps. Continuing both spheres to their blank heights requires 2.29 mm combined
intrusion versus the unchanged 2.097 mm allowance across D11 = 2.33 mm. The retained cap-plus-shoulder
profiles have a minimum idealized physical residual of 0.277749 mm. No inferred cut is authored.

Full 13.3 mm caps across S21/S22 require about 1.22 mm intrusion versus 1.152 mm allowed across
D21 = 1.28 mm. Those source-effective caps remain 12.84/12.87, with 0.145736 mm physical residual.
The native ink cannot establish a separate shoulder there, so none is invented. The small retained
taper is a stated geometric constraint within the near-contact reading uncertainty. The default
0.90 guard is unchanged. No radius, physical powered spacing or cam is tuned to fill a drawing.

### Restored active source flare cutter

Paragraph 0046 (PDF p. 16 / printed p. 2) identifies a flare cutter FS with “a constant aperture
diameter.” The selected table prints source S30 d = 0.20 mm, S31 flat with effective diameter
32.20 mm, and BF = 37.80 mm from S31. The previous model omitted S31 and combined the two air
intervals into 38.00 mm. That omission is now corrected: S30 d = 0.20, FS sd = 16.10 and
FS d = 37.80 retain the same total path and source optical powers. The 16.10 mm radius is explicitly
the printed effective-diameter proxy, not an independently published finished mechanical dimension.

The old claim that this neutral plane was inactive is reproducibly false: four otherwise surviving
baseline finite off-axis rays cross its plane above 16.1 mm (maximum 16.113053 mm). Before restoration,
a figure-height trial admits 133 such rays, reaching 16.408845 mm. After restoration they are
ordinary FS clipping. A neutral air plane adds no glass, chemistry or glass contour. This is a
source-supported model correction, separate from cap-height changes; it is not a patent typo.

### Original glass and reused prior disposition

Paragraph 0078 (PDF p. 19 / printed p. 5) explicitly defines ndi and vdi based on the d-line.
All 17 literal pairs are checked directly against the selected table on PDF p. 22. No numerical
C/F/g line indices, partial-dispersion values or per-position anomalous-material identification
are printed. The 2026-09-06 removal of catalog-copied `nC`, `nF`, `ng` and `dPgF` fields is retained
with its actual date; there are no further such fields to remove now.

All 17 current curves pass coordinate-compatible resolution and remain qualified spectral proxies.
Historical chemistry, supplier and melt are unresolved. E3's APD tag remains inferred from the
high-Abbe coordinate and retained production UD-count research; neither a named source anomalous
material nor the production element number is established. No source spectral override is invented.

### Runtime verification and retained limits

The three published infinity stations and a geometry-identical 65-zoom diagnostic pass surface,
image-circle, project 3% aperture and ≥99% corner-field checks. The diagnostic clone changes no
positions or current iris radii. The retained derived wide/mid/tele iris radii are
12.167934 / 12.078070 / 11.999569 mm. They give project paraxial f/4.16 / 5.06 / 5.83; independent
real input-diameter solves give f/4.178248 / 5.084220 / 5.855160. The generic effective-diameter
column is not a physical per-station iris schedule, and the existing stop rule stays unchanged.

A 65-zoom × 21-focus-control SVG sweep gives 1,365 states with 17 finite closed connected glass
contours and zero renderer trimming. Actual nine-state SVGs and the wide source-scale SVG were
compared with native Fig. 9. The reconstructed L5 translation, all source gap rows and aperture
controls remain unchanged. Only centered IS is checked; no numerical lateral stroke is supplied.

The source supports three infinity stations. Linear interpolation is illustrative and not focus
preserving: worst sampled infinity image displacement is +5.009117 mm at zoom 0.8125, where EFL is
231.456860 mm and BF from restored FS is 42.809117 mm versus the fixed 37.80 mm image interval.
The existing three close-focus endpoints solve a 1200 mm object-to-image conjugate; these are
constrained reconstructions, not published finite spacings. Interpolation across zoom/focus can
produce a virtual Gaussian object: 55 of 455 sampled controls have that condition, and their
165 field bundles are explicitly unseeded rather than reported as cleared real objects.

For the other controls, a 65-zoom × seven-focus × three-field × 97-pupil actual-conjugate census
traces 116,400 rays. Every sampled axial bundle and chief clears, with no aim failures. All 1,555
off-axis pre-first-surface `noBracket` results independently intersect the unrestricted first sphere
outside its 26 mm cap; there is no unexplained inside-cap or interior miss. FS clips 133 marginal
rays as intended. An independent positive-object check uses 1200/focus mm object-to-image distance
and a stop-centered finite chief solve: all 132,405 rays are aimed, every axial bundle and chief
clears, 2,178 bounded first-cap misses are independently explained, and FS clips 292 marginal rays.
That latter map verifies sampled clearance, not conjugate focus or a production continuous cam.
Source fidelity, sampled runtime clearance and production correlation remain separate conclusions.

The actual 2026-09-06 source reviews and override-removal date remain above. Their 600 dpi images
were enlargements of native 300 ppi. Current source/rim, active-FS and runtime findings supersede
the old claims that effective-diameter halves alone match every blank and that FS is inactive.
