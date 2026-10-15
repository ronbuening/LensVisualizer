/**
 * Comparison half of the engine differential harness.
 *
 * A driver captures the same requests on two engines, and for a lens whose data changed on two prescriptions, and
 * hands the records to a run made here one lens at a time. The run pairs the records, finds what differs, judges
 * each difference by the declared change class and the budget table in `budgets.ts`, and keeps only totals, the
 * largest difference per quantity and a bounded sample of findings, so a whole tier never sits in memory. This
 * module also reads a pull request's declared exceptions and declared transitions, sorts a catalog's changes into
 * format-only and semantic, and writes the reports. It calls no engine and reads no file.
 */

import {
  C2_CRITERIA,
  QUANTITIES,
  budgetOf,
  hitColumnEntries,
  quantityAt,
  resolveBudgetRule,
  type BudgetRule,
  type ChangeClass,
  type LeafContext,
  type Quantity,
  type QuantityId,
} from "./budgets.js";
import { decodeValue, sha256Hex, type EncodedValue, type Outcome } from "./payload.js";
import { lensId, stateId, type CaptureState, type LensRef, type RequestFamily } from "./requests.js";

/* ── Records and differences ── */

/** A payload record as a capture returns it. */
export interface ComparableRecord {
  lens: string;
  state: CaptureState | null;
  request: RequestFamily;
  /** Which of the family's requests the record answers, where the request named one. */
  variant?: string;
  payload: Outcome<EncodedValue>;
}

/**
 * What kind of difference two paired values show.
 *
 * - `number`: a classified number moved; its measure against its budget says how far.
 * - `nonFinite`: NaN or an infinity on one side that the other side does not repeat exactly.
 * - `contract`: a residual outside the tolerance its solver accepted it under: an intersection's, or a solve's. A
 *   field that restates a solve's residual in another frame breaks its contract outside its own bound, and also
 *   where the residual its solve accepted is outside the solve's tolerance.
 * - `unclassified`: a number moved that the budget table gives no class.
 * - `iterations`: a solver took a different number of steps or evaluations.
 * - `discrete`: a status, count, label, sample position or other exact field changed, or a value changed type.
 * - `shape`: a member is missing on one side, or an array changed length.
 * - `digest`: the hash that stands in for a trace nested in an analysis result changed, so something inside that
 *   trace moved. A hash cannot say how far. Under C0 that is a failure like any other; above C0 it is counted and
 *   does not fail. What is written beside the hash is compared as any field is: the status, the hit count, the
 *   `outcome` hash, which is a discrete field that changes with anything discrete inside the trace, the largest
 *   residual share, which is a contract check, and the largest effective tolerance, which that share is a share of.
 */
export type DifferenceKind =
  | "number"
  | "nonFinite"
  | "contract"
  | "unclassified"
  | "iterations"
  | "discrete"
  | "shape"
  | "digest";

/** Which pair of captures a finding is from. */
export type ComparisonName =
  /** One prescription on the base engine and on the head engine. */
  | "engine"
  /** A format-only data change: the base and head prescriptions on the head engine. */
  | "format"
  /** A semantic data change: the base and head prescriptions on the head engine. */
  | "impact";

/** One difference, located and written for a report. */
export interface Finding {
  comparison: ComparisonName;
  lens: string;
  /** `stateId` of the record's state. */
  state: string;
  request: RequestFamily;
  /** The record's variant, when its request named one. */
  variant?: string;
  /** Path under the record's value, with array indices. */
  path: string;
  kind: DifferenceKind;
  quantity: QuantityId | null;
  /** The two values as JSON text, or a word for a missing member or a container. */
  base: string;
  head: string;
  /** How far apart, in the quantity's unit and before any rule scale; null where no number measures it. */
  measure: number | null;
  /** The budget the measure is held to, in the same unit. */
  budget: number | null;
}

interface RawDifference {
  kind: DifferenceKind;
  path: string;
  /** The path with every array index dropped: what the budget table is keyed by. */
  pattern: string;
  quantity: QuantityId | null;
  base: unknown;
  head: unknown;
  measure: number | null;
  budget: number | null;
}

/* The first character of every tag the encoding writes for a number JSON cannot carry. */
const TAG_CHAR_CODE = "$".charCodeAt(0);

/** The number an encoded leaf stands for, or `undefined` for a leaf that is not a number. */
function numberOf(leaf: unknown): number | undefined {
  if (typeof leaf === "number") return leaf;
  if (typeof leaf !== "string" || leaf.charCodeAt(0) !== TAG_CHAR_CODE) return undefined;
  const decoded = decodeValue(leaf);
  return typeof decoded === "number" ? decoded : undefined;
}

function isContainer(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function describe(value: unknown): string {
  if (value === undefined) return "absent";
  if (Array.isArray(value)) return `array of ${value.length}`;
  if (isContainer(value)) return "object";
  return JSON.stringify(value);
}

/** Direction cosines of a ray with slopes `u` and `v` against the axis: (u, v, 1) normalized. */
function cosinesOf(u: number, v: number): [number, number, number] {
  const norm = Math.hypot(u, v, 1);
  return [u / norm, v / norm, 1 / norm];
}

/**
 * Find every difference between two paired records.
 *
 * The walk follows both records together. A member present on one side only, or an array of another length, is
 * reported once and not entered: element-by-element differences behind a shifted index would say nothing.
 *
 * @param base - the record of the base side
 * @param head - the record of the head side, for the same lens, state and request
 * @param changeClass - the class whose budgets are attached to numeric differences
 * @param rules - resolved budget rules by request family and path pattern, shared across calls
 * @param emit - receives each difference; it must read what it needs before returning
 */
function diffRecords(
  base: ComparableRecord,
  head: ComparableRecord,
  changeClass: ChangeClass,
  rules: Map<string, Map<string, BudgetRule | null>>,
  emit: (difference: RawDifference) => void,
): void {
  const family = base.request;
  let familyRules = rules.get(family);
  if (!familyRules) rules.set(family, (familyRules = new Map()));
  const baseStack: unknown[] = [];
  const headStack: unknown[] = [];
  const keys: (string | number)[] = [];
  const segments: string[] = [];
  const leaf: LeafContext = { base: baseStack, head: headStack, keys };

  const pathOf = () =>
    keys.reduce<string>(
      (path, key) => (typeof key === "number" ? `${path}[${key}]` : path ? `${path}.${key}` : key),
      "",
    );
  const report = (
    kind: DifferenceKind,
    pattern: string,
    a: unknown,
    b: unknown,
    quantity: QuantityId | null = null,
    measure: number | null = null,
    budget: number | null = null,
  ) => emit({ kind, path: pathOf(), pattern, quantity, base: a, head: b, measure, budget });

  const ruleFor = (pattern: string): BudgetRule | null => {
    let rule = familyRules.get(pattern);
    if (rule === undefined) {
      rule = resolveBudgetRule(family, segments);
      familyRules.set(pattern, rule);
    }
    return rule;
  };

  const compareNumbers = (x: number, y: number, a: unknown, b: unknown, pattern: string): void => {
    const rule = ruleFor(pattern);
    if (!rule) return report("unclassified", pattern, a, b);
    const quantity = quantityAt(rule, leaf);
    /* No budget is defined across NaN or an infinity: the two sides agree exactly or they do not. */
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return report("nonFinite", pattern, a, b, quantity);
    }

    const { kind, floor, tolerance }: Quantity = QUANTITIES[quantity];
    const budget = budgetOf(quantity, changeClass);
    const distance = Math.abs(x - y) / rule.scale;
    switch (kind) {
      case "exact":
        return report("discrete", pattern, a, b, quantity, distance, 0);
      case "iterations":
        return report("iterations", pattern, a, b, quantity, y - x, 0);
      case "absolute":
        return report("number", pattern, a, b, quantity, distance, budget);
      case "relative": {
        /* The bound is the budget times the larger magnitude, and the class's floor where that is more. Without a
         * floor the magnitude is zero only between 0 and -0, which are no distance apart. The magnitude is taken
         * in the quantity's unit, as the distance is: a floor is in that unit, so a field that restates a length
         * in micrometres or px leaves the floor for the share of its value at the same length as its twin in mm. */
        const magnitude = Math.max(
          Math.abs(x) / rule.scale,
          Math.abs(y) / rule.scale,
          floor ? floor.bound / budget : 0,
        );
        return report("number", pattern, a, b, quantity, distance === 0 ? 0 : distance / magnitude, budget);
      }
      case "slope": {
        const owner = keys.length - 1;
        const partnerOf = (side: readonly unknown[]) =>
          rule.partner === undefined ? undefined : numberOf((side[owner] as Record<string, unknown>)[rule.partner]);
        const [basePartner = 0, headPartner = 0] = [partnerOf(baseStack), partnerOf(headStack)];
        /* A partner that is itself not finite is reported at its own leaf; here it would poison every cosine. */
        const from = cosinesOf(x, Number.isFinite(basePartner) ? basePartner : 0);
        const to = cosinesOf(y, Number.isFinite(headPartner) ? headPartner : 0);
        const moved = Math.max(Math.abs(from[0] - to[0]), Math.abs(from[1] - to[1]), Math.abs(from[2] - to[2]));
        return report("number", pattern, a, b, quantity, moved, budget);
      }
      case "residual": {
        /* The tolerance each side's residual is held to is the class's own, or else the one recorded beside the
         * hit. */
        const recorded = rule.tolerance === undefined ? [] : hitColumnEntries(leaf, rule.tolerance);
        /* Infinity when a side carries no finite residual or no positive tolerance: a residual with no contract
         * to meet fails it. */
        const share = (residual: number | undefined, held: number | undefined) =>
          residual !== undefined && Number.isFinite(residual) && held !== undefined && held > 0
            ? Math.abs(residual) / held
            : Number.POSITIVE_INFINITY;
        const worst = Math.max(
          share(x, tolerance ?? numberOf(recorded[0])),
          share(y, tolerance ?? numberOf(recorded[1])),
        );
        /* A field that restates the residual its solve accepted answers through that solve as well: on each side
         * the residual beside it must be within the solve's own tolerance. The measure stays the field's share of
         * its own bound, which is what a report prints. */
        const { accepted } = rule;
        let unaccepted = false;
        if (accepted) {
          const owner = keys.length - 1;
          const held = (QUANTITIES[accepted.quantity] as Quantity).tolerance;
          const acceptedOn = (side: readonly unknown[]) => {
            const solve = (side[owner] as Record<string, unknown>)[accepted.solve];
            return isContainer(solve) ? numberOf((solve as { residual?: unknown }).residual) : undefined;
          };
          unaccepted =
            Math.max(share(acceptedOn(baseStack), held), share(acceptedOn(headStack), held)) >
            budgetOf(accepted.quantity, changeClass);
        }
        return report(worst > budget || unaccepted ? "contract" : "number", pattern, a, b, quantity, worst, budget);
      }
      case "share":
        /* Already a share of its tolerance, and only the head's is judged: the engine a change proposes. */
        return report(Math.abs(y) > budget ? "contract" : "number", pattern, a, b, quantity, Math.abs(y), budget);
    }
  };

  const compareAt = (a: unknown, b: unknown, pattern: string): void => {
    if (a === b) return;
    const [aIsArray, bIsArray] = [Array.isArray(a), Array.isArray(b)];
    if (isContainer(a) && isContainer(b) && aIsArray === bIsArray) {
      baseStack.push(a);
      headStack.push(b);
      if (aIsArray) {
        const [items, others] = [a as unknown[], b as unknown[]];
        if (items.length !== others.length) {
          baseStack.pop();
          headStack.pop();
          return report("shape", pattern, a, b);
        }
        const itemPattern = `${pattern}[]`;
        segments.push("[]");
        for (let index = 0; index < items.length; index++) {
          keys.push(index);
          compareAt(items[index], others[index], itemPattern);
          keys.pop();
        }
        segments.pop();
      } else {
        const [members, others] = [a as Record<string, unknown>, b as Record<string, unknown>];
        for (const key of Object.keys(members)) {
          keys.push(key);
          segments.push(key);
          compareAt(
            members[key],
            Object.hasOwn(others, key) ? others[key] : undefined,
            pattern ? `${pattern}.${key}` : key,
          );
          segments.pop();
          keys.pop();
        }
        for (const key of Object.keys(others)) {
          if (Object.hasOwn(members, key)) continue;
          keys.push(key);
          report("shape", pattern ? `${pattern}.${key}` : key, undefined, others[key]);
          keys.pop();
        }
      }
      baseStack.pop();
      headStack.pop();
      return;
    }
    if (a === undefined || b === undefined || isContainer(a) || isContainer(b)) return report("shape", pattern, a, b);
    const [x, y] = [numberOf(a), numberOf(b)];
    if (x === undefined || y === undefined) {
      /* The result encoder writes a nested trace as a digest: a `hash` beside a `hitCount` and what else it kept. */
      const owner = baseStack[baseStack.length - 1] as { hitCount?: unknown } | undefined;
      const isDigest = keys[keys.length - 1] === "hash" && typeof owner?.hitCount === "number";
      return report(isDigest ? "digest" : "discrete", pattern, a, b);
    }
    if (!Object.is(x, y)) compareNumbers(x, y, a, b, pattern);
  };

  /* Budget paths start under a record's value. Two records that did not both return one are walked from the
   * outcome itself, where the only members are `ok` and the error's. */
  if (base.payload.ok && head.payload.ok) compareAt(base.payload.value, head.payload.value, "");
  else compareAt(base.payload, head.payload, "");
}

/* ── Counts ── */

export interface StatusCounts {
  ok: number;
  clipped: number;
  failed: number;
}

/** What a set of records holds: the counts a pull request states beside its gate result. */
export interface PayloadCounts {
  records: number;
  /** Records whose request threw instead of returning a value. */
  failedRecords: number;
  /** Numeric leaves, the tagged -0, NaN and infinities included. */
  numbers: number;
  /** Rays captured with their full hits, by status. */
  rays: StatusCounts;
  /** Traces inside analysis results, which a record carries as digests, by status. */
  digestedTraces: StatusCounts;
  /** Analysis jobs that returned a value, and jobs that threw. */
  jobs: { returned: number; threw: number };
}

function emptyStatusCounts(): StatusCounts {
  return { ok: 0, clipped: 0, failed: 0 };
}

function emptyPayloadCounts(): PayloadCounts {
  return {
    records: 0,
    failedRecords: 0,
    numbers: 0,
    rays: emptyStatusCounts(),
    digestedTraces: emptyStatusCounts(),
    jobs: { returned: 0, threw: 0 },
  };
}

function isStatus(value: unknown): value is keyof StatusCounts {
  return value === "ok" || value === "clipped" || value === "failed";
}

/**
 * Add one record to a set of counts.
 *
 * @param record - a payload record
 * @param counts - the totals to add to
 * @returns the numeric leaves in the record
 */
function countRecord(record: ComparableRecord, counts: PayloadCounts): number {
  counts.records++;
  if (!record.payload.ok) {
    counts.failedRecords++;
    return 0;
  }
  const numbersBefore = counts.numbers;
  const visit = (value: unknown): void => {
    if (!isContainer(value)) {
      if (numberOf(value) !== undefined) counts.numbers++;
      return;
    }
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    const members = value as Record<string, unknown>;
    if (isStatus(members.status)) {
      /* A full trace keeps its hits; the digest of a nested one keeps their count and a hash. */
      if (isContainer(members.hits)) counts.rays[members.status]++;
      else if (typeof members.hash === "string" && typeof members.hitCount === "number") {
        counts.digestedTraces[members.status]++;
      }
    }
    for (const key of Object.keys(members)) visit(members[key]);
  };
  visit(record.payload.value);
  if (record.request === "analysis") {
    const jobs = (record.payload.value as { jobs?: Record<string, { ok?: unknown }> } | null)?.jobs ?? {};
    for (const job of Object.values(jobs)) counts.jobs[job.ok === true ? "returned" : "threw"]++;
  }
  return counts.numbers - numbersBefore;
}

/**
 * Project an older capture onto the retired legacy-trace schema for engine drift alone.
 *
 * S4.P2.T4 retires these two members, not their records. Drop a base member only where the successful head object
 * exists and lacks it; additions, missing parents and every other missing member still compare normally. Both
 * inputs stay intact so a driver may keep their original payloads as evidence.
 */
function withoutRetiredLegacyCapture(base: ComparableRecord, head: ComparableRecord): ComparableRecord {
  if (base.request !== "traces" || !base.payload.ok || !head.payload.ok) return base;
  const before = base.payload.value;
  const after = head.payload.value;
  const isObject = (value: EncodedValue): value is { [key: string]: EncodedValue } =>
    isContainer(value) && !Array.isArray(value);
  if (!isObject(before) || !isObject(after)) return base;
  let value = before;
  if (Object.hasOwn(before, "legacy") && !Object.hasOwn(after, "legacy")) {
    value = { ...value };
    delete value.legacy;
  }
  const probesBefore = before.nearAxisProbes;
  const probesAfter = after.nearAxisProbes;
  if (
    probesBefore !== undefined &&
    probesAfter !== undefined &&
    isObject(probesBefore) &&
    isObject(probesAfter) &&
    Object.hasOwn(probesBefore, "legacy") &&
    !Object.hasOwn(probesAfter, "legacy")
  ) {
    const probes = { ...probesBefore };
    delete probes.legacy;
    value = { ...value, nearAxisProbes: probes };
  }
  return value === before ? base : { ...base, payload: { ok: true, value } };
}

/* ── A differential run ── */

/** How a lens's prescription at the head relates to the base's. */
export type DataChange =
  /** The serialized prescriptions are the same. */
  | "unchanged"
  /** They differ and share a semantic fingerprint. */
  | "format"
  /** They differ in fingerprint. */
  | "semantic"
  /** The base has no such lens. */
  | "new";

