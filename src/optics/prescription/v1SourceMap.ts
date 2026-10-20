/**
 * V1 source map — where each part of a V1 file the converter writes (`--to-version 1`) came from in its source, and
 * where each comment of the source goes in it (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments).
 *
 * The V1 object is the one the V1 view writes (`toLensDataInput`, `toTeleconverterData`). `v1SourceMap` ingests it
 * with source paths, as V1 ingest records them, and composes those with the source paths the source's own ingest
 * recorded, through the canonical path, as `v2SourceMap` composes the V2 view's writes. Nothing in the app imports it.
 *
 * Where a comment goes, in this order:
 * - A comment that leads its node and opens with the converter's own note, "(moved from X)", leads X, where the
 *   conversion to V2 found it, when the V1 file writes X from inside that node; the note is dropped, and it is the
 *   only text placement reads. A V1 container counts as written from inside the source of the node V1 ingest names
 *   its home, when the V1 file writes the container with something in it; one the file writes empty, because a note
 *   names it (`asph: {}` on an all-spherical lens), takes back the note's run from the node that holds its home.
 * - Any other comment keeps its placement on the V1 node its own node became.
 * - A comment that leads a member V1 has no counterpart for, below no record V1 has one for (`focus`, `gaps`,
 *   `catalog.focalLengthMm`), is a banner over what follows: it leads, unmoved, the first V1 member written from
 *   inside that member, the inverse of the rule `v2SourceMap` states for a banner going to V2. One that leads
 *   `schema` leads the V1 file's first member.
 * - Any other comment on a node V1 has no counterpart for (a station record, a medium) moves. Walking up from its
 *   node, it goes to the first V1 container whose home holds the node it has reached, as V1 ingest names each
 *   container's home, or to that node's V1 counterpart, whichever comes first; and to the file's object when it
 *   finds neither.
 *
 * A comment on the source's own object stays on the V1 file's. Where several V1 members hold a station,
 * `zoomPositions`, the list that makes a lens a zoom, comes first, then the others in file order.
 */

import type { LensDataInput } from "../../types/optics.js";
import type { TeleconverterData } from "../../types/teleconverter.js";
import type {
  CanonicalLens,
  CanonicalPrescription,
  IgnoredKind,
  IngestedPrescription,
  SourcePaths,
} from "./canonical.js";
import { ingestLensV1, ingestTeleconverterV1 } from "./ingestV1.js";
import { childPath, follow, inverse, memberPath, parentPath, pathBelow } from "./sourcePaths.js";
import { V1_PRINT_ORDER } from "./toLensData.js";
import { droppedStopRadius } from "./toLensDataV2.js";
import type { DroppedStopRadius } from "./toLensDataV2.js";

/** A value the source wrote that the V1 file does not hold. */
export interface V1DroppedValue {
  kind: IgnoredKind;
  /** Authored path of the value in the source. */
  from: string;
  /** Canonical path where it would sit. */
  canonical: string;
  value: unknown;
}

/** Where each part of a V1 file came from in its source, composed through the canonical prescription. */
export interface V1SourceMap {
  /**
   * The authored path whose literal may give a written V1 value its text: the place the source's ingest read the
   * value from. None for a value V1 holds twice (a surface's `nd` and `elemId`, beside its medium), for an index V1
   * ingest computes, and for zero padding V1 requires and the source left out.
   */
  textSource(v1Path: string): string | undefined;
  /**
   * Where a comment on a source node goes: the V1 node its node became, or else, moved, the first V1 container whose
   * home holds it or the V1 node of its nearest ancestor that has one, whichever it meets first walking up from the
   * node; the file's object when it meets neither.
   *
   * A comment that leads a member of the source with no V1 counterpart, below no record that has one, is a banner over
   * what follows, so it leads the first V1 member written from inside that member, in V1 order (`zoomPositions` first);
   * a comment that leads `schema` leads the V1 file's first member. Neither is moved.
   *
   * Ahead of all these, a comment that leads its node and opens with the converter's own note, "(moved from X)",
   * leads X when the V1 file writes X from inside that node, or writes X empty and that node holds X's home, and
   * `noted` tells the converter to drop the note; the unnoted comments after it in its run follow it. Any other note
   * is comment text.
   *
   * @param sourcePath - the node the comment annotates in the source
   * @param leading - whether the comment leads that node
   * @param movedFrom - the X of the converter's note the comment opens with, if it opens with one
   */
  commentTarget(
    sourcePath: string,
    leading?: boolean,
    movedFrom?: string,
  ): { path: string; moved: boolean; noted?: boolean };
  /** The source record a written V1 record was read from: `surfaces[3]` for V1 `surfaces[3]`. */
  recordSource(v1Path: string): string | undefined;
  /**
   * Members of each V1 record whose print order is not its own key order: the file's object in `V1_PRINT_ORDER`, and
   * the records keyed by surface label (`asph`, `var`, `aberrationControl.var`) in surface order, which a JavaScript
   * object would not keep for labels such as `"3"` and `"STO"`.
   */
  readonly order: Readonly<Record<string, readonly string[]>>;
  /** Each value the source's ingest set aside that the V1 file does not write back, in the order ingest met them. */
  readonly dropped: readonly V1DroppedValue[];
  /**
   * Each undrawn medium the source lists, which V1, writing a medium as its surfaces' `nd`, cannot hold: its id, any
   * name and its place in the list drop.
   */
  readonly media: readonly { from: string; id: string; name?: string }[];
}

