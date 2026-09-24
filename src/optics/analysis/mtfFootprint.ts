/**
 * Transmitted-beam footprint for MTF pupil sampling.
 *
 * The on-axis entrance pupil is not the beam that reaches an off-axis image point. In retrofocus
 * wide-angles the stop's image grows and shifts off axis, so a fixed entrance-pupil circle can miss
 * most of the real flux at the corner. A coarse scan of the launch plane finds the region whose rays
 * pass every aperture; the fine grid then covers only that region with uniform launch-plane cells,
 * which keeps equal flux per ray for collimated beams.
 */
import type { MtfRayClass } from "./mtfRayClassification.js";

/** Launch-plane box in mm, relative to the chief ray's launch point. */
export interface MtfFootprint {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  /** Estimated transmitted-beam size, which sets the launch cell size; the box adds a margin around it. */
  beamWidthMm: number;
  beamHeightMm: number;
  /**
   * Width of the outer band beyond every scanned boundary. Transmitted rays inside it mean the
   * coarse scan missed part of the beam.
   */
  guardMm: number;
}

/** Classify the ray launched at a launch-plane offset from the chief. */
export type MtfLaunchClassifier = (x: number, y: number) => MtfRayClass;

const SCAN_CELLS = 20;
const MAX_GROWTHS = 6;
const SEED_SCALE = 1.25;
/**
 * Box margin in scan cells beyond the outermost transmitted sample: one cell reaches the first
 * blocked sample, and half a cell more is the guard band. The beam edge is estimated midway.
 */
const MARGIN_CELLS = 1.5;
const GUARD_CELLS = 0.5;
const BEAM_EDGE_CELLS = 0.5;

/**
 * Find a box that contains every transmitted launch position of one field.
 *
 * The scan starts from the entrance-pupil radius and doubles while transmitted (or unresolved
 * neighbouring) cells touch its border, so the result is closed on all sides. The box keeps the
 * meridional symmetry of a centred lens.
 *
 * @param classify - launch classifier for this field and wavelength
 * @param seedRadiusMm - entrance-pupil semi-diameter used to size the first scan
 * @param mirror - true when x and -x are known to classify alike, halving the scan
 * @returns footprint box, or null when no scanned ray reaches the image
 */
export function findMtfFootprint(
  classify: MtfLaunchClassifier,
  seedRadiusMm: number,
  mirror = false,
): MtfFootprint | null {
  let half = Math.max(seedRadiusMm, 1e-3) * SEED_SCALE;
  let found: MtfFootprint | null = null;
  for (let attempt = 0; attempt <= MAX_GROWTHS; attempt++) {
    const step = (2 * half) / SCAN_CELLS;
    const classes: MtfRayClass[] = new Array(SCAN_CELLS * SCAN_CELLS);
    for (let row = 0; row < SCAN_CELLS; row++)
      for (let column = mirror ? SCAN_CELLS / 2 : 0; column < SCAN_CELLS; column++) {
        const value = classify(-half + (column + 0.5) * step, -half + (row + 0.5) * step);
        classes[row * SCAN_CELLS + column] = value;
        if (mirror) classes[row * SCAN_CELLS + SCAN_CELLS - 1 - column] = value;
      }
    let x = 0;
    let y0 = Infinity;
    let y1 = -Infinity;
    let any = false;
    let touches = false;
    for (let row = 0; row < SCAN_CELLS; row++)
      for (let column = 0; column < SCAN_CELLS; column++) {
        if (!countsTowardFootprint(classes, row, column)) continue;
        any = true;
        x = Math.max(x, Math.abs(-half + (column + 0.5) * step));
        y0 = Math.min(y0, -half + (row + 0.5) * step);
        y1 = Math.max(y1, -half + (row + 0.5) * step);
        if (row === 0 || column === 0 || row === SCAN_CELLS - 1 || column === SCAN_CELLS - 1) touches = true;
      }
    if (any) {
      const margin = MARGIN_CELLS * step;
      const edge = BEAM_EDGE_CELLS * step;
      found = {
        x0: -(x + margin),
        x1: x + margin,
        y0: y0 - margin,
        y1: y1 + margin,
        beamWidthMm: 2 * (x + edge),
        beamHeightMm: y1 - y0 + 2 * edge,
        guardMm: GUARD_CELLS * step,
      };
    }
    if (any && !touches) return found;
    half *= 2;
  }
  return found;
}

/** Transmitted cells, and unresolved cells beside them, can carry flux. */
function countsTowardFootprint(classes: readonly MtfRayClass[], row: number, column: number): boolean {
  const own = classes[row * SCAN_CELLS + column];
  if (own === "valid") return true;
  if (own !== "failed") return false;
  for (let dy = -1; dy <= 1; dy++)
    for (let dx = -1; dx <= 1; dx++) {
      const r = row + dy;
      const c = column + dx;
      if (r >= 0 && c >= 0 && r < SCAN_CELLS && c < SCAN_CELLS && classes[r * SCAN_CELLS + c] === "valid") return true;
    }
  return false;
}

/**
 * Widen a footprint whose guard band carried flux.
 *
 * @param footprint - box that was sampled
 * @param sides - sides whose guard band transmitted rays
 * @param fraction - growth as a fraction of the box's larger side
 * @returns enlarged box, symmetric in x
 */
export function expandMtfFootprint(
  footprint: MtfFootprint,
  sides: { x: boolean; y0: boolean; y1: boolean },
  fraction = 0.25,
): MtfFootprint {
  const grow = Math.max(footprint.x1 - footprint.x0, footprint.y1 - footprint.y0) * fraction;
  const x = footprint.x1 + (sides.x ? grow : 0);
  return {
    x0: -x,
    x1: x,
    y0: footprint.y0 - (sides.y0 ? grow : 0),
    y1: footprint.y1 + (sides.y1 ? grow : 0),
    beamWidthMm: footprint.beamWidthMm + (sides.x ? 2 * grow : 0),
    beamHeightMm: footprint.beamHeightMm + (sides.y0 ? grow : 0) + (sides.y1 ? grow : 0),
    guardMm: footprint.guardMm,
  };
}
