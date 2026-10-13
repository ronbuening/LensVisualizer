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
- Full method and per-lens results: agent_docs/records/patent-figure-sd-audit-2026-07.md.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent back focus (stored 4.861 mm) with the physical rear stack from Example 1 Table 1
  (p. 19): S14 d = 3.504 mm (patent d15), then `rearPlates` PP 1.300 mm, nd 1.51680, νd 64.20 (N-BK7 class; the
  elements' OHARA S-BSL7 is nd 1.51633, so the exact-nd Schott label was used), and 0.500 mm to the image.
- Paraxial check against the previous data: EFL identical; defocus changes by +0.00007 mm at infinity and close focus,
  the rounding in the old 4.861 mm (exact fold 4.86107 mm, which also matches Table 2 Bf). Physical track grows by
  1.300 × (1 − 1/1.51680) = 0.443 mm, to 38.79 mm against the air-converted TL of 38.35 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 2 (PDF p.19) prints 2ω = 62.0° and Ymax = 14.20 mm for Example 1, and the traced chief ray reaches the 14.175 mm
APS-C corner at 30.94°, so the design covers the corner. The estimated L23 rims clipped the real chief ray (solved
through the stop centre) from 25.4°, first at 8A, leaving the analysis field at 79% of the corner. The data's post-stop
labels run one lower than the patent's, so 7A/8A are the patent's surfaces *8/*9 (R 34.72225 / −33.47682). The corner
chief ray needs 7A ≥ 7.38 and 8A ≥ 7.92 mm; no other rim clips. Both values are floor + ~0.5 mm, each surface set by its
own traced height. `--scan` shows no turnover on either surface to 1.2× the new heights (rim slopes 15.5° and 6.7°), and
the 2026-07 figure audit put their polynomial limits near 10.7 and 10.5 mm. FIG. 2 (PDF p.3) is to scale (28.30 px/mm at
200 dpi; S7A, S8A and both PP faces within 1 px of the prescription) and draws L23's curved faces meeting a flat edge at
9.70 mm, with drawn sags that match the prescription there. That is 14–23% above the new values, short of the ~25% the
procedure asks for before a drawing overrides the trace, so the figure is recorded as headroom rather than used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 7A | 6.3 | 7.9 | corner chief ray 7.38 mm + clearance (patent *8; FIG. 2 edge 9.70 mm) |
| 8A | 6.2 | 8.5 | corner chief ray 7.92 mm + clearance (patent *9; FIG. 2 edge 9.70 mm) |

The validator accepts the new values, the traced edge now reaches 14.17 mm at 30.9° with every rim clear, and the
image-circle floor reports nothing undersized. The analysis now quotes the L23 departures at the new rims (7A +74.985 µm
at 7.9 mm, 8A +307.126 µm at 8.5 mm), and its L31 paragraph no longer claims smaller departures than L23's, which was
false at both the old and new rims.
