/**
 * Read-only geometric comparison of stop-uniform and incident-flux weights with a launch-plane witness.
 * Diffraction reports only the sheared estimator's sensitivity to those weights.
 * Run through the TS specifier hook; --lens=<catalog key>, --grid=<cells across>, --json.
 * Every method uses one product-weighted best-axial plane per station/aperture; no product defaults change.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { createAnalysisRequest } from "../src/optics/analysis.ts";
import { buildLens, prepareRuntimeState } from "../src/optics/buildLens.ts";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.ts";
import { fopenAtZoom, stopSemiDiameterForFNumber } from "../src/optics/optics.ts";
import {
  assessMtfSupport,
  expandMtfFootprint,
  findAxialBestFocus,
  findMtfFieldFootprint,
  geometricOtf,
  landingPoints,
  mtfChiefHeight,
  mtfIncidentFluxWeights,
  mtfNearestImagePlaneZ,
  mtfWaveLattice,
  otfMagnitude,
  prepareMtfFieldLaunch,
  resolveMtfFieldTargets,
  resolveMtfGeometry,
  shearedOtf,
  traceMtfLaunchPlaneBundle,
  traceMtfStopBundle,
  waveLatticeOtf,
  waveLatticePhaseStep,
} from "../src/optics/mtf.ts";

const ROOT = join(import.meta.dirname, "..");
const FREQUENCIES = [10, 30, 50];
const FIELDS = [0, 0.7, 1];
const CUTS = ["sagittal", "tangential"];
const DEFAULT_STATIONS = [
  { file: "sigma/Sigma35mmf14DGHSMA.data.ts" },
  { file: "sigma/Sigma35mmf12DGIIArt.data.ts" },
  { file: "sony/SonyFE20mmf18G.data.ts" },
  { file: "sony/SonyFE14mmf18GM.data.ts" },
  { file: "nikon/NikonNikkorZ50f12.data.ts" },
  { file: "sony/SonyFE50mmf12GM.data.ts" },
  { file: "canon/CanonSerenar50mmf18.data.ts" },
  { file: "nikon/NikonNikkor105f14E.data.ts" },
  { file: "canon/CanonEF135mmf2LUSM.data.ts" },
  { file: "sony/SonyFE1224mmf28GM.data.ts" },
  { file: "sony/SonyFE1224mmf28GM.data.ts", zoomT: 1 },
  { file: "fujifilm/FujifilmGF80mmf17R.data.ts", focusT: 1 },
];

function parseOptions(argv) {
  let grid = 256,
    lens,
    json = false;
  for (const arg of argv) {
    if (arg === "--json") json = true;
    else if (arg.startsWith("--lens=")) lens = arg.slice(7);
    else if (arg.startsWith("--grid=")) grid = Number(arg.slice(7));
    else throw new Error(`Unknown option: ${arg}`);
  }
  if (!Number.isInteger(grid) || grid < 8 || grid > 1024) throw new Error("--grid must be an integer from 8 to 1024.");
  if (lens === "") throw new Error("--lens requires a catalog key.");
  return { grid, lens, json };
}

function keyForFile(file) {
  return readFileSync(join(ROOT, "src", "lens-data", file), "utf8").match(/^\s*key:\s*"([^"]+)"/m)?.[1];
}

function stationsFor(key) {
  if (!key) return DEFAULT_STATIONS;
  const defaults = DEFAULT_STATIONS.filter(({ file }) => keyForFile(file) === key);
  if (defaults.length) return defaults;
  const file = readdirSync(join(ROOT, "src", "lens-data"), { recursive: true })
    .filter((file) => file.endsWith(".data.ts"))
    .find((file) => keyForFile(file) === key);
  if (!file) throw new Error(`Unknown lens key: ${key}`);
  return [{ file }];
}

function diagnostics(bundle) {
  const transmitted = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
  const share = (weight) => (weight > 0 ? weight / (transmitted + weight) : 0);
  return {
    rays: bundle.rays.length,
    failed: bundle.failed,
    unaimed: bundle.unaimed,
    unresolvedInBeam: bundle.unresolvedInBeam,
    openBorders: bundle.openBorders,
    unresolvedFlux: {
      allShare: share(bundle.unresolvedWeight),
      inBeamShare: share(bundle.unresolvedInBeamWeight),
      basis: bundle.sampling === "stop" ? "stop-uniform, not incident flux" : "launch-plane incident flux",
      // The finite launch witness stores unresolved dΩ weights before the source cosine. Since cos ≤ 1,
      // retaining those weights bounds the missing Lambertian flux against the cosine-weighted transmitted rays.
      upperBound: bundle.sampling === "launch-plane" && !!bundle.objectPoint,
    },
  };
}

/**
 * Keep every warning and expose the omitted-flux share in each bundle's stated measure.
 * @param stop - product stop bundle
 * @param reference - launch-plane bundle, including the finite source cosine on transmitted rays
 * @returns bundle diagnostics and all applicable warnings
 */
