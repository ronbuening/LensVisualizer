/** Shared bounded scalar root search for exact surface intersections. */
export interface RootEvaluation {
  t: number;
  value: number;
  derivative: number;
}
export type RootResult<E> =
  | { kind: "success"; value: E; iterations: number }
  | {
      kind: "failure";
      failureReason: "invalidBounds" | "noBracket" | "noConvergedIntersection";
      residual: number | null;
      iterations: number;
    };

/** Geometry adapters retain their finite-value policies and hit/normal construction. */
export function solveBracketedRoot<E extends RootEvaluation>(
  evaluate: (t: number) => E,
  options: {
    minT: number;
    maxT: number;
    seed: number;
    tolerance: number;
    maxIterations: number;
    bracketSamples: number;
    validValue: (value: E) => boolean;
    validNewton: (value: E) => boolean;
    validFinalResidual?: (value: E) => boolean;
  },
): RootResult<E> {
  const { minT, maxT, seed, tolerance, maxIterations, bracketSamples, validValue, validNewton } = options;
  if (!Number.isFinite(maxT)) return { kind: "failure", failureReason: "invalidBounds", residual: null, iterations: 0 };
  const low = evaluate(minT);
  if (!validValue(low)) return failure("noBracket", null, 0);
  if (Math.abs(low.value) <= tolerance) return success(low, 0);
  const high = evaluate(maxT);
  if (!validValue(high)) return failure("noBracket", null, 0);
  if (Math.abs(high.value) <= tolerance) return success(high, 0);
  let lo = minT,
    hi = maxT,
    fLo = low.value;
  if (sameSign(low.value, high.value)) {
    const samples = Math.max(2, Math.round(bracketSamples));
    let previous = low,
      best = Math.abs(low.value) <= Math.abs(high.value) ? low : high;
    let found = false;
    for (let i = 1; i <= samples; i++) {
      const current = evaluate(minT + ((maxT - minT) * i) / samples);
      if (!validValue(current)) continue;
      if (Math.abs(current.value) < Math.abs(best.value)) best = current;
      if (Math.abs(current.value) <= tolerance) return success(current, i);
      if (!sameSign(previous.value, current.value)) {
        lo = previous.t;
        hi = current.t;
        fLo = previous.value;
        found = true;
        break;
      }
      previous = current;
    }
    if (!found) return failure("noBracket", best.value, samples);
  }
  let t = Number.isFinite(seed) && seed > lo && seed < hi ? seed : (lo + hi) / 2;
  t = Math.min(hi, Math.max(lo, t));
  for (let iterations = 1; iterations <= maxIterations; iterations++) {
    const current = evaluate(t);
    if (!validNewton(current)) return failure("noConvergedIntersection", null, iterations);
    if (Math.abs(current.value) <= tolerance) return success(current, iterations);
    if (sameSign(current.value, fLo)) {
      lo = t;
      fLo = current.value;
    } else hi = t;
    const next = t - current.value / current.derivative;
    t = Number.isFinite(next) && next > lo && next < hi ? next : (lo + hi) / 2;
  }
  const final = evaluate((lo + hi) / 2);
  if (validNewton(final) && Math.abs(final.value) <= tolerance * 10) return success(final, maxIterations);
  return failure(
    "noConvergedIntersection",
    (options.validFinalResidual ?? validValue)(final) ? final.value : null,
    maxIterations,
  );
}
function sameSign(a: number, b: number): boolean {
  return a < 0 === b < 0;
}

function failure(
  failureReason: "noBracket" | "noConvergedIntersection",
  residual: number | null,
  iterations: number,
): RootResult<never> {
  return { kind: "failure", failureReason, residual, iterations };
}
function success<E>(value: E, iterations: number): RootResult<E> {
  return { kind: "success", value, iterations };
}
