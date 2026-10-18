/** Types for the Node-loaded, capture-only solver instrumentation. */
import type { Plugin } from "vite";

export function instrumentSolvers(source: string, id: string, helper: string): string | null;
export function solverProbePlugin(root: string): Plugin;
