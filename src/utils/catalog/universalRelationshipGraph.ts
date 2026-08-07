/**
 * Universal patent + corporate relationship graph.
 *
 * Unlike relationshipGraph.ts's selected-party ego graph, this module builds
 * the complete visible catalog network. Patent authorship/assignment edges are
 * joined by the assignee-only corporate history emitted at build time. Shared
 * corporate-family records become hub nodes, while relationship targets that
 * are not catalog assignees become external organization nodes.
 */

import { ASSIGNEES, getAssigneeByName } from "./assigneeCatalog.js";
import { AUTHORS, getAuthorByName } from "./authorCatalog.js";
import { catalogCollator } from "./collation.js";
import { LENS_SUMMARIES, SUMMARY_KEYS } from "./lensSummaries.js";
import { aggregatePatentRecords } from "./patentRecords.js";
import type { GraphPatentNode, PartyRef } from "./relationshipGraph.js";

export type UniversalNodeKind = "author" | "assignee" | "patent" | "organization" | "family";

export interface UniversalPartyNode {
  id: string;
  kind: "author" | "assignee";
  name: string;
  ref: PartyRef;
  patentCount: number;
}

export interface UniversalPatentNode {
  id: string;
  kind: "patent";
  name: string;
  patent: GraphPatentNode;
}

export interface UniversalCorporateNode {
  id: string;
  kind: "organization" | "family";
  name: string;
}

export type UniversalRelationshipNode = UniversalPartyNode | UniversalPatentNode | UniversalCorporateNode;

export type UniversalEdgeKind = "authorship" | "assignment" | "successor" | "acquisition" | "subsidiary" | "family";

export interface UniversalRelationshipEdge {
  id: string;
  from: string;
  to: string;
  kind: UniversalEdgeKind;
  effectiveDate?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
  sourceUrl?: string;
  note?: string;
}

export interface UniversalRelationshipStats {
  authors: number;
  assignees: number;
  patents: number;
  organizations: number;
  families: number;
  patentRelationships: number;
  corporateRelationships: number;
  components: number;
}

export interface UniversalRelationshipGraph {
  nodes: UniversalRelationshipNode[];
  edges: UniversalRelationshipEdge[];
  patents: GraphPatentNode[];
  /** Connected components, largest first; each array contains node ids. */
  components: string[][];
  stats: UniversalRelationshipStats;
}

export interface UniversalRelationshipGraphOptions {
  includeCorporateRelationships?: boolean;
}

const NODE_KIND_ORDER: Record<UniversalNodeKind, number> = {
  family: 0,
  assignee: 1,
  organization: 2,
  author: 3,
  patent: 4,
};

/** Unique, reversible id for a corporate node whose name has no catalog slug. */
function namedCorporateId(kind: "organization" | "family", name: string): string {
  return `${kind}:${encodeURIComponent(name)}`;
}

function partyId(ref: PartyRef): string {
  return `${ref.role}:${ref.slug}`;
}

function patentId(patentNumber: string): string {
  return `patent:${patentNumber}`;
}

function compareNodes(left: UniversalRelationshipNode, right: UniversalRelationshipNode): number {
  return NODE_KIND_ORDER[left.kind] - NODE_KIND_ORDER[right.kind] || catalogCollator.compare(left.name, right.name);
}

/** Compute deterministic connected components over all graph nodes. */
export function universalConnectedComponents(
  nodes: readonly UniversalRelationshipNode[],
  edges: readonly UniversalRelationshipEdge[],
): string[][] {
  const adjacency = new Map(nodes.map((node) => [node.id, new Set<string>()]));
  for (const edge of edges) {
    adjacency.get(edge.from)?.add(edge.to);
    adjacency.get(edge.to)?.add(edge.from);
  }

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const unvisited = new Set(nodes.map((node) => node.id));
  const components: string[][] = [];

  while (unvisited.size > 0) {
    const first = unvisited.values().next().value as string;
    const queue = [first];
    const component: string[] = [];
    unvisited.delete(first);

    for (let index = 0; index < queue.length; index++) {
      const id = queue[index];
      component.push(id);
      for (const neighbor of adjacency.get(id) ?? []) {
        if (!unvisited.delete(neighbor)) continue;
        queue.push(neighbor);
      }
    }

    component.sort((leftId, rightId) => {
      const left = nodeById.get(leftId);
      const right = nodeById.get(rightId);
      if (!left || !right) return leftId.localeCompare(rightId);
      return compareNodes(left, right);
    });
    components.push(component);
  }

  return components.sort(
    (left, right) =>
      right.length - left.length ||
      catalogCollator.compare(nodeById.get(left[0])?.name ?? left[0], nodeById.get(right[0])?.name ?? right[0]),
  );
}