export function weightingDiagnostics(stop, reference = null) {
  const bundles = { stop: diagnostics(stop), ...(reference ? { launchPlane: diagnostics(reference) } : {}) };
  const warnings = [];
  for (const [label, bundle] of Object.entries(bundles)) {
    if (Object.values(bundle.openBorders).some(Boolean)) warnings.push(`${label}: footprint guard band remains open.`);
    if (bundle.failed || bundle.unaimed) {
      const flux = bundle.unresolvedFlux;
      const percent = (share) => `${flux.upperBound ? "≤" : ""}${(100 * share).toFixed(4)}%`;
      warnings.push(
        `${label}: unresolved rays omit ${percent(flux.allShare)} flux (${percent(flux.inBeamShare)} beside the beam; ${flux.basis}).`,
      );
    }
  }
  return { diagnostics: bundles, warnings };
}

function requireBundle(bundle, label) {
  if (!bundle || !bundle.rays.length) throw new Error(`No transmitted ${label} bundle.`);
  return bundle;
}

function launchPlaneReference(state, options, support, launch, grid, line) {
  let footprint = findMtfFieldFootprint(state, options, support, launch);
  if (!footprint) throw new Error("No launch-plane footprint.");
  let reference;
  let expansions = 0;
  for (;;) {
    reference = requireBundle(
      traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, grid, line),
      "launch-plane",
    );
    if (!Object.values(reference.openBorders).some(Boolean) || expansions === 2) break;
    footprint = expandMtfFootprint(footprint, reference.openBorders);
    expansions++;
  }
  // The native finite witness integrates dΩ for an isotropic point source. Lambert's source cosine supplies
  // cos(theta) dΩ independently of the stop-map Jacobian, for a source surface normal to +z.
  if (launch.objectPoint)
    reference.rays = reference.rays.map((ray) => ({
      ...ray,
      weight: ray.weight * Math.abs(ray.trace.input.direction[2]),
    }));
  return { reference, expansions };
}

function geometric(bundle, planeZ, chief) {
  // A common phase origin also permits complex-OTF comparisons without a large field-height phase.
  const points = landingPoints(bundle, planeZ).map((p) => ({ ...p, x: p.x - chief.x, y: p.y - chief.y }));
  if (points.length !== bundle.rays.length) throw new Error("Missing image landing.");
  return Object.fromEntries(CUTS.map((cut, i) => [cut, geometricOtf(points, FREQUENCIES, i ? "y" : "x")]));
}

function magnitudes(otfs) {
  return Object.fromEntries(CUTS.map((cut) => [cut, otfMagnitude(otfs[cut])]));
}

/**
 * Compare OTFs with a common phase origin, retaining phase errors hidden by MTF magnitudes.
 * @param otfs - product, incidentFlux and launchPlane complex OTFs per cut
 * @returns complex OTFs, MTF magnitudes, signed magnitude differences and complex gap magnitudes
 */
export function geometricComparison(otfs) {
  const values = Object.fromEntries(Object.entries(otfs).map(([key, value]) => [key, magnitudes(value)]));
  const complexGap = (a, b) =>
    Object.fromEntries(
      CUTS.map((cut) => [
        cut,
        a[cut].real.map((re, i) => Math.hypot(re - b[cut].real[i], a[cut].imaginary[i] - b[cut].imaginary[i])),
      ]),
    );
  return {
    otfs,
    ...values,
    productMinusReferenceMagnitude: difference(values.product, values.launchPlane),
    fluxMinusReferenceMagnitude: difference(values.incidentFlux, values.launchPlane),
    productReferenceComplexGap: complexGap(otfs.product, otfs.launchPlane),
    fluxReferenceComplexGap: complexGap(otfs.incidentFlux, otfs.launchPlane),
  };
}

