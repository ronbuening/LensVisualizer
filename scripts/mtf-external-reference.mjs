/**
 * Opt-in monochromatic Cooke-triplet comparison with independently reported OpticStudio values.
 * Uses public engine seams; prints differences without treating agreement as an established contract.
 * Run: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/mtf-external-reference.mjs
 *
 * Reference: https://github.com/optiland/optiland/issues/710, System 2, BHelber's OpticStudio 2026 R1.00 report.
 * Stated: mm/degrees, infinite object, EPD 10, stop on surface 4, fields 0/14/20 degrees,
 * 0.48/0.55(primary)/0.65 um; FFT diffraction MTF at the primary wavelength, 128x128 sampling,
 * zero vignetting factors, ray aiming off, 20 C/1 atm, no thermal/pressure model, polarization or coatings.
 * The final gap is 42.20778 mm, not the paraxial BFD (42.414858 mm); no refocus is applied here.
 * Unstated: non-stop clear semi-diameters, focus optimization criterion/history, FFT padding/interpolation,
 * explicit apodization setting, and geometric MTF. No Cooke paraxial image-height table is supplied.
 * Non-stop semi-diameters below are permissive numerical apertures, not sourced lens-edge dimensions.
 * The required close-focus metadata is a placeholder; every run stays at infinity, with no variable gaps.
 * Source context and limits: https://optiland.readthedocs.io/en/latest/validation.html
 *
 * Exact 550 nm indices come from the source's named database entries, not our catalog:
 * https://raw.githubusercontent.com/optiland/optiland/master/optiland/database/data-nk/glass/hikari/SK16.yml
 * https://raw.githubusercontent.com/optiland/optiland/master/optiland/database/data-nk/glass/schott/F2.yml
 * SK16 formula 3 and F2 formula 2 evaluated at 0.55 um; only the resulting indices are retained.
 * The issue independently lists SK16 to 12 decimals and verifies both glasses with INDX to 6 decimals.
 */
import { buildLens, prepareRuntimeState } from "../src/optics/buildLens.ts";
import { computeCardinalElementsFromState, createAnalysisRequest } from "../src/optics/analysis.ts";
import { traceEngineRay, skewImagePlaneIntercept } from "../src/optics/optics.ts";
import { LINE_NM } from "../src/optics/chromatic.ts";
import {
  assessMtfSupport,
  computeMtf,
  otfMagnitude,
  prepareMtfFieldLaunch,
  resolveMtfGeometry,
  shearedOtf,
  traceMtfStopBundle,
} from "../src/optics/mtf.ts";

const SOURCE_URL = "https://github.com/optiland/optiland/issues/710";
const WAVELENGTH_NM = 550;
const FREQUENCIES = [20, 40, 60];
const ANGLES = [0, 14, 20];
// Columns: normalized angle field, frequency (lp/mm), OpticStudio T, OpticStudio S.
const REFERENCE = [
  [0, 20, 0.867377, 0.867377],
  [0, 40, 0.645542, 0.645542],
  [0, 60, 0.399806, 0.399806],
  [0.7, 20, 0.415869, 0.562002],
  [0.7, 40, 0.114407, 0.192142],
  [0.7, 60, 0.033018, 0.110271],
  [1, 20, 0.590222, 0.532516],
  [1, 40, 0.073624, 0.136146],
  [1, 60, 0.1859, 0.129549],
];
// Columns: angle, normalized entrance-pupil x/y, image x/y (mm), direction cosines L/M.
const RAYS = [
  [0, 0, 1, 0, -0.004196, 0, -0.100438],
  [0, 0, 0.7, 0, 0.004077, 0, -0.070191],
  [20, 0, 0, 0, 18.136026, 0, 0.325329],
  [20, 0, 1, 0, 18.158528, 0, 0.241747],
  [20, 0, -1, 0, 18.118975, 0, 0.407572],
  [14, 0.7, 0, -0.012772, 12.420011, -0.068415, 0.233586],
];

