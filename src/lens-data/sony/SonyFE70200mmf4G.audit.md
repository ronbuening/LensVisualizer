# Audit Log - Sony FE 70-200mm F4 G OSS

Patent: US 2015/0226945 A1, Numerical Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20150226945A1.pdf` against `SonyFE70200mmf4G.data.ts` and the companion analysis sidecar.
- Patent Table 1 confirms the stored R/d/nd/vd zoom prescription for Example 1, and Tables 2-3 confirm the variable gap and asphere rows already used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates, matching the file header note.
- Updated L12, L13, and L412 from untagged APD to `apd: "inferred"` because the patent nd/vd values map to ED/Super-ED fluorophosphate catalog classes; no patent dPgF or theta-gF values are assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-25 - MTF census: source track / paraxial focus contradiction

Source: local `patents/US20150226945A1.pdf`, Numerical Example 1 Tables
1-3, PDF pages 20-21 (printed pages 6-7), paragraphs 0107-0108. No scaling.
Checked all 37 surface R/d/nd rows, all 21 element vd values, and every
K/A4/A6/A8/A10 coefficient on S18, S28, S29. All match; higher terms are
absent/zero. Table 3 infinity wide/mid/tele gaps d5/d12/d17/d25/d28 match
every column. The existing inferred close-focus spacings are not source
infinity values and were not used in this check.

Table 1 labels the final gap BF without a number; Table 3's total track
190.0000 mm fixes it to 190 - 147.0727 = 42.9273 mm at wide infinity.
No plate is listed after S37. Independent ABCD gives EFL 72.160241 mm
versus stated 72.0974 mm and BFL 42.115294 mm versus that 42.9273 mm
image distance. The inferred BF correctly preserves the printed total track;
it is the source constraints that do not reproduce paraxial infinity focus.
No single source-supported misprint resolves this. Preserve the published
track, indices, and radii; do not tune BF or invent a plate.

Offset before/after: -0.812006 -> -0.812006 mm. Header and analysis now
disclose the source contradiction; Section E row deleted while the numerical
census flag remains. Existing glass/spectral annotations are unchanged.
No user-visible data correction or changelog entry.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Source: local `patents/US20150226945A1.pdf`, Numerical Example 1, Table 3
(printed page 7, PDF page 21), introduced in paragraph [0108]. The Fno row
prints 4.1474 / 4.0559 / 4.1269 in the wide-angle end / middle position /
telephoto end columns; read from the page image and from the text layer.

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno` | `4.13` (scalar) | `[4.1474, 4.0559, 4.1269]` | Table 3, Fno row, wide-angle / middle / telephoto columns; printed page 7, PDF page 21 |
| `zoomApertureModel` | `"fixed-iris"` | removed (default per-station iris) | Table 3 f-numbers need three different radii; [0059] (printed pages 3-4, PDF pages 17-18) and [0112] (printed page 7, PDF page 21) only place the diaphragm and state no diameter |
| `apertureDesign` | `4.13` | `4.1474` | Table 3, Fno row, wide-angle end column |
| `fstopSeries[0]` | `4.13` | `4.1474` | Follows the wide-station `nominalFno` |

- Why one radius is dropped: by real marginal ray the Table 3 f-numbers need
  iris radii 12.6067 / 12.5997 / 12.4248 mm (spread 1.45 %; paraxially
  12.3135 / 12.2926 / 12.1372 mm, spread 1.44 %). No single radius fits
  within print rounding. Wide and middle agree to 0.06 %; telephoto needs
  the smaller opening.
- Before: one 12.6624 mm iris sized from 4.13 at the wide end traced
  f/4.13 / f/4.04 / f/4.05, against the printed 4.1474 / 4.0559 / 4.1269
  (telephoto 1.9 % fast). After: each station's iris is traced from its
  printed value and traces f/4.147 / f/4.056 / f/4.127. The stop is the
  axial limiter at all three stations; no station is rim-limited.
- Stop statements: the patent states no stop diameter, no clear apertures
  and nothing about holding or varying the F-number while zooming. A
  text-layer search for diaphragm / aperture / diameter / Fno finds, on the
  stop, only its placement in G41 between L413 and L414 ([0059], [0112],
  claim 7) and the symbol definitions in [0094]; the only f-numbers are the
  tabulated Fno rows.
- Confirmed unchanged: Example 1 identity (Table 1 r1 88.50640,
  r22 35.38520 / d 3.70000, 23 (STO) infinity / d 10.13000, r24 72.409010);
  Table 3 focal lengths 72.0974 / 122.9480 / 193.9726 against
  `zoomPositions`; infinity gaps d5 / d12 / d17 / d25 / d28 in all three
  columns; stop position at surface 23 with 3.7000 mm before and
  10.1300 mm after at every station. Computed EFLs 72.1602 / 122.9747 /
  193.9119 mm.
- No semi-diameter changed. The stop surface keeps its authored `sd` 12.25;
  the wide-open iris is sized from `nominalFno`, not from that value.
- Header gains an Aperture block with the station radii. The analysis note's
  sentence crediting the 12.25 mm stop semi-diameter with reproducing the
  patent f-numbers is replaced by the traced station radii.
- Left open: whether the smaller telephoto opening is the iris closing or an
  axial rim in the manufactured lens cannot be told from the patent, which
  prints no clear apertures.
- Left open, outside this change: the two-reader audit notes that paragraph
  [0139] (printed page 10, PDF page 24) sets the e-line (546.07 nm) as the
  aberration-diagram reference, which may account for the EFL half of the
  image-plane contradiction recorded above; the 0.81-0.91 mm back-focus gap
  is not explained by it. Not re-derived here.