/** Findings kept per list. Totals count every one; a report says how many it shows. */
const MAX_SAMPLES = 200;
/** Distinct unclassified paths kept. */
const MAX_UNCLASSIFIED_PATHS = 100;
/** Blocking findings kept per lens in the data-impact report, of each kind of blocker. */
const MAX_IMPACT_BLOCKERS = 10;
/** Distinct status changes kept per lens in the data-impact report; changes of any other kind are counted together. */
const MAX_STATUS_CHANGES = 64;
/** Records named in the one-line reason a run failed; the report lists the rest. */
const MAX_NAMED_IN_FAILURE = 3;

export interface QuantityTally {
  /** Numbers of this class that are not bit-identical. */
  differing: number;
  /** Of those, the ones beyond the budget. */
  beyondBudget: number;
  largest: Finding | null;
}

/** Totals of one comparison across a run. */
export interface ComparisonTally {
  records: number;
  recordsDiffering: number;
  /** Numeric leaves in the records compared. */
  numbers: number;
  numbersDiffering: number;
  differences: Record<DifferenceKind, number>;
  /** Differences that fail the run under this comparison's rule. */
  failing: number;
  failures: Finding[];
  /** Discrete and shape differences: every one is a transition a class above C0 has to list. */
  transitions: number;
  transitionSamples: Finding[];
  quantities: Partial<Record<QuantityId, QuantityTally>>;
  /** Change in a solver's step or evaluation count (head minus base) -> fields that changed by it. */
  iterationChanges: Record<string, number>;
  /** Path patterns of numbers that moved and have no class in the budget table. */
  unclassified: string[];
  /** Trace digests that changed: how many in the records of each request family, and the lenses they are in. */
  digests: { byRequest: Partial<Record<RequestFamily, number>>; lenses: string[] };
}

function emptyTally(): ComparisonTally {
  return {
    records: 0,
    recordsDiffering: 0,
    numbers: 0,
    numbersDiffering: 0,
    differences: {
      number: 0,
      nonFinite: 0,
      contract: 0,
      unclassified: 0,
      iterations: 0,
      discrete: 0,
      shape: 0,
      digest: 0,
    },
    failing: 0,
    failures: [],
    transitions: 0,
    transitionSamples: [],
    quantities: {},
    iterationChanges: {},
    unclassified: [],
    digests: { byRequest: {}, lenses: [] },
  };
}

/** The failed statuses and computed non-finite numbers of one record, as the impact report lists them. */
export interface RecordCounts {
  /** `stateId` of the record's state. */
  state: string;
  request: RequestFamily;
  /** The record's variant, when its request named one. */
  variant?: string;
  failedStatuses: number;
  /** Non-finite numbers the engine computed; one that hands an authored value back is not counted. */
  nonFinite: number;
  /** Set on a record that threw, which has nothing to count. */
  threw?: true;
}

/** Statuses and computed non-finite numbers at paths that one side of a data change has and the other has not. */
export interface OneSidedCounts {
  statuses: number;
  /** Of those statuses, the failures. */
  failedStatuses: number;
  /** Non-finite numbers the engine computed; one that hands an authored value back is not counted. */
  nonFinite: number;
}

/**
 * What a semantic data change did to the statuses, the computed numbers and the outcomes of a lens's records, path
 * by path. A side has a status at a path where it holds a string in a member named `status`, a number where it holds
 * a number, and an outcome where it holds a boolean in a member named `ok`. A status the prescription hands back,
 * such as that of a source erratum, was authored and is none of these. An array that changed length is paired by
 * index, so its first elements are at paths both sides have.
 */
export interface ImpactPaths {
  /** Statuses at a path where both sides have one. */
  statuses: {
    /** No failure on the base data and a failure on the head data, including failures after a ray's first clip. */
    toFailure: number;
    /** Of those, ray failures after an earlier clip on the head data. Counted, and no gate. */
    afterFirstClip: number;
    /** A failure on the base data and none on the head data. */
    fromFailure: number;
  };
  /** Numbers the engine computed, at a path where both sides have one. */
  numbers: {
    /** Finite on the base data and not on the head data. Each one blocks. */
    toNonFinite: number;
    /** Not finite on the base data and finite on the head data. */
    fromNonFinite: number;
  };
  /**
   * Outcomes where both sides have one: a boolean in a member named `ok`. That is the outcome of a record, of an
   * analysis job and of a tracer's near-axis probes, and in a composition record the fit predicate's answer, which
   * the composer applies, so a pair it refuses throws as its record does.
   */
  outcomes: {
    /** True on the base data and false on the head data: it returned, and now throws. Each one blocks. */
    toThrown: number;
    /** False on the base data and true on the head data: it threw, and now returns. */
    fromThrown: number;
  };
  /** At paths only the base data has: work the head data no longer does. Counted, and no gate. */
  baseOnly: OneSidedCounts;
  /** At paths only the head data has: work the base data never did. Counted, failures included, and no gate. */
  headOnly: OneSidedCounts;
  /**
   * Arrays at a path both sides have that changed length and hold what the rule reads: a status, an outcome or a
   * computed number that is not finite. Their elements are paired by index, which sets the same things side by
   * side only where the longer side's extra elements are at its end. Where an element was put in or taken out
   * ahead of others, a status that turned to a failure can show as one side's alone, and one that did not can show
   * as turned. Nothing here gates: it tells a reader where to check the pairing.
   */
  resized: {
    arrays: number;
    /** The first of them, up to `MAX_IMPACT_BLOCKERS`, each as its record, its path and the two lengths. */
    listed: Finding[];
  };
  /**
   * Every status that differs, as `base -> head` with `absent` for a side that has none at the path, against how
   * many paths show it. A run keeps the first `MAX_STATUS_CHANGES` distinct changes of a lens.
   */
  statusChanges: Record<string, number>;
  /** Of each listed change, the failures after the head ray's first clip. */
  statusChangesAfterFirstClip: Record<string, number>;
  /** Status differences of any change past those. */
  statusChangesUnlisted: number;
}

/** What a semantic data change, or a new lens, did to one lens's records on the head engine. */
export interface DataImpact {
  lens: string;
  change: "semantic" | "new";
  records: number;
  recordsDiffering: number;
  numbersDiffering: number;
  /** Discrete and shape differences. */
  transitions: number;
  /** The largest difference of each quantity that moved: budgeted numbers first, the furthest past its budget leading. */
  largest: Finding[];
  /**
   * What blocks the change. A semantic change: a status that turned to a failure without evidence of an earlier
   * clip, a number that turned non-finite and an outcome that turned to a throw, each at a path both sides have
   * (`paths`). A new lens: its build record, when it threw.
   */
  blocking: number;
  /** The first of them, up to `MAX_IMPACT_BLOCKERS` of each kind. The verdict reads `blocking`, never this list. */
  blockers: Finding[];
  /** A semantic change: its records path by path. A new lens has no base data to pair a path with. */
  paths?: ImpactPaths;
  /**
   * A new lens, or a pair that only the head data permits: what each of its records holds, in request order. There
   * is no base data to set these beside, so they block nothing and are for the reader of the impact report.
   */
  recordCounts?: RecordCounts[];
}

/** Where the fit predicate's answers differ, as lens ids (`host+converter`). */
export interface PairDifferences {
  /** Head prescriptions: pairs the base engine permits and the head engine does not. */
  baseEngineOnly: string[];
  /** Head prescriptions: pairs the head engine permits and the base engine does not. */
  headEngineOnly: string[];
  /** Head engine: pairs permitted with the base prescriptions and no longer with the head's. */
  baseDataOnly: string[];
  /** Head engine: pairs permitted with the head prescriptions and not with the base's. Each is compared as new. */
  headDataOnly: string[];
  /**
   * Pairs of the head prescriptions that the base engine cannot compose and build while the head engine can, each
   * with what the base engine said. They are no part of the comparison between the engines above: each is an
   * uncompared lens, in a run that meets it and in one that does not.
   */
  uncompared: { lens: string; reason: string }[];
  /**
   * Changed hosts and converters that had pairs with the base prescriptions and have none with the head's, each
   * with the pairs it lost. Nothing compares such a converter, and a run warns of it.
   */
  lostEveryPair: { kind: "host" | "converter"; key: string; pairs: string[] }[];
}

export interface RunOptions {
  /** The class the engine comparison is judged under. */
  changeClass: ChangeClass;
  /** Lens ids the change declares the base engine cannot evaluate. */
  declaredExceptions: readonly string[];
  /** True when the run covers part of a tier, so a declared exception may name a lens it never sees. */
  restricted: boolean;
  /** Where the engines, or the two sets of prescriptions, disagree on the permitted pairs; none when left out. */
  pairs?: PairDifferences;
  /**
   * The text that declares the change's transitions: a pull request description, or any text in that form, which
   * `parseDeclaredTransitions` reads. Nothing is declared when left out.
   */
  declaredTransitions?: string;
  /**
   * Every lens id of the head catalog and of the converter pairs requested from it, in a narrowed run as in a whole
   * one. A declared transition must name one of them. When left out, it must name a lens the run met.
   */
  catalogLenses?: readonly string[];
}

/**
 * The records of one lens, from every capture the lens needs. A lens with many records may be handed over in
 * consecutive parts, each with the same lens and data change; the part with its build constants comes first.
 */
export interface LensCaptures {
  /** `lensId` of the lens every record names. */
  lens: string;
  dataChange: DataChange;
  /** The head prescription on the base engine. */
  baseEngine: readonly ComparableRecord[];
  /** The head prescription on the head engine. */
  headEngine: readonly ComparableRecord[];
  /** The base prescription on the head engine; required for a format-only or semantic change. */
  baseData?: readonly ComparableRecord[] | null;
}

/** What a driver writes for one lens, or for one part of it. */
export interface LensOutput {
  /** One line of JSON per record, per capture, in request order. */
  lines: { baseEngine: string[]; headEngine: string[]; baseData: string[] };
  /** One line per pair of records that failed a comparison, both sides in it. */
  failingRecords: string[];
  /**
   * One line per unit of these records that holds a discrete or shape difference no declared transition matches,
   * written as a description declares it, with the reason left out. None under C0, which matches no line.
   */
  transitionLines: string[];
}

export interface RunSummary {
  changeClass: ChangeClass;
  passed: boolean;
  /** One line per reason the run failed. */
  failures: string[];
  /** One line per finding that does not fail the run and that a reader must not miss. */
  warnings: string[];
  lenses: number;
  counts: { baseEngine: PayloadCounts; headEngine: PayloadCounts };
  engine: ComparisonTally;
  /**
   * Records of compared lenses that threw on both engines. Two such records are equal and compare nothing, so each
   * fails the run in every class.
   */
  thrownOnBothEngines: { records: number; samples: Finding[] };
  /** Lenses whose data changed without changing its fingerprint, and how their records compared. */
  formatOnly: ComparisonTally & { lenses: string[] };
  dataImpact: DataImpact[];
  pairs: PairDifferences;
  /**
   * Lenses the base engine could not evaluate, with what it said. `unasked` marks a converter pair the pair lists
   * set aside and this run asked nothing of: it is no lens of the run.
   */
  uncompared: { lens: string; reason: string; unasked?: true }[];
  exceptions: {
    declared: string[];
    /** Uncompared and not declared. */
    undeclared: string[];
    /** Declared and compared. */
    comparable: string[];
    /** Declared and not in the run. */
    unknown: string[];
  };
  transitions: {
    /** Each declared transition, in the order written, with what the run found for it. */
    declared: TransitionResult[];
    /**
     * Units with a discrete or shape difference that a line could declare and no declared transition matches. A run
     * counts every one.
     */
    undeclared: number;
    /** The first of them, each as the line that would declare it, with the reason left out. */
    undeclaredLines: string[];
    /**
     * Units with a discrete or shape difference that also hold what no line excuses (`TransitionOutcome`,
     * `contract`). A run writes no line for one, and its differences fail declared or not. The samples are the
     * first of them, each as its record, its unit and the first thing found.
     */
    breached: { units: number; samples: string[] };
    /**
     * Records with more discrete and shape differences than a run holds to sort into units. Nothing of such a record
     * is matched against a declared transition, so every one of those differences fails as undeclared.
     */
    overflow: { records: number; samples: string[] };
  };
}

export interface DifferentialRun {
  /**
   * Compare one lens's records, or the next part of them, and fold the result into the run.
   *
   * A lens handed over in parts is reported as it would be whole: it counts once, and whether the base engine can
   * evaluate it is decided by its first part.
   *
   * @param captures - the records captured for the lens, or for one part of its requests
   * @returns the text a driver writes for those records
   * @throws when two captures do not answer the same requests in the same order
   */
  addLens(captures: LensCaptures): LensOutput;
  /**
   * Close the run.
   *
   * @returns totals, findings and the verdict
   */
  finish(): RunSummary;
}

/* A status that is a failure: one that says `failed`. The engine writes three: `failed` for a traced ray, in a full
 * trace or in the digest of a nested one, `bracket-failed` for a chief-ray solve and `evaluation-failed` for a root
 * solve or a sensor lock. A semantic data change may not turn a status that is none of them into one of them, except
 * where the head ray's clip events show a non-intersection clip before its intersection failure. Every
 * other status is an outcome a prescription can legitimately move between: clipped, missed-sensor, chief-unreachable,
 * outside the projection domain, unbracketed, an iteration limit, a paraxial fallback, unavailable.
 *
 * The fans of a traces record are traced on past a rim. A ray carries no result after its first clip, so a later
 * intersection failure is a continuation diagnostic, counted and listed without blocking. A failure at the first
 * clip, or without clip events to prove the order (a nested trace digest), still blocks. The base status need only
 * be no failure: `clipped` to `failed` without that evidence and `unbracketed` to `evaluation-failed` still block. */
const FAILED_STATUS = /failed/;

/** Whether a status that changed between the two sides of a data change blocks it. */
function turnedToFailure(base: string, head: string): boolean {
  return !FAILED_STATUS.test(base) && FAILED_STATUS.test(head);
}

/** A full ray's clip events are in path order, including folded paths whose surface indexes can decrease. */
function failureAfterFirstClip(status: string, ray: Record<string, unknown> | undefined): boolean {
  if (status !== "failed" || !isContainer(ray?.hits)) return false;
  const diagnostics = ray?.diagnostics as { clipEvents?: { reason?: unknown }[] } | undefined;
  const events = diagnostics?.clipEvents;
  if (!Array.isArray(events)) return false;
  const failedAt = events.findIndex((event) => event?.reason === "intersection-failure");
  return events.some(
    (event, index) => index < failedAt && typeof event?.reason === "string" && event.reason !== "intersection-failure",
  );
}

/** What a data change may turn from good to bad at a path both sides have, as the members of `ImpactPaths`. */
type ImpactBlocker = "statuses" | "numbers" | "outcomes";

/** How a status change is written where one side has no status at the path. */
const NO_STATUS = "absent";
const STATUS_CHANGE_ARROW = " -> ";

function emptyImpactPaths(): ImpactPaths {
  return {
    statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 0 },
    numbers: { toNonFinite: 0, fromNonFinite: 0 },
    outcomes: { toThrown: 0, fromThrown: 0 },
    baseOnly: { statuses: 0, failedStatuses: 0, nonFinite: 0 },
    headOnly: { statuses: 0, failedStatuses: 0, nonFinite: 0 },
    resized: { arrays: 0, listed: [] },
    statusChanges: {},
    statusChangesAfterFirstClip: {},
    statusChangesUnlisted: 0,
  };
}

/** How many blockers of one kind a lens's records have shown so far. */
function blockersOf(paths: ImpactPaths, blocker: ImpactBlocker): number {
  if (blocker === "statuses") return paths.statuses.toFailure - paths.statuses.afterFirstClip;
  return blocker === "numbers" ? paths.numbers.toNonFinite : paths.outcomes.toThrown;
}

/**
 * Judge one pair of records of a semantic data change, path by path, and fold what it finds into the lens's counts.
 *
 * What blocks is at a path both sides have, and turned from good to bad there:
 * - a status that is no failure on the base data and a failure on the head data, unless the head ray's own clip
 *   events show a clip before its intersection failure;
 * - a number the engine computed that is finite on the base data and not on the head data;
 * - an outcome, of the record itself or of a job or a probe inside it, that returned on the base data and throws on
 *   the head data.
 *
 * What only one side has is counted and blocks nothing, failures included: the head data's is work the base data
 * never did, and the base data's is work no longer done. Where that work stopped because something above it failed,
 * the status above it is at a path both sides have, and blocks by the first rule.
 *
 * This walk is the rule's own. The paired walk of the engine comparison reports an array of another length once and
 * does not enter it, which hid a status that turned to a failure there. This one pairs such an array by index: its
 * first elements are at paths both sides have, and the rest belong to the longer side alone. That sets the same
 * things side by side only while nothing was put in or taken out ahead of them, so each such array that holds a
 * status, an outcome or a computed number that is not finite is reported. A value that is a container on one side
 * and something else on the other, or a number against anything that is none, is each side's alone.
 *
 * A status or a non-finite number that hands the prescription back was authored, and is no part of the rule: the
 * `status` of a source erratum, the focal length of a plane element.
 *
 * The digest of a nested trace is an object at a path both sides have, and its members are read like any others:
 * its `status` is a status, and its hit count, largest residual share and largest effective tolerance are numbers.
 * Its `hash` and `outcome` are neither, so what changed inside the trace blocks only through those members. A ray
 * that fails inside a pupil bundle, whose digest has no status, is outside the rule.
 *
 * @param base - a record of the base data on the head engine
 * @param head - the record of the head data for the same request
 * @param paths - the lens's counts, which this adds to; its list of resized arrays is the caller's to fill
 * @param block - called for each blocker with its kind, its path and the two values
 * @param resized - called for each array that changed length and holds what the rule reads, with its path
 */
