/**
 * Planar pupil reference — a re-derivation of the five Zeiss Planar T* 50mm f/1.4 build constants
 * pinned in `__tests__/src/optics/mirrorOptics.test.ts` (half field, tracing half field, entrance-pupil
 * position, exit-pupil position and exit-pupil semi-diameter).
 *
 * This is NOT the evidence PR #774 cited when it updated those expectations. That 50/80-digit
 * generator was never committed and could not be recovered; this file was written afterwards, from
 * the definitions in `src/optics/first-order/lensConstants.ts`, so that a check of the same kind is in the repository.
 *
 * It traces the catalog prescription by closed-form sphere intersection and vector Snell refraction
 * on BigInt fixed-point arithmetic, once at 50 and once at 80 decimals. Every float64 it reads (the
 * surface table, the vertex positions as the engine's running float64 sums, the finite-difference
 * step, the f-number) is taken as the exact rational its bits spell. Rays are the ideal lines
 * y = y0 + u0 z; the engine's float64 launch point and normalized direction differ from them by
 * rounding only.
 *
 * The half field is not a number with digits in the engine: it is the last passing angle of a
 * 40-step float64 bisection that starts from Math.atan and launches through Math.tan. What has
 * digits is the angle that bisection closes on, where the chief ray grazes the limiting clear
 * aperture, so that is what is written. For the bisection itself `decideChiefRay` gives the exact
 * pass-or-clip decision at any float64 field angle, and the test asks it for each angle the engine
 * tested.
 *
 * Nothing written passes through a libm function (see Trigonometry). The only float64 arithmetic
 * behind a written value is correctly rounded IEEE 754 addition and multiplication, in the vertex
 * sums and the clip limits, so the committed file is the same on every machine.
 *
 * Regenerate after the Planar prescription or these definitions change. The import hook maps the
 * `.js` specifiers onto the TypeScript sources, as Vitest does when the test imports this file:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     __tests__/src/optics/fixtures/generatePlanarPupilReference.ts
 */

import { realpathSync, writeFileSync } from "node:fs";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";
import PlanarRaw from "../../../../src/lens-data/carl-zeiss-oberkochen/CarlZeissPlanarT50mmf14.data.js";
import { ingestLens } from "../../../../src/optics/prescription/ingestV2.js";
import { toLensDataInput } from "../../../../src/optics/prescription/toLensData.js";
import { createFixedPoint, type FixedPoint } from "./fixedPoint.js";

// Only the file syntax is normalized; the reference arithmetic below remains independent of the engine.
const PLANAR = toLensDataInput(ingestLens(PlanarRaw), { stopRadius: 1 });

/** Committed reference file, beside this generator. */
export const PLANAR_REFERENCE_PATH = fileURLToPath(new URL("./planarPupilReference.json", import.meta.url));

/** Decimals carried by the two runs; each is written with `GUARD_DIGITS` fewer. */
const COARSE_DIGITS = 50;
const FINE_DIGITS = 80;
const GUARD_DIGITS = 10;
/** The engine's finite-difference launch for its real pupil basis rays (`realEpDelta`). */
const PUPIL_DELTA = 1e-4;
/** Radius magnitude above which the engine treats a surface as flat (its `FLAT_R_THRESHOLD`). */
const FLAT_RADIUS_THRESHOLD = 1e10;
/** Angle halvings before the arctangent series; four leave an argument below tan(pi / 32). */
const ARCTANGENT_HALVINGS = 4;

/** One value from the 50-decimal run and from the 80-decimal run. */
export interface ReferenceValue {
  digits50: string;
  digits80: string;
}

/** The exact decision the engine's half-field bisection approximates at one field angle. */
export interface ChiefRayDecision {
  /** Whether the chief ray reaches the last surface inside every clear aperture. */
  pass: boolean;
  /** Label of the surface with the least clearance. */
  limitingSurface: string;
  /** Clip limit minus ray height at that surface, mm, from the 80-decimal run; negative when the ray is clipped. */
  margin: string;
}

