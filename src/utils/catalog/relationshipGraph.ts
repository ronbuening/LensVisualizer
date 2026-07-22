/**
 * Relationship graph assembly — pure data layer for the patent map.
 *
 * Turns a focus party (an inventor or assignee) into a two-ring "ego graph":
 * the center party, the unique patents they appear on (inner ring), and every
 * other inventor/assignee named on those patents (outer ring). All data comes
 * from the lightweight lens summaries via patentsForParty; no full
 * prescriptions and no React. The radial layout engine (M3) consumes the
 * result; this module is only nodes and edges.
 */

import { AuthorPatent, getAuthorBySlug, getAuthorByName, patentsForParty } from "./authorCatalog.js";
import { getAssigneeBySlug, getAssigneeByName } from "./assigneeCatalog.js";

export type PartyRole = "author" | "assignee";

export interface PartyRef {
  role: PartyRole;
  name: string; // display name as it appears in patent metadata
  slug: string; // from AUTHORS / ASSIGNEES index
}

export interface GraphPatentNode {
  id: string; // `patent:${patentNumber}`
  patentNumber: string; // may be the fallback "Patent source for <lens name>"
  patentYear?: number;
  authors: string[];
  assignees: string[];
  lenses: { key: string; name: string; specs?: string[] }[];
}

export interface GraphPartyNode {
  id: string; // `${role}:${slug}`
  ref: PartyRef;
  patentIds: string[]; // ids of connected patents within this graph
  hasPage: boolean; // true for authors (/authors/:slug exists), false for assignees
}

export interface RelationshipGraph {
  center: GraphPartyNode;
  patents: GraphPatentNode[]; // sorted by (patentYear ?? Infinity, patentNumber)
  parties: GraphPartyNode[]; // sorted by name; NEVER contains the center
  edges: { from: string; to: string }[]; // center→patent plus patent→party
}

/** Namespaced node id for a party (`author:<slug>` / `assignee:<slug>`). */
function partyId(role: PartyRole, slug: string): string {
  return `${role}:${slug}`;
}

/** Namespaced node id for a patent (`patent:<patentNumber>`). */
function patentId(patentNumber: string): string {
  return `patent:${patentNumber}`;
}

/** Look a party name up in the index matching its role, if present. */
function lookupPartyRef(name: string, role: PartyRole): PartyRef | undefined {
  const meta = role === "author" ? getAuthorByName(name) : getAssigneeByName(name);
  return meta ? { role, name, slug: meta.slug } : undefined;
}

/**
 * Parse "?focus=" values like "author:ludwig-bertele". Returns undefined for
 * anything malformed or unknown so callers can fall back to the picker.
 */
export function resolveFocusParam(raw: string | null): PartyRef | undefined {
  if (!raw) return undefined;
  const colon = raw.indexOf(":");
  if (colon <= 0) return undefined;
  const role = raw.slice(0, colon);
  const slug = raw.slice(colon + 1);
  if (!slug) return undefined;
  if (role === "author") {
    const meta = getAuthorBySlug(slug);
    return meta ? { role: "author", name: meta.name, slug: meta.slug } : undefined;
  }
  if (role === "assignee") {
    const meta = getAssigneeBySlug(slug);
    return meta ? { role: "assignee", name: meta.name, slug: meta.slug } : undefined;
  }
  return undefined;
}

/** Build the two-ring ego graph for a focus party. */
export function buildRelationshipGraph(focus: PartyRef): RelationshipGraph {
  const records: AuthorPatent[] = patentsForParty(focus.name, focus.role);
  const centerId = partyId(focus.role, focus.slug);

  const patents: GraphPatentNode[] = records.map((record) => ({
    id: patentId(record.patentNumber),
    patentNumber: record.patentNumber,
    patentYear: record.patentYear,
    authors: record.authors,
    assignees: record.assignees,
    lenses: record.lenses,
  }));

  const partiesById = new Map<string, GraphPartyNode>();
  const edges: { from: string; to: string }[] = [];

  for (const patent of patents) {
    edges.push({ from: centerId, to: patent.id });

    const named: PartyRef[] = [
      ...patent.authors.map((name) => lookupPartyRef(name, "author")),
      ...patent.assignees.map((name) => lookupPartyRef(name, "assignee")),
    ].filter((ref): ref is PartyRef => ref !== undefined);

    for (const ref of named) {
      const id = partyId(ref.role, ref.slug);
      // Skip the center itself (same role AND same name). A co-author who also
      // appears as an assignee stays a distinct assignee node.
      if (ref.role === focus.role && ref.name === focus.name) continue;

      const node = partiesById.get(id) ?? {
        id,
        ref,
        patentIds: [],
        hasPage: ref.role === "author",
      };
      if (!node.patentIds.includes(patent.id)) node.patentIds.push(patent.id);
      partiesById.set(id, node);
      edges.push({ from: patent.id, to: id });
    }
  }

  const parties = [...partiesById.values()]
    .map((node) => ({ ...node, patentIds: [...node.patentIds].sort() }))
    .sort((a, b) => a.ref.name.localeCompare(b.ref.name));

  const center: GraphPartyNode = {
    id: centerId,
    ref: focus,
    patentIds: patents.map((patent) => patent.id),
    hasPage: focus.role === "author",
  };

  return { center, patents, parties, edges };
}
