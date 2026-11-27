/**
 * Post-merge refresh of everything that is computed from the whole catalog and committed: the reports
 * under agent_docs/generated/ and the README lens count. It is their only writer; pull requests never
 * commit them (agent_docs/decisions.md, 2026-11-27).
 *
 * `.github/workflows/refresh-reports.yml` runs this on main after each merge and commits what it
 * changes. Steps:
 *   1. `npm run generate:metadata` (organizes lens data and writes src/generated/);
 *   2. every report generator with REPORTS_OUTPUT=tracked; the MTF chart regression refreshes only its
 *      Status line here, because its full run takes over half an hour;
 *   3. the README "visible lens pages" count, from src/generated/build-metadata.json.
 * With `--mtf` it runs the full MTF chart regression instead, and only when that report reads STALE
 * (`--force` runs it regardless).
 *
 * Usage: npm run refresh:reports [-- --mtf [--force]]
 */
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const TRACKED = { ...process.env, REPORTS_OUTPUT: "tracked" };
const REPORTS_CONFIG = ["vitest", "run", "--config", "vitest.reports.config.js"];
const MTF_REPORT = "agent_docs/generated/mtf-chart-regression.generated.md";
const BUILD_METADATA = "src/generated/build-metadata.json";
const README = "README.md";
/* The same line the pull-request guard in .github/workflows/quality.yml refuses to see changed. */
const README_COUNT_LINE = /^(- )`\d+`( visible lens pages are currently published)/m;
/* The full MTF run took 38 minutes on one core of a 4-vCPU container (2026-11-27), past the report's
 * 30-minute default; a CI job has room to wait. */
const MTF_TIMEOUT_MINUTES = "120";

function run(command, args, env = process.env) {
  console.log(`\n$ ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, { stdio: "inherit", env });
  if (result.status !== 0) {
    console.error(`refresh:reports: \`${command} ${args.join(" ")}\` failed (exit ${result.status ?? result.signal}).`);
    process.exit(result.status ?? 1);
  }
}

function syncReadmeCount() {
  const { lensKeys } = JSON.parse(readFileSync(BUILD_METADATA, "utf8"));
  const readme = readFileSync(README, "utf8");
  if (!README_COUNT_LINE.test(readme)) throw new Error(`${README} has no "visible lens pages" count line to update.`);
  const updated = readme.replace(README_COUNT_LINE, `$1\`${lensKeys.length}\`$2`);
  if (updated === readme) return;
  writeFileSync(README, updated);
  console.log(`refresh:reports: README lens count set to ${lensKeys.length}.`);
}

const mtfIsStale = () => /^Status: STALE/m.test(readFileSync(MTF_REPORT, "utf8"));

const args = process.argv.slice(2);
run("npm", ["run", "generate:metadata"]);

if (args.includes("--mtf")) {
  run("npx", [...REPORTS_CONFIG, "mtfChartRegression"], TRACKED);
  if (!args.includes("--force") && !mtfIsStale()) {
    console.log("refresh:reports: the MTF chart regression is current; nothing to run.");
  } else {
    run("npx", [...REPORTS_CONFIG, "mtfChartRegression"], {
      ...TRACKED,
      MTF_CHART_REPORT: "1",
      MTF_CHART_TIMEOUT_MINUTES: MTF_TIMEOUT_MINUTES,
    });
  }
} else {
  run("npx", REPORTS_CONFIG, TRACKED);
  syncReadmeCount();
}