/** Uniform length scaling preserves angles and indices; wavelength and inverse frequency scale with it. */
function prescription(scale = 1) {
  return /** @satisfies {import("../src/types/lensDataV2.js").LensDataV2Input} */ ({
    schema: 2,
    key: "external-cooke-triplet",
    name: "External Cooke triplet",
    elements: [
      { id: 1, name: "L1", label: "SK16", type: "Biconvex Positive", nd: 1.6226085614386923 },
      { id: 2, name: "L2", label: "F2", type: "Biconcave Negative", nd: 1.6236551229276037 },
      { id: 3, name: "L3", label: "SK16", type: "Biconvex Positive", nd: 1.6226085614386923 },
    ],
    surfaces: [
      { label: "1", R: 22.01359 * scale, d: 3.25896 * scale, sd: 10 * scale, medium: 1 },
      { label: "2", R: -435.76044 * scale, d: 6.00755 * scale, sd: 10 * scale },
      { label: "3", R: -22.21328 * scale, d: 0.99997 * scale, sd: 6 * scale, medium: 2 },
      { label: "STO", R: 20.29192 * scale, d: 4.75041 * scale },
      { label: "5", R: 79.6836 * scale, d: 2.95208 * scale, sd: 9 * scale, medium: 3 },
      { label: "6", R: -18.39533 * scale, d: 42.20778 * scale, sd: 9 * scale },
    ],
    // The reported EFL/EPD sets the required f-number; the request below uses exactly EPD=10.
    aperture: { nominalFNumber: 49.999783 / 10, fStops: [5, 8, 16] },
    focus: { closeFocusM: 1 },
    layout: { yScFill: 0.5 },
  });
}

function setup(scale = 1) {
  const lens = buildLens(prescription(scale));
  const state = prepareRuntimeState(lens, 0, 0);
  // Remove the printed EFL's rounding from aperture sizing without changing the source's EPD.
  const stopSemiDiameterMm = 5 * scale * lens.EP.yRatio;
  const request = createAnalysisRequest({
    preparedState: state,
    dynamicEFL: lens.EFL,
    currentEPSD: 5 * scale,
    currentPhysStopSD: stopSemiDiameterMm,
  });
  const options = {
    method: "diffraction",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: 5 * scale,
    stopSemiDiameterMm,
    frequenciesPerMm: FREQUENCIES.map((frequency) => frequency / scale),
    maxGridSize: 256,
  };
  return { lens, state, request, options };
}

function fixed(value) {
  if (!Number.isFinite(value)) throw new Error(`Non-finite comparison value: ${value}`);
  return value.toFixed(6);
}

const { lens, state, request, options } = setup();
console.log(`Source: ${SOURCE_URL}\nMonochromatic 550 nm; source image plane; delta = ours - OpticStudio.`);
console.log("No geometric reference or Cooke paraxial image-height table is supplied.");
console.log(`Derived stop semi-diameter: ${options.stopSemiDiameterMm} mm; non-stop semi-diameters: 10/10/6/9/9 mm.`);
const cardinals = computeCardinalElementsFromState(state);
if (!cardinals) throw new Error("No cardinal elements");
const firstOrder = [
  ["EFL (mm)", cardinals.distances.efl.valueMm, 49.999783],
  ["EPD (mm)", options.pupilSemiDiameterMm * 2, 10],
  ["entrance pupil z (mm)", state.z[lens.stopIdx] + lens.epZRelStop, 11.512159],
  ["back focal point - image z (mm)", cardinals.points.rearFocal.z - state.imgZ, 0.207078],
  ["image gap (mm)", state.imgZ - cardinals.rearVertexZ, 42.20778],
];
console.table(
  firstOrder.map(([quantity, ours, reference]) => ({
    quantity,
    reference,
    ours: fixed(ours),
    delta: fixed(ours - reference),
  })),
);

