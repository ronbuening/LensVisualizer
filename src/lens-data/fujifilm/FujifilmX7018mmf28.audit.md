# Audit Log - Fujifilm X70 18.5mm f/2.8

Patent: US 2017/0075089 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20170075089A1.pdf`; local text confirms the queued nd/vd rows.
- Updated surface 1 to `S-FTM16 (OHARA)` for nd=1.59270, vd=35.31.
- Updated surface 5 to `S-TIM35 (OHARA)` for nd=1.69895, vd=30.13.


## 2026-07-24 - Patent-figure semi-diameter audit

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 10A (L31 front) | `sd` | 6.25 | 9.30 | FIG. 1 draws L31 at ~10.8 mm; capped by S10A polynomial turnover |
| 11A (L31 rear) | `sd` | 6.55 | 9.60 | same |
| 12 (L32 front) | `sd` | 7.55 | 11.70 | FIG. 1 ~11.7 mm |
| 13 (L32 rear) | `sd` | 8.20 | 12.70 | FIG. 1 ~12.7 mm; APS-C corner ray needs >= 9.08 mm at t = 5.09 mm |

- The old S13 = 8.20 mm could not pass a corner ray to the APS-C image circle from 5.09 mm ahead of the
  image plane.
- FIG. 1 measured from a 300 dpi zoom, scaled by matching the drawn axial extent (850 px) to the data
  file's 22.31 mm glass span: L11 5.12, L12 4.33, L21 3.52, L22 3.70, L23 5.83, L31 10.76, L32 12.71 mm.
  G1 and G2 agree with the stored values inside 15 % and were left alone; only G3 was wrong.
- S10A's polynomial reaches its steepest slope near h = 9.6 mm, turns over just past it, and diverges
  beyond h = 10 mm (sag -3.08 mm at h = 10.00, +31.99 mm at h = 11.20), so L31 cannot reach the drawn
  ~10.8 mm.
- Quoted rim departures moved with the SDs: S10A -628.802 µm @ 6.25 mm -> -1823.797 µm @ 9.30 mm;
  S11A -494.019 µm @ 6.55 mm -> -1653.712 µm @ 9.60 mm. Analysis prose and
  `__tests__/src/lens-data/oddAsphereBackfill.test.ts` updated to match.
- Verification: `npm run typecheck` passed; `npm run test` 2440 tests passed; cross-section re-rendered
  and compared with FIG. 1.
- Full method and per-lens results: agent_docs/patent-figure-sd-audit.md.
