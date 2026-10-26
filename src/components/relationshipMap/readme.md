# src/components/relationshipMap

This folder src/components/relationshipMap source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_relationshipMap["src/components/relationshipMap"]
    n_src_components_relationshipMap_React_components["React components (15)"]
    n_src_components_relationshipMap_TypeScript_modules["TypeScript modules (10)"]
  end
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_pkg_react["pkg:react"]
  n_external_src_types["src/types"]
  n_external_src_utils_style["src/utils/style"]
  n_external_src_components_hooks["src/components/hooks"]
  n_external_src_utils_text_ts["src/utils/text.ts"]
  n_external_src_components_content["src/components/content"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_src_utils_svgCoordinates_ts["src/utils/svgCoordinates.ts"]
  n_external_src_components_controls["src/components/controls"]
  n_external_src_components_display["src/components/display"]
  n_external_src_components_layout["src/components/layout"]
  n_external_src_utils_state["src/utils/state"]
  n_src_components_relationshipMap_React_components --> |26| n_external_src_utils_catalog
  n_src_components_relationshipMap_React_components --> |18| n_src_components_relationshipMap_TypeScript_modules
  n_src_components_relationshipMap_React_components --> |15| n_external_pkg_react
  n_src_components_relationshipMap_React_components --> |13| n_external_src_types
  n_src_components_relationshipMap_TypeScript_modules --> |12| n_external_src_utils_catalog
  n_src_components_relationshipMap_React_components --> |11| n_external_src_utils_style
  n_src_components_relationshipMap_React_components --> |9| n_external_src_components_hooks
  n_src_components_relationshipMap_React_components --> |9| n_external_src_utils_text_ts
  n_src_components_relationshipMap_React_components --> |4| n_external_src_components_content
  n_src_components_relationshipMap_TypeScript_modules --> |2| n_external_pkg_react
  n_src_components_relationshipMap_React_components --> |2| n_external_pkg_react_router
  n_src_components_relationshipMap_TypeScript_modules --> |2| n_external_src_types
  n_src_components_relationshipMap_React_components --> |2| n_external_src_utils_svgCoordinates_ts
  n_src_components_relationshipMap_TypeScript_modules --> n_external_pkg_react_router
  n_src_components_relationshipMap_React_components --> n_external_src_components_controls
  n_src_components_relationshipMap_React_components --> n_external_src_components_display
  n_src_components_relationshipMap_React_components --> n_external_src_components_layout
  n_src_components_relationshipMap_React_components --> n_external_src_utils_state
  n_src_components_relationshipMap_TypeScript_modules --> n_external_src_utils_state
  n_src_components_relationshipMap_TypeScript_modules --> n_external_src_utils_svgCoordinates_ts
```

## Directory Overview

- Direct source files: 25
- Direct subfolders: 0
- Main outbound areas: src/utils/catalog (38), same folder (32), package:react (17), src/types (15), src/utils/style (11), src/components/hooks (9), src/utils/text.ts (9), src/components/content (4), +6 more
- External consumers: src/pages/RelationshipMapPage.tsx, src/pages/UniversalRelationshipMapPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `coInventorLayout.ts` | Co Inventor Layout helper module | src/utils/catalog | same folder | coInventorLayout |
| `companyChordLayout.ts` | Company Chord Layout helper module | none | same folder | CompanyChordInput, companyChordLayout |
| `CompanyRelationshipViews.tsx` | React component module | same folder (4), src/utils/catalog (2), package:react | src/pages/UniversalRelationshipMapPage.tsx | CompanyRelationshipView, default, CompanyRelationshipViews |
| `constellationAffinity.ts` | Constellation Affinity helper module | src/utils/catalog (3) | same folder | ConstellationClusterCandidate, ConstellationAffinity, ConstellationAffinityMap, buildConstellationAffinities, constellationAffinityBetween, compareConstellationClusterPriority, orderConstellationOrbit |
| `inventorAffiliationLayout.ts` | Inventor Affiliation Layout helper module | src/utils/catalog | same folder | AffiliationPosition, layoutInventorAffiliations |
| `InventorAffiliationMap.tsx` | React component module | same folder (3), src/components/hooks (2), src/utils/catalog (2), package:react, src/types, +2 more | src/pages/UniversalRelationshipMapPage.tsx | default, InventorAffiliationMap |
| `InventorRelationshipViews.tsx` | React component module | same folder (5), package:react, src/components/display, src/utils/catalog, src/utils/state, +1 more | src/pages/RelationshipMapPage.tsx | default, InventorRelationshipViews |
| `layout.ts` | Layout helper module | src/utils/catalog | same folder (7) | LayoutNode, LayoutEdge, RelationshipLayout, truncateLabel, layoutRelationshipGraph |
| `PatentDetailCard.tsx` | React component module | src/components/content (3), src/utils/catalog (3), src/types (2), package:react, src/utils/style | src/pages/RelationshipMapPage.tsx, src/pages/UniversalRelationshipMapPage.tsx | default, PatentDetailCard |
| `RelationshipEntityPicker.tsx` | React component module | src/utils/catalog (4), package:react, same folder, src/components/hooks, src/types, +2 more | src/pages/RelationshipMapPage.tsx | default, RelationshipEntityPicker |
| `RelationshipEvidenceLanes.tsx` | React component module | same folder (3), package:react | same folder, src/pages/UniversalRelationshipMapPage.tsx | default, RelationshipEvidenceLanes |
| `RelationshipMap.tsx` | React component module | package:react, same folder, src/components/hooks, src/types, src/utils/catalog, +2 more | src/pages/RelationshipMapPage.tsx | default, RelationshipMap |
| `RelationshipViewShared.tsx` | React component module | src/utils/catalog (2), package:react, package:react-router, src/components/controls, src/components/hooks, +2 more | same folder (7), src/pages/RelationshipMapPage.tsx, src/pages/UniversalRelationshipMapPage.tsx | RelationshipViewProps, RetainedMapView, controlRow, viewButton, CompactSection, ViewChoices, ViewPanel, ViewSelect, +7 more |
| `roleChip.ts` | Role Chip module with default export | src/types (2), package:react | same folder, src/pages/RelationshipMapPage.tsx | default, roleChip |
| `UniversalConnectionTrace.tsx` | React component module | same folder (2), src/utils/catalog (2), package:react, src/types, src/utils/style, +1 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalConnectionTrace |
| `UniversalDetailSheet.tsx` | React component module | package:react, same folder, src/types, src/utils/catalog, src/utils/text.ts | src/pages/UniversalRelationshipMapPage.tsx | DETAIL_SHEET_RESERVED_HEIGHT, universalNodeSummary, default, UniversalDetailSheet |
| `UniversalEntityDetailCard.tsx` | React component module | src/utils/catalog (3), package:react, package:react-router, src/components/content, src/types, +2 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalEntityDetailCard |
| `universalLayout.ts` | Universal Layout helper module | same folder (2), src/utils/catalog (2) | same folder (5) | UniversalLayoutNode, UniversalLayoutEdge, UniversalLayoutCluster, UniversalLayoutComponent, UniversalRelationshipLayout, universalNodeRadius, layoutUniversalRelationshipGraph |
| `universalMapGeometry.ts` | Universal Map Geometry helper module | same folder, src/utils/catalog, src/utils/svgCoordinates.ts | same folder | boundsIntersect, universalEdgeCurve, placeUniversalLabels, directionalUniversalNode |
| `UniversalMapOverview.tsx` | React component module | package:react, same folder, src/components/hooks, src/types, src/utils/style, +1 more | same folder | default, UniversalMapOverview |
| `UniversalMapSearch.tsx` | React component module | src/utils/catalog (2), package:react, src/components/layout, src/types, src/utils/style | same folder, src/pages/UniversalRelationshipMapPage.tsx | default, UniversalMapSearch |
| `universalNeighborhoods.ts` | Universal Neighborhoods helper module | src/utils/catalog (3), same folder | same folder | UniversalBridgeCategory, UNIVERSAL_BRIDGE_CATEGORIES, UniversalNeighborhood, UniversalNeighborhoodBridge, UniversalNeighborhoodModel, UniversalNeighborLink, UniversalBridgeGroup, universalBridgeCategory, +5 more |
| `UniversalNeighborhoodSummary.tsx` | React component module | same folder (3), package:react, src/types, src/utils/catalog, src/utils/style, +1 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalNeighborhoodSummary |
| `UniversalRelationshipMap.tsx` | React component module | same folder (4), src/components/hooks (3), src/utils/catalog (2), package:react, src/types, +3 more | src/pages/UniversalRelationshipMapPage.tsx | default, UniversalRelationshipMap |
| `useRelationshipViewParams.ts` | React hook module | package:react, package:react-router, src/utils/state | same folder (3), src/pages/RelationshipMapPage.tsx | useRelationshipViewParams |
