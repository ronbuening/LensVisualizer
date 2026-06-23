# src/components/errors

This folder page and panel error boundaries plus shared error display UI.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_errors["src/components/errors"]
    n_src_components_errors_src_components_errors_ErrorBoundary_tsx["ErrorBoundary.tsx"]
    n_src_components_errors_src_components_errors_PanelErrorBoundary_tsx["PanelErrorBoundary.tsx"]
  end
  n_external_pkg_react["pkg:react"]
  n_external_src_utils_errorReporting_ts["src/utils/errorReporting.ts"]
  n_src_components_errors_src_components_errors_ErrorBoundary_tsx --> |2| n_external_pkg_react
  n_src_components_errors_src_components_errors_PanelErrorBoundary_tsx --> |2| n_external_pkg_react
  n_src_components_errors_src_components_errors_ErrorBoundary_tsx --> n_external_src_utils_errorReporting_ts
  n_src_components_errors_src_components_errors_PanelErrorBoundary_tsx --> n_src_components_errors_src_components_errors_ErrorBoundary_tsx
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: package:react (4), same folder, src/utils/errorReporting.ts
- External consumers: src/comparison, src/components/layout, src/entry-server.tsx, src/main.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ErrorBoundary.tsx` | React component module | package:react (2), src/utils/errorReporting.ts | same folder, src/comparison, src/components/layout, src/entry-server.tsx, src/main.tsx | ErrorDisplay, default, ErrorBoundary |
| `PanelErrorBoundary.tsx` | React component module | package:react (2), same folder | src/components/layout | default, PanelErrorBoundary |

