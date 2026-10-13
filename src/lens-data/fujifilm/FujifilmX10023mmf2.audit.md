# Audit Log - Fujifilm X100 23mm f/2

Patent: US 2012/0069456 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20120069456A1.pdf`; local text confirms the high-index flint row and table context for the queued labels.
- Updated surface 10A to `S-BAL14 (OHARA)` for nd=1.56865, vd=58.60.
- Updated surface 12 to `J-SFH1 (Hikari)` for nd=1.80809, vd=22.80.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-07-24 - Odd-order asphere backfill

- Re-transcribed Example 1 Table 2 from the local patent PDF.
- Replaced the even-order least-squares approximations on surfaces 10A and 11A with the exact A3-A20 rows.
- Converted patent K = 0 to the standard renderer convention K = -1, preserving the patent's paraboloid bases.
- Added edge-departure regression coverage at both data-file semi-diameters.

## 2026-07-24 - Patent-figure semi-diameter audit

- Surfaces 12/13/14/15 sd: 7.20/7.80/8.20/8.80 -> 8.00/8.60/11.20/11.90.
- Reason: S13/S14/S15 sat below the height an APS-C corner ray needs at 6.08/5.88/2.80 mm ahead of the
  image plane (floors 8.10/8.30/11.38 mm), so L7 and L8 could not deliver the format corner.
- FIG. 1 was not used to set the values: it is a rotated, ray-overlaid scan whose axial anchor truncates
  against the entering bundle, and repeated crops gave per-element ratios spanning 0.47-2.41.
- No aspheric surface changed, so the quoted S10A/S11A rim departures are unaffected.
- Full method and per-lens results: agent_docs/records/patent-figure-sd-audit-2026-07.md.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 1 / Table 2 in local `patents/US20120069456A1.pdf`; S10A remains 1.56865 / 58.60 and its
  R/d/asphere values are unchanged.
- S10A `S-BAL14 (OHARA)` -> explicit unmatched 569586 molded crown. K-VC89 remains a useful family
  comparison, but the patent does not disclose a supplier and no local coefficient-backed row safely establishes
  the identity.
- Synchronized the L6 narrative, glass table, and source qualification.

## 2026-09-24 — Cover glass PP modeled as `rearPlates`

- Table 1 (continued) on PDF p.18 (rendered and read) lists surface 15 (∞, d 2.80), then the optical member PP as
  surfaces 16–17: 2.33 mm, nd 1.51680, νd 64.2, with no distance printed after surface 17. The data stopped at surface
  15, so the modeled image plane sat 2.80 mm behind L8 instead of at focus.
- Table 11 (PDF p.20) gives BF = 5.53 mm, the air-equivalent distance from surface 15 to the image. The gap after PP is
  therefore 5.53 − 2.80 − 2.33/1.5168 = 1.19 mm. FIG. 2 (PDF p.3), which is drawn to scale, shows the same 1.19 mm
  between PP and Sim.
- Added `rearPlates` PP (2.33 mm, nd 1.5168, νd 64.2, N-BK7 catalog label, 1.19 mm to the image). Surface 15 keeps
  d = 2.80 mm as the physical gap to PP; no `var` row changed.
- Paraxial check with the engine's first-order solver: EFL stays 23.7166 mm (patent 23.72). The prescription's
  air-equivalent back focus from surface 15 is 5.5263 mm (patent 5.53), and the image plane now sits 6.3200 mm behind
  surface 15 against a paraxial focus at 6.3202 mm (defocus −0.0002 mm; it was −2.7263 mm). The estimated close-focus
  gap (S11A = 12.5 mm) now images an object 0.103 m from the image plane, matching the 0.10 m MFD it was set for
  (0.117 m before, when the infinity setting was also focused past infinity).
- The physical track from surface 1 to the image grows from 35.17 to 38.69 mm; DD + BF in air stays 37.90 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 11 (PDF p.20) prints 2ω = 62.0° and Y = 14.2 mm for Example 1. With the cover glass modeled, the traced chief ray
reaches the 14.175 mm APS-C corner at 30.98°, so the design covers the corner. The estimated L6–L8 rims clipped the real
chief ray (solved through the stop centre) from 24.4°, first at S11A, leaving the analysis field at 75% of the corner.
The corner chief ray needs S10A ≥ 7.34, S11A ≥ 7.86, S12 ≥ 8.33, S13 ≥ 9.86, S14 ≥ 12.05 and S15 ≥ 12.31 mm. Every value
is floor + ~0.5 mm, and each element's two surfaces follow their own traced heights. S11A had been capped at 6.0 mm "to
avoid a steep polynomial rim". `--scan` marks a slope sign change near 5.7 mm (S10A) and 5.4 mm (S11A), already inside
the old 6.4/6.0 mm rims. There each sag passes a flat maximum (slope 0°) and then droops smoothly toward the object; the
slopes at the new heights are −19° (S10A, 7.9 mm) and −16° (S11A, 8.4 mm). The runaway zone starts past about 8.3 mm on
S10A, where the curvature doubles every quarter millimetre (slope −50° at 9.0 mm), and past 9.5 mm on S11A, whose slope
reverses near 9.8 mm, so both values stay inside the smooth region. FIG. 2 (PDF p.3; 25.21 px/mm at 200 dpi, with all
seventeen surfaces and the image plane within 2 px of the prescription) shows the inflection is designed. It draws L6 as
a gull-wing element whose faces droop toward the object near its 8.9 mm edge, and its maximum-field rays cross L6 at
about 8 mm. The same sheet draws L7's edge at about 10.65 mm and L8 at 12.9 mm, within 3% of the new values, so it was
not used to raise them further.

| Surface | Before | After | Justification |
|---|---|---|---|
| 10A | 6.4 | 7.9 | corner chief ray 7.34 mm + clearance; rim slope −19°, short of the runaway zone past ~8.3 mm |
| 11A | 6.0 | 8.4 | corner chief ray 7.86 mm + clearance; rim slope −16°, divergence only past ~9.5 mm |
| 12 | 8.0 | 8.9 | corner chief ray 8.33 mm + clearance |
| 13 | 8.6 | 10.4 | corner chief ray 9.86 mm + clearance (FIG. 2 edge ≈10.65 mm) |
| 14 | 11.2 | 12.6 | corner chief ray 12.05 mm + clearance |
| 15 | 11.9 | 12.9 | corner chief ray 12.31 mm + clearance (FIG. 2 ≈12.9 mm) |

The validator accepts the new values, the traced edge now reaches 14.17 mm at 31.0° with every rim clear, and the
image-circle floor reports nothing undersized. The analysis now quotes the L6 departures at the new rims (S10A
−753.547 µm at 7.9 mm, S11A −636.708 µm at 8.4 mm) and replaces the old "kept at 6.4 mm or below" rationale.

## 2026-09-25 - MTF image-plane census: omitted rear path corrected

Source: local `patents/US20120069456A1.pdf`, Example 1, Tables 1-2 on PDF
pages 17-18 and Table 11 on page 20. Paragraph 0120 identifies infinity
rays; paragraphs 0124-0129 specify the d-line prescription and asphere
convention. No scaling is applied.

| Field | Before | After / source evidence |
|---|---|---|
| S1-S15 radii, thicknesses, nd; L1-L8 vd | Existing values | Every row matches Table 1. D15 = 2.80 mm is the gap to PP. |
| S10/S11 conic and A3-A20 | Existing exact odd/even terms | Every coefficient matches Table 2; source K = 0 maps to renderer K = -1. |
| PP | Omitted | `rearPlates`: t = 2.33 mm, nd = 1.51680, vd = 64.2, from S16-S17. |
| Gap after PP | Omitted | 5.53 - 2.80 - 2.33/1.51680 mm, derived from the published air-equivalent BF in Table 11. |
| Physical last-lens-to-image distance | 2.80 mm | 6.323871 mm. |

Independent reduced-angle ABCD propagation gives EFL 23.716635 mm (source
23.72 mm) and air BFL 5.526349 mm (source BF 5.53 mm). The authored plane
had stopped at PP's front face. This is an omitted plate **and** omitted
trailing path, not an air-equivalent fold: restoring only the plate would
not restore the published BF. The trailing gap is derived from a source
image-distance constraint, never from the computed paraxial focus.

Offset: +2.726349 -> -0.003651 mm (limit 0.047005 mm). Section E row deleted.
The 2.80 mm physical gap remains on S15; the front-focus variable gap on
S11 is unchanged. No finite-focus station has been inferred from this audit.
The plate has only source nd/vd; the patent adds no line indices or partial
dispersion for the unresolved L6. Existing qualified glass labels remain.
The analysis now distinguishes physical and air-equivalent distances.

## 2026-09-25 — Parallel plate audits reconciled

The 2026-09-24 and 2026-09-25 audits above independently modeled the same PP plate from Table 1 and the Table 11 BF.
The merged data keeps the 2026-09-24 semi-diameters and N-BK7 label, and writes the trailing gap as the exact
expression 5.53 − 2.80 − 2.33/1.51680 (≈ 1.194 mm) instead of the rounded 1.19 mm, so no rounding enters the published
BF. The difference is 0.004 mm, below one depth of focus. Image-plane offset −0.003651 mm (limit 0.047005 mm).
