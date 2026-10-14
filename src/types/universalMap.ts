import type { UniversalEdgeKind } from "../utils/catalog/universalRelationshipGraph.js";

export type UniversalMapView = "explore" | "full" | "research";

export interface UniversalMapState {
  view: UniversalMapView;
  nodeId: string | null;
  neighborhoodId: string | null;
  edgeKinds: UniversalEdgeKind[];
  fromId: string | null;
  toId: string | null;
}

export interface UniversalConnectionPath {
  nodeIds: string[];
  edgeIds: string[];
}
