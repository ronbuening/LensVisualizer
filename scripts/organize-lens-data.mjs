import { join } from "node:path";
import { organizeRootLensFiles } from "./lens-data-lib.mjs";

const ROOT = join(import.meta.dirname, "..");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
/* `--dry-run` prints the checked move plan and changes nothing, the V1 conversion included. */
const dryRun = process.argv.includes("--dry-run");

const { movedLensCount, movedFileCount } = await organizeRootLensFiles(LENS_DATA_DIR, { dryRun });

if (movedLensCount > 0) {
  console.log(`Lens-data organizer: moved ${movedLensCount} lenses across ${movedFileCount} files.`);
}
