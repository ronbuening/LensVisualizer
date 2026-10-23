# src/components/relationshipMap

This folder src/components/relationshipMap source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_relationshipMap["src/components/relationshipMap"]
    n_src_components_relationshipMap_src_components_relationshipMap_constellationAffinity_ts["constellationAffinity.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_inventorAffiliationLayout_ts["inventorAffiliationLayout.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_InventorAffiliationMap_tsx["InventorAffiliationMap.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_layout_ts["layout.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx["PatentDetailCard.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx["RelationshipEntityPicker.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx["RelationshipMap.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_roleChip_ts["roleChip.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_UniversalConnectionTrace_tsx["UniversalConnectionTrace.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx["UniversalEntityDetailCard.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_universalLayout_ts["universalLayout.ts"]
    n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapOverview_tsx["UniversalMapOverview.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapSearch_tsx["UniversalMapSearch.tsx"]
    n_src_components_relationshipMap_src_components_relationshipMap_UniversalRelationshipMap_tsx["UniversalRelationshipMap.tsx"]
  end
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_src_components_content["src/components/content"]
  n_external_src_components_hooks["src/components/hooks"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_src_components_layout["src/components/layout"]
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> |4| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |3| n_external_src_components_content
  n_src_components_relationshipMap_src_components_relationshipMap_constellationAffinity_ts --> |3| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |3| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx --> |3| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_InventorAffiliationMap_tsx --> |2| n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalRelationshipMap_tsx --> |2| n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> |2| n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_roleChip_ts --> |2| n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_InventorAffiliationMap_tsx --> |2| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalConnectionTrace_tsx --> |2| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_universalLayout_ts --> |2| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapSearch_tsx --> |2| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalRelationshipMap_tsx --> |2| n_external_src_utils_catalog
  n_src_components_relationshipMap_src_components_relationshipMap_InventorAffiliationMap_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_PatentDetailCard_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_roleChip_ts --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalConnectionTrace_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapOverview_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapSearch_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalRelationshipMap_tsx --> n_external_pkg_react
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx --> n_external_pkg_react_router
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx --> n_external_src_components_content
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapOverview_tsx --> n_external_src_components_hooks
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapSearch_tsx --> n_external_src_components_layout
  n_src_components_relationshipMap_src_components_relationshipMap_InventorAffiliationMap_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipEntityPicker_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_RelationshipMap_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalConnectionTrace_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalEntityDetailCard_tsx --> n_external_src_types
  n_src_components_relationshipMap_src_components_relationshipMap_UniversalMapOverview_tsx --> n_external_src_types
  n_src_components_relationshipMap_truncated["additional relationships omitted"]
```

## Directory Overview

- Direct source files: 14
- Direct subfolders: 0
- Main outbound areas: src/utils/catalog (26), src/types (12), same folder (11), package:react (10), src/utils/style (9), src/components/hooks (7), src/utils/text.ts (6), src/components/content (4), +3 more
- External consumers: src/pages/RelationshipMapPage.tsx, src/pages/UniversalRelationshipMapPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `constellationAffinity.ts` | Constellation Affinity helper module | src/utils/catalog (3) | same folder | ConstellationClusterCandidate, ConstellationAffinity, ConstellationAffinityMap, buildConstellationAffinities, constellationAffinityBetween, compareConstellationClusterPriority, orderConstellationOrbit |
| `inventorAffiliationLayout.ts` | Inventor Affiliation Layout helper module | src/utils/catalog | same folder | AffiliationPosition, layoutInventorAffiliations |
| `InventorAffiliationMap.tsx` | React component module | same folder (2), src/components/hooks (2), src/utils/catalog (2), package:react, src/types, +2 more | src/pages/UniversalRelationshipMapPage.tsx | default, InventorAffiliationMap |
| `layout.ts` | Layout helper module | src/utils/catalog | same folder (4) | LayoutNode, LayoutEdge, RelationshipLayout, truncateLabel, layoutRelationshipGraph |
| `PatentDetailCard.tsx` | React component module | src/components/content (3), src/utils/catalog (3), src/types (2), package:react, src/utils/style | src/pages/RelationshipMapPage.tsx, src/pages/UniversalRelationshipMapPage.tsx | default, PatentDetailCard |
| `RelationshipEntityPicker.tsx` | React component module | src/utils/catalog (4), package:react, same folder, src/components/hooks, src/types, +2 more | src/pages/RelationshipMapPage.tsx | default, RelationshipEntityPicker |
| `RelationshipMap.tsx` | React component module | package:react, same folder, src/components/hooks, src/types, src/utils/catalog, +2 more | src/pages/RelationshipMapPage.tsx | default, RelationshipMap |
| `roleChip.ts` | Role Chip module with default export | src/types (2), package:react | same folder, src/pages/RelationshipMapPage.tsx | default, roleChip |
| `UniversalConnectionTrace.tsx` | React component module | same folder (2), src/utils/catalog (2), package:react, src/types, src/utils/style, +1 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalConnectionTrace |
| `UniversalEntityDetailCard.tsx` | React component module | src/utils/catalog (3), package:react, package:react-router, src/components/content, src/types, +2 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalEntityDetailCard |
| `universalLayout.ts` | Universal Layout helper module | same folder (2), src/utils/catalog (2) | same folder (2) | UniversalLayoutNode, UniversalLayoutEdge, UniversalLayoutCluster, UniversalLayoutComponent, UniversalRelationshipLayout, universalNodeRadius, layoutUniversalRelationshipGraph |
| `UniversalMapOverview.tsx` | React component module | package:react, same folder, src/components/hooks, src/types, src/utils/style, +1 more | same folder | default, UniversalMapOverview |
| `UniversalMapSearch.tsx` | React component module | src/utils/catalog (2), package:react, src/components/layout, src/types, src/utils/style | same folder, src/pages/UniversalRelationshipMapPage.tsx | default, UniversalMapSearch |
| `UniversalRelationshipMap.tsx` | React component module | same folder (2), src/components/hooks (2), src/utils/catalog (2), package:react, src/types, +2 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalRelationshipMap |
