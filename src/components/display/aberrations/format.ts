export function formatSaUm(saUm: number): string {
  const abs = Math.abs(saUm);
  if (abs >= 1) return `${abs.toFixed(0)} µm`;
  if (abs >= 0.1) return `${abs.toFixed(1)} µm`;
  return "< 0.1 µm";
}

export function formatSignedSaUm(saUm: number): string {
  if (Math.abs(saUm) < 0.1) return "0 µm";
  const rounded = Math.abs(saUm) >= 1 ? saUm.toFixed(0) : saUm.toFixed(1);
  return `${rounded} µm`;
}
