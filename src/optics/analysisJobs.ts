/**
 * Analysis job facade — stable synchronous analysis registry for RuntimeLens callers.
 */

import { analysisJobs2 } from "./analysis/analysisJobs.js";

/**
 * Public analysis job registry used by app code that still passes RuntimeLens inputs.
 *
 * The registry is synchronous today. Keeping this object as the import surface lets the
 * implementation move selected heavy jobs to workers without changing call sites.
 */
export const analysisJobs = analysisJobs2;