/** Shape of planarPupilReference.json. */
export interface PlanarPupilReference {
  generatedBy: string;
  provenance: string;
  lens: string;
  /** Decimals each run is written with. */
  decimals: { digits50: number; digits80: number };
  quantities: {
    /** Paraxial focal length, mm. */
    nominalEfl: ReferenceValue;
    /** Entrance-pupil semi-diameter, nominalEfl / (2 * nominalFno), mm. */
    entrancePupilSemiDiameter: ReferenceValue;
    /** Height at the stop of the real ray launched at the entrance-pupil semi-diameter, mm. */
    stopSemiDiameter: ReferenceValue;
    /** Stop height of the real ray (y = delta, u = 0), over delta. */
    realYRatio: ReferenceValue;
    /** Stop height of the real ray (y = 0, u = delta), over delta, mm. */
    realB: ReferenceValue;
    epZRelStop: ReferenceValue;
    xpZRelLastSurf: ReferenceValue;
    xpSD: ReferenceValue;
  };
  halfField: {
    /** Paraxial vignetting-limited half field, degrees: the clipped angle the engine's bisection starts from. */
    paraxialDegrees: ReferenceValue;
    /**
     * Field angle at which the chief ray grazes the clip limit, degrees. The engine's `halfField` and
     * `tracingHalfField` are the last float64 angle its bisection passes below this one.
     */
    grazingDegrees: ReferenceValue;
    /** Label of the surface whose clear aperture the chief ray grazes there. */
    limitingSurface: string;
  };
}

interface Surface {
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
}

/** Meridional ray: a point on it and its unit direction. */
interface Ray {
  y: bigint;
  z: bigint;
  dy: bigint;
  dz: bigint;
}

/* ── Traces ── */

/**
 * Trace the line y = y0 + u0 z, z measured from the first vertex, through the first `count` surfaces.
 *
 * @param F - fixed-point arithmetic
 * @param surfaces - prescription
 * @param vertices - float64 vertex positions, mm
 * @param y0 - height at the first vertex plane, mm
 * @param u0 - slope dy/dz
 * @param count - surfaces to cross
 * @returns hit heights and the ray leaving the last surface crossed; null on a miss or total reflection
 */
function traceReal(
  F: FixedPoint,
  surfaces: readonly Surface[],
  vertices: readonly number[],
  y0: bigint,
  u0: bigint,
  count: number,
): { heights: bigint[]; ray: Ray } | null {
  const launchNorm = F.sqrt(F.one + F.mul(u0, u0));
  let ray: Ray = { y: y0, z: 0n, dy: F.div(u0, launchNorm), dz: F.div(F.one, launchNorm) };
  let index = 1;
  const heights: bigint[] = [];
  for (let i = 0; i < count; i++) {
    const { R, nd } = surfaces[i];
    const vertexZ = F.of(vertices[i]);
    let normalY = 0n;
    let normalZ = F.one;
    if (Math.abs(R) > FLAT_RADIUS_THRESHOLD) {
      const t = F.div(vertexZ - ray.z, ray.dz);
      ray = { ...ray, y: ray.y + F.mul(ray.dy, t), z: vertexZ };
    } else {
      // |P + t d - C|^2 = R^2 with the centre C on the axis at vertexZ + R.
      const centreZ = vertexZ + F.of(R);
      const offsetZ = ray.z - centreZ;
      const b = F.mul(ray.y, ray.dy) + F.mul(offsetZ, ray.dz);
      const discriminant = F.mul(b, b) - (F.mul(ray.y, ray.y) + F.mul(offsetZ, offsetZ) - F.mul(F.of(R), F.of(R)));
      if (discriminant < 0n) return null;
      // The sag branch is the hemisphere on the vertex side: the near root for R > 0, the far one for R < 0.
      const t = R > 0 ? -b - F.sqrt(discriminant) : -b + F.sqrt(discriminant);
      ray = { ...ray, y: ray.y + F.mul(ray.dy, t), z: ray.z + F.mul(ray.dz, t) };
      // (C - H) / R is the unit normal with a positive z component for either sign of R.
      normalY = F.over(-ray.y, R);
      normalZ = F.over(centreZ - ray.z, R);
      if (normalZ <= 0n) throw new Error(`surface ${surfaces[i].label}: the hit left the sag branch`);
    }
    heights.push(ray.y);
    if (nd !== index) {
      // Vector Snell: the tangential part scales by n / n', the normal part is what keeps unit length.
      const cosine = F.mul(ray.dy, normalY) + F.mul(ray.dz, normalZ);
      const tangentY = F.over(F.times(ray.dy - F.mul(cosine, normalY), index), nd);
      const tangentZ = F.over(F.times(ray.dz - F.mul(cosine, normalZ), index), nd);
      const normalPart = F.one - F.mul(tangentY, tangentY) - F.mul(tangentZ, tangentZ);
      if (normalPart < 0n) return null;
      const along = F.sqrt(normalPart);
      const outY = tangentY + F.mul(along, normalY);
      const outZ = tangentZ + F.mul(along, normalZ);
      // Unit length already, up to working truncation; renormalizing keeps that from accumulating.
      const length = F.sqrt(F.mul(outY, outY) + F.mul(outZ, outZ));
      ray = { ...ray, dy: F.div(outY, length), dz: F.div(outZ, length) };
      index = nd;
    }
  }
  return { heights, ray };
}

