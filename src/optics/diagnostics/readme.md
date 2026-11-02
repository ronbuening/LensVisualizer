# src/optics/diagnostics

This folder bounded diagnostic snapshots keyed by compiled prescription identity.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_diagnostics["src/optics/diagnostics"]
    n_src_optics_diagnostics_src_optics_diagnostics_chiefRay_ts["chiefRay.ts"]
  end
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_src_optics_diagnostics_src_optics_diagnostics_chiefRay_ts --> n_external_src_optics_field
  n_src_optics_diagnostics_src_optics_diagnostics_chiefRay_ts --> n_external_src_optics_types_ts
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/field, src/optics/types.ts
- External consumers: src/optics/field, src/optics/fieldGeometry.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `chiefRay.ts` | Chief Ray helper module | src/optics/field, src/optics/types.ts | src/optics/field, src/optics/fieldGeometry.ts | ChiefRayStatus, ChiefRayDiagnostics, reportChiefRayFallback, getChiefRayDiagnostics, resetChiefRayDiagnostics |
