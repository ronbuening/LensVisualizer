/**
 * Solver sensitivity probes for C2 captures. The driver's temporary bundles observe solver
 * returns through this module; ordinary captures never enable a probe session. Each derivative
 * replays fresh engine work with one solved coordinate displaced, keeping its request fixed.
 */

import { C2_CRITERIA, QUANTITIES, resolveBudgetRule } from "./budgets.js";
import { createResultEncoder, type EncodedValue } from "./payload.js";

/** Evidence is in the payload field's own units, including micrometre and pixel twins. */
export interface PropagatedEvidence {
  value: number;
  error: number;
  /** Forward image-height residual, only for a coordinate returned by an inversion. */
  imageResidual?: number;
  imageTolerance?: number;
}
export type PropagatedEvidenceMap = Record<string, PropagatedEvidence>;

interface Probe {
  root: number;
  step: number;
  error: number;
  residual: number;
  tolerance: number;
  imageHeight: boolean;
}
interface Session {
  probes: Probe[];
  index: number;
  target?: number;
  displacement?: number;
}
let session: Session | undefined;
let inversionDepth = 0;

/**
 * Observe a solved coordinate, or displace just that coordinate during a sensitivity replay.
 *
 * @param root - the engine's solved coordinate
 * @param evaluate - its signed residual, in the solver's own units
 * @param tolerance - unchanged residual criterion of this solver
 * @param imageHeight - whether the residual is an image-height inversion miss
 * @returns the original root outside a replay, otherwise the requested nearby coordinate
 */
export function probeRoot(
  root: number,
  evaluate: (root: number) => number | null | undefined,
  tolerance: number,
  imageHeight = false,
): number {
  const active = session;
  if (!active || (inversionDepth > 0 && !imageHeight)) return root;
  const index = active.index++;
  if (active.target !== undefined) return index === active.target ? root + (active.displacement ?? 0) : root;
  /* cbrt(epsilon) balances central-difference truncation and cancellation. A second,
   * half-sized stencil must agree; a null domain or a singular derivative earns no budget. */
  const step = Math.cbrt(Number.EPSILON) * Math.max(1, Math.abs(root));
  session = undefined;
  let error = NaN;
  let residual = NaN;
  try {
    const values = [root - step, root + step, root - step / 2, root + step / 2, root].map(evaluate);
    if (values.every((value) => typeof value === "number" && Number.isFinite(value))) {
      const [lo, hi, halfLo, halfHi, atRoot] = values as number[];
      residual = atRoot;
      const slope = (hi - lo) / (2 * step);
      const halfSlope = (halfHi - halfLo) / step;
      if (
        stableDerivative(slope, halfSlope) &&
        Math.abs(halfSlope) > 0 &&
        Math.abs(residual) <= (imageHeight ? 2 : 1) * tolerance
      ) {
        error = tolerance / Math.min(Math.abs(slope), Math.abs(halfSlope));
      }
    }
  } catch {
    /* An unavailable probe is evidence of no smooth budget, not an engine result. */
  } finally {
    session = active;
  }
  active.probes.push({ root, step, error, residual, tolerance, imageHeight });
  return root;
}

function stableDerivative(a: number, b: number): boolean {
  return Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 0.1 * Math.max(Math.abs(a), Math.abs(b));
}

interface ScalarResult {
  status: string;
  root: number | null;
  residual: number | null;
}

/**
 * Observe the scalar solver without changing its status, diagnostics or ordinary return value.
 * @param work - the unmodified solver body
 * @param evaluate - the caller's residual callback
 * @param options - the caller's residual criterion (the engine default is 1e-7)
 * @returns the original result, with only its root displaced during a probe replay
 */
export function probeScalarSolve<T extends ScalarResult>(
  work: () => T,
  evaluate: (root: number) => number | null | undefined,
  options: { residualTolerance?: number },
): T {
  if (!session) return work();
  const active = session;
  /* Trial solves inside a residual callback are not independent final coordinates.
   * The outer solve's forward residual and derivative already evaluate that callback. */
  session = undefined;
  let result: T;
  try {
    result = work();
  } finally {
    session = active;
  }
  if (result.status !== "converged" || result.root === null) return result;
  const tolerance = options.residualTolerance ?? 1e-7;
  const root = probeRoot(result.root, evaluate, tolerance, tolerance === 1e-4);
  return root === result.root ? result : { ...result, root };
}

/**
 * Observe inversion outputs without treating their lookup's trial chief solves as final roots.
 * @param work - the unchanged image-height inversion body
 * @returns the body's result; only its own image-height coordinates participate in probes
 */
export function probeInversion<T>(work: () => T): T {
  inversionDepth++;
  try {
    return work();
  } finally {
    inversionDepth--;
  }
}

interface Leaf {
  path: string;
  value: number;
  chiefLaunch: boolean;
}