function diffraction(bundle, planeZ, wavelengthMm) {
  const points = landingPoints(bundle, planeZ);
  const moved = { ...bundle, rays: bundle.rays.map((ray, i) => ({ ...ray, ...points[i] })) };
  const otf = shearedOtf(moved, bundle.chief, wavelengthMm, FREQUENCIES);
  return Object.fromEntries(CUTS.map((cut) => [cut, otfMagnitude(otf[cut])]));
}

function diffractionReference(flux, planeZ, wavelengthMm, product) {
  // ray.weight is cell flux F, including bulk transmission. The reference converts √F to √(F/J)
  // and integrates with direction-area measure J; pre-dividing these weights by J would count it twice.
  const lattice = mtfWaveLattice(flux, flux.chief, planeZ);
  if (!lattice) return { unavailable: "Missing optical path.", gatePassed: false, phaseStepWaves: null };
  const phaseStep = waveLatticePhaseStep(lattice, wavelengthMm);
  if (!(phaseStep < 0.25))
    return {
      unavailable: Number.isFinite(phaseStep)
        ? "Phase step is not below 0.25 waves."
        : "Direction map is not invertible.",
      gatePassed: false,
      phaseStepWaves: Number.isFinite(phaseStep) ? phaseStep : null,
    };
  const otfs = waveLatticeOtf(lattice, wavelengthMm, FREQUENCIES);
  const magnitude = magnitudes(otfs);
  return {
    gatePassed: true,
    phaseStepWaves: phaseStep,
    incidentFluxOtfs: otfs,
    incidentFluxMagnitude: magnitude,
    productEstimatorMinusReferenceMagnitude: difference(product, magnitude),
  };
}

function difference(a, b) {
  return Object.fromEntries(CUTS.map((cut) => [cut, a[cut].map((value, i) => value - b[cut][i])]));
}

