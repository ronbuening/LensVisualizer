# src/optics/state

This folder engine-native prepared optical state and cache helpers.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_state["src/optics/state"]
    n_src_optics_state_src_optics_state_layout_ts["layout.ts"]
    n_src_optics_state_src_optics_state_preparedGeometry_ts["preparedGeometry.ts"]
    n_src_optics_state_src_optics_state_stationTables_ts["stationTables.ts"]
  end
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_optics_apertureStop_ts["src/optics/apertureStop.ts"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_types["src/types"]
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> |2| n_external_src_optics_types_ts
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> n_external_src_optics_apertureStop_ts
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> n_external_src_optics_math
  n_src_optics_state_src_optics_state_stationTables_ts --> n_external_src_optics_math
  n_src_optics_state_src_optics_state_layout_ts --> n_external_src_optics_prescription
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> n_external_src_optics_trace
  n_src_optics_state_src_optics_state_layout_ts --> n_external_src_types
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> n_external_src_types
  n_src_optics_state_src_optics_state_stationTables_ts --> n_external_src_types
  n_src_optics_state_src_optics_state_preparedGeometry_ts --> n_src_optics_state_src_optics_state_layout_ts
  n_src_optics_state_src_optics_state_layout_ts --> n_src_optics_state_src_optics_state_stationTables_ts
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 0
- Main outbound areas: src/types (3), same folder (2), src/optics/math (2), src/optics/types.ts (2), src/optics/apertureStop.ts, src/optics/prescription, src/optics/trace
- External consumers: src/optics/analysis, src/optics/apertureStop.ts, src/optics/compat.ts, src/optics/diagram, src/optics/field, src/optics/first-order, src/optics/focusDistance.ts, src/optics/groupMovement.ts, +7 more

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `layout.ts` | Layout helper module | same folder, src/optics/prescription, src/types | src/optics/prescription (2), same folder, src/optics/compat.ts, src/optics/first-order, src/optics/layout.ts | resolveControlledThickness, buildStateSurfaces, sumSurfaceThicknesses, buildZPositions, layoutFromPrepared, thick, doLayout, stateSurfaces |
| `preparedGeometry.ts` | Prepared Geometry helper module | src/optics/types.ts (2), same folder, src/optics/apertureStop.ts, src/optics/math, src/optics/trace, +1 more | src/optics/first-order (2), src/optics/analysis, src/optics/compat.ts, src/optics/diagram, src/optics/field, +3 more | prepareState, prepareStateUncached, stateWithZ |
| `stationTables.ts` | Station Tables helper module | src/optics/math, src/types | src/optics/first-order (3), src/optics/prescription (2), same folder, src/optics/apertureStop.ts, src/optics/compat.ts, +7 more | DEFAULT_FOCUS_POSITIONS, clampStationControl, stationSegment, interpolateStationTable, resolveVariableThickness, resolveAberrationThickness, zoomIndexToT, eflAtZoom, +11 more |