function eligibleLeaves(value: EncodedValue, family: string): Leaf[] {
  const leaves: Leaf[] = [];
  const visit = (node: EncodedValue, path: string, segments: string[]) => {
    if (typeof node === "number" && Number.isFinite(node)) {
      const rule = resolveBudgetRule(family, segments);
      if (rule && typeof rule.quantity === "string" && C2_CRITERIA[rule.quantity])
        leaves.push({ path, value: node, chiefLaunch: rule.quantity === "chiefLaunch" });
    } else if (Array.isArray(node)) {
      node.forEach((item, index) => visit(item, `${path}[${index}]`, [...segments, "[]"]));
    } else if (node && typeof node === "object") {
      for (const [key, item] of Object.entries(node)) visit(item, path ? `${path}.${key}` : key, [...segments, key]);
    }
  };
  visit(value, "", []);
  return leaves;
}

/* A changed branch cannot be differentiated. Trace digests may change coordinates, but their
 * outcome hash, counts, residual contract and every other discrete field must stand. */
function sameBranch(a: EncodedValue, b: EncodedValue, family: string, segments: string[] = []): boolean {
  if (typeof a === "number" && typeof b === "number") {
    const rule = resolveBudgetRule(family, segments);
    if (rule && typeof rule.quantity === "string" && QUANTITIES[rule.quantity].kind === "exact") return Object.is(a, b);
    return Number.isFinite(a) === Number.isFinite(b);
  }
  if (Array.isArray(a) && Array.isArray(b))
    return a.length === b.length && a.every((v, i) => sameBranch(v, b[i], family, [...segments, "[]"]));
  if (a && b && typeof a === "object" && typeof b === "object" && !Array.isArray(a) && !Array.isArray(b)) {
    const keys = Object.keys(a);
    return (
      keys.length === Object.keys(b).length &&
      keys.every(
        (k) =>
          k in b &&
          ((k === "hash" && typeof a.outcome === "string" && typeof b.outcome === "string") ||
            sameBranch(a[k], b[k], family, [...segments, k])),
      )
    );
  }
  return Object.is(a, b);
}

/**
 * Propagate each governing root's criterion through finite differences of a fresh capture.
 * Missing, discontinuous or ill-conditioned evidence leaves the comparator's C1 budget in force.
 *
 * @param work - fresh, deterministic engine work, instrumented in the driver's temporary bundle
 * @param family - payload family, for selecting the six propagated quantity kinds
 * @param nominal - the already captured, encoded result; probing must reproduce it exactly
 * @returns per-path one-sided error bounds; pairing two captures adds their bounds
 */
export function capturePropagation(work: () => unknown, family: string, nominal: EncodedValue): PropagatedEvidenceMap {
  if (session) throw new Error("engine-diff: nested propagation capture");
  const run = (active: Session) => {
    session = active;
    try {
      return createResultEncoder()(work());
    } finally {
      session = undefined;
    }
  };
  const baseline: Session = { probes: [], index: 0 };
  try {
    if (JSON.stringify(run(baseline)) !== JSON.stringify(nominal)) return {};
    if (!baseline.probes.length || baseline.probes.some((probe) => !Number.isFinite(probe.error))) return {};
    const leaves = eligibleLeaves(nominal, family);
    const evidence = Object.fromEntries(
      leaves.map(({ path, value }) => [path, { value, error: 0 }]),
    ) as PropagatedEvidenceMap;
    for (const [target, probe] of baseline.probes.entries()) {
      const samples: Map<string, number>[] = [];
      for (const displacement of [-probe.step, probe.step, -probe.step / 2, probe.step / 2]) {
        const replay: Session = { probes: [], index: 0, target, displacement };
        const value = run(replay);
        if (replay.index !== baseline.index || !sameBranch(nominal, value, family)) return {};
        samples.push(new Map(eligibleLeaves(value, family).map(({ path, value: v }) => [path, v])));
      }
      for (const { path, value, chiefLaunch } of leaves) {
        const entry = evidence[path];
        if (!entry) continue;
        /* A copied launch is governed by its own stop solve, not by an upstream
         * sensor lock or another root that happens to move it during replay. */
        if (chiefLaunch && (probe.tolerance !== 1e-7 || !Object.is(value, probe.root))) continue;
        const [lo, hi, halfLo, halfHi] = samples.map((sample) => sample.get(path) ?? NaN);
        const slope = (hi - lo) / (2 * probe.step);
        const halfSlope = (halfHi - halfLo) / probe.step;
        if (!stableDerivative(slope, halfSlope)) {
          delete evidence[path];
          continue;
        }
        if (chiefLaunch && Math.abs(halfSlope - 1) >= 1e-6) continue;
        entry.error += Math.max(Math.abs(slope), Math.abs(halfSlope)) * probe.error;
        if (probe.imageHeight && Object.is(value, probe.root) && Math.abs(halfSlope - 1) < 1e-6) {
          entry.imageResidual = probe.residual;
          entry.imageTolerance = probe.tolerance;
        }
      }
    }
    return evidence;
  } catch {
    return {};
  }
}