// With aiming off, normalized pupil positions lie on the paraxial entrance-pupil plane.
const pupilZ = state.z[lens.stopIdx] + lens.epZRelStop;
console.table(
  RAYS.map(([angle, px, py, x, y, l, m]) => {
    const radians = (angle * Math.PI) / 180;
    const direction = [0, Math.sin(radians), Math.cos(radians)];
    const leadZ = -20;
    const origin = [5 * px, 5 * py + ((leadZ - pupilZ) * direction[1]) / direction[2], leadZ];
    // A reference ray on the paraxial pupil rim can overfill the real stop when aiming is off.
    const trace = traceEngineRay(
      state,
      { origin, direction },
      { checkSemiDiameter: false, wavelengthNm: WAVELENGTH_NM },
    );
    if (trace.status !== "ok") throw new Error(`Reference ray failed: ${trace.failureReason}`);
    const [dx, dy, dz] = trace.terminalDirection;
    const landing = skewImagePlaneIntercept(
      ...trace.terminalPoint.slice(0, 2),
      dx / dz,
      dy / dz,
      trace.terminalPoint[2],
      state.imgZ,
      null,
    );
    if (!landing) throw new Error("Reference ray did not land");
    return {
      angle,
      px,
      py,
      x: fixed(landing.x),
      dx: fixed(landing.x - x),
      y: fixed(landing.y),
      dy: fixed(landing.y - y),
      L: fixed(dx),
      dL: fixed(dx - l),
      M: fixed(dy),
      dM: fixed(dy - m),
    };
  }),
);

// Public kernels accept a physical wavelength; authored indices remain constant (no catalog glass lookup).
const support = {
  ...assessMtfSupport(request, options),
  referenceWavelengthNm: WAVELENGTH_NM,
  spectralLines: [{ wavelengthNm: WAVELENGTH_NM, weight: 1 }],
};
if (!support.available) throw new Error(support.message);
const rows = [];
const heights = [];
for (const grid of [32, 64, 128, 256]) {
  for (const angle of ANGLES) {
    const launch = prepareMtfFieldLaunch(state, options, support, angle);
    if (!launch) throw new Error(`No launch at ${angle} degrees`);
    const bundle = traceMtfStopBundle(state, options, support, launch, grid, support.spectralLines[0]);
    if (!bundle || bundle.failed || bundle.unaimed || bundle.blocked)
      throw new Error(
        `Incomplete pupil at ${angle} degrees, grid ${grid}: ${JSON.stringify({
          failed: bundle?.failed,
          unaimed: bundle?.unaimed,
          blocked: bundle?.blocked,
        })}`,
      );
    if (grid === 256) heights.push(Math.abs(bundle.chief.y));
    const otf = shearedOtf(bundle, bundle.chief, WAVELENGTH_NM * 1e-6, FREQUENCIES);
    const t = otfMagnitude(otf.tangential),
      s = otfMagnitude(otf.sagittal);
    FREQUENCIES.forEach((frequency, i) => {
      const [, , refT, refS] = REFERENCE.find(([field, freq]) => field === angle / 20 && freq === frequency);
      rows.push({
        grid,
        angle,
        frequency,
        refT,
        oursT: fixed(t[i]),
        deltaT: fixed(t[i] - refT),
        refS,
        oursS: fixed(s[i]),
        deltaS: fixed(s[i] - refS),
      });
    });
  }
}
console.log("Exact 550 nm kernel, uniform physical-stop sampling (source ray aiming is off):");
console.table(rows);

