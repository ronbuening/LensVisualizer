# src/components/display/analysis/mtf

This folder src/components/display/analysis/mtf source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_display_analysis_mtf["src/components/display/analysis/mtf"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx["MtfControls.tsx"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_mtfCsv_ts["mtfCsv.ts"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx["MtfFieldSummary.tsx"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx["MtfValueTable.tsx"]
  end
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_controls["src/components/controls"]
  n_external_src_utils_state["src/utils/state"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_pkg_react
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_external_pkg_react
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_src_components_controls
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_mtfCsv_ts --> n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_src_utils_style
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_mtfCsv_ts
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx
```

## Directory Overview

- Direct source files: 4
- Direct subfolders: 0
- Main outbound areas: src/types (7), src/utils/state (3), package:react (2), src/components/display (2), src/components/controls, src/utils/style
- External consumers: src/components/display

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `MtfControls.tsx` | React component module | src/types (2), package:react, src/components/controls, src/utils/state, src/utils/style | src/components/display | default, MtfControls |
| `mtfCsv.ts` | Mtf Csv helper module | src/types | src/components/display | mtfCsv |
| `MtfFieldSummary.tsx` | React component module | src/components/display (2), src/types (2), package:react, src/utils/state | src/components/display | default, MtfFieldSummary |
| `MtfValueTable.tsx` | React component module | src/types (2), src/utils/state | src/components/display | default, MtfValueTable |