/**
 * Height and slope of a traced ray at a plane z, as the engine projects a hit to a vertex plane.
 *
 * @param F - fixed-point arithmetic
 * @param ray - ray leaving a surface
 * @param z - plane position, mm
 * @returns height in mm and slope dy/dz
 */
function atPlane(F: FixedPoint, ray: Ray, z: bigint): { y: bigint; u: bigint } {
  const u = F.div(ray.dy, ray.dz);
  return { y: ray.y + F.mul(z - ray.z, u), u };
}

/**
 * Paraxial trace of (y0, u0) from the first vertex plane, as `math/paraxial.ts` defines it:
 * n' u' = n u - y (n' - n) / R, then y' = y + d u.
 *
 * @param F - fixed-point arithmetic
 * @param surfaces - prescription
 * @param y0 - launch height
 * @param u0 - launch slope
 * @returns the height at each surface before refraction, and the slope leaving the last one
 */
function traceParaxial(
  F: FixedPoint,
  surfaces: readonly Surface[],
  y0: bigint,
  u0: bigint,
): { heights: bigint[]; u: bigint } {
  let y = y0;
  let u = u0;
  let index = 1;
  const heights: bigint[] = [];
  for (const { R, d, nd } of surfaces) {
    heights.push(y);
    if (nd !== index) {
      const bend = Math.abs(R) > FLAT_RADIUS_THRESHOLD ? 0n : F.over(F.mul(y, F.of(nd) - F.of(index)), R);
      u = F.over(F.times(u, index) - bend, nd);
      index = nd;
    }
    y += F.times(u, d);
  }
  return { heights, u };
}

/* ── Trigonometry ──
 *
 * Series on the fixed-point arithmetic stand in for Math.atan and Math.tan. The language leaves both
 * functions to the JavaScript runtime as approximations, and V8's arm64 build evaluates them with
 * fused multiply-add, so for some arguments their last bit is not the one a build without it returns.
 * A value that passed through either and was then written at 40 or 70 decimals would differ between
 * the machine that generated the file and the one that checks it. BigInt arithmetic gives the same
 * digits on both.
 */

/**
 * Arctangent in radians. atan x = 2 atan(x / (1 + sqrt(1 + x^2))) halves the angle until the series
 * x - x^3 / 3 + x^5 / 5 - ... gains two decimals a term.
 *
 * @param F - fixed-point arithmetic
 * @param x - tangent of the angle
 * @returns the angle, inside (-pi / 2, pi / 2)
 */
function arctangent(F: FixedPoint, x: bigint): bigint {
  let reduced = x;
  for (let i = 0; i < ARCTANGENT_HALVINGS; i++) {
    reduced = F.div(reduced, F.one + F.sqrt(F.one + F.mul(reduced, reduced)));
  }
  const square = F.mul(reduced, reduced);
  let sum = 0n;
  let power = reduced;
  for (let n = 1n; power !== 0n; n += 2n) {
    sum += n % 4n === 1n ? power / n : -power / n;
    power = F.mul(power, square);
  }
  return sum << BigInt(ARCTANGENT_HALVINGS);
}

