# src/optics/analysis/bokeh

This folder request-based bokeh previews, field footprints and density reductions.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_analysis_bokeh["src/optics/analysis/bokeh"]
    n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts["bokeh.ts"]
  end
  n_external_src_optics_analysis["src/optics/analysis"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> |10| n_external_src_optics_analysis
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> |3| n_external_src_optics_state
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> |2| n_external_src_optics_trace
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_optics_field
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (10), src/optics/state (3), src/optics/trace (2), src/optics/field, src/optics/prescription, src/types
- External consumers: src/optics/analysis, src/optics/analysis.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `bokeh.ts` | Bokeh helper module | src/optics/analysis (10), src/optics/state (3), src/optics/trace (2), src/optics/field, src/optics/prescription, +1 more | src/optics/analysis, src/optics/analysis.ts | computeBokehFieldFootprint, buildBokehDensityGrid, describeBokehDefocusSide, computeBokehPreview, computeBokehPreviewPair |