function judgeDataChange(
  base: ComparableRecord,
  head: ComparableRecord,
  paths: ImpactPaths,
  block: (blocker: ImpactBlocker, path: string, base: unknown, head: unknown) => void,
  resized: (path: string, base: readonly unknown[], head: readonly unknown[]) => void,
): void {
  const keys: (string | number)[] = [];
  /* The path as the budget table reads it, with "[]" for an array level. */
  const segments: string[] = [];
  const pathOf = () =>
    keys.reduce<string>(
      (path, key) => (typeof key === "number" ? `${path}[${key}]` : path ? `${path}.${key}` : key),
      "",
    );
  /* Whether the field at the current path hands the prescription back, by the budget table. A record has few
   * distinct paths and many leaves at each, so the answer is kept per path. */
  const authoredAt = new Map<string, boolean>();
  const authored = (): boolean => {
    const pattern = JSON.stringify(segments);
    let answer = authoredAt.get(pattern);
    if (answer === undefined) {
      answer = resolveBudgetRule(head.request, segments)?.authored === true;
      authoredAt.set(pattern, answer);
    }
    return answer;
  };
  /* A status is a string in a member named `status` that the engine wrote. */
  const isStatusHere = (value: unknown): value is string =>
    typeof value === "string" && segments[segments.length - 1] === "status" && !authored();
  const noteStatus = (was: string | null, is: string | null, afterFirstClip = false) => {
    const change = `${was ?? NO_STATUS}${STATUS_CHANGE_ARROW}${is ?? NO_STATUS}`;
    if (Object.hasOwn(paths.statusChanges, change)) paths.statusChanges[change]++;
    else if (Object.keys(paths.statusChanges).length < MAX_STATUS_CHANGES) paths.statusChanges[change] = 1;
    else paths.statusChangesUnlisted++;
    if (afterFirstClip && Object.hasOwn(paths.statusChanges, change)) {
      paths.statusChangesAfterFirstClip[change] = (paths.statusChangesAfterFirstClip[change] ?? 0) + 1;
    }
  };

  /** Count what one side alone holds at the current path and under it. */
  const alone = (value: unknown, which: "baseOnly" | "headOnly"): void => {
    const side = paths[which];
    if (!isContainer(value)) {
      if (isStatusHere(value)) {
        side.statuses++;
        if (FAILED_STATUS.test(value)) side.failedStatuses++;
        noteStatus(which === "baseOnly" ? value : null, which === "headOnly" ? value : null);
        return;
      }
      const number = numberOf(value);
      if (number !== undefined && !Number.isFinite(number) && !authored()) side.nonFinite++;
      return;
    }
    if (Array.isArray(value)) {
      segments.push("[]");
      for (const item of value) alone(item, which);
      segments.pop();
      return;
    }
    for (const [key, member] of Object.entries(value)) {
      segments.push(key);
      alone(member, which);
      segments.pop();
    }
  };

  /**
   * Whether a value at the current path holds, at any depth, what the rule reads: a status, an outcome or a
   * computed number that is not finite.
   */
  const holdsWhatGates = (value: unknown): boolean => {
    if (!isContainer(value)) {
      if (isStatusHere(value) || (typeof value === "boolean" && segments[segments.length - 1] === "ok")) return true;
      const number = numberOf(value);
      return number !== undefined && !Number.isFinite(number) && !authored();
    }
    if (Array.isArray(value)) {
      segments.push("[]");
      const found = value.some((item) => holdsWhatGates(item));
      segments.pop();
      return found;
    }
    return Object.entries(value).some(([key, member]) => {
      segments.push(key);
      const found = holdsWhatGates(member);
      segments.pop();
      return found;
    });
  };

  /** Compare what both sides hold at the current path. */
  const both = (a: unknown, b: unknown, headOwner?: Record<string, unknown>): void => {
    if (a === b) return;
    const [aIsArray, bIsArray] = [Array.isArray(a), Array.isArray(b)];
    if (isContainer(a) && isContainer(b) && aIsArray === bIsArray) {
      if (aIsArray) {
        const [items, others] = [a as unknown[], b as unknown[]];
        const common = Math.min(items.length, others.length);
        if (items.length !== others.length && (holdsWhatGates(items) || holdsWhatGates(others))) {
          paths.resized.arrays++;
          resized(pathOf(), items, others);
        }
        segments.push("[]");
        for (let index = 0; index < common; index++) {
          keys.push(index);
          both(items[index], others[index]);
          keys.pop();
        }
        for (let index = common; index < items.length; index++) alone(items[index], "baseOnly");
        for (let index = common; index < others.length; index++) alone(others[index], "headOnly");
        segments.pop();
        return;
      }
      const [members, others] = [a as Record<string, unknown>, b as Record<string, unknown>];
      for (const key of Object.keys(members)) {
        keys.push(key);
        segments.push(key);
        if (Object.hasOwn(others, key)) both(members[key], others[key], others);
        else alone(members[key], "baseOnly");
        segments.pop();
        keys.pop();
      }
      for (const key of Object.keys(others)) {
        if (Object.hasOwn(members, key)) continue;
        segments.push(key);
        alone(others[key], "headOnly");
        segments.pop();
      }
      return;
    }
    if (isStatusHere(a) && isStatusHere(b)) {
      const afterFirstClip = turnedToFailure(a, b) && failureAfterFirstClip(b, headOwner);
      noteStatus(a, b, afterFirstClip);
      if (turnedToFailure(b, a)) paths.statuses.fromFailure++;
      if (turnedToFailure(a, b)) {
        paths.statuses.toFailure++;
        if (afterFirstClip) paths.statuses.afterFirstClip++;
        else block("statuses", pathOf(), a, b);
      }
      return;
    }
    const key = keys[keys.length - 1];
    if (key === "ok" && typeof a === "boolean" && typeof b === "boolean") {
      if (b) paths.outcomes.fromThrown++;
      else {
        paths.outcomes.toThrown++;
        block("outcomes", pathOf(), a, b);
      }
      return;
    }
    const [x, y] = [numberOf(a), numberOf(b)];
    if (x !== undefined && y !== undefined) {
      if (Number.isFinite(x) === Number.isFinite(y) || authored()) return;
      if (Number.isFinite(y)) paths.numbers.fromNonFinite++;
      else {
        paths.numbers.toNonFinite++;
        block("numbers", pathOf(), a, b);
      }
      return;
    }
    /* Two values of different kinds, or a status or a number against something that is none: each side holds alone
     * what it has here. */
    alone(a, "baseOnly");
    alone(b, "headOnly");
  };

  /* Budget paths start under a record's value, so the outcome of the record itself is read here. */
  const [was, is] = [base.payload, head.payload];
  if (was.ok && is.ok) both(was.value, is.value);
  else if (was.ok) {
    paths.outcomes.toThrown++;
    block("outcomes", "ok", true, false);
    alone(was.value, "baseOnly");
  } else if (is.ok) {
    paths.outcomes.fromThrown++;
    alone(is.value, "headOnly");
  }
}

/** The failed statuses and computed non-finite numbers of a record with no base data to set it beside. */
interface BlockerCounts {
  failedStatuses: number;
  /** Non-finite numbers the engine computed; one that hands an authored value back is not counted. */
  nonFinite: number;
}

/**
 * Count the failed statuses and the computed non-finite numbers of one record of a new lens.
 *
 * @param record - a payload record
 * @returns the counts; zero for a record that threw, which has nothing to count
 */
function countBlockers(record: ComparableRecord): BlockerCounts {
  const counts: BlockerCounts = { failedStatuses: 0, nonFinite: 0 };
  if (!record.payload.ok) return counts;
  const segments: string[] = [];
  const visit = (value: unknown): void => {
    if (!isContainer(value)) {
      const number = numberOf(value);
      if (number === undefined || Number.isFinite(number)) return;
      if (!resolveBudgetRule(record.request, segments)?.authored) counts.nonFinite++;
      return;
    }
    if (Array.isArray(value)) {
      segments.push("[]");
      for (const item of value) visit(item);
      segments.pop();
      return;
    }
    const members = value as Record<string, unknown>;
    for (const key of Object.keys(members)) {
      segments.push(key);
      const member = members[key];
      /* A status the prescription hands back was authored, like a non-finite number there. */
      if (key === "status" && typeof member === "string") {
        if (FAILED_STATUS.test(member) && !resolveBudgetRule(record.request, segments)?.authored) {
          counts.failedStatuses++;
        }
      } else visit(member);
      segments.pop();
    }
  };
  visit(record.payload.value);
  return counts;
}

/**
 * Why the base engine could not evaluate a lens the head engine can, or null when it could.
 *
 * A lens is uncompared when the base engine cannot build it at all: a prescription in a format the base predates.
 * A lens that builds on both and then differs is a comparison. One that fails alike on both is compared too, and
 * its records that threw are counted as such. The pair lists put this question to each engine about every converter
 * pair before any lens is captured, as the pair's build record, which is the record a run then holds for it.
 */
function baseCannotEvaluate(
  baseEngine: readonly ComparableRecord[],
  headEngine: readonly ComparableRecord[],
): string | null {
  const reasonAt = (index: number) => {
    const payload = baseEngine[index].payload;
    return payload.ok ? null : `${payload.error.name}: ${payload.error.message}`;
  };
  const build = headEngine.findIndex((record) => record.request === "build");
  if (build >= 0) return headEngine[build].payload.ok ? reasonAt(build) : null;
  /* A request list without build constants: nothing the base returned, something the head did. */
  const nothingOnBase = baseEngine.every((record) => !record.payload.ok);
  return nothingOnBase && headEngine.some((record) => record.payload.ok) ? reasonAt(0) : null;
}

/**
 * Start a differential run.
 *
 * The run makes three comparisons, each with its own rule for what fails:
 * - engine drift, one prescription on two engines, under the declared class. C0: any difference. C1 and C2: a
 *   number beyond its budget, a non-finite mismatch, a residual outside its tolerance, an unclassified number
 *   that moved, and every discrete or shape transition the change does not declare. A changed iteration count or
 *   trace digest is counted and does not fail by itself. C3: nothing; the differences are reported.
 * - a format-only data change, two prescriptions on the head engine: any difference, in every class.
 * - a semantic data change, two prescriptions on the head engine, path by path (`judgeDataChange`): a status that
 *   turned to a failure, a computed number that turned non-finite, or a record or job that returned and now throws,
 *   which is how a lens that no longer builds shows. Each is at a path both sides have. A ray's failure after its
 *   first clip is counted without blocking where its clip events prove that order. What only one side has is
 *   counted, and everything else is reported for review.
 * - a new lens has no base data, and neither has a converter pair that only the head prescriptions permit: each
 *   blocks only by not building.
 *
 * Two findings fail a run apart from those comparisons. A record that throws on both engines fails it in every
 * class: the harness runs on both sides, so a defect in a capture throws alike on both, and two equal failures would
 * otherwise pass as a comparison. And the engines must permit the same converter pairs for the same prescriptions,
 * under every class but C3.
 *
 * Above C0 a discrete or shape transition fails the run unless the change declares its unit, and a declared
 * transition that is not what the run found fails it too (see "Declared transitions" below). That holds for engine
 * drift alone: a declared transition excuses nothing in the other comparisons. Under C0 a change that declares any
 * fails, and under C3 the declared ones are matched and reported.
 *
 * @param options - the declared class, exceptions and transitions
 * @returns the run
 * @throws when a declared transition cannot be read
 */
