/**
 * Relationship graph assembly — pure data layer for the patent map.
 *
 * Builds either a two-ring party view (party → patents → other parties) or a
 * one-ring patent view (patent → all credited parties). Patent records come
 * from the same lightweight catalog used by the patent index.
 */

import { getAuthorByName, getAuthorBySlug, patentsForParty } from "./authorCatalog.js";
import { getAssigneeByName, getAssigneeBySlug } from "./assigneeCatalog.js";
import { getPatentByNumber } from "./patentCatalog.js";
import type { PatentRecord } from "./patentCatalog.js";

export type PartyRole = "author" | "assignee";

export interface PartyRef {
  role: PartyRole;
  name: string;
  slug: string;
}

export interface PatentRef {
  role: "patent";
  patentNumber: string;
}

export type RelationshipFocus = PartyRef | PatentRef;

export interface GraphPatentNode {
  id: string;
  patentNumber: string;
  patentYear?: number;
  authors: string[];
  assignees: string[];
  lenses: { key: string; name: string; specs?: string[] }[];
}

export interface GraphPartyNode {
  id: string;
  ref: PartyRef;
  patentIds: string[];
  hasPage: boolean;
}

interface RelationshipGraphBase {
  patents: GraphPatentNode[];
  parties: GraphPartyNode[];
  edges: { from: string; to: string }[];
}

export type RelationshipGraph = RelationshipGraphBase &
  ({ centerKind: "party"; center: GraphPartyNode } | { centerKind: "patent"; center: GraphPatentNode });

/** Namespaced node id for a party (`author:<slug>` / `assignee:<slug>`). */
function partyId(role: PartyRole, slug: string): string {
  return `${role}:${slug}`;
}

/** Namespaced node id for a patent (`patent:<patentNumber>`). */
function patentId(patentNumber: string): string {
  return `patent:${patentNumber}`;
}

/** Convert a shared patent record into the graph's namespaced node shape. */
function graphPatent(record: PatentRecord): GraphPatentNode {
  return {
    id: patentId(record.patentNumber),
    patentNumber: record.patentNumber,
    patentYear: record.patentYear,
    authors: record.authors,
    assignees: record.assignees,
    lenses: record.lenses,
  };
}

/** Look a party name up in the index matching its role, if present. */
function lookupPartyRef(name: string, role: PartyRole): PartyRef | undefined {
  const meta = role === "author" ? getAuthorByName(name) : getAssigneeByName(name);
  return meta ? { role, name, slug: meta.slug } : undefined;
}

/** Build the credited-party nodes for one or more patent nodes. */
function partiesForPatents(patents: GraphPatentNode[], excluded?: PartyRef): GraphPartyNode[] {
  const partiesById = new Map<string, GraphPartyNode>();

  for (const patent of patents) {
    const named = [
      ...patent.authors.map((name) => lookupPartyRef(name, "author")),
      ...patent.assignees.map((name) => lookupPartyRef(name, "assignee")),
    ].filter((ref): ref is PartyRef => ref !== undefined);

    for (const ref of named) {
      if (excluded && ref.role === excluded.role && ref.name === excluded.name) continue;
      const id = partyId(ref.role, ref.slug);
      const node = partiesById.get(id) ?? {
        id,
        ref,
        patentIds: [],
        hasPage: ref.role === "author",
      };
      if (!node.patentIds.includes(patent.id)) node.patentIds.push(patent.id);
      partiesById.set(id, node);
    }
  }

  return [...partiesById.values()]
    .map((node) => ({ ...node, patentIds: [...node.patentIds].sort() }))
    .sort((a, b) => a.ref.name.localeCompare(b.ref.name));
}

/** Parse a `focus` query value into a known party or patent. */
export function resolveFocusParam(raw: string | null): RelationshipFocus | undefined {
  if (!raw) return undefined;
  const colon = raw.indexOf(":");
  if (colon <= 0) return undefined;
  const role = raw.slice(0, colon);
  const value = raw.slice(colon + 1);
  if (!value) return undefined;

  if (role === "author") {
    const meta = getAuthorBySlug(value);
    return meta ? { role: "author", name: meta.name, slug: meta.slug } : undefined;
  }
  if (role === "assignee") {
    const meta = getAssigneeBySlug(value);
    return meta ? { role: "assignee", name: meta.name, slug: meta.slug } : undefined;
  }
  if (role === "patent") {
    const patent = getPatentByNumber(value);
    return patent ? { role: "patent", patentNumber: patent.patentNumber } : undefined;
  }
  return undefined;
}

/** Return the relationship-map URL for a party or patent focus. */
export function relationshipPathForFocus(focus: RelationshipFocus): string {
  const value = focus.role === "patent" ? focus.patentNumber : focus.slug;
  const params = new URLSearchParams({ focus: `${focus.role}:${value}` });
  return `/relationships?${params.toString()}`;
}

/** Build a party-centered or patent-centered relationship graph. */
export function buildRelationshipGraph(focus: RelationshipFocus): RelationshipGraph {
  if (focus.role === "patent") {
    const record = getPatentByNumber(focus.patentNumber);
    if (!record) throw new Error(`Unknown patent focus: ${focus.patentNumber}`);
    const patent = graphPatent(record);
    const parties = partiesForPatents([patent]);
    return {
      centerKind: "patent",
      center: patent,
      patents: [patent],
      parties,
      edges: parties.map((party) => ({ from: patent.id, to: party.id })),
    };
  }

  const patents = patentsForParty(focus.name, focus.role).map(graphPatent);
  const centerId = partyId(focus.role, focus.slug);
  const parties = partiesForPatents(patents, focus);
  const center: GraphPartyNode = {
    id: centerId,
    ref: focus,
    patentIds: patents.map((patent) => patent.id),
    hasPage: focus.role === "author",
  };
  const edges = [
    ...patents.map((patent) => ({ from: centerId, to: patent.id })),
    ...parties.flatMap((party) => party.patentIds.map((id) => ({ from: id, to: party.id }))),
  ];

  return { centerKind: "party", center, patents, parties, edges };
}
