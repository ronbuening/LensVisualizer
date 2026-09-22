/** Image-space complex OTF; weights describe transmitted intensity, not field amplitude. */
export interface MtfSpot {
  x: number;
  y: number;
  weight: number;
}
export interface ComplexOtf {
  real: number[];
  imaginary: number[];
}

export function geometricOtf(points: readonly MtfSpot[], frequencies: readonly number[], axis: "x" | "y"): ComplexOtf {
  const total = points.reduce((sum, p) => sum + p.weight, 0);
  if (!(total > 0)) return { real: [], imaginary: [] };
  const real: number[] = [];
  const imaginary: number[] = [];
  for (const frequency of frequencies) {
    let re = 0;
    let im = 0;
    for (const point of points) {
      const phase = -2 * Math.PI * frequency * point[axis];
      re += point.weight * Math.cos(phase);
      im += point.weight * Math.sin(phase);
    }
    real.push(re / total);
    imaginary.push(im / total);
  }
  return { real, imaginary };
}

export function otfMagnitude(otf: ComplexOtf): number[] {
  return otf.real.map((re, i) => Math.min(1, Math.hypot(re, otf.imaginary[i])));
}
