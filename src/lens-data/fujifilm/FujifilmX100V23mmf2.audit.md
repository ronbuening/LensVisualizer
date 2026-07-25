# Audit Log — Fujifilm Fujinon 23mm f/2 (X100V)

Patent: US 2020/0333569 A1, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20200333569A1.pdf`.
- Example 1 row confirmed L11 / surface 1 nd = 1.71736, vd = 29.51.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L11 / S1 | `TAFD25 (HOYA)` | `S-TIH1 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L11 glass label and summary table.

## 2026-07-24 - Patent-figure semi-diameter audit

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 9A (L31 front) | `sd` | 7.60 | 9.40 | FIG. 2 ~9.4 mm (300 dpi zoom) |
| 10A (L31 rear) | `sd` | 7.60 | 9.40 | same |
| 11 (L32 front) | `sd` | 6.00 | 9.30 | optical extent of FIG. 2's L32; APS-C floor 6.49 mm |
| 12 (L32 rear) | `sd` | 4.00 | 11.00 | FIG. 2 blank ~11.0 mm; floor 7.23 mm |
| 13 (L33 front) | `sd` | 4.00 | 12.10 | FIG. 2 ~12.2 mm; floor 7.33 mm |
| 14 (L33 rear) | `sd` | 6.00 | 12.10 | same; floor 9.31 mm |

- The whole rear group sat below the height an APS-C corner ray needs. The file header attributed the
  small values to the 0.100 mm S12->S13 air gap, but that gap does not constrain anything: S12 is flat
  and S13 is convex toward the image, so the gap widens with height and `_checkCrossGapOverlap`
  computes a negative intrusion. The header note was corrected.
- FIG. 2 draws L32 as a rectangle out to ~11.0 mm with its concave front surface stopping at ~9.3 mm -
  a mounting flange, not glass. S11 takes the optical extent, S12 the blank.
- Quoted rim departures moved with the SDs: S9A +277.252 µm @ 7.6 mm -> +662.051 µm @ 9.4 mm;
  S10A +193.097 µm @ 7.6 mm -> +563.937 µm @ 9.4 mm. Analysis prose and
  `__tests__/src/lens-data/oddAsphereBackfill.test.ts` updated to match.
- Not changed: G1/G2 read ~1.1-1.4x larger in the figure, but L12 (S2 R = 12.429, S3 R = 64.176,
  d = 2.67) reaches zero edge thickness at h ~ 8.0 mm, so the drawn outline there is also a flange.
- Verification: `npm run typecheck` passed; `npm run test` 2440 tests passed; cross-section re-rendered
  and compared with FIG. 2.
- Full method and per-lens results: agent_docs/patent-figure-sd-audit.md.
