import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    coverage: {
      provider: "v8",
      include: ["src/optics/**", "src/utils/**", "src/pages/**", "src/routes/**"],
      reporter: ["text", "html"],
      reportsDirectory: "coverage",
    },
  },
});