/** Build the complete visible patent-party graph, optionally adding corporate history. */
export function buildUniversalRelationshipGraph(
  options: UniversalRelationshipGraphOptions = {},
): UniversalRelationshipGraph {
  const includeCorporateRelationships = options.includeCorporateRelationships ?? true;
  const nodesById = new Map<string, UniversalRelationshipNode>();
  const edges: UniversalRelationshipEdge[] = [];
  let edgeIndex = 0;

  const addEdge = (edge: Omit<UniversalRelationshipEdge, "id">) => {
    edges.push({ id: `universal-edge-${edgeIndex++}`, ...edge });
  };

  for (const author of AUTHORS) {
    const ref: PartyRef = { role: "author", name: author.name, slug: author.slug };
    const id = partyId(ref);
    nodesById.set(id, { id, kind: "author", name: author.name, ref, patentCount: author.patentCount });
  }

  for (const assignee of ASSIGNEES) {
    const ref: PartyRef = { role: "assignee", name: assignee.name, slug: assignee.slug };
    const id = partyId(ref);
    nodesById.set(id, { id, kind: "assignee", name: assignee.name, ref, patentCount: assignee.patentCount });
  }

  const patents: GraphPatentNode[] = aggregatePatentRecords(
    SUMMARY_KEYS.map((key) => LENS_SUMMARIES[key]),
    { includeFallbackRecords: true },
  ).map((record) => ({
    id: patentId(record.patentNumber),
    patentNumber: record.patentNumber,
    patentYear: record.patentYear,
    authors: record.authors,
    assignees: record.assignees,
    lenses: record.lenses,
  }));

  for (const patent of patents) {
    nodesById.set(patent.id, { id: patent.id, kind: "patent", name: patent.patentNumber, patent });

    for (const name of patent.authors) {
      const author = getAuthorByName(name);
      if (!author) continue;
      addEdge({ from: patent.id, to: `author:${author.slug}`, kind: "authorship" });
    }
    for (const name of patent.assignees) {
      const assignee = getAssigneeByName(name);
      if (!assignee) continue;
      addEdge({ from: patent.id, to: `assignee:${assignee.slug}`, kind: "assignment" });
    }
  }

  const organizationNodeId = (name: string): string => {
    const catalogAssignee = getAssigneeByName(name);
    if (catalogAssignee) return `assignee:${catalogAssignee.slug}`;

    const id = namedCorporateId("organization", name);
    if (!nodesById.has(id)) nodesById.set(id, { id, kind: "organization", name });
    return id;
  };

  const familyNodeId = (name: string): string => {
    const id = namedCorporateId("family", name);
    if (!nodesById.has(id)) nodesById.set(id, { id, kind: "family", name });
    return id;
  };

  if (includeCorporateRelationships) {
    for (const assignee of ASSIGNEES) {
      const from = `assignee:${assignee.slug}`;

      for (const relationship of assignee.successorOf) {
        addEdge({
          from,
          to: organizationNodeId(relationship.organization),
          kind: "successor",
          effectiveDate: relationship.effectiveDate,
          sourceUrl: relationship.sourceUrl,
          note: relationship.note,
        });
      }
      for (const relationship of assignee.acquiredBy) {
        addEdge({
          from,
          to: organizationNodeId(relationship.organization),
          kind: "acquisition",
          effectiveDate: relationship.effectiveDate,
          sourceUrl: relationship.sourceUrl,
          note: relationship.note,
        });
      }
      for (const relationship of assignee.subsidiaryOf) {
        addEdge({
          from,
          to: organizationNodeId(relationship.organization),
          kind: "subsidiary",
          effectiveFrom: relationship.effectiveFrom,
          effectiveTo: relationship.effectiveTo,
          sourceUrl: relationship.sourceUrl,
          note: relationship.note,
        });
      }
      for (const relationship of assignee.corporateFamily) {
        addEdge({
          from,
          to: familyNodeId(relationship.family),
          kind: "family",
          effectiveFrom: relationship.effectiveFrom,
          effectiveTo: relationship.effectiveTo,
          sourceUrl: relationship.sourceUrl,
          note: relationship.note,
        });
      }
    }
  }

  const nodes = [...nodesById.values()].sort(compareNodes);
  const components = universalConnectedComponents(nodes, edges);
  const patentRelationships = edges.filter((edge) => edge.kind === "authorship" || edge.kind === "assignment").length;
  const corporateRelationships = edges.length - patentRelationships;

  return {
    nodes,
    edges,
    patents,
    components,
    stats: {
      authors: AUTHORS.length,
      assignees: ASSIGNEES.length,
      patents: patents.length,
      organizations: nodes.filter((node) => node.kind === "organization").length,
      families: nodes.filter((node) => node.kind === "family").length,
      patentRelationships,
      corporateRelationships,
      components: components.length,
    },
  };
}
