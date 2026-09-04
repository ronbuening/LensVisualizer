# src/optics/workers

This folder src/optics/workers source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_workers["src/optics/workers"]
    n_src_optics_workers_src_optics_workers_imageQuality_worker_ts["imageQuality.worker.ts"]
    n_src_optics_workers_src_optics_workers_imageQualityJob_ts["imageQualityJob.ts"]
  end
  n_external_src_types["src/types"]
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_buildLens_ts["src/optics/buildLens.ts"]
  n_external_src_optics_state["src/optics/state"]
  n_src_optics_workers_src_optics_workers_imageQualityJob_ts --> |2| n_external_src_types
  n_src_optics_workers_src_optics_workers_imageQualityJob_ts --> n_external_src_optics_analysis
  n_src_optics_workers_src_optics_workers_imageQualityJob_ts --> n_external_src_optics_buildLens_ts
  n_src_optics_workers_src_optics_workers_imageQualityJob_ts --> n_external_src_optics_state
  n_src_optics_workers_src_optics_workers_imageQuality_worker_ts --> n_src_optics_workers_src_optics_workers_imageQualityJob_ts
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/types (2), same folder, src/optics/analysis, src/optics/buildLens.ts, src/optics/state
- External consumers: src/components/display

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `imageQuality.worker.ts` | Image Quality helper module | same folder | none | none |
| `imageQualityJob.ts` | Image Quality Job helper module | src/types (2), src/optics/analysis, src/optics/buildLens.ts, src/optics/state | same folder, src/components/display | ImageQualityJobRequest, ImageQualityJobResponse, computeImageQualityJob, ImageQualityWorkerScope, installImageQualityWorker |
