/**
 * Quantity budgets of the engine differential harness.
 *
 * A numeric field of a payload record belongs to one quantity class. A class says how two values of it are
 * compared, and how far they may differ when a change is declared as equivalent numerics (C1) or as an algorithm
 * replacement (C2). This module holds the classes, the table that assigns payload paths to them, and the resolver
 * the comparator calls. It knows payloads by path alone and imports nothing; `compare.ts` walks the records and
 * applies what this module returns.
 *
 * Nothing holds the table to every path a payload has. A C0 run compares each number bit for bit and reads no
 * budget, so a path the table does not cover costs such a run nothing. Above C0 the comparator asks for the class
 * of a number that differs, and one with no class fails the run and is named: that is when the path gets its row.
 *
 * "The plan" below is `OPTICS_ENGINE_REWRITE_SPEC.md`, whose quantity table (Numerical contract, Quantity budgets)
 * the classes start from.
 */

/* ── Change classes and quantity classes ── */

/** The class a change declares: refactor, equivalent numerics, algorithm replacement, intentional change. */
export type ChangeClass = "c0" | "c1" | "c2" | "c3";

/**
 * How two values of a quantity are compared above C0. Under C0 every number is compared with `Object.is`, and in
 * every class so is a pair in which either value is NaN or infinite.
 *
 * - `absolute`: |a − b| ≤ budget.
 * - `relative`: |a − b| ≤ budget · max(|a|, |b|), and never less than the class's floor where it has one. A floor
 *   is an absolute bound in the class's unit. A class whose values may be zero or near it has one, since a relative
 *   difference means nothing there. So has a class whose budget is an absolute one near the lens and can only be a
 *   share of the value far from it: there the floor is the whole budget up to the size where the share is more. A
 *   class without one is plainly relative: at zero only zero agrees.
 * - `slope`: a slope dx/dz or dy/dz is unbounded, so the pair is turned into direction cosines with its partner
 *   slope and each cosine is held to the budget.
 * - `residual`: a root-finder's residual moves anywhere inside its tolerance when the arithmetic is reordered, so
 *   the two values are not differenced. Each must lie within the tolerance its solver accepted it under: the
 *   effective tolerance recorded beside a hit, or the one tolerance of a solve. A field that restates a solve's
 *   residual in another frame is held to a bound of its own.
 * - `share`: the field is already a residual as a share of the tolerance it was accepted under: the largest inside a
 *   digested trace. Like a residual it is not differenced. Where the two sides differ, the head's own value must be
 *   at most the budget, 1: the head is the engine a change proposes, and a finite breach the base alone carries is
 *   not one the change made. An infinite share on either side is compared exactly, as every non-finite value is,
 *   and a share on one side against none on the other is a discrete difference.
 * - `finite`: presence and finiteness only; the finite values are not differenced.
 * - `exact`: `Object.is`. A difference is a discrete transition, listed in the report.
 * - `iterations`: a solver's step or evaluation count. Above C0 a change is tallied as a histogram and does not
 *   fail by itself; what it did to the solver's output shows in that output's own class.
 */
export type ComparisonKind =
  | "absolute"
  | "relative"
  | "slope"
  | "residual"
  | "share"
  | "exact"
  | "iterations"
  | "finite";

/** Where a class and its budget come from. */
export type QuantityOrigin =
  /** A row of the plan's quantity table, with the plan's value. */
  | "plan"
  /** A class for a kind of field the plan's table has no row for, with a way of comparing of its own. */
  | "addition"
  /** A kind of field no row names, held to a plan row's budget restated in the field's own terms. */
  | "derived";

export interface Quantity {
  /** Name in reports. */
  readonly title: string;
  /** Unit of the measure a report prints: the field's unit, or "relative". */
  readonly unit: string;
  readonly kind: ComparisonKind;
  /** C1 budget in `unit`. Zero for the kinds that carry none. */
  readonly c1: number;
  /** C2 budget in `unit`, or null where the C1 budget stands under C2 (see `C2_CRITERIA`). */
  readonly c2: number | null;
  /** `relative` only: the least the bound may be, as an absolute difference in the unit it names. */
  readonly floor?: { readonly bound: number; readonly unit: string };
  /**
   * `residual` only: the tolerance of a solver that accepts every residual under one, or a bound restated from it,
   * in mm. A class without it reads the tolerance recorded beside each residual (`BudgetRule.tolerance`).
   */
  readonly tolerance?: number;
  readonly origin: QuantityOrigin;
  /**
   * Set on the output of a fixed-step bisection or a bracketed search: the solver, and the largest step its output
   * moves by, in `unit`. It is for reports alone and never a budget.
   */
  readonly solver?: { readonly name: string; readonly quantum: number };
}

function absolute(title: string, unit: string, c1: number, origin: QuantityOrigin): Quantity {
  return { title, unit, kind: "absolute", c1, c2: null, origin };
}

function relative(title: string, c1: number, origin: QuantityOrigin, floor?: Quantity["floor"]): Quantity {
  return { title, unit: "relative", kind: "relative", c1, c2: null, ...(floor ? { floor } : {}), origin };
}

/* The floor of a relative class of lengths: 1e-12 mm, which is the 1e-12 relative budget at 1 mm. A length may be
 * exactly zero (a vertex at z = 0, an entrance pupil in the stop plane, a chief ray through a stop at the first
 * surface), and there a relative bound would admit nothing but zero. A drawing offset is a length in px and takes
 * the same number. */
const LENGTH_FLOOR = { bound: 1e-12, unit: "mm" } as const;

/* The floor of the class of clipped, exterior and diagnostic points: the plan's 1e-7 mm, which is the whole budget
 * for any point within 100 m of the lens. Beyond that the class is relative, at 1e-12 of the point's own size. A
 * clipped ray that the legacy tracer follows as a ghost path can leave the lens altogether, and its points then
 * run to 1e8 mm and far past it, where two adjacent floating-point values are more than 1e-7 mm apart and no
 * absolute bound can be met. */
const FAR_POINT_FLOOR = { bound: 1e-7, unit: "mm" } as const;

/* The floor of the class of analysis lengths: the plan's 1e-8 mm, which is the whole budget for a length under
 * 100 mm. Beyond that the class is relative, at 1e-10 of the length's own size. A focus position, an axial intercept
 * or a traced pupil position is where two rays cross, or where one crosses the axis: a height over a slope. Where
 * the rays are nearly parallel that slope is small, the crossing lies metres from the lens, and rounding that
 * moves the slope by some part of itself moves the crossing by the same part of its distance. An off-axis ray that
 * leaves a teleconverter pair nearly parallel to the axis crosses it 23 m away, and the chief ray of a
 * near-telecentric field 44 m away, where a move of 1e-11 of the position is 5e-7 mm and no absolute bound can be
 * met. It is the far point of the clipped-hit class again, for a length an analysis reports.
 *
 * The share is a fixed one, and a crossing's is not. Rounding moves a slope by an amount that does not depend on
 * where the ray crosses, so the crossing z = −y/u moves by z²·δu/y: by the square of its distance, and by a share
 * of its distance that grows with the distance. On the two lenses it was settled on, the step moved its crossings
 * by up to 7.3e-16 mm per mm² of distance, the 44 m one by 2.6e-16, so 1e-10 of the distance holds such rounding
 * out to some hundreds of metres (136 m at the largest of those, 388 m at the 44 m sample's own) and no farther. A
 * crossing beyond that which fails by a few times its budget is this limit, not a regression, and the plan's to
 * settle. */
const FAR_LENGTH_FLOOR = { bound: 1e-8, unit: "mm" } as const;

function exact(title: string, origin: QuantityOrigin): Quantity {
  return { title, unit: "", kind: "exact", c1: 0, c2: null, origin };
}

/** Mark a class as a solver's output. Its budget stays what it is; a report adds the solver and the quantum. */
function solverOutput(quantity: Quantity, name: string, quantum: number): Quantity {
  return { ...quantity, solver: { name, quantum } };
}

