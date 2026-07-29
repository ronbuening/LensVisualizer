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
- Full method and per-lens results: agent_docs/patent-figure-sd-audit.md.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 1 / Table 2 in local `patents/US20120069456A1.pdf`; S10A remains 1.56865 / 58.60 and its
  R/d/asphere values are unchanged.
- S10A `S-BAL14 (OHARA)` -> explicit unmatched 569586 molded crown. K-VC89 remains a useful family
  comparison, but the patent does not disclose a supplier and no local coefficient-backed row safely establishes
  the identity.
- Synchronized the L6 narrative, glass table, and source qualification.