export function createDifferentialRun(options: RunOptions): DifferentialRun {
  const { changeClass } = options;
  const rules = new Map<string, Map<string, BudgetRule | null>>();
  const engine = emptyTally();
  const format = emptyTally();
  const formatLenses: string[] = [];
  const dataImpact: DataImpact[] = [];
  const counts = { baseEngine: emptyPayloadCounts(), headEngine: emptyPayloadCounts() };
  const uncompared: RunSummary["uncompared"] = [];
  const compared = new Set<string>();
  /* The converter pairs the pair lists set aside, each with what the base engine said. Whether a pair is compared
   * was decided there, once, and that answer stands in a run that meets the pair as in one that does not. */
  const setAside = new Map(options.pairs?.uncompared.map(({ lens, reason }) => [lens, reason]));
  const thrown: RunSummary["thrownOnBothEngines"] = { records: 0, samples: [] };
  /* Lenses that do not build on their head data on either engine, and that the data rules judge for it. */
  const unbuilt = new Set<string>();
  /* Every lens met so far, and the data-impact entry of each that has one: a later part of a lens adds to it. */
  const met = new Set<string>();
  const impacts = new Map<string, { entry: DataImpact; tally: ComparisonTally }>();

  const findingOf = (comparison: ComparisonName, record: ComparableRecord, difference: RawDifference): Finding => ({
    comparison,
    lens: record.lens,
    state: stateId(record.state),
    request: record.request,
    ...(record.variant === undefined ? {} : { variant: record.variant }),
    path: difference.path,
    kind: difference.kind,
    quantity: difference.quantity,
    base: describe(difference.base),
    head: describe(difference.head),
    measure: difference.measure,
    budget: difference.budget,
  });

  const thrownFinding = (base: ComparableRecord, head: ComparableRecord): Finding => {
    const said = ({ payload }: ComparableRecord) =>
      payload.ok ? "true" : `false (${payload.error.name}: ${payload.error.message})`;
    return {
      comparison: "engine",
      lens: head.lens,
      state: stateId(head.state),
      request: head.request,
      ...(head.variant === undefined ? {} : { variant: head.variant }),
      path: "ok",
      kind: "discrete",
      quantity: null,
      base: said(base),
      head: said(head),
      measure: null,
      budget: null,
    };
  };

  /** Walk a pair of records that differ, and fold each difference into a tally. Returns how many of them fail. */
  const tallyDifferences = (
    comparison: ComparisonName,
    base: ComparableRecord,
    head: ComparableRecord,
    tally: ComparisonTally,
    fails: (difference: RawDifference) => boolean,
  ): number => {
    let failing = 0;
    tally.recordsDiffering++;
    diffRecords(base, head, changeClass, rules, (difference) => {
      const { kind, quantity, measure, budget } = difference;
      tally.differences[kind]++;
      let finding: Finding | undefined;
      const located = () => (finding ??= findingOf(comparison, base, difference));

      /* Every kind is a pair of numbers except a shape, a digest and a discrete change of something else. */
      if (kind !== "shape" && kind !== "digest" && (kind !== "discrete" || quantity !== null)) tally.numbersDiffering++;
      if (quantity !== null) {
        const entry = (tally.quantities[quantity] ??= { differing: 0, beyondBudget: 0, largest: null });
        entry.differing++;
        if (measure !== null) {
          if (budget !== null && Math.abs(measure) > budget) entry.beyondBudget++;
          if (entry.largest === null || Math.abs(measure) > Math.abs(entry.largest.measure ?? 0)) {
            entry.largest = located();
          }
        }
      }
      if (kind === "iterations" && measure !== null) {
        const change = measure > 0 ? `+${measure}` : String(measure);
        tally.iterationChanges[change] = (tally.iterationChanges[change] ?? 0) + 1;
      }
      if (kind === "unclassified") {
        const path = `${base.request}:${difference.pattern}`;
        if (tally.unclassified.length < MAX_UNCLASSIFIED_PATHS && !tally.unclassified.includes(path)) {
          tally.unclassified.push(path);
        }
      }
      if (kind === "discrete" || kind === "shape") {
        tally.transitions++;
        if (tally.transitionSamples.length < MAX_SAMPLES) tally.transitionSamples.push(located());
      }
      if (kind === "digest") {
        const { byRequest, lenses } = tally.digests;
        byRequest[base.request] = (byRequest[base.request] ?? 0) + 1;
        /* A lens's records arrive together, so its id can only repeat the last one listed. */
        if (lenses[lenses.length - 1] !== base.lens) lenses.push(base.lens);
      }
      if (fails(difference)) {
        failing++;
        tally.failing++;
        if (tally.failures.length < MAX_SAMPLES) tally.failures.push(located());
      }
    });
    return failing;
  };

  const failsEngine = (difference: RawDifference): boolean => {
    if (changeClass === "c0") return true;
    if (changeClass === "c3") return false;
    if (difference.kind === "iterations" || difference.kind === "digest") return false;
    if (difference.kind !== "number") return true;
    return difference.measure !== null && difference.budget !== null && difference.measure > difference.budget;
  };
  const ledger = createTransitionLedger(options, rules, failsEngine);

  /** The data-impact entry of a lens and the tally behind it, opened by the first part of the lens that needs one. */
  const impactOf = (lens: string, change: DataImpact["change"]) => {
    let impact = impacts.get(lens);
    if (!impact) {
      const entry: DataImpact = {
        lens,
        change,
        records: 0,
        recordsDiffering: 0,
        numbersDiffering: 0,
        transitions: 0,
        largest: [],
        blocking: 0,
        blockers: [],
      };
      impact = { entry, tally: emptyTally() };
      impacts.set(lens, impact);
      dataImpact.push(entry);
    }
    return impact;
  };

  const sameRequests = (a: readonly ComparableRecord[], b: readonly ComparableRecord[]) =>
    a.length === b.length &&
    a.every(
      (record, index) =>
        record.lens === b[index].lens &&
        record.request === b[index].request &&
        record.variant === b[index].variant &&
        stateId(record.state) === stateId(b[index].state),
    );

  const addLens = ({ lens, dataChange, baseEngine, headEngine, baseData }: LensCaptures): LensOutput => {
    const needsBaseData = dataChange === "format" || dataChange === "semantic";
    if (!sameRequests(baseEngine, headEngine) || (needsBaseData && !(baseData && sameRequests(baseData, headEngine)))) {
      throw new Error(`engineDiff: the captures of ${lens} do not answer the same requests in the same order`);
    }
    baseEngine = baseEngine.map((record, index) => withoutRetiredLegacyCapture(record, headEngine[index]));
    const firstPart = !met.has(lens);
    met.add(lens);
    const lines = {
      baseEngine: baseEngine.map((record) => JSON.stringify(record)),
      headEngine: headEngine.map((record) => JSON.stringify(record)),
      baseData: needsBaseData && baseData ? baseData.map((record) => JSON.stringify(record)) : [],
    };
    const failingRecords: string[] = [];
    const transitionLines: string[] = [];
    const keepPair = (comparison: ComparisonName, index: number, baseLine: string) =>
      failingRecords.push(`{"comparison":"${comparison}","base":${baseLine},"head":${lines.headEngine[index]}}`);

    for (const record of baseEngine) countRecord(record, counts.baseEngine);
    const numbersAt = headEngine.map((record) => countRecord(record, counts.headEngine));

    /* Engine drift. The encoded records are compared as text first; only a pair that differs is walked. */
    if (firstPart) {
      const unevaluated = setAside.get(lens) ?? baseCannotEvaluate(baseEngine, headEngine);
      if (unevaluated !== null) uncompared.push({ lens, reason: unevaluated });
      else compared.add(lens);
      /* A lens that builds on neither engine has nothing but thrown records. The data rules judge it when its data
       * is new, which blocks by not building, or changed from a prescription that built, which blocks by no longer
       * building. With the same data on both sides nothing else would, so its thrown records count below. */
      const build = headEngine.findIndex((record) => record.request === "build");
      const buildsNowhere = build >= 0 && !headEngine[build].payload.ok && !baseEngine[build].payload.ok;
      const builtBefore = needsBaseData && baseData?.[build]?.payload.ok === true;
      if (buildsNowhere && (dataChange === "new" || builtBefore)) unbuilt.add(lens);
    }
    if (compared.has(lens)) {
      headEngine.forEach((head, index) => {
        engine.records++;
        engine.numbers += numbersAt[index];
        const base = baseEngine[index];
        const threwOnBoth = !base.payload.ok && !head.payload.ok && !unbuilt.has(lens);
        if (threwOnBoth) {
          thrown.records++;
          if (thrown.samples.length < MAX_SAMPLES) thrown.samples.push(thrownFinding(base, head));
        }
        /* A declared transition is held to the pair whether it differs or not: one that names an unchanged record
         * declares what did not happen. */
        const differs = lines.baseEngine[index] !== lines.headEngine[index];
        const judged = ledger.judge(base, head, differs);
        transitionLines.push(...judged.lines);
        const failing = differs ? tallyDifferences("engine", base, head, engine, judged.fails) : 0;
        if (failing > 0 || threwOnBoth) keepPair("engine", index, lines.baseEngine[index]);
      });
    } else {
      for (const head of headEngine) ledger.uncompared(head);
    }

    if (dataChange === "format" && baseData) {
      if (firstPart) formatLenses.push(lens);
      headEngine.forEach((head, index) => {
        format.records++;
        format.numbers += numbersAt[index];
        if (lines.baseData[index] === lines.headEngine[index]) return;
        tallyDifferences("format", baseData[index], head, format, () => true);
        keepPair("format", index, lines.baseData[index]);
      });
    }

    if (dataChange === "semantic" && baseData) {
      const { entry, tally } = impactOf(lens, "semantic");
      const paths = (entry.paths ??= emptyImpactPaths());
      headEngine.forEach((head, index) => {
        tally.records++;
        if (lines.baseData[index] === lines.headEngine[index]) return;
        const base = baseData[index];
        /* The paired walk gives the report its totals and its largest differences. What blocks is judged apart,
         * path by path, by a walk that enters what the paired one does not. */
        tallyDifferences("impact", base, head, tally, () => false);
        const blockingBefore = entry.blocking;
        const located = (path: string, kind: DifferenceKind, was: unknown, is: unknown): Finding => ({
          comparison: "impact",
          lens,
          state: stateId(head.state),
          request: head.request,
          ...(head.variant === undefined ? {} : { variant: head.variant }),
          path,
          kind,
          quantity: null,
          base: describe(was),
          head: describe(is),
          measure: null,
          budget: null,
        });
        judgeDataChange(
          base,
          head,
          paths,
          (blocker, path, was, is) => {
            /* Every blocker is counted, and the verdict reads the count. The list keeps the first of each kind, so
             * one kind cannot crowd the paths of another out of the report. */
            entry.blocking++;
            if (blockersOf(paths, blocker) > MAX_IMPACT_BLOCKERS) return;
            entry.blockers.push(located(path, blocker === "numbers" ? "nonFinite" : "discrete", was, is));
          },
          (path, was, is) => {
            /* Counted by the walk; the list keeps the first of them. */
            if (paths.resized.listed.length < MAX_IMPACT_BLOCKERS) {
              paths.resized.listed.push(located(path, "shape", was, is));
            }
          },
        );
        if (entry.blocking > blockingBefore) keepPair("impact", index, lines.baseData[index]);
      });
      /* A count or another exact field has no budget to be ranked by, and follows the numbers that do. */
      const pastBudget = (finding: Finding) => (finding.budget ? Math.abs(finding.measure ?? 0) / finding.budget : 0);
      entry.records = tally.records;
      entry.recordsDiffering = tally.recordsDiffering;
      entry.numbersDiffering = tally.numbersDiffering;
      entry.transitions = tally.transitions;
      entry.largest = Object.values(tally.quantities)
        .flatMap((quantity) => (quantity.largest ? [quantity.largest] : []))
        .sort((a, b) => pastBudget(b) - pastBudget(a));
    }

    if (dataChange === "new") {
      /* There is no base data to compare a new lens with. It blocks only by not building. */
      const blockers = headEngine
        .filter((record) => record.request === "build" && !record.payload.ok)
        .map(
          (record): Finding => ({
            comparison: "impact",
            lens,
            state: stateId(record.state),
            request: record.request,
            path: "ok",
            kind: "discrete",
            quantity: null,
            base: "absent",
            head: record.payload.ok ? "true" : `false (${record.payload.error.message})`,
            measure: null,
            budget: null,
          }),
        );
      const { entry } = impactOf(lens, "new");
      entry.records += headEngine.length;
      entry.blocking += blockers.length;
      entry.blockers.push(...blockers);
      /* There is no base data to pair a path of these records with, so what they hold is counted record by record
       * and gates nothing. */
      (entry.recordCounts ??= []).push(
        ...headEngine.map(
          (record): RecordCounts => ({
            state: stateId(record.state),
            request: record.request,
            ...(record.variant === undefined ? {} : { variant: record.variant }),
            ...countBlockers(record),
            ...(record.payload.ok ? {} : { threw: true }),
          }),
        ),
      );
    }

    return { lines, failingRecords, transitionLines };
  };

  const finish = (): RunSummary => {
    const pairs: PairDifferences = options.pairs ?? {
      baseEngineOnly: [],
      headEngineOnly: [],
      baseDataOnly: [],
      headDataOnly: [],
      uncompared: [],
      lostEveryPair: [],
    };
    /* A pair the lists set aside is an uncompared lens whether or not this run asked anything of it, so that one
     * list of declared exceptions holds for every run of the tier. One the run did ask is listed already. */
    for (const pair of pairs.uncompared) {
      if (!uncompared.some((entry) => entry.lens === pair.lens)) uncompared.push({ ...pair, unasked: true });
    }
    const declared = [...new Set(options.declaredExceptions)].sort();
    const uncomparedIds = new Set(uncompared.map((entry) => entry.lens));
    const exceptions = {
      declared,
      undeclared: [...uncomparedIds].filter((lens) => !declared.includes(lens)).sort(),
      comparable: declared.filter((lens) => compared.has(lens)),
      unknown: declared.filter((lens) => !compared.has(lens) && !uncomparedIds.has(lens)),
    };
    const transitions = ledger.finish(met);
    const blocking = dataImpact.reduce((total, impact) => total + impact.blocking, 0);
    const several = (count: number, noun: string) => `${count} ${noun}${count === 1 ? "" : "s"}`;
    /* The fit predicate is engine code, so two answers for one set of prescriptions are engine drift, and a
     * transition under every class that gates one. */
    const pairDrift = [
      ...(pairs.baseEngineOnly.length > 0 ? [`the base engine alone permits ${pairs.baseEngineOnly.join(", ")}`] : []),
      ...(pairs.headEngineOnly.length > 0 ? [`the head engine alone permits ${pairs.headEngineOnly.join(", ")}`] : []),
    ];
    const thrownNamed = thrown.samples
      .slice(0, MAX_NAMED_IN_FAILURE)
      .map((finding) => `${finding.lens} ${requestLabel(finding)} at ${finding.state}`);
    const failures = [
      ...(engine.failing > 0
        ? [`Engine drift: ${several(engine.failing, "difference")} not allowed under ${changeClass.toUpperCase()}.`]
        : []),
      ...transitionFailures(transitions, changeClass),
      ...(thrown.records > 0
        ? [
            `Threw on both engines, which compares nothing: ${several(thrown.records, "record")} ` +
              `(${thrownNamed.join("; ")}${thrown.records > thrownNamed.length ? "; and more" : ""}).`,
          ]
        : []),
      ...(pairDrift.length > 0 && changeClass !== "c3"
        ? [`Converter pairs: the engines permit different pairs for the head prescriptions: ${pairDrift.join("; ")}.`]
        : []),
      ...(format.failing > 0
        ? [`Format-only data change: ${several(format.failing, "difference")}; the records must be bit-identical.`]
        : []),
      ...(blocking > 0 ? [`Data impact: ${several(blocking, "blocking difference")}.`] : []),
      ...(exceptions.undeclared.length > 0
        ? [`Not compared and not declared as an exception: ${exceptions.undeclared.join(", ")}.`]
        : []),
      ...(exceptions.comparable.length > 0
        ? [`Declared as an exception and compared after all: ${exceptions.comparable.join(", ")}.`]
        : []),
      ...(exceptions.unknown.length > 0 && !options.restricted
        ? [`Declared as an exception and not in the run: ${exceptions.unknown.join(", ")}.`]
        : []),
    ];
    /* The plan gates a data change on a failed status, a non-finite value or a lens that no longer builds. A
     * converter that fits nothing any more is none of those, and nothing in the run evaluated it. */
    const warnings = pairs.lostEveryPair.map(({ kind, key, pairs: lost }) =>
      kind === "converter"
        ? `The changed converter ${key} lost every pair it had with the base data and was compared through none: ` +
          `${lost.join(", ")}.`
        : `The changed host ${key} lost every converter pair it had with the base data, and none was compared: ` +
          `${lost.join(", ")}.`,
    );
    return {
      changeClass,
      passed: failures.length === 0,
      failures,
      warnings,
      lenses: met.size,
      counts,
      engine,
      thrownOnBothEngines: thrown,
      formatOnly: { ...format, lenses: formatLenses },
      dataImpact,
      pairs,
      uncompared,
      exceptions,
      transitions,
    };
  };

  return { addLens, finish };
}

/* ── Catalog changes ── */

/** The part of a serialized catalog a change classification reads. */
export interface CatalogPrescriptions {
  lenses: readonly { key: string; prescription: EncodedValue }[];
  teleconverters: readonly { key: string; prescription: EncodedValue }[];
}

/** Semantic fingerprints of a catalog, by key. */
export interface CatalogFingerprints {
  lenses: Record<string, string>;
  teleconverters: Record<string, string>;
}

type ChangedData = Exclude<DataChange, "unchanged">;

export interface CatalogChanges {
  /** Head lens keys whose prescription is not the base's, and how. */
  lenses: Record<string, ChangedData>;
  teleconverters: Record<string, ChangedData>;
  /** Base keys the head no longer has. */
  removedLenses: string[];
  removedTeleconverters: string[];
}

function classifyEntries(
  base: CatalogPrescriptions["lenses"],
  head: CatalogPrescriptions["lenses"],
  baseFingerprints: Record<string, string>,
  headFingerprints: Record<string, string>,
): { changed: Record<string, ChangedData>; removed: string[] } {
  const baseText = new Map(base.map(({ key, prescription }) => [key, JSON.stringify(prescription)]));
  const changed: Record<string, ChangedData> = {};
  for (const { key, prescription } of head) {
    const before = baseText.get(key);
    if (before === undefined) changed[key] = "new";
    else if (before !== JSON.stringify(prescription)) {
      changed[key] = baseFingerprints[key] === headFingerprints[key] ? "format" : "semantic";
    }
  }
  const headKeys = new Set(head.map(({ key }) => key));
  return { changed, removed: [...baseText.keys()].filter((key) => !headKeys.has(key)) };
}

/**
 * Sort the differences between two serialized catalogs.
 *
 * Prescriptions are compared as evaluated data, so an edit to a file's comments or layout is no change at all. Both
 * sets of fingerprints must come from one engine's rules, or equal data could look changed.
 *
 * @param base - the base ref's prescriptions
 * @param head - the head's prescriptions
 * @param baseFingerprints - fingerprints of the base's, by key
 * @param headFingerprints - fingerprints of the head's, by key
 * @returns each changed or new head key with its kind of change, and the removed keys
 */
export function classifyCatalogChanges(
  base: CatalogPrescriptions,
  head: CatalogPrescriptions,
  baseFingerprints: CatalogFingerprints,
  headFingerprints: CatalogFingerprints,
): CatalogChanges {
  const lenses = classifyEntries(base.lenses, head.lenses, baseFingerprints.lenses, headFingerprints.lenses);
  const teleconverters = classifyEntries(
    base.teleconverters,
    head.teleconverters,
    baseFingerprints.teleconverters,
    headFingerprints.teleconverters,
  );
  return {
    lenses: lenses.changed,
    teleconverters: teleconverters.changed,
    removedLenses: lenses.removed,
    removedTeleconverters: teleconverters.removed,
  };
}

const CHANGE_RANK: Record<DataChange, number> = { unchanged: 0, format: 1, semantic: 2, new: 3 };

/**
 * How the data behind a lens reference changed: a pair changes with its host or its converter, whichever more.
 *
 * A pair that the base prescriptions do not permit is new, however its host and its converter changed. The head
 * engine cannot compose it on the base data, so there is nothing there to compare it with.
 *
 * @param changes - a catalog's classified changes
 * @param lens - a catalog lens or a host and converter pair
 * @param gainedPairs - lens ids of the pairs only the head prescriptions permit (`PairDifferences.headDataOnly`)
 * @returns the change to compare the lens under
 */
export function dataChangeOf(changes: CatalogChanges, lens: LensRef, gainedPairs: readonly string[] = []): DataChange {
  if (lens.teleconverter && gainedPairs.includes(lensId(lens))) return "new";
  const host: DataChange = changes.lenses[lens.key] ?? "unchanged";
  const converter: DataChange = (lens.teleconverter && changes.teleconverters[lens.teleconverter]) || "unchanged";
  return CHANGE_RANK[converter] > CHANGE_RANK[host] ? converter : host;
}

/* ── Converter pairs ── */

interface ConverterPair {
  host: string;
  teleconverter: string;
}

/** What an engine said of each pair it could not compose and build, by lens id. */
type UnbuiltPairs = Readonly<Record<string, string>>;

/**
 * Set the fit predicate's answers side by side.
 *
 * A request list names pairs, and the predicate that permits them is engine code. Built from one engine's answer,
 * the list would leave out a pair that engine no longer permits, and nothing would show the loss. So the pairs to
 * request are every pair either engine permits for the head prescriptions: the engine that lost one throws on it.
 *
 * A pair is set aside from that comparison exactly when the base engine cannot compose and build it from the head
 * prescriptions while the head engine can. The base engine's answer about a pair it cannot build is no answer, so
 * the pair is neither engine's alone: it is an uncompared lens, and it is still requested. This is the one place
 * that decides it, pair by pair, and a run takes the answer from here whether it meets the pair or not. A pair
 * both engines build, or neither, or the base alone, is compared like any other.
 *
 * @param permitted - the permitted pairs of the head prescriptions on each engine, and of the base prescriptions on
 *   the head engine; and, where it was asked, which of those pairs each engine cannot build from the head
 *   prescriptions
 * @param changes - the catalog's classified changes, for the hosts and converters that lost every pair; none when
 *   left out
 * @returns the pairs to request, in code-unit order of their lens id, and where the answers differ
 */
export function comparePermittedPairs(
  permitted: {
    headEngine: readonly ConverterPair[];
    baseEngine: readonly ConverterPair[];
    baseData: readonly ConverterPair[];
    unbuilt?: { headEngine: UnbuiltPairs; baseEngine: UnbuiltPairs };
  },
  changes?: Pick<CatalogChanges, "lenses" | "teleconverters">,
): { requested: ConverterPair[]; differences: PairDifferences } {
  const idOf = ({ host, teleconverter }: ConverterPair) => lensId({ key: host, teleconverter });
  const byId = (pairs: readonly ConverterPair[]) => new Map(pairs.map((pair) => [idOf(pair), pair]));
  const [head, base, before] = [byId(permitted.headEngine), byId(permitted.baseEngine), byId(permitted.baseData)];

  const either = new Map([...head, ...base]);
  /* The pairs set aside, each with what the base engine said when it could not build one the head engine can. */
  const { unbuilt } = permitted;
  const setAside = new Map<string, string>();
  for (const id of either.keys()) {
    if (unbuilt && Object.hasOwn(unbuilt.baseEngine, id) && !Object.hasOwn(unbuilt.headEngine, id)) {
      setAside.set(id, unbuilt.baseEngine[id]);
    }
  }
  const only = (these: Map<string, ConverterPair>, those: Map<string, ConverterPair>) =>
    [...these.keys()].filter((id) => !those.has(id)).sort();
  const compared = (ids: string[]) => ids.filter((id) => !setAside.has(id));
  /* A changed host or converter that fitted something with the base data and fits nothing with the head's. */
  const lostBy = (kind: "host" | "converter", keys: readonly string[]) =>
    keys.flatMap((key) => {
      const member = kind === "host" ? "host" : "teleconverter";
      const had = permitted.baseData.filter((pair) => pair[member] === key).map(idOf);
      const has = permitted.headEngine.some((pair) => pair[member] === key);
      return had.length > 0 && !has ? [{ kind, key, pairs: had.sort() }] : [];
    });
  return {
    requested: [...either.keys()].sort().map((id) => either.get(id)!),
    differences: {
      baseEngineOnly: compared(only(base, head)),
      headEngineOnly: compared(only(head, base)),
      baseDataOnly: only(before, head),
      headDataOnly: only(head, before),
      uncompared: [...setAside].sort(([a], [b]) => (a < b ? -1 : 1)).map(([lens, reason]) => ({ lens, reason })),
      lostEveryPair: [
        ...lostBy("host", Object.keys(changes?.lenses ?? {})),
        ...lostBy("converter", Object.keys(changes?.teleconverters ?? {})),
      ],
    },
  };
}

