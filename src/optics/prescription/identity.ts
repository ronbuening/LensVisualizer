/** Identity bridge between catalog views and their canonical prescription; never keyed by catalog strings. */
import type { RuntimeLens } from "../../types/optics.js";
import type { CompiledLens } from "../types.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";

const CANONICAL_BY_VIEW = new WeakMap<object, IngestedPrescription<CanonicalLens>>();
const COMPILED_BY_RUNTIME = new WeakMap<RuntimeLens, CompiledLens>();

export function associateCanonical(view: object, canonical: IngestedPrescription<CanonicalLens>): void {
  CANONICAL_BY_VIEW.set(view, canonical);
}
export function canonicalForView(view: object): IngestedPrescription<CanonicalLens> | undefined {
  return CANONICAL_BY_VIEW.get(view);
}
export function associateRuntime(runtime: RuntimeLens, compiled: CompiledLens): void {
  COMPILED_BY_RUNTIME.set(runtime, compiled);
}
/** Lookup only: a completed runtime is never a compilation source. */
export function compiledLensFromRuntime(runtime: RuntimeLens): CompiledLens {
  const compiled = COMPILED_BY_RUNTIME.get(runtime);
  if (!compiled) throw new Error("RuntimeLens was not constructed by the canonical compiler");
  return compiled;
}

/**
 * Read the unexpanded canonical input for worker transport.
 *
 * @param lens - runtime returned by the canonical compiler
 * @returns canonical prescription, provenance and optional composition descriptor
 */
export function canonicalLensFromRuntime(lens: RuntimeLens): IngestedPrescription<CanonicalLens> {
  const canonical = canonicalForView(compiledLensFromRuntime(lens).source);
  if (!canonical) throw new Error("RuntimeLens has no canonical prescription");
  return canonical;
}
