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

## 2026-10-12 — Semi-diameter pass for the stated axial beam

Rule applied (`agent_docs/patent-figure-sd-audit-procedure.md`, "A clipped stated beam"): a surface that clips the
stated on-axis ray rises to that ray's height, rounded up to 0.1 mm; an element the figure draws square-cut, whose two
faces carried one value, keeps one value; and `gapSagFrac` takes the smallest two-decimal value that admits a facing
pair the default refuses, where the faces do not cross and the figure draws them meeting at the rim. No `R`, `d`,
`nd`, `vd`, glass label, `nominalFno` or `STO` value changed, and no semi-diameter was lowered.

Starting point. Numerical Example 25 (`patents/US6115188.pdf`, PDF p. 79, col. 34) prints f = 392.15, Fno = 2.9,
2ω = 6.3° and no semi-diameters. The stated ray is the axis-parallel ray at the F/2.9 entrance-pupil radius,
67.610 mm, at infinity focus; a prime has one station. On-axis longitudinal spherical aberration of the prescription is
−0.015 / +0.006 / −0.007 / −0.016 mm at 1.0 / 0.85 / 0.7 / 0.5 of that radius, so the prescription carries the ray and
the shortfall was a rim. Surface 7 at 53.3 mm stopped every on-axis ray entering above 65.144 mm: traced f/3.010
against the stated f/2.9 (+3.8 %). It was the only surface below the stated ray.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L1b-N front) | 53.3 mm | 55.5 mm | Stated ray reaches 55.490 mm at infinity focus; 53.3 mm clipped it |
| Surface 8 `sd` (L1b-N rear) | 53.3 mm | 55.5 mm | Squared to the front face, Fig. 88 draws L1b-N with a square-cut rim; the ray needs 51.775 mm |
| `gapSagFrac` | 0.90 (default) | 0.97 | Smallest two-decimal value that admits surfaces 6 / 7 at 55.5 mm; Fig. 88 draws L1b-P and L1b-N meeting at the rim |

The raise is +4.1 %. Surface 7 stands 0.010 mm outside the stated ray. The remaining 29 surfaces keep their values;
the nearest to the ray are 13 (34.0 against 32.871 mm), 14 (34.0 against 32.632 mm) and 17 (21.0 against 19.265 mm).

### How Fig. 88 draws the front group

Fig. 88 (Sheet 57 of 60, PDF p. 59) is the section the patent assigns to Numerical Example 25. The embedded page
image is 2320 × 3408 px at 300 dpi; the optical axis runs up the page with the object side at the bottom, centred on
x = 1293 px. Positions are stroke centres read from pixel runs at native resolution, so one pixel is 0.163 mm.

- Scale along the axis: the surface-1 vertex is at y = 2798 px and the image line at y = 512.5 px, 2285.5 px for the
  372.207 mm track, 6.140 px/mm. Surface 1 to surface 15 (y = 1900.5 px) gives 897.5 px for 146.27 mm, 6.136 px/mm.
  At 6.14 px/mm every vertex stroke of surfaces 1-15 lies within 5 px (0.8 mm) of the prescription, and the drawn
  D12 is 23.6 mm (printed 24.36 at infinity, 43.15 in the 3.0 m reconstruction), so the figure is the infinity state
  drawn to scale.
- Rims, half the distance between the two edge strokes, against the stated ray's height on the element's first face:

| Element (surfaces) | `sd` before | Stated ray | Fig. 88 rim |
|---|---:|---:|---:|
| HG (1 / 2) | 72.0 / 72.0 | 67.610 / 67.610 | 68.8 |
| L1a (3 / 4) | 72.0 / 72.0 | 67.610 / 67.230 | 67.5 |
| L1b-P (5 / 6) | 61.8 / 61.8 | 56.883 / 55.545 | 56.8 |
| L1b-N (7 / 8) | 53.3 / 53.3 | 55.490 / 51.775 | 55.2 |
| L1c-P (9 / 10) | 52.5 / 52.5 | 49.038 / 47.949 | 49.1 |
| L1c-N (11 / 12) | 45.0 / 43.8 | 40.733 / 35.933 | 41.0 |
| L2 (13 / 14 / 15) | 34.0 / 34.0 / 34.0 | 32.871 / 32.632 / 30.560 | 32.6 |

- The figure draws every front-group rim at the stated ray's height, within 0.3 mm (two pixels) except the cover
  glass. L1b-N was the one element stored below its drawn rim; the figure's 55.2 mm and the ray's 55.49 mm differ by
  less than the reading error, so the figure does not draw the element smaller than the ray needs.
- L1b-N is square-cut: each edge is one straight stroke parallel to the axis, about 100 px (16-17 mm) long, from the
  corner of the front face to the rear face. The front face (surface 7) runs to that corner, where its stroke merges into
  the plane rear face of L1b-P (surface 6): the pair is drawn meeting at the rim. The concave rear face (surface 8)
  ends at about 51.3 mm and a flat land carries it to the edge, as on the other concave faces of the figure
  (surfaces 12 and 15). The renderer draws no land, so the squared face runs as a sphere to 55.5 mm and its corner
  lies 1.3 mm nearer the image than the drawn land.