/* ── Declared exceptions ── */

const EXCEPTIONS_HEADING = /^#{1,6}\s+engine-diff exceptions\s*$/i;
const ANY_HEADING = /^#{1,6}\s/;
const BULLET_WITH_KEY = /^\s*[-*+]\s[^`]*`([^`]+)`/;

/**
 * Read the lenses a pull request declares as comparison exceptions.
 *
 * The description carries them under a heading "Engine-diff exceptions", one bullet per lens with its id in
 * backticks, up to the next heading. A converter pair is named by its `host+converter` id. Without the heading
 * nothing is declared.
 *
 * @param description - the pull request description, or any text in that form
 * @returns the declared lens ids, in the order written
 */
export function parseDeclaredExceptions(description: string): string[] {
  const lines = description.split(/\r?\n/);
  const heading = lines.findIndex((line) => EXCEPTIONS_HEADING.test(line.trim()));
  if (heading < 0) return [];
  const declared: string[] = [];
  for (const line of lines.slice(heading + 1)) {
    if (ANY_HEADING.test(line.trim())) break;
    const key = BULLET_WITH_KEY.exec(line)?.[1].trim();
    if (key) declared.push(key);
  }
  return declared;
}

/* ── Declared transitions ── */

/*
 * Above C0 a discrete or shape difference fails the engine comparison unless the change declares it, one line per
 * unit of one record, under a heading "Engine-diff transitions" of the pull request description:
 *
 *   - `<lens id>` `<state id>` `<request>` `<path>`: `<base>` -> `<head>`; digest `<digest>`[, numbers]. <reason>
 *
 * A unit is what a difference's path names through its first array index, with any index directly behind it: one ray
 * of a fan, one solve, one field sample. A path with no index is its own unit. The line names one discrete or shape
 * difference of the unit, which the harness chooses, and carries a digest of all of them, so nothing discrete
 * changes in a declared unit without the line changing. A run writes the line of every unit that no line matches,
 * unless the unit also holds what no line excuses: then it writes that in the line's place.
 */

/** One declared transition: a bullet under "Engine-diff transitions", read. */
export interface DeclaredTransition {
  /** `lensId` of the record's lens. */
  lens: string;
  /** `stateId` of the record's state. */
  state: string;
  /** The record's request as a report names it: the family, and the variant where the request named one. */
  request: string;
  /** Path of the one difference the line names. The unit that path is in is the unit declared. */
  path: string;
  /** The named difference's two values, as `transitionText` writes them. */
  base: string;
  head: string;
  /** `unitDigest` of every discrete and shape difference of the unit. */
  digest: string;
  /**
   * The line also permits numbers beyond budget in the unit's fields that have no counterpart, where the unit's
   * differences show that its ray ended elsewhere (`ENDED_ELSEWHERE`).
   */
  numbers: boolean;
  reason: string;
}

/**
 * What a run found for a declared transition. Only `matched` excuses anything, and above C0 only `matched` and
 * `notJudged` let the run pass.
 *
 * - `matched`: the unit's discrete and shape differences are the declared ones.
 * - `mismatch`: the unit holds discrete or shape differences, and not the named one or not under that digest.
 * - `contract`: the unit holds a discrete or shape difference, and with it what no line excuses: on its head side a
 *   hit or a converged solve whose residual is outside its tolerance, or a non-finite number the base side does not
 *   repeat; or a hit both sides have that differs beyond its budget.
 * - `refused`: the unit holds what cannot be declared: a record or an analysis job that starts or stops throwing,
 *   or a discrete or shape difference in a build, composition or layout record.
 * - `unchanged`: the run compared the record and found no discrete or shape difference in the unit.
 * - `uncompared`: the record is of a lens the base engine cannot evaluate.
 * - `overflow`: the record holds more discrete and shape differences than a run sorts into units.
 * - `unknownLens`: no lens of the catalog and no requested pair has that id.
 * - `notJudged`: the run did not ask for the record, which is outside its tier, its shard or its one lens. Under C0
 *   no line is judged.
 */
export type TransitionOutcome =
  | "matched"
  | "mismatch"
  | "contract"
  | "refused"
  | "unchanged"
  | "uncompared"
  | "overflow"
  | "unknownLens"
  | "notJudged";

/** One discrete or shape difference of a unit, as a line and a digest hold it. */
export interface UnitDifference {
  path: string;
  kind: "discrete" | "shape";
  /** The two values, as `transitionText` writes them. */
  base: string;
  head: string;
}

/** A declared transition and what the run found for it. */
export interface TransitionResult {
  /** The declaration as the harness writes such a line, reason included. */
  line: string;
  declared: DeclaredTransition;
  outcome: TransitionOutcome;
  /** What the run found in place of the declaration, or what kept the line from excusing its unit. */
  detail?: string;
  /** The unit's discrete and shape differences, on a line that matched. */
  differences: number;
  /** How many of those are shapes: a changed array length or a member one side lacks, which the walk does not enter. */
  shapes: number;
  /** Numbers beyond budget that the line excused under `numbers`. */
  excusedNumbers: number;
  /**
   * On a line that matched: the differences its digest covers, in the order the digest takes them. A reader of the
   * one difference a line names sees here what else it vouches for. The first of them; `differences` counts all.
   */
  covered?: UnitDifference[];
}

const TRANSITIONS_HEADING = /^#{1,6}\s+engine-diff transitions\s*$/i;
const BULLET = /^[-*+]\s+(.*)$/;
/* Every field is in backticks: a state id has spaces in it, and a value is any text. */
const FIELD = "`([^`]+)`";
const VALUE = "`([^`]*)`";
const TRANSITION_FIELDS = new RegExp(
  `^${[FIELD, FIELD, FIELD, FIELD].join("\\s+")}:\\s*${VALUE}\\s*->\\s*${VALUE};` +
    `\\s*digest\\s+${FIELD}(,\\s*numbers)?\\.(.*)$`,
);
const TRANSITION_FORM =
  "- `<lens id>` `<state id>` `<request>` `<path>`: `<base>` -> `<head>`; digest `<digest>`[, numbers]. <reason>";
/* What a line writes for the path of a difference at the root of a record's value, which has none. */
const RECORD_PATH = "(the record)";
/* Hex digits of a unit's digest: 48 bits, which tells any two sets of differences a reviewer could meet apart. */
const DIGEST_LENGTH = 12;

/**
 * Discrete and shape differences of one record held at once, to sort them into units. A unit's digest needs every
 * one of its differences, so a record with more is matched against no declared transition, and all of them fail.
 */
const MAX_RECORD_TRANSITIONS = 20_000;

/* A build, a composition and a layout trace no ray. What is exact in them is prescription data and what the engine
 * counts and labels from it, so no difference there is a boundary a ray crossed, and none can be declared. */
const UNDECLARABLE_FAMILIES: ReadonlySet<RequestFamily> = new Set(["build", "composition", "layout"]);
/* The members of an outcome, of a record or of an analysis job. One that starts or stops throwing changes all
 * three: `ok`, and the two that are there on one side only. */
const OUTCOME_MEMBERS = ["ok", "value", "error"] as const;

/*
 * What `numbers` permits beyond budget in a declared unit: the fields of a traced ray that have no counterpart once
 * the ray ends on another surface or stops. They are the fields of the budget table's trace rows for the terminal
 * point and direction, the image-plane landing and the slopes. The medium a ray ended in, on the ray and in its
 * diagnostics, follows from where the ray ended too. A hit that both sides have is still the same hit.
 */
const NO_COUNTERPART_FAMILY: RequestFamily = "traces";
/* Only the production fans have terminal fields whose numbers a transition may excuse. */
const PRODUCTION_RAY_UNIT = /^(?:(?:onAxis|offAxis|skew)\.rays\[\]|chromatic\.rays\.[RGBV]\[\])$/;
const NO_COUNTERPART_FIELDS: ReadonlySet<string> = new Set([
  "terminalPoint[]",
  "terminalDirection[]",
  "imagePoint[]",
  "x",
  "y",
  "ux",
  "uy",
  "finalMedium",
  "diagnostics.finalMedium",
]);

/**
 * The unit a difference belongs to.
 *
 * @param path - a difference's path under its record's value, with array indices
 * @returns the path through its first array index and any index directly behind it, or all of a path with none
 */
export function transitionUnit(path: string): string {
  const indexes = /\[\d+\](?:\[\d+\])*/.exec(path);
  return indexes ? path.slice(0, indexes.index + indexes[0].length) : path;
}

/** A path with every array index dropped: how the budget table and `RawDifference.pattern` spell it. */
function patternOf(path: string): string {
  return path.replace(/\[\d+\]/g, "[]");
}

function hasNoCounterpart(family: RequestFamily, pattern: string, unit: string): boolean {
  if (family !== NO_COUNTERPART_FAMILY || !PRODUCTION_RAY_UNIT.test(patternOf(unit))) return false;
  const ray = patternOf(unit);
  return pattern.startsWith(`${ray}.`) && NO_COUNTERPART_FIELDS.has(pattern.slice(ray.length + 1));
}

/*
 * Those fields have no counterpart only once the ray ended on another surface or stopped, so `numbers` is honoured
 * only in a unit whose own discrete and shape differences show that: the ray's outcome, where it ended, how many
 * hits it has and on which surfaces, a clip, fallback or failure flag of a hit, or a clip event. Each is named as it
 * sits under its production ray. A label, a tolerance or an input that differs shows no such thing, and
 * neither does a hit column that one side lacks: a column that changed length changed the hit count with it.
 */
const ENDED_ELSEWHERE: ReadonlySet<string> = new Set([
  "status",
  "clipped",
  "failureReason",
  "reachedImagePlane",
  "terminalSurfaceIndex",
  "returnVertexIndex",
  "hits.count",
  "hits.columns.surfaceIndex[]",
  "hits.columns.clipped[]",
  "hits.columns.fallback[]",
  "hits.columns.failureReason[]",
  "hits.columns.clipReason[]",
  "diagnostics.clipped",
  "diagnostics.failureReason",
  "diagnostics.terminationReason",
  "diagnostics.terminalSurfaceIndex",
  "diagnostics.reachedImagePlane",
  "diagnostics.hitSurfaceIndexes",
  "diagnostics.hitSurfaceIndexes[]",
]);
/* The clip events of a ray, or any member of one. */
const CLIP_EVENT = /^diagnostics\.clipEvents(?:$|[.[])/;

function showsAnotherEnd(family: RequestFamily, unit: string, { path }: UnitDifference): boolean {
  if (family !== NO_COUNTERPART_FAMILY || !PRODUCTION_RAY_UNIT.test(patternOf(unit))) return false;
  const member = patternOf(path).slice(patternOf(unit).length + 1);
  return ENDED_ELSEWHERE.has(member) || CLIP_EVENT.test(member);
}

/**
 * One side of a difference as a declared transition writes it.
 *
 * A number set against a value of another type is written as the word `number`. Its digits are no part of what
 * changed, and they would give two runs with different bases different digests for one transition. A backtick is
 * written as its JSON escape, so no field of a line holds one.
 *
 * @param value - the side to write
 * @param other - the other side of the same difference
 * @returns JSON text, or a word for a missing member, a container or such a number
 */
function transitionText(value: unknown, other: unknown): string {
  if (numberOf(value) !== undefined && numberOf(other) === undefined) return "number";
  return describe(value).replace(/`/g, "\\u0060");
}

/** Digest of a unit: its discrete and shape differences in code-unit order of their paths, none left out. */
function unitDigest(differences: readonly UnitDifference[]): string {
  const rows = differences.map(({ path, kind, base, head }) => [path, kind, base, head]);
  return sha256Hex(JSON.stringify(rows)).slice(0, DIGEST_LENGTH);
}

/**
 * Write a declared transition as its line.
 *
 * @param transition - what the line declares
 * @param reason - the reason to end the line with; left out, the line is one to paste and finish
 * @returns the bullet, which `parseDeclaredTransitions` reads back once it has a reason
 */
function transitionLine(transition: Omit<DeclaredTransition, "reason">, reason = ""): string {
  const { lens, state, request, path, base, head, digest, numbers } = transition;
  const fields = [lens, state, request, path === "" ? RECORD_PATH : path].map((field) => `\`${field}\``).join(" ");
  return (
    `- ${fields}: \`${base}\` -> \`${head}\`; digest \`${digest}\`${numbers ? ", numbers" : ""}.` +
    `${reason === "" ? "" : ` ${reason}`}`
  );
}

/**
 * Read the transitions a pull request declares.
 *
 * The description carries them under a heading "Engine-diff transitions", one bullet per unit, up to the next
 * heading; a description may have the heading more than once. Every bullet there is a declaration, so one that does
 * not read as a line, or that gives no reason, is an error and not a line to pass over: the run it was written for
 * would otherwise fail on the transition it meant to declare. Without the heading nothing is declared.
 *
 * @param description - the pull request description, or any text in that form
 * @returns the declared transitions, in the order written
 * @throws on a bullet under the heading that is not a declared transition, or that has no reason
 */
export function parseDeclaredTransitions(description: string): DeclaredTransition[] {
  const declared: DeclaredTransition[] = [];
  let underHeading = false;
  for (const raw of description.split(/\r?\n/)) {
    const line = raw.trim();
    if (ANY_HEADING.test(line)) {
      underHeading = TRANSITIONS_HEADING.test(line);
      continue;
    }
    const bullet = underHeading ? BULLET.exec(line)?.[1] : undefined;
    if (bullet === undefined) continue;
    const fields = TRANSITION_FIELDS.exec(bullet);
    if (!fields) {
      throw new Error(
        `engineDiff: a bullet under "Engine-diff transitions" is not a declared transition:\n  ${line}\n` +
          `A declared transition reads:\n  ${TRANSITION_FORM}`,
      );
    }
    const [, lens, state, request, path, base, head, digest, numbers, reason] = fields;
    if (reason.trim() === "") {
      throw new Error(`engineDiff: a declared transition gives no reason after its full stop:\n  ${line}`);
    }
    declared.push({
      lens,
      state,
      request,
      path: path === RECORD_PATH ? "" : path,
      base,
      head,
      digest,
      numbers: numbers !== undefined,
      reason: reason.trim(),
    });
  }
  return declared;
}

/** A value found under a record's value, and the way down to it. */
interface Located {
  value: unknown;
  /** The members and array levels passed, as the budget table spells a path. */
  segments: string[];
  /** The containers passed, from the root down, and the member or index taken in each (`LeafContext`). */
  containers: unknown[];
  keys: (string | number)[];
}

/**
 * The value at a path under a record's value, with the path as the budget table spells it.
 *
 * A member name may hold a dot, as an analysis job's does, so a path is not split: each step sets the container's
 * own members against what is left of it.
 *
 * @param root - the value the path starts under
 * @param path - a path with array indices, as a difference carries it
 * @param passed - the way down to `root`, for a root that is itself under a record's value
 * @returns the value and the way down to it, or null when the path names nothing there
 */
function valueAt(
  root: unknown,
  path: string,
  passed: Omit<Located, "value"> = { segments: [], containers: [], keys: [] },
): Located | null {
  if (path === "") return { value: root, ...passed };
  const step = (key: string | number, segment: string, rest: string) =>
    valueAt((root as Record<string | number, unknown>)[key], rest, {
      segments: [...passed.segments, segment],
      containers: [...passed.containers, root],
      keys: [...passed.keys, key],
    });
  if (Array.isArray(root)) {
    const index = /^\[(\d+)\]\.?/.exec(path);
    return index ? step(Number(index[1]), "[]", path.slice(index[0].length)) : null;
  }
  if (!isContainer(root)) return null;
  for (const key of Object.keys(root)) {
    const next = path[key.length];
    if (!path.startsWith(key) || (next !== undefined && next !== "." && next !== "[")) continue;
    const found = step(key, key, path.slice(key.length + (next === "." ? 1 : 0)));
    if (found) return found;
  }
  return null;
}

/** The roots the paired walk starts two records from: their values, or their outcomes unless both returned one. */
function rootsOf(base: ComparableRecord, head: ComparableRecord): [base: unknown, head: unknown] {
  return base.payload.ok && head.payload.ok ? [base.payload.value, head.payload.value] : [base.payload, head.payload];
}

/**
 * What the head side of a unit holds that no declaration excuses, or null.
 *
 * The paired walk reports a changed array length or a member one side lacks once and does not enter it, so a hit
 * the head engine gained is compared with nothing, and a solve that now converges sets its residual against the
 * null of one that did not. Here the head side answers alone. Each residual must lie within the tolerance it was
 * accepted under: a hit's within the effective tolerance recorded beside it, and a solve's within the tolerance of
 * its class where the head's solve says it converged. Every other number must be finite unless the base side holds
 * the same non-finite value at the same place.
 *
 * @param base - the record of the base side
 * @param head - the record of the head side
 * @param unit - the unit's path
 * @param changeClass - the class whose residual budget applies
 * @param rules - resolved budget rules by request family and path pattern, shared with the paired walk
 * @returns one sentence naming the first breach, or null when there is none
 */
function headSideBreach(
  base: ComparableRecord,
  head: ComparableRecord,
  unit: string,
  changeClass: ChangeClass,
  rules: Map<string, Map<string, BudgetRule | null>>,
): string | null {
  const [baseRoot, headRoot] = rootsOf(base, head);
  const at = valueAt(headRoot, unit);
  if (!at) return null;
  const family = head.request;
  let familyRules = rules.get(family);
  if (!familyRules) rules.set(family, (familyRules = new Map()));
  /* Containers and keys from the record's value down, as the paired walk holds them, so a rule that reads the flags
   * beside a leaf finds them here as it does there. Both sides of the context are the head's. */
  const { segments, containers: stack, keys } = at;
  const leaf: LeafContext = { base: stack, head: stack, keys };
  const pathOf = () =>
    keys.reduce<string>(
      (path, key) => (typeof key === "number" ? `${path}[${key}]` : path ? `${path}.${key}` : key),
      "",
    );

  const visit = (before: unknown, value: unknown, pattern: string): string | null => {
    if (isContainer(value)) {
      const isArray = Array.isArray(value);
      const paired = isContainer(before) && Array.isArray(before) === isArray ? before : undefined;
      let breach: string | null = null;
      stack.push(value);
      for (const [name, member] of Object.entries(value)) {
        const key = isArray ? Number(name) : name;
        keys.push(key);
        segments.push(isArray ? "[]" : name);
        breach = visit(
          (paired as Record<string, unknown> | undefined)?.[name],
          member,
          isArray ? `${pattern}[]` : pattern ? `${pattern}.${name}` : name,
        );
        segments.pop();
        keys.pop();
        if (breach !== null) break;
      }
      stack.pop();
      return breach;
    }
    const number = numberOf(value);
    if (number === undefined) return null;
    let rule = familyRules.get(pattern);
    if (rule === undefined) familyRules.set(pattern, (rule = resolveBudgetRule(family, segments)));
    const quantity = rule ? quantityAt(rule, leaf) : null;
    const { kind, tolerance, title }: Partial<Quantity> = quantity === null ? {} : QUANTITIES[quantity];
    if (rule && quantity !== null && kind === "residual") {
      /* The class's own tolerance, or else the one recorded beside the hit, as the paired walk reads them. */
      const recorded = rule.tolerance === undefined ? undefined : hitColumnEntries(leaf, rule.tolerance)[1];
      const held = tolerance ?? numberOf(recorded);
      /* Infinity where there is no finite residual or no positive tolerance: it has no contract to meet. */
      const share =
        Number.isFinite(number) && held !== undefined && held > 0 ? Math.abs(number) / held : Number.POSITIVE_INFINITY;
      return share > budgetOf(quantity, changeClass)
        ? `On the head side \`${pathOf()}\` is ${describe(value)}, ${formatMeasure(share)} times the ` +
            `${tolerance === undefined ? "effective tolerance recorded beside it" : `tolerance of its class (${title})`}.`
        : null;
    }
    return Number.isFinite(number) || Object.is(numberOf(before), number)
      ? null
      : `On the head side \`${pathOf()}\` is ${number}, which the base side does not repeat.`;
  };
  return visit(valueAt(baseRoot, unit)?.value, at.value, patternOf(unit));
}

/*
 * A table of hits, column-wise, is the member `columns` of a ray's `hits` (`hitColumnEntries` finds it the same
 * way). `surfaceIndex` is the column that says which surface each hit is on.
 */
const HIT_COLUMNS = "columns";
const HIT_SURFACE_COLUMN = "surfaceIndex";

/**
 * The hits both sides of a unit have, where its hit columns changed length.
 *
 * The paired walk reports a column of another length once and does not enter it, so a hit ahead of the place where
 * the two paths part would be compared with nothing. The two sides have the same hit for as long as their
 * `surfaceIndex` columns agree from the start. Past the first row where they differ, a row pairs two hits on
 * different surfaces, and comparing those would say nothing.
 *
 * @param base - the record of the base side
 * @param head - the record of the head side
 * @param unit - the unit's path
 * @returns a pair of records that hold those rows of the columns and nothing else, each column at the path it has
 *   in the records, for the paired walk to compare; or null when the unit has no such column
 */
function commonHits(
  base: ComparableRecord,
  head: ComparableRecord,
  unit: string,
): [base: ComparableRecord, head: ComparableRecord] | null {
  if (!base.payload.ok || !head.payload.ok) return null;
  const [before, after] = [valueAt(base.payload.value, unit), valueAt(head.payload.value, unit)];
  if (!before || !after) return null;

  /* The same members of two values, cut down to the common rows of every hit table under them. */
  const cut = (a: unknown, b: unknown, key: string | number | undefined): [unknown, unknown] | null => {
    if (!isContainer(a) || !isContainer(b) || Array.isArray(a) !== Array.isArray(b)) return null;
    const [members, others] = [a as Record<string, unknown>, b as Record<string, unknown>];
    if (key === HIT_COLUMNS && !Array.isArray(a)) {
      const [surfaces, otherSurfaces] = [members[HIT_SURFACE_COLUMN], others[HIT_SURFACE_COLUMN]];
      if (!Array.isArray(surfaces) || !Array.isArray(otherSurfaces)) return null;
      let rows = 0;
      while (
        rows < Math.min(surfaces.length, otherSurfaces.length) &&
        numberOf(surfaces[rows]) !== undefined &&
        Object.is(numberOf(surfaces[rows]), numberOf(otherSurfaces[rows]))
      ) {
        rows++;
      }
      /* A column of the same length on both sides is one the paired walk entered. */
      const names = Object.keys(members).filter((name) => {
        const [column, other] = [members[name], others[name]];
        return Array.isArray(column) && Array.isArray(other) && column.length !== other.length;
      });
      if (rows === 0 || names.length === 0) return null;
      const rowsOf = (side: Record<string, unknown>) =>
        Object.fromEntries(names.map((name) => [name, (side[name] as unknown[]).slice(0, rows)]));
      return [rowsOf(members), rowsOf(others)];
    }
    if (Array.isArray(a) && a.length !== (b as unknown[]).length) return null;
    /* Two containers of one shape, each holding only the members that lead to a hit table. A place left empty in
     * an array is empty on both sides, and the paired walk passes over it. */
    const [kept, otherKept] = (Array.isArray(a) ? [new Array(a.length), new Array(a.length)] : [{}, {}]) as [
      Record<string, unknown>,
      Record<string, unknown>,
    ];
    let found = false;
    for (const name of Object.keys(members)) {
      if (!Object.hasOwn(others, name)) continue;
      const pair = cut(members[name], others[name], Array.isArray(a) ? Number(name) : name);
      if (!pair) continue;
      [kept[name], otherKept[name]] = pair;
      found = true;
    }
    return found ? [kept, otherKept] : null;
  };

  const common = cut(before.value, after.value, before.keys[before.keys.length - 1]);
  if (!common) return null;
  /* The way down from the record's value to the unit, around those rows. */
  const under = (value: unknown): EncodedValue =>
    before.keys.reduceRight<unknown>((inner, key) => {
      if (typeof key === "string") return { [key]: inner };
      const outer = new Array<unknown>(key + 1);
      outer[key] = inner;
      return outer;
    }, value) as EncodedValue;
  return [
    { ...base, payload: { ok: true, value: under(common[0]) } },
    { ...head, payload: { ok: true, value: under(common[1]) } },
  ];
}

/** The discrete and shape differences of one pair of records, sorted into units as the walk reports them. */
interface RecordUnits {
  units: Map<string, UnitDifference[]>;
  /** Units with a number beyond budget in a field that has no counterpart. */
  numbers: Set<string>;
  /** Units in which a hit both sides have differs by more than its class allows, each with the first such hit. */
  breaches: Map<string, string>;
  held: number;
  overflowed: boolean;
}

/** A matched line of a unit, and whether it excuses the unit's numbers that have no counterpart. */
interface Excuse {
  result: TransitionResult;
  numbers: boolean;
}

/** A hit column, whole: the path of the one shape difference the paired walk reports for a column it did not enter. */
const HIT_COLUMN_PATH = new RegExp(`(?:^|\\.)${HIT_COLUMNS}\\.[^.[]+$`);

/** Whether a difference is outside what its class allows above C0, under whichever class the run is judged. */
function outsideItsClass({ kind, measure, budget }: RawDifference): boolean {
  if (kind === "nonFinite" || kind === "contract" || kind === "unclassified") return true;
  return kind === "number" && measure !== null && budget !== null && measure > budget;
}

/** One sentence for a hit both sides have that differs by more than its class allows. */
function commonHitBreach({ kind, path, quantity, base, head, measure, budget }: RawDifference): string {
  const where = `In a hit both sides have, \`${path}\``;
  if (kind === "number" && quantity !== null) {
    const { title, unit } = QUANTITIES[quantity];
    const inUnit = unit === "" ? "" : ` ${unit}`;
    return (
      `${where} differs by ${formatMeasure(measure)}${inUnit}, beyond its budget of ${formatMeasure(budget)}${inUnit} ` +
      `(${title}).`
    );
  }
  if (kind === "contract") {
    return `${where} is outside the tolerance recorded beside it: ${describe(base)} against ${describe(head)}.`;
  }
  if (kind === "nonFinite") return `${where} is ${describe(base)} on the base side and ${describe(head)} on the head.`;
  return `${where} differs and has no quantity class.`;
}

/** Holds a run's declared transitions to what its engine comparison finds, record by record. */
interface TransitionLedger {
  /**
   * Take one pair of records of a compared lens.
   *
   * @param base - the record of the base engine
   * @param head - the record of the head engine
   * @param differs - whether the two differ at all
   * @returns `fails`, which judges a difference of the pair as the engine comparison does with the declared
   *   transitions applied, and `lines`, one for each unit of the pair that a line could declare and none matches
   */
  judge(
    base: ComparableRecord,
    head: ComparableRecord,
    differs: boolean,
  ): { fails: (difference: RawDifference) => boolean; lines: string[] };
  /** Take a record of a lens the base engine cannot evaluate: nothing declared for it can be held to anything. */
  uncompared(record: ComparableRecord): void;
  /**
   * Close the ledger.
   *
   * @param met - the lenses the run met
   * @returns every declared transition with its outcome, and what the run found undeclared
   */
  finish(met: ReadonlySet<string>): RunSummary["transitions"];
}

/**
 * Start the ledger of a run's declared transitions.
 *
 * Under C0 nothing is matched, and every difference fails as it would with nothing declared. Above it a declared
 * line excuses the discrete and shape differences of its unit when it names the difference the harness would name
 * and carries the digest of all of them, and the unit holds nothing that no line excuses (`TransitionOutcome`,
 * `contract`). With `numbers` it also excuses, in that unit alone, a number beyond budget in a field that has no
 * counterpart, where the unit's differences show that the ray ended elsewhere. It never excuses a non-finite
 * mismatch, a residual outside its tolerance, a number with no class, or a number in any other field.
 *
 * @param options - the run's options, for the class, the declared transitions and the catalog's lens ids
 * @param rules - resolved budget rules, shared with the paired walk
 * @param failsEngine - the engine comparison's rule with nothing declared
 * @returns the ledger
 * @throws when a declared transition cannot be read
 */
function createTransitionLedger(
  options: RunOptions,
  rules: Map<string, Map<string, BudgetRule | null>>,
  failsEngine: (difference: RawDifference) => boolean,
): TransitionLedger {
  const { changeClass } = options;
  const results = parseDeclaredTransitions(options.declaredTransitions ?? "").map(
    (declared): TransitionResult => ({
      line: transitionLine(declared, declared.reason),
      declared,
      outcome: "notJudged",
      differences: 0,
      shapes: 0,
      excusedNumbers: 0,
    }),
  );
  const recordKey = (lens: string, state: string, request: string) => JSON.stringify([lens, state, request]);
  const keyOf = (record: ComparableRecord) => recordKey(record.lens, stateId(record.state), requestLabel(record));
  const byRecord = new Map<string, TransitionResult[]>();
  for (const result of results) {
    const { lens, state, request } = result.declared;
    const key = recordKey(lens, state, request);
    byRecord.set(key, [...(byRecord.get(key) ?? []), result]);
  }
  const summary: RunSummary["transitions"] = {
    declared: results,
    undeclared: 0,
    undeclaredLines: [],
    breached: { units: 0, samples: [] },
    overflow: { records: 0, samples: [] },
  };

  /** Sort what the walk found into units, hold each declared line of the record to its unit, and excuse. */
  const settle = (
    base: ComparableRecord,
    head: ComparableRecord,
    found: RecordUnits,
    declaredHere: readonly TransitionResult[],
  ): { lines: string[]; excused: Map<string, Excuse> } => {
    const lines: string[] = [];
    const excused = new Map<string, Excuse>();
    const [state, request] = [stateId(head.state), requestLabel(head)];
    if (found.overflowed) {
      summary.overflow.records++;
      if (summary.overflow.samples.length < MAX_SAMPLES) {
        summary.overflow.samples.push(`${head.lens} ${request} at ${state}`);
      }
      for (const result of declaredHere) result.outcome = "overflow";
      return { lines, excused };
    }
    /* An outcome that flipped takes the two members that came and went with it. */
    const flipped = new Set<string>();
    for (const differences of found.units.values()) {
      for (const { path, kind, base: before, head: after } of differences) {
        const isOutcome = kind === "discrete" && (path === "ok" || path.endsWith(".ok"));
        if (!isOutcome || !["true", "false"].includes(before) || !["true", "false"].includes(after)) continue;
        for (const member of OUTCOME_MEMBERS) flipped.add(`${path.slice(0, -"ok".length)}${member}`);
      }
    }
    /* Units in code-unit order of their paths, and so are the differences of each: no order of the walk is in a
     * line or a digest. */
    for (const [unit, differences] of [...found.units].sort(([a], [b]) => (a < b ? -1 : 1))) {
      const declaredForUnit = declaredHere.filter((result) => transitionUnit(result.declared.path) === unit);
      if (UNDECLARABLE_FAMILIES.has(head.request) || differences.some(({ path }) => flipped.has(path))) {
        for (const result of declaredForUnit) result.outcome = "refused";
        continue;
      }
      /* What no line excuses is looked for before any line is written or matched. A unit that holds it gets the
       * breach in place of a line to paste, which the next run could only refuse. */
      const breach = found.breaches.get(unit) ?? headSideBreach(base, head, unit, changeClass, rules);
      if (breach !== null) {
        for (const result of declaredForUnit) {
          result.outcome = "contract";
          result.detail = breach;
        }
        summary.breached.units++;
        if (summary.breached.samples.length < MAX_SAMPLES) {
          const where = [head.lens, state, request, unit === "" ? RECORD_PATH : unit].map((field) => `\`${field}\``);
          summary.breached.samples.push(`${where.join(" ")}: ${breach}`);
        }
        continue;
      }
      differences.sort((a, b) => (a.path < b.path ? -1 : 1));
      /* The difference a line names is the harness's choice, so two runs name the same one: the unit's status
       * where it has one, and otherwise the first in path order. */
      const named = differences.find(({ path }) => path === `${unit}.status`) ?? differences[0];
      const digest = unitDigest(differences);
      /* `numbers` excuses anything only where the unit itself shows that its ray ended elsewhere, and the line the
       * run writes says `numbers` only where that would excuse something. */
      const endedElsewhere = differences.some((difference) => showsAnotherEnd(head.request, unit, difference));
      const needsNumbers = found.numbers.has(unit);
      const line = transitionLine({
        lens: head.lens,
        state,
        request,
        path: named.path,
        base: named.base,
        head: named.head,
        digest,
        numbers: needsNumbers && endedElsewhere,
      });
      for (const result of declaredForUnit) {
        const { declared } = result;
        if (
          declared.path !== named.path ||
          declared.base !== named.base ||
          declared.head !== named.head ||
          declared.digest !== digest
        ) {
          result.outcome = "mismatch";
          result.detail = `The run found: ${line}`;
          continue;
        }
        result.outcome = "matched";
        result.differences = differences.length;
        result.shapes = differences.filter(({ kind }) => kind === "shape").length;
        result.covered = differences.slice(0, MAX_SAMPLES);
        const permits = declared.numbers && endedElsewhere;
        if (needsNumbers && !permits) {
          result.detail =
            "The unit holds numbers beyond budget in fields that have no counterpart once a ray ends elsewhere, " +
            (endedElsewhere
              ? "and the line does not say `numbers`, so each of them fails."
              : "and nothing in the unit shows that the ray ended elsewhere, so `numbers` excuses none of them.");
        }
        /* Of two lines that match one unit, the one that permits numbers decides. */
        if (!excused.get(unit)?.numbers) excused.set(unit, { result, numbers: permits });
      }
      if (excused.has(unit)) continue;
      summary.undeclared++;
      lines.push(line);
      if (summary.undeclaredLines.length < MAX_SAMPLES) summary.undeclaredLines.push(line);
    }
    for (const result of declaredHere) if (result.outcome === "notJudged") result.outcome = "unchanged";
    return { lines, excused };
  };

  const judge: TransitionLedger["judge"] = (base, head, differs) => {
    if (changeClass === "c0") return { fails: failsEngine, lines: [] };
    const declaredHere = byRecord.get(keyOf(head)) ?? [];
    const found: RecordUnits = {
      units: new Map(),
      numbers: new Set(),
      breaches: new Map(),
      held: 0,
      overflowed: false,
    };
    const hold = ({ kind, path, base: before, head: after }: RawDifference): void => {
      if ((kind !== "discrete" && kind !== "shape") || found.overflowed) return;
      if (++found.held > MAX_RECORD_TRANSITIONS) {
        found.overflowed = true;
        found.units.clear();
        return;
      }
      const unit = transitionUnit(path);
      let differences = found.units.get(unit);
      if (!differences) found.units.set(unit, (differences = []));
      differences.push({ path, kind, base: transitionText(before, after), head: transitionText(after, before) });
    };
    const gather = (difference: RawDifference): void => {
      const { kind, path, pattern, measure, budget } = difference;
      if (kind !== "number") return hold(difference);
      /* A unit with such a number needs `numbers` on its line. */
      if (measure === null || budget === null || measure <= budget) return;
      if (hasNoCounterpart(head.request, pattern, transitionUnit(path))) found.numbers.add(transitionUnit(path));
    };
    /* A unit's verdict needs every one of its differences, so the pair is walked for them before it is judged. */
    if (differs) diffRecords(base, head, changeClass, rules, gather);
    /* That walk entered no hit column that changed length. The hits both sides still have are walked here, as a
     * pair of records that hold nothing else. A discrete difference of one is the unit's like any other, and so is
     * in its digest; anything else of one that its class does not allow is what no line excuses. */
    for (const [unit, differences] of found.units) {
      if (found.overflowed) break;
      if (!differences.some(({ kind, path }) => kind === "shape" && HIT_COLUMN_PATH.test(path))) continue;
      const hits = commonHits(base, head, unit);
      if (!hits) continue;
      diffRecords(hits[0], hits[1], changeClass, rules, (difference) => {
        if (difference.kind === "discrete" || difference.kind === "shape") return hold(difference);
        if (outsideItsClass(difference) && !found.breaches.has(unit)) {
          found.breaches.set(unit, commonHitBreach(difference));
        }
      });
    }
    const { lines, excused } = settle(base, head, found, declaredHere);
    return {
      lines,
      fails: (difference) => {
        if (!failsEngine(difference)) return false;
        const { kind } = difference;
        if (kind !== "discrete" && kind !== "shape" && kind !== "number") return true;
        const unit = transitionUnit(difference.path);
        const excuse = excused.get(unit);
        if (!excuse) return true;
        if (kind !== "number") return false;
        if (!excuse.numbers || !hasNoCounterpart(head.request, difference.pattern, unit)) return true;
        excuse.result.excusedNumbers++;
        return false;
      },
    };
  };

  return {
    judge,
    uncompared(record) {
      if (changeClass === "c0") return;
      for (const result of byRecord.get(keyOf(record)) ?? []) result.outcome = "uncompared";
    },
    finish(met) {
      const known = new Set(options.catalogLenses ?? met);
      for (const result of results) {
        const unknown = changeClass !== "c0" && result.outcome === "notJudged" && !known.has(result.declared.lens);
        if (unknown) result.outcome = "unknownLens";
      }
      return summary;
    },
  };
}

/* How a run words what it found for a declared transition, in the order to say it. */
const OUTCOME_TITLES: Record<TransitionOutcome, string> = {
  matched: "matched",
  mismatch: "not what the run found",
  contract: "refused, the unit holds what no line excuses",
  refused: "refused, this cannot be declared",
  unchanged: "nothing discrete changed in the unit",
  uncompared: "the lens was not compared",
  overflow: "the record was matched against no line",
  unknownLens: "no such lens",
  notJudged: "not judged, the run did not ask for the record",
};

/**
 * The reasons the declared transitions fail a run.
 *
 * An undeclared unit has no line here, nor has one that no line can declare: the differences of both are engine
 * drift, and fail as that.
 *
 * @param transitions - what a run found for its declared transitions
 * @param changeClass - the class of the run
 * @returns the failure lines; none under C3, which gates nothing of the engine comparison
 */
function transitionFailures({ declared, overflow }: RunSummary["transitions"], changeClass: ChangeClass): string[] {
  if (changeClass === "c3") return [];
  if (changeClass === "c0") {
    return declared.length > 0
      ? [`Declared transitions: a C0 change declares none, and the description declares ${declared.length}.`]
      : [];
  }
  const failing = (Object.keys(OUTCOME_TITLES) as TransitionOutcome[]).flatMap((outcome) => {
    const count = declared.filter((result) => result.outcome === outcome).length;
    return outcome === "matched" || outcome === "notJudged" || count === 0
      ? []
      : [`${count} ${OUTCOME_TITLES[outcome]}`];
  });
  return [
    ...(failing.length > 0
      ? [`Declared transitions: of ${declared.length} declared, ${failing.join("; ")}. summary.md has each line.`]
      : []),
    ...(overflow.records > 0
      ? [
          `Declared transitions: no line was matched in ${overflow.records} ` +
            `record${overflow.records === 1 ? "" : "s"} with more than ${MAX_RECORD_TRANSITIONS} discrete and shape ` +
            `differences (${overflow.samples.slice(0, MAX_NAMED_IN_FAILURE).join("; ")}` +
            `${overflow.records > MAX_NAMED_IN_FAILURE ? "; and more" : ""}).`,
        ]
      : []),
  ];
}

/* ── Reports ── */

/** What a driver knows about a run and the comparison does not. */
export interface RunContext {
  tier: string;
  base: { ref: string; commit: string };
  head: { commit: string; uncommittedChanges: boolean };
  /** The part of the tier the run covers, or null for all of it. */
  shard: { index: number; count: number } | null;
  /** The one lens the run was narrowed to, or null for every lens of the tier or shard. */
  lens: string | null;
  /** Lens and converter keys the head no longer has. */
  removed: readonly string[];
  /** Teleconverter keys whose prescription is new or differs from the base's, and how. */
  teleconverters: Readonly<Record<string, ChangedData>>;
  /** Wall time per phase, in seconds, in the order to print. */
  phases: readonly (readonly [phase: string, seconds: number])[];
}

const MARKDOWN_SAMPLES = 40;

/** Four significant digits: enough to set a measure beside its budget. The exact values are in the records. */
function formatMeasure(value: number | null): string {
  return value === null ? "" : String(Number(value.toPrecision(4)));
}

/** A value as one line of a report: its whitespace flattened, and cut at 80 characters. */
function oneLine(text: string): string {
  const flat = text.replace(/\s+/g, " ");
  return flat.length > 80 ? `${flat.slice(0, 77)}...` : flat;
}

function cell(text: string): string {
  return oneLine(text.replace(/\|/g, "\\|"));
}

function table(header: readonly string[], rows: readonly (readonly string[])[]): string[] {
  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(cell).join(" | ")} |`),
  ];
}

/** A record's request as a report names it: the family, and the variant where the request named one. */
function requestLabel({ request, variant }: Pick<Finding, "request" | "variant">): string {
  return variant === undefined ? request : `${request} ${variant}`;
}

function findingRows(findings: readonly Finding[]): string[][] {
  return findings
    .slice(0, MARKDOWN_SAMPLES)
    .map((finding) => [
      finding.lens,
      finding.state,
      requestLabel(finding),
      finding.path === "" ? "(the record)" : `\`${finding.path}\``,
      finding.kind,
      finding.quantity ? QUANTITIES[finding.quantity].title : "",
      finding.base,
      finding.head,
      formatMeasure(finding.measure),
      formatMeasure(finding.budget),
    ]);
}

const FINDING_HEADER = ["Lens", "State", "Request", "Path", "Kind", "Quantity", "Base", "Head", "Measure", "Budget"];

function shownOf(shown: number, total: number): string {
  return total > shown ? `first ${shown} of ${total}` : String(total);
}

/**
 * The failing findings whose field is a solver's output, each with its difference in quanta of that solver.
 *
 * Such a field moves by whole steps of its solver, so the quanta tell a boundary transition from drift.
 */
function solverOutputRows(findings: readonly Finding[]): string[][] {
  return findings.slice(0, MARKDOWN_SAMPLES).flatMap((finding) => {
    const quantity = finding.quantity === null ? null : (QUANTITIES[finding.quantity] as Quantity);
    if (!quantity?.solver || finding.measure === null) return [];
    const { name, quantum } = quantity.solver;
    return [
      [
        finding.lens,
        requestLabel(finding),
        `\`${finding.path}\``,
        name,
        `${formatMeasure(quantum)} ${quantity.unit}`,
        formatMeasure(Math.abs(finding.measure) / quantum),
      ],
    ];
  });
}

function tallySection(title: string, tally: ComparisonTally, changeClass: ChangeClass): string[] {
  const quantityRows = (Object.keys(tally.quantities) as QuantityId[]).map((id) => {
    const entry = tally.quantities[id]!;
    const { title: name, unit, origin } = QUANTITIES[id];
    const largest = entry.largest;
    return [
      name,
      origin,
      `${formatMeasure(budgetOf(id, changeClass))} ${unit}`.trim(),
      String(entry.differing),
      String(entry.beyondBudget),
      formatMeasure(largest?.measure ?? null),
      largest ? `${largest.lens} ${requestLabel(largest)} \`${largest.path}\`` : "",
    ];
  });
  const iterationRows = Object.entries(tally.iterationChanges)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([change, fields]) => [change, String(fields)]);
  const solverRows = solverOutputRows(tally.failures);
  return [
    `## ${title}`,
    "",
    `${tally.records} records compared, ${tally.numbers} numbers in them. ${tally.recordsDiffering} records and ` +
      `${tally.numbersDiffering} numbers differ; ${tally.failing} differences fail.`,
    "",
    ...(tally.differences.digest > 0
      ? [
          `${tally.differences.digest} digests of traces nested in analysis results differ. Above C0 the status, hit ` +
            "count, outcome hash, largest residual share and largest effective tolerance beside a digest are " +
            "compared; how far the other numbers inside it moved is not budgeted.",
          "",
        ]
      : []),
    ...(quantityRows.length > 0
      ? [
          "### Largest difference per quantity",
          "",
          ...(changeClass === "c0"
            ? ["Every difference fails under C0; the budgets shown are C1's, for scale.", ""]
            : []),
          ...table(
            ["Quantity", "Budget from", "Budget", "Differing", "Beyond budget", "Largest", "Where"],
            quantityRows,
          ),
          "",
        ]
      : []),
    ...(tally.failures.length > 0
      ? [
          `### Failing differences (${shownOf(Math.min(tally.failures.length, MARKDOWN_SAMPLES), tally.failing)})`,
          "",
          ...table(FINDING_HEADER, findingRows(tally.failures)),
          "",
        ]
      : []),
    ...(solverRows.length > 0
      ? [
          "### Solver outputs among the failing differences",
          "",
          "Each of these fields is the output of a fixed-step bisection or a bracketed search, which moves by steps " +
            "of its solver. A difference of about a whole quantum is a boundary transition: one comparison inside " +
            "the solver fell the other way. A small part of a quantum is drift.",
          "",
          ...table(["Lens", "Request", "Path", "Output of", "Quantum, at most", "Difference in quanta"], solverRows),
          "",
        ]
      : []),
    ...(tally.transitionSamples.length > 0
      ? [
          `### Discrete transitions (${shownOf(Math.min(tally.transitionSamples.length, MARKDOWN_SAMPLES), tally.transitions)})`,
          "",
          ...table(FINDING_HEADER, findingRows(tally.transitionSamples)),
          "",
        ]
      : []),
    ...(iterationRows.length > 0
      ? [
          "### Solver iteration and evaluation counts",
          "",
          ...table(["Change in steps (head minus base)", "Fields"], iterationRows),
          "",
        ]
      : []),
    ...(tally.unclassified.length > 0
      ? ["### Numbers with no quantity class", "", ...tally.unclassified.map((path) => `- \`${path}\``), ""]
      : []),
  ];
}

