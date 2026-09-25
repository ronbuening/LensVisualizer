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