/* A solve's residual, held to the tolerance the solve accepts a residual under and never differenced. */
function solveResidual(title: string, tolerance: number, unit = "of the solve's tolerance"): Quantity {
  return { title, unit, kind: "residual", c1: 1, c2: null, tolerance, origin: "addition" };
}

/*
 * A bisection that runs a fixed number of steps returns a grid point of its starting bracket, and a bracketed search
 * stops somewhere inside its last bracket. Reordered arithmetic leaves such an output bit-identical unless a
 * comparison inside the solver falls the other way, and then the output moves by a step of the solver: its quantum.
 *
 * A quantum is not a budget. Each of these fields is held to the plan's row for its kind of quantity, which a
 * reordering that flips no comparison stays far inside. When one fails, the report gives the difference in quanta
 * as well, so a boundary transition (about a whole quantum) can be told from drift (a small part of one).
 *
 * - Build half-fields: 40 halvings of [0, paraxial half-field], and that bracket is at most 90°.
 * - Raw field geometry: 20 halvings of the same kind of bracket.
 * - Analysis field geometry: where a rim clips the chief ray, 8 halvings of a walk step of at most 5°. A field that
 *   ends at the format corner instead is settled by regula falsi to 1e-4 mm of image height, which is finer.
 */
const BUILD_HALF_FIELD_QUANTUM_DEG = 90 / 2 ** 40;
const RAW_HALF_FIELD_QUANTUM_DEG = 90 / 2 ** 20;
const ANALYSIS_HALF_FIELD_QUANTUM_DEG = 5 / 2 ** 8;

/**
 * The quantity classes.
 *
 * The first nine are the plan's rows with the plan's values, and `count` and `requested` are its tenth
 * row (statuses, counts, sample positions) for the numbers among them. `binnedStatistic` and `lengthRatio` are the
 * plan's too: two kinds of ratio it budgets by name. A budget here is a ceiling for a declared class of change, not
 * a measurement: the C1 noise floor is measured by running the harness against a commit that reorders one sum.
 */
export const QUANTITIES = {
  landing: absolute("Unclipped surface hit, image-plane landing", "mm", 1e-9, "plan"),
  clippedHit: relative("Clipped, exterior or diagnostic hit, 1e-7 mm at least", 1e-12, "plan", FAR_POINT_FLOOR),
  directionCosine: absolute("Direction cosine", "", 1e-10, "plan"),
  firstOrder: relative("First-order scalar", 1e-12, "plan", LENGTH_FLOOR),
  chiefLaunch: absolute("Chief-ray launch height", "mm", 1e-9, "plan"),
  fieldAngle: absolute("Field angle from image height", "deg", 1e-10, "plan"),
  analysisLength: relative("Analysis length, 1e-8 mm at least", 1e-10, "plan", FAR_LENGTH_FLOOR),
  percentage: absolute("Percentage", "points", 1e-8, "plan"),
  mtfModulation: absolute("MTF modulation", "", 1e-7, "plan"),
  count: exact("Count or index", "plan"),
  requested: exact("Sample position, request echo or authored value", "plan"),
  /* A bokeh footprint weighs each ray by its transmission and sums the weights into the bins of a radial profile:
   * a bin's density and its share of the energy, the mean density of the centre bins and of the rim bins, and the
   * ratio of those two. Through an absorbing element a weight is exp(−α · path), so each of these is a sum of such
   * weights or a ratio of two sums, and its last bits move when a hit moves inside its tolerance: the class cannot
   * be exact. It takes the budget of a smooth ratio, and no floor. The weights are never negative, so nothing
   * cancels in a sum of them, and a statistic moves by about as much of itself as its weights do, however faint
   * its bin. A bin no ray falls in is exactly zero on both sides, and one that is zero on one side alone has gained
   * a ray. A ray that changes bin moves a share by its whole weight, which is far outside the budget unless the ray
   * is all but absorbed. A footprint whose rays all weigh the same holds counts, and is not of this class
   * (`binsByRayWeight`). */
  binnedStatistic: relative("Weighted bin statistic of a bokeh profile", 1e-10, "plan"),
  /* One image-plane length an analysis measures over another: the extents of a spot on either side of its
   * centroid, or its sagittal span over its tangential one. Each length is an analysis length, held to 1e-8 mm,
   * and a sharp spot is some thousandths of a millimetre across. Rounding that moves such an extent by 1e-13 mm
   * moves the ratio by 1e-10 of itself, so the budget of a fraction cannot hold it. 1e-8 relative is a fixed bound.
   * For a spot under a millimetre across it is far tighter than the one the lengths' own budget implies: 1e-8 mm
   * in 1e-3 mm is 1e-5 of the ratio. A spot may be tens of millimetres across, and there the lengths' own rows are
   * the tighter ones: the spans, and the offsets and centroid the extents are taken from, are in the same record
   * under them. Neither ratio comes near zero without being zero, which the span ratio of a footprint with no rays
   * is, so the bound is plainly relative. */
  lengthRatio: relative("Ratio of two analysis lengths", 1e-8, "plan"),

  /* Beyond a legacy miss the tracer substitutes points off the ray. No app fan reads that tail. */
  legacyMissTail: {
    title: "Legacy points after a missed surface",
    unit: "",
    kind: "finite",
    c1: 0,
    c2: null,
    origin: "addition",
  },
  countRatio: exact("Count ratio", "addition"),
  /* The tolerance a hit was accepted under is the engine's raw target, 1e-12 mm, except at a stalled root. There it
   * is a computed float, the larger of that target and a roundoff envelope: 16·ε times the sum of the ray's
   * absolute operands. Reordered arithmetic moves the last bits of that sum, so above C0 the field takes the plan's
   * one relative budget. It is never below 1e-12 mm, so it needs no floor, and a relaxed tolerance, twice the
   * target or more, is far outside the budget. */
  effectiveTolerance: relative("Effective intersection tolerance", 1e-12, "derived"),
  /* Which of those two a hit was accepted under is a branch of the root finder, not a number that drifts: the
   * target where the residual met it, the envelope where the iteration stalled first. A tolerance that is the raw
   * target on one side only is therefore a discrete transition, listed as one (`toleranceByBranch`). */
  toleranceBranch: exact("Intersection tolerance, raw target against another", "addition"),
  intersectionResidual: {
    title: "Intersection residual",
    unit: "of its effective tolerance",
    kind: "residual",
    c1: 1,
    c2: null,
    origin: "addition",
  },
  /* What a digest keeps of the residuals behind it: the largest, as a share of the effective tolerance of its own
   * hit. `payload.ts` computes it, hit by hit, as the comparison reads a residual in a full trace. */
  nestedResidualShare: {
    title: "Largest residual in a digested trace",
    unit: "of its effective tolerance",
    kind: "share",
    c1: 1,
    c2: null,
    origin: "addition",
  },
  slope: { title: "Slope, as direction cosines", unit: "", kind: "slope", c1: 1e-10, c2: null, origin: "addition" },
  layoutLength: relative("Layout length", 1e-12, "addition", LENGTH_FLOOR),
  iterationCount: {
    title: "Solver iteration or evaluation count",
    unit: "steps",
    kind: "iterations",
    c1: 0,
    c2: null,
    origin: "addition",
  },

  /* The outputs of solvers, each at the plan's budget for its kind of quantity and marked with its solver's quantum.
   * A half-field is a field angle. A focus shift is an analysis length, and one of a fraction of a millimetre, so it
   * takes what that class allows a length under 100 mm: its floor, as a plain absolute bound. A radius has no row of
   * its own and takes the plan's one relative budget, with the floor of a length. */
  buildHalfField: solverOutput(
    absolute("Half-field bisected at build", "deg", 1e-10, "derived"),
    "the 40-step bisection of the build half-field",
    BUILD_HALF_FIELD_QUANTUM_DEG,
  ),
  rawHalfField: solverOutput(
    absolute("Raw half-field of a state", "deg", 1e-10, "derived"),
    "the 20-step bisection of a state's half-field",
    RAW_HALF_FIELD_QUANTUM_DEG,
  ),
  analysisHalfField: solverOutput(
    absolute("Analysis half-field and fields taken from it", "deg", 1e-10, "derived"),
    "the walk and 8-step clip bisection of the analysis half-field",
    ANALYSIS_HALF_FIELD_QUANTUM_DEG,
  ),
  /* The focus search ends when its golden-section bracket is 1e-6 mm wide. */
  mtfFocusShift: solverOutput(
    absolute("MTF best-focus shift", "mm", FAR_LENGTH_FLOOR.bound, "derived"),
    "the golden-section search for best MTF focus",
    1e-6,
  ),
  /* The best-fit search ends when its bracket is 1e-7 of the radius, or 1e-7 mm for a radius below 1 mm. */
  bestFitRadius: solverOutput(
    relative("Best-fit sphere radius", 1e-12, "derived", LENGTH_FLOOR),
    "the golden-section search for the best-fit sphere",
    1e-7,
  ),
  /* The Petzval focus position of a field is the image plane's z plus the sag of the Petzval sphere at the chief
   * ray's image height: a layout length and a closed form of a landing and the Petzval sum. No ray crosses another
   * to make it, so nothing in it is a height over a small slope, and it is long only because z is counted from the
   * first vertex: 256 mm on a long lens. A share of that size would hold it looser the longer the lens and for no
   * reason of conditioning, so it keeps what an analysis length is allowed under 100 mm, as a plain absolute bound
   * at any size. Its two terms are in the same record under rows of their own, the image plane's z as a layout
   * length and the sag as `petzvalShiftMm`. */
  petzvalPosition: absolute("Petzval focus position", "mm", FAR_LENGTH_FLOOR.bound, "derived"),
  /* A tangential parabasal pair differs in slope by about 0.01 mm over the focal length. On lenses from 800 mm
   * up, rounding amplified by that small divisor moves the crossing by a few 1e-8 mm even in the anchor. The
   * S3.P2.T1 Tier S settlement gives these crossings and their shifts and spans a 1e-7 mm floor, keeping the
   * analysis length's 1e-10 share beyond 1 m. Only the named jobs below compute that pair. */
  tangentialParabasalFocus: relative("Tangential parabasal focus, 1e-7 mm at least", 1e-10, "addition", {
    bound: 1e-7,
    unit: "mm",
  }),

  /* What a solve reports of its own convergence is a contract check, as a hit's residual is: each side must be
   * within the tolerance the solve accepts a residual under, and the two sides are not differenced. The engine
   * defines each tolerance beside its solve:
   * - the posed chief-ray solve hands `DEFAULT_RESIDUAL_TOLERANCE_MM`, 1e-7 mm, in
   *   `src/optics/perspective/chiefRay.ts`, to `solveScalarRoot` as its residual tolerance. The residual is the
   *   miss at the moved stop's center along the pupil's radial axis;
   * - the sensor lock holds both components of its miss on the sensor to `SENSOR_LOCK_RESIDUAL_TOLERANCE_MM`,
   *   1e-5 mm, in `src/optics/perspective/sensorTarget.ts`, and hands the same number to `solveScalarRoot` for its
   *   meridional solve. */
  chiefStopResidual: solveResidual("Posed chief-ray stop residual", 1e-7),
  sensorLockResidual: solveResidual("Sensor-lock residual", 1e-5),
  /* The chief ray's distance from the stop's center in the stop plane is the chief solve's miss again. The solve
   * took its residual along an axis square to the ray, so this one is larger by one over the cosine of the field
   * angle, and no tolerance of the engine's names it. It is held to 1e-6 mm, ten times the solve's tolerance, which
   * covers that growth for fields up to 84°. */
  chiefStopPlaneResidual: solveResidual(
    "Posed chief-ray stop residual, in the stop plane",
    1e-6,
    "of its bound in the stop plane",
  ),

  /* No row of the plan names these, and none of them is a length. An index is an input to every first-order
   * scalar, and a ratio of ray heights, an f-number, the Petzval sum and a drawing scale are first-order scalars
   * with another unit, so they take that budget. None comes near zero without being zero (the engine gives a
   * folded system a Petzval sum of exactly 0), so the bound is plainly relative. So is that of a prescription the
   * engine hands back: its values have no one unit, an asphere coefficient among them is far smaller than any
   * floor of a length, and what was authored as zero comes back as zero. A smooth dimensionless ratio
   * (transmission, weight, relative illumination) takes the percentage budget restated for a fraction: 1e-8 points
   * is 1e-10 of a value near 1. Such a fraction is often zero, and its floor is that 1e-10. */
  refractiveIndex: relative("Refractive index", 1e-12, "derived"),
  nonLength: relative("Ratio, f-number, power or scale", 1e-12, "derived"),
  prescription: relative("Prescription value handed back", 1e-12, "derived"),
  ratio: relative("Smooth dimensionless ratio", 1e-10, "derived", { bound: 1e-10, unit: "" }),
} as const satisfies Record<string, Quantity>;

