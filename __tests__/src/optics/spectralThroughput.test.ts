import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import {
  dielectricReflectance,
  throughputForTrace,
  traceSpectralThroughput,
} from "../../../src/optics/trace/spectralThroughput.js";
import { bulkTransmissionForTrace } from "../../../src/optics/trace/bulkAbsorption.js";
import {
  sampleSpectrum,
  sampleSurfaceThroughput,
  validateThroughputTable,
} from "../../../src/optics/math/spectralSampling.js";
import { traceRayChromatic, traceSkewRayChromatic, traceRayVectorChromatic } from "../../../src/optics/optics.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import type { SurfaceThroughputTable } from "../../../src/types/optics.js";

const transmissionTable: SurfaceThroughputTable = {
  source: "Analytic regression fixture; not production coating data",
  kind: "transmission",
  incidentSide: "both",
  wavelengthsNm: [400, 700],
  incidenceAnglesDeg: [0, 90],
  values: [
    [0.9, 0.8],
    [0.96, 0.86],
  ],
};
const spectrum = { source: "Analytic regression fixture", wavelengthsNm: [400, 700], values: [0.1, 0.4] };

function plate(
  options: {
    mirror?: boolean;
    authored?: boolean;
    spectral?: boolean;
    unknownBulk?: boolean;
    table?: SurfaceThroughputTable;
  } = {},
) {
  const L = build({
    key: "throughput-plate-fixture",
    name: "Throughput plate fixture",
    closeFocusM: 1,
    nominalFno: 4,
    yScFill: 0.5,
    fstopSeries: [4, 8, 16],
    elements: [
      {
        id: 1,
        name: "Plate",
        label: "L1",
        type: "positive",
        nd: 1.5,
        ...(options.unknownBulk ? {} : { absorptionCoefficientPerMm: 0.1 }),
        ...(options.spectral ? { absorptionSpectrumPerMm: spectrum } : {}),
      },
    ],
    surfaces: [
      { label: "STO", R: 1e15, nd: 1, d: 1, sd: 10, elemId: 0 },
      {
        label: "1",
        R: 1e15,
        nd: 1.5,
        d: 10,
        sd: 10,
        elemId: 1,
        ...(options.authored ? { opticalThroughput: options.table ?? transmissionTable } : {}),
      },
      {
        label: "2",
        R: 1e15,
        nd: 1,
        d: 20,
        sd: 10,
        elemId: 0,
        ...(options.mirror ? { interaction: { type: "reflect", mirrorKind: "second-surface" } } : {}),
        ...(options.authored
          ? {
              opticalThroughput: options.mirror
                ? {
                    ...transmissionTable,
                    kind: "reflection",
                    values: [
                      [0.8, 0.8],
                      [0.8, 0.8],
                    ],
                  }
                : transmissionTable,
            }
          : {}),
      },
    ],
    asph: {},
    // Explicit image plane also permits an afocal plate fixture in the runtime builder.
    opticalPath: {
      surfaceOrder: options.mirror ? ["STO", "1", "2", "1", "STO"] : ["STO", "1", "2"],
      maxInteractions: 8,
      imagePlane: { z: options.mirror ? -2 : 31, normal: { z: options.mirror ? -1 : 1, y: 0 } },
    },
  });
  return prepareRuntimeState(L, 0, 0);
}

const axial = { origin: [0, 0, -1], direction: [0, 0, 1] } as const;

