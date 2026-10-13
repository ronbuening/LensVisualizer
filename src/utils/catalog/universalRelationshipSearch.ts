import type { UniversalRelationshipNode } from "./universalRelationshipGraph.js";
import { normalizeSearchText } from "./searchCatalog.js";
import { catalogCollator } from "./collation.js";

/** Index only graph nodes: every suggestion must be selectable in this map. */
export function buildUniversalSearchIndex(nodes: readonly UniversalRelationshipNode[]) {
  return nodes.map((node) => {
    const normalized = normalizeSearchText(node.name);
    return { node, normalized, compactPatent: node.kind === "patent" ? normalized.replaceAll(" ", "") : "" };
  });
}

export function searchUniversalNodes(index: ReturnType<typeof buildUniversalSearchIndex>, query: string) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  const words = normalized.split(" ");
  const compact = normalized.replaceAll(" ", "");
  return index
    .filter((entry) => words.every((word) => entry.normalized.includes(word)) || entry.compactPatent.includes(compact))
    .map((entry) => ({
      ...entry,
      score:
        entry.normalized === normalized || entry.compactPatent === compact
          ? 0
          : entry.normalized.startsWith(normalized) || entry.compactPatent.startsWith(compact)
            ? 1
            : 2,
    }))
    .sort(
      (a, b) =>
        a.score - b.score || catalogCollator.compare(a.node.name, b.node.name) || a.node.id.localeCompare(b.node.id),
    )
    .map((entry) => entry.node);
}
