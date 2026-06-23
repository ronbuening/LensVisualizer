# src/optics/state

This folder engine-native prepared optical state and cache helpers.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_state["src/optics/state"]
    n_src_optics_state_src_optics_state_cache_ts["cache.ts"]
    n_src_optics_state_src_optics_state_prepareState_ts["prepareState.ts"]
  end
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_src_optics_state_src_optics_state_prepareState_ts --> |2| n_external_src_optics_types_ts
  n_src_optics_state_src_optics_state_prepareState_ts --> n_external_src_optics_math
  n_src_optics_state_src_optics_state_prepareState_ts --> n_external_src_optics_prescription
  n_src_optics_state_src_optics_state_cache_ts --> n_external_src_optics_types_ts
  n_src_optics_state_src_optics_state_prepareState_ts --> n_external_src_types
  n_src_optics_state_src_optics_state_prepareState_ts --> n_src_optics_state_src_optics_state_cache_ts
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/optics/types.ts (3), same folder, src/optics/math, src/optics/prescription, src/types
- External consumers: src/optics/compat.ts, src/optics/diagram, src/optics/field, src/optics/first-order, src/optics/trace

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `cache.ts` | Cache helper module | src/optics/types.ts | same folder, src/optics/compat.ts | PreparedStateCache, createPreparedStateCache |
| `prepareState.ts` | Prepare State helper module | src/optics/types.ts (2), same folder, src/optics/math, src/optics/prescription, src/types | src/optics/first-order (2), src/optics/compat.ts, src/optics/diagram, src/optics/field, src/optics/trace | PrepareStateOptions, preparedStateCacheKey, prepareState |