/**
 * The surface whose `sd` V1's `SurfaceData` requires and the prescription does not hold, a stop whose radius the
 * engine derives or takes from a schedule, and how the engine sets that radius. Going to V1, the converter supplies
 * the radius (`V1FileOptions.stopRadius` in `toLensData.ts`).
 *
 * @param prescription - a canonical lens or teleconverter
 * @returns the surface's index and how the engine sets its radius; `undefined` when every surface holds its `sd`
 * @throws Error when more than one surface holds none, which ingest never gives
 */
export function v1StopRadius(
  prescription: CanonicalPrescription,
): { index: number; stop: DroppedStopRadius } | undefined {
  const indices = prescription.surfaces.flatMap((surface, index) => (surface.sd === undefined ? [index] : []));
  if (indices.length === 0) return undefined;
  if (indices.length > 1) throw new Error(`v1StopRadius: surfaces ${indices.join(", ")} each hold no sd`);
  return { index: indices[0], stop: droppedStopRadius(prescription) };
}

/** A path that ends in a list item, `zoom.stations[2]`, rather than in a member or a label. */
const LIST_ITEM = /\[\d+\]$/;

/** The top-level member a path is in: the path itself for a member of the file's object. */
function topMember(path: string): string {
  let member = path;
  for (let parent = parentPath(member); parent !== undefined && parent !== ""; parent = parentPath(member)) {
    member = parent;
  }
  return member;
}

/** Every node of a written object, by path, the object's own included. */
function nodePaths(value: unknown, base = "", into: string[] = []): string[] {
  into.push(base);
  if (value === null || typeof value !== "object") return into;
  const entries: [string | number, unknown][] = Array.isArray(value) ? [...value.entries()] : Object.entries(value);
  for (const [key, child] of entries) nodePaths(child, childPath(base, key), into);
  return into;
}

/** The members a record keyed by surface label writes, in surface order. */
function labelOrder(record: unknown, labels: readonly string[]): string[] | undefined {
  if (record === null || typeof record !== "object") return undefined;
  return labels.filter((label) => Object.hasOwn(record, label));
}

/** The print order of the V1 file's object and its label-keyed records. */
function printOrder(
  data: object,
  prescription: CanonicalPrescription,
  kind: "lens" | "teleconverter",
): Record<string, string[]> {
  const listed: readonly string[] = V1_PRINT_ORDER[kind];
  const unlisted = Object.keys(data).find((member) => !listed.includes(member));
  if (unlisted !== undefined) throw new Error(`v1SourceMap: V1_PRINT_ORDER.${kind} does not list "${unlisted}"`);
  const file = data as Record<string, unknown>;
  const order: Record<string, string[]> = { "": listed.filter((member) => Object.hasOwn(data, member)) };
  const aspheric = prescription.surfaces.filter((surface) => surface.asphere).map((surface) => surface.label);
  const asph = labelOrder(file.asph, aspheric);
  if (asph) order.asph = asph;
  if (kind === "lens") {
    const lens = prescription as CanonicalLens;
    const gaps = labelOrder(
      file.var,
      lens.gaps.map((gap) => gap.surface),
    );
    if (gaps) order.var = gaps;
    const control = file.aberrationControl as Record<string, unknown> | undefined;
    const ring = labelOrder(control?.var, lens.aberrationControl?.gaps.map((gap) => gap.surface) ?? []);
    if (ring) order[memberPath("aberrationControl", "var")] = ring;
  }
  for (const [path, members] of Object.entries(order)) {
    const record = path === "" ? file : path.split(".").reduce<unknown>((at, key) => (at as never)?.[key], file);
    if (Object.keys(record as object).length !== members.length) {
      throw new Error(`v1SourceMap: the print order of ${path || "the file's object"} leaves a member out`);
    }
  }
  return order;
}

