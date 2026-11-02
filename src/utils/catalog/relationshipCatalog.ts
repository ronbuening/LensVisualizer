import { buildUniversalRelationshipGraph } from "./universalRelationshipGraph.js";
import { buildRelationshipInsights } from "./relationshipInsights.js";

let catalog: ReturnType<typeof createCatalog> | undefined;
function createCatalog() {
  const graph = buildUniversalRelationshipGraph();
  return { graph, insights: buildRelationshipInsights(graph) };
}

/** Share one analysis across routes; the focused page's ordinary map needs none of it. */
export function getRelationshipCatalog() {
  return (catalog ??= createCatalog());
}
