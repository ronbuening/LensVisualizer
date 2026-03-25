import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    coverage: {
      provider: "v8",
      include: ["src/optics/**", "src/utils/**"],
      reporter: ["text", "html"],
      reportsDirectory: "coverage",
    },
  },
});