export type QuantityId = keyof typeof QUANTITIES;

/**
 * The plan's C2 column, for the rows where it is a criterion rather than a number. Each is a solver criterion
 * carried through a derivative, which two payloads alone cannot supply, so no C2 budget is derived from them here:
 * under C2 these classes, like every other, are held to their C1 budget until S6.P2.T1 adds the propagation
 * before its engine change, the first whose solver output can move beyond a C1 budget. The plan gives no C2
 * budget for traces at all (a trace change is never C2).
 */
export const C2_CRITERIA: Partial<Record<QuantityId, string>> = {
  chiefLaunch: "twice the solver's stop-residual tolerance, mapped through ∂y_stop/∂y_launch",
  fieldAngle: "both solutions' image heights within twice the inversion tolerance",
  analysisLength: "the governing solver criterion, propagated by a finite-difference derivative",
  percentage: "the governing solver criterion, propagated by a finite-difference derivative",
  mtfModulation: "the governing solver criterion, propagated, and never looser than 1e-4",
};

/**
 * Budget of a quantity under a change class, before a rule's scale.
 *
 * @param quantity - quantity class
 * @param changeClass - declared class; C0 and C3 read the C1 budget, which a report prints beside a difference
 * @returns the budget in the quantity's unit
 */
export function budgetOf(quantity: QuantityId, changeClass: ChangeClass): number {
  const { c1, c2 } = QUANTITIES[quantity];
  return changeClass === "c2" && c2 !== null ? c2 : c1;
}

/* ── Sibling flags ── */

/**
 * Where a numeric leaf sits in the two records under comparison: what a selector needs to read the flags beside it.
 * The comparator reuses one context for a whole walk, so a selector reads it and keeps nothing.
 */
export interface LeafContext {
  /** Containers from the record's value down to the leaf's parent, as the base side holds them. */
  readonly base: readonly unknown[];
  /** The same containers on the head side. */
  readonly head: readonly unknown[];
  /** `keys[d]` is the member of container `d` that leads on: to container `d + 1`, or from the last to the leaf. */
  readonly keys: readonly (string | number)[];
}

/** Picks the class of a field whose budget depends on flags beside it. */
export type QuantitySelector = (leaf: LeafContext) => QuantityId;

function memberOf(container: unknown, key: string | number): unknown {
  return typeof container === "object" && container !== null
    ? (container as Record<string | number, unknown>)[key]
    : undefined;
}

/**
 * Read the same column of the hit a leaf belongs to, on both sides.
 *
 * Hits are stored column-wise, `hits.columns.<member>[hit]`, so the flag beside `point[hit][axis]` is
 * `clipped[hit]` in a sibling column, not a member of the same object.
 *
 * @param leaf - a leaf under `hits.columns`
 * @param column - the sibling column to read
 * @returns the base and head entries of that column for the leaf's hit; `undefined` where there is none
 */
