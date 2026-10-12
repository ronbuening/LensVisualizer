/**
 * Comparison half of the engine differential harness.
 *
 * A driver captures the same requests on two engines, and for a lens whose data changed on two prescriptions, and
 * hands the records to a run made here one lens at a time. The run pairs the records, finds what differs, judges
 * each difference by the declared change class and the budget table in `budgets.ts`, and keeps only totals, the
 * largest difference per quantity and a bounded sample of findings, so a whole tier never sits in memory. This
 * module also reads a pull request's declared exceptions, sorts a catalog's changes into format-only and semantic,
 * and writes the reports. It calls no engine and reads no file.
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
import { decodeValue, type EncodedValue, type Outcome } from "./payload.js";
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
 *   `outcome` hash, which is a discrete field that changes with anything discrete inside the trace, and the largest
 *   residual share, which is a contract check.
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
  /** The member name or array index the value sits under. */
  leafKey: string | number | undefined;
  quantity: QuantityId | null;
  base: unknown;
  head: unknown;
  measure: number | null;
  budget: number | null;
  /** The field hands prescription data back (`BudgetRule.authored`). */
  authored: boolean;
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
    authored = false,
  ) =>
    emit({
      kind,
      path: pathOf(),
      pattern,
      leafKey: keys[keys.length - 1],
      quantity,
      base: a,
      head: b,
      measure,
      budget,
      authored,
    });

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
      return report("nonFinite", pattern, a, b, quantity, null, null, rule.authored === true);
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
         * floor the magnitude is zero only between 0 and -0, which are no distance apart. */
        const magnitude = Math.max(Math.abs(x), Math.abs(y), floor ? floor.bound / budget : 0);
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
      /* The result encoder writes a nested trace as `{ status, hitCount, hash }`. */
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
/** Blocking findings kept per lens in the data-impact report. */
const MAX_IMPACT_BLOCKERS = 10;
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
  /** What blocks the change: a new failed status, a newly non-finite value, a lens that no longer builds. */
  blocking: number;
  blockers: Finding[];
  /**
   * A new lens, or a pair that only the head data permits: what each of its records holds, in request order. A
   * semantic change is blocked by an increase in these counts. Here there is no base data to count against, so
   * they block nothing and are for the reader of the impact report.
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

/* A status that a semantic data change may not introduce: a failed trace, a solve that failed to bracket or to
 * evaluate. Clipped, unconverged and unavailable are outcomes a prescription can legitimately move between. */
const FAILED_STATUS = /failed/;

/** What a semantic data change may not add to a record. */
interface BlockerCounts {
  failedStatuses: number;
  /** Non-finite numbers the engine computed; one that hands an authored value back is not counted. */
  nonFinite: number;
}

/**
 * Whether a located difference blocks a data change, and as what.
 *
 * @param difference - a difference between a record of the base data and of the head data
 * @returns the kind of blocker, or null for a difference that is only reported
 */
function dataChangeBlocker(difference: RawDifference): keyof BlockerCounts | "outcome" | null {
  if (difference.kind === "nonFinite") {
    return !difference.authored && Number.isFinite(numberOf(difference.base)) ? "nonFinite" : null;
  }
  if (difference.kind !== "discrete") return null;
  /* The outcome of a record or of an analysis job: it returned on the base data and throws on the head's. */
  if (difference.leafKey === "ok") return difference.base === true && difference.head === false ? "outcome" : null;
  const failedNow =
    difference.leafKey === "status" &&
    typeof difference.head === "string" &&
    FAILED_STATUS.test(difference.head) &&
    !(typeof difference.base === "string" && FAILED_STATUS.test(difference.base));
  return failedNow ? "failedStatuses" : null;
}

