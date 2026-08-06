# src/components/relationshipMap

This folder src/components/relationshipMap source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_relationshipMap["src/components/relationshipMap"]
    n_src_components_relationshipMap_src_components_relationshipMap_layout_ts["layout.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx["PatentDetailCard.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx["RelationshipEntityPicker.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx["RelationshipMap.tsx"]
  end
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_src_components_content["src/components/content"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_hooks["src/components/hooks"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> |4| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |3| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |2| n_external_src_components_content
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |2| n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_layout_ts --> n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_utils_style
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_src_components_relationshipMap_src_components_relationshipMap_layout_ts
```

## Directory Overview

- Direct source files: 4
- Direct subfolders: 0
- Main outbound areas: src/utils/catalog (9), src/types (4), package:react (2), src/components/content (2), same folder, src/components/hooks, src/utils/style
- External consumers: src/pages/RelationshipMapPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `layout.ts` | Layout helper module | src/utils/catalog | same folder | LayoutNode, LayoutEdge, RelationshipLayout, truncateLabel, layoutRelationshipGraph |
| `PatentDetailCard.tsx` | React component module | src/utils/catalog (3), src/components/content (2), src/types (2) | src/pages/RelationshipMapPage.tsx | default, PatentDetailCard |
| `RelationshipEntityPicker.tsx` | React component module | src/utils/catalog (4), package:react, src/types | src/pages/RelationshipMapPage.tsx | default, RelationshipEntityPicker |
| `RelationshipMap.tsx` | React component module | package:react, same folder, src/components/hooks, src/types, src/utils/catalog, +1 more | src/pages/RelationshipMapPage.tsx | default, RelationshipMap |
