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
  const count = frequencies.length;
  const real = new Float64Array(count);
  const imaginary = new Float64Array(count);
  const step = arithmeticStep(frequencies);
  for (const point of points) {
    const position = point[axis];
    if (step === null) {
      for (let i = 0; i < count; i++) {
        const phase = -2 * Math.PI * frequencies[i] * position;
        real[i] += point.weight * Math.cos(phase);
        imaginary[i] += point.weight * Math.sin(phase);
      }
      continue;
    }
    // Evenly spaced frequencies share one phasor rotation per point: a single sincos pair
    // replaces one per frequency, which keeps 0-100 lp/mm sweeps cheap for dense field grids.
    const start = -2 * Math.PI * frequencies[0] * position;
    const rotation = -2 * Math.PI * step * position;
    const rotationCos = Math.cos(rotation);
    const rotationSin = Math.sin(rotation);
    let re = point.weight * Math.cos(start);
    let im = point.weight * Math.sin(start);
    for (let i = 0; i < count; i++) {
      real[i] += re;
      imaginary[i] += im;
      const next = re * rotationCos - im * rotationSin;
      im = re * rotationSin + im * rotationCos;
      re = next;
    }
  }
  return { real: Array.from(real, (v) => v / total), imaginary: Array.from(imaginary, (v) => v / total) };
}

/** Common spacing of an evenly spaced frequency list with at least three entries, else null. */
function arithmeticStep(frequencies: readonly number[]): number | null {
  if (frequencies.length < 3) return null;
  const step = frequencies[1] - frequencies[0];
  if (!(step > 0)) return null;
  for (let i = 2; i < frequencies.length; i++) {
    if (Math.abs(frequencies[i] - frequencies[i - 1] - step) > 1e-9 * Math.max(1, step)) return null;
  }
  return step;
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

/** Scale a complex OTF by a real, per-frequency transfer factor such as a diffraction limit. */
export function multiplyOtf(otf: ComplexOtf, gain: readonly number[]): ComplexOtf {
  return {
    real: otf.real.map((value, i) => value * gain[i]),
    imaginary: otf.imaginary.map((value, i) => value * gain[i]),
  };
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