export function hitColumnEntries(leaf: LeafContext, column: string): [base: unknown, head: unknown] {
  const depth = leaf.keys.lastIndexOf("columns") + 1;
  if (depth === 0 || depth + 1 >= leaf.keys.length) return [undefined, undefined];
  const hit = leaf.keys[depth + 1];
  return [memberOf(memberOf(leaf.base[depth], column), hit), memberOf(memberOf(leaf.head[depth], column), hit)];
}

/* A hit is budgeted as unclipped only when both sides say so. A flag that differs is a transition of its own, and
 * the coordinates beside it then take the looser budget. The sequential tracer marks every hit after a ghost ray
 * first clips, so "clipped" covers the whole exterior tail. */
const hitByClipFlag: QuantitySelector = (leaf) => {
  const [base, head] = hitColumnEntries(leaf, "clipped");
  return base === false && head === false ? "landing" : "clippedHit";
};

/*
 * The tolerance the engine's root finder asks of every intersection, in mm: `INTERSECTION_TOLERANCE` in
 * `src/optics/constants.ts`, copied because this module imports nothing. A hit records exactly this number as its
 * effective tolerance unless its root stalled. The harness tests hold the copy to the engine's constant.
 */
export const RAW_INTERSECTION_TOLERANCE_MM = 1e-12;

/* An effective tolerance is the raw target or a stall envelope above it. Between two envelopes it is a number at
 * the class's relative budget. The raw target on one side alone is a hit that stalled on one engine and converged
 * on the other, each residual still held to its own tolerance: a boundary transition, which belongs among the
 * discrete ones and not among the numbers beyond budget. A tolerance relaxed from the target is the same finding.
 * The largest tolerance a digest keeps of the hits behind it is read the same way. */
const toleranceByBranch: QuantitySelector = (leaf) => {
  const depth = leaf.keys.length - 1;
  const atTarget = (side: readonly unknown[]) =>
    memberOf(side[depth], leaf.keys[depth]) === RAW_INTERSECTION_TOLERANCE_MM;
  return atTarget(leaf.base) === atTarget(leaf.head) ? "effectiveTolerance" : "toleranceBranch";
};

/** The object a ray-level leaf belongs to: its parent, or its grandparent for a component of a point. */
function owningObjects(leaf: LeafContext): [base: unknown, head: unknown] {
  const last = leaf.base.length - 1;
  const depth = Array.isArray(leaf.base[last]) ? last - 1 : last;
  return [leaf.base[depth], leaf.head[depth]];
}

/* A terminal point, a vertex-plane height and an image-plane landing are those of a completed ray only when the
 * trace ended "ok" on both sides. */
const rayByStatus: QuantitySelector = (leaf) => {
  const [base, head] = owningObjects(leaf);
  return memberOf(base, "status") === "ok" && memberOf(head, "status") === "ok" ? "landing" : "clippedHit";
};

function firstLegacyMiss(ray: unknown): unknown {
  const events = memberOf(memberOf(ray, "diagnostics"), "clipEvents");
  return Array.isArray(events)
    ? events.find((event) => memberOf(event, "reason") === "intersection-failure")
    : undefined;
}

/* rayTrace's point appender drops non-finite hits, but its diagnostics retain their indexes. A ghost's drawn
 * position is a lower bound on its hit position: dropped points can only move it later, never before the miss. */
const legacyGhostByMiss: QuantitySelector = (leaf) => {
  const depth = leaf.keys.indexOf("ghostPts");
  const index = leaf.keys[depth + 1];
  const behind = (side: readonly unknown[]) => {
    const ray = side[depth];
    const pts = memberOf(ray, "pts");
    const ghosts = memberOf(ray, "ghostPts");
    const hits = memberOf(memberOf(ray, "diagnostics"), "hitSurfaceIndexes");
    const surfaceIdx = memberOf(firstLegacyMiss(ray), "surfaceIdx");
    if (
      !Array.isArray(pts) ||
      pts.length === 0 ||
      !Array.isArray(ghosts) ||
      !Array.isArray(hits) ||
      typeof index !== "number" ||
      typeof surfaceIdx !== "number"
    )
      return false;
    const missPosition = hits.indexOf(surfaceIdx);
    return missPosition >= 0 && pts.length - 1 + index >= missPosition;
  };
  return behind(leaf.base) && behind(leaf.head) ? "legacyMissTail" : "clippedHit";
};

/* The stack tracer's result has no status, only `clipped`. */
const legacyRayByClipFlag: QuantitySelector = (leaf) => {
  const [base, head] = owningObjects(leaf);
  const behind = (ray: unknown) => memberOf(ray, "clipped") === true && firstLegacyMiss(ray) !== undefined;
  if (behind(base) && behind(head)) return "legacyMissTail";
  return memberOf(base, "clipped") === false && memberOf(head, "clipped") === false ? "landing" : "clippedHit";
};

/**
 * Class a solve's residual by the status of the solve it belongs to.
 *
 * A solve accepted its residual under its tolerance only where its status says "converged". One that ended any
 * other way returned the miss of its nearest sample, which no tolerance bounds: a diagnostic, as the coordinates of
 * a clipped ray are, and held to that row.
 *
 * @param accepted - the class of a residual the solve accepted
 * @param up - how many containers above the residual's own the solve is
 * @param member - the member of that container that holds the solve, when the residual sits beside its solve
 * @returns the selector
 */
function residualOfSolve(accepted: QuantityId, up = 0, member?: string): QuantitySelector {
  return (leaf) => {
    const depth = leaf.base.length - 1 - up;
    const solveOf = (container: unknown) => (member === undefined ? container : memberOf(container, member));
    const converged = (container: unknown) => memberOf(solveOf(container), "status") === "converged";
    return converged(leaf.base[depth]) && converged(leaf.head[depth]) ? accepted : "clippedHit";
  };
}

/* The radial profile of a bokeh footprint sums the weights of the footprint's points into its bins, and the record
 * holds those points beside the profile, each with its weight. Where every point of both sides has one and the same
 * weight, each statistic is a function of the counts in the bins, which rounding cannot move. A difference is then
 * a ray that changed bin: a discrete transition, declared as one. That is every lens with no absorbing element.
 * Where the weights differ, within a side or between the two, the statistics are sums that round each in its own
 * way and take the budget of a weighted bin. A ray that changes bin there is a number far beyond it, which no line
 * declares. A profile with no points beside it does not say what its rays weigh, and is taken as weighted. */
const binsByRayWeight: QuantitySelector = (leaf) => {
  /* The footprint is the nearest container above the leaf that holds points, on either side. */
  for (let depth = leaf.base.length - 1; depth >= 0; depth--) {
    const sides = [memberOf(leaf.base[depth], "points"), memberOf(leaf.head[depth], "points")];
    if (sides.every((points) => points === undefined)) continue;
    if (!sides.every((points) => Array.isArray(points))) return "binnedStatistic";
    /* A side that lost every ray has no weight to differ, and its empty profile is one of counts too. */
    const points = (sides as unknown[][]).flat();
    const first = memberOf(points[0], "weight");
    const oneWeight = points.every((point) => first !== undefined && memberOf(point, "weight") === first);
    return oneWeight ? "countRatio" : "binnedStatistic";
  }
  return "binnedStatistic";
};

/* ── The table ── */