async function measureStation(station, grid) {
  const { file, zoomT = 0, focusT = 0 } = station;
  const data = (await import(pathToFileURL(join(ROOT, "src", "lens-data", file)).href)).default;
  const lens = buildLens(data, { path: `src/lens-data/${file}` });
  const state = prepareRuntimeState(lens, focusT, zoomT);
  const label = `${data.key}${zoomT ? "/tele" : ""}${focusT ? "/finite" : ""}`;
  const apertures = [];
  for (const fNumber of [fopenAtZoom(zoomT, lens), 8]) {
    const stopSemiDiameterMm = stopSemiDiameterForFNumber(fNumber, zoomT, lens);
    const pupilSemiDiameterMm = entrancePupilAtState(stopSemiDiameterMm, focusT, zoomT, lens).epSD;
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: pupilSemiDiameterMm,
      currentPhysStopSD: stopSemiDiameterMm,
    });
    const options = {
      method: "geometric",
      spectrum: "reference",
      focus: "best-axial",
      pupilSemiDiameterMm,
      stopSemiDiameterMm,
    };
    const support = assessMtfSupport(request, options);
    const aperture = {
      fNumber,
      fields: FIELDS.map((fraction) => ({ fraction, angleDeg: null, warnings: [] })),
    };
    apertures.push(aperture);
    try {
      if (!support.available) throw new Error(support.message);
      const geometry = resolveMtfGeometry(request, options);
      if (!geometry) throw new Error("No field geometry.");
      const targets = resolveMtfFieldTargets(
        state,
        geometry,
        FIELDS,
        mtfChiefHeight(state, options, support, false),
        !support.conjugate,
      );
      const line = support.spectralLines[0];
      const axialLaunch = prepareMtfFieldLaunch(state, options, support, 0);
      if (!axialLaunch?.aim) throw new Error("No stop-aimed axial launch.");
      const axial = requireBundle(
        traceMtfStopBundle(state, options, support, axialLaunch, Math.min(grid, 64), line),
        "axial",
      );
      const best = findAxialBestFocus(
        [{ bundle: axial, weight: 1 }],
        state.imgZ,
        [10, 20, 30, 40, 50],
        mtfNearestImagePlaneZ(state),
      );
      if (!best) throw new Error("No best-axial plane.");
      aperture.planeShiftMm = best.shiftMm;
      aperture.focusGrid = Math.min(grid, 64);
      aperture.wavelengthNm = line.wavelengthNm;
      aperture.conjugate = support.conjugate ?? null;
      const planeZ = state.imgZ + best.shiftMm;
      for (const target of targets) {
        const field = aperture.fields.find((field) => field.fraction === target.fraction);
        field.angleDeg = target.fieldAngleDeg;
        try {
          if (target.outsideModel || target.fieldAngleDeg === null)
            throw new Error("Field outside modeled coverage or unresolved.");
          const launch = prepareMtfFieldLaunch(state, options, support, target.fieldAngleDeg);
          if (!launch?.aim) throw new Error("No stop-aimed field launch.");
          const stop = requireBundle(
            traceMtfStopBundle(state, options, support, launch, grid, line, state.imgZ, { opticalPath: true }),
            "stop",
          );
          Object.assign(field, weightingDiagnostics(stop));
          const weights = mtfIncidentFluxWeights(stop);
          const missing = Array.from(weights).filter((weight) => !Number.isFinite(weight) || !(weight > 0)).length;
          if (missing) throw new Error(`${missing} incident-flux weights lack a positive finite stencil.`);
          const flux = { ...stop, rays: stop.rays.map((ray, i) => ({ ...ray, weight: ray.weight * weights[i] })) };
          const { reference, expansions } = launchPlaneReference(state, options, support, launch, grid, line);
          Object.assign(field, weightingDiagnostics(stop, reference));
          field.diagnostics.footprintExpansions = expansions;
          const chief = stop.chief;
          field.geometric = geometricComparison({
            product: geometric(stop, planeZ, chief),
            incidentFlux: geometric(flux, planeZ, chief),
            launchPlane: geometric(reference, planeZ, chief),
          });
          field.diffractionEstimatorSensitivity = {
            product: diffraction(stop, planeZ, line.wavelengthNm * 1e-6),
            incidentFlux: diffraction(flux, planeZ, line.wavelengthNm * 1e-6),
          };
          field.diffractionEstimatorSensitivity.fluxMinusProductMagnitude = difference(
            field.diffractionEstimatorSensitivity.incidentFlux,
            field.diffractionEstimatorSensitivity.product,
          );
          field.diffractionReference = diffractionReference(
            flux,
            planeZ,
            line.wavelengthNm * 1e-6,
            field.diffractionEstimatorSensitivity.product,
          );
        } catch (error) {
          field.unavailable = error.message;
        }
      }
    } catch (error) {
      aperture.unavailable = error.message;
      for (const field of aperture.fields) field.unavailable = error.message;
    }
  }
  return { key: data.key, label, file, zoomT, focusT, apertures };
}

function fieldSamples(stations) {
  return stations.flatMap((station) =>
    station.apertures.flatMap((aperture) =>
      FIELDS.map((fraction) => {
        const field = aperture.fields.find((field) => field.fraction === fraction);
        const unavailable =
          aperture.unavailable ?? field?.unavailable ?? (!field?.geometric ? "No geometric result." : null);
        return {
          ...field,
          lens: station.label,
          fNumber: aperture.fNumber,
          fraction,
          unavailable,
          population: unavailable ? "unavailable" : field.warnings.length ? "warned" : "clean",
        };
      }),
    ),
  );
}

function populations(fields) {
  return {
    attempted: fields.length,
    unavailable: fields.filter((field) => field.population === "unavailable").length,
    clean: fields.filter((field) => field.population === "clean").length,
    warned: fields.filter((field) => field.population === "warned").length,
    unavailableSamples: fields
      .filter((field) => field.population === "unavailable")
      .map((field) => ({ lens: field.lens, fNumber: field.fNumber, field: field.fraction, reason: field.unavailable })),
  };
}