describe("spectral direct-path throughput", () => {
  it("accepts completed ordinary sequential traces and projects the remaining sensor distance", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const result = traceSpectralThroughput(state, axial, 10, "ideal");
    expect(result.trace.reachedImagePlane).toBe(false); // The existing tracer returns at the last vertex.
    expect(result.throughput.transmission).toBe(1);
    expect(
      traceSpectralThroughput(
        { ...state, imagePlane: { ...state.imagePlane, point: [0, 0, -100] } },
        axial,
        10,
        "ideal",
      ).throughput.status,
    ).toBe("failed");
  });
  it("matches normal-incidence Fresnel power, matched media and total internal reflection", () => {
    expect(dielectricReflectance(1, 1.5, 1)).toBeCloseTo(0.04, 14);
    expect(dielectricReflectance(1.5, 1, 1)).toBeCloseTo(0.04, 14);
    expect(dielectricReflectance(1.5, 1.5, 0)).toBe(0);
    expect(dielectricReflectance(1.5, 1, 0.5)).toBe(1);
    expect(dielectricReflectance(1, 1.5, 0)).toBe(1);
    expect(dielectricReflectance(-1, 1.5, 1)).toBeNaN();
    // Brewster angle: Rp = 0, Rs = ((n^2-1)/(n^2+1))^2.
    const n = 1.5;
    expect(dielectricReflectance(1, n, 1 / Math.sqrt(1 + n * n))).toBeCloseTo(((n * n - 1) / (n * n + 1)) ** 2 / 2, 14);
  });

  it("multiplies both plate interfaces and only the physical glass path", () => {
    const state = plate();
    const { trace, throughput } = traceSpectralThroughput(state, axial, 10, "uncoated");
    expect(trace.status).toBe("ok");
    expect(throughput.status).toBe("assumed");
    expect(throughput.transmission).toBeCloseTo(0.96 ** 2 * Math.exp(-1), 12);
    expect(bulkTransmissionForTrace(state.lens.runtime, trace.hits)).toBeCloseTo(Math.exp(-1), 12);
    expect(traceSpectralThroughput(state, axial, 10, "ideal").throughput.transmission).toBe(1);
  });

  it("retains the incident medium at a mirror and counts both glass encounters", () => {
    const state = plate({ mirror: true, authored: true });
    const { trace, throughput } = traceSpectralThroughput(state, axial, 10, "authored");
    const t = sampleSurfaceThroughput(transmissionTable, LINE_NM.d, 0)!;
    expect(trace.status).toBe("ok");
    expect(throughput.status).toBe("complete");
    expect(throughput.transmission).toBeCloseTo(t ** 2 * 0.8 * Math.exp(-2), 12);
    expect(bulkTransmissionForTrace(state.lens.runtime, trace.hits)).toBeCloseTo(Math.exp(-2), 12);
    expect(traceSpectralThroughput(state, axial, 10, "uncoated").throughput.transmission).toBeNull();
  });

  it("uses angle-dependent coating data and the longer refracted path at oblique incidence", () => {
    const state = plate({ authored: true });
    const theta = 0.2;
    const inside = Math.asin(Math.sin(theta) / 1.5);
    const ray = { origin: [0, 0, -1], direction: [0, Math.sin(theta), Math.cos(theta)] } as const;
    const result = traceSpectralThroughput(state, ray, 10, "authored");
    const entry = sampleSurfaceThroughput(transmissionTable, LINE_NM.d, (theta * 180) / Math.PI)!;
    const exit = sampleSurfaceThroughput(transmissionTable, LINE_NM.d, (inside * 180) / Math.PI)!;
    expect(result.throughput.transmission).toBeCloseTo(entry * exit * Math.exp(-1 / Math.cos(inside)), 10);
  });

  it("reports missing coatings and bulk data instead of manufacturing unit transmission", () => {
    const state = plate({ unknownBulk: true });
    const { throughput } = traceSpectralThroughput(state, axial, 10, "authored");
    expect(throughput.status).toBe("incomplete");
    expect(throughput.transmission).toBeNull();
    expect(throughput.missingElementIds).toEqual([1]);
    expect(throughput.missingSurfaceIndexes).toEqual([1, 2]);
    expect(throughput.knownTransmission).toBe(1);
    expect(traceSpectralThroughput(state, axial, 10, "uncoated").throughput.status).toBe("assumed");
  });

  it("uses the traced wavelength for spectral absorption across public ray shapes", () => {
    const state = plate({ spectral: true, authored: true });
    const L = state.lens.runtime;
    for (const channel of ["R", "G", "B", "V"] as const) {
      const wavelength = { R: LINE_NM.C, G: LINE_NM.d, B: LINE_NM.F, V: LINE_NM.g }[channel];
      const bulk = Math.exp(-10 * sampleSpectrum(spectrum, wavelength)!);
      expect(traceRayChromatic(0, 0, [...state.z], 0, 0, 10, false, L, channel).transmission).toBeCloseTo(bulk, 12);
      expect(traceSkewRayChromatic(0, 0, 0, 0, 0, 0, 10, false, L, channel).transmission).toBeCloseTo(bulk, 12);
      expect(traceRayVectorChromatic(axial, [...state.z], 10, false, L, channel, 0, 0).transmission).toBeCloseTo(
        bulk,
        12,
      );
      const factor = sampleSurfaceThroughput(transmissionTable, wavelength, 0)!;
      expect(traceSpectralThroughput(state, axial, 10, "authored", channel).throughput.transmission).toBeCloseTo(
        bulk * factor ** 2,
        12,
      );
    }
  });

  it("distinguishes physical clipping and failed traces", () => {
    const state = plate();
    expect(
      traceSpectralThroughput(state, { origin: [20, 0, -1], direction: [0, 0, 1] }, 1, "ideal").throughput.status,
    ).toBe("blocked");
    const result = traceSpectralThroughput(state, { origin: [0, 0, -1], direction: [0, 0, 0] }, 1, "authored");
    expect(result.throughput.status).toBe("failed");
    const good = traceSpectralThroughput(state, axial, 10, "ideal").trace;
    expect(
      throughputForTrace(state, { ...good, failureReason: "totalInternalReflection" }, "authored").transmission,
    ).toBe(0);
    expect(
      throughputForTrace(
        state,
        { ...good, hits: good.hits.map((hit) => ({ ...hit, incidentDirection: undefined })) },
        "authored",
      ).status,
    ).toBe("failed");
    expect(throughputForTrace(state, { ...good, reachedImagePlane: false }, "authored").status).toBe("failed");
  });

  it("keeps missing angular, spectral and reverse-side evidence unavailable", () => {
    for (const table of [
      { ...transmissionTable, wavelengthsNm: [600, 700] },
      { ...transmissionTable, incidenceAnglesDeg: [10, 90] },
    ]) {
      expect(
        traceSpectralThroughput(plate({ authored: true, table }), axial, 10, "authored").throughput.transmission,
      ).toBeNull();
    }
    const state = plate({ mirror: true, authored: true, table: { ...transmissionTable, incidentSide: "front" } });
    expect(traceSpectralThroughput(state, axial, 10, "authored").throughput.missingSurfaceIndexes).toEqual([1]);
    const data = structuredClone(plate({ spectral: true, authored: true }).lens.runtime.data);
    data.elements[0].absorptionSpectrumPerMm!.wavelengthsNm = [600, 700];
    const narrowBand = prepareRuntimeState(build(data), 0, 0);
    const missing = traceSpectralThroughput(narrowBand, axial, 10, "authored").throughput;
    expect(missing.transmission).toBeNull();
    expect(missing.missingElementIds).toEqual([1]); // Does not substitute the existing scalar coefficient.
  });

  it("counts a cemented glass interface directly without inventing an air gap", () => {
    const state = prepareRuntimeState(
      build({
        key: "cemented-throughput",
        name: "Cemented plate fixture",
        closeFocusM: 1,
        nominalFno: 4,
        yScFill: 0.5,
        fstopSeries: [4, 8, 16],
        elements: [1.5, 1.6].map((nd, i) => ({
          id: i + 1,
          name: "Glass",
          label: `L${i + 1}`,
          type: "positive",
          nd,
          absorptionCoefficientPerMm: 0.1 * (i + 1),
        })),
        surfaces: [
          { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 10 },
          { label: "1", R: 1e15, d: 5, nd: 1.5, elemId: 1, sd: 10 },
          { label: "2", R: 1e15, d: 5, nd: 1.6, elemId: 2, sd: 10 },
          { label: "3", R: 1e15, d: 20, nd: 1, elemId: 0, sd: 10 },
        ],
        asph: {},
        opticalPath: { surfaceOrder: ["STO", "1", "2", "3"], imagePlane: { z: 31 }, maxInteractions: 8 },
      }),
      0,
      0,
    );
    const actual = traceSpectralThroughput(state, axial, 10, "uncoated").throughput;
    const expected = 0.96 * (1 - (0.1 / 3.1) ** 2) * (1 - (0.6 / 2.6) ** 2) * Math.exp(-1.5);
    expect(actual.transmission).toBeCloseTo(expected, 12);
  });
});