/**
 * The declared transitions of a run, the units it found that no line declares, and the units that no line can. The
 * section leads the report, as the digests do: a passing run excused differences on the strength of these lines.
 */
function transitionSection({ changeClass, transitions }: RunSummary): string[] {
  const { declared, undeclared, undeclaredLines, breached, overflow } = transitions;
  if (declared.length === 0 && undeclared === 0 && breached.units === 0 && overflow.records === 0) return [];
  const gated = changeClass === "c1" || changeClass === "c2";
  const several = (count: number, noun: string) => `${count} ${noun}${count === 1 ? "" : "s"}`;
  const shown = undeclaredLines.slice(0, MARKDOWN_SAMPLES);
  const shownBreaches = breached.samples.slice(0, MARKDOWN_SAMPLES);
  /* A shape is said apart: the line vouches for what is behind it, of which only the common hits were compared. */
  const excusedBy = ({ outcome, differences, shapes, excusedNumbers }: TransitionResult) =>
    outcome === "matched"
      ? `, ${several(differences, "discrete or shape difference")}` +
        `${shapes > 0 ? ` (${shapes} of them a shape, behind which only the hits both sides have are compared)` : ""}` +
        `${excusedNumbers > 0 ? ` and ${several(excusedNumbers, "number")} beyond budget` : ""}`
      : "";
  return [
    "## Declared transitions",
    "",
    ...(changeClass === "c0"
      ? [`A C0 change declares no transition, and the description declares ${declared.length}. No line was matched.`]
      : [
          gated
            ? "A matched line excuses the discrete and shape differences of its unit. With `numbers` it also " +
              "excuses the numbers beyond budget in the fields of a traced ray that have no counterpart once the " +
              "ray ends elsewhere, where the unit's differences show that it did. Behind a hit column that changed " +
              "length, the hits both sides have are compared as in any ray. Whatever else lies behind a changed " +
              "array length, or in a member one side lacks, is compared with nothing: there the head side is held " +
              "to the tolerance of each hit and of each converged solve and to finite numbers, and to no budget. " +
              "transitions.md lists every difference each matched line covers."
            : "Under C3 the lines are matched and reported, and gate nothing. transitions.md lists every " +
              "difference each matched line covers.",
          "",
          ...declared.map(
            (result) =>
              `- ${OUTCOME_TITLES[result.outcome].replace(/^./, (first) => first.toUpperCase())}` +
              `${excusedBy(result)}: ${result.line.slice(2)}` +
              `${result.detail === undefined ? "" : ` ${result.detail}`}`,
          ),
          ...(declared.length === 0 ? ["No line is declared."] : []),
        ]),
    "",
    ...(undeclared > 0
      ? [
          `${several(undeclared, "unit")} of the engine comparison ${undeclared === 1 ? "holds" : "hold"} a ` +
            `discrete or shape difference that no line declares${gated ? ", and each such difference fails" : ""}. ` +
            "transitions.md has a line " +
            'for each, to paste under a heading "Engine-diff transitions" of the pull request description with a ' +
            `reason after its full stop (${shownOf(shown.length, undeclared)}):`,
          "",
          "```text",
          ...shown,
          "```",
          "",
        ]
      : []),
    ...(breached.units > 0
      ? [
          `${several(breached.units, "unit")} ${breached.units === 1 ? "holds" : "hold"} a discrete or shape ` +
            "difference that no line can declare, because the unit also holds what no line excuses" +
            `${gated ? ", and each such difference fails" : ""}. No line is written for one ` +
            `(${shownOf(shownBreaches.length, breached.units)}):`,
          "",
          ...shownBreaches.map((sample) => `- ${sample}`),
          "",
        ]
      : []),
    ...(overflow.records > 0
      ? [
          `${several(overflow.records, "record")} ${overflow.records === 1 ? "holds" : "hold"} more than ` +
            `${MAX_RECORD_TRANSITIONS} discrete and shape differences, which is more than a run sorts into units. ` +
            "Nothing there was matched against a line: " +
            `${overflow.samples.slice(0, MARKDOWN_SAMPLES).join("; ")}.`,
          "",
        ]
      : []),
  ];
}

