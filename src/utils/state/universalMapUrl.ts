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

export type UniversalMapView = "network" | "trace" | "affiliations";

export interface UniversalMapExploreState {
  view: UniversalMapView;
  from: string | null;
  to: string | null;
  includeCorporate: boolean;
}

export function universalMapExploreFromHash(hash: string, nodeIds: ReadonlySet<string>): UniversalMapExploreState {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const view = params.get("view");
  const from = params.get("from");
  const to = params.get("to");
  return {
    view: view === "trace" || view === "affiliations" ? view : "network",
    from: from && nodeIds.has(from) ? from : null,
    to: to && nodeIds.has(to) ? to : null,
    includeCorporate: params.get("corporate") !== "0",
  };
}

/** Keep selection and unrelated fragments while sharing the chosen view and trace. */
export function universalMapExploreHash(hash: string, state: UniversalMapExploreState): string {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  if (state.view === "network") params.delete("view");
  else params.set("view", state.view);
  for (const key of ["from", "to"] as const) {
    if (state[key]) params.set(key, state[key]);
    else params.delete(key);
  }
  if (state.includeCorporate) params.delete("corporate");
  else params.set("corporate", "0");
  const value = params.toString();
  return value ? `#${value}` : "";
}
