/**
 * The stop lattice: regular pupil samples on the real aperture stop, shared by the vignetting tab and the MTF.
 *
 * A lattice `n` cells across the stop's diameter keeps the cells whose centre lies in the unit disc, at normalised
 * stop coordinates (2k + 1 − n) / n, so a column and its mirror are exact negatives and an even `n` puts no cell on the
 * meridian. Every cell carries the same weight: uniform amplitude on the stop, as OpticStudio with ray aiming and
 * CODE V sample the pupil.
 */

/** One cell of the stop lattice: a stop sample at normalised (xFraction, yFraction), its centre in the unit disc. */
export interface StopLatticeCell {
  /** Position in the lattice list. */
  index: number;
  /** Lattice row, 0 at yFraction = −1. */
  row: number;
  /** Lattice column, 0 at xFraction = −1. */
  column: number;
  xFraction: number;
  yFraction: number;
  /** Equal weight, 1 / number of cells. */
  weight: number;
}

/**
 * The cells of an `n` × `n` grid over the stop's diameter whose centre lies in the unit disc.
 *
 * @param cellsAcross - cells across the diameter, a positive integer
 * @returns cells in row-major order, with equal weights
 */
export function stopLattice(cellsAcross: number): StopLatticeCell[] {
  const n = cellsAcross;
  const cells: Omit<StopLatticeCell, "index" | "weight">[] = [];
  for (let row = 0; row < n; row++) {
    const yFraction = (2 * row + 1 - n) / n;
    for (let column = 0; column < n; column++) {
      const xFraction = (2 * column + 1 - n) / n;
      if (xFraction * xFraction + yFraction * yFraction <= 1) cells.push({ row, column, xFraction, yFraction });
    }
  }
  const weight = 1 / cells.length;
  return cells.map((cell, index) => ({ index, ...cell, weight }));
}
