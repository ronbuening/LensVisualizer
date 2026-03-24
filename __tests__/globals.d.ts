// Wildcard declaration for raw lens data files (plain JS, excluded from tsc).
// These are partial LensData objects; defaults are merged before use in tests.
declare module "*.data.js" {
  const data: Record<string, unknown>;
  export default data;
}
