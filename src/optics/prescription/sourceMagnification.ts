/** A printed magnification magnitude and half a unit of its last printed decimal. */
export interface SourceMagnification {
  value: number;
  /** Zero for a ratio or a whole number, which carry no rounding interval. */
  halfUnit: number;
}

/**
 * Read `sourceMagnification`: a decimal as printed, trailing zeros kept ("0.50"), or an image-to-object ratio of
 * whole numbers ("1/10", "1:2"). The sign is not carried; conventions differ between sources.
 *
 * @param text - the authored value
 * @returns the magnitude and its print rounding, or null when the text is neither form or is not positive
 */
export function parseSourceMagnification(text: unknown): SourceMagnification | null {
  if (typeof text !== "string") return null;
  const ratio = /^([1-9]\d*)[/:]([1-9]\d*)$/.exec(text);
  const decimal = /^(?:0|[1-9]\d*)(?:\.(\d+))?$/.exec(text);
  if (!ratio && !decimal) return null;
  const value = ratio ? Number(ratio[1]) / Number(ratio[2]) : Number(text);
  if (!(value > 0) || !Number.isFinite(value)) return null;
  return { value, halfUnit: decimal?.[1] ? 0.5 * 10 ** -decimal[1].length : 0 };
}
