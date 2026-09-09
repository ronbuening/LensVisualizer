# Audit Log - Carl Zeiss Contarex Planar 55mm f/1.4

Patent: DE 1,170,157 B, sole example  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | DE 1,170,157 B gives the sole prescription with `nd`/`vd` only. The stored values match after x55 scaling, including the intentionally collapsed coincident flat cemented surfaces. LF7 and LaF10 rows remain unresolved in generated reports, so no catalog relabel was made. |

### Phase 2 - Retained-information audit

- Rechecked the patent table against the current data file after x55 scaling. The surface sequence remains faithful to the patent while collapsing zero-thickness coincident flat surfaces into practical cemented junctions.
- Confirmed the patent provides no explicit semi-diameter data. Stored SDs remain inferred from f/1.4 marginal/chief rays, 20 degree half-field, B56 filter-thread clearance, and mechanical edge clearance.
- The stop position remains inferred from patent Fig. 1 inside the large central air gap.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements; the patent provides no line-index or partial-dispersion information.
- High-index lanthanum/dense-flint status is already represented in the LaF3, SF6, and LaF10 labels and corresponding role prose.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked DE 1,170,157 B's LF7 coordinate and assigned Hikari J-LF7 as a supplier-neutral spectral proxy for L3.
- The patent coordinate and historical LF7 class remain authoritative; no Zeiss production supplier is inferred.