- L1b-P is drawn 1.6 mm taller than L1b-N. The file keeps it at 61.8 mm, so the rendered step is 6.3 mm (8.5 mm
  before).

### Pair 6 / 7 under `gapSagFrac: 0.97`

Surface 6 is plane and surface 7 has R = −597.7 mm, so the D6 air gap of 2.68 mm closes outward and the two faces
meet at 56.54 mm. At the 55.5 mm rim surface 7's sag takes 2.5823 mm of the gap, 96.36 %, and 0.098 mm of air
remains. The gap is fixed, so this holds at every focus position. At 0.96 the validator refuses the file: `Air gap
"6"→"7": combined surface sag (2.58 mm) exceeds allowed gap intrusion (2.573 mm of 2.680 mm) at sd=55.5`. The default
0.90 admitted surface 7 only up to 53.64 mm, which is why the rim sat at 53.3 mm.

What else the value loosens: the limit applies to every air gap of the lens. Pair 22 / 23 (the L3b air lens) sits at
89.01 % of its 5.65 mm gap at the 16.8 mm band, unchanged; 0.97 would admit a band up to 17.50 mm there against
16.89 mm at 0.90. No rim there was changed. The other gaps open outward or sit far below either limit (12 / 13 at
55.96 % at infinity, 24 / 25 at 19.9 %, 29 / 30 at 5.4 %). The renderer trims no element at focus 0, 0.5 and 1.

### Results

| Check | Before | After |
|---|---|---|
| Traced on-axis f-number, infinity (stated f/2.9) | f/3.010, rim at surface 7 (+3.8 %) | f/2.900, iris |
| Surfaces below the stated ray | 7 | none |
| EFL / wide-open iris radius | 392.1391 mm / 20.4844 mm | unchanged |
| Engine half-field | 4.2097° | 4.2563° |
| Field coverage, 135 corner | 100 % (21.65 of 21.65 mm at 3.1°) | 100 %, unchanged |
| Image-circle floor | no surface listed | no surface listed |
| Extender EF 2× composed | 785.21 mm f/5.807, no axial clip, corner 100 % | unchanged |

Vignetting, infinity, wide open. Share of the F/2.9 pupil diameter passed in the meridional section at
0 / 0.5 / 1.0 / 1.5 / 2.0 / 2.5 / 3.0 / 3.15°: 96.3 / 92.4 / 86.7 / 80.9 / 75.1 / 66.6 / 57.6 / 54.9 % before and
100.0 / 94.3 / 88.5 / 82.8 / 76.9 / 68.5 / 59.5 / 56.7 % after. Every field gains the rays surface 7 had cut and the
corner still passes 57 %, so the modeled off-axis vignetting is kept. The viewer's curve is normalized to the axis,
whose own share rose from 96.3 to 100 %; it therefore reads 95.7 / 89.1 / 83.7 / 76.1 / 66.3 / 56.5 % before and
93.8 / 87.5 / 81.3 / 75.0 / 65.6 / 56.3 % after at 0.5 / 1.0 / 1.6 / 2.1 / 2.6 / 3.1°. Squaring surface 8 changes none
of these numbers: with surface 8 left at 53.3 mm both series are identical.

Render against Fig. 88 (dev server, infinity and 3.0 m). Element order and shapes match. L1b-N renders as a
square-cut block whose front corner sits on the plane face of L1b-P, as drawn, with no overlap, and it now stands
above L1c-P by 3.0 mm (0.8 mm before; 6.1 mm in the figure). The on-axis fan passes L1b and reaches the iris.

Left open.

- The 3.0 m state is this file's reconstruction; the patent prints no close-focus spacing or f-number, so it has no
  stated ray. There the largest clear on-axis ray meets the iris at 19.141 mm of 20.484 mm (93.4 %; 18.420 mm, 89.9 %
  before), stopped at surface 7. Filling the iris would need a height on surface 7 above the 56.54 mm at which
  surfaces 6 and 7 meet, so no rim value can supply it.
- The other front-group rims stand 4-10 % above the heights Fig. 88 draws. The rule lowers nothing, so they stay.
- `CanonEF400mmf28LISUSM.analysis.md` was not edited. Its geometry-preflight sentence quotes the smallest remaining
  clearance to the shared-gap intrusion limit as 0.030738156 mm (pair 6 / 7 at 53.3 mm under 0.90). It is now
  0.017269037 mm (pair 6 / 7 at 55.5 mm under 0.97; 0.097669037 mm of air at the rim). The minimum edge thickness
  (0.773590768 mm, L3b-P) and the largest rim slope (63.488585°, surface 12) in the same sentence are unchanged.
