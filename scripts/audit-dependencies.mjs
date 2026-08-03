/**
 * Dependency audit gate for CI.
 *
 * Runs `npm audit --json` and fails on any high/critical advisory that is not
 * explicitly allowlisted below. Every allowlist entry must say why the advisory
 * cannot apply to this project, so it can be re-evaluated whenever the
 * dependency graph changes. The script also flags allowlist entries that npm no
 * longer reports, so stale exceptions get removed instead of lingering.
 */
import { execFileSync } from "node:child_process";

const ALLOWLIST = new Map();

const FAIL_SEVERITIES = new Set(["high", "critical"]);

function runNpmAudit() {
  try {
    return execFileSync("npm", ["audit", "--json"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    // npm audit exits non-zero whenever vulnerabilities exist; the report is
    // still on stdout.
    if (error.stdout) return error.stdout;
    throw error;
  }
}

const report = JSON.parse(runNpmAudit());

// Each vulnerable package lists its advisories as objects in `via`; plain
// strings there are just chain links to other vulnerable packages.
const advisories = new Map();
for (const vulnerability of Object.values(report.vulnerabilities ?? {})) {
  for (const via of vulnerability.via ?? []) {
    if (typeof via !== "object" || !via.url) continue;
    advisories.set(via.url.split("/").pop(), via);
  }
}

let failed = false;
for (const [id, advisory] of advisories) {
  if (!FAIL_SEVERITIES.has(advisory.severity)) continue;
  const reason = ALLOWLIST.get(id);
  if (reason) {
    console.log(`allowlisted ${id} (${advisory.severity}) ${advisory.name}: ${advisory.title}`);
    console.log(`  reason: ${reason}`);
    continue;
  }
  failed = true;
  console.error(`FAIL ${id} (${advisory.severity}) ${advisory.name}: ${advisory.title}`);
  console.error(`  ${advisory.url}`);
}

for (const id of ALLOWLIST.keys()) {
  if (!advisories.has(id)) {
    console.log(`note: allowlist entry ${id} is no longer reported by npm audit; remove it.`);
  }
}

if (failed) {
  console.error("\nnpm audit found high/critical advisories that are not allowlisted.");
  process.exit(1);
}
console.log("Dependency audit passed: no unallowlisted high/critical advisories.");
