import { defineConfig } from "vitest/config";
import baseConfig from "./vite.config.js";

/* Report generators (reports/*.report.ts) never run in `npm test`. `npm run generate:reports` and its per-report
 * aliases write a gitignored `.reports/` preview (compare it with `npm run reports:diff`); only the post-merge
 * `npm run refresh:reports` sets REPORTS_OUTPUT=tracked and rewrites agent_docs/generated/ (reports/reportOutput.ts).
 * The base config is overridden rather than merged: mergeConfig would concatenate `include`. */
export default defineConfig((env) => {
  const base = baseConfig(env);
  return {
    ...base,
    test: {
      ...base.test,
      projects: undefined,
      include: ["reports/**/*.report.ts"],
      globalSetup: ["reports/clearReportPreview.ts"],
    },
  };
});
