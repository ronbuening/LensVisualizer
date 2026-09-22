/** Read-only MTF eligibility census. Run with the project's TS specifier hook. */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { assessMtfSupport } from "../src/optics/analysis/mtfSupport.ts";

const counts = {};
for (const file of readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort()) {
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  if (data.visible === false) continue;
  const L = buildLens(data);
  const support = assessMtfSupport(prepareRuntimeState(L, 0, 0), {
    method: "geometric",
    spectrum: process.argv.includes("--cdf") ? "cdf" : "reference",
    pupilSemiDiameterMm: L.EP.epSD,
    stopSemiDiameterMm: L.stopPhysSD,
  });
  const key = support.reason ?? "candidate";
  counts[key] = (counts[key] ?? 0) + 1;
}
console.log(JSON.stringify(counts, null, 2));