/** One row of the budget table as the comparator applies it. */
export interface BudgetRule {
  readonly quantity: QuantityId | QuantitySelector;
  /**
   * How many of the field's units make one of the quantity's, for a field that restates another in a different
   * unit: 1000 for micrometres, the px per mm of a drawing. The comparator divides by it before it compares, the
   * values as well as their difference, so the bound is one physical bound whichever unit a number is stored in: an
   * absolute budget and a floor are that many times larger in the field's unit, and a share of the value is the
   * same share.
   */
  readonly scale: number;
  /** `slope` only: the sibling member that holds the other slope of the same ray. */
  readonly partner?: string;
  /** `residual` only: the sibling hit column that holds the tolerance the residual was accepted under. */
  readonly tolerance?: string;
  /**
   * `residual` only: for a field that restates, in another frame, the residual its solve accepted. `solve` is the
   * member beside the field that holds the solve, and `quantity` the class that solve's own `residual` belongs to.
   * The field is held to its own class's bound, and it breaks its contract as well when the residual its solve
   * accepted is outside that class's tolerance.
   */
  readonly accepted?: { readonly solve: string; readonly quantity: QuantityId };
  /**
   * The field hands prescription data back. A non-finite number there was authored (the focal length of a plane
   * element), not one the engine failed to compute, so it is no sign that a data change broke anything.
   */
  readonly authored?: boolean;
}

type RuleOptions = Partial<Pick<BudgetRule, "scale" | "partner" | "tolerance" | "accepted" | "authored">>;
type TableRow = readonly [quantity: BudgetRule["quantity"], paths: readonly string[], options?: RuleOptions];

/*
 * Path patterns. A pattern is `family:path`. The path is that of a field under the record's value, with object
 * members joined by "." and one "[]" per array level. In a pattern, "*" stands for any one member name (and may be
 * part of a name, as in "*Um"), "**" for any run of members and array levels, and "{a,b}" for either name. The
 * first matching row decides, so a path has one class however many rows match it: rows that name a context come
 * before rows that go by the member name alone.
 */