/**
 * Tangent of an angle in radians, as the ratio of the sine and cosine series.
 *
 * @param F - fixed-point arithmetic
 * @param radians - angle inside (-pi / 2, pi / 2)
 * @returns its tangent
 */
function tangent(F: FixedPoint, radians: bigint): bigint {
  let sine = 0n;
  let cosine = 0n;
  // radians^n / n!: even n belongs to the cosine and odd n to the sine, the sign turning every second term.
  let term = F.one;
  for (let n = 0n; term !== 0n; n++) {
    const signed = n % 4n < 2n ? term : -term;
    if (n % 2n === 0n) cosine += signed;
    else sine += signed;
    term = F.mul(term, radians) / (n + 1n);
  }
  return F.div(sine, cosine);
}

/* ── Derivation ── */

/** What one precision derives. */
interface Derivation {
  values: Record<keyof PlanarPupilReference["quantities"], bigint>;
  halfField: { paraxialDegrees: bigint; grazingDegrees: bigint; limitingSurface: string };
  /** Least clearance of the chief ray at a float64 field angle in degrees. */
  chiefRayAt(degrees: number): { limitingSurface: string; margin: bigint };
}

function derive(F: FixedPoint): Derivation {
  const surfaces: readonly Surface[] = PLANAR.surfaces;
  const count = surfaces.length;
  const stop = surfaces.findIndex((surface) => surface.label === "STO");
  // The engine's vertex positions: a running float64 sum of the thicknesses.
  const vertices = [0];
  for (let i = 0; i < count - 1; i++) vertices.push(vertices[i] + surfaces[i].d);
  const stopZ = F.of(vertices[stop]);
  const lastZ = F.of(vertices[count - 1]);
  const delta = F.of(PUPIL_DELTA);
  const perDelta = (value: bigint): bigint => F.over(value, PUPIL_DELTA);

  /* Paraxial focal length and the entrance pupil it sets. */
  const nominalEfl = -F.div(F.one, traceParaxial(F, surfaces, F.one, 0n).u);
  if (typeof PLANAR.nominalFno !== "number") throw new Error("The Planar reference requires a prime f-number");
  const entrancePupilSemiDiameter = F.over(nominalEfl, 2 * PLANAR.nominalFno);
  const stopSemiDiameter = atPlane(
    F,
    traceReal(F, surfaces, vertices, entrancePupilSemiDiameter, 0n, stop)!.ray,
    stopZ,
  ).y;

  /* Entrance pupil: two finite real rays to the stop plane. */
  const realYRatio = perDelta(atPlane(F, traceReal(F, surfaces, vertices, delta, 0n, stop)!.ray, stopZ).y);
  const realB = perDelta(atPlane(F, traceReal(F, surfaces, vertices, 0n, delta, stop)!.ray, stopZ).y);
  const epRatio = F.div(realB, realYRatio);

  /* Exit pupil: the same two rays through the whole lens, combined into the ray through the stop centre. */
  const marginal = atPlane(F, traceReal(F, surfaces, vertices, delta, 0n, count)!.ray, lastZ);
  const chief = atPlane(F, traceReal(F, surfaces, vertices, 0n, delta, count)!.ray, lastZ);
  const xpY = F.mul(realYRatio, perDelta(chief.y)) - F.mul(realB, perDelta(marginal.y));
  const xpU = F.mul(realYRatio, perDelta(chief.u)) - F.mul(realB, perDelta(marginal.u));
  const xpZRelLastSurf = -F.div(xpY, xpU);
  const pupilHeight = perDelta(marginal.y) + F.mul(perDelta(marginal.u), xpZRelLastSurf);
  const xpSD = F.mul(pupilHeight < 0n ? -pupilHeight : pupilHeight, entrancePupilSemiDiameter);

  /* Paraxial half field, as its tangent: the smallest sd / |chief height per unit slope| over the clipping
   * surfaces. */
  const marginalHeights = traceParaxial(F, surfaces, F.one, 0n).heights;
  const chiefHeights = traceParaxial(F, surfaces, 0n, F.one).heights;
  const stopRatio = F.div(chiefHeights[stop], marginalHeights[stop]);
  let smallestSlope: bigint | null = null;
  for (let i = 0; i < count; i++) {
    const perSlope = chiefHeights[i] - F.mul(stopRatio, marginalHeights[i]);
    const reach = perSlope < 0n ? -perSlope : perSlope;
    // The engine skips the stop, and any surface the chief ray crosses within 1e-8 mm per unit slope.
    if (i === stop || reach <= F.of(1e-8)) continue;
    const slope = F.div(F.of(surfaces[i].sd), reach);
    if (smallestSlope === null || slope < smallestSlope) smallestSlope = slope;
  }
  if (smallestSlope === null) throw new Error("no surface limits the paraxial chief ray");
  const paraxialTangent = smallestSlope;

  /* Real half field. The engine launches the chief ray u = -tan(field) from y = -epRatio u and clips it where its
   * height exceeds sd + max(1e-9, |sd| * 1e-12). For an authored semi-diameter that limit is a float64 sum, taken
   * here as the engine forms it. The stop's semi-diameter is derived above, so the rule is applied to its exact
   * value; the chief ray crosses the stop on the axis. */
  const magnitude = (value: bigint): bigint => (value < 0n ? -value : value);
  const limits = surfaces.map((surface, i) => {
    if (i !== stop) return F.of(surface.sd + Math.max(1e-9, Math.abs(surface.sd) * 1e-12));
    const relative = F.times(magnitude(stopSemiDiameter), 1e-12);
    return stopSemiDiameter + (relative > F.of(1e-9) ? relative : F.of(1e-9));
  });
  const clearance = (fieldTangent: bigint): { limiting: number; margin: bigint } => {
    const traced = traceReal(F, surfaces, vertices, F.mul(epRatio, fieldTangent), -fieldTangent, count);
    if (traced === null) throw new Error("the chief ray does not reach the last surface");
    let limiting = 0;
    let margin = limits[0] - magnitude(traced.heights[0]);
    traced.heights.forEach((height, i) => {
      const room = limits[i] - magnitude(height);
      if (room < margin) [limiting, margin] = [i, room];
    });
    return { limiting, margin };
  };

  // The engine bisects from the paraxial angle only when that angle clips; the grazing angle is then below it. The
  // bisection runs on the tangent, which the paraxial model gives without a trigonometric function.
  if (clearance(paraxialTangent).margin >= 0n) {
    throw new Error("the paraxial half field passes: the engine would not bisect");
  }
  let passing = 0n;
  let clipped = paraxialTangent;
  while (clipped - passing > 1n) {
    const middle = (passing + clipped) / 2n;
    if (clearance(middle).margin >= 0n) passing = middle;
    else clipped = middle;
  }

  const pi = 4n * arctangent(F, F.one);
  const toDegrees = (radians: bigint): bigint => F.div(radians * 180n, pi);
  return {
    values: {
      nominalEfl,
      entrancePupilSemiDiameter,
      stopSemiDiameter,
      realYRatio,
      realB,
      epZRelStop: epRatio - stopZ,
      xpZRelLastSurf,
      xpSD,
    },
    halfField: {
      paraxialDegrees: toDegrees(arctangent(F, paraxialTangent)),
      grazingDegrees: toDegrees(arctangent(F, passing)),
      limitingSurface: surfaces[clearance(passing).limiting].label,
    },
    chiefRayAt: (degrees) => {
      const { limiting, margin } = clearance(tangent(F, F.mul(F.of(degrees), pi) / 180n));
      return { limitingSurface: surfaces[limiting].label, margin };
    },
  };
}

