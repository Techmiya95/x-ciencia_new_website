/**
 * Vite config for building a static SPA for GitHub Pages.
 * This bypasses TanStack Start's SSR build and produces a plain
 * index.html + JS/CSS bundle that works on static hosting.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist-static",
    emptyDirBeforeWrite: true,
  },
});
