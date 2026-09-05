/** Explicit glass-report writer/checker. Rendering and regression assertions are shared with the tests. */
import { build } from "vite";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
if (args.some((arg) => arg !== "--check")) throw new Error("Usage: npm run generate:glass-reports -- [--check]");
const check = args.includes("--check");
const root = join(import.meta.dirname, "..");
const outDir = mkdtempSync(join(tmpdir(), "lens-glass-reports-"));
try {
  await build({
    configFile: false,
    logLevel: "warn",
    build: {
      ssr: join(root, "scripts/glass-reports/generateGlassReports.ts"),
      outDir,
      emptyOutDir: true,
      rolldownOptions: { output: { format: "es" } },
    },
  });
  const { generateGlassReports } = await import(pathToFileURL(join(outDir, "generateGlassReports.js")).href);
  const reports = generateGlassReports();
  for (const [relativePath, content] of Object.entries(reports)) {
    const path = join(root, relativePath);
    if (check) {
      if (readFileSync(path, "utf8") !== content)
        throw new Error(`${relativePath} is stale; run npm run generate:glass-reports`);
    } else {
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content, "utf8");
    }
  }
  console.log(
    `${check ? "Verified" : "Generated"} ${Object.keys(reports).length} glass reports using one catalog inventory.`,
  );
} finally {
  rmSync(outDir, { recursive: true, force: true });
}
