/**
 * Incident-flux diagnostics for a traced stop lattice. This module does not select product pupil weights.
 * Launch geometry comes from the aimed lattice, including neighbours clipped by the full image trace.
 */
import type { Ray3, Vec3 } from "../../types.js";
import type { MtfBundle } from "./mtfTracing.js";

/**
 * For stop-cell indices (u,v), let r(u,v) be the origin on the axial launch plane.
 * Its pre-image area vector is a = (∂r/∂u) × (∂r/∂v), in mm² per cell.
 * A collimated beam of unit normal irradiance supplies |d·a| incident flux.
 * A finite source subtends dΩ = |d·a| / |r−object|²; Lambert's law adds |d.z|,
 * for a source surface normal to the optical axis (+z), giving |d.z| dΩ.
 * Central differences use both neighbours; the rim uses second-order one-sided differences
 * where possible, then first order. Symmetric half lattices reflect their launch geometry.
 * @param bundle - traced stop bundle with its aimed lattice and optional finite object point
 * @returns incident weights aligned with bundle.rays, before bulk transmission; NaN for a missing stencil
 */
export function mtfIncidentFluxWeights(bundle: MtfBundle): Float64Array {
  const lattice = bundle.lattice;
  if (bundle.sampling !== "stop" || !lattice) throw new RangeError("Incident flux requires an aimed stop lattice.");
  const n = lattice.cellsAcross;
  const source = bundle.objectPoint;
  const launches: (Ray3 | undefined)[] = new Array(n * n);
  lattice.cells.forEach((cell, i) => {
    const ray = lattice.rays[i];
    if (ray?.status === "aimed") launches[cell.row * n + cell.column] = ray;
  });
  if (bundle.mirrored) {
    for (let row = 0; row < n; row++) {
      for (let column = 0; column < n; column++) {
        const at = row * n + column;
        const partner = launches[row * n + n - 1 - column];
        if (!launches[at] && partner)
          launches[at] = {
            origin: [-partner.origin[0], partner.origin[1], partner.origin[2]],
            direction: [-partner.direction[0], partner.direction[1], partner.direction[2]],
          };
      }
    }
  }
  const derivative = (row: number, column: number, alongRow: boolean): Vec3 | null => {
    const at = (offset: number) => {
      const r = row + (alongRow ? offset : 0);
      const c = column + (alongRow ? 0 : offset);
      return r >= 0 && r < n && c >= 0 && c < n ? launches[r * n + c]?.origin : undefined;
    };
    const center = at(0);
    if (!center) return null;
    const before = at(-1),
      after = at(1);
    if (before && after) return difference(after, before, 0.5);
    for (const sign of [1, -1]) {
      const near = at(sign),
        far = at(2 * sign);
      if (near) {
        if (!far) return difference(near, center, sign);
        const slope = (i: number) => (sign * (-3 * center[i] + 4 * near[i] - far[i])) / 2;
        return [slope(0), slope(1), slope(2)];
      }
    }
    return null;
  };
  return Float64Array.from(bundle.rays, (ray) => {
    const launch = launches[ray.row * n + ray.column];
    const u = derivative(ray.row, ray.column, false);
    const v = derivative(ray.row, ray.column, true);
    if (!launch || !u || !v) return NaN;
    const a: Vec3 = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const d = launch.direction;
    const projected = Math.abs(d[0] * a[0] + d[1] * a[1] + d[2] * a[2]);
    if (!source) return projected;
    const distance = Math.hypot(...launch.origin.map((value, i) => value - source[i]));
    return (projected * Math.abs(d[2])) / distance ** 2;
  });
}

function difference(a: Vec3, b: Vec3, scale: number): Vec3 {
  return [(a[0] - b[0]) * scale, (a[1] - b[1]) * scale, (a[2] - b[2]) * scale];
}
