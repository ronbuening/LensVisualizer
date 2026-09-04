/** Interpolation within published spectral/angular domains, without extrapolation. */
import type { SpectralSamples, SurfaceThroughputTable } from "../../types/optics.js";

function interval(knots: readonly number[], value: number): [number, number, number] | null {
  if (!Number.isFinite(value) || knots.length === 0 || value < knots[0] || value > knots[knots.length - 1]) return null;
  const right = knots.findIndex((knot) => knot >= value);
  if (knots[right] === value) return [right, right, 0];
  const left = right - 1;
  return [left, right, (value - knots[left]) / (knots[right] - knots[left])];
}

export function sampleSpectrum(table: SpectralSamples, wavelengthNm: number): number | null {
  const span = interval(table.wavelengthsNm, wavelengthNm);
  if (!span) return null;
  const [a, b, t] = span;
  return table.values[a] + t * (table.values[b] - table.values[a]);
}

export function sampleSurfaceThroughput(
  table: SurfaceThroughputTable,
  wavelengthNm: number,
  angleDeg: number,
): number | null {
  const wave = interval(table.wavelengthsNm, wavelengthNm);
  const angle = interval(table.incidenceAnglesDeg, angleDeg);
  if (!wave || !angle) return null;
  const [wa, wb, wt] = wave;
  const [aa, ab, at] = angle;
  const atAngle = (w: number) => table.values[w][aa] + at * (table.values[w][ab] - table.values[w][aa]);
  return atAngle(wa) + wt * (atAngle(wb) - atAngle(wa));
}

/** Validation is done at authoring/build boundaries, not inside every ray's quadrature. */
export function validateThroughputTable(value: unknown, surface: boolean): string[] {
  if (!value || typeof value !== "object") return ["must be a sourced table"];
  const table = value as Record<string, unknown>;
  const errors: string[] = [];
  if (typeof table.source !== "string" || !table.source.trim()) errors.push("source must be non-empty");
  const validAxis = (axis: unknown, min: number, max: number): axis is number[] =>
    Array.isArray(axis) &&
    axis.length > 0 &&
    axis.every(
      (v, i) => typeof v === "number" && Number.isFinite(v) && v >= min && v <= max && (i === 0 || v > axis[i - 1]),
    );
  if (!validAxis(table.wavelengthsNm, Number.MIN_VALUE, Infinity))
    errors.push("wavelengthsNm must be positive and strictly increasing");
  if (surface) {
    if (!validAxis(table.incidenceAnglesDeg, 0, 90)) errors.push("incidenceAnglesDeg must increase within [0, 90]");
    if (!["front", "rear", "both"].includes(String(table.incidentSide)))
      errors.push("incidentSide must be front, rear or both");
    if (!["transmission", "reflection"].includes(String(table.kind)))
      errors.push("kind must be transmission or reflection");
  }
  const wavelengths = Array.isArray(table.wavelengthsNm) ? table.wavelengthsNm.length : 0;
  const angles = Array.isArray(table.incidenceAnglesDeg) ? table.incidenceAnglesDeg.length : 0;
  const validValue = (v: unknown) => typeof v === "number" && Number.isFinite(v) && v >= 0 && (!surface || v <= 1);
  if (
    !Array.isArray(table.values) ||
    table.values.length !== wavelengths ||
    table.values.some((row) =>
      surface ? !Array.isArray(row) || row.length !== angles || !row.every(validValue) : !validValue(row),
    )
  ) {
    errors.push(
      surface
        ? "values must match both axes and contain intensity fractions in [0, 1]"
        : "values must match wavelengths and contain non-negative coefficients",
    );
  }
  return errors;
}