/**
 * Compose where the source's ingest read each value with where V1 ingest reads it from the V1 object.
 *
 * @param source - the source's prescription, ingested with `{ sources: true }`
 * @param kind - whether it is a lens or a teleconverter
 * @param data - the V1 object the converter prints: the V1 view of the source, with any value the converter supplies
 *   for V1's types
 * @returns the text, comment and record relations between the source and the V1 file, its print order, and what the
 *   V1 file cannot hold
 * @throws Error when the source was ingested without source paths, or when `V1_PRINT_ORDER` leaves out a member of
 *   the V1 object
 * @throws PrescriptionIngestError when V1 ingest refuses the V1 object
 */
export function v1SourceMap(
  source: IngestedPrescription,
  kind: "lens" | "teleconverter",
  data: LensDataInput | TeleconverterData,
): V1SourceMap {
  const sources: SourcePaths | undefined = source.provenance.sources;
  if (!sources) throw new Error("v1SourceMap: ingest the source with { sources: true }");
  const target =
    kind === "lens"
      ? ingestLensV1(data as LensDataInput, { sources: true })
      : ingestTeleconverterV1(data as TeleconverterData, { sources: true });
  const written = target.provenance.sources!;

  /* Source: canonical → authored, for text, and authored → canonical, for comments. */
  const readExact = new Map(Object.entries(sources.read));
  const ignoredFrom = new Map(Object.entries(sources.ignored).map(([canonical, entry]) => [canonical, entry.from]));
  const heldBy = new Map(Object.entries(sources.heldBy));
  const recordOf = inverse(sources.records);
  const readOf = inverse(sources.read);
  const ignoredOf = new Map(Object.entries(sources.ignored).map(([canonical, entry]) => [entry.from, canonical]));
  const canonicalOf = (authored: string) =>
    heldBy.get(authored) ??
    recordOf.get(authored) ??
    follow(authored, readOf, readOf) ??
    ignoredOf.get(authored) ??
    (authored === "" ? "" : undefined);

  /* V1: V1 path → canonical, for text and records, and canonical → V1 path, for comments. */
  const v1ReadOf = inverse(written.read);
  const v1IgnoredOf = new Map(Object.entries(written.ignored).map(([canonical, entry]) => [entry.from, canonical]));
  const v1RecordOf = inverse(written.records);
  const v1Records = new Map(Object.entries(written.records));
  const v1Read = new Map(Object.entries(written.read));
  const v1Ignored = new Map(Object.entries(written.ignored).map(([canonical, entry]) => [canonical, entry.from]));
  const v1Held = inverse(written.heldBy);
  const v1Of = (canonical: string) =>
    v1Records.get(canonical) ?? follow(canonical, v1Read, v1Read) ?? v1Ignored.get(canonical) ?? v1Held.get(canonical);

  const order = printOrder(data, target.prescription, kind);
  const fileOrder = order[""];
  /* A top-level member's place among those a comment may go to: `zoomPositions` first, then the file's order. */
  const rank = (member: string) => (member === "zoomPositions" ? -1 : fileOrder.indexOf(member));
  /* Each container V1 ingest names a home for, `zoomPositions` first and then in the order the file prints them. */
  const homes = Object.entries(written.homes)
    .map(([container, home], index) => ({ container, home, index }))
    .sort((a, b) => rank(topMember(a.container)) - rank(topMember(b.container)) || a.index - b.index);
  const homeHolding = (canonical: string) =>
    homes.find((entry) => pathBelow(canonical, entry.home) !== undefined)?.container;

  /*
   * Each V1 node and the source node it was written from, at either side's grain: values, records, the values V1
   * holds in another form, and each container V1 writes with something in it, from the source of the canonical node
   * V1 ingest names its home (`publishedStations`, from the stations whose `published` flags it lists).
   */
  const pairs: { v1Path: string; sourcePath: string; home: boolean }[] = [];
  const pair = (v1Path: string | undefined, sourcePath: string | undefined, home = false) => {
    if (v1Path !== undefined && sourcePath !== undefined) pairs.push({ v1Path, sourcePath, home });
  };
  for (const [canonical, v1Path] of v1Read) pair(v1Path, follow(canonical, readExact, readExact));
  for (const [canonical, sourcePath] of readExact) pair(follow(canonical, v1Read, v1Read), sourcePath);
  for (const [canonical, v1Path] of v1Records) pair(v1Path, sources.records[canonical]);
  for (const [v1Path, canonical] of Object.entries(written.heldBy)) {
    pair(v1Path, follow(canonical, readExact, readExact) ?? sources.records[canonical]);
  }
  const v1Nodes = nodePaths(data);
  const v1NodeSet = new Set(v1Nodes);
  for (const [container, home] of Object.entries(written.homes)) {
    if (!v1Nodes.some((path) => path !== container && pathBelow(path, container) !== undefined)) continue;
    for (const [canonical, sourcePath] of readExact) {
      if (pathBelow(canonical, home) !== undefined) pair(container, sourcePath, true);
    }
  }
  /*
   * Whether the V1 file writes a node from at or below a source node: something at or below it was, or a record or
   * value that holds it was, read from there. A container counts through its home for what it holds as a whole only,
   * so a node inside it is not ascribed to every source its home spans.
   */
  const writtenInside = (v1Path: string, sourcePath: string) =>
    v1NodeSet.has(v1Path) &&
    pairs.some(
      (entry) =>
        pathBelow(entry.sourcePath, sourcePath) !== undefined &&
        (pathBelow(entry.v1Path, v1Path) !== undefined ||
          (!entry.home && pathBelow(v1Path, entry.v1Path) !== undefined)),
    );
  /*
   * Whether the V1 file writes a container empty and a source node holds the canonical node V1 ingest names its home:
   * an empty container a converter note names takes back the note's run from there.
   */
  const emptyHomeIn = (container: string, sourcePath: string) => {
    const home = written.homes[container];
    if (home === undefined || !v1NodeSet.has(container)) return false;
    if (v1Nodes.some((path) => path !== container && pathBelow(path, container) !== undefined)) return false;
    for (const [canonical, authored] of readExact) {
      if (pathBelow(canonical, home) !== undefined && pathBelow(authored, sourcePath) !== undefined) return true;
    }
    return false;
  };
  /* The first top-level V1 member written from at or below a source node, by `rank`. */
  const firstWrittenFrom = (sourcePath: string): string | undefined => {
    let first: string | undefined;
    for (const entry of pairs) {
      if (pathBelow(entry.sourcePath, sourcePath) === undefined) continue;
      const member = topMember(entry.v1Path);
      if (member !== "" && (first === undefined || rank(member) < rank(first))) first = member;
    }
    return first;
  };
  /*
   * Walking up from a source node: the V1 node of the first node met that has one, or the first V1 container whose
   * home holds it; the file's object when it meets neither. `byAncestor` says it found the V1 node of an ancestor
   * below the file's object, which every node is in.
   */
  const carried = (sourcePath: string): { path: string; moved: boolean; byAncestor: boolean } => {
    for (let path: string | undefined = sourcePath; path !== undefined; path = parentPath(path)) {
      const canonical = canonicalOf(path);
      if (canonical === undefined) continue;
      const v1Path = v1Of(canonical);
      if (v1Path !== undefined) {
        return { path: v1Path, moved: path !== sourcePath, byAncestor: path !== sourcePath && path !== "" };
      }
      const container = homeHolding(canonical);
      if (container !== undefined) return { path: container, moved: true, byAncestor: false };
    }
    return { path: "", moved: true, byAncestor: false };
  };

  const dropped: V1DroppedValue[] = [];
  for (const [canonical, entry] of Object.entries(sources.ignored)) {
    const value = source.provenance.ignored[canonical];
    if (Object.hasOwn(target.provenance.ignored, canonical) && Object.is(target.provenance.ignored[canonical], value)) {
      continue;
    }
    dropped.push({ kind: entry.kind, from: entry.from, canonical, value });
  }
  const media = (source.provenance.v2?.media ?? []).map((medium, index) => ({
    from: `media[${index}]`,
    id: medium.id,
    ...(medium.name === undefined ? {} : { name: medium.name }),
  }));

  return {
    textSource(v1Path) {
      const canonical = follow(v1Path, v1ReadOf, v1ReadOf) ?? v1IgnoredOf.get(v1Path);
      if (canonical === undefined) return undefined;
      return readExact.get(canonical) ?? ignoredFrom.get(canonical) ?? follow(canonical, readExact, readExact);
    },
    commentTarget(sourcePath, leading = false, movedFrom) {
      const noted =
        leading &&
        movedFrom !== undefined &&
        sourcePath !== "" &&
        (writtenInside(movedFrom, sourcePath) || emptyHomeIn(movedFrom, sourcePath));
      if (noted) {
        return { path: movedFrom, moved: false, noted: true };
      }
      const { path, moved, byAncestor } = carried(sourcePath);
      const banner = leading && moved && !byAncestor && sourcePath !== "" && !LIST_ITEM.test(sourcePath);
      if (!banner) return { path, moved };
      const first = sourcePath === "schema" ? (fileOrder[0] ?? "") : firstWrittenFrom(sourcePath);
      return first === undefined ? { path, moved } : { path: first, moved: false };
    },
    recordSource(v1Path) {
      const canonical = v1RecordOf.get(v1Path);
      return canonical === undefined ? undefined : sources.records[canonical];
    },
    order,
    dropped,
    media,
  };
}
