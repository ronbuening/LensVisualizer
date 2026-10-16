/** Diagnostic records and spans; authored spellings are kept outside canonical identity. */

/* Validation operates on untrusted data — use a permissive record type
 * so dynamic-key checks compile without casts on every property access. */
export type UntrustedLensData = Record<string, any>;
export type ExplicitElementSpan = {
  from: number;
  to: number;
  element: UntrustedLensData;
  nestedOpeningSd: number | null;
  foldedMirrorLens: boolean;
  frontSurface: UntrustedLensData;
  rearSurface: UntrustedLensData;
};