/**
 * Count the failed statuses and the computed non-finite numbers of one record.
 *
 * The paired walk reports a longer array or a new member once and does not enter it, so a failure behind such a
 * change shows only in these totals. The totals are per record and net: a failure that came in behind a change of
 * shape while another left the same record leaves them equal, and is for the reader of the impact report to find.
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
    if (typeof members.status === "string" && FAILED_STATUS.test(members.status)) counts.failedStatuses++;
    for (const key of Object.keys(members)) {
      segments.push(key);
      visit(members[key]);
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
 *   that moved, and every discrete or shape transition. A changed iteration count or trace digest is counted and
 *   does not fail by itself. C3: nothing; the differences are reported.
 * - a format-only data change, two prescriptions on the head engine: any difference, in every class.
 * - a semantic data change or a new lens: a new failed status, a newly non-finite value, or a lens that no longer
 *   builds. Everything else is reported for review. A new lens has no base data, and neither has a converter pair
 *   that only the head prescriptions permit: each blocks only by not building.
 *
 * Two findings fail a run apart from those comparisons. A record that throws on both engines fails it in every
 * class: the harness runs on both sides, so a defect in a capture throws alike on both, and two equal failures would
 * otherwise pass as a comparison. And the engines must permit the same converter pairs for the same prescriptions,
 * under every class but C3.
 *
 * Above C0 a transition has no way yet to be declared as expected, so each one fails the run. How a pull request
 * lists approved transitions is left to the first step that needs it.
 *
 * @param options - the declared class and exceptions
 * @returns the run
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
    onFailure?: (finding: Finding) => void,
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
        onFailure?.(located());
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
    const firstPart = !met.has(lens);
    met.add(lens);
    const lines = {
      baseEngine: baseEngine.map((record) => JSON.stringify(record)),
      headEngine: headEngine.map((record) => JSON.stringify(record)),
      baseData: needsBaseData && baseData ? baseData.map((record) => JSON.stringify(record)) : [],
    };
    const failingRecords: string[] = [];
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
        const failing =
          lines.baseEngine[index] === lines.headEngine[index]
            ? 0
            : tallyDifferences("engine", base, head, engine, failsEngine);
        if (failing > 0 || threwOnBoth) keepPair("engine", index, lines.baseEngine[index]);
      });
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
      const block = (finding: Finding) => {
        if (entry.blockers.length < MAX_IMPACT_BLOCKERS) entry.blockers.push(finding);
      };
      headEngine.forEach((head, index) => {
        tally.records++;
        if (lines.baseData[index] === lines.headEngine[index]) return;
        const base = baseData[index];
        const located: BlockerCounts = { failedStatuses: 0, nonFinite: 0 };
        const blocks = (difference: RawDifference) => {
          const blocker = dataChangeBlocker(difference);
          if (blocker !== null && blocker !== "outcome") located[blocker]++;
          return blocker !== null;
        };
        let failing = tallyDifferences("impact", base, head, tally, blocks, block);
        /* The record's own totals, for what the walk could not locate: an increase beyond what it did locate is a
         * blocker with no path. A record that threw on the base data has no totals to set the head's beside: every
         * failed ray of the head's would count as new. */
        const [before, after] = [countBlockers(base), countBlockers(head)];
        for (const [count, noun] of [
          ["failedStatuses", "failed statuses"],
          ["nonFinite", "non-finite numbers"],
        ] as const) {
          const unlocated = base.payload.ok ? after[count] - before[count] - located[count] : 0;
          if (unlocated <= 0) continue;
          failing++;
          tally.failing++;
          block({
            comparison: "impact",
            lens,
            state: stateId(head.state),
            request: head.request,
            ...(head.variant === undefined ? {} : { variant: head.variant }),
            path: "",
            kind: count === "nonFinite" ? "nonFinite" : "discrete",
            quantity: null,
            base: `${before[count]} ${noun} in the record`,
            head: `${after[count]} ${noun} in the record`,
            measure: unlocated,
            budget: null,
          });
        }
        if (failing > 0) keepPair("impact", index, lines.baseData[index]);
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
      entry.blocking = tally.failing;
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
      /* What the count rule would set beside the base data's totals. With none to set them beside they are
       * reported, record by record, and gate nothing. */
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

    return { lines, failingRecords };
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

function cell(text: string): string {
  const flat = text.replace(/\|/g, "\\|").replace(/\s+/g, " ");
  return flat.length > 80 ? `${flat.slice(0, 77)}...` : flat;
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
            "count, outcome hash and largest residual share beside a digest are compared; how far the numbers " +
            "inside it moved is not budgeted.",
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
            `hashes and its largest residual share. Under ${summary.changeClass.toUpperCase()} four of those were ` +
            "judged, and one that failed is among the failing differences below: the status and the hit count, " +
            "which must be equal; the outcome hash, which must be equal, and which changes with any flag, status, " +
            "reason, label, count, index, sample position or non-finite value inside the trace and with the shape " +
            "of what it holds; and the largest residual inside it as a share of its hit's effective tolerance, " +
            "which the head must keep at or under 1. Not judged: how far the coordinates, directions, effective " +
            "tolerances and other numbers inside these traces moved. They were held to no budget, and the run " +
            "did not fail on them.",
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
          `### Blocking (${shownOf(impact.blockers.length, impact.blocking)})`,
          "",
          ...table(FINDING_HEADER, findingRows(impact.blockers)),
          "",
        ]
      : []),
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
    `Base data \`${context.base.commit.slice(0, 9)}\` against head data, both on the head engine. A change blocks ` +
      "by a new failed status, a newly non-finite value, or a lens that no longer builds; the rest is for review.",
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
