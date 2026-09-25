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
/** Bisections that place a thin beam's edge along one launch axis (~1e-7 of the search interval). */
const REACH_BISECTIONS = 24;

/**
 * Find a box that contains every transmitted launch position of one field.
 *
 * The scan starts from the entrance-pupil radius and doubles while transmitted (or unresolved
 * neighboring) cells touch its border, so the result is closed on all sides. The box keeps the
 * meridional symmetry of a centered lens. A beam thinner than one scan cell falls between the
 * samples; when the chief ray itself transmits, the box is instead fitted to that thin beam.
 *
 * @param classify - launch classifier for this field and wavelength
 * @param seedRadiusMm - entrance-pupil semi-diameter used to size the first scan
 * @param mirror - true when x and -x are known to classify alike, halving the scan
 * @returns footprint box, or null when neither a scanned ray nor the chief ray reaches the image
 */
export function findMtfFootprint(
  classify: MtfLaunchClassifier,
  seedRadiusMm: number,
  mirror = false,
): MtfFootprint | null {
  let half = Math.max(seedRadiusMm, 1e-3) * SEED_SCALE;
  let found: MtfFootprint | null = null;
  for (let attempt = 0; attempt <= MAX_GROWTHS; attempt++) {
    const scan = scanFootprint(classify, half, half, 0, mirror);
    if (scan.footprint) found = scan.footprint;
    if (scan.footprint && !scan.touchesX && !scan.touchesY) return found;
    half *= 2;
  }
  return found ?? findThinFootprint(classify, seedRadiusMm, mirror);
}

interface FootprintScan {
  footprint: MtfFootprint | null;
  /** Transmitted cells touch the left or right border. */
  touchesX: boolean;
  /** Transmitted cells touch the top or bottom border. */
  touchesY: boolean;
}

/**
 * Classify a SCAN_CELLS × SCAN_CELLS lattice over one box and bound its transmitted cells.
 *
 * @param classify - launch classifier
 * @param halfX - box half-width, centered on the meridional plane
 * @param halfY - box half-height
 * @param centerY - tangential center of the box
 * @param mirror - true when x and -x classify alike
 * @returns bounding footprint with margins, and which borders the transmitted cells touch
 */
function scanFootprint(
  classify: MtfLaunchClassifier,
  halfX: number,
  halfY: number,
  centerY: number,
  mirror: boolean,
): FootprintScan {
  const stepX = (2 * halfX) / SCAN_CELLS;
  const stepY = (2 * halfY) / SCAN_CELLS;
  const xAt = (column: number) => -halfX + (column + 0.5) * stepX;
  const yAt = (row: number) => centerY + (-halfY + (row + 0.5) * stepY);
  const classes: MtfRayClass[] = new Array(SCAN_CELLS * SCAN_CELLS);
  for (let row = 0; row < SCAN_CELLS; row++)
    for (let column = mirror ? SCAN_CELLS / 2 : 0; column < SCAN_CELLS; column++) {
      const value = classify(xAt(column), yAt(row));
      classes[row * SCAN_CELLS + column] = value;
      if (mirror) classes[row * SCAN_CELLS + SCAN_CELLS - 1 - column] = value;
    }
  let x = 0;
  let y0 = Infinity;
  let y1 = -Infinity;
  let any = false;
  let touchesX = false;
  let touchesY = false;
  for (let row = 0; row < SCAN_CELLS; row++)
    for (let column = 0; column < SCAN_CELLS; column++) {
      if (!countsTowardFootprint(classes, row, column)) continue;
      any = true;
      x = Math.max(x, Math.abs(xAt(column)));
      y0 = Math.min(y0, yAt(row));
      y1 = Math.max(y1, yAt(row));
      if (column === 0 || column === SCAN_CELLS - 1) touchesX = true;
      if (row === 0 || row === SCAN_CELLS - 1) touchesY = true;
    }
  if (!any) return { footprint: null, touchesX, touchesY };
  return {
    footprint: boundedFootprint(x, y0, y1, stepX, stepY),
    touchesX,
    touchesY,
  };
}

/**
 * Footprint around transmitted samples, with MARGIN_CELLS of each axis's cell beyond them.
 *
 * @param x - largest transmitted |x|
 * @param y0 - lowest transmitted y
 * @param y1 - highest transmitted y
 * @param stepX - sagittal sample spacing
 * @param stepY - tangential sample spacing
 * @returns footprint box, symmetric in x
 */
