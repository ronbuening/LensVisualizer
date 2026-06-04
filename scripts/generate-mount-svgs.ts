import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { MOUNT_SPEC_BY_ID, renderMountSvgString, type MountSvgView } from "../src/mount-data/index.js";
import { mountSvgPublicPath } from "../src/mount-data/svgAssetUrls.js";

const REPO_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const VIEWS: MountSvgView[] = ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"];

async function main() {
  const specs = Object.values(MOUNT_SPEC_BY_ID).filter(Boolean);
  for (const spec of specs) {
    for (const view of VIEWS) {
      const outputPath = join(REPO_ROOT, "public", mountSvgPublicPath(spec.mountId, view));
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, `${renderMountSvgString(spec, view)}\n`, "utf8");
      console.log(`wrote ${outputPath}`);
    }
  }
}

await main();
