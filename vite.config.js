import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",
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
    exclude: [...configDefaults.exclude, "**/.claude/**"],
    coverage: {
      provider: "v8",
      // Measured before the 2026-09-04 accuracy work. Never lower these to accommodate a regression.
      thresholds: { statements: 91.88, branches: 82.9, functions: 93.72, lines: 94.58 },
      include: [
        "src/optics/**/*.{ts,tsx}",
        "src/utils/**/*.{ts,tsx}",
        "src/pages/**/*.{ts,tsx}",
        "src/routes/**/*.{ts,tsx}",
        "src/components/**/*.{ts,tsx}",
        "src/comparison/**/*.{ts,tsx}",
        // This helper was measured at its former __tests__/src/optics path. Preserve its coverage after moving it.
        "scripts/glass-reports/glassScanLib.ts",
      ],
      exclude: [
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