const COARSE = createFixedPoint(COARSE_DIGITS);
const FINE = createFixedPoint(FINE_DIGITS);
const DECIMALS = { digits50: COARSE_DIGITS - GUARD_DIGITS, digits80: FINE_DIGITS - GUARD_DIGITS };

/** Both runs, derived on first use: the written file and every decision read the same pair. */
let derived: { coarse: Derivation; fine: Derivation } | null = null;
function runs(): { coarse: Derivation; fine: Derivation } {
  derived ??= { coarse: derive(COARSE), fine: derive(FINE) };
  return derived;
}

/**
 * Write one quantity from both runs. The 50-decimal run has to confirm the 80-decimal one to the
 * decimals the coarser run is written with.
 *
 * @param coarseValue - the quantity at 50 decimals
 * @param fineValue - the quantity at 80 decimals
 * @returns both as decimal text
 */
function pair(coarseValue: bigint, fineValue: bigint): ReferenceValue {
  const gap = fineValue - coarseValue * 10n ** BigInt(FINE_DIGITS - COARSE_DIGITS);
  if ((gap < 0n ? -gap : gap) > 10n ** BigInt(FINE_DIGITS - DECIMALS.digits50)) {
    throw new Error("the 50- and 80-decimal runs disagree within the decimals written");
  }
  return {
    digits50: COARSE.toDecimal(coarseValue, DECIMALS.digits50),
    digits80: FINE.toDecimal(fineValue, DECIMALS.digits80),
  };
}

