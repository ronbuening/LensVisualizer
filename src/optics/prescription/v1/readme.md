# src/optics/prescription/v1

This folder converter-only V1 ingest, printers, and source-path mapping.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_prescription_v1["src/optics/prescription/v1"]
    n_src_optics_prescription_v1_src_optics_prescription_v1_ingest_ts["ingest.ts"]
    n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts["ingestV1.ts"]
    n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts["toLensData.ts"]
    n_src_optics_prescription_v1_src_optics_prescription_v1_v1SourceMap_ts["v1SourceMap.ts"]
  end
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_external_src_optics_geometry["src/optics/geometry"]
  n_external_src_optics_state["src/optics/state"]
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts --> |7| n_external_src_optics_prescription
  n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts --> |5| n_external_src_optics_prescription
  n_src_optics_prescription_v1_src_optics_prescription_v1_v1SourceMap_ts --> |4| n_external_src_optics_prescription
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingest_ts --> |3| n_external_src_optics_prescription
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingest_ts --> |3| n_external_src_types
  n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts --> |3| n_external_src_types
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts --> |2| n_external_src_types
  n_src_optics_prescription_v1_src_optics_prescription_v1_v1SourceMap_ts --> |2| n_external_src_types
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts --> n_external_src_optics_geometry
  n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts --> n_external_src_optics_state
  n_src_optics_prescription_v1_src_optics_prescription_v1_ingest_ts --> n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts
  n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts --> n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts
  n_src_optics_prescription_v1_src_optics_prescription_v1_v1SourceMap_ts --> n_src_optics_prescription_v1_src_optics_prescription_v1_ingestV1_ts
  n_src_optics_prescription_v1_src_optics_prescription_v1_v1SourceMap_ts --> n_src_optics_prescription_v1_src_optics_prescription_v1_toLensData_ts
```

## Directory Overview

- Direct source files: 4
- Direct subfolders: 0
- Main outbound areas: src/optics/prescription (23), src/types (10), src/optics/geometry, src/optics/state
- External consumers: src/optics/lensDataConversion.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ingest.ts` | Ingest helper module | src/optics/prescription (4), src/types (3) | src/optics/lensDataConversion.ts | ingestLens, ingestTeleconverter |
| `ingestV1.ts` | Ingest V1 helper module | src/optics/prescription (7), src/types (2), src/optics/geometry | src/optics/prescription (3), src/optics/lensDataConversion.ts | V1_FLAT_RADIUS, ingestLensV1, ingestTeleconverterV1 |
| `toLensData.ts` | To Lens Data helper module | src/optics/prescription (6), src/types (3), src/optics/state | src/optics/lensDataConversion.ts, src/optics/prescription | V1_PRINT_ORDER, V1_GROUP_STARTS, V1_ROW_LISTS, V1FileOptions, toLensData, toLensDataInput, toTeleconverterData |
| `v1SourceMap.ts` | V1 Source Map helper module | src/optics/prescription (6), src/types (2) | src/optics/lensDataConversion.ts | V1DroppedValue, V1SourceMap, v1StopRadius, v1SourceMap |