function statistics(fields, indices = FREQUENCIES.map((_, i) => i)) {
  const metrics = [
    ["productMagnitude", "geometric", "productMinusReferenceMagnitude"],
    ["productComplexGap", "geometric", "productReferenceComplexGap"],
    ["fluxMagnitude", "geometric", "fluxMinusReferenceMagnitude"],
    ["fluxComplexGap", "geometric", "fluxReferenceComplexGap"],
    ["diffractionEstimatorSensitivity", "diffractionEstimatorSensitivity", "fluxMinusProductMagnitude"],
    ["diffractionReferenceMagnitude", "diffractionReference", "productEstimatorMinusReferenceMagnitude"],
  ];
  return Object.fromEntries(
    metrics.map(([name, group, metric]) => {
      const comparisons = fields.flatMap((field) =>
        field[group]?.[metric] ? indices.map((i) => CUTS.map((cut) => Math.abs(field[group][metric][cut][i]))) : [],
      );
      const absolute = comparisons.flat();
      return [
        name,
        {
          fieldFrequencySamples: comparisons.length,
          cuts: absolute.length,
          max: absolute.length ? Math.max(...absolute) : null,
          mean: absolute.length ? absolute.reduce((a, b) => a + b, 0) / absolute.length : null,
          above005: comparisons.filter((cuts) => Math.max(...cuts) > 0.005).length,
          above010: comparisons.filter((cuts) => Math.max(...cuts) > 0.01).length,
        },
      ];
    }),
  );
}

/**
 * Summarize magnitude and complex gaps without pooling clean and warned field/aperture samples.
 * @param stations - measured stations, including unavailable apertures and fields
 * @returns attempted/unavailable counts and separate clean/warned statistics per field and frequency
 */
export function summarize(stations) {
  const fields = fieldSamples(stations);
  const rows = [];
  for (const population of ["clean", "warned"]) {
    for (const fraction of FIELDS) {
      for (const [i, frequency] of FREQUENCIES.entries()) {
        const samples = fields.filter((field) => field.population === population && field.fraction === fraction);
        rows.push({ population, field: fraction, frequency, samples: samples.length, ...statistics(samples, [i]) });
      }
    }
  }
  return { populations: populations(fields), rows };
}

function pair(values, i) {
  return values ? CUTS.map((cut) => values[cut][i].toFixed(6)).join(" / ") : "unavailable";
}

function perLens(stations) {
  return stations.flatMap((station) =>
    station.apertures.map((aperture) => {
      const fields = fieldSamples([{ ...station, apertures: [aperture] }]);
      return {
        lens: station.label,
        fNumber: aperture.fNumber,
        populations: populations(fields),
        clean: statistics(fields.filter((field) => field.population === "clean")),
        warned: statistics(fields.filter((field) => field.population === "warned")),
      };
    }),
  );
}

