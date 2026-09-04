/** Fourier slices of a sampled intensity PSF, normalized by its measured window DC. */
import type { MtfSample, PsfGrid } from "../../types/imageQuality.js";

export function computeMtfFromPsf(
  psf: Pick<PsfGrid, "size" | "pixelPitchMm" | "intensity">,
  count = 33,
  maxFrequencyPerMm?: number,
): MtfSample[] {
  const { size, pixelPitchMm, intensity } = psf;
  if (
    !Number.isInteger(size) ||
    size < 1 ||
    intensity.length !== size * size ||
    !Number.isFinite(pixelPitchMm) ||
    pixelPitchMm <= 0 ||
    !Number.isInteger(count) ||
    count < 2 ||
    count > 1024 ||
    intensity.some((v) => !Number.isFinite(v) || v < 0)
  )
    return [];
  const horizontal = new Float64Array(size),
    vertical = new Float64Array(size);
  let dc = 0;
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const value = intensity[y * size + x];
      horizontal[x] += value;
      vertical[y] += value;
      dc += value;
    }
  if (dc <= 0) return [];
  const maximum = maxFrequencyPerMm ?? 1 / (2 * pixelPitchMm);
  if (!Number.isFinite(maximum) || maximum <= 0 || maximum > 1 / (2 * pixelPitchMm)) return [];
  const samples: MtfSample[] = [];
  const middle = (size - 1) / 2;
  for (let sample = 0; sample < count; sample++) {
    const frequency = (sample / (count - 1)) * maximum;
    let hx = 0,
      hy = 0,
      vx = 0,
      vy = 0;
    for (let i = 0; i < size; i++) {
      const phase = -2 * Math.PI * frequency * (i - middle) * pixelPitchMm;
      const c = Math.cos(phase),
        s = Math.sin(phase);
      hx += horizontal[i] * c;
      hy += horizontal[i] * s;
      vx += vertical[i] * c;
      vy += vertical[i] * s;
    }
    samples.push({ frequencyPerMm: frequency, horizontal: Math.hypot(hx, hy) / dc, vertical: Math.hypot(vx, vy) / dc });
  }
  return samples;
}
