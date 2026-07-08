import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",
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
    coverage: {
      provider: "v8",
      include: [
        "src/optics/**",
        "src/utils/**",
        "src/pages/**",
        "src/routes/**",
        "src/components/**",
        "src/comparison/**",
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
