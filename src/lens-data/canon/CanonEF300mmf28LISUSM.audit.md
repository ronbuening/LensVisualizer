# Canon EF 300mm f/2.8L IS USM — Audit Log

Patent: US 6,115,188 A, Numerical Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent R27 gap (68.641078902 mm) with the patent's rear stack, read from the rendered Numerical
  Example 1 continuation (PDF page 69, printed column 13): D27 = 8.00 mm, filter FL R28–R29 2.00 mm, nd 1.516330,
  νd 64.1, D29 = 0.00. D29 is a placeholder, not a back focus, so the 59.3221048 mm filter-to-image air is derived as
  68.641078902 − 8.00 − 2.00/1.51633 to keep the file's paraxial image plane. Labeled S-BSL7 (OHARA), a
  coordinate-compatible catalog match (catalog νd 64.14).
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and the reconstructed 2.5 m
  keyframe (worst difference 6×10⁻¹¹ mm). Physical track grows by 0.681 mm to 268.002 mm; the L2 close-focus travel
  was solved on the old air-equivalent track, so the same object now sits 2.500681 m from the image plane and
  `closeFocusM` keeps Canon's marketed 2.5 m.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate FL moved out of `rearPlates` into the drawn prescription: surfaces 28–29 and element
  16 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 22 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (20.90 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Original-PDF shape and glass review

### Exact original, selected example and native resolution

Read local `patents/US6115188.pdf` anew. Numerical Example 1 spans PDF pp. 68–69 (printed cols. 12–13); all 29 rows,
16 modeled media and the two source focus-adjacent spacings were checked directly. The corresponding section is Fig. 1
on PDF p. 3, sheet 1; Fig. 2 on the same sheet is a different example and was excluded. The full first-embodiment prose
on PDF pp. 63–68 and the certificate on PDF pp. 82–83 were inspected. The certificate does not alter Example 1.

The native sheet is 2320 × 3408 pixels at 300 ppi. Its selected 2000 × 760 optical crop was rotated 90° without
resampling. Roughly 1117 native pixels span the 208.68 mm first-to-filter vertex distance, about 5.35 px/mm or 0.19 mm
per pixel. Practical height uncertainty is ±0.8 mm after stroke thickness and schematic endpoint ambiguity. Reading
magnification adds no native resolution. Leaders, group brackets, SP strokes and LF/LT arrows are excluded. The source
prints no numerical clear diameters.

### Every-element shape and filter disposition

All 15 powered elements, four cemented interfaces, concave ends and filter FL were inspected against native Fig. 1 and
actual SVGs. These are inferred optical caps, not published production apertures.

| Element / faces          | Previous clear sd, mm | Adopted clear sd, mm | Disposition                                                                     |
| ------------------------ | --------------------- | -------------------- | ------------------------------------------------------------------------------- |
| E1, 1/2                  | 55/53                 | 51.5/51.5            | Native front collector near 51.5.                                               |
| E2, 3/4                  | 49/45                 | 44/44                | Separate positive meniscus near 44.                                             |
| E3, 5/6                  | 41.7/42               | 41.7/42              | Retained gap-constrained caps; source blank restoration remains limited.        |
| E4, 7/8                  | 42/39                 | 39/39                | Source positive rim near 39.                                                    |
| E5, 9/10                 | 39/35.5               | 33.5/30              | Source outer rim near 33.5 with resolved S10 rear shoulder.                     |
| L2 doublet, 11/12/13     | 27/26.5/26            | 24.5/24.5/24.5       | Connected focus component near 24.5; no opaque interface land.                  |
| L31 doublet, 15/16/17    | 20/20/19.5            | 17.5/17.5/17.5       | Source post-stop component near 17.5.                                           |
| L32 front pair, 18/19/20 | 19.5/18.5/15.85       | 17/17/15.85          | Clear rear cap retained; outer S20 shoulder reaches 17.                         |
| L32 rear negative, 21/22 | 15.85/18              | 15.85/17             | Clear front cap retained; opposed S21 shoulder reaches 17.                      |
| L33 doublet, 23/24/25    | 20.5/20.5/20.5        | 19/19/19             | Connected native component near 19.                                             |
| Final positive, 26/27    | 22/22                 | 21/21                | Source plano-convex component near 21.                                          |
| Filter FL, 28/29         | 22/22                 | 25/25                | Native filter outline near 25; supersedes the earlier ray-envelope-only height. |

There are 23 clear-cap revisions and three outer shoulders. S10 has clear sd 30 and `rimExtensionSd: 33.5`; S20/S21
keep clear sd 15.85 and use opposed outer shoulders of 17. These are resolved air-facing shoulders. No opaque bonded
land, disconnected resin wing, unsupported compound blank or inferred cut is added. All paths remain connected.

Source R/d, stop, nominal aperture, existing focus trajectories and the physical source filter are unchanged. Source
R27–R29 retain 8 mm air and 2 mm glass; printed D29 = 0 is not a physical back focus. Existing derived filter-to-image
air 59.3221048 mm remains, with no manual folding of plate t/n into a drawn gap. The optional front protection glass
has no Example 1 numerical row and is not invented. There is no hybrid layer or separately specified cement medium.

### Retained thin-gap and reconstructed-focus constraint

The pre-existing `gapSagFrac: 0.96` remains unchanged. The physical residual gap is 0.170987 mm at S4–S5 and 0.246289
at the opposed S20–S21 shoulders. These are positive clearances, not source-published margins. The allowance predates
this review and is not increased to obtain passing results.

Rejected source-blank trials: S5 = 42.5 mm gives 4.05 mm intrusion against 3.907 mm allowed across D4 = 4.07; full
S20/S21 clear caps of 17 give 6.10 against 5.299 allowed across D20 = 5.52, exceeding even the physical gap. Their
smaller optical caps remain. No source R/d or stop/focus control is changed to fit a drawing or clear an inferred beam.

The unchanged 41.7 mm S5 cap clips the outer axial ring in 28/101 sampled focus states, focus 0.73–1.00. At the close
endpoint the ring reaches 42.346190 mm there. The pre-review baseline has exactly the same focused restriction. The
source publishes only L2's direction, not a finite-focus spacing table. Existing reconstructed close focus remains
2500.681026 mm from the physical image plane; the nominal 2.5 m product value is not imposed again as an exact source
constraint. No beam-exempt cut or tolerance increase is invented to clear that reconstruction.

### Every-medium spectral review and source discrepancy

All 16 literal index/Abbe pairs are retained, including FL. The numerical introduction on PDF p. 68, col. 12, defines
Ni/νi without a material spectral line. The complete first-embodiment prose and certificate supply no d/e anchor,
numeric wavelength, individual line indices, partial dispersion or APD evidence. All media now carry `Unmatched` and
`indexReferenceNote`, explicitly retaining approximate d-line tracing. All 16 previously active catalog curves are
disabled. No per-lens nC/nF/ng/dPgF field was present; none is added. Historical wavelength, chemistry, supplier and melt
remain unresolved. Production UD/fluorite statements remain qualified product-correlation evidence; the CaF2 curve is
not active and the correlation does not verify this patent medium's spectral reference.

Table 1, PDF p. 72 (col. 19), prints condition (5) f/f3 = 0.828. Literal R15–R27 give f3 = 254.788656 mm and model
f/f3 = 1.152326. Equations (5)/(5a), PDF pp. 67–68, use that same convention. The certificate does not amend the factor
or an Example 1 row. The discrepancy is formalized as unresolved `source.errata`, with no source-geometry tuning or
unconfirmed cause asserted. The coordinator owns the shared Section G queue entry. Earlier plate-review dates above
are preserved; their catalog-reference confidence is superseded by this explicit source-reference finding.

### Actual SVGs and sampled runtime limits

Three actual SVGs cover infinity, middle and close focus and were compared directly with native Fig. 1. All 201 sampled
focus states have 16 finite, closed, connected element paths and zero hidden renderer trimming. Infinity surface,
aperture, image-circle and at least 99% corner-coverage checks pass with clear chiefs. The unchanged derived iris is
17.662797 mm; project paraxial f-number 2.9 differs from independent real collimated input-diameter ratio 2.969079.
No source physical iris diameter is established by either convention.

An actual-conjugate probe uses 101 focus controls × three fields × 97 pupils, 29,391 rays. All chiefs clear with zero
seed/aiming failures. The source infinity axial bundle clears, while the 28 near-close axial restrictions above are
retained. All 2,251 off-axis noBracket entries occur before S1 and independently intersect the unrestricted first sphere
outside the cap; zero are unexplained inside-cap misses. Other off-axis clipping remains sampled vignetting. Finite
fields use Gaussian image magnification and are not a source-certified production field map.

IS is checked only in the authored centered state. The source's Fig. 19 displaced-image condition of 0.3° (description
on PDF p. 64, col. 4) does not give physical L32 actuator travel, so no lateral IS stroke is invented. Moved-state
clearance, optional converter combinations, continuous illumination and production performance remain unverified.
Source fidelity, sampled clearance and the qualified retail correlation remain separate conclusions.

- Count/prose consistency follow-up on 2026-10-30 reuses this completed original review: selected
  Example 1 has 16 media / 12 groups including required drawn FL, so catalog counts/specs now include
  FL. The retained production 17/13 count additionally includes protection glass absent from this
  example’s numerical rows. No source reinspection, geometry/control change or extra fresh review is
  claimed; the actual historical and original-review dates above are preserved.
