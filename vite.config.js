import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

/* Tests of manual-only dev tooling (the benchmark harness and the audit-script npm entries).
 * `npm test` skips them; `npm run test:tooling` (vitest.tooling.config.js) runs them. */
export const TOOLING_TESTS = [
  "__tests__/src/benchmarks/**/*.test.ts",
  "__tests__/scripts/auditImageCircle.test.ts",
  "__tests__/scripts/benchmarkOpticsRenderingScript.test.ts",
];

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",
  /* Cloudflare Pages (CF_PAGES=1) has dropped the ~900-line per-asset build
   * listing mid-stream and then failed the build stage with "an internal error
   * occurred", so keep the client build quiet there. Warnings and errors still
   * print; GitHub Actions and local builds keep the full listing. */
  logLevel: process.env.CF_PAGES ? "warn" : undefined,
  /* Honor an externally assigned dev-server port (e.g. preview tooling); Vite ignores PORT by default. */
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
  build: {
    /* Client-only vendor chunking (rolldown). The SSR prerender build keeps
     * default chunking — it is never shipped to browsers. Group order matters:
     * modules land in the first matching group, so framework chunks come
     * before the markdown toolchain (which depends on react). */
    rolldownOptions: isSsrBuild
      ? {}
      : {
          output: {
            codeSplitting: {
              groups: [
                { name: "vendor-react", test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
                { name: "vendor-router", test: /node_modules[\\/]react-router[\\/]/ },
                { name: "vendor-katex", test: /node_modules[\\/](katex|rehype-katex)[\\/]/ },
                {
                  name: "vendor-markdown",
                  test: /node_modules[\\/](react-markdown|remark-[^\\/]+|rehype-[^\\/]+|micromark[^\\/]*|mdast-[^\\/]+|unist-[^\\/]+|unified|hast-[^\\/]+|hastscript|vfile[^\\/]*|property-information|space-separated-tokens|comma-separated-tokens|character-entities[^\\/]*|decode-named-character-reference|trim-lines|bail|trough|devlop|zwitch|ccount|longest-streak|markdown-table|escape-string-regexp|html-url-attributes|stringify-entities|web-namespaces|is-plain-obj)[\\/]/,
                },
              ],
            },
          },
        },
  },
  test: {
    /* threads spawn cheaper than the default forks pool; measured ~5% faster
     * with the full suite green. */
    pool: "threads",
    /* Full-catalog sweeps legitimately exceed the 5s default. Lives here so
     * ad-hoc `npx vitest run <file>` behaves like `npm test` (the npm scripts
     * used to pass --testTimeout 30000 on the CLI). */
    testTimeout: 30000,
    /* Report generators live in reports/*.report.ts, outside the default *.test.* pattern;
     * `npm run generate:reports` (vitest.reports.config.js) runs them. */
    exclude: [...configDefaults.exclude, "**/.claude/**", ...TOOLING_TESTS],
    coverage: {
      provider: "v8",
      /* Source files only: a bare `**` also pulled in each folder's readme.md, which the
       * remapper then failed to parse. */
      include: [
        "src/optics/**/*.{ts,tsx}",
        "src/utils/**/*.{ts,tsx}",
        "src/pages/**/*.{ts,tsx}",
        "src/routes/**/*.{ts,tsx}",
        "src/components/**/*.{ts,tsx}",
        "src/comparison/**/*.{ts,tsx}",
      ],
      exclude: [
        /* The src/** globs also matched the mirrored helpers under __tests__/src/ (fixtures, harnesses). */
        "__tests__/**",
        "src/comparison/comparisonTypes.ts",
        "src/components/diagram/diagramSvgTypes.ts",
        "src/pages/lensIndex/types.ts",
        "src/**/types.ts",
        "src/**/*Types.ts",
        "src/**/index.ts",
        "src/**/styles.ts",
        "src/components/layout/lensDiagram/panelModel.ts",
        "src/optics/buildLens.ts",
        "src/optics/cardinalElements.ts",
        "src/optics/diagramGeometry.ts",
        "src/optics/optics.ts",
        "src/optics/projection.ts",
      ],
      reporter: ["text", "html", "json-summary"],
      reportsDirectory: "coverage",
    },
  },
}));
