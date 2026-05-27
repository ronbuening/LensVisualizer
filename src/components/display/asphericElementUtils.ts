import type { AsphericCoefficients, RuntimeLens } from "../../types/optics.js";

export interface ElementAsphereEntry {
  label: "front" | "rear";
  coeffs: AsphericCoefficients;
}

export function getAsphericEntriesForElement(L: RuntimeLens, elementId: number): ElementAsphereEntry[] {
  const span = L.ES?.find(([id]) => id === elementId);
  if (!span) return [];

  const [, s1, s2] = span;
  const entries: ElementAsphereEntry[] = [];
  const front = L.asphByIdx[s1];
  const rear = L.asphByIdx[s2];

  if (front) entries.push({ label: "front", coeffs: front });
  if (rear) entries.push({ label: "rear", coeffs: rear });
  return entries;
}

export function elementHasAsphericSurface(L: RuntimeLens, elementId: number): boolean {
  return getAsphericEntriesForElement(L, elementId).length > 0;
}
