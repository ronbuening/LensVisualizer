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
  n_external_src_optics_layout_ts["src/optics/layout.ts"]
  n_external_src_optics_prescription["src/optics/prescription"]
  n_external_src_optics_trace["src/optics/trace"]
  n_external_src_types["src/types"]
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> |7| n_external_src_optics_analysis
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> |2| n_external_src_optics_state
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_optics_layout_ts
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_optics_prescription
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_optics_trace
  n_src_optics_analysis_bokeh_src_optics_analysis_bokeh_bokeh_ts --> n_external_src_types
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: src/optics/analysis (7), src/optics/state (2), src/optics/layout.ts, src/optics/prescription, src/optics/trace, src/types
- External consumers: src/optics/aberrationAnalysis.ts, src/optics/analysis, src/optics/analysis.ts, src/optics/compat.ts

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `bokeh.ts` | Bokeh helper module | src/optics/analysis (7), src/optics/state (2), src/optics/layout.ts, src/optics/prescription, src/optics/trace, +1 more | src/optics/aberrationAnalysis.ts, src/optics/analysis, src/optics/analysis.ts, src/optics/compat.ts | computeBokehFieldFootprint, buildBokehDensityGrid, describeBokehDefocusSide, computeBokehPreview, computeBokehPreviewPair |
