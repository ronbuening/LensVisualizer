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

/** Move a locally centered PSF back to its common image coordinates before spectral addition. */
export function translateOtf(otf: ComplexOtf, frequencies: readonly number[], displacementMm: number): ComplexOtf {
  const real: number[] = [],
    imaginary: number[] = [];
  frequencies.forEach((f, i) => {
    const phase = -2 * Math.PI * f * displacementMm,
      c = Math.cos(phase),
      s = Math.sin(phase);
    real.push(otf.real[i] * c - otf.imaginary[i] * s);
    imaginary.push(otf.real[i] * s + otf.imaginary[i] * c);
  });
  return { real, imaginary };
}

/** Incoherent wavelengths add as complex OTFs weighted by transmitted intensity, before magnitude. */
export function combineOtfs(samples: readonly { otf: ComplexOtf; weight: number }[]): ComplexOtf {
  const total = samples.reduce((sum, sample) => sum + sample.weight, 0);
  if (!(total > 0) || !samples.length) return { real: [], imaginary: [] };
  return {
    real: samples[0].otf.real.map((_, i) => samples.reduce((sum, s) => sum + s.weight * s.otf.real[i], 0) / total),
    imaginary: samples[0].otf.imaginary.map(
      (_, i) => samples.reduce((sum, s) => sum + s.weight * s.otf.imaginary[i], 0) / total,
    ),
  };
}
