import type { AsphericCoefficients } from "../../types/optics.js";
import { resolveLabel } from "./labels.js";

export function compileAspheres(
  aspheres: Record<string, AsphericCoefficients> | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): Readonly<Record<number, AsphericCoefficients>> {
  const out: Record<number, AsphericCoefficients> = {};
  for (const [label, coefficients] of Object.entries(aspheres ?? {})) {
    out[resolveLabel(label, labelToSurfaceIndex, "asph")] = Object.freeze({ ...coefficients });
  }
  return Object.freeze(out);
}