describe("published table domains", () => {
  it("interpolates both axes and refuses to extrapolate", () => {
    expect(sampleSpectrum(spectrum, 550)).toBeCloseTo(0.25, 12);
    expect(sampleSpectrum(spectrum, 400)).toBe(0.1);
    expect(sampleSpectrum(spectrum, 700)).toBe(0.4);
    expect(sampleSpectrum(spectrum, NaN)).toBeNull();
    expect(sampleSpectrum(spectrum, 399)).toBeNull();
    expect(sampleSurfaceThroughput(transmissionTable, 550, 45)).toBeCloseTo(0.88, 12);
    expect(sampleSurfaceThroughput(transmissionTable, 800, 0)).toBeNull();
    expect(sampleSurfaceThroughput(transmissionTable, 500, 91)).toBeNull();
  });

  it("requires provenance, sorted finite axes, matching dimensions and physical values", () => {
    expect(validateThroughputTable(transmissionTable, true)).toEqual([]);
    expect(validateThroughputTable(spectrum, false)).toEqual([]);
    expect(() => plate({ authored: true, table: { ...transmissionTable, source: "" } })).toThrow("source");
    expect(() => plate({ authored: true, table: { ...transmissionTable, kind: "reflection" } })).toThrow(
      "kind must match",
    );
    for (const value of [
      null,
      {},
      { ...spectrum, source: "" },
      { ...spectrum, wavelengthsNm: [500, 500] },
      { ...spectrum, wavelengthsNm: [-1, Infinity] },
      { ...spectrum, values: [-1, 0] },
      { ...spectrum, values: [NaN, 0] },
      { ...spectrum, values: [] },
    ]) {
      expect(validateThroughputTable(value, false).length).toBeGreaterThan(0);
    }
    for (const value of [
      {
        ...transmissionTable,
        values: [
          [1.1, 0],
          [0, 0],
        ],
      },
      { ...transmissionTable, incidenceAnglesDeg: [90, 0] },
      { ...transmissionTable, kind: "power" },
      { ...transmissionTable, incidentSide: "any" },
      { ...transmissionTable, values: [0, 1] },
    ]) {
      expect(validateThroughputTable(value, true).length).toBeGreaterThan(0);
    }
  });
});