async function main() {
  const started = performance.now();
  const options = parseOptions(process.argv.slice(2));
  const stations = [];
  for (const station of stationsFor(options.lens)) {
    console.error(`Weighting: ${station.file}, zoom=${station.zoomT ?? 0}, focus=${station.focusT ?? 0}`);
    stations.push(await measureStation(station, options.grid));
  }
  const report = {
    grid: options.grid,
    spectrum: "reference",
    frequenciesPerMm: FREQUENCIES,
    fields: FIELDS,
    focus:
      "One product-weighted best-axial plane, 64-cell focus grid (or --grid if smaller), 10/20/30/40/50 lp/mm; shared by both methods and all weights/fields.",
    finiteSource: "Lambertian surface normal to +z; launch-plane dΩ weights also receive the source cosine.",
    geometricComparison:
      "Signed MTF-magnitude differences and complex gaps |OTF_a - OTF_reference| use the shared chief image point as phase origin; the launch-plane witness is independent quadrature of the same tracer.",
    diffractionEstimatorSensitivity:
      "The reweighted sheared-estimator column is sensitivity to weights, not a prediction of diffraction MTF under incident flux: its stop-lattice sqrt(F) lacks direction-space amplitude sqrt(F/J), area measure J and exact 2-D shear endpoints.",
    diffractionReference:
      "Direction-space optical-path reference receives incident cell flux F and handles its own Jacobian; product-estimator minus reference includes estimator and weighting differences and is reported only for invertible maps with phase step < 0.25 waves per cell.",
    samplingNote:
      "Fixed grids are quadrature estimates, not convergence claims. Clean and warned populations are separate. Unresolved samples assume full transmission. Stop unresolved shares use stop-uniform weights; their incident-flux share is unknown. Finite launch-plane unresolved shares are upper bounds using source cosine <= 1.",
    elapsedSeconds: (performance.now() - started) / 1000,
    summary: summarize(stations),
    perLens: perLens(stations),
    stations,
  };
  const fields = fieldSamples(stations);
  const references = fields.filter((field) => field.diffractionReference);
  report.diffractionReferenceGate = {
    attempted: references.length,
    passed: references.filter((field) => field.diffractionReference.gatePassed).length,
    excluded: references.filter((field) => !field.diffractionReference.gatePassed).length,
    unavailableBeforeGate: fields.length - references.length,
  };
  if (options.json) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(`Reference spectrum; fixed ${report.grid} cells; ${report.focus}`);
    console.log(report.finiteSource);
    console.log(report.geometricComparison);
    console.log(report.diffractionEstimatorSensitivity);
    console.log(report.diffractionReference);
    console.log("Diffraction reference gate (field/aperture samples):", report.diffractionReferenceGate);
    console.log(report.samplingNote);
    for (const station of stations) {
      console.log(`\n${station.label}`);
      console.table(
        station.apertures.flatMap((aperture) =>
          aperture.fields.flatMap((field) =>
            FREQUENCIES.map((frequency, i) => ({
              fNumber: aperture.fNumber,
              field: field.fraction,
              frequency,
              "product S/T": pair(field.geometric?.product, i),
              "flux S/T": pair(field.geometric?.incidentFlux, i),
              "reference S/T": pair(field.geometric?.launchPlane, i),
              "product-ref ΔMTF S/T": pair(field.geometric?.productMinusReferenceMagnitude, i),
              "product-ref |ΔOTF| S/T": pair(field.geometric?.productReferenceComplexGap, i),
              "flux-ref ΔMTF S/T": pair(field.geometric?.fluxMinusReferenceMagnitude, i),
              "flux-ref |ΔOTF| S/T": pair(field.geometric?.fluxReferenceComplexGap, i),
              "diffraction weight sensitivity ΔMTF S/T": pair(
                field.diffractionEstimatorSensitivity?.fluxMinusProductMagnitude,
                i,
              ),
              "diffraction product-ref ΔMTF S/T": pair(
                field.diffractionReference?.productEstimatorMinusReferenceMagnitude,
                i,
              ),
              note: [
                field.unavailable ?? aperture.unavailable,
                ...field.warnings,
                field.diffractionReference?.unavailable,
              ]
                .filter(Boolean)
                .join("; "),
            })),
          ),
        ),
      );
    }
    console.log(
      "Summary: geometric |ΔMTF| = absolute MTF-magnitude gap; |ΔOTF| = complex gap. All cells show max / mean, pooling S/T within each population; exceedance counts in JSON use the worse cut of each field/frequency sample. Diffraction ΔMTF sensitivity is flux minus product; diffraction reference gaps are product-estimator minus gated incident-flux reference.",
    );
    console.log("Field/aperture populations:", report.summary.populations);
    const statPair = (stat) => (stat.max === null ? "unavailable" : `${stat.max.toFixed(6)} / ${stat.mean.toFixed(6)}`);
    const columns = (row) => ({
      "product |ΔMTF|": statPair(row.productMagnitude),
      "product |ΔOTF|": statPair(row.productComplexGap),
      "flux |ΔMTF|": statPair(row.fluxMagnitude),
      "flux |ΔOTF|": statPair(row.fluxComplexGap),
      "diffraction weight sensitivity |ΔMTF|": statPair(row.diffractionEstimatorSensitivity),
      "diffraction reference |ΔMTF|": statPair(row.diffractionReferenceMagnitude),
      "gated reference samples": row.diffractionReferenceMagnitude.fieldFrequencySamples,
    });
    for (const population of ["clean", "warned"]) {
      console.log(`${population} samples (max / mean):`);
      const rows = report.summary.rows.filter((row) => row.population === population && row.samples);
      if (!rows.length) console.log("No samples.");
      else
        console.table(
          rows.map((row) => ({ field: row.field, frequency: row.frequency, samples: row.samples, ...columns(row) })),
        );
    }
    console.log("Per-station/aperture (max / mean over fields, frequencies and S/T; populations separate):");
    console.table(
      report.perLens.flatMap((row) =>
        ["clean", "warned"]
          .filter((population) => row.populations[population])
          .map((population) => ({ lens: row.lens, fNumber: row.fNumber, population, ...columns(row[population]) })),
      ),
    );
    console.log(`Elapsed: ${report.elapsedSeconds.toFixed(1)} s`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