function boundedFootprint(x: number, y0: number, y1: number, stepX: number, stepY: number): MtfFootprint {
  const marginX = MARGIN_CELLS * stepX;
  const marginY = MARGIN_CELLS * stepY;
  return {
    x0: -(x + marginX),
    x1: x + marginX,
    y0: y0 - marginY,
    y1: y1 + marginY,
    beamWidthMm: 2 * (x + BEAM_EDGE_CELLS * stepX),
    beamHeightMm: y1 - y0 + 2 * BEAM_EDGE_CELLS * stepY,
    // One guard width serves every side, so it takes the finer axis; it stays inside both margins.
    guardMm: GUARD_CELLS * Math.min(stepX, stepY),
  };
}

/**
 * Footprint of a beam thinner than the coarse scan's cells.
 *
 * Near a modeled edge the transmitted beam can close to a slit narrower than one scan cell, so every
 * scanned sample misses it although the chief ray passes. The beam contains the chief, so its reach
 * along each launch axis through the chief sizes a box stretched to the beam's own proportions. The
 * same scan resolves that box, growing only the sides the beam touches. If even that scan misses the
 * beam, the reaches alone bound it; the grid's guard band widens the box when flux lies beyond.
 *
 * @param classify - launch classifier
 * @param seedRadiusMm - entrance-pupil semi-diameter
 * @param mirror - true when x and -x classify alike
 * @returns footprint around the chief's beam, or null when the chief ray is not transmitted
 */
function findThinFootprint(classify: MtfLaunchClassifier, seedRadiusMm: number, mirror: boolean): MtfFootprint | null {
  if (classify(0, 0) !== "valid") return null;
  const seed = Math.max(seedRadiusMm, 1e-3);
  const limit = seed * SEED_SCALE * 2 ** MAX_GROWTHS;
  const up = transmittedReach(classify, 0, 1, seed, limit);
  const down = transmittedReach(classify, 0, -1, seed, limit);
  const right = transmittedReach(classify, 1, 0, seed, limit);
  const side = mirror ? right : Math.max(right, transmittedReach(classify, -1, 0, seed, limit));
  const floor = seed * 1e-6;
  const centerY = (up - down) / 2;
  let halfX = Math.max(side, floor) * SEED_SCALE;
  let halfY = Math.max((up + down) / 2, floor) * SEED_SCALE;
  let found: MtfFootprint | null = null;
  for (let attempt = 0; attempt <= MAX_GROWTHS; attempt++) {
    const scan = scanFootprint(classify, halfX, halfY, centerY, mirror);
    if (!scan.footprint) break;
    found = scan.footprint;
    if (!scan.touchesX && !scan.touchesY) return found;
    if (scan.touchesX) halfX *= 2;
    if (scan.touchesY) halfY *= 2;
  }
  if (found) return found;
  const cell = Math.max(side, (up + down) / 2, floor) / SCAN_CELLS;
  return boundedFootprint(Math.max(side, floor), -down, up, cell, cell);
}

/**
 * Distance from the chief to the beam's edge along one launch-plane direction.
 *
 * The beam is taken as contiguous from the chief along the direction, as an intersection of convex
 * aperture images is. The search doubles outward from a small step, then bisects the last interval.
 *
 * @param classify - launch classifier
 * @param dx - direction x component
 * @param dy - direction y component
 * @param seedMm - scale for the first step
 * @param limitMm - largest distance searched
 * @returns largest transmitted distance found, 0 when only the chief transmits
 */
function transmittedReach(
  classify: MtfLaunchClassifier,
  dx: number,
  dy: number,
  seedMm: number,
  limitMm: number,
): number {
  let inside = 0;
  let outside = seedMm * 1e-3;
  while (classify(dx * outside, dy * outside) === "valid") {
    inside = outside;
    if (outside >= limitMm) return inside;
    outside *= 2;
  }
  for (let i = 0; i < REACH_BISECTIONS; i++) {
    const mid = (inside + outside) / 2;
    if (classify(dx * mid, dy * mid) === "valid") inside = mid;
    else outside = mid;
  }
  return inside;
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
