# Audit Log - Olympus F.Zuiko 35mm f/2.8 (Olympus XA)

Patent: US 4,235,521, Embodiment 1 / FIG. 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4235521.pdf`. Embodiment 1 is illustrated by FIG. 2 and uses the normalized f = 100 prescription scaled by 0.35 in the data file.
- The patent does not publish clear-aperture data. FIG. 2 shows the final rear meniscus L5 as nearly as tall as the front collector, while the previous data kept the post-stop rear group pinched from the ray-envelope estimate alone.
- Updated the rear group SDs to better match FIG. 2 while preserving rim-slope, edge-thickness, and cross-gap sag checks.

| Surface | Before | After | Reason |
|---|---:|---:|---|
| 8 | 3.6 | 5.1 | Raise L4 front toward the drawn post-stop component height while staying below the high-slope limit on R = -6.472 mm. |
| 9 | 3.8 | 5.4 | Keep L4 rear paired with the enlarged front surface. |
| 10 | 4.0 | 7.0 | Enlarge the final L5 front surface so the rear meniscus no longer appears pinched relative to FIG. 2. |
| 11 | 4.2 | 7.4 | Bring the final surface close to the 7.5 mm front-element SD, matching the patent silhouette. |

### Phase 4 - Analysis sync

- Updated `OlympusXAZuiko35mmf28.analysis.md` to mention the Fig. 2 rear-group SD adjustment and current rim-slope/sag validation language.

### Verification

- `npm test -- elementRenderDiagnostics`