// Isolate the source's aiming-off convention using the same kernel and an entrance-pupil lattice.
// No aperture clip is imposed: the reference explicitly forbids additional vignetting apertures.
const entranceRows = [];
const grid = 256;
for (const angle of ANGLES) {
  const radians = (angle * Math.PI) / 180;
  const direction = [0, Math.sin(radians), Math.cos(radians)];
  const land = (px, py) => {
    const origin = [5 * px, 5 * py + ((-20 - pupilZ) * direction[1]) / direction[2], -20];
    const trace = traceEngineRay(
      state,
      { origin, direction },
      { checkSemiDiameter: false, wavelengthNm: WAVELENGTH_NM },
    );
    if (trace.status !== "ok") throw new Error(`Entrance-pupil ray failed: ${trace.failureReason}`);
    const [x, y, z] = trace.terminalPoint;
    const [dx, dy, dz] = trace.terminalDirection;
    const landing = skewImagePlaneIntercept(x, y, dx / dz, dy / dz, z, state.imgZ, null);
    if (!landing) throw new Error("Entrance-pupil ray did not land");
    return { ...landing, weight: 1, trace };
  };
  const rays = [];
  for (let row = 0; row < grid; row++) {
    for (let column = 0; column < grid; column++) {
      const px = (2 * (column + 0.5)) / grid - 1,
        py = (2 * (row + 0.5)) / grid - 1;
      if (px * px + py * py > 1) continue;
      rays.push({ ...land(px, py), row, column });
    }
  }
  const otf = shearedOtf({ rays, columns: grid }, land(0, 0), WAVELENGTH_NM * 1e-6, FREQUENCIES);
  const t = otfMagnitude(otf.tangential),
    s = otfMagnitude(otf.sagittal);
  FREQUENCIES.forEach((frequency, i) => {
    const [, , refT, refS] = REFERENCE.find(([field, freq]) => field === angle / 20 && freq === frequency);
    entranceRows.push({
      angle,
      frequency,
      refT,
      oursT: fixed(t[i]),
      deltaT: fixed(t[i] - refT),
      refS,
      oursS: fixed(s[i]),
      deltaS: fixed(s[i] - refS),
    });
  });
}
console.log("Diagnostic only: uniform paraxial entrance-pupil lattice, aiming off, same 550 nm kernel:");
console.table(entranceRows);

// computeMtf exposes only named reference lines. Optical similarity supplies an exact 550 nm equivalent:
// R,d,sd,image height and lambda -> k times their source values; frequency -> frequency/k.
// Thus OPD/lambda, landing*frequency, pupil angles and normalized complex OTF all remain unchanged.
const scale = LINE_NM.d / WAVELENGTH_NM;
const equivalent = setup(scale);
const geometry = resolveMtfGeometry(equivalent.request, equivalent.options);
if (!geometry) throw new Error("No MTF field geometry");
const result = computeMtf(equivalent.request, {
  ...equivalent.options,
  fieldFractions: heights.map((height) => (height * scale) / geometry.referenceHeightMm),
});
if (!result.support.available || result.focus?.appliedShiftMm !== 0)
  throw new Error(
    `Wrong support or focus: ${JSON.stringify({ support: result.support, focus: result.focus, geometry, heights })}`,
  );
console.log(
  `computeMtf optical-similarity check: scale ${scale}, wavelength ${result.support.referenceWavelengthNm} nm`,
);
console.table(
  result.fields.map((field, i) => ({
    angle: ANGLES[i],
    actualAngle: field.fieldAngleDeg,
    status: field.status,
    grid: field.gridSize,
    T: field.tangential.map(fixed).join(", "),
    S: field.sagittal.map(fixed).join(", "),
    notes: field.notes.join("; "),
  })),
);
const adaptiveRows = result.fields.flatMap((field, i) => {
  if (!["converged", "unconverged"].includes(field.status)) throw new Error(`Unavailable field: ${field.message}`);
  if (Math.abs(field.fieldAngleDeg - ANGLES[i]) > 2e-6)
    throw new Error("Field-angle inversion missed the source field");
  return FREQUENCIES.map((frequency, j) => {
    const [, , refT, refS] = REFERENCE.find(([fraction, freq]) => fraction === ANGLES[i] / 20 && freq === frequency);
    const exact = rows.find(
      (row) => row.grid === field.gridSize && row.angle === ANGLES[i] && row.frequency === frequency,
    );
    // This verifies the wavelength/field adapter, not agreement with the external reference.
    if (
      Math.abs(field.tangential[j] - Number(exact.oursT)) > 2e-6 ||
      Math.abs(field.sagittal[j] - Number(exact.oursS)) > 2e-6
    )
      throw new Error("Optical similarity check failed");
    return {
      angle: ANGLES[i],
      frequency,
      grid: field.gridSize,
      refT,
      oursT: fixed(field.tangential[j]),
      deltaT: fixed(field.tangential[j] - refT),
      refS,
      oursS: fixed(field.sagittal[j]),
      deltaS: fixed(field.sagittal[j] - refS),
    };
  });
});
console.log("computeMtf adaptive result, expressed at the original 550 nm prescription's frequencies:");
console.table(adaptiveRows);
