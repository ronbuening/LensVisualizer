import { join } from "node:path";
import { organizeRootLensFiles } from "./lens-data-lib.mjs";

const ROOT = join(import.meta.dirname, "..");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");

const { movedLensCount, movedFileCount } = organizeRootLensFiles(LENS_DATA_DIR);

if (movedLensCount > 0) {
  console.log(`Lens-data organizer: moved ${movedLensCount} lenses across ${movedFileCount} files.`);
}
