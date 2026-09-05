/** Preserve hundredths for design apertures such as f/1.85 in every aperture readout. */
export function formatAperture(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return "unavailable";
  const text = value.toFixed(2).replace(/(\.\d)0$/, "$1");
  return `f/${value < 10 ? text : text.replace(/\.0$/, "")}`;
}
