/** Fragment state belongs to the universal map, independently of lens-view URL state. */
export function universalMapNodeFromHash(hash: string, nodeIds: ReadonlySet<string>): string | null {
  const nodeId = new URLSearchParams(hash.replace(/^#/, "")).get("node");
  return nodeId !== null && nodeIds.has(nodeId) ? nodeId : null;
}

/** Serialize the complete graph id once; corporate ids may already contain percent escapes. */
export function universalMapHash(hash: string, nodeId: string | null): string {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  if (nodeId === null) params.delete("node");
  else params.set("node", nodeId);
  const value = params.toString();
  return value ? `#${value}` : "";
}
import type { UniversalMapState } from "../../types/universalMap.js";
import { UNIVERSAL_EDGE_KINDS } from "../catalog/universalRelationshipQueries.js";

export function universalMapStateFromHash(
  hash: string,
  nodeIds: ReadonlySet<string>,
  neighborhoodIds: ReadonlySet<string>,
): UniversalMapState {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const node = (key: string) => {
    const value = params.get(key);
    return value && nodeIds.has(value) ? value : null;
  };
  const view = params.get("view");
  const neighborhood = params.get("neighborhood");
  const rawKinds = params.get("relations");
  const edgeKinds =
    rawKinds === null
      ? [...UNIVERSAL_EDGE_KINDS]
      : UNIVERSAL_EDGE_KINDS.filter((kind) => rawKinds.split(",").includes(kind));
  return {
    view: view === "explore" || view === "research" ? view : "full",
    nodeId: node("node"),
    neighborhoodId: neighborhood && neighborhoodIds.has(neighborhood) ? neighborhood : null,
    edgeKinds: rawKinds && edgeKinds.length === 0 && rawKinds !== "none" ? [...UNIVERSAL_EDGE_KINDS] : edgeKinds,
    fromId: node("from"),
    toId: node("to"),
  };
}

export function universalMapStateHash(hash: string, patch: Partial<UniversalMapState>): string {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const fields = { view: "view", nodeId: "node", neighborhoodId: "neighborhood", fromId: "from", toId: "to" } as const;
  for (const [field, key] of Object.entries(fields)) {
    if (!(field in patch)) continue;
    const value = patch[field as keyof typeof fields];
    if (!value || (field === "view" && value === "full")) params.delete(key);
    else params.set(key, value);
  }
  if (patch.edgeKinds) {
    const kinds = UNIVERSAL_EDGE_KINDS.filter((kind) => patch.edgeKinds!.includes(kind));
    if (kinds.length === UNIVERSAL_EDGE_KINDS.length) params.delete("relations");
    else params.set("relations", kinds.join(",") || "none");
  }
  const value = params.toString();
  return value ? `#${value}` : "";
}
