/**
 * Callback-driven scalar root solving with expanding bracket scans.
 *
 * Optical callers often have discontinuous valid domains because a trial ray
 * can clip or miss a surface. Null callback values split the scan so a bracket
 * never crosses an unavailable interval.
 */

export type ScalarRootEvaluation = number | null | undefined;
export type ScalarRootSolveStatus =
  | "converged"
  | "unbracketed"
  | "evaluation-failed"
  | "iteration-limit"
  | "invalid-input";

export interface ScalarRootSolveOptions {
  initialGuess: number;
  initialHalfWidth: number;
  min?: number;
  max?: number;
  expansionFactor?: number;
  maxExpansions?: number;
  scanSamples?: number;
  residualTolerance?: number;
  intervalTolerance?: number;
  maxIterations?: number;
}

export interface ScalarRootSolveResult {
  status: ScalarRootSolveStatus;
  root: number | null;
  residual: number | null;
  iterations: number;
  evaluations: number;
  bracket: readonly [number, number] | null;
}

interface EvaluatedPoint {
  x: number;
  value: number;
}

const DEFAULT_EXPANSION_FACTOR = 2;
const DEFAULT_MAX_EXPANSIONS = 4;
const DEFAULT_SCAN_SAMPLES = 96;
const DEFAULT_RESIDUAL_TOLERANCE = 1e-7;
const DEFAULT_INTERVAL_TOLERANCE = 1e-9;
const DEFAULT_MAX_ITERATIONS = 30;

/**
 * Find a scalar root by scanning expanding intervals and bisecting a
 * sign-changing bracket.
 *
 * @param evaluate - residual callback; null/undefined/non-finite means unavailable
 * @param options - seed, search envelope, tolerances, and iteration limits
 * @returns convergence status, best root candidate, residual, and diagnostics
 */
export function solveScalarRoot(
  evaluate: (value: number) => ScalarRootEvaluation,
  options: ScalarRootSolveOptions,
): ScalarRootSolveResult {
  const {
    initialGuess,
    initialHalfWidth,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    expansionFactor = DEFAULT_EXPANSION_FACTOR,
    maxExpansions = DEFAULT_MAX_EXPANSIONS,
    scanSamples = DEFAULT_SCAN_SAMPLES,
    residualTolerance = DEFAULT_RESIDUAL_TOLERANCE,
    intervalTolerance = DEFAULT_INTERVAL_TOLERANCE,
    maxIterations = DEFAULT_MAX_ITERATIONS,
  } = options;

  if (
    !Number.isFinite(initialGuess) ||
    !Number.isFinite(initialHalfWidth) ||
    initialHalfWidth <= 0 ||
    Number.isNaN(min) ||
    Number.isNaN(max) ||
    min >= max ||
    !Number.isFinite(expansionFactor) ||
    expansionFactor < 1 ||
    !Number.isInteger(maxExpansions) ||
    maxExpansions < 0 ||
    !Number.isInteger(scanSamples) ||
    scanSamples < 2 ||
    !Number.isFinite(residualTolerance) ||
    residualTolerance <= 0 ||
    !Number.isFinite(intervalTolerance) ||
    intervalTolerance <= 0 ||
    !Number.isInteger(maxIterations) ||
    maxIterations < 1
  ) {
    return failure("invalid-input", null, null, 0, 0, null);
  }

  let evaluations = 0;
  const search = { nearest: null as EvaluatedPoint | null };
  const evaluateAt = (x: number): EvaluatedPoint | null => {
    evaluations += 1;
    const value = evaluate(x);
    if (typeof value !== "number" || !Number.isFinite(value)) return null;
    const point = { x, value };
    if (search.nearest === null || Math.abs(value) < Math.abs(search.nearest.value)) search.nearest = point;
    return point;
  };

  const seed = evaluateAt(initialGuess);
  if (seed !== null && Math.abs(seed.value) <= residualTolerance) {
    return success(seed, 0, evaluations, [seed.x, seed.x]);
  }

  let bracket: { lo: EvaluatedPoint; hi: EvaluatedPoint } | null = null;
  for (let expansion = 0; expansion <= maxExpansions && bracket === null; expansion++) {
    const halfWidth = initialHalfWidth * expansionFactor ** expansion;
    const lo = Math.max(min, initialGuess - halfWidth);
    const hi = Math.min(max, initialGuess + halfWidth);
    if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo >= hi) continue;

    let previous: EvaluatedPoint | null = null;
    for (let index = 0; index <= scanSamples; index++) {
      const x = lo + ((hi - lo) * index) / scanSamples;
      const current = evaluateAt(x);
      if (current === null) {
        previous = null;
        continue;
      }
      if (Math.abs(current.value) <= residualTolerance) {
        return success(current, 0, evaluations, [current.x, current.x]);
      }
      if (previous !== null && oppositeSignsOrZero(previous.value, current.value)) {
        bracket = { lo: previous, hi: current };
        break;
      }
      previous = current;
    }
  }

  if (bracket === null) {
    return search.nearest === null
      ? failure("evaluation-failed", null, null, 0, evaluations, null)
      : failure("unbracketed", search.nearest.x, search.nearest.value, 0, evaluations, null);
  }

  let { lo, hi } = bracket;
  const originalBracket: readonly [number, number] = [lo.x, hi.x];
  for (let iteration = 1; iteration <= maxIterations; iteration++) {
    const midpointX = (lo.x + hi.x) / 2;
    const midpoint = evaluateAt(midpointX);
    if (midpoint === null) {
      return failure(
        "evaluation-failed",
        search.nearest?.x ?? null,
        search.nearest?.value ?? null,
        iteration,
        evaluations,
        originalBracket,
      );
    }
    if (Math.abs(midpoint.value) <= residualTolerance || Math.abs(hi.x - lo.x) <= intervalTolerance) {
      return success(midpoint, iteration, evaluations, originalBracket);
    }
    if (oppositeSignsOrZero(lo.value, midpoint.value)) hi = midpoint;
    else lo = midpoint;
  }

  const root = (lo.x + hi.x) / 2;
  const finalPoint = evaluateAt(root) ?? search.nearest;
  return failure(
    "iteration-limit",
    finalPoint?.x ?? root,
    finalPoint?.value ?? null,
    maxIterations,
    evaluations,
    originalBracket,
  );
}

function oppositeSignsOrZero(a: number, b: number): boolean {
  return a === 0 || b === 0 || a < 0 !== b < 0;
}

function success(
  point: EvaluatedPoint,
  iterations: number,
  evaluations: number,
  bracket: readonly [number, number],
): ScalarRootSolveResult {
  return {
    status: "converged",
    root: point.x,
    residual: point.value,
    iterations,
    evaluations,
    bracket,
  };
}

function failure(
  status: Exclude<ScalarRootSolveStatus, "converged">,
  root: number | null,
  residual: number | null,
  iterations: number,
  evaluations: number,
  bracket: readonly [number, number] | null,
): ScalarRootSolveResult {
  return { status, root, residual, iterations, evaluations, bracket };
}
