# src/components/display/analysis/charts

This folder shared SVG chart frame and math helpers for analysis plots.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_display_analysis_charts["src/components/display/analysis/charts"]
    n_src_components_display_analysis_charts_src_components_display_analysis_charts_chartMath_ts["chartMath.ts"]
    n_src_components_display_analysis_charts_src_components_display_analysis_charts_SvgChartFrame_tsx["SvgChartFrame.tsx"]
  end
  n_external_pkg_react["pkg:react"]
  n_external_src_types["src/types"]
  n_src_components_display_analysis_charts_src_components_display_analysis_charts_SvgChartFrame_tsx --> n_external_pkg_react
  n_src_components_display_analysis_charts_src_components_display_analysis_charts_SvgChartFrame_tsx --> n_external_src_types
  n_src_components_display_analysis_charts_src_components_display_analysis_charts_SvgChartFrame_tsx --> n_src_components_display_analysis_charts_src_components_display_analysis_charts_chartMath_ts
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: package:react, src/components/display, src/types
- External consumers: src/components/display

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `chartMath.ts` | Chart Math helper module | none | src/components/display (13) | ChartMargin, PlotArea, DEFAULT_ANALYSIS_CHART_MARGIN, createPlotArea, linearScale, symmetricDomain, niceTicks, angleTicks, +16 more |
| `SvgChartFrame.tsx` | React component module | package:react, src/components/display, src/types | src/components/display (6) | SvgChartFrame, ChartLegend |