/**
 * Write the summary of a run as Markdown: the verdict, the counts a pull request states, each comparison, the
 * uncompared lenses against the declared exceptions, and wall time per phase.
 *
 * @param summary - a finished run
 * @param context - the refs, tier and timings of the run
 * @returns Markdown text
 */
export function renderSummaryMarkdown(summary: RunSummary, context: RunContext): string {
  const { counts, engine, formatOnly, exceptions } = summary;
  const short = (commit: string) => commit.slice(0, 9);
  const statuses = (tally: StatusCounts) => `${tally.ok} / ${tally.clipped} / ${tally.failed}`;
  const countRow = (label: string, read: (side: PayloadCounts) => string) => [
    label,
    read(counts.baseEngine),
    read(counts.headEngine),
  ];
  /* Above C0 a changed digest does not fail and the numbers of the trace behind it are held to no budget. It leads
   * the report, so a passing run cannot be read as having budgeted those traces. */
  const digests = engine.differences.digest;
  const notBudgeted =
    digests > 0 && (summary.changeClass === "c1" || summary.changeClass === "c2")
      ? [
          "## Not budgeted: digested traces",
          "",
          `**${digests} trace digests changed, in ${engine.digests.lenses.length} lenses, and none of them was ` +
            `budgeted.** A trace nested in an analysis result is in the record as its status, its hit count, two ` +
            "hashes, its largest residual share and its largest effective tolerance. Under " +
            `${summary.changeClass.toUpperCase()} five of those were judged, and one that failed is among the ` +
            "failing differences below: the status and the hit count, which must be equal; the outcome hash, " +
            "which must be equal, and which changes with any flag, status, reason, label, count, index, sample " +
            "position or non-finite value inside the trace and with the shape of what it holds; the largest " +
            "residual inside it as a share of its hit's effective tolerance, which the head must keep at or under " +
            "1 wherever the two sides differ; and the largest effective tolerance inside it, held as the tolerance " +
            "of a hit the comparison can read is. Not judged: how far the coordinates, directions and other " +
            "numbers inside these traces moved, an effective tolerance below the largest of its trace among them. " +
            "They were held to no budget, and the run did not fail on them.",
          "",
          ...table(
            ["Record family", "Changed digests"],
            Object.entries(engine.digests.byRequest).map(([request, count]) => [request, String(count)]),
          ),
          "",
          `Lenses: ${engine.digests.lenses.join(", ")}.`,
          "",
        ]
      : [];
  const { pairs, thrownOnBothEngines: thrown } = summary;
  /* A pair the lists set aside is listed whether or not the run met it. One it did meet is among the run's
   * lenses. */
  const unasked = summary.uncompared.filter((entry) => entry.unasked).length;
  const pairLines = [
    ["Head prescriptions, base engine only", pairs.baseEngineOnly],
    ["Head prescriptions, head engine only", pairs.headEngineOnly],
    ["Head engine, base prescriptions only", pairs.baseDataOnly],
    ["Head engine, head prescriptions only", pairs.headDataOnly],
    ["Not compared, the base engine cannot compose and build the pair", pairs.uncompared.map(({ lens }) => lens)],
  ] as const;
  const changedConverters = Object.keys(context.teleconverters).length;
  const c2Notes =
    summary.changeClass === "c2"
      ? (Object.keys(C2_CRITERIA) as QuantityId[]).map(
          (id) => `- ${QUANTITIES[id].title}: the plan's C2 criterion is ${C2_CRITERIA[id]}; held to its C1 budget.`,
        )
      : [];
  return [
    `# Engine diff: ${summary.passed ? "passed" : "failed"}`,
    "",
    `Tier ${context.tier.toUpperCase()}, class ${summary.changeClass.toUpperCase()}` +
      `${context.shard ? `, shard ${context.shard.index} of ${context.shard.count}` : ""}` +
      `${context.lens ? `, lens \`${context.lens}\` only` : ""}. Base \`${short(context.base.commit)}\` ` +
      `(\`${context.base.ref}\`), head \`${short(context.head.commit)}\`` +
      `${context.head.uncommittedChanges ? " with uncommitted changes" : ""}.`,
    "",
    ...(summary.failures.length + summary.warnings.length > 0
      ? [
          ...summary.failures.map((failure) => `- ${failure}`),
          ...summary.warnings.map((warning) => `- Warning, which does not fail the run: ${warning}`),
          "",
        ]
      : []),
    ...notBudgeted,
    ...transitionSection(summary),
    "## Counts",
    "",
    `${summary.lenses} lenses, ${summary.uncompared.length - unasked} of them not compared.` +
      `${unasked > 0 ? ` ${unasked} converter pairs that the run asked nothing of are not compared either.` : ""}`,
    "",
    ...table(
      ["", "Base engine", "Head engine"],
      [
        countRow("Records", (side) => String(side.records)),
        countRow("Records that threw", (side) => String(side.failedRecords)),
        countRow("Numbers", (side) => String(side.numbers)),
        countRow("Rays ok / clipped / failed", (side) => statuses(side.rays)),
        countRow("Digested traces ok / clipped / failed", (side) => statuses(side.digestedTraces)),
        countRow("Analysis jobs returned / threw", (side) => `${side.jobs.returned} / ${side.jobs.threw}`),
      ],
    ),
    "",
    ...tallySection("Engine drift", engine, summary.changeClass),
    ...c2Notes,
    ...(c2Notes.length > 0 ? [""] : []),
    ...(thrown.records > 0
      ? [
          `### Records that threw on both engines (${shownOf(Math.min(thrown.samples.length, MARKDOWN_SAMPLES), thrown.records)})`,
          "",
          "Two records that threw alike are equal and compare nothing, so each one fails the run in every class.",
          "",
          ...table(FINDING_HEADER, findingRows(thrown.samples)),
          "",
        ]
      : []),
    ...(pairLines.some(([, ids]) => ids.length > 0)
      ? [
          "## Converter pairs",
          "",
          "Pairs the fit predicate permits on one side and not on the other. A difference between the engines is " +
            "engine drift; one between the base and head prescriptions is a data change, listed for review. A pair " +
            "the base engine cannot compose and build, while the head engine can, is no part of either: it is an " +
            "uncompared lens.",
          "",
          ...pairLines.filter(([, ids]) => ids.length > 0).map(([side, ids]) => `- ${side}: ${ids.join(", ")}.`),
          "",
        ]
      : []),
    ...(formatOnly.lenses.length > 0
      ? [
          ...tallySection("Format-only data changes", formatOnly, summary.changeClass),
          `Lenses: ${formatOnly.lenses.join(", ")}.`,
          "",
        ]
      : []),
    "## Data impact",
    "",
    summary.dataImpact.length === 0 && context.removed.length === 0 && changedConverters === 0
      ? "No lens changed its semantic fingerprint, and none is new or removed."
      : `${summary.dataImpact.filter((impact) => impact.change === "semantic").length} changed, ` +
        `${summary.dataImpact.filter((impact) => impact.change === "new").length} new, ` +
        `${context.removed.length} removed, ${changedConverters} teleconverters changed or new; ` +
        `${summary.dataImpact.reduce((total, impact) => total + impact.blocking, 0)} blocking differences. ` +
        "See data-impact.md.",
    "",
    ...dataImpactTables(summary.dataImpact),
    "## Uncompared lenses",
    "",
    ...(summary.uncompared.length > 0
      ? [
          ...table(
            ["Lens", "What the base engine said"],
            summary.uncompared.map(({ lens, reason }) => [lens, reason]),
          ),
          "",
        ]
      : ["None.", ""]),
    `Declared exceptions: ${exceptions.declared.length > 0 ? exceptions.declared.join(", ") : "none"}.`,
    "",
    "## Wall time",
    "",
    ...table(
      ["Phase", "Seconds"],
      context.phases.map(([phase, seconds]) => [phase, seconds.toFixed(1)]),
    ),
    "",
  ].join("\n");
}