/**
 * Decide exactly whether the chief ray at a field angle clears every aperture: the question each step
 * of the engine's half-field bisection answers in float64.
 *
 * The ray is the ideal one, launched at the exact tangent of the float64 angle through the exact
 * entrance-pupil centre. The engine launches float64 roundings of both.
 *
 * @param degrees - field angle in degrees, in [0, 90)
 * @returns the decision, with the limiting surface and its clearance
 */
export function decideChiefRay(degrees: number): ChiefRayDecision {
  if (!(degrees >= 0 && degrees < 90)) throw new RangeError(`not a field angle in [0, 90): ${degrees}`);
  const { coarse, fine } = runs();
  const coarseRay = coarse.chiefRayAt(degrees);
  const fineRay = fine.chiefRayAt(degrees);
  const margin = pair(coarseRay.margin, fineRay.margin).digits80;
  if (coarseRay.margin >= 0n !== fineRay.margin >= 0n || coarseRay.limitingSurface !== fineRay.limitingSurface) {
    throw new Error(`the 50- and 80-decimal runs decide the chief ray at ${degrees} degrees differently`);
  }
  return { pass: fineRay.margin >= 0n, limitingSurface: fineRay.limitingSurface, margin };
}

/**
 * Collect the reference from both runs.
 *
 * @returns the reference object written to planarPupilReference.json
 */
export function buildPlanarPupilReference(): PlanarPupilReference {
  const { coarse, fine } = runs();
  if (coarse.halfField.limitingSurface !== fine.halfField.limitingSurface) {
    throw new Error("the 50- and 80-decimal runs graze different surfaces");
  }
  const names = Object.keys(fine.values) as (keyof PlanarPupilReference["quantities"])[];
  return {
    generatedBy: "__tests__/src/optics/fixtures/generatePlanarPupilReference.ts",
    provenance:
      "Re-derived for this repository after PR #774. Not the 50/80-digit evidence that PR cites, which was never committed.",
    lens: PLANAR.key,
    decimals: DECIMALS,
    quantities: Object.fromEntries(
      names.map((name) => [name, pair(coarse.values[name], fine.values[name])]),
    ) as PlanarPupilReference["quantities"],
    halfField: {
      paraxialDegrees: pair(coarse.halfField.paraxialDegrees, fine.halfField.paraxialDegrees),
      grazingDegrees: pair(coarse.halfField.grazingDegrees, fine.halfField.grazingDegrees),
      limitingSurface: fine.halfField.limitingSurface,
    },
  };
}

/**
 * Render the reference file exactly as committed.
 *
 * @returns JSON text of planarPupilReference.json
 */
export function renderPlanarPupilReference(): string {
  return `${JSON.stringify(buildPlanarPupilReference(), null, 2)}\n`;
}

/* ── Entry point ── */

// Node loads the entry file from its real path and leaves argv[1] as typed, so the two are compared as real
// paths: started through a symlink this still writes, and an entry path that cannot be resolved throws.
if (argv.length > 1 && realpathSync(argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  writeFileSync(PLANAR_REFERENCE_PATH, renderPlanarPupilReference());
}