const TABLE: readonly TableRow[] = [
  /* ── Build constants ── */
  /* The prescription the lens was built from, after defaults and rear plates. It is authored data for a catalog
   * lens and the composer's arithmetic for a converter pair, so it is classed as the composed prescription is. */
  ["prescription", ["build:data.**"], { authored: true }],
  ["count", ["build:elements[].id"], { authored: true }],
  ["requested", ["build:elements[].**"], { authored: true }],
  [
    "firstOrder",
    [
      "build:{EFL,B,apertureReferenceFocalLength}",
      "build:EP.epSD",
      "build:{epZRelStop,xpZRelLastSurf,xpSD,stopPhysSD,stopHousingSD}",
      "build:{zoomEFLs,zoomBs,zoomEPs,zoomStopSDs}[]",
      "build:{zoomEpZRelStops,zoomXpZRelLastSurfs,zoomXpSDs}[]",
      /* The stop's radius is the engine's own; the other radii are authored and never move. */
      "build:S[].sd",
    ],
  ],
  /* The f-number, the ratio of the marginal ray's height at the stop to its height at the pupil, the Petzval sum
   * in 1/mm, the drawing scales in px per mm and the sine and tangent of the largest rim angle. */
  [
    "nonLength",
    ["build:{FOPEN,petzvalSum,SC,YSC,maxRimSin,maxRimTan}", "build:EP.yRatio", "build:{zoomYRatios,zoomFOPENs}[]"],
  ],
  [
    "buildHalfField",
    ["build:{halfField,tracingHalfField,offAxisFieldDeg}", "build:{zoomHalfFields,zoomTracingHalfFields}[]"],
  ],
  [
    "layoutLength",
    [
      "build:{totalTrack,maxSD,rayLead,gridPitch}",
      "build:ly*",
      "build:{rayHeights,offAxisHeights}[]",
      "build:imagePlane.{z,y}",
    ],
  ],
  ["directionCosine", ["build:imagePlane.normal.*"]],
  ["ratio", ["build:bladeStubFrac"]],
  ["refractiveIndex", ["build:indexByIdx.*.indices.*"]],
  [
    "count",
    [
      "build:{N,stopIdx,lastLensSurfaceIdx,gridCount,svgH}",
      "build:ES[][]",
      "build:S[].elemId",
      "build:asphericSurfaceIndexes[]",
      "build:labelIdx.*",
      "build:{doublets,groups}[].{fromSurface,toSurface}",
      "build:**.varLabels[][]",
      "build:opticalPath.maxInteractions",
      "build:opticalPath.surfaceOrder[]",
    ],
  ],
  [
    "requested",
    [
      /* A surface of `S` as the engine holds it. Its inner radius, interaction and diffractive phase are the
       * prescription's unless the engine changed them, and a curved radius likewise; a flat one is a marker. */
      "build:S[].{d,nd,R,innerSd}",
      "build:S[].{interaction,diffractive}.**",
      "build:{focusPositions,zoomPositions,zoomCloseFocusM,fstopSeries,rayFractions,offAxisFractions}[]",
      "build:{zoomStep,lensShiftFrac,closeFocusM,focusStep,maxFstop,apertureStep}",
      "build:{offAxisFieldFrac,svgW,gapSagFrac}",
      "build:vdByIdx.*",
      "build:spectralByIdx.*.*",
      "build:**.varByIdx.**",
      "build:aberrationControl.step",
      "build:{perspectiveControl,projection}.**",
    ],
  ],

  /* ── Composition of a converter pair ── */
  ["count", ["composition:compatibility.geometry.platesAhead"]],
  ["layoutLength", ["composition:compatibility.geometry.*"]],
  /* The composed prescription is authored data moved and scaled by the composer: sums of thicknesses, focal
   * lengths and f-numbers times the magnification. */
  ["prescription", ["composition:prescription.**"], { authored: true }],

  /* ── Layout ── */
  ["directionCosine", ["layout:imagePlane.normal[]"]],
  ["firstOrder", ["layout:surfaceSemiDiameters[]"]],
  ["layoutLength", ["layout:{imgZ,totalTrack}", "layout:{z,th}[]", "layout:imagePlane.point[]", "layout:legacy.**"]],

  /* ── Field geometry and chief solves ── */
  ["rawHalfField", ["fieldGeometry:raw.halfFieldDeg"]],
  ["analysisHalfField", ["fieldGeometry:analysis.halfFieldDeg"]],
  ["nonLength", ["fieldGeometry:*.yRatio"]],
  ["firstOrder", ["fieldGeometry:*.{b,epRatio,epSD}", "fieldGeometry:{stopSemiDiameterMm,pupilSemiDiameterMm}"]],
  [
    "analysisHalfField",
    [
      "chiefSolves:halfFieldDeg",
      "chiefSolves:solves[].fieldAngleDeg",
      "chiefSolves:solves[].vectorLaunch.{fieldAngleXDeg,fieldAngleYDeg,totalFieldDeg}",
    ],
  ],
  ["requested", ["chiefSolves:solves[].fieldFraction"]],
  ["iterationCount", ["chiefSolves:solves[].iterations"]],
  ["slope", ["chiefSolves:solves[].uField"]],
  ["chiefLaunch", ["chiefSolves:solves[].yLaunch", "chiefSolves:solves[].vectorLaunch.origin[]"]],
  ["directionCosine", ["chiefSolves:solves[].vectorLaunch.{direction,radialPupilAxis,sagittalPupilAxis}[]"]],
  ["layoutLength", ["chiefSolves:solves[].vectorLaunch.{launchBoundT,launchRadiusMm}"]],

  /* ── Traces ── */
  ["firstOrder", ["traces:{stopSemiDiameterMm,pupilSemiDiameterMm}"]],
  ["requested", ["traces:**.pupilFractions[]", "traces:*.fieldFraction"]],
  ["analysisHalfField", ["traces:*.fieldAngleDeg"]],
  [hitByClipFlag, ["traces:**.hits.columns.point[][]", "traces:**.hits.columns.radius[]"]],
  ["directionCosine", ["traces:**.hits.columns.{normal,incidentDirection,outgoingDirection}[][]"]],
  ["intersectionResidual", ["traces:**.hits.columns.residual[]"], { tolerance: "effectiveTolerance" }],
  [toleranceByBranch, ["traces:**.hits.columns.effectiveTolerance[]"]],
  ["count", ["traces:**.hits.count", "traces:**.hits.columns.surfaceIndex[]"]],
  /* The RuntimeLens stack tracer, before the rows that go by member name. Its drawn points are the hits. */
  ["landing", ["traces:legacy.rays[].pts[][]", "traces:legacy.rays[].paraxialImageHeight"]],
  [legacyGhostByMiss, ["traces:legacy.rays[].ghostPts[][]"]],
  [legacyRayByClipFlag, ["traces:legacy.rays[].y"]],
  ["slope", ["traces:legacy.rays[].u"]],
  ["ratio", ["traces:legacy.rays[].transmission"]],
  /* A ray is launched from a pupil height or a chief-ray solve, never from an authored number. */
  ["chiefLaunch", ["traces:**.input.origin[]"]],
  ["directionCosine", ["traces:**.input.direction[]", "traces:**.terminalDirection[]"]],
  [rayByStatus, ["traces:**.{terminalPoint,imagePoint}[]", "traces:**.{x,y}"]],
  ["slope", ["traces:**.ux"], { partner: "uy" }],
  ["slope", ["traces:**.uy"], { partner: "ux" }],
  ["refractiveIndex", ["traces:**.finalMedium"]],
  /* The ray parameter of a candidate surface the path planner passed over. */
  ["clippedHit", ["traces:**.skippedCandidates[].t"]],
  [
    "count",
    [
      "traces:**.{terminalSurfaceIndex,returnVertexIndex}",
      "traces:**.diagnostics.{maxInteractions,terminalSurfaceIndex}",
      "traces:**.diagnostics.hitSurfaceIndexes[]",
      "traces:**.{clipEvents,skippedCandidates}[].surfaceIdx",
      "traces:**.autoSteps[].step",
    ],
  ],

  /* ── MTF ── */
  ["requested", ["mtf:options.fieldFractions[]", "mtf:options.maxGridSize"]],
  ["firstOrder", ["mtf:options.{pupilSemiDiameterMm,stopSemiDiameterMm}"]],
  ["nonLength", ["mtf:result.aperture.tracedFNumber"]],
  [
    "mtfModulation",
    [
      "mtf:result.fields[].{sagittal,tangential}[]",
      "mtf:result.fields[].maxDelta",
      "mtf:result.fields[].diffractionLimit.{sagittal,tangential}[]",
      "mtf:result.focus.{designScore,bestScore}",
    ],
  ],
  ["mtfFocusShift", ["mtf:result.focus.{bestAxialShiftMm,appliedShiftMm}"]],
  ["count", ["mtf:result.fields[].{gridSize,validRays,blockedRays,failedRays}"]],
  [
    "requested",
    [
      "mtf:result.frequenciesPerMm[]",
      "mtf:result.fields[].{fieldFraction,convergedThroughLpMm}",
      "mtf:result.support.referenceWavelengthNm",
      "mtf:result.support.spectralLines[].*",
      "mtf:result.support.conjugate.**",
    ],
  ],
  /* Each field angle is inverted from its target image height. */
  ["fieldAngle", ["mtf:result.fields[].fieldAngleDeg", "mtf:result.geometry.{modeledEdgeAngleDeg,chiefEdgeAngleDeg}"]],
  ["landing", ["mtf:result.fields[].imageHeightMm"]],
  [
    "analysisLength",
    [
      "mtf:result.fields[].targetImageHeightMm",
      "mtf:result.geometry.{referenceHeightMm,modeledEdgeHeightMm,chiefEdgeHeightMm}",
      "mtf:result.focus.imagePlaneOffsetMm",
    ],
  ],
  ["ratio", ["mtf:result.fields[].unknownFluxFraction"]],

  /* ── Analysis: rows that name a context ── */
  [
    "nonLength",
    ["analysis:inputs.fieldGeometry.yRatio", "analysis:jobs.effectiveFNumber.value", "analysis:**.intrinsic.yRatio"],
  ],
  [
    "firstOrder",
    [
      "analysis:inputs.{dynamicEFL,stopSemiDiameterMm,pupilSemiDiameterMm}",
      "analysis:inputs.fieldGeometry.{b,epRatio}",
      /* Paraxial pupils of the posed lens; the samples beside them are traced. */
      "analysis:**.intrinsic.**",
      "analysis:jobs.cardinalElements.value.points.*.z",
      "analysis:jobs.cardinalElements.value.distances.*.*",
    ],
  ],
  /* The digest that stands in for a nested trace keeps its hit count readable, the largest residual behind it as a
   * share of that hit's effective tolerance, and the largest of those tolerances. A share says nothing unless the
   * tolerance it is a share of is held too, and that one is held as the tolerance of a hit in a full trace is. */
  ["count", ["analysis:**.hitCount"]],
  ["nestedResidualShare", ["analysis:**.residualShare"]],
  [toleranceByBranch, ["analysis:**.largestTolerance"]],
  /* Group movement is layout arithmetic on a sample grid; nothing in it is traced. The job names are single
   * members that contain a dot ("groupMovement.focus"). */
  [
    "layoutLength",
    [
      "analysis:jobs.groupMovement*.**.{shiftMm,positionMm,maxAbsShiftMm}",
      "analysis:jobs.groupMovement*.**.positionDomain[]",
    ],
  ],
  [
    "requested",
    ["analysis:jobs.groupMovement*.**.{x,focusT,zoomT,focalLengthMm}", "analysis:jobs.groupMovement*.**.xDomain[]"],
  ],
  /* The blur character of spherical aberration bins its rays at the weight the pupil sampler gave them, the same
   * for every ray: the engine multiplies no transmission into it, on an absorbing lens either. Each statistic of
   * its radial profile is then a function of the counts in the bins, on every lens, and stays exact with the count
   * ratios. Its record holds no points beside the profile, so the row names the job. The bokeh footprints, which
   * do weigh a ray by its transmission, go by member name further down and by the weights of their points. */
  [
    "countRatio",
    [
      "analysis:jobs.computeSphericalAberrationBlurCharacter.**.{density,energyFraction}",
      "analysis:jobs.computeSphericalAberrationBlurCharacter.**.{centerDensity,rimDensity,centerToRimRatio}",
    ],
  ],
  ["bestFitRadius", ["analysis:jobs.asphericComparison.**.bestFitRadius"]],
  ["requested", ["analysis:jobs.asphericComparison.**.h"]],
  ["analysisLength", ["analysis:jobs.asphericComparison.**.delta", "analysis:jobs.computeBestFocusZ.value"]],
  /* The LoCA inset draws a focus shift at a fixed magnification, 70% of half its bar width for 0.15 mm, which is
   * about 201 px per mm. A bar's offset in px is the shift restated; the magnification is a ratio of two scales.
   * Where the widest bar would leave the inset the engine shrinks them all, and the magnification is half the
   * inset's width over the largest shift: a constant over one analysis length. The smooth ratio's 1e-10 is then
   * tighter than that length's own budget implies, 3e-11 mm of a 0.3 mm shift against 1e-8 mm. The plan's ratio of
   * two analysis lengths does not name it. */
  ["analysisLength", ["analysis:jobs.locaBarOffsets.**.barOffsets.*"], { scale: 201 }],
  ["ratio", ["analysis:jobs.locaBarOffsets.**.mag"]],
  /* Field angles inverted from an image height or a sensor point. The other analyses step through fractions of
   * the analysis half-field. */
  [
    "fieldAngle",
    [
      "analysis:jobs.computeDistortionCurve.**.{fieldAngleDeg,idealFieldAngleDeg}",
      "analysis:jobs.computePerspective*.**.fieldAngleDeg",
    ],
  ],
  ["analysisHalfField", ["analysis:**.{halfFieldDeg,fullFieldDeg,fieldAngleDeg,fieldDeg,offAxisFieldAngleDeg}"]],
  /* The posed chief-ray solve and the sensor lock around it. Each residual goes by the status of its own solve:
   * the root solve's and the scalar root's beside them, the sensor lock's two components one level up. The stop
   * residual is the chief ray's distance from the stop's center in the stop plane: the root solve's residual
   * again, in another frame. It is held to its own bound, and it answers through the residual the solve accepted
   * as well, which may be the same on both sides while this field differs. */
  ["chiefLaunch", ["analysis:**.rootSolve.root", "analysis:**.rootSolve.bracket[]"]],
  [residualOfSolve("chiefStopResidual"), ["analysis:**.rootSolve.residual"]],
  [
    residualOfSolve("chiefStopPlaneResidual", 0, "rootSolve"),
    ["analysis:**.stopResidualMm"],
    { accepted: { solve: "rootSolve", quantity: "chiefStopResidual" } },
  ],
  ["landing", ["analysis:**.scalarRoot.root", "analysis:**.scalarRoot.bracket[]"]],
  [residualOfSolve("sensorLockResidual"), ["analysis:**.scalarRoot.residual"]],
  [residualOfSolve("sensorLockResidual", 1), ["analysis:**.residualMm.*"]],
  ["requested", ["analysis:**.{requestedSensorUv,pupilUv}.*", "analysis:**.pupilPoints[].{u,v}"]],
  ["ratio", ["analysis:**.sensorUv.*"]],
  /* Surviving rays over launched rays. */
  ["countRatio", ["analysis:**.{pupilFootprint,fields[]}.transmission"]],
  /* A pupil footprint is measured in fractions of the pupil. */
  ["ratio", ["analysis:**.pupilFootprint.{centroidSagittal,centroidTangential,spanSagittal,spanTangential}"]],
  /* The axial crossing and the image-plane height of each chromatic channel, keyed by channel. */
  ["analysisLength", ["analysis:**.axialIntercepts.*"]],
  /* The exit pupil of one field of a pupil-aberration profile is where that field's solved chief ray, traced
   * through the lens, crosses the axis: its height at the last surface over its slope there. It is a traced
   * crossing, as the shift beside it is, and no paraxial constant: the chief ray of a near-telecentric field leaves
   * nearly parallel to the axis, and the crossing is tens of metres away. The sample on the axis, and one whose
   * chief ray gives no crossing, repeat the profile's paraxial position, which the first-order row further down
   * holds beside the samples as `paraxialXpZRelLastSurf`. The entrance-pupil samples hold no position, only a
   * shift, which is an analysis length by its name. The row goes by the sample, not by the job: in an analysis
   * result the engine gives this name to nothing but a field's traced position, in the profiles computed together
   * (`xp.samples[]`) and in the exit-pupil profile computed alone (`samples[]`), which no job captures today. */
  ["analysisLength", ["analysis:**.samples[].xpZRelLastSurf"]],
  ["landing", ["analysis:**.imagePlaneHeights.*"]],

  /* These jobs share the tangential parabasal crossing; the posed field-aberration job and the full-fan
   * diagnostic foci do not. The rows precede both generic analysis-length rows, including micrometre twins. */
  [
    "tangentialParabasalFocus",
    [
      "analysis:jobs.computeFieldCurvature.value.{fields,curveFields}[].{tangentialBestFocusZ,tangentialShiftMm,astigmaticDifferenceMm}",
      "analysis:jobs.computeFieldCurvatureBundle.value.{fieldCurvature,chromaticFieldCurvature}.{fields,curveFields}[].{tangentialBestFocusZ,tangentialShiftMm,astigmaticDifferenceMm}",
      "analysis:jobs.computeFieldCurvature.value.{fields,curveFields}[].chromaticFieldShifts[].tangentialShiftMm",
      "analysis:jobs.computeFieldCurvatureBundle.value.{fieldCurvature,chromaticFieldCurvature}.{fields,curveFields}[].chromaticFieldShifts[].tangentialShiftMm",
      "analysis:jobs.computeFieldCurvature.value.{maxAstigmaticDifferenceMm,edgeTangentialShiftMm,sharedFocusShiftHalfRangeMm,chromaticFocusSpreadMm}",
      "analysis:jobs.computeFieldCurvatureBundle.value.{fieldCurvature,chromaticFieldCurvature}.{maxAstigmaticDifferenceMm,edgeTangentialShiftMm,sharedFocusShiftHalfRangeMm,chromaticFocusSpreadMm}",
      "analysis:jobs.chromaticFieldFocusSummary.value.fields[].tangential.{minShiftMm,maxShiftMm,spreadMm}",
      "analysis:jobs.chromaticFieldFocusSummary.value.fields[].maxFocusSpreadMm",
      "analysis:jobs.chromaticFieldFocusSummary.value.{maxTangentialSpreadMm,maxFocusSpreadMm,edgeFocusSpreadMm}",
    ],
  ],
  [
    "tangentialParabasalFocus",
    [
      "analysis:jobs.computeFieldCurvature.value.{fields,curveFields}[].astigmaticDifferenceUm",
      "analysis:jobs.computeFieldCurvatureBundle.value.{fieldCurvature,chromaticFieldCurvature}.{fields,curveFields}[].astigmaticDifferenceUm",
      "analysis:jobs.computeFieldCurvature.value.maxAstigmaticDifferenceUm",
      "analysis:jobs.computeFieldCurvatureBundle.value.{fieldCurvature,chromaticFieldCurvature}.maxAstigmaticDifferenceUm",
      "analysis:jobs.chromaticFieldFocusSummary.value.fields[].tangential.spreadUm",
      "analysis:jobs.chromaticFieldFocusSummary.value.fields[].maxFocusSpreadUm",
    ],
    { scale: 1000 },
  ],

  /* ── Analysis: rows by member name ── */
  /* A micrometre twin restates a millimetre field, times 1000. */
  ["analysisLength", ["analysis:**.*Um"], { scale: 1000 }],
  [
    "landing",
    [
      "analysis:**.{sensorPoint,actualSensorPoint,referenceSensorPoint,chiefSensorPoint}[]",
      "analysis:**.{actualSensorIntercept,poseIdealSensorIntercept,zeroPoseIdealSensorIntercept}[]",
      "analysis:**.{actual,poseIdeal,zeroPoseIdeal,stopPointCamera,stopPointLens}[]",
      "analysis:**.{sensorUMm,sensorVMm,tracedX,tracedY}",
      "analysis:**.{chiefImageHeight,chiefIntercept,imageHeight,imageHeightMm,imageX,realHeight}",
      "analysis:**.referenceImageHeightMm",
    ],
  ],
  [
    "directionCosine",
    ["analysis:**.{direction,sceneDirectionCamera,sceneDirectionLens,pupilRadialAxisLens,pupilSagittalAxisLens}[]"],
  ],
  ["chiefLaunch", ["analysis:**.{launchOffsetMm,launchHeight,launchX}", "analysis:**.origin[]"]],
  ["slope", ["analysis:**.slopeUPerNormal"], { partner: "slopeVPerNormal" }],
  ["slope", ["analysis:**.slopeVPerNormal"], { partner: "slopeUPerNormal" }],
  ["percentage", ["analysis:**.{distortionPercent,breathingPercent}"]],
  ["iterationCount", ["analysis:**.{iterations,evaluations}"]],
  ["refractiveIndex", ["analysis:**.{objectIndex,imageIndex}"]],
  ["nonLength", ["analysis:**.effectiveFNumber"]],
  [
    "firstOrder",
    [
      "analysis:**.{currentEFLMm,infinityEFLMm,cardinalEFLMm,bfdMm,ffdMm,principalHiatusMm}",
      "analysis:**.{entrancePupilDiameterMm,physicalStopDiameterMm}",
      "analysis:**.{stopSemiDiameterMm,pupilSemiDiameterMm}",
      /* Paraxial pupil positions. The traced one of each field of a pupil-aberration profile has its row above,
       * so the bare name here is one outside a profile's samples. No analysis result holds such a member today:
       * it is the name of the built lens's paraxial constant, kept for a result that hands that back. */
      "analysis:**.{paraxialEpZRelStop,paraxialXpZRelLastSurf,xpZRelLastSurf}",
    ],
  ],
  [
    "layoutLength",
    [
      "analysis:**.{imagePlaneZ,imagePlaneZMm,lastSurfaceZ,totalTrackMm,rearPlateThicknessMm}",
      "analysis:**.{frontVertexZ,rearVertexZ,rearLensVertexZ}",
    ],
  ],
  [
    "count",
    [
      "analysis:**.{index,sourceIndex,sourceSampleIndex,surfaceIndex,fromSurface,toSurface}",
      "analysis:**.{sampleCount,validSampleCount,clippedSampleCount,validChannelCount,requestedCount}",
      "analysis:**.{usableCount,usableFieldCount,usableSampleCount,usedRayCount,passedRays,totalRays}",
      "analysis:**.{surfaceCount,rearPlateCount,onAxisAttemptedRayCount,offAxisAttemptedRayCount}",
    ],
  ],
  ["countRatio", ["analysis:**.{geometricTransmission,absoluteGeometricTransmission,mechanicalTransmission}"]],
  /* The radial profile of a bokeh footprint, by what its points weigh: counts where every ray weighs the same,
   * weighted bins where a ray's transmission is in its weight. */
  [binsByRayWeight, ["analysis:**.{density,energyFraction,centerDensity,rimDensity,centerToRimRatio}"]],
  /* The skew of a coma tail is the longer extent of a spot from its centroid over the shorter, and the other is
   * the spot's sagittal span over its tangential span: each one image-plane length in mm over another. */
  ["lengthRatio", ["analysis:**.{tailSkewRatio,sagittalToTangentialRatio}"]],
  [
    "requested",
    [
      "analysis:**.{focusT,zoomT,aberrationT,focusDistanceM}",
      "analysis:**.{fieldFraction,fieldFrac,fraction,marginalFraction,nearAxisFraction,pupilFraction}",
      "analysis:**.maxFocusFieldFraction",
      "analysis:**.{fieldFractions,curveFieldFractions,pupilFractions,uCoordinates,vCoordinates}[]",
      "analysis:**.{normalizedImageHeight,idealCoordinate,radiusNormalized}",
      "analysis:**.{innerRadiusFraction,outerRadiusFraction,radiusFraction}",
      "analysis:**.{pupilRadius,pupilAzimuth,xFraction,yFraction}",
    ],
  ],
  [
    "ratio",
    [
      "analysis:**.{transmission,weight,usedWeight,totalWeight,usableWeight,transmittedWeight}",
      /* The correction of a chief ray's launch height is the solved height over the paraxial one: two lengths,
       * neither an analysis length, so the plan's ratio of two of those does not name it. Under 10 mm of paraxial
       * height the 1e-10 here is tighter than the solved height's own 1e-9 mm implies, which is 4e-9 of the ratio
       * at the 0.23 mm of a wide lens's innermost sample. */
      "analysis:**.{mechanicalWeight,photometricWeight,relativeIllumination,chiefRayCorrection}",
      /* The aspect of a pupil footprint and the offset of its centroid, in fractions of the pupil as its spans
       * and centroid are: no length in mm is in either. */
      "analysis:**.{catEyeAspect,shiftRadius}",
      "analysis:**.{geometricFactor,transmittedGeometricFactor,transmittedFlux,absoluteTransmittedFlux}",
      "analysis:**.{absoluteGeometricFactor,absoluteTransmittedGeometricFactor}",
      "analysis:**.*NormalizedToZeroCenter",
    ],
  ],
  /* The Petzval position is no crossing of rays and keeps a plain 1e-8 mm, ahead of the focus positions by name. */
  ["petzvalPosition", ["analysis:**.petzvalBestFocusZ"]],
  /* The rows below go by name, and an analysis length is held to a share of its size beyond 100 mm. That share is
   * for a crossing of rays, or a shift or span of crossings, which may lie far from the lens. A member that reaches
   * 100 mm and is no crossing (a position that is layout plus a closed form, a conjugate distance) is not to join
   * them by its name alone: it takes a row of its own above these, as the Petzval position has. */
  [
    "analysisLength",
    [
      /* Members named for a length, a focus position, an intercept, an offset or a spread. */
      "analysis:**.*Mm",
      "analysis:**.*BestFocusZ",
      "analysis:**.{bestFocusZ,focusZ}",
      "analysis:**.*{Intercept,ImageHeight,ImageX}",
      "analysis:**.{sagittalOffset,tangentialOffset,centroidSagittal,centroidTangential}",
      "analysis:**.{idealHeight,idealX,idealY,idealFieldRadius}",
      "analysis:**.{centerLens,centerCamera}[]",
    ],
  ],
];

