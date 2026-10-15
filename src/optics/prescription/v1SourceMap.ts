/**
 * V1 source map — where each part of a V1 file the converter writes (`--to-version 1`) came from in its source, and
 * where each comment of the source goes in it (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments).
 *
 * The V1 object is the one the V1 view writes (`toLensDataInput`, `toTeleconverterData`). `v1SourceMap` ingests it
 * with source paths, as V1 ingest records them, and composes those with the source paths the source's own ingest
 * recorded, through the canonical path, as `v2SourceMap` composes the V2 view's writes. Nothing in the app imports it.
 *
 * A comment keeps its placement on the V1 node its own node became. A comment on a node V1 has no counterpart for (a
 * station record, `zoom`, `focus`, a medium) moves. Walking up from its node, it goes to the first V1 container in
 * the file whose home holds the node it has reached, as V1 ingest names each container's home (`zoomPositions` and
 * the other per-station lists hold a station), or to that node's V1 counterpart, whichever comes first; and to the
 * file's object when it finds neither. A comment on the source's own object stays on the V1 file's.
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
import { follow, inverse, memberPath, parentPath, pathBelow } from "./sourcePaths.js";
import { V1_PRINT_ORDER } from "./toLensData.js";
import { droppedStopRadius, type DroppedStopRadius } from "./toLensDataV2.js";

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
   * Where a comment on a source node goes: the V1 node its node became, or else, moved, the first V1 container in the
   * file whose home holds it or the V1 node of its nearest ancestor that has one, whichever it meets first walking up
   * from the node; the file's object when it meets neither.
   *
   * @param sourcePath - the node the comment annotates in the source
   */
  commentTarget(sourcePath: string): { path: string; moved: boolean };
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
  /** Each name the source gave an undrawn medium, which V1, writing a medium as its surfaces' `nd`, cannot hold. */
  readonly mediumNames: readonly { from: string; name: string }[];
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

/** The top-level member a path is in: the path itself for a member of the file's object. */
function topMember(path: string): string {
  let member = path;
  for (let parent = parentPath(member); parent !== undefined && parent !== ""; parent = parentPath(member)) {
    member = parent;
  }
  return member;
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
  const position = (v1Path: string) => fileOrder.indexOf(topMember(v1Path));
  /* Each container V1 ingest names a home for, in the order the file prints them. */
  const homes = Object.entries(written.homes)
    .map(([container, home], index) => ({ container, home, index }))
    .sort((a, b) => position(a.container) - position(b.container) || a.index - b.index);
  const homeHolding = (canonical: string) =>
    homes.find((entry) => pathBelow(canonical, entry.home) !== undefined)?.container;

  const dropped: V1DroppedValue[] = [];
  for (const [canonical, entry] of Object.entries(sources.ignored)) {
    const value = source.provenance.ignored[canonical];
    if (Object.hasOwn(target.provenance.ignored, canonical) && Object.is(target.provenance.ignored[canonical], value)) {
      continue;
    }
    dropped.push({ kind: entry.kind, from: entry.from, canonical, value });
  }
  const mediumNames = (source.provenance.v2?.media ?? []).flatMap((medium, index) =>
    medium.name === undefined ? [] : [{ from: `media[${index}].name`, name: medium.name }],
  );

  return {
    textSource(v1Path) {
      const canonical = follow(v1Path, v1ReadOf, v1ReadOf) ?? v1IgnoredOf.get(v1Path);
      if (canonical === undefined) return undefined;
      return readExact.get(canonical) ?? ignoredFrom.get(canonical) ?? follow(canonical, readExact, readExact);
    },
    commentTarget(sourcePath) {
      for (let path: string | undefined = sourcePath; path !== undefined; path = parentPath(path)) {
        const canonical = canonicalOf(path);
        if (canonical === undefined) continue;
        const v1Path = v1Of(canonical);
        if (v1Path !== undefined) return { path: v1Path, moved: path !== sourcePath };
        const container = homeHolding(canonical);
        if (container !== undefined) return { path: container, moved: true };
      }
      return { path: "", moved: true };
    },
    recordSource(v1Path) {
      const canonical = v1RecordOf.get(v1Path);
      return canonical === undefined ? undefined : sources.records[canonical];
    },
    order,
    dropped,
    mediumNames,
  };
}
