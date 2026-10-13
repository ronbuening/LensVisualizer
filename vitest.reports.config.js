import { defineConfig } from "vitest/config";
import baseConfig from "./vite.config.js";

/* Report generators (reports/*.report.ts) rewrite the committed files under agent_docs/generated/.
 * They run only through `npm run generate:reports` and its per-report aliases, never in `npm test`.
 * The base config is overridden rather than merged: mergeConfig would concatenate `include`. */
export default defineConfig((env) => {
  const base = baseConfig(env);
  return { ...base, test: { ...base.test, include: ["reports/**/*.report.ts"] } };
});
