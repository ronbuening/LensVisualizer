import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  /* Honor an externally assigned dev-server port (e.g. preview tooling); Vite ignores PORT by default. */
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
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
});
