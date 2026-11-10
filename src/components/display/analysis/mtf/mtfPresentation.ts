/** Shared chart/table/export policy: numerical estimates require an explicit diagnostic view. */
import type { MtfFieldResult } from "../../../../types/mtf.js";

/** A field's status alone does not establish stability beyond its tested frequency band. */
export function mtfValueVisible(field: MtfFieldResult, frequency: number, diagnostic = false): boolean {
  if (field.status !== "converged" && field.status !== "unconverged") return false;
  if (diagnostic) return true;
  return field.status === "converged" && field.convergedThroughLpMm !== null && frequency <= field.convergedThroughLpMm;
}
