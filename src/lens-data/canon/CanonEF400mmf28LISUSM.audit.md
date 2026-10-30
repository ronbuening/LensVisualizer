# Canon EF 400mm f/2.8 L IS USM Patent Audit

Patent: US 6,115,188 A, Numerical Example 25

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 25 on `patents/US6115188.pdf` PDF page 79 (cols. 33–34): D29 = 15.00, R30/R31 = ∞ with
  D30 = 2.20, N17 = 1.516330, ν17 = 64.1, D31 = 15.28 to the inactive flare-cutter plane R32, and D32 = 38.95 to the
  image plane. The filter FL is now a `rearPlates` entry (`S-BSL7`, catalog-compatible at 1.51633 / 64.1) with
  `gapAfterMm` 54.23 (D31 + D32; FC omitted as a non-medium bookkeeping plane).
- The legacy file stored a paraxially normalized air-equivalent R29→IMG of 70.697755606 mm (printed fold
  70.680871512 mm plus +0.016884094 mm to the independently traced infinity focus). That image-plane choice is kept:
  R29→FL = 70.697755606 − 2.20/1.51633 − 54.23 = 15.016884094 mm (printed 15.00). The close-focus D12/D15 solve is
  unchanged.
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and at the 3.0 m keyframe
  (worst difference 1.4e-10 mm). Physical R1→IMG track grows by 2.20(1 − 1/1.51633) = 0.749128 mm to 372.206884 mm.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate FL moved out of `rearPlates` into the drawn prescription: surfaces 30–31 and element
  17 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 20.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (19.47 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-12 — Semi-diameter pass for the stated axial beam (historical)

- Original Numerical Example 25, PDF p. 79 col. 34 and Fig. 88, PDF p. 59 were inspected. At that runtime,
  S7 at 53.3 mm clipped the stated beam at 55.490 mm and traced f/3.010 instead of f/2.9. S7 and S8 were
  raised to 55.5 mm; the then-supported renderer did not yet represent the visible S8 outer shoulder.
- The guard changed from default 0.90 to 0.97 on that date. S6–S7 retain 0.097669 mm physical air at
  55.5 mm, while 0.96 refused the 2.582331 mm intrusion across D6 = 2.68 mm. No source R/d, pair,
  stop or aperture target changed. This review does not repeat or expand that historical guard change.
- Native source was 2320 × 3408 at 300 ppi, about 6.14 px/mm. Historical front rims were measured as
  HG 68.8, L1a 67.5, L1b-P 56.8, L1b-N 55.2, L1c-P 49.1, L1c-N 41.0 and L2 32.6 mm.
- The historical infinity/field/renderer checks passed, and a composed 2× extender was checked then.
  Finite-focus axial clearance remained limited at S7; the other oversized rims were left open under
  the then-applied raise-only rule. Historical stop/field/vignetting outputs are not current guarantees.
  The original analysis was not synchronized then; the 2026-10-30 review below supersedes current
  shape and spectral-reference conclusions while preserving this actual review date and decisions.

## 2026-10-30 — Original shape and glass review

Original Fig. 88 is on PDF p. 59, sheet 57. The native embedded raster is 2320 × 3408 px at 300 ppi.
The rotated 2420 × 1000 optical crop is unresampled; its roughly 2285 px first-vertex-to-image span over
372.207 mm gives about 6.14 px/mm. A pixel is about 0.163 mm; practical rim uncertainty is ±0.8 mm
because of stroke width and cap/shoulder junctions. The 4× rear crop is a reading enlargement only.

| Surfaces                       | Adopted clear sd (mm) | Resolved outer sd (mm), where different |
| ------------------------------ | --------------------- | --------------------------------------- |
| 1–2, HG                        | 69                    | —                                       |
| 3–4, L1a                       | 68.1                  | —                                       |
| 5–6, L1b-P                     | 57.5                  | —                                       |
| 7 / 8, L1b-N                   | 55.5 / 52.0           | S8: 55.5                                |
| 9–10, L1c-P                    | 49.5                  | —                                       |
| 11 / 12, L1c-N                 | 41.4 / 36.5           | S12: 41.4                               |
| 13 / 14 / 15, L2               | 33 / 33 / 30.8        | S15: 33                                 |
| 17–19, L3a                     | 20                    | —                                       |
| 20 / 21 / 22, first L3b pair   | 18.8 / 18.8 / 16.8    | S22: 18.8                               |
| 23 / 24, separate L3b negative | 16.8 / 17.8           | S23: 17.8                               |
| 25–29, L3c                     | 20                    | —                                       |
| 30–31, FL                      | 25                    | —                                       |

The 28 cap changes and five `rimExtensionSd` shoulders preserve connected optical contours without
opaque bonded lands. S7 and S23 keep their existing clear caps. The front and rear shoulder choices
follow visible optical edge strokes; no bracket, leader, ray or mechanical flange is counted.
The actual generated SVG was compared at approximately the native figure scale, including every
concave end, the four cemented interfaces, protection glass and filter. It preserves the source
hierarchy while replacing oversized rims and continuous concave caps with the resolved shoulders.

Rejected trials are retained as constraints: clear S7 = 57.4 mm needs 2.76 mm sag intrusion across
D6 = 2.68 mm, beyond both the physical gap and unchanged 2.5996 mm guard allowance. Continuing both
S22/S23 caps to the blank heights needs 5.68 mm across D22 = 5.65 mm, beyond the 5.4805 mm allowance.
Their cap-plus-shoulder model is retained. Initial smaller S11/S12 and S8 trials newly clipped the
finite pupil; 41.4/36.5 and 52.0 mm remain within the figure-reading uncertainty and avoid adding
restricted focus states. No cut, source R/d change, stop adjustment or guard increase was used.

A 201-position focus sweep produces 17 finite closed connected contours with zero renderer trimming.
The source infinity state passes surface, image-circle, 3% aperture and ≥99% corner-field checks.
A separate 101-focus × three-field × 97-pupil census traces 29,391 rays using stop-centered aiming
and actual Gaussian conjugates. It has no seed/aim failures, no trace failures and clear chiefs at
every sampled field. Infinity passes all 97 axial samples. The baseline and revised model both
restrict the axial outer ring in 49/101 states, focus 0.52–1.00. In the revised source-height model,
S7 limits focus 0.52–0.72; S5 limits 0.73–1.00 (closest sampled height 58.309972 mm versus clear 57.5).
This is a retained finite-focus reconstruction limitation, not full finite axial clearance.

The actual reconstructed close conjugate is 3000.749128 mm from the physical image plane. The
0.749128 mm difference from nominal 3.0 m is the filter’s physical versus air-equivalent track;
the existing focus cam and +0.016884094 mm rear normalization remain unchanged. Finite field heights
use Gaussian magnification and do not certify a production focus map. Only centered IS is represented;
transverse actuator travel, displaced-state clearance and attached teleconverter combinations are
not established by this review. Source fidelity, sampled runtime behavior and product correlation
are separate conclusions.

### Original source and glass disposition

- Exact original: `patents/US6115188.pdf`, US 6,115,188 A, Numerical Example 25, PDF p. 79 col. 34;
  Table 3 PDF pp. 79–80 cols. 34–35; matching Fig. 88 PDF p. 59 sheet 57; Fig. 92 PDF p. 61.
  The original third-embodiment prose on PDF pp. 76–78 and certificate on PDF pp. 82–83 were inspected.
  The certificate does not amend Example 25.
- All 31 modeled source R/d rows, 17 N/ν pairs, focus-adjacent source gaps, source HG/FL plates and
  existing focus/stop/aperture controls are retained. Printed D29 = 15.00 mm keeps its documented
  existing +0.016884094 mm focus normalization; D31+D32 = 54.23 mm remains behind the physical FL.
- PDF p. 78 col. 32 defines Ni/νi without a material reference wavelength. All 17 media now use
  `Unmatched` plus `indexReferenceNote`; 17 catalog curves are disabled. No unsupported per-lens
  spectral override was present. The d/C/F/g plot labels supply no per-element line indices or
  reference anchor. No partial-dispersion or APD evidence is published for this example.
- Approximate d-reference tracing, coordinate plausibility and prior production fluorite/UD associations
  do not establish a source wavelength, historical chemistry, supplier or melt. No hybrid/resin or
  separate cement medium is modeled. No inferred cuts require a cut-beam exemption.

- Catalog metadata now counts all 17 source media / 13 groups, including HG and required drawn FL,
  consistent with the retained maker count. The old FL exclusion is superseded. Source c-7 (PDF p. 78,
  col. 32) describes alternative integral front optical members, not optional/removable accessories;
  the selected numerical rows and Fig. 88 explicitly include HG. Geometry and controls are unchanged.
