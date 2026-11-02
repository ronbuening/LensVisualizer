import { register } from "node:module";

/* Named whole, so the seam guard sees which optics module this script loads. */
const LENS_DATA_CONVERSION_URL = new URL("../../src/optics/lensDataConversion.ts", import.meta.url);

let lensDataConversion;

/**
 * Load the engine's lens-data conversion seam under plain Node. Its modules import one another by their `.js`
 * specifiers, so the specifier hook is registered first.
 *
 * @returns {Promise<import("./load.d.mts").LensDataConversion>} canonical ingest, the V1 and V2 converter views,
 *   the V2 source map, the prescription comparison and the path spelling: every export of the seam
 */
export async function loadLensDataConversion() {
  if (!lensDataConversion) {
    register("../ts-js-specifier-hook.mjs", import.meta.url);
    lensDataConversion = await import(LENS_DATA_CONVERSION_URL.href);
  }
  return lensDataConversion;
}