/** The data-impact rule in the words both reports open with. */
const IMPACT_RULE =
  "A changed lens is judged path by path. It blocks where both sides have a status at one path and the head " +
  "data's alone is a failure (a status that says `failed`), where both have a computed number there and the head " +
  "data's alone is not finite, and where a record, an analysis job or a near-axis probe returned on the base data " +
  "and throws on the head data, which is how a lens that no longer builds shows. A status or a number at a path " +
  "only one side has is counted, failures among them, and blocks nothing: it is work the base data never did, or " +
  "work the head data no longer does. A ray's change to `failed` does not block when its own head-data clip events " +
  "show a non-intersection clip before the intersection failure, in event order. It is counted and listed as a " +
  "failure after the ray's first clip. A failure at the first clip, or without clip events to show the order, " +
  "still blocks; `bracket-failed` and `evaluation-failed` are unchanged. An array that changed length is paired by index.";

/**
 * Findings of a data change as a list: a table cell is cut at 80 characters, and such a finding is its path.
 *
 * The path is written whole. The two values are each written as one line and cut like a table cell, since one of
 * them can be the message of a lens that did not build, which runs over several lines.
 *
 * @param findings - the findings to list; the first `MARKDOWN_SAMPLES` are written
 * @param named - whether each line names its lens, where the list holds several
 * @returns one line per finding, with its record, its whole path and the two values
 */
function findingLines(findings: readonly Finding[], named: boolean): string[] {
  return findings
    .slice(0, MARKDOWN_SAMPLES)
    .map(
      (finding) =>
        `- ${named ? `${finding.lens}, ` : ""}\`${requestLabel(finding)}\`, ${finding.state}: ` +
        `\`${finding.path}\` is ${oneLine(finding.base)} on the base data and ${oneLine(finding.head)} on the ` +
        "head data.",
    );
}

/** A side's one-sided counts as one cell: statuses, the failures among them, computed non-finite numbers. */
function oneSidedCell({ statuses, failedStatuses, nonFinite }: OneSidedCounts): string {
  return `${statuses} / ${failedStatuses} / ${nonFinite}`;
}

/**
 * The data-impact rule in `summary.md`: one row of counts per changed lens, the blocked ones first and the first
 * `MARKDOWN_SAMPLES` of them, and the first blockers of the run with their paths, those of a new lens that does not
 * build among them.
 */
function dataImpactTables(dataImpact: readonly DataImpact[]): string[] {
  const changed = dataImpact
    .filter((impact) => impact.paths)
    .sort((a, b) => Math.sign(b.blocking) - Math.sign(a.blocking));
  const blockers = dataImpact.flatMap((impact) => impact.blockers);
  const blocking = dataImpact.reduce((total, impact) => total + impact.blocking, 0);
  return [
    ...(changed.length > 0 ? changedLensTable(changed) : []),
    ...(blockers.length > 0
      ? [
          `### Blocking data changes (${shownOf(Math.min(blockers.length, MARKDOWN_SAMPLES), blocking)})`,
          "",
          ...findingLines(blockers, true),
          "",
        ]
      : []),
  ];
}

/** The rule and one row of its counts per lens whose data changed its fingerprint. */
function changedLensTable(changed: readonly DataImpact[]): string[] {
  return [
    `${IMPACT_RULE} Changed lenses (${shownOf(Math.min(changed.length, MARKDOWN_SAMPLES), changed.length)}):`,
    "",
    ...table(
      [
        "Lens",
        "Blocking",
        "Statuses to a failure",
        "Statuses from a failure",
        "Numbers to non-finite",
        "Returned, now throws",
        "Head data only: statuses / failures / non-finite",
        "Base data only: statuses / failures / non-finite",
        "Arrays paired by index",
        "Failures after the ray's first clip",
      ],
      changed.slice(0, MARKDOWN_SAMPLES).map(({ lens, blocking: blocked, paths }) => {
        const { statuses, numbers, outcomes, headOnly, baseOnly, resized } = paths as ImpactPaths;
        return [
          lens,
          String(blocked),
          String(statuses.toFailure),
          String(statuses.fromFailure),
          String(numbers.toNonFinite),
          String(outcomes.toThrown),
          oneSidedCell(headOnly),
          oneSidedCell(baseOnly),
          String(resized.arrays),
          String(statuses.afterFirstClip),
        ];
      }),
    ),
    "",
  ];
}

/** Whether a status change blocks where it is not a failure after the ray's first clip. */
function statusChangeBlocks(change: string): boolean {
  const cut = change.indexOf(STATUS_CHANGE_ARROW);
  const [was, is] = [change.slice(0, cut), change.slice(cut + STATUS_CHANGE_ARROW.length)];
  return was !== NO_STATUS && is !== NO_STATUS && turnedToFailure(was, is);
}

/** One changed lens in `data-impact.md`: what its records hold path by path, and every status change. */
function impactPathSection(paths: ImpactPaths): string[] {
  const { statuses, numbers, outcomes, headOnly, baseOnly, resized, statusChanges, statusChangesUnlisted } = paths;
  /* The most frequent first, and code-unit order between equals, so two runs list them alike. */
  const changes = Object.entries(statusChanges).sort(([a, x], [b, y]) => y - x || (a < b ? -1 : 1));
  const afterFirstClipUnlisted =
    statuses.afterFirstClip - Object.values(paths.statusChangesAfterFirstClip).reduce((sum, count) => sum + count, 0);
  const statusRows = (change: string, count: number, afterFirstClip: number, gate: string) => [
    ...(count > afterFirstClip ? [[change, String(count - afterFirstClip), gate]] : []),
    ...(afterFirstClip > 0
      ? [[change, String(afterFirstClip), "does not block: failure after the ray's first clip"]]
      : []),
  ];
  const oneSidedRow = (side: string, { statuses: held, failedStatuses, nonFinite }: OneSidedCounts) => [
    side,
    String(held),
    String(failedStatuses),
    String(nonFinite),
  ];
  return [
    "### Path by path",
    "",
    ...table(
      ["At a path both sides have", "Count", "Gate"],
      [
        [
          "Statuses turned to a failure from a status that is none",
          String(statuses.toFailure),
          statuses.afterFirstClip > 0 ? "blocks except failures after the ray's first clip" : "blocks",
        ],
        ["Failures after the ray's first clip", String(statuses.afterFirstClip), "does not block"],
        ["Statuses turned from a failure to a status that is none", String(statuses.fromFailure), ""],
        ["Computed numbers turned from finite to non-finite", String(numbers.toNonFinite), "blocks"],
        ["Computed numbers turned from non-finite to finite", String(numbers.fromNonFinite), ""],
        ["Records, jobs and probes that returned and now throw", String(outcomes.toThrown), "blocks"],
        ["Records, jobs and probes that threw and now return", String(outcomes.fromThrown), ""],
      ],
    ),
    "",
    ...table(
      ["At a path only one side has", "Statuses", "Failures among them", "Computed non-finite numbers"],
      [
        oneSidedRow("The head data: work the base data never did", headOnly),
        oneSidedRow("The base data: work no longer done", baseOnly),
      ],
    ),
    "",
    ...(resized.arrays > 0
      ? [
          `${resized.arrays} ${resized.arrays === 1 ? "array that holds" : "arrays that hold"} a status, an ` +
            "outcome or a computed non-finite number changed length and " +
            `${resized.arrays === 1 ? "was" : "were"} paired by index ` +
            `(${shownOf(Math.min(resized.listed.length, MARKDOWN_SAMPLES), resized.arrays)} listed). The elements ` +
            "both sides have are at the same paths only where the longer side's extra elements are at its end. " +
            "Where one was put in or taken out ahead of others, a status that turned to a failure can be counted " +
            "above as one side's alone, and one that did not can be counted as turned: check the pairing.",
          "",
          ...findingLines(resized.listed, false),
          "",
        ]
      : []),
    ...(changes.length > 0
      ? [
          "Every status that differs: a change at a path both sides have, or a status one side has alone " +
            `(\`${NO_STATUS}\` on the other). Failures after the head ray's first clip are listed apart with their ` +
            "non-blocking gate; both rows together give the total for a change with both kinds of path. Without " +
            "ordered clip evidence, a status that held no result (`clipped`, `unbracketed`) blocks like one that did.",
          "",
          ...table(
            ["Status on the base data -> on the head data", "Paths", "Gate"],
            [
              ...changes.flatMap(([change, count]) =>
                statusRows(
                  change,
                  count,
                  paths.statusChangesAfterFirstClip[change] ?? 0,
                  statusChangeBlocks(change) ? "blocks" : "",
                ),
              ),
              ...(statusChangesUnlisted > 0
                ? statusRows(
                    "any other change",
                    statusChangesUnlisted,
                    afterFirstClipUnlisted,
                    "see the blockers listed above",
                  )
                : []),
            ],
          ),
          "",
        ]
      : []),
  ];
}

/**
 * The failed statuses and computed non-finite numbers of a lens with no base data: one line per record, under
 * their totals.
 */
function recordCountSection(counts: readonly RecordCounts[]): string[] {
  const total = (member: "failedStatuses" | "nonFinite") => counts.reduce((sum, record) => sum + record[member], 0);
  return [
    "### Failed statuses and computed non-finite numbers",
    "",
    `For review, and no gate: there is no base data to count these against. The ${counts.length} records hold ` +
      `${total("failedStatuses")} failed statuses and ${total("nonFinite")} computed non-finite numbers.`,
    "",
    ...table(
      ["State", "Request", "Failed statuses", "Computed non-finite numbers"],
      counts.map((record) => [
        record.state,
        requestLabel(record),
        record.threw ? "threw" : String(record.failedStatuses),
        record.threw ? "threw" : String(record.nonFinite),
      ]),
    ),
    "",
  ];
}

/**
 * Write the data-impact report as Markdown: what each semantic data change and each new lens did to its records on
 * the head engine, what blocks, and which lenses left the catalog.
 *
 * @param summary - a finished run
 * @param context - the refs of the run and the removed keys
 * @returns Markdown text
 */
export function renderDataImpactMarkdown(summary: RunSummary, context: RunContext): string {
  const sections = summary.dataImpact.flatMap((impact) => [
    `## ${impact.lens} (${impact.change})`,
    "",
    impact.change === "new"
      ? `${impact.records} records. A new lens, or a converter pair that only the head data permits, has no base ` +
        "data to compare with; it blocks only by not building."
      : `${impact.recordsDiffering} of ${impact.records} records differ: ${impact.numbersDiffering} numbers and ` +
        `${impact.transitions} discrete or shape transitions.`,
    "",
    ...(impact.blockers.length > 0
      ? [
          `### Blocking (${shownOf(Math.min(impact.blockers.length, MARKDOWN_SAMPLES), impact.blocking)})`,
          "",
          ...findingLines(impact.blockers, false),
          "",
        ]
      : []),
    ...(impact.paths ? impactPathSection(impact.paths) : []),
    ...(impact.largest.length > 0
      ? ["### Largest differences", "", ...table(FINDING_HEADER, findingRows(impact.largest)), ""]
      : []),
    ...(impact.recordCounts ? recordCountSection(impact.recordCounts) : []),
  ]);
  /* A converter is not a lens of the run: what its change did shows in the pairs it forms. */
  const compared = [...summary.dataImpact.map((impact) => impact.lens), ...summary.formatOnly.lenses];
  const converters = Object.entries(context.teleconverters).map(([key, change]) => {
    const pairs = compared.filter((lens) => lens.endsWith(`+${key}`));
    return `- \`${key}\` (${change}), compared through ${pairs.length > 0 ? pairs.join(", ") : "no pair in this run"}.`;
  });
  const { baseDataOnly, headDataOnly } = summary.pairs;
  return [
    "# Data impact",
    "",
    `Base data \`${context.base.commit.slice(0, 9)}\` against head data, both on the head engine. ${IMPACT_RULE} ` +
      "The rest is for review.",
    "",
    ...(sections.length > 0 ? sections : ["No lens changed its semantic fingerprint, and none is new.", ""]),
    ...(converters.length > 0
      ? [
          "## Teleconverters",
          "",
          "A converter is no lens of a run. One that is changed or new is compared through the pairs it forms.",
          "",
          ...converters,
          "",
        ]
      : []),
    ...(baseDataOnly.length + headDataOnly.length > 0
      ? [
          "## Converter pairs",
          "",
          "Pairs the fit predicate permits with one set of prescriptions and not the other. A pair the head data " +
            "gained is compared as a new lens, and blocks only by not building: its section above counts the " +
            "failed statuses and non-finite numbers in its records. A pair it lost is not requested, and does not " +
            "block: summary.md warns of a changed host or converter that lost every pair it had.",
          "",
          ...(baseDataOnly.length > 0 ? [`- No longer permitted with the head data: ${baseDataOnly.join(", ")}.`] : []),
          ...(headDataOnly.length > 0 ? [`- Permitted with the head data alone: ${headDataOnly.join(", ")}.`] : []),
          "",
        ]
      : []),
    ...(context.removed.length > 0 ? ["## Removed", "", ...context.removed.map((key) => `- \`${key}\``), ""] : []),
  ].join("\n");
}
