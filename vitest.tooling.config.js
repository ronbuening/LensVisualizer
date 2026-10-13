import { defineConfig } from "vitest/config";
import baseConfig, { TOOLING_TESTS } from "./vite.config.js";

/* Tests of manual-only dev tooling, excluded from `npm test`; run with `npm run test:tooling`.
 * The base config is overridden rather than merged: mergeConfig would concatenate `include` and
 * keep the base `exclude`, which lists these same files. */
export default defineConfig((env) => {
  const base = baseConfig(env);
  return {
    ...base,
    test: {
      ...base.test,
      include: TOOLING_TESTS,
      exclude: base.test.exclude.filter((pattern) => !TOOLING_TESTS.includes(pattern)),
    },
  };
});
