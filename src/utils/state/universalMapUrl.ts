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

export const UNIVERSAL_VIEWS = [
  ["network", "Network"],
  ["neighborhoods", "Neighborhoods"],
  ["trace", "Trace connections"],
  ["affiliations", "Inventor affiliations"],
  ["bridge", "Company bridge"],
  ["matrix", "Affiliation matrix"],
  ["chords", "Company chords"],
  ["evidence", "Evidence lanes"],
] as const;
export type UniversalMapView = (typeof UNIVERSAL_VIEWS)[number][0];

export interface UniversalMapExploreState {
  view: UniversalMapView;
  from: string | null;
  to: string | null;
  includeCorporate: boolean;
}

/** True when the fragment names a known view or a selected node; such links open as shared, never a device default. */
export function universalMapHashPinsView(hash: string, nodeIds: ReadonlySet<string>): boolean {
  const view = new URLSearchParams(hash.replace(/^#/, "")).get("view");
  return UNIVERSAL_VIEWS.some(([id]) => id === view) || universalMapNodeFromHash(hash, nodeIds) !== null;
}

/** `defaultView` is the view a fragment without `view` opens: the network, or Neighborhoods on a bare phone visit. */
export function universalMapExploreFromHash(
  hash: string,
  nodeIds: ReadonlySet<string>,
  defaultView: UniversalMapView = "network",
): UniversalMapExploreState {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const view = params.get("view");
  const from = params.get("from");
  const to = params.get("to");
  return {
    view: UNIVERSAL_VIEWS.find(([id]) => id === view)?.[0] ?? defaultView,
    from: from && nodeIds.has(from) ? from : null,
    to: to && nodeIds.has(to) ? to : null,
    includeCorporate: params.get("corporate") !== "0",
  };
}

/**
 * Keep selection and unrelated fragments while sharing the chosen view and trace. The network stays implicit only
 * while it is also the page's default, so a phone that opened on Neighborhoods records a later switch to it.
 */
export function universalMapExploreHash(
  hash: string,
  state: UniversalMapExploreState,
  defaultView: UniversalMapView = "network",
): string {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  if (state.view === "network" && defaultView === "network") params.delete("view");
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