/* ── Resolution ── */

const ARRAY_LEVEL = "[]";

/** Write out every alternative of the first `{a,b}` group, then of the next, until none is left. */
function expandBraces(pattern: string): string[] {
  const open = pattern.indexOf("{");
  if (open < 0) return [pattern];
  const close = pattern.indexOf("}", open);
  return pattern
    .slice(open + 1, close)
    .split(",")
    .flatMap((choice) => expandBraces(pattern.slice(0, open) + choice + pattern.slice(close + 1)));
}

interface CompiledPattern {
  readonly family: string;
  /** One test per path segment; null stands for "**". */
  readonly segments: readonly (RegExp | string | null)[];
  readonly rule: BudgetRule;
}

function compileSegment(text: string): RegExp | string | null {
  if (text === "**") return null;
  if (!text.includes("*")) return text;
  const escaped = text.split("*").map((part) => part.replace(/[.+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp(`^${escaped.join(".*")}$`);
}

function compilePattern(pattern: string, rule: BudgetRule): CompiledPattern {
  const colon = pattern.indexOf(":");
  const segments = pattern
    .slice(colon + 1)
    .split(".")
    .flatMap((member) => {
      const levels = /(\[\])*$/.exec(member)?.[0] ?? "";
      const name = member.slice(0, member.length - levels.length);
      return [compileSegment(name), ...Array.from({ length: levels.length / 2 }, () => ARRAY_LEVEL)];
    });
  return { family: pattern.slice(0, colon), segments, rule };
}

const COMPILED: readonly CompiledPattern[] = TABLE.flatMap(([quantity, paths, options]) => {
  const rule: BudgetRule = { quantity, scale: 1, ...options };
  return paths.flatMap(expandBraces).map((pattern) => compilePattern(pattern, rule));
});

function segmentsMatch(
  tests: CompiledPattern["segments"],
  path: readonly string[],
  testIndex: number,
  pathIndex: number,
): boolean {
  if (testIndex === tests.length) return pathIndex === path.length;
  const test = tests[testIndex];
  if (test === null) {
    for (let next = pathIndex; next <= path.length; next++) {
      if (segmentsMatch(tests, path, testIndex + 1, next)) return true;
    }
    return false;
  }
  if (pathIndex === path.length) return false;
  const segment = path[pathIndex];
  /* A name pattern never stands for an array level, so "*" cannot swallow a "[]". */
  const matches = typeof test === "string" ? test === segment : segment !== ARRAY_LEVEL && test.test(segment);
  return matches && segmentsMatch(tests, path, testIndex + 1, pathIndex + 1);
}

/**
 * Find the budget rule of a numeric payload field.
 *
 * @param family - the record's request family
 * @param path - the field's path under the record's value: member names, with "[]" for each array level
 * @returns the first row of the table that matches, or null for a field the table does not cover
 */
export function resolveBudgetRule(family: string, path: readonly string[]): BudgetRule | null {
  for (const pattern of COMPILED) {
    if (pattern.family === family && segmentsMatch(pattern.segments, path, 0, 0)) return pattern.rule;
  }
  return null;
}

/**
 * The quantity class a rule assigns at one leaf.
 *
 * @param rule - a resolved rule
 * @param leaf - where the leaf sits, for a rule that reads the flags beside it
 * @returns the quantity id
 */
export function quantityAt(rule: BudgetRule, leaf: LeafContext): QuantityId {
  return typeof rule.quantity === "function" ? rule.quantity(leaf) : rule.quantity;
}
