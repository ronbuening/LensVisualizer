/**
 * Dependency audit gate for CI.
 *
 * Runs `npm audit --json` and fails on any high/critical advisory that is not
 * explicitly allowlisted below. Every allowlist entry must say why the advisory
 * cannot apply to this project, so it can be re-evaluated whenever the
 * dependency graph changes. An entry npm no longer reports at high/critical
 * severity fails the gate, so the PR that picks up a fix (usually a Dependabot
 * bump) also removes the exception. While an entry is still needed, the script
 * warns once npm has a release outside the advisory's vulnerable range, so a
 * published fix does not sit unnoticed behind the allowlist.
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

const inGitHubActions = process.env.GITHUB_ACTIONS === "true";

// Under GitHub Actions these lines become annotations on the run summary and
// the PR's Checks tab; elsewhere they print as plain text.
function annotate(level, message) {
  const line = inGitHubActions ? `::${level}::${message}` : `${level}: ${message}`;
  (level === "error" ? console.error : console.log)(line);
}

function npmView(args) {
  return execFileSync("npm", ["view", ...args], { encoding: "utf8" }).trim();
}

// npm audit gives the vulnerable range but not the patched version, so a fix
// counts as published once the package's latest release falls outside that
// range. Returns that release, or null while latest is still vulnerable.
function publishedFix(advisory) {
  try {
    const latest = npmView([advisory.name, "version"]);
    const vulnerable = JSON.parse(npmView([`${advisory.name}@${advisory.range}`, "version", "--json"]) || "[]");
    return [vulnerable].flat().includes(latest) ? null : latest;
  } catch {
    annotate("warning", `could not check npm for a fixed ${advisory.name}; skipped that check.`);
    return null;
  }
}

let failed = false;
for (const [id, advisory] of advisories) {
  if (!FAIL_SEVERITIES.has(advisory.severity)) continue;
  const reason = ALLOWLIST.get(id);
  if (reason) {
    console.log(`allowlisted ${id} (${advisory.severity}) ${advisory.name}: ${advisory.title}`);
    console.log(`  reason: ${reason}`);
    const fix = publishedFix(advisory);
    if (fix) {
      annotate(
        "warning",
        `${advisory.name} ${fix} is out of range ${advisory.range} for allowlisted ${id}; ` +
          "update the lockfile to pick it up, then remove the allowlist entry.",
      );
    }
    continue;
  }
  failed = true;
  console.error(`FAIL ${id} (${advisory.severity}) ${advisory.name}: ${advisory.title}`);
  console.error(`  ${advisory.url}`);
}

for (const id of ALLOWLIST.keys()) {
  if (!FAIL_SEVERITIES.has(advisories.get(id)?.severity)) {
    failed = true;
    annotate(
      "error",
      `allowlist entry ${id} is no longer reported at high/critical severity; ` +
        "remove it from scripts/audit-dependencies.mjs.",
    );
  }
}

if (failed) {
  console.error("\nDependency audit failed: fix the advisories or allowlist entries above.");
  process.exit(1);
}
console.log("Dependency audit passed: no unallowlisted high/critical advisories.");
