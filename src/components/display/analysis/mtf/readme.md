# src/components/display/analysis/mtf

This folder src/components/display/analysis/mtf source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_display_analysis_mtf["src/components/display/analysis/mtf"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx["MtfControls.tsx"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx["MtfFieldSummary.tsx"]
    n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx["MtfValueTable.tsx"]
  end
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_utils_state["src/utils/state"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx --> |2| n_external_src_types
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_pkg_react
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx --> n_external_src_utils_state
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfControls_tsx --> n_external_src_utils_style
  n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfFieldSummary_tsx --> n_src_components_display_analysis_mtf_src_components_display_analysis_mtf_MtfValueTable_tsx
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 0
- Main outbound areas: src/types (6), src/utils/state (3), package:react, src/components/display, src/utils/style
- External consumers: src/components/display

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `MtfControls.tsx` | React component module | src/types (2), package:react, src/utils/state, src/utils/style | src/components/display | default, MtfControls |
| `MtfFieldSummary.tsx` | React component module | src/types (2), src/components/display, src/utils/state | src/components/display | default, MtfFieldSummary |
| `MtfValueTable.tsx` | React component module | src/types (2), src/utils/state | src/components/display | default, MtfValueTable |
