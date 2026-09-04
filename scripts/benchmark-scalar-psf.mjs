/** Isolated optimized-grid versus point-reference benchmark; run with the TS specifier hook. */
import { writeFileSync } from "node:fs";
import os from "node:os";
import { computeHuygensPsf, huygensIntensity } from "../src/optics/math/huygens.ts";
import { createAreaWeightedCircularPupilPoints } from "../src/optics/math/pupilSampling.ts";

const wavelets = createAreaWeightedCircularPupilPoints(32, 64).map((p) => ({
  point: [p.u, p.v, 0],
  opdMm: 0.0002 * (p.u * p.u + p.v * p.v),
  amplitudeAreaMm2: p.weight * Math.PI,
  directionCosine: 100 / Math.hypot(100, p.u, p.v),
}));
const reference = [0, 0, 100],
  size = 65,
  pitch = 0.003,
  wavelengthNm = 587.5618;
const peak = huygensIntensity(wavelets, wavelengthNm, reference, reference, true);
const pointReference = () =>
  Array.from(
    { length: size * size },
    (_, i) =>
      huygensIntensity(wavelets, wavelengthNm, reference, [
        ((i % size) - 32) * pitch,
        (Math.floor(i / size) - 32) * pitch,
        100,
      ]) / peak,
  );
const optimized = () => computeHuygensPsf(wavelets, wavelengthNm, reference, size, pitch).intensity;
const timings = { referenceMs: [], optimizedMs: [] };
pointReference();
optimized();
let maximumAbsoluteDifference = 0;
for (let i = 0; i < 3; i++) {
  let start = performance.now();
  const expected = pointReference();
  timings.referenceMs.push(performance.now() - start);
  start = performance.now();
  const actual = optimized();
  timings.optimizedMs.push(performance.now() - start);
  maximumAbsoluteDifference = Math.max(maximumAbsoluteDifference, ...actual.map((v, j) => Math.abs(v - expected[j])));
}
if (maximumAbsoluteDifference > 1e-8) throw new Error("Optimized grid disagrees with scalar reference");
const report = {
  createdAt: new Date().toISOString(),
  node: process.version,
  cpu: os.cpus()[0]?.model,
  size,
  pitchMm: pitch,
  wavelengthNm,
  waveletCount: wavelets.length,
  ...timings,
  maximumAbsoluteDifference,
};
const text = JSON.stringify(report, null, 2) + "\n";
if (process.argv[2]) writeFileSync(process.argv[2], text);
else console.log(text);
