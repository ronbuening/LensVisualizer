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
