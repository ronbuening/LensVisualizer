import { defineConfig } from "vitest/config";
import baseConfig, { TOOLING_TESTS } from "./vite.config.js";

const CONVERSION_CORPUS_TEST = "__tests__/scripts/convertLensDataCorpus.test.ts";

/* Tests of manual-only dev tooling, excluded from `npm test`; run with `npm run test:tooling`.
 * The base config is overridden rather than merged: mergeConfig would concatenate `include` and
 * keep the base `exclude`, which lists these same files. */
export default defineConfig((env) => {
  const base = baseConfig(env);
  return {
    ...base,
    test: {
      ...base.test,
      exclude: base.test.exclude.filter((pattern) => !TOOLING_TESTS.includes(pattern)),
      // Keep includes on the projects: inherited include arrays are concatenated by Vite.
      projects: [
        {
          extends: true,
          test: {
            name: "tooling",
            include: TOOLING_TESTS,
            exclude: [CONVERSION_CORPUS_TEST],
          },
        },
        ...Array.from({ length: 4 }, (_, index) => ({
          extends: true,
          test: {
            name: `conversion-${index}`,
            include: [CONVERSION_CORPUS_TEST],
            provide: { conversionCorpusShard: { index, count: 4 } },
          },
        })),
      ],
    },
  };
});
