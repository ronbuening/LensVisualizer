import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    coverage: {
      provider: "v8",
      include: ["src/optics/**"],
      reporter: ["text", "html"],
      reportsDirectory: "coverage",
    },
  },
});
