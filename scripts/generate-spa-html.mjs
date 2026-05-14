/**
 * Post-build script for GitHub Pages static SPA deployment.
 * Copies 404.html (SPA fallback for client-side routing).
 */
import { copyFileSync } from "fs";
import { join } from "path";

const outDir = join(process.cwd(), "dist-static");

// Create 404.html as a copy of index.html for SPA client-side routing on GitHub Pages
copyFileSync(join(outDir, "index.html"), join(outDir, "404.html"));

console.log("✅ Created 404.html (SPA routing fallback) in dist-static/");
